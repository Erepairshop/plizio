import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Code Kids Test Klasse 1 bis 4, kostenlos üben | Plizio",
    desc: "Kostenlose Programmier Tests für Kinder der Klassen 1 bis 4. Ohne Anmeldung üben, sofortiges Feedback und Note nach dem Test.",
  },
  hu: {
    title: "Code Kids teszt 1-4. osztály, ingyen | Plizio",
    desc: "Ingyenes programozás tesztek gyerekeknek az 1-4. osztály számára. Gyakorlás regisztráció nélkül, azonnali visszajelzéssel és értékeléssel.",
  },
  ro: {
    title: "Test Code Kids clasele 1-4, exersează gratuit | Plizio",
    desc: "Teste de programare gratuite pentru copiii din clasele 1-4. Exersează fără cont, cu feedback instant și notă după test.",
  },
  en: {
    title: "Code Kids Test Grades 1 to 4, free practice | Plizio",
    desc: "Free coding practice tests for kids in grades 1 to 4. Practice with no sign-up, instant feedback and a grade right after the test.",
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
    alternates: buildHreflangAlternates(`/${lang}/codekidstest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Code Kids Test", description: m.desc, url: `/${lang}/codekidstest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Code Kids Test", item: `/${lang}/codekidstest/` }])} />
      {children}
    </>
  );
}
