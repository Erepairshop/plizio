const REPLACEMENTS: Array<[RegExp, string]> = [
  [/ä/gi, "ae"],
  [/ö/gi, "oe"],
  [/ü/gi, "ue"],
  [/ß/g, "ss"],
  [/ă|â/gi, "a"],
  [/î/gi, "i"],
  [/ș|ş/gi, "s"],
  [/ț|ţ/gi, "t"],
  [/ł/gi, "l"],
];

export function slugify(value: string): string {
  const normalized = REPLACEMENTS.reduce(
    (acc, [pattern, replacement]) => acc.replace(pattern, replacement),
    value.trim().toLowerCase(),
  )
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return normalized || "ort";
}
