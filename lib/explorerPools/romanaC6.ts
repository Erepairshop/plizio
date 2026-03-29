// lib/explorerPools/romanaC6.ts — AstroRomână Clasa 6 pool stubs
import type { PoolTopicDef } from "./types";

function mkLabels(ro: string, en: string, hu: string, de: string) {
  return {
    en: { explorer_title: en, t1_title: en, t1_text: en, t1_q: en+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: en, t1_h1: en, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    hu: { explorer_title: hu, t1_title: hu, t1_text: hu, t1_q: hu+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: hu, t1_h1: hu, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    de: { explorer_title: de, t1_title: de, t1_text: de, t1_q: de+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: de, t1_h1: de, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    ro: { explorer_title: ro, t1_title: ro, t1_text: ro, t1_q: ro+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: ro, t1_h1: ro, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
  };
}

function mkPool(color: string): PoolTopicDef[] {
  return [
    {
      infoTitle: "t1_title", infoText: "t1_text",
      svg: { type: "simple-icon", icon: "🎭", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "medium",
    },
  ];
}

export const MORFO6_LABELS = mkLabels("Morfologia C6", "Morphology C6", "Szótan C6", "Morphologie K6");
export const MORFO6_POOL = mkPool("#FF9500");

export const VERB6_LABELS = mkLabels("Verbul C6", "Verbs C6", "Ige C6", "Verb K6");
export const VERB6_POOL = mkPool("#FFAB40");

export const PROP6_LABELS = mkLabels("Propoziția C6", "Sentences C6", "Mondatok C6", "Sätze K6");
export const PROP6_POOL = mkPool("#F97316");

export const TEXT6A_LABELS = mkLabels("Textul argumentativ", "Argumentative Text", "Érvelő szöveg", "Argumentativer Text");
export const TEXT6A_POOL = mkPool("#FF9500");

export const STIL6_LABELS = mkLabels("Stilistica", "Stylistics", "Stilisztika", "Stilistik");
export const STIL6_POOL = mkPool("#FFAB40");

export const FIG6_LABELS = mkLabels("Figuri de stil", "Figures of Speech", "Stílusalakzatok", "Stilfiguren");
export const FIG6_POOL = mkPool("#F97316");

export const ORT6_LABELS = mkLabels("Ortografia C6", "Spelling C6", "Helyesírás C6", "Rechtschreibung K6");
export const ORT6_POOL = mkPool("#FF9500");

export const TEXT6L_LABELS = mkLabels("Textul literar C6", "Literary Text C6", "Irodalmi szöveg C6", "Literarischer Text K6");
export const TEXT6L_POOL = mkPool("#FFAB40");

export const RECAP6_LABELS = mkLabels("Recapitulare C6", "Review C6", "Összefoglalás C6", "Wiederholung C6");
export const RECAP6_POOL = mkPool("#FF9500");
