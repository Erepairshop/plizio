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
    alternateName: "Plizio Lernplattform",
    description:
      "Interaktive Lernplattform für Kinder von 6-14 Jahren — Geographie, Biologie, Geschichte, Mathematik, Code Kids und KI in vier Sprachen (Deutsch, Ungarisch, Rumänisch, Englisch).",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    knowsAbout: [
      "Geographie", "Biologie", "Geschichte", "Mathematik",
      "Code Kids", "Informatik", "Künstliche Intelligenz",
      "Sachunterricht", "Erdkunde",
    ],
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
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
