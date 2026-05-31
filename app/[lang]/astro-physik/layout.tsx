import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroPhysik: Physik spielend lernen | Plizio",
    desc: "Kostenloses interaktives Physik-Lernspiel als Weltraumreise für die Klassen 5 bis 8. Ohne Anmeldung, direkt im Browser spielen.",
  },
  hu: {
    title: "AstroFizika: játszva tanult fizika | Plizio",
    desc: "Ingyenes, interaktív fizika tanulójáték űrutazás formájában, 5-8. osztályosoknak. Regisztráció nélkül, egyből a böngészőben.",
  },
  ro: {
    title: "AstroFizică: fizica prin joc | Plizio",
    desc: "Joc educativ interactiv și gratuit de fizică sub formă de călătorie spațială, pentru clasele 5-8. Fără înregistrare, direct în browser.",
  },
  en: {
    title: "AstroPhysics: learn physics by playing | Plizio",
    desc: "Free interactive physics learning game as a space journey for grades 5 to 8. No sign-up, play right in your browser.",
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
    alternates: buildHreflangAlternates(`/${lang}/astro-physik/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroPhysik", description: m.desc, url: `/${lang}/astro-physik/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroPhysik", item: `/${lang}/astro-physik/` }])} />
      {children}
    </>
  );
}
