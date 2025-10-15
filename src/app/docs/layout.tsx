import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { getCourseById } from "@/lib/courses";

interface DocsLayoutProps {
   children: React.ReactNode;
   params: { slug?: string[] };
}

export default function Layout({ children, params }: DocsLayoutProps) {
   // Check if this is a course-specific layout
   const courseId = params?.slug?.[0];
   const course = courseId ? getCourseById(courseId) : null;

   let pageSource = source;
   let navigationConfig = baseOptions();

   if (course && courseId) {
      // Create a custom navigation tree for the course
      const allPages = source.getPages();
      const coursePages = allPages.filter((page) => page.slugs[0] === courseId);

      // Build a custom tree structure for just this course
      const courseTree = {
         name: course.title,
         children: coursePages.map((page) => ({
            type: "page" as const,
            name: page.data.title || page.slugs[page.slugs.length - 1],
            url: page.url,
            external: false,
         })),
      };

      pageSource = {
         ...source,
         getPages: () => coursePages,
         pageTree: courseTree,
      };

      navigationConfig = {
         ...baseOptions(),
         nav: {
            title: course.title,
            url: `/docs/${course.id}`,
         },
      };
   }

   return (
      <DocsLayout tree={pageSource.pageTree} {...navigationConfig}>
         {children}
      </DocsLayout>
   );
}
