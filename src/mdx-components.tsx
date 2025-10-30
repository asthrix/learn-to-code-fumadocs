import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Callout } from "fumadocs-ui/components/callout";
import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/banner";
import { Accordions, Accordion } from "@/components/accordion";
import { Files, Folder, File } from "@/components/files";
import { Steps, Step } from "@/components/steps";
import Link from "next/link";
// import { CodeBlock, Pre } from "@/components/codeblock";

const customComponents = {
   Steps,
   Step,
   Badge,
   Button,
   Banner,
   Accordions,
   Accordion,
   Files,
   Folder,
   File,
   CodeBlock,
   Pre,
   Callout,
   Link,
}; // use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
   return {
      ...defaultMdxComponents,
      ...TabsComponents,
      ...components,
      ...customComponents,
      // HTML `ref` attribute conflicts with `forwardRef`
      pre: ({ ref, ...props }) => {
         void ref;
         return (
            <CodeBlock {...props}>
               <Pre>{props.children}</Pre>
            </CodeBlock>
         );
      },
   };
}
