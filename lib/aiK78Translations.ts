import overlayJson from "./aiK78TranslationOverlay.json";

export type AiK78PolishedLang = "de" | "hu" | "ro";

const OVERLAY = overlayJson as Record<AiK78PolishedLang, Record<string, string>>;

export function aiK78Text(source: string | undefined, lang: AiK78PolishedLang, fallback: string | undefined): string {
  if (!source) return fallback || "";
  return OVERLAY[lang]?.[source] || fallback || source;
}

export function aiK78Options(
  source: string[] | undefined,
  lang: AiK78PolishedLang,
  fallback: string[] | undefined,
): string[] {
  if (!source) return fallback || [];
  return source.map((item, index) => aiK78Text(item, lang, fallback?.[index]));
}
