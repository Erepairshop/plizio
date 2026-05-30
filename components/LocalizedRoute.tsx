"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";

/**
 * Wraps a route's content in a LanguageProvider forced to `lang`, so per-language
 * URLs (e.g. /de/astromath) prerender localized static HTML for search engines.
 * The inner provider overrides the root provider's context for this subtree.
 */
export default function LocalizedRoute({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  return <LanguageProvider initialLang={lang}>{children}</LanguageProvider>;
}
