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

export async function generateMetadata({
   params,
}: {
   params: Promise<{ courseId: string }>;
}): Promise<Metadata> {
   const { courseId } = await params;
   const course = getCourseById(courseId);

   if (course?.id === "react") {
      return {
         title: `${course.title} | Code To Learn`,
         description: reactCourseDetail.hero.description,
      };
   }

   const displayName = course?.title ?? formatCourseName(courseId);

   return {
      title: `${displayName} course coming soon | Code To Learn`,
      description: `We're finishing the ${displayName} roadmap. Check out the available tracks while we wrap things up.`,
   };
}

export default async function CourseDetailPage({
   params,
}: {
   params: Promise<{ courseId: string }>;
}) {
   const { courseId } = await params;
   const course = getCourseById(courseId);

   if (!course) {
      notFound();
   }

   if (course.id === "react") {
      redirect("/react");
   }

   notFound();
}
