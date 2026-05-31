import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroChemie: Chemie spielend lernen | Plizio",
    desc: "Kostenloses interaktives Chemie-Lernspiel als Weltraumreise für die Klassen 5 bis 8. Ohne Anmeldung, direkt im Browser spielen.",
  },
  hu: {
    title: "AstroKémia: játszva tanult kémia | Plizio",
    desc: "Ingyenes, interaktív kémia tanulójáték űrutazás formájában, 5-8. osztályosoknak. Regisztráció nélkül, egyből a böngészőben.",
  },
  ro: {
    title: "AstroChimie: chimie prin joc | Plizio",
    desc: "Joc educativ interactiv și gratuit de chimie sub formă de călătorie spațială, pentru clasele 5-8. Fără înregistrare, direct în browser.",
  },
  en: {
    title: "AstroChemistry: learn chemistry by playing | Plizio",
    desc: "Free interactive chemistry learning game as a space journey for grades 5 to 8. No sign-up, play right in your browser.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const m = META[lang];
  if (!m) return {};
  return {
    title: m.title,
    description: m.desc,
    alternates: buildHreflangAlternates(`/${lang}/astrokemia/`),
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const m = META[lang] || META.en;
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroKemia", description: m.desc, url: `/${lang}/astrokemia/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroKemia", item: `/${lang}/astrokemia/` }])} />
      {children}
    </>
  );
}
