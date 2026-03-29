// lib/explorerPools/sachkundeK4.ts
import type { PoolTopicDef } from "./types";

export const VERKEHR_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Fahrradprüfung",
    t1_title: "Verkehrssicheres Rad", t1_text: "Ein Fahrrad muss bestimmte Teile haben, um sicher zu sein.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was gehört zwingend zum sicheren Fahrrad?", t1_qa: "Zwei Bremsen", t1_qb: "Ein Korb", t1_qc: "Eine Hupe", t1_qd: "Ein Tacho",
    t1_w1: "Vorder-", t1_w2: "und", t1_w3: "Hinterradbremse", t1_w4: "müssen", t1_w5: "einwandfrei", t1_w6: "funktionieren.", t1_w7: "",
    t1_l1: "Glocke", t1_r1: "Hell tönend", t1_l2: "Reflektoren", t1_r2: "Vorn/Hinten", t1_l3: "Rücklicht", t1_r3: "Rot",
    t1_sent: "Ein Fahrrad braucht zwei ___.", t1_qa2: "Bremsen", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Kontrolliere", t1_f2: "dein", t1_f3: "Rad", t1_f4: "vor", t1_f5: "jeder", t1_f6: "Fahrt.", t1_f7: "",
    t1_tk1: "Ein", t1_tk2: "hell", t1_tk3: "tönendes", t1_tk4: "Signalgerät", t1_tk5: "ist", t1_tk6: "vorgeschrieben.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Sicher", t1_bl2: "Unsicher", t1_i1: "Reflektor", t1_i2: "Rost", t1_i3: "Licht", t1_i4: "Plattfuß",
    t2_title: "Verkehrsschilder", t2_text: "Schilder regeln den Vorrang und warnen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was bedeutet das achteckige rote Schild?", t2_qa: "Stopp", t2_qb: "Vorfahrt", t2_qc: "Einbahnstraße", t2_qd: "Parkverbot",
    t2_w1: "Schilder", t2_w2: "geben", t2_w3: "uns", t2_w4: "wichtige", t2_w5: "Anweisungen", t2_w6: "im", t2_w7: "Verkehr.",
    t2_l1: "Rund", t2_r1: "Verbot", t2_l2: "Dreieck", t2_r2: "Achtung", t2_l3: "Blau", t2_r3: "Gebot",
    t2_sent: "Das rote Dreieck ist ein ___.", t2_qa2: "Gefahrenzeichen", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wer", t2_f2: "Schilder", t2_f3: "kennt", t2_f4: "fährt", t2_f5: "viel", t2_f6: "sicherer.", t2_f7: "",
    t2_tk1: "Das", t2_tk2: "Schild", t2_tk3: "Vorfahrt", t2_tk4: "gewähren", t2_tk5: "ist", t2_tk6: "ein", t2_tk7: "umgedrehtes", t2_tk8: "Dreieck.",
    t2_bl1: "Gebot", t2_bl2: "Verbot", t2_i1: "Radweg", t2_i2: "Einfahrt verboten", t2_i3: "Fußweg", t2_i4: "Stopp",
    t3_title: "Linksabbiegen", t3_text: "Das Linksabbiegen ist besonders gefährlich.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was ist der erste Schritt beim Abbiegen?", t3_qa: "Umschauen", t3_qb: "Handzeichen", t3_qc: "Bremsen", t3_qd: "Augen zu",
    t3_w1: "Umschauen", t3_w2: "Handzeichen", t3_w3: "Einordnen", t3_w4: "Vorfahrt", t3_w5: "beachten", t3_w6: "Abbiegen.", t3_w7: "",
    t3_l1: "Links", t3_r1: "Schulterblick", t3_l2: "Rechts", t3_r2: "Hand", t3_l3: "Gerade", t3_r3: "Fahren",
    t3_sent: "Der letzte Blick geht über die ___.", t3_qa2: "Schulter", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Achte", t3_f2: "beim", t3_f3: "Abbiegen", t3_f4: "besonders", t3_f5: "auf", t3_f6: "den", t3_f7: "Gegenverkehr.",
    t3_tk1: "Der", t3_tk2: "Schulterblick", t3_tk3: "sichert", t3_tk4: "den", t3_tk5: "toten", t3_tk6: "Winkel", t3_tk7: "ab.", t3_tk8: "",
    t3_bl1: "Blick", t3_bl2: "Hand", t3_i1: "Rückwärts", t3_i2: "Links", t3_i3: "Schulter", t3_i4: "Handzeichen",
    t4_title: "Vorfahrtsregeln", t4_text: "Wer darf zuerst fahren?", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was gilt, wenn keine Schilder da sind?", t4_qa: "Rechts vor Links", t4_qb: "Der Schnellere", t4_qc: "Immer ich", t4_qd: "Blickkontakt",
    t4_w1: "Vorfahrt", t4_w2: "muss", t4_w3: "man", t4_w4: "manchmal", t4_w5: "auch", t4_w6: "gewähren.", t4_w7: "",
    t4_l1: "Grün", t4_r1: "Fahren", t4_l2: "Rot", t4_r2: "Warten", t4_l3: "Gelb", t4_r3: "Achtung",
    t4_sent: "An Kreuzungen gilt oft ___.", t4_qa2: "Rechts vor Links", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Bremsbereitschaft", t4_f2: "hilft", t4_f3: "Unfälle", t4_f4: "an", t4_f5: "Kreuzungen", t4_f6: "zu", t4_f7: "vermeiden.",
    t4_tk1: "Wer", t4_tk2: "von", t4_tk3: "rechts", t4_tk4: "kommt", t4_tk5: "darf", t4_tk6: "zuerst", t4_tk7: "fahren.", t4_tk8: "",
    t4_bl1: "Vorfahrt", t4_bl2: "Warten", t4_i1: "Grüne Ampel", t4_i2: "Stoppschild", t4_i3: "Rechts", t4_i4: "Linksabbieger",
    t5_title: "Der tote Winkel", t5_text: "Ein gefährlicher Bereich für Radfahrer.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist der tote Winkel?", t5_qa: "Unsichtbarer Bereich", t5_qb: "Ein dunkler Raum", t5_qc: "Ein Friedhof", t5_qd: "Gar nichts",
    t5_w1: "Halte", t5_w2: "genügend", t5_w3: "Abstand", t5_w4: "zu", t5_w5: "großen", t5_w6: "Lastwagen.", t5_w7: "",
    t5_l1: "LKW", t5_r1: "Groß", t5_l2: "Rad", t5_r2: "Klein", t5_l3: "Spiegel", t5_r3: "Sicht",
    t5_sent: "LKW-Fahrer können dich dort ___.", t5_qa2: "nicht sehen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Blickkontakt", t5_f2: "mit", t5_f3: "dem", t5_f4: "Fahrer", t5_f5: "ist", t5_f6: "überlebenswichtig.", t5_f7: "",
    t5_tk1: "Im", t5_tk2: "toten", t5_tk3: "Winkel", t5_tk4: "bist", t5_tk5: "du", t5_tk6: "für", t5_tk7: "Fahrer", t5_tk8: "unsichtbar.",
    t5_bl1: "Sicher", t5_bl2: "Gefahr", t5_i1: "Blickkontakt", t5_i2: "Toter Winkel", t5_i3: "Abstand", t5_i4: "Rechts daneben",
    t6_title: "Der Helm", t6_text: "Schutz für den Kopf.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was muss ein Helm nach einem Sturz?", t6_qa: "Ausgetauscht werden", t6_qb: "Geputzt werden", t6_qc: "Nichts", t6_qd: "Geflickt werden",
    t6_w1: "Der", t6_w2: "Kinnriemen", t6_w3: "muss", t6_w4: "immer", t6_w5: "fest", t6_w6: "geschlossen", t6_w7: "sein.",
    t6_l1: "Schale", t6_r1: "Hart", t6_l2: "Polster", t6_r2: "Weich", t6_l3: "Riemen", t6_r3: "Halt",
    t6_sent: "Ein Helm schützt das ___.", t6_qa2: "Gehirn", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Nur", t6_f2: "ein", t6_f3: "passender", t6_f4: "Helm", t6_f5: "bietet", t6_f6: "vollen", t6_f7: "Schutz.",
    t6_tk1: "Fahrradhelme", t6_tk2: "müssen", t6_tk3: "ein", t6_tk4: "Prüfsiegel", t6_tk5: "besitzen.", t6_tk6: "undefined", t6_tk7: "", t6_tk8: "",
    t6_bl1: "Helmteil", t6_bl2: "Material", t6_i1: "Kinnriemen", t6_i2: "Kunststoff", t6_i3: "Hardschale", t6_i4: "Styropor",
    t7_title: "Verhalten im Bus", t7_text: "Sicher mit dem Schulbus fahren.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was tut man beim Einsteigen?", t7_qa: "Hintereinander gehen", t7_qb: "Drängeln", t7_qc: "Rennen", t7_qd: "Schreien",
    t7_w1: "Nimm", t7_w2: "deinen", t7_w3: "Schulranzen", t7_w4: "im", t7_w5: "Bus", t7_w6: "lieber", t7_w7: "ab.",
    t7_l1: "Haltestelle", t7_r1: "Warten", t7_l2: "Tür", t7_r2: "Einstieg", t7_l3: "Sitz", t7_r3: "Ruhe",
    t7_sent: "Im Bus halten wir uns ___.", t7_qa2: "fest", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Warte", t7_f2: "hinter", t7_f3: "der", t7_f4: "Linie", t7_f5: "bis", t7_f6: "der", t7_f7: "Bus",
    t7_tk1: "Der", t7_tk2: "Busfahrer", t7_tk3: "muss", t7_tk4: "sich", t7_tk5: "auf", t7_tk6: "die", t7_tk7: "Fahrt", t7_tk8: "konzentrieren.",
    t7_bl1: "Bus", t7_bl2: "Straße", t7_i1: "Haltestange", t7_i2: "Fahrbahn", t7_i3: "Nothalt", t7_i4: "Bordstein",
    t8_title: "Die Prüfung", t8_text: "Theorie und Praxis.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer nimmt die Prüfung ab?", t8_qa: "Die Polizei", t8_qb: "Der Lehrer", t8_qc: "Die Eltern", t8_qd: "Der Bürgermeister",
    t8_w1: "Viel", t8_w2: "Erfolg", t8_w3: "bei", t8_w4: "deiner", t8_w5: "Fahrradprüfung", t8_w6: "in", t8_w7: "Echt!",
    t8_l1: "Theorie", t8_r1: "Wissen", t8_l2: "Praxis", t8_r2: "Fahren", t8_l3: "Prüfung", t8_r3: "Erfolg",
    t8_sent: "Ich bin ein sicherer ___.", t8_qa2: "Radfahrer", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Konzentriere", t8_f2: "dich", t8_f3: "auf", t8_f4: "alle", t8_f5: "Zeichen", t8_f6: "und", t8_f7: "Regeln.",
    t8_tk1: "Nach", t8_tk2: "der", t8_tk3: "Prüfung", t8_tk4: "erhältst", t8_tk5: "du", t8_tk6: "deinen", t8_tk7: "Fahrradausweis.", t8_tk8: "",
    t8_bl1: "Wissen", t8_bl2: "Fahren", t8_i1: "Schilder", t8_i2: "Abbiegen", t8_i3: "Vorfahrt", t8_i4: "Bremsen",
  },
};

export const VERKEHR_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Verkehrssicheres Rad", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Verkehrsschilder", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Linksabbiegen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Vorfahrtsregeln", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Der tote Winkel", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Der Helm", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Verhalten im Bus", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Die Prüfung", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const WELTRAUM_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sonnensystem & Sterne",
    t1_title: "Die Sonne", t1_text: "Das Zentrum unseres Systems.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist die Sonne?", t1_qa: "Ein Stern", t1_qb: "Ein Planet", t1_qc: "Ein Mond", t1_qd: "Ein Komet",
    t1_w1: "Alle", t1_w2: "Planeten", t1_w3: "kreisen", t1_w4: "um", t1_w5: "die", t1_w6: "große", t1_w7: "Sonne.",
    t1_l1: "Sonne", t1_r1: "Stern", t1_l2: "Erde", t1_r2: "Planet", t1_l3: "Mond", t1_r3: "Trabant",
    t1_sent: "Die Sonne spendet Licht und ___.", t1_qa2: "Wärme", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Ohne", t1_f2: "die", t1_f3: "Sonne", t1_f4: "gäbe", t1_f5: "es", t1_f6: "kein", t1_f7: "Leben.",
    t1_tk1: "Die", t1_tk2: "Oberfläche", t1_tk3: "der", t1_tk4: "Sonne", t1_tk5: "ist", t1_tk6: "extrem", t1_tk7: "heiß.", t1_tk8: "",
    t1_bl1: "Heiß", t1_bl2: "Kalt", t1_i1: "Kern", t1_i2: "Eis", t1_i3: "Gas", t1_i4: "Schnee",
    t2_title: "Die Planeten", t2_text: "Acht Planeten kreisen um die Sonne.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie heißt der größte Planet?", t2_qa: "Jupiter", t2_qb: "Mars", t2_qc: "Erde", t2_qd: "Neptun",
    t2_w1: "Mein", t2_w2: "Vater", t2_w3: "erklärt", t2_w4: "mir", t2_w5: "jeden", t2_w6: "Sonntag", t2_w7: "unsere",
    t2_l1: "Mars", t2_r1: "Rot", t2_l2: "Saturn", t2_r2: "Ringe", t2_l3: "Merkur", t2_r3: "Nah",
    t2_sent: "Wir leben auf der ___.", t2_qa2: "Erde", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Planeten", t2_f3: "haben", t2_f4: "sehr", t2_f5: "unterschiedliche", t2_f6: "Größen.", t2_f7: "",
    t2_tk1: "Pluto", t2_tk2: "gilt", t2_tk3: "heute", t2_tk4: "nur", t2_tk5: "noch", t2_tk6: "als", t2_tk7: "Zwergplanet.", t2_tk8: "",
    t2_bl1: "Gestein", t2_bl2: "Gas", t2_i1: "Mars", t2_i2: "Jupiter", t2_i3: "Venus", t2_i4: "Saturn",
    t3_title: "Die Erde", t3_text: "Der blaue Planet.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Warum sieht die Erde blau aus?", t3_qa: "Viel Wasser", t3_qb: "Viel Luft", t3_qc: "Blauer Sand", t3_qd: "Blumen",
    t3_w1: "Die", t3_w2: "Erde", t3_w3: "dreht", t3_w4: "sich", t3_w5: "um", t3_w6: "ihre", t3_w7: "eigene",
    t3_l1: "Tag", t3_r1: "24h", t3_l2: "Jahr", t3_r2: "365d", t3_l3: "Monat", t3_r3: "Mond",
    t3_sent: "Die Erde braucht ein ___ für die Runde.", t3_qa2: "Jahr", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Die", t3_f2: "Atmosphäre", t3_f3: "schützt", t3_f4: "uns", t3_f5: "vor", t3_f6: "gefährlicher", t3_f7: "Strahlung.",
    t3_tk1: "Der", t3_tk2: "Äquator", t3_tk3: "teilt", t3_tk4: "die", t3_tk5: "Erde", t3_tk6: "in", t3_tk7: "zwei", t3_tk8: "Hälften.",
    t3_bl1: "Land", t3_bl2: "Wasser", t3_i1: "Kontinent", t3_i2: "Ozean", t3_i3: "Insel", t3_i4: "Meer",
    t4_title: "Der Mond", t4_text: "Unser Begleiter im All.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie entstehen die Mondphasen?", t4_qa: "Stellung zur Sonne", t4_qb: "Schatten der Erde", t4_qc: "Wolken", t4_qd: "Eigene Drehung",
    t4_w1: "Der", t4_w2: "Mond", t4_w3: "verursacht", t4_w4: "Ebbe", t4_w5: "und", t4_w6: "Flut", t4_w7: "auf",
    t4_l1: "Vollmond", t4_r1: "Rund", t4_l2: "Neumond", t4_r2: "Dunkel", t4_l3: "Sichel", t4_r3: "Schmal",
    t4_sent: "Der Mond hat keine eigene ___.", t4_qa2: "Lichtquelle", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Neil", t4_f2: "Armstrong", t4_f3: "betrat", t4_f4: "als", t4_f5: "erster", t4_f6: "Mensch", t4_f7: "den",
    t4_tk1: "Auf", t4_tk2: "dem", t4_tk3: "Mond", t4_tk4: "gibt", t4_tk5: "es", t4_tk6: "keine", t4_tk7: "Luft", t4_tk8: "zum",
    t4_bl1: "Licht", t4_bl2: "Schatten", t4_i1: "Sonne", t4_i2: "Erdschatten", t4_i3: "Reflexion", t4_i4: "Nacht",
    t5_title: "Tag & Nacht", t5_text: "Die Drehung der Erde.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was passiert bei einer Drehung?", t5_qa: "Ein Tag vergeht", t5_qb: "Ein Jahr vergeht", t5_qc: "Es regnet", t5_qd: "Nichts",
    t5_w1: "Die", t5_w2: "Sonne", t5_w3: "scheint", t5_w4: "immer", t5_w5: "nur", t5_w6: "eine", t5_w7: "Seite",
    t5_l1: "Licht", t5_r1: "Tag", t5_l2: "Schatten", t5_r2: "Nacht", t5_l3: "Achse", t5_r3: "Drehung",
    t5_sent: "Die Erde dreht sich nach ___.", t5_qa2: "Osten", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Während", t5_f2: "wir", t5_f3: "schlafen", t5_f4: "ist", t5_f5: "es", t5_f6: "woanders", t5_f7: "hell.",
    t5_tk1: "Die", t5_tk2: "Erdachse", t5_tk3: "ist", t5_tk4: "ein", t5_tk5: "wenig", t5_tk6: "schräg", t5_tk7: "geneigt.", t5_tk8: "",
    t5_bl1: "Hell", t5_bl2: "Dunkel", t5_i1: "Sonne", t5_i2: "Weltall", t5_i3: "Mittag", t5_i4: "Mitternacht",
    t6_title: "Jahreszeiten", t6_text: "Die Bahn um die Sonne.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Warum gibt es Jahreszeiten?", t6_qa: "Schräge Erdachse", t6_qb: "Abstand zur Sonne", t6_qc: "Wind", t6_qd: "Wolken",
    t6_w1: "Die", t6_w2: "Erde", t6_w3: "wandert", t6_w4: "auf", t6_w5: "einer", t6_w6: "Ellipse", t6_w7: "um",
    t6_l1: "Sommer", t6_r1: "Warm", t6_l2: "Winter", t6_r2: "Kalt", t6_l3: "Herbst", t6_r3: "Bunt",
    t6_sent: "Im Sommer steht die Sonne ___.", t6_qa2: "hoch", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Jede", t6_f2: "Jahreszeit", t6_f3: "hat", t6_f4: "ihre", t6_f5: "ganz", t6_f6: "besonderen", t6_f7: "Merkmale.",
    t6_tk1: "Sonnenwenden", t6_tk2: "markieren", t6_tk3: "den", t6_tk4: "längsten", t6_tk5: "und", t6_tk6: "kürzesten", t6_tk7: "Tag.", t6_tk8: "",
    t6_bl1: "Frühling", t6_bl2: "Herbst", t6_i1: "Blüten", t6_i2: "Blätter", t6_i3: "Wärme", t6_i4: "Wind",
    t7_title: "Milchstraße", t7_text: "Unsere Heimatgalaxie.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was ist eine Galaxie?", t7_qa: "Ansammlung von Sternen", t7_qb: "Ein Planet", t7_qc: "Ein Flugzeug", t7_qd: "Ein Komet",
    t7_w1: "Es", t7_w2: "gibt", t7_w3: "Milliarden", t7_w4: "von", t7_w5: "Sternen", t7_w6: "im", t7_w7: "Universum.",
    t7_l1: "Sonne", t7_r1: "Nah", t7_l2: "Sirius", t7_r2: "Hell", t7_l3: "Polarstern", t7_r3: "Norden",
    t7_sent: "Die Milchstraße ist eine ___.", t7_qa2: "Spiralgalaxie", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "In", t7_f2: "einer", t7_f3: "klaren", t7_f4: "Nacht", t7_f5: "kann", t7_f6: "man", t7_f7: "das",
    t7_tk1: "Lichtjahre", t7_tk2: "messen", t7_tk3: "die", t7_tk4: "riesigen", t7_tk5: "Entfernungen", t7_tk6: "im", t7_tk7: "Weltall.", t7_tk8: "",
    t7_bl1: "Sterne", t7_bl2: "Planeten", t7_i1: "Leuchten", t7_i2: "Kreisen", t7_i3: "Gasball", t7_i4: "Gestein",
    t8_title: "Weltraum-Check", t8_text: "Bist du ein Astronaut?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer flog als erster ins All?", t8_qa: "Juri Gagarin", t8_qb: "Albert Einstein", t8_qc: "Columbus", t8_qd: "Merkel",
    t8_w1: "Die", t8_w2: "Erforschung", t8_w3: "des", t8_w4: "Weltraums", t8_w5: "ist", t8_w6: "sehr", t8_w7: "teuer.",
    t8_l1: "Rakete", t8_r1: "Antrieb", t8_l2: "Satellit", t8_r2: "Daten", t8_l3: "Teleskop", t8_r3: "Sicht",
    t8_sent: "Die ISS ist eine ___.", t8_qa2: "Raumstation", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Vielleicht", t8_f2: "besuchen", t8_f3: "Menschen", t8_f4: "bald", t8_f5: "den", t8_f6: "Planeten", t8_f7: "Mars.",
    t8_tk1: "Astronauten", t8_tk2: "müssen", t8_tk3: "im", t8_tk4: "Weltall", t8_tk5: "viele", t8_tk6: "Experimente", t8_tk7: "durchführen.", t8_tk8: "",
    t8_bl1: "Nah", t8_bl2: "Fern", t8_i1: "Mond", t8_i2: "Mars", t8_i3: "Sonne", t8_i4: "Sirius",
  },
};

export const WELTRAUM_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die Sonne", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die Planeten", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Die Erde", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Der Mond", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Tag & Nacht", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Jahreszeiten", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Milchstraße", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Weltraum-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const DEUTSCHLAND_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Bundesländer & Geografie",
    t1_title: "Die 16 Länder", t1_text: "Deutschland ist eine Bundesrepublik.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie viele Bundesländer gibt es?", t1_qa: "16", t1_qb: "10", t1_qc: "12", t1_qd: "20",
    t1_w1: "Jedes", t1_w2: "Bundesland", t1_w3: "hat", t1_w4: "seine", t1_w5: "eigene", t1_w6: "Landesregierung.", t1_w7: "",
    t1_l1: "Bayern", t1_r1: "München", t1_l2: "Sachsen", t1_r2: "Dresden", t1_l3: "Hessen", t1_r3: "Wiesbaden",
    t1_sent: "Die Hauptstadt heißt ___.", t1_qa2: "Berlin", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Berlin", t1_f2: "Hamburg", t1_f3: "und", t1_f4: "Bremen", t1_f5: "sind", t1_f6: "Stadtstaaten.", t1_f7: "",
    t1_tk1: "Der", t1_tk2: "Bundeskanzler", t1_tk3: "leitet", t1_tk4: "die", t1_tk5: "Geschäfte", t1_tk6: "der", t1_tk7: "Bundesregierung.", t1_tk8: "",
    t1_bl1: "Land", t1_bl2: "Stadt", t1_i1: "Thüringen", t1_i2: "Erfurt", t1_i3: "Brandenburg", t1_i4: "Potsdam",
    t2_title: "Wappen & Flaggen", t2_text: "Symbole der Identität.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welche Farben hat die deutsche Flagge?", t2_qa: "Schwarz-Rot-Gold", t2_qb: "Blau-Weiß-Rot", t2_qc: "Grün-Gelb", t2_qd: "Rot-Weiß",
    t2_w1: "Flaggen", t2_w2: "wehen", t2_w3: "oft", t2_w4: "vor", t2_w5: "wichtigen", t2_w6: "Regierungsgebäuden.", t2_w7: "",
    t2_l1: "Gold", t2_r1: "Wappen", t2_l2: "Silber", t2_r2: "Metall", t2_l3: "Löwe", t2_r3: "Tier",
    t2_sent: "Das Bundeswappen zeigt einen ___.", t2_qa2: "Adler", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Jedes", t2_f2: "Bundesland", t2_f3: "besitzt", t2_f4: "sein", t2_f5: "ganz", t2_f6: "eigenes", t2_f7: "Wappen.",
    t2_tk1: "Das", t2_tk2: "Wappen", t2_tk3: "von", t2_tk4: "Berlin", t2_tk5: "zeigt", t2_tk6: "einen", t2_tk7: "Bären.", t2_tk8: "",
    t2_bl1: "Farbe", t2_bl2: "Symbol", t2_i1: "Schwarz", t2_i2: "Adler", t2_i3: "Gold", t2_i4: "Bär",
    t3_title: "Berge & Täler", t3_text: "Die Landschaften im Süden.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wie heißt das höchste Gebirge?", t3_qa: "Die Alpen", t3_qb: "Der Harz", t3_qc: "Die Rhön", t3_qd: "Der Taunus",
    t3_w1: "In", t3_w2: "den", t3_w3: "Alpen", t3_w4: "liegt", t3_w5: "oft", t3_w6: "das", t3_w7: "ganze",
    t3_l1: "Gipfel", t3_r1: "Spitze", t3_l2: "Gletscher", t3_r2: "Eis", t3_l3: "Alm", t3_r3: "Wiese",
    t3_sent: "Der höchste Berg ist die ___.", t3_qa2: "Zugspitze", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Mittelgebirge", t3_f2: "sind", t3_f3: "nicht", t3_f4: "so", t3_f5: "hoch", t3_f6: "wie", t3_f7: "Hochgebirge.",
    t3_tk1: "Wanderwege", t3_tk2: "führen", t3_tk3: "uns", t3_tk4: "durch", t3_tk5: "schöne", t3_tk6: "Bergregionen.", t3_tk7: "", t3_tk8: "",
    t3_bl1: "Hoch", t3_bl2: "Niedrig", t3_i1: "Zugspitze", t3_i2: "Heide", t3_i3: "Alpen", t3_i4: "Marsch",
    t4_title: "Flüsse", t4_text: "Die Adern des Landes.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Welcher Fluss ist der längste?", t4_qa: "Der Rhein", t4_qb: "Die Elbe", t4_qc: "Die Donau", t4_qd: "Der Main",
    t4_w1: "Schiffe", t4_w2: "transportieren", t4_w3: "viele", t4_w4: "Güter", t4_w5: "auf", t4_w6: "den", t4_w7: "Flüssen.",
    t4_l1: "Rhein", t4_r1: "Westen", t4_l2: "Donau", t4_r2: "Süden", t4_l3: "Elbe", t4_r3: "Norden",
    t4_sent: "Flüsse fließen meistens in die ___.", t4_qa2: "Nordsee", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "An", t4_f2: "vielen", t4_f3: "Flüssen", t4_f4: "liegen", t4_f5: "große", t4_f6: "und", t4_f7: "alte",
    t4_tk1: "Die", t4_tk2: "Donau", t4_tk3: "fließt", t4_tk4: "ins", t4_tk5: "Schwarze", t4_tk6: "Meer.", t4_tk7: "", t4_tk8: "",
    t4_bl1: "Fluss", t4_bl2: "Meer", t4_i1: "Oder", t4_i2: "Ostsee", t4_i3: "Weser", t4_i4: "Nordsee",
    t5_title: "Küsten & Meere", t5_text: "Der Norden Deutschlands.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Welche Meere grenzen im Norden an?", t5_qa: "Nordsee und Ostsee", t5_qb: "Mittelmeer", t5_qc: "Rotes Meer", t5_qd: "Eismeer",
    t5_w1: "Bei", t5_w2: "Ebbe", t5_w3: "kann", t5_w4: "man", t5_w5: "auf", t5_w6: "dem", t5_w7: "Meeresboden",
    t5_l1: "Ebbe", t5_r1: "Weg", t5_l2: "Flut", t5_r2: "Wasser", t5_l3: "Insel", t5_r3: "Land",
    t5_sent: "Das Wattenmeer gehört zur ___.", t5_qa2: "Nordsee", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "An", t5_f2: "der", t5_f3: "Ostsee", t5_f4: "gibt", t5_f5: "es", t5_f6: "viele", t5_f7: "schöne",
    t5_tk1: "Die", t5_tk2: "Halligen", t5_tk3: "sind", t5_tk4: "kleine", t5_tk5: "Inseln", t5_tk6: "ohne", t5_tk7: "Schutzdeich.", t5_tk8: "",
    t5_bl1: "Nord", t5_bl2: "Süd", t5_i1: "Sylt", t5_i2: "Zugspitze", t5_i3: "Rügen", t5_i4: "Feldberg",
    t6_title: "Hauptstädte", t6_text: "Wo die Regierung sitzt.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was ist die Hauptstadt von Bayern?", t6_qa: "München", t6_qb: "Nürnberg", t6_qc: "Augsburg", t6_qd: "Regensburg",
    t6_w1: "Dresden", t6_w2: "ist", t6_w3: "bekannt", t6_w4: "für", t6_w5: "seine", t6_w6: "vielen", t6_w7: "Barockbauten.",
    t6_l1: "Hannover", t6_r1: "Niedersachsen", t6_l2: "Mainz", t6_r2: "Rheinland-Pfalz", t6_l3: "Düsseldorf", t6_r3: "NRW",
    t6_sent: "Stuttgart ist die Hauptstadt von ___.", t6_qa2: "Baden-Württemberg", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Magdeburg", t6_f2: "liegt", t6_f3: "direkt", t6_f4: "an", t6_f5: "der", t6_f6: "Elbe.", t6_f7: "",
    t6_tk1: "Saarbrücken", t6_tk2: "ist", t6_tk3: "die", t6_tk4: "Landeshauptstadt", t6_tk5: "des", t6_tk6: "Saarlandes.", t6_tk7: "", t6_tk8: "",
    t6_bl1: "Norden", t6_bl2: "Süden", t6_i1: "Kiel", t6_i2: "München", t6_i3: "Schwerin", t6_i4: "Stuttgart",
    t7_title: "Nachbarländer", t7_text: "Mitten in Europa.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wie viele Nachbarländer hat Deutschland?", t7_qa: "9", t7_qb: "5", t7_qc: "12", t7_qd: "7",
    t7_w1: "Deutschland", t7_w2: "liegt", t7_w3: "im", t7_w4: "Herzen", t7_w5: "von", t7_w6: "Europa.", t7_w7: "",
    t7_l1: "Dänemark", t7_r1: "Norden", t7_l2: "Österreich", t7_r2: "Süden", t7_l3: "Polen", t7_r3: "Osten",
    t7_sent: "Im Westen liegt das Land ___.", t7_qa2: "Frankreich", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Offene", t7_f2: "Grenzen", t7_f3: "erleichtern", t7_f4: "das", t7_f5: "Reisen", t7_f6: "sehr.", t7_f7: "",
    t7_tk1: "Die", t7_tk2: "Schweiz", t7_tk3: "ist", t7_tk4: "ein", t7_tk5: "Nachbarland", t7_tk6: "im", t7_tk7: "Süden.", t7_tk8: "",
    t7_bl1: "Nachbar", t7_bl2: "Kein Nachbar", t7_i1: "Polen", t7_i2: "Spanien", t7_i3: "Österreich", t7_i4: "Italien",
    t8_title: "Geografie-Check", t8_text: "Kennst du dich aus?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Welches ist das flächenmäßig größte Land?", t8_qa: "Bayern", t8_qb: "NRW", t8_qc: "Berlin", t8_qd: "Hessen",
    t8_w1: "Deutschland", t8_w2: "hat", t8_w3: "sehr", t8_w4: "vielfältige", t8_w5: "Landschaften.", t8_w6: "", t8_w7: "",
    t8_l1: "Heide", t8_r1: "Ebene", t8_l2: "Harz", t8_r2: "Berge", t8_l3: "Bodensee", t8_r3: "Wasser",
    t8_sent: "Wir leben in einer ___.", t8_qa2: "Demokratie", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Der", t8_f2: "Föderalismus", t8_f3: "verteilt", t8_f4: "die", t8_f5: "Macht", t8_f6: "auf", t8_f7: "viele.",
    t8_tk1: "Ein", t8_tk2: "Atlas", t8_tk3: "hilft", t8_tk4: "beim", t8_tk5: "Suchen", t8_tk6: "von", t8_tk7: "Orten.", t8_tk8: "",
    t8_bl1: "Land", t8_bl2: "Fluss", t8_i1: "Hessen", t8_i2: "Main", t8_i3: "Baden", t8_i4: "Rhein",
  },
};

export const DEUTSCHLAND_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die 16 Länder", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wappen & Flaggen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Berge & Täler", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Flüsse", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Küsten & Meere", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Hauptstädte", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Nachbarländer", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Geografie-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const POLITIK_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Gemeinde & Politik",
    t1_title: "Die Gemeinde", t1_text: "Dort wo wir wohnen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer leitet die Gemeinde?", t1_qa: "Bürgermeister", t1_qb: "Lehrer", t1_qc: "Polizei", t1_qd: "Postbote",
    t1_w1: "Alle", t1_w2: "Bürger", t1_w3: "können", t1_w4: "ihre", t1_w5: "Meinung", t1_w6: "sagen.", t1_w7: "",
    t1_l1: "Dorf", t1_r1: "Klein", t1_l2: "Stadt", t1_r2: "Groß", t1_l3: "Kreis", t1_r3: "Verbund",
    t1_sent: "Der Gemeinderat wird ___.", t1_qa2: "gewählt", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Das", t1_f2: "Rathaus", t1_f3: "ist", t1_f4: "die", t1_f5: "Zentrale", t1_f6: "der", t1_f7: "Gemeinde.",
    t1_tk1: "In", t1_tk2: "der", t1_tk3: "Gemeindeversammlung", t1_tk4: "werden", t1_tk5: "wichtige", t1_tk6: "Dinge", t1_tk7: "beschlossen.", t1_tk8: "",
    t1_bl1: "Amt", t1_bl2: "Person", t1_i1: "Bürgermeister", t1_i2: "Rathaus", t1_i3: "Sekretär", t1_i4: "Amt",
    t2_title: "Wahlen", t2_text: "Deine Stimme zählt.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Ab wie vielen Jahren darf man oft wählen?", t2_qa: "18", t2_qb: "10", t2_qc: "5", t2_qd: "14",
    t2_w1: "Man", t2_w2: "macht", t2_w3: "sein", t2_w4: "Kreuzchen", t2_w5: "hinter", t2_w6: "einem", t2_w7: "Namen.",
    t2_l1: "Zettel", t2_r1: "Wählen", t2_l2: "Urne", t2_r2: "Sammeln", t2_l3: "Kabine", t2_r3: "Schutz",
    t2_sent: "Wahlen müssen ___ sein.", t2_qa2: "geheim", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Demokratie", t2_f2: "bedeutet", t2_f3: "dass", t2_f4: "das", t2_f5: "Volk", t2_f6: "mitbestimmt.", t2_f7: "",
    t2_tk1: "Freie", t2_tk2: "Wahlen", t2_tk3: "sind", t2_tk4: "die", t2_tk5: "Grundlage", t2_tk6: "unserer", t2_tk7: "Gesellschaft.", t2_tk8: "",
    t2_bl1: "Wahl", t2_bl2: "Schule", t2_i1: "Stimmzettel", t2_i2: "Heft", t2_i3: "Wahlurne", t2_i4: "Tafel",
    t3_title: "Aufgaben", t3_text: "Was die Gemeinde tut.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wofür gibt die Gemeinde Geld aus?", t3_qa: "Schulbau", t3_qb: "Urlaub", t3_qc: "Süßigkeiten", t3_qd: "Autos für alle",
    t3_w1: "Die", t3_w2: "Müllabfuhr", t3_w3: "sorgt", t3_w4: "für", t3_w5: "Sauberkeit", t3_w6: "im", t3_w7: "Ort.",
    t3_l1: "Schule", t3_r1: "Lernen", t3_l2: "Park", t3_r2: "Spielen", t3_l3: "Straße", t3_r3: "Fahren",
    t3_sent: "Die Feuerwehr wird von der ___ bezahlt.", t3_qa2: "Gemeinde", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Auch", t3_f2: "Schwimmbäder", t3_f3: "und", t3_f4: "Büchereien", t3_f5: "gehören", t3_f6: "dazu.", t3_f7: "",
    t3_tk1: "Straßenbeleuchtung", t3_tk2: "macht", t3_tk3: "den", t3_tk4: "Heimweg", t3_tk5: "in", t3_tk6: "der", t3_tk7: "Nacht", t3_tk8: "sicherer.",
    t3_bl1: "Aufgabe", t3_bl2: "Privat", t3_i1: "Kanalbau", t3_i2: "Einkaufen", t3_i3: "Spielplatz", t3_i4: "Fernsehen",
    t4_title: "Steuern", t4_text: "Wie alles bezahlt wird.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Woher bekommt die Gemeinde Geld?", t4_qa: "Steuern", t4_qb: "Geschenke", t4_qc: "Lotto", t4_qd: "Finden",
    t4_w1: "Wer", t4_w2: "arbeitet", t4_w3: "muss", t4_w4: "einen", t4_w5: "Teil", t4_w6: "abgeben.", t4_w7: "",
    t4_l1: "Gewerbe", t4_r1: "Steuer", t4_l2: "Hund", t4_r2: "Steuer", t4_l3: "Grund", t4_r3: "Steuer",
    t4_sent: "Alle Bürger tragen zum ___ bei.", t4_qa2: "Gemeinwohl", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Mit", t4_f2: "Steuern", t4_f3: "finanziert", t4_f4: "der", t4_f5: "Staat", t4_f6: "wichtige", t4_f7: "Aufgaben.",
    t4_tk1: "Hundesteuer", t4_tk2: "muss", t4_tk3: "jeder", t4_tk4: "Hundebesitzer", t4_tk5: "jährlich", t4_tk6: "bezahlen.", t4_tk7: "", t4_tk8: "",
    t4_bl1: "Einnahme", t4_bl2: "Ausgabe", t4_i1: "Steuern", t4_i2: "Gehalt", t4_i3: "Gebühren", t4_i4: "Förderung",
    t5_title: "Demokratie", t5_text: "Herrschaft des Volkes.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist ein Grundrecht?", t5_qa: "Meinungsfreiheit", t5_qb: "Eispflicht", t5_qc: "Fernsehzwang", t5_qd: "Gar nichts",
    t5_w1: "Friedliches", t5_w2: "Zusammenleben", t5_w3: "braucht", t5_w4: "klare", t5_w5: "Regeln", t5_w6: "und", t5_w7: "Gesetze.",
    t5_l1: "Recht", t5_r1: "Dürfen", t5_l2: "Pflicht", t5_r2: "Müssen", t5_l3: "Gesetz", t5_r3: "Regel",
    t5_sent: "In Deutschland gilt das ___.", t5_qa2: "Grundgesetz", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Menschenwürde", t5_f2: "ist", t5_f3: "unantastbar", t5_f4: "steht", t5_f5: "im", t5_f6: "Artikel", t5_f7: "1.",
    t5_tk1: "Diskussionen", t5_tk2: "helfen", t5_tk3: "dabei", t5_tk4: "einen", t5_tk5: "Kompromiss", t5_tk6: "zu", t5_tk7: "finden.", t5_tk8: "",
    t5_bl1: "Freiheit", t5_bl2: "Zwang", t5_i1: "Meinung", t5_i2: "Zensur", t5_i3: "Glaube", t5_i4: "Verbot",
    t6_title: "Kinderrechte", t6_text: "Auch ihr habt Rechte.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welches Recht haben Kinder?", t6_qa: "Recht auf Bildung", t6_qb: "Recht auf Lärm", t6_qc: "Recht auf Schlagen", t6_qd: "Nichts",
    t6_w1: "Jedes", t6_w2: "Kind", t6_w3: "sollte", t6_w4: "ohne", t6_w5: "Gewalt", t6_w6: "aufwachsen.", t6_w7: "",
    t6_l1: "Spiel", t6_r1: "Freizeit", t6_l2: "Schutz", t6_r2: "Sicherheit", t6_l3: "Name", t6_r3: "Identität",
    t6_sent: "Kinder brauchen besonderen ___.", t6_qa2: "Schutz", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Die", t6_f2: "UN-Kinderrechtskonvention", t6_f3: "gilt", t6_f4: "auf", t6_f5: "der", t6_f6: "ganzen", t6_f7: "Welt.",
    t6_tk1: "Kinder", t6_tk2: "haben", t6_tk3: "das", t6_tk4: "Recht", t6_tk5: "gehört", t6_tk6: "zu", t6_tk7: "werden.", t6_tk8: "",
    t6_bl1: "Recht", t6_bl2: "Pflicht", t6_i1: "Lernen", t6_i2: "Aufräumen", t6_i3: "Spielen", t6_i4: "Helfen",
    t7_title: "Der Staat", t7_text: "Deutschland als Ganzes.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wie heißt das Parlament?", t7_qa: "Bundestag", t7_qb: "Rathaus", t7_qc: "Schule", t7_qd: "Gericht",
    t7_w1: "Die", t7_w2: "Gesetze", t7_w3: "gelten", t7_w4: "für", t7_w5: "alle", t7_w6: "Menschen", t7_w7: "hier.",
    t7_l1: "Berlin", t7_r1: "Hauptstadt", t7_l2: "Bonn", t7_r2: "Ex-Regierung", t7_l3: "Karlsruhe", t7_r3: "Gericht",
    t7_sent: "Der Bundespräsident ist das ___.", t7_qa2: "Staatsoberhaupt", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Die", t7_f2: "Gewaltenteilung", t7_f3: "verhindert", t7_f4: "dass", t7_f5: "einer", t7_f6: "allein", t7_f7: "bestimmt.",
    t7_tk1: "Ministerien", t7_tk2: "kümmern", t7_tk3: "sich", t7_tk4: "um", t7_tk5: "Gesundheit", t7_tk6: "Umwelt", t7_tk7: "und", t7_tk8: "Bildung.",
    t7_bl1: "Amt", t7_bl2: "Ort", t7_i1: "Kanzler", t7_i2: "Berlin", t7_i3: "Minister", t7_i4: "Bonn",
    t8_title: "Politik-Check", t8_text: "Bist du ein Bürger?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was bedeutet 'Mehrheit'?", t8_qa: "Mehr als die Hälfte", t8_qb: "Wenige", t8_qc: "Alle", t8_qd: "Gar keiner",
    t8_w1: "Mitbestimmung", t8_w2: "fängt", t8_w3: "schon", t8_w4: "in", t8_w5: "der", t8_w6: "Klasse", t8_w7: "an.",
    t8_l1: "Klassensprecher", t8_r1: "Schule", t8_l2: "Bürgermeister", t8_r2: "Ort", t8_l3: "Kanzler", t8_r3: "Land",
    t8_sent: "Politik betrifft uns ___.", t8_qa2: "alle", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wer", t8_f2: "sich", t8_f3: "einmischt", t8_f4: "kann", t8_f5: "die", t8_f6: "Welt", t8_f7: "verändern.",
    t8_tk1: "Kompromisse", t8_tk2: "sind", t8_tk3: "wichtig", t8_tk4: "für", t8_tk5: "ein", t8_tk6: "gutes", t8_tk7: "Zusammenleben.", t8_tk8: "",
    t8_bl1: "Gemeinsam", t8_bl2: "Einsam", t8_i1: "Team", t8_i2: "Streit", t8_i3: "Einigung", t8_i4: "Egoismus",
  },
};

export const POLITIK_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die Gemeinde", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wahlen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Aufgaben", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Steuern", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Demokratie", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Kinderrechte", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Der Staat", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Politik-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const STROM_ADV_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Strom & Technik",
    t1_title: "Parallelschaltung", t1_text: "Lichterketten und mehr.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was passiert, wenn eine Lampe kaputt geht?", t1_qa: "Rest leuchtet weiter", t1_qb: "Alle gehen aus", t1_qc: "Batterie explodiert", t1_qd: "Nichts",
    t1_w1: "In", t1_w2: "unserem", t1_w3: "Haus", t1_w4: "sind", t1_w5: "fast", t1_w6: "alle", t1_w7: "Geräte",
    t1_l1: "Quelle", t1_r1: "Batterie", t1_l2: "Lampe 1", t1_r2: "Zweig 1", t1_l3: "Lampe 2", t1_r3: "Zweig 2",
    t1_sent: "Hier verzweigt sich der ___.", t1_qa2: "Strom", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Jede", t1_f2: "Lampe", t1_f3: "erhält", t1_f4: "die", t1_f5: "volle", t1_f6: "Spannung.", t1_f7: "",
    t1_tk1: "Parallelschaltungen", t1_tk2: "sind", t1_tk3: "praktischer", t1_tk4: "als", t1_tk5: "Reihenschaltungen.", t1_tk6: "undefined", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Parallel", t1_bl2: "Reihe", t1_i1: "Zweig", t1_i2: "Kette", t1_i3: "Verteiler", t1_i4: "Ring",
    t2_title: "Reihenschaltung", t2_text: "Hintereinander geschaltet.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was passiert hier bei einem Defekt?", t2_qa: "Alles geht aus", t2_qb: "Nichts", t2_qc: "Es wird heller", t2_qd: "Es raucht",
    t2_w1: "Die", t2_w2: "Spannung", t2_w3: "teilt", t2_w4: " sich", t2_w5: "auf", t2_w6: "die", t2_w7: "Lampen",
    t2_l1: "Batterie", t2_r1: "Start", t2_l2: "Kabel", t2_r2: "Leiter", t2_l3: "Lampen", t2_r3: "Kette",
    t2_sent: "Der Strom muss durch ___.", t2_qa2: "alle", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Alte", t2_f2: "Christbaumkerzen", t2_f3: "waren", t2_f4: "oft", t2_f5: "so", t2_f6: "verdrahtet.", t2_f7: "",
    t2_tk1: "In", t2_tk2: "einer", t2_tk3: "Reihe", t2_tk4: "fließt", t2_tk5: "überall", t2_tk6: "der", t2_tk7: "gleiche", t2_tk8: "Strom.",
    t2_bl1: "Hintereinander", t2_bl2: "Nebeneinander", t2_i1: "Kette", t2_i2: "Zweig", t2_i3: "Reihe", t2_i4: "Parallel",
    t3_title: "Magnetismus", t3_text: "Elektromagnete.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Womit baut man einen Elektromagneten?", t3_qa: "Spule und Eisenkern", t3_qb: "Nur Holz", t3_qc: "Nur Wasser", t3_qd: "Plastik",
    t3_w1: "Schaltet", t3_w2: "man", t3_w3: "den", t3_w4: "Strom", t3_w5: "aus", t3_w6: "verschwindet", t3_w7: "die",
    t3_l1: "Draht", t3_r1: "Spule", t3_l2: "Eisen", t3_r2: "Kern", t3_l3: "Batterie", t3_r3: "Energie",
    t3_sent: "Strom erzeugt ein ___.", t3_qa2: "Magnetfeld", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Elektromagnete", t3_f2: "können", t3_f3: "sehr", t3_f4: "schwere", t3_f5: "Lasten", t3_f6: "heben.", t3_f7: "",
    t3_tk1: "Klingeln", t3_tk2: "und", t3_tk3: "Motoren", t3_tk4: "nutzen", t3_tk5: "oft", t3_tk6: "diesen", t3_tk7: "Effekt.", t3_tk8: "",
    t3_bl1: "Magnet", t3_bl2: "Kein Magnet", t3_i1: "Spule", t3_i2: "Holz", t3_i3: "Strom", t3_i4: "Plastik",
    t4_title: "Kraftwerke", t4_text: "Woher kommt die Energie?", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Welches Kraftwerk nutzt Wasser?", t4_qa: "Wasserkraftwerk", t4_qb: "Windrad", t4_qc: "Solarzelle", t4_qd: "Kohlemeiler",
    t4_w1: "Wir", t4_w2: "brauchen", t4_w3: "immer", t4_w4: "mehr", t4_w5: "umweltfreundlichen", t4_w6: "Strom.", t4_w7: "",
    t4_l1: "Sonne", t4_r1: "Photovoltaik", t4_l2: "Wind", t4_r2: "Windrad", t4_l3: "Fluss", t4_r3: "Damm",
    t4_sent: "Eine Turbine treibt den ___ an.", t4_qa2: "Generator", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Strom", t4_f2: "wird", t4_f3: "über", t4_f4: "Hochspannungsleitungen", t4_f5: "weit", t4_f6: "transportiert.", t4_f7: "",
    t4_tk1: "Kohlekraftwerke", t4_tk2: "stoßen", t4_tk3: "leider", t4_tk4: "viel", t4_tk5: "Kohlendioxid", t4_tk6: "aus.", t4_tk7: "", t4_tk8: "",
    t4_bl1: "Öko", t4_bl2: "Fossil", t4_i1: "Wind", t4_i2: "Kohle", t4_i3: "Sonne", t4_i4: "Gas",
    t5_title: "Sicherheit", t5_text: "Schutz im Haushalt.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was schützt vor zu hohem Strom?", t5_qa: "Sicherung", t5_qb: "Tapete", t5_qc: "Teppich", t5_qd: "Vorhang",
    t5_w1: "Stecke", t5_w2: "niemals", t5_w3: "fremde", t5_w4: "Gegenstände", t5_w5: "in", t5_w6: "die", t5_w7: "Steckdose.",
    t5_l1: "Sicherung", t5_r1: "Überlast", t5_l2: "FI-Schalter", t5_r2: "Fehlerstrom", t5_l3: "Erdung", t5_r3: "Schutz",
    t5_sent: "Ein FI-Schalter schaltet ___ ab.", t5_qa2: "sofort", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Kaputte", t5_f2: "Kabel", t5_f3: "müssen", t5_f4: "sofort", t5_f5: "ausgetauscht", t5_f6: "werden.", t5_f7: "",
    t5_tk1: "Strom", t5_tk2: "sucht", t5_tk3: "sich", t5_tk4: "immer", t5_tk5: "den", t5_tk6: "kürzesten", t5_tk7: "Weg.", t5_tk8: "",
    t5_bl1: "Sicher", t5_bl2: "Gefährlich", t5_i1: "Prüfsiegel", t5_i2: "Blanker Draht", t5_i3: "Isolierung", t5_i4: "Wasser",
    t6_title: "Verbrauch", t6_text: "Strom sparen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welches Gerät braucht meist am meisten Strom?", t6_qa: "Elektroherd", t6_qb: "Handyladegerät", t6_qc: "LED-Lampe", t6_qd: "Radio",
    t6_w1: "Schalte", t6_w2: "das", t6_w3: "Licht", t6_w4: "aus", t6_w5: "wenn", t6_w6: "du", t6_w7: "gehst.",
    t6_l1: "LED", t6_r1: "Sparsam", t6_l2: "Stand-by", t6_r2: "Verbrauch", t6_l3: "A++", t6_r3: "Effizienz",
    t6_sent: "Wir messen Strom in ___.", t6_qa2: "Kilowattstunden", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Energie", t6_f2: "zu", t6_f3: "sparen", t6_f4: "schont", t6_f5: "die", t6_f6: "Umwelt", t6_f7: "enorm.",
    t6_tk1: "Alte", t6_tk2: "Kühlschränke", t6_tk3: "fressen", t6_tk4: "oft", t6_tk5: "sehr", t6_tk6: "viel", t6_tk7: "Strom.", t6_tk8: "",
    t6_bl1: "Viel", t6_bl2: "Wenig", t6_i1: "Heizen", t6_i2: "Licht", t6_i3: "Backen", t6_i4: "Laden",
    t7_title: "Entdecker", t7_text: "Berühmte Forscher.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wer erfand die Glühbirne (praktisch)?", t7_qa: "Thomas Edison", t7_qb: "Isaac Newton", t7_qc: "Albert Einstein", t7_qd: "Galileo",
    t7_w1: "Viele", t7_w2: "schlaue", t7_w3: "Köpfe", t7_w4: "haben", t7_w5: "den", t7_w6: "Strom", t7_w7: "erforscht.",
    t7_l1: "Watt", t7_r1: "Leistung", t7_l2: "Ampere", t7_r2: "Stärke", t7_l3: "Ohm", t7_r3: "Widerstand",
    t7_sent: "Alessandro Volta erfand die ___.", t7_qa2: "Batterie", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Ohne", t7_f2: "diese", t7_f3: "Erfindungen", t7_f4: "wäre", t7_f5: "unser", t7_f6: "Alltag", t7_f7: "ganz",
    t7_tk1: "Physik", t7_tk2: "ist", t7_tk3: "die", t7_tk4: "Wissenschaft", t7_tk5: "von", t7_tk6: "der", t7_tk7: "Natur.", t7_tk8: "",
    t7_bl1: "Person", t7_bl2: "Einheit", t7_i1: "Edison", t7_i2: "Volt", t7_i3: "Tesla", t7_i4: "Watt",
    t8_title: "Technik-Check", t8_text: "Bist du ein Ingenieur?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was leitet Strom?", t8_qa: "Salzwasser", t8_qb: "Destilliertes Wasser", t8_qc: "Öl", t8_qd: "Plastik",
    t8_w1: "In", t8_w2: "der", t8_w3: "Zukunft", t8_w4: "fahren", t8_w5: "viele", t8_w6: "Autos", t8_w7: "mit",
    t8_l1: "Akku", t8_r1: "Speicher", t8_l2: "Motor", t8_r2: "Bewegung", t8_l3: "Licht", t8_r3: "Helligkeit",
    t8_sent: "Strom ist eine Form von ___.", t8_qa2: "Energie", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "viel", t8_f4: "über", t8_f5: "Spannung", t8_f6: "und", t8_f7: "Strom",
    t8_tk1: "Kurzschlüsse", t8_tk2: "können", t8_tk3: "sehr", t8_tk4: "heiß", t8_tk5: "werden", t8_tk6: "und", t8_tk7: "Brände", t8_tk8: "auslösen.",
    t8_bl1: "Strom", t8_bl2: "Magnet", t8_i1: "Elektron", t8_i2: "Nordpol", t8_i3: "Leitung", t8_i4: "Eisenkern",
  },
};

export const STROM_ADV_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Parallelschaltung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Reihenschaltung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Magnetismus", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Kraftwerke", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Sicherheit", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Verbrauch", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Entdecker", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Technik-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const PUBERTAET_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körper & Gefühle",
    t1_title: "Wachstum", t1_text: "Dein Körper verändert sich.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was passiert in der Pubertät?", t1_qa: "Körperliches Wachstum", t1_qb: "Man wird kleiner", t1_qc: "Nichts", t1_qd: "Man schrumpft",
    t1_w1: "Jeder", t1_w2: "Mensch", t1_w3: "entwickelt", t1_w4: "sich", t1_w5: "in", t1_w6: "seinem", t1_w7: "Tempo.",
    t1_l1: "Größe", t1_r1: "Wachsen", t1_l2: "Stimme", t1_r2: "Tiefer", t1_l3: "Haut", t1_r3: "Pickel",
    t1_sent: "Hormone steuern die ___.", t1_qa2: "Veränderung", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "In", t1_f2: "dieser", t1_f3: "Zeit", t1_f4: "passiert", t1_f5: "sehr", t1_f6: "viel", t1_f7: "Neues.",
    t1_tk1: "Hormone", t1_tk2: "sind Botenstoffe", t1_tk3: "die", t1_tk4: "über", t1_tk5: "das", t1_tk6: "Blut", t1_tk7: "wandern.", t1_tk8: "",
    t1_bl1: "Neu", t1_bl2: "Alt", t1_i1: "Bartwuchs", t1_i2: "Milchzahn", t1_i3: "Stimmbruch", t1_i4: "Baby",
    t2_title: "Gefühle", t2_text: "Eine Achterbahn der Emotionen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Sind wechselnde Gefühle normal?", t2_qa: "Ja, absolut", t2_qb: "Nein, nie", t2_qc: "Nur bei Regen", t2_qd: "Egal",
    t2_w1: "Gefühle", t2_w2: "gehören", t2_w3: "zu", t2_w4: "uns", t2_w5: "wie", t2_w6: "unser", t2_w7: "Name.",
    t2_l1: "Wut", t2_r1: "Schreien", t2_l2: "Freude", t2_r2: "Lachen", t2_l3: "Angst", t2_r3: "Zittern",
    t2_sent: "Manchmal ist man grundlos ___.", t2_qa2: "traurig", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Es", t2_f2: "hilft", t2_f3: "mit", t2_f4: "Freunden", t2_f5: "oder", t2_f6: "Eltern", t2_f7: "zu",
    t2_tk1: "Selbstvertrauen", t2_tk2: "wächst", t2_tk3: "wenn", t2_tk4: "man", t2_tk5: "sich", t2_tk6: "selbst", t2_tk7: "akzeptiert.", t2_tk8: "",
    t2_bl1: "Positiv", t2_bl2: "Negativ", t2_i1: "Liebe", t2_i2: "Hass", t2_i3: "Glück", t2_i4: "Zorn",
    t3_title: "Mädchen & Jungen", t3_text: "Unterschiede und Gemeinsamkeiten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was bekommen Mädchen meist zuerst?", t3_qa: "Menstruation", t3_qb: "Bärte", t3_qc: "Tiefe Stimmen", t3_qd: "Glatzen",
    t3_w1: "Respekt", t3_w2: "vor", t3_w3: "dem", t3_w4: "anderen", t3_w5: "Geschlecht", t3_w6: "ist", t3_w7: "wichtig.",
    t3_l1: "Mädchen", t3_r1: "Frau", t3_l2: "Junge", t3_r2: "Mann", t3_l3: "Alle", t3_r3: "Mensch",
    t3_sent: "Jungen bekommen oft einen ___.", t3_qa2: "Stimmbruch", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Körperliche", t3_f2: "Merkmale", t3_f3: "prägen", t3_f4: "unser", t3_f5: "Erscheinungsbild.", t3_f6: "", t3_f7: "",
    t3_tk1: "Gleichberechtigung", t3_tk2: "bedeutet", t3_tk3: "dass", t3_tk4: "alle", t3_tk5: "die", t3_tk6: "gleichen", t3_tk7: "Chancen", t3_tk8: "haben.",
    t3_bl1: "Weiblich", t3_bl2: "Männlich", t3_i1: "Brust", t3_i2: "Bart", t3_i3: "Eierstock", t3_i4: "Hoden",
    t4_title: "Hygiene", t4_text: "Körperpflege wird wichtiger.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Warum schwitzt man mehr?", t4_qa: "Aktive Schweißdrüsen", t4_qb: "Zuviel Sport", t4_qc: "Nichts", t4_qd: "Kälte",
    t4_w1: "Tägliches", t4_w2: "Waschen", t4_w3: "ist", t4_w4: "gut", t4_w5: "für", t4_w6: "das", t4_w7: "Wohlbefinden.",
    t4_l1: "Haare", t4_r1: "Shampoo", t4_l2: "Zähne", t4_r2: "Pasta", t4_l3: "Haut", t4_r3: "Seife",
    t4_sent: "Deo hilft gegen ___.", t4_qa2: "Geruch", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Saubere", t4_f2: "Kleidung", t4_f3: "gehört", t4_f4: "zu", t4_f5: "einem", t4_f6: "gepflegten", t4_f7: "Äußeren.",
    t4_tk1: "Pickel", t4_tk2: "sollte", t4_tk3: "man", t4_tk4: "nicht", t4_tk5: "mit", t4_tk6: "dreckigen", t4_tk7: "Fingern", t4_tk8: "berühren.",
    t4_bl1: "Pflege", t4_bl2: "Dreck", t4_i1: "Duschen", t4_i2: "Matsch", t4_i3: "Zähneputzen", t4_i4: "Staub",
    t5_title: "Fortpflanzung", t5_text: "Wie Leben entsteht.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was verschmilzt bei der Zeugung?", t5_qa: "Eizelle und Spermium", t5_qb: "Apfel und Birne", t5_qc: "Hand und Fuß", t5_qd: "Zwei Steine",
    t5_w1: "Ein", t5_w2: "neues", t5_w3: "Leben", t5_w4: "beginnt", t5_w5: "winzig", t5_w6: "klein.", t5_w7: "",
    t5_l1: "Eizelle", t5_r1: "Mutter", t5_l2: "Samen", t5_r2: "Vater", t5_l3: "Baby", t5_r3: "Kind",
    t5_sent: "Das Baby wächst in der ___.", t5_qa2: "Gebärmutter", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Neun", t5_f2: "Monate", t5_f3: "dauert", t5_f4: "die", t5_f5: "Schwangerschaft", t5_f6: "im", t5_f7: "Bauch.",
    t5_tk1: "Genetik", t5_tk2: "bestimmt", t5_tk3: "welche", t5_tk4: "Merkmale", t5_tk5: "wir", t5_tk6: "von", t5_tk7: "Eltern", t5_tk8: "erben.",
    t5_bl1: "Start", t5_bl2: "Entwicklung", t5_i1: "Befruchtung", t5_i2: "Fötus", t5_i3: "Geburt", t5_i4: "Baby",
    t6_title: "Grenzen", t6_text: "Mein Körper gehört mir.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was tust du, wenn dich jemand blöd anfässt?", t6_qa: "Laut 'Nein' sagen", t6_qb: "Nichts", t6_qc: "Lachen", t6_qd: "Weglaufen",
    t6_w1: "Hör", t6_w2: "auf", t6_w3: "dein", t6_w4: "Bauchgefühl", t6_w5: "wenn", t6_w6: "etwas", t6_w7: "nicht",
    t6_l1: "Nein", t6_r1: "Sagen", t6_l2: "Halt", t6_r2: "Machen", t6_l3: "Stopp", t6_r3: "Rufen",
    t6_sent: "Gute Geheimnisse machen ___.", t6_qa2: "Spaß", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Es", t6_f2: "gibt", t6_f3: "gute", t6_f4: "und", t6_f5: "schlechte", t6_f6: "Geheimnisse.", t6_f7: "",
    t6_tk1: "Keiner", t6_tk2: "darf", t6_tk3: "dich", t6_tk4: "berühren", t6_tk5: "wenn", t6_tk6: "du", t6_tk7: "es", t6_tk8: "nicht",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Umarmung", t6_i2: "Schlagen", t6_i3: "Kitzeln", t6_i4: "Angst",
    t7_title: "Freundschaft", t7_text: "Zusammenhalt ist alles.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was macht einen guten Freund aus?", t7_qa: "Vertrauen", t7_qb: "Viel Geld", t7_qc: "Teure Spiele", t7_qd: "Coole Kleidung",
    t7_w1: "Streit", t7_w2: "gehört", t7_w3: "dazu", t7_w4: "aber", t7_w5: "man", t7_w6: "muss", t7_w7: "sich",
    t7_l1: "Helfen", t7_r1: "Tat", t7_l2: "Teilen", t7_r2: "Dinge", t7_l3: "Zuhören", t7_r3: "Ohr",
    t7_sent: "Echte Freunde halten ___.", t7_qa2: "zusammen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Ehrlichkeit", t7_f2: "ist", t7_f3: "die", t7_f4: "Basis", t7_f5: "für", t7_f6: "jede", t7_f7: "Beziehung.",
    t7_tk1: "Gemeinsame", t7_tk2: "Interessen", t7_tk3: "verbinden", t7_tk4: "Menschen", t7_tk5: "miteinander.", t7_tk6: "undefined", t7_tk7: "", t7_tk8: "",
    t7_bl1: "Freund", t7_bl2: "Fremd", t7_i1: "Lachen", t7_i2: "Schweigen", t7_i3: "Spielen", t7_i4: "Meiden",
    t8_title: "Check", t8_text: "Kennst du dich?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer hilft bei Problemen?", t8_qa: "Vertrauensperson", t8_qb: "Niemand", t8_qc: "Internet", t8_qd: "Der Fernseher",
    t8_w1: "Jeder", t8_w2: "geht", t8_w3: "seinen", t8_w4: "eigenen", t8_w5: "Weg", t8_w6: "ins", t8_w7: "Erwachsenwerden.",
    t8_l1: "Körper", t8_r1: "Außen", t8_l2: "Seele", t8_r2: "Innen", t8_l3: "Geist", t8_r3: "Denken",
    t8_sent: "Ich bin wertvoll und ___.", t8_qa2: "einzigartig", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Lerne", t8_f2: "dich", t8_f3: "selbst", t8_f4: "zu", t8_f5: "schätzen", t8_f6: "und", t8_f7: "zu",
    t8_tk1: "Selbstbewusstsein", t8_tk2: "hilft", t8_tk3: "dir", t8_tk4: "Herausforderungen", t8_tk5: "zu", t8_tk6: "meistern.", t8_tk7: "", t8_tk8: "",
    t8_bl1: "Ich", t8_bl2: "Wir", t8_i1: "Körper", t8_i2: "Klasse", t8_i3: "Gefühl", t8_i4: "Schule",
  },
};

export const PUBERTAET_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Wachstum", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Gefühle", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Mädchen & Jungen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hygiene", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Fortpflanzung", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Grenzen", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Freundschaft", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const EUROPA_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Unsere Nachbarn in Europa",
    t1_title: "Der Kontinent", t1_text: "Vielfalt auf engem Raum.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie viele Länder hat Europa etwa?", t1_qa: "Fast 50", t1_qb: "Genau 10", t1_qc: "Über 100", t1_qd: "Nur 3",
    t1_w1: "Europa", t1_w2: "ist", t1_w3: "einer", t1_w4: "der", t1_w5: "kleineren", t1_w6: "Kontinente.", t1_w7: "",
    t1_l1: "Alpen", t1_r1: "Mitte", t1_l2: "Pyrenäen", t1_r2: "Westen", t1_l3: "Ural", t1_r3: "Osten",
    t1_sent: "Europa grenzt an den ___ Ozean.", t1_qa2: "Atlantischen", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Das", t1_f2: "Mittelmeer", t1_f3: "trennt", t1_f4: "Europa", t1_f5: "von", t1_f6: "Afrika.", t1_f7: "",
    t1_tk1: "Geografisch", t1_tk2: "reicht", t1_tk3: "Europa", t1_tk4: "vom", t1_tk5: "Atlantik", t1_tk6: "bis", t1_tk7: "zum", t1_tk8: "Ural.",
    t1_bl1: "Norden", t1_bl2: "Süden", t1_i1: "Norwegen", t1_i2: "Italien", t1_i3: "Finnland", t1_i4: "Griechenland",
    t2_title: "Die EU", t2_text: "Gemeinsam stärker.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was bedeutet EU?", t2_qa: "Europäische Union", t2_qb: "Echter Urlaub", t2_qc: "Eis Union", t2_qd: "Europa Unten",
    t2_w1: "Sterne", t2_w2: "auf", t2_w3: "blauem", t2_w4: "Grund", t2_w5: "sind", t2_w6: "das", t2_w7: "Symbol.",
    t2_l1: "Brüssel", t2_r1: "Hauptsitz", t2_l2: "Straßburg", t2_r2: "Parlament", t2_l3: "Euro", t2_r3: "Geld",
    t2_sent: "Die EU hat eine eigene ___.", t2_qa2: "Währung", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Mitgliedstaaten", t2_f3: "arbeiten", t2_f4: "eng", t2_f5: "zusammen.", t2_f6: "", t2_f7: "",
    t2_tk1: "Offene", t2_tk2: "Grenzen", t2_tk3: "erlauben", t2_tk4: "freies", t2_tk5: "Reisen", t2_tk6: "und", t2_tk7: "Arbeiten.", t2_tk8: "",
    t2_bl1: "EU", t2_bl2: "Nicht-EU", t2_i1: "Deutschland", t2_i2: "Schweiz", t2_i3: "Frankreich", t2_i4: "Norwegen",
    t3_title: "Hauptstädte", t3_text: "Metropolen in Europa.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was ist die Hauptstadt von Frankreich?", t3_qa: "Paris", t3_qb: "Rom", t3_qc: "Madrid", t3_qd: "London",
    t3_w1: "In", t3_w2: "London", t3_w3: "fließt", t3_w4: "der", t3_w5: "Fluss", t3_w6: "Themse.", t3_w7: "",
    t3_l1: "Spanien", t3_r1: "Madrid", t3_l2: "Österreich", t3_r2: "Wien", t3_l3: "Polen", t3_r3: "Warschau",
    t3_sent: "Rom ist die Hauptstadt von ___.", t3_qa2: "Italien", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Viele", t3_f2: "Hauptstädte", t3_f3: "haben", t3_f4: "eine", t3_f5: "sehr", t3_f6: "lange", t3_f7: "Geschichte.",
    t3_tk1: "Wien", t3_tk2: "ist", t3_tk3: "bekannt", t3_tk4: "für", t3_tk5: "seine", t3_tk6: "Kaffeehauskultur.", t3_tk7: "", t3_tk8: "",
    t3_bl1: "West", t3_bl2: "Ost", t3_i1: "Paris", t3_i2: "Prag", t3_i3: "Lissabon", t3_i4: "Budapest",
    t4_title: "Sprachen", t4_text: "Guten Tag, Hello, Bonjour.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo spricht man Spanisch?", t4_qa: "In Spanien", t4_qb: "In Polen", t4_qc: "In Schweden", t4_qd: "In Irland",
    t4_w1: "Englisch", t4_w2: "wird", t4_w3: "in", t4_w4: "vielen", t4_w5: "Ländern", t4_w6: "verstanden.", t4_w7: "",
    t4_l1: "Italien", t4_r1: "Ciao", t4_l2: "Niederlande", t4_r2: "Hallo", t4_l3: "Griechenland", t4_r3: "Giasas",
    t4_sent: "In Österreich spricht man ___.", t4_qa2: "Deutsch", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Sprachvielfalt", t4_f2: "ist", t4_f3: "ein", t4_f4: "großer", t4_f5: "Schatz", t4_f6: "unseres", t4_f7: "Kontinents.",
    t4_tk1: "Viele", t4_tk2: "Menschen", t4_tk3: "in", t4_tk4: "Europa", t4_tk5: "sprechen", t4_tk6: "mehrere", t4_tk7: "Sprachen.", t4_tk8: "",
    t4_bl1: "Germanisch", t4_bl2: "Romanisch", t4_i1: "Deutsch", t4_i2: "Französisch", t4_i3: "Englisch", t4_i4: "Spanisch",
    t5_title: "Der Euro", t5_text: "Bezahlen ohne Grenzen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "In wie vielen EU-Ländern zahlt man mit Euro?", t5_qa: "Über 20", t5_qb: "Alle", t5_qc: "Nur 5", t5_qd: "Keinem",
    t5_w1: "Früher", t5_w2: "musste", t5_w3: "man", t5_w4: "an", t5_w5: "jeder", t5_w6: "Grenze", t5_w7: "Geld",
    t5_l1: "Schein", t5_r1: "Papier", t5_l2: "Münze", t5_r2: "Metall", t5_l3: "EZB", t5_r3: "Bank",
    t5_sent: "Die Rückseite der Münzen ist ___.", t5_qa2: "verschieden", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Der", t5_f2: "Euro", t5_f3: "macht", t5_f4: "den", t5_f5: "Handel", t5_f6: "viel", t5_f7: "einfacher.",
    t5_tk1: "Die", t5_tk2: "Europäische", t5_tk3: "Zentralbank", t5_tk4: "hat", t5_tk5: "ihren", t5_tk6: "Sitz", t5_tk7: "in", t5_tk8: "Frankfurt.",
    t5_bl1: "Euro", t5_bl2: "Kein Euro", t5_i1: "Italien", t5_i2: "Polen", t5_i3: "Spanien", t5_i4: "Ungarn",
    t6_title: "Berge & Seen", t6_text: "Natur in Europa.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie heißt das höchste Gebirge Europas?", t6_qa: "Die Alpen", t6_qb: "Der Harz", t6_qc: "Die Rocky Mountains", t6_qd: "Der Himalaya",
    t6_w1: "Mont", t6_w2: "Blanc", t6_w3: "ist", t6_w4: "der", t6_w5: "höchste", t6_w6: "Berg", t6_w7: "der",
    t6_l1: "Donau", t6_r1: "Schwarzes Meer", t6_l2: "Rhein", t6_r2: "Nordsee", t6_l3: "Seine", t6_r3: "Atlantik",
    t6_sent: "Der längste Fluss ist die ___.", t6_qa2: "Wolga", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Der", t6_f2: "Ladogasee", t6_f3: "ist", t6_f4: "der", t6_f5: "größte", t6_f6: "See", t6_f7: "Europas.",
    t6_tk1: "Viele", t6_tk2: "Urlauber", t6_tk3: "besuchen", t6_tk4: "die", t6_tk5: "Strände", t6_tk6: "des", t6_tk7: "Mittelmeers.", t6_tk8: "",
    t6_bl1: "Berg", t6_bl2: "Fluss", t6_i1: "Mont Blanc", t6_i2: "Donau", t6_i3: "Matterhorn", t6_i4: "Rhein",
    t7_title: "Klima", t7_text: "Von Kalt bis Warm.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wo ist es meistens am wärmsten?", t7_qa: "Im Süden (Mittelmeer)", t7_qb: "Am Nordpol", t7_qc: "In Irland", t7_qd: "In den Alpen",
    t7_w1: "Die", t7_w2: "Lage", t7_w3: "zum", t7_w4: "Meer", t7_w5: "beeinflusst", t7_w6: "das", t7_w7: "Wetter.",
    t7_l1: "Island", t7_r1: "Eisig", t7_l2: "Griechenland", t7_r2: "Heiß", t7_l3: "Finnland", t7_r3: "Dunkel",
    t7_sent: "Im Norden ist es oft ___.", t7_qa2: "kühler", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Der", t7_f2: "Golfstrom", t7_f3: "bringt", t7_f4: "mildes", t7_f5: "Wetter", t7_f6: "nach", t7_f7: "Westeuropa.",
    t7_tk1: "Klimawandel", t7_tk2: "bedroht", t7_tk3: "auch", t7_tk4: "die", t7_tk5: "Gletscher", t7_tk6: "in", t7_tk7: "den", t7_tk8: "Alpen.",
    t7_bl1: "Nass", t7_bl2: "Trocken", t7_i1: "Irland", t7_i2: "Spanien", t7_i3: "England", t7_i4: "Türkei",
    t8_title: "Europa-Check", t8_text: "Bist du ein Europäer?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was feiern wir am 9. Mai?", t8_qa: "Europatag", t8_qb: "Weihnachten", t8_qc: "Ostern", t8_qd: "Silvester",
    t8_w1: "Gemeinsame", t8_w2: "Werte", t8_w3: "verbinden", t8_w4: "die", t8_w5: "Menschen", t8_w6: "in", t8_w7: "Europa.",
    t8_l1: "Freiheit", t8_r1: "Wahl", t8_l2: "Frieden", t8_r2: "Ziel", t8_l3: "Recht", t8_r3: "Regel",
    t8_sent: "Europa wächst immer weiter ___.", t8_qa2: "zusammen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "lernen", t8_f3: "voneinander", t8_f4: "und", t8_f5: "helfen", t8_f6: "uns", t8_f7: "gegenseitig.",
    t8_tk1: "Die", t8_tk2: "europäische", t8_tk3: "Hymne", t8_tk4: "basiert", t8_tk5: "auf", t8_tk6: "Beethovens", t8_tk7: "Musik.", t8_tk8: "",
    t8_bl1: "Zusammen", t8_bl2: "Einsam", t8_i1: "Frieden", t8_i2: "Krieg", t8_i3: "Handel", t8_i4: "Streit",
  },
};

export const EUROPA_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Kontinent", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die EU", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Hauptstädte", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Sprachen", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Der Euro", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Berge & Seen", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Klima", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Europa-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const NATUR_PRO_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ökologie & Artenschutz",
    t1_title: "Nahrungskette", t1_text: "Fressen und gefressen werden.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was steht am Anfang jeder Kette?", t1_qa: "Pflanzen", t1_qb: "Wölfe", t1_qc: "Steine", t1_qd: "Menschen",
    t1_w1: "Tiere", t1_w2: "brauchen", t1_w3: "Energie", t1_w4: "aus", t1_w5: "ihrer", t1_w6: "Nahrung.", t1_w7: "",
    t1_l1: "Pflanze", t1_r1: "Produzent", t1_l2: "Reh", t1_r2: "Konsument", t1_l3: "Wolf", t1_r3: "Endglied",
    t1_sent: "Der Luchs ist ein ___.", t1_qa2: "Raubtier", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Fehlt", t1_f2: "ein", t1_f3: "Teil", t1_f4: "bricht", t1_f5: "die", t1_f6: "ganze", t1_f7: "Kette",
    t1_tk1: "Destruenten", t1_tk2: "wie", t1_tk3: "Würmer", t1_tk4: "zersetzen", t1_tk5: "die", t1_tk6: "toten", t1_tk7: "Reste.", t1_tk8: "",
    t1_bl1: "Jäger", t1_bl2: "Beute", t1_i1: "Fuchs", t1_i2: "Hase", t1_i3: "Luchs", t1_i4: "Maus",
    t2_title: "Artenschutz", t2_text: "Tiere vorm Aussterben bewahren.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welches Tier ist in Deutschland streng geschützt?", t2_qa: "Wolf", t2_qb: "Hauskatze", t2_qc: "Stubenfliege", t2_qd: "Mücke",
    t2_w1: "Zerstörung", t2_w2: "von", t2_w3: "Lebensraum", t2_w4: "ist", t2_w5: "die", t2_w6: "größte", t2_w7: "Gefahr.",
    t2_l1: "Nationalpark", t2_r1: "Schutz", t2_l2: "Zoo", t2_r2: "Zucht", t2_l3: "Wald", t2_r3: "Natur",
    t2_sent: "Die Rote Liste zeigt ___ Arten.", t2_qa2: "bedrohte", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wildtiere", t2_f2: "brauchen", t2_f3: "Ruhezonen", t2_f4: "ohne", t2_f5: "viele", t2_f6: "Menschen.", t2_f7: "",
    t2_tk1: "Wildbienen", t2_tk2: "brauchen", t2_tk3: "Blumenwiesen", t2_tk4: "um", t2_tk5: "zu", t2_tk6: "überleben.", t2_tk7: "", t2_tk8: "",
    t2_bl1: "Schutz", t2_bl2: "Gefahr", t2_i1: "Hecke", t2_i2: "Asphalt", t2_i3: "Nistkasten", t2_i4: "Gift",
    t3_title: "Klimawandel", t3_text: "Die Erde wird wärmer.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welches Gas ist ein Treibhausgas?", t3_qa: "CO2 (Kohlendioxid)", t3_qb: "Sauerstoff", t3_qc: "Edelgas", t3_qd: "Helium",
    t3_w1: "Wir", t3_w2: "müssen", t3_w3: "weniger", t3_w4: "fossile", t3_w5: "Brennstoffe", t3_w6: "verbrauchen.", t3_w7: "",
    t3_l1: "Sonne", t3_r1: "Wärme", t3_l2: "Auto", t3_r2: "Abgas", t3_l3: "Wald", t3_r3: "Speicher",
    t3_sent: "Gletscher schmelzen durch die ___.", t3_qa2: "Hitze", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Extremes", t3_f2: "Wetter", t3_f3: "tritt", t3_f4: "immer", t3_f5: "häufiger", t3_f6: "auf.", t3_f7: "",
    t3_tk1: "Bäume", t3_tk2: "pflanzen", t3_tk3: "hilft", t3_tk4: "beim", t3_tk5: "Schutz", t3_tk6: "unseres", t3_tk7: "Klimas.", t3_tk8: "",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Fahrrad", t3_i2: "Flugzeug", t3_i3: "Solar", t3_i4: "Kohle",
    t4_title: "Müllvermeidung", t4_text: "Plastik in den Weltmeeren.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie lange braucht Plastik zum Verrotten?", t4_qa: "Hunderte Jahre", t4_qb: "Zwei Tage", t4_qc: "Eine Woche", t4_qd: "Gar nicht",
    t4_w1: "Verwende", t4_w2: "lieber", t4_w3: "Mehrweg", t4_w4: "statt", t4_w5: "Einweg.", t4_w6: "", t4_w7: "",
    t4_l1: "Plastik", t4_r1: "Müll", t4_l2: "Glas", t4_r2: "Recycling", t4_l3: "Papier", t4_r3: "Biomüll",
    t4_sent: "Mikroplastik landet in den ___.", t4_qa2: "Fischen", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Tiere", t4_f2: "verwechseln", t4_f3: "Müll", t4_f4: "oft", t4_f5: "mit", t4_f6: "Nahrung.", t4_f7: "",
    t4_tk1: "Zero", t4_tk2: "Waste", t4_tk3: "bedeutet", t4_tk4: "so", t4_tk5: "wenig", t4_tk6: "Müll", t4_tk7: "wie", t4_tk8: "möglich.",
    t4_bl1: "Mehrweg", t4_bl2: "Einweg", t4_i1: "Stoffbeutel", t4_i2: "Tüte", t4_i3: "Flasche", t4_i4: "Becher",
    t5_title: "Bodenkunde", t5_text: "Die Haut der Erde.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wer macht den Boden fruchtbar?", t5_qa: "Regenwürmer", t5_qb: "Vögel", t5_qc: "Autos", t5_qd: "Steine",
    t5_w1: "Ohne", t5_w2: "gesunden", t5_w3: "Boden", t5_w4: "wachsen", t5_w5: "keine", t5_w6: "Pflanzen.", t5_w7: "",
    t5_l1: "Lehm", t5_r1: "Fest", t5_l2: "Sand", t5_r2: "Locker", t5_l3: "Ton", t5_r3: "Dicht",
    t5_sent: "Aus Laub wird wertvoller ___.", t5_qa2: "Humus", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Spritzmittel", t5_f2: "können", t5_f3: "den", t5_f4: "Boden", t5_f5: "und", t5_f6: "das", t5_f7: "Wasser",
    t5_tk1: "Bodenorganismen", t5_tk2: "arbeiten", t5_tk3: "Tag", t5_tk4: "und", t5_tk5: "Nacht", t5_tk6: "für", t5_tk7: "uns.", t5_tk8: "",
    t5_bl1: "Natur", t5_bl2: "Bau", t5_i1: "Wurm", t5_i2: "Beton", t5_i3: "Laub", t5_i4: "Steine",
    t6_title: "Energiesparen", t6_text: "Jeder Beitrag zählt.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was spart am meisten Energie?", t6_qa: "Heizung runterdrehen", t6_qb: "Fernsehen", t6_qc: "Licht anlassen", t6_qd: "Singen",
    t6_w1: "Schalte", t6_w2: "Geräte", t6_w3: "ganz", t6_w4: "aus", t6_w5: "statt", t6_w6: "Stand-by.", t6_w7: "",
    t6_l1: "Heizung", t6_r1: "Wärme", t6_l2: "Licht", t6_r2: "Strom", t6_l3: "Wasser", t6_r3: "Kostbar",
    t6_sent: "Stoßlüften ist besser als ___.", t6_qa2: "Kippen", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Isolierung", t6_f2: "an", t6_f3: "Häusern", t6_f4: "hält", t6_f5: "die", t6_f6: "Wärme", t6_f7: "drinnen.",
    t6_tk1: "Energie", t6_tk2: "die", t6_tk3: "wir", t6_tk4: "nicht", t6_tk5: "verbrauchen", t6_tk6: "muss", t6_tk7: "nicht", t6_tk8: "erzeugt",
    t6_bl1: "Sparsam", t6_bl2: "Verschwendung", t6_i1: "LED", t6_i2: "Altbau", t6_i3: "Duschen", t6_i4: "Vollbad",
    t7_title: "Heimische Tiere", t7_text: "Schutz vor der Haustür.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was hilft Vögeln im Winter?", t7_qa: "Futterhäuschen", t7_qb: "Wasser", t7_qc: "Ein Schal", t7_qd: "Warme Milch",
    t7_w1: "Insektenhotels", t7_w2: "bieten", t7_w3: "vielen", t7_w4: "nützlichen", t7_w5: "Tierchen", t7_w6: "Schutz.", t7_w7: "",
    t7_l1: "Meise", t7_r1: "Kern", t7_l2: "Eichhörnchen", t7_r2: "Nuss", t7_l3: "Igel", t7_r3: "Laub",
    t7_sent: "Der Igel braucht einen ___.", t7_qa2: "Laubhaufen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Naturnahe", t7_f2: "Gärten", t7_f3: "sind", t7_f4: "wichtig", t7_f5: "für", t7_f6: "die", t7_f7: "Artenvielfalt.",
    t7_tk1: "Nistkästen", t7_tk2: "sollten", t7_tk3: "im", t7_tk4: "Herbst", t7_tk5: "gereinigt", t7_tk6: "werden.", t7_tk7: "", t7_tk8: "",
    t7_bl1: "Winterfest", t7_bl2: "Nicht fest", t7_i1: "Laub", t7_i2: "Eis", t7_i3: "Igel", t7_i4: "Mücke",
    t8_title: "Öko-Check", t8_text: "Bist du ein Umweltschützer?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was bedeutet Nachhaltigkeit?", t8_qa: "An morgen denken", t8_qb: "Alles jetzt verbrauchen", t8_qc: "Egal", t8_qd: "Sparen am Essen",
    t8_w1: "Wir", t8_w2: "tragen", t8_w3: "Verantwortung", t8_w4: "für", t8_w5: "die", t8_w6: "kommenden", t8_w7: "Generationen.",
    t8_l1: "Reduzieren", t8_r1: "Weniger", t8_l2: "Wiederverwenden", t8_r2: "Nochmal", t8_l3: "Recyceln", t8_r3: "Neu",
    t8_sent: "Die Erde ist unser einziger ___.", t8_qa2: "Zuhause", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Jeder", t8_f2: "kleine", t8_f3: "Schritt", t8_f4: "hilft", t8_f5: "der", t8_f6: "Natur.", t8_f7: "",
    t8_tk1: "Zusammen", t8_tk2: "können", t8_tk3: "wir", t8_tk4: "die", t8_tk5: "Welt", t8_tk6: "ein", t8_tk7: "Stück", t8_tk8: "besser",
    t8_bl1: "Umwelt", t8_bl2: "Zerstörung", t8_i1: "Wald", t8_i2: "Abgas", t8_i3: "Blume", t8_i4: "Müll",
  },
};

export const NATUR_PRO_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Nahrungskette", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Artenschutz", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Klimawandel", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Müllvermeidung", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Bodenkunde", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Energiesparen", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Heimische Tiere", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Öko-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const FINALE_K4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K4 Abschluss-Diplom",
    t1_title: "Fahrrad-Review", t1_text: "Bist du prüfungsreif?", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer darf zuerst?", t1_qa: "Rechts vor Links", t1_qb: "Ich", t1_qc: "LKW", t1_qd: "Hunde",
    t1_w1: "Helm", t1_w2: "auf", t1_w3: "und", t1_w4: "los", t1_w5: "geht", t1_w6: "die", t1_w7: "Fahrt!",
    t1_l1: "Stopp", t1_r1: "Halt", t1_l2: "Vorfahrt", t1_r2: "Gelb", t1_l3: "Einbahn", t1_r3: "Pfeil",
    t1_sent: "Sicherheit geht immer ___.", t1_qa2: "vor", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "kennen", t1_f3: "jetzt", t1_f4: "alle", t1_f5: "wichtigen", t1_f6: "Regeln.", t1_f7: "",
    t1_tk1: "Vorsicht", t1_tk2: "im", t1_tk3: "Verkehr", t1_tk4: "schützt", t1_tk5: "Leben.", t1_tk6: "undefined", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Schild", t1_bl2: "Teil", t1_i1: "Stopp", t1_i2: "Bremse", t1_i3: "Radweg", t1_i4: "Licht",
    t2_title: "Weltraum-Review", t2_text: "Sonne, Mond és Sterne.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welcher Planet hat Ringe?", t2_qa: "Saturn", t2_qb: "Mars", t2_qc: "Merkur", t2_qd: "Erde",
    t2_w1: "Das", t2_w2: "Weltall", t2_w3: "ist", t2_w4: "unendlich", t2_w5: "groß", t2_w6: "und", t2_w7: "spannend.",
    t2_l1: "Erde", t2_r1: "Blau", t2_l2: "Mond", t2_r2: "Grau", t2_l3: "Mars", t2_r3: "Rot",
    t2_sent: "Die Sonne ist ein ___.", t2_qa2: "Stern", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wir", t2_f2: "haben", t2_f3: "viel", t2_f4: "über", t2_f5: "die", t2_f6: "Planeten", t2_f7: "gelernt.",
    t2_tk1: "Astronomie", t2_tk2: "ist", t2_tk3: "die", t2_tk4: "Wissenschaft", t2_tk5: "der", t2_tk6: "Sterne.", t2_tk7: "", t2_tk8: "",
    t2_bl1: "Gas", t2_bl2: "Stein", t2_i1: "Jupiter", t2_i2: "Erde", t2_i3: "Saturn", t2_i4: "Mars",
    t3_title: "Deutschland-Check", t3_text: "16 Länder, ein Staat.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wie heißt die Hauptstadt?", t3_qa: "Berlin", t3_qb: "München", t3_qc: "Hamburg", t3_qd: "Bonn",
    t3_w1: "Deutschland", t3_w2: "hat", t3_w3: "viele", t3_w4: "schöne", t3_w5: "Städte", t3_w6: "und", t3_w7: "Flüsse.",
    t3_l1: "Rhein", t3_r1: "Fluss", t3_l2: "Donau", t3_r2: "Fluss", t3_l3: "Zugspitze", t3_r3: "Berg",
    t3_sent: "Bayern liegt im ___.", t3_qa2: "Süden", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Jedes", t3_f2: "Land", t3_f3: "hat", t3_f4: "seine", t3_f5: "besonderen", t3_f6: "Sehenswürdigkeiten.", t3_f7: "",
    t3_tk1: "Demokratie", t3_tk2: "wird", t3_tk3: "in", t3_tk4: "allen", t3_tk5: "Ländern", t3_tk6: "gelebt.", t3_tk7: "", t3_tk8: "",
    t3_bl1: "Norden", t3_bl2: "Süden", t3_i1: "Kiel", t3_i2: "München", t3_i3: "Hamburg", t3_i4: "Stuttgart",
    t4_title: "Politik-Review", t4_text: "Gemeinde és Staat.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wer wählt den Gemeinderat?", t4_qa: "Bürger", t4_qb: "Kinder", t4_qc: "Hunde", t4_qd: "Keiner",
    t4_w1: "Politik", t4_w2: "betrifft", t4_w3: "unser", t4_w4: "tägliches", t4_w5: "Leben", t4_w6: "direkt.", t4_w7: "",
    t4_l1: "Wahl", t4_r1: "Zettel", t4_l2: "Rat", t4_r2: "Leute", t4_l3: "Amt", t4_r3: "Haus",
    t4_sent: "Wir leben in einer ___.", t4_qa2: "Demokratie", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Mitbestimmung", t4_f2: "ist", t4_f3: "ein", t4_f4: "wichtiges", t4_f5: "Recht.", t4_f6: "", t4_f7: "",
    t4_tk1: "Zusammen", t4_tk2: "entscheiden", t4_tk3: "wir", t4_tk4: "über", t4_tk5: "unsere", t4_tk6: "Zukunft.", t4_tk7: "", t4_tk8: "",
    t4_bl1: "Amt", t4_bl2: "Person", t4_i1: "Rathaus", t4_i2: "Kanzler", t4_i3: "Schule", t4_i4: "Bürger",
    t5_title: "Technik-Review", t5_text: "Strom és Energie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was leitet Strom?", t5_qa: "Metall", t5_qb: "Holz", t5_qc: "Plastik", t5_qd: "Luft",
    t5_w1: "Elektrische", t5_w2: "Energie", t5_w3: "ist", t5_w4: "aus", t5_w5: "dem", t5_w6: "Alltag", t5_w7: "nicht",
    t5_l1: "Reihe", t5_r1: "Kette", t5_l2: "Parallel", t5_r2: "Zweig", t5_l3: "Leiter", t5_r3: "Kupfer",
    t5_sent: "Strom sparen schont die ___.", t5_qa2: "Umwelt", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Sicherheit", t5_f2: "im", t5_f3: "Umgang", t5_f4: "mit", t5_f5: "Strom", t5_f6: "ist", t5_f7: "Pflicht.",
    t5_tk1: "Energie", t5_tk2: "kommt", t5_tk3: "aus", t5_tk4: "vielen", t5_tk5: "verschiedenen", t5_tk6: "Quellen.", t5_tk7: "", t5_tk8: "",
    t5_bl1: "Öko", t5_bl2: "Fossil", t5_i1: "Wind", t5_i2: "Kohle", t5_i3: "Sonne", t5_i4: "Gas",
    t6_title: "Sexualkunde-Check", t6_text: "Körper és Pubertät.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Sind Gefühle normal?", t6_qa: "Ja", t6_qb: "Nein", t6_qc: "Nur im TV", t6_qd: "Egal",
    t6_w1: "Respekt", t6_w2: "ist", t6_w3: "die", t6_w4: "wichtigste", t6_w5: "Regel", t6_w6: "im", t6_w7: "Umgang.",
    t6_l1: "Körper", t6_r1: "Neu", t6_l2: "Wachstum", t6_r2: "Größer", t6_l3: "Gefühl", t6_r3: "Echt",
    t6_sent: "Ich bin ___.", t6_qa2: "einzigartig", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Wir", t6_f2: "haben", t6_f3: "viel", t6_f4: "über", t6_f5: "uns", t6_f6: "selbst", t6_f7: "gelernt.",
    t6_tk1: "Pubertät", t6_tk2: "gehört", t6_tk3: "zum", t6_tk4: "Erwachsenwerden", t6_tk5: "dazu.", t6_tk6: "undefined", t6_tk7: "", t6_tk8: "",
    t6_bl1: "Ich", t6_bl2: "Wir", t6_i1: "Körper", t6_i2: "Seele", t6_i3: "Herz", t6_i4: "Haut",
    t7_title: "Europa-Review", t7_text: "Nachbarn és EU.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was ist der Euro?", t7_qa: "Währung", t7_qb: "Ein Berg", t7_qc: "Ein Fluss", t7_qd: "Ein Land",
    t7_w1: "In", t7_w2: "Europa", t7_w3: "leben", t7_w4: "viele", t7_w5: "verschiedene", t7_w6: "Völker.", t7_w7: "",
    t7_l1: "Paris", t7_r1: "Stadt", t7_l2: "Rom", t7_r2: "Stadt", t7_l3: "Berlin", t7_r3: "Stadt",
    t7_sent: "Europa ist ein ___.", t7_qa2: "Kontinent", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Offene", t7_f2: "Grenzen", t7_f3: "machen", t7_f4: "das", t7_f5: "Leben", t7_f6: "einfacher.", t7_f7: "",
    t7_tk1: "Vielfalt", t7_tk2: "macht", t7_tk3: "unseren", t7_tk4: "Kontinent", t7_tk5: "so", t7_tk6: "interessant.", t7_tk7: "", t7_tk8: "",
    t7_bl1: "EU", t7_bl2: "Euro", t7_i1: "Union", t7_i2: "Geld", t7_i3: "Frieden", t7_i4: "Handel",
    t8_title: "Experten-Diplom", t8_text: "Sachkunde-Profi!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Bist du nun bereit?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Fast", t8_qd: "Egal",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "zu", t8_w4: "deinem", t8_w5: "Sachkunde-Diplom!", t8_w6: "", t8_w7: "",
    t8_l1: "Wissen", t8_r1: "Gehirn", t8_l2: "Können", t8_r2: "Hand", t8_l3: "Machen", t8_r3: "Tat",
    t8_sent: "Ich habe die Grundschule ___.", t8_qa2: "geschafft", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Du", t8_f2: "hast", t8_f3: "super", t8_f4: "gelernt", t8_f5: "und", t8_f6: "gearbeitet.", t8_f7: "",
    t8_tk1: "Viel", t8_tk2: "Spaß", t8_tk3: "in", t8_tk4: "der", t8_tk5: "nächsten", t8_tk6: "Klasse!", t8_tk7: "", t8_tk8: "",
    t8_bl1: "Start", t8_bl2: "Ziel", t8_i1: "Anfang", t8_i2: "Diplom", t8_i3: "Erster", t8_i4: "Ende",
  },
};

export const FINALE_K4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Fahrrad-Review", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Weltraum-Review", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Deutschland-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Politik-Review", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Technik-Review", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sexualkunde-Check", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Europa-Review", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Experten-Diplom", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

