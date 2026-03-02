import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { LanguageProvider } from "@/components/LanguageProvider";

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
    canonical: "https://plizio.com",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PLIZIO",
  url: "https://plizio.com",
  description:
    "Free online browser games - play instantly, no download needed. Brain games, educational games, school tests, and more.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://plizio.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BR2WCCRFG0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-BR2WCCRFG0');`,
          }}
        />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        {/* Font: self-host Caveat for performance – files served from /public/fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
