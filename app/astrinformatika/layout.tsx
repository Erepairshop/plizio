import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroInformatika - Informatik Lernspiel Klasse 5-8 | Plizio",
  description: "Interaktives Informatik-Lernspiel fur Klasse 5-8. Lerne Algorithmen, Daten, Hardware, Netzwerke und Programmierung spielerisch.",
  alternates: buildHreflangAlternates("/astrinformatika/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroInformatika", description: "Interaktives Informatik-Lernspiel fur Klasse 5-8. Lerne Algorithmen, Daten, Hardware, Netzwerke und Programmierung spielerisch.", url: "/astrinformatika/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroInformatika", item: "/astrinformatika/" }])} />
      {children}
    </>
  );
}
