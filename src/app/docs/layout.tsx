import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

interface DocsLayoutProps {
   children: React.ReactNode;
}

export default function Layout({ children }: DocsLayoutProps) {
   // This is the main docs layout for general documentation
   // Course-specific layouts are in their respective folders (react, html, css, etc.)

   return (
      <DocsLayout tree={source.pageTree} {...baseOptions()} links={[]}>
         {children}
      </DocsLayout>
   );
}
