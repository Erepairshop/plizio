export const SUPPORTED_LANGS = ["de", "hu", "ro", "en"] as const;
export type Lang = typeof SUPPORTED_LANGS[number];

/** Adott path-hoz 4-lang alternates object-et epit a Next.js metadata-hoz. */
export function buildHreflangAlternates(
  canonicalPath: string,
  opts?: { langPaths?: Partial<Record<Lang, string>> },
) {
  const base = "https://plizio.com";
  const full = canonicalPath.startsWith("http")
    ? canonicalPath
    : `${base}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath}`;
  const languages: Record<string, string> = { "x-default": full };

  for (const lang of SUPPORTED_LANGS) {
    languages[lang] = opts?.langPaths?.[lang] ? `${base}${opts.langPaths[lang]}` : full;
  }

  return { canonical: full, languages };
}
