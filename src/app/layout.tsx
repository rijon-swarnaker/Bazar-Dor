import type { Metadata } from "next";
import { Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/components/Header/Header";
import NavBer from "@/components/Header/NavBer/NavBer";
import { Suspense } from "react";
import MarqueePage from "@/components/Header/Marquee/Marquee";
import FooterPage from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BazarDor | বাংলাদেশের দৈনিক বাজারদর",
  description:
    "বাংলাদেশের বিভিন্ন বাজারে নিত্যপ্রয়োজনীয় পণ্যের দাম, সর্বনিম্ন ও সর্বোচ্চ বাজারদর জানুন BazarDor-এ।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <div className="sticky top-0 z-50">
          <HeaderPage />

          <Suspense fallback={<div>Loading navbar...</div>}>
            <NavBer />
          </Suspense>
          </div>

          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <MarqueePage />
          </Suspense>

          <main>{children}</main>
          <FooterPage/>
          <Toaster />
        
      </body>
    </html>
  );
}
