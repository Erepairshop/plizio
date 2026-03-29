// lib/explorerPools/sachkundeK3.ts
import type { PoolTopicDef } from "./types";

export const WALD_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Lebensraum Wald",
    t1_title: "Waldstockwerke", t1_text: "Der Wald ist in Schichten wie ein Haus aufgebaut.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie heißt die unterste Schicht?", t1_qa: "Bodenschicht", t1_qb: "Kronenschicht", t1_qc: "Dachschicht", t1_qd: "Keller",
    t1_w1: "Der", t1_w2: "Wald", t1_w3: "hat", t1_w4: "fünf", t1_w5: "verschiedene", t1_w6: "Stockwerke.", t1_w7: "",
    t1_l1: "Wurzelschicht", t1_r1: "Unter der Erde", t1_l2: "Krautschicht", t1_r2: "Blumen", t1_l3: "Strauchschicht", t1_r3: "Büsche",
    t1_sent: "Moose wachsen in der ___.", t1_qa2: "Bodenschicht", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Ganz", t1_f2: "oben", t1_f3: "ist", t1_f4: "die", t1_f5: "Kronenschicht.", t1_f6: "", t1_f7: "",
    t1_tk1: "Rehe", t1_tk2: "leben", t1_tk3: "meistens", t1_tk4: "in", t1_tk5: "der", t1_tk6: "Strauchschicht.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Nadelbaum", t1_bl2: "Laubbaum", t1_i1: "Tanne", t1_i2: "Eiche", t1_i3: "Fichte", t1_i4: "Buche",
    t2_title: "Fotosynthese", t2_text: "Bäume wandeln CO2 und Licht in Sauerstoff um.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was brauchen Pflanzen für die Fotosynthese?", t2_qa: "Sonnenlicht", t2_qb: "Zucker", t2_qc: "Dunkelheit", t2_qd: "Eis",
    t2_w1: "Blätter", t2_w2: "nehmen", t2_w3: "Energie", t2_w4: "aus", t2_w5: "dem", t2_w6: "Sonnenlicht.", t2_w7: "",
    t2_l1: "Wurzel", t2_r1: "Wasser", t2_l2: "Blatt", t2_r2: "Zucker", t2_l3: "Rinde", t2_r3: "Schutz",
    t2_sent: "Bäume schenken uns ___.", t2_qa2: "Sauerstoff", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Pflanzen", t2_f2: "sind", t2_f3: "wichtig", t2_f4: "für", t2_f5: "unsere", t2_f6: "Luft.", t2_f7: "",
    t2_tk1: "Das", t2_tk2: "Blattgrün", t2_tk3: "hilft", t2_tk4: "der", t2_tk5: "Pflanze", t2_tk6: "beim", t2_tk7: "Wachsen.", t2_tk8: "",
    t2_bl1: "Eingabe", t2_bl2: "Ausgabe", t2_i1: "Licht", t2_i2: "Sauerstoff", t2_i3: "Wasser", t2_i4: "Traubenzucker",
    t3_title: "Borkenkäfer", t3_text: "Kleine Käfer können großen Schaden anrichten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welcher Baum wird oft vom Borkenkäfer befallen?", t3_qa: "Fichte", t3_qb: "Eiche", t3_qc: "Birke", t3_qd: "Palme",
    t3_w1: "Ein", t3_w2: "Befall", t3_w3: "macht", t3_w4: "den", t3_w5: "Baum", t3_w6: "sehr", t3_w7: "krank.",
    t3_l1: "Käfer", t3_r1: "Tier", t3_l2: "Larve", t3_r2: "Kind", t3_l3: "Baum", t3_r3: "Wirt",
    t3_sent: "Der Käfer frisst Gänge unter die ___.", t3_qa2: "Rinde", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Förster", t3_f2: "müssen", t3_f3: "kranke", t3_f4: "Bäume", t3_f5: "schnell", t3_f6: "fällen.", t3_f7: "",
    t3_tk1: "Trockenheit", t3_tk2: "macht", t3_tk3: "die", t3_tk4: "Bäume", t3_tk5: "schwach", t3_tk6: "gegen", t3_tk7: "Käfer.", t3_tk8: "",
    t3_bl1: "Schädlich", t3_bl2: "Nützlich", t3_i1: "Borkenkäfer", t3_i2: "Marienkäfer", t3_i3: "Nonne", t3_i4: "Biene",
    t4_title: "Laubbäume", t4_text: "Eichen und Buchen verlieren im Winter ihre Blätter.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Welche Frucht hat die Eiche?", t4_qa: "Eichel", t4_qb: "Buchecker", t4_qc: "Kastanie", t4_qd: "Nuss",
    t4_w1: "Buchen", t4_w2: "haben", t4_w3: "sehr", t4_w4: "viele", t4_w5: "kleine", t4_w6: "Bucheckern.", t4_w7: "",
    t4_l1: "Eiche", t4_r1: "Zackig", t4_l2: "Buche", t4_r2: "Eiförmig", t4_l3: "Ahorn", t4_r3: "Handförmig",
    t4_sent: "Die Buche hat glatte, graue ___.", t4_qa2: "Rinde", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Laubbäume", t4_f2: "färben", t4_f3: "ihre", t4_f4: "Blätter", t4_f5: "im", t4_f6: "Herbst.", t4_f7: "",
    t4_tk1: "Kastanien", t4_tk2: "haben", t4_tk3: "stachelige", t4_tk4: "Hüllen", t4_tk5: "um", t4_tk6: "ihre", t4_tk7: "Früchte.", t4_tk8: "",
    t4_bl1: "Baum", t4_bl2: "Frucht", t4_i1: "Eiche", t4_i2: "Eichel", t4_i3: "Ahorn", t4_i4: "Samen",
    t5_title: "Nadelbäume", t5_text: "Tannen und Fichten haben Nadeln statt Blätter.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Welcher Nadelbaum verliert im Winter seine Nadeln?", t5_qa: "Lärche", t5_qb: "Tanne", t5_qc: "Fichte", t5_qd: "Kiefer",
    t5_w1: "Nadeln", t5_w2: "haben", t5_w3: "eine", t5_w4: "feste", t5_w5: "Haut", t5_w6: "aus", t5_w7: "Wachs.",
    t5_l1: "Tanne", t5_r1: "Stehend", t5_l2: "Fichte", t5_r2: "Hängend", t5_l3: "Kiefer", t5_r3: "Paarig",
    t5_sent: "Die Kiefer hat sehr lange ___.", t5_qa2: "Nadeln", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Zapfen", t5_f2: "enthalten", t5_f3: "die", t5_f4: "Samen", t5_f5: "der", t5_f6: "Bäume.", t5_f7: "",
    t5_tk1: "Nadelbäume", t5_tk2: "bleiben", t5_tk3: "auch", t5_tk4: "im", t5_tk5: "kalten", t5_tk6: "Winter", t5_tk7: "grün.", t5_tk8: "",
    t5_bl1: "Nadel", t5_bl2: "Zapfen", t5_i1: "Spitz", t5_i2: "Holzig", t5_i3: "Grün", t5_i4: "Samen",
    t6_title: "Die Tanne", t6_text: "Tannen erkennt man an ihren stehenden Zapfen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wo wachsen die Zapfen der Tanne?", t6_qa: "Nach oben", t6_qb: "Nach unten", t6_qc: "Im Boden", t6_qd: "Gar nicht",
    t6_w1: "Tannennadeln", t6_w2: "sind", t6_w3: "flach", t6_w4: "und", t6_w5: "stechen", t6_w6: "nicht.", t6_w7: "",
    t6_l1: "Tanne", t6_r1: "Weich", t6_l2: "Fichte", t6_r2: "Stechend", t6_l3: "Kiefer", t6_r3: "Lang",
    t6_sent: "Die Tanne hat zwei weiße ___.", t6_qa2: "Streifen", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Tannen", t6_f2: "werden", t6_f3: "oft", t6_f4: "als", t6_f5: "Weihnachtsbaum", t6_f6: "genutzt.", t6_f7: "",
    t6_tk1: "Die", t6_tk2: "Zapfen", t6_tk3: "fallen", t6_tk4: "als", t6_tk5: "ganzes", t6_tk6: "Stück", t6_tk7: "ab.", t6_tk8: "",
    t6_bl1: "Tanne", t6_bl2: "Fichte", t6_i1: "Stehend", t6_i2: "Hängend", t6_i3: "Silber", t6_i4: "Rot",
    t7_title: "Der Pilz", t7_text: "Pilze sind weder Pflanze noch Tier.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wie heißt der giftigste Pilz im Wald?", t7_qa: "Knollenblätterpilz", t7_qb: "Pfifferling", t7_qc: "Steinpilz", t7_qd: "Champignon",
    t7_w1: "Sammle", t7_w2: "nur", t7_w3: "Pilze", t7_w4: "die", t7_w5: "du", t7_w6: "genau", t7_w7: "kennst.",
    t7_l1: "Hut", t7_r1: "Oben", t7_l2: "Stiel", t7_r2: "Mitte", t7_l3: "Lamellen", t7_r3: "Unten",
    t7_sent: "Der Pilz wächst aus dem ___.", t7_qa2: "Myzel", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Pilze", t7_f2: "helfen", t7_f3: "beim", t7_f4: "Abbau", t7_f5: "von", t7_f6: "altem", t7_f7: "Laub.",
    t7_tk1: "Der", t7_tk2: "Fliegenpilz", t7_tk3: "hat", t7_tk4: "einen", t7_tk5: "roten", t7_tk6: "Hut", t7_tk7: "mit", t7_tk8: "Punkten.",
    t7_bl1: "Essbar", t7_bl2: "Giftig", t7_i1: "Steinpilz", t7_i2: "Fliegenpilz", t7_i3: "Pfifferling", t7_i4: "Knollenblätterpilz",
    t8_title: "Wald-Check", t8_text: "Schütze den Wald!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was darf man im Wald nicht?", t8_qa: "Feuer machen", t8_qb: "Wandern", t8_qc: "Tiere beobachten", t8_qd: "Leise sein",
    t8_w1: "Ohne", t8_w2: "Wälder", t8_w3: "wäre", t8_w4: "das", t8_w5: "Leben", t8_w6: "schwierig.", t8_w7: "",
    t8_l1: "Erholung", t8_r1: "Mensch", t8_l2: "Holz", t8_r2: "Wirtschaft", t8_l3: "Schutz", t8_r3: "Tiere",
    t8_sent: "Der Wald ist ein wichtiger ___.", t8_qa2: "Wasserspeicher", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "müssen", t8_f3: "unseren", t8_f4: "Wald", t8_f5: "für", t8_f6: "die", t8_f7: "Zukunft",
    t8_tk1: "Wälder", t8_tk2: "kühlen", t8_tk3: "die", t8_tk4: "Luft", t8_tk5: "an", t8_tk6: "heißen", t8_tk7: "Tagen.", t8_tk8: "",
    t8_bl1: "Natur", t8_bl2: "Müll", t8_i1: "Bäume", t8_i2: "Plastik", t8_i3: "Rehe", t8_i4: "Dosen",
  },
};

export const WALD_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Waldstockwerke", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Fotosynthese", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Borkenkäfer", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Laubbäume", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Nadelbäume", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Die Tanne", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Der Pilz", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wald-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const FEUER_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Feuer & Brandschutz",
    t1_title: "Das Feuer", t1_text: "Feuer gibt Licht und Wärme, ist aber gefährlich.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was braucht Feuer zum Brennen?", t1_qa: "Sauerstoff", t1_qb: "Wasser", t1_qc: "Stickstoff", t1_qd: "Sand",
    t1_w1: "Licht", t1_w2: "und", t1_w3: "Wärme", t1_w4: "sind", t1_w5: "wichtige", t1_w6: "Eigenschaften.", t1_w7: "",
    t1_l1: "Wärme", t1_r1: "Heiß", t1_l2: "Licht", t1_r2: "Hell", t1_l3: "Rauch", t1_r3: "Dunkel",
    t1_sent: "Feuer braucht einen ___.", t1_qa2: "Brennstoff", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Feuer", t1_f2: "hat", t1_f3: "den", t1_f4: "Menschen", t1_f5: "schon", t1_f6: "früher", t1_f7: "geholfen.",
    t1_tk1: "Eine", t1_tk2: "kontrollierte", t1_tk3: "Feuerstelle", t1_tk4: "muss", t1_tk5: "immer", t1_tk6: "bewacht", t1_tk7: "werden.", t1_tk8: "",
    t1_bl1: "Nutzen", t1_bl2: "Gefahr", t1_i1: "Kochen", t1_i2: "Brand", t1_i3: "Wärme", t1_i4: "Rauch",
    t2_title: "Feuerdreieck", t2_text: "Drei Dinge müssen für ein Feuer zusammenkommen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welche drei Dinge sind das?", t2_qa: "Brennstoff, Hitze, Sauerstoff", t2_qb: "Holz, Wasser, Luft", t2_qc: "Gas, Stein, Licht", t2_qd: "Eis, Feuer, Wind",
    t2_w1: "Ohne", t2_w2: "Sauerstoff", t2_w3: "kann", t2_w4: "keine", t2_w5: "Flamme", t2_w6: "existieren.", t2_w7: "",
    t2_l1: "Holz", t2_r1: "Brennstoff", t2_l2: "Zündholz", t2_r2: "Hitze", t2_l3: "Luft", t2_r3: "Sauerstoff",
    t2_sent: "Entfernt man eins, ___ das Feuer.", t2_qa2: "erlischt", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Das", t2_f2: "Feuerdreieck", t2_f3: "erklärt", t2_f4: "wie", t2_f5: "Brände", t2_f6: "entstehen.", t2_f7: "",
    t2_tk1: "Um", t2_tk2: "ein", t2_tk3: "Feuer", t2_tk4: "zu", t2_tk5: "löschen", t2_tk6: "muss", t2_tk7: "man", t2_tk8: "kühlen.",
    t2_bl1: "Nötig", t2_bl2: "Nicht nötig", t2_i1: "Hitze", t2_i2: "Wasser", t2_i3: "Luft", t2_i4: "Steine",
    t3_title: "Notruf 112", t3_text: "Im Notfall zählt jede Sekunde.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welche Nummer wählst du bei Feuer?", t3_qa: "112", t3_qb: "110", t3_qc: "118", t3_qd: "911",
    t3_w1: "Wer", t3_w2: "ruft", t3_w3: "an", t3_w4: "und", t3_w5: "wo", t3_w6: "brennt", t3_w7: "es?",
    t3_l1: "Wer", t3_r1: "Name", t3_l2: "Was", t3_r2: "Ereignis", t3_l3: "Wo", t3_r3: "Ort",
    t3_sent: "Die 5 W-Fragen sind ___.", t3_qa2: "lebenswichtig", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Warten", t3_f2: "Sie", t3_f3: "immer", t3_f4: "auf", t3_f5: "Rückfragen", t3_f6: "am", t3_f7: "Telefon.",
    t3_tk1: "Ruhe", t3_tk2: "bewahren", t3_tk3: "ist", t3_tk4: "beim", t3_tk5: "Notruf", t3_tk6: "das", t3_tk7: "Allerwichtigste.", t3_tk8: "",
    t3_bl1: "Notruf", t3_bl2: "Normal", t3_i1: "112", t3_i2: "123", t3_i3: "Feuer", t3_i4: "Spiel",
    t4_title: "Die Kerze", t4_text: "Eine Kerze besteht aus Wachs und einem Docht.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo brennt die Kerze?", t4_qa: "Am Docht", t4_qb: "Am Wachs", t4_qc: "Am Halter", t4_qd: "Überall",
    t4_w1: "Die", t4_w2: "Flamme", t4_w3: "braucht", t4_w4: "den", t4_w5: "Wachsdampf", t4_w6: "zum", t4_w7: "Leuchten.",
    t4_l1: "Wachs", t4_r1: "Brennstoff", t4_l2: "Docht", t4_r2: "Leiter", t4_l3: "Flamme", t4_r3: "Licht",
    t4_sent: "Das flüssige Wachs steigt im ___ nach oben.", t4_qa2: "Docht", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Blase", t4_f2: "eine", t4_f3: "Kerze", t4_f4: "nie", t4_f5: "unbeobachtet", t4_f6: "aus.", t4_f7: "",
    t4_tk1: "In", t4_tk2: "der", t4_tk3: "Mitte", t4_tk4: "der", t4_tk5: "Flamme", t4_tk6: "ist", t4_tk7: "es", t4_tk8: "am",
    t4_bl1: "Fest", t4_bl2: "Flüssig", t4_i1: "Kerze", t4_i2: "Wachstropfen", t4_i3: "Halter", t4_i4: "See",
    t5_title: "Löschmittel", t5_text: "Wasser löscht nicht jedes Feuer.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Womit löscht man brennendes Fett?", t5_qa: "Deckel / Löschdecke", t5_qb: "Wasser", t5_qc: "Limonade", t5_qd: "Mehl",
    t5_w1: "Verwende", t5_w2: "Sand", t5_w3: "um", t5_w4: "ein", t5_w5: "kleines", t5_w6: "Feuer", t5_w7: "zu",
    t5_l1: "Wasser", t5_r1: "Kühlen", t5_l2: "Sand", t5_r2: "Ersticken", t5_l3: "Schaum", t5_r3: "Trennen",
    t5_sent: "Wasser auf Fett führt zu einer ___.", t5_qa2: "Explosion", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Löschpulver", t5_f2: "wird", t5_f3: "oft", t5_f4: "in", t5_f5: "Feuerlöschern", t5_f6: "verwendet.", t5_f7: "",
    t5_tk1: "Elektrische", t5_tk2: "Geräte", t5_tk3: "darf", t5_tk4: "man", t5_tk5: "nicht", t5_tk6: "mit", t5_tk7: "Wasser", t5_tk8: "löschen.",
    t5_bl1: "Löschen", t5_bl2: "Brennen", t5_i1: "Wasser", t5_i2: "Holz", t5_i3: "Sand", t5_i4: "Papier",
    t6_title: "Die Feuerwehr", t6_text: "Retten, Löschen, Bergen, Schützen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was ist keine Aufgabe der Feuerwehr?", t6_qa: "Brötchen backen", t6_qb: "Keller auspumpen", t6_qc: "Katzen retten", t6_qd: "Unfälle absichern",
    t6_w1: "Die", t6_w2: "Feuerwehr", t6_w3: "hilft", t6_w4: "auch", t6_w5: "bei", t6_w6: "schlimmen", t6_w7: "Unfällen.",
    t6_l1: "Helm", t6_r1: "Kopf", t6_l2: "Schlauch", t6_r2: "Wasser", t6_l3: "Leiter", t6_r3: "Höhe",
    t6_sent: "Feuerwehrleute tragen schützende ___.", t6_qa2: "Kleidung", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Es", t6_f2: "gibt", t6_f3: "Berufsfeuerwehren", t6_f4: "und", t6_f5: "Freiwillige", t6_f6: "Feuerwehren.", t6_f7: "",
    t6_tk1: "Ein", t6_tk2: "Atemschutzgerät", t6_tk3: "schützt", t6_tk4: "vor", t6_tk5: "dem", t6_tk6: "giftigen", t6_tk7: "Rauch.", t6_tk8: "",
    t6_bl1: "Ausrüstung", t6_bl2: "Aufgabe", t6_i1: "Axt", t6_i2: "Löschen", t6_i3: "Helm", t6_i4: "Retten",
    t7_title: "Zündhölzer", t7_text: "Umgang mit Zündhölzern muss gelernt sein.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "In welche Richtung reibt man das Zündholz?", t7_qa: "Vom Körper weg", t7_qb: "Zum Körper hin", t7_qc: "Gar nicht", t7_qd: "Egal",
    t7_w1: "Streiche", t7_w2: "das", t7_w3: "Zündholz", t7_w4: "immer", t7_w5: "vom", t7_w6: "Körper", t7_w7: "weg.",
    t7_l1: "Kopf", t7_r1: "Zündmasse", t7_l2: "Stab", t7_r2: "Holz", t7_l3: "Schachtel", t7_r3: "Reibfläche",
    t7_sent: "Die Reibfläche enthält ___.", t7_qa2: "Phosphor", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Zündhölzer", t7_f2: "sind", t7_f3: "kein", t7_f4: "Spielzeug", t7_f5: "für", t7_f6: "Kinder.", t7_f7: "",
    t7_tk1: "Halte", t7_tk2: "das", t7_tk3: "brennende", t7_tk4: "Holz", t7_tk5: "immer", t7_tk6: "über", t7_tk7: "eine", t7_tk8: "feuerfeste",
    t7_bl1: "Sicher", t7_bl2: "Gefährlich", t7_i1: "Wegstreichen", t7_i2: "Spielen", t7_i3: "Pusten", t7_i4: "Werfen",
    t8_title: "Brandschutz", t8_text: "Vorsorge ist besser als Löschen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wo hängen Rauchmelder am besten?", t8_qa: "An der Decke", t8_qb: "Auf dem Boden", t8_qc: "Hinter dem Schrank", t8_qd: "Im Keller",
    t8_w1: "Rauch", t8_w2: "steigt", t8_w3: "nach", t8_w4: "oben", t8_w5: "und", t8_w6: "ist", t8_w7: "giftig.",
    t8_l1: "Rauchmelder", t8_r1: "Warnen", t8_l2: "Feuerlöscher", t8_r2: "Löschen", t8_l3: "Fluchtweg", t8_r3: "Rennen",
    t8_sent: "Ein Rauchmelder warnt uns durch einen ___ Ton.", t8_qa2: "lauten", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Prüfe", t8_f2: "regelmäßig", t8_f3: "die", t8_f4: "Batterie", t8_f5: "deines", t8_f6: "Rauchmelders.", t8_f7: "",
    t8_tk1: "Im", t8_tk2: "Brandfall", t8_tk3: "sollte", t8_tk4: "man", t8_tk5: "nie", t8_tk6: "den", t8_tk7: "Aufzug", t8_tk8: "benutzen.",
    t8_bl1: "Helfen", t8_bl2: "Ignorieren", t8_i1: "Rauchmelder", t8_i2: "Feuer", t8_i3: "Treppe", t8_i4: "Panik",
  },
};

export const FEUER_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Das Feuer", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Feuerdreieck", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Notruf 112", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Die Kerze", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Löschmittel", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Die Feuerwehr", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Zündhölzer", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Brandschutz", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const GETREIDE_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Vom Korn zum Brot",
    t1_title: "Getreidearten", t1_text: "Weizen, Roggen, Gerste und Hafer.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Welches Getreide hat sehr lange Grannen?", t1_qa: "Gerste", t1_qb: "Weizen", t1_qc: "Mais", t1_qd: "Hafer",
    t1_w1: "Getreide", t1_w2: "gehört", t1_w3: "zur", t1_w4: "Familie", t1_w5: "der", t1_w6: "Süßgräser.", t1_w7: "",
    t1_l1: "Weizen", t1_r1: "Mehl", t1_l2: "Mais", t1_r2: "Kolben", t1_l3: "Hafer", t1_r3: "Müsli",
    t1_sent: "Roggen hat oft eine ___ Farbe.", t1_qa2: "bläuliche", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "meisten", t1_f3: "Brote", t1_f4: "werden", t1_f5: "aus", t1_f6: "Weizen", t1_f7: "gemacht.",
    t1_tk1: "Getreidekörner", t1_tk2: "enthalten", t1_tk3: "viel", t1_tk4: "Stärke", t1_tk5: "und", t1_tk6: "gesunde", t1_tk7: "Ballaststoffe.", t1_tk8: "",
    t1_bl1: "Getreide", t1_bl2: "Gemüse", t1_i1: "Roggen", t1_i2: "Möhre", t1_i3: "Gerste", t1_i4: "Erbse",
    t2_title: "Die Pflanze", t2_text: "Halm, Ähre und Wurzel.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was hält das Getreide fest im Boden?", t2_qa: "Die Wurzeln", t2_qb: "Der Halm", t2_qc: "Die Ähre", t2_qd: "Die Sonne",
    t2_w1: "Die", t2_w2: "Ähre", t2_w3: "trägt", t2_w4: "die", t2_w5: "schweren", t2_w6: "Getreidekörner.", t2_w7: "",
    t2_l1: "Wurzel", t2_r1: "Halt", t2_l2: "Halm", t2_r2: "Stütze", t2_l3: "Ähre", t2_r3: "Frucht",
    t2_sent: "Der hohle Stängel heißt ___.", t2_qa2: "Halm", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Knoten", t2_f2: "machen", t2_f3: "den", t2_f4: "dünnen", t2_f5: "Halm", t2_f6: "stabiler.", t2_f7: "",
    t2_tk1: "Getreide", t2_tk2: "braucht", t2_tk3: "viel", t2_tk4: "Licht", t2_tk5: "und", t2_tk6: "Wasser", t2_tk7: "zum", t2_tk8: "Wachsen.",
    t2_bl1: "Teil", t2_bl2: "Kein Teil", t2_i1: "Halm", t2_i2: "Blatt", t2_i3: "Wurzel", t2_i4: "Stein",
    t3_title: "Weizen", t3_text: "Die wichtigste Getreideart für weißes Mehl.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Hat Weizen Grannen?", t3_qa: "Meistens nicht", t3_qb: "Immer", t3_qc: "Nur im Winter", t3_qd: "Ja, sehr lange",
    t3_w1: "Der", t3_w2: "Weizen", t3_w3: "braucht", t3_w4: "einen", t3_w5: "sehr", t3_w6: "guten", t3_w7: "Boden.",
    t3_l1: "Weizen", t3_r1: "Goldgelb", t3_l2: "Mehl", t3_r2: "Weiß", t3_l3: "Brot", t3_r3: "Hell",
    t3_sent: "Weizenmehl nutzt man für ___.", t3_qa2: "Kuchen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Weizen", t3_f2: "ist", t3_f3: "das", t3_f4: "Getreide", t3_f5: "das", t3_f6: "am", t3_f7: "meisten",
    t3_tk1: "Die", t3_tk2: "Ähre", t3_tk3: "vom", t3_tk4: "Weizen", t3_tk5: "ist", t3_tk6: "dick", t3_tk7: "und", t3_tk8: "schwer.",
    t3_bl1: "Weizen", t3_bl2: "Mais", t3_i1: "Ähre", t3_i2: "Kolben", t3_i3: "Korn", t3_i4: "Körner",
    t4_title: "Die Ernte", t4_text: "Früher mit der Sense, heute mit Maschinen.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie heißt die große Erntemaschine?", t4_qa: "Mähdrescher", t4_qb: "Traktor", t4_qc: "Pflug", t4_qd: "Bagger",
    t4_w1: "Der", t4_w2: "Mähdrescher", t4_w3: "schneidet", t4_w4: "und", t4_w5: "drischt", t4_w6: "zugleich.", t4_w7: "",
    t4_l1: "Sense", t4_r1: "Hand", t4_l2: "Mähdrescher", t4_r2: "Maschine", t4_l3: "Traktor", t4_r3: "Zugkraft",
    t4_sent: "Die Ernte findet im ___ statt.", t4_qa2: "Sommer", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Das", t4_f2: "Getreide", t4_f3: "muss", t4_f4: "trocken", t4_f5: "sein", t4_f6: "bevor", t4_f7: "man",
    t4_tk1: "Früher", t4_tk2: "war", t4_tk3: "die", t4_tk4: "Ernte", t4_tk5: "eine", t4_tk6: "sehr", t4_tk7: "anstrengende", t4_tk8: "Arbeit.",
    t4_bl1: "Maschine", t4_bl2: "Werkzeug", t4_i1: "Mähdrescher", t4_i2: "Sense", t4_i3: "Traktor", t4_i4: "Sichel",
    t5_title: "Die Mühle", t5_text: "Vom Korn zum feinen Mehl.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was passiert in der Mühle?", t5_qa: "Mahlen", t5_qb: "Backen", t5_qc: "Säen", t5_qd: "Düngen",
    t5_w1: "Zwischen", t5_w2: "Mahlsteinen", t5_w3: "wird", t5_w4: "das", t5_w5: "Korn", t5_w6: "zerkleinert.", t5_w7: "",
    t5_l1: "Korn", t5_r1: "Ganz", t5_l2: "Schrot", t5_r2: "Grob", t5_l3: "Mehl", t5_r3: "Fein",
    t5_sent: "Früher nutzte man Wind- oder ___.", t5_qa2: "Wassermühlen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "In", t5_f2: "der", t5_f3: "Mühle", t5_f4: "entstehen", t5_f5: "verschiedene", t5_f6: "Mehltypen.", t5_f7: "",
    t5_tk1: "Vollkornmehl", t5_tk2: "ist", t5_tk3: "gesünder", t5_tk4: "da", t5_tk5: "die", t5_tk6: "ganze", t5_tk7: "Schale", t5_tk8: "mitgemahlen",
    t5_bl1: "Mühle", t5_bl2: "Bäckerei", t5_i1: "Mahlen", t5_i2: "Backen", t5_i3: "Sieben", t5_i4: "Kneten",
    t6_title: "Das Mehl", t6_text: "Es gibt verschiedene Mehltypen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was bedeutet eine hohe Typenzahl (z.B. 1050)?", t6_qa: "Mehr Mineralstoffe", t6_qb: "Mehr Zucker", t6_qc: "Weniger Korn", t6_qd: "Gar nichts",
    t6_w1: "Das", t6_w2: "Mehl", t6_w3: "wird", t6_w4: "in", t6_w5: "Säcke", t6_w6: "abgefüllt.", t6_w7: "",
    t6_l1: "405", t6_r1: "Weiß", t6_l2: "1050", t6_r2: "Dunkel", t6_l3: "Vollkorn", t6_r3: "Ganz",
    t6_sent: "Weißes Mehl hat die Type ___.", t6_qa2: "405", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Mehl", t6_f2: "muss", t6_f3: "trocken", t6_f4: "und", t6_f5: "kühl", t6_f6: "gelagert", t6_f7: "werden.",
    t6_tk1: "Feines", t6_tk2: "Mehl", t6_tk3: "staubt", t6_tk4: "sehr", t6_tk5: "stark", t6_tk6: "wenn", t6_tk7: "man", t6_tk8: "es",
    t6_bl1: "Mehl", t6_bl2: "Zucker", t6_i1: "Weiß", t6_i2: "Süß", t6_i3: "Staubig", t6_i4: "Klebrig",
    t7_title: "Brot backen", t7_text: "Mehl, Wasser, Salz und Hefe.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was lässt den Teig aufgehen?", t7_qa: "Hefe", t7_qb: "Pfeffer", t7_qc: "Öl", t7_qd: "Sand",
    t7_w1: "Der", t7_w2: "Bäcker", t7_w3: "knetet", t7_w4: "den", t7_w5: "Teig", t7_w6: "mit", t7_w7: "seinen",
    t7_l1: "Mehl", t7_r1: "Basis", t7_l2: "Hefe", t7_r2: "Triebmittel", t7_l3: "Ofen", t7_r3: "Hitze",
    t7_sent: "Der Teig muss lange ___.", t7_qa2: "ruhen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Frisches", t7_f2: "Brot", t7_f3: "duftet", t7_f4: "herrlich", t7_f5: "in", t7_f6: "der", t7_f7: "ganzen",
    t7_tk1: "Vollkornbrot", t7_tk2: "macht", t7_tk3: "länger", t7_tk4: "satt", t7_tk5: "als", t7_tk6: "ein", t7_tk7: "weißes", t7_tk8: "Brötchen.",
    t7_bl1: "Zutat", t7_bl2: "Gerät", t7_i1: "Hefe", t7_i2: "Ofen", t7_i3: "Wasser", t7_i4: "Blech",
    t8_title: "Getreide-Check", t8_text: "Bist du ein Getreide-Profi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Welches Getreide wächst im Wasser (Reisfelder)?", t8_qa: "Reis", t8_qb: "Weizen", t8_qc: "Gerste", t8_qd: "Hafer",
    t8_w1: "Wir", t8_w2: "essen", t8_w3: "jeden", t8_w4: "Tag", t8_w5: "Produkte", t8_w6: "aus", t8_w7: "Getreide.",
    t8_l1: "Brot", t8_r1: "Backen", t8_l2: "Nudeln", t8_r2: "Kochen", t8_l3: "Müsli", t8_r3: "Essen",
    t8_sent: "Getreide ist unser ___.", t8_qa2: "Grundnahrungsmittel", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wusstest", t8_f2: "du", t8_f3: "dass", t8_f4: "auch", t8_f5: "Mais", t8_f6: "ein", t8_f7: "Getreide",
    t8_tk1: "Getreidefelder", t8_tk2: "prägen", t8_tk3: "das", t8_tk4: "Bild", t8_tk5: "unserer", t8_tk6: "Landschaft", t8_tk7: "im", t8_tk8: "Sommer.",
    t8_bl1: "Getreide", t8_bl2: "Obst", t8_i1: "Weizen", t8_i2: "Apfel", t8_i3: "Roggen", t8_i4: "Birne",
  },
};

export const GETREIDE_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Getreidearten", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die Pflanze", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Weizen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Die Ernte", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Die Mühle", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Das Mehl", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Brot backen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Getreide-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const WIESE_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Leben auf der Wiese",
    t1_title: "Wiesenschichten", t1_text: "Auch die Wiese hat verschiedene Stockwerke.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wo leben die meisten Insekten?", t1_qa: "Blütenschicht", t1_qb: "Wurzelschicht", t1_qc: "Im Keller", t1_qd: "In den Wolken",
    t1_w1: "Die", t1_w2: "Wiese", t1_w3: "bietet", t1_w4: "vielen", t1_w5: "Tieren", t1_w6: "ein", t1_w7: "Zuhause.",
    t1_l1: "Blüte", t1_r1: "Oben", t1_l2: "Halm", t1_r2: "Mitte", t1_l3: "Erde", t1_r3: "Unten",
    t1_sent: "Insekten suchen Nektar in der ___.", t1_qa2: "Blütenschicht", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Gras", t1_f2: "bildet", t1_f3: "die", t1_f4: "dichte", t1_f5: "Blattschicht", t1_f6: "der", t1_f7: "Wiese.",
    t1_tk1: "Spinnen", t1_tk2: "bauen", t1_tk3: "ihre", t1_tk4: "Netze", t1_tk5: "zwischen", t1_tk6: "den", t1_tk7: "hohen", t1_tk8: "Gräsern.",
    t1_bl1: "Schicht", t1_bl2: "Tier", t1_i1: "Blüte", t1_i2: "Biene", t1_i3: "Halm", t1_i4: "Heuschrecke",
    t2_title: "Die Biene", t2_text: "Bienen sind wichtig für die Bestäubung.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was sammeln Bienen in den Blüten?", t2_qa: "Nektar und Pollen", t2_qb: "Wasser", t2_qc: "Sand", t2_qd: "Blätter",
    t2_w1: "Die", t2_w2: "Königin", t2_w3: "ist", t2_w4: "die", t2_w5: "wichtigste", t2_w6: "Biene", t2_w7: "im",
    t2_l1: "Königin", t2_r1: "Eier", t2_l2: "Drohne", t2_r2: "Männchen", t2_l3: "Arbeiterin", t2_r3: "Fleißig",
    t2_sent: "Bienen leben in einem ___.", t2_qa2: "Bienenstock", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Bienen", t2_f2: "tanzten", t2_f3: "um", t2_f4: "anderen", t2_f5: "den", t2_f6: "Weg", t2_f7: "zu",
    t2_tk1: "Ohne", t2_tk2: "Bienen", t2_tk3: "gäbe", t2_tk4: "es", t2_tk5: "viel", t2_tk6: "weniger", t2_tk7: "Obst", t2_tk8: "an",
    t2_bl1: "Biene", t2_bl2: "Blume", t2_i1: "Honig", t2_i2: "Nektar", t2_i3: "Wachs", t2_i4: "Pollen",
    t3_title: "Schmetterling", t3_text: "Vom Ei über die Raupe zum Falter.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wie nennt man die Verwandlung?", t3_qa: "Metamorphose", t3_qb: "Wachsen", t3_qc: "Schlafen", t3_qd: "Fliegen",
    t3_w1: "Ein", t3_w2: "Schmetterling", t3_w3: "rollt", t3_w4: "seinen", t3_w5: "Saugrüssel", t3_w6: "beim", t3_w7: "Trinken",
    t3_l1: "Ei", t3_r1: "Start", t3_l2: "Raupe", t3_r2: "Fressen", t3_l3: "Puppe", t3_r3: "Ruhe",
    t3_sent: "Die Raupe spinnt sich in einen ___ ein.", t3_qa2: "Kokon", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Der", t3_f2: "Zitronenfalter", t3_f3: "gehört", t3_f4: "zu", t3_f5: "den", t3_f6: "ersten", t3_f7: "im",
    t3_tk1: "Schmetterlingsflügel", t3_tk2: "sind", t3_tk3: "mit", t3_tk4: "vielen", t3_tk5: "feinen", t3_tk6: "Schuppen", t3_tk7: "bedeckt.", t3_tk8: "",
    t3_bl1: "Stadium", t3_bl2: "Tier", t3_i1: "Raupe", t3_i2: "Puppe", t3_i3: "Falter", t3_i4: "Ei",
    t4_title: "Löwenzahn", t4_text: "Zuerst gelb, dann eine Pusteblume.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie verbreitet der Löwenzahn seine Samen?", t4_qa: "Durch den Wind", t4_qb: "Durch Wasser", t4_qc: "Gar nicht", t4_qd: "Durch Ameisen",
    t4_w1: "Löwenzahn", t4_w2: "hat", t4_w3: "eine", t4_w4: "sehr", t4_w5: "lange", t4_w6: "Pfahlwurzel.", t4_w7: "",
    t4_l1: "Gelb", t4_r1: "Blüte", t4_l2: "Weiß", t4_r2: "Samen", t4_l3: "Grün", t4_r3: "Blatt",
    t4_sent: "Der Stängel enthält weißen ___.", t4_qa2: "Milchsaft", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Die", t4_f2: "Samen", t4_f3: "fliegen", t4_f4: "wie", t4_f5: "kleine", t4_f6: "Fallschirme", t4_f7: "davon.",
    t4_tk1: "Löwenzahn", t4_tk2: "kann", t4_tk3: "sogar", t4_tk4: "durch", t4_tk5: "harten", t4_tk6: "Asphalt", t4_tk7: "wachsen.", t4_tk8: "",
    t4_bl1: "Blume", t4_bl2: "Pusteblume", t4_i1: "Gelb", t4_i2: "Weiß", t4_i3: "Grün", t4_i4: "Samen",
    t5_title: "Der Maulwurf", t5_text: "Ein blinder Tunnelgräber unter der Wiese.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was fressen Maulwürfe?", t5_qa: "Regenwürmer", t5_qb: "Karotten", t5_qc: "Gras", t5_qd: "Salat",
    t5_w1: "Ein", t5_w2: "Maulwurfshügel", t5_w3: "besteht", t5_w4: "aus", t5_w5: "frisch", t5_w6: "ausgegrabener", t5_w7: "Erde.",
    t5_l1: "Tunnel", t5_r1: "Weg", t5_l2: "Hügel", t5_r2: "Ausgang", t5_l3: "Fell", t5_r3: "Samt",
    t5_sent: "Maulwürfe haben schaufelartige ___.", t5_qa2: "Vorderpfoten", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Maulwürfe", t5_f2: "stehen", t5_f3: "in", t5_f4: "Deutschland", t5_f5: "unter", t5_f6: "Naturschutz.", t5_f7: "",
    t5_tk1: "Der", t5_tk2: "Maulwurf", t5_tk3: "findet", t5_tk4: "seine", t5_tk5: "Beute", t5_tk6: "mit", t5_tk7: "dem", t5_tk8: "Geruchssinn.",
    t5_bl1: "Nahrung", t5_bl2: "Feind", t5_i1: "Wurm", t5_i2: "Bussard", t5_i3: "Käfer", t5_i4: "Fuchs",
    t6_title: "Wiesenblumen", t6_text: "Gänseblümchen, Klee und Glockenblumen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welche Blume sieht aus wie eine kleine Sonne?", t6_qa: "Gänseblümchen", t6_qb: "Klee", t6_qc: "Distel", t6_qd: "Gras",
    t6_w1: "Wiesenblumen", t6_w2: "brauchen", t6_w3: "Licht", t6_w4: "um", t6_w5: "zu", t6_w6: "wachsen.", t6_w7: "",
    t6_l1: "Kleeblatt", t6_r1: "Drei", t6_l2: "Glockenblume", t6_r2: "Blau", t6_l3: "Distel", t6_r3: "Stachelig",
    t6_sent: "Bunte Blumen locken ___ an.", t6_qa2: "Insekten", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Frisch", t6_f2: "gemähtes", t6_f3: "Gras", t6_f4: "duftet", t6_f5: "sehr", t6_f6: "gut.", t6_f7: "",
    t6_tk1: "Auf", t6_tk2: "einer", t6_tk3: "Naturwiese", t6_tk4: "wachsen", t6_tk5: "viele", t6_tk6: "verschiedene", t6_tk7: "Pflanzenarten.", t6_tk8: "",
    t6_bl1: "Blume", t6_bl2: "Farbe", t6_i1: "Klee", t6_i2: "Grün", t6_i3: "Distel", t6_i4: "Blau",
    t7_title: "Heuschrecke", t7_text: "Große Sprünge im hohen Gras.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Womit hört die Heuschrecke?", t7_qa: "Mit den Beinen", t7_qb: "Mit Ohren am Kopf", t7_qc: "Gar nicht", t7_qd: "Mit dem Bauch",
    t7_w1: "Grüne", t7_w2: "Heuschrecken", t7_w3: "sind", t7_w4: "im", t7_w5: "Gras", t7_w6: "gut", t7_w7: "getarnt.",
    t7_l1: "Beine", t7_r1: "Springen", t7_l2: "Flügel", t7_r2: "Zirpen", t7_l3: "Fühler", t7_r3: "Tasten",
    t7_sent: "Heuschrecken machen Musik durch ___.", t7_qa2: "Reiben", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Manche", t7_f2: "Arten", t7_f3: "können", t7_f4: "sehr", t7_f5: "weit", t7_f6: "fliegen.", t7_f7: "",
    t7_tk1: "Heuschrecken", t7_tk2: "fressen", t7_tk3: "hauptsächlich", t7_tk4: "Blätter", t7_tk5: "und", t7_tk6: "Gräser.", t7_tk7: "", t7_tk8: "",
    t7_bl1: "Insekt", t7_bl2: "Vogel", t7_i1: "Heuschrecke", t7_i2: "Amsel", t7_i3: "Biene", t7_i4: "Spatz",
    t8_title: "Wiesen-Check", t8_text: "Wissenstest Wiese.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer mäht die Wiese oft?", t8_qa: "Bauer", t8_qb: "Förster", t8_qc: "Polizist", t8_qd: "Lehrer",
    t8_w1: "Wir", t8_w2: "sollten", t8_w3: "Wiesenblumen", t8_w4: "lieber", t8_w5: "stehen", t8_w6: "lassen.", t8_w7: "",
    t8_l1: "Heu", t8_r1: "Trocken", t8_l2: "Gras", t8_r2: "Frisch", t8_l3: "Silo", t8_r3: "Futter",
    t8_sent: "Die Wiese ist ein wertvoller ___.", t8_qa2: "Lebensraum", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Viele", t8_f2: "Heilkräuter", t8_f3: "wachsen", t8_f4: "wild", t8_f5: "auf", t8_f6: "der", t8_f7: "Wiese.",
    t8_tk1: "Insektensterben", t8_tk2: "bedroht", t8_tk3: "das", t8_tk4: "Gleichgewicht", t8_tk5: "auf", t8_tk6: "unseren", t8_tk7: "Wiesen.", t8_tk8: "",
    t8_bl1: "Natur", t8_bl2: "Stadt", t8_i1: "Gras", t8_i2: "Asphalt", t8_i3: "Blumen", t8_i4: "Häuser",
  },
};

export const WIESE_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Wiesenschichten", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die Biene", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Schmetterling", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Löwenzahn", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Der Maulwurf", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wiesenblumen", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Heuschrecke", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wiesen-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const KOERPER_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Der menschliche Körper",
    t1_title: "Das Skelett", t1_text: "Das Skelett gibt unserem Körper Halt.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie viele Knochen hat ein Erwachsener?", t1_qa: "Etwa 206", t1_qb: "Genau 100", t1_qc: "Über 500", t1_qd: "Nur 50",
    t1_w1: "Das", t1_w2: "Skelett", t1_w3: "ist", t1_w4: "wie", t1_w5: "ein", t1_w6: "Gerüst", t1_w7: "aus",
    t1_l1: "Schädel", t1_r1: "Gehirn", t1_l2: "Rippen", t1_r2: "Herz", t1_l3: "Becken", t1_r3: "Hüfte",
    t1_sent: "Knochen schützen unsere inneren ___.", t1_qa2: "Organe", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Knochen", t1_f2: "bestehen", t1_f3: "aus", t1_f4: "hartem", t1_f5: "Kalk", t1_f6: "und", t1_f7: "Knochenmark.",
    t1_tk1: "Säuglinge", t1_tk2: "haben", t1_tk3: "noch", t1_tk4: "viel", t1_tk5: "mehr", t1_tk6: "Knochen", t1_tk7: "als", t1_tk8: "Erwachsene.",
    t1_bl1: "Kopf", t1_bl2: "Rumpf", t1_i1: "Schädel", t1_i2: "Rippe", t1_i3: "Unterkiefer", t1_i4: "Wirbelsäule",
    t2_title: "Wirbelsäule", t2_text: "Die Wirbelsäule hält uns aufrecht.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Aus wie vielen Wirbeln besteht sie?", t2_qa: "33 bis 34", t2_qb: "Genau 10", t2_qc: "Über 100", t2_qd: "Nur 5",
    t2_w1: "Die", t2_w2: "Wirbelsäule", t2_w3: "ist", t2_w4: "die", t2_w5: "Achse", t2_w6: "unseres", t2_w7: "Körpers.",
    t2_l1: "Hals", t2_r1: "Oben", t2_l2: "Brust", t2_r2: "Mitte", t2_l3: "Lende", t2_r3: "Unten",
    t2_sent: "Zwischen den Wirbeln liegen die ___.", t2_qa2: "Bandscheiben", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Bandscheiben", t2_f2: "wirken", t2_f3: "wie", t2_f4: "Stoßdämpfer", t2_f5: "beim", t2_f6: "Springen.", t2_f7: "",
    t2_tk1: "Eine", t2_tk2: "gesunde", t2_tk3: "Haltung", t2_tk4: "ist", t2_tk5: "wichtig", t2_tk6: "für", t2_tk7: "den", t2_tk8: "Rücken.",
    t2_bl1: "Teil", t2_bl2: "Kein Teil", t2_i1: "Wirbel", t2_i2: "Bandscheibe", t2_i3: "Rückenmark", t2_i4: "Magen",
    t3_title: "Die Gelenke", t3_text: "Gelenke machen uns beweglich.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welches Gelenk kann man in alle Richtungen drehen?", t3_qa: "Schulter (Kugelgelenk)", t3_qb: "Knie (Scharniergelenk)", t3_qc: "Finger", t3_qd: "Ellbogen",
    t3_w1: "Gelenkschmiere", t3_w2: "sorgt", t3_w3: "dafür", t3_w4: "dass", t3_w5: "alles", t3_w6: "gut", t3_w7: "rutscht.",
    t3_l1: "Kugel", t3_r1: "Schulter", t3_l2: "Scharnier", t3_r2: "Knie", t3_l3: "Sattel", t3_r3: "Daumen",
    t3_sent: "Das Knie ist ein ___.", t3_qa2: "Scharniergelenk", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Ohne", t3_f2: "Gelenke", t3_f3: "wären", t3_f4: "wir", t3_f5: "steif", t3_f6: "wie", t3_f7: "eine",
    t3_tk1: "Bänder", t3_tk2: "und", t3_tk3: "Sehnen", t3_tk4: "halten", t3_tk5: "die", t3_tk6: "Gelenke", t3_tk7: "zusammen.", t3_tk8: "",
    t3_bl1: "Gelenk", t3_bl2: "Knochen", t3_i1: "Schulter", t3_i2: "Rippe", t3_i3: "Knie", t3_i4: "Becken",
    t4_title: "Die Muskeln", t4_text: "Muskeln bewegen unsere Knochen.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie viele Muskeln hat ein Mensch?", t4_qa: "Über 600", t4_qb: "Genau 100", t4_qc: "Nur 20", t4_qd: "Über 2000",
    t4_w1: "Wenn", t4_w2: "ein", t4_w3: "Muskel", t4_w4: "zieht", t4_w5: "muss", t4_w6: "der", t4_w7: "andere",
    t4_l1: "Bizeps", t4_r1: "Arm", t4_l2: "Herz", t4_r2: "Pumpen", t4_l3: "Zwerchfell", t4_r3: "Atmen",
    t4_sent: "Muskeln arbeiten immer paarweise als ___.", t4_qa2: "Gegenspieler", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Sport", t4_f2: "stärkt", t4_f3: "unsere", t4_f4: "Muskeln", t4_f5: "und", t4_f6: "macht", t4_f7: "uns",
    t4_tk1: "Das", t4_tk2: "Herz", t4_tk3: "ist", t4_tk4: "der", t4_tk5: "wichtigste", t4_tk6: "Muskel", t4_tk7: "im", t4_tk8: "Körper.",
    t4_bl1: "Willkürlich", t4_bl2: "Unwillkürlich", t4_i1: "Armmuskel", t4_i2: "Herz", t4_i3: "Beinmuskel", t4_i4: "Magen",
    t5_title: "Das Herz", t5_text: "Die Pumpe unseres Lebens.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wie oft schlägt das Herz pro Minute (ruhend)?", t5_qa: "Etwa 70-80 Mal", t5_qb: "Genau 200 Mal", t5_qc: "Nur 10 Mal", t5_qd: "500 Mal",
    t5_w1: "Das", t5_w2: "Herz", t5_w3: "ist", t5_w4: "ungefähr", t5_w5: "so", t5_w6: "groß", t5_w7: "wie",
    t5_l1: "Aorta", t5_r1: "Groß", t5_l2: "Vene", t5_r2: "Zum Herz", t5_l3: "Kapillare", t5_r3: "Winzig",
    t5_sent: "Das Herz pumpt das ___ durch den Körper.", t5_qa2: "Blut", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Blut", t5_f2: "transportiert", t5_f3: "Sauerstoff", t5_f4: "zu", t5_f5: "allen", t5_f6: "Zellen.", t5_f7: "",
    t5_tk1: "Bei", t5_tk2: "Anstrengung", t5_tk3: "schlägt", t5_tk4: "das", t5_tk5: "Herz", t5_tk6: "viel", t5_tk7: "schneller.", t5_tk8: "",
    t5_bl1: "Blutgefäß", t5_bl2: "Organ", t5_i1: "Ader", t5_i2: "Herz", t5_i3: "Vene", t5_i4: "Lunge",
    t6_title: "Die Lunge", t6_text: "Atmen ist überlebenswichtig.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welches Gas atmen wir ein?", t6_qa: "Sauerstoff", t6_qb: "Kohlendioxid", t6_qc: "Stickstoff", t6_qd: "Helium",
    t6_w1: "Die", t6_w2: "Lunge", t6_w3: "besteht", t6_w4: "aus", t6_w5: "zwei", t6_w6: "Lungenflügeln.", t6_w7: "",
    t6_l1: "Luftröhre", t6_r1: "Hals", t6_l2: "Bronchien", t6_r2: "Zweige", t6_l3: "Lungenbläschen", t6_r3: "Gasaustausch",
    t6_sent: "In der Lunge wird das Blut mit ___ angereichert.", t6_qa2: "Sauerstoff", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Rauchen", t6_f2: "ist", t6_f3: "sehr", t6_f4: "schädlich", t6_f5: "für", t6_f6: "die", t6_f7: "Lunge.",
    t6_tk1: "Zwerchfellatmung", t6_tk2: "ist", t6_tk3: "die", t6_tk4: "tiefste", t6_tk5: "Art", t6_tk6: "zu", t6_tk7: "atmen.", t6_tk8: "",
    t6_bl1: "Einatmen", t6_bl2: "Ausatmen", t6_i1: "Sauerstoff", t6_i2: "Kohlendioxid", t6_i3: "Luft", t6_i4: "Abgase",
    t7_title: "Die Verdauung", t7_text: "Vom Mund bis zum Po.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wo wird die Nahrung zerkleinert?", t7_qa: "Im Mund", t7_qb: "Im Darm", t7_qc: "In der Leber", t7_qd: "In der Lunge",
    t7_w1: "Die", t7_w2: "Nahrung", t7_w3: "wandert", t7_w4: "durch", t7_w5: "die", t7_w6: "Speiseröhre.", t7_w7: "",
    t7_l1: "Magen", t7_r1: "Brei", t7_l2: "Dünndarm", t7_r2: "Nährstoffe", t7_l3: "Dickdarm", t7_r3: "Wasserentzug",
    t7_sent: "Der Magen zersetzt das Essen mit ___.", t7_qa2: "Magensäure", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Gesunde", t7_f2: "Ernährung", t7_f3: "hilft", t7_f4: "unserem", t7_f5: "Bauch.", t7_f6: "", t7_f7: "",
    t7_tk1: "Der", t7_tk2: "Darm", t7_tk3: "eines", t7_tk4: "Erwachsenen", t7_tk5: "ist", t7_tk6: "mehrere", t7_tk7: "Meter", t7_tk8: "lang.",
    t7_bl1: "Organ", t7_bl2: "Zutat", t7_i1: "Magen", t7_i2: "Apfel", t7_i3: "Darm", t7_i4: "Brot",
    t8_title: "Körper-Check", t8_text: "Alles fit?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was schützt unseren Körper von außen?", t8_qa: "Die Haut", t8_qb: "Die Knochen", t8_qc: "Die Haare", t8_qd: "Die Kleidung",
    t8_w1: "Wir", t8_w2: "müssen", t8_w3: "gut", t8_w4: "auf", t8_w5: "unseren", t8_w6: "Körper", t8_w7: "aufpassen.",
    t8_l1: "Schlaf", t8_r1: "Erholung", t8_l2: "Essen", t8_r2: "Energie", t8_l3: "Sport", t8_r3: "Kraft",
    t8_sent: "Trinken ist wichtig für alle ___.", t8_qa2: "Körperzellen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Händewaschen", t8_f2: "schützt", t8_f3: "vor", t8_f4: "vielen", t8_f5: "Krankheitserregern.", t8_f6: "", t8_f7: "",
    t8_tk1: "Regelmäßige", t8_tk2: "Bewegung", t8_tk3: "stärkt", t8_tk4: "das", t8_tk5: "Herz", t8_tk6: "und", t8_tk7: "die", t8_tk8: "Abwehrkräfte.",
    t8_bl1: "Gesund", t8_bl2: "Ungesund", t8_i1: "Obst", t8_i2: "Zucker", t8_i3: "Sport", t8_i4: "Faulenzen",
  },
};

export const KOERPER_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Das Skelett", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wirbelsäule", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Die Gelenke", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Die Muskeln", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Das Herz", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Die Lunge", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Die Verdauung", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Körper-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const MEDIEN_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Medien in unserem Alltag",
    t1_title: "Printmedien", t1_text: "Zeitungen, Bücher und Zeitschriften.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist ein Printmedium?", t1_qa: "Zeitung", t1_qb: "Radio", t1_qc: "Fernsehen", t1_qd: "Internet",
    t1_w1: "Früher", t1_w2: "gab", t1_w3: "es", t1_w4: "nur", t1_w5: "gedruckte", t1_w6: "Nachrichten.", t1_w7: "",
    t1_l1: "Tageszeitung", t1_r1: "Aktuell", t1_l2: "Sachbuch", t1_r2: "Lernen", t1_l3: "Comic", t1_r3: "Spaß",
    t1_sent: "Bücher bestehen meist aus ___.", t1_qa2: "Papier", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Journalisten", t1_f2: "schreiben", t1_f3: "Artikel", t1_f4: "für", t1_f5: "die", t1_f6: "Zeitung.", t1_f7: "",
    t1_tk1: "Eine", t1_tk2: "Bibliothek", t1_tk3: "ist", t1_tk4: "ein", t1_tk5: "Ort", t1_tk6: "voller", t1_tk7: "Bücher.", t1_tk8: "",
    t1_bl1: "Print", t1_bl2: "Digital", t1_i1: "Zeitschrift", t1_i2: "Website", t1_i3: "Buch", t1_i4: "App",
    t2_title: "Das Fernsehen", t2_text: "Unterhaltung und Information auf dem Bildschirm.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was ist eine Nachrichtensendung?", t2_qa: "Tagesschau", t2_qb: "Spielfilm", t2_qc: "Werbung", t2_qd: "Cartoon",
    t2_w1: "Schau", t2_w2: "nicht", t2_w3: "zu", t2_w4: "lange", t2_w5: "in", t2_w6: "die", t2_w7: "Röhre.",
    t2_l1: "Spielfilm", t2_r1: "Fiction", t2_l2: "Doku", t2_r2: "Wissen", t2_l3: "Sport", t2_r3: "Wettkampf",
    t2_sent: "Fernsehen kann uns auch ___.", t2_qa2: "informieren", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Es", t2_f2: "gibt", t2_f3: "viele", t2_f4: "Sender", t2_f5: "für", t2_f6: "Kinder.", t2_f7: "",
    t2_tk1: "Das", t2_tk2: "Programm", t2_tk3: "wird", t2_tk4: "von", t2_tk5: "vielen", t2_tk6: "Menschen", t2_tk7: "geplant.", t2_tk8: "",
    t2_bl1: "TV", t2_bl2: "Radio", t2_i1: "Bild", t2_i2: "Ton", t2_i3: "Kamera", t2_i4: "Mikrofon",
    t3_title: "Internet-Regeln", t3_text: "Sicher im Netz unterwegs sein.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Darf man seinen echten Namen Fremden sagen?", t3_qa: "Nein", t3_qb: "Ja", t3_qc: "Nur montags", t3_qd: "Vielleicht",
    t3_w1: "Frag", t3_w2: "deine", t3_w3: "Eltern", t3_w4: "bevor", t3_w5: "du", t3_w6: "Apps", t3_w7: "lädst.",
    t3_l1: "Nickname", t3_r1: "Spitzname", t3_l2: "Passwort", t3_r2: "Geheim", t3_l3: "Link", t3_r3: "Verbindung",
    t3_sent: "Passwörter darf man nie ___.", t3_qa2: "verraten", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Das", t3_f2: "Internet", t3_f3: "vergisst", t3_f4: "leider", t3_f5: "gar", t3_f6: "nichts.", t3_f7: "",
    t3_tk1: "Vorsicht", t3_tk2: "beim", t3_tk3: "Anklicken", t3_tk4: "von", t3_tk5: "unbekannten", t3_tk6: "Werbebannern.", t3_tk7: "", t3_tk8: "",
    t3_bl1: "Sicher", t3_bl2: "Unsicher", t3_i1: "Geheimes Passwort", t3_i2: "Adresse teilen", t3_i3: "Eltern fragen", t3_i4: "Fremden antworten",
    t4_title: "Werbung", t4_text: "Werbung will uns zum Kaufen verführen.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist das Ziel von Werbung?", t4_qa: "Verkaufen", t4_qb: "Schenken", t4_qc: "Lügen", t4_qd: "Spielen",
    t4_w1: "Werbung", t4_w2: "findet", t4_w3: "man", t4_w4: "überall", t4_w5: "im", t4_w6: "Alltag.", t4_w7: "",
    t4_l1: "Plakat", t4_r1: "Straße", t4_l2: "Spot", t4_r2: "Fernsehen", t4_l3: "Anzeige", t4_r3: "Zeitung",
    t4_sent: "Werbung ist oft sehr ___.", t4_qa2: "bunt", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Nicht", t4_f2: "alles", t4_f3: "in", t4_f4: "der", t4_f5: "Werbung", t4_f6: "ist", t4_f7: "wahr.",
    t4_tk1: "Werbung", t4_tk2: "nutzt", t4_tk3: "oft", t4_tk4: "lustige", t4_tk5: "Lieder", t4_tk6: "als", t4_tk7: "Ohrwurm.", t4_tk8: "",
    t4_bl1: "Werbung", t4_bl2: "Information", t4_i1: "Kauf mich", t4_i2: "Wetterbericht", t4_i3: "Sonderangebot", t4_i4: "Fahrplan",
    t5_title: "Das Smartphone", t5_text: "Ein kleiner Computer für die Hosentasche.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was kann ein Smartphone nicht?", t5_qa: "Wäsche waschen", t5_qb: "Telefonieren", t5_qc: "Fotografieren", t5_qd: "Spielen",
    t5_w1: "Ein", t5_w2: "Smartphone", t5_w3: "braucht", t5_w4: "immer", t5_w5: "einen", t5_w6: "Akku.", t5_w7: "",
    t5_l1: "Display", t5_r1: "Anzeige", t5_l2: "Kamera", t5_r2: "Fotos", t5_l3: "Akku", t5_r3: "Strom",
    t5_sent: "Apps sind kleine ___.", t5_qa2: "Programme", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Man", t5_f2: "kann", t5_f3: "damit", t5_f4: "überall", t5_f5: "Nachrichten", t5_f6: "verschicken.", t5_f7: "",
    t5_tk1: "Smartphones", t5_tk2: "sollte", t5_tk3: "man", t5_tk4: "nicht", t5_tk5: "zu", t5_tk6: "oft", t5_tk7: "benutzen.", t5_tk8: "",
    t5_bl1: "Handy", t5_bl2: "Laptop", t5_i1: "Touchscreen", t5_i2: "Tastatur", t5_i3: "Mobil", t5_i4: "Schwer",
    t6_title: "Brief schreiben", t6_text: "Eine klassische Art der Nachricht.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was muss auf den Umschlag?", t6_qa: "Adresse und Briefmarke", t6_qb: "Ein Bild", t6_qc: "Nichts", t6_qd: "Nur der Name",
    t6_w1: "Schreibe", t6_w2: "deinen", t6_w3: "Namen", t6_w4: "als", t6_w5: "Absender", t6_w6: "drauf.", t6_w7: "",
    t6_l1: "Absender", t6_r1: "Ich", t6_l2: "Empfänger", t6_r2: "Du", t6_l3: "Postleitzahl", t6_r3: "Ort",
    t6_sent: "Die Post bringt den ___.", t6_qa2: "Brief", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Ein", t6_f2: "echter", t6_f3: "Brief", t6_f4: "ist", t6_f5: "etwas", t6_f6: "Besonderes.", t6_f7: "",
    t6_tk1: "Man", t6_tk2: "wirft", t6_tk3: "den", t6_tk4: "fertigen", t6_tk5: "Brief", t6_tk6: "in", t6_tk7: "den", t6_tk8: "gelben",
    t6_bl1: "Post", t6_bl2: "E-Mail", t6_i1: "Briefmarke", t6_i2: "Anhang", t6_i3: "Papier", t6_i4: "Computer",
    t7_title: "Computer", t7_text: "Monitor, Maus und Tastatur.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wie heißt das Gehirn des Computers?", t7_qa: "Prozessor", t7_qb: "Bildschirm", t7_qc: "Maus", t7_qd: "Kabel",
    t7_w1: "Mit", t7_w2: "der", t7_w3: "Maus", t7_w4: "kannst", t7_w5: "du", t7_w6: "Dinge", t7_w7: "anklicken.",
    t7_l1: "Monitor", t7_r1: "Sehen", t7_l2: "Tastatur", t7_r2: "Schreiben", t7_l3: "Maus", t7_r3: "Steuern",
    t7_sent: "Daten werden auf der ___ gespeichert.", t7_qa2: "Festplatte", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Ein", t7_f2: "Computer", t7_f3: "hilft", t7_f4: "bei", t7_f5: "vielen", t7_f6: "Aufgaben.", t7_f7: "",
    t7_tk1: "Informatik", t7_tk2: "ist", t7_tk3: "die", t7_tk4: "Lehre", t7_tk5: "von", t7_tk6: "der", t7_tk7: "Datenverarbeitung.", t7_tk8: "",
    t7_bl1: "Hardware", t7_bl2: "Software", t7_i1: "Monitor", t7_i2: "Windows", t7_i3: "Tastatur", t7_i4: "App",
    t8_title: "Medien-Check", t8_text: "Kennst du dich aus?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist ein Medium?", t8_qa: "Informationsmittel", t8_qb: "Ein Kleid", t8_qc: "Ein Tier", t8_qd: "Ein Baum",
    t8_w1: "Wir", t8_w2: "nutzen", t8_w3: "Medien", t8_w4: "um", t8_w5: "uns", t8_w6: "zu", t8_w7: "informieren.",
    t8_l1: "Radio", t8_r1: "Hören", t8_l2: "Internet", t8_r2: "Surfen", t8_l3: "Zeitung", t8_r3: "Lesen",
    t8_sent: "Medien prägen unseren ___.", t8_qa2: "Alltag", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Ein", t8_f2: "bewusster", t8_f3: "Umgang", t8_f4: "mit", t8_f5: "Medien", t8_f6: "ist", t8_f7: "wichtig.",
    t8_tk1: "Glauben", t8_tk2: "Sie", t8_tk3: "nicht", t8_tk4: "alles", t8_tk5: "was", t8_tk6: "Sie", t8_tk7: "im", t8_tk8: "Internet",
    t8_bl1: "Digital", t8_bl2: "Analog", t8_i1: "Internet", t8_i2: "Buch", t8_i3: "Handy", t8_i4: "Zeitung",
  },
};

export const MEDIEN_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Printmedien", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Das Fernsehen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Internet-Regeln", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Werbung", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Das Smartphone", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Brief schreiben", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Computer", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Medien-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const KARTEN_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Karten & Orientierung",
    t1_title: "Der Kompass", t1_text: "Norden, Süden, Osten, Westen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "In welche Richtung zeigt die Nadel immer?", t1_qa: "Norden", t1_qb: "Süden", t1_qc: "Osten", t1_qd: "Westen",
    t1_w1: "Nie", t1_w2: "Ohne", t1_w3: "Seife", t1_w4: "Waschen", t1_w5: "hilft", t1_w6: "beim", t1_w7: "Merken.",
    t1_l1: "Norden", t1_r1: "Oben", t1_l2: "Osten", t1_r2: "Rechts", t1_l3: "Süden", t1_r3: "Unten",
    t1_sent: "Die Himmelsrichtungen bilden eine ___.", t1_qa2: "Windrose", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "magnetische", t1_f3: "Nadel", t1_f4: "richtet", t1_f5: "sich", t1_f6: "aus.", t1_f7: "",
    t1_tk1: "Im", t1_tk2: "Osten", t1_tk3: "geht", t1_tk4: "die", t1_tk5: "Sonne", t1_tk6: "auf.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Richtung", t1_bl2: "Zahl", t1_i1: "Westen", t1_i2: "Eins", t1_i3: "Süden", t1_i4: "Zehn",
    t2_title: "Kartenlegende", t2_text: "Symbole auf der Karte verstehen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was bedeutet ein blaues Band auf der Karte?", t2_qa: "Fluss", t2_qb: "Wald", t2_qc: "Straße", t2_qd: "Berg",
    t2_w1: "Die", t2_w2: "Legende", t2_w3: "erklärt", t2_w4: "alle", t2_w5: "Zeichen", t2_w6: "der", t2_w7: "Karte.",
    t2_l1: "Punkt", t2_r1: "Stadt", t2_l2: "Linie", t2_r2: "Bahn", t2_l3: "Fläche", t2_r3: "Wald",
    t2_sent: "Ein grünes Feld ist meist ein ___.", t2_qa2: "Wald", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Symbole", t2_f2: "sparen", t2_f3: "Platz", t2_f4: "auf", t2_f5: "der", t2_f6: "Papierkarte.", t2_f7: "",
    t2_tk1: "Karten", t2_tk2: "sind", t2_tk3: "immer", t2_tk4: "aus", t2_tk5: "der", t2_tk6: "Vogelperspektive", t2_tk7: "gezeichnet.", t2_tk8: "",
    t2_bl1: "Karte", t2_bl2: "Realität", t2_i1: "Dreieck", t2_i2: "Berg", t2_i3: "Kreis", t2_i4: "Stadt",
    t3_title: "Maßstab", t3_text: "Die Welt im Kleinen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was bedeutet 1 : 100?", t3_qa: "1 cm ist 100 cm", t3_qb: "1 m ist 1 cm", t3_qc: "Alles ist echt", t3_qd: "Gar nichts",
    t3_w1: "Große", t3_w2: "Entfernungen", t3_w3: "werden", t3_w4: "auf", t3_w5: "Papier", t3_w6: "ganz", t3_w7: "kurz.",
    t3_l1: "1:1", t3_r1: "Echt", t3_l2: "1:100", t3_r2: "Zimmer", t3_l3: "1:1000", t3_r3: "Stadt",
    t3_sent: "Ein Maßstab macht die Welt ___.", t3_qa2: "kleiner", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Mit", t3_f2: "einem", t3_f3: "Lineal", t3_f4: "kann", t3_f5: "man", t3_f6: "Entfernungen", t3_f7: "messen.",
    t3_tk1: "Der", t3_tk2: "Maßstab", t3_tk3: "hilft", t3_tk4: "uns", t3_tk5: "die", t3_tk6: "echte", t3_tk7: "Größe", t3_tk8: "zu",
    t3_bl1: "Groß", t3_bl2: "Klein", t3_i1: "Wirklichkeit", t3_i2: "Modell", t3_i3: "Natur", t3_i4: "Karte",
    t4_title: "Stadtplan", t4_text: "Den Weg in der Stadt finden.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wonach sucht man Straßen im Stadtplan?", t4_qa: "Straßenregister", t4_qb: "Kompass", t4_qc: "Glück", t4_qd: "Farben",
    t4_w1: "Suchen", t4_w2: "Sie", t4_w3: "die", t4_w4: "Straße", t4_w5: "im", t4_w6: "Planquadrat", t4_w7: "A4.",
    t4_l1: "A", t4_r1: "Spalte", t4_l2: "1", t4_r2: "Zeile", t4_l3: "A1", t4_r3: "Quadrat",
    t4_sent: "Ein Gitter hilft beim ___.", t4_qa2: "Suchen", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Wichtige", t4_f2: "Gebäude", t4_f3: "sind", t4_f4: "oft", t4_f5: "besonders", t4_f6: "markiert.", t4_f7: "",
    t4_tk1: "Ein", t4_tk2: "Stadtplan", t4_tk3: "zeigt", t4_tk4: "auch", t4_tk5: "Haltestellen", t4_tk6: "und", t4_tk7: "Parks.", t4_tk8: "",
    t4_bl1: "Gebäude", t4_bl2: "Weg", t4_i1: "Rathaus", t4_i2: "Straße", t4_i3: "Kirche", t4_i4: "Gasse",
    t5_title: "Vogelperspektive", t5_text: "Die Welt von oben sehen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wie sieht ein Haus von oben aus?", t5_qa: "Wie ein Rechteck", t5_qb: "Wie ein Dreieck", t5_qc: "Wie ein Kreis", t5_qd: "Gar nicht",
    t5_w1: "Eine", t5_w2: "Karte", t5_w3: "wird", t5_w4: "von", t5_w5: "senkrecht", t5_w6: "oben", t5_w7: "gezeichnet.",
    t5_l1: "Vorne", t5_r1: "Ansicht", t5_l2: "Oben", t5_r2: "Draufsicht", t5_l3: "Unten", t5_r3: "Boden",
    t5_sent: "Von oben sieht man nur das ___.", t5_qa2: "Dach", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Man", t5_f2: "sieht", t5_f3: "keine", t5_f4: "Fenster", t5_f5: "oder", t5_f6: "Türen.", t5_f7: "",
    t5_tk1: "Fotos", t5_tk2: "aus", t5_tk3: "dem", t5_tk4: "Flugzeug", t5_tk5: "nennen", t5_tk6: "wir", t5_tk7: "Luftbilder.", t5_tk8: "",
    t5_bl1: "Oben", t5_bl2: "Seite", t5_i1: "Dach", t5_i2: "Fenster", t5_i3: "Schornstein", t5_i4: "Tür",
    t6_title: "Gebirge", t6_text: "Höhenunterschiede in der Karte.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welche Farbe haben hohe Berge meistens?", t6_qa: "Braun", t6_qb: "Grün", t6_qc: "Blau", t6_qd: "Gelb",
    t6_w1: "Dunkles", t6_w2: "Braun", t6_w3: "zeigt", t6_w4: "sehr", t6_w5: "hohe", t6_w6: "Gipfel", t6_w7: "an.",
    t6_l1: "Grün", t6_r1: "Flachland", t6_l2: "Gelb", t6_r2: "Hügel", t6_l3: "Braun", t6_r3: "Berge",
    t6_sent: "Täler liegen zwischen den ___.", t6_qa2: "Bergen", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Höhenlinien", t6_f2: "verbinden", t6_f3: "Punkte", t6_f4: "mit", t6_f5: "gleicher", t6_f6: "Höhe.", t6_f7: "",
    t6_tk1: "Die", t6_tk2: "Alpen", t6_tk3: "sind", t6_tk4: "das", t6_tk5: "höchste", t6_tk6: "Gebirge", t6_tk7: "in", t6_tk8: "Deutschland.",
    t6_bl1: "Hoch", t6_bl2: "Tief", t6_i1: "Gipfel", t6_i2: "Tal", t6_i3: "Gletscher", t6_i4: "Fluss",
    t7_title: "Flüsse & Seen", t7_text: "Wasserwege auf der Landkarte.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "In welcher Farbe werden Gewässer gezeichnet?", t7_qa: "Blau", t7_qb: "Grün", t7_qc: "Rot", t7_qd: "Schwarz",
    t7_w1: "Ein", t7_w2: "Fluss", t7_w3: "mündet", t7_w4: "oft", t7_w5: "in", t7_w6: "ein", t7_w7: "großes",
    t7_l1: "Quelle", t7_r1: "Start", t7_l2: "Fluss", t7_r2: "Lauf", t7_l3: "Mündung", t7_r3: "Ende",
    t7_sent: "Flüsse fließen immer von oben nach ___.", t7_qa2: "unten", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Seen", t7_f2: "sind", t7_f3: "stillstehende", t7_f4: "Gewässer", t7_f5: "auf", t7_f6: "der", t7_f7: "Karte.",
    t7_tk1: "Der", t7_tk2: "Rhein", t7_tk3: "ist", t7_tk4: "einer", t7_tk5: "der", t7_tk6: "längsten", t7_tk7: "Flüsse", t7_tk8: "Deutschlands.",
    t7_bl1: "Wasser", t7_bl2: "Land", t7_i1: "Bach", t7_i2: "Wiese", t7_i3: "See", t7_i4: "Stadt",
    t8_title: "Karten-Check", t8_text: "Orientierungsprofi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist ein Atlas?", t8_qa: "Ein Buch mit Karten", t8_qb: "Ein Berg", t8_qc: "Ein Meer", t8_qd: "Ein Kompass",
    t8_w1: "Übung", t8_w2: "macht", t8_w3: "den", t8_w4: "Meister", t8_w5: "beim", t8_w6: "Kartenlesen.", t8_w7: "",
    t8_l1: "Plan", t8_r1: "Haus", t8_l2: "Karte", t8_r2: "Land", t8_l3: "Globus", t8_r3: "Erde",
    t8_sent: "Wir finden den Weg mit der ___.", t8_qa2: "Karte", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Heute", t8_f2: "nutzen", t8_f3: "wir", t8_f4: "oft", t8_f5: "ein", t8_f6: "Navi", t8_f7: "im",
    t8_tk1: "Karten", t8_tk2: "helfen", t8_tk3: "uns", t8_tk4: "die", t8_tk5: "Welt", t8_tk6: "besser", t8_tk7: "zu", t8_tk8: "verstehen.",
    t8_bl1: "Karte", t8_bl2: "Natur", t8_i1: "Symbol", t8_i2: "Baum", t8_i3: "Maßstab", t8_i4: "Fluss",
  },
};

export const KARTEN_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Kompass", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Kartenlegende", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Maßstab", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Stadtplan", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Vogelperspektive", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [6] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Gebirge", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Flüsse & Seen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Karten-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const STROM_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Strom & Elektrizität",
    t1_title: "Stromkreis", t1_text: "Strom fließt nur im Kreis.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was braucht ein einfacher Stromkreis?", t1_qa: "Quelle, Kabel, Lampe", t1_qb: "Holz, Stein, Wasser", t1_qc: "Nur ein Kabel", t1_qd: "Gar nichts",
    t1_w1: "Ein", t1_w2: "Schalter", t1_w3: "unterbricht", t1_w4: "den", t1_w5: "Fluss", t1_w6: "der", t1_w7: "Elektronen.",
    t1_l1: "Quelle", t1_r1: "Batterie", t1_l2: "Leiter", t1_r2: "Kabel", t1_l3: "Verbraucher", t1_r3: "Lampe",
    t1_sent: "Der Stromkreis muss ___ sein.", t1_qa2: "geschlossen", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Fließt", t1_f2: "Strom", t1_f3: "dann", t1_f4: "leuchtet", t1_f5: "das", t1_f6: "kleine", t1_f7: "Lämpchen.",
    t1_tk1: "Minuspol", t1_tk2: "und", t1_tk3: "Pluspol", t1_tk4: "sind", t1_tk5: "die", t1_tk6: "beiden", t1_tk7: "Anschlüsse.", t1_tk8: "",
    t1_bl1: "Strom", t1_bl2: "Kein Strom", t1_i1: "Licht", t1_i2: "Dunkel", t1_i3: "Motor", t1_i4: "Pause",
    t2_title: "Leiter", t2_text: "Manche Stoffe leiten Strom gut.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welches Material leitet Strom am besten?", t2_qa: "Kupfer (Metall)", t2_qb: "Holz", t2_qc: "Plastik", t2_qd: "Glas",
    t2_w1: "Kupfer", t2_w2: "wird", t2_w3: "oft", t2_w4: "für", t2_w5: "elektrische", t2_w6: "Leitungen", t2_w7: "benutzt.",
    t2_l1: "Eisen", t2_r1: "Metall", t2_l2: "Kupfer", t2_r2: "Kabel", t2_l3: "Silber", t2_r3: "Edelmetall",
    t2_sent: "Metalle sind gute ___.", t2_qa2: "Leiter", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Auch", t2_f2: "Wasser", t2_f3: "kann", t2_f4: "elektrischen", t2_f5: "Strom", t2_f6: "leiten.", t2_f7: "",
    t2_tk1: "Stromkabel", t2_tk2: "haben", t2_tk3: "einen", t2_tk4: "Kern", t2_tk5: "aus", t2_tk6: "leitendem", t2_tk7: "Metall.", t2_tk8: "",
    t2_bl1: "Leiter", t2_bl2: "Isolator", t2_i1: "Nagel", t2_i2: "Gummi", t2_i3: "Draht", t2_i4: "Holz",
    t3_title: "Isolatoren", t3_text: "Schutz vor dem Strom.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Womit sind Kabel umhüllt?", t3_qa: "Kunststoff / Plastik", t3_qb: "Eisen", t3_qc: "Papier", t3_qd: "Gar nichts",
    t3_w1: "Isolatoren", t3_w2: "verhindern", t3_w3: "einen", t3_w4: "gefährlichen", t3_w5: "Stromschlag.", t3_w6: "", t3_w7: "",
    t3_l1: "Gummi", t3_r1: "Handschuh", t3_l2: "Plastik", t3_r2: "Hülle", t3_l3: "Glas", t3_r3: "Isolator",
    t3_sent: "Plastik ist ein schlechter ___.", t3_qa2: "Leiter", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Holz", t3_f2: "und", t3_f3: "Luft", t3_f4: "leiten", t3_f5: "fast", t3_f6: "keinen", t3_f7: "Strom.",
    t3_tk1: "Kabelhüllen", t3_tk2: "schützen", t3_tk3: "uns", t3_tk4: "vor", t3_tk5: "der", t3_tk6: "elektrischen", t3_tk7: "Spannung.", t3_tk8: "",
    t3_bl1: "Schützt", t3_bl2: "Leitet", t3_i1: "Plastik", t3_i2: "Kupfer", t3_i3: "Gummi", t3_i4: "Alu",
    t4_title: "Gefahren", t4_text: "Strom kann tödlich sein!", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo darf man nie mit Metall hineinfassen?", t4_qa: "In die Steckdose", t4_qb: "In den Kühlschrank", t4_qc: "In die Tasche", t4_qd: "In den Eimer",
    t4_w1: "Spiele", t4_w2: "niemals", t4_w3: "an", t4_w4: "einer", t4_w5: "offenen", t4_w6: "Steckdose.", t4_w7: "",
    t4_l1: "Nass", t4_r1: "Bad", t4_l2: "Defekt", t4_r2: "Kabel", t4_l3: "Hochspannung", t4_r3: "Mast",
    t4_sent: "Wasser és Strom sind eine ___.", t4_qa2: "Gefahr", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Finger", t4_f2: "weg", t4_f3: "von", t4_f4: "kaputten", t4_f5: "Kabeln", t4_f6: "und", t4_f7: "Steckern.",
    t4_tk1: "Elektrizität", t4_tk2: "kann", t4_tk3: "sehr", t4_tk4: "gefährlich", t4_tk5: "für", t4_tk6: "den", t4_tk7: "Körper", t4_tk8: "sein.",
    t4_bl1: "Sicher", t4_bl2: "Gefahr", t4_i1: "Batterie", t4_i2: "Steckdose", t4_i3: "Spielzeug", t4_i4: "Blitze",
    t5_title: "Die Batterie", t5_text: "Strom für unterwegs.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wie viele Pole hat eine Batterie?", t5_qa: "Zwei (+ und -)", t5_qb: "Einen", t5_qc: "Vier", t5_qd: "Keinen",
    t5_w1: "Achte", t5_w2: "beim", t5_w3: "Einlegen", t5_w4: "auf", t5_w5: "Plus", t5_w6: "und", t5_w7: "Minus.",
    t5_l1: "Knopf", t5_r1: "Uhr", t5_l2: "Block", t5_r2: "Rauchmelder", t5_l3: "Mignon", t5_r3: "Taschenlampe",
    t5_sent: "Batterien speichern ___ Energie.", t5_qa2: "chemische", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Leere", t5_f2: "Batterien", t5_f3: "gehören", t5_f4: "in", t5_f5: "die", t5_f6: "Sammelbox.", t5_f7: "",
    t5_tk1: "Akkus", t5_tk2: "kann", t5_tk3: "man", t5_tk4: "immer", t5_tk5: "wieder", t5_tk6: "neu", t5_tk7: "aufladen.", t5_tk8: "",
    t5_bl1: "Batterie", t5_bl2: "Steckdose", t5_i1: "Klein", t5_i2: "Viel Kraft", t5_i3: "Mobil", t5_i4: "Kabel",
    t6_title: "Die Glühbirne", t6_text: "Sie macht Licht aus Strom.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie heißt der feine Draht im Inneren?", t6_qa: "Wolfram-Glühfaden", t6_qb: "Wollfaden", t6_qc: "Gummiband", t6_qd: "Bindfaden",
    t6_w1: "Die", t6_w2: "Glühlampe", t6_w3: "wird", t6_w4: "beim", t6_w5: "Leuchten", t6_w6: "sehr", t6_w7: "warm.",
    t6_l1: "Sockel", t6_r1: "Halt", t6_l2: "Glas", t6_r2: "Schutz", t6_l3: "Faden", t6_r3: "Licht",
    t6_sent: "Strom macht den Draht so ___ dass er leuchtet.", t6_qa2: "heiß", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Heute", t6_f2: "nutzen", t6_f3: "wir", t6_f4: "meistens", t6_f5: "sparsame", t6_f6: "LED-Lampen.", t6_f7: "",
    t6_tk1: "Thomas", t6_tk2: "Edison", t6_tk3: "hat", t6_tk4: "die", t6_tk5: "Glühbirne", t6_tk6: "berühmt", t6_tk7: "gemacht.", t6_tk8: "",
    t6_bl1: "Licht", t6_bl2: "Wärme", t6_i1: "Hell", t6_i2: "Heiß", t6_i3: "Leuchten", t6_i4: "Glühen",
    t7_title: "Kraftwerke", t7_text: "Woher kommt der Strom?", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Welches Kraftwerk nutzt Windkraft?", t7_qa: "Windrad", t7_qb: "Staudamm", t7_qc: "Solaranlage", t7_qd: "Kohlekraftwerk",
    t7_w1: "Große", t7_w2: "Leitungen", t7_w3: "bringen", t7_w4: "den", t7_w5: "Strom", t7_w6: "in", t7_w7: "die",
    t7_l1: "Sonne", t7_r1: "Solar", t7_l2: "Wind", t7_r2: "Windrad", t7_l3: "Kohle", t7_r3: "Dampf",
    t7_sent: "Ein Generator erzeugt den ___.", t7_qa2: "Strom", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Erneuerbare", t7_f2: "Energien", t7_f3: "sind", t7_f4: "besser", t7_f5: "für", t7_f6: "das", t7_f7: "Klima.",
    t7_tk1: "Ein", t7_tk2: "Kraftwerk", t7_tk3: "wandelt", t7_tk4: "Energie", t7_tk5: "in", t7_tk6: "elektrischen", t7_tk7: "Strom", t7_tk8: "um.",
    t7_bl1: "Sauber", t7_bl2: "Schmutzig", t7_i1: "Wind", t7_i2: "Kohle", t7_i3: "Sonne", t7_i4: "Gas",
    t8_title: "Strom-Check", t8_text: "Bist du unter Strom?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist ein Kurzschluss?", t8_qa: "Gefährliche Verbindung", t8_qb: "Ein kurzes Kabel", t8_qc: "Ein Spiel", t8_qd: "Egal",
    t8_w1: "Sparsamkeit", t8_w2: "hilft", t8_w3: "beim", t8_w4: "Schutz", t8_w5: "unserer", t8_w6: "Umwelt.", t8_w7: "",
    t8_l1: "Volt", t8_r1: "Spannung", t8_l2: "Ampere", t8_r2: "Stromstärke", t8_l3: "Watt", t8_r3: "Leistung",
    t8_sent: "Strom ist aus unserem Leben nicht mehr ___.", t8_qa2: "wegzudenken", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "wissen", t8_f3: "jetzt", t8_f4: "wie", t8_f5: "ein", t8_f6: "Stromkreis", t8_f7: "funktioniert.",
    t8_tk1: "Elektrizität", t8_tk2: "ist", t8_tk3: "eine", t8_tk4: "der", t8_tk5: "wichtigsten", t8_tk6: "Entdeckungen.", t8_tk7: "", t8_tk8: "",
    t8_bl1: "Elektrisch", t8_bl2: "Mechanisch", t8_i1: "Toaster", t8_i2: "Hammer", t8_i3: "Föhn", t8_i4: "Säge",
  },
};

export const STROM_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Stromkreis", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Leiter", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Isolatoren", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Gefahren", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Die Batterie", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Die Glühbirne", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Kraftwerke", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Strom-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const FINALE_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K3 Abschluss-Review",
    t1_title: "Wald-Review", t1_text: "Wissen über Bäume.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Welcher Baum hat Nadeln?", t1_qa: "Tanne", t1_qb: "Eiche", t1_qc: "Buche", t1_qd: "Ahorn",
    t1_w1: "Bäume", t1_w2: "produzieren", t1_w3: "den", t1_w4: "lebenswichtigen", t1_w5: "Sauerstoff.", t1_w6: "", t1_w7: "",
    t1_l1: "Krone", t1_r1: "Oben", t1_l2: "Stamm", t1_r2: "Mitte", t1_l3: "Wurzel", t1_r3: "Unten",
    t1_sent: "Der Wald hat viele ___.", t1_qa2: "Emelete", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Waldschutz", t1_f2: "ist", t1_f3: "wichtig", t1_f4: "für", t1_f5: "alle", t1_f6: "Menschen.", t1_f7: "",
    t1_tk1: "Im", t1_tk2: "Wald", t1_tk3: "leben", t1_tk4: "viele", t1_tk5: "verschiedene", t1_tk6: "Tierarten.", t1_tk7: "", t1_tk8: "",
    t1_bl1: "Nadel", t1_bl2: "Blatt", t1_i1: "Kiefer", t1_i2: "Birke", t1_i3: "Fichte", t1_i4: "Linde",
    t2_title: "Feuer-Review", t2_text: "Wissen über Brandschutz.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie lautet der Notruf?", t2_qa: "112", t2_qb: "110", t2_qc: "115", t2_qd: "111",
    t2_w1: "Brandschutz", t2_w2: "hilft", t2_w3: "dass", t2_w4: "keine", t2_w5: "schlimmen", t2_w6: "Feuer", t2_w7: "entstehen.",
    t2_l1: "Löschen", t2_r1: "Wasser", t2_l2: "Rennen", t2_r2: "Fluchtweg", t2_l3: "Rufen", t2_r3: "Telefon",
    t2_sent: "Feuer braucht immer ___.", t2_qa2: "Sauerstoff", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Ein", t2_f2: "Rauchmelder", t2_f3: "kann", t2_f4: "Leben", t2_f5: "retten.", t2_f6: "", t2_f7: "",
    t2_tk1: "Spiele", t2_tk2: "niemals", t2_tk3: "mit", t2_tk4: "Zündhölzern", t2_tk5: "oder", t2_tk6: "Feuerzeugen.", t2_tk7: "", t2_tk8: "",
    t2_bl1: "Heiß", t2_bl2: "Kalt", t2_i1: "Flamme", t2_i2: "Eis", t2_i3: "Glut", t2_i4: "Schnee",
    t3_title: "Getreide-Review", t3_text: "Vom Korn zum Brot.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wo wächst Weizen?", t3_qa: "Auf dem Feld", t3_qb: "Im Wald", t3_qc: "Im Wasser", t3_qd: "Im Garten",
    t3_w1: "Getreide", t3_w2: "ist", t3_w3: "die", t3_w4: "wichtigste", t3_w5: "Zutat", t3_w6: "für", t3_w7: "unser",
    t3_l1: "Ähre", t3_r1: "Samen", t3_l2: "Halm", t3_r2: "Stängel", t3_l3: "Korn", t3_r3: "Inhalt",
    t3_sent: "Mehl kommt aus der ___.", t3_qa2: "Mühle", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Der", t3_f2: "Mähdrescher", t3_f3: "erntet", t3_f4: "das", t3_f5: "Getreide", t3_f6: "im", t3_f7: "Sommer.",
    t3_tk1: "Vollkornprodukte", t3_tk2: "sind", t3_tk3: "besonders", t3_tk4: "gesund", t3_tk5: "für", t3_tk6: "uns.", t3_tk7: "", t3_tk8: "",
    t3_bl1: "Mehl", t3_bl2: "Teig", t3_i1: "Staubig", t3_i2: "Klebrig", t3_i3: "Weiß", t3_i4: "Brauni",
    t4_title: "Wiesen-Review", t4_text: "Tiere auf der Wiese.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wer sammelt Honig?", t4_qa: "Biene", t4_qb: "Hase", t4_qc: "Fuchs", t4_qd: "Amsel",
    t4_w1: "Schmetterlinge", t4_w2: "verwandeln", t4_w3: "sich", t4_w4: "von", t4_w5: "Raupen", t4_w6: "in", t4_w7: "Falter.",
    t4_l1: "Ei", t4_r1: "Start", t4_l2: "Raupe", t4_r2: "Fressen", t4_l3: "Kokon", t4_r3: "Schutz",
    t4_sent: "Insekten lieben bunte ___.", t4_qa2: "Blüten", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Auf", t4_f2: "der", t4_f3: "Wiese", t4_f4: "summt", t4_f5: "und", t4_f6: "brummt", t4_f7: "es",
    t4_tk1: "Viele", t4_tk2: "Blumen", t4_tk3: "bieten", t4_tk4: "Nahrung", t4_tk5: "für", t4_tk6: "die", t4_tk7: "Insekten.", t4_tk8: "",
    t4_bl1: "Fliegen", t4_bl2: "Krabbeln", t4_i1: "Biene", t4_i2: "Wurm", t4_i3: "Falter", t4_i4: "Käfer",
    t5_title: "Körper-Review", t5_text: "Wissen über Knochen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was hält uns aufrecht?", t5_qa: "Wirbelsäule", t5_qb: "Nase", t5_qc: "Haare", t5_qd: "Finger",
    t5_w1: "Bewegung", t5_w2: "und", t5_w3: "Sport", t5_w4: "halten", t5_w5: "unseren", t5_w6: "Körper", t5_w7: "fit.",
    t5_l1: "Herz", t5_r1: "Pumpe", t5_l2: "Lunge", t5_r2: "Atmung", t5_l3: "Magen", t5_r3: "Essen",
    t5_sent: "Das Skelett besteht aus ___.", t5_qa2: "Knochen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Unsere", t5_f2: "Muskeln", t5_f3: "arbeiten", t5_f4: "zusammen", t5_f5: "mit", t5_f6: "den", t5_f7: "Knochen.",
    t5_tk1: "Das", t5_tk2: "Gehirn", t5_tk3: "ist", t5_tk4: "die", t5_tk5: "Schaltzentrale", t5_tk6: "unseres", t5_tk7: "Körpers.", t5_tk8: "",
    t5_bl1: "Innen", t5_bl2: "Außen", t5_i1: "Herz", t5_i2: "Haut", t5_i3: "Leber", t5_i4: "Haar",
    t6_title: "Medien-Review", t6_text: "Computer és Co.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was ist das Internet?", t6_qa: "Ein weltweites Netz", t6_qb: "Ein Buch", t6_qc: "Ein Radio", t6_qd: "Ein Film",
    t6_w1: "Pass", t6_w2: "gut", t6_w3: "auf", t6_w4: "deine", t6_w5: "Daten", t6_w6: "im", t6_w7: "Internet",
    t6_l1: "Maus", t6_r1: "Klicken", t6_l2: "Monitor", t6_r2: "Sehen", t6_l3: "Tastatur", t6_r3: "Tippen",
    t6_sent: "Wir nutzen Medien zur ___.", t6_qa2: "Information", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Medien", t6_f2: "helfen", t6_f3: "uns", t6_f4: "beim", t6_f5: "Lernen", t6_f6: "und", t6_f7: "Spielen.",
    t6_tk1: "Werbung", t6_tk2: "versucht", t6_tk3: "uns", t6_tk4: "zum", t6_tk5: "Kaufen", t6_tk6: "zu", t6_tk7: "bringen.", t6_tk8: "",
    t6_bl1: "Echt", t6_bl2: "Digital", t6_i1: "Buch", t6_i2: "App", t6_i3: "Zeitung", t6_i4: "Website",
    t7_title: "Karten-Review", t7_text: "Wo ist Norden?", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wo geht Sonne auf?", t7_qa: "Osten", t7_qb: "Westen", t7_qc: "Norden", t7_qd: "Süden",
    t7_w1: "Der", t7_w2: "Maßstab", t7_w3: "macht", t7_w4: "die", t7_w5: "große", t7_w6: "Welt", t7_w7: "ganz",
    t7_l1: "Kompass", t7_r1: "Richtung", t7_l2: "Atlas", t7_r2: "Buch", t7_l3: "Karte", t7_r3: "Papier",
    t7_sent: "Die Landkarte zeigt den ___.", t7_qa2: "Weg", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "In", t7_f2: "der", t7_f3: "Legende", t7_f4: "stehen", t7_f5: "alle", t7_f6: "wichtigen", t7_f7: "Zeichen.",
    t7_tk1: "Wir", t7_tk2: "orientieren", t7_tk3: "uns", t7_tk4: "mit", t7_tk5: "Hilfe", t7_tk6: "der", t7_tk7: "Himmelsrichtungen.", t7_tk8: "",
    t7_bl1: "Blau", t7_bl2: "Grün", t7_i1: "Wasser", t7_i2: "Wald", t7_i3: "Meer", t7_i4: "Wiese",
    t8_title: "Experten-Check", t8_text: "Du hast es geschafft!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Bist du nun ein Profi?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Vielleicht", t8_qd: "Fast",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "zu", t8_w4: "deinem", t8_w5: "großen", t8_w6: "Erfolg!", t8_w7: "",
    t8_l1: "Wald", t8_r1: "Bäume", t8_l2: "Strom", t8_r2: "Licht", t8_l3: "Feuer", t8_r3: "Wärme",
    t8_sent: "Ich habe K3 ___.", t8_qa2: "bestanden", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Du", t8_f2: "hast", t8_f3: "viel", t8_f4: "über", t8_f5: "die", t8_f6: "Welt", t8_f7: "gelernt.",
    t8_tk1: "Sachkunde", t8_tk2: "macht", t8_tk3: "Spaß", t8_tk4: "und", t8_tk5: "ist", t8_tk6: "sehr", t8_tk7: "interessant.", t8_tk8: "",
    t8_bl1: "Start", t8_bl2: "Ziel", t8_i1: "Anfang", t8_i2: "Diplom", t8_i3: "Erster", t8_i4: "Ende",
  },
};

export const FINALE_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Wald-Review", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Feuer-Review", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Getreide-Review", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Wiesen-Review", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Körper-Review", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Medien-Review", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Karten-Review", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Experten-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

