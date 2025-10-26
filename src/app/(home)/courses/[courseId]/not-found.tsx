"use client";

import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";

import { CourseCard } from "@/components/courses/CourseCard";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";

const highlightCourseIds = ["react-new", "react"] as const;

const getHighlightCourses = (): Course[] =>
   highlightCourseIds
      .map((id) => courses.find((course) => course.id === id))
      .filter((course): course is Course => Boolean(course));

const toTitleCase = (value: string) =>
   value
      .replace(/[-_]+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

export default function CourseNotFound() {
   const params = useParams<{ courseId?: string }>();
   const pathname = usePathname();

   const highlightCourses = useMemo(() => getHighlightCourses(), []);

   const fallbackSlug = useMemo(() => {
      if (params?.courseId) return params.courseId;
      if (!pathname) return "course";
      const segments = pathname.split("/").filter(Boolean);
      return segments[segments.length - 1] ?? "course";
   }, [params?.courseId, pathname]);

   const matchedCourse = courses.find((course) => course.id === fallbackSlug);
   const displayName = matchedCourse?.title ?? toTitleCase(fallbackSlug);

   return (
      <main className='relative overflow-hidden flex  flex-col bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.16),_transparent_58%)]' />
         <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_transparent,_hsl(var(--color-primary)/0.08)_30%,_transparent_70%)]' />
         <div className='pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/25 blur-[120px]' />
         <div className='pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-secondary/25 blur-[140px]' />
         <section className='relative overflow-hidden'>
            <div className='relative mx-auto max-w-4xl px-6 pb-24 pt-28 text-center lg:px-8 lg:pt-36'>
               <span className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground shadow-[0_20px_45px_-32px_hsl(var(--color-primary)/0.55)]'>
                  <Sparkles className='h-4 w-4' />
                  Upcoming cohort
               </span>

               <h1 className='mt-8 text-4xl font-semibold leading-tight text-foreground sm:text-5xl'>
                  The {displayName || "requested"} course is on the way
               </h1>
               <p className='mt-4 text-base text-muted-foreground sm:text-lg'>
                  We&apos;re crafting the {displayName || "requested"}{" "}
                  curriculum right now. In the meantime, explore a live course
                  or follow the full learning path.
               </p>

               <div className='mt-8 flex flex-wrap justify-center gap-4'>
                  <Link
                     href='/courses'
                     className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_45px_-20px_hsl(var(--color-primary)/0.55)] transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                  >
                     Browse courses
                     <ArrowLeft className='h-4 w-4 rotate-180' />
                  </Link>
                  <Link
                     href='/'
                     className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                  >
                     Go home
                     <Home className='h-4 w-4' />
                  </Link>
               </div>
            </div>
         </section>

         <section className='relative mx-auto max-w-6xl px-6 pb-24 lg:px-8'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
               <div>
                  <h2 className='text-2xl font-semibold text-foreground sm:text-3xl'>
                     Tracks you can jump into today
                  </h2>
                  <p className='mt-2 text-sm text-muted-foreground'>
                     Stay sharp with an available cohort while we finish
                     building this course.
                  </p>
               </div>
               <Link
                  href='/courses#learning-path'
                  className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/10 hover:text-primary'
               >
                  View learning path
               </Link>
            </div>

            <div className='mt-10 grid gap-6 md:grid-cols-2'>
               {highlightCourses.map((course) => (
                  <div key={course.id} className='relative h-full'>
                     <CourseCard course={course} showProgress={false} />
                  </div>
               ))}
            </div>
         </section>
      </main>
   );
}
