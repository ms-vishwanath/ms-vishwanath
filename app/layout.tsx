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
  keywords: ["M. S. Vishwanath", "Vishwanath", "Full Stack Developer", "AI Developer", "Freelance developer Coimbatore", "Next.js", "Node.js", "Microservices", "Portfolio"],
  authors: [{ name: "M. S. Vishwanath", url: "https://ms-vishwanath.web.app" }],
  alternates: { canonical: "/" },
  twitter: { card: "summary_large_image", title: "M. S. Vishwanath — Full Stack AI Developer", description: "Take a drive through 70+ projects in full-stack engineering, AI and distributed systems." },
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
    <html lang="en" className={`loading ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a href="#about" className="sr-only fixed left-3 top-3 z-[200] rounded-lg border-2 border-ink bg-white px-4 py-2 font-semibold focus:not-sr-only">Skip to content</a>
        <noscript>
          <style>{`html.loading,html.loading body{overflow:auto!important}[aria-label=Loading]{display:none!important}html.loading .hud,html.loading [data-car],html.loading .coin,html.loading .cone{opacity:1!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "M. S. Vishwanath",
              jobTitle: "Full Stack AI Developer",
              url: "https://ms-vishwanath.web.app",
              email: "mailto:msvishwanath@outlook.com",
              address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", addressCountry: "IN" },
              sameAs: ["https://github.com/ms-vishwanath", "https://linkedin.com/in/msvishwanath", "https://www.giraffai.in"],
              knowsAbout: ["Full-stack development", "Artificial intelligence", "Microservices", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
