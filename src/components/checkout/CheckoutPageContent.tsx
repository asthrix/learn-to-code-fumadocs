"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
   ArrowLeft,
   CheckCircle2,
   ShieldCheck,
   CreditCard,
   Mail,
   User,
   Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import type {
   CourseDetailContent,
   CoursePricingTier,
} from "@/lib/course-detail/types";
import { cn } from "@/lib/utils";

// ============================================================================
// Types
// ============================================================================

interface CheckoutPageContentProps {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   initialPlanSlug?: string;
}

type CheckoutDetailSnapshot = Pick<
   CourseDetailContent,
   "slug" | "hero" | "pricing" | "testimonials"
>;

interface PlanOptionDescriptor {
   tier: CoursePricingTier;
   slug: string;
}

// ============================================================================
// Constants
// ============================================================================

const TRUST_SIGNALS = [
   "14-day full refund guarantee",
   "Lifetime access to all content",
   "Free updates and new modules",
];

// ============================================================================
// Main Component
// ============================================================================

export function CheckoutPageContent({
   course,
   detail,
   initialPlanSlug,
}: CheckoutPageContentProps) {
   const pricingTiers = useMemo(() => detail?.pricing ?? [], [detail]);
   const planOptions = useMemo(
      () =>
         pricingTiers.map((tier) => ({
            tier,
            slug: toPlanSlug(tier.name),
         })),
      [pricingTiers]
   );

   const resolvedInitialSlug = useMemo(() => {
      if (planOptions.length === 0) return undefined;
      if (initialPlanSlug) {
         const normalized = initialPlanSlug.toLowerCase();
         const match = planOptions.find((option) => option.slug === normalized);
         if (match) return match.slug;
      }
      const highlighted = planOptions.find((option) => option.tier.highlighted);
      return highlighted?.slug ?? planOptions[0]?.slug;
   }, [initialPlanSlug, planOptions]);

   const [selectedPlanSlug, setSelectedPlanSlug] = useState(resolvedInitialSlug);
   const [isProcessing, setIsProcessing] = useState(false);
   const [isConfirmed, setIsConfirmed] = useState(false);

   const selectedPlan = useMemo(() => {
      if (!selectedPlanSlug) return undefined;
      return planOptions.find((option) => option.slug === selectedPlanSlug)?.tier;
   }, [planOptions, selectedPlanSlug]);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!selectedPlan) return;

      setIsProcessing(true);
      window.setTimeout(() => {
         setIsProcessing(false);
         setIsConfirmed(true);
      }, 650);
   };

   return (
      <main className='min-h-screen bg-gradient-to-b from-background to-muted/20'>
         <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
            {/* Minimal Header */}
            <div className='mb-12'>
               <Link
                  href={`/courses/${course.id}`}
                  className='group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
               >
                  <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
                  <span>Back to course</span>
               </Link>
            </div>

            {/* Main Content - Side by Side Layout */}
            <div className='grid gap-12 lg:grid-cols-5'>
               {/* Left - Order Summary */}
               <div className='space-y-8 lg:col-span-3'>
                  <div>
                     <h1 className='text-3xl font-bold tracking-tight text-foreground'>
                        {isConfirmed ? "Purchase Complete" : "Your Order"}
                     </h1>
                     <p className='mt-2 text-muted-foreground'>
                        {isConfirmed 
                           ? "Thank you for enrolling in " + course.title
                           : course.title}
                     </p>
                  </div>

                  {!isConfirmed ? (
                     <OrderSummary
                        course={course}
                        detail={detail}
                        selectedPlan={selectedPlan}
                        planOptions={planOptions}
                        selectedPlanSlug={selectedPlanSlug}
                        onPlanSelect={setSelectedPlanSlug}
                     />
                  ) : (
                     <SuccessMessage course={course} selectedPlan={selectedPlan} />
                  )}
               </div>

               {/* Right - Contact Form */}
               {!isConfirmed && (
                  <div className='lg:sticky lg:top-8 lg:self-start lg:col-span-2'>
                     <ContactForm
                        onSubmit={handleSubmit}
                        selectedPlan={selectedPlan}
                        isProcessing={isProcessing}
                     />
                     <TrustBadges />
                  </div>
               )}
            </div>
         </div>
      </main>
   );
}

// ============================================================================
// Form Components
// ============================================================================

interface ContactFormProps {
   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
   selectedPlan?: CoursePricingTier;
   isProcessing: boolean;
}

function ContactForm({
   onSubmit,
   selectedPlan,
   isProcessing,
}: ContactFormProps) {
   return (
      <div className='space-y-8'>
         <form onSubmit={onSubmit} className='space-y-8'>
            {/* Contact Information */}
            <div className='space-y-6'>
               <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                  Contact Details
               </h3>
               <div className='space-y-4'>
                  <div className='grid gap-4 sm:grid-cols-2'>
                     <InputField
                        id='firstName'
                        label='First Name'
                        placeholder='John'
                        required
                     />
                     <InputField
                        id='lastName'
                        label='Last Name'
                        placeholder='Doe'
                        required
                     />
                  </div>
                  <InputField
                     id='email'
                     label='Email'
                     type='email'
                     placeholder='john@example.com'
                     required
                  />
                  <InputField
                     id='phone'
                     label='Phone (Optional)'
                     type='tel'
                     placeholder='+91 98765 43210'
                  />
                  <InputField
                     id='company'
                     label='Company (Optional)'
                     placeholder='Your Company'
                  />
               </div>
            </div>

            {/* Payment Information */}
            <div className='space-y-6 border-t border-border pt-8'>
               <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                  Payment Method
               </h3>
               <div className='space-y-4'>
                  <InputField
                     id='cardNumber'
                     label='Card Number'
                     placeholder='1234 5678 9012 3456'
                     required
                  />
                  <div className='grid gap-4 sm:grid-cols-2'>
                     <InputField
                        id='expiry'
                        label='Expiry'
                        placeholder='MM/YY'
                        required
                     />
                     <InputField
                        id='cvc'
                        label='CVC'
                        placeholder='123'
                        required
                     />
                  </div>
                  
                  {/* Security Badge - Inline */}
                  <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                     <ShieldCheck className='h-4 w-4 text-primary' />
                     <span>Secure payment powered by Stripe</span>
                  </div>
               </div>
            </div>

            {/* Submit Button */}
            <Button
               type='submit'
               size='lg'
               className='w-full'
               disabled={!selectedPlan || isProcessing}
            >
               {isProcessing
                  ? "Processing..."
                  : selectedPlan
                  ? `Complete Purchase · ${selectedPlan.price}`
                  : "Select a plan to continue"}
            </Button>

            <p className='text-center text-xs text-muted-foreground'>
               By continuing, you agree to our Terms of Service
            </p>
         </form>
      </div>
   );
}

// ============================================================================
// Reusable UI Components (DRY Principle)
// ============================================================================

interface InputFieldProps {
   id: string;
   label: string;
   type?: string;
   placeholder?: string;
   required?: boolean;
}

function InputField({
   id,
   label,
   type = "text",
   placeholder,
   required,
}: InputFieldProps) {
   return (
      <div className='space-y-2'>
         <label htmlFor={id} className='text-sm font-medium text-foreground'>
            {label}
            {required && <span className='ml-1 text-destructive'>*</span>}
         </label>
         <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className={cn(
               "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm",
               "text-foreground placeholder:text-muted-foreground",
               "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20",
               "transition-colors"
            )}
         />
      </div>
   );
}

interface MinimalPlanCardProps {
   tier: CoursePricingTier;
   slug: string;
   selected: boolean;
   onSelect: () => void;
}

function MinimalPlanCard({ tier, slug, selected, onSelect }: MinimalPlanCardProps) {
   return (
      <label
         htmlFor={`plan-${slug}`}
         className={cn(
            "block cursor-pointer rounded-lg border-2 bg-card p-4 transition-all",
            "hover:border-primary/50",
            selected
               ? "border-primary bg-primary/5"
               : "border-border"
         )}
      >
         <input
            type='radio'
            id={`plan-${slug}`}
            name='plan'
            value={slug}
            className='sr-only'
            checked={selected}
            onChange={onSelect}
         />
         <div className='flex items-center justify-between gap-3'>
            <div className='flex-1'>
               <div className='flex items-center gap-2'>
                  <h3 className='font-semibold text-foreground'>{tier.name}</h3>
                  {tier.highlighted && (
                     <span className='rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground'>
                        Popular
                     </span>
                  )}
               </div>
               <p className='mt-1 text-xs text-muted-foreground line-clamp-1'>{tier.description}</p>
            </div>
            <div className='text-right'>
               <p className='text-xl font-bold text-foreground'>{tier.price}</p>
               <p className='text-xs text-muted-foreground'>
                  {tier.cadence || "Once"}
               </p>
            </div>
         </div>
      </label>
   );
}

// ============================================================================
// Sidebar Components
// ============================================================================

interface OrderSummaryProps {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   selectedPlan?: CoursePricingTier;
   planOptions: PlanOptionDescriptor[];
   selectedPlanSlug?: string;
   onPlanSelect: (slug?: string) => void;
}

function OrderSummary({ 
   course, 
   detail, 
   selectedPlan,
   planOptions,
   selectedPlanSlug,
   onPlanSelect
}: OrderSummaryProps) {
   const metrics = detail?.hero.metrics ?? [
      { label: "Modules", value: `${course.modules}` },
      { label: "Duration", value: course.duration },
      { label: "Project", value: course.project },
   ];

   return (
      <div className='space-y-8'>
         {/* Plan Selection & Course Info - Side by Side */}
         <div className='grid gap-6 lg:grid-cols-2'>
            {/* Left - Plan Selection */}
            <div className='space-y-4'>
               <div>
                  <h2 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                     Choose Plan
                  </h2>
                  {/* <p className='mt-1 text-xs text-muted-foreground'>
                     Select your preferred option
                  </p> */}
               </div>
               <div className='space-y-3'>
                  {planOptions.map(({ tier, slug }) => (
                     <MinimalPlanCard
                        key={slug}
                        tier={tier}
                        slug={slug}
                        selected={slug === selectedPlanSlug}
                        onSelect={() => onPlanSelect(slug)}
                     />
                  ))}
                  {planOptions.length === 0 && (
                     <div className='rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center text-xs text-muted-foreground'>
                        Pricing options coming soon
                     </div>
                  )}
               </div>
            </div>

            {/* Right - Course Info */}
            {selectedPlan && (
               <div className='space-y-4'>
                  <div>
                     <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                        Course Details
                     </h3>
                  </div>
                  <div className='rounded-lg border border-border bg-card p-4'>
                     <div className='flex items-start gap-3'>
                        <span className='text-3xl'>{course.icon}</span>
                        <div className='flex-1 min-w-0'>
                           <h3 className='font-semibold text-foreground'>{course.title}</h3>
                           <p className='mt-1 text-xs text-muted-foreground line-clamp-2'>
                              {detail?.hero.description ?? course.description}
                           </p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Course Metrics */}
                  <div className='grid grid-cols-3 gap-3'>
                     {metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className='text-center'>
                           <p className='text-lg font-bold text-foreground'>{metric.value}</p>
                           <p className='text-xs text-muted-foreground'>{metric.label}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>

         {/* Order Details - Dynamic based on selected plan */}
         {selectedPlan && (
            <>
               {/* What's Included */}
               <div className='space-y-4'>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                     What's Included
                  </h3>
                  <div className='space-y-2'>
                     {selectedPlan.features.map((feature) => (
                        <div key={feature} className='flex items-start gap-2.5'>
                           <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                           <span className='text-sm text-foreground'>{feature}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Total */}
               <div className='space-y-3 border-t border-border pt-6'>
                  <div className='flex items-center justify-between'>
                     <span className='text-sm text-muted-foreground'>Subtotal</span>
                     <span className='text-sm font-medium text-foreground'>{selectedPlan.price}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                     <span className='text-base font-semibold text-foreground'>Total</span>
                     <span className='text-2xl font-bold text-primary'>{selectedPlan.price}</span>
                  </div>
                  <p className='text-xs text-center text-muted-foreground'>
                     {selectedPlan.cadence || "One-time payment"} • Lifetime access included
                  </p>
               </div>
            </>
         )}

         {/* No Plan Selected State */}
         {!selectedPlan && planOptions.length > 0 && (
            <div className='rounded-lg border border-dashed border-border bg-muted/30 p-6 text-center'>
               <p className='text-sm text-muted-foreground'>
                  Select a plan to see details
               </p>
            </div>
         )}
      </div>
   );
}

function TrustBadges() {
   return (
      <div className='mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground'>
         {TRUST_SIGNALS.map((signal) => (
            <div key={signal} className='flex items-center gap-1.5'>
               <CheckCircle2 className='h-3.5 w-3.5 text-primary' />
               <span>{signal}</span>
            </div>
         ))}
      </div>
   );
}

// ============================================================================
// Success Message Component
// ============================================================================

interface SuccessMessageProps {
   course: Course;
   selectedPlan?: CoursePricingTier;
}

function SuccessMessage({ course, selectedPlan }: SuccessMessageProps) {
   return (
      <div className='space-y-8'>
         <div className='flex items-center justify-center'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-primary/10'>
               <CheckCircle2 className='h-10 w-10 text-primary' />
            </div>
         </div>
         
         <div className='space-y-3 text-center'>
            <h2 className='text-3xl font-bold text-foreground'>
               Payment Successful!
            </h2>
            <p className='text-lg text-muted-foreground'>
               Thank you for enrolling in {course.title}
            </p>
         </div>

         {selectedPlan && (
            <div className='space-y-3 rounded-lg border border-border bg-card p-6'>
               <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                  Payment Details
               </h3>
               <div className='space-y-2 divide-y divide-border'>
                  <div className='flex items-center justify-between py-2'>
                     <span className='text-sm text-muted-foreground'>Plan</span>
                     <span className='text-sm font-medium text-foreground'>{selectedPlan.name}</span>
                  </div>
                  <div className='flex items-center justify-between py-2'>
                     <span className='text-sm text-muted-foreground'>Course</span>
                     <span className='text-sm font-medium text-foreground'>{course.title}</span>
                  </div>
                  <div className='flex items-center justify-between py-2'>
                     <span className='text-sm text-muted-foreground'>Amount Paid</span>
                     <span className='text-lg font-bold text-primary'>{selectedPlan.price}</span>
                  </div>
               </div>
            </div>
         )}

         <div className='flex flex-col gap-3 sm:flex-row'>
            <Link
               href={`/docs/${course.id}`}
               className='flex-1 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
            >
               Start Learning
            </Link>
            <Link
               href='/'
               className='flex-1 inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted'
            >
               Back to Home
            </Link>
         </div>
      </div>
   );
}

// ============================================================================
// Utility Functions
// ============================================================================

function toPlanSlug(name: string): string {
   return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
}
