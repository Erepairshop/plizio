import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Teste de Limba Română Online | PLIZIO",
  description: "Teste interactive de limba română pentru clasele primare și gimnaziale. Exerciții de alfabet, ortografie, gramatică, lectură și scriere. Gratuit, fără cont.",
  alternates: buildHreflangAlternates("/teste-romana/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Teste Romana", description: "Teste interactive de limba română pentru clasele primare și gimnaziale. Exerciții de alfabet, ortografie, gramatică, lectură și scriere. Gratuit, fără cont.", url: "/teste-romana/", educationalLevel: "Clasa 2-8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Teste Romana", item: "/teste-romana/" }])} />
      {children}
    </>
  );
}
