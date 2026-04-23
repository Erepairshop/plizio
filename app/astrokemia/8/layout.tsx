import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 8 – Organik & Energie | Plizio",
  description: "Chemie Klasse 8 mit organischer Chemie, Energiethemen, Gleichgewichten und moderner Anwendung.",
  alternates: buildHreflangAlternates("/astrokemia/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroKemia 8", description: "Chemie Klasse 8 mit organischer Chemie, Energiethemen, Gleichgewichten und moderner Anwendung.", url: "/astrokemia/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroKemia", item: "/astrokemia/" }, { name: "Grade 8", item: "/astrokemia/8/" }])} />
      {children}
    </>
  );
}
