import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroRumänisch: Rumänisch spielend lernen | Plizio",
    desc: "Kostenloses interaktives Lernspiel für die rumänische Sprache als Weltraumreise. Ohne Anmeldung, direkt im Browser spielen.",
  },
  hu: {
    title: "AstroRomán: játszva tanult román | Plizio",
    desc: "Ingyenes, interaktív román nyelv tanulójáték űrutazás formájában. Regisztráció nélkül, egyből a böngészőben játszható.",
  },
  ro: {
    title: "AstroRomână: limba română prin joc | Plizio",
    desc: "Joc educativ interactiv și gratuit de limba română sub formă de călătorie spațială. Fără înregistrare, direct în browser.",
  },
  en: {
    title: "AstroRomanian: learn Romanian by playing | Plizio",
    desc: "Free interactive Romanian language learning game as a space journey. No sign-up, play right in your browser.",
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
    alternates: buildHreflangAlternates(`/${lang}/astroromana/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroRomana", description: m.desc, url: `/${lang}/astroromana/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroRomana", item: `/${lang}/astroromana/` }])} />
      {children}
    </>
  );
}
