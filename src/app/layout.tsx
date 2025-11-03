import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";

const appUrl =
   process.env.NEXT_PUBLIC_APP_URL ??
   (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
   metadataBase: new URL(appUrl),
   title: "Learn to Code | Project-Based Web Development Courses",
   description: "Master HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS through hands-on project-based learning. Build real-world applications from scratch.",
};

// const inter = Inter({
//    subsets: ["latin"],
// });

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});



export default function Layout({ children }: LayoutProps<"/">) {
   return (
      <html lang='en' className={poppins.className} suppressHydrationWarning>
         <head>
            <link
               rel='apple-touch-icon'
               sizes='180x180'
               href='/favicon_images/apple-touch-icon.png'
            />
            <link
               rel='icon'
               type='image/png'
               sizes='32x32'
               href='/favicon_images/favicon-32x32.png'
            />
            <link
               rel='icon'
               type='image/png'
               sizes='16x16'
               href='/favicon_images/favicon-16x16.png'
            />
            <link rel='manifest' href='/favicon_images/site.webmanifest' />
         </head>
         <body className='flex flex-col min-h-screen'>
            <RootProvider>
               <ScrollToTop />
               {children}
            </RootProvider>
         </body>
      </html>
   );
}
