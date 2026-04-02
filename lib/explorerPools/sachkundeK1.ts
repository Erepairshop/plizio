// lib/explorerPools/sachkundeK1.ts
import type { PoolTopicDef } from "./types";

export const KÖRPER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Mein Körper & Gesundheit",
    t1_title: "Körperteile", t1_text: "Unser Körper hat viele Teile, wie den Kopf, die Arme und die Beine.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was ist KEIN Teil des menschlichen Körpers?", t1_qa: "Flügel", t1_qb: "Kopf", t1_qc: "Arm", t1_qd: "Bein",
    t1_sent: "Mein Arm ist ___.", t1_qa2: "beweglich",
    t2_title: "Die fünf Sinne", t2_text: "Mit unseren fünf Sinnen können wir sehen, hören, riechen, schmecken und fühlen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Welcher ist einer der fünf Sinne?", t2_qa: "Sehen", t2_qb: "Denken", t2_qc: "Schlafen", t2_qd: "Laufen",
    t3_title: "Das Auge", t3_text: "Mit den Augen können wir sehen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Welche Aufgabe hat das Auge?", t3_qa: "Sehen", t3_qb: "Hören", t3_qc: "Riechen", t3_qd: "Schmecken",
    t4_title: "Hände waschen", t4_text: "Händewaschen mit Seife entfernt Schmutz und Bakterien.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Warum ist Händewaschen wichtig?", t4_qa: "Entfernt Schmutz", t4_qb: "Macht die Hände bunt", t4_qc: "Macht müde", t4_qd: "Ist langweilig",
    t5_title: "Gesunde Zähne", t5_text: "Zähneputzen hilft, unsere Zähne gesund zu halten.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was hilft, die Zähne gesund zu halten?", t5_qa: "Zähneputzen", t5_qb: "Viel Zucker essen", t5_qc: "Nie zum Zahnarzt gehen", t5_qd: "Bonbons lutschen",
    t6_title: "Hygiene", t6_text: "Gute Hygiene bedeutet, auf die Sauberkeit seines Körpers zu achten.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was bedeutet Hygiene?", t6_qa: "Körperpflege", t6_qb: "Laut singen", t6_qc: "Schnell rennen", t6_qd: "Bilder malen",
    t7_title: "Hören", t7_text: "Mit den Ohren können wir Geräusche und Musik hören.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Mit welchem Körperteil hören wir?", t7_qa: "Ohren", t7_qb: "Augen", t7_qc: "Nase", t7_qd: "Mund",
    t8_title: "Schmecken", t8_text: "Mit der Zunge schmecken wir, ob etwas süß, sauer, salzig oder bitter ist.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Womit schmecken wir?", t8_qa: "Mit der Zunge", t8_qb: "Mit den Haaren", t8_qc: "Mit den Fingern", t8_qd: "Mit den Knien",
    t9_title: "Das Skelett", t9_text: "Die Knochen geben unserem Körper Halt und schützen innere Organe.", t9_h1: "Hart", t9_h2: "Innen", t9_inst: "Stütze den Körper!", t9_q: "Was geben Knochen dem Körper?", t9_qa: "Halt", t9_qb: "Farbe", t9_qc: "Haare", t9_qd: "Hunger",
    t10_title: "Das Herz", t10_text: "Das Herz pumpt Blut durch den ganzen Körper. Es schlägt immer, auch wenn wir schlafen.", t10_h1: "Pumpe", t10_h2: "Schlägt", t10_inst: "Pumpe das Blut!", t10_q: "Welches Organ pumpt Blut?", t10_qa: "Das Herz", t10_qb: "Die Lunge", t10_qc: "Der Magen", t10_qd: "Die Nase",
  },
};

export const SACHKUNDE_K1_KÖRPER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Körperteile", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Mein Arm ist ___.", choices: ["beweglich", "laut", "grün"], correctIndex: 0 },
    quiz: { generate: "körperteile" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Sinne", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left:"Zunge",right:"Schmecken"},{left:"Haut",right:"Fühlen"},{left:"Ohr",right:"Hören"}] },
    quiz: { generate: "sinnesorgane" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Auge", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Auge", right: "Sehen"}] },
    quiz: { generate: "sinnesorgane" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hände", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"Wasser",right:"Nass"},{left:"Seife",right:"Schaum"}] },
    quiz: { generate: "gesundheit_hygiene" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Zähne", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Zähneputzen macht die Zähne ___.", choices: ["sauber", "bunt", "weich"], correctIndex: 0 },
    quiz: { generate: "gesundheit_hygiene" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Hygiene", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Tägliches Duschen gehört zur ___.", choices: ["Hygiene", "Schule", "Pause"], correctIndex: 0 },
    quiz: { generate: "gesundheit_hygiene" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hören", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Ohr", right: "Hören"}] },
    quiz: { generate: "sinnesorgane" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Schmecken", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Süß", right: "Honig"}, {left: "Sauer", right: "Zitrone"}] },
    quiz: { generate: "sinnesorgane" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🦴", color: "#E5E7EB" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Die Knochen geben ___.", choices: ["Halt", "Licht", "Wasser"], correctIndex: 0 },
    quiz: { generate: "körperteile" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "❤️", color: "#EF4444" },
    interactive: { type: "tap-count", tapCount: { emoji: "💓", count: 5 }, instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "körperteile" }
  }
];

export const TIERE_GARTEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere im Garten",
    t1_title: "Regenwurm", t1_text: "Der Regenwurm lebt in der Erde und ist sehr nützlich für den Boden.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Wo lebt der Regenwurm?", t1_qa: "In der Erde", t1_qb: "Im Wasser", t1_qc: "In der Luft", t1_qd: "Im Feuer",
    t2_title: "Igel", t2_text: "Der Igel hat Stacheln, um sich vor Feinden zu schützen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was hat der Igel zum Schutz?", t2_qa: "Stacheln", t2_qb: "Federn", t2_qc: "Schuppen", t2_qd: "Fell",
    t3_title: "Marienkäfer", t3_text: "Marienkäfer haben oft rote Flügel mit schwarzen Punkten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Welche Farbe haben Marienkäfer oft?", t3_qa: "Rot mit Punkten", t3_qb: "Blau gestreift", t3_qc: "Grün kariert", t3_qd: "Ganz schwarz",
    t4_title: "Vögel", t4_text: "Viele Vögel können fliegen und bauen Nester für ihre Eier.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was bauen Vögel für ihre Eier?", t4_qa: "Nester", t4_qb: "Höhlen", t4_qc: "Häuser", t4_qd: "Burgen",
    t5_title: "Schnecke", t5_text: "Die Schnecke trägt ihr Haus immer auf dem Rücken mit sich.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was trägt die Schnecke auf ihrem Rücken?", t5_qa: "Ihr Haus", t5_qb: "Einen Rucksack", t5_qc: "Einen Hut", t5_qd: "Einen Regenschirm",
    t6_title: "Biene", t6_text: "Bienen sammeln Nektar von Blumen und machen daraus Honig.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was machen Bienen aus Nektar?", t6_qa: "Honig", t6_qb: "Käse", t6_qc: "Brot", t6_qd: "Saft",
    t7_title: "Ameise", t7_text: "Ameisen sind kleine, starke Insekten, die in großen Gruppen leben.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Wie leben Ameisen?", t7_qa: "In großen Gruppen", t7_qb: "Ganz allein", t7_qc: "Im Wasser", t7_qd: "Auf Bäumen",
    t8_title: "Garten-Check", t8_text: "Im Garten leben viele verschiedene Tiere zusammen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Welches Tier hat Stacheln?", t8_qa: "Igel", t8_qb: "Regenwurm", t8_qc: "Schnecke", t8_qd: "Ameise",
    t9_title: "Der Maulwurf", t9_text: "Maulwürfe leben unter der Erde und graben lange Gänge.", t9_h1: "Blind", t9_h2: "Gräber", t9_inst: "Grabe einen Gang!", t9_q: "Wo lebt der Maulwurf?", t9_qa: "Unter der Erde", t9_qb: "Im Nest", t9_qc: "Auf dem Baum", t9_qd: "Im Wasser",
    t10_title: "Die Spinne", t10_text: "Spinnen bauen Netze, um Insekten zu fangen.", t10_h1: "Netzbau", t10_h2: "Acht Beine", t10_inst: "Baue das Netz!", t10_q: "Wie viele Beine hat eine Spinne?", t10_qa: "Acht", t10_qb: "Sechs", t10_qc: "Zehn", t10_qd: "Vier",
  },
};

export const SACHKUNDE_K1_TIERE_GARTEN_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Regenwurm", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Regenwürmer leben in der ___.", choices: ["Erde", "Luft", "Wanne"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Igel", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Igel haben spitze ___.", choices: ["Stacheln", "Federn", "Haare"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Marienkäfer", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Marienkäfer haben schwarze ___.", choices: ["Punkte", "Streifen", "Flecken"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Vögel", color: "#8BC34A" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"Flügel",right:"Fliegen"},{left:"Schnabel",right:"Fressen"}] },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Schnecke", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Die Schnecke ist sehr ___.", choices: ["langsam", "schnell", "laut"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Biene", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Bienen machen ___.", choices: ["Honig", "Milch", "Käse"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Ameise", color: "#8BC34A" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Ameise", right: "Stark"}] },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Garten-Check", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Im Garten leben viele ___.", choices: ["Tiere", "Autos", "Schiffe"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🐾", color: "#78350F" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Der Maulwurf gräbt ___.", choices: ["Gänge", "Löcher", "Häuser"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🕷️", color: "#1E293B" },
    interactive: { type: "match-pairs", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", pairs: [{left: "Spinne", right: "Netz"}, {left: "Beine", right: "Acht"}] },
    quiz: { generate: "wilde_tiere" }
  }
];

export const SACHKUNDE_K1_NATUR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pflanzen & Bäume",
    t1_title: "Der Baum", t1_text: "Ein Baum hat Wurzeln, einen Stamm, Äste und Blätter.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was gehört NICHT zu einem Baum?", t1_qa: "Räder", t1_qb: "Wurzeln", t1_qc: "Stamm", t1_qd: "Blätter",
    t2_title: "Blätter", t2_text: "Im Herbst verfärben sich die Blätter und fallen von den Bäumen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "In welcher Jahreszeit fallen die Blätter von den Bäumen?", t2_qa: "Herbst", t2_qb: "Frühling", t2_qc: "Sommer", t2_qd: "Winter",
    t3_title: "Frühblüher", t3_text: "Frühblüher wie Schneeglöckchen und Krokusse blühen schon, wenn noch Schnee liegt.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Welche Blume ist ein Frühblüher?", t3_qa: "Schneeglöckchen", t3_qb: "Sonnenblume", t3_qc: "Rose", t3_qd: "Mohnblume",
    t4_title: "Löwenzahn", t4_text: "Aus den gelben Blüten des Löwenzahns wird später eine Pusteblume.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Zu was wird die Blüte des Löwenzahns?", t4_qa: "Pusteblume", t4_qb: "Apfel", t4_qc: "Wurzel", t4_qd: "Stein",
    t5_title: "Wiese", t5_text: "Auf einer Wiese wachsen viele verschiedene Gräser und Blumen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was wächst auf einer Wiese?", t5_qa: "Gräser und Blumen", t5_qb: "Nur Bäume", t5_qc: "Nur Steine", t5_qd: "Häuser",
    t6_title: "Wald", t6_text: "Ein Wald ist ein großes Gebiet, in dem sehr viele Bäume wachsen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was findet man in einem Wald?", t6_qa: "Viele Bäume", t6_qb: "Viele Autos", t6_qc: "Viele Schiffe", t6_qd: "Viele Flugzeuge",
    t7_title: "Samen", t7_text: "Aus einem kleinen Samen kann eine große Pflanze wachsen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was wächst aus einem Samen?", t7_qa: "Eine Pflanze", t7_qb: "Ein Tier", t7_qc: "Ein Stein", t7_qd: "Ein Haus",
    t8_title: "Pflanzen-Check", t8_text: "Pflanzen brauchen Licht, Wasser und Erde, um zu wachsen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was braucht eine Pflanze zum Wachsen?", t8_qa: "Licht und Wasser", t8_qb: "Dunkelheit und Kälte", t8_qc: "Nur Luft", t8_qd: "Schokolade",
    t9_title: "Die Wurzel", t9_text: "Wurzeln halten den Baum fest in der Erde und saugen Wasser auf.", t9_h1: "Unten", t9_h2: "Trinken", t9_inst: "Sauge Wasser!", t9_q: "Was machen Wurzeln?", t9_qa: "Wasser aufsaugen", t9_qb: "Blätter machen", t9_qc: "Weglaufen", t9_qd: "Singen",
    t10_title: "Nadelbäume", t10_text: "Nadelbäume haben keine Blätter, sondern spitze Nadeln.", t10_h1: "Tanne", t10_h2: "Immer grün", t10_inst: "Fühle die Nadeln!", t10_q: "Welcher Baum hat Nadeln?", t10_qa: "Tanne", t10_qb: "Eiche", t10_qc: "Buche", t10_qd: "Apfelbaum",
  },
};

export const SACHKUNDE_K1_NATUR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Baum", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Bäume haben einen ___.", choices: ["Stamm", "Reifen", "Hut"], correctIndex: 0 },
    quiz: { generate: "bäume" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Blätter", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Blätter fallen im ___ ab.", choices: ["Herbst", "Frühling", "Sommer"], correctIndex: 0 },
    quiz: { generate: "bäume" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Frühblüher", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Krokus", right: "Lila"}] },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Löwenzahn", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Löwenzahn ist ___.", choices: ["gelb", "blau", "rot"], correctIndex: 0 },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wiese", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Auf der Wiese blühen ___.", choices: ["Blumen", "Häuser", "Autos"], correctIndex: 0 },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wald", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Wald", right: "Bäume"}] },
    quiz: { generate: "bäume" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Samen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Aus Samen werden ___.", choices: ["Pflanzen", "Steine", "Vögel"], correctIndex: 0 },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Pflanzen brauchen ___.", choices: ["Wasser", "Cola", "Milch"], correctIndex: 0 },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#78350F" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{left: "Wurzel", right: "Halt"}] },
    quiz: { generate: "bäume" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌲", color: "#166534" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "Die Tanne hat ___.", choices: ["Nadeln", "Blätter", "Hände"], correctIndex: 0 },
    quiz: { generate: "bäume" }
  }
];

export const WETTER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wetter & Jahreszeiten",
    t1_title: "Sonne", t1_text: "Die Sonne spendet uns Licht und Wärme. Ohne Sonne gäbe es kein Leben auf der Erde.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was gibt uns die Sonne?", t1_qa: "Licht und Wärme", t1_qb: "Regen und Kälte", t1_qc: "Wind und Schnee", t1_qd: "Dunkelheit",
    t2_title: "Regen", t2_text: "Regen ist flüssiges Wasser, das aus Wolken vom Himmel fällt. Er ist wichtig für Pflanzen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Woraus besteht Regen?", t2_qa: "Wasser", t2_qb: "Sand", t2_qc: "Salz", t2_qd: "Staub",
    t3_title: "Wind", t3_text: "Wind ist die Bewegung von Luft. Starker Wind kann Bäume bewegen und Drachen fliegen lassen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was ist Wind?", t3_qa: "Bewegte Luft", t3_qb: "Flüssiges Wasser", t3_qc: "Fester Schnee", t3_qd: "Helles Licht",
    t4_title: "Schnee", t4_text: "Schnee besteht aus vielen kleinen Eiskristallen. Im Winter kann es schneien.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "In welcher Jahreszeit fällt Schnee?", t4_qa: "Winter", t4_qb: "Sommer", t4_qc: "Frühling", t4_qd: "Herbst",
    t5_title: "Frühling", t5_text: "Im Frühling wird es wärmer, die Natur erwacht und die Blumen beginnen zu blühen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passiert im Frühling?", t5_qa: "Blumen blühen", t5_qb: "Blätter fallen ab", t5_qc: "Es schneit stark", t5_qd: "Tiere schlafen ein",
    t6_title: "Sommer", t6_text: "Der Sommer ist die wärmste Jahreszeit. Die Tage sind lang und es ist meistens sonnig.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Welche Jahreszeit ist am wärmsten?", t6_qa: "Sommer", t6_qb: "Winter", t6_qc: "Herbst", t6_qd: "Frühling",
    t7_title: "Herbst", t7_text: "Im Herbst werden die Blätter bunt und fallen von den Bäumen. Es wird kühler.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was ist typisch für den Herbst?", t7_qa: "Bunte Blätter fallen", t7_qb: "Blumen blühen überall", t7_qc: "Starker Schnee", t7_qd: "Sehr heiße Tage",
    t8_title: "Winter", t8_text: "Im Winter ist es kalt. Es kann schneien und frieren. Die Natur schläft.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was ist typisch für den Winter?", t8_qa: "Kälte und Schnee", t8_qb: "Sonne und Hitze", t8_qc: "Blumen", t8_qd: "Freibad",
    t9_title: "Die Wolken", t9_text: "Wolken bestehen aus winzigen Wassertropfen oder Eiskristallen.", t9_h1: "Himmel", t9_h2: "Weiß oder grau", t9_inst: "Beobachte den Himmel!", t9_q: "Woraus bestehen Wolken?", t9_qa: "Wasser", t9_qb: "Zuckerwatte", t9_qc: "Rauch", t9_qd: "Papier",
    t10_title: "Wetter-Check", t10_text: "Das Wetter ändert sich jeden Tag. Wir ziehen uns passend an.", t10_h1: "Kleidung", t10_h2: "Anpassen", t10_inst: "Zieh dich an!", t10_q: "Was trägt man bei Regen?", t10_qa: "Gummistiefel", t10_qb: "Sandalen", t10_qc: "Sonnenbrille", t10_qd: "Badehose",
  },
};

export const WETTER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Sonne", color: "#FFC107" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Die Sonne ___.", choices: ["scheint", "regnet", "schneit"], correctIndex: 0 },
    quiz: { generate: "wetter" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Regen", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Regen macht uns ___.", choices: ["nass", "trocken", "rot"], correctIndex: 0 },
    quiz: { generate: "wetter" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wind", color: "#78909C" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Der Wind ___.", choices: ["weht", "singt", "schläft"], correctIndex: 0 },
    quiz: { generate: "wetter" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Schnee", color: "#90CAF9" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Schnee", right: "Kalt"}] },
    quiz: { generate: "wetter" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Frühling", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Im Frühling ___ Blumen.", choices: ["blühen", "frieren", "laufen"], correctIndex: 0 },
    quiz: { generate: "jahreszeiten_natur" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sommer", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Im Sommer ist es ___.", choices: ["heiß", "kalt", "eisig"], correctIndex: 0 },
    quiz: { generate: "jahreszeiten_natur" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Herbst", color: "#FF7043" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Blätter", right: "Bunt"}] },
    quiz: { generate: "jahreszeiten_natur" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Winter", color: "#B3E5FC" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Im Winter ___ wir.", choices: ["frieren", "schwitzen", "baden"], correctIndex: 0 },
    quiz: { generate: "jahreszeiten_natur" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#CBD5E1" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{left: "Wolke", right: "Wasser"}] },
    quiz: { generate: "wetter" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "☂️", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", buckets: [{id: "regen", label: "Regen"}, {id: "sonne", label: "Sonne"}], items: [{text: "Schirm", bucketId: "regen"}, {text: "Brille", bucketId: "sonne"}] },
    quiz: { generate: "wetter" }
  }
];

export const SACHKUNDE_K1_FAMILIE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Meine Familie",
    t1_title: "Eltern", t1_text: "Deine Mutter und dein Vater sind deine Eltern. Sie kümmern sich um dich.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Wer sind deine Eltern?", t1_qa: "Mutter und Vater", t1_qb: "Onkel und Tante", t1_qc: "Oma und Opa", t1_qd: "Freunde",
    t2_title: "Geschwister", t2_text: "Ein Bruder oder eine Schwester sind deine Geschwister. Man wächst zusammen auf.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Ein Bruder oder eine Schwester ist dein...?", t2_qa: "Geschwister", t2_qb: "Freund", t2_qc: "Nachbar", t2_qd: "Lehrer",
    t3_title: "Großeltern", t3_text: "Die Eltern deiner Eltern sind deine Großeltern, also Oma und Opa.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Die Eltern deiner Eltern sind deine...?", t3_qa: "Großeltern", t3_qb: "Nachbarn", t3_qc: "Onkel und Tante", t3_qd: "Cousins",
    t4_title: "Zuhause", t4_text: "Ein Zuhause ist der Ort, an dem eine Familie wohnt und sich sicher fühlt.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was ist ein Zuhause?", t4_qa: "Wo die Familie wohnt", t4_qb: "Ein Spielplatz", t4_qc: "Die Schule", t4_qd: "Ein Geschäft",
    t5_title: "Gefühle", t5_text: "In einer Familie teilt man viele Gefühle wie Freude, Traurigkeit und Liebe.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Welches ist ein Gefühl?", t5_qa: "Freude", t5_qb: "Laufen", t5_qc: "Springen", t5_qd: "Lesen",
    t6_title: "Freunde", t6_text: "Freunde sind Menschen, mit denen man gerne Zeit verbringt und spielt.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Mit wem spielst du gerne?", t6_qa: "Mit Freunden", t6_qb: "Mit Steinen", t6_qc: "Mit Wolken", t6_qd: "Mit dem Wind",
    t7_title: "Hobbys", t7_text: "Hobbys sind Aktivitäten, die man in seiner Freizeit gerne macht, wie Malen oder Fußball.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was ist ein Hobby?", t7_qa: "Malen", t7_qb: "Schlafen müssen", t7_qc: "Hausaufgaben", t7_qd: "Zähneputzen",
    t8_title: "Familien-Check", t8_text: "Jede Familie ist einzigartig. Man hilft sich und verbringt Zeit zusammen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Wer gehört zur Familie?", t8_qa: "Mutter", t8_qb: "Polizist", t8_qc: "Bäcker", t8_qd: "Pilot",
    t9_title: "Das Baby", t9_text: "Ein Baby ist ein neues Familienmitglied. Es braucht viel Pflege.", t9_h1: "Klein", t9_h2: "Schreit", t9_inst: "Pflege das Baby!", t9_q: "Was braucht ein Baby?", t9_qa: "Milch und Schlaf", t9_qb: "Ein Auto", t9_qc: "Ein Handy", t9_qd: "Pizza",
    t10_title: "Haustiere", t10_text: "Oft gehören auch Haustiere wie Hunde oder Katzen zur Familie.", t10_h1: "Hund", t10_h2: "Katze", t10_inst: "Füttere das Tier!", t10_q: "Welches Tier ist ein Haustier?", t10_qa: "Hund", t10_qb: "Löwe", t10_qc: "Elefant", t10_qd: "Hai",
  },
};

export const SACHKUNDE_K1_FAMILIE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Eltern", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Meine ___ passen auf mich auf.", choices: ["Eltern", "Nachbarn", "Lehrer"], correctIndex: 0 },
    quiz: { generate: "familie" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Geschwister", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Bruder", right: "Junge"}, {left: "Schwester", right: "Mädchen"}] },
    quiz: { generate: "familie" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Oma & Opa", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Oma und Opa sind ___.", choices: ["Großeltern", "Cousins", "Kinder"], correctIndex: 0 },
    quiz: { generate: "familie" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zuhause", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Hier wohnen wir: ___.", choices: ["Zuhause", "Schule", "Park"], correctIndex: 0 },
    quiz: { generate: "zuhause" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Freude", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Ich bin ___.", choices: ["froh", "grün", "eckig"], correctIndex: 0 },
    quiz: { generate: "regeln_verhalten" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Freunde", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Freund", right: "Spielen"}] },
    quiz: { generate: "regeln_verhalten" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hobby", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Ich ___ gerne.", choices: ["male", "heule", "friere"], correctIndex: 0 },
    quiz: { generate: "regeln_verhalten" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Meine ___.", choices: ["Familie", "Klasse", "Tüte"], correctIndex: 0 },
    quiz: { generate: "familie" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🍼", color: "#F472B6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Babys trinken ___.", choices: ["Milch", "Saft", "Kaffee"], correctIndex: 0 },
    quiz: { generate: "familie" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🐕", color: "#92400E" },
    interactive: { type: "match-pairs", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", pairs: [{left: "Hund", right: "Wuff"}, {left: "Katze", right: "Miau"}] },
    quiz: { generate: "haustiere" }
  }
];

export const SACHKUNDE_K1_VERKEHR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sicher im Verkehr",
    t1_title: "Ampel", t1_text: "Die Ampel regelt den Verkehr. Bei Rot bleibst du stehen, bei Grün darfst du gehen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Bei welcher Ampelfarbe darfst du gehen?", t1_qa: "Grün", t1_qb: "Rot", t1_qc: "Gelb", t1_qd: "Blau",
    t2_title: "Zebrastreifen", t2_text: "Auf dem Zebrastreifen können Fußgänger die Straße sicher überqueren.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Wo überqueren Fußgänger sicher die Straße?", t2_qa: "Am Zebrastreifen", t2_qb: "Mitten auf der Straße", t2_qc: "Hinter einem Bus", t2_qd: "Auf dem Gehweg",
    t3_title: "Fahrrad", t3_text: "Ein Fahrrad hat zwei Räder und wird mit Pedalen angetrieben.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Wie viele Räder hat ein Fahrrad?", t3_qa: "Zwei", t3_qb: "Drei", t3_qc: "Vier", t3_qd: "Eins",
    t4_title: "Helm", t4_text: "Ein Helm schützt deinen Kopf beim Fahrrad- oder Rollerfahren vor Verletzungen.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was schützt deinen Kopf beim Fahrradfahren?", t4_qa: "Ein Helm", t4_qb: "Eine Mütze", t4_qc: "Ein Schal", t4_qd: "Ein Handschuh",
    t5_title: "Auto", t5_text: "Autos fahren auf der Straße. Sie brauchen Benzin oder Strom als Energie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was braucht ein Auto zum Fahren?", t5_qa: "Benzin oder Strom", t5_qb: "Wasser und Seife", t5_qc: "Sand und Steine", t5_qd: "Äpfel und Bananen",
    t6_title: "Bus", t6_text: "Ein Bus ist ein großes Fahrzeug, das viele Menschen auf einmal transportieren kann.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Welches Fahrzeug transportiert viele Menschen?", t6_qa: "Ein Bus", t6_qb: "Ein Fahrrad", t6_qc: "Ein Motorrad", t6_qd: "Ein Tretroller",
    t7_title: "Schilder", t7_text: "Verkehrsschilder geben uns wichtige Regeln und Hinweise im Straßenverkehr.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was zeigt ein Stoppschild an?", t7_qa: "Anhalten", t7_qb: "Schneller fahren", t7_qc: "Hupen", t7_qd: "Wenden",
    t8_title: "Verkehrs-Check", t8_text: "Im Straßenverkehr müssen alle aufpassen: Fußgänger, Radfahrer und Autofahrer.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Bei Rot an der Ampel musst du...", t8_qa: "stehen bleiben", t8_qb: "schnell losrennen", t8_qc: "die Augen schließen", t8_qd: "hupen",
    t9_title: "Motorrad", t9_text: "Ein Motorrad ist schnell und hat einen starken Motor.", t9_h1: "Helmpflicht", t9_h2: "Zwei Räder", t9_inst: "Fahre sicher!", t9_q: "Was muss man auf dem Motorrad tragen?", t9_qa: "Einen Helm", t9_qb: "Eine Krone", t9_qc: "Einen Sonnenhut", t9_qd: "Nichts",
    t10_title: "LKW", t10_text: "Lastwagen transportieren schwere Dinge über weite Strecken.", t10_h1: "Groß", t10_h2: "Laut", t10_inst: "Belade den LKW!", t10_q: "Was macht ein LKW?", t10_qa: "Sachen transportieren", t10_qb: "Fliegen", t10_qc: "Schwimmen", t10_qd: "Tanzen",
  },
};

export const SACHKUNDE_K1_VERKEHR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ampel", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Bei Rot bleibe ich ___.", choices: ["stehen", "rennen", "hüpfen"], correctIndex: 0 },
    quiz: { generate: "verkehrsregeln" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Zebrastreifen", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Hier gehe ich über die ___.", choices: ["Straße", "Wiese", "Wolke"], correctIndex: 0 },
    quiz: { generate: "verkehrsregeln" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Fahrrad", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Fahrräder haben zwei ___.", choices: ["Räder", "Flügel", "Beine"], correctIndex: 0 },
    quiz: { generate: "verkehrsmittel" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Helm", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Der Helm schützt den ___.", choices: ["Kopf", "Fuß", "Bauch"], correctIndex: 0 },
    quiz: { generate: "sicherheit" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Auto", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Autos brauchen ___.", choices: ["Sprit", "Wasser", "Saft"], correctIndex: 0 },
    quiz: { generate: "verkehrsmittel" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Bus", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Der Bus hält an der ___.", choices: ["Haltestelle", "Wiese", "Ampel"], correctIndex: 0 },
    quiz: { generate: "verkehrsmittel" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Schild", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Stopp", right: "Anhalten"}] },
    quiz: { generate: "verkehrsregeln" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Ich schaue ___ und rechts.", choices: ["links", "oben", "unten"], correctIndex: 0 },
    quiz: { generate: "sicherheit" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🏍️", color: "#334155" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{left: "Motorrad", right: "Helm"}] },
    quiz: { generate: "verkehrsmittel" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🚛", color: "#1E293B" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "LKW transportieren ___.", choices: ["Lasten", "Luft", "Licht"], correctIndex: 0 },
    quiz: { generate: "verkehrsmittel" }
  }
];

export const SACHKUNDE_K1_MATERIAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Müll & Recycling",
    t1_title: "Papier", t1_text: "Altes Papier wie Zeitungen und Kartons kann recycelt und zu neuem Papier gemacht werden.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was gehört in die Papiertonne?", t1_qa: "Zeitung", t1_qb: "Apfelrest", t1_qc: "Glasflasche", t1_qd: "Batterie",
    t2_title: "Glas", t2_text: "Leere Glasflaschen und Gläser gehören in den Glascontainer. Sie können eingeschmolzen werden.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was wirft man in den Glascontainer?", t2_qa: "Glasflasche", t2_qb: "Plastiktüte", t2_qc: "Bananenschale", t2_qd: "Alte Schuhe",
    t3_title: "Plastik", t3_text: "Plastikverpackungen wie Joghurtbecher und Flaschen sammeln wir im gelben Sack.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was ist meistens aus Plastik?", t3_qa: "Joghurtbecher", t3_qb: "Ein Apfel", t3_qc: "Ein Buch", t3_qd: "Ein Stein",
    t4_title: "Bio-Müll", t4_text: "Essensreste wie Obst- und Gemüseschalen sind Biomüll und kommen in die Biotonne.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was ist Biomüll?", t4_qa: "Apfelschale", t4_qb: "Eine alte Batterie", t4_qc: "Eine Plastikflasche", t4_qd: "Ein kaputtes Glas",
    t5_title: "Restmüll", t5_text: "Alles, was nicht recycelt werden kann, kommt in den Restmüll, zum Beispiel ein alter Stift.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was kommt in den Restmüll?", t5_qa: "Alter Stift", t5_qb: "Zeitungspapier", t5_qc: "Glasflasche", t5_qd: "Bananenschale",
    t6_title: "Sortieren", t6_text: "Mülltrennung ist wichtig, damit wertvolle Materialien wieder verwendet werden können.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Warum sortieren wir Müll?", t6_qa: "Für Recycling", t6_qb: "Weil es Spaß macht", t6_qc: "Um ihn zu verstecken", t6_qd: "Damit er mehr wird",
    t7_title: "Sparen", t7_text: "Wenn wir Dinge wiederverwenden statt wegzuwerfen, schützen wir die Umwelt und sparen Rohstoffe.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was bedeutet Wasser sparen?", t7_qa: "Weniger Wasser benutzen", t7_qb: "Mehr Wasser kaufen", t7_qc: "Wasser verschütten", t7_qd: "Immer den Hahn offen lassen",
    t8_title: "Müll-Check", t8_text: "Richtiges Müllsortieren hilft unserer Erde und schützt Tiere und Pflanzen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Wohin gehört der leere Karton?", t8_qa: "Papiertonne", t8_qb: "Biotonne", t8_qc: "Restmüll", t8_qd: "Glascontainer",
    t9_title: "Metall", t9_text: "Dosen und Besteck sind oft aus Metall. Das ist ein harter Stoff.", t9_h1: "Gabel", t9_h2: "Dose", t9_inst: "Sammle Metall!", t9_q: "Was ist aus Metall?", t9_qa: "Eine Gabel", t9_qb: "Ein Apfel", t9_qc: "Ein T-Shirt", t9_qd: "Ein Buch",
    t10_title: "Wiederverwenden", t10_text: "Manche Dinge kann man öfter benutzen, statt sie wegzuwerfen.", t10_h1: "Tasche", t10_h2: "Glas", t10_inst: "Benutze es nochmal!", t10_q: "Was ist besser für die Umwelt?", t10_qa: "Wiederverwenden", t10_qb: "Sofort wegwerfen", t10_qc: "Müll im Wald", t10_qd: "Alles verbrennen",
  },
};

export const SACHKUNDE_K1_MATERIAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Papier", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Papier kommt in die ___ Tonne.", choices: ["blaue", "gelbe", "braune"], correctIndex: 0 },
    quiz: { generate: "mülltrennung" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Glas", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Glas", right: "Container"}] },
    quiz: { generate: "materialien" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Plastik", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Plastik gehört in den ___ Sack.", choices: ["gelben", "blauen", "roten"], correctIndex: 0 },
    quiz: { generate: "mülltrennung" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Bio-Müll", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Obstschalen sind ___.", choices: ["Biomüll", "Restmüll", "Papier"], correctIndex: 0 },
    quiz: { generate: "mülltrennung" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Restmüll", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Restmüll ist ___.", choices: ["grau", "grün", "bunt"], correctIndex: 0 },
    quiz: { generate: "mülltrennung" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sortieren", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Müll", right: "Trennen"}] },
    quiz: { generate: "mülltrennung" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Sparen", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Ich ___ Wasser.", choices: ["spare", "verschwende", "trinke"], correctIndex: 0 },
    quiz: { generate: "sicherheit" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Müll-Check", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Umwelt", right: "Schützen"}] },
    quiz: { generate: "mülltrennung" },
    difficulty: "easy"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🥫", color: "#94A3B8" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Dosen sind aus ___.", choices: ["Metall", "Holz", "Papier"], correctIndex: 0 },
    quiz: { generate: "materialien" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "♻️", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", pairs: [{left: "Stoffbeutel", right: "Wiederverwenden"}] },
    quiz: { generate: "mülltrennung" }
  }
];

export const SACHKUNDE_K1_WISSEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wissen-Check",
    t1_title: "Tiere", t1_text: "Tiere sind Lebewesen. Manche haben Fell, andere Federn oder Schuppen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Welches Tier hat Stacheln?", t1_qa: "Igel", t1_qb: "Frosch", t1_qc: "Vogel", t1_qd: "Fisch",
    t2_title: "Pflanzen", t2_text: "Pflanzen sind wichtig für uns. Sie geben uns Sauerstoff zum Atmen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was braucht eine Pflanze zum Wachsen?", t2_qa: "Licht und Wasser", t2_qb: "Dunkelheit", t2_qc: "Nur Steine", t2_qd: "Kälte",
    t3_title: "Wetter", t3_text: "Das Wetter kann sonnig, regnerisch, windig oder verschneit sein.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "In welcher Jahreszeit schneit es oft?", t3_qa: "Winter", t3_qb: "Sommer", t3_qc: "Frühling", t3_qd: "Herbst",
    t4_title: "Körper", t4_text: "Unser Körper hat viele Teile, die zusammenarbeiten. Augen, Ohren und Nase sind Sinnesorgane.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Womit können wir sehen?", t4_qa: "Mit den Augen", t4_qb: "Mit den Ohren", t4_qc: "Mit der Nase", t4_qd: "Mit dem Mund",
    t5_title: "Sinne", t5_text: "Mit unseren fünf Sinnen entdecken wir die Welt: sehen, hören, riechen, schmecken, fühlen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Wie viele Sinne hat der Mensch?", t5_qa: "Fünf", t5_qb: "Drei", t5_qc: "Zehn", t5_qd: "Eins",
    t6_title: "Gesundheit", t6_text: "Gesund zu bleiben ist wichtig. Dazu gehört gutes Essen, Schlafen und Bewegung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was ist wichtig für gesunde Zähne?", t6_qa: "Zähneputzen", t6_qb: "Viel Schokolade essen", t6_qc: "Nie zum Zahnarzt gehen", t6_qd: "Wenig schlafen",
    t7_title: "Sicherheit", t7_text: "Im Verkehr müssen wir vorsichtig sein und auf die Regeln achten.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Bei welcher Ampelfarbe musst du stehen bleiben?", t7_qa: "Rot", t7_qb: "Grün", t7_qc: "Gelb", t7_qd: "Weiß",
    t8_title: "Natur-Finale", t8_text: "Die Natur ist vielfältig. Es gibt Tiere, Pflanzen und unterschiedliches Wetter.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was ist KEIN Insekt?", t8_qa: "Spinne", t8_qb: "Ameise", t8_qc: "Biene", t8_qd: "Marienkäfer",
    t9_title: "Die Jahreszeiten", t9_text: "Es gibt vier Jahreszeiten: Frühling, Sommer, Herbst und Winter.", t9_h1: "Vier", t9_h2: "Frühling zuerst", t9_inst: "Sortiere sie!", t9_q: "Wie viele Jahreszeiten gibt es?", t9_qa: "Vier", t9_qb: "Zwei", t9_qc: "Sieben", t9_qd: "Zwölf",
    t10_title: "Umwelt-Finale", t10_text: "Wir alle können helfen, die Umwelt sauber zu halten.", t10_h1: "Helfen", t10_h2: "Sauber", t10_inst: "Räume auf!", t10_q: "Wohin gehört Müll?", t10_qa: "In die Tonne", t10_qb: "Auf den Boden", t10_qc: "In den Wald", t10_qd: "In den See",
  },
};

export const SACHKUNDE_K1_WISSEN_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Tiere", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Tiere sind ___.", choices: ["Lebewesen", "Steine", "Autos"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Pflanzen", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Pflanzen brauchen ___.", choices: ["Licht", "Dunkelheit", "Kaffee"], correctIndex: 0 },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wetter", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Regen kommt aus ___.", choices: ["Wolken", "Bäumen", "Häusern"], correctIndex: 0 },
    quiz: { generate: "wetter" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Körper", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Ich sehe mit ___.", choices: ["Augen", "Ohren", "Händen"], correctIndex: 0 },
    quiz: { generate: "sinnesorgane" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Sinne", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Ich habe ___ Sinne.", choices: ["fünf", "zwei", "zehn"], correctIndex: 0 },
    quiz: { generate: "sinnesorgane" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Gesund", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Zähneputzen ist ___.", choices: ["wichtig", "schlecht", "egal"], correctIndex: 0 },
    quiz: { generate: "gesundheit_hygiene" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Regel", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Rot bedeutet ___.", choices: ["Stopp", "Gehen", "Laufen"], correctIndex: 0 },
    quiz: { generate: "verkehrsregeln" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Natur", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Spinnen haben ___ Beine.", choices: ["acht", "sechs", "zwei"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "medium"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🗓️", color: "#3B82F6" },
    interactive: { type: "physics-stacker", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["Frühling", "Sommer", "Herbst", "Winter"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "jahreszeiten_detail" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🗑️", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "Müll gehört in den ___.", choices: ["Eimer", "Wald", "Park"], correctIndex: 0 },
    quiz: { generate: "mülltrennung" }
  }
];

export const SACHKUNDE_K1_DIPLOM_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Abschluss-Abenteuer",
    t1_title: "Diplom-Frage 1", t1_text: "Zeige, was du über Tiere gelernt hast! Die Schnecke trägt ihr Haus immer mit.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Welches Tier trägt sein Haus auf dem Rücken?", t1_qa: "Schnecke", t1_qb: "Vogel", t1_qc: "Igel", t1_qd: "Frosch",
    t2_title: "Diplom-Frage 2", t2_text: "Der Löwenzahn ist eine besondere Pflanze! Aus der gelben Blüte wird eine Pusteblume.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was wird aus der gelben Blüte des Löwenzahns?", t2_qa: "Pusteblume", t2_qb: "Sonnenblume", t2_qc: "Apfel", t2_qd: "Wurzel",
    t3_title: "Diplom-Frage 3", t3_text: "Schnee entsteht, wenn Wassertropfen in Wolken gefrieren und zu Eiskristallen werden.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Woraus besteht Schnee?", t3_qa: "Eiskristallen", t3_qb: "Wassertropfen", t3_qc: "Sand", t3_qd: "Staub",
    t4_title: "Diplom-Frage 4", t4_text: "Deine Großeltern sind die Eltern deiner Mutter oder deines Vaters — also Oma und Opa.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Die Eltern deiner Mutter sind deine...?", t4_qa: "Großeltern", t4_qb: "Geschwister", t4_qc: "Onkel und Tante", t4_qd: "Freunde",
    t5_title: "Diplom-Frage 5", t5_text: "Beim Radfahren trägt man immer einen Helm! Er schützt den Kopf vor Verletzungen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was schützt deinen Kopf beim Radfahren?", t5_qa: "Ein Helm", t5_qb: "Eine Mütze", t5_qc: "Ein Hut", t5_qd: "Ein Tuch",
    t6_title: "Diplom-Frage 6", t6_text: "Mülltrennung ist wichtig! Papier und Karton gehören in die blaue Papiertonne.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was gehört in die Papiertonne?", t6_qa: "Eine Zeitung", t6_qb: "Eine Bananenschale", t6_qc: "Ein Joghurtbecher", t6_qd: "Eine Glasflasche",
    t7_title: "Diplom-Frage 7", t7_text: "Mit den Ohren hören wir Musik, Stimmen und alle Geräusche um uns herum.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Womit hören wir Töne und Musik?", t7_qa: "Mit den Ohren", t7_qb: "Mit den Augen", t7_qc: "Mit der Nase", t7_qd: "Mit den Händen",
    t8_title: "Diplom-Frage 8", t8_text: "Herzlichen Glückwunsch! Du hast alles über Natur, Körper, Familie und Verkehr gelernt.", t8_inst: "Letzte Frage:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was machen Bienen aus Nektar?", t8_qa: "Honig", t8_qb: "Käse", t8_qc: "Brot", t8_qd: "Wasser",
    t9_title: "Diplom-Frage 9", t9_text: "Frisch gewaschene Hände schützen uns vor Krankheiten.", t9_h1: "Seife", t9_h2: "Sauber", t9_inst: "Wasch dich!", t9_q: "Womit wäscht man Hände?", t9_qa: "Wasser & Seife", t9_qb: "Saft", t9_qc: "Farbe", t9_qd: "Erde",
    t10_title: "Diplom-Frage 10", t10_text: "Du bist jetzt ein Sachkunde-Profi!", t10_h1: "Sieg", t10_h2: "Glückwunsch", t10_inst: "Feiere!", t10_q: "Wie viele Sinne hast du?", t10_qa: "Fünf", t10_qb: "Eins", t10_qc: "Hundert", t10_qd: "Zehn",
  },
};

export const SACHKUNDE_K1_DIPLOM_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Schnecke", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Schnecke hat ein ___.", choices: ["Haus", "Auto", "Fahrrad"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Löwenzahn", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Löwenzahn wird ___.", choices: ["weiß", "blau", "schwarz"], correctIndex: 0 },
    quiz: { generate: "blueten_fruechte" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Schnee", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Schnee ist ___.", choices: ["gefroren", "gekocht", "gebraten"], correctIndex: 0 },
    quiz: { generate: "wetter" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Oma & Opa", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Oma ist meine ___.", choices: ["Großmutter", "Schwester", "Tante"], correctIndex: 0 },
    quiz: { generate: "familie" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Helm", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Trage einen ___.", choices: ["Helm", "Hut", "Schal"], correctIndex: 0 },
    quiz: { generate: "sicherheit" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Papier", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Zeitung ist ___.", choices: ["Papier", "Plastik", "Bio"], correctIndex: 0 },
    quiz: { generate: "mülltrennung" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Ohren", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Ohren sind zum ___.", choices: ["Hören", "Sehen", "Riechen"], correctIndex: 0 },
    quiz: { generate: "sinnesorgane" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Honig", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Bienen machen ___.", choices: ["Honig", "Saft", "Eis"], correctIndex: 0 },
    quiz: { generate: "wilde_tiere" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧼", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Hände waschen mit ___.", choices: ["Seife", "Saft", "Sand"], correctIndex: 0 },
    quiz: { generate: "gesundheit_hygiene" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🖐️", color: "#FDBA74" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "Wir haben ___ Sinne.", choices: ["fünf", "zehn", "zwei"], correctIndex: 0 },
    quiz: { generate: "sinnesorgane" }
  }
];
