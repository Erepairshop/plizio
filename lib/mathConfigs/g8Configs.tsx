import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── Stub configs for G8 math explorers ───
// TODO: Fill with actual content (labels, topics, SVGs)

const STUB_LABELS: Record<string, Record<string, string>> = {
  en: { explorer_title: "Explorer" },
  de: { explorer_title: "Entdecker" },
  hu: { explorer_title: "Felfedező" },
  ro: { explorer_title: "Explorator" },
};

function stubDef(title: string): ExplorerDef {
  return { labels: { ...STUB_LABELS, en: { ...STUB_LABELS.en, explorer_title: title } }, title: "explorer_title", icon: "🚀", topics: [], rounds: [] };
}

export const EQUATIONEXPLORER8_DEF: ExplorerDef = stubDef("Equation Explorer");
export const FUNCTIONEXPLORER8_DEF: ExplorerDef = stubDef("Function Explorer");
export const PROBABILITYEXPLORER8_DEF: ExplorerDef = stubDef("Probability Explorer");
export const QUADRATICEXPLORER8_DEF: ExplorerDef = stubDef("Quadratic Explorer");
export const SQRTEXPLORER8_DEF: ExplorerDef = stubDef("Square Root Explorer");
export const STATEXPLORER8_DEF: ExplorerDef = stubDef("Statistics Explorer");
export const SYSTEMEXPLORER8_DEF: ExplorerDef = stubDef("System Explorer");
export const TRANSFORMEXPLORER8_DEF: ExplorerDef = stubDef("Transform Explorer");
