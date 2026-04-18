import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — NomenArtikelInsel
// Thema: Nomen erkennen, der/die/das, Groß-/Kleinschreibung
// ─────────────────────────────────────────────────────────────────────────────

export const NOMEN_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nomen & Artikel",

    // T1: Was ist ein Nomen?
    t1_title: "Was ist ein Nomen?",
    t1_text: "Nomen sind Wörter für Dinge, Tiere, Menschen und Orte. Sie schreiben wir immer GROSS! Der Hund, die Katze, das Haus.",
    t1_b1: "Nomen = Namen für Dinge, Tiere, Menschen",
    t1_b2: "Nomen schreiben wir immer GROSS!",
    t1_b3: "Jedes Nomen hat einen Artikel: der, die oder das",
    t1_inst: "Finde alle Nomen!",
    t1_h1: "Nomen sind immer großgeschrieben.",
    t1_h2: "Hund und Katze sind Nomen. schläft und groß sind es nicht.",
    t1_w1: "Hund", t1_w2: "schläft", t1_w3: "Katze", t1_w4: "groß",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Der, die oder das?
    t2_title: "Der, die oder das?",
    t2_text: "Jedes Nomen hat einen bestimmten Artikel: der (männlich), die (weiblich) oder das (sächlich). Diese muss man lernen!",
    t2_b1: "der → männlich (Maskulinum) 🔵",
    t2_b2: "die → weiblich (Femininum) 🔴",
    t2_b3: "das → sächlich (Neutrum) 🟢",
    t2_inst: "Sortiere: der, die oder das?",
    t2_h1: "Drei Artikel: der, die, das.",
    t2_h2: "der Hund, die Katze, das Haus",
    t2_bd: "der 🔵", t2_bdi: "die 🔴", t2_bda: "das 🟢",
    t2_i1: "Hund", t2_i2: "Katze", t2_i3: "Haus", t2_i4: "Baum", t2_i5: "Blume",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Groß oder klein? (gap-fill)
    t3_title: "Groß oder klein?",
    t3_text: "Achtung, Falle! Nomen müssen wir immer mit einem großen Anfangsbuchstaben schreiben. Wenn sie klein geschrieben sind, ist es falsch!",
    t3_b1: "Der erste Buchstabe ist GROSS.",
    t3_inst: "Welches Wort ist richtig geschrieben?",
    t3_h1: "Suche das Wort mit dem großen Anfangsbuchstaben.",
    t3_h2: "Das Wort 'Auto' schreibt man groß.",
    t3_sent: "Das ist ein schnelles ___.",
    t3_c1: "Auto", t3_c2: "auto", t3_c3: "aUto", t3_c4: "AuTo",
    // Quiz: MANUAL (specifikus szabály miatt)
    t3_q: "Wie schreiben wir Nomen?",
    t3_qa: "Am Anfang groß", t3_qb: "Immer klein", t3_qc: "Alles groß", t3_qd: "Nur am Satzende",

    // T4: Einzahl und Mehrzahl
    t4_title: "Einzahl und Mehrzahl",
    t4_text: "Gibt es ein Ding nur einmal, ist es die Einzahl (Singular). Gibt es viele davon, ist es die Mehrzahl (Plural). der Hund ➔ die Hunde.",
    t4_b1: "Einzahl = 1 (Singular)",
    t4_b2: "Mehrzahl = viele (Plural)",
    t4_inst: "Verbinde die Einzahl mit der Mehrzahl!",
    t4_h1: "Hund wird zu Hunde.",
    t4_h2: "Apfel wird zu Äpfel.",
    t4_l1: "Hund", t4_r1: "Hunde",
    t4_l2: "Katze", t4_r2: "Katzen",
    t4_l3: "Apfel", t4_r3: "Äpfel",
    t4_l4: "Haus", t4_r4: "Häuser",
    // Quiz: GENERATOR (plural)

    // T5: Nomen im Satz
    t5_title: "Nomen im Satz finden",
    t5_text: "Ein Nomen versteckt sich nicht nur am Anfang, es kann überall im Satz stehen. Aber es verrät sich durch den großen Buchstaben!",
    t5_b1: "Nomen können überall stehen.",
    t5_b2: "Sie verraten sich durch den großen Buchstaben.",
    t5_inst: "Finde das Nomen in diesem Satz!",
    t5_h1: "Wer oder was singt hier?",
    t5_h2: "Das Nomen ist 'Vogel'.",
    // Tokens for sentence display
    t5_w1: "Der", t5_w2: "kleine", t5_w3: "Vogel", t5_w4: "singt", t5_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Zusammengesetzte Nomen
    t6_title: "Zusammengesetzte Nomen",
    t6_text: "Wir können zwei Nomen zusammenbauen! Baum + Haus = Baumhaus. Wichtig: Der Artikel richtet sich immer nach dem LETZTEN Wort (das Haus -> das Baumhaus).",
    t6_b1: "Nomen 1 + Nomen 2 = Neues Nomen",
    t6_b2: "Artikel gehört zum letzten Wort!",
    t6_inst: "Baue das Wort zusammen!",
    t6_h1: "Wir suchen eine Tasche für die Schule.",
    t6_h2: "Schul + tasche.",
    t6_f1: "Schul", t6_f2: "tasche",
    // Quiz: MANUAL (specifikus szabályteszt)
    t6_q: "Welcher Artikel passt zu 'Hundehütte'? (die Hütte)",
    t6_qa: "die", t6_qb: "der", t6_qc: "das", t6_qd: "ein",

    // T7: Ordnung im Satz
    t7_title: "Ordnung im Satz",
    t7_text: "Ein Satz ist wie ein Puzzle. Der Großbuchstabe kommt an den Anfang, der Punkt an das Ende. Dazwischen müssen die Wörter Sinn ergeben!",
    t7_b1: "Satzanfang groß.",
    t7_b2: "Satzende = Punkt.",
    t7_inst: "Baue den Satz richtig zusammen!",
    t7_h1: "Wer macht was?",
    t7_h2: "Der Hund bellt.",
    t7_s1: "Der", t7_s2: "Hund", t7_s3: "bellt.",
    // Quiz: GENERATOR (nomen_k2) - teszteljük, felismeri-e a főnevet a kirakott mondatban

    // T8: Nomen im Nominativ
    t8_title: "Nomen im Nominativ",
    t8_text: "Der Nominativ antwortet auf 'Wer oder was?' Das ist die erste und wichtigste Fall. Das Nomen steht direkt nach dem Artikel und ist das Subjekt des Satzes.",
    t8_b1: "Nominativ = Wer oder was?",
    t8_b2: "Das Nomen ist das Subjekt.",
    t8_b3: "Beispiel: Der Hund schläft.",
    t8_inst: "Finde den Nominativ!",
    t8_h1: "Das Nomen nach dem Artikel.",
    t8_h2: "Der Hund, die Katze, das Haus.",
    t8_i1: "Hund", t8_i2: "schläft", t8_i3: "Katze", t8_i4: "Tag",

    // T9: Nomen im Akkusativ
    t9_title: "Nomen im Akkusativ",
    t9_text: "Der Akkusativ antwortet auf 'Wen oder was?' Das ist das Objekt der Aktion. Der Hund frisst das Futter. 'Das Futter' ist Akkusativ.",
    t9_b1: "Akkusativ = Wen oder was?",
    t9_b2: "Das ist das direkte Objekt.",
    t9_b3: "Nach Aktion kommt das Akkusativ-Objekt.",
    t9_inst: "Was wird gemacht?",
    t9_h1: "Finde das Objekt der Aktion!",
    t9_h2: "Der Junge sieht die Blume.",
    t9_c1: "einen", t9_c2: "einen", t9_c3: "ein", t9_c4: "eine",
    t9_sent: "___ Apfel esse ich gern.",

    // T10: Nomen mit Umlaut in Mehrzahl
    t10_title: "Nomen mit Umlaut in Mehrzahl",
    t10_text: "Manche Nomen bekommen einen Umlaut (ä, ö, ü) in der Mehrzahl. Der Apfel → die Äpfel. Das Haus → die Häuser. Das ist eine wichtige Regel!",
    t10_b1: "Umlaut in Mehrzahl: ä, ö, ü",
    t10_b2: "Der Apfel → die Äpfel",
    t10_b3: "Das Haus → die Häuser",
    t10_inst: "Verbinde Singular und Plural!",
    t10_h1: "Welcher Plural hat einen Umlaut?",
    t10_h2: "Apfel wird zu Äpfel.",
    t10_l1: "Apfel", t10_r1: "Äpfel",
    t10_l2: "Haus", t10_r2: "Häuser",
    t10_l3: "Baum", t10_r3: "Bäume",
    t10_l4: "Mutter", t10_r4: "Mütter",

    // T11: Nomen kategorisieren
    t11_title: "Nomen kategorisieren",
    t11_text: "Nomen können in Kategorien eingeteilt werden: Menschen (Vater, Lehrer), Tiere (Hund, Vogel), Orte (Schule, Park) und Dinge (Tisch, Auto). Das hilft beim Lernen!",
    t11_b1: "Menschen: Vater, Lehrer, Kind, Freund",
    t11_b2: "Tiere: Hund, Katze, Vogel, Fisch",
    t11_b3: "Dinge: Auto, Tisch, Tasse, Ball",
    t11_inst: "Sortiere nach Kategorien!",
    t11_h1: "Ist es Mensch, Tier oder Ding?",
    t11_h2: "Der Lehrer ist ein Mensch.",
    t11_bm: "Menschen 👤", t11_bt: "Tiere 🐾", t11_bd: "Dinge 📦",
    t11_i1: "Lehrer", t11_i2: "Hund", t11_i3: "Stuhl", t11_i4: "Adler",

    // T12: Artikel & Nomen perfekt
    t12_title: "Artikel & Nomen perfekt",
    t12_text: "Der Artikel und das Nomen sind ein Paar. Sie gehören zusammen. Der Artikel gibt die Information: der (männlich), die (weiblich) oder das (sächlich). Diese Paare muss man immer zusammen lernen!",
    t12_b1: "Artikel + Nomen = Ein Paar!",
    t12_b2: "Der Artikel ist immer dabei.",
    t12_b3: "Zusammen lernen, zusammen sprechen!",
    t12_inst: "Verbinde Artikel und Nomen!",
    t12_h1: "Welcher Artikel passt?",
    t12_h2: "der Hund, die Katze, das Haus",
    t12_l1: "der", t12_r1: "Hund",
    t12_l2: "die", t12_r2: "Katze",
    t12_l3: "das", t12_r3: "Haus",
    t12_l4: "die", t12_r4: "Blume",

    // T13: Konkrete vs. abstrakte Nomen
    t13_title: "Konkrete vs. abstrakte Nomen",
    t13_text: "Es gibt zwei Arten von Nomen: Konkrete Nomen (man kann sehen/anfassen): Tisch, Stuhl, Hund. Abstrakte Nomen (man kann nicht anfassen): Freundschaft, Liebe, Angst, Freude.",
    t13_b1: "Konkret = sehen/anfassen (Tisch, Stuhl)",
    t13_b2: "Abstrakt = nicht anfassen (Liebe, Angst)",
    t13_b3: "Beide Arten sind wichtig!",
    t13_inst: "Sortiere: Konkret oder Abstrakt?",
    t13_h1: "Kann man das anfassen?",
    t13_h2: "Liebe kann man nicht anfassen.",
    t13_bc: "Konkret 👉", t13_ba: "Abstrakt 💭",
    t13_i1: "Tisch", t13_i2: "Liebe", t13_i3: "Freude", t13_i4: "Hund",

    // T14: Nomen-Detektiv spielen
    t14_title: "Nomen-Detektiv spielen",
    t14_text: "Kannst du alle Nomen in einem Text finden? Halte Ausschau nach Großbuchstaben! Aber Vorsicht: Auch das erste Wort eines Satzes ist groß. Du musst aufmerksam sein!",
    t14_b1: "Alle Nomen sind großgeschrieben.",
    t14_b2: "Achte auf Großbuchstaben!",
    t14_b3: "Der Satzanfang ist auch groß!",
    t14_inst: "Finde alle Nomen!",
    t14_h1: "Welche Wörter sind großgeschrieben?",
    t14_h2: "Das Kind spielt im Garten mit dem Hund.",
    t14_w1: "Das", t14_w2: "Kind", t14_w3: "spielt", t14_w4: "im", t14_w5: "Garten", t14_w6: ".",

    // T15: Nomen Champion Finale!
    t15_title: "Nomen Champion Finale!",
    t15_text: "Gratulieren! Du hast alle Nomen-Lektionen gelernt! Jetzt bist du ein Nomen-Champion. Du kennst die Artikel, die Mehrzahlen und die Fälle. Das ist Klasse 2 Mastery!",
    t15_b1: "Du kennst: der, die, das",
    t15_b2: "Du kannst Mehrzahlen bilden",
    t15_b3: "Du erkennst Nomen überall!",
    t15_inst: "Champion-Herausforderung!",
    t15_h1: "Baue den perfekten Satz!",
    t15_h2: "Der Hund frisst das Futter.",
    t15_f1: "Das", t15_f2: "Futter", t15_f3: "frisst", t15_f4: "der Hund", t15_f5: ".",
  },
  en: {

    explorer_title: "[EN] Nomen & Artikel",

    // T1: Was ist ein Nomen?
    t1_title: "[EN] Was ist ein Nomen?",
    t1_text: "[EN] Nomen sind Wörter für Dinge, Tiere, Menschen und Orte. Sie schreiben wir immer GROSS! Der Hund, die Katze, das Haus.",
    t1_b1: "[EN] Nomen = Namen für Dinge, Tiere, Menschen",
    t1_b2: "[EN] Nomen schreiben wir immer GROSS!",
    t1_b3: "[EN] Jedes Nomen hat einen Artikel: der, die oder das",
    t1_inst: "[EN] Finde alle Nomen!",
    t1_h1: "[EN] Nomen sind immer großgeschrieben.",
    t1_h2: "[EN] Hund und Katze sind Nomen. schläft und groß sind es nicht.",
    t1_w1: "[EN] Hund", t1_w2: "[EN] schläft", t1_w3: "[EN] Katze", t1_w4: "[EN] groß",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Der, die oder das?
    t2_title: "[EN] Der, die oder das?",
    t2_text: "[EN] Jedes Nomen hat einen bestimmten Artikel: der (männlich), die (weiblich) oder das (sächlich). Diese muss man lernen!",
    t2_b1: "[EN] der → männlich (Maskulinum) 🔵",
    t2_b2: "[EN] die → weiblich (Femininum) 🔴",
    t2_b3: "[EN] das → sächlich (Neutrum) 🟢",
    t2_inst: "[EN] Sortiere: der, die oder das?",
    t2_h1: "[EN] Drei Artikel: der, die, das.",
    t2_h2: "[EN] der Hund, die Katze, das Haus",
    t2_bd: "[EN] der 🔵", t2_bdi: "[EN] die 🔴", t2_bda: "[EN] das 🟢",
    t2_i1: "[EN] Hund", t2_i2: "[EN] Katze", t2_i3: "[EN] Haus", t2_i4: "[EN] Baum", t2_i5: "[EN] Blume",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Groß oder klein? (gap-fill)
    t3_title: "[EN] Groß oder klein?",
    t3_text: "[EN] Achtung, Falle! Nomen müssen wir immer mit einem großen Anfangsbuchstaben schreiben. Wenn sie klein geschrieben sind, ist es falsch!",
    t3_b1: "[EN] Der erste Buchstabe ist GROSS.",
    t3_inst: "[EN] Welches Wort ist richtig geschrieben?",
    t3_h1: "[EN] Suche das Wort mit dem großen Anfangsbuchstaben.",
    t3_h2: "[EN] Das Wort 'Auto' schreibt man groß.",
    t3_sent: "[EN] Das ist ein schnelles ___.",
    t3_c1: "[EN] Auto", t3_c2: "[EN] auto", t3_c3: "[EN] aUto", t3_c4: "[EN] AuTo",
    // Quiz: MANUAL (specifikus szabály miatt)
    t3_q: "[EN] Wie schreiben wir Nomen?",
    t3_qa: "[EN] Am Anfang groß", t3_qb: "[EN] Immer klein", t3_qc: "[EN] Alles groß", t3_qd: "[EN] Nur am Satzende",

    // T4: Einzahl und Mehrzahl
    t4_title: "[EN] Einzahl und Mehrzahl",
    t4_text: "[EN] Gibt es ein Ding nur einmal, ist es die Einzahl (Singular). Gibt es viele davon, ist es die Mehrzahl (Plural). der Hund ➔ die Hunde.",
    t4_b1: "[EN] Einzahl = 1 (Singular)",
    t4_b2: "[EN] Mehrzahl = viele (Plural)",
    t4_inst: "[EN] Verbinde die Einzahl mit der Mehrzahl!",
    t4_h1: "[EN] Hund wird zu Hunde.",
    t4_h2: "[EN] Apfel wird zu Äpfel.",
    t4_l1: "[EN] Hund", t4_r1: "[EN] Hunde",
    t4_l2: "[EN] Katze", t4_r2: "[EN] Katzen",
    t4_l3: "[EN] Apfel", t4_r3: "[EN] Äpfel",
    t4_l4: "[EN] Haus", t4_r4: "[EN] Häuser",
    // Quiz: GENERATOR (plural)

    // T5: Nomen im Satz
    t5_title: "[EN] Nomen im Satz finden",
    t5_text: "[EN] Ein Nomen versteckt sich nicht nur am Anfang, es kann überall im Satz stehen. Aber es verrät sich durch den großen Buchstaben!",
    t5_b1: "[EN] Nomen können überall stehen.",
    t5_b2: "[EN] Sie verraten sich durch den großen Buchstaben.",
    t5_inst: "[EN] Finde das Nomen in diesem Satz!",
    t5_h1: "[EN] Wer oder was singt hier?",
    t5_h2: "[EN] Das Nomen ist 'Vogel'.",
    // Tokens for sentence display
    t5_w1: "[EN] Der", t5_w2: "[EN] kleine", t5_w3: "[EN] Vogel", t5_w4: "[EN] singt", t5_w5: "[EN] .",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Zusammengesetzte Nomen
    t6_title: "[EN] Zusammengesetzte Nomen",
    t6_text: "[EN] Wir können zwei Nomen zusammenbauen! Baum + Haus = Baumhaus. Wichtig: Der Artikel richtet sich immer nach dem LETZTEN Wort (das Haus -> das Baumhaus).",
    t6_b1: "[EN] Nomen 1 + Nomen 2 = Neues Nomen",
    t6_b2: "[EN] Artikel gehört zum letzten Wort!",
    t6_inst: "[EN] Baue das Wort zusammen!",
    t6_h1: "[EN] Wir suchen eine Tasche für die Schule.",
    t6_h2: "[EN] Schul + tasche.",
    t6_f1: "[EN] Schul", t6_f2: "[EN] tasche",
    // Quiz: MANUAL (specifikus szabályteszt)
    t6_q: "[EN] Welcher Artikel passt zu 'Hundehütte'? (die Hütte)",
    t6_qa: "[EN] die", t6_qb: "[EN] der", t6_qc: "[EN] das", t6_qd: "[EN] ein",

    // T7: Ordnung im Satz
    t7_title: "[EN] Ordnung im Satz",
    t7_text: "[EN] Ein Satz ist wie ein Puzzle. Der Großbuchstabe kommt an den Anfang, der Punkt an das Ende. Dazwischen müssen die Wörter Sinn ergeben!",
    t7_b1: "[EN] Satzanfang groß.",
    t7_b2: "[EN] Satzende = Punkt.",
    t7_inst: "[EN] Baue den Satz richtig zusammen!",
    t7_h1: "[EN] Wer macht was?",
    t7_h2: "[EN] Der Hund bellt.",
    t7_s1: "[EN] Der", t7_s2: "[EN] Hund", t7_s3: "[EN] bellt.",
    // Quiz: GENERATOR (nomen_k2) - teszteljük, felismeri-e a főnevet a kirakott mondatban

    // T8: Nomen im Nominativ
    t8_title: "[EN] Nomen im Nominativ",
    t8_text: "[EN] Der Nominativ antwortet auf 'Wer oder was?' Das ist die erste und wichtigste Fall. Das Nomen steht direkt nach dem Artikel und ist das Subjekt des Satzes.",
    t8_b1: "[EN] Nominativ = Wer oder was?",
    t8_b2: "[EN] Das Nomen ist das Subjekt.",
    t8_b3: "[EN] Beispiel: Der Hund schläft.",
    t8_inst: "[EN] Finde den Nominativ!",
    t8_h1: "[EN] Das Nomen nach dem Artikel.",
    t8_h2: "[EN] Der Hund, die Katze, das Haus.",
    t8_i1: "[EN] Hund", t8_i2: "[EN] schläft", t8_i3: "[EN] Katze", t8_i4: "[EN] Tag",

    // T9: Nomen im Akkusativ
    t9_title: "[EN] Nomen im Akkusativ",
    t9_text: "[EN] Der Akkusativ antwortet auf 'Wen oder was?' Das ist das Objekt der Aktion. Der Hund frisst das Futter. 'Das Futter' ist Akkusativ.",
    t9_b1: "[EN] Akkusativ = Wen oder was?",
    t9_b2: "[EN] Das ist das direkte Objekt.",
    t9_b3: "[EN] Nach Aktion kommt das Akkusativ-Objekt.",
    t9_inst: "[EN] Was wird gemacht?",
    t9_h1: "[EN] Finde das Objekt der Aktion!",
    t9_h2: "[EN] Der Junge sieht die Blume.",
    t9_c1: "[EN] einen", t9_c2: "[EN] einen", t9_c3: "[EN] ein", t9_c4: "[EN] eine",
    t9_sent: "[EN] ___ Apfel esse ich gern.",

    // T10: Nomen mit Umlaut in Mehrzahl
    t10_title: "[EN] Nomen mit Umlaut in Mehrzahl",
    t10_text: "[EN] Manche Nomen bekommen einen Umlaut (ä, ö, ü) in der Mehrzahl. Der Apfel → die Äpfel. Das Haus → die Häuser. Das ist eine wichtige Regel!",
    t10_b1: "[EN] Umlaut in Mehrzahl: ä, ö, ü",
    t10_b2: "[EN] Der Apfel → die Äpfel",
    t10_b3: "[EN] Das Haus → die Häuser",
    t10_inst: "[EN] Verbinde Singular und Plural!",
    t10_h1: "[EN] Welcher Plural hat einen Umlaut?",
    t10_h2: "[EN] Apfel wird zu Äpfel.",
    t10_l1: "[EN] Apfel", t10_r1: "[EN] Äpfel",
    t10_l2: "[EN] Haus", t10_r2: "[EN] Häuser",
    t10_l3: "[EN] Baum", t10_r3: "[EN] Bäume",
    t10_l4: "[EN] Mutter", t10_r4: "[EN] Mütter",

    // T11: Nomen kategorisieren
    t11_title: "[EN] Nomen kategorisieren",
    t11_text: "[EN] Nomen können in Kategorien eingeteilt werden: Menschen (Vater, Lehrer), Tiere (Hund, Vogel), Orte (Schule, Park) und Dinge (Tisch, Auto). Das hilft beim Lernen!",
    t11_b1: "[EN] Menschen: Vater, Lehrer, Kind, Freund",
    t11_b2: "[EN] Tiere: Hund, Katze, Vogel, Fisch",
    t11_b3: "[EN] Dinge: Auto, Tisch, Tasse, Ball",
    t11_inst: "[EN] Sortiere nach Kategorien!",
    t11_h1: "[EN] Ist es Mensch, Tier oder Ding?",
    t11_h2: "[EN] Der Lehrer ist ein Mensch.",
    t11_bm: "[EN] Menschen 👤", t11_bt: "[EN] Tiere 🐾", t11_bd: "[EN] Dinge 📦",
    t11_i1: "[EN] Lehrer", t11_i2: "[EN] Hund", t11_i3: "[EN] Stuhl", t11_i4: "[EN] Adler",

    // T12: Artikel & Nomen perfekt
    t12_title: "[EN] Artikel & Nomen perfekt",
    t12_text: "[EN] Der Artikel und das Nomen sind ein Paar. Sie gehören zusammen. Der Artikel gibt die Information: der (männlich), die (weiblich) oder das (sächlich). Diese Paare muss man immer zusammen lernen!",
    t12_b1: "[EN] Artikel + Nomen = Ein Paar!",
    t12_b2: "[EN] Der Artikel ist immer dabei.",
    t12_b3: "[EN] Zusammen lernen, zusammen sprechen!",
    t12_inst: "[EN] Verbinde Artikel und Nomen!",
    t12_h1: "[EN] Welcher Artikel passt?",
    t12_h2: "[EN] der Hund, die Katze, das Haus",
    t12_l1: "[EN] der", t12_r1: "[EN] Hund",
    t12_l2: "[EN] die", t12_r2: "[EN] Katze",
    t12_l3: "[EN] das", t12_r3: "[EN] Haus",
    t12_l4: "[EN] die", t12_r4: "[EN] Blume",

    // T13: Konkrete vs. abstrakte Nomen
    t13_title: "[EN] Konkrete vs. abstrakte Nomen",
    t13_text: "[EN] Es gibt zwei Arten von Nomen: Konkrete Nomen (man kann sehen/anfassen): Tisch, Stuhl, Hund. Abstrakte Nomen (man kann nicht anfassen): Freundschaft, Liebe, Angst, Freude.",
    t13_b1: "[EN] Konkret = sehen/anfassen (Tisch, Stuhl)",
    t13_b2: "[EN] Abstrakt = nicht anfassen (Liebe, Angst)",
    t13_b3: "[EN] Beide Arten sind wichtig!",
    t13_inst: "[EN] Sortiere: Konkret oder Abstrakt?",
    t13_h1: "[EN] Kann man das anfassen?",
    t13_h2: "[EN] Liebe kann man nicht anfassen.",
    t13_bc: "[EN] Konkret 👉", t13_ba: "[EN] Abstrakt 💭",
    t13_i1: "[EN] Tisch", t13_i2: "[EN] Liebe", t13_i3: "[EN] Freude", t13_i4: "[EN] Hund",

    // T14: Nomen-Detektiv spielen
    t14_title: "[EN] Nomen-Detektiv spielen",
    t14_text: "[EN] Kannst du alle Nomen in einem Text finden? Halte Ausschau nach Großbuchstaben! Aber Vorsicht: Auch das erste Wort eines Satzes ist groß. Du musst aufmerksam sein!",
    t14_b1: "[EN] Alle Nomen sind großgeschrieben.",
    t14_b2: "[EN] Achte auf Großbuchstaben!",
    t14_b3: "[EN] Der Satzanfang ist auch groß!",
    t14_inst: "[EN] Finde alle Nomen!",
    t14_h1: "[EN] Welche Wörter sind großgeschrieben?",
    t14_h2: "[EN] Das Kind spielt im Garten mit dem Hund.",
    t14_w1: "[EN] Das", t14_w2: "[EN] Kind", t14_w3: "[EN] spielt", t14_w4: "[EN] im", t14_w5: "[EN] Garten", t14_w6: "[EN] .",

    // T15: Nomen Champion Finale!
    t15_title: "[EN] Nomen Champion Finale!",
    t15_text: "[EN] Gratulieren! Du hast alle Nomen-Lektionen gelernt! Jetzt bist du ein Nomen-Champion. Du kennst die Artikel, die Mehrzahlen und die Fälle. Das ist Klasse 2 Mastery!",
    t15_b1: "[EN] Du kennst: der, die, das",
    t15_b2: "[EN] Du kannst Mehrzahlen bilden",
    t15_b3: "[EN] Du erkennst Nomen überall!",
    t15_inst: "[EN] Champion-Herausforderung!",
    t15_h1: "[EN] Baue den perfekten Satz!",
    t15_h2: "[EN] Der Hund frisst das Futter.",
    t15_f1: "[EN] Das", t15_f2: "[EN] Futter", t15_f3: "[EN] frisst", t15_f4: "[EN] der Hund", t15_f5: "[EN] .",
  
  },
  hu: {

    explorer_title: "[HU] Nomen & Artikel",

    // T1: Was ist ein Nomen?
    t1_title: "[HU] Was ist ein Nomen?",
    t1_text: "[HU] Nomen sind Wörter für Dinge, Tiere, Menschen und Orte. Sie schreiben wir immer GROSS! Der Hund, die Katze, das Haus.",
    t1_b1: "[HU] Nomen = Namen für Dinge, Tiere, Menschen",
    t1_b2: "[HU] Nomen schreiben wir immer GROSS!",
    t1_b3: "[HU] Jedes Nomen hat einen Artikel: der, die oder das",
    t1_inst: "[HU] Finde alle Nomen!",
    t1_h1: "[HU] Nomen sind immer großgeschrieben.",
    t1_h2: "[HU] Hund und Katze sind Nomen. schläft und groß sind es nicht.",
    t1_w1: "[HU] Hund", t1_w2: "[HU] schläft", t1_w3: "[HU] Katze", t1_w4: "[HU] groß",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Der, die oder das?
    t2_title: "[HU] Der, die oder das?",
    t2_text: "[HU] Jedes Nomen hat einen bestimmten Artikel: der (männlich), die (weiblich) oder das (sächlich). Diese muss man lernen!",
    t2_b1: "[HU] der → männlich (Maskulinum) 🔵",
    t2_b2: "[HU] die → weiblich (Femininum) 🔴",
    t2_b3: "[HU] das → sächlich (Neutrum) 🟢",
    t2_inst: "[HU] Sortiere: der, die oder das?",
    t2_h1: "[HU] Drei Artikel: der, die, das.",
    t2_h2: "[HU] der Hund, die Katze, das Haus",
    t2_bd: "[HU] der 🔵", t2_bdi: "[HU] die 🔴", t2_bda: "[HU] das 🟢",
    t2_i1: "[HU] Hund", t2_i2: "[HU] Katze", t2_i3: "[HU] Haus", t2_i4: "[HU] Baum", t2_i5: "[HU] Blume",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Groß oder klein? (gap-fill)
    t3_title: "[HU] Groß oder klein?",
    t3_text: "[HU] Achtung, Falle! Nomen müssen wir immer mit einem großen Anfangsbuchstaben schreiben. Wenn sie klein geschrieben sind, ist es falsch!",
    t3_b1: "[HU] Der erste Buchstabe ist GROSS.",
    t3_inst: "[HU] Welches Wort ist richtig geschrieben?",
    t3_h1: "[HU] Suche das Wort mit dem großen Anfangsbuchstaben.",
    t3_h2: "[HU] Das Wort 'Auto' schreibt man groß.",
    t3_sent: "[HU] Das ist ein schnelles ___.",
    t3_c1: "[HU] Auto", t3_c2: "[HU] auto", t3_c3: "[HU] aUto", t3_c4: "[HU] AuTo",
    // Quiz: MANUAL (specifikus szabály miatt)
    t3_q: "[HU] Wie schreiben wir Nomen?",
    t3_qa: "[HU] Am Anfang groß", t3_qb: "[HU] Immer klein", t3_qc: "[HU] Alles groß", t3_qd: "[HU] Nur am Satzende",

    // T4: Einzahl und Mehrzahl
    t4_title: "[HU] Einzahl und Mehrzahl",
    t4_text: "[HU] Gibt es ein Ding nur einmal, ist es die Einzahl (Singular). Gibt es viele davon, ist es die Mehrzahl (Plural). der Hund ➔ die Hunde.",
    t4_b1: "[HU] Einzahl = 1 (Singular)",
    t4_b2: "[HU] Mehrzahl = viele (Plural)",
    t4_inst: "[HU] Verbinde die Einzahl mit der Mehrzahl!",
    t4_h1: "[HU] Hund wird zu Hunde.",
    t4_h2: "[HU] Apfel wird zu Äpfel.",
    t4_l1: "[HU] Hund", t4_r1: "[HU] Hunde",
    t4_l2: "[HU] Katze", t4_r2: "[HU] Katzen",
    t4_l3: "[HU] Apfel", t4_r3: "[HU] Äpfel",
    t4_l4: "[HU] Haus", t4_r4: "[HU] Häuser",
    // Quiz: GENERATOR (plural)

    // T5: Nomen im Satz
    t5_title: "[HU] Nomen im Satz finden",
    t5_text: "[HU] Ein Nomen versteckt sich nicht nur am Anfang, es kann überall im Satz stehen. Aber es verrät sich durch den großen Buchstaben!",
    t5_b1: "[HU] Nomen können überall stehen.",
    t5_b2: "[HU] Sie verraten sich durch den großen Buchstaben.",
    t5_inst: "[HU] Finde das Nomen in diesem Satz!",
    t5_h1: "[HU] Wer oder was singt hier?",
    t5_h2: "[HU] Das Nomen ist 'Vogel'.",
    // Tokens for sentence display
    t5_w1: "[HU] Der", t5_w2: "[HU] kleine", t5_w3: "[HU] Vogel", t5_w4: "[HU] singt", t5_w5: "[HU] .",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Zusammengesetzte Nomen
    t6_title: "[HU] Zusammengesetzte Nomen",
    t6_text: "[HU] Wir können zwei Nomen zusammenbauen! Baum + Haus = Baumhaus. Wichtig: Der Artikel richtet sich immer nach dem LETZTEN Wort (das Haus -> das Baumhaus).",
    t6_b1: "[HU] Nomen 1 + Nomen 2 = Neues Nomen",
    t6_b2: "[HU] Artikel gehört zum letzten Wort!",
    t6_inst: "[HU] Baue das Wort zusammen!",
    t6_h1: "[HU] Wir suchen eine Tasche für die Schule.",
    t6_h2: "[HU] Schul + tasche.",
    t6_f1: "[HU] Schul", t6_f2: "[HU] tasche",
    // Quiz: MANUAL (specifikus szabályteszt)
    t6_q: "[HU] Welcher Artikel passt zu 'Hundehütte'? (die Hütte)",
    t6_qa: "[HU] die", t6_qb: "[HU] der", t6_qc: "[HU] das", t6_qd: "[HU] ein",

    // T7: Ordnung im Satz
    t7_title: "[HU] Ordnung im Satz",
    t7_text: "[HU] Ein Satz ist wie ein Puzzle. Der Großbuchstabe kommt an den Anfang, der Punkt an das Ende. Dazwischen müssen die Wörter Sinn ergeben!",
    t7_b1: "[HU] Satzanfang groß.",
    t7_b2: "[HU] Satzende = Punkt.",
    t7_inst: "[HU] Baue den Satz richtig zusammen!",
    t7_h1: "[HU] Wer macht was?",
    t7_h2: "[HU] Der Hund bellt.",
    t7_s1: "[HU] Der", t7_s2: "[HU] Hund", t7_s3: "[HU] bellt.",
    // Quiz: GENERATOR (nomen_k2) - teszteljük, felismeri-e a főnevet a kirakott mondatban

    // T8: Nomen im Nominativ
    t8_title: "[HU] Nomen im Nominativ",
    t8_text: "[HU] Der Nominativ antwortet auf 'Wer oder was?' Das ist die erste und wichtigste Fall. Das Nomen steht direkt nach dem Artikel und ist das Subjekt des Satzes.",
    t8_b1: "[HU] Nominativ = Wer oder was?",
    t8_b2: "[HU] Das Nomen ist das Subjekt.",
    t8_b3: "[HU] Beispiel: Der Hund schläft.",
    t8_inst: "[HU] Finde den Nominativ!",
    t8_h1: "[HU] Das Nomen nach dem Artikel.",
    t8_h2: "[HU] Der Hund, die Katze, das Haus.",
    t8_i1: "[HU] Hund", t8_i2: "[HU] schläft", t8_i3: "[HU] Katze", t8_i4: "[HU] Tag",

    // T9: Nomen im Akkusativ
    t9_title: "[HU] Nomen im Akkusativ",
    t9_text: "[HU] Der Akkusativ antwortet auf 'Wen oder was?' Das ist das Objekt der Aktion. Der Hund frisst das Futter. 'Das Futter' ist Akkusativ.",
    t9_b1: "[HU] Akkusativ = Wen oder was?",
    t9_b2: "[HU] Das ist das direkte Objekt.",
    t9_b3: "[HU] Nach Aktion kommt das Akkusativ-Objekt.",
    t9_inst: "[HU] Was wird gemacht?",
    t9_h1: "[HU] Finde das Objekt der Aktion!",
    t9_h2: "[HU] Der Junge sieht die Blume.",
    t9_c1: "[HU] einen", t9_c2: "[HU] einen", t9_c3: "[HU] ein", t9_c4: "[HU] eine",
    t9_sent: "[HU] ___ Apfel esse ich gern.",

    // T10: Nomen mit Umlaut in Mehrzahl
    t10_title: "[HU] Nomen mit Umlaut in Mehrzahl",
    t10_text: "[HU] Manche Nomen bekommen einen Umlaut (ä, ö, ü) in der Mehrzahl. Der Apfel → die Äpfel. Das Haus → die Häuser. Das ist eine wichtige Regel!",
    t10_b1: "[HU] Umlaut in Mehrzahl: ä, ö, ü",
    t10_b2: "[HU] Der Apfel → die Äpfel",
    t10_b3: "[HU] Das Haus → die Häuser",
    t10_inst: "[HU] Verbinde Singular und Plural!",
    t10_h1: "[HU] Welcher Plural hat einen Umlaut?",
    t10_h2: "[HU] Apfel wird zu Äpfel.",
    t10_l1: "[HU] Apfel", t10_r1: "[HU] Äpfel",
    t10_l2: "[HU] Haus", t10_r2: "[HU] Häuser",
    t10_l3: "[HU] Baum", t10_r3: "[HU] Bäume",
    t10_l4: "[HU] Mutter", t10_r4: "[HU] Mütter",

    // T11: Nomen kategorisieren
    t11_title: "[HU] Nomen kategorisieren",
    t11_text: "[HU] Nomen können in Kategorien eingeteilt werden: Menschen (Vater, Lehrer), Tiere (Hund, Vogel), Orte (Schule, Park) und Dinge (Tisch, Auto). Das hilft beim Lernen!",
    t11_b1: "[HU] Menschen: Vater, Lehrer, Kind, Freund",
    t11_b2: "[HU] Tiere: Hund, Katze, Vogel, Fisch",
    t11_b3: "[HU] Dinge: Auto, Tisch, Tasse, Ball",
    t11_inst: "[HU] Sortiere nach Kategorien!",
    t11_h1: "[HU] Ist es Mensch, Tier oder Ding?",
    t11_h2: "[HU] Der Lehrer ist ein Mensch.",
    t11_bm: "[HU] Menschen 👤", t11_bt: "[HU] Tiere 🐾", t11_bd: "[HU] Dinge 📦",
    t11_i1: "[HU] Lehrer", t11_i2: "[HU] Hund", t11_i3: "[HU] Stuhl", t11_i4: "[HU] Adler",

    // T12: Artikel & Nomen perfekt
    t12_title: "[HU] Artikel & Nomen perfekt",
    t12_text: "[HU] Der Artikel und das Nomen sind ein Paar. Sie gehören zusammen. Der Artikel gibt die Information: der (männlich), die (weiblich) oder das (sächlich). Diese Paare muss man immer zusammen lernen!",
    t12_b1: "[HU] Artikel + Nomen = Ein Paar!",
    t12_b2: "[HU] Der Artikel ist immer dabei.",
    t12_b3: "[HU] Zusammen lernen, zusammen sprechen!",
    t12_inst: "[HU] Verbinde Artikel und Nomen!",
    t12_h1: "[HU] Welcher Artikel passt?",
    t12_h2: "[HU] der Hund, die Katze, das Haus",
    t12_l1: "[HU] der", t12_r1: "[HU] Hund",
    t12_l2: "[HU] die", t12_r2: "[HU] Katze",
    t12_l3: "[HU] das", t12_r3: "[HU] Haus",
    t12_l4: "[HU] die", t12_r4: "[HU] Blume",

    // T13: Konkrete vs. abstrakte Nomen
    t13_title: "[HU] Konkrete vs. abstrakte Nomen",
    t13_text: "[HU] Es gibt zwei Arten von Nomen: Konkrete Nomen (man kann sehen/anfassen): Tisch, Stuhl, Hund. Abstrakte Nomen (man kann nicht anfassen): Freundschaft, Liebe, Angst, Freude.",
    t13_b1: "[HU] Konkret = sehen/anfassen (Tisch, Stuhl)",
    t13_b2: "[HU] Abstrakt = nicht anfassen (Liebe, Angst)",
    t13_b3: "[HU] Beide Arten sind wichtig!",
    t13_inst: "[HU] Sortiere: Konkret oder Abstrakt?",
    t13_h1: "[HU] Kann man das anfassen?",
    t13_h2: "[HU] Liebe kann man nicht anfassen.",
    t13_bc: "[HU] Konkret 👉", t13_ba: "[HU] Abstrakt 💭",
    t13_i1: "[HU] Tisch", t13_i2: "[HU] Liebe", t13_i3: "[HU] Freude", t13_i4: "[HU] Hund",

    // T14: Nomen-Detektiv spielen
    t14_title: "[HU] Nomen-Detektiv spielen",
    t14_text: "[HU] Kannst du alle Nomen in einem Text finden? Halte Ausschau nach Großbuchstaben! Aber Vorsicht: Auch das erste Wort eines Satzes ist groß. Du musst aufmerksam sein!",
    t14_b1: "[HU] Alle Nomen sind großgeschrieben.",
    t14_b2: "[HU] Achte auf Großbuchstaben!",
    t14_b3: "[HU] Der Satzanfang ist auch groß!",
    t14_inst: "[HU] Finde alle Nomen!",
    t14_h1: "[HU] Welche Wörter sind großgeschrieben?",
    t14_h2: "[HU] Das Kind spielt im Garten mit dem Hund.",
    t14_w1: "[HU] Das", t14_w2: "[HU] Kind", t14_w3: "[HU] spielt", t14_w4: "[HU] im", t14_w5: "[HU] Garten", t14_w6: "[HU] .",

    // T15: Nomen Champion Finale!
    t15_title: "[HU] Nomen Champion Finale!",
    t15_text: "[HU] Gratulieren! Du hast alle Nomen-Lektionen gelernt! Jetzt bist du ein Nomen-Champion. Du kennst die Artikel, die Mehrzahlen und die Fälle. Das ist Klasse 2 Mastery!",
    t15_b1: "[HU] Du kennst: der, die, das",
    t15_b2: "[HU] Du kannst Mehrzahlen bilden",
    t15_b3: "[HU] Du erkennst Nomen überall!",
    t15_inst: "[HU] Champion-Herausforderung!",
    t15_h1: "[HU] Baue den perfekten Satz!",
    t15_h2: "[HU] Der Hund frisst das Futter.",
    t15_f1: "[HU] Das", t15_f2: "[HU] Futter", t15_f3: "[HU] frisst", t15_f4: "[HU] der Hund", t15_f5: "[HU] .",
  
  },
  ro: {

    explorer_title: "[RO] Nomen & Artikel",

    // T1: Was ist ein Nomen?
    t1_title: "[RO] Was ist ein Nomen?",
    t1_text: "[RO] Nomen sind Wörter für Dinge, Tiere, Menschen und Orte. Sie schreiben wir immer GROSS! Der Hund, die Katze, das Haus.",
    t1_b1: "[RO] Nomen = Namen für Dinge, Tiere, Menschen",
    t1_b2: "[RO] Nomen schreiben wir immer GROSS!",
    t1_b3: "[RO] Jedes Nomen hat einen Artikel: der, die oder das",
    t1_inst: "[RO] Finde alle Nomen!",
    t1_h1: "[RO] Nomen sind immer großgeschrieben.",
    t1_h2: "[RO] Hund und Katze sind Nomen. schläft und groß sind es nicht.",
    t1_w1: "[RO] Hund", t1_w2: "[RO] schläft", t1_w3: "[RO] Katze", t1_w4: "[RO] groß",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Der, die oder das?
    t2_title: "[RO] Der, die oder das?",
    t2_text: "[RO] Jedes Nomen hat einen bestimmten Artikel: der (männlich), die (weiblich) oder das (sächlich). Diese muss man lernen!",
    t2_b1: "[RO] der → männlich (Maskulinum) 🔵",
    t2_b2: "[RO] die → weiblich (Femininum) 🔴",
    t2_b3: "[RO] das → sächlich (Neutrum) 🟢",
    t2_inst: "[RO] Sortiere: der, die oder das?",
    t2_h1: "[RO] Drei Artikel: der, die, das.",
    t2_h2: "[RO] der Hund, die Katze, das Haus",
    t2_bd: "[RO] der 🔵", t2_bdi: "[RO] die 🔴", t2_bda: "[RO] das 🟢",
    t2_i1: "[RO] Hund", t2_i2: "[RO] Katze", t2_i3: "[RO] Haus", t2_i4: "[RO] Baum", t2_i5: "[RO] Blume",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Groß oder klein? (gap-fill)
    t3_title: "[RO] Groß oder klein?",
    t3_text: "[RO] Achtung, Falle! Nomen müssen wir immer mit einem großen Anfangsbuchstaben schreiben. Wenn sie klein geschrieben sind, ist es falsch!",
    t3_b1: "[RO] Der erste Buchstabe ist GROSS.",
    t3_inst: "[RO] Welches Wort ist richtig geschrieben?",
    t3_h1: "[RO] Suche das Wort mit dem großen Anfangsbuchstaben.",
    t3_h2: "[RO] Das Wort 'Auto' schreibt man groß.",
    t3_sent: "[RO] Das ist ein schnelles ___.",
    t3_c1: "[RO] Auto", t3_c2: "[RO] auto", t3_c3: "[RO] aUto", t3_c4: "[RO] AuTo",
    // Quiz: MANUAL (specifikus szabály miatt)
    t3_q: "[RO] Wie schreiben wir Nomen?",
    t3_qa: "[RO] Am Anfang groß", t3_qb: "[RO] Immer klein", t3_qc: "[RO] Alles groß", t3_qd: "[RO] Nur am Satzende",

    // T4: Einzahl und Mehrzahl
    t4_title: "[RO] Einzahl und Mehrzahl",
    t4_text: "[RO] Gibt es ein Ding nur einmal, ist es die Einzahl (Singular). Gibt es viele davon, ist es die Mehrzahl (Plural). der Hund ➔ die Hunde.",
    t4_b1: "[RO] Einzahl = 1 (Singular)",
    t4_b2: "[RO] Mehrzahl = viele (Plural)",
    t4_inst: "[RO] Verbinde die Einzahl mit der Mehrzahl!",
    t4_h1: "[RO] Hund wird zu Hunde.",
    t4_h2: "[RO] Apfel wird zu Äpfel.",
    t4_l1: "[RO] Hund", t4_r1: "[RO] Hunde",
    t4_l2: "[RO] Katze", t4_r2: "[RO] Katzen",
    t4_l3: "[RO] Apfel", t4_r3: "[RO] Äpfel",
    t4_l4: "[RO] Haus", t4_r4: "[RO] Häuser",
    // Quiz: GENERATOR (plural)

    // T5: Nomen im Satz
    t5_title: "[RO] Nomen im Satz finden",
    t5_text: "[RO] Ein Nomen versteckt sich nicht nur am Anfang, es kann überall im Satz stehen. Aber es verrät sich durch den großen Buchstaben!",
    t5_b1: "[RO] Nomen können überall stehen.",
    t5_b2: "[RO] Sie verraten sich durch den großen Buchstaben.",
    t5_inst: "[RO] Finde das Nomen in diesem Satz!",
    t5_h1: "[RO] Wer oder was singt hier?",
    t5_h2: "[RO] Das Nomen ist 'Vogel'.",
    // Tokens for sentence display
    t5_w1: "[RO] Der", t5_w2: "[RO] kleine", t5_w3: "[RO] Vogel", t5_w4: "[RO] singt", t5_w5: "[RO] .",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Zusammengesetzte Nomen
    t6_title: "[RO] Zusammengesetzte Nomen",
    t6_text: "[RO] Wir können zwei Nomen zusammenbauen! Baum + Haus = Baumhaus. Wichtig: Der Artikel richtet sich immer nach dem LETZTEN Wort (das Haus -> das Baumhaus).",
    t6_b1: "[RO] Nomen 1 + Nomen 2 = Neues Nomen",
    t6_b2: "[RO] Artikel gehört zum letzten Wort!",
    t6_inst: "[RO] Baue das Wort zusammen!",
    t6_h1: "[RO] Wir suchen eine Tasche für die Schule.",
    t6_h2: "[RO] Schul + tasche.",
    t6_f1: "[RO] Schul", t6_f2: "[RO] tasche",
    // Quiz: MANUAL (specifikus szabályteszt)
    t6_q: "[RO] Welcher Artikel passt zu 'Hundehütte'? (die Hütte)",
    t6_qa: "[RO] die", t6_qb: "[RO] der", t6_qc: "[RO] das", t6_qd: "[RO] ein",

    // T7: Ordnung im Satz
    t7_title: "[RO] Ordnung im Satz",
    t7_text: "[RO] Ein Satz ist wie ein Puzzle. Der Großbuchstabe kommt an den Anfang, der Punkt an das Ende. Dazwischen müssen die Wörter Sinn ergeben!",
    t7_b1: "[RO] Satzanfang groß.",
    t7_b2: "[RO] Satzende = Punkt.",
    t7_inst: "[RO] Baue den Satz richtig zusammen!",
    t7_h1: "[RO] Wer macht was?",
    t7_h2: "[RO] Der Hund bellt.",
    t7_s1: "[RO] Der", t7_s2: "[RO] Hund", t7_s3: "[RO] bellt.",
    // Quiz: GENERATOR (nomen_k2) - teszteljük, felismeri-e a főnevet a kirakott mondatban

    // T8: Nomen im Nominativ
    t8_title: "[RO] Nomen im Nominativ",
    t8_text: "[RO] Der Nominativ antwortet auf 'Wer oder was?' Das ist die erste und wichtigste Fall. Das Nomen steht direkt nach dem Artikel und ist das Subjekt des Satzes.",
    t8_b1: "[RO] Nominativ = Wer oder was?",
    t8_b2: "[RO] Das Nomen ist das Subjekt.",
    t8_b3: "[RO] Beispiel: Der Hund schläft.",
    t8_inst: "[RO] Finde den Nominativ!",
    t8_h1: "[RO] Das Nomen nach dem Artikel.",
    t8_h2: "[RO] Der Hund, die Katze, das Haus.",
    t8_i1: "[RO] Hund", t8_i2: "[RO] schläft", t8_i3: "[RO] Katze", t8_i4: "[RO] Tag",

    // T9: Nomen im Akkusativ
    t9_title: "[RO] Nomen im Akkusativ",
    t9_text: "[RO] Der Akkusativ antwortet auf 'Wen oder was?' Das ist das Objekt der Aktion. Der Hund frisst das Futter. 'Das Futter' ist Akkusativ.",
    t9_b1: "[RO] Akkusativ = Wen oder was?",
    t9_b2: "[RO] Das ist das direkte Objekt.",
    t9_b3: "[RO] Nach Aktion kommt das Akkusativ-Objekt.",
    t9_inst: "[RO] Was wird gemacht?",
    t9_h1: "[RO] Finde das Objekt der Aktion!",
    t9_h2: "[RO] Der Junge sieht die Blume.",
    t9_c1: "[RO] einen", t9_c2: "[RO] einen", t9_c3: "[RO] ein", t9_c4: "[RO] eine",
    t9_sent: "[RO] ___ Apfel esse ich gern.",

    // T10: Nomen mit Umlaut in Mehrzahl
    t10_title: "[RO] Nomen mit Umlaut in Mehrzahl",
    t10_text: "[RO] Manche Nomen bekommen einen Umlaut (ä, ö, ü) in der Mehrzahl. Der Apfel → die Äpfel. Das Haus → die Häuser. Das ist eine wichtige Regel!",
    t10_b1: "[RO] Umlaut in Mehrzahl: ä, ö, ü",
    t10_b2: "[RO] Der Apfel → die Äpfel",
    t10_b3: "[RO] Das Haus → die Häuser",
    t10_inst: "[RO] Verbinde Singular und Plural!",
    t10_h1: "[RO] Welcher Plural hat einen Umlaut?",
    t10_h2: "[RO] Apfel wird zu Äpfel.",
    t10_l1: "[RO] Apfel", t10_r1: "[RO] Äpfel",
    t10_l2: "[RO] Haus", t10_r2: "[RO] Häuser",
    t10_l3: "[RO] Baum", t10_r3: "[RO] Bäume",
    t10_l4: "[RO] Mutter", t10_r4: "[RO] Mütter",

    // T11: Nomen kategorisieren
    t11_title: "[RO] Nomen kategorisieren",
    t11_text: "[RO] Nomen können in Kategorien eingeteilt werden: Menschen (Vater, Lehrer), Tiere (Hund, Vogel), Orte (Schule, Park) und Dinge (Tisch, Auto). Das hilft beim Lernen!",
    t11_b1: "[RO] Menschen: Vater, Lehrer, Kind, Freund",
    t11_b2: "[RO] Tiere: Hund, Katze, Vogel, Fisch",
    t11_b3: "[RO] Dinge: Auto, Tisch, Tasse, Ball",
    t11_inst: "[RO] Sortiere nach Kategorien!",
    t11_h1: "[RO] Ist es Mensch, Tier oder Ding?",
    t11_h2: "[RO] Der Lehrer ist ein Mensch.",
    t11_bm: "[RO] Menschen 👤", t11_bt: "[RO] Tiere 🐾", t11_bd: "[RO] Dinge 📦",
    t11_i1: "[RO] Lehrer", t11_i2: "[RO] Hund", t11_i3: "[RO] Stuhl", t11_i4: "[RO] Adler",

    // T12: Artikel & Nomen perfekt
    t12_title: "[RO] Artikel & Nomen perfekt",
    t12_text: "[RO] Der Artikel und das Nomen sind ein Paar. Sie gehören zusammen. Der Artikel gibt die Information: der (männlich), die (weiblich) oder das (sächlich). Diese Paare muss man immer zusammen lernen!",
    t12_b1: "[RO] Artikel + Nomen = Ein Paar!",
    t12_b2: "[RO] Der Artikel ist immer dabei.",
    t12_b3: "[RO] Zusammen lernen, zusammen sprechen!",
    t12_inst: "[RO] Verbinde Artikel und Nomen!",
    t12_h1: "[RO] Welcher Artikel passt?",
    t12_h2: "[RO] der Hund, die Katze, das Haus",
    t12_l1: "[RO] der", t12_r1: "[RO] Hund",
    t12_l2: "[RO] die", t12_r2: "[RO] Katze",
    t12_l3: "[RO] das", t12_r3: "[RO] Haus",
    t12_l4: "[RO] die", t12_r4: "[RO] Blume",

    // T13: Konkrete vs. abstrakte Nomen
    t13_title: "[RO] Konkrete vs. abstrakte Nomen",
    t13_text: "[RO] Es gibt zwei Arten von Nomen: Konkrete Nomen (man kann sehen/anfassen): Tisch, Stuhl, Hund. Abstrakte Nomen (man kann nicht anfassen): Freundschaft, Liebe, Angst, Freude.",
    t13_b1: "[RO] Konkret = sehen/anfassen (Tisch, Stuhl)",
    t13_b2: "[RO] Abstrakt = nicht anfassen (Liebe, Angst)",
    t13_b3: "[RO] Beide Arten sind wichtig!",
    t13_inst: "[RO] Sortiere: Konkret oder Abstrakt?",
    t13_h1: "[RO] Kann man das anfassen?",
    t13_h2: "[RO] Liebe kann man nicht anfassen.",
    t13_bc: "[RO] Konkret 👉", t13_ba: "[RO] Abstrakt 💭",
    t13_i1: "[RO] Tisch", t13_i2: "[RO] Liebe", t13_i3: "[RO] Freude", t13_i4: "[RO] Hund",

    // T14: Nomen-Detektiv spielen
    t14_title: "[RO] Nomen-Detektiv spielen",
    t14_text: "[RO] Kannst du alle Nomen in einem Text finden? Halte Ausschau nach Großbuchstaben! Aber Vorsicht: Auch das erste Wort eines Satzes ist groß. Du musst aufmerksam sein!",
    t14_b1: "[RO] Alle Nomen sind großgeschrieben.",
    t14_b2: "[RO] Achte auf Großbuchstaben!",
    t14_b3: "[RO] Der Satzanfang ist auch groß!",
    t14_inst: "[RO] Finde alle Nomen!",
    t14_h1: "[RO] Welche Wörter sind großgeschrieben?",
    t14_h2: "[RO] Das Kind spielt im Garten mit dem Hund.",
    t14_w1: "[RO] Das", t14_w2: "[RO] Kind", t14_w3: "[RO] spielt", t14_w4: "[RO] im", t14_w5: "[RO] Garten", t14_w6: "[RO] .",

    // T15: Nomen Champion Finale!
    t15_title: "[RO] Nomen Champion Finale!",
    t15_text: "[RO] Gratulieren! Du hast alle Nomen-Lektionen gelernt! Jetzt bist du ein Nomen-Champion. Du kennst die Artikel, die Mehrzahlen und die Fälle. Das ist Klasse 2 Mastery!",
    t15_b1: "[RO] Du kennst: der, die, das",
    t15_b2: "[RO] Du kannst Mehrzahlen bilden",
    t15_b3: "[RO] Du erkennst Nomen überall!",
    t15_inst: "[RO] Champion-Herausforderung!",
    t15_h1: "[RO] Baue den perfekten Satz!",
    t15_h2: "[RO] Der Hund frisst das Futter.",
    t15_f1: "[RO] Das", t15_f2: "[RO] Futter", t15_f3: "[RO] frisst", t15_f4: "[RO] der Hund", t15_f5: "[RO] .",
  
  }
};

export const NOMEN_POOL: PoolTopicDef[] = [
  // ── 1. Was ist ein Nomen? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "der Hund" }, { emoji: "🐱", label: "die Katze" }, { emoji: "🏠", label: "das Haus" }] },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0, 2], // Hund, Katze
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 2. Der, die oder das? (drag-to-bucket) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [
      { text: "der", emoji: "🔵", color: "#1E40AF", bg: "#DBEAFE" },
      { text: "die", emoji: "🔴", color: "#991B1B", bg: "#FEE2E2" },
      { text: "das", emoji: "🟢", color: "#065F46", bg: "#D1FAE5" },
    ]},
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "der", label: "t2_bd" }, { id: "die", label: "t2_bdi" }, { id: "das", label: "t2_bda" }],
      items: [
        { text: "t2_i1", bucketId: "der" }, // Hund
        { text: "t2_i2", bucketId: "die" }, // Katze
        { text: "t2_i3", bucketId: "das" }, // Haus
        { text: "t2_i4", bucketId: "der" }, // Baum
        { text: "t2_i5", bucketId: "die" }, // Blume
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "artikel_k2" },
  },

  // ── 3. Groß oder klein? (gap-fill) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "Auto", highlightChars: ["A"], color: "#10B981" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], // Auto, auto, aUto, AuTo
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Einzahl / Mehrzahl (match-pairs) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["Hund", "Hunde"], ["Haus", "Häuser"]], color: "#7C3AED" },
    bulletKeys: ["t4_b1", "t4_b2"],
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
    quiz: { generate: "plural" },
  },

  // ── 5. Nomen im Satz (highlight-text) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "sentence-display", words: ["Der", "kleine", "Vogel", "singt", "."], highlightIndices: [2], color: "#F59E0B" },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5"],
      correctIndices: [2], // Vogel
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 6. Zusammengesetzte Nomen (word-order) ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "Schul", word2: "tasche", result: "Schultasche", color: "#EC4899" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_f2", "t6_f1"], // keverve jelenik meg: tasche, Schul
      correctOrder: [1, 0], // Helyes: Schul -> tasche
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Ordnung im Satz (sentence-build) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "Der Hund bellt." }] },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_s1", "t7_s2", "t7_s3"], // Der, Hund, bellt.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 8. Nomen im Nominativ (drag-to-bucket) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "Der Nominativ", emoji: "❓", color: "#1E40AF", bg: "#DBEAFE" }] },
    bulletKeys: ["t8_b1", "t8_b2", "t8_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nominativ", label: "t8_inst" }],
      items: [
        { text: "t8_i1", bucketId: "nominativ" },
        { text: "t8_i2", bucketId: "nominativ" },
        { text: "t8_i3", bucketId: "nominativ" },
        { text: "t8_i4", bucketId: "nominativ" },
      ],
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "artikel_k2" },
  },

  // ── 9. Nomen im Akkusativ (gap-fill) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "Akkusativ", highlightChars: ["A"], color: "#EF4444" },
    bulletKeys: ["t9_b1", "t9_b2", "t9_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 0,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "zahlen_k2" },
  },

  // ── 10. Nomen mit Umlaut (match-pairs) ──────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "letter-pairs", pairs: [["Apfel", "Äpfel"], ["Haus", "Häuser"]], color: "#10B981" },
    bulletKeys: ["t10_b1", "t10_b2", "t10_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t10_l1", right: "t10_r1" },
        { left: "t10_l2", right: "t10_r2" },
        { left: "t10_l3", right: "t10_r3" },
        { left: "t10_l4", right: "t10_r4" },
      ],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "farben_k2" },
  },

  // ── 11. Nomen kategorisieren (drag-to-bucket) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "icon-grid", items: [{ emoji: "👤", label: "Menschen" }, { emoji: "🐾", label: "Tiere" }, { emoji: "📦", label: "Dinge" }] },
    bulletKeys: ["t11_b1", "t11_b2", "t11_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "mensch", label: "t11_bm" }, { id: "tier", label: "t11_bt" }, { id: "ding", label: "t11_bd" }],
      items: [
        { text: "t11_i1", bucketId: "mensch" },
        { text: "t11_i2", bucketId: "tier" },
        { text: "t11_i3", bucketId: "ding" },
        { text: "t11_i4", bucketId: "tier" },
      ],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "berufe_k2" },
  },

  // ── 12. Artikel & Nomen perfekt (match-pairs) ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "Artikel + Nomen = Paar", emoji: "💑", color: "#EC4899", bg: "#FCE7F3" }] },
    bulletKeys: ["t12_b1", "t12_b2", "t12_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t12_l1", right: "t12_r1" },
        { left: "t12_l2", right: "t12_r2" },
        { left: "t12_l3", right: "t12_r3" },
        { left: "t12_l4", right: "t12_r4" },
      ],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 13. Konkrete vs. abstrakte Nomen (drag-to-bucket) ───── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [{ text: "Konkret", emoji: "👉", color: "#10B981", bg: "#D1FAE5" }, { text: "Abstrakt", emoji: "💭", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t13_b1", "t13_b2", "t13_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "konkret", label: "t13_bc" }, { id: "abstrakt", label: "t13_ba" }],
      items: [
        { text: "t13_i1", bucketId: "konkret" },
        { text: "t13_i2", bucketId: "abstrakt" },
        { text: "t13_i3", bucketId: "abstrakt" },
        { text: "t13_i4", bucketId: "konkret" },
      ],
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "gegensaetze_k2" },
  },

  // ── 14. Nomen-Detektiv (highlight-text) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "sentence-display", words: ["Das", "Kind", "spielt", "im", "Garten", "."], highlightIndices: [0, 1, 4], color: "#F59E0B" },
    bulletKeys: ["t14_b1", "t14_b2", "t14_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6"],
      correctIndices: [0, 1, 4],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "zeit_k2" },
  },

  // ── 15. Nomen Champion Finale! (word-order) ────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Nomen Master!", bg: "#FEF3C7" },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "word-order",
      words: ["t15_f3", "t15_f2", "t15_f1", "t15_f4", "t15_f5"], // Kevert: frisst, Futter, Das, der Hund, .
      correctOrder: [2, 3, 0, 1, 4], // Das -> der Hund -> frisst -> Futter -> .
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "plural" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Verbeninsel
// Thema: Verben erkennen, Grundform (Infinitiv), Konjugation ich/du/er
// ─────────────────────────────────────────────────────────────────────────────

export const VERB_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verbeninsel",

    // T1: Was sind Verben?
    t1_title: "Was sind Verben?",
    t1_text: "Verben sagen uns, was jemand tut oder was passiert. Deshalb nennen wir sie auch Tunwörter! Beispiele: laufen 🏃, lachen 😄, schlafen 😴.",
    t1_b1: "Verben = Tunwörter.",
    t1_b2: "Sie zeigen eine Aktion oder einen Zustand.",
    t1_inst: "Finde das Verb (Tunwort)!",
    t1_h1: "Was kann man tun?",
    t1_h2: "'rennen' ist etwas, das man tun kann.",
    t1_w1: "Haus", t1_w2: "rennen", t1_w3: "und", t1_w4: "blau",
    // Quiz: GENERATOR (verben_k2)

    // T2: Nomen oder Verb?
    t2_title: "Nomen oder Verb?",
    t2_text: "Erinnerst du dich? Nomen (Dinge/Tiere) schreiben wir GROSS, Verben (Tunwörter) schreiben wir klein (außer am Satzanfang).",
    t2_b1: "Nomen = groß (Dinge, Tiere).",
    t2_b2: "Verben = klein (Aktionen).",
    t2_inst: "Sortiere: Ist es ein Nomen oder ein Verb?",
    t2_h1: "Groß = Nomen. Klein = Verb.",
    t2_h2: "Hund und Baum sind Nomen. spielen und lachen sind Verben.",
    t2_bn: "Nomen 📦", t2_bv: "Verb 🏃",
    t2_i1: "Hund", t2_i2: "spielen", t2_i3: "lachen", t2_i4: "Baum",
    // Quiz: MANUAL (szabály tesztelése)
    t2_q: "Wie schreiben wir Verben normalerweise im Satz?",
    t2_qa: "klein", t2_qb: "groß", t2_qc: "alles groß", t2_qd: "mit einem Punkt",

    // T3: Die Grundform (Infinitiv)
    t3_title: "Die Grundform (Infinitiv)",
    t3_text: "Wenn ein Verb noch nicht verändert wurde, steht es in der Grundform. Diese endet fast immer auf '-en'. Zum Beispiel: mal-en, sing-en.",
    t3_b1: "Grundform endet meist auf '-en'.",
    t3_inst: "Verbinde das Bild mit der Grundform des Verbs!",
    t3_h1: "Was tun die Leute auf den Bildern?",
    t3_h2: "Ein Buch -> lesen. Ein Bett -> schlafen.",
    t3_l1: "📖", t3_r1: "lesen",
    t3_l2: "💤", t3_r2: "schlafen",
    t3_l3: "🎨", t3_r3: "malen",
    t3_l4: "🏃", t3_r4: "laufen",
    // Quiz: MANUAL
    t3_q: "Wie endet die Grundform der meisten Verben?",
    t3_qa: "-en", t3_qb: "-er", t3_qc: "-st", t3_qd: "-t",

    // T4: Ich und Du (Konjugation)
    t4_title: "Ich und Du",
    t4_text: "Verben verändern sich! Wenn ich etwas tue, endet das Verb meistens auf '-e' (ich spiel-e). Wenn du etwas tust, endet es auf '-st' (du spiel-st).",
    t4_b1: "ich → -e (ich lache)",
    t4_b2: "du → -st (du lachst)",
    t4_inst: "Welches Verb passt in die Lücke?",
    t4_h1: "Das Wort davor ist 'Ich'.",
    t4_h2: "Bei 'Ich' endet das Verb auf '-e'.",
    t4_sent: "Ich ___ im Garten.",
    t4_c1: "spiele", t4_c2: "spielst", t4_c3: "spielt", t4_c4: "spielen",
    // Quiz: MANUAL
    t4_q: "Was ist richtig?",
    t4_qa: "du lernst", t4_qb: "du lerne", t4_qc: "du lernt", t4_qd: "du lernen",

    // T5: Er, sie, es (Konjugation)
    t5_title: "Er, sie, es",
    t5_text: "Wenn jemand anderes etwas tut (er, sie oder es), bekommt das Verb die Endung '-t'. Zum Beispiel: er lach-t, sie tanz-t, es regne-t.",
    t5_b1: "er/sie/es → -t",
    t5_inst: "Baue den Satz richtig zusammen!",
    t5_h1: "Wer macht was?",
    t5_h2: "Er trinkt Wasser.",
    t5_f1: "Er", t5_f2: "trinkt", t5_f3: "Wasser.",
    // Quiz: MANUAL
    t5_q: "Welche Endung bekommt das Verb bei 'sie (Einzahl)'?",
    t5_qa: "-t", t5_qb: "-e", t5_qc: "-st", t5_qd: "-en",

    // T6: Achtung, Vokalwechsel!
    t6_title: "Achtung, Vokalwechsel!",
    t6_text: "Manche Verben sind stark. Sie verändern nicht nur die Endung, sondern auch den Buchstaben in der Mitte! Aus 'a' wird oft 'ä' (ich laufe -> du läufst).",
    t6_b1: "Vokal in der Mitte ändert sich.",
    t6_b2: "ich fahre → du fährst",
    t6_inst: "Ordne die Wörter in die richtige Reihenfolge!",
    t6_h1: "Der Satz heißt: Du fährst schnell.",
    t6_h2: "Du -> fährst -> schnell.",
    t6_o1: "Du", t6_o2: "fährst", t6_o3: "schnell.",
    // Quiz: MANUAL
    t6_q: "Was wird aus 'ich schlafe'?",
    t6_qa: "du schläfst", t6_qb: "du schlafst", t6_qc: "du schlafe", t6_qd: "du schliefe",

    // T7: Das Verb an zweiter Stelle
    t7_title: "Das Verb an Platz 2",
    t7_text: "In einem normalen Aussagesatz hat das Verb einen ganz festen Platz: Es steht immer an der ZWEITEN Stelle! 'Der Hund rennt schnell.'",
    t7_b1: "Das Verb steht auf Platz 2.",
    t7_inst: "Finde das Verb in diesem Satz!",
    t7_h1: "Welches Wort sagt, was das Kind tut?",
    t7_h2: "Das Verb ist 'spielt'. Es steht an 2. Stelle.",
    t7_w1: "Das Kind", t7_w2: "spielt", t7_w3: "Ball", t7_w4: ".",
    // Quiz: GENERATOR (verben_k2)

    // T8-T15: Erweiterte Verbenlektionen
    t8_title: "Verben im Präsens",
    t8_text: "Das Präsens ist die Gegenwart. Es ist die Zeit, in der etwas gerade jetzt passiert. Beispiele: Ich spiele, du lachst, sie tanzt. Diese Zeit benutzen wir am meisten!",
    t8_b1: "Präsens = Gegenwart",
    t8_b2: "Das Verb beschreibt, was jetzt passiert.",
    t8_b3: "Beispiel: Der Hund rennt schnell.",
    t8_inst: "Finde das Verb im Präsens!",
    t8_h1: "Was passiert gerade jetzt?",
    t8_h2: "laufen, spielen, lachen sind im Präsens.",
    t8_i1: "rennt", t8_i2: "rannte", t8_i3: "springt", t8_i4: "sprang",

    t9_title: "Verben im Präteritum",
    t9_text: "Das Präteritum ist die Vergangenheit. Es beschreibt, was schon vorbei ist. Der Hund rannte schnell. Ich spielte gestern. Diese Zeit nutzen wir für Geschichten!",
    t9_b1: "Präteritum = Vergangenheit",
    t9_b2: "Das Verb endet oft auf -te oder -ete.",
    t9_b3: "Beispiel: Ich spielte einen Satz Tennis.",
    t9_inst: "Welches Verb ist Vergangenheit?",
    t9_h1: "Was ist schon vorbei?",
    t9_h2: "spielte, lachte, tanzte sind Vergangenheit.",
    t9_c1: "spielte", t9_c2: "spielen", t9_c3: "spielst", t9_c4: "spiels",
    t9_sent: "Gestern ___ ich mit meinem Freund.",

    t10_title: "Unregelmäßige Verben",
    t10_text: "Manche Verben sind unregelmäßig oder 'stark'. Sie verändern sich auf besondere Weise. Beispiel: sein → bin, bist, ist. oder: gehen → gehe, gehst, geht. Diese Verben muss man auswendig lernen!",
    t10_b1: "Unregelmäßig = ändert sich besonders",
    t10_b2: "sein, haben, gehen sind unregelmäßig.",
    t10_b3: "Diese Verben muss man auswendig lernen!",
    t10_inst: "Verbinde Infinitiv und Präsens!",
    t10_h1: "Wie sind die verschiedenen Formen?",
    t10_h2: "sein → bin, bist, ist. gehen → gehe, gehst, geht.",
    t10_l1: "sein", t10_r1: "bin",
    t10_l2: "gehen", t10_r2: "gehe",
    t10_l3: "haben", t10_r3: "habe",
    t10_l4: "kommen", t10_r4: "komme",

    t11_title: "Verb + Akkusativ (Objekt)",
    t11_text: "Manche Verben brauchen ein Objekt im Akkusativ. Beispiel: 'Ich esse einen Apfel.' Das Verb 'essen' braucht das Objekt 'einen Apfel' (Akkusativ). Ohne Objekt ist der Satz unvollständig!",
    t11_b1: "Verb + Akkusativ-Objekt",
    t11_b2: "Beispiel: Ich esse einen Apfel.",
    t11_b3: "Das Objekt antwortet auf: Wen oder was?",
    t11_inst: "Finde das Objekt!",
    t11_h1: "Wen oder was macht das Verb?",
    t11_h2: "Ich sehe die Katze. Die Katze ist das Objekt.",
    t11_bv: "Verb 🎬", t11_bo: "Objekt 📦",
    t11_i1: "essen", t11_i2: "einen Apfel", t11_i3: "laufen", t11_i4: "das Haus",

    t12_title: "Verben im Imperativ",
    t12_text: "Der Imperativ ist Befehl oder Bitte. Beispiel: 'Laufe schnell!' oder 'Bitte komm her!' Wir brauchen das -e am Anfang nicht. Die Form ist ganz einfach!",
    t12_b1: "Imperativ = Befehl oder Bitte",
    t12_b2: "Beispiel: Spielen! Laufen! Komm!",
    t12_b3: "Oft brauchen wir das -e nicht.",
    t12_inst: "Verbinde Infinitiv und Imperativ!",
    t12_h1: "Wie sagt man einen Befehl?",
    t12_h2: "spielen → Spiel! laufen → Lauf!",
    t12_l1: "spielen", t12_r1: "Spiel!",
    t12_l2: "laufen", t12_r2: "Lauf!",
    t12_l3: "lachen", t12_r3: "Lach!",
    t12_l4: "kommen", t12_r4: "Komm!",

    t13_title: "Verb + Dativ (indirektes Objekt)",
    t13_text: "Manche Verben brauchen ein Dativ-Objekt. Beispiel: 'Ich helfe dem Hund.' Das Verb 'helfen' braucht Dativ (dem, der, dem). Diese Verben sind wichtig!",
    t13_b1: "Verb + Dativ-Objekt",
    t13_b2: "Beispiel: Ich helfe dem Hund.",
    t13_b3: "Das Dativ-Objekt antwortet auf: Wem?",
    t13_inst: "Sortiere: Akkusativ oder Dativ?",
    t13_h1: "Antwortet das Objekt auf Wen/Was oder Wem?",
    t13_h2: "Ich sehe den Hund (Akkusativ). Ich helfe dem Hund (Dativ).",
    t13_ba: "Akkusativ 📦", t13_bd: "Dativ 🤝",
    t13_i1: "Ich liebe dich", t13_i2: "Ich helfe dir", t13_i3: "Ich sehe ihn", t13_i4: "Ich vertraue dir",

    t14_title: "Verb-Familien",
    t14_text: "Verben können Familien bilden! Beispiel: spielen, abspielen, vorspielen, mitspielen. Sie haben alle das Verb 'spielen' als Basis, aber unterschiedliche Vorsilben (Präfixe). Das hilft neue Verben zu verstehen!",
    t14_b1: "Verb + Präfix = Neue Verben",
    t14_b2: "Beispiel: spielen → abspielen, vorspielen",
    t14_b3: "Das Basis-Verb ist immer dabei!",
    t14_inst: "Finde die Verb-Familie!",
    t14_h1: "Welche Wörter gehören zur Familie?",
    t14_h2: "spielen, abspielen, vorspielen, Mitspieler.",
    t14_w1: "spielen", t14_w2: "abspielen", t14_w3: "Musik", t14_w4: ".",

    t15_title: "Verb Champion Finale!",
    t15_text: "Gratulieren! Du kennst jetzt viele Verben und ihre Besonderheiten. Du verstehst Präsens, Präteritum, Imperativ und die Objekte. Du bist ein echter Verb-Master!",
    t15_b1: "Du kennst Präsens und Präteritum",
    t15_b2: "Du verstehst Akkusativ und Dativ",
    t15_b3: "Du erkennst Verben überall!",
    t15_inst: "Verb-Champion-Herausforderung!",
    t15_h1: "Baue einen perfekten Satz mit Verb!",
    t15_h2: "Der Hund rennt schnell.",
    t15_f1: "Der Hund", t15_f2: "rennt", t15_f3: "schnell", t15_f4: ".",
  },
  en: {

    explorer_title: "[EN] Verbeninsel",

    // T1: Was sind Verben?
    t1_title: "[EN] Was sind Verben?",
    t1_text: "[EN] Verben sagen uns, was jemand tut oder was passiert. Deshalb nennen wir sie auch Tunwörter! Beispiele: laufen 🏃, lachen 😄, schlafen 😴.",
    t1_b1: "[EN] Verben = Tunwörter.",
    t1_b2: "[EN] Sie zeigen eine Aktion oder einen Zustand.",
    t1_inst: "[EN] Finde das Verb (Tunwort)!",
    t1_h1: "[EN] Was kann man tun?",
    t1_h2: "[EN] 'rennen' ist etwas, das man tun kann.",
    t1_w1: "[EN] Haus", t1_w2: "[EN] rennen", t1_w3: "[EN] und", t1_w4: "[EN] blau",
    // Quiz: GENERATOR (verben_k2)

    // T2: Nomen oder Verb?
    t2_title: "[EN] Nomen oder Verb?",
    t2_text: "[EN] Erinnerst du dich? Nomen (Dinge/Tiere) schreiben wir GROSS, Verben (Tunwörter) schreiben wir klein (außer am Satzanfang).",
    t2_b1: "[EN] Nomen = groß (Dinge, Tiere).",
    t2_b2: "[EN] Verben = klein (Aktionen).",
    t2_inst: "[EN] Sortiere: Ist es ein Nomen oder ein Verb?",
    t2_h1: "[EN] Groß = Nomen. Klein = Verb.",
    t2_h2: "[EN] Hund und Baum sind Nomen. spielen und lachen sind Verben.",
    t2_bn: "[EN] Nomen 📦", t2_bv: "[EN] Verb 🏃",
    t2_i1: "[EN] Hund", t2_i2: "[EN] spielen", t2_i3: "[EN] lachen", t2_i4: "[EN] Baum",
    // Quiz: MANUAL (szabály tesztelése)
    t2_q: "[EN] Wie schreiben wir Verben normalerweise im Satz?",
    t2_qa: "[EN] klein", t2_qb: "[EN] groß", t2_qc: "[EN] alles groß", t2_qd: "[EN] mit einem Punkt",

    // T3: Die Grundform (Infinitiv)
    t3_title: "[EN] Die Grundform (Infinitiv)",
    t3_text: "[EN] Wenn ein Verb noch nicht verändert wurde, steht es in der Grundform. Diese endet fast immer auf '-en'. Zum Beispiel: mal-en, sing-en.",
    t3_b1: "[EN] Grundform endet meist auf '-en'.",
    t3_inst: "[EN] Verbinde das Bild mit der Grundform des Verbs!",
    t3_h1: "[EN] Was tun die Leute auf den Bildern?",
    t3_h2: "[EN] Ein Buch -> lesen. Ein Bett -> schlafen.",
    t3_l1: "[EN] 📖", t3_r1: "[EN] lesen",
    t3_l2: "[EN] 💤", t3_r2: "[EN] schlafen",
    t3_l3: "[EN] 🎨", t3_r3: "[EN] malen",
    t3_l4: "[EN] 🏃", t3_r4: "[EN] laufen",
    // Quiz: MANUAL
    t3_q: "[EN] Wie endet die Grundform der meisten Verben?",
    t3_qa: "[EN] -en", t3_qb: "[EN] -er", t3_qc: "[EN] -st", t3_qd: "[EN] -t",

    // T4: Ich und Du (Konjugation)
    t4_title: "[EN] Ich und Du",
    t4_text: "[EN] Verben verändern sich! Wenn ich etwas tue, endet das Verb meistens auf '-e' (ich spiel-e). Wenn du etwas tust, endet es auf '-st' (du spiel-st).",
    t4_b1: "[EN] ich → -e (ich lache)",
    t4_b2: "[EN] du → -st (du lachst)",
    t4_inst: "[EN] Welches Verb passt in die Lücke?",
    t4_h1: "[EN] Das Wort davor ist 'Ich'.",
    t4_h2: "[EN] Bei 'Ich' endet das Verb auf '-e'.",
    t4_sent: "[EN] Ich ___ im Garten.",
    t4_c1: "[EN] spiele", t4_c2: "[EN] spielst", t4_c3: "[EN] spielt", t4_c4: "[EN] spielen",
    // Quiz: MANUAL
    t4_q: "[EN] Was ist richtig?",
    t4_qa: "[EN] du lernst", t4_qb: "[EN] du lerne", t4_qc: "[EN] du lernt", t4_qd: "[EN] du lernen",

    // T5: Er, sie, es (Konjugation)
    t5_title: "[EN] Er, sie, es",
    t5_text: "[EN] Wenn jemand anderes etwas tut (er, sie oder es), bekommt das Verb die Endung '-t'. Zum Beispiel: er lach-t, sie tanz-t, es regne-t.",
    t5_b1: "[EN] er/sie/es → -t",
    t5_inst: "[EN] Baue den Satz richtig zusammen!",
    t5_h1: "[EN] Wer macht was?",
    t5_h2: "[EN] Er trinkt Wasser.",
    t5_f1: "[EN] Er", t5_f2: "[EN] trinkt", t5_f3: "[EN] Wasser.",
    // Quiz: MANUAL
    t5_q: "[EN] Welche Endung bekommt das Verb bei 'sie (Einzahl)'?",
    t5_qa: "[EN] -t", t5_qb: "[EN] -e", t5_qc: "[EN] -st", t5_qd: "[EN] -en",

    // T6: Achtung, Vokalwechsel!
    t6_title: "[EN] Achtung, Vokalwechsel!",
    t6_text: "[EN] Manche Verben sind stark. Sie verändern nicht nur die Endung, sondern auch den Buchstaben in der Mitte! Aus 'a' wird oft 'ä' (ich laufe -> du läufst).",
    t6_b1: "[EN] Vokal in der Mitte ändert sich.",
    t6_b2: "[EN] ich fahre → du fährst",
    t6_inst: "[EN] Ordne die Wörter in die richtige Reihenfolge!",
    t6_h1: "[EN] Der Satz heißt: Du fährst schnell.",
    t6_h2: "[EN] Du -> fährst -> schnell.",
    t6_o1: "[EN] Du", t6_o2: "[EN] fährst", t6_o3: "[EN] schnell.",
    // Quiz: MANUAL
    t6_q: "[EN] Was wird aus 'ich schlafe'?",
    t6_qa: "[EN] du schläfst", t6_qb: "[EN] du schlafst", t6_qc: "[EN] du schlafe", t6_qd: "[EN] du schliefe",

    // T7: Das Verb an zweiter Stelle
    t7_title: "[EN] Das Verb an Platz 2",
    t7_text: "[EN] In einem normalen Aussagesatz hat das Verb einen ganz festen Platz: Es steht immer an der ZWEITEN Stelle! 'Der Hund rennt schnell.'",
    t7_b1: "[EN] Das Verb steht auf Platz 2.",
    t7_inst: "[EN] Finde das Verb in diesem Satz!",
    t7_h1: "[EN] Welches Wort sagt, was das Kind tut?",
    t7_h2: "[EN] Das Verb ist 'spielt'. Es steht an 2. Stelle.",
    t7_w1: "[EN] Das Kind", t7_w2: "[EN] spielt", t7_w3: "[EN] Ball", t7_w4: "[EN] .",
    // Quiz: GENERATOR (verben_k2)

    // T8-T15: Erweiterte Verbenlektionen
    t8_title: "[EN] Verben im Präsens",
    t8_text: "[EN] Das Präsens ist die Gegenwart. Es ist die Zeit, in der etwas gerade jetzt passiert. Beispiele: Ich spiele, du lachst, sie tanzt. Diese Zeit benutzen wir am meisten!",
    t8_b1: "[EN] Präsens = Gegenwart",
    t8_b2: "[EN] Das Verb beschreibt, was jetzt passiert.",
    t8_b3: "[EN] Beispiel: Der Hund rennt schnell.",
    t8_inst: "[EN] Finde das Verb im Präsens!",
    t8_h1: "[EN] Was passiert gerade jetzt?",
    t8_h2: "[EN] laufen, spielen, lachen sind im Präsens.",
    t8_i1: "[EN] rennt", t8_i2: "[EN] rannte", t8_i3: "[EN] springt", t8_i4: "[EN] sprang",

    t9_title: "[EN] Verben im Präteritum",
    t9_text: "[EN] Das Präteritum ist die Vergangenheit. Es beschreibt, was schon vorbei ist. Der Hund rannte schnell. Ich spielte gestern. Diese Zeit nutzen wir für Geschichten!",
    t9_b1: "[EN] Präteritum = Vergangenheit",
    t9_b2: "[EN] Das Verb endet oft auf -te oder -ete.",
    t9_b3: "[EN] Beispiel: Ich spielte einen Satz Tennis.",
    t9_inst: "[EN] Welches Verb ist Vergangenheit?",
    t9_h1: "[EN] Was ist schon vorbei?",
    t9_h2: "[EN] spielte, lachte, tanzte sind Vergangenheit.",
    t9_c1: "[EN] spielte", t9_c2: "[EN] spielen", t9_c3: "[EN] spielst", t9_c4: "[EN] spiels",
    t9_sent: "[EN] Gestern ___ ich mit meinem Freund.",

    t10_title: "[EN] Unregelmäßige Verben",
    t10_text: "[EN] Manche Verben sind unregelmäßig oder 'stark'. Sie verändern sich auf besondere Weise. Beispiel: sein → bin, bist, ist. oder: gehen → gehe, gehst, geht. Diese Verben muss man auswendig lernen!",
    t10_b1: "[EN] Unregelmäßig = ändert sich besonders",
    t10_b2: "[EN] sein, haben, gehen sind unregelmäßig.",
    t10_b3: "[EN] Diese Verben muss man auswendig lernen!",
    t10_inst: "[EN] Verbinde Infinitiv und Präsens!",
    t10_h1: "[EN] Wie sind die verschiedenen Formen?",
    t10_h2: "[EN] sein → bin, bist, ist. gehen → gehe, gehst, geht.",
    t10_l1: "[EN] sein", t10_r1: "[EN] bin",
    t10_l2: "[EN] gehen", t10_r2: "[EN] gehe",
    t10_l3: "[EN] haben", t10_r3: "[EN] habe",
    t10_l4: "[EN] kommen", t10_r4: "[EN] komme",

    t11_title: "[EN] Verb + Akkusativ (Objekt)",
    t11_text: "[EN] Manche Verben brauchen ein Objekt im Akkusativ. Beispiel: 'Ich esse einen Apfel.' Das Verb 'essen' braucht das Objekt 'einen Apfel' (Akkusativ). Ohne Objekt ist der Satz unvollständig!",
    t11_b1: "[EN] Verb + Akkusativ-Objekt",
    t11_b2: "[EN] Beispiel: Ich esse einen Apfel.",
    t11_b3: "[EN] Das Objekt antwortet auf: Wen oder was?",
    t11_inst: "[EN] Finde das Objekt!",
    t11_h1: "[EN] Wen oder was macht das Verb?",
    t11_h2: "[EN] Ich sehe die Katze. Die Katze ist das Objekt.",
    t11_bv: "[EN] Verb 🎬", t11_bo: "[EN] Objekt 📦",
    t11_i1: "[EN] essen", t11_i2: "[EN] einen Apfel", t11_i3: "[EN] laufen", t11_i4: "[EN] das Haus",

    t12_title: "[EN] Verben im Imperativ",
    t12_text: "[EN] Der Imperativ ist Befehl oder Bitte. Beispiel: 'Laufe schnell!' oder 'Bitte komm her!' Wir brauchen das -e am Anfang nicht. Die Form ist ganz einfach!",
    t12_b1: "[EN] Imperativ = Befehl oder Bitte",
    t12_b2: "[EN] Beispiel: Spielen! Laufen! Komm!",
    t12_b3: "[EN] Oft brauchen wir das -e nicht.",
    t12_inst: "[EN] Verbinde Infinitiv und Imperativ!",
    t12_h1: "[EN] Wie sagt man einen Befehl?",
    t12_h2: "[EN] spielen → Spiel! laufen → Lauf!",
    t12_l1: "[EN] spielen", t12_r1: "[EN] Spiel!",
    t12_l2: "[EN] laufen", t12_r2: "[EN] Lauf!",
    t12_l3: "[EN] lachen", t12_r3: "[EN] Lach!",
    t12_l4: "[EN] kommen", t12_r4: "[EN] Komm!",

    t13_title: "[EN] Verb + Dativ (indirektes Objekt)",
    t13_text: "[EN] Manche Verben brauchen ein Dativ-Objekt. Beispiel: 'Ich helfe dem Hund.' Das Verb 'helfen' braucht Dativ (dem, der, dem). Diese Verben sind wichtig!",
    t13_b1: "[EN] Verb + Dativ-Objekt",
    t13_b2: "[EN] Beispiel: Ich helfe dem Hund.",
    t13_b3: "[EN] Das Dativ-Objekt antwortet auf: Wem?",
    t13_inst: "[EN] Sortiere: Akkusativ oder Dativ?",
    t13_h1: "[EN] Antwortet das Objekt auf Wen/Was oder Wem?",
    t13_h2: "[EN] Ich sehe den Hund (Akkusativ). Ich helfe dem Hund (Dativ).",
    t13_ba: "[EN] Akkusativ 📦", t13_bd: "[EN] Dativ 🤝",
    t13_i1: "[EN] Ich liebe dich", t13_i2: "[EN] Ich helfe dir", t13_i3: "[EN] Ich sehe ihn", t13_i4: "[EN] Ich vertraue dir",

    t14_title: "[EN] Verb-Familien",
    t14_text: "[EN] Verben können Familien bilden! Beispiel: spielen, abspielen, vorspielen, mitspielen. Sie haben alle das Verb 'spielen' als Basis, aber unterschiedliche Vorsilben (Präfixe). Das hilft neue Verben zu verstehen!",
    t14_b1: "[EN] Verb + Präfix = Neue Verben",
    t14_b2: "[EN] Beispiel: spielen → abspielen, vorspielen",
    t14_b3: "[EN] Das Basis-Verb ist immer dabei!",
    t14_inst: "[EN] Finde die Verb-Familie!",
    t14_h1: "[EN] Welche Wörter gehören zur Familie?",
    t14_h2: "[EN] spielen, abspielen, vorspielen, Mitspieler.",
    t14_w1: "[EN] spielen", t14_w2: "[EN] abspielen", t14_w3: "[EN] Musik", t14_w4: "[EN] .",

    t15_title: "[EN] Verb Champion Finale!",
    t15_text: "[EN] Gratulieren! Du kennst jetzt viele Verben und ihre Besonderheiten. Du verstehst Präsens, Präteritum, Imperativ und die Objekte. Du bist ein echter Verb-Master!",
    t15_b1: "[EN] Du kennst Präsens und Präteritum",
    t15_b2: "[EN] Du verstehst Akkusativ und Dativ",
    t15_b3: "[EN] Du erkennst Verben überall!",
    t15_inst: "[EN] Verb-Champion-Herausforderung!",
    t15_h1: "[EN] Baue einen perfekten Satz mit Verb!",
    t15_h2: "[EN] Der Hund rennt schnell.",
    t15_f1: "[EN] Der Hund", t15_f2: "[EN] rennt", t15_f3: "[EN] schnell", t15_f4: "[EN] .",
  
  },
  hu: {

    explorer_title: "[HU] Verbeninsel",

    // T1: Was sind Verben?
    t1_title: "[HU] Was sind Verben?",
    t1_text: "[HU] Verben sagen uns, was jemand tut oder was passiert. Deshalb nennen wir sie auch Tunwörter! Beispiele: laufen 🏃, lachen 😄, schlafen 😴.",
    t1_b1: "[HU] Verben = Tunwörter.",
    t1_b2: "[HU] Sie zeigen eine Aktion oder einen Zustand.",
    t1_inst: "[HU] Finde das Verb (Tunwort)!",
    t1_h1: "[HU] Was kann man tun?",
    t1_h2: "[HU] 'rennen' ist etwas, das man tun kann.",
    t1_w1: "[HU] Haus", t1_w2: "[HU] rennen", t1_w3: "[HU] und", t1_w4: "[HU] blau",
    // Quiz: GENERATOR (verben_k2)

    // T2: Nomen oder Verb?
    t2_title: "[HU] Nomen oder Verb?",
    t2_text: "[HU] Erinnerst du dich? Nomen (Dinge/Tiere) schreiben wir GROSS, Verben (Tunwörter) schreiben wir klein (außer am Satzanfang).",
    t2_b1: "[HU] Nomen = groß (Dinge, Tiere).",
    t2_b2: "[HU] Verben = klein (Aktionen).",
    t2_inst: "[HU] Sortiere: Ist es ein Nomen oder ein Verb?",
    t2_h1: "[HU] Groß = Nomen. Klein = Verb.",
    t2_h2: "[HU] Hund und Baum sind Nomen. spielen und lachen sind Verben.",
    t2_bn: "[HU] Nomen 📦", t2_bv: "[HU] Verb 🏃",
    t2_i1: "[HU] Hund", t2_i2: "[HU] spielen", t2_i3: "[HU] lachen", t2_i4: "[HU] Baum",
    // Quiz: MANUAL (szabály tesztelése)
    t2_q: "[HU] Wie schreiben wir Verben normalerweise im Satz?",
    t2_qa: "[HU] klein", t2_qb: "[HU] groß", t2_qc: "[HU] alles groß", t2_qd: "[HU] mit einem Punkt",

    // T3: Die Grundform (Infinitiv)
    t3_title: "[HU] Die Grundform (Infinitiv)",
    t3_text: "[HU] Wenn ein Verb noch nicht verändert wurde, steht es in der Grundform. Diese endet fast immer auf '-en'. Zum Beispiel: mal-en, sing-en.",
    t3_b1: "[HU] Grundform endet meist auf '-en'.",
    t3_inst: "[HU] Verbinde das Bild mit der Grundform des Verbs!",
    t3_h1: "[HU] Was tun die Leute auf den Bildern?",
    t3_h2: "[HU] Ein Buch -> lesen. Ein Bett -> schlafen.",
    t3_l1: "[HU] 📖", t3_r1: "[HU] lesen",
    t3_l2: "[HU] 💤", t3_r2: "[HU] schlafen",
    t3_l3: "[HU] 🎨", t3_r3: "[HU] malen",
    t3_l4: "[HU] 🏃", t3_r4: "[HU] laufen",
    // Quiz: MANUAL
    t3_q: "[HU] Wie endet die Grundform der meisten Verben?",
    t3_qa: "[HU] -en", t3_qb: "[HU] -er", t3_qc: "[HU] -st", t3_qd: "[HU] -t",

    // T4: Ich und Du (Konjugation)
    t4_title: "[HU] Ich und Du",
    t4_text: "[HU] Verben verändern sich! Wenn ich etwas tue, endet das Verb meistens auf '-e' (ich spiel-e). Wenn du etwas tust, endet es auf '-st' (du spiel-st).",
    t4_b1: "[HU] ich → -e (ich lache)",
    t4_b2: "[HU] du → -st (du lachst)",
    t4_inst: "[HU] Welches Verb passt in die Lücke?",
    t4_h1: "[HU] Das Wort davor ist 'Ich'.",
    t4_h2: "[HU] Bei 'Ich' endet das Verb auf '-e'.",
    t4_sent: "[HU] Ich ___ im Garten.",
    t4_c1: "[HU] spiele", t4_c2: "[HU] spielst", t4_c3: "[HU] spielt", t4_c4: "[HU] spielen",
    // Quiz: MANUAL
    t4_q: "[HU] Was ist richtig?",
    t4_qa: "[HU] du lernst", t4_qb: "[HU] du lerne", t4_qc: "[HU] du lernt", t4_qd: "[HU] du lernen",

    // T5: Er, sie, es (Konjugation)
    t5_title: "[HU] Er, sie, es",
    t5_text: "[HU] Wenn jemand anderes etwas tut (er, sie oder es), bekommt das Verb die Endung '-t'. Zum Beispiel: er lach-t, sie tanz-t, es regne-t.",
    t5_b1: "[HU] er/sie/es → -t",
    t5_inst: "[HU] Baue den Satz richtig zusammen!",
    t5_h1: "[HU] Wer macht was?",
    t5_h2: "[HU] Er trinkt Wasser.",
    t5_f1: "[HU] Er", t5_f2: "[HU] trinkt", t5_f3: "[HU] Wasser.",
    // Quiz: MANUAL
    t5_q: "[HU] Welche Endung bekommt das Verb bei 'sie (Einzahl)'?",
    t5_qa: "[HU] -t", t5_qb: "[HU] -e", t5_qc: "[HU] -st", t5_qd: "[HU] -en",

    // T6: Achtung, Vokalwechsel!
    t6_title: "[HU] Achtung, Vokalwechsel!",
    t6_text: "[HU] Manche Verben sind stark. Sie verändern nicht nur die Endung, sondern auch den Buchstaben in der Mitte! Aus 'a' wird oft 'ä' (ich laufe -> du läufst).",
    t6_b1: "[HU] Vokal in der Mitte ändert sich.",
    t6_b2: "[HU] ich fahre → du fährst",
    t6_inst: "[HU] Ordne die Wörter in die richtige Reihenfolge!",
    t6_h1: "[HU] Der Satz heißt: Du fährst schnell.",
    t6_h2: "[HU] Du -> fährst -> schnell.",
    t6_o1: "[HU] Du", t6_o2: "[HU] fährst", t6_o3: "[HU] schnell.",
    // Quiz: MANUAL
    t6_q: "[HU] Was wird aus 'ich schlafe'?",
    t6_qa: "[HU] du schläfst", t6_qb: "[HU] du schlafst", t6_qc: "[HU] du schlafe", t6_qd: "[HU] du schliefe",

    // T7: Das Verb an zweiter Stelle
    t7_title: "[HU] Das Verb an Platz 2",
    t7_text: "[HU] In einem normalen Aussagesatz hat das Verb einen ganz festen Platz: Es steht immer an der ZWEITEN Stelle! 'Der Hund rennt schnell.'",
    t7_b1: "[HU] Das Verb steht auf Platz 2.",
    t7_inst: "[HU] Finde das Verb in diesem Satz!",
    t7_h1: "[HU] Welches Wort sagt, was das Kind tut?",
    t7_h2: "[HU] Das Verb ist 'spielt'. Es steht an 2. Stelle.",
    t7_w1: "[HU] Das Kind", t7_w2: "[HU] spielt", t7_w3: "[HU] Ball", t7_w4: "[HU] .",
    // Quiz: GENERATOR (verben_k2)

    // T8-T15: Erweiterte Verbenlektionen
    t8_title: "[HU] Verben im Präsens",
    t8_text: "[HU] Das Präsens ist die Gegenwart. Es ist die Zeit, in der etwas gerade jetzt passiert. Beispiele: Ich spiele, du lachst, sie tanzt. Diese Zeit benutzen wir am meisten!",
    t8_b1: "[HU] Präsens = Gegenwart",
    t8_b2: "[HU] Das Verb beschreibt, was jetzt passiert.",
    t8_b3: "[HU] Beispiel: Der Hund rennt schnell.",
    t8_inst: "[HU] Finde das Verb im Präsens!",
    t8_h1: "[HU] Was passiert gerade jetzt?",
    t8_h2: "[HU] laufen, spielen, lachen sind im Präsens.",
    t8_i1: "[HU] rennt", t8_i2: "[HU] rannte", t8_i3: "[HU] springt", t8_i4: "[HU] sprang",

    t9_title: "[HU] Verben im Präteritum",
    t9_text: "[HU] Das Präteritum ist die Vergangenheit. Es beschreibt, was schon vorbei ist. Der Hund rannte schnell. Ich spielte gestern. Diese Zeit nutzen wir für Geschichten!",
    t9_b1: "[HU] Präteritum = Vergangenheit",
    t9_b2: "[HU] Das Verb endet oft auf -te oder -ete.",
    t9_b3: "[HU] Beispiel: Ich spielte einen Satz Tennis.",
    t9_inst: "[HU] Welches Verb ist Vergangenheit?",
    t9_h1: "[HU] Was ist schon vorbei?",
    t9_h2: "[HU] spielte, lachte, tanzte sind Vergangenheit.",
    t9_c1: "[HU] spielte", t9_c2: "[HU] spielen", t9_c3: "[HU] spielst", t9_c4: "[HU] spiels",
    t9_sent: "[HU] Gestern ___ ich mit meinem Freund.",

    t10_title: "[HU] Unregelmäßige Verben",
    t10_text: "[HU] Manche Verben sind unregelmäßig oder 'stark'. Sie verändern sich auf besondere Weise. Beispiel: sein → bin, bist, ist. oder: gehen → gehe, gehst, geht. Diese Verben muss man auswendig lernen!",
    t10_b1: "[HU] Unregelmäßig = ändert sich besonders",
    t10_b2: "[HU] sein, haben, gehen sind unregelmäßig.",
    t10_b3: "[HU] Diese Verben muss man auswendig lernen!",
    t10_inst: "[HU] Verbinde Infinitiv und Präsens!",
    t10_h1: "[HU] Wie sind die verschiedenen Formen?",
    t10_h2: "[HU] sein → bin, bist, ist. gehen → gehe, gehst, geht.",
    t10_l1: "[HU] sein", t10_r1: "[HU] bin",
    t10_l2: "[HU] gehen", t10_r2: "[HU] gehe",
    t10_l3: "[HU] haben", t10_r3: "[HU] habe",
    t10_l4: "[HU] kommen", t10_r4: "[HU] komme",

    t11_title: "[HU] Verb + Akkusativ (Objekt)",
    t11_text: "[HU] Manche Verben brauchen ein Objekt im Akkusativ. Beispiel: 'Ich esse einen Apfel.' Das Verb 'essen' braucht das Objekt 'einen Apfel' (Akkusativ). Ohne Objekt ist der Satz unvollständig!",
    t11_b1: "[HU] Verb + Akkusativ-Objekt",
    t11_b2: "[HU] Beispiel: Ich esse einen Apfel.",
    t11_b3: "[HU] Das Objekt antwortet auf: Wen oder was?",
    t11_inst: "[HU] Finde das Objekt!",
    t11_h1: "[HU] Wen oder was macht das Verb?",
    t11_h2: "[HU] Ich sehe die Katze. Die Katze ist das Objekt.",
    t11_bv: "[HU] Verb 🎬", t11_bo: "[HU] Objekt 📦",
    t11_i1: "[HU] essen", t11_i2: "[HU] einen Apfel", t11_i3: "[HU] laufen", t11_i4: "[HU] das Haus",

    t12_title: "[HU] Verben im Imperativ",
    t12_text: "[HU] Der Imperativ ist Befehl oder Bitte. Beispiel: 'Laufe schnell!' oder 'Bitte komm her!' Wir brauchen das -e am Anfang nicht. Die Form ist ganz einfach!",
    t12_b1: "[HU] Imperativ = Befehl oder Bitte",
    t12_b2: "[HU] Beispiel: Spielen! Laufen! Komm!",
    t12_b3: "[HU] Oft brauchen wir das -e nicht.",
    t12_inst: "[HU] Verbinde Infinitiv und Imperativ!",
    t12_h1: "[HU] Wie sagt man einen Befehl?",
    t12_h2: "[HU] spielen → Spiel! laufen → Lauf!",
    t12_l1: "[HU] spielen", t12_r1: "[HU] Spiel!",
    t12_l2: "[HU] laufen", t12_r2: "[HU] Lauf!",
    t12_l3: "[HU] lachen", t12_r3: "[HU] Lach!",
    t12_l4: "[HU] kommen", t12_r4: "[HU] Komm!",

    t13_title: "[HU] Verb + Dativ (indirektes Objekt)",
    t13_text: "[HU] Manche Verben brauchen ein Dativ-Objekt. Beispiel: 'Ich helfe dem Hund.' Das Verb 'helfen' braucht Dativ (dem, der, dem). Diese Verben sind wichtig!",
    t13_b1: "[HU] Verb + Dativ-Objekt",
    t13_b2: "[HU] Beispiel: Ich helfe dem Hund.",
    t13_b3: "[HU] Das Dativ-Objekt antwortet auf: Wem?",
    t13_inst: "[HU] Sortiere: Akkusativ oder Dativ?",
    t13_h1: "[HU] Antwortet das Objekt auf Wen/Was oder Wem?",
    t13_h2: "[HU] Ich sehe den Hund (Akkusativ). Ich helfe dem Hund (Dativ).",
    t13_ba: "[HU] Akkusativ 📦", t13_bd: "[HU] Dativ 🤝",
    t13_i1: "[HU] Ich liebe dich", t13_i2: "[HU] Ich helfe dir", t13_i3: "[HU] Ich sehe ihn", t13_i4: "[HU] Ich vertraue dir",

    t14_title: "[HU] Verb-Familien",
    t14_text: "[HU] Verben können Familien bilden! Beispiel: spielen, abspielen, vorspielen, mitspielen. Sie haben alle das Verb 'spielen' als Basis, aber unterschiedliche Vorsilben (Präfixe). Das hilft neue Verben zu verstehen!",
    t14_b1: "[HU] Verb + Präfix = Neue Verben",
    t14_b2: "[HU] Beispiel: spielen → abspielen, vorspielen",
    t14_b3: "[HU] Das Basis-Verb ist immer dabei!",
    t14_inst: "[HU] Finde die Verb-Familie!",
    t14_h1: "[HU] Welche Wörter gehören zur Familie?",
    t14_h2: "[HU] spielen, abspielen, vorspielen, Mitspieler.",
    t14_w1: "[HU] spielen", t14_w2: "[HU] abspielen", t14_w3: "[HU] Musik", t14_w4: "[HU] .",

    t15_title: "[HU] Verb Champion Finale!",
    t15_text: "[HU] Gratulieren! Du kennst jetzt viele Verben und ihre Besonderheiten. Du verstehst Präsens, Präteritum, Imperativ und die Objekte. Du bist ein echter Verb-Master!",
    t15_b1: "[HU] Du kennst Präsens und Präteritum",
    t15_b2: "[HU] Du verstehst Akkusativ und Dativ",
    t15_b3: "[HU] Du erkennst Verben überall!",
    t15_inst: "[HU] Verb-Champion-Herausforderung!",
    t15_h1: "[HU] Baue einen perfekten Satz mit Verb!",
    t15_h2: "[HU] Der Hund rennt schnell.",
    t15_f1: "[HU] Der Hund", t15_f2: "[HU] rennt", t15_f3: "[HU] schnell", t15_f4: "[HU] .",
  
  },
  ro: {

    explorer_title: "[RO] Verbeninsel",

    // T1: Was sind Verben?
    t1_title: "[RO] Was sind Verben?",
    t1_text: "[RO] Verben sagen uns, was jemand tut oder was passiert. Deshalb nennen wir sie auch Tunwörter! Beispiele: laufen 🏃, lachen 😄, schlafen 😴.",
    t1_b1: "[RO] Verben = Tunwörter.",
    t1_b2: "[RO] Sie zeigen eine Aktion oder einen Zustand.",
    t1_inst: "[RO] Finde das Verb (Tunwort)!",
    t1_h1: "[RO] Was kann man tun?",
    t1_h2: "[RO] 'rennen' ist etwas, das man tun kann.",
    t1_w1: "[RO] Haus", t1_w2: "[RO] rennen", t1_w3: "[RO] und", t1_w4: "[RO] blau",
    // Quiz: GENERATOR (verben_k2)

    // T2: Nomen oder Verb?
    t2_title: "[RO] Nomen oder Verb?",
    t2_text: "[RO] Erinnerst du dich? Nomen (Dinge/Tiere) schreiben wir GROSS, Verben (Tunwörter) schreiben wir klein (außer am Satzanfang).",
    t2_b1: "[RO] Nomen = groß (Dinge, Tiere).",
    t2_b2: "[RO] Verben = klein (Aktionen).",
    t2_inst: "[RO] Sortiere: Ist es ein Nomen oder ein Verb?",
    t2_h1: "[RO] Groß = Nomen. Klein = Verb.",
    t2_h2: "[RO] Hund und Baum sind Nomen. spielen und lachen sind Verben.",
    t2_bn: "[RO] Nomen 📦", t2_bv: "[RO] Verb 🏃",
    t2_i1: "[RO] Hund", t2_i2: "[RO] spielen", t2_i3: "[RO] lachen", t2_i4: "[RO] Baum",
    // Quiz: MANUAL (szabály tesztelése)
    t2_q: "[RO] Wie schreiben wir Verben normalerweise im Satz?",
    t2_qa: "[RO] klein", t2_qb: "[RO] groß", t2_qc: "[RO] alles groß", t2_qd: "[RO] mit einem Punkt",

    // T3: Die Grundform (Infinitiv)
    t3_title: "[RO] Die Grundform (Infinitiv)",
    t3_text: "[RO] Wenn ein Verb noch nicht verändert wurde, steht es in der Grundform. Diese endet fast immer auf '-en'. Zum Beispiel: mal-en, sing-en.",
    t3_b1: "[RO] Grundform endet meist auf '-en'.",
    t3_inst: "[RO] Verbinde das Bild mit der Grundform des Verbs!",
    t3_h1: "[RO] Was tun die Leute auf den Bildern?",
    t3_h2: "[RO] Ein Buch -> lesen. Ein Bett -> schlafen.",
    t3_l1: "[RO] 📖", t3_r1: "[RO] lesen",
    t3_l2: "[RO] 💤", t3_r2: "[RO] schlafen",
    t3_l3: "[RO] 🎨", t3_r3: "[RO] malen",
    t3_l4: "[RO] 🏃", t3_r4: "[RO] laufen",
    // Quiz: MANUAL
    t3_q: "[RO] Wie endet die Grundform der meisten Verben?",
    t3_qa: "[RO] -en", t3_qb: "[RO] -er", t3_qc: "[RO] -st", t3_qd: "[RO] -t",

    // T4: Ich und Du (Konjugation)
    t4_title: "[RO] Ich und Du",
    t4_text: "[RO] Verben verändern sich! Wenn ich etwas tue, endet das Verb meistens auf '-e' (ich spiel-e). Wenn du etwas tust, endet es auf '-st' (du spiel-st).",
    t4_b1: "[RO] ich → -e (ich lache)",
    t4_b2: "[RO] du → -st (du lachst)",
    t4_inst: "[RO] Welches Verb passt in die Lücke?",
    t4_h1: "[RO] Das Wort davor ist 'Ich'.",
    t4_h2: "[RO] Bei 'Ich' endet das Verb auf '-e'.",
    t4_sent: "[RO] Ich ___ im Garten.",
    t4_c1: "[RO] spiele", t4_c2: "[RO] spielst", t4_c3: "[RO] spielt", t4_c4: "[RO] spielen",
    // Quiz: MANUAL
    t4_q: "[RO] Was ist richtig?",
    t4_qa: "[RO] du lernst", t4_qb: "[RO] du lerne", t4_qc: "[RO] du lernt", t4_qd: "[RO] du lernen",

    // T5: Er, sie, es (Konjugation)
    t5_title: "[RO] Er, sie, es",
    t5_text: "[RO] Wenn jemand anderes etwas tut (er, sie oder es), bekommt das Verb die Endung '-t'. Zum Beispiel: er lach-t, sie tanz-t, es regne-t.",
    t5_b1: "[RO] er/sie/es → -t",
    t5_inst: "[RO] Baue den Satz richtig zusammen!",
    t5_h1: "[RO] Wer macht was?",
    t5_h2: "[RO] Er trinkt Wasser.",
    t5_f1: "[RO] Er", t5_f2: "[RO] trinkt", t5_f3: "[RO] Wasser.",
    // Quiz: MANUAL
    t5_q: "[RO] Welche Endung bekommt das Verb bei 'sie (Einzahl)'?",
    t5_qa: "[RO] -t", t5_qb: "[RO] -e", t5_qc: "[RO] -st", t5_qd: "[RO] -en",

    // T6: Achtung, Vokalwechsel!
    t6_title: "[RO] Achtung, Vokalwechsel!",
    t6_text: "[RO] Manche Verben sind stark. Sie verändern nicht nur die Endung, sondern auch den Buchstaben in der Mitte! Aus 'a' wird oft 'ä' (ich laufe -> du läufst).",
    t6_b1: "[RO] Vokal in der Mitte ändert sich.",
    t6_b2: "[RO] ich fahre → du fährst",
    t6_inst: "[RO] Ordne die Wörter in die richtige Reihenfolge!",
    t6_h1: "[RO] Der Satz heißt: Du fährst schnell.",
    t6_h2: "[RO] Du -> fährst -> schnell.",
    t6_o1: "[RO] Du", t6_o2: "[RO] fährst", t6_o3: "[RO] schnell.",
    // Quiz: MANUAL
    t6_q: "[RO] Was wird aus 'ich schlafe'?",
    t6_qa: "[RO] du schläfst", t6_qb: "[RO] du schlafst", t6_qc: "[RO] du schlafe", t6_qd: "[RO] du schliefe",

    // T7: Das Verb an zweiter Stelle
    t7_title: "[RO] Das Verb an Platz 2",
    t7_text: "[RO] In einem normalen Aussagesatz hat das Verb einen ganz festen Platz: Es steht immer an der ZWEITEN Stelle! 'Der Hund rennt schnell.'",
    t7_b1: "[RO] Das Verb steht auf Platz 2.",
    t7_inst: "[RO] Finde das Verb in diesem Satz!",
    t7_h1: "[RO] Welches Wort sagt, was das Kind tut?",
    t7_h2: "[RO] Das Verb ist 'spielt'. Es steht an 2. Stelle.",
    t7_w1: "[RO] Das Kind", t7_w2: "[RO] spielt", t7_w3: "[RO] Ball", t7_w4: "[RO] .",
    // Quiz: GENERATOR (verben_k2)

    // T8-T15: Erweiterte Verbenlektionen
    t8_title: "[RO] Verben im Präsens",
    t8_text: "[RO] Das Präsens ist die Gegenwart. Es ist die Zeit, in der etwas gerade jetzt passiert. Beispiele: Ich spiele, du lachst, sie tanzt. Diese Zeit benutzen wir am meisten!",
    t8_b1: "[RO] Präsens = Gegenwart",
    t8_b2: "[RO] Das Verb beschreibt, was jetzt passiert.",
    t8_b3: "[RO] Beispiel: Der Hund rennt schnell.",
    t8_inst: "[RO] Finde das Verb im Präsens!",
    t8_h1: "[RO] Was passiert gerade jetzt?",
    t8_h2: "[RO] laufen, spielen, lachen sind im Präsens.",
    t8_i1: "[RO] rennt", t8_i2: "[RO] rannte", t8_i3: "[RO] springt", t8_i4: "[RO] sprang",

    t9_title: "[RO] Verben im Präteritum",
    t9_text: "[RO] Das Präteritum ist die Vergangenheit. Es beschreibt, was schon vorbei ist. Der Hund rannte schnell. Ich spielte gestern. Diese Zeit nutzen wir für Geschichten!",
    t9_b1: "[RO] Präteritum = Vergangenheit",
    t9_b2: "[RO] Das Verb endet oft auf -te oder -ete.",
    t9_b3: "[RO] Beispiel: Ich spielte einen Satz Tennis.",
    t9_inst: "[RO] Welches Verb ist Vergangenheit?",
    t9_h1: "[RO] Was ist schon vorbei?",
    t9_h2: "[RO] spielte, lachte, tanzte sind Vergangenheit.",
    t9_c1: "[RO] spielte", t9_c2: "[RO] spielen", t9_c3: "[RO] spielst", t9_c4: "[RO] spiels",
    t9_sent: "[RO] Gestern ___ ich mit meinem Freund.",

    t10_title: "[RO] Unregelmäßige Verben",
    t10_text: "[RO] Manche Verben sind unregelmäßig oder 'stark'. Sie verändern sich auf besondere Weise. Beispiel: sein → bin, bist, ist. oder: gehen → gehe, gehst, geht. Diese Verben muss man auswendig lernen!",
    t10_b1: "[RO] Unregelmäßig = ändert sich besonders",
    t10_b2: "[RO] sein, haben, gehen sind unregelmäßig.",
    t10_b3: "[RO] Diese Verben muss man auswendig lernen!",
    t10_inst: "[RO] Verbinde Infinitiv und Präsens!",
    t10_h1: "[RO] Wie sind die verschiedenen Formen?",
    t10_h2: "[RO] sein → bin, bist, ist. gehen → gehe, gehst, geht.",
    t10_l1: "[RO] sein", t10_r1: "[RO] bin",
    t10_l2: "[RO] gehen", t10_r2: "[RO] gehe",
    t10_l3: "[RO] haben", t10_r3: "[RO] habe",
    t10_l4: "[RO] kommen", t10_r4: "[RO] komme",

    t11_title: "[RO] Verb + Akkusativ (Objekt)",
    t11_text: "[RO] Manche Verben brauchen ein Objekt im Akkusativ. Beispiel: 'Ich esse einen Apfel.' Das Verb 'essen' braucht das Objekt 'einen Apfel' (Akkusativ). Ohne Objekt ist der Satz unvollständig!",
    t11_b1: "[RO] Verb + Akkusativ-Objekt",
    t11_b2: "[RO] Beispiel: Ich esse einen Apfel.",
    t11_b3: "[RO] Das Objekt antwortet auf: Wen oder was?",
    t11_inst: "[RO] Finde das Objekt!",
    t11_h1: "[RO] Wen oder was macht das Verb?",
    t11_h2: "[RO] Ich sehe die Katze. Die Katze ist das Objekt.",
    t11_bv: "[RO] Verb 🎬", t11_bo: "[RO] Objekt 📦",
    t11_i1: "[RO] essen", t11_i2: "[RO] einen Apfel", t11_i3: "[RO] laufen", t11_i4: "[RO] das Haus",

    t12_title: "[RO] Verben im Imperativ",
    t12_text: "[RO] Der Imperativ ist Befehl oder Bitte. Beispiel: 'Laufe schnell!' oder 'Bitte komm her!' Wir brauchen das -e am Anfang nicht. Die Form ist ganz einfach!",
    t12_b1: "[RO] Imperativ = Befehl oder Bitte",
    t12_b2: "[RO] Beispiel: Spielen! Laufen! Komm!",
    t12_b3: "[RO] Oft brauchen wir das -e nicht.",
    t12_inst: "[RO] Verbinde Infinitiv und Imperativ!",
    t12_h1: "[RO] Wie sagt man einen Befehl?",
    t12_h2: "[RO] spielen → Spiel! laufen → Lauf!",
    t12_l1: "[RO] spielen", t12_r1: "[RO] Spiel!",
    t12_l2: "[RO] laufen", t12_r2: "[RO] Lauf!",
    t12_l3: "[RO] lachen", t12_r3: "[RO] Lach!",
    t12_l4: "[RO] kommen", t12_r4: "[RO] Komm!",

    t13_title: "[RO] Verb + Dativ (indirektes Objekt)",
    t13_text: "[RO] Manche Verben brauchen ein Dativ-Objekt. Beispiel: 'Ich helfe dem Hund.' Das Verb 'helfen' braucht Dativ (dem, der, dem). Diese Verben sind wichtig!",
    t13_b1: "[RO] Verb + Dativ-Objekt",
    t13_b2: "[RO] Beispiel: Ich helfe dem Hund.",
    t13_b3: "[RO] Das Dativ-Objekt antwortet auf: Wem?",
    t13_inst: "[RO] Sortiere: Akkusativ oder Dativ?",
    t13_h1: "[RO] Antwortet das Objekt auf Wen/Was oder Wem?",
    t13_h2: "[RO] Ich sehe den Hund (Akkusativ). Ich helfe dem Hund (Dativ).",
    t13_ba: "[RO] Akkusativ 📦", t13_bd: "[RO] Dativ 🤝",
    t13_i1: "[RO] Ich liebe dich", t13_i2: "[RO] Ich helfe dir", t13_i3: "[RO] Ich sehe ihn", t13_i4: "[RO] Ich vertraue dir",

    t14_title: "[RO] Verb-Familien",
    t14_text: "[RO] Verben können Familien bilden! Beispiel: spielen, abspielen, vorspielen, mitspielen. Sie haben alle das Verb 'spielen' als Basis, aber unterschiedliche Vorsilben (Präfixe). Das hilft neue Verben zu verstehen!",
    t14_b1: "[RO] Verb + Präfix = Neue Verben",
    t14_b2: "[RO] Beispiel: spielen → abspielen, vorspielen",
    t14_b3: "[RO] Das Basis-Verb ist immer dabei!",
    t14_inst: "[RO] Finde die Verb-Familie!",
    t14_h1: "[RO] Welche Wörter gehören zur Familie?",
    t14_h2: "[RO] spielen, abspielen, vorspielen, Mitspieler.",
    t14_w1: "[RO] spielen", t14_w2: "[RO] abspielen", t14_w3: "[RO] Musik", t14_w4: "[RO] .",

    t15_title: "[RO] Verb Champion Finale!",
    t15_text: "[RO] Gratulieren! Du kennst jetzt viele Verben und ihre Besonderheiten. Du verstehst Präsens, Präteritum, Imperativ und die Objekte. Du bist ein echter Verb-Master!",
    t15_b1: "[RO] Du kennst Präsens und Präteritum",
    t15_b2: "[RO] Du verstehst Akkusativ und Dativ",
    t15_b3: "[RO] Du erkennst Verben überall!",
    t15_inst: "[RO] Verb-Champion-Herausforderung!",
    t15_h1: "[RO] Baue einen perfekten Satz mit Verb!",
    t15_h2: "[RO] Der Hund rennt schnell.",
    t15_f1: "[RO] Der Hund", t15_f2: "[RO] rennt", t15_f3: "[RO] schnell", t15_f4: "[RO] .",
  
  }
};

export const VERB_POOL: PoolTopicDef[] = [
  // ── 1. Was sind Verben? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏃", label: "rennen" }, { emoji: "😴", label: "schlafen" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [1], // rennen
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "verben_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 2. Nomen oder Verb? (drag-to-bucket) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "two-groups", left: { items: ["Hund", "Baum"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["lachen", "spielen"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nomen", label: "t2_bn" }, { id: "verb", label: "t2_bv" }],
      items: [
        { text: "t2_i1", bucketId: "nomen" }, // Hund
        { text: "t2_i2", bucketId: "verb" },  // spielen
        { text: "t2_i3", bucketId: "verb" },  // lachen
        { text: "t2_i4", bucketId: "nomen" }, // Baum
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Grundform (Infinitiv) (match-pairs) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "spielen", highlightChars: ["e", "n"], color: "#10B981" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
        { left: "t3_l4", right: "t3_r4" },
      ],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Ich und Du (gap-fill) ───────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "ich spiel-e", color: "#1E40AF", bg: "#DBEAFE" }, { text: "du spiel-st", color: "#991B1B", bg: "#FEE2E2" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0, // spiele
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Er, sie, es (sentence-build) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-pairs", pairs: [["er", "-t"], ["sie", "-t"]], color: "#7C3AED" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t5_f1", "t5_f2", "t5_f3"], // Er, trinkt, Wasser.
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Vokalwechsel (word-order) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["a", "ä"], ["e", "ie"]], color: "#EF4444" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "word-order",
      words: ["t6_o3", "t6_o1", "t6_o2"], // keverve: schnell, Du, fährst
      correctOrder: [1, 2, 0], // Du -> fährst -> schnell.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Verb an Platz 2 (highlight-text) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "sentence-display", words: ["Das Kind", "spielt", "Ball", "."], highlightIndices: [1], color: "#F59E0B" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"],
      correctIndices: [1], // spielt (in der Ansicht ist es Platz 2, da "Das Kind" ein Token ist)
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "verben_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 8. Verben im Präsens (highlight-text) ────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "icon-grid", items: [{ emoji: "⏰", label: "Jetzt" }, { emoji: "🏃", label: "Präsens" }] },
    bulletKeys: ["t8_b1", "t8_b2", "t8_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_i1", "t8_i2", "t8_i3", "t8_i4"],
      correctIndices: [0, 2], // rennt, springt
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "zahlen_k2" },
  },

  // ── 9. Verben im Präteritum (gap-fill) ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "Präteritum", highlightChars: ["P"], color: "#EC4899" },
    bulletKeys: ["t9_b1", "t9_b2", "t9_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 0, // spielte
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "zeit_k2" },
  },

  // ── 10. Unregelmäßige Verben (match-pairs) ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "letter-pairs", pairs: [["sein", "bin"], ["gehen", "gehe"]], color: "#3B82F6" },
    bulletKeys: ["t10_b1", "t10_b2", "t10_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t10_l1", right: "t10_r1" },
        { left: "t10_l2", right: "t10_r2" },
        { left: "t10_l3", right: "t10_r3" },
        { left: "t10_l4", right: "t10_r4" },
      ],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "farben_k2" },
  },

  // ── 11. Verb + Akkusativ (drag-to-bucket) ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "Verb + Akkusativ", emoji: "📦", color: "#D97706", bg: "#FEF3C7" }] },
    bulletKeys: ["t11_b1", "t11_b2", "t11_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "verb", label: "t11_bv" }, { id: "objekt", label: "t11_bo" }],
      items: [
        { text: "t11_i1", bucketId: "verb" },
        { text: "t11_i2", bucketId: "objekt" },
        { text: "t11_i3", bucketId: "verb" },
        { text: "t11_i4", bucketId: "objekt" },
      ],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "berufe_k2" },
  },

  // ── 12. Verben im Imperativ (match-pairs) ───────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "Befehl!", emoji: "💬", color: "#DC2626", bg: "#FEE2E2" }] },
    bulletKeys: ["t12_b1", "t12_b2", "t12_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t12_l1", right: "t12_r1" },
        { left: "t12_l2", right: "t12_r2" },
        { left: "t12_l3", right: "t12_r3" },
        { left: "t12_l4", right: "t12_r4" },
      ],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "artikel_k2" },
  },

  // ── 13. Verb + Dativ (drag-to-bucket) ────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [{ text: "Akkusativ vs. Dativ", emoji: "🤔", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t13_b1", "t13_b2", "t13_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "akk", label: "t13_ba" }, { id: "dat", label: "t13_bd" }],
      items: [
        { text: "t13_i1", bucketId: "akk" },
        { text: "t13_i2", bucketId: "dat" },
        { text: "t13_i3", bucketId: "akk" },
        { text: "t13_i4", bucketId: "dat" },
      ],
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "gegensaetze_k2" },
  },

  // ── 14. Verb-Familien (highlight-text) ──────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "spielen", highlightChars: ["s", "p", "i", "e", "l"], color: "#065F46" },
    bulletKeys: ["t14_b1", "t14_b2", "t14_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4"],
      correctIndices: [0, 1], // spielen, abspielen
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 15. Verb Champion Finale! (word-order) ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Verb Master!", bg: "#FEF3C7" },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "word-order",
      words: ["t15_f3", "t15_f2", "t15_f1", "t15_f4"], // schnell, rennt, Hund, .
      correctOrder: [2, 1, 0, 3], // Hund -> rennt -> schnell -> .
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "plural" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Adjektivinsel
// Thema: Adjektive erkennen, Gegensätze, Steigerung (groß→größer→am größten)
// ─────────────────────────────────────────────────────────────────────────────

export const ADJEKTIV_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Adjektivinsel",

    // T1: Was sind Adjektive?
    t1_title: "Was sind Adjektive?",
    t1_text: "Adjektive sagen uns, WIE ein Mensch, ein Tier oder ein Ding ist. Deshalb nennen wir sie auch Wiewörter! Zum Beispiel: der Hund ist 'schnell', der Baum ist 'hoch'.",
    t1_b1: "Adjektive = Wiewörter.",
    t1_b2: "Sie beschreiben Nomen genauer.",
    t1_inst: "Finde das Adjektiv im Satz!",
    t1_h1: "Frage dich: WIE ist die Katze?",
    t1_h2: "Die Katze ist 'müde'.",
    t1_w1: "Die", t1_w2: "Katze", t1_w3: "ist", t1_w4: "müde", t1_w5: ".",
    // Quiz: MANUAL
    t1_q: "Auf welche Frage antworten Adjektive (Wiewörter)?",
    t1_qa: "Wie ist etwas?", t1_qb: "Wer tut was?", t1_qc: "Wann passiert es?", t1_qd: "Wo ist es?",

    // T2: Gegensätze (Opposites)
    t2_title: "Gegensätze",
    t2_text: "Viele Adjektive haben einen Partner, der genau das Gegenteil bedeutet. Wenn es draußen nicht heiß ist, dann ist es... kalt!",
    t2_b1: "Gegensätze bedeuten das Gegenteil.",
    t2_b2: "groß ↔ klein, laut ↔ leise.",
    t2_inst: "Verbinde die Gegensätze!",
    t2_h1: "Was ist das Gegenteil von 'schnell'?",
    t2_h2: "schnell -> langsam, heiß -> kalt.",
    t2_l1: "heiß", t2_r1: "kalt",
    t2_l2: "groß", t2_r2: "klein",
    t2_l3: "schnell", t2_r3: "langsam",
    t2_l4: "laut", t2_r4: "leise",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T3: Nomen oder Adjektiv?
    t3_title: "Nomen oder Adjektiv?",
    t3_text: "Wir schreiben Nomen (Dinge) GROSS und Adjektive (Eigenschaften) klein. 'Das schöne Haus' - 'Haus' ist groß, 'schöne' ist klein.",
    t3_b1: "Nomen = groß.",
    t3_b2: "Adjektiv = klein.",
    t3_inst: "Sortiere die Wörter!",
    t3_h1: "Großgeschrieben = Nomen. Kleingeschrieben = Adjektiv.",
    t3_h2: "Apfel und Baum sind Nomen. bunt und weich sind Adjektive.",
    t3_bn: "Nomen 📦", t3_ba: "Adjektiv 🎨",
    t3_i1: "Apfel", t3_i2: "bunt", t3_i3: "weich", t3_i4: "Baum",
    // Quiz: MANUAL
    t3_q: "Wie schreiben wir Adjektive normalerweise im Satz?",
    t3_qa: "klein", t3_qb: "groß", t3_qc: "alles groß", t3_qd: "nur am Ende groß",

    // T4: Farben sind auch Adjektive
    t4_title: "Farben als Adjektive",
    t4_text: "Farben sagen uns auch, WIE etwas aussieht. Deshalb sind alle Farben Adjektive: rot, blau, gelb, grün!",
    t4_b1: "Alle Farben sind Adjektive.",
    t4_inst: "Welches Adjektiv passt in die Lücke?",
    t4_h1: "Welche Farbe hat eine reife Zitrone?",
    t4_h2: "Eine Zitrone ist gelb.",
    t4_sent: "Die Zitrone ist ___.",
    t4_c1: "gelb", t4_c2: "blau", t4_c3: "lila", t4_c4: "schwarz",
    // Quiz: GENERATOR (farben_k2)

    // T5: Vergleichen (Steigerung)
    t5_title: "Dinge vergleichen",
    t5_text: "Mit Adjektiven können wir Dinge vergleichen. Eine Maus ist klein. Ein Käfer ist kleiner. Ein Floh ist am kleinsten!",
    t5_b1: "Grundform: klein",
    t5_b2: "Vergleich: kleiner",
    t5_b3: "Höchste Stufe: am kleinsten",
    t5_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t5_h1: "Fange mit der Grundform an, dann die Steigerung.",
    t5_h2: "schnell -> schneller -> am schnellsten.",
    t5_o1: "schnell", t5_o2: "schneller", t5_o3: "am schnellsten",
    // Quiz: MANUAL
    t5_q: "Was ist richtig?",
    t5_qa: "groß - größer - am größten", t5_qb: "groß - großiger - am großesten", t5_qc: "groß - mehr groß - am mehr groß", t5_qd: "groß - kleinsten",

    // T6: Adjektive vor dem Nomen
    t6_title: "Adjektive vor dem Nomen",
    t6_text: "Oft stehen Adjektive direkt vor dem Nomen, um es zu beschreiben. Dann verändern sie ihre Endung: 'der Hund' + 'schnell' = 'der schnelle Hund'.",
    t6_b1: "Adjektive passen sich an.",
    t6_inst: "Baue den Satz in der richtigen Reihenfolge auf!",
    t6_h1: "Der Artikel (Der) kommt zuerst, dann das Adjektiv, dann das Nomen.",
    t6_h2: "Der kleine Hund bellt.",
    t6_f1: "Der", t6_f2: "kleine", t6_f3: "Hund", t6_f4: "bellt.",
    // Quiz: MANUAL
    t6_q: "Welcher Satzteil ist ein Adjektiv in: 'Das bunte Bild ist schön.'?",
    t6_qa: "bunte", t6_qb: "Das", t6_qc: "Bild", t6_qd: "ist",

    // T7: Finde das Gegenteil
    t7_title: "Finde das Gegenteil",
    t7_text: "Lass uns dein Wissen über Gegensätze noch einmal testen. Ein echter Adjektiv-Profi kennt viele Wiewörter!",
    t7_b1: "Denk an den Partner-Gegensatz.",
    t7_inst: "Welches Wort ist das Gegenteil von 'alt'?",
    t7_h1: "Wenn jemand nicht alt ist, ist er...",
    t7_h2: "Das Gegenteil von alt ist 'jung' oder 'neu'.",
    t7_sent: "Das Gegenteil von alt ist ___.",
    t7_c1: "jung", t7_c2: "groß", t7_c3: "schwer", t7_c4: "bunt",
    // Quiz: GENERATOR (adjektive_gegenteil)

    // T8-T15: Erweiterte Adjektivlektionen
    t8_title: "Adjektive mit Steigerung",
    t8_text: "Viele Adjektive haben eine Steigerungsform. Basis: schnell → Vergleich: schneller → Superlativ: am schnellsten. Das macht Vergleiche möglich!",
    t8_b1: "Basis → Vergleich → Superlativ",
    t8_b2: "schnell → schneller → am schnellsten",
    t8_b3: "Diese Formen muss man kennen!",
    t8_inst: "Finde alle Formen!",
    t8_h1: "Basis ist die einfache Form.",
    t8_h2: "schnell, schneller, am schnellsten.",
    t8_l1: "schnell", t8_r1: "schneller", t8_l2: "groß", t8_r2: "größer",

    t9_title: "Umlaut in Steigerung",
    t9_text: "Manche Adjektive bekommen einen Umlaut bei der Steigerung. Beispiel: alt → älter → am ältesten. Das ist eine spezielle Regel!",
    t9_b1: "Umlaut in Steigerung: ä, ö, ü",
    t9_b2: "alt → älter → am ältesten",
    t9_b3: "Diese Adjektive muss man lernen!",
    t9_inst: "Verbinde Basis und Superlativ!",
    t9_h1: "Welcher Superlativ hat einen Umlaut?",
    t9_h2: "alt → am ältesten. jung → am jüngsten.",
    t9_l1: "alt", t9_r1: "am ältesten",
    t9_l2: "jung", t9_r2: "am jüngsten",
    t9_l3: "kurz", t9_r3: "am kürzesten",
    t9_l4: "oft", t9_r4: "am öftesten",

    t10_title: "Unregelmäßige Adjektive",
    t10_text: "Manche Adjektive sind unregelmäßig. Sie ändern sich völlig: gut → besser → am besten. viel → mehr → am meisten. Diese Adjektive muss man auswendig lernen!",
    t10_b1: "Unregelmäßig = ändert sich völlig",
    t10_b2: "gut → besser → am besten",
    t10_b3: "Diese Adjektive muss man auswendig lernen!",
    t10_inst: "Finde die unregelmäßige Form!",
    t10_h1: "Wie ist die Superlativ-Form?",
    t10_h2: "gut → am besten. viel → am meisten.",
    t10_c1: "besser", t10_c2: "gut", t10_c3: "guten", t10_c4: "gu",
    t10_sent: "Das ist ___ als das andere.",

    t11_title: "Adjektive beschreiben Nomen",
    t11_text: "Adjektive stehen neben Nomen und machen sie interessanter! Der rote Ball, die schnelle Katze, das schöne Haus. Das Adjektiv passt sich an das Nomen an!",
    t11_b1: "Adjektiv + Nomen",
    t11_b2: "Das Adjektiv beschreibt das Nomen.",
    t11_b3: "Beispiel: der rote Ball, die schnelle Katze",
    t11_inst: "Sortiere Adjektive und Nomen!",
    t11_h1: "Welches Wort ist das Adjektiv?",
    t11_h2: "Das rote Haus: 'rot' ist das Adjektiv.",
    t11_ba: "Adjektiv 🎨", t11_bn: "Nomen 📦",
    t11_i1: "schnell", t11_i2: "Katze", t11_i3: "groß", t11_i4: "Baum",

    t12_title: "Farbwörter sind Adjektive",
    t12_text: "Farben sind spezielle Adjektive! Rot, blau, gelb, grün... Wir benutzen sie, um Dinge zu beschreiben. Der rote Apfel, das blaue Haus, die grüne Wiese.",
    t12_b1: "Farben = Adjektive",
    t12_b2: "rot, blau, gelb, grün, orange, rosa",
    t12_b3: "Wir benutzen sie täglich!",
    t12_inst: "Verbinde Farben und Objekte!",
    t12_h1: "Welche Farbe hat das Objekt normalerweise?",
    t12_h2: "Die Sonne ist gelb. Das Meer ist blau.",
    t12_l1: "Apfel", t12_r1: "rot",
    t12_l2: "Schnee", t12_r2: "weiß",
    t12_l3: "Gras", t12_r3: "grün",
    t12_l4: "Himmel", t12_r4: "blau",

    t13_title: "Persönlichkeits-Adjektive",
    t13_text: "Mit Adjektiven beschreiben wir Menschen und ihre Persönlichkeit! Mutig, ängstlich, freundlich, böse... Diese Adjektive helfen uns Charaktere zu verstehen.",
    t13_b1: "Persönlichkeits-Adjektive",
    t13_b2: "mutig, ängstlich, freundlich, böse",
    t13_b3: "Mit diesen beschreiben wir Menschen!",
    t13_inst: "Finde die Persönlichkeit!",
    t13_h1: "Welches Adjektiv passt?",
    t13_h2: "Der mutige Held kämpft gegen das Böse.",
    t13_w1: "Der", t13_w2: "mutige", t13_w3: "Held", t13_w4: ".",

    t14_title: "Adjektive als Prädikativ",
    t14_text: "Adjektive können nach dem Verb stehen: 'Der Apfel ist rot.' 'Die Katze ist schnell.' Hier beschreiben sie das Nomen und hängen vom Verb ab!",
    t14_b1: "Verb + Adjektiv (Prädikativ)",
    t14_b2: "Beispiel: Der Apfel ist rot.",
    t14_b3: "Das Adjektiv sitzt NACH dem Verb!",
    t14_inst: "Baue den Satz richtig!",
    t14_h1: "Welches Adjektiv passt?",
    t14_h2: "Der Himmel ist blau.",
    t14_f1: "Der Himmel", t14_f2: "ist", t14_f3: "blau", t14_f4: ".",

    t15_title: "Adjektiv Champion Finale!",
    t15_text: "Gratulieren! Du kennst jetzt alles über Adjektive! Steigerung, Farben, Persönlichkeit... Du bist ein echter Adjektiv-Meister!",
    t15_b1: "Du kennst Basis und Steigerung",
    t15_b2: "Du verstehst Farben und Eigenschaften",
    t15_b3: "Du beschreibst Dinge perfekt!",
    t15_inst: "Adjektiv-Champion-Herausforderung!",
    t15_h1: "Beschreibe etwas mit mehreren Adjektiven!",
    t15_h2: "Das große rote Haus ist sehr schön!",
    t15_w1: "Das", t15_w2: "schöne", t15_w3: "Haus", t15_w4: ".",
  },
  en: {

    explorer_title: "[EN] Adjektivinsel",

    // T1: Was sind Adjektive?
    t1_title: "[EN] Was sind Adjektive?",
    t1_text: "[EN] Adjektive sagen uns, WIE ein Mensch, ein Tier oder ein Ding ist. Deshalb nennen wir sie auch Wiewörter! Zum Beispiel: der Hund ist 'schnell', der Baum ist 'hoch'.",
    t1_b1: "[EN] Adjektive = Wiewörter.",
    t1_b2: "[EN] Sie beschreiben Nomen genauer.",
    t1_inst: "[EN] Finde das Adjektiv im Satz!",
    t1_h1: "[EN] Frage dich: WIE ist die Katze?",
    t1_h2: "[EN] Die Katze ist 'müde'.",
    t1_w1: "[EN] Die", t1_w2: "[EN] Katze", t1_w3: "[EN] ist", t1_w4: "[EN] müde", t1_w5: "[EN] .",
    // Quiz: MANUAL
    t1_q: "[EN] Auf welche Frage antworten Adjektive (Wiewörter)?",
    t1_qa: "[EN] Wie ist etwas?", t1_qb: "[EN] Wer tut was?", t1_qc: "[EN] Wann passiert es?", t1_qd: "[EN] Wo ist es?",

    // T2: Gegensätze (Opposites)
    t2_title: "[EN] Gegensätze",
    t2_text: "[EN] Viele Adjektive haben einen Partner, der genau das Gegenteil bedeutet. Wenn es draußen nicht heiß ist, dann ist es... kalt!",
    t2_b1: "[EN] Gegensätze bedeuten das Gegenteil.",
    t2_b2: "[EN] groß ↔ klein, laut ↔ leise.",
    t2_inst: "[EN] Verbinde die Gegensätze!",
    t2_h1: "[EN] Was ist das Gegenteil von 'schnell'?",
    t2_h2: "[EN] schnell -> langsam, heiß -> kalt.",
    t2_l1: "[EN] heiß", t2_r1: "[EN] kalt",
    t2_l2: "[EN] groß", t2_r2: "[EN] klein",
    t2_l3: "[EN] schnell", t2_r3: "[EN] langsam",
    t2_l4: "[EN] laut", t2_r4: "[EN] leise",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T3: Nomen oder Adjektiv?
    t3_title: "[EN] Nomen oder Adjektiv?",
    t3_text: "[EN] Wir schreiben Nomen (Dinge) GROSS und Adjektive (Eigenschaften) klein. 'Das schöne Haus' - 'Haus' ist groß, 'schöne' ist klein.",
    t3_b1: "[EN] Nomen = groß.",
    t3_b2: "[EN] Adjektiv = klein.",
    t3_inst: "[EN] Sortiere die Wörter!",
    t3_h1: "[EN] Großgeschrieben = Nomen. Kleingeschrieben = Adjektiv.",
    t3_h2: "[EN] Apfel und Baum sind Nomen. bunt und weich sind Adjektive.",
    t3_bn: "[EN] Nomen 📦", t3_ba: "[EN] Adjektiv 🎨",
    t3_i1: "[EN] Apfel", t3_i2: "[EN] bunt", t3_i3: "[EN] weich", t3_i4: "[EN] Baum",
    // Quiz: MANUAL
    t3_q: "[EN] Wie schreiben wir Adjektive normalerweise im Satz?",
    t3_qa: "[EN] klein", t3_qb: "[EN] groß", t3_qc: "[EN] alles groß", t3_qd: "[EN] nur am Ende groß",

    // T4: Farben sind auch Adjektive
    t4_title: "[EN] Farben als Adjektive",
    t4_text: "[EN] Farben sagen uns auch, WIE etwas aussieht. Deshalb sind alle Farben Adjektive: rot, blau, gelb, grün!",
    t4_b1: "[EN] Alle Farben sind Adjektive.",
    t4_inst: "[EN] Welches Adjektiv passt in die Lücke?",
    t4_h1: "[EN] Welche Farbe hat eine reife Zitrone?",
    t4_h2: "[EN] Eine Zitrone ist gelb.",
    t4_sent: "[EN] Die Zitrone ist ___.",
    t4_c1: "[EN] gelb", t4_c2: "[EN] blau", t4_c3: "[EN] lila", t4_c4: "[EN] schwarz",
    // Quiz: GENERATOR (farben_k2)

    // T5: Vergleichen (Steigerung)
    t5_title: "[EN] Dinge vergleichen",
    t5_text: "[EN] Mit Adjektiven können wir Dinge vergleichen. Eine Maus ist klein. Ein Käfer ist kleiner. Ein Floh ist am kleinsten!",
    t5_b1: "[EN] Grundform: klein",
    t5_b2: "[EN] Vergleich: kleiner",
    t5_b3: "[EN] Höchste Stufe: am kleinsten",
    t5_inst: "[EN] Bringe die Wörter in die richtige Reihenfolge!",
    t5_h1: "[EN] Fange mit der Grundform an, dann die Steigerung.",
    t5_h2: "[EN] schnell -> schneller -> am schnellsten.",
    t5_o1: "[EN] schnell", t5_o2: "[EN] schneller", t5_o3: "[EN] am schnellsten",
    // Quiz: MANUAL
    t5_q: "[EN] Was ist richtig?",
    t5_qa: "[EN] groß - größer - am größten", t5_qb: "[EN] groß - großiger - am großesten", t5_qc: "[EN] groß - mehr groß - am mehr groß", t5_qd: "[EN] groß - kleinsten",

    // T6: Adjektive vor dem Nomen
    t6_title: "[EN] Adjektive vor dem Nomen",
    t6_text: "[EN] Oft stehen Adjektive direkt vor dem Nomen, um es zu beschreiben. Dann verändern sie ihre Endung: 'der Hund' + 'schnell' = 'der schnelle Hund'.",
    t6_b1: "[EN] Adjektive passen sich an.",
    t6_inst: "[EN] Baue den Satz in der richtigen Reihenfolge auf!",
    t6_h1: "[EN] Der Artikel (Der) kommt zuerst, dann das Adjektiv, dann das Nomen.",
    t6_h2: "[EN] Der kleine Hund bellt.",
    t6_f1: "[EN] Der", t6_f2: "[EN] kleine", t6_f3: "[EN] Hund", t6_f4: "[EN] bellt.",
    // Quiz: MANUAL
    t6_q: "[EN] Welcher Satzteil ist ein Adjektiv in: 'Das bunte Bild ist schön.'?",
    t6_qa: "[EN] bunte", t6_qb: "[EN] Das", t6_qc: "[EN] Bild", t6_qd: "[EN] ist",

    // T7: Finde das Gegenteil
    t7_title: "[EN] Finde das Gegenteil",
    t7_text: "[EN] Lass uns dein Wissen über Gegensätze noch einmal testen. Ein echter Adjektiv-Profi kennt viele Wiewörter!",
    t7_b1: "[EN] Denk an den Partner-Gegensatz.",
    t7_inst: "[EN] Welches Wort ist das Gegenteil von 'alt'?",
    t7_h1: "[EN] Wenn jemand nicht alt ist, ist er...",
    t7_h2: "[EN] Das Gegenteil von alt ist 'jung' oder 'neu'.",
    t7_sent: "[EN] Das Gegenteil von alt ist ___.",
    t7_c1: "[EN] jung", t7_c2: "[EN] groß", t7_c3: "[EN] schwer", t7_c4: "[EN] bunt",
    // Quiz: GENERATOR (adjektive_gegenteil)

    // T8-T15: Erweiterte Adjektivlektionen
    t8_title: "[EN] Adjektive mit Steigerung",
    t8_text: "[EN] Viele Adjektive haben eine Steigerungsform. Basis: schnell → Vergleich: schneller → Superlativ: am schnellsten. Das macht Vergleiche möglich!",
    t8_b1: "[EN] Basis → Vergleich → Superlativ",
    t8_b2: "[EN] schnell → schneller → am schnellsten",
    t8_b3: "[EN] Diese Formen muss man kennen!",
    t8_inst: "[EN] Finde alle Formen!",
    t8_h1: "[EN] Basis ist die einfache Form.",
    t8_h2: "[EN] schnell, schneller, am schnellsten.",
    t8_l1: "[EN] schnell", t8_r1: "[EN] schneller", t8_l2: "[EN] groß", t8_r2: "[EN] größer",

    t9_title: "[EN] Umlaut in Steigerung",
    t9_text: "[EN] Manche Adjektive bekommen einen Umlaut bei der Steigerung. Beispiel: alt → älter → am ältesten. Das ist eine spezielle Regel!",
    t9_b1: "[EN] Umlaut in Steigerung: ä, ö, ü",
    t9_b2: "[EN] alt → älter → am ältesten",
    t9_b3: "[EN] Diese Adjektive muss man lernen!",
    t9_inst: "[EN] Verbinde Basis und Superlativ!",
    t9_h1: "[EN] Welcher Superlativ hat einen Umlaut?",
    t9_h2: "[EN] alt → am ältesten. jung → am jüngsten.",
    t9_l1: "[EN] alt", t9_r1: "[EN] am ältesten",
    t9_l2: "[EN] jung", t9_r2: "[EN] am jüngsten",
    t9_l3: "[EN] kurz", t9_r3: "[EN] am kürzesten",
    t9_l4: "[EN] oft", t9_r4: "[EN] am öftesten",

    t10_title: "[EN] Unregelmäßige Adjektive",
    t10_text: "[EN] Manche Adjektive sind unregelmäßig. Sie ändern sich völlig: gut → besser → am besten. viel → mehr → am meisten. Diese Adjektive muss man auswendig lernen!",
    t10_b1: "[EN] Unregelmäßig = ändert sich völlig",
    t10_b2: "[EN] gut → besser → am besten",
    t10_b3: "[EN] Diese Adjektive muss man auswendig lernen!",
    t10_inst: "[EN] Finde die unregelmäßige Form!",
    t10_h1: "[EN] Wie ist die Superlativ-Form?",
    t10_h2: "[EN] gut → am besten. viel → am meisten.",
    t10_c1: "[EN] besser", t10_c2: "[EN] gut", t10_c3: "[EN] guten", t10_c4: "[EN] gu",
    t10_sent: "[EN] Das ist ___ als das andere.",

    t11_title: "[EN] Adjektive beschreiben Nomen",
    t11_text: "[EN] Adjektive stehen neben Nomen und machen sie interessanter! Der rote Ball, die schnelle Katze, das schöne Haus. Das Adjektiv passt sich an das Nomen an!",
    t11_b1: "[EN] Adjektiv + Nomen",
    t11_b2: "[EN] Das Adjektiv beschreibt das Nomen.",
    t11_b3: "[EN] Beispiel: der rote Ball, die schnelle Katze",
    t11_inst: "[EN] Sortiere Adjektive und Nomen!",
    t11_h1: "[EN] Welches Wort ist das Adjektiv?",
    t11_h2: "[EN] Das rote Haus: 'rot' ist das Adjektiv.",
    t11_ba: "[EN] Adjektiv 🎨", t11_bn: "[EN] Nomen 📦",
    t11_i1: "[EN] schnell", t11_i2: "[EN] Katze", t11_i3: "[EN] groß", t11_i4: "[EN] Baum",

    t12_title: "[EN] Farbwörter sind Adjektive",
    t12_text: "[EN] Farben sind spezielle Adjektive! Rot, blau, gelb, grün... Wir benutzen sie, um Dinge zu beschreiben. Der rote Apfel, das blaue Haus, die grüne Wiese.",
    t12_b1: "[EN] Farben = Adjektive",
    t12_b2: "[EN] rot, blau, gelb, grün, orange, rosa",
    t12_b3: "[EN] Wir benutzen sie täglich!",
    t12_inst: "[EN] Verbinde Farben und Objekte!",
    t12_h1: "[EN] Welche Farbe hat das Objekt normalerweise?",
    t12_h2: "[EN] Die Sonne ist gelb. Das Meer ist blau.",
    t12_l1: "[EN] Apfel", t12_r1: "[EN] rot",
    t12_l2: "[EN] Schnee", t12_r2: "[EN] weiß",
    t12_l3: "[EN] Gras", t12_r3: "[EN] grün",
    t12_l4: "[EN] Himmel", t12_r4: "[EN] blau",

    t13_title: "[EN] Persönlichkeits-Adjektive",
    t13_text: "[EN] Mit Adjektiven beschreiben wir Menschen und ihre Persönlichkeit! Mutig, ängstlich, freundlich, böse... Diese Adjektive helfen uns Charaktere zu verstehen.",
    t13_b1: "[EN] Persönlichkeits-Adjektive",
    t13_b2: "[EN] mutig, ängstlich, freundlich, böse",
    t13_b3: "[EN] Mit diesen beschreiben wir Menschen!",
    t13_inst: "[EN] Finde die Persönlichkeit!",
    t13_h1: "[EN] Welches Adjektiv passt?",
    t13_h2: "[EN] Der mutige Held kämpft gegen das Böse.",
    t13_w1: "[EN] Der", t13_w2: "[EN] mutige", t13_w3: "[EN] Held", t13_w4: "[EN] .",

    t14_title: "[EN] Adjektive als Prädikativ",
    t14_text: "[EN] Adjektive können nach dem Verb stehen: 'Der Apfel ist rot.' 'Die Katze ist schnell.' Hier beschreiben sie das Nomen und hängen vom Verb ab!",
    t14_b1: "[EN] Verb + Adjektiv (Prädikativ)",
    t14_b2: "[EN] Beispiel: Der Apfel ist rot.",
    t14_b3: "[EN] Das Adjektiv sitzt NACH dem Verb!",
    t14_inst: "[EN] Baue den Satz richtig!",
    t14_h1: "[EN] Welches Adjektiv passt?",
    t14_h2: "[EN] Der Himmel ist blau.",
    t14_f1: "[EN] Der Himmel", t14_f2: "[EN] ist", t14_f3: "[EN] blau", t14_f4: "[EN] .",

    t15_title: "[EN] Adjektiv Champion Finale!",
    t15_text: "[EN] Gratulieren! Du kennst jetzt alles über Adjektive! Steigerung, Farben, Persönlichkeit... Du bist ein echter Adjektiv-Meister!",
    t15_b1: "[EN] Du kennst Basis und Steigerung",
    t15_b2: "[EN] Du verstehst Farben und Eigenschaften",
    t15_b3: "[EN] Du beschreibst Dinge perfekt!",
    t15_inst: "[EN] Adjektiv-Champion-Herausforderung!",
    t15_h1: "[EN] Beschreibe etwas mit mehreren Adjektiven!",
    t15_h2: "[EN] Das große rote Haus ist sehr schön!",
    t15_w1: "[EN] Das", t15_w2: "[EN] schöne", t15_w3: "[EN] Haus", t15_w4: "[EN] .",
  
  },
  hu: {

    explorer_title: "[HU] Adjektivinsel",

    // T1: Was sind Adjektive?
    t1_title: "[HU] Was sind Adjektive?",
    t1_text: "[HU] Adjektive sagen uns, WIE ein Mensch, ein Tier oder ein Ding ist. Deshalb nennen wir sie auch Wiewörter! Zum Beispiel: der Hund ist 'schnell', der Baum ist 'hoch'.",
    t1_b1: "[HU] Adjektive = Wiewörter.",
    t1_b2: "[HU] Sie beschreiben Nomen genauer.",
    t1_inst: "[HU] Finde das Adjektiv im Satz!",
    t1_h1: "[HU] Frage dich: WIE ist die Katze?",
    t1_h2: "[HU] Die Katze ist 'müde'.",
    t1_w1: "[HU] Die", t1_w2: "[HU] Katze", t1_w3: "[HU] ist", t1_w4: "[HU] müde", t1_w5: "[HU] .",
    // Quiz: MANUAL
    t1_q: "[HU] Auf welche Frage antworten Adjektive (Wiewörter)?",
    t1_qa: "[HU] Wie ist etwas?", t1_qb: "[HU] Wer tut was?", t1_qc: "[HU] Wann passiert es?", t1_qd: "[HU] Wo ist es?",

    // T2: Gegensätze (Opposites)
    t2_title: "[HU] Gegensätze",
    t2_text: "[HU] Viele Adjektive haben einen Partner, der genau das Gegenteil bedeutet. Wenn es draußen nicht heiß ist, dann ist es... kalt!",
    t2_b1: "[HU] Gegensätze bedeuten das Gegenteil.",
    t2_b2: "[HU] groß ↔ klein, laut ↔ leise.",
    t2_inst: "[HU] Verbinde die Gegensätze!",
    t2_h1: "[HU] Was ist das Gegenteil von 'schnell'?",
    t2_h2: "[HU] schnell -> langsam, heiß -> kalt.",
    t2_l1: "[HU] heiß", t2_r1: "[HU] kalt",
    t2_l2: "[HU] groß", t2_r2: "[HU] klein",
    t2_l3: "[HU] schnell", t2_r3: "[HU] langsam",
    t2_l4: "[HU] laut", t2_r4: "[HU] leise",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T3: Nomen oder Adjektiv?
    t3_title: "[HU] Nomen oder Adjektiv?",
    t3_text: "[HU] Wir schreiben Nomen (Dinge) GROSS und Adjektive (Eigenschaften) klein. 'Das schöne Haus' - 'Haus' ist groß, 'schöne' ist klein.",
    t3_b1: "[HU] Nomen = groß.",
    t3_b2: "[HU] Adjektiv = klein.",
    t3_inst: "[HU] Sortiere die Wörter!",
    t3_h1: "[HU] Großgeschrieben = Nomen. Kleingeschrieben = Adjektiv.",
    t3_h2: "[HU] Apfel und Baum sind Nomen. bunt und weich sind Adjektive.",
    t3_bn: "[HU] Nomen 📦", t3_ba: "[HU] Adjektiv 🎨",
    t3_i1: "[HU] Apfel", t3_i2: "[HU] bunt", t3_i3: "[HU] weich", t3_i4: "[HU] Baum",
    // Quiz: MANUAL
    t3_q: "[HU] Wie schreiben wir Adjektive normalerweise im Satz?",
    t3_qa: "[HU] klein", t3_qb: "[HU] groß", t3_qc: "[HU] alles groß", t3_qd: "[HU] nur am Ende groß",

    // T4: Farben sind auch Adjektive
    t4_title: "[HU] Farben als Adjektive",
    t4_text: "[HU] Farben sagen uns auch, WIE etwas aussieht. Deshalb sind alle Farben Adjektive: rot, blau, gelb, grün!",
    t4_b1: "[HU] Alle Farben sind Adjektive.",
    t4_inst: "[HU] Welches Adjektiv passt in die Lücke?",
    t4_h1: "[HU] Welche Farbe hat eine reife Zitrone?",
    t4_h2: "[HU] Eine Zitrone ist gelb.",
    t4_sent: "[HU] Die Zitrone ist ___.",
    t4_c1: "[HU] gelb", t4_c2: "[HU] blau", t4_c3: "[HU] lila", t4_c4: "[HU] schwarz",
    // Quiz: GENERATOR (farben_k2)

    // T5: Vergleichen (Steigerung)
    t5_title: "[HU] Dinge vergleichen",
    t5_text: "[HU] Mit Adjektiven können wir Dinge vergleichen. Eine Maus ist klein. Ein Käfer ist kleiner. Ein Floh ist am kleinsten!",
    t5_b1: "[HU] Grundform: klein",
    t5_b2: "[HU] Vergleich: kleiner",
    t5_b3: "[HU] Höchste Stufe: am kleinsten",
    t5_inst: "[HU] Bringe die Wörter in die richtige Reihenfolge!",
    t5_h1: "[HU] Fange mit der Grundform an, dann die Steigerung.",
    t5_h2: "[HU] schnell -> schneller -> am schnellsten.",
    t5_o1: "[HU] schnell", t5_o2: "[HU] schneller", t5_o3: "[HU] am schnellsten",
    // Quiz: MANUAL
    t5_q: "[HU] Was ist richtig?",
    t5_qa: "[HU] groß - größer - am größten", t5_qb: "[HU] groß - großiger - am großesten", t5_qc: "[HU] groß - mehr groß - am mehr groß", t5_qd: "[HU] groß - kleinsten",

    // T6: Adjektive vor dem Nomen
    t6_title: "[HU] Adjektive vor dem Nomen",
    t6_text: "[HU] Oft stehen Adjektive direkt vor dem Nomen, um es zu beschreiben. Dann verändern sie ihre Endung: 'der Hund' + 'schnell' = 'der schnelle Hund'.",
    t6_b1: "[HU] Adjektive passen sich an.",
    t6_inst: "[HU] Baue den Satz in der richtigen Reihenfolge auf!",
    t6_h1: "[HU] Der Artikel (Der) kommt zuerst, dann das Adjektiv, dann das Nomen.",
    t6_h2: "[HU] Der kleine Hund bellt.",
    t6_f1: "[HU] Der", t6_f2: "[HU] kleine", t6_f3: "[HU] Hund", t6_f4: "[HU] bellt.",
    // Quiz: MANUAL
    t6_q: "[HU] Welcher Satzteil ist ein Adjektiv in: 'Das bunte Bild ist schön.'?",
    t6_qa: "[HU] bunte", t6_qb: "[HU] Das", t6_qc: "[HU] Bild", t6_qd: "[HU] ist",

    // T7: Finde das Gegenteil
    t7_title: "[HU] Finde das Gegenteil",
    t7_text: "[HU] Lass uns dein Wissen über Gegensätze noch einmal testen. Ein echter Adjektiv-Profi kennt viele Wiewörter!",
    t7_b1: "[HU] Denk an den Partner-Gegensatz.",
    t7_inst: "[HU] Welches Wort ist das Gegenteil von 'alt'?",
    t7_h1: "[HU] Wenn jemand nicht alt ist, ist er...",
    t7_h2: "[HU] Das Gegenteil von alt ist 'jung' oder 'neu'.",
    t7_sent: "[HU] Das Gegenteil von alt ist ___.",
    t7_c1: "[HU] jung", t7_c2: "[HU] groß", t7_c3: "[HU] schwer", t7_c4: "[HU] bunt",
    // Quiz: GENERATOR (adjektive_gegenteil)

    // T8-T15: Erweiterte Adjektivlektionen
    t8_title: "[HU] Adjektive mit Steigerung",
    t8_text: "[HU] Viele Adjektive haben eine Steigerungsform. Basis: schnell → Vergleich: schneller → Superlativ: am schnellsten. Das macht Vergleiche möglich!",
    t8_b1: "[HU] Basis → Vergleich → Superlativ",
    t8_b2: "[HU] schnell → schneller → am schnellsten",
    t8_b3: "[HU] Diese Formen muss man kennen!",
    t8_inst: "[HU] Finde alle Formen!",
    t8_h1: "[HU] Basis ist die einfache Form.",
    t8_h2: "[HU] schnell, schneller, am schnellsten.",
    t8_l1: "[HU] schnell", t8_r1: "[HU] schneller", t8_l2: "[HU] groß", t8_r2: "[HU] größer",

    t9_title: "[HU] Umlaut in Steigerung",
    t9_text: "[HU] Manche Adjektive bekommen einen Umlaut bei der Steigerung. Beispiel: alt → älter → am ältesten. Das ist eine spezielle Regel!",
    t9_b1: "[HU] Umlaut in Steigerung: ä, ö, ü",
    t9_b2: "[HU] alt → älter → am ältesten",
    t9_b3: "[HU] Diese Adjektive muss man lernen!",
    t9_inst: "[HU] Verbinde Basis und Superlativ!",
    t9_h1: "[HU] Welcher Superlativ hat einen Umlaut?",
    t9_h2: "[HU] alt → am ältesten. jung → am jüngsten.",
    t9_l1: "[HU] alt", t9_r1: "[HU] am ältesten",
    t9_l2: "[HU] jung", t9_r2: "[HU] am jüngsten",
    t9_l3: "[HU] kurz", t9_r3: "[HU] am kürzesten",
    t9_l4: "[HU] oft", t9_r4: "[HU] am öftesten",

    t10_title: "[HU] Unregelmäßige Adjektive",
    t10_text: "[HU] Manche Adjektive sind unregelmäßig. Sie ändern sich völlig: gut → besser → am besten. viel → mehr → am meisten. Diese Adjektive muss man auswendig lernen!",
    t10_b1: "[HU] Unregelmäßig = ändert sich völlig",
    t10_b2: "[HU] gut → besser → am besten",
    t10_b3: "[HU] Diese Adjektive muss man auswendig lernen!",
    t10_inst: "[HU] Finde die unregelmäßige Form!",
    t10_h1: "[HU] Wie ist die Superlativ-Form?",
    t10_h2: "[HU] gut → am besten. viel → am meisten.",
    t10_c1: "[HU] besser", t10_c2: "[HU] gut", t10_c3: "[HU] guten", t10_c4: "[HU] gu",
    t10_sent: "[HU] Das ist ___ als das andere.",

    t11_title: "[HU] Adjektive beschreiben Nomen",
    t11_text: "[HU] Adjektive stehen neben Nomen und machen sie interessanter! Der rote Ball, die schnelle Katze, das schöne Haus. Das Adjektiv passt sich an das Nomen an!",
    t11_b1: "[HU] Adjektiv + Nomen",
    t11_b2: "[HU] Das Adjektiv beschreibt das Nomen.",
    t11_b3: "[HU] Beispiel: der rote Ball, die schnelle Katze",
    t11_inst: "[HU] Sortiere Adjektive und Nomen!",
    t11_h1: "[HU] Welches Wort ist das Adjektiv?",
    t11_h2: "[HU] Das rote Haus: 'rot' ist das Adjektiv.",
    t11_ba: "[HU] Adjektiv 🎨", t11_bn: "[HU] Nomen 📦",
    t11_i1: "[HU] schnell", t11_i2: "[HU] Katze", t11_i3: "[HU] groß", t11_i4: "[HU] Baum",

    t12_title: "[HU] Farbwörter sind Adjektive",
    t12_text: "[HU] Farben sind spezielle Adjektive! Rot, blau, gelb, grün... Wir benutzen sie, um Dinge zu beschreiben. Der rote Apfel, das blaue Haus, die grüne Wiese.",
    t12_b1: "[HU] Farben = Adjektive",
    t12_b2: "[HU] rot, blau, gelb, grün, orange, rosa",
    t12_b3: "[HU] Wir benutzen sie täglich!",
    t12_inst: "[HU] Verbinde Farben und Objekte!",
    t12_h1: "[HU] Welche Farbe hat das Objekt normalerweise?",
    t12_h2: "[HU] Die Sonne ist gelb. Das Meer ist blau.",
    t12_l1: "[HU] Apfel", t12_r1: "[HU] rot",
    t12_l2: "[HU] Schnee", t12_r2: "[HU] weiß",
    t12_l3: "[HU] Gras", t12_r3: "[HU] grün",
    t12_l4: "[HU] Himmel", t12_r4: "[HU] blau",

    t13_title: "[HU] Persönlichkeits-Adjektive",
    t13_text: "[HU] Mit Adjektiven beschreiben wir Menschen und ihre Persönlichkeit! Mutig, ängstlich, freundlich, böse... Diese Adjektive helfen uns Charaktere zu verstehen.",
    t13_b1: "[HU] Persönlichkeits-Adjektive",
    t13_b2: "[HU] mutig, ängstlich, freundlich, böse",
    t13_b3: "[HU] Mit diesen beschreiben wir Menschen!",
    t13_inst: "[HU] Finde die Persönlichkeit!",
    t13_h1: "[HU] Welches Adjektiv passt?",
    t13_h2: "[HU] Der mutige Held kämpft gegen das Böse.",
    t13_w1: "[HU] Der", t13_w2: "[HU] mutige", t13_w3: "[HU] Held", t13_w4: "[HU] .",

    t14_title: "[HU] Adjektive als Prädikativ",
    t14_text: "[HU] Adjektive können nach dem Verb stehen: 'Der Apfel ist rot.' 'Die Katze ist schnell.' Hier beschreiben sie das Nomen und hängen vom Verb ab!",
    t14_b1: "[HU] Verb + Adjektiv (Prädikativ)",
    t14_b2: "[HU] Beispiel: Der Apfel ist rot.",
    t14_b3: "[HU] Das Adjektiv sitzt NACH dem Verb!",
    t14_inst: "[HU] Baue den Satz richtig!",
    t14_h1: "[HU] Welches Adjektiv passt?",
    t14_h2: "[HU] Der Himmel ist blau.",
    t14_f1: "[HU] Der Himmel", t14_f2: "[HU] ist", t14_f3: "[HU] blau", t14_f4: "[HU] .",

    t15_title: "[HU] Adjektiv Champion Finale!",
    t15_text: "[HU] Gratulieren! Du kennst jetzt alles über Adjektive! Steigerung, Farben, Persönlichkeit... Du bist ein echter Adjektiv-Meister!",
    t15_b1: "[HU] Du kennst Basis und Steigerung",
    t15_b2: "[HU] Du verstehst Farben und Eigenschaften",
    t15_b3: "[HU] Du beschreibst Dinge perfekt!",
    t15_inst: "[HU] Adjektiv-Champion-Herausforderung!",
    t15_h1: "[HU] Beschreibe etwas mit mehreren Adjektiven!",
    t15_h2: "[HU] Das große rote Haus ist sehr schön!",
    t15_w1: "[HU] Das", t15_w2: "[HU] schöne", t15_w3: "[HU] Haus", t15_w4: "[HU] .",
  
  },
  ro: {

    explorer_title: "[RO] Adjektivinsel",

    // T1: Was sind Adjektive?
    t1_title: "[RO] Was sind Adjektive?",
    t1_text: "[RO] Adjektive sagen uns, WIE ein Mensch, ein Tier oder ein Ding ist. Deshalb nennen wir sie auch Wiewörter! Zum Beispiel: der Hund ist 'schnell', der Baum ist 'hoch'.",
    t1_b1: "[RO] Adjektive = Wiewörter.",
    t1_b2: "[RO] Sie beschreiben Nomen genauer.",
    t1_inst: "[RO] Finde das Adjektiv im Satz!",
    t1_h1: "[RO] Frage dich: WIE ist die Katze?",
    t1_h2: "[RO] Die Katze ist 'müde'.",
    t1_w1: "[RO] Die", t1_w2: "[RO] Katze", t1_w3: "[RO] ist", t1_w4: "[RO] müde", t1_w5: "[RO] .",
    // Quiz: MANUAL
    t1_q: "[RO] Auf welche Frage antworten Adjektive (Wiewörter)?",
    t1_qa: "[RO] Wie ist etwas?", t1_qb: "[RO] Wer tut was?", t1_qc: "[RO] Wann passiert es?", t1_qd: "[RO] Wo ist es?",

    // T2: Gegensätze (Opposites)
    t2_title: "[RO] Gegensätze",
    t2_text: "[RO] Viele Adjektive haben einen Partner, der genau das Gegenteil bedeutet. Wenn es draußen nicht heiß ist, dann ist es... kalt!",
    t2_b1: "[RO] Gegensätze bedeuten das Gegenteil.",
    t2_b2: "[RO] groß ↔ klein, laut ↔ leise.",
    t2_inst: "[RO] Verbinde die Gegensätze!",
    t2_h1: "[RO] Was ist das Gegenteil von 'schnell'?",
    t2_h2: "[RO] schnell -> langsam, heiß -> kalt.",
    t2_l1: "[RO] heiß", t2_r1: "[RO] kalt",
    t2_l2: "[RO] groß", t2_r2: "[RO] klein",
    t2_l3: "[RO] schnell", t2_r3: "[RO] langsam",
    t2_l4: "[RO] laut", t2_r4: "[RO] leise",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T3: Nomen oder Adjektiv?
    t3_title: "[RO] Nomen oder Adjektiv?",
    t3_text: "[RO] Wir schreiben Nomen (Dinge) GROSS und Adjektive (Eigenschaften) klein. 'Das schöne Haus' - 'Haus' ist groß, 'schöne' ist klein.",
    t3_b1: "[RO] Nomen = groß.",
    t3_b2: "[RO] Adjektiv = klein.",
    t3_inst: "[RO] Sortiere die Wörter!",
    t3_h1: "[RO] Großgeschrieben = Nomen. Kleingeschrieben = Adjektiv.",
    t3_h2: "[RO] Apfel und Baum sind Nomen. bunt und weich sind Adjektive.",
    t3_bn: "[RO] Nomen 📦", t3_ba: "[RO] Adjektiv 🎨",
    t3_i1: "[RO] Apfel", t3_i2: "[RO] bunt", t3_i3: "[RO] weich", t3_i4: "[RO] Baum",
    // Quiz: MANUAL
    t3_q: "[RO] Wie schreiben wir Adjektive normalerweise im Satz?",
    t3_qa: "[RO] klein", t3_qb: "[RO] groß", t3_qc: "[RO] alles groß", t3_qd: "[RO] nur am Ende groß",

    // T4: Farben sind auch Adjektive
    t4_title: "[RO] Farben als Adjektive",
    t4_text: "[RO] Farben sagen uns auch, WIE etwas aussieht. Deshalb sind alle Farben Adjektive: rot, blau, gelb, grün!",
    t4_b1: "[RO] Alle Farben sind Adjektive.",
    t4_inst: "[RO] Welches Adjektiv passt in die Lücke?",
    t4_h1: "[RO] Welche Farbe hat eine reife Zitrone?",
    t4_h2: "[RO] Eine Zitrone ist gelb.",
    t4_sent: "[RO] Die Zitrone ist ___.",
    t4_c1: "[RO] gelb", t4_c2: "[RO] blau", t4_c3: "[RO] lila", t4_c4: "[RO] schwarz",
    // Quiz: GENERATOR (farben_k2)

    // T5: Vergleichen (Steigerung)
    t5_title: "[RO] Dinge vergleichen",
    t5_text: "[RO] Mit Adjektiven können wir Dinge vergleichen. Eine Maus ist klein. Ein Käfer ist kleiner. Ein Floh ist am kleinsten!",
    t5_b1: "[RO] Grundform: klein",
    t5_b2: "[RO] Vergleich: kleiner",
    t5_b3: "[RO] Höchste Stufe: am kleinsten",
    t5_inst: "[RO] Bringe die Wörter in die richtige Reihenfolge!",
    t5_h1: "[RO] Fange mit der Grundform an, dann die Steigerung.",
    t5_h2: "[RO] schnell -> schneller -> am schnellsten.",
    t5_o1: "[RO] schnell", t5_o2: "[RO] schneller", t5_o3: "[RO] am schnellsten",
    // Quiz: MANUAL
    t5_q: "[RO] Was ist richtig?",
    t5_qa: "[RO] groß - größer - am größten", t5_qb: "[RO] groß - großiger - am großesten", t5_qc: "[RO] groß - mehr groß - am mehr groß", t5_qd: "[RO] groß - kleinsten",

    // T6: Adjektive vor dem Nomen
    t6_title: "[RO] Adjektive vor dem Nomen",
    t6_text: "[RO] Oft stehen Adjektive direkt vor dem Nomen, um es zu beschreiben. Dann verändern sie ihre Endung: 'der Hund' + 'schnell' = 'der schnelle Hund'.",
    t6_b1: "[RO] Adjektive passen sich an.",
    t6_inst: "[RO] Baue den Satz in der richtigen Reihenfolge auf!",
    t6_h1: "[RO] Der Artikel (Der) kommt zuerst, dann das Adjektiv, dann das Nomen.",
    t6_h2: "[RO] Der kleine Hund bellt.",
    t6_f1: "[RO] Der", t6_f2: "[RO] kleine", t6_f3: "[RO] Hund", t6_f4: "[RO] bellt.",
    // Quiz: MANUAL
    t6_q: "[RO] Welcher Satzteil ist ein Adjektiv in: 'Das bunte Bild ist schön.'?",
    t6_qa: "[RO] bunte", t6_qb: "[RO] Das", t6_qc: "[RO] Bild", t6_qd: "[RO] ist",

    // T7: Finde das Gegenteil
    t7_title: "[RO] Finde das Gegenteil",
    t7_text: "[RO] Lass uns dein Wissen über Gegensätze noch einmal testen. Ein echter Adjektiv-Profi kennt viele Wiewörter!",
    t7_b1: "[RO] Denk an den Partner-Gegensatz.",
    t7_inst: "[RO] Welches Wort ist das Gegenteil von 'alt'?",
    t7_h1: "[RO] Wenn jemand nicht alt ist, ist er...",
    t7_h2: "[RO] Das Gegenteil von alt ist 'jung' oder 'neu'.",
    t7_sent: "[RO] Das Gegenteil von alt ist ___.",
    t7_c1: "[RO] jung", t7_c2: "[RO] groß", t7_c3: "[RO] schwer", t7_c4: "[RO] bunt",
    // Quiz: GENERATOR (adjektive_gegenteil)

    // T8-T15: Erweiterte Adjektivlektionen
    t8_title: "[RO] Adjektive mit Steigerung",
    t8_text: "[RO] Viele Adjektive haben eine Steigerungsform. Basis: schnell → Vergleich: schneller → Superlativ: am schnellsten. Das macht Vergleiche möglich!",
    t8_b1: "[RO] Basis → Vergleich → Superlativ",
    t8_b2: "[RO] schnell → schneller → am schnellsten",
    t8_b3: "[RO] Diese Formen muss man kennen!",
    t8_inst: "[RO] Finde alle Formen!",
    t8_h1: "[RO] Basis ist die einfache Form.",
    t8_h2: "[RO] schnell, schneller, am schnellsten.",
    t8_l1: "[RO] schnell", t8_r1: "[RO] schneller", t8_l2: "[RO] groß", t8_r2: "[RO] größer",

    t9_title: "[RO] Umlaut in Steigerung",
    t9_text: "[RO] Manche Adjektive bekommen einen Umlaut bei der Steigerung. Beispiel: alt → älter → am ältesten. Das ist eine spezielle Regel!",
    t9_b1: "[RO] Umlaut in Steigerung: ä, ö, ü",
    t9_b2: "[RO] alt → älter → am ältesten",
    t9_b3: "[RO] Diese Adjektive muss man lernen!",
    t9_inst: "[RO] Verbinde Basis und Superlativ!",
    t9_h1: "[RO] Welcher Superlativ hat einen Umlaut?",
    t9_h2: "[RO] alt → am ältesten. jung → am jüngsten.",
    t9_l1: "[RO] alt", t9_r1: "[RO] am ältesten",
    t9_l2: "[RO] jung", t9_r2: "[RO] am jüngsten",
    t9_l3: "[RO] kurz", t9_r3: "[RO] am kürzesten",
    t9_l4: "[RO] oft", t9_r4: "[RO] am öftesten",

    t10_title: "[RO] Unregelmäßige Adjektive",
    t10_text: "[RO] Manche Adjektive sind unregelmäßig. Sie ändern sich völlig: gut → besser → am besten. viel → mehr → am meisten. Diese Adjektive muss man auswendig lernen!",
    t10_b1: "[RO] Unregelmäßig = ändert sich völlig",
    t10_b2: "[RO] gut → besser → am besten",
    t10_b3: "[RO] Diese Adjektive muss man auswendig lernen!",
    t10_inst: "[RO] Finde die unregelmäßige Form!",
    t10_h1: "[RO] Wie ist die Superlativ-Form?",
    t10_h2: "[RO] gut → am besten. viel → am meisten.",
    t10_c1: "[RO] besser", t10_c2: "[RO] gut", t10_c3: "[RO] guten", t10_c4: "[RO] gu",
    t10_sent: "[RO] Das ist ___ als das andere.",

    t11_title: "[RO] Adjektive beschreiben Nomen",
    t11_text: "[RO] Adjektive stehen neben Nomen und machen sie interessanter! Der rote Ball, die schnelle Katze, das schöne Haus. Das Adjektiv passt sich an das Nomen an!",
    t11_b1: "[RO] Adjektiv + Nomen",
    t11_b2: "[RO] Das Adjektiv beschreibt das Nomen.",
    t11_b3: "[RO] Beispiel: der rote Ball, die schnelle Katze",
    t11_inst: "[RO] Sortiere Adjektive und Nomen!",
    t11_h1: "[RO] Welches Wort ist das Adjektiv?",
    t11_h2: "[RO] Das rote Haus: 'rot' ist das Adjektiv.",
    t11_ba: "[RO] Adjektiv 🎨", t11_bn: "[RO] Nomen 📦",
    t11_i1: "[RO] schnell", t11_i2: "[RO] Katze", t11_i3: "[RO] groß", t11_i4: "[RO] Baum",

    t12_title: "[RO] Farbwörter sind Adjektive",
    t12_text: "[RO] Farben sind spezielle Adjektive! Rot, blau, gelb, grün... Wir benutzen sie, um Dinge zu beschreiben. Der rote Apfel, das blaue Haus, die grüne Wiese.",
    t12_b1: "[RO] Farben = Adjektive",
    t12_b2: "[RO] rot, blau, gelb, grün, orange, rosa",
    t12_b3: "[RO] Wir benutzen sie täglich!",
    t12_inst: "[RO] Verbinde Farben und Objekte!",
    t12_h1: "[RO] Welche Farbe hat das Objekt normalerweise?",
    t12_h2: "[RO] Die Sonne ist gelb. Das Meer ist blau.",
    t12_l1: "[RO] Apfel", t12_r1: "[RO] rot",
    t12_l2: "[RO] Schnee", t12_r2: "[RO] weiß",
    t12_l3: "[RO] Gras", t12_r3: "[RO] grün",
    t12_l4: "[RO] Himmel", t12_r4: "[RO] blau",

    t13_title: "[RO] Persönlichkeits-Adjektive",
    t13_text: "[RO] Mit Adjektiven beschreiben wir Menschen und ihre Persönlichkeit! Mutig, ängstlich, freundlich, böse... Diese Adjektive helfen uns Charaktere zu verstehen.",
    t13_b1: "[RO] Persönlichkeits-Adjektive",
    t13_b2: "[RO] mutig, ängstlich, freundlich, böse",
    t13_b3: "[RO] Mit diesen beschreiben wir Menschen!",
    t13_inst: "[RO] Finde die Persönlichkeit!",
    t13_h1: "[RO] Welches Adjektiv passt?",
    t13_h2: "[RO] Der mutige Held kämpft gegen das Böse.",
    t13_w1: "[RO] Der", t13_w2: "[RO] mutige", t13_w3: "[RO] Held", t13_w4: "[RO] .",

    t14_title: "[RO] Adjektive als Prädikativ",
    t14_text: "[RO] Adjektive können nach dem Verb stehen: 'Der Apfel ist rot.' 'Die Katze ist schnell.' Hier beschreiben sie das Nomen und hängen vom Verb ab!",
    t14_b1: "[RO] Verb + Adjektiv (Prädikativ)",
    t14_b2: "[RO] Beispiel: Der Apfel ist rot.",
    t14_b3: "[RO] Das Adjektiv sitzt NACH dem Verb!",
    t14_inst: "[RO] Baue den Satz richtig!",
    t14_h1: "[RO] Welches Adjektiv passt?",
    t14_h2: "[RO] Der Himmel ist blau.",
    t14_f1: "[RO] Der Himmel", t14_f2: "[RO] ist", t14_f3: "[RO] blau", t14_f4: "[RO] .",

    t15_title: "[RO] Adjektiv Champion Finale!",
    t15_text: "[RO] Gratulieren! Du kennst jetzt alles über Adjektive! Steigerung, Farben, Persönlichkeit... Du bist ein echter Adjektiv-Meister!",
    t15_b1: "[RO] Du kennst Basis und Steigerung",
    t15_b2: "[RO] Du verstehst Farben und Eigenschaften",
    t15_b3: "[RO] Du beschreibst Dinge perfekt!",
    t15_inst: "[RO] Adjektiv-Champion-Herausforderung!",
    t15_h1: "[RO] Beschreibe etwas mit mehreren Adjektiven!",
    t15_h2: "[RO] Das große rote Haus ist sehr schön!",
    t15_w1: "[RO] Das", t15_w2: "[RO] schöne", t15_w3: "[RO] Haus", t15_w4: "[RO] .",
  
  }
};

export const ADJEKTIV_POOL: PoolTopicDef[] = [
  // ── 1. Was sind Adjektive? (highlight-text) ──────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: "schnell", color: "#10B981", bg: "#D1FAE5" }, { text: "hoch", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"],
      correctIndices: [3], // müde
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Gegensätze (match-pairs) ─────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["heiß", "kalt"], ["groß", "klein"]], color: "#EF4444" },
    bulletKeys: ["t2_b1", "t2_b2"],
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
    quiz: { generate: "gegensaetze_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 3. Nomen oder Adjektiv? (drag-to-bucket) ────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["Haus", "Baum"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["schön", "klein"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "nomen", label: "t3_bn" }, { id: "adjektiv", label: "t3_ba" }],
      items: [
        { text: "t3_i1", bucketId: "nomen" }, // Apfel
        { text: "t3_i2", bucketId: "adjektiv" }, // bunt
        { text: "t3_i3", bucketId: "adjektiv" }, // weich
        { text: "t3_i4", bucketId: "nomen" }, // Baum
      ],
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Farben sind Adjektive (gap-fill) ─────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "gelb", highlightChars: ["g"], color: "#F59E0B" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0, // gelb
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "farben_k2" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 5. Vergleichen (word-order) ─────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐭", label: "klein" }, { emoji: "🐜", label: "kleiner" }] },
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "word-order",
      words: ["t5_o2", "t5_o3", "t5_o1"], // keverve: schneller, am schnellsten, schnell
      correctOrder: [2, 0, 1], // schnell -> schneller -> am schnellsten
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Adjektive vor dem Nomen (sentence-build) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "der schnelle Hund", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"], // Der, kleine, Hund, bellt.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Gegenteil finden (gap-fill) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["alt", "jung"], ["neu", "alt"]], color: "#7C3AED" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t7_sent",
      choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"],
      correctIndex: 0, // jung
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "adjektive_gegenteil" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 8. Adjektive mit Steigerung (match-pairs) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "letter-pairs", pairs: [["schnell", "schneller"]], color: "#3B82F6" },
    bulletKeys: ["t8_b1", "t8_b2", "t8_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }],
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "zahlen_k2" },
  },

  // ── 9. Umlaut in Steigerung (match-pairs) ────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "letter-pairs", pairs: [["alt", "älter"]], color: "#EF4444" },
    bulletKeys: ["t9_b1", "t9_b2", "t9_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }, { left: "t9_l3", right: "t9_r3" }, { left: "t9_l4", right: "t9_r4" }],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "farben_k2" },
  },

  // ── 10. Unregelmäßige Adjektive (gap-fill) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "Unregelmäßig", emoji: "🎲", color: "#8B5CF6", bg: "#EDE9FE" }] },
    bulletKeys: ["t10_b1", "t10_b2", "t10_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "berufe_k2" },
  },

  // ── 11. Adjektive beschreiben Nomen (drag-to-bucket) ───── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "icon-grid", items: [{ emoji: "🎨", label: "Adjektiv" }, { emoji: "📦", label: "Nomen" }] },
    bulletKeys: ["t11_b1", "t11_b2", "t11_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "adj", label: "t11_ba" }, { id: "nom", label: "t11_bn" }],
      items: [{ text: "t11_i1", bucketId: "adj" }, { text: "t11_i2", bucketId: "nom" }, { text: "t11_i3", bucketId: "adj" }, { text: "t11_i4", bucketId: "nom" }],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "gegensaetze_k2" },
  },

  // ── 12. Farbwörter sind Adjektive (match-pairs) ──────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "Rot", emoji: "🔴", color: "#DC2626", bg: "#FEE2E2" }] },
    bulletKeys: ["t12_b1", "t12_b2", "t12_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [{ left: "t12_l1", right: "t12_r1" }, { left: "t12_l2", right: "t12_r2" }, { left: "t12_l3", right: "t12_r3" }, { left: "t12_l4", right: "t12_r4" }],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "farben_k2" },
  },

  // ── 13. Persönlichkeits-Adjektive (highlight-text) ──── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "mutig", highlightChars: ["m"], color: "#059669" },
    bulletKeys: ["t13_b1", "t13_b2", "t13_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [1, 2],
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "zeit_k2" },
  },

  // ── 14. Adjektive als Prädikativ (sentence-build) ────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "icon-grid", items: [{ emoji: "🍎", label: "ist rot" }] },
    bulletKeys: ["t14_b1", "t14_b2", "t14_b3"],
    interactive: {
      type: "sentence-build",
      fragments: ["t14_f1", "t14_f2", "t14_f3", "t14_f4"],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 15. Adjektiv Champion Finale! (word-order) ────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Adjektiv Master!", bg: "#FEF3C7" },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "word-order",
      words: ["t15_w4", "t15_w3", "t15_w2", "t15_w1"],
      correctOrder: [3, 2, 1, 0],
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "artikel_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Satzarteninsel
// Thema: Aussagesatz (.), Fragesatz (?), Ausrufesatz (!)
// ─────────────────────────────────────────────────────────────────────────────

export const SATZART_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzarteninsel",

    // T1: Der Aussagesatz (.)
    t1_title: "Der Aussagesatz (.)",
    t1_text: "Wenn wir einfach etwas erzählen oder erklären, machen wir am Ende einen Punkt (.). Die Stimme geht am Satzende nach unten.",
    t1_b1: "Wir erzählen etwas.",
    t1_b2: "Am Ende steht ein Punkt (.).",
    t1_inst: "Welches Zeichen gehört an das Ende?",
    t1_h1: "Der Satz erzählt einfach nur, dass die Sonne scheint.",
    t1_h2: "Du brauchst einen Punkt (.).",
    t1_sent: "Die Sonne scheint ___",
    t1_c1: ".", t1_c2: "?", t1_c3: "!", t1_c4: ",",
    // Quiz: GENERATOR (satzzeichen_k1)
    
    // T2: Der Fragesatz (?)
    t2_title: "Der Fragesatz (?)",
    t2_text: "Wenn wir etwas wissen wollen, stellen wir eine Frage. Am Ende steht ein Fragezeichen (?). Die Stimme geht am Ende nach oben ↗!",
    t2_b1: "Wir wollen etwas wissen.",
    t2_b2: "Am Ende steht ein Fragezeichen (?).",
    t2_inst: "Baue die Frage richtig zusammen!",
    t2_h1: "Das Fragewort (Wie) steht meistens am Anfang.",
    t2_h2: "Wie heißt du?",
    t2_f1: "Wie", t2_f2: "heißt", t2_f3: "du?",
    // Quiz: MANUAL
    t2_q: "Was macht die Stimme am Ende einer Frage?",
    t2_qa: "Sie geht nach oben ↗", t2_qb: "Sie geht nach unten ↘", t2_qc: "Sie flüstert", t2_qd: "Sie macht eine Pause",

    // T3: Fragewörter
    t3_title: "Die Fragewörter",
    t3_text: "Viele Fragen beginnen mit einem speziellen Fragewort. Diese fangen oft mit 'W' an: Wer, Wie, Was, Wo, Warum!",
    t3_b1: "Fragewörter fangen meist mit 'W' an.",
    t3_inst: "Finde das Fragewort in diesem Satz!",
    t3_h1: "Suche das Wort mit 'W' am Anfang.",
    t3_h2: "Das Fragewort ist 'Wo'.",
    t3_w1: "Wo", t3_w2: "ist", t3_w3: "mein", t3_w4: "Hund", t3_w5: "?",
    // Quiz: MANUAL
    t3_q: "Welches Wort ist ein Fragewort?",
    t3_qa: "Warum", t3_qb: "Wald", t3_qc: "Wasser", t3_qd: "Wiese",

    // T4: Der Ausrufesatz (!)
    t4_title: "Der Ausrufesatz (!)",
    t4_text: "Achtung! Wenn wir etwas rufen, befehlen oder uns erschrecken, benutzen wir ein Ausrufezeichen (!). Halt! Stopp! Hilfe!",
    t4_b1: "Wir rufen, befehlen oder warnen.",
    t4_b2: "Am Ende steht ein Ausrufezeichen (!).",
    t4_inst: "Welches Satzzeichen fehlt hier: 'Pass auf'?",
    t4_h1: "Das ist eine Warnung, man ruft es oft laut.",
    t4_h2: "Du brauchst das Ausrufezeichen (!).",
    t4_sent_a: "Pass auf ___",
    t4_ca1: "!", t4_ca2: ".", t4_ca3: "?", t4_ca4: ",",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T5: Punkt oder Fragezeichen?
    t5_title: "Punkt oder Fragezeichen?",
    t5_text: "Erkennst du den Unterschied? Eine Information bekommt einen Punkt. Eine Frage bekommt ein Fragezeichen.",
    t5_b1: "Erzählen = Punkt (.)",
    t5_b2: "Fragen = Fragezeichen (?)",
    t5_inst: "Sortiere die Sätze nach ihrem Endzeichen!",
    t5_h1: "Will der Satz etwas wissen oder nur etwas sagen?",
    t5_h2: "'Ich spiele.' ist ein Aussagesatz. 'Spielst du?' ist eine Frage.",
    t5_bp: "Punkt (.)", t5_bf: "Frage (?)",
    t5_i1: "Ich bin acht Jahre alt", t5_i2: "Wie alt bist du", t5_i3: "Es regnet heute", t5_i4: "Regnet es",
    // Quiz: MANUAL
    t5_q: "Was kommt ans Ende von: 'Ich mag Eis'?",
    t5_qa: "Ein Punkt (.)", t5_qb: "Ein Fragezeichen (?)", t5_qc: "Ein Ausrufezeichen (!)", t5_qd: "Gar nichts",

    // T6: Die Satzmelodie
    t6_title: "Die Satzmelodie",
    t6_text: "Wenn wir sprechen, singt unsere Stimme eine kleine Melodie. Beim Punkt (.) geht sie runter ↘. Beim Fragezeichen (?) geht sie hoch ↗.",
    t6_b1: "Punkt (.) ↘ Stimme runter.",
    t6_b2: "Frage (?) ↗ Stimme hoch.",
    t6_inst: "Verbinde das Zeichen mit der Satzmelodie!",
    t6_h1: "Bei der Frage geht die Stimme hoch.",
    t6_h2: "? -> Stimme hoch ↗, . -> Stimme runter ↘.",
    t6_l1: "?", t6_r1: "Stimme hoch ↗",
    t6_l2: ".", t6_r2: "Stimme runter ↘",
    t6_l3: "!", t6_r3: "Laut rufen 🗣️",
    // Quiz: MANUAL
    t6_q: "Bei welchem Zeichen geht die Stimme nach unten ↘?",
    t6_qa: "Beim Punkt (.)", t6_qb: "Beim Fragezeichen (?)", t6_qc: "Beim Komma (,)", t6_qd: "Beim Ausrufezeichen (!)",

    // T7: Sätze mischen (Wortstellung)
    t7_title: "Sätze umbauen",
    t7_text: "Wir können aus einem Aussagesatz eine Frage machen, indem wir die Wörter umstellen! 'Du kommst.' (.) wird zu 'Kommst du?' (?). Das Verb rutscht nach vorne!",
    t7_b1: "Aussage: Du spielst.",
    t7_b2: "Frage: Spielst du?",
    t7_inst: "Baue eine Frage aus diesen Wörtern!",
    t7_h1: "Bei der Frage ohne Fragewort steht das Verb (Tunwort) ganz vorne.",
    t7_h2: "Kommst du heute?",
        t7_o1: "Kommst", t7_o2: "du", t7_o3: "heute?",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T8: Das Komma im Satz
    t8_title: "Das Komma (,)",
    t8_text: "Das Komma ist wie eine kleine Pause beim Sprechen. Es hilft, Sätze zu teilen: 'Ich esse Apfel, Banane und Orange.' Das Komma trennt die Wörter.",
    t8_b1: "Komma = kleine Pause",
    t8_b2: "Es trennt Wörter und Teile.",
    t8_inst: "Wo kommt das Komma hin?",
    t8_h1: "Das Komma steht zwischen Wörtern in einer Liste.",
    t8_h2: "'Rot, Blau und Grün' -> Komma nach Rot und Blau.",
    t8_sent: "Ich sehe einen Hund ___ eine Katze und einen Vogel.",
    t8_c1: ",", t8_c2: ".", t8_c3: "?", t8_c4: "!",
    t8_q: "Wann brauchen wir ein Komma?",
    t8_qa: "Um Wörter in einer Liste zu trennen", t8_qb: "Am Ende von jedem Satz", t8_qc: "Vor dem ersten Wort", t8_qd: "Nie in Deutsch",

    // T9: Welches Satzzeichen passt?
    t9_title: "Das richtige Zeichen finden",
    t9_text: "Schau auf den Satz und denk: Ist es eine Aussage (.), eine Frage (?) oder ein Befehl (!)? Die Wörter verraten dir, welches Zeichen du brauchst!",
    t9_b1: "Aussage -> Punkt",
    t9_b2: "Frage -> Fragezeichen",
    t9_b3: "Befehl -> Ausrufezeichen",
    t9_inst: "Wähle das richtige Satzzeichen!",
    t9_h1: "Liest sich das wie Erzählung, Frage oder Befehl?",
    t9_h2: "'Komm her!' ist ein Befehl, also brauchen wir '!'",
    t9_sent: "Der Himmel ist blau ___",
    t9_c1: ".", t9_c2: "?", t9_c3: "!", t9_c4: ",",

    // T10: Mehrere Sätze verbinden
    t10_title: "Zwei Sätze verbinden",
    t10_text: "Wir können zwei Sätze verbinden mit 'und', 'aber', 'oder'. 'Der Hund spielt. Die Katze schläft.' wird zu 'Der Hund spielt und die Katze schläft.'",
    t10_b1: "Und = zusammen",
    t10_b2: "Aber = Gegensatz",
    t10_b3: "Oder = Wahl",
    t10_inst: "Welches Wort verbindet die Sätze?",
    t10_h1: "Denk: Geht es um Zusammengehöriges (und), einen Gegensatz (aber) oder eine Wahl (oder)?",
    t10_h2: "'Der Hund ist groß und die Katze ist klein.' = aber es passt auch.",
    t10_sent: "Ich mag Äpfel ___ Orangen.",
    t10_c1: "und", t10_c2: "aber", t10_c3: "oder", t10_c4: "weil",

    // T11: Satzzeichenmeister
    t11_title: "Satzzeichenmeister",
    t11_text: "Du kennst jetzt alle Satzzeichen: Punkt, Fragezeichen, Ausrufezeichen, Komma! Lass sie alle arbeiten!",
    t11_b1: "Punkt, Fragezeichen, Ausrufezeichen, Komma.",
    t11_inst: "Schreib das richtige Zeichen!",
    t11_h1: "Schau: Aussage? Frage? Befehl? Liste?",
    t11_h2: "Hier ist eine Antwort -> Punkt.",
    t11_sent: "Wie heißt du ___",
    t11_c1: "?", t11_c2: ".", t11_c3: "!", t11_c4: ",",
    t11_q: "Welches Satzzeichen steht am Ende einer Frage?",
    t11_qa: "Fragezeichen (?)", t11_qb: "Punkt (.)", t11_qc: "Ausrufezeichen (!)", t11_qd: "Komma (,)",

    // T12: Fragen und Befehle unterscheiden
    t12_title: "Frage oder Befehl?",
    t12_text: "Manche Sätze fangen mit einem Verb an und sehen aus wie Fragen. Aber wenn wir jemanden befehlen, ist es ein Befehl! 'Kommst du?' ist Frage (?). 'Komm!' ist Befehl (!).",
    t12_b1: "Frage: Kommst du? (?)",
    t12_b2: "Befehl: Komm! (!)",
    t12_inst: "Ist es eine Frage oder ein Befehl?",
    t12_h1: "Wollen wir etwas wissen (Frage) oder befehlen wir (Befehl)?",
    t12_h2: "'Hilf mir!' ist ein Befehl -> Ausrufezeichen.",
    t12_sent: "Schließ bitte die Tür ___",
    t12_c1: "!", t12_c2: "?", t12_c3: ".", t12_c4: ",",
    t12_i1: "Komm her!", t12_i2: "Kommst du?", t12_i3: "Sei leise!", t12_i4: "Spielst du?",

    // T13: Schreib das Gespräch auf
    t13_title: "Dialog richtig schreiben",
    t13_text: "Wenn zwei Personen sprechen, schreiben wir jede Rede in einen neuen Satz. Am Ende jeder Rede kommt das richtige Satzzeichen!",
    t13_b1: "Jede Rede = neuer Satz.",
    t13_b2: "Jede Rede hat das richtige Zeichen.",
    t13_inst: "Welches Zeichen fehlt?",
    t13_h1: "Anna fragt: also brauchen wir ein Fragezeichen oder Ausrufezeichen?",
    t13_h2: "'Wie geht es dir' ist eine Frage -> '?'",
    t13_w1: "Anna", t13_w2: "fragt", t13_w3: "Wie", t13_w4: "geht", t13_w5: "es", t13_w6: "dir",
    t13_q: "Paul sagt 'Ich spiele gern Fußball'. Was kommt am Ende?",
    t13_qa: "Punkt (.)", t13_qb: "Fragezeichen (?)", t13_qc: "Ausrufezeichen (!)", t13_qd: "Komma (,)",

    // T14: Listenmeister mit Kommas
    t14_title: "Listen mit Kommas schreiben",
    t14_text: "Wenn wir viele Dinge aufzählen, setzen wir überall Kommas hin! Aber VOR dem letzten 'und' kommt kein Komma mehr. 'Äpfel, Birnen, Orangen und Bananen' - KEIN Komma vor 'und'!",
    t14_b1: "Komma, Komma... und (KEIN Komma vor 'und')",
    t14_inst: "Wo kommt das Komma hin?",
    t14_h1: "Zähle: 1, 2, 3, und 4. Vor 'und' KEIN Komma!",
    t14_h2: "'Rot, Blau, Grün und Gelb' - kein Komma vor 'und'.",
    t14_sent: "Ich mag Schokolade ___ Gummibärchen und Bonbons.",
    t14_c1: ",", t14_c2: ".", t14_c3: "!", t14_c4: "?",

    // T15: Satzzeichen Champion!
    t15_title: "Satzzeichen Champion!",
    t15_text: "Gratulieren! Du bist jetzt Meister aller Satzzeichen! Du kennst Punkt, Fragezeichen, Ausrufezeichen und Komma. Das ist großartig!",
    t15_b1: "Du kennst: . ? ! ,",
    t15_b2: "Du weißt, wann du sie brauchst!",
    t15_inst: "Champion-Test: Welches Zeichen?",
    t15_h1: "Denk an alle Regeln!",
    t15_h2: "Aussage=Punkt, Frage=Fragezeichen, Befehl=Ausrufezeichen, Liste=Komma.",
    t15_sent: "Was ist dein Lieblingsspiel ___",
    t15_c1: "?", t15_c2: ".", t15_c3: "!", t15_c4: ",",
  },
  en: {

    explorer_title: "[EN] Satzarteninsel",

    // T1: Der Aussagesatz (.)
    t1_title: "[EN] Der Aussagesatz (.)",
    t1_text: "[EN] Wenn wir einfach etwas erzählen oder erklären, machen wir am Ende einen Punkt (.). Die Stimme geht am Satzende nach unten.",
    t1_b1: "[EN] Wir erzählen etwas.",
    t1_b2: "[EN] Am Ende steht ein Punkt (.).",
    t1_inst: "[EN] Welches Zeichen gehört an das Ende?",
    t1_h1: "[EN] Der Satz erzählt einfach nur, dass die Sonne scheint.",
    t1_h2: "[EN] Du brauchst einen Punkt (.).",
    t1_sent: "[EN] Die Sonne scheint ___",
    t1_c1: "[EN] .", t1_c2: "[EN] ?", t1_c3: "[EN] !", t1_c4: "[EN] ,",
    // Quiz: GENERATOR (satzzeichen_k1)
    
    // T2: Der Fragesatz (?)
    t2_title: "[EN] Der Fragesatz (?)",
    t2_text: "[EN] Wenn wir etwas wissen wollen, stellen wir eine Frage. Am Ende steht ein Fragezeichen (?). Die Stimme geht am Ende nach oben ↗!",
    t2_b1: "[EN] Wir wollen etwas wissen.",
    t2_b2: "[EN] Am Ende steht ein Fragezeichen (?).",
    t2_inst: "[EN] Baue die Frage richtig zusammen!",
    t2_h1: "[EN] Das Fragewort (Wie) steht meistens am Anfang.",
    t2_h2: "[EN] Wie heißt du?",
    t2_f1: "[EN] Wie", t2_f2: "[EN] heißt", t2_f3: "[EN] du?",
    // Quiz: MANUAL
    t2_q: "[EN] Was macht die Stimme am Ende einer Frage?",
    t2_qa: "[EN] Sie geht nach oben ↗", t2_qb: "[EN] Sie geht nach unten ↘", t2_qc: "[EN] Sie flüstert", t2_qd: "[EN] Sie macht eine Pause",

    // T3: Fragewörter
    t3_title: "[EN] Die Fragewörter",
    t3_text: "[EN] Viele Fragen beginnen mit einem speziellen Fragewort. Diese fangen oft mit 'W' an: Wer, Wie, Was, Wo, Warum!",
    t3_b1: "[EN] Fragewörter fangen meist mit 'W' an.",
    t3_inst: "[EN] Finde das Fragewort in diesem Satz!",
    t3_h1: "[EN] Suche das Wort mit 'W' am Anfang.",
    t3_h2: "[EN] Das Fragewort ist 'Wo'.",
    t3_w1: "[EN] Wo", t3_w2: "[EN] ist", t3_w3: "[EN] mein", t3_w4: "[EN] Hund", t3_w5: "[EN] ?",
    // Quiz: MANUAL
    t3_q: "[EN] Welches Wort ist ein Fragewort?",
    t3_qa: "[EN] Warum", t3_qb: "[EN] Wald", t3_qc: "[EN] Wasser", t3_qd: "[EN] Wiese",

    // T4: Der Ausrufesatz (!)
    t4_title: "[EN] Der Ausrufesatz (!)",
    t4_text: "[EN] Achtung! Wenn wir etwas rufen, befehlen oder uns erschrecken, benutzen wir ein Ausrufezeichen (!). Halt! Stopp! Hilfe!",
    t4_b1: "[EN] Wir rufen, befehlen oder warnen.",
    t4_b2: "[EN] Am Ende steht ein Ausrufezeichen (!).",
    t4_inst: "[EN] Welches Satzzeichen fehlt hier: 'Pass auf'?",
    t4_h1: "[EN] Das ist eine Warnung, man ruft es oft laut.",
    t4_h2: "[EN] Du brauchst das Ausrufezeichen (!).",
    t4_sent_a: "[EN] Pass auf ___",
    t4_ca1: "[EN] !", t4_ca2: "[EN] .", t4_ca3: "[EN] ?", t4_ca4: "[EN] ,",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T5: Punkt oder Fragezeichen?
    t5_title: "[EN] Punkt oder Fragezeichen?",
    t5_text: "[EN] Erkennst du den Unterschied? Eine Information bekommt einen Punkt. Eine Frage bekommt ein Fragezeichen.",
    t5_b1: "[EN] Erzählen = Punkt (.)",
    t5_b2: "[EN] Fragen = Fragezeichen (?)",
    t5_inst: "[EN] Sortiere die Sätze nach ihrem Endzeichen!",
    t5_h1: "[EN] Will der Satz etwas wissen oder nur etwas sagen?",
    t5_h2: "[EN] 'Ich spiele.' ist ein Aussagesatz. 'Spielst du?' ist eine Frage.",
    t5_bp: "[EN] Punkt (.)", t5_bf: "[EN] Frage (?)",
    t5_i1: "[EN] Ich bin acht Jahre alt", t5_i2: "[EN] Wie alt bist du", t5_i3: "[EN] Es regnet heute", t5_i4: "[EN] Regnet es",
    // Quiz: MANUAL
    t5_q: "[EN] Was kommt ans Ende von: 'Ich mag Eis'?",
    t5_qa: "[EN] Ein Punkt (.)", t5_qb: "[EN] Ein Fragezeichen (?)", t5_qc: "[EN] Ein Ausrufezeichen (!)", t5_qd: "[EN] Gar nichts",

    // T6: Die Satzmelodie
    t6_title: "[EN] Die Satzmelodie",
    t6_text: "[EN] Wenn wir sprechen, singt unsere Stimme eine kleine Melodie. Beim Punkt (.) geht sie runter ↘. Beim Fragezeichen (?) geht sie hoch ↗.",
    t6_b1: "[EN] Punkt (.) ↘ Stimme runter.",
    t6_b2: "[EN] Frage (?) ↗ Stimme hoch.",
    t6_inst: "[EN] Verbinde das Zeichen mit der Satzmelodie!",
    t6_h1: "[EN] Bei der Frage geht die Stimme hoch.",
    t6_h2: "[EN] ? -> Stimme hoch ↗, . -> Stimme runter ↘.",
    t6_l1: "[EN] ?", t6_r1: "[EN] Stimme hoch ↗",
    t6_l2: "[EN] .", t6_r2: "[EN] Stimme runter ↘",
    t6_l3: "[EN] !", t6_r3: "[EN] Laut rufen 🗣️",
    // Quiz: MANUAL
    t6_q: "[EN] Bei welchem Zeichen geht die Stimme nach unten ↘?",
    t6_qa: "[EN] Beim Punkt (.)", t6_qb: "[EN] Beim Fragezeichen (?)", t6_qc: "[EN] Beim Komma (,)", t6_qd: "[EN] Beim Ausrufezeichen (!)",

    // T7: Sätze mischen (Wortstellung)
    t7_title: "[EN] Sätze umbauen",
    t7_text: "[EN] Wir können aus einem Aussagesatz eine Frage machen, indem wir die Wörter umstellen! 'Du kommst.' (.) wird zu 'Kommst du?' (?). Das Verb rutscht nach vorne!",
    t7_b1: "[EN] Aussage: Du spielst.",
    t7_b2: "[EN] Frage: Spielst du?",
    t7_inst: "[EN] Baue eine Frage aus diesen Wörtern!",
    t7_h1: "[EN] Bei der Frage ohne Fragewort steht das Verb (Tunwort) ganz vorne.",
    t7_h2: "[EN] Kommst du heute?",
        t7_o1: "[EN] Kommst", t7_o2: "[EN] du", t7_o3: "[EN] heute?",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T8: Das Komma im Satz
    t8_title: "[EN] Das Komma (,)",
    t8_text: "[EN] Das Komma ist wie eine kleine Pause beim Sprechen. Es hilft, Sätze zu teilen: 'Ich esse Apfel, Banane und Orange.' Das Komma trennt die Wörter.",
    t8_b1: "[EN] Komma = kleine Pause",
    t8_b2: "[EN] Es trennt Wörter und Teile.",
    t8_inst: "[EN] Wo kommt das Komma hin?",
    t8_h1: "[EN] Das Komma steht zwischen Wörtern in einer Liste.",
    t8_h2: "[EN] 'Rot, Blau und Grün' -> Komma nach Rot und Blau.",
    t8_sent: "[EN] Ich sehe einen Hund ___ eine Katze und einen Vogel.",
    t8_c1: "[EN] ,", t8_c2: "[EN] .", t8_c3: "[EN] ?", t8_c4: "[EN] !",
    t8_q: "[EN] Wann brauchen wir ein Komma?",
    t8_qa: "[EN] Um Wörter in einer Liste zu trennen", t8_qb: "[EN] Am Ende von jedem Satz", t8_qc: "[EN] Vor dem ersten Wort", t8_qd: "[EN] Nie in Deutsch",

    // T9: Welches Satzzeichen passt?
    t9_title: "[EN] Das richtige Zeichen finden",
    t9_text: "[EN] Schau auf den Satz und denk: Ist es eine Aussage (.), eine Frage (?) oder ein Befehl (!)? Die Wörter verraten dir, welches Zeichen du brauchst!",
    t9_b1: "[EN] Aussage -> Punkt",
    t9_b2: "[EN] Frage -> Fragezeichen",
    t9_b3: "[EN] Befehl -> Ausrufezeichen",
    t9_inst: "[EN] Wähle das richtige Satzzeichen!",
    t9_h1: "[EN] Liest sich das wie Erzählung, Frage oder Befehl?",
    t9_h2: "[EN] 'Komm her!' ist ein Befehl, also brauchen wir '!'",
    t9_sent: "[EN] Der Himmel ist blau ___",
    t9_c1: "[EN] .", t9_c2: "[EN] ?", t9_c3: "[EN] !", t9_c4: "[EN] ,",

    // T10: Mehrere Sätze verbinden
    t10_title: "[EN] Zwei Sätze verbinden",
    t10_text: "[EN] Wir können zwei Sätze verbinden mit 'und', 'aber', 'oder'. 'Der Hund spielt. Die Katze schläft.' wird zu 'Der Hund spielt und die Katze schläft.'",
    t10_b1: "[EN] Und = zusammen",
    t10_b2: "[EN] Aber = Gegensatz",
    t10_b3: "[EN] Oder = Wahl",
    t10_inst: "[EN] Welches Wort verbindet die Sätze?",
    t10_h1: "[EN] Denk: Geht es um Zusammengehöriges (und), einen Gegensatz (aber) oder eine Wahl (oder)?",
    t10_h2: "[EN] 'Der Hund ist groß und die Katze ist klein.' = aber es passt auch.",
    t10_sent: "[EN] Ich mag Äpfel ___ Orangen.",
    t10_c1: "[EN] und", t10_c2: "[EN] aber", t10_c3: "[EN] oder", t10_c4: "[EN] weil",

    // T11: Satzzeichenmeister
    t11_title: "[EN] Satzzeichenmeister",
    t11_text: "[EN] Du kennst jetzt alle Satzzeichen: Punkt, Fragezeichen, Ausrufezeichen, Komma! Lass sie alle arbeiten!",
    t11_b1: "[EN] Punkt, Fragezeichen, Ausrufezeichen, Komma.",
    t11_inst: "[EN] Schreib das richtige Zeichen!",
    t11_h1: "[EN] Schau: Aussage? Frage? Befehl? Liste?",
    t11_h2: "[EN] Hier ist eine Antwort -> Punkt.",
    t11_sent: "[EN] Wie heißt du ___",
    t11_c1: "[EN] ?", t11_c2: "[EN] .", t11_c3: "[EN] !", t11_c4: "[EN] ,",
    t11_q: "[EN] Welches Satzzeichen steht am Ende einer Frage?",
    t11_qa: "[EN] Fragezeichen (?)", t11_qb: "[EN] Punkt (.)", t11_qc: "[EN] Ausrufezeichen (!)", t11_qd: "[EN] Komma (,)",

    // T12: Fragen und Befehle unterscheiden
    t12_title: "[EN] Frage oder Befehl?",
    t12_text: "[EN] Manche Sätze fangen mit einem Verb an und sehen aus wie Fragen. Aber wenn wir jemanden befehlen, ist es ein Befehl! 'Kommst du?' ist Frage (?). 'Komm!' ist Befehl (!).",
    t12_b1: "[EN] Frage: Kommst du? (?)",
    t12_b2: "[EN] Befehl: Komm! (!)",
    t12_inst: "[EN] Ist es eine Frage oder ein Befehl?",
    t12_h1: "[EN] Wollen wir etwas wissen (Frage) oder befehlen wir (Befehl)?",
    t12_h2: "[EN] 'Hilf mir!' ist ein Befehl -> Ausrufezeichen.",
    t12_sent: "[EN] Schließ bitte die Tür ___",
    t12_c1: "[EN] !", t12_c2: "[EN] ?", t12_c3: "[EN] .", t12_c4: "[EN] ,",
    t12_i1: "[EN] Komm her!", t12_i2: "[EN] Kommst du?", t12_i3: "[EN] Sei leise!", t12_i4: "[EN] Spielst du?",

    // T13: Schreib das Gespräch auf
    t13_title: "[EN] Dialog richtig schreiben",
    t13_text: "[EN] Wenn zwei Personen sprechen, schreiben wir jede Rede in einen neuen Satz. Am Ende jeder Rede kommt das richtige Satzzeichen!",
    t13_b1: "[EN] Jede Rede = neuer Satz.",
    t13_b2: "[EN] Jede Rede hat das richtige Zeichen.",
    t13_inst: "[EN] Welches Zeichen fehlt?",
    t13_h1: "[EN] Anna fragt: also brauchen wir ein Fragezeichen oder Ausrufezeichen?",
    t13_h2: "[EN] 'Wie geht es dir' ist eine Frage -> '?'",
    t13_w1: "[EN] Anna", t13_w2: "[EN] fragt", t13_w3: "[EN] Wie", t13_w4: "[EN] geht", t13_w5: "[EN] es", t13_w6: "[EN] dir",
    t13_q: "[EN] Paul sagt 'Ich spiele gern Fußball'. Was kommt am Ende?",
    t13_qa: "[EN] Punkt (.)", t13_qb: "[EN] Fragezeichen (?)", t13_qc: "[EN] Ausrufezeichen (!)", t13_qd: "[EN] Komma (,)",

    // T14: Listenmeister mit Kommas
    t14_title: "[EN] Listen mit Kommas schreiben",
    t14_text: "[EN] Wenn wir viele Dinge aufzählen, setzen wir überall Kommas hin! Aber VOR dem letzten 'und' kommt kein Komma mehr. 'Äpfel, Birnen, Orangen und Bananen' - KEIN Komma vor 'und'!",
    t14_b1: "[EN] Komma, Komma... und (KEIN Komma vor 'und')",
    t14_inst: "[EN] Wo kommt das Komma hin?",
    t14_h1: "[EN] Zähle: 1, 2, 3, und 4. Vor 'und' KEIN Komma!",
    t14_h2: "[EN] 'Rot, Blau, Grün und Gelb' - kein Komma vor 'und'.",
    t14_sent: "[EN] Ich mag Schokolade ___ Gummibärchen und Bonbons.",
    t14_c1: "[EN] ,", t14_c2: "[EN] .", t14_c3: "[EN] !", t14_c4: "[EN] ?",

    // T15: Satzzeichen Champion!
    t15_title: "[EN] Satzzeichen Champion!",
    t15_text: "[EN] Gratulieren! Du bist jetzt Meister aller Satzzeichen! Du kennst Punkt, Fragezeichen, Ausrufezeichen und Komma. Das ist großartig!",
    t15_b1: "[EN] Du kennst: . ? ! ,",
    t15_b2: "[EN] Du weißt, wann du sie brauchst!",
    t15_inst: "[EN] Champion-Test: Welches Zeichen?",
    t15_h1: "[EN] Denk an alle Regeln!",
    t15_h2: "[EN] Aussage=Punkt, Frage=Fragezeichen, Befehl=Ausrufezeichen, Liste=Komma.",
    t15_sent: "[EN] Was ist dein Lieblingsspiel ___",
    t15_c1: "[EN] ?", t15_c2: "[EN] .", t15_c3: "[EN] !", t15_c4: "[EN] ,",
  
  },
  hu: {

    explorer_title: "[HU] Satzarteninsel",

    // T1: Der Aussagesatz (.)
    t1_title: "[HU] Der Aussagesatz (.)",
    t1_text: "[HU] Wenn wir einfach etwas erzählen oder erklären, machen wir am Ende einen Punkt (.). Die Stimme geht am Satzende nach unten.",
    t1_b1: "[HU] Wir erzählen etwas.",
    t1_b2: "[HU] Am Ende steht ein Punkt (.).",
    t1_inst: "[HU] Welches Zeichen gehört an das Ende?",
    t1_h1: "[HU] Der Satz erzählt einfach nur, dass die Sonne scheint.",
    t1_h2: "[HU] Du brauchst einen Punkt (.).",
    t1_sent: "[HU] Die Sonne scheint ___",
    t1_c1: "[HU] .", t1_c2: "[HU] ?", t1_c3: "[HU] !", t1_c4: "[HU] ,",
    // Quiz: GENERATOR (satzzeichen_k1)
    
    // T2: Der Fragesatz (?)
    t2_title: "[HU] Der Fragesatz (?)",
    t2_text: "[HU] Wenn wir etwas wissen wollen, stellen wir eine Frage. Am Ende steht ein Fragezeichen (?). Die Stimme geht am Ende nach oben ↗!",
    t2_b1: "[HU] Wir wollen etwas wissen.",
    t2_b2: "[HU] Am Ende steht ein Fragezeichen (?).",
    t2_inst: "[HU] Baue die Frage richtig zusammen!",
    t2_h1: "[HU] Das Fragewort (Wie) steht meistens am Anfang.",
    t2_h2: "[HU] Wie heißt du?",
    t2_f1: "[HU] Wie", t2_f2: "[HU] heißt", t2_f3: "[HU] du?",
    // Quiz: MANUAL
    t2_q: "[HU] Was macht die Stimme am Ende einer Frage?",
    t2_qa: "[HU] Sie geht nach oben ↗", t2_qb: "[HU] Sie geht nach unten ↘", t2_qc: "[HU] Sie flüstert", t2_qd: "[HU] Sie macht eine Pause",

    // T3: Fragewörter
    t3_title: "[HU] Die Fragewörter",
    t3_text: "[HU] Viele Fragen beginnen mit einem speziellen Fragewort. Diese fangen oft mit 'W' an: Wer, Wie, Was, Wo, Warum!",
    t3_b1: "[HU] Fragewörter fangen meist mit 'W' an.",
    t3_inst: "[HU] Finde das Fragewort in diesem Satz!",
    t3_h1: "[HU] Suche das Wort mit 'W' am Anfang.",
    t3_h2: "[HU] Das Fragewort ist 'Wo'.",
    t3_w1: "[HU] Wo", t3_w2: "[HU] ist", t3_w3: "[HU] mein", t3_w4: "[HU] Hund", t3_w5: "[HU] ?",
    // Quiz: MANUAL
    t3_q: "[HU] Welches Wort ist ein Fragewort?",
    t3_qa: "[HU] Warum", t3_qb: "[HU] Wald", t3_qc: "[HU] Wasser", t3_qd: "[HU] Wiese",

    // T4: Der Ausrufesatz (!)
    t4_title: "[HU] Der Ausrufesatz (!)",
    t4_text: "[HU] Achtung! Wenn wir etwas rufen, befehlen oder uns erschrecken, benutzen wir ein Ausrufezeichen (!). Halt! Stopp! Hilfe!",
    t4_b1: "[HU] Wir rufen, befehlen oder warnen.",
    t4_b2: "[HU] Am Ende steht ein Ausrufezeichen (!).",
    t4_inst: "[HU] Welches Satzzeichen fehlt hier: 'Pass auf'?",
    t4_h1: "[HU] Das ist eine Warnung, man ruft es oft laut.",
    t4_h2: "[HU] Du brauchst das Ausrufezeichen (!).",
    t4_sent_a: "[HU] Pass auf ___",
    t4_ca1: "[HU] !", t4_ca2: "[HU] .", t4_ca3: "[HU] ?", t4_ca4: "[HU] ,",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T5: Punkt oder Fragezeichen?
    t5_title: "[HU] Punkt oder Fragezeichen?",
    t5_text: "[HU] Erkennst du den Unterschied? Eine Information bekommt einen Punkt. Eine Frage bekommt ein Fragezeichen.",
    t5_b1: "[HU] Erzählen = Punkt (.)",
    t5_b2: "[HU] Fragen = Fragezeichen (?)",
    t5_inst: "[HU] Sortiere die Sätze nach ihrem Endzeichen!",
    t5_h1: "[HU] Will der Satz etwas wissen oder nur etwas sagen?",
    t5_h2: "[HU] 'Ich spiele.' ist ein Aussagesatz. 'Spielst du?' ist eine Frage.",
    t5_bp: "[HU] Punkt (.)", t5_bf: "[HU] Frage (?)",
    t5_i1: "[HU] Ich bin acht Jahre alt", t5_i2: "[HU] Wie alt bist du", t5_i3: "[HU] Es regnet heute", t5_i4: "[HU] Regnet es",
    // Quiz: MANUAL
    t5_q: "[HU] Was kommt ans Ende von: 'Ich mag Eis'?",
    t5_qa: "[HU] Ein Punkt (.)", t5_qb: "[HU] Ein Fragezeichen (?)", t5_qc: "[HU] Ein Ausrufezeichen (!)", t5_qd: "[HU] Gar nichts",

    // T6: Die Satzmelodie
    t6_title: "[HU] Die Satzmelodie",
    t6_text: "[HU] Wenn wir sprechen, singt unsere Stimme eine kleine Melodie. Beim Punkt (.) geht sie runter ↘. Beim Fragezeichen (?) geht sie hoch ↗.",
    t6_b1: "[HU] Punkt (.) ↘ Stimme runter.",
    t6_b2: "[HU] Frage (?) ↗ Stimme hoch.",
    t6_inst: "[HU] Verbinde das Zeichen mit der Satzmelodie!",
    t6_h1: "[HU] Bei der Frage geht die Stimme hoch.",
    t6_h2: "[HU] ? -> Stimme hoch ↗, . -> Stimme runter ↘.",
    t6_l1: "[HU] ?", t6_r1: "[HU] Stimme hoch ↗",
    t6_l2: "[HU] .", t6_r2: "[HU] Stimme runter ↘",
    t6_l3: "[HU] !", t6_r3: "[HU] Laut rufen 🗣️",
    // Quiz: MANUAL
    t6_q: "[HU] Bei welchem Zeichen geht die Stimme nach unten ↘?",
    t6_qa: "[HU] Beim Punkt (.)", t6_qb: "[HU] Beim Fragezeichen (?)", t6_qc: "[HU] Beim Komma (,)", t6_qd: "[HU] Beim Ausrufezeichen (!)",

    // T7: Sätze mischen (Wortstellung)
    t7_title: "[HU] Sätze umbauen",
    t7_text: "[HU] Wir können aus einem Aussagesatz eine Frage machen, indem wir die Wörter umstellen! 'Du kommst.' (.) wird zu 'Kommst du?' (?). Das Verb rutscht nach vorne!",
    t7_b1: "[HU] Aussage: Du spielst.",
    t7_b2: "[HU] Frage: Spielst du?",
    t7_inst: "[HU] Baue eine Frage aus diesen Wörtern!",
    t7_h1: "[HU] Bei der Frage ohne Fragewort steht das Verb (Tunwort) ganz vorne.",
    t7_h2: "[HU] Kommst du heute?",
        t7_o1: "[HU] Kommst", t7_o2: "[HU] du", t7_o3: "[HU] heute?",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T8: Das Komma im Satz
    t8_title: "[HU] Das Komma (,)",
    t8_text: "[HU] Das Komma ist wie eine kleine Pause beim Sprechen. Es hilft, Sätze zu teilen: 'Ich esse Apfel, Banane und Orange.' Das Komma trennt die Wörter.",
    t8_b1: "[HU] Komma = kleine Pause",
    t8_b2: "[HU] Es trennt Wörter und Teile.",
    t8_inst: "[HU] Wo kommt das Komma hin?",
    t8_h1: "[HU] Das Komma steht zwischen Wörtern in einer Liste.",
    t8_h2: "[HU] 'Rot, Blau und Grün' -> Komma nach Rot und Blau.",
    t8_sent: "[HU] Ich sehe einen Hund ___ eine Katze und einen Vogel.",
    t8_c1: "[HU] ,", t8_c2: "[HU] .", t8_c3: "[HU] ?", t8_c4: "[HU] !",
    t8_q: "[HU] Wann brauchen wir ein Komma?",
    t8_qa: "[HU] Um Wörter in einer Liste zu trennen", t8_qb: "[HU] Am Ende von jedem Satz", t8_qc: "[HU] Vor dem ersten Wort", t8_qd: "[HU] Nie in Deutsch",

    // T9: Welches Satzzeichen passt?
    t9_title: "[HU] Das richtige Zeichen finden",
    t9_text: "[HU] Schau auf den Satz und denk: Ist es eine Aussage (.), eine Frage (?) oder ein Befehl (!)? Die Wörter verraten dir, welches Zeichen du brauchst!",
    t9_b1: "[HU] Aussage -> Punkt",
    t9_b2: "[HU] Frage -> Fragezeichen",
    t9_b3: "[HU] Befehl -> Ausrufezeichen",
    t9_inst: "[HU] Wähle das richtige Satzzeichen!",
    t9_h1: "[HU] Liest sich das wie Erzählung, Frage oder Befehl?",
    t9_h2: "[HU] 'Komm her!' ist ein Befehl, also brauchen wir '!'",
    t9_sent: "[HU] Der Himmel ist blau ___",
    t9_c1: "[HU] .", t9_c2: "[HU] ?", t9_c3: "[HU] !", t9_c4: "[HU] ,",

    // T10: Mehrere Sätze verbinden
    t10_title: "[HU] Zwei Sätze verbinden",
    t10_text: "[HU] Wir können zwei Sätze verbinden mit 'und', 'aber', 'oder'. 'Der Hund spielt. Die Katze schläft.' wird zu 'Der Hund spielt und die Katze schläft.'",
    t10_b1: "[HU] Und = zusammen",
    t10_b2: "[HU] Aber = Gegensatz",
    t10_b3: "[HU] Oder = Wahl",
    t10_inst: "[HU] Welches Wort verbindet die Sätze?",
    t10_h1: "[HU] Denk: Geht es um Zusammengehöriges (und), einen Gegensatz (aber) oder eine Wahl (oder)?",
    t10_h2: "[HU] 'Der Hund ist groß und die Katze ist klein.' = aber es passt auch.",
    t10_sent: "[HU] Ich mag Äpfel ___ Orangen.",
    t10_c1: "[HU] und", t10_c2: "[HU] aber", t10_c3: "[HU] oder", t10_c4: "[HU] weil",

    // T11: Satzzeichenmeister
    t11_title: "[HU] Satzzeichenmeister",
    t11_text: "[HU] Du kennst jetzt alle Satzzeichen: Punkt, Fragezeichen, Ausrufezeichen, Komma! Lass sie alle arbeiten!",
    t11_b1: "[HU] Punkt, Fragezeichen, Ausrufezeichen, Komma.",
    t11_inst: "[HU] Schreib das richtige Zeichen!",
    t11_h1: "[HU] Schau: Aussage? Frage? Befehl? Liste?",
    t11_h2: "[HU] Hier ist eine Antwort -> Punkt.",
    t11_sent: "[HU] Wie heißt du ___",
    t11_c1: "[HU] ?", t11_c2: "[HU] .", t11_c3: "[HU] !", t11_c4: "[HU] ,",
    t11_q: "[HU] Welches Satzzeichen steht am Ende einer Frage?",
    t11_qa: "[HU] Fragezeichen (?)", t11_qb: "[HU] Punkt (.)", t11_qc: "[HU] Ausrufezeichen (!)", t11_qd: "[HU] Komma (,)",

    // T12: Fragen und Befehle unterscheiden
    t12_title: "[HU] Frage oder Befehl?",
    t12_text: "[HU] Manche Sätze fangen mit einem Verb an und sehen aus wie Fragen. Aber wenn wir jemanden befehlen, ist es ein Befehl! 'Kommst du?' ist Frage (?). 'Komm!' ist Befehl (!).",
    t12_b1: "[HU] Frage: Kommst du? (?)",
    t12_b2: "[HU] Befehl: Komm! (!)",
    t12_inst: "[HU] Ist es eine Frage oder ein Befehl?",
    t12_h1: "[HU] Wollen wir etwas wissen (Frage) oder befehlen wir (Befehl)?",
    t12_h2: "[HU] 'Hilf mir!' ist ein Befehl -> Ausrufezeichen.",
    t12_sent: "[HU] Schließ bitte die Tür ___",
    t12_c1: "[HU] !", t12_c2: "[HU] ?", t12_c3: "[HU] .", t12_c4: "[HU] ,",
    t12_i1: "[HU] Komm her!", t12_i2: "[HU] Kommst du?", t12_i3: "[HU] Sei leise!", t12_i4: "[HU] Spielst du?",

    // T13: Schreib das Gespräch auf
    t13_title: "[HU] Dialog richtig schreiben",
    t13_text: "[HU] Wenn zwei Personen sprechen, schreiben wir jede Rede in einen neuen Satz. Am Ende jeder Rede kommt das richtige Satzzeichen!",
    t13_b1: "[HU] Jede Rede = neuer Satz.",
    t13_b2: "[HU] Jede Rede hat das richtige Zeichen.",
    t13_inst: "[HU] Welches Zeichen fehlt?",
    t13_h1: "[HU] Anna fragt: also brauchen wir ein Fragezeichen oder Ausrufezeichen?",
    t13_h2: "[HU] 'Wie geht es dir' ist eine Frage -> '?'",
    t13_w1: "[HU] Anna", t13_w2: "[HU] fragt", t13_w3: "[HU] Wie", t13_w4: "[HU] geht", t13_w5: "[HU] es", t13_w6: "[HU] dir",
    t13_q: "[HU] Paul sagt 'Ich spiele gern Fußball'. Was kommt am Ende?",
    t13_qa: "[HU] Punkt (.)", t13_qb: "[HU] Fragezeichen (?)", t13_qc: "[HU] Ausrufezeichen (!)", t13_qd: "[HU] Komma (,)",

    // T14: Listenmeister mit Kommas
    t14_title: "[HU] Listen mit Kommas schreiben",
    t14_text: "[HU] Wenn wir viele Dinge aufzählen, setzen wir überall Kommas hin! Aber VOR dem letzten 'und' kommt kein Komma mehr. 'Äpfel, Birnen, Orangen und Bananen' - KEIN Komma vor 'und'!",
    t14_b1: "[HU] Komma, Komma... und (KEIN Komma vor 'und')",
    t14_inst: "[HU] Wo kommt das Komma hin?",
    t14_h1: "[HU] Zähle: 1, 2, 3, und 4. Vor 'und' KEIN Komma!",
    t14_h2: "[HU] 'Rot, Blau, Grün und Gelb' - kein Komma vor 'und'.",
    t14_sent: "[HU] Ich mag Schokolade ___ Gummibärchen und Bonbons.",
    t14_c1: "[HU] ,", t14_c2: "[HU] .", t14_c3: "[HU] !", t14_c4: "[HU] ?",

    // T15: Satzzeichen Champion!
    t15_title: "[HU] Satzzeichen Champion!",
    t15_text: "[HU] Gratulieren! Du bist jetzt Meister aller Satzzeichen! Du kennst Punkt, Fragezeichen, Ausrufezeichen und Komma. Das ist großartig!",
    t15_b1: "[HU] Du kennst: . ? ! ,",
    t15_b2: "[HU] Du weißt, wann du sie brauchst!",
    t15_inst: "[HU] Champion-Test: Welches Zeichen?",
    t15_h1: "[HU] Denk an alle Regeln!",
    t15_h2: "[HU] Aussage=Punkt, Frage=Fragezeichen, Befehl=Ausrufezeichen, Liste=Komma.",
    t15_sent: "[HU] Was ist dein Lieblingsspiel ___",
    t15_c1: "[HU] ?", t15_c2: "[HU] .", t15_c3: "[HU] !", t15_c4: "[HU] ,",
  
  },
  ro: {

    explorer_title: "[RO] Satzarteninsel",

    // T1: Der Aussagesatz (.)
    t1_title: "[RO] Der Aussagesatz (.)",
    t1_text: "[RO] Wenn wir einfach etwas erzählen oder erklären, machen wir am Ende einen Punkt (.). Die Stimme geht am Satzende nach unten.",
    t1_b1: "[RO] Wir erzählen etwas.",
    t1_b2: "[RO] Am Ende steht ein Punkt (.).",
    t1_inst: "[RO] Welches Zeichen gehört an das Ende?",
    t1_h1: "[RO] Der Satz erzählt einfach nur, dass die Sonne scheint.",
    t1_h2: "[RO] Du brauchst einen Punkt (.).",
    t1_sent: "[RO] Die Sonne scheint ___",
    t1_c1: "[RO] .", t1_c2: "[RO] ?", t1_c3: "[RO] !", t1_c4: "[RO] ,",
    // Quiz: GENERATOR (satzzeichen_k1)
    
    // T2: Der Fragesatz (?)
    t2_title: "[RO] Der Fragesatz (?)",
    t2_text: "[RO] Wenn wir etwas wissen wollen, stellen wir eine Frage. Am Ende steht ein Fragezeichen (?). Die Stimme geht am Ende nach oben ↗!",
    t2_b1: "[RO] Wir wollen etwas wissen.",
    t2_b2: "[RO] Am Ende steht ein Fragezeichen (?).",
    t2_inst: "[RO] Baue die Frage richtig zusammen!",
    t2_h1: "[RO] Das Fragewort (Wie) steht meistens am Anfang.",
    t2_h2: "[RO] Wie heißt du?",
    t2_f1: "[RO] Wie", t2_f2: "[RO] heißt", t2_f3: "[RO] du?",
    // Quiz: MANUAL
    t2_q: "[RO] Was macht die Stimme am Ende einer Frage?",
    t2_qa: "[RO] Sie geht nach oben ↗", t2_qb: "[RO] Sie geht nach unten ↘", t2_qc: "[RO] Sie flüstert", t2_qd: "[RO] Sie macht eine Pause",

    // T3: Fragewörter
    t3_title: "[RO] Die Fragewörter",
    t3_text: "[RO] Viele Fragen beginnen mit einem speziellen Fragewort. Diese fangen oft mit 'W' an: Wer, Wie, Was, Wo, Warum!",
    t3_b1: "[RO] Fragewörter fangen meist mit 'W' an.",
    t3_inst: "[RO] Finde das Fragewort in diesem Satz!",
    t3_h1: "[RO] Suche das Wort mit 'W' am Anfang.",
    t3_h2: "[RO] Das Fragewort ist 'Wo'.",
    t3_w1: "[RO] Wo", t3_w2: "[RO] ist", t3_w3: "[RO] mein", t3_w4: "[RO] Hund", t3_w5: "[RO] ?",
    // Quiz: MANUAL
    t3_q: "[RO] Welches Wort ist ein Fragewort?",
    t3_qa: "[RO] Warum", t3_qb: "[RO] Wald", t3_qc: "[RO] Wasser", t3_qd: "[RO] Wiese",

    // T4: Der Ausrufesatz (!)
    t4_title: "[RO] Der Ausrufesatz (!)",
    t4_text: "[RO] Achtung! Wenn wir etwas rufen, befehlen oder uns erschrecken, benutzen wir ein Ausrufezeichen (!). Halt! Stopp! Hilfe!",
    t4_b1: "[RO] Wir rufen, befehlen oder warnen.",
    t4_b2: "[RO] Am Ende steht ein Ausrufezeichen (!).",
    t4_inst: "[RO] Welches Satzzeichen fehlt hier: 'Pass auf'?",
    t4_h1: "[RO] Das ist eine Warnung, man ruft es oft laut.",
    t4_h2: "[RO] Du brauchst das Ausrufezeichen (!).",
    t4_sent_a: "[RO] Pass auf ___",
    t4_ca1: "[RO] !", t4_ca2: "[RO] .", t4_ca3: "[RO] ?", t4_ca4: "[RO] ,",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T5: Punkt oder Fragezeichen?
    t5_title: "[RO] Punkt oder Fragezeichen?",
    t5_text: "[RO] Erkennst du den Unterschied? Eine Information bekommt einen Punkt. Eine Frage bekommt ein Fragezeichen.",
    t5_b1: "[RO] Erzählen = Punkt (.)",
    t5_b2: "[RO] Fragen = Fragezeichen (?)",
    t5_inst: "[RO] Sortiere die Sätze nach ihrem Endzeichen!",
    t5_h1: "[RO] Will der Satz etwas wissen oder nur etwas sagen?",
    t5_h2: "[RO] 'Ich spiele.' ist ein Aussagesatz. 'Spielst du?' ist eine Frage.",
    t5_bp: "[RO] Punkt (.)", t5_bf: "[RO] Frage (?)",
    t5_i1: "[RO] Ich bin acht Jahre alt", t5_i2: "[RO] Wie alt bist du", t5_i3: "[RO] Es regnet heute", t5_i4: "[RO] Regnet es",
    // Quiz: MANUAL
    t5_q: "[RO] Was kommt ans Ende von: 'Ich mag Eis'?",
    t5_qa: "[RO] Ein Punkt (.)", t5_qb: "[RO] Ein Fragezeichen (?)", t5_qc: "[RO] Ein Ausrufezeichen (!)", t5_qd: "[RO] Gar nichts",

    // T6: Die Satzmelodie
    t6_title: "[RO] Die Satzmelodie",
    t6_text: "[RO] Wenn wir sprechen, singt unsere Stimme eine kleine Melodie. Beim Punkt (.) geht sie runter ↘. Beim Fragezeichen (?) geht sie hoch ↗.",
    t6_b1: "[RO] Punkt (.) ↘ Stimme runter.",
    t6_b2: "[RO] Frage (?) ↗ Stimme hoch.",
    t6_inst: "[RO] Verbinde das Zeichen mit der Satzmelodie!",
    t6_h1: "[RO] Bei der Frage geht die Stimme hoch.",
    t6_h2: "[RO] ? -> Stimme hoch ↗, . -> Stimme runter ↘.",
    t6_l1: "[RO] ?", t6_r1: "[RO] Stimme hoch ↗",
    t6_l2: "[RO] .", t6_r2: "[RO] Stimme runter ↘",
    t6_l3: "[RO] !", t6_r3: "[RO] Laut rufen 🗣️",
    // Quiz: MANUAL
    t6_q: "[RO] Bei welchem Zeichen geht die Stimme nach unten ↘?",
    t6_qa: "[RO] Beim Punkt (.)", t6_qb: "[RO] Beim Fragezeichen (?)", t6_qc: "[RO] Beim Komma (,)", t6_qd: "[RO] Beim Ausrufezeichen (!)",

    // T7: Sätze mischen (Wortstellung)
    t7_title: "[RO] Sätze umbauen",
    t7_text: "[RO] Wir können aus einem Aussagesatz eine Frage machen, indem wir die Wörter umstellen! 'Du kommst.' (.) wird zu 'Kommst du?' (?). Das Verb rutscht nach vorne!",
    t7_b1: "[RO] Aussage: Du spielst.",
    t7_b2: "[RO] Frage: Spielst du?",
    t7_inst: "[RO] Baue eine Frage aus diesen Wörtern!",
    t7_h1: "[RO] Bei der Frage ohne Fragewort steht das Verb (Tunwort) ganz vorne.",
    t7_h2: "[RO] Kommst du heute?",
        t7_o1: "[RO] Kommst", t7_o2: "[RO] du", t7_o3: "[RO] heute?",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T8: Das Komma im Satz
    t8_title: "[RO] Das Komma (,)",
    t8_text: "[RO] Das Komma ist wie eine kleine Pause beim Sprechen. Es hilft, Sätze zu teilen: 'Ich esse Apfel, Banane und Orange.' Das Komma trennt die Wörter.",
    t8_b1: "[RO] Komma = kleine Pause",
    t8_b2: "[RO] Es trennt Wörter und Teile.",
    t8_inst: "[RO] Wo kommt das Komma hin?",
    t8_h1: "[RO] Das Komma steht zwischen Wörtern in einer Liste.",
    t8_h2: "[RO] 'Rot, Blau und Grün' -> Komma nach Rot und Blau.",
    t8_sent: "[RO] Ich sehe einen Hund ___ eine Katze und einen Vogel.",
    t8_c1: "[RO] ,", t8_c2: "[RO] .", t8_c3: "[RO] ?", t8_c4: "[RO] !",
    t8_q: "[RO] Wann brauchen wir ein Komma?",
    t8_qa: "[RO] Um Wörter in einer Liste zu trennen", t8_qb: "[RO] Am Ende von jedem Satz", t8_qc: "[RO] Vor dem ersten Wort", t8_qd: "[RO] Nie in Deutsch",

    // T9: Welches Satzzeichen passt?
    t9_title: "[RO] Das richtige Zeichen finden",
    t9_text: "[RO] Schau auf den Satz und denk: Ist es eine Aussage (.), eine Frage (?) oder ein Befehl (!)? Die Wörter verraten dir, welches Zeichen du brauchst!",
    t9_b1: "[RO] Aussage -> Punkt",
    t9_b2: "[RO] Frage -> Fragezeichen",
    t9_b3: "[RO] Befehl -> Ausrufezeichen",
    t9_inst: "[RO] Wähle das richtige Satzzeichen!",
    t9_h1: "[RO] Liest sich das wie Erzählung, Frage oder Befehl?",
    t9_h2: "[RO] 'Komm her!' ist ein Befehl, also brauchen wir '!'",
    t9_sent: "[RO] Der Himmel ist blau ___",
    t9_c1: "[RO] .", t9_c2: "[RO] ?", t9_c3: "[RO] !", t9_c4: "[RO] ,",

    // T10: Mehrere Sätze verbinden
    t10_title: "[RO] Zwei Sätze verbinden",
    t10_text: "[RO] Wir können zwei Sätze verbinden mit 'und', 'aber', 'oder'. 'Der Hund spielt. Die Katze schläft.' wird zu 'Der Hund spielt und die Katze schläft.'",
    t10_b1: "[RO] Und = zusammen",
    t10_b2: "[RO] Aber = Gegensatz",
    t10_b3: "[RO] Oder = Wahl",
    t10_inst: "[RO] Welches Wort verbindet die Sätze?",
    t10_h1: "[RO] Denk: Geht es um Zusammengehöriges (und), einen Gegensatz (aber) oder eine Wahl (oder)?",
    t10_h2: "[RO] 'Der Hund ist groß und die Katze ist klein.' = aber es passt auch.",
    t10_sent: "[RO] Ich mag Äpfel ___ Orangen.",
    t10_c1: "[RO] und", t10_c2: "[RO] aber", t10_c3: "[RO] oder", t10_c4: "[RO] weil",

    // T11: Satzzeichenmeister
    t11_title: "[RO] Satzzeichenmeister",
    t11_text: "[RO] Du kennst jetzt alle Satzzeichen: Punkt, Fragezeichen, Ausrufezeichen, Komma! Lass sie alle arbeiten!",
    t11_b1: "[RO] Punkt, Fragezeichen, Ausrufezeichen, Komma.",
    t11_inst: "[RO] Schreib das richtige Zeichen!",
    t11_h1: "[RO] Schau: Aussage? Frage? Befehl? Liste?",
    t11_h2: "[RO] Hier ist eine Antwort -> Punkt.",
    t11_sent: "[RO] Wie heißt du ___",
    t11_c1: "[RO] ?", t11_c2: "[RO] .", t11_c3: "[RO] !", t11_c4: "[RO] ,",
    t11_q: "[RO] Welches Satzzeichen steht am Ende einer Frage?",
    t11_qa: "[RO] Fragezeichen (?)", t11_qb: "[RO] Punkt (.)", t11_qc: "[RO] Ausrufezeichen (!)", t11_qd: "[RO] Komma (,)",

    // T12: Fragen und Befehle unterscheiden
    t12_title: "[RO] Frage oder Befehl?",
    t12_text: "[RO] Manche Sätze fangen mit einem Verb an und sehen aus wie Fragen. Aber wenn wir jemanden befehlen, ist es ein Befehl! 'Kommst du?' ist Frage (?). 'Komm!' ist Befehl (!).",
    t12_b1: "[RO] Frage: Kommst du? (?)",
    t12_b2: "[RO] Befehl: Komm! (!)",
    t12_inst: "[RO] Ist es eine Frage oder ein Befehl?",
    t12_h1: "[RO] Wollen wir etwas wissen (Frage) oder befehlen wir (Befehl)?",
    t12_h2: "[RO] 'Hilf mir!' ist ein Befehl -> Ausrufezeichen.",
    t12_sent: "[RO] Schließ bitte die Tür ___",
    t12_c1: "[RO] !", t12_c2: "[RO] ?", t12_c3: "[RO] .", t12_c4: "[RO] ,",
    t12_i1: "[RO] Komm her!", t12_i2: "[RO] Kommst du?", t12_i3: "[RO] Sei leise!", t12_i4: "[RO] Spielst du?",

    // T13: Schreib das Gespräch auf
    t13_title: "[RO] Dialog richtig schreiben",
    t13_text: "[RO] Wenn zwei Personen sprechen, schreiben wir jede Rede in einen neuen Satz. Am Ende jeder Rede kommt das richtige Satzzeichen!",
    t13_b1: "[RO] Jede Rede = neuer Satz.",
    t13_b2: "[RO] Jede Rede hat das richtige Zeichen.",
    t13_inst: "[RO] Welches Zeichen fehlt?",
    t13_h1: "[RO] Anna fragt: also brauchen wir ein Fragezeichen oder Ausrufezeichen?",
    t13_h2: "[RO] 'Wie geht es dir' ist eine Frage -> '?'",
    t13_w1: "[RO] Anna", t13_w2: "[RO] fragt", t13_w3: "[RO] Wie", t13_w4: "[RO] geht", t13_w5: "[RO] es", t13_w6: "[RO] dir",
    t13_q: "[RO] Paul sagt 'Ich spiele gern Fußball'. Was kommt am Ende?",
    t13_qa: "[RO] Punkt (.)", t13_qb: "[RO] Fragezeichen (?)", t13_qc: "[RO] Ausrufezeichen (!)", t13_qd: "[RO] Komma (,)",

    // T14: Listenmeister mit Kommas
    t14_title: "[RO] Listen mit Kommas schreiben",
    t14_text: "[RO] Wenn wir viele Dinge aufzählen, setzen wir überall Kommas hin! Aber VOR dem letzten 'und' kommt kein Komma mehr. 'Äpfel, Birnen, Orangen und Bananen' - KEIN Komma vor 'und'!",
    t14_b1: "[RO] Komma, Komma... und (KEIN Komma vor 'und')",
    t14_inst: "[RO] Wo kommt das Komma hin?",
    t14_h1: "[RO] Zähle: 1, 2, 3, und 4. Vor 'und' KEIN Komma!",
    t14_h2: "[RO] 'Rot, Blau, Grün und Gelb' - kein Komma vor 'und'.",
    t14_sent: "[RO] Ich mag Schokolade ___ Gummibärchen und Bonbons.",
    t14_c1: "[RO] ,", t14_c2: "[RO] .", t14_c3: "[RO] !", t14_c4: "[RO] ?",

    // T15: Satzzeichen Champion!
    t15_title: "[RO] Satzzeichen Champion!",
    t15_text: "[RO] Gratulieren! Du bist jetzt Meister aller Satzzeichen! Du kennst Punkt, Fragezeichen, Ausrufezeichen und Komma. Das ist großartig!",
    t15_b1: "[RO] Du kennst: . ? ! ,",
    t15_b2: "[RO] Du weißt, wann du sie brauchst!",
    t15_inst: "[RO] Champion-Test: Welches Zeichen?",
    t15_h1: "[RO] Denk an alle Regeln!",
    t15_h2: "[RO] Aussage=Punkt, Frage=Fragezeichen, Befehl=Ausrufezeichen, Liste=Komma.",
    t15_sent: "[RO] Was ist dein Lieblingsspiel ___",
    t15_c1: "[RO] ?", t15_c2: "[RO] .", t15_c3: "[RO] !", t15_c4: "[RO] ,",
  
  }
};

export const SATZART_POOL: PoolTopicDef[] = [
  // ── 1. Der Aussagesatz (.) (gap-fill) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [ { text: ".", emoji: "🔵", color: "#1D4ED8", bg: "#DBEAFE" } ] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], // ., ?, !, ,
      correctIndex: 0, // .
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 2. Der Fragesatz (?) (sentence-build) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "?", emoji: "❓", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "sentence-build",
      fragments: ["t2_f1", "t2_f2", "t2_f3"], // Wie, heißt, du?
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" },
  },

  // ── 3. Die Fragewörter (highlight-text) ──────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "letter-circles", letters: ["W", "e", "r", "?"], color: "#F59E0B" },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"],
      correctIndices: [0], // Wo
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Der Ausrufesatz (!) (gap-fill) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "text-bubbles", items: [ { text: "!", emoji: "❗", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent_a",
      choices: ["t4_ca1", "t4_ca2", "t4_ca3", "t4_ca4"], // !, ., ?, ,
      correctIndex: 0, // !
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 5. Punkt oder Fragezeichen? (drag-to-bucket) ─────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["."], bg: "#E0F2FE", border: "#0EA5E9" }, right: { items: ["?"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "p", label: "t5_bp" }, { id: "f", label: "t5_bf" }],
      items: [
        { text: "t5_i1", bucketId: "p" }, // Punkt
        { text: "t5_i2", bucketId: "f" }, // Frage
        { text: "t5_i3", bucketId: "p" }, // Punkt
        { text: "t5_i4", bucketId: "f" }, // Frage
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Die Satzmelodie (match-pairs) ─────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["?", "↗"], [".", "↘"]], color: "#7C3AED" },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Sätze umbauen (word-order) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "sentence-display", words: ["Kommst", "du", "heute", "?"], highlightIndices: [0], color: "#EC4899" },
    bulletKeys: ["t7_b1", "t7_b2"],
    interactive: {
      type: "word-order",
      words: ["t7_o2", "t7_o3", "t7_o1"], // keverve: du, heute?, Kommst
      correctOrder: [2, 0, 1], // Kommst -> du -> heute?
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "satzzeichen_k1" }, // ❤️ GENERATOR HASZNÁLATA
  },

  // ── 8. Das Komma (gap-fill) ───────────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: ",", emoji: "✋", color: "#7C3AED", bg: "#EDE9FE" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t8_sent",
      choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"],
      correctIndex: 0,
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Richtiges Zeichen (gap-fill) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [ { text: ".", emoji: "🔵", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "?", emoji: "❓", color: "#B91C1C", bg: "#FEE2E2" }, { text: "!", emoji: "❗", color: "#047857", bg: "#D1FAE5" } ] },
    bulletKeys: ["t9_b1", "t9_b2", "t9_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 0,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 10. Satze verbinden (gap-fill) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "letter-pairs", pairs: [["und", "+"], ["aber", "X"]], color: "#10B981" },
    bulletKeys: ["t10_b1", "t10_b2", "t10_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 11. Satzzeichenmeister (gap-fill) ─────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [ { text: ". ? ! ,", emoji: "🏆", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t11_sent",
      choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"],
      correctIndex: 0,
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Frage oder Befehl? (drag-to-bucket) ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["?"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["!"], bg: "#D1FAE5", border: "#047857" } },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "frage", label: "t12_b1" }, { id: "befehl", label: "t12_b2" }],
      items: [
        { text: "t12_i1", bucketId: "befehl" },
        { text: "t12_i2", bucketId: "frage" },
        { text: "t12_i3", bucketId: "befehl" },
        { text: "t12_i4", bucketId: "frage" },
      ],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 13. Dialog richtig schreiben (highlight-text) ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "icon-grid", items: [ { emoji: "💬", label: "Dialog" }, { emoji: "❓", label: "Frage" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4", "t13_w5", "t13_w6"],
      correctIndices: [2], // Wie
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. Listen mit Kommas (gap-fill) ──────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "letter-pairs", pairs: [["A,B,C", "und D"]], color: "#8B5CF6" },
    bulletKeys: ["t14_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_sent",
      choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 15. Satzzeichen Champion! (gap-fill) ───────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "Champion!", emoji: "🏆", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent",
      choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Großschreibungsinsel
// Thema: Nomen groß, Satzanfang groß, Adjektive/Verben klein
// ─────────────────────────────────────────────────────────────────────────────

export const GROSS_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Großschreibungsinsel",

    // T1: Der Satzanfang
    t1_title: "Der Satzanfang",
    t1_text: "Jeder Satz hat einen Anführer: das erste Wort. Und dieser Anführer wird immer mit einem GROSSEN Buchstaben geschrieben!",
    t1_b1: "Das erste Wort im Satz ist groß.",
    t1_b2: "Egal, welches Wort es ist.",
    t1_inst: "Welches Wort ist am Satzanfang richtig?",
    t1_h1: "Der erste Buchstabe muss groß sein.",
    t1_h2: "'Wir' wird am Anfang großgeschrieben.",
    t1_sent: "___ spielen heute im Garten.",
    t1_c1: "Wir", t1_c2: "wir", t1_c3: "wIr", t1_c4: "wiR",
    // Quiz: MANUAL
    t1_q: "Wie schreiben wir das erste Wort in einem Satz?",
    t1_qa: "Am Anfang groß", t1_qb: "Immer klein", t1_qc: "Alles groß", t1_qd: "Wie wir wollen",

    // T2: Nomen schreibt man groß
    t2_title: "Nomen schreibt man groß",
    t2_text: "Erinnerst du dich an die Namenwörter (Nomen)? Alle Menschen, Tiere, Dinge und Orte schreiben wir immer GROSS!",
    t2_b1: "Menschen, Tiere, Dinge = GROSS.",
    t2_b2: "Hund, Katze, Haus, Baum.",
    t2_inst: "Finde das richtig geschriebene Nomen!",
    t2_h1: "Es ist ein Tier, also muss es groß sein.",
    t2_h2: "'Hase' ist richtig.",
    t2_w1: "hase", t2_w2: "Hase", t2_w3: "haSe", t2_w4: "HASse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Verben und Adjektive klein
    t3_title: "Verben und Adjektive klein",
    t3_text: "Tunwörter (Verben) und Wiewörter (Adjektive) schreiben wir normalerweise klein. Sie sind die 'Leisen' im Satz.",
    t3_b1: "Verben (laufen, spielen) = klein.",
    t3_b2: "Adjektive (schnell, bunt) = klein.",
    t3_inst: "Welches Wort muss klein geschrieben werden?",
    t3_h1: "Suche das Tunwort (Verb).",
    t3_h2: "'rennen' schreiben wir klein.",
    t3_w1: "Haus", t3_w2: "Hund", t3_w3: "rennen", t3_w4: "Sonne",
    // Quiz: GENERATOR (verben_k2)

    // T4: Groß oder klein? (Sortieren)
    t4_title: "Groß oder klein?",
    t4_text: "Kannst du die Wörter richtig sortieren? Denk an die Regel: Nomen sind groß, Verben und Adjektive sind klein.",
    t4_b1: "Groß 🅰️ = Nomen.",
    t4_b2: "Klein ⓐ = Verben / Adjektive.",
    t4_inst: "Sortiere die Wörter in die richtigen Körbe!",
    t4_h1: "Was ist ein Ding (groß) und miat lehet csinálni (kicsi)?",
    t4_h2: "Apfel (Nomen) -> Groß. singen (Verb) -> Klein.",
    t4_bg: "Groß 🅰️", t4_bk: "Klein ⓐ",
    t4_i1: "Apfel", t4_i2: "singen", t4_i3: "bunt", t4_i4: "Auto",
    // Quiz: MANUAL
    t4_q: "Wie schreiben wir 'schnell' mitten im Satz?",
    t4_qa: "klein", t4_qb: "groß", t4_qc: "groß, wenn es wichtig ist", t4_qd: "mit Punkt",

    // T5: Fehler-Detektiv
    t5_title: "Fehler-Detektiv",
    t5_text: "In diesem Satz hat sich ein Fehler versteckt! Ein Nomen wurde klein geschrieben. Kannst du es finden?",
    t5_b1: "Nomen müssen groß sein.",
    t5_inst: "Klicke auf das Wort, das GROSS sein müsste!",
    t5_h1: "Suche das Tier im Satz.",
    t5_h2: "Das Wort 'maus' muss groß geschrieben werden.",
    t5_w1: "Die", t5_w2: "kleine", t5_w3: "maus", t5_w4: "piepst", t5_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Der Satz-Baumeister
    t6_title: "Der Satz-Baumeister",
    t6_text: "Baue den Satz zusammen. Achte darauf, dass das erste Wort einen großen Anfangsbuchstaben hat!",
    t6_b1: "Satzanfang = GROSS.",
    t6_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "Welches Wort fängt groß an? Das muss an den Start.",
    t6_h2: "Der Apfel ist rot.",
    t6_f1: "Der", t6_f2: "Apfel", t6_f3: "ist", t6_f4: "rot.",
    // Quiz: MANUAL
    t6_q: "Welches Wort im Satz 'Der Baum ist grün.' ist ein Nomen?",
    t6_qa: "Baum", t6_qb: "Der", t6_qc: "ist", t6_qd: "grün",

    // T7: Alles im Blick?
    t7_title: "Alles im Blick?",
    t7_text: "Nagybetűs check! Du weißt jetzt, wann wir groß und wann wir klein schreiben. Teste dein Wissen ein letztes Mal!",
    t7_b1: "Anfang & Nomen = GROSS.",
    t7_inst: "Welcher Satz ist perfekt geschrieben?",
    t7_h1: "Prüfe den Anfang und alle Nomen.",
    t7_h2: "'Die Katze spielt.' ist richtig.",
    t7_s1: "Die Katze spielt.", t7_s2: "die katze spielt.", t7_s3: "Die katze spielt.", t7_s4: "die Katze spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Großbuchstaben in Namen
    t8_title: "Eigennamen schreiben",
    t8_text: "Namen von Personen, Orten und besondere Dinge schreiben wir GROSS! Beispiele: Anna, Berlin, Montag, Ostern. Diese Wörter sind etwas Besonderes!",
    t8_b1: "Eigennamen = Personen, Orte, Tage, Feste",
    t8_b2: "Alle Eigennamen schreiben wir GROSS!",
    t8_inst: "Welches Wort ist ein Eigenname und muss groß sein?",
    t8_h1: "Was ist ein spezieller Name einer Person oder eines Ortes?",
    t8_h2: "'Berlin' ist ein Ort, also schreiben wir es groß.",
    t8_w1: "anna", t8_w2: "Anna", t8_w3: "mädchen", t8_w4: "AnNA",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wochentage und Monate
    t9_title: "Wochentage und Monate",
    t9_text: "Montag, Freitag, Januar, Juli - diese schreiben wir immer GROSS! Sie sind Eigennamen.",
    t9_b1: "Montag, Dienstag, Mittwoch...",
    t9_b2: "Januar, Februar, März... alle groß!",
    t9_inst: "Sortiere: Welche Wörter sind Wochentage oder Monate?",
    t9_h1: "Was sind Tage der Woche?",
    t9_h2: "Montag und Juni sind Eigennamen - groß!",
    t9_btime: "Wochentag/Monat", t9_bother: "Anderes",
    t9_i1: "Montag", t9_i2: "spielen", t9_i3: "Juni", t9_i4: "lachen",
    // Quiz: GENERATOR (zeit_k2)

    // T10: Artikel und Nomen Zusammenspiel
    t10_title: "Artikel und Nomen",
    t10_text: "Der Artikel (der, die, das) ist immer klein, aber das Nomen dahinter ist GROSS! Ein Nomen ist Teil einer Nominalgruppe.",
    t10_b1: "Artikel = klein (der, die, das)",
    t10_b2: "Nomen = GROSS (Hund, Katze, Haus)",
    t10_inst: "Finde das großgeschriebene Nomen!",
    t10_h1: "Nach dem Artikel kommt das Nomen - und es ist groß!",
    t10_h2: "'der Hund' - Hund ist groß!",
    t10_w1: "der", t10_w2: "Hund", t10_w3: "spielt", t10_w4: "glücklich",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Satzanfang und Großschreibung kombiniert
    t11_title: "Satzanfang und Nomen",
    t11_text: "Der Satzanfang ist groß UND die Nomen sind groß! Das bedeutet: Manche Großbuchstaben kommen vom Satzanfang, andere vom Nomen!",
    t11_b1: "Satzanfang = groß (ist Regel 1)",
    t11_b2: "Nomen = groß (ist Regel 2)",
    t11_inst: "Welcher Satz ist perfekt geschrieben?",
    t11_h1: "Zwei Regeln: Anfang UND Nomen!",
    t11_h2: "'Der Hund spielt.' - Der (Anfang) und Hund (Nomen) sind groß.",
    t11_sent1: "Der Hund spielt.", t11_sent2: "der Hund Spielt.", t11_sent3: "Der hund spielt.", t11_sent4: "der hund spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Adjektive in der Nominalgruppe
    t12_title: "Adjektive in Nominalgruppen",
    t12_text: "Wenn ein Adjektiv direkt VOR einem Nomen steht, bleibt es klein! 'Der schöne Garten' - 'schöne' ist klein, 'Garten' ist groß!",
    t12_b1: "Adjektiv vor Nomen = klein (schöne)",
    t12_b2: "Nomen bleibt GROSS (Garten)",
    t12_inst: "Schreib das Adjektiv richtig: klein atau groß?",
    t12_h1: "Das Adjektiv steht VOR dem Nomen - es bleibt klein!",
    t12_h2: "'der grüne Baum' - grüne ist klein, Baum ist groß.",
    t12_sent: "Ich mag den ___ Apfel.",
    t12_c1: "roten", t12_c2: "Roten", t12_c3: "ROTEN", t12_c4: "Rot",
    // Quiz: GENERATOR (farben_k2)

    // T13: Großschreibung-Fehler finden
    t13_title: "Fehler-Jäger",
    t13_text: "Schau genau hin: Welches Wort ist falsch geschrieben?",
    t13_b1: "Finde die Großschreibungs-Fehler!",
    t13_inst: "Klicke auf das falsch geschriebene Wort!",
    t13_h1: "Welches Nomen wurde klein geschrieben?",
    t13_h2: "'spielen' ist ein Verb, also klein. 'Hund' ist ein Nomen, also groß!",
    t13_w1: "Der", t13_w2: "kleine", t13_w3: "hund", t13_w4: "spielt", t13_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Großschreibung im Satzgefüge
    t14_title: "Mehrere Sätze verbinden",
    t14_text: "Jeder Satz fängt neu groß an! 'Der Hund spielt. Die Katze schläft.' - Beide Anfänge sind groß!",
    t14_b1: "Jeder Satz = neuer Anfang = groß",
    t14_inst: "Welcher Satz hat beide Anfänge richtig geschrieben?",
    t14_h1: "Prüfe beide Satzanfänge: groß?",
    t14_h2: "'Die Katze schläft. Der Vogel singt.' - beide groß!",
    t14_sent1: "Der Hund bellt. die Katze schläft.", t14_sent2: "Der Hund bellt. Die Katze schläft.", t14_sent3: "der Hund bellt. Die Katze schläft.", t14_sent4: "der Hund bellt. die Katze schläft.",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Großschreibungs-Champion!
    t15_title: "Großschreibungs-Champion!",
    t15_text: "Du bist jetzt Großschreibungs-Expert! Du weißt: Nomen groß, Satzanfang groß, Verben und Adjektive klein!",
    t15_b1: "Nomen = GROSS",
    t15_b2: "Satzanfang = groß",
    t15_b3: "Verben/Adjektive = klein",
    t15_inst: "Champion-Test: Schreib den Satz richtig!",
    t15_h1: "Nutze alle drei Regeln!",
    t15_h2: "'Der schnelle Hund spielt gern.' - Der & Hund & Hund groß, schnelle & spielt & gern klein.",
    t15_sent: "Der große Hund spielt im Garten.",
    // Quiz: GENERATOR (nomen_k2)
  },
  en: {

    explorer_title: "[EN] Großschreibungsinsel",

    // T1: Der Satzanfang
    t1_title: "[EN] Der Satzanfang",
    t1_text: "[EN] Jeder Satz hat einen Anführer: das erste Wort. Und dieser Anführer wird immer mit einem GROSSEN Buchstaben geschrieben!",
    t1_b1: "[EN] Das erste Wort im Satz ist groß.",
    t1_b2: "[EN] Egal, welches Wort es ist.",
    t1_inst: "[EN] Welches Wort ist am Satzanfang richtig?",
    t1_h1: "[EN] Der erste Buchstabe muss groß sein.",
    t1_h2: "[EN] 'Wir' wird am Anfang großgeschrieben.",
    t1_sent: "[EN] ___ spielen heute im Garten.",
    t1_c1: "[EN] Wir", t1_c2: "[EN] wir", t1_c3: "[EN] wIr", t1_c4: "[EN] wiR",
    // Quiz: MANUAL
    t1_q: "[EN] Wie schreiben wir das erste Wort in einem Satz?",
    t1_qa: "[EN] Am Anfang groß", t1_qb: "[EN] Immer klein", t1_qc: "[EN] Alles groß", t1_qd: "[EN] Wie wir wollen",

    // T2: Nomen schreibt man groß
    t2_title: "[EN] Nomen schreibt man groß",
    t2_text: "[EN] Erinnerst du dich an die Namenwörter (Nomen)? Alle Menschen, Tiere, Dinge und Orte schreiben wir immer GROSS!",
    t2_b1: "[EN] Menschen, Tiere, Dinge = GROSS.",
    t2_b2: "[EN] Hund, Katze, Haus, Baum.",
    t2_inst: "[EN] Finde das richtig geschriebene Nomen!",
    t2_h1: "[EN] Es ist ein Tier, also muss es groß sein.",
    t2_h2: "[EN] 'Hase' ist richtig.",
    t2_w1: "[EN] hase", t2_w2: "[EN] Hase", t2_w3: "[EN] haSe", t2_w4: "[EN] HASse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Verben und Adjektive klein
    t3_title: "[EN] Verben und Adjektive klein",
    t3_text: "[EN] Tunwörter (Verben) und Wiewörter (Adjektive) schreiben wir normalerweise klein. Sie sind die 'Leisen' im Satz.",
    t3_b1: "[EN] Verben (laufen, spielen) = klein.",
    t3_b2: "[EN] Adjektive (schnell, bunt) = klein.",
    t3_inst: "[EN] Welches Wort muss klein geschrieben werden?",
    t3_h1: "[EN] Suche das Tunwort (Verb).",
    t3_h2: "[EN] 'rennen' schreiben wir klein.",
    t3_w1: "[EN] Haus", t3_w2: "[EN] Hund", t3_w3: "[EN] rennen", t3_w4: "[EN] Sonne",
    // Quiz: GENERATOR (verben_k2)

    // T4: Groß oder klein? (Sortieren)
    t4_title: "[EN] Groß oder klein?",
    t4_text: "[EN] Kannst du die Wörter richtig sortieren? Denk an die Regel: Nomen sind groß, Verben und Adjektive sind klein.",
    t4_b1: "[EN] Groß 🅰️ = Nomen.",
    t4_b2: "[EN] Klein ⓐ = Verben / Adjektive.",
    t4_inst: "[EN] Sortiere die Wörter in die richtigen Körbe!",
    t4_h1: "[EN] Was ist ein Ding (groß) und miat lehet csinálni (kicsi)?",
    t4_h2: "[EN] Apfel (Nomen) -> Groß. singen (Verb) -> Klein.",
    t4_bg: "[EN] Groß 🅰️", t4_bk: "[EN] Klein ⓐ",
    t4_i1: "[EN] Apfel", t4_i2: "[EN] singen", t4_i3: "[EN] bunt", t4_i4: "[EN] Auto",
    // Quiz: MANUAL
    t4_q: "[EN] Wie schreiben wir 'schnell' mitten im Satz?",
    t4_qa: "[EN] klein", t4_qb: "[EN] groß", t4_qc: "[EN] groß, wenn es wichtig ist", t4_qd: "[EN] mit Punkt",

    // T5: Fehler-Detektiv
    t5_title: "[EN] Fehler-Detektiv",
    t5_text: "[EN] In diesem Satz hat sich ein Fehler versteckt! Ein Nomen wurde klein geschrieben. Kannst du es finden?",
    t5_b1: "[EN] Nomen müssen groß sein.",
    t5_inst: "[EN] Klicke auf das Wort, das GROSS sein müsste!",
    t5_h1: "[EN] Suche das Tier im Satz.",
    t5_h2: "[EN] Das Wort 'maus' muss groß geschrieben werden.",
    t5_w1: "[EN] Die", t5_w2: "[EN] kleine", t5_w3: "[EN] maus", t5_w4: "[EN] piepst", t5_w5: "[EN] .",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Der Satz-Baumeister
    t6_title: "[EN] Der Satz-Baumeister",
    t6_text: "[EN] Baue den Satz zusammen. Achte darauf, dass das erste Wort einen großen Anfangsbuchstaben hat!",
    t6_b1: "[EN] Satzanfang = GROSS.",
    t6_inst: "[EN] Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "[EN] Welches Wort fängt groß an? Das muss an den Start.",
    t6_h2: "[EN] Der Apfel ist rot.",
    t6_f1: "[EN] Der", t6_f2: "[EN] Apfel", t6_f3: "[EN] ist", t6_f4: "[EN] rot.",
    // Quiz: MANUAL
    t6_q: "[EN] Welches Wort im Satz 'Der Baum ist grün.' ist ein Nomen?",
    t6_qa: "[EN] Baum", t6_qb: "[EN] Der", t6_qc: "[EN] ist", t6_qd: "[EN] grün",

    // T7: Alles im Blick?
    t7_title: "[EN] Alles im Blick?",
    t7_text: "[EN] Nagybetűs check! Du weißt jetzt, wann wir groß und wann wir klein schreiben. Teste dein Wissen ein letztes Mal!",
    t7_b1: "[EN] Anfang & Nomen = GROSS.",
    t7_inst: "[EN] Welcher Satz ist perfekt geschrieben?",
    t7_h1: "[EN] Prüfe den Anfang und alle Nomen.",
    t7_h2: "[EN] 'Die Katze spielt.' ist richtig.",
    t7_s1: "[EN] Die Katze spielt.", t7_s2: "[EN] die katze spielt.", t7_s3: "[EN] Die katze spielt.", t7_s4: "[EN] die Katze spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Großbuchstaben in Namen
    t8_title: "[EN] Eigennamen schreiben",
    t8_text: "[EN] Namen von Personen, Orten und besondere Dinge schreiben wir GROSS! Beispiele: Anna, Berlin, Montag, Ostern. Diese Wörter sind etwas Besonderes!",
    t8_b1: "[EN] Eigennamen = Personen, Orte, Tage, Feste",
    t8_b2: "[EN] Alle Eigennamen schreiben wir GROSS!",
    t8_inst: "[EN] Welches Wort ist ein Eigenname und muss groß sein?",
    t8_h1: "[EN] Was ist ein spezieller Name einer Person oder eines Ortes?",
    t8_h2: "[EN] 'Berlin' ist ein Ort, also schreiben wir es groß.",
    t8_w1: "[EN] anna", t8_w2: "[EN] Anna", t8_w3: "[EN] mädchen", t8_w4: "[EN] AnNA",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wochentage und Monate
    t9_title: "[EN] Wochentage und Monate",
    t9_text: "[EN] Montag, Freitag, Januar, Juli - diese schreiben wir immer GROSS! Sie sind Eigennamen.",
    t9_b1: "[EN] Montag, Dienstag, Mittwoch...",
    t9_b2: "[EN] Januar, Februar, März... alle groß!",
    t9_inst: "[EN] Sortiere: Welche Wörter sind Wochentage oder Monate?",
    t9_h1: "[EN] Was sind Tage der Woche?",
    t9_h2: "[EN] Montag und Juni sind Eigennamen - groß!",
    t9_btime: "[EN] Wochentag/Monat", t9_bother: "[EN] Anderes",
    t9_i1: "[EN] Montag", t9_i2: "[EN] spielen", t9_i3: "[EN] Juni", t9_i4: "[EN] lachen",
    // Quiz: GENERATOR (zeit_k2)

    // T10: Artikel und Nomen Zusammenspiel
    t10_title: "[EN] Artikel und Nomen",
    t10_text: "[EN] Der Artikel (der, die, das) ist immer klein, aber das Nomen dahinter ist GROSS! Ein Nomen ist Teil einer Nominalgruppe.",
    t10_b1: "[EN] Artikel = klein (der, die, das)",
    t10_b2: "[EN] Nomen = GROSS (Hund, Katze, Haus)",
    t10_inst: "[EN] Finde das großgeschriebene Nomen!",
    t10_h1: "[EN] Nach dem Artikel kommt das Nomen - und es ist groß!",
    t10_h2: "[EN] 'der Hund' - Hund ist groß!",
    t10_w1: "[EN] der", t10_w2: "[EN] Hund", t10_w3: "[EN] spielt", t10_w4: "[EN] glücklich",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Satzanfang und Großschreibung kombiniert
    t11_title: "[EN] Satzanfang und Nomen",
    t11_text: "[EN] Der Satzanfang ist groß UND die Nomen sind groß! Das bedeutet: Manche Großbuchstaben kommen vom Satzanfang, andere vom Nomen!",
    t11_b1: "[EN] Satzanfang = groß (ist Regel 1)",
    t11_b2: "[EN] Nomen = groß (ist Regel 2)",
    t11_inst: "[EN] Welcher Satz ist perfekt geschrieben?",
    t11_h1: "[EN] Zwei Regeln: Anfang UND Nomen!",
    t11_h2: "[EN] 'Der Hund spielt.' - Der (Anfang) und Hund (Nomen) sind groß.",
    t11_sent1: "[EN] Der Hund spielt.", t11_sent2: "[EN] der Hund Spielt.", t11_sent3: "[EN] Der hund spielt.", t11_sent4: "[EN] der hund spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Adjektive in der Nominalgruppe
    t12_title: "[EN] Adjektive in Nominalgruppen",
    t12_text: "[EN] Wenn ein Adjektiv direkt VOR einem Nomen steht, bleibt es klein! 'Der schöne Garten' - 'schöne' ist klein, 'Garten' ist groß!",
    t12_b1: "[EN] Adjektiv vor Nomen = klein (schöne)",
    t12_b2: "[EN] Nomen bleibt GROSS (Garten)",
    t12_inst: "[EN] Schreib das Adjektiv richtig: klein atau groß?",
    t12_h1: "[EN] Das Adjektiv steht VOR dem Nomen - es bleibt klein!",
    t12_h2: "[EN] 'der grüne Baum' - grüne ist klein, Baum ist groß.",
    t12_sent: "[EN] Ich mag den ___ Apfel.",
    t12_c1: "[EN] roten", t12_c2: "[EN] Roten", t12_c3: "[EN] ROTEN", t12_c4: "[EN] Rot",
    // Quiz: GENERATOR (farben_k2)

    // T13: Großschreibung-Fehler finden
    t13_title: "[EN] Fehler-Jäger",
    t13_text: "[EN] Schau genau hin: Welches Wort ist falsch geschrieben?",
    t13_b1: "[EN] Finde die Großschreibungs-Fehler!",
    t13_inst: "[EN] Klicke auf das falsch geschriebene Wort!",
    t13_h1: "[EN] Welches Nomen wurde klein geschrieben?",
    t13_h2: "[EN] 'spielen' ist ein Verb, also klein. 'Hund' ist ein Nomen, also groß!",
    t13_w1: "[EN] Der", t13_w2: "[EN] kleine", t13_w3: "[EN] hund", t13_w4: "[EN] spielt", t13_w5: "[EN] .",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Großschreibung im Satzgefüge
    t14_title: "[EN] Mehrere Sätze verbinden",
    t14_text: "[EN] Jeder Satz fängt neu groß an! 'Der Hund spielt. Die Katze schläft.' - Beide Anfänge sind groß!",
    t14_b1: "[EN] Jeder Satz = neuer Anfang = groß",
    t14_inst: "[EN] Welcher Satz hat beide Anfänge richtig geschrieben?",
    t14_h1: "[EN] Prüfe beide Satzanfänge: groß?",
    t14_h2: "[EN] 'Die Katze schläft. Der Vogel singt.' - beide groß!",
    t14_sent1: "[EN] Der Hund bellt. die Katze schläft.", t14_sent2: "[EN] Der Hund bellt. Die Katze schläft.", t14_sent3: "[EN] der Hund bellt. Die Katze schläft.", t14_sent4: "[EN] der Hund bellt. die Katze schläft.",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Großschreibungs-Champion!
    t15_title: "[EN] Großschreibungs-Champion!",
    t15_text: "[EN] Du bist jetzt Großschreibungs-Expert! Du weißt: Nomen groß, Satzanfang groß, Verben und Adjektive klein!",
    t15_b1: "[EN] Nomen = GROSS",
    t15_b2: "[EN] Satzanfang = groß",
    t15_b3: "[EN] Verben/Adjektive = klein",
    t15_inst: "[EN] Champion-Test: Schreib den Satz richtig!",
    t15_h1: "[EN] Nutze alle drei Regeln!",
    t15_h2: "[EN] 'Der schnelle Hund spielt gern.' - Der & Hund & Hund groß, schnelle & spielt & gern klein.",
    t15_sent: "[EN] Der große Hund spielt im Garten.",
    // Quiz: GENERATOR (nomen_k2)
  
  },
  hu: {

    explorer_title: "[HU] Großschreibungsinsel",

    // T1: Der Satzanfang
    t1_title: "[HU] Der Satzanfang",
    t1_text: "[HU] Jeder Satz hat einen Anführer: das erste Wort. Und dieser Anführer wird immer mit einem GROSSEN Buchstaben geschrieben!",
    t1_b1: "[HU] Das erste Wort im Satz ist groß.",
    t1_b2: "[HU] Egal, welches Wort es ist.",
    t1_inst: "[HU] Welches Wort ist am Satzanfang richtig?",
    t1_h1: "[HU] Der erste Buchstabe muss groß sein.",
    t1_h2: "[HU] 'Wir' wird am Anfang großgeschrieben.",
    t1_sent: "[HU] ___ spielen heute im Garten.",
    t1_c1: "[HU] Wir", t1_c2: "[HU] wir", t1_c3: "[HU] wIr", t1_c4: "[HU] wiR",
    // Quiz: MANUAL
    t1_q: "[HU] Wie schreiben wir das erste Wort in einem Satz?",
    t1_qa: "[HU] Am Anfang groß", t1_qb: "[HU] Immer klein", t1_qc: "[HU] Alles groß", t1_qd: "[HU] Wie wir wollen",

    // T2: Nomen schreibt man groß
    t2_title: "[HU] Nomen schreibt man groß",
    t2_text: "[HU] Erinnerst du dich an die Namenwörter (Nomen)? Alle Menschen, Tiere, Dinge und Orte schreiben wir immer GROSS!",
    t2_b1: "[HU] Menschen, Tiere, Dinge = GROSS.",
    t2_b2: "[HU] Hund, Katze, Haus, Baum.",
    t2_inst: "[HU] Finde das richtig geschriebene Nomen!",
    t2_h1: "[HU] Es ist ein Tier, also muss es groß sein.",
    t2_h2: "[HU] 'Hase' ist richtig.",
    t2_w1: "[HU] hase", t2_w2: "[HU] Hase", t2_w3: "[HU] haSe", t2_w4: "[HU] HASse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Verben und Adjektive klein
    t3_title: "[HU] Verben und Adjektive klein",
    t3_text: "[HU] Tunwörter (Verben) und Wiewörter (Adjektive) schreiben wir normalerweise klein. Sie sind die 'Leisen' im Satz.",
    t3_b1: "[HU] Verben (laufen, spielen) = klein.",
    t3_b2: "[HU] Adjektive (schnell, bunt) = klein.",
    t3_inst: "[HU] Welches Wort muss klein geschrieben werden?",
    t3_h1: "[HU] Suche das Tunwort (Verb).",
    t3_h2: "[HU] 'rennen' schreiben wir klein.",
    t3_w1: "[HU] Haus", t3_w2: "[HU] Hund", t3_w3: "[HU] rennen", t3_w4: "[HU] Sonne",
    // Quiz: GENERATOR (verben_k2)

    // T4: Groß oder klein? (Sortieren)
    t4_title: "[HU] Groß oder klein?",
    t4_text: "[HU] Kannst du die Wörter richtig sortieren? Denk an die Regel: Nomen sind groß, Verben und Adjektive sind klein.",
    t4_b1: "[HU] Groß 🅰️ = Nomen.",
    t4_b2: "[HU] Klein ⓐ = Verben / Adjektive.",
    t4_inst: "[HU] Sortiere die Wörter in die richtigen Körbe!",
    t4_h1: "[HU] Was ist ein Ding (groß) und miat lehet csinálni (kicsi)?",
    t4_h2: "[HU] Apfel (Nomen) -> Groß. singen (Verb) -> Klein.",
    t4_bg: "[HU] Groß 🅰️", t4_bk: "[HU] Klein ⓐ",
    t4_i1: "[HU] Apfel", t4_i2: "[HU] singen", t4_i3: "[HU] bunt", t4_i4: "[HU] Auto",
    // Quiz: MANUAL
    t4_q: "[HU] Wie schreiben wir 'schnell' mitten im Satz?",
    t4_qa: "[HU] klein", t4_qb: "[HU] groß", t4_qc: "[HU] groß, wenn es wichtig ist", t4_qd: "[HU] mit Punkt",

    // T5: Fehler-Detektiv
    t5_title: "[HU] Fehler-Detektiv",
    t5_text: "[HU] In diesem Satz hat sich ein Fehler versteckt! Ein Nomen wurde klein geschrieben. Kannst du es finden?",
    t5_b1: "[HU] Nomen müssen groß sein.",
    t5_inst: "[HU] Klicke auf das Wort, das GROSS sein müsste!",
    t5_h1: "[HU] Suche das Tier im Satz.",
    t5_h2: "[HU] Das Wort 'maus' muss groß geschrieben werden.",
    t5_w1: "[HU] Die", t5_w2: "[HU] kleine", t5_w3: "[HU] maus", t5_w4: "[HU] piepst", t5_w5: "[HU] .",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Der Satz-Baumeister
    t6_title: "[HU] Der Satz-Baumeister",
    t6_text: "[HU] Baue den Satz zusammen. Achte darauf, dass das erste Wort einen großen Anfangsbuchstaben hat!",
    t6_b1: "[HU] Satzanfang = GROSS.",
    t6_inst: "[HU] Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "[HU] Welches Wort fängt groß an? Das muss an den Start.",
    t6_h2: "[HU] Der Apfel ist rot.",
    t6_f1: "[HU] Der", t6_f2: "[HU] Apfel", t6_f3: "[HU] ist", t6_f4: "[HU] rot.",
    // Quiz: MANUAL
    t6_q: "[HU] Welches Wort im Satz 'Der Baum ist grün.' ist ein Nomen?",
    t6_qa: "[HU] Baum", t6_qb: "[HU] Der", t6_qc: "[HU] ist", t6_qd: "[HU] grün",

    // T7: Alles im Blick?
    t7_title: "[HU] Alles im Blick?",
    t7_text: "[HU] Nagybetűs check! Du weißt jetzt, wann wir groß und wann wir klein schreiben. Teste dein Wissen ein letztes Mal!",
    t7_b1: "[HU] Anfang & Nomen = GROSS.",
    t7_inst: "[HU] Welcher Satz ist perfekt geschrieben?",
    t7_h1: "[HU] Prüfe den Anfang und alle Nomen.",
    t7_h2: "[HU] 'Die Katze spielt.' ist richtig.",
    t7_s1: "[HU] Die Katze spielt.", t7_s2: "[HU] die katze spielt.", t7_s3: "[HU] Die katze spielt.", t7_s4: "[HU] die Katze spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Großbuchstaben in Namen
    t8_title: "[HU] Eigennamen schreiben",
    t8_text: "[HU] Namen von Personen, Orten und besondere Dinge schreiben wir GROSS! Beispiele: Anna, Berlin, Montag, Ostern. Diese Wörter sind etwas Besonderes!",
    t8_b1: "[HU] Eigennamen = Personen, Orte, Tage, Feste",
    t8_b2: "[HU] Alle Eigennamen schreiben wir GROSS!",
    t8_inst: "[HU] Welches Wort ist ein Eigenname und muss groß sein?",
    t8_h1: "[HU] Was ist ein spezieller Name einer Person oder eines Ortes?",
    t8_h2: "[HU] 'Berlin' ist ein Ort, also schreiben wir es groß.",
    t8_w1: "[HU] anna", t8_w2: "[HU] Anna", t8_w3: "[HU] mädchen", t8_w4: "[HU] AnNA",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wochentage und Monate
    t9_title: "[HU] Wochentage und Monate",
    t9_text: "[HU] Montag, Freitag, Januar, Juli - diese schreiben wir immer GROSS! Sie sind Eigennamen.",
    t9_b1: "[HU] Montag, Dienstag, Mittwoch...",
    t9_b2: "[HU] Januar, Februar, März... alle groß!",
    t9_inst: "[HU] Sortiere: Welche Wörter sind Wochentage oder Monate?",
    t9_h1: "[HU] Was sind Tage der Woche?",
    t9_h2: "[HU] Montag und Juni sind Eigennamen - groß!",
    t9_btime: "[HU] Wochentag/Monat", t9_bother: "[HU] Anderes",
    t9_i1: "[HU] Montag", t9_i2: "[HU] spielen", t9_i3: "[HU] Juni", t9_i4: "[HU] lachen",
    // Quiz: GENERATOR (zeit_k2)

    // T10: Artikel und Nomen Zusammenspiel
    t10_title: "[HU] Artikel und Nomen",
    t10_text: "[HU] Der Artikel (der, die, das) ist immer klein, aber das Nomen dahinter ist GROSS! Ein Nomen ist Teil einer Nominalgruppe.",
    t10_b1: "[HU] Artikel = klein (der, die, das)",
    t10_b2: "[HU] Nomen = GROSS (Hund, Katze, Haus)",
    t10_inst: "[HU] Finde das großgeschriebene Nomen!",
    t10_h1: "[HU] Nach dem Artikel kommt das Nomen - und es ist groß!",
    t10_h2: "[HU] 'der Hund' - Hund ist groß!",
    t10_w1: "[HU] der", t10_w2: "[HU] Hund", t10_w3: "[HU] spielt", t10_w4: "[HU] glücklich",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Satzanfang und Großschreibung kombiniert
    t11_title: "[HU] Satzanfang und Nomen",
    t11_text: "[HU] Der Satzanfang ist groß UND die Nomen sind groß! Das bedeutet: Manche Großbuchstaben kommen vom Satzanfang, andere vom Nomen!",
    t11_b1: "[HU] Satzanfang = groß (ist Regel 1)",
    t11_b2: "[HU] Nomen = groß (ist Regel 2)",
    t11_inst: "[HU] Welcher Satz ist perfekt geschrieben?",
    t11_h1: "[HU] Zwei Regeln: Anfang UND Nomen!",
    t11_h2: "[HU] 'Der Hund spielt.' - Der (Anfang) und Hund (Nomen) sind groß.",
    t11_sent1: "[HU] Der Hund spielt.", t11_sent2: "[HU] der Hund Spielt.", t11_sent3: "[HU] Der hund spielt.", t11_sent4: "[HU] der hund spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Adjektive in der Nominalgruppe
    t12_title: "[HU] Adjektive in Nominalgruppen",
    t12_text: "[HU] Wenn ein Adjektiv direkt VOR einem Nomen steht, bleibt es klein! 'Der schöne Garten' - 'schöne' ist klein, 'Garten' ist groß!",
    t12_b1: "[HU] Adjektiv vor Nomen = klein (schöne)",
    t12_b2: "[HU] Nomen bleibt GROSS (Garten)",
    t12_inst: "[HU] Schreib das Adjektiv richtig: klein atau groß?",
    t12_h1: "[HU] Das Adjektiv steht VOR dem Nomen - es bleibt klein!",
    t12_h2: "[HU] 'der grüne Baum' - grüne ist klein, Baum ist groß.",
    t12_sent: "[HU] Ich mag den ___ Apfel.",
    t12_c1: "[HU] roten", t12_c2: "[HU] Roten", t12_c3: "[HU] ROTEN", t12_c4: "[HU] Rot",
    // Quiz: GENERATOR (farben_k2)

    // T13: Großschreibung-Fehler finden
    t13_title: "[HU] Fehler-Jäger",
    t13_text: "[HU] Schau genau hin: Welches Wort ist falsch geschrieben?",
    t13_b1: "[HU] Finde die Großschreibungs-Fehler!",
    t13_inst: "[HU] Klicke auf das falsch geschriebene Wort!",
    t13_h1: "[HU] Welches Nomen wurde klein geschrieben?",
    t13_h2: "[HU] 'spielen' ist ein Verb, also klein. 'Hund' ist ein Nomen, also groß!",
    t13_w1: "[HU] Der", t13_w2: "[HU] kleine", t13_w3: "[HU] hund", t13_w4: "[HU] spielt", t13_w5: "[HU] .",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Großschreibung im Satzgefüge
    t14_title: "[HU] Mehrere Sätze verbinden",
    t14_text: "[HU] Jeder Satz fängt neu groß an! 'Der Hund spielt. Die Katze schläft.' - Beide Anfänge sind groß!",
    t14_b1: "[HU] Jeder Satz = neuer Anfang = groß",
    t14_inst: "[HU] Welcher Satz hat beide Anfänge richtig geschrieben?",
    t14_h1: "[HU] Prüfe beide Satzanfänge: groß?",
    t14_h2: "[HU] 'Die Katze schläft. Der Vogel singt.' - beide groß!",
    t14_sent1: "[HU] Der Hund bellt. die Katze schläft.", t14_sent2: "[HU] Der Hund bellt. Die Katze schläft.", t14_sent3: "[HU] der Hund bellt. Die Katze schläft.", t14_sent4: "[HU] der Hund bellt. die Katze schläft.",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Großschreibungs-Champion!
    t15_title: "[HU] Großschreibungs-Champion!",
    t15_text: "[HU] Du bist jetzt Großschreibungs-Expert! Du weißt: Nomen groß, Satzanfang groß, Verben und Adjektive klein!",
    t15_b1: "[HU] Nomen = GROSS",
    t15_b2: "[HU] Satzanfang = groß",
    t15_b3: "[HU] Verben/Adjektive = klein",
    t15_inst: "[HU] Champion-Test: Schreib den Satz richtig!",
    t15_h1: "[HU] Nutze alle drei Regeln!",
    t15_h2: "[HU] 'Der schnelle Hund spielt gern.' - Der & Hund & Hund groß, schnelle & spielt & gern klein.",
    t15_sent: "[HU] Der große Hund spielt im Garten.",
    // Quiz: GENERATOR (nomen_k2)
  
  },
  ro: {

    explorer_title: "[RO] Großschreibungsinsel",

    // T1: Der Satzanfang
    t1_title: "[RO] Der Satzanfang",
    t1_text: "[RO] Jeder Satz hat einen Anführer: das erste Wort. Und dieser Anführer wird immer mit einem GROSSEN Buchstaben geschrieben!",
    t1_b1: "[RO] Das erste Wort im Satz ist groß.",
    t1_b2: "[RO] Egal, welches Wort es ist.",
    t1_inst: "[RO] Welches Wort ist am Satzanfang richtig?",
    t1_h1: "[RO] Der erste Buchstabe muss groß sein.",
    t1_h2: "[RO] 'Wir' wird am Anfang großgeschrieben.",
    t1_sent: "[RO] ___ spielen heute im Garten.",
    t1_c1: "[RO] Wir", t1_c2: "[RO] wir", t1_c3: "[RO] wIr", t1_c4: "[RO] wiR",
    // Quiz: MANUAL
    t1_q: "[RO] Wie schreiben wir das erste Wort in einem Satz?",
    t1_qa: "[RO] Am Anfang groß", t1_qb: "[RO] Immer klein", t1_qc: "[RO] Alles groß", t1_qd: "[RO] Wie wir wollen",

    // T2: Nomen schreibt man groß
    t2_title: "[RO] Nomen schreibt man groß",
    t2_text: "[RO] Erinnerst du dich an die Namenwörter (Nomen)? Alle Menschen, Tiere, Dinge und Orte schreiben wir immer GROSS!",
    t2_b1: "[RO] Menschen, Tiere, Dinge = GROSS.",
    t2_b2: "[RO] Hund, Katze, Haus, Baum.",
    t2_inst: "[RO] Finde das richtig geschriebene Nomen!",
    t2_h1: "[RO] Es ist ein Tier, also muss es groß sein.",
    t2_h2: "[RO] 'Hase' ist richtig.",
    t2_w1: "[RO] hase", t2_w2: "[RO] Hase", t2_w3: "[RO] haSe", t2_w4: "[RO] HASse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Verben und Adjektive klein
    t3_title: "[RO] Verben und Adjektive klein",
    t3_text: "[RO] Tunwörter (Verben) und Wiewörter (Adjektive) schreiben wir normalerweise klein. Sie sind die 'Leisen' im Satz.",
    t3_b1: "[RO] Verben (laufen, spielen) = klein.",
    t3_b2: "[RO] Adjektive (schnell, bunt) = klein.",
    t3_inst: "[RO] Welches Wort muss klein geschrieben werden?",
    t3_h1: "[RO] Suche das Tunwort (Verb).",
    t3_h2: "[RO] 'rennen' schreiben wir klein.",
    t3_w1: "[RO] Haus", t3_w2: "[RO] Hund", t3_w3: "[RO] rennen", t3_w4: "[RO] Sonne",
    // Quiz: GENERATOR (verben_k2)

    // T4: Groß oder klein? (Sortieren)
    t4_title: "[RO] Groß oder klein?",
    t4_text: "[RO] Kannst du die Wörter richtig sortieren? Denk an die Regel: Nomen sind groß, Verben und Adjektive sind klein.",
    t4_b1: "[RO] Groß 🅰️ = Nomen.",
    t4_b2: "[RO] Klein ⓐ = Verben / Adjektive.",
    t4_inst: "[RO] Sortiere die Wörter in die richtigen Körbe!",
    t4_h1: "[RO] Was ist ein Ding (groß) und miat lehet csinálni (kicsi)?",
    t4_h2: "[RO] Apfel (Nomen) -> Groß. singen (Verb) -> Klein.",
    t4_bg: "[RO] Groß 🅰️", t4_bk: "[RO] Klein ⓐ",
    t4_i1: "[RO] Apfel", t4_i2: "[RO] singen", t4_i3: "[RO] bunt", t4_i4: "[RO] Auto",
    // Quiz: MANUAL
    t4_q: "[RO] Wie schreiben wir 'schnell' mitten im Satz?",
    t4_qa: "[RO] klein", t4_qb: "[RO] groß", t4_qc: "[RO] groß, wenn es wichtig ist", t4_qd: "[RO] mit Punkt",

    // T5: Fehler-Detektiv
    t5_title: "[RO] Fehler-Detektiv",
    t5_text: "[RO] In diesem Satz hat sich ein Fehler versteckt! Ein Nomen wurde klein geschrieben. Kannst du es finden?",
    t5_b1: "[RO] Nomen müssen groß sein.",
    t5_inst: "[RO] Klicke auf das Wort, das GROSS sein müsste!",
    t5_h1: "[RO] Suche das Tier im Satz.",
    t5_h2: "[RO] Das Wort 'maus' muss groß geschrieben werden.",
    t5_w1: "[RO] Die", t5_w2: "[RO] kleine", t5_w3: "[RO] maus", t5_w4: "[RO] piepst", t5_w5: "[RO] .",
    // Quiz: GENERATOR (nomen_k2)

    // T6: Der Satz-Baumeister
    t6_title: "[RO] Der Satz-Baumeister",
    t6_text: "[RO] Baue den Satz zusammen. Achte darauf, dass das erste Wort einen großen Anfangsbuchstaben hat!",
    t6_b1: "[RO] Satzanfang = GROSS.",
    t6_inst: "[RO] Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "[RO] Welches Wort fängt groß an? Das muss an den Start.",
    t6_h2: "[RO] Der Apfel ist rot.",
    t6_f1: "[RO] Der", t6_f2: "[RO] Apfel", t6_f3: "[RO] ist", t6_f4: "[RO] rot.",
    // Quiz: MANUAL
    t6_q: "[RO] Welches Wort im Satz 'Der Baum ist grün.' ist ein Nomen?",
    t6_qa: "[RO] Baum", t6_qb: "[RO] Der", t6_qc: "[RO] ist", t6_qd: "[RO] grün",

    // T7: Alles im Blick?
    t7_title: "[RO] Alles im Blick?",
    t7_text: "[RO] Nagybetűs check! Du weißt jetzt, wann wir groß und wann wir klein schreiben. Teste dein Wissen ein letztes Mal!",
    t7_b1: "[RO] Anfang & Nomen = GROSS.",
    t7_inst: "[RO] Welcher Satz ist perfekt geschrieben?",
    t7_h1: "[RO] Prüfe den Anfang und alle Nomen.",
    t7_h2: "[RO] 'Die Katze spielt.' ist richtig.",
    t7_s1: "[RO] Die Katze spielt.", t7_s2: "[RO] die katze spielt.", t7_s3: "[RO] Die katze spielt.", t7_s4: "[RO] die Katze spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Großbuchstaben in Namen
    t8_title: "[RO] Eigennamen schreiben",
    t8_text: "[RO] Namen von Personen, Orten und besondere Dinge schreiben wir GROSS! Beispiele: Anna, Berlin, Montag, Ostern. Diese Wörter sind etwas Besonderes!",
    t8_b1: "[RO] Eigennamen = Personen, Orte, Tage, Feste",
    t8_b2: "[RO] Alle Eigennamen schreiben wir GROSS!",
    t8_inst: "[RO] Welches Wort ist ein Eigenname und muss groß sein?",
    t8_h1: "[RO] Was ist ein spezieller Name einer Person oder eines Ortes?",
    t8_h2: "[RO] 'Berlin' ist ein Ort, also schreiben wir es groß.",
    t8_w1: "[RO] anna", t8_w2: "[RO] Anna", t8_w3: "[RO] mädchen", t8_w4: "[RO] AnNA",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wochentage und Monate
    t9_title: "[RO] Wochentage und Monate",
    t9_text: "[RO] Montag, Freitag, Januar, Juli - diese schreiben wir immer GROSS! Sie sind Eigennamen.",
    t9_b1: "[RO] Montag, Dienstag, Mittwoch...",
    t9_b2: "[RO] Januar, Februar, März... alle groß!",
    t9_inst: "[RO] Sortiere: Welche Wörter sind Wochentage oder Monate?",
    t9_h1: "[RO] Was sind Tage der Woche?",
    t9_h2: "[RO] Montag und Juni sind Eigennamen - groß!",
    t9_btime: "[RO] Wochentag/Monat", t9_bother: "[RO] Anderes",
    t9_i1: "[RO] Montag", t9_i2: "[RO] spielen", t9_i3: "[RO] Juni", t9_i4: "[RO] lachen",
    // Quiz: GENERATOR (zeit_k2)

    // T10: Artikel und Nomen Zusammenspiel
    t10_title: "[RO] Artikel und Nomen",
    t10_text: "[RO] Der Artikel (der, die, das) ist immer klein, aber das Nomen dahinter ist GROSS! Ein Nomen ist Teil einer Nominalgruppe.",
    t10_b1: "[RO] Artikel = klein (der, die, das)",
    t10_b2: "[RO] Nomen = GROSS (Hund, Katze, Haus)",
    t10_inst: "[RO] Finde das großgeschriebene Nomen!",
    t10_h1: "[RO] Nach dem Artikel kommt das Nomen - und es ist groß!",
    t10_h2: "[RO] 'der Hund' - Hund ist groß!",
    t10_w1: "[RO] der", t10_w2: "[RO] Hund", t10_w3: "[RO] spielt", t10_w4: "[RO] glücklich",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Satzanfang und Großschreibung kombiniert
    t11_title: "[RO] Satzanfang und Nomen",
    t11_text: "[RO] Der Satzanfang ist groß UND die Nomen sind groß! Das bedeutet: Manche Großbuchstaben kommen vom Satzanfang, andere vom Nomen!",
    t11_b1: "[RO] Satzanfang = groß (ist Regel 1)",
    t11_b2: "[RO] Nomen = groß (ist Regel 2)",
    t11_inst: "[RO] Welcher Satz ist perfekt geschrieben?",
    t11_h1: "[RO] Zwei Regeln: Anfang UND Nomen!",
    t11_h2: "[RO] 'Der Hund spielt.' - Der (Anfang) und Hund (Nomen) sind groß.",
    t11_sent1: "[RO] Der Hund spielt.", t11_sent2: "[RO] der Hund Spielt.", t11_sent3: "[RO] Der hund spielt.", t11_sent4: "[RO] der hund spielt.",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Adjektive in der Nominalgruppe
    t12_title: "[RO] Adjektive in Nominalgruppen",
    t12_text: "[RO] Wenn ein Adjektiv direkt VOR einem Nomen steht, bleibt es klein! 'Der schöne Garten' - 'schöne' ist klein, 'Garten' ist groß!",
    t12_b1: "[RO] Adjektiv vor Nomen = klein (schöne)",
    t12_b2: "[RO] Nomen bleibt GROSS (Garten)",
    t12_inst: "[RO] Schreib das Adjektiv richtig: klein atau groß?",
    t12_h1: "[RO] Das Adjektiv steht VOR dem Nomen - es bleibt klein!",
    t12_h2: "[RO] 'der grüne Baum' - grüne ist klein, Baum ist groß.",
    t12_sent: "[RO] Ich mag den ___ Apfel.",
    t12_c1: "[RO] roten", t12_c2: "[RO] Roten", t12_c3: "[RO] ROTEN", t12_c4: "[RO] Rot",
    // Quiz: GENERATOR (farben_k2)

    // T13: Großschreibung-Fehler finden
    t13_title: "[RO] Fehler-Jäger",
    t13_text: "[RO] Schau genau hin: Welches Wort ist falsch geschrieben?",
    t13_b1: "[RO] Finde die Großschreibungs-Fehler!",
    t13_inst: "[RO] Klicke auf das falsch geschriebene Wort!",
    t13_h1: "[RO] Welches Nomen wurde klein geschrieben?",
    t13_h2: "[RO] 'spielen' ist ein Verb, also klein. 'Hund' ist ein Nomen, also groß!",
    t13_w1: "[RO] Der", t13_w2: "[RO] kleine", t13_w3: "[RO] hund", t13_w4: "[RO] spielt", t13_w5: "[RO] .",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Großschreibung im Satzgefüge
    t14_title: "[RO] Mehrere Sätze verbinden",
    t14_text: "[RO] Jeder Satz fängt neu groß an! 'Der Hund spielt. Die Katze schläft.' - Beide Anfänge sind groß!",
    t14_b1: "[RO] Jeder Satz = neuer Anfang = groß",
    t14_inst: "[RO] Welcher Satz hat beide Anfänge richtig geschrieben?",
    t14_h1: "[RO] Prüfe beide Satzanfänge: groß?",
    t14_h2: "[RO] 'Die Katze schläft. Der Vogel singt.' - beide groß!",
    t14_sent1: "[RO] Der Hund bellt. die Katze schläft.", t14_sent2: "[RO] Der Hund bellt. Die Katze schläft.", t14_sent3: "[RO] der Hund bellt. Die Katze schläft.", t14_sent4: "[RO] der Hund bellt. die Katze schläft.",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Großschreibungs-Champion!
    t15_title: "[RO] Großschreibungs-Champion!",
    t15_text: "[RO] Du bist jetzt Großschreibungs-Expert! Du weißt: Nomen groß, Satzanfang groß, Verben und Adjektive klein!",
    t15_b1: "[RO] Nomen = GROSS",
    t15_b2: "[RO] Satzanfang = groß",
    t15_b3: "[RO] Verben/Adjektive = klein",
    t15_inst: "[RO] Champion-Test: Schreib den Satz richtig!",
    t15_h1: "[RO] Nutze alle drei Regeln!",
    t15_h2: "[RO] 'Der schnelle Hund spielt gern.' - Der & Hund & Hund groß, schnelle & spielt & gern klein.",
    t15_sent: "[RO] Der große Hund spielt im Garten.",
    // Quiz: GENERATOR (nomen_k2)
  
  }
};

export const GROSS_POOL: PoolTopicDef[] = [
  // ── 1. Der Satzanfang (gap-fill) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "Wir", highlightChars: ["W"], color: "#1D4ED8" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sent",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], // Wir, wir...
      correctIndex: 0,
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. Nomen groß (highlight-text) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [ { text: "Hase", emoji: "🐰", color: "#B45309", bg: "#FEF3C7" } ] },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [1], // Hase
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nomen_k2" }, // ❤️ GENERATOR
  },

  // ── 3. Verben/Adjektive klein (highlight-text) ──────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "🏃", label: "rennen" }, { emoji: "🎨", label: "bunt" }] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [2], // rennen
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k2" }, // ❤️ GENERATOR
  },

  // ── 4. Groß oder klein? (drag-to-bucket) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["🅰️"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["ⓐ"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "g", label: "t4_bg" }, { id: "k", label: "t4_bk" }],
      items: [
        { text: "t4_i1", bucketId: "g" }, // Apfel
        { text: "t4_i2", bucketId: "k" }, // singen
        { text: "t4_i3", bucketId: "k" }, // bunt
        { text: "t4_i4", bucketId: "g" }, // Auto
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" },
  },

  // ── 5. Fehler-Detektiv (highlight-text) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "sentence-display", words: ["Die", "kleine", "maus", "piepst", "."], highlightIndices: [2], color: "#EF4444" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"],
      correctIndices: [2], // maus (should be Maus)
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "nomen_k2" }, // ❤️ GENERATOR
  },

  // ── 6. Satz-Baumeister (sentence-build) ─────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🍎", label: "Der Apfel" }] },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"], // Der, Apfel, ist, rot.
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Alles im Blick? (highlight-text) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🅰️", title: "Check!", bg: "#D1FAE5" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t7_s1", "t7_s2", "t7_s3", "t7_s4"],
      correctIndices: [0], // Die Katze spielt.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nomen_k2" }, // ❤️ GENERATOR
  },

  // ── 8. Großbuchstaben in Namen (highlight-text) ──────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "Anna", emoji: "👤", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "Berlin", emoji: "🏛️", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [1],
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 9. Wochentage und Monate (drag-to-bucket) ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [ { text: "Mo", emoji: "📅", color: "#F59E0B", bg: "#FEF3C7" }, { text: "Ja", emoji: "🗓️", color: "#10B981", bg: "#D1FAE5" } ] },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "time", label: "t9_btime" }, { id: "other", label: "t9_bother" }],
      items: [
        { text: "t9_i1", bucketId: "time" },
        { text: "t9_i2", bucketId: "other" },
        { text: "t9_i3", bucketId: "time" },
        { text: "t9_i4", bucketId: "other" },
      ],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "zeit_k2" },
  },

  // ── 10. Artikel und Nomen (highlight-text) ──────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "word-display", word: "der Hund", highlightChars: ["H"], color: "#047857" },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [1],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 11. Satzanfang und Nomen (highlight-text) ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "sentence-display", words: ["Der", "Hund", "spielt"], highlightIndices: [0, 1], color: "#1D4ED8" },
    bulletKeys: ["t11_b1", "t11_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_sent1", "t11_sent2", "t11_sent3", "t11_sent4"],
      correctIndices: [0],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 12. Adjektive in Nominalgruppen (gap-fill) ──────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "sentence-display", words: ["der", "grüne", "Baum"], highlightIndices: [0, 2], color: "#10B981" },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent",
      choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"],
      correctIndex: 0,
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "farben_k2" },
  },

  // ── 13. Fehler-Jäger (highlight-text) ──────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "X", emoji: "❌", color: "#EF4444", bg: "#FEE2E2" }, { text: "Fehler!", emoji: "🔍", color: "#EF4444", bg: "#FEE2E2" } ] },
    bulletKeys: ["t13_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4", "t13_w5"],
      correctIndices: [2],
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 14. Großschreibung im Satzgefüge (highlight-text) ── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "text-bubbles", items: [ { text: "Satz 1", emoji: "1️⃣", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "Satz 2", emoji: "2️⃣", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t14_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_sent1", "t14_sent2", "t14_sent3", "t14_sent4"],
      correctIndices: [1],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 15. Großschreibungs-Champion! (sentence-build) ──── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Champion!", bg: "#FCD34D" },
    bulletKeys: ["t15_b1", "t15_b2", "t15_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["Der", "große", "Hund", "spielt", "im", "Garten", "."],
      correctIndices: [0, 2],
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Rechtschreibung1insel (ck, tz, sp, st)
// Thema: Schreibe ich ck oder k? tz oder z? sp/st am Wortanfang
// ─────────────────────────────────────────────────────────────────────────────

export const RECHT1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Hör-Detektive (ck, tz, sp, st)",

    // T1: ck oder k?
    t1_title: "ck oder k?",
    t1_text: "Hör genau hin! Nach einem kurz gesprochenen Vokal (a, e, i, o, u) schreiben wir meistens 'ck'. Wie bei 'Dreck' oder 'Backen'. Nach einem langen Vokal schreiben wir nur 'k'!",
    t1_b1: "Kurzer Vokal ➔ ck (Sack, lecker).",
    t1_b2: "Langer Vokal ➔ k (Haken, Schaukel).",
    t1_inst: "Welches Wort wird mit 'ck' geschrieben?",
    t1_h1: "Sprich das Wort laut: Ist das 'a' kurz vagy lang?",
    t1_h2: "Bei 'Backen' ist das 'a' kurz, also brauchen wir 'ck'.",
    t1_w1: "backen", t1_w2: "haken", t1_w3: "kuchen", t1_w4: "harken",
    // Quiz: MANUAL
    t1_q: "Wann schreiben wir meistens 'ck'?",
    t1_qa: "Nach einem kurzen Vokal", t1_qb: "Am Satzanfang", t1_qc: "Nach einem Konsonanten", t1_qd: "Immer am Ende",

    // T2: tz oder z?
    t2_title: "tz oder z?",
    t2_text: "Das ist wie bei ck! Nach einem kurzen Vokal schreiben wir 'tz' (Katze, Platz). Nach einem langen Vokal vagy Konsonanten schreiben wir nur 'z' (Herz, Walze).",
    t2_b1: "Kurzer Vokal ➔ tz (Spatz, Witze).",
    t2_b2: "Langer Vokal / Konsonant ➔ z (Pilz, kurz).",
    t2_inst: "Sortiere die Wörter!",
    t2_h1: "Kurzer Vokal braucht 'tz'.",
    t2_h2: "Katze (kurz) -> tz. Pilz (Konsonant davor) -> z.",
    t2_btz: "Wörter mit tz", t2_bz: "Wörter mit z",
    t2_i1: "Katze", t2_i2: "Pilz", t2_i3: "Spatz", t2_i4: "kurz",
    // Quiz: GENERATOR (nomen_k2)

    // T3: sp und st am Anfang
    t3_title: "sp und st am Anfang",
    t3_text: "Achtung! Am Anfang von Wörtern sprechen wir 'sp' wie 'schp' und 'st' wie 'scht'. Aber wir schreiben immer nur s-p und s-t!",
    t3_b1: "Wir sagen 'Schp', aber schreiben 'sp'.",
    t3_b2: "Wir sagen 'Scht', aber schreiben 'st'.",
    t3_inst: "Welches Wort passt zum Bild ☀️?",
    t3_h1: "Das Wort ist 'Stern'. Wir schreiben es mit s-t.",
    t3_h2: "Stern fängt mit st an.",
    t3_w1: "Stern", t3_w2: "Schtern", t3_w3: "Sctern", t3_w4: "Tern",
    // Quiz: MANUAL
    t3_q: "Wie schreiben wir das Wort 'Spiegel' am Anfang?",
    t3_qa: "sp", t3_qb: "schp", t3_qc: "shp", t3_qd: "p",

    // T4: ck oder k? (Lückentext)
    t4_title: "Der ck-Check",
    t4_text: "Kannst du die Lücken füllen? Denk an die Vokale! Wenn der Vokal kurz ist, schnappt die ck-Falle zu!",
    t4_b1: "Schne-cke (kurz) ➔ ck.",
    t4_inst: "Welches Zeichen passt in die Lücke?",
    t4_h1: "Das Wort ist 'Schnecke'. Das 'e' ist kurz.",
    t4_h2: "Wähle 'ck'.",
    t4_sent: "Die Schne___ kriecht langsam.",
    t4_c1: "cke", t4_c2: "ke", t4_c3: "ge", t4_c4: "che",
    // Quiz: GENERATOR (verben_k2)

    // T5: st oder sp?
    t5_title: "st oder sp?",
    t5_text: "Hörst du den Unterschied? Stein, Stern, Stopp fangen mit 'st' an. Spiel, Spaß, Sport fangen mit 'sp' an.",
    t5_b1: "Stein, Stopp ➔ st.",
    t5_b2: "Spiel, Spaß ➔ sp.",
    t5_inst: "Sortiere die 'Scht' und 'Schp' Wörter!",
    t5_h1: "Hör genau hin: Stein vagy Spiel?",
    t5_h2: "Stein gehört zu 'st'. Spaß gehört zu 'sp'.",
    t5_bst: "Anfang mit st", t5_bsp: "Anfang mit sp",
    t5_i1: "Stein", t5_i2: "Spaß", t5_i3: "Stern", t5_i4: "Spiel",
    // Quiz: MANUAL
    t5_q: "Welches Wort fängt mit 'sp' an?",
    t5_qa: "Sport", t5_qb: "Stuhl", t5_qc: "Sonne", t5_qd: "Schule",

    // T6: tz-Rätsel
    t6_title: "Das tz-Rätsel",
    t6_text: "Ein kleines Tier mit 'tz' am Ende? Die Katze! Ein Ort zum Sitzen? Der Platz! Alles mit kurzem Vokal.",
    t6_b1: "Katze, Platz, Satz ➔ tz.",
    t6_inst: "Verbinde die Wortteile richtig!",
    t6_h1: "Ka + tze = Katze.",
    t6_h2: "Wi + tze = Witze.",
    t6_l1: "Ka", t6_r1: "tze",
    t6_l2: "Wi", t6_r2: "tze",
    t6_l3: "Pi", t6_r3: "lz",
    t6_l4: "Ne", t6_r4: "tz",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Satzmeister mit Spezialbetűkkel
    t7_title: "Satzmeister-Prüfung",
    t7_text: "Jetzt bauen wir alles zusammen. Kannst du einen Satz mit ck, tz vagy sp richtig ordnen?",
    t7_b1: "Achte auf die Rechtschreibung!",
    t7_inst: "Baue den Satz richtig zusammen!",
    t7_h1: "Wer macht was? 'Der Spatz frisst.'",
    t7_h2: "Der Spatz (st!) fliegt.",
    t7_f1: "Der", t7_f2: "Spatz", t7_f3: "fliegt", t7_f4: "hoch.",
    // Quiz: MANUAL
    t7_q: "Welches Wort im Satz 'Der Bäcker backt.' hat ein 'ck'?",
    t7_qa: "Beide (Bäcker und backt)", t7_qb: "Nur Bäcker", t7_qc: "Nur backt", t7_qd: "Keines",

    // T8: Konsonanten-Verdopplung
    t8_title: "Konsonanten verdoppeln sich",
    t8_text: "Nach einem kurzen Vokal verdoppeln wir oft den nächsten Buchstaben! Kopf, Stoff, Ball. Das ist eine wichtige Regel!",
    t8_b1: "Kurzer Vokal ➔ Konsonant doppelt (Ball, Stoff).",
    t8_b2: "Langer Vokal ➔ Konsonant einfach (Bald, Stuhl).",
    t8_inst: "Welches Wort hat einen verdoppelten Konsonanten?",
    t8_h1: "Höre auf die Vokale: kurz vagy lang?",
    t8_h2: "Koff hat ein kurzes O, also KOpp. Kaff hat ein kurzes A, also KAff.",
    t8_w1: "Kaffe", t8_w2: "Kaffee", t8_w3: "Kafe", t8_w4: "KAffee",
    // Quiz: MANUAL
    t8_q: "Wann verdoppeln wir Konsonanten?",
    t8_qa: "Nach einem kurzen Vokal", t8_qb: "Nach einem langen Vokal", t8_qc: "Immer!", t8_qd: "Nur am Wortanfang",

    // T9: Doppelkonsonanten erkennen
    t9_title: "Doppelkonsonanten oder nicht?",
    t9_text: "Hörst du: 'fall' (ein L) vagy 'fall' (zwei L)? Es klingt fast gleich, aber es ist SEHR wichtig!",
    t9_b1: "fallen ➔ LL (kurzes A)",
    t9_b2: "fallen ➔ aber vorsicht: beide fallen sind richtig!",
    t9_inst: "Sortiere die Doppelkonsonanten-Wörter!",
    t9_h1: "Kurzer Vokal davor = wahrscheinlich doppelt!",
    t9_h2: "'Apfel' hat ein kurzes A, also AP-p-el.",
    t9_bdouble: "Mit Verdopplung", t9_bsingle: "Ohne Verdopplung",
    t9_i1: "Apfel", t9_i2: "Hobel", t9_i3: "Koffer", t9_i4: "Ofen",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Double Check (Vokal hören)
    t10_title: "Hör auf den Vokal!",
    t10_text: "Sprich diese Wörter laut: 'LiNNe' oder 'LiNe'? Das 'i' ist KURZ, also brauchen wir zwei N!",
    t10_b1: "Kurzer Vokal = Konsonant doppelt",
    t10_inst: "Ist der Vokal kurz oder lang? Wähle richtig!",
    t10_h1: "Sprich das Wort laut: Wie klingt das Vokal davor?",
    t10_h2: "'Linie' - das i ist LANG, also nur ein N.",
    t10_sent: "Das ist eine Li___e auf der Straße.",
    t10_c1: "ni", t10_c2: "nni", t10_c3: "nne", t10_c4: "n",
    // Quiz: GENERATOR (nomen_k2)

    // T11: ck, tz und Doppelkonsonanten kombiniert
    t11_title: "Alles durcheinander",
    t11_text: "Ck, tz, Doppelkonsonanten - immer kurzer Vokal! Backe, Katze, Kaffee - alles folgt der gleichen Regel!",
    t11_b1: "KURZER VOKAL ➔ ck, tz, oder Doppel",
    t11_inst: "Welches Wort passt NICHT zur Regel?",
    t11_h1: "Alle haben einen kurzen Vokal und verdoppeln deshalb!",
    t11_h2: "'Sack' = kurz A, 'Katze' = kurz A, 'Gasse' = kurz A - alle folgen der Regel!",
    t11_w1: "Sack", t11_w2: "Katze", t11_w3: "Gasse", t11_w4: "Sate",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Sp und st - auch am Ende!
    t12_title: "Sp und st am Wortende",
    t12_text: "Nicht nur am Anfang - auch am Ende bleiben sp und st! 'Gast', 'Nest', 'Obst'. Wir schreiben Buchstabe für Buchstabe!",
    t12_b1: "Gast, Nest, Obst ➔ st am Ende",
    t12_inst: "Welches Wort endet mit 'st' oder 'sp'?",
    t12_h1: "Höre das Ende: '-st' vagy '-sp'?",
    t12_h2: "'Gast' = G-A-ST, 'Nest' = N-E-ST.",
    t12_w1: "Gast", t12_w2: "Gasse", t12_w3: "Nest", t12_w4: "Nesse",
    // Quiz: GENERATOR (nomen_k2)

    // T13: ie und ei nochmal
    t13_title: "ie oder ei? (Wiederholung)",
    t13_text: "Noch eine Wiederholung: Lange i-Laute = 'ie'. Lange e-Laute = 'ei'. Biene und Reifen!",
    t13_b1: "ie = langes i-Laut",
    t13_b2: "ei = langes e-Laut",
    t13_inst: "Welches Wort ist richtig geschrieben?",
    t13_h1: "Sprich laut: Welcher Vokal ist lang?",
    t13_h2: "'Biene' = Bi-e, 'Reifen' = Re-fen.",
    t13_w1: "Biene", t13_w2: "Biene", t13_w3: "Reifen", t13_w4: "Reifen",
    // Quiz: MANUAL
    t13_q: "Wie schreiben wir 'Schuh' mit lang-I Sound?",
    t13_qa: "Schieh", t13_qb: "Schiee", t13_qc: "Schuh", t13_qd: "Schieh (mit 'ie')",

    // T14: Regel-Mix (alle zusammen)
    t14_title: "Das große Rechtschreibungs-Mix",
    t14_text: "Ck, tz, Doppelkonsonanten, sp/st, ie/ei - jetzt kombinieren wir alles! Satzmeister-Prüfung!",
    t14_b1: "Alle Regeln kombiniert!",
    t14_inst: "Schreib das Wort richtig!",
    t14_h1: "Denk an ALLE Regeln: Vokal kurz? sp/st? ie/ei?",
    t14_h2: "'Bienenstich' - Biene (ie), nenstich (st)!",
    t14_sent: "Der Spi___ fängt mit 'sp' an.",
    t14_c1: "el", t14_c2: "ell", t14_c3: "ehl", t14_c4: "e",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Rechtschreibungs-Champion!
    t15_title: "Rechtschreibungs-Champion!",
    t15_text: "Gratulieren! Du beherschst ck, tz, sp/st, Doppelkonsonanten und ie/ei! Du bist ein Super-Speller!",
    t15_b1: "Du kennst: ck, tz, Doppel, sp/st, ie/ei",
    t15_b2: "Kurzer Vokal ➔ Regel gilt!",
    t15_inst: "Final Test: Schreib perfekt!",
    t15_h1: "Nutze dein Wissen!",
    t15_h2: "Alle Regeln zusammen: kurz=verdoppel, sp/st bleibt!",
    t15_sent: "Der nasse Spie___ ist fertig.",
    t15_c1: "l", t15_c2: "ll", t15_c3: "lh", t15_c4: "le",
    // Quiz: GENERATOR (nomen_k2)
  },
  en: {

    explorer_title: "[EN] Hör-Detektive (ck, tz, sp, st)",

    // T1: ck oder k?
    t1_title: "[EN] ck oder k?",
    t1_text: "[EN] Hör genau hin! Nach einem kurz gesprochenen Vokal (a, e, i, o, u) schreiben wir meistens 'ck'. Wie bei 'Dreck' oder 'Backen'. Nach einem langen Vokal schreiben wir nur 'k'!",
    t1_b1: "[EN] Kurzer Vokal ➔ ck (Sack, lecker).",
    t1_b2: "[EN] Langer Vokal ➔ k (Haken, Schaukel).",
    t1_inst: "[EN] Welches Wort wird mit 'ck' geschrieben?",
    t1_h1: "[EN] Sprich das Wort laut: Ist das 'a' kurz vagy lang?",
    t1_h2: "[EN] Bei 'Backen' ist das 'a' kurz, also brauchen wir 'ck'.",
    t1_w1: "[EN] backen", t1_w2: "[EN] haken", t1_w3: "[EN] kuchen", t1_w4: "[EN] harken",
    // Quiz: MANUAL
    t1_q: "[EN] Wann schreiben wir meistens 'ck'?",
    t1_qa: "[EN] Nach einem kurzen Vokal", t1_qb: "[EN] Am Satzanfang", t1_qc: "[EN] Nach einem Konsonanten", t1_qd: "[EN] Immer am Ende",

    // T2: tz oder z?
    t2_title: "[EN] tz oder z?",
    t2_text: "[EN] Das ist wie bei ck! Nach einem kurzen Vokal schreiben wir 'tz' (Katze, Platz). Nach einem langen Vokal vagy Konsonanten schreiben wir nur 'z' (Herz, Walze).",
    t2_b1: "[EN] Kurzer Vokal ➔ tz (Spatz, Witze).",
    t2_b2: "[EN] Langer Vokal / Konsonant ➔ z (Pilz, kurz).",
    t2_inst: "[EN] Sortiere die Wörter!",
    t2_h1: "[EN] Kurzer Vokal braucht 'tz'.",
    t2_h2: "[EN] Katze (kurz) -> tz. Pilz (Konsonant davor) -> z.",
    t2_btz: "[EN] Wörter mit tz", t2_bz: "[EN] Wörter mit z",
    t2_i1: "[EN] Katze", t2_i2: "[EN] Pilz", t2_i3: "[EN] Spatz", t2_i4: "[EN] kurz",
    // Quiz: GENERATOR (nomen_k2)

    // T3: sp und st am Anfang
    t3_title: "[EN] sp und st am Anfang",
    t3_text: "[EN] Achtung! Am Anfang von Wörtern sprechen wir 'sp' wie 'schp' und 'st' wie 'scht'. Aber wir schreiben immer nur s-p und s-t!",
    t3_b1: "[EN] Wir sagen 'Schp', aber schreiben 'sp'.",
    t3_b2: "[EN] Wir sagen 'Scht', aber schreiben 'st'.",
    t3_inst: "[EN] Welches Wort passt zum Bild ☀️?",
    t3_h1: "[EN] Das Wort ist 'Stern'. Wir schreiben es mit s-t.",
    t3_h2: "[EN] Stern fängt mit st an.",
    t3_w1: "[EN] Stern", t3_w2: "[EN] Schtern", t3_w3: "[EN] Sctern", t3_w4: "[EN] Tern",
    // Quiz: MANUAL
    t3_q: "[EN] Wie schreiben wir das Wort 'Spiegel' am Anfang?",
    t3_qa: "[EN] sp", t3_qb: "[EN] schp", t3_qc: "[EN] shp", t3_qd: "[EN] p",

    // T4: ck oder k? (Lückentext)
    t4_title: "[EN] Der ck-Check",
    t4_text: "[EN] Kannst du die Lücken füllen? Denk an die Vokale! Wenn der Vokal kurz ist, schnappt die ck-Falle zu!",
    t4_b1: "[EN] Schne-cke (kurz) ➔ ck.",
    t4_inst: "[EN] Welches Zeichen passt in die Lücke?",
    t4_h1: "[EN] Das Wort ist 'Schnecke'. Das 'e' ist kurz.",
    t4_h2: "[EN] Wähle 'ck'.",
    t4_sent: "[EN] Die Schne___ kriecht langsam.",
    t4_c1: "[EN] cke", t4_c2: "[EN] ke", t4_c3: "[EN] ge", t4_c4: "[EN] che",
    // Quiz: GENERATOR (verben_k2)

    // T5: st oder sp?
    t5_title: "[EN] st oder sp?",
    t5_text: "[EN] Hörst du den Unterschied? Stein, Stern, Stopp fangen mit 'st' an. Spiel, Spaß, Sport fangen mit 'sp' an.",
    t5_b1: "[EN] Stein, Stopp ➔ st.",
    t5_b2: "[EN] Spiel, Spaß ➔ sp.",
    t5_inst: "[EN] Sortiere die 'Scht' und 'Schp' Wörter!",
    t5_h1: "[EN] Hör genau hin: Stein vagy Spiel?",
    t5_h2: "[EN] Stein gehört zu 'st'. Spaß gehört zu 'sp'.",
    t5_bst: "[EN] Anfang mit st", t5_bsp: "[EN] Anfang mit sp",
    t5_i1: "[EN] Stein", t5_i2: "[EN] Spaß", t5_i3: "[EN] Stern", t5_i4: "[EN] Spiel",
    // Quiz: MANUAL
    t5_q: "[EN] Welches Wort fängt mit 'sp' an?",
    t5_qa: "[EN] Sport", t5_qb: "[EN] Stuhl", t5_qc: "[EN] Sonne", t5_qd: "[EN] Schule",

    // T6: tz-Rätsel
    t6_title: "[EN] Das tz-Rätsel",
    t6_text: "[EN] Ein kleines Tier mit 'tz' am Ende? Die Katze! Ein Ort zum Sitzen? Der Platz! Alles mit kurzem Vokal.",
    t6_b1: "[EN] Katze, Platz, Satz ➔ tz.",
    t6_inst: "[EN] Verbinde die Wortteile richtig!",
    t6_h1: "[EN] Ka + tze = Katze.",
    t6_h2: "[EN] Wi + tze = Witze.",
    t6_l1: "[EN] Ka", t6_r1: "[EN] tze",
    t6_l2: "[EN] Wi", t6_r2: "[EN] tze",
    t6_l3: "[EN] Pi", t6_r3: "[EN] lz",
    t6_l4: "[EN] Ne", t6_r4: "[EN] tz",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Satzmeister mit Spezialbetűkkel
    t7_title: "[EN] Satzmeister-Prüfung",
    t7_text: "[EN] Jetzt bauen wir alles zusammen. Kannst du einen Satz mit ck, tz vagy sp richtig ordnen?",
    t7_b1: "[EN] Achte auf die Rechtschreibung!",
    t7_inst: "[EN] Baue den Satz richtig zusammen!",
    t7_h1: "[EN] Wer macht was? 'Der Spatz frisst.'",
    t7_h2: "[EN] Der Spatz (st!) fliegt.",
    t7_f1: "[EN] Der", t7_f2: "[EN] Spatz", t7_f3: "[EN] fliegt", t7_f4: "[EN] hoch.",
    // Quiz: MANUAL
    t7_q: "[EN] Welches Wort im Satz 'Der Bäcker backt.' hat ein 'ck'?",
    t7_qa: "[EN] Beide (Bäcker und backt)", t7_qb: "[EN] Nur Bäcker", t7_qc: "[EN] Nur backt", t7_qd: "[EN] Keines",

    // T8: Konsonanten-Verdopplung
    t8_title: "[EN] Konsonanten verdoppeln sich",
    t8_text: "[EN] Nach einem kurzen Vokal verdoppeln wir oft den nächsten Buchstaben! Kopf, Stoff, Ball. Das ist eine wichtige Regel!",
    t8_b1: "[EN] Kurzer Vokal ➔ Konsonant doppelt (Ball, Stoff).",
    t8_b2: "[EN] Langer Vokal ➔ Konsonant einfach (Bald, Stuhl).",
    t8_inst: "[EN] Welches Wort hat einen verdoppelten Konsonanten?",
    t8_h1: "[EN] Höre auf die Vokale: kurz vagy lang?",
    t8_h2: "[EN] Koff hat ein kurzes O, also KOpp. Kaff hat ein kurzes A, also KAff.",
    t8_w1: "[EN] Kaffe", t8_w2: "[EN] Kaffee", t8_w3: "[EN] Kafe", t8_w4: "[EN] KAffee",
    // Quiz: MANUAL
    t8_q: "[EN] Wann verdoppeln wir Konsonanten?",
    t8_qa: "[EN] Nach einem kurzen Vokal", t8_qb: "[EN] Nach einem langen Vokal", t8_qc: "[EN] Immer!", t8_qd: "[EN] Nur am Wortanfang",

    // T9: Doppelkonsonanten erkennen
    t9_title: "[EN] Doppelkonsonanten oder nicht?",
    t9_text: "[EN] Hörst du: 'fall' (ein L) vagy 'fall' (zwei L)? Es klingt fast gleich, aber es ist SEHR wichtig!",
    t9_b1: "[EN] fallen ➔ LL (kurzes A)",
    t9_b2: "[EN] fallen ➔ aber vorsicht: beide fallen sind richtig!",
    t9_inst: "[EN] Sortiere die Doppelkonsonanten-Wörter!",
    t9_h1: "[EN] Kurzer Vokal davor = wahrscheinlich doppelt!",
    t9_h2: "[EN] 'Apfel' hat ein kurzes A, also AP-p-el.",
    t9_bdouble: "[EN] Mit Verdopplung", t9_bsingle: "[EN] Ohne Verdopplung",
    t9_i1: "[EN] Apfel", t9_i2: "[EN] Hobel", t9_i3: "[EN] Koffer", t9_i4: "[EN] Ofen",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Double Check (Vokal hören)
    t10_title: "[EN] Hör auf den Vokal!",
    t10_text: "[EN] Sprich diese Wörter laut: 'LiNNe' oder 'LiNe'? Das 'i' ist KURZ, also brauchen wir zwei N!",
    t10_b1: "[EN] Kurzer Vokal = Konsonant doppelt",
    t10_inst: "[EN] Ist der Vokal kurz oder lang? Wähle richtig!",
    t10_h1: "[EN] Sprich das Wort laut: Wie klingt das Vokal davor?",
    t10_h2: "[EN] 'Linie' - das i ist LANG, also nur ein N.",
    t10_sent: "[EN] Das ist eine Li___e auf der Straße.",
    t10_c1: "[EN] ni", t10_c2: "[EN] nni", t10_c3: "[EN] nne", t10_c4: "[EN] n",
    // Quiz: GENERATOR (nomen_k2)

    // T11: ck, tz und Doppelkonsonanten kombiniert
    t11_title: "[EN] Alles durcheinander",
    t11_text: "[EN] Ck, tz, Doppelkonsonanten - immer kurzer Vokal! Backe, Katze, Kaffee - alles folgt der gleichen Regel!",
    t11_b1: "[EN] KURZER VOKAL ➔ ck, tz, oder Doppel",
    t11_inst: "[EN] Welches Wort passt NICHT zur Regel?",
    t11_h1: "[EN] Alle haben einen kurzen Vokal und verdoppeln deshalb!",
    t11_h2: "[EN] 'Sack' = kurz A, 'Katze' = kurz A, 'Gasse' = kurz A - alle folgen der Regel!",
    t11_w1: "[EN] Sack", t11_w2: "[EN] Katze", t11_w3: "[EN] Gasse", t11_w4: "[EN] Sate",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Sp und st - auch am Ende!
    t12_title: "[EN] Sp und st am Wortende",
    t12_text: "[EN] Nicht nur am Anfang - auch am Ende bleiben sp und st! 'Gast', 'Nest', 'Obst'. Wir schreiben Buchstabe für Buchstabe!",
    t12_b1: "[EN] Gast, Nest, Obst ➔ st am Ende",
    t12_inst: "[EN] Welches Wort endet mit 'st' oder 'sp'?",
    t12_h1: "[EN] Höre das Ende: '-st' vagy '-sp'?",
    t12_h2: "[EN] 'Gast' = G-A-ST, 'Nest' = N-E-ST.",
    t12_w1: "[EN] Gast", t12_w2: "[EN] Gasse", t12_w3: "[EN] Nest", t12_w4: "[EN] Nesse",
    // Quiz: GENERATOR (nomen_k2)

    // T13: ie und ei nochmal
    t13_title: "[EN] ie oder ei? (Wiederholung)",
    t13_text: "[EN] Noch eine Wiederholung: Lange i-Laute = 'ie'. Lange e-Laute = 'ei'. Biene und Reifen!",
    t13_b1: "[EN] ie = langes i-Laut",
    t13_b2: "[EN] ei = langes e-Laut",
    t13_inst: "[EN] Welches Wort ist richtig geschrieben?",
    t13_h1: "[EN] Sprich laut: Welcher Vokal ist lang?",
    t13_h2: "[EN] 'Biene' = Bi-e, 'Reifen' = Re-fen.",
    t13_w1: "[EN] Biene", t13_w2: "[EN] Biene", t13_w3: "[EN] Reifen", t13_w4: "[EN] Reifen",
    // Quiz: MANUAL
    t13_q: "[EN] Wie schreiben wir 'Schuh' mit lang-I Sound?",
    t13_qa: "[EN] Schieh", t13_qb: "[EN] Schiee", t13_qc: "[EN] Schuh", t13_qd: "[EN] Schieh (mit 'ie')",

    // T14: Regel-Mix (alle zusammen)
    t14_title: "[EN] Das große Rechtschreibungs-Mix",
    t14_text: "[EN] Ck, tz, Doppelkonsonanten, sp/st, ie/ei - jetzt kombinieren wir alles! Satzmeister-Prüfung!",
    t14_b1: "[EN] Alle Regeln kombiniert!",
    t14_inst: "[EN] Schreib das Wort richtig!",
    t14_h1: "[EN] Denk an ALLE Regeln: Vokal kurz? sp/st? ie/ei?",
    t14_h2: "[EN] 'Bienenstich' - Biene (ie), nenstich (st)!",
    t14_sent: "[EN] Der Spi___ fängt mit 'sp' an.",
    t14_c1: "[EN] el", t14_c2: "[EN] ell", t14_c3: "[EN] ehl", t14_c4: "[EN] e",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Rechtschreibungs-Champion!
    t15_title: "[EN] Rechtschreibungs-Champion!",
    t15_text: "[EN] Gratulieren! Du beherschst ck, tz, sp/st, Doppelkonsonanten und ie/ei! Du bist ein Super-Speller!",
    t15_b1: "[EN] Du kennst: ck, tz, Doppel, sp/st, ie/ei",
    t15_b2: "[EN] Kurzer Vokal ➔ Regel gilt!",
    t15_inst: "[EN] Final Test: Schreib perfekt!",
    t15_h1: "[EN] Nutze dein Wissen!",
    t15_h2: "[EN] Alle Regeln zusammen: kurz=verdoppel, sp/st bleibt!",
    t15_sent: "[EN] Der nasse Spie___ ist fertig.",
    t15_c1: "[EN] l", t15_c2: "[EN] ll", t15_c3: "[EN] lh", t15_c4: "[EN] le",
    // Quiz: GENERATOR (nomen_k2)
  
  },
  hu: {

    explorer_title: "[HU] Hör-Detektive (ck, tz, sp, st)",

    // T1: ck oder k?
    t1_title: "[HU] ck oder k?",
    t1_text: "[HU] Hör genau hin! Nach einem kurz gesprochenen Vokal (a, e, i, o, u) schreiben wir meistens 'ck'. Wie bei 'Dreck' oder 'Backen'. Nach einem langen Vokal schreiben wir nur 'k'!",
    t1_b1: "[HU] Kurzer Vokal ➔ ck (Sack, lecker).",
    t1_b2: "[HU] Langer Vokal ➔ k (Haken, Schaukel).",
    t1_inst: "[HU] Welches Wort wird mit 'ck' geschrieben?",
    t1_h1: "[HU] Sprich das Wort laut: Ist das 'a' kurz vagy lang?",
    t1_h2: "[HU] Bei 'Backen' ist das 'a' kurz, also brauchen wir 'ck'.",
    t1_w1: "[HU] backen", t1_w2: "[HU] haken", t1_w3: "[HU] kuchen", t1_w4: "[HU] harken",
    // Quiz: MANUAL
    t1_q: "[HU] Wann schreiben wir meistens 'ck'?",
    t1_qa: "[HU] Nach einem kurzen Vokal", t1_qb: "[HU] Am Satzanfang", t1_qc: "[HU] Nach einem Konsonanten", t1_qd: "[HU] Immer am Ende",

    // T2: tz oder z?
    t2_title: "[HU] tz oder z?",
    t2_text: "[HU] Das ist wie bei ck! Nach einem kurzen Vokal schreiben wir 'tz' (Katze, Platz). Nach einem langen Vokal vagy Konsonanten schreiben wir nur 'z' (Herz, Walze).",
    t2_b1: "[HU] Kurzer Vokal ➔ tz (Spatz, Witze).",
    t2_b2: "[HU] Langer Vokal / Konsonant ➔ z (Pilz, kurz).",
    t2_inst: "[HU] Sortiere die Wörter!",
    t2_h1: "[HU] Kurzer Vokal braucht 'tz'.",
    t2_h2: "[HU] Katze (kurz) -> tz. Pilz (Konsonant davor) -> z.",
    t2_btz: "[HU] Wörter mit tz", t2_bz: "[HU] Wörter mit z",
    t2_i1: "[HU] Katze", t2_i2: "[HU] Pilz", t2_i3: "[HU] Spatz", t2_i4: "[HU] kurz",
    // Quiz: GENERATOR (nomen_k2)

    // T3: sp und st am Anfang
    t3_title: "[HU] sp und st am Anfang",
    t3_text: "[HU] Achtung! Am Anfang von Wörtern sprechen wir 'sp' wie 'schp' und 'st' wie 'scht'. Aber wir schreiben immer nur s-p und s-t!",
    t3_b1: "[HU] Wir sagen 'Schp', aber schreiben 'sp'.",
    t3_b2: "[HU] Wir sagen 'Scht', aber schreiben 'st'.",
    t3_inst: "[HU] Welches Wort passt zum Bild ☀️?",
    t3_h1: "[HU] Das Wort ist 'Stern'. Wir schreiben es mit s-t.",
    t3_h2: "[HU] Stern fängt mit st an.",
    t3_w1: "[HU] Stern", t3_w2: "[HU] Schtern", t3_w3: "[HU] Sctern", t3_w4: "[HU] Tern",
    // Quiz: MANUAL
    t3_q: "[HU] Wie schreiben wir das Wort 'Spiegel' am Anfang?",
    t3_qa: "[HU] sp", t3_qb: "[HU] schp", t3_qc: "[HU] shp", t3_qd: "[HU] p",

    // T4: ck oder k? (Lückentext)
    t4_title: "[HU] Der ck-Check",
    t4_text: "[HU] Kannst du die Lücken füllen? Denk an die Vokale! Wenn der Vokal kurz ist, schnappt die ck-Falle zu!",
    t4_b1: "[HU] Schne-cke (kurz) ➔ ck.",
    t4_inst: "[HU] Welches Zeichen passt in die Lücke?",
    t4_h1: "[HU] Das Wort ist 'Schnecke'. Das 'e' ist kurz.",
    t4_h2: "[HU] Wähle 'ck'.",
    t4_sent: "[HU] Die Schne___ kriecht langsam.",
    t4_c1: "[HU] cke", t4_c2: "[HU] ke", t4_c3: "[HU] ge", t4_c4: "[HU] che",
    // Quiz: GENERATOR (verben_k2)

    // T5: st oder sp?
    t5_title: "[HU] st oder sp?",
    t5_text: "[HU] Hörst du den Unterschied? Stein, Stern, Stopp fangen mit 'st' an. Spiel, Spaß, Sport fangen mit 'sp' an.",
    t5_b1: "[HU] Stein, Stopp ➔ st.",
    t5_b2: "[HU] Spiel, Spaß ➔ sp.",
    t5_inst: "[HU] Sortiere die 'Scht' und 'Schp' Wörter!",
    t5_h1: "[HU] Hör genau hin: Stein vagy Spiel?",
    t5_h2: "[HU] Stein gehört zu 'st'. Spaß gehört zu 'sp'.",
    t5_bst: "[HU] Anfang mit st", t5_bsp: "[HU] Anfang mit sp",
    t5_i1: "[HU] Stein", t5_i2: "[HU] Spaß", t5_i3: "[HU] Stern", t5_i4: "[HU] Spiel",
    // Quiz: MANUAL
    t5_q: "[HU] Welches Wort fängt mit 'sp' an?",
    t5_qa: "[HU] Sport", t5_qb: "[HU] Stuhl", t5_qc: "[HU] Sonne", t5_qd: "[HU] Schule",

    // T6: tz-Rätsel
    t6_title: "[HU] Das tz-Rätsel",
    t6_text: "[HU] Ein kleines Tier mit 'tz' am Ende? Die Katze! Ein Ort zum Sitzen? Der Platz! Alles mit kurzem Vokal.",
    t6_b1: "[HU] Katze, Platz, Satz ➔ tz.",
    t6_inst: "[HU] Verbinde die Wortteile richtig!",
    t6_h1: "[HU] Ka + tze = Katze.",
    t6_h2: "[HU] Wi + tze = Witze.",
    t6_l1: "[HU] Ka", t6_r1: "[HU] tze",
    t6_l2: "[HU] Wi", t6_r2: "[HU] tze",
    t6_l3: "[HU] Pi", t6_r3: "[HU] lz",
    t6_l4: "[HU] Ne", t6_r4: "[HU] tz",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Satzmeister mit Spezialbetűkkel
    t7_title: "[HU] Satzmeister-Prüfung",
    t7_text: "[HU] Jetzt bauen wir alles zusammen. Kannst du einen Satz mit ck, tz vagy sp richtig ordnen?",
    t7_b1: "[HU] Achte auf die Rechtschreibung!",
    t7_inst: "[HU] Baue den Satz richtig zusammen!",
    t7_h1: "[HU] Wer macht was? 'Der Spatz frisst.'",
    t7_h2: "[HU] Der Spatz (st!) fliegt.",
    t7_f1: "[HU] Der", t7_f2: "[HU] Spatz", t7_f3: "[HU] fliegt", t7_f4: "[HU] hoch.",
    // Quiz: MANUAL
    t7_q: "[HU] Welches Wort im Satz 'Der Bäcker backt.' hat ein 'ck'?",
    t7_qa: "[HU] Beide (Bäcker und backt)", t7_qb: "[HU] Nur Bäcker", t7_qc: "[HU] Nur backt", t7_qd: "[HU] Keines",

    // T8: Konsonanten-Verdopplung
    t8_title: "[HU] Konsonanten verdoppeln sich",
    t8_text: "[HU] Nach einem kurzen Vokal verdoppeln wir oft den nächsten Buchstaben! Kopf, Stoff, Ball. Das ist eine wichtige Regel!",
    t8_b1: "[HU] Kurzer Vokal ➔ Konsonant doppelt (Ball, Stoff).",
    t8_b2: "[HU] Langer Vokal ➔ Konsonant einfach (Bald, Stuhl).",
    t8_inst: "[HU] Welches Wort hat einen verdoppelten Konsonanten?",
    t8_h1: "[HU] Höre auf die Vokale: kurz vagy lang?",
    t8_h2: "[HU] Koff hat ein kurzes O, also KOpp. Kaff hat ein kurzes A, also KAff.",
    t8_w1: "[HU] Kaffe", t8_w2: "[HU] Kaffee", t8_w3: "[HU] Kafe", t8_w4: "[HU] KAffee",
    // Quiz: MANUAL
    t8_q: "[HU] Wann verdoppeln wir Konsonanten?",
    t8_qa: "[HU] Nach einem kurzen Vokal", t8_qb: "[HU] Nach einem langen Vokal", t8_qc: "[HU] Immer!", t8_qd: "[HU] Nur am Wortanfang",

    // T9: Doppelkonsonanten erkennen
    t9_title: "[HU] Doppelkonsonanten oder nicht?",
    t9_text: "[HU] Hörst du: 'fall' (ein L) vagy 'fall' (zwei L)? Es klingt fast gleich, aber es ist SEHR wichtig!",
    t9_b1: "[HU] fallen ➔ LL (kurzes A)",
    t9_b2: "[HU] fallen ➔ aber vorsicht: beide fallen sind richtig!",
    t9_inst: "[HU] Sortiere die Doppelkonsonanten-Wörter!",
    t9_h1: "[HU] Kurzer Vokal davor = wahrscheinlich doppelt!",
    t9_h2: "[HU] 'Apfel' hat ein kurzes A, also AP-p-el.",
    t9_bdouble: "[HU] Mit Verdopplung", t9_bsingle: "[HU] Ohne Verdopplung",
    t9_i1: "[HU] Apfel", t9_i2: "[HU] Hobel", t9_i3: "[HU] Koffer", t9_i4: "[HU] Ofen",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Double Check (Vokal hören)
    t10_title: "[HU] Hör auf den Vokal!",
    t10_text: "[HU] Sprich diese Wörter laut: 'LiNNe' oder 'LiNe'? Das 'i' ist KURZ, also brauchen wir zwei N!",
    t10_b1: "[HU] Kurzer Vokal = Konsonant doppelt",
    t10_inst: "[HU] Ist der Vokal kurz oder lang? Wähle richtig!",
    t10_h1: "[HU] Sprich das Wort laut: Wie klingt das Vokal davor?",
    t10_h2: "[HU] 'Linie' - das i ist LANG, also nur ein N.",
    t10_sent: "[HU] Das ist eine Li___e auf der Straße.",
    t10_c1: "[HU] ni", t10_c2: "[HU] nni", t10_c3: "[HU] nne", t10_c4: "[HU] n",
    // Quiz: GENERATOR (nomen_k2)

    // T11: ck, tz und Doppelkonsonanten kombiniert
    t11_title: "[HU] Alles durcheinander",
    t11_text: "[HU] Ck, tz, Doppelkonsonanten - immer kurzer Vokal! Backe, Katze, Kaffee - alles folgt der gleichen Regel!",
    t11_b1: "[HU] KURZER VOKAL ➔ ck, tz, oder Doppel",
    t11_inst: "[HU] Welches Wort passt NICHT zur Regel?",
    t11_h1: "[HU] Alle haben einen kurzen Vokal und verdoppeln deshalb!",
    t11_h2: "[HU] 'Sack' = kurz A, 'Katze' = kurz A, 'Gasse' = kurz A - alle folgen der Regel!",
    t11_w1: "[HU] Sack", t11_w2: "[HU] Katze", t11_w3: "[HU] Gasse", t11_w4: "[HU] Sate",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Sp und st - auch am Ende!
    t12_title: "[HU] Sp und st am Wortende",
    t12_text: "[HU] Nicht nur am Anfang - auch am Ende bleiben sp und st! 'Gast', 'Nest', 'Obst'. Wir schreiben Buchstabe für Buchstabe!",
    t12_b1: "[HU] Gast, Nest, Obst ➔ st am Ende",
    t12_inst: "[HU] Welches Wort endet mit 'st' oder 'sp'?",
    t12_h1: "[HU] Höre das Ende: '-st' vagy '-sp'?",
    t12_h2: "[HU] 'Gast' = G-A-ST, 'Nest' = N-E-ST.",
    t12_w1: "[HU] Gast", t12_w2: "[HU] Gasse", t12_w3: "[HU] Nest", t12_w4: "[HU] Nesse",
    // Quiz: GENERATOR (nomen_k2)

    // T13: ie und ei nochmal
    t13_title: "[HU] ie oder ei? (Wiederholung)",
    t13_text: "[HU] Noch eine Wiederholung: Lange i-Laute = 'ie'. Lange e-Laute = 'ei'. Biene und Reifen!",
    t13_b1: "[HU] ie = langes i-Laut",
    t13_b2: "[HU] ei = langes e-Laut",
    t13_inst: "[HU] Welches Wort ist richtig geschrieben?",
    t13_h1: "[HU] Sprich laut: Welcher Vokal ist lang?",
    t13_h2: "[HU] 'Biene' = Bi-e, 'Reifen' = Re-fen.",
    t13_w1: "[HU] Biene", t13_w2: "[HU] Biene", t13_w3: "[HU] Reifen", t13_w4: "[HU] Reifen",
    // Quiz: MANUAL
    t13_q: "[HU] Wie schreiben wir 'Schuh' mit lang-I Sound?",
    t13_qa: "[HU] Schieh", t13_qb: "[HU] Schiee", t13_qc: "[HU] Schuh", t13_qd: "[HU] Schieh (mit 'ie')",

    // T14: Regel-Mix (alle zusammen)
    t14_title: "[HU] Das große Rechtschreibungs-Mix",
    t14_text: "[HU] Ck, tz, Doppelkonsonanten, sp/st, ie/ei - jetzt kombinieren wir alles! Satzmeister-Prüfung!",
    t14_b1: "[HU] Alle Regeln kombiniert!",
    t14_inst: "[HU] Schreib das Wort richtig!",
    t14_h1: "[HU] Denk an ALLE Regeln: Vokal kurz? sp/st? ie/ei?",
    t14_h2: "[HU] 'Bienenstich' - Biene (ie), nenstich (st)!",
    t14_sent: "[HU] Der Spi___ fängt mit 'sp' an.",
    t14_c1: "[HU] el", t14_c2: "[HU] ell", t14_c3: "[HU] ehl", t14_c4: "[HU] e",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Rechtschreibungs-Champion!
    t15_title: "[HU] Rechtschreibungs-Champion!",
    t15_text: "[HU] Gratulieren! Du beherschst ck, tz, sp/st, Doppelkonsonanten und ie/ei! Du bist ein Super-Speller!",
    t15_b1: "[HU] Du kennst: ck, tz, Doppel, sp/st, ie/ei",
    t15_b2: "[HU] Kurzer Vokal ➔ Regel gilt!",
    t15_inst: "[HU] Final Test: Schreib perfekt!",
    t15_h1: "[HU] Nutze dein Wissen!",
    t15_h2: "[HU] Alle Regeln zusammen: kurz=verdoppel, sp/st bleibt!",
    t15_sent: "[HU] Der nasse Spie___ ist fertig.",
    t15_c1: "[HU] l", t15_c2: "[HU] ll", t15_c3: "[HU] lh", t15_c4: "[HU] le",
    // Quiz: GENERATOR (nomen_k2)
  
  },
  ro: {

    explorer_title: "[RO] Hör-Detektive (ck, tz, sp, st)",

    // T1: ck oder k?
    t1_title: "[RO] ck oder k?",
    t1_text: "[RO] Hör genau hin! Nach einem kurz gesprochenen Vokal (a, e, i, o, u) schreiben wir meistens 'ck'. Wie bei 'Dreck' oder 'Backen'. Nach einem langen Vokal schreiben wir nur 'k'!",
    t1_b1: "[RO] Kurzer Vokal ➔ ck (Sack, lecker).",
    t1_b2: "[RO] Langer Vokal ➔ k (Haken, Schaukel).",
    t1_inst: "[RO] Welches Wort wird mit 'ck' geschrieben?",
    t1_h1: "[RO] Sprich das Wort laut: Ist das 'a' kurz vagy lang?",
    t1_h2: "[RO] Bei 'Backen' ist das 'a' kurz, also brauchen wir 'ck'.",
    t1_w1: "[RO] backen", t1_w2: "[RO] haken", t1_w3: "[RO] kuchen", t1_w4: "[RO] harken",
    // Quiz: MANUAL
    t1_q: "[RO] Wann schreiben wir meistens 'ck'?",
    t1_qa: "[RO] Nach einem kurzen Vokal", t1_qb: "[RO] Am Satzanfang", t1_qc: "[RO] Nach einem Konsonanten", t1_qd: "[RO] Immer am Ende",

    // T2: tz oder z?
    t2_title: "[RO] tz oder z?",
    t2_text: "[RO] Das ist wie bei ck! Nach einem kurzen Vokal schreiben wir 'tz' (Katze, Platz). Nach einem langen Vokal vagy Konsonanten schreiben wir nur 'z' (Herz, Walze).",
    t2_b1: "[RO] Kurzer Vokal ➔ tz (Spatz, Witze).",
    t2_b2: "[RO] Langer Vokal / Konsonant ➔ z (Pilz, kurz).",
    t2_inst: "[RO] Sortiere die Wörter!",
    t2_h1: "[RO] Kurzer Vokal braucht 'tz'.",
    t2_h2: "[RO] Katze (kurz) -> tz. Pilz (Konsonant davor) -> z.",
    t2_btz: "[RO] Wörter mit tz", t2_bz: "[RO] Wörter mit z",
    t2_i1: "[RO] Katze", t2_i2: "[RO] Pilz", t2_i3: "[RO] Spatz", t2_i4: "[RO] kurz",
    // Quiz: GENERATOR (nomen_k2)

    // T3: sp und st am Anfang
    t3_title: "[RO] sp und st am Anfang",
    t3_text: "[RO] Achtung! Am Anfang von Wörtern sprechen wir 'sp' wie 'schp' und 'st' wie 'scht'. Aber wir schreiben immer nur s-p und s-t!",
    t3_b1: "[RO] Wir sagen 'Schp', aber schreiben 'sp'.",
    t3_b2: "[RO] Wir sagen 'Scht', aber schreiben 'st'.",
    t3_inst: "[RO] Welches Wort passt zum Bild ☀️?",
    t3_h1: "[RO] Das Wort ist 'Stern'. Wir schreiben es mit s-t.",
    t3_h2: "[RO] Stern fängt mit st an.",
    t3_w1: "[RO] Stern", t3_w2: "[RO] Schtern", t3_w3: "[RO] Sctern", t3_w4: "[RO] Tern",
    // Quiz: MANUAL
    t3_q: "[RO] Wie schreiben wir das Wort 'Spiegel' am Anfang?",
    t3_qa: "[RO] sp", t3_qb: "[RO] schp", t3_qc: "[RO] shp", t3_qd: "[RO] p",

    // T4: ck oder k? (Lückentext)
    t4_title: "[RO] Der ck-Check",
    t4_text: "[RO] Kannst du die Lücken füllen? Denk an die Vokale! Wenn der Vokal kurz ist, schnappt die ck-Falle zu!",
    t4_b1: "[RO] Schne-cke (kurz) ➔ ck.",
    t4_inst: "[RO] Welches Zeichen passt in die Lücke?",
    t4_h1: "[RO] Das Wort ist 'Schnecke'. Das 'e' ist kurz.",
    t4_h2: "[RO] Wähle 'ck'.",
    t4_sent: "[RO] Die Schne___ kriecht langsam.",
    t4_c1: "[RO] cke", t4_c2: "[RO] ke", t4_c3: "[RO] ge", t4_c4: "[RO] che",
    // Quiz: GENERATOR (verben_k2)

    // T5: st oder sp?
    t5_title: "[RO] st oder sp?",
    t5_text: "[RO] Hörst du den Unterschied? Stein, Stern, Stopp fangen mit 'st' an. Spiel, Spaß, Sport fangen mit 'sp' an.",
    t5_b1: "[RO] Stein, Stopp ➔ st.",
    t5_b2: "[RO] Spiel, Spaß ➔ sp.",
    t5_inst: "[RO] Sortiere die 'Scht' und 'Schp' Wörter!",
    t5_h1: "[RO] Hör genau hin: Stein vagy Spiel?",
    t5_h2: "[RO] Stein gehört zu 'st'. Spaß gehört zu 'sp'.",
    t5_bst: "[RO] Anfang mit st", t5_bsp: "[RO] Anfang mit sp",
    t5_i1: "[RO] Stein", t5_i2: "[RO] Spaß", t5_i3: "[RO] Stern", t5_i4: "[RO] Spiel",
    // Quiz: MANUAL
    t5_q: "[RO] Welches Wort fängt mit 'sp' an?",
    t5_qa: "[RO] Sport", t5_qb: "[RO] Stuhl", t5_qc: "[RO] Sonne", t5_qd: "[RO] Schule",

    // T6: tz-Rätsel
    t6_title: "[RO] Das tz-Rätsel",
    t6_text: "[RO] Ein kleines Tier mit 'tz' am Ende? Die Katze! Ein Ort zum Sitzen? Der Platz! Alles mit kurzem Vokal.",
    t6_b1: "[RO] Katze, Platz, Satz ➔ tz.",
    t6_inst: "[RO] Verbinde die Wortteile richtig!",
    t6_h1: "[RO] Ka + tze = Katze.",
    t6_h2: "[RO] Wi + tze = Witze.",
    t6_l1: "[RO] Ka", t6_r1: "[RO] tze",
    t6_l2: "[RO] Wi", t6_r2: "[RO] tze",
    t6_l3: "[RO] Pi", t6_r3: "[RO] lz",
    t6_l4: "[RO] Ne", t6_r4: "[RO] tz",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Satzmeister mit Spezialbetűkkel
    t7_title: "[RO] Satzmeister-Prüfung",
    t7_text: "[RO] Jetzt bauen wir alles zusammen. Kannst du einen Satz mit ck, tz vagy sp richtig ordnen?",
    t7_b1: "[RO] Achte auf die Rechtschreibung!",
    t7_inst: "[RO] Baue den Satz richtig zusammen!",
    t7_h1: "[RO] Wer macht was? 'Der Spatz frisst.'",
    t7_h2: "[RO] Der Spatz (st!) fliegt.",
    t7_f1: "[RO] Der", t7_f2: "[RO] Spatz", t7_f3: "[RO] fliegt", t7_f4: "[RO] hoch.",
    // Quiz: MANUAL
    t7_q: "[RO] Welches Wort im Satz 'Der Bäcker backt.' hat ein 'ck'?",
    t7_qa: "[RO] Beide (Bäcker und backt)", t7_qb: "[RO] Nur Bäcker", t7_qc: "[RO] Nur backt", t7_qd: "[RO] Keines",

    // T8: Konsonanten-Verdopplung
    t8_title: "[RO] Konsonanten verdoppeln sich",
    t8_text: "[RO] Nach einem kurzen Vokal verdoppeln wir oft den nächsten Buchstaben! Kopf, Stoff, Ball. Das ist eine wichtige Regel!",
    t8_b1: "[RO] Kurzer Vokal ➔ Konsonant doppelt (Ball, Stoff).",
    t8_b2: "[RO] Langer Vokal ➔ Konsonant einfach (Bald, Stuhl).",
    t8_inst: "[RO] Welches Wort hat einen verdoppelten Konsonanten?",
    t8_h1: "[RO] Höre auf die Vokale: kurz vagy lang?",
    t8_h2: "[RO] Koff hat ein kurzes O, also KOpp. Kaff hat ein kurzes A, also KAff.",
    t8_w1: "[RO] Kaffe", t8_w2: "[RO] Kaffee", t8_w3: "[RO] Kafe", t8_w4: "[RO] KAffee",
    // Quiz: MANUAL
    t8_q: "[RO] Wann verdoppeln wir Konsonanten?",
    t8_qa: "[RO] Nach einem kurzen Vokal", t8_qb: "[RO] Nach einem langen Vokal", t8_qc: "[RO] Immer!", t8_qd: "[RO] Nur am Wortanfang",

    // T9: Doppelkonsonanten erkennen
    t9_title: "[RO] Doppelkonsonanten oder nicht?",
    t9_text: "[RO] Hörst du: 'fall' (ein L) vagy 'fall' (zwei L)? Es klingt fast gleich, aber es ist SEHR wichtig!",
    t9_b1: "[RO] fallen ➔ LL (kurzes A)",
    t9_b2: "[RO] fallen ➔ aber vorsicht: beide fallen sind richtig!",
    t9_inst: "[RO] Sortiere die Doppelkonsonanten-Wörter!",
    t9_h1: "[RO] Kurzer Vokal davor = wahrscheinlich doppelt!",
    t9_h2: "[RO] 'Apfel' hat ein kurzes A, also AP-p-el.",
    t9_bdouble: "[RO] Mit Verdopplung", t9_bsingle: "[RO] Ohne Verdopplung",
    t9_i1: "[RO] Apfel", t9_i2: "[RO] Hobel", t9_i3: "[RO] Koffer", t9_i4: "[RO] Ofen",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Double Check (Vokal hören)
    t10_title: "[RO] Hör auf den Vokal!",
    t10_text: "[RO] Sprich diese Wörter laut: 'LiNNe' oder 'LiNe'? Das 'i' ist KURZ, also brauchen wir zwei N!",
    t10_b1: "[RO] Kurzer Vokal = Konsonant doppelt",
    t10_inst: "[RO] Ist der Vokal kurz oder lang? Wähle richtig!",
    t10_h1: "[RO] Sprich das Wort laut: Wie klingt das Vokal davor?",
    t10_h2: "[RO] 'Linie' - das i ist LANG, also nur ein N.",
    t10_sent: "[RO] Das ist eine Li___e auf der Straße.",
    t10_c1: "[RO] ni", t10_c2: "[RO] nni", t10_c3: "[RO] nne", t10_c4: "[RO] n",
    // Quiz: GENERATOR (nomen_k2)

    // T11: ck, tz und Doppelkonsonanten kombiniert
    t11_title: "[RO] Alles durcheinander",
    t11_text: "[RO] Ck, tz, Doppelkonsonanten - immer kurzer Vokal! Backe, Katze, Kaffee - alles folgt der gleichen Regel!",
    t11_b1: "[RO] KURZER VOKAL ➔ ck, tz, oder Doppel",
    t11_inst: "[RO] Welches Wort passt NICHT zur Regel?",
    t11_h1: "[RO] Alle haben einen kurzen Vokal und verdoppeln deshalb!",
    t11_h2: "[RO] 'Sack' = kurz A, 'Katze' = kurz A, 'Gasse' = kurz A - alle folgen der Regel!",
    t11_w1: "[RO] Sack", t11_w2: "[RO] Katze", t11_w3: "[RO] Gasse", t11_w4: "[RO] Sate",
    // Quiz: GENERATOR (nomen_k2)

    // T12: Sp und st - auch am Ende!
    t12_title: "[RO] Sp und st am Wortende",
    t12_text: "[RO] Nicht nur am Anfang - auch am Ende bleiben sp und st! 'Gast', 'Nest', 'Obst'. Wir schreiben Buchstabe für Buchstabe!",
    t12_b1: "[RO] Gast, Nest, Obst ➔ st am Ende",
    t12_inst: "[RO] Welches Wort endet mit 'st' oder 'sp'?",
    t12_h1: "[RO] Höre das Ende: '-st' vagy '-sp'?",
    t12_h2: "[RO] 'Gast' = G-A-ST, 'Nest' = N-E-ST.",
    t12_w1: "[RO] Gast", t12_w2: "[RO] Gasse", t12_w3: "[RO] Nest", t12_w4: "[RO] Nesse",
    // Quiz: GENERATOR (nomen_k2)

    // T13: ie und ei nochmal
    t13_title: "[RO] ie oder ei? (Wiederholung)",
    t13_text: "[RO] Noch eine Wiederholung: Lange i-Laute = 'ie'. Lange e-Laute = 'ei'. Biene und Reifen!",
    t13_b1: "[RO] ie = langes i-Laut",
    t13_b2: "[RO] ei = langes e-Laut",
    t13_inst: "[RO] Welches Wort ist richtig geschrieben?",
    t13_h1: "[RO] Sprich laut: Welcher Vokal ist lang?",
    t13_h2: "[RO] 'Biene' = Bi-e, 'Reifen' = Re-fen.",
    t13_w1: "[RO] Biene", t13_w2: "[RO] Biene", t13_w3: "[RO] Reifen", t13_w4: "[RO] Reifen",
    // Quiz: MANUAL
    t13_q: "[RO] Wie schreiben wir 'Schuh' mit lang-I Sound?",
    t13_qa: "[RO] Schieh", t13_qb: "[RO] Schiee", t13_qc: "[RO] Schuh", t13_qd: "[RO] Schieh (mit 'ie')",

    // T14: Regel-Mix (alle zusammen)
    t14_title: "[RO] Das große Rechtschreibungs-Mix",
    t14_text: "[RO] Ck, tz, Doppelkonsonanten, sp/st, ie/ei - jetzt kombinieren wir alles! Satzmeister-Prüfung!",
    t14_b1: "[RO] Alle Regeln kombiniert!",
    t14_inst: "[RO] Schreib das Wort richtig!",
    t14_h1: "[RO] Denk an ALLE Regeln: Vokal kurz? sp/st? ie/ei?",
    t14_h2: "[RO] 'Bienenstich' - Biene (ie), nenstich (st)!",
    t14_sent: "[RO] Der Spi___ fängt mit 'sp' an.",
    t14_c1: "[RO] el", t14_c2: "[RO] ell", t14_c3: "[RO] ehl", t14_c4: "[RO] e",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Rechtschreibungs-Champion!
    t15_title: "[RO] Rechtschreibungs-Champion!",
    t15_text: "[RO] Gratulieren! Du beherschst ck, tz, sp/st, Doppelkonsonanten und ie/ei! Du bist ein Super-Speller!",
    t15_b1: "[RO] Du kennst: ck, tz, Doppel, sp/st, ie/ei",
    t15_b2: "[RO] Kurzer Vokal ➔ Regel gilt!",
    t15_inst: "[RO] Final Test: Schreib perfekt!",
    t15_h1: "[RO] Nutze dein Wissen!",
    t15_h2: "[RO] Alle Regeln zusammen: kurz=verdoppel, sp/st bleibt!",
    t15_sent: "[RO] Der nasse Spie___ ist fertig.",
    t15_c1: "[RO] l", t15_c2: "[RO] ll", t15_c3: "[RO] lh", t15_c4: "[RO] le",
    // Quiz: GENERATOR (nomen_k2)
  
  }
};

export const RECHT1_POOL: PoolTopicDef[] = [
  // ── 1. ck oder k? (highlight-text) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["ck", "k"]], color: "#EF4444" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // backen
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. tz oder z? (drag-to-bucket) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["tz", "z"]], color: "#3B82F6" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "tz", label: "t2_btz" }, { id: "z", label: "t2_bz" }],
      items: [
        { text: "t2_i1", bucketId: "tz" }, // Katze
        { text: "t2_i2", bucketId: "z" },  // Pilz
        { text: "t2_i3", bucketId: "tz" }, // Spatz
        { text: "t2_i4", bucketId: "z" },  // kurz
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 3. sp und st (highlight-text) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [ { text: "sp", emoji: "🎺", color: "#B45309", bg: "#FEF3C7" }, { text: "st", emoji: "⭐", color: "#1E40AF", bg: "#DBEAFE" } ] },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [0], // Stern
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. ck Check (gap-fill) ──────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "Schnecke", highlightChars: ["c", "k"], color: "#10B981" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 5. st vagy sp? (drag-to-bucket) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["st"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["sp"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "st", label: "t5_bst" }, { id: "sp", label: "t5_bsp" }],
      items: [
        { text: "t5_i1", bucketId: "st" }, // Stein
        { text: "t5_i2", bucketId: "sp" }, // Spaß
        { text: "t5_i3", bucketId: "st" }, // Stern
        { text: "t5_i4", bucketId: "sp" }, // Spiel
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. tz-Rätsel (match-pairs) ──────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "Kat", word2: "ze", result: "Katze", color: "#8B5CF6" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
        { left: "t6_l4", right: "t6_r4" },
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 7. Satzmeister (sentence-build) ──────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐦", label: "Spatz" }] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Der, Spatz, fliegt, hoch.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Konsonanten verdoppeln — highlight-text ────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "letter-circles", letters: ["ll", "ff", "mm"], color: "#7C3AED" },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [1], // Kaffee
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { question: "t8_q", choices: ["t8_qa","t8_qb","t8_qc","t8_qd"], answer: "t8_qa" },
  },

  // ── 9. Doppelkonsonanten — drag-to-bucket ─────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["ll", "pp", "ff"], bg: "#EDE9FE", border: "#7C3AED" }, right: { items: ["l", "p", "f"], bg: "#F3F4F6", border: "#9CA3AF" } },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "double", label: "t9_bdouble" }, { id: "single", label: "t9_bsingle" }],
      items: [
        { text: "t9_i1", bucketId: "double" }, // Apfel
        { text: "t9_i2", bucketId: "single" }, // Hobel
        { text: "t9_i3", bucketId: "double" }, // Koffer
        { text: "t9_i4", bucketId: "single" }, // Ofen
      ],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 10. Vokal hören — gap-fill ───────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "word-display", word: "Linie", highlightChars: ["i"], color: "#3B82F6" },
    bulletKeys: ["t10_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 0,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 11. ck, tz und Doppel kombiniert — highlight-text ─── hard ──
  {
    difficulty: "hard",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [ { text: "ck", emoji: "🔑", color: "#EF4444", bg: "#FEE2E2" }, { text: "tz", emoji: "⚡", color: "#7C3AED", bg: "#EDE9FE" } ] },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [3], // Sate (NICHT richtig - passt NICHT)
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 12. sp und st am Wortende — highlight-text ────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "letter-circles", letters: ["G", "a", "s", "t"], color: "#10B981" },
    bulletKeys: ["t12_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [0, 2], // Gast, Nest
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 13. ie oder ei Wiederholung — highlight-text ─────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "letter-pairs", pairs: [["ie", "Biene"], ["ei", "Reifen"]], color: "#F59E0B" },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [0], // Biene
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qd" },
  },

  // ── 14. Regel-Mix — gap-fill ─────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "icon-grid", items: [ { emoji: "🎮", label: "Spiel" }, { emoji: "⭐", label: "Stern" } ] },
    bulletKeys: ["t14_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t14_sent",
      choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"],
      correctIndex: 0,
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 15. Rechtschreibungs-Champion — gap-fill ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "Champion!", emoji: "🏆", color: "#F59E0B", bg: "#FEF3C7" } ] },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t15_sent",
      choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"],
      correctIndex: 0,
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "nomen_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Rechtschreibung2insel (ie, ei, eu, äu + Doppelkonsonanten)
// Thema: ie vs. ei, eu vs. äu, Doppelkonsonanten (ll, mm, nn, ss, tt)
// ─────────────────────────────────────────────────────────────────────────────

export const RECHT2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wort-Zauberer (ie, ei, Doppel-L/M/N)",

    // T1: ie oder ei?
    t1_title: "ie oder ei?",
    t1_text: "Hörst du den Unterschied? Bei 'ei' (wie Eis 🍦) sagst du 'ai'. Bei 'ie' (wie Biene 🐝) sprichst du ein langes I. Vergiss das E nicht!",
    t1_b1: "ie ➔ langes I (Biene, Lied).",
    t1_b2: "ei ➔ klingt wie 'ai' (Eis, Bein).",
    t1_inst: "Welches Wort wird mit 'ie' geschrieben?",
    t1_h1: "Hörst du ein langes I vagy ein 'ai'?",
    t1_h2: "Das Wort 'Lied' hat ein langes I.",
    t1_w1: "Lied", t1_w2: "Leid", t1_w3: "Mein", t1_w4: "Bein",
    // Quiz: MANUAL
    t1_q: "Wie schreiben wir das lange I in 'Biene'?",
    t1_qa: "ie", t1_qb: "i", t1_qc: "ei", t1_qd: "ih",

    // T2: eu oder äu?
    t2_title: "eu oder äu?",
    t2_text: "Beide klingen fast gleich! Aber Achtung: Wenn ein Wort von 'au' kommt (Haus -> Häuser), schreiben wir 'äu'. Sonst schreiben wir meistens 'eu'.",
    t2_b1: "au ➔ äu (Haus ➔ Häuser).",
    t2_b2: "Sonst oft ➔ eu (Eule, neu).",
    t2_inst: "Welches Wort passt zu 'Baum'?",
    t2_h1: "Aus 'au' wird beim Plural 'äu'.",
    t2_h2: "Baum ➔ Bäume.",
    t2_w1: "Bäume", t2_w2: "Beume", t2_w3: "Baume", t2_w4: "Bime",
    // Quiz: GENERATOR (plural)

    // T3: Doppelkonsonanten (ll, mm, nn...)
    t3_title: "Doppelt hält besser!",
    t3_text: "Nach einem kurzen Vokal schreiben wir oft zwei gleiche Konsonanten. Das stoppt den Vokal ganz schnell ab! Ball, schwimmen, rennen.",
    t3_b1: "Kurzer Vokal ➔ zwei Konsonanten (ll, mm, nn).",
    t3_inst: "Welches Wort hat zwei gleiche Konsonanten?",
    t3_h1: "Sprich das Wort: Ist das 'a' kurz vagy lang?",
    t3_h2: "'Ball' hat ein kurzes A und zwei L.",
    t3_w1: "Ball", t3_w2: "Wal", t3_w3: "Mal", t3_w4: "Tal",
    // Quiz: MANUAL
    t3_q: "Was passiert nach einem kurzen Vokal oft?",
    t3_qa: "Der Konsonant wird verdoppelt", t3_qb: "Der Vokal wird groß", t3_qc: "Nichts passiert", t3_qd: "Das Wort endet auf E",

    // T4: ll oder l?
    t4_title: "Der l-Check",
    t4_text: "Hörst du es? Bei 'Wal' 🐋 ist das A lang. Bei 'Ball' ⚽ ist das A kurz. Kurze Vokale lieben doppelte Buchstaben!",
    t4_b1: "l ➔ nach langem Vokal.",
    t4_b2: "ll ➔ nach kurzem Vokal.",
    t4_inst: "Welches Wort wird mit 'll' geschrieben?",
    t4_h1: "Falle, Rolle, Welle.",
    t4_h2: "'Rolle' hat ein kurzes O.",
    t4_sent: "Das Rad macht eine Ro___.",
    t4_c1: "lle", t4_c2: "le", t4_c3: "ne", t4_c4: "me",
    // Quiz: GENERATOR (nomen_k2)

    // T5: mm oder m?
    t5_title: "Schwimmen oder Blume?",
    t5_text: "In 'schwimmen' ist das I ganz kurz ➔ mm. In 'Blume' ist das U ganz lang ➔ m. Kannst du sie sortieren?",
    t5_b1: "mm ➔ schwimmen, kommen.",
    t5_b2: "m ➔ Blume, Name.",
    t5_inst: "Sortiere die Wörter: Ein M vagy zwei MM?",
    t5_h1: "Hör auf den Vokal davor.",
    t5_h2: "kommen (kurz) -> mm. Name (lang) -> m.",
    t5_b1m: "ein m", t5_b2m: "zwei mm",
    t5_i1: "Name", t5_i2: "kommen", t5_i3: "Blume", t5_i4: "schwimmen",
    // Quiz: GENERATOR (verben_k2)

    // T6: ss oder s?
    t6_title: "Das scharfe S (ss)",
    t6_text: "Wenn das S nach einem kurzen Vokal ganz scharf klingt, schreiben wir 'ss'. Wie bei 'Wasser' vagy 'Essen'.",
    t6_b1: "ss ➔ nach kurzem Vokal (Fass, Fluss).",
    t6_b2: "s ➔ weich (Hase, Nase).",
    t6_inst: "Was passt in die Lücke: 'Das Wa...er ist kalt'?",
    t6_h1: "Das 'a' in Wasser ist kurz.",
    t6_h2: "Wir brauchen 'ss'.",
    t6_sent_s: "Das Wa___er ist kalt.",
    t6_cs1: "ss", t6_cs2: "s", t6_cs3: "ß", t6_cs4: "z",
    // Quiz: MANUAL
    t6_q: "Wie schreiben wir 'Essen'?",
    t6_qa: "mit ss", t6_qb: "mit s", t6_qc: "mit ß", t6_qd: "mit z",

    // T7: Wort-Mix-Meister
    t7_title: "Wort-Mix-Meister",
    t7_text: "Du bist jetzt ein Profi für trügerische Buchstaben! ie, ei, ll vagy ss? Du kriegst sie alle!",
    t7_b1: "Überlege: Lang vagy kurz?",
    t7_inst: "Ordne den Satz richtig!",
    t7_h1: "Wer macht was? 'Die Biene fliegt.'",
    t7_h2: "Die Biene (ie!) fliegt (ie!).",
    t7_f1: "Die", t7_f2: "Biene", t7_f3: "fliegt", t7_f4: "schnell.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Umlaut - ä, ö, ü
    t8_title: "Umlaute im Wort",
    t8_text: "Umlaute sind spezielle Buchstaben: ä, ö, ü. Sie klingen anders und sehen anders aus! Äpfel hat einen Umlaut.",
    t8_b1: "Umlaute: ä, ö, ü.",
    t8_b2: "Sie verändern den Klang.",
    t8_inst: "Finde das Wort mit Umlaut!",
    t8_h1: "Suche das Wort mit Pünktchen.",
    t8_h2: "Äpfel, Körbchen, Müller haben Umlaute.",
    t8_w1: "Äpfel", t8_w2: "Apfel", t8_w3: "Apel", t8_w4: "Appel",
    // Quiz: GENERATOR (nomen_k2)

    // T9: ß oder ss?
    t9_title: "Das Eszett (ß)",
    t9_text: "ß ist ein spezieller Buchstabe für das scharfe S. Es heißt 'Eszett'. Nach einem langen Vokal schreiben wir ß, nicht ss.",
    t9_b1: "ß nach langem Vokal (Straße).",
    t9_b2: "ss nach kurzem Vokal (Klasse).",
    t9_inst: "Welches Wort hat 'ß'?",
    t9_h1: "Das 'a' in Straße ist lang.",
    t9_h2: "Straße hat ß, Klasse hat ss.",
    t9_w1: "Straße", t9_w2: "Klasse", t9_w3: "Essen", t9_w4: "Spiel",
    t9_sent: "Die Stra_e ist lang.",
    t9_c1: "ße", t9_c2: "be", t9_c3: "ße", t9_c4: "se",
    // Quiz: MANUAL
    t9_q: "Wann schreiben wir 'ß'?",
    t9_qa: "Nach langem Vokal", t9_qb: "Nach kurzem Vokal", t9_qc: "Am Wortanfang", t9_qd: "Immer zwischen Vokalen",

    // T10: -ig oder -lich?
    t10_title: "Wort-Enden: -ig oder -lich?",
    t10_text: "Manche Adjektive enden auf -ig (mutig, lustig) und manche auf -lich (freundlich, endlich). Das verändert die Bedeutung!",
    t10_b1: "Adjektive enden auf -ig oder -lich.",
    t10_inst: "Welche Endung passt?",
    t10_h1: "Das Wort bedeutet 'voll Mut'.",
    t10_h2: "mutig = voll von Mut, freundlich = auf freundliche Weise.",
    t10_sent: "Der Hund ist sehr ___.",
    t10_c1: "igend", t10_c2: "ig", t10_c3: "lich", t10_c4: "ling",
    // Quiz: GENERATOR (nomen_k2)

    // T11: -isch (Adjektive)
    t11_title: "Wörter mit -isch",
    t11_text: "Wenn wir ein Nomen in ein Adjektiv verwandeln, benutzen wir oft -isch. Deutschland wird zu deutsch!",
    t11_b1: "Nomen + -isch = Adjektiv.",
    t11_inst: "Welches Wort ist das Adjektiv?",
    t11_h1: "Das Gegenteil von 'einfach' ist kompliziert.",
    t11_h2: "England -> englisch. Deutsch -> deutsches Land.",
    t11_w1: "englisch", t11_w2: "England", t11_w3: "Englisch", t11_w4: "Engländer",
    // Quiz: MANUAL
    t11_q: "Welches Nomen passt zu 'italienisch'?",
    t11_qa: "Italien", t11_qb: "Italiener", t11_qc: "Italien", t11_qd: "Italik",

    // T12: ch am Wort-Anfang
    t12_title: "Das 'ch' am Anfang",
    t12_text: "Das 'ch' am Wort-Anfang klingt hart wie in 'Chemie'. Das ist anders als 'ch' in der Mitte wie in 'Macher'.",
    t12_b1: "ch am Anfang: hart (Chemie, China).",
    t12_inst: "Welches Wort beginnt mit 'Ch'?",
    t12_h1: "Hörst du das harte Ch?",
    t12_h2: "Chemie, China, Charakter beginnen mit Ch.",
    t12_w1: "Chemie", t12_w2: "Machine", t12_w3: "Macht", t12_w4: "Nacht",
    // Quiz: GENERATOR (nomen_k2)

    // T13: Doppelvokale
    t13_title: "Doppelvokale (aa, ee, oo)",
    t13_text: "Wenn ein Vokal verdoppelt wird, ist er lang! Aas, Tee, Boot haben doppelte Vokale.",
    t13_b1: "Doppelvokal = langer Vokal.",
    t13_inst: "Finde das Wort mit Doppelvokal!",
    t13_h1: "Sprich langsam: Teeee, Boooot.",
    t13_h2: "Tee und Boot haben doppelte Vokale.",
    t13_w1: "Tee", t13_w2: "Tal", t13_w3: "Tag", t13_w4: "Tau",
    // Quiz: MANUAL
    t13_q: "Welches Wort hat einen Doppelvokal?",
    t13_qa: "Boot", t13_qb: "Ort", t13_qc: "Wald", t13_qd: "Luft",

    // T14: Wort-Ende -heit
    t14_title: "Die Silbe -heit",
    t14_text: "Mit -heit können wir Adjektive in Nomen verwandeln. Schön wird Schönheit, schnell wird Schnellheit.",
    t14_b1: "Adjektiv + -heit = Nomen.",
    t14_inst: "Welches Wort passt zu 'Wahrheit'?",
    t14_h1: "Das Gegenteil von Lüge ist Wahrheit.",
    t14_h2: "Wahr -> Wahrheit. Schön -> Schönheit.",
    t14_w1: "Wahrheit", t14_w2: "Wahr", t14_w3: "Wahre", t14_w4: "Wahrlich",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Gemischte Rechtschreibung
    t15_title: "Der groe Rechtschreib-Mix",
    t15_text: "Du brauchst alles: ck, tz, ie, ei, Umlaute, Doppelkonsonanten. Das ist die große Prüfung!",
    t15_b1: "Alle Regeln zusammen.",
    t15_inst: "Welches Wort ist richtig geschrieben?",
    t15_h1: "Überlege: Kurzer vagy langer Vokal? Welche Regel?",
    t15_h2: "Nicht alles ist einfach - aber du kannst es!",
    t15_w1: "Glück", t15_w2: "Gluk", t15_w3: "Glükk", t15_w4: "Glück",
    // Quiz: GENERATOR (verben_k2)
  },
  en: {

    explorer_title: "[EN] Wort-Zauberer (ie, ei, Doppel-L/M/N)",

    // T1: ie oder ei?
    t1_title: "[EN] ie oder ei?",
    t1_text: "[EN] Hörst du den Unterschied? Bei 'ei' (wie Eis 🍦) sagst du 'ai'. Bei 'ie' (wie Biene 🐝) sprichst du ein langes I. Vergiss das E nicht!",
    t1_b1: "[EN] ie ➔ langes I (Biene, Lied).",
    t1_b2: "[EN] ei ➔ klingt wie 'ai' (Eis, Bein).",
    t1_inst: "[EN] Welches Wort wird mit 'ie' geschrieben?",
    t1_h1: "[EN] Hörst du ein langes I vagy ein 'ai'?",
    t1_h2: "[EN] Das Wort 'Lied' hat ein langes I.",
    t1_w1: "[EN] Lied", t1_w2: "[EN] Leid", t1_w3: "[EN] Mein", t1_w4: "[EN] Bein",
    // Quiz: MANUAL
    t1_q: "[EN] Wie schreiben wir das lange I in 'Biene'?",
    t1_qa: "[EN] ie", t1_qb: "[EN] i", t1_qc: "[EN] ei", t1_qd: "[EN] ih",

    // T2: eu oder äu?
    t2_title: "[EN] eu oder äu?",
    t2_text: "[EN] Beide klingen fast gleich! Aber Achtung: Wenn ein Wort von 'au' kommt (Haus -> Häuser), schreiben wir 'äu'. Sonst schreiben wir meistens 'eu'.",
    t2_b1: "[EN] au ➔ äu (Haus ➔ Häuser).",
    t2_b2: "[EN] Sonst oft ➔ eu (Eule, neu).",
    t2_inst: "[EN] Welches Wort passt zu 'Baum'?",
    t2_h1: "[EN] Aus 'au' wird beim Plural 'äu'.",
    t2_h2: "[EN] Baum ➔ Bäume.",
    t2_w1: "[EN] Bäume", t2_w2: "[EN] Beume", t2_w3: "[EN] Baume", t2_w4: "[EN] Bime",
    // Quiz: GENERATOR (plural)

    // T3: Doppelkonsonanten (ll, mm, nn...)
    t3_title: "[EN] Doppelt hält besser!",
    t3_text: "[EN] Nach einem kurzen Vokal schreiben wir oft zwei gleiche Konsonanten. Das stoppt den Vokal ganz schnell ab! Ball, schwimmen, rennen.",
    t3_b1: "[EN] Kurzer Vokal ➔ zwei Konsonanten (ll, mm, nn).",
    t3_inst: "[EN] Welches Wort hat zwei gleiche Konsonanten?",
    t3_h1: "[EN] Sprich das Wort: Ist das 'a' kurz vagy lang?",
    t3_h2: "[EN] 'Ball' hat ein kurzes A und zwei L.",
    t3_w1: "[EN] Ball", t3_w2: "[EN] Wal", t3_w3: "[EN] Mal", t3_w4: "[EN] Tal",
    // Quiz: MANUAL
    t3_q: "[EN] Was passiert nach einem kurzen Vokal oft?",
    t3_qa: "[EN] Der Konsonant wird verdoppelt", t3_qb: "[EN] Der Vokal wird groß", t3_qc: "[EN] Nichts passiert", t3_qd: "[EN] Das Wort endet auf E",

    // T4: ll oder l?
    t4_title: "[EN] Der l-Check",
    t4_text: "[EN] Hörst du es? Bei 'Wal' 🐋 ist das A lang. Bei 'Ball' ⚽ ist das A kurz. Kurze Vokale lieben doppelte Buchstaben!",
    t4_b1: "[EN] l ➔ nach langem Vokal.",
    t4_b2: "[EN] ll ➔ nach kurzem Vokal.",
    t4_inst: "[EN] Welches Wort wird mit 'll' geschrieben?",
    t4_h1: "[EN] Falle, Rolle, Welle.",
    t4_h2: "[EN] 'Rolle' hat ein kurzes O.",
    t4_sent: "[EN] Das Rad macht eine Ro___.",
    t4_c1: "[EN] lle", t4_c2: "[EN] le", t4_c3: "[EN] ne", t4_c4: "[EN] me",
    // Quiz: GENERATOR (nomen_k2)

    // T5: mm oder m?
    t5_title: "[EN] Schwimmen oder Blume?",
    t5_text: "[EN] In 'schwimmen' ist das I ganz kurz ➔ mm. In 'Blume' ist das U ganz lang ➔ m. Kannst du sie sortieren?",
    t5_b1: "[EN] mm ➔ schwimmen, kommen.",
    t5_b2: "[EN] m ➔ Blume, Name.",
    t5_inst: "[EN] Sortiere die Wörter: Ein M vagy zwei MM?",
    t5_h1: "[EN] Hör auf den Vokal davor.",
    t5_h2: "[EN] kommen (kurz) -> mm. Name (lang) -> m.",
    t5_b1m: "[EN] ein m", t5_b2m: "[EN] zwei mm",
    t5_i1: "[EN] Name", t5_i2: "[EN] kommen", t5_i3: "[EN] Blume", t5_i4: "[EN] schwimmen",
    // Quiz: GENERATOR (verben_k2)

    // T6: ss oder s?
    t6_title: "[EN] Das scharfe S (ss)",
    t6_text: "[EN] Wenn das S nach einem kurzen Vokal ganz scharf klingt, schreiben wir 'ss'. Wie bei 'Wasser' vagy 'Essen'.",
    t6_b1: "[EN] ss ➔ nach kurzem Vokal (Fass, Fluss).",
    t6_b2: "[EN] s ➔ weich (Hase, Nase).",
    t6_inst: "[EN] Was passt in die Lücke: 'Das Wa...er ist kalt'?",
    t6_h1: "[EN] Das 'a' in Wasser ist kurz.",
    t6_h2: "[EN] Wir brauchen 'ss'.",
    t6_sent_s: "[EN] Das Wa___er ist kalt.",
    t6_cs1: "[EN] ss", t6_cs2: "[EN] s", t6_cs3: "[EN] ß", t6_cs4: "[EN] z",
    // Quiz: MANUAL
    t6_q: "[EN] Wie schreiben wir 'Essen'?",
    t6_qa: "[EN] mit ss", t6_qb: "[EN] mit s", t6_qc: "[EN] mit ß", t6_qd: "[EN] mit z",

    // T7: Wort-Mix-Meister
    t7_title: "[EN] Wort-Mix-Meister",
    t7_text: "[EN] Du bist jetzt ein Profi für trügerische Buchstaben! ie, ei, ll vagy ss? Du kriegst sie alle!",
    t7_b1: "[EN] Überlege: Lang vagy kurz?",
    t7_inst: "[EN] Ordne den Satz richtig!",
    t7_h1: "[EN] Wer macht was? 'Die Biene fliegt.'",
    t7_h2: "[EN] Die Biene (ie!) fliegt (ie!).",
    t7_f1: "[EN] Die", t7_f2: "[EN] Biene", t7_f3: "[EN] fliegt", t7_f4: "[EN] schnell.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Umlaut - ä, ö, ü
    t8_title: "[EN] Umlaute im Wort",
    t8_text: "[EN] Umlaute sind spezielle Buchstaben: ä, ö, ü. Sie klingen anders und sehen anders aus! Äpfel hat einen Umlaut.",
    t8_b1: "[EN] Umlaute: ä, ö, ü.",
    t8_b2: "[EN] Sie verändern den Klang.",
    t8_inst: "[EN] Finde das Wort mit Umlaut!",
    t8_h1: "[EN] Suche das Wort mit Pünktchen.",
    t8_h2: "[EN] Äpfel, Körbchen, Müller haben Umlaute.",
    t8_w1: "[EN] Äpfel", t8_w2: "[EN] Apfel", t8_w3: "[EN] Apel", t8_w4: "[EN] Appel",
    // Quiz: GENERATOR (nomen_k2)

    // T9: ß oder ss?
    t9_title: "[EN] Das Eszett (ß)",
    t9_text: "[EN] ß ist ein spezieller Buchstabe für das scharfe S. Es heißt 'Eszett'. Nach einem langen Vokal schreiben wir ß, nicht ss.",
    t9_b1: "[EN] ß nach langem Vokal (Straße).",
    t9_b2: "[EN] ss nach kurzem Vokal (Klasse).",
    t9_inst: "[EN] Welches Wort hat 'ß'?",
    t9_h1: "[EN] Das 'a' in Straße ist lang.",
    t9_h2: "[EN] Straße hat ß, Klasse hat ss.",
    t9_w1: "[EN] Straße", t9_w2: "[EN] Klasse", t9_w3: "[EN] Essen", t9_w4: "[EN] Spiel",
    t9_sent: "[EN] Die Stra_e ist lang.",
    t9_c1: "[EN] ße", t9_c2: "[EN] be", t9_c3: "[EN] ße", t9_c4: "[EN] se",
    // Quiz: MANUAL
    t9_q: "[EN] Wann schreiben wir 'ß'?",
    t9_qa: "[EN] Nach langem Vokal", t9_qb: "[EN] Nach kurzem Vokal", t9_qc: "[EN] Am Wortanfang", t9_qd: "[EN] Immer zwischen Vokalen",

    // T10: -ig oder -lich?
    t10_title: "[EN] Wort-Enden: -ig oder -lich?",
    t10_text: "[EN] Manche Adjektive enden auf -ig (mutig, lustig) und manche auf -lich (freundlich, endlich). Das verändert die Bedeutung!",
    t10_b1: "[EN] Adjektive enden auf -ig oder -lich.",
    t10_inst: "[EN] Welche Endung passt?",
    t10_h1: "[EN] Das Wort bedeutet 'voll Mut'.",
    t10_h2: "[EN] mutig = voll von Mut, freundlich = auf freundliche Weise.",
    t10_sent: "[EN] Der Hund ist sehr ___.",
    t10_c1: "[EN] igend", t10_c2: "[EN] ig", t10_c3: "[EN] lich", t10_c4: "[EN] ling",
    // Quiz: GENERATOR (nomen_k2)

    // T11: -isch (Adjektive)
    t11_title: "[EN] Wörter mit -isch",
    t11_text: "[EN] Wenn wir ein Nomen in ein Adjektiv verwandeln, benutzen wir oft -isch. Deutschland wird zu deutsch!",
    t11_b1: "[EN] Nomen + -isch = Adjektiv.",
    t11_inst: "[EN] Welches Wort ist das Adjektiv?",
    t11_h1: "[EN] Das Gegenteil von 'einfach' ist kompliziert.",
    t11_h2: "[EN] England -> englisch. Deutsch -> deutsches Land.",
    t11_w1: "[EN] englisch", t11_w2: "[EN] England", t11_w3: "[EN] Englisch", t11_w4: "[EN] Engländer",
    // Quiz: MANUAL
    t11_q: "[EN] Welches Nomen passt zu 'italienisch'?",
    t11_qa: "[EN] Italien", t11_qb: "[EN] Italiener", t11_qc: "[EN] Italien", t11_qd: "[EN] Italik",

    // T12: ch am Wort-Anfang
    t12_title: "[EN] Das 'ch' am Anfang",
    t12_text: "[EN] Das 'ch' am Wort-Anfang klingt hart wie in 'Chemie'. Das ist anders als 'ch' in der Mitte wie in 'Macher'.",
    t12_b1: "[EN] ch am Anfang: hart (Chemie, China).",
    t12_inst: "[EN] Welches Wort beginnt mit 'Ch'?",
    t12_h1: "[EN] Hörst du das harte Ch?",
    t12_h2: "[EN] Chemie, China, Charakter beginnen mit Ch.",
    t12_w1: "[EN] Chemie", t12_w2: "[EN] Machine", t12_w3: "[EN] Macht", t12_w4: "[EN] Nacht",
    // Quiz: GENERATOR (nomen_k2)

    // T13: Doppelvokale
    t13_title: "[EN] Doppelvokale (aa, ee, oo)",
    t13_text: "[EN] Wenn ein Vokal verdoppelt wird, ist er lang! Aas, Tee, Boot haben doppelte Vokale.",
    t13_b1: "[EN] Doppelvokal = langer Vokal.",
    t13_inst: "[EN] Finde das Wort mit Doppelvokal!",
    t13_h1: "[EN] Sprich langsam: Teeee, Boooot.",
    t13_h2: "[EN] Tee und Boot haben doppelte Vokale.",
    t13_w1: "[EN] Tee", t13_w2: "[EN] Tal", t13_w3: "[EN] Tag", t13_w4: "[EN] Tau",
    // Quiz: MANUAL
    t13_q: "[EN] Welches Wort hat einen Doppelvokal?",
    t13_qa: "[EN] Boot", t13_qb: "[EN] Ort", t13_qc: "[EN] Wald", t13_qd: "[EN] Luft",

    // T14: Wort-Ende -heit
    t14_title: "[EN] Die Silbe -heit",
    t14_text: "[EN] Mit -heit können wir Adjektive in Nomen verwandeln. Schön wird Schönheit, schnell wird Schnellheit.",
    t14_b1: "[EN] Adjektiv + -heit = Nomen.",
    t14_inst: "[EN] Welches Wort passt zu 'Wahrheit'?",
    t14_h1: "[EN] Das Gegenteil von Lüge ist Wahrheit.",
    t14_h2: "[EN] Wahr -> Wahrheit. Schön -> Schönheit.",
    t14_w1: "[EN] Wahrheit", t14_w2: "[EN] Wahr", t14_w3: "[EN] Wahre", t14_w4: "[EN] Wahrlich",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Gemischte Rechtschreibung
    t15_title: "[EN] Der groe Rechtschreib-Mix",
    t15_text: "[EN] Du brauchst alles: ck, tz, ie, ei, Umlaute, Doppelkonsonanten. Das ist die große Prüfung!",
    t15_b1: "[EN] Alle Regeln zusammen.",
    t15_inst: "[EN] Welches Wort ist richtig geschrieben?",
    t15_h1: "[EN] Überlege: Kurzer vagy langer Vokal? Welche Regel?",
    t15_h2: "[EN] Nicht alles ist einfach - aber du kannst es!",
    t15_w1: "[EN] Glück", t15_w2: "[EN] Gluk", t15_w3: "[EN] Glükk", t15_w4: "[EN] Glück",
    // Quiz: GENERATOR (verben_k2)
  
  },
  hu: {

    explorer_title: "[HU] Wort-Zauberer (ie, ei, Doppel-L/M/N)",

    // T1: ie oder ei?
    t1_title: "[HU] ie oder ei?",
    t1_text: "[HU] Hörst du den Unterschied? Bei 'ei' (wie Eis 🍦) sagst du 'ai'. Bei 'ie' (wie Biene 🐝) sprichst du ein langes I. Vergiss das E nicht!",
    t1_b1: "[HU] ie ➔ langes I (Biene, Lied).",
    t1_b2: "[HU] ei ➔ klingt wie 'ai' (Eis, Bein).",
    t1_inst: "[HU] Welches Wort wird mit 'ie' geschrieben?",
    t1_h1: "[HU] Hörst du ein langes I vagy ein 'ai'?",
    t1_h2: "[HU] Das Wort 'Lied' hat ein langes I.",
    t1_w1: "[HU] Lied", t1_w2: "[HU] Leid", t1_w3: "[HU] Mein", t1_w4: "[HU] Bein",
    // Quiz: MANUAL
    t1_q: "[HU] Wie schreiben wir das lange I in 'Biene'?",
    t1_qa: "[HU] ie", t1_qb: "[HU] i", t1_qc: "[HU] ei", t1_qd: "[HU] ih",

    // T2: eu oder äu?
    t2_title: "[HU] eu oder äu?",
    t2_text: "[HU] Beide klingen fast gleich! Aber Achtung: Wenn ein Wort von 'au' kommt (Haus -> Häuser), schreiben wir 'äu'. Sonst schreiben wir meistens 'eu'.",
    t2_b1: "[HU] au ➔ äu (Haus ➔ Häuser).",
    t2_b2: "[HU] Sonst oft ➔ eu (Eule, neu).",
    t2_inst: "[HU] Welches Wort passt zu 'Baum'?",
    t2_h1: "[HU] Aus 'au' wird beim Plural 'äu'.",
    t2_h2: "[HU] Baum ➔ Bäume.",
    t2_w1: "[HU] Bäume", t2_w2: "[HU] Beume", t2_w3: "[HU] Baume", t2_w4: "[HU] Bime",
    // Quiz: GENERATOR (plural)

    // T3: Doppelkonsonanten (ll, mm, nn...)
    t3_title: "[HU] Doppelt hält besser!",
    t3_text: "[HU] Nach einem kurzen Vokal schreiben wir oft zwei gleiche Konsonanten. Das stoppt den Vokal ganz schnell ab! Ball, schwimmen, rennen.",
    t3_b1: "[HU] Kurzer Vokal ➔ zwei Konsonanten (ll, mm, nn).",
    t3_inst: "[HU] Welches Wort hat zwei gleiche Konsonanten?",
    t3_h1: "[HU] Sprich das Wort: Ist das 'a' kurz vagy lang?",
    t3_h2: "[HU] 'Ball' hat ein kurzes A und zwei L.",
    t3_w1: "[HU] Ball", t3_w2: "[HU] Wal", t3_w3: "[HU] Mal", t3_w4: "[HU] Tal",
    // Quiz: MANUAL
    t3_q: "[HU] Was passiert nach einem kurzen Vokal oft?",
    t3_qa: "[HU] Der Konsonant wird verdoppelt", t3_qb: "[HU] Der Vokal wird groß", t3_qc: "[HU] Nichts passiert", t3_qd: "[HU] Das Wort endet auf E",

    // T4: ll oder l?
    t4_title: "[HU] Der l-Check",
    t4_text: "[HU] Hörst du es? Bei 'Wal' 🐋 ist das A lang. Bei 'Ball' ⚽ ist das A kurz. Kurze Vokale lieben doppelte Buchstaben!",
    t4_b1: "[HU] l ➔ nach langem Vokal.",
    t4_b2: "[HU] ll ➔ nach kurzem Vokal.",
    t4_inst: "[HU] Welches Wort wird mit 'll' geschrieben?",
    t4_h1: "[HU] Falle, Rolle, Welle.",
    t4_h2: "[HU] 'Rolle' hat ein kurzes O.",
    t4_sent: "[HU] Das Rad macht eine Ro___.",
    t4_c1: "[HU] lle", t4_c2: "[HU] le", t4_c3: "[HU] ne", t4_c4: "[HU] me",
    // Quiz: GENERATOR (nomen_k2)

    // T5: mm oder m?
    t5_title: "[HU] Schwimmen oder Blume?",
    t5_text: "[HU] In 'schwimmen' ist das I ganz kurz ➔ mm. In 'Blume' ist das U ganz lang ➔ m. Kannst du sie sortieren?",
    t5_b1: "[HU] mm ➔ schwimmen, kommen.",
    t5_b2: "[HU] m ➔ Blume, Name.",
    t5_inst: "[HU] Sortiere die Wörter: Ein M vagy zwei MM?",
    t5_h1: "[HU] Hör auf den Vokal davor.",
    t5_h2: "[HU] kommen (kurz) -> mm. Name (lang) -> m.",
    t5_b1m: "[HU] ein m", t5_b2m: "[HU] zwei mm",
    t5_i1: "[HU] Name", t5_i2: "[HU] kommen", t5_i3: "[HU] Blume", t5_i4: "[HU] schwimmen",
    // Quiz: GENERATOR (verben_k2)

    // T6: ss oder s?
    t6_title: "[HU] Das scharfe S (ss)",
    t6_text: "[HU] Wenn das S nach einem kurzen Vokal ganz scharf klingt, schreiben wir 'ss'. Wie bei 'Wasser' vagy 'Essen'.",
    t6_b1: "[HU] ss ➔ nach kurzem Vokal (Fass, Fluss).",
    t6_b2: "[HU] s ➔ weich (Hase, Nase).",
    t6_inst: "[HU] Was passt in die Lücke: 'Das Wa...er ist kalt'?",
    t6_h1: "[HU] Das 'a' in Wasser ist kurz.",
    t6_h2: "[HU] Wir brauchen 'ss'.",
    t6_sent_s: "[HU] Das Wa___er ist kalt.",
    t6_cs1: "[HU] ss", t6_cs2: "[HU] s", t6_cs3: "[HU] ß", t6_cs4: "[HU] z",
    // Quiz: MANUAL
    t6_q: "[HU] Wie schreiben wir 'Essen'?",
    t6_qa: "[HU] mit ss", t6_qb: "[HU] mit s", t6_qc: "[HU] mit ß", t6_qd: "[HU] mit z",

    // T7: Wort-Mix-Meister
    t7_title: "[HU] Wort-Mix-Meister",
    t7_text: "[HU] Du bist jetzt ein Profi für trügerische Buchstaben! ie, ei, ll vagy ss? Du kriegst sie alle!",
    t7_b1: "[HU] Überlege: Lang vagy kurz?",
    t7_inst: "[HU] Ordne den Satz richtig!",
    t7_h1: "[HU] Wer macht was? 'Die Biene fliegt.'",
    t7_h2: "[HU] Die Biene (ie!) fliegt (ie!).",
    t7_f1: "[HU] Die", t7_f2: "[HU] Biene", t7_f3: "[HU] fliegt", t7_f4: "[HU] schnell.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Umlaut - ä, ö, ü
    t8_title: "[HU] Umlaute im Wort",
    t8_text: "[HU] Umlaute sind spezielle Buchstaben: ä, ö, ü. Sie klingen anders und sehen anders aus! Äpfel hat einen Umlaut.",
    t8_b1: "[HU] Umlaute: ä, ö, ü.",
    t8_b2: "[HU] Sie verändern den Klang.",
    t8_inst: "[HU] Finde das Wort mit Umlaut!",
    t8_h1: "[HU] Suche das Wort mit Pünktchen.",
    t8_h2: "[HU] Äpfel, Körbchen, Müller haben Umlaute.",
    t8_w1: "[HU] Äpfel", t8_w2: "[HU] Apfel", t8_w3: "[HU] Apel", t8_w4: "[HU] Appel",
    // Quiz: GENERATOR (nomen_k2)

    // T9: ß oder ss?
    t9_title: "[HU] Das Eszett (ß)",
    t9_text: "[HU] ß ist ein spezieller Buchstabe für das scharfe S. Es heißt 'Eszett'. Nach einem langen Vokal schreiben wir ß, nicht ss.",
    t9_b1: "[HU] ß nach langem Vokal (Straße).",
    t9_b2: "[HU] ss nach kurzem Vokal (Klasse).",
    t9_inst: "[HU] Welches Wort hat 'ß'?",
    t9_h1: "[HU] Das 'a' in Straße ist lang.",
    t9_h2: "[HU] Straße hat ß, Klasse hat ss.",
    t9_w1: "[HU] Straße", t9_w2: "[HU] Klasse", t9_w3: "[HU] Essen", t9_w4: "[HU] Spiel",
    t9_sent: "[HU] Die Stra_e ist lang.",
    t9_c1: "[HU] ße", t9_c2: "[HU] be", t9_c3: "[HU] ße", t9_c4: "[HU] se",
    // Quiz: MANUAL
    t9_q: "[HU] Wann schreiben wir 'ß'?",
    t9_qa: "[HU] Nach langem Vokal", t9_qb: "[HU] Nach kurzem Vokal", t9_qc: "[HU] Am Wortanfang", t9_qd: "[HU] Immer zwischen Vokalen",

    // T10: -ig oder -lich?
    t10_title: "[HU] Wort-Enden: -ig oder -lich?",
    t10_text: "[HU] Manche Adjektive enden auf -ig (mutig, lustig) und manche auf -lich (freundlich, endlich). Das verändert die Bedeutung!",
    t10_b1: "[HU] Adjektive enden auf -ig oder -lich.",
    t10_inst: "[HU] Welche Endung passt?",
    t10_h1: "[HU] Das Wort bedeutet 'voll Mut'.",
    t10_h2: "[HU] mutig = voll von Mut, freundlich = auf freundliche Weise.",
    t10_sent: "[HU] Der Hund ist sehr ___.",
    t10_c1: "[HU] igend", t10_c2: "[HU] ig", t10_c3: "[HU] lich", t10_c4: "[HU] ling",
    // Quiz: GENERATOR (nomen_k2)

    // T11: -isch (Adjektive)
    t11_title: "[HU] Wörter mit -isch",
    t11_text: "[HU] Wenn wir ein Nomen in ein Adjektiv verwandeln, benutzen wir oft -isch. Deutschland wird zu deutsch!",
    t11_b1: "[HU] Nomen + -isch = Adjektiv.",
    t11_inst: "[HU] Welches Wort ist das Adjektiv?",
    t11_h1: "[HU] Das Gegenteil von 'einfach' ist kompliziert.",
    t11_h2: "[HU] England -> englisch. Deutsch -> deutsches Land.",
    t11_w1: "[HU] englisch", t11_w2: "[HU] England", t11_w3: "[HU] Englisch", t11_w4: "[HU] Engländer",
    // Quiz: MANUAL
    t11_q: "[HU] Welches Nomen passt zu 'italienisch'?",
    t11_qa: "[HU] Italien", t11_qb: "[HU] Italiener", t11_qc: "[HU] Italien", t11_qd: "[HU] Italik",

    // T12: ch am Wort-Anfang
    t12_title: "[HU] Das 'ch' am Anfang",
    t12_text: "[HU] Das 'ch' am Wort-Anfang klingt hart wie in 'Chemie'. Das ist anders als 'ch' in der Mitte wie in 'Macher'.",
    t12_b1: "[HU] ch am Anfang: hart (Chemie, China).",
    t12_inst: "[HU] Welches Wort beginnt mit 'Ch'?",
    t12_h1: "[HU] Hörst du das harte Ch?",
    t12_h2: "[HU] Chemie, China, Charakter beginnen mit Ch.",
    t12_w1: "[HU] Chemie", t12_w2: "[HU] Machine", t12_w3: "[HU] Macht", t12_w4: "[HU] Nacht",
    // Quiz: GENERATOR (nomen_k2)

    // T13: Doppelvokale
    t13_title: "[HU] Doppelvokale (aa, ee, oo)",
    t13_text: "[HU] Wenn ein Vokal verdoppelt wird, ist er lang! Aas, Tee, Boot haben doppelte Vokale.",
    t13_b1: "[HU] Doppelvokal = langer Vokal.",
    t13_inst: "[HU] Finde das Wort mit Doppelvokal!",
    t13_h1: "[HU] Sprich langsam: Teeee, Boooot.",
    t13_h2: "[HU] Tee und Boot haben doppelte Vokale.",
    t13_w1: "[HU] Tee", t13_w2: "[HU] Tal", t13_w3: "[HU] Tag", t13_w4: "[HU] Tau",
    // Quiz: MANUAL
    t13_q: "[HU] Welches Wort hat einen Doppelvokal?",
    t13_qa: "[HU] Boot", t13_qb: "[HU] Ort", t13_qc: "[HU] Wald", t13_qd: "[HU] Luft",

    // T14: Wort-Ende -heit
    t14_title: "[HU] Die Silbe -heit",
    t14_text: "[HU] Mit -heit können wir Adjektive in Nomen verwandeln. Schön wird Schönheit, schnell wird Schnellheit.",
    t14_b1: "[HU] Adjektiv + -heit = Nomen.",
    t14_inst: "[HU] Welches Wort passt zu 'Wahrheit'?",
    t14_h1: "[HU] Das Gegenteil von Lüge ist Wahrheit.",
    t14_h2: "[HU] Wahr -> Wahrheit. Schön -> Schönheit.",
    t14_w1: "[HU] Wahrheit", t14_w2: "[HU] Wahr", t14_w3: "[HU] Wahre", t14_w4: "[HU] Wahrlich",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Gemischte Rechtschreibung
    t15_title: "[HU] Der groe Rechtschreib-Mix",
    t15_text: "[HU] Du brauchst alles: ck, tz, ie, ei, Umlaute, Doppelkonsonanten. Das ist die große Prüfung!",
    t15_b1: "[HU] Alle Regeln zusammen.",
    t15_inst: "[HU] Welches Wort ist richtig geschrieben?",
    t15_h1: "[HU] Überlege: Kurzer vagy langer Vokal? Welche Regel?",
    t15_h2: "[HU] Nicht alles ist einfach - aber du kannst es!",
    t15_w1: "[HU] Glück", t15_w2: "[HU] Gluk", t15_w3: "[HU] Glükk", t15_w4: "[HU] Glück",
    // Quiz: GENERATOR (verben_k2)
  
  },
  ro: {

    explorer_title: "[RO] Wort-Zauberer (ie, ei, Doppel-L/M/N)",

    // T1: ie oder ei?
    t1_title: "[RO] ie oder ei?",
    t1_text: "[RO] Hörst du den Unterschied? Bei 'ei' (wie Eis 🍦) sagst du 'ai'. Bei 'ie' (wie Biene 🐝) sprichst du ein langes I. Vergiss das E nicht!",
    t1_b1: "[RO] ie ➔ langes I (Biene, Lied).",
    t1_b2: "[RO] ei ➔ klingt wie 'ai' (Eis, Bein).",
    t1_inst: "[RO] Welches Wort wird mit 'ie' geschrieben?",
    t1_h1: "[RO] Hörst du ein langes I vagy ein 'ai'?",
    t1_h2: "[RO] Das Wort 'Lied' hat ein langes I.",
    t1_w1: "[RO] Lied", t1_w2: "[RO] Leid", t1_w3: "[RO] Mein", t1_w4: "[RO] Bein",
    // Quiz: MANUAL
    t1_q: "[RO] Wie schreiben wir das lange I in 'Biene'?",
    t1_qa: "[RO] ie", t1_qb: "[RO] i", t1_qc: "[RO] ei", t1_qd: "[RO] ih",

    // T2: eu oder äu?
    t2_title: "[RO] eu oder äu?",
    t2_text: "[RO] Beide klingen fast gleich! Aber Achtung: Wenn ein Wort von 'au' kommt (Haus -> Häuser), schreiben wir 'äu'. Sonst schreiben wir meistens 'eu'.",
    t2_b1: "[RO] au ➔ äu (Haus ➔ Häuser).",
    t2_b2: "[RO] Sonst oft ➔ eu (Eule, neu).",
    t2_inst: "[RO] Welches Wort passt zu 'Baum'?",
    t2_h1: "[RO] Aus 'au' wird beim Plural 'äu'.",
    t2_h2: "[RO] Baum ➔ Bäume.",
    t2_w1: "[RO] Bäume", t2_w2: "[RO] Beume", t2_w3: "[RO] Baume", t2_w4: "[RO] Bime",
    // Quiz: GENERATOR (plural)

    // T3: Doppelkonsonanten (ll, mm, nn...)
    t3_title: "[RO] Doppelt hält besser!",
    t3_text: "[RO] Nach einem kurzen Vokal schreiben wir oft zwei gleiche Konsonanten. Das stoppt den Vokal ganz schnell ab! Ball, schwimmen, rennen.",
    t3_b1: "[RO] Kurzer Vokal ➔ zwei Konsonanten (ll, mm, nn).",
    t3_inst: "[RO] Welches Wort hat zwei gleiche Konsonanten?",
    t3_h1: "[RO] Sprich das Wort: Ist das 'a' kurz vagy lang?",
    t3_h2: "[RO] 'Ball' hat ein kurzes A und zwei L.",
    t3_w1: "[RO] Ball", t3_w2: "[RO] Wal", t3_w3: "[RO] Mal", t3_w4: "[RO] Tal",
    // Quiz: MANUAL
    t3_q: "[RO] Was passiert nach einem kurzen Vokal oft?",
    t3_qa: "[RO] Der Konsonant wird verdoppelt", t3_qb: "[RO] Der Vokal wird groß", t3_qc: "[RO] Nichts passiert", t3_qd: "[RO] Das Wort endet auf E",

    // T4: ll oder l?
    t4_title: "[RO] Der l-Check",
    t4_text: "[RO] Hörst du es? Bei 'Wal' 🐋 ist das A lang. Bei 'Ball' ⚽ ist das A kurz. Kurze Vokale lieben doppelte Buchstaben!",
    t4_b1: "[RO] l ➔ nach langem Vokal.",
    t4_b2: "[RO] ll ➔ nach kurzem Vokal.",
    t4_inst: "[RO] Welches Wort wird mit 'll' geschrieben?",
    t4_h1: "[RO] Falle, Rolle, Welle.",
    t4_h2: "[RO] 'Rolle' hat ein kurzes O.",
    t4_sent: "[RO] Das Rad macht eine Ro___.",
    t4_c1: "[RO] lle", t4_c2: "[RO] le", t4_c3: "[RO] ne", t4_c4: "[RO] me",
    // Quiz: GENERATOR (nomen_k2)

    // T5: mm oder m?
    t5_title: "[RO] Schwimmen oder Blume?",
    t5_text: "[RO] In 'schwimmen' ist das I ganz kurz ➔ mm. In 'Blume' ist das U ganz lang ➔ m. Kannst du sie sortieren?",
    t5_b1: "[RO] mm ➔ schwimmen, kommen.",
    t5_b2: "[RO] m ➔ Blume, Name.",
    t5_inst: "[RO] Sortiere die Wörter: Ein M vagy zwei MM?",
    t5_h1: "[RO] Hör auf den Vokal davor.",
    t5_h2: "[RO] kommen (kurz) -> mm. Name (lang) -> m.",
    t5_b1m: "[RO] ein m", t5_b2m: "[RO] zwei mm",
    t5_i1: "[RO] Name", t5_i2: "[RO] kommen", t5_i3: "[RO] Blume", t5_i4: "[RO] schwimmen",
    // Quiz: GENERATOR (verben_k2)

    // T6: ss oder s?
    t6_title: "[RO] Das scharfe S (ss)",
    t6_text: "[RO] Wenn das S nach einem kurzen Vokal ganz scharf klingt, schreiben wir 'ss'. Wie bei 'Wasser' vagy 'Essen'.",
    t6_b1: "[RO] ss ➔ nach kurzem Vokal (Fass, Fluss).",
    t6_b2: "[RO] s ➔ weich (Hase, Nase).",
    t6_inst: "[RO] Was passt in die Lücke: 'Das Wa...er ist kalt'?",
    t6_h1: "[RO] Das 'a' in Wasser ist kurz.",
    t6_h2: "[RO] Wir brauchen 'ss'.",
    t6_sent_s: "[RO] Das Wa___er ist kalt.",
    t6_cs1: "[RO] ss", t6_cs2: "[RO] s", t6_cs3: "[RO] ß", t6_cs4: "[RO] z",
    // Quiz: MANUAL
    t6_q: "[RO] Wie schreiben wir 'Essen'?",
    t6_qa: "[RO] mit ss", t6_qb: "[RO] mit s", t6_qc: "[RO] mit ß", t6_qd: "[RO] mit z",

    // T7: Wort-Mix-Meister
    t7_title: "[RO] Wort-Mix-Meister",
    t7_text: "[RO] Du bist jetzt ein Profi für trügerische Buchstaben! ie, ei, ll vagy ss? Du kriegst sie alle!",
    t7_b1: "[RO] Überlege: Lang vagy kurz?",
    t7_inst: "[RO] Ordne den Satz richtig!",
    t7_h1: "[RO] Wer macht was? 'Die Biene fliegt.'",
    t7_h2: "[RO] Die Biene (ie!) fliegt (ie!).",
    t7_f1: "[RO] Die", t7_f2: "[RO] Biene", t7_f3: "[RO] fliegt", t7_f4: "[RO] schnell.",
    // Quiz: GENERATOR (nomen_k2)

    // T8: Umlaut - ä, ö, ü
    t8_title: "[RO] Umlaute im Wort",
    t8_text: "[RO] Umlaute sind spezielle Buchstaben: ä, ö, ü. Sie klingen anders und sehen anders aus! Äpfel hat einen Umlaut.",
    t8_b1: "[RO] Umlaute: ä, ö, ü.",
    t8_b2: "[RO] Sie verändern den Klang.",
    t8_inst: "[RO] Finde das Wort mit Umlaut!",
    t8_h1: "[RO] Suche das Wort mit Pünktchen.",
    t8_h2: "[RO] Äpfel, Körbchen, Müller haben Umlaute.",
    t8_w1: "[RO] Äpfel", t8_w2: "[RO] Apfel", t8_w3: "[RO] Apel", t8_w4: "[RO] Appel",
    // Quiz: GENERATOR (nomen_k2)

    // T9: ß oder ss?
    t9_title: "[RO] Das Eszett (ß)",
    t9_text: "[RO] ß ist ein spezieller Buchstabe für das scharfe S. Es heißt 'Eszett'. Nach einem langen Vokal schreiben wir ß, nicht ss.",
    t9_b1: "[RO] ß nach langem Vokal (Straße).",
    t9_b2: "[RO] ss nach kurzem Vokal (Klasse).",
    t9_inst: "[RO] Welches Wort hat 'ß'?",
    t9_h1: "[RO] Das 'a' in Straße ist lang.",
    t9_h2: "[RO] Straße hat ß, Klasse hat ss.",
    t9_w1: "[RO] Straße", t9_w2: "[RO] Klasse", t9_w3: "[RO] Essen", t9_w4: "[RO] Spiel",
    t9_sent: "[RO] Die Stra_e ist lang.",
    t9_c1: "[RO] ße", t9_c2: "[RO] be", t9_c3: "[RO] ße", t9_c4: "[RO] se",
    // Quiz: MANUAL
    t9_q: "[RO] Wann schreiben wir 'ß'?",
    t9_qa: "[RO] Nach langem Vokal", t9_qb: "[RO] Nach kurzem Vokal", t9_qc: "[RO] Am Wortanfang", t9_qd: "[RO] Immer zwischen Vokalen",

    // T10: -ig oder -lich?
    t10_title: "[RO] Wort-Enden: -ig oder -lich?",
    t10_text: "[RO] Manche Adjektive enden auf -ig (mutig, lustig) und manche auf -lich (freundlich, endlich). Das verändert die Bedeutung!",
    t10_b1: "[RO] Adjektive enden auf -ig oder -lich.",
    t10_inst: "[RO] Welche Endung passt?",
    t10_h1: "[RO] Das Wort bedeutet 'voll Mut'.",
    t10_h2: "[RO] mutig = voll von Mut, freundlich = auf freundliche Weise.",
    t10_sent: "[RO] Der Hund ist sehr ___.",
    t10_c1: "[RO] igend", t10_c2: "[RO] ig", t10_c3: "[RO] lich", t10_c4: "[RO] ling",
    // Quiz: GENERATOR (nomen_k2)

    // T11: -isch (Adjektive)
    t11_title: "[RO] Wörter mit -isch",
    t11_text: "[RO] Wenn wir ein Nomen in ein Adjektiv verwandeln, benutzen wir oft -isch. Deutschland wird zu deutsch!",
    t11_b1: "[RO] Nomen + -isch = Adjektiv.",
    t11_inst: "[RO] Welches Wort ist das Adjektiv?",
    t11_h1: "[RO] Das Gegenteil von 'einfach' ist kompliziert.",
    t11_h2: "[RO] England -> englisch. Deutsch -> deutsches Land.",
    t11_w1: "[RO] englisch", t11_w2: "[RO] England", t11_w3: "[RO] Englisch", t11_w4: "[RO] Engländer",
    // Quiz: MANUAL
    t11_q: "[RO] Welches Nomen passt zu 'italienisch'?",
    t11_qa: "[RO] Italien", t11_qb: "[RO] Italiener", t11_qc: "[RO] Italien", t11_qd: "[RO] Italik",

    // T12: ch am Wort-Anfang
    t12_title: "[RO] Das 'ch' am Anfang",
    t12_text: "[RO] Das 'ch' am Wort-Anfang klingt hart wie in 'Chemie'. Das ist anders als 'ch' in der Mitte wie in 'Macher'.",
    t12_b1: "[RO] ch am Anfang: hart (Chemie, China).",
    t12_inst: "[RO] Welches Wort beginnt mit 'Ch'?",
    t12_h1: "[RO] Hörst du das harte Ch?",
    t12_h2: "[RO] Chemie, China, Charakter beginnen mit Ch.",
    t12_w1: "[RO] Chemie", t12_w2: "[RO] Machine", t12_w3: "[RO] Macht", t12_w4: "[RO] Nacht",
    // Quiz: GENERATOR (nomen_k2)

    // T13: Doppelvokale
    t13_title: "[RO] Doppelvokale (aa, ee, oo)",
    t13_text: "[RO] Wenn ein Vokal verdoppelt wird, ist er lang! Aas, Tee, Boot haben doppelte Vokale.",
    t13_b1: "[RO] Doppelvokal = langer Vokal.",
    t13_inst: "[RO] Finde das Wort mit Doppelvokal!",
    t13_h1: "[RO] Sprich langsam: Teeee, Boooot.",
    t13_h2: "[RO] Tee und Boot haben doppelte Vokale.",
    t13_w1: "[RO] Tee", t13_w2: "[RO] Tal", t13_w3: "[RO] Tag", t13_w4: "[RO] Tau",
    // Quiz: MANUAL
    t13_q: "[RO] Welches Wort hat einen Doppelvokal?",
    t13_qa: "[RO] Boot", t13_qb: "[RO] Ort", t13_qc: "[RO] Wald", t13_qd: "[RO] Luft",

    // T14: Wort-Ende -heit
    t14_title: "[RO] Die Silbe -heit",
    t14_text: "[RO] Mit -heit können wir Adjektive in Nomen verwandeln. Schön wird Schönheit, schnell wird Schnellheit.",
    t14_b1: "[RO] Adjektiv + -heit = Nomen.",
    t14_inst: "[RO] Welches Wort passt zu 'Wahrheit'?",
    t14_h1: "[RO] Das Gegenteil von Lüge ist Wahrheit.",
    t14_h2: "[RO] Wahr -> Wahrheit. Schön -> Schönheit.",
    t14_w1: "[RO] Wahrheit", t14_w2: "[RO] Wahr", t14_w3: "[RO] Wahre", t14_w4: "[RO] Wahrlich",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Gemischte Rechtschreibung
    t15_title: "[RO] Der groe Rechtschreib-Mix",
    t15_text: "[RO] Du brauchst alles: ck, tz, ie, ei, Umlaute, Doppelkonsonanten. Das ist die große Prüfung!",
    t15_b1: "[RO] Alle Regeln zusammen.",
    t15_inst: "[RO] Welches Wort ist richtig geschrieben?",
    t15_h1: "[RO] Überlege: Kurzer vagy langer Vokal? Welche Regel?",
    t15_h2: "[RO] Nicht alles ist einfach - aber du kannst es!",
    t15_w1: "[RO] Glück", t15_w2: "[RO] Gluk", t15_w3: "[RO] Glükk", t15_w4: "[RO] Glück",
    // Quiz: GENERATOR (verben_k2)
  
  }
};

export const RECHT2_POOL: PoolTopicDef[] = [
  // ── 1. ie oder ei? (highlight-text) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["ie", "ei"]], color: "#7C3AED" },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // Lied
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" },
  },

  // ── 2. eu oder äu? (match-pairs) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "compound-word", word1: "Haus", word2: "er", result: "Häuser", color: "#F59E0B" },
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctIndices: [0], // Bäume
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 3. Doppelkonsonanten (highlight-text) ────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "text-bubbles", items: [ { text: "Ball", emoji: "⚽", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "rennen", emoji: "🏃", color: "#B91C1C", bg: "#FEE2E2" } ] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [0], // Ball
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. ll oder l? (gap-fill) ────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "Rolle", highlightChars: ["l", "l"], color: "#10B981" },
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0,
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 5. mm vagy m? (drag-to-bucket) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["m"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["mm"], bg: "#FEF3C7", border: "#D97706" } },
    bulletKeys: ["t5_b1", "t5_b2"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "m", label: "t5_b1m" }, { id: "mm", label: "t5_b2m" }],
      items: [
        { text: "t5_i1", bucketId: "m" },  // Name
        { text: "t5_i2", bucketId: "mm" }, // kommen
        { text: "t5_i3", bucketId: "m" },  // Blume
        { text: "t5_i4", bucketId: "mm" }, // schwimmen
      ],
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 6. ss vagy s? (gap-fill) ────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [ { text: "ss", emoji: "💧", color: "#0EA5E9", bg: "#E0F2FE" } ] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent_s",
      choices: ["t6_cs1", "t6_cs2", "t6_cs3", "t6_cs4"],
      correctIndex: 0,
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { question: "t6_q", choices: ["t6_qa","t6_qb","t6_qc","t6_qd"], answer: "t6_qa" },
  },

  // ── 7. Wort-Mix (sentence-build) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐝", label: "Biene" }, { emoji: "💨", label: "schnell" }] },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Die, Biene, fliegt, schnell.
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 8. Umlaute (highlight-text) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [ { text: "ä", emoji: "🍎", color: "#DC2626", bg: "#FEE2E2" }, { text: "ö", emoji: "🧀", color: "#EA580C", bg: "#FFEDD5" }, { text: "ü", emoji: "🛋️", color: "#7C3AED", bg: "#F3E8FF" } ] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [0], // Äpfel
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 9. ß oder ss? (gap-fill) ────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "letter-pairs", pairs: [["ß", "ss"]], color: "#0EA5E9" },
    bulletKeys: ["t9_b1", "t9_b2"],
    interactive: {
      type: "gap-fill",
      sentence: "t9_sent",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      correctIndex: 0,
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { question: "t9_q", choices: ["t9_qa","t9_qb","t9_qc","t9_qd"], answer: "t9_qa" },
  },

  // ── 10. -ig oder -lich? (match-pairs) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["-ig"], bg: "#FED7AA", border: "#D97706" }, right: { items: ["-lich"], bg: "#C7D2FE", border: "#4F46E5" } },
    bulletKeys: ["t10_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 1,
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 11. -isch (highlight-text) ─────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "englisch", highlightChars: ["-isch"], color: "#10B981" },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [0], // englisch
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { question: "t11_q", choices: ["t11_qa","t11_qb","t11_qc","t11_qd"], answer: "t11_qa" },
  },

  // ── 12. Ch am Anfang (drag-to-bucket) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["Ch"], bg: "#FCA5A5", border: "#DC2626" }, right: { items: ["ch"], bg: "#86EFAC", border: "#22C55E" } },
    bulletKeys: ["t12_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [0], // Chemie
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 13. Doppelvokale (gap-fill) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: "aa", color: "#3B82F6", bg: "#DBEAFE" }, { text: "ee", color: "#8B5CF6", bg: "#F3E8FF" }, { text: "oo", color: "#0EA5E9", bg: "#E0F2FE" } ] },
    bulletKeys: ["t13_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [0], // Tee
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { question: "t13_q", choices: ["t13_qa","t13_qb","t13_qc","t13_qd"], answer: "t13_qa" },
  },

  // ── 14. -heit (word-order) ─────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "compound-word", word1: "Schön", word2: "heit", result: "Schönheit", color: "#EC4899" },
    bulletKeys: ["t14_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4"],
      correctIndices: [0], // Wahrheit
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 15. Großer Mix (sentence-build) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "icon-grid", items: [{ emoji: "🎓", label: "Prüfung" }, { emoji: "✅", label: "Erfolg" }] },
    bulletKeys: ["t15_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [0, 3], // Glück (appears in position 0 and 3 is same, pick 0)
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "verben_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Wortfelderinsel
// Thema: Wortfelder (Oberbegriffe: Tiere, Möbel, Essen), Wortfamilien (backen→Bäcker)
// ─────────────────────────────────────────────────────────────────────────────

export const WORTFELD_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wort-Entdecker (Felder & Familien)",

    // T1: Was ist ein Wortfeld?
    t1_title: "Was ist ein Wortfeld?",
    t1_text: "Ein Wortfeld ist wie eine große Familie von Wörtern, die alle zum gleichen Thema gehören. Zum Beispiel gehören 'Hund', 'Katze' und 'Maus' zum Wortfeld TIERE.",
    t1_b1: "Wörter mit gleicher Bedeutung.",
    t1_b2: "Themen: Tiere, Kleidung, Sport.",
    t1_inst: "Welches Wort gehört zum Wortfeld TIERE?",
    t1_h1: "Suche nach einem Lebewesen.",
    t1_h2: "Der 'Hund' gehört zu den Tieren.",
    t1_w1: "Hund", t1_w2: "Haus", t1_w3: "Auto", t1_w4: "Apfel",
    // Quiz: GENERATOR (tiere_k1)

    // T2: Oberbegriffe (Obst oder Gemüse?)
    t2_title: "Obst oder Gemüse?",
    t2_text: "Wir können Dinge in Gruppen ordnen. Apfel und Birne sind 'Obst'. Karotte und Tomate sind 'Gemüse'. Das nennen wir Oberbegriffe.",
    t2_b1: "Oberbegriff = Name der Gruppe.",
    t2_inst: "Sortiere: Ist es Obst oder Gemüse?",
    t2_h1: "Süße Früchte sind meistens Obst.",
    t2_h2: "Apfel -> Obst. Karotte -> Gemüse.",
    t2_bo: "Obst 🍎", t2_bg: "Gemüse 🥕",
    t2_i1: "Apfel", t2_i2: "Karotte", t2_i3: "Birne", t2_i4: "Erbse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Die Wortfamilie
    t3_title: "Die Wortfamilie",
    t3_text: "Wörter in einer Wortfamilie haben alle den gleichen Wortstamm. Sie sehen sich ähnlich und gehören zusammen, wie 'fahren', 'Fahrer' und 'Fahrrad'.",
    t3_b1: "Gleicher Wortstamm.",
    t3_b2: "fahren ➔ Fahr-er, Fahr-zeug.",
    t3_inst: "Welches Wort gehört zur Familie 'fahren'?",
    t3_h1: "Suche ein Wort, in dem 'fahr' steckt.",
    t3_h2: "Das 'Fahrrad' gehört dazu.",
    t3_w1: "laufen", t3_w2: "Fahrrad", t3_w3: "spielen", t3_w4: "singen",
    // Quiz: MANUAL
    t3_q: "Was haben Wörter in einer Wortfamilie gemeinsam?",
    t3_qa: "Den Wortstamm", t3_qb: "Die gleiche Farbe", t3_qc: "Die gleiche Länge", t3_qd: "Nichts",

    // T4: Berufe finden
    t4_title: "Berufe aus Verben",
    t4_text: "Wusstest du, dass viele Berufe von Tunwörtern kommen? Jemand, der backt, ist der Bäcker. Jemand, der malt, ist der Maler.",
    t4_b1: "backen ➔ Bäcker.",
    t4_b2: "malen ➔ Maler.",
    t4_inst: "Verbinde das Tunwort mit dem Beruf!",
    t4_h1: "Was wird aus 'lehren'?",
    t4_h2: "lehren -> Lehrer, fahren -> Fahrer.",
    t4_l1: "backen", t4_r1: "Bäcker",
    t4_l2: "fahren", t4_r2: "Fahrer",
    t4_l3: "lehren", t4_r3: "Lehrer",
    t4_l4: "malen",  t4_r4: "Maler",
    // Quiz: GENERATOR (berufe_k2)

    // T5: Der Wortstamm-Check
    t5_title: "Der Wortstamm-Check",
    t5_text: "Finde den Wortstamm! In 'spielen', 'Spielfeld' und 'Mitspieler' steckt überall das Wort 'spiel'. Das ist der Stamm der Familie.",
    t5_b1: "Wortstamm finden.",
    t5_inst: "Finde den Wortstamm in 'Spielfeld'!",
    t5_h1: "Welcher Teil des Wortes ist bei 'spielen' auch dabei?",
    t5_h2: "Der Stamm ist 'spiel'.",
    t5_sent: "Der Wortstamm von Spielfeld ist ___.",
    t5_c1: "spiel", t5_c2: "feld", t5_c3: "en", t5_c4: "spie",
    // Quiz: MANUAL
    t5_q: "Was ist der Wortstamm von 'laufen, Läufer, verlaufen'?",
    t5_qa: "lauf", t5_qb: "fen", t5_qc: "ver", t5_qd: "er",

    // T6: Was passt nicht? (Oberbegriffe)
    t6_title: "Was passt nicht?",
    t6_text: "Ein Wort hat sich verlaufen! Es gehört nicht in das Wortfeld. Kannst du den Quatschmacher finden?",
    t6_b1: "Drei Wörter gehören zusammen.",
    t6_b2: "Eines passt nicht dazu.",
    t6_inst: "Welches Wort gehört NICHT zum Wortfeld MÖBEL?",
    t6_h1: "Tisch, Stuhl und Schrank sind Möbel.",
    t6_h2: "Ein 'Apfel' ist kein Möbelstück.",
    t6_w1: "Tisch", t6_w2: "Stuhl", t6_w3: "Apfel", t6_w4: "Schrank",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wörter bauen
    t7_title: "Wörter bauen",
    t7_text: "Wir können aus zwei Wörtern ein neues Wort bauen. Das kennst du schon! Tisch + Decke = Tischdecke. Es ist ein neues Wort aus dem Feld 'Essen'.",
    t7_b1: "Zusammengesetzte Wörter.",
    t7_inst: "Baue das Wort zusammen!",
    t7_h1: "Ein Schirm für den Regen.",
    t7_h2: "Regen + schirm.",
    t7_f1: "Regen", t7_f2: "schirm",
    // Quiz: MANUAL
    t7_q: "Aus welchen Wörtern besteht 'Haustür'?",
    t7_qa: "Haus + Tür", t7_qb: "Hau + Stür", t7_qc: "Hau + s + tür", t7_qd: "Hau + stür",

    // T8: Körperteile (body parts)
    t8_title: "Der Körper hat viele Teile",
    t8_text: "Unser Körper hat viele verschiedene Teile: Kopf, Arm, Bein, Auge, Ohr, Nase, Mund, Hand, Fuß und vieles mehr!",
    t8_b1: "Körperteile sind eine Wortfamilie.",
    t8_b2: "Zum Beispiel: Kopf, Auge, Nase.",
    t8_inst: "Welches Wort gehört zur Familie 'Körperteile'?",
    t8_h1: "Was hat jeder Mensch oben am Körper?",
    t8_h2: "Der Kopf ist ein Körperteil.",
    t8_w1: "Kopf", t8_w2: "Tisch", t8_w3: "Schuh", t8_w4: "Fenster",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Kleidung und Mode
    t9_title: "Kleidung - Was wir tragen",
    t9_text: "Kleider, Schuhe, Hosen, Hemden - das alles ist Kleidung. Diese Wörter bilden eine große Wortfamilie!",
    t9_b1: "Kleidung = Dinge, die wir anziehen.",
    t9_inst: "Sortiere: Was ist Kleidung?",
    t9_h1: "Mit Kleidung wärmen wir uns warm.",
    t9_h2: "Mantel, Hemd und Hose sind Kleidung.",
    t9_bo: "Kleidung", t9_bg: "Nicht Kleidung",
    t9_i1: "Hemd", t9_i2: "Stuhl", t9_i3: "Schuh", t9_i4: "Baum",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Speisen - Was wir essen
    t10_title: "Speisen und Getränke",
    t10_text: "Apfel, Brot, Käse, Milch - das sind Speisen! Sie sind zum Essen. Und dann gibt es noch Getränke wie Wasser, Saft und Tee.",
    t10_b1: "Oberbegriff: Essen und Trinken.",
    t10_inst: "Welches Wort gehört nicht zum Wortfeld Speisen?",
    t10_h1: "Was würde man essen? Was nicht?",
    t10_h2: "Brot und Käse isst man. Ein Stuhl isst man nicht!",
    t10_w1: "Brot", t10_w2: "Käse", t10_w3: "Stuhl", t10_w4: "Apfel",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Farben (colors)
    t11_title: "Die Welt der Farben",
    t11_text: "Rot, blau, grün, gelb - das sind Farben! Jede Farbe hat eine eigene Familie von Dingen in dieser Farbe.",
    t11_b1: "Farben: rot, blau, grün, gelb, weiß, schwarz...",
    t11_inst: "Welche Farbe passt nicht zum Set?",
    t11_h1: "Sind das alles Farben?",
    t11_h2: "Rot, Blau und Grün sind Farben. Tisch ist keine Farbe.",
    t11_w1: "rot", t11_w2: "blau", t11_w3: "Stuhl", t11_w4: "grün",
    // Quiz: GENERATOR (farben_k2)

    // T12: Tiere im Wortfeld
    t12_title: "Wilde Tiere und Haustiere",
    t12_text: "Manche Tiere leben wild in der Natur (Löwe, Tiger), und manche sind Haustiere (Hund, Katze). Sie bilden zusammen ein Wortfeld!",
    t12_b1: "Haustiere: Hund, Katze, Vogel.",
    t12_b2: "Wilde Tiere: Löwe, Tiger, Bär.",
    t12_inst: "Verbinde Tier und Oberbegriff!",
    t12_h1: "Welche Tiere leben bei Menschen?",
    t12_h2: "Hunde sind Haustiere. Löwen sind wilde Tiere.",
    t12_l1: "Hund", t12_r1: "Haustier",
    t12_l2: "Löwe", t12_r2: "Wild",
    t12_l3: "Schmetterling", t12_r3: "Insekt",
    t12_l4: "Adler", t12_r4: "Vogel",
    // Quiz: GENERATOR (tiere_k1)

    // T13: Das Haus und Raum
    t13_title: "Im Haus - Räume und Möbel",
    t13_text: "Ein Haus hat viele Räume: Wohnzimmer, Schlafzimmer, Küche, Bad. In jedem Raum stehen Möbel wie Tisch, Stuhl, Bett.",
    t13_b1: "Räume: Wohnzimmer, Küche, Schlafzimmer.",
    t13_b2: "Möbel: Tisch, Stuhl, Bett, Schrank.",
    t13_inst: "Welches Wort gehört nicht zum Wortfeld Haus?",
    t13_h1: "Was ist im Haus? Was nicht?",
    t13_h2: "Ein Tisch ist Möbel. Ein Auto ist nicht im Haus (meistens).",
    t13_w1: "Tisch", t13_w2: "Stuhl", t13_w3: "Auto", t13_w4: "Bett",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Menschen und Beziehungen
    t14_title: "Familie und Menschen",
    t14_text: "Mutter, Vater, Schwester, Bruder - das ist Familie! Auch Oma, Opa und Cousine gehören dazu. Sie sind alle Verwandte.",
    t14_b1: "Familie: Mutter, Vater, Geschwister.",
    t14_b2: "Verwandte: Großeltern, Cousine, Onkel, Tante.",
    t14_inst: "Welches Wort gehört zur Familie?",
    t14_h1: "Wer ist deine Familie?",
    t14_h2: "Mutter, Vater, Bruder sind Familie. Der Lehrer ist nicht in deiner Familie.",
    t14_w1: "Mutter", t14_w2: "Lehrer", t14_w3: "Opa", t14_w4: "Freund",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Jahreszeiten und Wetter
    t15_title: "Jahreszeiten und Wetter",
    t15_text: "Frühling, Sommer, Herbst, Winter - das sind Jahreszeiten. Im Sommer ist es warm und sonnig. Im Winter ist es kalt und es schneit!",
    t15_b1: "Jahreszeiten: Frühling, Sommer, Herbst, Winter.",
    t15_b2: "Wetter: sonnig, regnerisch, windig, schneien.",
    t15_inst: "Welches Wort gehört zum Wortfeld Jahreszeiten?",
    t15_h1: "Wann ist es kalt? Wann warm?",
    t15_h2: "Winter ist die kalte Jahreszeit. Sommer ist die warme Jahreszeit.",
    t15_w1: "Winter", t15_w2: "Stuhl", t15_w3: "Sommer", t15_w4: "Auto",
    // Quiz: GENERATOR (zeit_k2)
  },
  en: {

    explorer_title: "[EN] Wort-Entdecker (Felder & Familien)",

    // T1: Was ist ein Wortfeld?
    t1_title: "[EN] Was ist ein Wortfeld?",
    t1_text: "[EN] Ein Wortfeld ist wie eine große Familie von Wörtern, die alle zum gleichen Thema gehören. Zum Beispiel gehören 'Hund', 'Katze' und 'Maus' zum Wortfeld TIERE.",
    t1_b1: "[EN] Wörter mit gleicher Bedeutung.",
    t1_b2: "[EN] Themen: Tiere, Kleidung, Sport.",
    t1_inst: "[EN] Welches Wort gehört zum Wortfeld TIERE?",
    t1_h1: "[EN] Suche nach einem Lebewesen.",
    t1_h2: "[EN] Der 'Hund' gehört zu den Tieren.",
    t1_w1: "[EN] Hund", t1_w2: "[EN] Haus", t1_w3: "[EN] Auto", t1_w4: "[EN] Apfel",
    // Quiz: GENERATOR (tiere_k1)

    // T2: Oberbegriffe (Obst oder Gemüse?)
    t2_title: "[EN] Obst oder Gemüse?",
    t2_text: "[EN] Wir können Dinge in Gruppen ordnen. Apfel und Birne sind 'Obst'. Karotte und Tomate sind 'Gemüse'. Das nennen wir Oberbegriffe.",
    t2_b1: "[EN] Oberbegriff = Name der Gruppe.",
    t2_inst: "[EN] Sortiere: Ist es Obst oder Gemüse?",
    t2_h1: "[EN] Süße Früchte sind meistens Obst.",
    t2_h2: "[EN] Apfel -> Obst. Karotte -> Gemüse.",
    t2_bo: "[EN] Obst 🍎", t2_bg: "[EN] Gemüse 🥕",
    t2_i1: "[EN] Apfel", t2_i2: "[EN] Karotte", t2_i3: "[EN] Birne", t2_i4: "[EN] Erbse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Die Wortfamilie
    t3_title: "[EN] Die Wortfamilie",
    t3_text: "[EN] Wörter in einer Wortfamilie haben alle den gleichen Wortstamm. Sie sehen sich ähnlich und gehören zusammen, wie 'fahren', 'Fahrer' und 'Fahrrad'.",
    t3_b1: "[EN] Gleicher Wortstamm.",
    t3_b2: "[EN] fahren ➔ Fahr-er, Fahr-zeug.",
    t3_inst: "[EN] Welches Wort gehört zur Familie 'fahren'?",
    t3_h1: "[EN] Suche ein Wort, in dem 'fahr' steckt.",
    t3_h2: "[EN] Das 'Fahrrad' gehört dazu.",
    t3_w1: "[EN] laufen", t3_w2: "[EN] Fahrrad", t3_w3: "[EN] spielen", t3_w4: "[EN] singen",
    // Quiz: MANUAL
    t3_q: "[EN] Was haben Wörter in einer Wortfamilie gemeinsam?",
    t3_qa: "[EN] Den Wortstamm", t3_qb: "[EN] Die gleiche Farbe", t3_qc: "[EN] Die gleiche Länge", t3_qd: "[EN] Nichts",

    // T4: Berufe finden
    t4_title: "[EN] Berufe aus Verben",
    t4_text: "[EN] Wusstest du, dass viele Berufe von Tunwörtern kommen? Jemand, der backt, ist der Bäcker. Jemand, der malt, ist der Maler.",
    t4_b1: "[EN] backen ➔ Bäcker.",
    t4_b2: "[EN] malen ➔ Maler.",
    t4_inst: "[EN] Verbinde das Tunwort mit dem Beruf!",
    t4_h1: "[EN] Was wird aus 'lehren'?",
    t4_h2: "[EN] lehren -> Lehrer, fahren -> Fahrer.",
    t4_l1: "[EN] backen", t4_r1: "[EN] Bäcker",
    t4_l2: "[EN] fahren", t4_r2: "[EN] Fahrer",
    t4_l3: "[EN] lehren", t4_r3: "[EN] Lehrer",
    t4_l4: "[EN] malen",  t4_r4: "[EN] Maler",
    // Quiz: GENERATOR (berufe_k2)

    // T5: Der Wortstamm-Check
    t5_title: "[EN] Der Wortstamm-Check",
    t5_text: "[EN] Finde den Wortstamm! In 'spielen', 'Spielfeld' und 'Mitspieler' steckt überall das Wort 'spiel'. Das ist der Stamm der Familie.",
    t5_b1: "[EN] Wortstamm finden.",
    t5_inst: "[EN] Finde den Wortstamm in 'Spielfeld'!",
    t5_h1: "[EN] Welcher Teil des Wortes ist bei 'spielen' auch dabei?",
    t5_h2: "[EN] Der Stamm ist 'spiel'.",
    t5_sent: "[EN] Der Wortstamm von Spielfeld ist ___.",
    t5_c1: "[EN] spiel", t5_c2: "[EN] feld", t5_c3: "[EN] en", t5_c4: "[EN] spie",
    // Quiz: MANUAL
    t5_q: "[EN] Was ist der Wortstamm von 'laufen, Läufer, verlaufen'?",
    t5_qa: "[EN] lauf", t5_qb: "[EN] fen", t5_qc: "[EN] ver", t5_qd: "[EN] er",

    // T6: Was passt nicht? (Oberbegriffe)
    t6_title: "[EN] Was passt nicht?",
    t6_text: "[EN] Ein Wort hat sich verlaufen! Es gehört nicht in das Wortfeld. Kannst du den Quatschmacher finden?",
    t6_b1: "[EN] Drei Wörter gehören zusammen.",
    t6_b2: "[EN] Eines passt nicht dazu.",
    t6_inst: "[EN] Welches Wort gehört NICHT zum Wortfeld MÖBEL?",
    t6_h1: "[EN] Tisch, Stuhl und Schrank sind Möbel.",
    t6_h2: "[EN] Ein 'Apfel' ist kein Möbelstück.",
    t6_w1: "[EN] Tisch", t6_w2: "[EN] Stuhl", t6_w3: "[EN] Apfel", t6_w4: "[EN] Schrank",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wörter bauen
    t7_title: "[EN] Wörter bauen",
    t7_text: "[EN] Wir können aus zwei Wörtern ein neues Wort bauen. Das kennst du schon! Tisch + Decke = Tischdecke. Es ist ein neues Wort aus dem Feld 'Essen'.",
    t7_b1: "[EN] Zusammengesetzte Wörter.",
    t7_inst: "[EN] Baue das Wort zusammen!",
    t7_h1: "[EN] Ein Schirm für den Regen.",
    t7_h2: "[EN] Regen + schirm.",
    t7_f1: "[EN] Regen", t7_f2: "[EN] schirm",
    // Quiz: MANUAL
    t7_q: "[EN] Aus welchen Wörtern besteht 'Haustür'?",
    t7_qa: "[EN] Haus + Tür", t7_qb: "[EN] Hau + Stür", t7_qc: "[EN] Hau + s + tür", t7_qd: "[EN] Hau + stür",

    // T8: Körperteile (body parts)
    t8_title: "[EN] Der Körper hat viele Teile",
    t8_text: "[EN] Unser Körper hat viele verschiedene Teile: Kopf, Arm, Bein, Auge, Ohr, Nase, Mund, Hand, Fuß und vieles mehr!",
    t8_b1: "[EN] Körperteile sind eine Wortfamilie.",
    t8_b2: "[EN] Zum Beispiel: Kopf, Auge, Nase.",
    t8_inst: "[EN] Welches Wort gehört zur Familie 'Körperteile'?",
    t8_h1: "[EN] Was hat jeder Mensch oben am Körper?",
    t8_h2: "[EN] Der Kopf ist ein Körperteil.",
    t8_w1: "[EN] Kopf", t8_w2: "[EN] Tisch", t8_w3: "[EN] Schuh", t8_w4: "[EN] Fenster",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Kleidung und Mode
    t9_title: "[EN] Kleidung - Was wir tragen",
    t9_text: "[EN] Kleider, Schuhe, Hosen, Hemden - das alles ist Kleidung. Diese Wörter bilden eine große Wortfamilie!",
    t9_b1: "[EN] Kleidung = Dinge, die wir anziehen.",
    t9_inst: "[EN] Sortiere: Was ist Kleidung?",
    t9_h1: "[EN] Mit Kleidung wärmen wir uns warm.",
    t9_h2: "[EN] Mantel, Hemd und Hose sind Kleidung.",
    t9_bo: "[EN] Kleidung", t9_bg: "[EN] Nicht Kleidung",
    t9_i1: "[EN] Hemd", t9_i2: "[EN] Stuhl", t9_i3: "[EN] Schuh", t9_i4: "[EN] Baum",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Speisen - Was wir essen
    t10_title: "[EN] Speisen und Getränke",
    t10_text: "[EN] Apfel, Brot, Käse, Milch - das sind Speisen! Sie sind zum Essen. Und dann gibt es noch Getränke wie Wasser, Saft und Tee.",
    t10_b1: "[EN] Oberbegriff: Essen und Trinken.",
    t10_inst: "[EN] Welches Wort gehört nicht zum Wortfeld Speisen?",
    t10_h1: "[EN] Was würde man essen? Was nicht?",
    t10_h2: "[EN] Brot und Käse isst man. Ein Stuhl isst man nicht!",
    t10_w1: "[EN] Brot", t10_w2: "[EN] Käse", t10_w3: "[EN] Stuhl", t10_w4: "[EN] Apfel",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Farben (colors)
    t11_title: "[EN] Die Welt der Farben",
    t11_text: "[EN] Rot, blau, grün, gelb - das sind Farben! Jede Farbe hat eine eigene Familie von Dingen in dieser Farbe.",
    t11_b1: "[EN] Farben: rot, blau, grün, gelb, weiß, schwarz...",
    t11_inst: "[EN] Welche Farbe passt nicht zum Set?",
    t11_h1: "[EN] Sind das alles Farben?",
    t11_h2: "[EN] Rot, Blau und Grün sind Farben. Tisch ist keine Farbe.",
    t11_w1: "[EN] rot", t11_w2: "[EN] blau", t11_w3: "[EN] Stuhl", t11_w4: "[EN] grün",
    // Quiz: GENERATOR (farben_k2)

    // T12: Tiere im Wortfeld
    t12_title: "[EN] Wilde Tiere und Haustiere",
    t12_text: "[EN] Manche Tiere leben wild in der Natur (Löwe, Tiger), und manche sind Haustiere (Hund, Katze). Sie bilden zusammen ein Wortfeld!",
    t12_b1: "[EN] Haustiere: Hund, Katze, Vogel.",
    t12_b2: "[EN] Wilde Tiere: Löwe, Tiger, Bär.",
    t12_inst: "[EN] Verbinde Tier und Oberbegriff!",
    t12_h1: "[EN] Welche Tiere leben bei Menschen?",
    t12_h2: "[EN] Hunde sind Haustiere. Löwen sind wilde Tiere.",
    t12_l1: "[EN] Hund", t12_r1: "[EN] Haustier",
    t12_l2: "[EN] Löwe", t12_r2: "[EN] Wild",
    t12_l3: "[EN] Schmetterling", t12_r3: "[EN] Insekt",
    t12_l4: "[EN] Adler", t12_r4: "[EN] Vogel",
    // Quiz: GENERATOR (tiere_k1)

    // T13: Das Haus und Raum
    t13_title: "[EN] Im Haus - Räume und Möbel",
    t13_text: "[EN] Ein Haus hat viele Räume: Wohnzimmer, Schlafzimmer, Küche, Bad. In jedem Raum stehen Möbel wie Tisch, Stuhl, Bett.",
    t13_b1: "[EN] Räume: Wohnzimmer, Küche, Schlafzimmer.",
    t13_b2: "[EN] Möbel: Tisch, Stuhl, Bett, Schrank.",
    t13_inst: "[EN] Welches Wort gehört nicht zum Wortfeld Haus?",
    t13_h1: "[EN] Was ist im Haus? Was nicht?",
    t13_h2: "[EN] Ein Tisch ist Möbel. Ein Auto ist nicht im Haus (meistens).",
    t13_w1: "[EN] Tisch", t13_w2: "[EN] Stuhl", t13_w3: "[EN] Auto", t13_w4: "[EN] Bett",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Menschen und Beziehungen
    t14_title: "[EN] Familie und Menschen",
    t14_text: "[EN] Mutter, Vater, Schwester, Bruder - das ist Familie! Auch Oma, Opa und Cousine gehören dazu. Sie sind alle Verwandte.",
    t14_b1: "[EN] Familie: Mutter, Vater, Geschwister.",
    t14_b2: "[EN] Verwandte: Großeltern, Cousine, Onkel, Tante.",
    t14_inst: "[EN] Welches Wort gehört zur Familie?",
    t14_h1: "[EN] Wer ist deine Familie?",
    t14_h2: "[EN] Mutter, Vater, Bruder sind Familie. Der Lehrer ist nicht in deiner Familie.",
    t14_w1: "[EN] Mutter", t14_w2: "[EN] Lehrer", t14_w3: "[EN] Opa", t14_w4: "[EN] Freund",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Jahreszeiten und Wetter
    t15_title: "[EN] Jahreszeiten und Wetter",
    t15_text: "[EN] Frühling, Sommer, Herbst, Winter - das sind Jahreszeiten. Im Sommer ist es warm und sonnig. Im Winter ist es kalt und es schneit!",
    t15_b1: "[EN] Jahreszeiten: Frühling, Sommer, Herbst, Winter.",
    t15_b2: "[EN] Wetter: sonnig, regnerisch, windig, schneien.",
    t15_inst: "[EN] Welches Wort gehört zum Wortfeld Jahreszeiten?",
    t15_h1: "[EN] Wann ist es kalt? Wann warm?",
    t15_h2: "[EN] Winter ist die kalte Jahreszeit. Sommer ist die warme Jahreszeit.",
    t15_w1: "[EN] Winter", t15_w2: "[EN] Stuhl", t15_w3: "[EN] Sommer", t15_w4: "[EN] Auto",
    // Quiz: GENERATOR (zeit_k2)
  
  },
  hu: {

    explorer_title: "[HU] Wort-Entdecker (Felder & Familien)",

    // T1: Was ist ein Wortfeld?
    t1_title: "[HU] Was ist ein Wortfeld?",
    t1_text: "[HU] Ein Wortfeld ist wie eine große Familie von Wörtern, die alle zum gleichen Thema gehören. Zum Beispiel gehören 'Hund', 'Katze' und 'Maus' zum Wortfeld TIERE.",
    t1_b1: "[HU] Wörter mit gleicher Bedeutung.",
    t1_b2: "[HU] Themen: Tiere, Kleidung, Sport.",
    t1_inst: "[HU] Welches Wort gehört zum Wortfeld TIERE?",
    t1_h1: "[HU] Suche nach einem Lebewesen.",
    t1_h2: "[HU] Der 'Hund' gehört zu den Tieren.",
    t1_w1: "[HU] Hund", t1_w2: "[HU] Haus", t1_w3: "[HU] Auto", t1_w4: "[HU] Apfel",
    // Quiz: GENERATOR (tiere_k1)

    // T2: Oberbegriffe (Obst oder Gemüse?)
    t2_title: "[HU] Obst oder Gemüse?",
    t2_text: "[HU] Wir können Dinge in Gruppen ordnen. Apfel und Birne sind 'Obst'. Karotte und Tomate sind 'Gemüse'. Das nennen wir Oberbegriffe.",
    t2_b1: "[HU] Oberbegriff = Name der Gruppe.",
    t2_inst: "[HU] Sortiere: Ist es Obst oder Gemüse?",
    t2_h1: "[HU] Süße Früchte sind meistens Obst.",
    t2_h2: "[HU] Apfel -> Obst. Karotte -> Gemüse.",
    t2_bo: "[HU] Obst 🍎", t2_bg: "[HU] Gemüse 🥕",
    t2_i1: "[HU] Apfel", t2_i2: "[HU] Karotte", t2_i3: "[HU] Birne", t2_i4: "[HU] Erbse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Die Wortfamilie
    t3_title: "[HU] Die Wortfamilie",
    t3_text: "[HU] Wörter in einer Wortfamilie haben alle den gleichen Wortstamm. Sie sehen sich ähnlich und gehören zusammen, wie 'fahren', 'Fahrer' und 'Fahrrad'.",
    t3_b1: "[HU] Gleicher Wortstamm.",
    t3_b2: "[HU] fahren ➔ Fahr-er, Fahr-zeug.",
    t3_inst: "[HU] Welches Wort gehört zur Familie 'fahren'?",
    t3_h1: "[HU] Suche ein Wort, in dem 'fahr' steckt.",
    t3_h2: "[HU] Das 'Fahrrad' gehört dazu.",
    t3_w1: "[HU] laufen", t3_w2: "[HU] Fahrrad", t3_w3: "[HU] spielen", t3_w4: "[HU] singen",
    // Quiz: MANUAL
    t3_q: "[HU] Was haben Wörter in einer Wortfamilie gemeinsam?",
    t3_qa: "[HU] Den Wortstamm", t3_qb: "[HU] Die gleiche Farbe", t3_qc: "[HU] Die gleiche Länge", t3_qd: "[HU] Nichts",

    // T4: Berufe finden
    t4_title: "[HU] Berufe aus Verben",
    t4_text: "[HU] Wusstest du, dass viele Berufe von Tunwörtern kommen? Jemand, der backt, ist der Bäcker. Jemand, der malt, ist der Maler.",
    t4_b1: "[HU] backen ➔ Bäcker.",
    t4_b2: "[HU] malen ➔ Maler.",
    t4_inst: "[HU] Verbinde das Tunwort mit dem Beruf!",
    t4_h1: "[HU] Was wird aus 'lehren'?",
    t4_h2: "[HU] lehren -> Lehrer, fahren -> Fahrer.",
    t4_l1: "[HU] backen", t4_r1: "[HU] Bäcker",
    t4_l2: "[HU] fahren", t4_r2: "[HU] Fahrer",
    t4_l3: "[HU] lehren", t4_r3: "[HU] Lehrer",
    t4_l4: "[HU] malen",  t4_r4: "[HU] Maler",
    // Quiz: GENERATOR (berufe_k2)

    // T5: Der Wortstamm-Check
    t5_title: "[HU] Der Wortstamm-Check",
    t5_text: "[HU] Finde den Wortstamm! In 'spielen', 'Spielfeld' und 'Mitspieler' steckt überall das Wort 'spiel'. Das ist der Stamm der Familie.",
    t5_b1: "[HU] Wortstamm finden.",
    t5_inst: "[HU] Finde den Wortstamm in 'Spielfeld'!",
    t5_h1: "[HU] Welcher Teil des Wortes ist bei 'spielen' auch dabei?",
    t5_h2: "[HU] Der Stamm ist 'spiel'.",
    t5_sent: "[HU] Der Wortstamm von Spielfeld ist ___.",
    t5_c1: "[HU] spiel", t5_c2: "[HU] feld", t5_c3: "[HU] en", t5_c4: "[HU] spie",
    // Quiz: MANUAL
    t5_q: "[HU] Was ist der Wortstamm von 'laufen, Läufer, verlaufen'?",
    t5_qa: "[HU] lauf", t5_qb: "[HU] fen", t5_qc: "[HU] ver", t5_qd: "[HU] er",

    // T6: Was passt nicht? (Oberbegriffe)
    t6_title: "[HU] Was passt nicht?",
    t6_text: "[HU] Ein Wort hat sich verlaufen! Es gehört nicht in das Wortfeld. Kannst du den Quatschmacher finden?",
    t6_b1: "[HU] Drei Wörter gehören zusammen.",
    t6_b2: "[HU] Eines passt nicht dazu.",
    t6_inst: "[HU] Welches Wort gehört NICHT zum Wortfeld MÖBEL?",
    t6_h1: "[HU] Tisch, Stuhl und Schrank sind Möbel.",
    t6_h2: "[HU] Ein 'Apfel' ist kein Möbelstück.",
    t6_w1: "[HU] Tisch", t6_w2: "[HU] Stuhl", t6_w3: "[HU] Apfel", t6_w4: "[HU] Schrank",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wörter bauen
    t7_title: "[HU] Wörter bauen",
    t7_text: "[HU] Wir können aus zwei Wörtern ein neues Wort bauen. Das kennst du schon! Tisch + Decke = Tischdecke. Es ist ein neues Wort aus dem Feld 'Essen'.",
    t7_b1: "[HU] Zusammengesetzte Wörter.",
    t7_inst: "[HU] Baue das Wort zusammen!",
    t7_h1: "[HU] Ein Schirm für den Regen.",
    t7_h2: "[HU] Regen + schirm.",
    t7_f1: "[HU] Regen", t7_f2: "[HU] schirm",
    // Quiz: MANUAL
    t7_q: "[HU] Aus welchen Wörtern besteht 'Haustür'?",
    t7_qa: "[HU] Haus + Tür", t7_qb: "[HU] Hau + Stür", t7_qc: "[HU] Hau + s + tür", t7_qd: "[HU] Hau + stür",

    // T8: Körperteile (body parts)
    t8_title: "[HU] Der Körper hat viele Teile",
    t8_text: "[HU] Unser Körper hat viele verschiedene Teile: Kopf, Arm, Bein, Auge, Ohr, Nase, Mund, Hand, Fuß und vieles mehr!",
    t8_b1: "[HU] Körperteile sind eine Wortfamilie.",
    t8_b2: "[HU] Zum Beispiel: Kopf, Auge, Nase.",
    t8_inst: "[HU] Welches Wort gehört zur Familie 'Körperteile'?",
    t8_h1: "[HU] Was hat jeder Mensch oben am Körper?",
    t8_h2: "[HU] Der Kopf ist ein Körperteil.",
    t8_w1: "[HU] Kopf", t8_w2: "[HU] Tisch", t8_w3: "[HU] Schuh", t8_w4: "[HU] Fenster",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Kleidung und Mode
    t9_title: "[HU] Kleidung - Was wir tragen",
    t9_text: "[HU] Kleider, Schuhe, Hosen, Hemden - das alles ist Kleidung. Diese Wörter bilden eine große Wortfamilie!",
    t9_b1: "[HU] Kleidung = Dinge, die wir anziehen.",
    t9_inst: "[HU] Sortiere: Was ist Kleidung?",
    t9_h1: "[HU] Mit Kleidung wärmen wir uns warm.",
    t9_h2: "[HU] Mantel, Hemd und Hose sind Kleidung.",
    t9_bo: "[HU] Kleidung", t9_bg: "[HU] Nicht Kleidung",
    t9_i1: "[HU] Hemd", t9_i2: "[HU] Stuhl", t9_i3: "[HU] Schuh", t9_i4: "[HU] Baum",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Speisen - Was wir essen
    t10_title: "[HU] Speisen und Getränke",
    t10_text: "[HU] Apfel, Brot, Käse, Milch - das sind Speisen! Sie sind zum Essen. Und dann gibt es noch Getränke wie Wasser, Saft und Tee.",
    t10_b1: "[HU] Oberbegriff: Essen und Trinken.",
    t10_inst: "[HU] Welches Wort gehört nicht zum Wortfeld Speisen?",
    t10_h1: "[HU] Was würde man essen? Was nicht?",
    t10_h2: "[HU] Brot und Käse isst man. Ein Stuhl isst man nicht!",
    t10_w1: "[HU] Brot", t10_w2: "[HU] Käse", t10_w3: "[HU] Stuhl", t10_w4: "[HU] Apfel",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Farben (colors)
    t11_title: "[HU] Die Welt der Farben",
    t11_text: "[HU] Rot, blau, grün, gelb - das sind Farben! Jede Farbe hat eine eigene Familie von Dingen in dieser Farbe.",
    t11_b1: "[HU] Farben: rot, blau, grün, gelb, weiß, schwarz...",
    t11_inst: "[HU] Welche Farbe passt nicht zum Set?",
    t11_h1: "[HU] Sind das alles Farben?",
    t11_h2: "[HU] Rot, Blau und Grün sind Farben. Tisch ist keine Farbe.",
    t11_w1: "[HU] rot", t11_w2: "[HU] blau", t11_w3: "[HU] Stuhl", t11_w4: "[HU] grün",
    // Quiz: GENERATOR (farben_k2)

    // T12: Tiere im Wortfeld
    t12_title: "[HU] Wilde Tiere und Haustiere",
    t12_text: "[HU] Manche Tiere leben wild in der Natur (Löwe, Tiger), und manche sind Haustiere (Hund, Katze). Sie bilden zusammen ein Wortfeld!",
    t12_b1: "[HU] Haustiere: Hund, Katze, Vogel.",
    t12_b2: "[HU] Wilde Tiere: Löwe, Tiger, Bär.",
    t12_inst: "[HU] Verbinde Tier und Oberbegriff!",
    t12_h1: "[HU] Welche Tiere leben bei Menschen?",
    t12_h2: "[HU] Hunde sind Haustiere. Löwen sind wilde Tiere.",
    t12_l1: "[HU] Hund", t12_r1: "[HU] Haustier",
    t12_l2: "[HU] Löwe", t12_r2: "[HU] Wild",
    t12_l3: "[HU] Schmetterling", t12_r3: "[HU] Insekt",
    t12_l4: "[HU] Adler", t12_r4: "[HU] Vogel",
    // Quiz: GENERATOR (tiere_k1)

    // T13: Das Haus und Raum
    t13_title: "[HU] Im Haus - Räume und Möbel",
    t13_text: "[HU] Ein Haus hat viele Räume: Wohnzimmer, Schlafzimmer, Küche, Bad. In jedem Raum stehen Möbel wie Tisch, Stuhl, Bett.",
    t13_b1: "[HU] Räume: Wohnzimmer, Küche, Schlafzimmer.",
    t13_b2: "[HU] Möbel: Tisch, Stuhl, Bett, Schrank.",
    t13_inst: "[HU] Welches Wort gehört nicht zum Wortfeld Haus?",
    t13_h1: "[HU] Was ist im Haus? Was nicht?",
    t13_h2: "[HU] Ein Tisch ist Möbel. Ein Auto ist nicht im Haus (meistens).",
    t13_w1: "[HU] Tisch", t13_w2: "[HU] Stuhl", t13_w3: "[HU] Auto", t13_w4: "[HU] Bett",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Menschen und Beziehungen
    t14_title: "[HU] Familie und Menschen",
    t14_text: "[HU] Mutter, Vater, Schwester, Bruder - das ist Familie! Auch Oma, Opa und Cousine gehören dazu. Sie sind alle Verwandte.",
    t14_b1: "[HU] Familie: Mutter, Vater, Geschwister.",
    t14_b2: "[HU] Verwandte: Großeltern, Cousine, Onkel, Tante.",
    t14_inst: "[HU] Welches Wort gehört zur Familie?",
    t14_h1: "[HU] Wer ist deine Familie?",
    t14_h2: "[HU] Mutter, Vater, Bruder sind Familie. Der Lehrer ist nicht in deiner Familie.",
    t14_w1: "[HU] Mutter", t14_w2: "[HU] Lehrer", t14_w3: "[HU] Opa", t14_w4: "[HU] Freund",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Jahreszeiten und Wetter
    t15_title: "[HU] Jahreszeiten und Wetter",
    t15_text: "[HU] Frühling, Sommer, Herbst, Winter - das sind Jahreszeiten. Im Sommer ist es warm und sonnig. Im Winter ist es kalt und es schneit!",
    t15_b1: "[HU] Jahreszeiten: Frühling, Sommer, Herbst, Winter.",
    t15_b2: "[HU] Wetter: sonnig, regnerisch, windig, schneien.",
    t15_inst: "[HU] Welches Wort gehört zum Wortfeld Jahreszeiten?",
    t15_h1: "[HU] Wann ist es kalt? Wann warm?",
    t15_h2: "[HU] Winter ist die kalte Jahreszeit. Sommer ist die warme Jahreszeit.",
    t15_w1: "[HU] Winter", t15_w2: "[HU] Stuhl", t15_w3: "[HU] Sommer", t15_w4: "[HU] Auto",
    // Quiz: GENERATOR (zeit_k2)
  
  },
  ro: {

    explorer_title: "[RO] Wort-Entdecker (Felder & Familien)",

    // T1: Was ist ein Wortfeld?
    t1_title: "[RO] Was ist ein Wortfeld?",
    t1_text: "[RO] Ein Wortfeld ist wie eine große Familie von Wörtern, die alle zum gleichen Thema gehören. Zum Beispiel gehören 'Hund', 'Katze' und 'Maus' zum Wortfeld TIERE.",
    t1_b1: "[RO] Wörter mit gleicher Bedeutung.",
    t1_b2: "[RO] Themen: Tiere, Kleidung, Sport.",
    t1_inst: "[RO] Welches Wort gehört zum Wortfeld TIERE?",
    t1_h1: "[RO] Suche nach einem Lebewesen.",
    t1_h2: "[RO] Der 'Hund' gehört zu den Tieren.",
    t1_w1: "[RO] Hund", t1_w2: "[RO] Haus", t1_w3: "[RO] Auto", t1_w4: "[RO] Apfel",
    // Quiz: GENERATOR (tiere_k1)

    // T2: Oberbegriffe (Obst oder Gemüse?)
    t2_title: "[RO] Obst oder Gemüse?",
    t2_text: "[RO] Wir können Dinge in Gruppen ordnen. Apfel und Birne sind 'Obst'. Karotte und Tomate sind 'Gemüse'. Das nennen wir Oberbegriffe.",
    t2_b1: "[RO] Oberbegriff = Name der Gruppe.",
    t2_inst: "[RO] Sortiere: Ist es Obst oder Gemüse?",
    t2_h1: "[RO] Süße Früchte sind meistens Obst.",
    t2_h2: "[RO] Apfel -> Obst. Karotte -> Gemüse.",
    t2_bo: "[RO] Obst 🍎", t2_bg: "[RO] Gemüse 🥕",
    t2_i1: "[RO] Apfel", t2_i2: "[RO] Karotte", t2_i3: "[RO] Birne", t2_i4: "[RO] Erbse",
    // Quiz: GENERATOR (nomen_k2)

    // T3: Die Wortfamilie
    t3_title: "[RO] Die Wortfamilie",
    t3_text: "[RO] Wörter in einer Wortfamilie haben alle den gleichen Wortstamm. Sie sehen sich ähnlich und gehören zusammen, wie 'fahren', 'Fahrer' und 'Fahrrad'.",
    t3_b1: "[RO] Gleicher Wortstamm.",
    t3_b2: "[RO] fahren ➔ Fahr-er, Fahr-zeug.",
    t3_inst: "[RO] Welches Wort gehört zur Familie 'fahren'?",
    t3_h1: "[RO] Suche ein Wort, in dem 'fahr' steckt.",
    t3_h2: "[RO] Das 'Fahrrad' gehört dazu.",
    t3_w1: "[RO] laufen", t3_w2: "[RO] Fahrrad", t3_w3: "[RO] spielen", t3_w4: "[RO] singen",
    // Quiz: MANUAL
    t3_q: "[RO] Was haben Wörter in einer Wortfamilie gemeinsam?",
    t3_qa: "[RO] Den Wortstamm", t3_qb: "[RO] Die gleiche Farbe", t3_qc: "[RO] Die gleiche Länge", t3_qd: "[RO] Nichts",

    // T4: Berufe finden
    t4_title: "[RO] Berufe aus Verben",
    t4_text: "[RO] Wusstest du, dass viele Berufe von Tunwörtern kommen? Jemand, der backt, ist der Bäcker. Jemand, der malt, ist der Maler.",
    t4_b1: "[RO] backen ➔ Bäcker.",
    t4_b2: "[RO] malen ➔ Maler.",
    t4_inst: "[RO] Verbinde das Tunwort mit dem Beruf!",
    t4_h1: "[RO] Was wird aus 'lehren'?",
    t4_h2: "[RO] lehren -> Lehrer, fahren -> Fahrer.",
    t4_l1: "[RO] backen", t4_r1: "[RO] Bäcker",
    t4_l2: "[RO] fahren", t4_r2: "[RO] Fahrer",
    t4_l3: "[RO] lehren", t4_r3: "[RO] Lehrer",
    t4_l4: "[RO] malen",  t4_r4: "[RO] Maler",
    // Quiz: GENERATOR (berufe_k2)

    // T5: Der Wortstamm-Check
    t5_title: "[RO] Der Wortstamm-Check",
    t5_text: "[RO] Finde den Wortstamm! In 'spielen', 'Spielfeld' und 'Mitspieler' steckt überall das Wort 'spiel'. Das ist der Stamm der Familie.",
    t5_b1: "[RO] Wortstamm finden.",
    t5_inst: "[RO] Finde den Wortstamm in 'Spielfeld'!",
    t5_h1: "[RO] Welcher Teil des Wortes ist bei 'spielen' auch dabei?",
    t5_h2: "[RO] Der Stamm ist 'spiel'.",
    t5_sent: "[RO] Der Wortstamm von Spielfeld ist ___.",
    t5_c1: "[RO] spiel", t5_c2: "[RO] feld", t5_c3: "[RO] en", t5_c4: "[RO] spie",
    // Quiz: MANUAL
    t5_q: "[RO] Was ist der Wortstamm von 'laufen, Läufer, verlaufen'?",
    t5_qa: "[RO] lauf", t5_qb: "[RO] fen", t5_qc: "[RO] ver", t5_qd: "[RO] er",

    // T6: Was passt nicht? (Oberbegriffe)
    t6_title: "[RO] Was passt nicht?",
    t6_text: "[RO] Ein Wort hat sich verlaufen! Es gehört nicht in das Wortfeld. Kannst du den Quatschmacher finden?",
    t6_b1: "[RO] Drei Wörter gehören zusammen.",
    t6_b2: "[RO] Eines passt nicht dazu.",
    t6_inst: "[RO] Welches Wort gehört NICHT zum Wortfeld MÖBEL?",
    t6_h1: "[RO] Tisch, Stuhl und Schrank sind Möbel.",
    t6_h2: "[RO] Ein 'Apfel' ist kein Möbelstück.",
    t6_w1: "[RO] Tisch", t6_w2: "[RO] Stuhl", t6_w3: "[RO] Apfel", t6_w4: "[RO] Schrank",
    // Quiz: GENERATOR (nomen_k2)

    // T7: Wörter bauen
    t7_title: "[RO] Wörter bauen",
    t7_text: "[RO] Wir können aus zwei Wörtern ein neues Wort bauen. Das kennst du schon! Tisch + Decke = Tischdecke. Es ist ein neues Wort aus dem Feld 'Essen'.",
    t7_b1: "[RO] Zusammengesetzte Wörter.",
    t7_inst: "[RO] Baue das Wort zusammen!",
    t7_h1: "[RO] Ein Schirm für den Regen.",
    t7_h2: "[RO] Regen + schirm.",
    t7_f1: "[RO] Regen", t7_f2: "[RO] schirm",
    // Quiz: MANUAL
    t7_q: "[RO] Aus welchen Wörtern besteht 'Haustür'?",
    t7_qa: "[RO] Haus + Tür", t7_qb: "[RO] Hau + Stür", t7_qc: "[RO] Hau + s + tür", t7_qd: "[RO] Hau + stür",

    // T8: Körperteile (body parts)
    t8_title: "[RO] Der Körper hat viele Teile",
    t8_text: "[RO] Unser Körper hat viele verschiedene Teile: Kopf, Arm, Bein, Auge, Ohr, Nase, Mund, Hand, Fuß und vieles mehr!",
    t8_b1: "[RO] Körperteile sind eine Wortfamilie.",
    t8_b2: "[RO] Zum Beispiel: Kopf, Auge, Nase.",
    t8_inst: "[RO] Welches Wort gehört zur Familie 'Körperteile'?",
    t8_h1: "[RO] Was hat jeder Mensch oben am Körper?",
    t8_h2: "[RO] Der Kopf ist ein Körperteil.",
    t8_w1: "[RO] Kopf", t8_w2: "[RO] Tisch", t8_w3: "[RO] Schuh", t8_w4: "[RO] Fenster",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Kleidung und Mode
    t9_title: "[RO] Kleidung - Was wir tragen",
    t9_text: "[RO] Kleider, Schuhe, Hosen, Hemden - das alles ist Kleidung. Diese Wörter bilden eine große Wortfamilie!",
    t9_b1: "[RO] Kleidung = Dinge, die wir anziehen.",
    t9_inst: "[RO] Sortiere: Was ist Kleidung?",
    t9_h1: "[RO] Mit Kleidung wärmen wir uns warm.",
    t9_h2: "[RO] Mantel, Hemd und Hose sind Kleidung.",
    t9_bo: "[RO] Kleidung", t9_bg: "[RO] Nicht Kleidung",
    t9_i1: "[RO] Hemd", t9_i2: "[RO] Stuhl", t9_i3: "[RO] Schuh", t9_i4: "[RO] Baum",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Speisen - Was wir essen
    t10_title: "[RO] Speisen und Getränke",
    t10_text: "[RO] Apfel, Brot, Käse, Milch - das sind Speisen! Sie sind zum Essen. Und dann gibt es noch Getränke wie Wasser, Saft und Tee.",
    t10_b1: "[RO] Oberbegriff: Essen und Trinken.",
    t10_inst: "[RO] Welches Wort gehört nicht zum Wortfeld Speisen?",
    t10_h1: "[RO] Was würde man essen? Was nicht?",
    t10_h2: "[RO] Brot und Käse isst man. Ein Stuhl isst man nicht!",
    t10_w1: "[RO] Brot", t10_w2: "[RO] Käse", t10_w3: "[RO] Stuhl", t10_w4: "[RO] Apfel",
    // Quiz: GENERATOR (nomen_k2)

    // T11: Farben (colors)
    t11_title: "[RO] Die Welt der Farben",
    t11_text: "[RO] Rot, blau, grün, gelb - das sind Farben! Jede Farbe hat eine eigene Familie von Dingen in dieser Farbe.",
    t11_b1: "[RO] Farben: rot, blau, grün, gelb, weiß, schwarz...",
    t11_inst: "[RO] Welche Farbe passt nicht zum Set?",
    t11_h1: "[RO] Sind das alles Farben?",
    t11_h2: "[RO] Rot, Blau und Grün sind Farben. Tisch ist keine Farbe.",
    t11_w1: "[RO] rot", t11_w2: "[RO] blau", t11_w3: "[RO] Stuhl", t11_w4: "[RO] grün",
    // Quiz: GENERATOR (farben_k2)

    // T12: Tiere im Wortfeld
    t12_title: "[RO] Wilde Tiere und Haustiere",
    t12_text: "[RO] Manche Tiere leben wild in der Natur (Löwe, Tiger), und manche sind Haustiere (Hund, Katze). Sie bilden zusammen ein Wortfeld!",
    t12_b1: "[RO] Haustiere: Hund, Katze, Vogel.",
    t12_b2: "[RO] Wilde Tiere: Löwe, Tiger, Bär.",
    t12_inst: "[RO] Verbinde Tier und Oberbegriff!",
    t12_h1: "[RO] Welche Tiere leben bei Menschen?",
    t12_h2: "[RO] Hunde sind Haustiere. Löwen sind wilde Tiere.",
    t12_l1: "[RO] Hund", t12_r1: "[RO] Haustier",
    t12_l2: "[RO] Löwe", t12_r2: "[RO] Wild",
    t12_l3: "[RO] Schmetterling", t12_r3: "[RO] Insekt",
    t12_l4: "[RO] Adler", t12_r4: "[RO] Vogel",
    // Quiz: GENERATOR (tiere_k1)

    // T13: Das Haus und Raum
    t13_title: "[RO] Im Haus - Räume und Möbel",
    t13_text: "[RO] Ein Haus hat viele Räume: Wohnzimmer, Schlafzimmer, Küche, Bad. In jedem Raum stehen Möbel wie Tisch, Stuhl, Bett.",
    t13_b1: "[RO] Räume: Wohnzimmer, Küche, Schlafzimmer.",
    t13_b2: "[RO] Möbel: Tisch, Stuhl, Bett, Schrank.",
    t13_inst: "[RO] Welches Wort gehört nicht zum Wortfeld Haus?",
    t13_h1: "[RO] Was ist im Haus? Was nicht?",
    t13_h2: "[RO] Ein Tisch ist Möbel. Ein Auto ist nicht im Haus (meistens).",
    t13_w1: "[RO] Tisch", t13_w2: "[RO] Stuhl", t13_w3: "[RO] Auto", t13_w4: "[RO] Bett",
    // Quiz: GENERATOR (nomen_k2)

    // T14: Menschen und Beziehungen
    t14_title: "[RO] Familie und Menschen",
    t14_text: "[RO] Mutter, Vater, Schwester, Bruder - das ist Familie! Auch Oma, Opa und Cousine gehören dazu. Sie sind alle Verwandte.",
    t14_b1: "[RO] Familie: Mutter, Vater, Geschwister.",
    t14_b2: "[RO] Verwandte: Großeltern, Cousine, Onkel, Tante.",
    t14_inst: "[RO] Welches Wort gehört zur Familie?",
    t14_h1: "[RO] Wer ist deine Familie?",
    t14_h2: "[RO] Mutter, Vater, Bruder sind Familie. Der Lehrer ist nicht in deiner Familie.",
    t14_w1: "[RO] Mutter", t14_w2: "[RO] Lehrer", t14_w3: "[RO] Opa", t14_w4: "[RO] Freund",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Jahreszeiten und Wetter
    t15_title: "[RO] Jahreszeiten und Wetter",
    t15_text: "[RO] Frühling, Sommer, Herbst, Winter - das sind Jahreszeiten. Im Sommer ist es warm und sonnig. Im Winter ist es kalt und es schneit!",
    t15_b1: "[RO] Jahreszeiten: Frühling, Sommer, Herbst, Winter.",
    t15_b2: "[RO] Wetter: sonnig, regnerisch, windig, schneien.",
    t15_inst: "[RO] Welches Wort gehört zum Wortfeld Jahreszeiten?",
    t15_h1: "[RO] Wann ist es kalt? Wann warm?",
    t15_h2: "[RO] Winter ist die kalte Jahreszeit. Sommer ist die warme Jahreszeit.",
    t15_w1: "[RO] Winter", t15_w2: "[RO] Stuhl", t15_w3: "[RO] Sommer", t15_w4: "[RO] Auto",
    // Quiz: GENERATOR (zeit_k2)
  
  }
};

export const WORTFELD_POOL: PoolTopicDef[] = [
  // ── 1. Wortfeld (highlight-text) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "Hund" }, { emoji: "🐱", label: "Katze" }] },
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      correctIndices: [0], // Hund
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "tiere_k1" },
  },

  // ── 2. Obst vagy Gemüse? (drag-to-bucket) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "two-groups", left: { items: ["🍎"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["🥕"], bg: "#D1FAE5", border: "#10B981" } },
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "o", label: "t2_bo" }, { id: "g", label: "t2_bg" }],
      items: [
        { text: "t2_i1", bucketId: "o" }, // Apfel
        { text: "t2_i2", bucketId: "g" }, // Karotte
        { text: "t2_i3", bucketId: "o" }, // Birne
        { text: "t2_i4", bucketId: "g" }, // Erbse
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 3. Wortfamilie (highlight-text) ──────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "Fahrrad", highlightChars: ["F", "a", "h", "r"], color: "#3B82F6" },
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctIndices: [1], // Fahrrad
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" },
  },

  // ── 4. Berufe (match-pairs) ─────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "👨‍🍳", label: "Bäcker" }, { emoji: "👨‍🏫", label: "Lehrer" }] },
    bulletKeys: ["t4_b1", "t4_b2"],
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
    quiz: { generate: "berufe_k2" },
  },

  // ── 5. Wortstamm (gap-fill) ──────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [ { text: "spiel-en", color: "#8B5CF6", bg: "#F3E8FF" }, { text: "spiel-en", color: "#8B5CF6", bg: "#F3E8FF" } ] },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_sent",
      choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"],
      correctIndex: 0,
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" },
  },

  // ── 6. Was passt nicht? (highlight-text) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🪑", label: "Möbel" }, { emoji: "🍎", label: "???" }] },
    bulletKeys: ["t6_b1", "t6_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t6_w1", "t6_w2", "t6_w3", "t6_w4"],
      correctIndices: [2], // Apfel
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 7. Wörter bauen (word-order) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "compound-word", word1: "Regen", word2: "schirm", result: "Regenschirm", color: "#10B981" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "word-order",
      words: ["t7_f2", "t7_f1"], // schirm, Regen
      correctOrder: [1, 0], // Regen -> schirm
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { question: "t7_q", choices: ["t7_qa","t7_qb","t7_qc","t7_qd"], answer: "t7_qa" },
  },

  // ── 8. Körperteile (highlight-text) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "icon-grid", items: [{ emoji: "👁️", label: "Auge" }, { emoji: "👂", label: "Ohr" }] },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [0], // Kopf
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 9. Kleidung (drag-to-bucket) ────────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["👕"], bg: "#E0F2FE", border: "#0284C7" }, right: { items: ["🪑"], bg: "#FEE2E2", border: "#DC2626" } },
    bulletKeys: ["t9_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "kl", label: "t9_bo" }, { id: "nkl", label: "t9_bg" }],
      items: [
        { text: "t9_i1", bucketId: "kl" }, // Hemd
        { text: "t9_i2", bucketId: "nkl" }, // Stuhl
        { text: "t9_i3", bucketId: "kl" }, // Schuh
        { text: "t9_i4", bucketId: "nkl" }, // Baum
      ],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 10. Speisen (highlight-text) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [ { text: "🍞", emoji: "Brot", color: "#92400E", bg: "#FEF3C7" }, { text: "🧀", emoji: "Käse", color: "#D97706", bg: "#FFEDD5" } ] },
    bulletKeys: ["t10_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [2], // Stuhl - the one that DOESN'T belong
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 11. Farben (match-pairs) ────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [ { text: "rot", emoji: "🔴", color: "#DC2626", bg: "#FEE2E2" }, { text: "blau", emoji: "🔵", color: "#2563EB", bg: "#DBEAFE" }, { text: "grün", emoji: "🟢", color: "#16A34A", bg: "#DCFCE7" } ] },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [2], // Stuhl
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "farben_k2" },
  },

  // ── 12. Tiere (match-pairs) ────────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐕", label: "Haustier" }, { emoji: "🦁", label: "Wild" }] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t12_l1", right: "t12_r1" },
        { left: "t12_l2", right: "t12_r2" },
        { left: "t12_l3", right: "t12_r3" },
        { left: "t12_l4", right: "t12_r4" },
      ],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { generate: "tiere_k1" },
  },

  // ── 13. Haus und Räume (highlight-text) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "icon-grid", items: [{ emoji: "🛋️", label: "Möbel" }, { emoji: "🏠", label: "Haus" }] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [2], // Auto
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 14. Familie und Menschen (gap-fill) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "text-bubbles", items: [ { text: "👨‍👩‍👧‍👦", emoji: "Familie", color: "#EC4899", bg: "#FCE7F3" } ] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4"],
      correctIndices: [1], // Lehrer - doesn't belong
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 15. Jahreszeiten (drag-to-bucket) ────────────────────── easy ──
  {
    difficulty: "easy",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "text-bubbles", items: [ { text: "☀️", emoji: "Sommer", color: "#EAB308", bg: "#FEFCE8" }, { text: "❄️", emoji: "Winter", color: "#0EA5E9", bg: "#E0F2FE" } ] },
    bulletKeys: ["t15_b1", "t15_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [1], // Stuhl
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "zeit_k2" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Große Prüfung K2 (Final Review)
// Thema: Wiederholung aller K2-Themen (Nomen, Verb, Adjektiv, Rechtschreibung)
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Große Prüfung K2",

    // T1: Nomen-Check
    t1_title: "Nomen-Check",
    t1_text: "Erinnerst du dich? Nomen sind Namen für Dinge, Tiere und Menschen. Wir schreiben sie immer GROSS!",
    t1_b1: "Nomen = Großschreibung.",
    t1_inst: "Finde das Nomen im Satz!",
    t1_h1: "Suche das Wort mit dem großen Anfangsbuchstaben.",
    t1_h2: "Das Wort 'Apfel' ist ein Nomen.",
    t1_w1: "Der", t1_w2: "rote", t1_w3: "Apfel", t1_w4: "schmeckt", t1_w5: ".",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Artikel-Meister
    t2_title: "Artikel-Meister",
    t2_text: "Der, die oder das? Jeder Begleiter hat seinen festen Platz bei einem Nomen.",
    t2_b1: "der 🔵, die 🔴, das 🟢",
    t2_inst: "Sortiere die Nomen in die richtigen Artikel-Körbe!",
    t2_h1: "Überlege: Heißt es der, die oder das?",
    t2_bd: "der 🔵", t2_bdi: "die 🔴", t2_bda: "das 🟢",
    t2_i1: "Hund", t2_i2: "Katze", t2_i3: "Haus", t2_i4: "Auto",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Verben-Profi
    t3_title: "Verben-Profi",
    t3_text: "Tunwörter sagen uns, was passiert. Kannst du sie richtig beugen?",
    t3_b1: "ich spiele, du spielst, er spielt.",
    t3_inst: "Welches Verb passt in die Lücke?",
    t3_h1: "Das Wort davor ist 'Du'.",
    t3_h2: "Bei 'Du' endet das Verb auf '-st'.",
    t3_sent: "Du ___ heute ein Lied.",
    t3_c1: "singst", t3_c2: "singen", t3_c3: "singt", t3_c4: "singe",
    // Quiz: GENERATOR (verben_k2)

    // T4: Adjektiv-Expert
    t4_title: "Adjektiv-Expert",
    t4_text: "Wie ist die Welt? Adjektive beschreiben Dinge genauer. Weißt du auch die Gegenteile?",
    t4_b1: "Adjektive = Wiewörter.",
    t4_inst: "Verbinde die Gegensätze!",
    t4_h1: "Was ist das Gegenteil von 'groß'?",
    t4_l1: "groß", t4_r1: "klein",
    t4_l2: "schnell", t4_r2: "langsam",
    t4_l3: "hell", t4_r3: "dunkel",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T5: Rechtschreib-König
    t5_title: "Rechtschreib-König",
    t5_text: "ck, tz oder ie? Ein König achtet auf jedes Detail beim Schreiben!",
    t5_b1: "Nach kurzem Vokal folgt oft ck oder tz.",
    t5_inst: "Welches Wort ist richtig geschrieben?",
    t5_h1: "Das Wort ist 'Katze'. Es hat ein kurzes 'a'.",
    t5_w1: "Katze", t5_w2: "Kaze", t5_w3: "Kattze", t5_w4: "Katse",
    // Quiz: GENERATOR (satzzeichen_k1 - vegyes review)

    // T6: Plural-Check
    t6_title: "Plural-Check",
    t6_text: "Eins oder viele? Die Mehrzahl verändert oft das ganze Wort.",
    t6_b1: "Einzahl ➔ Mehrzahl.",
    t6_inst: "Verbinde die Einzahl mit der Mehrzahl!",
    t6_l1: "Baum", t6_r1: "Bäume",
    t6_l2: "Hand", t6_r2: "Hände",
    t6_l3: "Buch", t6_r3: "Bücher",
    // Quiz: GENERATOR (plural)

    // T7: K2 Champion
    t7_title: "K2 Champion",
    t7_text: "Du hast alle Inseln gemeistert! Hier ist deine letzte Aufgabe. Baue den Satz perfekt zusammen.",
    t7_b1: "Satzanfang groß, Ende mit Punkt.",
    t7_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t7_f1: "Ich", t7_f2: "bin", t7_f3: "ein", t7_f4: "Champion!",
    // Quiz: GENERATOR (zeit_k2 - napszakok review)

    // T8: ie, ei, äu, eu - Der große Mix
    t8_title: "Der große Zwielaut-Mix",
    t8_text: "ie, ei, äu, eu - das sind schwierige Zwielaute. Hörst du: ie und ei klingen SEHR ähnlich! Ebenso äu und eu. Aber geschrieben sind sie unterschiedlich!",
    t8_b1: "ie vs ei vs äu vs eu.",
    t8_b2: "Aussprache kann täuschen!",
    t8_inst: "Welches Wort hat 'ie'?",
    t8_h1: "ie = langes I. ei = wie 'ai'.",
    t8_h2: "Lied hat 'ie'. Wein hat 'ei'.",
    t8_w1: "Lied", t8_w2: "Wein", t8_w3: "Haus", t8_w4: "Zeit",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wortstamm-Champion
    t9_title: "Wortstamm-Meister",
    t9_text: "Jedes Wort hat einen Kern - den Wortstamm! In 'arbeiten', 'Arbeiter', 'Arbeit' steckt überall 'arb' und 'eit'.",
    t9_b1: "Wortstamm = Kern des Wortes.",
    t9_inst: "Welches Wort hat den gleichen Wortstamm?",
    t9_h1: "Welcher Teil ist bei allen Wörtern gleich?",
    t9_h2: "fahren, Fahrer, Fahrt - alle haben 'fahr'.",
    t9_w1: "Fahren", t9_w2: "Fahrer", t9_w3: "Fahr-zeug", t9_w4: "Haus",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Nomen in der Praxis
    t10_title: "Nomen überall",
    t10_text: "Nomen sind überall - im Satz, im Text, in Geschichten. Wir brauchen sie, um über Dinge, Tiere und Menschen zu sprechen.",
    t10_b1: "Nomen großgeschrieben.",
    t10_b2: "Mit Artikel: der, die, das.",
    t10_inst: "Wieviele Nomen sind im Satz?",
    t10_h1: "Zähle die Großbuchstaben!",
    t10_h2: "'Die Katze spielt mit dem Ball.' - 3 Nomen.",
    t10_q: "Der Hund spielt Ball. Wieviele Nomen?",
    t10_qa: "2", t10_qb: "3", t10_qc: "1", t10_qd: "4",

    // T11: Adjektiv-Gegenteile Master
    t11_title: "Adjektiv-Gegensätze",
    t11_text: "Gegensätze (Gegensatzwörter) helfen uns, Dinge besser zu beschreiben. Groß und klein. Hell und dunkel. Schnell und langsam.",
    t11_b1: "Gegensätze sind Antonyme.",
    t11_inst: "Finde das Gegenteil!",
    t11_h1: "Was ist das Gegenteil von 'alt'?",
    t11_h2: "Alt - neu. Groß - klein.",
    t11_w1: "groß", t11_w2: "klein", t11_w3: "Tisch", t11_w4: "alt",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T12: Plural Überraschungen
    t12_title: "Plural - Überraschungen",
    t12_text: "Singular wird zu Plural - aber wie? Manche bekommen -e, manche -en, manche -er, und manche haben Umlaute!",
    t12_b1: "Singular -> Plural.",
    t12_b2: "Regeln: -e, -en, -er, -Umlaut.",
    t12_inst: "Was ist der Plural von 'Baum'?",
    t12_h1: "Mehrere Bäume.",
    t12_h2: "Baum -> Bäume. Das 'a' wird zu 'ä'!",
    t12_q: "Was ist die Mehrzahl von 'Hand'?",
    t12_qa: "Hände", t12_qb: "Hands", t12_qc: "Hande", t12_qd: "Handte",

    // T13: Satzzeichen-Profi
    t13_title: "Satzzeichen nicht vergessen!",
    t13_text: "Ein Satz braucht drei Dinge: GROSS am Anfang, Sinn in der Mitte und PUNKT am Ende!",
    t13_b1: "Punkt (.) endet den Satz.",
    t13_b2: "Frage? mit Fragezeichen.",
    t13_inst: "Wem gehört welches Satzzeichen?",
    t13_h1: "Ist es eine Frage? Dann: ?",
    t13_h2: "'Was ist das?' <- Fragezeichen. 'Das ist schön.' <- Punkt.",
    t13_w1: "Das ist schön", t13_w2: "Was ist das", t13_w3: "Wie geht es dir", t13_w4: "Das ist toll",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T14: Großschreibung von A bis Z
    t14_title: "Großschreibung - Die Regel",
    t14_text: "Satzanfang, Nomen und Eigennamen schreiben wir GROSS! Der Name Anna, das Nomen Elefant, der Anfang: 'Die Schule...'",
    t14_b1: "Nomen = GROSS.",
    t14_b2: "Satzanfang = GROSS. Eigennamen = GROSS.",
    t14_inst: "Welches Wort muss groß sein?",
    t14_h1: "Ist es ein Nomen? Dann GROSS!",
    t14_h2: "Anna ist groß. Tag ist groß. Die ist groß (Satzanfang).",
    t14_w1: "Schule", t14_w2: "laufen", t14_w3: "schnell", t14_w4: "spielen",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Prüfungs-Champion-Final
    t15_title: "Die Abschlussprüfung",
    t15_text: "Du hast alles gelernt! Nomen, Verben, Adjektive, Rechtschreibung, Artikel, Plural und Wortstämme. Das ist die GROSSE PRÜFUNG!",
    t15_b1: "Alle Themen von K1-K2.",
    t15_inst: "Welches Wort ist FALSCH geschrieben?",
    t15_h1: "Überlege: Ist das großgeschrieben? Passt die Endung?",
    t15_h2: "'Katze' ist richtig. 'katze' ist falsch. 'Katzen' ist auch richtig (Plural).",
    t15_w1: "Katze", t15_w2: "katze", t15_w3: "Auto", t15_w4: "auto",
    // Quiz: GENERATOR (verben_k2)
  },
  en: {

    explorer_title: "[EN] Große Prüfung K2",

    // T1: Nomen-Check
    t1_title: "[EN] Nomen-Check",
    t1_text: "[EN] Erinnerst du dich? Nomen sind Namen für Dinge, Tiere und Menschen. Wir schreiben sie immer GROSS!",
    t1_b1: "[EN] Nomen = Großschreibung.",
    t1_inst: "[EN] Finde das Nomen im Satz!",
    t1_h1: "[EN] Suche das Wort mit dem großen Anfangsbuchstaben.",
    t1_h2: "[EN] Das Wort 'Apfel' ist ein Nomen.",
    t1_w1: "[EN] Der", t1_w2: "[EN] rote", t1_w3: "[EN] Apfel", t1_w4: "[EN] schmeckt", t1_w5: "[EN] .",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Artikel-Meister
    t2_title: "[EN] Artikel-Meister",
    t2_text: "[EN] Der, die oder das? Jeder Begleiter hat seinen festen Platz bei einem Nomen.",
    t2_b1: "[EN] der 🔵, die 🔴, das 🟢",
    t2_inst: "[EN] Sortiere die Nomen in die richtigen Artikel-Körbe!",
    t2_h1: "[EN] Überlege: Heißt es der, die oder das?",
    t2_bd: "[EN] der 🔵", t2_bdi: "[EN] die 🔴", t2_bda: "[EN] das 🟢",
    t2_i1: "[EN] Hund", t2_i2: "[EN] Katze", t2_i3: "[EN] Haus", t2_i4: "[EN] Auto",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Verben-Profi
    t3_title: "[EN] Verben-Profi",
    t3_text: "[EN] Tunwörter sagen uns, was passiert. Kannst du sie richtig beugen?",
    t3_b1: "[EN] ich spiele, du spielst, er spielt.",
    t3_inst: "[EN] Welches Verb passt in die Lücke?",
    t3_h1: "[EN] Das Wort davor ist 'Du'.",
    t3_h2: "[EN] Bei 'Du' endet das Verb auf '-st'.",
    t3_sent: "[EN] Du ___ heute ein Lied.",
    t3_c1: "[EN] singst", t3_c2: "[EN] singen", t3_c3: "[EN] singt", t3_c4: "[EN] singe",
    // Quiz: GENERATOR (verben_k2)

    // T4: Adjektiv-Expert
    t4_title: "[EN] Adjektiv-Expert",
    t4_text: "[EN] Wie ist die Welt? Adjektive beschreiben Dinge genauer. Weißt du auch die Gegenteile?",
    t4_b1: "[EN] Adjektive = Wiewörter.",
    t4_inst: "[EN] Verbinde die Gegensätze!",
    t4_h1: "[EN] Was ist das Gegenteil von 'groß'?",
    t4_l1: "[EN] groß", t4_r1: "[EN] klein",
    t4_l2: "[EN] schnell", t4_r2: "[EN] langsam",
    t4_l3: "[EN] hell", t4_r3: "[EN] dunkel",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T5: Rechtschreib-König
    t5_title: "[EN] Rechtschreib-König",
    t5_text: "[EN] ck, tz oder ie? Ein König achtet auf jedes Detail beim Schreiben!",
    t5_b1: "[EN] Nach kurzem Vokal folgt oft ck oder tz.",
    t5_inst: "[EN] Welches Wort ist richtig geschrieben?",
    t5_h1: "[EN] Das Wort ist 'Katze'. Es hat ein kurzes 'a'.",
    t5_w1: "[EN] Katze", t5_w2: "[EN] Kaze", t5_w3: "[EN] Kattze", t5_w4: "[EN] Katse",
    // Quiz: GENERATOR (satzzeichen_k1 - vegyes review)

    // T6: Plural-Check
    t6_title: "[EN] Plural-Check",
    t6_text: "[EN] Eins oder viele? Die Mehrzahl verändert oft das ganze Wort.",
    t6_b1: "[EN] Einzahl ➔ Mehrzahl.",
    t6_inst: "[EN] Verbinde die Einzahl mit der Mehrzahl!",
    t6_l1: "[EN] Baum", t6_r1: "[EN] Bäume",
    t6_l2: "[EN] Hand", t6_r2: "[EN] Hände",
    t6_l3: "[EN] Buch", t6_r3: "[EN] Bücher",
    // Quiz: GENERATOR (plural)

    // T7: K2 Champion
    t7_title: "[EN] K2 Champion",
    t7_text: "[EN] Du hast alle Inseln gemeistert! Hier ist deine letzte Aufgabe. Baue den Satz perfekt zusammen.",
    t7_b1: "[EN] Satzanfang groß, Ende mit Punkt.",
    t7_inst: "[EN] Bringe die Wörter in die richtige Reihenfolge!",
    t7_f1: "[EN] Ich", t7_f2: "[EN] bin", t7_f3: "[EN] ein", t7_f4: "[EN] Champion!",
    // Quiz: GENERATOR (zeit_k2 - napszakok review)

    // T8: ie, ei, äu, eu - Der große Mix
    t8_title: "[EN] Der große Zwielaut-Mix",
    t8_text: "[EN] ie, ei, äu, eu - das sind schwierige Zwielaute. Hörst du: ie und ei klingen SEHR ähnlich! Ebenso äu und eu. Aber geschrieben sind sie unterschiedlich!",
    t8_b1: "[EN] ie vs ei vs äu vs eu.",
    t8_b2: "[EN] Aussprache kann täuschen!",
    t8_inst: "[EN] Welches Wort hat 'ie'?",
    t8_h1: "[EN] ie = langes I. ei = wie 'ai'.",
    t8_h2: "[EN] Lied hat 'ie'. Wein hat 'ei'.",
    t8_w1: "[EN] Lied", t8_w2: "[EN] Wein", t8_w3: "[EN] Haus", t8_w4: "[EN] Zeit",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wortstamm-Champion
    t9_title: "[EN] Wortstamm-Meister",
    t9_text: "[EN] Jedes Wort hat einen Kern - den Wortstamm! In 'arbeiten', 'Arbeiter', 'Arbeit' steckt überall 'arb' und 'eit'.",
    t9_b1: "[EN] Wortstamm = Kern des Wortes.",
    t9_inst: "[EN] Welches Wort hat den gleichen Wortstamm?",
    t9_h1: "[EN] Welcher Teil ist bei allen Wörtern gleich?",
    t9_h2: "[EN] fahren, Fahrer, Fahrt - alle haben 'fahr'.",
    t9_w1: "[EN] Fahren", t9_w2: "[EN] Fahrer", t9_w3: "[EN] Fahr-zeug", t9_w4: "[EN] Haus",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Nomen in der Praxis
    t10_title: "[EN] Nomen überall",
    t10_text: "[EN] Nomen sind überall - im Satz, im Text, in Geschichten. Wir brauchen sie, um über Dinge, Tiere und Menschen zu sprechen.",
    t10_b1: "[EN] Nomen großgeschrieben.",
    t10_b2: "[EN] Mit Artikel: der, die, das.",
    t10_inst: "[EN] Wieviele Nomen sind im Satz?",
    t10_h1: "[EN] Zähle die Großbuchstaben!",
    t10_h2: "[EN] 'Die Katze spielt mit dem Ball.' - 3 Nomen.",
    t10_q: "[EN] Der Hund spielt Ball. Wieviele Nomen?",
    t10_qa: "[EN] 2", t10_qb: "[EN] 3", t10_qc: "[EN] 1", t10_qd: "[EN] 4",

    // T11: Adjektiv-Gegenteile Master
    t11_title: "[EN] Adjektiv-Gegensätze",
    t11_text: "[EN] Gegensätze (Gegensatzwörter) helfen uns, Dinge besser zu beschreiben. Groß und klein. Hell und dunkel. Schnell und langsam.",
    t11_b1: "[EN] Gegensätze sind Antonyme.",
    t11_inst: "[EN] Finde das Gegenteil!",
    t11_h1: "[EN] Was ist das Gegenteil von 'alt'?",
    t11_h2: "[EN] Alt - neu. Groß - klein.",
    t11_w1: "[EN] groß", t11_w2: "[EN] klein", t11_w3: "[EN] Tisch", t11_w4: "[EN] alt",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T12: Plural Überraschungen
    t12_title: "[EN] Plural - Überraschungen",
    t12_text: "[EN] Singular wird zu Plural - aber wie? Manche bekommen -e, manche -en, manche -er, und manche haben Umlaute!",
    t12_b1: "[EN] Singular -> Plural.",
    t12_b2: "[EN] Regeln: -e, -en, -er, -Umlaut.",
    t12_inst: "[EN] Was ist der Plural von 'Baum'?",
    t12_h1: "[EN] Mehrere Bäume.",
    t12_h2: "[EN] Baum -> Bäume. Das 'a' wird zu 'ä'!",
    t12_q: "[EN] Was ist die Mehrzahl von 'Hand'?",
    t12_qa: "[EN] Hände", t12_qb: "[EN] Hands", t12_qc: "[EN] Hande", t12_qd: "[EN] Handte",

    // T13: Satzzeichen-Profi
    t13_title: "[EN] Satzzeichen nicht vergessen!",
    t13_text: "[EN] Ein Satz braucht drei Dinge: GROSS am Anfang, Sinn in der Mitte und PUNKT am Ende!",
    t13_b1: "[EN] Punkt (.) endet den Satz.",
    t13_b2: "[EN] Frage? mit Fragezeichen.",
    t13_inst: "[EN] Wem gehört welches Satzzeichen?",
    t13_h1: "[EN] Ist es eine Frage? Dann: ?",
    t13_h2: "[EN] 'Was ist das?' <- Fragezeichen. 'Das ist schön.' <- Punkt.",
    t13_w1: "[EN] Das ist schön", t13_w2: "[EN] Was ist das", t13_w3: "[EN] Wie geht es dir", t13_w4: "[EN] Das ist toll",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T14: Großschreibung von A bis Z
    t14_title: "[EN] Großschreibung - Die Regel",
    t14_text: "[EN] Satzanfang, Nomen und Eigennamen schreiben wir GROSS! Der Name Anna, das Nomen Elefant, der Anfang: 'Die Schule...'",
    t14_b1: "[EN] Nomen = GROSS.",
    t14_b2: "[EN] Satzanfang = GROSS. Eigennamen = GROSS.",
    t14_inst: "[EN] Welches Wort muss groß sein?",
    t14_h1: "[EN] Ist es ein Nomen? Dann GROSS!",
    t14_h2: "[EN] Anna ist groß. Tag ist groß. Die ist groß (Satzanfang).",
    t14_w1: "[EN] Schule", t14_w2: "[EN] laufen", t14_w3: "[EN] schnell", t14_w4: "[EN] spielen",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Prüfungs-Champion-Final
    t15_title: "[EN] Die Abschlussprüfung",
    t15_text: "[EN] Du hast alles gelernt! Nomen, Verben, Adjektive, Rechtschreibung, Artikel, Plural und Wortstämme. Das ist die GROSSE PRÜFUNG!",
    t15_b1: "[EN] Alle Themen von K1-K2.",
    t15_inst: "[EN] Welches Wort ist FALSCH geschrieben?",
    t15_h1: "[EN] Überlege: Ist das großgeschrieben? Passt die Endung?",
    t15_h2: "[EN] 'Katze' ist richtig. 'katze' ist falsch. 'Katzen' ist auch richtig (Plural).",
    t15_w1: "[EN] Katze", t15_w2: "[EN] katze", t15_w3: "[EN] Auto", t15_w4: "[EN] auto",
    // Quiz: GENERATOR (verben_k2)
  
  },
  hu: {

    explorer_title: "[HU] Große Prüfung K2",

    // T1: Nomen-Check
    t1_title: "[HU] Nomen-Check",
    t1_text: "[HU] Erinnerst du dich? Nomen sind Namen für Dinge, Tiere und Menschen. Wir schreiben sie immer GROSS!",
    t1_b1: "[HU] Nomen = Großschreibung.",
    t1_inst: "[HU] Finde das Nomen im Satz!",
    t1_h1: "[HU] Suche das Wort mit dem großen Anfangsbuchstaben.",
    t1_h2: "[HU] Das Wort 'Apfel' ist ein Nomen.",
    t1_w1: "[HU] Der", t1_w2: "[HU] rote", t1_w3: "[HU] Apfel", t1_w4: "[HU] schmeckt", t1_w5: "[HU] .",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Artikel-Meister
    t2_title: "[HU] Artikel-Meister",
    t2_text: "[HU] Der, die oder das? Jeder Begleiter hat seinen festen Platz bei einem Nomen.",
    t2_b1: "[HU] der 🔵, die 🔴, das 🟢",
    t2_inst: "[HU] Sortiere die Nomen in die richtigen Artikel-Körbe!",
    t2_h1: "[HU] Überlege: Heißt es der, die oder das?",
    t2_bd: "[HU] der 🔵", t2_bdi: "[HU] die 🔴", t2_bda: "[HU] das 🟢",
    t2_i1: "[HU] Hund", t2_i2: "[HU] Katze", t2_i3: "[HU] Haus", t2_i4: "[HU] Auto",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Verben-Profi
    t3_title: "[HU] Verben-Profi",
    t3_text: "[HU] Tunwörter sagen uns, was passiert. Kannst du sie richtig beugen?",
    t3_b1: "[HU] ich spiele, du spielst, er spielt.",
    t3_inst: "[HU] Welches Verb passt in die Lücke?",
    t3_h1: "[HU] Das Wort davor ist 'Du'.",
    t3_h2: "[HU] Bei 'Du' endet das Verb auf '-st'.",
    t3_sent: "[HU] Du ___ heute ein Lied.",
    t3_c1: "[HU] singst", t3_c2: "[HU] singen", t3_c3: "[HU] singt", t3_c4: "[HU] singe",
    // Quiz: GENERATOR (verben_k2)

    // T4: Adjektiv-Expert
    t4_title: "[HU] Adjektiv-Expert",
    t4_text: "[HU] Wie ist die Welt? Adjektive beschreiben Dinge genauer. Weißt du auch die Gegenteile?",
    t4_b1: "[HU] Adjektive = Wiewörter.",
    t4_inst: "[HU] Verbinde die Gegensätze!",
    t4_h1: "[HU] Was ist das Gegenteil von 'groß'?",
    t4_l1: "[HU] groß", t4_r1: "[HU] klein",
    t4_l2: "[HU] schnell", t4_r2: "[HU] langsam",
    t4_l3: "[HU] hell", t4_r3: "[HU] dunkel",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T5: Rechtschreib-König
    t5_title: "[HU] Rechtschreib-König",
    t5_text: "[HU] ck, tz oder ie? Ein König achtet auf jedes Detail beim Schreiben!",
    t5_b1: "[HU] Nach kurzem Vokal folgt oft ck oder tz.",
    t5_inst: "[HU] Welches Wort ist richtig geschrieben?",
    t5_h1: "[HU] Das Wort ist 'Katze'. Es hat ein kurzes 'a'.",
    t5_w1: "[HU] Katze", t5_w2: "[HU] Kaze", t5_w3: "[HU] Kattze", t5_w4: "[HU] Katse",
    // Quiz: GENERATOR (satzzeichen_k1 - vegyes review)

    // T6: Plural-Check
    t6_title: "[HU] Plural-Check",
    t6_text: "[HU] Eins oder viele? Die Mehrzahl verändert oft das ganze Wort.",
    t6_b1: "[HU] Einzahl ➔ Mehrzahl.",
    t6_inst: "[HU] Verbinde die Einzahl mit der Mehrzahl!",
    t6_l1: "[HU] Baum", t6_r1: "[HU] Bäume",
    t6_l2: "[HU] Hand", t6_r2: "[HU] Hände",
    t6_l3: "[HU] Buch", t6_r3: "[HU] Bücher",
    // Quiz: GENERATOR (plural)

    // T7: K2 Champion
    t7_title: "[HU] K2 Champion",
    t7_text: "[HU] Du hast alle Inseln gemeistert! Hier ist deine letzte Aufgabe. Baue den Satz perfekt zusammen.",
    t7_b1: "[HU] Satzanfang groß, Ende mit Punkt.",
    t7_inst: "[HU] Bringe die Wörter in die richtige Reihenfolge!",
    t7_f1: "[HU] Ich", t7_f2: "[HU] bin", t7_f3: "[HU] ein", t7_f4: "[HU] Champion!",
    // Quiz: GENERATOR (zeit_k2 - napszakok review)

    // T8: ie, ei, äu, eu - Der große Mix
    t8_title: "[HU] Der große Zwielaut-Mix",
    t8_text: "[HU] ie, ei, äu, eu - das sind schwierige Zwielaute. Hörst du: ie und ei klingen SEHR ähnlich! Ebenso äu und eu. Aber geschrieben sind sie unterschiedlich!",
    t8_b1: "[HU] ie vs ei vs äu vs eu.",
    t8_b2: "[HU] Aussprache kann täuschen!",
    t8_inst: "[HU] Welches Wort hat 'ie'?",
    t8_h1: "[HU] ie = langes I. ei = wie 'ai'.",
    t8_h2: "[HU] Lied hat 'ie'. Wein hat 'ei'.",
    t8_w1: "[HU] Lied", t8_w2: "[HU] Wein", t8_w3: "[HU] Haus", t8_w4: "[HU] Zeit",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wortstamm-Champion
    t9_title: "[HU] Wortstamm-Meister",
    t9_text: "[HU] Jedes Wort hat einen Kern - den Wortstamm! In 'arbeiten', 'Arbeiter', 'Arbeit' steckt überall 'arb' und 'eit'.",
    t9_b1: "[HU] Wortstamm = Kern des Wortes.",
    t9_inst: "[HU] Welches Wort hat den gleichen Wortstamm?",
    t9_h1: "[HU] Welcher Teil ist bei allen Wörtern gleich?",
    t9_h2: "[HU] fahren, Fahrer, Fahrt - alle haben 'fahr'.",
    t9_w1: "[HU] Fahren", t9_w2: "[HU] Fahrer", t9_w3: "[HU] Fahr-zeug", t9_w4: "[HU] Haus",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Nomen in der Praxis
    t10_title: "[HU] Nomen überall",
    t10_text: "[HU] Nomen sind überall - im Satz, im Text, in Geschichten. Wir brauchen sie, um über Dinge, Tiere und Menschen zu sprechen.",
    t10_b1: "[HU] Nomen großgeschrieben.",
    t10_b2: "[HU] Mit Artikel: der, die, das.",
    t10_inst: "[HU] Wieviele Nomen sind im Satz?",
    t10_h1: "[HU] Zähle die Großbuchstaben!",
    t10_h2: "[HU] 'Die Katze spielt mit dem Ball.' - 3 Nomen.",
    t10_q: "[HU] Der Hund spielt Ball. Wieviele Nomen?",
    t10_qa: "[HU] 2", t10_qb: "[HU] 3", t10_qc: "[HU] 1", t10_qd: "[HU] 4",

    // T11: Adjektiv-Gegenteile Master
    t11_title: "[HU] Adjektiv-Gegensätze",
    t11_text: "[HU] Gegensätze (Gegensatzwörter) helfen uns, Dinge besser zu beschreiben. Groß und klein. Hell und dunkel. Schnell und langsam.",
    t11_b1: "[HU] Gegensätze sind Antonyme.",
    t11_inst: "[HU] Finde das Gegenteil!",
    t11_h1: "[HU] Was ist das Gegenteil von 'alt'?",
    t11_h2: "[HU] Alt - neu. Groß - klein.",
    t11_w1: "[HU] groß", t11_w2: "[HU] klein", t11_w3: "[HU] Tisch", t11_w4: "[HU] alt",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T12: Plural Überraschungen
    t12_title: "[HU] Plural - Überraschungen",
    t12_text: "[HU] Singular wird zu Plural - aber wie? Manche bekommen -e, manche -en, manche -er, und manche haben Umlaute!",
    t12_b1: "[HU] Singular -> Plural.",
    t12_b2: "[HU] Regeln: -e, -en, -er, -Umlaut.",
    t12_inst: "[HU] Was ist der Plural von 'Baum'?",
    t12_h1: "[HU] Mehrere Bäume.",
    t12_h2: "[HU] Baum -> Bäume. Das 'a' wird zu 'ä'!",
    t12_q: "[HU] Was ist die Mehrzahl von 'Hand'?",
    t12_qa: "[HU] Hände", t12_qb: "[HU] Hands", t12_qc: "[HU] Hande", t12_qd: "[HU] Handte",

    // T13: Satzzeichen-Profi
    t13_title: "[HU] Satzzeichen nicht vergessen!",
    t13_text: "[HU] Ein Satz braucht drei Dinge: GROSS am Anfang, Sinn in der Mitte und PUNKT am Ende!",
    t13_b1: "[HU] Punkt (.) endet den Satz.",
    t13_b2: "[HU] Frage? mit Fragezeichen.",
    t13_inst: "[HU] Wem gehört welches Satzzeichen?",
    t13_h1: "[HU] Ist es eine Frage? Dann: ?",
    t13_h2: "[HU] 'Was ist das?' <- Fragezeichen. 'Das ist schön.' <- Punkt.",
    t13_w1: "[HU] Das ist schön", t13_w2: "[HU] Was ist das", t13_w3: "[HU] Wie geht es dir", t13_w4: "[HU] Das ist toll",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T14: Großschreibung von A bis Z
    t14_title: "[HU] Großschreibung - Die Regel",
    t14_text: "[HU] Satzanfang, Nomen und Eigennamen schreiben wir GROSS! Der Name Anna, das Nomen Elefant, der Anfang: 'Die Schule...'",
    t14_b1: "[HU] Nomen = GROSS.",
    t14_b2: "[HU] Satzanfang = GROSS. Eigennamen = GROSS.",
    t14_inst: "[HU] Welches Wort muss groß sein?",
    t14_h1: "[HU] Ist es ein Nomen? Dann GROSS!",
    t14_h2: "[HU] Anna ist groß. Tag ist groß. Die ist groß (Satzanfang).",
    t14_w1: "[HU] Schule", t14_w2: "[HU] laufen", t14_w3: "[HU] schnell", t14_w4: "[HU] spielen",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Prüfungs-Champion-Final
    t15_title: "[HU] Die Abschlussprüfung",
    t15_text: "[HU] Du hast alles gelernt! Nomen, Verben, Adjektive, Rechtschreibung, Artikel, Plural und Wortstämme. Das ist die GROSSE PRÜFUNG!",
    t15_b1: "[HU] Alle Themen von K1-K2.",
    t15_inst: "[HU] Welches Wort ist FALSCH geschrieben?",
    t15_h1: "[HU] Überlege: Ist das großgeschrieben? Passt die Endung?",
    t15_h2: "[HU] 'Katze' ist richtig. 'katze' ist falsch. 'Katzen' ist auch richtig (Plural).",
    t15_w1: "[HU] Katze", t15_w2: "[HU] katze", t15_w3: "[HU] Auto", t15_w4: "[HU] auto",
    // Quiz: GENERATOR (verben_k2)
  
  },
  ro: {

    explorer_title: "[RO] Große Prüfung K2",

    // T1: Nomen-Check
    t1_title: "[RO] Nomen-Check",
    t1_text: "[RO] Erinnerst du dich? Nomen sind Namen für Dinge, Tiere und Menschen. Wir schreiben sie immer GROSS!",
    t1_b1: "[RO] Nomen = Großschreibung.",
    t1_inst: "[RO] Finde das Nomen im Satz!",
    t1_h1: "[RO] Suche das Wort mit dem großen Anfangsbuchstaben.",
    t1_h2: "[RO] Das Wort 'Apfel' ist ein Nomen.",
    t1_w1: "[RO] Der", t1_w2: "[RO] rote", t1_w3: "[RO] Apfel", t1_w4: "[RO] schmeckt", t1_w5: "[RO] .",
    // Quiz: GENERATOR (nomen_k2)

    // T2: Artikel-Meister
    t2_title: "[RO] Artikel-Meister",
    t2_text: "[RO] Der, die oder das? Jeder Begleiter hat seinen festen Platz bei einem Nomen.",
    t2_b1: "[RO] der 🔵, die 🔴, das 🟢",
    t2_inst: "[RO] Sortiere die Nomen in die richtigen Artikel-Körbe!",
    t2_h1: "[RO] Überlege: Heißt es der, die oder das?",
    t2_bd: "[RO] der 🔵", t2_bdi: "[RO] die 🔴", t2_bda: "[RO] das 🟢",
    t2_i1: "[RO] Hund", t2_i2: "[RO] Katze", t2_i3: "[RO] Haus", t2_i4: "[RO] Auto",
    // Quiz: GENERATOR (artikel_k2)

    // T3: Verben-Profi
    t3_title: "[RO] Verben-Profi",
    t3_text: "[RO] Tunwörter sagen uns, was passiert. Kannst du sie richtig beugen?",
    t3_b1: "[RO] ich spiele, du spielst, er spielt.",
    t3_inst: "[RO] Welches Verb passt in die Lücke?",
    t3_h1: "[RO] Das Wort davor ist 'Du'.",
    t3_h2: "[RO] Bei 'Du' endet das Verb auf '-st'.",
    t3_sent: "[RO] Du ___ heute ein Lied.",
    t3_c1: "[RO] singst", t3_c2: "[RO] singen", t3_c3: "[RO] singt", t3_c4: "[RO] singe",
    // Quiz: GENERATOR (verben_k2)

    // T4: Adjektiv-Expert
    t4_title: "[RO] Adjektiv-Expert",
    t4_text: "[RO] Wie ist die Welt? Adjektive beschreiben Dinge genauer. Weißt du auch die Gegenteile?",
    t4_b1: "[RO] Adjektive = Wiewörter.",
    t4_inst: "[RO] Verbinde die Gegensätze!",
    t4_h1: "[RO] Was ist das Gegenteil von 'groß'?",
    t4_l1: "[RO] groß", t4_r1: "[RO] klein",
    t4_l2: "[RO] schnell", t4_r2: "[RO] langsam",
    t4_l3: "[RO] hell", t4_r3: "[RO] dunkel",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T5: Rechtschreib-König
    t5_title: "[RO] Rechtschreib-König",
    t5_text: "[RO] ck, tz oder ie? Ein König achtet auf jedes Detail beim Schreiben!",
    t5_b1: "[RO] Nach kurzem Vokal folgt oft ck oder tz.",
    t5_inst: "[RO] Welches Wort ist richtig geschrieben?",
    t5_h1: "[RO] Das Wort ist 'Katze'. Es hat ein kurzes 'a'.",
    t5_w1: "[RO] Katze", t5_w2: "[RO] Kaze", t5_w3: "[RO] Kattze", t5_w4: "[RO] Katse",
    // Quiz: GENERATOR (satzzeichen_k1 - vegyes review)

    // T6: Plural-Check
    t6_title: "[RO] Plural-Check",
    t6_text: "[RO] Eins oder viele? Die Mehrzahl verändert oft das ganze Wort.",
    t6_b1: "[RO] Einzahl ➔ Mehrzahl.",
    t6_inst: "[RO] Verbinde die Einzahl mit der Mehrzahl!",
    t6_l1: "[RO] Baum", t6_r1: "[RO] Bäume",
    t6_l2: "[RO] Hand", t6_r2: "[RO] Hände",
    t6_l3: "[RO] Buch", t6_r3: "[RO] Bücher",
    // Quiz: GENERATOR (plural)

    // T7: K2 Champion
    t7_title: "[RO] K2 Champion",
    t7_text: "[RO] Du hast alle Inseln gemeistert! Hier ist deine letzte Aufgabe. Baue den Satz perfekt zusammen.",
    t7_b1: "[RO] Satzanfang groß, Ende mit Punkt.",
    t7_inst: "[RO] Bringe die Wörter in die richtige Reihenfolge!",
    t7_f1: "[RO] Ich", t7_f2: "[RO] bin", t7_f3: "[RO] ein", t7_f4: "[RO] Champion!",
    // Quiz: GENERATOR (zeit_k2 - napszakok review)

    // T8: ie, ei, äu, eu - Der große Mix
    t8_title: "[RO] Der große Zwielaut-Mix",
    t8_text: "[RO] ie, ei, äu, eu - das sind schwierige Zwielaute. Hörst du: ie und ei klingen SEHR ähnlich! Ebenso äu und eu. Aber geschrieben sind sie unterschiedlich!",
    t8_b1: "[RO] ie vs ei vs äu vs eu.",
    t8_b2: "[RO] Aussprache kann täuschen!",
    t8_inst: "[RO] Welches Wort hat 'ie'?",
    t8_h1: "[RO] ie = langes I. ei = wie 'ai'.",
    t8_h2: "[RO] Lied hat 'ie'. Wein hat 'ei'.",
    t8_w1: "[RO] Lied", t8_w2: "[RO] Wein", t8_w3: "[RO] Haus", t8_w4: "[RO] Zeit",
    // Quiz: GENERATOR (nomen_k2)

    // T9: Wortstamm-Champion
    t9_title: "[RO] Wortstamm-Meister",
    t9_text: "[RO] Jedes Wort hat einen Kern - den Wortstamm! In 'arbeiten', 'Arbeiter', 'Arbeit' steckt überall 'arb' und 'eit'.",
    t9_b1: "[RO] Wortstamm = Kern des Wortes.",
    t9_inst: "[RO] Welches Wort hat den gleichen Wortstamm?",
    t9_h1: "[RO] Welcher Teil ist bei allen Wörtern gleich?",
    t9_h2: "[RO] fahren, Fahrer, Fahrt - alle haben 'fahr'.",
    t9_w1: "[RO] Fahren", t9_w2: "[RO] Fahrer", t9_w3: "[RO] Fahr-zeug", t9_w4: "[RO] Haus",
    // Quiz: GENERATOR (nomen_k2)

    // T10: Nomen in der Praxis
    t10_title: "[RO] Nomen überall",
    t10_text: "[RO] Nomen sind überall - im Satz, im Text, in Geschichten. Wir brauchen sie, um über Dinge, Tiere und Menschen zu sprechen.",
    t10_b1: "[RO] Nomen großgeschrieben.",
    t10_b2: "[RO] Mit Artikel: der, die, das.",
    t10_inst: "[RO] Wieviele Nomen sind im Satz?",
    t10_h1: "[RO] Zähle die Großbuchstaben!",
    t10_h2: "[RO] 'Die Katze spielt mit dem Ball.' - 3 Nomen.",
    t10_q: "[RO] Der Hund spielt Ball. Wieviele Nomen?",
    t10_qa: "[RO] 2", t10_qb: "[RO] 3", t10_qc: "[RO] 1", t10_qd: "[RO] 4",

    // T11: Adjektiv-Gegenteile Master
    t11_title: "[RO] Adjektiv-Gegensätze",
    t11_text: "[RO] Gegensätze (Gegensatzwörter) helfen uns, Dinge besser zu beschreiben. Groß und klein. Hell und dunkel. Schnell und langsam.",
    t11_b1: "[RO] Gegensätze sind Antonyme.",
    t11_inst: "[RO] Finde das Gegenteil!",
    t11_h1: "[RO] Was ist das Gegenteil von 'alt'?",
    t11_h2: "[RO] Alt - neu. Groß - klein.",
    t11_w1: "[RO] groß", t11_w2: "[RO] klein", t11_w3: "[RO] Tisch", t11_w4: "[RO] alt",
    // Quiz: GENERATOR (gegensaetze_k2)

    // T12: Plural Überraschungen
    t12_title: "[RO] Plural - Überraschungen",
    t12_text: "[RO] Singular wird zu Plural - aber wie? Manche bekommen -e, manche -en, manche -er, und manche haben Umlaute!",
    t12_b1: "[RO] Singular -> Plural.",
    t12_b2: "[RO] Regeln: -e, -en, -er, -Umlaut.",
    t12_inst: "[RO] Was ist der Plural von 'Baum'?",
    t12_h1: "[RO] Mehrere Bäume.",
    t12_h2: "[RO] Baum -> Bäume. Das 'a' wird zu 'ä'!",
    t12_q: "[RO] Was ist die Mehrzahl von 'Hand'?",
    t12_qa: "[RO] Hände", t12_qb: "[RO] Hands", t12_qc: "[RO] Hande", t12_qd: "[RO] Handte",

    // T13: Satzzeichen-Profi
    t13_title: "[RO] Satzzeichen nicht vergessen!",
    t13_text: "[RO] Ein Satz braucht drei Dinge: GROSS am Anfang, Sinn in der Mitte und PUNKT am Ende!",
    t13_b1: "[RO] Punkt (.) endet den Satz.",
    t13_b2: "[RO] Frage? mit Fragezeichen.",
    t13_inst: "[RO] Wem gehört welches Satzzeichen?",
    t13_h1: "[RO] Ist es eine Frage? Dann: ?",
    t13_h2: "[RO] 'Was ist das?' <- Fragezeichen. 'Das ist schön.' <- Punkt.",
    t13_w1: "[RO] Das ist schön", t13_w2: "[RO] Was ist das", t13_w3: "[RO] Wie geht es dir", t13_w4: "[RO] Das ist toll",
    // Quiz: GENERATOR (satzzeichen_k1)

    // T14: Großschreibung von A bis Z
    t14_title: "[RO] Großschreibung - Die Regel",
    t14_text: "[RO] Satzanfang, Nomen und Eigennamen schreiben wir GROSS! Der Name Anna, das Nomen Elefant, der Anfang: 'Die Schule...'",
    t14_b1: "[RO] Nomen = GROSS.",
    t14_b2: "[RO] Satzanfang = GROSS. Eigennamen = GROSS.",
    t14_inst: "[RO] Welches Wort muss groß sein?",
    t14_h1: "[RO] Ist es ein Nomen? Dann GROSS!",
    t14_h2: "[RO] Anna ist groß. Tag ist groß. Die ist groß (Satzanfang).",
    t14_w1: "[RO] Schule", t14_w2: "[RO] laufen", t14_w3: "[RO] schnell", t14_w4: "[RO] spielen",
    // Quiz: GENERATOR (nomen_k2)

    // T15: Prüfungs-Champion-Final
    t15_title: "[RO] Die Abschlussprüfung",
    t15_text: "[RO] Du hast alles gelernt! Nomen, Verben, Adjektive, Rechtschreibung, Artikel, Plural und Wortstämme. Das ist die GROSSE PRÜFUNG!",
    t15_b1: "[RO] Alle Themen von K1-K2.",
    t15_inst: "[RO] Welches Wort ist FALSCH geschrieben?",
    t15_h1: "[RO] Überlege: Ist das großgeschrieben? Passt die Endung?",
    t15_h2: "[RO] 'Katze' ist richtig. 'katze' ist falsch. 'Katzen' ist auch richtig (Plural).",
    t15_w1: "[RO] Katze", t15_w2: "[RO] katze", t15_w3: "[RO] Auto", t15_w4: "[RO] auto",
    // Quiz: GENERATOR (verben_k2)
  
  }
};

export const EXAM2_POOL: PoolTopicDef[] = [
  // ── 1. Nomen Review (highlight-text) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "Nomen", highlightChars: ["N"], color: "#3B82F6" },
    bulletKeys: ["t1_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"],
      correctIndices: [2], // Apfel
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 2. Artikel Review (drag-to-bucket) ──────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "text-bubbles", items: [
      { text: "der", emoji: "🔵", color: "#1E40AF", bg: "#DBEAFE" },
      { text: "die", emoji: "🔴", color: "#991B1B", bg: "#FEE2E2" },
      { text: "das", emoji: "🟢", color: "#065F46", bg: "#D1FAE5" },
    ]},
    bulletKeys: ["t2_b1"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [{ id: "der", label: "t2_bd" }, { id: "die", label: "t2_bdi" }, { id: "das", label: "t2_bda" }],
      items: [
        { text: "t2_i1", bucketId: "der" }, // Hund
        { text: "t2_i2", bucketId: "die" }, // Katze
        { text: "t2_i3", bucketId: "das" }, // Haus
        { text: "t2_i4", bucketId: "der" }, // Baum (Wait, in K1 it's already there, keep it consistent)
      ],
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
    },
    quiz: { generate: "artikel_k2" },
  },

  // ── 3. Verben Review (gap-fill) ─────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "🎤", label: "singen" }] },
    bulletKeys: ["t3_b1"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sent",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      correctIndex: 0,
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
    },
    quiz: { generate: "verben_k2" },
  },

  // ── 4. Adjektiv Review (match-pairs) ────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "letter-pairs", pairs: [["groß", "klein"]], color: "#F59E0B" },
    bulletKeys: ["t4_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
      ],
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
    },
    quiz: { generate: "gegensaetze_k2" },
  },

  // ── 5. Rechtschreibung Review (highlight-text) ──────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "letter-circles", letters: ["ck", "tz"], color: "#EF4444" },
    bulletKeys: ["t5_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"],
      correctIndices: [0], // Katze
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 6. Plural Review (match-pairs) ──────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "compound-word", word1: "Bäume", word2: "", result: "🌳🌳🌳", color: "#10B981" },
    bulletKeys: ["t6_b1"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
      ],
      instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2",
    },
    quiz: { generate: "plural" },
  },

  // ── 7. Finale Champion (sentence-build) ─────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏆", title: "K2 Champion!", bg: "#FEF3C7" },
    bulletKeys: ["t7_b1"],
    interactive: {
      type: "sentence-build",
      fragments: ["t7_f1", "t7_f2", "t7_f3", "t7_f4"], // Ich, bin, ein, Champion!
      instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2",
    },
    quiz: { generate: "zeit_k2" },
  },

  // ── 8. Zwielaut-Mix (highlight-text) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "letter-pairs", pairs: [["ie", "ei"], ["äu", "eu"]], color: "#7C3AED" },
    bulletKeys: ["t8_b1", "t8_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"],
      correctIndices: [0],
      instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 9. Wortstamm (gap-fill) ────────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "Fahren", highlightChars: ["Fahr"], color: "#3B82F6" },
    bulletKeys: ["t9_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"],
      correctIndices: [3],
      instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 10. Nomen in Sätzen (match-pairs) ────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [ { text: "🐱", emoji: "Nomen", color: "#2563EB", bg: "#DBEAFE" } ] },
    bulletKeys: ["t10_b1", "t10_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"],
      correctIndices: [],
      instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2",
    },
    quiz: { question: "t10_q", choices: ["t10_qa","t10_qb","t10_qc","t10_qd"], answer: "t10_qa" },
  },

  // ── 11. Gegensätze (match-pairs) ────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "letter-pairs", pairs: [["groß", "klein"], ["hell", "dunkel"]], color: "#F59E0B" },
    bulletKeys: ["t11_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t11_w1", "t11_w2", "t11_w3", "t11_w4"],
      correctIndices: [1],
      instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2",
    },
    quiz: { generate: "gegensaetze_k2" },
  },

  // ── 12. Plural-Master (gap-fill) ────────────────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "icon-grid", items: [{ emoji: "🌳", label: "Baum" }, { emoji: "🌲🌳🌴", label: "Bäume" }] },
    bulletKeys: ["t12_b1", "t12_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t12_w1", "t12_w2", "t12_w3", "t12_w4"],
      correctIndices: [],
      instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2",
    },
    quiz: { question: "t12_q", choices: ["t12_qa","t12_qb","t12_qc","t12_qd"], answer: "t12_qa" },
  },

  // ── 13. Satzzeichen (gap-fill) ──────────────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [ { text: ".", color: "#6366F1", bg: "#E0E7FF" }, { text: "?", color: "#EC4899", bg: "#FCE7F3" } ] },
    bulletKeys: ["t13_b1", "t13_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      correctIndices: [0],
      instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2",
    },
    quiz: { generate: "satzzeichen_k1" },
  },

  // ── 14. Großschreibung (highlight-text) ────────────────── medium ──
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "text-bubbles", items: [ { text: "A", emoji: "Groß", color: "#7C3AED", bg: "#F3E8FF" }, { text: "a", emoji: "Klein", color: "#64748B", bg: "#F1F5F9" } ] },
    bulletKeys: ["t14_b1", "t14_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t14_w1", "t14_w2", "t14_w3", "t14_w4"],
      correctIndices: [0],
      instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2",
    },
    quiz: { generate: "nomen_k2" },
  },

  // ── 15. Große Prüfung Final (sentence-build) ─────────────── hard ──
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", title: "FINAL", bg: "#FEF3C7" },
    bulletKeys: ["t15_b1"],
    interactive: {
      type: "highlight-text",
      tokens: ["t15_w1", "t15_w2", "t15_w3", "t15_w4"],
      correctIndices: [1],
      instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2",
    },
    quiz: { generate: "verben_k2" },
  },
];
