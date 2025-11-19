import { getPageImage, source, getCourseSource } from "@/lib/source";
import {
   DocsBody,
   DocsDescription,
   DocsPage,
   DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getCourseById } from "@/lib/courses";
import { getMDXComponents } from "@/mdx-components";
import { SEO_CONFIG, COURSE_KEYWORDS, getCanonicalUrl, getOgImageUrl } from "@/lib/seo-config";
import { CourseSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
   const params = await props.params;

   // Check if this is a course-specific page
   const courseId = params.slug?.[0];
   const course = courseId ? getCourseById(courseId) : null;

   // Use course-specific source if we're in a course, otherwise use global source
   const pageSource = course && courseId ? getCourseSource(courseId) : source;
   const page = pageSource.getPage(params.slug);

   if (!page) notFound();

   const MDX = page.data.body;
   
   // Build breadcrumb path
   const breadcrumbItems = [
      { name: "Home", url: SEO_CONFIG.siteUrl },
      { name: "Courses", url: `${SEO_CONFIG.siteUrl}/courses` },
   ];
   
   if (course) {
      breadcrumbItems.push({
         name: course.title,
         url: `${SEO_CONFIG.siteUrl}/docs/${courseId}`,
      });
   }
   
   if (params.slug && params.slug.length > 1) {
      breadcrumbItems.push({
         name: page.data.title,
         url: `${SEO_CONFIG.siteUrl}/docs/${params.slug.join("/")}`,
      });
   }

   return (
      <>
         {/* Add Course Schema for main course pages */}
         {course && params.slug?.length === 1 && (
            <CourseSchema
               name={course.title}
               description={course.description}
               url={`${SEO_CONFIG.siteUrl}/docs/${courseId}`}
               educationalLevel={course.difficulty}
            />
         )}
         
         {/* Add Article Schema for lesson pages */}
         {params.slug && params.slug.length > 1 && (
            <ArticleSchema
               title={page.data.title}
               description={page.data.description || ""}
               url={`${SEO_CONFIG.siteUrl}/docs/${params.slug.join("/")}`}
            />
         )}
         
         {/* Add Breadcrumb Schema */}
         <BreadcrumbSchema items={breadcrumbItems} />
         
         <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
               <MDX
                  components={getMDXComponents({
                     // this allows you to link to other pages with relative file paths
                     a: createRelativeLink(pageSource, page),
                  })}
               />
            </DocsBody>
         </DocsPage>
      </>
   );
}

export async function generateStaticParams() {
   return source.generateParams();
}

export async function generateMetadata(
   props: PageProps<"/docs/[[...slug]]">
): Promise<Metadata> {
   const params = await props.params;

   // Check if this is a course-specific page for metadata
   const courseId = params.slug?.[0];
   const course = courseId ? getCourseById(courseId) : null;

   // Use course-specific source if we're in a course, otherwise use global source
   const pageSource = course && courseId ? getCourseSource(courseId) : source;
   const page = pageSource.getPage(params.slug);

   if (!page) notFound();
   
   const pageUrl = `/docs/${params.slug?.join("/") || ""}`;
   const pageTitle = page.data.title;
   const pageDescription = page.data.description || "";
   const pageImage = getPageImage(page);
   
   // Get course-specific keywords if available
   const courseKeywords = courseId && courseId in COURSE_KEYWORDS 
      ? [...COURSE_KEYWORDS[courseId as keyof typeof COURSE_KEYWORDS]]
      : [];

   return {
      title: pageTitle,
      description: pageDescription,
      keywords: courseKeywords,
      
      // Open Graph
      openGraph: {
         type: "article",
         locale: SEO_CONFIG.locale,
         url: getCanonicalUrl(pageUrl),
         siteName: SEO_CONFIG.siteName,
         title: pageTitle,
         description: pageDescription,
         images: [
            {
               url: pageImage.url || getOgImageUrl(),
               width: 1200,
               height: 630,
               alt: pageTitle,
            },
         ],
      },
      
      // Twitter Card
      twitter: {
         card: "summary_large_image",
         title: pageTitle,
         description: pageDescription,
         creator: SEO_CONFIG.twitter.creator,
         site: SEO_CONFIG.twitter.handle,
         images: [pageImage.url || getOgImageUrl()],
      },
      
      // Canonical URL
      alternates: {
         canonical: getCanonicalUrl(pageUrl),
      },
      
      // Robots (allow indexing for all docs pages)
      robots: {
         index: true,
         follow: true,
      },
   };
}
