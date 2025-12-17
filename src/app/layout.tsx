import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
   SEO_CONFIG,
   HOME_KEYWORDS,
   getCanonicalUrl,
   getOgImageUrl,
} from "@/lib/seo-config";
import {
   OrganizationSchema,
   WebSiteSchema,
} from "@/components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";

const appUrl =
   process.env.NEXT_PUBLIC_APP_URL ??
   (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const siteTitle = "Code To Learn | Project-Based Web Development Courses";
const siteDescription =
   "Master HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS through hands-on project-based learning. Build real-world applications from scratch.";

export const metadata: Metadata = {
   metadataBase: new URL(appUrl),
   title: {
      default: siteTitle,
      template: "%s | Code To Learn",
   },
   description: siteDescription,
   keywords: HOME_KEYWORDS,
   authors: [{ name: "Code To Learn" }],
   creator: "Code To Learn",
   publisher: "Code To Learn",

   // Open Graph
   openGraph: {
      type: "website",
      locale: SEO_CONFIG.locale,
      url: SEO_CONFIG.siteUrl,
      siteName: SEO_CONFIG.siteName,
      title: siteTitle,
      description: siteDescription,
      images: [
         {
            url: getOgImageUrl(),
            width: SEO_CONFIG.defaultOgImage.width,
            height: SEO_CONFIG.defaultOgImage.height,
            alt: SEO_CONFIG.defaultOgImage.alt,
         },
      ],
   },

   // Twitter Card
   twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      creator: SEO_CONFIG.twitter.creator,
      site: SEO_CONFIG.twitter.handle,
      images: [getOgImageUrl()],
   },

   // Additional Meta
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },

   verification: {
      google: "10K6YeY4nTrR98LwhZNIrZVyNNUQJVHidJyxeNU41jE", //vj.coder15@gmail.com
      // google: "9rvY3OG01Kk2JoEqY_D2jhhDdg-4FCEQ2IBZquZIFyw", //vj.developer15@gmail.com
   },

   // Alternate Languages (add more if you support multiple languages)
   alternates: {
      canonical: getCanonicalUrl("/"),
   },
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

            <meta
               name='google-site-verification'
               content='10K6YeY4nTrR98LwhZNIrZVyNNUQJVHidJyxeNU41jE'
            />

            {/* <meta
               name='google-site-verification'
               content='9rvY3OG01Kk2JoEqY_D2jhhDdg-4FCEQ2IBZquZIFyw'
            /> */}

            {/* Structured Data - Organization & WebSite Schema */}
            <OrganizationSchema />
            <WebSiteSchema />
         </head>
         <body className='flex flex-col min-h-screen'>
            <RootProvider>
               <ScrollToTop />
               {children}
            </RootProvider>
            <Analytics />
         </body>
      </html>
   );
}
