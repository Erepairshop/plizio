// lib/explorerPools/romanaC2.ts — AstroRomână Clasa 2 pool stubs
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
      svg: { type: "simple-icon", icon: "📚", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "easy",
    },
  ];
}

export const SUBST2_LABELS = mkLabels("Substantivul", "Nouns", "Főnév", "Substantiv");
export const SUBST2_POOL = mkPool("#3B82F6");

export const VERB2_LABELS = mkLabels("Verbul", "Verbs", "Ige", "Verb");
export const VERB2_POOL = mkPool("#60A5FA");

export const ADJ2_LABELS = mkLabels("Adjectivul", "Adjectives", "Melléknév", "Adjektiv");
export const ADJ2_POOL = mkPool("#2563EB");

export const ART2_LABELS = mkLabels("Articolul", "Articles", "Névelő", "Artikel");
export const ART2_POOL = mkPool("#1D4ED8");

export const ORT2_LABELS = mkLabels("Ortografia", "Spelling", "Helyesírás", "Rechtschreibung");
export const ORT2_POOL = mkPool("#3B82F6");

export const PROP2_LABELS = mkLabels("Propoziția simplă", "Simple Sentence", "Egyszerű mondat", "Einfacher Satz");
export const PROP2_POOL = mkPool("#60A5FA");

export const PUNCTS2_LABELS = mkLabels("Punctuația", "Punctuation", "Írásjelek", "Interpunktion");
export const PUNCTS2_POOL = mkPool("#2563EB");

export const TEXT2_LABELS = mkLabels("Textul narativ", "Narrative Text", "Elbeszélő szöveg", "Erzähltext");
export const TEXT2_POOL = mkPool("#1D4ED8");

export const RECAP2_LABELS = mkLabels("Recapitulare C2", "Review C2", "Összefoglalás C2", "Wiederholung C2");
export const RECAP2_POOL = mkPool("#3B82F6");
