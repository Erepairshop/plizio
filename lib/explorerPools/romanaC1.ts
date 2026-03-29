// lib/explorerPools/romanaC1.ts — AstroRomână Clasa 1 pool stubs
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
      svg: { type: "simple-icon", icon: "🔤", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "easy",
    },
  ];
}

export const ALFA_LABELS = mkLabels("Alfabetul", "Alphabet", "Ábécé", "Alphabet");
export const ALFA_POOL = mkPool("#FF2D78");

export const VOCALE_LABELS = mkLabels("Vocale și consoane", "Vowels & Consonants", "Magánhangzók", "Vokale");
export const VOCALE_POOL = mkPool("#00D4FF");

export const SILABE_LABELS = mkLabels("Silabele", "Syllables", "Szótagok", "Silben");
export const SILABE_POOL = mkPool("#00FF88");

export const CUVINTE_LABELS = mkLabels("Cuvintele", "Words", "Szavak", "Wörter");
export const CUVINTE_POOL = mkPool("#FFD700");

export const PROPOS_LABELS = mkLabels("Propoziția", "Sentences", "Mondatok", "Sätze");
export const PROPOS_POOL = mkPool("#B44DFF");

export const PUNCT_LABELS = mkLabels("Punctuația", "Punctuation", "Írásjelek", "Zeichensetzung");
export const PUNCT_POOL = mkPool("#10B981");

export const MAJUSC_LABELS = mkLabels("Majusculele", "Capital Letters", "Nagybetűk", "Großbuchstaben");
export const MAJUSC_POOL = mkPool("#FF9500");

export const ANTO_LABELS = mkLabels("Antonimele", "Opposites", "Ellentétek", "Gegensätze");
export const ANTO_POOL = mkPool("#E879F9");

export const RECAP1_LABELS = mkLabels("Recapitulare C1", "Review C1", "Összefoglalás C1", "Wiederholung C1");
export const RECAP1_POOL = mkPool("#4ECDC4");
