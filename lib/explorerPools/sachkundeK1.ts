// lib/explorerPools/sachkundeK1.ts
import type { PoolTopicDef } from "./types";

export const KOERPER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körper & Sinne",
    t1_title: "Körperteile", t1_text: "Wir lernen etwas über Körperteile.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Körperteile?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Körperteile.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Körperteile ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Körperteile", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Die fünf Sinne", t2_text: "Wir lernen etwas über Die fünf Sinne.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Die fünf Sinne?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Die fünf Sinne.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Die fünf Sinne ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Die fünf Sinne", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Das Auge", t3_text: "Wir lernen etwas über Das Auge.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Das Auge?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Das Auge.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Das Auge ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Das Auge", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Hände waschen", t4_text: "Wir lernen etwas über Hände waschen.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Hände waschen?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Hände waschen.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Hände waschen ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Hände waschen", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Gesunde Zähne", t5_text: "Wir lernen etwas über Gesunde Zähne.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Gesunde Zähne?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Gesunde Zähne.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Gesunde Zähne ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Gesunde Zähne", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Hygiene", t6_text: "Wir lernen etwas über Hygiene.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Hygiene?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Hygiene.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Hygiene ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Hygiene", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Hören", t7_text: "Wir lernen etwas über Hören.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Hören?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Hören.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Hören ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Hören", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Schmecken", t8_text: "Wir lernen etwas über Schmecken.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Schmecken?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Schmecken.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Schmecken ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Schmecken", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const KOERPER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Körperteile", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die fünf Sinne", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Das Auge", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hände waschen", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gesunde Zähne", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Hygiene", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hören", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Schmecken", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const TIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere im Garten",
    t1_title: "Regenwurm", t1_text: "Wir lernen etwas über Regenwurm.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Regenwurm?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Regenwurm.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Regenwurm ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Regenwurm", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Igel", t2_text: "Wir lernen etwas über Igel.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Igel?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Igel.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Igel ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Igel", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Marienkäfer", t3_text: "Wir lernen etwas über Marienkäfer.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Marienkäfer?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Marienkäfer.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Marienkäfer ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Marienkäfer", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Vögel", t4_text: "Wir lernen etwas über Vögel.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Vögel?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Vögel.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Vögel ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Vögel", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Schnecke", t5_text: "Wir lernen etwas über Schnecke.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Schnecke?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Schnecke.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Schnecke ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Schnecke", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Biene", t6_text: "Wir lernen etwas über Biene.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Biene?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Biene.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Biene ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Biene", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Ameise", t7_text: "Wir lernen etwas über Ameise.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Ameise?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Ameise.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Ameise ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Ameise", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Garten-Check", t8_text: "Wir lernen etwas über Garten-Check.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Garten-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Garten-Check.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Garten-Check ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Garten-Check", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const TIERE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Regenwurm", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Igel", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Marienkäfer", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Vögel", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Schnecke", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Biene", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Ameise", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Garten-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const NATUR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pflanzen & Bäume",
    t1_title: "Der Baum", t1_text: "Wir lernen etwas über Der Baum.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Der Baum?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Der Baum.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Der Baum ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Der Baum", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Blätter", t2_text: "Wir lernen etwas über Blätter.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Blätter?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Blätter.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Blätter ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Blätter", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Frühblüher", t3_text: "Wir lernen etwas über Frühblüher.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Frühblüher?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Frühblüher.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Frühblüher ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Frühblüher", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Löwenzahn", t4_text: "Wir lernen etwas über Löwenzahn.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Löwenzahn?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Löwenzahn.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Löwenzahn ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Löwenzahn", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Wiese", t5_text: "Wir lernen etwas über Wiese.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Wiese?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Wiese.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Wiese ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Wiese", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Wald", t6_text: "Wir lernen etwas über Wald.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Wald?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Wald.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Wald ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Wald", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Samen", t7_text: "Wir lernen etwas über Samen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Samen?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Samen.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Samen ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Samen", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Pflanzen-Check", t8_text: "Wir lernen etwas über Pflanzen-Check.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Pflanzen-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Pflanzen-Check.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Pflanzen-Check ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Pflanzen-Check", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const NATUR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Baum", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Blätter", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Frühblüher", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Löwenzahn", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wiese", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wald", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Samen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Pflanzen-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WETTER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wetter & Jahreszeiten",
    t1_title: "Sonne", t1_text: "Wir lernen etwas über Sonne.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Sonne?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Sonne.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Sonne ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Sonne", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Regen", t2_text: "Wir lernen etwas über Regen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Regen?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Regen.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Regen ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Regen", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Wind", t3_text: "Wir lernen etwas über Wind.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Wind?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Wind.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Wind ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Wind", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Schnee", t4_text: "Wir lernen etwas über Schnee.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Schnee?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Schnee.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Schnee ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Schnee", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Frühling", t5_text: "Wir lernen etwas über Frühling.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Frühling?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Frühling.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Frühling ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Frühling", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Sommer", t6_text: "Wir lernen etwas über Sommer.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Sommer?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Sommer.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Sommer ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Sommer", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Herbst", t7_text: "Wir lernen etwas über Herbst.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Herbst?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Herbst.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Herbst ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Herbst", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Winter", t8_text: "Wir lernen etwas über Winter.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Winter?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Winter.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Winter ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Winter", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const WETTER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Sonne", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Regen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wind", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Schnee", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Frühling", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sommer", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Herbst", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Winter", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const FAMILIE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Meine Familie",
    t1_title: "Eltern", t1_text: "Wir lernen etwas über Eltern.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Eltern?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Eltern.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Eltern ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Eltern", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Geschwister", t2_text: "Wir lernen etwas über Geschwister.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Geschwister?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Geschwister.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Geschwister ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Geschwister", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Großeltern", t3_text: "Wir lernen etwas über Großeltern.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Großeltern?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Großeltern.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Großeltern ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Großeltern", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Zuhause", t4_text: "Wir lernen etwas über Zuhause.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Zuhause?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Zuhause.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Zuhause ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Zuhause", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Gefühle", t5_text: "Wir lernen etwas über Gefühle.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Gefühle?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Gefühle.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Gefühle ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Gefühle", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Freunde", t6_text: "Wir lernen etwas über Freunde.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Freunde?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Freunde.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Freunde ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Freunde", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Hobbys", t7_text: "Wir lernen etwas über Hobbys.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Hobbys?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Hobbys.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Hobbys ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Hobbys", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Familien-Check", t8_text: "Wir lernen etwas über Familien-Check.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Familien-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Familien-Check.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Familien-Check ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Familien-Check", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const FAMILIE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Eltern", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Geschwister", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Großeltern", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zuhause", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gefühle", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Freunde", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hobbys", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Familien-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const VERKEHR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sicher im Verkehr",
    t1_title: "Ampel", t1_text: "Wir lernen etwas über Ampel.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Ampel?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Ampel.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Ampel ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Ampel", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Zebrastreifen", t2_text: "Wir lernen etwas über Zebrastreifen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Zebrastreifen?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Zebrastreifen.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Zebrastreifen ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Zebrastreifen", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Fahrrad", t3_text: "Wir lernen etwas über Fahrrad.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Fahrrad?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Fahrrad.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Fahrrad ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Fahrrad", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Helm", t4_text: "Wir lernen etwas über Helm.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Helm?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Helm.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Helm ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Helm", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Auto", t5_text: "Wir lernen etwas über Auto.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Auto?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Auto.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Auto ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Auto", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Bus", t6_text: "Wir lernen etwas über Bus.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Bus?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Bus.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Bus ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Bus", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Schilder", t7_text: "Wir lernen etwas über Schilder.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Schilder?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Schilder.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Schilder ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Schilder", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Verkehrs-Check", t8_text: "Wir lernen etwas über Verkehrs-Check.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Verkehrs-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Verkehrs-Check.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Verkehrs-Check ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Verkehrs-Check", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const VERKEHR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ampel", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Zebrastreifen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Fahrrad", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Helm", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Auto", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Bus", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Schilder", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Verkehrs-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const MATERIAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Müll & Recycling",
    t1_title: "Papier", t1_text: "Wir lernen etwas über Papier.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Papier?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Papier.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Papier ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Papier", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Glas", t2_text: "Wir lernen etwas über Glas.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Glas?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Glas.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Glas ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Glas", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Plastik", t3_text: "Wir lernen etwas über Plastik.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Plastik?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Plastik.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Plastik ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Plastik", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Bio-Müll", t4_text: "Wir lernen etwas über Bio-Müll.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Bio-Müll?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Bio-Müll.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Bio-Müll ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Bio-Müll", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Restmüll", t5_text: "Wir lernen etwas über Restmüll.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Restmüll?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Restmüll.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Restmüll ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Restmüll", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Sortieren", t6_text: "Wir lernen etwas über Sortieren.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Sortieren?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Sortieren.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Sortieren ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Sortieren", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Sparen", t7_text: "Wir lernen etwas über Sparen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Sparen?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Sparen.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Sparen ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Sparen", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Müll-Check", t8_text: "Wir lernen etwas über Müll-Check.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Müll-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Müll-Check.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Müll-Check ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Müll-Check", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const MATERIAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Papier", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Glas", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Plastik", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Bio-Müll", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Restmüll", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sortieren", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Sparen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Müll-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const NATURE_REVIEW_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Natur-Check",
    t1_title: "Tiere", t1_text: "Wir lernen etwas über Tiere.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Tiere?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Tiere.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Tiere ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Tiere", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Pflanzen", t2_text: "Wir lernen etwas über Pflanzen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Pflanzen?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Pflanzen.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Pflanzen ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Pflanzen", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Wetter", t3_text: "Wir lernen etwas über Wetter.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Wetter?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Wetter.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Wetter ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Wetter", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Körper", t4_text: "Wir lernen etwas über Körper.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Körper?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Körper.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Körper ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Körper", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Sinne", t5_text: "Wir lernen etwas über Sinne.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Sinne?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Sinne.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Sinne ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Sinne", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Gesundheit", t6_text: "Wir lernen etwas über Gesundheit.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Gesundheit?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Gesundheit.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Gesundheit ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Gesundheit", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Sicherheit", t7_text: "Wir lernen etwas über Sicherheit.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Sicherheit?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Sicherheit.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Sicherheit ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Sicherheit", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Natur-Finale", t8_text: "Wir lernen etwas über Natur-Finale.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Natur-Finale?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Natur-Finale.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Natur-Finale ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Natur-Finale", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const NATURE_REVIEW_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Tiere", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Pflanzen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wetter", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Körper", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Sinne", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Gesundheit", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Sicherheit", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Natur-Finale", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const FINALE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Abschluss-Abenteuer",
    t1_title: "Wissen 1", t1_text: "Wir lernen etwas über Wissen 1.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was passt zu Wissen 1?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Vielleicht", t1_qd: "Nein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Wissen 1.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Wissen 1 ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Wissen 1", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Wissen 2", t2_text: "Wir lernen etwas über Wissen 2.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was passt zu Wissen 2?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Vielleicht", t2_qd: "Nein",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Wissen 2.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Wissen 2 ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Wissen 2", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Wissen 3", t3_text: "Wir lernen etwas über Wissen 3.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was passt zu Wissen 3?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Vielleicht", t3_qd: "Nein",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Wissen 3.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Wissen 3 ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Wissen 3", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Wissen 4", t4_text: "Wir lernen etwas über Wissen 4.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was passt zu Wissen 4?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Vielleicht", t4_qd: "Nein",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Wissen 4.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Wissen 4 ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Wissen 4", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Wissen 5", t5_text: "Wir lernen etwas über Wissen 5.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passt zu Wissen 5?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Vielleicht", t5_qd: "Nein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Wissen 5.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Wissen 5 ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Wissen 5", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Wissen 6", t6_text: "Wir lernen etwas über Wissen 6.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was passt zu Wissen 6?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Vielleicht", t6_qd: "Nein",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Wissen 6.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Wissen 6 ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Wissen 6", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Wissen 7", t7_text: "Wir lernen etwas über Wissen 7.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passt zu Wissen 7?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Vielleicht", t7_qd: "Nein",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Wissen 7.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Wissen 7 ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Wissen 7", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Diplom", t8_text: "Wir lernen etwas über Diplom.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was passt zu Diplom?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Vielleicht", t8_qd: "Nein",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Diplom.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Diplom ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Diplom", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const FINALE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Wissen 1", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wissen 2", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wissen 3", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Wissen 4", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wissen 5", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wissen 6", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Wissen 7", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Diplom", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

