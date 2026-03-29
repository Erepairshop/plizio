// lib/explorerPools/sachkundeK2.ts
import type { PoolTopicDef } from "./types";

export const HAUSTIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Haustiere & Pflege",
    t1_title: "Hunde", t1_text: "Hier lernst du alles über Hunde.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Hunde?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Hunde", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Hunde gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Hunde", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Katzen", t2_text: "Hier lernst du alles über Katzen.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Katzen?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Katzen", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Katzen gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Katzen", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Meerschweinchen", t3_text: "Hier lernst du alles über Meerschweinchen.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Meerschweinchen?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Meerschweinchen", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Meerschweinchen gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Meerschweinchen", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Hamster", t4_text: "Hier lernst du alles über Hamster.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Hamster?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Hamster", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Hamster gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Hamster", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Fische", t5_text: "Hier lernst du alles über Fische.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Fische?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Fische", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Fische gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Fische", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Wellensittiche", t6_text: "Hier lernst du alles über Wellensittiche.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Wellensittiche?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Wellensittiche", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Wellensittiche gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Wellensittiche", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Tierpflege", t7_text: "Hier lernst du alles über Tierpflege.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Tierpflege?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Tierpflege", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Tierpflege gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Tierpflege", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Verantwortung", t8_text: "Hier lernst du alles über Verantwortung.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Verantwortung?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Verantwortung", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Verantwortung gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Verantwortung", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const HAUSTIERE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Hunde", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Katzen", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Meerschweinchen", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hamster", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Fische", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wellensittiche", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Tierpflege", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Verantwortung", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const KALENDER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit & Kalender",
    t1_title: "Wochentage", t1_text: "Hier lernst du alles über Wochentage.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Wochentage?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Wochentage", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Wochentage gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Wochentage", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Monate", t2_text: "Hier lernst du alles über Monate.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Monate?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Monate", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Monate gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Monate", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Jahreszeiten", t3_text: "Hier lernst du alles über Jahreszeiten.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Jahreszeiten?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Jahreszeiten", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Jahreszeiten gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Jahreszeiten", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Uhrzeit", t4_text: "Hier lernst du alles über Uhrzeit.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Uhrzeit?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Uhrzeit", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Uhrzeit gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Uhrzeit", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Gestern-Heute-Morgen", t5_text: "Hier lernst du alles über Gestern-Heute-Morgen.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Gestern-Heute-Morgen?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Gestern-Heute-Morgen", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Gestern-Heute-Morgen gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Gestern-Heute-Morgen", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Feiertage", t6_text: "Hier lernst du alles über Feiertage.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Feiertage?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Feiertage", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Feiertage gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Feiertage", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Geburtstag", t7_text: "Hier lernst du alles über Geburtstag.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Geburtstag?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Geburtstag", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Geburtstag gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Geburtstag", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Zeit-Check", t8_text: "Hier lernst du alles über Zeit-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Zeit-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Zeit-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Zeit-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Zeit-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const KALENDER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Wochentage", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Monate", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Jahreszeiten", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Uhrzeit", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gestern-Heute-Morgen", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Feiertage", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Geburtstag", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Zeit-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const MAGNETISMUS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Magnetismus",
    t1_title: "Magnete", t1_text: "Hier lernst du alles über Magnete.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Magnete?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Magnete", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Magnete gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Magnete", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Anziehen", t2_text: "Hier lernst du alles über Anziehen.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Anziehen?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Anziehen", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Anziehen gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Anziehen", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Abstoßen", t3_text: "Hier lernst du alles über Abstoßen.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Abstoßen?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Abstoßen", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Abstoßen gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Abstoßen", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Nordpol-Südpol", t4_text: "Hier lernst du alles über Nordpol-Südpol.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Nordpol-Südpol?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Nordpol-Südpol", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Nordpol-Südpol gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Nordpol-Südpol", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Eisen", t5_text: "Hier lernst du alles über Eisen.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Eisen?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Eisen", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Eisen gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Eisen", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Alltag", t6_text: "Hier lernst du alles über Alltag.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Alltag?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Alltag", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Alltag gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Alltag", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Experiment", t7_text: "Hier lernst du alles über Experiment.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Experiment?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Experiment", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Experiment gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Experiment", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Magnet-Check", t8_text: "Hier lernst du alles über Magnet-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Magnet-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Magnet-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Magnet-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Magnet-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const MAGNETISMUS_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Magnete", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Anziehen", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Abstoßen", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Nordpol-Südpol", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Eisen", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Alltag", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Experiment", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Magnet-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WASSER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wasser & Leben",
    t1_title: "Zustände", t1_text: "Hier lernst du alles über Zustände.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Zustände?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Zustände", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Zustände gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Zustände", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Wasserkreislauf", t2_text: "Hier lernst du alles über Wasserkreislauf.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Wasserkreislauf?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Wasserkreislauf", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Wasserkreislauf gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Wasserkreislauf", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Schwimmen & Sinken", t3_text: "Hier lernst du alles über Schwimmen & Sinken.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Schwimmen & Sinken?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Schwimmen & Sinken", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Schwimmen & Sinken gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Schwimmen & Sinken", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Trinkwasser", t4_text: "Hier lernst du alles über Trinkwasser.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Trinkwasser?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Trinkwasser", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Trinkwasser gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Trinkwasser", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Sparen", t5_text: "Hier lernst du alles über Sparen.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Sparen?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Sparen", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Sparen gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Sparen", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Lebensraum", t6_text: "Hier lernst du alles über Lebensraum.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Lebensraum?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Lebensraum", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Lebensraum gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Lebensraum", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Regen", t7_text: "Hier lernst du alles über Regen.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Regen?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Regen", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Regen gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Regen", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Wasser-Check", t8_text: "Hier lernst du alles über Wasser-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Wasser-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Wasser-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Wasser-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Wasser-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const WASSER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Zustände", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wasserkreislauf", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Schwimmen & Sinken", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Trinkwasser", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Sparen", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Lebensraum", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Regen", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wasser-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WALDTIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere im Wald",
    t1_title: "Reh", t1_text: "Hier lernst du alles über Reh.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Reh?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Reh", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Reh gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Reh", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Fuchs", t2_text: "Hier lernst du alles über Fuchs.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Fuchs?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Fuchs", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Fuchs gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Fuchs", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Wildschwein", t3_text: "Hier lernst du alles über Wildschwein.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Wildschwein?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Wildschwein", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Wildschwein gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Wildschwein", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Eichhörnchen", t4_text: "Hier lernst du alles über Eichhörnchen.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Eichhörnchen?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Eichhörnchen", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Eichhörnchen gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Eichhörnchen", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Eule", t5_text: "Hier lernst du alles über Eule.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Eule?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Eule", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Eule gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Eule", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Specht", t6_text: "Hier lernst du alles über Specht.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Specht?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Specht", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Specht gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Specht", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Spuren", t7_text: "Hier lernst du alles über Spuren.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Spuren?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Spuren", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Spuren gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Spuren", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Wald-Check", t8_text: "Hier lernst du alles über Wald-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Wald-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Wald-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Wald-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Wald-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const WALDTIERE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Reh", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Fuchs", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wildschwein", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Eichhörnchen", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Eule", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Specht", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Spuren", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wald-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const ERNAEHRUNG_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Obst & Gemüse",
    t1_title: "Obstsorten", t1_text: "Hier lernst du alles über Obstsorten.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Obstsorten?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Obstsorten", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Obstsorten gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Obstsorten", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Gemüse", t2_text: "Hier lernst du alles über Gemüse.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Gemüse?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Gemüse", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Gemüse gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Gemüse", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Vitamine", t3_text: "Hier lernst du alles über Vitamine.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Vitamine?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Vitamine", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Vitamine gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Vitamine", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Zucker", t4_text: "Hier lernst du alles über Zucker.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Zucker?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Zucker", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Zucker gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Zucker", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Frühstück", t5_text: "Hier lernst du alles über Frühstück.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Frühstück?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Frühstück", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Frühstück gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Frühstück", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Herkunft", t6_text: "Hier lernst du alles über Herkunft.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Herkunft?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Herkunft", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Herkunft gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Herkunft", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Saison", t7_text: "Hier lernst du alles über Saison.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Saison?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Saison", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Saison gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Saison", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Essen-Check", t8_text: "Hier lernst du alles über Essen-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Essen-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Essen-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Essen-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Essen-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const ERNAEHRUNG_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Obstsorten", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gemüse", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Vitamine", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zucker", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Frühstück", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Herkunft", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Saison", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Essen-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const VERKEHR2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sicher zur Schule",
    t1_title: "Schulweg", t1_text: "Hier lernst du alles über Schulweg.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Schulweg?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Schulweg", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Schulweg gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Schulweg", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Gefahren", t2_text: "Hier lernst du alles über Gefahren.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Gefahren?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Gefahren", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Gefahren gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Gefahren", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Dunkelheit", t3_text: "Hier lernst du alles über Dunkelheit.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Dunkelheit?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Dunkelheit", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Dunkelheit gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Dunkelheit", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Reflektoren", t4_text: "Hier lernst du alles über Reflektoren.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Reflektoren?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Reflektoren", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Reflektoren gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Reflektoren", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Fahrradhelm", t5_text: "Hier lernst du alles über Fahrradhelm.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Fahrradhelm?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Fahrradhelm", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Fahrradhelm gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Fahrradhelm", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Verkehrsschilder", t6_text: "Hier lernst du alles über Verkehrsschilder.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Verkehrsschilder?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Verkehrsschilder", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Verkehrsschilder gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Verkehrsschilder", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Busfahren", t7_text: "Hier lernst du alles über Busfahren.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Busfahren?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Busfahren", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Busfahren gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Busfahren", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Verkehrs-Check", t8_text: "Hier lernst du alles über Verkehrs-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Verkehrs-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Verkehrs-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Verkehrs-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Verkehrs-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const VERKEHR2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Schulweg", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gefahren", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Dunkelheit", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Reflektoren", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Fahrradhelm", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Verkehrsschilder", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Busfahren", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Verkehrs-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WERTSTOFFE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Müll & Recycling 2",
    t1_title: "Papierkorb", t1_text: "Hier lernst du alles über Papierkorb.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Papierkorb?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Papierkorb", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Papierkorb gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Papierkorb", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Gelber Sack", t2_text: "Hier lernst du alles über Gelber Sack.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Gelber Sack?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Gelber Sack", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Gelber Sack gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Gelber Sack", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Glascontainer", t3_text: "Hier lernst du alles über Glascontainer.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Glascontainer?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Glascontainer", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Glascontainer gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Glascontainer", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Biomüll", t4_text: "Hier lernst du alles über Biomüll.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Biomüll?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Biomüll", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Biomüll gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Biomüll", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Wertstoffhof", t5_text: "Hier lernst du alles über Wertstoffhof.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Wertstoffhof?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Wertstoffhof", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Wertstoffhof gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Wertstoffhof", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Vermeidung", t6_text: "Hier lernst du alles über Vermeidung.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Vermeidung?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Vermeidung", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Vermeidung gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Vermeidung", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Upcycling", t7_text: "Hier lernst du alles über Upcycling.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Upcycling?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Upcycling", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Upcycling gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Upcycling", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Müll-Check", t8_text: "Hier lernst du alles über Müll-Check.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über Müll-Check?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "Müll-Check", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Müll-Check gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Müll-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const WERTSTOFFE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Papierkorb", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gelber Sack", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Glascontainer", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Biomüll", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wertstoffhof", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Vermeidung", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Upcycling", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Müll-Check", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const FINALE2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K2 Wissen",
    t1_title: "Natur 1", t1_text: "Hier lernst du alles über Natur 1.", t1_inst: "Wähle die richtige Antwort:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was weißt du über Natur 1?", t1_qa: "Richtig", t1_qb: "Falsch", t1_qc: "Unklar", t1_qd: "Vielleicht",
    t1_w1: "Das", t1_w2: "Thema", t1_w3: "Natur 1", t1_w4: "ist", t1_w5: "sehr", t1_w6: "spannend.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Ja", t1_r2: "Nein", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Natur 1 gehört zu ___.", t1_qa2: "unserer Welt", t1_qb2: "dem Mond", t1_qc2: "der Küche", t1_qd2: "dem Schlaf",
    t1_f1: "Erster Teil", t1_f2: "Zweiter Teil", t1_f3: "Dritter Teil", t1_f4: "Vierter Teil",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Natur 1", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Technik 1", t2_text: "Hier lernst du alles über Technik 1.", t2_inst: "Wähle die richtige Antwort:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was weißt du über Technik 1?", t2_qa: "Richtig", t2_qb: "Falsch", t2_qc: "Unklar", t2_qd: "Vielleicht",
    t2_w1: "Das", t2_w2: "Thema", t2_w3: "Technik 1", t2_w4: "ist", t2_w5: "sehr", t2_w6: "spannend.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Ja", t2_r2: "Nein", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Technik 1 gehört zu ___.", t2_qa2: "unserer Welt", t2_qb2: "dem Mond", t2_qc2: "der Küche", t2_qd2: "dem Schlaf",
    t2_f1: "Erster Teil", t2_f2: "Zweiter Teil", t2_f3: "Dritter Teil", t2_f4: "Vierter Teil",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Technik 1", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Zeit 1", t3_text: "Hier lernst du alles über Zeit 1.", t3_inst: "Wähle die richtige Antwort:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was weißt du über Zeit 1?", t3_qa: "Richtig", t3_qb: "Falsch", t3_qc: "Unklar", t3_qd: "Vielleicht",
    t3_w1: "Das", t3_w2: "Thema", t3_w3: "Zeit 1", t3_w4: "ist", t3_w5: "sehr", t3_w6: "spannend.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Ja", t3_r2: "Nein", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Zeit 1 gehört zu ___.", t3_qa2: "unserer Welt", t3_qb2: "dem Mond", t3_qc2: "der Küche", t3_qd2: "dem Schlaf",
    t3_f1: "Erster Teil", t3_f2: "Zweiter Teil", t3_f3: "Dritter Teil", t3_f4: "Vierter Teil",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Zeit 1", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Tiere 1", t4_text: "Hier lernst du alles über Tiere 1.", t4_inst: "Wähle die richtige Antwort:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was weißt du über Tiere 1?", t4_qa: "Richtig", t4_qb: "Falsch", t4_qc: "Unklar", t4_qd: "Vielleicht",
    t4_w1: "Das", t4_w2: "Thema", t4_w3: "Tiere 1", t4_w4: "ist", t4_w5: "sehr", t4_w6: "spannend.",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Ja", t4_r2: "Nein", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Tiere 1 gehört zu ___.", t4_qa2: "unserer Welt", t4_qb2: "dem Mond", t4_qc2: "der Küche", t4_qd2: "dem Schlaf",
    t4_f1: "Erster Teil", t4_f2: "Zweiter Teil", t4_f3: "Dritter Teil", t4_f4: "Vierter Teil",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Tiere 1", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Wasser 1", t5_text: "Hier lernst du alles über Wasser 1.", t5_inst: "Wähle die richtige Antwort:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was weißt du über Wasser 1?", t5_qa: "Richtig", t5_qb: "Falsch", t5_qc: "Unklar", t5_qd: "Vielleicht",
    t5_w1: "Das", t5_w2: "Thema", t5_w3: "Wasser 1", t5_w4: "ist", t5_w5: "sehr", t5_w6: "spannend.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Ja", t5_r2: "Nein", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Wasser 1 gehört zu ___.", t5_qa2: "unserer Welt", t5_qb2: "dem Mond", t5_qc2: "der Küche", t5_qd2: "dem Schlaf",
    t5_f1: "Erster Teil", t5_f2: "Zweiter Teil", t5_f3: "Dritter Teil", t5_f4: "Vierter Teil",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Wasser 1", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Verkehr 1", t6_text: "Hier lernst du alles über Verkehr 1.", t6_inst: "Wähle die richtige Antwort:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was weißt du über Verkehr 1?", t6_qa: "Richtig", t6_qb: "Falsch", t6_qc: "Unklar", t6_qd: "Vielleicht",
    t6_w1: "Das", t6_w2: "Thema", t6_w3: "Verkehr 1", t6_w4: "ist", t6_w5: "sehr", t6_w6: "spannend.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Ja", t6_r2: "Nein", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Verkehr 1 gehört zu ___.", t6_qa2: "unserer Welt", t6_qb2: "dem Mond", t6_qc2: "der Küche", t6_qd2: "dem Schlaf",
    t6_f1: "Erster Teil", t6_f2: "Zweiter Teil", t6_f3: "Dritter Teil", t6_f4: "Vierter Teil",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Verkehr 1", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Müll 1", t7_text: "Hier lernst du alles über Müll 1.", t7_inst: "Wähle die richtige Antwort:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was weißt du über Müll 1?", t7_qa: "Richtig", t7_qb: "Falsch", t7_qc: "Unklar", t7_qd: "Vielleicht",
    t7_w1: "Das", t7_w2: "Thema", t7_w3: "Müll 1", t7_w4: "ist", t7_w5: "sehr", t7_w6: "spannend.",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Ja", t7_r2: "Nein", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Müll 1 gehört zu ___.", t7_qa2: "unserer Welt", t7_qb2: "dem Mond", t7_qc2: "der Küche", t7_qd2: "dem Schlaf",
    t7_f1: "Erster Teil", t7_f2: "Zweiter Teil", t7_f3: "Dritter Teil", t7_f4: "Vierter Teil",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Müll 1", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "K2 Diplom", t8_text: "Hier lernst du alles über K2 Diplom.", t8_inst: "Wähle die richtige Antwort:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was weißt du über K2 Diplom?", t8_qa: "Richtig", t8_qb: "Falsch", t8_qc: "Unklar", t8_qd: "Vielleicht",
    t8_w1: "Das", t8_w2: "Thema", t8_w3: "K2 Diplom", t8_w4: "ist", t8_w5: "sehr", t8_w6: "spannend.",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Ja", t8_r2: "Nein", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "K2 Diplom gehört zu ___.", t8_qa2: "unserer Welt", t8_qb2: "dem Mond", t8_qc2: "der Küche", t8_qd2: "dem Schlaf",
    t8_f1: "Erster Teil", t8_f2: "Zweiter Teil", t8_f3: "Dritter Teil", t8_f4: "Vierter Teil",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "K2 Diplom", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const FINALE2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Natur 1", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Technik 1", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Zeit 1", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Tiere 1", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wasser 1", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Verkehr 1", color: "#2196F3" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Müll 1", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "K2 Diplom", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

