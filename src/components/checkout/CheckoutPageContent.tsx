"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import type {
   CourseDetailContent,
   CoursePricingTier,
} from "@/lib/course-detail/types";
import { cn } from "@/lib/utils";

interface CheckoutPageContentProps {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   initialPlanSlug?: string;
}

type CheckoutDetailSnapshot = Pick<
   CourseDetailContent,
   "slug" | "hero" | "pricing" | "testimonials"
>;

export function CheckoutPageContent({
   course,
   detail,
   initialPlanSlug,
}: CheckoutPageContentProps) {
   const pricingTiers = useMemo(() => detail?.pricing ?? [], [detail]);
   const planOptions = useMemo(() => {
      return pricingTiers.map((tier) => ({
         tier,
         slug: toPlanSlug(tier.name),
      }));
   }, [pricingTiers]);

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

   const [selectedPlanSlug, setSelectedPlanSlug] =
      useState(resolvedInitialSlug);
   const [isProcessing, setIsProcessing] = useState(false);
   const [isConfirmed, setIsConfirmed] = useState(false);

   const selectedPlan = useMemo(() => {
      if (!selectedPlanSlug) return undefined;
      return planOptions.find((option) => option.slug === selectedPlanSlug)
         ?.tier;
   }, [planOptions, selectedPlanSlug]);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!selectedPlan) return;

      setIsProcessing(true);
      // Simulate a short async submission before showing confirmation.
      window.setTimeout(() => {
         setIsProcessing(false);
         setIsConfirmed(true);
      }, 700);
   };

   return (
      <main className='relative flex flex-1 flex-col bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.12),_transparent_70%)]' />
         <div className='relative mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6 lg:px-8'>
            <Link
               href={`/courses/${course.id}`}
               className='inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground transition hover:border-secondary/40 hover:text-secondary'
            >
               <ArrowLeft className='h-3.5 w-3.5' /> Back to course overview
            </Link>

            <header className='mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
               <div className='space-y-4'>
                  <span className='inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-secondary/90'>
                     Secure checkout
                  </span>
                  <h1 className='text-3xl font-semibold text-foreground sm:text-4xl'>
                     Complete your enrollment for {course.title}
                  </h1>
                  <p className='max-w-2xl text-sm text-muted-foreground'>
                     {detail?.hero.description ?? course.description}
                  </p>
               </div>

               {selectedPlan && (
                  <div className='rounded-3xl border border-secondary/40 bg-secondary/15 px-6 py-4 text-sm text-secondary/90'>
                     <p className='font-semibold uppercase tracking-[0.28em] text-secondary'>
                        Current plan
                     </p>
                     <p className='mt-2 text-lg font-semibold text-foreground'>
                        {selectedPlan.name}
                     </p>
                     <p className='text-xs text-secondary/80'>
                        {selectedPlan.price} · {selectedPlan.cadence}
                     </p>
                  </div>
               )}
            </header>

            <div className='mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]'>
               <section className='space-y-8 rounded-3xl border border-border bg-card/80 p-8 shadow-[0_25px_60px_-35px_hsl(var(--color-primary)/0.35)] backdrop-blur'>
                  {isConfirmed ? (
                     <CheckoutConfirmation
                        course={course}
                        selectedPlan={selectedPlan}
                     />
                  ) : (
                     <CheckoutForm
                        course={course}
                        planOptions={planOptions}
                        selectedPlanSlug={selectedPlanSlug}
                        onPlanSelect={setSelectedPlanSlug}
                        onSubmit={handleSubmit}
                        isProcessing={isProcessing}
                        selectedPlan={selectedPlan}
                     />
                  )}
               </section>

               <aside className='space-y-6'>
                  <CheckoutSummaryCard
                     course={course}
                     detail={detail}
                     selectedPlan={selectedPlan}
                  />
                  {detail?.testimonials && detail.testimonials.length > 0 && (
                     <CheckoutTestimonial
                        quote={detail.testimonials[0]}
                        fallbackCourseTitle={course.title}
                     />
                  )}
                  <CheckoutGuarantee />
               </aside>
            </div>
         </div>
      </main>
   );
}

interface CheckoutFormProps {
   course: Course;
   planOptions: { tier: CoursePricingTier; slug: string }[];
   selectedPlanSlug?: string;
   onPlanSelect: (slug?: string) => void;
   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
   isProcessing: boolean;
   selectedPlan?: CoursePricingTier;
}

function CheckoutForm({
   planOptions,
   selectedPlanSlug,
   onPlanSelect,
   onSubmit,
   isProcessing,
   selectedPlan,
}: CheckoutFormProps) {
   return (
      <form className='space-y-10' onSubmit={onSubmit}>
         <div className='space-y-6'>
            <div>
               <h2 className='text-lg font-semibold text-foreground'>
                  Choose your plan
               </h2>
               <p className='mt-1 text-sm text-muted-foreground'>
                  Each tier unlocks the full StaySense curriculum with
                  additional support layers as you move up.
               </p>
            </div>

            <div className='space-y-4'>
               {planOptions.map(({ tier, slug }) => (
                  <PlanOption
                     key={slug}
                     tier={tier}
                     slug={slug}
                     selected={slug === selectedPlanSlug}
                     onSelect={() => onPlanSelect(slug)}
                  />
               ))}
               {planOptions.length === 0 && (
                  <p className='rounded-2xl border border-dashed border-border bg-muted/30 p-4 text-sm text-muted-foreground'>
                     Pricing information for this course will be published soon.
                     Join the waitlist to be notified the moment enrollment
                     opens.
                  </p>
               )}
            </div>
         </div>

         <div className='space-y-6'>
            <div>
               <h2 className='text-lg font-semibold text-foreground'>
                  Billing details
               </h2>
               <p className='mt-1 text-sm text-muted-foreground'>
                  We use these details to send invoices and enrollment
                  credentials. You can update them later from your learner
                  dashboard.
               </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
               <Field label='Full name' htmlFor='fullName' required>
                  <input
                     id='fullName'
                     name='fullName'
                     required
                     placeholder='Priya Sharma'
                     className='block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                  />
               </Field>
               <Field label='Email' htmlFor='email' required>
                  <input
                     id='email'
                     name='email'
                     type='email'
                     inputMode='email'
                     autoComplete='email'
                     required
                     placeholder='you@example.com'
                     className='block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                  />
               </Field>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
               <Field label='Company (optional)' htmlFor='company'>
                  <input
                     id='company'
                     name='company'
                     placeholder='Frontier Labs'
                     className='block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                  />
               </Field>
               <Field label='Coupon code' htmlFor='coupon'>
                  <input
                     id='coupon'
                     name='coupon'
                     placeholder='LAUNCHPAD25'
                     className='block w-full rounded-xl border border-dashed border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                  />
               </Field>
            </div>
         </div>

         <div className='space-y-6'>
            <div>
               <h2 className='text-lg font-semibold text-foreground'>
                  Payment method
               </h2>
               <p className='mt-1 text-sm text-muted-foreground'>
                  We support UPI, credit/debit cards, and international payments
                  through Stripe. Your details are encrypted end-to-end.
               </p>
            </div>

            <div className='space-y-4 rounded-3xl border border-border bg-muted/30 p-6'>
               <Field label='Card number' htmlFor='cardNumber' required>
                  <input
                     id='cardNumber'
                     name='cardNumber'
                     required
                     inputMode='numeric'
                     placeholder='4242 4242 4242 4242'
                     className='block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                  />
               </Field>
               <div className='grid gap-4 sm:grid-cols-[2fr_1fr]'>
                  <Field label='Expiry date' htmlFor='expiry' required>
                     <input
                        id='expiry'
                        name='expiry'
                        required
                        placeholder='MM / YY'
                        className='block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                     />
                  </Field>
                  <Field label='CVC' htmlFor='cvc' required>
                     <input
                        id='cvc'
                        name='cvc'
                        required
                        inputMode='numeric'
                        placeholder='123'
                        className='block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
                     />
                  </Field>
               </div>
            </div>
         </div>

         <div className='flex flex-col gap-4 rounded-3xl border border-secondary/40 bg-secondary/10 p-6 text-sm'>
            <div className='flex items-start gap-3'>
               <ShieldCheck className='mt-0.5 h-5 w-5 text-secondary' />
               <p className='text-muted-foreground'>
                  Your payment is processed over a secure, PCI-compliant
                  connection. Refunds are available within 14 days if the course
                  is not a fit.
               </p>
            </div>
            <Button
               type='submit'
               size='lg'
               className='w-full justify-center rounded-full text-base'
               disabled={planOptions.length === 0 || isProcessing}
            >
               {isProcessing
                  ? "Processing payment..."
                  : selectedPlan
                  ? `Pay ${selectedPlan.price}`
                  : "Choose a plan to continue"}
            </Button>
         </div>
      </form>
   );
}

interface FieldProps {
   label: string;
   htmlFor: string;
   required?: boolean;
   children: React.ReactNode;
}

function Field({ label, htmlFor, required, children }: FieldProps) {
   return (
      <label
         htmlFor={htmlFor}
         className='flex flex-col gap-2 text-sm font-medium text-foreground'
      >
         <span>
            {label}
            {required && <span className='ml-1 text-destructive'>*</span>}
         </span>
         {children}
      </label>
   );
}

interface PlanOptionProps {
   tier: CoursePricingTier;
   slug: string;
   selected: boolean;
   onSelect: () => void;
}

function PlanOption({ tier, slug, selected, onSelect }: PlanOptionProps) {
   return (
      <label
         htmlFor={`plan-${slug}`}
         className={cn(
            "relative block cursor-pointer rounded-3xl border border-border bg-background/90 p-6 transition hover:border-secondary/40 hover:shadow-[0_20px_45px_-35px_hsl(var(--color-primary)/0.45)]",
            selected &&
               "border-primary shadow-[0_25px_55px_-30px_hsl(var(--color-primary)/0.5)] ring-2 ring-primary/30"
         )}
      >
         <input
            type='radio'
            id={`plan-${slug}`}
            name='plan'
            value={slug}
            checked={selected}
            onChange={onSelect}
            className='sr-only'
         />
         <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-3'>
               <p className='text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
                  {tier.cadence}
               </p>
               <h3 className='text-lg font-semibold text-foreground'>
                  {tier.name}
               </h3>
               <p className='text-sm text-muted-foreground'>
                  {tier.description}
               </p>
               <ul className='space-y-2 text-sm text-muted-foreground'>
                  {tier.features.map((feature) => (
                     <li key={feature} className='flex items-start gap-2'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 text-primary' />
                        <span>{feature}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className='flex flex-col items-end text-right'>
               <span className='text-3xl font-semibold text-foreground'>
                  {tier.price}
               </span>
               <span className='text-xs text-muted-foreground'>
                  including lifetime access
               </span>
               {tier.highlighted && (
                  <span className='mt-3 inline-flex items-center gap-1 rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary'>
                     <Sparkles className='h-3.5 w-3.5' /> Recommended
                  </span>
               )}
            </div>
         </div>
      </label>
   );
}

interface CheckoutSummaryCardProps {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   selectedPlan?: CoursePricingTier;
}

function CheckoutSummaryCard({
   course,
   detail,
   selectedPlan,
}: CheckoutSummaryCardProps) {
   return (
      <div className='space-y-6 rounded-3xl border border-border bg-card/80 p-6 shadow-[0_25px_55px_-35px_hsl(var(--color-primary)/0.35)] backdrop-blur'>
         <div className='space-y-2'>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
               Enrollment summary
            </p>
            <h2 className='text-xl font-semibold text-foreground'>
               {course.title}
            </h2>
            <p className='text-sm text-muted-foreground'>
               {course.shortDescription}
            </p>
         </div>

         <div className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <SummaryStat label='Duration' value={course.duration} />
            <SummaryStat label='Modules' value={`${course.modules}`} />
            <SummaryStat label='Project' value={course.project} />
            {selectedPlan && (
               <SummaryStat
                  label='Selected plan'
                  value={`${selectedPlan.name} · ${selectedPlan.price}`}
               />
            )}
         </div>

         {detail?.hero.metrics && (
            <div className='grid gap-3 rounded-2xl border border-dashed border-border/60 p-4 sm:grid-cols-2'>
               {detail.hero.metrics.slice(0, 4).map((metric) => (
                  <SummaryStat
                     key={metric.label}
                     label={metric.label}
                     value={metric.value}
                  />
               ))}
            </div>
         )}

         <div className='space-y-3'>
            <h3 className='text-sm font-semibold text-foreground'>
               You&apos;ll master
            </h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
               {course.learningObjectives.slice(0, 4).map((objective) => (
                  <li key={objective} className='flex items-start gap-2'>
                     <CheckCircle2 className='mt-0.5 h-4 w-4 text-primary' />
                     <span>{objective}</span>
                  </li>
               ))}
            </ul>
         </div>

         <div className='space-y-2 rounded-2xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground'>
            <p className='font-semibold text-foreground'>Skill progression</p>
            <div className='grid gap-3 sm:grid-cols-2'>
               <div>
                  <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                     Before
                  </p>
                  <ul className='mt-1 space-y-1'>
                     {course.skillLevel.before.map((skill) => (
                        <li key={skill}>{skill}</li>
                     ))}
                  </ul>
               </div>
               <div>
                  <p className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
                     After
                  </p>
                  <ul className='mt-1 space-y-1'>
                     {course.skillLevel.after.map((skill) => (
                        <li key={skill}>{skill}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

interface SummaryStatProps {
   label: string;
   value: string;
}

function SummaryStat({ label, value }: SummaryStatProps) {
   return (
      <div className='flex flex-col gap-1 rounded-xl border border-border/60 bg-background/60 px-4 py-3'>
         <span className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
            {label}
         </span>
         <span className='font-medium text-foreground'>{value}</span>
      </div>
   );
}

interface CheckoutTestimonialProps {
   quote: CheckoutDetailSnapshot["testimonials"][number];
   fallbackCourseTitle: string;
}

function CheckoutTestimonial({
   quote,
   fallbackCourseTitle,
}: CheckoutTestimonialProps) {
   return (
      <div className='rounded-3xl border border-border bg-card/60 p-6 text-sm text-muted-foreground shadow-[0_25px_55px_-40px_hsl(var(--color-primary)/0.35)]'>
         <p className='text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
            Learner spotlight
         </p>
         <blockquote className='mt-3 space-y-3'>
            <p className='text-base text-foreground'>
               &ldquo;{quote.quote}&rdquo;
            </p>
            <footer className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>
               {quote.name} · {quote.role}, {quote.company}
            </footer>
         </blockquote>
         <p className='mt-4 text-xs text-muted-foreground'>
            Join thousands of builders who chose {fallbackCourseTitle} to
            accelerate their React journey.
         </p>
      </div>
   );
}

function CheckoutGuarantee() {
   return (
      <div className='rounded-3xl border border-border bg-muted/20 p-6 text-sm text-muted-foreground shadow-[0_20px_45px_-40px_hsl(var(--color-primary)/0.35)]'>
         <p className='text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
            Our commitment
         </p>
         <ul className='mt-4 space-y-3'>
            <li className='flex items-start gap-2'>
               <ShieldCheck className='mt-0.5 h-5 w-5 text-secondary' />
               <span>
                  14-day money-back guarantee if you&apos;re not satisfied.
               </span>
            </li>
            <li className='flex items-start gap-2'>
               <ShieldCheck className='mt-0.5 h-5 w-5 text-secondary' />
               <span>
                  Dedicated support channel with 1-business-day response times.
               </span>
            </li>
            <li className='flex items-start gap-2'>
               <ShieldCheck className='mt-0.5 h-5 w-5 text-secondary' />
               <span>
                  Lifetime access to curriculum updates and community events.
               </span>
            </li>
         </ul>
      </div>
   );
}

interface CheckoutConfirmationProps {
   course: Course;
   selectedPlan?: CoursePricingTier;
}

function CheckoutConfirmation({
   course,
   selectedPlan,
}: CheckoutConfirmationProps) {
   return (
      <div className='space-y-6 text-center'>
         <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary'>
            <ShieldCheck className='h-8 w-8' />
         </div>
         <div className='space-y-4'>
            <h2 className='text-2xl font-semibold text-foreground'>
               You&apos;re enrolled!
            </h2>
            <p className='text-sm text-muted-foreground'>
               We&apos;ve emailed you the onboarding kit for {course.title}.
               Your cohort success manager will reach out within 24 hours with
               next steps.
            </p>
            {selectedPlan && (
               <p className='text-sm text-muted-foreground'>
                  Plan confirmed:{" "}
                  <span className='font-semibold'>{selectedPlan.name}</span> ·{" "}
                  {selectedPlan.price}
               </p>
            )}
         </div>
         <div className='flex flex-col items-center gap-3'>
            <Link
               href={`/docs/${course.id}`}
               className='inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold text-muted-foreground transition hover:border-secondary/40 hover:text-secondary'
            >
               Go to course overview
            </Link>
            <Link
               href='/'
               className='text-xs font-medium uppercase tracking-[0.24em] text-secondary transition hover:text-secondary/80'
            >
               Back to home
            </Link>
         </div>
      </div>
   );
}

function toPlanSlug(name: string): string {
   return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
}
