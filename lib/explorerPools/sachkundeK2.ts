// lib/explorerPools/sachkundeK2.ts
import type { PoolTopicDef } from "./types";

export const HAUSTIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Haustiere & Pflege",
    t1_title: "Der Hund", t1_text: "Hunde sind treue Begleiter.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was frisst ein Hund?", t1_qa: "Fleisch", t1_qb: "Gras", t1_qc: "Obst", t1_qd: "Brot",
    t1_w1: "Hunde", t1_w2: "wollen", t1_w3: "jeden", t1_w4: "Tag", t1_w5: "Gassi", t1_w6: "gehen.",
    t1_l1: "Hund", t1_r1: "Bellen", t1_l2: "Katze", t1_r2: "Miauen", t1_l3: "Vogel", t1_r3: "Zwitschern",
    t1_sent: "Der Hund ist ein ___.", t1_qa2: "Säugetier", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Ein", t1_f2: "Hund", t1_f3: "bewacht", t1_f4: "das", t1_f5: "Haus.", t1_f6: "",
    t1_tk1: "Der", t1_tk2: "Hund", t1_tk3: "wedelt", t1_tk4: "mit", t1_tk5: "dem", t1_tk6: "Schwanz.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Hundezubehör", t1_bl2: "Fressen", t1_i1: "Leine", t1_i2: "Knochen", t1_i3: "Halsband", t1_i4: "Fleisch",
    t2_title: "Die Katze", t2_text: "Katzen jagen gerne Mäuse.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Was trinken Katzen am liebsten?", t2_qa: "Wasser", t2_qb: "Limonade", t2_qc: "Kaffee", t2_qd: "Saft",
    t2_w1: "Katzen", t2_w2: "putzen", t2_w3: "sich", t2_w4: "stundenlang", t2_w5: "ihr", t2_w6: "Fell.",
    t2_l1: "Kralle", t2_r1: "Kratzen", t2_l2: "Schnauze", t2_r2: "Riechen", t2_l3: "Ohr", t2_r3: "Hören",
    t2_sent: "Die Katze hat ein weiches ___.", t2_qa2: "Fell", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Katzen", t2_f2: "können", t2_f3: "sehr", t2_f4: "gut", t2_f5: "klettern.", t2_f6: "",
    t2_tk1: "Die", t2_tk2: "Katze", t2_tk3: "schleicht", t2_tk4: "leise", t2_tk5: "durch", t2_tk6: "den", t2_tk7: "Garten.", t2_tk8: "",
    t2_bl1: "Katze", t2_bl2: "Hund", t2_i1: "Schnurren", t2_i2: "Bellen", t2_i3: "Miauen", t2_i4: "Knurren",
    t3_title: "Meerschweinchen", t3_text: "Sie leben gerne in Gruppen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Was fressen sie?", t3_qa: "Heu", t3_qb: "Wurst", t3_qc: "Eis", t3_qd: "Käse",
    t3_w1: "Meerschweinchen", t3_w2: "brauchen", t3_w3: "immer", t3_w4: "einen", t3_w5: "Partner.", t3_w6: "",
    t3_l1: "Heu", t3_r1: "Fressen", t3_l2: "Wasser", t3_r2: "Trinken", t3_l3: "Gemüse", t3_r3: "Snack",
    t3_sent: "Meerschweinchen fressen viel ___.", t3_qa2: "Heu", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Sie", t3_f2: "sind", t3_f3: "sehr", t3_f4: "gesellige", t3_f5: "Tiere.", t3_f6: "",
    t3_tk1: "Meerschweinchen", t3_tk2: "verstecken", t3_tk3: "sich", t3_tk4: "gerne", t3_tk5: "im", t3_tk6: "Häuschen.", t3_tk7: "", t3_tk8: "",
    t3_bl1: "Gesund", t3_bl2: "Ungesund", t3_i1: "Gurke", t3_i2: "Schokolade", t3_i3: "Paprika", t3_i4: "Chips",
    t4_title: "Der Hamster", t4_text: "Hamster sind Einzelgänger.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Wann sind sie wach?", t4_qa: "Nachts", t4_qb: "Mittags", t4_qc: "Morgens", t4_qd: "Nie",
    t4_w1: "Hamster", t4_w2: "bauen", t4_w3: "sich", t4_w4: "ein", t4_w5: "gemütliches", t4_w6: "Nest.",
    t4_l1: "Nacht", t4_r1: "Aktiv", t4_l2: "Tag", t4_r2: "Schlafen", t4_l3: "Bau", t4_r3: "Wohnen",
    t4_sent: "Der Hamster schläft am ___.", t4_qa2: "Tag", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Hamster", t4_f2: "laufen", t4_f3: "viele", t4_f4: "Kilometer", t4_f5: "im", t4_f6: "Rad.",
    t4_tk1: "In", t4_tk2: "den", t4_tk3: "Backentaschen", t4_tk4: "tragen", t4_tk5: "sie", t4_tk6: "ihr", t4_tk7: "Futter.", t4_tk8: "",
    t4_bl1: "Hamster", t4_bl2: "Hund", t4_i1: "Laufrad", t4_i2: "Leine", t4_i3: "Körner", t4_i4: "Knochen",
    t5_title: "Fische", t5_text: "Fische atmen unter Wasser.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Womit atmen sie?", t5_qa: "Kiemen", t5_qb: "Lungen", t5_qc: "Nase", t5_qd: "Mund",
    t5_w1: "Fische", t5_w2: "schwimmen", t5_w3: "elegant", t5_w4: "durch", t5_w5: "das", t5_w6: "Aquarium.",
    t5_l1: "Goldfisch", t5_r1: "Klein", t5_l2: "Hai", t5_r2: "Groß", t5_l3: "Wal", t5_r3: "Säugetier",
    t5_sent: "Fische haben ___ am Körper.", t5_qa2: "Schuppen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Das", t5_f2: "Wasser", t5_f3: "muss", t5_f4: "immer", t5_f5: "sauber", t5_f6: "sein.",
    t5_tk1: "Fische", t5_tk2: "haben", t5_tk3: "Flossen", t5_tk4: "um", t5_tk5: "zu", t5_tk6: "schwimmen.", t5_tk7: "", t5_tk8: "",
    t5_bl1: "Wasser", t5_bl2: "Land", t5_i1: "Fisch", t5_i2: "Hund", t5_i3: "Hai", t5_i4: "Katze",
    t6_title: "Wellensittiche", t6_text: "Sie sind kleine Papageien.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Können sie fliegen?", t6_qa: "Ja", t6_qb: "Nein", t6_qc: "Nur im Wasser", t6_qd: "Vielleicht",
    t6_w1: "Wellensittiche", t6_w2: "knabbern", t6_w3: "gerne", t6_w4: "an", t6_w5: "frischen", t6_w6: "Zweigen.",
    t6_l1: "Flügel", t6_r1: "Fliegen", t6_l2: "Schnabel", t6_r2: "Picken", t6_l3: "Kralle", t6_r3: "Festhalten",
    t6_sent: "Vögel haben einen harten ___.", t6_qa2: "Schnabel", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Sie", t6_f2: "zwitschern", t6_f3: "den", t6_f4: "ganzen", t6_f5: "Tag", t6_f6: "fröhlich.",
    t6_tk1: "Vögel", t6_tk2: "legen", t6_tk3: "Eier", t6_tk4: "in", t6_tk5: "ihre", t6_tk6: "Nester.", t6_tk7: "", t6_tk8: "",
    t6_bl1: "Vogel", t6_bl2: "Säugetier", t6_i1: "Feder", t6_i2: "Fell", t6_i3: "Schnabel", t6_i4: "Zähne",
    t7_title: "Tierpflege", t7_text: "Tiere brauchen Pflege.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Was ist wichtig?", t7_qa: "Sauberkeit", t7_qb: "Lärm", t7_qc: "Dunkelheit", t7_qd: "Eis",
    t7_w1: "Jeden", t7_w2: "Tag", t7_w3: "brauchen", t7_w4: "Tiere", t7_w5: "frisches", t7_w6: "Wasser.",
    t7_l1: "Bürsten", t7_r1: "Fell", t7_l2: "Füttern", t7_r2: "Bauch", t7_l3: "Säubern", t7_r3: "Stall",
    t7_sent: "Wir reinigen den ___.", t7_qa2: "Käfig", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Pflege", t7_f2: "ist", t7_f3: "wichtig", t7_f4: "für", t7_f5: "die", t7_f6: "Gesundheit.",
    t7_tk1: "Regelmäßiges", t7_tk2: "Bürsten", t7_tk3: "entfernt", t7_tk4: "die", t7_tk5: "losen", t7_tk6: "Haare.", t7_tk7: "", t7_tk8: "",
    t7_bl1: "Pflege", t7_bl2: "Spielzeug", t7_i1: "Bürste", t7_i2: "Ball", t7_i3: "Wasser", t7_i4: "Tunnel",
    t8_title: "Verantwortung", t8_text: "Tiere sind keine Spielzeuge.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Darf man sie quälen?", t8_qa: "Nein", t8_qb: "Ja", t8_qc: "Manchmal", t8_qd: "Egal",
    t8_w1: "Ein", t8_w2: "Haustier", t8_w3: "bleibt", t8_w4: "viele", t8_w5: "Jahre", t8_w6: "bei",
    t8_l1: "Liebe", t8_r1: "Herz", t8_l2: "Zeit", t8_r2: "Uhr", t8_l3: "Geld", t8_r3: "Sparschwein",
    t8_sent: "Ich sorge gut für mein ___.", t8_qa2: "Haustier", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "müssen", t8_f3: "unser", t8_f4: "Tier", t8_f5: "immer", t8_f6: "gut",
    t8_tk1: "Tiere", t8_tk2: "brauchen", t8_tk3: "Aufmerksamkeit", t8_tk4: "und", t8_tk5: "viel", t8_tk6: "Zuneigung.", t8_tk7: "", t8_tk8: "",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Streicheln", t8_i2: "Schlagen", t8_i3: "Füttern", t8_i4: "Vergessen",
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
    svg: { type: "word-display", word: "Der Hamster", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Fische", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wellensittiche", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    t1_title: "Wochentage", t1_text: "Es gibt sieben Tage.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was ist nach Montag?", t1_qa: "Dienstag", t1_qb: "Sonntag", t1_qc: "Freitag", t1_qd: "Samstag",
    t1_w1: "Am", t1_w2: "Wochenende", t1_w3: "haben", t1_w4: "wir", t1_w5: "keine", t1_w6: "Schule.",
    t1_l1: "Montag", t1_r1: "Wochenstart", t1_l2: "Samstag", t1_r2: "Wochenende", t1_l3: "Mittwoch", t1_r3: "Wochenmitte",
    t1_sent: "Die Woche hat ___ Tage.", t1_qa2: "sieben", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Nach", t1_f2: "dem", t1_f3: "Sonntag", t1_f4: "kommt", t1_f5: "wieder", t1_f6: "der",
    t1_tk1: "Der", t1_tk2: "Donnerstag", t1_tk3: "folgt", t1_tk4: "direkt", t1_tk5: "nach", t1_tk6: "dem", t1_tk7: "Mittwoch.", t1_tk8: "",
    t1_bl1: "Schultag", t1_bl2: "Wochenende", t1_i1: "Montag", t1_i2: "Samstag", t1_i3: "Dienstag", t1_i4: "Sonntag",
    t2_title: "Die Monate", t2_text: "Zwölf Monate bilden ein Jahr.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Wie viele Monate?", t2_qa: "12", t2_qb: "10", t2_qc: "7", t2_qd: "24",
    t2_w1: "Der", t2_w2: "Januar", t2_w3: "ist", t2_w4: "immer", t2_w5: "der", t2_w6: "erste",
    t2_l1: "Januar", t2_r1: "Winter", t2_l2: "Juli", t2_r2: "Sommer", t2_l3: "Dezember", t2_r3: "Ende",
    t2_sent: "Ein Jahr hat ___ Monate.", t2_qa2: "zwölf", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Im", t2_f2: "Dezember", t2_f3: "feiern", t2_f4: "viele", t2_f5: "Menschen", t2_f6: "Weihnachten.",
    t2_tk1: "Der", t2_tk2: "Februar", t2_tk3: "ist", t2_tk4: "der", t2_tk5: "kürzeste", t2_tk6: "Monat", t2_tk7: "im", t2_tk8: "Jahr.",
    t2_bl1: "Sommermonate", t2_bl2: "Wintermonate", t2_i1: "Juli", t2_i2: "Januar", t2_i3: "August", t2_i4: "Dezember",
    t3_title: "Jahreszeiten", t3_text: "Es gibt vier Jahreszeiten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Wann ist es heiß?", t3_qa: "Sommer", t3_qb: "Winter", t3_qc: "Herbst", t3_qd: "Ostern",
    t3_w1: "Im", t3_w2: "Winter", t3_w3: "bauen", t3_w4: "wir", t3_w5: "einen", t3_w6: "Schneemann.",
    t3_l1: "Frühling", t3_r1: "Blüten", t3_l2: "Sommer", t3_r2: "Hitze", t3_l3: "Winter", t3_r3: "Schnee",
    t3_sent: "Im ___ fallen die Blätter.", t3_qa2: "Herbst", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Jede", t3_f2: "Jahreszeit", t3_f3: "dauert", t3_f4: "ungefähr", t3_f5: "drei", t3_f6: "Monate.",
    t3_tk1: "Im", t3_tk2: "Herbst", t3_tk3: "färben", t3_tk4: "sich", t3_tk5: "viele", t3_tk6: "Blätter", t3_tk7: "bunt.", t3_tk8: "",
    t3_bl1: "Warm", t3_bl2: "Kalt", t3_i1: "Sommer", t3_i2: "Winter", t3_i3: "Frühling", t3_i4: "Herbst",
    t4_title: "Die Uhr", t4_text: "Die Uhr zeigt die Zeit.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Was zeigt 12:00?", t4_qa: "Mittag", t4_qb: "Abend", t4_qc: "Nacht", t4_qd: "Früh",
    t4_w1: "Der", t4_w2: "kurze", t4_w3: "Zeiger", t4_w4: "gibt", t4_w5: "die", t4_w6: "Stunden",
    t4_l1: "Stunde", t4_r1: "Lang", t4_l2: "Minute", t4_r2: "Mittel", t4_l3: "Sekunde", t4_r3: "Kurz",
    t4_sent: "Eine Stunde hat ___ Minuten.", t4_qa2: "sechzig", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Mittags", t4_f2: "um", t4_f3: "zwölf", t4_f4: "essen", t4_f5: "wir", t4_f6: "zu",
    t4_tk1: "Zifferblätter", t4_tk2: "helfen", t4_tk3: "uns", t4_tk4: "die", t4_tk5: "genaue", t4_tk6: "Zeit", t4_tk7: "abzulesen.", t4_tk8: "",
    t4_bl1: "Morgens", t4_bl2: "Abends", t4_i1: "Frühstück", t4_i2: "Schlafen", t4_i3: "Aufstehen", t4_i4: "Träumen",
    t5_title: "Gestern-Heute", t5_text: "Zeit vergeht immer.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Was war vor heute?", t5_qa: "Gestern", t5_qb: "Morgen", t5_qc: "Mittwoch", t5_qd: "Übermorgen",
    t5_w1: "Gestern", t5_w2: "hatten", t5_w3: "wir", t5_w4: "Sport", t5_w5: "in", t5_w6: "der",
    t5_l1: "Vergangenheit", t5_r1: "Gestern", t5_l2: "Gegenwart", t5_r2: "Heute", t5_l3: "Zukunft", t5_r3: "Morgen",
    t5_sent: "Morgen ist der ___ Tag.", t5_qa2: "nächste", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Heute", t5_f2: "ist", t5_f3: "ein", t5_f4: "schöner", t5_f5: "Tag", t5_f6: "zum",
    t5_tk1: "Morgen", t5_tk2: "werden", t5_tk3: "wir", t5_tk4: "einen", t5_tk5: "Ausflug", t5_tk6: "in", t5_tk7: "den", t5_tk8: "Zoo",
    t5_bl1: "Vergangenheit", t5_bl2: "Zukunft", t5_i1: "Gestern", t5_i2: "Morgen", t5_i3: "Vorgestern", t5_i4: "Übermorgen",
    t6_title: "Feiertage", t6_text: "Wir feiern Feste.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Wann ist Weihnachten?", t6_qa: "Dezember", t6_qb: "Mai", t6_qc: "August", t6_qd: "April",
    t6_w1: "An", t6_w2: "Feiertagen", t6_w3: "besuchen", t6_w4: "wir", t6_w5: "oft", t6_w6: "unsere",
    t6_l1: "Nikolaus", t6_r1: "Stiefel", t6_l2: "Ostern", t6_r2: "Eier", t6_l3: "Silvester", t6_r3: "Feuerwerk",
    t6_sent: "Ostern ist im ___.", t6_qa2: "Frühling", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Silvester", t6_f2: "feiern", t6_f3: "wir", t6_f4: "den", t6_f5: "Beginn", t6_f6: "des",
    t6_tk1: "Am", t6_tk2: "Geburtstag", t6_tk3: "darf", t6_tk4: "man", t6_tk5: "viele", t6_tk6: "Kerzen", t6_tk7: "auspusten.", t6_tk8: "",
    t6_bl1: "Kirchlich", t6_bl2: "Weltlich", t6_i1: "Ostern", t6_i2: "Neujahr", t6_i3: "Pfingsten", t6_i4: "Tag der Einheit",
    t7_title: "Geburtstag", t7_text: "Dein Ehrentag im Jahr.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Was kriegst du?", t7_qa: "Kuchen", t7_qb: "Hausaufgaben", t7_qc: "Regen", t7_qd: "Arbeit",
    t7_w1: "Zum", t7_w2: "Geburtstag", t7_w3: "backt", t7_w4: "meine", t7_w5: "Mama", t7_w6: "einen",
    t7_l1: "Kuchen", t7_r1: "Essen", t7_l2: "Kerze", t7_r2: "Licht", t7_l3: "Geschenk", t7_r3: "Überraschung",
    t7_sent: "Ich habe ___ im Jahr Geburtstag.", t7_qa2: "einmal", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Ich", t7_f2: "lade", t7_f3: "meine", t7_f4: "besten", t7_f5: "Freunde", t7_f6: "zur",
    t7_tk1: "Jedes", t7_tk2: "Jahr", t7_tk3: "wird", t7_tk4: "man", t7_tk5: "genau", t7_tk6: "ein", t7_tk7: "Jahr", t7_tk8: "älter.",
    t7_bl1: "Feiern", t7_bl2: "Geschenke", t7_i1: "Singen", t7_i2: "Spielzeug", t7_i3: "Tanzen", t7_i4: "Buch",
    t8_title: "Zeit-Check", t8_text: "Alles über die Zeit.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Hat das Jahr 365 Tage?", t8_qa: "Ja", t8_qb: "Nein", t8_qc: "Nur im Winter", t8_qd: "Vielleicht",
    t8_w1: "Ein", t8_w2: "Kalender", t8_w3: "hilft", t8_w4: "uns", t8_w5: "Termine", t8_w6: "zu",
    t8_l1: "Woche", t8_r1: "Tage", t8_l2: "Monat", t8_r2: "Wochen", t8_l3: "Jahr", t8_r3: "Monate",
    t8_sent: "Die Zeit bleibt nie ___.", t8_qa2: "stehen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Ohne", t8_f2: "Uhren", t8_f3: "wüssten", t8_f4: "wir", t8_f5: "nicht", t8_f6: "wie",
    t8_tk1: "Sanduhren", t8_tk2: "wurden", t8_tk3: "früher", t8_tk4: "oft", t8_tk5: "zum", t8_tk6: "Messen", t8_tk7: "der", t8_tk8: "Zeit",
    t8_bl1: "Kurz", t8_bl2: "Lang", t8_i1: "Sekunde", t8_i2: "Jahrhundert", t8_i3: "Minute", t8_i4: "Jahrtausend",
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Feiertage", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    t1_title: "Magnete", t1_text: "Magnete ziehen Eisen an.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was ist magnetisch?", t1_qa: "Eisen", t1_qb: "Holz", t1_qc: "Papier", t1_qd: "Gold",
    t1_w1: "Ein", t1_w2: "Magnet", t1_w3: "hält", t1_w4: "Notizen", t1_w5: "fest", t1_w6: "an",
    t1_l1: "Eisen", t1_r1: "Magnetisch", t1_l2: "Holz", t1_r2: "Nicht-Magnetisch", t1_l3: "Papier", t1_r3: "Nicht-Magnetisch",
    t1_sent: "Magnete haben zwei ___.", t1_qa2: "Pole", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Manche", t1_f2: "Steine", t1_f3: "in", t1_f4: "der", t1_f5: "Natur", t1_f6: "sind",
    t1_tk1: "Magnetismus", t1_tk2: "ist", t1_tk3: "eine", t1_tk4: "unsichtbare", t1_tk5: "Kraft", t1_tk6: "der", t1_tk7: "Natur.", t1_tk8: "",
    t1_bl1: "Metall", t1_bl2: "Nicht-Metall", t1_i1: "Nagel", t1_i2: "Stein", t1_i3: "Büroklammer", t1_i4: "Blatt",
    t2_title: "Anziehung", t2_text: "Pole ziehen sich an.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Welche ziehen sich an?", t2_qa: "Nord und Süd", t2_qb: "Nord und Nord", t2_qc: "Süd und Süd", t2_qd: "Keine",
    t2_w1: "Der", t2_w2: "Nordpol", t2_w3: "zieht", t2_w4: "den", t2_w5: "Südpol", t2_w6: "kräftig",
    t2_l1: "Nordpol", t2_r1: "Südpol", t2_l2: "Südpol", t2_r2: "Nordpol", t2_l3: "Eisen", t2_r3: "Magnet",
    t2_sent: "Gegensätze ziehen sich ___.", t2_qa2: "an", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Man", t2_f2: "spürt", t2_f3: "wie", t2_f4: "die", t2_f5: "Magnete", t2_f6: "zusammen",
    t2_tk1: "Magnete", t2_tk2: "können", t2_tk3: "sogar", t2_tk4: "durch", t2_tk5: "dünnes", t2_tk6: "Papier", t2_tk7: "hindurch", t2_tk8: "ziehen.",
    t2_bl1: "Anziehung", t2_bl2: "Abstoßung", t2_i1: "Nord-Süd", t2_i2: "Nord-Nord", t2_i3: "Süd-Nord", t2_i4: "Süd-Süd",
    t3_title: "Abstoßung", t3_text: "Gleiche Pole stoßen ab.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Was machen 2 Nordpole?", t3_qa: "Abstoßen", t3_qb: "Anziehen", t3_qc: "Kleben", t3_qd: "Schmelzen",
    t3_w1: "Zwei", t3_w2: "gleiche", t3_w3: "Pole", t3_w4: "lassen", t3_w5: "sich", t3_w6: "nicht",
    t3_l1: "Nord/Nord", t3_r1: "Abstoßen", t3_l2: "Nord/Süd", t3_r2: "Anziehen", t3_l3: "Gleiche Pole", t3_r3: "Stoßen ab",
    t3_sent: "Gleiche Pole stoßen sich ___.", t3_qa2: "ab", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Es", t3_f2: "fühlt", t3_f3: "sich", t3_f4: "wie", t3_f5: "ein", t3_f6: "unsichtbarer",
    t3_tk1: "Wenn", t3_tk2: "man", t3_tk3: "gleiche", t3_tk4: "Pole", t3_tk5: "zusammenbringt", t3_tk6: "entsteht", t3_tk7: "eine", t3_tk8: "Kraft.",
    t3_bl1: "Gleich", t3_bl2: "Ungleich", t3_i1: "Nord-Nord", t3_i2: "Nord-Süd", t3_i3: "Süd-Süd", t3_i4: "Süd-Nord",
    t4_title: "Die Pole", t4_text: "Nord- und Südpol.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Welche Farbe hat Nord?", t4_qa: "Rot", t4_qb: "Blau", t4_qc: "Grün", t4_qd: "Gelb",
    t4_w1: "Jeder", t4_w2: "Magnet", t4_w3: "hat", t4_w4: "immer", t4_w5: "zwei", t4_w6: "verschiedene",
    t4_l1: "Nord", t4_r1: "Rot", t4_l2: "Süd", t4_r2: "Blau", t4_l3: "Mitte", t4_r3: "Schwach",
    t4_sent: "Der Südpol ist oft ___.", t4_qa2: "blau", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "An", t4_f2: "den", t4_f3: "Enden", t4_f4: "ist", t4_f5: "die", t4_f6: "Magnetkraft",
    t4_tk1: "Die", t4_tk2: "Pole", t4_tk3: "befinden", t4_tk4: "sich", t4_tk5: "meistens", t4_tk6: "an", t4_tk7: "den", t4_tk8: "Spitzen.",
    t4_bl1: "Magnet", t4_bl2: "Kein Magnet", t4_i1: "Hufeisen", t4_i2: "Holzstab", t4_i3: "Stabmagnet", t4_i4: "Glasrohr",
    t5_title: "Stoffe", t5_text: "Nicht alles ist magnetisch.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Ist Gold magnetisch?", t5_qa: "Nein", t5_qb: "Ja", t5_qc: "Nur im Wasser", t5_qd: "Immer",
    t5_w1: "Plastik", t5_w2: "und", t5_w3: "Gummi", t5_w4: "reagieren", t5_w5: "gar", t5_w6: "nicht",
    t5_l1: "Nagel", t5_r1: "Eisen", t5_l2: "Löffel", t5_r2: "Silber", t5_l3: "Münze", t5_r3: "Kupfer",
    t5_sent: "Silber ist ___ magnetisch.", t5_qa2: "nicht", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Wir", t5_f2: "testen", t5_f3: "verschiedene", t5_f4: "Dinge", t5_f5: "aus", t5_f6: "unserem",
    t5_tk1: "Nur", t5_tk2: "bestimmte", t5_tk3: "Metalle", t5_tk4: "wie", t5_tk5: "Eisen", t5_tk6: "werden", t5_tk7: "angezogen.", t5_tk8: "",
    t5_bl1: "Magnetisch", t5_bl2: "Nicht-Magnetisch", t5_i1: "Schraube", t5_i2: "Radiergummi", t5_i3: "Schlüssel", t5_i4: "Lineal",
    t6_title: "Kompass", t6_text: "Die Erde ist ein Magnet.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Wohin zeigt die Nadel?", t6_qa: "Norden", t6_qb: "Süden", t6_qc: "Oben", t6_qd: "Küche",
    t6_w1: "Die", t6_w2: "magnetische", t6_w3: "Nadel", t6_w4: "dreht", t6_w5: "sich", t6_w6: "immer",
    t6_l1: "Nadel", t6_r1: "Magnetisch", t6_l2: "Gehäuse", t6_r2: "Schutz", t6_l3: "Skala", t6_r3: "Zahlen",
    t6_sent: "Ein Kompass hilft bei der ___.", t6_qa2: "Orientierung", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Früher", t6_f2: "nutzten", t6_f3: "Seefahrer", t6_f4: "den", t6_f5: "Kompass", t6_f6: "auf",
    t6_tk1: "Der", t6_tk2: "Nordpol", t6_tk3: "der", t6_tk4: "Nadel", t6_tk5: "zeigt", t6_tk6: "zum", t6_tk7: "magnetischen", t6_tk8: "Nordpol.",
    t6_bl1: "Richtung", t6_bl2: "Keine Richtung", t6_i1: "Norden", t6_i2: "Oben", t6_i3: "Süden", t6_i4: "Unten",
    t7_title: "Experiment", t7_text: "Wir forschen selbst.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Wirkt Kraft durch Glas?", t7_qa: "Ja", t7_qb: "Nein", t7_qc: "Nur nachts", t7_qd: "Nie",
    t7_w1: "Wir", t7_w2: "beobachten", t7_w3: "wie", t7_w4: "der", t7_w5: "Magnet", t7_w6: "Dinge",
    t7_l1: "Hypothese", t7_r1: "Vermutung", t7_l2: "Versuch", t7_r2: "Tun", t7_l3: "Ergebnis", t7_r3: "Wissen",
    t7_sent: "Wir führen ein ___ durch.", t7_qa2: "Experiment", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "In", t7_f2: "unserem", t7_f3: "Protokoll", t7_f4: "schreiben", t7_f5: "wir", t7_f6: "alle",
    t7_tk1: "Ein", t7_tk2: "Experiment", t7_tk3: "muss", t7_tk4: "man", t7_tk5: "immer", t7_tk6: "sehr", t7_tk7: "genau", t7_tk8: "planen.",
    t7_bl1: "Material", t7_bl2: "Ergebnis", t7_i1: "Magnet", t7_i2: "Zieht an", t7_i3: "Büroklammer", t7_i4: "Stößt ab",
    t8_title: "Magnet-Check", t8_text: "Wissenstest Magnete.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Gibt es Magnetkraft?", t8_qa: "Ja", t8_qb: "Nein", t8_qc: "Nur im Film", t8_qd: "Vielleicht",
    t8_w1: "Jetzt", t8_w2: "wissen", t8_w3: "wir", t8_w4: "viel", t8_w5: "über", t8_w6: "die",
    t8_l1: "Anziehung", t8_r1: "Zusammen", t8_l2: "Abstoßung", t8_r2: "Weg", t8_l3: "Magnet", t8_r3: "Eisen",
    t8_sent: "Magnetismus ist eine ___ Kraft.", t8_qa2: "unsichtbare", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Magnete", t8_f2: "sind", t8_f3: "nützliche", t8_f4: "Helfer", t8_f5: "in", t8_f6: "vielen",
    t8_tk1: "Sogar", t8_tk2: "in", t8_tk3: "unseren", t8_tk4: "Handys", t8_tk5: "sind", t8_tk6: "winzige", t8_tk7: "Magnete", t8_tk8: "verbaut.",
    t8_bl1: "Magnetkraft", t8_bl2: "Keine Kraft", t8_i1: "Eisen", t8_i2: "Holz", t8_i3: "Nickel", t8_i4: "Plastik",
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
    svg: { type: "word-display", word: "Die Pole", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Stoffe", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Kompass", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    t1_title: "Zustände", t1_text: "Eis, Wasser und Dampf.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was ist Eis?", t1_qa: "Fest", t1_qb: "Flüssig", t1_qc: "Gas", t1_qd: "Warm",
    t1_w1: "Wasser", t1_w2: "gefriert", t1_w3: "bei", t1_w4: "null", t1_w5: "Grad", t1_w6: "zu",
    t1_l1: "Eis", t1_r1: "Fest", t1_l2: "Wasser", t1_r2: "Flüssig", t1_l3: "Dampf", t1_r3: "Gasförmig",
    t1_sent: "Dampf ist ___ Wasser.", t1_qa2: "gasförmiges", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wenn", t1_f2: "man", t1_f3: "Eis", t1_f4: "erwärmt", t1_f5: "wird", t1_f6: "es",
    t1_tk1: "Wolken", t1_tk2: "bestehen", t1_tk3: "aus", t1_tk4: "vielen", t1_tk5: "winzigen", t1_tk6: "Wassertropfen.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Kalt", t1_bl2: "Heiß", t1_i1: "Eis", t1_i2: "Dampf", t1_i3: "Schnee", t1_i4: "Siedendes Wasser",
    t2_title: "Kreislauf", t2_text: "Wasser wandert herum.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Was macht die Sonne?", t2_qa: "Verdunstet Wasser", t2_qb: "Macht Eis", t2_qc: "Nichts", t2_qd: "Kühlt",
    t2_w1: "Das", t2_w2: "Wasser", t2_w3: "auf", t2_w4: "der", t2_w5: "Erde", t2_w6: "ist",
    t2_l1: "Sonne", t2_r1: "Verdunsten", t2_l2: "Wolke", t2_r2: "Regnen", t2_l3: "Fluss", t2_r3: "Fließen",
    t2_sent: "Der Regen füllt die ___.", t2_qa2: "Meere", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Der", t2_f2: "Wasserkreislauf", t2_f3: "ist", t2_f4: "wichtig", t2_f5: "für", t2_f6: "alle",
    t2_tk1: "Verdunstung", t2_tk2: "bedeutet", t2_tk3: "dass", t2_tk4: "Wasser", t2_tk5: "zu", t2_tk6: "unsichtbarem", t2_tk7: "Dampf", t2_tk8: "wird.",
    t2_bl1: "Oben", t2_bl2: "Unten", t2_i1: "Wolke", t2_i2: "See", t2_i3: "Regen", t2_i4: "Grundwasser",
    t3_title: "Schwimmen", t3_text: "Was sinkt, was schwimmt?", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Schwimmt ein Stein?", t3_qa: "Nein", t3_qb: "Ja", t3_qc: "Nur im Meer", t3_qd: "Manchmal",
    t3_w1: "Ein", t3_w2: "schweres", t3_w3: "Schiff", t3_w4: "kann", t3_w5: "trotzdem", t3_w6: "oben",
    t3_l1: "Stein", t3_r1: "Sinken", t3_l2: "Korken", t3_r2: "Schwimmen", t3_l3: "Münze", t3_r3: "Geht unter",
    t3_sent: "Holz ___ auf dem Wasser.", t3_qa2: "schwimmt", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Luft", t3_f2: "im", t3_f3: "Inneren", t3_f4: "hilft", t3_f5: "Dingen", t3_f6: "beim",
    t3_tk1: "Dichte", t3_tk2: "bestimmt", t3_tk3: "ob", t3_tk4: "ein", t3_tk5: "Gegenstand", t3_tk6: "sinkt", t3_tk7: "oder", t3_tk8: "schwimmt.",
    t3_bl1: "Schwimmt", t3_bl2: "Sinkt", t3_i1: "Holz", t3_i2: "Stein", t3_i3: "Plastikente", t3_i4: "Eisenkugel",
    t4_title: "Trinkwasser", t4_text: "Wasser zum Trinken.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Darf man Meerwasser trinken?", t4_qa: "Nein, zu salzig", t4_qb: "Ja, immer", t4_qc: "Nur nachts", t4_qd: "Vielleicht",
    t4_w1: "Unser", t4_w2: "Trinkwasser", t4_w3: "kommt", t4_w4: "oft", t4_w5: "tief", t4_w6: "aus",
    t4_l1: "Grundwasser", t4_r1: "Trinken", t4_l2: "Salzwasser", t4_r2: "Meer", t4_l3: "Regen", t4_r3: "Natur",
    t4_sent: "Wir brauchen ___ Trinkwasser.", t4_qa2: "sauberes", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "In", t4_f2: "einem", t4_f3: "Wasserwerk", t4_f4: "wird", t4_f5: "das", t4_f6: "Wasser",
    t4_tk1: "Sauberes", t4_tk2: "Trinkwasser", t4_tk3: "ist", t4_tk4: "unser", t4_tk5: "kostbarstes", t4_tk6: "Gut.", t4_tk7: "", t4_tk8: "",
    t4_bl1: "Trinkbar", t4_bl2: "Nicht Trinkbar", t4_i1: "Leitungswasser", t4_i2: "Meerwasser", t4_i3: "Mineralwasser", t4_i4: "Pfütze",
    t5_title: "Sparen", t5_text: "Wasser ist wertvoll.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Wie spart man Wasser?", t5_qa: "Kurz duschen", t5_qb: "Viel baden", t5_qc: "Hahn laufen lassen", t5_qd: "Gar nicht",
    t5_w1: "Beim", t5_w2: "Zähneputzen", t5_w3: "sollten", t5_w4: "wir", t5_w5: "den", t5_w6: "Wasserhahn",
    t5_l1: "Duschen", t5_r1: "Sparen", t5_l2: "Baden", t5_r2: "Viel Wasser", t5_l3: "Gießen", t5_r3: "Regentonne",
    t5_sent: "Jeder Tropfen ___.", t5_qa2: "zählt", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Regenwasser", t5_f2: "kann", t5_f3: "man", t5_f4: "gut", t5_f5: "für", t5_f6: "den",
    t5_tk1: "Wassersparen", t5_tk2: "schont", t5_tk3: "die", t5_tk4: "Umwelt", t5_tk5: "und", t5_tk6: "unseren", t5_tk7: "Geldbeutel.", t5_tk8: "",
    t5_bl1: "Sparsam", t5_bl2: "Verschwenderisch", t5_i1: "Duschen", t5_i2: "Vollbad", t5_i3: "Becher", t5_i4: "Laufender Hahn",
    t6_title: "Lebensraum", t6_text: "Tiere im Wasser.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Wer lebt im See?", t6_qa: "Fisch", t6_qb: "Hase", t6_qc: "Vogel", t6_qd: "Igel",
    t6_w1: "Im", t6_w2: "Teich", t6_w3: "können", t6_w4: "wir", t6_w5: "viele", t6_w6: "Frösche",
    t6_l1: "Forelle", t6_r1: "Bach", t6_l2: "Hai", t6_r2: "Meer", t6_l3: "Frosch", t6_r3: "Teich",
    t6_sent: "Der Ozean ist riesig und ___.", t6_qa2: "salzig", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Viele", t6_f2: "Tiere", t6_f3: "können", t6_f4: "nur", t6_f5: "im", t6_f6: "Wasser",
    t6_tk1: "Korallenriffe", t6_tk2: "sind", t6_tk3: "sehr", t6_tk4: "bunte", t6_tk5: "und", t6_tk6: "artenreiche", t6_tk7: "Lebensräume.", t6_tk8: "",
    t6_bl1: "Süßwasser", t6_bl2: "Salzwasser", t6_i1: "See", t6_i2: "Meer", t6_i3: "Bach", t6_i4: "Ozean",
    t7_title: "Regen", t7_text: "Es regnet viel.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Was brauchen Blumen?", t7_qa: "Wasser", t7_qb: "Eis", t7_qc: "Cola", t7_qd: "Sand",
    t7_w1: "Nach", t7_w2: "dem", t7_w3: "Regen", t7_w4: "sieht", t7_w5: "man", t7_w6: "oft",
    t7_l1: "Niesel", t7_r1: "Leicht", t7_l2: "Schauer", t7_r2: "Kurz", t7_l3: "Gewitter", t7_r3: "Stark",
    t7_sent: "Regen ist gut für die ___.", t7_qa2: "Natur", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Der", t7_f2: "Regen", t7_f3: "wäscht", t7_f4: "den", t7_f5: "Staub", t7_f6: "aus",
    t7_tk1: "Ohne", t7_tk2: "ausreichenden", t7_tk3: "Regen", t7_tk4: "können", t7_tk5: "die", t7_tk6: "Pflanzen", t7_tk7: "nicht", t7_tk8: "wachsen.",
    t7_bl1: "Nass", t7_bl2: "Trocken", t7_i1: "Regen", t7_i2: "Wüste", t7_i3: "Pfütze", t7_i4: "Dürre",
    t8_title: "Wasser-Check", t8_text: "Alles über Wasser.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Ist Wasser wichtig?", t8_qa: "Ja", t8_qb: "Nein", t8_qc: "Nur im Sommer", t8_qd: "Vielleicht",
    t8_w1: "Wasser", t8_w2: "ist", t8_w3: "die", t8_w4: "Grundlage", t8_w5: "für", t8_w6: "alles",
    t8_l1: "Flüssig", t8_r1: "Trinken", t8_l2: "Fest", t8_r2: "Eis", t8_l3: "Gas", t8_r3: "Dampf",
    t8_sent: "Wir bestehen selbst aus viel ___.", t8_qa2: "Wasser", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "In", t8_f2: "der", t8_f3: "Schule", t8_f4: "haben", t8_f5: "wir", t8_f6: "viel",
    t8_tk1: "Schutz", t8_tk2: "unserer", t8_tk3: "Gewässer", t8_tk4: "ist", t8_tk5: "eine", t8_tk6: "Aufgabe", t8_tk7: "für", t8_tk8: "alle.",
    t8_bl1: "Wasser", t8_bl2: "Land", t8_i1: "Ozean", t8_i2: "Wüste", t8_i3: "Fluss", t8_i4: "Gebirge",
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
    svg: { type: "word-display", word: "Sparen", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Lebensraum", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    t1_title: "Das Reh", t1_text: "Rehe fressen Gras.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Wie ist das Reh?", t1_qa: "Scheu", t1_qb: "Mutig", t1_qc: "Laut", t1_qd: "Böse",
    t1_w1: "Rehe", t1_w2: "verstecken", t1_w3: "sich", t1_w4: "gerne", t1_w5: "im", t1_w6: "hohen",
    t1_l1: "Fell", t1_r1: "Braun", t1_l2: "Beine", t1_r2: "Dünn", t1_l3: "Augen", t1_r3: "Groß",
    t1_sent: "Ein männliches Reh heißt ___.", t1_qa2: "Rehbock", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Sie", t1_f2: "haben", t1_f3: "einen", t1_f4: "sehr", t1_f5: "guten", t1_f6: "Geruchssinn.",
    t1_tk1: "Kitz", t1_tk2: "nennt", t1_tk3: "man", t1_tk4: "das", t1_tk5: "Kind", t1_tk6: "eines", t1_tk7: "Rehes.", t1_tk8: "",
    t1_bl1: "Nahrung", t1_bl2: "Feind", t1_i1: "Kräuter", t1_i2: "Wolf", t1_i3: "Gras", t1_i4: "Luchs",
    t2_title: "Der Fuchs", t2_text: "Füchse sind schlau.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Wo wohnt er?", t2_qa: "Bau", t2_qb: "Nest", t2_qc: "Baum", t2_qd: "Haus",
    t2_w1: "Der", t2_w2: "Fuchs", t2_w3: "schleicht", t2_w4: "nachts", t2_w5: "durch", t2_w6: "den Wald.",
    t2_l1: "Fuchs", t2_r1: "Bau", t2_l2: "Wolf", t2_r2: "Höhle", t2_l3: "Hase", t2_r3: "Sasse",
    t2_sent: "Der Fuchs hat rotes ___.", t2_qa2: "Fell", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Füchse", t2_f2: "fressen", t2_f3: "Mäuse", t2_f4: "und", t2_f5: "auch", t2_f6: "süße",
    t2_tk1: "Ein", t2_tk2: "Fuchsschwanz", t2_tk3: "wird", t2_tk4: "in", t2_tk5: "der", t2_tk6: "Jägersprache", t2_tk7: "Lunte", t2_tk8: "genannt.",
    t2_bl1: "Fuchs", t2_bl2: "Vogel", t2_i1: "Lunte", t2_i2: "Schnabel", t2_i3: "Pfote", t2_i4: "Feder",
    t3_title: "Wildschwein", t3_text: "Sie wühlen im Boden.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Wie heißen die Kleinen?", t3_qa: "Frischlinge", t3_qb: "Welpen", t3_qc: "Kücken", t3_qd: "Fohlen",
    t3_w1: "Wildschweine", t3_w2: "suchen", t3_w3: "mit", t3_w4: "der", t3_w5: "Schnauze", t3_w6: "nach",
    t3_l1: "Bache", t3_r1: "Mutter", t3_l2: "Keiler", t3_r2: "Vater", t3_l3: "Frischling", t3_r3: "Kind",
    t3_sent: "Wildschweine haben harte ___.", t3_qa2: "Borsten", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Sie", t3_f2: "leben", t3_f3: "in", t3_f4: "einer", t3_f5: "Gruppe", t3_f6: "namens",
    t3_tk1: "Wildschweine", t3_tk2: "sind", t3_tk3: "Allesfresser", t3_tk4: "und", t3_tk5: "sehr", t3_tk6: "wehrhafte", t3_tk7: "Tiere.", t3_tk8: "",
    t3_bl1: "Familie", t3_bl2: "Körper", t3_i1: "Rotte", t3_i2: "Rüssel", t3_i3: "Bache", t3_i4: "Borsten",
    t4_title: "Eichhörnchen", t4_text: "Sie sammeln Nüsse.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Wie heißt ihr Nest?", t4_qa: "Kobel", t4_qb: "Höhle", t4_qc: "Stall", t4_qd: "Kiste",
    t4_w1: "Eichhörnchen", t4_w2: "klettern", t4_w3: "sehr", t4_w4: "flink", t4_w5: "die", t4_w6: "Bäume",
    t4_l1: "Nuss", t4_r1: "Futter", t4_l2: "Kobel", t4_r2: "Haus", t4_l3: "Schwanz", t4_r3: "Steuern",
    t4_sent: "Sie halten eine ___.", t4_qa2: "Winterruhe", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Im", t4_f2: "Herbst", t4_f3: "vergraben", t4_f4: "sie", t4_f5: "viele", t4_f6: "Vorräte",
    t4_tk1: "Das", t4_tk2: "Eichhörnchen", t4_tk3: "benutzt", t4_tk4: "seinen", t4_tk5: "Schwanz", t4_tk6: "als", t4_tk7: "Steuerruder.", t4_tk8: "",
    t4_bl1: "Futter", t4_bl2: "Feind", t4_i1: "Zapfen", t4_i2: "Marder", t4_i3: "Haselnuss", t4_i4: "Uhu",
    t5_title: "Die Eule", t5_text: "Eulen jagen nachts.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Können sie gut hören?", t5_qa: "Ja", t5_qb: "Nein", t5_qc: "Gar nicht", t5_qd: "Nur mittags",
    t5_w1: "Eulen", t5_w2: "haben", t5_w3: "sehr", t5_w4: "große", t5_w5: "und", t5_w6: "lichtempfindliche",
    t5_l1: "Uhu", t5_r1: "Groß", t5_l2: "Kauz", t5_r2: "Mittel", t5_l3: "Eule", t5_r3: "Vogel",
    t5_sent: "Eulen fliegen fast ___.", t5_qa2: "lautlos", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Sie", t5_f2: "können", t5_f3: "ihren", t5_f4: "Kopf", t5_f5: "sehr", t5_f6: "weit",
    t5_tk1: "Eulen", t5_tk2: "fressen", t5_tk3: "hauptsächlich", t5_tk4: "kleine", t5_tk5: "Nager", t5_tk6: "wie", t5_tk7: "Mäuse.", t5_tk8: "",
    t5_bl1: "Vogel", t5_bl2: "Säugetier", t5_i1: "Eule", t5_i2: "Reh", t5_i3: "Uhu", t5_i4: "Fuchs",
    t6_title: "Der Specht", t6_text: "Klopft an Bäume.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Warum klopft er?", t6_qa: "Futtersuche", t6_qb: "Spaß", t6_qc: "Musik", t6_qd: "Schlaf",
    t6_w1: "Der", t6_w2: "Buntspecht", t6_w3: "trommelt", t6_w4: "laut", t6_w5: "gegen", t6_w6: "das",
    t6_l1: "Schnabel", t6_r1: "Meißel", t6_l2: "Zunge", t6_r2: "Angel", t6_l3: "Kralle", t6_r3: "Haken",
    t6_sent: "Der Specht ist ein ___.", t6_qa2: "Zimmermann", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "In", t6_f2: "die", t6_f3: "Höhlen", t6_f4: "ziehen", t6_f5: "später", t6_f6: "andere",
    t6_tk1: "Spechte", t6_tk2: "haben", t6_tk3: "eine", t6_tk4: "extrem", t6_tk5: "lange", t6_tk6: "und", t6_tk7: "klebrige", t6_tk8: "Zunge.",
    t6_bl1: "Nahrung", t6_bl2: "Baum", t6_i1: "Käfer", t6_i2: "Eiche", t6_i3: "Larven", t6_i4: "Buche",
    t7_title: "Tierspuren", t7_text: "Abdrücke im Wald.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Was ist ein 'Tritt'?", t7_qa: "Ein Fußabdruck", t7_qb: "Ein Baum", t7_qc: "Ein Tier", t7_qd: "Ein Stein",
    t7_w1: "Wir", t7_w2: "bestimmen", t7_w3: "Tiere", t7_w4: "anhand", t7_w5: "ihrer", t7_w6: "Fußabdrücke.",
    t7_l1: "Reh", t7_r1: "Paarhuber", t7_l2: "Wildschwein", t7_r2: "Klauen", t7_l3: "Vogel", t7_r3: "Krallen",
    t7_sent: "Im Schnee sieht man ___.", t7_qa2: "Spuren", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Jedes", t7_f2: "Tier", t7_f3: "hinterlässt", t7_f4: "eine", t7_f5: "ganz", t7_f6: "eigene",
    t7_tk1: "Experten", t7_tk2: "können", t7_tk3: "sogar", t7_tk4: "lesen", t7_tk5: "wie", t7_tk6: "schnell", t7_tk7: "ein", t7_tk8: "Tier",
    t7_bl1: "Huf", t7_bl2: "Pfote", t7_i1: "Reh", t7_i2: "Hund", t7_i3: "Hirsch", t7_i4: "Katze",
    t8_title: "Wald-Check", t8_text: "Wissenstest Wald.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Ist der Wald wichtig?", t8_qa: "Ja", t8_qb: "Nein", t8_qc: "Nur für Vögel", t8_qd: "Vielleicht",
    t8_w1: "Wir", t8_w2: "verhalten", t8_w3: "uns", t8_w4: "im", t8_w5: "Wald", t8_w6: "leise",
    t8_l1: "Nadelbaum", t8_r1: "Tanne", t8_l2: "Laubbaum", t8_r2: "Eiche", t8_l3: "Strauch", t8_r3: "Hasel",
    t8_sent: "Der Wald ist die Lunge der ___.", t8_qa2: "Erde", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Der", t8_f2: "Wald", t8_f3: "liefert", t8_f4: "uns", t8_f5: "Sauerstoff", t8_f6: "und",
    t8_tk1: "Waldschutz", t8_tk2: "ist", t8_tk3: "wichtig", t8_tk4: "für", t8_tk5: "das", t8_tk6: "Klima", t8_tk7: "unserer", t8_tk8: "Erde.",
    t8_bl1: "Pflanze", t8_bl2: "Tier", t8_i1: "Buche", t8_i2: "Fuchs", t8_i3: "Tanne", t8_i4: "Reh",
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Der Specht", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    t1_title: "Obstsorten", t1_text: "Äpfel sind gesund.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was ist Obst?", t1_qa: "Kirsche", t1_qb: "Gurke", t1_qc: "Brot", t1_qd: "Fleisch",
    t1_w1: "Äpfel", t1_w2: "wachsen", t1_w3: "an", t1_w4: "Bäumen", t1_w5: "im", t1_w6: "Obstgarten.",
    t1_l1: "Apfel", t1_r1: "Kern", t1_l2: "Birne", t1_r2: "Stiel", t1_l3: "Pflaume", t1_r3: "Stein",
    t1_sent: "Obst schmeckt oft ___.", t1_qa2: "süß", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "sollten", t1_f3: "jeden", t1_f4: "Tag", t1_f5: "etwas", t1_f6: "Obst",
    t1_tk1: "In", t1_tk2: "vielen", t1_tk3: "Obstsorten", t1_tk4: "stecken", t1_tk5: "wichtige", t1_tk6: "Vitamine.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Heimisch", t1_bl2: "Exotisch", t1_i1: "Apfel", t1_i2: "Banane", t1_i3: "Birne", t1_i4: "Ananas",
    t2_title: "Gemüse", t2_text: "Karotten sind orange.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Was ist Gemüse?", t2_qa: "Erbse", t2_qb: "Banane", t2_qc: "Keks", t2_qd: "Bonbon",
    t2_w1: "Karotten", t2_w2: "sind", t2_w3: "gut", t2_w4: "für", t2_w5: "unsere", t2_w6: "Augen.",
    t2_l1: "Kartoffel", t2_r1: "Erde", t2_l2: "Tomate", t2_r2: "Strauch", t2_l3: "Erbsen", t2_r3: "Schote",
    t2_sent: "Gemüse wächst oft im ___.", t2_qa2: "Boden", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Frisches", t2_f2: "Gemüse", t2_f3: "kann", t2_f4: "man", t2_f5: "roh", t2_f6: "oder",
    t2_tk1: "Brokkoli", t2_tk2: "sieht", t2_tk3: "aus", t2_tk4: "wie", t2_tk5: "ein", t2_tk6: "kleiner", t2_tk7: "grüner", t2_tk8: "Baum.",
    t2_bl1: "Wurzel", t2_bl2: "Blatt", t2_i1: "Möhre", t2_i2: "Salat", t2_i3: "Radieschen", t2_i4: "Spinat",
    t3_title: "Vitamine", t3_text: "Machen uns stark.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Was machen Vitamine?", t3_qa: "Gesund halten", t3_qb: "Müde machen", t3_qc: "Zähne schaden", t3_qd: "Gar nichts",
    t3_w1: "Vitamine", t3_w2: "sind", t3_w3: "wie", t3_w4: "kleine", t3_w5: "Helfer", t3_w6: "für",
    t3_l1: "Vitamin C", t3_r1: "Zitrone", t3_l2: "Vitamin D", t3_r2: "Sonne", t3_l3: "Vitamin A", t3_r3: "Möhre",
    t3_sent: "Vitamine schützen vor ___.", t3_qa2: "Krankheit", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Wer", t3_f2: "bunt", t3_f3: "isst", t3_f4: "bekommt", t3_f5: "viele", t3_f6: "verschiedene",
    t3_tk1: "Besonders", t3_tk2: "viele", t3_tk3: "Vitamine", t3_tk4: "stecken", t3_tk5: "direkt", t3_tk6: "unter", t3_tk7: "der", t3_tk8: "Schale.",
    t3_bl1: "Viel Vit.", t3_bl2: "Wenig Vit.", t3_i1: "Paprika", t3_i2: "Lutscher", t3_i3: "Apfel", t3_i4: "Chips",
    t4_title: "Zucker", t4_text: "Vorsicht bei Süßem.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Was hat viel Zucker?", t4_qa: "Cola", t4_qb: "Wasser", t4_qc: "Salat", t4_qd: "Brot",
    t4_w1: "Zu", t4_w2: "viel", t4_w3: "Zucker", t4_w4: "ist", t4_w5: "schlecht", t4_w6: "für",
    t4_l1: "Zucker", t4_r1: "Süß", t4_l2: "Salz", t4_r2: "Salzig", t4_l3: "Pfeffer", t4_r3: "Scharf",
    t4_sent: "Zucker verursacht ___.", t4_qa2: "Karies", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Wir", t4_f2: "sollten", t4_f3: "nur", t4_f4: "selten", t4_f5: "süße", t4_f6: "Getränke",
    t4_tk1: "In", t4_tk2: "verstecktem", t4_tk3: "Zucker", t4_tk4: "lauern", t4_tk5: "Gefahren", t4_tk6: "für", t4_tk7: "unsere", t4_tk8: "Gesundheit.",
    t4_bl1: "Gesund", t4_bl2: "Süß", t4_i1: "Wasser", t4_i2: "Gummibärchen", t4_i3: "Apfel", t4_i4: "Schokolade",
    t5_title: "Frühstück", t5_text: "Start in den Tag.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Was ist gesund?", t5_qa: "Müsli", t5_qb: "Chips", t5_qc: "Kuchen", t5_qd: "Pizza",
    t5_w1: "Ein", t5_w2: "gutes", t5_w3: "Frühstück", t5_w4: "hilft", t5_w5: "beim", t5_w6: "Lernen",
    t5_l1: "Milch", t5_r1: "Müsli", t5_l2: "Brot", t5_r2: "Butter", t5_l3: "Ei", t5_r3: "Huhn",
    t5_sent: "Frühstück gibt ___.", t5_qa2: "Energie", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Wer", t5_f2: "gut", t5_f3: "frühstückt", t5_f4: "kann", t5_f5: "sich", t5_f6: "besser",
    t5_tk1: "Vollkornbrot", t5_tk2: "hält", t5_tk3: "viel", t5_tk4: "länger", t5_tk5: "satt", t5_tk6: "als", t5_tk7: "ein", t5_tk8: "weißes",
    t5_bl1: "Trinken", t5_bl2: "Essen", t5_i1: "Milch", t5_i2: "Brot", t5_i3: "Saft", t5_i4: "Apfel",
    t6_title: "Herkunft", t6_text: "Woher kommt das Essen?", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Wo wachsen Bananen?", t6_qa: "Süden", t6_qb: "Norden", t6_qc: "Keller", t6_qd: "Wald",
    t6_w1: "Manches", t6_w2: "Obst", t6_w3: "reist", t6_w4: "mit", t6_w5: "dem", t6_w6: "Flugzeug",
    t6_l1: "Bauernhof", t6_r1: "Erzeuger", t6_l2: "Supermarkt", t6_r2: "Händler", t6_l3: "Garten", t6_r3: "Eigenbau",
    t6_sent: "Erdbeeren reifen im ___.", t6_qa2: "Sommer", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Es", t6_f2: "ist", t6_f3: "gut", t6_f4: "wenn", t6_f5: "unser", t6_f6: "Essen",
    t6_tk1: "Regionale", t6_tk2: "Lebensmittel", t6_tk3: "haben", t6_tk4: "meist", t6_tk5: "einen", t6_tk6: "kurzen", t6_tk7: "Transportweg.", t6_tk8: "",
    t6_bl1: "Hier", t6_bl2: "Fern", t6_i1: "Apfel", t6_i2: "Banane", t6_i3: "Kirsche", t6_i4: "Ananas",
    t7_title: "Saison", t7_text: "Essen zur Erntezeit.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Wann gibt es Kürbis?", t7_qa: "Herbst", t7_qb: "Frühling", t7_qc: "Ostern", t7_qd: "Pfingsten",
    t7_w1: "Saisonaler", t7_w2: "Einkauf", t7_w3: "schützt", t7_w4: "die", t7_w5: "Umwelt", t7_w6: "und",
    t7_l1: "Sommer", t7_r1: "Beeren", t7_l2: "Winter", t7_r2: "Wurzeln", t7_l3: "Frühling", t7_r3: "Spargel",
    t7_sent: "Im Winter gibt es ___.", t7_qa2: "Kohl", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Kirschen", t7_f2: "pflückt", t7_f3: "man", t7_f4: "am", t7_f5: "besten", t7_f6: "im",
    t7_tk1: "Erdbeeren", t7_tk2: "schmecken", t7_tk3: "frisch", t7_tk4: "vom", t7_tk5: "Feld", t7_tk6: "am", t7_tk7: "allerbesten.", t7_tk8: "",
    t7_bl1: "Sommer", t7_bl2: "Winter", t7_i1: "Erdbeere", t7_i2: "Kohl", t7_i3: "Kirsche", t7_i4: "Lauch",
    t8_title: "Essen-Check", t8_text: "Check dein Wissen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Was ist am besten?", t8_qa: "Bunt gemischt", t8_qb: "Nur Fleisch", t8_qc: "Nur Nudeln", t8_qd: "Nur Eis",
    t8_w1: "Wir", t8_w2: "achten", t8_w3: "auf", t8_w4: "eine", t8_w5: "ausgewogene", t8_w6: "Ernährung.",
    t8_l1: "Gemüse", t8_r1: "Salat", t8_l2: "Obst", t8_r2: "Birne", t8_l3: "Getränk", t8_r3: "Wasser",
    t8_sent: "Gesund essen macht ___.", t8_qa2: "fit", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Süßigkeiten", t8_f2: "sind", t8_f3: "nur", t8_f4: "eine kleine", t8_f5: "Beilage.", t8_f6: "",
    t8_tk1: "Viel", t8_tk2: "Trinken", t8_tk3: "ist", t8_tk4: "ebenso", t8_tk5: "wichtig", t8_tk6: "wie", t8_tk7: "das", t8_tk8: "Essen.",
    t8_bl1: "Täglich", t8_bl2: "Selten", t8_i1: "Wasser", t8_i2: "Pizza", t8_i3: "Apfel", t8_i4: "Torte",
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Herkunft", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Saison", color: "#4CAF50" },
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
    t1_title: "Schulweg", t1_text: "Übe deinen Weg.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was ist am sichersten?", t1_qa: "Ampel nutzen", t1_qb: "Rennen", t1_qc: "Handy spielen", t1_qd: "Träumen",
    t1_w1: "Wir", t1_w2: "gehen", t1_w3: "immer", t1_w4: "auf", t1_w5: "der", t1_w6: "Innenseite",
    t1_l1: "Ampel", t1_r1: "Licht", t1_l2: "Bordstein", t1_r2: "Kante", t1_l3: "Weg", t1_r3: "Schule",
    t1_sent: "Der Weg muss ___ sein.", t1_qa2: "sicher", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Zusammen", t1_f2: "mit", t1_f3: "Erwachsenen", t1_f4: "üben", t1_f5: "wir", t1_f6: "den",
    t1_tk1: "Umwege", t1_tk2: "können", t1_tk3: "manchmal", t1_tk4: "sicherer", t1_tk5: "sein", t1_tk6: "als", t1_tk7: "Abkürzungen.", t1_tk8: "",
    t1_bl1: "Gehweg", t1_bl2: "Fahrbahn", t1_i1: "Fußgänger", t1_i2: "Auto", t1_i3: "Kind", t1_i4: "LKW",
    t2_title: "Gefahren", t2_text: "Pass auf!", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Wo ist es gefährlich?", t2_qa: "Ausfahrten", t2_qb: "Bett", t2_qc: "Wiese", t2_qd: "Sofa",
    t2_w1: "An", t2_w2: "einer", t2_w3: "Einmündung", t2_w4: "müssen", t2_w5: "wir", t2_w6: "stehen",
    t2_l1: "Einfahrt", t2_r1: "Auto kommt", t2_l2: "Kreuzung", t2_r2: "Viele Autos", t2_l3: "Parkplatz", t2_r3: "Gefahr",
    t2_sent: "Vorsicht vor ___ Autos.", t2_qa2: "fahrenden", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "LKW-Fahrer", t2_f2: "haben", t2_f3: "einen", t2_f4: "gefährlichen", t2_f5: "toten", t2_f6: "Winkel.",
    t2_tk1: "An", t2_tk2: "unübersichtlichen", t2_tk3: "Stellen", t2_tk4: "darf", t2_tk5: "man", t2_tk6: "die", t2_tk7: "Straße", t2_tk8: "nicht",
    t2_bl1: "Sicher", t2_bl2: "Gefahr", t2_i1: "Gehweg", t2_i2: "Einfahrt", t2_i3: "Zebrastreifen", t2_i4: "Ecke",
    t3_title: "Dunkelheit", t3_text: "Licht hilft.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Was hilft nachts?", t3_qa: "Helle Kleidung", t3_qb: "Schwarze Jacke", t3_qc: "Verstecken", t3_qd: "Augen zu",
    t3_w1: "In", t3_w2: "der", t3_w3: "Dunkelheit", t3_w4: "sieht", t3_w5: "man", t3_w6: "uns",
    t3_l1: "Licht", t3_r1: "Hell", t3_l2: "Reflektor", t3_r2: "Leuchten", t3_l3: "Weste", t3_r3: "Gelb",
    t3_sent: "Licht macht uns ___.", t3_qa2: "sichtbar", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Autofahrer", t3_f2: "erkennen", t3_f3: "helle", t3_f4: "Farben", t3_f5: "viel", t3_f6: "früher.",
    t3_tk1: "Reflektierende", t3_tk2: "Materialien", t3_tk3: "werfen", t3_tk4: "das", t3_tk5: "Licht", t3_tk6: "der", t3_tk7: "Autos", t3_tk8: "zurück.",
    t3_bl1: "Hell", t3_bl2: "Dunkel", t3_i1: "Gelb", t3_i2: "Schwarz", t3_i3: "Weiß", t3_i4: "Blau",
    t4_title: "Reflektoren", t4_text: "Sie leuchten hell.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Was tun sie?", t4_qa: "Reflektieren Licht", t4_qb: "Wärmen", t4_qc: "Singen", t4_qd: "Kühlen",
    t4_w1: "Reflektoren", t4_w2: "an", t4_w3: "den", t4_w4: "Schuhen", t4_w5: "blinken", t4_w6: "beim",
    t4_l1: "Ranzen", t4_r1: "Streifen", t4_l2: "Jacke", t4_r2: "Patch", t4_l3: "Schuh", t4_r3: "Sohle",
    t4_sent: "Sie sind am ___.", t4_qa2: "Ranzen", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Kleine", t4_f2: "Anhänger", t4_f3: "helfen", t4_f4: "dass", t4_f5: "wir", t4_f6: "gesehen",
    t4_tk1: "Gute", t4_tk2: "Reflektoren", t4_tk3: "sieht", t4_tk4: "man", t4_tk5: "schon", t4_tk6: "aus", t4_tk7: "großer", t4_tk8: "Entfernung.",
    t4_bl1: "Leuchtet", t4_bl2: "Matt", t4_i1: "Reflektor", t4_i2: "Stoff", t4_i3: "Katzenauge", t4_i4: "Leder",
    t5_title: "Der Helm", t5_text: "Schützt den Kopf.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Wann tragen?", t5_qa: "Radfahren", t5_qb: "Essen", t5_qc: "Schlafen", t5_qd: "Lesen",
    t5_w1: "Ein", t5_w2: "Helm", t5_w3: "verhindert", t5_w4: "schlimme", t5_w5: "Verletzungen", t5_w6: "am",
    t5_l1: "Riemen", t5_r1: "Fest", t5_l2: "Polster", t5_r2: "Weich", t5_l3: "Schale", t5_r3: "Hart",
    t5_sent: "Der Helm muss fest ___.", t5_qa2: "sitzen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Nach", t5_f2: "einem", t5_f3: "Sturz", t5_f4: "braucht", t5_f5: "man", t5_f6: "einen",
    t5_tk1: "Fahrradhelme", t5_tk2: "müssen", t5_tk3: "immer", t5_tk4: "mit", t5_tk5: "dem", t5_tk6: "Kinnriemen", t5_tk7: "verschlossen", t5_tk8: "sein.",
    t5_bl1: "Helm", t5_bl2: "Mütze", t5_i1: "Hartschale", t5_i2: "Wolle", t5_i3: "Kinnriemen", t5_i4: "Bommel",
    t6_title: "Schilder", t6_text: "Verkehrsregeln.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Was heißt Rot?", t6_qa: "Stopp", t6_qb: "Gehen", t6_qc: "Singen", t6_qd: "Trommeln",
    t6_w1: "Das", t6_w2: "rote", t6_w3: "Dreieck", t6_w4: "warnt", t6_w5: "uns", t6_w6: "vor",
    t6_l1: "Rund", t6_r1: "Verbot", t6_l2: "Dreieckig", t6_r2: "Warnung", t6_l3: "Achteck", t6_r3: "Stopp",
    t6_sent: "Schilder sind ___.", t6_qa2: "wichtig", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Wir", t6_f2: "lernen", t6_f3: "was", t6_f4: "die", t6_f5: "Farben", t6_f6: "und",
    t6_tk1: "Verkehrsschilder", t6_tk2: "gelten", t6_tk3: "für", t6_tk4: "Radfahrer", t6_tk5: "und", t6_tk6: "für", t6_tk7: "Autofahrer.", t6_tk8: "",
    t6_bl1: "Rot", t6_bl2: "Blau", t6_i1: "Verbot", t6_i2: "Gebot", t6_i3: "Stopp", t6_i4: "Radweg",
    t7_title: "Busfahren", t7_text: "Sicher im Bus.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Wo warten?", t7_qa: "Hinter der Linie", t7_qb: "Auf der Straße", t7_qc: "Im Graben", t7_qd: "Auf dem Dach",
    t7_w1: "Wir", t7_w2: "drängeln", t7_w3: "nicht", t7_w4: "beim", t7_w5: "Einsteigen", t7_w6: "in",
    t7_l1: "Sitz", t7_r1: "Sitzen", t7_l2: "Stange", t7_r2: "Halten", t7_l3: "Fahrer", t7_r3: "Fragen",
    t7_sent: "Im Bus immer ___.", t7_qa2: "festhalten", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Den", t7_f2: "Ranzen", t7_f3: "nimmt", t7_f4: "man", t7_f5: "im", t7_f6: "Bus",
    t7_tk1: "Beim", t7_tk2: "Aussteigen", t7_tk3: "muss", t7_tk4: "man", t7_tk5: "auf", t7_tk6: "andere", t7_tk7: "Fußgänger", t7_tk8: "achten.",
    t7_bl1: "Bus", t7_bl2: "Bahn", t7_i1: "Haltewunsch", t7_i2: "Schiene", t7_i3: "Reifen", t7_i4: "Waggon",
    t8_title: "Verkehrs-Check", t8_text: "Check dein Wissen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Wie schaust du?", t8_qa: "L-R-L", t8_qb: "Nur gerade", t8_qc: "Gar nicht", t8_qd: "Oben",
    t8_w1: "Erst", t8_w2: "stehen", t8_w3: "dann", t8_w4: "sehen", t8_w5: "und", t8_w6: "dann",
    t8_l1: "Links", t8_r1: "Schauen", t8_l2: "Rechts", t8_r2: "Schauen", t8_l3: "Links", t8_r3: "Schauen",
    t8_sent: "Sicherheit ist das ___.", t8_qa2: "Ziel", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "sind", t8_f3: "jetzt", t8_f4: "schon", t8_f5: "kleine", t8_f6: "Verkehrsprofis.",
    t8_tk1: "Vorsicht", t8_tk2: "und", t8_tk3: "Geduld", t8_tk4: "sind", t8_tk5: "wichtig", t8_tk6: "im", t8_tk7: "Straßenverkehr.", t8_tk8: "",
    t8_bl1: "Richtig", t8_bl2: "Falsch", t8_i1: "Stehen", t8_i2: "Rennen", t8_i3: "L-R-L", t8_i4: "Träumen",
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Schilder", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    svg: { type: "word-display", word: "Verkehrs-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WERTSTOFFE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Müll & Recycling 2",
    t1_title: "Papier", t1_text: "In die blaue Tonne.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Was darf rein?", t1_qa: "Zeitung", t1_qb: "Glas", t1_qc: "Bio", t1_qd: "Metall",
    t1_w1: "Altpapier", t1_w2: "ist", t1_w3: "ein", t1_w4: "wertvoller", t1_w5: "Rohstoff", t1_w6: "für",
    t1_l1: "Zeitung", t1_r1: "Blau", t1_l2: "Karton", t1_r2: "Pappe", t1_l3: "Brief", t1_r3: "Post",
    t1_sent: "Papier wird zu ___.", t1_qa2: "Recyclingpapier", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "sammeln", t1_f3: "Papier", t1_f4: "in", t1_f5: "einer", t1_f6: "eigenen",
    t1_tk1: "Papierrecycling", t1_tk2: "schont", t1_tk3: "die", t1_tk4: "Wälder", t1_tk5: "auf", t1_tk6: "unserer", t1_tk7: "Erde.", t1_tk8: "",
    t1_bl1: "Papier", t1_bl2: "Restmüll", t1_i1: "Heft", t1_i2: "Windel", t1_i3: "Buch", t1_i4: "Asche",
    t2_title: "Gelber Sack", t2_text: "Für Plastik.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Was kommt rein?", t2_qa: "Joghurtbecher", t2_qb: "Apfel", t2_qc: "Batterie", t2_qd: "Socke",
    t2_w1: "In", t2_w2: "den", t2_w3: "Gelben", t2_w4: "Sack", t2_w5: "kommen", t2_w6: "nur",
    t2_l1: "Plastik", t2_r1: "Becher", t2_l2: "Alu", t2_r2: "Folie", t2_l3: "Dose", t2_r3: "Getränk",
    t2_sent: "Verpackungen sind ___.", t2_qa2: "Wertstoffe", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Metall", t2_f2: "und", t2_f3: "Kunststoff", t2_f4: "kann", t2_f5: "man", t2_f6: "wieder",
    t2_tk1: "Kunststoffe", t2_tk2: "müssen", t2_tk3: "vor", t2_tk4: "dem", t2_tk5: "Recycling", t2_tk6: "gut", t2_tk7: "sortiert", t2_tk8: "werden.",
    t2_bl1: "Gelb", t2_bl2: "Bio", t2_i1: "Dose", t2_i2: "Apfel", t2_i3: "Folie", t2_i4: "Banane",
    t3_title: "Glas", t3_text: "Sortiere nach Farben.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Welche Tonne für Glas?", t3_qa: "Container", t3_qb: "Gelb", t3_qc: "Blau", t3_qd: "Bio",
    t3_w1: "Glasflaschen", t3_w2: "werden", t3_w3: "nach", t3_w4: "Farben", t3_w5: "im", t3_w6: "Container",
    t3_l1: "Weiß", t3_r1: "Farblos", t3_l2: "Grün", t3_r2: "Bier", t3_l3: "Braun", t3_r3: "Wein",
    t3_sent: "Glas ist ___.", t3_qa2: "zerbrechlich", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Aus", t3_f2: "altem", t3_f3: "Glas", t3_f4: "entstehen", t3_f5: "in", t3_f6: "der",
    t3_tk1: "Altglas", t3_tk2: "einzuschmelzen", t3_tk3: "spart", t3_tk4: "sehr", t3_tk5: "viel", t3_tk6: "Energie", t3_tk7: "ein.", t3_tk8: "",
    t3_bl1: "Glas", t3_bl2: "Metall", t3_i1: "Flasche", t3_i2: "Dose", t3_i3: "Glas", t3_i4: "Deckel",
    t4_title: "Biomüll", t4_text: "Aus Resten wird Erde.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Was darf rein?", t4_qa: "Banane", t4_qb: "Plastik", t4_qc: "Glas", t4_qd: "Batterie",
    t4_w1: "Küchenabfälle", t4_w2: "verrotten", t4_w3: "und", t4_w4: "werden", t4_w5: "zu", t4_w6: "wertvoller",
    t4_l1: "Obst", t4_r1: "Schale", t4_l2: "Gemüse", t4_r2: "Rest", t4_l3: "Kaffee", t4_r3: "Filter",
    t4_sent: "Daraus wird ___.", t4_qa2: "Kompost", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Auf", t4_f2: "dem", t4_f3: "Komposthaufen", t4_f4: "helfen", t4_f5: "viele", t4_f6: "kleine",
    t4_tk1: "Biotonnen", t4_tk2: "dürfen", t4_tk3: "auf", t4_tk4: "gar", t4_tk5: "keinen", t4_tk6: "Fall", t4_tk7: "Plastik", t4_tk8: "enthalten.",
    t4_bl1: "Bio", t4_bl2: "Rest", t4_i1: "Apfel", t4_i2: "Tüte", t4_i3: "Salat", t4_i4: "Asche",
    t5_title: "Restmüll", t5_text: "Der Rest kommt hierher.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Was ist Restmüll?", t5_qa: "Windel", t5_qb: "Papier", t5_qc: "Glas", t5_qd: "Obst",
    t5_w1: "Nur", t5_w2: "was", t5_w3: "man", t5_w4: "nicht", t5_w5: "recyceln", t5_w6: "kann",
    t5_l1: "Asche", t5_r1: "Dreck", t5_l2: "Windel", t5_r2: "Baby", t5_l3: "Kehricht", t5_r3: "Besen",
    t5_sent: "Restmüll wird ___.", t5_qa2: "verbrannt", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Diese", t5_f2: "Tonne", t5_f3: "wird", t5_f4: "meist", t5_f5: "alle", t5_f6: "zwei",
    t5_tk1: "Restmüll", t5_tk2: "landet", t5_tk3: "oft", t5_tk4: "in", t5_tk5: "einer", t5_tk6: "großen", t5_tk7: "Müllverbrennungsanlage.", t5_tk8: "",
    t5_bl1: "Müll", t5_bl2: "Wertstoff", t5_i1: "Asche", t5_i2: "Papier", t5_i3: "Windel", t5_i4: "Glas",
    t6_title: "Vermeidung", t6_text: "Gar kein Müll.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Wie vermeiden?", t6_qa: "Beutel nutzen", t6_qb: "Viel kaufen", t6_qc: "Wegwerfen", t6_qd: "Nichts tun",
    t6_w1: "Die", t6_w2: "beste", t6_w3: "Lösung", t6_w4: "ist", t6_w5: "überhaupt", t6_w6: "keinen",
    t6_l1: "Stoffbeutel", t6_r1: "Tragen", t6_l2: "Dose", t6_r2: "Essen", t6_l3: "Mehrweg", t6_r3: "Flasche",
    t6_sent: "Mehrweg ist ___.", t6_qa2: "besser", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Wir", t6_f2: "können", t6_f3: "beim", t6_f4: "Einkaufen", t6_f5: "auf", t6_f6: "unnötige",
    t6_tk1: "Vermeidung", t6_tk2: "von", t6_tk3: "Abfall", t6_tk4: "ist", t6_tk5: "der", t6_tk6: "beste", t6_tk7: "Umweltschutz.", t6_tk8: "",
    t6_bl1: "Wenig Müll", t6_bl2: "Viel Müll", t6_i1: "Beutel", t6_i2: "Tüte", t6_i3: "Box", t6_i4: "Folie",
    t7_title: "Upcycling", t7_text: "Aus Alt mach Neu.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Was ist Upcycling?", t7_qa: "Basteln mit Müll", t7_qb: "Müll verbrennen", t7_qc: "Wegwerfen", t7_qd: "Essen",
    t7_w1: "Wir", t7_w2: "basteln", t7_w3: "aus", t7_w4: "alten", t7_w5: "Milchkartons", t7_w6: "tolle",
    t7_l1: "Dose", t7_r1: "Vase", t7_l2: "Glas", t7_r2: "Lampe", t7_l3: "Papier", t7_r3: "Stern",
    t7_sent: "Aus Dosen werden ___.", t7_qa2: "Stifthalter", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Kreativität", t7_f2: "hilft", t7_f3: "uns", t7_f4: "Müll", t7_f5: "in", t7_f6: "Schätze",
    t7_tk1: "Upcycling", t7_tk2: "macht", t7_tk3: "Spaß", t7_tk4: "und", t7_tk5: "gibt", t7_tk6: "alten", t7_tk7: "Dingen", t7_tk8: "einen",
    t7_bl1: "Basteln", t7_bl2: "Müll", t7_i1: "Schere", t7_i2: "Abfall", t7_i3: "Kleber", t7_i4: "Tonne",
    t8_title: "Müll-Check", t8_text: "Wissenstest Müll.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Ist Sortieren gut?", t8_qa: "Ja", t8_qb: "Nein", t8_qc: "Egal", t8_qd: "Nur montags",
    t8_w1: "Richtiges", t8_w2: "Trennen", t8_w3: "ist", t8_w4: "wichtig", t8_w5: "für", t8_w6: "unsere",
    t8_l1: "Blau", t8_r1: "Papier", t8_l2: "Gelb", t8_r2: "Plastik", t8_l3: "Braun", t8_r3: "Bio",
    t8_sent: "Recycling spart ___.", t8_qa2: "Rohstoffe", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "wissen", t8_f3: "jetzt", t8_f4: "genau", t8_f5: "was", t8_f6: "in",
    t8_tk1: "Rohstoffe", t8_tk2: "wiederzuverwenden", t8_tk3: "schont", t8_tk4: "die", t8_tk5: "begrenzten", t8_tk6: "Vorräte", t8_tk7: "der", t8_tk8: "Erde.",
    t8_bl1: "Wertvoll", t8_bl2: "Abfall", t8_i1: "Metall", t8_i2: "Restmüll", t8_i3: "Papier", t8_i4: "Dreck",
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Vermeidung", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
    t1_title: "Natur", t1_text: "Wissen über Natur.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Du schaffst das!", t1_q: "Wer sammelt Nüsse?", t1_qa: "Eichhörnchen", t1_qb: "Hund", t1_qc: "Wolf", t1_qd: "Fisch",
    t1_w1: "Wir", t1_w2: "haben", t1_w3: "viele", t1_w4: "Tiere", t1_w5: "und", t1_w6: "Pflanzen",
    t1_l1: "Wald", t1_r1: "Bäume", t1_l2: "Wiese", t1_r2: "Gras", t1_l3: "See", t1_r3: "Fische",
    t1_sent: "Die Natur ist ___.", t1_qa2: "schön", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Überall", t1_f2: "in", t1_f3: "unserer", t1_f4: "Heimat", t1_f5: "gibt", t1_f6: "es",
    t1_tk1: "Naturschutz", t1_tk2: "bedeutet", t1_tk3: "die", t1_tk4: "Vielfalt", t1_tk5: "unserer", t1_tk6: "Welt", t1_tk7: "zu", t1_tk8: "bewahren.",
    t1_bl1: "Tier", t1_bl2: "Pflanze", t1_i1: "Reh", t1_i2: "Buche", t1_i3: "Fuchs", t1_i4: "Tanne",
    t2_title: "Technik", t2_text: "Magnete und Co.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Du schaffst das!", t2_q: "Was zieht Eisen an?", t2_qa: "Magnet", t2_qb: "Holz", t2_qc: "Gummi", t2_qd: "Stein",
    t2_w1: "Magnete", t2_w2: "sind", t2_w3: "faszinierende", t2_w4: "Werkzeuge", t2_w5: "in", t2_w6: "unserem",
    t2_l1: "Kompass", t2_r1: "Richtung", t2_l2: "Uhr", t2_r2: "Zeit", t2_l3: "Magnet", t2_r3: "Kraft",
    t2_sent: "Technik hilft im ___.", t2_qa2: "Alltag", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wir", t2_f2: "haben", t2_f3: "spannende", t2_f4: "Experimente", t2_f5: "im", t2_f6: "Unterricht",
    t2_tk1: "Technik", t2_tk2: "versteht", t2_tk3: "man", t2_tk4: "am", t2_tk5: "besten", t2_tk6: "wenn", t2_tk7: "man", t2_tk8: "sie",
    t2_bl1: "Magnet", t2_bl2: "Uhr", t2_i1: "Nordpol", t2_i2: "Zeiger", t2_i3: "Anziehung", t2_i4: "Minute",
    t3_title: "Zeit", t3_text: "Uhren und Kalender.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Du schaffst das!", t3_q: "Wieviele Monate?", t3_qa: "12", t3_qb: "10", t3_qc: "7", t3_qd: "5",
    t3_w1: "Zeit", t3_w2: "vergeht", t3_w3: "immer", t3_w4: "gleich", t3_w5: "schnell", t3_w6: "und",
    t3_l1: "Woche", t3_r1: "7 Tage", t3_l2: "Monat", t3_r2: "30 Tage", t3_l3: "Jahr", t3_r3: "12 Monate",
    t3_sent: "Ein Tag hat 24 ___.", t3_qa2: "Stunden", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Wir", t3_f2: "können", t3_f3: "die", t3_f4: "Zeit", t3_f5: "auf", t3_f6: "verschiedene",
    t3_tk1: "Kalender", t3_tk2: "zeigen", t3_tk3: "uns", t3_tk4: "alle", t3_tk5: "wichtigen", t3_tk6: "Tage", t3_tk7: "im", t3_tk8: "Lauf",
    t3_bl1: "Kurz", t3_bl2: "Lang", t3_i1: "Sekunde", t3_i2: "Monat", t3_i3: "Minute", t3_i4: "Jahr",
    t4_title: "Tiere", t4_text: "Haus- und Waldtiere.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Du schaffst das!", t4_q: "Wer lebt im Wald?", t4_qa: "Reh", t4_qb: "Hund", t4_qc: "Katze", t4_qd: "Goldfisch",
    t4_w1: "Ob", t4_w2: "Hund", t4_w3: "oder", t4_w4: "Fuchs", t4_w5: "alle", t4_w6: "Tiere",
    t4_l1: "Hund", t4_r1: "Haus", t4_l2: "Reh", t4_r2: "Wald", t4_l3: "Fisch", t4_r3: "Wasser",
    t4_sent: "Tiere brauchen unseren ___.", t4_qa2: "Respekt", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Wir", t4_f2: "wissen", t4_f3: "jetzt", t4_f4: "was", t4_f5: "Tiere", t4_f6: "zum",
    t4_tk1: "Tierschutz", t4_tk2: "gilt", t4_tk3: "für", t4_tk4: "unsere", t4_tk5: "Haustiere", t4_tk6: "und", t4_tk7: "für", t4_tk8: "alle",
    t4_bl1: "Heim", t4_bl2: "Wild", t4_i1: "Katze", t4_i2: "Wolf", t4_i3: "Hamster", t4_i4: "Bär",
    t5_title: "Wasser", t5_text: "Alles über H2O.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Du schaffst das!", t5_q: "Gefrorenes Wasser?", t5_qa: "Eis", t5_qb: "Dampf", t5_qc: "Saft", t5_qd: "Limo",
    t5_w1: "Ohne", t5_w2: "Wasser", t5_w3: "könnte", t5_w4: "kein", t5_w5: "Mensch", t5_w6: "lange",
    t5_l1: "Eis", t5_r1: "Fest", t5_l2: "See", t5_r2: "Flüssig", t5_l3: "Dampf", t5_r3: "Gas",
    t5_sent: "Wasser ist lebens- ___.", t5_qa2: "wichtig", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Der", t5_f2: "Schutz", t5_f3: "unseres", t5_f4: "Wassers", t5_f5: "geht", t5_f6: "uns",
    t5_tk1: "Wasser", t5_tk2: "kommt", t5_tk3: "in", t5_tk4: "drei", t5_tk5: "verschiedenen", t5_tk6: "Zuständen", t5_tk7: "in", t5_tk8: "der",
    t5_bl1: "Viel", t5_bl2: "Wenig", t5_i1: "Ozean", t5_i2: "Pfütze", t5_i3: "Meer", t5_i4: "Tropfen",
    t6_title: "Verkehr", t6_text: "Sicher unterwegs.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Du schaffst das!", t6_q: "Wie schauen?", t6_qa: "L-R-L", t6_qb: "Gar nicht", t6_qc: "Nach oben", t6_qd: "Hintern",
    t6_w1: "Wir", t6_w2: "passen", t6_w3: "auf", t6_w4: "unserem", t6_w5: "Schulweg", t6_w6: "immer",
    t6_l1: "Ampel", t6_r1: "Rot/Grün", t6_l2: "Zebra", t6_r2: "Streifen", t6_l3: "Helm", t6_r3: "Schutz",
    t6_sent: "Augen auf im ___.", t6_qa2: "Verkehr", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Andere", t6_f2: "Verkehrsteilnehmer", t6_f3: "müssen", t6_f4: "uns", t6_f5: "gut", t6_f6: "sehen",
    t6_tk1: "Vorsicht", t6_tk2: "im", t6_tk3: "Verkehr", t6_tk4: "schützt", t6_tk5: "uns", t6_tk6: "vor", t6_tk7: "gefährlichen", t6_tk8: "Unfällen.",
    t6_bl1: "Auto", t6_bl2: "Fuß", t6_i1: "Reifen", t6_i2: "Schuh", t6_i3: "Motor", t6_i4: "Sohle",
    t7_title: "Umwelt", t7_text: "Erde schützen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Du schaffst das!", t7_q: "Was tun?", t7_qa: "Müll trennen", t7_qb: "Viel Plastik", t7_qc: "Wegwerfen", t7_qd: "Lärm machen",
    t7_w1: "Kleine", t7_w2: "Schritte", t7_w3: "beim", t7_w4: "Umweltschutz", t7_w5: "helfen", t7_w6: "unserer",
    t7_l1: "Müll", t7_r1: "Trennen", t7_l2: "Wald", t7_r2: "Pflanzen", t7_l3: "Luft", t7_r3: "Atmen",
    t7_sent: "Wir schützen unsere ___.", t7_qa2: "Umwelt", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Wir", t7_f2: "vermeiden", t7_f3: "Abfall", t7_f4: "wo", t7_f5: "immer", t7_f6: "es",
    t7_tk1: "Nachhaltigkeit", t7_tk2: "bedeutet", t7_tk3: "die", t7_tk4: "Erde", t7_tk5: "für", t7_tk6: "alle", t7_tk7: "Kinder", t7_tk8: "zu",
    t7_bl1: "Helfen", t7_bl2: "Schaden", t7_i1: "Sparen", t7_i2: "Verschwenden", t7_i3: "Recyceln", t7_i4: "Verschmutzen",
    t8_title: "Diplom", t8_text: "Du bist Experte!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Du schaffst das!", t8_q: "Geschafft?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Vielleicht", t8_qd: "Fast",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "du", t8_w4: "hast", t8_w5: "alles", t8_w6: "super",
    t8_l1: "K1", t8_r1: "Start", t8_l2: "K2", t8_r2: "Ziel", t8_l3: "Wissen", t8_r3: "Macht",
    t8_sent: "Ich bin ein Sachkunde- ___.", t8_qa2: "Profi", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Du", t8_f2: "darfst", t8_f3: "sehr", t8_f4: "stolz", t8_f5: "auf", t8_f6: "deine",
    t8_tk1: "Lernen", t8_tk2: "macht", t8_tk3: "Spaß", t8_tk4: "und", t8_tk5: "eröffnet", t8_tk6: "dir", t8_tk7: "immer", t8_tk8: "neue",
    t8_bl1: "Alt", t8_bl2: "Neu", t8_i1: "Gelernt", t8_i2: "Wissen", t8_i3: "Verstanden", t8_i4: "Erfahrung",
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Verkehr", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6"].filter(x=>x!=="") },
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
