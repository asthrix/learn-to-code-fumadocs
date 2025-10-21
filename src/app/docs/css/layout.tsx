import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { getCourseSource } from "@/lib/source";
import { getCourseById } from "@/lib/courses";

interface CSSLayoutProps {
   children: React.ReactNode;
}

export default function CSSLayout({ children }: CSSLayoutProps) {
   const course = getCourseById('css');
   const courseSource = getCourseSource('css');

   const navigationConfig = {
      ...baseOptions(),
      nav: {
         title: course?.title || 'CSS Course',
         url: '/docs/css',
      },
   };

   return (
      <DocsLayout tree={courseSource.pageTree} {...navigationConfig}>
         {children}
      </DocsLayout>
   );
}