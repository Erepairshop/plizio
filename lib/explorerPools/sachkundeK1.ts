// lib/explorerPools/sachkundeK1.ts

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — KÖRPER & SINNE
// ═══════════════════════════════════════════════════════════════════════════

export const KOERPER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körper & Sinne",
    t1_title: "Körperteile",
    t1_text: "Unser Körper hat viele Teile: Kopf, Arme, Beine und mehr.",
    t1_inst: "Ordne die Wörter zu einem Satz über den Körper:",
    t1_h1: "Beginne mit 'Mein'.",
    t1_h2: "Das Wort 'Kopf' kommt nach 'Mein'.",
    t1_q: "Was gehört zum Kopf?",
    t1_qa: "Haare", t1_qb: "Fuß", t1_qc: "Knie", t1_qd: "Ellbogen",
    t1_w1: "Mein", t1_w2: "Kopf", t1_w3: "sitzt", t1_w4: "oben", t1_w5: "auf", t1_w6: "dem", t1_w7: "Hals.",

    t2_title: "Die fünf Sinne",
    t2_text: "Wir haben fünf Sinne: Sehen, Hören, Riechen, Schmecken und Fühlen.",
    t2_inst: "Verbinde das Sinnesorgan mit der passenden Tätigkeit:",
    t2_h1: "Auge -> Sehen.",
    t2_h2: "Ohr -> Hören.",
    t2_q: "Mit welchem Organ hörst du Musik?",
    t2_qa: "Ohr", t2_qb: "Nase", t2_qc: "Auge", t2_qd: "Mund",
    t2_l1: "Auge", t2_r1: "Sehen",
    t2_l2: "Ohr", t2_r2: "Hören",
    t2_l3: "Nase", t2_r3: "Riechen",

    t3_title: "Das Auge",
    t3_text: "Mit den Augen können wir Farben und Formen sehen.",
    t3_inst: "Fülle die Lücke aus:",
    t3_h1: "Was machen wir mit den Augen?",
    t3_h2: "Wir 'sehen' damit.",
    t3_q: "Welche Farbe haben deine Augen?",
    t3_qa: "Blau/Braun/Grün", t3_qb: "Rund", t3_qc: "Klein", t3_qd: "Laut",
    t3_sent: "Ich kann mit meinen Augen alles ___.",
    t3_qa2: "sehen", t3_qb2: "hören", t3_qc2: "riechen", t3_qd2: "essen",

    t4_title: "Hände waschen",
    t4_text: "Händewaschen ist wichtig, um gesund zu bleiben.",
    t4_inst: "Baue die Anleitung zum Händewaschen zusammen:",
    t4_h1: "Zuerst Wasser marsch!",
    t4_h2: "Vergiss die Seife nicht.",
    t4_q: "Wann waschen wir die Hände?",
    t4_qa: "Vor dem Essen", t4_qb: "Beim Schlafen", t4_qc: "Im Auto", t4_qd: "Nie",
    t4_f1: "Hände nass machen,", t4_f2: "einseifen,", t4_f3: "abspülen", t4_f4: "und abtrocknen.",

    t5_title: "Gesunde Zähne",
    t5_text: "Wir putzen unsere Zähne morgens und abends.",
    t5_inst: "Markiere das Wort für die Zahnpflege:",
    t5_h1: "Suche nach 'Zahnbürste'.",
    t5_h2: "Es ist ein langes Wort.",
    t5_q: "Wie oft putzen wir Zähne?",
    t5_qa: "2-mal täglich", t5_qb: "1-mal im Monat", t5_qc: "Jedes Jahr", t5_qd: "Nie",
    t5_tk1: "Ich", t5_tk2: "benutze", t5_tk3: "meine", t5_tk4: "neue", t5_tk5: "Zahnbürste", t5_tk6: "jeden", t5_tk7: "Abend.",

    t6_title: "Hygiene Sorter",
    t6_text: "Was brauchen wir für die Sauberkeit?",
    t6_inst: "Sortiere die Dinge:",
    t6_h1: "Was hilft beim Waschen?",
    t6_h2: "Seife vs. Stein.",
    t6_q: "Was ist gut für die Haut?",
    t6_qa: "Seife", t6_qb: "Dreck", t6_qc: "Sand", t6_qd: "Farbe",
    t6_bl1: "Hygiene", t6_bl2: "Keine Hygiene",
    t6_i1: "Seife", t6_i2: "Dreck",
    t6_i3: "Zahnpasta", t6_i4: "Müll",

    t7_title: "Hören",
    t7_text: "Unsere Ohren hören leise und laute Geräusche.",
    t7_inst: "Wähle das passende Wort:",
    t7_h1: "Musik kann man...",
    t7_h2: "Benutze 'hören'.",
    t7_q: "Welches Tier hört sehr gut?",
    t7_qa: "Hase", t7_qb: "Fisch", t7_qc: "Wurm", t7_qd: "Fliege",
    t7_sent: "Ich kann die laute Musik ___.",
    t7_qa2: "hören", t7_qb2: "schmecken", t7_qc2: "fühlen", t7_qd2: "sehen",

    t8_title: "Schmecken",
    t8_text: "Die Zunge erkennt süß, sauer, salzig und bitter.",
    t8_inst: "Bringe die Wörter in die richtige Reihenfolge:",
    t8_h1: "Beginne mit 'Zucker'.",
    t8_h2: "Zucker schmeckt 'süß'.",
    t8_q: "Was schmeckt sauer?",
    t8_qa: "Zitrone", t8_qb: "Honig", t8_qc: "Brot", t8_qd: "Milch",
    t8_w1: "Zucker", t8_w2: "schmeckt", t8_w3: "immer", t8_w4: "sehr", t8_w5: "süß", t8_w6: "und", t8_w7: "lecker.",
  },
};

export const KOERPER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Kopf", color: "#FF6B9D" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Sinne", color: "#FF6B9D" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Auge", color: "#FF6B9D" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hygiene", color: "#FF6B9D" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Zahn", color: "#FF6B9D" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Seife", color: "#FF6B9D" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Ohr", color: "#FF6B9D" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "süß", color: "#FF6B9D" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — HAUSTIERE & WILDE TIERE
// ═══════════════════════════════════════════════════════════════════════════

export const TIERE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Haustiere & Wilde Tiere",
    t1_title: "Mein Hund",
    t1_text: "Hunde sind treue Begleiter und brauchen viel Pflege.",
    t1_inst: "Bringe die Wörter in die richtige Reihenfolge:",
    t1_h1: "Beginne mit 'Der'.",
    t1_h2: "Hunde 'bellen'.",
    t1_q: "Wo schläft ein Hund?",
    t1_qa: "Hundehütte", t1_qb: "Baum", t1_qc: "Nest", t1_qd: "Stall",
    t1_w1: "Der", t1_w2: "Hund", t1_w3: "bellt", t1_w4: "laut", t1_w5: "im", t1_w6: "Garten.",

    t2_title: "Katzenpflege",
    t2_text: "Katzen fressen gerne Fisch und trinken Wasser.",
    t2_inst: "Verbinde das Tier mit seiner Nahrung:",
    t2_h1: "Katze -> Katzenfutter.",
    t2_h2: "Hase -> Karotte.",
    t2_q: "Was trinkt eine Katze am liebsten?",
    t2_qa: "Wasser", t2_qb: "Saft", t2_qc: "Kaffee", t2_qd: "Limo",
    t2_l1: "Katze", t2_r1: "Fisch",
    t2_l2: "Hund", t2_r2: "Knochen",
    t2_l3: "Hase", t2_r3: "Karotte",

    t3_title: "Wilde Tiere: Löwe",
    t3_text: "Der Löwe lebt in Afrika und wird 'König der Tiere' genannt.",
    t3_inst: "Vervollständige den Satz:",
    t3_h1: "Wo lebt der Löwe?",
    t3_h2: "Er lebt in 'Afrika'.",
    t3_q: "Wie sieht die Mähne eines Löwen aus?",
    t3_qa: "Groß und haarig", t3_qb: "Blau", t3_qc: "Glatt", t3_qd: "Gar keine",
    t3_sent: "Der Löwe lebt in ___.",
    t3_qa2: "Afrika", t3_qb2: "Europa", t3_qc2: "Eis", t3_qd2: "Wasser",

    t4_title: "Elefanten",
    t4_text: "Elefanten sind die größten Landtiere und haben einen Rüssel.",
    t4_inst: "Baue den Satz über Elefanten:",
    t4_h1: "Sie sind sehr...",
    t4_h2: "Benutze 'schwer'.",
    t4_q: "Was hat ein Elefant?",
    t4_qa: "Rüssel", t4_qb: "Flügel", t4_qc: "Federn", t4_qd: "Flossen",
    t4_f1: "Elefanten", t4_f2: "sind groß", t4_f3: "und", t4_f4: "sehr schwer.",

    t5_title: "Tierstimmen",
    t5_text: "Vögel zwitschern, Kühe muhen und Schafe mähen.",
    t5_inst: "Markiere das Geräusch des Vogels:",
    t5_h1: "Suche nach 'zwitschert'.",
    t5_h2: "Es fängt mit 'z' an.",
    t5_q: "Was macht die Kuh?",
    t5_qa: "muhen", t5_qb: "bellen", t5_qc: "wiehern", t5_qd: "miauen",
    t5_tk1: "Der", t5_tk2: "kleine", t5_tk3: "Vogel", t5_tk4: "im", t5_tk5: "Baum", t5_tk6: "zwitschert", t5_tk7: "fröhlich.",

    t6_title: "Tiere Sortieren",
    t6_text: "Es gibt Haustiere und wilde Tiere.",
    t6_inst: "Sortiere die Tiere in die richtigen Gruppen:",
    t6_h1: "Wer wohnt im Haus?",
    t6_h2: "Hund vs. Löwe.",
    t6_q: "Welches Tier ist ein Haustier?",
    t6_qa: "Hamster", t6_qb: "Tiger", t6_qc: "Giraffe", t6_qd: "Hai",
    t6_bl1: "Haustiere", t6_bl2: "Wilde Tiere",
    t6_i1: "Katze", t6_i2: "Elefant",
    t6_i3: "Goldfisch", t6_i4: "Bär",

    t7_title: "Der Tiger",
    t7_text: "Tiger haben orangefarbenes Fell mit schwarzen Streifen.",
    t7_inst: "Wähle das richtige Wort:",
    t7_h1: "Was hat der Tiger?",
    t7_h2: "Benutze 'Streifen'.",
    t7_q: "Wo lebt der Tiger?",
    t7_qa: "Dschungel", t7_qb: "Bauernhof", t7_qc: "Wüste", t7_qd: "Stadt",
    t7_sent: "Der Tiger hat schwarze ___.",
    t7_qa2: "Streifen", t7_qb2: "Punkte", t7_qc2: "Federn", t7_qd2: "Flügel",

    t8_title: "Tiere im Wald",
    t8_text: "Im Wald leben Rehe, Füchse und Wildschweine.",
    t8_inst: "Bringe die Wörter in Ordnung:",
    t8_h1: "Beginne mit 'Rehe'.",
    t8_h2: "Sie leben im 'Wald'.",
    t8_q: "Welche Farbe hat ein Fuchs?",
    t8_qa: "Rot", t8_qb: "Grün", t8_qc: "Blau", t8_qd: "Lila",
    t8_w1: "Rehe", t8_w2: "laufen", t8_w3: "schnell", t8_w4: "durch", t8_w5: "den", t8_w6: "grünen", t8_w7: "Wald.",
  },
};

export const TIERE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Hund", color: "#4ECDC4" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Katze", color: "#4ECDC4" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Löwe", color: "#4ECDC4" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Rüssel", color: "#4ECDC4" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Vogel", color: "#4ECDC4" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sort", color: "#4ECDC4" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Tiger", color: "#4ECDC4" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wald", color: "#4ECDC4" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — JAHRESZEITEN & NATUR
// ═══════════════════════════════════════════════════════════════════════════

export const NATUR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Jahreszeiten & Natur",
    t1_title: "Vier Jahreszeiten",
    t1_text: "Das Jahr hat vier Jahreszeiten: Frühling, Sommer, Herbst und Winter.",
    t1_inst: "Ordne die Jahreszeiten nach ihrem Ablauf:",
    t1_h1: "Beginne mit dem Frühling.",
    t1_h2: "Nach dem Sommer kommt der Herbst.",
    t1_q: "In welcher Jahreszeit schneit es?",
    t1_qa: "Winter", t1_qb: "Sommer", t1_qc: "Frühling", t1_qd: "Herbst",
    t1_w1: "Frühling", t1_w2: "Sommer", t1_w3: "Herbst", t1_w4: "und", t1_w5: "Winter", t1_w6: "bilden", t1_w7: "das", t1_w8: "Jahr.",

    t2_title: "Bäume",
    t2_text: "Bäume haben Wurzeln, einen Stamm, Äste und Blätter.",
    t2_inst: "Verbinde den Baumteil mit seiner Lage:",
    t2_h1: "Wurzel -> Unter der Erde.",
    t2_h2: "Krone -> Oben.",
    t2_q: "Was verlieren viele Bäume im Herbst?",
    t2_qa: "Blätter", t2_qb: "Wurzeln", t2_qc: "Stamm", t2_qd: "Äste",
    t2_l1: "Wurzel", t2_r1: "Unter der Erde",
    t2_l2: "Stamm", t2_r2: "In der Mitte",
    t2_l3: "Krone", t2_r3: "Ganz oben",

    t3_title: "Frühling",
    t3_text: "Im Frühling werden die Tage wärmer und die Blumen blühen.",
    t3_inst: "Vervollständige den Frühlingssatz:",
    t3_h1: "Was blüht im Frühling?",
    t3_h2: "Benutze 'Blumen'.",
    t3_q: "Welcher Vogel kommt im Frühling zurück?",
    t3_qa: "Storch", t3_qb: "Pinguin", t3_qc: "Eule", t3_qd: "Adler",
    t3_sent: "Im Frühling blühen die ___.",
    t3_qa2: "Blumen", t3_qb2: "Steine", t3_qc2: "Wolken", t3_qd2: "Autos",

    t4_title: "Sommer",
    t4_text: "Der Sommer ist die heißeste Jahreszeit. Wir gehen schwimmen.",
    t4_inst: "Baue den Sommersatz:",
    t4_h1: "Die Sonne...",
    t4_h2: "Benutze 'scheint'.",
    t4_q: "Was brauchen wir im Sommer?",
    t4_qa: "Sonnencreme", t4_qb: "Schlitten", t4_qc: "Regenschirm", t4_qd: "Handschuhe",
    t4_f1: "Im Sommer", t4_f2: "scheint die", t4_f3: "Sonne sehr", t4_f4: "heiß.",

    t5_title: "Laubbaum und Nadelbaum",
    t5_text: "Laubbäume haben Blätter, Nadelbäume haben Nadeln.",
    t5_inst: "Markiere den Namen des Nadelbaums:",
    t5_h1: "Suche nach 'Tanne'.",
    t5_h2: "Tannen haben Nadeln.",
    t5_q: "Welcher Baum hat Nadeln?",
    t5_qa: "Tanne", t5_qb: "Eiche", t5_qc: "Buche", t5_qd: "Birke",
    t5_tk1: "Die", t5_tk2: "grüne", t5_tk3: "Tanne", t5_tk4: "sticht", t5_tk5: "an", t5_tk6: "den", t5_tk7: "Fingern.",

    t6_title: "Natur Sorter",
    t6_text: "Unterscheide zwischen Pflanzen und Tieren.",
    t6_inst: "Sortiere die Naturdinge:",
    t6_h1: "Was wächst im Boden?",
    t6_h2: "Blume vs. Hase.",
    t6_q: "Was ist eine Pflanze?",
    t6_qa: "Gras", t6_qb: "Hund", t6_qc: "Katze", t6_qd: "Vogel",
    t6_bl1: "Pflanzen", t6_bl2: "Tiere",
    t6_i1: "Baum", t6_i2: "Reh",
    t6_i3: "Rose", t6_i4: "Fuchs",

    t7_title: "Der Herbst",
    t7_text: "Im Herbst verfärben sich die Blätter und fallen ab.",
    t7_inst: "Ergänze das Wort:",
    t7_h1: "Was machen die Blätter?",
    t7_h2: "Sie werden 'bunt'.",
    t7_q: "Was kann man im Herbst steigen lassen?",
    t7_qa: "Drachen", t7_qb: "Fahrrad", t7_qc: "Auto", t7_qd: "Haus",
    t7_sent: "Im Herbst werden die Blätter ___.",
    t7_qa2: "bunt", t7_qb2: "blau", t7_qc2: "schwarz", t7_qd2: "weiß",

    t8_title: "Winterruhe",
    t8_text: "Viele Tiere schlafen im Winter, um Energie zu sparen.",
    t8_inst: "Ordne den Satz zum Winterschlaf:",
    t8_h1: "Beginne mit 'Der'.",
    t8_h2: "Der Igel 'schläft'.",
    t8_q: "Wer hält Winterschlaf?",
    t8_qa: "Igel", t8_qb: "Hund", t8_qc: "Pferd", t8_qd: "Vogel",
    t8_w1: "Der", t8_w2: "kleine", t8_w3: "Igel", t8_w4: "schläft", t8_w5: "tief", t8_w6: "im", t8_w7: "Laubhaufen.",
  },
};

export const NATUR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Jahr", color: "#95E1D3" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Baum", color: "#95E1D3" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Blüte", color: "#95E1D3" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Sonne", color: "#95E1D3" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Tanne", color: "#95E1D3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sort", color: "#95E1D3" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Bunt", color: "#95E1D3" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Igel", color: "#95E1D3" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — WETTER & KALENDER
// ═══════════════════════════════════════════════════════════════════════════

export const WETTER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wetter & Kalender",
    t1_title: "Das Wetter",
    t1_text: "Die Sonne scheint, es regnet, schneit oder ist windig.",
    t1_inst: "Ordne die Wetterwörter richtig zu:",
    t1_h1: "Sonne -> warm.",
    t1_h2: "Regen -> nass.",
    t1_q: "Was brauchst du bei Regen?",
    t1_qa: "Regenschirm", t1_qb: "Sonnenbrille", t1_qc: "Schlittschuh", t1_qd: "Badehose",
    t1_w1: "Heute", t1_w2: "regnet", t1_w3: "es", t1_w4: "sehr", t1_w5: "doll", t1_w6: "vom", t1_w7: "Himmel.",

    t2_title: "Wochentage",
    t2_text: "Eine Woche hat sieben Tage: Montag bis Sonntag.",
    t2_inst: "Verbinde den Tag mit seiner Position:",
    t2_h1: "Montag -> 1. Tag.",
    t2_h2: "Sonntag -> Letzter Tag.",
    t2_q: "Welcher Tag kommt nach Montag?",
    t2_qa: "Dienstag", t2_qb: "Mittwoch", t2_qc: "Freitag", t2_qd: "Samstag",
    t2_l1: "Montag", t2_r1: "1. Tag",
    t2_l2: "Mittwoch", t2_r2: "Mitte",
    t2_l3: "Sonntag", t2_r3: "7. Tag",

    t3_title: "Der Regen",
    t3_text: "Regen kommt aus den Wolken und ist wichtig für die Pflanzen.",
    t3_inst: "Fülle die Lücke aus:",
    t3_h1: "Woher kommt der Regen?",
    t3_h2: "Er kommt aus den 'Wolken'.",
    t3_q: "Was bildest sich am Boden nach dem Regen?",
    t3_qa: "Pfützen", t3_qb: "Feuer", t3_qc: "Berge", t3_qd: "Häuser",
    t3_sent: "Regen fällt aus den ___.",
    t3_qa2: "Wolken", t3_qb2: "Sonnen", t3_qc2: "Steinen", t3_qd2: "Bäumen",

    t4_title: "Monate",
    t4_text: "Ein Jahr hat zwölf Monate, von Januar bis Dezember.",
    t4_inst: "Baue den Satz über das Jahr:",
    t4_h1: "Zwölf Monate...",
    t4_h2: "Ein Jahr hat...",
    t4_q: "Welcher Monat ist der erste im Jahr?",
    t4_qa: "Januar", t4_qb: "Juli", t4_qc: "Mai", t4_qd: "Oktober",
    t4_f1: "Ein Jahr", t4_f2: "hat genau", t4_f3: "zwölf", t4_f4: "Monate.",

    t5_title: "Schnee",
    t5_text: "Schnee besteht aus gefrorenem Wasser und ist kalt.",
    t5_inst: "Markiere das Wort für Winterwetter:",
    t5_h1: "Suche nach 'Schneeflocken'.",
    t5_h2: "Es sind weiße Flocken.",
    t5_q: "Was kann man aus Schnee bauen?",
    t5_qa: "Schneemann", t5_qb: "Sandburg", t5_qc: "Auto", t5_qd: "Baum",
    t5_tk1: "Überall", t5_tk2: "fallen", t5_tk3: "leise", t5_tk4: "die", t5_tk5: "weißen", t5_tk6: "Schneeflocken", t5_tk7: "herunter.",

    t6_title: "Kalender Sorter",
    t6_text: "Was gehört zur Woche, was zum Jahr?",
    t6_inst: "Sortiere die Begriffe:",
    t6_h1: "Tag oder Monat?",
    t6_h2: "Montag (Tag) vs. Januar (Monat).",
    t6_q: "Was ist ein Wochentag?",
    t6_qa: "Freitag", t6_qb: "März", t6_qc: "Sommer", t6_qd: "Jahr",
    t6_bl1: "Wochentage", t6_bl2: "Monate",
    t6_i1: "Dienstag", t6_i2: "April",
    t6_i3: "Samstag", t6_i4: "August",

    t7_title: "Der Wind",
    t7_text: "Wind ist bewegte Luft. Er kann schwach oder stark sein.",
    t7_inst: "Ergänze das Wort:",
    t7_h1: "Der Wind...",
    t7_h2: "Benutze 'weht'.",
    t7_q: "Was bewegt sich im Wind?",
    t7_qa: "Fahne", t7_qb: "Stein", t7_qc: "Haus", t7_qd: "Auto",
    t7_sent: "Ein starker Wind ___ draußen.",
    t7_qa2: "weht", t7_qb2: "schläft", t7_qc2: "isst", t7_qd2: "lacht",

    t8_title: "Tag und Nacht",
    t8_text: "Am Tag scheint die Sonne, in der Nacht der Mond.",
    t8_inst: "Ordne den Satz:",
    t8_h1: "Am Tag...",
    t8_h2: "Sonne scheint.",
    t8_q: "Was sieht man nachts am Himmel?",
    t8_qa: "Sterne", t8_qb: "Sonne", t8_qc: "Flugzeuge", t8_qd: "Vögel",
    t8_w1: "Am", t8_w2: "Tag", t8_w3: "macht", t8_w4: "die", t8_w5: "Sonne", t8_w6: "alles", t8_w7: "hell.",
  },
};

export const WETTER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Regen", color: "#F7DC6F" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Woche", color: "#F7DC6F" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wolke", color: "#F7DC6F" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Jahr", color: "#F7DC6F" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Schnee", color: "#F7DC6F" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sort", color: "#F7DC6F" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Wind", color: "#F7DC6F" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Tag", color: "#F7DC6F" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — FAMILIE & ZUHAUSE
// ═══════════════════════════════════════════════════════════════════════════

export const FAMILIE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Familie & Zuhause",
    t1_title: "Meine Familie",
    t1_text: "Zur Familie gehören Vater, Mutter, Geschwister und Großeltern.",
    t1_inst: "Ordne die Familienmitglieder richtig an:",
    t1_h1: "Beginne mit 'Meine'.",
    t1_h2: "Benutze 'Familie'.",
    t1_q: "Wer ist die Mutter deines Vaters?",
    t1_qa: "Oma", t1_qb: "Tante", t1_qc: "Schwester", t1_qd: "Mama",
    t1_w1: "Meine", t1_w2: "Familie", t1_w3: "hält", t1_w4: "fest", t1_w5: "zusammen", t1_w6: "und", t1_w7: "hilft.",

    t2_title: "Zimmer im Haus",
    t2_text: "Im Haus gibt es Räume zum Kochen, Schlafen und Wohnen.",
    t2_inst: "Verbinde den Raum mit der Tätigkeit:",
    t2_h1: "Küche -> Kochen.",
    t2_h2: "Badezimmer -> Waschen.",
    t2_q: "Wo schläfst du?",
    t2_qa: "Schlafzimmer", t2_qb: "Küche", t2_qc: "Flur", t2_qd: "Garten",
    t2_l1: "Küche", t2_r1: "Kochen",
    t2_l2: "Schlafzimmer", t2_r2: "Schlafen",
    t2_l3: "Badezimmer", t2_r3: "Waschen",

    t3_title: "In der Küche",
    t3_text: "In der Küche bereiten wir unser Essen zu.",
    t3_inst: "Fülle die Lücke aus:",
    t3_h1: "Wo kochen wir?",
    t3_h2: "In der 'Küche'.",
    t3_q: "Was steht in der Küche?",
    t3_qa: "Kühlschrank", t3_qb: "Bett", t3_qc: "Dusche", t3_qd: "Kleiderschrank",
    t3_sent: "Wir kochen in der ___.",
    t3_qa2: "Küche", t3_qb2: "Garage", t3_qc2: "Badewanne", t3_qd2: "Wiese",

    t4_title: "Geschwister",
    t4_text: "Brüder und Schwestern sind unsere Geschwister.",
    t4_inst: "Baue den Satz über Geschwister:",
    t4_h1: "Ich spiele...",
    t4_h2: "Benutze 'Bruder'.",
    t4_q: "Wie nennt man den Sohn deiner Eltern?",
    t4_qa: "Bruder", t4_qb: "Onkel", t4_qc: "Opa", t4_qd: "Cousin",
    t4_f1: "Ich spiele", t4_f2: "gerne mit", t4_f3: "meinem", t4_f4: "Bruder.",

    t5_title: "Höflichkeit",
    t5_text: "Wir sagen 'Bitte' und 'Danke'. Das ist höflich.",
    t5_inst: "Markiere das Zauberwort:",
    t5_h1: "Suche nach 'Danke'.",
    t5_h2: "Es ist ein kurzes Wort.",
    t5_q: "Was sagst du, wenn du etwas bekommst?",
    t5_qa: "Danke", t5_qb: "Hallo", t5_qc: "Tschüss", t5_qd: "Nein",
    t5_tk1: "Ich", t5_tk2: "sage", t5_tk3: "immer", t5_tk4: "sehr", t5_tk5: "höflich", t5_tk6: "Danke", t5_tk7: "dafür.",

    t6_title: "Zimmer Sorter",
    t6_text: "Was gehört in welches Zimmer?",
    t6_inst: "Sortiere die Möbelstücke:",
    t6_h1: "Bett oder Herd?",
    t6_h2: "Schlafzimmer vs. Küche.",
    t6_q: "Was steht im Schlafzimmer?",
    t6_qa: "Bett", t6_qb: "Kühlschrank", t6_qc: "Herd", t6_qd: "Waschbecken",
    t6_bl1: "Schlafzimmer", t6_bl2: "Küche",
    t6_i1: "Bett", t6_i2: "Herd",
    t6_i3: "Schrank", t6_i4: "Kühlschrank",

    t7_title: "Zuhause",
    t7_text: "Unser Zuhause ist ein Ort, an dem wir uns sicher fühlen.",
    t7_inst: "Wähle das passende Wort:",
    t7_h1: "Wir fühlen uns...",
    t7_h2: "Benutze 'sicher'.",
    t7_q: "Was schützt unser Haus?",
    t7_qa: "Wände und Dach", t7_qb: "Papier", t7_qc: "Wasser", t7_qd: "Luft",
    t7_sent: "Zuhause fühle ich mich ___.",
    t7_qa2: "sicher", t7_qb2: "traurig", t7_qc2: "müde", t7_qd2: "kalt",

    t8_title: "Regeln",
    t8_text: "Regeln helfen uns, gut miteinander auszukommen.",
    t8_inst: "Ordne den Satz über Regeln:",
    t8_h1: "Beginne mit 'Regeln'.",
    t8_h2: "Regeln sind 'wichtig'.",
    t8_q: "Warum gibt es Regeln?",
    t8_qa: "Damit alle klarkommen", t8_qb: "Zum Ärgern", t8_qc: "Nur so", t8_qd: "Gibt keine",
    t8_w1: "Regeln", t8_w2: "sind", t8_w3: "für", t8_w4: "alle", t8_w5: "Kinder", t8_w6: "sehr", t8_w7: "wichtig.",
  },
};

export const FAMILIE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Mama", color: "#BB8FCE" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Haus", color: "#BB8FCE" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Küche", color: "#BB8FCE" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Bruder", color: "#BB8FCE" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Danke", color: "#BB8FCE" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Möbel", color: "#BB8FCE" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "sicher", color: "#BB8FCE" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Regel", color: "#BB8FCE" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — VERKEHR & SICHERHEIT
// ═══════════════════════════════════════════════════════════════════════════

export const VERKEHR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verkehr & Sicherheit",
    t1_title: "Das Auto",
    t1_text: "Autos fahren auf der Straße und haben meistens vier Räder.",
    t1_inst: "Ordne die Wörter zu einem Satz über das Auto:",
    t1_h1: "Beginne mit 'Das'.",
    t1_h2: "Es hat 'vier Räder'.",
    t1_q: "Wie viele Räder hat ein Auto?",
    t1_qa: "4", t1_qb: "2", t1_qc: "3", t1_qd: "6",
    t1_w1: "Das", t1_w2: "rote", t1_w3: "Auto", t1_w4: "hat", t1_w5: "genau", t1_w6: "vier", t1_w7: "Räder.",

    t2_title: "Verkehrsmittel",
    t2_text: "Es gibt viele Möglichkeiten zu reisen: Bus, Bahn, Flugzeug oder Fahrrad.",
    t2_inst: "Verbinde das Fahrzeug mit seinem Weg:",
    t2_h1: "Flugzeug -> Luft.",
    t2_h2: "Zug -> Schienen.",
    t2_q: "Womit fährst du auf Schienen?",
    t2_qa: "Zug", t2_qb: "Auto", t2_qc: "Fahrrad", t2_qd: "Bus",
    t2_l1: "Flugzeug", t2_r1: "Luft",
    t2_l2: "Schiff", t2_r2: "Wasser",
    t2_l3: "Zug", t2_r3: "Schienen",

    t3_title: "Die Ampel",
    t3_text: "Rot heißt stehen, Grün heißt gehen.",
    t3_inst: "Fülle die Lücke aus:",
    t3_h1: "Was machen wir bei Rot?",
    t3_h2: "Wir müssen 'stehen'.",
    t3_q: "Welche Farbe erlaubt das Gehen?",
    t3_qa: "Grün", t3_qb: "Rot", t3_qc: "Gelb", t3_qd: "Blau",
    t3_sent: "Bei Rot musst du ___ bleiben.",
    t3_qa2: "stehen", t3_qb2: "laufen", t3_qc2: "tanzen", t3_qd2: "singen",

    t4_title: "Sicherheit: Zebrastreifen",
    t4_text: "Am Zebrastreifen können wir sicher die Straße überqueren.",
    t4_inst: "Baue den Sicherheitssatz:",
    t4_h1: "Ich gehe...",
    t4_h2: "Benutze 'Zebrastreifen'.",
    t4_q: "Wie sieht ein Zebrastreifen aus?",
    t4_qa: "Weiß-schwarz gestreift", t4_qb: "Ganz rot", t4_qc: "Blau gepunktet", t4_qd: "Grün",
    t4_f1: "Ich gehe", t4_f2: "vorsichtig", t4_f3: "über den", t4_f4: "Zebrastreifen.",

    t5_title: "Notruf",
    t5_text: "Im Notfall rufen wir die 110 (Polizei) oder 112 (Feuerwehr).",
    t5_inst: "Markiere die Nummer der Feuerwehr:",
    t5_h1: "Suche nach '112'.",
    t5_h2: "Sie hat drei Ziffern.",
    t5_q: "Wen rufst du bei Feuer?",
    t5_qa: "112", t5_qb: "110", t5_qc: "123", t5_qd: "000",
    t5_tk1: "Wähle", t5_tk2: "im", t5_tk3: "Notfall", t5_tk4: "immer", t5_tk5: "die", t5_tk6: "112", t5_tk7: "an.",

    t6_title: "Fahrzeug Sorter",
    t6_text: "Fahrzeuge mit und ohne Motor.",
    t6_inst: "Sortiere die Fahrzeuge:",
    t6_h1: "Braucht es Benzin?",
    t6_h2: "Bus (Motor) vs. Fahrrad (Muskeln).",
    t6_q: "Was fährt ohne Motor?",
    t6_qa: "Fahrrad", t6_qb: "Auto", t6_qc: "Bus", t6_qd: "LKW",
    t6_bl1: "Mit Motor", t6_bl2: "Ohne Motor",
    t6_i1: "LKW", t6_i2: "Roller",
    t6_i3: "Motorrad", t6_i4: "Fahrrad",

    t7_title: "Fahrradhelm",
    t7_text: "Ein Helm schützt unseren Kopf beim Radfahren.",
    t7_inst: "Ergänze das Wort:",
    t7_h1: "Was schützt der Helm?",
    t7_h2: "Benutze 'Kopf'.",
    t7_q: "Sollte man beim Radfahren einen Helm tragen?",
    t7_qa: "Ja, immer", t7_qb: "Nein", t7_qc: "Nur nachts", t7_qd: "Nur im Regen",
    t7_sent: "Der Helm schützt meinen ___.",
    t7_qa2: "Kopf", t7_qb2: "Fuß", t7_qc2: "Bauch", t7_qd2: "Arm",

    t8_title: "Gehweg",
    t8_text: "Fußgänger gehen auf dem Gehweg, nicht auf der Fahrbahn.",
    t8_inst: "Ordne den Satz für Fußgänger:",
    t8_h1: "Beginne mit 'Ich'.",
    t8_h2: "Benutze 'Gehweg'.",
    t8_q: "Wo gehen Fußgänger am sichersten?",
    t8_qa: "Gehweg", t8_qb: "Straße", t8_qc: "Wiese", t8_qd: "Wald",
    t8_w1: "Ich", t8_w2: "gehe", t8_w3: "sicher", t8_w4: "auf", t8_w5: "dem", t8_w6: "breiten", t8_w7: "Gehweg.",
  },
};

export const VERKEHR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Auto", color: "#F0B27A" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Zug", color: "#F0B27A" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Ampel", color: "#F0B27A" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Sicher", color: "#F0B27A" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "112", color: "#F0B27A" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sort", color: "#F0B27A" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Helm", color: "#F0B27A" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Weg", color: "#F0B27A" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — MATERIALIEN & RECYCLING
// ═══════════════════════════════════════════════════════════════════════════

export const MATERIAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Materialien & Recycling",
    t1_title: "Holz",
    t1_text: "Holz kommt von Bäumen. Es ist fest und wir bauen Tische daraus.",
    t1_inst: "Ordne die Wörter zu einem Satz über Holz:",
    t1_h1: "Beginne mit 'Holz'.",
    t1_h2: "Es kommt von 'Bäumen'.",
    t1_q: "Was ist aus Holz gemacht?",
    t1_qa: "Stuhl", t1_qb: "Glasflasche", t1_qc: "Metalllöffel", t1_qd: "Plastiktüte",
    t1_w1: "Holz", t1_w2: "kommt", t1_w3: "direkt", t1_w4: "von", t1_w5: "den", t1_w6: "großen", t1_w7: "Bäumen.",

    t2_title: "Material-Check",
    t2_text: "Gegenstände sind aus Glas, Metall, Plastik oder Papier.",
    t2_inst: "Verbinde den Gegenstand mit seinem Material:",
    t2_h1: "Fenster -> Glas.",
    t2_h2: "Zeitung -> Papier.",
    t2_q: "Aus welchem Material ist eine Gabel meistens?",
    t2_qa: "Metall", t2_qb: "Holz", t2_qc: "Papier", t2_qd: "Stoff",
    t2_l1: "Fenster", t2_r1: "Glas",
    t2_l2: "Schlüssel", t2_r2: "Metall",
    t2_l3: "Buch", t2_r3: "Papier",

    t3_title: "Papier-Recycling",
    t3_text: "Papier gehört in die blaue Tonne.",
    t3_inst: "Fülle die Lücke aus:",
    t3_h1: "In welche Tonne kommt Papier?",
    t3_h2: "In die 'blaue' Tonne.",
    t3_q: "Was darf in die Papiertonne?",
    t3_qa: "Zeitungen", t3_qb: "Essensreste", t3_qc: "Batterien", t3_qd: "Glas",
    t3_sent: "Papier kommt in die ___ Tonne.",
    t3_qa2: "blaue", t3_qb2: "grüne", t3_qc2: "schwarze", t3_qd2: "gelbe",

    t4_title: "Plastik",
    t4_text: "Plastikverpackungen kommen in den Gelben Sack.",
    t4_inst: "Baue den Satz über Plastik:",
    t4_h1: "Plastik ist...",
    t4_h2: "Benutze 'leicht'.",
    t4_q: "Welche Farbe hat der Müllsack für Plastik?",
    t4_qa: "Gelb", t4_qb: "Blau", t4_qc: "Grün", t4_qd: "Schwarz",
    t4_f1: "Plastik", t4_f2: "ist oft", t4_f3: "sehr leicht", t4_f4: "und bunt.",

    t5_title: "Glas",
    t5_text: "Glas ist zerbrechlich. Wir bringen Flaschen zum Glascontainer.",
    t5_inst: "Markiere das Wort für das Material:",
    t5_h1: "Suche nach 'Glas'.",
    t5_h2: "Es hat vier Buchstaben.",
    t5_q: "Wo entsorgen wir leere Gläser?",
    t5_qa: "Glascontainer", t5_qb: "Biotonne", t5_qc: "Papiertonne", t5_qd: "Wald",
    t5_tk1: "Vorsicht,", t5_tk2: "das", t5_tk3: "dünne", t5_tk4: "Glas", t5_tk5: "kann", t5_tk6: "schnell", t5_tk7: "zerbrechen.",

    t6_title: "Müll Sorter",
    t6_text: "Wir trennen unseren Müll, um die Umwelt zu schützen.",
    t6_inst: "Sortiere den Abfall:",
    t6_h1: "Papier oder Biomüll?",
    t6_h2: "Karton vs. Apfelrest.",
    t6_q: "Wohin kommen Bananenschalen?",
    t6_qa: "Biotonne", t6_qb: "Papiertonne", t6_qc: "Gelber Sack", t6_qd: "Glascontainer",
    t6_bl1: "Papiertonne", t6_bl2: "Biotonne",
    t6_i1: "Zeitung", t6_i2: "Apfelrest",
    t6_i3: "Karton", t6_i4: "Eierschale",

    t7_title: "Bio-Müll",
    t7_text: "Aus Bio-Müll wird Erde für neue Pflanzen.",
    t7_inst: "Ergänze das Wort:",
    t7_h1: "Was wird aus Bio-Müll?",
    t7_h2: "Benutze 'Erde'.",
    t7_q: "Darf Plastik in die Biotonne?",
    t7_qa: "Nein", t7_qb: "Ja", t7_qc: "Nur sonntags", t7_qd: "Immer",
    t7_sent: "Bio-Müll wird zu neuer ___.",
    t7_qa2: "Erde", t7_qb2: "Luft", t7_qc2: "Wasser", t7_qd2: "Glas",

    t8_title: "Umweltschutz",
    t8_text: "Mülltrennung hilft der Natur.",
    t8_inst: "Ordne den Satz:",
    t8_h1: "Beginne mit 'Wir'.",
    t8_h2: "Benutze 'Umwelt'.",
    t8_q: "Warum trennen wir Müll?",
    t8_qa: "Für die Umwelt", t8_qb: "Zum Spaß", t8_qc: "Gibt keinen Grund", t8_qd: "Weil es regnet",
    t8_w1: "Wir", t8_w2: "schützen", t8_w3: "die", t8_w4: "Umwelt", t8_w5: "durch", t8_w6: "richtiges", t8_w7: "Recycling.",
  },
};

export const MATERIAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Holz", color: "#76D7C4" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Check", color: "#76D7C4" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Blau", color: "#76D7C4" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Gelb", color: "#76D7C4" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Glas", color: "#76D7C4" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Müll", color: "#76D7C4" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Bio", color: "#76D7C4" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Plan", color: "#76D7C4" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — NATURE REVIEW
// ═══════════════════════════════════════════════════════════════════════════

export const NATURE_REVIEW_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Natur Rückblick",
    t1_title: "Tiere & Pflanzen",
    t1_text: "Wir schauen uns noch einmal Tiere und Pflanzen an.",
    t1_inst: "Verbinde die Paare richtig:",
    t1_h1: "Hund -> bellt.",
    t1_h2: "Baum -> Blätter.",
    t1_q: "Was gehört zur Natur?",
    t1_qa: "Tiere und Pflanzen", t1_qb: "Steine und Sand", t1_qc: "Häuser und Autos", t1_qd: "Müll",
    t2_l1: "Hund", t2_r1: "Tier",
    t2_l2: "Eiche", t2_r2: "Baum",
    t2_l3: "Rose", t2_r3: "Blume",

    t2_title: "Vier Jahreszeiten Review",
    t2_text: "Erinnerst du dich an die Jahreszeiten?",
    t2_inst: "Wähle die richtige Jahreszeit:",
    t2_h1: "Es ist sehr heiß.",
    t2_h2: "Benutze 'Sommer'.",
    t2_q: "In welcher Zeit blühen die Bäume?",
    t2_qa: "Frühling", t2_qb: "Winter", t2_qc: "Herbst", t2_qd: "Sommer",
    t2_sent: "Im ___ ist es am heißesten.",
    t2_qa2: "Sommer", t2_qb2: "Winter", t2_qc2: "März", t2_qd2: "Herbst",

    t3_title: "Wetter Review",
    t3_text: "Wie war das mit dem Wetter?",
    t3_inst: "Ordne den Satz zum Wetter:",
    t3_h1: "Beginne mit 'Die'.",
    t3_h2: "Sonne macht warm.",
    t3_q: "Was passiert bei Gewitter?",
    t3_qa: "Blitz und Donner", t3_qb: "Sonnenschein", t3_qc: "Schnee", t3_qd: "Windstille",
    t3_w1: "Die", t3_w2: "Sonne", t3_w3: "macht", t3_w4: "uns", t3_w5: "an", t3_w6: "Sommertagen", t3_w7: "warm.",

    t4_title: "Waldtiere",
    t4_text: "Welche Tiere leben im Wald?",
    t4_inst: "Markiere das Waldtier:",
    t4_h1: "Suche nach 'Hirsch'.",
    t4_h2: "Es hat ein Geweih.",
    t4_q: "Wer lebt im Wald?",
    t4_qa: "Hirsch", t4_qb: "Elefant", t4_qc: "Hai", t4_qd: "Krokodil",
    t4_tk1: "Ein", t4_tk2: "stolzer", t4_tk3: "Hirsch", t4_tk4: "steht", t4_tk5: "mitten", t4_tk6: "im", t4_tk7: "Wald.",

    t5_title: "Blumen & Früchte",
    t5_text: "Blumen wachsen aus Samen.",
    t5_inst: "Baue den Satz:",
    t5_h1: "Pflanzen brauchen...",
    t5_h2: "Benutze 'Wasser'.",
    t5_q: "Was braucht eine Pflanze zum Wachsen?",
    t5_qa: "Licht und Wasser", t5_qb: "Dunkelheit", t5_qc: "Eis", t5_qd: "Cola",
    t5_f1: "Pflanzen", t5_f2: "brauchen Licht", t5_f3: "und", t5_f4: "viel Wasser.",

    t6_title: "Natur Review Sorter",
    t6_text: "Sonne, Regen, Tiere, Bäume.",
    t6_inst: "Sortiere nach Kategorie:",
    t6_h1: "Wetter oder Lebewesen?",
    t6_h2: "Sonne (Wetter) vs. Baum (Lebewesen).",
    t6_q: "Was gehört zum Wetter?",
    t6_qa: "Regen", t6_qb: "Hase", t6_qc: "Blume", t6_qd: "Stein",
    t6_bl1: "Wetter", t6_bl2: "Lebewesen",
    t6_i1: "Sonne", t6_i2: "Vogel",
    t6_i3: "Wind", t6_i4: "Baum",

    t7_title: "Apfelbaum",
    t7_text: "Vom Apfelbaum ernten wir Äpfel.",
    t7_inst: "Ergänze den Satz:",
    t7_h1: "Was wächst am Apfelbaum?",
    t7_h2: "Benutze 'Äpfel'.",
    t7_q: "Wann ernten wir Äpfel?",
    t7_qa: "Herbst", t7_qb: "Frühling", t7_qc: "Winter", t7_qd: "Mai",
    t7_sent: "Am Apfelbaum wachsen süße ___.",
    t7_qa2: "Äpfel", t7_qb2: "Birnen", t7_qc2: "Nüsse", t7_qd2: "Steine",

    t8_title: "Vögel im Winter",
    t8_text: "Einige Vögel fliegen in den Süden.",
    t8_inst: "Bringe die Wörter in Ordnung:",
    t8_h1: "Beginne mit 'Einige'.",
    t8_h2: "Sie fliegen 'weg'.",
    t8_q: "Warum fliegen sie weg?",
    t8_qa: "Weil es warm sein soll", t8_qb: "Zum Spaß", t8_qc: "Zum Schlafen", t8_qd: "Nie",
    t8_w1: "Einige", t8_w2: "Vögel", t8_w3: "fliegen", t8_w4: "im", t8_w5: "Winter", t8_w6: "einfach", t8_w7: "weg.",
  },
};

export const NATURE_REVIEW_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Natur", color: "#85C1E9" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Sommer", color: "#85C1E9" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Sonne", color: "#85C1E9" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Wald", color: "#85C1E9" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6"], correctIndices: [2] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wasser", color: "#85C1E9" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sort", color: "#85C1E9" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Apfel", color: "#85C1E9" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Flug", color: "#85C1E9" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — GRAND FINALE
// ═══════════════════════════════════════════════════════════════════════════

export const FINALE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes Finale",
    t1_title: "Abschluss-Check",
    t1_text: "Alles, was wir gelernt haben.",
    t1_inst: "Verbinde die Begriffe:",
    t1_h1: "Auge -> Sehen.",
    t1_h2: "Hund -> Tier.",
    t1_q: "Was hast du alles gelernt?",
    t1_qa: "Viel über die Umwelt", t1_qb: "Nichts", t1_qc: "Nur Kochen", t1_qd: "Nur Schlafen",
    t2_l1: "Auge", t2_r1: "Sehen",
    t2_l2: "Sonne", t2_r2: "Wetter",
    t2_l3: "Ampel", t2_r3: "Verkehr",

    t2_title: "Mix: Körper & Natur",
    t2_text: "Wir mischen die Themen.",
    t2_inst: "Wähle das richtige Wort:",
    t2_h1: "Was ist gesund?",
    t2_h2: "Benutze 'Obst'.",
    t2_q: "Welches Organ ist zum Riechen?",
    t2_qa: "Nase", t2_qb: "Ohr", t2_qc: "Hand", t2_qd: "Fuß",
    t2_sent: "Viel ___ essen ist gesund.",
    t2_qa2: "Obst", t2_qb2: "Eis", t2_qc2: "Pizza", t2_qd2: "Müll",

    t3_title: "Mix: Verkehr & Heim",
    t3_text: "Regeln im Haus und auf der Straße.",
    t3_inst: "Ordne den Satz:",
    t3_h1: "Beginne mit 'Ich'.",
    t3_h2: "Sei 'vorsichtig'.",
    t3_q: "Wo fährt das Auto?",
    t3_qa: "Straße", t3_qb: "Dach", t3_qc: "Bett", t3_qd: "Flur",
    t3_w1: "Ich", t3_w2: "bin", t3_w3: "im", t3_w4: "Verkehr", t3_w5: "immer", t3_w6: "sehr", t3_w7: "vorsichtig.",

    t4_title: "Highlight Mix",
    t4_text: "Suche die wichtigsten Wörter.",
    t4_inst: "Markiere das Wort 'Umweltschutz':",
    t4_h1: "Es ist ein langes Wort.",
    t4_h2: "Wir schützen die Natur.",
    t4_q: "Was ist wichtig?",
    t4_qa: "Umweltschutz", t4_qb: "Müll machen", t4_qc: "Feuer", t4_qd: "Lärm",
    t4_tk1: "Wir", t4_tk2: "achten", t4_tk3: "gemeinsam", t4_tk4: "auf", t4_tk5: "den", t4_tk6: "wichtigen", t4_tk7: "Umweltschutz.",

    t5_title: "Finale: Bauen",
    t5_text: "Baue einen letzten Satz.",
    t5_inst: "Baue den Satz:",
    t5_h1: "Wir haben...",
    t5_h2: "Viel gelernt.",
    t5_q: "Bist du bereit für Klasse 2?",
    t5_qa: "Ja!", t5_qb: "Nein", t5_qc: "Vielleicht", t5_qd: "Nicht sicher",
    t5_f1: "Wir haben", t5_f2: "nun", t5_f3: "sehr viel", t5_f4: "neues gelernt.",

    t6_title: "Der große Sorter",
    t6_text: "Alles durcheinander.",
    t6_inst: "Sortiere nach Kategorie:",
    t6_h1: "Tier oder Gegenstand?",
    t6_h2: "Hund vs. Buch.",
    t6_q: "Was lebt?",
    t6_qa: "Hase", t6_qb: "Stein", t6_qc: "Tisch", t6_qd: "Auto",
    t6_bl1: "Lebendig", t6_bl2: "Nicht lebendig",
    t6_i1: "Vogel", t6_i2: "Fahrrad",
    t6_i3: "Blume", t6_i4: "Computer",

    t7_title: "Letzte Lücke",
    t7_text: "Fast geschafft!",
    t7_inst: "Ergänze das Wort:",
    t7_h1: "Das Jahr ist...",
    t7_h2: "Benutze 'vorbei'.",
    t7_q: "Was kommt nach dem Winter?",
    t7_qa: "Frühling", t7_qb: "Sommer", t7_qc: "Herbst", t7_qd: "Nacht",
    t7_sent: "Die erste Klasse ist nun ___.",
    t7_qa2: "vorbei", t7_qb2: "heiß", t7_qc2: "blau", t7_qd2: "kalt",

    t8_title: "Finale Ordnung",
    t8_text: "Die letzte Aufgabe.",
    t8_inst: "Ordne den Satz:",
    t8_h1: "Beginne mit 'Lernen'.",
    t8_h2: "Lernen macht 'Spaß'.",
    t8_q: "Wie war Sachkunde?",
    t8_qa: "Toll!", t8_qb: "Doof", t8_qc: "Geht so", t8_qd: "Zu schwer",
    t8_w1: "Lernen", t8_w2: "macht", t8_w3: "uns", t8_w4: "allen", t8_w5: "wirklich", t8_w6: "großen", t8_w7: "Spaß.",
  },
};

export const FINALE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ende", color: "#F1948A" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Mix", color: "#F1948A" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Plan", color: "#F1948A" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Welt", color: "#F1948A" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7"], correctIndices: [6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Satz", color: "#F1948A" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Ende", color: "#F1948A" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Lücke", color: "#F1948A" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Spaß", color: "#F1948A" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];
