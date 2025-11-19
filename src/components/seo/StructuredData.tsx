/**
 * Structured Data (JSON-LD) Component
 * Renders schema.org markup for SEO
 */

import { SEO_CONFIG } from "@/lib/seo-config";

interface StructuredDataProps {
   data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
   return (
      <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
   );
}

/**
 * Organization Schema for Root Layout
 */
export function OrganizationSchema() {
   const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      logo: `${SEO_CONFIG.siteUrl}/favicon_images/android-chrome-512x512.png`,
      sameAs: [
         // Add your social media links here
         // "https://twitter.com/learntocode",
         // "https://github.com/yourusername",
         // "https://linkedin.com/company/yourcompany",
      ],
      description: "Master HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS through hands-on project-based learning.",
      contactPoint: {
         "@type": "ContactPoint",
         contactType: "Customer Support",
         url: `${SEO_CONFIG.siteUrl}/contact`,
      },
   };

   return <StructuredData data={schema} />;
}

/**
 * WebSite Schema with Search Action
 */
export function WebSiteSchema() {
   const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      potentialAction: {
         "@type": "SearchAction",
         target: {
            "@type": "EntryPoint",
            urlTemplate: `${SEO_CONFIG.siteUrl}/docs?search={search_term_string}`,
         },
         "query-input": "required name=search_term_string",
      },
   };

   return <StructuredData data={schema} />;
}

/**
 * Course Schema for Individual Courses
 */
interface CourseSchemaProps {
   name: string;
   description: string;
   url: string;
   provider?: string;
   educationalLevel?: string;
   timeRequired?: string;
   numberOfLessons?: number;
   price?: {
      amount: number;
      currency: string;
   };
}

export function CourseSchema({
   name,
   description,
   url,
   provider = SEO_CONFIG.siteName,
   educationalLevel = "Beginner to Advanced",
   timeRequired,
   numberOfLessons,
   price,
}: CourseSchemaProps) {
   const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Course",
      name,
      description,
      url,
      provider: {
         "@type": "Organization",
         name: provider,
         url: SEO_CONFIG.siteUrl,
      },
      educationalLevel,
   };

   if (timeRequired) {
      schema.timeRequired = timeRequired;
   }

   if (numberOfLessons) {
      schema.hasCourseInstance = {
         "@type": "CourseInstance",
         courseMode: "online",
         courseWorkload: `PT${numberOfLessons}H`,
      };
   }

   if (price) {
      schema.offers = {
         "@type": "Offer",
         price: price.amount,
         priceCurrency: price.currency,
         availability: "https://schema.org/InStock",
      };
   } else {
      schema.offers = {
         "@type": "Offer",
         price: 0,
         priceCurrency: "INR",
         availability: "https://schema.org/InStock",
      };
   }

   return <StructuredData data={schema} />;
}

/**
 * Breadcrumb Schema for Navigation
 */
interface BreadcrumbItem {
   name: string;
   url: string;
}

interface BreadcrumbSchemaProps {
   items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
   const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
         "@type": "ListItem",
         position: index + 1,
         name: item.name,
         item: item.url,
      })),
   };

   return <StructuredData data={schema} />;
}

/**
 * Article Schema for Blog/Documentation Content
 */
interface ArticleSchemaProps {
   title: string;
   description: string;
   url: string;
   datePublished?: string;
   dateModified?: string;
   authorName?: string;
   imageUrl?: string;
}

export function ArticleSchema({
   title,
   description,
   url,
   datePublished,
   dateModified,
   authorName = SEO_CONFIG.siteName,
   imageUrl,
}: ArticleSchemaProps) {
   const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: title,
      description,
      url,
      author: {
         "@type": "Organization",
         name: authorName,
      },
      publisher: {
         "@type": "Organization",
         name: SEO_CONFIG.siteName,
         logo: {
            "@type": "ImageObject",
            url: `${SEO_CONFIG.siteUrl}/favicon_images/android-chrome-512x512.png`,
         },
      },
   };

   if (datePublished) {
      schema.datePublished = datePublished;
   }

   if (dateModified) {
      schema.dateModified = dateModified;
   }

   if (imageUrl) {
      schema.image = imageUrl;
   }

   return <StructuredData data={schema} />;
}
