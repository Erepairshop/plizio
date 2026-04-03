import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Lang = "de" | "en" | "hu" | "ro";
type L4 = Record<Lang, string>;

const L = (de: string, en: string, hu: string, ro: string): L4 => ({ de, en, hu, ro });

interface TopicSpec {
  title: L4;
  text: L4;
  hint?: L4;
  bullet1?: L4;
  bullet2?: L4;
  labels?: Record<string, L4>;
  svg: SvgConfig;
  interactive: (k: (suffix: string) => string) => any;
  quiz: string;
  difficulty?: "easy" | "medium" | "hard";
}

interface IslandSpec {
  id: string;
  title: L4;
  topics: TopicSpec[];
}

function topicKey(islandId: string, index: number, suffix: string): string {
  return `${islandId}_t${index}_${suffix}`;
}

function buildTopicLabels(islandId: string, index: number, spec: TopicSpec) {
  const out: Record<string, L4> = {
    title: spec.title,
    text: spec.text,
  };
  if (spec.hint) out.hint = spec.hint;
  if (spec.bullet1) out.bullet1 = spec.bullet1;
  if (spec.bullet2) out.bullet2 = spec.bullet2;
  for (const [key, value] of Object.entries(spec.labels ?? {})) {
    out[key] = value;
  }
  const prefixed: Record<string, L4> = {};
  for (const [suffix, value] of Object.entries(out)) {
    prefixed[topicKey(islandId, index, suffix)] = value;
  }
  return prefixed;
}

function buildPool(islandId: string, topics: TopicSpec[]): PoolTopicDef[] {
  return topics.map((spec, index) => {
    const prefix = (suffix: string) => topicKey(islandId, index + 1, suffix);
    return {
      infoTitle: prefix("title"),
      infoText: prefix("text"),
      svg: spec.svg,
      bulletKeys: spec.bullet1 || spec.bullet2 ? [spec.bullet1 ? prefix("bullet1") : "", spec.bullet2 ? prefix("bullet2") : ""].filter(Boolean) as string[] : undefined,
      hintKey: spec.hint ? prefix("hint") : undefined,
      interactive: spec.interactive(prefix),
      quiz: { generate: spec.quiz },
      difficulty: spec.difficulty,
    };
  });
}

function buildIsland(island: IslandSpec) {
  const labels: Record<Lang, Record<string, string>> = {
    de: { explorer_title: island.title.de },
    en: { explorer_title: island.title.en },
    hu: { explorer_title: island.title.hu },
    ro: { explorer_title: island.title.ro },
  };
  island.topics.forEach((topic, idx) => {
    for (const [key, value] of Object.entries(buildTopicLabels(island.id, idx + 1, topic))) {
      labels.de[key] = value.de;
      labels.en[key] = value.en;
      labels.hu[key] = value.hu;
      labels.ro[key] = value.ro;
    }
  });
  return { labels, pool: buildPool(island.id, island.topics) };
}

// ─── ISLAND 1: FRÜHE HOCHKULTUREN ──────────────────────────────────────────

const I1: IslandSpec = {
  id: "i1",
  title: L("Frühe Hochkulturen", "Early Civilizations", "Korai magasépítésű kultúrák", "Primele civilizații"),
  topics: [
    {
      title: L("Was ist eine Hochkultur?", "What is a Civilization?", "Mi az a magaskultúra?", "Ce este o civilizație?"),
      text: L("Eine Hochkultur hat Städte, eine Schrift und eine klare Ordnung.", "A civilization has cities, writing, and a clear social order.", "Egy magaskultúrának városai, írása és világos rendje van.", "O civilizație are orașe, scriere și o ordine socială clară."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [{ id: "yes", label: L("Hochkultur", "Civilization", "Magaskultúra", "Civilizație") }, { id: "no", label: L("Nomaden", "Nomads", "Nomádok", "Nomazi") }],
        items: [{ text: L("Schrift", "Writing", "Írás", "Scriere"), bucketId: "yes" }, { text: L("Städte", "Cities", "Városok", "Orașe"), bucketId: "yes" }, { text: L("Zelt", "Tent", "Sátor", "Cort"), bucketId: "no" }],
        instruction: k("title"),
      }),
      quiz: "fruehe_hochkulturen",
    }
  ]
};

// ... More islands would follow here in a full implementation ...

const built = [I1].map(buildIsland);

export const GESCHICHTE_K5_I1_LABELS = built[0].labels;
export const GESCHICHTE_K5_I1_POOL = built[0].pool;
