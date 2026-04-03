import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── Stub configs for G7 math explorers ───
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

export const ALGEBRAEXPLORER7_DEF: ExplorerDef = stubDef("Algebra Explorer");
export const CIRCLEEXPLORER7_DEF: ExplorerDef = stubDef("Circle Explorer");
export const EQUATIONEXPLORER7_DEF: ExplorerDef = stubDef("Equation Explorer");
export const INEQUALITYEXPLORER7_DEF: ExplorerDef = stubDef("Inequality Explorer");
export const POWEREXPLORER7_DEF: ExplorerDef = stubDef("Power Explorer");
export const PYTHAGORASEXPLORER7_DEF: ExplorerDef = stubDef("Pythagoras Explorer");
export const STATEXPLORER7_DEF: ExplorerDef = stubDef("Statistics Explorer");
export const TRIANGLEEXPLORER7_DEF: ExplorerDef = stubDef("Triangle Explorer");
