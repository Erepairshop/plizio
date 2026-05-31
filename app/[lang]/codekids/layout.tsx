import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Code Kids: spielerisch Programmieren lernen | Plizio",
    desc: "Programmieren lernen für Kinder mit Spaß: erste Schritte mit Code, Logik und Computern, für die Klassen 1 bis 4. Kostenlos, ohne Anmeldung.",
  },
  hu: {
    title: "Code Kids: játékos programozás gyerekeknek | Plizio",
    desc: "Programozás gyerekeknek játékosan: első lépések a kódolásban, logikában és a számítógépekben, az 1-4. osztály számára. Ingyenes, regisztráció nélkül.",
  },
  ro: {
    title: "Code Kids: programare jucăușă pentru copii | Plizio",
    desc: "Programare pentru copii cu distracție: primii pași în cod, logică și calculatoare, pentru clasele 1-4. Gratuit, fără cont.",
  },
  en: {
    title: "Code Kids: learn coding the fun way | Plizio",
    desc: "Coding for kids made fun: first steps with code, logic and computers, for grades 1 to 4. Free, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/codekids/`),
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
      <JsonLd data={buildCourseSchema({ name: "Code Kids", description: m.desc, url: `/${lang}/codekids/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Code Kids", item: `/${lang}/codekids/` }])} />
      {children}
    </>
  );
}
