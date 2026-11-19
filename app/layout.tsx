import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { GoogleAnalytics } from "@next/third-parties/google";

const primaryFont = localFont({
  src: "./fonts/dm_sans/DM_SANS.ttf"
})

export const metadata: Metadata = {
  title: "M. S. Vishwanath | Software Developer & Full Stack Engineer",
  description:
    "Portfolio of M. S. Vishwanath - Full Stack Developer with experience in scalable web applications, microservices architecture, AI-powered tools, and distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`bg-white text-slate-900 antialiased ${primaryFont.className}`}
      >
        {children}
              <GoogleAnalytics gaId="G-XYZ" />
      </body>
    </html>
  );
}
