// lib/explorerPools/sachkundeK6.ts
import type { PoolTopicDef } from "./types";

export const PUBERTAET_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pubertät & Körper",
    t1_title: "Veränderungen", t1_text: "Der Körper wird erwachsen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was steuert die Pubertät?", t1_qa: "Hormone", t1_qb: "Muskeln", t1_qc: "Vitamine", t1_qd: "Gedanken",
    t1_w1: "Hormone", t1_w2: "sind", t1_w3: "Botenstoffe", t1_w4: "die", t1_w5: "viele", t1_w6: "Veränderungen", t1_w7: "im", t1_w8: "Körper",
    t1_l1: "Gehirn", t1_r1: "Zentrale", t1_l2: "Körper", t1_r2: "Wachstum", t1_l3: "Gefühl", t1_r3: "Stimmung",
    t1_sent: "Die Hypophyse schüttet ___ aus.", t1_qa2: "Hormone", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Jeder", t1_f2: "Mensch", t1_f3: "erlebt", t1_f4: "die", t1_f5: "Pubertät", t1_f6: "in", t1_f7: "seinem", t1_f8: "eigenen", t1_f9: "Tempo.",
    t1_tk1: "In", t1_tk2: "der", t1_tk3: "Pubertät", t1_tk4: "verändert", t1_tk5: "sich", t1_tk6: "auch", t1_tk7: "die", t1_tk8: "eigene", t1_tk9: "Stimme.", t1_tk10: "",
    t1_bl1: "Körperlich", t1_bl2: "Seelisch", t1_i1: "Wachstum", t1_i2: "Gefühl", t1_i3: "Haare", t1_i4: "Laune",
    t2_title: "Mädchen", t2_text: "Was sich bei Mädchen ändert.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie nennt man die erste Monatsblutung?", t2_qa: "Menarche", t2_qb: "Pause", t2_qc: "Zyklus", t2_qd: "Wachstum",
    t2_w1: "Die", t2_w2: "Brust", t2_w3: "beginnt", t2_w4: "zu", t2_w5: "wachsen", t2_w6: "und", t2_w7: "die", t2_w8: "Hüften",
    t2_l1: "Eierstock", t2_r1: "Eizelle", t2_l2: "Gebärmutter", t2_r2: "Schutz", t2_l3: "Zyklus", t2_r3: "Monat",
    t2_sent: "In den Eierstöcken reifen ___.", t2_qa2: "Eizellen", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Hygieneprodukte", t2_f2: "wie", t2_f3: "Binden", t2_f4: "oder", t2_f5: "Tampons", t2_f6: "sind", t2_f7: "jetzt", t2_f8: "wichtig.", t2_f9: "",
    t2_tk1: "Ein", t2_tk2: "Zyklus", t2_tk3: "dauert", t2_tk4: "im", t2_tk5: "Durchschnitt", t2_tk6: "etwa", t2_tk7: "achtundzwanzig", t2_tk8: "Tage.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Organ", t2_bl2: "Produkt", t2_i1: "Eierstock", t2_i2: "Binde", t2_i3: "Uterus", t2_i4: "Tampon",
    t3_title: "Jungen", t3_text: "Was sich bei Jungen ändert.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Warum wird die Stimme tiefer?", t3_qa: "Kehlkopf wächst", t3_qb: "Viel Singen", t3_qc: "Erkältung", t3_qd: "Zufall",
    t3_w1: "Die", t3_w2: "Schultern", t3_w3: "werden", t3_w4: "breiter", t3_w5: "und", t3_w6: "die", t3_w7: "Muskeln", t3_w8: "wachsen",
    t3_l1: "Kehlkopf", t3_r1: "Stimme", t3_l2: "Hoden", t3_r2: "Spermien", t3_l3: "Bart", t3_r3: "Haare",
    t3_sent: "Den Stimmwechsel nennt man auch ___.", t3_qa2: "Stimmbruch", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Bei", t3_f2: "Jungen", t3_f3: "setzt", t3_f4: "die", t3_f5: "Pubertät", t3_f6: "oft", t3_f7: "etwas", t3_f8: "später", t3_f9: "ein.",
    t3_tk1: "Der", t3_tk2: "erste", t3_tk3: "Samenerguss", t3_tk4: "passiert", t3_tk5: "oft", t3_tk6: "nachts", t3_tk7: "während", t3_tk8: "des", t3_tk9: "Schlafens.", t3_tk10: "",
    t3_bl1: "Stimme", t3_bl2: "Körper", t3_i1: "Tiefer", t3_i2: "Breiter", t3_i3: "Bruch", t3_i4: "Haare",
    t4_title: "Gefühle", t4_text: "Achterbahn im Kopf.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Warum schwankt die Laune?", t4_qa: "Hormonelle Umstellung", t4_qb: "Schlafmangel", t4_qc: "Hunger", t4_qd: "Wetter",
    t4_w1: "Manchmal", t4_w2: "fühlt", t4_w3: "man", t4_w4: "sich", t4_w5: "himmelhoch", t4_w6: "jauchzend", t4_w7: "und", t4_w8: "dann",
    t4_l1: "Wut", t4_r1: "Energie", t4_l2: "Freude", t4_r2: "Lachen", t4_l3: "Angst", t4_r3: "Vorsicht",
    t4_sent: "Man fühlt sich manchmal ganz ___.", t4_qa2: "unsicher", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Es", t4_f2: "ist", t4_f3: "völlig", t4_f4: "normal", t4_f5: "dass", t4_f6: "man", t4_f7: "jetzt", t4_f8: "öfter", t4_f9: "Streit",
    t4_tk1: "Freunde", t4_tk2: "werden", t4_tk3: "in", t4_tk4: "dieser", t4_tk5: "Zeit", t4_tk6: "oft", t4_tk7: "wichtiger", t4_tk8: "als", t4_tk9: "die", t4_tk10: "Eltern.",
    t4_bl1: "Positiv", t4_bl2: "Negativ", t4_i1: "Glück", t4_i2: "Angst", t4_i3: "Liebe", t4_i4: "Zorn",
    t5_title: "Körperpflege", t5_text: "Hygiene ist wichtig.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Warum schwitzt man mehr?", t5_qa: "Schweißdrüsen werden aktiver", t5_qb: "Zu warm", t5_qc: "Sport", t5_qd: "Angst",
    t5_w1: "Tägliches", t5_w2: "Duschen", t5_w3: "und", t5_w4: "frische", t5_w5: "Wäsche", t5_w6: "gehören", t5_w7: "jetzt", t5_w8: "einfach",
    t5_l1: "Haut", t5_r1: "Pickel", t5_l2: "Zähne", t5_r2: "Karies", t5_l3: "Haare", t5_r3: "Fettig",
    t5_sent: "Ein Deo hilft gegen den ___.", t5_qa2: "Geruch", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Gegen", t5_f2: "Pickel", t5_f3: "hilft", t5_f4: "eine", t5_f5: "regelmäßige", t5_f6: "Reinigung", t5_f7: "mit", t5_f8: "mildem", t5_f9: "Wasser.",
    t5_tk1: "In", t5_tk2: "der", t5_tk3: "Pubertät", t5_tk4: "produziert", t5_tk5: "die", t5_tk6: "Haut", t5_tk7: "oft", t5_tk8: "viel", t5_tk9: "mehr", t5_tk10: "Fett.",
    t5_bl1: "Produkt", t5_bl2: "Körperteil", t5_i1: "Seife", t5_i2: "Haut", t5_i3: "Deo", t5_i4: "Gesicht",
    t6_title: "Freundschaft", t6_text: "Erste Verliebtheit.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was sind 'Schmetterlinge im Bauch'?", t6_qa: "Verliebtsein", t6_qb: "Hunger", t6_qc: "Krankheit", t6_qd: "Insekten gegessen",
    t6_w1: "Gegenseitiges", t6_w2: "Vertrauen", t6_w3: "ist", t6_w4: "die", t6_w5: "wichtigste", t6_w6: "Basis", t6_w7: "für", t6_w8: "jede",
    t6_l1: "Händchen", t6_r1: "Halten", t6_l2: "Kuss", t6_r2: "Geben", t6_l3: "Brief", t6_r3: "Schreiben",
    t6_sent: "Liebe ist ein sehr starkes ___.", t6_qa2: "Gefühl", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Man", t6_f2: "muss", t6_f3: "lernen", t6_f4: "auch", t6_f5: "ein", t6_f6: "Nein", t6_f7: "vom", t6_f8: "anderen", t6_f9: "zu",
    t6_tk1: "Jeder", t6_tk2: "entscheidet", t6_tk3: "selbst", t6_tk4: "wann", t6_tk5: "er", t6_tk6: "für", t6_tk7: "den", t6_tk8: "ersten", t6_tk9: "Kuss", t6_tk10: "bereit",
    t6_bl1: "Gefühl", t6_bl2: "Handlung", t6_i1: "Liebe", t6_i2: "Kuss", t6_i3: "Vertrauen", t6_i4: "Reden",
    t7_title: "Entwicklung", t7_text: "Vom Kind zum Teenie.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wann endet die Pubertät meist?", t7_qa: "Mit ca. 18-20 Jahren", t7_qb: "Mit 10", t7_qc: "Nie", t7_qd: "Morgen",
    t7_w1: "In", t7_w2: "dieser", t7_w3: "Phase", t7_w4: "sucht", t7_w5: "jeder", t7_w6: "seine", t7_w7: "eigene", t7_w8: "Identität",
    t7_l1: "Kind", t7_r1: "Spiel", t7_l2: "Teenie", t7_r2: "Schule", t7_l3: "Erwachsen", t7_r3: "Beruf",
    t7_sent: "Man wird immer mehr ___.", t7_qa2: "selbstständig", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Das", t7_f2: "Gehirn", t7_f3: "wird", t7_f4: "in", t7_f5: "der", t7_f6: "Pubertät", t7_f7: "quasi", t7_f8: "einmal", t7_f9: "komplett",
    t7_tk1: "Selbstvertrauen", t7_tk2: "wächst", t7_tk3: "wenn", t7_tk4: "man", t7_tk5: "neue", t7_tk6: "Herausforderungen", t7_tk7: "erfolgreich", t7_tk8: "meistert.", t7_tk9: "", t7_tk10: "",
    t7_bl1: "Früher", t7_bl2: "Später", t7_i1: "Spielen", t7_i2: "Arbeiten", t7_i3: "Lernen", t7_i4: "Verantwortung",
    t8_title: "Bio-Check", t8_text: "Alles klar im Körper?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist die Hypophyse?", t8_qa: "Eine Hormondrüse", t8_qb: "Ein Muskel", t8_qc: "Ein Knochen", t8_qd: "Ein Organ im Bauch",
    t8_w1: "Wer", t8_w2: "seinen", t8_w3: "Körper", t8_w4: "kennt", t8_w5: "kann", t8_w6: "besser", t8_w7: "mit", t8_w8: "den",
    t8_l1: "Hormon", t8_r1: "Botenstoff", t8_l2: "Organ", t8_r2: "Bauteil", t8_l3: "Gefühl", t8_r3: "Stimmung",
    t8_sent: "Wissen hilft gegen ___.", t8_qa2: "Unsicherheit", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "viel", t8_f4: "über", t8_f5: "die", t8_f6: "spannende", t8_f7: "Zeit", t8_f8: "des", t8_f9: "Erwachsenwerdens",
    t8_tk1: "Es", t8_tk2: "gibt", t8_tk3: "kein", t8_tk4: "Richtig", t8_tk5: "oder", t8_tk6: "Falsch", t8_tk7: "bei", t8_tk8: "der", t8_tk9: "eigenen", t8_tk10: "Entwicklung.",
    t8_bl1: "Wissen", t8_bl2: "Gefühl", t8_i1: "Fakt", t8_i2: "Liebe", t8_i3: "Daten", t8_i4: "Angst",
  },
};

export const PUBERTAET_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Veränderungen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Mädchen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Jungen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Gefühle", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Körperpflege", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Freundschaft", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Entwicklung", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Bio-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const DEMOKRATIE_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Demokratie & Wahlen",
    t1_title: "Grundgesetz", t1_text: "Unsere Regeln.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was steht in Artikel 1?", t1_qa: "Die Würde des Menschen ist unantastbar", t1_qb: "Alle müssen Eis essen", t1_qc: "Schule ist verboten", t1_qd: "Autos sind blau",
    t1_w1: "Das", t1_w2: "Grundgesetz", t1_w3: "garantiert", t1_w4: "jedem", t1_w5: "Bürger", t1_w6: "seine", t1_w7: "wichtigen", t1_w8: "Grundrechte.",
    t1_l1: "Freiheit", t1_r1: "Reden", t1_l2: "Gleichheit", t1_r2: "Gesetz", t1_l3: "Würde", t1_r3: "Mensch",
    t1_sent: "Das Grundgesetz ist unsere ___.", t1_qa2: "Verfassung", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Niemand", t1_f2: "darf", t1_f3: "wegen", t1_f4: "seiner", t1_f5: "Herkunft", t1_f6: "oder", t1_f7: "Religion", t1_f8: "benachteiligt", t1_f9: "werden.",
    t1_tk1: "Die", t1_tk2: "Grundrechte", t1_tk3: "schützen", t1_tk4: "uns", t1_tk5: "vor", t1_tk6: "Willkür", t1_tk7: "durch", t1_tk8: "den", t1_tk9: "Staat.", t1_tk10: "",
    t1_bl1: "Recht", t1_bl2: "Pflicht", t1_i1: "Meinung", t1_i2: "Steuern", t1_i3: "Glauben", t1_i4: "Schule",
    t2_title: "Wahlrecht", t2_text: "Deine Stimme zählt.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Ab welchem Alter darf man meist wählen?", t2_qa: "18 (manchmal 16)", t2_qb: "5", t2_qc: "50", t2_qd: "Ab Geburt",
    t2_w1: "Bei", t2_w2: "einer", t2_w3: "Wahl", t2_w4: "entscheiden", t2_w5: "die", t2_w6: "Bürger", t2_w7: "wer", t2_w8: "das",
    t2_l1: "Allgemein", t2_r1: "Alle", t2_l2: "Geheim", t2_r2: "Kabine", t2_l3: "Direkt", t2_r3: "Person",
    t2_sent: "Wahlen sind frei, gleich und ___.", t2_qa2: "geheim", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Jeder", t2_f2: "Wähler", t2_f3: "hat", t2_f4: "genau", t2_f5: "eine", t2_f6: "Stimme", t2_f7: "die", t2_f8: "gleich", t2_f9: "viel",
    t2_tk1: "In", t2_tk2: "einer", t2_tk3: "Demokratie", t2_tk4: "geht", t2_tk5: "alle", t2_tk6: "Staatsgewalt", t2_tk7: "vom", t2_tk8: "Volke", t2_tk9: "aus.", t2_tk10: "",
    t2_bl1: "Wahl", t2_bl2: "Regierung", t2_i1: "Zettel", t2_i2: "Gesetz", t2_i3: "Kabine", t2_i4: "Minister",
    t3_title: "Parteien", t3_text: "Verschiedene Meinungen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was ist eine Partei?", t3_qa: "Zusammenschluss von Menschen mit Zielen", t3_qb: "Ein Sportverein", t3_qc: "Eine Feier", t3_qd: "Ein Haus",
    t3_w1: "Parteien", t3_w2: "stellen", t3_w3: "ihre", t3_w4: "Programme", t3_w5: "vor", t3_w6: "um", t3_w7: "Wähler", t3_w8: "zu",
    t3_l1: "Programm", t3_r1: "Ziele", t3_l2: "Kandidat", t3_r2: "Person", t3_l3: "Debatte", t3_r3: "Streit",
    t3_sent: "Parteien kämpfen um ___.", t3_qa2: "Stimmen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "In", t3_f2: "Deutschland", t3_f3: "gibt", t3_f4: "es", t3_f5: "viele", t3_f6: "verschiedene", t3_f7: "Parteien", t3_f8: "im", t3_f9: "Bundestag.",
    t3_tk1: "Opposition", t3_tk2: "nennt", t3_tk3: "man", t3_tk4: "die", t3_tk5: "Parteien", t3_tk6: "die", t3_tk7: "nicht", t3_tk8: "an", t3_tk9: "der", t3_tk10: "Regierung",
    t3_bl1: "Regierung", t3_bl2: "Opposition", t3_i1: "Kanzler", t3_i2: "Kritik", t3_i3: "Minister", t3_i4: "Kontrolle",
    t4_title: "Bundestag", t4_text: "Das Parlament.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo arbeitet der Bundestag?", t4_qa: "Im Reichstagsgebäude (Berlin)", t4_qb: "In München", t4_qc: "In einer Schule", t4_qd: "Auf dem Markt",
    t4_w1: "Der", t4_w2: "Bundestag", t4_w3: "ist", t4_w4: "die", t4_w5: "Volksvertretung", t4_w6: "der", t4_w7: "Bundesrepublik", t4_w8: "Deutschland.",
    t4_l1: "Plenum", t4_r1: "Saal", t4_l2: "Ausschuss", t4_r2: "Arbeit", t4_l3: "Fraktion", t4_r3: "Gruppe",
    t4_sent: "Die Abgeordneten beschließen ___.", t4_qa2: "Gesetze", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Der", t4_f2: "Präsident", t4_f3: "des", t4_f4: "Bundestages", t4_f5: "leitet", t4_f6: "die", t4_f7: "Sitzungen", t4_f8: "im", t4_f9: "Plenum.",
    t4_tk1: "Abgeordnete", t4_tk2: "werden", t4_tk3: "für", t4_tk4: "eine", t4_tk5: "Dauer", t4_tk6: "von", t4_tk7: "vier", t4_tk8: "Jahren", t4_tk9: "gewählt.", t4_tk10: "",
    t4_bl1: "Ort", t4_bl2: "Person", t4_i1: "Berlin", t4_i2: "Wähler", t4_i3: "Plenarsaal", t4_i4: "Abgeordneter",
    t5_title: "Gewaltenteilung", t5_text: "Wer macht was?", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Welche drei Gewalten gibt es?", t5_qa: "Exekutive, Legislative, Judikative", t5_qb: "Feuer, Wasser, Luft", t5_qc: "Essen, Trinken, Schlafen", t5_qd: "Groß, Mittel, Klein",
    t5_w1: "Die", t5_w2: "Teilung", t5_w3: "der", t5_w4: "Macht", t5_w5: "verhindert", t5_w6: "dass", t5_w7: "jemand", t5_w8: "alleine",
    t5_l1: "Legislative", t5_r1: "Gesetze", t5_l2: "Exekutive", t5_r2: "Regierung", t5_l3: "Judikative", t5_r3: "Gerichte",
    t5_sent: "Die Judikative sind die ___.", t5_qa2: "Gerichte", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Die", t5_f2: "Polizei", t5_f3: "gehört", t5_f4: "zur", t5_f5: "ausführenden", t5_f6: "Gewalt", t5_f7: "in", t5_f8: "unserem", t5_f9: "Staat.",
    t5_tk1: "Richter", t5_tk2: "sind", t5_tk3: "unabhängig", t5_tk4: "und", t5_tk5: "nur", t5_tk6: "dem", t5_tk7: "Gesetz", t5_tk8: "alleine", t5_tk9: "unterworfen.", t5_tk10: "",
    t5_bl1: "Gesetz", t5_bl2: "Gericht", t5_i1: "Beschluss", t5_i2: "Urteil", t5_i3: "Parlament", t5_i4: "Richter",
    t6_title: "Bundeskanzler", t6_text: "Chef der Regierung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wer wählt den Bundeskanzler?", t6_qa: "Der Bundestag", t6_qb: "Das Volk direkt", t6_qc: "Der Präsident allein", t6_qd: "Die Polizei",
    t6_w1: "Der", t6_w2: "Bundeskanzler", t6_w3: "schlägt", t6_w4: "dem", t6_w5: "Präsidenten", t6_w6: "die", t6_w7: "Minister", t6_w8: "vor.",
    t6_l1: "Kanzler", t6_r1: "Chef", t6_l2: "Minister", t6_r2: "Fachbereich", t6_l3: "Kabinett", t6_r3: "Runde",
    t6_sent: "Der Kanzler bestimmt die ___.", t6_qa2: "Richtlinien", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "In", t6_f2: "der", t6_f3: "Bundesregierung", t6_f4: "werden", t6_f5: "wichtige", t6_f6: "Entscheidungen", t6_f7: "für", t6_f8: "alle", t6_f9: "getroffen.",
    t6_tk1: "Der", t6_tk2: "Bundespräsident", t6_tk3: "ist", t6_tk4: "das", t6_tk5: "Staatsoberhaupt", t6_tk6: "der", t6_tk7: "Bundesrepublik", t6_tk8: "Deutschland.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Person", t6_bl2: "Titel", t6_i1: "Kanzler", t6_i2: "Regierungschef", t6_i3: "Minister", t6_i4: "Ressortleiter",
    t7_title: "Gemeinde", t7_text: "Politik vor Ort.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wer leitet eine Stadt?", t7_qa: "Bürgermeister", t7_qb: "König", t7_qc: "Kanzler", t7_qd: "Lehrer",
    t7_w1: "In", t7_w2: "der", t7_w3: "Gemeinde", t7_w4: "wird", t7_w5: "über", t7_w6: "Spielplätze", t7_w7: "und", t7_w8: "Schulen",
    t7_l1: "Stadt", t7_r1: "Nah", t7_l2: "Land", t7_r2: "Mittel", t7_l3: "Bund", t7_r3: "Fern",
    t7_sent: "Der Stadtrat trifft Entscheidungen für die ___.", t7_qa2: "Bürger", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Jeder", t7_f2: "Bürger", t7_f3: "kann", t7_f4: "sich", t7_f5: "in", t7_f6: "seiner", t7_f7: "Stadt", t7_f8: "politisch", t7_f9: "engagieren.",
    t7_tk1: "Bürgersprechstunden", t7_tk2: "bieten", t7_tk3: "die", t7_tk4: "Chance", t7_tk5: "direkt", t7_tk6: "mit", t7_tk7: "Politikern", t7_tk8: "zu", t7_tk9: "reden.", t7_tk10: "",
    t7_bl1: "Nah", t7_bl2: "Weit", t7_i1: "Spielplatz", t7_i2: "Autobahn", t7_i3: "Park", t7_i4: "Armee",
    t8_title: "Check", t8_text: "Bist du ein Demokrat?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was bedeutet Demokratie?", t8_qa: "Volksherrschaft", t8_qb: "Königsherrschaft", t8_qc: "Gar keine Regeln", t8_qd: "Nur einer bestimmt",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "gelernt", t8_w4: "wie", t8_w5: "wichtig", t8_w6: "Mitbestimmung", t8_w7: "für", t8_w8: "uns",
    t8_l1: "Wahl", t8_r1: "Zettel", t8_l2: "Freiheit", t8_r2: "Reden", t8_l3: "Recht", t8_r3: "Gesetz",
    t8_sent: "In der Demokratie zählt jede ___.", t8_qa2: "Stimme", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Demokratie", t8_f2: "muss", t8_f3: "jeden", t8_f4: "Tag", t8_f5: "neu", t8_f6: "gelebt", t8_f7: "und", t8_f8: "verteidigt", t8_f9: "werden.",
    t8_tk1: "Kompromisse", t8_tk2: "sind", t8_tk3: "in", t8_tk4: "der", t8_tk5: "Politik", t8_tk6: "nötig", t8_tk7: "um", t8_tk8: "Lösungen", t8_tk9: "zu", t8_tk10: "finden.",
    t8_bl1: "Demokratie", t8_bl2: "Diktatur", t8_i1: "Freiheit", t8_i2: "Zwang", t8_i3: "Wahl", t8_i4: "Verbot",
  },
};

export const DEMOKRATIE_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Grundgesetz", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wahlrecht", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Parteien", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Bundestag", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gewaltenteilung", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Bundeskanzler", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Gemeinde", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const MEDIEN_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Medien & Internet",
    t1_title: "Internet-Sicherheit", t1_text: "Sicher surfen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist ein sicheres Passwort?", t1_qa: "Mix aus Buchstaben, Zahlen, Zeichen", t1_qb: "Mein Vorname", t1_qc: "123456", t1_qd: "Passwort",
    t1_w1: "Ein", t1_w2: "gutes", t1_w3: "Passwort", t1_w4: "sollte", t1_w5: "man", t1_w6: "niemals", t1_w7: "an", t1_w8: "andere",
    t1_l1: "Sicher", t1_r1: "Zahlenmix", t1_l2: "Unsicher", t1_r2: "Name", t1_l3: "Gefahr", t1_r3: "Virus",
    t1_sent: "Gib niemals deine ___ online preis.", t1_qa2: "Adresse", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Virenscanner", t1_f2: "und", t1_f3: "Firewalls", t1_f4: "schützen", t1_f5: "deinen", t1_f6: "Computer", t1_f7: "vor", t1_f8: "Angriffen.", t1_f9: "",
    t1_tk1: "Verdächtige", t1_tk2: "E-Mails", t1_tk3: "sollte", t1_tk4: "man", t1_tk5: "sofort", t1_tk6: "löschen", t1_tk7: "und", t1_tk8: "nicht", t1_tk9: "öffnen.", t1_tk10: "",
    t1_bl1: "Sicher", t1_bl2: "Gefahr", t1_i1: "Großbuchstabe", t1_i2: "Virus", t1_i3: "Sonderzeichen", t1_i4: "Spam",
    t2_title: "Datenschutz", t2_text: "Meine Daten gehören mir.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was sind persönliche Daten?", t2_qa: "Name, Adresse, Telefonnummer", t2_qb: "Lieblingsfarbe", t2_qc: "Wetter", t2_qd: "Automarken",
    t2_w1: "Überlege", t2_w2: "dir", t2_w3: "gut", t2_w4: "welche", t2_w5: "Fotos", t2_w6: "du", t2_w7: "im", t2_w8: "Netz",
    t2_l1: "Privat", t2_r1: "Haus", t2_l2: "Öffentlich", t2_r2: "Straße", t2_l3: "Löschen", t2_r3: "Weg",
    t2_sent: "Das Recht am eigenen ___ ist wichtig.", t2_qa2: "Bild", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Viele", t2_f2: "Apps", t2_f3: "sammeln", t2_f4: "im", t2_f5: "Hintergrund", t2_f6: "heimlich", t2_f7: "viele", t2_f8: "Daten", t2_f9: "über",
    t2_tk1: "Du", t2_tk2: "musst", t2_tk3: "immer", t2_tk4: "um", t2_tk5: "Erlaubnis", t2_tk6: "fragen", t2_tk7: "bevor", t2_tk8: "du", t2_tk9: "andere", t2_tk10: "fotografierst.",
    t2_bl1: "Privat", t2_bl2: "Öffentlich", t2_i1: "Tagebuch", t2_i2: "Zeitung", t2_i3: "Chat", t2_i4: "Plakat",
    t3_title: "Social Media", t3_text: "Posten und Chatten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Ab wie viel Jahren ist WhatsApp meist?", t3_qa: "16 (offiziell)", t3_qb: "5", t3_qc: "100", t3_qd: "Ab Geburt",
    t3_w1: "In", t3_w2: "sozialen", t3_w3: "Netzwerken", t3_w4: "kann", t3_w5: "man", t3_w6: "schnell", t3_w7: "mit", t3_w8: "Freunden",
    t3_l1: "Like", t3_r1: "Daumen", t3_l2: "Post", t3_r2: "Beitrag", t3_l3: "Chat", t3_r3: "Nachricht",
    t3_sent: "Ein Shitstorm ist sehr ___.", t3_qa2: "verletzend", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Cybermobbing", t3_f2: "ist", t3_f3: "eine", t3_f4: "Straftat", t3_f5: "und", t3_f6: "kann", t3_f7: "schlimme", t3_f8: "Folgen", t3_f9: "haben.",
    t3_tk1: "Melde", t3_tk2: "unangemessene", t3_tk3: "Inhalte", t3_tk4: "sofort", t3_tk5: "bei", t3_tk6: "einem", t3_tk7: "Erwachsenen", t3_tk8: "oder", t3_tk9: "Lehrer.", t3_tk10: "",
    t3_bl1: "Positiv", t3_bl2: "Negativ", t3_i1: "Kontakt", t3_i2: "Mobbing", t3_i3: "Teilen", t3_i4: "Beleidigung",
    t4_title: "Fake News", t4_text: "Glaub nicht alles.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was sind Fake News?", t4_qa: "Erfundene Nachrichten", t4_qb: "Wetterbericht", t4_qc: "Schulbuch", t4_qd: "Sportergebnisse",
    t4_w1: "Fake", t4_w2: "News", t4_w3: "werden", t4_w4: "oft", t4_w5: "genutzt", t4_w6: "um", t4_w7: "Menschen", t4_w8: "zu",
    t4_l1: "Quelle", t4_r1: "Autor", t4_l2: "Inhalt", t4_r2: "Text", t4_l3: "Ziel", t4_r3: "Absicht",
    t4_sent: "Prüfe immer die ___ der Information.", t4_qa2: "Quelle", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Suche", t4_f2: "im", t4_f3: "Impressum", t4_f4: "nach", t4_f5: "der", t4_f6: "verantwortlichen", t4_f7: "Person", t4_f8: "einer", t4_f9: "Webseite.",
    t4_tk1: "Ein", t4_tk2: "kritisches", t4_tk3: "Hinterfragen", t4_tk4: "von", t4_tk5: "Schlagzeilen", t4_tk6: "ist", t4_tk7: "im", t4_tk8: "Internet", t4_tk9: "überlebenswichtig.", t4_tk10: "",
    t4_bl1: "Echt", t4_bl2: "Fake", t4_i1: "Bericht", t4_i2: "Gerücht", t4_i3: "Fakt", t4_i4: "Lüge",
    t5_title: "Copyright", t5_text: "Urheberrecht.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Darf man Bilder einfach kopieren?", t5_qa: "Nein, nur mit Erlaubnis", t5_qb: "Ja, alles gehört allen", t5_qc: "Nur nachts", t5_qd: "Nur wenn sie klein sind",
    t5_w1: "Wer", t5_w2: "ein", t5_w3: "Bild", t5_w4: "gemacht", t5_w5: "hat", t5_w6: "ist", t5_w7: "der", t5_w8: "Urheber",
    t5_l1: "Kopie", t5_r1: "Falsch", t5_l2: "Original", t5_r2: "Echt", t5_l3: "Lizenz", t5_r3: "Erlaubnis",
    t5_sent: "Der Urheber hat das ___ am Werk.", t5_qa2: "Recht", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Musik", t5_f2: "und", t5_f3: "Filme", t5_f4: "darf", t5_f5: "man", t5_f6: "nicht", t5_f7: "illegal", t5_f8: "aus", t5_f9: "dem",
    t5_tk1: "Zitate", t5_tk2: "müssen", t5_tk3: "immer", t5_tk4: "mit", t5_tk5: "einer", t5_tk6: "korrekten", t5_tk7: "Quellenangabe", t5_tk8: "gekennzeichnet", t5_tk9: "werden.", t5_tk10: "",
    t5_bl1: "Erlaubt", t5_bl2: "Verboten", t5_i1: "Eigener Text", t5_i2: "Raubkopie", t5_i3: "Freies Bild", t5_i4: "Klau",
    t6_title: "Suchtgefahr", t6_text: "Wie viel ist zu viel?", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Woran erkennt man Onlinesucht?", t6_qa: "Man vernachlässigt Freunde und Schule", t6_qb: "Man hat viel Spaß", t6_qc: "Man lernt viel", t6_qd: "Man schläft gut",
    t6_w1: "Zu", t6_w2: "viel", t6_w3: "Zeit", t6_w4: "vor", t6_w5: "dem", t6_w6: "Bildschirm", t6_w7: "kann", t6_w8: "unserem",
    t6_l1: "Zocken", t6_r1: "Online", t6_l2: "Reallife", t6_r2: "Draußen", t6_l3: "Pause", t6_r3: "Erholung",
    t6_sent: "Medienzeiten sollten ___ sein.", t6_qa2: "begrenzt", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Sport", t6_f2: "und", t6_f3: "Treffen", t6_f4: "mit", t6_f5: "echten", t6_f6: "Freunden", t6_f7: "sind", t6_f8: "ein", t6_f9: "wichtiger",
    t6_tk1: "Stelle", t6_tk2: "dir", t6_tk3: "einen", t6_tk4: "Wecker", t6_tk5: "um", t6_tk6: "deine", t6_tk7: "Zeit", t6_tk8: "im", t6_tk9: "Internet", t6_tk10: "zu",
    t6_bl1: "Aktiv", t6_bl2: "Passiv", t6_i1: "Sport", t6_i2: "Fernsehen", t6_i3: "Lesen", t6_i4: "Handy",
    t7_title: "Werbung", t7_text: "Kauf mich!", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was will Werbung?", t7_qa: "Produkte verkaufen", t7_qb: "Schenken", t7_qc: "Informieren (nur)", t7_qd: "Ärgern",
    t7_w1: "Werbung", t7_w2: "verspricht", t7_w3: "uns", t7_w4: "oft", t7_w5: "Dinge", t7_w6: "die", t7_w7: "gar", t7_w8: "nicht",
    t7_l1: "Anzeige", t7_r1: "Zeitung", t7_l2: "Influencer", t7_r2: "Video", t7_l3: "Slogan", t7_r3: "Spruch",
    t7_sent: "Influencer machen oft versteckte ___.", t7_qa2: "Werbung", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Lerne", t7_f2: "zwischen", t7_f3: "echter", t7_f4: "Information", t7_f5: "und", t7_f6: "bezahlter", t7_f7: "Werbung", t7_f8: "zu", t7_f9: "unterscheiden.",
    t7_tk1: "Werbebanner", t7_tk2: "auf", t7_tk3: "Webseiten", t7_tk4: "versuchen", t7_tk5: "deine", t7_tk6: "Aufmerksamkeit", t7_tk7: "zu", t7_tk8: "erregen.", t7_tk9: "", t7_tk10: "",
    t7_bl1: "Produkt", t7_bl2: "Marke", t7_i1: "Schuh", t7_i2: "Adidas", t7_i3: "Cola", t7_i4: "Getränk",
    t8_title: "Check", t8_text: "Medienprofi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist ein Browser?", t8_qa: "Programm zum Surfen", t8_qb: "Ein Spiel", t8_qc: "Ein Virus", t8_qd: "Ein Computer",
    t8_w1: "Medienkompetenz", t8_w2: "bedeutet", t8_w3: "sicher", t8_w4: "und", t8_w5: "schlau", t8_w6: "mit", t8_w7: "Technik", t8_w8: "umzugehen.",
    t8_l1: "Browser", t8_r1: "Chrome", t8_l2: "Link", t8_r2: "Adresse", t8_l3: "Webseite", t8_r3: "Inhalt",
    t8_sent: "Internet vergisst ___.", t8_qa2: "nichts", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "gelernt", t8_f4: "dass", t8_f5: "das", t8_f6: "Internet", t8_f7: "viele", t8_f8: "Chancen", t8_f9: "und",
    t8_tk1: "Ein", t8_tk2: "höflicher", t8_tk3: "Umgang", t8_tk4: "im", t8_tk5: "Chat", t8_tk6: "nennt", t8_tk7: "man", t8_tk8: "auch", t8_tk9: "Netiquette.", t8_tk10: "",
    t8_bl1: "Hardware", t8_bl2: "Software", t8_i1: "Maus", t8_i2: "Browser", t8_i3: "Monitor", t8_i4: "App",
  },
};

export const MEDIEN_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Internet-Sicherheit", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Datenschutz", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Social Media", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Fake News", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Copyright", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Suchtgefahr", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Werbung", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const KLIMA_GLOB_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Klima & Erderwärmung",
    t1_title: "Treibhauseffekt", t1_text: "Die Erde im Glashaus.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Welches Gas ist Hauptverursacher?", t1_qa: "CO2 (Kohlendioxid)", t1_qb: "Sauerstoff", t1_qc: "Stickstoff", t1_qd: "Edelgas",
    t1_w1: "Die", t1_w2: "Treibhausgase", t1_w3: "lassen", t1_w4: "die", t1_w5: "Wärme", t1_w6: "der", t1_w7: "Sonne", t1_w8: "nicht",
    t1_l1: "Sonne", t1_r1: "Licht", t1_l2: "Erde", t1_r2: "Wärme", t1_l3: "CO2", t1_r3: "Filter",
    t1_sent: "Gase wirken wie eine ___.", t1_qa2: "Schutzschicht", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Ohne", t1_f2: "den", t1_f3: "natürlichen", t1_f4: "Treibhauseffekt", t1_f5: "wäre", t1_f6: "es", t1_f7: "eisig", t1_f8: "kalt", t1_f9: "bei",
    t1_tk1: "Durch", t1_tk2: "das", t1_tk3: "Verbrennen", t1_tk4: "von", t1_tk5: "Kohle", t1_tk6: "und", t1_tk7: "Öl", t1_tk8: "entsteht", t1_tk9: "viel", t1_tk10: "zu",
    t1_bl1: "Gas", t1_bl2: "Folge", t1_i1: "Methan", t1_i2: "Hitze", t1_i3: "Ozon", t1_i4: "Sturm",
    t2_title: "Eisschmelze", t2_text: "Wenn die Pole tauen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was passiert mit dem Meeresspiegel?", t2_qa: "Er steigt an", t2_qb: "Er sinkt", t2_qc: "Er bleibt gleich", t2_qd: "Er wird süß",
    t2_w1: "Das", t2_w2: "Eis", t2_w3: "an", t2_w4: "Nord-", t2_w5: "und", t2_w6: "Südpol", t2_w7: "schmilzt", t2_w8: "immer",
    t2_l1: "Arktis", t2_r1: "Norden", t2_l2: "Antarktis", t2_r2: "Süden", t2_l3: "Gletscher", t2_r3: "Berge",
    t2_sent: "Eisberge schwimmen im ___.", t2_qa2: "Ozean", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Eisbären", t2_f2: "verlieren", t2_f3: "ihren", t2_f4: "Lebensraum", t2_f5: "wenn", t2_f6: "das", t2_f7: "Meereis", t2_f8: "komplett", t2_f9: "verschwindet.",
    t2_tk1: "Wenn", t2_tk2: "Gletscher", t2_tk3: "schmelzen", t2_tk4: "fehlt", t2_tk5: "vielen", t2_tk6: "Menschen", t2_tk7: "wichtiges", t2_tk8: "Trinkwasser.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Eis", t2_bl2: "Wasser", t2_i1: "Gletscher", t2_i2: "Meer", t2_i3: "Eisberg", t2_i4: "Fluss",
    t3_title: "Wetterextreme", t3_text: "Sturm und Dürre.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was nimmt durch den Klimawandel zu?", t3_qa: "Starkregen und Hitze", t3_qb: "Schneefall im Sommer", t3_qc: "Nichts", t3_qd: "Sonnenschein (nur)",
    t3_w1: "Starke", t3_w2: "Stürme", t3_w3: "und", t3_w4: "Überschwemmungen", t3_w5: "treten", t3_w6: "jetzt", t3_w7: "viel", t3_w8: "häufiger",
    t3_l1: "Dürre", t3_r1: "Trocken", t3_l2: "Flut", t3_r2: "Nass", t3_l3: "Sturm", t3_r3: "Wind",
    t3_sent: "Pflanzen vertrocknen bei ___.", t3_qa2: "Dürre", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "In", t3_f2: "vielen", t3_f3: "Regionen", t3_f4: "der", t3_f5: "Welt", t3_f6: "können", t3_f7: "Bauern", t3_f8: "kaum", t3_f9: "noch",
    t3_tk1: "Die", t3_tk2: "Landwirtschaft", t3_tk3: "muss", t3_tk4: "sich", t3_tk5: "an", t3_tk6: "das", t3_tk7: "neue", t3_tk8: "und", t3_tk9: "extreme", t3_tk10: "Wetter",
    t3_bl1: "Nass", t3_bl2: "Trocken", t3_i1: "Hagel", t3_i2: "Wüste", t3_i3: "Regen", t3_i4: "Hitze",
    t4_title: "Erneuerbare Energien", t4_text: "Saubere Kraft.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist eine saubere Energiequelle?", t4_qa: "Wind und Sonne", t4_qb: "Kohle", t4_qc: "Erdöl", t4_qd: "Erdgas",
    t4_w1: "Windräder", t4_w2: "nutzen", t4_w3: "die", t4_w4: "Kraft", t4_w5: "der", t4_w6: "Luft", t4_w7: "um", t4_w8: "Strom",
    t4_l1: "Sonne", t4_r1: "Solar", t4_l2: "Wind", t4_r2: "Rad", t4_l3: "Wasser", t4_r3: "Kraftwerk",
    t4_sent: "Solarzellen machen Strom aus ___.", t4_qa2: "Licht", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Wir", t4_f2: "müssen", t4_f3: "aufhören", t4_f4: "fossile", t4_f5: "Brennstoffe", t4_f6: "wie", t4_f7: "Braunkohle", t4_f8: "zu", t4_f9: "verbrennen.",
    t4_tk1: "Wasserkraftwerke", t4_tk2: "nutzen", t4_tk3: "die", t4_tk4: "Strömung", t4_tk5: "von", t4_tk6: "Flüssen", t4_tk7: "für", t4_tk8: "umweltfreundliche", t4_tk9: "Energie.", t4_tk10: "",
    t4_bl1: "Sauber", t4_bl2: "Dreckig", t4_i1: "Sonne", t4_i2: "Kohle", t4_i3: "Wind", t4_i4: "Öl",
    t5_title: "Ozeane", t5_text: "Die blauen Lungen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was nehmen Meere auf?", t5_qa: "Viel CO2 und Wärme", t5_qb: "Müll (nur)", t5_qc: "Sauerstoff (nur)", t5_qd: "Fische",
    t5_w1: "Die", t5_w2: "Ozeane", t5_w3: "speichern", t5_w4: "riesige", t5_w5: "Mengen", t5_w6: "an", t5_w7: "Energie", t5_w8: "aus",
    t5_l1: "Meer", t5_r1: "Salz", t5_l2: "Alge", t5_r2: "Sauerstoff", t5_l3: "Koralle", t5_r3: "Riff",
    t5_sent: "Korallen sterben bei zu viel ___.", t5_qa2: "Wärme", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Wenn", t5_f2: "das", t5_f3: "Wasser", t5_f4: "wärmer", t5_f5: "wird", t5_f6: "dehnen", t5_f7: "sich", t5_f8: "die", t5_f9: "Meere",
    t5_tk1: "Plankton", t5_tk2: "im", t5_tk3: "Meer", t5_tk4: "produziert", t5_tk5: "einen", t5_tk6: "großen", t5_tk7: "Teil", t5_tk8: "unseres", t5_tk9: "Sauerstoffs.", t5_tk10: "",
    t5_bl1: "Bewohner", t5_bl2: "Gefahr", t5_i1: "Wal", t5_i2: "Müll", t5_i3: "Fisch", t5_i4: "Hitze",
    t6_title: "Mobilität", t6_text: "Unterwegs für das Klima.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welches Verkehrsmittel ist am saubersten?", t6_qa: "Fahrrad und Bahn", t6_qb: "Flugzeug", t6_qc: "LKW", t6_qd: "Sportwagen",
    t6_w1: "Flugzeuge", t6_w2: "stoßen", t6_w3: "besonders", t6_w4: "viele", t6_w5: "Schadstoffe", t6_w6: "hoch", t6_w7: "in", t6_w8: "der",
    t6_l1: "Bahn", t6_r1: "Schiene", t6_l2: "Auto", t6_r2: "Straße", t6_l3: "Fahrrad", t6_r3: "Weg",
    t6_sent: "Züge fahren oft mit ___.", t6_qa2: "Strom", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Elektroautos", t6_f2: "sind", t6_f3: "leiser", t6_f4: "und", t6_f5: "stoßen", t6_f6: "beim", t6_f7: "Fahren", t6_f8: "kein", t6_f9: "Abgas",
    t6_tk1: "Kurze", t6_tk2: "Strecken", t6_tk3: "kann", t6_tk4: "man", t6_tk5: "prima", t6_tk6: "zu", t6_tk7: "Fuß", t6_tk8: "oder", t6_tk9: "mit", t6_tk10: "dem",
    t6_bl1: "Sauber", t6_bl2: "Abgas", t6_i1: "Fahrrad", t6_i2: "Flugzeug", t6_i3: "Bus", t6_i4: "Auto",
    t7_title: "Wald & Klima", t7_text: "Bäume als Retter.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Warum sind Wälder wichtig?", t7_qa: "Sie speichern CO2", t7_qb: "Sie sind dunkel", t7_qc: "Man kann dort grillen", t7_qd: "Holz brennt gut",
    t7_w1: "Der", t7_w2: "Regenwald", t7_w3: "im", t7_w4: "Amazonas", t7_w5: "ist", t7_w6: "für", t7_w7: "das", t7_w8: "Weltklima",
    t7_l1: "Blatt", t7_r1: "Gas", t7_l2: "Wurzel", t7_r2: "Wasser", t7_l3: "Stamm", t7_r3: "Holz",
    t7_sent: "Bäume produzieren ___.", t7_qa2: "Sauerstoff", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Wenn", t7_f2: "Wälder", t7_f3: "abgeholzt", t7_f4: "werden", t7_f5: "gelangt", t7_f6: "das", t7_f7: "gespeicherte", t7_f8: "CO2", t7_f9: "wieder",
    t7_tk1: "Aufforstung", t7_tk2: "bedeutet", t7_tk3: "dass", t7_tk4: "viele", t7_tk5: "neue", t7_tk6: "Bäume", t7_tk7: "gepflanzt", t7_tk8: "werden.", t7_tk9: "", t7_tk10: "",
    t7_bl1: "Wald", t7_bl2: "Stadt", t7_i1: "Baum", t7_i2: "Haus", t7_i3: "Moos", t7_i4: "Straße",
    t8_title: "Check", t8_text: "Klimaschützer!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was kannst du tun?", t8_qa: "Strom sparen und Müll trennen", t8_qb: "Licht anlassen", t8_qc: "Viel Fleisch essen", t8_qd: "Auto fahren",
    t8_w1: "Klimaschutz", t8_w2: "fängt", t8_w3: "bei", t8_w4: "jedem", t8_w5: "von", t8_w6: "uns", t8_w7: "im", t8_w8: "Alltag",
    t8_l1: "Sparen", t8_r1: "Energie", t8_l2: "Trennen", t8_r2: "Müll", t8_l3: "Schützen", t8_r3: "Natur",
    t8_sent: "Zusammen können wir etwas ___.", t8_qa2: "ändern", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "nur", t8_f4: "diese", t8_f5: "eine", t8_f6: "Erde", t8_f7: "und", t8_f8: "müssen", t8_f9: "sie",
    t8_tk1: "Politik", t8_tk2: "und", t8_tk3: "Wirtschaft", t8_tk4: "müssen", t8_tk5: "jetzt", t8_tk6: "schnell", t8_tk7: "und", t8_tk8: "mutig", t8_tk9: "handeln.", t8_tk10: "",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Recycling", t8_i2: "Verschwendung", t8_i3: "Sparen", t8_i4: "Dreck",
  },
};

export const KLIMA_GLOB_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Treibhauseffekt", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Eisschmelze", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wetterextreme", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Erneuerbare Energien", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Ozeane", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Mobilität", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Wald & Klima", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const ERDE_WELT_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Kontinente & Weltmeere",
    t1_title: "Die Kontinente", t1_text: "Unsere Landmassen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie viele Kontinente gibt es?", t1_qa: "7", t1_qb: "3", t1_qc: "12", t1_qd: "100",
    t1_w1: "Afrika", t1_w2: "Europa", t1_w3: "Asien", t1_w4: "Amerika", t1_w5: "Ozeanien", t1_w6: "und", t1_w7: "die", t1_w8: "Antarktis.",
    t1_l1: "Europa", t1_r1: "Eiffelturm", t1_l2: "Afrika", t1_r2: "Löwe", t1_l3: "Asien", t1_r3: "Mauer",
    t1_sent: "Asien ist der ___ Kontinent.", t1_qa2: "größte", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Früher", t1_f2: "hingen", t1_f3: "alle", t1_f4: "Kontinente", t1_f5: "zusammen", t1_f6: "in", t1_f7: "einem", t1_f8: "Riesenkontinent", t1_f9: "namens",
    t1_tk1: "Die", t1_tk2: "Kontinentalplatten", t1_tk3: "bewegen", t1_tk4: "sich", t1_tk5: "jedes", t1_tk6: "Jahr", t1_tk7: "einige", t1_tk8: "Zentimeter.", t1_tk9: "", t1_tk10: "",
    t1_bl1: "Norden", t1_bl2: "Süden", t1_i1: "Europa", t1_i2: "Australien", t1_i3: "Asien", t1_i4: "Antarktis",
    t2_title: "Weltmeere", t2_text: "Viel blaues Wasser.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welcher ist der größte Ozean?", t2_qa: "Pazifik", t2_qb: "Atlantik", t2_qc: "Indik", t2_qd: "Nordsee",
    t2_w1: "Die", t2_w2: "Meere", t2_w3: "bedecken", t2_w4: "mehr", t2_w5: "als", t2_w6: "siebzig", t2_w7: "Prozent", t2_w8: "unserer",
    t2_l1: "Pazifik", t2_r1: "Riesig", t2_l2: "Atlantik", t2_r2: "Zwischen", t2_l3: "Arktik", t2_r3: "Kalt",
    t2_sent: "Meerwasser schmeckt ___.", t2_qa2: "salzig", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Im", t2_f2: "Marianengraben", t2_f3: "ist", t2_f4: "das", t2_f5: "Meer", t2_f6: "über", t2_f7: "elf", t2_f8: "Kilometer", t2_f9: "tief.",
    t2_tk1: "Meeresströmungen", t2_tk2: "wie", t2_tk3: "der", t2_tk4: "Golfstrom", t2_tk5: "verteilen", t2_tk6: "die", t2_tk7: "Wärme", t2_tk8: "auf", t2_tk9: "der", t2_tk10: "Erde.",
    t2_bl1: "Ozean", t2_bl2: "Nebenmeer", t2_i1: "Pazifik", t2_i2: "Ostsee", t2_i3: "Atlantik", t2_i4: "Nordsee",
    t3_title: "Afrika", t3_text: "Wüste und Savanne.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wie heißt die größte Wüste?", t3_qa: "Sahara", t3_qb: "Gobi", t3_qc: "Atacama", t3_qd: "Eiswüste",
    t3_w1: "In", t3_w2: "der", t3_w3: "Savanne", t3_w4: "leben", t3_w5: "Elefanten", t3_w6: "Giraffen", t3_w7: "und", t3_w8: "viele",
    t3_l1: "Norden", t3_r1: "Sahara", t3_l2: "Mitte", t3_r2: "Dschungel", t3_l3: "Süden", t3_r3: "Kapstadt",
    t3_sent: "Der Nil ist der längste ___.", t3_qa2: "Fluss", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Der", t3_f2: "Kilimandscharo", t3_f3: "ist", t3_f4: "der", t3_f5: "höchste", t3_f6: "Berg", t3_f7: "auf", t3_f8: "dem", t3_f9: "afrikanischen",
    t3_tk1: "Afrika", t3_tk2: "ist", t3_tk3: "die", t3_tk4: "Wiege", t3_tk5: "der", t3_tk6: "Menschheit", t3_tk7: "wo", t3_tk8: "alles", t3_tk9: "begann.", t3_tk10: "",
    t3_bl1: "Tier", t3_bl2: "Ort", t3_i1: "Löwe", t3_i2: "Sahara", t3_i3: "Zebra", t3_i4: "Kairo",
    t4_title: "Asien", t4_text: "Kontinent der Superlative.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Welches Gebirge ist das höchste?", t4_qa: "Himalaya", t4_qb: "Alpen", t4_qc: "Anden", t4_qd: "Ural",
    t4_w1: "Asien", t4_w2: "ist", t4_w3: "der", t4_w4: "bevölkerungsreichste", t4_w5: "Kontinent", t4_w6: "auf", t4_w7: "unserer", t4_w8: "Erde.",
    t4_l1: "China", t4_r1: "Mauer", t4_l2: "Indien", t4_r2: "Ganges", t4_l3: "Japan", t4_r3: "Insel",
    t4_sent: "Der Mount Everest ist der höchste ___.", t4_qa2: "Berg", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Das", t4_f2: "Tote", t4_f3: "Meer", t4_f4: "liegt", t4_f5: "so", t4_f6: "tief", t4_f7: "wie", t4_f8: "kein", t4_f9: "anderer",
    t4_tk1: "In", t4_tk2: "Asien", t4_tk3: "gibt", t4_tk4: "es", t4_tk5: "viele", t4_tk6: "verschiedene", t4_tk7: "Kulturen", t4_tk8: "und", t4_tk9: "Sprachen.", t4_tk10: "",
    t4_bl1: "Land", t4_bl2: "Stadt", t4_i1: "China", t4_i2: "Tokio", t4_i3: "Indien", t4_i4: "Peking",
    t5_title: "Amerika", t5_text: "Nord und Süd.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Welcher Fluss fließt durch Brasilien?", t5_qa: "Amazonas", t5_qb: "Mississippi", t5_qc: "Donau", t5_qd: "Rhein",
    t5_w1: "Die", t5_w2: "Anden", t5_w3: "ziehen", t5_w4: "sich", t5_w5: "entlang", t5_w6: "der", t5_w7: "ganzen", t5_w8: "Westküste",
    t5_l1: "Nord", t5_r1: "USA", t5_l2: "Mittel", t5_r2: "Mexiko", t5_l3: "Süd", t5_r3: "Brasilien",
    t5_sent: "In New York steht die ___.", t5_qa2: "Freiheitsstatue", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Der", t5_f2: "Grand", t5_f3: "Canyon", t5_f4: "ist", t5_f5: "eine", t5_f6: "riesige", t5_f7: "Schlucht", t5_f8: "im", t5_f9: "Westen",
    t5_tk1: "In", t5_tk2: "Südamerika", t5_tk3: "befindet", t5_tk4: "sich", t5_tk5: "der", t5_tk6: "größte", t5_tk7: "zusammenhängende", t5_tk8: "Regenwald.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Natur", t5_bl2: "Stadt", t5_i1: "Amazonas", t5_i2: "New York", t5_i3: "Anden", t5_i4: "Rio",
    t6_title: "Australien", t6_text: "Der Inselkontinent.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie heißt das Wahrzeichen von Sydney?", t6_qa: "Opernhaus", t6_qb: "Eiffelturm", t6_qc: "Pyramide", t6_qd: "Tower",
    t6_w1: "Australien", t6_w2: "ist", t6_w3: "bekannt", t6_w4: "für", t6_w5: "seine", t6_w6: "einzigartige", t6_w7: "Tierwelt", t6_w8: "mit",
    t6_l1: "Outback", t6_r1: "Wüste", t6_l2: "Riff", t6_r2: "Koralle", t6_l3: "Tier", t6_r3: "Koala",
    t6_sent: "Kängurus leben in der ___.", t6_qa2: "Wildnis", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Das", t6_f2: "Great", t6_f3: "Barrier", t6_f4: "Reef", t6_f5: "ist", t6_f6: "das", t6_f7: "größte", t6_f8: "Korallenriff", t6_f9: "der",
    t6_tk1: "Die", t6_tk2: "Ureinwohner", t6_tk3: "Australiens", t6_tk4: "werden", t6_tk5: "oft", t6_tk6: "als", t6_tk7: "Aborigines", t6_tk8: "bezeichnet.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Tier", t6_bl2: "Ort", t6_i1: "Koala", t6_i2: "Sydney", t6_i3: "Känguru", t6_i4: "Outback",
    t7_title: "Antarktis", t7_text: "Eisiges Ende.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wer lebt an der Antarktis?", t7_qa: "Pinguine", t7_qb: "Eisbären", t7_qc: "Elefanten", t7_qd: "Tiger",
    t7_w1: "Die", t7_w2: "Antarktis", t7_w3: "ist", t7_w4: "fast", t7_w5: "vollständig", t7_w6: "von", t7_w7: "einem", t7_w8: "dicken",
    t7_l1: "Eis", t7_r1: "Dick", t7_l2: "Wind", t7_r2: "Stark", t7_l3: "Süd", t7_r3: "Pol",
    t7_sent: "In der Antarktis ist es extrem ___.", t7_qa2: "kalt", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Nur", t7_f2: "Forscher", t7_f3: "leben", t7_f4: "zeitweise", t7_f5: "in", t7_f6: "speziellen", t7_f7: "Stationen", t7_f8: "im", t7_f9: "Eis.",
    t7_tk1: "Die", t7_tk2: "Antarktis", t7_tk3: "ist", t7_tk4: "der", t7_tk5: "trockenste", t7_tk6: "und", t7_tk7: "windigste", t7_tk8: "Kontinent", t7_tk9: "der", t7_tk10: "Erde.",
    t7_bl1: "Eis", t7_bl2: "Tier", t7_i1: "Gletscher", t7_i2: "Pinguin", t7_i3: "Eisschelf", t7_i4: "Robbe",
    t8_title: "Check", t8_text: "Weltreise beendet?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wo liegt Deutschland?", t8_qa: "Europa", t8_qb: "Asien", t8_qc: "Afrika", t8_qd: "Amerika",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "ganze", t8_w5: "Welt", t8_w6: "auf", t8_w7: "unserer Karte", t8_w8: "besucht.",
    t8_l1: "Land", t8_r1: "Kontinent", t8_l2: "Wasser", t8_r2: "Ozean", t8_l3: "Luft", t8_r3: "Atmosphäre",
    t8_sent: "Die Erde ist ein blauer ___.", t8_qa2: "Planet", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Jeder", t8_f2: "Ort", t8_f3: "auf", t8_f4: "der", t8_f5: "Welt", t8_f6: "hat", t8_f7: "seine", t8_f8: "eigene", t8_f9: "Schönheit.",
    t8_tk1: "Geografie", t8_tk2: "hilft", t8_tk3: "uns", t8_tk4: "die", t8_tk5: "Zusammenhänge", t8_tk6: "auf", t8_tk7: "unserer", t8_tk8: "Erde", t8_tk9: "zu", t8_tk10: "verstehen.",
    t8_bl1: "Norden", t8_bl2: "Süden", t8_i1: "Arktis", t8_i2: "Antarktis", t8_i3: "Europa", t8_i4: "Australien",
  },
};

export const ERDE_WELT_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die Kontinente", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Weltmeere", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Afrika", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Asien", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Amerika", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Australien", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Antarktis", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const OPTIK_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Licht & Schatten",
    t1_title: "Lichtquellen", t1_text: "Woher kommt das Licht?", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist eine natürliche Lichtquelle?", t1_qa: "Die Sonne", t1_qb: "Die Taschenlampe", t1_qc: "Der Fernseher", t1_qd: "Die LED",
    t1_w1: "Licht", t1_w2: "breitet", t1_w3: "sich", t1_w4: "von", t1_w5: "einer", t1_w6: "Quelle", t1_w7: "geradlinig", t1_w8: "nach",
    t1_l1: "Natur", t1_r1: "Sonne", t1_l2: "Technik", t1_r2: "Lampe", t1_l3: "Tier", t1_r3: "Glühwurm",
    t1_sent: "Sterne sind glühende ___.", t1_qa2: "Gaskugeln", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Der", t1_f2: "Mond", t1_f3: "leuchtet", t1_f4: "nicht", t1_f5: "selbst", t1_f6: "sondern", t1_f7: "reflektiert", t1_f8: "nur", t1_f9: "das",
    t1_tk1: "Licht", t1_tk2: "ist", t1_tk3: "unglaublich", t1_tk4: "schnell", t1_tk5: "und", t1_tk6: "braucht", t1_tk7: "kein", t1_tk8: "Medium", t1_tk9: "zum", t1_tk10: "Reisen.",
    t1_bl1: "Heiß", t1_bl2: "Kalt", t1_i1: "Sonne", t1_i2: "Mond", t1_i3: "Feuer", t1_i4: "Spiegel",
    t2_title: "Schattenbildung", t2_text: "Licht wird blockiert.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wann ist ein Schatten am kürzesten?", t2_qa: "Mittags (Sonne steht hoch)", t2_qb: "Morgens", t2_qc: "Abends", t2_qd: "Nachts",
    t2_w1: "Ein", t2_w2: "Schatten", t2_w3: "entsteht", t2_w4: "immer", t2_w5: "dort", t2_w6: "wo", t2_w7: "kein", t2_w8: "Licht",
    t2_l1: "Licht", t2_r1: "Vorne", t2_l2: "Gegenstand", t2_r2: "Mitte", t2_l3: "Schatten", t2_r3: "Hinten",
    t2_sent: "Ein Schatten entsteht hinter einem ___.", t2_qa2: "Hindernis", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "In", t2_f2: "der", t2_f3: "Mitte", t2_f4: "ist", t2_f5: "der", t2_f6: "Kernschatten", t2_f7: "am", t2_f8: "dunkelsten.", t2_f9: "",
    t2_tk1: "Wenn", t2_tk2: "die", t2_tk3: "Lichtquelle", t2_tk4: "größer", t2_tk5: "ist", t2_tk6: "entsteht", t2_tk7: "auch", t2_tk8: "ein", t2_tk9: "hellerer", t2_tk10: "Halbschatten.",
    t2_bl1: "Dunkel", t2_bl2: "Hell", t2_i1: "Kernschatten", t2_i2: "Halbschatten", t2_i3: "Schatten", t2_i4: "Licht",
    t3_title: "Reflexion", t3_text: "Das Spiegelbild.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was reflektiert Licht am besten?", t3_qa: "Glatte, helle Flächen", t3_qb: "Schwarzer Samt", t3_qc: "Ein Loch", t3_qd: "Wasser (dreckig)",
    t3_w1: "Der", t3_w2: "Einfallswinkel", t3_w3: "ist", t3_w4: "immer", t3_w5: "genauso", t3_w6: "groß", t3_w7: "wie", t3_w8: "der",
    t3_l1: "Spiegel", t3_r1: "Glatt", t3_l2: "Wand", t3_r2: "Rau", t3_l3: "See", t3_r3: "Still",
    t3_sent: "Ein Spiegel wirft das Licht ___.", t3_qa2: "zurück", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Wir", t3_f2: "sehen", t3_f3: "Gegenstände", t3_f4: "nur", t3_f5: "weil", t3_f6: "sie", t3_f7: "Licht", t3_f8: "in", t3_f9: "unser",
    t3_tk1: "Ein", t3_tk2: "Periskop", t3_tk3: "nutzt", t3_tk4: "Spiegel", t3_tk5: "um", t3_tk6: "um", t3_tk7: "die", t3_tk8: "Ecke", t3_tk9: "zu", t3_tk10: "schauen.",
    t3_bl1: "Glatt", t3_bl2: "Rau", t3_i1: "Spiegel", t3_i2: "Papier", t3_i3: "Metall", t3_i4: "Stoff",
    t4_title: "Lichtbrechung", t4_text: "Knick in der Optik.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was passiert beim Übergang von Luft zu Wasser?", t4_qa: "Das Licht wird gebrochen", t4_qb: "Es bleibt gerade", t4_qc: "Es verschwindet", t4_qd: "Es wird bunt",
    t4_w1: "Licht", t4_w2: "ändert", t4_w3: "seine", t4_w4: "Richtung", t4_w5: "wenn", t4_w6: "es", t4_w7: "in", t4_w8: "ein",
    t4_l1: "Luft", t4_r1: "Schnell", t4_l2: "Wasser", t4_r2: "Langsam", t4_l3: "Glas", t4_r3: "Bremsung",
    t4_sent: "Ein Strohhalm im Glas sieht ___ aus.", t4_qa2: "geknickt", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Linsen", t4_f2: "in", t4_f3: "Brillen", t4_f4: "nutzen", t4_f5: "die", t4_f6: "Brechung", t4_f7: "um", t4_f8: "das", t4_f9: "Sehen",
    t4_tk1: "Eine", t4_tk2: "Lupe", t4_tk3: "vergrößert", t4_tk4: "Dinge", t4_tk5: "durch", t4_tk6: "die", t4_tk7: "gezielte", t4_tk8: "Brechung", t4_tk9: "der", t4_tk10: "Lichtstrahlen.",
    t4_bl1: "Linse", t4_bl2: "Auge", t4_i1: "Brille", t4_i2: "Linse", t4_i3: "Lupe", t4_i4: "Iris",
    t5_title: "Farben", t5_text: "Der Regenbogen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Aus wie vielen Farben besteht weißes Licht?", t5_qa: "7 Spektralfarben", t5_qb: "Nur Weiß", t5_qc: "3", t5_qd: "100",
    t5_w1: "Rot", t5_w2: "Orange", t5_w3: "Gelb", t5_w4: "Grün", t5_w5: "Blau", t5_w6: "Indigo", t5_w7: "und", t5_w8: "Violett.",
    t5_l1: "Regenbogen", t5_r1: "Tropfen", t5_l2: "Prisma", t5_r2: "Glas", t5_l3: "Filter", t5_r3: "Farbe",
    t5_sent: "Ein Prisma zerlegt das ___ Licht.", t5_qa2: "weiße", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Gegenstände", t5_f2: "erscheinen", t5_f3: "uns", t5_f4: "farbig", t5_f5: "weil", t5_f6: "sie", t5_f7: "nur", t5_f8: "bestimmte", t5_f9: "Farben",
    t5_tk1: "Schwarz", t5_tk2: "ist", t5_tk3: "eigentlich", t5_tk4: "keine", t5_tk5: "Farbe", t5_tk6: "sondern", t5_tk7: "das", t5_tk8: "Fehlen", t5_tk9: "von", t5_tk10: "Licht.",
    t5_bl1: "Bunt", t5_bl2: "Weiß", t5_i1: "Rot", t5_i2: "Weiß", t5_i3: "Blau", t5_i4: "Transparent",
    t6_title: "Das Auge", t6_text: "Wie wir sehen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welcher Teil des Auges ist farbig?", t6_qa: "Iris (Regenbogenhaut)", t6_qb: "Pupille", t6_qc: "Linse", t6_qd: "Netzhaut",
    t6_w1: "Die", t6_w2: "Linse", t6_w3: "wirft", t6_w4: "ein", t6_w5: "umgedrehtes", t6_w6: "Bild", t6_w7: "auf", t6_w8: "unsere",
    t6_l1: "Pupille", t6_r1: "Loch", t6_l2: "Linse", t6_r2: "Fokus", t6_l3: "Netzhaut", t6_r3: "Bild",
    t6_sent: "Das Licht fällt durch die ___.", t6_qa2: "Pupille", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Unser", t6_f2: "Gehirn", t6_f3: "dreht", t6_f4: "das", t6_f5: "Bild", t6_f6: "wieder", t6_f7: "um", t6_f8: "damit", t6_f9: "wir",
    t6_tk1: "Stäbchen", t6_tk2: "und", t6_tk3: "Zapfen", t6_tk4: "sind", t6_tk5: "die", t6_tk6: "Sehzellen", t6_tk7: "für", t6_tk8: "Hell-Dunkel", t6_tk9: "und", t6_tk10: "Farben.",
    t6_bl1: "Auge", t6_bl2: "Kamera", t6_i1: "Lid", t6_i2: "Linse", t6_i3: "Braue", t6_i4: "Sensor",
    t7_title: "Linsentypen", t7_text: "Konvex und Konkav.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Welche Linse bündelt Licht?", t7_qa: "Sammellinse (Konvex)", t7_qb: "Zerstreuungslinse (Konkav)", t7_qc: "Fensterglas", t7_qd: "Spiegel",
    t7_w1: "Sammellinsen", t7_w2: "sind", t7_w3: "in", t7_w4: "der", t7_w5: "Mitte", t7_w6: "dicker", t7_w7: "als", t7_w8: "am",
    t7_l1: "Konvex", t7_r1: "Sammeln", t7_l2: "Konkav", t7_r2: "Streuen", t7_l3: "Plan", t7_r3: "Flach",
    t7_sent: "Brenngläser sind immer ___.", t7_qa2: "Sammellinsen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Im", t7_f2: "Brennpunkt", t7_f3: "treffen", t7_f4: "sich", t7_f5: "alle", t7_f6: "Lichtstrahlen", t7_f7: "hinter", t7_f8: "der", t7_f9: "Linse.",
    t7_tk1: "Weitsichtige", t7_tk2: "Menschen", t7_tk3: "brauchen", t7_tk4: "eine", t7_tk5: "Sammellinse", t7_tk6: "um", t7_tk7: "wieder", t7_tk8: "scharf", t7_tk9: "zu", t7_tk10: "sehen.",
    t7_bl1: "Sammeln", t7_bl2: "Streuen", t7_i1: "Konvex", t7_i2: "Konkav", t7_i3: "Linse", t7_i4: "Glas",
    t8_title: "Check", t8_text: "Durchblick?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist Licht?", t8_qa: "Elektromagnetische Welle", t8_qb: "Ein Gas", t8_qc: "Feste Materie", t8_qd: "Schall",
    t8_w1: "Optik", t8_w2: "ist", t8_w3: "ein", t8_w4: "spannendes", t8_w5: "Feld", t8_w6: "der", t8_w7: "Physik", t8_w8: "das",
    t8_l1: "Licht", t8_r1: "Strahl", t8_l2: "Schatten", t8_r2: "Dunkel", t8_l3: "Farbe", t8_r3: "Bunt",
    t8_sent: "Ohne Licht ist alles ___.", t8_qa2: "dunkel", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "können", t8_f3: "jetzt", t8_f4: "erklären", t8_f5: "wie", t8_f6: "Regenbögen", t8_f7: "und", t8_f8: "Spiegel", t8_f9: "funktionieren.",
    t8_tk1: "Experimente", t8_tk2: "mit", t8_tk3: "Licht", t8_tk4: "zeigen", t8_tk5: "uns", t8_tk6: "wie", t8_tk7: "unsere", t8_tk8: "Welt", t8_tk9: "beleuchtet", t8_tk10: "wird.",
    t8_bl1: "Licht", t8_bl2: "Schatten", t8_i1: "Sonne", t8_i2: "Loch", t8_i3: "Lampe", t8_i4: "Wand",
  },
};

export const OPTIK_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Lichtquellen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Schattenbildung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Reflexion", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Lichtbrechung", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Farben", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Das Auge", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Linsentypen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const SCHALL_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Töne & Schall",
    t1_title: "Schallentstehung", t1_text: "Alles schwingt.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was erzeugt Schall?", t1_qa: "Schwingungen", t1_qb: "Farben", t1_qc: "Licht", t1_qd: "Stille",
    t1_w1: "Schall", t1_w2: "entsteht", t1_w3: "wenn", t1_w4: "ein", t1_w5: "Körper", t1_w6: "sehr", t1_w7: "schnell", t1_w8: "hin",
    t1_l1: "Saite", t1_r1: "Zittern", t1_l2: "Fell", t1_r2: "Pochen", t1_l3: "Luft", t1_r3: "Welle",
    t1_sent: "Eine Gitarrensaite muss ___.", t1_qa2: "schwingen", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Diese", t1_f2: "Schwingungen", t1_f3: "übertragen", t1_f4: "sich", t1_f5: "auf", t1_f6: "die", t1_f7: "Teilchen", t1_f8: "in", t1_f9: "der",
    t1_tk1: "Stimmbänder", t1_tk2: "im", t1_tk3: "Hals", t1_tk4: "vibrieren", t1_tk5: "wenn", t1_tk6: "wir", t1_tk7: "sprechen", t1_tk8: "oder", t1_tk9: "singen.", t1_tk10: "",
    t1_bl1: "Schwingt", t1_bl2: "Starr", t1_i1: "Glocke", t1_i2: "Stein", t1_i3: "Stimmgabel", t1_i4: "Tisch",
    t2_title: "Schallausbreitung", t2_text: "Die Reise des Tons.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wo kann sich Schall NICHT ausbreiten?", t2_qa: "Vakuum (Weltraum)", t2_qb: "Wasser", t2_qc: "Luft", t2_qd: "Eisen",
    t2_w1: "In", t2_w2: "der", t2_w3: "Luft", t2_w4: "beträgt", t2_w5: "die", t2_w6: "Schallgeschwindigkeit", t2_w7: "etwa", t2_w8: "dreihundertvierzig",
    t2_l1: "Luft", t2_r1: "Langsam", t2_l2: "Wasser", t2_r2: "Mittel", t2_l3: "Stahl", t2_r3: "Schnell",
    t2_sent: "Schall braucht ein ___.", t2_qa2: "Medium", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wale", t2_f2: "können", t2_f3: "sich", t2_f4: "unter", t2_f5: "Wasser", t2_f6: "über", t2_f7: "viele", t2_f8: "Kilometer", t2_f9: "hinweg",
    t2_tk1: "Im", t2_tk2: "Weltall", t2_tk3: "herrscht", t2_tk4: "absolute", t2_tk5: "Stille", t2_tk6: "weil", t2_tk7: "keine", t2_tk8: "Luft", t2_tk9: "da", t2_tk10: "ist.",
    t2_bl1: "Medium", t2_bl2: "Vakuum", t2_i1: "Luft", t2_i2: "Weltall", t2_i3: "Wasser", t2_i4: "Nichts",
    t3_title: "Tonhöhe", t3_text: "Hoch oder tief.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wovon hängt die Tonhöhe ab?", t3_qa: "Frequenz (Schwingungen pro Sekunde)", t3_qb: "Lautstärke", t3_qc: "Farbe", t3_qd: "Gewicht",
    t3_w1: "Je", t3_w2: "öfter", t3_w3: "ein", t3_w4: "Körper", t3_w5: "pro", t3_w6: "Sekunde", t3_w7: "schwingt", t3_w8: "desto",
    t3_l1: "Schnell", t3_r1: "Hoch", t3_l2: "Langsam", t3_r2: "Tief", t3_l3: "Hertz", t3_r3: "Einheit",
    t3_sent: "Schnelle Schwingungen klingen ___.", t3_qa2: "hoch", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Die", t3_f2: "Einheit", t3_f3: "der", t3_f4: "Frequenz", t3_f5: "wird", t3_f6: "in", t3_f7: "Hertz", t3_f8: "angegeben.", t3_f9: "",
    t3_tk1: "Eine", t3_tk2: "kurze", t3_tk3: "Saite", t3_tk4: "schwingt", t3_tk5: "viel", t3_tk6: "schneller", t3_tk7: "als", t3_tk8: "eine", t3_tk9: "lange", t3_tk10: "dicke",
    t3_bl1: "Hoch", t3_bl2: "Tief", t3_i1: "Pfeife", t3_i2: "Bass", t3_i3: "Flöte", t3_i4: "Trommel",
    t4_title: "Lautstärke", t4_text: "Laut oder leise.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist die Einheit der Lautstärke?", t4_qa: "Dezibel (dB)", t4_qb: "Hertz", t4_qc: "Meter", t4_qd: "Kilogramm",
    t4_w1: "Die", t4_w2: "Lautstärke", t4_w3: "hängt", t4_w4: "davon", t4_w5: "ab", t4_w6: "wie", t4_w7: "stark", t4_w8: "die",
    t4_l1: "Leise", t4_r1: "Flüstern", t4_l2: "Laut", t4_r2: "Brüllen", t4_l3: "Gefahr", t4_r3: "Lärm",
    t4_sent: "Große Amplituden klingen ___.", t4_qa2: "laut", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Zu", t4_f2: "lange", t4_f3: "und", t4_f4: "zu", t4_f5: "laute", t4_f6: "Geräusche", t4_f7: "können", t4_f8: "unser", t4_f9: "Gehör",
    t4_tk1: "Ein", t4_tk2: "Düsenjet", t4_tk3: "beim", t4_tk4: "Start", t4_tk5: "ist", t4_tk6: "eines", t4_tk7: "der", t4_tk8: "lautesten", t4_tk9: "Geräusche", t4_tk10: "der",
    t4_bl1: "Leise", t4_bl2: "Laut", t4_i1: "Blatt", t4_i2: "Donner", t4_i3: "Maus", t4_i4: "Motor",
    t5_title: "Das Ohr", t5_text: "Wie wir hören.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wo sitzt das Trommelfell?", t5_qa: "Am Ende des Gehörgangs", t5_qb: "An der Nase", t5_qc: "Im Mund", t5_qd: "Am Fuß",
    t5_w1: "Die", t5_w2: "Ohrmuschel", t5_w3: "fängt", t5_w4: "den", t5_w5: "Schall", t5_w6: "auf", t5_w7: "und", t5_w8: "leitet",
    t5_l1: "Hammer", t5_r1: "Gehörknöchelchen", t5_l2: "Amboss", t5_r2: "Mitte", t5_l3: "Steigbügel", t5_r3: "Innen",
    t5_sent: "Schallwellen bringen das ___ zum Schwingen.", t5_qa2: "Trommelfell", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "In", t5_f2: "der", t5_f3: "Hörschnecke", t5_f4: "werden", t5_f5: "die", t5_f6: "Reize", t5_f7: "in", t5_f8: "elektrische", t5_f9: "Signale",
    t5_tk1: "Der", t5_tk2: "Hörnerv", t5_tk3: "leitet", t5_tk4: "die", t5_tk5: "Informationen", t5_tk6: "schließlich", t5_tk7: "direkt", t5_tk8: "an", t5_tk9: "unser", t5_tk10: "Gehirn.",
    t5_bl1: "Außen", t5_bl2: "Innen", t5_i1: "Muschel", t5_i2: "Schnecke", t5_i3: "Gang", t5_i4: "Nerv",
    t6_title: "Resonanz", t6_text: "Mitschwingen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was verstärkt den Schall einer Geige?", t6_qa: "Der Resonanzkörper (Hohlraum)", t6_qb: "Die Saiten allein", t6_qc: "Der Bogen", t6_qd: "Die Luft",
    t6_w1: "Wenn", t6_w2: "ein", t6_w3: "Körper", t6_w4: "einen", t6_w5: "anderen", t6_w6: "zum", t6_w7: "Mitschwingen", t6_w8: "bringt",
    t6_l1: "Gitarre", t6_r1: "Loch", t6_l2: "Körper", t6_r2: "Holz", t6_l3: "Ton", t6_r3: "Verstärkung",
    t6_sent: "Hohlräume verstärken den ___.", t6_qa2: "Klang", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Sänger", t6_f2: "nutzen", t6_f3: "ihren", t6_f4: "ganzen", t6_f5: "Körper", t6_f6: "als", t6_f7: "Resonanzraum", t6_f8: "für", t6_f9: "ihre",
    t6_tk1: "In", t6_tk2: "einem", t6_tk3: "leeren", t6_tk4: "Raum", t6_tk5: "entsteht", t6_tk6: "oft", t6_tk7: "ein", t6_tk8: "starkes", t6_tk9: "Echo", t6_tk10: "durch",
    t6_bl1: "Quelle", t6_bl2: "Verstärker", t6_i1: "Saite", t6_i2: "Gehäuse", t6_i3: "Pfeife", t6_i4: "Rohr",
    t7_title: "Lärmschutz", t7_text: "Ohren schützen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Ab wie viel dB ist Lärm schädlich?", t7_qa: "Ab ca. 85 dB dauerhaft", t7_qb: "Ab 10", t7_qc: "Gar nicht", t7_qd: "Nur bei Gewitter",
    t7_w1: "Schallschutzwände", t7_w2: "an", t7_w3: "Autobahnen", t7_w4: "schützen", t7_w5: "die", t7_w6: "Anwohner", t7_w7: "vor", t7_w8: "lautem",
    t7_l1: "Wand", t7_r1: "Draußen", t7_l2: "Stöpsel", t7_r2: "Drinnen", t7_l3: "Kopfhörer", t7_r3: "Schutz",
    t7_sent: "Ohrstöpsel dämpfen den ___.", t7_qa2: "Schall", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Wir", t7_f2: "sollten", t7_f3: "Musik", t7_f4: "über", t7_f5: "Kopfhörer", t7_f6: "niemals", t7_f7: "auf", t7_f8: "maximaler", t7_f9: "Lautstärke",
    t7_tk1: "Stille", t7_tk2: "Pausen", t7_tk3: "sind", t7_tk4: "wichtig", t7_tk5: "damit", t7_tk6: "sich", t7_tk7: "unser", t7_tk8: "Gehör", t7_tk9: "wieder", t7_tk10: "erholen",
    t7_bl1: "Laut", t7_bl2: "Schutz", t7_i1: "Lärm", t7_i2: "Wand", t7_i3: "Krach", t7_i4: "Watte",
    t8_title: "Check", t8_text: "Alles gehört?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist Echo?", t8_qa: "Reflektierter Schall", t8_qb: "Ein Instrument", t8_qc: "Ein Tier", t8_qd: "Licht",
    t8_w1: "Fledermäuse", t8_w2: "nutzen", t8_w3: "Ultraschall", t8_w4: "um", t8_w5: "sich", t8_w6: "im", t8_w7: "Dunkeln", t8_w8: "zu",
    t8_l1: "Ton", t8_r1: "Schön", t8_l2: "Klang", t8_r2: "Musik", t8_l3: "Geräusch", t8_r3: "Alltag",
    t8_sent: "Akustik ist die Lehre vom ___.", t8_qa2: "Schall", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "gelernt", t8_f4: "dass", t8_f5: "Schall", t8_f6: "unsere", t8_f7: "Welt", t8_f8: "hörbar", t8_f9: "macht.",
    t8_tk1: "Ohne", t8_tk2: "Schall", t8_tk3: "gäbe", t8_tk4: "es", t8_tk5: "keine", t8_tk6: "Sprache", t8_tk7: "und", t8_tk8: "keine", t8_tk9: "wunderschöne", t8_tk10: "Musik.",
    t8_bl1: "Physik", t8_bl2: "Musik", t8_i1: "Welle", t8_i2: "Lied", t8_i3: "Hertz", t8_i4: "Note",
  },
};

export const SCHALL_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Schallentstehung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Schallausbreitung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Tonhöhe", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Lautstärke", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Das Ohr", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Resonanz", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Lärmschutz", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const OEKOSYSTEM_TEICH_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ökosystem Teich",
    t1_title: "Zonierung", t1_text: "Stockwerke des Wassers.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Welche Zone ist am weitesten außen?", t1_qa: "Uferzone", t1_qb: "Tiefenzone", t1_qc: "Freiwasserzone", t1_qd: "Luftzone",
    t1_w1: "Ein", t1_w2: "Teich", t1_w3: "ist", t1_w4: "ein", t1_w5: "stehendes", t1_w6: "Gewässer", t1_w7: "mit", t1_w8: "verschiedenen",
    t1_l1: "Ufer", t1_r1: "Rand", t1_l2: "Röhricht", t1_r2: "Schilf", t1_l3: "Tiefe", t1_r3: "Unten",
    t1_sent: "In der Mitte ist die ___.", t1_qa2: "Freiwasserzone", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "In", t1_f2: "der", t1_f3: "Tiefenzone", t1_f4: "ist", t1_f5: "es", t1_f6: "dunkel", t1_f7: "und", t1_f8: "es", t1_f9: "wachsen",
    t1_tk1: "Die", t1_tk2: "Uferzone", t1_tk3: "ist", t1_tk4: "besonders", t1_tk5: "artenreich", t1_tk6: "und", t1_tk7: "bietet", t1_tk8: "vielen", t1_tk9: "Tieren", t1_tk10: "Schutz.",
    t1_bl1: "Oben", t1_bl2: "Unten", t1_i1: "Ufer", t1_i2: "Grund", t1_i3: "Rand", t1_i4: "Tiefe",
    t2_title: "Pflanzenwelt", t2_text: "Grün am Teich.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welche Pflanze schwimmt oben?", t2_qa: "Seerose", t2_qb: "Schilf", t2_qc: "Alge (unten)", t2_qd: "Baum",
    t2_w1: "Unterwasserpflanzen", t2_w2: "produzieren", t2_w3: "wichtigen", t2_w4: "Sauerstoff", t2_w5: "für", t2_w6: "die", t2_w7: "Tiere", t2_w8: "im",
    t2_l1: "Seerose", t2_r1: "Schwimmen", t2_l2: "Schilf", t2_r2: "Stehen", t2_l3: "Alge", t2_r3: "Unterwasser",
    t2_sent: "Schilf gehört zum ___.", t2_qa2: "Röhricht", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wasserlinsen", t2_f2: "können", t2_f3: "die", t2_f4: "gesamte", t2_f5: "Oberfläche", t2_f6: "eines", t2_f7: "Teiches", t2_f8: "grün", t2_f9: "bedecken.",
    t2_tk1: "Pflanzen", t2_tk2: "reinigen", t2_tk3: "das", t2_tk4: "Wasser", t2_tk5: "indem", t2_tk6: "sie", t2_tk7: "Nährstoffe", t2_tk8: "aus", t2_tk9: "dem", t2_tk10: "Teich",
    t2_bl1: "Schwimmt", t2_bl2: "Wurzelt", t2_i1: "Linse", t2_i2: "Schilf", t2_i3: "Seerose", t2_i4: "Rohrkolben",
    t3_title: "Amphibien", t3_text: "Frosch und Co.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wie atmen Kaulquappen?", t3_qa: "Durch Kiemen", t3_qb: "Durch Lungen", t3_qc: "Gar nicht", t3_qd: "Durch die Nase",
    t3_w1: "Die", t3_w2: "Metamorphose", t3_w3: "beschreibt", t3_w4: "den", t3_w5: "Wandel", t3_w6: "von", t3_w7: "der", t3_w8: "Kaulquappe",
    t3_l1: "Laich", t3_r1: "Eier", t3_l2: "Quappe", t3_r2: "Schwanz", t3_l3: "Frosch", t3_r3: "Hüpfen",
    t3_sent: "Frösche halten ___.", t3_qa2: "Winterstarre", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Amphibien", t3_f2: "leben", t3_f3: "sowohl", t3_f4: "im", t3_f5: "Wasser", t3_f6: "als", t3_f7: "auch", t3_f8: "an Land.", t3_f9: "",
    t3_tk1: "Frösche", t3_tk2: "fangen", t3_tk3: "ihre", t3_tk4: "Beute", t3_tk5: "mit", t3_tk6: "einer", t3_tk7: "langen", t3_tk8: "und", t3_tk9: "sehr", t3_tk10: "klebrigen",
    t3_bl1: "Jung", t3_bl2: "Alt", t3_i1: "Quappe", t3_i2: "Frosch", t3_i3: "Kieme", t3_i4: "Lunge",
    t4_title: "Insekten", t4_text: "Libellen und Käfer.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wer schwimmt unter Wasser?", t4_qa: "Gelbrandkäfer", t4_qb: "Libelle (Luft)", t4_qc: "Biene", t4_qd: "Hausfliege",
    t4_w1: "Libellen", t4_w2: "sind", t4_w3: "geschickte", t4_w4: "Jäger", t4_w5: "die", t4_w6: "ihre", t4_w7: "Beute", t4_w8: "im",
    t4_l1: "Käfer", t4_r1: "Gelbrand", t4_l2: "Läufer", t4_r2: "Wasser", t4_l3: "Libelle", t4_r3: "Flügel",
    t4_sent: "Libellenlarven leben im ___.", t4_qa2: "Wasser", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Der", t4_f2: "Wasserläufer", t4_f3: "nutzt", t4_f4: "die", t4_f5: "Oberflächenspannung", t4_f6: "um", t4_f7: "über", t4_f8: "den", t4_f9: "Teich",
    t4_tk1: "Die", t4_tk2: "Larven", t4_tk3: "vieler", t4_tk4: "Insekten", t4_tk5: "verbringen", t4_tk6: "ihre", t4_tk7: "erste", t4_tk8: "Zeit", t4_tk9: "unter", t4_tk10: "der",
    t4_bl1: "Fliegt", t4_bl2: "Schwimmt", t4_i1: "Libelle", t4_i2: "Käfer", t4_i3: "Mücke", t4_i4: "Quappe",
    t5_title: "Nahrungskette", t5_text: "Wer frisst wen?", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wer steht am Anfang?", t5_qa: "Algen und Pflanzen", t5_qb: "Hecht", t5_qc: "Reiher", t5_qd: "Mensch",
    t5_w1: "Kleine", t5_w2: "Krebstiere", t5_w3: "fressen", t5_w4: "Algen", t5_w5: "und", t5_w6: "werden", t5_w7: "selbst", t5_w8: "von",
    t5_l1: "Pflanze", t5_r1: "Erzeuger", t5_l2: "Friedfisch", t5_r2: "Verbraucher", t5_l3: "Raubfisch", t5_r3: "Jäger",
    t5_sent: "Der Hecht ist ein ___.", t5_qa2: "Raubfisch", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Ein", t5_f2: "Gleichgewicht", t5_f3: "im", t5_f4: "Teich", t5_f5: "ist", t5_f6: "wichtig", t5_f7: "damit", t5_f8: "das", t5_f9: "Wasser",
    t5_tk1: "Destruenten", t5_tk2: "wie", t5_tk3: "Bakterien", t5_tk4: "bauen", t5_tk5: "totes", t5_tk6: "Material", t5_tk7: "am", t5_tk8: "Teichgrund", t5_tk9: "wieder", t5_tk10: "ab.",
    t5_bl1: "Jäger", t5_bl2: "Beute", t5_i1: "Hecht", t5_i2: "Alge", t5_i3: "Reiher", t5_i4: "Floh",
    t6_title: "Vögel am Teich", t6_text: "Reiher und Enten.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wer hat einen langen Schnabel?", t6_qa: "Graureiher", t6_qb: "Stockente", t6_qc: "Spatz", t6_qd: "Uhu",
    t6_w1: "Stockenten", t6_w2: "gründeln", t6_w3: "im", t6_w4: "flachen", t6_w5: "Wasser", t6_w6: "nach", t6_w7: "leckerer", t6_w8: "Nahrung.",
    t6_l1: "Ente", t6_r1: "Schnabel", t6_l2: "Reiher", t6_r2: "Beine", t6_l3: "Schwan", t6_r3: "Hals",
    t6_sent: "Enten haben ___ zwischen den Zehen.", t6_qa2: "Schwimmhäute", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Der", t6_f2: "Eisvogel", t6_f3: "stürzt", t6_f4: "sich", t6_f5: "pfeilschnell", t6_f6: "ins", t6_f7: "Wasser", t6_f8: "um", t6_f9: "kleine",
    t6_tk1: "Viele", t6_tk2: "Vögel", t6_tk3: "bauen", t6_tk4: "ihre", t6_tk5: "Nester", t6_tk6: "gut", t6_tk7: "versteckt", t6_tk8: "im", t6_tk9: "dichten", t6_tk10: "Schilfgürtel.",
    t6_bl1: "Vogel", t6_bl2: "Teil", t6_i1: "Ente", t6_i2: "Schnabel", t6_i3: "Reiher", t6_i4: "Feder",
    t7_title: "Umweltgefahr", t7_text: "Teich in Not.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was schadet dem Teich?", t7_qa: "Zu viel Dünger", t7_qb: "Regen", t7_qc: "Sonne", t7_qd: "Fische",
    t7_w1: "Wenn", t7_w2: "zu", t7_w3: "viele", t7_w4: "Nährstoffe", t7_w5: "ins", t7_w6: "Wasser", t7_w7: "gelangen", t7_w8: "wächst",
    t7_l1: "Müll", t7_r1: "Plastik", t7_l2: "Dünger", t7_r2: "Algen", t7_l3: "Hitze", t7_r3: "Austrocknen",
    t7_sent: "Zu viele Algen verbrauchen ___.", t7_qa2: "Sauerstoff", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Das", t7_f2: "Umkippen", t7_f3: "eines", t7_f4: "Teiches", t7_f5: "bedeutet", t7_f6: "dass", t7_f7: "alle", t7_f8: "Fische", t7_f9: "darin",
    t7_tk1: "Wir", t7_tk2: "sollten", t7_tk3: "unseren", t7_tk4: "Müll", t7_tk5: "niemals", t7_tk6: "einfach", t7_tk7: "in", t7_tk8: "der", t7_tk9: "Natur", t7_tk10: "liegen",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Schatten", t7_i2: "Abfall", t7_i3: "Pflanzen", t7_i4: "Gift",
    t8_title: "Check", t8_text: "Teich-Experte?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist ein Teich?", t8_qa: "Kleines, stehendes Gewässer", t8_qb: "Fließender Bach", t8_qc: "Großer Ozean", t8_qd: "Ein Loch mit Sand",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "Zusammenhänge", t8_w5: "im", t8_w6: "Ökosystem", t8_w7: "Teich", t8_w8: "genau",
    t8_l1: "Tiere", t8_r1: "Fauna", t8_l2: "Pflanzen", t8_r2: "Flora", t8_l3: "Wasser", t8_r3: "Element",
    t8_sent: "Ökologie ist die Lehre vom ___.", t8_qa2: "Haushalt", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Ein", t8_f2: "Teich", t8_f3: "ist", t8_f4: "ein", t8_f5: "wichtiger", t8_f6: "Lebensraum", t8_f7: "für", t8_f8: "viele", t8_f9: "seltene",
    t8_tk1: "Schutzgebiete", t8_tk2: "helfen", t8_tk3: "dabei", t8_tk4: "diese", t8_tk5: "wertvollen", t8_tk6: "Biotope", t8_tk7: "für", t8_tk8: "die", t8_tk9: "Zukunft", t8_tk10: "zu",
    t8_bl1: "Lebend", t8_bl2: "Umfeld", t8_i1: "Frosch", t8_i2: "Wasser", t8_i3: "Fisch", t8_i4: "Stein",
  },
};

export const OEKOSYSTEM_TEICH_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Zonierung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Pflanzenwelt", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Amphibien", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Insekten", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Nahrungskette", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Vögel am Teich", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Umweltgefahr", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const FINALE_K6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "K6 Master-Diplom",
    t1_title: "Sexualkunde", t1_text: "Körperwissen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer schüttet Hormone aus?", t1_qa: "Hypophyse", t1_qb: "Muskel", t1_qc: "Knochen", t1_qd: "Zahn",
    t1_w1: "Hormone", t1_w2: "steuern", t1_w3: "die", t1_w4: "Entwicklung", t1_w5: "vom", t1_w6: "Kind", t1_w7: "zum", t1_w8: "Erwachsenen.",
    t1_l1: "Junge", t1_r1: "Bart", t1_l2: "Mädchen", t1_r2: "Zyklus", t1_l3: "Gefühl", t1_r3: "Stimmung",
    t1_sent: "Pubertät ist eine Zeit der ___.", t1_qa2: "Veränderung", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "wissen", t1_f3: "jetzt", t1_f4: "wie", t1_f5: "unser", t1_f6: "Körper", t1_f7: "in", t1_f8: "der", t1_f9: "Pubertät",
    t1_tk1: "Respekt", t1_tk2: "vor", t1_tk3: "sich", t1_tk4: "und", t1_tk5: "anderen", t1_tk6: "ist", t1_tk7: "das", t1_tk8: "Wichtigste", t1_tk9: "überhaupt.", t1_tk10: "",
    t1_bl1: "Phase", t1_bl2: "Wandel", t1_i1: "Kind", t1_i2: "Pubertät", t1_i3: "Spiel", t1_i4: "Wachstum",
    t2_title: "Demokratie", t2_text: "Politik.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Höchstes deutsches Gesetz?", t2_qa: "Grundgesetz", t2_qb: "Hausordnung", t2_qc: "Lexikon", t2_qd: "Bibel",
    t2_w1: "Wahlen", t2_w2: "sind", t2_w3: "das", t2_w4: "Herzstück", t2_w5: "jeder", t2_w6: "demokratischen", t2_w7: "Gesellschaft.", t2_w8: "",
    t2_l1: "Recht", t2_r1: "Freiheit", t2_l2: "Wahl", t2_r2: "Stimme", t2_l3: "Macht", t2_r3: "Teilung",
    t2_sent: "Wir leben in einer ___.", t2_qa2: "Demokratie", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Würde", t2_f3: "des", t2_f4: "Menschen", t2_f5: "darf", t2_f6: "niemals", t2_f7: "verletzt", t2_f8: "werden.", t2_f9: "",
    t2_tk1: "Mitbestimmung", t2_tk2: "fängt", t2_tk3: "schon", t2_tk4: "bei", t2_tk5: "der", t2_tk6: "Klassensprecherwahl", t2_tk7: "in", t2_tk8: "der", t2_tk9: "Schule", t2_tk10: "an.",
    t2_bl1: "Recht", t2_bl2: "Pflicht", t2_i1: "Wählen", t2_i2: "Helfen", t2_i3: "Reden", t2_i4: "Lernen",
    t3_title: "Medien", t3_text: "Digitales.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Sicheres Passwort?", t3_qa: "Mix aus Zeichen", t3_qb: "Name", t3_qc: "123", t3_qd: "ABC",
    t3_w1: "Das", t3_w2: "Internet", t3_w3: "bietet", t3_w4: "viele", t3_w5: "Infos", t3_w6: "aber", t3_w7: "auch", t3_w8: "einige",
    t3_l1: "Foto", t3_r1: "Schutz", t3_l2: "Daten", t3_r2: "Privat", t3_l3: "News", t3_r3: "Fake",
    t3_sent: "Cybermobbing ist ___.", t3_qa2: "verboten", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Lerne", t3_f2: "Inhalte", t3_f3: "kritisch", t3_f4: "zu", t3_f5: "prüfen", t3_f6: "und", t3_f7: "deine", t3_f8: "Privatsphäre", t3_f9: "zu",
    t3_tk1: "Netiquette", t3_tk2: "bedeutet", t3_tk3: "dass", t3_tk4: "man", t3_tk5: "auch", t3_tk6: "online", t3_tk7: "immer", t3_tk8: "höflich", t3_tk9: "bleibt.", t3_tk10: "",
    t3_bl1: "Online", t3_bl2: "Echt", t3_i1: "Chat", t3_i2: "Treffen", t3_i3: "Mail", t3_i4: "Brief",
    t4_title: "Klima", t4_text: "Umwelt.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was schmilzt?", t4_qa: "Gletscher", t4_qb: "Häuser", t4_qc: "Steine", t4_qd: "Autos",
    t4_w1: "Erneuerbare", t4_w2: "Energien", t4_w3: "helfen", t4_w4: "den", t4_w5: "Klimawandel", t4_w6: "zu", t4_w7: "verlangsamen.", t4_w8: "",
    t4_l1: "Sonne", t4_r1: "Solar", t4_l2: "Wind", t4_r2: "Rad", t4_l3: "Auto", t4_r3: "Abgas",
    t4_sent: "CO2 macht die Erde ___.", t4_qa2: "wärmer", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Klimaschutz", t4_f2: "geht", t4_f3: "alle", t4_f4: "an", t4_f5: "und", t4_f6: "muss", t4_f7: "jetzt", t4_f8: "passieren.", t4_f9: "",
    t4_tk1: "Jeder", t4_tk2: "Baum", t4_tk3: "den", t4_tk4: "wir", t4_tk5: "pflanzen", t4_tk6: "hilft", t4_tk7: "unserem", t4_tk8: "Planeten", t4_tk9: "beim", t4_tk10: "Atmen.",
    t4_bl1: "Natur", t4_bl2: "Mensch", t4_i1: "Wald", t4_i2: "Fabrik", t4_i3: "See", t4_i4: "Stadt",
    t5_title: "Weltreise", t5_text: "Geografie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wie viele Kontinente?", t5_qa: "7", t5_qb: "3", t5_qc: "5", t5_qd: "10",
    t5_w1: "Jeder", t5_w2: "Kontinent", t5_w3: "hat", t5_w4: "einzigartige", t5_w5: "Tiere", t5_w6: "und", t5_w7: "faszinierende", t5_w8: "Landschaften.",
    t5_l1: "Afrika", t5_r1: "Wüste", t5_l2: "Asien", t5_r2: "Berge", t5_l3: "Europa", t5_r3: "Städte",
    t5_sent: "Der größte Ozean ist der ___.", t5_qa2: "Pazifik", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Die", t5_f2: "Erde", t5_f3: "ist", t5_f4: "unser", t5_f5: "gemeinsames", t5_f6: "Zuhause", t5_f7: "das", t5_f8: "wir", t5_f9: "bereisen.",
    t5_tk1: "Geografie", t5_tk2: "zeigt", t5_tk3: "uns", t5_tk4: "wie", t5_tk5: "vielfältig", t5_tk6: "und", t5_tk7: "schön", t5_tk8: "unsere", t5_tk9: "Welt", t5_tk10: "ist.",
    t5_bl1: "Land", t5_bl2: "Meer", t5_i1: "Brasilien", t5_i2: "Atlantik", t5_i3: "China", t5_i4: "Pazifik",
    t6_title: "Physik", t6_text: "Optik & Schall.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was bricht Licht?", t6_qa: "Linse", t6_qb: "Schatten", t6_qc: "Ton", t6_qd: "Farbe",
    t6_w1: "Licht", t6_w2: "und", t6_w3: "Schall", t6_w4: "sind", t6_w5: "Wellen", t6_w6: "die", t6_w7: "unsere", t6_w8: "Sinne",
    t6_l1: "Auge", t6_r1: "Sehen", t6_l2: "Ohr", t6_r2: "Hören", t6_l3: "Spiegel", t6_r3: "Reflexion",
    t6_sent: "Schall braucht zum Reisen ein ___.", t6_qa2: "Medium", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Ohne", t6_f2: "Schwingungen", t6_f3: "gäbe", t6_f4: "es", t6_f5: "keine", t6_f6: "Musik", t6_f7: "auf", t6_f8: "der", t6_f9: "Welt.",
    t6_tk1: "Physik", t6_tk2: "erklärt", t6_tk3: "uns", t6_tk4: "die", t6_tk5: "regeln", t6_tk6: "der", t6_tk7: "Natur", t6_tk8: "um", t6_tk9: "uns", t6_tk10: "herum.",
    t6_bl1: "Licht", t6_bl2: "Ton", t6_i1: "Sonne", t6_i2: "Gitarre", t6_i3: "Lampe", t6_i4: "Stimme",
    t7_title: "Natur", t7_text: "Teichleben.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Frosch-Kind?", t7_qa: "Kaulquappe", t7_qb: "Fisch", t7_qc: "Vogel", t7_qd: "Käfer",
    t7_w1: "Ein", t7_w2: "Teich", t7_w3: "ist", t7_w4: "ein", t7_w5: "kleines", t7_w6: "Universum", t7_w7: "voller Leben", t7_w8: "und",
    t7_l1: "Alge", t7_r1: "Pflanze", t7_l2: "Fisch", t7_r2: "Wasser", t7_l3: "Reiher", t7_r3: "Vogel",
    t7_sent: "Enten haben ___.", t7_qa2: "Schwimmhäute", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Das", t7_f2: "Gleichgewicht", t7_f3: "im", t7_f4: "Wasser", t7_f5: "muss", t7_f6: "immer", t7_f7: "bewahrt", t7_f8: "werden.", t7_f9: "",
    t7_tk1: "Biologie", t7_tk2: "lässt", t7_tk3: "uns", t7_tk4: "die", t7_tk5: "Geheimnisse", t7_tk6: "der", t7_tk7: "Natur", t7_tk8: "vor", t7_tk9: "der", t7_tk10: "Haustür",
    t7_bl1: "Teich", t7_bl2: "Ufer", t7_i1: "Seerose", t7_i2: "Schilf", t7_i3: "Frosch", t7_i4: "Grashalm",
    t8_title: "Diplom", t8_text: "Gratulation!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Bist du K6-Meister?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Eher nicht", t8_qd: "Vielleicht",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "du", t8_w4: "hast", t8_w5: "das", t8_w6: "K6", t8_w7: "Master-Diplom", t8_w8: "bestanden!",
    t8_l1: "Wissen", t8_r1: "Kopf", t8_l2: "Können", t8_r2: "Hand", t8_l3: "Erfolg", t8_r3: "Sieg",
    t8_sent: "Ich weiß jetzt ___.", t8_qa2: "Bescheid", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Du", t8_f2: "hast", t8_f3: "viel", t8_f4: "gelernt", t8_f5: "und", t8_f6: "bist", t8_f7: "bereit", t8_f8: "für", t8_f9: "neue",
    t8_tk1: "Bleib", t8_tk2: "neugierig", t8_tk3: "und", t8_tk4: "entdecke", t8_tk5: "weiterhin", t8_tk6: "die", t8_tk7: "vielen", t8_tk8: "Wunder", t8_tk9: "der", t8_tk10: "Welt.",
    t8_bl1: "Ziel", t8_bl2: "Start", t8_i1: "Diplom", t8_i2: "Lernen", t8_i3: "Erfolg", t8_i4: "Frage",
  },
};

export const FINALE_K6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Sexualkunde", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Demokratie", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Medien", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Klima", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Weltreise", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Physik", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Natur", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Diplom", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, topic.w.length) },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

