// lib/explorerPools/romanaC5.ts — AstroRomână Clasa 5 pool stubs
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
      svg: { type: "simple-icon", icon: "🔬", color },
      hintKey: "t1_h1",
      interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
      quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
      difficulty: "medium",
    },
  ];
}

export const FON5_LABELS = mkLabels("Fonetica", "Phonetics", "Hangtan", "Phonetik");
export const FON5_POOL = mkPool("#6366F1");

export const SUBST5_LABELS = mkLabels("Substantivul C5", "Nouns C5", "Főnév C5", "Substantiv K5");
export const SUBST5_POOL = mkPool("#818CF8");

export const VERB5_LABELS = mkLabels("Verbul C5", "Verbs C5", "Ige C5", "Verb K5");
export const VERB5_POOL = mkPool("#4F46E5");

export const PART5_LABELS = mkLabels("Părti de vorbire", "Parts of Speech", "Szófajok", "Wortarten");
export const PART5_POOL = mkPool("#6366F1");

export const ORT5_LABELS = mkLabels("Ortografia C5", "Spelling C5", "Helyesírás C5", "Rechtschreibung K5");
export const ORT5_POOL = mkPool("#818CF8");

export const SINT5_LABELS = mkLabels("Sintaxa C5", "Syntax C5", "Mondattan C5", "Syntax K5");
export const SINT5_POOL = mkPool("#4F46E5");

export const TEXT5L_LABELS = mkLabels("Textul literar C5", "Literary Text C5", "Irodalmi szöveg C5", "Literarischer Text K5");
export const TEXT5L_POOL = mkPool("#6366F1");

export const VOC5_LABELS = mkLabels("Vocabularul", "Vocabulary", "Szókincs", "Wortschatz");
export const VOC5_POOL = mkPool("#818CF8");

export const RECAP5_LABELS = mkLabels("Recapitulare C5", "Review C5", "Összefoglalás C5", "Wiederholung C5");
export const RECAP5_POOL = mkPool("#6366F1");
