import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmdreturn.io"),
  title: "CmdReturn — Retail Management Platform",
  description:
    "Built for Canadian independent retailers and the institutions that serve them. From the sales floor to the invoice.",
  keywords: [
    "retail management",
    "POS",
    "inventory",
    "Canadian",
    "SaaS",
    "CmdReturn",
  ],
  openGraph: {
    title: "CmdReturn — Retail Management Platform",
    description:
      "Built for Canadian independent retailers and the institutions that serve them. From the sales floor to the invoice.",
    url: "https://cmdreturn.io",
    siteName: "CmdReturn",
    images: [
      {
        url: "/og-image.png",
        width: 1500,
        height: 500,
        alt: "CmdReturn — Retail Management Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CmdReturn — Retail Management Platform",
    description:
      "Built for Canadian independent retailers and the institutions that serve them. From the sales floor to the invoice.",
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
