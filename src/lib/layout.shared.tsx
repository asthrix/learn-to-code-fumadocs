import Image from "next/image";

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
            <span className='group inline-flex items-center gap-2 font-semibold text-foreground'>
               <Image
                  src='/logo.png'
                  alt='Learn To Code logo'
                  width={28}
                  height={28}
                  priority
                  className="size-10 rounded-full border-border border"
               />
               <div className="flex flex-col">
               <p className="group-hover:text-primary transition-colors duration-300 text-lg">Learn To Code</p>
                  {/* <p className="text-[11px] text-muted-foreground">
                     Made by <b>Asthrix</b>
                  </p> */}
               
               </div>
            </span>
         ),
      },
      // see https://fumadocs.dev/docs/ui/navigation/links
      links: [
         {
            text: 'Courses',
            url: '/courses',
         },
         // {
         //    text: 'Documentation',
         //    url: '/docs',
         // },
         {
            text: 'Contact',
            url: '/contact',
         },
      ],
   };
}
