import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

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
      </body>
    </html>
  );
}
