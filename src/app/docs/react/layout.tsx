import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { getCourseSource } from "@/lib/source";
import { getCourseById } from "@/lib/courses";

interface ReactLayoutProps {
   children: React.ReactNode;
}

export default function ReactLayout({ children }: ReactLayoutProps) {
   const course = getCourseById('react');
   const courseSource = getCourseSource('react');

   const navigationConfig = {
      ...baseOptions(),
      nav: {
         title: course?.title || 'React Course',
         url: '/docs/react',
      },
   };

   return (
      <DocsLayout tree={courseSource.pageTree} {...navigationConfig}>
         {children}
      </DocsLayout>
   );
}