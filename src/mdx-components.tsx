import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/banner";
import { Accordions, Accordion } from "@/components/accordion";
import { Files, Folder, File } from "@/components/files";
import { Steps, Step } from "@/components/steps";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
   return {
      ...defaultMdxComponents,
      ...TabsComponents,
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
      ...components,
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
