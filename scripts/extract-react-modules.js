/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const baseDir = path.join(process.cwd(), "content", "docs", "react");
const moduleSlugs = fs
   .readdirSync(baseDir)
   .filter((entry) => entry.startsWith("m"))
   .sort((a, b) => a.localeCompare(b));

const modules = moduleSlugs
   .map((slug) => {
      const metaPath = path.join(baseDir, slug, "meta.json");
      if (!fs.existsSync(metaPath)) return null;

      const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
      const lessons = (meta.pages || [])
         .map((page) => {
            const filePath = path.join(baseDir, slug, `${page}.mdx`);
            if (!fs.existsSync(filePath)) return null;

            const source = fs.readFileSync(filePath, "utf8");
            const frontmatterMatch = source.match(
               /^---[\r\n]+([\s\S]*?)[\r\n]+---/
            );

            let title = page.replace(/_/g, " ");
            let duration = "—";

            if (frontmatterMatch) {
               const lines = frontmatterMatch[1]
                  .split(/\r?\n/)
                  .map((line) => line.trim())
                  .filter(Boolean);

               for (const line of lines) {
                  if (line.startsWith("title:")) {
                     const doubleQuoted = line.match(/title:\s*"([^"]+)"/);
                     const singleQuoted = line.match(/title:\s*'([^']+)'/);

                     if (doubleQuoted) title = doubleQuoted[1];
                     else if (singleQuoted) title = singleQuoted[1];
                     else title = line.replace("title:", "").trim();
                  }

                  if (line.startsWith("duration:")) {
                     const doubleQuoted = line.match(/duration:\s*"([^"]+)"/);
                     const singleQuoted = line.match(/duration:\s*'([^']+)'/);
                     const unquoted = line.match(/duration:\s*(\S+)/);

                     if (doubleQuoted) duration = doubleQuoted[1];
                     else if (singleQuoted) duration = singleQuoted[1];
                     else if (unquoted) duration = unquoted[1];
                  }
               }
            }

            return { page, title, duration };
         })
         .filter(Boolean);

      return { slug, title: meta.title, lessons };
   })
   .filter(Boolean);

const outputPath = path.join(process.cwd(), "react-modules.json");
fs.writeFileSync(outputPath, JSON.stringify(modules, null, 2));
console.log(`Wrote ${modules.length} modules to ${outputPath}`);
