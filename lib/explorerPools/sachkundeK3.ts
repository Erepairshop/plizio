// lib/explorerPools/sachkundeK3.ts
import type { PoolTopicDef } from "./types";

export const WALD_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Lebensraum Wald",
    t1_title: "Waldstockwerke", t1_text: "Der Wald ist in Schichten wie ein Haus aufgebaut.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "In welcher Schicht wachsen Moose?", t1_qa: "Bodenschicht", t1_qb: "Kronenschicht", t1_qc: "Dachschicht", t1_qd: "Keller",
    t1_w1: "Der", t1_w2: "Wald", t1_w3: "hat", t1_w4: "fünf", t1_w5: "verschiedene", t1_w6: "Stockwerke.", t1_w7: "",
    t1_l1: "Wurzelschicht", t1_r1: "Unter der Erde", t1_l2: "Krautschicht", t1_r2: "Blumen", t1_l3: "Strauchschicht", t1_r3: "Büsche",
    t1_sent: "Moose wachsen in der ___.", t1_qa2: "Bodenschicht", t1_qb2: "Kronenschicht", t1_qc2: "Wurzelschicht", t1_qd2: "Luft",
    t1_f1: "Im", t1_f2: "Wald", t1_f3: "ist", t1_f4: "es", t1_f5: "im", t1_f6: "Sommer", t1_f7: "kühl.",
    t1_tk1: "Bäume", t1_tk2: "liefern", t1_tk3: "uns", t1_tk4: "den", t1_tk5: "wichtigen", t1_tk6: "Sauerstoff", t1_tk7: "zum", t1_tk8: "Atmen.",
    t1_bl1: "Tier", t1_bl2: "Pflanze", t1_i1: "Reh", t1_i2: "Farn", t1_i3: "Fuchs", t1_i4: "Moos",
    t2_title: "Tiere des Waldes", t2_text: "Reh, Fuchs, Wildschwein und viele mehr.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welches Tier hat ein Geweih?", t2_qa: "Der Hirsch", t2_qb: "Der Fuchs", t2_qc: "Das Wildschwein", t2_qd: "Der Hase",
    t2_w1: "Viele", t2_w2: "Tiere", t2_w3: "sind", t2_w4: "im", t2_w5: "Wald", t2_w6: "gut", t2_w7: "getarnt.",
    t2_l1: "Fuchs", t2_r1: "Schlau", t2_l2: "Eichhörnchen", t2_r2: "Klettert", t2_l3: "Specht", t2_r3: "Klopft",
    t2_sent: "Das Eichhörnchen sammelt ___ für den Winter.", t2_qa2: "Nüsse", t2_qb2: "Schatten", t2_qc2: "Holz", t2_qd2: "Steine",
    t2_f1: "Spuren", t2_f2: "im", t2_f3: "Schnee", t2_f4: "verraten", t2_f5: "die", t2_f6: "Waldbewohner.", t2_f7: "",
    t2_tk1: "Der", t2_tk2: "Luchs", t2_tk3: "ist", t2_tk4: "eine", t2_tk5: "scheue", t2_tk6: "und", t2_tk7: "seltene", t2_tk8: "Raubkatze.",
    t2_bl1: "Tagaktiv", t2_bl2: "Nachtaktiv", t2_i1: "Reh", t2_i2: "Eule", t2_i3: "Specht", t2_i4: "Fuchs",
    t3_title: "Laub- & Nadelbäume", t3_text: "Unterschiede an Blättern und Früchten erkennen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welcher Baum behält im Winter seine Nadeln?", t3_qa: "Die Tanne", t3_qb: "Die Eiche", t3_qc: "Die Buche", t3_qd: "Der Ahorn",
    t3_w1: "Im", t3_w2: "Herbst", t3_w3: "färbt", t3_w4: "sich", t3_w5: "das", t3_w6: "Laub", t3_w7: "bunt.",
    t3_l1: "Eichel", t3_r1: "Eiche", t3_l2: "Kastanie", t3_r2: "Kastanienbaum", t3_l3: "Buchecker", t3_r3: "Buche",
    t3_sent: "Nadelbäume haben keine Blätter, sondern ___.", t3_qa2: "Nadeln", t3_qb2: "Blätter", t3_qc2: "Äste", t3_qd2: "Wurzeln",
    t3_f1: "Aus", t3_f2: "den", t3_f3: "Früchten", t3_f4: "der", t3_f5: "Bäume", t3_f6: "können", t3_f7: "neue",
    t3_tk1: "Tannenzapfen", t3_tk2: "schließen", t3_tk3: "sich", t3_tk4: "bei", t3_tk5: "Nässe", t3_tk6: "und", t3_tk7: "öffnen", t3_tk8: "sich",
    t3_bl1: "Laubbaum", t3_bl2: "Nadelbaum", t3_i1: "Ahorn", t3_i2: "Fichte", t3_i3: "Eiche", t3_i4: "Kiefer",
    t4_title: "Pilze", t4_text: "Weder Tier noch Pflanze.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Welcher Pilz ist giftig?", t4_qa: "Fliegenpilz", t4_qb: "Steinpilz", t4_qc: "Champignon", t4_qd: "Pfifferling",
    t4_w1: "Pilze", t4_w2: "wachsen", t4_w3: "oft", t4_w4: "am", t4_w5: "Fuß", t4_w6: "von", t4_w7: "Bäumen.",
    t4_l1: "Hut", t4_r1: "Oben", t4_l2: "Stiel", t4_r2: "Mitte", t4_l3: "Myzel", t4_r3: "Pilzgeflecht",
    t4_sent: "Pilze bilden ein großes ___ im Boden.", t4_qa2: "Netzwerk", t4_qb2: "Nadeln", t4_qc2: "Blüten", t4_qd2: "Zapfen",
    t4_f1: "Iss", t4_f2: "niemals", t4_f3: "einen", t4_f4: "Pilz", t4_f5: "den", t4_f6: "du", t4_f7: "nicht",
    t4_tk1: "Manche", t4_tk2: "Pilze", t4_tk3: "helfen", t4_tk4: "den", t4_tk5: "Bäumen", t4_tk6: "beim", t4_tk7: "Wachsen.", t4_tk8: "",
    t4_bl1: "Essbar", t4_bl2: "Giftig", t4_i1: "Steinpilz", t4_i2: "Fliegenpilz", t4_i3: "Maronenröhrling", t4_i4: "Knollenblätterpilz",
    t5_title: "Der Förster", t5_text: "Der Förster kümmert sich um den Wald.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist eine Aufgabe des Försters?", t5_qa: "Bäume pflanzen", t5_qb: "Briefe austragen", t5_qc: "Brot backen", t5_qd: "Autos reparieren",
    t5_w1: "Der", t5_w2: "Förster", t5_w3: "kennt", t5_w4: "sich", t5_w5: "im", t5_w6: "Wald", t5_w7: "bestens",
    t5_l1: "Spaten", t5_r1: "Pflanzen", t5_l2: "Fernglas", t5_r2: "Beobachten", t5_l3: "Karte", t5_r3: "Orientierung",
    t5_sent: "Er sorgt für ein ___ im Wald.", t5_qa2: "Gleichgewicht", t5_qb2: "Blätter", t5_qc2: "Früchte", t5_qd2: "Wurzeln",
    t5_f1: "Förster", t5_f2: "tragen", t5_f3: "oft", t5_f4: "grüne", t5_f5: "Kleidung", t5_f6: "als", t5_f7: "Tarnung.",
    t5_tk1: "Hochsitze", t5_tk2: "dienen", t5_tk3: "dem", t5_tk4: "Förster", t5_tk5: "zur", t5_tk6: "ungestörten", t5_tk7: "Beobachtung.", t5_tk8: "",
    t5_bl1: "Beruf", t5_bl2: "Werkzeug", t5_i1: "Förster", t5_i2: "Säge", t5_i3: "Jäger", t5_i4: "Axt",
    t6_title: "Holz", t6_text: "Ein vielseitiger Rohstoff.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wofür wird Holz nicht verwendet?", t6_qa: "Als Getränk", t6_qb: "Für Möbel", t6_qc: "Zum Bauen", t6_qd: "Als Papier",
    t6_w1: "Papier", t6_w2: "wird", t6_w3: "aus", t6_w4: "den", t6_w5: "Fasern", t6_w6: "von", t6_w7: "Holz",
    t6_l1: "Hart", t6_r1: "Eiche", t6_l2: "Weich", t6_r2: "Fichte", t6_l3: "Dunkel", t6_r3: "Nussbaum",
    t6_sent: "Holz ist ein ___ Rohstoff.", t6_qa2: "nachwachsender", t6_qb2: "Zapfen", t6_qc2: "Zweige", t6_qd2: "Früchte",
    t6_f1: "Holz", t6_f2: "speichert", t6_f3: "Kohlenstoff.", t6_f4: "", t6_f5: "", t6_f6: "", t6_f7: "",
    t6_tk1: "Recycling", t6_tk2: "von", t6_tk3: "Papier", t6_tk4: "schont", t6_tk5: "die", t6_tk6: "Wälder", t6_tk7: "der", t6_tk8: "Erde.",
    t6_bl1: "Aus Holz", t6_bl2: "Nicht aus Holz", t6_i1: "Tisch", t6_i2: "Glas", t6_i3: "Stuhl", t6_i4: "Messer",
    t7_title: "Waldregeln", t7_text: "Wie verhält man sich im Wald?", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Darf man im Wald Feuer machen?", t7_qa: "Nein, auf keinen Fall", t7_qb: "Ja, immer", t7_qc: "Nur im Sommer", t7_qd: "Vielleicht",
    t7_w1: "Nimm", t7_w2: "deinen", t7_w3: "Müll", t7_w4: "wieder", t7_w5: "mit", t7_w6: "nach", t7_w7: "Hause.",
    t7_l1: "Lärm", t7_r1: "Vermeiden", t7_l2: "Müll", t7_r2: "Einpacken", t7_l3: "Pflanzen", t7_r3: "Schützen",
    t7_sent: "Bleibe auf den markierten ___.", t7_qa2: "Wegen", t7_qb2: "Samen", t7_qc2: "Blatt", t7_qd2: "Wurzel",
    t7_f1: "Der", t7_f2: "Wald", t7_f3: "ist", t7_f4: "ein", t7_f5: "Erholungsort", t7_f6: "für", t7_f7: "uns",
    t7_tk1: "Hunde", t7_tk2: "müssen", t7_tk3: "im", t7_tk4: "Wald", t7_tk5: "meist", t7_tk6: "an", t7_tk7: "die", t7_tk8: "Leine.",
    t7_bl1: "Erlaubt", t7_bl2: "Verboten", t7_i1: "Spazieren", t7_i2: "Feuer", t7_i3: "Beobachten", t7_i4: "Müll",
    t8_title: "Wald-Check", t8_text: "Bist du ein Wald-Experte?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist der wichtigste Baum?", t8_qa: "Alle sind wichtig", t8_qb: "Die Eiche", t8_qc: "Die Fichte", t8_qd: "Die Palme",
    t8_w1: "Der", t8_w2: "Wald", t8_w3: "ist", t8_w4: "ein", t8_w5: "komplexes", t8_w6: "Ökosystem.", t8_w7: "",
    t8_l1: "Luft", t8_r1: "Sauber", t8_l2: "Wasser", t8_r2: "Klar", t8_l3: "Boden", t8_r3: "Lebendig",
    t8_sent: "Wir müssen den Wald ___.", t8_qa2: "schützen", t8_qb2: "Spielplatz", t8_qc2: "Parkplatz", t8_qd2: "Flughafen",
    t8_f1: "Nur", t8_f2: "ein", t8_f3: "gesunder", t8_f4: "Wald", t8_f5: "kann", t8_f6: "seine", t8_f7: "Aufgaben",
    t8_tk1: "Jeder", t8_tk2: "kann", t8_tk3: "mithelfen", t8_tk4: "die", t8_tk5: "Wälder", t8_tk6: "zu", t8_tk7: "erhalten.", t8_tk8: "",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Vielfalt", t8_i2: "Müll", t8_i3: "Sauerstoff", t8_i4: "Lärm",
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
    svg: { type: "word-display", word: "Tiere des Waldes", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Laub- & Nadelbäume", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Pilze", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{ left: "t4_l1", right: "t4_r1" }, { left: "t4_l2", right: "t4_r2" }, { left: "t4_l3", right: "t4_r3" }] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Der Förster", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7", "t5_tk8"].filter(x => x !== ""), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Holz", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4", "t6_f5", "t6_f6", "t6_f7"].filter(x => x !== "") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Waldregeln", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{ id: "b1", label: "t7_bl1" }, { id: "b2", label: "t7_bl2" }], items: [{ text: "t7_i1", bucketId: "b1" }, { text: "t7_i2", bucketId: "b2" }, { text: "t7_i3", bucketId: "b1" }, { text: "t7_i4", bucketId: "b2" }] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Wald-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

export const FEUER_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das Feuer",
    t1_title: "Das Feuer", t1_text: "Feuer ist eine chemische Reaktion.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist Feuer?", t1_qa: "Eine Verbrennung", t1_qb: "Ein Spielzeug", t1_qc: "Ein Getränk", t1_qd: "Ein Tier",
    t1_w1: "Feuer", t1_w2: "hat", t1_w3: "den", t1_w4: "Menschen", t1_w5: "schon", t1_w6: "früher", t1_w7: "geholfen.",
    t1_l1: "Nutzen", t1_r1: "Wärme", t1_l2: "Gefahr", t1_r2: "Brand", t1_l3: "Funken", t1_r3: "Hitze",
    t1_sent: "Feuer braucht zum Brennen ___.", t1_qa2: "Sauerstoff", t1_qb2: "Wasser", t1_qc2: "Sand", t1_qd2: "Stein",
    t1_f1: "Eine", t1_f2: "kontrollierte", t1_f3: "Feuerstelle", t1_f4: "muss", t1_f5: "immer", t1_f6: "bewacht", t1_f7: "werden.",
    t1_tk1: "Eine", t1_tk2: "kontrollierte", t1_tk3: "Feuerstelle", t1_tk4: "muss", t1_tk5: "immer", t1_tk6: "bewacht", t1_tk7: "werden.", t1_tk8: "",
    t1_bl1: "Nutzen", t1_bl2: "Gefahr", t1_i1: "Kochen", t1_i2: "Brand", t1_i3: "Wärme", t1_i4: "Rauch",
    t2_title: "Feuerdreieck", t2_text: "Drei Dinge müssen für ein Feuer zusammenkommen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welche drei Dinge sind das?", t2_qa: "Brennstoff, Hitze, Sauerstoff", t2_qb: "Holz, Wasser, Luft", t2_qc: "Gas, Stein, Licht", t2_qd: "Eis, Feuer, Wind",
    t2_w1: "Ohne", t2_w2: "Sauerstoff", t2_w3: "kann", t2_w4: "keine", t2_w5: "Flamme", t2_w6: "existieren.", t2_w7: "",
    t2_l1: "Holz", t2_r1: "Brennstoff", t2_l2: "Zündholz", t2_r2: "Hitze", t2_l3: "Luft", t2_r3: "Sauerstoff",
    t2_sent: "Entfernt man eins, ___ das Feuer.", t2_qa2: "erlischt", t2_qb2: "wächst", t2_qc2: "hüpft", t2_qd2: "singt",
    t2_f1: "Das", t2_f2: "Feuerdreieck", t2_f3: "erklärt", t2_f4: "wie", t2_f5: "Brände", t2_f6: "entstehen.", t2_f7: "",
    t2_tk1: "Zum", t2_tk2: "Löschen", t2_tk3: "entfernt", t2_tk4: "man", t2_tk5: "Hitze,", t2_tk6: "Sauerstoff", t2_tk7: "oder", t2_tk8: "Brennstoff.",
    t2_bl1: "Nötig", t2_bl2: "Nicht nötig", t2_i1: "Hitze", t2_i2: "Wasser", t2_i3: "Luft", t2_i4: "Steine",
    t3_title: "Notruf 112", t3_text: "Im Notfall zählt jede Sekunde.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welche Nummer wählst du bei Feuer?", t3_qa: "112", t3_qb: "110", t3_qc: "118", t3_qd: "911",
    t3_w1: "Wer", t3_w2: "ruft", t3_w3: "an", t3_w4: "und", t3_w5: "wo", t3_w6: "brennt", t3_w7: "es?",
    t3_l1: "Wer", t3_r1: "Name", t3_l2: "Was", t3_r2: "Ereignis", t3_l3: "Wo", t3_r3: "Ort",
    t3_sent: "Die 5 W-Fragen sind ___.", t3_qa2: "wichtig", t3_qb2: "egal", t3_qc2: "unbekannt", t3_qd2: "lustig",
    t3_f1: "Bleib", t3_f2: "für", t3_f3: "Rückfragen", t3_f4: "am", t3_f5: "Telefon.", t3_f6: "", t3_f7: "",
    t3_tk1: "Ruhe", t3_tk2: "bewahren", t3_tk3: "ist", t3_tk4: "beim", t3_tk5: "Notruf", t3_tk6: "das", t3_tk7: "Allerwichtigste.", t3_tk8: "",
    t3_bl1: "Notruf", t3_bl2: "Normal", t3_i1: "112", t3_i2: "123", t3_i3: "Feuer", t3_i4: "Spiel",
    t4_title: "Die Kerze", t4_text: "Eine Kerze besteht aus Wachs und einem Docht.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo brennt die Kerze?", t4_qa: "Am Docht", t4_qb: "Am Wachs", t4_qc: "Am Halter", t4_qd: "Überall",
    t4_w1: "Die", t4_w2: "Flamme", t4_w3: "braucht", t4_w4: "den", t4_w5: "Wachsdampf", t4_w6: "zum", t4_w7: "Leuchten.",
    t4_l1: "Wachs", t4_r1: "Brennstoff", t4_l2: "Docht", t4_r2: "Leiter", t4_l3: "Flamme", t4_r3: "Licht",
    t4_sent: "Das flüssige Wachs steigt im ___ nach oben.", t4_qa2: "Docht", t4_qb2: "Glas", t4_qc2: "Rand", t4_qd2: "Halter",
    t4_f1: "Lass", t4_f2: "eine", t4_f3: "Kerze", t4_f4: "nie", t4_f5: "unbeaufsichtigt", t4_f6: "brennen.", t4_f7: "",
    t4_tk1: "Außen", t4_tk2: "an", t4_tk3: "der", t4_tk4: "Flamme", t4_tk5: "ist", t4_tk6: "es", t4_tk7: "am", t4_tk8: "heißesten.",
    t4_bl1: "Fest", t4_bl2: "Flüssig", t4_i1: "Kerze", t4_i2: "Wachstropfen", t4_i3: "Halter", t4_i4: "See",
    t5_title: "Löschmittel", t5_text: "Wasser löscht nicht jedes Feuer.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Womit löscht man brennendes Fett?", t5_qa: "Deckel / Löschdecke", t5_qb: "Wasser", t5_qc: "Limonade", t5_qd: "Mehl",
    t5_w1: "Verwende", t5_w2: "Sand", t5_w3: "um", t5_w4: "ein", t5_w5: "kleines", t5_w6: "Feuer", t5_w7: "zu löschen.",
    t5_l1: "Wasser", t5_r1: "Kühlen", t5_l2: "Sand", t5_r2: "Ersticken", t5_l3: "Schaum", t5_r3: "Trennen",
    t5_sent: "Wasser auf Fett führt zu einer ___.", t5_qa2: "Fettexplosion", t5_qb2: "Party", t5_qc2: "Abkühlung", t5_qd2: "Lösung",
    t5_f1: "Löschpulver", t5_f2: "wird", t5_f3: "oft", t5_f4: "in", t5_f5: "Feuerlöschern", t5_f6: "verwendet.", t5_f7: "",
    t5_tk1: "Elektrische", t5_tk2: "Geräte", t5_tk3: "darf", t5_tk4: "man", t5_tk5: "nicht", t5_tk6: "mit", t5_tk7: "Wasser", t5_tk8: "löschen.",
    t5_bl1: "Löschen", t5_bl2: "Brennen", t5_i1: "Wasser", t5_i2: "Holz", t5_i3: "Sand", t5_i4: "Papier",
    t6_title: "Die Feuerwehr", t6_text: "Retten, Löschen, Bergen, Schützen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was ist keine Aufgabe der Feuerwehr?", t6_qa: "Brötchen backen", t6_qb: "Keller auspumpen", t6_qc: "Katzen retten", t6_qd: "Unfälle absichern",
    t6_w1: "Die", t6_w2: "Feuerwehr", t6_w3: "hilft", t6_w4: "auch", t6_w5: "bei", t6_w6: "schlimmen", t6_w7: "Unfällen.",
    t6_l1: "Helm", t6_r1: "Kopf", t6_l2: "Schlauch", t6_r2: "Wasser", t6_l3: "Leiter", t6_r3: "Höhe",
    t6_sent: "Feuerwehrleute tragen schützende ___.", t6_qa2: "Kleidung", t6_qb2: "Badehosen", t6_qc2: "Anzüge", t6_qd2: "Hemden",
    t6_f1: "Es", t6_f2: "gibt", t6_f3: "Berufsfeuerwehren", t6_f4: "und", t6_f5: "Freiwillige", t6_f6: "Feuerwehren.", t6_f7: "",
    t6_tk1: "Ein", t6_tk2: "Atemschutzgerät", t6_tk3: "schützt", t6_tk4: "vor", t6_tk5: "dem", t6_tk6: "giftigen", t6_tk7: "Rauch.", t6_tk8: "",
    t6_bl1: "Ausrüstung", t6_bl2: "Aufgabe", t6_i1: "Axt", t6_i2: "Löschen", t6_i3: "Helm", t6_i4: "Retten",
    t7_title: "Zündhölzer", t7_text: "Umgang mit Zündhölzern muss gelernt sein.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "In welche Richtung reibt man das Zündholz?", t7_qa: "Vom Körper weg", t7_qb: "Zum Körper hin", t7_qc: "Gar nicht", t7_qd: "Egal",
    t7_w1: "Streiche", t7_w2: "das", t7_w3: "Zündholz", t7_w4: "immer", t7_w5: "vom", t7_w6: "Körper", t7_w7: "weg.",
    t7_l1: "Kopf", t7_r1: "Zündmasse", t7_l2: "Stab", t7_r2: "Holz", t7_l3: "Schachtel", t7_r3: "Reibfläche",
    t7_sent: "Die Reibfläche enthält ___.", t7_qa2: "Phosphor", t7_qb2: "Zucker", t7_qc2: "Salz", t7_qd2: "Mehl",
    t7_f1: "Zündhölzer", t7_f2: "sind", t7_f3: "kein", t7_f4: "Spielzeug", t7_f5: "für", t7_f6: "Kinder.", t7_f7: "",
    t7_tk1: "Halte", t7_tk2: "das", t7_tk3: "brennende", t7_tk4: "Holz", t7_tk5: "immer", t7_tk6: "über", t7_tk7: "eine", t7_tk8: "Unterlage.",
    t7_bl1: "Sicher", t7_bl2: "Gefährlich", t7_i1: "Wegstreichen", t7_i2: "Spielen", t7_i3: "Pusten", t7_i4: "Werfen",
    t8_title: "Brandschutz", t8_text: "Vorsorge ist besser als Löschen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wo hängen Rauchmelder am besten?", t8_qa: "An der Decke", t8_qb: "Auf dem Boden", t8_qc: "Hinter dem Schrank", t8_qd: "Im Keller",
    t8_w1: "Rauch", t8_w2: "steigt", t8_w3: "nach", t8_w4: "oben", t8_w5: "und", t8_w6: "ist", t8_w7: "giftig.",
    t8_l1: "Rauchmelder", t8_r1: "Warnen", t8_l2: "Feuerlöscher", t8_r2: "Löschen", t8_l3: "Fluchtweg", t8_r3: "Sicherheit",
    t8_sent: "Ein Rauchmelder warnt uns durch einen ___ Ton.", t8_qa2: "lauten", t8_qb2: "leisen", t8_qc2: "lustigen", t8_qd2: "netten",
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
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Die Kerze", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{ left: "t4_l1", right: "t4_r1" }, { left: "t4_l2", right: "t4_r2" }, { left: "t4_l3", right: "t4_r3" }] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Löschmittel", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7", "t5_tk8"].filter(x => x !== ""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Die Feuerwehr", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4", "t6_f5", "t6_f6", "t6_f7"].filter(x => x !== "") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Zündhölzer", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{ id: "b1", label: "t7_bl1" }, { id: "b2", label: "t7_bl2" }], items: [{ text: "t7_i1", bucketId: "b1" }, { text: "t7_i2", bucketId: "b2" }, { text: "t7_i3", bucketId: "b1" }, { text: "t7_i4", bucketId: "b2" }] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Brandschutz", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  }
];

// ─── Stub pools for missing islands ──────────────────────────────────────────

function mkStub(de: string, en: string, hu: string, ro: string, color: string): { labels: Record<string, Record<string, string>>; pool: PoolTopicDef[] } {
  const labels = {
    de: { explorer_title: de, t1_title: de, t1_text: de, t1_q: de+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: de, t1_h1: de, t1_h2: de, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    en: { explorer_title: en, t1_title: en, t1_text: en, t1_q: en+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: en, t1_h1: en, t1_h2: en, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    hu: { explorer_title: hu, t1_title: hu, t1_text: hu, t1_q: hu+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: hu, t1_h1: hu, t1_h2: hu, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
    ro: { explorer_title: ro, t1_title: ro, t1_text: ro, t1_q: ro+"?", t1_qa: "A", t1_qb: "B", t1_qc: "C", t1_qd: "D", t1_inst: ro, t1_h1: ro, t1_h2: ro, t1_l1: "1", t1_r1: "a", t1_l2: "2", t1_r2: "b", t1_l3: "3", t1_r3: "c" },
  };
  const pool: PoolTopicDef[] = [{
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📚", color },
    hintKey: "t1_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h1" },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium" as const,
  }];
  return { labels, pool };
}

const _GETREIDE = mkStub("Getreide & Ernte", "Grain & Harvest", "Gabona & Aratás", "Cereale & Recoltă", "#F59E0B");
export const GETREIDE_K3_LABELS = _GETREIDE.labels;
export const GETREIDE_K3_POOL = _GETREIDE.pool;

const _WIESE = mkStub("Wiese & Tiere", "Meadow & Animals", "Rét & Állatok", "Pajiște & Animale", "#10B981");
export const WIESE_K3_LABELS = _WIESE.labels;
export const WIESE_K3_POOL = _WIESE.pool;

const _KOERPER = mkStub("Körper & Gesundheit", "Body & Health", "Test & Egészség", "Corp & Sănătate", "#EF4444");
export const KOERPER_K3_LABELS = _KOERPER.labels;
export const KOERPER_K3_POOL = _KOERPER.pool;

const _MEDIEN = mkStub("Medien & Kommunikation", "Media & Communication", "Média & Kommunikáció", "Media & Comunicare", "#3B82F6");
export const MEDIEN_K3_LABELS = _MEDIEN.labels;
export const MEDIEN_K3_POOL = _MEDIEN.pool;

const _KARTEN = mkStub("Karten & Orientierung", "Maps & Orientation", "Térképek & Tájékozódás", "Hărți & Orientare", "#8B5CF6");
export const KARTEN_K3_LABELS = _KARTEN.labels;
export const KARTEN_K3_POOL = _KARTEN.pool;

const _STROM = mkStub("Strom & Energie", "Electricity & Energy", "Áram & Energia", "Electricitate & Energie", "#F59E0B");
export const STROM_K3_LABELS = _STROM.labels;
export const STROM_K3_POOL = _STROM.pool;

const _FINALE = mkStub("Großes Finale K3", "Grand Finale K3", "Nagy Finálé K3", "Marea Finală K3", "#FFD700");
export const FINALE_K3_LABELS = _FINALE.labels;
export const FINALE_K3_POOL = _FINALE.pool;
