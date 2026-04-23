import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroPhysik Klasse 5 – Kräfte & Energie | Plizio",
  description: "Lerne Physik Klasse 5: Kräfte, Energie, Wärme, Licht, Schall und Magnetismus.",
  alternates: buildHreflangAlternates("/astro-physik/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroPhysik 5", description: "Lerne Physik Klasse 5: Kräfte, Energie, Wärme, Licht, Schall und Magnetismus.", url: "/astro-physik/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroPhysik", item: "/astro-physik/" }, { name: "Grade 5", item: "/astro-physik/5/" }])} />
      {children}
    </>
  );
}
