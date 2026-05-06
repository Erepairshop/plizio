// @ts-nocheck
// lib/explorerPools/deutschK4.ts
// ASTRODEUTSCH K4 — Klasse 4 (9-10 Jahre)
// LANGUAGE: nur Deutsch (de)
// POOL SIZE: 7-10 topics per island
// DIFFICULTY: easy / medium / hard

// K4 Interactive Types (volle Palette!):
//   highlight-text, drag-to-bucket, match-pairs, gap-fill,
//   sentence-build, word-order, physics-bucket, physics-magnet,
//   physics-slingshot, physics-stacker

// QUIZ — Generator verwenden:
//   "nominativ"           → Nominativ Kasus
//   "akkusativ"           → Akkusativ Kasus
//   "dativ"               → Dativ Kasus
//   "genitiv"             → Genitiv Kasus
//   "praeteritum"         → Präteritum Formen
//   "perfekt"             → Perfekt (hat/ist + Partizip)
//   "plural"              → Singular→Plural
//   "verben_k3"           → Verbkonjugation
//   "adjektive_gegenteil" → Adjektiv Steigerung
//   "satzzeichen_k1"      → Satzzeichen
//   "artikel_k2"          → der/die/das

import type { PoolTopicDef } from "./types";

// ── i1 — Kasusinsel (Nominativ & Akkusativ) ──────────────────────────────────
// Thema: Nominativ (Wer?) und Akkusativ (Wen?) erkennen und anwenden
// SVG: sentence-display (Der Hund beißt den Mann.), two-groups (Nom/Akk),
//      text-bubbles (der→den, die→die, das→das)
// Quiz: { generate: "nominativ" } oder { generate: "akkusativ" }

// export const KASUS_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const KASUS_POOL: PoolTopicDef[] = [ ... ];

// ── i2 — Dativinsel ──────────────────────────────────────────────────────────
// Thema: Dativ (Wem?) — dem/der/dem, Präpositionen mit Dativ (mit, bei, nach...)
// SVG: text-bubbles (dem/der/dem), sentence-display, icon-grid (Präpositionen)
// Quiz: { generate: "dativ" }

// export const DATIV_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const DATIV_POOL: PoolTopicDef[] = [ ... ];

// ── i3 — Zeitformeninsel ─────────────────────────────────────────────────────
// Thema: Präsens, Präteritum, Perfekt, Futur I (werden + Infinitiv)
// SVG: two-groups (hat/ist Perfekt), sentence-display, text-bubbles (Futur: wird spielen)
// Quiz: { generate: "praeteritum" } oder { generate: "perfekt" }

// export const ZEITFORM4_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const ZEITFORM4_POOL: PoolTopicDef[] = [ ... ];

// ── i4 — Wortarteninsel ──────────────────────────────────────────────────────
// Thema: Nomen, Verb, Adjektiv, Pronomen, Präposition — alle Wortarten K4
// SVG: icon-grid (Wortarten), two-groups (Nomen/Verb/Adjektiv), drag-to-bucket
// Quiz: { generate: "nomen_k2" } oder { generate: "verben_k3" }

// export const WORTART_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const WORTART_POOL: PoolTopicDef[] = [ ... ];

// ── i5 — Satzgliederinsel ────────────────────────────────────────────────────
// Thema: Subjekt, Prädikat, Objekt (Akk/Dat), Adverbiale Bestimmung
// SVG: sentence-display (farbig markiert), two-groups (Satzglied / kein Satzglied)
// Quiz: kézi (nincs direkt generátor)

// export const SATZGLIED4_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const SATZGLIED4_POOL: PoolTopicDef[] = [ ... ];

// ── i6 — Satzarteninsel ──────────────────────────────────────────────────────
// Thema: Haupt- und Nebensatz, Konjunktionen (weil, dass, wenn, obwohl)
// SVG: sentence-display (Nebensatz hervorgehoben), compound-word (HS + NS)
// Quiz: kézi (Konjunktionen + Satzbau)

// export const SATZART4_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const SATZART4_POOL: PoolTopicDef[] = [ ... ];

// ── i7 — Verbeninsel (Trennbare Verben & Futur) ──────────────────────────────
// Thema: Trennbare Verben (aufmachen → macht auf), Futur I (wird spielen)
// SVG: compound-word (auf+machen), sentence-display (Er macht die Tür auf.)
// Quiz: { generate: "verben_k3" }

// export const VERB4_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const VERB4_POOL: PoolTopicDef[] = [ ... ];

// ── i8 — Rechtschreibungsinsel ───────────────────────────────────────────────
// Thema: das/dass, ä/äu vs. e/eu, Komma bei Aufzählungen, ß/ss, Silbentrennung
// SVG: word-display (das vs dass), letter-pairs, sentence-display (Komma markiert)
// Quiz: { generate: "satzzeichen_k1" } oder kézi (das/dass)

// export const RECHT4_LABELS: Record<string, Record<string, string>> = { de: { ... },
//   en: { ... },
//   hu: { ... },
//   ro: { ... } };
// export const RECHT4_POOL: PoolTopicDef[] = [ ... ];

// ── i9 — Große Prüfung K4 ───────────────────────────────────────────────────
// Thema: Wiederholung Kasus, Zeitformen, Wortarten, Rechtschreibung


// SVG: simple-icon (🌟), icon-grid (K4 Themen Mix)
// Quiz: mix — { generate: "nominativ" }, { generate: "perfekt" }, { generate: "plural" }

// export const EXAM4_LABELS: Record<string, Record<string, string>> = { de: { ... } };
// export const EXAM4_POOL: PoolTopicDef[] = [ ... ];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Kasusinsel (Nominativ & Akkusativ)
// Thema: Nominativ (Wer?) und Akkusativ (Wen?) erkennen und anwenden
// ─────────────────────────────────────────────────────────────────────────────

export const KASUS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Kasus-Zentrale (Nom & Akk)",

    // T1: Was ist ein Kasus? (Fall)
    t1_title: "Was ist ein Kasus?",
    t1_text: "Nomen können ihre Form verändern, je nachdem, welche Aufgabe sie im Satz haben. Das nennen wir 'Fälle' oder Kasus. Heute lernen wir den 1. Fall (Nominativ) und den 4. Fall (Akkusativ).",
    t1_b1: "Nomen verändern sich.",
    t1_b2: "Es gibt insgesamt 4 Fälle.",
    t1_inst: "Welches Wort beschreibt die Veränderung der Nomen?",
    t1_h1: "Es ist ein anderes Wort für 'Fall'.",
    t1_h2: "Das Wort heißt 'Kasus'.",
    t1_w1: "Verb", t1_w2: "Kasus", t1_w3: "Adjektiv", t1_w4: "Punkt",
    // Quiz: GENERATOR (nominativ)

    // T2: Der Nominativ (1. Fall)
    t2_title: "Der Nominativ (Wer oder was?)",
    t2_text: "Das Subjekt eines Satzes steht immer im Nominativ. Wir fragen: Wer oder was tut etwas? 'Der Hund bellt.' -> Wer bellt? Der Hund.",
    t2_b1: "Frage: Wer oder was?",
    t2_b2: "Das Subjekt steht im Nominativ.",
    t2_inst: "Finde das Nomen im Nominativ!",
    t2_h1: "Frage: Wer oder was fliegt?",
    t2_h2: "'Der Vogel' ist das Subjekt.",
    t2_w2_1: "Der Vogel", t2_w2_2: "sieht", t2_w2_3: "den Wurm", t2_w2_4: ".",
    // Quiz: GENERATOR (nominativ)

    // T3: Der Akkusativ (4. Fall)
    t3_title: "Der Akkusativ (Wen oder was?)",
    t3_text: "Das Objekt, mit dem etwas gemacht wird, steht oft im Akkusativ. Wir fragen: Wen oder was sieht der Hund? Den Ball!",
    t3_b1: "Frage: Wen oder was?",
    t3_b2: "Oft das Ziel einer Handlung.",
    t3_inst: "Finde das Nomen im Akkusativ!",
    t3_h1: "Frage: Wen oder was frisst die Katze?",
    t3_h2: "Sie frisst 'den Fisch'.",
    t3_w3_1: "Die Katze", t3_w3_2: "frisst", t3_w3_3: "den Fisch", t3_w3_4: ".",
    // Quiz: GENERATOR (akkusativ)

    // T4: Nur Maskulin ändert sich!
    t4_title: "Achtung: der ➔ den",
    t4_text: "Das Wichtigste beim Akkusativ: Nur männliche Nomen (der) ändern ihren Artikel zu 'den'. Weiblich (die) und sächlich (das) bleiben gleich!",
    t4_b1: "der Hund ➔ den Hund",
    t4_b2: "die Katze ➔ die Katze (bleibt!)",
    t4_inst: "Ziehe die Artikel in die richtige Box!",
    t4_h1: "Überlege: Welcher Artikel ändert sich im Akkusativ?",
    t4_h2: "Nur 'der' wird zu 'den'.",
    t4_bn: "Nominativ (der/die/das)", t4_ba: "Akkusativ (den/die/das)",
    t4_i1: "der", t4_i2: "den", t4_i3: "die", t4_i4: "das",
    // Quiz: MANUAL (der/den Regel)
    t4_q: "Welcher Artikel verändert sich im Akkusativ?",
    t4_qa: "nur der (maskulin)", t4_qb: "nur die (feminin)", t4_qc: "nur das (neutral)", t4_qd: "alle",

    // T5: Nominativ oder Akkusativ?
    t5_title: "Nom oder Akk?",
    t5_text: "Kannst du die Satzglieder unterscheiden? Der 'Täter' ist Nominativ, das 'Ziel' ist Akkusativ.",
    t5_b1: "Wer? ➔ Nominativ",
    t5_b2: "Wen? ➔ Akkusativ",
    t5_inst: "Sortiere die markierten Wörter!",
    t5_h1: "Frage nach dem Wort: Wer oder Wen?",
    t5_h2: "Der Jäger (Wer?) ➔ Nom. Den Hasen (Wen?) ➔ Akk.",
    t5_i5_1: "Der Jäger", t5_i5_2: "den Hasen", t5_i5_3: "Das Kind", t5_i5_4: "den Apfel",
    // Quiz: GENERATOR (akkusativ)

    // T6: Sätze bauen mit Kasus
    t6_title: "Kasus-Baumeister",
    t6_text: "Baue einen Satz mit Nominativ und Akkusativ. Achte darauf, dass der Artikel zum Fall passt!",
    t6_b1: "Subjekt (Nom) + Verb + Objekt (Akk).",
    t6_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "Wer (Der Junge) macht was (kauft) mit wem (den Kuchen)?",
    t6_h2: "Der Junge kauft den Kuchen.",
    t6_f1: "Der Junge", t6_f2: "kauft", t6_f3: "den Kuchen.",
    // Quiz: MANUAL
    t6_q: "Was ist 'den Kuchen' im Satz 'Der Junge kauft den Kuchen'?",
    t6_qa: "Akkusativ-Objekt", t6_qb: "Subjekt", t6_qc: "Prädikat", t6_qd: "Adjektiv",

    // T7: Magnet-Challenge (Physics!)
    t7_title: "Magnet-Jagd",
    t7_text: "Bist du bereit für die Physik-Challenge? Ziehe alle Wörter, die im Akkusativ stehen, in das Ziel!",
    t7_b1: "Suche nach 'den', 'die' oder 'das' als Objekt.",
    t7_inst: "Ziehe die Akkusativ-Wörter in die richtige Box!",
    t7_h1: "Frage 'Wen oder was?'.",
    t7_h2: "den Ball, den Brief, die Blume.",
    t7_target: "Akkusativ 🧲",
    t7_nom: "Nominativ",
    t7_m1: "den Ball", t7_m2: "den Brief", t7_m3: "der Hund", t7_m4: "das Haus (Akk)",
    // Quiz: GENERATOR (akkusativ)

    // T8: Dativ-Einführung
    t8_title: "Der Dativ (3. Fall)",
    t8_text: "Der Dativ ist der 3. Fall. Wir fragen: Wem? Er zeigt an, wer von einer Handlung betroffen ist. Die Artikel: dem (mask./neut.), der (fem.), den+n (Plural).",
    t8_b1: "Frage: Wem?",
    t8_b2: "dem Hund, der Katze, dem Kind",
    t8_inst: "Finde das Dativ-Objekt!",
    t8_h1: "Frage: Wem gibt er das Buch?",
    t8_h2: "'dem Kind' ist der Dativ.",
    t8_w1: "Er", t8_w2: "gibt", t8_w3: "dem Kind", t8_w4: "das Buch",
    t8_q: "Wie fragen wir nach dem Dativ-Objekt?",
    t8_qa: "Wem?", t8_qb: "Wen?", t8_qc: "Wer?", t8_qd: "Wessen?",

    // T9: Dativ-Artikel (match-pairs)
    t9_title: "Dativ-Artikel",
    t9_text: "Im Dativ verändern sich die Artikel: der Hund → dem Hund, die Katze → der Katze, das Kind → dem Kind, die Bücher → den Büchern. Merke: dem/der/dem/den!",
    t9_b1: "Maskulin/Neutrum: dem",
    t9_b2: "Feminin: der — Plural: den+n",
    t9_inst: "Verbinde Nominativ mit Dativ!",
    t9_h1: "Achte auf den Artikel: der→dem, die→der, das→dem",
    t9_h2: "der Hund → dem Hund",
    t9_l1: "der Hund", t9_r1: "dem Hund",
    t9_l2: "die Katze", t9_r2: "der Katze",
    t9_l3: "das Kind", t9_r3: "dem Kind",
    t9_l4: "die Bücher", t9_r4: "den Büchern",

    // T10: 3 Fälle unterscheiden (gap-fill)
    t10_title: "Drei Fälle zusammen",
    t10_text: "Jetzt kennst du drei Fälle: Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Übung macht den Meister!",
    t10_b1: "Nom → Wer?, Akk → Wen?, Dat → Wem?",
    t10_b2: "der/die/das → den/die/das → dem/der/dem",
    t10_inst: "Welcher Artikel passt?",
    t10_h1: "Frage: Wem schenkt sie das Buch?",
    t10_h2: "Wem? = Dativ → dem Bruder",
    t10_sent: "Sie schenkt ___ Bruder ein Buch.",
    t10_c1: "dem", t10_c2: "den", t10_c3: "der", t10_c4: "des",

    // T11: Präpositionen mit Dativ (gap-fill)
    t11_title: "Präpositionen mit Dativ",
    t11_text: "Bestimmte Präpositionen verlangen immer den Dativ: mit, nach, seit, von, bei, aus, zu, gegenüber. Merke: Diese Wörter = immer Dativ danach!",
    t11_b1: "mit, nach, seit, von, bei, aus, zu",
    t11_b2: "Diese Präpositionen = immer Dativ!",
    t11_inst: "Welche Dativ-Präposition passt?",
    t11_h1: "Denk: Welche Präposition passt inhaltlich?",
    t11_h2: "Er kommt MIT seinem Freund.",
    t11_c2_1: "nach", t11_c2_2: "für", t11_c2_3: "mit", t11_c2_4: "durch",

    // T12: Dativ im Satz (sentence-build)
    t12_title: "Dativ im Satz",
    t12_text: "Ein typischer Satz hat Nominativ (Subjekt), Verb, Dativ-Objekt (Wem?), Akkusativ-Objekt (Wen?). Zum Beispiel: Der Lehrer erklärt dem Schüler den Stoff.",
    t12_b1: "Subjekt + Verb + Dativ + Akkusativ",
    t12_b2: "Wem? kommt vor Wen?",
    t12_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t12_h1: "Wer? (Nom) zuerst, dann Verb, dann Wem? (Dat), dann Wen? (Akk)",
    t12_h2: "Die Mutter liest dem Kind das Buch.",
    t12_f1: "Die Mutter", t12_f2: "liest", t12_f3: "das Buch.", t12_f4: "dem Kind",

    // T13: Genitiv-Einführung (gap-fill)
    t13_title: "Der Genitiv (2. Fall)",
    t13_text: "Der Genitiv ist der 2. Fall. Wir fragen: Wessen? Er zeigt Besitz an. Die Artikel: des (mask./neut.+n/s), der (fem./Plural). Zum Beispiel: das Buch des Mannes.",
    t13_b1: "Frage: Wessen?",
    t13_b2: "des Mannes, der Frau, des Kindes",
    t13_inst: "Welcher Genitiv-Artikel passt?",
    t13_h1: "Wessen Buch ist das? Das Buch des Mannes.",
    t13_h2: "Maskulin: des ... Feminin: der",
    t13_sent3: "Das ist das Auto ___ Mannes.",
    t13_c3_1: "des", t13_c3_2: "dem", t13_c3_3: "den", t13_c3_4: "der",

    // T14: Alle 4 Fälle zusammen (gap-fill)
    t14_title: "Alle 4 Fälle",
    t14_text: "Jetzt kennst du alle vier Fälle! Nominativ (Wer?), Akkusativ (Wen?), Dativ (Wem?), Genitiv (Wessen?). Jeder Fall hat seine eigene Frage und Artikel.",
    t14_b1: "4 Fälle: Nom, Akk, Dat, Gen",
    t14_b2: "Fragen: Wer? Wen? Wem? Wessen?",
    t14_inst: "Welcher Artikel ist richtig?",
    t14_h1: "Frage: Wem bringt er das Geschenk?",
    t14_h2: "Wem? = Dativ → dem",
    t14_sent4: "Er bringt ___ Freund ein Geschenk.",
    t14_c4_1: "dem", t14_c4_2: "der", t14_c4_3: "den", t14_c4_4: "des",

    // T15: Kasus-Profi (gap-fill)
    t15_title: "Kasus-Profi!",
    t15_text: "Du beherrschst alle vier Fälle! Ob Nominativ, Akkusativ, Dativ oder Genitiv — du weißt, welcher Artikel wo stehen muss.",
    t15_b1: "Alle 4 Fälle sicher beherrscht",
    t15_b2: "Artikel + Fälle = kein Problem!",
    t15_inst: "Wähle den richtigen Genitiv-Artikel!",
    t15_h1: "Wessen Hut ist das? = Genitiv",
    t15_h2: "das Buch des Lehrers",
    t15_sent5: "Das ist das Buch ___ Lehrers.",
    t15_c5_1: "des", t15_c5_2: "dem", t15_c5_3: "den", t15_c5_4: "der",
  },
  en: {

    explorer_title: "[EN] Kasus-Zentrale (Nom & Akk)",

    // T1: Was ist ein Kasus? (Fall)
    t1_title: "[EN] Was ist ein Kasus?",
    t1_text: "[EN] Nomen können ihre Form verändern, je nachdem, welche Aufgabe sie im Satz haben. Das nennen wir 'Fälle' oder Kasus. Heute lernen wir den 1. Fall (Nominativ) und den 4. Fall (Akkusativ).",
    t1_b1: "[EN] Nomen verändern sich.",
    t1_b2: "[EN] Es gibt insgesamt 4 Fälle.",
    t1_inst: "[EN] Welches Wort beschreibt die Veränderung der Nomen?",
    t1_h1: "[EN] Es ist ein anderes Wort für 'Fall'.",
    t1_h2: "[EN] Das Wort heißt 'Kasus'.",
    t1_w1: "[EN] Verb", t1_w2: "[EN] Kasus", t1_w3: "[EN] Adjektiv", t1_w4: "[EN] Punkt",
    // Quiz: GENERATOR (nominativ)

    // T2: Der Nominativ (1. Fall)
    t2_title: "[EN] Der Nominativ (Wer oder was?)",
    t2_text: "[EN] Das Subjekt eines Satzes steht immer im Nominativ. Wir fragen: Wer oder was tut etwas? 'Der Hund bellt.' -> Wer bellt? Der Hund.",
    t2_b1: "[EN] Frage: Wer oder was?",
    t2_b2: "[EN] Das Subjekt steht im Nominativ.",
    t2_inst: "[EN] Finde das Nomen im Nominativ!",
    t2_h1: "[EN] Frage: Wer oder was fliegt?",
    t2_h2: "[EN] 'Der Vogel' ist das Subjekt.",
    t2_w2_1: "[EN] Der Vogel", t2_w2_2: "[EN] sieht", t2_w2_3: "[EN] den Wurm", t2_w2_4: "[EN] .",
    // Quiz: GENERATOR (nominativ)

    // T3: Der Akkusativ (4. Fall)
    t3_title: "[EN] Der Akkusativ (Wen oder was?)",
    t3_text: "[EN] Das Objekt, mit dem etwas gemacht wird, steht oft im Akkusativ. Wir fragen: Wen oder was sieht der Hund? Den Ball!",
    t3_b1: "[EN] Frage: Wen oder was?",
    t3_b2: "[EN] Oft das Ziel einer Handlung.",
    t3_inst: "[EN] Finde das Nomen im Akkusativ!",
    t3_h1: "[EN] Frage: Wen oder was frisst die Katze?",
    t3_h2: "[EN] Sie frisst 'den Fisch'.",
    t3_w3_1: "[EN] Die Katze", t3_w3_2: "[EN] frisst", t3_w3_3: "[EN] den Fisch", t3_w3_4: "[EN] .",
    // Quiz: GENERATOR (akkusativ)

    // T4: Nur Maskulin ändert sich!
    t4_title: "[EN] Achtung: der ➔ den",
    t4_text: "[EN] Das Wichtigste beim Akkusativ: Nur männliche Nomen (der) ändern ihren Artikel zu 'den'. Weiblich (die) und sächlich (das) bleiben gleich!",
    t4_b1: "[EN] der Hund ➔ den Hund",
    t4_b2: "[EN] die Katze ➔ die Katze (bleibt!)",
    t4_inst: "[EN] Ziehe die Artikel in die richtige Box!",
    t4_h1: "[EN] Überlege: Welcher Artikel ändert sich im Akkusativ?",
    t4_h2: "[EN] Nur 'der' wird zu 'den'.",
    t4_bn: "[EN] Nominativ (der/die/das)", t4_ba: "[EN] Akkusativ (den/die/das)",
    t4_i1: "[EN] der", t4_i2: "[EN] den", t4_i3: "[EN] die", t4_i4: "[EN] das",
    // Quiz: MANUAL (der/den Regel)
    t4_q: "[EN] Welcher Artikel verändert sich im Akkusativ?",
    t4_qa: "[EN] nur der (maskulin)", t4_qb: "[EN] nur die (feminin)", t4_qc: "[EN] nur das (neutral)", t4_qd: "[EN] alle",

    // T5: Nominativ oder Akkusativ?
    t5_title: "[EN] Nom oder Akk?",
    t5_text: "[EN] Kannst du die Satzglieder unterscheiden? Der 'Täter' ist Nominativ, das 'Ziel' ist Akkusativ.",
    t5_b1: "[EN] Wer? ➔ Nominativ",
    t5_b2: "[EN] Wen? ➔ Akkusativ",
    t5_inst: "[EN] Sortiere die markierten Wörter!",
    t5_h1: "[EN] Frage nach dem Wort: Wer oder Wen?",
    t5_h2: "[EN] Der Jäger (Wer?) ➔ Nom. Den Hasen (Wen?) ➔ Akk.",
    t5_i5_1: "[EN] Der Jäger", t5_i5_2: "[EN] den Hasen", t5_i5_3: "[EN] Das Kind", t5_i5_4: "[EN] den Apfel",
    // Quiz: GENERATOR (akkusativ)

    // T6: Sätze bauen mit Kasus
    t6_title: "[EN] Kasus-Baumeister",
    t6_text: "[EN] Baue einen Satz mit Nominativ und Akkusativ. Achte darauf, dass der Artikel zum Fall passt!",
    t6_b1: "[EN] Subjekt (Nom) + Verb + Objekt (Akk).",
    t6_inst: "[EN] Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "[EN] Wer (Der Junge) macht was (kauft) mit wem (den Kuchen)?",
    t6_h2: "[EN] Der Junge kauft den Kuchen.",
    t6_f1: "[EN] Der Junge", t6_f2: "[EN] kauft", t6_f3: "[EN] den Kuchen.",
    // Quiz: MANUAL
    t6_q: "[EN] Was ist 'den Kuchen' im Satz 'Der Junge kauft den Kuchen'?",
    t6_qa: "[EN] Akkusativ-Objekt", t6_qb: "[EN] Subjekt", t6_qc: "[EN] Prädikat", t6_qd: "[EN] Adjektiv",

    // T7: Magnet-Challenge (Physics!)
    t7_title: "[EN] Magnet-Jagd",
    t7_text: "[EN] Bist du bereit für die Physik-Challenge? Ziehe alle Wörter, die im Akkusativ stehen, in das Ziel!",
    t7_b1: "[EN] Suche nach 'den', 'die' oder 'das' als Objekt.",
    t7_inst: "[EN] Ziehe die Akkusativ-Wörter in die richtige Box!",
    t7_h1: "[EN] Frage 'Wen oder was?'.",
    t7_h2: "[EN] den Ball, den Brief, die Blume.",
    t7_target: "[EN] Akkusativ 🧲",
    t7_nom: "[EN] Nominativ",
    t7_m1: "[EN] den Ball", t7_m2: "[EN] den Brief", t7_m3: "[EN] der Hund", t7_m4: "[EN] das Haus (Akk)",
    // Quiz: GENERATOR (akkusativ)

    // T8: Dativ-Einführung
    t8_title: "[EN] Der Dativ (3. Fall)",
    t8_text: "[EN] Der Dativ ist der 3. Fall. Wir fragen: Wem? Er zeigt an, wer von einer Handlung betroffen ist. Die Artikel: dem (mask./neut.), der (fem.), den+n (Plural).",
    t8_b1: "[EN] Frage: Wem?",
    t8_b2: "[EN] dem Hund, der Katze, dem Kind",
    t8_inst: "[EN] Finde das Dativ-Objekt!",
    t8_h1: "[EN] Frage: Wem gibt er das Buch?",
    t8_h2: "[EN] 'dem Kind' ist der Dativ.",
    t8_w1: "[EN] Er", t8_w2: "[EN] gibt", t8_w3: "[EN] dem Kind", t8_w4: "[EN] das Buch",
    t8_q: "[EN] Wie fragen wir nach dem Dativ-Objekt?",
    t8_qa: "[EN] Wem?", t8_qb: "[EN] Wen?", t8_qc: "[EN] Wer?", t8_qd: "[EN] Wessen?",

    // T9: Dativ-Artikel (match-pairs)
    t9_title: "[EN] Dativ-Artikel",
    t9_text: "[EN] Im Dativ verändern sich die Artikel: der Hund → dem Hund, die Katze → der Katze, das Kind → dem Kind, die Bücher → den Büchern. Merke: dem/der/dem/den!",
    t9_b1: "[EN] Maskulin/Neutrum: dem",
    t9_b2: "[EN] Feminin: der — Plural: den+n",
    t9_inst: "[EN] Verbinde Nominativ mit Dativ!",
    t9_h1: "[EN] Achte auf den Artikel: der→dem, die→der, das→dem",
    t9_h2: "[EN] der Hund → dem Hund",
    t9_l1: "[EN] der Hund", t9_r1: "[EN] dem Hund",
    t9_l2: "[EN] die Katze", t9_r2: "[EN] der Katze",
    t9_l3: "[EN] das Kind", t9_r3: "[EN] dem Kind",
    t9_l4: "[EN] die Bücher", t9_r4: "[EN] den Büchern",

    // T10: 3 Fälle unterscheiden (gap-fill)
    t10_title: "[EN] Drei Fälle zusammen",
    t10_text: "[EN] Jetzt kennst du drei Fälle: Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Übung macht den Meister!",
    t10_b1: "[EN] Nom → Wer?, Akk → Wen?, Dat → Wem?",
    t10_b2: "[EN] der/die/das → den/die/das → dem/der/dem",
    t10_inst: "[EN] Welcher Artikel passt?",
    t10_h1: "[EN] Frage: Wem schenkt sie das Buch?",
    t10_h2: "[EN] Wem? = Dativ → dem Bruder",
    t10_sent: "[EN] Sie schenkt ___ Bruder ein Buch.",
    t10_c1: "[EN] dem", t10_c2: "[EN] den", t10_c3: "[EN] der", t10_c4: "[EN] des",

    // T11: Präpositionen mit Dativ (gap-fill)
    t11_title: "[EN] Präpositionen mit Dativ",
    t11_text: "[EN] Bestimmte Präpositionen verlangen immer den Dativ: mit, nach, seit, von, bei, aus, zu, gegenüber. Merke: Diese Wörter = immer Dativ danach!",
    t11_b1: "[EN] mit, nach, seit, von, bei, aus, zu",
    t11_b2: "[EN] Diese Präpositionen = immer Dativ!",
    t11_inst: "[EN] Welche Dativ-Präposition passt?",
    t11_h1: "[EN] Denk: Welche Präposition passt inhaltlich?",
    t11_h2: "[EN] Er kommt MIT seinem Freund.",
    t11_c2_1: "[EN] nach", t11_c2_2: "[EN] für", t11_c2_3: "[EN] mit", t11_c2_4: "[EN] durch",

    // T12: Dativ im Satz (sentence-build)
    t12_title: "[EN] Dativ im Satz",
    t12_text: "[EN] Ein typischer Satz hat Nominativ (Subjekt), Verb, Dativ-Objekt (Wem?), Akkusativ-Objekt (Wen?). Zum Beispiel: Der Lehrer erklärt dem Schüler den Stoff.",
    t12_b1: "[EN] Subjekt + Verb + Dativ + Akkusativ",
    t12_b2: "[EN] Wem? kommt vor Wen?",
    t12_inst: "[EN] Bringe den Satz in die richtige Reihenfolge!",
    t12_h1: "[EN] Wer? (Nom) zuerst, dann Verb, dann Wem? (Dat), dann Wen? (Akk)",
    t12_h2: "[EN] Die Mutter liest dem Kind das Buch.",
    t12_f1: "[EN] Die Mutter", t12_f2: "[EN] liest", t12_f3: "[EN] das Buch.", t12_f4: "[EN] dem Kind",

    // T13: Genitiv-Einführung (gap-fill)
    t13_title: "[EN] Der Genitiv (2. Fall)",
    t13_text: "[EN] Der Genitiv ist der 2. Fall. Wir fragen: Wessen? Er zeigt Besitz an. Die Artikel: des (mask./neut.+n/s), der (fem./Plural). Zum Beispiel: das Buch des Mannes.",
    t13_b1: "[EN] Frage: Wessen?",
    t13_b2: "[EN] des Mannes, der Frau, des Kindes",
    t13_inst: "[EN] Welcher Genitiv-Artikel passt?",
    t13_h1: "[EN] Wessen Buch ist das? Das Buch des Mannes.",
    t13_h2: "[EN] Maskulin: des ... Feminin: der",
    t13_sent3: "[EN] Das ist das Auto ___ Mannes.",
    t13_c3_1: "[EN] des", t13_c3_2: "[EN] dem", t13_c3_3: "[EN] den", t13_c3_4: "[EN] der",

    // T14: Alle 4 Fälle zusammen (gap-fill)
    t14_title: "[EN] Alle 4 Fälle",
    t14_text: "[EN] Jetzt kennst du alle vier Fälle! Nominativ (Wer?), Akkusativ (Wen?), Dativ (Wem?), Genitiv (Wessen?). Jeder Fall hat seine eigene Frage und Artikel.",
    t14_b1: "[EN] 4 Fälle: Nom, Akk, Dat, Gen",
    t14_b2: "[EN] Fragen: Wer? Wen? Wem? Wessen?",
    t14_inst: "[EN] Welcher Artikel ist richtig?",
    t14_h1: "[EN] Frage: Wem bringt er das Geschenk?",
    t14_h2: "[EN] Wem? = Dativ → dem",
    t14_sent4: "[EN] Er bringt ___ Freund ein Geschenk.",
    t14_c4_1: "[EN] dem", t14_c4_2: "[EN] der", t14_c4_3: "[EN] den", t14_c4_4: "[EN] des",

    // T15: Kasus-Profi (gap-fill)
    t15_title: "[EN] Kasus-Profi!",
    t15_text: "[EN] Du beherrschst alle vier Fälle! Ob Nominativ, Akkusativ, Dativ oder Genitiv — du weißt, welcher Artikel wo stehen muss.",
    t15_b1: "[EN] Alle 4 Fälle sicher beherrscht",
    t15_b2: "[EN] Artikel + Fälle = kein Problem!",
    t15_inst: "[EN] Wähle den richtigen Genitiv-Artikel!",
    t15_h1: "[EN] Wessen Hut ist das? = Genitiv",
    t15_h2: "[EN] das Buch des Lehrers",
    t15_sent5: "[EN] Das ist das Buch ___ Lehrers.",
    t15_c5_1: "[EN] des", t15_c5_2: "[EN] dem", t15_c5_3: "[EN] den", t15_c5_4: "[EN] der",
  
  },
  hu: {

    explorer_title: "[HU] Kasus-Zentrale (Nom & Akk)",

    // T1: Was ist ein Kasus? (Fall)
    t1_title: "[HU] Was ist ein Kasus?",
    t1_text: "[HU] Nomen können ihre Form verändern, je nachdem, welche Aufgabe sie im Satz haben. Das nennen wir 'Fälle' oder Kasus. Heute lernen wir den 1. Fall (Nominativ) und den 4. Fall (Akkusativ).",
    t1_b1: "[HU] Nomen verändern sich.",
    t1_b2: "[HU] Es gibt insgesamt 4 Fälle.",
    t1_inst: "[HU] Welches Wort beschreibt die Veränderung der Nomen?",
    t1_h1: "[HU] Es ist ein anderes Wort für 'Fall'.",
    t1_h2: "[HU] Das Wort heißt 'Kasus'.",
    t1_w1: "[HU] Verb", t1_w2: "[HU] Kasus", t1_w3: "[HU] Adjektiv", t1_w4: "[HU] Punkt",
    // Quiz: GENERATOR (nominativ)

    // T2: Der Nominativ (1. Fall)
    t2_title: "[HU] Der Nominativ (Wer oder was?)",
    t2_text: "[HU] Das Subjekt eines Satzes steht immer im Nominativ. Wir fragen: Wer oder was tut etwas? 'Der Hund bellt.' -> Wer bellt? Der Hund.",
    t2_b1: "[HU] Frage: Wer oder was?",
    t2_b2: "[HU] Das Subjekt steht im Nominativ.",
    t2_inst: "[HU] Finde das Nomen im Nominativ!",
    t2_h1: "[HU] Frage: Wer oder was fliegt?",
    t2_h2: "[HU] 'Der Vogel' ist das Subjekt.",
    t2_w2_1: "[HU] Der Vogel", t2_w2_2: "[HU] sieht", t2_w2_3: "[HU] den Wurm", t2_w2_4: "[HU] .",
    // Quiz: GENERATOR (nominativ)

    // T3: Der Akkusativ (4. Fall)
    t3_title: "[HU] Der Akkusativ (Wen oder was?)",
    t3_text: "[HU] Das Objekt, mit dem etwas gemacht wird, steht oft im Akkusativ. Wir fragen: Wen oder was sieht der Hund? Den Ball!",
    t3_b1: "[HU] Frage: Wen oder was?",
    t3_b2: "[HU] Oft das Ziel einer Handlung.",
    t3_inst: "[HU] Finde das Nomen im Akkusativ!",
    t3_h1: "[HU] Frage: Wen oder was frisst die Katze?",
    t3_h2: "[HU] Sie frisst 'den Fisch'.",
    t3_w3_1: "[HU] Die Katze", t3_w3_2: "[HU] frisst", t3_w3_3: "[HU] den Fisch", t3_w3_4: "[HU] .",
    // Quiz: GENERATOR (akkusativ)

    // T4: Nur Maskulin ändert sich!
    t4_title: "[HU] Achtung: der ➔ den",
    t4_text: "[HU] Das Wichtigste beim Akkusativ: Nur männliche Nomen (der) ändern ihren Artikel zu 'den'. Weiblich (die) und sächlich (das) bleiben gleich!",
    t4_b1: "[HU] der Hund ➔ den Hund",
    t4_b2: "[HU] die Katze ➔ die Katze (bleibt!)",
    t4_inst: "[HU] Ziehe die Artikel in die richtige Box!",
    t4_h1: "[HU] Überlege: Welcher Artikel ändert sich im Akkusativ?",
    t4_h2: "[HU] Nur 'der' wird zu 'den'.",
    t4_bn: "[HU] Nominativ (der/die/das)", t4_ba: "[HU] Akkusativ (den/die/das)",
    t4_i1: "[HU] der", t4_i2: "[HU] den", t4_i3: "[HU] die", t4_i4: "[HU] das",
    // Quiz: MANUAL (der/den Regel)
    t4_q: "[HU] Welcher Artikel verändert sich im Akkusativ?",
    t4_qa: "[HU] nur der (maskulin)", t4_qb: "[HU] nur die (feminin)", t4_qc: "[HU] nur das (neutral)", t4_qd: "[HU] alle",

    // T5: Nominativ oder Akkusativ?
    t5_title: "[HU] Nom oder Akk?",
    t5_text: "[HU] Kannst du die Satzglieder unterscheiden? Der 'Täter' ist Nominativ, das 'Ziel' ist Akkusativ.",
    t5_b1: "[HU] Wer? ➔ Nominativ",
    t5_b2: "[HU] Wen? ➔ Akkusativ",
    t5_inst: "[HU] Sortiere die markierten Wörter!",
    t5_h1: "[HU] Frage nach dem Wort: Wer oder Wen?",
    t5_h2: "[HU] Der Jäger (Wer?) ➔ Nom. Den Hasen (Wen?) ➔ Akk.",
    t5_i5_1: "[HU] Der Jäger", t5_i5_2: "[HU] den Hasen", t5_i5_3: "[HU] Das Kind", t5_i5_4: "[HU] den Apfel",
    // Quiz: GENERATOR (akkusativ)

    // T6: Sätze bauen mit Kasus
    t6_title: "[HU] Kasus-Baumeister",
    t6_text: "[HU] Baue einen Satz mit Nominativ und Akkusativ. Achte darauf, dass der Artikel zum Fall passt!",
    t6_b1: "[HU] Subjekt (Nom) + Verb + Objekt (Akk).",
    t6_inst: "[HU] Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "[HU] Wer (Der Junge) macht was (kauft) mit wem (den Kuchen)?",
    t6_h2: "[HU] Der Junge kauft den Kuchen.",
    t6_f1: "[HU] Der Junge", t6_f2: "[HU] kauft", t6_f3: "[HU] den Kuchen.",
    // Quiz: MANUAL
    t6_q: "[HU] Was ist 'den Kuchen' im Satz 'Der Junge kauft den Kuchen'?",
    t6_qa: "[HU] Akkusativ-Objekt", t6_qb: "[HU] Subjekt", t6_qc: "[HU] Prädikat", t6_qd: "[HU] Adjektiv",

    // T7: Magnet-Challenge (Physics!)
    t7_title: "[HU] Magnet-Jagd",
    t7_text: "[HU] Bist du bereit für die Physik-Challenge? Ziehe alle Wörter, die im Akkusativ stehen, in das Ziel!",
    t7_b1: "[HU] Suche nach 'den', 'die' oder 'das' als Objekt.",
    t7_inst: "[HU] Ziehe die Akkusativ-Wörter in die richtige Box!",
    t7_h1: "[HU] Frage 'Wen oder was?'.",
    t7_h2: "[HU] den Ball, den Brief, die Blume.",
    t7_target: "[HU] Akkusativ 🧲",
    t7_nom: "[HU] Nominativ",
    t7_m1: "[HU] den Ball", t7_m2: "[HU] den Brief", t7_m3: "[HU] der Hund", t7_m4: "[HU] das Haus (Akk)",
    // Quiz: GENERATOR (akkusativ)

    // T8: Dativ-Einführung
    t8_title: "[HU] Der Dativ (3. Fall)",
    t8_text: "[HU] Der Dativ ist der 3. Fall. Wir fragen: Wem? Er zeigt an, wer von einer Handlung betroffen ist. Die Artikel: dem (mask./neut.), der (fem.), den+n (Plural).",
    t8_b1: "[HU] Frage: Wem?",
    t8_b2: "[HU] dem Hund, der Katze, dem Kind",
    t8_inst: "[HU] Finde das Dativ-Objekt!",
    t8_h1: "[HU] Frage: Wem gibt er das Buch?",
    t8_h2: "[HU] 'dem Kind' ist der Dativ.",
    t8_w1: "[HU] Er", t8_w2: "[HU] gibt", t8_w3: "[HU] dem Kind", t8_w4: "[HU] das Buch",
    t8_q: "[HU] Wie fragen wir nach dem Dativ-Objekt?",
    t8_qa: "[HU] Wem?", t8_qb: "[HU] Wen?", t8_qc: "[HU] Wer?", t8_qd: "[HU] Wessen?",

    // T9: Dativ-Artikel (match-pairs)
    t9_title: "[HU] Dativ-Artikel",
    t9_text: "[HU] Im Dativ verändern sich die Artikel: der Hund → dem Hund, die Katze → der Katze, das Kind → dem Kind, die Bücher → den Büchern. Merke: dem/der/dem/den!",
    t9_b1: "[HU] Maskulin/Neutrum: dem",
    t9_b2: "[HU] Feminin: der — Plural: den+n",
    t9_inst: "[HU] Verbinde Nominativ mit Dativ!",
    t9_h1: "[HU] Achte auf den Artikel: der→dem, die→der, das→dem",
    t9_h2: "[HU] der Hund → dem Hund",
    t9_l1: "[HU] der Hund", t9_r1: "[HU] dem Hund",
    t9_l2: "[HU] die Katze", t9_r2: "[HU] der Katze",
    t9_l3: "[HU] das Kind", t9_r3: "[HU] dem Kind",
    t9_l4: "[HU] die Bücher", t9_r4: "[HU] den Büchern",

    // T10: 3 Fälle unterscheiden (gap-fill)
    t10_title: "[HU] Drei Fälle zusammen",
    t10_text: "[HU] Jetzt kennst du drei Fälle: Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Übung macht den Meister!",
    t10_b1: "[HU] Nom → Wer?, Akk → Wen?, Dat → Wem?",
    t10_b2: "[HU] der/die/das → den/die/das → dem/der/dem",
    t10_inst: "[HU] Welcher Artikel passt?",
    t10_h1: "[HU] Frage: Wem schenkt sie das Buch?",
    t10_h2: "[HU] Wem? = Dativ → dem Bruder",
    t10_sent: "[HU] Sie schenkt ___ Bruder ein Buch.",
    t10_c1: "[HU] dem", t10_c2: "[HU] den", t10_c3: "[HU] der", t10_c4: "[HU] des",

    // T11: Präpositionen mit Dativ (gap-fill)
    t11_title: "[HU] Präpositionen mit Dativ",
    t11_text: "[HU] Bestimmte Präpositionen verlangen immer den Dativ: mit, nach, seit, von, bei, aus, zu, gegenüber. Merke: Diese Wörter = immer Dativ danach!",
    t11_b1: "[HU] mit, nach, seit, von, bei, aus, zu",
    t11_b2: "[HU] Diese Präpositionen = immer Dativ!",
    t11_inst: "[HU] Welche Dativ-Präposition passt?",
    t11_h1: "[HU] Denk: Welche Präposition passt inhaltlich?",
    t11_h2: "[HU] Er kommt MIT seinem Freund.",
    t11_c2_1: "[HU] nach", t11_c2_2: "[HU] für", t11_c2_3: "[HU] mit", t11_c2_4: "[HU] durch",

    // T12: Dativ im Satz (sentence-build)
    t12_title: "[HU] Dativ im Satz",
    t12_text: "[HU] Ein typischer Satz hat Nominativ (Subjekt), Verb, Dativ-Objekt (Wem?), Akkusativ-Objekt (Wen?). Zum Beispiel: Der Lehrer erklärt dem Schüler den Stoff.",
    t12_b1: "[HU] Subjekt + Verb + Dativ + Akkusativ",
    t12_b2: "[HU] Wem? kommt vor Wen?",
    t12_inst: "[HU] Bringe den Satz in die richtige Reihenfolge!",
    t12_h1: "[HU] Wer? (Nom) zuerst, dann Verb, dann Wem? (Dat), dann Wen? (Akk)",
    t12_h2: "[HU] Die Mutter liest dem Kind das Buch.",
    t12_f1: "[HU] Die Mutter", t12_f2: "[HU] liest", t12_f3: "[HU] das Buch.", t12_f4: "[HU] dem Kind",

    // T13: Genitiv-Einführung (gap-fill)
    t13_title: "[HU] Der Genitiv (2. Fall)",
    t13_text: "[HU] Der Genitiv ist der 2. Fall. Wir fragen: Wessen? Er zeigt Besitz an. Die Artikel: des (mask./neut.+n/s), der (fem./Plural). Zum Beispiel: das Buch des Mannes.",
    t13_b1: "[HU] Frage: Wessen?",
    t13_b2: "[HU] des Mannes, der Frau, des Kindes",
    t13_inst: "[HU] Welcher Genitiv-Artikel passt?",
    t13_h1: "[HU] Wessen Buch ist das? Das Buch des Mannes.",
    t13_h2: "[HU] Maskulin: des ... Feminin: der",
    t13_sent3: "[HU] Das ist das Auto ___ Mannes.",
    t13_c3_1: "[HU] des", t13_c3_2: "[HU] dem", t13_c3_3: "[HU] den", t13_c3_4: "[HU] der",

    // T14: Alle 4 Fälle zusammen (gap-fill)
    t14_title: "[HU] Alle 4 Fälle",
    t14_text: "[HU] Jetzt kennst du alle vier Fälle! Nominativ (Wer?), Akkusativ (Wen?), Dativ (Wem?), Genitiv (Wessen?). Jeder Fall hat seine eigene Frage und Artikel.",
    t14_b1: "[HU] 4 Fälle: Nom, Akk, Dat, Gen",
    t14_b2: "[HU] Fragen: Wer? Wen? Wem? Wessen?",
    t14_inst: "[HU] Welcher Artikel ist richtig?",
    t14_h1: "[HU] Frage: Wem bringt er das Geschenk?",
    t14_h2: "[HU] Wem? = Dativ → dem",
    t14_sent4: "[HU] Er bringt ___ Freund ein Geschenk.",
    t14_c4_1: "[HU] dem", t14_c4_2: "[HU] der", t14_c4_3: "[HU] den", t14_c4_4: "[HU] des",

    // T15: Kasus-Profi (gap-fill)
    t15_title: "[HU] Kasus-Profi!",
    t15_text: "[HU] Du beherrschst alle vier Fälle! Ob Nominativ, Akkusativ, Dativ oder Genitiv — du weißt, welcher Artikel wo stehen muss.",
    t15_b1: "[HU] Alle 4 Fälle sicher beherrscht",
    t15_b2: "[HU] Artikel + Fälle = kein Problem!",
    t15_inst: "[HU] Wähle den richtigen Genitiv-Artikel!",
    t15_h1: "[HU] Wessen Hut ist das? = Genitiv",
    t15_h2: "[HU] das Buch des Lehrers",
    t15_sent5: "[HU] Das ist das Buch ___ Lehrers.",
    t15_c5_1: "[HU] des", t15_c5_2: "[HU] dem", t15_c5_3: "[HU] den", t15_c5_4: "[HU] der",
  
  },
  ro: {

    explorer_title: "[RO] Kasus-Zentrale (Nom & Akk)",

    // T1: Was ist ein Kasus? (Fall)
    t1_title: "[RO] Was ist ein Kasus?",
    t1_text: "[RO] Nomen können ihre Form verändern, je nachdem, welche Aufgabe sie im Satz haben. Das nennen wir 'Fälle' oder Kasus. Heute lernen wir den 1. Fall (Nominativ) und den 4. Fall (Akkusativ).",
    t1_b1: "[RO] Nomen verändern sich.",
    t1_b2: "[RO] Es gibt insgesamt 4 Fälle.",
    t1_inst: "[RO] Welches Wort beschreibt die Veränderung der Nomen?",
    t1_h1: "[RO] Es ist ein anderes Wort für 'Fall'.",
    t1_h2: "[RO] Das Wort heißt 'Kasus'.",
    t1_w1: "[RO] Verb", t1_w2: "[RO] Kasus", t1_w3: "[RO] Adjektiv", t1_w4: "[RO] Punkt",
    // Quiz: GENERATOR (nominativ)

    // T2: Der Nominativ (1. Fall)
    t2_title: "[RO] Der Nominativ (Wer oder was?)",
    t2_text: "[RO] Das Subjekt eines Satzes steht immer im Nominativ. Wir fragen: Wer oder was tut etwas? 'Der Hund bellt.' -> Wer bellt? Der Hund.",
    t2_b1: "[RO] Frage: Wer oder was?",
    t2_b2: "[RO] Das Subjekt steht im Nominativ.",
    t2_inst: "[RO] Finde das Nomen im Nominativ!",
    t2_h1: "[RO] Frage: Wer oder was fliegt?",
    t2_h2: "[RO] 'Der Vogel' ist das Subjekt.",
    t2_w2_1: "[RO] Der Vogel", t2_w2_2: "[RO] sieht", t2_w2_3: "[RO] den Wurm", t2_w2_4: "[RO] .",
    // Quiz: GENERATOR (nominativ)

    // T3: Der Akkusativ (4. Fall)
    t3_title: "[RO] Der Akkusativ (Wen oder was?)",
    t3_text: "[RO] Das Objekt, mit dem etwas gemacht wird, steht oft im Akkusativ. Wir fragen: Wen oder was sieht der Hund? Den Ball!",
    t3_b1: "[RO] Frage: Wen oder was?",
    t3_b2: "[RO] Oft das Ziel einer Handlung.",
    t3_inst: "[RO] Finde das Nomen im Akkusativ!",
    t3_h1: "[RO] Frage: Wen oder was frisst die Katze?",
    t3_h2: "[RO] Sie frisst 'den Fisch'.",
    t3_w3_1: "[RO] Die Katze", t3_w3_2: "[RO] frisst", t3_w3_3: "[RO] den Fisch", t3_w3_4: "[RO] .",
    // Quiz: GENERATOR (akkusativ)

    // T4: Nur Maskulin ändert sich!
    t4_title: "[RO] Achtung: der ➔ den",
    t4_text: "[RO] Das Wichtigste beim Akkusativ: Nur männliche Nomen (der) ändern ihren Artikel zu 'den'. Weiblich (die) und sächlich (das) bleiben gleich!",
    t4_b1: "[RO] der Hund ➔ den Hund",
    t4_b2: "[RO] die Katze ➔ die Katze (bleibt!)",
    t4_inst: "[RO] Ziehe die Artikel in die richtige Box!",
    t4_h1: "[RO] Überlege: Welcher Artikel ändert sich im Akkusativ?",
    t4_h2: "[RO] Nur 'der' wird zu 'den'.",
    t4_bn: "[RO] Nominativ (der/die/das)", t4_ba: "[RO] Akkusativ (den/die/das)",
    t4_i1: "[RO] der", t4_i2: "[RO] den", t4_i3: "[RO] die", t4_i4: "[RO] das",
    // Quiz: MANUAL (der/den Regel)
    t4_q: "[RO] Welcher Artikel verändert sich im Akkusativ?",
    t4_qa: "[RO] nur der (maskulin)", t4_qb: "[RO] nur die (feminin)", t4_qc: "[RO] nur das (neutral)", t4_qd: "[RO] alle",

    // T5: Nominativ oder Akkusativ?
    t5_title: "[RO] Nom oder Akk?",
    t5_text: "[RO] Kannst du die Satzglieder unterscheiden? Der 'Täter' ist Nominativ, das 'Ziel' ist Akkusativ.",
    t5_b1: "[RO] Wer? ➔ Nominativ",
    t5_b2: "[RO] Wen? ➔ Akkusativ",
    t5_inst: "[RO] Sortiere die markierten Wörter!",
    t5_h1: "[RO] Frage nach dem Wort: Wer oder Wen?",
    t5_h2: "[RO] Der Jäger (Wer?) ➔ Nom. Den Hasen (Wen?) ➔ Akk.",
    t5_i5_1: "[RO] Der Jäger", t5_i5_2: "[RO] den Hasen", t5_i5_3: "[RO] Das Kind", t5_i5_4: "[RO] den Apfel",
    // Quiz: GENERATOR (akkusativ)

    // T6: Sätze bauen mit Kasus
    t6_title: "[RO] Kasus-Baumeister",
    t6_text: "[RO] Baue einen Satz mit Nominativ und Akkusativ. Achte darauf, dass der Artikel zum Fall passt!",
    t6_b1: "[RO] Subjekt (Nom) + Verb + Objekt (Akk).",
    t6_inst: "[RO] Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "[RO] Wer (Der Junge) macht was (kauft) mit wem (den Kuchen)?",
    t6_h2: "[RO] Der Junge kauft den Kuchen.",
    t6_f1: "[RO] Der Junge", t6_f2: "[RO] kauft", t6_f3: "[RO] den Kuchen.",
    // Quiz: MANUAL
    t6_q: "[RO] Was ist 'den Kuchen' im Satz 'Der Junge kauft den Kuchen'?",
    t6_qa: "[RO] Akkusativ-Objekt", t6_qb: "[RO] Subjekt", t6_qc: "[RO] Prädikat", t6_qd: "[RO] Adjektiv",

    // T7: Magnet-Challenge (Physics!)
    t7_title: "[RO] Magnet-Jagd",
    t7_text: "[RO] Bist du bereit für die Physik-Challenge? Ziehe alle Wörter, die im Akkusativ stehen, in das Ziel!",
    t7_b1: "[RO] Suche nach 'den', 'die' oder 'das' als Objekt.",
    t7_inst: "[RO] Ziehe die Akkusativ-Wörter in die richtige Box!",
    t7_h1: "[RO] Frage 'Wen oder was?'.",
    t7_h2: "[RO] den Ball, den Brief, die Blume.",
    t7_target: "[RO] Akkusativ 🧲",
    t7_nom: "[RO] Nominativ",
    t7_m1: "[RO] den Ball", t7_m2: "[RO] den Brief", t7_m3: "[RO] der Hund", t7_m4: "[RO] das Haus (Akk)",
    // Quiz: GENERATOR (akkusativ)

    // T8: Dativ-Einführung
    t8_title: "[RO] Der Dativ (3. Fall)",
    t8_text: "[RO] Der Dativ ist der 3. Fall. Wir fragen: Wem? Er zeigt an, wer von einer Handlung betroffen ist. Die Artikel: dem (mask./neut.), der (fem.), den+n (Plural).",
    t8_b1: "[RO] Frage: Wem?",
    t8_b2: "[RO] dem Hund, der Katze, dem Kind",
    t8_inst: "[RO] Finde das Dativ-Objekt!",
    t8_h1: "[RO] Frage: Wem gibt er das Buch?",
    t8_h2: "[RO] 'dem Kind' ist der Dativ.",
    t8_w1: "[RO] Er", t8_w2: "[RO] gibt", t8_w3: "[RO] dem Kind", t8_w4: "[RO] das Buch",
    t8_q: "[RO] Wie fragen wir nach dem Dativ-Objekt?",
    t8_qa: "[RO] Wem?", t8_qb: "[RO] Wen?", t8_qc: "[RO] Wer?", t8_qd: "[RO] Wessen?",

    // T9: Dativ-Artikel (match-pairs)
    t9_title: "[RO] Dativ-Artikel",
    t9_text: "[RO] Im Dativ verändern sich die Artikel: der Hund → dem Hund, die Katze → der Katze, das Kind → dem Kind, die Bücher → den Büchern. Merke: dem/der/dem/den!",
    t9_b1: "[RO] Maskulin/Neutrum: dem",
    t9_b2: "[RO] Feminin: der — Plural: den+n",
    t9_inst: "[RO] Verbinde Nominativ mit Dativ!",
    t9_h1: "[RO] Achte auf den Artikel: der→dem, die→der, das→dem",
    t9_h2: "[RO] der Hund → dem Hund",
    t9_l1: "[RO] der Hund", t9_r1: "[RO] dem Hund",
    t9_l2: "[RO] die Katze", t9_r2: "[RO] der Katze",
    t9_l3: "[RO] das Kind", t9_r3: "[RO] dem Kind",
    t9_l4: "[RO] die Bücher", t9_r4: "[RO] den Büchern",

    // T10: 3 Fälle unterscheiden (gap-fill)
    t10_title: "[RO] Drei Fälle zusammen",
    t10_text: "[RO] Jetzt kennst du drei Fälle: Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Übung macht den Meister!",
    t10_b1: "[RO] Nom → Wer?, Akk → Wen?, Dat → Wem?",
    t10_b2: "[RO] der/die/das → den/die/das → dem/der/dem",
    t10_inst: "[RO] Welcher Artikel passt?",
    t10_h1: "[RO] Frage: Wem schenkt sie das Buch?",
    t10_h2: "[RO] Wem? = Dativ → dem Bruder",
    t10_sent: "[RO] Sie schenkt ___ Bruder ein Buch.",
    t10_c1: "[RO] dem", t10_c2: "[RO] den", t10_c3: "[RO] der", t10_c4: "[RO] des",

    // T11: Präpositionen mit Dativ (gap-fill)
    t11_title: "[RO] Präpositionen mit Dativ",
    t11_text: "[RO] Bestimmte Präpositionen verlangen immer den Dativ: mit, nach, seit, von, bei, aus, zu, gegenüber. Merke: Diese Wörter = immer Dativ danach!",
    t11_b1: "[RO] mit, nach, seit, von, bei, aus, zu",
    t11_b2: "[RO] Diese Präpositionen = immer Dativ!",
    t11_inst: "[RO] Welche Dativ-Präposition passt?",
    t11_h1: "[RO] Denk: Welche Präposition passt inhaltlich?",
    t11_h2: "[RO] Er kommt MIT seinem Freund.",
    t11_c2_1: "[RO] nach", t11_c2_2: "[RO] für", t11_c2_3: "[RO] mit", t11_c2_4: "[RO] durch",

    // T12: Dativ im Satz (sentence-build)
    t12_title: "[RO] Dativ im Satz",
    t12_text: "[RO] Ein typischer Satz hat Nominativ (Subjekt), Verb, Dativ-Objekt (Wem?), Akkusativ-Objekt (Wen?). Zum Beispiel: Der Lehrer erklärt dem Schüler den Stoff.",
    t12_b1: "[RO] Subjekt + Verb + Dativ + Akkusativ",
    t12_b2: "[RO] Wem? kommt vor Wen?",
    t12_inst: "[RO] Bringe den Satz in die richtige Reihenfolge!",
    t12_h1: "[RO] Wer? (Nom) zuerst, dann Verb, dann Wem? (Dat), dann Wen? (Akk)",
    t12_h2: "[RO] Die Mutter liest dem Kind das Buch.",
    t12_f1: "[RO] Die Mutter", t12_f2: "[RO] liest", t12_f3: "[RO] das Buch.", t12_f4: "[RO] dem Kind",

    // T13: Genitiv-Einführung (gap-fill)
    t13_title: "[RO] Der Genitiv (2. Fall)",
    t13_text: "[RO] Der Genitiv ist der 2. Fall. Wir fragen: Wessen? Er zeigt Besitz an. Die Artikel: des (mask./neut.+n/s), der (fem./Plural). Zum Beispiel: das Buch des Mannes.",
    t13_b1: "[RO] Frage: Wessen?",
    t13_b2: "[RO] des Mannes, der Frau, des Kindes",
    t13_inst: "[RO] Welcher Genitiv-Artikel passt?",
    t13_h1: "[RO] Wessen Buch ist das? Das Buch des Mannes.",
    t13_h2: "[RO] Maskulin: des ... Feminin: der",
    t13_sent3: "[RO] Das ist das Auto ___ Mannes.",
    t13_c3_1: "[RO] des", t13_c3_2: "[RO] dem", t13_c3_3: "[RO] den", t13_c3_4: "[RO] der",

    // T14: Alle 4 Fälle zusammen (gap-fill)
    t14_title: "[RO] Alle 4 Fälle",
    t14_text: "[RO] Jetzt kennst du alle vier Fälle! Nominativ (Wer?), Akkusativ (Wen?), Dativ (Wem?), Genitiv (Wessen?). Jeder Fall hat seine eigene Frage und Artikel.",
    t14_b1: "[RO] 4 Fälle: Nom, Akk, Dat, Gen",
    t14_b2: "[RO] Fragen: Wer? Wen? Wem? Wessen?",
    t14_inst: "[RO] Welcher Artikel ist richtig?",
    t14_h1: "[RO] Frage: Wem bringt er das Geschenk?",
    t14_h2: "[RO] Wem? = Dativ → dem",
    t14_sent4: "[RO] Er bringt ___ Freund ein Geschenk.",
    t14_c4_1: "[RO] dem", t14_c4_2: "[RO] der", t14_c4_3: "[RO] den", t14_c4_4: "[RO] des",

    // T15: Kasus-Profi (gap-fill)
    t15_title: "[RO] Kasus-Profi!",
    t15_text: "[RO] Du beherrschst alle vier Fälle! Ob Nominativ, Akkusativ, Dativ oder Genitiv — du weißt, welcher Artikel wo stehen muss.",
    t15_b1: "[RO] Alle 4 Fälle sicher beherrscht",
    t15_b2: "[RO] Artikel + Fälle = kein Problem!",
    t15_inst: "[RO] Wähle den richtigen Genitiv-Artikel!",
    t15_h1: "[RO] Wessen Hut ist das? = Genitiv",
    t15_h2: "[RO] das Buch des Lehrers",
    t15_sent5: "[RO] Das ist das Buch ___ Lehrers.",
    t15_c5_1: "[RO] des", t15_c5_2: "[RO] dem", t15_c5_3: "[RO] den", t15_c5_4: "[RO] der",
  
  }
};

export const KASUS_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "📦", label: "Nomen" }, { emoji: "🔄", label: "Kasus" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [1],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "article-noun", article: "Der", articleColor: "#3B82F6", noun: "Vogel", emoji: "🐦" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"],
      correctIndices: [0],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "article-noun", article: "Den", articleColor: "#EF4444", noun: "Fisch", emoji: "🐟" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [2],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "akkusativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "der ➔ den", color: "#B91C1C", bg: "#FEE2E2" }] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t4_bn" }, { id: "a", label: "t4_ba" }],
      items: [
        { text: "t4_i1", bucketId: "n" },
        { text: "t4_i2", bucketId: "a" },
        { text: "t4_i3", bucketId: "a" }, // die (akk)
        { text: "t4_i4", bucketId: "n" }, // das (nom)
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Wer?"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Wen?"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t5_b1" }, { id: "a", label: "t5_b2" }],
      items: [
        { text: "t5_i5_1", bucketId: "n" },
        { text: "t5_i5_2", bucketId: "a" },
        { text: "t5_i5_3", bucketId: "n" },
        { text: "t5_i5_4", bucketId: "a" },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "akkusativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Der Junge", "kauft", "den Kuchen", "."], highlightIndices: [2], color: "#10B981" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3"],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧲", title: "Akkusativ-Suche", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "akk", label: "t7_target" }, { id: "nom", label: "t7_nom" }],
      items: [
        { text: "t7_m1", bucketId: "akk" },
        { text: "t7_m2", bucketId: "akk" },
        { text: "t7_m3", bucketId: "nom" },
        { text: "t7_m4", bucketId: "akk" },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "akkusativ" },
  },

  // ── 8. Dativ-Einführung (highlight-text) ──────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "article-noun", article: "Dem", articleColor: "#8B5CF6", noun: "Kind", emoji: "👶" },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [2], // dem Kind
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Dativ-Artikel (match-pairs) ───────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "dem/der/dem", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t9_l1", right: "t9_r1" },
        { left: "t9_l2", right: "t9_r2" },
        { left: "t9_l3", right: "t9_r3" },
        { left: "t9_l4", right: "t9_r4" },
      ],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 10. 3 Fälle unterscheiden (gap-fill) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "icon-grid", items: [{ emoji: "1️⃣", label: "Wer?" }, { emoji: "2️⃣", label: "Wen?" }, { emoji: "3️⃣", label: "Wem?" }] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 11. Präpositionen mit Dativ (gap-fill) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "letter-pairs", pairs: [["mit", "Dativ"], ["zu", "Dativ"], ["nach", "Dativ"]], color: "#10B981" },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_sent2",
      choices: ["t11_c2_1", "t11_c2_2", "t11_c2_3", "t11_c2_4"],
      correctIndex: 2,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 12. Dativ im Satz (sentence-build) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "simple-icon", icon: "👤➔👤", title: "Dativ-Objekt", bg: "#E0F2FE" },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t12_f4", "t12_f3", "t12_f1", "t12_f2"],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 13. Genitiv-Einführung (gap-fill) ──────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "Wessen?", highlightChars: ["W", "e", "s", "s", "e", "n"], color: "#EC4899" },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent3",
      choices: ["t13_c3_1", "t13_c3_2", "t13_c3_3", "t13_c3_4"],
      correctIndex: 0,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "genitiv" },
  },

  // ── 14. Alle 4 Fälle zusammen (gap-fill) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "simple-icon", icon: "1️⃣2️⃣3️⃣4️⃣", title: "4 Fälle", bg: "#FEFCE8" },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_sent4",
      choices: ["t14_c4_1", "t14_c4_2", "t14_c4_3", "t14_c4_4"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nominativ" },
  },

  // ── 15. Kasus-Profi (gap-fill) ────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent5",
      choices: ["t15_c5_1", "t15_c5_2", "t15_c5_3", "t15_c5_4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "genitiv" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Dativinsel
// Thema: Dativ (Wem?) — dem/der/dem, Präpositionen mit Dativ
// ─────────────────────────────────────────────────────────────────────────────

export const DATIV_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Dativ-Dschungel (Wem?)",

    // T1: Der 3. Fall (Dativ)
    t1_title: "Was ist der Dativ?",
    t1_text: "Der Dativ ist der 3. Fall. Wir benutzen ihn oft, wenn wir jemandem etwas geben oder helfen. Die Frage lautet immer: WEM oder WAS?",
    t1_b1: "Frage: Wem oder was?",
    t1_b2: "Oft das 'Ziel' einer Gabe oder Hilfe.",
    t1_inst: "Finde das Nomen im Dativ!",
    t1_h1: "Frage: WEM hilft das Kind?",
    t1_h2: "Es hilft 'dem Opa'.",
    t1_w1: "Das Kind", t1_w2: "hilft", t1_w3: "dem Opa", t1_w4: ".",
    // Quiz: GENERATOR (dativ)

    // T2: Artikel im Dativ
    t2_title: "Die Artikel ändern sich",
    t2_text: "Im Dativ verändern sich alle Artikel! Der und Das werden zu 'dem'. Die wird zu 'der'. Und im Plural? Da wird 'die' zu 'den' und das Nomen bekommt oft ein extra -n!",
    t2_b1: "der / das ➔ dem",
    t2_b2: "die ➔ der",
    t2_b3: "Plural: die ➔ den (...n)",
    t2_inst: "Verbinde den Nominativ mit dem richtigen Dativ!",
    t2_h1: "Überlege: Was wird aus 'der' und 'die'?",
    t2_h2: "der -> dem, die -> der.",
    t2_l1: "der Hund", t2_r1: "dem Hund",
    t2_l2: "die Katze", t2_r2: "der Katze",
    t2_l3: "das Haus", t2_r3: "dem Haus",
    t2_l4: "die Kinder", t2_r4: "den Kindern",
    // Quiz: GENERATOR (dativ)

    // T3: Verben mit Dativ
    t3_title: "Besondere Verben",
    t3_text: "Einige Verben brauchen immer den Dativ. Man kann sie sich wie 'Dativ-Magneten' vorstellen: helfen, danken, gehören, gratulieren.",
    t3_b1: "helfen + Dativ",
    t3_b2: "gehören + Dativ",
    t3_inst: "Welches Wort passt in die Lücke?",
    t3_h1: "Das Verb 'gehören' braucht den Dativ von 'der Junge'.",
    t3_h2: "Es heißt 'dem Jungen'.",
    t3_sent: "Das Fahrrad gehört ___.",
    t3_c1: "dem Jungen", t3_c2: "den Jungen", t3_c3: "der Junge", t3_c4: "des Jungen",
    // Quiz: GENERATOR (dativ)

    // T4: Präpositionen mit Dativ
    t4_title: "Dativ-Präpositionen",
    t4_text: "Es gibt Wörter, nach denen IMMER der Dativ kommt. Merk dir den Spruch: 'Mit, nach, von, seit, aus, zu, bei - schreibt man stets mit Fall Nummer 3!'",
    t4_b1: "aus, bei, mit, nach, seit, von, zu.",
    t4_inst: "Sortiere die Dativ-Präpositionen in den Korb!",
    t4_h1: "Suche nach Wörtern wie 'mit', 'von' oder 'zu'.",
    t4_h2: "Diese Wörter verlangen immer den 3. Fall.",
    t4_target: "Dativ-Starter 🧺",
    t4_i1: "mit", t4_i2: "nach", t4_i3: "von", t4_i4: "für (Akk)",
    // Quiz: MANUAL
    t4_q: "Welches Wort gehört NICHT zu den Dativ-Präpositionen?",
    t4_qa: "für", t4_qb: "mit", t4_qc: "bei", t4_qd: "seit",

    // T5: Pronomen im Dativ
    t5_title: "Mir, dir, ihm, ihr",
    t5_text: "Auch die Fürwörter (Pronomen) ändern sich im Dativ. Aus 'ich' wird 'mir', aus 'du' wird 'dir'.",
    t5_b1: "ich ➔ mir",
    t5_b2: "du ➔ dir",
    t5_inst: "Welches Pronomen passt hier?",
    t5_h1: "Wenn ich dir danke, sage ich: Ich danke...",
    t5_h2: "Ich danke 'dir'.",
    t5_sent_p: "Ich danke ___ für das Geschenk.",
    t5_cp1: "dir", t5_cp2: "dich", t5_cp3: "du", t5_cp4: "dein",
    // Quiz: MANUAL
    t5_q: "Was ist der Dativ von 'wir'?",
    t5_qa: "uns", t5_qb: "euch", t5_qc: "wir", t5_qd: "unser",

    // T6: Wo oder Wohin?
    t6_title: "Wo? (Dativ)",
    t6_text: "Wenn wir nach einem festen Ort fragen (Wo?), benutzen wir den Dativ. 'Ich bin IN DER Schule.' (Wo? -> Schule ist weiblich, also 'der').",
    t6_b1: "Wo? ➔ Dativ (Ort)",
    t6_b2: "Wohin? ➔ Akkusativ (Richtung)",
    t6_inst: "Baue den Satz im Dativ zusammen!",
    t6_h1: "Frage: Wo sitzt die Katze?",
    t6_h2: "Auf dem Tisch (Dativ).",
    t6_f1: "Die Katze", t6_f2: "sitzt", t6_f3: "auf dem Tisch.",
    // Quiz: GENERATOR (dativ)

    // T7: Physics Bucket (Catch the Dative!)
    t7_title: "Dativ-Fänger",
    t7_text: "Jetzt wird es schnell! Fange nur die Wörter, die im Dativ stehen. Achte auf 'dem', 'der' und 'mir'!",
    t7_b1: "Fange dem, der, den, mir, dir.",
    t7_inst: "Bewege den Korb und fange die Dativ-Wörter!",
    t7_h1: "Achte auf die typischen Dativ-Endungen.",
    t7_h2: "dem Baum, der Frau, mir.",
    t7_i1: "dem Baum", t7_i2: "der Frau", t7_i3: "mir", t7_i4: "den Hund (Akk)",

    // T8: Dativ-Präpositionen (mit, bei, nach)
    t8_title: "Dativ-Präpositionen",
    t8_text: "Mit, bei, nach, von, zu brauchen immer Dativ! mit meinem Freund, bei meiner Oma, nach der Schule.",
    t8_b1: "Mit, bei, nach + Dativ",
    t8_b2: "Präposition zeigt den Fall",
    t8_inst: "Wähle die richtige Dativ-Form!",
    t8_h1: "Nach welcher Präposition kommt Dativ?",
    t8_h2: "Nach der Schule, bei dem Arzt",
    t8_sent8: "Ich treffe mich ___ meinen Freunden.",
    t8_c8_1: "mit den", t8_c8_2: "mit den", t8_c8_3: "den", t8_c8_4: "zu den",

    // T9: Dativ-Pronomen
    t9_title: "Dativ-Pronomen (mir, dir, ihm, ihr)",
    t9_text: "Pronomen verändern sich auch im Dativ! ich➔mir, du➔dir, er➔ihm, sie➔ihr, es➔ihm.",
    t9_b1: "Pronomen ändern sich im Dativ",
    t9_b2: "mir, dir, ihm, ihr, uns, euch",
    t9_inst: "Welches Pronomen passt?",
    t9_h1: "Ich danke DIR (nicht dich!)",
    t9_h2: "Mir ist kalt.",
    t9_sent9: "Ich helfe ___.",
    t9_c9_1: "dir", t9_c9_2: "dich", t9_c9_3: "du", t9_c9_4: "dein",

    // T10: Wo? Dativ des Ortes
    t10_title: "Wo? (Dativ des Ortes)",
    t10_text: "Wenn wir fragen 'Wo?' (Ort), benutzen wir Dativ. Auf dem Tisch (Wo?), neben dem Baum (Wo?).",
    t10_b1: "Wo? ➔ Dativ (fester Ort)",
    t10_b2: "Wohin? ➔ Akkusativ (Richtung/Ziel)",
    t10_inst: "Wähle die Dativ-Form!",
    t10_h1: "Wo sitzt die Katze?",
    t10_h2: "Auf dem Sofa",
    t10_sent10: "Das Bild hängt ___ Wand.",
    t10_c10_1: "an der", t10_c10_2: "an die", t10_c10_3: "auf der", t10_c10_4: "in der",

    // T11: Verben mit Dativ
    t11_title: "Verben mit Dativ",
    t11_text: "Manche Verben brauchen ein Dativ-Objekt! danken, helfen, geben, zeigen. 'Ich danke DIR.'",
    t11_b1: "danken, helfen, geben brauchen Dativ",
    t11_b2: "nicht Akkusativ!",
    t11_inst: "Finde das Dativ-Objekt!",
    t11_h1: "Welches Verb braucht Dativ?",
    t11_h2: "Ich helfe dem Lehrer.",
    t11_w1: "Die Lehrerin", t11_w2: "hilft", t11_w3: "dem Schüler", t11_w4: ".",

    // T12: Dativ-Sätze bauen
    t12_title: "Sätze mit Dativ",
    t12_text: "Sätze mit Dativ-Objekten: 'Anna gibt IHRER FREUNDIN ein Buch.' Wem? Der Freundin (Dativ).",
    t12_b1: "Nominativ + Verb + Dativ",
    t12_b2: "Normale Satzstruktur mit Dativ",
    t12_inst: "Baue den Satz im Dativ zusammen!",
    t12_h1: "Wem? Das ist Dativ!",
    t12_h2: "Der Junge zeigt dem Mädchen sein Spielzeug.",
    t12_f1: "Der Junge", t12_f2: "zeigt", t12_f3: "dem Mädchen", t12_f4: "sein Spielzeug.",

    // T13: Dativ oder Akkusativ?
    t13_title: "Dativ vs. Akkusativ",
    t13_text: "Manche Präpositionen sind flexibel! 'auf' kann beides sein: Wo? (Dativ) oder Wohin? (Akkusativ). auf dem Stuhl (Dativ) vs. auf den Stuhl (Akkusativ).",
    t13_b1: "in, auf, unter sind flexibel",
    t13_b2: "Wo? Dativ / Wohin? Akkusativ",
    t13_inst: "Ist es Dativ oder Akkusativ?",
    t13_h1: "Frag: Wo oder Wohin?",
    t13_h2: "Auf dem Stuhl = Wo = Dativ",
    t13_sent13: "Der Hund springt ___ das Sofa.",
    t13_c13_1: "auf das", t13_c13_2: "auf dem", t13_c13_3: "in das", t13_c13_4: "in dem",

    // T14: Dativ-Spezialfall Pronomen
    t14_title: "Dativ-Pronomen auswendig",
    t14_text: "Dativ-Pronomen sind wichtig! ich→mir, du→dir, er→ihm, sie→ihr, es→ihm, wir→uns, ihr→euch, sie→ihnen.",
    t14_b1: "Alle Dativ-Pronomen lernen",
    t14_b2: "Nicht mit Nominativ verwechseln",
    t14_inst: "Welches Pronomen ist im Dativ?",
    t14_h1: "Dativ = mir, dir, ihm, ihr, uns, euch, ihnen",
    t14_h2: "Ich danke IHNEN (nicht sie!)",
    t14_sent14: "Der Lehrer erklärt ___ den Stoff.",
    t14_c14_1: "uns", t14_c14_2: "wir", t14_c14_3: "unsere", t14_c14_4: "unse",

    // T15: Dativ-Profi
    t15_title: "Du bist ein Dativ-Profi!",
    t15_text: "Du kennst Dativ-Artikel, Dativ-Pronomen, Dativ-Präpositionen und Dativ-Verben. Du beherrschst den Dativ komplett!",
    t15_b1: "Alle Dativ-Regeln gelernt",
    t15_b2: "Artikel, Pronomen, Präpositionen, Verben",
    t15_inst: "Zeige dein Dativ-Wissen!",
    t15_h1: "Wem? Das ist immer Dativ!",
    t15_h2: "dem Mann, mir, mit dir, helfen",
    t15_sent15: "Anna schenkt ___ eine Kette.",
    t15_c15_1: "ihrer Mutter", t15_c15_2: "ihre Mutter", t15_c15_3: "ihren Mutter", t15_c15_4: "ihr Mutter",
  },
  en: {

    explorer_title: "[EN] Dativ-Dschungel (Wem?)",

    // T1: Der 3. Fall (Dativ)
    t1_title: "[EN] Was ist der Dativ?",
    t1_text: "[EN] Der Dativ ist der 3. Fall. Wir benutzen ihn oft, wenn wir jemandem etwas geben oder helfen. Die Frage lautet immer: WEM oder WAS?",
    t1_b1: "[EN] Frage: Wem oder was?",
    t1_b2: "[EN] Oft das 'Ziel' einer Gabe oder Hilfe.",
    t1_inst: "[EN] Finde das Nomen im Dativ!",
    t1_h1: "[EN] Frage: WEM hilft das Kind?",
    t1_h2: "[EN] Es hilft 'dem Opa'.",
    t1_w1: "[EN] Das Kind", t1_w2: "[EN] hilft", t1_w3: "[EN] dem Opa", t1_w4: "[EN] .",
    // Quiz: GENERATOR (dativ)

    // T2: Artikel im Dativ
    t2_title: "[EN] Die Artikel ändern sich",
    t2_text: "[EN] Im Dativ verändern sich alle Artikel! Der und Das werden zu 'dem'. Die wird zu 'der'. Und im Plural? Da wird 'die' zu 'den' und das Nomen bekommt oft ein extra -n!",
    t2_b1: "[EN] der / das ➔ dem",
    t2_b2: "[EN] die ➔ der",
    t2_b3: "[EN] Plural: die ➔ den (...n)",
    t2_inst: "[EN] Verbinde den Nominativ mit dem richtigen Dativ!",
    t2_h1: "[EN] Überlege: Was wird aus 'der' und 'die'?",
    t2_h2: "[EN] der -> dem, die -> der.",
    t2_l1: "[EN] der Hund", t2_r1: "[EN] dem Hund",
    t2_l2: "[EN] die Katze", t2_r2: "[EN] der Katze",
    t2_l3: "[EN] das Haus", t2_r3: "[EN] dem Haus",
    t2_l4: "[EN] die Kinder", t2_r4: "[EN] den Kindern",
    // Quiz: GENERATOR (dativ)

    // T3: Verben mit Dativ
    t3_title: "[EN] Besondere Verben",
    t3_text: "[EN] Einige Verben brauchen immer den Dativ. Man kann sie sich wie 'Dativ-Magneten' vorstellen: helfen, danken, gehören, gratulieren.",
    t3_b1: "[EN] helfen + Dativ",
    t3_b2: "[EN] gehören + Dativ",
    t3_inst: "[EN] Welches Wort passt in die Lücke?",
    t3_h1: "[EN] Das Verb 'gehören' braucht den Dativ von 'der Junge'.",
    t3_h2: "[EN] Es heißt 'dem Jungen'.",
    t3_sent: "[EN] Das Fahrrad gehört ___.",
    t3_c1: "[EN] dem Jungen", t3_c2: "[EN] den Jungen", t3_c3: "[EN] der Junge", t3_c4: "[EN] des Jungen",
    // Quiz: GENERATOR (dativ)

    // T4: Präpositionen mit Dativ
    t4_title: "[EN] Dativ-Präpositionen",
    t4_text: "[EN] Es gibt Wörter, nach denen IMMER der Dativ kommt. Merk dir den Spruch: 'Mit, nach, von, seit, aus, zu, bei - schreibt man stets mit Fall Nummer 3!'",
    t4_b1: "[EN] aus, bei, mit, nach, seit, von, zu.",
    t4_inst: "[EN] Sortiere die Dativ-Präpositionen in den Korb!",
    t4_h1: "[EN] Suche nach Wörtern wie 'mit', 'von' oder 'zu'.",
    t4_h2: "[EN] Diese Wörter verlangen immer den 3. Fall.",
    t4_target: "[EN] Dativ-Starter 🧺",
    t4_i1: "[EN] mit", t4_i2: "[EN] nach", t4_i3: "[EN] von", t4_i4: "[EN] für (Akk)",
    // Quiz: MANUAL
    t4_q: "[EN] Welches Wort gehört NICHT zu den Dativ-Präpositionen?",
    t4_qa: "[EN] für", t4_qb: "[EN] mit", t4_qc: "[EN] bei", t4_qd: "[EN] seit",

    // T5: Pronomen im Dativ
    t5_title: "[EN] Mir, dir, ihm, ihr",
    t5_text: "[EN] Auch die Fürwörter (Pronomen) ändern sich im Dativ. Aus 'ich' wird 'mir', aus 'du' wird 'dir'.",
    t5_b1: "[EN] ich ➔ mir",
    t5_b2: "[EN] du ➔ dir",
    t5_inst: "[EN] Welches Pronomen passt hier?",
    t5_h1: "[EN] Wenn ich dir danke, sage ich: Ich danke...",
    t5_h2: "[EN] Ich danke 'dir'.",
    t5_sent_p: "[EN] Ich danke ___ für das Geschenk.",
    t5_cp1: "[EN] dir", t5_cp2: "[EN] dich", t5_cp3: "[EN] du", t5_cp4: "[EN] dein",
    // Quiz: MANUAL
    t5_q: "[EN] Was ist der Dativ von 'wir'?",
    t5_qa: "[EN] uns", t5_qb: "[EN] euch", t5_qc: "[EN] wir", t5_qd: "[EN] unser",

    // T6: Wo oder Wohin?
    t6_title: "[EN] Wo? (Dativ)",
    t6_text: "[EN] Wenn wir nach einem festen Ort fragen (Wo?), benutzen wir den Dativ. 'Ich bin IN DER Schule.' (Wo? -> Schule ist weiblich, also 'der').",
    t6_b1: "[EN] Wo? ➔ Dativ (Ort)",
    t6_b2: "[EN] Wohin? ➔ Akkusativ (Richtung)",
    t6_inst: "[EN] Baue den Satz im Dativ zusammen!",
    t6_h1: "[EN] Frage: Wo sitzt die Katze?",
    t6_h2: "[EN] Auf dem Tisch (Dativ).",
    t6_f1: "[EN] Die Katze", t6_f2: "[EN] sitzt", t6_f3: "[EN] auf dem Tisch.",
    // Quiz: GENERATOR (dativ)

    // T7: Physics Bucket (Catch the Dative!)
    t7_title: "[EN] Dativ-Fänger",
    t7_text: "[EN] Jetzt wird es schnell! Fange nur die Wörter, die im Dativ stehen. Achte auf 'dem', 'der' und 'mir'!",
    t7_b1: "[EN] Fange dem, der, den, mir, dir.",
    t7_inst: "[EN] Bewege den Korb und fange die Dativ-Wörter!",
    t7_h1: "[EN] Achte auf die typischen Dativ-Endungen.",
    t7_h2: "[EN] dem Baum, der Frau, mir.",
    t7_i1: "[EN] dem Baum", t7_i2: "[EN] der Frau", t7_i3: "[EN] mir", t7_i4: "[EN] den Hund (Akk)",

    // T8: Dativ-Präpositionen (mit, bei, nach)
    t8_title: "[EN] Dativ-Präpositionen",
    t8_text: "[EN] Mit, bei, nach, von, zu brauchen immer Dativ! mit meinem Freund, bei meiner Oma, nach der Schule.",
    t8_b1: "[EN] Mit, bei, nach + Dativ",
    t8_b2: "[EN] Präposition zeigt den Fall",
    t8_inst: "[EN] Wähle die richtige Dativ-Form!",
    t8_h1: "[EN] Nach welcher Präposition kommt Dativ?",
    t8_h2: "[EN] Nach der Schule, bei dem Arzt",
    t8_sent8: "[EN] Ich treffe mich ___ meinen Freunden.",
    t8_c8_1: "[EN] mit den", t8_c8_2: "[EN] mit den", t8_c8_3: "[EN] den", t8_c8_4: "[EN] zu den",

    // T9: Dativ-Pronomen
    t9_title: "[EN] Dativ-Pronomen (mir, dir, ihm, ihr)",
    t9_text: "[EN] Pronomen verändern sich auch im Dativ! ich➔mir, du➔dir, er➔ihm, sie➔ihr, es➔ihm.",
    t9_b1: "[EN] Pronomen ändern sich im Dativ",
    t9_b2: "[EN] mir, dir, ihm, ihr, uns, euch",
    t9_inst: "[EN] Welches Pronomen passt?",
    t9_h1: "[EN] Ich danke DIR (nicht dich!)",
    t9_h2: "[EN] Mir ist kalt.",
    t9_sent9: "[EN] Ich helfe ___.",
    t9_c9_1: "[EN] dir", t9_c9_2: "[EN] dich", t9_c9_3: "[EN] du", t9_c9_4: "[EN] dein",

    // T10: Wo? Dativ des Ortes
    t10_title: "[EN] Wo? (Dativ des Ortes)",
    t10_text: "[EN] Wenn wir fragen 'Wo?' (Ort), benutzen wir Dativ. Auf dem Tisch (Wo?), neben dem Baum (Wo?).",
    t10_b1: "[EN] Wo? ➔ Dativ (fester Ort)",
    t10_b2: "[EN] Wohin? ➔ Akkusativ (Richtung/Ziel)",
    t10_inst: "[EN] Wähle die Dativ-Form!",
    t10_h1: "[EN] Wo sitzt die Katze?",
    t10_h2: "[EN] Auf dem Sofa",
    t10_sent10: "[EN] Das Bild hängt ___ Wand.",
    t10_c10_1: "[EN] an der", t10_c10_2: "[EN] an die", t10_c10_3: "[EN] auf der", t10_c10_4: "[EN] in der",

    // T11: Verben mit Dativ
    t11_title: "[EN] Verben mit Dativ",
    t11_text: "[EN] Manche Verben brauchen ein Dativ-Objekt! danken, helfen, geben, zeigen. 'Ich danke DIR.'",
    t11_b1: "[EN] danken, helfen, geben brauchen Dativ",
    t11_b2: "[EN] nicht Akkusativ!",
    t11_inst: "[EN] Finde das Dativ-Objekt!",
    t11_h1: "[EN] Welches Verb braucht Dativ?",
    t11_h2: "[EN] Ich helfe dem Lehrer.",
    t11_w1: "[EN] Die Lehrerin", t11_w2: "[EN] hilft", t11_w3: "[EN] dem Schüler", t11_w4: "[EN] .",

    // T12: Dativ-Sätze bauen
    t12_title: "[EN] Sätze mit Dativ",
    t12_text: "[EN] Sätze mit Dativ-Objekten: 'Anna gibt IHRER FREUNDIN ein Buch.' Wem? Der Freundin (Dativ).",
    t12_b1: "[EN] Nominativ + Verb + Dativ",
    t12_b2: "[EN] Normale Satzstruktur mit Dativ",
    t12_inst: "[EN] Baue den Satz im Dativ zusammen!",
    t12_h1: "[EN] Wem? Das ist Dativ!",
    t12_h2: "[EN] Der Junge zeigt dem Mädchen sein Spielzeug.",
    t12_f1: "[EN] Der Junge", t12_f2: "[EN] zeigt", t12_f3: "[EN] dem Mädchen", t12_f4: "[EN] sein Spielzeug.",

    // T13: Dativ oder Akkusativ?
    t13_title: "[EN] Dativ vs. Akkusativ",
    t13_text: "[EN] Manche Präpositionen sind flexibel! 'auf' kann beides sein: Wo? (Dativ) oder Wohin? (Akkusativ). auf dem Stuhl (Dativ) vs. auf den Stuhl (Akkusativ).",
    t13_b1: "[EN] in, auf, unter sind flexibel",
    t13_b2: "[EN] Wo? Dativ / Wohin? Akkusativ",
    t13_inst: "[EN] Ist es Dativ oder Akkusativ?",
    t13_h1: "[EN] Frag: Wo oder Wohin?",
    t13_h2: "[EN] Auf dem Stuhl = Wo = Dativ",
    t13_sent13: "[EN] Der Hund springt ___ das Sofa.",
    t13_c13_1: "[EN] auf das", t13_c13_2: "[EN] auf dem", t13_c13_3: "[EN] in das", t13_c13_4: "[EN] in dem",

    // T14: Dativ-Spezialfall Pronomen
    t14_title: "[EN] Dativ-Pronomen auswendig",
    t14_text: "[EN] Dativ-Pronomen sind wichtig! ich→mir, du→dir, er→ihm, sie→ihr, es→ihm, wir→uns, ihr→euch, sie→ihnen.",
    t14_b1: "[EN] Alle Dativ-Pronomen lernen",
    t14_b2: "[EN] Nicht mit Nominativ verwechseln",
    t14_inst: "[EN] Welches Pronomen ist im Dativ?",
    t14_h1: "[EN] Dativ = mir, dir, ihm, ihr, uns, euch, ihnen",
    t14_h2: "[EN] Ich danke IHNEN (nicht sie!)",
    t14_sent14: "[EN] Der Lehrer erklärt ___ den Stoff.",
    t14_c14_1: "[EN] uns", t14_c14_2: "[EN] wir", t14_c14_3: "[EN] unsere", t14_c14_4: "[EN] unse",

    // T15: Dativ-Profi
    t15_title: "[EN] Du bist ein Dativ-Profi!",
    t15_text: "[EN] Du kennst Dativ-Artikel, Dativ-Pronomen, Dativ-Präpositionen und Dativ-Verben. Du beherrschst den Dativ komplett!",
    t15_b1: "[EN] Alle Dativ-Regeln gelernt",
    t15_b2: "[EN] Artikel, Pronomen, Präpositionen, Verben",
    t15_inst: "[EN] Zeige dein Dativ-Wissen!",
    t15_h1: "[EN] Wem? Das ist immer Dativ!",
    t15_h2: "[EN] dem Mann, mir, mit dir, helfen",
    t15_sent15: "[EN] Anna schenkt ___ eine Kette.",
    t15_c15_1: "[EN] ihrer Mutter", t15_c15_2: "[EN] ihre Mutter", t15_c15_3: "[EN] ihren Mutter", t15_c15_4: "[EN] ihr Mutter",
  
  },
  hu: {

    explorer_title: "[HU] Dativ-Dschungel (Wem?)",

    // T1: Der 3. Fall (Dativ)
    t1_title: "[HU] Was ist der Dativ?",
    t1_text: "[HU] Der Dativ ist der 3. Fall. Wir benutzen ihn oft, wenn wir jemandem etwas geben oder helfen. Die Frage lautet immer: WEM oder WAS?",
    t1_b1: "[HU] Frage: Wem oder was?",
    t1_b2: "[HU] Oft das 'Ziel' einer Gabe oder Hilfe.",
    t1_inst: "[HU] Finde das Nomen im Dativ!",
    t1_h1: "[HU] Frage: WEM hilft das Kind?",
    t1_h2: "[HU] Es hilft 'dem Opa'.",
    t1_w1: "[HU] Das Kind", t1_w2: "[HU] hilft", t1_w3: "[HU] dem Opa", t1_w4: "[HU] .",
    // Quiz: GENERATOR (dativ)

    // T2: Artikel im Dativ
    t2_title: "[HU] Die Artikel ändern sich",
    t2_text: "[HU] Im Dativ verändern sich alle Artikel! Der und Das werden zu 'dem'. Die wird zu 'der'. Und im Plural? Da wird 'die' zu 'den' und das Nomen bekommt oft ein extra -n!",
    t2_b1: "[HU] der / das ➔ dem",
    t2_b2: "[HU] die ➔ der",
    t2_b3: "[HU] Plural: die ➔ den (...n)",
    t2_inst: "[HU] Verbinde den Nominativ mit dem richtigen Dativ!",
    t2_h1: "[HU] Überlege: Was wird aus 'der' und 'die'?",
    t2_h2: "[HU] der -> dem, die -> der.",
    t2_l1: "[HU] der Hund", t2_r1: "[HU] dem Hund",
    t2_l2: "[HU] die Katze", t2_r2: "[HU] der Katze",
    t2_l3: "[HU] das Haus", t2_r3: "[HU] dem Haus",
    t2_l4: "[HU] die Kinder", t2_r4: "[HU] den Kindern",
    // Quiz: GENERATOR (dativ)

    // T3: Verben mit Dativ
    t3_title: "[HU] Besondere Verben",
    t3_text: "[HU] Einige Verben brauchen immer den Dativ. Man kann sie sich wie 'Dativ-Magneten' vorstellen: helfen, danken, gehören, gratulieren.",
    t3_b1: "[HU] helfen + Dativ",
    t3_b2: "[HU] gehören + Dativ",
    t3_inst: "[HU] Welches Wort passt in die Lücke?",
    t3_h1: "[HU] Das Verb 'gehören' braucht den Dativ von 'der Junge'.",
    t3_h2: "[HU] Es heißt 'dem Jungen'.",
    t3_sent: "[HU] Das Fahrrad gehört ___.",
    t3_c1: "[HU] dem Jungen", t3_c2: "[HU] den Jungen", t3_c3: "[HU] der Junge", t3_c4: "[HU] des Jungen",
    // Quiz: GENERATOR (dativ)

    // T4: Präpositionen mit Dativ
    t4_title: "[HU] Dativ-Präpositionen",
    t4_text: "[HU] Es gibt Wörter, nach denen IMMER der Dativ kommt. Merk dir den Spruch: 'Mit, nach, von, seit, aus, zu, bei - schreibt man stets mit Fall Nummer 3!'",
    t4_b1: "[HU] aus, bei, mit, nach, seit, von, zu.",
    t4_inst: "[HU] Sortiere die Dativ-Präpositionen in den Korb!",
    t4_h1: "[HU] Suche nach Wörtern wie 'mit', 'von' oder 'zu'.",
    t4_h2: "[HU] Diese Wörter verlangen immer den 3. Fall.",
    t4_target: "[HU] Dativ-Starter 🧺",
    t4_i1: "[HU] mit", t4_i2: "[HU] nach", t4_i3: "[HU] von", t4_i4: "[HU] für (Akk)",
    // Quiz: MANUAL
    t4_q: "[HU] Welches Wort gehört NICHT zu den Dativ-Präpositionen?",
    t4_qa: "[HU] für", t4_qb: "[HU] mit", t4_qc: "[HU] bei", t4_qd: "[HU] seit",

    // T5: Pronomen im Dativ
    t5_title: "[HU] Mir, dir, ihm, ihr",
    t5_text: "[HU] Auch die Fürwörter (Pronomen) ändern sich im Dativ. Aus 'ich' wird 'mir', aus 'du' wird 'dir'.",
    t5_b1: "[HU] ich ➔ mir",
    t5_b2: "[HU] du ➔ dir",
    t5_inst: "[HU] Welches Pronomen passt hier?",
    t5_h1: "[HU] Wenn ich dir danke, sage ich: Ich danke...",
    t5_h2: "[HU] Ich danke 'dir'.",
    t5_sent_p: "[HU] Ich danke ___ für das Geschenk.",
    t5_cp1: "[HU] dir", t5_cp2: "[HU] dich", t5_cp3: "[HU] du", t5_cp4: "[HU] dein",
    // Quiz: MANUAL
    t5_q: "[HU] Was ist der Dativ von 'wir'?",
    t5_qa: "[HU] uns", t5_qb: "[HU] euch", t5_qc: "[HU] wir", t5_qd: "[HU] unser",

    // T6: Wo oder Wohin?
    t6_title: "[HU] Wo? (Dativ)",
    t6_text: "[HU] Wenn wir nach einem festen Ort fragen (Wo?), benutzen wir den Dativ. 'Ich bin IN DER Schule.' (Wo? -> Schule ist weiblich, also 'der').",
    t6_b1: "[HU] Wo? ➔ Dativ (Ort)",
    t6_b2: "[HU] Wohin? ➔ Akkusativ (Richtung)",
    t6_inst: "[HU] Baue den Satz im Dativ zusammen!",
    t6_h1: "[HU] Frage: Wo sitzt die Katze?",
    t6_h2: "[HU] Auf dem Tisch (Dativ).",
    t6_f1: "[HU] Die Katze", t6_f2: "[HU] sitzt", t6_f3: "[HU] auf dem Tisch.",
    // Quiz: GENERATOR (dativ)

    // T7: Physics Bucket (Catch the Dative!)
    t7_title: "[HU] Dativ-Fänger",
    t7_text: "[HU] Jetzt wird es schnell! Fange nur die Wörter, die im Dativ stehen. Achte auf 'dem', 'der' und 'mir'!",
    t7_b1: "[HU] Fange dem, der, den, mir, dir.",
    t7_inst: "[HU] Bewege den Korb und fange die Dativ-Wörter!",
    t7_h1: "[HU] Achte auf die typischen Dativ-Endungen.",
    t7_h2: "[HU] dem Baum, der Frau, mir.",
    t7_i1: "[HU] dem Baum", t7_i2: "[HU] der Frau", t7_i3: "[HU] mir", t7_i4: "[HU] den Hund (Akk)",

    // T8: Dativ-Präpositionen (mit, bei, nach)
    t8_title: "[HU] Dativ-Präpositionen",
    t8_text: "[HU] Mit, bei, nach, von, zu brauchen immer Dativ! mit meinem Freund, bei meiner Oma, nach der Schule.",
    t8_b1: "[HU] Mit, bei, nach + Dativ",
    t8_b2: "[HU] Präposition zeigt den Fall",
    t8_inst: "[HU] Wähle die richtige Dativ-Form!",
    t8_h1: "[HU] Nach welcher Präposition kommt Dativ?",
    t8_h2: "[HU] Nach der Schule, bei dem Arzt",
    t8_sent8: "[HU] Ich treffe mich ___ meinen Freunden.",
    t8_c8_1: "[HU] mit den", t8_c8_2: "[HU] mit den", t8_c8_3: "[HU] den", t8_c8_4: "[HU] zu den",

    // T9: Dativ-Pronomen
    t9_title: "[HU] Dativ-Pronomen (mir, dir, ihm, ihr)",
    t9_text: "[HU] Pronomen verändern sich auch im Dativ! ich➔mir, du➔dir, er➔ihm, sie➔ihr, es➔ihm.",
    t9_b1: "[HU] Pronomen ändern sich im Dativ",
    t9_b2: "[HU] mir, dir, ihm, ihr, uns, euch",
    t9_inst: "[HU] Welches Pronomen passt?",
    t9_h1: "[HU] Ich danke DIR (nicht dich!)",
    t9_h2: "[HU] Mir ist kalt.",
    t9_sent9: "[HU] Ich helfe ___.",
    t9_c9_1: "[HU] dir", t9_c9_2: "[HU] dich", t9_c9_3: "[HU] du", t9_c9_4: "[HU] dein",

    // T10: Wo? Dativ des Ortes
    t10_title: "[HU] Wo? (Dativ des Ortes)",
    t10_text: "[HU] Wenn wir fragen 'Wo?' (Ort), benutzen wir Dativ. Auf dem Tisch (Wo?), neben dem Baum (Wo?).",
    t10_b1: "[HU] Wo? ➔ Dativ (fester Ort)",
    t10_b2: "[HU] Wohin? ➔ Akkusativ (Richtung/Ziel)",
    t10_inst: "[HU] Wähle die Dativ-Form!",
    t10_h1: "[HU] Wo sitzt die Katze?",
    t10_h2: "[HU] Auf dem Sofa",
    t10_sent10: "[HU] Das Bild hängt ___ Wand.",
    t10_c10_1: "[HU] an der", t10_c10_2: "[HU] an die", t10_c10_3: "[HU] auf der", t10_c10_4: "[HU] in der",

    // T11: Verben mit Dativ
    t11_title: "[HU] Verben mit Dativ",
    t11_text: "[HU] Manche Verben brauchen ein Dativ-Objekt! danken, helfen, geben, zeigen. 'Ich danke DIR.'",
    t11_b1: "[HU] danken, helfen, geben brauchen Dativ",
    t11_b2: "[HU] nicht Akkusativ!",
    t11_inst: "[HU] Finde das Dativ-Objekt!",
    t11_h1: "[HU] Welches Verb braucht Dativ?",
    t11_h2: "[HU] Ich helfe dem Lehrer.",
    t11_w1: "[HU] Die Lehrerin", t11_w2: "[HU] hilft", t11_w3: "[HU] dem Schüler", t11_w4: "[HU] .",

    // T12: Dativ-Sätze bauen
    t12_title: "[HU] Sätze mit Dativ",
    t12_text: "[HU] Sätze mit Dativ-Objekten: 'Anna gibt IHRER FREUNDIN ein Buch.' Wem? Der Freundin (Dativ).",
    t12_b1: "[HU] Nominativ + Verb + Dativ",
    t12_b2: "[HU] Normale Satzstruktur mit Dativ",
    t12_inst: "[HU] Baue den Satz im Dativ zusammen!",
    t12_h1: "[HU] Wem? Das ist Dativ!",
    t12_h2: "[HU] Der Junge zeigt dem Mädchen sein Spielzeug.",
    t12_f1: "[HU] Der Junge", t12_f2: "[HU] zeigt", t12_f3: "[HU] dem Mädchen", t12_f4: "[HU] sein Spielzeug.",

    // T13: Dativ oder Akkusativ?
    t13_title: "[HU] Dativ vs. Akkusativ",
    t13_text: "[HU] Manche Präpositionen sind flexibel! 'auf' kann beides sein: Wo? (Dativ) oder Wohin? (Akkusativ). auf dem Stuhl (Dativ) vs. auf den Stuhl (Akkusativ).",
    t13_b1: "[HU] in, auf, unter sind flexibel",
    t13_b2: "[HU] Wo? Dativ / Wohin? Akkusativ",
    t13_inst: "[HU] Ist es Dativ oder Akkusativ?",
    t13_h1: "[HU] Frag: Wo oder Wohin?",
    t13_h2: "[HU] Auf dem Stuhl = Wo = Dativ",
    t13_sent13: "[HU] Der Hund springt ___ das Sofa.",
    t13_c13_1: "[HU] auf das", t13_c13_2: "[HU] auf dem", t13_c13_3: "[HU] in das", t13_c13_4: "[HU] in dem",

    // T14: Dativ-Spezialfall Pronomen
    t14_title: "[HU] Dativ-Pronomen auswendig",
    t14_text: "[HU] Dativ-Pronomen sind wichtig! ich→mir, du→dir, er→ihm, sie→ihr, es→ihm, wir→uns, ihr→euch, sie→ihnen.",
    t14_b1: "[HU] Alle Dativ-Pronomen lernen",
    t14_b2: "[HU] Nicht mit Nominativ verwechseln",
    t14_inst: "[HU] Welches Pronomen ist im Dativ?",
    t14_h1: "[HU] Dativ = mir, dir, ihm, ihr, uns, euch, ihnen",
    t14_h2: "[HU] Ich danke IHNEN (nicht sie!)",
    t14_sent14: "[HU] Der Lehrer erklärt ___ den Stoff.",
    t14_c14_1: "[HU] uns", t14_c14_2: "[HU] wir", t14_c14_3: "[HU] unsere", t14_c14_4: "[HU] unse",

    // T15: Dativ-Profi
    t15_title: "[HU] Du bist ein Dativ-Profi!",
    t15_text: "[HU] Du kennst Dativ-Artikel, Dativ-Pronomen, Dativ-Präpositionen und Dativ-Verben. Du beherrschst den Dativ komplett!",
    t15_b1: "[HU] Alle Dativ-Regeln gelernt",
    t15_b2: "[HU] Artikel, Pronomen, Präpositionen, Verben",
    t15_inst: "[HU] Zeige dein Dativ-Wissen!",
    t15_h1: "[HU] Wem? Das ist immer Dativ!",
    t15_h2: "[HU] dem Mann, mir, mit dir, helfen",
    t15_sent15: "[HU] Anna schenkt ___ eine Kette.",
    t15_c15_1: "[HU] ihrer Mutter", t15_c15_2: "[HU] ihre Mutter", t15_c15_3: "[HU] ihren Mutter", t15_c15_4: "[HU] ihr Mutter",
  
  },
  ro: {

    explorer_title: "[RO] Dativ-Dschungel (Wem?)",

    // T1: Der 3. Fall (Dativ)
    t1_title: "[RO] Was ist der Dativ?",
    t1_text: "[RO] Der Dativ ist der 3. Fall. Wir benutzen ihn oft, wenn wir jemandem etwas geben oder helfen. Die Frage lautet immer: WEM oder WAS?",
    t1_b1: "[RO] Frage: Wem oder was?",
    t1_b2: "[RO] Oft das 'Ziel' einer Gabe oder Hilfe.",
    t1_inst: "[RO] Finde das Nomen im Dativ!",
    t1_h1: "[RO] Frage: WEM hilft das Kind?",
    t1_h2: "[RO] Es hilft 'dem Opa'.",
    t1_w1: "[RO] Das Kind", t1_w2: "[RO] hilft", t1_w3: "[RO] dem Opa", t1_w4: "[RO] .",
    // Quiz: GENERATOR (dativ)

    // T2: Artikel im Dativ
    t2_title: "[RO] Die Artikel ändern sich",
    t2_text: "[RO] Im Dativ verändern sich alle Artikel! Der und Das werden zu 'dem'. Die wird zu 'der'. Und im Plural? Da wird 'die' zu 'den' und das Nomen bekommt oft ein extra -n!",
    t2_b1: "[RO] der / das ➔ dem",
    t2_b2: "[RO] die ➔ der",
    t2_b3: "[RO] Plural: die ➔ den (...n)",
    t2_inst: "[RO] Verbinde den Nominativ mit dem richtigen Dativ!",
    t2_h1: "[RO] Überlege: Was wird aus 'der' und 'die'?",
    t2_h2: "[RO] der -> dem, die -> der.",
    t2_l1: "[RO] der Hund", t2_r1: "[RO] dem Hund",
    t2_l2: "[RO] die Katze", t2_r2: "[RO] der Katze",
    t2_l3: "[RO] das Haus", t2_r3: "[RO] dem Haus",
    t2_l4: "[RO] die Kinder", t2_r4: "[RO] den Kindern",
    // Quiz: GENERATOR (dativ)

    // T3: Verben mit Dativ
    t3_title: "[RO] Besondere Verben",
    t3_text: "[RO] Einige Verben brauchen immer den Dativ. Man kann sie sich wie 'Dativ-Magneten' vorstellen: helfen, danken, gehören, gratulieren.",
    t3_b1: "[RO] helfen + Dativ",
    t3_b2: "[RO] gehören + Dativ",
    t3_inst: "[RO] Welches Wort passt in die Lücke?",
    t3_h1: "[RO] Das Verb 'gehören' braucht den Dativ von 'der Junge'.",
    t3_h2: "[RO] Es heißt 'dem Jungen'.",
    t3_sent: "[RO] Das Fahrrad gehört ___.",
    t3_c1: "[RO] dem Jungen", t3_c2: "[RO] den Jungen", t3_c3: "[RO] der Junge", t3_c4: "[RO] des Jungen",
    // Quiz: GENERATOR (dativ)

    // T4: Präpositionen mit Dativ
    t4_title: "[RO] Dativ-Präpositionen",
    t4_text: "[RO] Es gibt Wörter, nach denen IMMER der Dativ kommt. Merk dir den Spruch: 'Mit, nach, von, seit, aus, zu, bei - schreibt man stets mit Fall Nummer 3!'",
    t4_b1: "[RO] aus, bei, mit, nach, seit, von, zu.",
    t4_inst: "[RO] Sortiere die Dativ-Präpositionen in den Korb!",
    t4_h1: "[RO] Suche nach Wörtern wie 'mit', 'von' oder 'zu'.",
    t4_h2: "[RO] Diese Wörter verlangen immer den 3. Fall.",
    t4_target: "[RO] Dativ-Starter 🧺",
    t4_i1: "[RO] mit", t4_i2: "[RO] nach", t4_i3: "[RO] von", t4_i4: "[RO] für (Akk)",
    // Quiz: MANUAL
    t4_q: "[RO] Welches Wort gehört NICHT zu den Dativ-Präpositionen?",
    t4_qa: "[RO] für", t4_qb: "[RO] mit", t4_qc: "[RO] bei", t4_qd: "[RO] seit",

    // T5: Pronomen im Dativ
    t5_title: "[RO] Mir, dir, ihm, ihr",
    t5_text: "[RO] Auch die Fürwörter (Pronomen) ändern sich im Dativ. Aus 'ich' wird 'mir', aus 'du' wird 'dir'.",
    t5_b1: "[RO] ich ➔ mir",
    t5_b2: "[RO] du ➔ dir",
    t5_inst: "[RO] Welches Pronomen passt hier?",
    t5_h1: "[RO] Wenn ich dir danke, sage ich: Ich danke...",
    t5_h2: "[RO] Ich danke 'dir'.",
    t5_sent_p: "[RO] Ich danke ___ für das Geschenk.",
    t5_cp1: "[RO] dir", t5_cp2: "[RO] dich", t5_cp3: "[RO] du", t5_cp4: "[RO] dein",
    // Quiz: MANUAL
    t5_q: "[RO] Was ist der Dativ von 'wir'?",
    t5_qa: "[RO] uns", t5_qb: "[RO] euch", t5_qc: "[RO] wir", t5_qd: "[RO] unser",

    // T6: Wo oder Wohin?
    t6_title: "[RO] Wo? (Dativ)",
    t6_text: "[RO] Wenn wir nach einem festen Ort fragen (Wo?), benutzen wir den Dativ. 'Ich bin IN DER Schule.' (Wo? -> Schule ist weiblich, also 'der').",
    t6_b1: "[RO] Wo? ➔ Dativ (Ort)",
    t6_b2: "[RO] Wohin? ➔ Akkusativ (Richtung)",
    t6_inst: "[RO] Baue den Satz im Dativ zusammen!",
    t6_h1: "[RO] Frage: Wo sitzt die Katze?",
    t6_h2: "[RO] Auf dem Tisch (Dativ).",
    t6_f1: "[RO] Die Katze", t6_f2: "[RO] sitzt", t6_f3: "[RO] auf dem Tisch.",
    // Quiz: GENERATOR (dativ)

    // T7: Physics Bucket (Catch the Dative!)
    t7_title: "[RO] Dativ-Fänger",
    t7_text: "[RO] Jetzt wird es schnell! Fange nur die Wörter, die im Dativ stehen. Achte auf 'dem', 'der' und 'mir'!",
    t7_b1: "[RO] Fange dem, der, den, mir, dir.",
    t7_inst: "[RO] Bewege den Korb und fange die Dativ-Wörter!",
    t7_h1: "[RO] Achte auf die typischen Dativ-Endungen.",
    t7_h2: "[RO] dem Baum, der Frau, mir.",
    t7_i1: "[RO] dem Baum", t7_i2: "[RO] der Frau", t7_i3: "[RO] mir", t7_i4: "[RO] den Hund (Akk)",

    // T8: Dativ-Präpositionen (mit, bei, nach)
    t8_title: "[RO] Dativ-Präpositionen",
    t8_text: "[RO] Mit, bei, nach, von, zu brauchen immer Dativ! mit meinem Freund, bei meiner Oma, nach der Schule.",
    t8_b1: "[RO] Mit, bei, nach + Dativ",
    t8_b2: "[RO] Präposition zeigt den Fall",
    t8_inst: "[RO] Wähle die richtige Dativ-Form!",
    t8_h1: "[RO] Nach welcher Präposition kommt Dativ?",
    t8_h2: "[RO] Nach der Schule, bei dem Arzt",
    t8_sent8: "[RO] Ich treffe mich ___ meinen Freunden.",
    t8_c8_1: "[RO] mit den", t8_c8_2: "[RO] mit den", t8_c8_3: "[RO] den", t8_c8_4: "[RO] zu den",

    // T9: Dativ-Pronomen
    t9_title: "[RO] Dativ-Pronomen (mir, dir, ihm, ihr)",
    t9_text: "[RO] Pronomen verändern sich auch im Dativ! ich➔mir, du➔dir, er➔ihm, sie➔ihr, es➔ihm.",
    t9_b1: "[RO] Pronomen ändern sich im Dativ",
    t9_b2: "[RO] mir, dir, ihm, ihr, uns, euch",
    t9_inst: "[RO] Welches Pronomen passt?",
    t9_h1: "[RO] Ich danke DIR (nicht dich!)",
    t9_h2: "[RO] Mir ist kalt.",
    t9_sent9: "[RO] Ich helfe ___.",
    t9_c9_1: "[RO] dir", t9_c9_2: "[RO] dich", t9_c9_3: "[RO] du", t9_c9_4: "[RO] dein",

    // T10: Wo? Dativ des Ortes
    t10_title: "[RO] Wo? (Dativ des Ortes)",
    t10_text: "[RO] Wenn wir fragen 'Wo?' (Ort), benutzen wir Dativ. Auf dem Tisch (Wo?), neben dem Baum (Wo?).",
    t10_b1: "[RO] Wo? ➔ Dativ (fester Ort)",
    t10_b2: "[RO] Wohin? ➔ Akkusativ (Richtung/Ziel)",
    t10_inst: "[RO] Wähle die Dativ-Form!",
    t10_h1: "[RO] Wo sitzt die Katze?",
    t10_h2: "[RO] Auf dem Sofa",
    t10_sent10: "[RO] Das Bild hängt ___ Wand.",
    t10_c10_1: "[RO] an der", t10_c10_2: "[RO] an die", t10_c10_3: "[RO] auf der", t10_c10_4: "[RO] in der",

    // T11: Verben mit Dativ
    t11_title: "[RO] Verben mit Dativ",
    t11_text: "[RO] Manche Verben brauchen ein Dativ-Objekt! danken, helfen, geben, zeigen. 'Ich danke DIR.'",
    t11_b1: "[RO] danken, helfen, geben brauchen Dativ",
    t11_b2: "[RO] nicht Akkusativ!",
    t11_inst: "[RO] Finde das Dativ-Objekt!",
    t11_h1: "[RO] Welches Verb braucht Dativ?",
    t11_h2: "[RO] Ich helfe dem Lehrer.",
    t11_w1: "[RO] Die Lehrerin", t11_w2: "[RO] hilft", t11_w3: "[RO] dem Schüler", t11_w4: "[RO] .",

    // T12: Dativ-Sätze bauen
    t12_title: "[RO] Sätze mit Dativ",
    t12_text: "[RO] Sätze mit Dativ-Objekten: 'Anna gibt IHRER FREUNDIN ein Buch.' Wem? Der Freundin (Dativ).",
    t12_b1: "[RO] Nominativ + Verb + Dativ",
    t12_b2: "[RO] Normale Satzstruktur mit Dativ",
    t12_inst: "[RO] Baue den Satz im Dativ zusammen!",
    t12_h1: "[RO] Wem? Das ist Dativ!",
    t12_h2: "[RO] Der Junge zeigt dem Mädchen sein Spielzeug.",
    t12_f1: "[RO] Der Junge", t12_f2: "[RO] zeigt", t12_f3: "[RO] dem Mädchen", t12_f4: "[RO] sein Spielzeug.",

    // T13: Dativ oder Akkusativ?
    t13_title: "[RO] Dativ vs. Akkusativ",
    t13_text: "[RO] Manche Präpositionen sind flexibel! 'auf' kann beides sein: Wo? (Dativ) oder Wohin? (Akkusativ). auf dem Stuhl (Dativ) vs. auf den Stuhl (Akkusativ).",
    t13_b1: "[RO] in, auf, unter sind flexibel",
    t13_b2: "[RO] Wo? Dativ / Wohin? Akkusativ",
    t13_inst: "[RO] Ist es Dativ oder Akkusativ?",
    t13_h1: "[RO] Frag: Wo oder Wohin?",
    t13_h2: "[RO] Auf dem Stuhl = Wo = Dativ",
    t13_sent13: "[RO] Der Hund springt ___ das Sofa.",
    t13_c13_1: "[RO] auf das", t13_c13_2: "[RO] auf dem", t13_c13_3: "[RO] in das", t13_c13_4: "[RO] in dem",

    // T14: Dativ-Spezialfall Pronomen
    t14_title: "[RO] Dativ-Pronomen auswendig",
    t14_text: "[RO] Dativ-Pronomen sind wichtig! ich→mir, du→dir, er→ihm, sie→ihr, es→ihm, wir→uns, ihr→euch, sie→ihnen.",
    t14_b1: "[RO] Alle Dativ-Pronomen lernen",
    t14_b2: "[RO] Nicht mit Nominativ verwechseln",
    t14_inst: "[RO] Welches Pronomen ist im Dativ?",
    t14_h1: "[RO] Dativ = mir, dir, ihm, ihr, uns, euch, ihnen",
    t14_h2: "[RO] Ich danke IHNEN (nicht sie!)",
    t14_sent14: "[RO] Der Lehrer erklärt ___ den Stoff.",
    t14_c14_1: "[RO] uns", t14_c14_2: "[RO] wir", t14_c14_3: "[RO] unsere", t14_c14_4: "[RO] unse",

    // T15: Dativ-Profi
    t15_title: "[RO] Du bist ein Dativ-Profi!",
    t15_text: "[RO] Du kennst Dativ-Artikel, Dativ-Pronomen, Dativ-Präpositionen und Dativ-Verben. Du beherrschst den Dativ komplett!",
    t15_b1: "[RO] Alle Dativ-Regeln gelernt",
    t15_b2: "[RO] Artikel, Pronomen, Präpositionen, Verben",
    t15_inst: "[RO] Zeige dein Dativ-Wissen!",
    t15_h1: "[RO] Wem? Das ist immer Dativ!",
    t15_h2: "[RO] dem Mann, mir, mit dir, helfen",
    t15_sent15: "[RO] Anna schenkt ___ eine Kette.",
    t15_c15_1: "[RO] ihrer Mutter", t15_c15_2: "[RO] ihre Mutter", t15_c15_3: "[RO] ihren Mutter", t15_c15_4: "[RO] ihr Mutter",
  
  }
};

export const DATIV_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🎁", title: "Wem gebe ich es?", bg: "#F1F5F9" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2], // dem Opa
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [
      { text: "die ➔ der", color: "#B91C1C", bg: "#FEE2E2" },
      { text: "das ➔ dem", color: "#1E40AF", bg: "#DBEAFE" }
    ]},
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
        { left: "t2_l4", right: "t2_r4" },
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "helfen", highlightChars: ["f", "e", "n"], color: "#8B5CF6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "🛣️", label: "nach" }, { emoji: "🤝", label: "mit" }] },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "d", label: "t4_target" }],
      items: [
        { text: "t4_i1", bucketId: "d" },
        { text: "t4_i2", bucketId: "d" },
        { text: "t4_i3", bucketId: "d" },
        { text: "t4_i4", bucketId: "none" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-pairs", pairs: [["ich", "mir"], ["du", "dir"]], color: "#EC4899" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent_p",
      choices: ["t5_cp1", "t5_cp2", "t5_cp3", "t5_cp4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Die Katze", "sitzt", "auf dem Tisch"], highlightIndices: [2], color: "#F59E0B" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3"],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "dativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧺", title: "Dativ-Fänger", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-bucket",
      buckets: [{ id: "d", label: "Dativ" }],
      items: [
        { text: "t7_i1", bucketId: "d" },
        { text: "t7_i2", bucketId: "d" },
        { text: "t7_i3", bucketId: "d" },
        { text: "t7_i4", bucketId: "wrong" },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 8. Dativ-Präpositionen (gap-fill) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "mit, bei, nach + Dativ", color: "#1D4ED8", bg: "#DBEAFE" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_sent8",
      choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"],
      correctIndex: 0,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 9. Dativ-Pronomen (gap-fill) ───────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "letter-pairs", pairs: [["ich", "mir"], ["du", "dir"], ["er", "ihm"]], color: "#10B981" },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent9",
      choices: ["t9_c9_1", "t9_c9_2", "t9_c9_3", "t9_c9_4"],
      correctIndex: 0,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 10. Wo? Dativ-Ort (gap-fill) ───────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📍", title: "Wo? (Dativ)", bg: "#FEE2E2" },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent10",
      choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 11. Verben mit Dativ (highlight-text) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "danken, helfen, geben", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [2], // dem Schüler
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 12. Dativ-Sätze (sentence-build) ───────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "simple-icon", icon: "👤➡️👤", title: "Dativ-Satz", bg: "#E0F2FE" },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t12_f1", "t12_f2", "t12_f3", "t12_f4"],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 13. Dativ vs. Akkusativ (gap-fill) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "Wo? (Dat) Wohin? (Akk)", highlightChars: ["W"], color: "#F59E0B" },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent13",
      choices: ["t13_c13_1", "t13_c13_2", "t13_c13_3", "t13_c13_4"],
      correctIndex: 0,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 14. Dativ-Pronomen Vertiefung (gap-fill) ───────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🎯", title: "mir, dir, ihm...", bg: "#FEFCE8" },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_sent14",
      choices: ["t14_c14_1", "t14_c14_2", "t14_c14_3", "t14_c14_4"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 15. Dativ-Profi (gap-fill) ────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent15",
      choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "dativ" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Zeitformeninsel (K4)
// Thema: Präsens, Präteritum, Perfekt, Futur I (werden + Infinitiv)
// ─────────────────────────────────────────────────────────────────────────────

export const ZEITFORM4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit-Reisende K4",

    // T1: Die Zeitformen im Überblick
    t1_title: "Die vier Zeiten",
    t1_text: "In der 4. Klasse beherrschen wir vier Zeitformen: Präsens (Gegenwart), Präteritum (Erzähl-Vergangenheit), Perfekt (Sprech-Vergangenheit) und neu: das Futur I (Zukunft).",
    t1_b1: "Präsens: Ich spiele.",
    t1_b2: "Vergangenheit: Ich spielte / Ich habe gespielt.",
    t1_b3: "Zukunft: Ich werde spielen.",
    t1_inst: "Welches Wort gehört zur Zukunft (Futur)?",
    t1_h1: "Suche nach einem Wort, das 'später' bedeutet.",
    t1_h2: "Das Wort 'morgen' deutet auf die Zukunft hin.",
    t1_w1: "morgen", t1_w2: "gestern", t1_w3: "heute", t1_w4: "damals",
    // Quiz: GENERATOR (praeteritum)

    // T2: Das Futur I (Zukunft)
    t2_title: "Das Futur I",
    t2_text: "Wir benutzen das Futur I, wenn wir über Pläne oder Vermutungen in der Zukunft sprechen. Es besteht immer aus zwei Teilen: werden + Grundform.",
    t2_b1: "Helfer: werden (gebeugt).",
    t2_b2: "Hauptverb: Grundform (am Satzende).",
    t2_inst: "Finde das Futur I in diesem Satz!",
    t2_h1: "Suche nach der Kombination aus 'wird' und einem Verb am Ende.",
    t2_h2: "'wird regnen' ist das Futur I.",
    t2_w2_1: "Es", t2_w2_2: "wird", t2_w2_3: "morgen", t2_w2_4: "regnen", t2_w2_5: ".",
    // Quiz: MANUAL
    t2_q: "Aus welchen zwei Teilen besteht das Futur I?",
    t2_qa: "werden + Grundform", t2_qb: "haben + Partizip", t2_qc: "sein + Partizip", t2_qd: "nur die Grundform",

    // T3: 'werden' konjugieren
    t3_title: "Das Hilfsverb 'werden'",
    t3_text: "Das Wort 'werden' ist der Motor für die Zukunft. Es verändert sich je nachdem, wer etwas tun wird: ich werde, du wirst, er wird, wir werden...",
    t3_b1: "ich werde, du wirst, er wird.",
    t3_b2: "wir werden, ihr werdet, sie werden.",
    t3_inst: "Welche Form von 'werden' passt hier?",
    t3_h1: "Das Subjekt ist 'Du'.",
    t3_h2: "Es heißt: Du 'wirst'.",
    t3_sent: "Du ___ später ein Profi sein.",
    t3_c1: "wirst", t3_c2: "werde", t3_c3: "werden", t3_c4: "werdet",
    // Quiz: GENERATOR (verben_k3)

    // T4: Satzbau im Futur
    t4_title: "Satzbau im Futur",
    t4_text: "Achtung! Das Hilfsverb 'werden' steht an 2. Stelle, aber das eigentliche Tunwort (die Grundform) rutscht ganz ans Ende des Satzes.",
    t4_b1: "werden ➔ Platz 2.",
    t4_b2: "Infinitiv ➔ Satzende.",
    t4_inst: "Baue den Satz im Futur zusammen!",
    t4_h1: "Beginne mit 'Wir', dann 'werden'. Das Verb 'lernen' kommt ans Ende.",
    t4_h2: "Wir werden morgen lernen.",
    t4_f1: "Wir", t4_f2: "werden", t4_f3: "morgen", t4_f4: "lernen.",
    // Quiz: MANUAL
    t4_q: "Wo steht das Hauptverb im Futur I?",
    t4_qa: "Ganz am Ende", t4_qb: "An zweiter Stelle", t4_qc: "Direkt nach 'werden'", t4_qd: "Am Satzanfang",

    // T5: Zeitformen-Check (Sortieren)
    t5_title: "Zeiten-Sortierer",
    t5_text: "Kannst du alle vier Zeiten unterscheiden? Gestern (Vergangenheit), Heute (Präsens) und Morgen (Futur).",
    t5_b1: "ich lerne (Präsens)",
    t5_b2: "ich lernte (Präteritum)",
    t5_b3: "ich werde lernen (Futur)",
    t5_inst: "Sortiere die Sätze in die richtige Zeitform!",
    t5_h1: "Achte auf 'wird' (Futur) und die Vergangenheitsformen.",
    t5_h2: "ich spiele -> Präsens. ich habe gespielt -> Perfekt.",
    t5_b_past: "Vergangenheit 🔙", t5_b_pres: "Präsens 🏠", t5_b_fut: "Futur 🚀",
    t5_i1: "ich lachte", t5_i2: "ich lache", t5_i3: "ich werde lachen", t5_i4: "ich habe gelacht",
    // Quiz: GENERATOR (perfekt)

    // T6: Futur I Profi
    t6_title: "Futur-Profi",
    t6_text: "Das Futur nutzen wir auch für Versprechen: 'Ich werde meine Hausaufgaben machen.' Oder für Vorhersagen: 'Es wird bald schneien.'",
    t6_b1: "Versprechen & Vorhersagen.",
    t6_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "Der Satzanfang ist groß (Ich).",
    t6_h2: "Ich werde dir helfen.",
    t6_o1: "Ich", t6_o2: "werde", t6_o3: "dir", t6_o4: "helfen.",
    // Quiz: GENERATOR (praeteritum)

    // T7: Slingshot Challenge (Physics!)
    t7_title: "Futur-Schleuder",
    t7_text: "Nur die Sätze im Futur I bringen Punkte! Schieße auf die richtigen Ziele.",
    t7_b1: "Suche nach Sätzen mit 'werden' + Verb am Ende.",
    t7_inst: "Schieße auf die Futur-Sätze!",
    t7_h1: "Ein Futur-Satz braucht immer eine Form von 'werden'.",
    t7_h2: "Er wird gehen, Wir werden spielen.",
    t7_m1: "Er wird gehen", t7_m2: "Wir werden spielen", t7_m3: "Ich lerne", t7_m4: "Du hast gelacht",

    // T8: Präteritum vs. Perfekt (Erzähl vs. Sprech)
    t8_title: "Präteritum vs. Perfekt",
    t8_text: "Beide sprechen von der Vergangenheit, aber Präteritum ist mehr für Geschichten (Es war einmal), Perfekt ist für Gespräche (Ich habe es gerade getan).",
    t8_b1: "Präteritum: Es spielte gern. (Erzählform)",
    t8_b2: "Perfekt: Es hat gespielt. (Sprechform)",
    t8_inst: "Wähle die richtige Form!",
    t8_h1: "Was ist mehr: Geschichte oder Gespräch?",
    t8_h2: "Der Frosch sprang = Präteritum (Geschichte)",
    t8_sent: "Der Hund ___.",
    t8_c1: "lief (Präteritum)", t8_c2: "ist gelaufen (Perfekt)", t8_c3: "läuft", t8_c4: "wird laufen",

    // T9: Plusquamperfekt (Vorzeitigkeit)
    t9_title: "Plusquamperfekt (Vorvergangenheit)",
    t9_text: "Das Plusquamperfekt benutzen wir selten im Deutschen, aber du solltest es erkennen: hatte/war + Partizip II. Es ist 'älter' als Perfekt.",
    t9_b1: "hatte / war + Partizip",
    t9_b2: "Noch älter als das Perfekt",
    t9_inst: "Erkenne das Plusquamperfekt!",
    t9_h1: "Suche nach hatte oder war + Partizip.",
    t9_h2: "Ich hatte es gemacht.",
    t9_w1: "Der Junge", t9_w2: "hatte", t9_w3: "das Spiel", t9_w4: "vorbereitet", t9_w5: ".",

    // T10: Starke vs. schwache Verben
    t10_title: "Starke vs. schwache Verben",
    t10_text: "Manche Verben sind 'stark' und ändern ihren Stammvokal: sprechen -> sprach -> hat gesprochen. Schwache Verben machen immer dasselbe: spielen -> spielte -> hat gespielt.",
    t10_b1: "Starke: Stammvokal ändert sich",
    t10_b2: "Schwache: -te und -t",
    t10_inst: "Sortiere die Zeitformen der starken und schwachen Verben!",
    t10_h1: "Starke Verben: sprechen -> sprach -> gesprochen",
    t10_h2: "Schwache: spielen -> spielte -> gespielt",
    t10_l: "Stark", t10_r: "Schwach",
    t10_v1: "sprang", t10_v2: "fragte", t10_v3: "rannte", t10_v4: "öffnete",

    // T11: Futur II (Vorzukunft - selten)
    t11_title: "Futur II (Was wird getan sein?)",
    t11_text: "Das Futur II ist selten, aber eine gute Übung: werden + haben/sein + Partizip. 'Bis dahin wird er schon gegangen sein.'",
    t11_b1: "werden + haben/sein + Partizip II",
    t11_b2: "Sehr selten im Alltag",
    t11_inst: "Erkenne das Futur II!",
    t11_h1: "werden + Partizip II + sein/haben",
    t11_h2: "Ich werde das getan haben.",
    t11_text2: "Bis nächste Woche wird er die Aufgabe ___ ___.",
    t11_c1: "getan haben", t11_c2: "tun werden", t11_c3: "getan", t11_c4: "hat getan",

    // T12: Modalverben in Präteritum
    t12_title: "Modalverben im Präteritum",
    t12_text: "Modalverben (wollen, können, müssen, dürfen, sollen, mögen) haben im Präteritum oft einen Umlautsverlust: konnte (nicht: könnte), musste (nicht: müsste).",
    t12_b1: "können -> konnte",
    t12_b2: "müssen -> musste",
    t12_inst: "Wähle die richtige Präteritum-Form!",
    t12_h1: "Achte: Der Umlaut verschwindet oft!",
    t12_h2: "Ich könnte nicht (Konjunktiv) vs. ich konnte nicht (Präteritum)",
    t12_sent: "Ich ___ nicht schwimmen.",
    t12_ca1: "konnte", t12_ca2: "könnte", t12_ca3: "kann", t12_ca4: "werde können",

    // T13: Konjunktiv II (Hätte, würde...)
    t13_title: "Konjunktiv II (Wenn es anders wäre)",
    t13_text: "Wir benutzen Konjunktiv II für irreale Wünsche: 'Wenn ich reich wäre, würde ich reisen.' oder Höflichkeit: 'Könntest du mir helfen?'",
    t13_b1: "würde + Infinitiv oder hätte/wäre + Partizip",
    t13_b2: "Nicht wirklich, nur Traum",
    t13_inst: "Wähle den Konjunktiv II!",
    t13_h1: "Suche nach 'würde', 'hätte' oder 'wäre'.",
    t13_h2: "Ich würde gerne..., Wenn ich Zeit hätte...",
    t13_sent2: "Wenn es regnen ___, würde ich zuhause bleiben.",
    t13_ca1: "würde", t13_ca2: "regnete", t13_ca3: "wäre", t13_ca4: "regnet",
    t13_q: "Was beschreibt der Konjunktiv II?",
    t13_qa: "Irreale Wünsche und Bedingungen", t13_qb: "Zukünftige Handlungen", t13_qc: "Vergangene Ereignisse", t13_qd: "Fragen",

    // T14: Passiv im Präsens
    t14_title: "Passiv (Wird gemacht statt macht)",
    t14_text: "Im Passiv ist das Objekt wichtig, nicht der Täter. Aktiv: Der Koch kocht das Essen. Passiv: Das Essen wird gekocht.",
    t14_b1: "werden + Partizip II",
    t14_b2: "Fokus auf die Aktion, nicht den Täter",
    t14_inst: "Erkenne das Passiv!",
    t14_h1: "Suche nach 'wird' oder 'werden' + Partizip.",
    t14_h2: "Das Fenster wird geöffnet.",
    t14_sent3: "Der Brief ___.",
    t14_cb1: "wird geschrieben", t14_cb2: "schreibt", t14_cb3: "ist geschrieben", t14_cb4: "schreiben",

    // T15: Zeitformen-Profi Mix
    t15_title: "Du bist ein Zeit-Profi!",
    t15_text: "Du kennst Präsens, Präteritum, Perfekt, Futur I, Passiv und Konjunktiv. Du beherrschst die Zeiten komplett!",
    t15_b1: "Alle Zeitformen gelernt",
    t15_b2: "Aktiv, Passiv, Konjunktiv",
    t15_inst: "Zeige dein Zeit-Wissen!",
    t15_h1: "Denke an alle Zeitformen die du gelernt hast.",
    t15_h2: "Präsens, Präteritum, Perfekt, Futur, Passiv...",
    t15_sent4: "Morgen ___ wir ins Kino ___.",
    t15_cc1: "werden gehen", t15_cc2: "gehen werden", t15_cc3: "sind gegangen", t15_cc4: "gingen",
  },
  en: {

    explorer_title: "[EN] Zeit-Reisende K4",

    // T1: Die Zeitformen im Überblick
    t1_title: "[EN] Die vier Zeiten",
    t1_text: "[EN] In der 4. Klasse beherrschen wir vier Zeitformen: Präsens (Gegenwart), Präteritum (Erzähl-Vergangenheit), Perfekt (Sprech-Vergangenheit) und neu: das Futur I (Zukunft).",
    t1_b1: "[EN] Präsens: Ich spiele.",
    t1_b2: "[EN] Vergangenheit: Ich spielte / Ich habe gespielt.",
    t1_b3: "[EN] Zukunft: Ich werde spielen.",
    t1_inst: "[EN] Welches Wort gehört zur Zukunft (Futur)?",
    t1_h1: "[EN] Suche nach einem Wort, das 'später' bedeutet.",
    t1_h2: "[EN] Das Wort 'morgen' deutet auf die Zukunft hin.",
    t1_w1: "[EN] morgen", t1_w2: "[EN] gestern", t1_w3: "[EN] heute", t1_w4: "[EN] damals",
    // Quiz: GENERATOR (praeteritum)

    // T2: Das Futur I (Zukunft)
    t2_title: "[EN] Das Futur I",
    t2_text: "[EN] Wir benutzen das Futur I, wenn wir über Pläne oder Vermutungen in der Zukunft sprechen. Es besteht immer aus zwei Teilen: werden + Grundform.",
    t2_b1: "[EN] Helfer: werden (gebeugt).",
    t2_b2: "[EN] Hauptverb: Grundform (am Satzende).",
    t2_inst: "[EN] Finde das Futur I in diesem Satz!",
    t2_h1: "[EN] Suche nach der Kombination aus 'wird' und einem Verb am Ende.",
    t2_h2: "[EN] 'wird regnen' ist das Futur I.",
    t2_w2_1: "[EN] Es", t2_w2_2: "[EN] wird", t2_w2_3: "[EN] morgen", t2_w2_4: "[EN] regnen", t2_w2_5: "[EN] .",
    // Quiz: MANUAL
    t2_q: "[EN] Aus welchen zwei Teilen besteht das Futur I?",
    t2_qa: "[EN] werden + Grundform", t2_qb: "[EN] haben + Partizip", t2_qc: "[EN] sein + Partizip", t2_qd: "[EN] nur die Grundform",

    // T3: 'werden' konjugieren
    t3_title: "[EN] Das Hilfsverb 'werden'",
    t3_text: "[EN] Das Wort 'werden' ist der Motor für die Zukunft. Es verändert sich je nachdem, wer etwas tun wird: ich werde, du wirst, er wird, wir werden...",
    t3_b1: "[EN] ich werde, du wirst, er wird.",
    t3_b2: "[EN] wir werden, ihr werdet, sie werden.",
    t3_inst: "[EN] Welche Form von 'werden' passt hier?",
    t3_h1: "[EN] Das Subjekt ist 'Du'.",
    t3_h2: "[EN] Es heißt: Du 'wirst'.",
    t3_sent: "[EN] Du ___ später ein Profi sein.",
    t3_c1: "[EN] wirst", t3_c2: "[EN] werde", t3_c3: "[EN] werden", t3_c4: "[EN] werdet",
    // Quiz: GENERATOR (verben_k3)

    // T4: Satzbau im Futur
    t4_title: "[EN] Satzbau im Futur",
    t4_text: "[EN] Achtung! Das Hilfsverb 'werden' steht an 2. Stelle, aber das eigentliche Tunwort (die Grundform) rutscht ganz ans Ende des Satzes.",
    t4_b1: "[EN] werden ➔ Platz 2.",
    t4_b2: "[EN] Infinitiv ➔ Satzende.",
    t4_inst: "[EN] Baue den Satz im Futur zusammen!",
    t4_h1: "[EN] Beginne mit 'Wir', dann 'werden'. Das Verb 'lernen' kommt ans Ende.",
    t4_h2: "[EN] Wir werden morgen lernen.",
    t4_f1: "[EN] Wir", t4_f2: "[EN] werden", t4_f3: "[EN] morgen", t4_f4: "[EN] lernen.",
    // Quiz: MANUAL
    t4_q: "[EN] Wo steht das Hauptverb im Futur I?",
    t4_qa: "[EN] Ganz am Ende", t4_qb: "[EN] An zweiter Stelle", t4_qc: "[EN] Direkt nach 'werden'", t4_qd: "[EN] Am Satzanfang",

    // T5: Zeitformen-Check (Sortieren)
    t5_title: "[EN] Zeiten-Sortierer",
    t5_text: "[EN] Kannst du alle vier Zeiten unterscheiden? Gestern (Vergangenheit), Heute (Präsens) und Morgen (Futur).",
    t5_b1: "[EN] ich lerne (Präsens)",
    t5_b2: "[EN] ich lernte (Präteritum)",
    t5_b3: "[EN] ich werde lernen (Futur)",
    t5_inst: "[EN] Sortiere die Sätze in die richtige Zeitform!",
    t5_h1: "[EN] Achte auf 'wird' (Futur) und die Vergangenheitsformen.",
    t5_h2: "[EN] ich spiele -> Präsens. ich habe gespielt -> Perfekt.",
    t5_b_past: "[EN] Vergangenheit 🔙", t5_b_pres: "[EN] Präsens 🏠", t5_b_fut: "[EN] Futur 🚀",
    t5_i1: "[EN] ich lachte", t5_i2: "[EN] ich lache", t5_i3: "[EN] ich werde lachen", t5_i4: "[EN] ich habe gelacht",
    // Quiz: GENERATOR (perfekt)

    // T6: Futur I Profi
    t6_title: "[EN] Futur-Profi",
    t6_text: "[EN] Das Futur nutzen wir auch für Versprechen: 'Ich werde meine Hausaufgaben machen.' Oder für Vorhersagen: 'Es wird bald schneien.'",
    t6_b1: "[EN] Versprechen & Vorhersagen.",
    t6_inst: "[EN] Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "[EN] Der Satzanfang ist groß (Ich).",
    t6_h2: "[EN] Ich werde dir helfen.",
    t6_o1: "[EN] Ich", t6_o2: "[EN] werde", t6_o3: "[EN] dir", t6_o4: "[EN] helfen.",
    // Quiz: GENERATOR (praeteritum)

    // T7: Slingshot Challenge (Physics!)
    t7_title: "[EN] Futur-Schleuder",
    t7_text: "[EN] Nur die Sätze im Futur I bringen Punkte! Schieße auf die richtigen Ziele.",
    t7_b1: "[EN] Suche nach Sätzen mit 'werden' + Verb am Ende.",
    t7_inst: "[EN] Schieße auf die Futur-Sätze!",
    t7_h1: "[EN] Ein Futur-Satz braucht immer eine Form von 'werden'.",
    t7_h2: "[EN] Er wird gehen, Wir werden spielen.",
    t7_m1: "[EN] Er wird gehen", t7_m2: "[EN] Wir werden spielen", t7_m3: "[EN] Ich lerne", t7_m4: "[EN] Du hast gelacht",

    // T8: Präteritum vs. Perfekt (Erzähl vs. Sprech)
    t8_title: "[EN] Präteritum vs. Perfekt",
    t8_text: "[EN] Beide sprechen von der Vergangenheit, aber Präteritum ist mehr für Geschichten (Es war einmal), Perfekt ist für Gespräche (Ich habe es gerade getan).",
    t8_b1: "[EN] Präteritum: Es spielte gern. (Erzählform)",
    t8_b2: "[EN] Perfekt: Es hat gespielt. (Sprechform)",
    t8_inst: "[EN] Wähle die richtige Form!",
    t8_h1: "[EN] Was ist mehr: Geschichte oder Gespräch?",
    t8_h2: "[EN] Der Frosch sprang = Präteritum (Geschichte)",
    t8_sent: "[EN] Der Hund ___.",
    t8_c1: "[EN] lief (Präteritum)", t8_c2: "[EN] ist gelaufen (Perfekt)", t8_c3: "[EN] läuft", t8_c4: "[EN] wird laufen",

    // T9: Plusquamperfekt (Vorzeitigkeit)
    t9_title: "[EN] Plusquamperfekt (Vorvergangenheit)",
    t9_text: "[EN] Das Plusquamperfekt benutzen wir selten im Deutschen, aber du solltest es erkennen: hatte/war + Partizip II. Es ist 'älter' als Perfekt.",
    t9_b1: "[EN] hatte / war + Partizip",
    t9_b2: "[EN] Noch älter als das Perfekt",
    t9_inst: "[EN] Erkenne das Plusquamperfekt!",
    t9_h1: "[EN] Suche nach hatte oder war + Partizip.",
    t9_h2: "[EN] Ich hatte es gemacht.",
    t9_w1: "[EN] Der Junge", t9_w2: "[EN] hatte", t9_w3: "[EN] das Spiel", t9_w4: "[EN] vorbereitet", t9_w5: "[EN] .",

    // T10: Starke vs. schwache Verben
    t10_title: "[EN] Starke vs. schwache Verben",
    t10_text: "[EN] Manche Verben sind 'stark' und ändern ihren Stammvokal: sprechen -> sprach -> hat gesprochen. Schwache Verben machen immer dasselbe: spielen -> spielte -> hat gespielt.",
    t10_b1: "[EN] Starke: Stammvokal ändert sich",
    t10_b2: "[EN] Schwache: -te und -t",
    t10_inst: "[EN] Sortiere die Zeitformen der starken und schwachen Verben!",
    t10_h1: "[EN] Starke Verben: sprechen -> sprach -> gesprochen",
    t10_h2: "[EN] Schwache: spielen -> spielte -> gespielt",
    t10_l: "[EN] Stark", t10_r: "[EN] Schwach",
    t10_v1: "[EN] sprang", t10_v2: "[EN] fragte", t10_v3: "[EN] rannte", t10_v4: "[EN] öffnete",

    // T11: Futur II (Vorzukunft - selten)
    t11_title: "[EN] Futur II (Was wird getan sein?)",
    t11_text: "[EN] Das Futur II ist selten, aber eine gute Übung: werden + haben/sein + Partizip. 'Bis dahin wird er schon gegangen sein.'",
    t11_b1: "[EN] werden + haben/sein + Partizip II",
    t11_b2: "[EN] Sehr selten im Alltag",
    t11_inst: "[EN] Erkenne das Futur II!",
    t11_h1: "[EN] werden + Partizip II + sein/haben",
    t11_h2: "[EN] Ich werde das getan haben.",
    t11_text2: "[EN] Bis nächste Woche wird er die Aufgabe ___ ___.",
    t11_c1: "[EN] getan haben", t11_c2: "[EN] tun werden", t11_c3: "[EN] getan", t11_c4: "[EN] hat getan",

    // T12: Modalverben in Präteritum
    t12_title: "[EN] Modalverben im Präteritum",
    t12_text: "[EN] Modalverben (wollen, können, müssen, dürfen, sollen, mögen) haben im Präteritum oft einen Umlautsverlust: konnte (nicht: könnte), musste (nicht: müsste).",
    t12_b1: "[EN] können -> konnte",
    t12_b2: "[EN] müssen -> musste",
    t12_inst: "[EN] Wähle die richtige Präteritum-Form!",
    t12_h1: "[EN] Achte: Der Umlaut verschwindet oft!",
    t12_h2: "[EN] Ich könnte nicht (Konjunktiv) vs. ich konnte nicht (Präteritum)",
    t12_sent: "[EN] Ich ___ nicht schwimmen.",
    t12_ca1: "[EN] konnte", t12_ca2: "[EN] könnte", t12_ca3: "[EN] kann", t12_ca4: "[EN] werde können",

    // T13: Konjunktiv II (Hätte, würde...)
    t13_title: "[EN] Konjunktiv II (Wenn es anders wäre)",
    t13_text: "[EN] Wir benutzen Konjunktiv II für irreale Wünsche: 'Wenn ich reich wäre, würde ich reisen.' oder Höflichkeit: 'Könntest du mir helfen?'",
    t13_b1: "[EN] würde + Infinitiv oder hätte/wäre + Partizip",
    t13_b2: "[EN] Nicht wirklich, nur Traum",
    t13_inst: "[EN] Wähle den Konjunktiv II!",
    t13_h1: "[EN] Suche nach 'würde', 'hätte' oder 'wäre'.",
    t13_h2: "[EN] Ich würde gerne..., Wenn ich Zeit hätte...",
    t13_sent2: "[EN] Wenn es regnen ___, würde ich zuhause bleiben.",
    t13_ca1: "[EN] würde", t13_ca2: "[EN] regnete", t13_ca3: "[EN] wäre", t13_ca4: "[EN] regnet",
    t13_q: "[EN] Was beschreibt der Konjunktiv II?",
    t13_qa: "[EN] Irreale Wünsche und Bedingungen", t13_qb: "[EN] Zukünftige Handlungen", t13_qc: "[EN] Vergangene Ereignisse", t13_qd: "[EN] Fragen",

    // T14: Passiv im Präsens
    t14_title: "[EN] Passiv (Wird gemacht statt macht)",
    t14_text: "[EN] Im Passiv ist das Objekt wichtig, nicht der Täter. Aktiv: Der Koch kocht das Essen. Passiv: Das Essen wird gekocht.",
    t14_b1: "[EN] werden + Partizip II",
    t14_b2: "[EN] Fokus auf die Aktion, nicht den Täter",
    t14_inst: "[EN] Erkenne das Passiv!",
    t14_h1: "[EN] Suche nach 'wird' oder 'werden' + Partizip.",
    t14_h2: "[EN] Das Fenster wird geöffnet.",
    t14_sent3: "[EN] Der Brief ___.",
    t14_cb1: "[EN] wird geschrieben", t14_cb2: "[EN] schreibt", t14_cb3: "[EN] ist geschrieben", t14_cb4: "[EN] schreiben",

    // T15: Zeitformen-Profi Mix
    t15_title: "[EN] Du bist ein Zeit-Profi!",
    t15_text: "[EN] Du kennst Präsens, Präteritum, Perfekt, Futur I, Passiv und Konjunktiv. Du beherrschst die Zeiten komplett!",
    t15_b1: "[EN] Alle Zeitformen gelernt",
    t15_b2: "[EN] Aktiv, Passiv, Konjunktiv",
    t15_inst: "[EN] Zeige dein Zeit-Wissen!",
    t15_h1: "[EN] Denke an alle Zeitformen die du gelernt hast.",
    t15_h2: "[EN] Präsens, Präteritum, Perfekt, Futur, Passiv...",
    t15_sent4: "[EN] Morgen ___ wir ins Kino ___.",
    t15_cc1: "[EN] werden gehen", t15_cc2: "[EN] gehen werden", t15_cc3: "[EN] sind gegangen", t15_cc4: "[EN] gingen",
  
  },
  hu: {

    explorer_title: "[HU] Zeit-Reisende K4",

    // T1: Die Zeitformen im Überblick
    t1_title: "[HU] Die vier Zeiten",
    t1_text: "[HU] In der 4. Klasse beherrschen wir vier Zeitformen: Präsens (Gegenwart), Präteritum (Erzähl-Vergangenheit), Perfekt (Sprech-Vergangenheit) und neu: das Futur I (Zukunft).",
    t1_b1: "[HU] Präsens: Ich spiele.",
    t1_b2: "[HU] Vergangenheit: Ich spielte / Ich habe gespielt.",
    t1_b3: "[HU] Zukunft: Ich werde spielen.",
    t1_inst: "[HU] Welches Wort gehört zur Zukunft (Futur)?",
    t1_h1: "[HU] Suche nach einem Wort, das 'später' bedeutet.",
    t1_h2: "[HU] Das Wort 'morgen' deutet auf die Zukunft hin.",
    t1_w1: "[HU] morgen", t1_w2: "[HU] gestern", t1_w3: "[HU] heute", t1_w4: "[HU] damals",
    // Quiz: GENERATOR (praeteritum)

    // T2: Das Futur I (Zukunft)
    t2_title: "[HU] Das Futur I",
    t2_text: "[HU] Wir benutzen das Futur I, wenn wir über Pläne oder Vermutungen in der Zukunft sprechen. Es besteht immer aus zwei Teilen: werden + Grundform.",
    t2_b1: "[HU] Helfer: werden (gebeugt).",
    t2_b2: "[HU] Hauptverb: Grundform (am Satzende).",
    t2_inst: "[HU] Finde das Futur I in diesem Satz!",
    t2_h1: "[HU] Suche nach der Kombination aus 'wird' und einem Verb am Ende.",
    t2_h2: "[HU] 'wird regnen' ist das Futur I.",
    t2_w2_1: "[HU] Es", t2_w2_2: "[HU] wird", t2_w2_3: "[HU] morgen", t2_w2_4: "[HU] regnen", t2_w2_5: "[HU] .",
    // Quiz: MANUAL
    t2_q: "[HU] Aus welchen zwei Teilen besteht das Futur I?",
    t2_qa: "[HU] werden + Grundform", t2_qb: "[HU] haben + Partizip", t2_qc: "[HU] sein + Partizip", t2_qd: "[HU] nur die Grundform",

    // T3: 'werden' konjugieren
    t3_title: "[HU] Das Hilfsverb 'werden'",
    t3_text: "[HU] Das Wort 'werden' ist der Motor für die Zukunft. Es verändert sich je nachdem, wer etwas tun wird: ich werde, du wirst, er wird, wir werden...",
    t3_b1: "[HU] ich werde, du wirst, er wird.",
    t3_b2: "[HU] wir werden, ihr werdet, sie werden.",
    t3_inst: "[HU] Welche Form von 'werden' passt hier?",
    t3_h1: "[HU] Das Subjekt ist 'Du'.",
    t3_h2: "[HU] Es heißt: Du 'wirst'.",
    t3_sent: "[HU] Du ___ später ein Profi sein.",
    t3_c1: "[HU] wirst", t3_c2: "[HU] werde", t3_c3: "[HU] werden", t3_c4: "[HU] werdet",
    // Quiz: GENERATOR (verben_k3)

    // T4: Satzbau im Futur
    t4_title: "[HU] Satzbau im Futur",
    t4_text: "[HU] Achtung! Das Hilfsverb 'werden' steht an 2. Stelle, aber das eigentliche Tunwort (die Grundform) rutscht ganz ans Ende des Satzes.",
    t4_b1: "[HU] werden ➔ Platz 2.",
    t4_b2: "[HU] Infinitiv ➔ Satzende.",
    t4_inst: "[HU] Baue den Satz im Futur zusammen!",
    t4_h1: "[HU] Beginne mit 'Wir', dann 'werden'. Das Verb 'lernen' kommt ans Ende.",
    t4_h2: "[HU] Wir werden morgen lernen.",
    t4_f1: "[HU] Wir", t4_f2: "[HU] werden", t4_f3: "[HU] morgen", t4_f4: "[HU] lernen.",
    // Quiz: MANUAL
    t4_q: "[HU] Wo steht das Hauptverb im Futur I?",
    t4_qa: "[HU] Ganz am Ende", t4_qb: "[HU] An zweiter Stelle", t4_qc: "[HU] Direkt nach 'werden'", t4_qd: "[HU] Am Satzanfang",

    // T5: Zeitformen-Check (Sortieren)
    t5_title: "[HU] Zeiten-Sortierer",
    t5_text: "[HU] Kannst du alle vier Zeiten unterscheiden? Gestern (Vergangenheit), Heute (Präsens) und Morgen (Futur).",
    t5_b1: "[HU] ich lerne (Präsens)",
    t5_b2: "[HU] ich lernte (Präteritum)",
    t5_b3: "[HU] ich werde lernen (Futur)",
    t5_inst: "[HU] Sortiere die Sätze in die richtige Zeitform!",
    t5_h1: "[HU] Achte auf 'wird' (Futur) und die Vergangenheitsformen.",
    t5_h2: "[HU] ich spiele -> Präsens. ich habe gespielt -> Perfekt.",
    t5_b_past: "[HU] Vergangenheit 🔙", t5_b_pres: "[HU] Präsens 🏠", t5_b_fut: "[HU] Futur 🚀",
    t5_i1: "[HU] ich lachte", t5_i2: "[HU] ich lache", t5_i3: "[HU] ich werde lachen", t5_i4: "[HU] ich habe gelacht",
    // Quiz: GENERATOR (perfekt)

    // T6: Futur I Profi
    t6_title: "[HU] Futur-Profi",
    t6_text: "[HU] Das Futur nutzen wir auch für Versprechen: 'Ich werde meine Hausaufgaben machen.' Oder für Vorhersagen: 'Es wird bald schneien.'",
    t6_b1: "[HU] Versprechen & Vorhersagen.",
    t6_inst: "[HU] Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "[HU] Der Satzanfang ist groß (Ich).",
    t6_h2: "[HU] Ich werde dir helfen.",
    t6_o1: "[HU] Ich", t6_o2: "[HU] werde", t6_o3: "[HU] dir", t6_o4: "[HU] helfen.",
    // Quiz: GENERATOR (praeteritum)

    // T7: Slingshot Challenge (Physics!)
    t7_title: "[HU] Futur-Schleuder",
    t7_text: "[HU] Nur die Sätze im Futur I bringen Punkte! Schieße auf die richtigen Ziele.",
    t7_b1: "[HU] Suche nach Sätzen mit 'werden' + Verb am Ende.",
    t7_inst: "[HU] Schieße auf die Futur-Sätze!",
    t7_h1: "[HU] Ein Futur-Satz braucht immer eine Form von 'werden'.",
    t7_h2: "[HU] Er wird gehen, Wir werden spielen.",
    t7_m1: "[HU] Er wird gehen", t7_m2: "[HU] Wir werden spielen", t7_m3: "[HU] Ich lerne", t7_m4: "[HU] Du hast gelacht",

    // T8: Präteritum vs. Perfekt (Erzähl vs. Sprech)
    t8_title: "[HU] Präteritum vs. Perfekt",
    t8_text: "[HU] Beide sprechen von der Vergangenheit, aber Präteritum ist mehr für Geschichten (Es war einmal), Perfekt ist für Gespräche (Ich habe es gerade getan).",
    t8_b1: "[HU] Präteritum: Es spielte gern. (Erzählform)",
    t8_b2: "[HU] Perfekt: Es hat gespielt. (Sprechform)",
    t8_inst: "[HU] Wähle die richtige Form!",
    t8_h1: "[HU] Was ist mehr: Geschichte oder Gespräch?",
    t8_h2: "[HU] Der Frosch sprang = Präteritum (Geschichte)",
    t8_sent: "[HU] Der Hund ___.",
    t8_c1: "[HU] lief (Präteritum)", t8_c2: "[HU] ist gelaufen (Perfekt)", t8_c3: "[HU] läuft", t8_c4: "[HU] wird laufen",

    // T9: Plusquamperfekt (Vorzeitigkeit)
    t9_title: "[HU] Plusquamperfekt (Vorvergangenheit)",
    t9_text: "[HU] Das Plusquamperfekt benutzen wir selten im Deutschen, aber du solltest es erkennen: hatte/war + Partizip II. Es ist 'älter' als Perfekt.",
    t9_b1: "[HU] hatte / war + Partizip",
    t9_b2: "[HU] Noch älter als das Perfekt",
    t9_inst: "[HU] Erkenne das Plusquamperfekt!",
    t9_h1: "[HU] Suche nach hatte oder war + Partizip.",
    t9_h2: "[HU] Ich hatte es gemacht.",
    t9_w1: "[HU] Der Junge", t9_w2: "[HU] hatte", t9_w3: "[HU] das Spiel", t9_w4: "[HU] vorbereitet", t9_w5: "[HU] .",

    // T10: Starke vs. schwache Verben
    t10_title: "[HU] Starke vs. schwache Verben",
    t10_text: "[HU] Manche Verben sind 'stark' und ändern ihren Stammvokal: sprechen -> sprach -> hat gesprochen. Schwache Verben machen immer dasselbe: spielen -> spielte -> hat gespielt.",
    t10_b1: "[HU] Starke: Stammvokal ändert sich",
    t10_b2: "[HU] Schwache: -te und -t",
    t10_inst: "[HU] Sortiere die Zeitformen der starken und schwachen Verben!",
    t10_h1: "[HU] Starke Verben: sprechen -> sprach -> gesprochen",
    t10_h2: "[HU] Schwache: spielen -> spielte -> gespielt",
    t10_l: "[HU] Stark", t10_r: "[HU] Schwach",
    t10_v1: "[HU] sprang", t10_v2: "[HU] fragte", t10_v3: "[HU] rannte", t10_v4: "[HU] öffnete",

    // T11: Futur II (Vorzukunft - selten)
    t11_title: "[HU] Futur II (Was wird getan sein?)",
    t11_text: "[HU] Das Futur II ist selten, aber eine gute Übung: werden + haben/sein + Partizip. 'Bis dahin wird er schon gegangen sein.'",
    t11_b1: "[HU] werden + haben/sein + Partizip II",
    t11_b2: "[HU] Sehr selten im Alltag",
    t11_inst: "[HU] Erkenne das Futur II!",
    t11_h1: "[HU] werden + Partizip II + sein/haben",
    t11_h2: "[HU] Ich werde das getan haben.",
    t11_text2: "[HU] Bis nächste Woche wird er die Aufgabe ___ ___.",
    t11_c1: "[HU] getan haben", t11_c2: "[HU] tun werden", t11_c3: "[HU] getan", t11_c4: "[HU] hat getan",

    // T12: Modalverben in Präteritum
    t12_title: "[HU] Modalverben im Präteritum",
    t12_text: "[HU] Modalverben (wollen, können, müssen, dürfen, sollen, mögen) haben im Präteritum oft einen Umlautsverlust: konnte (nicht: könnte), musste (nicht: müsste).",
    t12_b1: "[HU] können -> konnte",
    t12_b2: "[HU] müssen -> musste",
    t12_inst: "[HU] Wähle die richtige Präteritum-Form!",
    t12_h1: "[HU] Achte: Der Umlaut verschwindet oft!",
    t12_h2: "[HU] Ich könnte nicht (Konjunktiv) vs. ich konnte nicht (Präteritum)",
    t12_sent: "[HU] Ich ___ nicht schwimmen.",
    t12_ca1: "[HU] konnte", t12_ca2: "[HU] könnte", t12_ca3: "[HU] kann", t12_ca4: "[HU] werde können",

    // T13: Konjunktiv II (Hätte, würde...)
    t13_title: "[HU] Konjunktiv II (Wenn es anders wäre)",
    t13_text: "[HU] Wir benutzen Konjunktiv II für irreale Wünsche: 'Wenn ich reich wäre, würde ich reisen.' oder Höflichkeit: 'Könntest du mir helfen?'",
    t13_b1: "[HU] würde + Infinitiv oder hätte/wäre + Partizip",
    t13_b2: "[HU] Nicht wirklich, nur Traum",
    t13_inst: "[HU] Wähle den Konjunktiv II!",
    t13_h1: "[HU] Suche nach 'würde', 'hätte' oder 'wäre'.",
    t13_h2: "[HU] Ich würde gerne..., Wenn ich Zeit hätte...",
    t13_sent2: "[HU] Wenn es regnen ___, würde ich zuhause bleiben.",
    t13_ca1: "[HU] würde", t13_ca2: "[HU] regnete", t13_ca3: "[HU] wäre", t13_ca4: "[HU] regnet",
    t13_q: "[HU] Was beschreibt der Konjunktiv II?",
    t13_qa: "[HU] Irreale Wünsche und Bedingungen", t13_qb: "[HU] Zukünftige Handlungen", t13_qc: "[HU] Vergangene Ereignisse", t13_qd: "[HU] Fragen",

    // T14: Passiv im Präsens
    t14_title: "[HU] Passiv (Wird gemacht statt macht)",
    t14_text: "[HU] Im Passiv ist das Objekt wichtig, nicht der Täter. Aktiv: Der Koch kocht das Essen. Passiv: Das Essen wird gekocht.",
    t14_b1: "[HU] werden + Partizip II",
    t14_b2: "[HU] Fokus auf die Aktion, nicht den Täter",
    t14_inst: "[HU] Erkenne das Passiv!",
    t14_h1: "[HU] Suche nach 'wird' oder 'werden' + Partizip.",
    t14_h2: "[HU] Das Fenster wird geöffnet.",
    t14_sent3: "[HU] Der Brief ___.",
    t14_cb1: "[HU] wird geschrieben", t14_cb2: "[HU] schreibt", t14_cb3: "[HU] ist geschrieben", t14_cb4: "[HU] schreiben",

    // T15: Zeitformen-Profi Mix
    t15_title: "[HU] Du bist ein Zeit-Profi!",
    t15_text: "[HU] Du kennst Präsens, Präteritum, Perfekt, Futur I, Passiv und Konjunktiv. Du beherrschst die Zeiten komplett!",
    t15_b1: "[HU] Alle Zeitformen gelernt",
    t15_b2: "[HU] Aktiv, Passiv, Konjunktiv",
    t15_inst: "[HU] Zeige dein Zeit-Wissen!",
    t15_h1: "[HU] Denke an alle Zeitformen die du gelernt hast.",
    t15_h2: "[HU] Präsens, Präteritum, Perfekt, Futur, Passiv...",
    t15_sent4: "[HU] Morgen ___ wir ins Kino ___.",
    t15_cc1: "[HU] werden gehen", t15_cc2: "[HU] gehen werden", t15_cc3: "[HU] sind gegangen", t15_cc4: "[HU] gingen",
  
  },
  ro: {

    explorer_title: "[RO] Zeit-Reisende K4",

    // T1: Die Zeitformen im Überblick
    t1_title: "[RO] Die vier Zeiten",
    t1_text: "[RO] In der 4. Klasse beherrschen wir vier Zeitformen: Präsens (Gegenwart), Präteritum (Erzähl-Vergangenheit), Perfekt (Sprech-Vergangenheit) und neu: das Futur I (Zukunft).",
    t1_b1: "[RO] Präsens: Ich spiele.",
    t1_b2: "[RO] Vergangenheit: Ich spielte / Ich habe gespielt.",
    t1_b3: "[RO] Zukunft: Ich werde spielen.",
    t1_inst: "[RO] Welches Wort gehört zur Zukunft (Futur)?",
    t1_h1: "[RO] Suche nach einem Wort, das 'später' bedeutet.",
    t1_h2: "[RO] Das Wort 'morgen' deutet auf die Zukunft hin.",
    t1_w1: "[RO] morgen", t1_w2: "[RO] gestern", t1_w3: "[RO] heute", t1_w4: "[RO] damals",
    // Quiz: GENERATOR (praeteritum)

    // T2: Das Futur I (Zukunft)
    t2_title: "[RO] Das Futur I",
    t2_text: "[RO] Wir benutzen das Futur I, wenn wir über Pläne oder Vermutungen in der Zukunft sprechen. Es besteht immer aus zwei Teilen: werden + Grundform.",
    t2_b1: "[RO] Helfer: werden (gebeugt).",
    t2_b2: "[RO] Hauptverb: Grundform (am Satzende).",
    t2_inst: "[RO] Finde das Futur I in diesem Satz!",
    t2_h1: "[RO] Suche nach der Kombination aus 'wird' und einem Verb am Ende.",
    t2_h2: "[RO] 'wird regnen' ist das Futur I.",
    t2_w2_1: "[RO] Es", t2_w2_2: "[RO] wird", t2_w2_3: "[RO] morgen", t2_w2_4: "[RO] regnen", t2_w2_5: "[RO] .",
    // Quiz: MANUAL
    t2_q: "[RO] Aus welchen zwei Teilen besteht das Futur I?",
    t2_qa: "[RO] werden + Grundform", t2_qb: "[RO] haben + Partizip", t2_qc: "[RO] sein + Partizip", t2_qd: "[RO] nur die Grundform",

    // T3: 'werden' konjugieren
    t3_title: "[RO] Das Hilfsverb 'werden'",
    t3_text: "[RO] Das Wort 'werden' ist der Motor für die Zukunft. Es verändert sich je nachdem, wer etwas tun wird: ich werde, du wirst, er wird, wir werden...",
    t3_b1: "[RO] ich werde, du wirst, er wird.",
    t3_b2: "[RO] wir werden, ihr werdet, sie werden.",
    t3_inst: "[RO] Welche Form von 'werden' passt hier?",
    t3_h1: "[RO] Das Subjekt ist 'Du'.",
    t3_h2: "[RO] Es heißt: Du 'wirst'.",
    t3_sent: "[RO] Du ___ später ein Profi sein.",
    t3_c1: "[RO] wirst", t3_c2: "[RO] werde", t3_c3: "[RO] werden", t3_c4: "[RO] werdet",
    // Quiz: GENERATOR (verben_k3)

    // T4: Satzbau im Futur
    t4_title: "[RO] Satzbau im Futur",
    t4_text: "[RO] Achtung! Das Hilfsverb 'werden' steht an 2. Stelle, aber das eigentliche Tunwort (die Grundform) rutscht ganz ans Ende des Satzes.",
    t4_b1: "[RO] werden ➔ Platz 2.",
    t4_b2: "[RO] Infinitiv ➔ Satzende.",
    t4_inst: "[RO] Baue den Satz im Futur zusammen!",
    t4_h1: "[RO] Beginne mit 'Wir', dann 'werden'. Das Verb 'lernen' kommt ans Ende.",
    t4_h2: "[RO] Wir werden morgen lernen.",
    t4_f1: "[RO] Wir", t4_f2: "[RO] werden", t4_f3: "[RO] morgen", t4_f4: "[RO] lernen.",
    // Quiz: MANUAL
    t4_q: "[RO] Wo steht das Hauptverb im Futur I?",
    t4_qa: "[RO] Ganz am Ende", t4_qb: "[RO] An zweiter Stelle", t4_qc: "[RO] Direkt nach 'werden'", t4_qd: "[RO] Am Satzanfang",

    // T5: Zeitformen-Check (Sortieren)
    t5_title: "[RO] Zeiten-Sortierer",
    t5_text: "[RO] Kannst du alle vier Zeiten unterscheiden? Gestern (Vergangenheit), Heute (Präsens) und Morgen (Futur).",
    t5_b1: "[RO] ich lerne (Präsens)",
    t5_b2: "[RO] ich lernte (Präteritum)",
    t5_b3: "[RO] ich werde lernen (Futur)",
    t5_inst: "[RO] Sortiere die Sätze in die richtige Zeitform!",
    t5_h1: "[RO] Achte auf 'wird' (Futur) und die Vergangenheitsformen.",
    t5_h2: "[RO] ich spiele -> Präsens. ich habe gespielt -> Perfekt.",
    t5_b_past: "[RO] Vergangenheit 🔙", t5_b_pres: "[RO] Präsens 🏠", t5_b_fut: "[RO] Futur 🚀",
    t5_i1: "[RO] ich lachte", t5_i2: "[RO] ich lache", t5_i3: "[RO] ich werde lachen", t5_i4: "[RO] ich habe gelacht",
    // Quiz: GENERATOR (perfekt)

    // T6: Futur I Profi
    t6_title: "[RO] Futur-Profi",
    t6_text: "[RO] Das Futur nutzen wir auch für Versprechen: 'Ich werde meine Hausaufgaben machen.' Oder für Vorhersagen: 'Es wird bald schneien.'",
    t6_b1: "[RO] Versprechen & Vorhersagen.",
    t6_inst: "[RO] Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "[RO] Der Satzanfang ist groß (Ich).",
    t6_h2: "[RO] Ich werde dir helfen.",
    t6_o1: "[RO] Ich", t6_o2: "[RO] werde", t6_o3: "[RO] dir", t6_o4: "[RO] helfen.",
    // Quiz: GENERATOR (praeteritum)

    // T7: Slingshot Challenge (Physics!)
    t7_title: "[RO] Futur-Schleuder",
    t7_text: "[RO] Nur die Sätze im Futur I bringen Punkte! Schieße auf die richtigen Ziele.",
    t7_b1: "[RO] Suche nach Sätzen mit 'werden' + Verb am Ende.",
    t7_inst: "[RO] Schieße auf die Futur-Sätze!",
    t7_h1: "[RO] Ein Futur-Satz braucht immer eine Form von 'werden'.",
    t7_h2: "[RO] Er wird gehen, Wir werden spielen.",
    t7_m1: "[RO] Er wird gehen", t7_m2: "[RO] Wir werden spielen", t7_m3: "[RO] Ich lerne", t7_m4: "[RO] Du hast gelacht",

    // T8: Präteritum vs. Perfekt (Erzähl vs. Sprech)
    t8_title: "[RO] Präteritum vs. Perfekt",
    t8_text: "[RO] Beide sprechen von der Vergangenheit, aber Präteritum ist mehr für Geschichten (Es war einmal), Perfekt ist für Gespräche (Ich habe es gerade getan).",
    t8_b1: "[RO] Präteritum: Es spielte gern. (Erzählform)",
    t8_b2: "[RO] Perfekt: Es hat gespielt. (Sprechform)",
    t8_inst: "[RO] Wähle die richtige Form!",
    t8_h1: "[RO] Was ist mehr: Geschichte oder Gespräch?",
    t8_h2: "[RO] Der Frosch sprang = Präteritum (Geschichte)",
    t8_sent: "[RO] Der Hund ___.",
    t8_c1: "[RO] lief (Präteritum)", t8_c2: "[RO] ist gelaufen (Perfekt)", t8_c3: "[RO] läuft", t8_c4: "[RO] wird laufen",

    // T9: Plusquamperfekt (Vorzeitigkeit)
    t9_title: "[RO] Plusquamperfekt (Vorvergangenheit)",
    t9_text: "[RO] Das Plusquamperfekt benutzen wir selten im Deutschen, aber du solltest es erkennen: hatte/war + Partizip II. Es ist 'älter' als Perfekt.",
    t9_b1: "[RO] hatte / war + Partizip",
    t9_b2: "[RO] Noch älter als das Perfekt",
    t9_inst: "[RO] Erkenne das Plusquamperfekt!",
    t9_h1: "[RO] Suche nach hatte oder war + Partizip.",
    t9_h2: "[RO] Ich hatte es gemacht.",
    t9_w1: "[RO] Der Junge", t9_w2: "[RO] hatte", t9_w3: "[RO] das Spiel", t9_w4: "[RO] vorbereitet", t9_w5: "[RO] .",

    // T10: Starke vs. schwache Verben
    t10_title: "[RO] Starke vs. schwache Verben",
    t10_text: "[RO] Manche Verben sind 'stark' und ändern ihren Stammvokal: sprechen -> sprach -> hat gesprochen. Schwache Verben machen immer dasselbe: spielen -> spielte -> hat gespielt.",
    t10_b1: "[RO] Starke: Stammvokal ändert sich",
    t10_b2: "[RO] Schwache: -te und -t",
    t10_inst: "[RO] Sortiere die Zeitformen der starken und schwachen Verben!",
    t10_h1: "[RO] Starke Verben: sprechen -> sprach -> gesprochen",
    t10_h2: "[RO] Schwache: spielen -> spielte -> gespielt",
    t10_l: "[RO] Stark", t10_r: "[RO] Schwach",
    t10_v1: "[RO] sprang", t10_v2: "[RO] fragte", t10_v3: "[RO] rannte", t10_v4: "[RO] öffnete",

    // T11: Futur II (Vorzukunft - selten)
    t11_title: "[RO] Futur II (Was wird getan sein?)",
    t11_text: "[RO] Das Futur II ist selten, aber eine gute Übung: werden + haben/sein + Partizip. 'Bis dahin wird er schon gegangen sein.'",
    t11_b1: "[RO] werden + haben/sein + Partizip II",
    t11_b2: "[RO] Sehr selten im Alltag",
    t11_inst: "[RO] Erkenne das Futur II!",
    t11_h1: "[RO] werden + Partizip II + sein/haben",
    t11_h2: "[RO] Ich werde das getan haben.",
    t11_text2: "[RO] Bis nächste Woche wird er die Aufgabe ___ ___.",
    t11_c1: "[RO] getan haben", t11_c2: "[RO] tun werden", t11_c3: "[RO] getan", t11_c4: "[RO] hat getan",

    // T12: Modalverben in Präteritum
    t12_title: "[RO] Modalverben im Präteritum",
    t12_text: "[RO] Modalverben (wollen, können, müssen, dürfen, sollen, mögen) haben im Präteritum oft einen Umlautsverlust: konnte (nicht: könnte), musste (nicht: müsste).",
    t12_b1: "[RO] können -> konnte",
    t12_b2: "[RO] müssen -> musste",
    t12_inst: "[RO] Wähle die richtige Präteritum-Form!",
    t12_h1: "[RO] Achte: Der Umlaut verschwindet oft!",
    t12_h2: "[RO] Ich könnte nicht (Konjunktiv) vs. ich konnte nicht (Präteritum)",
    t12_sent: "[RO] Ich ___ nicht schwimmen.",
    t12_ca1: "[RO] konnte", t12_ca2: "[RO] könnte", t12_ca3: "[RO] kann", t12_ca4: "[RO] werde können",

    // T13: Konjunktiv II (Hätte, würde...)
    t13_title: "[RO] Konjunktiv II (Wenn es anders wäre)",
    t13_text: "[RO] Wir benutzen Konjunktiv II für irreale Wünsche: 'Wenn ich reich wäre, würde ich reisen.' oder Höflichkeit: 'Könntest du mir helfen?'",
    t13_b1: "[RO] würde + Infinitiv oder hätte/wäre + Partizip",
    t13_b2: "[RO] Nicht wirklich, nur Traum",
    t13_inst: "[RO] Wähle den Konjunktiv II!",
    t13_h1: "[RO] Suche nach 'würde', 'hätte' oder 'wäre'.",
    t13_h2: "[RO] Ich würde gerne..., Wenn ich Zeit hätte...",
    t13_sent2: "[RO] Wenn es regnen ___, würde ich zuhause bleiben.",
    t13_ca1: "[RO] würde", t13_ca2: "[RO] regnete", t13_ca3: "[RO] wäre", t13_ca4: "[RO] regnet",
    t13_q: "[RO] Was beschreibt der Konjunktiv II?",
    t13_qa: "[RO] Irreale Wünsche und Bedingungen", t13_qb: "[RO] Zukünftige Handlungen", t13_qc: "[RO] Vergangene Ereignisse", t13_qd: "[RO] Fragen",

    // T14: Passiv im Präsens
    t14_title: "[RO] Passiv (Wird gemacht statt macht)",
    t14_text: "[RO] Im Passiv ist das Objekt wichtig, nicht der Täter. Aktiv: Der Koch kocht das Essen. Passiv: Das Essen wird gekocht.",
    t14_b1: "[RO] werden + Partizip II",
    t14_b2: "[RO] Fokus auf die Aktion, nicht den Täter",
    t14_inst: "[RO] Erkenne das Passiv!",
    t14_h1: "[RO] Suche nach 'wird' oder 'werden' + Partizip.",
    t14_h2: "[RO] Das Fenster wird geöffnet.",
    t14_sent3: "[RO] Der Brief ___.",
    t14_cb1: "[RO] wird geschrieben", t14_cb2: "[RO] schreibt", t14_cb3: "[RO] ist geschrieben", t14_cb4: "[RO] schreiben",

    // T15: Zeitformen-Profi Mix
    t15_title: "[RO] Du bist ein Zeit-Profi!",
    t15_text: "[RO] Du kennst Präsens, Präteritum, Perfekt, Futur I, Passiv und Konjunktiv. Du beherrschst die Zeiten komplett!",
    t15_b1: "[RO] Alle Zeitformen gelernt",
    t15_b2: "[RO] Aktiv, Passiv, Konjunktiv",
    t15_inst: "[RO] Zeige dein Zeit-Wissen!",
    t15_h1: "[RO] Denke an alle Zeitformen die du gelernt hast.",
    t15_h2: "[RO] Präsens, Präteritum, Perfekt, Futur, Passiv...",
    t15_sent4: "[RO] Morgen ___ wir ins Kino ___.",
    t15_cc1: "[RO] werden gehen", t15_cc2: "[RO] gehen werden", t15_cc3: "[RO] sind gegangen", t15_cc4: "[RO] gingen",
  
  }
};

export const ZEITFORM4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🕰️", label: "Präsens" }, { emoji: "🔙", label: "Perfekt" }, { emoji: "🚀", label: "Futur" }] },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "werden", word2: "laufen", result: "Futur I", color: "#8B5CF6" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [1, 3],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "ich werde", color: "#1E40AF", bg: "#DBEAFE" }, { text: "du wirst", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "hard",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Wir", "werden", "morgen", "lernen"], highlightIndices: [1, 3], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t4_f1", "t4_f2", "t4_f3", "t4_f4"],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Jetzt"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Später"], bg: "#F5F3FF", border: "#8B5CF6" } },
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "pa", label: "t5_b_past" }, { id: "pr", label: "t5_b_pres" }, { id: "fu", label: "t5_b_fut" }],
      items: [
        { text: "t5_i1", bucketId: "pa" },
        { text: "t5_i2", bucketId: "pr" },
        { text: "t5_i3", bucketId: "fu" },
        { text: "t5_i4", bucketId: "pa" },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "perfekt" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🚀", title: "Zukunft!", bg: "#F1F5F9" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o4", "t6_o1", "t6_o3"],
      correctOrder: [2, 0, 3, 1],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Slingshot!", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-slingshot",
      question: "t_q",
      targets: [
        { id: "t7_id1", text: "t7_m1", isCorrect: true },
        { id: "t7_id2", text: "t7_m2", isCorrect: true },
        { id: "t7_id3", text: "t7_m3", isCorrect: false },
        { id: "t7_id4", text: "t7_m4", isCorrect: false },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "Erzähl vs. Sprech", color: "#EF4444", bg: "#FEE2E2" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_sent",
      choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"],
      correctIndex: 0,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "simple-icon", icon: "⏮️", title: "Vorvergangenheit", bg: "#F1F5F9" },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5"],
      correctIndices: [1, 4],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "perfekt" },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["Stark"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Schwach"], bg: "#DBEAFE", border: "#3B82F6" } },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "s", label: "t10_l" }, { id: "w", label: "t10_r" }],
      items: [
        { text: "t10_v1", bucketId: "s" },
        { text: "t10_v2", bucketId: "w" },
        { text: "t10_v3", bucketId: "s" },
        { text: "t10_v4", bucketId: "w" },
      ],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⏭️", title: "Vorzukunft", bg: "#F1F5F9" },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_text2",
      choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"],
      correctIndex: 0,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "perfekt" },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "konnte, musste", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent",
      choices: ["t12_ca1", "t12_ca2", "t12_ca3", "t12_ca4"],
      correctIndex: 0,
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🌙", title: "Irreales", bg: "#F1F5F9" },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent2",
      choices: ["t13_ca1", "t13_ca2", "t13_ca3", "t13_ca4"],
      correctIndex: 1,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔄", title: "Passiv", bg: "#F1F5F9" },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_sent3",
      choices: ["t14_cb1", "t14_cb2", "t14_cb3", "t14_cb4"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent4",
      choices: ["t15_cc1", "t15_cc2", "t15_cc3", "t15_cc4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "perfekt" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Wortarteninsel
// Thema: Nomen, Verb, Adjektiv, Pronomen, Präposition — alle Wortarten K4
// ─────────────────────────────────────────────────────────────────────────────

export const WORTART_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortarten-Palast",

    // T1: Die Wortarten-Familie
    t1_title: "Die Wortarten-Familie",
    t1_text: "In einem Satz hat jedes Wort eine feste Rolle. Wir unterscheiden Nomen (Namenwörter), Verben (Tunwörter), Adjektive (Wiewörter), Pronomen (Fürwörter) und Präpositionen (Verhältniswörter).",
    t1_b1: "Nomen, Verben, Adjektive.",
    t1_b2: "Pronomen und Präpositionen.",
    t1_inst: "Welches Wort ist eine Präposition (Verhältniswort)?",
    t1_h1: "Suche nach einem kurzen Wort, das einen Ort oder eine Richtung angibt.",
    t1_h2: "Das Wort 'auf' ist eine Präposition.",
    t1_w1: "Haus", t1_w2: "laufen", t1_w3: "auf", t1_w4: "schön",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Pronomen (Die Stellvertreter)
    t2_title: "Pronomen (Fürwörter)",
    t2_text: "Pronomen stehen 'für' ein Nomen. Sie helfen uns, Wiederholungen zu vermeiden. Statt 'Der Junge spielt' sagen wir 'Er spielt'.",
    t2_b1: "Personalpronomen: ich, du, er, sie, es...",
    t2_b2: "Possessivpronomen: mein, dein, sein...",
    t2_inst: "Finde das Pronomen im Satz!",
    t2_h1: "Welches Wort ersetzt eine Person?",
    t2_h2: "'Wir' ist das Pronomen.",
    t2_w2_1: "Wir", t2_w2_2: "gehen", t2_w2_3: "heute", t2_w2_4: "baden", t2_w2_5: ".",
    // Quiz: MANUAL
    t2_q: "Welches Wort ist ein Possessivpronomen (Besitzanzeiger)?",
    t2_qa: "mein", t2_qb: "mir", t2_qc: "man", t2_qd: "mit",

    // T3: Präpositionen (Wo ist es?)
    t3_title: "Präpositionen",
    t3_text: "Präpositionen zeigen uns, wo etwas ist oder wann etwas passiert. Sie stehen meistens vor einem Nomen. Beispiele: in, auf, unter, vor, hinter.",
    t3_b1: "Verhältniswörter (Ort/Zeit).",
    t3_inst: "Welches Wort passt zum Bild (Katze 📦)?",
    t3_h1: "Wo ist die Katze? Sie ist im Karton.",
    t3_h2: "Die Präposition ist 'in'.",
    t3_w3_1: "in", t3_w3_2: "über", t3_w3_3: "unter", t3_w3_4: "neben",
    // Quiz: MANUAL
    t3_q: "Welches Wort ist eine Präposition?",
    t3_qa: "hinter", t3_qb: "heute", t3_qc: "hell", t3_qd: "holen",

    // T4: Wortarten sortieren
    t4_title: "Der große Sortierer",
    t4_text: "Kannst du die fünf wichtigsten Wortarten unterscheiden? Denk an die Großschreibung bei Nomen!",
    t4_b1: "Nomen, Verb, Adjektiv.",
    t4_b2: "Pronomen, Präposition.",
    t4_inst: "Sortiere die Wörter in die richtigen Boxen!",
    t4_h1: "Frage dich: Was kann man tun (Verb)? Wie ist es (Adjektiv)?",
    t4_h2: "Baum -> Nomen, singen -> Verb, bunt -> Adjektiv.",
    t4_bn: "Nomen 📦", t4_bv: "Verb 🏃", t4_ba: "Adjektiv 🎨",
    t4_i1: "Apfel", t4_i2: "lachen", t4_i3: "schnell", t4_i4: "Sonne",
    // Quiz: GENERATOR (verben_k3)

    // T5: Zahlwörter (Numerale)
    t5_title: "Zahlwörter",
    t5_text: "Auch Zahlen gehören zu einer Wortart: den Numeralen. Wir schreiben sie meistens klein (eins, zwei, viele, einige).",
    t5_b1: "eins, zwei, hundert...",
    t5_b2: "viele, einige, alle.",
    t5_inst: "Welches Wort ist ein Zahlwort (Numeral)?",
    t5_h1: "Suche nach einer Menge oder einer Zahl.",
    t5_h2: "'viele' ist ein Zahlwort.",
    t5_w5_1: "viele", t5_w5_2: "vielleicht", t5_w5_3: "viertel", t5_w5_4: "vogel",
    // Quiz: MANUAL
    t5_q: "Wie schreiben wir Zahlwörter wie 'eins' oder 'viele' normalerweise?",
    t5_qa: "klein", t5_qb: "groß", t5_qc: "immer groß", t5_qd: "mit Bindestrich",

    // T6: Wortarten im Text erkennen
    t6_title: "Text-Analyse",
    t6_text: "In einem Satz verstecken sich viele Wortarten. Kannst du sie alle benennen?",
    t6_b1: "Nomen = Groß.",
    t6_b2: "Verben = Platz 2.",
    t6_inst: "Was ist das Wort 'mein' in diesem Satz?",
    t6_h1: "Es zeigt, wem der Hund gehört.",
    t6_h2: "Es ist ein Pronomen.",
    t6_sent_a: "Mein Hund spielt.",
    t6_ca1: "Pronomen", t6_ca2: "Nomen", t6_ca3: "Verb", t6_ca4: "Adjektiv",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wortarten-Turm (Physics Stacker!)
    t7_title: "Der Wortarten-Turm",
    t7_text: "Staple nur die Steine mit der richtigen Wortart! Heute suchen wir alle ADJEKTIVE (Wiewörter).",
    t7_b1: "Staple die Wiewörter.",
    t7_inst: "Baue einen Turm aus Adjektiven!",
    t7_h1: "Suche Wörter, die beschreiben, wie etwas ist.",
    t7_h2: "bunt, groß, schnell, klug.",
    t7_target: "Adjektiv-Turm 🧱",
    t7_s1: "bunt", t7_s2: "groß", t7_s3: "schnell", t7_s4: "Baum (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Adverbien (Umstandswörter)
    t8_title: "Adverbien (Wie? Wann? Wo?)",
    t8_text: "Adverbien beschreiben, WIE eine Handlung passiert (schnell, langsam), WANN (morgen, gestern) oder WO (hier, oben).",
    t8_b1: "Schnell, langsam, heute, hier...",
    t8_b2: "Sie ändern sich nicht.",
    t8_inst: "Finde das Adverb im Satz!",
    t8_h1: "Wie läuft das Kind? Schnell!",
    t8_h2: "Schnell ist ein Adverb.",
    t8_w1: "Das Kind", t8_w2: "läuft", t8_w3: "schnell", t8_w4: "nach Hause",
    // Quiz: MANUAL
    t8_q: "Welches Wort ist ein Adverb?",
    t8_qa: "morgen", t8_qb: "Morgen", t8_qc: "morgig", t8_qd: "Morgenrot",

    // T9: Konjunktionen (Bindewörter)
    t9_title: "Konjunktionen (Bindewörter)",
    t9_text: "Konjunktionen verbinden Wörter oder Sätze: und, oder, aber, weil, dass, wenn.",
    t9_b1: "Verbinden Wörter und Sätze",
    t9_b2: "und, oder, aber, weil, wenn",
    t9_inst: "Sortiere die Konjunktionen!",
    t9_h1: "Suche Wörter die zwei Sätze verbinden.",
    t9_h2: "und, aber, weil, dass",
    t9_box1: "Konjunktionen", t9_box2: "Keine Konjunktionen",
    t9_kw1: "weil", t9_kw2: "Hund", t9_kw3: "und", t9_kw4: "blau",

    // T10: Artikel (der, die, das) - Wiederholung
    t10_title: "Artikel - Nomen-Begleiter",
    t10_text: "Artikel stehen immer VOR Nomen. Der (maskulin), die (feminin), das (neutral). Auch unbestimmte: ein, eine, ein.",
    t10_b1: "Bestimmte Artikel: der, die, das",
    t10_b2: "Unbestimmte: ein, eine, ein",
    t10_inst: "Wähle den richtigen Artikel!",
    t10_h1: "Ist das Nomen männlich (der), weiblich (die) oder sächlich (das)?",
    t10_h2: "der Baum, die Katze, das Haus",
    t10_sent: "___ Apfel ist reif.",
    t10_c1: "Ein", t10_c2: "Eine", t10_c3: "Einen", t10_c4: "Einem",

    // T11: Interjektionen (Ausrufe!)
    t11_title: "Interjektionen (Ausrufe)",
    t11_text: "Interjektionen sind Ausrufe ohne echte grammatische Funktion: Aha!, Oh!, Pfui!, Bravo!, Hallo!",
    t11_b1: "Aha, oh, pfui, bravo!",
    t11_b2: "Oft mit Ausrufezeichen",
    t11_inst: "Erkenne die Interjektion!",
    t11_h1: "Suche nach Ausrufen ohne Verb.",
    t11_h2: "Aha!, Oh je!, Hallo!",
    t11_w1: "Oh", t11_w2: "je", t11_w3: "wie", t11_w4: "schön",
    // Quiz: MANUAL
    t11_q: "Welches Wort ist eine Interjektion?",
    t11_qa: "Aha!", t11_qb: "Angst", t11_qc: "andere", t11_qd: "alt",

    // T12: Wortart-Mix Identifikation
    t12_title: "Wortarten gemischt",
    t12_text: "Jetzt mischst du alle Wortarten durcheinander! Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel.",
    t12_b1: "Alle Wortarten erkennen",
    t12_inst: "Bestimme die Wortart jedes Wortes!",
    t12_h1: "Denke an die Fragen: Was ist es (Nomen)? Was tut es (Verb)? Wie ist es (Adjektiv)?",
    t12_h2: "Das kleine Mädchen läuft schnell.",
    t12_c_noun: "Nomen", t12_c_verb: "Verb", t12_c_adj: "Adjektiv", t12_c_adv: "Adverb",

    // T13: Wortarten in Sätzen
    t13_title: "Wortarten-Analyse",
    t13_text: "In einem Satz arbeiten alle Wortarten zusammen. Jede hat ihre Rolle und ihre Position.",
    t13_b1: "Satzbau mit verschiedenen Wortarten",
    t13_inst: "Baue einen Satz mit den richtigen Wortarten!",
    t13_h1: "Nomen (Groß!), Verb (Platz 2), Adjektiv (vor Nomen).",
    t13_h2: "Das schnelle Auto fährt vorbei.",
    t13_f1: "Das schnelle", t13_f2: "Auto", t13_f3: "fährt", t13_f4: "vorbei",

    // T14: Wortarten und Satzglied-Rolle
    t14_title: "Wortart vs. Satzglied",
    t14_text: "WICHTIG: Wortart ist, WAS das Wort ist (Nomen, Verb...). Satzglied ist, WELCHE ROLLE es hat (Subjekt, Prädikat...).",
    t14_b1: "Wortart = Kategorie (Nomen, Verb)",
    t14_b2: "Satzglied = Rolle (Subjekt, Prädikat, Objekt)",
    t14_inst: "Unterscheide Wortart und Satzglied!",
    t14_h1: "'Der Hund' ist ein Nomen (Wortart) und Subjekt (Satzglied).",
    t14_h2: "'bellt' ist ein Verb (Wortart) und Prädikat (Satzglied).",
    t14_qa: "Satzglied", t14_qb: "Wortart", t14_qc: "Menge", t14_qd: "Form",

    // T15: Wortarten-Profi
    t15_title: "Du bist ein Wortarten-Profi!",
    t15_text: "Du kennst alle Wortarten: Nomen, Verben, Adjektive, Pronomen, Präpositionen, Adverbien, Konjunktionen, Artikel und Interjektionen. Glückwunsch!",
    t15_b1: "Alle Wortarten perfekt",
    t15_b2: "Satzglied-Rollen verstanden",
    t15_inst: "Zeige dein Wortarten-Wissen!",
    t15_h1: "Denk an alle 9 Wortarten.",
    t15_h2: "Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel, Interjektion",
    t15_sent: "Die schöne Blume ___ im Garten.",
    t15_cc1: "wächst", t15_cc2: "Wachsen", t15_cc3: "wachsen", t15_cc4: "wächst dort",
  },
  en: {

    explorer_title: "[EN] Wortarten-Palast",

    // T1: Die Wortarten-Familie
    t1_title: "[EN] Die Wortarten-Familie",
    t1_text: "[EN] In einem Satz hat jedes Wort eine feste Rolle. Wir unterscheiden Nomen (Namenwörter), Verben (Tunwörter), Adjektive (Wiewörter), Pronomen (Fürwörter) und Präpositionen (Verhältniswörter).",
    t1_b1: "[EN] Nomen, Verben, Adjektive.",
    t1_b2: "[EN] Pronomen und Präpositionen.",
    t1_inst: "[EN] Welches Wort ist eine Präposition (Verhältniswort)?",
    t1_h1: "[EN] Suche nach einem kurzen Wort, das einen Ort oder eine Richtung angibt.",
    t1_h2: "[EN] Das Wort 'auf' ist eine Präposition.",
    t1_w1: "[EN] Haus", t1_w2: "[EN] laufen", t1_w3: "[EN] auf", t1_w4: "[EN] schön",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Pronomen (Die Stellvertreter)
    t2_title: "[EN] Pronomen (Fürwörter)",
    t2_text: "[EN] Pronomen stehen 'für' ein Nomen. Sie helfen uns, Wiederholungen zu vermeiden. Statt 'Der Junge spielt' sagen wir 'Er spielt'.",
    t2_b1: "[EN] Personalpronomen: ich, du, er, sie, es...",
    t2_b2: "[EN] Possessivpronomen: mein, dein, sein...",
    t2_inst: "[EN] Finde das Pronomen im Satz!",
    t2_h1: "[EN] Welches Wort ersetzt eine Person?",
    t2_h2: "[EN] 'Wir' ist das Pronomen.",
    t2_w2_1: "[EN] Wir", t2_w2_2: "[EN] gehen", t2_w2_3: "[EN] heute", t2_w2_4: "[EN] baden", t2_w2_5: "[EN] .",
    // Quiz: MANUAL
    t2_q: "[EN] Welches Wort ist ein Possessivpronomen (Besitzanzeiger)?",
    t2_qa: "[EN] mein", t2_qb: "[EN] mir", t2_qc: "[EN] man", t2_qd: "[EN] mit",

    // T3: Präpositionen (Wo ist es?)
    t3_title: "[EN] Präpositionen",
    t3_text: "[EN] Präpositionen zeigen uns, wo etwas ist oder wann etwas passiert. Sie stehen meistens vor einem Nomen. Beispiele: in, auf, unter, vor, hinter.",
    t3_b1: "[EN] Verhältniswörter (Ort/Zeit).",
    t3_inst: "[EN] Welches Wort passt zum Bild (Katze 📦)?",
    t3_h1: "[EN] Wo ist die Katze? Sie ist im Karton.",
    t3_h2: "[EN] Die Präposition ist 'in'.",
    t3_w3_1: "[EN] in", t3_w3_2: "[EN] über", t3_w3_3: "[EN] unter", t3_w3_4: "[EN] neben",
    // Quiz: MANUAL
    t3_q: "[EN] Welches Wort ist eine Präposition?",
    t3_qa: "[EN] hinter", t3_qb: "[EN] heute", t3_qc: "[EN] hell", t3_qd: "[EN] holen",

    // T4: Wortarten sortieren
    t4_title: "[EN] Der große Sortierer",
    t4_text: "[EN] Kannst du die fünf wichtigsten Wortarten unterscheiden? Denk an die Großschreibung bei Nomen!",
    t4_b1: "[EN] Nomen, Verb, Adjektiv.",
    t4_b2: "[EN] Pronomen, Präposition.",
    t4_inst: "[EN] Sortiere die Wörter in die richtigen Boxen!",
    t4_h1: "[EN] Frage dich: Was kann man tun (Verb)? Wie ist es (Adjektiv)?",
    t4_h2: "[EN] Baum -> Nomen, singen -> Verb, bunt -> Adjektiv.",
    t4_bn: "[EN] Nomen 📦", t4_bv: "[EN] Verb 🏃", t4_ba: "[EN] Adjektiv 🎨",
    t4_i1: "[EN] Apfel", t4_i2: "[EN] lachen", t4_i3: "[EN] schnell", t4_i4: "[EN] Sonne",
    // Quiz: GENERATOR (verben_k3)

    // T5: Zahlwörter (Numerale)
    t5_title: "[EN] Zahlwörter",
    t5_text: "[EN] Auch Zahlen gehören zu einer Wortart: den Numeralen. Wir schreiben sie meistens klein (eins, zwei, viele, einige).",
    t5_b1: "[EN] eins, zwei, hundert...",
    t5_b2: "[EN] viele, einige, alle.",
    t5_inst: "[EN] Welches Wort ist ein Zahlwort (Numeral)?",
    t5_h1: "[EN] Suche nach einer Menge oder einer Zahl.",
    t5_h2: "[EN] 'viele' ist ein Zahlwort.",
    t5_w5_1: "[EN] viele", t5_w5_2: "[EN] vielleicht", t5_w5_3: "[EN] viertel", t5_w5_4: "[EN] vogel",
    // Quiz: MANUAL
    t5_q: "[EN] Wie schreiben wir Zahlwörter wie 'eins' oder 'viele' normalerweise?",
    t5_qa: "[EN] klein", t5_qb: "[EN] groß", t5_qc: "[EN] immer groß", t5_qd: "[EN] mit Bindestrich",

    // T6: Wortarten im Text erkennen
    t6_title: "[EN] Text-Analyse",
    t6_text: "[EN] In einem Satz verstecken sich viele Wortarten. Kannst du sie alle benennen?",
    t6_b1: "[EN] Nomen = Groß.",
    t6_b2: "[EN] Verben = Platz 2.",
    t6_inst: "[EN] Was ist das Wort 'mein' in diesem Satz?",
    t6_h1: "[EN] Es zeigt, wem der Hund gehört.",
    t6_h2: "[EN] Es ist ein Pronomen.",
    t6_sent_a: "[EN] Mein Hund spielt.",
    t6_ca1: "[EN] Pronomen", t6_ca2: "[EN] Nomen", t6_ca3: "[EN] Verb", t6_ca4: "[EN] Adjektiv",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wortarten-Turm (Physics Stacker!)
    t7_title: "[EN] Der Wortarten-Turm",
    t7_text: "[EN] Staple nur die Steine mit der richtigen Wortart! Heute suchen wir alle ADJEKTIVE (Wiewörter).",
    t7_b1: "[EN] Staple die Wiewörter.",
    t7_inst: "[EN] Baue einen Turm aus Adjektiven!",
    t7_h1: "[EN] Suche Wörter, die beschreiben, wie etwas ist.",
    t7_h2: "[EN] bunt, groß, schnell, klug.",
    t7_target: "[EN] Adjektiv-Turm 🧱",
    t7_s1: "[EN] bunt", t7_s2: "[EN] groß", t7_s3: "[EN] schnell", t7_s4: "[EN] Baum (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Adverbien (Umstandswörter)
    t8_title: "[EN] Adverbien (Wie? Wann? Wo?)",
    t8_text: "[EN] Adverbien beschreiben, WIE eine Handlung passiert (schnell, langsam), WANN (morgen, gestern) oder WO (hier, oben).",
    t8_b1: "[EN] Schnell, langsam, heute, hier...",
    t8_b2: "[EN] Sie ändern sich nicht.",
    t8_inst: "[EN] Finde das Adverb im Satz!",
    t8_h1: "[EN] Wie läuft das Kind? Schnell!",
    t8_h2: "[EN] Schnell ist ein Adverb.",
    t8_w1: "[EN] Das Kind", t8_w2: "[EN] läuft", t8_w3: "[EN] schnell", t8_w4: "[EN] nach Hause",
    // Quiz: MANUAL
    t8_q: "[EN] Welches Wort ist ein Adverb?",
    t8_qa: "[EN] morgen", t8_qb: "[EN] Morgen", t8_qc: "[EN] morgig", t8_qd: "[EN] Morgenrot",

    // T9: Konjunktionen (Bindewörter)
    t9_title: "[EN] Konjunktionen (Bindewörter)",
    t9_text: "[EN] Konjunktionen verbinden Wörter oder Sätze: und, oder, aber, weil, dass, wenn.",
    t9_b1: "[EN] Verbinden Wörter und Sätze",
    t9_b2: "[EN] und, oder, aber, weil, wenn",
    t9_inst: "[EN] Sortiere die Konjunktionen!",
    t9_h1: "[EN] Suche Wörter die zwei Sätze verbinden.",
    t9_h2: "[EN] und, aber, weil, dass",
    t9_box1: "[EN] Konjunktionen", t9_box2: "[EN] Keine Konjunktionen",
    t9_kw1: "[EN] weil", t9_kw2: "[EN] Hund", t9_kw3: "[EN] und", t9_kw4: "[EN] blau",

    // T10: Artikel (der, die, das) - Wiederholung
    t10_title: "[EN] Artikel - Nomen-Begleiter",
    t10_text: "[EN] Artikel stehen immer VOR Nomen. Der (maskulin), die (feminin), das (neutral). Auch unbestimmte: ein, eine, ein.",
    t10_b1: "[EN] Bestimmte Artikel: der, die, das",
    t10_b2: "[EN] Unbestimmte: ein, eine, ein",
    t10_inst: "[EN] Wähle den richtigen Artikel!",
    t10_h1: "[EN] Ist das Nomen männlich (der), weiblich (die) oder sächlich (das)?",
    t10_h2: "[EN] der Baum, die Katze, das Haus",
    t10_sent: "[EN] ___ Apfel ist reif.",
    t10_c1: "[EN] Ein", t10_c2: "[EN] Eine", t10_c3: "[EN] Einen", t10_c4: "[EN] Einem",

    // T11: Interjektionen (Ausrufe!)
    t11_title: "[EN] Interjektionen (Ausrufe)",
    t11_text: "[EN] Interjektionen sind Ausrufe ohne echte grammatische Funktion: Aha!, Oh!, Pfui!, Bravo!, Hallo!",
    t11_b1: "[EN] Aha, oh, pfui, bravo!",
    t11_b2: "[EN] Oft mit Ausrufezeichen",
    t11_inst: "[EN] Erkenne die Interjektion!",
    t11_h1: "[EN] Suche nach Ausrufen ohne Verb.",
    t11_h2: "[EN] Aha!, Oh je!, Hallo!",
    t11_w1: "[EN] Oh", t11_w2: "[EN] je", t11_w3: "[EN] wie", t11_w4: "[EN] schön",
    // Quiz: MANUAL
    t11_q: "[EN] Welches Wort ist eine Interjektion?",
    t11_qa: "[EN] Aha!", t11_qb: "[EN] Angst", t11_qc: "[EN] andere", t11_qd: "[EN] alt",

    // T12: Wortart-Mix Identifikation
    t12_title: "[EN] Wortarten gemischt",
    t12_text: "[EN] Jetzt mischst du alle Wortarten durcheinander! Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel.",
    t12_b1: "[EN] Alle Wortarten erkennen",
    t12_inst: "[EN] Bestimme die Wortart jedes Wortes!",
    t12_h1: "[EN] Denke an die Fragen: Was ist es (Nomen)? Was tut es (Verb)? Wie ist es (Adjektiv)?",
    t12_h2: "[EN] Das kleine Mädchen läuft schnell.",
    t12_c_noun: "[EN] Nomen", t12_c_verb: "[EN] Verb", t12_c_adj: "[EN] Adjektiv", t12_c_adv: "[EN] Adverb",

    // T13: Wortarten in Sätzen
    t13_title: "[EN] Wortarten-Analyse",
    t13_text: "[EN] In einem Satz arbeiten alle Wortarten zusammen. Jede hat ihre Rolle und ihre Position.",
    t13_b1: "[EN] Satzbau mit verschiedenen Wortarten",
    t13_inst: "[EN] Baue einen Satz mit den richtigen Wortarten!",
    t13_h1: "[EN] Nomen (Groß!), Verb (Platz 2), Adjektiv (vor Nomen).",
    t13_h2: "[EN] Das schnelle Auto fährt vorbei.",
    t13_f1: "[EN] Das schnelle", t13_f2: "[EN] Auto", t13_f3: "[EN] fährt", t13_f4: "[EN] vorbei",

    // T14: Wortarten und Satzglied-Rolle
    t14_title: "[EN] Wortart vs. Satzglied",
    t14_text: "[EN] WICHTIG: Wortart ist, WAS das Wort ist (Nomen, Verb...). Satzglied ist, WELCHE ROLLE es hat (Subjekt, Prädikat...).",
    t14_b1: "[EN] Wortart = Kategorie (Nomen, Verb)",
    t14_b2: "[EN] Satzglied = Rolle (Subjekt, Prädikat, Objekt)",
    t14_inst: "[EN] Unterscheide Wortart und Satzglied!",
    t14_h1: "[EN] 'Der Hund' ist ein Nomen (Wortart) und Subjekt (Satzglied).",
    t14_h2: "[EN] 'bellt' ist ein Verb (Wortart) und Prädikat (Satzglied).",
    t14_qa: "[EN] Satzglied", t14_qb: "[EN] Wortart", t14_qc: "[EN] Menge", t14_qd: "[EN] Form",

    // T15: Wortarten-Profi
    t15_title: "[EN] Du bist ein Wortarten-Profi!",
    t15_text: "[EN] Du kennst alle Wortarten: Nomen, Verben, Adjektive, Pronomen, Präpositionen, Adverbien, Konjunktionen, Artikel und Interjektionen. Glückwunsch!",
    t15_b1: "[EN] Alle Wortarten perfekt",
    t15_b2: "[EN] Satzglied-Rollen verstanden",
    t15_inst: "[EN] Zeige dein Wortarten-Wissen!",
    t15_h1: "[EN] Denk an alle 9 Wortarten.",
    t15_h2: "[EN] Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel, Interjektion",
    t15_sent: "[EN] Die schöne Blume ___ im Garten.",
    t15_cc1: "[EN] wächst", t15_cc2: "[EN] Wachsen", t15_cc3: "[EN] wachsen", t15_cc4: "[EN] wächst dort",
  
  },
  hu: {

    explorer_title: "[HU] Wortarten-Palast",

    // T1: Die Wortarten-Familie
    t1_title: "[HU] Die Wortarten-Familie",
    t1_text: "[HU] In einem Satz hat jedes Wort eine feste Rolle. Wir unterscheiden Nomen (Namenwörter), Verben (Tunwörter), Adjektive (Wiewörter), Pronomen (Fürwörter) und Präpositionen (Verhältniswörter).",
    t1_b1: "[HU] Nomen, Verben, Adjektive.",
    t1_b2: "[HU] Pronomen und Präpositionen.",
    t1_inst: "[HU] Welches Wort ist eine Präposition (Verhältniswort)?",
    t1_h1: "[HU] Suche nach einem kurzen Wort, das einen Ort oder eine Richtung angibt.",
    t1_h2: "[HU] Das Wort 'auf' ist eine Präposition.",
    t1_w1: "[HU] Haus", t1_w2: "[HU] laufen", t1_w3: "[HU] auf", t1_w4: "[HU] schön",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Pronomen (Die Stellvertreter)
    t2_title: "[HU] Pronomen (Fürwörter)",
    t2_text: "[HU] Pronomen stehen 'für' ein Nomen. Sie helfen uns, Wiederholungen zu vermeiden. Statt 'Der Junge spielt' sagen wir 'Er spielt'.",
    t2_b1: "[HU] Personalpronomen: ich, du, er, sie, es...",
    t2_b2: "[HU] Possessivpronomen: mein, dein, sein...",
    t2_inst: "[HU] Finde das Pronomen im Satz!",
    t2_h1: "[HU] Welches Wort ersetzt eine Person?",
    t2_h2: "[HU] 'Wir' ist das Pronomen.",
    t2_w2_1: "[HU] Wir", t2_w2_2: "[HU] gehen", t2_w2_3: "[HU] heute", t2_w2_4: "[HU] baden", t2_w2_5: "[HU] .",
    // Quiz: MANUAL
    t2_q: "[HU] Welches Wort ist ein Possessivpronomen (Besitzanzeiger)?",
    t2_qa: "[HU] mein", t2_qb: "[HU] mir", t2_qc: "[HU] man", t2_qd: "[HU] mit",

    // T3: Präpositionen (Wo ist es?)
    t3_title: "[HU] Präpositionen",
    t3_text: "[HU] Präpositionen zeigen uns, wo etwas ist oder wann etwas passiert. Sie stehen meistens vor einem Nomen. Beispiele: in, auf, unter, vor, hinter.",
    t3_b1: "[HU] Verhältniswörter (Ort/Zeit).",
    t3_inst: "[HU] Welches Wort passt zum Bild (Katze 📦)?",
    t3_h1: "[HU] Wo ist die Katze? Sie ist im Karton.",
    t3_h2: "[HU] Die Präposition ist 'in'.",
    t3_w3_1: "[HU] in", t3_w3_2: "[HU] über", t3_w3_3: "[HU] unter", t3_w3_4: "[HU] neben",
    // Quiz: MANUAL
    t3_q: "[HU] Welches Wort ist eine Präposition?",
    t3_qa: "[HU] hinter", t3_qb: "[HU] heute", t3_qc: "[HU] hell", t3_qd: "[HU] holen",

    // T4: Wortarten sortieren
    t4_title: "[HU] Der große Sortierer",
    t4_text: "[HU] Kannst du die fünf wichtigsten Wortarten unterscheiden? Denk an die Großschreibung bei Nomen!",
    t4_b1: "[HU] Nomen, Verb, Adjektiv.",
    t4_b2: "[HU] Pronomen, Präposition.",
    t4_inst: "[HU] Sortiere die Wörter in die richtigen Boxen!",
    t4_h1: "[HU] Frage dich: Was kann man tun (Verb)? Wie ist es (Adjektiv)?",
    t4_h2: "[HU] Baum -> Nomen, singen -> Verb, bunt -> Adjektiv.",
    t4_bn: "[HU] Nomen 📦", t4_bv: "[HU] Verb 🏃", t4_ba: "[HU] Adjektiv 🎨",
    t4_i1: "[HU] Apfel", t4_i2: "[HU] lachen", t4_i3: "[HU] schnell", t4_i4: "[HU] Sonne",
    // Quiz: GENERATOR (verben_k3)

    // T5: Zahlwörter (Numerale)
    t5_title: "[HU] Zahlwörter",
    t5_text: "[HU] Auch Zahlen gehören zu einer Wortart: den Numeralen. Wir schreiben sie meistens klein (eins, zwei, viele, einige).",
    t5_b1: "[HU] eins, zwei, hundert...",
    t5_b2: "[HU] viele, einige, alle.",
    t5_inst: "[HU] Welches Wort ist ein Zahlwort (Numeral)?",
    t5_h1: "[HU] Suche nach einer Menge oder einer Zahl.",
    t5_h2: "[HU] 'viele' ist ein Zahlwort.",
    t5_w5_1: "[HU] viele", t5_w5_2: "[HU] vielleicht", t5_w5_3: "[HU] viertel", t5_w5_4: "[HU] vogel",
    // Quiz: MANUAL
    t5_q: "[HU] Wie schreiben wir Zahlwörter wie 'eins' oder 'viele' normalerweise?",
    t5_qa: "[HU] klein", t5_qb: "[HU] groß", t5_qc: "[HU] immer groß", t5_qd: "[HU] mit Bindestrich",

    // T6: Wortarten im Text erkennen
    t6_title: "[HU] Text-Analyse",
    t6_text: "[HU] In einem Satz verstecken sich viele Wortarten. Kannst du sie alle benennen?",
    t6_b1: "[HU] Nomen = Groß.",
    t6_b2: "[HU] Verben = Platz 2.",
    t6_inst: "[HU] Was ist das Wort 'mein' in diesem Satz?",
    t6_h1: "[HU] Es zeigt, wem der Hund gehört.",
    t6_h2: "[HU] Es ist ein Pronomen.",
    t6_sent_a: "[HU] Mein Hund spielt.",
    t6_ca1: "[HU] Pronomen", t6_ca2: "[HU] Nomen", t6_ca3: "[HU] Verb", t6_ca4: "[HU] Adjektiv",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wortarten-Turm (Physics Stacker!)
    t7_title: "[HU] Der Wortarten-Turm",
    t7_text: "[HU] Staple nur die Steine mit der richtigen Wortart! Heute suchen wir alle ADJEKTIVE (Wiewörter).",
    t7_b1: "[HU] Staple die Wiewörter.",
    t7_inst: "[HU] Baue einen Turm aus Adjektiven!",
    t7_h1: "[HU] Suche Wörter, die beschreiben, wie etwas ist.",
    t7_h2: "[HU] bunt, groß, schnell, klug.",
    t7_target: "[HU] Adjektiv-Turm 🧱",
    t7_s1: "[HU] bunt", t7_s2: "[HU] groß", t7_s3: "[HU] schnell", t7_s4: "[HU] Baum (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Adverbien (Umstandswörter)
    t8_title: "[HU] Adverbien (Wie? Wann? Wo?)",
    t8_text: "[HU] Adverbien beschreiben, WIE eine Handlung passiert (schnell, langsam), WANN (morgen, gestern) oder WO (hier, oben).",
    t8_b1: "[HU] Schnell, langsam, heute, hier...",
    t8_b2: "[HU] Sie ändern sich nicht.",
    t8_inst: "[HU] Finde das Adverb im Satz!",
    t8_h1: "[HU] Wie läuft das Kind? Schnell!",
    t8_h2: "[HU] Schnell ist ein Adverb.",
    t8_w1: "[HU] Das Kind", t8_w2: "[HU] läuft", t8_w3: "[HU] schnell", t8_w4: "[HU] nach Hause",
    // Quiz: MANUAL
    t8_q: "[HU] Welches Wort ist ein Adverb?",
    t8_qa: "[HU] morgen", t8_qb: "[HU] Morgen", t8_qc: "[HU] morgig", t8_qd: "[HU] Morgenrot",

    // T9: Konjunktionen (Bindewörter)
    t9_title: "[HU] Konjunktionen (Bindewörter)",
    t9_text: "[HU] Konjunktionen verbinden Wörter oder Sätze: und, oder, aber, weil, dass, wenn.",
    t9_b1: "[HU] Verbinden Wörter und Sätze",
    t9_b2: "[HU] und, oder, aber, weil, wenn",
    t9_inst: "[HU] Sortiere die Konjunktionen!",
    t9_h1: "[HU] Suche Wörter die zwei Sätze verbinden.",
    t9_h2: "[HU] und, aber, weil, dass",
    t9_box1: "[HU] Konjunktionen", t9_box2: "[HU] Keine Konjunktionen",
    t9_kw1: "[HU] weil", t9_kw2: "[HU] Hund", t9_kw3: "[HU] und", t9_kw4: "[HU] blau",

    // T10: Artikel (der, die, das) - Wiederholung
    t10_title: "[HU] Artikel - Nomen-Begleiter",
    t10_text: "[HU] Artikel stehen immer VOR Nomen. Der (maskulin), die (feminin), das (neutral). Auch unbestimmte: ein, eine, ein.",
    t10_b1: "[HU] Bestimmte Artikel: der, die, das",
    t10_b2: "[HU] Unbestimmte: ein, eine, ein",
    t10_inst: "[HU] Wähle den richtigen Artikel!",
    t10_h1: "[HU] Ist das Nomen männlich (der), weiblich (die) oder sächlich (das)?",
    t10_h2: "[HU] der Baum, die Katze, das Haus",
    t10_sent: "[HU] ___ Apfel ist reif.",
    t10_c1: "[HU] Ein", t10_c2: "[HU] Eine", t10_c3: "[HU] Einen", t10_c4: "[HU] Einem",

    // T11: Interjektionen (Ausrufe!)
    t11_title: "[HU] Interjektionen (Ausrufe)",
    t11_text: "[HU] Interjektionen sind Ausrufe ohne echte grammatische Funktion: Aha!, Oh!, Pfui!, Bravo!, Hallo!",
    t11_b1: "[HU] Aha, oh, pfui, bravo!",
    t11_b2: "[HU] Oft mit Ausrufezeichen",
    t11_inst: "[HU] Erkenne die Interjektion!",
    t11_h1: "[HU] Suche nach Ausrufen ohne Verb.",
    t11_h2: "[HU] Aha!, Oh je!, Hallo!",
    t11_w1: "[HU] Oh", t11_w2: "[HU] je", t11_w3: "[HU] wie", t11_w4: "[HU] schön",
    // Quiz: MANUAL
    t11_q: "[HU] Welches Wort ist eine Interjektion?",
    t11_qa: "[HU] Aha!", t11_qb: "[HU] Angst", t11_qc: "[HU] andere", t11_qd: "[HU] alt",

    // T12: Wortart-Mix Identifikation
    t12_title: "[HU] Wortarten gemischt",
    t12_text: "[HU] Jetzt mischst du alle Wortarten durcheinander! Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel.",
    t12_b1: "[HU] Alle Wortarten erkennen",
    t12_inst: "[HU] Bestimme die Wortart jedes Wortes!",
    t12_h1: "[HU] Denke an die Fragen: Was ist es (Nomen)? Was tut es (Verb)? Wie ist es (Adjektiv)?",
    t12_h2: "[HU] Das kleine Mädchen läuft schnell.",
    t12_c_noun: "[HU] Nomen", t12_c_verb: "[HU] Verb", t12_c_adj: "[HU] Adjektiv", t12_c_adv: "[HU] Adverb",

    // T13: Wortarten in Sätzen
    t13_title: "[HU] Wortarten-Analyse",
    t13_text: "[HU] In einem Satz arbeiten alle Wortarten zusammen. Jede hat ihre Rolle und ihre Position.",
    t13_b1: "[HU] Satzbau mit verschiedenen Wortarten",
    t13_inst: "[HU] Baue einen Satz mit den richtigen Wortarten!",
    t13_h1: "[HU] Nomen (Groß!), Verb (Platz 2), Adjektiv (vor Nomen).",
    t13_h2: "[HU] Das schnelle Auto fährt vorbei.",
    t13_f1: "[HU] Das schnelle", t13_f2: "[HU] Auto", t13_f3: "[HU] fährt", t13_f4: "[HU] vorbei",

    // T14: Wortarten und Satzglied-Rolle
    t14_title: "[HU] Wortart vs. Satzglied",
    t14_text: "[HU] WICHTIG: Wortart ist, WAS das Wort ist (Nomen, Verb...). Satzglied ist, WELCHE ROLLE es hat (Subjekt, Prädikat...).",
    t14_b1: "[HU] Wortart = Kategorie (Nomen, Verb)",
    t14_b2: "[HU] Satzglied = Rolle (Subjekt, Prädikat, Objekt)",
    t14_inst: "[HU] Unterscheide Wortart und Satzglied!",
    t14_h1: "[HU] 'Der Hund' ist ein Nomen (Wortart) und Subjekt (Satzglied).",
    t14_h2: "[HU] 'bellt' ist ein Verb (Wortart) und Prädikat (Satzglied).",
    t14_qa: "[HU] Satzglied", t14_qb: "[HU] Wortart", t14_qc: "[HU] Menge", t14_qd: "[HU] Form",

    // T15: Wortarten-Profi
    t15_title: "[HU] Du bist ein Wortarten-Profi!",
    t15_text: "[HU] Du kennst alle Wortarten: Nomen, Verben, Adjektive, Pronomen, Präpositionen, Adverbien, Konjunktionen, Artikel und Interjektionen. Glückwunsch!",
    t15_b1: "[HU] Alle Wortarten perfekt",
    t15_b2: "[HU] Satzglied-Rollen verstanden",
    t15_inst: "[HU] Zeige dein Wortarten-Wissen!",
    t15_h1: "[HU] Denk an alle 9 Wortarten.",
    t15_h2: "[HU] Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel, Interjektion",
    t15_sent: "[HU] Die schöne Blume ___ im Garten.",
    t15_cc1: "[HU] wächst", t15_cc2: "[HU] Wachsen", t15_cc3: "[HU] wachsen", t15_cc4: "[HU] wächst dort",
  
  },
  ro: {

    explorer_title: "[RO] Wortarten-Palast",

    // T1: Die Wortarten-Familie
    t1_title: "[RO] Die Wortarten-Familie",
    t1_text: "[RO] In einem Satz hat jedes Wort eine feste Rolle. Wir unterscheiden Nomen (Namenwörter), Verben (Tunwörter), Adjektive (Wiewörter), Pronomen (Fürwörter) und Präpositionen (Verhältniswörter).",
    t1_b1: "[RO] Nomen, Verben, Adjektive.",
    t1_b2: "[RO] Pronomen und Präpositionen.",
    t1_inst: "[RO] Welches Wort ist eine Präposition (Verhältniswort)?",
    t1_h1: "[RO] Suche nach einem kurzen Wort, das einen Ort oder eine Richtung angibt.",
    t1_h2: "[RO] Das Wort 'auf' ist eine Präposition.",
    t1_w1: "[RO] Haus", t1_w2: "[RO] laufen", t1_w3: "[RO] auf", t1_w4: "[RO] schön",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Pronomen (Die Stellvertreter)
    t2_title: "[RO] Pronomen (Fürwörter)",
    t2_text: "[RO] Pronomen stehen 'für' ein Nomen. Sie helfen uns, Wiederholungen zu vermeiden. Statt 'Der Junge spielt' sagen wir 'Er spielt'.",
    t2_b1: "[RO] Personalpronomen: ich, du, er, sie, es...",
    t2_b2: "[RO] Possessivpronomen: mein, dein, sein...",
    t2_inst: "[RO] Finde das Pronomen im Satz!",
    t2_h1: "[RO] Welches Wort ersetzt eine Person?",
    t2_h2: "[RO] 'Wir' ist das Pronomen.",
    t2_w2_1: "[RO] Wir", t2_w2_2: "[RO] gehen", t2_w2_3: "[RO] heute", t2_w2_4: "[RO] baden", t2_w2_5: "[RO] .",
    // Quiz: MANUAL
    t2_q: "[RO] Welches Wort ist ein Possessivpronomen (Besitzanzeiger)?",
    t2_qa: "[RO] mein", t2_qb: "[RO] mir", t2_qc: "[RO] man", t2_qd: "[RO] mit",

    // T3: Präpositionen (Wo ist es?)
    t3_title: "[RO] Präpositionen",
    t3_text: "[RO] Präpositionen zeigen uns, wo etwas ist oder wann etwas passiert. Sie stehen meistens vor einem Nomen. Beispiele: in, auf, unter, vor, hinter.",
    t3_b1: "[RO] Verhältniswörter (Ort/Zeit).",
    t3_inst: "[RO] Welches Wort passt zum Bild (Katze 📦)?",
    t3_h1: "[RO] Wo ist die Katze? Sie ist im Karton.",
    t3_h2: "[RO] Die Präposition ist 'in'.",
    t3_w3_1: "[RO] in", t3_w3_2: "[RO] über", t3_w3_3: "[RO] unter", t3_w3_4: "[RO] neben",
    // Quiz: MANUAL
    t3_q: "[RO] Welches Wort ist eine Präposition?",
    t3_qa: "[RO] hinter", t3_qb: "[RO] heute", t3_qc: "[RO] hell", t3_qd: "[RO] holen",

    // T4: Wortarten sortieren
    t4_title: "[RO] Der große Sortierer",
    t4_text: "[RO] Kannst du die fünf wichtigsten Wortarten unterscheiden? Denk an die Großschreibung bei Nomen!",
    t4_b1: "[RO] Nomen, Verb, Adjektiv.",
    t4_b2: "[RO] Pronomen, Präposition.",
    t4_inst: "[RO] Sortiere die Wörter in die richtigen Boxen!",
    t4_h1: "[RO] Frage dich: Was kann man tun (Verb)? Wie ist es (Adjektiv)?",
    t4_h2: "[RO] Baum -> Nomen, singen -> Verb, bunt -> Adjektiv.",
    t4_bn: "[RO] Nomen 📦", t4_bv: "[RO] Verb 🏃", t4_ba: "[RO] Adjektiv 🎨",
    t4_i1: "[RO] Apfel", t4_i2: "[RO] lachen", t4_i3: "[RO] schnell", t4_i4: "[RO] Sonne",
    // Quiz: GENERATOR (verben_k3)

    // T5: Zahlwörter (Numerale)
    t5_title: "[RO] Zahlwörter",
    t5_text: "[RO] Auch Zahlen gehören zu einer Wortart: den Numeralen. Wir schreiben sie meistens klein (eins, zwei, viele, einige).",
    t5_b1: "[RO] eins, zwei, hundert...",
    t5_b2: "[RO] viele, einige, alle.",
    t5_inst: "[RO] Welches Wort ist ein Zahlwort (Numeral)?",
    t5_h1: "[RO] Suche nach einer Menge oder einer Zahl.",
    t5_h2: "[RO] 'viele' ist ein Zahlwort.",
    t5_w5_1: "[RO] viele", t5_w5_2: "[RO] vielleicht", t5_w5_3: "[RO] viertel", t5_w5_4: "[RO] vogel",
    // Quiz: MANUAL
    t5_q: "[RO] Wie schreiben wir Zahlwörter wie 'eins' oder 'viele' normalerweise?",
    t5_qa: "[RO] klein", t5_qb: "[RO] groß", t5_qc: "[RO] immer groß", t5_qd: "[RO] mit Bindestrich",

    // T6: Wortarten im Text erkennen
    t6_title: "[RO] Text-Analyse",
    t6_text: "[RO] In einem Satz verstecken sich viele Wortarten. Kannst du sie alle benennen?",
    t6_b1: "[RO] Nomen = Groß.",
    t6_b2: "[RO] Verben = Platz 2.",
    t6_inst: "[RO] Was ist das Wort 'mein' in diesem Satz?",
    t6_h1: "[RO] Es zeigt, wem der Hund gehört.",
    t6_h2: "[RO] Es ist ein Pronomen.",
    t6_sent_a: "[RO] Mein Hund spielt.",
    t6_ca1: "[RO] Pronomen", t6_ca2: "[RO] Nomen", t6_ca3: "[RO] Verb", t6_ca4: "[RO] Adjektiv",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wortarten-Turm (Physics Stacker!)
    t7_title: "[RO] Der Wortarten-Turm",
    t7_text: "[RO] Staple nur die Steine mit der richtigen Wortart! Heute suchen wir alle ADJEKTIVE (Wiewörter).",
    t7_b1: "[RO] Staple die Wiewörter.",
    t7_inst: "[RO] Baue einen Turm aus Adjektiven!",
    t7_h1: "[RO] Suche Wörter, die beschreiben, wie etwas ist.",
    t7_h2: "[RO] bunt, groß, schnell, klug.",
    t7_target: "[RO] Adjektiv-Turm 🧱",
    t7_s1: "[RO] bunt", t7_s2: "[RO] groß", t7_s3: "[RO] schnell", t7_s4: "[RO] Baum (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Adverbien (Umstandswörter)
    t8_title: "[RO] Adverbien (Wie? Wann? Wo?)",
    t8_text: "[RO] Adverbien beschreiben, WIE eine Handlung passiert (schnell, langsam), WANN (morgen, gestern) oder WO (hier, oben).",
    t8_b1: "[RO] Schnell, langsam, heute, hier...",
    t8_b2: "[RO] Sie ändern sich nicht.",
    t8_inst: "[RO] Finde das Adverb im Satz!",
    t8_h1: "[RO] Wie läuft das Kind? Schnell!",
    t8_h2: "[RO] Schnell ist ein Adverb.",
    t8_w1: "[RO] Das Kind", t8_w2: "[RO] läuft", t8_w3: "[RO] schnell", t8_w4: "[RO] nach Hause",
    // Quiz: MANUAL
    t8_q: "[RO] Welches Wort ist ein Adverb?",
    t8_qa: "[RO] morgen", t8_qb: "[RO] Morgen", t8_qc: "[RO] morgig", t8_qd: "[RO] Morgenrot",

    // T9: Konjunktionen (Bindewörter)
    t9_title: "[RO] Konjunktionen (Bindewörter)",
    t9_text: "[RO] Konjunktionen verbinden Wörter oder Sätze: und, oder, aber, weil, dass, wenn.",
    t9_b1: "[RO] Verbinden Wörter und Sätze",
    t9_b2: "[RO] und, oder, aber, weil, wenn",
    t9_inst: "[RO] Sortiere die Konjunktionen!",
    t9_h1: "[RO] Suche Wörter die zwei Sätze verbinden.",
    t9_h2: "[RO] und, aber, weil, dass",
    t9_box1: "[RO] Konjunktionen", t9_box2: "[RO] Keine Konjunktionen",
    t9_kw1: "[RO] weil", t9_kw2: "[RO] Hund", t9_kw3: "[RO] und", t9_kw4: "[RO] blau",

    // T10: Artikel (der, die, das) - Wiederholung
    t10_title: "[RO] Artikel - Nomen-Begleiter",
    t10_text: "[RO] Artikel stehen immer VOR Nomen. Der (maskulin), die (feminin), das (neutral). Auch unbestimmte: ein, eine, ein.",
    t10_b1: "[RO] Bestimmte Artikel: der, die, das",
    t10_b2: "[RO] Unbestimmte: ein, eine, ein",
    t10_inst: "[RO] Wähle den richtigen Artikel!",
    t10_h1: "[RO] Ist das Nomen männlich (der), weiblich (die) oder sächlich (das)?",
    t10_h2: "[RO] der Baum, die Katze, das Haus",
    t10_sent: "[RO] ___ Apfel ist reif.",
    t10_c1: "[RO] Ein", t10_c2: "[RO] Eine", t10_c3: "[RO] Einen", t10_c4: "[RO] Einem",

    // T11: Interjektionen (Ausrufe!)
    t11_title: "[RO] Interjektionen (Ausrufe)",
    t11_text: "[RO] Interjektionen sind Ausrufe ohne echte grammatische Funktion: Aha!, Oh!, Pfui!, Bravo!, Hallo!",
    t11_b1: "[RO] Aha, oh, pfui, bravo!",
    t11_b2: "[RO] Oft mit Ausrufezeichen",
    t11_inst: "[RO] Erkenne die Interjektion!",
    t11_h1: "[RO] Suche nach Ausrufen ohne Verb.",
    t11_h2: "[RO] Aha!, Oh je!, Hallo!",
    t11_w1: "[RO] Oh", t11_w2: "[RO] je", t11_w3: "[RO] wie", t11_w4: "[RO] schön",
    // Quiz: MANUAL
    t11_q: "[RO] Welches Wort ist eine Interjektion?",
    t11_qa: "[RO] Aha!", t11_qb: "[RO] Angst", t11_qc: "[RO] andere", t11_qd: "[RO] alt",

    // T12: Wortart-Mix Identifikation
    t12_title: "[RO] Wortarten gemischt",
    t12_text: "[RO] Jetzt mischst du alle Wortarten durcheinander! Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel.",
    t12_b1: "[RO] Alle Wortarten erkennen",
    t12_inst: "[RO] Bestimme die Wortart jedes Wortes!",
    t12_h1: "[RO] Denke an die Fragen: Was ist es (Nomen)? Was tut es (Verb)? Wie ist es (Adjektiv)?",
    t12_h2: "[RO] Das kleine Mädchen läuft schnell.",
    t12_c_noun: "[RO] Nomen", t12_c_verb: "[RO] Verb", t12_c_adj: "[RO] Adjektiv", t12_c_adv: "[RO] Adverb",

    // T13: Wortarten in Sätzen
    t13_title: "[RO] Wortarten-Analyse",
    t13_text: "[RO] In einem Satz arbeiten alle Wortarten zusammen. Jede hat ihre Rolle und ihre Position.",
    t13_b1: "[RO] Satzbau mit verschiedenen Wortarten",
    t13_inst: "[RO] Baue einen Satz mit den richtigen Wortarten!",
    t13_h1: "[RO] Nomen (Groß!), Verb (Platz 2), Adjektiv (vor Nomen).",
    t13_h2: "[RO] Das schnelle Auto fährt vorbei.",
    t13_f1: "[RO] Das schnelle", t13_f2: "[RO] Auto", t13_f3: "[RO] fährt", t13_f4: "[RO] vorbei",

    // T14: Wortarten und Satzglied-Rolle
    t14_title: "[RO] Wortart vs. Satzglied",
    t14_text: "[RO] WICHTIG: Wortart ist, WAS das Wort ist (Nomen, Verb...). Satzglied ist, WELCHE ROLLE es hat (Subjekt, Prädikat...).",
    t14_b1: "[RO] Wortart = Kategorie (Nomen, Verb)",
    t14_b2: "[RO] Satzglied = Rolle (Subjekt, Prädikat, Objekt)",
    t14_inst: "[RO] Unterscheide Wortart und Satzglied!",
    t14_h1: "[RO] 'Der Hund' ist ein Nomen (Wortart) und Subjekt (Satzglied).",
    t14_h2: "[RO] 'bellt' ist ein Verb (Wortart) und Prädikat (Satzglied).",
    t14_qa: "[RO] Satzglied", t14_qb: "[RO] Wortart", t14_qc: "[RO] Menge", t14_qd: "[RO] Form",

    // T15: Wortarten-Profi
    t15_title: "[RO] Du bist ein Wortarten-Profi!",
    t15_text: "[RO] Du kennst alle Wortarten: Nomen, Verben, Adjektive, Pronomen, Präpositionen, Adverbien, Konjunktionen, Artikel und Interjektionen. Glückwunsch!",
    t15_b1: "[RO] Alle Wortarten perfekt",
    t15_b2: "[RO] Satzglied-Rollen verstanden",
    t15_inst: "[RO] Zeige dein Wortarten-Wissen!",
    t15_h1: "[RO] Denk an alle 9 Wortarten.",
    t15_h2: "[RO] Nomen, Verb, Adjektiv, Pronomen, Präposition, Adverb, Konjunktion, Artikel, Interjektion",
    t15_sent: "[RO] Die schöne Blume ___ im Garten.",
    t15_cc1: "[RO] wächst", t15_cc2: "[RO] Wachsen", t15_cc3: "[RO] wachsen", t15_cc4: "[RO] wächst dort",
  
  }
};

export const WORTART_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏷️", label: "Nomen" }, { emoji: "🏃", label: "Verb" }, { emoji: "🎨", label: "Adjektiv" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "ich", color: "#1E40AF", bg: "#DBEAFE" }, { text: "mein", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [0],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "📦", label: "in / auf" }] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [0],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Nomen"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Verb"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t4_bn" }, { id: "v", label: "t4_bv" }, { id: "a", label: "t4_ba" }],
      items: [
        { text: "t4_i1", bucketId: "n" },
        { text: "t4_i2", bucketId: "v" },
        { text: "t4_i3", bucketId: "a" },
        { text: "t4_i4", bucketId: "n" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "viele", highlightChars: ["v"], color: "#F59E0B" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4"],
      correctIndices: [0],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Mein", "Hund", "spielt"], highlightIndices: [0], color: "#10B981" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_a",
      choices: ["t6_ca1", "t6_ca2", "t6_ca3", "t6_ca4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stein auf Stein", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-stacker",
      words: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctOrder: [0, 1, 2],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "schnell, morgen, hier", color: "#F59E0B", bg: "#FEF3C7" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [2],
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "icon-grid", items: [{ emoji: "🔗", label: "und" }, { emoji: "❓", label: "oder" }, { emoji: "🚫", label: "aber" }] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "k", label: "t9_box1" }, { id: "n", label: "t9_box2" }],
      items: [
        { text: "t9_kw1", bucketId: "k" },
        { text: "t9_kw2", bucketId: "n" },
        { text: "t9_kw3", bucketId: "k" },
        { text: "t9_kw4", bucketId: "n" },
      ],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "article-noun", article: "Ein", articleColor: "#3B82F6", noun: "Apfel", emoji: "🍎" },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "easy",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "Aha!, Oh!, Hallo!", color: "#EC4899", bg: "#FCE7F3" }] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [0],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [{ emoji: "📦", label: "Nomen" }, { emoji: "🏃", label: "Verb" }, { emoji: "🎨", label: "Adjektiv" }, { emoji: "🚀", label: "Adverb" }] },
    bulletKeys: ["t12_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "n", label: "t12_c_noun" }, { id: "v", label: "t12_c_verb" }, { id: "a", label: "t12_c_adj" }, { id: "ad", label: "t12_c_adv" }],
      items: [
        { text: "Das Mädchen", bucketId: "n" },
        { text: "läuft", bucketId: "v" },
        { text: "kleine", bucketId: "a" },
        { text: "schnell", bucketId: "ad" },
      ],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🔬", title: "Wortarten-Analyse", bg: "#F1F5F9" },
    bulletKeys: ["t13_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t13_f1", "t13_f2", "t13_f3", "t13_f4"],
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["Wortart"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Satzglied"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "Der Hund (Nomen)", right: "t14_qa" },
        { left: "bellt (Verb)", right: "t14_qb" },
        { left: "schnell (Adverb)", right: "t14_qa" },
        { left: "weiß (Adjektiv)", right: "t14_qa" },
      ],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent",
      choices: ["t15_cc1", "t15_cc2", "t15_cc3", "t15_cc4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "verben_k3" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Satzgliederinsel
// Thema: Subjekt, Prädikat, Objekt (Akk/Dat), Adverbiale Bestimmung
// ─────────────────────────────────────────────────────────────────────────────

export const SATZGLIED4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzbau-Meisterwerk",

    // T1: Subjekt und Prädikat (Wiederholung)
    t1_title: "Das Grundgerüst",
    t1_text: "Jeder Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut es?). Sie sind das Herzstück des Satzes.",
    t1_b1: "Subjekt = Der Täter.",
    t1_b2: "Prädikat = Die Handlung.",
    t1_inst: "Finde das Subjekt in diesem Satz!",
    t1_h1: "Frage: Wer oder was rennt schnell?",
    t1_h2: "'Das Pferd' ist das Subjekt.",
    t1_w1: "Das Pferd", t1_w2: "rennt", t1_w3: "schnell", t1_w4: "über die Wiese", t1_w5: ".",
    t1_q: "Welches Satzglied ist 'rennt' im Satz 'Das Pferd rennt'?",
    t1_qa: "Prädikat", t1_qb: "Subjekt", t1_qc: "Objekt", t1_qd: "Adverbiale",

    // T2: Das Akkusativ-Objekt (Wen-Ergänzung)
    t2_title: "Das Akkusativ-Objekt",
    t2_text: "Das Akkusativ-Objekt ist die Wen-oder-Was-Ergänzung. Wir fragen: Wen oder was sieht das Kind? Den Regenbogen.",
    t2_b1: "Frage: Wen oder was?",
    t2_b2: "Oft im 4. Fall (Akkusativ).",
    t2_inst: "Klicke auf das Akkusativ-Objekt!",
    t2_h1: "Frage: Wen oder was kauft der Vater?",
    t2_h2: "Er kauft 'einen Apfel'.",
    t2_w2_1: "Der Vater", t2_w2_2: "kauft", t2_w2_3: "einen Apfel", t2_w2_4: ".",
    t2_q: "Wie fragen wir nach dem Akkusativ-Objekt?",
    t2_qa: "Wen oder was?", t2_qb: "Wem?", t2_qc: "Wo?", t2_qd: "Wann?",

    // T3: Das Dativ-Objekt (Wem-Ergänzung)
    t3_title: "Das Dativ-Objekt",
    t3_text: "Das Dativ-Objekt ist die Wem-Ergänzung. Wir fragen: Wem gibt die Lehrerin das Buch? Dem Schüler.",
    t3_b1: "Frage: Wem?",
    t3_b2: "Oft im 3. Fall (Dativ).",
    t3_inst: "Welches Satzglied ist 'dem Freund'?",
    t3_h1: "Frage: WEM hilft das Mädchen?",
    t3_h2: "Es ist das Dativ-Objekt.",
    t3_sent: "Das Mädchen hilft ___.",
    t3_c1: "dem Freund (Dativ-Objekt)", t3_c2: "den Freund (Akkusativ-Objekt)", t3_c3: "der Freund (Subjekt)", t3_c4: "hilft (Prädikat)",
    t3_q: "Was ist das Dativ-Objekt in: 'Ich danke dem Lehrer.'?",
    t3_qa: "dem Lehrer", t3_qb: "Ich", t3_qc: "danke", t3_qd: "Es gibt keins",

    // T4: Adverbiale Bestimmung der Zeit (Wann?)
    t4_title: "Wann passiert es?",
    t4_text: "Die adverbiale Bestimmung der Zeit (Zeitergänzung) sagt uns, wann etwas passiert. Wir fragen: Wann, wie lange oder wie oft?",
    t4_b1: "Frage: Wann?",
    t4_b2: "Beispiele: heute, gestern, am Abend.",
    t4_inst: "Finde die Zeitergänzung im Satz!",
    t4_h1: "Welches Wort sagt uns, WANN wir ins Kino gehen?",
    t4_h2: "'Heute Abend' ist die Zeitergänzung.",
    t4_w4_1: "Heute Abend", t4_w4_2: "gehen", t4_w4_3: "wir", t4_w4_4: "ins Kino", t4_w4_5: ".",
    t4_q: "Welches Wort ist eine adverbiale Bestimmung der Zeit?",
    t4_qa: "morgens", t4_qb: "dort", t4_qc: "schnell", t4_qd: "laufen",

    // T5: Adverbiale Bestimmung des Ortes (Wo?)
    t5_title: "Wo passiert es?",
    t5_text: "Die adverbiale Bestimmung des Ortes (Ortsergänzung) sagt uns, wo etwas ist oder wohin etwas geht. Wir fragen: Wo, woher oder wohin?",
    t5_b1: "Frage: Wo / Wohin?",
    t5_b2: "Beispiele: im Park, nach Hause, dort.",
    t5_inst: "Sortiere die Satzglieder!",
    t5_h1: "Frage nach dem Ort (Wo?) und der Zeit (Wann?).",
    t5_h2: "im Wald -> Ort. am Sonntag -> Zeit.",
    t5_bo: "Ort 📍", t5_bz: "Zeit 🕒",
    t5_i1: "im Garten", t5_i2: "gestern", t5_i3: "nach Berlin", t5_i4: "um 8 Uhr",
    t5_q: "Welche Frage gehört zur Ortsergänzung?",
    t5_qa: "Wo?", t5_qb: "Wann?", t5_qc: "Wie?", t5_qd: "Warum?",

    // T6: Satzglieder bestimmen (Mix)
    t6_title: "Der Profi-Check",
    t6_text: "Ein Satz kann viele Glieder haben. Kannst du sie alle in einem Satz finden? Subjekt, Prädikat, Objekt und Adverbiale.",
    t6_b1: "Bestimme alle Teile.",
    t6_inst: "Bringe die Bausteine in die richtige Reihenfolge!",
    t6_h1: "Beginne mit der Zeit (Morgen), dann das Prädikat (besucht).",
    t6_h2: "Morgen besucht uns die Tante.",
    t6_o1: "Morgen", t6_o2: "besucht", t6_o3: "uns", t6_o4: "die Tante.",
    t6_q: "Was ist 'Morgen' im Satz 'Morgen besucht uns die Tante'?",
    t6_qa: "Zeitergänzung", t6_qb: "Ortsergänzung", t6_qc: "Subjekt", t6_qd: "Objekt",

    // T7: Satzglied-Stapler (Physics!)
    t7_title: "Der Glieder-Stapler",
    t7_text: "Nur die Steine mit OBJEKTEN dürfen auf den Stapel! Achte auf die Fragen 'Wen?' und 'Wem?'.",
    t7_b1: "Sammle Akkusativ- und Dativ-Objekte.",
    t7_inst: "Staple nur die Objekte!",
    t7_h1: "Suche nach Ergänzungen wie 'den Ball' oder 'mir'.",
    t7_h2: "den Brief (Akk-Objekt), dem Kind (Dat-Objekt).",
    t7_target: "Objekt-Stapel 🧱",
    t7_s1: "den Brief", t7_s2: "dem Kind", t7_s3: "die Tasche", t7_s4: "läuft (Falsch)",

    // T8: Genitivobjekt (Possessivum)
    t8_title: "Das Genitiv-Objekt",
    t8_text: "Es gibt auch Verben mit Genitiv-Objekt, aber diese sind selten: 'Ich gedenke der Verstorbenen.' oder 'Sie bedarf seiner Hilfe.'",
    t8_b1: "Frage: Wessen?",
    t8_b2: "Sehr selten im Deutschen.",
    t8_inst: "Erkenne das Genitiv-Objekt!",
    t8_h1: "Suche ein Objekt im 2. Fall (Genitiv).",
    t8_h2: "Wessen Stift? = Genitiv-Objekt",
    t8_sent: "Die Schule bedarf ___.",
    t8_ca1: "einer modernen Infrastruktur", t8_ca2: "mit moderner Infrastruktur", t8_ca3: "an Infrastruktur", t8_ca4: "zur Infrastruktur",

    // T9: Adverbiale Bestimmung der Art und Weise
    t9_title: "Wie passiert es? (Art & Weise)",
    t9_text: "Diese Adverbiale sagt uns, WIE eine Handlung passiert: schnell, langsam, vorsichtig, mit Vorsicht.",
    t9_b1: "Wie? = Art und Weise",
    t9_b2: "schnell, langsam, schön, vorsichtig",
    t9_inst: "Finde die Adverbiale der Art und Weise!",
    t9_h1: "WIE rennt das Pferd?",
    t9_h2: "Schnell!",
    t9_w1: "Das Pferd", t9_w2: "springt", t9_w3: "hoch", t9_w4: "über den Bach",

    // T10: Adverbiale Bestimmung des Grundes
    t10_title: "Warum passiert es? (Grund)",
    t10_text: "Warum und weshalb? Diese Adverbiale erklärt den Grund einer Handlung. Sie antworten auf 'Warum?'",
    t10_b1: "Warum? = Grund",
    t10_b2: "aus Angst, vor Freude, wegen...",
    t10_inst: "Sortiere Grund und Zeit!",
    t10_h1: "Frage: Warum/Grund oder Wann/Zeit?",
    t10_h2: "aus Hunger = Grund. morgens = Zeit.",
    t10_l: "Grund 🤔", t10_r: "Zeit 🕒",
    t10_v1: "aus Freude", t10_v2: "gestern", t10_v3: "wegen des Regens", t10_v4: "nächste Woche",

    // T11: Adverbiale Bestimmung des Zwecks
    t11_title: "Wozu? (Zweck/Absicht)",
    t11_text: "Zweckadverbiale sagen, WOZU oder ZU WELCHEM ZWECK eine Handlung passiert: um zu lernen, zur Schule gehen.",
    t11_b1: "Wozu? = Zweck",
    t11_b2: "um zu..., zu... (Infinitiv)",
    t11_inst: "Erkenne die Zweckadverbiale!",
    t11_h1: "WOZU gehen wir zur Schule?",
    t11_h2: "Um zu lernen!",
    t11_sent2: "Das Kind geht zur Schule, ___.",
    t11_cc1: "um zu lernen", t11_cc2: "wenn es lernen will", t11_cc3: "weil es lernt", t11_cc4: "für das Lernen",

    // T12: Satzglieder in komplexen Sätzen
    t12_title: "Satzglieder-Mix",
    t12_text: "Ein Satz kann viele Adverbiale haben! Der Junge kauft HEUTE (Zeit) IM SUPERMARKT (Ort) MIT SEINEM VATER (Begleitung) SCHNELL (Art) ein Geschenk (Objekt).",
    t12_b1: "Mehrere Adverbiale kombinieren",
    t12_inst: "Bestimme alle Satzglieder!",
    t12_h1: "Frag nacheinander: Wer? Was? Wo? Wann? Wie?",
    t12_h2: "Das Kind (Subj), isst (Präd), einen Apfel (Obj), schnell (Art).",
    t12_q: "Was ist 'schnell' im Satz?",
    t12_qa: "Adverbiale der Art und Weise", t12_qb: "Adverbiale der Zeit", t12_qc: "Adverbiale des Ortes", t12_qd: "Adverbiale des Grundes",

    // T13: Präpositionales Objekt
    t13_title: "Das präpositionale Objekt",
    t13_text: "Manche Verben brauchen eine bestimmte Präposition mit Objekt: auf etwas warten, über etwas sprechen, mit jemandem spielen.",
    t13_b1: "Präposition + Objekts-Form",
    t13_b2: "abhängig vom Verb",
    t13_inst: "Finde das präpositionale Objekt!",
    t13_h1: "Auf WEN oder WAS wartest du?",
    t13_h2: "auf meinen Freund = präpositionales Objekt.",
    t13_sent3: "Wir warten ___.",
    t13_cb1: "auf den Bus", t13_cb2: "den Bus", t13_cb3: "dem Bus", t13_cb4: "in den Bus",

    // T14: Satzglieder und Wortstellung
    t14_title: "Wortstellung und Satzglieder",
    t14_text: "Die Reihenfolge der Satzglieder bestimmt, welches Wort wichtig ist! Vergleich: Der Junge sieht den Ball. Den Ball sieht der Junge.",
    t14_b1: "Veränderung der Wortstellung",
    t14_b2: "Veränderung der Betonung",
    t14_inst: "Ordne die Satzglieder neu!",
    t14_h1: "Normale Reihenfolge: Subjekt, Prädikat, Objekt.",
    t14_h2: "Besonderheit: Objekt vorne = betont.",
    t14_f1: "Der Hund", t14_f2: "frisst", t14_f3: "einen Knochen", t14_f4: "im Garten",

    // T15: Du bist ein Satzglied-Profi!
    t15_title: "Du bist ein Satzglied-Profi!",
    t15_text: "Du kennst alle Satzglieder: Subjekt, Prädikat, Objekte (Akk, Dat, Gen), Adverbiale (Zeit, Ort, Art, Grund, Zweck) und präpositionale Objekte.",
    t15_b1: "Alle Satzglieder perfekt",
    t15_b2: "Fragen korrekt stellen",
    t15_inst: "Zeige dein Satzglied-Wissen!",
    t15_h1: "Denk an die Fragen: Wer? Was? Wen? Wem? Wessen? Wo? Wann? Wie? Warum? Wozu?",
    t15_h2: "Das ist die Satzglied-Meister-Frage!",
    t15_sent4: "Die Schüler spielen ___ ___ ___ Fußball.",
    t15_cc1: "morgens im Park gerne", t15_cc2: "im Parkmorgens gerne", t15_cc3: "gerne morgens im Park", t15_cc4: "gerne im Parkmorgens",
  },
  en: {

    explorer_title: "[EN] Satzbau-Meisterwerk",

    // T1: Subjekt und Prädikat (Wiederholung)
    t1_title: "[EN] Das Grundgerüst",
    t1_text: "[EN] Jeder Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut es?). Sie sind das Herzstück des Satzes.",
    t1_b1: "[EN] Subjekt = Der Täter.",
    t1_b2: "[EN] Prädikat = Die Handlung.",
    t1_inst: "[EN] Finde das Subjekt in diesem Satz!",
    t1_h1: "[EN] Frage: Wer oder was rennt schnell?",
    t1_h2: "[EN] 'Das Pferd' ist das Subjekt.",
    t1_w1: "[EN] Das Pferd", t1_w2: "[EN] rennt", t1_w3: "[EN] schnell", t1_w4: "[EN] über die Wiese", t1_w5: "[EN] .",
    t1_q: "[EN] Welches Satzglied ist 'rennt' im Satz 'Das Pferd rennt'?",
    t1_qa: "[EN] Prädikat", t1_qb: "[EN] Subjekt", t1_qc: "[EN] Objekt", t1_qd: "[EN] Adverbiale",

    // T2: Das Akkusativ-Objekt (Wen-Ergänzung)
    t2_title: "[EN] Das Akkusativ-Objekt",
    t2_text: "[EN] Das Akkusativ-Objekt ist die Wen-oder-Was-Ergänzung. Wir fragen: Wen oder was sieht das Kind? Den Regenbogen.",
    t2_b1: "[EN] Frage: Wen oder was?",
    t2_b2: "[EN] Oft im 4. Fall (Akkusativ).",
    t2_inst: "[EN] Klicke auf das Akkusativ-Objekt!",
    t2_h1: "[EN] Frage: Wen oder was kauft der Vater?",
    t2_h2: "[EN] Er kauft 'einen Apfel'.",
    t2_w2_1: "[EN] Der Vater", t2_w2_2: "[EN] kauft", t2_w2_3: "[EN] einen Apfel", t2_w2_4: "[EN] .",
    t2_q: "[EN] Wie fragen wir nach dem Akkusativ-Objekt?",
    t2_qa: "[EN] Wen oder was?", t2_qb: "[EN] Wem?", t2_qc: "[EN] Wo?", t2_qd: "[EN] Wann?",

    // T3: Das Dativ-Objekt (Wem-Ergänzung)
    t3_title: "[EN] Das Dativ-Objekt",
    t3_text: "[EN] Das Dativ-Objekt ist die Wem-Ergänzung. Wir fragen: Wem gibt die Lehrerin das Buch? Dem Schüler.",
    t3_b1: "[EN] Frage: Wem?",
    t3_b2: "[EN] Oft im 3. Fall (Dativ).",
    t3_inst: "[EN] Welches Satzglied ist 'dem Freund'?",
    t3_h1: "[EN] Frage: WEM hilft das Mädchen?",
    t3_h2: "[EN] Es ist das Dativ-Objekt.",
    t3_sent: "[EN] Das Mädchen hilft ___.",
    t3_c1: "[EN] dem Freund (Dativ-Objekt)", t3_c2: "[EN] den Freund (Akkusativ-Objekt)", t3_c3: "[EN] der Freund (Subjekt)", t3_c4: "[EN] hilft (Prädikat)",
    t3_q: "[EN] Was ist das Dativ-Objekt in: 'Ich danke dem Lehrer.'?",
    t3_qa: "[EN] dem Lehrer", t3_qb: "[EN] Ich", t3_qc: "[EN] danke", t3_qd: "[EN] Es gibt keins",

    // T4: Adverbiale Bestimmung der Zeit (Wann?)
    t4_title: "[EN] Wann passiert es?",
    t4_text: "[EN] Die adverbiale Bestimmung der Zeit (Zeitergänzung) sagt uns, wann etwas passiert. Wir fragen: Wann, wie lange oder wie oft?",
    t4_b1: "[EN] Frage: Wann?",
    t4_b2: "[EN] Beispiele: heute, gestern, am Abend.",
    t4_inst: "[EN] Finde die Zeitergänzung im Satz!",
    t4_h1: "[EN] Welches Wort sagt uns, WANN wir ins Kino gehen?",
    t4_h2: "[EN] 'Heute Abend' ist die Zeitergänzung.",
    t4_w4_1: "[EN] Heute Abend", t4_w4_2: "[EN] gehen", t4_w4_3: "[EN] wir", t4_w4_4: "[EN] ins Kino", t4_w4_5: "[EN] .",
    t4_q: "[EN] Welches Wort ist eine adverbiale Bestimmung der Zeit?",
    t4_qa: "[EN] morgens", t4_qb: "[EN] dort", t4_qc: "[EN] schnell", t4_qd: "[EN] laufen",

    // T5: Adverbiale Bestimmung des Ortes (Wo?)
    t5_title: "[EN] Wo passiert es?",
    t5_text: "[EN] Die adverbiale Bestimmung des Ortes (Ortsergänzung) sagt uns, wo etwas ist oder wohin etwas geht. Wir fragen: Wo, woher oder wohin?",
    t5_b1: "[EN] Frage: Wo / Wohin?",
    t5_b2: "[EN] Beispiele: im Park, nach Hause, dort.",
    t5_inst: "[EN] Sortiere die Satzglieder!",
    t5_h1: "[EN] Frage nach dem Ort (Wo?) und der Zeit (Wann?).",
    t5_h2: "[EN] im Wald -> Ort. am Sonntag -> Zeit.",
    t5_bo: "[EN] Ort 📍", t5_bz: "[EN] Zeit 🕒",
    t5_i1: "[EN] im Garten", t5_i2: "[EN] gestern", t5_i3: "[EN] nach Berlin", t5_i4: "[EN] um 8 Uhr",
    t5_q: "[EN] Welche Frage gehört zur Ortsergänzung?",
    t5_qa: "[EN] Wo?", t5_qb: "[EN] Wann?", t5_qc: "[EN] Wie?", t5_qd: "[EN] Warum?",

    // T6: Satzglieder bestimmen (Mix)
    t6_title: "[EN] Der Profi-Check",
    t6_text: "[EN] Ein Satz kann viele Glieder haben. Kannst du sie alle in einem Satz finden? Subjekt, Prädikat, Objekt und Adverbiale.",
    t6_b1: "[EN] Bestimme alle Teile.",
    t6_inst: "[EN] Bringe die Bausteine in die richtige Reihenfolge!",
    t6_h1: "[EN] Beginne mit der Zeit (Morgen), dann das Prädikat (besucht).",
    t6_h2: "[EN] Morgen besucht uns die Tante.",
    t6_o1: "[EN] Morgen", t6_o2: "[EN] besucht", t6_o3: "[EN] uns", t6_o4: "[EN] die Tante.",
    t6_q: "[EN] Was ist 'Morgen' im Satz 'Morgen besucht uns die Tante'?",
    t6_qa: "[EN] Zeitergänzung", t6_qb: "[EN] Ortsergänzung", t6_qc: "[EN] Subjekt", t6_qd: "[EN] Objekt",

    // T7: Satzglied-Stapler (Physics!)
    t7_title: "[EN] Der Glieder-Stapler",
    t7_text: "[EN] Nur die Steine mit OBJEKTEN dürfen auf den Stapel! Achte auf die Fragen 'Wen?' und 'Wem?'.",
    t7_b1: "[EN] Sammle Akkusativ- und Dativ-Objekte.",
    t7_inst: "[EN] Staple nur die Objekte!",
    t7_h1: "[EN] Suche nach Ergänzungen wie 'den Ball' oder 'mir'.",
    t7_h2: "[EN] den Brief (Akk-Objekt), dem Kind (Dat-Objekt).",
    t7_target: "[EN] Objekt-Stapel 🧱",
    t7_s1: "[EN] den Brief", t7_s2: "[EN] dem Kind", t7_s3: "[EN] die Tasche", t7_s4: "[EN] läuft (Falsch)",

    // T8: Genitivobjekt (Possessivum)
    t8_title: "[EN] Das Genitiv-Objekt",
    t8_text: "[EN] Es gibt auch Verben mit Genitiv-Objekt, aber diese sind selten: 'Ich gedenke der Verstorbenen.' oder 'Sie bedarf seiner Hilfe.'",
    t8_b1: "[EN] Frage: Wessen?",
    t8_b2: "[EN] Sehr selten im Deutschen.",
    t8_inst: "[EN] Erkenne das Genitiv-Objekt!",
    t8_h1: "[EN] Suche ein Objekt im 2. Fall (Genitiv).",
    t8_h2: "[EN] Wessen Stift? = Genitiv-Objekt",
    t8_sent: "[EN] Die Schule bedarf ___.",
    t8_ca1: "[EN] einer modernen Infrastruktur", t8_ca2: "[EN] mit moderner Infrastruktur", t8_ca3: "[EN] an Infrastruktur", t8_ca4: "[EN] zur Infrastruktur",

    // T9: Adverbiale Bestimmung der Art und Weise
    t9_title: "[EN] Wie passiert es? (Art & Weise)",
    t9_text: "[EN] Diese Adverbiale sagt uns, WIE eine Handlung passiert: schnell, langsam, vorsichtig, mit Vorsicht.",
    t9_b1: "[EN] Wie? = Art und Weise",
    t9_b2: "[EN] schnell, langsam, schön, vorsichtig",
    t9_inst: "[EN] Finde die Adverbiale der Art und Weise!",
    t9_h1: "[EN] WIE rennt das Pferd?",
    t9_h2: "[EN] Schnell!",
    t9_w1: "[EN] Das Pferd", t9_w2: "[EN] springt", t9_w3: "[EN] hoch", t9_w4: "[EN] über den Bach",

    // T10: Adverbiale Bestimmung des Grundes
    t10_title: "[EN] Warum passiert es? (Grund)",
    t10_text: "[EN] Warum und weshalb? Diese Adverbiale erklärt den Grund einer Handlung. Sie antworten auf 'Warum?'",
    t10_b1: "[EN] Warum? = Grund",
    t10_b2: "[EN] aus Angst, vor Freude, wegen...",
    t10_inst: "[EN] Sortiere Grund und Zeit!",
    t10_h1: "[EN] Frage: Warum/Grund oder Wann/Zeit?",
    t10_h2: "[EN] aus Hunger = Grund. morgens = Zeit.",
    t10_l: "[EN] Grund 🤔", t10_r: "[EN] Zeit 🕒",
    t10_v1: "[EN] aus Freude", t10_v2: "[EN] gestern", t10_v3: "[EN] wegen des Regens", t10_v4: "[EN] nächste Woche",

    // T11: Adverbiale Bestimmung des Zwecks
    t11_title: "[EN] Wozu? (Zweck/Absicht)",
    t11_text: "[EN] Zweckadverbiale sagen, WOZU oder ZU WELCHEM ZWECK eine Handlung passiert: um zu lernen, zur Schule gehen.",
    t11_b1: "[EN] Wozu? = Zweck",
    t11_b2: "[EN] um zu..., zu... (Infinitiv)",
    t11_inst: "[EN] Erkenne die Zweckadverbiale!",
    t11_h1: "[EN] WOZU gehen wir zur Schule?",
    t11_h2: "[EN] Um zu lernen!",
    t11_sent2: "[EN] Das Kind geht zur Schule, ___.",
    t11_cc1: "[EN] um zu lernen", t11_cc2: "[EN] wenn es lernen will", t11_cc3: "[EN] weil es lernt", t11_cc4: "[EN] für das Lernen",

    // T12: Satzglieder in komplexen Sätzen
    t12_title: "[EN] Satzglieder-Mix",
    t12_text: "[EN] Ein Satz kann viele Adverbiale haben! Der Junge kauft HEUTE (Zeit) IM SUPERMARKT (Ort) MIT SEINEM VATER (Begleitung) SCHNELL (Art) ein Geschenk (Objekt).",
    t12_b1: "[EN] Mehrere Adverbiale kombinieren",
    t12_inst: "[EN] Bestimme alle Satzglieder!",
    t12_h1: "[EN] Frag nacheinander: Wer? Was? Wo? Wann? Wie?",
    t12_h2: "[EN] Das Kind (Subj), isst (Präd), einen Apfel (Obj), schnell (Art).",
    t12_q: "[EN] Was ist 'schnell' im Satz?",
    t12_qa: "[EN] Adverbiale der Art und Weise", t12_qb: "[EN] Adverbiale der Zeit", t12_qc: "[EN] Adverbiale des Ortes", t12_qd: "[EN] Adverbiale des Grundes",

    // T13: Präpositionales Objekt
    t13_title: "[EN] Das präpositionale Objekt",
    t13_text: "[EN] Manche Verben brauchen eine bestimmte Präposition mit Objekt: auf etwas warten, über etwas sprechen, mit jemandem spielen.",
    t13_b1: "[EN] Präposition + Objekts-Form",
    t13_b2: "[EN] abhängig vom Verb",
    t13_inst: "[EN] Finde das präpositionale Objekt!",
    t13_h1: "[EN] Auf WEN oder WAS wartest du?",
    t13_h2: "[EN] auf meinen Freund = präpositionales Objekt.",
    t13_sent3: "[EN] Wir warten ___.",
    t13_cb1: "[EN] auf den Bus", t13_cb2: "[EN] den Bus", t13_cb3: "[EN] dem Bus", t13_cb4: "[EN] in den Bus",

    // T14: Satzglieder und Wortstellung
    t14_title: "[EN] Wortstellung und Satzglieder",
    t14_text: "[EN] Die Reihenfolge der Satzglieder bestimmt, welches Wort wichtig ist! Vergleich: Der Junge sieht den Ball. Den Ball sieht der Junge.",
    t14_b1: "[EN] Veränderung der Wortstellung",
    t14_b2: "[EN] Veränderung der Betonung",
    t14_inst: "[EN] Ordne die Satzglieder neu!",
    t14_h1: "[EN] Normale Reihenfolge: Subjekt, Prädikat, Objekt.",
    t14_h2: "[EN] Besonderheit: Objekt vorne = betont.",
    t14_f1: "[EN] Der Hund", t14_f2: "[EN] frisst", t14_f3: "[EN] einen Knochen", t14_f4: "[EN] im Garten",

    // T15: Du bist ein Satzglied-Profi!
    t15_title: "[EN] Du bist ein Satzglied-Profi!",
    t15_text: "[EN] Du kennst alle Satzglieder: Subjekt, Prädikat, Objekte (Akk, Dat, Gen), Adverbiale (Zeit, Ort, Art, Grund, Zweck) und präpositionale Objekte.",
    t15_b1: "[EN] Alle Satzglieder perfekt",
    t15_b2: "[EN] Fragen korrekt stellen",
    t15_inst: "[EN] Zeige dein Satzglied-Wissen!",
    t15_h1: "[EN] Denk an die Fragen: Wer? Was? Wen? Wem? Wessen? Wo? Wann? Wie? Warum? Wozu?",
    t15_h2: "[EN] Das ist die Satzglied-Meister-Frage!",
    t15_sent4: "[EN] Die Schüler spielen ___ ___ ___ Fußball.",
    t15_cc1: "[EN] morgens im Park gerne", t15_cc2: "[EN] im Parkmorgens gerne", t15_cc3: "[EN] gerne morgens im Park", t15_cc4: "[EN] gerne im Parkmorgens",
  
  },
  hu: {

    explorer_title: "[HU] Satzbau-Meisterwerk",

    // T1: Subjekt und Prädikat (Wiederholung)
    t1_title: "[HU] Das Grundgerüst",
    t1_text: "[HU] Jeder Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut es?). Sie sind das Herzstück des Satzes.",
    t1_b1: "[HU] Subjekt = Der Täter.",
    t1_b2: "[HU] Prädikat = Die Handlung.",
    t1_inst: "[HU] Finde das Subjekt in diesem Satz!",
    t1_h1: "[HU] Frage: Wer oder was rennt schnell?",
    t1_h2: "[HU] 'Das Pferd' ist das Subjekt.",
    t1_w1: "[HU] Das Pferd", t1_w2: "[HU] rennt", t1_w3: "[HU] schnell", t1_w4: "[HU] über die Wiese", t1_w5: "[HU] .",
    t1_q: "[HU] Welches Satzglied ist 'rennt' im Satz 'Das Pferd rennt'?",
    t1_qa: "[HU] Prädikat", t1_qb: "[HU] Subjekt", t1_qc: "[HU] Objekt", t1_qd: "[HU] Adverbiale",

    // T2: Das Akkusativ-Objekt (Wen-Ergänzung)
    t2_title: "[HU] Das Akkusativ-Objekt",
    t2_text: "[HU] Das Akkusativ-Objekt ist die Wen-oder-Was-Ergänzung. Wir fragen: Wen oder was sieht das Kind? Den Regenbogen.",
    t2_b1: "[HU] Frage: Wen oder was?",
    t2_b2: "[HU] Oft im 4. Fall (Akkusativ).",
    t2_inst: "[HU] Klicke auf das Akkusativ-Objekt!",
    t2_h1: "[HU] Frage: Wen oder was kauft der Vater?",
    t2_h2: "[HU] Er kauft 'einen Apfel'.",
    t2_w2_1: "[HU] Der Vater", t2_w2_2: "[HU] kauft", t2_w2_3: "[HU] einen Apfel", t2_w2_4: "[HU] .",
    t2_q: "[HU] Wie fragen wir nach dem Akkusativ-Objekt?",
    t2_qa: "[HU] Wen oder was?", t2_qb: "[HU] Wem?", t2_qc: "[HU] Wo?", t2_qd: "[HU] Wann?",

    // T3: Das Dativ-Objekt (Wem-Ergänzung)
    t3_title: "[HU] Das Dativ-Objekt",
    t3_text: "[HU] Das Dativ-Objekt ist die Wem-Ergänzung. Wir fragen: Wem gibt die Lehrerin das Buch? Dem Schüler.",
    t3_b1: "[HU] Frage: Wem?",
    t3_b2: "[HU] Oft im 3. Fall (Dativ).",
    t3_inst: "[HU] Welches Satzglied ist 'dem Freund'?",
    t3_h1: "[HU] Frage: WEM hilft das Mädchen?",
    t3_h2: "[HU] Es ist das Dativ-Objekt.",
    t3_sent: "[HU] Das Mädchen hilft ___.",
    t3_c1: "[HU] dem Freund (Dativ-Objekt)", t3_c2: "[HU] den Freund (Akkusativ-Objekt)", t3_c3: "[HU] der Freund (Subjekt)", t3_c4: "[HU] hilft (Prädikat)",
    t3_q: "[HU] Was ist das Dativ-Objekt in: 'Ich danke dem Lehrer.'?",
    t3_qa: "[HU] dem Lehrer", t3_qb: "[HU] Ich", t3_qc: "[HU] danke", t3_qd: "[HU] Es gibt keins",

    // T4: Adverbiale Bestimmung der Zeit (Wann?)
    t4_title: "[HU] Wann passiert es?",
    t4_text: "[HU] Die adverbiale Bestimmung der Zeit (Zeitergänzung) sagt uns, wann etwas passiert. Wir fragen: Wann, wie lange oder wie oft?",
    t4_b1: "[HU] Frage: Wann?",
    t4_b2: "[HU] Beispiele: heute, gestern, am Abend.",
    t4_inst: "[HU] Finde die Zeitergänzung im Satz!",
    t4_h1: "[HU] Welches Wort sagt uns, WANN wir ins Kino gehen?",
    t4_h2: "[HU] 'Heute Abend' ist die Zeitergänzung.",
    t4_w4_1: "[HU] Heute Abend", t4_w4_2: "[HU] gehen", t4_w4_3: "[HU] wir", t4_w4_4: "[HU] ins Kino", t4_w4_5: "[HU] .",
    t4_q: "[HU] Welches Wort ist eine adverbiale Bestimmung der Zeit?",
    t4_qa: "[HU] morgens", t4_qb: "[HU] dort", t4_qc: "[HU] schnell", t4_qd: "[HU] laufen",

    // T5: Adverbiale Bestimmung des Ortes (Wo?)
    t5_title: "[HU] Wo passiert es?",
    t5_text: "[HU] Die adverbiale Bestimmung des Ortes (Ortsergänzung) sagt uns, wo etwas ist oder wohin etwas geht. Wir fragen: Wo, woher oder wohin?",
    t5_b1: "[HU] Frage: Wo / Wohin?",
    t5_b2: "[HU] Beispiele: im Park, nach Hause, dort.",
    t5_inst: "[HU] Sortiere die Satzglieder!",
    t5_h1: "[HU] Frage nach dem Ort (Wo?) und der Zeit (Wann?).",
    t5_h2: "[HU] im Wald -> Ort. am Sonntag -> Zeit.",
    t5_bo: "[HU] Ort 📍", t5_bz: "[HU] Zeit 🕒",
    t5_i1: "[HU] im Garten", t5_i2: "[HU] gestern", t5_i3: "[HU] nach Berlin", t5_i4: "[HU] um 8 Uhr",
    t5_q: "[HU] Welche Frage gehört zur Ortsergänzung?",
    t5_qa: "[HU] Wo?", t5_qb: "[HU] Wann?", t5_qc: "[HU] Wie?", t5_qd: "[HU] Warum?",

    // T6: Satzglieder bestimmen (Mix)
    t6_title: "[HU] Der Profi-Check",
    t6_text: "[HU] Ein Satz kann viele Glieder haben. Kannst du sie alle in einem Satz finden? Subjekt, Prädikat, Objekt und Adverbiale.",
    t6_b1: "[HU] Bestimme alle Teile.",
    t6_inst: "[HU] Bringe die Bausteine in die richtige Reihenfolge!",
    t6_h1: "[HU] Beginne mit der Zeit (Morgen), dann das Prädikat (besucht).",
    t6_h2: "[HU] Morgen besucht uns die Tante.",
    t6_o1: "[HU] Morgen", t6_o2: "[HU] besucht", t6_o3: "[HU] uns", t6_o4: "[HU] die Tante.",
    t6_q: "[HU] Was ist 'Morgen' im Satz 'Morgen besucht uns die Tante'?",
    t6_qa: "[HU] Zeitergänzung", t6_qb: "[HU] Ortsergänzung", t6_qc: "[HU] Subjekt", t6_qd: "[HU] Objekt",

    // T7: Satzglied-Stapler (Physics!)
    t7_title: "[HU] Der Glieder-Stapler",
    t7_text: "[HU] Nur die Steine mit OBJEKTEN dürfen auf den Stapel! Achte auf die Fragen 'Wen?' und 'Wem?'.",
    t7_b1: "[HU] Sammle Akkusativ- und Dativ-Objekte.",
    t7_inst: "[HU] Staple nur die Objekte!",
    t7_h1: "[HU] Suche nach Ergänzungen wie 'den Ball' oder 'mir'.",
    t7_h2: "[HU] den Brief (Akk-Objekt), dem Kind (Dat-Objekt).",
    t7_target: "[HU] Objekt-Stapel 🧱",
    t7_s1: "[HU] den Brief", t7_s2: "[HU] dem Kind", t7_s3: "[HU] die Tasche", t7_s4: "[HU] läuft (Falsch)",

    // T8: Genitivobjekt (Possessivum)
    t8_title: "[HU] Das Genitiv-Objekt",
    t8_text: "[HU] Es gibt auch Verben mit Genitiv-Objekt, aber diese sind selten: 'Ich gedenke der Verstorbenen.' oder 'Sie bedarf seiner Hilfe.'",
    t8_b1: "[HU] Frage: Wessen?",
    t8_b2: "[HU] Sehr selten im Deutschen.",
    t8_inst: "[HU] Erkenne das Genitiv-Objekt!",
    t8_h1: "[HU] Suche ein Objekt im 2. Fall (Genitiv).",
    t8_h2: "[HU] Wessen Stift? = Genitiv-Objekt",
    t8_sent: "[HU] Die Schule bedarf ___.",
    t8_ca1: "[HU] einer modernen Infrastruktur", t8_ca2: "[HU] mit moderner Infrastruktur", t8_ca3: "[HU] an Infrastruktur", t8_ca4: "[HU] zur Infrastruktur",

    // T9: Adverbiale Bestimmung der Art und Weise
    t9_title: "[HU] Wie passiert es? (Art & Weise)",
    t9_text: "[HU] Diese Adverbiale sagt uns, WIE eine Handlung passiert: schnell, langsam, vorsichtig, mit Vorsicht.",
    t9_b1: "[HU] Wie? = Art und Weise",
    t9_b2: "[HU] schnell, langsam, schön, vorsichtig",
    t9_inst: "[HU] Finde die Adverbiale der Art und Weise!",
    t9_h1: "[HU] WIE rennt das Pferd?",
    t9_h2: "[HU] Schnell!",
    t9_w1: "[HU] Das Pferd", t9_w2: "[HU] springt", t9_w3: "[HU] hoch", t9_w4: "[HU] über den Bach",

    // T10: Adverbiale Bestimmung des Grundes
    t10_title: "[HU] Warum passiert es? (Grund)",
    t10_text: "[HU] Warum und weshalb? Diese Adverbiale erklärt den Grund einer Handlung. Sie antworten auf 'Warum?'",
    t10_b1: "[HU] Warum? = Grund",
    t10_b2: "[HU] aus Angst, vor Freude, wegen...",
    t10_inst: "[HU] Sortiere Grund und Zeit!",
    t10_h1: "[HU] Frage: Warum/Grund oder Wann/Zeit?",
    t10_h2: "[HU] aus Hunger = Grund. morgens = Zeit.",
    t10_l: "[HU] Grund 🤔", t10_r: "[HU] Zeit 🕒",
    t10_v1: "[HU] aus Freude", t10_v2: "[HU] gestern", t10_v3: "[HU] wegen des Regens", t10_v4: "[HU] nächste Woche",

    // T11: Adverbiale Bestimmung des Zwecks
    t11_title: "[HU] Wozu? (Zweck/Absicht)",
    t11_text: "[HU] Zweckadverbiale sagen, WOZU oder ZU WELCHEM ZWECK eine Handlung passiert: um zu lernen, zur Schule gehen.",
    t11_b1: "[HU] Wozu? = Zweck",
    t11_b2: "[HU] um zu..., zu... (Infinitiv)",
    t11_inst: "[HU] Erkenne die Zweckadverbiale!",
    t11_h1: "[HU] WOZU gehen wir zur Schule?",
    t11_h2: "[HU] Um zu lernen!",
    t11_sent2: "[HU] Das Kind geht zur Schule, ___.",
    t11_cc1: "[HU] um zu lernen", t11_cc2: "[HU] wenn es lernen will", t11_cc3: "[HU] weil es lernt", t11_cc4: "[HU] für das Lernen",

    // T12: Satzglieder in komplexen Sätzen
    t12_title: "[HU] Satzglieder-Mix",
    t12_text: "[HU] Ein Satz kann viele Adverbiale haben! Der Junge kauft HEUTE (Zeit) IM SUPERMARKT (Ort) MIT SEINEM VATER (Begleitung) SCHNELL (Art) ein Geschenk (Objekt).",
    t12_b1: "[HU] Mehrere Adverbiale kombinieren",
    t12_inst: "[HU] Bestimme alle Satzglieder!",
    t12_h1: "[HU] Frag nacheinander: Wer? Was? Wo? Wann? Wie?",
    t12_h2: "[HU] Das Kind (Subj), isst (Präd), einen Apfel (Obj), schnell (Art).",
    t12_q: "[HU] Was ist 'schnell' im Satz?",
    t12_qa: "[HU] Adverbiale der Art und Weise", t12_qb: "[HU] Adverbiale der Zeit", t12_qc: "[HU] Adverbiale des Ortes", t12_qd: "[HU] Adverbiale des Grundes",

    // T13: Präpositionales Objekt
    t13_title: "[HU] Das präpositionale Objekt",
    t13_text: "[HU] Manche Verben brauchen eine bestimmte Präposition mit Objekt: auf etwas warten, über etwas sprechen, mit jemandem spielen.",
    t13_b1: "[HU] Präposition + Objekts-Form",
    t13_b2: "[HU] abhängig vom Verb",
    t13_inst: "[HU] Finde das präpositionale Objekt!",
    t13_h1: "[HU] Auf WEN oder WAS wartest du?",
    t13_h2: "[HU] auf meinen Freund = präpositionales Objekt.",
    t13_sent3: "[HU] Wir warten ___.",
    t13_cb1: "[HU] auf den Bus", t13_cb2: "[HU] den Bus", t13_cb3: "[HU] dem Bus", t13_cb4: "[HU] in den Bus",

    // T14: Satzglieder und Wortstellung
    t14_title: "[HU] Wortstellung und Satzglieder",
    t14_text: "[HU] Die Reihenfolge der Satzglieder bestimmt, welches Wort wichtig ist! Vergleich: Der Junge sieht den Ball. Den Ball sieht der Junge.",
    t14_b1: "[HU] Veränderung der Wortstellung",
    t14_b2: "[HU] Veränderung der Betonung",
    t14_inst: "[HU] Ordne die Satzglieder neu!",
    t14_h1: "[HU] Normale Reihenfolge: Subjekt, Prädikat, Objekt.",
    t14_h2: "[HU] Besonderheit: Objekt vorne = betont.",
    t14_f1: "[HU] Der Hund", t14_f2: "[HU] frisst", t14_f3: "[HU] einen Knochen", t14_f4: "[HU] im Garten",

    // T15: Du bist ein Satzglied-Profi!
    t15_title: "[HU] Du bist ein Satzglied-Profi!",
    t15_text: "[HU] Du kennst alle Satzglieder: Subjekt, Prädikat, Objekte (Akk, Dat, Gen), Adverbiale (Zeit, Ort, Art, Grund, Zweck) und präpositionale Objekte.",
    t15_b1: "[HU] Alle Satzglieder perfekt",
    t15_b2: "[HU] Fragen korrekt stellen",
    t15_inst: "[HU] Zeige dein Satzglied-Wissen!",
    t15_h1: "[HU] Denk an die Fragen: Wer? Was? Wen? Wem? Wessen? Wo? Wann? Wie? Warum? Wozu?",
    t15_h2: "[HU] Das ist die Satzglied-Meister-Frage!",
    t15_sent4: "[HU] Die Schüler spielen ___ ___ ___ Fußball.",
    t15_cc1: "[HU] morgens im Park gerne", t15_cc2: "[HU] im Parkmorgens gerne", t15_cc3: "[HU] gerne morgens im Park", t15_cc4: "[HU] gerne im Parkmorgens",
  
  },
  ro: {

    explorer_title: "[RO] Satzbau-Meisterwerk",

    // T1: Subjekt und Prädikat (Wiederholung)
    t1_title: "[RO] Das Grundgerüst",
    t1_text: "[RO] Jeder Satz braucht ein Subjekt (Wer oder was?) und ein Prädikat (Was tut es?). Sie sind das Herzstück des Satzes.",
    t1_b1: "[RO] Subjekt = Der Täter.",
    t1_b2: "[RO] Prädikat = Die Handlung.",
    t1_inst: "[RO] Finde das Subjekt in diesem Satz!",
    t1_h1: "[RO] Frage: Wer oder was rennt schnell?",
    t1_h2: "[RO] 'Das Pferd' ist das Subjekt.",
    t1_w1: "[RO] Das Pferd", t1_w2: "[RO] rennt", t1_w3: "[RO] schnell", t1_w4: "[RO] über die Wiese", t1_w5: "[RO] .",
    t1_q: "[RO] Welches Satzglied ist 'rennt' im Satz 'Das Pferd rennt'?",
    t1_qa: "[RO] Prädikat", t1_qb: "[RO] Subjekt", t1_qc: "[RO] Objekt", t1_qd: "[RO] Adverbiale",

    // T2: Das Akkusativ-Objekt (Wen-Ergänzung)
    t2_title: "[RO] Das Akkusativ-Objekt",
    t2_text: "[RO] Das Akkusativ-Objekt ist die Wen-oder-Was-Ergänzung. Wir fragen: Wen oder was sieht das Kind? Den Regenbogen.",
    t2_b1: "[RO] Frage: Wen oder was?",
    t2_b2: "[RO] Oft im 4. Fall (Akkusativ).",
    t2_inst: "[RO] Klicke auf das Akkusativ-Objekt!",
    t2_h1: "[RO] Frage: Wen oder was kauft der Vater?",
    t2_h2: "[RO] Er kauft 'einen Apfel'.",
    t2_w2_1: "[RO] Der Vater", t2_w2_2: "[RO] kauft", t2_w2_3: "[RO] einen Apfel", t2_w2_4: "[RO] .",
    t2_q: "[RO] Wie fragen wir nach dem Akkusativ-Objekt?",
    t2_qa: "[RO] Wen oder was?", t2_qb: "[RO] Wem?", t2_qc: "[RO] Wo?", t2_qd: "[RO] Wann?",

    // T3: Das Dativ-Objekt (Wem-Ergänzung)
    t3_title: "[RO] Das Dativ-Objekt",
    t3_text: "[RO] Das Dativ-Objekt ist die Wem-Ergänzung. Wir fragen: Wem gibt die Lehrerin das Buch? Dem Schüler.",
    t3_b1: "[RO] Frage: Wem?",
    t3_b2: "[RO] Oft im 3. Fall (Dativ).",
    t3_inst: "[RO] Welches Satzglied ist 'dem Freund'?",
    t3_h1: "[RO] Frage: WEM hilft das Mädchen?",
    t3_h2: "[RO] Es ist das Dativ-Objekt.",
    t3_sent: "[RO] Das Mädchen hilft ___.",
    t3_c1: "[RO] dem Freund (Dativ-Objekt)", t3_c2: "[RO] den Freund (Akkusativ-Objekt)", t3_c3: "[RO] der Freund (Subjekt)", t3_c4: "[RO] hilft (Prädikat)",
    t3_q: "[RO] Was ist das Dativ-Objekt in: 'Ich danke dem Lehrer.'?",
    t3_qa: "[RO] dem Lehrer", t3_qb: "[RO] Ich", t3_qc: "[RO] danke", t3_qd: "[RO] Es gibt keins",

    // T4: Adverbiale Bestimmung der Zeit (Wann?)
    t4_title: "[RO] Wann passiert es?",
    t4_text: "[RO] Die adverbiale Bestimmung der Zeit (Zeitergänzung) sagt uns, wann etwas passiert. Wir fragen: Wann, wie lange oder wie oft?",
    t4_b1: "[RO] Frage: Wann?",
    t4_b2: "[RO] Beispiele: heute, gestern, am Abend.",
    t4_inst: "[RO] Finde die Zeitergänzung im Satz!",
    t4_h1: "[RO] Welches Wort sagt uns, WANN wir ins Kino gehen?",
    t4_h2: "[RO] 'Heute Abend' ist die Zeitergänzung.",
    t4_w4_1: "[RO] Heute Abend", t4_w4_2: "[RO] gehen", t4_w4_3: "[RO] wir", t4_w4_4: "[RO] ins Kino", t4_w4_5: "[RO] .",
    t4_q: "[RO] Welches Wort ist eine adverbiale Bestimmung der Zeit?",
    t4_qa: "[RO] morgens", t4_qb: "[RO] dort", t4_qc: "[RO] schnell", t4_qd: "[RO] laufen",

    // T5: Adverbiale Bestimmung des Ortes (Wo?)
    t5_title: "[RO] Wo passiert es?",
    t5_text: "[RO] Die adverbiale Bestimmung des Ortes (Ortsergänzung) sagt uns, wo etwas ist oder wohin etwas geht. Wir fragen: Wo, woher oder wohin?",
    t5_b1: "[RO] Frage: Wo / Wohin?",
    t5_b2: "[RO] Beispiele: im Park, nach Hause, dort.",
    t5_inst: "[RO] Sortiere die Satzglieder!",
    t5_h1: "[RO] Frage nach dem Ort (Wo?) und der Zeit (Wann?).",
    t5_h2: "[RO] im Wald -> Ort. am Sonntag -> Zeit.",
    t5_bo: "[RO] Ort 📍", t5_bz: "[RO] Zeit 🕒",
    t5_i1: "[RO] im Garten", t5_i2: "[RO] gestern", t5_i3: "[RO] nach Berlin", t5_i4: "[RO] um 8 Uhr",
    t5_q: "[RO] Welche Frage gehört zur Ortsergänzung?",
    t5_qa: "[RO] Wo?", t5_qb: "[RO] Wann?", t5_qc: "[RO] Wie?", t5_qd: "[RO] Warum?",

    // T6: Satzglieder bestimmen (Mix)
    t6_title: "[RO] Der Profi-Check",
    t6_text: "[RO] Ein Satz kann viele Glieder haben. Kannst du sie alle in einem Satz finden? Subjekt, Prädikat, Objekt und Adverbiale.",
    t6_b1: "[RO] Bestimme alle Teile.",
    t6_inst: "[RO] Bringe die Bausteine in die richtige Reihenfolge!",
    t6_h1: "[RO] Beginne mit der Zeit (Morgen), dann das Prädikat (besucht).",
    t6_h2: "[RO] Morgen besucht uns die Tante.",
    t6_o1: "[RO] Morgen", t6_o2: "[RO] besucht", t6_o3: "[RO] uns", t6_o4: "[RO] die Tante.",
    t6_q: "[RO] Was ist 'Morgen' im Satz 'Morgen besucht uns die Tante'?",
    t6_qa: "[RO] Zeitergänzung", t6_qb: "[RO] Ortsergänzung", t6_qc: "[RO] Subjekt", t6_qd: "[RO] Objekt",

    // T7: Satzglied-Stapler (Physics!)
    t7_title: "[RO] Der Glieder-Stapler",
    t7_text: "[RO] Nur die Steine mit OBJEKTEN dürfen auf den Stapel! Achte auf die Fragen 'Wen?' und 'Wem?'.",
    t7_b1: "[RO] Sammle Akkusativ- und Dativ-Objekte.",
    t7_inst: "[RO] Staple nur die Objekte!",
    t7_h1: "[RO] Suche nach Ergänzungen wie 'den Ball' oder 'mir'.",
    t7_h2: "[RO] den Brief (Akk-Objekt), dem Kind (Dat-Objekt).",
    t7_target: "[RO] Objekt-Stapel 🧱",
    t7_s1: "[RO] den Brief", t7_s2: "[RO] dem Kind", t7_s3: "[RO] die Tasche", t7_s4: "[RO] läuft (Falsch)",

    // T8: Genitivobjekt (Possessivum)
    t8_title: "[RO] Das Genitiv-Objekt",
    t8_text: "[RO] Es gibt auch Verben mit Genitiv-Objekt, aber diese sind selten: 'Ich gedenke der Verstorbenen.' oder 'Sie bedarf seiner Hilfe.'",
    t8_b1: "[RO] Frage: Wessen?",
    t8_b2: "[RO] Sehr selten im Deutschen.",
    t8_inst: "[RO] Erkenne das Genitiv-Objekt!",
    t8_h1: "[RO] Suche ein Objekt im 2. Fall (Genitiv).",
    t8_h2: "[RO] Wessen Stift? = Genitiv-Objekt",
    t8_sent: "[RO] Die Schule bedarf ___.",
    t8_ca1: "[RO] einer modernen Infrastruktur", t8_ca2: "[RO] mit moderner Infrastruktur", t8_ca3: "[RO] an Infrastruktur", t8_ca4: "[RO] zur Infrastruktur",

    // T9: Adverbiale Bestimmung der Art und Weise
    t9_title: "[RO] Wie passiert es? (Art & Weise)",
    t9_text: "[RO] Diese Adverbiale sagt uns, WIE eine Handlung passiert: schnell, langsam, vorsichtig, mit Vorsicht.",
    t9_b1: "[RO] Wie? = Art und Weise",
    t9_b2: "[RO] schnell, langsam, schön, vorsichtig",
    t9_inst: "[RO] Finde die Adverbiale der Art und Weise!",
    t9_h1: "[RO] WIE rennt das Pferd?",
    t9_h2: "[RO] Schnell!",
    t9_w1: "[RO] Das Pferd", t9_w2: "[RO] springt", t9_w3: "[RO] hoch", t9_w4: "[RO] über den Bach",

    // T10: Adverbiale Bestimmung des Grundes
    t10_title: "[RO] Warum passiert es? (Grund)",
    t10_text: "[RO] Warum und weshalb? Diese Adverbiale erklärt den Grund einer Handlung. Sie antworten auf 'Warum?'",
    t10_b1: "[RO] Warum? = Grund",
    t10_b2: "[RO] aus Angst, vor Freude, wegen...",
    t10_inst: "[RO] Sortiere Grund und Zeit!",
    t10_h1: "[RO] Frage: Warum/Grund oder Wann/Zeit?",
    t10_h2: "[RO] aus Hunger = Grund. morgens = Zeit.",
    t10_l: "[RO] Grund 🤔", t10_r: "[RO] Zeit 🕒",
    t10_v1: "[RO] aus Freude", t10_v2: "[RO] gestern", t10_v3: "[RO] wegen des Regens", t10_v4: "[RO] nächste Woche",

    // T11: Adverbiale Bestimmung des Zwecks
    t11_title: "[RO] Wozu? (Zweck/Absicht)",
    t11_text: "[RO] Zweckadverbiale sagen, WOZU oder ZU WELCHEM ZWECK eine Handlung passiert: um zu lernen, zur Schule gehen.",
    t11_b1: "[RO] Wozu? = Zweck",
    t11_b2: "[RO] um zu..., zu... (Infinitiv)",
    t11_inst: "[RO] Erkenne die Zweckadverbiale!",
    t11_h1: "[RO] WOZU gehen wir zur Schule?",
    t11_h2: "[RO] Um zu lernen!",
    t11_sent2: "[RO] Das Kind geht zur Schule, ___.",
    t11_cc1: "[RO] um zu lernen", t11_cc2: "[RO] wenn es lernen will", t11_cc3: "[RO] weil es lernt", t11_cc4: "[RO] für das Lernen",

    // T12: Satzglieder in komplexen Sätzen
    t12_title: "[RO] Satzglieder-Mix",
    t12_text: "[RO] Ein Satz kann viele Adverbiale haben! Der Junge kauft HEUTE (Zeit) IM SUPERMARKT (Ort) MIT SEINEM VATER (Begleitung) SCHNELL (Art) ein Geschenk (Objekt).",
    t12_b1: "[RO] Mehrere Adverbiale kombinieren",
    t12_inst: "[RO] Bestimme alle Satzglieder!",
    t12_h1: "[RO] Frag nacheinander: Wer? Was? Wo? Wann? Wie?",
    t12_h2: "[RO] Das Kind (Subj), isst (Präd), einen Apfel (Obj), schnell (Art).",
    t12_q: "[RO] Was ist 'schnell' im Satz?",
    t12_qa: "[RO] Adverbiale der Art und Weise", t12_qb: "[RO] Adverbiale der Zeit", t12_qc: "[RO] Adverbiale des Ortes", t12_qd: "[RO] Adverbiale des Grundes",

    // T13: Präpositionales Objekt
    t13_title: "[RO] Das präpositionale Objekt",
    t13_text: "[RO] Manche Verben brauchen eine bestimmte Präposition mit Objekt: auf etwas warten, über etwas sprechen, mit jemandem spielen.",
    t13_b1: "[RO] Präposition + Objekts-Form",
    t13_b2: "[RO] abhängig vom Verb",
    t13_inst: "[RO] Finde das präpositionale Objekt!",
    t13_h1: "[RO] Auf WEN oder WAS wartest du?",
    t13_h2: "[RO] auf meinen Freund = präpositionales Objekt.",
    t13_sent3: "[RO] Wir warten ___.",
    t13_cb1: "[RO] auf den Bus", t13_cb2: "[RO] den Bus", t13_cb3: "[RO] dem Bus", t13_cb4: "[RO] in den Bus",

    // T14: Satzglieder und Wortstellung
    t14_title: "[RO] Wortstellung und Satzglieder",
    t14_text: "[RO] Die Reihenfolge der Satzglieder bestimmt, welches Wort wichtig ist! Vergleich: Der Junge sieht den Ball. Den Ball sieht der Junge.",
    t14_b1: "[RO] Veränderung der Wortstellung",
    t14_b2: "[RO] Veränderung der Betonung",
    t14_inst: "[RO] Ordne die Satzglieder neu!",
    t14_h1: "[RO] Normale Reihenfolge: Subjekt, Prädikat, Objekt.",
    t14_h2: "[RO] Besonderheit: Objekt vorne = betont.",
    t14_f1: "[RO] Der Hund", t14_f2: "[RO] frisst", t14_f3: "[RO] einen Knochen", t14_f4: "[RO] im Garten",

    // T15: Du bist ein Satzglied-Profi!
    t15_title: "[RO] Du bist ein Satzglied-Profi!",
    t15_text: "[RO] Du kennst alle Satzglieder: Subjekt, Prädikat, Objekte (Akk, Dat, Gen), Adverbiale (Zeit, Ort, Art, Grund, Zweck) und präpositionale Objekte.",
    t15_b1: "[RO] Alle Satzglieder perfekt",
    t15_b2: "[RO] Fragen korrekt stellen",
    t15_inst: "[RO] Zeige dein Satzglied-Wissen!",
    t15_h1: "[RO] Denk an die Fragen: Wer? Was? Wen? Wem? Wessen? Wo? Wann? Wie? Warum? Wozu?",
    t15_h2: "[RO] Das ist die Satzglied-Meister-Frage!",
    t15_sent4: "[RO] Die Schüler spielen ___ ___ ___ Fußball.",
    t15_cc1: "[RO] morgens im Park gerne", t15_cc2: "[RO] im Parkmorgens gerne", t15_cc3: "[RO] gerne morgens im Park", t15_cc4: "[RO] gerne im Parkmorgens",
  
  }
};

export const SATZGLIED4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "sentence-display", words: ["Das Pferd", "rennt", "schnell", "."], highlightIndices: [0, 1], color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "Wen?", emoji: "🔍", color: "#B91C1C", bg: "#FEE2E2" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"],
      correctIndices: [2],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "Wem?", emoji: "🤝", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "🕒", label: "Wann?" }] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4", "t4_w4_5"],
      correctIndices: [0],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Wo?"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["Wann?"], bg: "#FEF3C7", border: "#F59E0B" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "o", label: "t5_bo" }, { id: "z", label: "t5_bz" }],
      items: [
        { text: "t5_i1", bucketId: "o" },
        { text: "t5_i2", bucketId: "z" },
        { text: "t5_i3", bucketId: "o" },
        { text: "t5_i4", bucketId: "z" },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Morgen", "besucht", "uns", "die Tante"], highlightIndices: [0, 1, 2, 3], color: "#8B5CF6" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o4", "t6_o1", "t6_o3"],
      correctOrder: [2, 0, 3, 1],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Objekt-Stapler", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-stacker",
      words: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctOrder: [0, 1, 2],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "Wessen?", color: "#EC4899", bg: "#FCE7F3" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_sent",
      choices: ["t8_ca1", "t8_ca2", "t8_ca3", "t8_ca4"],
      correctIndex: 0,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "genitiv" },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "Wie?", color: "#10B981", bg: "#D1FAE5" }] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [2],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["Warum?"], bg: "#FEF3C7", border: "#F59E0B" }, right: { items: ["Wann?"], bg: "#DBEAFE", border: "#3B82F6" } },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "g", label: "t10_l" }, { id: "t", label: "t10_r" }],
      items: [
        { text: "t10_v1", bucketId: "g" },
        { text: "t10_v2", bucketId: "t" },
        { text: "t10_v3", bucketId: "g" },
        { text: "t10_v4", bucketId: "t" },
      ],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Wozu?", bg: "#F1F5F9" },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_sent2",
      choices: ["t11_cc1", "t11_cc2", "t11_cc3", "t11_cc4"],
      correctIndex: 0,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [{ emoji: "🔍", label: "Wer?" }, { emoji: "🎯", label: "Was?" }, { emoji: "🏠", label: "Wo?" }, { emoji: "🕒", label: "Wann?" }] },
    bulletKeys: ["t12_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      correctIndex: 0,
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "compound-word", word1: "Präposition", word2: "Objekt", result: "Präpos-Objekt", color: "#8B5CF6" },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent3",
      choices: ["t13_cb1", "t13_cb2", "t13_cb3", "t13_cb4"],
      correctIndex: 0,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔄", title: "Wortstellung", bg: "#F1F5F9" },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "word-order",
      words: ["t14_f1", "t14_f2", "t14_f3", "t14_f4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "word-order",
      words: ["t15_sent4", "Schüler", "spielen", "morgens im Park gerne Fußball"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "nominativ" },
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Satzarteninsel
// Thema: Haupt- und Nebensatz, Konjunktionen (weil, dass, wenn, obwohl)
// ─────────────────────────────────────────────────────────────────────────────

export const SATZART4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satz-Dschungel (HS & NS)",

    // T1: Hauptsatz vs. Nebensatz
    t1_title: "Hauptsatz und Nebensatz",
    t1_text: "Ein Hauptsatz kann alleine stehen (Ich spiele). Ein Nebensatz braucht immer einen Hauptsatz und wird durch ein Komma getrennt. Er gibt uns mehr Infos.",
    t1_b1: "Hauptsatz (HS) = kann alleine stehen.",
    t1_b2: "Nebensatz (NS) = braucht den HS.",
    t1_inst: "Welcher Teil ist der Nebensatz?",
    t1_h1: "Suche den Teil, der nach dem Komma steht.",
    t1_h2: "'weil ich müde bin' ist der Nebensatz.",
    t1_w1: "Ich schlafe", t1_w2: ",", t1_w3: "weil ich müde bin", t1_w4: ".",
    t1_q: "Wodurch werden Haupt- und Nebensatz immer getrennt?",
    t1_qa: "Durch ein Komma", t1_qb: "Durch einen Punkt", t1_qc: "Gar nicht", t1_qd: "Durch ein Ausrufezeichen",

    // T2: Die Verb-Kick-Regel
    t2_title: "Das Verb am Ende",
    t2_text: "Das Wichtigste im Nebensatz: Das gebeugte Verb rutscht ganz an das Ende! 'Ich weiß, dass du heute KOMMST.'",
    t2_b1: "Kötőszó (Konjunktion) am Anfang.",
    t2_b2: "Verb am Satzende.",
    t2_inst: "Finde das Verb am Ende des Nebensatzes!",
    t2_h1: "Suche das Tunwort ganz am Ende.",
    t2_h2: "Das Wort 'scheint' steht ganz hinten.",
    t2_w2_1: "Ich freue mich", t2_w2_2: ",", t2_w2_3: "dass die Sonne", t2_w2_4: "scheint", t2_w2_5: ".",
    t2_q: "Wo steht das Verb in einem Nebensatz mit 'weil'?",
    t2_qa: "Ganz am Ende", t2_qb: "An zweiter Stelle", t2_qc: "Ganz am Anfang", t2_qd: "Hinter dem Komma",

    // T3: Weil, dass, wenn
    t3_title: "Wichtige Konjunktionen",
    t3_text: "Konjunktionen sind die Kleber zwischen den Sätzen. 'weil' erklärt den Grund, 'wenn' eine Bedingung und 'dass' leitet oft einen Gedanken ein.",
    t3_b1: "weil (Grund)",
    t3_b2: "wenn (Bedingung)",
    t3_b3: "dass (Ergänzung)",
    t3_inst: "Welches Bindewort passt in die Lücke?",
    t3_h1: "Es wird ein Grund gesucht (Warum?).",
    t3_h2: "Benutze 'weil'.",
    t3_sent: "Ich lerne viel ___ ich eine gute Note will.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn", t3_c4: "obwohl",
    t3_q: "Welches Wort ist eine Konjunktion (Bindewort)?",
    t3_qa: "obwohl", t3_qb: "oft", t3_qc: "oben", t3_qd: "ohne",

    // T4: Satzgefüge bauen
    t4_title: "Satzgefüge bauen",
    t4_text: "Wenn wir einen Hauptsatz und einen Nebensatz verbinden, nennen wir das ein Satzgefüge. Vergiss das Komma zwischen den Bausteinen nicht!",
    t4_b1: "HS + Komma + NS.",
    t4_inst: "Verbinde die passenden Satzteile!",
    t4_h1: "Welcher Grund passt zu welcher Handlung?",
    t4_h2: "Ich ziehe die Jacke an -> weil es kalt ist.",
    t4_l1: "Ich esse etwas", t4_r1: "weil ich Hunger habe.",
    t4_l2: "Ich lerne", t4_r2: "dass ich es verstehe.",
    t4_l3: "Ich komme mit", t4_r3: "wenn du mich fragst.",
    t4_l4: "Ich weiß", t4_r4: "dass du da bist.",
    t4_q: "Wie heißt die Verbindung aus Haupt- und Nebensatz?",
    t4_qa: "Satzgefüge", t4_qb: "Satzreihe", t4_qc: "Wortfamilie", t4_qd: "Aussagesatz",

    // T5: Das Verb wandert (Physics Slingshot!)
    t5_title: "Verb-Schleuder",
    t5_text: "Im Nebensatz muss das Verb nach hinten! Schieße nur auf die Nebensätze, in denen das Verb am ENDE steht.",
    t5_b1: "Achte auf das Wort ganz hinten.",
    t5_inst: "Triff die richtigen Nebensätze!",
    t5_h1: "Suche Sätze wie '... weil er lacht.'",
    t5_h2: "... wenn es regnet, ... dass du kommst.",
    t5_m1: "... wenn es regnet", t5_m2: "... dass du kommst", t5_m3: "... weil er lacht", t5_m4: "... er lacht laut (Falsch)",
    t5_q: "Welcher Nebensatz ist richtig gebaut?",
    t5_qa: "... weil ich heute gehe.", t5_qb: "... weil ich gehe heute.", t5_qc: "... weil gehe ich heute.", t5_qd: "... ich gehe heute.",

    // T6: Obwohl - Der Gegensatz
    t6_title: "Obwohl (Der Gegensatz)",
    t6_text: "Das Wort 'obwohl' nutzen wir, wenn etwas anders ist, als man denkt. 'Ich gehe raus, obwohl es regnet.'",
    t6_b1: "obwohl = ein Hindernis.",
    t6_inst: "Welches Wort passt hier: '___ es spät ist, lese ich.'?",
    t6_h1: "Es ist spät (Hindernis), aber ich lese trotzdem.",
    t6_h2: "Wähle 'Obwohl'.",
    t6_sent_o: "___ es regnet, spielen wir draußen.",
    t6_co1: "Obwohl", t6_co2: "Weil", t6_co3: "Dass", t6_co4: "Wenn",
    t6_q: "Was macht das Verb nach dem Wort 'obwohl'?",
    t6_qa: "Es wandert ans Ende", t6_qb: "Es steht an Platz 2", t6_qc: "Es verschwindet", t6_qd: "Es wird groß geschrieben",

    // T7: Der Satz-Baumeister
    t7_title: "Satzbau-Prüfung",
    t7_text: "Baue ein komplettes Satzgefüge. Achte auf das Komma und die Position des Verbs im Nebensatz!",
    t7_b1: "HS ➔ Komma ➔ NS (Verb am Ende).",
    t7_inst: "Baue den Satz richtig zusammen!",
    t7_h1: "Hauptsatz zuerst: 'Ich hoffe'. Dann das Komma.",
    t7_h2: "Ich hoffe, dass du kommst.",
    t7_f1: "Ich hoffe,", t7_f2: "dass", t7_f3: "du", t7_f4: "kommst.",
    t7_q: "Was ist 'kommst' in diesem Satzgefüge?",
    t7_qa: "Das Verb im Nebensatz", t7_qb: "Das Subjekt", t7_qc: "Die Konjunktion", t7_qd: "Ein Adjektiv",

    // T8: Konjunktionale Sätze (Kausale, Konditionale, Konzessive)
    t8_title: "Verschiedene Nebensat-Arten",
    t8_text: "Es gibt verschiedene Arten von Nebensätzen: Kausale (weil, da), Konditionale (wenn, falls), Konzessive (obwohl, trotzdem).",
    t8_b1: "weil, da = Grund (kausal)",
    t8_b2: "wenn, falls = Bedingung (konditional)",
    t8_inst: "Wähle die passende Konjunktion!",
    t8_h1: "Suche nach der Bedeutung: Grund oder Bedingung?",
    t8_h2: "Grund = weil. Bedingung = wenn.",
    t8_sent: "Ich helfe dir, ___ du es brauchst.",
    t8_c1: "wenn", t8_c2: "weil", t8_c3: "dass", t8_c4: "obwohl",

    // T9: Temporale Nebensätze (zeitliche)
    t9_title: "Zeitliche Nebensätze (Wann?)",
    t9_text: "Temporale Nebensätze sagen, WANN etwas passiert: während, nachdem, bevor, sobald.",
    t9_b1: "während = zur gleichen Zeit",
    t9_b2: "nachdem, bevor = zeitliche Reihenfolge",
    t9_inst: "Erkenne den zeitlichen Nebensatz!",
    t9_h1: "Suche nach Wörtern wie während, nachdem, bevor.",
    t9_h2: "NACHDEM ich gegessen habe, gehe ich spazieren.",
    t9_w1: "NACHDEM", t9_w2: "ich gegessen", t9_w3: "gehe", t9_w4: "ich spazieren",

    // T10: Konzessive Nebensätze (Gegengrund - obwohl)
    t10_title: "OBWOHL - Konzessive",
    t10_text: "Konzessive Nebensätze ('obwohl', 'trotzdem') sagen: Es ist TROTZDEM so! Obwohl es regnet, spielen wir.",
    t10_b1: "obwohl, trotzdem = ungeachtet",
    t10_b2: "das Gegenteil von kausal",
    t10_inst: "Sortiere kausale und konzessive Sätze!",
    t10_h1: "Grund = weil. Gegengrund = obwohl.",
    t10_h2: "Weil es regnet (grund). Obwohl es regnet (trotzdem).",
    t10_l: "weil (Grund)", t10_r: "obwohl (Trotz)",
    t10_v1: "weil ich müde bin", t10_v2: "obwohl ich müde bin", t10_v3: "da es kalt ist", t10_v4: "trotzdem es regnet",

    // T11: Modale Nebensätze (Wie wird es gemacht)
    t11_title: "Modale Nebensätze (Wie?)",
    t11_text: "Modale Nebensätze sagen, WIE oder WODURCH etwas gemacht wird: indem, dadurch dass, auf diese Weise.",
    t11_b1: "indem, dadurch dass",
    t11_b2: "die Art und Weise",
    t11_inst: "Erkenne den modalen Nebensatz!",
    t11_h1: "WIE passiert es? INDEM...",
    t11_h2: "Du lernst, INDEM du übst.",
    t11_sent2: "Man wird fit, ___ man Sport treibt.",
    t11_cc1: "indem", t11_cc2: "wenn", t11_cc3: "weil", t11_cc4: "obwohl",

    // T12: Finale Nebensätze (Zweck - damit)
    t12_title: "Damit-Sätze (Zwecksätze)",
    t12_text: "Finale Nebensätze sagen, ZU WELCHEM ZWECK etwas passiert: Ich gebe dir das Buch, DAMIT du es lesen kannst.",
    t12_b1: "damit, um zu = Zweck/Absicht",
    t12_b2: "das Ziel einer Handlung",
    t12_inst: "Wähle den passenden Finalsatz!",
    t12_h1: "ZU WELCHEM ZWECK? DAMIT...",
    t12_h2: "Ich öffne die Fenster, damit die Luft frisch ist.",
    t12_q: "Was ist der Unterschied zwischen 'weil' und 'damit'?",
    t12_qa: "weil=Grund, damit=Zweck", t12_qb: "Unterschied gibt es nicht", t12_qc: "weil=Zeit, damit=Grund", t12_qd: "damit=nur im Passiv",

    // T13: Komparative Nebensätze (Vergleich - als ob)
    t13_title: "Vergleichs-Nebensätze",
    t13_text: "Komparative Nebensätze vergleichen: 'als', 'als ob', 'je...desto'. Er läuft schneller, ALS es erlaubt ist.",
    t13_b1: "als, als ob = Vergleich",
    t13_b2: "je...desto = proportional",
    t13_inst: "Erkenne den Vergleich!",
    t13_h1: "Suche nach 'als' oder 'als ob' im Satz.",
    t13_h2: "Die Katze ist schneller, ALS der Hund denkt.",
    t13_sent3: "Du machst das besser, ___ dein Bruder.",
    t13_cb1: "als", t13_cb2: "wenn", t13_cb3: "weil", t13_cb4: "obwohl",

    // T14: Satzgefüge analysieren
    t14_title: "Satzgefüge-Analyse",
    t14_text: "Komplexe Sätze können mehrere Nebensätze haben! Jeder hat seine eigene Konjunktion und seine Rolle.",
    t14_b1: "Mehrere Nebensätze erkennen",
    t14_b2: "Jede Konjunktion hat eine Funktion",
    t14_inst: "Bestimme alle Konjunktionen!",
    t14_h1: "Suche nach allen Kommas und Konjunktionen.",
    t14_h2: "Ich weiß, dass du kommst, weil du versprochen hast, dass du Zeit hast.",
    t14_q: "Wie viele Nebensätze hat dieser Satz?",
    t14_qa: "2", t14_qb: "3", t14_qc: "1", t14_qd: "4",
    t14_sent: "Ich weiß, ___ du kommst.",

    // T15: Du bist ein Satzart-Profi!
    t15_title: "Du bist ein Satzart-Profi!",
    t15_text: "Du kennst Haupt- und Nebensätze, alle Konjunktionen und ihre Funktionen: kausal, konditional, temporal, modal, final, konzessiv und komparativ!",
    t15_b1: "Alle Satzarten perfekt",
    t15_b2: "Alle Konjunktionen und ihre Rollen",
    t15_inst: "Zeige dein Satzart-Wissen!",
    t15_h1: "Denk an alle Konjunktionen und ihre Bedeutungen.",
    t15_h2: "weil (Grund), wenn (Bedingung), obwohl (Trotz), damit (Zweck)...",
    t15_sent4: "Ich lerne Deutsch, ___ ich später in Berlin arbeiten möchte.",
    t15_cc1: "damit", t15_cc2: "weil", t15_cc3: "wenn", t15_cc4: "obwohl",
  },
  en: {

    explorer_title: "[EN] Satz-Dschungel (HS & NS)",

    // T1: Hauptsatz vs. Nebensatz
    t1_title: "[EN] Hauptsatz und Nebensatz",
    t1_text: "[EN] Ein Hauptsatz kann alleine stehen (Ich spiele). Ein Nebensatz braucht immer einen Hauptsatz und wird durch ein Komma getrennt. Er gibt uns mehr Infos.",
    t1_b1: "[EN] Hauptsatz (HS) = kann alleine stehen.",
    t1_b2: "[EN] Nebensatz (NS) = braucht den HS.",
    t1_inst: "[EN] Welcher Teil ist der Nebensatz?",
    t1_h1: "[EN] Suche den Teil, der nach dem Komma steht.",
    t1_h2: "[EN] 'weil ich müde bin' ist der Nebensatz.",
    t1_w1: "[EN] Ich schlafe", t1_w2: "[EN] ,", t1_w3: "[EN] weil ich müde bin", t1_w4: "[EN] .",
    t1_q: "[EN] Wodurch werden Haupt- und Nebensatz immer getrennt?",
    t1_qa: "[EN] Durch ein Komma", t1_qb: "[EN] Durch einen Punkt", t1_qc: "[EN] Gar nicht", t1_qd: "[EN] Durch ein Ausrufezeichen",

    // T2: Die Verb-Kick-Regel
    t2_title: "[EN] Das Verb am Ende",
    t2_text: "[EN] Das Wichtigste im Nebensatz: Das gebeugte Verb rutscht ganz an das Ende! 'Ich weiß, dass du heute KOMMST.'",
    t2_b1: "[EN] Kötőszó (Konjunktion) am Anfang.",
    t2_b2: "[EN] Verb am Satzende.",
    t2_inst: "[EN] Finde das Verb am Ende des Nebensatzes!",
    t2_h1: "[EN] Suche das Tunwort ganz am Ende.",
    t2_h2: "[EN] Das Wort 'scheint' steht ganz hinten.",
    t2_w2_1: "[EN] Ich freue mich", t2_w2_2: "[EN] ,", t2_w2_3: "[EN] dass die Sonne", t2_w2_4: "[EN] scheint", t2_w2_5: "[EN] .",
    t2_q: "[EN] Wo steht das Verb in einem Nebensatz mit 'weil'?",
    t2_qa: "[EN] Ganz am Ende", t2_qb: "[EN] An zweiter Stelle", t2_qc: "[EN] Ganz am Anfang", t2_qd: "[EN] Hinter dem Komma",

    // T3: Weil, dass, wenn
    t3_title: "[EN] Wichtige Konjunktionen",
    t3_text: "[EN] Konjunktionen sind die Kleber zwischen den Sätzen. 'weil' erklärt den Grund, 'wenn' eine Bedingung und 'dass' leitet oft einen Gedanken ein.",
    t3_b1: "[EN] weil (Grund)",
    t3_b2: "[EN] wenn (Bedingung)",
    t3_b3: "[EN] dass (Ergänzung)",
    t3_inst: "[EN] Welches Bindewort passt in die Lücke?",
    t3_h1: "[EN] Es wird ein Grund gesucht (Warum?).",
    t3_h2: "[EN] Benutze 'weil'.",
    t3_sent: "[EN] Ich lerne viel ___ ich eine gute Note will.",
    t3_c1: "[EN] weil", t3_c2: "[EN] dass", t3_c3: "[EN] wenn", t3_c4: "[EN] obwohl",
    t3_q: "[EN] Welches Wort ist eine Konjunktion (Bindewort)?",
    t3_qa: "[EN] obwohl", t3_qb: "[EN] oft", t3_qc: "[EN] oben", t3_qd: "[EN] ohne",

    // T4: Satzgefüge bauen
    t4_title: "[EN] Satzgefüge bauen",
    t4_text: "[EN] Wenn wir einen Hauptsatz und einen Nebensatz verbinden, nennen wir das ein Satzgefüge. Vergiss das Komma zwischen den Bausteinen nicht!",
    t4_b1: "[EN] HS + Komma + NS.",
    t4_inst: "[EN] Verbinde die passenden Satzteile!",
    t4_h1: "[EN] Welcher Grund passt zu welcher Handlung?",
    t4_h2: "[EN] Ich ziehe die Jacke an -> weil es kalt ist.",
    t4_l1: "[EN] Ich esse etwas", t4_r1: "[EN] weil ich Hunger habe.",
    t4_l2: "[EN] Ich lerne", t4_r2: "[EN] dass ich es verstehe.",
    t4_l3: "[EN] Ich komme mit", t4_r3: "[EN] wenn du mich fragst.",
    t4_l4: "[EN] Ich weiß", t4_r4: "[EN] dass du da bist.",
    t4_q: "[EN] Wie heißt die Verbindung aus Haupt- und Nebensatz?",
    t4_qa: "[EN] Satzgefüge", t4_qb: "[EN] Satzreihe", t4_qc: "[EN] Wortfamilie", t4_qd: "[EN] Aussagesatz",

    // T5: Das Verb wandert (Physics Slingshot!)
    t5_title: "[EN] Verb-Schleuder",
    t5_text: "[EN] Im Nebensatz muss das Verb nach hinten! Schieße nur auf die Nebensätze, in denen das Verb am ENDE steht.",
    t5_b1: "[EN] Achte auf das Wort ganz hinten.",
    t5_inst: "[EN] Triff die richtigen Nebensätze!",
    t5_h1: "[EN] Suche Sätze wie '... weil er lacht.'",
    t5_h2: "[EN] ... wenn es regnet, ... dass du kommst.",
    t5_m1: "[EN] ... wenn es regnet", t5_m2: "[EN] ... dass du kommst", t5_m3: "[EN] ... weil er lacht", t5_m4: "[EN] ... er lacht laut (Falsch)",
    t5_q: "[EN] Welcher Nebensatz ist richtig gebaut?",
    t5_qa: "[EN] ... weil ich heute gehe.", t5_qb: "[EN] ... weil ich gehe heute.", t5_qc: "[EN] ... weil gehe ich heute.", t5_qd: "[EN] ... ich gehe heute.",

    // T6: Obwohl - Der Gegensatz
    t6_title: "[EN] Obwohl (Der Gegensatz)",
    t6_text: "[EN] Das Wort 'obwohl' nutzen wir, wenn etwas anders ist, als man denkt. 'Ich gehe raus, obwohl es regnet.'",
    t6_b1: "[EN] obwohl = ein Hindernis.",
    t6_inst: "[EN] Welches Wort passt hier: '___ es spät ist, lese ich.'?",
    t6_h1: "[EN] Es ist spät (Hindernis), aber ich lese trotzdem.",
    t6_h2: "[EN] Wähle 'Obwohl'.",
    t6_sent_o: "[EN] ___ es regnet, spielen wir draußen.",
    t6_co1: "[EN] Obwohl", t6_co2: "[EN] Weil", t6_co3: "[EN] Dass", t6_co4: "[EN] Wenn",
    t6_q: "[EN] Was macht das Verb nach dem Wort 'obwohl'?",
    t6_qa: "[EN] Es wandert ans Ende", t6_qb: "[EN] Es steht an Platz 2", t6_qc: "[EN] Es verschwindet", t6_qd: "[EN] Es wird groß geschrieben",

    // T7: Der Satz-Baumeister
    t7_title: "[EN] Satzbau-Prüfung",
    t7_text: "[EN] Baue ein komplettes Satzgefüge. Achte auf das Komma und die Position des Verbs im Nebensatz!",
    t7_b1: "[EN] HS ➔ Komma ➔ NS (Verb am Ende).",
    t7_inst: "[EN] Baue den Satz richtig zusammen!",
    t7_h1: "[EN] Hauptsatz zuerst: 'Ich hoffe'. Dann das Komma.",
    t7_h2: "[EN] Ich hoffe, dass du kommst.",
    t7_f1: "[EN] Ich hoffe,", t7_f2: "[EN] dass", t7_f3: "[EN] du", t7_f4: "[EN] kommst.",
    t7_q: "[EN] Was ist 'kommst' in diesem Satzgefüge?",
    t7_qa: "[EN] Das Verb im Nebensatz", t7_qb: "[EN] Das Subjekt", t7_qc: "[EN] Die Konjunktion", t7_qd: "[EN] Ein Adjektiv",

    // T8: Konjunktionale Sätze (Kausale, Konditionale, Konzessive)
    t8_title: "[EN] Verschiedene Nebensat-Arten",
    t8_text: "[EN] Es gibt verschiedene Arten von Nebensätzen: Kausale (weil, da), Konditionale (wenn, falls), Konzessive (obwohl, trotzdem).",
    t8_b1: "[EN] weil, da = Grund (kausal)",
    t8_b2: "[EN] wenn, falls = Bedingung (konditional)",
    t8_inst: "[EN] Wähle die passende Konjunktion!",
    t8_h1: "[EN] Suche nach der Bedeutung: Grund oder Bedingung?",
    t8_h2: "[EN] Grund = weil. Bedingung = wenn.",
    t8_sent: "[EN] Ich helfe dir, ___ du es brauchst.",
    t8_c1: "[EN] wenn", t8_c2: "[EN] weil", t8_c3: "[EN] dass", t8_c4: "[EN] obwohl",

    // T9: Temporale Nebensätze (zeitliche)
    t9_title: "[EN] Zeitliche Nebensätze (Wann?)",
    t9_text: "[EN] Temporale Nebensätze sagen, WANN etwas passiert: während, nachdem, bevor, sobald.",
    t9_b1: "[EN] während = zur gleichen Zeit",
    t9_b2: "[EN] nachdem, bevor = zeitliche Reihenfolge",
    t9_inst: "[EN] Erkenne den zeitlichen Nebensatz!",
    t9_h1: "[EN] Suche nach Wörtern wie während, nachdem, bevor.",
    t9_h2: "[EN] NACHDEM ich gegessen habe, gehe ich spazieren.",
    t9_w1: "[EN] NACHDEM", t9_w2: "[EN] ich gegessen", t9_w3: "[EN] gehe", t9_w4: "[EN] ich spazieren",

    // T10: Konzessive Nebensätze (Gegengrund - obwohl)
    t10_title: "[EN] OBWOHL - Konzessive",
    t10_text: "[EN] Konzessive Nebensätze ('obwohl', 'trotzdem') sagen: Es ist TROTZDEM so! Obwohl es regnet, spielen wir.",
    t10_b1: "[EN] obwohl, trotzdem = ungeachtet",
    t10_b2: "[EN] das Gegenteil von kausal",
    t10_inst: "[EN] Sortiere kausale und konzessive Sätze!",
    t10_h1: "[EN] Grund = weil. Gegengrund = obwohl.",
    t10_h2: "[EN] Weil es regnet (grund). Obwohl es regnet (trotzdem).",
    t10_l: "[EN] weil (Grund)", t10_r: "[EN] obwohl (Trotz)",
    t10_v1: "[EN] weil ich müde bin", t10_v2: "[EN] obwohl ich müde bin", t10_v3: "[EN] da es kalt ist", t10_v4: "[EN] trotzdem es regnet",

    // T11: Modale Nebensätze (Wie wird es gemacht)
    t11_title: "[EN] Modale Nebensätze (Wie?)",
    t11_text: "[EN] Modale Nebensätze sagen, WIE oder WODURCH etwas gemacht wird: indem, dadurch dass, auf diese Weise.",
    t11_b1: "[EN] indem, dadurch dass",
    t11_b2: "[EN] die Art und Weise",
    t11_inst: "[EN] Erkenne den modalen Nebensatz!",
    t11_h1: "[EN] WIE passiert es? INDEM...",
    t11_h2: "[EN] Du lernst, INDEM du übst.",
    t11_sent2: "[EN] Man wird fit, ___ man Sport treibt.",
    t11_cc1: "[EN] indem", t11_cc2: "[EN] wenn", t11_cc3: "[EN] weil", t11_cc4: "[EN] obwohl",

    // T12: Finale Nebensätze (Zweck - damit)
    t12_title: "[EN] Damit-Sätze (Zwecksätze)",
    t12_text: "[EN] Finale Nebensätze sagen, ZU WELCHEM ZWECK etwas passiert: Ich gebe dir das Buch, DAMIT du es lesen kannst.",
    t12_b1: "[EN] damit, um zu = Zweck/Absicht",
    t12_b2: "[EN] das Ziel einer Handlung",
    t12_inst: "[EN] Wähle den passenden Finalsatz!",
    t12_h1: "[EN] ZU WELCHEM ZWECK? DAMIT...",
    t12_h2: "[EN] Ich öffne die Fenster, damit die Luft frisch ist.",
    t12_q: "[EN] Was ist der Unterschied zwischen 'weil' und 'damit'?",
    t12_qa: "[EN] weil=Grund, damit=Zweck", t12_qb: "[EN] Unterschied gibt es nicht", t12_qc: "[EN] weil=Zeit, damit=Grund", t12_qd: "[EN] damit=nur im Passiv",

    // T13: Komparative Nebensätze (Vergleich - als ob)
    t13_title: "[EN] Vergleichs-Nebensätze",
    t13_text: "[EN] Komparative Nebensätze vergleichen: 'als', 'als ob', 'je...desto'. Er läuft schneller, ALS es erlaubt ist.",
    t13_b1: "[EN] als, als ob = Vergleich",
    t13_b2: "[EN] je...desto = proportional",
    t13_inst: "[EN] Erkenne den Vergleich!",
    t13_h1: "[EN] Suche nach 'als' oder 'als ob' im Satz.",
    t13_h2: "[EN] Die Katze ist schneller, ALS der Hund denkt.",
    t13_sent3: "[EN] Du machst das besser, ___ dein Bruder.",
    t13_cb1: "[EN] als", t13_cb2: "[EN] wenn", t13_cb3: "[EN] weil", t13_cb4: "[EN] obwohl",

    // T14: Satzgefüge analysieren
    t14_title: "[EN] Satzgefüge-Analyse",
    t14_text: "[EN] Komplexe Sätze können mehrere Nebensätze haben! Jeder hat seine eigene Konjunktion und seine Rolle.",
    t14_b1: "[EN] Mehrere Nebensätze erkennen",
    t14_b2: "[EN] Jede Konjunktion hat eine Funktion",
    t14_inst: "[EN] Bestimme alle Konjunktionen!",
    t14_h1: "[EN] Suche nach allen Kommas und Konjunktionen.",
    t14_h2: "[EN] Ich weiß, dass du kommst, weil du versprochen hast, dass du Zeit hast.",
    t14_q: "[EN] Wie viele Nebensätze hat dieser Satz?",
    t14_qa: "[EN] 2", t14_qb: "[EN] 3", t14_qc: "[EN] 1", t14_qd: "[EN] 4",
    t14_sent: "[EN] Ich weiß, ___ du kommst.",

    // T15: Du bist ein Satzart-Profi!
    t15_title: "[EN] Du bist ein Satzart-Profi!",
    t15_text: "[EN] Du kennst Haupt- und Nebensätze, alle Konjunktionen und ihre Funktionen: kausal, konditional, temporal, modal, final, konzessiv und komparativ!",
    t15_b1: "[EN] Alle Satzarten perfekt",
    t15_b2: "[EN] Alle Konjunktionen und ihre Rollen",
    t15_inst: "[EN] Zeige dein Satzart-Wissen!",
    t15_h1: "[EN] Denk an alle Konjunktionen und ihre Bedeutungen.",
    t15_h2: "[EN] weil (Grund), wenn (Bedingung), obwohl (Trotz), damit (Zweck)...",
    t15_sent4: "[EN] Ich lerne Deutsch, ___ ich später in Berlin arbeiten möchte.",
    t15_cc1: "[EN] damit", t15_cc2: "[EN] weil", t15_cc3: "[EN] wenn", t15_cc4: "[EN] obwohl",
  
  },
  hu: {

    explorer_title: "[HU] Satz-Dschungel (HS & NS)",

    // T1: Hauptsatz vs. Nebensatz
    t1_title: "[HU] Hauptsatz und Nebensatz",
    t1_text: "[HU] Ein Hauptsatz kann alleine stehen (Ich spiele). Ein Nebensatz braucht immer einen Hauptsatz und wird durch ein Komma getrennt. Er gibt uns mehr Infos.",
    t1_b1: "[HU] Hauptsatz (HS) = kann alleine stehen.",
    t1_b2: "[HU] Nebensatz (NS) = braucht den HS.",
    t1_inst: "[HU] Welcher Teil ist der Nebensatz?",
    t1_h1: "[HU] Suche den Teil, der nach dem Komma steht.",
    t1_h2: "[HU] 'weil ich müde bin' ist der Nebensatz.",
    t1_w1: "[HU] Ich schlafe", t1_w2: "[HU] ,", t1_w3: "[HU] weil ich müde bin", t1_w4: "[HU] .",
    t1_q: "[HU] Wodurch werden Haupt- und Nebensatz immer getrennt?",
    t1_qa: "[HU] Durch ein Komma", t1_qb: "[HU] Durch einen Punkt", t1_qc: "[HU] Gar nicht", t1_qd: "[HU] Durch ein Ausrufezeichen",

    // T2: Die Verb-Kick-Regel
    t2_title: "[HU] Das Verb am Ende",
    t2_text: "[HU] Das Wichtigste im Nebensatz: Das gebeugte Verb rutscht ganz an das Ende! 'Ich weiß, dass du heute KOMMST.'",
    t2_b1: "[HU] Kötőszó (Konjunktion) am Anfang.",
    t2_b2: "[HU] Verb am Satzende.",
    t2_inst: "[HU] Finde das Verb am Ende des Nebensatzes!",
    t2_h1: "[HU] Suche das Tunwort ganz am Ende.",
    t2_h2: "[HU] Das Wort 'scheint' steht ganz hinten.",
    t2_w2_1: "[HU] Ich freue mich", t2_w2_2: "[HU] ,", t2_w2_3: "[HU] dass die Sonne", t2_w2_4: "[HU] scheint", t2_w2_5: "[HU] .",
    t2_q: "[HU] Wo steht das Verb in einem Nebensatz mit 'weil'?",
    t2_qa: "[HU] Ganz am Ende", t2_qb: "[HU] An zweiter Stelle", t2_qc: "[HU] Ganz am Anfang", t2_qd: "[HU] Hinter dem Komma",

    // T3: Weil, dass, wenn
    t3_title: "[HU] Wichtige Konjunktionen",
    t3_text: "[HU] Konjunktionen sind die Kleber zwischen den Sätzen. 'weil' erklärt den Grund, 'wenn' eine Bedingung und 'dass' leitet oft einen Gedanken ein.",
    t3_b1: "[HU] weil (Grund)",
    t3_b2: "[HU] wenn (Bedingung)",
    t3_b3: "[HU] dass (Ergänzung)",
    t3_inst: "[HU] Welches Bindewort passt in die Lücke?",
    t3_h1: "[HU] Es wird ein Grund gesucht (Warum?).",
    t3_h2: "[HU] Benutze 'weil'.",
    t3_sent: "[HU] Ich lerne viel ___ ich eine gute Note will.",
    t3_c1: "[HU] weil", t3_c2: "[HU] dass", t3_c3: "[HU] wenn", t3_c4: "[HU] obwohl",
    t3_q: "[HU] Welches Wort ist eine Konjunktion (Bindewort)?",
    t3_qa: "[HU] obwohl", t3_qb: "[HU] oft", t3_qc: "[HU] oben", t3_qd: "[HU] ohne",

    // T4: Satzgefüge bauen
    t4_title: "[HU] Satzgefüge bauen",
    t4_text: "[HU] Wenn wir einen Hauptsatz und einen Nebensatz verbinden, nennen wir das ein Satzgefüge. Vergiss das Komma zwischen den Bausteinen nicht!",
    t4_b1: "[HU] HS + Komma + NS.",
    t4_inst: "[HU] Verbinde die passenden Satzteile!",
    t4_h1: "[HU] Welcher Grund passt zu welcher Handlung?",
    t4_h2: "[HU] Ich ziehe die Jacke an -> weil es kalt ist.",
    t4_l1: "[HU] Ich esse etwas", t4_r1: "[HU] weil ich Hunger habe.",
    t4_l2: "[HU] Ich lerne", t4_r2: "[HU] dass ich es verstehe.",
    t4_l3: "[HU] Ich komme mit", t4_r3: "[HU] wenn du mich fragst.",
    t4_l4: "[HU] Ich weiß", t4_r4: "[HU] dass du da bist.",
    t4_q: "[HU] Wie heißt die Verbindung aus Haupt- und Nebensatz?",
    t4_qa: "[HU] Satzgefüge", t4_qb: "[HU] Satzreihe", t4_qc: "[HU] Wortfamilie", t4_qd: "[HU] Aussagesatz",

    // T5: Das Verb wandert (Physics Slingshot!)
    t5_title: "[HU] Verb-Schleuder",
    t5_text: "[HU] Im Nebensatz muss das Verb nach hinten! Schieße nur auf die Nebensätze, in denen das Verb am ENDE steht.",
    t5_b1: "[HU] Achte auf das Wort ganz hinten.",
    t5_inst: "[HU] Triff die richtigen Nebensätze!",
    t5_h1: "[HU] Suche Sätze wie '... weil er lacht.'",
    t5_h2: "[HU] ... wenn es regnet, ... dass du kommst.",
    t5_m1: "[HU] ... wenn es regnet", t5_m2: "[HU] ... dass du kommst", t5_m3: "[HU] ... weil er lacht", t5_m4: "[HU] ... er lacht laut (Falsch)",
    t5_q: "[HU] Welcher Nebensatz ist richtig gebaut?",
    t5_qa: "[HU] ... weil ich heute gehe.", t5_qb: "[HU] ... weil ich gehe heute.", t5_qc: "[HU] ... weil gehe ich heute.", t5_qd: "[HU] ... ich gehe heute.",

    // T6: Obwohl - Der Gegensatz
    t6_title: "[HU] Obwohl (Der Gegensatz)",
    t6_text: "[HU] Das Wort 'obwohl' nutzen wir, wenn etwas anders ist, als man denkt. 'Ich gehe raus, obwohl es regnet.'",
    t6_b1: "[HU] obwohl = ein Hindernis.",
    t6_inst: "[HU] Welches Wort passt hier: '___ es spät ist, lese ich.'?",
    t6_h1: "[HU] Es ist spät (Hindernis), aber ich lese trotzdem.",
    t6_h2: "[HU] Wähle 'Obwohl'.",
    t6_sent_o: "[HU] ___ es regnet, spielen wir draußen.",
    t6_co1: "[HU] Obwohl", t6_co2: "[HU] Weil", t6_co3: "[HU] Dass", t6_co4: "[HU] Wenn",
    t6_q: "[HU] Was macht das Verb nach dem Wort 'obwohl'?",
    t6_qa: "[HU] Es wandert ans Ende", t6_qb: "[HU] Es steht an Platz 2", t6_qc: "[HU] Es verschwindet", t6_qd: "[HU] Es wird groß geschrieben",

    // T7: Der Satz-Baumeister
    t7_title: "[HU] Satzbau-Prüfung",
    t7_text: "[HU] Baue ein komplettes Satzgefüge. Achte auf das Komma und die Position des Verbs im Nebensatz!",
    t7_b1: "[HU] HS ➔ Komma ➔ NS (Verb am Ende).",
    t7_inst: "[HU] Baue den Satz richtig zusammen!",
    t7_h1: "[HU] Hauptsatz zuerst: 'Ich hoffe'. Dann das Komma.",
    t7_h2: "[HU] Ich hoffe, dass du kommst.",
    t7_f1: "[HU] Ich hoffe,", t7_f2: "[HU] dass", t7_f3: "[HU] du", t7_f4: "[HU] kommst.",
    t7_q: "[HU] Was ist 'kommst' in diesem Satzgefüge?",
    t7_qa: "[HU] Das Verb im Nebensatz", t7_qb: "[HU] Das Subjekt", t7_qc: "[HU] Die Konjunktion", t7_qd: "[HU] Ein Adjektiv",

    // T8: Konjunktionale Sätze (Kausale, Konditionale, Konzessive)
    t8_title: "[HU] Verschiedene Nebensat-Arten",
    t8_text: "[HU] Es gibt verschiedene Arten von Nebensätzen: Kausale (weil, da), Konditionale (wenn, falls), Konzessive (obwohl, trotzdem).",
    t8_b1: "[HU] weil, da = Grund (kausal)",
    t8_b2: "[HU] wenn, falls = Bedingung (konditional)",
    t8_inst: "[HU] Wähle die passende Konjunktion!",
    t8_h1: "[HU] Suche nach der Bedeutung: Grund oder Bedingung?",
    t8_h2: "[HU] Grund = weil. Bedingung = wenn.",
    t8_sent: "[HU] Ich helfe dir, ___ du es brauchst.",
    t8_c1: "[HU] wenn", t8_c2: "[HU] weil", t8_c3: "[HU] dass", t8_c4: "[HU] obwohl",

    // T9: Temporale Nebensätze (zeitliche)
    t9_title: "[HU] Zeitliche Nebensätze (Wann?)",
    t9_text: "[HU] Temporale Nebensätze sagen, WANN etwas passiert: während, nachdem, bevor, sobald.",
    t9_b1: "[HU] während = zur gleichen Zeit",
    t9_b2: "[HU] nachdem, bevor = zeitliche Reihenfolge",
    t9_inst: "[HU] Erkenne den zeitlichen Nebensatz!",
    t9_h1: "[HU] Suche nach Wörtern wie während, nachdem, bevor.",
    t9_h2: "[HU] NACHDEM ich gegessen habe, gehe ich spazieren.",
    t9_w1: "[HU] NACHDEM", t9_w2: "[HU] ich gegessen", t9_w3: "[HU] gehe", t9_w4: "[HU] ich spazieren",

    // T10: Konzessive Nebensätze (Gegengrund - obwohl)
    t10_title: "[HU] OBWOHL - Konzessive",
    t10_text: "[HU] Konzessive Nebensätze ('obwohl', 'trotzdem') sagen: Es ist TROTZDEM so! Obwohl es regnet, spielen wir.",
    t10_b1: "[HU] obwohl, trotzdem = ungeachtet",
    t10_b2: "[HU] das Gegenteil von kausal",
    t10_inst: "[HU] Sortiere kausale und konzessive Sätze!",
    t10_h1: "[HU] Grund = weil. Gegengrund = obwohl.",
    t10_h2: "[HU] Weil es regnet (grund). Obwohl es regnet (trotzdem).",
    t10_l: "[HU] weil (Grund)", t10_r: "[HU] obwohl (Trotz)",
    t10_v1: "[HU] weil ich müde bin", t10_v2: "[HU] obwohl ich müde bin", t10_v3: "[HU] da es kalt ist", t10_v4: "[HU] trotzdem es regnet",

    // T11: Modale Nebensätze (Wie wird es gemacht)
    t11_title: "[HU] Modale Nebensätze (Wie?)",
    t11_text: "[HU] Modale Nebensätze sagen, WIE oder WODURCH etwas gemacht wird: indem, dadurch dass, auf diese Weise.",
    t11_b1: "[HU] indem, dadurch dass",
    t11_b2: "[HU] die Art und Weise",
    t11_inst: "[HU] Erkenne den modalen Nebensatz!",
    t11_h1: "[HU] WIE passiert es? INDEM...",
    t11_h2: "[HU] Du lernst, INDEM du übst.",
    t11_sent2: "[HU] Man wird fit, ___ man Sport treibt.",
    t11_cc1: "[HU] indem", t11_cc2: "[HU] wenn", t11_cc3: "[HU] weil", t11_cc4: "[HU] obwohl",

    // T12: Finale Nebensätze (Zweck - damit)
    t12_title: "[HU] Damit-Sätze (Zwecksätze)",
    t12_text: "[HU] Finale Nebensätze sagen, ZU WELCHEM ZWECK etwas passiert: Ich gebe dir das Buch, DAMIT du es lesen kannst.",
    t12_b1: "[HU] damit, um zu = Zweck/Absicht",
    t12_b2: "[HU] das Ziel einer Handlung",
    t12_inst: "[HU] Wähle den passenden Finalsatz!",
    t12_h1: "[HU] ZU WELCHEM ZWECK? DAMIT...",
    t12_h2: "[HU] Ich öffne die Fenster, damit die Luft frisch ist.",
    t12_q: "[HU] Was ist der Unterschied zwischen 'weil' und 'damit'?",
    t12_qa: "[HU] weil=Grund, damit=Zweck", t12_qb: "[HU] Unterschied gibt es nicht", t12_qc: "[HU] weil=Zeit, damit=Grund", t12_qd: "[HU] damit=nur im Passiv",

    // T13: Komparative Nebensätze (Vergleich - als ob)
    t13_title: "[HU] Vergleichs-Nebensätze",
    t13_text: "[HU] Komparative Nebensätze vergleichen: 'als', 'als ob', 'je...desto'. Er läuft schneller, ALS es erlaubt ist.",
    t13_b1: "[HU] als, als ob = Vergleich",
    t13_b2: "[HU] je...desto = proportional",
    t13_inst: "[HU] Erkenne den Vergleich!",
    t13_h1: "[HU] Suche nach 'als' oder 'als ob' im Satz.",
    t13_h2: "[HU] Die Katze ist schneller, ALS der Hund denkt.",
    t13_sent3: "[HU] Du machst das besser, ___ dein Bruder.",
    t13_cb1: "[HU] als", t13_cb2: "[HU] wenn", t13_cb3: "[HU] weil", t13_cb4: "[HU] obwohl",

    // T14: Satzgefüge analysieren
    t14_title: "[HU] Satzgefüge-Analyse",
    t14_text: "[HU] Komplexe Sätze können mehrere Nebensätze haben! Jeder hat seine eigene Konjunktion und seine Rolle.",
    t14_b1: "[HU] Mehrere Nebensätze erkennen",
    t14_b2: "[HU] Jede Konjunktion hat eine Funktion",
    t14_inst: "[HU] Bestimme alle Konjunktionen!",
    t14_h1: "[HU] Suche nach allen Kommas und Konjunktionen.",
    t14_h2: "[HU] Ich weiß, dass du kommst, weil du versprochen hast, dass du Zeit hast.",
    t14_q: "[HU] Wie viele Nebensätze hat dieser Satz?",
    t14_qa: "[HU] 2", t14_qb: "[HU] 3", t14_qc: "[HU] 1", t14_qd: "[HU] 4",
    t14_sent: "[HU] Ich weiß, ___ du kommst.",

    // T15: Du bist ein Satzart-Profi!
    t15_title: "[HU] Du bist ein Satzart-Profi!",
    t15_text: "[HU] Du kennst Haupt- und Nebensätze, alle Konjunktionen und ihre Funktionen: kausal, konditional, temporal, modal, final, konzessiv und komparativ!",
    t15_b1: "[HU] Alle Satzarten perfekt",
    t15_b2: "[HU] Alle Konjunktionen und ihre Rollen",
    t15_inst: "[HU] Zeige dein Satzart-Wissen!",
    t15_h1: "[HU] Denk an alle Konjunktionen und ihre Bedeutungen.",
    t15_h2: "[HU] weil (Grund), wenn (Bedingung), obwohl (Trotz), damit (Zweck)...",
    t15_sent4: "[HU] Ich lerne Deutsch, ___ ich später in Berlin arbeiten möchte.",
    t15_cc1: "[HU] damit", t15_cc2: "[HU] weil", t15_cc3: "[HU] wenn", t15_cc4: "[HU] obwohl",
  
  },
  ro: {

    explorer_title: "[RO] Satz-Dschungel (HS & NS)",

    // T1: Hauptsatz vs. Nebensatz
    t1_title: "[RO] Hauptsatz und Nebensatz",
    t1_text: "[RO] Ein Hauptsatz kann alleine stehen (Ich spiele). Ein Nebensatz braucht immer einen Hauptsatz und wird durch ein Komma getrennt. Er gibt uns mehr Infos.",
    t1_b1: "[RO] Hauptsatz (HS) = kann alleine stehen.",
    t1_b2: "[RO] Nebensatz (NS) = braucht den HS.",
    t1_inst: "[RO] Welcher Teil ist der Nebensatz?",
    t1_h1: "[RO] Suche den Teil, der nach dem Komma steht.",
    t1_h2: "[RO] 'weil ich müde bin' ist der Nebensatz.",
    t1_w1: "[RO] Ich schlafe", t1_w2: "[RO] ,", t1_w3: "[RO] weil ich müde bin", t1_w4: "[RO] .",
    t1_q: "[RO] Wodurch werden Haupt- und Nebensatz immer getrennt?",
    t1_qa: "[RO] Durch ein Komma", t1_qb: "[RO] Durch einen Punkt", t1_qc: "[RO] Gar nicht", t1_qd: "[RO] Durch ein Ausrufezeichen",

    // T2: Die Verb-Kick-Regel
    t2_title: "[RO] Das Verb am Ende",
    t2_text: "[RO] Das Wichtigste im Nebensatz: Das gebeugte Verb rutscht ganz an das Ende! 'Ich weiß, dass du heute KOMMST.'",
    t2_b1: "[RO] Kötőszó (Konjunktion) am Anfang.",
    t2_b2: "[RO] Verb am Satzende.",
    t2_inst: "[RO] Finde das Verb am Ende des Nebensatzes!",
    t2_h1: "[RO] Suche das Tunwort ganz am Ende.",
    t2_h2: "[RO] Das Wort 'scheint' steht ganz hinten.",
    t2_w2_1: "[RO] Ich freue mich", t2_w2_2: "[RO] ,", t2_w2_3: "[RO] dass die Sonne", t2_w2_4: "[RO] scheint", t2_w2_5: "[RO] .",
    t2_q: "[RO] Wo steht das Verb in einem Nebensatz mit 'weil'?",
    t2_qa: "[RO] Ganz am Ende", t2_qb: "[RO] An zweiter Stelle", t2_qc: "[RO] Ganz am Anfang", t2_qd: "[RO] Hinter dem Komma",

    // T3: Weil, dass, wenn
    t3_title: "[RO] Wichtige Konjunktionen",
    t3_text: "[RO] Konjunktionen sind die Kleber zwischen den Sätzen. 'weil' erklärt den Grund, 'wenn' eine Bedingung und 'dass' leitet oft einen Gedanken ein.",
    t3_b1: "[RO] weil (Grund)",
    t3_b2: "[RO] wenn (Bedingung)",
    t3_b3: "[RO] dass (Ergänzung)",
    t3_inst: "[RO] Welches Bindewort passt in die Lücke?",
    t3_h1: "[RO] Es wird ein Grund gesucht (Warum?).",
    t3_h2: "[RO] Benutze 'weil'.",
    t3_sent: "[RO] Ich lerne viel ___ ich eine gute Note will.",
    t3_c1: "[RO] weil", t3_c2: "[RO] dass", t3_c3: "[RO] wenn", t3_c4: "[RO] obwohl",
    t3_q: "[RO] Welches Wort ist eine Konjunktion (Bindewort)?",
    t3_qa: "[RO] obwohl", t3_qb: "[RO] oft", t3_qc: "[RO] oben", t3_qd: "[RO] ohne",

    // T4: Satzgefüge bauen
    t4_title: "[RO] Satzgefüge bauen",
    t4_text: "[RO] Wenn wir einen Hauptsatz und einen Nebensatz verbinden, nennen wir das ein Satzgefüge. Vergiss das Komma zwischen den Bausteinen nicht!",
    t4_b1: "[RO] HS + Komma + NS.",
    t4_inst: "[RO] Verbinde die passenden Satzteile!",
    t4_h1: "[RO] Welcher Grund passt zu welcher Handlung?",
    t4_h2: "[RO] Ich ziehe die Jacke an -> weil es kalt ist.",
    t4_l1: "[RO] Ich esse etwas", t4_r1: "[RO] weil ich Hunger habe.",
    t4_l2: "[RO] Ich lerne", t4_r2: "[RO] dass ich es verstehe.",
    t4_l3: "[RO] Ich komme mit", t4_r3: "[RO] wenn du mich fragst.",
    t4_l4: "[RO] Ich weiß", t4_r4: "[RO] dass du da bist.",
    t4_q: "[RO] Wie heißt die Verbindung aus Haupt- und Nebensatz?",
    t4_qa: "[RO] Satzgefüge", t4_qb: "[RO] Satzreihe", t4_qc: "[RO] Wortfamilie", t4_qd: "[RO] Aussagesatz",

    // T5: Das Verb wandert (Physics Slingshot!)
    t5_title: "[RO] Verb-Schleuder",
    t5_text: "[RO] Im Nebensatz muss das Verb nach hinten! Schieße nur auf die Nebensätze, in denen das Verb am ENDE steht.",
    t5_b1: "[RO] Achte auf das Wort ganz hinten.",
    t5_inst: "[RO] Triff die richtigen Nebensätze!",
    t5_h1: "[RO] Suche Sätze wie '... weil er lacht.'",
    t5_h2: "[RO] ... wenn es regnet, ... dass du kommst.",
    t5_m1: "[RO] ... wenn es regnet", t5_m2: "[RO] ... dass du kommst", t5_m3: "[RO] ... weil er lacht", t5_m4: "[RO] ... er lacht laut (Falsch)",
    t5_q: "[RO] Welcher Nebensatz ist richtig gebaut?",
    t5_qa: "[RO] ... weil ich heute gehe.", t5_qb: "[RO] ... weil ich gehe heute.", t5_qc: "[RO] ... weil gehe ich heute.", t5_qd: "[RO] ... ich gehe heute.",

    // T6: Obwohl - Der Gegensatz
    t6_title: "[RO] Obwohl (Der Gegensatz)",
    t6_text: "[RO] Das Wort 'obwohl' nutzen wir, wenn etwas anders ist, als man denkt. 'Ich gehe raus, obwohl es regnet.'",
    t6_b1: "[RO] obwohl = ein Hindernis.",
    t6_inst: "[RO] Welches Wort passt hier: '___ es spät ist, lese ich.'?",
    t6_h1: "[RO] Es ist spät (Hindernis), aber ich lese trotzdem.",
    t6_h2: "[RO] Wähle 'Obwohl'.",
    t6_sent_o: "[RO] ___ es regnet, spielen wir draußen.",
    t6_co1: "[RO] Obwohl", t6_co2: "[RO] Weil", t6_co3: "[RO] Dass", t6_co4: "[RO] Wenn",
    t6_q: "[RO] Was macht das Verb nach dem Wort 'obwohl'?",
    t6_qa: "[RO] Es wandert ans Ende", t6_qb: "[RO] Es steht an Platz 2", t6_qc: "[RO] Es verschwindet", t6_qd: "[RO] Es wird groß geschrieben",

    // T7: Der Satz-Baumeister
    t7_title: "[RO] Satzbau-Prüfung",
    t7_text: "[RO] Baue ein komplettes Satzgefüge. Achte auf das Komma und die Position des Verbs im Nebensatz!",
    t7_b1: "[RO] HS ➔ Komma ➔ NS (Verb am Ende).",
    t7_inst: "[RO] Baue den Satz richtig zusammen!",
    t7_h1: "[RO] Hauptsatz zuerst: 'Ich hoffe'. Dann das Komma.",
    t7_h2: "[RO] Ich hoffe, dass du kommst.",
    t7_f1: "[RO] Ich hoffe,", t7_f2: "[RO] dass", t7_f3: "[RO] du", t7_f4: "[RO] kommst.",
    t7_q: "[RO] Was ist 'kommst' in diesem Satzgefüge?",
    t7_qa: "[RO] Das Verb im Nebensatz", t7_qb: "[RO] Das Subjekt", t7_qc: "[RO] Die Konjunktion", t7_qd: "[RO] Ein Adjektiv",

    // T8: Konjunktionale Sätze (Kausale, Konditionale, Konzessive)
    t8_title: "[RO] Verschiedene Nebensat-Arten",
    t8_text: "[RO] Es gibt verschiedene Arten von Nebensätzen: Kausale (weil, da), Konditionale (wenn, falls), Konzessive (obwohl, trotzdem).",
    t8_b1: "[RO] weil, da = Grund (kausal)",
    t8_b2: "[RO] wenn, falls = Bedingung (konditional)",
    t8_inst: "[RO] Wähle die passende Konjunktion!",
    t8_h1: "[RO] Suche nach der Bedeutung: Grund oder Bedingung?",
    t8_h2: "[RO] Grund = weil. Bedingung = wenn.",
    t8_sent: "[RO] Ich helfe dir, ___ du es brauchst.",
    t8_c1: "[RO] wenn", t8_c2: "[RO] weil", t8_c3: "[RO] dass", t8_c4: "[RO] obwohl",

    // T9: Temporale Nebensätze (zeitliche)
    t9_title: "[RO] Zeitliche Nebensätze (Wann?)",
    t9_text: "[RO] Temporale Nebensätze sagen, WANN etwas passiert: während, nachdem, bevor, sobald.",
    t9_b1: "[RO] während = zur gleichen Zeit",
    t9_b2: "[RO] nachdem, bevor = zeitliche Reihenfolge",
    t9_inst: "[RO] Erkenne den zeitlichen Nebensatz!",
    t9_h1: "[RO] Suche nach Wörtern wie während, nachdem, bevor.",
    t9_h2: "[RO] NACHDEM ich gegessen habe, gehe ich spazieren.",
    t9_w1: "[RO] NACHDEM", t9_w2: "[RO] ich gegessen", t9_w3: "[RO] gehe", t9_w4: "[RO] ich spazieren",

    // T10: Konzessive Nebensätze (Gegengrund - obwohl)
    t10_title: "[RO] OBWOHL - Konzessive",
    t10_text: "[RO] Konzessive Nebensätze ('obwohl', 'trotzdem') sagen: Es ist TROTZDEM so! Obwohl es regnet, spielen wir.",
    t10_b1: "[RO] obwohl, trotzdem = ungeachtet",
    t10_b2: "[RO] das Gegenteil von kausal",
    t10_inst: "[RO] Sortiere kausale und konzessive Sätze!",
    t10_h1: "[RO] Grund = weil. Gegengrund = obwohl.",
    t10_h2: "[RO] Weil es regnet (grund). Obwohl es regnet (trotzdem).",
    t10_l: "[RO] weil (Grund)", t10_r: "[RO] obwohl (Trotz)",
    t10_v1: "[RO] weil ich müde bin", t10_v2: "[RO] obwohl ich müde bin", t10_v3: "[RO] da es kalt ist", t10_v4: "[RO] trotzdem es regnet",

    // T11: Modale Nebensätze (Wie wird es gemacht)
    t11_title: "[RO] Modale Nebensätze (Wie?)",
    t11_text: "[RO] Modale Nebensätze sagen, WIE oder WODURCH etwas gemacht wird: indem, dadurch dass, auf diese Weise.",
    t11_b1: "[RO] indem, dadurch dass",
    t11_b2: "[RO] die Art und Weise",
    t11_inst: "[RO] Erkenne den modalen Nebensatz!",
    t11_h1: "[RO] WIE passiert es? INDEM...",
    t11_h2: "[RO] Du lernst, INDEM du übst.",
    t11_sent2: "[RO] Man wird fit, ___ man Sport treibt.",
    t11_cc1: "[RO] indem", t11_cc2: "[RO] wenn", t11_cc3: "[RO] weil", t11_cc4: "[RO] obwohl",

    // T12: Finale Nebensätze (Zweck - damit)
    t12_title: "[RO] Damit-Sätze (Zwecksätze)",
    t12_text: "[RO] Finale Nebensätze sagen, ZU WELCHEM ZWECK etwas passiert: Ich gebe dir das Buch, DAMIT du es lesen kannst.",
    t12_b1: "[RO] damit, um zu = Zweck/Absicht",
    t12_b2: "[RO] das Ziel einer Handlung",
    t12_inst: "[RO] Wähle den passenden Finalsatz!",
    t12_h1: "[RO] ZU WELCHEM ZWECK? DAMIT...",
    t12_h2: "[RO] Ich öffne die Fenster, damit die Luft frisch ist.",
    t12_q: "[RO] Was ist der Unterschied zwischen 'weil' und 'damit'?",
    t12_qa: "[RO] weil=Grund, damit=Zweck", t12_qb: "[RO] Unterschied gibt es nicht", t12_qc: "[RO] weil=Zeit, damit=Grund", t12_qd: "[RO] damit=nur im Passiv",

    // T13: Komparative Nebensätze (Vergleich - als ob)
    t13_title: "[RO] Vergleichs-Nebensätze",
    t13_text: "[RO] Komparative Nebensätze vergleichen: 'als', 'als ob', 'je...desto'. Er läuft schneller, ALS es erlaubt ist.",
    t13_b1: "[RO] als, als ob = Vergleich",
    t13_b2: "[RO] je...desto = proportional",
    t13_inst: "[RO] Erkenne den Vergleich!",
    t13_h1: "[RO] Suche nach 'als' oder 'als ob' im Satz.",
    t13_h2: "[RO] Die Katze ist schneller, ALS der Hund denkt.",
    t13_sent3: "[RO] Du machst das besser, ___ dein Bruder.",
    t13_cb1: "[RO] als", t13_cb2: "[RO] wenn", t13_cb3: "[RO] weil", t13_cb4: "[RO] obwohl",

    // T14: Satzgefüge analysieren
    t14_title: "[RO] Satzgefüge-Analyse",
    t14_text: "[RO] Komplexe Sätze können mehrere Nebensätze haben! Jeder hat seine eigene Konjunktion und seine Rolle.",
    t14_b1: "[RO] Mehrere Nebensätze erkennen",
    t14_b2: "[RO] Jede Konjunktion hat eine Funktion",
    t14_inst: "[RO] Bestimme alle Konjunktionen!",
    t14_h1: "[RO] Suche nach allen Kommas und Konjunktionen.",
    t14_h2: "[RO] Ich weiß, dass du kommst, weil du versprochen hast, dass du Zeit hast.",
    t14_q: "[RO] Wie viele Nebensätze hat dieser Satz?",
    t14_qa: "[RO] 2", t14_qb: "[RO] 3", t14_qc: "[RO] 1", t14_qd: "[RO] 4",
    t14_sent: "[RO] Ich weiß, ___ du kommst.",

    // T15: Du bist ein Satzart-Profi!
    t15_title: "[RO] Du bist ein Satzart-Profi!",
    t15_text: "[RO] Du kennst Haupt- und Nebensätze, alle Konjunktionen und ihre Funktionen: kausal, konditional, temporal, modal, final, konzessiv und komparativ!",
    t15_b1: "[RO] Alle Satzarten perfekt",
    t15_b2: "[RO] Alle Konjunktionen und ihre Rollen",
    t15_inst: "[RO] Zeige dein Satzart-Wissen!",
    t15_h1: "[RO] Denk an alle Konjunktionen und ihre Bedeutungen.",
    t15_h2: "[RO] weil (Grund), wenn (Bedingung), obwohl (Trotz), damit (Zweck)...",
    t15_sent4: "[RO] Ich lerne Deutsch, ___ ich später in Berlin arbeiten möchte.",
    t15_cc1: "[RO] damit", t15_cc2: "[RO] weil", t15_cc3: "[RO] wenn", t15_cc4: "[RO] obwohl",
  
  }
};

export const SATZART4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "compound-word", word1: "Hauptsatz", word2: "Nebensatz", result: "Satzgefüge", color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "sentence-display", words: ["Ich freue mich,", "dass die Sonne", "scheint"], highlightIndices: [2], color: "#EF4444" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [3],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "weil", color: "#1E40AF", bg: "#DBEAFE" }, { text: "wenn", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔗", title: "Satz-Verbinder", bg: "#F1F5F9" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
        { left: "t4_l4", right: "t4_r4" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Verb-Ende Check", bg: "#F1F5F9" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "physics-slingshot",
      question: "t_q",
      targets: [
        { id: "t5_id1", text: "t5_m1", isCorrect: true },
        { id: "t5_id2", text: "t5_m2", isCorrect: true },
        { id: "t5_id3", text: "t5_m3", isCorrect: true },
        { id: "t5_id4", text: "t5_m4", isCorrect: false },
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "obwohl", highlightChars: ["o"], color: "#F59E0B" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_o",
      choices: ["t6_co1", "t6_co2", "t6_co3", "t6_co4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏗️", title: "Satzbau-Profi", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "icon-grid", items: [{ emoji: "🤔", label: "kausal" }, { emoji: "❓", label: "konditional" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_sent",
      choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"],
      correctIndex: 0,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "nachdem, während, bevor", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [0],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["weil"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["obwohl"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "g", label: "t10_l" }, { id: "c", label: "t10_r" }],
      items: [
        { text: "t10_v1", bucketId: "g" },
        { text: "t10_v2", bucketId: "c" },
        { text: "t10_v3", bucketId: "g" },
        { text: "t10_v4", bucketId: "c" },
      ],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⚙️", title: "Modal", bg: "#F1F5F9" },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_sent2",
      choices: ["t11_cc1", "t11_cc2", "t11_cc3", "t11_cc4"],
      correctIndex: 0,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "damit, um zu", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      correctIndex: 0,
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "simple-icon", icon: "⚖️", title: "Vergleich", bg: "#F1F5F9" },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent3",
      choices: ["t13_cb1", "t13_cb2", "t13_cb3", "t13_cb4"],
      correctIndex: 0,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "icon-grid", items: [{ emoji: "🔍", label: "Analyse" }] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_sent",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      correctIndex: 1,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qb" },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent4",
      choices: ["t15_cc1", "t15_cc2", "t15_cc3", "t15_cc4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "nominativ" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Verbeninsel (Trennbare Verben & Futur)
// Thema: Trennbare Verben (aufmachen → macht auf), Futur I (wird spielen)
// ─────────────────────────────────────────────────────────────────────────────

export const VERB4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Igen-Kraftwerk",

    // T1: Was sind trennbare Verben?
    t1_title: "Die Trennbaren",
    t1_text: "Einige Verben haben einen Vorsatz (Präfix). Wenn wir sie im Satz beugen, trennt sich dieser Vorsatz ab und springt ganz ans Ende des Satzes. Beispiel: AUFstehen ➔ Ich stehe um 7 Uhr AUF.",
    t1_b1: "Präfix (vorne) trennt sich ab.",
    t1_b2: "Das Präfix steht am Satzende.",
    t1_inst: "Welches Wort ist ein trennbares Verb?",
    t1_h1: "Kannst du den vorderen Teil abtrennen? (auf-machen, an-fangen)",
    t1_h2: "'anfangen' ist trennbar.",
    t1_w1: "anfangen", t1_w2: "lernen", t1_w3: "singen", t1_w4: "sehen",
    // Quiz: GENERATOR (verben_k3)

    // T2: Die Satzklammer
    t2_title: "Die Satzklammer",
    t2_text: "Das Verb und sein abgetrennter Teil bilden eine Klammer um den Rest des Satzes. Vorne steht das gebeugte Verb, hinten der Vorsatz. 'Er MACHT das Fenster AUF.'",
    t2_b1: "Verb an Platz 2.",
    t2_b2: "Vorsatz am Ende.",
    t2_inst: "Finde das Präfix am Satzende!",
    t2_h1: "Welches kleine Wort steht ganz hinten és egy igéhez tartozik?",
    t2_h2: "Das Wort 'aus' gehört zu 'sieht'.",
    t2_w2_1: "Das Licht", t2_w2_2: "geht", t2_w2_3: "plötzlich", t2_w2_4: "aus", t2_w2_5: ".",
    // Quiz: MANUAL
    t2_q: "Wo steht das Präfix bei einem trennbaren Verb im Aussagesatz?",
    t2_qa: "Ganz am Ende", t2_qb: "Direkt vor dem Verb", t2_qc: "Am Satzanfang", t2_qd: "Hinter dem Subjekt",

    // T3: Futur I (Wiederholung & Vertiefung)
    t3_title: "Blick in die Zukunft",
    t3_text: "Das Futur I bilden wir mit 'werden' und der Grundform am Ende. 'Wir werden morgen ein Eis essen.' Das Verb am Ende bleibt immer in der Grundform!",
    t3_b1: "werden + Grundform (Infinitiv).",
    t3_inst: "Welche Form ist die richtige Grundform für das Ende?",
    t3_h1: "Die Grundform endet meist auf -en.",
    t3_h2: "Er wird morgen 'kommen'.",
    t3_sent: "Er wird morgen pünktlich ___.",
    t3_c1: "kommen", t3_c2: "kam", t3_c3: "gekommen", t3_c4: "kommt",
    // Quiz: MANUAL
    t3_q: "In welcher Form steht das Hauptverb im Futur I?",
    t3_qa: "Grundform (Infinitiv)", t3_qb: "Partizip II", t3_qc: "Präteritum", t3_qd: "Gebeugte Form",

    // T4: Werden - Der Zukunfts-Motor
    t4_title: "Der Zukunfts-Motor",
    t4_text: "Das Hilfsverb 'werden' muss sich an das Subjekt anpassen. Kannst du es richtig ragozni?",
    t4_b1: "ich werde, du wirst, er wird.",
    t4_b2: "wir werden, ihr werdet, sie werden.",
    t4_inst: "Sortiere: Welches 'werden' passt zu wem?",
    t4_h1: "Schau auf die Endung: -e, -st, -d.",
    t4_h2: "ich werde, du wirst, er wird.",
    t4_bw1: "ich / wir / sie", t4_bw2: "du / er / ihr",
    t4_i1: "werde", t4_i2: "wirst", t4_i3: "wird", t4_i4: "werden",
    // Quiz: GENERATOR (verben_k3)

    // T5: Trennbar oder nicht?
    t5_title: "Trenn-Check",
    t5_text: "Nicht jedes Verb mit einem Vorsatz ist trennbar! Verben mit be-, ent-, ver- oder zer- trennen sich NIE. Beispiel: VERstehen ➔ Ich verstehe dich (nicht: ich stehe ver dich).",
    t5_b1: "Trennbar: auf-, an-, ab-, mit-.",
    t5_b2: "Nicht trennbar: be-, ver-, ent-, zer-.",
    t5_inst: "Welches Verb ist NICHT trennbar?",
    t5_h1: "Suche nach einem Wort, das mit 'ver-' vagy 'be-' anfängt.",
    t5_h2: "'verlieren' trennt sich nie.",
    t5_w3_1: "aufmachen", t5_w3_2: "mitkommen", t5_w3_3: "verlieren", t5_w3_4: "anfangen",
    // Quiz: MANUAL
    t5_q: "Welches Präfix trennt sich NIE vom Verb?",
    t5_qa: "ver-", t5_qb: "auf-", t5_qc: "mit-", t5_qd: "ab-",

    // T6: Sätze bauen im Futur
    t6_title: "Futur-Satzbau",
    t6_text: "Baue einen Satz über deine Pläne. Denk dran: 'werden' auf Platz 2, das andere Verb ganz nach hinten!",
    t6_b1: "werden ➔ Platz 2.",
    t6_b2: "Grundform ➔ Ende.",
    t6_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "Beginne mit 'Ich werde'.",
    t6_h2: "Ich werde später Fußball spielen.",
    t6_o1: "Ich", t6_o2: "werde", t6_o3: "später", t6_o4: "Fußball spielen.",
    // Quiz: MANUAL
    t6_q: "Wo steht 'werden' im Aussagesatz?",
    t6_qa: "An zweiter Stelle", t6_qb: "Ganz am Ende", t6_qc: "Am Anfang", t6_qd: "Hinter dem Verb",

    // T7: Präfix-Schleuder (Slingshot!)
    t7_title: "Präfix-Schleuder",
    t7_text: "Schieße die Vorsätze an das Ende der Sätze! Nur trennbare Verben sind heute unsere Ziele.",
    t7_b1: "auf-, an-, aus-, mit-.",
    t7_inst: "Schieße das Präfix ans Satzende!",
    t7_h1: "Welches kleine Wort passt zum Verb?",
    t7_h2: "auf-stehen, aus-gehen, mit-spielen.",
    t7_target: "Satzende 🎯",
    t7_m1: "auf", t7_m2: "an", t7_m3: "mit", t7_m4: "ver (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Modalverben (können, müssen, dürfen)
    t8_title: "Modalverben",
    t8_text: "Modalverben sagen, WAS man tun KANN/MUSS/DARF. Sie stehen im Satz, aber das eigentliche Tunwort (Infinitiv) kommt ans Ende. Ich kann schwimmen (nicht: ich kann).",
    t8_b1: "können, müssen, dürfen, wollen",
    t8_b2: "+ Infinitiv am Ende",
    t8_inst: "Erkenne das Modalverb!",
    t8_h1: "Suche nach Wörtern wie können, müssen, dürfen.",
    t8_h2: "Ich muss heute lernen.",
    t8_w1: "Ich", t8_w2: "muss", t8_w3: "heute", t8_w4: "Hausaufgaben machen",

    // T9: Reflexive Verben (sich waschen)
    t9_title: "Reflexive Verben",
    t9_text: "Reflexive Verben sind Verben, die sich selbst richten: 'Ich wasche MICH', 'Du fragst DICH'. Das Reflexivpronomen (mich, dich, sich) ist wichtig!",
    t9_b1: "sich + Akkusativ/Dativ",
    t9_b2: "Beispiele: sich waschen, sich anziehen",
    t9_inst: "Erkenne das reflexive Verb!",
    t9_h1: "Suche nach 'sich' oder anderen Reflexivpronomen.",
    t9_h2: "Der Junge wäscht sich.",
    t9_sent: "Mein Freund ___ um 7 Uhr.",
    t9_c1: "wacht sich auf", t9_c2: "wacht auf", t9_c3: "wacht aufwach", t9_c4: "aufwachen sich",

    // T10: Trennbare vs. nicht trennbare - Vertiefung
    t10_title: "Präfixe unterscheiden",
    t10_text: "Trennbare Präfixe (auf, an, ab, mit) trennen sich immer. Nicht trennbare (be, ver, ent, zer) NIEMALS. Dies ist super wichtig!",
    t10_b1: "Trennbar: auf-, an-, ab-, mit-, zu-, aus-",
    t10_b2: "Nicht trennbar: be-, ver-, ent-, zer-, mis-",
    t10_inst: "Sortiere trennbare und nicht trennbare!",
    t10_h1: "Trennbar = Verb splittet. Nicht trennbar = Verb bleibt zusammen.",
    t10_h2: "aufmachen -> macht auf. Verstehen -> verstehe (nie: stehe ver).",
    t10_l: "Trennbar", t10_r: "Nicht trennbar",
    t10_v1: "aufmachen", t10_v2: "verstehen", t10_v3: "ausgehen", t10_v4: "beobachten",

    // T11: Partizip Perfekt (Vergangenheit)
    t11_title: "Partizip II (Mittelwort)",
    t11_text: "Das Partizip II ist für Perfekt und Passiv wichtig! Schwache Verben: -(e)t. Starke Verben: -en. Trennbare Verben: ge-[präfix]-verb-(e)t/en.",
    t11_b1: "Regelmäßig: ge-[verb]-t (spielen→gespielt)",
    t11_b2: "Unregelmäßig: ge-[verb]-en (essen→gegessen)",
    t11_inst: "Erkenne das Partizip II!",
    t11_h1: "Denk an 'ge' am Anfang und 't' oder 'en' am Ende.",
    t11_h2: "Ich habe GESPIELT. Ich bin GELAUFEN.",
    t11_q: "Wie endet das Partizip eines schwachen Verbs wie 'spielen'?",
    t11_qa: "- gespielt", t11_qb: "-gespielten", t11_qc: "-spielend", t11_qd: "-ge-spielt-",

    // T12: Präteritum-Endungen (war, spielte)
    t12_title: "Präteritum (Erzählform)",
    t12_text: "Im Präteritum ändern sich die Verben: schwach=-te/-test, stark= Stammvokal + Endungen. 'Ich spielte, du spieltest, er spielte.'",
    t12_b1: "Schwach: -te Endung",
    t12_b2: "Stark: Stammvokal ändert sich",
    t12_inst: "Wähle die richtige Präteritum-Form!",
    t12_h1: "Weak (regelmäßig): +te. Strong (unregelmäßig): Vokalwechsel.",
    t12_h2: "ich spielte, ich aß, ich war",
    t12_sent2: "Der Hund ___ im Park.",
    t12_cb1: "spielte", t12_cb2: "spielt", t12_cb3: "spielen", t12_cb4: "spielend",

    // T13: Verb-Kombinationen (haben + sein)
    t13_title: "Haben oder Sein im Perfekt?",
    t13_text: "Nicht alle Verben brauchen 'haben' für Perfekt! Bewegungsverben (fahren, gehen, laufen, fliegen) brauchen 'sein': 'Ich bin gelaufen.'",
    t13_b1: "Sein: Bewegungsverben (fahren, gehen, laufen)",
    t13_b2: "Haben: andere Verben",
    t13_inst: "Wähle 'haben' oder 'sein'!",
    t13_h1: "Bewegung? Dann 'sein'. Sonst 'haben'.",
    t13_h2: "Ich bin gelaufen. Ich habe gegessen.",
    t13_sent3: "Anna ___ nach Berlin ___.",
    t13_cb1: "ist gefahren", t13_cb2: "hat gefahren", t13_cb3: "hat fahren", t13_cb4: "ist fahren",

    // T14: Verb-Kombinationen komplex
    t14_title: "Komplexe Verb-Phänomene",
    t14_text: "Einige Verben sind doppelte Agenten: trennbar UND reflexiv (sich anziehen), oder Modalverben + trennbar (aufmachen können).",
    t14_b1: "Trennbar + Reflexiv",
    t14_b2: "Modal + Trennbar",
    t14_inst: "Erkenne die Kombination!",
    t14_h1: "Mehrere Verbeigenschaften kombinieren.",
    t14_h2: "Ich ziehe mich an (trennbar + reflexiv).",
    t14_q: "Was kommt am weitesten hinten im Satz bei 'Ich kann aufmachen'?",
    t14_qa: "'aufmachen' (Infinitiv)", t14_qb: "'auf' (Präfix)", t14_qc: "'machen'", t14_qd: "'können'",

    // T15: Du bist ein Verben-Profi!
    t15_title: "Du bist ein Verben-Profi!",
    t15_text: "Du kennst Modalverben, reflexive Verben, trennbare und nicht trennbare Verben, Partizip, Präteritum und komplexe Kombinationen. Du meisterst alle Verbformen!",
    t15_b1: "Alle Verbformen perfekt",
    t15_b2: "Alle Regeln und Ausnahmen",
    t15_inst: "Zeige dein Verben-Wissen!",
    t15_h1: "Denk an alle Verben-Eigenschaften.",
    t15_h2: "Trennbar? Reflexiv? Modal? Partizip? Präteritum?",
    t15_sent4: "Morgen ___ ich mich ___ und ___ zur Schule ___.",
    t15_cc1: "werde anziehen fahren", t15_cc2: "ziehe mich an fahren", t15_cc3: "will anziehen fahren", t15_cc4: "bin angezogen gefahren",
  },
  en: {

    explorer_title: "[EN] Igen-Kraftwerk",

    // T1: Was sind trennbare Verben?
    t1_title: "[EN] Die Trennbaren",
    t1_text: "[EN] Einige Verben haben einen Vorsatz (Präfix). Wenn wir sie im Satz beugen, trennt sich dieser Vorsatz ab und springt ganz ans Ende des Satzes. Beispiel: AUFstehen ➔ Ich stehe um 7 Uhr AUF.",
    t1_b1: "[EN] Präfix (vorne) trennt sich ab.",
    t1_b2: "[EN] Das Präfix steht am Satzende.",
    t1_inst: "[EN] Welches Wort ist ein trennbares Verb?",
    t1_h1: "[EN] Kannst du den vorderen Teil abtrennen? (auf-machen, an-fangen)",
    t1_h2: "[EN] 'anfangen' ist trennbar.",
    t1_w1: "[EN] anfangen", t1_w2: "[EN] lernen", t1_w3: "[EN] singen", t1_w4: "[EN] sehen",
    // Quiz: GENERATOR (verben_k3)

    // T2: Die Satzklammer
    t2_title: "[EN] Die Satzklammer",
    t2_text: "[EN] Das Verb und sein abgetrennter Teil bilden eine Klammer um den Rest des Satzes. Vorne steht das gebeugte Verb, hinten der Vorsatz. 'Er MACHT das Fenster AUF.'",
    t2_b1: "[EN] Verb an Platz 2.",
    t2_b2: "[EN] Vorsatz am Ende.",
    t2_inst: "[EN] Finde das Präfix am Satzende!",
    t2_h1: "[EN] Welches kleine Wort steht ganz hinten és egy igéhez tartozik?",
    t2_h2: "[EN] Das Wort 'aus' gehört zu 'sieht'.",
    t2_w2_1: "[EN] Das Licht", t2_w2_2: "[EN] geht", t2_w2_3: "[EN] plötzlich", t2_w2_4: "[EN] aus", t2_w2_5: "[EN] .",
    // Quiz: MANUAL
    t2_q: "[EN] Wo steht das Präfix bei einem trennbaren Verb im Aussagesatz?",
    t2_qa: "[EN] Ganz am Ende", t2_qb: "[EN] Direkt vor dem Verb", t2_qc: "[EN] Am Satzanfang", t2_qd: "[EN] Hinter dem Subjekt",

    // T3: Futur I (Wiederholung & Vertiefung)
    t3_title: "[EN] Blick in die Zukunft",
    t3_text: "[EN] Das Futur I bilden wir mit 'werden' und der Grundform am Ende. 'Wir werden morgen ein Eis essen.' Das Verb am Ende bleibt immer in der Grundform!",
    t3_b1: "[EN] werden + Grundform (Infinitiv).",
    t3_inst: "[EN] Welche Form ist die richtige Grundform für das Ende?",
    t3_h1: "[EN] Die Grundform endet meist auf -en.",
    t3_h2: "[EN] Er wird morgen 'kommen'.",
    t3_sent: "[EN] Er wird morgen pünktlich ___.",
    t3_c1: "[EN] kommen", t3_c2: "[EN] kam", t3_c3: "[EN] gekommen", t3_c4: "[EN] kommt",
    // Quiz: MANUAL
    t3_q: "[EN] In welcher Form steht das Hauptverb im Futur I?",
    t3_qa: "[EN] Grundform (Infinitiv)", t3_qb: "[EN] Partizip II", t3_qc: "[EN] Präteritum", t3_qd: "[EN] Gebeugte Form",

    // T4: Werden - Der Zukunfts-Motor
    t4_title: "[EN] Der Zukunfts-Motor",
    t4_text: "[EN] Das Hilfsverb 'werden' muss sich an das Subjekt anpassen. Kannst du es richtig ragozni?",
    t4_b1: "[EN] ich werde, du wirst, er wird.",
    t4_b2: "[EN] wir werden, ihr werdet, sie werden.",
    t4_inst: "[EN] Sortiere: Welches 'werden' passt zu wem?",
    t4_h1: "[EN] Schau auf die Endung: -e, -st, -d.",
    t4_h2: "[EN] ich werde, du wirst, er wird.",
    t4_bw1: "[EN] ich / wir / sie", t4_bw2: "[EN] du / er / ihr",
    t4_i1: "[EN] werde", t4_i2: "[EN] wirst", t4_i3: "[EN] wird", t4_i4: "[EN] werden",
    // Quiz: GENERATOR (verben_k3)

    // T5: Trennbar oder nicht?
    t5_title: "[EN] Trenn-Check",
    t5_text: "[EN] Nicht jedes Verb mit einem Vorsatz ist trennbar! Verben mit be-, ent-, ver- oder zer- trennen sich NIE. Beispiel: VERstehen ➔ Ich verstehe dich (nicht: ich stehe ver dich).",
    t5_b1: "[EN] Trennbar: auf-, an-, ab-, mit-.",
    t5_b2: "[EN] Nicht trennbar: be-, ver-, ent-, zer-.",
    t5_inst: "[EN] Welches Verb ist NICHT trennbar?",
    t5_h1: "[EN] Suche nach einem Wort, das mit 'ver-' vagy 'be-' anfängt.",
    t5_h2: "[EN] 'verlieren' trennt sich nie.",
    t5_w3_1: "[EN] aufmachen", t5_w3_2: "[EN] mitkommen", t5_w3_3: "[EN] verlieren", t5_w3_4: "[EN] anfangen",
    // Quiz: MANUAL
    t5_q: "[EN] Welches Präfix trennt sich NIE vom Verb?",
    t5_qa: "[EN] ver-", t5_qb: "[EN] auf-", t5_qc: "[EN] mit-", t5_qd: "[EN] ab-",

    // T6: Sätze bauen im Futur
    t6_title: "[EN] Futur-Satzbau",
    t6_text: "[EN] Baue einen Satz über deine Pläne. Denk dran: 'werden' auf Platz 2, das andere Verb ganz nach hinten!",
    t6_b1: "[EN] werden ➔ Platz 2.",
    t6_b2: "[EN] Grundform ➔ Ende.",
    t6_inst: "[EN] Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "[EN] Beginne mit 'Ich werde'.",
    t6_h2: "[EN] Ich werde später Fußball spielen.",
    t6_o1: "[EN] Ich", t6_o2: "[EN] werde", t6_o3: "[EN] später", t6_o4: "[EN] Fußball spielen.",
    // Quiz: MANUAL
    t6_q: "[EN] Wo steht 'werden' im Aussagesatz?",
    t6_qa: "[EN] An zweiter Stelle", t6_qb: "[EN] Ganz am Ende", t6_qc: "[EN] Am Anfang", t6_qd: "[EN] Hinter dem Verb",

    // T7: Präfix-Schleuder (Slingshot!)
    t7_title: "[EN] Präfix-Schleuder",
    t7_text: "[EN] Schieße die Vorsätze an das Ende der Sätze! Nur trennbare Verben sind heute unsere Ziele.",
    t7_b1: "[EN] auf-, an-, aus-, mit-.",
    t7_inst: "[EN] Schieße das Präfix ans Satzende!",
    t7_h1: "[EN] Welches kleine Wort passt zum Verb?",
    t7_h2: "[EN] auf-stehen, aus-gehen, mit-spielen.",
    t7_target: "[EN] Satzende 🎯",
    t7_m1: "[EN] auf", t7_m2: "[EN] an", t7_m3: "[EN] mit", t7_m4: "[EN] ver (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Modalverben (können, müssen, dürfen)
    t8_title: "[EN] Modalverben",
    t8_text: "[EN] Modalverben sagen, WAS man tun KANN/MUSS/DARF. Sie stehen im Satz, aber das eigentliche Tunwort (Infinitiv) kommt ans Ende. Ich kann schwimmen (nicht: ich kann).",
    t8_b1: "[EN] können, müssen, dürfen, wollen",
    t8_b2: "[EN] + Infinitiv am Ende",
    t8_inst: "[EN] Erkenne das Modalverb!",
    t8_h1: "[EN] Suche nach Wörtern wie können, müssen, dürfen.",
    t8_h2: "[EN] Ich muss heute lernen.",
    t8_w1: "[EN] Ich", t8_w2: "[EN] muss", t8_w3: "[EN] heute", t8_w4: "[EN] Hausaufgaben machen",

    // T9: Reflexive Verben (sich waschen)
    t9_title: "[EN] Reflexive Verben",
    t9_text: "[EN] Reflexive Verben sind Verben, die sich selbst richten: 'Ich wasche MICH', 'Du fragst DICH'. Das Reflexivpronomen (mich, dich, sich) ist wichtig!",
    t9_b1: "[EN] sich + Akkusativ/Dativ",
    t9_b2: "[EN] Beispiele: sich waschen, sich anziehen",
    t9_inst: "[EN] Erkenne das reflexive Verb!",
    t9_h1: "[EN] Suche nach 'sich' oder anderen Reflexivpronomen.",
    t9_h2: "[EN] Der Junge wäscht sich.",
    t9_sent: "[EN] Mein Freund ___ um 7 Uhr.",
    t9_c1: "[EN] wacht sich auf", t9_c2: "[EN] wacht auf", t9_c3: "[EN] wacht aufwach", t9_c4: "[EN] aufwachen sich",

    // T10: Trennbare vs. nicht trennbare - Vertiefung
    t10_title: "[EN] Präfixe unterscheiden",
    t10_text: "[EN] Trennbare Präfixe (auf, an, ab, mit) trennen sich immer. Nicht trennbare (be, ver, ent, zer) NIEMALS. Dies ist super wichtig!",
    t10_b1: "[EN] Trennbar: auf-, an-, ab-, mit-, zu-, aus-",
    t10_b2: "[EN] Nicht trennbar: be-, ver-, ent-, zer-, mis-",
    t10_inst: "[EN] Sortiere trennbare und nicht trennbare!",
    t10_h1: "[EN] Trennbar = Verb splittet. Nicht trennbar = Verb bleibt zusammen.",
    t10_h2: "[EN] aufmachen -> macht auf. Verstehen -> verstehe (nie: stehe ver).",
    t10_l: "[EN] Trennbar", t10_r: "[EN] Nicht trennbar",
    t10_v1: "[EN] aufmachen", t10_v2: "[EN] verstehen", t10_v3: "[EN] ausgehen", t10_v4: "[EN] beobachten",

    // T11: Partizip Perfekt (Vergangenheit)
    t11_title: "[EN] Partizip II (Mittelwort)",
    t11_text: "[EN] Das Partizip II ist für Perfekt und Passiv wichtig! Schwache Verben: -(e)t. Starke Verben: -en. Trennbare Verben: ge-[präfix]-verb-(e)t/en.",
    t11_b1: "[EN] Regelmäßig: ge-[verb]-t (spielen→gespielt)",
    t11_b2: "[EN] Unregelmäßig: ge-[verb]-en (essen→gegessen)",
    t11_inst: "[EN] Erkenne das Partizip II!",
    t11_h1: "[EN] Denk an 'ge' am Anfang und 't' oder 'en' am Ende.",
    t11_h2: "[EN] Ich habe GESPIELT. Ich bin GELAUFEN.",
    t11_q: "[EN] Wie endet das Partizip eines schwachen Verbs wie 'spielen'?",
    t11_qa: "[EN] - gespielt", t11_qb: "[EN] -gespielten", t11_qc: "[EN] -spielend", t11_qd: "[EN] -ge-spielt-",

    // T12: Präteritum-Endungen (war, spielte)
    t12_title: "[EN] Präteritum (Erzählform)",
    t12_text: "[EN] Im Präteritum ändern sich die Verben: schwach=-te/-test, stark= Stammvokal + Endungen. 'Ich spielte, du spieltest, er spielte.'",
    t12_b1: "[EN] Schwach: -te Endung",
    t12_b2: "[EN] Stark: Stammvokal ändert sich",
    t12_inst: "[EN] Wähle die richtige Präteritum-Form!",
    t12_h1: "[EN] Weak (regelmäßig): +te. Strong (unregelmäßig): Vokalwechsel.",
    t12_h2: "[EN] ich spielte, ich aß, ich war",
    t12_sent2: "[EN] Der Hund ___ im Park.",
    t12_cb1: "[EN] spielte", t12_cb2: "[EN] spielt", t12_cb3: "[EN] spielen", t12_cb4: "[EN] spielend",

    // T13: Verb-Kombinationen (haben + sein)
    t13_title: "[EN] Haben oder Sein im Perfekt?",
    t13_text: "[EN] Nicht alle Verben brauchen 'haben' für Perfekt! Bewegungsverben (fahren, gehen, laufen, fliegen) brauchen 'sein': 'Ich bin gelaufen.'",
    t13_b1: "[EN] Sein: Bewegungsverben (fahren, gehen, laufen)",
    t13_b2: "[EN] Haben: andere Verben",
    t13_inst: "[EN] Wähle 'haben' oder 'sein'!",
    t13_h1: "[EN] Bewegung? Dann 'sein'. Sonst 'haben'.",
    t13_h2: "[EN] Ich bin gelaufen. Ich habe gegessen.",
    t13_sent3: "[EN] Anna ___ nach Berlin ___.",
    t13_cb1: "[EN] ist gefahren", t13_cb2: "[EN] hat gefahren", t13_cb3: "[EN] hat fahren", t13_cb4: "[EN] ist fahren",

    // T14: Verb-Kombinationen komplex
    t14_title: "[EN] Komplexe Verb-Phänomene",
    t14_text: "[EN] Einige Verben sind doppelte Agenten: trennbar UND reflexiv (sich anziehen), oder Modalverben + trennbar (aufmachen können).",
    t14_b1: "[EN] Trennbar + Reflexiv",
    t14_b2: "[EN] Modal + Trennbar",
    t14_inst: "[EN] Erkenne die Kombination!",
    t14_h1: "[EN] Mehrere Verbeigenschaften kombinieren.",
    t14_h2: "[EN] Ich ziehe mich an (trennbar + reflexiv).",
    t14_q: "[EN] Was kommt am weitesten hinten im Satz bei 'Ich kann aufmachen'?",
    t14_qa: "[EN] 'aufmachen' (Infinitiv)", t14_qb: "[EN] 'auf' (Präfix)", t14_qc: "[EN] 'machen'", t14_qd: "[EN] 'können'",

    // T15: Du bist ein Verben-Profi!
    t15_title: "[EN] Du bist ein Verben-Profi!",
    t15_text: "[EN] Du kennst Modalverben, reflexive Verben, trennbare und nicht trennbare Verben, Partizip, Präteritum und komplexe Kombinationen. Du meisterst alle Verbformen!",
    t15_b1: "[EN] Alle Verbformen perfekt",
    t15_b2: "[EN] Alle Regeln und Ausnahmen",
    t15_inst: "[EN] Zeige dein Verben-Wissen!",
    t15_h1: "[EN] Denk an alle Verben-Eigenschaften.",
    t15_h2: "[EN] Trennbar? Reflexiv? Modal? Partizip? Präteritum?",
    t15_sent4: "[EN] Morgen ___ ich mich ___ und ___ zur Schule ___.",
    t15_cc1: "[EN] werde anziehen fahren", t15_cc2: "[EN] ziehe mich an fahren", t15_cc3: "[EN] will anziehen fahren", t15_cc4: "[EN] bin angezogen gefahren",
  
  },
  hu: {

    explorer_title: "[HU] Igen-Kraftwerk",

    // T1: Was sind trennbare Verben?
    t1_title: "[HU] Die Trennbaren",
    t1_text: "[HU] Einige Verben haben einen Vorsatz (Präfix). Wenn wir sie im Satz beugen, trennt sich dieser Vorsatz ab und springt ganz ans Ende des Satzes. Beispiel: AUFstehen ➔ Ich stehe um 7 Uhr AUF.",
    t1_b1: "[HU] Präfix (vorne) trennt sich ab.",
    t1_b2: "[HU] Das Präfix steht am Satzende.",
    t1_inst: "[HU] Welches Wort ist ein trennbares Verb?",
    t1_h1: "[HU] Kannst du den vorderen Teil abtrennen? (auf-machen, an-fangen)",
    t1_h2: "[HU] 'anfangen' ist trennbar.",
    t1_w1: "[HU] anfangen", t1_w2: "[HU] lernen", t1_w3: "[HU] singen", t1_w4: "[HU] sehen",
    // Quiz: GENERATOR (verben_k3)

    // T2: Die Satzklammer
    t2_title: "[HU] Die Satzklammer",
    t2_text: "[HU] Das Verb und sein abgetrennter Teil bilden eine Klammer um den Rest des Satzes. Vorne steht das gebeugte Verb, hinten der Vorsatz. 'Er MACHT das Fenster AUF.'",
    t2_b1: "[HU] Verb an Platz 2.",
    t2_b2: "[HU] Vorsatz am Ende.",
    t2_inst: "[HU] Finde das Präfix am Satzende!",
    t2_h1: "[HU] Welches kleine Wort steht ganz hinten és egy igéhez tartozik?",
    t2_h2: "[HU] Das Wort 'aus' gehört zu 'sieht'.",
    t2_w2_1: "[HU] Das Licht", t2_w2_2: "[HU] geht", t2_w2_3: "[HU] plötzlich", t2_w2_4: "[HU] aus", t2_w2_5: "[HU] .",
    // Quiz: MANUAL
    t2_q: "[HU] Wo steht das Präfix bei einem trennbaren Verb im Aussagesatz?",
    t2_qa: "[HU] Ganz am Ende", t2_qb: "[HU] Direkt vor dem Verb", t2_qc: "[HU] Am Satzanfang", t2_qd: "[HU] Hinter dem Subjekt",

    // T3: Futur I (Wiederholung & Vertiefung)
    t3_title: "[HU] Blick in die Zukunft",
    t3_text: "[HU] Das Futur I bilden wir mit 'werden' und der Grundform am Ende. 'Wir werden morgen ein Eis essen.' Das Verb am Ende bleibt immer in der Grundform!",
    t3_b1: "[HU] werden + Grundform (Infinitiv).",
    t3_inst: "[HU] Welche Form ist die richtige Grundform für das Ende?",
    t3_h1: "[HU] Die Grundform endet meist auf -en.",
    t3_h2: "[HU] Er wird morgen 'kommen'.",
    t3_sent: "[HU] Er wird morgen pünktlich ___.",
    t3_c1: "[HU] kommen", t3_c2: "[HU] kam", t3_c3: "[HU] gekommen", t3_c4: "[HU] kommt",
    // Quiz: MANUAL
    t3_q: "[HU] In welcher Form steht das Hauptverb im Futur I?",
    t3_qa: "[HU] Grundform (Infinitiv)", t3_qb: "[HU] Partizip II", t3_qc: "[HU] Präteritum", t3_qd: "[HU] Gebeugte Form",

    // T4: Werden - Der Zukunfts-Motor
    t4_title: "[HU] Der Zukunfts-Motor",
    t4_text: "[HU] Das Hilfsverb 'werden' muss sich an das Subjekt anpassen. Kannst du es richtig ragozni?",
    t4_b1: "[HU] ich werde, du wirst, er wird.",
    t4_b2: "[HU] wir werden, ihr werdet, sie werden.",
    t4_inst: "[HU] Sortiere: Welches 'werden' passt zu wem?",
    t4_h1: "[HU] Schau auf die Endung: -e, -st, -d.",
    t4_h2: "[HU] ich werde, du wirst, er wird.",
    t4_bw1: "[HU] ich / wir / sie", t4_bw2: "[HU] du / er / ihr",
    t4_i1: "[HU] werde", t4_i2: "[HU] wirst", t4_i3: "[HU] wird", t4_i4: "[HU] werden",
    // Quiz: GENERATOR (verben_k3)

    // T5: Trennbar oder nicht?
    t5_title: "[HU] Trenn-Check",
    t5_text: "[HU] Nicht jedes Verb mit einem Vorsatz ist trennbar! Verben mit be-, ent-, ver- oder zer- trennen sich NIE. Beispiel: VERstehen ➔ Ich verstehe dich (nicht: ich stehe ver dich).",
    t5_b1: "[HU] Trennbar: auf-, an-, ab-, mit-.",
    t5_b2: "[HU] Nicht trennbar: be-, ver-, ent-, zer-.",
    t5_inst: "[HU] Welches Verb ist NICHT trennbar?",
    t5_h1: "[HU] Suche nach einem Wort, das mit 'ver-' vagy 'be-' anfängt.",
    t5_h2: "[HU] 'verlieren' trennt sich nie.",
    t5_w3_1: "[HU] aufmachen", t5_w3_2: "[HU] mitkommen", t5_w3_3: "[HU] verlieren", t5_w3_4: "[HU] anfangen",
    // Quiz: MANUAL
    t5_q: "[HU] Welches Präfix trennt sich NIE vom Verb?",
    t5_qa: "[HU] ver-", t5_qb: "[HU] auf-", t5_qc: "[HU] mit-", t5_qd: "[HU] ab-",

    // T6: Sätze bauen im Futur
    t6_title: "[HU] Futur-Satzbau",
    t6_text: "[HU] Baue einen Satz über deine Pläne. Denk dran: 'werden' auf Platz 2, das andere Verb ganz nach hinten!",
    t6_b1: "[HU] werden ➔ Platz 2.",
    t6_b2: "[HU] Grundform ➔ Ende.",
    t6_inst: "[HU] Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "[HU] Beginne mit 'Ich werde'.",
    t6_h2: "[HU] Ich werde später Fußball spielen.",
    t6_o1: "[HU] Ich", t6_o2: "[HU] werde", t6_o3: "[HU] später", t6_o4: "[HU] Fußball spielen.",
    // Quiz: MANUAL
    t6_q: "[HU] Wo steht 'werden' im Aussagesatz?",
    t6_qa: "[HU] An zweiter Stelle", t6_qb: "[HU] Ganz am Ende", t6_qc: "[HU] Am Anfang", t6_qd: "[HU] Hinter dem Verb",

    // T7: Präfix-Schleuder (Slingshot!)
    t7_title: "[HU] Präfix-Schleuder",
    t7_text: "[HU] Schieße die Vorsätze an das Ende der Sätze! Nur trennbare Verben sind heute unsere Ziele.",
    t7_b1: "[HU] auf-, an-, aus-, mit-.",
    t7_inst: "[HU] Schieße das Präfix ans Satzende!",
    t7_h1: "[HU] Welches kleine Wort passt zum Verb?",
    t7_h2: "[HU] auf-stehen, aus-gehen, mit-spielen.",
    t7_target: "[HU] Satzende 🎯",
    t7_m1: "[HU] auf", t7_m2: "[HU] an", t7_m3: "[HU] mit", t7_m4: "[HU] ver (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Modalverben (können, müssen, dürfen)
    t8_title: "[HU] Modalverben",
    t8_text: "[HU] Modalverben sagen, WAS man tun KANN/MUSS/DARF. Sie stehen im Satz, aber das eigentliche Tunwort (Infinitiv) kommt ans Ende. Ich kann schwimmen (nicht: ich kann).",
    t8_b1: "[HU] können, müssen, dürfen, wollen",
    t8_b2: "[HU] + Infinitiv am Ende",
    t8_inst: "[HU] Erkenne das Modalverb!",
    t8_h1: "[HU] Suche nach Wörtern wie können, müssen, dürfen.",
    t8_h2: "[HU] Ich muss heute lernen.",
    t8_w1: "[HU] Ich", t8_w2: "[HU] muss", t8_w3: "[HU] heute", t8_w4: "[HU] Hausaufgaben machen",

    // T9: Reflexive Verben (sich waschen)
    t9_title: "[HU] Reflexive Verben",
    t9_text: "[HU] Reflexive Verben sind Verben, die sich selbst richten: 'Ich wasche MICH', 'Du fragst DICH'. Das Reflexivpronomen (mich, dich, sich) ist wichtig!",
    t9_b1: "[HU] sich + Akkusativ/Dativ",
    t9_b2: "[HU] Beispiele: sich waschen, sich anziehen",
    t9_inst: "[HU] Erkenne das reflexive Verb!",
    t9_h1: "[HU] Suche nach 'sich' oder anderen Reflexivpronomen.",
    t9_h2: "[HU] Der Junge wäscht sich.",
    t9_sent: "[HU] Mein Freund ___ um 7 Uhr.",
    t9_c1: "[HU] wacht sich auf", t9_c2: "[HU] wacht auf", t9_c3: "[HU] wacht aufwach", t9_c4: "[HU] aufwachen sich",

    // T10: Trennbare vs. nicht trennbare - Vertiefung
    t10_title: "[HU] Präfixe unterscheiden",
    t10_text: "[HU] Trennbare Präfixe (auf, an, ab, mit) trennen sich immer. Nicht trennbare (be, ver, ent, zer) NIEMALS. Dies ist super wichtig!",
    t10_b1: "[HU] Trennbar: auf-, an-, ab-, mit-, zu-, aus-",
    t10_b2: "[HU] Nicht trennbar: be-, ver-, ent-, zer-, mis-",
    t10_inst: "[HU] Sortiere trennbare und nicht trennbare!",
    t10_h1: "[HU] Trennbar = Verb splittet. Nicht trennbar = Verb bleibt zusammen.",
    t10_h2: "[HU] aufmachen -> macht auf. Verstehen -> verstehe (nie: stehe ver).",
    t10_l: "[HU] Trennbar", t10_r: "[HU] Nicht trennbar",
    t10_v1: "[HU] aufmachen", t10_v2: "[HU] verstehen", t10_v3: "[HU] ausgehen", t10_v4: "[HU] beobachten",

    // T11: Partizip Perfekt (Vergangenheit)
    t11_title: "[HU] Partizip II (Mittelwort)",
    t11_text: "[HU] Das Partizip II ist für Perfekt und Passiv wichtig! Schwache Verben: -(e)t. Starke Verben: -en. Trennbare Verben: ge-[präfix]-verb-(e)t/en.",
    t11_b1: "[HU] Regelmäßig: ge-[verb]-t (spielen→gespielt)",
    t11_b2: "[HU] Unregelmäßig: ge-[verb]-en (essen→gegessen)",
    t11_inst: "[HU] Erkenne das Partizip II!",
    t11_h1: "[HU] Denk an 'ge' am Anfang und 't' oder 'en' am Ende.",
    t11_h2: "[HU] Ich habe GESPIELT. Ich bin GELAUFEN.",
    t11_q: "[HU] Wie endet das Partizip eines schwachen Verbs wie 'spielen'?",
    t11_qa: "[HU] - gespielt", t11_qb: "[HU] -gespielten", t11_qc: "[HU] -spielend", t11_qd: "[HU] -ge-spielt-",

    // T12: Präteritum-Endungen (war, spielte)
    t12_title: "[HU] Präteritum (Erzählform)",
    t12_text: "[HU] Im Präteritum ändern sich die Verben: schwach=-te/-test, stark= Stammvokal + Endungen. 'Ich spielte, du spieltest, er spielte.'",
    t12_b1: "[HU] Schwach: -te Endung",
    t12_b2: "[HU] Stark: Stammvokal ändert sich",
    t12_inst: "[HU] Wähle die richtige Präteritum-Form!",
    t12_h1: "[HU] Weak (regelmäßig): +te. Strong (unregelmäßig): Vokalwechsel.",
    t12_h2: "[HU] ich spielte, ich aß, ich war",
    t12_sent2: "[HU] Der Hund ___ im Park.",
    t12_cb1: "[HU] spielte", t12_cb2: "[HU] spielt", t12_cb3: "[HU] spielen", t12_cb4: "[HU] spielend",

    // T13: Verb-Kombinationen (haben + sein)
    t13_title: "[HU] Haben oder Sein im Perfekt?",
    t13_text: "[HU] Nicht alle Verben brauchen 'haben' für Perfekt! Bewegungsverben (fahren, gehen, laufen, fliegen) brauchen 'sein': 'Ich bin gelaufen.'",
    t13_b1: "[HU] Sein: Bewegungsverben (fahren, gehen, laufen)",
    t13_b2: "[HU] Haben: andere Verben",
    t13_inst: "[HU] Wähle 'haben' oder 'sein'!",
    t13_h1: "[HU] Bewegung? Dann 'sein'. Sonst 'haben'.",
    t13_h2: "[HU] Ich bin gelaufen. Ich habe gegessen.",
    t13_sent3: "[HU] Anna ___ nach Berlin ___.",
    t13_cb1: "[HU] ist gefahren", t13_cb2: "[HU] hat gefahren", t13_cb3: "[HU] hat fahren", t13_cb4: "[HU] ist fahren",

    // T14: Verb-Kombinationen komplex
    t14_title: "[HU] Komplexe Verb-Phänomene",
    t14_text: "[HU] Einige Verben sind doppelte Agenten: trennbar UND reflexiv (sich anziehen), oder Modalverben + trennbar (aufmachen können).",
    t14_b1: "[HU] Trennbar + Reflexiv",
    t14_b2: "[HU] Modal + Trennbar",
    t14_inst: "[HU] Erkenne die Kombination!",
    t14_h1: "[HU] Mehrere Verbeigenschaften kombinieren.",
    t14_h2: "[HU] Ich ziehe mich an (trennbar + reflexiv).",
    t14_q: "[HU] Was kommt am weitesten hinten im Satz bei 'Ich kann aufmachen'?",
    t14_qa: "[HU] 'aufmachen' (Infinitiv)", t14_qb: "[HU] 'auf' (Präfix)", t14_qc: "[HU] 'machen'", t14_qd: "[HU] 'können'",

    // T15: Du bist ein Verben-Profi!
    t15_title: "[HU] Du bist ein Verben-Profi!",
    t15_text: "[HU] Du kennst Modalverben, reflexive Verben, trennbare und nicht trennbare Verben, Partizip, Präteritum und komplexe Kombinationen. Du meisterst alle Verbformen!",
    t15_b1: "[HU] Alle Verbformen perfekt",
    t15_b2: "[HU] Alle Regeln und Ausnahmen",
    t15_inst: "[HU] Zeige dein Verben-Wissen!",
    t15_h1: "[HU] Denk an alle Verben-Eigenschaften.",
    t15_h2: "[HU] Trennbar? Reflexiv? Modal? Partizip? Präteritum?",
    t15_sent4: "[HU] Morgen ___ ich mich ___ und ___ zur Schule ___.",
    t15_cc1: "[HU] werde anziehen fahren", t15_cc2: "[HU] ziehe mich an fahren", t15_cc3: "[HU] will anziehen fahren", t15_cc4: "[HU] bin angezogen gefahren",
  
  },
  ro: {

    explorer_title: "[RO] Igen-Kraftwerk",

    // T1: Was sind trennbare Verben?
    t1_title: "[RO] Die Trennbaren",
    t1_text: "[RO] Einige Verben haben einen Vorsatz (Präfix). Wenn wir sie im Satz beugen, trennt sich dieser Vorsatz ab und springt ganz ans Ende des Satzes. Beispiel: AUFstehen ➔ Ich stehe um 7 Uhr AUF.",
    t1_b1: "[RO] Präfix (vorne) trennt sich ab.",
    t1_b2: "[RO] Das Präfix steht am Satzende.",
    t1_inst: "[RO] Welches Wort ist ein trennbares Verb?",
    t1_h1: "[RO] Kannst du den vorderen Teil abtrennen? (auf-machen, an-fangen)",
    t1_h2: "[RO] 'anfangen' ist trennbar.",
    t1_w1: "[RO] anfangen", t1_w2: "[RO] lernen", t1_w3: "[RO] singen", t1_w4: "[RO] sehen",
    // Quiz: GENERATOR (verben_k3)

    // T2: Die Satzklammer
    t2_title: "[RO] Die Satzklammer",
    t2_text: "[RO] Das Verb und sein abgetrennter Teil bilden eine Klammer um den Rest des Satzes. Vorne steht das gebeugte Verb, hinten der Vorsatz. 'Er MACHT das Fenster AUF.'",
    t2_b1: "[RO] Verb an Platz 2.",
    t2_b2: "[RO] Vorsatz am Ende.",
    t2_inst: "[RO] Finde das Präfix am Satzende!",
    t2_h1: "[RO] Welches kleine Wort steht ganz hinten és egy igéhez tartozik?",
    t2_h2: "[RO] Das Wort 'aus' gehört zu 'sieht'.",
    t2_w2_1: "[RO] Das Licht", t2_w2_2: "[RO] geht", t2_w2_3: "[RO] plötzlich", t2_w2_4: "[RO] aus", t2_w2_5: "[RO] .",
    // Quiz: MANUAL
    t2_q: "[RO] Wo steht das Präfix bei einem trennbaren Verb im Aussagesatz?",
    t2_qa: "[RO] Ganz am Ende", t2_qb: "[RO] Direkt vor dem Verb", t2_qc: "[RO] Am Satzanfang", t2_qd: "[RO] Hinter dem Subjekt",

    // T3: Futur I (Wiederholung & Vertiefung)
    t3_title: "[RO] Blick in die Zukunft",
    t3_text: "[RO] Das Futur I bilden wir mit 'werden' und der Grundform am Ende. 'Wir werden morgen ein Eis essen.' Das Verb am Ende bleibt immer in der Grundform!",
    t3_b1: "[RO] werden + Grundform (Infinitiv).",
    t3_inst: "[RO] Welche Form ist die richtige Grundform für das Ende?",
    t3_h1: "[RO] Die Grundform endet meist auf -en.",
    t3_h2: "[RO] Er wird morgen 'kommen'.",
    t3_sent: "[RO] Er wird morgen pünktlich ___.",
    t3_c1: "[RO] kommen", t3_c2: "[RO] kam", t3_c3: "[RO] gekommen", t3_c4: "[RO] kommt",
    // Quiz: MANUAL
    t3_q: "[RO] In welcher Form steht das Hauptverb im Futur I?",
    t3_qa: "[RO] Grundform (Infinitiv)", t3_qb: "[RO] Partizip II", t3_qc: "[RO] Präteritum", t3_qd: "[RO] Gebeugte Form",

    // T4: Werden - Der Zukunfts-Motor
    t4_title: "[RO] Der Zukunfts-Motor",
    t4_text: "[RO] Das Hilfsverb 'werden' muss sich an das Subjekt anpassen. Kannst du es richtig ragozni?",
    t4_b1: "[RO] ich werde, du wirst, er wird.",
    t4_b2: "[RO] wir werden, ihr werdet, sie werden.",
    t4_inst: "[RO] Sortiere: Welches 'werden' passt zu wem?",
    t4_h1: "[RO] Schau auf die Endung: -e, -st, -d.",
    t4_h2: "[RO] ich werde, du wirst, er wird.",
    t4_bw1: "[RO] ich / wir / sie", t4_bw2: "[RO] du / er / ihr",
    t4_i1: "[RO] werde", t4_i2: "[RO] wirst", t4_i3: "[RO] wird", t4_i4: "[RO] werden",
    // Quiz: GENERATOR (verben_k3)

    // T5: Trennbar oder nicht?
    t5_title: "[RO] Trenn-Check",
    t5_text: "[RO] Nicht jedes Verb mit einem Vorsatz ist trennbar! Verben mit be-, ent-, ver- oder zer- trennen sich NIE. Beispiel: VERstehen ➔ Ich verstehe dich (nicht: ich stehe ver dich).",
    t5_b1: "[RO] Trennbar: auf-, an-, ab-, mit-.",
    t5_b2: "[RO] Nicht trennbar: be-, ver-, ent-, zer-.",
    t5_inst: "[RO] Welches Verb ist NICHT trennbar?",
    t5_h1: "[RO] Suche nach einem Wort, das mit 'ver-' vagy 'be-' anfängt.",
    t5_h2: "[RO] 'verlieren' trennt sich nie.",
    t5_w3_1: "[RO] aufmachen", t5_w3_2: "[RO] mitkommen", t5_w3_3: "[RO] verlieren", t5_w3_4: "[RO] anfangen",
    // Quiz: MANUAL
    t5_q: "[RO] Welches Präfix trennt sich NIE vom Verb?",
    t5_qa: "[RO] ver-", t5_qb: "[RO] auf-", t5_qc: "[RO] mit-", t5_qd: "[RO] ab-",

    // T6: Sätze bauen im Futur
    t6_title: "[RO] Futur-Satzbau",
    t6_text: "[RO] Baue einen Satz über deine Pläne. Denk dran: 'werden' auf Platz 2, das andere Verb ganz nach hinten!",
    t6_b1: "[RO] werden ➔ Platz 2.",
    t6_b2: "[RO] Grundform ➔ Ende.",
    t6_inst: "[RO] Bringe die Wörter in die richtige Reihenfolge!",
    t6_h1: "[RO] Beginne mit 'Ich werde'.",
    t6_h2: "[RO] Ich werde später Fußball spielen.",
    t6_o1: "[RO] Ich", t6_o2: "[RO] werde", t6_o3: "[RO] später", t6_o4: "[RO] Fußball spielen.",
    // Quiz: MANUAL
    t6_q: "[RO] Wo steht 'werden' im Aussagesatz?",
    t6_qa: "[RO] An zweiter Stelle", t6_qb: "[RO] Ganz am Ende", t6_qc: "[RO] Am Anfang", t6_qd: "[RO] Hinter dem Verb",

    // T7: Präfix-Schleuder (Slingshot!)
    t7_title: "[RO] Präfix-Schleuder",
    t7_text: "[RO] Schieße die Vorsätze an das Ende der Sätze! Nur trennbare Verben sind heute unsere Ziele.",
    t7_b1: "[RO] auf-, an-, aus-, mit-.",
    t7_inst: "[RO] Schieße das Präfix ans Satzende!",
    t7_h1: "[RO] Welches kleine Wort passt zum Verb?",
    t7_h2: "[RO] auf-stehen, aus-gehen, mit-spielen.",
    t7_target: "[RO] Satzende 🎯",
    t7_m1: "[RO] auf", t7_m2: "[RO] an", t7_m3: "[RO] mit", t7_m4: "[RO] ver (Falsch)",
    // Quiz: GENERATOR (verben_k3)

    // T8: Modalverben (können, müssen, dürfen)
    t8_title: "[RO] Modalverben",
    t8_text: "[RO] Modalverben sagen, WAS man tun KANN/MUSS/DARF. Sie stehen im Satz, aber das eigentliche Tunwort (Infinitiv) kommt ans Ende. Ich kann schwimmen (nicht: ich kann).",
    t8_b1: "[RO] können, müssen, dürfen, wollen",
    t8_b2: "[RO] + Infinitiv am Ende",
    t8_inst: "[RO] Erkenne das Modalverb!",
    t8_h1: "[RO] Suche nach Wörtern wie können, müssen, dürfen.",
    t8_h2: "[RO] Ich muss heute lernen.",
    t8_w1: "[RO] Ich", t8_w2: "[RO] muss", t8_w3: "[RO] heute", t8_w4: "[RO] Hausaufgaben machen",

    // T9: Reflexive Verben (sich waschen)
    t9_title: "[RO] Reflexive Verben",
    t9_text: "[RO] Reflexive Verben sind Verben, die sich selbst richten: 'Ich wasche MICH', 'Du fragst DICH'. Das Reflexivpronomen (mich, dich, sich) ist wichtig!",
    t9_b1: "[RO] sich + Akkusativ/Dativ",
    t9_b2: "[RO] Beispiele: sich waschen, sich anziehen",
    t9_inst: "[RO] Erkenne das reflexive Verb!",
    t9_h1: "[RO] Suche nach 'sich' oder anderen Reflexivpronomen.",
    t9_h2: "[RO] Der Junge wäscht sich.",
    t9_sent: "[RO] Mein Freund ___ um 7 Uhr.",
    t9_c1: "[RO] wacht sich auf", t9_c2: "[RO] wacht auf", t9_c3: "[RO] wacht aufwach", t9_c4: "[RO] aufwachen sich",

    // T10: Trennbare vs. nicht trennbare - Vertiefung
    t10_title: "[RO] Präfixe unterscheiden",
    t10_text: "[RO] Trennbare Präfixe (auf, an, ab, mit) trennen sich immer. Nicht trennbare (be, ver, ent, zer) NIEMALS. Dies ist super wichtig!",
    t10_b1: "[RO] Trennbar: auf-, an-, ab-, mit-, zu-, aus-",
    t10_b2: "[RO] Nicht trennbar: be-, ver-, ent-, zer-, mis-",
    t10_inst: "[RO] Sortiere trennbare und nicht trennbare!",
    t10_h1: "[RO] Trennbar = Verb splittet. Nicht trennbar = Verb bleibt zusammen.",
    t10_h2: "[RO] aufmachen -> macht auf. Verstehen -> verstehe (nie: stehe ver).",
    t10_l: "[RO] Trennbar", t10_r: "[RO] Nicht trennbar",
    t10_v1: "[RO] aufmachen", t10_v2: "[RO] verstehen", t10_v3: "[RO] ausgehen", t10_v4: "[RO] beobachten",

    // T11: Partizip Perfekt (Vergangenheit)
    t11_title: "[RO] Partizip II (Mittelwort)",
    t11_text: "[RO] Das Partizip II ist für Perfekt und Passiv wichtig! Schwache Verben: -(e)t. Starke Verben: -en. Trennbare Verben: ge-[präfix]-verb-(e)t/en.",
    t11_b1: "[RO] Regelmäßig: ge-[verb]-t (spielen→gespielt)",
    t11_b2: "[RO] Unregelmäßig: ge-[verb]-en (essen→gegessen)",
    t11_inst: "[RO] Erkenne das Partizip II!",
    t11_h1: "[RO] Denk an 'ge' am Anfang und 't' oder 'en' am Ende.",
    t11_h2: "[RO] Ich habe GESPIELT. Ich bin GELAUFEN.",
    t11_q: "[RO] Wie endet das Partizip eines schwachen Verbs wie 'spielen'?",
    t11_qa: "[RO] - gespielt", t11_qb: "[RO] -gespielten", t11_qc: "[RO] -spielend", t11_qd: "[RO] -ge-spielt-",

    // T12: Präteritum-Endungen (war, spielte)
    t12_title: "[RO] Präteritum (Erzählform)",
    t12_text: "[RO] Im Präteritum ändern sich die Verben: schwach=-te/-test, stark= Stammvokal + Endungen. 'Ich spielte, du spieltest, er spielte.'",
    t12_b1: "[RO] Schwach: -te Endung",
    t12_b2: "[RO] Stark: Stammvokal ändert sich",
    t12_inst: "[RO] Wähle die richtige Präteritum-Form!",
    t12_h1: "[RO] Weak (regelmäßig): +te. Strong (unregelmäßig): Vokalwechsel.",
    t12_h2: "[RO] ich spielte, ich aß, ich war",
    t12_sent2: "[RO] Der Hund ___ im Park.",
    t12_cb1: "[RO] spielte", t12_cb2: "[RO] spielt", t12_cb3: "[RO] spielen", t12_cb4: "[RO] spielend",

    // T13: Verb-Kombinationen (haben + sein)
    t13_title: "[RO] Haben oder Sein im Perfekt?",
    t13_text: "[RO] Nicht alle Verben brauchen 'haben' für Perfekt! Bewegungsverben (fahren, gehen, laufen, fliegen) brauchen 'sein': 'Ich bin gelaufen.'",
    t13_b1: "[RO] Sein: Bewegungsverben (fahren, gehen, laufen)",
    t13_b2: "[RO] Haben: andere Verben",
    t13_inst: "[RO] Wähle 'haben' oder 'sein'!",
    t13_h1: "[RO] Bewegung? Dann 'sein'. Sonst 'haben'.",
    t13_h2: "[RO] Ich bin gelaufen. Ich habe gegessen.",
    t13_sent3: "[RO] Anna ___ nach Berlin ___.",
    t13_cb1: "[RO] ist gefahren", t13_cb2: "[RO] hat gefahren", t13_cb3: "[RO] hat fahren", t13_cb4: "[RO] ist fahren",

    // T14: Verb-Kombinationen komplex
    t14_title: "[RO] Komplexe Verb-Phänomene",
    t14_text: "[RO] Einige Verben sind doppelte Agenten: trennbar UND reflexiv (sich anziehen), oder Modalverben + trennbar (aufmachen können).",
    t14_b1: "[RO] Trennbar + Reflexiv",
    t14_b2: "[RO] Modal + Trennbar",
    t14_inst: "[RO] Erkenne die Kombination!",
    t14_h1: "[RO] Mehrere Verbeigenschaften kombinieren.",
    t14_h2: "[RO] Ich ziehe mich an (trennbar + reflexiv).",
    t14_q: "[RO] Was kommt am weitesten hinten im Satz bei 'Ich kann aufmachen'?",
    t14_qa: "[RO] 'aufmachen' (Infinitiv)", t14_qb: "[RO] 'auf' (Präfix)", t14_qc: "[RO] 'machen'", t14_qd: "[RO] 'können'",

    // T15: Du bist ein Verben-Profi!
    t15_title: "[RO] Du bist ein Verben-Profi!",
    t15_text: "[RO] Du kennst Modalverben, reflexive Verben, trennbare und nicht trennbare Verben, Partizip, Präteritum und komplexe Kombinationen. Du meisterst alle Verbformen!",
    t15_b1: "[RO] Alle Verbformen perfekt",
    t15_b2: "[RO] Alle Regeln und Ausnahmen",
    t15_inst: "[RO] Zeige dein Verben-Wissen!",
    t15_h1: "[RO] Denk an alle Verben-Eigenschaften.",
    t15_h2: "[RO] Trennbar? Reflexiv? Modal? Partizip? Präteritum?",
    t15_sent4: "[RO] Morgen ___ ich mich ___ und ___ zur Schule ___.",
    t15_cc1: "[RO] werde anziehen fahren", t15_cc2: "[RO] ziehe mich an fahren", t15_cc3: "[RO] will anziehen fahren", t15_cc4: "[RO] bin angezogen gefahren",
  
  }
};

export const VERB4_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "compound-word", word1: "auf", word2: "machen", result: "aufmachen", color: "#3B82F6" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0],
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "sentence-display", words: ["Das Licht", "geht", "plötzlich", "aus"], highlightIndices: [1, 3], color: "#F59E0B" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4", "t2_w2_5"],
      correctIndices: [3],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#1E40AF", bg: "#DBEAFE" }, { text: "Infinitiv", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["ich", "werde"], ["du", "wirst"]], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "b1", label: "t4_bw1" }, { id: "b2", label: "t4_bw2" }],
      items: [
        { text: "t4_i1", bucketId: "b1" },
        { text: "t4_i2", bucketId: "b2" },
        { text: "t4_i3", bucketId: "b2" },
        { text: "t4_i4", bucketId: "b1" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["an-", "auf-"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["ver-", "be-"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w3_1", "t5_w3_2", "t5_w3_3", "t5_w3_4"],
      correctIndices: [2],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Ich", "werde", "Fußball", "spielen"], highlightIndices: [1, 3], color: "#8B5CF6" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o2", "t6_o4", "t6_o1", "t6_o3"],
      correctOrder: [2, 0, 3, 1],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏹", title: "Präfix-Jäger", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-slingshot",
      question: "t_q",
      targets: [
        { id: "t7_id1", text: "t7_m1", isCorrect: true },
        { id: "t7_id2", text: "t7_m2", isCorrect: true },
        { id: "t7_id3", text: "t7_m3", isCorrect: true },
        { id: "t7_id4", text: "t7_m4", isCorrect: false },
      ],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "können, müssen, dürfen, wollen", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [1],
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "sich waschen, sich anziehen", color: "#10B981", bg: "#D1FAE5" }] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 1,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["Trennbar"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Nicht trennbar"], bg: "#FEE2E2", border: "#EF4444" } },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "t", label: "t10_l" }, { id: "n", label: "t10_r" }],
      items: [
        { text: "t10_v1", bucketId: "t" },
        { text: "t10_v2", bucketId: "n" },
        { text: "t10_v3", bucketId: "t" },
        { text: "t10_v4", bucketId: "n" },
      ],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "verben_k3" },
  },
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "ge-[verb]-(e)t / -en", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_q",
      choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"],
      correctIndex: 0,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "-te, -test (Präteritum)", color: "#EC4899", bg: "#FCE7F3" }] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent2",
      choices: ["t12_cb1", "t12_cb2", "t12_cb3", "t12_cb4"],
      correctIndex: 0,
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "praeteritum" },
  },
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["sein"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["haben"], bg: "#DBEAFE", border: "#3B82F6" } },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent3",
      choices: ["t13_cb1", "t13_cb2", "t13_cb3", "t13_cb4"],
      correctIndex: 0,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "perfekt" },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Komplex", bg: "#F1F5F9" },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_q",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent4",
      choices: ["t15_cc1", "t15_cc2", "t15_cc3", "t15_cc4"],
      correctIndex: 2,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "verben_k3" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Rechtschreibungsinsel
// Thema: das/dass, ä/äu vs. e/eu, Komma bei Aufzählungen, ß/ss, Silbentrennung
// ─────────────────────────────────────────────────────────────────────────────

export const RECHT4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rechtschreib-Olymps",

    // T1: das oder dass? (Der Trick)
    t1_title: "das oder dass?",
    t1_text: "Das ist die wichtigste Regel! Kannst du 'das' durch 'dieses', 'jenes' oder 'welches' ersetzen? Dann schreiben wir es mit einem 's'. Wenn nicht (meist nach einem Komma), schreiben wir 'dass'.",
    t1_b1: "das = dieses, jenes, welches.",
    t1_b2: "dass = Bindewort (nach dem Komma).",
    t1_inst: "Kannst du 'das' ersetzen?",
    t1_h1: "Probiere: 'Ich sehe das Haus' -> 'Ich sehe dieses Haus'. Geht!",
    t1_h2: "Wenn es geht, schreibst du 'das'.",
    t1_sent: "Ich hoffe, ___ du kommst.",
    t1_c1: "dass", t1_c2: "das", t1_c3: "das s", t1_c4: "daß",
    t1_q: "Wann schreiben wir 'das' mit nur einem 's'?",
    t1_qa: "Wenn man 'dieses' sagen kann", t1_qb: "Nach jedem Komma", t1_qc: "Immer am Satzanfang", t1_qd: "Nie",

    // T2: ä oder e? äu oder eu?
    t2_title: "ä oder e? äu oder eu?",
    t2_text: "Such das verwandte Wort! Wenn es ein Wort mit 'a' oder 'au' gibt, schreiben wir 'ä' oder 'äu'. Beispiel: Haus ➔ Häuser, Hand ➔ Hände. Aber: fertig (kein Wort mit a).",
    t2_b1: "a ➔ ä, au ➔ äu.",
    t2_b2: "Kein verwandtes Wort ➔ e / eu.",
    t2_inst: "Welches Wort wird mit 'äu' geschrieben?",
    t2_h1: "Suche ein Wort, das von einem Wort mit 'au' kommt.",
    t2_h2: "Häuser kommt von Haus.",
    t2_w2_1: "Häuser", t2_w2_2: "Eulen", t2_w2_3: "Keulen", t2_w2_4: "Beulen",
    t2_q: "Warum schreiben wir 'Hände' mit 'ä'?",
    t2_qa: "Weil es von 'Hand' kommt", t2_qb: "Weil es schöner aussieht", t2_qc: "Weil es kurz ist", t2_qd: "Weil alle Nomen ä haben",

    // T3: ß oder ss?
    t3_title: "ß oder ss?",
    t3_text: "Hör auf den Vokal! Nach einem KURZEN Vokal schreiben wir 'ss' (Fluss, essen). Nach einem LANGEN Vokal vagy Zwielaut (au, ei, ie) schreiben wir 'ß' (Fuß, beißen).",
    t3_b1: "Kurz ➔ ss.",
    t3_b2: "Lang / Zwielaut ➔ ß.",
    t3_inst: "Welches Wort braucht ein 'ß'?",
    t3_h1: "Hör genau hin: Ist der Vokal lang?",
    t3_h2: "Bei 'Fuß' ist das u lang, also ß.",
    t3_w3_1: "Fuß", t3_w3_2: "Fluss", t3_w3_3: "Essen", t3_w3_4: "Kuss",
    t3_q: "Was schreiben wir nach einem Zwielaut wie 'ei' oder 'au'?",
    t3_qa: "Immer ß", t3_qb: "Immer ss", t3_qc: "Einfach nur s", t3_qd: "Gar nichts",

    // T4: Silbentrennung
    t4_title: "Wörter trennen",
    t4_text: "Wenn am Ende der Zeile kein Platz mehr ist, trennen wir Wörter in Silben. Merke: 'Trenn nie st, denn es tut ihm weh!' (Aber ck wird jetzt auch nicht mehr getrennt).",
    t4_b1: "Trennen nach Sprechsilben.",
    t4_b2: "ck, ch, sch bleiben zusammen.",
    t4_inst: "Wo ist die richtige Trennung?",
    t4_h1: "Klatsche das Wort: Was-ser.",
    t4_h2: "Wähle 'Was-ser'.",
    t4_w4_1: "Was-ser", t4_w4_2: "Wass-er", t4_w4_3: "Wa-sser", t4_w4_4: "W-asser",
    t4_q: "Darf man 'st' bei der Silbentrennung trennen?",
    t4_qa: "Nein, niemals", t4_qb: "Ja, immer", t4_qc: "Nur bei Nomen", t4_qd: "Nur am Satzende",

    // T5: Komma-Profi
    t5_title: "Komma-Check",
    t5_text: "In der 4. Klasse setzen wir Kommas bei Aufzählungen UND zwischen Haupt- und Nebensätzen (vor Wörtern wie weil, dass, wenn).",
    t5_b1: "Aufzählungen (A, B und C).",
    t5_b2: "Satzgefüge (HS, NS).",
    t5_inst: "Wo fehlt das Komma?",
    t5_h1: "Suche das Bindewort 'weil'. Davor muss ein Komma stehen.",
    t5_h2: "Ich lache, weil es lustig ist.",
    t5_w5_1: "Ich lache", t5_w5_2: "weil es", t5_w5_3: "lustig ist", t5_w5_4: ".",
    t5_q: "Welches Wort braucht meistens ein Komma davor?",
    t5_qa: "weil", t5_qb: "und", t5_qc: "oder", t5_qd: "ein",

    // T6: Das/Dass Gap-Fill
    t6_title: "Das/Dass-Meister",
    t6_text: "Übung macht den Meister! Kannst du in diesem Satz das richtige 'das' vagy 'dass' einsetzen?",
    t6_b1: "Check: Dieses, jenes, welches?",
    t6_inst: "Wähle das richtige Wort!",
    t6_h1: "Ich weiß ... (Bindewort) ... das Auto (Artikel) schnell ist.",
    t6_h2: "dass (Bindewort) / das (Artikel).",
    t6_sent_d: "Ich weiß, ___ ___ Auto rot ist.",
    t6_cd1: "dass / das", t6_cd2: "das / dass", t6_cd3: "dass / dass", t6_cd4: "das / das",
    t6_q: "Welches Wort im Satz 'Ich sehe das Kind' kann man durch 'welches' ersetzen?",
    t6_qa: "das", t6_qb: "sehe", t6_qc: "Ich", t6_qd: "Kind",

    // T7: Rechtschreib-Stapler (Physics!)
    t7_title: "Fehler-Fresser",
    t7_text: "Staple nur die Wörter, die RICHTIG geschrieben sind. Achte auf alle Regeln!",
    t7_b1: "Check: ss/ß, ä/e, das/dass.",
    t7_inst: "Baue den Turm aus richtigen Wörtern!",
    t7_h1: "Hände (von Hand) ist richtig. Fluss (kurz) ist richtig.",
    t7_h2: "Hände, Fluss, dass, Fußball.",
    t7_target: "Richtig-Stapel ✅",
    t7_s1: "Hände", t7_s2: "Fluss", t7_s3: "Fußball", t7_s4: "Hende (Falsch)",

    // T8: Komma bei Aufzählungen
    t8_title: "Kommaregeln (Aufzählungen)",
    t8_text: "Bei Aufzählungen kommt ein Komma ZWISCHEN die Wörter (aber nicht vor 'und'!)! Die Katze, der Hund und der Hamster.",
    t8_b1: "Komma zwischen Aufzählungen",
    t8_b2: "Kein Komma vor 'und'",
    t8_inst: "Setze die Kommas richtig!",
    t8_h1: "Schreibe: Der Hund, die Katze und der Vogel.",
    t8_h2: "Komma vor 'und' nur in Fachstil.",
    t8_sent: "Ich mag Äpfel___ Birnen___ Orangen",
    t8_c1: ",  , und", t8_c2: "und und", t8_c3: ", , ,", t8_c4: "  und",

    // T9: Komma in Sätzen (Nebensätze)
    t9_title: "Komma vor Nebensätzen",
    t9_text: "VOR jedem Nebensatz (mit weil, dass, wenn, obwohl) kommt immer ein Komma! Ich lerne, WEIL ich eine gute Note möchte.",
    t9_b1: "Hauptsatz, + Nebensatz.",
    t9_b2: "Das Komma ist PFLICHT!",
    t9_inst: "Setze das Komma!",
    t9_h1: "Suche nach der Konjunktion (weil, dass, wenn).",
    t9_h2: "Danach kommt IMMER ein Komma.",
    t9_sent2: "Ich freue mich___ dass du kommst",
    t9_c1: ",", t9_c2: ";", t9_c3: ":", t9_c4: "!",

    // T10: Apostroph (Auslassungszeichen)
    t10_title: "Der Apostroph (')",
    t10_text: "Der Apostroph zeigt, dass ein Laut oder Buchstabe fehlt: 'n' Apfel (= ein Apfel), M'dchen (= Mädchen - nicht mehr verwendet!).",
    t10_b1: "Zeigt fehlende Buchstaben",
    t10_b2: "Moderne Regeln: selten verwenden",
    t10_inst: "Erkenne die Auslassung!",
    t10_h1: "Wo fehlt ein Laut?",
    t10_h2: "'n Apfel = fehlender Vokal",
    t10_q: "Wofür steht der Apostroph?",
    t10_qa: "Fehlende Buchstaben", t10_qb: "Mehrheit", t10_qc: "Besitz", t10_qd: "Gedanken",

    // T11: Groß- und Kleinschreibung
    t11_title: "Großschreibung (Wann groß?)",
    t11_text: "GROSSBUCHSTABE: Satzanfang, Nomen, Eigennamen (Anna, München), Höflichkeitspronomen (Sie, Ihnen).",
    t11_b1: "Satzanfang ➔ Groß",
    t11_b2: "Nomen ➔ Groß",
    t11_inst: "Erkenne das Nomen (muss groß sein)!",
    t11_h1: "Nomen sind Dinge, Orte, Personen.",
    t11_h2: "Der Hund, Die Schule, Anna.",
    t11_w1: "Anna", t11_w2: "geht", t11_w3: "zur", t11_w4: "schule",

    // T12: Doppelvokale vs. ß
    t12_title: "aa, ee, oo, uu vs. ä, ö vs. ü",
    t12_text: "Lange Vokale schreibt man manchmal doppelt (aa, ee, oo, uu) oder mit 'h' (ah, eh, oh, uh) oder 'ß'. Beispiel: Saat, See, Boot.",
    t12_b1: "aa, ee, oo = lang gesprochen",
    t12_b2: "uss, att = kurz gesprochen",
    t12_inst: "Wähle die richtige Schreibung!",
    t12_h1: "Sprich laut: lang (ee) oder kurz (e)?",
    t12_h2: "Die See (lang), das Bett (kurz)",
    t12_sent3: "Der S___ ist schön.",
    t12_cb1: "ee (See)", t12_cb2: "e", t12_cb3: "eh", t12_cb4: "ée",

    // T13: Wortarten und Rechtschreibung
    t13_title: "Endungen von Wortarten",
    t13_text: "Verschiedene Wortarten haben unterschiedliche Endungen: Nomen (-heit, -keit), Verben (-ieren, -ern), Adjektive (-lich, -ig).",
    t13_b1: "Nomen: -heit, -keit, -ung",
    t13_b2: "Verben: -ieren, -ern",
    t13_inst: "Erkenne die Endung!",
    t13_h1: "Woran erkennst du ein Nomen? An der Endung!",
    t13_h2: "Schönheit, Möglichkeit, Freundschaft.",
    t13_sent4: "Die ___ ist wichtig.",
    t13_cb1: "Freundschaft", t13_cb2: "Freunden", t13_cb3: "freundlich", t13_cb4: "freunden",

    // T14: Verben mit Doppelkonsonanten
    t14_title: "Doppelkonsonanten",
    t14_text: "Manche Verben verdoppeln den Konsonant: schwimmen (schwimmst), rennen (rennst). Dies folgt der Kurzvokallregel.",
    t14_b1: "Kurzer Vokal + Doppelkonsonant",
    t14_b2: "Langer Vokal + einfacher Konsonant",
    t14_inst: "Wähle die richtige Schreibung!",
    t14_h1: "Kurze Vokale = Doppelkonsonant.",
    t14_h2: "schwimmen (kurz: i), fahren (lang: a)",
    t14_q: "Was ist die Regel bei kurzem Vokal?",
    t14_qa: "Doppelkonsonant", t14_qb: "Einfacher Konsonant", t14_qc: "Keine Regel", t14_qd: "Großbuchstabe",

    // T15: Du bist ein Rechtschreib-Profi!
    t15_title: "Du bist ein Rechtschreib-Profi!",
    t15_text: "Du kennst das/dass, ä/äu vs. e/eu, Kommaregeln, ß/ss, Apostroph, Großschreibung, Doppelvokale und -konsonanten. Deine Rechtschreibung ist perfekt!",
    t15_b1: "Alle Rechtschreibregeln perfekt",
    t15_b2: "Alle Sonderfälle gelernt",
    t15_inst: "Zeige dein Rechtschreib-Wissen!",
    t15_h1: "Denk an alle Regeln.",
    t15_h2: "das/dass, Komma, Größe, Doppel...",
    t15_sent5: "Ich bin mir ___, ___ die Antwort richtig ist.",
    t15_cc1: "sicher, dass", t15_cc2: "sicherer, das", t15_cc3: "sicher, das", t15_cc4: "sicherr, dass",
  },
  en: {

    explorer_title: "[EN] Rechtschreib-Olymps",

    // T1: das oder dass? (Der Trick)
    t1_title: "[EN] das oder dass?",
    t1_text: "[EN] Das ist die wichtigste Regel! Kannst du 'das' durch 'dieses', 'jenes' oder 'welches' ersetzen? Dann schreiben wir es mit einem 's'. Wenn nicht (meist nach einem Komma), schreiben wir 'dass'.",
    t1_b1: "[EN] das = dieses, jenes, welches.",
    t1_b2: "[EN] dass = Bindewort (nach dem Komma).",
    t1_inst: "[EN] Kannst du 'das' ersetzen?",
    t1_h1: "[EN] Probiere: 'Ich sehe das Haus' -> 'Ich sehe dieses Haus'. Geht!",
    t1_h2: "[EN] Wenn es geht, schreibst du 'das'.",
    t1_sent: "[EN] Ich hoffe, ___ du kommst.",
    t1_c1: "[EN] dass", t1_c2: "[EN] das", t1_c3: "[EN] das s", t1_c4: "[EN] daß",
    t1_q: "[EN] Wann schreiben wir 'das' mit nur einem 's'?",
    t1_qa: "[EN] Wenn man 'dieses' sagen kann", t1_qb: "[EN] Nach jedem Komma", t1_qc: "[EN] Immer am Satzanfang", t1_qd: "[EN] Nie",

    // T2: ä oder e? äu oder eu?
    t2_title: "[EN] ä oder e? äu oder eu?",
    t2_text: "[EN] Such das verwandte Wort! Wenn es ein Wort mit 'a' oder 'au' gibt, schreiben wir 'ä' oder 'äu'. Beispiel: Haus ➔ Häuser, Hand ➔ Hände. Aber: fertig (kein Wort mit a).",
    t2_b1: "[EN] a ➔ ä, au ➔ äu.",
    t2_b2: "[EN] Kein verwandtes Wort ➔ e / eu.",
    t2_inst: "[EN] Welches Wort wird mit 'äu' geschrieben?",
    t2_h1: "[EN] Suche ein Wort, das von einem Wort mit 'au' kommt.",
    t2_h2: "[EN] Häuser kommt von Haus.",
    t2_w2_1: "[EN] Häuser", t2_w2_2: "[EN] Eulen", t2_w2_3: "[EN] Keulen", t2_w2_4: "[EN] Beulen",
    t2_q: "[EN] Warum schreiben wir 'Hände' mit 'ä'?",
    t2_qa: "[EN] Weil es von 'Hand' kommt", t2_qb: "[EN] Weil es schöner aussieht", t2_qc: "[EN] Weil es kurz ist", t2_qd: "[EN] Weil alle Nomen ä haben",

    // T3: ß oder ss?
    t3_title: "[EN] ß oder ss?",
    t3_text: "[EN] Hör auf den Vokal! Nach einem KURZEN Vokal schreiben wir 'ss' (Fluss, essen). Nach einem LANGEN Vokal vagy Zwielaut (au, ei, ie) schreiben wir 'ß' (Fuß, beißen).",
    t3_b1: "[EN] Kurz ➔ ss.",
    t3_b2: "[EN] Lang / Zwielaut ➔ ß.",
    t3_inst: "[EN] Welches Wort braucht ein 'ß'?",
    t3_h1: "[EN] Hör genau hin: Ist der Vokal lang?",
    t3_h2: "[EN] Bei 'Fuß' ist das u lang, also ß.",
    t3_w3_1: "[EN] Fuß", t3_w3_2: "[EN] Fluss", t3_w3_3: "[EN] Essen", t3_w3_4: "[EN] Kuss",
    t3_q: "[EN] Was schreiben wir nach einem Zwielaut wie 'ei' oder 'au'?",
    t3_qa: "[EN] Immer ß", t3_qb: "[EN] Immer ss", t3_qc: "[EN] Einfach nur s", t3_qd: "[EN] Gar nichts",

    // T4: Silbentrennung
    t4_title: "[EN] Wörter trennen",
    t4_text: "[EN] Wenn am Ende der Zeile kein Platz mehr ist, trennen wir Wörter in Silben. Merke: 'Trenn nie st, denn es tut ihm weh!' (Aber ck wird jetzt auch nicht mehr getrennt).",
    t4_b1: "[EN] Trennen nach Sprechsilben.",
    t4_b2: "[EN] ck, ch, sch bleiben zusammen.",
    t4_inst: "[EN] Wo ist die richtige Trennung?",
    t4_h1: "[EN] Klatsche das Wort: Was-ser.",
    t4_h2: "[EN] Wähle 'Was-ser'.",
    t4_w4_1: "[EN] Was-ser", t4_w4_2: "[EN] Wass-er", t4_w4_3: "[EN] Wa-sser", t4_w4_4: "[EN] W-asser",
    t4_q: "[EN] Darf man 'st' bei der Silbentrennung trennen?",
    t4_qa: "[EN] Nein, niemals", t4_qb: "[EN] Ja, immer", t4_qc: "[EN] Nur bei Nomen", t4_qd: "[EN] Nur am Satzende",

    // T5: Komma-Profi
    t5_title: "[EN] Komma-Check",
    t5_text: "[EN] In der 4. Klasse setzen wir Kommas bei Aufzählungen UND zwischen Haupt- und Nebensätzen (vor Wörtern wie weil, dass, wenn).",
    t5_b1: "[EN] Aufzählungen (A, B und C).",
    t5_b2: "[EN] Satzgefüge (HS, NS).",
    t5_inst: "[EN] Wo fehlt das Komma?",
    t5_h1: "[EN] Suche das Bindewort 'weil'. Davor muss ein Komma stehen.",
    t5_h2: "[EN] Ich lache, weil es lustig ist.",
    t5_w5_1: "[EN] Ich lache", t5_w5_2: "[EN] weil es", t5_w5_3: "[EN] lustig ist", t5_w5_4: "[EN] .",
    t5_q: "[EN] Welches Wort braucht meistens ein Komma davor?",
    t5_qa: "[EN] weil", t5_qb: "[EN] und", t5_qc: "[EN] oder", t5_qd: "[EN] ein",

    // T6: Das/Dass Gap-Fill
    t6_title: "[EN] Das/Dass-Meister",
    t6_text: "[EN] Übung macht den Meister! Kannst du in diesem Satz das richtige 'das' vagy 'dass' einsetzen?",
    t6_b1: "[EN] Check: Dieses, jenes, welches?",
    t6_inst: "[EN] Wähle das richtige Wort!",
    t6_h1: "[EN] Ich weiß ... (Bindewort) ... das Auto (Artikel) schnell ist.",
    t6_h2: "[EN] dass (Bindewort) / das (Artikel).",
    t6_sent_d: "[EN] Ich weiß, ___ ___ Auto rot ist.",
    t6_cd1: "[EN] dass / das", t6_cd2: "[EN] das / dass", t6_cd3: "[EN] dass / dass", t6_cd4: "[EN] das / das",
    t6_q: "[EN] Welches Wort im Satz 'Ich sehe das Kind' kann man durch 'welches' ersetzen?",
    t6_qa: "[EN] das", t6_qb: "[EN] sehe", t6_qc: "[EN] Ich", t6_qd: "[EN] Kind",

    // T7: Rechtschreib-Stapler (Physics!)
    t7_title: "[EN] Fehler-Fresser",
    t7_text: "[EN] Staple nur die Wörter, die RICHTIG geschrieben sind. Achte auf alle Regeln!",
    t7_b1: "[EN] Check: ss/ß, ä/e, das/dass.",
    t7_inst: "[EN] Baue den Turm aus richtigen Wörtern!",
    t7_h1: "[EN] Hände (von Hand) ist richtig. Fluss (kurz) ist richtig.",
    t7_h2: "[EN] Hände, Fluss, dass, Fußball.",
    t7_target: "[EN] Richtig-Stapel ✅",
    t7_s1: "[EN] Hände", t7_s2: "[EN] Fluss", t7_s3: "[EN] Fußball", t7_s4: "[EN] Hende (Falsch)",

    // T8: Komma bei Aufzählungen
    t8_title: "[EN] Kommaregeln (Aufzählungen)",
    t8_text: "[EN] Bei Aufzählungen kommt ein Komma ZWISCHEN die Wörter (aber nicht vor 'und'!)! Die Katze, der Hund und der Hamster.",
    t8_b1: "[EN] Komma zwischen Aufzählungen",
    t8_b2: "[EN] Kein Komma vor 'und'",
    t8_inst: "[EN] Setze die Kommas richtig!",
    t8_h1: "[EN] Schreibe: Der Hund, die Katze und der Vogel.",
    t8_h2: "[EN] Komma vor 'und' nur in Fachstil.",
    t8_sent: "[EN] Ich mag Äpfel___ Birnen___ Orangen",
    t8_c1: "[EN] ,  , und", t8_c2: "[EN] und und", t8_c3: "[EN] , , ,", t8_c4: "[EN]   und",

    // T9: Komma in Sätzen (Nebensätze)
    t9_title: "[EN] Komma vor Nebensätzen",
    t9_text: "[EN] VOR jedem Nebensatz (mit weil, dass, wenn, obwohl) kommt immer ein Komma! Ich lerne, WEIL ich eine gute Note möchte.",
    t9_b1: "[EN] Hauptsatz, + Nebensatz.",
    t9_b2: "[EN] Das Komma ist PFLICHT!",
    t9_inst: "[EN] Setze das Komma!",
    t9_h1: "[EN] Suche nach der Konjunktion (weil, dass, wenn).",
    t9_h2: "[EN] Danach kommt IMMER ein Komma.",
    t9_sent2: "[EN] Ich freue mich___ dass du kommst",
    t9_c1: "[EN] ,", t9_c2: "[EN] ;", t9_c3: "[EN] :", t9_c4: "[EN] !",

    // T10: Apostroph (Auslassungszeichen)
    t10_title: "[EN] Der Apostroph (')",
    t10_text: "[EN] Der Apostroph zeigt, dass ein Laut oder Buchstabe fehlt: 'n' Apfel (= ein Apfel), M'dchen (= Mädchen - nicht mehr verwendet!).",
    t10_b1: "[EN] Zeigt fehlende Buchstaben",
    t10_b2: "[EN] Moderne Regeln: selten verwenden",
    t10_inst: "[EN] Erkenne die Auslassung!",
    t10_h1: "[EN] Wo fehlt ein Laut?",
    t10_h2: "[EN] 'n Apfel = fehlender Vokal",
    t10_q: "[EN] Wofür steht der Apostroph?",
    t10_qa: "[EN] Fehlende Buchstaben", t10_qb: "[EN] Mehrheit", t10_qc: "[EN] Besitz", t10_qd: "[EN] Gedanken",

    // T11: Groß- und Kleinschreibung
    t11_title: "[EN] Großschreibung (Wann groß?)",
    t11_text: "[EN] GROSSBUCHSTABE: Satzanfang, Nomen, Eigennamen (Anna, München), Höflichkeitspronomen (Sie, Ihnen).",
    t11_b1: "[EN] Satzanfang ➔ Groß",
    t11_b2: "[EN] Nomen ➔ Groß",
    t11_inst: "[EN] Erkenne das Nomen (muss groß sein)!",
    t11_h1: "[EN] Nomen sind Dinge, Orte, Personen.",
    t11_h2: "[EN] Der Hund, Die Schule, Anna.",
    t11_w1: "[EN] Anna", t11_w2: "[EN] geht", t11_w3: "[EN] zur", t11_w4: "[EN] schule",

    // T12: Doppelvokale vs. ß
    t12_title: "[EN] aa, ee, oo, uu vs. ä, ö vs. ü",
    t12_text: "[EN] Lange Vokale schreibt man manchmal doppelt (aa, ee, oo, uu) oder mit 'h' (ah, eh, oh, uh) oder 'ß'. Beispiel: Saat, See, Boot.",
    t12_b1: "[EN] aa, ee, oo = lang gesprochen",
    t12_b2: "[EN] uss, att = kurz gesprochen",
    t12_inst: "[EN] Wähle die richtige Schreibung!",
    t12_h1: "[EN] Sprich laut: lang (ee) oder kurz (e)?",
    t12_h2: "[EN] Die See (lang), das Bett (kurz)",
    t12_sent3: "[EN] Der S___ ist schön.",
    t12_cb1: "[EN] ee (See)", t12_cb2: "[EN] e", t12_cb3: "[EN] eh", t12_cb4: "[EN] ée",

    // T13: Wortarten und Rechtschreibung
    t13_title: "[EN] Endungen von Wortarten",
    t13_text: "[EN] Verschiedene Wortarten haben unterschiedliche Endungen: Nomen (-heit, -keit), Verben (-ieren, -ern), Adjektive (-lich, -ig).",
    t13_b1: "[EN] Nomen: -heit, -keit, -ung",
    t13_b2: "[EN] Verben: -ieren, -ern",
    t13_inst: "[EN] Erkenne die Endung!",
    t13_h1: "[EN] Woran erkennst du ein Nomen? An der Endung!",
    t13_h2: "[EN] Schönheit, Möglichkeit, Freundschaft.",
    t13_sent4: "[EN] Die ___ ist wichtig.",
    t13_cb1: "[EN] Freundschaft", t13_cb2: "[EN] Freunden", t13_cb3: "[EN] freundlich", t13_cb4: "[EN] freunden",

    // T14: Verben mit Doppelkonsonanten
    t14_title: "[EN] Doppelkonsonanten",
    t14_text: "[EN] Manche Verben verdoppeln den Konsonant: schwimmen (schwimmst), rennen (rennst). Dies folgt der Kurzvokallregel.",
    t14_b1: "[EN] Kurzer Vokal + Doppelkonsonant",
    t14_b2: "[EN] Langer Vokal + einfacher Konsonant",
    t14_inst: "[EN] Wähle die richtige Schreibung!",
    t14_h1: "[EN] Kurze Vokale = Doppelkonsonant.",
    t14_h2: "[EN] schwimmen (kurz: i), fahren (lang: a)",
    t14_q: "[EN] Was ist die Regel bei kurzem Vokal?",
    t14_qa: "[EN] Doppelkonsonant", t14_qb: "[EN] Einfacher Konsonant", t14_qc: "[EN] Keine Regel", t14_qd: "[EN] Großbuchstabe",

    // T15: Du bist ein Rechtschreib-Profi!
    t15_title: "[EN] Du bist ein Rechtschreib-Profi!",
    t15_text: "[EN] Du kennst das/dass, ä/äu vs. e/eu, Kommaregeln, ß/ss, Apostroph, Großschreibung, Doppelvokale und -konsonanten. Deine Rechtschreibung ist perfekt!",
    t15_b1: "[EN] Alle Rechtschreibregeln perfekt",
    t15_b2: "[EN] Alle Sonderfälle gelernt",
    t15_inst: "[EN] Zeige dein Rechtschreib-Wissen!",
    t15_h1: "[EN] Denk an alle Regeln.",
    t15_h2: "[EN] das/dass, Komma, Größe, Doppel...",
    t15_sent5: "[EN] Ich bin mir ___, ___ die Antwort richtig ist.",
    t15_cc1: "[EN] sicher, dass", t15_cc2: "[EN] sicherer, das", t15_cc3: "[EN] sicher, das", t15_cc4: "[EN] sicherr, dass",
  
  },
  hu: {

    explorer_title: "[HU] Rechtschreib-Olymps",

    // T1: das oder dass? (Der Trick)
    t1_title: "[HU] das oder dass?",
    t1_text: "[HU] Das ist die wichtigste Regel! Kannst du 'das' durch 'dieses', 'jenes' oder 'welches' ersetzen? Dann schreiben wir es mit einem 's'. Wenn nicht (meist nach einem Komma), schreiben wir 'dass'.",
    t1_b1: "[HU] das = dieses, jenes, welches.",
    t1_b2: "[HU] dass = Bindewort (nach dem Komma).",
    t1_inst: "[HU] Kannst du 'das' ersetzen?",
    t1_h1: "[HU] Probiere: 'Ich sehe das Haus' -> 'Ich sehe dieses Haus'. Geht!",
    t1_h2: "[HU] Wenn es geht, schreibst du 'das'.",
    t1_sent: "[HU] Ich hoffe, ___ du kommst.",
    t1_c1: "[HU] dass", t1_c2: "[HU] das", t1_c3: "[HU] das s", t1_c4: "[HU] daß",
    t1_q: "[HU] Wann schreiben wir 'das' mit nur einem 's'?",
    t1_qa: "[HU] Wenn man 'dieses' sagen kann", t1_qb: "[HU] Nach jedem Komma", t1_qc: "[HU] Immer am Satzanfang", t1_qd: "[HU] Nie",

    // T2: ä oder e? äu oder eu?
    t2_title: "[HU] ä oder e? äu oder eu?",
    t2_text: "[HU] Such das verwandte Wort! Wenn es ein Wort mit 'a' oder 'au' gibt, schreiben wir 'ä' oder 'äu'. Beispiel: Haus ➔ Häuser, Hand ➔ Hände. Aber: fertig (kein Wort mit a).",
    t2_b1: "[HU] a ➔ ä, au ➔ äu.",
    t2_b2: "[HU] Kein verwandtes Wort ➔ e / eu.",
    t2_inst: "[HU] Welches Wort wird mit 'äu' geschrieben?",
    t2_h1: "[HU] Suche ein Wort, das von einem Wort mit 'au' kommt.",
    t2_h2: "[HU] Häuser kommt von Haus.",
    t2_w2_1: "[HU] Häuser", t2_w2_2: "[HU] Eulen", t2_w2_3: "[HU] Keulen", t2_w2_4: "[HU] Beulen",
    t2_q: "[HU] Warum schreiben wir 'Hände' mit 'ä'?",
    t2_qa: "[HU] Weil es von 'Hand' kommt", t2_qb: "[HU] Weil es schöner aussieht", t2_qc: "[HU] Weil es kurz ist", t2_qd: "[HU] Weil alle Nomen ä haben",

    // T3: ß oder ss?
    t3_title: "[HU] ß oder ss?",
    t3_text: "[HU] Hör auf den Vokal! Nach einem KURZEN Vokal schreiben wir 'ss' (Fluss, essen). Nach einem LANGEN Vokal vagy Zwielaut (au, ei, ie) schreiben wir 'ß' (Fuß, beißen).",
    t3_b1: "[HU] Kurz ➔ ss.",
    t3_b2: "[HU] Lang / Zwielaut ➔ ß.",
    t3_inst: "[HU] Welches Wort braucht ein 'ß'?",
    t3_h1: "[HU] Hör genau hin: Ist der Vokal lang?",
    t3_h2: "[HU] Bei 'Fuß' ist das u lang, also ß.",
    t3_w3_1: "[HU] Fuß", t3_w3_2: "[HU] Fluss", t3_w3_3: "[HU] Essen", t3_w3_4: "[HU] Kuss",
    t3_q: "[HU] Was schreiben wir nach einem Zwielaut wie 'ei' oder 'au'?",
    t3_qa: "[HU] Immer ß", t3_qb: "[HU] Immer ss", t3_qc: "[HU] Einfach nur s", t3_qd: "[HU] Gar nichts",

    // T4: Silbentrennung
    t4_title: "[HU] Wörter trennen",
    t4_text: "[HU] Wenn am Ende der Zeile kein Platz mehr ist, trennen wir Wörter in Silben. Merke: 'Trenn nie st, denn es tut ihm weh!' (Aber ck wird jetzt auch nicht mehr getrennt).",
    t4_b1: "[HU] Trennen nach Sprechsilben.",
    t4_b2: "[HU] ck, ch, sch bleiben zusammen.",
    t4_inst: "[HU] Wo ist die richtige Trennung?",
    t4_h1: "[HU] Klatsche das Wort: Was-ser.",
    t4_h2: "[HU] Wähle 'Was-ser'.",
    t4_w4_1: "[HU] Was-ser", t4_w4_2: "[HU] Wass-er", t4_w4_3: "[HU] Wa-sser", t4_w4_4: "[HU] W-asser",
    t4_q: "[HU] Darf man 'st' bei der Silbentrennung trennen?",
    t4_qa: "[HU] Nein, niemals", t4_qb: "[HU] Ja, immer", t4_qc: "[HU] Nur bei Nomen", t4_qd: "[HU] Nur am Satzende",

    // T5: Komma-Profi
    t5_title: "[HU] Komma-Check",
    t5_text: "[HU] In der 4. Klasse setzen wir Kommas bei Aufzählungen UND zwischen Haupt- und Nebensätzen (vor Wörtern wie weil, dass, wenn).",
    t5_b1: "[HU] Aufzählungen (A, B und C).",
    t5_b2: "[HU] Satzgefüge (HS, NS).",
    t5_inst: "[HU] Wo fehlt das Komma?",
    t5_h1: "[HU] Suche das Bindewort 'weil'. Davor muss ein Komma stehen.",
    t5_h2: "[HU] Ich lache, weil es lustig ist.",
    t5_w5_1: "[HU] Ich lache", t5_w5_2: "[HU] weil es", t5_w5_3: "[HU] lustig ist", t5_w5_4: "[HU] .",
    t5_q: "[HU] Welches Wort braucht meistens ein Komma davor?",
    t5_qa: "[HU] weil", t5_qb: "[HU] und", t5_qc: "[HU] oder", t5_qd: "[HU] ein",

    // T6: Das/Dass Gap-Fill
    t6_title: "[HU] Das/Dass-Meister",
    t6_text: "[HU] Übung macht den Meister! Kannst du in diesem Satz das richtige 'das' vagy 'dass' einsetzen?",
    t6_b1: "[HU] Check: Dieses, jenes, welches?",
    t6_inst: "[HU] Wähle das richtige Wort!",
    t6_h1: "[HU] Ich weiß ... (Bindewort) ... das Auto (Artikel) schnell ist.",
    t6_h2: "[HU] dass (Bindewort) / das (Artikel).",
    t6_sent_d: "[HU] Ich weiß, ___ ___ Auto rot ist.",
    t6_cd1: "[HU] dass / das", t6_cd2: "[HU] das / dass", t6_cd3: "[HU] dass / dass", t6_cd4: "[HU] das / das",
    t6_q: "[HU] Welches Wort im Satz 'Ich sehe das Kind' kann man durch 'welches' ersetzen?",
    t6_qa: "[HU] das", t6_qb: "[HU] sehe", t6_qc: "[HU] Ich", t6_qd: "[HU] Kind",

    // T7: Rechtschreib-Stapler (Physics!)
    t7_title: "[HU] Fehler-Fresser",
    t7_text: "[HU] Staple nur die Wörter, die RICHTIG geschrieben sind. Achte auf alle Regeln!",
    t7_b1: "[HU] Check: ss/ß, ä/e, das/dass.",
    t7_inst: "[HU] Baue den Turm aus richtigen Wörtern!",
    t7_h1: "[HU] Hände (von Hand) ist richtig. Fluss (kurz) ist richtig.",
    t7_h2: "[HU] Hände, Fluss, dass, Fußball.",
    t7_target: "[HU] Richtig-Stapel ✅",
    t7_s1: "[HU] Hände", t7_s2: "[HU] Fluss", t7_s3: "[HU] Fußball", t7_s4: "[HU] Hende (Falsch)",

    // T8: Komma bei Aufzählungen
    t8_title: "[HU] Kommaregeln (Aufzählungen)",
    t8_text: "[HU] Bei Aufzählungen kommt ein Komma ZWISCHEN die Wörter (aber nicht vor 'und'!)! Die Katze, der Hund und der Hamster.",
    t8_b1: "[HU] Komma zwischen Aufzählungen",
    t8_b2: "[HU] Kein Komma vor 'und'",
    t8_inst: "[HU] Setze die Kommas richtig!",
    t8_h1: "[HU] Schreibe: Der Hund, die Katze und der Vogel.",
    t8_h2: "[HU] Komma vor 'und' nur in Fachstil.",
    t8_sent: "[HU] Ich mag Äpfel___ Birnen___ Orangen",
    t8_c1: "[HU] ,  , und", t8_c2: "[HU] und und", t8_c3: "[HU] , , ,", t8_c4: "[HU]   und",

    // T9: Komma in Sätzen (Nebensätze)
    t9_title: "[HU] Komma vor Nebensätzen",
    t9_text: "[HU] VOR jedem Nebensatz (mit weil, dass, wenn, obwohl) kommt immer ein Komma! Ich lerne, WEIL ich eine gute Note möchte.",
    t9_b1: "[HU] Hauptsatz, + Nebensatz.",
    t9_b2: "[HU] Das Komma ist PFLICHT!",
    t9_inst: "[HU] Setze das Komma!",
    t9_h1: "[HU] Suche nach der Konjunktion (weil, dass, wenn).",
    t9_h2: "[HU] Danach kommt IMMER ein Komma.",
    t9_sent2: "[HU] Ich freue mich___ dass du kommst",
    t9_c1: "[HU] ,", t9_c2: "[HU] ;", t9_c3: "[HU] :", t9_c4: "[HU] !",

    // T10: Apostroph (Auslassungszeichen)
    t10_title: "[HU] Der Apostroph (')",
    t10_text: "[HU] Der Apostroph zeigt, dass ein Laut oder Buchstabe fehlt: 'n' Apfel (= ein Apfel), M'dchen (= Mädchen - nicht mehr verwendet!).",
    t10_b1: "[HU] Zeigt fehlende Buchstaben",
    t10_b2: "[HU] Moderne Regeln: selten verwenden",
    t10_inst: "[HU] Erkenne die Auslassung!",
    t10_h1: "[HU] Wo fehlt ein Laut?",
    t10_h2: "[HU] 'n Apfel = fehlender Vokal",
    t10_q: "[HU] Wofür steht der Apostroph?",
    t10_qa: "[HU] Fehlende Buchstaben", t10_qb: "[HU] Mehrheit", t10_qc: "[HU] Besitz", t10_qd: "[HU] Gedanken",

    // T11: Groß- und Kleinschreibung
    t11_title: "[HU] Großschreibung (Wann groß?)",
    t11_text: "[HU] GROSSBUCHSTABE: Satzanfang, Nomen, Eigennamen (Anna, München), Höflichkeitspronomen (Sie, Ihnen).",
    t11_b1: "[HU] Satzanfang ➔ Groß",
    t11_b2: "[HU] Nomen ➔ Groß",
    t11_inst: "[HU] Erkenne das Nomen (muss groß sein)!",
    t11_h1: "[HU] Nomen sind Dinge, Orte, Personen.",
    t11_h2: "[HU] Der Hund, Die Schule, Anna.",
    t11_w1: "[HU] Anna", t11_w2: "[HU] geht", t11_w3: "[HU] zur", t11_w4: "[HU] schule",

    // T12: Doppelvokale vs. ß
    t12_title: "[HU] aa, ee, oo, uu vs. ä, ö vs. ü",
    t12_text: "[HU] Lange Vokale schreibt man manchmal doppelt (aa, ee, oo, uu) oder mit 'h' (ah, eh, oh, uh) oder 'ß'. Beispiel: Saat, See, Boot.",
    t12_b1: "[HU] aa, ee, oo = lang gesprochen",
    t12_b2: "[HU] uss, att = kurz gesprochen",
    t12_inst: "[HU] Wähle die richtige Schreibung!",
    t12_h1: "[HU] Sprich laut: lang (ee) oder kurz (e)?",
    t12_h2: "[HU] Die See (lang), das Bett (kurz)",
    t12_sent3: "[HU] Der S___ ist schön.",
    t12_cb1: "[HU] ee (See)", t12_cb2: "[HU] e", t12_cb3: "[HU] eh", t12_cb4: "[HU] ée",

    // T13: Wortarten und Rechtschreibung
    t13_title: "[HU] Endungen von Wortarten",
    t13_text: "[HU] Verschiedene Wortarten haben unterschiedliche Endungen: Nomen (-heit, -keit), Verben (-ieren, -ern), Adjektive (-lich, -ig).",
    t13_b1: "[HU] Nomen: -heit, -keit, -ung",
    t13_b2: "[HU] Verben: -ieren, -ern",
    t13_inst: "[HU] Erkenne die Endung!",
    t13_h1: "[HU] Woran erkennst du ein Nomen? An der Endung!",
    t13_h2: "[HU] Schönheit, Möglichkeit, Freundschaft.",
    t13_sent4: "[HU] Die ___ ist wichtig.",
    t13_cb1: "[HU] Freundschaft", t13_cb2: "[HU] Freunden", t13_cb3: "[HU] freundlich", t13_cb4: "[HU] freunden",

    // T14: Verben mit Doppelkonsonanten
    t14_title: "[HU] Doppelkonsonanten",
    t14_text: "[HU] Manche Verben verdoppeln den Konsonant: schwimmen (schwimmst), rennen (rennst). Dies folgt der Kurzvokallregel.",
    t14_b1: "[HU] Kurzer Vokal + Doppelkonsonant",
    t14_b2: "[HU] Langer Vokal + einfacher Konsonant",
    t14_inst: "[HU] Wähle die richtige Schreibung!",
    t14_h1: "[HU] Kurze Vokale = Doppelkonsonant.",
    t14_h2: "[HU] schwimmen (kurz: i), fahren (lang: a)",
    t14_q: "[HU] Was ist die Regel bei kurzem Vokal?",
    t14_qa: "[HU] Doppelkonsonant", t14_qb: "[HU] Einfacher Konsonant", t14_qc: "[HU] Keine Regel", t14_qd: "[HU] Großbuchstabe",

    // T15: Du bist ein Rechtschreib-Profi!
    t15_title: "[HU] Du bist ein Rechtschreib-Profi!",
    t15_text: "[HU] Du kennst das/dass, ä/äu vs. e/eu, Kommaregeln, ß/ss, Apostroph, Großschreibung, Doppelvokale und -konsonanten. Deine Rechtschreibung ist perfekt!",
    t15_b1: "[HU] Alle Rechtschreibregeln perfekt",
    t15_b2: "[HU] Alle Sonderfälle gelernt",
    t15_inst: "[HU] Zeige dein Rechtschreib-Wissen!",
    t15_h1: "[HU] Denk an alle Regeln.",
    t15_h2: "[HU] das/dass, Komma, Größe, Doppel...",
    t15_sent5: "[HU] Ich bin mir ___, ___ die Antwort richtig ist.",
    t15_cc1: "[HU] sicher, dass", t15_cc2: "[HU] sicherer, das", t15_cc3: "[HU] sicher, das", t15_cc4: "[HU] sicherr, dass",
  
  },
  ro: {

    explorer_title: "[RO] Rechtschreib-Olymps",

    // T1: das oder dass? (Der Trick)
    t1_title: "[RO] das oder dass?",
    t1_text: "[RO] Das ist die wichtigste Regel! Kannst du 'das' durch 'dieses', 'jenes' oder 'welches' ersetzen? Dann schreiben wir es mit einem 's'. Wenn nicht (meist nach einem Komma), schreiben wir 'dass'.",
    t1_b1: "[RO] das = dieses, jenes, welches.",
    t1_b2: "[RO] dass = Bindewort (nach dem Komma).",
    t1_inst: "[RO] Kannst du 'das' ersetzen?",
    t1_h1: "[RO] Probiere: 'Ich sehe das Haus' -> 'Ich sehe dieses Haus'. Geht!",
    t1_h2: "[RO] Wenn es geht, schreibst du 'das'.",
    t1_sent: "[RO] Ich hoffe, ___ du kommst.",
    t1_c1: "[RO] dass", t1_c2: "[RO] das", t1_c3: "[RO] das s", t1_c4: "[RO] daß",
    t1_q: "[RO] Wann schreiben wir 'das' mit nur einem 's'?",
    t1_qa: "[RO] Wenn man 'dieses' sagen kann", t1_qb: "[RO] Nach jedem Komma", t1_qc: "[RO] Immer am Satzanfang", t1_qd: "[RO] Nie",

    // T2: ä oder e? äu oder eu?
    t2_title: "[RO] ä oder e? äu oder eu?",
    t2_text: "[RO] Such das verwandte Wort! Wenn es ein Wort mit 'a' oder 'au' gibt, schreiben wir 'ä' oder 'äu'. Beispiel: Haus ➔ Häuser, Hand ➔ Hände. Aber: fertig (kein Wort mit a).",
    t2_b1: "[RO] a ➔ ä, au ➔ äu.",
    t2_b2: "[RO] Kein verwandtes Wort ➔ e / eu.",
    t2_inst: "[RO] Welches Wort wird mit 'äu' geschrieben?",
    t2_h1: "[RO] Suche ein Wort, das von einem Wort mit 'au' kommt.",
    t2_h2: "[RO] Häuser kommt von Haus.",
    t2_w2_1: "[RO] Häuser", t2_w2_2: "[RO] Eulen", t2_w2_3: "[RO] Keulen", t2_w2_4: "[RO] Beulen",
    t2_q: "[RO] Warum schreiben wir 'Hände' mit 'ä'?",
    t2_qa: "[RO] Weil es von 'Hand' kommt", t2_qb: "[RO] Weil es schöner aussieht", t2_qc: "[RO] Weil es kurz ist", t2_qd: "[RO] Weil alle Nomen ä haben",

    // T3: ß oder ss?
    t3_title: "[RO] ß oder ss?",
    t3_text: "[RO] Hör auf den Vokal! Nach einem KURZEN Vokal schreiben wir 'ss' (Fluss, essen). Nach einem LANGEN Vokal vagy Zwielaut (au, ei, ie) schreiben wir 'ß' (Fuß, beißen).",
    t3_b1: "[RO] Kurz ➔ ss.",
    t3_b2: "[RO] Lang / Zwielaut ➔ ß.",
    t3_inst: "[RO] Welches Wort braucht ein 'ß'?",
    t3_h1: "[RO] Hör genau hin: Ist der Vokal lang?",
    t3_h2: "[RO] Bei 'Fuß' ist das u lang, also ß.",
    t3_w3_1: "[RO] Fuß", t3_w3_2: "[RO] Fluss", t3_w3_3: "[RO] Essen", t3_w3_4: "[RO] Kuss",
    t3_q: "[RO] Was schreiben wir nach einem Zwielaut wie 'ei' oder 'au'?",
    t3_qa: "[RO] Immer ß", t3_qb: "[RO] Immer ss", t3_qc: "[RO] Einfach nur s", t3_qd: "[RO] Gar nichts",

    // T4: Silbentrennung
    t4_title: "[RO] Wörter trennen",
    t4_text: "[RO] Wenn am Ende der Zeile kein Platz mehr ist, trennen wir Wörter in Silben. Merke: 'Trenn nie st, denn es tut ihm weh!' (Aber ck wird jetzt auch nicht mehr getrennt).",
    t4_b1: "[RO] Trennen nach Sprechsilben.",
    t4_b2: "[RO] ck, ch, sch bleiben zusammen.",
    t4_inst: "[RO] Wo ist die richtige Trennung?",
    t4_h1: "[RO] Klatsche das Wort: Was-ser.",
    t4_h2: "[RO] Wähle 'Was-ser'.",
    t4_w4_1: "[RO] Was-ser", t4_w4_2: "[RO] Wass-er", t4_w4_3: "[RO] Wa-sser", t4_w4_4: "[RO] W-asser",
    t4_q: "[RO] Darf man 'st' bei der Silbentrennung trennen?",
    t4_qa: "[RO] Nein, niemals", t4_qb: "[RO] Ja, immer", t4_qc: "[RO] Nur bei Nomen", t4_qd: "[RO] Nur am Satzende",

    // T5: Komma-Profi
    t5_title: "[RO] Komma-Check",
    t5_text: "[RO] In der 4. Klasse setzen wir Kommas bei Aufzählungen UND zwischen Haupt- und Nebensätzen (vor Wörtern wie weil, dass, wenn).",
    t5_b1: "[RO] Aufzählungen (A, B und C).",
    t5_b2: "[RO] Satzgefüge (HS, NS).",
    t5_inst: "[RO] Wo fehlt das Komma?",
    t5_h1: "[RO] Suche das Bindewort 'weil'. Davor muss ein Komma stehen.",
    t5_h2: "[RO] Ich lache, weil es lustig ist.",
    t5_w5_1: "[RO] Ich lache", t5_w5_2: "[RO] weil es", t5_w5_3: "[RO] lustig ist", t5_w5_4: "[RO] .",
    t5_q: "[RO] Welches Wort braucht meistens ein Komma davor?",
    t5_qa: "[RO] weil", t5_qb: "[RO] und", t5_qc: "[RO] oder", t5_qd: "[RO] ein",

    // T6: Das/Dass Gap-Fill
    t6_title: "[RO] Das/Dass-Meister",
    t6_text: "[RO] Übung macht den Meister! Kannst du in diesem Satz das richtige 'das' vagy 'dass' einsetzen?",
    t6_b1: "[RO] Check: Dieses, jenes, welches?",
    t6_inst: "[RO] Wähle das richtige Wort!",
    t6_h1: "[RO] Ich weiß ... (Bindewort) ... das Auto (Artikel) schnell ist.",
    t6_h2: "[RO] dass (Bindewort) / das (Artikel).",
    t6_sent_d: "[RO] Ich weiß, ___ ___ Auto rot ist.",
    t6_cd1: "[RO] dass / das", t6_cd2: "[RO] das / dass", t6_cd3: "[RO] dass / dass", t6_cd4: "[RO] das / das",
    t6_q: "[RO] Welches Wort im Satz 'Ich sehe das Kind' kann man durch 'welches' ersetzen?",
    t6_qa: "[RO] das", t6_qb: "[RO] sehe", t6_qc: "[RO] Ich", t6_qd: "[RO] Kind",

    // T7: Rechtschreib-Stapler (Physics!)
    t7_title: "[RO] Fehler-Fresser",
    t7_text: "[RO] Staple nur die Wörter, die RICHTIG geschrieben sind. Achte auf alle Regeln!",
    t7_b1: "[RO] Check: ss/ß, ä/e, das/dass.",
    t7_inst: "[RO] Baue den Turm aus richtigen Wörtern!",
    t7_h1: "[RO] Hände (von Hand) ist richtig. Fluss (kurz) ist richtig.",
    t7_h2: "[RO] Hände, Fluss, dass, Fußball.",
    t7_target: "[RO] Richtig-Stapel ✅",
    t7_s1: "[RO] Hände", t7_s2: "[RO] Fluss", t7_s3: "[RO] Fußball", t7_s4: "[RO] Hende (Falsch)",

    // T8: Komma bei Aufzählungen
    t8_title: "[RO] Kommaregeln (Aufzählungen)",
    t8_text: "[RO] Bei Aufzählungen kommt ein Komma ZWISCHEN die Wörter (aber nicht vor 'und'!)! Die Katze, der Hund und der Hamster.",
    t8_b1: "[RO] Komma zwischen Aufzählungen",
    t8_b2: "[RO] Kein Komma vor 'und'",
    t8_inst: "[RO] Setze die Kommas richtig!",
    t8_h1: "[RO] Schreibe: Der Hund, die Katze und der Vogel.",
    t8_h2: "[RO] Komma vor 'und' nur in Fachstil.",
    t8_sent: "[RO] Ich mag Äpfel___ Birnen___ Orangen",
    t8_c1: "[RO] ,  , und", t8_c2: "[RO] und und", t8_c3: "[RO] , , ,", t8_c4: "[RO]   und",

    // T9: Komma in Sätzen (Nebensätze)
    t9_title: "[RO] Komma vor Nebensätzen",
    t9_text: "[RO] VOR jedem Nebensatz (mit weil, dass, wenn, obwohl) kommt immer ein Komma! Ich lerne, WEIL ich eine gute Note möchte.",
    t9_b1: "[RO] Hauptsatz, + Nebensatz.",
    t9_b2: "[RO] Das Komma ist PFLICHT!",
    t9_inst: "[RO] Setze das Komma!",
    t9_h1: "[RO] Suche nach der Konjunktion (weil, dass, wenn).",
    t9_h2: "[RO] Danach kommt IMMER ein Komma.",
    t9_sent2: "[RO] Ich freue mich___ dass du kommst",
    t9_c1: "[RO] ,", t9_c2: "[RO] ;", t9_c3: "[RO] :", t9_c4: "[RO] !",

    // T10: Apostroph (Auslassungszeichen)
    t10_title: "[RO] Der Apostroph (')",
    t10_text: "[RO] Der Apostroph zeigt, dass ein Laut oder Buchstabe fehlt: 'n' Apfel (= ein Apfel), M'dchen (= Mädchen - nicht mehr verwendet!).",
    t10_b1: "[RO] Zeigt fehlende Buchstaben",
    t10_b2: "[RO] Moderne Regeln: selten verwenden",
    t10_inst: "[RO] Erkenne die Auslassung!",
    t10_h1: "[RO] Wo fehlt ein Laut?",
    t10_h2: "[RO] 'n Apfel = fehlender Vokal",
    t10_q: "[RO] Wofür steht der Apostroph?",
    t10_qa: "[RO] Fehlende Buchstaben", t10_qb: "[RO] Mehrheit", t10_qc: "[RO] Besitz", t10_qd: "[RO] Gedanken",

    // T11: Groß- und Kleinschreibung
    t11_title: "[RO] Großschreibung (Wann groß?)",
    t11_text: "[RO] GROSSBUCHSTABE: Satzanfang, Nomen, Eigennamen (Anna, München), Höflichkeitspronomen (Sie, Ihnen).",
    t11_b1: "[RO] Satzanfang ➔ Groß",
    t11_b2: "[RO] Nomen ➔ Groß",
    t11_inst: "[RO] Erkenne das Nomen (muss groß sein)!",
    t11_h1: "[RO] Nomen sind Dinge, Orte, Personen.",
    t11_h2: "[RO] Der Hund, Die Schule, Anna.",
    t11_w1: "[RO] Anna", t11_w2: "[RO] geht", t11_w3: "[RO] zur", t11_w4: "[RO] schule",

    // T12: Doppelvokale vs. ß
    t12_title: "[RO] aa, ee, oo, uu vs. ä, ö vs. ü",
    t12_text: "[RO] Lange Vokale schreibt man manchmal doppelt (aa, ee, oo, uu) oder mit 'h' (ah, eh, oh, uh) oder 'ß'. Beispiel: Saat, See, Boot.",
    t12_b1: "[RO] aa, ee, oo = lang gesprochen",
    t12_b2: "[RO] uss, att = kurz gesprochen",
    t12_inst: "[RO] Wähle die richtige Schreibung!",
    t12_h1: "[RO] Sprich laut: lang (ee) oder kurz (e)?",
    t12_h2: "[RO] Die See (lang), das Bett (kurz)",
    t12_sent3: "[RO] Der S___ ist schön.",
    t12_cb1: "[RO] ee (See)", t12_cb2: "[RO] e", t12_cb3: "[RO] eh", t12_cb4: "[RO] ée",

    // T13: Wortarten und Rechtschreibung
    t13_title: "[RO] Endungen von Wortarten",
    t13_text: "[RO] Verschiedene Wortarten haben unterschiedliche Endungen: Nomen (-heit, -keit), Verben (-ieren, -ern), Adjektive (-lich, -ig).",
    t13_b1: "[RO] Nomen: -heit, -keit, -ung",
    t13_b2: "[RO] Verben: -ieren, -ern",
    t13_inst: "[RO] Erkenne die Endung!",
    t13_h1: "[RO] Woran erkennst du ein Nomen? An der Endung!",
    t13_h2: "[RO] Schönheit, Möglichkeit, Freundschaft.",
    t13_sent4: "[RO] Die ___ ist wichtig.",
    t13_cb1: "[RO] Freundschaft", t13_cb2: "[RO] Freunden", t13_cb3: "[RO] freundlich", t13_cb4: "[RO] freunden",

    // T14: Verben mit Doppelkonsonanten
    t14_title: "[RO] Doppelkonsonanten",
    t14_text: "[RO] Manche Verben verdoppeln den Konsonant: schwimmen (schwimmst), rennen (rennst). Dies folgt der Kurzvokallregel.",
    t14_b1: "[RO] Kurzer Vokal + Doppelkonsonant",
    t14_b2: "[RO] Langer Vokal + einfacher Konsonant",
    t14_inst: "[RO] Wähle die richtige Schreibung!",
    t14_h1: "[RO] Kurze Vokale = Doppelkonsonant.",
    t14_h2: "[RO] schwimmen (kurz: i), fahren (lang: a)",
    t14_q: "[RO] Was ist die Regel bei kurzem Vokal?",
    t14_qa: "[RO] Doppelkonsonant", t14_qb: "[RO] Einfacher Konsonant", t14_qc: "[RO] Keine Regel", t14_qd: "[RO] Großbuchstabe",

    // T15: Du bist ein Rechtschreib-Profi!
    t15_title: "[RO] Du bist ein Rechtschreib-Profi!",
    t15_text: "[RO] Du kennst das/dass, ä/äu vs. e/eu, Kommaregeln, ß/ss, Apostroph, Großschreibung, Doppelvokale und -konsonanten. Deine Rechtschreibung ist perfekt!",
    t15_b1: "[RO] Alle Rechtschreibregeln perfekt",
    t15_b2: "[RO] Alle Sonderfälle gelernt",
    t15_inst: "[RO] Zeige dein Rechtschreib-Wissen!",
    t15_h1: "[RO] Denk an alle Regeln.",
    t15_h2: "[RO] das/dass, Komma, Größe, Doppel...",
    t15_sent5: "[RO] Ich bin mir ___, ___ die Antwort richtig ist.",
    t15_cc1: "[RO] sicher, dass", t15_cc2: "[RO] sicherer, das", t15_cc3: "[RO] sicher, das", t15_cc4: "[RO] sicherr, dass",
  
  }
};

export const RECHT4_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "das / dass", highlightChars: ["s"], color: "#EF4444" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"],
      correctIndex: 0,
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "Hand", word2: "➔", result: "Hände", color: "#10B981" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"],
      correctIndices: [0],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-pairs", pairs: [["u (kurz)", "ss"], ["u (lang)", "ß"]], color: "#3B82F6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"],
      correctIndices: [0],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-syllables", parts: ["Was", "ser"], color: "#0EA5E9", showClap: true },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"],
      correctIndices: [0],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "sentence-display", words: ["Ich lache", ",", "weil es lustig ist"], highlightIndices: [1], color: "#F59E0B" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4"],
      correctIndices: [1], // The comma index
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "das", bg: "#DBEAFE", color: "#1E40AF" }, { text: "dass", bg: "#FEE2E2", color: "#B91C1C" }] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_d",
      choices: ["t6_cd1", "t6_cd2", "t6_cd3", "t6_cd4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", title: "Stack Challenge", bg: "#F1F5F9" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-stacker",
      words: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctOrder: [0, 1, 2],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: ",  , und", color: "#F59E0B", bg: "#FEF3C7" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_sent",
      choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"],
      correctIndex: 0,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Komma-Pflicht", bg: "#F1F5F9" },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent2",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 0,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "'n Apfel", color: "#EC4899", bg: "#FCE7F3" }] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_q",
      choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
  },
  {
    difficulty: "easy",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "GROSS = Nomen", color: "#3B82F6", bg: "#DBEAFE" }] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [3],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "letter-pairs", pairs: [["ee (lang)", "See"], ["e (kurz)", "Bett"]], color: "#10B981" },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent3",
      choices: ["t12_cb1", "t12_cb2", "t12_cb3", "t12_cb4"],
      correctIndex: 0,
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [{ text: "-heit, -keit, -ung", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent4",
      choices: ["t13_cb1", "t13_cb2", "t13_cb3", "t13_cb4"],
      correctIndex: 0,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "nominativ" },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "schwimmen", highlightChars: ["m", "m"], color: "#EF4444" },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_q",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟⭐✨", title: "Profi!", bg: "#FEFCE8" },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent5",
      choices: ["t15_cc1", "t15_cc2", "t15_cc3", "t15_cc4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "nominativ" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K4 (Final Review)
// Thema: Wiederholung Kasus, Zeitformen, Wortarten, Rechtschreibung
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großes K4-Diplom",

    // T1: Kasus-Check (Nom, Akk, Dat)
    t1_title: "Das Kasus-Diplom",
    t1_text: "In der 4. Klasse beherrschst du alle Fälle! Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Achte besonders auf die Artikeländerungen.",
    t1_b1: "der ➔ den (Akk) / dem (Dat).",
    t1_b2: "die ➔ der (Dat).",
    t1_inst: "Welcher Fall wird hier gesucht?",
    t1_h1: "Frage: WEM hilft das Kind?",
    t1_h2: "Es ist der Dativ (3. Fall).",
    t1_w1: "Nominativ", t1_w2: "Akkusativ", t1_w3: "Dativ", t1_w4: "Genitiv",
    // Quiz: GENERATOR (dativ)

    // T2: Zeitformen (Futur I & Perfekt)
    t2_title: "Meister der Zeit",
    t2_text: "Ob gestern, heute oder morgen – du weißt, wie man die Verben beugt. Futur I mit 'werden' und Perfekt mit 'haben/sein'.",
    t2_b1: "Futur: Ich werde spielen.",
    t2_b2: "Perfekt: Ich habe gespielt.",
    t2_inst: "Welcher Satz steht im Futur I?",
    t2_h1: "Suche nach einer Form von 'werden'.",
    t2_h2: "'Wir werden lachen' ist Zukunft.",
    t2_s2_1: "Wir werden lachen", t2_s2_2: "Wir lachten", t2_s2_3: "Wir haben gelacht",
    // Quiz: GENERATOR (perfekt)

    // T3: Haupt- und Nebensätze
    t3_title: "Satzbau-Experte",
    t3_text: "Du kannst Sätze mit 'weil', 'dass' oder 'wenn' verbinden. Denk an das Komma und das Verb am Ende des Nebensatzes!",
    t3_b1: "Konjunktion leitet NS ein.",
    t3_b2: "Verb steht ganz hinten.",
    t3_inst: "Baue das Satzgefüge richtig zusammen!",
    t3_h1: "Hauptsatz zuerst, dann das Komma.",
    t3_h2: "Ich weiß, dass du recht hast.",
    t3_f1: "Ich weiß,", t3_f2: "dass", t3_f3: "du", t3_f4: "recht hast.",
    // Quiz: MANUAL
    t3_q: "Wo steht das Verb im Nebensatz?",
    t3_qa: "Ganz am Ende", t3_qb: "An zweiter Stelle", t3_qc: "Direkt nach dem Komma", t3_qd: "Ganz am Anfang",

    // T4: Satzglieder bestimmen
    t4_title: "Satzglieder-Analyse",
    t4_text: "Subjekt, Prädikat, Objekt oder Adverbiale? Du kannst den Satz in seine Einzelteile zerlegen.",
    t4_b1: "Wer? Was? Wen? Wem? Wann? Wo?",
    t4_inst: "Finde die adverbiale Bestimmung des Ortes (Ortsergänzung)!",
    t4_h1: "Frage: WO spielt das Kind?",
    t4_h2: "'im Garten' ist der Ort.",
    t4_w4_1: "Das Kind", t4_w4_2: "spielt", t4_w4_3: "im Garten", t4_w4_4: ".",
    // Quiz: MANUAL
    t4_q: "Was ist 'das Kind' in diesem Satz?",
    t4_qa: "Subjekt", t4_qb: "Prädikat", t4_qc: "Objekt", t4_qd: "Zeitergänzung",

    // T5: das oder dass?
    t5_title: "Das/Dass-Finale",
    t5_text: "Ein s oder zwei s? Wenn du 'dieses' oder 'welches' sagen kannst, nimm das 'das'. Sonst 'dass'.",
    t5_b1: "das = Ersatzprobe möglich.",
    t5_b2: "dass = Bindewort.",
    t5_inst: "Welches Wort passt in die Lücke?",
    t5_h1: "Probiere: 'dieses Buch'. Geht das?",
    t5_h2: "Ja, also schreiben wir 'das'.",
    t5_sent: "Ich lese ___ spannende Buch.",
    t5_c1: "das", t5_c2: "dass", t5_c3: "daß", t5_c4: "das s",
    // Quiz: MANUAL
    t5_q: "Ich finde, ___ du toll bist. (Was passt?)",
    t5_qa: "dass", t5_qb: "das", t5_qc: "das s", t5_qd: "daß",

    // T6: Wortarten-Mix
    t6_title: "Wortarten-Profi",
    t6_text: "Nomen, Verben, Adjektive, Pronomen und Präpositionen – du kennst sie alle!",
    t6_b1: "Alle Wortarten im Griff.",
    t1_inst_6: "Finde das Pronomen!",
    t6_h1: "Welches Wort steht für eine Person?",
    t6_h2: "'Euch' ist das Pronomen.",
    t6_w6_1: "Ich", t6_w6_2: "helfe", t6_w6_3: "euch", t6_w6_4: "gerne", t6_w6_5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Astro-Abschluss (Magnet Challenge!)
    t7_title: "Astro-Abschlussprüfung",
    t7_text: "Herzlichen Glückwunsch! Du bist am Ende deiner Reise. Sammle noch einmal alle Akkusativ-Objekte ein!",
    t7_b1: "Finde alle Wen-oder-Was-Ergänzungen.",
    t7_inst: "Sammle die Akkusativ-Objekte mit dem Magneten!",
    t7_h1: "Frage: Wen oder was?",
    t7_h2: "den Schatz, die Sterne, das Ziel.",
    t7_target: "Akkusativ 🧲",
    t7_m1: "den Schatz", t7_m2: "die Sterne", t7_m3: "das Ziel", t7_m4: "der Kapitän (Nom)",
    // Quiz: MIX-GENERATOR

    // T8: Alle Fälle gemischt
    t8_title: "Kasus-Durcheinander",
    t8_text: "Nominativ, Akkusativ, Dativ – alle Fälle durcheinander! Achte auf die Fragen: Wer? Wen? Wem? So findest du den richtigen Fall.",
    t8_b1: "Frage: Wer? = Nominativ (1. Fall)",
    t8_b2: "Frage: Wen/Was? = Akkusativ (4. Fall)",
    t8_b3: "Frage: Wem? = Dativ (3. Fall)",
    t8_inst: "Bestimme den Fall des unterstrichenen Wortes!",
    t8_h1: "Stelle die richtige Frage.",
    t8_h2: "Dann erkennst du den Fall leicht.",
    t8_s1: "Das Mädchen hilft dem Jungen.",
    t8_c1: "Nominativ", t8_c2: "Akkusativ", t8_c3: "Dativ",

    // T9: Präteritum vs. Präsens
    t9_title: "Zeiten vergleichen",
    t9_text: "Das Präteritum ist die Erzählform der Vergangenheit. Das Präsens ist die Gegenwart. Erkenne die Unterschiede!",
    t9_b1: "Präsens: ich gehe (jetzt)",
    t9_b2: "Präteritum: ich ging (damals)",
    t9_inst: "In welcher Zeit steht das Verb?",
    t9_h1: "Schau auf die Verb-Form.",
    t9_h2: "ging = Präteritum, gehe = Präsens",
    t9_sent: "Der Hund ___ über die Brücke.",
    t9_c1: "läuft (Präsens)", t9_c2: "lief (Präteritum)", t9_c3: "wird laufen", t9_c4: "ist gelaufen",

    // T10: Adjektive steigern
    t10_title: "Steigerungsmeister",
    t10_text: "Positiv (schön), Komparativ (schöner) und Superlativ (am schönsten). So steigerst du Adjektive richtig!",
    t10_b1: "Positiv: schön",
    t10_b2: "Komparativ: schöner (-er)",
    t10_b3: "Superlativ: am schönsten (-sten)",
    t10_inst: "Wähle die richtige Steigerung!",
    t10_h1: "Zwei Sachen vergleichen = Komparativ.",
    t10_h2: "Das beste = Superlativ.",
    t10_w1: "groß", t10_w2: "größer", t10_w3: "am größten", t10_w4: "sehr groß",

    // T11: Satzzeichen setzen
    t11_title: "Interpunktion-Profi",
    t11_text: "Punkt, Komma, Ausrufezeichen – jedes Satzzeichen hat seinen Platz! Besonders wichtig: Kommas bei Nebensätzen!",
    t11_b1: "Hauptsatz und Nebensatz werden durch Komma getrennt.",
    t11_b2: "Punkt = Ende einer Aussage.",
    t11_inst: "Setze das richtige Satzzeichen!",
    t11_h1: "Ist es ein Nebensatz?",
    t11_h2: "Dann brauchst du ein Komma.",
    t11_sent: "Ich weiß ___ du kommst morgen_",
    t11_c1: "Komma und Punkt", t11_c2: "nur Komma", t11_c3: "nur Punkt", t11_c4: "Ausrufezeichen",

    // T12: Wortarten in Sätzen
    t12_title: "Wortarten-Spürhund",
    t12_text: "Nomen (Lebewesen, Dinge), Verben (Tätigkeiten), Adjektive (Eigenschaften) – finde sie alle!",
    t12_b1: "Nomen = Wer oder Was?",
    t12_b2: "Verben = Was tut es?",
    t12_b3: "Adjektive = Wie ist es?",
    t12_inst: "Identifiziere die Wortart!",
    t12_h1: "Welches Wort ist ein Eigenschaftswort?",
    t12_h2: "schnell, groß, schön sind Adjektive.",
    t12_w1: "schnell", t12_w2: "Hund", t12_w3: "läuft", t12_w4: "über",

    // T13: Nominativ vs. Akkusativ
    t13_title: "Nom vs. Akk",
    t13_text: "Nominativ ist das Subjekt (Wer?), Akkusativ ist das direkte Objekt (Wen/Was?). Achte auf die Artikel!",
    t13_b1: "Nominativ: Der Bruder (Wer?)",
    t13_b2: "Akkusativ: Den Bruder (Wen?)",
    t13_inst: "Welcher Fall ist richtig?",
    t13_h1: "Stelle die Frage: Wer oder Wen/Was?",
    t13_h2: "Das erkennt dir die Lösung.",
    t13_s1: "Die Katze sieht ___ Vogel.",
    t13_c1: "der (Nom)", t13_c2: "den (Akk)", t13_c3: "dem (Dat)", t13_c4: "des (Gen)",

    // T14: Plural-Formen
    t14_title: "Mehrzahl meistern",
    t14_text: "Von der Einzahl zur Mehrzahl: der Hund → die Hunde, das Haus → die Häuser. Präg dir die Plural-Arten ein!",
    t14_b1: "Plural endet oft auf -e, -er, -en, -n.",
    t14_b2: "Umlaute können sich ändern: Apfel → Äpfel.",
    t14_inst: "Bilde die Pluralform!",
    t14_h1: "Denke an Umlaute (ä, ö, ü).",
    t14_h2: "ein Stuhl → zwei Stühle.",
    t14_w1: "Freund", t14_w2: "Freunde", t14_w3: "Freunden", t14_w4: "Freund's",

    // T15: K4 Abschluss-Medaille
    t15_title: "Die K4-Medaille",
    t15_text: "Du hast alle Prüfungen bestanden! Kasus, Zeitformen, Wortarten, Satzzeichen – du beherrschst die deutsche Sprache auf K4-Niveau!",
    t15_b1: "Alle Fälle sicher.",
    t15_b2: "Alle Zeitformen beherrscht.",
    t15_b3: "Satzbau perfekt!",
    t15_inst: "Beantworte die Abschluss-Frage!",
    t15_h1: "Denk an alles, was du gelernt hast.",
    t15_h2: "Diese Frage vereint alle Themen.",
    t15_q: "Welches Wort steht im Dativ und Präteritum?",
    t15_qa: "Ich gab dem Kind ein Buch.", t15_qb: "Ich gebe den Kind ein Buch.", t15_qc: "Ich habe dem Kind ein Buch gegeben.", t15_qd: "Ich werden dem Kind ein Buch geben.",
  },
  en: {

    explorer_title: "[EN] Großes K4-Diplom",

    // T1: Kasus-Check (Nom, Akk, Dat)
    t1_title: "[EN] Das Kasus-Diplom",
    t1_text: "[EN] In der 4. Klasse beherrschst du alle Fälle! Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Achte besonders auf die Artikeländerungen.",
    t1_b1: "[EN] der ➔ den (Akk) / dem (Dat).",
    t1_b2: "[EN] die ➔ der (Dat).",
    t1_inst: "[EN] Welcher Fall wird hier gesucht?",
    t1_h1: "[EN] Frage: WEM hilft das Kind?",
    t1_h2: "[EN] Es ist der Dativ (3. Fall).",
    t1_w1: "[EN] Nominativ", t1_w2: "[EN] Akkusativ", t1_w3: "[EN] Dativ", t1_w4: "[EN] Genitiv",
    // Quiz: GENERATOR (dativ)

    // T2: Zeitformen (Futur I & Perfekt)
    t2_title: "[EN] Meister der Zeit",
    t2_text: "[EN] Ob gestern, heute oder morgen – du weißt, wie man die Verben beugt. Futur I mit 'werden' und Perfekt mit 'haben/sein'.",
    t2_b1: "[EN] Futur: Ich werde spielen.",
    t2_b2: "[EN] Perfekt: Ich habe gespielt.",
    t2_inst: "[EN] Welcher Satz steht im Futur I?",
    t2_h1: "[EN] Suche nach einer Form von 'werden'.",
    t2_h2: "[EN] 'Wir werden lachen' ist Zukunft.",
    t2_s2_1: "[EN] Wir werden lachen", t2_s2_2: "[EN] Wir lachten", t2_s2_3: "[EN] Wir haben gelacht",
    // Quiz: GENERATOR (perfekt)

    // T3: Haupt- und Nebensätze
    t3_title: "[EN] Satzbau-Experte",
    t3_text: "[EN] Du kannst Sätze mit 'weil', 'dass' oder 'wenn' verbinden. Denk an das Komma und das Verb am Ende des Nebensatzes!",
    t3_b1: "[EN] Konjunktion leitet NS ein.",
    t3_b2: "[EN] Verb steht ganz hinten.",
    t3_inst: "[EN] Baue das Satzgefüge richtig zusammen!",
    t3_h1: "[EN] Hauptsatz zuerst, dann das Komma.",
    t3_h2: "[EN] Ich weiß, dass du recht hast.",
    t3_f1: "[EN] Ich weiß,", t3_f2: "[EN] dass", t3_f3: "[EN] du", t3_f4: "[EN] recht hast.",
    // Quiz: MANUAL
    t3_q: "[EN] Wo steht das Verb im Nebensatz?",
    t3_qa: "[EN] Ganz am Ende", t3_qb: "[EN] An zweiter Stelle", t3_qc: "[EN] Direkt nach dem Komma", t3_qd: "[EN] Ganz am Anfang",

    // T4: Satzglieder bestimmen
    t4_title: "[EN] Satzglieder-Analyse",
    t4_text: "[EN] Subjekt, Prädikat, Objekt oder Adverbiale? Du kannst den Satz in seine Einzelteile zerlegen.",
    t4_b1: "[EN] Wer? Was? Wen? Wem? Wann? Wo?",
    t4_inst: "[EN] Finde die adverbiale Bestimmung des Ortes (Ortsergänzung)!",
    t4_h1: "[EN] Frage: WO spielt das Kind?",
    t4_h2: "[EN] 'im Garten' ist der Ort.",
    t4_w4_1: "[EN] Das Kind", t4_w4_2: "[EN] spielt", t4_w4_3: "[EN] im Garten", t4_w4_4: "[EN] .",
    // Quiz: MANUAL
    t4_q: "[EN] Was ist 'das Kind' in diesem Satz?",
    t4_qa: "[EN] Subjekt", t4_qb: "[EN] Prädikat", t4_qc: "[EN] Objekt", t4_qd: "[EN] Zeitergänzung",

    // T5: das oder dass?
    t5_title: "[EN] Das/Dass-Finale",
    t5_text: "[EN] Ein s oder zwei s? Wenn du 'dieses' oder 'welches' sagen kannst, nimm das 'das'. Sonst 'dass'.",
    t5_b1: "[EN] das = Ersatzprobe möglich.",
    t5_b2: "[EN] dass = Bindewort.",
    t5_inst: "[EN] Welches Wort passt in die Lücke?",
    t5_h1: "[EN] Probiere: 'dieses Buch'. Geht das?",
    t5_h2: "[EN] Ja, also schreiben wir 'das'.",
    t5_sent: "[EN] Ich lese ___ spannende Buch.",
    t5_c1: "[EN] das", t5_c2: "[EN] dass", t5_c3: "[EN] daß", t5_c4: "[EN] das s",
    // Quiz: MANUAL
    t5_q: "[EN] Ich finde, ___ du toll bist. (Was passt?)",
    t5_qa: "[EN] dass", t5_qb: "[EN] das", t5_qc: "[EN] das s", t5_qd: "[EN] daß",

    // T6: Wortarten-Mix
    t6_title: "[EN] Wortarten-Profi",
    t6_text: "[EN] Nomen, Verben, Adjektive, Pronomen und Präpositionen – du kennst sie alle!",
    t6_b1: "[EN] Alle Wortarten im Griff.",
    t1_inst_6: "[EN] Finde das Pronomen!",
    t6_h1: "[EN] Welches Wort steht für eine Person?",
    t6_h2: "[EN] 'Euch' ist das Pronomen.",
    t6_w6_1: "[EN] Ich", t6_w6_2: "[EN] helfe", t6_w6_3: "[EN] euch", t6_w6_4: "[EN] gerne", t6_w6_5: "[EN] .",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Astro-Abschluss (Magnet Challenge!)
    t7_title: "[EN] Astro-Abschlussprüfung",
    t7_text: "[EN] Herzlichen Glückwunsch! Du bist am Ende deiner Reise. Sammle noch einmal alle Akkusativ-Objekte ein!",
    t7_b1: "[EN] Finde alle Wen-oder-Was-Ergänzungen.",
    t7_inst: "[EN] Sammle die Akkusativ-Objekte mit dem Magneten!",
    t7_h1: "[EN] Frage: Wen oder was?",
    t7_h2: "[EN] den Schatz, die Sterne, das Ziel.",
    t7_target: "[EN] Akkusativ 🧲",
    t7_m1: "[EN] den Schatz", t7_m2: "[EN] die Sterne", t7_m3: "[EN] das Ziel", t7_m4: "[EN] der Kapitän (Nom)",
    // Quiz: MIX-GENERATOR

    // T8: Alle Fälle gemischt
    t8_title: "[EN] Kasus-Durcheinander",
    t8_text: "[EN] Nominativ, Akkusativ, Dativ – alle Fälle durcheinander! Achte auf die Fragen: Wer? Wen? Wem? So findest du den richtigen Fall.",
    t8_b1: "[EN] Frage: Wer? = Nominativ (1. Fall)",
    t8_b2: "[EN] Frage: Wen/Was? = Akkusativ (4. Fall)",
    t8_b3: "[EN] Frage: Wem? = Dativ (3. Fall)",
    t8_inst: "[EN] Bestimme den Fall des unterstrichenen Wortes!",
    t8_h1: "[EN] Stelle die richtige Frage.",
    t8_h2: "[EN] Dann erkennst du den Fall leicht.",
    t8_s1: "[EN] Das Mädchen hilft dem Jungen.",
    t8_c1: "[EN] Nominativ", t8_c2: "[EN] Akkusativ", t8_c3: "[EN] Dativ",

    // T9: Präteritum vs. Präsens
    t9_title: "[EN] Zeiten vergleichen",
    t9_text: "[EN] Das Präteritum ist die Erzählform der Vergangenheit. Das Präsens ist die Gegenwart. Erkenne die Unterschiede!",
    t9_b1: "[EN] Präsens: ich gehe (jetzt)",
    t9_b2: "[EN] Präteritum: ich ging (damals)",
    t9_inst: "[EN] In welcher Zeit steht das Verb?",
    t9_h1: "[EN] Schau auf die Verb-Form.",
    t9_h2: "[EN] ging = Präteritum, gehe = Präsens",
    t9_sent: "[EN] Der Hund ___ über die Brücke.",
    t9_c1: "[EN] läuft (Präsens)", t9_c2: "[EN] lief (Präteritum)", t9_c3: "[EN] wird laufen", t9_c4: "[EN] ist gelaufen",

    // T10: Adjektive steigern
    t10_title: "[EN] Steigerungsmeister",
    t10_text: "[EN] Positiv (schön), Komparativ (schöner) und Superlativ (am schönsten). So steigerst du Adjektive richtig!",
    t10_b1: "[EN] Positiv: schön",
    t10_b2: "[EN] Komparativ: schöner (-er)",
    t10_b3: "[EN] Superlativ: am schönsten (-sten)",
    t10_inst: "[EN] Wähle die richtige Steigerung!",
    t10_h1: "[EN] Zwei Sachen vergleichen = Komparativ.",
    t10_h2: "[EN] Das beste = Superlativ.",
    t10_w1: "[EN] groß", t10_w2: "[EN] größer", t10_w3: "[EN] am größten", t10_w4: "[EN] sehr groß",

    // T11: Satzzeichen setzen
    t11_title: "[EN] Interpunktion-Profi",
    t11_text: "[EN] Punkt, Komma, Ausrufezeichen – jedes Satzzeichen hat seinen Platz! Besonders wichtig: Kommas bei Nebensätzen!",
    t11_b1: "[EN] Hauptsatz und Nebensatz werden durch Komma getrennt.",
    t11_b2: "[EN] Punkt = Ende einer Aussage.",
    t11_inst: "[EN] Setze das richtige Satzzeichen!",
    t11_h1: "[EN] Ist es ein Nebensatz?",
    t11_h2: "[EN] Dann brauchst du ein Komma.",
    t11_sent: "[EN] Ich weiß ___ du kommst morgen_",
    t11_c1: "[EN] Komma und Punkt", t11_c2: "[EN] nur Komma", t11_c3: "[EN] nur Punkt", t11_c4: "[EN] Ausrufezeichen",

    // T12: Wortarten in Sätzen
    t12_title: "[EN] Wortarten-Spürhund",
    t12_text: "[EN] Nomen (Lebewesen, Dinge), Verben (Tätigkeiten), Adjektive (Eigenschaften) – finde sie alle!",
    t12_b1: "[EN] Nomen = Wer oder Was?",
    t12_b2: "[EN] Verben = Was tut es?",
    t12_b3: "[EN] Adjektive = Wie ist es?",
    t12_inst: "[EN] Identifiziere die Wortart!",
    t12_h1: "[EN] Welches Wort ist ein Eigenschaftswort?",
    t12_h2: "[EN] schnell, groß, schön sind Adjektive.",
    t12_w1: "[EN] schnell", t12_w2: "[EN] Hund", t12_w3: "[EN] läuft", t12_w4: "[EN] über",

    // T13: Nominativ vs. Akkusativ
    t13_title: "[EN] Nom vs. Akk",
    t13_text: "[EN] Nominativ ist das Subjekt (Wer?), Akkusativ ist das direkte Objekt (Wen/Was?). Achte auf die Artikel!",
    t13_b1: "[EN] Nominativ: Der Bruder (Wer?)",
    t13_b2: "[EN] Akkusativ: Den Bruder (Wen?)",
    t13_inst: "[EN] Welcher Fall ist richtig?",
    t13_h1: "[EN] Stelle die Frage: Wer oder Wen/Was?",
    t13_h2: "[EN] Das erkennt dir die Lösung.",
    t13_s1: "[EN] Die Katze sieht ___ Vogel.",
    t13_c1: "[EN] der (Nom)", t13_c2: "[EN] den (Akk)", t13_c3: "[EN] dem (Dat)", t13_c4: "[EN] des (Gen)",

    // T14: Plural-Formen
    t14_title: "[EN] Mehrzahl meistern",
    t14_text: "[EN] Von der Einzahl zur Mehrzahl: der Hund → die Hunde, das Haus → die Häuser. Präg dir die Plural-Arten ein!",
    t14_b1: "[EN] Plural endet oft auf -e, -er, -en, -n.",
    t14_b2: "[EN] Umlaute können sich ändern: Apfel → Äpfel.",
    t14_inst: "[EN] Bilde die Pluralform!",
    t14_h1: "[EN] Denke an Umlaute (ä, ö, ü).",
    t14_h2: "[EN] ein Stuhl → zwei Stühle.",
    t14_w1: "[EN] Freund", t14_w2: "[EN] Freunde", t14_w3: "[EN] Freunden", t14_w4: "[EN] Freund's",

    // T15: K4 Abschluss-Medaille
    t15_title: "[EN] Die K4-Medaille",
    t15_text: "[EN] Du hast alle Prüfungen bestanden! Kasus, Zeitformen, Wortarten, Satzzeichen – du beherrschst die deutsche Sprache auf K4-Niveau!",
    t15_b1: "[EN] Alle Fälle sicher.",
    t15_b2: "[EN] Alle Zeitformen beherrscht.",
    t15_b3: "[EN] Satzbau perfekt!",
    t15_inst: "[EN] Beantworte die Abschluss-Frage!",
    t15_h1: "[EN] Denk an alles, was du gelernt hast.",
    t15_h2: "[EN] Diese Frage vereint alle Themen.",
    t15_q: "[EN] Welches Wort steht im Dativ und Präteritum?",
    t15_qa: "[EN] Ich gab dem Kind ein Buch.", t15_qb: "[EN] Ich gebe den Kind ein Buch.", t15_qc: "[EN] Ich habe dem Kind ein Buch gegeben.", t15_qd: "[EN] Ich werden dem Kind ein Buch geben.",
  
  },
  hu: {

    explorer_title: "[HU] Großes K4-Diplom",

    // T1: Kasus-Check (Nom, Akk, Dat)
    t1_title: "[HU] Das Kasus-Diplom",
    t1_text: "[HU] In der 4. Klasse beherrschst du alle Fälle! Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Achte besonders auf die Artikeländerungen.",
    t1_b1: "[HU] der ➔ den (Akk) / dem (Dat).",
    t1_b2: "[HU] die ➔ der (Dat).",
    t1_inst: "[HU] Welcher Fall wird hier gesucht?",
    t1_h1: "[HU] Frage: WEM hilft das Kind?",
    t1_h2: "[HU] Es ist der Dativ (3. Fall).",
    t1_w1: "[HU] Nominativ", t1_w2: "[HU] Akkusativ", t1_w3: "[HU] Dativ", t1_w4: "[HU] Genitiv",
    // Quiz: GENERATOR (dativ)

    // T2: Zeitformen (Futur I & Perfekt)
    t2_title: "[HU] Meister der Zeit",
    t2_text: "[HU] Ob gestern, heute oder morgen – du weißt, wie man die Verben beugt. Futur I mit 'werden' und Perfekt mit 'haben/sein'.",
    t2_b1: "[HU] Futur: Ich werde spielen.",
    t2_b2: "[HU] Perfekt: Ich habe gespielt.",
    t2_inst: "[HU] Welcher Satz steht im Futur I?",
    t2_h1: "[HU] Suche nach einer Form von 'werden'.",
    t2_h2: "[HU] 'Wir werden lachen' ist Zukunft.",
    t2_s2_1: "[HU] Wir werden lachen", t2_s2_2: "[HU] Wir lachten", t2_s2_3: "[HU] Wir haben gelacht",
    // Quiz: GENERATOR (perfekt)

    // T3: Haupt- und Nebensätze
    t3_title: "[HU] Satzbau-Experte",
    t3_text: "[HU] Du kannst Sätze mit 'weil', 'dass' oder 'wenn' verbinden. Denk an das Komma und das Verb am Ende des Nebensatzes!",
    t3_b1: "[HU] Konjunktion leitet NS ein.",
    t3_b2: "[HU] Verb steht ganz hinten.",
    t3_inst: "[HU] Baue das Satzgefüge richtig zusammen!",
    t3_h1: "[HU] Hauptsatz zuerst, dann das Komma.",
    t3_h2: "[HU] Ich weiß, dass du recht hast.",
    t3_f1: "[HU] Ich weiß,", t3_f2: "[HU] dass", t3_f3: "[HU] du", t3_f4: "[HU] recht hast.",
    // Quiz: MANUAL
    t3_q: "[HU] Wo steht das Verb im Nebensatz?",
    t3_qa: "[HU] Ganz am Ende", t3_qb: "[HU] An zweiter Stelle", t3_qc: "[HU] Direkt nach dem Komma", t3_qd: "[HU] Ganz am Anfang",

    // T4: Satzglieder bestimmen
    t4_title: "[HU] Satzglieder-Analyse",
    t4_text: "[HU] Subjekt, Prädikat, Objekt oder Adverbiale? Du kannst den Satz in seine Einzelteile zerlegen.",
    t4_b1: "[HU] Wer? Was? Wen? Wem? Wann? Wo?",
    t4_inst: "[HU] Finde die adverbiale Bestimmung des Ortes (Ortsergänzung)!",
    t4_h1: "[HU] Frage: WO spielt das Kind?",
    t4_h2: "[HU] 'im Garten' ist der Ort.",
    t4_w4_1: "[HU] Das Kind", t4_w4_2: "[HU] spielt", t4_w4_3: "[HU] im Garten", t4_w4_4: "[HU] .",
    // Quiz: MANUAL
    t4_q: "[HU] Was ist 'das Kind' in diesem Satz?",
    t4_qa: "[HU] Subjekt", t4_qb: "[HU] Prädikat", t4_qc: "[HU] Objekt", t4_qd: "[HU] Zeitergänzung",

    // T5: das oder dass?
    t5_title: "[HU] Das/Dass-Finale",
    t5_text: "[HU] Ein s oder zwei s? Wenn du 'dieses' oder 'welches' sagen kannst, nimm das 'das'. Sonst 'dass'.",
    t5_b1: "[HU] das = Ersatzprobe möglich.",
    t5_b2: "[HU] dass = Bindewort.",
    t5_inst: "[HU] Welches Wort passt in die Lücke?",
    t5_h1: "[HU] Probiere: 'dieses Buch'. Geht das?",
    t5_h2: "[HU] Ja, also schreiben wir 'das'.",
    t5_sent: "[HU] Ich lese ___ spannende Buch.",
    t5_c1: "[HU] das", t5_c2: "[HU] dass", t5_c3: "[HU] daß", t5_c4: "[HU] das s",
    // Quiz: MANUAL
    t5_q: "[HU] Ich finde, ___ du toll bist. (Was passt?)",
    t5_qa: "[HU] dass", t5_qb: "[HU] das", t5_qc: "[HU] das s", t5_qd: "[HU] daß",

    // T6: Wortarten-Mix
    t6_title: "[HU] Wortarten-Profi",
    t6_text: "[HU] Nomen, Verben, Adjektive, Pronomen und Präpositionen – du kennst sie alle!",
    t6_b1: "[HU] Alle Wortarten im Griff.",
    t1_inst_6: "[HU] Finde das Pronomen!",
    t6_h1: "[HU] Welches Wort steht für eine Person?",
    t6_h2: "[HU] 'Euch' ist das Pronomen.",
    t6_w6_1: "[HU] Ich", t6_w6_2: "[HU] helfe", t6_w6_3: "[HU] euch", t6_w6_4: "[HU] gerne", t6_w6_5: "[HU] .",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Astro-Abschluss (Magnet Challenge!)
    t7_title: "[HU] Astro-Abschlussprüfung",
    t7_text: "[HU] Herzlichen Glückwunsch! Du bist am Ende deiner Reise. Sammle noch einmal alle Akkusativ-Objekte ein!",
    t7_b1: "[HU] Finde alle Wen-oder-Was-Ergänzungen.",
    t7_inst: "[HU] Sammle die Akkusativ-Objekte mit dem Magneten!",
    t7_h1: "[HU] Frage: Wen oder was?",
    t7_h2: "[HU] den Schatz, die Sterne, das Ziel.",
    t7_target: "[HU] Akkusativ 🧲",
    t7_m1: "[HU] den Schatz", t7_m2: "[HU] die Sterne", t7_m3: "[HU] das Ziel", t7_m4: "[HU] der Kapitän (Nom)",
    // Quiz: MIX-GENERATOR

    // T8: Alle Fälle gemischt
    t8_title: "[HU] Kasus-Durcheinander",
    t8_text: "[HU] Nominativ, Akkusativ, Dativ – alle Fälle durcheinander! Achte auf die Fragen: Wer? Wen? Wem? So findest du den richtigen Fall.",
    t8_b1: "[HU] Frage: Wer? = Nominativ (1. Fall)",
    t8_b2: "[HU] Frage: Wen/Was? = Akkusativ (4. Fall)",
    t8_b3: "[HU] Frage: Wem? = Dativ (3. Fall)",
    t8_inst: "[HU] Bestimme den Fall des unterstrichenen Wortes!",
    t8_h1: "[HU] Stelle die richtige Frage.",
    t8_h2: "[HU] Dann erkennst du den Fall leicht.",
    t8_s1: "[HU] Das Mädchen hilft dem Jungen.",
    t8_c1: "[HU] Nominativ", t8_c2: "[HU] Akkusativ", t8_c3: "[HU] Dativ",

    // T9: Präteritum vs. Präsens
    t9_title: "[HU] Zeiten vergleichen",
    t9_text: "[HU] Das Präteritum ist die Erzählform der Vergangenheit. Das Präsens ist die Gegenwart. Erkenne die Unterschiede!",
    t9_b1: "[HU] Präsens: ich gehe (jetzt)",
    t9_b2: "[HU] Präteritum: ich ging (damals)",
    t9_inst: "[HU] In welcher Zeit steht das Verb?",
    t9_h1: "[HU] Schau auf die Verb-Form.",
    t9_h2: "[HU] ging = Präteritum, gehe = Präsens",
    t9_sent: "[HU] Der Hund ___ über die Brücke.",
    t9_c1: "[HU] läuft (Präsens)", t9_c2: "[HU] lief (Präteritum)", t9_c3: "[HU] wird laufen", t9_c4: "[HU] ist gelaufen",

    // T10: Adjektive steigern
    t10_title: "[HU] Steigerungsmeister",
    t10_text: "[HU] Positiv (schön), Komparativ (schöner) und Superlativ (am schönsten). So steigerst du Adjektive richtig!",
    t10_b1: "[HU] Positiv: schön",
    t10_b2: "[HU] Komparativ: schöner (-er)",
    t10_b3: "[HU] Superlativ: am schönsten (-sten)",
    t10_inst: "[HU] Wähle die richtige Steigerung!",
    t10_h1: "[HU] Zwei Sachen vergleichen = Komparativ.",
    t10_h2: "[HU] Das beste = Superlativ.",
    t10_w1: "[HU] groß", t10_w2: "[HU] größer", t10_w3: "[HU] am größten", t10_w4: "[HU] sehr groß",

    // T11: Satzzeichen setzen
    t11_title: "[HU] Interpunktion-Profi",
    t11_text: "[HU] Punkt, Komma, Ausrufezeichen – jedes Satzzeichen hat seinen Platz! Besonders wichtig: Kommas bei Nebensätzen!",
    t11_b1: "[HU] Hauptsatz und Nebensatz werden durch Komma getrennt.",
    t11_b2: "[HU] Punkt = Ende einer Aussage.",
    t11_inst: "[HU] Setze das richtige Satzzeichen!",
    t11_h1: "[HU] Ist es ein Nebensatz?",
    t11_h2: "[HU] Dann brauchst du ein Komma.",
    t11_sent: "[HU] Ich weiß ___ du kommst morgen_",
    t11_c1: "[HU] Komma und Punkt", t11_c2: "[HU] nur Komma", t11_c3: "[HU] nur Punkt", t11_c4: "[HU] Ausrufezeichen",

    // T12: Wortarten in Sätzen
    t12_title: "[HU] Wortarten-Spürhund",
    t12_text: "[HU] Nomen (Lebewesen, Dinge), Verben (Tätigkeiten), Adjektive (Eigenschaften) – finde sie alle!",
    t12_b1: "[HU] Nomen = Wer oder Was?",
    t12_b2: "[HU] Verben = Was tut es?",
    t12_b3: "[HU] Adjektive = Wie ist es?",
    t12_inst: "[HU] Identifiziere die Wortart!",
    t12_h1: "[HU] Welches Wort ist ein Eigenschaftswort?",
    t12_h2: "[HU] schnell, groß, schön sind Adjektive.",
    t12_w1: "[HU] schnell", t12_w2: "[HU] Hund", t12_w3: "[HU] läuft", t12_w4: "[HU] über",

    // T13: Nominativ vs. Akkusativ
    t13_title: "[HU] Nom vs. Akk",
    t13_text: "[HU] Nominativ ist das Subjekt (Wer?), Akkusativ ist das direkte Objekt (Wen/Was?). Achte auf die Artikel!",
    t13_b1: "[HU] Nominativ: Der Bruder (Wer?)",
    t13_b2: "[HU] Akkusativ: Den Bruder (Wen?)",
    t13_inst: "[HU] Welcher Fall ist richtig?",
    t13_h1: "[HU] Stelle die Frage: Wer oder Wen/Was?",
    t13_h2: "[HU] Das erkennt dir die Lösung.",
    t13_s1: "[HU] Die Katze sieht ___ Vogel.",
    t13_c1: "[HU] der (Nom)", t13_c2: "[HU] den (Akk)", t13_c3: "[HU] dem (Dat)", t13_c4: "[HU] des (Gen)",

    // T14: Plural-Formen
    t14_title: "[HU] Mehrzahl meistern",
    t14_text: "[HU] Von der Einzahl zur Mehrzahl: der Hund → die Hunde, das Haus → die Häuser. Präg dir die Plural-Arten ein!",
    t14_b1: "[HU] Plural endet oft auf -e, -er, -en, -n.",
    t14_b2: "[HU] Umlaute können sich ändern: Apfel → Äpfel.",
    t14_inst: "[HU] Bilde die Pluralform!",
    t14_h1: "[HU] Denke an Umlaute (ä, ö, ü).",
    t14_h2: "[HU] ein Stuhl → zwei Stühle.",
    t14_w1: "[HU] Freund", t14_w2: "[HU] Freunde", t14_w3: "[HU] Freunden", t14_w4: "[HU] Freund's",

    // T15: K4 Abschluss-Medaille
    t15_title: "[HU] Die K4-Medaille",
    t15_text: "[HU] Du hast alle Prüfungen bestanden! Kasus, Zeitformen, Wortarten, Satzzeichen – du beherrschst die deutsche Sprache auf K4-Niveau!",
    t15_b1: "[HU] Alle Fälle sicher.",
    t15_b2: "[HU] Alle Zeitformen beherrscht.",
    t15_b3: "[HU] Satzbau perfekt!",
    t15_inst: "[HU] Beantworte die Abschluss-Frage!",
    t15_h1: "[HU] Denk an alles, was du gelernt hast.",
    t15_h2: "[HU] Diese Frage vereint alle Themen.",
    t15_q: "[HU] Welches Wort steht im Dativ und Präteritum?",
    t15_qa: "[HU] Ich gab dem Kind ein Buch.", t15_qb: "[HU] Ich gebe den Kind ein Buch.", t15_qc: "[HU] Ich habe dem Kind ein Buch gegeben.", t15_qd: "[HU] Ich werden dem Kind ein Buch geben.",
  
  },
  ro: {

    explorer_title: "[RO] Großes K4-Diplom",

    // T1: Kasus-Check (Nom, Akk, Dat)
    t1_title: "[RO] Das Kasus-Diplom",
    t1_text: "[RO] In der 4. Klasse beherrschst du alle Fälle! Nominativ (Wer?), Akkusativ (Wen?) und Dativ (Wem?). Achte besonders auf die Artikeländerungen.",
    t1_b1: "[RO] der ➔ den (Akk) / dem (Dat).",
    t1_b2: "[RO] die ➔ der (Dat).",
    t1_inst: "[RO] Welcher Fall wird hier gesucht?",
    t1_h1: "[RO] Frage: WEM hilft das Kind?",
    t1_h2: "[RO] Es ist der Dativ (3. Fall).",
    t1_w1: "[RO] Nominativ", t1_w2: "[RO] Akkusativ", t1_w3: "[RO] Dativ", t1_w4: "[RO] Genitiv",
    // Quiz: GENERATOR (dativ)

    // T2: Zeitformen (Futur I & Perfekt)
    t2_title: "[RO] Meister der Zeit",
    t2_text: "[RO] Ob gestern, heute oder morgen – du weißt, wie man die Verben beugt. Futur I mit 'werden' und Perfekt mit 'haben/sein'.",
    t2_b1: "[RO] Futur: Ich werde spielen.",
    t2_b2: "[RO] Perfekt: Ich habe gespielt.",
    t2_inst: "[RO] Welcher Satz steht im Futur I?",
    t2_h1: "[RO] Suche nach einer Form von 'werden'.",
    t2_h2: "[RO] 'Wir werden lachen' ist Zukunft.",
    t2_s2_1: "[RO] Wir werden lachen", t2_s2_2: "[RO] Wir lachten", t2_s2_3: "[RO] Wir haben gelacht",
    // Quiz: GENERATOR (perfekt)

    // T3: Haupt- und Nebensätze
    t3_title: "[RO] Satzbau-Experte",
    t3_text: "[RO] Du kannst Sätze mit 'weil', 'dass' oder 'wenn' verbinden. Denk an das Komma und das Verb am Ende des Nebensatzes!",
    t3_b1: "[RO] Konjunktion leitet NS ein.",
    t3_b2: "[RO] Verb steht ganz hinten.",
    t3_inst: "[RO] Baue das Satzgefüge richtig zusammen!",
    t3_h1: "[RO] Hauptsatz zuerst, dann das Komma.",
    t3_h2: "[RO] Ich weiß, dass du recht hast.",
    t3_f1: "[RO] Ich weiß,", t3_f2: "[RO] dass", t3_f3: "[RO] du", t3_f4: "[RO] recht hast.",
    // Quiz: MANUAL
    t3_q: "[RO] Wo steht das Verb im Nebensatz?",
    t3_qa: "[RO] Ganz am Ende", t3_qb: "[RO] An zweiter Stelle", t3_qc: "[RO] Direkt nach dem Komma", t3_qd: "[RO] Ganz am Anfang",

    // T4: Satzglieder bestimmen
    t4_title: "[RO] Satzglieder-Analyse",
    t4_text: "[RO] Subjekt, Prädikat, Objekt oder Adverbiale? Du kannst den Satz in seine Einzelteile zerlegen.",
    t4_b1: "[RO] Wer? Was? Wen? Wem? Wann? Wo?",
    t4_inst: "[RO] Finde die adverbiale Bestimmung des Ortes (Ortsergänzung)!",
    t4_h1: "[RO] Frage: WO spielt das Kind?",
    t4_h2: "[RO] 'im Garten' ist der Ort.",
    t4_w4_1: "[RO] Das Kind", t4_w4_2: "[RO] spielt", t4_w4_3: "[RO] im Garten", t4_w4_4: "[RO] .",
    // Quiz: MANUAL
    t4_q: "[RO] Was ist 'das Kind' in diesem Satz?",
    t4_qa: "[RO] Subjekt", t4_qb: "[RO] Prädikat", t4_qc: "[RO] Objekt", t4_qd: "[RO] Zeitergänzung",

    // T5: das oder dass?
    t5_title: "[RO] Das/Dass-Finale",
    t5_text: "[RO] Ein s oder zwei s? Wenn du 'dieses' oder 'welches' sagen kannst, nimm das 'das'. Sonst 'dass'.",
    t5_b1: "[RO] das = Ersatzprobe möglich.",
    t5_b2: "[RO] dass = Bindewort.",
    t5_inst: "[RO] Welches Wort passt in die Lücke?",
    t5_h1: "[RO] Probiere: 'dieses Buch'. Geht das?",
    t5_h2: "[RO] Ja, also schreiben wir 'das'.",
    t5_sent: "[RO] Ich lese ___ spannende Buch.",
    t5_c1: "[RO] das", t5_c2: "[RO] dass", t5_c3: "[RO] daß", t5_c4: "[RO] das s",
    // Quiz: MANUAL
    t5_q: "[RO] Ich finde, ___ du toll bist. (Was passt?)",
    t5_qa: "[RO] dass", t5_qb: "[RO] das", t5_qc: "[RO] das s", t5_qd: "[RO] daß",

    // T6: Wortarten-Mix
    t6_title: "[RO] Wortarten-Profi",
    t6_text: "[RO] Nomen, Verben, Adjektive, Pronomen und Präpositionen – du kennst sie alle!",
    t6_b1: "[RO] Alle Wortarten im Griff.",
    t1_inst_6: "[RO] Finde das Pronomen!",
    t6_h1: "[RO] Welches Wort steht für eine Person?",
    t6_h2: "[RO] 'Euch' ist das Pronomen.",
    t6_w6_1: "[RO] Ich", t6_w6_2: "[RO] helfe", t6_w6_3: "[RO] euch", t6_w6_4: "[RO] gerne", t6_w6_5: "[RO] .",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Astro-Abschluss (Magnet Challenge!)
    t7_title: "[RO] Astro-Abschlussprüfung",
    t7_text: "[RO] Herzlichen Glückwunsch! Du bist am Ende deiner Reise. Sammle noch einmal alle Akkusativ-Objekte ein!",
    t7_b1: "[RO] Finde alle Wen-oder-Was-Ergänzungen.",
    t7_inst: "[RO] Sammle die Akkusativ-Objekte mit dem Magneten!",
    t7_h1: "[RO] Frage: Wen oder was?",
    t7_h2: "[RO] den Schatz, die Sterne, das Ziel.",
    t7_target: "[RO] Akkusativ 🧲",
    t7_m1: "[RO] den Schatz", t7_m2: "[RO] die Sterne", t7_m3: "[RO] das Ziel", t7_m4: "[RO] der Kapitän (Nom)",
    // Quiz: MIX-GENERATOR

    // T8: Alle Fälle gemischt
    t8_title: "[RO] Kasus-Durcheinander",
    t8_text: "[RO] Nominativ, Akkusativ, Dativ – alle Fälle durcheinander! Achte auf die Fragen: Wer? Wen? Wem? So findest du den richtigen Fall.",
    t8_b1: "[RO] Frage: Wer? = Nominativ (1. Fall)",
    t8_b2: "[RO] Frage: Wen/Was? = Akkusativ (4. Fall)",
    t8_b3: "[RO] Frage: Wem? = Dativ (3. Fall)",
    t8_inst: "[RO] Bestimme den Fall des unterstrichenen Wortes!",
    t8_h1: "[RO] Stelle die richtige Frage.",
    t8_h2: "[RO] Dann erkennst du den Fall leicht.",
    t8_s1: "[RO] Das Mädchen hilft dem Jungen.",
    t8_c1: "[RO] Nominativ", t8_c2: "[RO] Akkusativ", t8_c3: "[RO] Dativ",

    // T9: Präteritum vs. Präsens
    t9_title: "[RO] Zeiten vergleichen",
    t9_text: "[RO] Das Präteritum ist die Erzählform der Vergangenheit. Das Präsens ist die Gegenwart. Erkenne die Unterschiede!",
    t9_b1: "[RO] Präsens: ich gehe (jetzt)",
    t9_b2: "[RO] Präteritum: ich ging (damals)",
    t9_inst: "[RO] In welcher Zeit steht das Verb?",
    t9_h1: "[RO] Schau auf die Verb-Form.",
    t9_h2: "[RO] ging = Präteritum, gehe = Präsens",
    t9_sent: "[RO] Der Hund ___ über die Brücke.",
    t9_c1: "[RO] läuft (Präsens)", t9_c2: "[RO] lief (Präteritum)", t9_c3: "[RO] wird laufen", t9_c4: "[RO] ist gelaufen",

    // T10: Adjektive steigern
    t10_title: "[RO] Steigerungsmeister",
    t10_text: "[RO] Positiv (schön), Komparativ (schöner) und Superlativ (am schönsten). So steigerst du Adjektive richtig!",
    t10_b1: "[RO] Positiv: schön",
    t10_b2: "[RO] Komparativ: schöner (-er)",
    t10_b3: "[RO] Superlativ: am schönsten (-sten)",
    t10_inst: "[RO] Wähle die richtige Steigerung!",
    t10_h1: "[RO] Zwei Sachen vergleichen = Komparativ.",
    t10_h2: "[RO] Das beste = Superlativ.",
    t10_w1: "[RO] groß", t10_w2: "[RO] größer", t10_w3: "[RO] am größten", t10_w4: "[RO] sehr groß",

    // T11: Satzzeichen setzen
    t11_title: "[RO] Interpunktion-Profi",
    t11_text: "[RO] Punkt, Komma, Ausrufezeichen – jedes Satzzeichen hat seinen Platz! Besonders wichtig: Kommas bei Nebensätzen!",
    t11_b1: "[RO] Hauptsatz und Nebensatz werden durch Komma getrennt.",
    t11_b2: "[RO] Punkt = Ende einer Aussage.",
    t11_inst: "[RO] Setze das richtige Satzzeichen!",
    t11_h1: "[RO] Ist es ein Nebensatz?",
    t11_h2: "[RO] Dann brauchst du ein Komma.",
    t11_sent: "[RO] Ich weiß ___ du kommst morgen_",
    t11_c1: "[RO] Komma und Punkt", t11_c2: "[RO] nur Komma", t11_c3: "[RO] nur Punkt", t11_c4: "[RO] Ausrufezeichen",

    // T12: Wortarten in Sätzen
    t12_title: "[RO] Wortarten-Spürhund",
    t12_text: "[RO] Nomen (Lebewesen, Dinge), Verben (Tätigkeiten), Adjektive (Eigenschaften) – finde sie alle!",
    t12_b1: "[RO] Nomen = Wer oder Was?",
    t12_b2: "[RO] Verben = Was tut es?",
    t12_b3: "[RO] Adjektive = Wie ist es?",
    t12_inst: "[RO] Identifiziere die Wortart!",
    t12_h1: "[RO] Welches Wort ist ein Eigenschaftswort?",
    t12_h2: "[RO] schnell, groß, schön sind Adjektive.",
    t12_w1: "[RO] schnell", t12_w2: "[RO] Hund", t12_w3: "[RO] läuft", t12_w4: "[RO] über",

    // T13: Nominativ vs. Akkusativ
    t13_title: "[RO] Nom vs. Akk",
    t13_text: "[RO] Nominativ ist das Subjekt (Wer?), Akkusativ ist das direkte Objekt (Wen/Was?). Achte auf die Artikel!",
    t13_b1: "[RO] Nominativ: Der Bruder (Wer?)",
    t13_b2: "[RO] Akkusativ: Den Bruder (Wen?)",
    t13_inst: "[RO] Welcher Fall ist richtig?",
    t13_h1: "[RO] Stelle die Frage: Wer oder Wen/Was?",
    t13_h2: "[RO] Das erkennt dir die Lösung.",
    t13_s1: "[RO] Die Katze sieht ___ Vogel.",
    t13_c1: "[RO] der (Nom)", t13_c2: "[RO] den (Akk)", t13_c3: "[RO] dem (Dat)", t13_c4: "[RO] des (Gen)",

    // T14: Plural-Formen
    t14_title: "[RO] Mehrzahl meistern",
    t14_text: "[RO] Von der Einzahl zur Mehrzahl: der Hund → die Hunde, das Haus → die Häuser. Präg dir die Plural-Arten ein!",
    t14_b1: "[RO] Plural endet oft auf -e, -er, -en, -n.",
    t14_b2: "[RO] Umlaute können sich ändern: Apfel → Äpfel.",
    t14_inst: "[RO] Bilde die Pluralform!",
    t14_h1: "[RO] Denke an Umlaute (ä, ö, ü).",
    t14_h2: "[RO] ein Stuhl → zwei Stühle.",
    t14_w1: "[RO] Freund", t14_w2: "[RO] Freunde", t14_w3: "[RO] Freunden", t14_w4: "[RO] Freund's",

    // T15: K4 Abschluss-Medaille
    t15_title: "[RO] Die K4-Medaille",
    t15_text: "[RO] Du hast alle Prüfungen bestanden! Kasus, Zeitformen, Wortarten, Satzzeichen – du beherrschst die deutsche Sprache auf K4-Niveau!",
    t15_b1: "[RO] Alle Fälle sicher.",
    t15_b2: "[RO] Alle Zeitformen beherrscht.",
    t15_b3: "[RO] Satzbau perfekt!",
    t15_inst: "[RO] Beantworte die Abschluss-Frage!",
    t15_h1: "[RO] Denk an alles, was du gelernt hast.",
    t15_h2: "[RO] Diese Frage vereint alle Themen.",
    t15_q: "[RO] Welches Wort steht im Dativ und Präteritum?",
    t15_qa: "[RO] Ich gab dem Kind ein Buch.", t15_qb: "[RO] Ich gebe den Kind ein Buch.", t15_qc: "[RO] Ich habe dem Kind ein Buch gegeben.", t15_qd: "[RO] Ich werden dem Kind ein Buch geben.",
  
  }
};

export const EXAM4_POOL: PoolTopicDef[] = [
  // ── 1. Kasus Check (highlight-text) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "Wem?", emoji: "🤝", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [2], // Dativ
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "dativ" },
  },

  // ── 2. Zeitformen Check (highlight-text) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "icon-grid", items: [{ emoji: "🚀", label: "Zukunft" }, { emoji: "🔙", label: "Vergangenheit" }] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_s2_1", "t2_s2_2", "t2_s2_3"],
      correctIndices: [0], // Futur I
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "perfekt" },
  },

  // ── 3. Satzbau HS/NS (sentence-build) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "compound-word", word1: "Satz 1", word2: "Satz 2", result: "Komma!", color: "#8B5CF6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t3_f1", "t3_f2", "t3_f3", "t3_f4"],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Satzglieder (highlight-text) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Das Kind", "spielt", "im Garten"], highlightIndices: [2], color: "#10B981" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"],
      correctIndices: [2], // im Garten
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },

  // ── 5. das/dass (gap-fill) ─────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "das / dass", highlightChars: ["s"], color: "#EF4444" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent",
      choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Wortarten Check (highlight-text) ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏷️", label: "Wortarten" }] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4", "t6_w6_5"],
      correctIndices: [0, 2], // Ich, euch
      instruction: "t1_inst_6", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 7. Astro-Finale (physics-magnet) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏆", title: "K4 Champion!", bg: "#FEF3C7" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "physics-magnet",
      pairs: [{ left: "t7_m1", right: "t7_m4" }, { left: "t7_m2", right: "t7_m4" }, { left: "t7_m3", right: "t7_m4" }],
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nominativ" }, // Final mix check
  },

  // ── 8. Alle Fälle gemischt (gap-fill) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["t8_c1", "t8_c2", "t8_c3"], border: "#3B82F6", bg: "#DBEAFE" }, right: { items: ["Wer?", "Wen?", "Wem?"], border: "#3B82F6", bg: "#EFF6FF" } },
    bulletKeys: ["t8_b1", "t8_b2", "t8_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_s1",
      choices: ["t8_c1", "t8_c2", "t8_c3"],
      correctIndex: 2,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "akkusativ" },
  },

  // ── 9. Präteritum vs. Präsens (word-order) ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "Jetzt vs. Damals", emoji: "⏰", color: "#8B5CF6", bg: "#F5F3FF" }] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 1,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "praeteritum" },
  },

  // ── 10. Adjektive steigern (match-pairs) ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "Positiv → Komparativ → Superlativ", emoji: "📈", color: "#EC4899", bg: "#FCE7F3" }] },
    bulletKeys: ["t10_b1", "t10_b2", "t10_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [{ left: "t10_w1", right: "t10_w2" }, { left: "t10_w1", right: "t10_w3" }],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "steigerung" },
  },

  // ── 11. Satzzeichen setzen (gap-fill) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "icon-grid", items: [{ emoji: "🔹", label: "Punkt" }, { emoji: "🔸", label: "Komma" }, { emoji: "❗", label: "Ausrufezeichen" }] },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_sent",
      choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"],
      correctIndex: 0,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "nominativ" },
  },

  // ── 12. Wortarten in Sätzen (highlight-text) ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏷️", label: "Nomen" }, { emoji: "🔄", label: "Verb" }, { emoji: "✨", label: "Adjektiv" }] },
    bulletKeys: ["t12_b1", "t12_b2", "t12_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [0], // schnell = Adjektiv
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "verben_k3" },
  },

  // ── 13. Nominativ vs. Akkusativ (gap-fill) ────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["Wer?", "Wen/Was?"], border: "#06B6D4", bg: "#ECFDF5" }, right: { items: ["Nominativ", "Akkusativ"], border: "#06B6D4", bg: "#F0F9FF" } },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t13_s1",
      choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"],
      correctIndex: 1,
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "akkusativ" },
  },

  // ── 14. Plural-Formen (word-order) ───────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "text-bubbles", items: [{ text: "1 → viele", emoji: "➕", color: "#14B8A6", bg: "#F0FDFA" }] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [{ left: "t14_w1", right: "t14_w2" }],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 15. K4 Abschluss-Medaille (physics-slingshot) ───────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🥇", title: "K4 Meister!", bg: "#FEF08A" },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "physics-slingshot",
      question: "t15_inst",
      targets: [
        { id: "a1", text: "t15_qa", isCorrect: true },
        { id: "a2", text: "t15_qb", isCorrect: false },
        { id: "a3", text: "t15_qc", isCorrect: false },
        { id: "a4", text: "t15_qd", isCorrect: false },
      ],
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "perfekt" },
  },
];

