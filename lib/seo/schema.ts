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
    "@type": "Organization",
    name: "PLIZIO",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    // Sister projects under the same operator. sameAs declares the entity
    // is the same organisation on these external sites, helping Google
    // build a unified Knowledge Graph entity across the project family.
    sameAs: [
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

export function buildCourseSchema(input: {
  name: string;
  description: string;
  url: string;
  inLanguage?: Lang[];
}): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: toAbsoluteUrl(input.url),
    provider: buildProvider(),
    inLanguage: input.inLanguage ?? [...SUPPORTED_LANGS],
  };
}

export function buildLearningResourceSchema(input: {
  name: string;
  description: string;
  url: string;
  educationalLevel: string;
  learningResourceType?: string;
  inLanguage?: Lang[];
}): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: input.name,
    description: input.description,
    url: toAbsoluteUrl(input.url),
    learningResourceType: input.learningResourceType ?? "Quiz",
    educationalLevel: input.educationalLevel,
    provider: buildProvider(),
    inLanguage: input.inLanguage ?? [...SUPPORTED_LANGS],
  };
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
