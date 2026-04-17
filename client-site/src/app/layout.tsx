import type { Metadata } from "next";
import Header from "@/components/Header";
import { SettingsProvider } from "@/context/SettingsContext";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import PreLoader from "@/components/PreLoader";

export const metadata: Metadata = {
  title: "QuranFlow - Read and Explore the Noble Quran",
  description:
    "Experience the Quran like never before. Designed for excellence.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAF9]">
        <SettingsProvider>
          <Header />
          <main>
            <PreLoader />
            {children}
            <ScrollToTop />
          </main>

          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
