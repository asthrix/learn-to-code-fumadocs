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
      <main className='min-h-screen bg-background'>
         <div className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
            {/* Back Button */}
            <Link
               href='/'
               className='group mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary'
            >
               <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
               Back to home
            </Link>

            {/* Header */}
            <header className='mb-8 text-center'>
               <h1 className='mb-3 text-4xl font-bold text-foreground'>
                  Complete Your Purchase
               </h1>
               <p className='text-lg text-muted-foreground'>
                  Get lifetime access to our complete course library
               </p>
            </header>

            {/* Main Content Grid */}
            <div className='grid gap-8 lg:grid-cols-3'>
               {/* Left Column - Form */}
               <div className='lg:col-span-2'>
                  {isConfirmed ? (
                     <SuccessMessage selectedPlan={selectedPlan} />
                  ) : (
                     <CheckoutForm
                        selectedPlanSlug={selectedPlanSlug}
                        onPlanSelect={handlePlanSelect}
                        onSubmit={handleSubmit}
                        selectedPlan={selectedPlan}
                        isProcessing={isProcessing}
                     />
                  )}
               </div>

               {/* Right Column - Summary */}
               <aside className='space-y-6'>
                  <CoursesSummary courses={filteredCourses} selectedPlan={selectedPlan} />
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

interface CheckoutFormProps {
   selectedPlanSlug?: string;
   onPlanSelect: (slug?: string) => void;
   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
   selectedPlan?: PricingPlan;
   isProcessing: boolean;
}

function CheckoutForm({
   selectedPlanSlug,
   onPlanSelect,
   onSubmit,
   selectedPlan,
   isProcessing,
}: CheckoutFormProps) {
   return (
      <form onSubmit={onSubmit} className='space-y-8'>
         {/* Plan Selection */}
         <FormSection title='Choose Your Plan'>
            <div className='space-y-4'>
               {pricingPlans.map((plan) => {
                  const slug = toPlanSlug(plan.name);
                  return (
                     <PlanCard
                        key={slug}
                        plan={plan}
                        slug={slug}
                        selected={slug === selectedPlanSlug}
                        onSelect={() => onPlanSelect(slug)}
                     />
                  );
               })}
            </div>
         </FormSection>

         {/* Contact Information */}
         <FormSection title='Contact Information'>
            <div className='grid gap-4 sm:grid-cols-2'>
               <InputField
                  id='fullName'
                  label='Full Name'
                  icon={User}
                  placeholder='John Doe'
                  required
               />
               <InputField
                  id='email'
                  label='Email'
                  type='email'
                  icon={Mail}
                  placeholder='john@example.com'
                  required
               />
            </div>
            <InputField
               id='company'
               label='Company (Optional)'
               icon={Building2}
               placeholder='Company Name'
            />
         </FormSection>

         {/* Payment Information */}
         <FormSection title='Payment Details'>
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
            <p className='text-xs text-muted-foreground'>
               Payments are securely processed by Stripe
            </p>
         </FormSection>

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
               : "Select a plan to continue"}
         </Button>
      </form>
   );
}

// ============================================================================
// Reusable UI Components
// ============================================================================

interface FormSectionProps {
   title: string;
   children: React.ReactNode;
}

function FormSection({ title, children }: FormSectionProps) {
   return (
      <section className='space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm'>
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
                  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm",
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

interface PlanCardProps {
   plan: PricingPlan;
   slug: string;
   selected: boolean;
   onSelect: () => void;
}

function PlanCard({ plan, slug, selected, onSelect }: PlanCardProps) {
   return (
      <label
         htmlFor={`plan-${slug}`}
         className={cn(
            "block cursor-pointer rounded-xl border bg-card p-5 transition-all",
            "hover:border-primary/50 hover:shadow-md",
            selected
               ? "border-primary bg-primary/5 shadow-md ring-2 ring-primary/20"
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
            <div className='flex-1 space-y-3'>
               <div className='flex items-center gap-3'>
                  <h3 className='text-lg font-bold text-foreground'>{plan.name}</h3>
                  {plan.highlighted && (
                     <span className='rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground'>
                        Popular
                     </span>
                  )}
               </div>
               <p className='text-sm leading-relaxed text-muted-foreground'>
                  {plan.description}
               </p>
               <ul className='space-y-2'>
                  {plan.features.map((feature) => (
                     <li
                        key={feature}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                     >
                        <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                        <span>{feature}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className='text-right'>
               <p className='text-3xl font-bold text-foreground'>{plan.price}</p>
               <p className='mt-1 text-xs text-muted-foreground'>{plan.cadence}</p>
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
}

function CoursesSummary({ courses, selectedPlan }: CoursesSummaryProps) {
   const totalModules = courses.reduce((sum, course) => sum + course.modules, 0);

   return (
      <div className='space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm'>
         <div className='flex items-center gap-2'>
            <BookOpen className='h-5 w-5 text-primary' />
            <h2 className='text-lg font-semibold text-foreground'>
               What&apos;s Included
            </h2>
         </div>

         {/* Plan info */}
         {selectedPlan && (
            <div className='rounded-lg bg-primary/5 p-3 text-sm'>
               <p className='font-semibold text-foreground'>{selectedPlan.name}</p>
               <p className='mt-1 text-xs text-muted-foreground'>
                  {selectedPlan.name === "Starter" 
                     ? "Access to HTML & CSS foundations"
                     : selectedPlan.name === "Pro Builder"
                     ? "Full access to all current courses"
                     : "Full access to all courses + team features"}
               </p>
            </div>
         )}

         {/* Course List */}
         <div className='space-y-3 border-b border-border pb-4'>
            {courses.map((course) => (
               <div
                  key={course.id}
                  className='flex items-start gap-3 rounded-lg bg-muted/30 p-3'
               >
                  <span className='text-2xl'>{course.icon}</span>
                  <div className='flex-1'>
                     <p className='font-medium text-foreground'>{course.title}</p>
                     <p className='text-xs text-muted-foreground'>
                        {course.modules} modules · {course.duration}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         {/* Summary Stats */}
         <div className='grid grid-cols-2 gap-3 border-b border-border pb-4'>
            <div className='rounded-lg bg-muted/30 p-3 text-center'>
               <p className='text-2xl font-bold text-primary'>{courses.length}</p>
               <p className='text-xs text-muted-foreground'>Courses</p>
            </div>
            <div className='rounded-lg bg-muted/30 p-3 text-center'>
               <p className='text-2xl font-bold text-primary'>{totalModules}</p>
               <p className='text-xs text-muted-foreground'>Modules</p>
            </div>
            <div className='rounded-lg bg-muted/30 p-3 text-center'>
               <p className='text-2xl font-bold text-primary'>100+</p>
               <p className='text-xs text-muted-foreground'>Projects</p>
            </div>
            <div className='rounded-lg bg-muted/30 p-3 text-center'>
               <p className='text-2xl font-bold text-primary'>∞</p>
               <p className='text-xs text-muted-foreground'>Lifetime Access</p>
            </div>
         </div>

         {/* Selected Plan & Total */}
         {selectedPlan ? (
            <div className='space-y-3'>
               <div className='flex items-center justify-between text-sm'>
                  <span className='text-muted-foreground'>Selected Plan:</span>
                  <span className='font-semibold text-foreground'>
                     {selectedPlan.name}
                  </span>
               </div>
               <div className='flex items-center justify-between rounded-lg bg-primary/10 p-3'>
                  <span className='font-semibold text-foreground'>Total:</span>
                  <span className='text-2xl font-bold text-primary'>
                     {selectedPlan.price}
                  </span>
               </div>
               <p className='text-xs text-center text-muted-foreground'>
                  {selectedPlan.cadence}
               </p>
            </div>
         ) : (
            <p className='text-center text-sm text-muted-foreground'>
               Select a plan to see pricing
            </p>
         )}
      </div>
   );
}

function TrustBadges() {
   return (
      <div className='space-y-3 rounded-xl border border-border bg-card p-6 shadow-sm'>
         <div className='flex items-center gap-2'>
            <ShieldCheck className='h-5 w-5 text-primary' />
            <h3 className='font-semibold text-foreground'>Secure Checkout</h3>
         </div>
         <ul className='space-y-2'>
            {TRUST_SIGNALS.map((signal) => (
               <li
                  key={signal}
                  className='flex items-start gap-2 text-sm text-muted-foreground'
               >
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
   selectedPlan?: PricingPlan;
}

function SuccessMessage({ selectedPlan }: SuccessMessageProps) {
   return (
      <div className='rounded-xl border border-border bg-card p-8 text-center shadow-sm'>
         <div className='mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10'>
            <CheckCircle2 className='h-10 w-10 text-primary' />
         </div>
         <h2 className='mb-2 text-3xl font-bold text-foreground'>
            Welcome Aboard! 🎉
         </h2>
         <p className='mb-4 text-muted-foreground'>
            Your payment has been processed successfully
         </p>
         {selectedPlan && (
            <div className='mb-6 rounded-lg bg-muted/30 p-4'>
               <p className='text-sm text-muted-foreground'>
                  Plan: <span className='font-semibold text-foreground'>{selectedPlan.name}</span>
               </p>
               <p className='mt-1 text-2xl font-bold text-primary'>
                  {selectedPlan.price}
               </p>
            </div>
         )}
         <p className='mb-6 text-sm text-muted-foreground'>
            You now have lifetime access to all courses. Check your email for login details.
         </p>
         <div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
            <Link
               href='/courses'
               className='inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl'
            >
               Browse All Courses
            </Link>
            <Link
               href='/'
               className='inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted'
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
