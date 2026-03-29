// lib/explorerPools/sachkundeK1.ts
import type { PoolTopicDef } from "./types";

export const KÖRPER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Mein Körper & Gesundheit",
    t1_title: "Körperteile", t1_text: "Unser Körper hat viele Teile, wie den Kopf, die Arme und die Beine.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was ist KEIN Teil des menschlichen Körpers?", t1_qa: "Flügel", t1_qb: "Kopf", t1_qc: "Arm", t1_qd: "Bein",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "mein", t1_w4: "Kopf", t1_w5: "und", t1_w6: "das",
    t1_l1: "Auge", t1_r1: "Sehen", t1_l2: "Ohr", t1_r2: "Hören", t1_l3: "Nase", t1_r3: "Riechen",
    t1_sent: "Mein Arm ist ___.", t1_qa2: "beweglich", t1_qb2: "laut", t1_qc2: "lecker", t1_qd2: "grün",
    t1_f1: "Ich habe", t1_f2: "zwei", t1_f3: "Hände", t1_f4: "und",
    t1_tk1: "Das", t1_tk2: "ist", t1_tk3: "mein", t1_tk4: "Bein", t1_tk5: ".", t1_tk6: "Punkt",
    t1_bl1: "Körperteil", t1_bl2: "Kein Körperteil", t1_i1: "Hand", t1_i2: "Stuhl", t1_i3: "Fuß", t1_i4: "Tisch",
    t2_title: "Die fünf Sinne", t2_text: "Mit unseren fünf Sinnen können wir sehen, hören, riechen, schmecken und fühlen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Welcher ist einer der fünf Sinne?", t2_qa: "Sehen", t2_qb: "Denken", t2_qc: "Schlafen", t2_qd: "Laufen",
    t2_w1: "Ich", t2_w2: "kann", t2_w3: "mit", t2_w4: "meinen", t2_w5: "Augen", t2_w6: "sehen.",
    t2_l1: "Zunge", t2_r1: "Schmecken", t2_l2: "Haut", t2_r2: "Fühlen", t2_l3: "Ohr", t2_r3: "Hören",
    t2_sent: "Riechen ist ein ___.", t2_qa2: "Sinn", t2_qb2: "Tier", t2_qc2: "Auto", t2_qd2: "Haus",
    t2_f1: "Die", t2_f2: "fünf", t2_f3: "Sinne", t2_f4: "sind wichtig.",
    t2_tk1: "Fühlen", t2_tk2: "ist", t2_tk3: "einer", t2_tk4: "der", t2_tk5: "fünf", t2_tk6: "Sinne.",
    t2_bl1: "Sinn", t2_bl2: "Kein Sinn", t2_i1: "Hören", t2_i2: "Springen", t2_i3: "Schmecken", t2_i4: "Schreiben",
    t3_title: "Das Auge", t3_text: "Mit den Augen können wir sehen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Welche Aufgabe hat das Auge?", t3_qa: "Sehen", t3_qb: "Hören", t3_qc: "Riechen", t3_qd: "Schmecken",
    t3_w1: "Das", t3_w2: "Auge", t3_w3: "hilft", t3_w4: "uns", t3_w5: "zu", t3_w6: "sehen.",
    t3_l1: "Pupille", t3_r1: "Schwarz", t3_l2: "Iris", t3_r2: "Farbig", t3_l3: "Wimper", t3_r3: "Haar",
    t3_sent: "Meine Augen sind ___.", t3_qa2: "blau", t3_qb2: "laut", t3_qc2: "schnell", t3_qd2: "lecker",
    t3_f1: "Ich", t3_f2: "schließe", t3_f3: "meine", t3_f4: "Augen.",
    t3_tk1: "Die", t3_tk2: "Farbe", t3_tk3: "meiner", t3_tk4: "Augen", t3_tk5: "ist", t3_tk6: "braun.",
    t3_bl1: "Teil des Auges", t3_bl2: "Kein Teil des Auges", t3_i1: "Linse", t3_i2: "Finger", t3_i3: "Netzhaut", t3_i4: "Zeh",
    t4_title: "Hände waschen", t4_text: "Händewaschen mit Seife entfernt Schmutz und Bakterien.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Warum ist Händewaschen wichtig?", t4_qa: "Entfernt Schmutz", t4_qb: "Macht die Hände bunt", t4_qc: "Macht müde", t4_qd: "Ist langweilig",
    t4_w1: "Wasche", t4_w2: "deine", t4_w3: "Hände", t4_w4: "vor", t4_w5: "dem", t4_w6: "Essen.",
    t4_l1: "Wasser", t4_r1: "Nass", t4_l2: "Seife", t4_r2: "Schäumt", t4_l3: "Handtuch", t4_r3: "Trocken",
    t4_sent: "Saubere Hände sind ___.", t4_qa2: "gesund", t4_qb2: "schmutzig", t4_qc2: "traurig", t4_qd2: "kalt",
    t4_f1: "Nimm", t4_f2: "Seife", t4_f3: "und", t4_f4: "Wasser.",
    t4_tk1: "Vergiss", t4_tk2: "nicht,", t4_tk3: "die", t4_tk4: "Hände", t4_tk5: "zu", t4_tk6: "waschen.",
    t4_bl1: "Zum Händewaschen", t4_bl2: "Nicht zum Händewaschen", t4_i1: "Seife", t4_i2: "Kuchen", t4_i3: "Wasser", t4_i4: "Stift",
    t5_title: "Gesunde Zähne", t5_text: "Zähneputzen hilft, unsere Zähne gesund zu halten.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was hilft, die Zähne gesund zu halten?", t5_qa: "Zähneputzen", t5_qb: "Viel Zucker essen", t5_qc: "Nie zum Zahnarzt gehen", t5_qd: "Bonbons lutschen",
    t5_w1: "Putze", t5_w2: "deine", t5_w3: "Zähne", t5_w4: "jeden", t5_w5: "Tag", t5_w6: "gründlich.",
    t5_l1: "Zahnbürste", t5_r1: "Bürsten", t5_l2: "Zahnpasta", t5_r2: "Reinigen", t5_l3: "Zahn", t5_r3: "Hart",
    t5_sent: "Ein Apfel ist ___ für die Zähne.", t5_qa2: "gesünder", t5_qb2: "schlechter", t5_qc2: "weicher", t5_qd2: "lauter",
    t5_f1: "Gesunde", t5_f2: "Zähne", t5_f3: "sind", t5_f4: "wichtig.",
    t5_tk1: "Zucker", t5_tk2: "ist", t5_tk3: "nicht", t5_tk4: "gut", t5_tk5: "für", t5_tk6: "Zähne.",
    t5_bl1: "Gut für Zähne", t5_bl2: "Schlecht für Zähne", t5_i1: "Apfel", t5_i2: "Schokolade", t5_i3: "Karotte", t5_i4: "Limonade",
    t6_title: "Hygiene", t6_text: "Gute Hygiene bedeutet, auf die Sauberkeit seines Körpers zu achten.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was bedeutet Hygiene?", t6_qa: "Körperpflege", t6_qb: "Laut singen", t6_qc: "Schnell rennen", t6_qd: "Bilder malen",
    t6_w1: "Duschen", t6_w2: "und", t6_w3: "Baden", t6_w4: "gehören", t6_w5: "zur", t6_w6: "Hygiene.",
    t6_l1: "Dusche", t6_r1: "Wasser", t6_l2: "Sauber", t6_r2: "Rein", t6_l3: "Kamm", t6_r3: "Haare",
    t6_sent: "Tägliches Waschen ist ___.", t6_qa2: "wichtig", t6_qb2: "unwichtig", t6_qc2: "lustig", t6_qd2: "falsch",
    t6_f1: "Sauberkeit", t6_f2: "ist", t6_f3: "ein", t6_f4: "Teil der Hygiene.",
    t6_tk1: "Zur", t6_tk2: "guten", t6_tk3: "Hygiene", t6_tk4: "gehört", t6_tk5: "das", t6_tk6: "Zähneputzen.",
    t6_bl1: "Hygieneartikel", t6_bl2: "Kein Hygieneartikel", t6_i1: "Zahnbürste", t6_i2: "Ball", t6_i3: "Seife", t6_i4: "Buch",
    t7_title: "Hören", t7_text: "Mit den Ohren können wir Geräusche und Musik hören.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Mit welchem Körperteil hören wir?", t7_qa: "Ohren", t7_qb: "Augen", t7_qc: "Nase", t7_qd: "Mund",
    t7_w1: "Die", t7_w2: "Ohren", t7_w3: "sind", t7_w4: "zum", t7_w5: "Hören", t7_w6: "da.",
    t7_l1: "Vogel", t7_r1: "Zwitschert", t7_l2: "Glocke", t7_r2: "Läutet", t7_l3: "Musik", t7_r3: "Klingt",
    t7_sent: "Ein lautes Geräusch tut den ___ weh.", t7_qa2: "Ohren", t7_qb2: "Augen", t7_qc2: "Haaren", t7_qd2: "Füßen",
    t7_f1: "Ich", t7_f2: "höre", t7_f3: "mit", t7_f4: "meinen Ohren.",
    t7_tk1: "Manche", t7_tk2: "Geräusche", t7_tk3: "sind", t7_tk4: "leise,", t7_tk5: "andere", t7_tk6: "laut.",
    t7_bl1: "Geräusch", t7_bl2: "Kein Geräusch", t7_i1: "Vogelgesang", t7_i2: "Stille", t7_i3: "Autohupe", t7_i4: "Gedanke",
    t8_title: "Schmecken", t8_text: "Mit der Zunge schmecken wir, ob etwas süß, sauer, salzig oder bitter ist.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Womit schmecken wir?", t8_qa: "Mit der Zunge", t8_qb: "Mit den Haaren", t8_qc: "Mit den Fingern", t8_qd: "Mit den Knien",
    t8_w1: "Die", t8_w2: "Zunge", t8_w3: "ist", t8_w4: "zum", t8_w5: "Schmecken", t8_w6: "da.",
    t8_l1: "Süß", t8_r1: "Honig", t8_l2: "Sauer", t8_r2: "Zitrone", t8_l3: "Salzig", t8_r3: "Brezel",
    t8_sent: "Eine Zitrone schmeckt ___.", t8_qa2: "sauer", t8_qb2: "süß", t8_qc2: "salzig", t8_qd2: "bitter",
    t8_f1: "Eis", t8_f2: "schmeckt", t8_f3: "sehr", t8_f4: "süß.",
    t8_tk1: "Auf", t8_tk2: "der", t8_tk3: "Zunge", t8_tk4: "gibt", t8_tk5: "es", t8_tk6: "Geschmacksknospen.",
    t8_bl1: "Geschmack", t8_bl2: "Kein Geschmack", t8_i1: "Süß", t8_i2: "Laut", t8_i3: "Sauer", t8_i4: "Hoch",
  },
};

export const SACHKUNDE_K1_KÖRPER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Körperteile", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Sinne", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left:"t2_l1",right:"t2_r1"},{left:"t2_l2",right:"t2_r2"},{left:"t2_l3",right:"t2_r3"}] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Auge", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hände", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Zähne", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Hygiene", color: "#F44336" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hören", color: "#F44336" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Schmecken", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const TIERE_GARTEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere im Garten",
    t1_title: "Regenwurm", t1_text: "Der Regenwurm lebt in der Erde und ist sehr nützlich für den Boden.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Wo lebt der Regenwurm?", t1_qa: "In der Erde", t1_qb: "Im Wasser", t1_qc: "In der Luft", t1_qd: "Im Feuer",
    t1_w1: "Der", t1_w2: "Regenwurm", t1_w3: "gräbt", t1_w4: "Gänge", t1_w5: "in", t1_w6: "die Erde.",
    t1_l1: "Lang", t1_r1: "Wurm", t1_l2: "Feucht", t1_r2: "Erde", t1_l3: "Nützlich", t1_r3: "Garten",
    t1_sent: "Regenwürmer machen den Boden ___.", t1_qa2: "locker", t1_qb2: "hart", t1_qc2: "hell", t1_qd2: "trocken",
    t1_f1: "Ein", t1_f2: "Regenwurm", t1_f3: "hat", t1_f4: "keine Beine.",
    t1_tk1: "Der", t1_tk2: "Regenwurm", t1_tk3: "ist", t1_tk4: "ein", t1_tk5: "wichtiges", t1_tk6: "Tier.",
    t1_bl1: "Lebt im Boden", t1_bl2: "Lebt nicht im Boden", t1_i1: "Regenwurm", t1_i2: "Fisch", t1_i3: "Maulwurf", t1_i4: "Vogel",
    t2_title: "Igel", t2_text: "Der Igel hat Stacheln, um sich vor Feinden zu schützen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was hat der Igel zum Schutz?", t2_qa: "Stacheln", t2_qb: "Federn", t2_qc: "Schuppen", t2_qd: "Fell",
    t2_w1: "Ein", t2_w2: "Igel", t2_w3: "rollt", t2_w4: "sich", t2_w5: "zu einer", t2_w6: "Kugel.",
    t2_l1: "Nachtaktiv", t2_r1: "Igel", t2_l2: "Insektenfresser", t2_r2: "Nahrung", t2_l3: "Winterschlaf", t2_r3: "Winter",
    t2_sent: "Igel fressen gerne ___.", t2_qa2: "Insekten", t2_qb2: "Blumen", t2_qc2: "Steine", t2_qd2: "Äpfel",
    t2_f1: "Der", t2_f2: "Igel", t2_f3: "hat", t2_f4: "viele Stacheln.",
    t2_tk1: "Pass", t2_tk2: "auf,", t2_tk3: "ein", t2_tk4: "Igel", t2_tk5: "ist", t2_tk6: "stachelig.",
    t2_bl1: "Hat Stacheln", t2_bl2: "Hat keine Stacheln", t2_i1: "Igel", t2_i2: "Frosch", t2_i3: "Stachelschwein", t2_i4: "Katze",
    t3_title: "Marienkäfer", t3_text: "Marienkäfer haben oft rote Flügel mit schwarzen Punkten.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Welche Farbe haben Marienkäfer oft?", t3_qa: "Rot mit Punkten", t3_qb: "Blau gestreift", t3_qc: "Grün kariert", t3_qd: "Ganz schwarz",
    t3_w1: "Ein", t3_w2: "Marienkäfer", t3_w3: "kann", t3_w4: "auf", t3_w5: "einem", t3_w6: "Blatt sitzen.",
    t3_l1: "Punkte", t3_r1: "Sieben", t3_l2: "Glücksbringer", t3_r2: "Käfer", t3_l3: "Insekt", t3_r3: "Sechs Beine",
    t3_sent: "Marienkäfer fressen ___.", t3_qa2: "Blattläuse", t3_qb2: "Gras", t3_qc2: "Honig", t3_qd2: "Würmer",
    t3_f1: "Ich", t3_f2: "sehe", t3_f3: "einen", t3_f4: "Marienkäfer.",
    t3_tk1: "Der", t3_tk2: "Marienkäfer", t3_tk3: "ist", t3_tk4: "ein", t3_tk5: "nützliches", t3_tk6: "Insekt.",
    t3_bl1: "Insekt", t3_bl2: "Kein Insekt", t3_i1: "Marienkäfer", t3_i2: "Spinne", t3_i3: "Ameise", t3_i4: "Wurm",
    t4_title: "Vögel", t4_text: "Viele Vögel können fliegen und bauen Nester für ihre Eier.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was bauen Vögel für ihre Eier?", t4_qa: "Nester", t4_qb: "Höhlen", t4_qc: "Häuser", t4_qd: "Burgen",
    t4_w1: "Ein", t4_w2: "Vogel", t4_w3: "singt", t4_w4: "am", t4_w5: "Morgen", t4_w6: "ein Lied.",
    t4_l1: "Flügel", t4_r1: "Fliegen", t4_l2: "Schnabel", t4_r2: "Fressen", t4_l3: "Federn", t4_r3: "Warm halten",
    t4_sent: "Vögel haben ___ zum Fliegen.", t4_qa2: "Flügel", t4_qb2: "Hände", t4_qc2: "Füße", t4_qd2: "Räder",
    t4_f1: "Im", t4_f2: "Winter", t4_f3: "füttern", t4_f4: "wir Vögel.",
    t4_tk1: "Die", t4_tk2: "Amsel", t4_tk3: "ist", t4_tk4: "ein", t4_tk5: "schwarzer", t4_tk6: "Vogel.",
    t4_bl1: "Kann fliegen", t4_bl2: "Kann nicht fliegen", t4_i1: "Amsel", t4_i2: "Pinguin", t4_i3: "Spatz", t4_i4: "Strauß",
    t5_title: "Schnecke", t5_text: "Die Schnecke trägt ihr Haus immer auf dem Rücken mit sich.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was trägt die Schnecke auf ihrem Rücken?", t5_qa: "Ihr Haus", t5_qb: "Einen Rucksack", t5_qc: "Einen Hut", t5_qd: "Einen Regenschirm",
    t5_w1: "Eine", t5_w2: "Schnecke", t5_w3: "kriecht", t5_w4: "sehr", t5_w5: "langsam", t5_w6: "voran.",
    t5_l1: "Schleimspur", t5_r1: "Kriechen", t5_l2: "Fühler", t5_r2: "Tasten", t5_l3: "Haus", t5_r3: "Schutz",
    t5_sent: "Schnecken sind bekannt für ihr ___.", t5_qa2: "langsames Tempo", t5_qb2: "schnelles Rennen", t5_qc2: "hohes Springen", t5_qd2: "lautes Singen",
    t5_f1: "Die", t5_f2: "Schnecke", t5_f3: "zieht sich", t5_f4: "ins Haus zurück.",
    t5_tk1: "Nach", t5_tk2: "dem", t5_tk3: "Regen", t5_tk4: "sieht", t5_tk5: "man", t5_tk6: "viele Schnecken.",
    t5_bl1: "Hat ein Haus", t5_bl2: "Hat kein Haus", t5_i1: "Weinbergschnecke", t5_i2: "Nacktschnecke", t5_i3: "Posthornschnecke", t5_i4: "Wurm",
    t6_title: "Biene", t6_text: "Bienen sammeln Nektar von Blumen und machen daraus Honig.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was machen Bienen aus Nektar?", t6_qa: "Honig", t6_qb: "Käse", t6_qc: "Brot", t6_qd: "Saft",
    t6_w1: "Eine", t6_w2: "Biene", t6_w3: "summt,", t6_w4: "wenn", t6_w5: "sie", t6_w6: "fliegt.",
    t6_l1: "Stachel", t6_r1: "Verteidigung", t6_l2: "Bestäubung", t6_r2: "Blumen", t6_l3: "Bienenstock", t6_r3: "Zuhause",
    t6_sent: "Bienen sind wichtig für die ___ von Pflanzen.", t6_qa2: "Bestäubung", t6_qb2: "Zerstörung", t6_qc2: "Bewässerung", t6_qd2: "Beschattung",
    t6_f1: "Pass", t6_f2: "auf,", t6_f3: "eine", t6_f4: "Biene.",
    t6_tk1: "Der", t6_tk2: "Honig", t6_tk3: "von", t6_tk4: "Bienen", t6_tk5: "ist", t6_tk6: "süß.",
    t6_bl1: "Macht Honig", t6_bl2: "Macht keinen Honig", t6_i1: "Biene", t6_i2: "Wespe", t6_i3: "Hummel", t6_i4: "Fliege",
    t7_title: "Ameise", t7_text: "Ameisen sind kleine, starke Insekten, die in großen Gruppen leben.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Wie leben Ameisen?", t7_qa: "In großen Gruppen", t7_qb: "Ganz allein", t7_qc: "Im Wasser", t7_qd: "Auf Bäumen",
    t7_w1: "Viele", t7_w2: "Ameisen", t7_w3: "tragen", t7_w4: "zusammen", t7_w5: "ein", t7_w6: "Blatt.",
    t7_l1: "Ameisenhaufen", t7_r1: "Nest", t7_l2: "Königin", t7_r2: "Anführerin", t7_l3: "Fleißig", t7_r3: "Arbeiten",
    t7_sent: "Eine Ameise kann schwere Dinge ___.", t7_qa2: "tragen", t7_qb2: "essen", t7_qc2: "malen", t7_qd2: "lesen",
    t7_f1: "Die", t7_f2: "Ameisen", t7_f3: "bilden", t7_f4: "eine Straße.",
    t7_tk1: "Ameisen", t7_tk2: "sind", t7_tk3: "sehr", t7_tk4: "stark", t7_tk5: "für ihre", t7_tk6: "Größe.",
    t7_bl1: "Insekt", t7_bl2: "Kein Insekt", t7_i1: "Ameise", t7_i2: "Spinne", t7_i3: "Käfer", t7_i4: "Tausendfüßler",
    t8_title: "Garten-Check", t8_text: "Im Garten leben viele verschiedene Tiere zusammen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Welches Tier hat Stacheln?", t8_qa: "Igel", t8_qb: "Regenwurm", t8_qc: "Schnecke", t8_qd: "Ameise",
    t8_w1: "Der", t8_w2: "Garten", t8_w3: "ist", t8_w4: "voller", t8_w5: "Leben", t8_w6: "und Freude.",
    t8_l1: "Biene", t8_r1: "summt", t8_l2: "Vogel", t8_r2: "singt", t8_l3: "Wurm", t8_r3: "kriecht",
    t8_sent: "Ein ___ sammelt Nektar.", t8_qa2: "Biene", t8_qb2: "Igel", t8_qc2: "Vogel", t8_qd2: "Schnecke",
    t8_f1: "Welches", t8_f2: "Tier", t8_f3: "ist", t8_f4: "dein Lieblingstier?",
    t8_tk1: "Im", t8_tk2: "Garten", t8_tk3: "kannst", t8_tk4: "du", t8_tk5: "viele", t8_tk6: "Tiere entdecken.",
    t8_bl1: "Gartentier", t8_bl2: "Kein Gartentier", t8_i1: "Marienkäfer", t8_i2: "Löwe", t8_i3: "Schmetterling", t8_i4: "Elefant",
  },
};

export const SACHKUNDE_K1_TIERE_GARTEN_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Regenwurm", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Igel", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Marienkäfer", color: "#8BC34A" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Vögel", color: "#8BC34A" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Schnecke", color: "#8BC34A" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Biene", color: "#8BC34A" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Ameise", color: "#8BC34A" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Garten-Check", color: "#8BC34A" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const SACHKUNDE_K1_NATUR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pflanzen & Bäume",
    t1_title: "Der Baum", t1_text: "Ein Baum hat Wurzeln, einen Stamm, Äste und Blätter.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was gehört NICHT zu einem Baum?", t1_qa: "Räder", t1_qb: "Wurzeln", t1_qc: "Stamm", t1_qd: "Blätter",
    t1_w1: "Ein", t1_w2: "Baum", t1_w3: "wächst", t1_w4: "hoch", t1_w5: "in den", t1_w6: "Himmel.",
    t1_l1: "Rinde", t1_r1: "Außen", t1_l2: "Krone", t1_r2: "Oben", t1_l3: "Wurzel", t1_r3: "Unten",
    t1_sent: "Ein Baum spendet im Sommer ___.", t1_qa2: "Schatten", t1_qb2: "Licht", t1_qc2: "Wasser", t1_qd2: "Wärme",
    t1_f1: "Bäume", t1_f2: "sind", t1_f3: "wichtig", t1_f4: "für die Luft.",
    t1_tk1: "Die", t1_tk2: "Blätter", t1_tk3: "eines", t1_tk4: "Baumes", t1_tk5: "sind", t1_tk6: "grün.",
    t1_bl1: "Teil des Baumes", t1_bl2: "Kein Teil des Baumes", t1_i1: "Ast", t1_i2: "Auto", t1_i3: "Blatt", t1_i4: "Haus",
    t2_title: "Blätter", t2_text: "Im Herbst verfärben sich die Blätter und fallen von den Bäumen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "In welcher Jahreszeit fallen die Blätter von den Bäumen?", t2_qa: "Herbst", t2_qb: "Frühling", t2_qc: "Sommer", t2_qd: "Winter",
    t2_w1: "Die", t2_w2: "Blätter", t2_w3: "am", t2_w4: "Baum", t2_w5: "sind", t2_w6: "grün.",
    t2_l1: "Grün", t2_r1: "Sommer", t2_l2: "Bunt", t2_r2: "Herbst", t2_l3: "Kahl", t2_r3: "Winter",
    t2_sent: "Im Herbst werden die Blätter ___.", t2_qa2: "bunt", t2_qb2: "grün", t2_qc2: "weiß", t2_qd2: "schwarz",
    t2_f1: "Ein", t2_f2: "Blatt", t2_f3: "fällt", t2_f4: "vom Baum.",
    t2_tk1: "Laubbäume", t2_tk2: "verlieren", t2_tk3: "im", t2_tk4: "Herbst", t2_tk5: "ihre", t2_tk6: "Blätter.",
    t2_bl1: "Laubbaum", t2_bl2: "Nadelbaum", t2_i1: "Eiche", t2_i2: "Tanne", t2_i3: "Ahorn", t2_i4: "Fichte",
    t3_title: "Frühblüher", t3_text: "Frühblüher wie Schneeglöckchen und Krokusse blühen schon, wenn noch Schnee liegt.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Welche Blume ist ein Frühblüher?", t3_qa: "Schneeglöckchen", t3_qb: "Sonnenblume", t3_qc: "Rose", t3_qd: "Mohnblume",
    t3_w1: "Das", t3_w2: "Schneeglöckchen", t3_w3: "ist", t3_w4: "ein", t3_w5: "Frühblüher", t3_w6: "im Garten.",
    t3_l1: "Krokus", t3_r1: "Lila", t3_l2: "Tulpe", t3_r2: "Bunt", t3_l3: "Narzisse", t3_r3: "Gelb",
    t3_sent: "Frühblüher bringen Farbe in den ___.", t3_qa2: "Winter", t3_qb2: "Sommer", t3_qc2: "Herbst", t3_qd2: "Frühling",
    t3_f1: "Die", t3_f2: "ersten", t3_f3: "Blumen", t3_f4: "blühen.",
    t3_tk1: "Tulpen", t3_tk2: "sind", t3_tk3: "wunderschöne", t3_tk4: "Frühlingsboten.",
    t3_bl1: "Frühblüher", t3_bl2: "Sommerblume", t3_i1: "Krokus", t3_i2: "Dahlie", t3_i3: "Narzisse", t3_i4: "Geranie",
    t4_title: "Löwenzahn", t4_text: "Aus den gelben Blüten des Löwenzahns wird später eine Pusteblume.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Zu was wird die Blüte des Löwenzahns?", t4_qa: "Pusteblume", t4_qb: "Apfel", t4_qc: "Wurzel", t4_qd: "Stein",
    t4_w1: "Der", t4_w2: "Löwenzahn", t4_w3: "hat", t4_w4: "eine", t4_w5: "gelbe", t4_w6: "Blüte.",
    t4_l1: "Gelb", t4_r1: "Blüte", t4_l2: "Weiß", t4_r2: "Pusteblume", t4_l3: "Samen", t4_r3: "Fliegen",
    t4_sent: "Die Samen des Löwenzahns können ___.", t4_qa2: "fliegen", t4_qb2: "schwimmen", t4_qc2: "singen", t4_qd2: "lesen",
    t4_f1: "Puste", t4_f2: "die", t4_f3: "Samen", t4_f4: "weg.",
    t4_tk1: "Löwenzahn", t4_tk2: "wächst", t4_tk3: "fast", t4_tk4: "überall", t4_tk5: "auf", t4_tk6: "Wiesen.",
    t4_bl1: "Teil vom Löwenzahn", t4_bl2: "Kein Teil vom Löwenzahn", t4_i1: "Blüte", t4_i2: "Rinde", t4_i3: "Stängel", t4_i4: "Ast",
    t5_title: "Wiese", t5_text: "Auf einer Wiese wachsen viele verschiedene Gräser und Blumen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was wächst auf einer Wiese?", t5_qa: "Gräser und Blumen", t5_qb: "Nur Bäume", t5_qc: "Nur Steine", t5_qd: "Häuser",
    t5_w1: "Auf", t5_w2: "der", t5_w3: "Wiese", t5_w4: "summen", t5_w5: "die", t5_w6: "Bienen.",
    t5_l1: "Gänseblümchen", t5_r1: "Weiß", t5_l2: "Klee", t5_r2: "Grün", t5_l3: "Hahnenfuß", t5_r3: "Gelb",
    t5_sent: "Eine Wiese ist ein Lebensraum für viele ___.", t5_qa2: "Insekten", t5_qb2: "Fische", t5_qc2: "Autos", t5_qd2: "Schiffe",
    t5_f1: "Wir", t5_f2: "machen", t5_f3: "ein Picknick", t5_f4: "auf der Wiese.",
    t5_tk1: "Bunte", t5_tk2: "Wiesen", t5_tk3: "sind", t5_tk4: "schön", t5_tk5: "anzusehen.",
    t5_bl1: "Wiesenblume", t5_bl2: "Keine Wiesenblume", t5_i1: "Gänseblümchen", t5_i2: "Rose", t5_i3: "Löwenzahn", t5_i4: "Orchidee",
    t6_title: "Wald", t6_text: "Ein Wald ist ein großes Gebiet, in dem sehr viele Bäume wachsen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was findet man in einem Wald?", t6_qa: "Viele Bäume", t6_qb: "Viele Autos", t6_qc: "Viele Schiffe", t6_qd: "Viele Flugzeuge",
    t6_w1: "Im", t6_w2: "Wald", t6_w3: "leben", t6_w4: "viele", t6_w5: "Tiere", t6_w6: "versteckt.",
    t6_l1: "Moos", t6_r1: "Weich", t6_l2: "Pilze", t6_r2: "Bunt", t6_l3: "Tiere", t6_r3: "Versteckt",
    t6_sent: "Im Wald riecht es nach ___.", t6_qa2: "Erde und Moos", t6_qb2: "Pizza", t6_qc2: "Parfüm", t6_qd2: "Meer",
    t6_f1: "Ein", t6_f2: "Spaziergang", t6_f3: "im Wald", t6_f4: "ist gesund.",
    t6_tk1: "Man", t6_tk2: "sollte", t6_tk3: "im", t6_tk4: "Wald", t6_tk5: "leise", t6_tk6: "sein.",
    t6_bl1: "Lebt im Wald", t6_bl2: "Lebt nicht im Wald", t6_i1: "Reh", t6_i2: "Pinguin", t6_i3: "Fuchs", t6_i4: "Delfin",
    t7_title: "Samen", t7_text: "Aus einem kleinen Samen kann eine große Pflanze wachsen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was wächst aus einem Samen?", t7_qa: "Eine Pflanze", t7_qb: "Ein Tier", t7_qc: "Ein Stein", t7_qd: "Ein Haus",
    t7_w1: "Der", t7_w2: "Samen", t7_w3: "braucht", t7_w4: "Wasser", t7_w5: "zum", t7_w6: "Keimen.",
    t7_l1: "Sonnenblumenkern", t7_r1: "Große Blume", t7_l2: "Eichel", t7_r2: "Großer Baum", t7_l3: "Bohne", t7_r3: "Rankpflanze",
    t7_sent: "Ein kleiner Samen wird zu einer großen ___.", t7_qa2: "Pflanze", t7_qb2: "Wolke", t7_qc2: "Straße", t7_qd2: "Lampe",
    t7_f1: "Wir", t7_f2: "pflanzen", t7_f3: "einen", t7_f4: "Samen.",
    t7_tk1: "Geduld", t7_tk2: "ist", t7_tk3: "wichtig,", t7_tk4: "wenn", t7_tk5: "man", t7_tk6: "Samen sät.",
    t7_bl1: "Samen", t7_bl2: "Kein Samen", t7_i1: "Apfelkern", t7_i2: "Kieselstein", t7_i3: "Kürbiskern", t7_i4: "Muschel",
    t8_title: "Pflanzen-Check", t8_text: "Pflanzen brauchen Licht, Wasser und Erde, um zu wachsen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was braucht eine Pflanze zum Wachsen?", t8_qa: "Licht und Wasser", t8_qb: "Dunkelheit und Kälte", t8_qc: "Nur Luft", t8_qd: "Schokolade",
    t8_w1: "Pflanzen", t8_w2: "sind", t8_w3: "wichtig", t8_w4: "für", t8_w5: "unser", t8_w6: "Leben.",
    t8_l1: "Wurzel", t8_r1: "Nährstoffe", t8_l2: "Blatt", t8_r2: "Photosynthese", t8_l3: "Blüte", t8_r3: "Fortpflanzung",
    t8_sent: "Ohne ___ gäbe es keine Pflanzen.", t8_qa2: "Sonne", t8_qb2: "Mond", t8_qc2: "Sterne", t8_qd2: "Autos",
    t8_f1: "Gieße", t8_f2: "deine", t8_f3: "Pflanzen", t8_f4: "regelmäßig.",
    t8_tk1: "Die", t8_tk2: "meisten", t8_tk3: "Pflanzen", t8_tk4: "sind", t8_tk5: "grün", t8_tk6: "und schön.",
    t8_bl1: "Pflanzenteil", t8_bl2: "Kein Pflanzenteil", t8_i1: "Wurzel", t8_i2: "Feder", t8_i3: "Stängel", t8_i4: "Rad",
  },
};

export const SACHKUNDE_K1_NATUR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Baum", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Blätter", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Frühblüher", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Löwenzahn", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wiese", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wald", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Samen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Pflanzen-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const WETTER_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wetter & Jahreszeiten",
    t1_title: "Sonne", t1_text: "Die Sonne spendet uns Licht und Wärme.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Die Sonne ist ein...", t1_qa: "Stern", t1_qb: "Planet", t1_qc: "Mond", t1_qd: "Komet",
    t1_w1: "Das", t1_w2: "ist", t1_w3: "ein", t1_w4: "Satz", t1_w5: "über", t1_w6: "Sonne.",
    t1_l1: "A", t1_r1: "1", t1_l2: "B", t1_r2: "2", t1_l3: "C", t1_r3: "3",
    t1_sent: "Sonne ist sehr ___.", t1_qa2: "wichtig", t1_qb2: "laut", t1_qc2: "blau", t1_qd2: "groß",
    t1_f1: "Teil eins", t1_f2: "Teil zwei", t1_f3: "Teil drei", t1_f4: "Teil vier",
    t1_tk1: "Wort", t1_tk2: "Wort", t1_tk3: "Sonne", t1_tk4: "Wort", t1_tk5: "Wort", t1_tk6: "Wort",
    t1_bl1: "Gut", t1_bl2: "Schlecht", t1_i1: "Ja", t1_i2: "Nein", t1_i3: "Richtig", t1_i4: "Falsch",
    t2_title: "Regen", t2_text: "Regen ist flüssiges Wasser, das vom Himmel fällt.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Woraus besteht Regen hauptsächlich?", t2_qa: "Wasser", t2_qb: "Luft", t2_qc: "Erde", t2_qd: "Feuer",
    t2_w1: "Das", t2_w2: "ist", t2_w3: "ein", t2_w4: "Satz", t2_w5: "über", t2_w6: "Regen.",
    t2_l1: "A", t2_r1: "1", t2_l2: "B", t2_r2: "2", t2_l3: "C", t2_r3: "3",
    t2_sent: "Regen ist sehr ___.", t2_qa2: "wichtig", t2_qb2: "laut", t2_qc2: "blau", t2_qd2: "groß",
    t2_f1: "Teil eins", t2_f2: "Teil zwei", t2_f3: "Teil drei", t2_f4: "Teil vier",
    t2_tk1: "Wort", t2_tk2: "Wort", t2_tk3: "Regen", t2_tk4: "Wort", t2_tk5: "Wort", t2_tk6: "Wort",
    t2_bl1: "Gut", t2_bl2: "Schlecht", t2_i1: "Ja", t2_i2: "Nein", t2_i3: "Richtig", t2_i4: "Falsch",
    t3_title: "Wind", t3_text: "Wind ist die Bewegung von Luft.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was ist Wind?", t3_qa: "Bewegte Luft", t3_qb: "Stilles Wasser", t3_qc: "Fester Stein", t3_qd: "Helles Licht",
    t3_w1: "Das", t3_w2: "ist", t3_w3: "ein", t3_w4: "Satz", t3_w5: "über", t3_w6: "Wind.",
    t3_l1: "A", t3_r1: "1", t3_l2: "B", t3_r2: "2", t3_l3: "C", t3_r3: "3",
    t3_sent: "Wind ist sehr ___.", t3_qa2: "wichtig", t3_qb2: "laut", t3_qc2: "blau", t3_qd2: "groß",
    t3_f1: "Teil eins", t3_f2: "Teil zwei", t3_f3: "Teil drei", t3_f4: "Teil vier",
    t3_tk1: "Wort", t3_tk2: "Wort", t3_tk3: "Wind", t3_tk4: "Wort", t3_tk5: "Wort", t3_tk6: "Wort",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Ja", t3_i2: "Nein", t3_i3: "Richtig", t3_i4: "Falsch",
    t4_title: "Schnee", t4_text: "Schnee besteht aus vielen kleinen Eiskristallen.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Woraus besteht Schnee?", t4_qa: "Eiskristallen", t4_qb: "Sandkörnern", t4_qc: "Wassertropfen", t4_qd: "Blättern",
    t4_w1: "Das", t4_w2: "ist", t4_w3: "ein", t4_w4: "Satz", t4_w5: "über", t4_w6: "Schnee.",
    t4_l1: "A", t4_r1: "1", t4_l2: "B", t4_r2: "2", t4_l3: "C", t4_r3: "3",
    t4_sent: "Schnee ist sehr ___.", t4_qa2: "wichtig", t4_qb2: "laut", t4_qc2: "blau", t4_qd2: "groß",
    t4_f1: "Teil eins", t4_f2: "Teil zwei", t4_f3: "Teil drei", t4_f4: "Teil vier",
    t4_tk1: "Wort", t4_tk2: "Wort", t4_tk3: "Schnee", t4_tk4: "Wort", t4_tk5: "Wort", t4_tk6: "Wort",
    t4_bl1: "Gut", t4_bl2: "Schlecht", t4_i1: "Ja", t4_i2: "Nein", t4_i3: "Richtig", t4_i4: "Falsch",
    t5_title: "Frühling", t5_text: "Im Frühling erwacht die Natur und die Blumen beginnen zu blühen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was passiert typischerweise im Frühling?", t5_qa: "Pflanzen wachsen", t5_qb: "Blätter fallen ab", t5_qc: "Es schneit oft", t5_qd: "Tiere schlafen ein",
    t5_w1: "Das", t5_w2: "ist", t5_w3: "ein", t5_w4: "Satz", t5_w5: "über", t5_w6: "Frühling.",
    t5_l1: "A", t5_r1: "1", t5_l2: "B", t5_r2: "2", t5_l3: "C", t5_r3: "3",
    t5_sent: "Frühling ist sehr ___.", t5_qa2: "wichtig", t5_qb2: "laut", t5_qc2: "blau", t5_qd2: "groß",
    t5_f1: "Teil eins", t5_f2: "Teil zwei", t5_f3: "Teil drei", t5_f4: "Teil vier",
    t5_tk1: "Wort", t5_tk2: "Wort", t5_tk3: "Frühling", t5_tk4: "Wort", t5_tk5: "Wort", t5_tk6: "Wort",
    t5_bl1: "Gut", t5_bl2: "Schlecht", t5_i1: "Ja", t5_i2: "Nein", t5_i3: "Richtig", t5_i4: "Falsch",
    t6_title: "Sommer", t6_text: "Der Sommer ist die wärmste Jahreszeit.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Welche Jahreszeit ist normalerweise am wärmsten?", t6_qa: "Sommer", t6_qb: "Winter", t6_qc: "Herbst", t6_qd: "Frühling",
    t6_w1: "Das", t6_w2: "ist", t6_w3: "ein", t6_w4: "Satz", t6_w5: "über", t6_w6: "Sommer.",
    t6_l1: "A", t6_r1: "1", t6_l2: "B", t6_r2: "2", t6_l3: "C", t6_r3: "3",
    t6_sent: "Sommer ist sehr ___.", t6_qa2: "wichtig", t6_qb2: "laut", t6_qc2: "blau", t6_qd2: "groß",
    t6_f1: "Teil eins", t6_f2: "Teil zwei", t6_f3: "Teil drei", t6_f4: "Teil vier",
    t6_tk1: "Wort", t6_tk2: "Wort", t6_tk3: "Sommer", t6_tk4: "Wort", t6_tk5: "Wort", t6_tk6: "Wort",
    t6_bl1: "Gut", t6_bl2: "Schlecht", t6_i1: "Ja", t6_i2: "Nein", t6_i3: "Richtig", t6_i4: "Falsch",
    t7_title: "Herbst", t7_text: "Im Herbst verfärben sich die Blätter und fallen von den Bäumen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was passiert mit den Blättern im Herbst?", t7_qa: "Sie werden bunt", t7_qb: "Sie werden grün", t7_qc: "Sie wachsen neu", t7_qd: "Sie erfrieren",
    t7_w1: "Das", t7_w2: "ist", t7_w3: "ein", t7_w4: "Satz", t7_w5: "über", t7_w6: "Herbst.",
    t7_l1: "A", t7_r1: "1", t7_l2: "B", t7_r2: "2", t7_l3: "C", t7_r3: "3",
    t7_sent: "Herbst ist sehr ___.", t7_qa2: "wichtig", t7_qb2: "laut", t7_qc2: "blau", t7_qd2: "groß",
    t7_f1: "Teil eins", t7_f2: "Teil zwei", t7_f3: "Teil drei", t7_f4: "Teil vier",
    t7_tk1: "Wort", t7_tk2: "Wort", t7_tk3: "Herbst", t7_tk4: "Wort", t7_tk5: "Wort", t7_tk6: "Wort",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Ja", t7_i2: "Nein", t7_i3: "Richtig", t7_i4: "Falsch",
    t8_title: "Winter", t8_text: "Im Winter ist es oft kalt und es kann schneien.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was ist typisch für den Winter?", t8_qa: "Kälte und Schnee", t8_qb: "Hitze und Sonne", t8_qc: "Blühende Blumen", t8_qd: "Reifes Obst",
    t8_w1: "Das", t8_w2: "ist", t8_w3: "ein", t8_w4: "Satz", t8_w5: "über", t8_w6: "Winter.",
    t8_l1: "A", t8_r1: "1", t8_l2: "B", t8_r2: "2", t8_l3: "C", t8_r3: "3",
    t8_sent: "Winter ist sehr ___.", t8_qa2: "wichtig", t8_qb2: "laut", t8_qc2: "blau", t8_qd2: "groß",
    t8_f1: "Teil eins", t8_f2: "Teil zwei", t8_f3: "Teil drei", t8_f4: "Teil vier",
    t8_tk1: "Wort", t8_tk2: "Wort", t8_tk3: "Winter", t8_tk4: "Wort", t8_tk5: "Wort", t8_tk6: "Wort",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Ja", t8_i2: "Nein", t8_i3: "Richtig", t8_i4: "Falsch",
  },
};

export const WETTER_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Sonne", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Regen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wind", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Schnee", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Frühling", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sommer", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Herbst", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Winter", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  }
];

export const SACHKUNDE_K1_FAMILIE_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Meine Familie",
    t1_title: "Eltern", t1_text: "Deine Mutter und dein Vater sind deine Eltern.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Wer sind deine Eltern?", t1_qa: "Mutter und Vater", t1_qb: "Onkel und Tante", t1_qc: "Oma und Opa", t1_qd: "Freunde",
    t2_title: "Geschwister", t2_text: "Ein Bruder oder eine Schwester sind deine Geschwister.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Ein Bruder oder eine Schwester ist dein...?", t2_qa: "Geschwister", t2_qb: "Freund", t2_qc: "Nachbar", t2_qd: "Lehrer",
    t3_title: "Großeltern", t3_text: "Die Eltern deiner Eltern sind deine Großeltern, also Oma und Opa.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Die Eltern deiner Eltern sind deine...?", t3_qa: "Großeltern", t3_qb: "Nachbarn", t3_qc: "Onkel und Tante", t3_qd: "Cousins",
    t4_title: "Zuhause", t4_text: "Ein Zuhause ist der Ort, an dem eine Familie wohnt und sich geborgen fühlt.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Wo wohnt eine Familie?", t4_qa: "In einem Zuhause", t4_qb: "In einem Auto", t4_qc: "Auf einem Baum", t4_qd: "In der Schule",
    t5_title: "Gefühle", t5_text: "In einer Familie teilt man viele Gefühle wie Freude, Traurigkeit und Liebe.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Welches ist ein Gefühl?", t5_qa: "Freude", t5_qb: "Laufen", t5_qc: "Springen", t5_qd: "Lesen",
    t6_title: "Freunde", t6_text: "Freunde sind wie eine zweite Familie, mit denen man spielt und lacht.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Mit wem spielst du gerne?", t6_qa: "Mit Freunden", t6_qb: "Mit Steinen", t6_qc: "Mit Wolken", t6_qd: "Mit dem Wind",
    t7_title: "Hobbys", t7_text: "Hobbys sind Aktivitäten, die man in seiner Freizeit gerne macht, wie Malen oder Fußball.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was ist ein Hobby?", t7_qa: "Malen", t7_qb: "Schlafen", t7_qc: "Essen", t7_qd: "Atmen",
    t8_title: "Familien-Check", t8_text: "Jede Familie ist einzigartig und besonders.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Wer gehört zur Familie?", t8_qa: "Mutter", t8_qb: "Polizist", t8_qc: "Bäcker", t8_qd: "Pilot",
  },
};

export const SACHKUNDE_K1_FAMILIE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Eltern", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Geschwister", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Großeltern", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zuhause", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gefühle", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "t5_sent", choices: ["t5_qa2", "t5_qb2", "t5_qc2", "t5_qd2"], correctIndex: 0 },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Freunde", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hobbys", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Familie", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

export const SACHKUNDE_K1_VERKEHR_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sicher im Verkehr",
    t1_title: "Ampel", t1_text: "Die Ampel regelt den Verkehr. Bei Rot bleibst du stehen, bei Grün darfst du gehen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Bei welcher Ampelfarbe darfst du gehen?", t1_qa: "Grün", t1_qb: "Rot", t1_qc: "Gelb", t1_qd: "Blau",
    t2_title: "Zebrastreifen", t2_text: "Auf dem Zebrastreifen können Fußgänger die Straße sicher überqueren.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Wo überqueren Fußgänger sicher die Straße?", t2_qa: "Am Zebrastreifen", t2_qb: "Mitten auf der Straße", t2_qc: "Wo es schön aussieht", t2_qd: "Hinter einem Bus",
    t3_title: "Fahrrad", t3_text: "Ein Fahrrad hat zwei Räder und wird mit Pedalen angetrieben.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Wie viele Räder hat ein Fahrrad?", t3_qa: "Zwei", t3_qb: "Drei", t3_qc: "Vier", t3_qd: "Eins",
    t4_title: "Helm", t4_text: "Ein Helm schützt deinen Kopf beim Fahrrad- oder Rollerfahren.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was schützt deinen Kopf beim Fahrradfahren?", t4_qa: "Ein Helm", t4_qb: "Eine Mütze", t4_qc: "Ein Schal", t4_qd: "Ein Handschuh",
    t5_title: "Auto", t5_text: "Autos fahren auf der Straße und brauchen Benzin oder Strom.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was braucht ein Auto zum Fahren?", t5_qa: "Benzin oder Strom", t5_qb: "Wasser und Seife", t5_qc: "Sand und Steine", t5_qd: "Äpfel und Bananen",
    t6_title: "Bus", t6_text: "Ein Bus ist ein großes Fahrzeug, das viele Menschen auf einmal transportieren kann.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Welches Fahrzeug transportiert viele Menschen?", t6_qa: "Ein Bus", t6_qb: "Ein Fahrrad", t6_qc: "Ein Motorrad", t6_qd: "Ein Tretroller",
    t7_title: "Schilder", t7_text: "Verkehrsschilder geben uns wichtige Regeln und Hinweise im Verkehr.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was zeigt ein Stoppschild an?", t7_qa: "Anhalten", t7_qb: "Schneller fahren", t7_qc: "Hupen", t7_qd: "Parken",
    t8_title: "Verkehrs-Check", t8_text: "Im Straßenverkehr müssen alle gut aufpassen, um sicher anzukommen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Bei Rot an der Ampel musst du...", t8_qa: "stehen bleiben", t8_qb: "schnell losrennen", t8_qc: "singen und tanzen", t8_qd: "die Augen schließen",
  },
};

export const SACHKUNDE_K1_VERKEHR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ampel", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Zebrastreifen", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Fahrrad", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Helm", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Auto", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "t5_sent", choices: ["t5_qa2", "t5_qb2", "t5_qc2", "t5_qd2"], correctIndex: 0 },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Bus", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Schilder", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Verkehr", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

export const SACHKUNDE_K1_MATERIAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Müll & Recycling",
    t1_title: "Papier", t1_text: "Altes Papier wie Zeitungen und Kartons kann recycelt und zu neuem Papier gemacht werden.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Was gehört in die Papiertonne?", t1_qa: "Zeitung", t1_qb: "Apfelrest", t1_qc: "Glasflasche", t1_qd: "Batterie",
    t2_title: "Glas", t2_text: "Leere Glasflaschen und Gläser gehören in den Glascontainer. Sie können eingeschmolzen werden.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was wirft man in den Glascontainer?", t2_qa: "Flaschen", t2_qb: "Plastiktüten", t2_qc: "Bananenschalen", t2_qd: "Alte Schuhe",
    t3_title: "Plastik", t3_text: "Plastikverpackungen wie Joghurtbecher und Flaschen sollten im gelben Sack gesammelt werden.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Was ist meistens aus Plastik?", t3_qa: "Eine Wasserflasche", t3_qb: "Ein Apfel", t3_qc: "Ein Buch", t3_qd: "Ein Stein",
    t4_title: "Bio-Müll", t4_text: "Essensreste wie Obst- und Gemüseschalen sind Biomüll und kommen in die Biotonne.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Was ist Biomüll?", t4_qa: "Apfelreste", t4_qb: "Eine alte Batterie", t4_qc: "Eine Plastikflasche", t4_qd: "Ein kaputtes Glas",
    t5_title: "Restmüll", t5_text: "Alles, was nicht recycelt werden kann, kommt in den Restmüll, zum Beispiel ein alter Stift.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was kommt in den Restmüll?", t5_qa: "Alter Stift", t5_qb: "Zeitungspapier", t5_qc: "Glasflasche", t5_qd: "Bananenschale",
    t6_title: "Sortieren", t6_text: "Mülltrennung ist wichtig, damit wertvolle Materialien wiederverwendet werden können.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Warum sortieren wir Müll?", t6_qa: "Für Recycling", t6_qb: "Weil es Spaß macht", t6_qc: "Um ihn zu verstecken", t6_qd: "Damit er mehr wird",
    t7_title: "Sparen", t7_text: "Wenn wir Dinge wiederverwenden statt wegzuwerfen, sparen wir Rohstoffe und schützen die Umwelt.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Was bedeutet es, Wasser zu sparen?", t7_qa: "Weniger Wasser benutzen", t7_qb: "Mehr Wasser kaufen", t7_qc: "Wasser verschütten", t7_qd: "Im Wasser spielen",
    t8_title: "Müll-Check", t8_text: "Richtiges Müllsortieren hilft unserer Erde, gesund zu bleiben.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Wohin gehört die leere Safttüte aus Pappe?", t8_qa: "Papiermüll", t8_qb: "Biomüll", t8_qc: "Restmüll", t8_qd: "Glascontainer",
  },
};

export const SACHKUNDE_K1_MATERIAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Papier", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Glas", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Plastik", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Bio-Müll", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Restmüll", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "t5_sent", choices: ["t5_qa2", "t5_qb2", "t5_qc2", "t5_qd2"], correctIndex: 0 },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Sortieren", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Sparen", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Müll-Check", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "easy"
  },
];

export const SACHKUNDE_K1_WISSEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wissen-Check",
    t1_title: "Tiere", t1_text: "Tiere sind Lebewesen. Manche haben Fell, andere Federn oder Schuppen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Welches Tier hat Stacheln?", t1_qa: "Igel", t1_qb: "Frosch", t1_qc: "Vogel", t1_qd: "Fisch",
    t2_title: "Pflanzen", t2_text: "Pflanzen sind wichtig für uns. Sie geben uns Sauerstoff zum Atmen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was braucht eine Pflanze zum Wachsen?", t2_qa: "Licht und Wasser", t2_qb: "Dunkelheit", t2_qc: "Nur Steine", t2_qd: "Kälte",
    t3_title: "Wetter", t3_text: "Das Wetter kann sonnig, regnerisch, windig oder verschneit sein.", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "In welcher Jahreszeit schneit es oft?", t3_qa: "Winter", t3_qb: "Sommer", t3_qc: "Frühling", t3_qd: "Herbst",
    t4_title: "Körper", t4_text: "Unser Körper hat viele Teile, die zusammenarbeiten.", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Womit können wir sehen?", t4_qa: "Mit den Augen", t4_qb: "Mit den Ohren", t4_qc: "Mit der Nase", t4_qd: "Mit dem Mund",
    t5_title: "Sinne", t5_text: "Mit unseren fünf Sinnen entdecken wir die Welt um uns herum.", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Wie viele Sinne hat der Mensch normalerweise?", t5_qa: "Fünf", t5_qb: "Drei", t5_qc: "Zehn", t5_qd: "Eins",
    t6_title: "Gesundheit", t6_text: "Gesund zu bleiben ist wichtig. Dazu gehört gutes Essen und viel Bewegung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was ist wichtig für gesunde Zähne?", t6_qa: "Regelmäßiges Zähneputzen", t6_qb: "Viel Schokolade essen", t6_qc: "Nie zum Zahnarzt gehen", t6_qd: "Wenig schlafen",
    t7_title: "Sicherheit", t7_text: "Im Verkehr müssen wir vorsichtig sein und auf die Regeln achten.", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Bei welcher Ampelfarbe musst du stehen bleiben?", t7_qa: "Rot", t7_qb: "Grün", t7_qc: "Gelb", t7_qd: "Orange",
    t8_title: "Natur-Finale", t8_text: "Die Natur ist vielfältig. Es gibt Tiere, Pflanzen und unterschiedliches Wetter.", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was ist KEIN Insekt?", t8_qa: "Spinne", t8_qb: "Ameise", t8_qc: "Biene", t8_qd: "Marienkäfer",
  },
};

export const SACHKUNDE_K1_WISSEN_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Tiere", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Pflanzen", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wetter", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Körper", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Sinne", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "t5_sent", choices: ["t5_qa2", "t5_qb2", "t5_qc2", "t5_qd2"], correctIndex: 0 },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Gesundheit", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Sicherheit", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Natur", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "medium"
  },
];

export const SACHKUNDE_K1_DIPLOM_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Abschluss-Abenteuer",
    t1_title: "Diplom-Frage 1", t1_text: "Zeige, was du gelernt hast!", t1_inst: "Löse die Aufgabe:", t1_h1: "Tipp 1", t1_h2: "Tipp 2", t1_q: "Welches Tier trägt sein Haus auf dem Rücken?", t1_qa: "Schnecke", t1_qb: "Vogel", t1_qc: "Igel", t1_qd: "Frosch",
    t2_title: "Diplom-Frage 2", t2_text: "Du schaffst das!", t2_inst: "Löse die Aufgabe:", t2_h1: "Tipp 1", t2_h2: "Tipp 2", t2_q: "Was wird aus der gelben Blüte des Löwenzahns?", t2_qa: "Pusteblume", t2_qb: "Sonnenblume", t2_qc: "Apfel", t2_qd: "Wurzel",
    t3_title: "Diplom-Frage 3", t3_text: "Fast geschafft!", t3_inst: "Löse die Aufgabe:", t3_h1: "Tipp 1", t3_h2: "Tipp 2", t3_q: "Woraus besteht Schnee?", t3_qa: "Eiskristallen", t3_qb: "Wassertropfen", t3_qc: "Sand", t3_qd: "Staub",
    t4_title: "Diplom-Frage 4", t4_text: "Eine letzte Anstrengung!", t4_inst: "Löse die Aufgabe:", t4_h1: "Tipp 1", t4_h2: "Tipp 2", t4_q: "Die Eltern deiner Mutter sind deine...?", t4_qa: "Großeltern", t4_qb: "Geschwister", t4_qc: "Onkel und Tante", t4_qd: "Freunde",
    t5_title: "Diplom-Frage 5", t5_text: "Sehr gut!", t5_inst: "Löse die Aufgabe:", t5_h1: "Tipp 1", t5_h2: "Tipp 2", t5_q: "Was schützt deinen Kopf beim Radfahren?", t5_qa: "Ein Helm", t5_qb: "Eine Mütze", t5_qc: "Ein Hut", t5_qd: "Ein Tuch",
    t6_title: "Diplom-Frage 6", t6_text: "Du bist ein Experte!", t6_inst: "Löse die Aufgabe:", t6_h1: "Tipp 1", t6_h2: "Tipp 2", t6_q: "Was gehört in die Papiertonne?", t6_qa: "Eine Zeitung", t6_qb: "Eine Bananenschale", t6_qc: "Ein Joghurtbecher", t6_qd: "Eine Glasflasche",
    t7_title: "Diplom-Frage 7", t7_text: "Großartig!", t7_inst: "Löse die Aufgabe:", t7_h1: "Tipp 1", t7_h2: "Tipp 2", t7_q: "Womit hören wir Töne und Musik?", t7_qa: "Mit den Ohren", t7_qb: "Mit den Augen", t7_qc: "Mit der Nase", t7_qd: "Mit den Händen",
    t8_title: "Diplom", t8_text: "Herzlichen Glückwunsch, du hast es geschafft!", t8_inst: "Löse die Aufgabe:", t8_h1: "Tipp 1", t8_h2: "Tipp 2", t8_q: "Was machen Bienen aus Nektar?", t8_qa: "Honig", t8_qb: "Wachs", t8_qc: "Käse", t8_qd: "Wasser",
  },
};

export const SACHKUNDE_K1_DIPLOM_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Schnecke", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Löwenzahn", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Schnee", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Großeltern", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Helm", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "t5_sent", choices: ["t5_qa2", "t5_qb2", "t5_qc2", "t5_qd2"], correctIndex: 0 },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Papier", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Ohren", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Honig", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
];
