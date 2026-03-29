// lib/explorerPools/romanaC4.ts — AstroRomână Clasa 4 pool stubs
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
      svg: { type: "simple-icon", icon: "📝", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "medium",
    },
  ];
}

export const SUBST4_LABELS = mkLabels("Substantivul C4", "Nouns C4", "Főnév C4", "Substantiv K4");
export const SUBST4_POOL = mkPool("#F59E0B");

export const VERB4_LABELS = mkLabels("Verbul C4", "Verbs C4", "Ige C4", "Verb K4");
export const VERB4_POOL = mkPool("#FCD34D");

export const ADJ4_LABELS = mkLabels("Adjectivul C4", "Adjectives C4", "Melléknév C4", "Adjektiv K4");
export const ADJ4_POOL = mkPool("#D97706");

export const PRON4_LABELS = mkLabels("Pronumele C4", "Pronouns C4", "Névmások C4", "Pronomen K4");
export const PRON4_POOL = mkPool("#F59E0B");

export const NUM4_LABELS = mkLabels("Numeralul", "Numerals", "Számnév", "Numerale");
export const NUM4_POOL = mkPool("#FCD34D");

export const ORT4_LABELS = mkLabels("Ortografia C4", "Spelling C4", "Helyesírás C4", "Rechtschreibung K4");
export const ORT4_POOL = mkPool("#D97706");

export const PROP4_LABELS = mkLabels("Analiza propoziției", "Sentence Analysis", "Mondatelemzés", "Satzanalyse");
export const PROP4_POOL = mkPool("#F59E0B");

export const COMP4_LABELS = mkLabels("Compunerea", "Essay Writing", "Fogalmazás", "Aufsatz");
export const COMP4_POOL = mkPool("#FCD34D");

export const RECAP4_LABELS = mkLabels("Recapitulare C4", "Review C4", "Összefoglalás C4", "Wiederholung C4");
export const RECAP4_POOL = mkPool("#F59E0B");
