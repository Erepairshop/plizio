import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroBiologie — Biologie Lernspiel Klasse 5-8 | Plizio",
  description: "Interaktives Biologie-Lernspiel für Klasse 5-8. Erkunde Planeten und entdecke Wirbeltiere, Pflanzen, Ökosysteme, Genetik und mehr!",
  alternates: buildHreflangAlternates("/astro-biologie/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroBiologie", description: "Interaktives Biologie-Lernspiel für Klasse 5-8. Erkunde Planeten und entdecke Wirbeltiere, Pflanzen, Ökosysteme, Genetik und mehr!", url: "/astro-biologie/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroBiologie", item: "/astro-biologie/" }])} />
      {children}
    </>
  );
}
