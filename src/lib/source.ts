import { docs } from "@/.source";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
   baseUrl: "/docs",
   source: docs.toFumadocsSource(),
   plugins: [lucideIconsPlugin()],
});

type SourcePage = InferPageType<typeof source>;

type CoursePageNode = {
   type: "page";
   name: string;
   url: string;
   external: boolean;
};

type CourseFolderNode = {
   type: "folder";
   name: string;
   children: CourseTreeNode[];
};

type CourseTreeNode = CoursePageNode | CourseFolderNode;

// Helper function to create course-specific source with filtered content
export function getCourseSource(courseId: string) {
   // Get all pages and filter for the specific course
   const allPages = source.getPages();
   const coursePages = allPages.filter((page) => page.slugs[0] === courseId);

   // Create a hierarchical tree structure that groups pages properly
   const createCourseTree = () => {
      const tree: CourseFolderNode = {
         name: courseId,
         type: "folder",
         children: [],
      };

      // Group pages by their path structure
      const groupedPages = new Map<string, SourcePage[]>();

      coursePages.forEach((page) => {
         if (page.slugs.length === 1) {
            // Root course page
            tree.children.push({
               type: "page",
               name: page.data.title || "Course Overview",
               url: page.url,
               external: false,
            });
         } else if (page.slugs.length === 2) {
            // Direct child pages (intro, m0, m1, etc.)
            tree.children.push({
               type: "page",
               name: page.data.title || page.slugs[1],
               url: page.url,
               external: false,
            });
         } else {
            // Nested pages - group by parent folder
            const parentSlug = page.slugs[1];
            if (!groupedPages.has(parentSlug)) {
               groupedPages.set(parentSlug, []);
            }
            groupedPages.get(parentSlug)?.push(page);
         }
      });

      // Add grouped nested pages as folders
      groupedPages.forEach((pages, parentSlug) => {
         const folderNode: CourseFolderNode = {
            type: "folder",
            name: parentSlug.toUpperCase(),
            children: pages.map(
               (page): CoursePageNode => ({
                  type: "page",
                  name: page.data.title || page.slugs[page.slugs.length - 1],
                  url: page.url,
                  external: false,
               })
            ),
         };
         tree.children.push(folderNode);
      });

      return tree;
   };

   const courseTree = createCourseTree();

   return {
      ...source,
      getPages: () => coursePages,
      pageTree: courseTree,
   };
}

export function getPageImage(page: InferPageType<typeof source>) {
   const segments = [...page.slugs, "image.png"];

   return {
      segments,
      url: `/og/docs/${segments.join("/")}`,
   };
}

export async function getLLMText(page: InferPageType<typeof source>) {
   const processed = await page.data.getText("processed");

   return `# ${page.data.title} (${page.url})

${processed}`;
}
