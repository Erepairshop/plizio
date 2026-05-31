import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroSachkunde: Sachkunde entdecken | Plizio",
    desc: "Kostenloses interaktives Sachkunde-Lernspiel als Weltraumreise für die Klassen 1 bis 4. Ohne Anmeldung, direkt im Browser spielen.",
  },
  hu: {
    title: "AstroKörnyezet: játszva felfedezni | Plizio",
    desc: "Ingyenes, interaktív környezetismeret tanulójáték űrutazás formájában, 1-4. osztályosoknak. Regisztráció nélkül, egyből a böngészőben.",
  },
  ro: {
    title: "AstroCunoaștere: științe prin joc | Plizio",
    desc: "Joc educativ interactiv și gratuit de cunoașterea mediului sub formă de călătorie spațială, pentru clasele 1-4. Fără înregistrare.",
  },
  en: {
    title: "AstroScience: explore general science | Plizio",
    desc: "Free interactive general science learning game as a space journey for grades 1 to 4. No sign-up, play right in your browser.",
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
    alternates: buildHreflangAlternates(`/${lang}/astro-sachkunde/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroSachkunde", description: m.desc, url: `/${lang}/astro-sachkunde/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroSachkunde", item: `/${lang}/astro-sachkunde/` }])} />
      {children}
    </>
  );
}
