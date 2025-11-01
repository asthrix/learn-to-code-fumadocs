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
      <main className='min-h-screen bg-background'>
         <div className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
            {/* Back Button */}
            <Link
               href={`/courses/${course.id}`}
               className='group mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary'
            >
               <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
               Back to course
            </Link>

            {/* Header */}
            <header className='mb-8 text-center'>
               <h1 className='mb-3 text-4xl font-bold text-foreground'>
                  Complete Your Enrollment
               </h1>
               <p className='text-lg text-muted-foreground'>
                  {course.title}
               </p>
            </header>

            {/* Main Content Grid */}
            <div className='grid gap-8 lg:grid-cols-3'>
               {/* Left Column - Contact Form */}
               <div className='lg:col-span-2'>
                  {isConfirmed ? (
                     <SuccessMessage course={course} selectedPlan={selectedPlan} />
                  ) : (
                     <ContactForm
                        onSubmit={handleSubmit}
                        selectedPlan={selectedPlan}
                        isProcessing={isProcessing}
                     />
                  )}
               </div>

               {/* Right Column - Summary with Plan Selection */}
               <aside className='space-y-6'>
                  <OrderSummary
                     course={course}
                     detail={detail}
                     selectedPlan={selectedPlan}
                     planOptions={planOptions}
                     selectedPlanSlug={selectedPlanSlug}
                     onPlanSelect={setSelectedPlanSlug}
                  />
                  <TrustBadges />
               </aside>
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
      <form onSubmit={onSubmit} className='space-y-6'>
         {/* Contact Information */}
         <FormSection title='Your Information'>
            <div className='grid gap-4 sm:grid-cols-2'>
               <InputField
                  id='firstName'
                  label='First Name'
                  icon={User}
                  placeholder='John'
                  required
               />
               <InputField
                  id='lastName'
                  label='Last Name'
                  icon={User}
                  placeholder='Doe'
                  required
               />
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
            <InputField
               id='email'
               label='Email Address'
               type='email'
               icon={Mail}
               placeholder='john@example.com'
               required
               />
            <InputField
               id='phone'
               label='Phone Number (Optional)'
               type='tel'
               icon={Mail}
               placeholder='+91 98765 43210'
               />
               </div>
            <InputField
               id='company'
               label='Company / Organization (Optional)'
               icon={Building2}
               placeholder='Company Name'
            />
         </FormSection>

         {/* Payment Information */}
         <FormSection title='Payment Information'>
            <InputField
               id='cardNumber'
               label='Card Number'
               icon={CreditCard}
               placeholder='1234 5678 9012 3456'
               required
            />
            <div className='grid gap-4 sm:grid-cols-2'>
               <InputField
                  id='expiry'
                  label='Expiry Date'
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
            <div className='flex items-start gap-3 rounded-lg bg-muted/30 p-4'>
               <ShieldCheck className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
               <p className='text-xs text-muted-foreground'>
                  Your payment information is secure and encrypted. We use Stripe for payment processing.
               </p>
            </div>
         </FormSection>

         {/* Submit Button */}
         <Button
            type='submit'
            size='lg'
            className='w-full text-base'
            disabled={!selectedPlan || isProcessing}
         >
            {isProcessing
               ? "Processing Payment..."
               : selectedPlan
               ? `Complete Purchase · ${selectedPlan.price}`
               : "Select a plan to continue"}
         </Button>

         <p className='text-center text-xs text-muted-foreground'>
            By completing this purchase, you agree to our Terms of Service and Privacy Policy
         </p>
      </form>
   );
}

// ============================================================================
// Reusable UI Components (DRY Principle)
// ============================================================================

interface FormSectionProps {
   title: string;
   children: React.ReactNode;
}

function FormSection({ title, children }: FormSectionProps) {
   return (
      <section className='space-y-4 rounded-lg border border-border bg-card p-6'>
         <h2 className='text-lg font-semibold text-foreground'>{title}</h2>
         <div className='space-y-4'>{children}</div>
      </section>
   );
}

interface InputFieldProps {
   id: string;
   label: string;
   type?: string;
   icon?: React.ComponentType<{ className?: string }>;
   placeholder?: string;
   required?: boolean;
}

function InputField({
   id,
   label,
   type = "text",
   icon: Icon,
   placeholder,
   required,
}: InputFieldProps) {
   return (
      <div className='space-y-2'>
         <label htmlFor={id} className='text-sm font-medium text-foreground'>
            {label}
            {required && <span className='ml-1 text-destructive'>*</span>}
         </label>
         <div className='relative'>
            {Icon && (
               <Icon className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            )}
            <input
               id={id}
               name={id}
               type={type}
               placeholder={placeholder}
               required={required}
               className={cn(
                  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
                  "text-foreground placeholder:text-muted-foreground",
                  "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                  "transition-colors",
                  Icon && "pl-10"
               )}
            />
         </div>
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
            "block cursor-pointer rounded-lg border bg-card p-4 transition-all",
            "hover:border-primary/50",
            selected
               ? "border-primary bg-primary/5 ring-2 ring-primary/20"
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
                  <div className={cn(
                     "h-4 w-4 rounded-full border-2 flex items-center justify-center transition-colors",
                     selected ? "border-primary bg-primary" : "border-border"
                  )}>
                     {selected && (
                        <div className='h-1.5 w-1.5 rounded-full bg-primary-foreground' />
                     )}
                  </div>
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
               <p className='text-lg font-bold text-foreground'>{tier.price}</p>
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
      <div className='space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm'>
         <div>
            <h2 className='text-lg font-semibold text-foreground'>Order Summary</h2>
            {/* <p className='mt-1 text-sm text-muted-foreground'>{course.title}</p> */}
         </div>

         {/* Plan Selection - Moved to Top */}
         <div className='space-y-3'>
            <h3 className='text-sm font-semibold text-foreground'>Select Plan</h3>
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

         {/* Order Details - Dynamic based on selected plan */}
         {selectedPlan && (
            <div className='space-y-4 border-t border-border pt-4'>
               {/* Course Info Card */}
               {/* <div className='rounded-lg bg-muted/30 p-4'>
                  <div className='flex items-start gap-3'>
                     <span className='text-3xl'>{course.icon}</span>
                     <div className='flex-1'>
                        <h3 className='font-semibold text-foreground'>{course.title}</h3>
                        <p className='mt-1 text-xs text-muted-foreground line-clamp-2'>
                           {detail?.hero.description ?? course.description}
                        </p>
                     </div>
                  </div>
               </div> */}

               {/* Course Metrics - Dynamic Grid */}
               {/* <div className='grid grid-cols-2 gap-2'>
                  {metrics.slice(0, 4).map((metric) => (
                     <div key={metric.label} className='rounded-lg border border-border bg-card p-3 text-center'>
                        <p className='text-xs font-medium text-muted-foreground'>{metric.label}</p>
                        <p className='mt-1 text-base font-bold text-foreground'>{metric.value}</p>
                     </div>
                  ))}
               </div> */}

               {/* What's Included in Plan */}
               <div className='rounded-lg border border-border bg-card p-4'>
                  <h3 className='mb-3 text-sm font-semibold text-foreground'>
                     {selectedPlan.name} includes:
                  </h3>
                  <ul className='space-y-2'>
                     {selectedPlan.features.map((feature, index) => (
                        <li
                           key={feature}
                           className='flex items-start gap-2 text-xs text-muted-foreground'
                        >
                           <CheckCircle2 className='mt-0.5 h-3.5 w-3.5 shrink-0 text-primary' />
                           <span>{feature}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Pricing Breakdown */}
               <div className='space-y-3 border-t border-border pt-4'>
                  <div className='flex items-center justify-between text-sm'>
                     <span className='text-muted-foreground'>Selected Plan:</span>
                     <span className='font-semibold text-foreground'>{selectedPlan.name}</span>
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                     <span className='text-muted-foreground'>Course:</span>
                     <span className='font-medium text-foreground'>{course.title}</span>
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                     <span className='text-muted-foreground'>Price:</span>
                     <span className='font-semibold text-foreground'>{selectedPlan.price}</span>
                  </div>
                  <div className='flex items-center justify-between rounded-lg bg-primary/10 p-3'>
                     <span className='font-bold text-foreground'>Total Due:</span>
                     <span className='text-2xl font-bold text-primary'>
                        {selectedPlan.price}
                     </span>
                  </div>
                  <div className='flex items-center justify-center gap-2 text-xs text-muted-foreground'>
                     <CheckCircle2 className='h-3.5 w-3.5 text-primary' />
                     <span>{selectedPlan.cadence || "One-time payment"} · Lifetime access</span>
                  </div>
               </div>
            </div>
         )}

         {/* No Plan Selected State */}
         {!selectedPlan && (
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
      <div className='space-y-3 rounded-lg border border-border bg-card p-6'>
         <div className='flex items-center gap-2'>
            <ShieldCheck className='h-5 w-5 text-primary' />
            <h3 className='font-semibold text-foreground'>Secure Checkout</h3>
         </div>
         <ul className='space-y-2'>
            {TRUST_SIGNALS.map((signal) => (
               <li key={signal} className='flex items-start gap-2 text-sm text-muted-foreground'>
                  <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                  <span>{signal}</span>
               </li>
            ))}
         </ul>
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
      <div className='rounded-lg border border-border bg-card p-8 text-center'>
         <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
            <CheckCircle2 className='h-8 w-8 text-primary' />
         </div>
         <h2 className='mb-2 text-2xl font-bold text-foreground'>
            Payment Successful!
         </h2>
         <p className='mb-4 text-muted-foreground'>
            Thank you for enrolling in {course.title}
         </p>
         {selectedPlan && (
            <p className='mb-6 text-sm text-muted-foreground'>
               Plan: <span className='font-medium text-foreground'>{selectedPlan.name}</span> ·{" "}
               {selectedPlan.price}
            </p>
         )}
         <div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
            <Link
               href={`/docs/${course.id}`}
               className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
            >
               Start Learning
            </Link>
            <Link
               href='/'
               className='inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted'
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
