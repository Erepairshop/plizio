import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";
import {
  VISUAL_LAB_LANGS,
  VISUAL_LAB_SEO_SUBJECTS,
  getLocalizedSubjectGames,
  getSubjectBySlug,
  visualLabSubjectUrl,
  type VisualLabSeoLang,
} from "@/lib/visualLab/seoCatalog";

export const dynamicParams = false;

const COPY = {
  de: { games: "Lernspiele", intro: "Wähle ein Spiel und eine passende Klasse. Alle Aufgaben werden über fünf Stufen anspruchsvoller.", grade: "Geeignet für", open: "Spiel ansehen" },
  hu: { games: "Tanulójátékok", intro: "Válassz játékot és megfelelő osztályt. Minden feladat öt szinten válik fokozatosan nehezebbé.", grade: "Ajánlott", open: "Játék megnyitása" },
  ro: { games: "Jocuri educative", intro: "Alege un joc și clasa potrivită. Toate sarcinile devin treptat mai dificile în cinci niveluri.", grade: "Potrivit pentru", open: "Vezi jocul" },
  en: { games: "Learning games", intro: "Choose a game and a suitable grade. Every activity becomes gradually more demanding across five levels.", grade: "Suitable for", open: "View game" },
} as const;

function isLang(value: string): value is VisualLabSeoLang {
  return VISUAL_LAB_LANGS.includes(value as VisualLabSeoLang);
}

function alternatesFor(subjectId: (typeof VISUAL_LAB_SEO_SUBJECTS)[number]["id"], locales: readonly VisualLabSeoLang[]) {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = `https://plizio.com${visualLabSubjectUrl(locale, subjectId)}`;
  const fallback = locales.includes("en") ? "en" : locales[0];
  if (fallback) languages["x-default"] = languages[fallback];
  return languages;
}

export function generateStaticParams() {
  return VISUAL_LAB_SEO_SUBJECTS.flatMap((subject) =>
    subject.locales.map((lang) => ({ lang, subject: subject.slug[lang] })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; subject: string }> }): Promise<Metadata> {
  const { lang, subject: slug } = await params;
  if (!isLang(lang)) return {};
  const subject = getSubjectBySlug(lang, slug);
  if (!subject) return {};
  const url = visualLabSubjectUrl(lang, subject.id);
  return {
    title: { absolute: subject.name[lang] + " " + COPY[lang].games + " | Plizio Visual Lab" },
    description: `${subject.focus[lang]}. ${COPY[lang].intro}`,
    alternates: {
      canonical: `https://plizio.com${url}`,
      languages: alternatesFor(subject.id, subject.locales),
    },
  };
}

export default async function VisualLabSubjectPage({ params }: { params: Promise<{ lang: string; subject: string }> }) {
  const { lang, subject: slug } = await params;
  if (!isLang(lang)) notFound();
  const subject = getSubjectBySlug(lang, slug);
  if (!subject) notFound();
  const copy = COPY[lang];
  const games = getLocalizedSubjectGames(subject.id, lang);
  const gameListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: subject.name[lang] + " " + copy.games,
    numberOfItems: games.length,
    itemListElement: games.map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LearningResource",
        name: game.name,
        description: game.description,
        url: game.canonical,
      },
    })),
  };
  const subjectUrl = visualLabSubjectUrl(lang, subject.id);

  return (
    <main className="plizio-paper min-h-screen px-4 py-8 text-[#211d18] sm:py-12">
      <JsonLd data={buildCourseSchema({
        name: `${subject.name[lang]} Visual Lab`,
        description: subject.focus[lang],
        url: subjectUrl,
        inLanguage: [lang],
        educationalLevel: subject.grades.map((grade) => `K${grade}`),
        teaches: subject.focus[lang],
        about: subject.name[lang],
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Plizio", item: `/${lang}/` },
        { name: "Visual Lab", item: `/${lang}/visual-lab/` },
        { name: subject.name[lang], item: subjectUrl },
      ])} />
      <JsonLd data={gameListSchema} />

      <div className="mx-auto max-w-5xl">
        <nav className="mb-5 text-sm font-semibold text-cyan-800" aria-label="Breadcrumb">
          <Link href={`/${lang}/visual-lab/`} className="hover:underline">Visual Lab</Link>
          <span aria-hidden className="mx-2">/</span>
          <span>{subject.name[lang]}</span>
        </nav>

        <header className="mb-8 rounded-3xl border border-cyan-200/50 bg-white/90 p-5 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-black uppercase tracking-[.2em] text-cyan-700">Plizio Visual Lab</p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">{subject.name[lang]}: {copy.games}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">{subject.focus[lang]}. {copy.intro}</p>
        </header>

        <section aria-labelledby="subject-game-list">
          <h2 id="subject-game-list" className="mb-4 text-2xl font-black">{copy.games}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <Link
                key={game.key}
                href={game.url}
                className="flex min-h-52 flex-col rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-md"
              >
                <h3 className="text-xl font-black text-slate-900">{game.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{game.description}</p>
                <p className="mt-4 text-sm font-bold text-slate-700">{copy.grade}: {game.gradeText}</p>
                <span className="mt-3 text-sm font-black text-cyan-700">{copy.open}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
