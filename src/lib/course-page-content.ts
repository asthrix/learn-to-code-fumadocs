import type { FeatureHighlight } from "@/lib/home-content";
import { BookOpenCheck, GraduationCap, Layers, Workflow } from "lucide-react";

export interface CourseStat {
   label: string;
   value: string;
   description: string;
}

export const courseHighlights: FeatureHighlight[] = [
   {
      title: "Structured learning path",
      description:
         "Progress through modules that build on each other so you always know the next best step.",
      icon: Layers,
   },
   {
      title: "Project-first curriculum",
      description:
         "Every course terminates in a production-grade build that ships to your portfolio.",
      icon: Workflow,
   },
   {
      title: "Mentor-reviewed outcomes",
      description:
         "Rubrics, checklists, and async feedback loops keep your work aligned with industry standards.",
      icon: GraduationCap,
   },
];

export interface CourseFaqItem {
   question: string;
   answer: string;
}

export const courseFaqs: CourseFaqItem[] = [
   {
      question: "Do I need prior programming experience?",
      answer:
         "No! Our HTML course is designed for complete beginners. We start with the basics and gradually build up your skills.",
   },
   {
      question: "Can I skip courses if I already know the basics?",
      answer:
         "Yes! If you're already familiar with HTML and CSS, you can jump straight to JavaScript or React. Review the prerequisites to ensure you're prepared.",
   },
   {
      question: "How long does it take to complete all courses?",
      answer:
         "The full path is roughly 160 hours of video, reading, and lab time—most learners finish in 4–5 months at 8–10 hours per week.",
   },
   {
      question: "Will I build real projects?",
      answer:
         "Absolutely. Each course ends with shipping a real product, from marketing sites to complex React applications.",
   },
   {
      question: "Are the courses updated with the latest technologies?",
      answer:
         "Yes. We revise content quarterly to cover the latest stable releases for React, Next.js, tooling, and accessibility best practices.",
   },
];

export const courseHeroBadge = {
   label: "Guided Learning Tracks",
   icon: BookOpenCheck,
};
