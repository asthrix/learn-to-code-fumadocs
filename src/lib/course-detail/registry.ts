import type { CourseDetailContent } from "./types";
import { newReactCourseDetail } from "./react-new";
import { reactCourseDetail } from "./react";
import { oldReactCourseDetail } from "./react-old";

const registry: Record<string, CourseDetailContent> = {
   [reactCourseDetail.slug]: reactCourseDetail,
   [newReactCourseDetail.slug]: newReactCourseDetail,
   [oldReactCourseDetail.slug]: oldReactCourseDetail,
};

export const getCourseDetailBySlug = (
   slug: string
): CourseDetailContent | undefined => {
   return registry[slug];
};

export const getAllCourseDetails = (): CourseDetailContent[] => {
   return Object.values(registry);
};
