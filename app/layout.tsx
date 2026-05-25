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
    default: "PLIZIO - Free Online Browser Games | Play Instantly",
    template: "%s | PLIZIO",
  },
  description:
    "Play free online browser games instantly - no download needed! Racing, driving, platformer, quiz, memory and reflex games. Play on any device.",
  keywords: [
    // English
    "free online games", "browser games", "no download games", "play online free",
    "racing game", "quiz game", "memory game", "reflex game", "driving game",
    "word game", "number game", "spot the difference game", "instant play games", "mobile browser games",
    // Magyar (Hungarian)
    "ingyenes online játékok", "böngésző játékok", "letöltés nélküli játékok",
    "ingyenes autós játék", "kvíz játék", "memória játék", "reflex játék",
    "szókirakós játék", "számjáték", "különbségkereső játék", "milliomosok játék",
    "online játékok gyerekeknek", "iskolai játékok", "tanulós játékok",
    // Deutsch (German)
    "kostenlose Online-Spiele", "Browser-Spiele", "Spiele ohne Download",
    "Rennspiel kostenlos", "Quiz-Spiel", "Gedächtnisspiel", "Reaktionsspiel",
    "Wortspiel online", "Zahlenspiel", "Unterschiede finden Spiel", "Millionär Spiel",
    "Online-Spiele für Kinder", "Lernspiele kostenlos",
    // Română (Romanian)
    "jocuri online gratuite", "jocuri browser", "jocuri fără descărcare",
    "joc de curse gratuit", "joc quiz", "joc memorie", "joc reflexe",
    "joc cuvinte", "joc numere", "gaseste diferentele joc", "jocuri pentru copii",
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
    title: "PLIZIO - Free Online Browser Games | Play Instantly",
    description:
      "Play free online browser games instantly - no download, no sign-up. Racing, driving, platformer, quiz, memory and reflex games on any device.",
    url: "https://plizio.com",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "PLIZIO - Online Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLIZIO - Free Online Browser Games",
    description:
      "Play free browser games instantly. Racing, quiz, memory, reflex games and more!",
    images: ["/icon-512.png"],
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* next/font preloads Caveat without a blocking Google Fonts stylesheet */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect/DNS-prefetch GTM so that the deferred GA load is DNS-warm when it fires */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="p:domain_verify" content="bc8e503b19ed76633d55b02b81588df6" />
        <meta name="google-adsense-account" content="ca-pub-9658871334491770" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9658871334491770" crossOrigin="anonymous"></script>
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
