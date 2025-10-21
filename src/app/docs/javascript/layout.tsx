import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { getCourseSource } from "@/lib/source";
import { getCourseById } from "@/lib/courses";

interface JavaScriptLayoutProps {
   children: React.ReactNode;
}

export default function JavaScriptLayout({ children }: JavaScriptLayoutProps) {
   const course = getCourseById('javascript');
   const courseSource = getCourseSource('javascript');

   const navigationConfig = {
      ...baseOptions(),
      nav: {
         title: course?.title || 'JavaScript Course',
         url: '/docs/javascript',
      },
   };

   return (
      <DocsLayout tree={courseSource.pageTree} {...navigationConfig}>
         {children}
      </DocsLayout>
   );
}