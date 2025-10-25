import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { getCourseById } from "@/lib/courses";
import { reactCourseDetail } from "@/lib/course-detail/react";

const formatCourseName = (slug: string) => {
   const spaced = slug.replace(/[-_]+/g, " ").trim();
   if (!spaced) return "Course";

   return spaced
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
};

interface CourseDetailPageProps {
   params: { courseId: string };
}

export async function generateMetadata({
   params,
}: CourseDetailPageProps): Promise<Metadata> {
   const course = getCourseById(params.courseId);

   if (course?.id === "react") {
      return {
         title: `${course.title} | Learn to Code`,
         description: reactCourseDetail.hero.description,
      };
   }

   const displayName = course?.title ?? formatCourseName(params.courseId);

   return {
      title: `${displayName} course coming soon | Learn to Code`,
      description: `We're finishing the ${displayName} roadmap. Check out the available tracks while we wrap things up.`,
   };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
   const course = getCourseById(params.courseId);

   if (!course) {
      notFound();
   }

   if (course.id === "react") {
      redirect("/react");
   }

   notFound();
}
