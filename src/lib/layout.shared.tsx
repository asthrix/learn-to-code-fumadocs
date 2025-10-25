import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
   return {
      nav: {
         title: (
            <span className='inline-flex items-center gap-2 font-semibold text-foreground'>
               <img
                  src='/logo.png'
                  alt='Learn To Code logo'
                  width={28}
                  height={28}
                  loading='lazy'
               />
               Learn To Code
            </span>
         ),
      },
      // see https://fumadocs.dev/docs/ui/navigation/links
      links: [],
   };
}
