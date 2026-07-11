import { SITE_URL } from "@/lib/seo/routes";
import { SUPPORTED_LANGS, type Lang } from "@/lib/seo/hreflang";

type SchemaNode = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : new URL(path, SITE_URL).toString();
}

function buildProvider() {
  return {
    "@type": "Organization",
    name: "PLIZIO",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
  };
}

export function buildOrganizationSchema(): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "PLIZIO",
    alternateName: ["Plizio Lernplattform", "Plizio Reise- und Lernplattform"],
    description:
      "PLIZIO ist eine kostenlose Plattform mit zwei Bereichen: (1) eine interaktive Lernplattform für Kinder von 6-14 Jahren mit Schultests, Lernspielen, Geographie, Biologie, Geschichte, Mathematik, Code Kids und KI; und (2) kostenlose Reise- und Entdeckungsführer für tausende Städte und Orte weltweit — mit interaktiven Karten, Sehenswürdigkeiten, lokalen Veranstaltungen und PlizioGo: anpassbare Routen und Reisepläne zu Fuß, mit dem Auto oder dem Wohnmobil, von A nach B oder rund um einen Ort, mit Etappen, Stopps und Sehenswürdigkeiten entlang der Strecke. Alles in vier Sprachen (Deutsch, Ungarisch, Rumänisch, Englisch), ohne Anmeldung.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    knowsAbout: [
      // Learning side
      "Geographie", "Biologie", "Geschichte", "Mathematik",
      "Code Kids", "Informatik", "Künstliche Intelligenz",
      "Sachunterricht", "Erdkunde", "Schultests", "Lernspiele",
      // Travel / discovery side
      "Reiseziele", "Städtereisen", "Sehenswürdigkeiten", "interaktive Karten",
      "lokale Veranstaltungen", "Reiseplanung", "Tagesausflüge", "Stadtführer",
      "Routenplanung", "Wohnmobil-Routen", "Wanderrouten", "Autorouten", "Reiserouten",
    ],
    knowsLanguage: ["de", "hu", "ro", "en"],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Schüler 6-14 Jahre",
    },
    // Sister projects under the same operator. sameAs declares the entity
    // is the same organisation on these external sites, helping Google
    // build a unified Knowledge Graph entity across the project family.
    sameAs: [
      "https://www.wikidata.org/wiki/Q140183544",
      "https://de.pinterest.com/borota25/",
      "https://punktepass.de",
      "https://erepairshop.de",
      "https://diginachrichten.de",
      "https://borota.dev",
    ],
  };
}

export function buildWebsiteSchema(): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PLIZIO",
    url: SITE_URL,
    description:
      "Kostenlose Reise- und Lernplattform: Reiseziele und Städte mit interaktiven Karten, Sehenswürdigkeiten, lokalen Veranstaltungen und PlizioGo-Routen (zu Fuß, Auto, Wohnmobil) — plus Lernspiele und Schultests für Kinder. Vier Sprachen, ohne Anmeldung.",
    inLanguage: ["de", "hu", "ro", "en"],
  };
}

// Enumerable map of the main feature areas so search/AI engines can list WHAT
// Plizio offers and HOW each part works (not just "a kids learning site").
// Each URL points to a real, live landing page (no 404s — see 404-MEGELŐZÉS).
export function buildSiteFeaturesSchema(): SchemaNode {
  const features: Array<{ name: string; description: string; url: string }> = [
    {
      name: "Reiseziele & Städte entdecken",
      description:
        "Kostenlose Reiseführer für tausende Städte und Orte weltweit: Beschreibungen, Sehenswürdigkeiten, Fotos, praktische Infos und lokale Veranstaltungen.",
      url: "/destinations/",
    },
    {
      name: "Interaktive Entdeckungskarten",
      description:
        "Welt-, Kontinent- und Länderkarten zum Erkunden — Länder, Regionen und Orte per Klick entdecken.",
      url: "/world/",
    },
    {
      name: "PlizioGo — Routen & Reisepläne",
      description:
        "Anpassbare Routen und Reisepläne zu Fuß, mit dem Auto oder dem Wohnmobil — von A nach B oder rund um einen Ort, mit Etappen, Stopps und Sehenswürdigkeiten entlang der Strecke. Auf jeder Reiseziel-Seite verfügbar.",
      url: "/destinations/",
    },
    {
      name: "Lernspiele (Visual Lab)",
      description:
        "Spielerische, interaktive Lernspiele zu Geographie, Biologie, Geschichte, Mathematik, Code Kids und KI für Kinder von 6-14 Jahren.",
      url: "/visual-lab/",
    },
    {
      name: "Interaktive Schultests",
      description:
        "Kostenlose Übungstests und Prüfungsvorbereitung mit echten Schulaufgaben in mehreren Fächern und Klassenstufen.",
      url: "/learn/",
    },
    {
      name: "Code Kids & KI",
      description:
        "Informatik, Programmieren und künstliche Intelligenz spielerisch erklärt für Kinder.",
      url: "/codekids/",
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PLIZIO — Funktionen und Lernbereiche",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: features.length,
    itemListElement: features.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebPage",
        name: f.name,
        description: f.description,
        url: toAbsoluteUrl(f.url),
      },
    })),
  };
}

// Subject-level grade band → typical age range mapping used by both
// Course and LearningResource schemas so Google can place the resource in
// the right educational audience bracket.
function ageRangeForLevel(level: string): string | undefined {
  const m = String(level).match(/K\s*(\d+)/i);
  if (!m) return undefined;
  const g = parseInt(m[1], 10);
  if (g < 1 || g > 13) return undefined;
  const age = 5 + g; // K1 ≈ 6 év, K8 ≈ 13 év
  return `${age}-${age + 1}`;
}

export function buildCourseSchema(input: {
  name: string;
  description: string;
  url: string;
  inLanguage?: Lang[];
  educationalLevel?: string | string[];
  teaches?: string | string[];
  about?: string;
}): SchemaNode {
  const levels = Array.isArray(input.educationalLevel)
    ? input.educationalLevel
    : input.educationalLevel ? [input.educationalLevel] : undefined;
  const node: SchemaNode = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: toAbsoluteUrl(input.url),
    provider: { "@type": "EducationalOrganization", name: "Plizio", url: SITE_URL, logo: `${SITE_URL}/icon-512.png` },
    inLanguage: input.inLanguage ?? [...SUPPORTED_LANGS],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Schüler 6-14 Jahre",
    },
  };
  if (levels) (node as any).educationalLevel = levels.length === 1 ? levels[0] : levels;
  if (input.teaches) (node as any).teaches = input.teaches;
  if (input.about) (node as any).about = input.about;
  return node;
}

export function buildLearningResourceSchema(input: {
  name: string;
  description: string;
  url: string;
  educationalLevel: string;
  learningResourceType?: string;
  inLanguage?: Lang[];
  teaches?: string | string[];
  about?: string;
  isPartOfCourse?: { name: string; url: string };
}): SchemaNode {
  const node: SchemaNode = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: input.name,
    description: input.description,
    url: toAbsoluteUrl(input.url),
    learningResourceType: input.learningResourceType ?? "Quiz",
    educationalLevel: input.educationalLevel,
    educationalUse: "assessment",
    provider: { "@type": "EducationalOrganization", name: "Plizio", url: SITE_URL, logo: `${SITE_URL}/icon-512.png` },
    inLanguage: input.inLanguage ?? [...SUPPORTED_LANGS],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Schüler 6-14 Jahre",
    },
    isAccessibleForFree: true,
  };
  const age = ageRangeForLevel(input.educationalLevel);
  if (age) (node as any).typicalAgeRange = age;
  if (input.teaches) (node as any).teaches = input.teaches;
  if (input.about) (node as any).about = input.about;
  if (input.isPartOfCourse) {
    (node as any).isPartOf = {
      "@type": "Course",
      name: input.isPartOfCourse.name,
      url: toAbsoluteUrl(input.isPartOfCourse.url),
    };
  }
  return node;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.item),
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
