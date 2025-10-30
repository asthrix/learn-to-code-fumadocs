"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
   ArrowLeft,
   CheckCircle2,
   Compass,
   GaugeCircle,
   LifeBuoy,
   ShieldCheck,
   Sparkles,
} from "lucide-react";

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

const ANALOGY_PANELS = [
   {
      title: "Mission map",
      description:
         "Every module links back to a visual map so you always see what shipped, what is next, and what can wait.",
      icon: Compass,
   },
   {
      title: "Co-pilot check-ins",
      description:
         "Mentors review your work like a cockpit co-pilot—quick nudges, no micromanaging.",
      icon: LifeBuoy,
   },
   {
      title: "Progress telemetry",
      description:
         "Lightweight dashboards surface momentum in one glance so you decide when to push or pause.",
      icon: GaugeCircle,
   },
];

const TIMELINE_STEPS = [
   {
      title: "Align",
      caption: "15 min",
      description: "Set goals, sync tooling, and lock your first deliverable.",
      icon: Sparkles,
   },
   {
      title: "Build",
      caption: "Daily 45 min",
      description: "Ship guided exercises and submit async reviews as you go.",
      icon: CheckCircle2,
   },
   {
      title: "Launch",
      caption: "90 min capstone",
      description:
         "Package your project, deliver the review, and share your highlights.",
      icon: ShieldCheck,
   },
];

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
      window.setTimeout(() => {
         setIsProcessing(false);
         setIsConfirmed(true);
      }, 650);
   };

   return (
      <main className='relative flex flex-1 flex-col bg-background text-foreground'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.16),_transparent_70%)]' />
         <div className='relative mx-auto w-full max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8'>
            <CheckoutHero
               course={course}
               detail={detail}
               selectedPlan={selectedPlan}
               isConfirmed={isConfirmed}
            />

            <div className='mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]'>
               <section className='rounded-[28px] border border-border bg-card/50 p-8 shadow-[0_28px_80px_-50px_hsl(var(--color-primary)/0.5)] backdrop-blur'>
                  {isConfirmed ? (
                     <CheckoutConfirmation
                        course={course}
                        selectedPlan={selectedPlan}
                     />
                  ) : (
                     <CheckoutForm
                        planOptions={planOptions}
                        selectedPlanSlug={selectedPlanSlug}
                        onPlanSelect={setSelectedPlanSlug}
                        onSubmit={handleSubmit}
                        selectedPlan={selectedPlan}
                        isProcessing={isProcessing}
                     />
                  )}
               </section>

               <CheckoutSidebar
                  course={course}
                  detail={detail}
                  selectedPlan={selectedPlan}
               />
            </div>
         </div>
      </main>
   );
}

interface PlanOptionDescriptor {
   tier: CoursePricingTier;
   slug: string;
}

interface CheckoutFormProps {
   planOptions: PlanOptionDescriptor[];
   selectedPlanSlug?: string;
   onPlanSelect: (slug?: string) => void;
   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
   selectedPlan?: CoursePricingTier;
   isProcessing: boolean;
}

function CheckoutForm({
   planOptions,
   selectedPlanSlug,
   onPlanSelect,
   onSubmit,
   selectedPlan,
   isProcessing,
}: CheckoutFormProps) {
   return (
      <form className='space-y-10' onSubmit={onSubmit}>
         <div className='space-y-4'>
            <SectionLabel
               title='Pick your pace'
               description='All plans unlock the full StaySense curriculum. Higher tiers add more reviews and guidance when you need it.'
            />
            <div className='space-y-3'>
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
                  <p className='rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-white/70'>
                     Pricing is being refreshed for this cohort. Join the
                     waitlist from the course page to get first access.
                  </p>
               )}
            </div>
         </div>

         <div className='space-y-4'>
            <SectionLabel
               title='Billing contact'
               description='Used for receipts and portal access. You can update these details later.'
            />
            <div className='grid gap-4 sm:grid-cols-2'>
               <Field label='Full name' htmlFor='fullName' required>
                  <input
                     id='fullName'
                     name='fullName'
                     required
                     placeholder='Priya Sharma'
                     className='block w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'
                  />
               </Field>
               <Field label='Email' htmlFor='email' required>
                  <input
                     id='email'
                     name='email'
                     type='email'
                     autoComplete='email'
                     required
                     placeholder='you@example.com'
                     className='block w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'
                  />
               </Field>
            </div>
            <Field label='Company (optional)' htmlFor='company'>
               <input
                  id='company'
                  name='company'
                  placeholder='Studio Orbit'
                  className='block w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'
               />
            </Field>
         </div>

         <div className='space-y-4'>
            <SectionLabel
               title='Payment'
               description='Stripe processes every payment with PCI compliant encryption.'
            />
            <Field label='Card number' htmlFor='cardNumber' required>
               <input
                  id='cardNumber'
                  name='cardNumber'
                  inputMode='numeric'
                  required
                  placeholder='4242 4242 4242 4242'
                  className='block w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'
               />
            </Field>
            <div className='grid gap-4 sm:grid-cols-[2fr_1fr]'>
               <Field label='Expiry' htmlFor='expiry' required>
                  <input
                     id='expiry'
                     name='expiry'
                     required
                     placeholder='MM / YY'
                     className='block w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'
                  />
               </Field>
               <Field label='CVC' htmlFor='cvc' required>
                  <input
                     id='cvc'
                     name='cvc'
                     inputMode='numeric'
                     required
                     placeholder='123'
                     className='block w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'
                  />
               </Field>
            </div>
         </div>

         <div className='flex flex-col gap-4 rounded-2xl border border-primary/35 bg-primary/10 p-5 text-sm text-foreground/80'>
            <div className='flex items-start gap-3'>
               <ShieldCheck className='mt-0.5 h-5 w-5 text-secondary' />
               <p>
                  Switch or cancel within 14 days for a full refund. Our support
                  team replies within one business day if you need a hand.
               </p>
            </div>
            <Button
               type='submit'
               size='lg'
               className='w-full justify-center rounded-full bg-primary text-primary-foreground shadow-[0_20px_45px_-28px_hsl(var(--color-primary)/0.85)] transition hover:bg-primary/90'
               disabled={planOptions.length === 0 || isProcessing}
            >
               {isProcessing
                  ? "Processing..."
                  : selectedPlan
                  ? `Confirm ${selectedPlan.price}`
                  : "Choose a plan to continue"}
            </Button>
         </div>
      </form>
   );
}

interface SectionLabelProps {
   title: string;
   description: string;
}

function SectionLabel({ title, description }: SectionLabelProps) {
   return (
      <div className='space-y-1.5'>
         <p className='text-xs font-semibold uppercase tracking-[0.3em] text-white/55'>
            {title}
         </p>
         <p className='text-sm text-white/65'>{description}</p>
      </div>
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
         className='flex flex-col gap-2 text-sm font-medium text-white'
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
            "block cursor-pointer rounded-2xl border border-border bg-card/70 p-5 transition",
            "hover:border-secondary/50 hover:shadow-[0_24px_60px_-40px_hsl(var(--color-primary)/0.6)]",
            selected &&
               "border-secondary/70 bg-primary/10 ring-2 ring-secondary/35"
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
         <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
            <div className='space-y-2'>
               <p className='text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground'>
                  {tier.cadence}
               </p>
               <h3 className='text-lg font-semibold text-foreground'>{tier.name}</h3>
               <p className='text-sm text-foreground/65'>{tier.description}</p>
               <ul className='space-y-1.5 text-sm text-muted-foreground'>
                  {tier.features.slice(0, 3).map((feature) => (
                     <li key={feature} className='flex items-start gap-2'>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 text-secondary' />
                        <span>{feature}</span>
                     </li>
                  ))}
                  {tier.features.length > 3 && (
                     <li className='text-xs uppercase tracking-[0.22em] text-muted-foreground/45'>
                        + {tier.features.length - 3} more
                     </li>
                  )}
               </ul>
            </div>
            <div className='flex flex-col items-end text-right text-foreground'>
               <span className='text-2xl font-semibold'>{tier.price}</span>
               <span className='text-xs text-muted-foreground'>Lifetime access</span>
            </div>
         </div>
      </label>
   );
}

interface CheckoutSidebarProps {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   selectedPlan?: CoursePricingTier;
}

function CheckoutSidebar({
   course,
   detail,
   selectedPlan,
}: CheckoutSidebarProps) {
   return (
      <aside className='space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_-45px_rgba(99,102,241,0.45)] backdrop-blur lg:sticky lg:top-8'>
         <SummaryCard
            course={course}
            detail={detail}
            selectedPlan={selectedPlan}
         />
         <AnalogyList selectedPlan={selectedPlan} />
         <Timeline />
         <GuaranteeCard />
      </aside>
   );
}

interface SummaryCardProps {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   selectedPlan?: CoursePricingTier;
}

function SummaryCard({ course, detail, selectedPlan }: SummaryCardProps) {
   const metrics = detail?.hero.metrics ?? [
      { label: "Modules", value: `${course.modules}` },
      { label: "Duration", value: course.duration },
      { label: "Project", value: course.project },
   ];

   return (
      <div className='space-y-4 rounded-2xl border border-border bg-popover/70 p-5'>
         <div className='flex items-center justify-between gap-3'>
            <div>
               <p className='text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
                  Course overview
               </p>
               <h3 className='text-lg font-semibold text-foreground'>
                  {course.title}
               </h3>
            </div>
            <span className='rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground'>
               Portfolio ready
            </span>
         </div>
         <div className='grid gap-3 sm:grid-cols-2'>
            {metrics.slice(0, 4).map((metric) => (
               <div
                  key={metric.label}
                  className='rounded-xl border border-border bg-card/50 px-3 py-2'
               >
                  <p className='text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground'>
                     {metric.label}
                  </p>
                  <p className='text-sm font-medium text-foreground'>
                     {metric.value}
                  </p>
               </div>
            ))}
         </div>
         {selectedPlan && (
            <p className='rounded-xl border border-secondary/40 bg-primary/10 px-3 py-2 text-xs text-muted-foreground'>
               Selected plan:{" "}
               <span className='font-semibold text-white'>
                  {selectedPlan.name}
               </span>{" "}
               · {selectedPlan.price}
            </p>
         )}
      </div>
   );
}

interface AnalogyListProps {
   selectedPlan?: CoursePricingTier;
}

function AnalogyList({ selectedPlan }: AnalogyListProps) {
   return (
      <div className='space-y-4 rounded-2xl border border-border bg-popover/70 p-5'>
         <p className='text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
            How it feels
         </p>
         <ul className='space-y-3'>
            {ANALOGY_PANELS.map(({ title, description, icon: Icon }) => (
               <li key={title} className='flex items-start gap-3'>
                  <span className='mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-secondary'>
                     <Icon className='h-4 w-4' />
                  </span>
                  <div>
                     <p className='text-sm font-semibold text-foreground'>{title}</p>
                     <p className='text-xs text-muted-foreground'>{description}</p>
                  </div>
               </li>
            ))}
         </ul>
         <p className='text-xs text-muted-foreground'>
            {selectedPlan
               ? `${selectedPlan.name} keeps these systems active from day one so you stay oriented without overthinking.`
               : "Choose a plan to see how much guidance rides alongside each mission."}
         </p>
      </div>
   );
}

function Timeline() {
   return (
      <div className='space-y-4 rounded-2xl border border-border bg-popover/70 p-5'>
         <p className='text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
            Journey outline
         </p>
         <ol className='space-y-3'>
            {TIMELINE_STEPS.map(
               ({ title, caption, description, icon: Icon }) => (
                  <li key={title} className='flex gap-3'>
                     <span className='mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 text-secondary'>
                        <Icon className='h-4 w-4' />
                     </span>
                     <div className='space-y-1'>
                        <div className='flex items-center gap-2 text-sm text-foreground'>
                           <span className='font-semibold'>{title}</span>
                           <span className='text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground'>
                              {caption}
                           </span>
                        </div>
                        <p className='text-xs text-muted-foreground'>{description}</p>
                     </div>
                  </li>
               )
            )}
         </ol>
      </div>
   );
}

function GuaranteeCard() {
   return (
      <div className='space-y-3 rounded-2xl border border-border bg-popover/70 p-5 text-sm text-muted-foreground'>
         <p className='text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
            Trust signals
         </p>
         <ul className='space-y-2'>
            <li className='flex items-start gap-2'>
               <ShieldCheck className='mt-0.5 h-4 w-4 text-secondary' />
               <span>14-day full refund if the fit is off.</span>
            </li>
            <li className='flex items-start gap-2'>
               <ShieldCheck className='mt-0.5 h-4 w-4 text-secondary' />
               <span>Support replies within one business day.</span>
            </li>
            <li className='flex items-start gap-2'>
               <ShieldCheck className='mt-0.5 h-4 w-4 text-secondary' />
               <span>Lifetime updates and community events included.</span>
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
         <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-secondary'>
            <ShieldCheck className='h-7 w-7' />
         </div>
         <div className='space-y-3'>
            <h2 className='text-xl font-semibold text-white'>You&apos;re in</h2>
            <p className='text-sm text-white/60'>
               Your onboarding email for {course.title} is on the way with
               workspace access and next steps.
            </p>
            {selectedPlan && (
               <p className='text-sm text-white/60'>
                  Plan confirmed:{" "}
                  <span className='font-semibold text-white'>
                     {selectedPlan.name}
                  </span>{" "}
                  · {selectedPlan.price}
               </p>
            )}
         </div>
         <div className='flex flex-col items-center gap-2'>
            <Link
               href={`/docs/${course.id}`}
               className='inline-flex items-center justify-center rounded-full border border-border bg-card/50 px-5 py-2 text-sm font-semibold text-foreground/80 transition hover:border-secondary/60 hover:text-secondary'
            >
               View course outline
            </Link>
            <Link
               href='/'
               className='text-xs font-medium uppercase tracking-[0.26em] text-secondary transition hover:text-secondary/80'
            >
               Back to home
            </Link>
         </div>
      </div>
   );
}

function CheckoutHero({
   course,
   detail,
   selectedPlan,
   isConfirmed,
}: {
   course: Course;
   detail?: CheckoutDetailSnapshot;
   selectedPlan?: CoursePricingTier;
   isConfirmed: boolean;
}) {
   const description = detail?.hero.description ?? course.description;
   const metrics = detail?.hero.metrics ?? [
      { label: "Modules", value: `${course.modules}` },
      { label: "Duration", value: course.duration },
      { label: "Project", value: course.project },
   ];

   return (
      <header className='rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_32px_100px_-55px_rgba(99,102,241,0.55)] backdrop-blur'>
         <div className='flex flex-wrap items-start justify-between gap-8'>
            <div className='space-y-5'>
               <Link
                  href={`/courses/${course.id}`}
                  className='inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground transition hover:border-secondary/60 hover:text-secondary'
               >
                  <ArrowLeft className='h-3.5 w-3.5' /> Back to courses
               </Link>
               <div className='space-y-3'>
                  <span className='inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-primary/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-secondary'>
                     StaySense checkout
                  </span>
                  <h1 className='text-3xl font-semibold text-foreground sm:text-4xl'>
                     A calm, guided path into the React studio
                  </h1>
                  <p className='max-w-2xl text-sm text-muted-foreground'>
                     {description}
                  </p>
               </div>
            </div>
            <div className='flex flex-col gap-4 rounded-2xl border border-border bg-card/70 p-5 text-sm text-muted-foreground'>
               <p className='text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
                  Snapshot
               </p>
               <div className='grid gap-3 sm:grid-cols-2'>
                  {metrics.slice(0, 4).map((metric) => (
                     <div
                        key={metric.label}
                        className='rounded-xl border border-border bg-card/50 px-3 py-2 text-center'
                     >
                        <p className='text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground'>
                           {metric.label}
                        </p>
                        <p className='text-sm font-semibold text-white'>
                           {metric.value}
                        </p>
                     </div>
                  ))}
               </div>
               {selectedPlan && !isConfirmed && (
                  <div className='rounded-xl border border-secondary/40 bg-primary/10 px-3 py-2 text-xs text-muted-foreground'>
                     Selected:{" "}
                     <span className='font-semibold text-white'>
                        {selectedPlan.name}
                     </span>{" "}
                     · {selectedPlan.price}
                  </div>
               )}
               {isConfirmed && (
                  <div className='rounded-xl border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200'>
                     Checkout confirmed. Check your inbox for the onboarding
                     email.
                  </div>
               )}
            </div>
         </div>
      </header>
   );
}

function toPlanSlug(name: string): string {
   return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
}
