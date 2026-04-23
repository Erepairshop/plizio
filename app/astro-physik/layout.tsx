import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroPhysik – Physik lernen | Plizio",
  description: "Lerne Physik spielerisch! Klasse 5–8 mit interaktiven Inseln und Quizzen.",
  alternates: buildHreflangAlternates("/astro-physik/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroPhysik", description: "Lerne Physik spielerisch! Klasse 5–8 mit interaktiven Inseln und Quizzen.", url: "/astro-physik/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroPhysik", item: "/astro-physik/" }])} />
      {children}
    </>
  );
}
