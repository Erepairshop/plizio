import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Vorbereitung – Kostenlos üben – Plizio",
  description: "Bereite dich optimal auf den nächsten Mathe-Test vor. Kostenlose Übungsaufgaben für alle Klassen mit sofortigem Feedback.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/blog/mathe-test-vorbereitung/"),
    canonical: "https://plizio.com/blog/mathe-test-vorbereitung/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
