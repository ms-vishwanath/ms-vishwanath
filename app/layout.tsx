import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ms-vishwanath.web.app"),
  title: "M. S. Vishwanath — Full Stack AI Developer",
  description:
    "Full Stack AI Developer, software architect, freelancer and trainer. I design and build intelligent, scalable, production-ready products.",
  openGraph: {
    title: "M. S. Vishwanath — Full Stack AI Developer",
    description: "Full-stack engineering, AI, distributed systems and product building.",
    url: "https://ms-vishwanath.web.app",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff6d6",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
