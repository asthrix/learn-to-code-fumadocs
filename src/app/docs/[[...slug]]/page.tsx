import { getPageImage, source, getCourseSource } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getCourseById } from '@/lib/courses';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  
  // Check if this is a course-specific page
  const courseId = params.slug?.[0];
  const course = courseId ? getCourseById(courseId) : null;
  
  // Use course-specific source if we're in a course, otherwise use global source
  const pageSource = course && courseId ? getCourseSource(courseId) : source;
  const page = pageSource.getPage(params.slug);
  
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(pageSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  
  // Check if this is a course-specific page for metadata
  const courseId = params.slug?.[0];
  const course = courseId ? getCourseById(courseId) : null;
  
  // Use course-specific source if we're in a course, otherwise use global source
  const pageSource = course && courseId ? getCourseSource(courseId) : source;
  const page = pageSource.getPage(params.slug);
  
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
