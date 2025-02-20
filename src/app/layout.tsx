import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/app/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A sample project using Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main style={{ minHeight: "calc(100vh - 100px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
