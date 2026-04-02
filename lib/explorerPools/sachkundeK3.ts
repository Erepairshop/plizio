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
    t9_title: "Raubtiere im Wald", t9_text: "Luchs, Wolf und Wildkatze jagen im Wald.", t9_inst: "Löse die Aufgabe:", t9_h1: "Schau genau hin!", t9_h2: "Denk nach!", t9_q: "Welches Tier ist ein Raubtier im Wald?", t9_qa: "Der Luchs", t9_qb: "Das Reh", t9_qc: "Das Eichhörnchen", t9_qd: "Der Hase",
    t9_w1: "Raubtiere", t9_w2: "haben", t9_w3: "scharfe", t9_w4: "Sinne", t9_w5: "für", t9_w6: "die", t9_w7: "Jagd.",
    t9_sent: "Der Luchs ist eine ___.", t9_qa2: "Raubkatze", t9_qb2: "Vogelart", t9_qc2: "Pflanze", t9_qd2: "Fischart",
    t10_title: "Photosynthese", t10_text: "Wie Pflanzen aus Licht Energie gewinnen.", t10_inst: "Löse die Aufgabe:", t10_h1: "Schau genau hin!", t10_h2: "Denk nach!", t10_q: "Was brauchen Pflanzen für die Photosynthese?", t10_qa: "Sonnenlicht", t10_qb: "Schatten", t10_qc: "Milch", t10_qd: "Brot",
    t10_w1: "Pflanzen", t10_w2: "verwandeln", t10_w3: "Sonnenlicht", t10_w4: "in", t10_w5: "wertvolle", t10_w6: "Energie.", t10_w7: "",
    t10_sent: "Pflanzen produzieren dabei ___.", t10_qa2: "Sauerstoff", t10_qb2: "Kohle", t10_qc2: "Sand", t10_qd2: "Lärm",
    },
    };

export const WALD_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Waldstockwerke", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { generate: "waldschichten" },
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7", "t5_tk8"].filter(x => x !== ""), correctIndices: [0, 3] },
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
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🐺", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "waldtiere_raubtiere" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "☀️", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "t10_sent", choices: ["t10_qa2", "t10_qb2", "t10_qc2", "t10_qd2"], correctIndex: 0 },
    quiz: { generate: "photosynthese_einfach" },
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
    t9_title: "Notsituationen", t9_text: "Richtiges Handeln im Notfall kann Leben retten.", t9_inst: "Löse die Aufgabe:", t9_h1: "Schau genau hin!", t9_h2: "Denk nach!", t9_q: "Was ist im Notfall am wichtigsten?", t9_qa: "Ruhe bewahren", t9_qb: "Weglaufen", t9_qc: "Schreien", t9_qd: "Sachen packen",
    t9_w1: "Im", t9_w2: "Notfall", t9_w3: "musst", t9_w4: "du", t9_w5: "ruhig", t9_w6: "und", t9_w7: "besonnen bleiben.",
    t9_sent: "Hole bei einem Unfall sofort ___.", t9_qa2: "Hilfe", t9_qb2: "Spielzeug", t9_qc2: "Essen", t9_qd2: "Schlaf",
    t10_title: "Brandschutz-Profi", t10_text: "Bist du bereit für den Ernstfall?", t10_inst: "Löse die Aufgabe:", t10_h1: "Schau genau hin!", t10_h2: "Denk nach!", t10_q: "Was machst du, wenn es brennt?", t10_qa: "Feuerwehr rufen (112)", t10_qb: "Verstecken", t10_qc: "Sachen packen", t10_qd: "Fenster öffnen",
    t10_w1: "Sicherheit", t10_w2: "geht", t10_w3: "immer", t10_w4: "vor,", t10_w5: "besonders", t10_w6: "bei", t10_w7: "Feuer.",
    t10_sent: "Die Nummer der Feuerwehr ist ___.", t10_qa2: "112", t10_qb2: "110", t10_qc2: "118", t10_qd2: "911",
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
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚨", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "notsituationen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🔥", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "t10_sent", choices: ["t10_qa2", "t10_qb2", "t10_qc2", "t10_qd2"], correctIndex: 0 },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
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
    interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium" as const,
  }];
  return { labels, pool };
}

export const GETREIDE_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Getreide & Ernte",
    t1_title: "Getreidearten", t1_text: "Es gibt viele verschiedene Arten von Getreide.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Welches Getreide wird oft für dunkles Brot verwendet?", t1_qa: "Roggen", t1_qb: "Weizen", t1_qc: "Reis", t1_qd: "Mais",
    t1_w1: "Weizen,", t1_w2: "Roggen,", t1_w3: "Gerste", t1_w4: "und", t1_w5: "Hafer", t1_w6: "sind", t1_w7: "Getreidearten.",
    t1_sent: "Aus Hafer macht man oft ___.", t1_qa2: "Müsli", t1_qb2: "Saft", t1_qc2: "Käse", t1_qd2: "Wurst",
    t2_title: "Vom Korn zum Brot", t2_text: "Der Weg des Getreides ist weit.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was passiert in der Mühle?", t2_qa: "Körner werden gemahlen", t2_qb: "Brot wird gebacken", t2_qc: "Getreide wird gesät", t2_qd: "Wasser wird gekocht",
    t2_w1: "Zuerst", t2_w2: "wird", t2_w3: "das", t2_w4: "Korn", t2_w5: "zu", t2_w6: "Mehl", t2_w7: "verarbeitet.",
    t2_sent: "Der Bäcker backt aus Mehl ___.", t2_qa2: "Brot", t2_qb2: "Steine", t2_qc2: "Eisen", t2_qd2: "Glas",
    t3_title: "Die Ernte früher", t3_text: "Früher war die Ernte schwere Handarbeit.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Mit welchem Werkzeug wurde früher gemäht?", t3_qa: "Mit der Sense", t3_qb: "Mit dem Traktor", t3_qc: "Mit dem Auto", t3_qd: "Mit der Schere",
    t3_w1: "Früher", t3_w2: "halfen", t3_w3: "alle", t3_w4: "Menschen", t3_w5: "bei", t3_w6: "der", t3_w7: "Ernte.",
    t3_sent: "Heute übernehmen ___ die schwere Arbeit.", t3_qa2: "Maschinen", t3_qb2: "Pferde", t3_qc2: "Hunde", t3_qd2: "Katzen",
    t4_title: "Die Getreidepflanze", t4_text: "Der Aufbau einer Ähre.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo sitzen die Körner?", t4_qa: "In der Ähre", t4_qb: "An den Wurzeln", t4_qc: "Im Halm", t4_qd: "In den Blättern",
    t4_w1: "Der", t4_w2: "Halm", t4_w3: "gibt", t4_w4: "der", t4_w5: "Pflanze", t4_w6: "ihren", t4_w7: "Halt.",
    t4_sent: "Getreide gehört zur Familie der ___.", t4_qa2: "Gräser", t4_qb2: "Bäume", t4_qc2: "Pilze", t4_qd2: "Moose",
    t5_title: "Nützliche Pflanzen", t5_text: "Pflanzen, die uns Menschen helfen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Welche Pflanze liefert uns Öl?", t5_qa: "Raps", t5_qb: "Gras", t5_qc: "Eiche", t5_qd: "Tanne",
    t5_w1: "Viele", t5_w2: "Pflanzen", t5_w3: "dienen", t5_w4: "uns", t5_w5: "als", t5_w6: "wichtige", t5_w7: "Nahrung.",
    t5_sent: "Baumwolle wird für ___ verwendet.", t5_qa2: "Kleidung", t5_qb2: "Essen", t5_qc2: "Trinken", t5_qd2: "Brennstoff",
    t6_title: "Pflanzenvermehrung", t6_text: "Wie aus einem Samen eine neue Pflanze wird.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was braucht ein Samen zum Keimen?", t6_qa: "Wasser und Wärme", t6_qb: "Eis und Kälte", t6_qc: "Dunkelheit und Salz", t6_qd: "Lärm und Wind",
    t6_w1: "Der", t6_w2: "Wind", t6_w3: "verbreitet", t6_w4: "oft", t6_w5: "die", t6_w6: "leichten", t6_w7: "Samen.",
    t6_sent: "Bienen helfen bei der ___.", t6_qa2: "Bestäubung", t6_qb2: "Ernte", t6_qc2: "Bewässerung", t6_qd2: "Düngung",
    t7_title: "In der Mühle", t7_text: "Vom Korn zum feinen Mehl.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was treibt eine Wassermühle an?", t7_qa: "Fließendes Wasser", t7_qb: "Der Wind", t7_qc: "Ein Motor", t7_qd: "Ein Pferd",
    t7_w1: "Mühlsteine", t7_w2: "zerkleinern", t7_w3: "die", t7_w4: "harten", t7_w5: "Körner", t7_w6: "zu", t7_w7: "Mehl.",
    t7_sent: "Heute gibt es große ___.", t7_qa2: "Industriemühlen", t7_qb2: "Windräder", t7_qc2: "Handmühlen", t7_qd2: "Gärten",
    t8_title: "Beim Bäcker", t8_text: "Frisches Brot und Brötchen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was macht den Teig locker?", t8_qa: "Hefe", t8_qb: "Sand", t8_qc: "Steine", t8_qd: "Salz",
    t8_w1: "Der", t8_w2: "Bäcker", t8_w3: "steht", t8_w4: "schon", t8_w5: "sehr", t8_w6: "früh", t8_w7: "auf.",
    t8_sent: "Ein Bäcker arbeitet in einer ___.", t8_qa2: "Backstube", t8_qb2: "Werkstatt", t8_qc2: "Schule", t8_qd2: "Klinik",
    t9_title: "Vollkorn", t9_text: "Das ganze Korn ist gesund.", t9_inst: "Löse die Aufgabe:", t9_h1: "Schau genau hin!", t9_h2: "Denk nach!", t9_q: "Warum ist Vollkornbrot gesund?", t9_qa: "Wegen der Ballaststoffe", t9_qb: "Weil es dunkel ist", t9_qc: "Wegen der Farbe", t9_qd: "Weil es hart ist",
    t9_w1: "Vollkornprodukte", t9_w2: "enthalten", t9_w3: "viele", t9_w4: "wichtige", t9_w5: "Vitamine", t9_w6: "und", t9_w7: "Mineralstoffe.",
    t9_sent: "Vollkornbrot hält ___ satt.", t9_qa2: "länger", t9_qb2: "kürzer", t9_qc2: "gar nicht", t9_qd2: "sofort",
    t10_title: "Getreide-Check", t10_text: "Bist du ein Ernte-Experte?", t10_inst: "Löse die Aufgabe:", t10_h1: "Schau genau hin!", t10_h2: "Denk nach!", t10_q: "Was ist kein Getreide?", t10_qa: "Der Apfel", t10_qb: "Der Weizen", t10_qc: "Der Roggen", t10_qd: "Der Hafer",
    t10_w1: "Getreide", t10_w2: "ist", t10_w3: "ein", t10_w4: "unverzichtbarer", t10_w5: "Teil", t10_w6: "unserer", t10_w7: "Nahrung.",
    t10_sent: "Wir sollten achtsam mit ___ umgehen.", t10_qa2: "Lebensmitteln", t10_qb2: "Steinen", t10_qc2: "Spielzeug", t10_qd2: "Müll",
  },
  en: { explorer_title: "Grain & Harvest", t1_title: "Grain Types", t2_title: "From Grain to Bread", t3_title: "Harvest in the Past", t4_title: "The Cereal Plant", t5_title: "Useful Plants", t6_title: "Plant Reproduction", t7_title: "In the Mill", t8_title: "At the Baker", t9_title: "Whole Grain", t10_title: "Grain Check" },
  hu: { explorer_title: "Gabona és betakarítás", t1_title: "Gabonafajták", t2_title: "A magtól a kenyérig", t3_title: "Betakarítás régen", t4_title: "A gabonanövény", t5_title: "Hasznos növények", t6_title: "Növényszaporodás", t7_title: "A malomban", t8_title: "A péknél", t9_title: "Teljes kiőrlésű", t10_title: "Gabona-ellenőrzés" },
  ro: { explorer_title: "Cereale și recoltare", t1_title: "Tipuri de cereale", t2_title: "De la bob la pâine", t3_title: "Recoltarea în trecut", t4_title: "Planta de cereale", t5_title: "Plante utile", t6_title: "Reproducerea plantelor", t7_title: "La moară", t8_title: "La brutar", t9_title: "Cereale integrale", t10_title: "Verificarea cerealelor" },
};
export const GETREIDE_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌾", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🚜", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧺", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🥕", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "nützliche_pflanzen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌺", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { generate: "pflanzenvermehrung" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏗️", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🥖", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🥪", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🍞", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  }
];

export const WIESE_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wiese & Tiere",
    t1_title: "Lebensraum Wiese", t1_text: "Die Wiese ist ein buntes Paradies für viele Lebewesen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer lebt auf der Wiese?", t1_qa: "Viele Tiere und Pflanzen", t1_qb: "Nur Fische", t1_qc: "Niemand", t1_qd: "Nur Autos",
    t1_w1: "Die", t1_w2: "Wiese", t1_w3: "bietet", t1_w4: "Nahrung", t1_w5: "und", t1_w6: "Schutz", t1_w7: "für Tiere.",
    t1_sent: "Auf der Wiese wachsen viele ___.", t1_qa2: "Blumen", t1_qb2: "Steine", t1_qc2: "Autos", t1_qd2: "Häuser",
    t2_title: "Wiesenstockwerke", t2_text: "Die Wiese ist in Schichten unterteilt.", t2_inst: "Ordne zu:", t2_h1: "Unten bis oben", t2_h2: "Wurzel bis Blüte", t2_l1: "Bodenschicht", t2_r1: "Wurzeln", t2_l2: "Halmschicht", t2_r2: "Stängel", t2_l3: "Blütenschicht", t2_r3: "Blüten",
    t2_sent: "In der ___ wohnen Erdhungrige.", t2_qa2: "Bodenschicht", t2_qb2: "Luft", t2_qc2: "Sonne", t2_qd2: "Wolke",
    t3_title: "Wiesenpflanzen", t3_text: "Löwenzahn und Klee sind typisch.", t3_inst: "Löse die Aufgabe:", t3_h1: "Blütenfarben", t3_h2: "Formen", t3_q: "Welche Farbe hat der Löwenzahn?", t3_qa: "Gelb", t3_qb: "Blau", t3_qc: "Rot", t3_qd: "Grün",
    t3_f1: "Der", t3_f2: "Löwenzahn", t3_f3: "verwandelt", t3_f4: "sich", t3_f5: "in", t3_f6: "eine", t3_f7: "Pusteblume.",
    t4_title: "Insekten", t4_text: "Es summt und brummt.", t4_inst: "Markiere die Tiere:", t4_h1: "Insekten haben 6 Beine", t4_h2: "Such die Krabbler", t4_tk1: "Bienen", t4_tk2: "sammeln", t4_tk3: "fleißig", t4_tk4: "Nektar", t4_tk5: "für", t4_tk6: "ihren", t4_tk7: "Honig.", t4_tk8: "",
    t5_title: "Schmetterlinge", t5_text: "Von der Raupe zum Falter.", t5_inst: "Bringe es in Ordnung:", t5_w1: "Zuerst", t5_w2: "ist", t5_w3: "es", t5_w4: "ein", t5_w5: "Ei,", t5_w6: "dann", t5_w7: "eine Raupe.",
    t5_sent: "Danach verpuppt sie sich zum ___.", t5_qa2: "Schmetterling", t5_qb2: "Käfer", t5_qc2: "Wurm", t5_qd2: "Vogel",
    t6_title: "Tiergruppen", t6_text: "Säugetiere, Insekten und Vögel.", t6_inst: "Sortiere ein:", t6_h1: "Wer gehört wohin?", t6_h2: "Denk an die Merkmale", t6_bl1: "Insekt", t6_bl2: "Säugetier", t6_i1: "Biene", t6_i2: "Feldmaus", t6_i3: "Grashüpfer", t6_i4: "Reh",
    t7_title: "Nahrungsnetze", t7_text: "Fressen und gefressen werden.", t7_inst: "Löse die Aufgabe:", t7_h1: "Wer frisst die Maus?", t7_h2: "Nahrungskette", t7_q: "Was frisst der Turmfalke?", t7_qa: "Feldmäuse", t7_qb: "Gras", t7_qc: "Steine", t7_qd: "Blumen",
    t8_title: "Bestäubung", t8_text: "Bienen helfen den Blumen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Blütenstaub", t8_h2: "Transport", t8_w1: "Bienen", t8_w2: "tragen", t8_w3: "den", t8_w4: "Pollen", t8_w5: "von", t8_w6: "Blüte", t8_w7: "zu Blüte.",
    t9_title: "Heuernte", t9_text: "Gras wird zu Heu.", t9_inst: "Löse die Aufgabe:", t9_h1: "Sonne hilft", t9_h2: "Trocknen", t9_q: "Was wird aus getrocknetem Gras?", t9_qa: "Heu", t9_qb: "Stroh", t9_qc: "Silage", t9_qd: "Mehl", t9_sent: "Heu ist getrocknetes ___.", t9_qa2: "Gras", t9_qb2: "Holz", t9_qc2: "Wasser", t9_qd2: "Brot",
    t10_title: "Wiesen-Check", t10_text: "Bist du ein Wiesen-Experte?", t10_inst: "Bringe den Satz in Ordnung:", t10_w1: "Wir", t10_w2: "müssen", t10_w3: "die", t10_w4: "Wiese", t10_w5: "und", t10_w6: "ihre", t10_w7: "Bewohner schützen.",
  },
  en: { explorer_title: "Meadow & Animals", t1_title: "Habitat Meadow", t2_title: "Meadow Layers", t3_title: "Meadow Plants", t4_title: "Insects", t5_title: "Butterflies", t6_title: "Animal Groups", t7_title: "Food Webs", t8_title: "Pollination", t9_title: "Hay Harvest", t10_title: "Meadow Check" },
  hu: { explorer_title: "Rét & Állatok", t1_title: "A rét mint élőhely", t2_title: "A rét szintjei", t3_title: "Réti növények", t4_title: "Rovarok", t5_title: "Pillangók", t6_title: "Állatcsoportok", t7_title: "Táplálékhálózatok", t8_title: "Beporzás", t9_title: "Szénabetakarítás", t10_title: "Rét-ellenőrzés" },
  ro: { explorer_title: "Pajiște & Animale", t1_title: "Habitatul pajiște", t2_title: "Straturile pajiștii", t3_title: "Plantele pajiștii", t4_title: "Insecte", t5_title: "Fluturi", t6_title: "Grupuri de animale", t7_title: "Rețele trofice", t8_title: "Polenizare", t9_title: "Recoltarea fânului", t10_title: "Verificarea pajiștii" },
};

export const WIESE_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🪜", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌼", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", fragments: ["t3_f1", "t3_f2", "t3_f3", "t3_f4", "t3_f5", "t3_f6", "t3_f7"] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐝", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7"], correctIndices: [0] },
    quiz: { generate: "schmetterlinge_insekten" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦋", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "schmetterlinge_insekten" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🦎", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { generate: "tierklassen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🦅", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { generate: "nahrungsnetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌸", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "blüte_bestäubung" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚜", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  }
];

export const KOERPER_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körper & Gesundheit",
    t1_title: "Das Skelett", t1_text: "Das Skelett gibt uns Form und Stabilität.", t1_inst: "Löse die Aufgabe:", t1_h1: "Knochenbau", t1_h2: "Halt im Körper", t1_sent: "Die ___ schützt unser Rückenmark.", t1_qa2: "Wirbelsäule", t1_qb2: "Lunge", t1_qc2: "Haut", t1_qd2: "Nase",
    t2_title: "Gelenke", t2_text: "Gelenke machen uns beweglich.", t2_inst: "Bringe die Wörter in die richtige Reihenfolge:", t2_h1: "Bewegung", t2_h2: "Verbindung", t2_w1: "Gelenke", t2_w2: "verbinden", t2_w3: "unsere", t2_w4: "Knochen", t2_w5: "miteinander.", t2_w6: "", t2_w7: "",
    t3_title: "Innere Organe", t3_text: "Wichtige Organe im Körperinneren.", t3_inst: "Verbinde die Paare:", t3_h1: "Aufgaben", t3_h2: "Wo ist was?", t3_l1: "Herz", t3_r1: "Pumpt Blut", t3_l2: "Lunge", t3_r2: "Atmen", t3_l3: "Magen", t3_r3: "Verdauen",
    t4_title: "Ernährungspyramide", t4_text: "Gesunde Ernährung auf einen Blick.", t4_inst: "Löse die Aufgabe:", t4_h1: "Basis", t4_h2: "Täglich essen", t4_sent: "Wir sollten viel ___ und Gemüse essen.", t4_qa2: "Obst", t4_qb2: "Süßigkeiten", t4_qc2: "Fett", t4_qd2: "Salz",
    t5_title: "Vitamine", t5_text: "Vitamine halten uns gesund.", t5_inst: "Markiere die richtigen Wörter:", t5_h1: "Gesundmacher", t5_h2: "In Früchten", t5_tk1: "Vitamine", t5_tk2: "stärken", t5_tk3: "unser", t5_tk4: "Immunsystem", t5_tk5: "und", t5_tk6: "schützen", t5_tk7: "uns.", t5_tk8: "",
    t6_title: "Wasser trinken", t6_text: "Unser Körper braucht viel Flüssigkeit.", t6_inst: "Baue den Satz:", t6_h1: "Durst", t6_h2: "Lebenswichtig", t6_f1: "Wasser", t6_f2: "ist", t6_f3: "der", t6_f4: "beste", t6_f5: "Durstlöscher.", t6_f6: "", t6_f7: "",
    t7_title: "Milchzähne", t7_text: "Die ersten Zähne des Kindes.", t7_inst: "Sortiere ein:", t7_h1: "Anzahl", t7_h2: "Zahnwechsel", t7_bl1: "Milchgebiss", t7_bl2: "Erwachsene", t7_i1: "20 Zähne", t7_i2: "32 Zähne", t7_i3: "Wackelzähne", t7_i4: "Weisheitszähne",
    t8_title: "Zahnpflege", t8_text: "Zähne putzen nicht vergessen!", t8_inst: "Löse die Aufgabe:", t8_h1: "Sauberkeit", t8_h2: "Kariesschutz", t8_sent: "Man sollte seine Zähne ___ täglich putzen.", t8_qa2: "zweimal", t8_qb2: "nie", t8_qc2: "einmal im Jahr", t8_qd2: "nur sonntags",
    t9_title: "Bewegung & Sport", t9_text: "Sport stärkt den ganzen Körper.", t9_inst: "Bringe die Wörter in die richtige Reihenfolge:", t9_h1: "Fitness", t9_h2: "Muskeln", t9_w1: "Regelmäßige", t9_w2: "Bewegung", t9_w3: "hält", t9_w4: "unseren", t9_w5: "Körper", t9_w6: "fit", t9_w7: "und gesund.",
    t10_title: "Das Herz", t10_text: "Unser Motor im Körper.", t10_inst: "Löse die Aufgabe:", t10_h1: "Pumpe", t10_h2: "Herzschlag", t10_sent: "Das Herz pumpt ___ durch den Körper.", t10_qa2: "Blut", t10_qb2: "Wasser", t10_qc2: "Luft", t10_qd2: "Essen",
  },
  en: { explorer_title: "Body & Health", t1_title: "The Skeleton", t2_title: "Joints", t3_title: "Internal Organs", t4_title: "Food Pyramid", t5_title: "Vitamins", t6_title: "Drinking Water", t7_title: "Milk Teeth", t8_title: "Dental Care", t9_title: "Exercise & Sport", t10_title: "The Heart" },
  hu: { explorer_title: "Test & Egészség", t1_title: "A csontváz", t2_title: "Ízületek", t3_title: "Belső szervek", t4_title: "Étkezési piramis", t5_title: "Vitaminok", t6_title: "Vízivás", t7_title: "Tejfogak", t8_title: "Fogápolás", t9_title: "Mozgás & Sport", t10_title: "A szív" },
  ro: { explorer_title: "Corp & Sănătate", t1_title: "Scheletul", t2_title: "Articulațiile", t3_title: "Organe interne", t4_title: "Piramida alimentară", t5_title: "Vitamine", t6_title: "Consumul de apă", t7_title: "Dinții de lapte", t8_title: "Îngrijirea dinților", t9_title: "Mişcare & Sport", t10_title: "Inima" },
};

export const KOERPER_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🦴", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { generate: "körperaufbau" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "💪", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"], correctOrder: [0, 1, 2, 3, 4] },
    quiz: { generate: "körperaufbau" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🫁", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }] },
    quiz: { generate: "körperaufbau" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🥗", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { generate: "ernährungspyramide" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🍎", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5", "t5_tk6", "t5_tk7"], correctIndices: [0, 3, 5] },
    quiz: { generate: "ernährungspyramide" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💧", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4", "t6_f5"] },
    quiz: { generate: "ernährungspyramide" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🦷", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{ id: "b1", label: "t7_bl1" }, { id: "b2", label: "t7_bl2" }], items: [{ text: "t7_i1", bucketId: "b1" }, { text: "t7_i2", bucketId: "b2" }, { text: "t7_i3", bucketId: "b1" }, { text: "t7_i4", bucketId: "b2" }] },
    quiz: { generate: "zahnentwicklung" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🪥", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { generate: "zahnentwicklung" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🏃", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "bewegung_sport" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "❤️", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "t10_sent", choices: ["t10_qa2", "t10_qb2", "t10_qc2", "t10_qd2"], correctIndex: 0 },
    quiz: { generate: "bewegung_sport" },
    difficulty: "medium"
  }
];

export const MEDIEN_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Medien & Berufe",
    t1_title: "Internetregeln", t1_text: "Sicher im Netz unterwegs sein.", t1_inst: "Löse die Aufgabe:", t1_h1: "Sicherheit", t1_h2: "Passwort", t1_sent: "Verrate niemals dein ___ im Internet.", t1_qa2: "Passwort", t1_qb2: "Lieblingsessen", t1_qc2: "Hobby", t1_qd2: "Alter",
    t2_title: "Gute & schlechte Geheimnisse", t2_text: "Nicht alles muss man für sich behalten.", t2_inst: "Sortiere ein:", t2_h1: "Bauchgefühl", t2_h2: "Vertrauen", t2_bl1: "Gutes Geheimnis", t2_bl2: "Schlechtes Geheimnis", t2_i1: "Überraschung", t2_i2: "Angst", t2_i3: "Geschenk", t2_i4: "Bauchschmerzen",
    t3_title: "Cybermobbing", t3_text: "Respektvoller Umgang auch digital.", t3_inst: "Markiere die richtigen Wörter:", t3_h1: "Nett sein", t3_h2: "Hilfe holen", t3_tk1: "Behandle", t3_tk2: "andere", t3_tk3: "online", t3_tk4: "so", t3_tk5: "wie", t3_tk6: "du", t3_tk7: "behandelt", t3_tk8: "werden willst.",
    t4_title: "Datenschutz", t4_text: "Private Daten schützen.", t4_inst: "Baue den Satz:", t4_h1: "Privat", t4_h2: "Vorsicht", t4_f1: "Deine", t4_f2: "Adresse", t4_f3: "und", t4_f4: "Telefonnummer", t4_f5: "sind privat.", t4_f6: "", t4_f7: "",
    t5_title: "Zeit am Bildschirm", t5_text: "Wie viel Medienzeit ist gut?", t5_inst: "Bringe die Wörter in die richtige Reihenfolge:", t5_h1: "Pausen", t5_h2: "Abwechslung", t5_w1: "Lege", t5_w2: "regelmäßig", t5_w3: "Pausen", t5_w4: "von", t5_w5: "Handy", t5_w6: "und", t5_w7: "Fernseher ein.",
    t6_title: "Berufe in der Stadt", t6_text: "Viele Menschen arbeiten in verschiedenen Berufen.", t6_inst: "Verbinde die Paare:", t6_h1: "Arbeitsplatz", t6_h2: "Tätigkeit", t6_l1: "Arzt", t6_r1: "Krankenhaus", t6_l2: "Verkäufer", t6_r2: "Supermarkt", t6_l3: "Lehrer", t6_r3: "Schule",
    t7_title: "Spezialisierung", t7_text: "Experten für ein bestimmtes Gebiet.", t7_inst: "Löse die Aufgabe:", t7_h1: "Fachwissen", t7_h2: "Profi", t7_sent: "Ein ___ entwirft Pläne für neue Häuser.", t7_qa2: "Architekt", t7_qb2: "Bäcker", t7_qc2: "Gärtner", t7_qd2: "Maler",
    t8_title: "Werkzeuge im Beruf", t8_text: "Jeder Beruf hat seine eigenen Werkzeuge.", t8_inst: "Sortiere ein:", t8_h1: "Handwerk", t8_h2: "Büro", t8_bl1: "Tischler", t8_bl2: "Programmierer", t8_i1: "Säge", t8_i2: "Computer", t8_i3: "Hammer", t8_i4: "Tastatur",
    t9_title: "Dienstleistungen", t9_text: "Menschen helfen anderen Menschen.", t9_inst: "Baue den Satz:", t9_h1: "Hilfe", t9_h2: "Berufe", t9_f1: "Feuerwehr", t9_f2: "und", t9_f3: "Polizei", t9_f4: "sorgen", t9_f5: "für unsere Sicherheit.", t9_f6: "", t9_f7: "",
    t10_title: "Zukunft der Berufe", t10_text: "Wie wir später arbeiten werden.", t10_inst: "Löse die Aufgabe:", t10_h1: "Technik", t10_h2: "Entwicklung", t10_sent: "Computer und ___ helfen uns bei der Arbeit.", t10_qa2: "Roboter", t10_qb2: "Steine", t10_qc2: "Äste", t10_qd2: "Moos",
  },
  en: { explorer_title: "Media & Jobs", t1_title: "Internet Rules", t2_title: "Secrets", t3_title: "Cyberbullying", t4_title: "Data Privacy", t5_title: "Screen Time", t6_title: "City Jobs", t7_title: "Specialization", t8_title: "Tools", t9_title: "Services", t10_title: "Future of Jobs" },
  hu: { explorer_title: "Média és szakmák", t1_title: "Internetes szabályok", t2_title: "Titkok", t3_title: "Internetes zaklatás", t4_title: "Adatvédelem", t5_title: "Képernyőidő", t6_title: "Városi munkák", t7_title: "Specializáció", t8_title: "Eszközök", t9_title: "Szolgáltatások", t10_title: "A jövő munkái" },
  ro: { explorer_title: "Media și meserii", t1_title: "Reguli pe internet", t2_title: "Secrete", t3_title: "Cyberbullying", t4_title: "Protecția datelor", t5_title: "Timpul în fața ecranului", t6_title: "Meserii la oraș", t7_title: "Specializare", t8_title: "Unelte", t9_title: "Servicii", t10_title: "Viitorul meseriilor" },
};

export const MEDIEN_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🤫", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{ id: "b1", label: "t2_bl1" }, { id: "b2", label: "t2_bl2" }], items: [{ text: "t2_i1", bucketId: "b1" }, { text: "t2_i2", bucketId: "b2" }, { text: "t2_i3", bucketId: "b1" }, { text: "t2_i4", bucketId: "b2" }] },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🚫", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["t3_tk1", "t3_tk2", "t3_tk3", "t3_tk4", "t3_tk5", "t3_tk6", "t3_tk7", "t3_tk8"], correctIndices: [0, 6] },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4", "t4_f5"] },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📺", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏢", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }] },
    quiz: { generate: "berufe" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏗️", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { generate: "berufe" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🛠️", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{ id: "b1", label: "t8_bl1" }, { id: "b2", label: "t8_bl2" }], items: [{ text: "t8_i1", bucketId: "b1" }, { text: "t8_i2", bucketId: "b2" }, { text: "t8_i3", bucketId: "b1" }, { text: "t8_i4", bucketId: "b2" }] },
    quiz: { generate: "berufe" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "👮", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", fragments: ["t9_f1", "t9_f2", "t9_f3", "t9_f4", "t9_f5"] },
    quiz: { generate: "berufe" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "t10_sent", choices: ["t10_qa2", "t10_qb2", "t10_qc2", "t10_qd2"], correctIndex: 0 },
    quiz: { generate: "berufe" },
    difficulty: "medium"
  }
];

export const KARTEN_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Karten & Orientierung",
    t1_title: "Himmelsrichtungen", t1_text: "Norden, Süden, Osten, Westen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Vier Richtungen", t1_h2: "Abkürzungen", t1_sent: "Im ___ geht die Sonne auf.", t1_qa2: "Osten", t1_qb2: "Westen", t1_qc2: "Norden", t1_qd2: "Süden",
    t2_title: "Der Kompass", t2_text: "Ein wichtiges Instrument zur Orientierung.", t2_inst: "Markiere das richtige Wort:", t2_h1: "Magnetnadel", t2_h2: "Erdmagnetismus", t2_tk1: "Die", t2_tk2: "Kompassnadel", t2_tk3: "zeigt", t2_tk4: "immer", t2_tk5: "nach", t2_tk6: "Norden.", t2_tk7: "", t2_tk8: "",
    t3_title: "Die Sonne hilft", t3_text: "Orientierung ohne Kompass.", t3_inst: "Bringe die Wörter in die richtige Reihenfolge:", t3_h1: "Tageslauf", t3_h2: "Sonnenstand", t3_w1: "Im", t3_w2: "Westen", t3_w3: "geht", t3_w4: "die", t3_w5: "Sonne", t3_w6: "am", t3_w7: "Abend unter.",
    t4_title: "Orientierung im Gelände", t4_text: "Zeichen in der Natur erkennen.", t4_inst: "Verbinde die Paare:", t4_h1: "Natürliche Hinweise", t4_h2: "Wuchsrichtung", t4_l1: "Moos", t4_r1: "Wächst oft auf der Nordseite", t4_l2: "Sonne", t4_r2: "Steht mittags im Süden", t4_l3: "Schatten", t4_r3: "Wandert mit der Sonne",
    t5_title: "Norden finden", t5_text: "So findest du immer die richtige Richtung.", t5_inst: "Löse die Aufgabe:", t5_h1: "Oben", t5_h2: "Karte", t5_sent: "Auf Landkarten ist ___ meistens oben.", t5_qa2: "Norden", t5_qb2: "Süden", t5_qc2: "Osten", t5_qd2: "Westen",
    t6_title: "Die Legende", t6_text: "Die Zeichenerklärung einer Karte.", t6_inst: "Sortiere ein:", t6_h1: "Kartensymbole", t6_h2: "Bedeutung", t6_bl1: "Wald", t6_bl2: "Gewässer", t6_i1: "Grüne Fläche", t6_i2: "Blaue Linie", t6_i3: "Viele Bäume", t6_i4: "Fluss oder See",
    t7_title: "Der Maßstab", t7_text: "Wie groß ist es in Wirklichkeit?", t7_inst: "Baue den Satz:", t7_h1: "Verkleinerung", t7_h2: "Verhältnis", t7_f1: "Der", t7_f2: "Maßstab", t7_f3: "zeigt", t7_f4: "das", t7_f5: "Größenverhältnis an.", t7_f6: "", t7_f7: "",
    t8_title: "Kartensymbole", t8_text: "Kleine Bilder mit großer Bedeutung.", t8_inst: "Löse die Aufgabe:", t8_h1: "Piktogramme", t8_h2: "Zeichen", t8_sent: "Ein schwarzes Quadrat steht oft für ein ___.", t8_qa2: "Gebäude", t8_qb2: "Auto", t8_qc2: "Schaf", t8_qd2: "Fahrrad",
    t9_title: "Vogelperspektive", t9_text: "Die Welt von oben sehen.", t9_inst: "Bringe die Wörter in die richtige Reihenfolge:", t9_h1: "Blickwinkel", t9_h2: "Von oben", t9_w1: "Karten", t9_w2: "zeigen", t9_w3: "die", t9_w4: "Erde", t9_w5: "aus", t9_w6: "der", t9_w7: "Vogelperspektive.",
    t10_title: "Karten-Profi", t10_text: "Bist du bereit für die Wanderung?", t10_inst: "Löse die Aufgabe:", t10_h1: "Planung", t10_h2: "Weg finden", t10_sent: "Mit einer ___ findet man seinen Weg.", t10_qa2: "Wanderkarte", t10_qb2: "Zeitung", t10_qc2: "Postkarte", t10_qd2: "Eintrittskarte",
  },
  en: { explorer_title: "Maps & Orientation", t1_title: "Cardinal Directions", t2_title: "The Compass", t3_title: "Sun Orientation", t4_title: "Terrain Orientation", t5_title: "Finding North", t6_title: "Map Legend", t7_title: "Map Scale", t8_title: "Map Symbols", t9_title: "Bird's Eye View", t10_title: "Map Pro" },
  hu: { explorer_title: "Térképek & Tájékozódás", t1_title: "Égtájak", t2_title: "Az iránytű", t3_title: "Tájékozódás a Nappal", t4_title: "Tájékozódás a terepen", t5_title: "Észak megkeresése", t6_title: "Jelmagyarázat", t7_title: "Méretarány", t8_title: "Térképjelek", t9_title: "Madártávlat", t10_title: "Térkép-profi" },
  ro: { explorer_title: "Hărți & Orientare", t1_title: "Puncte cardinale", t2_title: "Busola", t3_title: "Orientarea după Soare", t4_title: "Orientarea pe teren", t5_title: "Găsirea Nordului", t6_title: "Legenda hărții", t7_title: "Scara hărții", t8_title: "Simboluri cartografice", t9_title: "Perspectiva păsării", t10_title: "Pro la hărți" },
};

export const KARTEN_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧭", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { generate: "kompass_himmelsrichtungen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🧲", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["t2_tk1", "t2_tk2", "t2_tk3", "t2_tk4", "t2_tk5", "t2_tk6"], correctIndices: [1, 5] },
    quiz: { generate: "kompass_himmelsrichtungen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "☀️", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "kompass_himmelsrichtungen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌲", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{ left: "t4_l1", right: "t4_r1" }, { left: "t4_l2", right: "t4_r2" }, { left: "t4_l3", right: "t4_r3" }] },
    quiz: { generate: "kompass_himmelsrichtungen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🗺️", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "t5_sent", choices: ["t5_qa2", "t5_qb2", "t5_qc2", "t5_qd2"], correctIndex: 0 },
    quiz: { generate: "kompass_himmelsrichtungen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "📜", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { generate: "kartenlesen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📏", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4", "t7_f5"] },
    quiz: { generate: "kartenlesen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { generate: "kartenlesen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🦅", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "kartenlesen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌲", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "t10_sent", choices: ["t10_qa2", "t10_qb2", "t10_qc2", "t10_qd2"], correctIndex: 0 },
    quiz: { generate: "kartenlesen" },
    difficulty: "medium"
  }
];

export const STROM_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Energie & Technik",
    t1_title: "Energiequellen", t1_text: "Woher kommt unsere Energie?", t1_inst: "Löse die Aufgabe:", t1_h1: "Vorkommen", t1_h2: "Natur", t1_sent: "Die ___ liefert uns Licht und Wärme.", t1_qa2: "Sonne", t1_qb2: "Erde", t1_qc2: "Nacht", t1_qd2: "Wolke",
    t2_title: "Erneuerbare Energie", t2_text: "Energie, die nicht verbraucht wird.", t2_inst: "Sortiere ein:", t2_h1: "Sauber", t2_h2: "Unendlich", t2_bl1: "Erneuerbar", t2_bl2: "Fossil", t2_i1: "Windkraft", t2_i2: "Kohle", t2_i3: "Sonnenenergie", t2_i4: "Erdöl",
    t3_title: "Strom im Alltag", t3_text: "Überall brauchen wir Elektrizität.", t3_inst: "Verbinde die Paare:", t3_h1: "Geräte", t3_h2: "Nutzen", t3_l1: "Lampe", t3_r1: "Licht", t3_l2: "Herd", t3_r2: "Hitze", t3_l3: "Radio", t3_r3: "Töne",
    t4_title: "Strom sparen", t4_text: "Achtsam mit Energie umgehen.", t4_inst: "Markiere die richtigen Wörter:", t4_h1: "Umweltschutz", t4_h2: "Ausschalten", t4_tk1: "Schalte", t4_tk2: "das", t4_tk3: "Licht", t4_tk4: "aus,", t4_tk5: "wenn", t4_tk6: "du", t4_tk7: "den", t4_tk8: "Raum verlässt.",
    t5_title: "Gefahren durch Strom", t5_text: "Vorsicht im Umgang mit Elektrizität.", t5_inst: "Baue den Satz:", t5_h1: "Sicherheit", t5_h2: "Vorsicht", t5_f1: "Strom", t5_f2: "kann", t5_f3: "für", t5_f4: "Menschen", t5_f5: "sehr gefährlich sein.", t5_f6: "", t5_f7: "",
    t6_title: "Der Hebel", t6_text: "Kleine Kraft, große Wirkung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Drehpunkt", t6_h2: "Erleichterung", t6_sent: "Eine ___ funktioniert wie ein Hebel.", t6_qa2: "Wippe", t6_qb2: "Leiter", t6_qc2: "Kiste", t6_qd2: "Schnur",
    t7_title: "Rollen & Räder", t7_text: "Dinge leichter bewegen.", t7_inst: "Bringe die Wörter in die richtige Reihenfolge:", t7_h1: "Reibung", t7_h2: "Transport", t7_w1: "Räder", t7_w2: "verringern", t7_w3: "den", t7_w4: "Widerstand", t7_w5: "beim", t7_w6: "Rollen", t7_w7: "einer Last.",
    t8_title: "Flaschenzug", t8_text: "Schwere Lasten einfach heben.", t8_inst: "Baue den Satz:", t8_h1: "Rollen", t8_h2: "Seil", t8_f1: "Ein", t8_f2: "Flaschenzug", t8_f3: "nutzt", t8_f4: "Rollen", t8_f5: "zum Heben.", t8_f6: "", t8_f7: "",
    t9_title: "Der Keil", t9_text: "Spalten und Trennen.", t9_inst: "Verbinde die Paare:", t9_h1: "Anwendung", t9_h2: "Werkzeug", t9_l1: "Axt", t9_r1: "Holz spalten", t9_l2: "Messer", t9_r2: "Schneiden", t9_l3: "Türstopper", t9_r3: "Halten",
    t10_title: "Technik-Check", t10_text: "Kennst du dich mit Maschinen aus?", t10_inst: "Löse die Aufgabe:", t10_h1: "Erfindungen", t10_h2: "Alltag", t10_sent: "Maschinen machen uns die Arbeit ___.", t10_qa2: "leichter", t10_qb2: "schwerer", t10_qc2: "lauter", t10_qd2: "bunter",
  },
  en: { explorer_title: "Energy & Tech", t1_title: "Energy Sources", t2_title: "Renewables", t3_title: "Daily Electricity", t4_title: "Saving Energy", t5_title: "Electrical Danger", t6_title: "The Lever", t7_title: "Wheels & Rollers", t8_title: "Pulley System", t9_title: "The Wedge", t10_title: "Tech Check" },
  hu: { explorer_title: "Energia és technika", t1_title: "Energiaforrások", t2_title: "Megújulók", t3_title: "Napi áram", t4_title: "Energiatakarékosság", t5_title: "Elektromos veszély", t6_title: "Az emelő", t7_title: "Kerekek & Görgők", t8_title: "Csigasor", t9_title: "Az ék", t10_title: "Technika-ellenőrzés" },
  ro: { explorer_title: "Energie și tehnică", t1_title: "Surse de energie", t2_title: "Energii regenerabile", t3_title: "Electricitatea zilnică", t4_title: "Economisirea energiei", t5_title: "Pericole electrice", t6_title: "Pârghia", t7_title: "Roți & Role", t8_title: "Scripetele", t9_title: "Pana", t10_title: "Verificarea tehnică" },
};

export const STROM_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "☀️", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { generate: "energie_quellen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "♻️", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{ id: "b1", label: "t2_bl1" }, { id: "b2", label: "t2_bl2" }], items: [{ text: "t2_i1", bucketId: "b1" }, { text: "t2_i2", bucketId: "b2" }, { text: "t2_i3", bucketId: "b1" }, { text: "t2_i4", bucketId: "b2" }] },
    quiz: { generate: "energie_quellen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔌", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }] },
    quiz: { generate: "energie_quellen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💡", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [0, 3] },
    quiz: { generate: "energie_quellen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4", "t5_f5"] },
    quiz: { generate: "energie_quellen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { generate: "einfache_maschinen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🛞", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "einfache_maschinen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏗️", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", fragments: ["t8_f1", "t8_f2", "t8_f3", "t8_f4", "t8_f5"] },
    quiz: { generate: "einfache_maschinen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🪓", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }, { left: "t9_l3", right: "t9_r3" }] },
    quiz: { generate: "einfache_maschinen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "t10_sent", choices: ["t10_qa2", "t10_qb2", "t10_qc2", "t10_qd2"], correctIndex: 0 },
    quiz: { generate: "einfache_maschinen" },
    difficulty: "medium"
  }
];

export const FINALE_K3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes Finale K3",
    t1_title: "Waldwissen", t1_text: "Was hast du über den Wald gelernt?", t1_inst: "Löse die Aufgabe:", t1_h1: "Schichten", t1_h2: "Bewohner", t1_sent: "Die höchste Schicht im Wald ist die ___.", t1_qa2: "Baumschicht", t1_qb2: "Moosschicht", t1_qc2: "Krautschicht", t1_qd2: "Wurzelschicht",
    t2_title: "Feuer-Profi", t2_text: "Sicherer Umgang mit Feuer.", t2_inst: "Bringe die Wörter in die richtige Reihenfolge:", t2_h1: "Notruf", t2_h2: "Nummer", t2_w1: "Die", t2_w2: "Nummer", t2_w3: "der", t2_w4: "Feuerwehr", t2_w5: "ist", t2_w6: "die", t2_w7: "112.",
    t3_title: "Vom Korn zum Brot", t3_text: "Wiederholung Getreide.", t3_inst: "Verbinde die Paare:", t3_h1: "Getreide", t3_h2: "Produkt", t3_l1: "Weizen", t3_r1: "Weißbrot", t3_l2: "Roggen", t3_r2: "Graubrot", t3_l3: "Hafer", t3_r3: "Müsli",
    t4_title: "Wiesen-Tiere", t4_text: "Wer krabbelt auf der Wiese?", t4_inst: "Markiere die richtigen Wörter:", t4_h1: "Beine zählen", t4_h2: "Insekten", t4_tk1: "Insekten", t4_tk2: "haben", t4_tk3: "immer", t4_tk4: "genau", t4_tk5: "sechs", t4_tk6: "Beine.", t4_tk7: "", t4_tk8: "",
    t5_title: "Körper-Check", t5_text: "Dein Körper und deine Gesundheit.", t5_inst: "Baue den Satz:", t5_h1: "Knochen", t5_h2: "Skelett", t5_f1: "Unser", t5_f2: "Skelett", t5_f3: "schützt", t5_f4: "unsere", t5_f5: "inneren Organe.", t5_f6: "", t5_f7: "",
    t6_title: "Medien-Sicherheit", t6_text: "Sicher surfen im Internet.", t6_inst: "Löse die Aufgabe:", t6_h1: "Geheimnis", t6_h2: "Passwort", t6_sent: "Teile niemals dein ___ mit Fremden.", t6_qa2: "Passwort", t6_qb2: "Hobby", t6_qc2: "Essen", t6_qd2: "Spielzeug",
    t7_title: "Karten-Experte", t7_text: "Orientierung leicht gemacht.", t7_inst: "Bringe die Wörter in die richtige Reihenfolge:", t7_h1: "Kompass", t7_h2: "Norden", t7_w1: "Die", t7_w2: "Nadel", t7_w3: "vom", t7_w4: "Kompass", t7_w5: "zeigt", t7_w6: "nach", t7_w7: "Norden.",
    t8_title: "Energie-Meister", t8_text: "Sonne, Wind und Wasser.", t8_inst: "Löse die Aufgabe:", t8_h1: "Sauber", t8_h2: "Erneuerbar", t8_sent: "Wind ist eine ___ Energiequelle.", t8_qa2: "erneuerbare", t8_qb2: "feste", t8_qc2: "flüssige", t8_qd2: "alte",
    t9_title: "Waldtiere", t9_text: "Luchs und Wolf.", t9_inst: "Sortiere ein:", t9_h1: "Raubtier", t9_h2: "Beute", t9_bl1: "Raubtier", t9_bl2: "Beutetier", t9_i1: "Wolf", t9_i2: "Reh", t9_i3: "Luchs", t9_i4: "Hase",
    t10_title: "K3 Finale", t10_text: "Du hast es geschafft!", t10_inst: "Baue den Satz:", t10_h1: "Glückwunsch", t10_h2: "Erfolg", t10_f1: "Du", t10_f2: "bist", t10_f3: "jetzt", t10_f4: "ein", t10_f5: "Sachkunde-Profi!", t10_f6: "", t10_f7: "",
  },
  en: { explorer_title: "Grand Finale K3", t1_title: "Forest Knowledge", t2_title: "Fire Pro", t3_title: "Grain to Bread", t4_title: "Meadow Animals", t5_title: "Body Check", t6_title: "Media Safety", t7_title: "Map Expert", t8_title: "Energy Master", t9_title: "Forest Animals", t10_title: "K3 Finale" },
  hu: { explorer_title: "Nagy Finálé K3", t1_title: "Erdőismeret", t2_title: "Tűzvédelmi profi", t3_title: "Magtól a kenyérig", t4_title: "Réti állatok", t5_title: "Test-ellenőrzés", t6_title: "Média-biztonság", t7_title: "Térkép-szakértő", t8_title: "Energia-mester", t9_title: "Erdei állatok", t10_title: "K3 Finálé" },
  ro: { explorer_title: "Marea Finală K3", t1_title: "Cunoștințe despre pădure", t2_title: "Expert în incendii", t3_title: "De la bob la pâine", t4_title: "Animalele pajiștii", t5_title: "Verificarea corpului", t6_title: "Siguranța media", t7_title: "Expert în hărți", t8_title: "Maestru în energie", t9_title: "Animalele pădurii", t10_title: "Finala K3" },
};

export const FINALE_K3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#FFD700" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { generate: "waldschichten" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔥", color: "#FFD700" },
    interactive: { type: "word-order", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6", "t2_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "notsituationen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌾", color: "#FFD700" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }] },
    quiz: { generate: "nützliche_pflanzen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐝", color: "#FFD700" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6"], correctIndices: [0, 5] },
    quiz: { generate: "schmetterlinge_insekten" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦴", color: "#FFD700" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4", "t5_f5"] },
    quiz: { generate: "körperaufbau" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#FFD700" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧭", color: "#FFD700" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
    quiz: { generate: "kompass_himmelsrichtungen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#FFD700" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { generate: "energie_quellen" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🐺", color: "#FFD700" },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{ id: "b1", label: "t9_bl1" }, { id: "b2", label: "t9_bl2" }], items: [{ text: "t9_i1", bucketId: "b1" }, { text: "t9_i2", bucketId: "b2" }, { text: "t9_i3", bucketId: "b1" }, { text: "t9_i4", bucketId: "b2" }] },
    quiz: { generate: "waldtiere_raubtiere" },
    difficulty: "medium"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#FFD700" },
    interactive: { type: "sentence-build", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", fragments: ["t10_f1", "t10_f2", "t10_f3", "t10_f4", "t10_f5"] },
    quiz: { generate: "regeln_gesetze" },
    difficulty: "medium"
  }
];
