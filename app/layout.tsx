import type { Metadata, Viewport } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { LanguageProvider } from "@/components/LanguageProvider";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import GlobalOverlays from "@/components/GlobalOverlays";
import MapPrefetcher from "@/components/MapPrefetcher";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo/schema";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plizio.com"),
  title: {
    default: "Plizio: Free Learning for Kids with Tests, Games and Maps",
    template: "%s | PLIZIO",
  },
  description:
    "Free learning for kids: practice tests, interactive subject games and explorable maps for math, science, history and geography. 4 languages, no sign-up.",
  keywords: [
    // English
    "free learning games for kids", "online school tests", "interactive map for kids",
    "math games for kids", "science games", "history quiz", "geography map",
    "educational games free", "learn online free", "study games", "exam practice tests",
    // Magyar (Hungarian)
    "ingyenes tanulójátékok", "online teszt gyerekeknek", "interaktív térkép",
    "matek játék gyerekeknek", "természettudomány játék", "történelem kvíz", "földrajz térkép",
    "oktató játékok ingyen", "tanulás online", "gyakorló teszt",
    // Deutsch (German)
    "kostenlose Lernspiele für Kinder", "Online-Tests Schule", "interaktive Karte für Kinder",
    "Mathe-Spiele Kinder", "Wissenschaftsspiele", "Geschichte Quiz", "Geografie Karte",
    "Lernspiele kostenlos", "online lernen kostenlos", "Übungstests Schule",
    // Română (Romanian)
    "jocuri educative gratuite", "teste școlare online", "hartă interactivă pentru copii",
    "jocuri matematică copii", "jocuri știință", "quiz istorie", "hartă geografie",
    "învățare online gratuit", "teste de exersare", "jocuri pentru copii",
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
    title: "Plizio: Free Learning for Kids with Tests, Games and Maps",
    description:
      "Free learning for kids: practice tests, interactive subject games and explorable maps for math, science, history and geography. 4 languages, no sign-up.",
    url: "https://plizio.com",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 409,
        alt: "Plizio: learning for kids with tests, games and maps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Free Learning for Kids with Tests, Games and Maps",
    description:
      "Free learning for kids: practice tests, interactive games and explorable maps. Math, science, history, geography. 4 languages, no sign-up.",
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
      </head>
      <body className={`${caveat.variable} min-h-screen bg-bg antialiased`}>
        <LanguageProvider>
          {children}
          <GlobalOverlays />
          <MapPrefetcher />
        </LanguageProvider>
        <CookieConsent />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
