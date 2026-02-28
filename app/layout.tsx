import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  metadataBase: new URL("https://plizio.com"),
  title: {
    default: "PLIZIO - Free Online Browser Games | Play Instantly",
    template: "%s | PLIZIO",
  },
  description:
    "Play free online browser games instantly - no download needed! Racing, driving, platformer, quiz, memory and reflex games. Play on any device.",
  keywords: [
    "free online games",
    "browser games",
    "no download games",
    "play online free",
    "racing game",
    "quiz game",
    "memory game",
    "reflex game",
    "platformer game",
    "driving game",
    "word game",
    "number game",
    "spot the difference game",
    "millionaire quiz game",
    "instant play games",
    "mobile browser games",
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
    card: "summary",
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
  },
  verification: {
    google: "E_x8SJQIW36HgaFQdPWSFCT7kPZi3GSdXbfOFgebiKE",
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
    <html lang="hu">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen bg-bg antialiased">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
