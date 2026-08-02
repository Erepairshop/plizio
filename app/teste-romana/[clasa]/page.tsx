import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import RomanianTestClasa from "@/components/RomanianTestClasa";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

const GRADES = [1, 3, 4, 5, 6, 7, 8] as const;

const META: Record<number, { title: string; description: string }> = {
  1: { title: "Test Limba Română Clasa I Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa I (6–7 ani): alfabet, silabe, sunete, citire și scriere. Exersează online fără înregistrare." },
  3: { title: "Test Limba Română Clasa a III-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a III-a (8–9 ani): substantiv, verb, adjectiv și propoziția dezvoltată." },
  4: { title: "Test Limba Română Clasa a IV-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a IV-a (9–10 ani): analiză gramaticală, compunere și ortografie avansată." },
  5: { title: "Test Limba Română Clasa a V-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a V-a (10–11 ani): morfologie, fonetică, lexic și sintaxă." },
  6: { title: "Test Limba Română Clasa a VI-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a VI-a (11–12 ani): morfologie avansată, sintaxă, text literar și stilistică." },
  7: { title: "Test Limba Română Clasa a VII-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a VII-a (12–13 ani): sintaxă avansată, figuri de stil și comentariu literar." },
  8: { title: "Test Limba Română Clasa a VIII-a Online – Gratuit | PLIZIO", description: "Test gratuit de limba română pentru clasa a VIII-a (13–14 ani): pregătire pentru Evaluarea Națională, sintaxă și morfologie." },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return GRADES.map((grade) => ({ clasa: `clasa-${grade}` }));
}

function parseGrade(value: string): number | null {
  const match = /^clasa-([1-8])$/.exec(value);
  if (!match) return null;
  const grade = Number(match[1]);
  return grade === 2 ? null : grade;
}

export async function generateMetadata({ params }: { params: Promise<{ clasa: string }> }): Promise<Metadata> {
  const { clasa } = await params;
  const grade = parseGrade(clasa);
  if (!grade) return {};
  const meta = META[grade];
  return {
    title: meta.title,
    description: meta.description,
    alternates: buildHreflangAlternates(`/teste-romana/clasa-${grade}/`),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://plizio.com/teste-romana/clasa-${grade}/`,
      images: [{ url: "/icon-512.png", width: 512, height: 512 }],
    },
  };
}

export default async function RomanianGradePage({ params }: { params: Promise<{ clasa: string }> }) {
  const { clasa } = await params;
  const grade = parseGrade(clasa);
  if (!grade) notFound();
  const meta = META[grade];
  const route = `/teste-romana/clasa-${grade}/`;

  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: meta.title, description: meta.description, url: route, educationalLevel: `Clasa ${grade}` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Acasă", item: "/" }, { name: "Teste Română", item: "/teste-romana/" }, { name: `Clasa ${grade}`, item: route }])} />
      <RomanianTestClasa grade={grade} />
    </>
  );
}
