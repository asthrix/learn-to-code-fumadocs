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
   BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import { pricingPlans, type PricingPlan } from "@/lib/home-content";
import { cn } from "@/lib/utils";

// ============================================================================
// Types
// ============================================================================

interface GeneralCheckoutPageContentProps {
   courses: Course[];
   initialPlanSlug?: string;
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

export function GeneralCheckoutPageContent({
   courses,
   initialPlanSlug,
}: GeneralCheckoutPageContentProps) {
   const resolvedInitialSlug = useMemo(() => {
      if (initialPlanSlug) {
         const match = pricingPlans.find(
            (plan) => toPlanSlug(plan.name) === initialPlanSlug.toLowerCase()
         );
         if (match) return toPlanSlug(match.name);
      }
      const highlighted = pricingPlans.find((plan) => plan.highlighted);
      return highlighted
         ? toPlanSlug(highlighted.name)
         : toPlanSlug(pricingPlans[0]?.name);
   }, [initialPlanSlug]);

   const [selectedPlanSlug, setSelectedPlanSlug] = useState(resolvedInitialSlug);
   const [isProcessing, setIsProcessing] = useState(false);
   const [isConfirmed, setIsConfirmed] = useState(false);

   const selectedPlan = useMemo(() => {
      if (!selectedPlanSlug) return undefined;
      return pricingPlans.find(
         (plan) => toPlanSlug(plan.name) === selectedPlanSlug
      );
   }, [selectedPlanSlug]);

   // Filter courses based on selected plan
   const filteredCourses = useMemo(() => {
      if (!selectedPlan) return courses;
      
      // Starter plan: Only HTML and CSS
      if (selectedPlan.name === "Starter") {
         return courses.filter((course) => 
            course.id === "html" || course.id === "css"
         );
      }
      
      // Pro Builder and Team Studio: All courses
      return courses;
   }, [courses, selectedPlan]);

   const handlePlanSelect = (slug?: string) => {
      if (slug) setSelectedPlanSlug(slug);
   };

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
                  href='/'
                  className='group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
               >
                  <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
                  <span>Back</span>
               </Link>
            </div>

            {/* Main Content - Side by Side Layout */}
            <div className='grid gap-12 lg:grid-cols-5'>
               {/* Left - Order Summary (Swapped) */}
               <div className='space-y-8 col-span-3'>
                  <div>
                     <h1 className='text-3xl font-bold tracking-tight text-foreground'>
                        {isConfirmed ? "Purchase Complete" : "Your Order"}
                     </h1>
                     <p className='mt-2 text-muted-foreground'>
                        {isConfirmed 
                           ? "Thank you for your purchase"
                           : "Review your selection and complete checkout"}
                     </p>
                  </div>

                  {!isConfirmed ? (
                     <CoursesSummary 
                        courses={filteredCourses} 
                        selectedPlan={selectedPlan}
                        selectedPlanSlug={selectedPlanSlug}
                        onPlanSelect={handlePlanSelect}
                     />
                  ) : (
                     <SuccessMessage selectedPlan={selectedPlan} />
                  )}
               </div>

               {/* Right - Contact Form */}
               {!isConfirmed && (
                  <div className='lg:sticky lg:top-8 lg:self-start col-span-2'>
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
   selectedPlan?: PricingPlan;
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
                  ? `Pay ${selectedPlan.price}`
                  : "Select a plan"}
            </Button>
         </form>

         {/* Trust Badge */}
         <div className='flex items-center justify-center gap-2 text-xs text-muted-foreground'>
            <ShieldCheck className='h-4 w-4 text-primary' />
            <span>Secure payment via Stripe</span>
         </div>
      </div>
   );
}

// ============================================================================
// Reusable UI Components
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
      <div className='space-y-1.5'>
         <label htmlFor={id} className='text-sm font-medium text-foreground'>
            {label}
         </label>
         <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className='w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
         />
      </div>
   );
}

interface MinimalPlanCardProps {
   plan: PricingPlan;
   slug: string;
   selected: boolean;
   onSelect: () => void;
}

function MinimalPlanCard({ plan, slug, selected, onSelect }: MinimalPlanCardProps) {
   return (
      <label
         htmlFor={`plan-${slug}`}
         className={cn(
            "block cursor-pointer rounded-xl border-2 bg-card p-4 transition-all",
            "hover:border-primary/40",
            selected
               ? "border-primary shadow-sm"
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
         <div className='flex items-start justify-between gap-4'>
            <div className='flex-1 space-y-1'>
               <div className='flex items-center gap-2'>
                  <h3 className='font-semibold text-foreground'>{plan.name}</h3>
                  {plan.highlighted && (
                     <span className='rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary'>
                        Popular
                     </span>
                  )}
               </div>
               <p className='text-xs text-muted-foreground'>{plan.description}</p>
            </div>
            <div className='flex flex-col items-end'>
               <p className='text-xl font-bold text-foreground'>{plan.price}</p>
               <p className='text-xs text-muted-foreground'>{plan.cadence}</p>
            </div>
         </div>
      </label>
   );
}

// ============================================================================
// Sidebar Components
// ============================================================================

interface CoursesSummaryProps {
   courses: Course[];
   selectedPlan?: PricingPlan;
   selectedPlanSlug?: string;
   onPlanSelect: (slug?: string) => void;
}

function CoursesSummary({ 
   courses, 
   selectedPlan,
   selectedPlanSlug,
   onPlanSelect 
}: CoursesSummaryProps) {
   const totalModules = courses.reduce((sum, course) => sum + course.modules, 0);

   return (
      <div className='space-y-8'>
         {/* Plan Selection & Courses - Side by Side */}
         <div className='grid gap-6 lg:grid-cols-2'>
            {/* Left - Plan Selection */}
            <div className='space-y-4 col-span-1'>
               <div>
                  <h2 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                     Choose Plan
                  </h2>
                  {/* <p className='mt-1 text-xs text-muted-foreground'>
                     Select the plan that fits your needs
                  </p> */}
               </div>
               <div className='space-y-3'>
                  {pricingPlans.map((plan) => {
                     const slug = toPlanSlug(plan.name);
                     return (
                        <MinimalPlanCard
                           key={slug}
                           plan={plan}
                           slug={slug}
                           selected={slug === selectedPlanSlug}
                           onSelect={() => onPlanSelect(slug)}
                        />
                     );
                  })}
               </div>
            </div>

            {/* Right - Courses */}
            {selectedPlan && (
               <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                     <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                        Courses
                     </h3>
                     <span className='text-xs text-muted-foreground'>{courses.length} total</span>
                  </div>
                  <div className='space-y-2'>
                     {courses.map((course) => (
                        <div
                           key={course.id}
                           className='flex items-center gap-3 rounded-lg border border-border bg-card p-3'
                        >
                           <span className='text-2xl'>{course.icon}</span>
                           <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-foreground truncate'>{course.title}</p>
                              <p className='text-xs text-muted-foreground'>
                                 {course.modules} modules
                              </p>
                           </div>
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

               {/* Stats */}
               {/* <div className='grid grid-cols-4 gap-3'>
                  <div className='text-center'>
                     <p className='text-lg font-bold text-foreground'>{courses.length}</p>
                     <p className='text-xs text-muted-foreground'>Courses</p>
                  </div>
                  <div className='text-center'>
                     <p className='text-lg font-bold text-foreground'>{totalModules}</p>
                     <p className='text-xs text-muted-foreground'>Modules</p>
                  </div>
                  <div className='text-center'>
                     <p className='text-lg font-bold text-foreground'>100+</p>
                     <p className='text-xs text-muted-foreground'>Projects</p>
                  </div>
                  <div className='text-center'>
                     <p className='text-lg font-bold text-foreground'>∞</p>
                     <p className='text-xs text-muted-foreground'>Access</p>
                  </div>
               </div> */}

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
                     {selectedPlan.cadence} • Lifetime access included
                  </p>
               </div>
            </>
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
      <div className='mt-8 space-y-3'>
         {TRUST_SIGNALS.map((signal) => (
            <div
               key={signal}
               className='flex items-center gap-2.5 text-xs text-muted-foreground'
            >
               <CheckCircle2 className='h-4 w-4 shrink-0 text-primary' />
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
   selectedPlan?: PricingPlan;
}

function SuccessMessage({ selectedPlan }: SuccessMessageProps) {
   return (
      <div className='space-y-8'>
         <div className='space-y-4'>
            <div className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
               <CheckCircle2 className='h-8 w-8 text-primary' />
            </div>
            <div>
               <h2 className='text-3xl font-bold text-foreground'>
                  Payment Successful
               </h2>
               <p className='mt-2 text-muted-foreground'>
                  Welcome to your learning journey
               </p>
            </div>
         </div>

         {selectedPlan && (
            <div className='space-y-3 border-t border-b border-border py-6'>
               <div className='flex items-center justify-between'>
                  <span className='text-sm text-muted-foreground'>Plan</span>
                  <span className='font-semibold text-foreground'>{selectedPlan.name}</span>
               </div>
               <div className='flex items-center justify-between'>
                  <span className='text-sm text-muted-foreground'>Amount Paid</span>
                  <span className='text-2xl font-bold text-foreground'>{selectedPlan.price}</span>
               </div>
            </div>
         )}

         <div className='space-y-3'>
            <p className='text-sm text-muted-foreground'>
               Confirmation email has been sent with your access details and next steps.
            </p>
            <div className='flex flex-col gap-3'>
               <Link
                  href='/courses'
                  className='inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90'
               >
                  Start Learning
               </Link>
               <Link
                  href='/'
                  className='inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted'
               >
                  Back to Home
               </Link>
            </div>
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
