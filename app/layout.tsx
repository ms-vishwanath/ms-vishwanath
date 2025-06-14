import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { GoogleAnalytics } from "@next/third-parties/google";

const primaryFont = localFont({
  src: "./fonts/dm_sans/DM_SANS.ttf"
})

export const metadata: Metadata = {
  title: "MS-VISHWANATH",
  description: "3D DIMENSIONAL PORTFOLIO OF AN FULL STACK DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${primaryFont.className}`}
      >
        {children}
              <GoogleAnalytics gaId="G-XYZ" />
      </body>
    </html>
  );
}
