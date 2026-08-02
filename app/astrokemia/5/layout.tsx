import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 5 – Stoffe & Teilchen | Plizio",
  description: "Chemie Klasse 5 mit Stoffen, Teilchenmodell, Gemischen, Wasser, Luft und Laborgrundlagen.",
  alternates: buildHreflangAlternates("/astrokemia/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroKemia 5", description: "Chemie Klasse 5 mit Stoffen, Teilchenmodell, Gemischen, Wasser, Luft und Laborgrundlagen.", url: "/astrokemia/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroKemia", item: "/astrokemia/" }, { name: "Klasse 5", item: "/astrokemia/5/" }])} />
      {children}
    </>
  );
}
