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
