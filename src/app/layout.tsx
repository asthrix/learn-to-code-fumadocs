import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";

const appUrl =
   process.env.NEXT_PUBLIC_APP_URL ??
   (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
   metadataBase: new URL(appUrl),
   title: "TaskFlow Pro with React",
   description: "Project-based React curriculum that ships TaskFlow Pro.",
};

const inter = Inter({
   subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
   return (
      <html lang='en' className={inter.className} suppressHydrationWarning>
         <body className='flex flex-col min-h-screen'>
            <RootProvider>
               <ScrollToTop />
               {children}
            </RootProvider>
         </body>
      </html>
   );
}
