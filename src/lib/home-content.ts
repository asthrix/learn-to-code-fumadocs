import { Cpu, Rocket, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeatureHighlight {
   title: string;
   description: string;
   icon: LucideIcon;
}

export interface StatHighlight {
   label: string;
   value: string;
}

export interface PricingPlan {
   name: string;
   price: string;
   cadence: string;
   description: string;
   features: string[];
   ctaLabel: string;
   ctaHref: string;
   highlighted?: boolean;
}

export const featureHighlights: FeatureHighlight[] = [
   {
      title: "Production-ready projects",
      description:
         "Ship a polished TaskFlow Pro clone while mastering modern tooling and workflows.",
      icon: Rocket,
   },
   {
      title: "AI-assisted mentoring",
      description:
         "Inline guidance, pull request reviews, and progress tracking baked into every module.",
      icon: Cpu,
   },
   {
      title: "Security-first practices",
      description:
         "Authentication, accessibility, and testing guardrails that mirror world-class teams.",
      icon: ShieldCheck,
   },
];

export const statHighlights: StatHighlight[] = [
   { label: "Ship-ready modules", value: "40+" },
   { label: "Real-world components", value: "120" },
   { label: "Average time to deploy", value: "6 wks" },
   { label: "Community builders", value: "8k+" },
];

export const pricingPlans: PricingPlan[] = [
   {
      name: "Starter",
      price: "₹0",
      cadence: "per month",
      description:
         "Perfect if you're getting your bearings with HTML, CSS, and JavaScript fundamentals.",
      features: [
         "Access to HTML and CSS foundations",
         "Weekly office hours with mentors",
         "Downloadable exercise solutions",
      ],
      ctaLabel: "Start for free",
      ctaHref: "/docs/html",
   },
   {
      name: "Pro Builder",
      price: "₹3,999",
      cadence: "per month",
      description:
         "Ship React and Next.js builds with code reviews, deployment checklists, and async support.",
      features: [
         "Full access to all current courses",
         "Automated project feedback within 48 hours",
         "Production deployment playbooks and CI templates",
         "Private Discord pods for accountability",
      ],
      ctaLabel: "Upgrade to Pro",
      ctaHref: "/docs/react",
      highlighted: true,
   },
   {
      name: "Team Studio",
      price: "₹9,999",
      cadence: "per month",
      description:
         "Designed for teams rolling out modern frontend standards and onboarding new engineers rapidly.",
      features: [
         "Five seats with shared progress dashboard",
         "Custom onboarding workshops and retros",
         "Integration guides for analytics and observability",
         "Quarterly curriculum updates and roadmap access",
      ],
      ctaLabel: "Talk to us",
      ctaHref: "mailto:hello@learnfrontend.dev",
   },
];
