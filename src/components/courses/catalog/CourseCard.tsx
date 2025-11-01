import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Course } from "@/lib/courses";

import { Button } from "@/components/ui/button";
import { AnimatedBlob } from "@/components/ui/AnimatedBlob";

import { StatusBadge } from "./StatusBadge";

interface CourseCardProps {
   course: Course;
}

const LEVEL_LABELS: Record<Course["difficulty"], string> = {
   beginner: "Beginner",
   intermediate: "Intermediate",
   advanced: "Advanced",
};

export function CourseCard({ course }: CourseCardProps) {
   const metadata = [
      LEVEL_LABELS[course.difficulty],
      `${course.modules} modules`,
      course.duration,
   ];

   const isAvailable = course.status === "available";

   return (
      <article className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg'>
         <AnimatedBlob />
         <div className='relative flex items-start justify-between gap-4'>
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl transition group-hover:scale-105 group-hover:bg-primary/20'>
               {course.icon}
            </span>
            <StatusBadge status={course.status} />
         </div>

         <div className='relative mt-6 flex flex-col gap-4'>
            <div className='space-y-2'>
               <h3 className='text-lg font-semibold text-foreground transition group-hover:text-primary'>
                  {course.title}
               </h3>
               <p className='line-clamp-3 text-sm text-muted-foreground'>
                  {course.shortDescription}
               </p>
            </div>

            <div className='flex flex-wrap gap-2'>
               {metadata.map((item) => (
                  <span
                     key={item}
                     className='inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'
                  >
                     {item}
                  </span>
               ))}
            </div>
         </div>

         <div className='relative mt-auto pt-6'>
            {isAvailable ? (
               <Button
                  asChild
                  className='w-full justify-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition hover:shadow-md'
               >
                  <Link href={`/docs/${course.id}`}>
                     Start course
                     <ArrowUpRight className='ml-2 h-4 w-4' aria-hidden='true' />
                  </Link>
               </Button>
            ) : (
               <div className='flex items-center justify-between rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-sm text-muted-foreground'>
                  <span>{course.status === "coming-soon" ? "Coming soon" : "In development"}</span>
                  <span className='text-xs uppercase tracking-[0.12em]'>Stay tuned</span>
               </div>
            )}
         </div>
      </article>
   );
}
