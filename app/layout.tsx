import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "PLIZIO",
  description: "Play. Duel. Collect.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Plizio",
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
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-screen bg-bg antialiased">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
