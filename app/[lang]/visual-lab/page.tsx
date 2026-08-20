import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import {
  VISUAL_LAB_LANGS,
  VISUAL_LAB_SEO_SUBJECTS,
  visualLabSubjectUrl,
  type VisualLabSeoLang,
} from "@/lib/visualLab/seoCatalog";

export const dynamicParams = false;

const COPY = {
  de: {
    title: "Visual Lab: interaktive Lernspiele",
    description: "Kostenlose interaktive Lernspiele für Mathematik, Sprachen, Naturwissenschaften, Geschichte, Geographie und Informatik.",
    intro: "Wähle ein Fach und trainiere den Schulstoff mit kurzen, mobilfreundlichen Lernspielen. Jedes Spiel bietet passende Klassenstufen und fünf aufbauende Schwierigkeitsstufen.",
    subjects: "Fächer und Lernspiele",
    games: "Spiele",
  },
  hu: {
    title: "Visual Lab: interaktív tanulójátékok",
    description: "Ingyenes interaktív tanulójátékok matematikából, nyelvekből, természettudományokból, történelemből, földrajzból és informatikából.",
    intro: "Válassz tantárgyat, és gyakorold az iskolai tananyagot rövid, mobilbarát játékokkal. Minden játék megfelelő évfolyamokat és öt fokozatos nehézségi szintet kínál.",
    subjects: "Tantárgyak és tanulójátékok",
    games: "játék",
  },
  ro: {
    title: "Visual Lab: jocuri educative interactive",
    description: "Jocuri educative gratuite pentru matematică, limbi, științe, istorie, geografie și informatică.",
    intro: "Alege o materie și exersează programa școlară prin jocuri scurte, adaptate telefonului. Fiecare joc are clase potrivite și cinci niveluri progresive.",
    subjects: "Materii și jocuri educative",
    games: "jocuri",
  },
  en: {
    title: "Visual Lab: interactive learning games",
    description: "Free interactive learning games for mathematics, languages, science, history, geography and computer science.",
    intro: "Choose a subject and practise school topics with short, mobile-friendly learning games. Every game includes suitable grades and five progressive difficulty levels.",
    subjects: "Subjects and learning games",
    games: "games",
  },
} as const;

function isLang(value: string): value is VisualLabSeoLang {
  return VISUAL_LAB_LANGS.includes(value as VisualLabSeoLang);
}

export function generateStaticParams() {
  return VISUAL_LAB_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const path = `/${lang}/visual-lab/`;
  const languages = Object.fromEntries(VISUAL_LAB_LANGS.map((item) => [item, `https://plizio.com/${item}/visual-lab/`]));
  languages["x-default"] = languages.en;
  return {
    title: { absolute: COPY[lang].title + " | Plizio" },
    description: COPY[lang].description,
    alternates: { canonical: `https://plizio.com${path}`, languages },
  };
}

export default async function VisualLabLocaleHub({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = COPY[lang];
  const subjects = VISUAL_LAB_SEO_SUBJECTS.filter((subject) => subject.locales.includes(lang));
  const subjectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.subjects,
    numberOfItems: subjects.length,
    itemListElement: subjects.map((subject, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CollectionPage",
        name: subject.name[lang],
        description: subject.focus[lang],
        url: "https://plizio.com" + visualLabSubjectUrl(lang, subject.id),
      },
    })),
  };

  return (
    <main className="plizio-paper min-h-screen px-4 py-8 text-[#211d18] sm:py-12">
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Plizio", item: `/${lang}/` },
        { name: "Visual Lab", item: `/${lang}/visual-lab/` },
      ])} />
      <JsonLd data={subjectListSchema} />
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-3xl border border-cyan-200/50 bg-white/90 p-5 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-black uppercase tracking-[.2em] text-cyan-700">Plizio Visual Lab</p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">{copy.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">{copy.intro}</p>
        </header>

        <section aria-labelledby="visual-lab-subjects">
          <h2 id="visual-lab-subjects" className="mb-4 text-2xl font-black">{copy.subjects}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={visualLabSubjectUrl(lang, subject.id)}
                className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-md"
              >
                <h3 className="text-xl font-black text-slate-900">{subject.name[lang]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{subject.focus[lang]}</p>
                <p className="mt-4 text-sm font-bold text-cyan-700">{subject.games.length} {copy.games}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
