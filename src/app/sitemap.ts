import type { MetadataRoute } from "next";

import { source } from "@/lib/source";

const BASE_URL = "https://codetolearn.vercel.app";

const staticRoutes: Array<{
   path: string;
   priority: MetadataRoute.Sitemap[number]["priority"];
   changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
   { path: "/", priority: 1, changeFrequency: "daily" },
   { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
   { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
   { path: "/checkout", priority: 0.5, changeFrequency: "monthly" },
];

const now = new Date();

function absoluteUrl(path: string): string {
   if (path.startsWith("http")) return path;

   if (!path || path === "/") {
      return BASE_URL;
   }

   return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveDate(value: unknown, fallback: Date): Date {
   if (!value) return fallback;

   if (value instanceof Date && !Number.isNaN(value.getTime())) {
      return value;
   }

   if (typeof value === "string") {
      const parsed = new Date(value);
      if (!Number.isNaN(parsed.getTime())) {
         return parsed;
      }
   }

   return fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
   const docEntries = source.getPages().map((page) => {
      const meta = page.data as Record<string, unknown>;
      const metaDate =
         meta.lastModified || meta.updated || meta.date || meta.published;

      const entry: MetadataRoute.Sitemap[number] = {
         url: absoluteUrl(page.url),
         lastModified: resolveDate(metaDate, now),
         changeFrequency: "weekly",
         priority: page.slugs.length <= 2 ? 0.8 : 0.6,
      };

      return entry;
   });

   // Eliminate duplicates that can occur when course-specific sources overlap
   const uniqueDocs = Array.from(
      new Map(docEntries.map((entry) => [entry.url, entry])).values()
   );

   const staticEntries = staticRoutes.map((route) => {
      const entry: MetadataRoute.Sitemap[number] = {
         url: absoluteUrl(route.path),
         lastModified: now,
         changeFrequency: route.changeFrequency,
         priority: route.priority,
      };

      return entry;
   });

   return [...staticEntries, ...uniqueDocs];
}
