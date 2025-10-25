import type { LucideIcon } from "lucide-react";

export interface CourseHeroMetric {
   label: string;
   value: string;
}

export interface CourseHeroCta {
   label: string;
   href: string;
}

export interface CourseHeroContent {
   eyebrow: string;
   title: string;
   highlight: string;
   description: string;
   primaryCta: CourseHeroCta;
   secondaryCta?: CourseHeroCta;
   metrics: CourseHeroMetric[];
}

export interface CourseDifferentiator {
   title: string;
   description: string;
   icon: LucideIcon;
}

export interface CourseTechnologyGroup {
   title: string;
   items: string[];
}

export interface CourseLesson {
   title: string;
   duration: string;
}

export interface CourseModule {
   title: string;
   description: string;
   lessons: CourseLesson[];
}

export interface CourseTestimonial {
   name: string;
   role: string;
   company: string;
   quote: string;
}

export interface CoursePricingTier {
   name: string;
   price: string;
   cadence: string;
   description: string;
   features: string[];
   highlighted?: boolean;
   ctaLabel: string;
   ctaHref: string;
}

export interface CourseDetailContent {
   slug: string;
   hero: CourseHeroContent;
   differentiators: CourseDifferentiator[];
   technology: CourseTechnologyGroup[];
   modules: CourseModule[];
   testimonials: CourseTestimonial[];
   pricing: CoursePricingTier[];
}
