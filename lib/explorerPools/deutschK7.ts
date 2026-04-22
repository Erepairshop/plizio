import type { PoolTopicDef } from "./types";

// ─── K7 Pool Template ──────────────────────────────────────────────────────────
// Islands:
//   i1 = Konjunktiv I              💭
//   i2 = Werden-Passiv             🔧
//   i3 = Passiv + Modalverb        ⚙️
//   i4 = Stilmittel                🎭
//   i5 = Kausal- & Konditionalsatz 🔀
//   i6 = Konzessiv- & Finalsatz    🎯
//   i7 = Temporalsatz              ⏱️
//   i8 = Infinitivkonstruktionen   🌿
//   i9 = Große Prüfung             🌟
//
// Struktur je Topic:
//   infoTitle, infoText, svg, bulletKeys?, hintKey?, interactive, quiz, difficulty?
//
// svg Typen: "two-groups" | "text-bubbles" | "article-noun" | "letter-circles" |
//   "word-syllables" | "compound-word" | "icon-grid" | "rhyme-pair" |
//   "sentence-display" | "word-display" | "simple-icon"
//
// WICHTIG bei two-groups:   border Feld PFLICHT!
// WICHTIG bei text-bubbles: color Feld PFLICHT in jedem item!
//
// interactive Typen: "block-drag" | "word-order" | "gap-fill" | "match-pairs" |
//   "drag-to-bucket" | "sentence-build" | "highlight-text" |
//   "physics-magnet" | "physics-stacker" | "physics-slingshot" | "physics-bucket"
//
// physics-magnet:    pairs: [{ left: "t1_l1", right: "t1_r1" }, ...]
// physics-slingshot: question: "t1_q", targets: [{ id: "1", text: "t1_t1", isCorrect: true }, ...]
// physics-stacker:   words: ["t1_w1","t1_w2","t1_w3"], correctOrder: [0,1,2]
//
// quiz: { question: "key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   ODER: { generate: "relativsatz_k7" }
//   Verfügbare Generatoren: "konjunktiv2" | "passiv" | "synonyme" | "antonyme"
//                           "steigerung" | "praeteritum" | "perfekt" | "plural"
//                           "nominativ" | "akkusativ" | "dativ" | "genitiv"
//
// Ziel: 15-20 Topics pro Pool für maximale Abwechslung!
// LABELS nur "de"!
// ──────────────────────────────────────────────────────────────────────────────


export const KONJ1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nachrichten-Zentrum (Konjunktiv I)",

    // T1 - Intro
    t1_title: "Was ist Konjunktiv I?",
    t1_text: "Wir nutzen den Konjunktiv I, um neutral zu berichten, was andere gesagt haben (Indirekte Rede).",
    t1_inst: "Welches Verb steht im Konjunktiv I?",
    t1_h1: "Suche nach der Endung -e.", t1_h2: "Er sagt, er 'komme' gleich.",
    t1_w1: "kommt", t1_w2: "komme", t1_w3: "kam", t1_w4: "käme",

    // T2 - Verb: sein
    t2_title: "Der Star: SEI",
    t2_text: "Das Verb 'sein' ist im Konjunktiv I unregelmäßig: ich sei, du sei(e)st, er sei, wir seien, ihr seiet, sie seien.",
    t2_inst: "Wähle die richtige Form von 'sein'!",
    t2_h1: "Dritte Person Einzahl (er/sie/es).", t2_h2: "Er sagt, er 'sei' bereit.",
    t2_sent2: "Sie behauptet, sie ___ krank.",
    t2_c1: "sei", t2_c2: "ist", t2_c3: "wäre", t2_c4: "seien",

    // T3 - Verb: haben
    t3_title: "Besitz im Konjunktiv I",
    t3_text: "Haben wird zu: habe, habest, habe, haben, habet, haben.",
    t3_inst: "Sortiere 'haben' in den Konjunktiv-Eimer!",
    t3_h1: "Suche die Form mit -e.", t3_h2: "habe.",
    t3_b3_1: "Konjunktiv I", t3_b3_2: "Indikativ",
    t3_i3_1: "habe", t3_i3_2: "hat", t3_i3_3: "haben", t3_i3_4: "hast",

    // T4 - Bildung (Stamm + e)
    t4_title: "Der Bauplan",
    t4_text: "Präsens-Stamm + Endung: -e, -est, -e, -en, -et, -en.",
    t4_inst: "Setze den Baustein richtig zusammen!",
    t4_h1: "geh- + -e.", t4_h2: "gehe.",
    t4_w4_1: "geh", t4_w4_2: "e",

    // T5 - Berichtsverben
    t5_title: "Wer sagt was?",
    t5_text: "Indirekte Rede folgt oft nach Verben wie sagen, meinen, behaupten oder berichten.",
    t5_inst: "Verbinde die Berichtsverben mit ihrer Bedeutung!",
    t5_h1: "behaupten = etwas sagen, das vielleicht nicht stimmt.",
    t5_ml5: "berichten", t5_mr5: "informieren",
    t5_ml5_2: "behaupten", t5_mr5_2: "feststellen",

    // T6 - Konj I vs II (Ersatzregel)
    t6_title: "Die Rettungsregel",
    t6_text: "Ist der Konjunktiv I gleich wie der Indikativ (z.B. wir gehen), weichen wir auf den Konjunktiv II (wir gingen) aus.",
    t6_inst: "Welche Form ist die korrekte Ersatzform (Konj II)?",
    t6_h1: "Suche das Präteritum mit Umlaut oder würde-Form.", t6_h2: "Sie sagen, sie 'gingen'.",
    t6_sent6: "Sie sagen, sie ___ (gehen) nach Hause.",
    t6_c6_1: "gingen", t6_c6_2: "gehen", t6_c6_3: "gehe", t6_c6_4: "ginge",

    // T7 - Indirekte Fragen (ob)
    t7_title: "Fragen ohne Fragezeichen",
    t7_text: "Ja/Nein-Fragen werden in der indirekten Rede mit 'ob' eingeleitet.",
    t7_inst: "Welches Bindewort leitet die Frage ein?",
    t7_h1: "Er fragt, ___ du kommst.", t7_h2: "ob.",
    t7_sent7: "Er fragt, ___ sie Zeit habe.",
    t7_c7_1: "ob", t7_c7_2: "dass", t7_c7_3: "wenn", t7_c7_4: "wie",

    // T8 - W-Fragen
    t8_title: "W-Fragen indirekt",
    t8_text: "W-Fragen behalten ihr Fragewort (wann, wie, wo), aber das Verb rutscht ans Ende.",
    t8_inst: "Baue den indirekten Fragesatz!",
    t8_h1: "Er möchte wissen, wann...", t8_h2: "...der Bus komme.",
    t8_f8_1: "Er fragt,", t8_f8_2: "wann", t8_f8_3: "der Zug", t8_f8_4: "ankomme.",

    // T9 - Modalverben: müsse
    t9_title: "Pflicht im Konjunktiv",
    t9_text: "Modalverben verlieren im Konjunktiv I oft ihren Umlaut (außer bei können/müssen). Beispiel: er müsse.",
    t9_inst: "Finde die richtige Konjunktiv-Form von müssen!",
    t9_h1: "er + müsse.", t9_h2: "müsse.",
    t9_q9: "Er sagt, er ___ gehen.",
    t9_t1: "müsse", t9_t2: "muss", t9_t3: "müsste", t9_t4: "musste",

    // T10 - Indirekter Befehl (sollen)
    t10_title: "Befehle weitergeben",
    t10_text: "Befehle werden in der indirekten Rede meist mit 'sollen' oder 'müssen' umschrieben.",
    t10_inst: "Wähle das passende Hilfsverb für den Befehl!",
    t10_h1: "Mama sagt: 'Räum auf!' -> Er sagt, ich ___ aufräumen.", t10_h2: "solle.",
    t10_sent10: "Der Lehrer sagt, wir ___ leise sein.",
    t10_c10: "sollen", t10_c10_2: "müssen", t10_c10_3: "sein", t10_c10_4: "hatten",

    // T11 - Vergangenheit (habe/sei + P2)
    t11_title: "Was war geschehen?",
    t11_text: "Vergangenheit: 'habe' oder 'sei' + Partizip II. Beispiel: er habe gesagt.",
    t11_inst: "Staple die Zeitform richtig!",
    t11_h1: "Hilfsverb (Konj I) + Partizip II.", t11_h2: "er + habe + gelacht.",
    t11_sw11_1: "er", t11_sw11_2: "habe", t11_sw11_3: "gelacht",

    // T12 - Futur I (werde + Inf)
    t12_title: "Blick in die Zukunft",
    t12_text: "Zukunft im Konjunktiv I: werde + Infinitiv. Beispiel: er werde kommen.",
    t12_inst: "Welche Form beschreibt die Zukunft?",
    t12_h1: "werde + kommen.", t12_h2: "er werde kommen.",
    t12_q12: "Sie sagt, sie ___ bald ___ .",
    t12_t12_1: "werde reisen", t12_t12_2: "würde reisen", t12_t12_3: "werdet reisen", t12_t12_4: "ist gereist",

    // T13 - Nachrichten-Check
    t13_title: "Nachrichten-Profi",
    t13_text: "In Zeitungen findest du oft Konjunktiv I. Erkenne ihn im Satz!",
    t13_inst: "Markiere das Konjunktiv I Verb!",
    t13_h1: "Suche das Verb mit der Endung -e.", t13_h2: "gebe.",
    t13_w13_1: "Der", t13_w13_2: "Minister", t13_w13_3: "sagte,", t13_w13_4: "es", t13_w13_5: "gebe", t13_w13_6: "keine", t13_w13_7: "Gefahr",

    // T14 - Höflichkeit & Distanz
    t14_title: "Distanz wahren",
    t14_text: "Konjunktiv I zeigt: Das ist nicht meine Meinung, ich zitiere nur.",
    t14_inst: "Welches Satzzeichen leitet die indirekte Rede oft ein?",
    t14_h1: "Es steht vor dem Nebensatz.", t14_h2: "Das Komma.",
    t14_q14: "Was trennt Haupt- und Nebensatz?",
    t14_ans14: "Komma", t14_ans14_2: "Punkt", t14_ans14_3: "Fragezeichen", t14_ans14_4: "Ausrufezeichen",

    // T15 - Magnet: Formen-Match
    t15_title: "Formen-Magnet",
    t15_text: "Párosítsd az alanyt a helyes Konjunktiv I alakkal!",
    t15_inst: "Használd a mágnest!",
    t15_h1: "ich habe, du habest, er habe.",
    t15_ml15: "ich", t15_mr15: "habe",
    t15_ml15_2: "du", t15_mr15_2: "habest",
    t15_ml15_3: "ihr", t15_mr15_3: "habet"
  },
  en: {
    explorer_title: "News center (subjunctive I)",

    // T1 - Intro
    t1_title: "What is Subjunctive I?",
    t1_text: "We use the subjunctive I to neutrally report what others have said (indirect speech).",
    t1_inst: "Which verb is in the subjunctive I?",
    t1_h1: "Look for the ending -e.", t1_h2: "He says he'll be 'coming' soon.",
    t1_w1: "comes", t1_w2: "come", t1_w3: "came", t1_w4: "would come",

    // T2 - Verb: sein
    t2_title: "The Star: BE",
    t2_text: "The verb 'to be' is irregular in the subjunctive I: I am, you are, he is, we are, you are, they are.",
    t2_inst: "Choose the correct form of 'to be'!",
    t2_h1: "Third person singular (he/she/it).", t2_h2: "He says he's 'ready'.",
    t2_sent2: "She claims she ___ sick.",
    t2_c1: "be", t2_c2: "is", t2_c3: "would be", t2_c4: "be",

    // T3 - Verb: haben
    t3_title: "Possession in the subjunctive I",
    t3_text: "To have becomes: have, have, have, have, have, have.",
    t3_inst: "Sort 'have' into the subjunctive bucket!",
    t3_h1: "Find the form with -e.", t3_h2: "have.",
    t3_b3_1: "Subjunctive I", t3_b3_2: "Indicative",
    t3_i3_1: "have", t3_i3_2: "has", t3_i3_3: "have", t3_i3_4: "have",

    // T4 - Bildung (Stamm + e)
    t4_title: "The blueprint",
    t4_text: "Present stem + ending: -e, -est, -e, -en, -et, -en.",
    t4_inst: "Put the building block together correctly!",
    t4_h1: "go- + -e.", t4_h2: "go.",
    t4_w4_1: "go", t4_w4_2: "e",

    // T5 - Berichtsverben
    t5_title: "Who says what?",
    t5_text: "Indirect speech often follows verbs such as say, mean, claim or report.",
    t5_inst: "Connect the reporting verbs with their meaning!",
    t5_h1: "claim = say something that may not be true.",
    t5_ml5: "report", t5_mr5: "inform",
    t5_ml5_2: "claim", t5_mr5_2: "determine",

    // T6 - Konj I vs II (Ersatzregel)
    t6_title: "The rescue rule",
    t6_text: "If the subjunctive I is the same as the indicative (e.g. we go), we switch to the subjunctive II (we went).",
    t6_inst: "Which form is the correct replacement form (Conj II)?",
    t6_h1: "Find the past tense with umlaut or would form.", t6_h2: "They say they 'went'.",
    t6_sent6: "They say they ___ (go) home.",
    t6_c6_1: "went", t6_c6_2: "go", t6_c6_3: "go", t6_c6_4: "would go",

    // T7 - Indirekte Fragen (ob)
    t7_title: "Questions without question marks",
    t7_text: "Yes/no questions are introduced in indirect speech with 'whether'.",
    t7_inst: "Which connective word introduces the question?",
    t7_h1: "He asks ___ you are coming.", t7_h2: "whether.",
    t7_sent7: "He asks ___ she has time.",
    t7_c7_1: "whether", t7_c7_2: "that", t7_c7_3: "if", t7_c7_4: "like",

    // T8 - W-Fragen
    t8_title: "W-questions indirectly",
    t8_text: "W-questions retain their question word (when, how, where), but the verb slides to the end.",
    t8_inst: "Build the indirect interrogative sentence!",
    t8_h1: "He wants to know when...", t8_h2: "...the bus is coming.",
    t8_f8_1: "He asks", t8_f8_2: "when", t8_f8_3: "the train", t8_f8_4: "arrive.",

    // T9 - Modalverben: müsse
    t9_title: "Obligation in the subjunctive",
    t9_text: "Modal verbs often lose their umlaut in the subjunctive I (except for can/must). Example: he must.",
    t9_inst: "Find the correct subjunctive form of must!",
    t9_h1: "he + must.", t9_h2: "must.",
    t9_q9: "He says he ___ go.",
    t9_t1: "must", t9_t2: "must", t9_t3: "would have to", t9_t4: "had to",

    // T10 - Indirekter Befehl (sollen)
    t10_title: "Pass orders",
    t10_text: "In indirect speech, commands are usually described as 'should' or 'must'.",
    t10_inst: "Choose the appropriate auxiliary verb for the command!",
    t10_h1: "Mom says: 'Clean up!' -> He says I ___ clean up.", t10_h2: "should.",
    t10_sent10: "The teacher says we ___ be quiet.",
    t10_c10: "should", t10_c10_2: "have to", t10_c10_3: "be", t10_c10_4: "had",

    // T11 - Vergangenheit (habe/sei + P2)
    t11_title: "What had happened?",
    t11_text: "Past: 'have' or 'be' + participle II. Example: he said.",
    t11_inst: "Stack the tense correctly!",
    t11_h1: "Auxiliary verb (conj I) + participle II.", t11_h2: "he + laughed.",
    t11_sw11_1: "he", t11_sw11_2: "have", t11_sw11_3: "laughed",

    // T12 - Futur I (werde + Inf)
    t12_title: "Looking into the future",
    t12_text: "Future in the subjunctive I: will + infinitive. Example: he will come.",
    t12_inst: "What shape describes the future?",
    t12_h1: "will + come.", t12_h2: "he will come.",
    t12_q12: "She says she ___ soon ___ .",
    t12_t12_1: "will travel", t12_t12_2: "would travel", t12_t12_3: "will travel", t12_t12_4: "has traveled",

    // T13 - Nachrichten-Check
    t13_title: "News professional",
    t13_text: "You often find subjunctive I in newspapers. Recognize it in the sentence!",
    t13_inst: "Mark the subjunctive I verb!",
    t13_h1: "Find the verb ending in -e.", t13_h2: "give.",
    t13_w13_1: "The", t13_w13_2: "Minister", t13_w13_3: "said,", t13_w13_4: "it", t13_w13_5: "give", t13_w13_6: "none", t13_w13_7: "Danger",

    // T14 - Höflichkeit & Distanz
    t14_title: "Keep your distance",
    t14_text: "Subjunctive I shows: That's not my opinion, I'm just quoting.",
    t14_inst: "Which punctuation mark often introduces indirect speech?",
    t14_h1: "It comes before the subordinate clause.", t14_h2: "The comma.",
    t14_q14: "What separates the main and subordinate clauses?",
    t14_ans14: "Comma", t14_ans14_2: "Period", t14_ans14_3: "Question mark", t14_ans14_4: "exclamation mark",

    // T15 - Magnet: Formen-Match
    t15_title: "Shape magnet",
    t15_text: "Párosítsd az alanyt a helyes subjunctive I alakkal!",
    t15_inst: "Használd a magnest!",
    t15_h1: "I have, you have, he has.",
    t15_ml15: "I", t15_mr15: "have",
    t15_ml15_2: "you", t15_mr15_2: "have",
    t15_ml15_3: "her", t15_mr15_3: "have"
  },
  hu: {
    explorer_title: "Hírközpont (I. alárendelt)",

    // T1 - Intro
    t1_title: "Mi az a szubjunktív I?",
    t1_text: "Az I kötőszót használjuk a mások által mondottak semleges jelentésére (közvetett beszéd).",
    t1_inst: "Melyik ige szerepel az I kötőszóban?",
    t1_h1: "Keresse meg az -e végződést.", t1_h2: "Azt mondja, hamarosan „jön”.",
    t1_w1: "jön", t1_w2: "gyere", t1_w3: "jött", t1_w4: "jönne",

    // T2 - Verb: sein
    t2_title: "A csillag: BE",
    t2_text: "A lenni ige szabálytalan az I kötőszóban: én vagyok, te vagy, ő van, mi vagyunk, te vagy, ők.",
    t2_inst: "Válassza ki a 'lenni' helyes formáját!",
    t2_h1: "Harmadik személy egyes szám (he/she/it).", t2_h2: "Azt mondja, készen áll.",
    t2_sent2: "Azt állítja, hogy ___ beteg.",
    t2_c1: "legyen", t2_c2: "van", t2_c3: "lenne", t2_c4: "legyen",

    // T3 - Verb: haben
    t3_title: "Birtoklás a kötőszóban I",
    t3_text: "A rendelkezni: van, van, van, van, van, van.",
    t3_inst: "Rendezze a „van” szót az alárendelt vödörbe!",
    t3_h1: "Keresse meg az űrlapot az -e gombbal.", t3_h2: "van.",
    t3_b3_1: "Szubjektív I", t3_b3_2: "Tájékoztató jellegű",
    t3_i3_1: "van", t3_i3_2: "rendelkezik", t3_i3_3: "van", t3_i3_4: "van",

    // T4 - Bildung (Stamm + e)
    t4_title: "A tervrajz",
    t4_text: "Jelen tő + végződés: -e, -est, -e, -en, -et, -en.",
    t4_inst: "Helyezze össze az építőkockát helyesen!",
    t4_h1: "go- + -e.", t4_h2: "megy.",
    t4_w4_1: "menj", t4_w4_2: "e",

    // T5 - Berichtsverben
    t5_title: "Ki mit mond?",
    t5_text: "A közvetett beszéd gyakran követi az olyan igéket, mint a mond, jelent, állít vagy jelent.",
    t5_inst: "Kösd össze a jelentéstevő igéket jelentésükkel!",
    t5_h1: "állítás = mondj valamit, ami esetleg nem igaz.",
    t5_ml5: "jelentést", t5_mr5: "tájékoztatni",
    t5_ml5_2: "követelés", t5_mr5_2: "határozzák meg",

    // T6 - Konj I vs II (Ersatzregel)
    t6_title: "A mentési szabály",
    t6_text: "Ha az I. kötőszó megegyezik a jelzővel (pl. megyünk), akkor átváltunk a II. kötőszóra (mentünk).",
    t6_inst: "Melyik forma a helyes helyettesítő űrlap (Conj II)?",
    t6_h1: "Keresse meg a múlt időt az umlaut vagy a would form alakkal.", t6_h2: "Azt mondják, \"elmentek\".",
    t6_sent6: "Azt mondják, ___ (mennek) haza.",
    t6_c6_1: "ment", t6_c6_2: "menj", t6_c6_3: "menj", t6_c6_4: "menne",

    // T7 - Indirekte Fragen (ob)
    t7_title: "Kérdések kérdőjel nélkül",
    t7_text: "Az igen/nem kérdéseket a közvetett beszédben a „vagy-e” szóval vezetjük be.",
    t7_inst: "Melyik kötőszó vezeti be a kérdést?",
    t7_h1: "Megkérdezi: ___ jössz.", t7_h2: "hogy vajon.",
    t7_sent7: "Megkérdezi ___ van ideje.",
    t7_c7_1: "hogy vajon", t7_c7_2: "hogy", t7_c7_3: "ha", t7_c7_4: "tetszik",

    // T8 - W-Fragen
    t8_title: "W-kérdések közvetve",
    t8_text: "A W-kérdések megtartják kérdőszavaikat (mikor, hogyan, hol), de az ige a végére csúszik.",
    t8_inst: "Építsd fel az indirekt kérdő mondatot!",
    t8_h1: "Tudni akarja, mikor...", t8_h2: "...jön a busz.",
    t8_f8_1: "Kérdi", t8_f8_2: "mikor", t8_f8_3: "a vonat", t8_f8_4: "megérkezik.",

    // T9 - Modalverben: müsse
    t9_title: "Kötelezettség a kötőszóban",
    t9_text: "A modális igék gyakran elvesztik az igéket az I kötőszóban (kivéve a can/must). Példa: muszáj.",
    t9_inst: "Keresse meg a kell megfelelő kötőszót!",
    t9_h1: "ő + kell.", t9_h2: "kell.",
    t9_q9: "Azt mondja, ___ megy.",
    t9_t1: "kell", t9_t2: "kell", t9_t3: "kellene", t9_t4: "kellett",

    // T10 - Indirekter Befehl (sollen)
    t10_title: "Adj át parancsokat",
    t10_text: "A közvetett beszédben a parancsokat általában úgy írják le, mint „kell” vagy „kell”.",
    t10_inst: "Válassza ki a parancshoz a megfelelő segédigét!",
    t10_h1: "Anya azt mondja: \"Takaríts!\" -> Azt mondja, ___ takarítok.", t10_h2: "kellene.",
    t10_sent10: "A tanár azt mondja, ___ maradjunk csendben.",
    t10_c10: "kellene", t10_c10_2: "muszáj", t10_c10_3: "legyen", t10_c10_4: "volt",

    // T11 - Vergangenheit (habe/sei + P2)
    t11_title: "Mi történt?",
    t11_text: "Múlt: 'van' vagy 'legyen' + igenév II. Példa: mondta.",
    t11_inst: "Halmozd fel helyesen az igeidőt!",
    t11_h1: "Segédige (conj I) + igenév II.", t11_h2: "ő + nevetett.",
    t11_sw11_1: "ő", t11_sw11_2: "van", t11_sw11_3: "nevetett",

    // T12 - Futur I (werde + Inf)
    t12_title: "A jövőbe tekintve",
    t12_text: "Jövő a kötőszóban I: akarat + infinitivus. Példa: eljön.",
    t12_inst: "Milyen alakzat írja le a jövőt?",
    t12_h1: "fog + jönni.", t12_h2: "jönni fog.",
    t12_q12: "Azt mondja, hogy ___ hamarosan ___.",
    t12_t12_1: "utazni fog", t12_t12_2: "utazna", t12_t12_3: "utazni fog", t12_t12_4: "utazott",

    // T13 - Nachrichten-Check
    t13_title: "Hírek profi",
    t13_text: "Gyakran találsz az újságokban az I-t. Ismerd fel a mondatban!",
    t13_inst: "Jelölje be az I kötőszót!",
    t13_h1: "Keresse meg az -e végződésű igét.", t13_h2: "ad.",
    t13_w13_1: "A", t13_w13_2: "miniszter", t13_w13_3: "mondta,", t13_w13_4: "azt", t13_w13_5: "adni", t13_w13_6: "egyik sem", t13_w13_7: "Veszély",

    // T14 - Höflichkeit & Distanz
    t14_title: "Tartsa a távolságot",
    t14_text: "Az I. szubjunktív mutatja: Ez nem az én véleményem, csak idézek.",
    t14_inst: "Melyik írásjel vezet gyakran közvetett beszédet?",
    t14_h1: "Az alárendelt záradék elé kerül.", t14_h2: "A vessző.",
    t14_q14: "Mi különbözteti meg a fő- és az alárendelt tagmondatot?",
    t14_ans14: "Vessző", t14_ans14_2: "Időszak", t14_ans14_3: "Kérdőjel", t14_ans14_4: "felkiáltójel",

    // T15 - Magnet: Formen-Match
    t15_title: "Forma mágnes",
    t15_text: "Párosítsd az alanyt a helyes subjunctive I alakkal!",
    t15_inst: "Használd a magnest!",
    t15_h1: "Nekem van, neked van, neki van.",
    t15_ml15: "I", t15_mr15: "van",
    t15_ml15_2: "te", t15_mr15_2: "van",
    t15_ml15_3: "őt", t15_mr15_3: "van"
  },
  ro: {
    explorer_title: "Centrul de știri (conjunctiv I)",

    // T1 - Intro
    t1_title: "Ce este conjunctivul I?",
    t1_text: "Folosim conjunctivul I pentru a raporta în mod neutru ceea ce au spus alții (vorbire indirectă).",
    t1_inst: "Care verb este la conjunctiv I?",
    t1_h1: "Căutați finalul -e.", t1_h2: "El spune că va „veni” în curând.",
    t1_w1: "vine", t1_w2: "vino", t1_w3: "a venit", t1_w4: "ar veni",

    // T2 - Verb: sein
    t2_title: "Steaua: FI",
    t2_text: "Verbul „a fi” este neregulat la conjunctiv I: eu sunt, tu ești, el este, noi suntem, tu ești, ei sunt.",
    t2_inst: "Alegeți forma corectă de „a fi”!",
    t2_h1: "Persoana a treia singular (el/ea/it).", t2_h2: "El spune că este „gata”.",
    t2_sent2: "Ea susține că ___ este bolnavă.",
    t2_c1: "fii", t2_c2: "este", t2_c3: "ar fi", t2_c4: "fii",

    // T3 - Verb: haben
    t3_title: "Posesia la conjunctiv I",
    t3_text: "A avea devine: a avea, a avea, a avea, a avea, a avea, a avea.",
    t3_inst: "Sortați „au” în găleată de conjunctiv!",
    t3_h1: "Găsiți forma cu -e.", t3_h2: "au.",
    t3_b3_1: "Conjunctiv I", t3_b3_2: "Indicativ",
    t3_i3_1: "au", t3_i3_2: "are", t3_i3_3: "au", t3_i3_4: "au",

    // T4 - Bildung (Stamm + e)
    t4_title: "Planul",
    t4_text: "Tulpina prezentă + desinență: -e, -est, -e, -en, -et, -en.",
    t4_inst: "Puneți blocurile împreună corect!",
    t4_h1: "merge- + -e.", t4_h2: "merge.",
    t4_w4_1: "du-te", t4_w4_2: "e",

    // T5 - Berichtsverben
    t5_title: "Cine spune ce?",
    t5_text: "Vorbirea indirectă urmează adesea verbe precum spune, înseamnă, pretinde sau raportează.",
    t5_inst: "Conectați verbele de raportare cu semnificația lor!",
    t5_h1: "revendicare = spune ceva care poate să nu fie adevărat.",
    t5_ml5: "raport", t5_mr5: "informează",
    t5_ml5_2: "revendica", t5_mr5_2: "determina",

    // T6 - Konj I vs II (Ersatzregel)
    t6_title: "Regula de salvare",
    t6_text: "Dacă conjunctivul I este același cu indicativul (de exemplu, mergem), trecem la conjunctivul II (am mers).",
    t6_inst: "Care formă este forma corectă de înlocuire (Conj II)?",
    t6_h1: "Găsiți timpul trecut cu umlaut sau ar forma.", t6_h2: "Ei spun că „s-au dus”.",
    t6_sent6: "Ei spun că ___ (merg) acasă.",
    t6_c6_1: "a mers", t6_c6_2: "du-te", t6_c6_3: "du-te", t6_c6_4: "ar merge",

    // T7 - Indirekte Fragen (ob)
    t7_title: "Întrebări fără semne de întrebare",
    t7_text: "Întrebările da/nu sunt introduse în vorbirea indirectă cu „dacă”.",
    t7_inst: "Care cuvânt conjunctiv introduce întrebarea?",
    t7_h1: "El întreabă ___ tu vii.", t7_h2: "dacă.",
    t7_sent7: "El întreabă ___ ea are timp.",
    t7_c7_1: "dacă", t7_c7_2: "că", t7_c7_3: "dacă", t7_c7_4: "ca",

    // T8 - W-Fragen
    t8_title: "W-întrebări indirect",
    t8_text: "Întrebările W își păstrează cuvântul de întrebare (când, cum, unde), dar verbul alunecă până la sfârșit.",
    t8_inst: "Construiește propoziția interogativă indirectă!",
    t8_h1: "Vrea să știe când...", t8_h2: "... vine autobuzul.",
    t8_f8_1: "întreabă el", t8_f8_2: "când", t8_f8_3: "trenul", t8_f8_4: "ajunge.",

    // T9 - Modalverben: müsse
    t9_title: "Obligație la conjunctiv",
    t9_text: "Verbele modale își pierd adesea umlaut-ul la conjunctiv I (cu excepția poate/trebuie). Exemplu: el trebuie.",
    t9_inst: "Găsiți forma corectă de conjunctiv a lui must!",
    t9_h1: "el + trebuie.", t9_h2: "necesitate.",
    t9_q9: "El spune că ___ pleacă.",
    t9_t1: "trebuie", t9_t2: "trebuie", t9_t3: "ar trebui", t9_t4: "trebuia",

    // T10 - Indirekter Befehl (sollen)
    t10_title: "Treceți comenzi",
    t10_text: "În vorbirea indirectă, comenzile sunt de obicei descrise ca „trebuie” sau „trebuie”.",
    t10_inst: "Alegeți verbul auxiliar potrivit pentru comandă!",
    t10_h1: "Mama spune: „Fă curățenie!” -> El spune că ___ fac curățenie.", t10_h2: "ar trebui.",
    t10_sent10: "Profesorul spune că ___ tăcem.",
    t10_c10: "ar trebui", t10_c10_2: "trebuie", t10_c10_3: "fii", t10_c10_4: "avut",

    // T11 - Vergangenheit (habe/sei + P2)
    t11_title: "Ce sa întâmplat?",
    t11_text: "Trecut: „au” sau „fi” + participiu II. Exemplu: a spus el.",
    t11_inst: "Stivuiți timpul corect!",
    t11_h1: "Verb auxiliar (conj I) + participiu II.", t11_h2: "el + a râs.",
    t11_sw11_1: "el", t11_sw11_2: "au", t11_sw11_3: "a râs",

    // T12 - Futur I (werde + Inf)
    t12_title: "Privind în viitor",
    t12_text: "Viitor la conjunctiv I: voință + infinitiv. Exemplu: va veni.",
    t12_inst: "Ce formă descrie viitorul?",
    t12_h1: "va + veni.", t12_h2: "el va veni.",
    t12_q12: "Ea spune că ___ în curând ___ .",
    t12_t12_1: "va călători", t12_t12_2: "ar călători", t12_t12_3: "va călători", t12_t12_4: "a călătorit",

    // T13 - Nachrichten-Check
    t13_title: "Profesionist de știri",
    t13_text: "Găsești adesea conjunctivul I în ziare. Recunoaște-l în propoziție!",
    t13_inst: "Marcați verbul la conjunctiv I!",
    t13_h1: "Găsiți verbul care se termină în -e.", t13_h2: "da.",
    t13_w13_1: "The", t13_w13_2: "ministru", t13_w13_3: "a spus,", t13_w13_4: "ea", t13_w13_5: "da", t13_w13_6: "nici unul", t13_w13_7: "Pericol",

    // T14 - Höflichkeit & Distanz
    t14_title: "Păstrează-ți distanța",
    t14_text: "Conjunctivul I arată: Nu asta e părerea mea, doar citez.",
    t14_inst: "Care semn de punctuație introduce adesea vorbirea indirectă?",
    t14_h1: "Ea vine înaintea propoziției subordonate.", t14_h2: "virgula.",
    t14_q14: "Ce separă propozițiile principale și propozițiile subordonate?",
    t14_ans14: "virgulă", t14_ans14_2: "Perioada", t14_ans14_3: "Semnul întrebării", t14_ans14_4: "semnul exclamării",

    // T15 - Magnet: Formen-Match
    t15_title: "Forma magnet",
    t15_text: "Párosítsd az alanyt un conjunctiv helyes I alakkal!",
    t15_inst: "Használd un magnet!",
    t15_h1: "Eu am, tu ai, el are.",
    t15_ml15: "eu", t15_mr15: "au",
    t15_ml15_2: "tu", t15_mr15_2: "au",
    t15_ml15_3: "ea", t15_mr15_3: "au"
  }
};

export const KONJ1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "word-display", word: "komme", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t1_inst", targets: [{ id: "1", text: "t1_w2", isCorrect: true }, { id: "2", text: "t1_w1", isCorrect: false }, { id: "3", text: "t1_w3", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "sei", color: "#3B82F6", bg: "#F1F5F9" }, { text: "seien", color: "#3B82F6", bg: "#F1F5F9" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "easy",
    svg: { type: "two-groups", left: { items: ["t3_i3_1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t3_i3_2"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "k1", label: "t3_b3_1" }, { id: "ind", label: "t3_b3_2" }], items: [{ text: "t3_i3_1", bucketId: "k1" }, { text: "t3_i3_2", bucketId: "ind" }, { text: "t3_i3_3", bucketId: "k1" }, { text: "t3_i3_4", bucketId: "ind" }], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "easy",
    svg: { type: "compound-word", word1: "geh-", word2: "-e", result: "geh-+-e", color: "#6366F1" },
    interactive: { type: "word-order", words: ["t4_w4_1", "t4_w4_2"], correctOrder: [0, 1], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🗣️", label: "sagen" }, { emoji: "📰", label: "berichten" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_ml5", right: "t5_mr5" }, { left: "t5_ml5_2", right: "t5_mr5_2" }], instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "hard",
    svg: { type: "letter-circles", letters: ["K", "II"], color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "letter-circles", letters: ["?", "!", ".", "…"], color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "sentence-build", fragments: ["t8_f8_1", "t8_f8_2", "t8_f8_3", "t8_f8_4"], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "müsse", color: "#3B82F6", bg: "#DBEAFE" }] },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_t1", isCorrect: true }, { id: "2", text: "t9_t2", isCorrect: false }, { id: "3", text: "t9_t3", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "medium",
    svg: { type: "article-noun", article: "Der", articleColor: "#1D4ED8", noun: "Befehl" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📜" }, { emoji: "✒️" }, { emoji: "📖" }, { emoji: "🔍" }] },
    interactive: { type: "physics-stacker", words: ["t11_sw11_1", "t11_sw11_2", "t11_sw11_3"], correctOrder: [0, 1, 2], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "word-display", word: "werde kommen", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_t12_1", isCorrect: true }, { id: "2", text: "t12_t12_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4", "t13_w13_5", "t13_w13_6", "t13_w13_7"], correctIndices: [4], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🗞️" }, { emoji: "📰" }, { emoji: "📋" }, { emoji: "🔍" }] },
    interactive: { type: "gap-fill", sentence: "Ich sage ___ er komme.", choices: [",", ".", "!", "?"], correctIndex: 0, instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { question: "t14_q14", choices: ["t14_ans14", "t14_ans14_2", "t14_ans14_3", "t14_ans14_4"], answer: "t14_ans14" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t15_ml15", right: "t15_mr15" }, { left: "t15_ml15_2", right: "t15_mr15_2" }, { left: "t15_ml15_3", right: "t15_mr15_3" }], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  }
];

export const PASSIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Prozess-Fabrik (Passiv)",

    // T1 - Intro: Was ist Passiv?
    t1_title: "Was passiert hier?",
    t1_text: "Im Passiv ist die Handlung wichtig, nicht wer sie ausführt. 'Der Apfel wird gegessen.'",
    t1_inst: "Welcher Satz steht im Passiv?",
    t1_h1: "Suche nach einer Form von 'werden' und einem Partizip II.",
    t1_q1: "Finde das Passiv:",
    t1_ans1: "Das Brot wird gebacken.", t1_ans2: "Ich backe Brot.",

    // T2 - Präsens Passiv (wird)
    t2_title: "Gegenwart (Präsens)",
    t2_text: "Bildung: werden (Präsens) + Partizip II. 'Das Auto wird repariert.'",
    t2_inst: "Wähle die richtige Form von 'werden'!",
    t2_h1: "Einzahl (Singular): wird. Mehrzahl (Plural): werden.",
    t2_sent2: "Die Pakete ___ heute verschickt.",
    t2_c2_1: "werden", t2_c2_2: "wird", t2_c2_3: "worden", t2_c2_4: "wurde",

    // T3 - Präteritum Passiv (wurde)
    t3_title: "Vergangenheit (Präteritum)",
    t3_text: "Bildung: wurde + Partizip II. 'Das Haus wurde 1990 gebaut.'",
    t3_inst: "Setze das Präteritum Passiv ein!",
    t3_h1: "Es ist bereits passiert (Einzahl).",
    t3_sent3: "Der Dieb ___ gestern gefasst.",
    t3_c3_1: "wurde", t3_c3_2: "wird", t3_c3_3: "ist", t3_c3_4: "war",

    // T4 - Perfekt Passiv (ist ... worden)
    t4_title: "Perfekt Passiv",
    t4_text: "Bildung: sein + Partizip II + worden. Achtung: GEWORDEN gibt es hier nicht!",
    t4_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t4_h1: "Hilfsverb 'ist' an Position 2, 'worden' ganz am Ende.",
    t4_w4_1: "Die Tür", t4_w4_2: "ist", t4_w4_3: "geöffnet", t4_w4_4: "worden.",

    // T5 - Plusquamperfekt Passiv (war ... worden)
    t5_title: "Vorvergangenheit",
    t5_text: "Bildung: war + Partizip II + worden. Das passierte vor einem anderen Ereignis.",
    t5_inst: "Welches Hilfsverb fehlt für das Plusquamperfekt?",
    t5_h1: "Die Präteritum-Form von 'sein'.",
    t5_sent5: "Nachdem der Brief geschrieben ___ ___ , wurde er abgeschickt.",
    t5_c5_1: "worden war", t5_c5_2: "worden ist", t5_c5_3: "worden wird", t5_c5_4: "war",

    // T6 - Futur I Passiv (wird ... werden)
    t6_title: "Zukunft (Futur I)",
    t6_text: "Bildung: wird + Partizip II + werden. 'Es wird gemacht werden.'",
    t6_inst: "Staple die Verben für die Zukunft!",
    t6_h1: "wird + Partizip + werden.",
    t6_sw6_1: "Das Projekt", t6_sw6_2: "wird", t6_sw6_3: "beendet", t6_sw6_4: "werden.",

    // T7 - Täter nennen (von + Dativ)
    t7_title: "Der Täter (von)",
    t7_text: "Wenn wir den Täter im Passiv nennen, nutzen wir 'von' + Dativ (Personen/Urheber).",
    t7_inst: "Sortiere nach der richtigen Präposition!",
    t7_h1: "Personen = von. Mittel/Werkzeuge = durch.",
    t7_b7_1: "von (Person) 👤", t7_b7_2: "durch (Mittel) ⚙️",
    t7_i7_1: "von dem Lehrer", t7_i7_2: "durch den Wind", t7_i7_3: "von der Mutter", t7_i7_4: "durch das Feuer",

    // T8 - Instrument (durch + Akkusativ)
    t8_title: "Mittel & Wege (durch)",
    t8_text: "Für Instrumente, Mittel oder Ursachen nutzen wir 'durch' + Akkusativ.",
    t8_inst: "Verbinde das Instrument mit der Handlung!",
    t8_h1: "durch den Wind -> weggeweht.",
    t8_ml8: "durch den Wind", t8_mr8: "weggeweht",
    t8_ml8_2: "durch den Regen", t8_mr8_2: "nass geworden",

    // T9 - Umwandlung: Aktiv zu Passiv
    t9_title: "Aktiv ➔ Passiv",
    t9_text: "Das Akkusativ-Objekt wird zum Subjekt. 'Ich (S) esse den Apfel (O)' -> 'Der Apfel (S) wird gegessen.'",
    t9_inst: "Baue den Passiv-Satz aus den Bruchstücken!",
    t9_h1: "Aktiv: Der Mechaniker repariert das Auto.",
    t9_f9_1: "Das Auto", t9_f9_2: "wird", t9_f9_3: "vom Mechaniker", t9_f9_4: "repariert.",

    // T10 - Dativ-Objekt Falle
    t10_title: "Die Dativ-Falle",
    t10_text: "Dativ-Objekte bleiben im Passiv im Dativ! 'Er hilft mir' -> 'Mir wird geholfen.'",
    t10_inst: "Welches Pronomen ist richtig?",
    t10_h1: "Dativ: mir, dir, ihm, uns, euch, ihnen.",
    t10_sent10: "___ wird von allen gratuliert.",
    t10_c10_1: "Ihm", t10_c10_2: "Er", t10_c10_3: "Ihn", t10_c10_4: "Seiner",

    // T11 - Passiv ohne Subjekt (Es wird...)
    t11_title: "Es wird getanzt!",
    t11_text: "Verben ohne Akkusativ-Objekt bilden das Passiv mit 'es' oder ganz ohne Subjekt.",
    t11_inst: "Markiere das unpersönliche Passiv!",
    t11_h1: "Suche nach Sätzen wie 'Es wird...' oder 'Dort wird...'.",
    t11_w11_1: "In", t11_w11_2: "der", t11_w11_3: "Disco", t11_w11_4: "wird", t11_w11_5: "viel", t11_w11_6: "gelacht",

    // T12 - Magnet: Zeitformen Match
    t12_title: "Zeit-Magnet",
    t12_text: "Párosítsd a mondatokat a megfelelő igeidővel!",
    t12_inst: "Használd a mágnest!",
    t12_h1: "wird = Präsens, wurde = Präteritum.",
    t12_ml12: "Es wird gemacht.", t12_mr12: "Präsens",
    t12_ml12_2: "Es wurde gemacht.", t12_mr12_2: "Präteritum",
    t12_ml12_3: "Es ist gemacht worden.", t12_mr12_3: "Perfekt",

    // T13 - Partizip II Check
    t13_title: "Das Partizip-Ziel",
    t13_text: "Im Passiv steht das Partizip II immer am Ende (Satzklammer).",
    t13_inst: "Schieße auf das richtige Partizip II!",
    t13_h1: "Was ist das Partizip von 'rufen'?", t13_h2: "gerufen.",
    t13_q13: "Das Kind wird ___ .",
    t13_t13_1: "gerufen", t13_t13_2: "rufen", t13_t13_3: "rief", t13_t13_4: "ruft",

    // T14 - Werden: Passiv vs. Futur
    t14_title: "Passiv oder Futur?",
    t14_text: "'Werden' kann Passiv (wird gebaut) oder Futur (wird bauen) sein.",
    t14_inst: "Sortiere die 'werden'-Sätze!",
    t14_h1: "Passiv braucht ein Partizip II (ge-). Futur braucht einen Infinitiv.",
    t14_b14_1: "Passiv 📦", t14_b14_2: "Futur 🚀",
    t14_i14_1: "Er wird gefragt.", t14_i14_2: "Er wird fragen.", t14_i14_3: "Wir werden gesucht.", t14_i14_4: "Wir werden suchen.",

    // T15 - Finale: Prozess-Meister
    t15_title: "Passiv-Abschluss",
    t15_text: "Kannst du einen komplexen Satz im Präteritum Passiv bilden?",
    t15_inst: "Staple die Wörter zum Präteritum Passiv!",
    t15_h1: "wurde + Partizip II.",
    t15_sw15_1: "Das Tor", t15_sw15_2: "wurde", t15_sw15_3: "geschlossen.",
  },
  en: {
    explorer_title: "Process Factory (Passive)",

    // T1 - Intro: Was ist Passiv?
    t1_title: "What's happening here?",
    t1_text: "In the passive voice, it is the action that is important, not who does it. 'The apple will be eaten.'",
    t1_inst: "Which sentence is in the passive voice?",
    t1_h1: "Look for a form of 'become' and a participle II.",
    t1_q1: "Find the passive voice:",
    t1_ans1: "The bread is baked.", t1_ans2: "I bake bread.",

    // T2 - Präsens Passiv (wird)
    t2_title: "present (present)",
    t2_text: "Education: become (present) + participle II. 'The car is being repaired.'",
    t2_inst: "Choose the correct form of 'become'!",
    t2_h1: "Singular (singular): will. Plural: become.",
    t2_sent2: "The packages ___ shipped today.",
    t2_c2_1: "become", t2_c2_2: "will", t2_c2_3: "been", t2_c2_4: "became",

    // T3 - Präteritum Passiv (wurde)
    t3_title: "Past (past tense)",
    t3_text: "Education: was + participle II. 'The house was built in 1990.'",
    t3_inst: "Use the past tense passive!",
    t3_h1: "It has already happened (singular).",
    t3_sent3: "The thief ___ caught yesterday.",
    t3_c3_1: "became", t3_c3_2: "will", t3_c3_3: "is", t3_c3_4: "was",

    // T4 - Perfekt Passiv (ist ... worden)
    t4_title: "Perfect passive",
    t4_text: "Education: be + participle II + become. Attention: there is no BECOME here!",
    t4_inst: "Put the sentence in the correct order!",
    t4_h1: "Auxiliary verb 'is' in position 2, 'become' at the very end.",
    t4_w4_1: "The door", t4_w4_2: "is", t4_w4_3: "opened", t4_w4_4: "been.",

    // T5 - Plusquamperfekt Passiv (war ... worden)
    t5_title: "Pre-past",
    t5_text: "Education: was + participle II + became. This happened before another event.",
    t5_inst: "Which auxiliary verb is missing for the past perfect?",
    t5_h1: "The past tense form of 'to be'.",
    t5_sent5: "After the letter was written ___ ___ , it was sent.",
    t5_c5_1: "had been", t5_c5_2: "has been", t5_c5_3: "will be", t5_c5_4: "was",

    // T6 - Futur I Passiv (wird ... werden)
    t6_title: "Future (Future I)",
    t6_text: "Education: will + participle II + become. 'It will be done.'",
    t6_inst: "Stack the verbs for the future!",
    t6_h1: "will + participle + become.",
    t6_sw6_1: "The project", t6_sw6_2: "will", t6_sw6_3: "ended", t6_sw6_4: "become.",

    // T7 - Täter nennen (von + Dativ)
    t7_title: "The perpetrator (of)",
    t7_text: "If we name the perpetrator in the passive voice, we use 'von' + dative (persons/authors).",
    t7_inst: "Sort by the correct preposition!",
    t7_h1: "People = from. Means/tools = through.",
    t7_b7_1: "from (person) 👤", t7_b7_2: "by (means) ⚙️",
    t7_i7_1: "from the teacher", t7_i7_2: "by the wind", t7_i7_3: "from the mother", t7_i7_4: "through the fire",

    // T8 - Instrument (durch + Akkusativ)
    t8_title: "Means & Ways (through)",
    t8_text: "For instruments, means or causes we use 'through' + accusative.",
    t8_inst: "Connect the instrument with the action!",
    t8_h1: "blown away by the wind.",
    t8_ml8: "by the wind", t8_mr8: "blown away",
    t8_ml8_2: "through the rain", t8_mr8_2: "got wet",

    // T9 - Umwandlung: Aktiv zu Passiv
    t9_title: "Active ➔ Passive",
    t9_text: "The accusative object becomes the subject. 'I (S) eat the apple (O)' -> 'The apple (S) is eaten.'",
    t9_inst: "Build the passive sentence from the fragments!",
    t9_h1: "Active: The mechanic repairs the car.",
    t9_f9_1: "The car", t9_f9_2: "will", t9_f9_3: "from the mechanic", t9_f9_4: "repaired.",

    // T10 - Dativ-Objekt Falle
    t10_title: "The dative trap",
    t10_text: "Dative objects remain in the passive in the dative! 'He helps me' -> 'I am helped.'",
    t10_inst: "Which pronoun is correct?",
    t10_h1: "Dative: me, you, him, us, you, them.",
    t10_sent10: "___ is congratulated by everyone.",
    t10_c10_1: "Him", t10_c10_2: "He", t10_c10_3: "Him", t10_c10_4: "His",

    // T11 - Passiv ohne Subjekt (Es wird...)
    t11_title: "There's dancing!",
    t11_text: "Verbs without an accusative object form the passive with 'es' or without a subject at all.",
    t11_inst: "Mark the impersonal passive!",
    t11_h1: "Look for phrases like 'It will...' or 'There will...'.",
    t11_w11_1: "In", t11_w11_2: "the", t11_w11_3: "Disco", t11_w11_4: "will", t11_w11_5: "a lot", t11_w11_6: "laughed",

    // T12 - Magnet: Zeitformen Match
    t12_title: "Time magnet",
    t12_text: "Párosítsd a mondatokat a megfelelő igeidővel!",
    t12_inst: "Használd a magnest!",
    t12_h1: "will = present, was = past tense.",
    t12_ml12: "It is being done.", t12_mr12: "present tense",
    t12_ml12_2: "It was done.", t12_mr12_2: "Past tense",
    t12_ml12_3: "It's been done.", t12_mr12_3: "Perfect",

    // T13 - Partizip II Check
    t13_title: "The participle target",
    t13_text: "In the passive voice, the participle II is always at the end (clause).",
    t13_inst: "Shoot for the correct participle II!",
    t13_h1: "What is the participle of 'call'?", t13_h2: "called.",
    t13_q13: "The child will be ___.",
    t13_t13_1: "called", t13_t13_2: "call", t13_t13_3: "shouted", t13_t13_4: "calls",

    // T14 - Werden: Passiv vs. Futur
    t14_title: "Passive or future tense?",
    t14_text: "'Become' can be passive (will build) or future tense (will build).",
    t14_inst: "Sort the 'will' sentences!",
    t14_h1: "Passive needs a participle II (ge-). Future tense needs an infinitive.",
    t14_b14_1: "Passive 📦", t14_b14_2: "Future tense 🚀",
    t14_i14_1: "He is asked.", t14_i14_2: "He will ask.", t14_i14_3: "We are wanted.", t14_i14_4: "We will search.",

    // T15 - Finale: Prozess-Meister
    t15_title: "Passive conclusion",
    t15_text: "Can you form a complex sentence in the past passive?",
    t15_inst: "Stack the words into the past tense passive!",
    t15_h1: "became + participle II.",
    t15_sw15_1: "The gate", t15_sw15_2: "became", t15_sw15_3: "closed.",
  },
  hu: {
    explorer_title: "Feldolgozó gyár (passzív)",

    // T1 - Intro: Was ist Passiv?
    t1_title: "Mi történik itt?",
    t1_text: "A passzív hangon a cselekvés a fontos, nem pedig az, hogy ki csinálja. – Az almát megeszik.",
    t1_inst: "Melyik mondat szól a passzív hangon?",
    t1_h1: "Keresse a „levált” alakját és a melléknévi igenévet II.",
    t1_q1: "Keresse meg a passzív hangot:",
    t1_ans1: "A kenyér megsült.", t1_ans2: "kenyeret sütök.",

    // T2 - Präsens Passiv (wird)
    t2_title: "jelen (jelen)",
    t2_text: "Nevelés: lesz (jelen) + részes II. – Az autót javítják.",
    t2_inst: "Válassza ki a megfelelő formát a 'válj'!",
    t2_h1: "Egyes szám (egyesszám): akarat. Többes szám: válni.",
    t2_sent2: "A csomagok ___ ma kiszállításra kerültek.",
    t2_c2_1: "válni", t2_c2_2: "lesz", t2_c2_3: "volt", t2_c2_4: "lett",

    // T3 - Präteritum Passiv (wurde)
    t3_title: "Múlt (múlt idő)",
    t3_text: "Iskolai végzettség: volt + melléknév II. \"A ház 1990-ben épült.\"",
    t3_inst: "Használd a passzív múlt időt!",
    t3_h1: "Már megtörtént (egyes szám).",
    t3_sent3: "A tolvajt ___ tegnap elkapták.",
    t3_c3_1: "lett", t3_c3_2: "lesz", t3_c3_3: "van", t3_c3_4: "volt",

    // T4 - Perfekt Passiv (ist ... worden)
    t4_title: "Tökéletes passzív",
    t4_text: "Nevelés: lenni + igenév II + válni. Figyelem: itt nincs BEVEZE!",
    t4_inst: "Tedd a mondatot helyes sorrendbe!",
    t4_h1: "Segédige „van” a 2. pozícióban, „lesz” a legvégén.",
    t4_w4_1: "Az ajtó", t4_w4_2: "van", t4_w4_3: "kinyitotta", t4_w4_4: "volt.",

    // T5 - Plusquamperfekt Passiv (war ... worden)
    t5_title: "A múlt előtt",
    t5_text: "Iskolai végzettség: volt + igenév II + lett. Ez egy másik esemény előtt történt.",
    t5_inst: "Melyik segédige hiányzik a tökéletes múlthoz?",
    t5_h1: "A „lenni” múlt idejű formája.",
    t5_sent5: "A levél ___ ___ megírása után elküldték.",
    t5_c5_1: "volt", t5_c5_2: "volt", t5_c5_3: "lesz", t5_c5_4: "volt",

    // T6 - Futur I Passiv (wird ... werden)
    t6_title: "Jövő (Jövő I)",
    t6_text: "Iskolai végzettség: lesz + igenév II + lesz. – Meglesz.",
    t6_inst: "Rakd egymásra az igéket a jövőre nézve!",
    t6_h1: "lesz + igenév + lesz.",
    t6_sw6_1: "A projekt", t6_sw6_2: "lesz", t6_sw6_3: "véget ért", t6_sw6_4: "válik.",

    // T7 - Täter nennen (von + Dativ)
    t7_title: "Az elkövető (az)",
    t7_text: "Ha passzív hangon nevezzük meg az elkövetőt, akkor 'von' + datívust használunk (személyek/szerzők).",
    t7_inst: "Rendezd a helyes elöljárószó szerint!",
    t7_h1: "Emberek = from. Eszközök/eszközök = keresztül.",
    t7_b7_1: "-tól (személy) 👤", t7_b7_2: "(eszközzel) ⚙️",
    t7_i7_1: "a tanártól", t7_i7_2: "a szél által", t7_i7_3: "az anyától", t7_i7_4: "a tűzön keresztül",

    // T8 - Instrument (durch + Akkusativ)
    t8_title: "Eszközök és utak (átmenet)",
    t8_text: "Eszközöknél, eszközöknél vagy okoknál a „through” + accusativet használjuk.",
    t8_inst: "Kösd össze a hangszert a cselekvéssel!",
    t8_h1: "elfújta a szél.",
    t8_ml8: "a szél által", t8_mr8: "elfújva",
    t8_ml8_2: "az esőn keresztül", t8_mr8_2: "nedves lett",

    // T9 - Umwandlung: Aktiv zu Passiv
    t9_title: "Aktív ➔ Passzív",
    t9_text: "Az akuzatív tárgy lesz alany. 'Én (S) eszem az almát (O)' -> 'Az almát (S) megeszik.'",
    t9_inst: "Építsd fel a passzív mondatot a töredékekből!",
    t9_h1: "Aktív: A szerelő megjavítja az autót.",
    t9_f9_1: "Az autó", t9_f9_2: "lesz", t9_f9_3: "a szerelőtől", t9_f9_4: "javítva.",

    // T10 - Dativ-Objekt Falle
    t10_title: "A datív csapda",
    t10_text: "A datív objektumok passzívban maradnak a datívuszban! 'Segít nekem' -> 'Segítenek.'",
    t10_inst: "Melyik névmás a helyes?",
    t10_h1: "Dative: én, te, ő, mi, te, ők.",
    t10_sent10: "___ mindenki gratulál.",
    t10_c10_1: "Őt", t10_c10_2: "Ő", t10_c10_3: "Őt", t10_c10_4: "Az övé",

    // T11 - Passiv ohne Subjekt (Es wird...)
    t11_title: "Tánc van!",
    t11_text: "Az akuzatív tárgy nélküli igék az „es”-vel alkotják a passzívat, vagy egyáltalán nem alany.",
    t11_inst: "Jelölje be a személytelen passzívot!",
    t11_h1: "Keressen olyan kifejezéseket, mint „Lesz...” vagy „Lesz...”.",
    t11_w11_1: "In", t11_w11_2: "a", t11_w11_3: "Disco", t11_w11_4: "lesz", t11_w11_5: "sokat", t11_w11_6: "nevetett",

    // T12 - Magnet: Zeitformen Match
    t12_title: "Időmágnes",
    t12_text: "Párosítsd a mondatokat a megfelelő igeidővel!",
    t12_inst: "Használd a magnest!",
    t12_h1: "lesz = jelen, volt = múlt idő.",
    t12_ml12: "Ez folyamatban van.", t12_mr12: "jelen idő",
    t12_ml12_2: "Megtörtént.", t12_mr12_2: "Múlt idő",
    t12_ml12_3: "Megtörtént.", t12_mr12_3: "Tökéletes",

    // T13 - Partizip II Check
    t13_title: "A participium cél",
    t13_text: "A passzív szólamban a II. igenév mindig a végén van (tagmondat).",
    t13_inst: "Lődd le a megfelelő igenevést II!",
    t13_h1: "Mi a 'hívás' igenév része?", t13_h2: "hívott.",
    t13_q13: "A gyerek ___ lesz.",
    t13_t13_1: "hívott", t13_t13_2: "hívja", t13_t13_3: "– kiáltotta", t13_t13_4: "hívásokat",

    // T14 - Werden: Passiv vs. Futur
    t14_title: "Passzív vagy jövő idő?",
    t14_text: "A „become” lehet passzív (épít) vagy jövő idejű (épít).",
    t14_inst: "Rendezd a \"lesz\" mondatokat!",
    t14_h1: "A passzívhoz II (ge-) igenév szükséges. A jövő időhöz infinitivus szükséges.",
    t14_b14_1: "Passzív 📦", t14_b14_2: "Jövő idő 🚀",
    t14_i14_1: "Megkérdezik tőle.", t14_i14_2: "Meg fogja kérdezni.", t14_i14_3: "Keresettek vagyunk.", t14_i14_4: "Keresni fogunk.",

    // T15 - Finale: Prozess-Meister
    t15_title: "Passzív következtetés",
    t15_text: "Képes-e összetett mondatot alkotni a passzív múltban?",
    t15_inst: "Rakd össze a szavakat múlt idejű passzívba!",
    t15_h1: "lett + igenév II.",
    t15_sw15_1: "A kapu", t15_sw15_2: "lett", t15_sw15_3: "zárt.",
  },
  ro: {
    explorer_title: "Fabrica de procese (pasiv)",

    // T1 - Intro: Was ist Passiv?
    t1_title: "Ce se întâmplă aici?",
    t1_text: "În vocea pasivă, acțiunea este cea care este importantă, nu cine o face. — Mărul va fi mâncat.",
    t1_inst: "Care propoziție este la voce pasivă?",
    t1_h1: "Căutați o formă de „deveniți” și un participiu II.",
    t1_q1: "Găsiți vocea pasivă:",
    t1_ans1: "Pâinea este coaptă.", t1_ans2: "Coc pâine.",

    // T2 - Präsens Passiv (wird)
    t2_title: "prezent (prezent)",
    t2_text: "Educație: devii (prezent) + participiu II. — Mașina este reparată.",
    t2_inst: "Alegeți forma corectă de „deveniți”!",
    t2_h1: "Singular (singular): voință. Plural: deveni.",
    t2_sent2: "Pachetele ___ expediate astăzi.",
    t2_c2_1: "deveni", t2_c2_2: "va", t2_c2_3: "fost", t2_c2_4: "devenit",

    // T3 - Präteritum Passiv (wurde)
    t3_title: "Trecut (timpul trecut)",
    t3_text: "Educație: was + participiu II. „Casa a fost construită în 1990”.",
    t3_inst: "Folosește pasivul trecut!",
    t3_h1: "S-a întâmplat deja (la singular).",
    t3_sent3: "Hoțul ___ prins ieri.",
    t3_c3_1: "devenit", t3_c3_2: "va", t3_c3_3: "este", t3_c3_4: "a fost",

    // T4 - Perfekt Passiv (ist ... worden)
    t4_title: "Pasiv perfect",
    t4_text: "Educație: fii + participiu II + devii. Atenție: nu există nicio DEVENIRE aici!",
    t4_inst: "Pune propoziția în ordinea corectă!",
    t4_h1: "Verbul auxiliar „este” în poziția 2, „deveni” la sfârșit.",
    t4_w4_1: "Ușa", t4_w4_2: "este", t4_w4_3: "deschis", t4_w4_4: "fost.",

    // T5 - Plusquamperfekt Passiv (war ... worden)
    t5_title: "Pretrecut",
    t5_text: "Educație: era + participiu II + devenit. Acest lucru s-a întâmplat înainte de un alt eveniment.",
    t5_inst: "Care verb auxiliar lipsește pentru trecutul perfect?",
    t5_h1: "Forma la trecut a lui „a fi”.",
    t5_sent5: "După ce scrisoarea a fost scrisă ___ ___ , a fost trimisă.",
    t5_c5_1: "fusese", t5_c5_2: "a fost", t5_c5_3: "va fi", t5_c5_4: "a fost",

    // T6 - Futur I Passiv (wird ... werden)
    t6_title: "Viitorul (Viitorul I)",
    t6_text: "Educație: voință + participiu II + devi. — Se va face.",
    t6_inst: "Stivuiți verbele pentru viitor!",
    t6_h1: "will + participiu + devenit.",
    t6_sw6_1: "Proiectul", t6_sw6_2: "va", t6_sw6_3: "s-a încheiat", t6_sw6_4: "deveni.",

    // T7 - Täter nennen (von + Dativ)
    t7_title: "Făptuitorul (de)",
    t7_text: "Dacă numim făptuitorul cu vocea pasivă, folosim „von” + dativ (persoane/autori).",
    t7_inst: "Sortați după prepoziția corectă!",
    t7_h1: "Oameni = din. Mijloace/instrumente = prin.",
    t7_b7_1: "de la (persoană) 👤", t7_b7_2: "prin (mijloace) ⚙️",
    t7_i7_1: "de la profesor", t7_i7_2: "de vânt", t7_i7_3: "de la mama", t7_i7_4: "prin foc",

    // T8 - Instrument (durch + Akkusativ)
    t8_title: "Mijloace și căi (prin)",
    t8_text: "Pentru instrumente, mijloace sau cauze folosim „prin” + acuzativ.",
    t8_inst: "Conectați instrumentul cu acțiunea!",
    t8_h1: "dus de vânt.",
    t8_ml8: "de vânt", t8_mr8: "suflat departe",
    t8_ml8_2: "prin ploaie", t8_mr8_2: "s-a udat",

    // T9 - Umwandlung: Aktiv zu Passiv
    t9_title: "Activ ➔ Pasiv",
    t9_text: "Obiectul acuzativ devine subiect. 'Eu (S) mănânc mărul (O)' -> 'Mărul (S) este mâncat.'",
    t9_inst: "Construiește propoziția pasivă din fragmente!",
    t9_h1: "Activ: mecanicul repara masina.",
    t9_f9_1: "Mașina", t9_f9_2: "va", t9_f9_3: "de la mecanic", t9_f9_4: "reparat.",

    // T10 - Dativ-Objekt Falle
    t10_title: "Capcana dativului",
    t10_text: "Obiectele dative rămân în pasiv în dativ! „El mă ajută” -> „Sunt ajutat”.",
    t10_inst: "Care pronume este corect?",
    t10_h1: "Dativ: eu, tu, el, noi, tu, ei.",
    t10_sent10: "___ este felicitat de toată lumea.",
    t10_c10_1: "El", t10_c10_2: "El", t10_c10_3: "El", t10_c10_4: "Lui",

    // T11 - Passiv ohne Subjekt (Es wird...)
    t11_title: "Există dans!",
    t11_text: "Verbele fără obiect acuzativ formează pasivul cu „es” sau fără subiect.",
    t11_inst: "Marcați pasivul impersonal!",
    t11_h1: "Căutați expresii precum „Va...” sau „Va...”.",
    t11_w11_1: "În", t11_w11_2: "cel", t11_w11_3: "Disco", t11_w11_4: "va", t11_w11_5: "mult", t11_w11_6: "a râs",

    // T12 - Magnet: Zeitformen Match
    t12_title: "Magnet de timp",
    t12_text: "Párosítsd a mondatokat a megfelelő igeidővel!",
    t12_inst: "Használd un magnet!",
    t12_h1: "will = prezent, was = timpul trecut.",
    t12_ml12: "Se face.", t12_mr12: "timpul prezent",
    t12_ml12_2: "S-a făcut.", t12_mr12_2: "Timpul trecut",
    t12_ml12_3: "S-a făcut.", t12_mr12_3: "Perfect",

    // T13 - Partizip II Check
    t13_title: "Ținta participiului",
    t13_text: "La vocea pasivă, participiul II este întotdeauna la sfârșit (propoziție).",
    t13_inst: "Trage pentru participiul II corect!",
    t13_h1: "Care este participiul lui „chemare”?", t13_h2: "numit.",
    t13_q13: "Copilul va fi ___.",
    t13_t13_1: "numit", t13_t13_2: "suna", t13_t13_3: "strigă", t13_t13_4: "apeluri",

    // T14 - Werden: Passiv vs. Futur
    t14_title: "Timp pasiv sau viitor?",
    t14_text: "„Deveniți” poate fi pasiv (va construi) sau timpul viitor (va construi).",
    t14_inst: "Sortați propozițiile de „voință”!",
    t14_h1: "Pasivul are nevoie de un participiu II (ge-). Timpul viitor are nevoie de infinitiv.",
    t14_b14_1: "Pasiv 📦", t14_b14_2: "Timpul viitor 🚀",
    t14_i14_1: "El este întrebat.", t14_i14_2: "El va întreba.", t14_i14_3: "Suntem căutați.", t14_i14_4: "Vom căuta.",

    // T15 - Finale: Prozess-Meister
    t15_title: "Concluzie pasivă",
    t15_text: "Poți forma o propoziție complexă la pasiv trecut?",
    t15_inst: "Stivuiți cuvintele la timpul trecut pasiv!",
    t15_h1: "devenit + participiu II.",
    t15_sw15_1: "Poarta", t15_sw15_2: "devenit", t15_sw15_3: "închis.",
  }
};

export const PASSIV7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "📦" }, { emoji: "🏷️" }, { emoji: "📋" }, { emoji: "✅" }] },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#14B8A6", bg: "#F0FDFA" }, { text: "wird", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "word-display", word: "wurde", color: "#0D9488" },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "text-bubbles", items: [{ text: "ist", color: "#14B8A6", bg: "#F0FDFA" }, { text: "worden", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "word-order", words: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4"], correctOrder: [0, 1, 2, 3], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "letter-circles", letters: ["w", "a", "r"], color: "#0D9488" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "physics-stacker", words: ["t6_sw6_1", "t6_sw6_2", "t6_sw6_3", "t6_sw6_4"], correctOrder: [0, 1, 2, 3], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Person"], bg: "#F0FDFA", border: "#14B8A6" }, right: { items: ["Mittel"], bg: "#F0FDF4", border: "#22C55E" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "v", label: "t7_b7_1" }, { id: "d", label: "t7_b7_2" }], items: [{ text: "t7_i7_1", bucketId: "v" }, { text: "t7_i7_2", bucketId: "d" }, { text: "t7_i7_3", bucketId: "v" }, { text: "t7_i7_4", bucketId: "d" }], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "dativ" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🌬️", label: "durch" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_ml8", right: "t8_mr8" }, { left: "t8_ml8_2", right: "t8_mr8_2" }], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "akkusativ" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "sentence-build", fragments: ["t9_f9_1", "t9_f9_2", "t9_f9_3", "t9_f9_4"], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "hard",
    svg: { type: "article-noun", article: "Ihm", articleColor: "#065F46", noun: "Dativ" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "dativ" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Es wird...", color: "#0D9488", bg: "#F0FDFA" }] },
    interactive: { type: "highlight-text", tokens: ["t11_w11_1", "t11_w11_2", "t11_w11_3", "t11_w11_4", "t11_w11_5", "t11_w11_6"], correctIndices: [3, 5], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t12_ml12", right: "t12_mr12" }, { left: "t12_ml12_2", right: "t12_mr12_2" }, { left: "t12_ml12_3", right: "t12_mr12_3" }], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "letter-circles", letters: ["g", "e", "-"], color: "#14B8A6" },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_t13_1", isCorrect: true }, { id: "2", text: "t13_t13_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["Passiv"], bg: "#F0FDFA", border: "#14B8A6" }, right: { items: ["Futur"], bg: "#EFF6FF", border: "#3B82F6" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "pa", label: "t14_b14_1" }, { id: "fu", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "pa" }, { text: "t14_i14_2", bucketId: "fu" }, { text: "t14_i14_3", bucketId: "pa" }, { text: "t14_i14_4", bucketId: "fu" }], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "🏆" }, { emoji: "⭐" }, { emoji: "🎯" }, { emoji: "✅" }] },
    interactive: { type: "physics-stacker", words: ["t15_sw15_1", "t15_sw15_2", "t15_sw15_3"], correctOrder: [0, 1, 2], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  }
];


export const PASSIV_MODAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Modal-Mechanik (Passiv)",

    // T1 - Struktur Intro
    t1_title: "Die Modal-Zange",
    t1_text: "Wenn ein Modalverb (müssen, können...) ins Spiel kommt, rutscht 'werden' als Infinitiv ganz ans Ende hinter das Partizip II.",
    t1_inst: "Wie sieht die Reihenfolge am Ende aus?",
    t1_h1: "Partizip II + werden.", t1_h2: "geputzt werden.",
    t1_w1: "werden", t1_w2: "geputzt",

    // T2 - Präsens: müssen
    t2_title: "Pflicht (muss)",
    t2_text: "Etwas muss erledigt werden. Struktur: Modalverb + ... + Partizip II + werden.",
    t2_inst: "Setze die Verben richtig ein!",
    t2_h1: "Das Haus muss (ge-) + werden.", t2_h2: "muss gebaut werden.",
    t2_sent2: "Das Haus ___ heute ___ ___ .",
    t2_c2_1: "muss gebaut werden", t2_c2_2: "muss bauen werden", t2_c2_3: "wird gebaut müssen", t2_c2_4: "muss gebaut wird",

    // T3 - Präsens: können
    t3_title: "Möglichkeit (kann)",
    t3_text: "Hier geht es darum, was gemacht werden kann. 'Die Tür kann geöffnet werden.'",
    t3_inst: "Welche Form ist korrekt?",
    t3_h1: "kann + Partizip II + werden.",
    t3_sent3: "Das Problem ___ gelöst ___ .",
    t3_c3_1: "kann / werden", t3_c3_2: "wird / können", t3_c3_3: "könnte / worden", t3_c3_4: "kann / worden",

    // T4 - Präsens: dürfen (Verbot)
    t4_title: "Erlaubnis & Verbot",
    t4_text: "Oft für Schilder: 'Hier darf nicht geparkt werden.'",
    t4_inst: "Schieße auf den richtigen Passiv-Satz mit 'darf'!",
    t4_h1: "darf nicht + Partizip II + werden.",
    t4_q4: "Was darf man hier nicht?",
    t4_t4_1: "Hier darf nicht geraucht werden.", t4_t4_2: "Hier raucht man nicht.", t4_t4_3: "Man darf nicht rauchen.",

    // T5 - Präteritum: musste
    t5_title: "Vergangene Pflicht",
    t5_text: "In der Vergangenheit wird das Modalverb zu 'musste', 'konnte', etc.",
    t5_inst: "Wähle die richtige Präteritum-Form!",
    t5_h1: "Die Hausaufgabe (Einzahl) + musste.",
    t5_sent5: "Die Hausaufgabe ___ gestern gemacht ___ .",
    t5_c5_1: "musste / werden", t5_c5_2: "muss / werden", t5_c5_3: "musste / worden", t5_c5_4: "war / gemacht",

    // T6 - Präteritum: konnte
    t6_title: "Vergangene Fähigkeit",
    t6_text: "Etwas konnte erledigt werden. 'Der Fehler konnte gefunden werden.'",
    t6_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t6_h1: "Subjekt + konnte + ... + P2 + werden.",
    t6_w6_1: "Der Fehler", t6_w6_2: "konnte", t6_w6_3: "schnell", t6_w6_4: "behoben werden.",

    // T7 - Satzbau: Nebensatz
    t7_title: "Modal-Passiv im Nebensatz",
    t7_text: "Im Nebensatz rutscht das konjugierte Modalverb ganz ans Ende, HINTER 'werden'.",
    t7_inst: "Staple die Verben für das Satzende!",
    t7_h1: "... + Partizip II + werden + muss.",
    t7_sw7_1: "gemacht", t7_sw7_2: "werden", t7_sw7_3: "muss.",

    // T8 - Man (Aktiv) -> Passiv
    t8_title: "Man-Sätze umbauen",
    t8_text: "Sätze mit 'man' werden im Passiv zu Sätzen ohne Täter. 'Man muss das machen' -> 'Das muss gemacht werden.'",
    t8_inst: "Sortiere Aktiv (mit man) und Passiv (mit werden)!",
    t8_h1: "Aktiv nutzt 'man'. Passiv nutzt 'werden'.",
    t8_b8_1: "Aktiv (man) 👤", t8_b8_2: "Passiv (werden) ⚙️",
    t8_i8_1: "Man muss lüften.", t8_i8_2: "Es muss gelüftet werden.", t8_i8_3: "Man kann helfen.", t8_i8_4: "Es kann geholfen werden.",

    // T9 - Magnet: Modal-Bedeutung
    t9_title: "Bedeutungs-Magnet",
    t9_text: "Welches Modalverb passt zur Situation?",
    t9_inst: "Verbinde die Modalverben mit ihrer Passiv-Bedeutung!",
    t9_h1: "müssen = Pflicht, dürfen = Erlaubnis.",
    t9_ml9_1: "muss", t9_mr9_1: "Pflicht",
    t9_ml9_2: "darf", t9_mr9_2: "Erlaubnis",
    t9_ml9_3: "soll", t9_mr9_3: "Empfehlung",

    // T10 - Negation
    t10_title: "Nicht vergessen!",
    t10_text: "Die Negation 'nicht' steht meist vor dem Partizip II.",
    t10_inst: "Welches Wort fehlt hier?",
    t10_h1: "Das Fenster darf 'nicht'...",
    t10_sent10: "Das Fenster darf ___ geöffnet werden.",
    t10_c10_1: "nicht", t10_c10_2: "kein", t10_c10_3: "nichts", t10_c10_4: "nie",

    // T11 - Wortbildung: werden/worden
    t11_title: "Werden oder Worden?",
    t11_text: "Mit Modalverben nutzen wir im Präsens und Präteritum IMMER 'werden' (Infinitiv). 'Worden' gibt es hier nicht!",
    t11_inst: "Wähle das richtige Ende!",
    t11_h1: "Nach Modalverben steht der reine Infinitiv: werden.",
    t11_sent11: "Die Arbeit konnte beendet ___ .",
    t11_c11_1: "werden", t11_c11_2: "worden", t11_c11_3: "geworden", t11_c11_4: "wird",

    // T12 - Highlight: Das Modalverb
    t12_title: "Modalverb-Detektiv",
    t12_text: "Finde das konjugierte Modalverb im Passiv-Satz!",
    t12_inst: "Markiere das Modalverb!",
    t12_h1: "Es steht an Position 2.", t12_h2: "muss, kann, soll...",
    t12_w12_1: "Der", t12_w12_2: "Müll", t12_w12_3: "sollte", t12_w12_4: "morgen", t12_w12_5: "abgeholt", t12_w12_6: "werden",

    // T13 - Futur I (Sehr selten)
    t13_title: "Zukunft mit Modalverb",
    t13_text: "Extrem-Satzbau: 'Das wird gemacht werden müssen.' (Wird nur selten genutzt, ist aber logisch).",
    t13_inst: "Welches Verb steht ganz am Ende?",
    t13_h1: "Das Modalverb im Infinitiv.",
    t13_q13: "Das wird erledigt werden ___ .",
    t13_ans13: "müssen", t13_ans13_2: "muss", t13_ans13_3: "gemusst", t13_ans13_4: "werden",

    // T14 - Höfliche Bitte (Konjunktiv II)
    t14_title: "Höfliches Passiv",
    t14_text: "Mit 'könnte' vagy 'müsste' klingt das Passiv viel höflicher.",
    t14_inst: "Mache den Satz höflicher!",
    t14_h1: "Benutze 'könnte'.",
    t14_sent14: "___ die Musik bitte leiser gemacht werden?",
    t14_c14_1: "Könnte", t14_c14_2: "Kann", t14_c14_3: "Muss", t14_c14_4: "Wird",

    // T15 - Abschluss-Stacker
    t15_title: "Meister der Mechanik",
    t15_text: "Baue den komplexen Satz zum Abschluss!",
    t15_inst: "Staple die Satzteile richtig!",
    t15_h1: "Subjekt + Modalverb + ... + P2 + werden.",
    t15_sw15_1: "Die Briefe", t15_sw15_2: "müssen", t15_sw15_3: "sofort", t15_sw15_4: "unterschrieben werden.",
  },
  en: {
    explorer_title: "Modal Mechanics (Passive)",

    // T1 - Struktur Intro
    t1_title: "The modal pliers",
    t1_text: "When a modal verb (must, can...) comes into play, 'will' slides as an infinitive right to the end behind the participle II.",
    t1_inst: "What does the order look like at the end?",
    t1_h1: "Participle II + will.", t1_h2: "be cleaned.",
    t1_w1: "become", t1_w2: "cleaned",

    // T2 - Präsens: müssen
    t2_title: "duty (must)",
    t2_text: "Something has to be done. Structure: Modal verb + ... + participle II + will.",
    t2_inst: "Use the verbs correctly!",
    t2_h1: "The house must be (ge-) +.", t2_h2: "must be built.",
    t2_sent2: "The house ___ today ___ ___ .",
    t2_c2_1: "must be built", t2_c2_2: "must be built", t2_c2_3: "will have to be built", t2_c2_4: "must be built",

    // T3 - Präsens: können
    t3_title: "possibility (can)",
    t3_text: "This is about what can be done. 'The door can be opened.'",
    t3_inst: "Which form is correct?",
    t3_h1: "can + participle II + become.",
    t3_sent3: "The problem ___ solved ___ .",
    t3_c3_1: "can / will", t3_c3_2: "will / can", t3_c3_3: "could/been", t3_c3_4: "can/been",

    // T4 - Präsens: dürfen (Verbot)
    t4_title: "Permission & Prohibition",
    t4_text: "Often for signs: 'You are not allowed to park here.'",
    t4_inst: "Shoot for the right passive sentence with 'dar'!",
    t4_h1: "must not become + participle II +.",
    t4_q4: "What are you not allowed to do here?",
    t4_t4_1: "Smoking is not allowed here.", t4_t4_2: "You don't smoke here.", t4_t4_3: "You are not allowed to smoke.",

    // T5 - Präteritum: musste
    t5_title: "Past duty",
    t5_text: "In the past, the modal verb becomes 'had to', 'could', etc.",
    t5_inst: "Choose the correct past tense form!",
    t5_h1: "The homework (singular) + had to.",
    t5_sent5: "The homework ___ done yesterday ___ .",
    t5_c5_1: "had to/become", t5_c5_2: "must / will", t5_c5_3: "had to / been", t5_c5_4: "was / made",

    // T6 - Präteritum: konnte
    t6_title: "Past ability",
    t6_text: "Something could be done. 'The error was found.'",
    t6_inst: "Put the sentence in the correct order!",
    t6_h1: "Subject + could become + ... + P2 +.",
    t6_w6_1: "The error", t6_w6_2: "could", t6_w6_3: "quickly", t6_w6_4: "be remedied.",

    // T7 - Satzbau: Nebensatz
    t7_title: "Modal passive in the subordinate clause",
    t7_text: "In the subordinate clause, the conjugated modal verb slides to the very end, BEHIND 'become'.",
    t7_inst: "Stack the verbs for the end of the sentence!",
    t7_h1: "... + participle II + will + must.",
    t7_sw7_1: "made", t7_sw7_2: "become", t7_sw7_3: "must.",

    // T8 - Man (Aktiv) -> Passiv
    t8_title: "Rebuild man sentences",
    t8_text: "Sentences with 'man' in the passive become sentences without a perpetrator. 'You have to do this' -> 'This has to be done.'",
    t8_inst: "Sort active (with man) and passive (with will)!",
    t8_h1: "Actively uses 'man'. Passive uses 'be'.",
    t8_b8_1: "Active (man) 👤", t8_b8_2: "Passive (become) ⚙️",
    t8_i8_1: "You have to ventilate.", t8_i8_2: "It needs to be ventilated.", t8_i8_3: "You can help.", t8_i8_4: "It can be helped.",

    // T9 - Magnet: Modal-Bedeutung
    t9_title: "Meaning magnet",
    t9_text: "Which modal verb suits the situation?",
    t9_inst: "Connect the modal verbs with their passive meaning!",
    t9_h1: "must = obligation, may = permission.",
    t9_ml9_1: "must", t9_mr9_1: "Duty",
    t9_ml9_2: "may", t9_mr9_2: "permission",
    t9_ml9_3: "should", t9_mr9_3: "Recommendation",

    // T10 - Negation
    t10_title: "Don't forget!",
    t10_text: "The negation 'not' usually comes before the participle II.",
    t10_inst: "Which word is missing here?",
    t10_h1: "The window is 'not allowed'...",
    t10_sent10: "The window can be opened ___.",
    t10_c10_1: "not", t10_c10_2: "none", t10_c10_3: "nothing", t10_c10_4: "never",

    // T11 - Wortbildung: werden/worden
    t11_title: "Become or Been?",
    t11_text: "With modal verbs we ALWAYS use 'will' (infinitive) in the present and past tense. There is no such thing as 'been' here!",
    t11_inst: "Choose the right ending!",
    t11_h1: "After modal verbs there is the pure infinitive: will.",
    t11_sent11: "The work was finished ___.",
    t11_c11_1: "become", t11_c11_2: "been", t11_c11_3: "become", t11_c11_4: "will",

    // T12 - Highlight: Das Modalverb
    t12_title: "Modal verb detective",
    t12_text: "Find the conjugated modal verb in the passive sentence!",
    t12_inst: "Mark the modal verb!",
    t12_h1: "It is in position 2.", t12_h2: "must, can, should...",
    t12_w12_1: "The", t12_w12_2: "Garbage", t12_w12_3: "should", t12_w12_4: "tomorrow", t12_w12_5: "picked up", t12_w12_6: "become",

    // T13 - Futur I (Sehr selten)
    t13_title: "Future with modal verb",
    t13_text: "Extreme sentence structure: 'This will have to be done.' (Is rarely used, but is logical).",
    t13_inst: "Which verb comes at the very end?",
    t13_h1: "The modal verb in the infinitive.",
    t13_q13: "This will be done ___ .",
    t13_ans13: "have to", t13_ans13_2: "must", t13_ans13_3: "had to", t13_ans13_4: "become",

    // T14 - Höfliche Bitte (Konjunktiv II)
    t14_title: "Polite passive",
    t14_text: "With 'could' vaguely 'should' the passive sounds much more polite.",
    t14_inst: "Make the sentence more polite!",
    t14_h1: "Use 'could'.",
    t14_sent14: "___ please turn down the music?",
    t14_c14_1: "Could", t14_c14_2: "Can", t14_c14_3: "Must", t14_c14_4: "Will",

    // T15 - Abschluss-Stacker
    t15_title: "Master of mechanics",
    t15_text: "Build the complex sentence to finish!",
    t15_inst: "Stack the sentence parts correctly!",
    t15_h1: "Subject + modal verb + ... + P2 + become.",
    t15_sw15_1: "The letters", t15_sw15_2: "have to", t15_sw15_3: "immediately", t15_sw15_4: "be signed.",
  },
  hu: {
    explorer_title: "Modális mechanika (passzív)",

    // T1 - Struktur Intro
    t1_title: "A modális fogó",
    t1_text: "Amikor egy modális ige (must, can...) szóba kerül, a 'will' infinitivusként jobbra a végére csúszik a II.",
    t1_inst: "Hogyan néz ki a sorrend a végén?",
    t1_h1: "II. tagozat + akarat.", t1_h2: "meg kell tisztítani.",
    t1_w1: "válni", t1_w2: "tisztítani",

    // T2 - Präsens: müssen
    t2_title: "kötelesség (kötelező)",
    t2_text: "Valamit tenni kell. Szerkezete: Modális ige + ... + igenév II + akarat.",
    t2_inst: "Használd helyesen az igéket!",
    t2_h1: "A háznak (ge-) + kell lennie.", t2_h2: "építeni kell.",
    t2_sent2: "A ház ___ ma ___ ___ .",
    t2_c2_1: "építeni kell", t2_c2_2: "építeni kell", t2_c2_3: "építeni kell majd", t2_c2_4: "építeni kell",

    // T3 - Präsens: können
    t3_title: "lehetőség (lehet)",
    t3_text: "Ez arról szól, hogy mit lehet tenni. – Az ajtó kinyitható.",
    t3_inst: "Melyik forma a helyes?",
    t3_h1: "lehet + igenév II + válhat.",
    t3_sent3: "A probléma ___ megoldva ___ .",
    t3_c3_1: "tud/akar", t3_c3_2: "fog / tud", t3_c3_3: "lehetett/volt", t3_c3_4: "lehet/volt",

    // T4 - Präsens: dürfen (Verbot)
    t4_title: "Engedély és tilalom",
    t4_text: "Gyakran táblákra: \"Itt nem szabad parkolni.\"",
    t4_inst: "Lődd ki a megfelelő passzív mondatot a „dar” szóval!",
    t4_h1: "nem válhat + tagnévvé II +.",
    t4_q4: "Mit nem szabad itt csinálni?",
    t4_t4_1: "Itt tilos a dohányzás.", t4_t4_2: "Itt nem dohányzol.", t4_t4_3: "Nem szabad dohányozni.",

    // T5 - Präteritum: musste
    t5_title: "Múltbeli kötelesség",
    t5_text: "A múltban a modális ige „kellett”, „lehet” stb.",
    t5_inst: "Válassza ki a megfelelő múlt idejű formát!",
    t5_h1: "A házi feladat (egyes számban) + kellett.",
    t5_sent5: "A házi feladat ___ elkészült tegnap ___ .",
    t5_c5_1: "kellett/válik", t5_c5_2: "kell / akar", t5_c5_3: "kellett/volt", t5_c5_4: "készült / készült",

    // T6 - Präteritum: konnte
    t6_title: "Múltbeli képesség",
    t6_text: "Valamit lehetne tenni. 'Megtalálták a hibát.'",
    t6_inst: "Tedd a mondatot helyes sorrendbe!",
    t6_h1: "A tárgy + lehet + ... + P2 +.",
    t6_w6_1: "A hiba", t6_w6_2: "lehetne", t6_w6_3: "gyorsan", t6_w6_4: "orvosolni kell.",

    // T7 - Satzbau: Nebensatz
    t7_title: "Modális passzív az alárendelt tagmondatban",
    t7_text: "Az alárendelt tagmondatban a ragozott modális ige a legvégéig csúszik, a BEHIND 'become'-ig.",
    t7_inst: "Rakd egymásra az igéket a mondat végére!",
    t7_h1: "... + II. igenév + akarat + kell.",
    t7_sw7_1: "készült", t7_sw7_2: "válni", t7_sw7_3: "kell.",

    // T8 - Man (Aktiv) -> Passiv
    t8_title: "Építsd újra az ember mondatait",
    t8_text: "Azok a mondatok, amelyekben az „ember” passzívban szerepel, elkövető nélküli mondatokká válnak. 'Ezt meg kell tenned' -> 'Ezt meg kell tenni.'",
    t8_inst: "Válogass aktív (emberrel) és passzív (akarattal)!",
    t8_h1: "Aktívan használja a „man” szót. A passzív a „be” szót használja.",
    t8_b8_1: "Aktív (férfi) 👤", t8_b8_2: "Passzív (válj) ⚙️",
    t8_i8_1: "Szellőztetni kell.", t8_i8_2: "Szellőztetni kell.", t8_i8_3: "Tudsz segíteni.", t8_i8_4: "Lehet rajta segíteni.",

    // T9 - Magnet: Modal-Bedeutung
    t9_title: "Jelentése: mágnes",
    t9_text: "Melyik modális ige illik a helyzethez?",
    t9_inst: "Kösd össze a modális igéket passzív jelentésükkel!",
    t9_h1: "kell = kötelezettség, lehet = engedély.",
    t9_ml9_1: "kell", t9_mr9_1: "Kötelesség",
    t9_ml9_2: "lehet", t9_mr9_2: "engedélyt",
    t9_ml9_3: "kellene", t9_mr9_3: "ajánlás",

    // T10 - Negation
    t10_title: "Ne felejtsd el!",
    t10_text: "A „nem” tagadás általában a II. igenév elé kerül.",
    t10_inst: "Melyik szó hiányzik innen?",
    t10_h1: "Az ablak nem engedélyezett...",
    t10_sent10: "Az ablak ___ nyitható.",
    t10_c10_1: "nem", t10_c10_2: "egyik sem", t10_c10_3: "semmi", t10_c10_4: "soha",

    // T11 - Wortbildung: werden/worden
    t11_title: "Legyél vagy voltál?",
    t11_text: "A modális igéknél MINDIG használjuk a „will” szót (infinitív) jelen és múlt időben. Nincs olyan, hogy 'voltam' itt!",
    t11_inst: "Válassza ki a megfelelő befejezést!",
    t11_h1: "A modális igék után ott van a tiszta infinitivus: will.",
    t11_sent11: "A munka befejeződött ___.",
    t11_c11_1: "válni", t11_c11_2: "volt", t11_c11_3: "válni", t11_c11_4: "lesz",

    // T12 - Highlight: Das Modalverb
    t12_title: "Modális ige detektív",
    t12_text: "Keresse meg a passzív mondatban a ragozott modális igét!",
    t12_inst: "Jelölje be a modális igét!",
    t12_h1: "2-es pozícióban van.", t12_h2: "kell, lehet, kell...",
    t12_w12_1: "A", t12_w12_2: "Szemét", t12_w12_3: "kellene", t12_w12_4: "holnap", t12_w12_5: "felvette", t12_w12_6: "válni",

    // T13 - Futur I (Sehr selten)
    t13_title: "Jövő modális igével",
    t13_text: "Extrém mondatszerkezet: \"Ezt meg kell tenni.\" (Ritkán használják, de logikus).",
    t13_inst: "Melyik ige jön a legvégén?",
    t13_h1: "A modális ige infinitivusban.",
    t13_q13: "Ez megtörténik ___ .",
    t13_ans13: "muszáj", t13_ans13_2: "kell", t13_ans13_3: "kellett", t13_ans13_4: "válni",

    // T14 - Höfliche Bitte (Konjunktiv II)
    t14_title: "Udvarias passzív",
    t14_text: "A „could” homályosan „kell” szóval a passzív hangzás sokkal udvariasabb.",
    t14_inst: "Tedd udvariasabbá a mondatot!",
    t14_h1: "Használja a „lehet” szót.",
    t14_sent14: "___ halkítsd le a zenét?",
    t14_c14_1: "Lehetne", t14_c14_2: "Lehet", t14_c14_3: "Kötelező", t14_c14_4: "Will",

    // T15 - Abschluss-Stacker
    t15_title: "A mechanika mestere",
    t15_text: "Építsd fel az összetett mondatot a befejezéshez!",
    t15_inst: "Helyezze egymásra a mondatrészeket helyesen!",
    t15_h1: "Tárgy + modális ige + ... + P2 + vál.",
    t15_sw15_1: "A levelek", t15_sw15_2: "muszáj", t15_sw15_3: "azonnal", t15_sw15_4: "alá kell írni.",
  },
  ro: {
    explorer_title: "Mecanica modală (pasivă)",

    // T1 - Struktur Intro
    t1_title: "Cleștele modal",
    t1_text: "Când un verb modal (trebuie, poate...) intră în joc, „voința” alunecă ca infinitiv până la sfârșitul în spatele participiului II.",
    t1_inst: "Cum arată comanda la sfârșit?",
    t1_h1: "Participul II + vointa.", t1_h2: "fie curatat.",
    t1_w1: "deveni", t1_w2: "curatat",

    // T2 - Präsens: müssen
    t2_title: "datorie (trebuie)",
    t2_text: "Trebuie făcut ceva. Structura: verb modal + ... + participiu II + will.",
    t2_inst: "Folosește corect verbele!",
    t2_h1: "Casa trebuie să fie (ge-) +.", t2_h2: "trebuie construit.",
    t2_sent2: "Casa ___ azi ___ ___ .",
    t2_c2_1: "trebuie construit", t2_c2_2: "trebuie construit", t2_c2_3: "va trebui construit", t2_c2_4: "trebuie construit",

    // T3 - Präsens: können
    t3_title: "posibilitate (poate)",
    t3_text: "Este vorba despre ceea ce se poate face. — Ușa poate fi deschisă.",
    t3_inst: "Care formă este corectă?",
    t3_h1: "can + participiu II + devenit.",
    t3_sent3: "Problema ___ rezolvată ___ .",
    t3_c3_1: "poate/voi", t3_c3_2: "va / poate", t3_c3_3: "ar putea/a fost", t3_c3_4: "poate/a fost",

    // T4 - Präsens: dürfen (Verbot)
    t4_title: "Permisiune și interdicție",
    t4_text: "Adesea pentru indicatoare: „Nu ai voie să parchezi aici”.",
    t4_inst: "Trage pentru propoziția pasivă potrivită cu „dar”!",
    t4_h1: "nu trebuie să devină + participiu II +.",
    t4_q4: "Ce nu ai voie sa faci aici?",
    t4_t4_1: "Fumatul nu este permis aici.", t4_t4_2: "Aici nu fumezi.", t4_t4_3: "Nu ai voie să fumezi.",

    // T5 - Präteritum: musste
    t5_title: "Datoria trecută",
    t5_text: "În trecut, verbul modal devine „a trebuit”, „a putut”, etc.",
    t5_inst: "Alegeți forma corectă a timpului trecut!",
    t5_h1: "Tema pentru acasă (singular) + trebuia.",
    t5_sent5: "Tema pentru acasă ___ făcută ieri ___ .",
    t5_c5_1: "trebuia/a deveni", t5_c5_2: "trebuie / va", t5_c5_3: "trebuia / fost", t5_c5_4: "a fost / făcut",

    // T6 - Präteritum: konnte
    t6_title: "Abilitatea trecută",
    t6_text: "S-ar putea face ceva. „Eroarea a fost găsită”.",
    t6_inst: "Pune propoziția în ordinea corectă!",
    t6_h1: "Subiectul + ar putea deveni + ... + P2 +.",
    t6_w6_1: "Eroarea", t6_w6_2: "putea", t6_w6_3: "repede", t6_w6_4: "fi remediat.",

    // T7 - Satzbau: Nebensatz
    t7_title: "Pasiv modal în propoziţia subordonată",
    t7_text: "În propoziția subordonată, verbul modal conjugat alunecă până la capăt, ÎN SPATE „deveni”.",
    t7_inst: "Stivuiți verbele pentru sfârșitul propoziției!",
    t7_h1: "... + participiu II + will + must.",
    t7_sw7_1: "făcută", t7_sw7_2: "deveni", t7_sw7_3: "necesitate.",

    // T8 - Man (Aktiv) -> Passiv
    t8_title: "Reconstruiește propozițiile omului",
    t8_text: "Propozițiile cu „om” la pasiv devin propoziții fără autor. „Trebuie să faci asta” -> „Trebuie să faci asta”.",
    t8_inst: "Sortați activ (cu om) și pasiv (cu voință)!",
    t8_h1: "Folosește în mod activ „om”. Utilizări pasive „fi”.",
    t8_b8_1: "Activ (bărbat) 👤", t8_b8_2: "Pasiv (devenit) ⚙️",
    t8_i8_1: "Trebuie să ventilați.", t8_i8_2: "Trebuie ventilat.", t8_i8_3: "Poți ajuta.", t8_i8_4: "Se poate ajuta.",

    // T9 - Magnet: Modal-Bedeutung
    t9_title: "Adică magnet",
    t9_text: "Care verb modal se potrivește situației?",
    t9_inst: "Conectați verbele modale cu sensul lor pasiv!",
    t9_h1: "must = obligație, may = permisiunea.",
    t9_ml9_1: "trebuie", t9_mr9_1: "Datoria",
    t9_ml9_2: "mai", t9_mr9_2: "permisiunea",
    t9_ml9_3: "ar trebui", t9_mr9_3: "Recomandare",

    // T10 - Negation
    t10_title: "Nu uita!",
    t10_text: "Negația „nu” vine de obicei înaintea participiului II.",
    t10_inst: "Ce cuvânt lipsește aici?",
    t10_h1: "Fereastra „nu este permisă”...",
    t10_sent10: "Fereastra poate fi deschisă ___.",
    t10_c10_1: "nu", t10_c10_2: "nici unul", t10_c10_3: "nimic", t10_c10_4: "niciodată",

    // T11 - Wortbildung: werden/worden
    t11_title: "A devenit sau a fost?",
    t11_text: "Cu verbele modale folosim ÎNTOTDEAUNA „voința” (infinitiv) la timpul prezent și trecut. Nu există așa ceva ca „a fost” aici!",
    t11_inst: "Alege finalul potrivit!",
    t11_h1: "După verbele modale există infinitivul pur: will.",
    t11_sent11: "Lucrarea a fost terminată ___.",
    t11_c11_1: "deveni", t11_c11_2: "fost", t11_c11_3: "deveni", t11_c11_4: "va",

    // T12 - Highlight: Das Modalverb
    t12_title: "Verb modal detectiv",
    t12_text: "Găsiți verbul modal conjugat în propoziția pasivă!",
    t12_inst: "Marcați verbul modal!",
    t12_h1: "Este in pozitia 2.", t12_h2: "trebuie, poate, ar trebui...",
    t12_w12_1: "The", t12_w12_2: "Gunoi", t12_w12_3: "ar trebui", t12_w12_4: "mâine", t12_w12_5: "ridicat", t12_w12_6: "deveni",

    // T13 - Futur I (Sehr selten)
    t13_title: "Viitorul cu verbul modal",
    t13_text: "Structura extremă a propoziției: „Acest lucru va trebui făcut”. (Este rar folosit, dar este logic).",
    t13_inst: "Care verb vine la sfârșit?",
    t13_h1: "Verbul modal la infinitiv.",
    t13_q13: "Acest lucru se va face ___ .",
    t13_ans13: "trebuie", t13_ans13_2: "trebuie", t13_ans13_3: "trebuia", t13_ans13_4: "deveni",

    // T14 - Höfliche Bitte (Konjunktiv II)
    t14_title: "Pasiv politicos",
    t14_text: "Cu „ar putea” vag „ar trebui”, pasivul sună mult mai politicos.",
    t14_inst: "Faceți propoziția mai politicoasă!",
    t14_h1: "Folosiți „ar putea”.",
    t14_sent14: "___ te rog să dai jos muzica?",
    t14_c14_1: "Ar putea", t14_c14_2: "Can", t14_c14_3: "trebuie", t14_c14_4: "Will",

    // T15 - Abschluss-Stacker
    t15_title: "Maestru în mecanică",
    t15_text: "Construiește propoziția complexă pentru a termina!",
    t15_inst: "Stivuiți corect părțile de propoziție!",
    t15_h1: "Subiect + verb modal + ... + P2 + deveni.",
    t15_sw15_1: "Literele", t15_sw15_2: "trebuie", t15_sw15_3: "imediat", t15_sw15_4: "fi semnat.",
  }
};

export const PASSIV_MODAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "compound-word", word1: "Partizip II", word2: "werden", result: "Partizip II+werden", color: "#6366F1" },
    interactive: { type: "word-order", words: ["t1_w2", "t1_w1"], correctOrder: [0, 1], instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "muss", color: "#F59E0B", bg: "#FEF3C7" }, { text: "werden", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "word-display", word: "kann ... werden", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🚫" }, { emoji: "❌" }, { emoji: "⛔" }, { emoji: "🔇" }] },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_t4_1", isCorrect: true }, { id: "2", text: "t4_t4_2", isCorrect: false }, { id: "3", text: "t4_t4_3", isCorrect: false }], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "letter-circles", letters: ["m", "u", "s", "s", "t", "e"], color: "#B45309" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "word-order", words: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4"], correctOrder: [0, 1, 2, 3], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t7_sw7_1", "t7_sw7_2", "t7_sw7_3"], correctOrder: [0, 1, 2], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["man lüftet"], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["wird gelüftet"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t8_b8_1" }, { id: "p", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "a" }, { text: "t8_i8_2", bucketId: "p" }, { text: "t8_i8_3", bucketId: "a" }, { text: "t8_i8_4", bucketId: "p" }], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "medium",
    svg: { type: "word-display", word: "nicht", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "easy",
    svg: { type: "letter-circles", letters: ["z", "u"], color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t12_w12_1", "t12_w12_2", "t12_w12_3", "t12_w12_4", "t12_w12_5", "t12_w12_6"], correctIndices: [2], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "⏱️" }, { emoji: "⏰" }, { emoji: "🕐" }, { emoji: "⌛" }] },
    interactive: { type: "gap-fill", sentence: "t13_q13", choices: ["t13_ans13", "t13_ans13_2", "t13_ans13_3", "t13_ans13_4"], correctIndex: 0, instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Könnte", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t14_sent14", choices: ["t14_c14_1", "t14_c14_2", "t14_c14_3", "t14_c14_4"], correctIndex: 0, instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "🏆" }, { emoji: "⭐" }, { emoji: "🎯" }, { emoji: "✅" }] },
    interactive: { type: "physics-stacker", words: ["t15_sw15_1", "t15_sw15_2", "t15_sw15_3", "t15_sw15_4"], correctOrder: [0, 1, 2, 3], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "passiv_modal_k7" }
  }
];


export const STIL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Rhetorik-Labor (Stilmittel)",

    // T1 - Alliteration
    t1_title: "Gleicher Anfang (Alliteration)",
    t1_text: "Bei der Alliteration beginnen mehrere Wörter mit dem gleichen Anlaut. 'Milch macht müde Männer munter.'",
    t1_inst: "Welcher Satz ist eine Alliteration?",
    t1_h1: "Suche nach Wörtern, die mit dem gleichen Buchstaben starten.",
    t1_q1: "Finde die Alliteration:",
    t1_ans1: "Fischers Fritz fischt frische Fische.", t1_ans1_2: "Der Himmel ist heute blau.",

    // T2 - Metapher
    t2_title: "Sprachliche Bilder (Metapher)",
    t2_text: "Eine Metapher ist ein Wort in übertragener Bedeutung. 'Ein Meer von Tränen' bedeutet nicht echtes Salzwasser.",
    t2_inst: "Verbinde die Metapher mit ihrer Bedeutung!",
    t2_h1: "Warteschlange -> Menschen, die wie eine Schlange stehen.",
    t2_ml2_1: "Rabenmutter", t2_mr2_1: "Gefühlskalte Mutter",
    t2_ml2_2: "Warteschlange", t2_mr2_2: "Reihe von Menschen",
    t2_ml2_3: "Flugzeuge im Bauch", t2_mr2_3: "Verliebt sein",

    // T3 - Vergleich
    t3_title: "Stark wie ein Löwe (Vergleich)",
    t3_text: "Ein Vergleich verknüpft zwei Dinge mit dem Wort 'wie' oder 'als'.",
    t3_inst: "Setze das Vergleichswort richtig ein!",
    t3_h1: "Vergleiche brauchen meistens 'wie'.",
    t3_sent3: "Er ist schlau ___ ein Fuchs.",
    t3_c3_1: "wie", t3_c3_2: "als", t3_c3_3: "so", t3_c3_4: "und",

    // T4 - Personifikation
    t4_title: "Leblose Dinge (Personifikation)",
    t4_text: "Dinge oder Naturerscheinungen erhalten menschliche Eigenschaften. 'Die Sonne lacht.'",
    t4_inst: "Sortiere: Personifikation oder normaler Satz?",
    t4_h1: "Kann die Sonne wirklich lachen? Nein -> Personifikation.",
    t4_b4_1: "Personifikation 🎭", t4_b4_2: "Realität 🏠",
    t4_i4_1: "Die Sonne lacht.", t4_i4_2: "Die Sonne scheint.", t4_i4_3: "Der Wind singt.", t4_i4_4: "Der Wind weht.",

    // T5 - Hyperbel
    t5_title: "Übertreibung (Hyperbel)",
    t5_text: "Eine Hyperbel macht Dinge viel größer oder kleiner, als sie sind. 'Ein Meer von Tränen.'",
    t5_inst: "Ordne die Ausdrücke nach ihrer Stärke!",
    t5_h1: "viel -> riesig -> unendlich.",
    t5_sw5_1: "viel", t5_sw5_2: "riesig", t5_sw5_3: "unendlich",

    // T6 - Rhetorische Frage
    t6_title: "Fragen ohne Antwort",
    t6_text: "Eine rhetorische Frage braucht keine Antwort, weil sie jeder schon kennt. 'Wer ist schon perfekt?'",
    t6_inst: "Schieße auf die rhetorischen Fragen!",
    t6_h1: "Braucht man auf diese Frage eine Antwort?",
    t6_q6: "Welche Frage ist rhetorisch?",
    t6_t6_1: "Habe ich es dir nicht gesagt?", t6_t6_2: "Wie viel Uhr ist es?", t6_t6_3: "Wo wohnst du?",

    // T7 - Anapher
    t7_title: "Wiederholung (Anapher)",
    t7_text: "Wörter werden am Anfang aufeinanderfolgender Sätze wiederholt. 'Ich kam, ich sah, ich siegte.'",
    t7_inst: "Markiere das Wort, das wiederholt wird!",
    t7_h1: "Suche das Wort am Satzanfang.",
    t7_w7_1: "Wir", t7_w7_2: "wollen", t7_w7_3: "lernen.", t7_w7_4: "Wir", t7_w7_5: "wollen", t7_w7_6: "siegen.",

    // T8 - Klimax
    t8_title: "Steigerung (Klimax)",
    t8_text: "Eine stufenartige Steigerung von Wörtern. 'Ich kam, sah und siegte.'",
    t8_inst: "Bringe die Wörter in die richtige Steigerungsform!",
    t8_h1: "Tage -> Wochen -> Jahre.",
    t8_sw8_1: "Tage", t8_sw8_2: "Wochen", t8_sw8_3: "Jahre",

    // T9 - Antithese
    t9_title: "Gegensätze (Antithese)",
    t9_text: "Gegensätzliche Begriffe werden gegenübergestellt. 'Himmel und Hölle.'",
    t9_inst: "Verbinde die Gegensätze!",
    t9_h1: "Tag -> Nacht, Gut -> Böse.",
    t9_ml9_1: "Himmel", t9_mr9_1: "Hölle",
    t9_ml9_2: "Tag", t9_mr9_2: "Nacht",
    t9_ml9_3: "heiß", t9_mr9_3: "kalt",

    // T10 - Lautmalerei (Onomatopoesie)
    t10_title: "Klingende Wörter",
    t10_text: "Wörter, die Geräusche nachmachen. 'Kuckuck', 'Zischen', 'Wuff'.",
    t10_inst: "Párosítsd a hangutánzó szót a forrásával!",
    t10_h1: "Miau -> Katze.",
    t10_ml10_1: "Miau", t10_mr10_1: "Katze",
    t10_ml10_2: "Wuff", t10_mr10_2: "Hund",
    t10_ml10_3: "Kuckuck", t10_mr10_3: "Vogel",

    // T11 - Ellipse
    t11_title: "Kurz gefasst (Ellipse)",
    t11_text: "Ein grammatisch unvollständiger Satz. 'Erst die Arbeit, dann das Vergnügen.'",
    t11_inst: "Welches Wort wurde weggelassen?",
    t11_h1: "Ersetze die Lücke im Kopf: 'Erst kommt die Arbeit...'",
    t11_sent11: "Erst die Arbeit, dann ___ Vergnügen.",
    t11_c11_1: "das", t11_c11_2: "ein", t11_c11_3: "ist", t11_c11_4: "kommt",

    // T12 - Symbol
    t12_title: "Bilder mit Bedeutung (Symbol)",
    t12_text: "Ein konkretes Ding steht für etwas Abstraktes. 'Taube' steht für 'Frieden'.",
    t12_inst: "Verbinde das Symbol mit seiner Bedeutung!",
    t12_h1: "Herz = Liebe.",
    t12_ml12_1: "Rote Rose", t12_mr12_1: "Liebe",
    t12_ml12_2: "Taube", t12_mr12_2: "Frieden",
    t12_ml12_3: "Kleeblatt", t12_mr12_3: "Glück",

    // T13 - Euphemismus
    t13_title: "Beschönigung (Euphemismus)",
    t13_text: "Ein negatives Wort wird durch ein schöneres ersetzt. 'Ableben' statt 'Sterben'.",
    t13_inst: "Sortiere: Direkt oder Beschönigt?",
    t13_h1: "Seniorenresidenz klingt schöner als Altersheim.",
    t13_b13_1: "Euphemismus ✨", t13_b13_2: "Direkt 📢",
    t13_i13_1: "Seniorenresidenz", t13_i13_2: "Altersheim", t13_i13_3: "preiswert", t13_i13_4: "billig",

    // T14 - Oxymoron
    t14_title: "Widerspruch (Oxymoron)",
    t14_text: "Zwei Begriffe, die sich eigentlich ausschließen. 'Bittersüß', 'Hassliebe'.",
    t14_inst: "Markiere das Wort, das den Widerspruch bildet!",
    t14_h1: "Suche nach dem Wortteil, der das Gegenteil bedeutet.",
    t14_w14_1: "Das", t14_w14_2: "ist", t14_w14_3: "eine", t14_w14_4: "Hassliebe", t14_w14_5: ".",

    // T15 - Parallelismus
    t15_title: "Gleicher Bauplan",
    t15_text: "Sätze sind genau gleich aufgebaut. 'Kleine Kinder, kleine Sorgen. Große Kinder, große Sorgen.'",
    t15_inst: "Baue den parallelen Satz fertig!",
    t15_h1: "Folge dem Muster des ersten Satzteils.",
    t15_f15_1: "Kleine Kinder,", t15_f15_2: "kleine Sorgen.", t15_f15_3: "Große Kinder,", t15_f15_4: "große Sorgen.",
  },
  en: {
    explorer_title: "Rhetoric laboratory (stylistic devices)",

    // T1 - Alliteration
    t1_title: "Same beginning (alliteration)",
    t1_text: "In alliteration, several words begin with the same sound. 'Milk cheers up tired men.'",
    t1_inst: "Which sentence is an alliteration?",
    t1_h1: "Search for words that start with the same letter.",
    t1_q1: "Find the alliteration:",
    t1_ans1: "Fischer's Fritz catches fresh fish.", t1_ans1_2: "The sky is blue today.",

    // T2 - Metapher
    t2_title: "Linguistic images (metaphor)",
    t2_text: "A metaphor is a word with a figurative meaning. 'A sea of ​​tears' does not mean real salt water.",
    t2_inst: "Connect the metaphor with its meaning!",
    t2_h1: "Queue -> people standing like a queue.",
    t2_ml2_1: "Raven mother", t2_mr2_1: "Emotional mother",
    t2_ml2_2: "Queue", t2_mr2_2: "row of people",
    t2_ml2_3: "Airplanes in your stomach", t2_mr2_3: "To be in love",

    // T3 - Vergleich
    t3_title: "Strong as a lion (comparison)",
    t3_text: "A comparison links two things with the word 'like' or 'as'.",
    t3_inst: "Use the comparison word correctly!",
    t3_h1: "Comparisons usually need 'like'.",
    t3_sent3: "He is smart ___ a fox.",
    t3_c3_1: "like", t3_c3_2: "as", t3_c3_3: "like that", t3_c3_4: "and",

    // T4 - Personifikation
    t4_title: "Inanimate things (personification)",
    t4_text: "Things or natural phenomena acquire human characteristics. 'The sun is smiling.'",
    t4_inst: "Sort: Personification or normal sentence?",
    t4_h1: "Can the sun really smile? No -> personification.",
    t4_b4_1: "Personification 🎭", t4_b4_2: "Reality 🏠",
    t4_i4_1: "The sun is smiling.", t4_i4_2: "The sun is shining.", t4_i4_3: "The wind sings.", t4_i4_4: "The wind is blowing.",

    // T5 - Hyperbel
    t5_title: "exaggeration (hyperbole)",
    t5_text: "A hyperbola makes things much larger or smaller than they are. 'A sea of ​​tears.'",
    t5_inst: "Arrange the expressions according to their strength!",
    t5_h1: "a lot -> huge -> infinite.",
    t5_sw5_1: "a lot", t5_sw5_2: "huge", t5_sw5_3: "infinite",

    // T6 - Rhetorische Frage
    t6_title: "Questions without answers",
    t6_text: "A rhetorical question doesn't need an answer because everyone already knows it. 'Who's perfect anyway?'",
    t6_inst: "Shoot the rhetorical questions!",
    t6_h1: "Do you need an answer to this question?",
    t6_q6: "Which question is rhetorical?",
    t6_t6_1: "Didn't I tell you?", t6_t6_2: "What time is it?", t6_t6_3: "Where do you live?",

    // T7 - Anapher
    t7_title: "repetition (anaphora)",
    t7_text: "Words are repeated at the beginning of consecutive sentences. 'I came, I saw, I conquered.'",
    t7_inst: "Mark the word that is repeated!",
    t7_h1: "Find the word at the beginning of the sentence.",
    t7_w7_1: "We", t7_w7_2: "want", t7_w7_3: "learn.", t7_w7_4: "We", t7_w7_5: "want", t7_w7_6: "win.",

    // T8 - Klimax
    t8_title: "increase (climax)",
    t8_text: "A gradual progression of words. 'I came, saw and conquered.'",
    t8_inst: "Put the words in the correct form!",
    t8_h1: "Days -> Weeks -> Years.",
    t8_sw8_1: "days", t8_sw8_2: "weeks", t8_sw8_3: "years",

    // T9 - Antithese
    t9_title: "opposites (antithesis)",
    t9_text: "Opposite terms are contrasted. 'Heaven and Hell.'",
    t9_inst: "Connect the opposites!",
    t9_h1: "Day -> Night, Good -> Evil.",
    t9_ml9_1: "Heaven", t9_mr9_1: "Hell",
    t9_ml9_2: "day", t9_mr9_2: "night",
    t9_ml9_3: "hot", t9_mr9_3: "cold",

    // T10 - Lautmalerei (Onomatopoesie)
    t10_title: "Sounding words",
    t10_text: "Words that mimic sounds. 'Cuckoo', 'hiss', 'woof'.",
    t10_inst: "Párosítsd a hangutánzó szót a forrásával!",
    t10_h1: "Meow -> cat.",
    t10_ml10_1: "Meow", t10_mr10_1: "cat",
    t10_ml10_2: "Woof", t10_mr10_2: "Dog",
    t10_ml10_3: "Cuckoo", t10_mr10_3: "bird",

    // T11 - Ellipse
    t11_title: "In brief (ellipse)",
    t11_text: "A grammatically incomplete sentence. 'First work, then pleasure.'",
    t11_inst: "Which word was left out?",
    t11_h1: "Replace the gap in your head: 'First comes the work...'",
    t11_sent11: "First work, then ___ pleasure.",
    t11_c11_1: "that", t11_c11_2: "a", t11_c11_3: "is", t11_c11_4: "comes",

    // T12 - Symbol
    t12_title: "Pictures with meaning (symbol)",
    t12_text: "A concrete thing stands for something abstract. 'Dove' stands for 'peace'.",
    t12_inst: "Connect the symbol with its meaning!",
    t12_h1: "Heart = love.",
    t12_ml12_1: "Red rose", t12_mr12_1: "Love",
    t12_ml12_2: "Pigeon", t12_mr12_2: "Peace",
    t12_ml12_3: "Shamrock", t12_mr12_3: "Happiness",

    // T13 - Euphemismus
    t13_title: "euphemism (euphemism)",
    t13_text: "A negative word is replaced with a nicer one. 'Death' instead of 'dying'.",
    t13_inst: "Sort: Direct or Embellished?",
    t13_h1: "A retirement home sounds nicer than a retirement home.",
    t13_b13_1: "Euphemism ✨", t13_b13_2: "Direct 📢",
    t13_i13_1: "Senior residence", t13_i13_2: "retirement home", t13_i13_3: "inexpensive", t13_i13_4: "cheap",

    // T14 - Oxymoron
    t14_title: "contradiction (oxymoron)",
    t14_text: "Two terms that are actually mutually exclusive. 'Bittersweet', 'love-hate'.",
    t14_inst: "Mark the word that forms the contradiction!",
    t14_h1: "Find the part of the word that means the opposite.",
    t14_w14_1: "This", t14_w14_2: "is", t14_w14_3: "one", t14_w14_4: "Love-hate relationship", t14_w14_5: ".",

    // T15 - Parallelismus
    t15_title: "Same blueprint",
    t15_text: "Sentences are structured exactly the same. 'Little children, little worries. Big kids, big worries.'",
    t15_inst: "Complete the parallel sentence!",
    t15_h1: "Follow the pattern in the first part of the sentence.",
    t15_f15_1: "little children,", t15_f15_2: "little worries.", t15_f15_3: "Big children,", t15_f15_4: "big worries.",
  },
  hu: {
    explorer_title: "Retorika laboratórium (stiláris eszközök)",

    // T1 - Alliteration
    t1_title: "Ugyanaz a kezdet (alliteráció)",
    t1_text: "Alliterációban több szó ugyanazzal a hanggal kezdődik. – A tej felvidítja a fáradt férfiakat.",
    t1_inst: "Melyik mondat alliteráció?",
    t1_h1: "Keressen olyan szavakat, amelyek ugyanazzal a betűvel kezdődnek.",
    t1_q1: "Keresse meg az alliterációt:",
    t1_ans1: "Fischer Fritzje friss halat fog.", t1_ans1_2: "Ma kék az ég.",

    // T2 - Metapher
    t2_title: "Nyelvi képek (metafora)",
    t2_text: "A metafora átvitt jelentésű szó. A „könnytenger” nem jelent igazi sós vizet.",
    t2_inst: "Kapcsold össze a metaforát a jelentésével!",
    t2_h1: "Sor -> sorban álló emberek.",
    t2_ml2_1: "Holló anya", t2_mr2_1: "Érzelmes anya",
    t2_ml2_2: "Sor", t2_mr2_2: "embersor",
    t2_ml2_3: "Repülőgépek a gyomrodban", t2_mr2_3: "Szerelmesnek lenni",

    // T3 - Vergleich
    t3_title: "Erős, mint az oroszlán (összehasonlítás)",
    t3_text: "Az összehasonlítás két dolgot kapcsol össze a „tetszik” vagy „ahogyan” szóval.",
    t3_inst: "Használd helyesen az összehasonlító szót!",
    t3_h1: "Az összehasonlításhoz általában „tetszik” kell.",
    t3_sent3: "Okos ___ egy róka.",
    t3_c3_1: "tetszik", t3_c3_2: "mint", t3_c3_3: "olyan", t3_c3_4: "és",

    // T4 - Personifikation
    t4_title: "Élettelen dolgok (megszemélyesítés)",
    t4_text: "A dolgok vagy a természeti jelenségek emberi tulajdonságokat szereznek. – A nap mosolyog.",
    t4_inst: "Rendezés: Személyiség vagy normál mondat?",
    t4_h1: "Tényleg tud mosolyogni a nap? Nem -> megszemélyesítés.",
    t4_b4_1: "Megszemélyesítés 🎭", t4_b4_2: "Valóság 🏠",
    t4_i4_1: "A nap mosolyog.", t4_i4_2: "A nap süt.", t4_i4_3: "A szél énekel.", t4_i4_4: "Fúj a szél.",

    // T5 - Hyperbel
    t5_title: "túlzás (hiperbola)",
    t5_text: "A hiperbola a dolgokat sokkal nagyobbra vagy kisebbre teszi, mint amilyenek. – Tengernyi könny.",
    t5_inst: "Rendezd a kifejezéseket erősségük szerint!",
    t5_h1: "sok -> hatalmas -> végtelen.",
    t5_sw5_1: "sokat", t5_sw5_2: "hatalmas", t5_sw5_3: "végtelen",

    // T6 - Rhetorische Frage
    t6_title: "Kérdések válaszok nélkül",
    t6_text: "Egy költői kérdésre nem kell válaszolni, mert már mindenki tudja. – Egyébként ki a tökéletes?",
    t6_inst: "Lődd le a költői kérdéseket!",
    t6_h1: "Válaszra van szüksége erre a kérdésre?",
    t6_q6: "Melyik kérdés retorikai?",
    t6_t6_1: "nem mondtam?", t6_t6_2: "Mennyi az idő?", t6_t6_3: "hol laksz?",

    // T7 - Anapher
    t7_title: "ismétlés (anafora)",
    t7_text: "A szavak az egymást követő mondatok elején ismétlődnek. \"Jöttem, láttam, győztem.\"",
    t7_inst: "Jelölje be az ismétlődő szót!",
    t7_h1: "Keresse meg a mondat elején található szót!",
    t7_w7_1: "Mi", t7_w7_2: "szeretnének", t7_w7_3: "tanul.", t7_w7_4: "Mi", t7_w7_5: "szeretnének", t7_w7_6: "győzelem.",

    // T8 - Klimax
    t8_title: "növekedés (csúcspont)",
    t8_text: "A szavak fokozatos fejlődése. \"Jöttem, láttam és győztem.\"",
    t8_inst: "Rakd a szavakat a megfelelő formába!",
    t8_h1: "Napok -> Hetek -> Évek.",
    t8_sw8_1: "napokon", t8_sw8_2: "hétig", t8_sw8_3: "év",

    // T9 - Antithese
    t9_title: "ellentétek (antitézis)",
    t9_text: "Az ellentétes kifejezéseket szembeállítják egymással. – Mennyország és pokol.",
    t9_inst: "Kösd össze az ellentéteket!",
    t9_h1: "Nap -> Éjszaka, Jó -> Gonosz.",
    t9_ml9_1: "Mennyország", t9_mr9_1: "A pokolba",
    t9_ml9_2: "napon", t9_mr9_2: "éjszaka",
    t9_ml9_3: "forró", t9_mr9_3: "hideg",

    // T10 - Lautmalerei (Onomatopoesie)
    t10_title: "Hangzatos szavak",
    t10_text: "Hangokat utánzó szavak. „Kakukk”, „sziszeg”, „jaj”.",
    t10_inst: "Párosítsd a hangutánzó szót a forrásával!",
    t10_h1: "Miau -> macska.",
    t10_ml10_1: "Miau", t10_mr10_1: "kat",
    t10_ml10_2: "Hú", t10_mr10_2: "Kutya",
    t10_ml10_3: "Kakukk", t10_mr10_3: "madár",

    // T11 - Ellipse
    t11_title: "Röviden (ellipszis)",
    t11_text: "Nyelvtanilag hiányos mondat. – Először a munka, aztán az élvezet.",
    t11_inst: "Melyik szó maradt ki?",
    t11_h1: "Cseréld ki a rést a fejedben: \"Előbb jön a munka...\"",
    t11_sent11: "Először munka, aztán ___ öröm.",
    t11_c11_1: "hogy", t11_c11_2: "a", t11_c11_3: "van", t11_c11_4: "jön",

    // T12 - Symbol
    t12_title: "Képek jelentéssel (szimbólum)",
    t12_text: "A konkrét dolog valami absztraktot jelent. A „galamb” a „béke” rövidítése.",
    t12_inst: "Kösd össze a szimbólumot a jelentésével!",
    t12_h1: "Szív = szerelem.",
    t12_ml12_1: "Vörös rózsa", t12_mr12_1: "Szerelem",
    t12_ml12_2: "Galamb", t12_mr12_2: "Béke",
    t12_ml12_3: "Shamrock", t12_mr12_3: "Boldogság",

    // T13 - Euphemismus
    t13_title: "eufemizmus (eufemizmus)",
    t13_text: "A negatív szót szebbre cseréljük. A „halál” helyett „halál”.",
    t13_inst: "Rendezés: közvetlen vagy díszített?",
    t13_h1: "Egy nyugdíjas otthon szebben hangzik, mint egy nyugdíjas otthon.",
    t13_b13_1: "Eufemizmus ✨", t13_b13_2: "Közvetlen 📢",
    t13_i13_1: "Senior rezidencia", t13_i13_2: "nyugdíjas otthon", t13_i13_3: "olcsó", t13_i13_4: "olcsó",

    // T14 - Oxymoron
    t14_title: "ellentmondás (oximoron)",
    t14_text: "Két kifejezés, amelyek valójában kizárják egymást. „Keserves”, „szeretet-gyűlölet”.",
    t14_inst: "Jelölje be az ellentmondást képző szót!",
    t14_h1: "Keresse meg a szónak azt a részét, amely az ellenkezőjét jelenti!",
    t14_w14_1: "Ezt", t14_w14_2: "van", t14_w14_3: "egyet", t14_w14_4: "Szeretet-gyűlölet kapcsolat", t14_w14_5: ".",

    // T15 - Parallelismus
    t15_title: "Ugyanaz a tervrajz",
    t15_text: "A mondatok szerkezete pontosan ugyanaz. 'Kis gyerekek, kis gondok. Nagy gyerekek, nagy gondok.",
    t15_inst: "Fejezd be a párhuzamos mondatot!",
    t15_h1: "Kövesse a mondat első részében található mintát.",
    t15_f15_1: "kicsi gyerekek,", t15_f15_2: "kis gondok.", t15_f15_3: "Nagy gyerekek,", t15_f15_4: "nagy gondok.",
  },
  ro: {
    explorer_title: "Rhetoric laboratory (stylistic devices)",

    // T1 - Alliteration
    t1_title: "Same beginning (alliteration)",
    t1_text: "În aliterație, mai multe cuvinte încep cu același sunet. 'Milk cheers up tired men.'",
    t1_inst: "Care propoziție este o aliterație?",
    t1_h1: "Căutați cuvinte care încep cu aceeași literă.",
    t1_q1: "Găsiți aliterația:",
    t1_ans1: "Fischer's Fritz catches fresh fish.", t1_ans1_2: "The sky is blue today.",

    // T2 - Metapher
    t2_title: "Imagini lingvistice (metaforă)",
    t2_text: "A metaphor is a word with a figurative meaning. „O mare de lacrimi” nu înseamnă apă sărată adevărată.",
    t2_inst: "Conectați metafora cu sensul ei!",
    t2_h1: "Coadă -> oameni care stau ca la coadă.",
    t2_ml2_1: "Raven mother", t2_mr2_1: "Emotional mother",
    t2_ml2_2: "Queue", t2_mr2_2: "row of people",
    t2_ml2_3: "Airplanes in your stomach", t2_mr2_3: "To be in love",

    // T3 - Vergleich
    t3_title: "Puternic ca un leu (comparație)",
    t3_text: "O comparație leagă două lucruri cu cuvântul „ca” sau „ca”.",
    t3_inst: "Folosește corect cuvântul de comparație!",
    t3_h1: "Comparisons usually need 'like'.",
    t3_sent3: "He is smart ___ a fox.",
    t3_c3_1: "ca", t3_c3_2: "ca", t3_c3_3: "asa", t3_c3_4: "şi",

    // T4 - Personifikation
    t4_title: "Inanimate things (personification)",
    t4_text: "Lucrurile sau fenomenele naturale capătă caracteristici umane. 'The sun is smiling.'",
    t4_inst: "Sortare: personificare sau propoziție normală?",
    t4_h1: "Poate soarele să zâmbească cu adevărat? No -> personification.",
    t4_b4_1: "Personification 🎭", t4_b4_2: "Realitatea 🏠",
    t4_i4_1: "The sun is smiling.", t4_i4_2: "The sun is shining.", t4_i4_3: "The wind sings.", t4_i4_4: "The wind is blowing.",

    // T5 - Hyperbel
    t5_title: "exagerare (hiperbola)",
    t5_text: "O hiperbola face lucrurile mult mai mari sau mai mici decât sunt. „O mare de lacrimi”.",
    t5_inst: "Aranjați expresiile în funcție de puterea lor!",
    t5_h1: "mult -> imens -> infinit.",
    t5_sw5_1: "mult", t5_sw5_2: "imens", t5_sw5_3: "infinit",

    // T6 - Rhetorische Frage
    t6_title: "Întrebări fără răspunsuri",
    t6_text: "O întrebare retorică nu are nevoie de răspuns pentru că toată lumea o știe deja. — Oricum, cine e perfect?",
    t6_inst: "Trage întrebările retorice!",
    t6_h1: "Do you need an answer to this question?",
    t6_q6: "Which question is rhetorical?",
    t6_t6_1: "Nu ti-am spus?", t6_t6_2: "Cât este ceasul?", t6_t6_3: "Unde locuiţi?",

    // T7 - Anapher
    t7_title: "repetiție (anaforă)",
    t7_text: "Cuvintele se repetă la începutul propozițiilor consecutive. „Am venit, am văzut, am cucerit”.",
    t7_inst: "Notează cuvântul care se repetă!",
    t7_h1: "Găsiți cuvântul de la începutul propoziției.",
    t7_w7_1: "Noi", t7_w7_2: "vreau", t7_w7_3: "învăţa.", t7_w7_4: "Noi", t7_w7_5: "vreau", t7_w7_6: "câştiga.",

    // T8 - Klimax
    t8_title: "crestere (climax)",
    t8_text: "O progresie treptată a cuvintelor. 'I came, saw and conquered.'",
    t8_inst: "Pune cuvintele în forma corectă!",
    t8_h1: "Zile -> Săptămâni -> Ani.",
    t8_sw8_1: "zile", t8_sw8_2: "săptămâni", t8_sw8_3: "ani",

    // T9 - Antithese
    t9_title: "contrarii (antiteză)",
    t9_text: "Termenii opuși sunt contrastați. — Raiul și iadul.",
    t9_inst: "Conectați contrariile!",
    t9_h1: "Zi -> Noapte, Bine -> Rău.",
    t9_ml9_1: "Raiul", t9_mr9_1: "Iadul",
    t9_ml9_2: "zi", t9_mr9_2: "noaptea",
    t9_ml9_3: "fierbinte", t9_mr9_3: "frig",

    // T10 - Lautmalerei (Onomatopoesie)
    t10_title: "Cuvinte care sună",
    t10_text: "Cuvinte care imită sunetele. „Cuc”, „suierat”, „woof”.",
    t10_inst: "Párosítsd a hangutánzó szót a forrásával!",
    t10_h1: "Miau -> pisica.",
    t10_ml10_1: "Miau", t10_mr10_1: "pisica",
    t10_ml10_2: "Woof", t10_mr10_2: "Câine",
    t10_ml10_3: "cucul", t10_mr10_3: "pasăre",

    // T11 - Ellipse
    t11_title: "Pe scurt (elipsa)",
    t11_text: "A grammatically incomplete sentence. — Mai întâi munca, apoi plăcerea.",
    t11_inst: "Care cuvânt a fost omis?",
    t11_h1: "Înlocuiește golul din capul tău: „Mai întâi vine munca...”",
    t11_sent11: "Mai întâi munca, apoi ___ plăcerea.",
    t11_c11_1: "că", t11_c11_2: "a", t11_c11_3: "este", t11_c11_4: "vine",

    // T12 - Symbol
    t12_title: "Imagini cu semnificație (simbol)",
    t12_text: "Un lucru concret înseamnă ceva abstract. „Dove” înseamnă „pace”.",
    t12_inst: "Conectați simbolul cu semnificația lui!",
    t12_h1: "Inima = iubire.",
    t12_ml12_1: "Trandafir roșu", t12_mr12_1: "Dragoste",
    t12_ml12_2: "Porumbel", t12_mr12_2: "Pace",
    t12_ml12_3: "Shamrock", t12_mr12_3: "Fericire",

    // T13 - Euphemismus
    t13_title: "eufemism (eufemism)",
    t13_text: "Un cuvânt negativ este înlocuit cu unul mai frumos. 'Death' instead of 'dying'.",
    t13_inst: "Sortare: direct sau impodobit?",
    t13_h1: "O casă de bătrâni sună mai frumos decât o casă de bătrâni.",
    t13_b13_1: "Eufemism ✨", t13_b13_2: "Direct 📢",
    t13_i13_1: "Reședință pentru seniori", t13_i13_2: "casa de batrani", t13_i13_3: "necostisitoare", t13_i13_4: "ieftin",

    // T14 - Oxymoron
    t14_title: "contradicție (oximoron)",
    t14_text: "Doi termeni care se exclud reciproc. „Dulce-amărui”, „dragoste-ura”.",
    t14_inst: "Marcați cuvântul care formează contradicția!",
    t14_h1: "Găsiți partea din cuvânt care înseamnă opusul.",
    t14_w14_1: "Aceasta", t14_w14_2: "este", t14_w14_3: "unul", t14_w14_4: "Relația dragoste-ura", t14_w14_5: ".",

    // T15 - Parallelismus
    t15_title: "Același plan",
    t15_text: "Propozițiile sunt structurate exact la fel. „Copii mici, mici griji. Copii mari, griji mari.",
    t15_inst: "Completați propoziția paralelă!",
    t15_h1: "Urmați modelul din prima parte a propoziției.",
    t15_f15_1: "copii mici,", t15_f15_2: "mici griji.", t15_f15_3: "Copii mari,", t15_f15_4: "mari griji.",
  }
};

export const STIL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "rhyme-pair", word1: "Fischers", word2: "Fritz", color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t1_inst", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🐱", label: "Rabenmutter" }, { emoji: "🐍", label: "Warteschlange" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "easy",
    svg: { type: "two-groups", left: { items: ["Löwe", "stark"], bg: "#f0f9ff", border: "#bae6fd" }, right: { items: ["Fuchs", "schlau"], bg: "#fdf4ff", border: "#e9d5ff" } },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Sonne lacht", color: "#F59E0B", bg: "#FEF3C7" }, { text: "Wind singt", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "physics-bucket", buckets: [{ id: "p", label: "t4_b4_1" }, { id: "r", label: "t4_b4_2" }], items: [{ text: "t4_i4_1", bucketId: "p" }, { text: "t4_i4_2", bucketId: "r" }, { text: "t4_i4_3", bucketId: "p" }, { text: "t4_i4_4", bucketId: "r" }], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📈" }, { emoji: "📊" }, { emoji: "📉" }, { emoji: "🔢" }] },
    interactive: { type: "physics-stacker", words: ["t5_sw5_1", "t5_sw5_2", "t5_sw5_3"], correctOrder: [0, 1, 2], instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "letter-circles", letters: ["?", "!", ".", "…"], color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t6_q6", targets: [{ id: "1", text: "t6_t6_1", isCorrect: true }, { id: "2", text: "t6_t6_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_4"], correctIndices: [0, 3], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t8_sw8_1", "t8_sw8_2", "t8_sw8_3"], correctOrder: [0, 1, 2], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Himmel"], bg: "#EFF6FF", border: "#3B82F6" }, right: { items: ["Hölle"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "word-syllables", parts: ["Ku", "ckuck"], color: "#6366F1" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "✂️" }, { emoji: "📏" }, { emoji: "📐" }, { emoji: "🔧" }] },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🕊️", label: "Frieden" }, { emoji: "❤️", label: "Liebe" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t12_ml12_1", right: "t12_mr12_1" }, { left: "t12_ml12_2", right: "t12_mr12_2" }, { left: "t12_ml12_3", right: "t12_mr12_3" }], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["Euphemismus"], bg: "#F0FDF4", border: "#22C55E" }, right: { items: ["Direkt"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "e", label: "t13_b13_1" }, { id: "d", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "e" }, { text: "t13_i13_2", bucketId: "d" }, { text: "t13_i13_3", bucketId: "e" }, { text: "t13_i13_4", bucketId: "d" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "word-display", word: "Hassliebe", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t14_w14_4"], correctIndices: [0], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "stilmittel_k7" }
  }
];


export const CAUSAL_COND_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Logik-Labyrinth (Kausal & Konditional)",

    // T1 - weil (Kausal)
    t1_title: "Grund mit 'weil'",
    t1_text: "Ein Kausalsatz nennt den Grund. Nach 'weil' steht das konjugierte Verb am Ende des Satzes.",
    t1_inst: "Setze das Verb an die richtige Stelle!",
    t1_h1: "Das Verb 'ist' muss ganz nach hinten.",
    t1_sent1: "Ich bleibe zu Hause, weil es heute ___ ___ .",
    t1_c1_1: "kalt ist", t1_c1_2: "ist kalt", t1_c1_3: "kalt war", t1_c1_4: "kalt wird",

    // T2 - denn (Kausal)
    t2_title: "Grund mit 'denn'",
    t2_text: "'denn' ist eine Konjunktion auf Position 0. Das Verb steht danach auf Position 2 (wie im Hauptsatz).",
    t2_inst: "Welches Wort passt in die Lücke?",
    t2_h1: "denn + Subjekt + Verb.",
    t2_sent2: "Ich lerne viel, ___ ich will eine gute Note.",
    t2_c2_1: "denn", t2_c2_2: "weil", t2_c2_3: "da", t2_c2_4: "wenn",

    // T3 - da (Kausal)
    t3_title: "Grund mit 'da'",
    t3_text: "'da' ist ein Synonym für 'weil' und wird oft am Satzanfang genutzt. Das Verb steht am Ende.",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Da + ... + Verb.",
    t3_w3_1: "Da es regnet,", t3_w3_2: "bleiben", t3_w3_3: "wir", t3_w3_4: "drinnen.",

    // T4 - wegen (Präposition + Genitiv)
    t4_title: "Grund mit 'wegen'",
    t4_text: "'wegen' ist eine Präposition und verlangt meistens den Genitiv.",
    t4_inst: "Wähle die richtige Endung!",
    t4_h1: "wegen + des/der.",
    t4_sent4: "Wegen ___ Regens fällt das Spiel aus.",
    t4_c4_1: "des", t4_c4_2: "dem", t4_c4_3: "den", t4_c4_4: "der",

    // T5 - wenn (Konditional)
    t5_title: "Bedingung mit 'wenn'",
    t5_text: "Ein Konditionalsatz nennt eine Bedingung. 'wenn' schickt das Verb ans Ende.",
    t5_inst: "Welcher Satz ist eine Bedingung?",
    t5_h1: "Suche nach 'wenn'.",
    t5_q5: "Finde die Bedingung:",
    t5_ans5: "Wenn ich Zeit habe, komme ich.", t5_ans5_2: "Ich habe heute Zeit.",

    // T6 - falls (Konditional)
    t6_title: "Bedingung mit 'falls'",
    t6_text: "'falls' nutzt man, wenn die Bedingung weniger wahrscheinlich ist als bei 'wenn'.",
    t6_inst: "Fülle die Lücke!",
    t6_h1: "Es ist ein Synonym für 'wenn'.",
    t6_sent6: "___ es regnen sollte, nehmen wir einen Schirm.",
    t6_c6_1: "Falls", t6_c6_2: "Weil", t6_c6_3: "Dass", t6_c6_4: "Obwohl",

    // T7 - sofern (Konditional)
    t7_title: "Bedingung mit 'sofern'",
    t7_text: "'sofern' ist formeller als 'wenn' oder 'falls'.",
    t7_inst: "Markiere das Wort 'sofern'!",
    t7_h1: "Es steht am Satzanfang.",
    t7_w7_1: "Sofern", t7_w7_2: "nichts", t7_w7_3: "dazwischenkommt,", t7_w7_4: "sehen", t7_w7_5: "wir", t7_w7_6: "uns.",

    // T8 - bei (Präposition + Dativ)
    t8_title: "Bedingung mit 'bei'",
    t8_text: "Auch mit 'bei' kann man Bedingungen ausdrücken. Es folgt der Dativ.",
    t8_inst: "Wähle den richtigen Artikel!",
    t8_h1: "bei + dem (beim).",
    t8_sent8: "___ Regen bleiben wir zu Hause.",
    t8_c8_1: "Bei", t8_c8_2: "Mit", t8_c8_3: "Wegen", t8_c8_4: "Trotz",

    // T9 - Deshalb / Deswegen
    t9_title: "Folge ausdrücken",
    t9_text: "'deshalb' und 'deswegen' sind Konjunktionaladverbien. Sie stehen auf Platz 1, das Verb folgt auf Platz 2.",
    t9_inst: "Setze den Satz richtig zusammen!",
    t9_h1: "Grund (Satz 1). Deshalb + Verb + Subjekt (Satz 2).",
    t9_f9_1: "Es regnet.", t9_f9_2: "Deshalb", t9_f9_3: "bleiben", t9_f9_4: "wir zu Hause.",

    // T10 - Warum? vs. Unter welcher Bedingung?
    t10_title: "Fragewörter",
    t10_text: "Frage nach dem Grund mit 'Warum?' und nach der Bedingung mit 'Wann?' oder 'Unter welcher Bedingung?'.",
    t10_inst: "Sortiere die Fragen!",
    t10_h1: "Warum = Kausal. Unter welcher Bedingung = Konditional.",
    t10_b10_1: "Kausal (Grund) ❓", t10_b10_2: "Konditional (Bedingung) ⚖️",
    t10_i10_1: "Warum lachst du?", t10_i10_2: "Wann kommst du?", t10_i10_3: "Weshalb gehst du?", t10_i10_4: "Falls was passiert?",

    // T11 - Magnet: Bindewörter Match
    t11_title: "Logik-Magnet",
    t11_text: "Welches Bindewort passt zu welcher logischen Verknüpfung?",
    t11_inst: "Párosítsd a kötőszót a funkciójával!",
    t11_h1: "weil = Grund, wenn = Bedingung.",
    t11_ml11_1: "weil", t11_mr11_1: "Grund",
    t11_ml11_2: "wenn", t11_mr11_2: "Bedingung",
    t11_ml11_3: "obwohl", t11_mr11_3: "Gegensatz",

    // T12 - Wort-Stapler: Satzende
    t12_title: "Verb-Stapler",
    t12_text: "Im Nebensatz stehen die Verben ganz am Ende. Bei Modalverben: Vollverb + Modalverb.",
    t12_inst: "Staple die Verben für das Satzende!",
    t12_h1: "... weil ich lernen muss.",
    t12_sw12_1: "lernen", t12_sw12_2: "muss.",

    // T13 - Slingshot: Konjunktionen
    t13_title: "Logik-Jäger",
    t13_text: "Schieße auf alle Wörter, die einen Grund (Kausal) angeben!",
    t13_inst: "Triff die Kausal-Bindewörter!",
    t13_h1: "weil, da, denn.",
    t13_q13: "Was gibt einen Grund an?",
    t13_t13_1: "weil", t13_t13_2: "da", t13_t13_3: "denn", t13_t13_4: "wenn",

    // T14 - Two Groups: HS/NS vs NS/HS
    t14_title: "Satzbau-Varianten",
    t14_text: "Man kann mit dem Hauptsatz (HS) oder dem Nebensatz (NS) anfangen.",
    t14_inst: "Sortiere die Sätze!",
    t14_h1: "Nebensatz beginnt mit dem Bindewort.",
    t14_b14_1: "HS zuerst", t14_b14_2: "NS zuerst",
    t14_i14_1: "Ich komme, wenn ich Zeit habe.", t14_i14_2: "Wenn ich Zeit habe, komme ich.",

    // T15 - Finale: Logik-Profi
    t15_title: "Logik-Meister",
    t15_text: "Vervollständige diesen komplexen Satz!",
    t15_inst: "Welches Wort passt?",
    t15_h1: "Es wird eine Bedingung gesucht.",
    t15_sent15: "Ich helfe dir, ___ du mich darum bittest.",
    t15_c15_1: "sofern", t15_c15_2: "weil", t15_c15_3: "da", t15_c15_4: "denn",
  },
  en: {
    explorer_title: "Logic Maze (Causal & Conditional)",

    // T1 - weil (Kausal)
    t1_title: "reason with 'because'",
    t1_text: "A causal proposition states the reason. After 'because' the conjugated verb comes at the end of the sentence.",
    t1_inst: "Put the verb in the right place!",
    t1_h1: "The verb 'is' has to go all the way back.",
    t1_sent1: "I'm staying at home because it's ___ ___ today.",
    t1_c1_1: "is cold", t1_c1_2: "is cold", t1_c1_3: "was cold", t1_c1_4: "gets cold",

    // T2 - denn (Kausal)
    t2_title: "Reason with 'because'",
    t2_text: "'because' is a conjunction in position 0. The verb is then in position 2 (as in the main clause).",
    t2_inst: "Which word fits in the gap?",
    t2_h1: "because + subject + verb.",
    t2_sent2: "I study a lot, ___ I want a good grade.",
    t2_c2_1: "because", t2_c2_2: "because", t2_c2_3: "there", t2_c2_4: "if",

    // T3 - da (Kausal)
    t3_title: "Reason with 'da'",
    t3_text: "'da' is a synonym for 'because' and is often used at the beginning of a sentence. The verb is at the end.",
    t3_inst: "Put the sentence in the correct order!",
    t3_h1: "There + ... + verb.",
    t3_w3_1: "Since it's raining,", t3_w3_2: "stay", t3_w3_3: "us", t3_w3_4: "inside.",

    // T4 - wegen (Präposition + Genitiv)
    t4_title: "reason with 'because of'",
    t4_text: "'because of' is a preposition and usually requires the genitive.",
    t4_inst: "Choose the right ending!",
    t4_h1: "because of + the/the.",
    t4_sent4: "The game is canceled due to ___ rain.",
    t4_c4_1: "des", t4_c4_2: "dem", t4_c4_3: "the", t4_c4_4: "the",

    // T5 - wenn (Konditional)
    t5_title: "Condition with 'if'",
    t5_text: "A conditional sentence states a condition. 'if' sends the verb to the end.",
    t5_inst: "Which sentence is a condition?",
    t5_h1: "Search for 'if'.",
    t5_q5: "Find the condition:",
    t5_ans5: "If I have time, I'll come.", t5_ans5_2: "I have time today.",

    // T6 - falls (Konditional)
    t6_title: "Condition with 'if'",
    t6_text: "'if' is used when the condition is less likely than 'if'.",
    t6_inst: "Fill the gap!",
    t6_h1: "It is a synonym for 'if'.",
    t6_sent6: "___ If it rains, we take an umbrella.",
    t6_c6_1: "If", t6_c6_2: "Because", t6_c6_3: "That", t6_c6_4: "Although",

    // T7 - sofern (Konditional)
    t7_title: "Condition with 'if'",
    t7_text: "'if' is more formal than 'if' or 'if'.",
    t7_inst: "Mark the word 'if'!",
    t7_h1: "It's at the beginning of the sentence.",
    t7_w7_1: "Unless", t7_w7_2: "nothing", t7_w7_3: "comes in between,", t7_w7_4: "see", t7_w7_5: "us", t7_w7_6: "us.",

    // T8 - bei (Präposition + Dativ)
    t8_title: "Condition with 'at'",
    t8_text: "Conditions can also be expressed with 'at'. The dative follows.",
    t8_inst: "Choose the right item!",
    t8_h1: "at + the (at).",
    t8_sent8: "___ If it rains we will stay at home.",
    t8_c8_1: "At", t8_c8_2: "With", t8_c8_3: "Because of", t8_c8_4: "Despite",

    // T9 - Deshalb / Deswegen
    t9_title: "Express consequence",
    t9_text: "'Therefore' and 'therefore' are conjunction adverbs. They are in first place, the verb follows in second place.",
    t9_inst: "Put the sentence together correctly!",
    t9_h1: "Reason (sentence 1). Therefore + verb + subject (sentence 2).",
    t9_f9_1: "It's raining.", t9_f9_2: "That's why", t9_f9_3: "stay", t9_f9_4: "us at home.",

    // T10 - Warum? vs. Unter welcher Bedingung?
    t10_title: "Question words",
    t10_text: "Ask the reason with 'Why?' and after the condition with 'When?' or 'Under what condition?'.",
    t10_inst: "Sort the questions!",
    t10_h1: "Why = causal. Under what condition = conditional.",
    t10_b10_1: "Causal (reason) ❓", t10_b10_2: "Conditional (condition) ⚖️",
    t10_i10_1: "Why are you laughing?", t10_i10_2: "When are you coming?", t10_i10_3: "Why are you leaving?", t10_i10_4: "If something happens?",

    // T11 - Magnet: Bindewörter Match
    t11_title: "Logic magnet",
    t11_text: "Which connective word goes with which logical connection?",
    t11_inst: "Párosítsd a kötőszót a funkciójával!",
    t11_h1: "because = reason, if = condition.",
    t11_ml11_1: "because", t11_mr11_1: "reason",
    t11_ml11_2: "if", t11_mr11_2: "Condition",
    t11_ml11_3: "although", t11_mr11_3: "Contrast",

    // T12 - Wort-Stapler: Satzende
    t12_title: "Verb stacker",
    t12_text: "In the subordinate clause, the verbs are at the very end. For modal verbs: main verb + modal verb.",
    t12_inst: "Stack the verbs for the end of the sentence!",
    t12_h1: "... because I have to learn.",
    t12_sw12_1: "learn", t12_sw12_2: "must.",

    // T13 - Slingshot: Konjunktionen
    t13_title: "Logic Hunter",
    t13_text: "Shoot all words that indicate a reason (causal)!",
    t13_inst: "Meet the causal connectives!",
    t13_h1: "because, because, because.",
    t13_q13: "What gives a reason?",
    t13_t13_1: "because", t13_t13_2: "there", t13_t13_3: "because", t13_t13_4: "if",

    // T14 - Two Groups: HS/NS vs NS/HS
    t14_title: "Sentence structure variants",
    t14_text: "You can start with the main clause (HS) or the subordinate clause (NS).",
    t14_inst: "Sort the sentences!",
    t14_h1: "Subordinate clause begins with the connective word.",
    t14_b14_1: "HS first", t14_b14_2: "NS first",
    t14_i14_1: "I'll come when I have time.", t14_i14_2: "If I have time, I'll come.",

    // T15 - Finale: Logik-Profi
    t15_title: "Logic master",
    t15_text: "Complete this complex sentence!",
    t15_inst: "Which word fits?",
    t15_h1: "A condition is sought.",
    t15_sent15: "I will help you ___ you ask me to.",
    t15_c15_1: "provided", t15_c15_2: "because", t15_c15_3: "there", t15_c15_4: "because",
  },
  hu: {
    explorer_title: "Logikai labirintus (ok-okozati és feltételes)",

    // T1 - weil (Kausal)
    t1_title: "ok a \"mert\" szóval",
    t1_text: "Az ok-okozati tétel kimondja az okot. A „mert” után a konjugált ige a mondat végére kerül.",
    t1_inst: "Tedd a megfelelő helyre az igét!",
    t1_h1: "Az „is” igének egészen visszafelé kell mennie.",
    t1_sent1: "Itthon maradok, mert ma ___ ___ van.",
    t1_c1_1: "hideg van", t1_c1_2: "hideg van", t1_c1_3: "hideg volt", t1_c1_4: "kihűl",

    // T2 - denn (Kausal)
    t2_title: "ok a \"mert\" szóval",
    t2_text: "A „mert” egy kötőszó a 0. pozícióban. Az ige ekkor a 2. pozícióban van (mint a főmondatban).",
    t2_inst: "Melyik szó illik a résbe?",
    t2_h1: "mert + alany + ige.",
    t2_sent2: "Sokat tanulok, ___ Jó jegyet akarok.",
    t2_c2_1: "mert", t2_c2_2: "mert", t2_c2_3: "ott", t2_c2_4: "ha",

    // T3 - da (Kausal)
    t3_title: "ok a \"da\" szóval",
    t3_text: "A „da” a „mert” szinonimája, és gyakran a mondat elején használatos. Az ige a végén van.",
    t3_inst: "Tedd a mondatot helyes sorrendbe!",
    t3_h1: "Ott + ... + ige.",
    t3_w3_1: "Mivel esik az eső,", t3_w3_2: "maradj", t3_w3_3: "minket", t3_w3_4: "belső.",

    // T4 - wegen (Präposition + Genitiv)
    t4_title: "ok a 'mert' szóval",
    t4_text: "A „mert” elöljárószó, és általában a genitivusra van szükség.",
    t4_inst: "Válassza ki a megfelelő befejezést!",
    t4_h1: "mert + a/az.",
    t4_sent4: "A játék ___ eső miatt elmarad.",
    t4_c4_1: "des", t4_c4_2: "dem", t4_c4_3: "a", t4_c4_4: "a",

    // T5 - wenn (Konditional)
    t5_title: "„ha” feltétel",
    t5_text: "A feltételes mondat feltételt mond. Az 'if' a végére küldi az igét.",
    t5_inst: "Melyik mondat feltétel?",
    t5_h1: "Keresse meg a „ha” kifejezést.",
    t5_q5: "Keresse meg a feltételt:",
    t5_ans5: "Ha lesz időm, jövök.", t5_ans5_2: "Ma van időm.",

    // T6 - falls (Konditional)
    t6_title: "„ha” feltétel",
    t6_text: "Az „if” akkor használatos, ha a feltétel kevésbé valószínű, mint az „if”.",
    t6_inst: "Töltse ki a hiányt!",
    t6_h1: "Ez a „ha” szinonimája.",
    t6_sent6: "___ Ha esik, esernyőt veszünk.",
    t6_c6_1: "Ha", t6_c6_2: "mert", t6_c6_3: "Az", t6_c6_4: "Bár",

    // T7 - sofern (Konditional)
    t7_title: "„ha” feltétel",
    t7_text: "Az „if” formálisabb, mint az „if” vagy „if”.",
    t7_inst: "Jelölje be a „ha” szót!",
    t7_h1: "A mondat elején van.",
    t7_w7_1: "Hacsak nem", t7_w7_2: "semmi", t7_w7_3: "közbe jön,", t7_w7_4: "lásd", t7_w7_5: "minket", t7_w7_6: "minket.",

    // T8 - bei (Präposition + Dativ)
    t8_title: "„at” feltétel",
    t8_text: "A feltételek „at”-val is kifejezhetők. A datívus következik.",
    t8_inst: "Válassza ki a megfelelő elemet!",
    t8_h1: "at + a (at).",
    t8_sent8: "___ Ha esik, otthon maradunk.",
    t8_c8_1: "at", t8_c8_2: "-val", t8_c8_3: "mert", t8_c8_4: "Annak ellenére",

    // T9 - Deshalb / Deswegen
    t9_title: "Kifejezett következmény",
    t9_text: "A 'tehát' és 'ezért' kötőszós határozói. Ők állnak az első helyen, az ige következik a második helyen.",
    t9_inst: "Rakd össze helyesen a mondatot!",
    t9_h1: "Ok (1. mondat). Ezért + ige + alany (2. mondat).",
    t9_f9_1: "Esik az eső.", t9_f9_2: "azért", t9_f9_3: "maradj", t9_f9_4: "mi itthon.",

    // T10 - Warum? vs. Unter welcher Bedingung?
    t10_title: "Kérdő szavak",
    t10_text: "Kérdezze meg az okot a \"Miért?\" és a \"Mikor?\" feltétel után vagy „Milyen feltételek mellett?”.",
    t10_inst: "Rendezd a kérdéseket!",
    t10_h1: "Miért = okozati. Milyen feltétel mellett = feltételes.",
    t10_b10_1: "Ok-okozati összefüggés (ok) ❓", t10_b10_2: "Feltételes (feltételes) ⚖️",
    t10_i10_1: "Miért nevetsz?", t10_i10_2: "mikor jössz?", t10_i10_3: "Miért mész el?", t10_i10_4: "Ha történik valami?",

    // T11 - Magnet: Bindewörter Match
    t11_title: "Logikai mágnes",
    t11_text: "Melyik kötőszó melyik logikai kapcsolathoz kapcsolódik?",
    t11_inst: "Párosítsd a kötőszót a funkciójával!",
    t11_h1: "mert = ok, ha = feltétel.",
    t11_ml11_1: "mert", t11_mr11_1: "ok",
    t11_ml11_2: "ha", t11_mr11_2: "Állapot",
    t11_ml11_3: "bár", t11_mr11_3: "Kontraszt",

    // T12 - Wort-Stapler: Satzende
    t12_title: "Igerakó",
    t12_text: "Az alárendelt tagmondatban az igék a legvégén vannak. Modális igék esetén: főige + modális ige.",
    t12_inst: "Rakd egymásra az igéket a mondat végére!",
    t12_h1: "... mert tanulnom kell.",
    t12_sw12_1: "tanulni", t12_sw12_2: "kell.",

    // T13 - Slingshot: Konjunktionen
    t13_title: "Logic Hunter",
    t13_text: "Lőj le minden olyan szót, amely okot (ok-okozati összefüggést) jelez!",
    t13_inst: "Találkozz az ok-okozati összefüggésekkel!",
    t13_h1: "mert, mert, mert.",
    t13_q13: "Mi ad okot?",
    t13_t13_1: "mert", t13_t13_2: "ott", t13_t13_3: "mert", t13_t13_4: "ha",

    // T14 - Two Groups: HS/NS vs NS/HS
    t14_title: "Mondatszerkezeti változatok",
    t14_text: "Kezdheti a főmondattal (HS) vagy az alárendelt tagmondattal (NS).",
    t14_inst: "Rendezd a mondatokat!",
    t14_h1: "A mellékmondat a kötőszóval kezdődik.",
    t14_b14_1: "HS először", t14_b14_2: "NS először",
    t14_i14_1: "Majd jövök, ha lesz időm.", t14_i14_2: "Ha lesz időm, jövök.",

    // T15 - Finale: Logik-Profi
    t15_title: "Logikai mester",
    t15_text: "Fejezd be ezt az összetett mondatot!",
    t15_inst: "Melyik szó illik?",
    t15_h1: "Feltételt keresnek.",
    t15_sent15: "Segítek ___ kérsz tőlem.",
    t15_c15_1: "feltéve", t15_c15_2: "mert", t15_c15_3: "ott", t15_c15_4: "mert",
  },
  ro: {
    explorer_title: "Logic Maze (Causal & Conditional)",

    // T1 - weil (Kausal)
    t1_title: "motivează cu „pentru că”",
    t1_text: "O propoziție cauzală precizează motivul. După „pentru că” verbul conjugat vine la sfârșitul propoziției.",
    t1_inst: "Put the verb in the right place!",
    t1_h1: "The verb 'is' has to go all the way back.",
    t1_sent1: "I'm staying at home because it's ___ ___ today.",
    t1_c1_1: "este rece", t1_c1_2: "este rece", t1_c1_3: "era rece", t1_c1_4: "se răcește",

    // T2 - denn (Kausal)
    t2_title: "Raționează cu „pentru că”",
    t2_text: "„pentru că” este o conjuncție în poziția 0. Verbul este atunci în poziția 2 (ca în propoziția principală).",
    t2_inst: "Care cuvânt se încadrează în decalaj?",
    t2_h1: "because + subject + verb.",
    t2_sent2: "I study a lot, ___ I want a good grade.",
    t2_c2_1: "pentru că", t2_c2_2: "pentru că", t2_c2_3: "acolo", t2_c2_4: "dacă",

    // T3 - da (Kausal)
    t3_title: "Motivează cu „da”",
    t3_text: "„da” este un sinonim pentru „deoarece” și este adesea folosit la începutul unei propoziții. Verbul este la sfârșit.",
    t3_inst: "Pune propoziția în ordinea corectă!",
    t3_h1: "Acolo + ... + verb.",
    t3_w3_1: "Din moment ce ploua,", t3_w3_2: "stai", t3_w3_3: "noi", t3_w3_4: "interior.",

    // T4 - wegen (Präposition + Genitiv)
    t4_title: "motiv cu „din cauza”",
    t4_text: "„din cauza” este o prepoziție și necesită de obicei genitivul.",
    t4_inst: "Alege finalul potrivit!",
    t4_h1: "din cauza + the/the.",
    t4_sent4: "Jocul este anulat din cauza ___ ploii.",
    t4_c4_1: "des", t4_c4_2: "dem", t4_c4_3: "cel", t4_c4_4: "cel",

    // T5 - wenn (Konditional)
    t5_title: "Condiție cu „dacă”",
    t5_text: "O propoziție condiționată stabilește o condiție. 'if' sends the verb to the end.",
    t5_inst: "Which sentence is a condition?",
    t5_h1: "Căutați „dacă”.",
    t5_q5: "Găsiți condiția:",
    t5_ans5: "Dacă am timp, vin.", t5_ans5_2: "Am timp azi.",

    // T6 - falls (Konditional)
    t6_title: "Condiție cu „dacă”",
    t6_text: "„dacă” este folosit atunci când afecțiunea este mai puțin probabilă decât „dacă”.",
    t6_inst: "Umple golul!",
    t6_h1: "Este un sinonim pentru „dacă”.",
    t6_sent6: "___ Dacă plouă, luăm o umbrelă.",
    t6_c6_1: "Dacă", t6_c6_2: "Pentru că", t6_c6_3: "Asta", t6_c6_4: "Deși",

    // T7 - sofern (Konditional)
    t7_title: "Condiție cu „dacă”",
    t7_text: "'if' is more formal than 'if' or 'if'.",
    t7_inst: "Marcați cuvântul „dacă”!",
    t7_h1: "Este la începutul propoziției.",
    t7_w7_1: "Dacă nu", t7_w7_2: "nimic", t7_w7_3: "intervine între,", t7_w7_4: "vezi", t7_w7_5: "noi", t7_w7_6: "S.U.A.",

    // T8 - bei (Präposition + Dativ)
    t8_title: "Condiție cu „la”",
    t8_text: "Condițiile pot fi exprimate și cu „at”. Urmează dativul.",
    t8_inst: "Alege articolul potrivit!",
    t8_h1: "la + la (la).",
    t8_sent8: "___ Dacă plouă vom rămâne acasă.",
    t8_c8_1: "La", t8_c8_2: "Cu", t8_c8_3: "Din cauza", t8_c8_4: "în ciuda",

    // T9 - Deshalb / Deswegen
    t9_title: "Exprimați consecința",
    t9_text: "„Prin urmare” și „prin urmare” sunt adverbe de conjuncție. Ele sunt pe primul loc, verbul urmează pe al doilea.",
    t9_inst: "Pune propoziția corect!",
    t9_h1: "Motivul (fraza 1). Prin urmare + verb + subiect (propoziția 2).",
    t9_f9_1: "Plouă.", t9_f9_2: "De aceea", t9_f9_3: "stai", t9_f9_4: "noi acasă.",

    // T10 - Warum? vs. Unter welcher Bedingung?
    t10_title: "Cuvinte de întrebare",
    t10_text: "Întrebați motivul cu „De ce?” și după condiția cu „Când?” sau „În ce condiție?”.",
    t10_inst: "Sortați întrebările!",
    t10_h1: "De ce = cauzal. În ce condiție = condițional.",
    t10_b10_1: "Cauzal (motiv) ❓", t10_b10_2: "Condițional (condiție) ⚖️",
    t10_i10_1: "De ce râzi?", t10_i10_2: "Când vii?", t10_i10_3: "De ce pleci?", t10_i10_4: "Dacă se întâmplă ceva?",

    // T11 - Magnet: Bindewörter Match
    t11_title: "Magnet logic",
    t11_text: "Ce cuvânt conjunctiv se potrivește cu ce conexiune logică?",
    t11_inst: "Párosítsd a kötőszót a funkciójával!",
    t11_h1: "deoarece = motiv, dacă = condiție.",
    t11_ml11_1: "pentru că", t11_mr11_1: "motiv",
    t11_ml11_2: "dacă", t11_mr11_2: "Stare",
    t11_ml11_3: "deși", t11_mr11_3: "Contrast",

    // T12 - Wort-Stapler: Satzende
    t12_title: "Verb stacker",
    t12_text: "În propoziția subordonată, verbele sunt la sfârșit. Pentru verbe modale: verb principal + verb modal.",
    t12_inst: "Stivuiți verbele pentru sfârșitul propoziției!",
    t12_h1: "... pentru că trebuie să învăț.",
    t12_sw12_1: "invata", t12_sw12_2: "necesitate.",

    // T13 - Slingshot: Konjunktionen
    t13_title: "Vânător de logică",
    t13_text: "Trage toate cuvintele care indică un motiv (caucal)!",
    t13_inst: "Faceți cunoștință cu conexiunile cauzale!",
    t13_h1: "pentru că, pentru că, pentru că.",
    t13_q13: "Ce dă un motiv?",
    t13_t13_1: "pentru că", t13_t13_2: "acolo", t13_t13_3: "pentru că", t13_t13_4: "dacă",

    // T14 - Two Groups: HS/NS vs NS/HS
    t14_title: "Variantele structurii propoziției",
    t14_text: "Puteți începe cu propoziția principală (HS) sau cu propoziția subordonată (NS).",
    t14_inst: "Sortează propozițiile!",
    t14_h1: "Propoziția subordonată începe cu cuvântul conjunctiv.",
    t14_b14_1: "HS mai întâi", t14_b14_2: "NS mai întâi",
    t14_i14_1: "Vin când voi avea timp.", t14_i14_2: "Dacă am timp, vin.",

    // T15 - Finale: Logik-Profi
    t15_title: "Maestru logic",
    t15_text: "Completați această propoziție complexă!",
    t15_inst: "Care cuvânt se potrivește?",
    t15_h1: "Se cauta o conditie.",
    t15_sent15: "Te voi ajuta ___ tu îmi ceri.",
    t15_c15_1: "furnizate", t15_c15_2: "pentru că", t15_c15_3: "acolo", t15_c15_4: "deoarece",
  }
};

export const CAUSAL_COND_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "word-order", words: ["t1_sent1"], correctOrder: [0], instruction: "t1_inst", hint1: "h1", hint2: "h2" }, // Simpler order for intro
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "denn", color: "#F59E0B", bg: "#FEF3C7" }, { text: "Pos. 0", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "sentence-build", fragments: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "compound-word", word1: "wegen", word2: "des", result: "wegen+des", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "⚖️" }, { emoji: "⚡" }, { emoji: "🔍" }, { emoji: "💡" }] },
    interactive: { type: "physics-slingshot", question: "t5_inst", targets: [{ id: "1", text: "t5_ans5", isCorrect: true }, { id: "2", text: "t5_ans5_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "word-display", word: "Falls", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5", "t7_w7_6"], correctIndices: [0], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "easy",
    svg: { type: "article-noun", article: "Bei", articleColor: "#065F46", noun: "Regen" },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "sentence-display", words: ["Grund", "Deshalb", "Folge"], color: "#D97706" },
    interactive: { type: "sentence-build", fragments: ["t9_f9_1", "t9_f9_2", "t9_f9_3", "t9_f9_4"], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Warum?"], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["Wann?"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "k", label: "t10_b10_1" }, { id: "c", label: "t10_b10_2" }], items: [{ text: "t10_i10_1", bucketId: "k" }, { text: "t10_i10_2", bucketId: "c" }, { text: "t10_i10_3", bucketId: "k" }, { text: "t10_i10_4", bucketId: "c" }], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t11_ml11_1", right: "t11_mr11_1" }, { left: "t11_ml11_2", right: "t11_mr11_2" }, { left: "t11_ml11_3", right: "t11_mr11_3" }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t12_sw12_1", "t12_sw12_2"], correctOrder: [0, 1], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "kausalsatz_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🎯" }, { emoji: "✅" }, { emoji: "⭐" }, { emoji: "💡" }] },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_t13_1", isCorrect: true }, { id: "2", text: "t13_t13_2", isCorrect: true }, { id: "3", text: "t13_t13_3", isCorrect: true }, { id: "4", text: "t13_t13_4", isCorrect: false }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Ich komme..."], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["Wenn ich..."], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "h", label: "t14_b14_1" }, { id: "n", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "h" }, { text: "t14_i14_2", bucketId: "n" }], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "word-display", word: "sofern", color: "#B45309" },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konditionalsatz_k7" }
  }
];


export const KONZ_FINAL_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ziel- & Hindernis-Zentrum (Konzessiv & Final)",

    // T1 - obwohl (Konzessiv Intro)
    t1_title: "Obwohl (Gegengrund)",
    t1_text: "Ein Konzessivsatz nennt einen Gegengrund, der eine Handlung nicht verhindert. Nach 'obwohl' steht das Verb am Ende.",
    t1_inst: "Setze das Verb richtig ans Ende!",
    t1_h1: "Das konjugierte Verb rutscht nach hinten.",
    t1_sent1: "Ich gehe spazieren, obwohl es ___ ___ .",
    t1_c1_1: "stark regnet", t1_c1_2: "regnet stark", t1_c1_3: "hat geregnet", t1_c1_4: "regnete",

    // T2 - damit (Final Intro)
    t2_title: "Damit (Zweck/Ziel)",
    t2_text: "Finalsätze mit 'damit' geben eine Absicht an. Das Verb steht auch hier am Ende.",
    t2_inst: "Welches Wort leitet das Ziel ein?",
    t2_h1: "Ich lerne viel, ___ ich gute Noten bekomme.",
    t2_sent2: "Ich helfe dir, ___ du schneller fertig wirst.",
    t2_c2_1: "damit", t2_c2_2: "obwohl", t2_c2_3: "weil", t2_c2_4: "trotzdem",

    // T3 - um ... zu (Infinitivsatz)
    t3_title: "Um ... zu (Gleiches Subjekt)",
    t3_text: "Wenn das Subjekt in beiden Sätzen gleich ist, nutzt man oft 'um ... zu' + Infinitiv.",
    t3_inst: "Baue den Finalsatz zusammen!",
    t3_h1: "um + ... + zu + Infinitiv.",
    t3_f3_1: "Er trainiert,", t3_f3_2: "um", t3_f3_3: "fit", t3_f3_4: "zu bleiben.",

    // T4 - trotzdem (Adverb)
    t4_title: "Trostdem (Trotz des Grundes)",
    t4_text: "'trotzdem' ist ein Adverb und steht meist auf Position 1. Das Verb folgt auf Position 2.",
    t4_inst: "Wähle die richtige Satzfolge!",
    t4_h1: "Es regnet. Trotzdem (Pos 1) + gehen (Pos 2) + wir.",
    t4_sent4: "Es regnet. ___ gehen wir raus.",
    t4_c4_1: "Trotzdem", t4_c4_2: "Obwohl", t4_c4_3: "Damit", t4_c4_4: "Weil",

    // T5 - trotz (Präposition + Genitiv)
    t5_title: "Trotz (Präposition)",
    t5_text: "'trotz' verlangt den Genitiv und drückt einen Gegensatz aus.",
    t5_inst: "Wähle den richtigen Artikel im Genitiv!",
    t5_h1: "trotz + des/der.",
    t5_sent5: "Trotz ___ schlechten Wetters gehen wir wandern.",
    t5_c5_1: "des", t5_c5_2: "dem", t5_c5_3: "den", t5_c5_4: "das",

    // T6 - obwohl vs. trotzdem
    t6_title: "Obwohl vs. Trotzdem",
    t6_text: "'obwohl' leitet einen Nebensatz ein (Verb Ende). 'trotzdem' verbindet Hauptsätze.",
    t6_inst: "Sortiere die Sätze nach dem Bindewort!",
    t6_h1: "Achte auf die Verbposition.",
    t6_b6_1: "obwohl (Verb am Ende) 🔗", t6_b6_2: "trotzdem (Verb Pos. 2) 🧱",
    t6_i6_1: "..., obwohl er müde ist.", t6_i6_2: "Er ist müde; trotzdem lernt er.",

    // T7 - damit vs. um... zu
    t7_title: "Subjekt-Check",
    t7_text: "Subjekt gleich? -> um... zu. Subjekt verschieden? -> damit.",
    t7_inst: "Welches Bindewort passt hier (Subjekte: Ich / Du)?",
    t7_h1: "Zwei verschiedene Personen -> damit.",
    t7_sent7: "Ich gebe dir Geld, ___ du dir ein Eis kaufst.",
    t7_c7_1: "damit", t7_c7_2: "um", t7_c7_3: "zu", t7_c7_4: "obwohl",

    // T8 - zwar ... aber (Doppelkonjunktion)
    t8_title: "Zwar ... aber",
    t8_text: "Diese Kombination verbindet eine Einschränkung mit einem Gegensatz.",
    t8_inst: "Vervollständige die Doppelkonjunktion!",
    t8_h1: "Zwar (Einschränkung) ... aber (Gegensatz).",
    t8_sent8: "Das Auto ist ___ alt, ___ sehr zuverlässig.",
    t8_c8_1: "zwar / aber", t8_c8_2: "nicht nur / sondern auch", t8_c8_3: "weder / noch", t8_c8_4: "entweder / oder",

    // T9 - Magnet: Logik-Match
    t9_title: "Funktions-Magnet",
    t9_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t9_inst: "Húzd össze a párokat!",
    t9_h1: "damit = Absicht, obwohl = Gegensatz.",
    t9_ml9_1: "damit", t9_mr9_1: "Absicht / Ziel",
    t9_ml9_2: "obwohl", t9_mr9_2: "Gegengrund",
    t9_ml9_3: "trotz", t9_mr9_3: "Präposition",

    // T10 - obgleich / obschon (Formal)
    t10_title: "Gehobene Sprache",
    t10_text: "'obgleich' und 'obschon' bedeuten das Gleiche wie 'obwohl', klingen aber formeller.",
    t10_inst: "Finde das Synonym für 'obwohl'!",
    t10_h1: "Suche ein Wort, das ähnlich klingt.",
    t10_q10: "Was bedeutet 'obgleich'?",
    t10_ans10: "obwohl", t10_ans10_2: "deshalb", t10_ans10_3: "damit",

    // T11 - Slingshot: Final-Jäger
    t11_title: "Ziel-Jagd",
    t11_text: "Lődd le az összes szót, ami célt vagy szándékot fejez ki!",
    t11_inst: "Triff die Final-Bindewörter!",
    t11_h1: "Suche nach damit, um... zu, zwecks.",
    t11_q11: "Welche Wörter geben ein Ziel an?",
    t11_t11_1: "damit", t11_t11_2: "um... zu", t11_t11_3: "obwohl", t11_t11_4: "trotz",

    // T12 - Stacker: Satzbau (damit)
    t12_title: "Satzbau-Turm",
    t12_text: "Baue einen korrekten Finalsatz!",
    t12_inst: "Staple die Wörter in der richtigen Reihenfolge!",
    t12_h1: "Hauptsatz, + damit + Subjekt + ... + Verb.",
    t12_sw12_1: "..., damit", t12_sw12_2: "du", t12_sw12_3: "gesund", t12_sw12_4: "bleibst.",

    // T13 - Trotz vs. Wegen (Bucket)
    t13_title: "Gegensatz oder Grund?",
    t13_text: "'Trotz' ist ein Hindernis, 'Wegen' ist die Ursache.",
    t13_inst: "Sortiere die Präpositionen!",
    t13_h1: "Ursache = Wegen. Gegensatz = Trotz.",
    t13_b13_1: "Gegensatz (Trotz) ⚖️", t13_b13_2: "Grund (Wegen) 🏗️",
    t13_i13_1: "Trotz der Kälte", t13_i13_2: "Wegen der Kälte", t13_i13_3: "Trotz des Regens", t13_i13_4: "Wegen des Regens",

    // T14 - Highlight: Konjunktion
    t14_title: "Konzessiv-Detektiv",
    t14_text: "Markiere das Wort, das den Gegengrund einleitet!",
    t14_inst: "Keresd meg az 'obwohl' szót!",
    t14_w14_1: "Er", t14_w14_2: "lacht,", t14_w14_3: "obwohl", t14_w14_4: "er", t14_w14_5: "traurig", t14_w14_6: "ist",

    // T15 - Finale: Logik-Meister
    t15_title: "Abschluss-Check K6",
    t15_text: "Welches Wort passt: '___ der Hilfe schaffte er es nicht.'",
    t15_inst: "Wähle die richtige Präposition!",
    t15_h1: "Obwohl Hilfe da war, klappte es nicht -> Trotz.",
    t15_sent15: "___ der Hilfe schaffte er es nicht.",
    t15_c15_1: "Trotz", t15_c15_2: "Wegen", t15_c15_3: "Dank", t15_c15_4: "Um",
  },
  en: {
    explorer_title: "Target & Obstacle Center (Concessive & Final)",

    // T1 - obwohl (Konzessiv Intro)
    t1_title: "Although (counter-reason)",
    t1_text: "A concession clause gives a counter-reason that does not prevent an action. After 'although' the verb comes at the end.",
    t1_inst: "Put the verb correctly at the end!",
    t1_h1: "The conjugated verb slips backwards.",
    t1_sent1: "I'm going for a walk even though it's ___ ___ .",
    t1_c1_1: "raining heavily", t1_c1_2: "is raining heavily", t1_c1_3: "has rained", t1_c1_4: "rained",

    // T2 - damit (Final Intro)
    t2_title: "So that (purpose/goal)",
    t2_text: "Final sentences with 'so' indicate an intention. The verb is also at the end here.",
    t2_inst: "Which word introduces the goal?",
    t2_h1: "I learn a lot, ___ I get good grades.",
    t2_sent2: "I'll help you ___ finish faster.",
    t2_c2_1: "with that", t2_c2_2: "although", t2_c2_3: "because", t2_c2_4: "anyway",

    // T3 - um ... zu (Infinitivsatz)
    t3_title: "To ... to (Same subject)",
    t3_text: "If the subject is the same in both sentences, you often use 'um ... zu' + infinitive.",
    t3_inst: "Assemble the final set!",
    t3_h1: "at + ... + to + infinitive.",
    t3_f3_1: "He trains,", t3_f3_2: "around", t3_f3_3: "fit", t3_f3_4: "to stay.",

    // T4 - trotzdem (Adverb)
    t4_title: "Trostdem (Despite the reason)",
    t4_text: "'Nevertheless' is an adverb and is usually in position 1. The verb follows in position 2.",
    t4_inst: "Choose the correct sentence sequence!",
    t4_h1: "It's raining. Nevertheless (Pos 1) + go (Pos 2) + we.",
    t4_sent4: "It's raining. ___ let's go out.",
    t4_c4_1: "Still", t4_c4_2: "Although", t4_c4_3: "With that", t4_c4_4: "Because",

    // T5 - trotz (Präposition + Genitiv)
    t5_title: "Despite (preposition)",
    t5_text: "'Despite' requires the genitive and expresses an opposite.",
    t5_inst: "Choose the correct article in the genitive case!",
    t5_h1: "despite + the/the.",
    t5_sent5: "Despite ___ bad weather we go hiking.",
    t5_c5_1: "des", t5_c5_2: "dem", t5_c5_3: "the", t5_c5_4: "that",

    // T6 - obwohl vs. trotzdem
    t6_title: "Although vs. Despite",
    t6_text: "'Although' introduces a subordinate clause (verb end). 'Nevertheless' connects main clauses.",
    t6_inst: "Sort the sentences according to the connective word!",
    t6_h1: "Pay attention to the verb position.",
    t6_b6_1: "although (verb at the end) 🔗", t6_b6_2: "anyway (verb pos. 2) 🧱",
    t6_i6_1: "...even though he is tired.", t6_i6_2: "He is tired; still he learns.",

    // T7 - damit vs. um... zu
    t7_title: "Subject check",
    t7_text: "subject same? -> to... to. Subject different? -> with that.",
    t7_inst: "Which connecting word fits here (subjects: I / you)?",
    t7_h1: "Two different people -> with that.",
    t7_sent7: "I'll give you money ___ you buy yourself an ice cream.",
    t7_c7_1: "with that", t7_c7_2: "around", t7_c7_3: "to", t7_c7_4: "although",

    // T8 - zwar ... aber (Doppelkonjunktion)
    t8_title: "Although... but",
    t8_text: "This combination combines a limitation with a contradiction.",
    t8_inst: "Complete the double conjunction!",
    t8_h1: "Although (restriction) ... but (opposition).",
    t8_sent8: "The car is ___ old, ___ very reliable.",
    t8_c8_1: "although / but", t8_c8_2: "not only / but also", t8_c8_3: "neither/nor", t8_c8_4: "either/or",

    // T9 - Magnet: Logik-Match
    t9_title: "Functional magnet",
    t9_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t9_inst: "Húzd össze a parokat!",
    t9_h1: "so = intention, although = opposite.",
    t9_ml9_1: "with that", t9_mr9_1: "Intention/goal",
    t9_ml9_2: "although", t9_mr9_2: "Counter-reason",
    t9_ml9_3: "despite", t9_mr9_3: "preposition",

    // T10 - obgleich / obschon (Formal)
    t10_title: "Elevated language",
    t10_text: "'Although' and 'although' mean the same as 'although' but sound more formal.",
    t10_inst: "Find the synonym for 'although'!",
    t10_h1: "Find a word that sounds similar.",
    t10_q10: "What does 'although' mean?",
    t10_ans10: "although", t10_ans10_2: "therefore", t10_ans10_3: "with that",

    // T11 - Slingshot: Final-Jäger
    t11_title: "Target hunting",
    t11_text: "Lődd le az összes szót, ami célt vagy szándékot fejez ki!",
    t11_inst: "Meet the final connectives!",
    t11_h1: "Search for so that... to, for the purpose of.",
    t11_q11: "Which words indicate a goal?",
    t11_t11_1: "with that", t11_t11_2: "to... to", t11_t11_3: "although", t11_t11_4: "despite",

    // T12 - Stacker: Satzbau (damit)
    t12_title: "Sentence construction tower",
    t12_text: "Build a correct final sentence!",
    t12_inst: "Stack the words in the correct order!",
    t12_h1: "Main clause, + so that + subject + ... + verb.",
    t12_sw12_1: "..., so that", t12_sw12_2: "you", t12_sw12_3: "healthy", t12_sw12_4: "stay.",

    // T13 - Trotz vs. Wegen (Bucket)
    t13_title: "Contrast or reason?",
    t13_text: "'Despite' is an obstacle, 'Because of' is the cause.",
    t13_inst: "Sort the prepositions!",
    t13_h1: "Cause = Because. Contrast = defiance.",
    t13_b13_1: "Contrast (Despite) ⚖️", t13_b13_2: "Reason (Because) 🏗️",
    t13_i13_1: "Despite the cold", t13_i13_2: "Because of the cold", t13_i13_3: "Despite the rain", t13_i13_4: "Because of the rain",

    // T14 - Highlight: Konjunktion
    t14_title: "Concessive detective",
    t14_text: "Mark the word that introduces the counter-reason!",
    t14_inst: "Keresd meg az 'although' szót!",
    t14_w14_1: "He", t14_w14_2: "laughs,", t14_w14_3: "although", t14_w14_4: "he", t14_w14_5: "sad", t14_w14_6: "is",

    // T15 - Finale: Logik-Meister
    t15_title: "Final check K6",
    t15_text: "Which word fits: '___ with help he couldn't make it.'",
    t15_inst: "Choose the right preposition!",
    t15_h1: "Even though help was there, it didn't work -> defiance.",
    t15_sent15: "___ with help he couldn't do it.",
    t15_c15_1: "Despite", t15_c15_2: "Because of", t15_c15_3: "Thanks", t15_c15_4: "Um",
  },
  hu: {
    explorer_title: "Cél- és Akadályközpont (Concessive & Final)",

    // T1 - obwohl (Konzessiv Intro)
    t1_title: "Bár (ellenok)",
    t1_text: "A koncessziós záradék olyan ellenokot ad, amely nem akadályozza meg a cselekvést. A „bár” után az ige a végére kerül.",
    t1_inst: "Tedd helyesen az igét a végére!",
    t1_h1: "A ragozott ige hátracsúszik.",
    t1_sent1: "Megyek sétálni, pedig ___ ___ van.",
    t1_c1_1: "erősen esik", t1_c1_2: "erősen esik", t1_c1_3: "esett az eső", t1_c1_4: "esett az eső",

    // T2 - damit (Final Intro)
    t2_title: "Tehát (cél/cél)",
    t2_text: "Az „így” szót tartalmazó utolsó mondatok szándékot jeleznek. Az ige itt is a végén van.",
    t2_inst: "Melyik szó vezeti be a célt?",
    t2_h1: "Sokat tanulok, ___ jó jegyeket kapok.",
    t2_sent2: "Segítek ___ gyorsabban befejezni.",
    t2_c2_1: "azzal", t2_c2_2: "bár", t2_c2_3: "mert", t2_c2_4: "amúgy is",

    // T3 - um ... zu (Infinitivsatz)
    t3_title: "Címzett... -hoz (Ugyanaz a téma)",
    t3_text: "Ha az alany mindkét mondatban ugyanaz, gyakran használja az „um ... zu” + infinitívet.",
    t3_inst: "Állítsd össze a végső készletet!",
    t3_h1: "a + ... + -ból + infinitivusba.",
    t3_f3_1: "Ő edz,", t3_f3_2: "körül", t3_f3_3: "illeszkedik", t3_f3_4: "maradni.",

    // T4 - trotzdem (Adverb)
    t4_title: "Trostdem (Az ok ellenére)",
    t4_text: "A „de mégis” egy határozószó, és általában az 1. pozícióban van. Az ige a 2. pozícióban következik.",
    t4_inst: "Válassza ki a megfelelő mondatsort!",
    t4_h1: "Esik az eső. Ennek ellenére (1. pozíció) + megy (2. pozíció) + mi.",
    t4_sent4: "Esik az eső. ___ menjünk ki.",
    t4_c4_1: "Mégis", t4_c4_2: "Bár", t4_c4_3: "Azzal", t4_c4_4: "mert",

    // T5 - trotz (Präposition + Genitiv)
    t5_title: "Annak ellenére (előszó)",
    t5_text: "A „dacára” megköveteli a genitívet, és ennek az ellenkezőjét fejezi ki.",
    t5_inst: "Válassza ki a megfelelő szócikket a genitivus kisbetűben!",
    t5_h1: "annak ellenére, hogy + a/az.",
    t5_sent5: "A ___ rossz idő ellenére kirándulunk.",
    t5_c5_1: "des", t5_c5_2: "dem", t5_c5_3: "a", t5_c5_4: "hogy",

    // T6 - obwohl vs. trotzdem
    t6_title: "Bár vs. ellenére",
    t6_text: "A „bár” alárendelő tagmondatot (igevéget) vezet be. A „mindazonáltal” a fő mondatokat kapcsolja össze.",
    t6_inst: "Rendezd a mondatokat a kötőszó szerint!",
    t6_h1: "Ügyeljen az ige pozíciójára.",
    t6_b6_1: "bár (ige a végén) 🔗", t6_b6_2: "amúgy (2. igepoz.) 🧱",
    t6_i6_1: "...bár fáradt.", t6_i6_2: "Fáradt; mégis tanul.",

    // T7 - damit vs. um... zu
    t7_title: "Tárgy ellenőrzés",
    t7_text: "a téma ugyanaz? -> ahhoz... ahhoz. Más a téma? -> azzal.",
    t7_inst: "Melyik kötőszó illik ide (alanyok: én / te)?",
    t7_h1: "Két különböző ember -> azzal.",
    t7_sent7: "Pénzt adok ___ veszel magadnak egy fagylaltot.",
    t7_c7_1: "azzal", t7_c7_2: "körül", t7_c7_3: "hogy", t7_c7_4: "bár",

    // T8 - zwar ... aber (Doppelkonjunktion)
    t8_title: "Bár... de",
    t8_text: "Ez a kombináció a korlátot egy ellentmondással kombinálja.",
    t8_inst: "Egészítse ki a kettős kötőszót!",
    t8_h1: "Bár (korlátozás) ... de (ellenzék).",
    t8_sent8: "Az autó ___ régi, ___ nagyon megbízható.",
    t8_c8_1: "bár / de", t8_c8_2: "nem csak / hanem", t8_c8_3: "se/sem", t8_c8_4: "vagy/vagy",

    // T9 - Magnet: Logik-Match
    t9_title: "Funkcionális mágnes",
    t9_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t9_inst: "Húzd össze a parokat!",
    t9_h1: "tehát = szándék, bár = ellentéte.",
    t9_ml9_1: "azzal", t9_mr9_1: "Szándék/cél",
    t9_ml9_2: "bár", t9_mr9_2: "Ellenok",
    t9_ml9_3: "annak ellenére", t9_mr9_3: "elöljárószó",

    // T10 - obgleich / obschon (Formal)
    t10_title: "Emelkedett nyelv",
    t10_text: "A „bár” és a „bár” ugyanazt jelenti, mint a „bár”, de formálisabban hangzik.",
    t10_inst: "Találd meg a 'bár' szinonimáját!",
    t10_h1: "Keress egy hasonló hangzású szót.",
    t10_q10: "Mit jelent a 'bár'?",
    t10_ans10: "bár", t10_ans10_2: "ezért", t10_ans10_3: "azzal",

    // T11 - Slingshot: Final-Jäger
    t11_title: "Célvadászat",
    t11_text: "Lődd le az összes szót, ami célt vagy szándékot fejez ki!",
    t11_inst: "Ismerje meg a végső kapcsolatokat!",
    t11_h1: "Keressen úgy, hogy... hogy, abból a célból.",
    t11_q11: "Mely szavak jelzik a célt?",
    t11_t11_1: "azzal", t11_t11_2: "hogy... hogy", t11_t11_3: "bár", t11_t11_4: "annak ellenére",

    // T12 - Stacker: Satzbau (damit)
    t12_title: "Mondatépítési torony",
    t12_text: "Építs egy helyes zárómondatot!",
    t12_inst: "Rakd egymásra a szavakat a megfelelő sorrendbe!",
    t12_h1: "Főmondat, + úgy, hogy + tárgy + ... + ige.",
    t12_sw12_1: "..., szóval", t12_sw12_2: "te", t12_sw12_3: "egészséges", t12_sw12_4: "marad.",

    // T13 - Trotz vs. Wegen (Bucket)
    t13_title: "Kontraszt vagy ok?",
    t13_text: "A „dacára” akadály, a „mert” az ok.",
    t13_inst: "Rendezd az elöljárókat!",
    t13_h1: "Ok = Mert. Kontraszt = dac.",
    t13_b13_1: "Kontraszt (annak ellenére) ⚖️", t13_b13_2: "Ok (mert) 🏗️",
    t13_i13_1: "A hideg ellenére", t13_i13_2: "A hideg miatt", t13_i13_3: "Az eső ellenére", t13_i13_4: "Az eső miatt",

    // T14 - Highlight: Konjunktion
    t14_title: "Engedélyes nyomozó",
    t14_text: "Jelölje be az ellenokot bevezető szót!",
    t14_inst: "Keresd meg az 'bár' szót!",
    t14_w14_1: "Ő", t14_w14_2: "nevet,", t14_w14_3: "bár", t14_w14_4: "ő", t14_w14_5: "szomorú", t14_w14_6: "van",

    // T15 - Finale: Logik-Meister
    t15_title: "Végső ellenőrzés K6",
    t15_text: "Melyik szó illik hozzá: '___ segítséggel nem tudta elérni.'",
    t15_inst: "Válassza ki a megfelelő elöljárószót!",
    t15_h1: "Hiába volt segítség, nem működött -> dac.",
    t15_sent15: "___ segítséggel nem tudta megtenni.",
    t15_c15_1: "Annak ellenére", t15_c15_2: "mert", t15_c15_3: "Köszönöm", t15_c15_4: "Hm",
  },
  ro: {
    explorer_title: "Centru țintă și obstacole (concesiv și final)",

    // T1 - obwohl (Konzessiv Intro)
    t1_title: "Deși (contra-motiv)",
    t1_text: "O clauză de concesiune oferă un contramotiv care nu împiedică o acțiune. După „deși” verbul vine la sfârșit.",
    t1_inst: "Pune verbul corect la final!",
    t1_h1: "Verbul conjugat alunecă înapoi.",
    t1_sent1: "Mă duc la o plimbare chiar dacă este ___ ___ .",
    t1_c1_1: "ploua puternic", t1_c1_2: "ploua puternic", t1_c1_3: "a plouat", t1_c1_4: "a plouat",

    // T2 - damit (Final Intro)
    t2_title: "Deci (scop/scop)",
    t2_text: "Propozițiile finale cu „deci” indică o intenție. Verbul este și el la sfârșit aici.",
    t2_inst: "Care cuvânt introduce scopul?",
    t2_h1: "Învăț multe, ___ iau note bune.",
    t2_sent2: "Te voi ajuta să ___ termini mai repede.",
    t2_c2_1: "cu asta", t2_c2_2: "deși", t2_c2_3: "pentru că", t2_c2_4: "oricum",

    // T3 - um ... zu (Infinitivsatz)
    t3_title: "To... to (Același subiect)",
    t3_text: "Dacă subiectul este același în ambele propoziții, folosiți adesea „um ... zu” + infinitiv.",
    t3_inst: "Asamblați setul final!",
    t3_h1: "la + ... + la + infinitiv.",
    t3_f3_1: "El se antrenează,", t3_f3_2: "în jur", t3_f3_3: "potrivi", t3_f3_4: "a sta.",

    // T4 - trotzdem (Adverb)
    t4_title: "Trostdem (în ciuda motivului)",
    t4_text: "„Cu toate acestea” este un adverb și se află de obicei în poziția 1. Verbul urmează în poziția 2.",
    t4_inst: "Alegeți secvența corectă de propoziție!",
    t4_h1: "Plouă. Cu toate acestea (Poz 1) + go (Poz 2) + noi.",
    t4_sent4: "Plouă. ___ hai sa iesim.",
    t4_c4_1: "Totuşi", t4_c4_2: "Deși", t4_c4_3: "Cu asta", t4_c4_4: "Pentru că",

    // T5 - trotz (Präposition + Genitiv)
    t5_title: "în ciuda (prepoziție)",
    t5_text: "„În ciuda” necesită genitiv și exprimă opusul.",
    t5_inst: "Alegeți articolul corect în cazul genitiv!",
    t5_h1: "în ciuda + the/the.",
    t5_sent5: "În ciuda vremii ___ rea, facem drumeții.",
    t5_c5_1: "des", t5_c5_2: "dem", t5_c5_3: "cel", t5_c5_4: "că",

    // T6 - obwohl vs. trotzdem
    t6_title: "Deşi vs. În ciuda",
    t6_text: "„Deși” introduce o propoziție subordonată (sfârșitul verbului). „Cu toate acestea” leagă clauzele principale.",
    t6_inst: "Sortați propozițiile după cuvântul conjunctiv!",
    t6_h1: "Acordați atenție poziției verbului.",
    t6_b6_1: "deși (verb la sfârșit) 🔗", t6_b6_2: "oricum (verb poz. 2) 🧱",
    t6_i6_1: "...desi este obosit.", t6_i6_2: "Este obosit; tot invata.",

    // T7 - damit vs. um... zu
    t7_title: "Verificarea subiectului",
    t7_text: "acelasi subiect? -> să... să. Subiect diferit? -> cu asta.",
    t7_inst: "Ce cuvânt de legătură se potrivește aici (subiecte: eu/tu)?",
    t7_h1: "Doi oameni diferiți -> cu asta.",
    t7_sent7: "Îți dau bani ___ îți cumperi o înghețată.",
    t7_c7_1: "cu asta", t7_c7_2: "în jur", t7_c7_3: "la", t7_c7_4: "deși",

    // T8 - zwar ... aber (Doppelkonjunktion)
    t8_title: "Deși... dar",
    t8_text: "Această combinație combină o limitare cu o contradicție.",
    t8_inst: "Completează dubla conjuncție!",
    t8_h1: "Deși (restricție) ... dar (opoziție).",
    t8_sent8: "Mașina este ___ veche, ___ foarte fiabilă.",
    t8_c8_1: "deşi / dar", t8_c8_2: "nu numai / ci si", t8_c8_3: "nici/nici", t8_c8_4: "fie/sau",

    // T9 - Magnet: Logik-Match
    t9_title: "Magnet funcțional",
    t9_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t9_inst: "Húzd össze a parokat!",
    t9_h1: "deci = intentie, desi = opus.",
    t9_ml9_1: "cu asta", t9_mr9_1: "Intenție/scop",
    t9_ml9_2: "deși", t9_mr9_2: "Contra-motiv",
    t9_ml9_3: "în ciuda", t9_mr9_3: "prepoziţie",

    // T10 - obgleich / obschon (Formal)
    t10_title: "Limbajul ridicat",
    t10_text: "„Deși” și „deși” înseamnă același lucru cu „deși”, dar sună mai formal.",
    t10_inst: "Găsiți sinonimul pentru „deși”!",
    t10_h1: "Găsiți un cuvânt care sună asemănător.",
    t10_q10: "Ce înseamnă „deși”?",
    t10_ans10: "deși", t10_ans10_2: "prin urmare", t10_ans10_3: "cu asta",

    // T11 - Slingshot: Final-Jäger
    t11_title: "Vânătoarea țintei",
    t11_text: "Lődd le az összes szót, ami célt vagy szándékot fejez ki!",
    t11_inst: "Faceți cunoștință cu conexiunile finale!",
    t11_h1: "Căutați astfel încât... să, în scopul de a.",
    t11_q11: "Ce cuvinte indică un scop?",
    t11_t11_1: "cu asta", t11_t11_2: "să... să", t11_t11_3: "deși", t11_t11_4: "în ciuda",

    // T12 - Stacker: Satzbau (damit)
    t12_title: "Turnul de construcție a sentinței",
    t12_text: "Construiește o propoziție finală corectă!",
    t12_inst: "Stivuiți cuvintele în ordinea corectă!",
    t12_h1: "Propoziție principală, + astfel încât + subiect + ... + verb.",
    t12_sw12_1: "..., astfel încât", t12_sw12_2: "tu", t12_sw12_3: "sănătos", t12_sw12_4: "şedere.",

    // T13 - Trotz vs. Wegen (Bucket)
    t13_title: "Contrastul sau motivul?",
    t13_text: "„În ciuda” este un obstacol, „Din cauza” este cauza.",
    t13_inst: "Sortați prepozițiile!",
    t13_h1: "Cauză = Pentru că. Contrast = sfidare.",
    t13_b13_1: "Contrast (în ciuda) ⚖️", t13_b13_2: "Motivul (Pentru că) 🏗️",
    t13_i13_1: "În ciuda frigului", t13_i13_2: "Din cauza frigului", t13_i13_3: "În ciuda ploii", t13_i13_4: "Din cauza ploii",

    // T14 - Highlight: Konjunktion
    t14_title: "Detectiv concesiv",
    t14_text: "Marcați cuvântul care introduce contramotivul!",
    t14_inst: "Keresd meg az 'deşi' szót!",
    t14_w14_1: "El", t14_w14_2: "râde,", t14_w14_3: "deși", t14_w14_4: "el", t14_w14_5: "trist", t14_w14_6: "este",

    // T15 - Finale: Logik-Meister
    t15_title: "Verificare finală K6",
    t15_text: "Care cuvânt se potrivește: „___ cu ajutor, nu a putut să reușească”.",
    t15_inst: "Alege prepozitia potrivita!",
    t15_h1: "Chiar dacă ajutorul a fost acolo, nu a funcționat -> sfidare.",
    t15_sent15: "___ cu ajutor nu a putut.",
    t15_c15_1: "în ciuda", t15_c15_2: "Din cauza", t15_c15_3: "Multumesc", t15_c15_4: "Hm",
  }
};

export const KONZ_FINAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "word-order", words: ["t1_sent1"], correctOrder: [0], instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "damit", color: "#B91C1C", bg: "#FEE2E2" }, { text: "Ziel", color: "#B91C1C", bg: "#FEE2E2" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "hard",
    svg: { type: "compound-word", word1: "um", word2: "zu", result: "um+zu", color: "#6366F1" },
    interactive: { type: "sentence-build", fragments: ["t3_f3_1", "t3_f3_2", "t3_f3_3", "t3_f3_4"], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "medium",
    svg: { type: "word-display", word: "Trotzdem", color: "#B91C1C" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "article-noun", article: "Trotz", articleColor: "#B91C1C", noun: "Wetters" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["obwohl"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["trotzdem"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ob", label: "t6_b6_1" }, { id: "tr", label: "t6_b6_2" }], items: [{ text: "t6_i6_1", bucketId: "ob" }, { text: "t6_i6_2", bucketId: "tr" }], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "👤", label: "Ich" }, { emoji: "👥", label: "Du" }] },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "word-display", word: "obgleich", color: "#B91C1C" },
    interactive: { type: "physics-slingshot", question: "t10_h1", targets: [{ id: "1", text: "t10_ans10", isCorrect: true }, { id: "2", text: "t10_ans10_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🎯" }, { emoji: "✅" }, { emoji: "⭐" }, { emoji: "💡" }] },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: true }, { id: "3", text: "t11_t11_3", isCorrect: false }, { id: "4", text: "t11_t11_4", isCorrect: false }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t12_sw12_1", "t12_sw12_2", "t12_sw12_3", "t12_sw12_4"], correctOrder: [0, 1, 2, 3], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Trotz"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["Wegen"], bg: "#F0FDF4", border: "#22C55E" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "tr", label: "t13_b13_1" }, { id: "we", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "tr" }, { text: "t13_i13_2", bucketId: "we" }, { text: "t13_i13_3", bucketId: "tr" }, { text: "t13_i13_4", bucketId: "we" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konzessivsatz_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t14_w14_1", "t14_w14_2", "t14_w14_3", "t14_w14_4", "t14_w14_5", "t14_w14_6"], correctIndices: [2], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "🏆" }, { emoji: "⭐" }, { emoji: "🎯" }, { emoji: "✅" }] },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "finalsatz_k7" }
  }
];


export const TEMPORAL7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeit-Zentrum (Temporalsatz)",

    // T1 - als (Einmalig in der Vergangenheit)
    t1_title: "Einmalig in der Vergangenheit (als)",
    t1_text: "Wir nutzen 'als' für Ereignisse, die in der Vergangenheit EINMAL passiert sind (z.B. die Geburt).",
    t1_inst: "Wähle das richtige Zeitwort!",
    t1_h1: "Es passierte nur einmal in der Vergangenheit.",
    t1_sent1: "___ ich ein Kind war, wohnte ich in Berlin.",
    t1_c1_1: "Als", t1_c1_2: "Wenn", t1_c1_3: "Seit", t1_c1_4: "Während",

    // T2 - wenn (Wiederholt oder Gegenwart)
    t2_title: "Immer wenn...",
    t2_text: "Wir nutzen 'wenn' für Ereignisse, die sich wiederholen oder in der Gegenwart/Zukunft stattfinden.",
    t2_inst: "Welches Wort passt hier?",
    t2_h1: "Es passiert jedes Mal, wenn es regnet.",
    t2_sent2: "___ es regnet, nehme ich einen Schirm.",
    t2_c2_1: "Wenn", t2_c2_2: "Als", t2_c2_3: "Nachdem", t2_c2_4: "Bis",

    // T3 - während (Gleichzeitigkeit)
    t3_title: "Gleichzeitig (während)",
    t3_text: "Zwei Dinge passieren im gleichen Moment. Nach 'während' steht das Verb am Ende.",
    t3_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t3_h1: "Während + Subjekt + ... + Verb.",
    t3_w3_1: "Während ich koche,", t3_w3_2: "höre", t3_w3_3: "ich", t3_w3_4: "Musik.",

    // T4 - bevor (Vorzeitigkeit)
    t4_title: "Bevor (Reihenfolge)",
    t4_text: "Aktion A passiert vor Aktion B. 'Bevor ich schlafe, putze ich Zähne.'",
    t4_inst: "Welches Wort leitet die erste Handlung ein?",
    t4_h1: "Zuerst Zähne putzen, DANN schlafen.",
    t4_sent4: "___ ich schlafen gehe, putze ich mir die Zähne.",
    t4_c4_1: "Bevor", t4_c4_2: "Nachdem", t4_c4_3: "Während", t4_c4_4: "Seit",

    // T5 - nachdem (Nachzeitigkeit)
    t5_title: "Nachdem (Zeitform-Check)",
    t5_text: "Aktion A ist fertig, dann kommt Aktion B. Achtung: Die Zeitformen müssen sich unterscheiden!",
    t5_inst: "Wähle die richtige Zeitform (Plusquamperfekt)!",
    t5_h1: "Nachdem er gegessen HATTE (PQP), ging (Prät) er.",
    t5_sent5: "Nachdem er Hausaufgaben ___ ___ , spielte er Fußball.",
    t5_c5_1: "gemacht hatte", t5_c5_2: "gemacht hat", t5_c5_3: "macht", t5_c5_4: "machen würde",

    // T6 - seit / seitdem (Beginn)
    t6_title: "Seitdem (Dauer)",
    t6_text: "Etwas hat in der Vergangenheit begonnen und dauert noch an.",
    t6_inst: "Welches Wort passt zur Zeitspanne?",
    t6_h1: "Seit ich in der Stadt wohne...",
    t6_sent6: "___ er Sport treibt, fühlt er sich besser.",
    t6_c6_1: "Seitdem", t6_c6_2: "Als", t6_c6_3: "Bevor", t6_c6_4: "Bis",

    // T7 - bis (Endpunkt)
    t7_title: "Bis (Der Endpunkt)",
    t7_text: "Eine Handlung dauert an, bis ein bestimmter Zeitpunkt erreicht ist.",
    t7_inst: "Markiere das Wort 'bis'!",
    t7_h1: "Es steht am Anfang des Nebensatzes.",
    t7_w7_1: "Ich", t7_w7_2: "bleibe", t7_w7_3: "hier,", t7_w7_4: "bis", t7_w7_5: "du", t7_w7_6: "kommst.",

    // T8 - sobald (Unmittelbar danach)
    t8_title: "Sobald (Ganz schnell)",
    t8_text: "'sobald' bedeutet: direkt in dem Moment, nachdem etwas fertig ist.",
    t8_inst: "Welches Wort bedeutet 'sofort wenn'?",
    t8_h1: "Sobald die Glocke läutet...",
    t8_sent8: "___ ich zu Hause bin, rufe ich dich an.",
    t8_c8_1: "Sobald", t8_c8_2: "Solange", t8_c8_3: "Während", t8_c8_4: "Als",

    // T9 - solange (Gesamte Dauer)
    t9_title: "Solange (Parallel)",
    t9_text: "Zwei Handlungen dauern genau gleich lang an.",
    t9_inst: "Wähle das Wort für die ganze Dauer!",
    t9_h1: "Solange es regnet, bleiben wir hier.",
    t9_sent9: "___ du lernst, bin ich leise.",
    t9_c9_1: "Solange", t9_c9_2: "Sobald", t9_c9_3: "Als", t9_c9_4: "Bevor",

    // T10 - Magnet: Zeit-Paare
    t10_title: "Zeit-Magnet",
    t10_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t10_inst: "Húzd össze a párokat!",
    t10_h1: "während = parallel, nachdem = danach.",
    t10_ml10_1: "während", t10_mr10_1: "Gleichzeitig",
    t10_ml10_2: "nachdem", t10_mr10_2: "Danach",
    t10_ml10_3: "bevor", t10_mr10_3: "Davor",

    // T11 - Slingshot: Konjunktionen
    t11_title: "Zeit-Jäger",
    t11_text: "Schieße auf alle Wörter, die mit Zeit zu tun haben (Temporalkonjunktionen)!",
    t11_inst: "Triff die Zeit-Wörter!",
    t11_h1: "Suche nach als, wenn, während, seitdem.",
    t11_q11: "Was ist ein Zeitwort?",
    t11_t11_1: "nachdem", t11_t11_2: "solange", t11_t11_3: "bis", t11_t11_4: "weil",

    // T12 - Stacker: Zeitform-Hierarchie
    t12_title: "Zeitform-Treppe",
    t12_text: "Bei 'nachdem' nutzen wir oft das Plusquamperfekt für die erste Handlung.",
    t12_inst: "Staple die Verben für: Nachdem ich (1. Handlung) ... (2. Handlung).",
    t12_h1: "PQP (hatte) -> Präteritum (ging).",
    t12_sw12_1: "gegessen hatte", t12_sw12_2: "ging ich.",

    // T13 - Bucket: Als oder Wenn?
    t13_title: "Als oder Wenn?",
    t13_text: "Entscheide: War es einmal in der Vergangenheit (als) oder passiert es öfter (wenn)?",
    t13_inst: "Sortiere die Sätze!",
    t13_h1: "Kindheit = als. Jedes Mal = wenn.",
    t13_b13_1: "Als (Einmal / Past) ⏳", t13_b13_2: "Wenn (Immer / Present) 🔄",
    t13_i13_1: "... ich klein war.", t13_i13_2: "... ich Zeit habe.", t13_i13_3: "... ich 10 Jahre alt war.", t13_i13_4: "... ich Urlaub mache.",

    // T14 - Highlight: Nebensatz-Verb
    t14_title: "Verb-Ende Check",
    t14_text: "In Temporalsätzen steht das Verb immer am Ende.",
    t14_inst: "Markiere das Verb am Satzende!",
    t14_h1: "Keresd a mondat végét a vessző után.",
    t14_w14_1: "Seitdem", t14_w14_2: "ich", t14_w14_3: "täglich", t14_w14_4: "trainiere", t14_w14_5: ",", t14_w14_6: "bin", t14_w14_7: "ich", t14_w14_8: "fit",

    // T15 - Finale: Zeit-Profi
    t15_title: "Zeit-Meister",
    t15_text: "Setze das richtige Wort ein: 'Wir warten hier, ___ der Regen aufhört.'",
    t15_inst: "Welches Wort passt für den Endpunkt?",
    t15_h1: "Wir warten bis...",
    t15_sent15: "Wir warten hier, ___ der Regen aufhört.",
    t15_c15_1: "bis", t15_c15_2: "sobald", t15_c15_3: "während", t15_c15_4: "als",
  },
  en: {
    explorer_title: "Time center (temporal set)",

    // T1 - als (Einmalig in der Vergangenheit)
    t1_title: "Unique in the past (as)",
    t1_text: "We use 'as' for events that happened ONCE in the past (e.g. birth).",
    t1_inst: "Choose the right verb!",
    t1_h1: "It only happened once in the past.",
    t1_sent1: "___ When I was a child, I lived in Berlin.",
    t1_c1_1: "As", t1_c1_2: "If", t1_c1_3: "Since", t1_c1_4: "While",

    // T2 - wenn (Wiederholt oder Gegenwart)
    t2_title: "Whenever...",
    t2_text: "We use 'if' for events that repeat or take place in the present/future.",
    t2_inst: "Which word fits here?",
    t2_h1: "It happens every time it rains.",
    t2_sent2: "___ it's raining, I take an umbrella.",
    t2_c2_1: "If", t2_c2_2: "As", t2_c2_3: "After", t2_c2_4: "Until",

    // T3 - während (Gleichzeitigkeit)
    t3_title: "At the same time (during)",
    t3_text: "Two things happen at the same moment. After 'while' the verb comes at the end.",
    t3_inst: "Put the sentence in the correct order!",
    t3_h1: "While + subject + ... + verb.",
    t3_w3_1: "While I cook,", t3_w3_2: "listen", t3_w3_3: "I", t3_w3_4: "Music.",

    // T4 - bevor (Vorzeitigkeit)
    t4_title: "Before (order)",
    t4_text: "Action A happens before action B. 'Before I sleep, I brush my teeth.'",
    t4_inst: "Which word initiates the first action?",
    t4_h1: "Brush your teeth first, THEN sleep.",
    t4_sent4: "___ I go to sleep, I brush my teeth.",
    t4_c4_1: "Before", t4_c4_2: "After", t4_c4_3: "While", t4_c4_4: "Since",

    // T5 - nachdem (Nachzeitigkeit)
    t5_title: "After (tense check)",
    t5_text: "Action A is finished, then comes action B. Attention: the tenses must be different!",
    t5_inst: "Choose the correct tense (pluperfect)!",
    t5_h1: "After he had eaten (PQP), he left (praet).",
    t5_sent5: "After ___ ___ homework, he played football.",
    t5_c5_1: "had made", t5_c5_2: "has made", t5_c5_3: "makes", t5_c5_4: "would do",

    // T6 - seit / seitdem (Beginn)
    t6_title: "Since then (duration)",
    t6_text: "Something started in the past and is still ongoing.",
    t6_inst: "Which word fits the time period?",
    t6_h1: "Since I've lived in the city...",
    t6_sent6: "___ he exercises, he feels better.",
    t6_c6_1: "Since then", t6_c6_2: "As", t6_c6_3: "Before", t6_c6_4: "Until",

    // T7 - bis (Endpunkt)
    t7_title: "Until (The Endpoint)",
    t7_text: "An action continues until a certain point in time is reached.",
    t7_inst: "Mark the word 'until'!",
    t7_h1: "It is at the beginning of the subordinate clause.",
    t7_w7_1: "I", t7_w7_2: "stay", t7_w7_3: "here,", t7_w7_4: "until", t7_w7_5: "you", t7_w7_6: "come.",

    // T8 - sobald (Unmittelbar danach)
    t8_title: "As soon as (Really quickly)",
    t8_text: "'as soon as' means: immediately after something is finished.",
    t8_inst: "Which word means 'immediately when'?",
    t8_h1: "As soon as the bell rings...",
    t8_sent8: "___ I'm home, I'll call you.",
    t8_c8_1: "As soon as", t8_c8_2: "So long", t8_c8_3: "While", t8_c8_4: "As",

    // T9 - solange (Gesamte Dauer)
    t9_title: "As long as (parallel)",
    t9_text: "Two actions last exactly the same time.",
    t9_inst: "Choose the word for the entire duration!",
    t9_h1: "As long as it rains, we'll stay here.",
    t9_sent9: "___ you learn, I'm quiet.",
    t9_c9_1: "So long", t9_c9_2: "As soon as", t9_c9_3: "As", t9_c9_4: "Before",

    // T10 - Magnet: Zeit-Paare
    t10_title: "Time magnet",
    t10_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t10_inst: "Húzd össze a parokat!",
    t10_h1: "while = parallel, after = afterwards.",
    t10_ml10_1: "while", t10_mr10_1: "At the same time",
    t10_ml10_2: "after", t10_mr10_2: "After that",
    t10_ml10_3: "before", t10_mr10_3: "Before that",

    // T11 - Slingshot: Konjunktionen
    t11_title: "Time Hunter",
    t11_text: "Shoot all the words that have to do with time (temporal conjunctions)!",
    t11_inst: "Meet the time words!",
    t11_h1: "Search for as, when, during, since.",
    t11_q11: "What is a verb?",
    t11_t11_1: "after", t11_t11_2: "as long as", t11_t11_3: "until", t11_t11_4: "because",

    // T12 - Stacker: Zeitform-Hierarchie
    t12_title: "Tense Stairs",
    t12_text: "With 'after' we often use the past perfect for the first action.",
    t12_inst: "Stack the verbs for: After I (1st action) ... (2nd action).",
    t12_h1: "PQP (had) -> past tense (went).",
    t12_sw12_1: "had eaten", t12_sw12_2: "I went.",

    // T13 - Bucket: Als oder Wenn?
    t13_title: "As or if?",
    t13_text: "Decide: Was it once in the past (when) or does it happen more often (if)?",
    t13_inst: "Sort the sentences!",
    t13_h1: "Childhood = as. Every time = whenever.",
    t13_b13_1: "As (Once / Past) ⏳", t13_b13_2: "If (Always / Present) 🔄",
    t13_i13_1: "... I was small.", t13_i13_2: "... I have time.", t13_i13_3: "... I was 10 years old.", t13_i13_4: "... I'm on vacation.",

    // T14 - Highlight: Nebensatz-Verb
    t14_title: "Verb end check",
    t14_text: "In temporal clauses the verb always comes at the end.",
    t14_inst: "Mark the verb at the end of the sentence!",
    t14_h1: "Keresd a mondat végét a vessző után.",
    t14_w14_1: "Since then", t14_w14_2: "I", t14_w14_3: "daily", t14_w14_4: "train", t14_w14_5: ",", t14_w14_6: "am", t14_w14_7: "I", t14_w14_8: "fit",

    // T15 - Finale: Zeit-Profi
    t15_title: "Time Master",
    t15_text: "Fill in the correct word: 'We'll wait here, ___ the rain stops.'",
    t15_inst: "Which word fits the end point?",
    t15_h1: "We wait until...",
    t15_sent15: "We'll wait here, ___ the rain stops.",
    t15_c15_1: "until", t15_c15_2: "as soon as", t15_c15_3: "while", t15_c15_4: "as",
  },
  hu: {
    explorer_title: "Időközpont (időbeli készlet)",

    // T1 - als (Einmalig in der Vergangenheit)
    t1_title: "Egyedülálló a múltban (mint)",
    t1_text: "A „mint” olyan eseményekre használjuk, amelyek a múltban EGYSZER megtörténtek (pl. születés).",
    t1_inst: "Válassza ki a megfelelő igét!",
    t1_h1: "A múltban csak egyszer fordult elő.",
    t1_sent1: "___ Gyerekkoromban Berlinben éltem.",
    t1_c1_1: "As", t1_c1_2: "Ha", t1_c1_3: "Mivel", t1_c1_4: "Miközben",

    // T2 - wenn (Wiederholt oder Gegenwart)
    t2_title: "Bármikor...",
    t2_text: "Az „if” kifejezést olyan eseményekre használjuk, amelyek ismétlődnek vagy a jelenben/jövőben zajlanak.",
    t2_inst: "Melyik szó illik ide?",
    t2_h1: "Ez minden alkalommal előfordul, amikor esik.",
    t2_sent2: "___ esik az eső, veszek egy esernyőt.",
    t2_c2_1: "Ha", t2_c2_2: "As", t2_c2_3: "Utána", t2_c2_4: "Amíg",

    // T3 - während (Gleichzeitigkeit)
    t3_title: "Ugyanakkor (közben)",
    t3_text: "Két dolog történik ugyanabban a pillanatban. A „while” után az ige a végére kerül.",
    t3_inst: "Tedd a mondatot helyes sorrendbe!",
    t3_h1: "Míg + tárgy + ... + ige.",
    t3_w3_1: "Amíg főzök,", t3_w3_2: "figyelj", t3_w3_3: "I", t3_w3_4: "Zene.",

    // T4 - bevor (Vorzeitigkeit)
    t4_title: "Előtte (megrendelés)",
    t4_text: "Az „A” akció a „B” akció előtt történik. „Mielőtt lefekszem, megmosom a fogam”.",
    t4_inst: "Melyik szó indítja el az első cselekvést?",
    t4_h1: "Moss először fogat, aztán aludj.",
    t4_sent4: "___ Megyek aludni, fogat mosok.",
    t4_c4_1: "Előtte", t4_c4_2: "Utána", t4_c4_3: "Miközben", t4_c4_4: "Mivel",

    // T5 - nachdem (Nachzeitigkeit)
    t5_title: "Utána (feszült ellenőrzés)",
    t5_text: "Az A akció befejeződött, majd jön a B akció. Figyelem: az igeidőknek különbözőnek kell lenniük!",
    t5_inst: "Válassza ki a megfelelő időt (pluperfect)!",
    t5_h1: "Miután evett (PQP), elment (praet).",
    t5_sent5: "___ ___ házi feladat után focizott.",
    t5_c5_1: "készített", t5_c5_2: "készített", t5_c5_3: "teszi", t5_c5_4: "megtenné",

    // T6 - seit / seitdem (Beginn)
    t6_title: "Azóta (időtartam)",
    t6_text: "Valami a múltban kezdődött, és még mindig tart.",
    t6_inst: "Melyik szó illik az időszakhoz?",
    t6_h1: "Mióta a városban élek...",
    t6_sent6: "___ edz, jobban érzi magát.",
    t6_c6_1: "Azóta", t6_c6_2: "As", t6_c6_3: "Előtte", t6_c6_4: "Amíg",

    // T7 - bis (Endpunkt)
    t7_title: "Amíg (a végpont)",
    t7_text: "Egy akció addig folytatódik, amíg el nem ér egy bizonyos időpontot.",
    t7_inst: "Jelölje be az „ig” szót!",
    t7_h1: "Az alárendelő mondat elején található.",
    t7_w7_1: "I", t7_w7_2: "maradj", t7_w7_3: "itt,", t7_w7_4: "amíg", t7_w7_5: "te", t7_w7_6: "jön.",

    // T8 - sobald (Unmittelbar danach)
    t8_title: "Amint (igazán gyorsan)",
    t8_text: "'amint' azt jelenti: azonnal, miután valami elkészült.",
    t8_inst: "Melyik szó jelentése 'azonnal mikor'?",
    t8_h1: "Amint megszólal a csengő...",
    t8_sent8: "___ Itthon vagyok, felhívlak.",
    t8_c8_1: "Amint", t8_c8_2: "Olyan sokáig", t8_c8_3: "Miközben", t8_c8_4: "As",

    // T9 - solange (Gesamte Dauer)
    t9_title: "Amíg (párhuzamos)",
    t9_text: "Két akció pontosan ugyanannyi ideig tart.",
    t9_inst: "Válassza ki a szót a teljes időtartamra!",
    t9_h1: "Amíg esik, itt maradunk.",
    t9_sent9: "___ tanulj, én csendben vagyok.",
    t9_c9_1: "Olyan sokáig", t9_c9_2: "Amint", t9_c9_3: "As", t9_c9_4: "Előtte",

    // T10 - Magnet: Zeit-Paare
    t10_title: "Időmágnes",
    t10_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t10_inst: "Húzd össze a parokat!",
    t10_h1: "míg = párhuzamos, utána = utána.",
    t10_ml10_1: "miközben", t10_mr10_1: "Ugyanakkor",
    t10_ml10_2: "után", t10_mr10_2: "Ezek után",
    t10_ml10_3: "előtt", t10_mr10_3: "Azelőtt",

    // T11 - Slingshot: Konjunktionen
    t11_title: "Idővadász",
    t11_text: "Lődd le az összes szót, aminek köze van az időhöz (időbeli kötőszók)!",
    t11_inst: "Ismerje meg az idő szavakat!",
    t11_h1: "Keresés mint, mikor, közben, óta.",
    t11_q11: "Mi az ige?",
    t11_t11_1: "után", t11_t11_2: "ameddig", t11_t11_3: "amíg", t11_t11_4: "mert",

    // T12 - Stacker: Zeitform-Hierarchie
    t12_title: "Feszült lépcsők",
    t12_text: "Az „utána” szónál gyakran a tökéletes múltat ​​használjuk az első akcióhoz.",
    t12_inst: "Rakd egymásra a következő igéket: After I (1. akció) ... (2. cselekvés).",
    t12_h1: "PQP (volt) -> múlt idő (ment).",
    t12_sw12_1: "evett", t12_sw12_2: "elmentem.",

    // T13 - Bucket: Als oder Wenn?
    t13_title: "Mint vagy ha?",
    t13_text: "Döntse el: volt-e egyszer a múltban (mikor), vagy gyakrabban fordul elő (ha)?",
    t13_inst: "Rendezd a mondatokat!",
    t13_h1: "Gyermekkor = as. Minden alkalommal = bármikor.",
    t13_b13_1: "Mint (Egyszer / Múlt) ⏳", t13_b13_2: "Ha (Mindig / Jelen) 🔄",
    t13_i13_1: "... kicsi voltam.", t13_i13_2: "... van időm.", t13_i13_3: "... 10 éves voltam.", t13_i13_4: "... nyaralok.",

    // T14 - Highlight: Nebensatz-Verb
    t14_title: "Igevégellenőrzés",
    t14_text: "Az időbeli tagmondatokban az ige mindig a végére kerül.",
    t14_inst: "Jelölje be az igét a mondat végén!",
    t14_h1: "Keresd a mondat végét a vessző után.",
    t14_w14_1: "Azóta", t14_w14_2: "I", t14_w14_3: "naponta", t14_w14_4: "vonat", t14_w14_5: ",", t14_w14_6: "am", t14_w14_7: "I", t14_w14_8: "illeszkedik",

    // T15 - Finale: Zeit-Profi
    t15_title: "Idő Mester",
    t15_text: "Írja be a megfelelő szót: 'Itt várunk, ___ eláll az eső.'",
    t15_inst: "Melyik szó illik a végponthoz?",
    t15_h1: "Várunk, amíg...",
    t15_sent15: "Itt várunk, ___ eláll az eső.",
    t15_c15_1: "amíg", t15_c15_2: "amint", t15_c15_3: "miközben", t15_c15_4: "mint",
  },
  ro: {
    explorer_title: "Centru de timp (set temporal)",

    // T1 - als (Einmalig in der Vergangenheit)
    t1_title: "Unic în trecut (ca)",
    t1_text: "Folosim „ca” pentru evenimentele care s-au întâmplat O dată în trecut (de exemplu, nașterea).",
    t1_inst: "Alege verbul potrivit!",
    t1_h1: "S-a întâmplat o singură dată în trecut.",
    t1_sent1: "___ Când eram copil, locuiam la Berlin.",
    t1_c1_1: "Ca", t1_c1_2: "Dacă", t1_c1_3: "Din moment ce", t1_c1_4: "în timp ce",

    // T2 - wenn (Wiederholt oder Gegenwart)
    t2_title: "Ori de câte ori...",
    t2_text: "Folosim „dacă” pentru evenimente care se repetă sau au loc în prezent/viitor.",
    t2_inst: "Care cuvânt se potrivește aici?",
    t2_h1: "Se întâmplă de fiecare dată când plouă.",
    t2_sent2: "___ plouă, iau o umbrelă.",
    t2_c2_1: "Dacă", t2_c2_2: "Ca", t2_c2_3: "După", t2_c2_4: "Până când",

    // T3 - während (Gleichzeitigkeit)
    t3_title: "În același timp (în timpul)",
    t3_text: "Două lucruri se întâmplă în același moment. După „în timp”, verbul vine la sfârșit.",
    t3_inst: "Pune propoziția în ordinea corectă!",
    t3_h1: "While + subiect + ... + verb.",
    t3_w3_1: "În timp ce gătesc,", t3_w3_2: "ascultă", t3_w3_3: "eu", t3_w3_4: "Muzică.",

    // T4 - bevor (Vorzeitigkeit)
    t4_title: "Înainte (comanda)",
    t4_text: "Acțiunea A are loc înaintea acțiunii B. „Înainte de a dormi, mă spăl pe dinți”.",
    t4_inst: "Care cuvânt inițiază prima acțiune?",
    t4_h1: "Mai întâi spală-te pe dinți, APOI dormi.",
    t4_sent4: "___ Mă culc, mă spăl pe dinți.",
    t4_c4_1: "Înainte", t4_c4_2: "După", t4_c4_3: "în timp ce", t4_c4_4: "Din moment ce",

    // T5 - nachdem (Nachzeitigkeit)
    t5_title: "După (verificare tensionată)",
    t5_text: "Acțiunea A s-a terminat, apoi urmează acțiunea B. Atenție: timpurile trebuie să fie diferite!",
    t5_inst: "Alege timpul corect (pluperfect)!",
    t5_h1: "După ce a mâncat (PQP), a plecat (praet).",
    t5_sent5: "După ___ ___ teme, a jucat fotbal.",
    t5_c5_1: "făcuse", t5_c5_2: "a făcut", t5_c5_3: "face", t5_c5_4: "ar face",

    // T6 - seit / seitdem (Beginn)
    t6_title: "De atunci (durata)",
    t6_text: "Ceva a început în trecut și este încă în desfășurare.",
    t6_inst: "Care cuvânt se potrivește perioadei de timp?",
    t6_h1: "De când locuiesc în oraș...",
    t6_sent6: "___ face exerciții, se simte mai bine.",
    t6_c6_1: "De atunci", t6_c6_2: "Ca", t6_c6_3: "Înainte", t6_c6_4: "Până când",

    // T7 - bis (Endpunkt)
    t7_title: "Până la (The Endpoint)",
    t7_text: "O acțiune continuă până când se ajunge la un anumit moment în timp.",
    t7_inst: "Marcați cuvântul „până”!",
    t7_h1: "Este la începutul propoziției subordonate.",
    t7_w7_1: "eu", t7_w7_2: "stai", t7_w7_3: "aici,", t7_w7_4: "până când", t7_w7_5: "tu", t7_w7_6: "vino.",

    // T8 - sobald (Unmittelbar danach)
    t8_title: "De îndată ce (foarte repede)",
    t8_text: "„de îndată ce” înseamnă: imediat după ce ceva este terminat.",
    t8_inst: "Care cuvânt înseamnă „imediat când”?",
    t8_h1: "Imediat ce suna soneria...",
    t8_sent8: "___ Sunt acasă, te sun.",
    t8_c8_1: "De îndată ce", t8_c8_2: "Atât de mult", t8_c8_3: "în timp ce", t8_c8_4: "Ca",

    // T9 - solange (Gesamte Dauer)
    t9_title: "Atâta timp cât (paralel)",
    t9_text: "Două acțiuni durează exact în același timp.",
    t9_inst: "Alege cuvântul pe toată durata!",
    t9_h1: "Atâta timp cât plouă, vom rămâne aici.",
    t9_sent9: "___ înveți, eu tac.",
    t9_c9_1: "Atât de mult", t9_c9_2: "De îndată ce", t9_c9_3: "Ca", t9_c9_4: "Înainte",

    // T10 - Magnet: Zeit-Paare
    t10_title: "Magnet de timp",
    t10_text: "Párosítsd a kötőszavakat a jelentésükkel!",
    t10_inst: "Húzd össze a parokat!",
    t10_h1: "while = paralel, after = afterwards.",
    t10_ml10_1: "în timp ce", t10_mr10_1: "In acelasi timp",
    t10_ml10_2: "după", t10_mr10_2: "După aceea",
    t10_ml10_3: "înainte", t10_mr10_3: "Înainte de asta",

    // T11 - Slingshot: Konjunktionen
    t11_title: "Vânător de timp",
    t11_text: "Trage toate cuvintele care au legătură cu timpul (conjuncții temporale)!",
    t11_inst: "Faceți cunoștință cu cuvintele timpului!",
    t11_h1: "Căutați ca, când, în timpul, de când.",
    t11_q11: "Ce este un verb?",
    t11_t11_1: "după", t11_t11_2: "atâta timp cât", t11_t11_3: "până când", t11_t11_4: "pentru că",

    // T12 - Stacker: Zeitform-Hierarchie
    t12_title: "Scări tensionate",
    t12_text: "Cu „după” folosim adesea trecutul perfect pentru prima acțiune.",
    t12_inst: "Stivuiți verbele pentru: După I (a 1-a acțiune) ... (a 2-a acțiune).",
    t12_h1: "PQP (avea) -> trecut (a mers).",
    t12_sw12_1: "mâncase", t12_sw12_2: "m-am dus.",

    // T13 - Bucket: Als oder Wenn?
    t13_title: "Ca sau dacă?",
    t13_text: "Decideți: a fost o dată în trecut (când) sau se întâmplă mai des (dacă)?",
    t13_inst: "Sortează propozițiile!",
    t13_h1: "Copilărie = ca. De fiecare dată = oricând.",
    t13_b13_1: "Ca (Odată / Trecut) ⏳", t13_b13_2: "Dacă (Întotdeauna / Prezent) 🔄",
    t13_i13_1: "... eram mic.", t13_i13_2: "... Am timp.", t13_i13_3: "... aveam 10 ani.", t13_i13_4: "... Sunt în vacanță.",

    // T14 - Highlight: Nebensatz-Verb
    t14_title: "Verificarea sfârșitului verbului",
    t14_text: "În propozițiile temporale verbul vine întotdeauna la sfârșit.",
    t14_inst: "Marcați verbul la sfârșitul propoziției!",
    t14_h1: "Keresd a mondat végét a vessző után.",
    t14_w14_1: "De atunci", t14_w14_2: "eu", t14_w14_3: "zilnic", t14_w14_4: "tren", t14_w14_5: ",", t14_w14_6: "am", t14_w14_7: "eu", t14_w14_8: "potrivi",

    // T15 - Finale: Zeit-Profi
    t15_title: "Maestrul timpului",
    t15_text: "Completați cuvântul corect: „Vom aștepta aici, ___ se oprește ploaia”.",
    t15_inst: "Care cuvânt se potrivește punctului final?",
    t15_h1: "Așteptăm până...",
    t15_sent15: "Așteptăm aici, ___ se oprește ploaia.",
    t15_c15_1: "până când", t15_c15_2: "de îndată ce", t15_c15_3: "în timp ce", t15_c15_4: "ca",
  }
};

export const TEMPORAL7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "word-display", word: "Als", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "easy",
    svg: { type: "text-bubbles", items: [{ text: "immer wenn", color: "#F59E0B", bg: "#FFFBEB" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "sentence-build", fragments: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "medium",
    svg: { type: "compound-word", word1: "bevor", word2: "schlafen", result: "bevor+schlafen", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "hard",
    svg: { type: "word-display", word: "Nachdem", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "letter-circles", letters: ["S", "e", "i", "t"], color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🛑" }, { emoji: "⚠️" }, { emoji: "❌" }, { emoji: "🚫" }] },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5", "t7_w7_6"], correctIndices: [3], instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "sobald", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "word-display", word: "solange", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t9_sent9", choices: ["t9_c9_1", "t9_c9_2", "t9_c9_3", "t9_c9_4"], correctIndex: 0, instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🎯" }, { emoji: "✅" }, { emoji: "⭐" }, { emoji: "💡" }] },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: true }, { id: "3", text: "t11_t11_3", isCorrect: true }, { id: "4", text: "t11_t11_4", isCorrect: false }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t12_sw12_1", "t12_sw12_2"], correctOrder: [0, 1], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["Als"], bg: "#FFFBEB", border: "#F59E0B" }, right: { items: ["Wenn"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t13_b13_1" }, { id: "w", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "a" }, { text: "t13_i13_2", bucketId: "w" }, { text: "t13_i13_3", bucketId: "a" }, { text: "t13_i13_4", bucketId: "w" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t14_w14_1", "t14_w14_2", "t14_w14_3", "t14_w14_4", "t14_w14_5", "t14_w14_6", "t14_w14_7", "t14_w14_8"], correctIndices: [3], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "🏆" }, { emoji: "⭐" }, { emoji: "🎯" }, { emoji: "✅" }] },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "temporalsatz_k7" }
  }
];


export const INFINITIV7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Infinitiv-Wald (zu + Infinitiv)",

    // T1 - Basis zu + Infinitiv
    t1_title: "Der einfache Infinitiv",
    t1_text: "Viele Sätze werden mit 'zu' + Infinitiv ergänzt, wenn das Subjekt gleich bleibt. 'Ich hoffe, dich zu sehen.'",
    t1_inst: "Setze das 'zu' an die richtige Stelle!",
    t1_h1: "Das 'zu' steht direkt vor dem Verb am Ende.",
    t1_sent1: "Ich versuche, pünktlich ___ ___ .",
    t1_c1_1: "zu kommen", t1_c1_2: "kommen zu", t1_c1_3: "zu gekommen", t1_c1_4: "gekommen",

    // T2 - Trennbare Verben (aufzustehen)
    t2_title: "Eingekesselt (aufzustehen)",
    t2_text: "Bei trennbaren Verben rutscht das 'zu' zwischen Vorsilbe und Stamm. 'einzukaufen', 'aufzustehen'.",
    t2_inst: "Welches Wort ist richtig geschrieben?",
    t2_h1: "Vorsilbe + zu + Verb.",
    t2_w2_1: "einzuschalten", t2_w2_2: "zueinschalten", t2_w2_3: "einschaltenzu", t2_w2_4: "eingeschalten",

    // T3 - um ... zu (Absicht)
    t3_title: "Wozu? (um ... zu)",
    t3_text: "Drückt eine Absicht oder ein Ziel aus. 'Ich lerne, um die Prüfung zu bestehen.'",
    t3_inst: "Vervollständige den Zielsatz!",
    t3_h1: "um ... zu + Infinitiv.",
    t3_sent3: "Er spart Geld, ___ ein Auto ___ kaufen.",
    t3_c3_1: "um / zu", t3_c3_2: "damit / zu", t3_c3_3: "ohne / zu", t3_c3_4: "um / -",

    // T4 - ohne ... zu (Einschränkung)
    t4_title: "Ohne ... zu",
    t4_text: "Drückt aus, dass eine erwartete Handlung nicht stattfindet. 'Er ging, ohne zu grüßen.'",
    t4_inst: "Baue den Satz zusammen!",
    t4_h1: "ohne + ... + zu + Infinitiv.",
    t4_f4_1: "Er lacht,", t4_f4_2: "ohne", t4_f4_3: "den Grund", t4_f4_4: "zu kennen.",

    // T5 - statt ... zu (Alternative)
    t5_title: "Anstatt ... zu",
    t5_text: "Drückt eine Alternative aus. 'Anstatt zu lernen, spielt er.'",
    t5_inst: "Welches Wort leitet die Alternative ein?",
    t5_h1: "Wähle 'Anstatt' oder 'Statt'.",
    t5_sent5: "___ zu arbeiten, schläft er.",
    t5_c5_1: "Anstatt", t5_c5_2: "Ohne", t5_c5_3: "Um", t5_c5_4: "Damit",

    // T6 - Verben mit Infinitiv (hoffen, planen)
    t6_title: "Planungs-Verben",
    t6_text: "Bestimmte Verben wie hoffen, planen, versuchen oder vergessen brauchen oft eine Infinitivkonstruktion.",
    t6_inst: "Verbinde das Verb mit der passenden Ergänzung!",
    t6_h1: "planen -> etwas zu tun.",
    t6_ml6_1: "Ich plane,", t6_mr6_1: "nach Berlin zu reisen.",
    t6_ml6_2: "Er vergisst,", t6_mr6_2: "seine Hausaufgaben zu machen.",
    t6_ml6_3: "Wir hoffen,", t6_mr6_3: "euch bald zu sehen.",

    // T7 - Nomen mit Infinitiv (Angst, Lust)
    t7_title: "Nomen-Kombis",
    t7_text: "Auch Nomen wie Angst, Lust, Zeit oder Absicht lösen oft ein 'zu' + Infinitiv aus.",
    t7_inst: "Welches Nomen passt hier?",
    t7_h1: "Ich habe ___ , ins Kino zu gehen.",
    t7_sent7: "Ich habe heute keine ___ , Hausaufgaben zu machen.",
    t7_c7_1: "Lust", t7_c7_2: "Angst", t7_c7_3: "Zeit", t7_c7_4: "Weg",

    // T8 - Adjektive mit Infinitiv (schön, schwer)
    t8_title: "Bewertung (Es ist...)",
    t8_text: "Strukturen wie 'Es ist schön/schwer/wichtig...' brauchen einen Infinitiv mit 'zu'.",
    t8_inst: "Markiere den kompletten Infinitivteil!",
    t8_h1: "Suche ab dem Wort 'zu'.",
    t8_w8_1: "Es", t8_w8_2: "ist", t8_w8_3: "wichtig,", t8_w8_4: "täglich", t8_w8_5: "zu", t8_w8_6: "trainieren",

    // T9 - Modalverben vs. Infinitiv (Kein zu!)
    t9_title: "Die 'Zu'-Verbieter",
    t9_text: "Achtung! Nach Modalverben (können, müssen...) und Verben wie sehen, hören, lassen steht KEIN 'zu'!",
    t9_inst: "Darf hier ein 'zu' stehen?",
    t9_h1: "Check das Verb: 'muss' ist ein Modalverb.",
    t9_q9: "Ich muss heute ___ .",
    t9_ans9_1: "lernen", t9_ans9_2: "zu lernen",

    // T10 - Brauchen ... zu (Negation)
    t10_title: "Brauchen + zu",
    t10_text: "Das Verb 'brauchen' benötigt im Sinne von 'müssen' in negativen Sätzen immer ein 'zu'. 'Du brauchst nicht zu kommen.'",
    t10_inst: "Setze den Satz richtig zusammen!",
    t10_h1: "nicht + zu + Infinitiv.",
    t10_f10_1: "Du brauchst", t10_f10_2: "heute", t10_f10_3: "nicht", t10_f10_4: "zu kommen.",

    // T11 - Magnet: Konstruktions-Mix
    t11_title: "Bau-Magnet",
    t11_text: "Párosítsd a kifejezéseket a szerkezetükkel!",
    t11_inst: "Húzd össze a párokat!",
    t11_h1: "um... zu = cél, ohne... zu = hiány.",
    t11_ml11_1: "um ... zu", t11_mr11_1: "Zweck / Ziel",
    t11_ml11_2: "ohne ... zu", t11_mr11_2: "Fehlende Handlung",
    t11_ml11_3: "statt ... zu", t11_mr11_3: "Alternative",

    // T12 - Slingshot: Infinitiv-Check
    t12_title: "Infinitiv-Jäger",
    t12_text: "Schieße auf alle Sätze, die einen korrekten Infinitiv mit 'zu' enthalten!",
    t12_inst: "Triff die richtigen Konstruktionen!",
    t12_h1: "Achte auf 'zu' vor dem Verb.",
    t12_q12: "Was ist richtig?",
    t12_t12_1: "Ich höre auf zu rauchen.", t12_t12_2: "Ich plane zu reisen.", t12_t12_3: "Ich kann zu singen. (Falsch)", t12_t12_4: "Ich sehe dich zu gehen. (Falsch)",

    // T13 - Bucket: Infinitiv oder Modal?
    t13_title: "Zu oder nicht zu?",
    t13_text: "Entscheide, ob der Satz ein 'zu' braucht oder nicht.",
    t13_inst: "Sortiere die Sätze!",
    t13_h1: "Modalverben = kein zu. Rest oft = zu.",
    t13_b13_1: "mit 'zu' 🌿", t13_b13_2: "ohne 'zu' 🚫",
    t13_i13_1: "Es ist Zeit zu gehen.", t13_i13_2: "Ich will gehen.", t13_i13_3: "Lust zu spielen?", t13_i13_4: "Ich kann spielen.",

    // T14 - Stacker: Komplexer Satz
    t14_title: "Satz-Architekt",
    t14_text: "Baue einen Satz mit 'anstatt ... zu'!",
    t14_inst: "Staple die Wörter richtig!",
    t14_h1: "Anstatt + ... + zu + Infinitiv, + Hauptsatz.",
    t14_sw14_1: "Anstatt zu lernen,", t14_sw14_2: "spielte er", t14_sw14_3: "lieber Fußball.",

    // T15 - Finale: Infinitiv-Meister
    t15_title: "Der ultimative Check",
    t15_text: "Wähle die korrekte Form für das elváló ige: 'Es ist schwierig, so früh ___ .'",
    t15_inst: "Welches Wort passt?",
    t15_h1: "auf + zu + stehen.",
    t15_sent15: "Es ist schwierig, so früh ___ .",
    t15_c15_1: "aufzustehen", t15_c15_2: "zu aufstehen", t15_c15_3: "aufstehen zu", t15_c15_4: "aufstehen",
  },
  en: {
    explorer_title: "Infinitive forest (to + infinitive)",

    // T1 - Basis zu + Infinitiv
    t1_title: "The simple infinitive",
    t1_text: "Many sentences are completed with 'to' + infinitive if the subject remains the same. 'I hope to see you.'",
    t1_inst: "Put the 'to' in the right place!",
    t1_h1: "The 'to' is right before the verb at the end.",
    t1_sent1: "I try to ___ ___ on time.",
    t1_c1_1: "to come", t1_c1_2: "come to", t1_c1_3: "to come", t1_c1_4: "came",

    // T2 - Trennbare Verben (aufzustehen)
    t2_title: "Surrounded (to stand up)",
    t2_text: "In separable verbs, the 'to' slips between the prefix and the stem. 'to shop', 'to get up'.",
    t2_inst: "Which word is spelled correctly?",
    t2_h1: "Prefix + to + verb.",
    t2_w2_1: "to turn on", t2_w2_2: "switch on", t2_w2_3: "switch on", t2_w2_4: "switched on",

    // T3 - um ... zu (Absicht)
    t3_title: "For what reason? (to...to)",
    t3_text: "Expresses an intention or goal. 'I'm studying to pass the exam.'",
    t3_inst: "Complete the target sentence!",
    t3_h1: "to ... to + infinitive.",
    t3_sent3: "He saves money, ___ buy a car ___.",
    t3_c3_1: "around / to", t3_c3_2: "so / to", t3_c3_3: "without/to", t3_c3_4: "at / -",

    // T4 - ohne ... zu (Einschränkung)
    t4_title: "Without... too",
    t4_text: "Expresses that an expected action does not take place. 'He left without saying hello.'",
    t4_inst: "Put the sentence together!",
    t4_h1: "without + ... + to + infinitive.",
    t4_f4_1: "He laughs,", t4_f4_2: "without", t4_f4_3: "the reason", t4_f4_4: "to know.",

    // T5 - statt ... zu (Alternative)
    t5_title: "Instead of...to",
    t5_text: "Expresses an alternative. \"Instead of studying, he plays.\"",
    t5_inst: "Which word introduces the alternative?",
    t5_h1: "Select 'Instead of' or 'Instead of'.",
    t5_sent5: "___ to work, he sleeps.",
    t5_c5_1: "Instead", t5_c5_2: "Without", t5_c5_3: "Um", t5_c5_4: "With that",

    // T6 - Verben mit Infinitiv (hoffen, planen)
    t6_title: "Planning verbs",
    t6_text: "Certain verbs such as hope, plan, try or forget often need an infinitive construction.",
    t6_inst: "Connect the verb with the appropriate complement!",
    t6_h1: "plan -> do something.",
    t6_ml6_1: "I plan,", t6_mr6_1: "to travel to Berlin.",
    t6_ml6_2: "He forgets", t6_mr6_2: "to do his homework.",
    t6_ml6_3: "We hope", t6_mr6_3: "to see you soon.",

    // T7 - Nomen mit Infinitiv (Angst, Lust)
    t7_title: "Noun combinations",
    t7_text: "Nouns such as fear, desire, time or intention often trigger a 'to' + infinitive.",
    t7_inst: "Which noun fits here?",
    t7_h1: "I have ___ to go to the cinema.",
    t7_sent7: "I don't have ___ to do homework today.",
    t7_c7_1: "Lust", t7_c7_2: "Fear", t7_c7_3: "time", t7_c7_4: "way",

    // T8 - Adjektive mit Infinitiv (schön, schwer)
    t8_title: "Rating (It is...)",
    t8_text: "Structures like 'It is beautiful/difficult/important...' need an infinitive with 'to'.",
    t8_inst: "Mark the entire infinitive part!",
    t8_h1: "Search from the word 'to'.",
    t8_w8_1: "It", t8_w8_2: "is", t8_w8_3: "important,", t8_w8_4: "daily", t8_w8_5: "to", t8_w8_6: "train",

    // T9 - Modalverben vs. Infinitiv (Kein zu!)
    t9_title: "The 'To' bans",
    t9_text: "Danger! After modal verbs (can, must...) and verbs like see, hear, let there is NO 'to'!",
    t9_inst: "Can there be a 'to' here?",
    t9_h1: "Check the verb: 'must' is a modal verb.",
    t9_q9: "I have to ___ today.",
    t9_ans9_1: "learn", t9_ans9_2: "to learn",

    // T10 - Brauchen ... zu (Negation)
    t10_title: "Need + to",
    t10_text: "The verb 'need' always requires a 'to' in the sense of 'must' in negative sentences. 'You don't have to come.'",
    t10_inst: "Put the sentence together correctly!",
    t10_h1: "not + to + infinitive.",
    t10_f10_1: "You need", t10_f10_2: "today", t10_f10_3: "not", t10_f10_4: "to come.",

    // T11 - Magnet: Konstruktions-Mix
    t11_title: "Construction magnet",
    t11_text: "Párosítsd a kifejezéseket a szerkezetükkel!",
    t11_inst: "Húzd össze a parokat!",
    t11_h1: "to... to = cél, without... to = hiány.",
    t11_ml11_1: "to...to", t11_mr11_1: "Purpose/goal",
    t11_ml11_2: "without... too", t11_mr11_2: "Lack of action",
    t11_ml11_3: "instead of... too", t11_mr11_3: "Alternative",

    // T12 - Slingshot: Infinitiv-Check
    t12_title: "Infinitive hunter",
    t12_text: "Shoot all sentences that contain a correct infinitive with 'to'!",
    t12_inst: "Make the right constructions!",
    t12_h1: "Pay attention to 'to' before the verb.",
    t12_q12: "What is right?",
    t12_t12_1: "I'm quitting smoking.", t12_t12_2: "I plan to travel.", t12_t12_3: "I can sing. (wrong)", t12_t12_4: "I see you leaving. (wrong)",

    // T13 - Bucket: Infinitiv oder Modal?
    t13_title: "To or not to?",
    t13_text: "Decide whether the sentence needs a 'to' or not.",
    t13_inst: "Sort the sentences!",
    t13_h1: "Modal verbs = no to. Rest often = too.",
    t13_b13_1: "with 'to' 🌿", t13_b13_2: "without 'to' 🚫",
    t13_i13_1: "It's time to go.", t13_i13_2: "I want to go.", t13_i13_3: "Want to play?", t13_i13_4: "I can play.",

    // T14 - Stacker: Komplexer Satz
    t14_title: "Sentence architect",
    t14_text: "Build a sentence with 'instead of ... to'!",
    t14_inst: "Stack the words correctly!",
    t14_h1: "Instead of + ... + to + infinitive, + main clause.",
    t14_sw14_1: "Instead of learning,", t14_sw14_2: "he played", t14_sw14_3: "prefer football.",

    // T15 - Finale: Infinitiv-Meister
    t15_title: "The ultimate check",
    t15_text: "Choose the correct form for the elváló ige: 'It is difficult to ___ so early.'",
    t15_inst: "Which word fits?",
    t15_h1: "on + to + stand.",
    t15_sent15: "It's difficult to ___ so early.",
    t15_c15_1: "to get up", t15_c15_2: "to get up", t15_c15_3: "get up too", t15_c15_4: "stand up",
  },
  hu: {
    explorer_title: "Infinitív erdő (+ infinitív)",

    // T1 - Basis zu + Infinitiv
    t1_title: "Az egyszerű infinitivus",
    t1_text: "Sok mondat a „to” + infinitivussal fejeződik be, ha az alany ugyanaz marad. – Remélem, találkozunk.",
    t1_inst: "Tedd a 'to'-t a megfelelő helyre!",
    t1_h1: "A „to” közvetlenül az ige előtt van a végén.",
    t1_sent1: "Igyekszem ___ ___ időben.",
    t1_c1_1: "hogy jöjjön", t1_c1_2: "gyere hozzá", t1_c1_3: "hogy jöjjön", t1_c1_4: "jött",

    // T2 - Trennbare Verben (aufzustehen)
    t2_title: "Körbevéve (felállni)",
    t2_text: "Az elválasztható igékben a „to” az előtag és a tő közé csúszik. 'vásárolni', 'felkelni'.",
    t2_inst: "Melyik szó van helyesen írva?",
    t2_h1: "Előtag + + ige.",
    t2_w2_1: "bekapcsolni", t2_w2_2: "kapcsolja be", t2_w2_3: "kapcsolja be", t2_w2_4: "bekapcsolva",

    // T3 - um ... zu (Absicht)
    t3_title: "Milyen okból? (hoz...hoz)",
    t3_text: "Szándékot vagy célt fejez ki. – Azért tanulok, hogy sikeres vizsgát tegyek.",
    t3_inst: "Fejezd be a célmondatot!",
    t3_h1: "to ... to + infinitivus.",
    t3_sent3: "Pénzt takarít meg, ___ autót vesz ___.",
    t3_c3_1: "körül / hozzá", t3_c3_2: "így / ahhoz", t3_c3_3: "nélkül/hoz", t3_c3_4: "itt / -",

    // T4 - ohne ... zu (Einschränkung)
    t4_title: "Anélkül... is",
    t4_text: "Kifejezi, hogy a várt cselekvés nem történik meg. – Köszönés nélkül távozott.",
    t4_inst: "Rakd össze a mondatot!",
    t4_h1: "+ ... + + infinitivus nélkül.",
    t4_f4_1: "Ő nevet,", t4_f4_2: "anélkül", t4_f4_3: "az ok", t4_f4_4: "tudni.",

    // T5 - statt ... zu (Alternative)
    t5_title: "Ahelyett...hogy",
    t5_text: "Kifejez egy alternatívát. – Tanulás helyett játszik.",
    t5_inst: "Melyik szó vezeti be az alternatívát?",
    t5_h1: "Válassza a „Helyett” vagy a „Helyett” lehetőséget.",
    t5_sent5: "___ dolgozni, alszik.",
    t5_c5_1: "Ehelyett", t5_c5_2: "Anélkül", t5_c5_3: "Hm", t5_c5_4: "Azzal",

    // T6 - Verben mit Infinitiv (hoffen, planen)
    t6_title: "Tervező igék",
    t6_text: "Bizonyos igék, mint például a remény, a terv, a próbálkozás vagy a felejtés, gyakran infinitív szerkezetet igényelnek.",
    t6_inst: "Kösd össze az igét a megfelelő kiegészítéssel!",
    t6_h1: "tervezni -> tenni valamit.",
    t6_ml6_1: "Tervezem,", t6_mr6_1: "Berlinbe utazni.",
    t6_ml6_2: "Elfelejti", t6_mr6_2: "hogy megcsinálja a házi feladatát.",
    t6_ml6_3: "Reméljük", t6_mr6_3: "hogy hamarosan találkozunk.",

    // T7 - Nomen mit Infinitiv (Angst, Lust)
    t7_title: "Főnévi kombinációk",
    t7_text: "Az olyan főnevek, mint a félelem, a vágy, az idő vagy a szándék, gyakran váltanak ki egy „to” + infinitívet.",
    t7_inst: "Melyik főnév illik ide?",
    t7_h1: "___ kell moziba mennem.",
    t7_sent7: "Ma nincs ___ házi feladatom.",
    t7_c7_1: "Vágy", t7_c7_2: "Félelem", t7_c7_3: "idő", t7_c7_4: "módon",

    // T8 - Adjektive mit Infinitiv (schön, schwer)
    t8_title: "Értékelés (ez...)",
    t8_text: "Az olyan szerkezetekhez, mint a „Szép/nehéz/fontos...” szükség van egy infinitivusra a „to”-val.",
    t8_inst: "Jelölje be a teljes infinitív részt!",
    t8_h1: "Keresés a „to” szóból.",
    t8_w8_1: "Ez", t8_w8_2: "van", t8_w8_3: "fontos,", t8_w8_4: "naponta", t8_w8_5: "hogy", t8_w8_6: "vonat",

    // T9 - Modalverben vs. Infinitiv (Kein zu!)
    t9_title: "A \"To\" tiltások",
    t9_text: "Veszély! A modális igék (can, must...) és az olyan igék után, mint a see, hear, let there NEM 'to'!",
    t9_inst: "Lehet itt egy \"to\"?",
    t9_h1: "Ellenőrizze az igét: a „must” modális ige.",
    t9_q9: "Ma ___ kell.",
    t9_ans9_1: "tanulni", t9_ans9_2: "tanulni",

    // T10 - Brauchen ... zu (Negation)
    t10_title: "Kell +",
    t10_text: "A „need” ige mindig megköveteli a „kell” jelentést a negatív mondatokban. – Nem kell jönnöd.",
    t10_inst: "Rakd össze helyesen a mondatot!",
    t10_h1: "nem + + infinitív.",
    t10_f10_1: "Neked kell", t10_f10_2: "ma", t10_f10_3: "nem", t10_f10_4: "hogy jöjjön.",

    // T11 - Magnet: Konstruktions-Mix
    t11_title: "Építőipari mágnes",
    t11_text: "Párosítsd a kifejezéseket a szerkezetükkel!",
    t11_inst: "Húzd össze a parokat!",
    t11_h1: "to... to = cél, without... to = hiány.",
    t11_ml11_1: "hogy...hoz", t11_mr11_1: "Cél/cél",
    t11_ml11_2: "anélkül... is", t11_mr11_2: "A cselekvés hiánya",
    t11_ml11_3: "ahelyett... is", t11_mr11_3: "Alternatív",

    // T12 - Slingshot: Infinitiv-Check
    t12_title: "Infinitív vadász",
    t12_text: "Lődd le az összes olyan mondatot, amely helyes infinitívet tartalmaz a „to”-val!",
    t12_inst: "Készíts megfelelő konstrukciókat!",
    t12_h1: "Ügyeljen a „to”-ra az ige előtt.",
    t12_q12: "Mi a helyes?",
    t12_t12_1: "Abbahagyom a dohányzást.", t12_t12_2: "Utazást tervezek.", t12_t12_3: "tudok énekelni. (rossz)", t12_t12_4: "Látom, hogy távozol. (rossz)",

    // T13 - Bucket: Infinitiv oder Modal?
    t13_title: "Hozzá vagy nem?",
    t13_text: "Döntse el, hogy a mondathoz kell-e egy „to” vagy sem.",
    t13_inst: "Rendezd a mondatokat!",
    t13_h1: "Modális igék = no to. Pihenj gyakran = is.",
    t13_b13_1: "a 'to' 🌿 szóval", t13_b13_2: "'to' nélkül 🚫",
    t13_i13_1: "Ideje indulni.", t13_i13_2: "menni akarok.", t13_i13_3: "Akarsz játszani?", t13_i13_4: "tudok játszani.",

    // T14 - Stacker: Komplexer Satz
    t14_title: "Mondatépítész",
    t14_text: "Alkoss mondatot a „... helyett” szóval!",
    t14_inst: "Helyezze egymásra a szavakat!",
    t14_h1: "A + ... + a + infinitivus helyett + főmondat.",
    t14_sw14_1: "Tanulás helyett,", t14_sw14_2: "játszott", t14_sw14_3: "jobban szereti a focit.",

    // T15 - Finale: Infinitiv-Meister
    t15_title: "A végső ellenőrzés",
    t15_text: "Válassza ki az elváló ige megfelelő formáját: 'Nehéz ___ ilyen korán.'",
    t15_inst: "Melyik szó illik?",
    t15_h1: "a + a + állványra.",
    t15_sent15: "Nehéz ___ ilyen korán.",
    t15_c15_1: "felkelni", t15_c15_2: "felkelni", t15_c15_3: "kelj fel te is", t15_c15_4: "feláll",
  },
  ro: {
    explorer_title: "Infinitiv pădure (la + infinitiv)",

    // T1 - Basis zu + Infinitiv
    t1_title: "Infinitivul simplu",
    t1_text: "Multe propoziții se completează cu „to” + infinitiv dacă subiectul rămâne același. — Sper să te văd.",
    t1_inst: "Pune „la” la locul potrivit!",
    t1_h1: "„To” este chiar înaintea verbului de la sfârșit.",
    t1_sent1: "Încerc să ___ ___ la timp.",
    t1_c1_1: "să vină", t1_c1_2: "veni la", t1_c1_3: "să vină", t1_c1_4: "a venit",

    // T2 - Trennbare Verben (aufzustehen)
    t2_title: "Înconjurat (a se ridica)",
    t2_text: "În verbele separabile, „to” se strecoară între prefix și tulpină. „a face cumpărături”, „a se ridica”.",
    t2_inst: "Care cuvânt este scris corect?",
    t2_h1: "Prefix + la + verb.",
    t2_w2_1: "a porni", t2_w2_2: "porniți", t2_w2_3: "porniți", t2_w2_4: "pornit",

    // T3 - um ... zu (Absicht)
    t3_title: "Din ce motiv? (la...la)",
    t3_text: "Exprimă o intenție sau un scop. — Învăț să trec examenul.",
    t3_inst: "Completați propoziția țintă!",
    t3_h1: "la ... la + infinitiv.",
    t3_sent3: "El economisește bani, ___ cumpără o mașină ___.",
    t3_c3_1: "în jurul / spre", t3_c3_2: "deci / la", t3_c3_3: "fara/la", t3_c3_4: "la / -",

    // T4 - ohne ... zu (Einschränkung)
    t4_title: "Fără... de asemenea",
    t4_text: "Exprimă că o acțiune așteptată nu are loc. — A plecat fără să spună bună.",
    t4_inst: "Pune propoziția cap la cap!",
    t4_h1: "fără + ... + la + infinitiv.",
    t4_f4_1: "El râde,", t4_f4_2: "fara", t4_f4_3: "motivul", t4_f4_4: "a sti.",

    // T5 - statt ... zu (Alternative)
    t5_title: "În loc de... să",
    t5_text: "Exprimă o alternativă. „În loc să studieze, joacă”.",
    t5_inst: "Care cuvânt introduce alternativa?",
    t5_h1: "Selectați „În loc de” sau „În loc de”.",
    t5_sent5: "___ la muncă, el doarme.",
    t5_c5_1: "În schimb", t5_c5_2: "Fără", t5_c5_3: "Hm", t5_c5_4: "Cu asta",

    // T6 - Verben mit Infinitiv (hoffen, planen)
    t6_title: "Planificarea verbelor",
    t6_text: "Anumite verbe precum speranța, planul, încercarea sau uitarea necesită adesea o construcție la infinitiv.",
    t6_inst: "Conectați verbul cu complementul potrivit!",
    t6_h1: "planifică -> faci ceva.",
    t6_ml6_1: "plănuiesc,", t6_mr6_1: "să călătoresc la Berlin.",
    t6_ml6_2: "El uită", t6_mr6_2: "să-și facă temele.",
    t6_ml6_3: "Sperăm", t6_mr6_3: "sa ne vedem curand.",

    // T7 - Nomen mit Infinitiv (Angst, Lust)
    t7_title: "Combinații de substantive",
    t7_text: "Substantive precum frica, dorința, timpul sau intenția declanșează adesea un „to” + infinitiv.",
    t7_inst: "Care substantiv se potrivește aici?",
    t7_h1: "Am ___ să merg la cinema.",
    t7_sent7: "Nu am ___ să fac temele azi.",
    t7_c7_1: "Pofta", t7_c7_2: "frica", t7_c7_3: "timp", t7_c7_4: "cale",

    // T8 - Adjektive mit Infinitiv (schön, schwer)
    t8_title: "Evaluare (este...)",
    t8_text: "Structurile precum „Este frumos/dificil/important...” au nevoie de un infinitiv cu „să”.",
    t8_inst: "Marcați întreaga parte de infinitiv!",
    t8_h1: "Căutați din cuvântul „la”.",
    t8_w8_1: "Ea", t8_w8_2: "este", t8_w8_3: "important,", t8_w8_4: "zilnic", t8_w8_5: "la", t8_w8_6: "tren",

    // T9 - Modalverben vs. Infinitiv (Kein zu!)
    t9_title: "Interdicțiile „To”.",
    t9_text: "Pericol! După verbe modale (poate, trebuie...) și verbe precum see, hear, let there is NO 'to'!",
    t9_inst: "Poate exista un „pentru” aici?",
    t9_h1: "Verificați verbul: „trebuie” este un verb modal.",
    t9_q9: "Trebuie să ___ azi.",
    t9_ans9_1: "invata", t9_ans9_2: "a invata",

    // T10 - Brauchen ... zu (Negation)
    t10_title: "Trebuie + să",
    t10_text: "Verbul „trebuie” necesită întotdeauna un „to” în sensul „trebuie” în propozițiile negative. — Nu trebuie să vii.",
    t10_inst: "Pune propoziția corect!",
    t10_h1: "nu + la + infinitiv.",
    t10_f10_1: "Ai nevoie", t10_f10_2: "azi", t10_f10_3: "nu", t10_f10_4: "să vină.",

    // T11 - Magnet: Konstruktions-Mix
    t11_title: "Magnet de construcție",
    t11_text: "Párosítsd a kifejezéseket a szerkezetükkel!",
    t11_inst: "Húzd össze a parokat!",
    t11_h1: "to... to = cél, without... to = hiány.",
    t11_ml11_1: "la...la", t11_mr11_1: "Scop/scop",
    t11_ml11_2: "fără... de asemenea", t11_mr11_2: "Lipsa de acțiune",
    t11_ml11_3: "în loc de... prea", t11_mr11_3: "alternativă",

    // T12 - Slingshot: Infinitiv-Check
    t12_title: "Vânător de infinitiv",
    t12_text: "Trage toate propozițiile care conțin un infinitiv corect cu „to”!",
    t12_inst: "Faceți construcțiile potrivite!",
    t12_h1: "Fiți atenți la „la” înaintea verbului.",
    t12_q12: "Ce este corect?",
    t12_t12_1: "Mă las de fumat.", t12_t12_2: "Am de gând să călătoresc.", t12_t12_3: "pot cânta. (gresit)", t12_t12_4: "Te văd plecând. (gresit)",

    // T13 - Bucket: Infinitiv oder Modal?
    t13_title: "La sau nu la?",
    t13_text: "Decideți dacă propoziția are nevoie de un „să” sau nu.",
    t13_inst: "Sortează propozițiile!",
    t13_h1: "Verbe modale = nu la. Odihnește-te des = prea.",
    t13_b13_1: "cu „la” 🌿", t13_b13_2: "fără „să” 🚫",
    t13_i13_1: "E timpul să plecăm.", t13_i13_2: "Vreau să merg.", t13_i13_3: "Vrei să te joci?", t13_i13_4: "Pot să mă joc.",

    // T14 - Stacker: Komplexer Satz
    t14_title: "Arhitectul sentinței",
    t14_text: "Construiește o propoziție cu „în loc de... to”!",
    t14_inst: "Stivuiți corect cuvintele!",
    t14_h1: "În loc de + ... + la + infinitiv, + propoziție principală.",
    t14_sw14_1: "În loc să înveți,", t14_sw14_2: "a jucat", t14_sw14_3: "prefer fotbalul.",

    // T15 - Finale: Infinitiv-Meister
    t15_title: "Verificarea supremă",
    t15_text: "Alegeți forma corectă pentru elváló ige: „Este dificil să ___ atât de devreme”.",
    t15_inst: "Care cuvânt se potrivește?",
    t15_h1: "pe + la + stand.",
    t15_sent15: "Este greu să ___ atât de devreme.",
    t15_c15_1: "a se ridica", t15_c15_2: "a se ridica", t15_c15_3: "ridică-te și tu", t15_c15_4: "ridice în picioare",
  }
};

export const INFINITIV7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "easy",
    svg: { type: "word-display", word: "zu kommen", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "compound-word", word1: "ein-", word2: "zu-schalten", result: "ein-+zu-schalten", color: "#6366F1" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [0], instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "um", color: "#059669", bg: "#DCFCE7" }, { text: "zu", color: "#059669", bg: "#DCFCE7" }] },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "sentence-build", fragments: ["t4_f4_1", "t4_f4_2", "t4_f4_3", "t4_f4_4"], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "easy",
    svg: { type: "word-display", word: "Anstatt", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "📅", label: "planen" }, { emoji: "🧠", label: "vergessen" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_ml6_1", right: "t6_mr6_1" }, { left: "t6_ml6_2", right: "t6_mr6_2" }, { left: "t6_ml6_3", right: "t6_mr6_3" }], instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "Lust", color: "#059669", bg: "#DCFCE7" }, { text: "Zeit", color: "#059669", bg: "#DCFCE7" }] },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t8_w8_4", "t8_w8_5", "t8_w8_6"], correctIndices: [0, 1, 2], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🚫" }, { emoji: "❌" }, { emoji: "⛔" }, { emoji: "🛑" }] },
    interactive: { type: "physics-slingshot", question: "t9_inst", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }], instruction: "h1", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "hard",
    svg: { type: "sentence-display", words: ["nicht", "zu", "kommen"], color: "#10B981" },
    interactive: { type: "sentence-build", fragments: ["t10_f10_1", "t10_f10_2", "t10_f10_3", "t10_f10_4"], instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "easy",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t11_ml11_1", right: "t11_mr11_1" }, { left: "t11_ml11_2", right: "t11_mr11_2" }, { left: "t11_ml11_3", right: "t11_mr11_3" }], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🏹" }, { emoji: "🎯" }, { emoji: "💥" }, { emoji: "⭐" }] },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_t12_1", isCorrect: true }, { id: "2", text: "t12_t12_2", isCorrect: true }, { id: "3", text: "t12_t12_3", isCorrect: false }, { id: "4", text: "t12_t12_4", isCorrect: false }], instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "medium",
    svg: { type: "two-groups", left: { items: ["Zeit haben"], bg: "#DCFCE7", border: "#10B981" }, right: { items: ["wollen"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "z", label: "t13_b13_1" }, { id: "o", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "z" }, { text: "t13_i13_2", bucketId: "o" }, { text: "t13_i13_3", bucketId: "z" }, { text: "t13_i13_4", bucketId: "o" }], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t14_sw14_1", "t14_sw14_2", "t14_sw14_3"], correctOrder: [0, 1, 2], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["auf", "zu", "stehen"], color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t15_sent15", choices: ["t15_c15_1", "t15_c15_2", "t15_c15_3", "t15_c15_4"], correctIndex: 0, instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "um_zu_k7" }
  }
];


export const EXAM7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das Große K7-Diplom",

    // T1 - Konjunktiv I (Indirekte Rede)
    t1_title: "Indirekte Rede Profi",
    t1_text: "Zeig, dass du die indirekte Rede beherrschst. Er sagt, er ___ (sein) müde.",
    t1_inst: "Welche Form von 'sein' ist Konjunktiv I?",
    t1_h1: "Dritte Person Einzahl.", t1_h2: "er sei.",
    t1_sent1: "Er behauptet, er ___ heute keine Zeit.",
    t1_c1_1: "habe", t1_c1_2: "hat", t1_c1_3: "hätte", t1_c1_4: "habe gehabt",

    // T2 - Passiv Präsens (Werden)
    t2_title: "Passiv-Check",
    t2_text: "Bilde das Passiv im Präsens: 'Die Fenster werden geputzt.'",
    t2_inst: "Wähle das richtige Hilfsverb!",
    t2_h1: "Plural (die Fenster) + werden.",
    t2_sent2: "Die Fehler ___ sofort korrigiert.",
    t2_c2_1: "werden", t2_c2_2: "wird", t2_c2_3: "wurde", t2_c2_4: "sind",

    // T3 - Passiv Perfekt (ist ... worden)
    t3_title: "Vergangenes Passiv",
    t3_text: "Das Perfekt Passiv braucht 'ist' és 'worden'.",
    t3_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t3_h1: "ist + ... + Partizip II + worden.",
    t3_w3_1: "Das Ziel", t3_w3_2: "ist", t3_w3_3: "erreicht", t3_w3_4: "worden.",

    // T4 - Passiv + Modalverb (muss)
    t4_title: "Modal-Passiv Mix",
    t4_text: "Kombiniere Modalverb und Passiv: 'Es muss gemacht werden.'",
    t4_inst: "Welches Verb steht ganz am Ende?",
    t4_h1: "Das Hilfsverb 'werden' im Infinitiv.",
    t4_q4: "Das Auto muss repariert ___ .",
    t4_ans4_1: "werden", t4_ans4_2: "wird", t4_ans4_3: "worden", t4_ans4_4: "geworden",

    // T5 - Stilmittel (Metapher)
    t5_title: "Sprachbilder erkennen",
    t5_text: "Erkennst du die Metapher? 'Du bist ein Fels in der Brandung.'",
    t5_inst: "Schieße auf alle Metaphern!",
    t5_h1: "Suche nach Wörtern in übertragener Bedeutung.",
    t5_q5: "Was ist eine Metapher?",
    t5_t5_1: "Warteschlange", t5_t5_2: "Rabenmutter", t5_t5_3: "Schlau wie ein Fuchs (Vergleich)", t5_t5_4: "Die Sonne scheint (Real)",

    // T6 - Kausalsatz (weil / denn)
    t6_title: "Logik-Check: Grund",
    t6_text: "Nutze 'weil' (Verb Ende) vagy 'denn' (Pos. 0).",
    t6_inst: "Welches Wort passt hier (Verb steht auf Pos. 2)?",
    t6_h1: "denn + ich + habe (Verb Pos 2).",
    t6_sent6: "Ich esse, ___ ich habe Hunger.",
    t6_c6_1: "denn", t6_c6_2: "weil", t6_c6_3: "da", t6_c6_4: "sofern",

    // T7 - Konditionalsatz (wenn / falls)
    t7_title: "Bedingungs-Profi",
    t7_text: "Wähle die richtige Einleitung für die Bedingung.",
    t7_inst: "Welches Wort passt am besten?",
    t7_h1: "Falls/Wenn es regnet...",
    t7_sent7: "___ du Hilfe brauchst, ruf mich an.",
    t7_c7_1: "Wenn", t7_c7_2: "Obwohl", t7_c7_3: "Damit", t7_c7_4: "Weil",

    // T8 - Konzessivsatz (obwohl)
    t8_title: "Hindernis-Lauf",
    t8_text: "Obwohl (Nebensatz) vagy Trotzdem (Hauptsatz)?",
    t8_inst: "Sortiere die Sätze richtig!",
    t8_h1: "Obwohl + Verb am Ende. Trotzdem + Verb Pos. 2.",
    t8_b8_1: "obwohl (NS)", t8_b8_2: "trotzdem (HS)",
    t8_i8_1: "..., obwohl er krank ist.", t8_i8_2: "Er ist krank; trotzdem kommt er.",

    // T9 - Finalsatz (damit / um... zu)
    t9_title: "Ziel-Gerade",
    t9_text: "Subjekt gleich? -> um... zu. Subjekt verschieden? -> damit.",
    t9_inst: "Welche Konstruktion ist hier richtig (Subjekt: Ich / Er)?",
    t9_h1: "Zwei Personen -> damit.",
    t9_sent9: "Ich schreibe ihm, ___ er Bescheid weiß.",
    t9_c9_1: "damit", t9_c9_2: "um ... zu", t9_c9_3: "weil", t9_c9_4: "obwohl",

    // T10 - Temporalsatz (als / wenn)
    t10_title: "Zeit-Check: Als oder Wenn?",
    t10_text: "Einmal in der Vergangenheit? -> als. Immer oder Gegenwart? -> wenn.",
    t10_inst: "Wähle das richtige Zeitwort!",
    t10_h1: "Einmaliges Ereignis (Geburtstag).",
    t10_sent10: "___ ich 10 Jahre alt wurde, bekam ich ein Rad.",
    t10_c10_1: "Als", t10_c10_2: "Wenn", t10_c10_3: "Seitdem", t10_c10_4: "Nachdem",

    // T11 - Temporalsatz (nachdem + PQP)
    t11_title: "Zeitformen-Meister",
    t11_text: "Nachdem (PQP) + Präteritum. 'Nachdem er gegessen hatte, ging er.'",
    t11_inst: "Staple die Verben in der richtigen Zeitfolge!",
    t11_h1: "hatte (PQP) -> ging (Prät).",
    t12_sw11_1: "gelernt hatte,", t12_sw11_2: "machte er Pause.",

    // T12 - Infinitiv (zu + Inf)
    t12_title: "Infinitiv-Architekt",
    t12_text: "Baue den Satz mit 'zu' + Infinitiv.",
    t12_inst: "Setze den Baustein richtig!",
    t12_h1: "zu + sehen.",
    t12_sent12: "Ich hoffe, dich bald wieder ___ ___ .",
    t12_c12_1: "zu sehen", t12_c12_2: "sehen zu", t12_c12_3: "zu gesehen", t12_c12_4: "sehen",

    // T13 - Infinitiv (Trennbare Verben)
    t13_title: "Die Trennbaren (zu)",
    t13_text: "Wo steht 'zu' bei 'aufmachen'?",
    t13_inst: "Markiere das Wort 'aufzumachen'!",
    t13_h1: "Vorsilbe + zu + Verb.",
    t13_w13_1: "Es", t13_w13_2: "ist", t13_w13_3: "Zeit,", t13_w13_4: "das", t13_w13_5: "Fenster", t13_w13_6: "aufzumachen",

    // T14 - Magnet: All-Mix
    t14_title: "Diplom-Magnet",
    t14_text: "Verbinde die grammatischen Begriffe mit den Beispielen!",
    t14_inst: "Párosítsd a fogalmakat a példákkal!",
    t14_h1: "Passiv = wird, Konjunktiv = sei, Metapher = Bild.",
    t14_ml14_1: "Passiv", t14_mr14_1: "wird gebaut",
    t14_ml14_2: "Konjunktiv I", t14_mr14_2: "er sei",
    t14_ml14_3: "Metapher", t14_mr14_3: "Rabenmutter",

    // T15 - Finale Slingshot
    t15_title: "Astro-Diplom Finale",
    t15_text: "Triff die finale Entscheidung: Welcher Satz ist grammatisch perfekt?",
    t15_inst: "Schieße auf den fehlerfreien Satz!",
    t15_h1: "Achte auf Passiv + Modalverb-Struktur.",
    t15_q15: "Welcher Satz ist korrekt?",
    t15_t15_1: "Das muss gemacht werden.", t15_t15_2: "Er sagt, er ist müde. (Falsch: sei)", t15_t15_3: "Wenn es regnet, ich bleibe zu Hause. (Falsch: bleibe ich)",
  },
  en: {
    explorer_title: "The Big K7 Diploma",

    // T1 - Konjunktiv I (Indirekte Rede)
    t1_title: "Indirect speech professional",
    t1_text: "Show that you have mastered indirect speech. He says he ___ (be) tired.",
    t1_inst: "Which form of 'to be' is subjunctive I?",
    t1_h1: "Third person singular.", t1_h2: "he was.",
    t1_sent1: "He claims he ___ no time today.",
    t1_c1_1: "have", t1_c1_2: "has", t1_c1_3: "would have", t1_c1_4: "have had",

    // T2 - Passiv Präsens (Werden)
    t2_title: "Passive check",
    t2_text: "Form the passive in the present tense: 'The windows are being cleaned.'",
    t2_inst: "Choose the correct auxiliary verb!",
    t2_h1: "Plural (the windows) + become.",
    t2_sent2: "The errors ___ corrected immediately.",
    t2_c2_1: "become", t2_c2_2: "will", t2_c2_3: "became", t2_c2_4: "are",

    // T3 - Passiv Perfekt (ist ... worden)
    t3_title: "Past passive",
    t3_text: "The perfect passive needs 'is' és 'been'.",
    t3_inst: "Put the words in the correct order!",
    t3_h1: "has become + ... + participle II +.",
    t3_w3_1: "The goal", t3_w3_2: "is", t3_w3_3: "achieved", t3_w3_4: "been.",

    // T4 - Passiv + Modalverb (muss)
    t4_title: "Modal-passive mix",
    t4_text: "Combine modal verb and passive: 'It has to be done.'",
    t4_inst: "Which verb comes at the very end?",
    t4_h1: "The auxiliary verb 'become' in the infinitive.",
    t4_q4: "The car needs to be repaired ___.",
    t4_ans4_1: "become", t4_ans4_2: "will", t4_ans4_3: "been", t4_ans4_4: "become",

    // T5 - Stilmittel (Metapher)
    t5_title: "Recognize language images",
    t5_text: "Do you recognize the metaphor? 'You are a rock in the surf.'",
    t5_inst: "Shoot all the metaphors!",
    t5_h1: "Search for words with figurative meaning.",
    t5_q5: "What is a metaphor?",
    t5_t5_1: "Queue", t5_t5_2: "Raven mother", t5_t5_3: "Smart as a fox (comparison)", t5_t5_4: "The sun is shining (Real)",

    // T6 - Kausalsatz (weil / denn)
    t6_title: "Logic check: reason",
    t6_text: "Use 'because' (verb end) vaguely 'because' (pos. 0).",
    t6_inst: "Which word fits here (verb is in position 2)?",
    t6_h1: "because + I + have (verb pos 2).",
    t6_sent6: "I eat, ___ I'm hungry.",
    t6_c6_1: "because", t6_c6_2: "because", t6_c6_3: "there", t6_c6_4: "provided",

    // T7 - Konditionalsatz (wenn / falls)
    t7_title: "Condition Professional",
    t7_text: "Choose the correct introduction for the condition.",
    t7_inst: "Which word fits best?",
    t7_h1: "If/When it rains...",
    t7_sent7: "___ you need help, call me.",
    t7_c7_1: "If", t7_c7_2: "Although", t7_c7_3: "With that", t7_c7_4: "Because",

    // T8 - Konzessivsatz (obwohl)
    t8_title: "Obstacle course",
    t8_text: "Although (subordinate clause) vague Nevertheless (main clause)?",
    t8_inst: "Sort the sentences correctly!",
    t8_h1: "Although + verb at the end. Nevertheless + verb position 2.",
    t8_b8_1: "although (NS)", t8_b8_2: "anyway (HS)",
    t8_i8_1: "...even though he is sick.", t8_i8_2: "He is sick; nevertheless he comes.",

    // T9 - Finalsatz (damit / um... zu)
    t9_title: "Finish straight",
    t9_text: "subject same? -> to... to. Subject different? -> with that.",
    t9_inst: "Which construction is correct here (subject: I/he)?",
    t9_h1: "Two people -> with it.",
    t9_sent9: "I'll write to him ___ he knows.",
    t9_c9_1: "with that", t9_c9_2: "to...to", t9_c9_3: "because", t9_c9_4: "although",

    // T10 - Temporalsatz (als / wenn)
    t10_title: "Time check: When or if?",
    t10_text: "Once in the past? -> as. Always or present? -> if.",
    t10_inst: "Choose the right verb!",
    t10_h1: "One-time event (birthday).",
    t10_sent10: "___ When I turned 10, I got a bike.",
    t10_c10_1: "As", t10_c10_2: "If", t10_c10_3: "Since then", t10_c10_4: "After",

    // T11 - Temporalsatz (nachdem + PQP)
    t11_title: "Tense Master",
    t11_text: "After (PQP) + past tense. 'After he ate, he left.'",
    t11_inst: "Stack the verbs in the correct tense sequence!",
    t11_h1: "had (PQP) -> went (Pret).",
    t12_sw11_1: "had learned", t12_sw11_2: "he paused.",

    // T12 - Infinitiv (zu + Inf)
    t12_title: "Infinitive architect",
    t12_text: "Build the sentence with 'to' + infinitive.",
    t12_inst: "Place the building block correctly!",
    t12_h1: "to + see.",
    t12_sent12: "I hope to see you again soon ___ ___ .",
    t12_c12_1: "to see", t12_c12_2: "watch", t12_c12_3: "too seen", t12_c12_4: "see",

    // T13 - Infinitiv (Trennbare Verben)
    t13_title: "The Separables (to)",
    t13_text: "Where does 'close' appear in 'open'?",
    t13_inst: "Mark the word 'to open'!",
    t13_h1: "Prefix + to + verb.",
    t13_w13_1: "It", t13_w13_2: "is", t13_w13_3: "time,", t13_w13_4: "that", t13_w13_5: "window", t13_w13_6: "to open",

    // T14 - Magnet: All-Mix
    t14_title: "Diploma magnet",
    t14_text: "Connect the grammatical terms with the examples!",
    t14_inst: "Párosítsd a fogalmakat a példákkal!",
    t14_h1: "Passive = will, subjunctive = be, metaphor = image.",
    t14_ml14_1: "Passive", t14_mr14_1: "is being built",
    t14_ml14_2: "Subjunctive I", t14_mr14_2: "he was",
    t14_ml14_3: "Metaphor", t14_mr14_3: "Raven mother",

    // T15 - Finale Slingshot
    t15_title: "Astro diploma final",
    t15_text: "Make the final decision: Which sentence is grammatically perfect?",
    t15_inst: "Shoot for the error-free sentence!",
    t15_h1: "Pay attention to passive + modal verb structure.",
    t15_q15: "Which sentence is correct?",
    t15_t15_1: "This has to be done.", t15_t15_2: "He says he's tired. (Incorrect: be)", t15_t15_3: "If it rains, I stay home. (Wrong: I stay)",
  },
  hu: {
    explorer_title: "A Nagy K7 Diploma",

    // T1 - Konjunktiv I (Indirekte Rede)
    t1_title: "Közvetett beszéd szakember",
    t1_text: "Mutasd meg, hogy elsajátítottad a közvetett beszédet. Azt mondja, ___ (legyen) fáradt.",
    t1_inst: "A „lenni” melyik formája az alárendelt I?",
    t1_h1: "Harmadik személy egyes szám.", t1_h2: "ő volt.",
    t1_sent1: "Azt állítja, hogy ma ___ nincs ideje.",
    t1_c1_1: "van", t1_c1_2: "rendelkezik", t1_c1_3: "volna", t1_c1_4: "volt",

    // T2 - Passiv Präsens (Werden)
    t2_title: "Passzív ellenőrzés",
    t2_text: "Formálja a passzívat jelen időben: 'Az ablakokat tisztítják.'",
    t2_inst: "Válassza ki a megfelelő segédigét!",
    t2_h1: "Többes szám (az ablakok) + válnak.",
    t2_sent2: "A hibákat ___ azonnal kijavították.",
    t2_c2_1: "válni", t2_c2_2: "lesz", t2_c2_3: "lett", t2_c2_4: "vannak",

    // T3 - Passiv Perfekt (ist ... worden)
    t3_title: "Passzív múlt",
    t3_text: "A tökéletes passzívnak 'van' és 'volt' kell.",
    t3_inst: "Tedd a szavakat a megfelelő sorrendbe!",
    t3_h1: "+ ... + tagnévvé vált II +.",
    t3_w3_1: "A cél", t3_w3_2: "van", t3_w3_3: "elérte", t3_w3_4: "volt.",

    // T4 - Passiv + Modalverb (muss)
    t4_title: "Modális-passzív keverék",
    t4_text: "Kombinálja a modális igét és a passzívat: „Meg kell tenni”.",
    t4_inst: "Melyik ige jön a legvégén?",
    t4_h1: "A „become” segédige az infinitivusban.",
    t4_q4: "Az autó javításra szorul ___.",
    t4_ans4_1: "válni", t4_ans4_2: "lesz", t4_ans4_3: "volt", t4_ans4_4: "válni",

    // T5 - Stilmittel (Metapher)
    t5_title: "Nyelvi képek felismerése",
    t5_text: "Felismered a metaforát? – Szikla vagy a szörfözésben.",
    t5_inst: "Lődd le az összes metaforát!",
    t5_h1: "Keressen átvitt jelentésű szavakat.",
    t5_q5: "Mi az a metafora?",
    t5_t5_1: "Sor", t5_t5_2: "Holló anya", t5_t5_3: "Okos, mint a róka (összehasonlítás)", t5_t5_4: "süt a nap (igazi)",

    // T6 - Kausalsatz (weil / denn)
    t6_title: "Logikai ellenőrzés: ok",
    t6_text: "Használja a „mert” (igevéget) homályosan „mert” (0. poz.).",
    t6_inst: "Melyik szó illik ide (az ige a 2-es pozícióban van)?",
    t6_h1: "mert + I + van (2. ige).",
    t6_sent6: "Eszem, ___ éhes vagyok.",
    t6_c6_1: "mert", t6_c6_2: "mert", t6_c6_3: "ott", t6_c6_4: "feltéve",

    // T7 - Konditionalsatz (wenn / falls)
    t7_title: "Professzionális állapot",
    t7_text: "Válassza ki a feltételnek megfelelő bevezetést.",
    t7_inst: "Melyik szó illik a legjobban?",
    t7_h1: "Ha/amikor esik...",
    t7_sent7: "___ segítségre van szüksége, hívjon.",
    t7_c7_1: "Ha", t7_c7_2: "Bár", t7_c7_3: "Azzal", t7_c7_4: "mert",

    // T8 - Konzessivsatz (obwohl)
    t8_title: "Akadálypálya",
    t8_text: "Bár (alámondat) homályos Ennek ellenére (főmondat)?",
    t8_inst: "Rendezd helyesen a mondatokat!",
    t8_h1: "Bár + ige a végén. Ennek ellenére + igepozíció 2.",
    t8_b8_1: "bár (NS)", t8_b8_2: "amúgy (HS)",
    t8_i8_1: "...bár beteg.", t8_i8_2: "Beteg; ennek ellenére jön.",

    // T9 - Finalsatz (damit / um... zu)
    t9_title: "Egyenesen fejezd be",
    t9_text: "a téma ugyanaz? -> ahhoz... ahhoz. Más a téma? -> azzal.",
    t9_inst: "Melyik konstrukció a helyes itt (tárgy: én/ő)?",
    t9_h1: "Két ember -> vele.",
    t9_sent9: "Írok neki ___ tudja.",
    t9_c9_1: "azzal", t9_c9_2: "hogy...hoz", t9_c9_3: "mert", t9_c9_4: "bár",

    // T10 - Temporalsatz (als / wenn)
    t10_title: "Időellenőrzés: Mikor és ha?",
    t10_text: "Egyszer a múltban? -> mint. Mindig vagy jelen? -> ha.",
    t10_inst: "Válassza ki a megfelelő igét!",
    t10_h1: "Egyszeri esemény (születésnap).",
    t10_sent10: "___ Amikor 10 éves lettem, kaptam egy biciklit.",
    t10_c10_1: "As", t10_c10_2: "Ha", t10_c10_3: "Azóta", t10_c10_4: "Utána",

    // T11 - Temporalsatz (nachdem + PQP)
    t11_title: "Feszült Mester",
    t11_text: "Utána (PQP) + múlt idő. – Miután evett, elment.",
    t11_inst: "Rakd egymásra az igéket a megfelelő idejű sorrendbe!",
    t11_h1: "volt (PQP) -> ment (Pret).",
    t12_sw11_1: "tanult", t12_sw11_2: "szünetet tartott.",

    // T12 - Infinitiv (zu + Inf)
    t12_title: "Infinitive építész",
    t12_text: "Építsd fel a mondatot a „to” + infinitivussal.",
    t12_inst: "Helyezze el helyesen az építőkockát!",
    t12_h1: "látni +.",
    t12_sent12: "Remélem hamarosan újra találkozunk ___ ___ .",
    t12_c12_1: "látni", t12_c12_2: "nézni", t12_c12_3: "is látható", t12_c12_4: "lásd",

    // T13 - Infinitiv (Trennbare Verben)
    t13_title: "Az elválasztható elemek (hoz)",
    t13_text: "Hol jelenik meg a „bezárás” a „nyitott” alatt?",
    t13_inst: "Jelölje be a „nyitni” szót!",
    t13_h1: "Előtag + + ige.",
    t13_w13_1: "Ez", t13_w13_2: "van", t13_w13_3: "idő,", t13_w13_4: "hogy", t13_w13_5: "ablakot", t13_w13_6: "kinyitni",

    // T14 - Magnet: All-Mix
    t14_title: "Diploma mágnes",
    t14_text: "Kösd össze a nyelvtani kifejezéseket a példákkal!",
    t14_inst: "Párosítsd a fogalmakat a példákkal!",
    t14_h1: "Passzív = akarat, szubjunktív = lenni, metafora = kép.",
    t14_ml14_1: "Passzív", t14_mr14_1: "épül",
    t14_ml14_2: "Szubjektív I", t14_mr14_2: "ő volt",
    t14_ml14_3: "Metafora", t14_mr14_3: "Holló anya",

    // T15 - Finale Slingshot
    t15_title: "Asztro diploma döntő",
    t15_text: "Hozd meg a végső döntést: Melyik mondat a tökéletes nyelvtanilag?",
    t15_inst: "Lődd le a hibamentes mondatot!",
    t15_h1: "Ügyeljen a passzív + modális igeszerkezetre.",
    t15_q15: "Melyik mondat a helyes?",
    t15_t15_1: "Ezt meg kell tenni.", t15_t15_2: "Azt mondja, fáradt. (Helytelen: legyen)", t15_t15_3: "Ha esik, otthon maradok. (Rossz: maradok)",
  },
  ro: {
    explorer_title: "Marea Diploma K7",

    // T1 - Konjunktiv I (Indirekte Rede)
    t1_title: "Profesionist al vorbirii indirecte",
    t1_text: "Arată că ai stăpânit vorbirea indirectă. El spune că ___ (fi) obosit.",
    t1_inst: "Ce formă de „a fi” este conjunctivul I?",
    t1_h1: "Persoana a treia singular.", t1_h2: "el era.",
    t1_sent1: "El susține că ___ nu are timp astăzi.",
    t1_c1_1: "au", t1_c1_2: "are", t1_c1_3: "ar fi avut", t1_c1_4: "au avut",

    // T2 - Passiv Präsens (Werden)
    t2_title: "Verificare pasivă",
    t2_text: "Formați pasivul la timpul prezent: „Geamurile sunt curățate”.",
    t2_inst: "Alegeți verbul auxiliar corect!",
    t2_h1: "Plural (ferestrele) + devenit.",
    t2_sent2: "Erorile ___ corectate imediat.",
    t2_c2_1: "deveni", t2_c2_2: "va", t2_c2_3: "devenit", t2_c2_4: "sunt",

    // T3 - Passiv Perfekt (ist ... worden)
    t3_title: "Trecut pasiv",
    t3_text: "Nevoile pasive perfecte „este” și „a fost”.",
    t3_inst: "Pune cuvintele în ordinea corectă!",
    t3_h1: "a devenit + ... + participiu II +.",
    t3_w3_1: "Scopul", t3_w3_2: "este", t3_w3_3: "realizat", t3_w3_4: "fost.",

    // T4 - Passiv + Modalverb (muss)
    t4_title: "Mix modal-pasiv",
    t4_text: "Combină verbul modal și pasiv: „Trebuie făcut”.",
    t4_inst: "Care verb vine la sfârșit?",
    t4_h1: "Verbul auxiliar „deveni” la infinitiv.",
    t4_q4: "Mașina trebuie reparată ___.",
    t4_ans4_1: "deveni", t4_ans4_2: "va", t4_ans4_3: "fost", t4_ans4_4: "deveni",

    // T5 - Stilmittel (Metapher)
    t5_title: "Recunoașteți imaginile în limbaj",
    t5_text: "Recunoașteți metafora? — Ești o stâncă în surf.",
    t5_inst: "Trage toate metaforele!",
    t5_h1: "Căutați cuvinte cu sens figurat.",
    t5_q5: "Ce este o metaforă?",
    t5_t5_1: "coadă", t5_t5_2: "Mama corbului", t5_t5_3: "Deștept ca o vulpe (comparație)", t5_t5_4: "Soarele strălucește (real)",

    // T6 - Kausalsatz (weil / denn)
    t6_title: "Verificare logică: motiv",
    t6_text: "Folosiți „pentru că” (sfârșitul verbului) vag „pentru că” (poz. 0).",
    t6_inst: "Care cuvânt se potrivește aici (verbul se află în poziția 2)?",
    t6_h1: "deoarece + I + au (verbul poz. 2).",
    t6_sent6: "Mănânc, ___ mi-e foame.",
    t6_c6_1: "pentru că", t6_c6_2: "pentru că", t6_c6_3: "acolo", t6_c6_4: "furnizate",

    // T7 - Konditionalsatz (wenn / falls)
    t7_title: "Stare profesională",
    t7_text: "Alegeți introducerea corectă pentru afecțiune.",
    t7_inst: "Care cuvânt se potrivește cel mai bine?",
    t7_h1: "Daca/Cand ploua...",
    t7_sent7: "___ ai nevoie de ajutor, sună-mă.",
    t7_c7_1: "Dacă", t7_c7_2: "Deși", t7_c7_3: "Cu asta", t7_c7_4: "Pentru că",

    // T8 - Konzessivsatz (obwohl)
    t8_title: "Curs cu obstacole",
    t8_text: "Deși (propoziție subordonată) vagă Cu toate acestea (propoziție principală)?",
    t8_inst: "Sortați corect propozițiile!",
    t8_h1: "Deși + verb la sfârșit. Totuși + poziția verbului 2.",
    t8_b8_1: "deși (NS)", t8_b8_2: "oricum (HS)",
    t8_i8_1: "...desi este bolnav.", t8_i8_2: "El este bolnav; totuși el vine.",

    // T9 - Finalsatz (damit / um... zu)
    t9_title: "Terminați drept",
    t9_text: "acelasi subiect? -> să... să. Subiect diferit? -> cu asta.",
    t9_inst: "Care construcție este corectă aici (subiect: eu/el)?",
    t9_h1: "Doi oameni -> cu el.",
    t9_sent9: "Îi voi scrie ___ știe.",
    t9_c9_1: "cu asta", t9_c9_2: "la...la", t9_c9_3: "pentru că", t9_c9_4: "deși",

    // T10 - Temporalsatz (als / wenn)
    t10_title: "Verificare timp: când sau dacă?",
    t10_text: "Odată în trecut? -> ca. Întotdeauna sau prezent? -> dacă.",
    t10_inst: "Alege verbul potrivit!",
    t10_h1: "Eveniment unic (ziua de naștere).",
    t10_sent10: "___ Când am împlinit 10 ani, mi-am luat o bicicletă.",
    t10_c10_1: "Ca", t10_c10_2: "Dacă", t10_c10_3: "De atunci", t10_c10_4: "După",

    // T11 - Temporalsatz (nachdem + PQP)
    t11_title: "Stăpân tensionat",
    t11_text: "După (PQP) + timpul trecut. — După ce a mâncat, a plecat.",
    t11_inst: "Stivuiți verbele în ordinea corectă a timpurilor!",
    t11_h1: "a avut (PQP) -> a mers (Pret).",
    t12_sw11_1: "învățase", t12_sw11_2: "a făcut o pauză.",

    // T12 - Infinitiv (zu + Inf)
    t12_title: "Infinitiv arhitect",
    t12_text: "Construiți propoziția cu „to” + infinitiv.",
    t12_inst: "Așezați corect blocul de construcție!",
    t12_h1: "a + vedea.",
    t12_sent12: "Sper să ne revedem curând ___ ___ .",
    t12_c12_1: "a vedea", t12_c12_2: "ceas", t12_c12_3: "prea văzut", t12_c12_4: "vezi",

    // T13 - Infinitiv (Trennbare Verben)
    t13_title: "The Separables (la)",
    t13_text: "Unde apare „închidere” în „deschis”?",
    t13_inst: "Marcați cuvântul „a deschide”!",
    t13_h1: "Prefix + la + verb.",
    t13_w13_1: "Ea", t13_w13_2: "este", t13_w13_3: "timp,", t13_w13_4: "că", t13_w13_5: "fereastra", t13_w13_6: "a deschide",

    // T14 - Magnet: All-Mix
    t14_title: "Magnet pentru diplomă",
    t14_text: "Conectați termenii gramaticali cu exemplele!",
    t14_inst: "Párosítsd a fogalmakat a példákkal!",
    t14_h1: "Pasiv = voință, conjunctiv = fi, metaforă = imagine.",
    t14_ml14_1: "Pasiv", t14_mr14_1: "se construiește",
    t14_ml14_2: "Conjunctiv I", t14_mr14_2: "el era",
    t14_ml14_3: "Metaforă", t14_mr14_3: "Mama corbului",

    // T15 - Finale Slingshot
    t15_title: "Finala diplomei de astro",
    t15_text: "Luați decizia finală: care propoziție este perfectă din punct de vedere gramatical?",
    t15_inst: "Trage pentru propoziția fără erori!",
    t15_h1: "Acordați atenție structurii verbului pasiv + modal.",
    t15_q15: "Care propoziție este corectă?",
    t15_t15_1: "Acest lucru trebuie făcut.", t15_t15_2: "El spune că este obosit. (Incorect: fi)", t15_t15_3: "Dacă plouă, stau acasă. (Greșit: rămân)",
  }
};

export const EXAM7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text", difficulty: "hard",
    svg: { type: "word-display", word: "sei / habe", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "konjunktiv_1" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "werden", color: "#14B8A6", bg: "#F0FDFA" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text", difficulty: "hard",
    svg: { type: "sentence-display", words: ["ist", "ge-", "worden"], color: "#14B8A6" },
    interactive: { type: "word-order", words: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], correctOrder: [0, 1, 2, 3], instruction: "t3_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text", difficulty: "hard",
    svg: { type: "compound-word", word1: "muss", word2: "werden", result: "muss+werden", color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_ans4_1", isCorrect: true }, { id: "2", text: "t4_ans4_2", isCorrect: false }], instruction: "t4_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🎭", label: "Metapher" }] },
    interactive: { type: "physics-slingshot", question: "t5_q5", targets: [{ id: "1", text: "t5_t5_1", isCorrect: true }, { id: "2", text: "t5_t5_2", isCorrect: true }, { id: "3", text: "t5_t5_3", isCorrect: false }, { id: "4", text: "t5_t5_4", isCorrect: false }], instruction: "t5_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text", difficulty: "medium",
    svg: { type: "text-bubbles", items: [{ text: "denn", color: "#F59E0B", bg: "#FEF3C7" }] },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text", difficulty: "easy",
    svg: { type: "word-display", word: "Wenn", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text", difficulty: "hard",
    svg: { type: "two-groups", left: { items: ["obwohl"], bg: "#FEE2E2", border: "#B91C1C" }, right: { items: ["trotzdem"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ns", label: "t8_b8_1" }, { id: "hs", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "ns" }, { text: "t8_i8_2", bucketId: "hs" }], instruction: "t8_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🎯" }, { emoji: "✅" }, { emoji: "⭐" }, { emoji: "💡" }] },
    interactive: { type: "gap-fill", sentence: "t9_sent9", choices: ["t9_c9_1", "t9_c9_2", "t9_c9_3", "t9_c9_4"], correctIndex: 0, instruction: "t9_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text", difficulty: "easy",
    svg: { type: "word-display", word: "Als", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "praeteritum" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text", difficulty: "hard",
    svg: { type: "word-syllables", parts: ["1.", "2.", "3."], color: "#6366F1" },
    interactive: { type: "physics-stacker", words: ["t12_sw11_1", "t12_sw11_2"], correctOrder: [0, 1], instruction: "t11_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "perfekt" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text", difficulty: "medium",
    svg: { type: "word-display", word: "zu sehen", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "📝" }, { emoji: "✏️" }, { emoji: "📖" }, { emoji: "💡" }] },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4", "t13_w13_5", "t13_w13_6"], correctIndices: [5], instruction: "t13_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text", difficulty: "medium",
    svg: { type: "icon-grid", items: [{ emoji: "🧲" }, { emoji: "↔️" }, { emoji: "🔗" }, { emoji: "✅" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t14_ml14_1", right: "t14_mr14_1" }, { left: "t14_ml14_2", right: "t14_mr14_2" }, { left: "t14_ml14_3", right: "t14_mr14_3" }], instruction: "t14_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "synonyme" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text", difficulty: "hard",
    svg: { type: "icon-grid", items: [{ emoji: "🎓" }, { emoji: "📚" }, { emoji: "⭐" }, { emoji: "🏆" }] },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_t15_1", isCorrect: true }, { id: "2", text: "t15_t15_2", isCorrect: false }, { id: "3", text: "t15_t15_3", isCorrect: false }], instruction: "t15_inst", hint1: "h1", hint2: "h2" },
    quiz: { generate: "werden_passiv" }
  }
];
