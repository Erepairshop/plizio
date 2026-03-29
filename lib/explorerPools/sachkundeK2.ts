// lib/explorerPools/sachkundeK2.ts
import type { PoolTopicDef } from "./types";

export const HAUSTIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Haustiere & Pflege",
    t1_title: "Der Hund", t1_text: "Hunde sind treue Begleiter und brauchen viel Auslauf.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Was braucht ein Hund täglich?", t1_qa: "Gassi gehen", t1_qb: "Schokolade", t1_qc: "Nur Schlaf", t1_qd: "Ein Auto",
    t1_w1: "Hunde", t1_w2: "müssen", t1_w3: "jeden", t1_w4: "Tag", t1_w5: "draußen", t1_w6: "laufen.",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Der Hund ist ein ___ des Menschen.", t1_qa2: "Freund", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Der Hund", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Die Katze", t2_text: "Katzen sind sehr reinlich und jagen gerne Mäuse.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Was machen Katzen zur Krallenpflege?", t2_qa: "Kratzen", t2_qb: "Singen", t2_qc: "Schwimmen", t2_qd: "Fliegen",
    t2_w1: "Katzen", t2_w2: "schlafen", t2_w3: "sehr", t2_w4: "viel", t2_w5: "am", t2_w6: "Tag.",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Katzen putzen sich mit ihrer ___.", t2_qa2: "Zunge", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Die Katze", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Meerschweinchen", t3_text: "Meerschweinchen sind Gruppentiere und fressen gerne Heu.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Was fressen Meerschweinchen?", t3_qa: "Heu und Gemüse", t3_qb: "Pizza", t3_qc: "Fleisch", t3_qd: "Eier",
    t3_w1: "Meerschweinchen", t3_w2: "pfeifen", t3_w3: "wenn", t3_w4: "sie", t3_w5: "Hunger", t3_w6: "haben.",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Meerschweinchen brauchen ___ Freunde.", t3_qa2: "andere", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Meerschweinchen", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Hamster", t4_text: "Hamster sind nachts aktiv und schlafen am Tag.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Wann ist ein Hamster wach?", t4_qa: "In der Nacht", t4_qb: "Mittags", t4_qc: "Morgens", t4_qd: "Nie",
    t4_w1: "Der", t4_w2: "Hamster", t4_w3: "läuft", t4_w4: "gerne", t4_w5: "in", t4_w6: "seinem",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Hamster sammeln Futter in ihren ___.", t4_qa2: "Backen", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Hamster", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Goldfische", t5_text: "Fische atmen durch Kiemen unter Wasser.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Wie atmen Fische?", t5_qa: "Durch Kiemen", t5_qb: "Durch die Nase", t5_qc: "Gar nicht", t5_qd: "Mit Lungen",
    t5_w1: "Fische", t5_w2: "brauchen", t5_w3: "sauberes", t5_w4: "Wasser", t5_w5: "zum", t5_w6: "Leben.",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Fische leben im ___.", t5_qa2: "Wasser", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Goldfische", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Wellensittiche", t6_text: "Vögel brauchen Platz zum Fliegen und Artgenossen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Was können Wellensittiche gut?", t6_qa: "Fliegen", t6_qb: "Tauchen", t6_qc: "Graben", t6_qd: "Kochen",
    t6_w1: "Wellensittiche", t6_w2: "sind", t6_w3: "sehr", t6_w4: "gesellige", t6_w5: "kleine", t6_w6: "Vögel.",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Vögel haben ___ am Körper.", t6_qa2: "Federn", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Wellensittiche", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Tierpflege", t7_text: "Tiere brauchen frisches Wasser und sauberes Futter.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Was ist wichtig für ein Haustier?", t7_qa: "Pflege", t7_qb: "Lärm", t7_qc: "Dreck", t7_qd: "Süßigkeiten",
    t7_w1: "Ein", t7_w2: "Tier", t7_w3: "macht", t7_w4: "Arbeit", t7_w5: "und", t7_w6: "viel",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Wir müssen den Käfig regelmäßig ___.", t7_qa2: "reinigen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Tierpflege", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Verantwortung", t8_text: "Ein Tier zu haben bedeutet, sich immer darum zu kümmern.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Darf man ein Tier einfach aussetzen?", t8_qa: "Nein, niemals", t8_qb: "Ja, im Wald", t8_qc: "Nur im Urlaub", t8_qd: "Vielleicht",
    t8_w1: "Ich", t8_w2: "übernehme", t8_w3: "Verantwortung", t8_w4: "für", t8_w5: "mein", t8_w6: "liebes",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Tiere sind Lebewesen, keine ___.", t8_qa2: "Spielzeuge", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Verantwortung", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const HAUSTIERE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Hund", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die Katze", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Meerschweinchen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hamster", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Goldfische", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wellensittiche", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Tierpflege", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Verantwortung", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const KALENDER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit & Kalender",
    t1_title: "Wochentage", t1_text: "Eine Woche hat sieben Tage: Montag bis Sonntag.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Welcher Tag kommt nach Freitag?", t1_qa: "Samstag", t1_qb: "Dienstag", t1_qc: "Montag", t1_qd: "Mittwoch",
    t1_w1: "Montag", t1_w2: "ist", t1_w3: "der", t1_w4: "erste", t1_w5: "Tag", t1_w6: "der",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Die Woche hat ___ Tage.", t1_qa2: "sieben", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Wochentage", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Die Monate", t2_text: "Ein Jahr hat zwölf Monate, von Januar bis Dezember.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Wie viele Monate hat ein Jahr?", t2_qa: "12", t2_qb: "7", t2_qc: "10", t2_qd: "24",
    t2_w1: "Ein", t2_w2: "Jahr", t2_w3: "vergeht", t2_w4: "manchmal", t2_w5: "wie", t2_w6: "im",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Der erste Monat heißt ___.", t2_qa2: "Januar", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Die Monate", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Jahreszeiten", t3_text: "Frühling, Sommer, Herbst und Winter heißen die Jahreszeiten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "In welcher Jahreszeit schneit es?", t3_qa: "Winter", t3_qb: "Sommer", t3_qc: "Frühling", t3_qd: "Herbst",
    t3_w1: "Jede", t3_w2: "Jahreszeit", t3_w3: "hat", t3_w4: "ihr", t3_w5: "ganz", t3_w6: "eigenes",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Im ___ blühen die Blumen.", t3_qa2: "Frühling", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Jahreszeiten", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Die Uhr", t4_text: "Die Uhr zeigt uns Stunden és Minuten an.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Was zeigt der lange Zeiger an?", t4_qa: "Minuten", t4_qb: "Stunden", t4_qc: "Tage", t4_qd: "Wochen",
    t4_w1: "Die", t4_w2: "Uhr", t4_w3: "hilft", t4_w4: "uns", t4_w5: "pünktlich", t4_w6: "zu",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Ein Tag hat vierundzwanzig ___.", t4_qa2: "Stunden", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Die Uhr", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Gestern-Heute", t5_text: "Zeit vergeht: Gestern ist vorbei, Heute ist jetzt.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Wie nennen wir den Tag nach heute?", t5_qa: "Morgen", t5_qb: "Vorgestern", t5_qc: "Gestern", t5_qd: "Samstag",
    t5_w1: "Heute", t5_w2: "ist", t5_w3: "ein", t5_w4: "wirklich", t5_w5: "schöner", t5_w6: "neuer",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Gestern war ich in der ___.", t5_qa2: "Schule", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Gestern-Heute", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Feiertage", t6_text: "An Feiertagen wie Weihnachten feiern wir oft mit der Familie.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Wann feiern wir Silvester?", t6_qa: "31. Dezember", t6_qb: "1. Mai", t6_qc: "24. Dezember", t6_qd: "Ostern",
    t6_w1: "Feste", t6_w2: "feiern", t6_w3: "wir", t6_w4: "gerne", t6_w5: "mit", t6_w6: "unseren",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Ostern suchen wir bunte ___.", t6_qa2: "Eier", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Feiertage", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Geburtstag", t7_text: "Jeder Mensch hat einmal im Jahr Geburtstag.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Was bekommt man oft zum Geburtstag?", t7_qa: "Geschenke", t7_qb: "Hausaufgaben", t7_qc: "Regen", t7_qd: "Arbeit",
    t7_w1: "An", t7_w2: "meinem", t7_w3: "Geburtstag", t7_w4: "gibt", t7_w5: "es", t7_w6: "leckerem",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Ich werde jedes Jahr ein Stück ___.", t7_qa2: "älter", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Geburtstag", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Zeit-Check", t8_text: "Wir können Zeit mit Uhren és Kalendern messen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Was ist ein Kalender?", t8_qa: "Übersicht der Tage", t8_qb: "Ein Spielzeug", t8_qc: "Ein Kochbuch", t8_qd: "Ein Fahrzeug",
    t8_w1: "Zeit", t8_w2: "ist", t8_w3: "kostbar", t8_w4: "und", t8_w5: "geht", t8_w6: "immer",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Ein Jahr hat ___ Wochen.", t8_qa2: "zweiundfünfzig", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Zeit-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const KALENDER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Wochentage", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die Monate", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Jahreszeiten", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Die Uhr", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gestern-Heute", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Feiertage", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Geburtstag", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Zeit-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const MAGNETISMUS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Magnetismus",
    t1_title: "Magnete", t1_text: "Magnete können bestimmte Dinge anziehen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Was zieht ein Magnet an?", t1_qa: "Eisen", t1_qb: "Holz", t1_qc: "Plastik", t1_qd: "Papier",
    t1_w1: "Ein", t1_w2: "Magnet", t1_w3: "ist", t1_w4: "ein", t1_w5: "sehr", t1_w6: "spannendes",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Ein Magnet zieht ___ an.", t1_qa2: "Metalle", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Magnete", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Anziehung", t2_text: "Unterschiedliche Pole ziehen sich gegenseitig an.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Was passiert bei Nord- und Südpol?", t2_qa: "Anziehung", t2_qb: "Abstoßung", t2_qc: "Nichts", t2_qd: "Schmelzen",
    t2_w1: "Der", t2_w2: "Magnet", t2_w3: "hält", t2_w4: "fest", t2_w5: "an", t2_w6: "der",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Gegensätze ziehen sich ___.", t2_qa2: "an", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Anziehung", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Abstoßung", t3_text: "Gleiche Pole stoßen sich voneinander ab.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Was passiert bei zwei Nordpolen?", t3_qa: "Abstoßung", t3_qb: "Anziehung", t3_qc: "Kleben", t3_qd: "Leuchten",
    t3_w1: "Man", t3_w2: "kann", t3_w3: "die", t3_w4: "Kraft", t3_w5: "zwischen", t3_w6: "Magneten",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Gleiche Pole stoßen sich ___.", t3_qa2: "ab", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Abstoßung", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Pole", t4_text: "Jeder Magnet hat einen Nordpol und einen Südpol.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Wie viele Pole hat ein Magnet?", t4_qa: "2", t4_qb: "1", t4_qc: "4", t4_qd: "0",
    t4_w1: "Jeder", t4_w2: "Magnet", t4_w3: "hat", t4_w4: "genau", t4_w5: "zwei", t4_w6: "verschiedene",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Der Nordpol ist oft ___ markiert.", t4_qa2: "rot", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Pole", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Stoffe", t5_text: "Nicht alle Metalle sind magnetisch. Gold und Silber nicht.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Ist eine Goldmünze magnetisch?", t5_qa: "Nein", t5_qb: "Ja", t5_qc: "Nur im Wasser", t5_qd: "Immer",
    t5_w1: "Wir", t5_w2: "testen", t5_w3: "welche", t5_w4: "Dinge", t5_w5: "der", t5_w6: "Magnet",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Eisen ist ein ___ Metall.", t5_qa2: "magnetisches", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Stoffe", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Kompass", t6_text: "Ein Kompass nutzt die Magnetkraft der Erde zur Orientierung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Wohin zeigt die Kompassnadel?", t6_qa: "Norden", t6_qb: "Oben", t6_qc: "Küche", t6_qd: "Süden",
    t6_w1: "Ein", t6_w2: "Kompass", t6_w3: "hilft", t6_w4: "uns", t6_w5: "den", t6_w6: "Weg",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Die Erde ist ein riesiger ___.", t6_qa2: "Magnet", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Kompass", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Experiment", t7_text: "Wir können Magnetkraft durch Papier oder Wasser testen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Wirkt Magnetkraft durch Papier?", t7_qa: "Ja", t7_qb: "Nein", t7_qc: "Nur bei Hitze", t7_qd: "Nie",
    t7_w1: "Wir", t7_w2: "machen", t7_w3: "heute", t7_w4: "viele", t7_w5: "Versuche", t7_w6: "mit",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Magnetismus wirkt auch durch dünne ___.", t7_qa2: "Wände", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Experiment", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Magnet-Check", t8_text: "Magnetismus ist eine unsichtbare Kraft der Natur.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Kann man Magnetismus sehen?", t8_qa: "Nein, nur spüren", t8_qb: "Ja, er ist blau", t8_qc: "Ja, er leuchtet", t8_qd: "Nur nachts",
    t8_w1: "In", t8_w2: "unserem", t8_w3: "Alltag", t8_w4: "gibt", t8_w5: "es", t8_w6: "viele",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Magnetismus ist eine tolle ___.", t8_qa2: "Kraft", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Magnet-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const MAGNETISMUS_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Magnete", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Anziehung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Abstoßung", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Pole", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Stoffe", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Kompass", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Experiment", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Magnet-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WASSER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wasser & Leben",
    t1_title: "Zustände", t1_text: "Wasser kann flüssig, fest (Eis) oder gasförmig sein.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Was ist festes Wasser?", t1_qa: "Eis", t1_qb: "Dampf", t1_qc: "Saft", t1_qd: "Regen",
    t1_w1: "Wasser", t1_w2: "kann", t1_w3: "seine", t1_w4: "Form", t1_w5: "sehr", t1_w6: "stark",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Wenn Wasser gefriert, wird es zu ___.", t1_qa2: "Eis", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Zustände", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Kreislauf", t2_text: "Wasser verdunstet, bildet Wolken und regnet ab.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Wie kommen die Wolken zustande?", t2_qa: "Verdunstung", t2_qb: "Malen", t2_qc: "Wind", t2_qd: "Eis",
    t2_w1: "Der", t2_w2: "Wasserkreislauf", t2_w3: "der", t2_w4: "Erde", t2_w5: "hört", t2_w6: "nie",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Regen kommt aus den ___.", t2_qa2: "Wolken", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Kreislauf", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Schwimmen", t3_text: "Leichte Dinge schwimmen, schwere Dinge sinken meistens.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Was schwimmt auf dem Wasser?", t3_qa: "Holz", t3_qb: "Stein", t3_qc: "Eisenkugel", t3_qd: "Gold",
    t3_w1: "Wir", t3_w2: "probieren", t3_w3: "aus", t3_w4: "welche", t3_w5: "Sachen", t3_w6: "im",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Ein Stein ___ im Wasser nach unten.", t3_qa2: "sinkt", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Schwimmen", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Trinkwasser", t4_text: "Wir brauchen sauberes Trinkwasser zum Überleben.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Woher kommt unser Trinkwasser oft?", t4_qa: "Grundwasser", t4_qb: "Meer", t4_qc: "Limonade", t4_qd: "Pfütze",
    t4_w1: "Ohne", t4_w2: "frisches", t4_w3: "Wasser", t4_w4: "können", t4_w5: "wir", t4_w6: "nicht",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Wasser ist unser wichtigstes ___.", t4_qa2: "Lebensmittel", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Trinkwasser", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Wassersparen", t5_text: "Wir sollten Wasser nicht verschwenden, z.B. beim Zähneputzen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Soll das Wasser beim Putzen laufen?", t5_qa: "Nein", t5_qb: "Ja", t5_qc: "Nur montags", t5_qd: "Immer",
    t5_w1: "Jeder", t5_w2: "Tropfen", t5_w3: "Wasser", t5_w4: "ist", t5_w5: "kostbar", t5_w6: "für",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Wir müssen Wasser ___.", t5_qa2: "sparen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Wassersparen", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Lebensraum", t6_text: "Viele Tiere und Pflanzen leben im oder am Wasser.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Wer lebt im Wasser?", t6_qa: "Fische", t6_qb: "Vögel", t6_qc: "Katzen", t6_qd: "Hunde",
    t6_w1: "Im", t6_w2: "Teich", t6_w3: "kann", t6_w4: "man", t6_w5: "viele", t6_w6: "kleine",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Der See ist ein ___ für Fische.", t6_qa2: "Zuhause", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Lebensraum", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Regen", t7_text: "Regen füllt unsere Flüsse und lässt Pflanzen wachsen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Was passiert ohne Regen?", t7_qa: "Pflanzen vertrocknen", t7_qb: "Es wird bunt", t7_qc: "Nichts", t7_qd: "Es schneit",
    t7_w1: "Nach", t7_w2: "dem", t7_w3: "Regen", t7_w4: "sieht", t7_w5: "die", t7_w6: "Natur",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Pflanzen brauchen Wasser zum ___.", t7_qa2: "Wachsen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Regen", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Wasser-Check", t8_text: "Wasser ist die Grundlage für alles Leben auf der Erde.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Besteht unser Körper aus Wasser?", t8_qa: "Ja, zu einem großen Teil", t8_qb: "Nein, aus Holz", t8_qc: "Nur der Kopf", t8_qd: "Vielleicht",
    t8_w1: "Wasser", t8_w2: "gibt", t8_w3: "es", t8_w4: "überall", t8_w5: "auf", t8_w6: "unserem",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Wasser ist ein echtes ___.", t8_qa2: "Wunder", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Wasser-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const WASSER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Zustände", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Kreislauf", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Schwimmen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Trinkwasser", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wassersparen", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Lebensraum", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Regen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wasser-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WALDTIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere im Wald",
    t1_title: "Das Reh", t1_text: "Rehe leben im Wald und auf Wiesen und sind sehr scheu.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Was fressen Rehe?", t1_qa: "Gras und Blätter", t1_qb: "Wurst", t1_qc: "Fische", t1_qd: "Käse",
    t1_w1: "Rehe", t1_w2: "können", t1_w3: "bei", t1_w4: "Gefahr", t1_w5: "sehr", t1_w6: "schnell",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Das Reh hat ein braunes ___.", t1_qa2: "Fell", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Das Reh", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Der Fuchs", t2_text: "Füchse sind schlaue Jäger mit einem roten Fell.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Wo wohnt der Fuchs?", t2_qa: "Im Bau", t2_qb: "Im Nest", t2_qc: "Im Haus", t2_qd: "Unter Wasser",
    t2_w1: "Füchse", t2_w2: "suchen", t2_w3: "oft", t2_w4: "in", t2_w5: "der", t2_w6: "Dämmerung",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Der Fuchs hat einen buschigen ___.", t2_qa2: "Schwanz", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Der Fuchs", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Wildschwein", t3_text: "Wildschweine wühlen mit ihrer Schnauze im Boden.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Wie heißen die Kinder vom Wildschwein?", t3_qa: "Frischlinge", t3_qb: "Kätzchen", t3_qc: "Welpen", t3_qd: "Küken",
    t3_w1: "Vorsicht", t3_w2: "wenn", t3_w3: "eine", t3_w4: "Wildschweinmutter", t3_w5: "ihre", t3_w6: "Kleinen",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Wildschweine leben in einer ___.", t3_qa2: "Rotte", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Wildschwein", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Eichhörnchen", t4_text: "Eichhörnchen sammeln Nüsse für den Winter.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Wo bauen Eichhörnchen ihr Nest?", t4_qa: "Kobel (im Baum)", t4_qb: "In der Erde", t4_qc: "Im Wasser", t4_qd: "Gar nicht",
    t4_w1: "Eichhörnchen", t4_w2: "können", t4_w3: "sehr", t4_w4: "geschickt", t4_w5: "von", t4_w6: "Baum",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Eichhörnchen fressen gerne ___.", t4_qa2: "Nüsse", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Eichhörnchen", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Die Eule", t5_text: "Eulen jagen nachts und können fast lautlos fliegen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Wann jagen Eulen?", t5_qa: "Nachts", t5_qb: "Mittags", t5_qc: "Morgens", t5_qd: "Nie",
    t5_w1: "Eulen", t5_w2: "haben", t5_w3: "sehr", t5_w4: "große", t5_w5: "Augen", t5_w6: "und",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Die Eule kann ihren Kopf weit ___.", t5_qa2: "drehen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Die Eule", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Der Specht", t6_text: "Spechte klopfen Löcher in Baumstämme, um Käfer zu finden.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Warum klopft der Specht?", t6_qa: "Futtersuche", t6_qb: "Zum Spaß", t6_qc: "Musik machen", t6_qd: "Schlafen",
    t6_w1: "Man", t6_w2: "hört", t6_w3: "das", t6_w4: "Klopfen", t6_w5: "des", t6_w6: "Spechtes",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Der Specht hat einen harten ___.", t6_qa2: "Schnabel", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Der Specht", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Tierspuren", t7_text: "Im weichen Boden oder im Schnee findet man Fußabdrücke.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Was nennt man 'Fährte'?", t7_qa: "Spuren von Tieren", t7_qb: "Ein Auto", t7_qc: "Einen Baum", t7_qd: "Ein Lied",
    t7_w1: "An", t7_w2: "den", t7_w3: "Spuren", t7_w4: "erkennt", t7_w5: "man", t7_w6: "welches",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Wir suchen im Wald nach ___.", t7_qa2: "Tierspuren", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Tierspuren", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Wald-Check", t8_text: "Der Wald ist ein wichtiger Schutzraum für viele Tiere.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Soll man im Wald laut schreien?", t8_qa: "Nein, Tiere brauchen Ruhe", t8_qb: "Ja, immer", t8_qc: "Nur nachts", t8_qd: "Vielleicht",
    t8_w1: "Der", t8_w2: "Wald", t8_w3: "ist", t8_w4: "ein", t8_w5: "wunderbarer", t8_w6: "Ort",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Wir müssen den Wald ___.", t8_qa2: "schützen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Wald-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const WALDTIERE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Das Reh", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Der Fuchs", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wildschwein", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Eichhörnchen", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Die Eule", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Der Specht", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Tierspuren", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wald-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const ERNAEHRUNG_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Obst & Gemüse",
    t1_title: "Obstsorten", t1_text: "Obst wie Äpfel und Birnen wächst oft an Bäumen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Welches Obst wächst am Baum?", t1_qa: "Apfel", t1_qb: "Kartoffel", t1_qc: "Karotte", t1_qd: "Gurke",
    t1_w1: "Obst", t1_w2: "sollte", t1_w3: "man", t1_w4: "vor", t1_w5: "dem", t1_w6: "Essen",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Ein roter ___ schmeckt süß.", t1_qa2: "Apfel", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Obstsorten", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Gemüse", t2_text: "Gemüse wie Karotten oder Salat ist sehr gesund.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Welches Gemüse wächst in der Erde?", t2_qa: "Karotte", t2_qb: "Banane", t2_qc: "Kirsche", t2_qd: "Pflaume",
    t2_w1: "Frisches", t2_w2: "Gemüse", t2_w3: "gehört", t2_w4: "zu", t2_w5: "jeder", t2_w6: "gesunden",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Gemüse gibt uns viel ___.", t2_qa2: "Kraft", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Gemüse", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Vitamine", t3_text: "Obst und Gemüse enthalten wichtige Vitamine für den Körper.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Was machen Vitamine?", t3_qa: "Halten uns gesund", t3_qb: "Machen müde", t3_qc: "Sind schlecht", t3_qd: "Machen krank",
    t3_w1: "Wer", t3_w2: "viele", t3_w3: "Vitamine", t3_w4: "isst", t3_w5: "wird", t3_w6: "seltener",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Vitamine stärken unsere ___.", t3_qa2: "Abwehrkräfte", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Vitamine", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Zucker", t4_text: "Zu viel Zucker in Süßigkeiten ist schlecht für die Zähne.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Wo ist oft viel Zucker drin?", t4_qa: "Limonade", t4_qb: "Wasser", t4_qc: "Salat", t4_qd: "Apfel",
    t4_w1: "Man", t4_w2: "sollte", t4_w3: "Süßigkeiten", t4_w4: "nur", t4_w5: "in", t4_w6: "kleinen",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Zucker macht die Zähne ___.", t4_qa2: "kaputt", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Zucker", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Frühstück", t5_text: "Ein gesundes Frühstück gibt Energie für den Schultag.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Was ist ein gesundes Frühstück?", t5_qa: "Müsli mit Obst", t5_qb: "Nur Kekse", t5_qc: "Gar nichts", t5_qd: "Chips",
    t5_w1: "Mit", t5_w2: "einem", t5_w3: "guten", t5_w4: "Frühstück", t5_w5: "lernt", t5_w6: "es",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Frühstück ist die wichtigste ___.", t5_qa2: "Mahlzeit", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Frühstück", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Herkunft", t6_text: "Vieles wächst bei uns, manches kommt aus fernen Ländern.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Woher kommen Bananen?", t6_qa: "Aus warmen Ländern", t6_qb: "Vom Nordpol", t6_qc: "Aus dem Keller", t6_qd: "Vom Mond",
    t6_w1: "Es", t6_w2: "ist", t6_w3: "gut", t6_w4: "zu", t6_w5: "wissen", t6_w6: "woher",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Erdbeeren wachsen bei uns im ___.", t6_qa2: "Sommer", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Herkunft", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Saisonal", t7_text: "Saisonal essen bedeutet, Obst dann zu kaufen, wenn es reif ist.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Wann gibt es frische Kirschen?", t7_qa: "Im Sommer", t7_qb: "Im Winter", t7_qc: "An Ostern", t7_qd: "Immer",
    t7_w1: "Saisonales", t7_w2: "Obst", t7_w3: "aus", t7_w4: "der", t7_w5: "Region", t7_w6: "schmeckt",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Jedes Obst hat seine ___.", t7_qa2: "Erntezeit", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Saisonal", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Essen-Check", t8_text: "Eine bunte Mischung aus allem ist am besten für uns.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Wie sollte man sich ernähren?", t8_qa: "Abwechslungsreich", t8_qb: "Nur Pizza", t8_qc: "Nur Fleisch", t8_qd: "Nur Zucker",
    t8_w1: "Wir", t8_w2: "achten", t8_w3: "auf", t8_w4: "das", t8_w5: "was", t8_w6: "wir",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Essen soll gesund sein und ___.", t8_qa2: "schmecken", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Essen-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const ERNAEHRUNG_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Obstsorten", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gemüse", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Vitamine", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zucker", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Frühstück", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Herkunft", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Saisonal", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Essen-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const VERKEHR2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sicher zur Schule",
    t1_title: "Schulweg", t1_text: "Wir üben den sichersten Weg zur Schule, nicht den kürzesten.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Worauf achten wir beim Weg?", t1_qa: "Sicherheit", t1_qb: "Geschwindigkeit", t1_qc: "Blumen", t1_qd: "Handy",
    t1_w1: "Zusammen", t1_w2: "mit", t1_w3: "den", t1_w4: "Eltern", t1_w5: "üben", t1_w6: "wir",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Ich kenne meinen ___ genau.", t1_qa2: "Schulweg", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Schulweg", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Gefahren", t2_text: "An Ausfahrten und Kreuzungen müssen wir besonders aufpassen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Wo ist es gefährlich?", t2_qa: "An Kreuzungen", t2_qb: "Auf dem Sofa", t2_qc: "Im Bett", t2_qd: "Im Garten",
    t2_w1: "Man", t2_w2: "muss", t2_w3: "immer", t2_w4: "aufmerksam", t2_w5: "sein", t2_w6: "wenn",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Augen auf im ___!", t2_qa2: "Straßenverkehr", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Gefahren", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Dunkelheit", t3_text: "In der Dunkelheit werden wir von Autofahrern schwer gesehen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Was hilft in der Nacht?", t3_qa: "Helle Kleidung", t3_qb: "Schwarze Jacke", t3_qc: "Augen schließen", t3_qd: "Sich verstecken",
    t3_w1: "In", t3_w2: "der", t3_w3: "dunklen", t3_w4: "Jahreszeit", t3_w5: "tragen", t3_w6: "wir",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Licht macht uns ___.", t3_qa2: "sichtbar", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Dunkelheit", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Reflektoren", t4_text: "Reflektoren am Ranzen leuchten hell, wenn Licht darauf trifft.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Was machen Reflektoren?", t4_qa: "Werfen Licht zurück", t4_qb: "Machen Musik", t4_qc: "Wärmen uns", t4_qd: "Sind schwer",
    t4_w1: "Mein", t4_w2: "Schulranzen", t4_w3: "hat", t4_w4: "viele", t4_w5: "helle", t4_w6: "Reflektoren",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Reflektoren retten ___.", t4_qa2: "Leben", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Reflektoren", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Der Helm", t5_text: "Ein Helm schützt unseren Kopf bei einem Sturz mit dem Fahrrad.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Wann tragen wir einen Helm?", t5_qa: "Beim Radfahren", t5_qb: "Beim Essen", t5_qc: "Im Kino", t5_qd: "Beim Schlafen",
    t5_w1: "Ohne", t5_w2: "einen", t5_w3: "Helm", t5_w4: "sollte", t5_w5: "man", t5_w6: "niemals",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Der Helm muss gut ___.", t5_qa2: "sitzen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Der Helm", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Schilder", t6_text: "Verkehrsschilder sagen uns, was wir tun dürfen oder müssen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Was bedeutet ein rotes Achtieck?", t6_qa: "Stopp", t6_qb: "Vorfahrt", t6_qc: "Parken", t6_qd: "Sackgasse",
    t6_w1: "Wir", t6_w2: "lernen", t6_w3: "was", t6_w4: "die", t6_w5: "wichtigsten", t6_w6: "Schilder",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Schilder regeln den ___.", t6_qa2: "Verkehr", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Schilder", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Busfahren", t7_text: "An der Haltestelle warten wir friedlich hinter der Linie.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Wo warten wir auf den Bus?", t7_qa: "Hinter der Bordsteinkante", t7_qb: "Auf der Straße", t7_qc: "Im Gebüsch", t7_qd: "Überall",
    t7_w1: "Beim", t7_w2: "Aussteigen", t7_w3: "warten", t7_w4: "wir", t7_w5: "bis", t7_w6: "der",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Im Bus halten wir uns ___.", t7_qa2: "fest", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Busfahren", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Check", t8_text: "Sicherheit geht vor! Immer erst schauen, dann gehen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Wie schauen wir an der Straße?", t8_qa: "Links-Rechts-Links", t8_qb: "Nur geradeaus", t8_qc: "Gar nicht", t8_qd: "Nach oben",
    t8_w1: "Sicher", t8_w2: "ankommen", t8_w3: "ist", t8_w4: "das", t8_w5: "wichtigste", t8_w6: "Ziel",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Erst stehen, dann ___.", t8_qa2: "sehen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const VERKEHR2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Schulweg", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gefahren", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Dunkelheit", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Reflektoren", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Der Helm", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Schilder", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Busfahren", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WERTSTOFFE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Müll & Recycling 2",
    t1_title: "Papier", t1_text: "Altpapier kommt in die blaue Tonne und wird zu neuem Papier.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Was darf ins Altpapier?", t1_qa: "Zeitungen", t1_qb: "Windeln", t1_qc: "Pizza-Reste", t1_qd: "Glas",
    t1_w1: "Wir", t1_w2: "sammeln", t1_w3: "altes", t1_w4: "Papier", t1_w5: "für", t1_w6: "die",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Papier wird wieder ___.", t1_qa2: "verwertet", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Papier", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Gelber Sack", t2_text: "Verpackungen aus Plastik und Metall gehören in den Gelben Sack.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Was gehört in den Gelben Sack?", t2_qa: "Joghurtbecher", t2_qb: "Zeitung", t2_qc: "Bananenschale", t2_qd: "Holz",
    t2_w1: "Verpackungen", t2_w2: "müssen", t2_w3: "leer", t2_w4: "sein", t2_w5: "bevor", t2_w6: "man",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Plastik ist ein ___.", t2_qa2: "Wertstoff", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Gelber Sack", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Glas", t3_text: "Glasflaschen werden nach Farben sortiert: Weiß, Grün, Braun.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Wo entsorgen wir Glasflaschen?", t3_qa: "Glascontainer", t3_qb: "Biotonne", t3_qc: "Wald", t3_qd: "Papierkorb",
    t3_w1: "Wir", t3_w2: "bringen", t3_w3: "die", t3_w4: "leeren", t3_w5: "Flaschen", t3_w6: "zum",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Glas kann man oft ___.", t3_qa2: "einschmelzen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Glas", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Biomüll", t4_text: "Aus Bioabfällen wie Obstschalen wird wertvolle Erde.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Was darf in den Biomüll?", t4_qa: "Apfelgriebsch", t4_qb: "Plastiktüte", t4_qc: "Batterie", t4_qd: "Glas",
    t4_w1: "Bananenschalen", t4_w2: "gehören", t4_w3: "in", t4_w4: "den", t4_w5: "Bio-Müll", t4_w6: "oder",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Aus Biomüll wird ___.", t4_qa2: "Kompost", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Biomüll", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Restmüll", t5_text: "Dinge, die nicht recycelt werden können, kommen in den Restmüll.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Was ist Restmüll?", t5_qa: "Staubsaugerbeutel", t5_qb: "Zeitung", t5_qc: "Glasflasche", t5_qd: "Apfelschale",
    t5_w1: "Nur", t5_w2: "was", t5_w3: "nirgendwo", t5_w4: "anders", t5_w5: "reingehört", t5_w6: "kommt",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Restmüll wird meist ___.", t5_qa2: "verbrannt", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Restmüll", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Vermeidung", t6_text: "Der beste Müll ist der, der gar nicht erst entsteht.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Wie vermeiden wir Müll?", t6_qa: "Stoffbeutel nutzen", t6_qb: "Mehr kaufen", t6_qc: "Alles wegwerfen", t6_qd: "Nichts essen",
    t6_w1: "Wir", t6_w2: "können", t6_w3: "beim", t6_w4: "Einkaufen", t6_w5: "schon", t6_w6: "auf",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Weniger Verpackung ist ___.", t6_qa2: "besser", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Vermeidung", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Upcycling", t7_text: "Aus alten Dingen können wir tolle neue Sachen basteln.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Was ist Upcycling?", t7_qa: "Aus Alt mach Neu", t7_qb: "Müll verbrennen", t7_qc: "Einfach wegwerfen", t7_qd: "Nichts tun",
    t7_w1: "Basteln", t7_w2: "mit", t7_w3: "Müll", t7_w4: "macht", t7_w5: "Spaß", t7_w6: "und",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Aus einer Dose wird eine ___.", t7_qa2: "Stifthalter", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Upcycling", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Müll-Check", t8_text: "Richtiges Sortieren hilft der Umwelt und spart Rohstoffe.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Warum sortieren wir Müll?", t8_qa: "Umwelt schützen", t8_qb: "Weil es Spaß macht", t8_qc: "Kein Grund", t8_qd: "Langeweile",
    t8_w1: "Sauberkeit", t8_w2: "und", t8_w3: "Ordnung", t8_w4: "sind", t8_w5: "wichtig", t8_w6: "für",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Alle helfen beim ___ mit.", t8_qa2: "Sortieren", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Müll-Check", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const WERTSTOFFE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Papier", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gelber Sack", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Glas", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Biomüll", color: "#4CAF50" },
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
    svg: { type: "word-display", word: "Vermeidung", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Upcycling", color: "#4CAF50" },
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

export const FINALE2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K2 Wissen",
    t1_title: "Natur", t1_text: "Wir kennen jetzt viele Tiere und Pflanzen unserer Heimat.", t1_inst: "Löse die Aufgabe:", t1_h1: "Lies genau!", t1_h2: "Denk nach!", t1_q: "Welches Tier hat Stacheln?", t1_qa: "Igel", t1_qb: "Hund", t1_qc: "Vogel", t1_qd: "Fisch",
    t1_w1: "In", t1_w2: "der", t1_w3: "Natur", t1_w4: "gibt", t1_w5: "es", t1_w6: "zu",
    t1_l1: "Links", t1_r1: "Rechts", t1_l2: "Richtig", t1_r2: "Falsch", t1_l3: "Oben", t1_r3: "Unten",
    t1_sent: "Die Natur ist sehr ___.", t1_qa2: "vielfältig", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Satz", t1_tk3: "Natur", t1_tk4: "Lernen", t1_tk5: "Wissen", t1_tk6: "Schule",
    t1_bl1: "Gruppe A", t1_bl2: "Gruppe B", t1_i1: "Element 1", t1_i2: "Element 2", t1_i3: "Element 3", t1_i4: "Element 4",
    t2_title: "Technik", t2_text: "Magnete und Werkzeuge helfen uns im täglichen Leben.", t2_inst: "Löse die Aufgabe:", t2_h1: "Lies genau!", t2_h2: "Denk nach!", t2_q: "Was nutzt ein Kompass?", t2_qa: "Magnetkraft", t2_qb: "Sonnenlicht", t2_qc: "Batterien", t2_qd: "Wind",
    t2_w1: "Wir", t2_w2: "haben", t2_w3: "gelernt", t2_w4: "wie", t2_w5: "manche", t2_w6: "Dinge",
    t2_l1: "Links", t2_r1: "Rechts", t2_l2: "Richtig", t2_r2: "Falsch", t2_l3: "Oben", t2_r3: "Unten",
    t2_sent: "Technik macht vieles ___.", t2_qa2: "leichter", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Satz", t2_tk3: "Technik", t2_tk4: "Lernen", t2_tk5: "Wissen", t2_tk6: "Schule",
    t2_bl1: "Gruppe A", t2_bl2: "Gruppe B", t2_i1: "Element 1", t2_i2: "Element 2", t2_i3: "Element 3", t2_i4: "Element 4",
    t3_title: "Zeit", t3_text: "Tage, Monate und Jahre strukturieren unser ganzes Leben.", t3_inst: "Löse die Aufgabe:", t3_h1: "Lies genau!", t3_h2: "Denk nach!", t3_q: "Wie viele Tage hat eine Woche?", t3_qa: "7", t3_qb: "5", t3_qc: "10", t3_qd: "12",
    t3_w1: "Die", t3_w2: "Zeit", t3_w3: "bleibt", t3_w4: "niemals", t3_w5: "stehen", t3_w6: "und",
    t3_l1: "Links", t3_r1: "Rechts", t3_l2: "Richtig", t3_r2: "Falsch", t3_l3: "Oben", t3_r3: "Unten",
    t3_sent: "Jeder Tag hat ___ Stunden.", t3_qa2: "24", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Satz", t3_tk3: "Zeit", t3_tk4: "Lernen", t3_tk5: "Wissen", t3_tk6: "Schule",
    t3_bl1: "Gruppe A", t3_bl2: "Gruppe B", t3_i1: "Element 1", t3_i2: "Element 2", t3_i3: "Element 3", t3_i4: "Element 4",
    t4_title: "Tiere", t4_text: "Ob Haus- oder Waldtier: Alle brauchen unseren Respekt.", t4_inst: "Löse die Aufgabe:", t4_h1: "Lies genau!", t4_h2: "Denk nach!", t4_q: "Was brauchen alle Tiere?", t4_qa: "Futter und Schutz", t4_qb: "Fernsehen", t4_qc: "Schokolade", t4_qd: "Schuhe",
    t4_w1: "Tiere", t4_w2: "sind", t4_w3: "wichtige", t4_w4: "Teile", t4_w5: "unserer", t4_w6: "Welt",
    t4_l1: "Links", t4_r1: "Rechts", t4_l2: "Richtig", t4_r2: "Falsch", t4_l3: "Oben", t4_r3: "Unten",
    t4_sent: "Wir achten auf alle ___.", t4_qa2: "Lebewesen", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Satz", t4_tk3: "Tiere", t4_tk4: "Lernen", t4_tk5: "Wissen", t4_tk6: "Schule",
    t4_bl1: "Gruppe A", t4_bl2: "Gruppe B", t4_i1: "Element 1", t4_i2: "Element 2", t4_i3: "Element 3", t4_i4: "Element 4",
    t5_title: "Wasser", t5_text: "Wasser ist kostbar und wir müssen gut damit umgehen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Lies genau!", t5_h2: "Denk nach!", t5_q: "Ist Wasser wichtig?", t5_qa: "Ja, lebensnotwendig", t5_qb: "Nein, nur nass", t5_qc: "Nur zum Baden", t5_qd: "Vielleicht",
    t5_w1: "Jeder", t5_w2: "Mensch", t5_w3: "sollte", t5_w4: "verantwortungsvoll", t5_w5: "mit", t5_w6: "unserem",
    t5_l1: "Links", t5_r1: "Rechts", t5_l2: "Richtig", t5_r2: "Falsch", t5_l3: "Oben", t5_r3: "Unten",
    t5_sent: "Wasser ist die Quelle des ___.", t5_qa2: "Lebens", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Satz", t5_tk3: "Wasser", t5_tk4: "Lernen", t5_tk5: "Wissen", t5_tk6: "Schule",
    t5_bl1: "Gruppe A", t5_bl2: "Gruppe B", t5_i1: "Element 1", t5_i2: "Element 2", t5_i3: "Element 3", t5_i4: "Element 4",
    t6_title: "Verkehr", t6_text: "Im Verkehr sind wir vorsichtig und achten auf andere.", t6_inst: "Löse die Aufgabe:", t6_h1: "Lies genau!", t6_h2: "Denk nach!", t6_q: "Was ist wichtig im Verkehr?", t6_qa: "Gegenseitige Rücksicht", t6_qb: "Schnell sein", t6_qc: "Handy nutzen", t6_qd: "Egal",
    t6_w1: "Wenn", t6_w2: "wir", t6_w3: "alle", t6_w4: "aufpassen", t6_w5: "kommen", t6_w6: "wir",
    t6_l1: "Links", t6_r1: "Rechts", t6_l2: "Richtig", t6_r2: "Falsch", t6_l3: "Oben", t6_r3: "Unten",
    t6_sent: "Sicherheit steht an erster ___.", t6_qa2: "Stelle", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Satz", t6_tk3: "Verkehr", t6_tk4: "Lernen", t6_tk5: "Wissen", t6_tk6: "Schule",
    t6_bl1: "Gruppe A", t6_bl2: "Gruppe B", t6_i1: "Element 1", t6_i2: "Element 2", t6_i3: "Element 3", t6_i4: "Element 4",
    t7_title: "Umwelt", t7_text: "Müll trennen und vermeiden schützt unsere Erde.", t7_inst: "Löse die Aufgabe:", t7_h1: "Lies genau!", t7_h2: "Denk nach!", t7_q: "Was ist gut für die Erde?", t7_qa: "Müll vermeiden", t7_qb: "Überall wegwerfen", t7_qc: "Viel Plastik", t7_qd: "Nichts tun",
    t7_w1: "Kleine", t7_w2: "Taten", t7_w3: "können", t7_w4: "zusammen", t7_w5: "einen", t7_w6: "großen",
    t7_l1: "Links", t7_r1: "Rechts", t7_l2: "Richtig", t7_r2: "Falsch", t7_l3: "Oben", t7_r3: "Unten",
    t7_sent: "Wir schützen unsere ___.", t7_qa2: "Umwelt", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Satz", t7_tk3: "Umwelt", t7_tk4: "Lernen", t7_tk5: "Wissen", t7_tk6: "Schule",
    t7_bl1: "Gruppe A", t7_bl2: "Gruppe B", t7_i1: "Element 1", t7_i2: "Element 2", t7_i3: "Element 3", t7_i4: "Element 4",
    t8_title: "Diplom", t8_text: "Herzlichen Glückwunsch! Du bist nun ein Sachkunde-Experte.", t8_inst: "Löse die Aufgabe:", t8_h1: "Lies genau!", t8_h2: "Denk nach!", t8_q: "Bist du jetzt ein Profi?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Fast", t8_qd: "Vielleicht",
    t8_w1: "Jetzt", t8_w2: "bin", t8_w3: "ich", t8_w4: "bereit", t8_w5: "für", t8_w6: "viele",
    t8_l1: "Links", t8_r1: "Rechts", t8_l2: "Richtig", t8_r2: "Falsch", t8_l3: "Oben", t8_r3: "Unten",
    t8_sent: "Ich habe viel ___.", t8_qa2: "gelernt", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Satz", t8_tk3: "Diplom", t8_tk4: "Lernen", t8_tk5: "Wissen", t8_tk6: "Schule",
    t8_bl1: "Gruppe A", t8_bl2: "Gruppe B", t8_i1: "Element 1", t8_i2: "Element 2", t8_i3: "Element 3", t8_i4: "Element 4",
  },
};

export const FINALE2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Natur", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Technik", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Zeit", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Tiere", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wasser", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Verkehr", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Umwelt", color: "#4CAF50" },
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

