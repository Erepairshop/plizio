import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biologie Test — Klasse 5 | Plizio",
  description: "Kostenloser Biologie-Test für Klasse 5. Testen Sie Ihr Wissen über Wirbeltiere, Pflanzen, Körperfunktionen und mehr.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/biologietest/"),
    canonical: "https://plizio.com/biologietest/",
  },
  openGraph: {
    title: "Biologie Test — Klasse 5 | Plizio",
    description: "Kostenloser Biologie-Test für Klasse 5",
    url: "https://plizio.com/biologietest/",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
