import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Einmaleins lernen – Tipps & kostenlose Übungen – Plizio",
  description: "Das Einmaleins schnell und sicher lernen – Methoden, Gedächtnisstützen und kostenlose Übungsaufgaben für Klasse 2–3.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/blog/einmaleins-lernen/"),
    canonical: "https://plizio.com/blog/einmaleins-lernen/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
