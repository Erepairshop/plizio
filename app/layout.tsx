import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLIZIO",
  description: "Play. Duel. Collect.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg antialiased">
        {children}
      </body>
    </html>
  );
}
