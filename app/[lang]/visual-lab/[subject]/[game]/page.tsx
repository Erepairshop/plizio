import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import VisualLabGameLauncher from "@/components/visual-lab/VisualLabGameLauncher";
import { buildBreadcrumbSchema, buildEducationalGameSchema } from "@/lib/seo/schema";
import {
  VISUAL_LAB_LANGS,
  getLocalizedGameContent,
  getLocalizedSubjectGames,
  getSubjectBySlug,
  getVisualLabStaticParams,
  visualLabGameUrl,
  visualLabSubjectUrl,
  type VisualLabSeoLang,
  type VisualLabSeoSubjectId,
} from "@/lib/visualLab/seoCatalog";

export const dynamicParams = false;

const COPY = {
  de: { outcomes: "Das trainierst du", mechanic: "So funktioniert das Spiel", grades: "Passende Klassen", levels: "Fünf aufbauende Stufen", related: "Weitere Lernspiele", back: "Alle Spiele im Fach" },
  hu: { outcomes: "Ezt gyakorolhatod", mechanic: "Így működik a játék", grades: "Ajánlott osztályok", levels: "Öt fokozatos szint", related: "További tanulójátékok", back: "A tantárgy összes játéka" },
  ro: { outcomes: "Ce exersezi", mechanic: "Cum funcționează jocul", grades: "Clase potrivite", levels: "Cinci niveluri progresive", related: "Alte jocuri educative", back: "Toate jocurile materiei" },
  en: { outcomes: "What you will practise", mechanic: "How the game works", grades: "Suitable grades", levels: "Five progressive levels", related: "More learning games", back: "All games in this subject" },
} as const;

function isLang(value: string): value is VisualLabSeoLang {
  return VISUAL_LAB_LANGS.includes(value as VisualLabSeoLang);
}

function gameAlternates(subjectId: VisualLabSeoSubjectId, gameId: string, locales: readonly VisualLabSeoLang[]) {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = `https://plizio.com${visualLabGameUrl(locale, subjectId, gameId)}`;
  const fallback = locales.includes("en") ? "en" : locales[0];
  if (fallback) languages["x-default"] = languages[fallback];
  return languages;
}

function relatedGames<T>(games: readonly T[], currentIndex: number, count: number): T[] {
  if (games.length <= 1 || currentIndex < 0) return [];
  const result: T[] = [];
  for (let offset = 1; offset < games.length && result.length < count; offset += 1) {
    result.push(games[(currentIndex + offset) % games.length]);
  }
  return result;
}

export function generateStaticParams() {
  return getVisualLabStaticParams().map(({ lang, subjectSlug, gameId }) => ({
    lang,
    subject: subjectSlug,
    game: gameId,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; subject: string; game: string }> }): Promise<Metadata> {
  const { lang, subject: slug, game } = await params;
  if (!isLang(lang)) return {};
  const subject = getSubjectBySlug(lang, slug);
  if (!subject) return {};
  const content = getLocalizedGameContent(subject.id, game, lang);
  if (!content) return {};
  return {
    title: { absolute: content.title },
    description: content.description,
    alternates: {
      canonical: content.canonical,
      languages: gameAlternates(subject.id, content.gameId, subject.locales),
    },
    openGraph: {
      type: "website",
      title: content.title,
      description: content.description,
      url: content.canonical,
      siteName: "Plizio",
    },
    robots: { index: true, follow: true },
  };
}

export default async function VisualLabGamePage({ params }: { params: Promise<{ lang: string; subject: string; game: string }> }) {
  const { lang, subject: slug, game } = await params;
  if (!isLang(lang)) notFound();
  const subject = getSubjectBySlug(lang, slug);
  if (!subject) notFound();
  const content = getLocalizedGameContent(subject.id, game, lang);
  if (!content) notFound();

  const copy = COPY[lang];
  const subjectUrl = visualLabSubjectUrl(lang, subject.id);
  const allGames = getLocalizedSubjectGames(subject.id, lang);
  const currentIndex = allGames.findIndex((entry) => entry.gameId === content.gameId);
  const related = relatedGames(allGames, currentIndex, 3);
  const minGrade = content.grades[0] ?? 1;
  const maxGrade = content.grades[content.grades.length - 1] ?? minGrade;

  return (
    <main className="plizio-paper min-h-screen px-4 py-8 text-[#211d18] sm:py-12">
      <JsonLd data={buildEducationalGameSchema({
        name: content.name,
        description: content.description,
        url: content.url,
        lang,
        educationalLevel: content.grades.map((grade) => `K${grade}`),
        teaches: [...content.learningOutcomes],
        typicalAgeRange: `${minGrade + 5}-${maxGrade + 6}`,
        about: content.subjectName,
        isPartOfCourse: { name: `${content.subjectName} Visual Lab`, url: subjectUrl },
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Plizio", item: `/${lang}/` },
        { name: "Visual Lab", item: `/${lang}/visual-lab/` },
        { name: content.subjectName, item: subjectUrl },
        { name: content.name, item: content.url },
      ])} />

      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-cyan-800" aria-label="Breadcrumb">
          <Link href={`/${lang}/visual-lab/`} className="hover:underline">Visual Lab</Link>
          <span aria-hidden>/</span>
          <Link href={subjectUrl} className="hover:underline">{content.subjectName}</Link>
          <span aria-hidden>/</span>
          <span>{content.name}</span>
        </nav>

        <article>
          <header className="mb-6 rounded-3xl border border-cyan-200/50 bg-white/90 p-5 shadow-sm sm:p-8">
            <p className="mb-2 text-xs font-black uppercase tracking-[.2em] text-cyan-700">{content.subjectName} Visual Lab</p>
            <h1 className="text-3xl font-black leading-tight sm:text-5xl">{content.name}</h1>
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">{content.intro}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-100 px-3 py-1.5 text-sm font-bold text-cyan-900">{content.gradeText}</span>
              <span className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-bold text-blue-900">{copy.levels}</span>
              <span className="rounded-full bg-violet-100 px-3 py-1.5 text-sm font-bold text-violet-900">{content.mechanicName}</span>
            </div>
          </header>

          <VisualLabGameLauncher
            subject={subject.id}
            gameId={content.gameId}
            gameName={content.name}
            lang={lang}
            grades={content.grades}
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 sm:p-6" aria-labelledby="learning-outcomes">
              <h2 id="learning-outcomes" className="text-2xl font-black">{copy.outcomes}</h2>
              <ul className="mt-4 space-y-3">
                {content.learningOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 leading-6 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 sm:p-6" aria-labelledby="game-mechanic">
              <h2 id="game-mechanic" className="text-2xl font-black">{copy.mechanic}</h2>
              <h3 className="mt-4 text-lg font-black text-cyan-800">{content.mechanicName}</h3>
              <p className="mt-2 leading-7 text-slate-700">{content.mechanicDescription}</p>
              <h3 className="mt-5 text-base font-black">{copy.grades}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.grades.map((grade) => (
                  <span key={grade} className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 font-black text-slate-800">{grade}</span>
                ))}
              </div>
            </section>
          </div>
        </article>

        <section className="mt-8" aria-labelledby="related-games">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h2 id="related-games" className="text-2xl font-black">{copy.related}</h2>
            <Link href={subjectUrl} className="text-sm font-black text-cyan-700 hover:underline">{copy.back}</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((entry) => (
              <Link key={entry.key} href={entry.url} className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition hover:border-cyan-400 hover:shadow-md">
                <h3 className="font-black text-slate-900">{entry.name}</h3>
                <p className="mt-2 text-sm leading-5 text-slate-600">{entry.mechanicName}</p>
                <p className="mt-3 text-xs font-bold text-cyan-700">{entry.gradeText}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
