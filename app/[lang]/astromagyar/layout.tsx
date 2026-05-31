import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroUngarisch: Ungarisch spielend lernen | Plizio",
    desc: "Kostenloses interaktives Lernspiel für die ungarische Sprache als Weltraumreise. Ohne Anmeldung, direkt im Browser spielen.",
  },
  hu: {
    title: "AstroMagyar: játszva tanult magyar | Plizio",
    desc: "Ingyenes, interaktív magyar nyelv tanulójáték űrutazás formájában. Regisztráció nélkül, egyből a böngészőben játszható.",
  },
  ro: {
    title: "AstroMaghiară: maghiara prin joc | Plizio",
    desc: "Joc educativ interactiv și gratuit de limba maghiară sub formă de călătorie spațială. Fără înregistrare, direct în browser.",
  },
  en: {
    title: "AstroHungarian: learn Hungarian by playing | Plizio",
    desc: "Free interactive Hungarian language learning game as a space journey. No sign-up, play right in your browser.",
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
    alternates: buildHreflangAlternates(`/${lang}/astromagyar/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroMagyar", description: m.desc, url: `/${lang}/astromagyar/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroMagyar", item: `/${lang}/astromagyar/` }])} />
      {children}
    </>
  );
}
