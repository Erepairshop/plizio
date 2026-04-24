import type { POI } from "@/lib/visualLab/data/poi";

type Lang = "de" | "hu" | "ro" | "en";

interface LearnMoreSuggestion {
  subject: string;       // astrogeographie / astrogeschichte / astrobiologie / astrosachkunde
  grade: number;         // 1..8
  topic: Record<Lang, string>;   // Localized topic label (e.g. "Berge und Flüsse")
  href: string;          // route path
}

const TOPIC: Record<string, Record<Lang, string>> = {
  mountains_rivers: { de: "Berge und Flüsse", hu: "Hegyek és folyók", ro: "Munți și râuri", en: "Mountains and rivers" },
  landscapes:       { de: "Landschaften",      hu: "Tájak",            ro: "Peisaje",        en: "Landscapes" },
  cities_capitals:  { de: "Städte und Hauptstädte", hu: "Városok és fővárosok", ro: "Orașe și capitale", en: "Cities and capitals" },
  history:          { de: "Geschichte",        hu: "Történelem",       ro: "Istorie",         en: "History" },
  nature:           { de: "Natur und Tiere",   hu: "Természet és állatok", ro: "Natură și animale", en: "Nature and animals" },
  homeland:         { de: "Heimatkunde",       hu: "Honismeret",       ro: "Cunoașterea patriei", en: "Homeland studies" },
  agriculture:      { de: "Landwirtschaft",    hu: "Mezőgazdaság",     ro: "Agricultură",     en: "Agriculture" },
};

/**
 * Suggests a related astrogame + grade for a POI based on its type.
 * Returns null if no good match.
 */
export function getLearnMoreSuggestion(poi: POI, lang: Lang): LearnMoreSuggestion | null {
  const t = poi.type;

  if (t === "mountain" || t === "river" || t === "lake" || t === "sea" || t === "island") {
    return {
      subject: "astrogeographie",
      grade: 7,
      topic: TOPIC.mountains_rivers,
      href: "/astrogeographie",
    };
  }

  if (t === "forest" || t === "animal-habitat") {
    return {
      subject: "astrobiologie",
      grade: 6,
      topic: TOPIC.nature,
      href: "/astrobiologie",
    };
  }

  if (t === "historical") {
    return {
      subject: "astrogeschichte",
      grade: 8,
      topic: TOPIC.history,
      href: "/astrogeschichte",
    };
  }

  if (t === "state-capital" || t === "city") {
    return {
      subject: "astrogeographie",
      grade: 6,
      topic: TOPIC.cities_capitals,
      href: "/astrogeographie",
    };
  }

  if (t === "agriculture" || t === "industry" || t === "port") {
    return {
      subject: "astrogeographie",
      grade: 7,
      topic: TOPIC.agriculture,
      href: "/astrogeographie",
    };
  }

  if (t === "kid-landmark") {
    return {
      subject: "astrosachkunde",
      grade: 3,
      topic: TOPIC.homeland,
      href: "/astrosachkunde",
    };
  }

  if (t === "landmark") {
    return {
      subject: "astrogeographie",
      grade: 5,
      topic: TOPIC.landscapes,
      href: "/astrogeographie",
    };
  }

  return null;
}

export interface LearnMoreCtaCopy {
  title: string;
  body: string;
  cta: string;
}

/** Localized CTA copy for the "Learn more about this" card. */
export function learnMoreCtaCopy(s: LearnMoreSuggestion, lang: Lang): LearnMoreCtaCopy {
  const topic = s.topic[lang];
  const subjectName: Record<string, Record<Lang, string>> = {
    astrogeographie: { de: "Astro-Geographie", hu: "Astro-Földrajz", ro: "Astro-Geografie", en: "Astro-Geography" },
    astrogeschichte: { de: "Astro-Geschichte", hu: "Astro-Történelem", ro: "Astro-Istorie", en: "Astro-History" },
    astrobiologie:   { de: "Astro-Biologie",   hu: "Astro-Biológia",   ro: "Astro-Biologie", en: "Astro-Biology" },
    astrosachkunde:  { de: "Astro-Sachkunde",  hu: "Astro-Környezet",  ro: "Astro-Natură",   en: "Astro-Homeland" },
  };
  const sub = subjectName[s.subject]?.[lang] || s.subject;

  if (lang === "hu") {
    return {
      title: `Tanulj többet erről`,
      body: `Fedezd fel részletesebben a(z) „${topic}" témát az ${sub} játékokban (K${s.grade}. osztály).`,
      cta: `Ugrás az ${sub} K${s.grade}-re →`,
    };
  }
  if (lang === "ro") {
    return {
      title: `Învață mai multe`,
      body: `Descoperă în detaliu subiectul „${topic}" în jocurile ${sub} (clasa K${s.grade}).`,
      cta: `Mergi la ${sub} K${s.grade} →`,
    };
  }
  if (lang === "de") {
    return {
      title: `Erfahre mehr`,
      body: `Entdecke das Thema „${topic}" ausführlich in ${sub}-Spielen (Klasse K${s.grade}).`,
      cta: `Zu ${sub} K${s.grade} →`,
    };
  }
  return {
    title: `Learn more`,
    body: `Dive deeper into "${topic}" with ${sub} games (grade K${s.grade}).`,
    cta: `Go to ${sub} K${s.grade} →`,
  };
}
