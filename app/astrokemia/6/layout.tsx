import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 6 – Atome & Trennmethoden | Plizio",
  description: "Chemie Klasse 6 mit Stofftrennung, Atomen, Elementen, Reaktionen und ersten Formelsystemen.",
  alternates: buildHreflangAlternates("/astrokemia/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroKemia 6", description: "Chemie Klasse 6 mit Stofftrennung, Atomen, Elementen, Reaktionen und ersten Formelsystemen.", url: "/astrokemia/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroKemia", item: "/astrokemia/" }, { name: "Klasse 6", item: "/astrokemia/6/" }])} />
      {children}
    </>
  );
}
