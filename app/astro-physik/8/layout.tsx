import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroPhysik Klasse 8 – Atom & Moderne Physik | Plizio",
  description: "Lerne Physik Klasse 8: Elektrizität, Elektromagnetismus, Atomphysik, Relativität und Quantenphysik.",
  alternates: buildHreflangAlternates("/astro-physik/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroPhysik 8", description: "Lerne Physik Klasse 8: Elektrizität, Elektromagnetismus, Atomphysik, Relativität und Quantenphysik.", url: "/astro-physik/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroPhysik", item: "/astro-physik/" }, { name: "Grade 8", item: "/astro-physik/8/" }])} />
      {children}
    </>
  );
}
