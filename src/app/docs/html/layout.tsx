import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { getCourseSource } from "@/lib/source";
import { getCourseById } from "@/lib/courses";

interface HTMLLayoutProps {
   children: React.ReactNode;
}

export default function HTMLLayout({ children }: HTMLLayoutProps) {
   const course = getCourseById('html');
   const courseSource = getCourseSource('html');

   const navigationConfig = {
      ...baseOptions(),
      nav: {
         title: course?.title || 'HTML Course',
         url: '/docs/html',
      },
   };

   return (
      <DocsLayout tree={courseSource.pageTree} {...navigationConfig}>
         {children}
      </DocsLayout>
   );
}