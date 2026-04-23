import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Test Limba Română Clasa a II-a Online – Gratuit | PLIZIO",
  description: "Test gratuit de limba română pentru clasa a II-a (7–8 ani): ortografie, părți de vorbire, propoziția, textul narativ. Exersează online – fără înregistrare!",
  alternates: buildHreflangAlternates("/teste-romana/clasa-2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Test Limba Română Clasa a II-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a II-a (7–8 ani): ortografie, părți de vorbire, propoziția, textul narativ. Exersează online – fără înregistrare!", url: "/teste-romana/clasa-2/", educationalLevel: "Clasa 2" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Teste Romana", item: "/teste-romana/" }, { name: "Clasa 2", item: "/teste-romana/clasa-2/" }])} />
      {children}
    </>
  );
}
