import type { LucideIcon } from "lucide-react";
import {
   BookOpenCheck,
   BriefcaseBusiness,
   Compass,
   GraduationCap,
   MessageCircle,
   MousePointerClick,
   PenLine,
   Sparkles,
} from "lucide-react";

export interface CreatorProfile {
   name: string;
   role: string;
   tagline: string;
   summary: string;
   location: string;
   timezone: string;
   availability: string;
   mission: string;
}

export interface CreatorStat {
   label: string;
   value: string;
   description: string;
}

export interface CreatorValue {
   title: string;
   description: string;
   icon: LucideIcon;
}

export interface ContactChannel {
   label: string;
   href: string;
   description: string;
   action: string;
   icon: LucideIcon;
}

export interface CreatorMilestone {
   title: string;
   period: string;
   description: string;
   impact: string;
}

export interface CreatorCallToAction {
   label: string;
   href: string;
   note: string;
   icon: LucideIcon;
}

export interface FieldGuideHighlight {
   label: string;
   description: string;
   action: string;
   href: string;
   icon: LucideIcon;
}

export const creatorProfile: CreatorProfile = {
   name: "Vijay Subramanian",
   role: "Founder & Lead Instructor",
   tagline: "Design-minded engineer crafting developer-first learning experiences.",
   summary:
      "I build comprehensive, project-based curricula that help self-taught developers ship production-ready applications with confidence.",
   location: "Tirunelveli, India",
   timezone: "GMT+5:30",
   availability: "Available for guest lectures, partnership conversations, and advanced cohort onboarding.",
   mission:
      "Every module blends rigorous engineering standards with approachable storytelling so learners build intuition—not just follow tutorials.",
};

export const creatorStats: CreatorStat[] = [
   {
      label: "Learners mentored",
      value: "1.2k+",
      description: "Guided through live cohorts, async feedback, and open-source programs.",
   },
   {
      label: "Projects shipped",
      value: "48",
      description: "Production-grade builds reviewed across React, Next.js, and design systems.",
   },
   {
      label: "Years shipping",
      value: "9",
      description: "Front-end leadership across SaaS, edtech, and startup product teams.",
   },
   {
      label: "Talks & workshops",
      value: "30+",
      description: "Conference sessions, hackathons, and internal upskilling initiatives.",
   },
];

export const creatorValues: CreatorValue[] = [
   {
      title: "Outcome-driven pedagogy",
      description:
         "Curriculum designed backwards from employer expectations, with project rubrics that mirror real engineering reviews.",
      icon: BriefcaseBusiness,
   },
   {
      title: "Systems thinking",
      description:
         "Learners master component architecture, state modeling, and automation patterns that scale past toy apps.",
      icon: BookOpenCheck,
   },
   {
      title: "Inclusive mentorship",
      description:
         "Structured guidance, async feedback loops, and templates that support diverse learning styles globally.",
      icon: GraduationCap,
   },
];

export const contactChannels: ContactChannel[] = [
   {
      label: "Email",
      href: "mailto:hello@learntocode.dev",
      description: "Best for collaboration proposals, cohort partnerships, and advisory requests.",
      action: "Write an email",
      icon: MessageCircle,
   },
   {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/itsvijaycoder",
      description: "Connect professionally, explore speaking engagements, or discuss product strategy.",
      action: "Connect on LinkedIn",
      icon: MousePointerClick,
   },
   {
      label: "Newsletter",
      href: "https://itsvijaycoder.substack.com",
      description: "Monthly deep-dives on curriculum design, developer experience, and emerging UI patterns.",
      action: "Join the newsletter",
      icon: PenLine,
   },
];

export const creatorTimeline: CreatorMilestone[] = [
//    {
//       title: "Shipped first design system",
//       period: "2016-2018",
//       description:
//          "Led the front-end rebuild for a SaaS analytics platform, establishing maintainable React component standards.",
//       impact: "Reduced UI regressions by 40% while improving velocity across product squads.",
//    },
//    {
//       title: "Scaled engineering education",
//       period: "2019-2021",
//       description:
//          "Designed cohort-based bootcamp formats that graduated 300+ engineers into mid-level roles globally.",
//       impact: "Achieved 92% placement across APAC and North America within 90 days of graduation.",
//    },
   {
      title: "Founded Code To Learn",
      period: "2025-Present",
      description:
         "Built a modern, moduled platform empowering self-taught developers through production-ready curricula.",
      impact: "Learners now ship multi-stack projects featuring React, Next.js, Tailwind, and automation workflows.",
   },
];

export const discoveryCallCta: CreatorCallToAction = {
   label: "Book a discovery call",
   href: "https://cal.com/itsvijaycoder/30min",
   note: "Share your goals and we’ll craft a custom roadmap for your team or cohort.",
   icon: Sparkles,
};

export const fieldGuideHighlight: FieldGuideHighlight = {
   label: "Creator Field Guide",
   description:
      "Download the 7-step framework Vijay uses to map learner personas to production-ready outcomes.",
   action: "Access the field guide",
   href: "https://learn-to-code.dev/field-guide.pdf",
   icon: Compass,
};
