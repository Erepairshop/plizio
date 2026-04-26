export const SUPPORTED_LANGS = ["de", "hu", "ro", "en"] as const;
export type Lang = typeof SUPPORTED_LANGS[number];

const BASE = "https://plizio.com";

function toAbsolute(p: string) {
  if (p.startsWith("http")) return p;
  return `${BASE}${p.startsWith("/") ? "" : "/"}${p}`;
}

/** Lang prefix detect: `/de/...`, `/hu/...`, `/ro/...`, `/en/...` */
function detectLangPrefix(canonicalPath: string): Lang | null {
  const m = canonicalPath.match(/^(?:https?:\/\/[^/]+)?\/(de|hu|ro|en)(?:\/|$)/);
  return m ? (m[1] as Lang) : null;
}

/**
 * Hreflang alternates a Next.js metadata-hoz.
 *
 * - Ha a canonicalPath `/{lang}/...` prefixet tartalmaz → per-lang URL-eket generál substitution-nel.
 * - Ha nincs lang-prefix (monolingual pl. `/about/`) → CSAK canonical, nincs `languages` map
 *   (4 hreflang ugyanarra az URL-re Google szemében zaj, nem segít az indexelésen).
 * - `opts.langPaths` explicit per-lang URL-ekkel felülírható.
 */
export function buildHreflangAlternates(
  canonicalPath: string,
  opts?: { langPaths?: Partial<Record<Lang, string>> },
) {
  const full = toAbsolute(canonicalPath);

  if (opts?.langPaths) {
    const languages: Record<string, string> = { "x-default": full };
    for (const lang of SUPPORTED_LANGS) {
      languages[lang] = opts.langPaths[lang] ? toAbsolute(opts.langPaths[lang]!) : full;
    }
    return { canonical: full, languages };
  }

  const langPrefix = detectLangPrefix(canonicalPath);
  if (langPrefix) {
    const languages: Record<string, string> = {};
    for (const lang of SUPPORTED_LANGS) {
      languages[lang] = toAbsolute(canonicalPath.replace(`/${langPrefix}/`, `/${lang}/`));
    }
    languages["x-default"] = languages["en"] ?? full;
    return { canonical: full, languages };
  }

  // Monolingual / language-agnostic page — csak canonical
  return { canonical: full };
}
