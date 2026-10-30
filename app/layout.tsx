import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY, EMAIL, LINKEDIN_URL, PHONE_E164, SITE_URL } from "@/lib/site";

// ProfessionalService is a kind of Organization in schema.org.
const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "CmdReturn",
  legalName: COMPANY,
  url: SITE_URL,
  logo: `${SITE_URL}/cmdreturn_profile_800.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Fixed-price software studio for small businesses: fixes, rescues of AI-built apps, AI integrations and custom systems.",
  email: EMAIL,
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  ...(LINKEDIN_URL ? { sameAs: [LINKEDIN_URL] } : {}),
};

// Self-hosted variable fonts (latin subset, SIL OFL; licences in app/fonts),
// so builds never need to reach Google Fonts.
const inter = localFont({
  src: "./fonts/Inter-Variable-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable-latin.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

const SITE_TITLE = "CmdReturn | Fixed-price software studio for small businesses";
const SITE_DESCRIPTION =
  "Fixes, rescues of AI-built apps, AI integrations and custom systems for small businesses, scoped and priced before work starts.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cmdreturn.io"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "fixed-price software",
    "software studio",
    "small business software",
    "AI app rescue",
    "AI integration",
    "custom software",
    "Toronto",
    "CmdReturn",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://cmdreturn.io",
    siteName: "CmdReturn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CmdReturn: software that ships, at a fixed price.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={ORGANIZATION_LD} />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
