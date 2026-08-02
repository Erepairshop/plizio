import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 7 – Reaktionen & Bindungen | Plizio",
  description: "Chemie Klasse 7 mit chemischen Bindungen, Säuren, Basen, Salzen und Reaktionsmustern.",
  alternates: buildHreflangAlternates("/astrokemia/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroKemia 7", description: "Chemie Klasse 7 mit chemischen Bindungen, Säuren, Basen, Salzen und Reaktionsmustern.", url: "/astrokemia/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroKemia", item: "/astrokemia/" }, { name: "Klasse 7", item: "/astrokemia/7/" }])} />
      {children}
    </>
  );
}
