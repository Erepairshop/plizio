// @ts-nocheck
// lib/explorerPools/geographieK7.ts
import type { PoolTopicDef } from "./types";

// ─── I1: WASSER & GEWÄSSER ────────────────────────────────────

export const GEO_K7_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wasser & Gewässer",
    t1_title: "Thema 1",
    t1_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t1_h1: "Merkmal 1", t1_h2: "Merkmal 2", t1_h3: "Merkmal 3",
    t1_inst: "Tippe die passenden Elemente an!",
    t1_q: "Was ist wichtig bei Thema 1?",
    t1_qa: "Richtige Antwort", t1_qb: "Falsche Antwort 1", t1_qc: "Falsche Antwort 2", t1_qd: "Falsche Antwort 3",

    t2_title: "Thema 2",
    t2_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t2_h1: "Merkmal 1", t2_h2: "Merkmal 2", t2_h3: "Merkmal 3",
    t2_inst: "Tippe die passenden Elemente an!",
    t2_q: "Was ist wichtig bei Thema 2?",
    t2_qa: "Richtige Antwort", t2_qb: "Falsche Antwort 1", t2_qc: "Falsche Antwort 2", t2_qd: "Falsche Antwort 3",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Wasser & Gewässer.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Water & Waters",
    t1_title: "Topic 1",
    t1_text: "An important topic about Water & Waters.",
    t1_h1: "Feature 1", t1_h2: "Feature 2", t1_h3: "Feature 3",
    t1_inst: "Tap the matching elements!",
    t1_q: "What is important about Topic 1?",
    t1_qa: "Correct Answer", t1_qb: "Wrong Answer 1", t1_qc: "Wrong Answer 2", t1_qd: "Wrong Answer 3",

    t2_title: "Topic 2",
    t2_text: "An important topic about Water & Waters.",
    t2_h1: "Feature 1", t2_h2: "Feature 2", t2_h3: "Feature 3",
    t2_inst: "Tap the matching elements!",
    t2_q: "What is important about Topic 2?",
    t2_qa: "Correct Answer", t2_qb: "Wrong Answer 1", t2_qc: "Wrong Answer 2", t2_qd: "Wrong Answer 3",

    t3_title: "Topic 3",
    t3_text: "An important topic about Water & Waters.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Water & Waters.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Water & Waters.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Water & Waters.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Water & Waters.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Water & Waters.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Water & Waters.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Water & Waters.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Water & Waters.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Water & Waters.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Water & Waters.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Water & Waters.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Water & Waters.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Vizek és vízrajz",
    t1_title: "1. Téma",
    t1_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t1_h1: "1. Jellemző", t1_h2: "2. Jellemző", t1_h3: "3. Jellemző",
    t1_inst: "Koppints a megfelelő elemekre!",
    t1_q: "Mi a legfontosabb a 1. témában?",
    t1_qa: "Helyes válasz", t1_qb: "Helyes válaszhoz hasonló rossz", t1_qc: "Egy másik rossz válasz", t1_qd: "Teljesen rossz válasz",

    t2_title: "2. Téma",
    t2_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t2_h1: "1. Jellemző", t2_h2: "2. Jellemző", t2_h3: "3. Jellemző",
    t2_inst: "Koppints a megfelelő elemekre!",
    t2_q: "Mi a legfontosabb a 2. témában?",
    t2_qa: "Helyes válasz", t2_qb: "Helyes válaszhoz hasonló rossz", t2_qc: "Egy másik rossz válasz", t2_qd: "Teljesen rossz válasz",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Vizek és vízrajz témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Ape și cursuri de apă",
    t1_title: "Tema 1",
    t1_text: "O temă importantă despre Ape și cursuri de apă.",
    t1_h1: "Caracteristica 1", t1_h2: "Caracteristica 2", t1_h3: "Caracteristica 3",
    t1_inst: "Atinge elementele potrivite!",
    t1_q: "Ce este important la Tema 1?",
    t1_qa: "Răspuns corect", t1_qb: "Răspuns greșit 1", t1_qc: "Răspuns greșit 2", t1_qd: "Răspuns greșit 3",

    t2_title: "Tema 2",
    t2_text: "O temă importantă despre Ape și cursuri de apă.",
    t2_h1: "Caracteristica 1", t2_h2: "Caracteristica 2", t2_h3: "Caracteristica 3",
    t2_inst: "Atinge elementele potrivite!",
    t2_q: "Ce este important la Tema 2?",
    t2_qa: "Răspuns corect", t2_qb: "Răspuns greșit 1", t2_qc: "Răspuns greșit 2", t2_qd: "Răspuns greșit 3",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Ape și cursuri de apă.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Ape și cursuri de apă.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Ape și cursuri de apă.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Ape și cursuri de apă.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Ape și cursuri de apă.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Ape și cursuri de apă.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Ape și cursuri de apă.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Ape și cursuri de apă.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Ape și cursuri de apă.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Ape și cursuri de apă.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Ape și cursuri de apă.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Ape și cursuri de apă.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Ape și cursuri de apă.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I1_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i1"
    }
},
];

// ─── I2: ORIENTIERUNG & KOMPASS ────────────────────────────────────

export const GEO_K7_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Orientierung & Kompass",
    t1_title: "Thema 1",
    t1_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t1_h1: "Merkmal 1", t1_h2: "Merkmal 2", t1_h3: "Merkmal 3",
    t1_inst: "Tippe die passenden Elemente an!",
    t1_q: "Was ist wichtig bei Thema 1?",
    t1_qa: "Richtige Antwort", t1_qb: "Falsche Antwort 1", t1_qc: "Falsche Antwort 2", t1_qd: "Falsche Antwort 3",

    t2_title: "Thema 2",
    t2_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t2_h1: "Merkmal 1", t2_h2: "Merkmal 2", t2_h3: "Merkmal 3",
    t2_inst: "Tippe die passenden Elemente an!",
    t2_q: "Was ist wichtig bei Thema 2?",
    t2_qa: "Richtige Antwort", t2_qb: "Falsche Antwort 1", t2_qc: "Falsche Antwort 2", t2_qd: "Falsche Antwort 3",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Orientierung & Kompass.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Orientation & Compass",
    t1_title: "Topic 1",
    t1_text: "An important topic about Orientation & Compass.",
    t1_h1: "Feature 1", t1_h2: "Feature 2", t1_h3: "Feature 3",
    t1_inst: "Tap the matching elements!",
    t1_q: "What is important about Topic 1?",
    t1_qa: "Correct Answer", t1_qb: "Wrong Answer 1", t1_qc: "Wrong Answer 2", t1_qd: "Wrong Answer 3",

    t2_title: "Topic 2",
    t2_text: "An important topic about Orientation & Compass.",
    t2_h1: "Feature 1", t2_h2: "Feature 2", t2_h3: "Feature 3",
    t2_inst: "Tap the matching elements!",
    t2_q: "What is important about Topic 2?",
    t2_qa: "Correct Answer", t2_qb: "Wrong Answer 1", t2_qc: "Wrong Answer 2", t2_qd: "Wrong Answer 3",

    t3_title: "Topic 3",
    t3_text: "An important topic about Orientation & Compass.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Orientation & Compass.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Orientation & Compass.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Orientation & Compass.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Orientation & Compass.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Orientation & Compass.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Orientation & Compass.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Orientation & Compass.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Orientation & Compass.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Orientation & Compass.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Orientation & Compass.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Orientation & Compass.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Orientation & Compass.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Tájékozódás és iránytű",
    t1_title: "1. Téma",
    t1_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t1_h1: "1. Jellemző", t1_h2: "2. Jellemző", t1_h3: "3. Jellemző",
    t1_inst: "Koppints a megfelelő elemekre!",
    t1_q: "Mi a legfontosabb a 1. témában?",
    t1_qa: "Helyes válasz", t1_qb: "Helyes válaszhoz hasonló rossz", t1_qc: "Egy másik rossz válasz", t1_qd: "Teljesen rossz válasz",

    t2_title: "2. Téma",
    t2_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t2_h1: "1. Jellemző", t2_h2: "2. Jellemző", t2_h3: "3. Jellemző",
    t2_inst: "Koppints a megfelelő elemekre!",
    t2_q: "Mi a legfontosabb a 2. témában?",
    t2_qa: "Helyes válasz", t2_qb: "Helyes válaszhoz hasonló rossz", t2_qc: "Egy másik rossz válasz", t2_qd: "Teljesen rossz válasz",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Tájékozódás és iránytű témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Orientare și busolă",
    t1_title: "Tema 1",
    t1_text: "O temă importantă despre Orientare și busolă.",
    t1_h1: "Caracteristica 1", t1_h2: "Caracteristica 2", t1_h3: "Caracteristica 3",
    t1_inst: "Atinge elementele potrivite!",
    t1_q: "Ce este important la Tema 1?",
    t1_qa: "Răspuns corect", t1_qb: "Răspuns greșit 1", t1_qc: "Răspuns greșit 2", t1_qd: "Răspuns greșit 3",

    t2_title: "Tema 2",
    t2_text: "O temă importantă despre Orientare și busolă.",
    t2_h1: "Caracteristica 1", t2_h2: "Caracteristica 2", t2_h3: "Caracteristica 3",
    t2_inst: "Atinge elementele potrivite!",
    t2_q: "Ce este important la Tema 2?",
    t2_qa: "Răspuns corect", t2_qb: "Răspuns greșit 1", t2_qc: "Răspuns greșit 2", t2_qd: "Răspuns greșit 3",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Orientare și busolă.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Orientare și busolă.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Orientare și busolă.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Orientare și busolă.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Orientare și busolă.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Orientare și busolă.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Orientare și busolă.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Orientare și busolă.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Orientare și busolă.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Orientare și busolă.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Orientare și busolă.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Orientare și busolă.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Orientare și busolă.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I2_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i2"
    }
},
];

// ─── I3: KARTEN LESEN ────────────────────────────────────

export const GEO_K7_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Karten lesen",
    t1_title: "Thema 1",
    t1_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t1_h1: "Merkmal 1", t1_h2: "Merkmal 2", t1_h3: "Merkmal 3",
    t1_inst: "Tippe die passenden Elemente an!",
    t1_q: "Was ist wichtig bei Thema 1?",
    t1_qa: "Richtige Antwort", t1_qb: "Falsche Antwort 1", t1_qc: "Falsche Antwort 2", t1_qd: "Falsche Antwort 3",

    t2_title: "Thema 2",
    t2_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t2_h1: "Merkmal 1", t2_h2: "Merkmal 2", t2_h3: "Merkmal 3",
    t2_inst: "Tippe die passenden Elemente an!",
    t2_q: "Was ist wichtig bei Thema 2?",
    t2_qa: "Richtige Antwort", t2_qb: "Falsche Antwort 1", t2_qc: "Falsche Antwort 2", t2_qd: "Falsche Antwort 3",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Karten lesen.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Reading Maps",
    t1_title: "Topic 1",
    t1_text: "An important topic about Reading Maps.",
    t1_h1: "Feature 1", t1_h2: "Feature 2", t1_h3: "Feature 3",
    t1_inst: "Tap the matching elements!",
    t1_q: "What is important about Topic 1?",
    t1_qa: "Correct Answer", t1_qb: "Wrong Answer 1", t1_qc: "Wrong Answer 2", t1_qd: "Wrong Answer 3",

    t2_title: "Topic 2",
    t2_text: "An important topic about Reading Maps.",
    t2_h1: "Feature 1", t2_h2: "Feature 2", t2_h3: "Feature 3",
    t2_inst: "Tap the matching elements!",
    t2_q: "What is important about Topic 2?",
    t2_qa: "Correct Answer", t2_qb: "Wrong Answer 1", t2_qc: "Wrong Answer 2", t2_qd: "Wrong Answer 3",

    t3_title: "Topic 3",
    t3_text: "An important topic about Reading Maps.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Reading Maps.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Reading Maps.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Reading Maps.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Reading Maps.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Reading Maps.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Reading Maps.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Reading Maps.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Reading Maps.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Reading Maps.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Reading Maps.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Reading Maps.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Reading Maps.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Térképolvasás",
    t1_title: "1. Téma",
    t1_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t1_h1: "1. Jellemző", t1_h2: "2. Jellemző", t1_h3: "3. Jellemző",
    t1_inst: "Koppints a megfelelő elemekre!",
    t1_q: "Mi a legfontosabb a 1. témában?",
    t1_qa: "Helyes válasz", t1_qb: "Helyes válaszhoz hasonló rossz", t1_qc: "Egy másik rossz válasz", t1_qd: "Teljesen rossz válasz",

    t2_title: "2. Téma",
    t2_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t2_h1: "1. Jellemző", t2_h2: "2. Jellemző", t2_h3: "3. Jellemző",
    t2_inst: "Koppints a megfelelő elemekre!",
    t2_q: "Mi a legfontosabb a 2. témában?",
    t2_qa: "Helyes válasz", t2_qb: "Helyes válaszhoz hasonló rossz", t2_qc: "Egy másik rossz válasz", t2_qd: "Teljesen rossz válasz",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Térképolvasás témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Citirea hărților",
    t1_title: "Tema 1",
    t1_text: "O temă importantă despre Citirea hărților.",
    t1_h1: "Caracteristica 1", t1_h2: "Caracteristica 2", t1_h3: "Caracteristica 3",
    t1_inst: "Atinge elementele potrivite!",
    t1_q: "Ce este important la Tema 1?",
    t1_qa: "Răspuns corect", t1_qb: "Răspuns greșit 1", t1_qc: "Răspuns greșit 2", t1_qd: "Răspuns greșit 3",

    t2_title: "Tema 2",
    t2_text: "O temă importantă despre Citirea hărților.",
    t2_h1: "Caracteristica 1", t2_h2: "Caracteristica 2", t2_h3: "Caracteristica 3",
    t2_inst: "Atinge elementele potrivite!",
    t2_q: "Ce este important la Tema 2?",
    t2_qa: "Răspuns corect", t2_qb: "Răspuns greșit 1", t2_qc: "Răspuns greșit 2", t2_qd: "Răspuns greșit 3",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Citirea hărților.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Citirea hărților.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Citirea hărților.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Citirea hărților.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Citirea hărților.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Citirea hărților.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Citirea hărților.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Citirea hărților.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Citirea hărților.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Citirea hărților.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Citirea hărților.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Citirea hărților.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Citirea hărților.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I3_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i3"
    }
},
];

// ─── I4: FLÜSSE & WASSERKREISLAUF ────────────────────────────────────

export const GEO_K7_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Flüsse & Wasserkreislauf",
    t1_title: "Thema 1",
    t1_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t1_h1: "Merkmal 1", t1_h2: "Merkmal 2", t1_h3: "Merkmal 3",
    t1_inst: "Tippe die passenden Elemente an!",
    t1_q: "Was ist wichtig bei Thema 1?",
    t1_qa: "Richtige Antwort", t1_qb: "Falsche Antwort 1", t1_qc: "Falsche Antwort 2", t1_qd: "Falsche Antwort 3",

    t2_title: "Thema 2",
    t2_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t2_h1: "Merkmal 1", t2_h2: "Merkmal 2", t2_h3: "Merkmal 3",
    t2_inst: "Tippe die passenden Elemente an!",
    t2_q: "Was ist wichtig bei Thema 2?",
    t2_qa: "Richtige Antwort", t2_qb: "Falsche Antwort 1", t2_qc: "Falsche Antwort 2", t2_qd: "Falsche Antwort 3",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Flüsse & Wasserkreislauf.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Rivers & Water Cycle",
    t1_title: "Topic 1",
    t1_text: "An important topic about Rivers & Water Cycle.",
    t1_h1: "Feature 1", t1_h2: "Feature 2", t1_h3: "Feature 3",
    t1_inst: "Tap the matching elements!",
    t1_q: "What is important about Topic 1?",
    t1_qa: "Correct Answer", t1_qb: "Wrong Answer 1", t1_qc: "Wrong Answer 2", t1_qd: "Wrong Answer 3",

    t2_title: "Topic 2",
    t2_text: "An important topic about Rivers & Water Cycle.",
    t2_h1: "Feature 1", t2_h2: "Feature 2", t2_h3: "Feature 3",
    t2_inst: "Tap the matching elements!",
    t2_q: "What is important about Topic 2?",
    t2_qa: "Correct Answer", t2_qb: "Wrong Answer 1", t2_qc: "Wrong Answer 2", t2_qd: "Wrong Answer 3",

    t3_title: "Topic 3",
    t3_text: "An important topic about Rivers & Water Cycle.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Rivers & Water Cycle.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Rivers & Water Cycle.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Rivers & Water Cycle.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Rivers & Water Cycle.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Rivers & Water Cycle.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Rivers & Water Cycle.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Rivers & Water Cycle.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Rivers & Water Cycle.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Rivers & Water Cycle.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Rivers & Water Cycle.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Rivers & Water Cycle.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Rivers & Water Cycle.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Folyók és vízkörforgás",
    t1_title: "1. Téma",
    t1_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t1_h1: "1. Jellemző", t1_h2: "2. Jellemző", t1_h3: "3. Jellemző",
    t1_inst: "Koppints a megfelelő elemekre!",
    t1_q: "Mi a legfontosabb a 1. témában?",
    t1_qa: "Helyes válasz", t1_qb: "Helyes válaszhoz hasonló rossz", t1_qc: "Egy másik rossz válasz", t1_qd: "Teljesen rossz válasz",

    t2_title: "2. Téma",
    t2_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t2_h1: "1. Jellemző", t2_h2: "2. Jellemző", t2_h3: "3. Jellemző",
    t2_inst: "Koppints a megfelelő elemekre!",
    t2_q: "Mi a legfontosabb a 2. témában?",
    t2_qa: "Helyes válasz", t2_qb: "Helyes válaszhoz hasonló rossz", t2_qc: "Egy másik rossz válasz", t2_qd: "Teljesen rossz válasz",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Folyók és vízkörforgás témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Râuri și circuitul apei",
    t1_title: "Tema 1",
    t1_text: "O temă importantă despre Râuri și circuitul apei.",
    t1_h1: "Caracteristica 1", t1_h2: "Caracteristica 2", t1_h3: "Caracteristica 3",
    t1_inst: "Atinge elementele potrivite!",
    t1_q: "Ce este important la Tema 1?",
    t1_qa: "Răspuns corect", t1_qb: "Răspuns greșit 1", t1_qc: "Răspuns greșit 2", t1_qd: "Răspuns greșit 3",

    t2_title: "Tema 2",
    t2_text: "O temă importantă despre Râuri și circuitul apei.",
    t2_h1: "Caracteristica 1", t2_h2: "Caracteristica 2", t2_h3: "Caracteristica 3",
    t2_inst: "Atinge elementele potrivite!",
    t2_q: "Ce este important la Tema 2?",
    t2_qa: "Răspuns corect", t2_qb: "Răspuns greșit 1", t2_qc: "Răspuns greșit 2", t2_qd: "Răspuns greșit 3",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Râuri și circuitul apei.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Râuri și circuitul apei.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Râuri și circuitul apei.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Râuri și circuitul apei.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Râuri și circuitul apei.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Râuri și circuitul apei.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Râuri și circuitul apei.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Râuri și circuitul apei.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Râuri și circuitul apei.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Râuri și circuitul apei.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Râuri și circuitul apei.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Râuri și circuitul apei.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Râuri și circuitul apei.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I4_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i4"
    }
},
];

// ─── I5: LANDSCHAFTSFORMEN ────────────────────────────────────

export const GEO_K7_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Landschaftsformen",
    t1_title: "Unruhige Erde",
    t1_text: "In Asien treffen gigantische Erdplatten aufeinander. Wenn sie sich verhaken und ruckartig lösen, zittert die Erde oder das Meer schlägt hohe Wellen.",
    t1_h1: "Platten schieben sich",
    t1_h2: "Spannung entlädt sich",
    t1_h3: "Energie wandert als Welle",
    t1_inst: "Beschrifte das Zentrum des Bebens!",
    t1_area_epi: "Epizentrum (oben)",
    t1_area_hypo: "Hypozentrum (unten)",
    t1_area_fault: "Bruchstelle",
    t1_area_wave: "Erdbebenwellen",
    t1_q: "Wie nennt man eine Riesenwelle nach einem Seebeben?",
    t1_qa: "Tsunami",
    t1_qb: "Ebbe",
    t1_qc: "Monsun",
    t1_qd: "Strömung",

    t2_title: "Der Feuerring",
    t2_text: "Rund um den Pazifik brodelt es. Hunderte Vulkane stehen hier Wache. Sie sind gefährlich, aber ihre Asche macht den Boden auch fruchtbar.",
    t2_h1: "Vulkan am Ozeanrand",
    t2_h2: "Lava fließt ins Meer",
    t2_h3: "Inseln liegen entlang der Kette",
    t2_inst: "Ziehe die Naturmerkmale an den richtigen Ort!",
    t2_bucket_volcano: "Vulkanzone",
    t2_bucket_coast: "Küstenzone",
    t2_item_ash: "Asche",
    t2_item_lava: "Lava",
    t2_item_island: "Insel",
    t2_item_wave: "Welle",
    t2_q: "Warum leben Menschen trotz Gefahr oft nah an Vulkanen?",
    t2_qa: "Wegen des fruchtbaren Bodens",
    t2_qb: "Wegen der Aussicht",
    t2_qc: "Weil es dort regnet",
    t2_qd: "Wegen des Eises",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Landschaftsformen.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Landforms",
    t1_title: "Restless Earth",
    t1_text: "Gigantic tectonic plates collide in Asia. When they snag and suddenly release, the earth trembles or the sea throws up giant waves.",
    t1_h1: "Plates pushing each other",
    t1_h2: "Tension is released",
    t1_h3: "Energy travels as a wave",
    t1_inst: "Label the center of the quake!",
    t1_area_epi: "Epicenter (above)",
    t1_area_hypo: "Hypocenter (below)",
    t1_area_fault: "Fault line",
    t1_area_wave: "Seismic waves",
    t1_q: "What do you call a giant wave after an undersea earthquake?",
    t1_qa: "Tsunami",
    t1_qb: "Ebb",
    t1_qc: "Monsoon",
    t1_qd: "Current",

    t2_title: "The Ring of Fire",
    t2_text: "All around the Pacific, things are bubbling. Hundreds of volcanoes stand guard here. They are dangerous, but their ash makes the soil fertile.",
    t2_h1: "Volcanoes on ocean edge",
    t2_h2: "Magma becomes lava",
    t2_h3: "Fertile volcanic soil",
    t2_inst: "Find 5 active volcanoes in East Asia!",
    t2_q: "Why do people often live near volcanoes despite the danger?",
    t2_qa: "Because of fertile soil",
    t2_qb: "Because of the view",
    t2_qc: "Because it rains there",
    t2_qd: "Because of the ice",

    t3_title: "Topic 3",
    t3_text: "An important topic about Landforms.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Landforms.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Landforms.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Landforms.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Landforms.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Landforms.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Landforms.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Landforms.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Landforms.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Landforms.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Landforms.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Landforms.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Landforms.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Domborzati formák",
    t1_title: "Nyugtalan föld",
    t1_text: "Ázsiában hatalmas kőzetlemezek ütköznek össze. Amikor összeakadnak, majd hirtelen elmozdulnak, megremeg a föld, vagy óriási hullámokat vet a tenger.",
    t1_h1: "Egymást toló lemezek",
    t1_h2: "Feszültség felszabadulása",
    t1_h3: "Energia hullámként terjed",
    t1_inst: "Nevezd meg a rengés központját!",
    t1_area_epi: "Epizentrum (fent)",
    t1_area_hypo: "Hipocentrum (lent)",
    t1_area_fault: "Törésvonal",
    t1_area_wave: "Szeizmikus hullámok",
    t1_q: "Hogy hívják a tenger alatti földrengés utáni óriáshullámot?",
    t1_qa: "Cunami",
    t1_qb: "Apály",
    t1_qc: "Monsun",
    t1_qd: "Áramlat",

    t2_title: "A tűzgyűrű",
    t2_text: "A Csendes-óceán peremén állandóan forr a mély. Vulkánok százai állnak itt őrt. Veszélyesek, de hamujuk termékennyé teszi a földet.",
    t2_h1: "Vulkánok az óceán partján",
    t2_h2: "Magmából láva lesz",
    t2_h3: "Termékeny vulkáni talaj",
    t2_inst: "Keress 5 aktív vulkánt Kelet-Ázsiában!",
    t2_q: "Miért laknak az emberek a veszély ellenére vulkánok közelében?",
    t2_qa: "A termékeny talaj miatt",
    t2_qb: "A kilátás miatt",
    t2_qc: "Mert ott többet esik",
    t2_qd: "A jég miatt",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Domborzati formák témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Forme de relief",
    t1_title: "Pământ neliniștit",
    t1_text: "În Asia se ciocnesc plăci tectonice gigantice. Când se agață și se eliberează brusc, pământul tremură sau marea aruncă valuri uriașe.",
    t1_h1: "Plăci care se împing",
    t1_h2: "Tensiunea se eliberează",
    t1_h3: "Energia circulă ca o undă",
    t1_inst: "Etichetează centrul cutremurului!",
    t1_area_epi: "Epicentru (sus)",
    t1_area_hypo: "Hipocentru (jos)",
    t1_area_fault: "Linie de falie",
    t1_area_wave: "Unde seismice",
    t1_q: "Cum se numește un val uriaș după un cutremur submarin?",
    t1_qa: "Tsunami",
    t1_qb: "Reflux",
    t1_qc: "Muson",
    t1_qd: "Curent",

    t2_title: "Inelul de Foc",
    t2_text: "De jur împrejurul Pacificului, pământul fierbe. Sute de vulcani stau de veghe aici. Sunt periculoși, dar cenușa lor face solul fertil.",
    t2_h1: "Vulcani la marginea oceanului",
    t2_h2: "Magma devine lavă",
    t2_h3: "Sol vulcanic fertil",
    t2_inst: "Caută 5 vulcani activi în Asia de Est!",
    t2_q: "De ce trăiesc oamenii adesea lângă vulcani în ciuda pericolului?",
    t2_qa: "Datorită solului fertil",
    t2_qb: "Datorită priveliștii",
    t2_qc: "Pentru că plouă mai mult",
    t2_qd: "Datorită gheții",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Forme de relief.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Forme de relief.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Forme de relief.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Forme de relief.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Forme de relief.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Forme de relief.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Forme de relief.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Forme de relief.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Forme de relief.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Forme de relief.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Forme de relief.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Forme de relief.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Forme de relief.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I5_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "💥",
        "title": "Quake",
        "bg": "#FFF7ED"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "label-diagram",
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h3",
        "areas": [
            {
                "id": "epi",
                "x": 50,
                "y": 15,
                "label": "t1_area_epi"
            },
            {
                "id": "hypo",
                "x": 50,
                "y": 80,
                "label": "t1_area_hypo"
            },
            {
                "id": "fault",
                "x": 20,
                "y": 50,
                "label": "t1_area_fault"
            },
            {
                "id": "wave",
                "x": 80,
                "y": 50,
                "label": "t1_area_wave"
            }
        ]
    },
    "quiz": {
        "generate": "earthquakes_tectonics"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "icon-grid",
        "items": [
            {
                "emoji": "🌋"
            },
            {
                "emoji": "🌊"
            },
            {
                "emoji": "🗾"
            },
            {
                "emoji": "🌍"
            }
        ],
        "bg": "#FEF2F2"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "drag-to-bucket",
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2",
        "buckets": [
            {
                "id": "volcano",
                "label": "t2_bucket_volcano"
            },
            {
                "id": "coast",
                "label": "t2_bucket_coast"
            }
        ],
        "items": [
            {
                "text": "t2_item_ash",
                "bucketId": "volcano"
            },
            {
                "text": "t2_item_lava",
                "bucketId": "volcano"
            },
            {
                "text": "t2_item_island",
                "bucketId": "coast"
            },
            {
                "text": "t2_item_wave",
                "bucketId": "coast"
            }
        ]
    },
    "quiz": {
        "generate": "ring_of_fire_detailed"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i5"
    }
},
];

// ─── I6: KLIMA & WETTER ────────────────────────────────────

export const GEO_K7_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Klima & Wetter",
    t1_title: "Atemzug des Kontinents",
    t1_text: "Der Monsun ist wie ein riesiger Atemzug. Im Sommer saugt das heiße Land feuchte Meeresluft an und bringt den lebenswichtigen Regen.",
    t1_h1: "Sommer = Regenzeit",
    t1_h2: "Winter = Trockenzeit",
    t1_h3: "Wichtig für die Bauern",
    t1_inst: "Wie entsteht der Sommermonsun?",
    t1_w1: "Land heizhet sich stark auf",
    t1_w2: "Warme Luft steigt auf",
    t1_w3: "Feuchte Luft strömt nach",
    t1_w4: "Wolken regnen ab",
    t1_q: "Wann bringt der Monsun in Indien meist den meisten Regen?",
    t1_qa: "Im Sommer",
    t1_qb: "Im Winter",
    t1_qc: "Nachts",
    t1_qd: "Gar nicht",

    t2_title: "Hauchdünne Schutzschicht",
    t2_text: "Die Atmosphäre schützt uns vor der Kälte des Alls und gefährlicher Strahlung. Sie besteht aus verschiedenen Schichten, die jeweils eigene Aufgaben haben.",
    t2_h1: "Troposphäre = Wetter",
    t2_h2: "Stratosphäre = Ozonschicht",
    t2_h3: "Exosphäre = Übergang ins All",
    t2_inst: "Beschrifte die Schichten der Atmosphäre (von unten nach oben)!",
    t2_area_tropo: "Troposphäre",
    t2_area_strato: "Stratosphäre",
    t2_area_meso: "Mesosphäre",
    t2_area_thermo: "Thermosphäre",
    t2_q: "In welcher Schicht spielt sich fast das gesamte Wetter ab?",
    t2_qa: "Troposphäre",
    t2_qb: "Stratosphäre",
    t2_qc: "Mesosphäre",
    t2_qd: "Exosphäre",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Klima & Wetter.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Climate & Weather",
    t1_title: "Breath of the Continent",
    t1_text: "The monsoon is like a giant breath. In summer, the hot land sucks in moist sea air and brings life-giving rain.",
    t1_h1: "Summer = Rainy season",
    t1_h2: "Winter = Dry season",
    t1_h3: "Vital for the harvest",
    t1_inst: "How does the summer monsoon form?",
    t1_w1: "Land heats up strongly",
    t1_w2: "Warm air rises",
    t1_w3: "Moist air flows in",
    t1_w4: "Clouds drop rain",
    t1_q: "When does the monsoon in India usually bring the most rain?",
    t1_qa: "In Summer",
    t1_qb: "In Winter",
    t1_qc: "At Night",
    t1_qd: "Never",

    t2_title: "Thin Layer of Protection",
    t2_text: "The atmosphere protects us from the cold of space and dangerous radiation. It consists of different layers, each with its own tasks.",
    t2_h1: "Troposphere = Weather",
    t2_h2: "Stratosphere = Ozone layer",
    t2_h3: "Exosphere = Transition to space",
    t2_inst: "Label the layers of the atmosphere (from bottom to top)!",
    t2_area_tropo: "Troposphere",
    t2_area_strato: "Stratosphere",
    t2_area_meso: "Mesosphere",
    t2_area_thermo: "Thermosphere",
    t2_q: "In which layer does almost all weather take place?",
    t2_qa: "Troposphere",
    t2_qb: "Stratosphere",
    t2_qc: "Mesosphere",
    t2_qd: "Exosphere",

    t3_title: "Topic 3",
    t3_text: "An important topic about Climate & Weather.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Climate & Weather.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Climate & Weather.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Climate & Weather.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Climate & Weather.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Climate & Weather.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Climate & Weather.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Climate & Weather.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Climate & Weather.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Climate & Weather.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Climate & Weather.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Climate & Weather.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Climate & Weather.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Éghajlat és időjárás",
    t1_title: "A kontinens lélegzetvétele",
    t1_text: "A monszun olyan, mint egy óriási lélegzetvétel. Nyáron a forró szárazföld beszippantja a tenger felőli párás levegőt, ami meghozza az életet adó esőt.",
    t1_h1: "Nyár = Esős évszak",
    t1_h2: "Tél = Száraz évszak",
    t1_h3: "Létfontosságú a termésnek",
    t1_inst: "Hogyan alakul ki a nyári monszun?",
    t1_w1: "A szárazföld felmelegszik",
    t1_w2: "A meleg levegő felszáll",
    t1_w3: "Párás levegő áramlik be",
    t1_w4: "A felhőkből eső esik",
    t1_q: "Mikor hozza a monszun Indiában a legtöbb esőt?",
    t1_qa: "Nyáron",
    t1_qb: "Télen",
    t1_qc: "Éjszaka",
    t1_qd: "Soha",

    t2_title: "Vékony védőpajzs",
    t2_text: "A légkör véd meg minket a világűr hidegétől és a káros sugárzástól. Több rétegből áll, és mindegyiknek megvan a maga feladata.",
    t2_h1: "Troposzféra = Időjárás",
    t2_h2: "Sztratoszféra = Ózonréteg",
    t2_h3: "Exoszféra = Irány az űr",
    t2_inst: "Nevezd meg a légkör rétegeit (alulról felfelé)!",
    t2_area_tropo: "Troposzféra",
    t2_area_strato: "Sztratoszféra",
    t2_area_meso: "Mezoszféra",
    t2_area_thermo: "Termoszféra",
    t2_q: "Melyik rétegben zajlik szinte az összes időjárási jelenség?",
    t2_qa: "Troposzféra",
    t2_qb: "Sztratoszféra",
    t2_qc: "Mezoszféra",
    t2_qd: "Exoszféra",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Éghajlat és időjárás témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Climă și vreme",
    t1_title: "Respirația continentului",
    t1_text: "Musonul este ca o respirație gigantică. Vara, pământul fierbinte absoarbe aerul umed al mării și aduce ploaia vitală.",
    t1_h1: "Vară = Sezon ploios",
    t1_h2: "Iarnă = Sezon secetos",
    t1_h3: "Vital pentru recoltă",
    t1_inst: "Cum se formează musonul de vară?",
    t1_w1: "Pământul se încălzește puternic",
    t1_w2: "Aerul cald se ridică",
    t1_w3: "Aerul umed pătrunde în interior",
    t1_w4: "Norii aduc ploaia",
    t1_q: "Când aduce musonul în India cele mai multe ploi?",
    t1_qa: "Vara",
    t1_qb: "Iarna",
    t1_qc: "Noaptea",
    t1_qd: "Niciodată",

    t2_title: "Stratul subțire de protecție",
    t2_text: "Atmosfera ne protejează de frigul spațiului și de radiațiile periculoase. Este formată din mai multe straturi, fiecare cu rolul său.",
    t2_h1: "Troposferă = Vremea",
    t2_h2: "Stratosferă = Stratul de ozon",
    t2_h3: "Exosferă = Trecerea spre spațiu",
    t2_inst: "Etichetează straturile atmosferei (de jos în sus)!",
    t2_area_tropo: "Troposferă",
    t2_area_strato: "Stratosferă",
    t2_area_meso: "Mezosferă",
    t2_area_thermo: "Termosferă",
    t2_q: "În care strat are loc aproape toată vremea?",
    t2_qa: "Troposferă",
    t2_qb: "Stratosferă",
    t2_qc: "Mezosferă",
    t2_qd: "Exosferă",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Climă și vreme.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Climă și vreme.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Climă și vreme.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Climă și vreme.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Climă și vreme.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Climă și vreme.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Climă și vreme.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Climă și vreme.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Climă și vreme.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Climă și vreme.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Climă și vreme.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Climă și vreme.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Climă și vreme.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I6_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌬️",
        "title": "Monsoon",
        "bg": "#FDF4FF"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "word-order",
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h3",
        "words": [
            "t1_w1",
            "t1_w2",
            "t1_w3",
            "t1_w4"
        ],
        "correctOrder": [
            0,
            1,
            2,
            3
        ]
    },
    "quiz": {
        "generate": "monsoon_system"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "☁️",
        "title": "Atmosphere",
        "bg": "#F0F9FF"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "label-diagram",
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h3",
        "areas": [
            {
                "id": "tropo",
                "x": 50,
                "y": 85,
                "label": "t2_area_tropo"
            },
            {
                "id": "strato",
                "x": 50,
                "y": 65,
                "label": "t2_area_strato"
            },
            {
                "id": "meso",
                "x": 50,
                "y": 45,
                "label": "t2_area_meso"
            },
            {
                "id": "thermo",
                "x": 50,
                "y": 25,
                "label": "t2_area_thermo"
            }
        ]
    },
    "quiz": {
        "generate": "atmosphere_layers"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i6"
    }
},
];

// ─── I7: EUROPA ────────────────────────────────────

export const GEO_K7_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Europa",
    t1_title: "Thema 1",
    t1_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t1_h1: "Merkmal 1", t1_h2: "Merkmal 2", t1_h3: "Merkmal 3",
    t1_inst: "Tippe die passenden Elemente an!",
    t1_q: "Was ist wichtig bei Thema 1?",
    t1_qa: "Richtige Antwort", t1_qb: "Falsche Antwort 1", t1_qc: "Falsche Antwort 2", t1_qd: "Falsche Antwort 3",

    t2_title: "Thema 2",
    t2_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t2_h1: "Merkmal 1", t2_h2: "Merkmal 2", t2_h3: "Merkmal 3",
    t2_inst: "Tippe die passenden Elemente an!",
    t2_q: "Was ist wichtig bei Thema 2?",
    t2_qa: "Richtige Antwort", t2_qb: "Falsche Antwort 1", t2_qc: "Falsche Antwort 2", t2_qd: "Falsche Antwort 3",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Europa.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Europe",
    t1_title: "Topic 1",
    t1_text: "An important topic about Europe.",
    t1_h1: "Feature 1", t1_h2: "Feature 2", t1_h3: "Feature 3",
    t1_inst: "Tap the matching elements!",
    t1_q: "What is important about Topic 1?",
    t1_qa: "Correct Answer", t1_qb: "Wrong Answer 1", t1_qc: "Wrong Answer 2", t1_qd: "Wrong Answer 3",

    t2_title: "Topic 2",
    t2_text: "An important topic about Europe.",
    t2_h1: "Feature 1", t2_h2: "Feature 2", t2_h3: "Feature 3",
    t2_inst: "Tap the matching elements!",
    t2_q: "What is important about Topic 2?",
    t2_qa: "Correct Answer", t2_qb: "Wrong Answer 1", t2_qc: "Wrong Answer 2", t2_qd: "Wrong Answer 3",

    t3_title: "Topic 3",
    t3_text: "An important topic about Europe.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Europe.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Europe.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Europe.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Europe.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Europe.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Europe.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Europe.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Europe.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Europe.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Europe.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Europe.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Europe.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Európa",
    t1_title: "1. Téma",
    t1_text: "Egy fontos téma a(z) Európa témaköréből.",
    t1_h1: "1. Jellemző", t1_h2: "2. Jellemző", t1_h3: "3. Jellemző",
    t1_inst: "Koppints a megfelelő elemekre!",
    t1_q: "Mi a legfontosabb a 1. témában?",
    t1_qa: "Helyes válasz", t1_qb: "Helyes válaszhoz hasonló rossz", t1_qc: "Egy másik rossz válasz", t1_qd: "Teljesen rossz válasz",

    t2_title: "2. Téma",
    t2_text: "Egy fontos téma a(z) Európa témaköréből.",
    t2_h1: "1. Jellemző", t2_h2: "2. Jellemző", t2_h3: "3. Jellemző",
    t2_inst: "Koppints a megfelelő elemekre!",
    t2_q: "Mi a legfontosabb a 2. témában?",
    t2_qa: "Helyes válasz", t2_qb: "Helyes válaszhoz hasonló rossz", t2_qc: "Egy másik rossz válasz", t2_qd: "Teljesen rossz válasz",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Európa témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Európa témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Európa témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Európa témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Európa témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Európa témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Európa témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Európa témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Európa témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Európa témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Európa témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Európa témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Európa témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Europa",
    t1_title: "Tema 1",
    t1_text: "O temă importantă despre Europa.",
    t1_h1: "Caracteristica 1", t1_h2: "Caracteristica 2", t1_h3: "Caracteristica 3",
    t1_inst: "Atinge elementele potrivite!",
    t1_q: "Ce este important la Tema 1?",
    t1_qa: "Răspuns corect", t1_qb: "Răspuns greșit 1", t1_qc: "Răspuns greșit 2", t1_qd: "Răspuns greșit 3",

    t2_title: "Tema 2",
    t2_text: "O temă importantă despre Europa.",
    t2_h1: "Caracteristica 1", t2_h2: "Caracteristica 2", t2_h3: "Caracteristica 3",
    t2_inst: "Atinge elementele potrivite!",
    t2_q: "Ce este important la Tema 2?",
    t2_qa: "Răspuns corect", t2_qb: "Răspuns greșit 1", t2_qc: "Răspuns greșit 2", t2_qd: "Răspuns greșit 3",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Europa.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Europa.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Europa.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Europa.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Europa.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Europa.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Europa.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Europa.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Europa.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Europa.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Europa.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Europa.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Europa.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I7_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i7"
    }
},
];

// ─── I8: DEUTSCHLAND ────────────────────────────────────

export const GEO_K7_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Deutschland",
    t1_title: "Thema 1",
    t1_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t1_h1: "Merkmal 1", t1_h2: "Merkmal 2", t1_h3: "Merkmal 3",
    t1_inst: "Tippe die passenden Elemente an!",
    t1_q: "Was ist wichtig bei Thema 1?",
    t1_qa: "Richtige Antwort", t1_qb: "Falsche Antwort 1", t1_qc: "Falsche Antwort 2", t1_qd: "Falsche Antwort 3",

    t2_title: "Thema 2",
    t2_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t2_h1: "Merkmal 1", t2_h2: "Merkmal 2", t2_h3: "Merkmal 3",
    t2_inst: "Tippe die passenden Elemente an!",
    t2_q: "Was ist wichtig bei Thema 2?",
    t2_qa: "Richtige Antwort", t2_qb: "Falsche Antwort 1", t2_qc: "Falsche Antwort 2", t2_qd: "Falsche Antwort 3",

    t3_title: "Thema 3",
    t3_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t3_h1: "Merkmal 1", t3_h2: "Merkmal 2", t3_h3: "Merkmal 3",
    t3_inst: "Tippe die passenden Elemente an!",
    t3_q: "Was ist wichtig bei Thema 3?",
    t3_qa: "Richtige Antwort", t3_qb: "Falsche Antwort 1", t3_qc: "Falsche Antwort 2", t3_qd: "Falsche Antwort 3",

    t4_title: "Thema 4",
    t4_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t4_h1: "Merkmal 1", t4_h2: "Merkmal 2", t4_h3: "Merkmal 3",
    t4_inst: "Tippe die passenden Elemente an!",
    t4_q: "Was ist wichtig bei Thema 4?",
    t4_qa: "Richtige Antwort", t4_qb: "Falsche Antwort 1", t4_qc: "Falsche Antwort 2", t4_qd: "Falsche Antwort 3",

    t5_title: "Thema 5",
    t5_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t5_h1: "Merkmal 1", t5_h2: "Merkmal 2", t5_h3: "Merkmal 3",
    t5_inst: "Tippe die passenden Elemente an!",
    t5_q: "Was ist wichtig bei Thema 5?",
    t5_qa: "Richtige Antwort", t5_qb: "Falsche Antwort 1", t5_qc: "Falsche Antwort 2", t5_qd: "Falsche Antwort 3",

    t6_title: "Thema 6",
    t6_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t6_h1: "Merkmal 1", t6_h2: "Merkmal 2", t6_h3: "Merkmal 3",
    t6_inst: "Tippe die passenden Elemente an!",
    t6_q: "Was ist wichtig bei Thema 6?",
    t6_qa: "Richtige Antwort", t6_qb: "Falsche Antwort 1", t6_qc: "Falsche Antwort 2", t6_qd: "Falsche Antwort 3",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Deutschland.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "Germany",
    t1_title: "Topic 1",
    t1_text: "An important topic about Germany.",
    t1_h1: "Feature 1", t1_h2: "Feature 2", t1_h3: "Feature 3",
    t1_inst: "Tap the matching elements!",
    t1_q: "What is important about Topic 1?",
    t1_qa: "Correct Answer", t1_qb: "Wrong Answer 1", t1_qc: "Wrong Answer 2", t1_qd: "Wrong Answer 3",

    t2_title: "Topic 2",
    t2_text: "An important topic about Germany.",
    t2_h1: "Feature 1", t2_h2: "Feature 2", t2_h3: "Feature 3",
    t2_inst: "Tap the matching elements!",
    t2_q: "What is important about Topic 2?",
    t2_qa: "Correct Answer", t2_qb: "Wrong Answer 1", t2_qc: "Wrong Answer 2", t2_qd: "Wrong Answer 3",

    t3_title: "Topic 3",
    t3_text: "An important topic about Germany.",
    t3_h1: "Feature 1", t3_h2: "Feature 2", t3_h3: "Feature 3",
    t3_inst: "Tap the matching elements!",
    t3_q: "What is important about Topic 3?",
    t3_qa: "Correct Answer", t3_qb: "Wrong Answer 1", t3_qc: "Wrong Answer 2", t3_qd: "Wrong Answer 3",

    t4_title: "Topic 4",
    t4_text: "An important topic about Germany.",
    t4_h1: "Feature 1", t4_h2: "Feature 2", t4_h3: "Feature 3",
    t4_inst: "Tap the matching elements!",
    t4_q: "What is important about Topic 4?",
    t4_qa: "Correct Answer", t4_qb: "Wrong Answer 1", t4_qc: "Wrong Answer 2", t4_qd: "Wrong Answer 3",

    t5_title: "Topic 5",
    t5_text: "An important topic about Germany.",
    t5_h1: "Feature 1", t5_h2: "Feature 2", t5_h3: "Feature 3",
    t5_inst: "Tap the matching elements!",
    t5_q: "What is important about Topic 5?",
    t5_qa: "Correct Answer", t5_qb: "Wrong Answer 1", t5_qc: "Wrong Answer 2", t5_qd: "Wrong Answer 3",

    t6_title: "Topic 6",
    t6_text: "An important topic about Germany.",
    t6_h1: "Feature 1", t6_h2: "Feature 2", t6_h3: "Feature 3",
    t6_inst: "Tap the matching elements!",
    t6_q: "What is important about Topic 6?",
    t6_qa: "Correct Answer", t6_qb: "Wrong Answer 1", t6_qc: "Wrong Answer 2", t6_qd: "Wrong Answer 3",

    t7_title: "Topic 7",
    t7_text: "An important topic about Germany.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about Germany.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about Germany.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about Germany.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about Germany.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about Germany.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about Germany.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about Germany.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about Germany.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Németország",
    t1_title: "1. Téma",
    t1_text: "Egy fontos téma a(z) Németország témaköréből.",
    t1_h1: "1. Jellemző", t1_h2: "2. Jellemző", t1_h3: "3. Jellemző",
    t1_inst: "Koppints a megfelelő elemekre!",
    t1_q: "Mi a legfontosabb a 1. témában?",
    t1_qa: "Helyes válasz", t1_qb: "Helyes válaszhoz hasonló rossz", t1_qc: "Egy másik rossz válasz", t1_qd: "Teljesen rossz válasz",

    t2_title: "2. Téma",
    t2_text: "Egy fontos téma a(z) Németország témaköréből.",
    t2_h1: "1. Jellemző", t2_h2: "2. Jellemző", t2_h3: "3. Jellemző",
    t2_inst: "Koppints a megfelelő elemekre!",
    t2_q: "Mi a legfontosabb a 2. témában?",
    t2_qa: "Helyes válasz", t2_qb: "Helyes válaszhoz hasonló rossz", t2_qc: "Egy másik rossz válasz", t2_qd: "Teljesen rossz válasz",

    t3_title: "3. Téma",
    t3_text: "Egy fontos téma a(z) Németország témaköréből.",
    t3_h1: "1. Jellemző", t3_h2: "2. Jellemző", t3_h3: "3. Jellemző",
    t3_inst: "Koppints a megfelelő elemekre!",
    t3_q: "Mi a legfontosabb a 3. témában?",
    t3_qa: "Helyes válasz", t3_qb: "Helyes válaszhoz hasonló rossz", t3_qc: "Egy másik rossz válasz", t3_qd: "Teljesen rossz válasz",

    t4_title: "4. Téma",
    t4_text: "Egy fontos téma a(z) Németország témaköréből.",
    t4_h1: "1. Jellemző", t4_h2: "2. Jellemző", t4_h3: "3. Jellemző",
    t4_inst: "Koppints a megfelelő elemekre!",
    t4_q: "Mi a legfontosabb a 4. témában?",
    t4_qa: "Helyes válasz", t4_qb: "Helyes válaszhoz hasonló rossz", t4_qc: "Egy másik rossz válasz", t4_qd: "Teljesen rossz válasz",

    t5_title: "5. Téma",
    t5_text: "Egy fontos téma a(z) Németország témaköréből.",
    t5_h1: "1. Jellemző", t5_h2: "2. Jellemző", t5_h3: "3. Jellemző",
    t5_inst: "Koppints a megfelelő elemekre!",
    t5_q: "Mi a legfontosabb a 5. témában?",
    t5_qa: "Helyes válasz", t5_qb: "Helyes válaszhoz hasonló rossz", t5_qc: "Egy másik rossz válasz", t5_qd: "Teljesen rossz válasz",

    t6_title: "6. Téma",
    t6_text: "Egy fontos téma a(z) Németország témaköréből.",
    t6_h1: "1. Jellemző", t6_h2: "2. Jellemző", t6_h3: "3. Jellemző",
    t6_inst: "Koppints a megfelelő elemekre!",
    t6_q: "Mi a legfontosabb a 6. témában?",
    t6_qa: "Helyes válasz", t6_qb: "Helyes válaszhoz hasonló rossz", t6_qc: "Egy másik rossz válasz", t6_qd: "Teljesen rossz válasz",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Németország témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Németország témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Németország témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Németország témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Németország témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Németország témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Németország témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Németország témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Németország témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Germania",
    t1_title: "Tema 1",
    t1_text: "O temă importantă despre Germania.",
    t1_h1: "Caracteristica 1", t1_h2: "Caracteristica 2", t1_h3: "Caracteristica 3",
    t1_inst: "Atinge elementele potrivite!",
    t1_q: "Ce este important la Tema 1?",
    t1_qa: "Răspuns corect", t1_qb: "Răspuns greșit 1", t1_qc: "Răspuns greșit 2", t1_qd: "Răspuns greșit 3",

    t2_title: "Tema 2",
    t2_text: "O temă importantă despre Germania.",
    t2_h1: "Caracteristica 1", t2_h2: "Caracteristica 2", t2_h3: "Caracteristica 3",
    t2_inst: "Atinge elementele potrivite!",
    t2_q: "Ce este important la Tema 2?",
    t2_qa: "Răspuns corect", t2_qb: "Răspuns greșit 1", t2_qc: "Răspuns greșit 2", t2_qd: "Răspuns greșit 3",

    t3_title: "Tema 3",
    t3_text: "O temă importantă despre Germania.",
    t3_h1: "Caracteristica 1", t3_h2: "Caracteristica 2", t3_h3: "Caracteristica 3",
    t3_inst: "Atinge elementele potrivite!",
    t3_q: "Ce este important la Tema 3?",
    t3_qa: "Răspuns corect", t3_qb: "Răspuns greșit 1", t3_qc: "Răspuns greșit 2", t3_qd: "Răspuns greșit 3",

    t4_title: "Tema 4",
    t4_text: "O temă importantă despre Germania.",
    t4_h1: "Caracteristica 1", t4_h2: "Caracteristica 2", t4_h3: "Caracteristica 3",
    t4_inst: "Atinge elementele potrivite!",
    t4_q: "Ce este important la Tema 4?",
    t4_qa: "Răspuns corect", t4_qb: "Răspuns greșit 1", t4_qc: "Răspuns greșit 2", t4_qd: "Răspuns greșit 3",

    t5_title: "Tema 5",
    t5_text: "O temă importantă despre Germania.",
    t5_h1: "Caracteristica 1", t5_h2: "Caracteristica 2", t5_h3: "Caracteristica 3",
    t5_inst: "Atinge elementele potrivite!",
    t5_q: "Ce este important la Tema 5?",
    t5_qa: "Răspuns corect", t5_qb: "Răspuns greșit 1", t5_qc: "Răspuns greșit 2", t5_qd: "Răspuns greșit 3",

    t6_title: "Tema 6",
    t6_text: "O temă importantă despre Germania.",
    t6_h1: "Caracteristica 1", t6_h2: "Caracteristica 2", t6_h3: "Caracteristica 3",
    t6_inst: "Atinge elementele potrivite!",
    t6_q: "Ce este important la Tema 6?",
    t6_qa: "Răspuns corect", t6_qb: "Răspuns greșit 1", t6_qc: "Răspuns greșit 2", t6_qd: "Răspuns greșit 3",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Germania.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Germania.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Germania.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Germania.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Germania.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Germania.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Germania.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Germania.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Germania.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I8_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i8"
    }
},
];

// ─── I9: WELTREGIONEN ────────────────────────────────────

export const GEO_K7_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Weltregionen",
    t1_title: "Kontinent der Superlative",
    t1_text: "Asien ist so groß, dass es fast alle Klimazonen der Erde vereint. Hier stehen die höchsten Giganten der Welt neben den tiefsten Senken.",
    t1_h1: "Dach der Welt = Himalaya",
    t1_h2: "Größtes Binnenmeer = Kaspisches Meer",
    t1_h3: "Tiefster See = Baikalsee",
    t1_inst: "Welcher Ort hält welchen Rekord?",
    t1_l1: "Mount Everest",
    t1_r1: "Höchster Gipfel",
    t1_l2: "Baikalsee",
    t1_r2: "Tiefster See",
    t1_l3: "Gobi",
    t1_r3: "Kalte Wüste",
    t1_q: "Wo befindet sich der Mount Everest?",
    t1_qa: "Im Himalaya-Gebirge",
    t1_qb: "In den Alpen",
    t1_qc: "In den Anden",
    t1_qd: "Am Äquator",

    t2_title: "Chips und Reisfelder",
    t2_text: "Asiens Wirtschaft hat zwei Gesichter: In den Megastädten entstehen Mikrochips und Roboter, während auf dem Land Millionen Menschen vom Reisanbau leben.",
    t2_h1: "High-Tech Zentren",
    t2_h2: "Traditioneller Reisanbau",
    t2_h3: "Weltweiter Export",
    t2_inst: "Was passt in welche Welt?",
    t2_bucket_tech: "Moderne Industrie",
    t2_bucket_agri: "Traditionelle Landwirtschaft",
    t2_item_robot: "Industrieroboter",
    t2_item_chip: "Smartphone-Prozessor",
    t2_item_rice: "Handgepflückter Reis",
    t2_item_tea: "Teeplantage",
    t2_q: "In welchem Land hat High-Tech eine riesige Bedeutung?",
    t2_qa: "Japan",
    t2_qb: "Mongolei",
    t2_qc: "Nepal",
    t2_qd: "Laos",

    t3_title: "Volles Haus Erde",
    t3_text: "Die Menschheit wächst, aber nicht überall gleich schnell. Während in manchen Ländern viele Kinder geboren werden, nimmt die Bevölkerung in anderen eher ab oder altert.",
    t3_h1: "Verteilung ist ungleich",
    t3_h2: "Megastädte wachsen",
    t3_h3: "Altersstruktur ändert sich",
    t3_inst: "Bringe die Kontinente in die Reihenfolge ihrer Bevölkerungszahl (absteigend)! ",
    t3_w1: "Asien",
    t3_w2: "Afrika",
    t3_w3: "Europa",
    t3_w4: "Ozeanien",
    t3_q: "Wo leben derzeit die meisten Menschen auf der Erde?",
    t3_qa: "In Asien",
    t3_qb: "In Europa",
    t3_qc: "In Nordamerika",
    t3_qd: "In der Antarktis",

    t4_title: "USA: Land der Weite",
    t4_text: "Die USA erstrecken sich über einen fast ganzen Kontinent. Von den Rocky Mountains bis zu den Everglades gibt es extrem unterschiedliche Naturräume.",
    t4_h1: "Appalachen im Osten",
    t4_h2: "Great Plains in der Mitte",
    t4_h3: "Rockies im Westen",
    t4_inst: "Sortiere die US-Landschaften!",
    t4_bucket_east: "Osten",
    t4_bucket_west: "Westen",
    t4_item_appalach: "Appalachen",
    t4_item_nyc: "Megastadt New York",
    t4_item_rockies: "Rocky Mountains",
    t4_item_grand: "Grand Canyon",
    t4_q: "Wie nennt man das riesige Gebirge im Westen der USA?",
    t4_qa: "Rocky Mountains",
    t4_qb: "Anden",
    t4_qc: "Alpen",
    t4_qd: "Himalaya",

    t5_title: "Wirtschaftsmacht China",
    t5_text: "In wenigen Jahrzehnten hat sich China von einem Agrarland zur 'Werkbank der Welt' entwickelt. Heute ist es führend in moderner Technik und Export.",
    t5_h1: "Sonderwirtschaftszonen",
    t5_h2: "Enormes Städtewachstum",
    t5_h3: "Zentrum des Welthandels",
    t5_inst: "Welche Begriffe gehören zur chinesischen Wirtschaft?",
    t5_bucket_modern: "Modern / Urban",
    t5_bucket_tradi: "Traditionell / Ländlich",
    t5_item_tech: "High-Tech Export",
    t5_item_factory: "Großfabriken",
    t5_item_rice: "Reisanbau",
    t5_item_village: "Wanderarbeit",
    t5_q: "Wie wird China oft aufgrund seiner riesigen Produktion genannt?",
    t5_qa: "Werkbank der Welt",
    t5_qb: "Garten der Erde",
    t5_qc: "Eisbox der Welt",
    t5_qd: "Insel der Ruhe",

    t6_title: "Lunge der Welt in Gefahr",
    t6_text: "Die tropischen Regenwälder sind Schatzkammern der Natur. Doch für Weiden, Plantagen und Holz wird jede Minute eine riesige Fläche gerodet.",
    t6_h1: "Artenvielfalt schrumpft",
    t6_h2: "CO2-Speicher geht verloren",
    t6_h3: "Boden verliert Fruchtbarkeit",
    t6_inst: "Was sind Folgen der Regenwaldabholzung?",
    t6_bucket_bad: "Negative Folgen",
    t6_bucket_cause: "Ursachen für Rodung",
    t6_item_extinc: "Artensterben",
    t6_item_warming: "Klimaerwärmung",
    t6_item_soy: "Sojaanbau für Vieh",
    t6_item_wood: "Tropenholz-Gewinnung",
    t6_q: "Warum ist der Regenwald so wichtig für das Weltklima?",
    t6_qa: "Er speichert viel CO2",
    t6_qb: "Er produziert Gold",
    t6_qc: "Er hält die Erde fest",
    t6_qd: "Er macht den Wind schneller",

    t7_title: "Thema 7",
    t7_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t7_h1: "Merkmal 1", t7_h2: "Merkmal 2", t7_h3: "Merkmal 3",
    t7_inst: "Tippe die passenden Elemente an!",
    t7_q: "Was ist wichtig bei Thema 7?",
    t7_qa: "Richtige Antwort", t7_qb: "Falsche Antwort 1", t7_qc: "Falsche Antwort 2", t7_qd: "Falsche Antwort 3",

    t8_title: "Thema 8",
    t8_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t8_h1: "Merkmal 1", t8_h2: "Merkmal 2", t8_h3: "Merkmal 3",
    t8_inst: "Tippe die passenden Elemente an!",
    t8_q: "Was ist wichtig bei Thema 8?",
    t8_qa: "Richtige Antwort", t8_qb: "Falsche Antwort 1", t8_qc: "Falsche Antwort 2", t8_qd: "Falsche Antwort 3",

    t9_title: "Thema 9",
    t9_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t9_h1: "Merkmal 1", t9_h2: "Merkmal 2", t9_h3: "Merkmal 3",
    t9_inst: "Tippe die passenden Elemente an!",
    t9_q: "Was ist wichtig bei Thema 9?",
    t9_qa: "Richtige Antwort", t9_qb: "Falsche Antwort 1", t9_qc: "Falsche Antwort 2", t9_qd: "Falsche Antwort 3",

    t10_title: "Thema 10",
    t10_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t10_h1: "Merkmal 1", t10_h2: "Merkmal 2", t10_h3: "Merkmal 3",
    t10_inst: "Tippe die passenden Elemente an!",
    t10_q: "Was ist wichtig bei Thema 10?",
    t10_qa: "Richtige Antwort", t10_qb: "Falsche Antwort 1", t10_qc: "Falsche Antwort 2", t10_qd: "Falsche Antwort 3",

    t11_title: "Thema 11",
    t11_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t11_h1: "Merkmal 1", t11_h2: "Merkmal 2", t11_h3: "Merkmal 3",
    t11_inst: "Tippe die passenden Elemente an!",
    t11_q: "Was ist wichtig bei Thema 11?",
    t11_qa: "Richtige Antwort", t11_qb: "Falsche Antwort 1", t11_qc: "Falsche Antwort 2", t11_qd: "Falsche Antwort 3",

    t12_title: "Thema 12",
    t12_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t12_h1: "Merkmal 1", t12_h2: "Merkmal 2", t12_h3: "Merkmal 3",
    t12_inst: "Tippe die passenden Elemente an!",
    t12_q: "Was ist wichtig bei Thema 12?",
    t12_qa: "Richtige Antwort", t12_qb: "Falsche Antwort 1", t12_qc: "Falsche Antwort 2", t12_qd: "Falsche Antwort 3",

    t13_title: "Thema 13",
    t13_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t13_h1: "Merkmal 1", t13_h2: "Merkmal 2", t13_h3: "Merkmal 3",
    t13_inst: "Tippe die passenden Elemente an!",
    t13_q: "Was ist wichtig bei Thema 13?",
    t13_qa: "Richtige Antwort", t13_qb: "Falsche Antwort 1", t13_qc: "Falsche Antwort 2", t13_qd: "Falsche Antwort 3",

    t14_title: "Thema 14",
    t14_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t14_h1: "Merkmal 1", t14_h2: "Merkmal 2", t14_h3: "Merkmal 3",
    t14_inst: "Tippe die passenden Elemente an!",
    t14_q: "Was ist wichtig bei Thema 14?",
    t14_qa: "Richtige Antwort", t14_qb: "Falsche Antwort 1", t14_qc: "Falsche Antwort 2", t14_qd: "Falsche Antwort 3",

    t15_title: "Thema 15",
    t15_text: "Ein wichtiges Thema aus dem Bereich Weltregionen.",
    t15_h1: "Merkmal 1", t15_h2: "Merkmal 2", t15_h3: "Merkmal 3",
    t15_inst: "Tippe die passenden Elemente an!",
    t15_q: "Was ist wichtig bei Thema 15?",
    t15_qa: "Richtige Antwort", t15_qb: "Falsche Antwort 1", t15_qc: "Falsche Antwort 2", t15_qd: "Falsche Antwort 3",

  },
  en: {
    explorer_title: "World Regions",
    t1_title: "Continent of Superlatives",
    t1_text: "Asia is so vast that it combines almost all of Earth's climate zones. Here, the world's highest giants stand next to the deepest depressions.",
    t1_h1: "Roof of the World = Himalayas",
    t1_h2: "Largest inland sea = Caspian Sea",
    t1_h3: "Deepest lake = Lake Baikal",
    t1_inst: "Which place holds which record?",
    t1_l1: "Mount Everest",
    t1_r1: "Highest peak",
    t1_l2: "Lake Baikal",
    t1_r2: "Deepest lake",
    t1_l3: "Gobi",
    t1_r3: "Cold desert",
    t1_q: "Where is Mount Everest located?",
    t1_qa: "In the Himalayas",
    t1_qb: "In the Alps",
    t1_qc: "In the Andes",
    t1_qd: "At the Equator",

    t2_title: "Chips and Rice Fields",
    t2_text: "Asia's economy has two faces: microchips and robots are created in the megacities, while in the countryside millions live from rice farming.",
    t2_h1: "High-Tech Centers",
    t2_h2: "Traditional rice farming",
    t2_h3: "Global export",
    t2_inst: "What belongs to which world?",
    t2_bucket_tech: "Modern Industry",
    t2_bucket_agri: "Traditional Agriculture",
    t2_item_robot: "Industrial robot",
    t2_item_chip: "Smartphone processor",
    t2_item_rice: "Hand-picked rice",
    t2_item_tea: "Tea plantation",
    t2_q: "In which country is high-tech of huge importance?",
    t2_qa: "Japan",
    t2_qb: "Mongolia",
    t2_qc: "Nepal",
    t2_qd: "Laos",

    t3_title: "Crowded Earth",
    t3_text: "Humanity is growing, but not everywhere at the same rate. While many children are born in some countries, the population in others is decreasing or aging.",
    t3_h1: "Distribution is uneven",
    t3_h2: "Megacities are growing",
    t3_h3: "Age structure is changing",
    t3_inst: "Sort the continents by population (descending)!",
    t3_w1: "Asia",
    t3_w2: "Africa",
    t3_w3: "Europe",
    t3_w4: "Oceania",
    t3_q: "Where do most people on Earth currently live?",
    t3_qa: "Asia",
    t3_qb: "Europe",
    t3_qc: "North America",
    t3_qd: "Antarctica",

    t4_title: "USA: Land of Vastness",
    t4_text: "The USA stretches across almost an entire continent. From the Rocky Mountains to the Everglades, there are extremely diverse natural areas.",
    t4_h1: "Appalachians in the East",
    t4_h2: "Great Plains in the middle",
    t4_h3: "Rockies in the West",
    t4_inst: "Sort the US landscapes!",
    t4_bucket_east: "East",
    t4_bucket_west: "West",
    t4_item_appalach: "Appalachians",
    t4_item_nyc: "Megacity New York",
    t4_item_rockies: "Rocky Mountains",
    t4_item_grand: "Grand Canyon",
    t4_q: "What is the name of the huge mountain range in the West of the USA?",
    t4_qa: "Rocky Mountains",
    t4_qb: "Andes",
    t4_qc: "Alps",
    t4_qd: "Himalayas",

    t5_title: "Economic Power China",
    t5_text: "In a few decades, China has transformed from an agrarian country to the 'Workbench of the World'. Today it is a leader in modern technology and exports.",
    t5_h1: "Special Economic Zones",
    t5_h2: "Enormous urban growth",
    t5_h3: "Center of global trade",
    t5_inst: "Which terms belong to the Chinese economy?",
    t5_bucket_modern: "Modern / Urban",
    t5_bucket_tradi: "Traditional / Rural",
    t5_item_tech: "High-tech exports",
    t5_item_factory: "Large factories",
    t5_item_rice: "Rice farming",
    t5_item_village: "Migrant work",
    t5_q: "What is China often called due to its huge production?",
    t5_qa: "Workbench of the world",
    t5_qb: "Garden of the Earth",
    t5_qc: "Ice box of the world",
    t5_qd: "Island of calm",

    t6_title: "World's Lungs in Danger",
    t6_text: "Tropical rainforests are nature's treasure troves. However, a huge area is cleared every minute for pastures, plantations, and timber.",
    t6_h1: "Biodiversity is shrinking",
    t6_h2: "CO2 storage is lost",
    t6_h3: "Soil loses fertility",
    t6_inst: "What are the consequences of rainforest deforestation?",
    t6_bucket_bad: "Negative consequences",
    t6_bucket_cause: "Causes for clearing",
    t6_item_extinc: "Species extinction",
    t6_item_warming: "Global warming",
    t6_item_soy: "Soy for livestock",
    t6_item_wood: "Tropical timber",
    t6_q: "Why is the rainforest so important for the world climate?",
    t6_qa: "It stores lots of CO2",
    t6_qb: "It produces gold",
    t6_qc: "It holds the Earth together",
    t6_qd: "It makes the wind faster",

    t7_title: "Topic 7",
    t7_text: "An important topic about World Regions.",
    t7_h1: "Feature 1", t7_h2: "Feature 2", t7_h3: "Feature 3",
    t7_inst: "Tap the matching elements!",
    t7_q: "What is important about Topic 7?",
    t7_qa: "Correct Answer", t7_qb: "Wrong Answer 1", t7_qc: "Wrong Answer 2", t7_qd: "Wrong Answer 3",

    t8_title: "Topic 8",
    t8_text: "An important topic about World Regions.",
    t8_h1: "Feature 1", t8_h2: "Feature 2", t8_h3: "Feature 3",
    t8_inst: "Tap the matching elements!",
    t8_q: "What is important about Topic 8?",
    t8_qa: "Correct Answer", t8_qb: "Wrong Answer 1", t8_qc: "Wrong Answer 2", t8_qd: "Wrong Answer 3",

    t9_title: "Topic 9",
    t9_text: "An important topic about World Regions.",
    t9_h1: "Feature 1", t9_h2: "Feature 2", t9_h3: "Feature 3",
    t9_inst: "Tap the matching elements!",
    t9_q: "What is important about Topic 9?",
    t9_qa: "Correct Answer", t9_qb: "Wrong Answer 1", t9_qc: "Wrong Answer 2", t9_qd: "Wrong Answer 3",

    t10_title: "Topic 10",
    t10_text: "An important topic about World Regions.",
    t10_h1: "Feature 1", t10_h2: "Feature 2", t10_h3: "Feature 3",
    t10_inst: "Tap the matching elements!",
    t10_q: "What is important about Topic 10?",
    t10_qa: "Correct Answer", t10_qb: "Wrong Answer 1", t10_qc: "Wrong Answer 2", t10_qd: "Wrong Answer 3",

    t11_title: "Topic 11",
    t11_text: "An important topic about World Regions.",
    t11_h1: "Feature 1", t11_h2: "Feature 2", t11_h3: "Feature 3",
    t11_inst: "Tap the matching elements!",
    t11_q: "What is important about Topic 11?",
    t11_qa: "Correct Answer", t11_qb: "Wrong Answer 1", t11_qc: "Wrong Answer 2", t11_qd: "Wrong Answer 3",

    t12_title: "Topic 12",
    t12_text: "An important topic about World Regions.",
    t12_h1: "Feature 1", t12_h2: "Feature 2", t12_h3: "Feature 3",
    t12_inst: "Tap the matching elements!",
    t12_q: "What is important about Topic 12?",
    t12_qa: "Correct Answer", t12_qb: "Wrong Answer 1", t12_qc: "Wrong Answer 2", t12_qd: "Wrong Answer 3",

    t13_title: "Topic 13",
    t13_text: "An important topic about World Regions.",
    t13_h1: "Feature 1", t13_h2: "Feature 2", t13_h3: "Feature 3",
    t13_inst: "Tap the matching elements!",
    t13_q: "What is important about Topic 13?",
    t13_qa: "Correct Answer", t13_qb: "Wrong Answer 1", t13_qc: "Wrong Answer 2", t13_qd: "Wrong Answer 3",

    t14_title: "Topic 14",
    t14_text: "An important topic about World Regions.",
    t14_h1: "Feature 1", t14_h2: "Feature 2", t14_h3: "Feature 3",
    t14_inst: "Tap the matching elements!",
    t14_q: "What is important about Topic 14?",
    t14_qa: "Correct Answer", t14_qb: "Wrong Answer 1", t14_qc: "Wrong Answer 2", t14_qd: "Wrong Answer 3",

    t15_title: "Topic 15",
    t15_text: "An important topic about World Regions.",
    t15_h1: "Feature 1", t15_h2: "Feature 2", t15_h3: "Feature 3",
    t15_inst: "Tap the matching elements!",
    t15_q: "What is important about Topic 15?",
    t15_qa: "Correct Answer", t15_qb: "Wrong Answer 1", t15_qc: "Wrong Answer 2", t15_qd: "Wrong Answer 3",

  },
  hu: {
    explorer_title: "Világrészek",
    t1_title: "Alegek kontinense",
    t1_text: "Ázsia olyan hatalmas, hogy szinte a Föld összes éghajlati övezete megtalálható rajta. Itt a világ legmagasabb csúcsai mellett a legmélyebb medencék sorakoznak.",
    t1_h1: "A világ teteje = Himalája",
    t1_h2: "Legnagyobb beltenger = Kaszpi-tenger",
    t1_h3: "Legmélyebb tó = Bajkál-tó",
    t1_inst: "Melyik hely melyik rekordot tartja?",
    t1_l1: "Mount Everest",
    t1_r1: "Legmagasabb csúcs",
    t1_l2: "Bajkál-tó",
    t1_r2: "Legmélyebb tó",
    t1_l3: "Góbi",
    t1_r3: "Hideg sivatag",
    t1_q: "Hol található a Mount Everest?",
    t1_qa: "A Himalájában",
    t1_qb: "Az Alpokban",
    t1_qc: "Az Andokban",
    t1_qd: "Az Egyenlítőnél",

    t2_title: "Chipek és rizsföldek",
    t2_text: "Ázsia gazdasága kétarcú: a megavárosokban mikrochipek és robotok készülnek, míg vidéken milliók élnek rizstermesztésből.",
    t2_h1: "High-tech központok",
    t2_h2: "Hagyományos rizstermesztés",
    t2_h3: "Világszintű export",
    t2_inst: "Mi hova tartozik?",
    t2_bucket_tech: "Modern ipar",
    t2_bucket_agri: "Hagyományos mezőgazdaság",
    t2_item_robot: "Ipari robot",
    t2_item_chip: "Okostelefon processzor",
    t2_item_rice: "Kézzel aratott rizs",
    t2_item_tea: "Teaültetvény",
    t2_q: "Melyik országban kiemelten fontos a csúcstechnológia?",
    t2_qa: "Japán",
    t2_qb: "Mongólia",
    t2_qc: "Nepál",
    t2_qd: "Laosz",

    t3_title: "Túlnépesedő Föld",
    t3_text: "Az emberiség létszáma nő, de nem mindenhol egyformán. Amíg egyes országokban sok gyerek születik, máshol inkább csökken vagy öregszik a lakosság.",
    t3_h1: "Egyenetlen eloszlás",
    t3_h2: "Megavárosok növekedése",
    t3_h3: "Változó korszerkezet",
    t3_inst: "Tedd sorrendbe a kontinenseket népességszám szerint (csökkenő)! ",
    t3_w1: "Ázsia",
    t3_w2: "Afrika",
    t3_w3: "Európa",
    t3_w4: "Óceánia",
    t3_q: "Hol él jelenleg a legtöbb ember a Földön?",
    t3_qa: "Ázsiában",
    t3_qb: "Európában",
    t3_qc: "Észak-Amerikában",
    t3_qd: "Az Antarktiszon",

    t4_title: "USA: A végtelen terek országa",
    t4_text: "Az USA szinte egy egész kontinenst elfoglal. A Sziklás-hegységtől az Everglades mocsárvidékig rendkívül változatos tájai vannak.",
    t4_h1: "Appalache-hegység keleten",
    t4_h2: "Préri a középső részen",
    t4_h3: "Sziklás-hegység nyugaton",
    t4_inst: "Válogasd szét az USA tájait!",
    t4_bucket_east: "Keleti part / Kelet",
    t4_bucket_west: "Nyugati part / Nyugat",
    t4_item_appalach: "Appalache-hegység",
    t4_item_nyc: "New York megaváros",
    t4_item_rockies: "Sziklás-hegység",
    t4_item_grand: "Grand Canyon",
    t4_q: "Hogy hívják az USA nyugati részén húzódó hatalmas hegyláncot?",
    t4_qa: "Sziklás-hegység",
    t4_qb: "Andok",
    t4_qc: "Alpok",
    t4_qd: "Himalája",

    t5_title: "Kína gazdasági ereje",
    t5_text: "Pár évtized alatt Kína mezőgazdasági országból a 'világ műhelyévé' vált. Ma már vezető szerepe van a technikában és az exportban.",
    t5_h1: "Különleges gazdasági övezetek",
    t5_h2: "Hatalmas városiasodás",
    t5_h3: "A világkereskedelem központja",
    t5_inst: "Mely fogalmak kapcsolódnak a kínai gazdasághoz?",
    t5_bucket_modern: "Modern / Városi",
    t5_bucket_tradi: "Hagyományos / Vidéki",
    t5_item_tech: "High-tech export",
    t5_item_factory: "Óriásgyárak",
    t5_item_rice: "Rizstermesztés",
    t5_item_village: "Vándormunkások",
    t5_q: "Hogyan nevezik gyakran Kínát a hatalmas termelése miatt?",
    t5_qa: "A világ műhelye",
    t5_qb: "A Föld kertje",
    t5_qc: "A világ hűtőládája",
    t5_qd: "A nyugalom szigete",

    t6_title: "Veszélyben a Föld tüdeje",
    t6_text: "A trópusi esőerdők a természet kincsesládái. Mégis, legelők, ültetvények és a faanyag miatt percenként hatalmas területeket vágnak ki.",
    t6_h1: "Csökkenő élővilág",
    t6_h2: "Eltűnő CO2 tárolók",
    t6_h3: "Talaj kimerülése",
    t6_inst: "Melyek az erdőirtás következményei?",
    t6_bucket_bad: "Negatív következmények",
    t6_bucket_cause: "Kiváltó okok",
    t6_item_extinc: "Fajok kihalása",
    t6_item_warming: "Felmelegedés",
    t6_item_soy: "Szójatermesztés (takarmány)",
    t6_item_wood: "Trópusi nemesfa kitermelés",
    t6_q: "Miért olyan fontos az esőerdő a világ éghajlata szempontjából?",
    t6_qa: "Sok CO2-t köt le",
    t6_qb: "Aranyat terem",
    t6_qc: "Helyén tartja a földet",
    t6_qd: "Gyorsítja a szelet",

    t7_title: "7. Téma",
    t7_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t7_h1: "1. Jellemző", t7_h2: "2. Jellemző", t7_h3: "3. Jellemző",
    t7_inst: "Koppints a megfelelő elemekre!",
    t7_q: "Mi a legfontosabb a 7. témában?",
    t7_qa: "Helyes válasz", t7_qb: "Helyes válaszhoz hasonló rossz", t7_qc: "Egy másik rossz válasz", t7_qd: "Teljesen rossz válasz",

    t8_title: "8. Téma",
    t8_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t8_h1: "1. Jellemző", t8_h2: "2. Jellemző", t8_h3: "3. Jellemző",
    t8_inst: "Koppints a megfelelő elemekre!",
    t8_q: "Mi a legfontosabb a 8. témában?",
    t8_qa: "Helyes válasz", t8_qb: "Helyes válaszhoz hasonló rossz", t8_qc: "Egy másik rossz válasz", t8_qd: "Teljesen rossz válasz",

    t9_title: "9. Téma",
    t9_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t9_h1: "1. Jellemző", t9_h2: "2. Jellemző", t9_h3: "3. Jellemző",
    t9_inst: "Koppints a megfelelő elemekre!",
    t9_q: "Mi a legfontosabb a 9. témában?",
    t9_qa: "Helyes válasz", t9_qb: "Helyes válaszhoz hasonló rossz", t9_qc: "Egy másik rossz válasz", t9_qd: "Teljesen rossz válasz",

    t10_title: "10. Téma",
    t10_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t10_h1: "1. Jellemző", t10_h2: "2. Jellemző", t10_h3: "3. Jellemző",
    t10_inst: "Koppints a megfelelő elemekre!",
    t10_q: "Mi a legfontosabb a 10. témában?",
    t10_qa: "Helyes válasz", t10_qb: "Helyes válaszhoz hasonló rossz", t10_qc: "Egy másik rossz válasz", t10_qd: "Teljesen rossz válasz",

    t11_title: "11. Téma",
    t11_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t11_h1: "1. Jellemző", t11_h2: "2. Jellemző", t11_h3: "3. Jellemző",
    t11_inst: "Koppints a megfelelő elemekre!",
    t11_q: "Mi a legfontosabb a 11. témában?",
    t11_qa: "Helyes válasz", t11_qb: "Helyes válaszhoz hasonló rossz", t11_qc: "Egy másik rossz válasz", t11_qd: "Teljesen rossz válasz",

    t12_title: "12. Téma",
    t12_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t12_h1: "1. Jellemző", t12_h2: "2. Jellemző", t12_h3: "3. Jellemző",
    t12_inst: "Koppints a megfelelő elemekre!",
    t12_q: "Mi a legfontosabb a 12. témában?",
    t12_qa: "Helyes válasz", t12_qb: "Helyes válaszhoz hasonló rossz", t12_qc: "Egy másik rossz válasz", t12_qd: "Teljesen rossz válasz",

    t13_title: "13. Téma",
    t13_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t13_h1: "1. Jellemző", t13_h2: "2. Jellemző", t13_h3: "3. Jellemző",
    t13_inst: "Koppints a megfelelő elemekre!",
    t13_q: "Mi a legfontosabb a 13. témában?",
    t13_qa: "Helyes válasz", t13_qb: "Helyes válaszhoz hasonló rossz", t13_qc: "Egy másik rossz válasz", t13_qd: "Teljesen rossz válasz",

    t14_title: "14. Téma",
    t14_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t14_h1: "1. Jellemző", t14_h2: "2. Jellemző", t14_h3: "3. Jellemző",
    t14_inst: "Koppints a megfelelő elemekre!",
    t14_q: "Mi a legfontosabb a 14. témában?",
    t14_qa: "Helyes válasz", t14_qb: "Helyes válaszhoz hasonló rossz", t14_qc: "Egy másik rossz válasz", t14_qd: "Teljesen rossz válasz",

    t15_title: "15. Téma",
    t15_text: "Egy fontos téma a(z) Világrészek témaköréből.",
    t15_h1: "1. Jellemző", t15_h2: "2. Jellemző", t15_h3: "3. Jellemző",
    t15_inst: "Koppints a megfelelő elemekre!",
    t15_q: "Mi a legfontosabb a 15. témában?",
    t15_qa: "Helyes válasz", t15_qb: "Helyes válaszhoz hasonló rossz", t15_qc: "Egy másik rossz válasz", t15_qd: "Teljesen rossz válasz",

  },
  ro: {
    explorer_title: "Regiuni ale lumii",
    t1_title: "Continentul superlativelor",
    t1_text: "Asia este atât de mare încât reunește aproape toate zonele climatice ale Pământului. Aici, cei mai înalți giganți ai lumii stau lângă cele mai adânci depresiuni.",
    t1_h1: "Acoperișul lumii = Himalaya",
    t1_h2: "Cea mai mare mare interioară = Marea Caspică",
    t1_h3: "Cel mai adânc lac = Lacul Baikal",
    t1_inst: "Care loc deține ce record?",
    t1_l1: "Mount Everest",
    t1_r1: "Cel mai înalt vârf",
    t1_l2: "Lacul Baikal",
    t1_r2: "Cel mai adânc lac",
    t1_l3: "Gobi",
    t1_r3: "Deșert rece",
    t1_q: "Unde se află muntele Everest?",
    t1_qa: "În munții Himalaya",
    t1_qb: "În Alpi",
    t1_qc: "În Anzi",
    t1_qd: "La Ecuator",

    t2_title: "Cipuri și orezării",
    t2_text: "Economia Asiei are două fețe: în mega-orașe se nasc microcipuri și roboți, în timp ce la țară milioane de oameni trăiesc din cultivarea orezului.",
    t2_h1: "Centre High-Tech",
    t2_h2: "Cultivarea tradițională a orezului",
    t2_h3: "Export mondial",
    t2_inst: "Ce aparține fiecărei lumi?",
    t2_bucket_tech: "Industrie modernă",
    t2_bucket_agri: "Agricultură tradițională",
    t2_item_robot: "Robot industrial",
    t2_item_chip: "Procesor de smartphone",
    t2_item_rice: "Orez cules manual",
    t2_item_tea: "Plantație de ceai",
    t2_q: "În care țară tehnologia are o importanță uriașă?",
    t2_qa: "Japonia",
    t2_qb: "Mongolia",
    t2_qc: "Nepal",
    t2_qd: "Laos",

    t3_title: "O lume suprapopulată",
    t3_text: "Omenirea crește, dar nu peste tot în același ritm. În timp ce în unele țări se nasc mulți copii, în altele populația scade sau îmbătrânește.",
    t3_h1: "Distribuție inegală",
    t3_h2: "Creșterea mega-orașelor",
    t3_h3: "Structura pe vârste se schimbă",
    t3_inst: "Pune continentele în ordinea populației lor (descrescător)!",
    t3_w1: "Asia",
    t3_w2: "Africa",
    t3_w3: "Europa",
    t3_w4: "Oceania",
    t3_q: "Unde trăiesc în prezent cei mai mulți oameni de pe Pământ?",
    t3_qa: "În Asia",
    t3_qb: "În Europa",
    t3_qc: "În America de Nord",
    t3_qd: "În Antarctica",

    t4_title: "SUA: Țara spațiilor vaste",
    t4_text: "SUA ocupă aproape un întreg continent. De la Munții Stâncoși până la mlaștinile Everglades, există peisaje extrem de variate.",
    t4_h1: "Munții Appalachi în Est",
    t4_h2: "Marile Câmpii în centru",
    t4_h3: "Munții Stâncoși în Vest",
    t4_inst: "Sortează peisajele din SUA!",
    t4_bucket_east: "Est",
    t4_bucket_west: "Vest",
    t4_item_appalach: "Munții Appalachi",
    t4_item_nyc: "Mega-orașul New York",
    t4_item_rockies: "Munții Stâncoși",
    t4_item_grand: "Marele Canion",
    t4_q: "Cum se numește lanțul muntos uriaș din vestul SUA?",
    t4_qa: "Munții Stâncoși",
    t4_qb: "Anzii",
    t4_qc: "Alpii",
    t4_qd: "Himalaya",

    t5_title: "Puterea economică a Chinei",
    t5_text: "În câteva decenii, China s-a transformat dintr-o țară agrară în 'atelierul lumii'. Astăzi este lider în tehnologie modernă și exporturi.",
    t5_h1: "Zone economice speciale",
    t5_h2: "Urbanizare enormă",
    t5_h3: "Centrul comerțului mondial",
    t5_inst: "Ce termeni aparțin economiei chineze?",
    t5_bucket_modern: "Modern / Urban",
    t5_bucket_tradi: "Tradițional / Rural",
    t5_item_tech: "Export high-tech",
    t5_item_factory: "Fabrici uriașe",
    t5_item_rice: "Cultivarea orezului",
    t5_item_village: "Muncitori migranți",
    t5_q: "Cum este numită adesea China datorită producției sale uriașe?",
    t5_qa: "Atelierul lumii",
    t5_qb: "Grădina Pământului",
    t5_qc: "Lada frigorifică a lumii",
    t5_qd: "Insula liniștii",

    t6_title: "Plămânul lumii în pericol",
    t6_text: "Pădurile tropicale sunt comorile naturii. Cu toate acestea, suprafețe uriașe sunt tăiate în fiecare minut pentru pașuni, plantații és lemn.",
    t6_h1: "Biodiversitatea scade",
    t6_h2: "Se pierd depozitele de CO2",
    t6_h3: "Solul își pierde fertilitatea",
    t6_inst: "Care sunt consecințele defrișării pădurilor tropicale?",
    t6_bucket_bad: "Consecințe negative",
    t6_bucket_cause: "Cauze ale defrișării",
    t6_item_extinc: "Dispariția speciilor",
    t6_item_warming: "Încălzirea globală",
    t6_item_soy: "Cultivarea soiei (furaje)",
    t6_item_wood: "Exploatarea lemnului tropical",
    t6_q: "De ce este pădurea tropicală atât de importantă pentru clima mondială?",
    t6_qa: "Stochează mult CO2",
    t6_qb: "Produce aur",
    t6_qc: "Ține pământul fix",
    t6_qd: "Accelerează vântul",

    t7_title: "Tema 7",
    t7_text: "O temă importantă despre Regiuni ale lumii.",
    t7_h1: "Caracteristica 1", t7_h2: "Caracteristica 2", t7_h3: "Caracteristica 3",
    t7_inst: "Atinge elementele potrivite!",
    t7_q: "Ce este important la Tema 7?",
    t7_qa: "Răspuns corect", t7_qb: "Răspuns greșit 1", t7_qc: "Răspuns greșit 2", t7_qd: "Răspuns greșit 3",

    t8_title: "Tema 8",
    t8_text: "O temă importantă despre Regiuni ale lumii.",
    t8_h1: "Caracteristica 1", t8_h2: "Caracteristica 2", t8_h3: "Caracteristica 3",
    t8_inst: "Atinge elementele potrivite!",
    t8_q: "Ce este important la Tema 8?",
    t8_qa: "Răspuns corect", t8_qb: "Răspuns greșit 1", t8_qc: "Răspuns greșit 2", t8_qd: "Răspuns greșit 3",

    t9_title: "Tema 9",
    t9_text: "O temă importantă despre Regiuni ale lumii.",
    t9_h1: "Caracteristica 1", t9_h2: "Caracteristica 2", t9_h3: "Caracteristica 3",
    t9_inst: "Atinge elementele potrivite!",
    t9_q: "Ce este important la Tema 9?",
    t9_qa: "Răspuns corect", t9_qb: "Răspuns greșit 1", t9_qc: "Răspuns greșit 2", t9_qd: "Răspuns greșit 3",

    t10_title: "Tema 10",
    t10_text: "O temă importantă despre Regiuni ale lumii.",
    t10_h1: "Caracteristica 1", t10_h2: "Caracteristica 2", t10_h3: "Caracteristica 3",
    t10_inst: "Atinge elementele potrivite!",
    t10_q: "Ce este important la Tema 10?",
    t10_qa: "Răspuns corect", t10_qb: "Răspuns greșit 1", t10_qc: "Răspuns greșit 2", t10_qd: "Răspuns greșit 3",

    t11_title: "Tema 11",
    t11_text: "O temă importantă despre Regiuni ale lumii.",
    t11_h1: "Caracteristica 1", t11_h2: "Caracteristica 2", t11_h3: "Caracteristica 3",
    t11_inst: "Atinge elementele potrivite!",
    t11_q: "Ce este important la Tema 11?",
    t11_qa: "Răspuns corect", t11_qb: "Răspuns greșit 1", t11_qc: "Răspuns greșit 2", t11_qd: "Răspuns greșit 3",

    t12_title: "Tema 12",
    t12_text: "O temă importantă despre Regiuni ale lumii.",
    t12_h1: "Caracteristica 1", t12_h2: "Caracteristica 2", t12_h3: "Caracteristica 3",
    t12_inst: "Atinge elementele potrivite!",
    t12_q: "Ce este important la Tema 12?",
    t12_qa: "Răspuns corect", t12_qb: "Răspuns greșit 1", t12_qc: "Răspuns greșit 2", t12_qd: "Răspuns greșit 3",

    t13_title: "Tema 13",
    t13_text: "O temă importantă despre Regiuni ale lumii.",
    t13_h1: "Caracteristica 1", t13_h2: "Caracteristica 2", t13_h3: "Caracteristica 3",
    t13_inst: "Atinge elementele potrivite!",
    t13_q: "Ce este important la Tema 13?",
    t13_qa: "Răspuns corect", t13_qb: "Răspuns greșit 1", t13_qc: "Răspuns greșit 2", t13_qd: "Răspuns greșit 3",

    t14_title: "Tema 14",
    t14_text: "O temă importantă despre Regiuni ale lumii.",
    t14_h1: "Caracteristica 1", t14_h2: "Caracteristica 2", t14_h3: "Caracteristica 3",
    t14_inst: "Atinge elementele potrivite!",
    t14_q: "Ce este important la Tema 14?",
    t14_qa: "Răspuns corect", t14_qb: "Răspuns greșit 1", t14_qc: "Răspuns greșit 2", t14_qd: "Răspuns greșit 3",

    t15_title: "Tema 15",
    t15_text: "O temă importantă despre Regiuni ale lumii.",
    t15_h1: "Caracteristica 1", t15_h2: "Caracteristica 2", t15_h3: "Caracteristica 3",
    t15_inst: "Atinge elementele potrivite!",
    t15_q: "Ce este important la Tema 15?",
    t15_qa: "Răspuns corect", t15_qb: "Răspuns greșit 1", t15_qc: "Răspuns greșit 2", t15_qd: "Răspuns greșit 3",

  },
};

export const GEO_K7_I9_POOL: PoolTopicDef[] = [
{
    "infoTitle": "t1_title",
    "infoText": "t1_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🏔️",
        "title": "Asia",
        "bg": "#F1F5F9"
    },
    "bulletKeys": [
        "t1_h1",
        "t1_h2",
        "t1_h3"
    ],
    "interactive": {
        "type": "match-pairs",
        "instruction": "t1_inst",
        "hint1": "t1_h1",
        "hint2": "t1_h3",
        "pairs": [
            {
                "left": "t1_l1",
                "right": "t1_r1"
            },
            {
                "left": "t1_l2",
                "right": "t1_r2"
            },
            {
                "left": "t1_l3",
                "right": "t1_r3"
            }
        ]
    },
    "quiz": {
        "generate": "asia_overview_k7"
    }
},
{
    "infoTitle": "t2_title",
    "infoText": "t2_text",
    "svg": {
        "type": "two-groups",
        "left": {
            "items": [
                "🤖",
                "📱"
            ],
            "bg": "#EFF6FF",
            "border": "#3B82F6"
        },
        "right": {
            "items": [
                "🍚",
                "🍵"
            ],
            "bg": "#F0FDF4",
            "border": "#22C55E"
        },
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t2_h1",
        "t2_h2",
        "t2_h3"
    ],
    "interactive": {
        "type": "drag-to-bucket",
        "instruction": "t2_inst",
        "hint1": "t2_h1",
        "hint2": "t2_h2",
        "buckets": [
            {
                "id": "tech",
                "label": "t2_bucket_tech"
            },
            {
                "id": "agri",
                "label": "t2_bucket_agri"
            }
        ],
        "items": [
            {
                "text": "t2_item_robot",
                "bucketId": "tech"
            },
            {
                "text": "t2_item_chip",
                "bucketId": "tech"
            },
            {
                "text": "t2_item_rice",
                "bucketId": "agri"
            },
            {
                "text": "t2_item_tea",
                "bucketId": "agri"
            }
        ]
    },
    "quiz": {
        "generate": "asia_economy_k7"
    }
},
{
    "infoTitle": "t3_title",
    "infoText": "t3_text",
    "svg": {
        "type": "simple-icon",
        "icon": "👥",
        "title": "Population",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t3_h1",
        "t3_h2",
        "t3_h3"
    ],
    "interactive": {
        "type": "word-order",
        "instruction": "t3_inst",
        "hint1": "t3_h1",
        "hint2": "t3_h2",
        "words": [
            "t3_w1",
            "t3_w2",
            "t3_w3",
            "t3_w4"
        ],
        "correctOrder": [
            0,
            1,
            2,
            3
        ]
    },
    "quiz": {
        "generate": "population_density_global"
    }
},
{
    "infoTitle": "t4_title",
    "infoText": "t4_text",
    "svg": {
        "type": "two-groups",
        "left": {
            "items": [
                "🏙️",
                "⛰️"
            ],
            "bg": "#ECFDF5",
            "border": "#10B981"
        },
        "right": {
            "items": [
                "🏜️",
                "⛰️"
            ],
            "bg": "#F0F9FF",
            "border": "#3B82F6"
        },
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t4_h1",
        "t4_h2",
        "t4_h3"
    ],
    "interactive": {
        "type": "drag-to-bucket",
        "instruction": "t4_inst",
        "hint1": "t4_h1",
        "hint2": "t4_h3",
        "buckets": [
            {
                "id": "east",
                "label": "t4_bucket_east"
            },
            {
                "id": "west",
                "label": "t4_bucket_west"
            }
        ],
        "items": [
            {
                "text": "t4_item_appalach",
                "bucketId": "east"
            },
            {
                "text": "t4_item_nyc",
                "bucketId": "east"
            },
            {
                "text": "t4_item_rockies",
                "bucketId": "west"
            },
            {
                "text": "t4_item_grand",
                "bucketId": "west"
            }
        ]
    },
    "quiz": {
        "generate": "usa_landscapes"
    }
},
{
    "infoTitle": "t5_title",
    "infoText": "t5_text",
    "svg": {
        "type": "two-groups",
        "left": {
            "items": [
                "🏙️",
                "🏭"
            ],
            "bg": "#DCFCE7",
            "border": "#22C55E"
        },
        "right": {
            "items": [
                "🌾",
                "🏘️"
            ],
            "bg": "#FEF3C7",
            "border": "#F59E0B"
        },
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t5_h1",
        "t5_h2",
        "t5_h3"
    ],
    "interactive": {
        "type": "drag-to-bucket",
        "instruction": "t5_inst",
        "hint1": "t5_h1",
        "hint2": "t5_h2",
        "buckets": [
            {
                "id": "modern",
                "label": "t5_bucket_modern"
            },
            {
                "id": "tradi",
                "label": "t5_bucket_tradi"
            }
        ],
        "items": [
            {
                "text": "t5_item_tech",
                "bucketId": "modern"
            },
            {
                "text": "t5_item_factory",
                "bucketId": "modern"
            },
            {
                "text": "t5_item_rice",
                "bucketId": "tradi"
            },
            {
                "text": "t5_item_village",
                "bucketId": "tradi"
            }
        ]
    },
    "quiz": {
        "generate": "china_rise_economy"
    }
},
{
    "infoTitle": "t6_title",
    "infoText": "t6_text",
    "svg": {
        "type": "two-groups",
        "left": {
            "items": [
                "📉",
                "🌡️"
            ],
            "bg": "#FEF2F2",
            "border": "#EF4444"
        },
        "right": {
            "items": [
                "🚜",
                "🪵"
            ],
            "bg": "#F1F5F9",
            "border": "#64748B"
        },
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t6_h1",
        "t6_h2",
        "t6_h3"
    ],
    "interactive": {
        "type": "drag-to-bucket",
        "instruction": "t6_inst",
        "hint1": "t6_h1",
        "hint2": "t6_h3",
        "buckets": [
            {
                "id": "bad",
                "label": "t6_bucket_bad"
            },
            {
                "id": "cause",
                "label": "t6_bucket_cause"
            }
        ],
        "items": [
            {
                "text": "t6_item_extinc",
                "bucketId": "bad"
            },
            {
                "text": "t6_item_warming",
                "bucketId": "bad"
            },
            {
                "text": "t6_item_soy",
                "bucketId": "cause"
            },
            {
                "text": "t6_item_wood",
                "bucketId": "cause"
            }
        ]
    },
    "quiz": {
        "generate": "tropical_rainforest_destruction"
    }
},
{
    "infoTitle": "t7_title",
    "infoText": "t7_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t7_h1",
        "t7_h2",
        "t7_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t7_inst",
        "hint1": "t7_h1",
        "hint2": "t7_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t8_title",
    "infoText": "t8_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t8_h1",
        "t8_h2",
        "t8_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t8_inst",
        "hint1": "t8_h1",
        "hint2": "t8_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t9_title",
    "infoText": "t9_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t9_h1",
        "t9_h2",
        "t9_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t9_inst",
        "hint1": "t9_h1",
        "hint2": "t9_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t10_title",
    "infoText": "t10_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t10_h1",
        "t10_h2",
        "t10_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t10_inst",
        "hint1": "t10_h1",
        "hint2": "t10_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t11_title",
    "infoText": "t11_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t11_h1",
        "t11_h2",
        "t11_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t11_inst",
        "hint1": "t11_h1",
        "hint2": "t11_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t12_title",
    "infoText": "t12_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t12_h1",
        "t12_h2",
        "t12_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t12_inst",
        "hint1": "t12_h1",
        "hint2": "t12_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t13_title",
    "infoText": "t13_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t13_h1",
        "t13_h2",
        "t13_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t13_inst",
        "hint1": "t13_h1",
        "hint2": "t13_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t14_title",
    "infoText": "t14_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t14_h1",
        "t14_h2",
        "t14_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t14_inst",
        "hint1": "t14_h1",
        "hint2": "t14_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
{
    "infoTitle": "t15_title",
    "infoText": "t15_text",
    "svg": {
        "type": "simple-icon",
        "icon": "🌍",
        "bg": "#F8FAFC"
    },
    "bulletKeys": [
        "t15_h1",
        "t15_h2",
        "t15_h3"
    ],
    "interactive": {
        "type": "tap-count",
        "tapCount": {
            "emoji": "🌍",
            "count": 3
        },
        "instruction": "t15_inst",
        "hint1": "t15_h1",
        "hint2": "t15_h2"
    },
    "quiz": {
        "generate": "geo7_i9"
    }
},
];

// ─── GLOBAL EXPORTS FOR BACKWARD COMPATIBILITY ────────────────────

export const GEO_K7_POOL: PoolTopicDef[] = [
  ...GEO_K7_I1_POOL,
  ...GEO_K7_I2_POOL,
  ...GEO_K7_I3_POOL,
  ...GEO_K7_I4_POOL,
  ...GEO_K7_I5_POOL,
  ...GEO_K7_I6_POOL,
  ...GEO_K7_I7_POOL,
  ...GEO_K7_I8_POOL,
  ...GEO_K7_I9_POOL
];

export const GEO_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    ...GEO_K7_I1_LABELS.de,
    ...GEO_K7_I2_LABELS.de,
    ...GEO_K7_I3_LABELS.de,
    ...GEO_K7_I4_LABELS.de,
    ...GEO_K7_I5_LABELS.de,
    ...GEO_K7_I6_LABELS.de,
    ...GEO_K7_I7_LABELS.de,
    ...GEO_K7_I8_LABELS.de,
    ...GEO_K7_I9_LABELS.de,
  },
  en: {
    ...GEO_K7_I1_LABELS.en,
    ...GEO_K7_I2_LABELS.en,
    ...GEO_K7_I3_LABELS.en,
    ...GEO_K7_I4_LABELS.en,
    ...GEO_K7_I5_LABELS.en,
    ...GEO_K7_I6_LABELS.en,
    ...GEO_K7_I7_LABELS.en,
    ...GEO_K7_I8_LABELS.en,
    ...GEO_K7_I9_LABELS.en,
  },
  hu: {
    ...GEO_K7_I1_LABELS.hu,
    ...GEO_K7_I2_LABELS.hu,
    ...GEO_K7_I3_LABELS.hu,
    ...GEO_K7_I4_LABELS.hu,
    ...GEO_K7_I5_LABELS.hu,
    ...GEO_K7_I6_LABELS.hu,
    ...GEO_K7_I7_LABELS.hu,
    ...GEO_K7_I8_LABELS.hu,
    ...GEO_K7_I9_LABELS.hu,
  },
  ro: {
    ...GEO_K7_I1_LABELS.ro,
    ...GEO_K7_I2_LABELS.ro,
    ...GEO_K7_I3_LABELS.ro,
    ...GEO_K7_I4_LABELS.ro,
    ...GEO_K7_I5_LABELS.ro,
    ...GEO_K7_I6_LABELS.ro,
    ...GEO_K7_I7_LABELS.ro,
    ...GEO_K7_I8_LABELS.ro,
    ...GEO_K7_I9_LABELS.ro,
  },
};

