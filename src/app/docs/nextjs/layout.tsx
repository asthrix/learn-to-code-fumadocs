import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { getCourseSource } from "@/lib/source";
import { getCourseById } from "@/lib/courses";

interface NextJSLayoutProps {
   children: React.ReactNode;
}

export default function NextJSLayout({ children }: NextJSLayoutProps) {
   const course = getCourseById('nextjs');
   const courseSource = getCourseSource('nextjs');

   const navigationConfig = {
      ...baseOptions(),
      nav: {
         title: course?.title || 'Next.js Course',
         url: '/docs/nextjs',
      },
   };

   return (
      <DocsLayout tree={courseSource.pageTree} {...navigationConfig}>
         {children}
      </DocsLayout>
   );
}