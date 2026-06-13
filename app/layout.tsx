import type { Metadata, Viewport } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { LanguageProvider } from "@/components/LanguageProvider";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import GlobalOverlays from "@/components/GlobalOverlays";
import MapPrefetcher from "@/components/MapPrefetcher";
import SiteFooterNav from "@/components/SiteFooterNav";
import { buildOrganizationSchema, buildWebsiteSchema, buildSiteFeaturesSchema } from "@/lib/seo/schema";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plizio.com"),
  title: {
    default: "Plizio: Learning, Interactive Maps and City Day Plans",
    template: "%s | PLIZIO",
  },
  description:
    "Explore travel destinations and cities with interactive maps and ready-made day plans. Plus free learning and practice tests for kids. 4 languages, no sign-up.",
  keywords: [
    // English
    "travel destinations", "city travel guide", "things to do", "city day plan", "interactive travel map",
    "free learning for kids", "online school tests", "interactive map for kids",
    "history quiz", "geography map", "learn online free", "exam practice tests",
    // Magyar (Hungarian)
    "úti célok", "városnéző útiterv", "látnivalók", "egy nap a városban", "interaktív térkép",
    "ingyenes tanulás gyerekeknek", "online teszt gyerekeknek",
    "történelem kvíz", "földrajz térkép", "tanulás online", "gyakorló teszt",
    // Deutsch (German)
    "Reiseziele", "Städtereise Tipps", "Sehenswürdigkeiten", "Tagesplan Stadt", "interaktive Karte",
    "kostenlos lernen für Kinder", "Online-Tests Schule",
    "Geschichte Quiz", "Geografie Karte", "online lernen kostenlos", "Übungstests Schule",
    // Română (Romanian)
    "destinații de călătorie", "ghid oraș", "obiective turistice", "itinerar de oraș", "hartă interactivă",
    "învățare gratuită pentru copii", "teste școlare online",
    "quiz istorie", "hartă geografie", "învățare online gratuit", "teste de exersare",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Plizio",
  },
  openGraph: {
    type: "website",
    siteName: "PLIZIO",
    title: "Plizio: Learning, Interactive Maps and City Day Plans",
    description:
      "Explore travel destinations and cities with interactive maps and ready-made day plans. Plus free learning and practice tests for kids. 4 languages, no sign-up.",
    url: "https://plizio.com",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 409,
        alt: "Plizio: interactive maps, city day plans and learning for kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Learning, Interactive Maps and City Day Plans",
    description:
      "Travel destinations, interactive maps and city day plans, plus free learning and tests for kids. 4 languages, no sign-up.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://plizio.com/",
    languages: {
      hu: "https://plizio.com/hu/",
      de: "https://plizio.com/de/",
      en: "https://plizio.com/en/",
      ro: "https://plizio.com/ro/",
      "x-default": "https://plizio.com/",
    },
  },
  verification: {
    google: "355ioFFi82RnTG_QoH-vBz7QMNb_yxejYmB1ay6Dw4k",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics loaded conditionally via CookieConsent component */}
        <link rel="preload" as="image" href="/apple-touch-icon.png" />
        <link rel="preload" as="image" href="/favicon-32x32.png" />
        <link rel="preload" as="image" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* next/font preloads Caveat without a blocking Google Fonts stylesheet */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect/DNS-prefetch GTM so that the deferred GA load is DNS-warm when it fires */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="p:domain_verify" content="bc8e503b19ed76633d55b02b81588df6" />
        <meta name="google-adsense-account" content="ca-pub-9658871334491770" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9658871334491770" crossOrigin="anonymous"></script>
        {/* Umami analytics — same site as the static POI pages */}
        <script defer src="https://stats.plizio.com/script.js" data-website-id="b718db4e-ee1b-43db-a89a-af4ecc5435bf"></script>
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <JsonLd data={buildSiteFeaturesSchema()} />
      </head>
      <body className={`${caveat.variable} min-h-screen bg-bg antialiased`}>
        <LanguageProvider>
          {children}
          <GlobalOverlays />
          <MapPrefetcher />
        </LanguageProvider>
        {/* Crawlable HTML site map — server-rendered, in every page's static HTML
            (the homepage itself returns null at SSR, so its links must live here). */}
        <SiteFooterNav />
        <CookieConsent />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
