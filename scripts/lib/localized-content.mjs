// Prefer ANY target-language content before considering a richer foreign field.
// Names may have deliberate cross-language fallbacks; editorial text must first
// exhaust its own language across advanced, short and sidecar candidates.
export function selectLocalizedContent(lang, candidates, fallbackLangs = ["de", "en"]) {
  const present = (value) => typeof value === "string"
    ? value.trim().length > 0
    : Array.isArray(value) && value.length > 0;
  for (const language of [lang, ...fallbackLangs.filter((l) => l !== lang)]) {
    for (const candidate of candidates) {
      const value = candidate?.[language];
      if (present(value)) return value;
    }
  }
  return undefined;
}
