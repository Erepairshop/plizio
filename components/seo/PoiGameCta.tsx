"use client";

import type { POI } from "@/lib/visualLab/data/poi";
import type { Lang } from "@/lib/seo/slugs";

const COPY: Record<Lang, { title: string; intro: string; play: string; test: string }> = {
  de: { title: "Probiere es spielerisch aus", intro: "Lerne diesen Ort durch Spiele und Tests.", play: "🎮 Astro-Spiel starten", test: "📝 Test machen" },
  hu: { title: "Próbáld ki játékos formában", intro: "Ismerd meg ezt a helyet játékokon és teszteken keresztül.", play: "🎮 Indítsd az Astro játékot", test: "📝 Csinálj tesztet" },
  ro: { title: "Învață jucând", intro: "Cunoaște acest loc prin jocuri și teste.", play: "🎮 Pornește jocul Astro", test: "📝 Fă un test" },
  en: { title: "Try it with games", intro: "Learn about this place through games and quizzes.", play: "🎮 Start astro game", test: "📝 Take a quiz" },
};

const SUBJECT_FOR_TYPE: Record<string, string> = {
  city: "geographie", town: "geographie", village: "geographie", capital: "geographie", "state-capital": "geographie", metropolis: "geographie",
  mountain: "geographie", river: "geographie", lake: "geographie", island: "geographie", forest: "geographie", peak: "geographie", coast: "geographie",
  historical: "geschichte", ruins: "geschichte", battlefield: "geschichte", ancient: "geschichte", medieval: "geschichte",
  castle: "geschichte", palace: "geschichte", fortress: "geschichte", monastery: "geschichte", abbey: "geschichte",
};

function getSubject(poi: POI): string {
  return SUBJECT_FOR_TYPE[(poi.type ?? "").toLowerCase()] ?? "geographie";
}

function getGrade(poi: POI): number {
  const g = poi.grades?.[0];
  if (typeof g === "number" && g >= 1 && g <= 8) return g;
  return 5;
}

export default function PoiGameCta({ poi, lang }: { poi: POI; lang: Lang }) {
  const copy = COPY[lang] ?? COPY.de;
  const subject = getSubject(poi);
  const grade = getGrade(poi);
  const astroHref = `/astro-${subject}/${grade}/?vlab=${encodeURIComponent(poi.id)}`;
  const testHref = `/${subject}test/?focus=${encodeURIComponent(poi.id)}`;
  return (
    <section className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.08] via-purple-500/[0.05] to-pink-500/[0.05] p-6 sm:p-7">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{copy.title}</h2>
      <p className="mt-1.5 text-sm text-white/70">{copy.intro}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={astroHref}
          rel="nofollow"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2.5 transition"
        >
          {copy.play}
        </a>
        <a
          href={testHref}
          rel="nofollow"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 transition"
        >
          {copy.test}
        </a>
      </div>
    </section>
  );
}
