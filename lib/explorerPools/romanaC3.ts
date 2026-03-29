// lib/explorerPools/romanaC3.ts — AstroRomână Clasa 3 pool stubs
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
      svg: { type: "simple-icon", icon: "📖", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "medium",
    },
  ];
}

export const SUBST3_LABELS = mkLabels("Substantivul C3", "Nouns C3", "Főnév C3", "Substantiv K3");
export const SUBST3_POOL = mkPool("#10B981");

export const VERB3_LABELS = mkLabels("Verbul C3", "Verbs C3", "Ige C3", "Verb K3");
export const VERB3_POOL = mkPool("#34D399");

export const ADJ3_LABELS = mkLabels("Adjectivul C3", "Adjectives C3", "Melléknév C3", "Adjektiv K3");
export const ADJ3_POOL = mkPool("#059669");

export const PRON3_LABELS = mkLabels("Pronumele", "Pronouns", "Névmások", "Pronomen");
export const PRON3_POOL = mkPool("#10B981");

export const ORT3_LABELS = mkLabels("Ortografia C3", "Spelling C3", "Helyesírás C3", "Rechtschreibung K3");
export const ORT3_POOL = mkPool("#34D399");

export const PROP3_LABELS = mkLabels("Părti de propoziție", "Sentence Parts", "Mondatrészek", "Satzglieder");
export const PROP3_POOL = mkPool("#059669");

export const TEXT3D_LABELS = mkLabels("Textul descriptiv", "Descriptive Text", "Leíró szöveg", "Beschreibender Text");
export const TEXT3D_POOL = mkPool("#10B981");

export const TEXT3N_LABELS = mkLabels("Textul narativ C3", "Narrative Text C3", "Elbeszélő szöveg C3", "Erzähltext K3");
export const TEXT3N_POOL = mkPool("#34D399");

export const RECAP3_LABELS = mkLabels("Recapitulare C3", "Review C3", "Összefoglalás C3", "Wiederholung C3");
export const RECAP3_POOL = mkPool("#10B981");
