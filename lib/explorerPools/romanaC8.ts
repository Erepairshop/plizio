// lib/explorerPools/romanaC8.ts — AstroRomână Clasa 8 pool stubs
import type { PoolTopicDef } from "./types";

function mkLabels(ro: string, en: string, hu: string, de: string) {
  return {
    en: { explorer_title: en, t1_title: en, t1_text: en, t1_q: en+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: en, t1_h1: en, t1_h2: en, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    hu: { explorer_title: hu, t1_title: hu, t1_text: hu, t1_q: hu+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: hu, t1_h1: hu, t1_h2: hu, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    de: { explorer_title: de, t1_title: de, t1_text: de, t1_q: de+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: de, t1_h1: de, t1_h2: de, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    ro: { explorer_title: ro, t1_title: ro, t1_text: ro, t1_q: ro+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: ro, t1_h1: ro, t1_h2: ro, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
  };
}

function mkPool(color: string): PoolTopicDef[] {
  return [
    {
      infoTitle: "t1_title", infoText: "t1_text",
      svg: { type: "simple-icon", icon: "🎓", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "hard",
    },
  ];
}

export const MORFO8_LABELS = mkLabels("Morfologia C8", "Morphology C8", "Szótan C8", "Morphologie K8");
export const MORFO8_POOL = mkPool("#E879F9");

export const SINT8_LABELS = mkLabels("Sintaxa C8", "Syntax C8", "Mondattan C8", "Syntax K8");
export const SINT8_POOL = mkPool("#D946EF");

export const ORT8_LABELS = mkLabels("Ortografia C8", "Spelling C8", "Helyesírás C8", "Rechtschreibung K8");
export const ORT8_POOL = mkPool("#C026D3");

export const TEXT8L_LABELS = mkLabels("Textul literar C8", "Literary Text C8", "Irodalmi szöveg C8", "Literarischer Text K8");
export const TEXT8L_POOL = mkPool("#E879F9");

export const TEXT8N_LABELS = mkLabels("Textul nonliterar C8", "Non-literary Text C8", "Nem irodalmi szöveg C8", "Nichtliterarischer Text K8");
export const TEXT8N_POOL = mkPool("#D946EF");

export const ARG8_LABELS = mkLabels("Textul argumentativ C8", "Argumentative Text C8", "Érvelő szöveg C8", "Argumentativer Text K8");
export const ARG8_POOL = mkPool("#C026D3");

export const FIG8_LABELS = mkLabels("Figuri de stil C8", "Figures of Speech C8", "Stílusalakzatok C8", "Stilfiguren K8");
export const FIG8_POOL = mkPool("#E879F9");

export const COMP8_LABELS = mkLabels("Compunerea C8", "Essay Writing C8", "Fogalmazás C8", "Aufsatz K8");
export const COMP8_POOL = mkPool("#D946EF");

export const RECAP8_LABELS = mkLabels("Recapitulare C8", "Review C8", "Összefoglalás C8", "Wiederholung C8");
export const RECAP8_POOL = mkPool("#E879F9");
