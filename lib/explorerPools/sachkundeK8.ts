// lib/explorerPools/sachkundeK8.ts
import type { PoolTopicDef } from "./types";

export const WELTKRIEG_K8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Der Erste Weltkrieg",
    t1_title: "Ursachen", t1_text: "Der Weg in den Krieg.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was war der Anlass?", t1_qa: "Attentat von Sarajevo", t1_qb: "Ein Diebstahl", t1_qc: "Wetter", t1_qd: "Goldrausch",
    t1_w1: "Imperialismus", t1_w2: "Nationalismus", t1_w3: "und", t1_w4: "Wettrüsten", t1_w5: "führten", t1_w6: "zu", t1_w7: "großen", t1_w8: "Spannungen",
    t1_l1: "Serbien", t1_r1: "Attentat", t1_l2: "Österreich", t1_r2: "Ultimatum", t1_l3: "Russland", t1_r3: "Mobilmachung",
    t1_sent: "Europa war ein ___.", t1_qa2: "Pulverfass", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Bündnissysteme", t1_f2: "zwangen", t1_f3: "viele", t1_f4: "Länder", t1_f5: "automatisch", t1_f6: "in", t1_f7: "den", t1_f8: "schrecklichen", t1_f9: "Krieg.",
    t1_tk1: "Der", t1_tk2: "Thronfolger", t1_tk3: "Franz", t1_tk4: "Ferdinand", t1_tk5: "wurde", t1_tk6: "im", t1_tk7: "Juni", t1_tk8: "neunzehnhundertvierzehn", t1_tk9: "ermordet.", t1_tk10: "",
    t1_bl1: "Grund", t1_bl2: "Folge", t1_i1: "Wettrüsten", t1_i2: "Trümmer", t1_i3: "Bündnis", t1_i4: "Tod",
    t2_title: "Stellungskrieg", t2_text: "Alltag im Schützengraben.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wo verlief die Westfront hauptsächlich?", t2_qa: "Frankreich und Belgien", t2_qb: "Russland", t2_qc: "Italien", t2_qd: "Asien",
    t2_w1: "Soldaten", t2_w2: "lebten", t2_w3: "monatelang", t2_w4: "zwischen", t2_w5: "Dreck", t2_w6: "Ratten", t2_w7: "und", t2_w8: "ständiger",
    t2_l1: "Graben", t2_r1: "Schutz", t2_l2: "Draht", t2_r2: "Sperre", t2_l3: "Gas", t2_r3: "Gift",
    t2_sent: "Der Krieg erstarrte im ___.", t2_qa2: "Grabenkrieg", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Trommelfeuer", t2_f2: "und", t2_f3: "Giftgas", t2_f4: "machten", t2_f5: "das", t2_f6: "Schlachtfeld", t2_f7: "zu", t2_f8: "einer", t2_f9: "wahren",
    t2_tk1: "Die", t2_tk2: "Schlacht", t2_tk3: "um", t2_tk4: "Verdun", t2_tk5: "wurde", t2_tk6: "zum", t2_tk7: "Symbol", t2_tk8: "für", t2_tk9: "sinnloses", t2_tk10: "Massensterben.",
    t2_bl1: "Waffe", t2_bl2: "Schutz", t2_i1: "MG", t2_i2: "Graben", t2_i3: "Giftgas", t2_i4: "Helm",
    t3_title: "Neue Waffen", t3_text: "Die Technisierung des Todes.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was wurde erstmals massiv eingesetzt?", t3_qa: "Panzer und Flugzeuge", t3_qb: "Schwerter", t3_qc: "Armbrust", t3_qd: "Pfeile",
    t3_w1: "U-Boote", t3_w2: "versenkten", t3_w3: "viele", t3_w4: "Schiffe", t3_w5: "und", t3_w6: "brachten", t3_w7: "die", t3_w8: "USA",
    t3_l1: "Panzer", t3_r1: "Tank", t3_l2: "Zeppelin", t3_r2: "Luft", t3_l3: "U-Boot", t3_r3: "Wasser",
    t3_sent: "Tanks brachen durch den ___.", t3_qa2: "Stacheldraht", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Die", t3_f2: "Heimatfront", t3_f3: "musste", t3_f4: "ebenfalls", t3_f5: "alles", t3_f6: "für", t3_f7: "den", t3_f8: "totalen", t3_f9: "Krieg",
    t3_tk1: "Frauen", t3_tk2: "übernahmen", t3_tk3: "in", t3_tk4: "den", t3_tk5: "Fabriken", t3_tk6: "die", t3_tk7: "schwere", t3_tk8: "Arbeit", t3_tk9: "der", t3_tk10: "Männer.",
    t3_bl1: "Front", t3_bl2: "Heimat", t3_i1: "Schlacht", t3_i2: "Fabrik", t3_i3: "Angriff", t3_i4: "Hunger",
    t4_title: "Kriegsende", t4_text: "Niederlage und Umbruch.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wann endeten die Kampfhandlungen?", t4_qa: "11. November 1918", t4_qb: "1945", t4_qc: "1900", t4_qd: "2000",
    t4_w1: "Matrosenaufstände", t4_w2: "und", t4_w3: "Streiks", t4_w4: "beschleunigten", t4_w5: "das", t4_w6: "Ende", t4_w7: "des", t4_w8: "Kaiserreichs.",
    t4_l1: "1914", t4_r1: "Beginn", t4_l2: "1917", t4_r2: "USA-Eintritt", t4_l3: "1918", t4_r3: "Waffenstillstand",
    t4_sent: "Der Kaiser musste ___.", t4_qa2: "abdanken", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "In", t4_f2: "Deutschland", t4_f3: "wurde", t4_f4: "nach", t4_f5: "der", t4_f6: "Flucht", t4_f7: "des", t4_f8: "Kaisers", t4_f9: "die",
    t4_tk1: "Der", t4_tk2: "Krieg", t4_tk3: "hinterließ", t4_tk4: "Millionen", t4_tk5: "Tote", t4_tk6: "und", t4_tk7: "ein", t4_tk8: "völlig", t4_tk9: "zerstörtes", t4_tk10: "Europa.",
    t4_bl1: "Vorher", t4_bl2: "Nachher", t4_i1: "Monarchie", t4_i2: "Demokratie", t4_i3: "Kaiser", t4_i4: "Präsident",
    t5_title: "Versailler Vertrag", t5_text: "Der harte Friede.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was musste Deutschland anerkennen?", t5_qa: "Die Alleinschuld am Krieg", t5_qb: "Nichts", t5_qc: "Nur kleine Strafen", t5_qd: "Dass es gewonnen hat",
    t5_w1: "Deutschland", t5_w2: "verlor", t5_w3: "viele", t5_w4: "Gebiete", t5_w5: "und", t5_w6: "musste", t5_w7: "sein", t5_w8: "Militär",
    t5_l1: "Gebiet", t5_r1: "Verlust", t5_l2: "Geld", t5_r2: "Zahlung", t5_l3: "Schuld", t5_r3: "Paragraph",
    t5_sent: "Reparationen sind hohe ___.", t5_qa2: "Geldzahlungen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Viele", t5_f2: "Deutsche", t5_f3: "empfanden", t5_f4: "den", t5_f5: "Friedensvertrag", t5_f6: "als", t5_f7: "eine", t5_f8: "ungerechte", t5_f9: "Demütigung.",
    t5_tk1: "Der", t5_tk2: "Völkerbund", t5_tk3: "wurde", t5_tk4: "gegründet", t5_tk5: "um", t5_tk6: "zukünftige", t5_tk7: "Kriege", t5_tk8: "für", t5_tk9: "immer", t5_tk10: "zu",
    t5_bl1: "Gewinner", t5_bl2: "Verlierer", t5_i1: "Frankreich", t5_i2: "Deutschland", t5_i3: "Großbritannien", t5_i4: "Österreich",
    t6_title: "Russische Revolution", t6_text: "Lenin und die Sowjets.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Welches Jahr markiert den Umbruch?", t6_qa: "1917", t6_qb: "1933", t6_qc: "1815", t6_qd: "1989",
    t6_w1: "Der", t6_w2: "Zar", t6_w3: "wurde", t6_w4: "gestürzt", t6_w5: "und", t6_w6: "Russland", t6_w7: "wurde", t6_w8: "ein",
    t6_l1: "Zar", t6_r1: "Kaiser", t6_l2: "Lenin", t6_r2: "Anführer", t6_l3: "Sowjet", t6_r3: "Rat",
    t6_sent: "Die Bolschewiki ergriffen die ___.", t6_qa2: "Macht", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Nach", t6_f2: "einem", t6_f3: "blutigen", t6_f4: "Bürgerkrieg", t6_f5: "wurde", t6_f6: "schließlich", t6_f7: "die", t6_f8: "Sowjetunion", t6_f9: "offiziell",
    t6_tk1: "Kommunismus", t6_tk2: "war", t6_tk3: "die", t6_tk4: "neue", t6_tk5: "Ideologie", t6_tk6: "die", t6_tk7: "die", t6_tk8: "ganze", t6_tk9: "Welt", t6_tk10: "verändern",
    t6_bl1: "Alt", t6_bl2: "Neu", t6_i1: "Zar", t6_i2: "Kommunist", t6_i3: "Adel", t6_i4: "Arbeiter",
    t7_title: "Folgen", t7_text: "Eine neue Weltkarte.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Welches Reich zerfiel NICHT?", t7_qa: "Großbritannien", t7_qb: "Österreich-Ungarn", t7_qc: "Osmanisches Reich", t7_qd: "Deutsches Reich",
    t7_w1: "Polen", t7_w2: "Tschechoslowakei", t7_w3: "und", t7_w4: "das", t7_w5: "Baltikum", t7_w6: "wurden", t7_w7: "nach", t7_w8: "dem",
    t7_l1: "Ost", t7_r1: "Baltikum", t7_l2: "Süd", t7_r2: "Balkan", t7_l3: "West", t7_r3: "Elsass",
    t7_sent: "Viele neue ___ entstanden.", t7_qa2: "Nationalstaaten", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Die", t7_f2: "USA", t7_f3: "stiegen", t7_f4: "zur", t7_f5: "neuen", t7_f6: "Weltmacht", t7_f7: "Nummer", t7_f8: "eins", t7_f9: "auf.",
    t7_tk1: "Der", t7_tk2: "Erste", t7_tk3: "Weltkrieg", t7_tk4: "war", t7_tk5: "die", t7_tk6: "Urkatastrophe", t7_tk7: "des", t7_tk8: "zwanzigsten", t7_tk9: "Jahrhunderts.", t7_tk10: "",
    t7_bl1: "Reich", t7_bl2: "Republik", t7_i1: "Kaiserreich", t7_i2: "Weimar", t7_i3: "Zarenreich", t7_i4: "Sowjetunion",
    t8_title: "History-Check", t8_text: "Kriegs-Experte?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer war US-Präsident?", t8_qa: "Woodrow Wilson", t8_qb: "Roosevelt", t8_qc: "Kennedy", t8_qd: "Obama",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "schrecklichen", t8_w5: "Ereignisse", t8_w6: "und", t8_w7: "Folgen", t8_w8: "dieser",
    t8_l1: "Krieg", t8_r1: "Leid", t8_l2: "Frieden", t8_r2: "Ende", t8_l3: "Vertrag", t8_r3: "Regel",
    t8_sent: "Der Krieg dauerte ___ Jahre.", t8_qa2: "vier", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Nie", t8_f2: "wieder", t8_f3: "sollte", t8_f4: "ein", t8_f5: "solcher", t8_f6: "Konflikt", t8_f7: "die", t8_f8: "Menschheit", t8_f9: "ins",
    t8_tk1: "Gedenkstätten", t8_tk2: "erinnern", t8_tk3: "uns", t8_tk4: "heute", t8_tk5: "an", t8_tk6: "das", t8_tk7: "Opfer", t8_tk8: "vieler", t8_tk9: "Millionen", t8_tk10: "Soldaten.",
    t8_bl1: "Konflikt", t8_bl2: "Lösung", t8_i1: "Schlacht", t8_i2: "Diplomatie", t8_i3: "Front", t8_i4: "Bund",
  },
};

export const WELTKRIEG_K8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ursachen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Stellungskrieg", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Neue Waffen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Kriegsende", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Versailler Vertrag", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Russische Revolution", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Folgen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "History-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const WEIMAR_K8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Die Weimarer Republik",
    t1_title: "Die Gründung", t1_text: "Deutschlands erste Demokratie.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wo wurde die Verfassung beschlossen?", t1_qa: "Weimar", t1_qb: "Berlin", t1_qc: "München", t1_qd: "Hamburg",
    t1_w1: "Nach", t1_w2: "der", t1_w3: "Revolution", t1_w4: "neunzehnhundertachtzehn", t1_w5: "wollten", t1_w6: "die", t1_w7: "Menschen", t1_w8: "endlich",
    t1_l1: "Ebert", t1_r1: "Präsident", t1_l2: "Rat", t1_r2: "Volk", t1_l3: "National", t1_r3: "Versammlung",
    t1_sent: "Friedrich Ebert war der erste ___.", t1_qa2: "Präsident", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "Weimarer", t1_f3: "Verfassung", t1_f4: "gab", t1_f5: "dem", t1_f6: "Reichspräsidenten", t1_f7: "jedoch", t1_f8: "sehr", t1_f9: "viel",
    t1_tk1: "Frauen", t1_tk2: "erhielten", t1_tk3: "in", t1_tk4: "Deutschland", t1_tk5: "erstmals", t1_tk6: "das", t1_tk7: "allgemeine", t1_tk8: "Wahlrecht", t1_tk9: "und", t1_tk10: "Stimmrecht.",
    t1_bl1: "Demokratisch", t1_bl2: "Autoritär", t1_i1: "Wahl", t1_i2: "Kaiser", t1_i3: "Recht", t1_i4: "Befehl",
    t2_title: "Krisenjahre", t2_text: "Hyperinflation.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was passierte 1923?", t2_qa: "Das Geld verlor völlig seinen Wert", t2_qb: "Alle wurden reich", t2_qc: "Kriegsbeginn", t2_qd: "Olympiade",
    t2_w1: "Die", t2_w2: "Menschen", t2_w3: "mussten", t2_w4: "ihr", t2_w5: "Geld", t2_w6: "mit", t2_w7: "Schubkarren", t2_w8: "zum",
    t2_l1: "Inflation", t2_r1: "Geldwert", t2_l2: "Putsch", t2_r2: "Gewalt", t2_l3: "Ruhr", t2_r3: "Besetzung",
    t2_sent: "Ein Brot kostete Milliarden ___.", t2_qa2: "Mark", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Viele", t2_f2: "Familien", t2_f3: "verloren", t2_f4: "durch", t2_f5: "die", t2_f6: "Entwertung", t2_f7: "ihre", t2_f8: "gesamten", t2_f9: "Ersparnisse",
    t2_tk1: "In", t2_tk2: "München", t2_tk3: "versuchte", t2_tk4: "Adolf", t2_tk5: "Hitler", t2_tk6: "bereits", t2_tk7: "neunzehnhundertdreiundzwanzig", t2_tk8: "einen", t2_tk9: "ersten", t2_tk10: "Putsch.",
    t2_bl1: "Wirtschaft", t2_bl2: "Politik", t2_i1: "Geld", t2_i2: "Putsch", t2_i3: "Preise", t2_i4: "Streik",
    t3_title: "Goldene Zwanziger", t3_text: "Kultur und Aufbruch.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was blühte in Berlin auf?", t3_qa: "Kunst, Kino und Musik", t3_qb: "Landwirtschaft", t3_qc: "Nur das Militär", t3_qd: "Nichts",
    t3_w1: "Die", t3_w2: "Menschen", t3_w3: "genossen", t3_w4: "die", t3_w5: "neue", t3_w6: "Freiheit", t3_w7: "in", t3_w8: "Theatern",
    t3_l1: "Bauhaus", t3_r1: "Design", t3_l2: "Jazz", t3_r2: "Musik", t3_l3: "Kino", t3_r3: "Film",
    t3_sent: "Das Radio wurde zum ___.", t3_qa2: "Massenmedium", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Wissenschaftler", t3_f2: "wie", t3_f3: "Albert", t3_f4: "Einstein", t3_f5: "machten", t3_f6: "Deutschland", t3_f7: "zu", t3_f8: "einem", t3_f9: "Zentrum",
    t3_tk1: "Die", t3_tk2: "neue", t3_tk3: "Sachlichkeit", t3_tk4: "war", t3_tk5: "ein", t3_tk6: "wichtiger", t3_tk7: "Stil", t3_tk8: "in", t3_tk9: "der", t3_tk10: "Malerei",
    t3_bl1: "Moderne", t3_bl2: "Tradition", t3_i1: "Jazz", t3_i2: "Marsch", t3_i3: "Kino", t3_i4: "Kirche",
    t4_title: "Weltwirtschaftskrise", t4_text: "Der schwarze Freitag.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was geschah 1929 in New York?", t4_qa: "Börsenkrach", t4_qb: "Stadtbrand", t4_qc: "Friedensfest", t4_qd: "Wahl",
    t4_w1: "Millionen", t4_w2: "Menschen", t4_w3: "in", t4_w4: "Deutschland", t4_w5: "wurden", t4_w6: "plötzlich", t4_w7: "arbeitslos", t4_w8: "und",
    t4_l1: "Börse", t4_r1: "Aktien", t4_l2: "Banken", t4_r2: "Pleite", t4_l3: "Arbeit", t4_r3: "Verlust",
    t4_sent: "Die Arbeitslosigkeit stieg ___.", t4_qa2: "enorm", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Die", t4_f2: "wirtschaftliche", t4_f3: "Not", t4_f4: "trieb", t4_f5: "viele", t4_f6: "Wähler", t4_f7: "zu", t4_f8: "den", t4_f9: "extremen",
    t4_tk1: "Die", t4_tk2: "NSDAP", t4_tk3: "und", t4_tk4: "die", t4_tk5: "KPD", t4_tk6: "erhielten", t4_tk7: "immer", t4_tk8: "mehr", t4_tk9: "Zulauf", t4_tk10: "von",
    t4_bl1: "USA", t4_bl2: "Deutschland", t4_i1: "Wall Street", t4_i2: "Hunger", t4_i3: "Aktie", t4_i4: "Arbeitslos",
    t5_title: "Politische Gewalt", t5_text: "Kampf auf der Straße.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wer bekämpfte sich?", t5_qa: "SA und Rotfront", t5_qb: "Polizei und Kinder", t5_qc: "Hunde und Katzen", t5_qd: "Niemand",
    t5_w1: "Straßenschlachten", t5_w2: "und", t5_w3: "Saalschlachten", t5_w4: "gehörten", t5_w5: "zum", t5_w6: "alltäglichen", t5_w7: "Bild", t5_w8: "in",
    t5_l1: "SA", t5_r1: "Rechts", t5_l2: "Eisernes", t5_r2: "Mitte", t5_l3: "Rotfront", t5_r3: "Links",
    t5_sent: "Es gab viele politische ___.", t5_qa2: "Morde", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Die", t5_f2: "Demokraten", t5_f3: "fanden", t5_f4: "kaum", t5_f5: "noch", t5_f6: "Mittel", t5_f7: "gegen", t5_f8: "den", t5_f9: "Terror",
    t5_tk1: "Notverordnungen", t5_tk2: "ersetzten", t5_tk3: "langsam", t5_tk4: "die", t5_tk5: "normale", t5_tk6: "Arbeit", t5_tk7: "des", t5_tk8: "gewählten", t5_tk9: "Parlaments.", t5_tk10: "",
    t5_bl1: "Radikal", t5_bl2: "Gemäßigt", t5_i1: "Nazis", t5_i2: "Zentrum", t5_i3: "KPD", t5_i4: "SPD",
    t6_title: "Untergang", t6_text: "Das Ende von Weimar.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wann wurde Hitler Kanzler?", t6_qa: "30. Januar 1933", t6_qb: "1918", t6_qc: "1945", t6_qd: "2020",
    t6_w1: "Durch", t6_w2: "Intrigen", t6_w3: "und", t6_w4: "Wahlerfolge", t6_w5: "gelangte", t6_w6: "Hitler", t6_w7: "schließlich", t6_w8: "legal",
    t6_l1: "Hindenburg", t6_r1: "Präsident", t6_l2: "Papen", t6_r2: "Vize", t6_l3: "Hitler", t6_r3: "Diktator",
    t6_sent: "Hindenburg ernannte den neuen ___.", t6_qa2: "Kanzler", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Die", t6_f2: "Demokratie", t6_f3: "wurde", t6_f4: "innerhalb", t6_f5: "weniger", t6_f6: "Wochen", t6_f7: "durch", t6_f8: "den", t6_f9: "Nationalsozialismus",
    t6_tk1: "Der", t6_tk2: "Reichstagsbrand", t6_tk3: "diente", t6_tk4: "als", t6_tk5: "Vorwand", t6_tk6: "um", t6_tk7: "wichtige", t6_tk8: "Grundrechte", t6_tk9: "einfach", t6_tk10: "außer",
    t6_bl1: "Demokratie", t6_bl2: "Diktatur", t6_i1: "Freiheit", t6_i2: "Zensur", t6_i3: "Wahl", t6_i4: "Gleichschaltung",
    t7_title: "Lektionen", t7_text: "Was wir lernen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was fehlte Weimar?", t7_qa: "Demokraten, die sie schützten", t7_qb: "Geld", t7_qc: "Autos", t7_qd: "Ein Kaiser",
    t7_w1: "Die", t7_w2: "Verfassung", t7_w3: "war", t7_w4: "gut", t7_w5: "aber", t7_w6: "sie", t7_w7: "hatte", t7_w8: "zu",
    t7_l1: "Schutz", t7_r1: "Gesetz", t7_l2: "Wachsam", t7_r2: "Bürger", t7_l3: "Mut", t7_r3: "Wahl",
    t7_sent: "Demokratie ist nicht ___.", t7_qa2: "selbstverständlich", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Heute", t7_f2: "haben", t7_f3: "wir", t7_f4: "eine", t7_f5: "wehrhafte", t7_f6: "Demokratie", t7_f7: "die", t7_f8: "sich", t7_f9: "gegen",
    t7_tk1: "Politische", t7_tk2: "Bildung", t7_tk3: "ist", t7_tk4: "wichtig", t7_tk5: "um", t7_tk6: "die", t7_tk7: "Fehler", t7_tk8: "der", t7_tk9: "Vergangenheit", t7_tk10: "niemals",
    t7_bl1: "Gestern", t7_bl2: "Heute", t7_i1: "Weimar", t7_i2: "Bonn", t7_i3: "Reichstag", t7_i4: "Bundestag",
    t8_title: "Check", t8_text: "Republik-Kenner?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer war Reichspräsident nach Ebert?", t8_qa: "Paul von Hindenburg", t8_qb: "Adolf Hitler", t8_qc: "Angela Merkel", t8_qd: "Bismarck",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "den", t8_w4: "kurzen", t8_w5: "Traum", t8_w6: "von", t8_w7: "der", t8_w8: "Freiheit",
    t8_l1: "1919", t8_r1: "Verfassung", t8_l2: "1923", t8_r2: "Inflation", t8_l3: "1929", t8_r3: "Börsenkrach",
    t8_sent: "Weimar war eine schwere ___.", t8_qa2: "Geburt", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Die", t8_f2: "Geschichte", t8_f3: "zeigt", t8_f4: "uns", t8_f5: "wie", t8_f6: "schnell", t8_f7: "Freiheit", t8_f8: "verloren", t8_f9: "gehen",
    t8_tk1: "Verantwortung", t8_tk2: "für", t8_tk3: "den", t8_tk4: "Staat", t8_tk5: "tragen", t8_tk6: "alle", t8_tk7: "Bürger", t8_tk8: "gemeinsam", t8_tk9: "durch", t8_tk10: "ihre",
    t8_bl1: "Start", t8_bl2: "Ziel", t8_i1: "Hoffnung", t8_i2: "Trümmer", t8_i3: "Aufbruch", t8_i4: "Ende",
  },
};

export const WEIMAR_K8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die Gründung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Krisenjahre", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Goldene Zwanziger", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Weltwirtschaftskrise", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Politische Gewalt", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Untergang", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Lektionen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const OEKOLOGIE_ADV_K8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ökosystem Wald & See",
    t1_title: "Stoffkreislauf", t1_text: "Der ewige Kreis.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer produziert Biomasse?", t1_qa: "Produzenten (Pflanzen)", t1_qb: "Tiere", t1_qc: "Pilze", t1_qd: "Steine",
    t1_w1: "Energie", t1_w2: "fließt", t1_w3: "durch", t1_w4: "das", t1_w5: "System", t1_w6: "während", t1_w7: "Stoffe", t1_w8: "ständig",
    t1_l1: "Produzent", t1_r1: "Pflanze", t1_l2: "Konsument", t1_r2: "Tier", t1_l3: "Destruent", t1_r3: "Abbau",
    t1_sent: "Pilze und Bakterien sind ___.", t1_qa2: "Destruenten", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Ohne", t1_f2: "Zersetzer", t1_f3: "würde", t1_f4: "der", t1_f5: "Wald", t1_f6: "unter", t1_f7: "einer", t1_f8: "riesigen", t1_f9: "Schicht",
    t1_tk1: "Mineralstoffe", t1_tk2: "werden", t1_tk3: "aus", t1_tk4: "totem", t1_tk5: "Material", t1_tk6: "wieder", t1_tk7: "für", t1_tk8: "die", t1_tk9: "Pflanzen", t1_tk10: "verfügbar",
    t1_bl1: "Aufbau", t1_bl2: "Abbau", t1_i1: "Baum", t1_i2: "Pilz", t1_i3: "Moos", t1_i4: "Wurm",
    t2_title: "Energiefluss", t2_text: "Von der Sonne zum Jäger.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie viel Energie geht pro Stufe verloren?", t2_qa: "Etwa 90%", t2_qb: "Nichts", t2_qc: "50%", t2_qd: "100%",
    t2_w1: "Nur", t2_w2: "ein", t2_w3: "kleiner", t2_w4: "Teil", t2_w5: "der", t2_w6: "Energie", t2_w7: "wird", t2_w8: "in",
    t2_l1: "Sonne", t2_r1: "Quelle", t2_l2: "Pflanze", t2_r2: "Stufe 1", t2_l3: "Reh", t2_r3: "Stufe 2",
    t2_sent: "In der Pyramide ist oben ___.", t2_qa2: "weniger", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "meiste", t2_f3: "Energie", t2_f4: "wird", t2_f5: "als", t2_f6: "Wärme", t2_f7: "beim", t2_f8: "Atmen", t2_f9: "und",
    t2_tk1: "Nahrungspyramiden", t2_tk2: "zeigen", t2_tk3: "warum", t2_tk4: "es", t2_tk5: "viele", t2_tk6: "Pflanzen", t2_tk7: "aber", t2_tk8: "nur", t2_tk9: "wenige", t2_tk10: "Raubtiere",
    t2_bl1: "Viel", t2_bl2: "Wenig", t2_i1: "Gras", t2_i2: "Wolf", t2_i3: "Klee", t2_i4: "Adler",
    t3_title: "See im Jahreslauf", t3_text: "Die Schichtung.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Bei welcher Temperatur ist Wasser am schwersten?", t3_qa: "4 Grad Celsius", t3_qb: "0 Grad", t3_qc: "100 Grad", t3_qd: "20 Grad",
    t3_w1: "Die", t3_w2: "Anomalie", t3_w3: "des", t3_w4: "Wassers", t3_w5: "verhindert", t3_w6: "dass", t3_w7: "Seen", t3_w8: "im",
    t3_l1: "Frühling", t3_r1: "Zirkulation", t3_l2: "Sommer", t3_r2: "Schichtung", t3_l3: "Winter", t3_r3: "Starre",
    t3_sent: "Im Winter ist es am Grund ___.", t3_qa2: "warm", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Bei", t3_f2: "der", t3_f3: "Vollzirkulation", t3_f4: "wird", t3_f5: "der", t3_f6: "Sauerstoff", t3_f7: "bis", t3_f8: "in", t3_f9: "die",
    t3_tk1: "Sprungschicht", t3_tk2: "nennt", t3_tk3: "man", t3_tk4: "den", t3_tk5: "Bereich", t3_tk6: "mit", t3_tk7: "einem", t3_tk8: "sehr", t3_tk9: "starken", t3_tk10: "Temperaturunterschied.",
    t3_bl1: "Oben", t3_bl2: "Unten", t3_i1: "Eis", t3_i2: "4 Grad", t3_i3: "Sonne", t3_i4: "Grund",
    t4_title: "Eutrophierung", t4_text: "Der See kippt um.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist der Auslöser?", t4_qa: "Zu viele Nährstoffe (Dünger)", t4_qb: "Zu viel Fisch", t4_qc: "Schatten", t4_qd: "Kälte",
    t4_w1: "Wenn", t4_w2: "zu", t4_w3: "viele", t4_w4: "Phosphate", t4_w5: "ins", t4_w6: "Wasser", t4_w7: "gelangen", t4_w8: "vermehren",
    t4_l1: "Alge", t4_r1: "Wachstum", t4_l2: "Bakterie", t4_r2: "Zersetzung", t4_l3: "Fisch", t4_r3: "Tod",
    t4_sent: "Algenblüte verbraucht den ___.", t4_qa2: "Sauerstoff", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Am", t4_f2: "Ende", t4_f3: "entsteht", t4_f4: "giftiger", t4_f5: "Faulschlamm", t4_f6: "am", t4_f7: "Boden", t4_f8: "und", t4_f9: "das",
    t4_tk1: "Oligotroph", t4_tk2: "nennt", t4_tk3: "man", t4_tk4: "einen", t4_tk5: "nährstoffarmen", t4_tk6: "und", t4_tk7: "meist", t4_tk8: "sehr", t4_tk9: "klaren", t4_tk10: "See.",
    t4_bl1: "Sauber", t4_bl2: "Umgekippt", t4_i1: "Kies", t4_i2: "Alge", t4_i3: "Forelle", t4_i4: "Schlamm",
    t5_title: "Symbiose", t5_text: "Zusammen ist man stark.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist eine Flechte?", t5_qa: "Pilz + Alge", t5_qb: "Zwei Blumen", t5_qc: "Moos", t5_qd: "Ein Tier",
    t5_w1: "Bei", t5_w2: "einer", t5_w3: "Symbiose", t5_w4: "profitieren", t5_w5: "beide", t5_w6: "Lebewesen", t5_w7: "von", t5_w8: "der",
    t5_l1: "Biene", t5_r1: "Blume", t5_l2: "Einsiedler", t5_r2: "Anemone", t5_l3: "Pilz", t5_r3: "Baum",
    t5_sent: "Beide Partner haben einen ___.", t5_qa2: "Vorteil", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Mykorrhiza", t5_f2: "ist", t5_f3: "eine", t5_f4: "wichtige", t5_f5: "Verbindung", t5_f6: "zwischen", t5_f7: "Baumwurzeln", t5_f8: "und", t5_f9: "vielen",
    t5_tk1: "Parasitismus", t5_tk2: "hingegen", t5_tk3: "schadet", t5_tk4: "einem", t5_tk5: "Partner", t5_tk6: "während", t5_tk7: "der", t5_tk8: "andere", t5_tk9: "davon", t5_tk10: "lebt.",
    t5_bl1: "Helfer", t5_bl2: "Schmarotzer", t5_i1: "Biene", t5_i2: "Zecke", t5_i3: "Pilz", t5_i4: "Bandwurm",
    t6_title: "Ökologische Nische", t6_text: "Jeder hat seinen Platz.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Warum können viele Arten im Wald leben?", t6_qa: "Sie nutzen verschiedene Nischen", t6_qb: "Es gibt unendlich Platz", t6_qc: "Sie streiten nicht", t6_qd: "Zufall",
    t6_w1: "Die", t6_w2: "Nische", t6_w3: "beschreibt", t6_w4: "alle", t6_w5: "Umweltfaktoren", t6_w6: "die", t6_w7: "eine", t6_w8: "Art",
    t6_l1: "Nacht", t6_r1: "Eule", t6_l2: "Tag", t6_r2: "Habicht", t6_l3: "Baum", t6_r3: "Specht",
    t6_sent: "Nische ist kein Ort, sondern ein ___.", t6_qa2: "Beruf", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Konkurrenzvermeidung", t6_f2: "erlaubt", t6_f3: "es", t6_f4: "dass", t6_f5: "ähnliche", t6_f6: "Arten", t6_f7: "nebeneinander", t6_f8: "existieren", t6_f9: "können.",
    t6_tk1: "Spezialisierung", t6_tk2: "hilft", t6_tk3: "dabei", t6_tk4: "neue", t6_tk5: "Nahrungsquellen", t6_tk6: "oder", t6_tk7: "Lebensräume", t6_tk8: "optimal", t6_tk9: "zu", t6_tk10: "nutzen.",
    t6_bl1: "Biogen", t6_bl2: "Abiotisch", t6_i1: "Beute", t6_i2: "Licht", t6_i3: "Feind", t6_i4: "Wärme",
    t7_title: "Neobiota", t7_text: "Fremde Arten.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was ist ein Waschbär in DE?", t7_qa: "Neozoon (Eingewandert)", t7_qb: "Heimisch", t7_qc: "Ein Vogel", t7_qd: "Ein Fisch",
    t7_w1: "Oft", t7_w2: "haben", t7_w3: "die", t7_w4: "neuen", t7_w5: "Arten", t7_w6: "hier", t7_w7: "keine", t7_w8: "natürlichen",
    t7_l1: "Neozoon", t7_r1: "Tier", t7_l2: "Neophyt", t7_r2: "Pflanze", t7_l3: "Invasiv", t7_r3: "Gefährlich",
    t7_sent: "Fremde Arten können das ___ stören.", t7_qa2: "Gleichgewicht", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Das", t7_f2: "Springkraut", t7_f3: "verdrängt", t7_f4: "an", t7_f5: "vielen", t7_f6: "Bächen", t7_f7: "die", t7_f8: "ursprünglichen", t7_f9: "heimischen",
    t7_tk1: "Globaler", t7_tk2: "Handel", t7_tk3: "und", t7_tk4: "Reisen", t7_tk5: "fördern", t7_tk6: "die", t7_tk7: "unbeabsichtigte", t7_tk8: "Verschleppung", t7_tk9: "von", t7_tk10: "Arten.",
    t7_bl1: "Hier", t7_bl2: "Neu", t7_i1: "Reh", t7_i2: "Waschbär", t7_i3: "Eiche", t7_i4: "Riesenbärenklau",
    t8_title: "Check", t8_text: "Öko-Master?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist ein Biotop?", t8_qa: "Der Lebensraum", t8_qb: "Die Tiere", t8_qc: "Eine Stadt", t8_qd: "Ein Buch",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "feinen", t8_w5: "Netze", t8_w6: "der", t8_w7: "Natur", t8_w8: "genau",
    t8_l1: "Bio", t8_r1: "Leben", t8_l2: "Abio", t8_r2: "Nicht", t8_l3: "Zönose", t8_r3: "Gemeinschaft",
    t8_sent: "Ökologie ist sehr ___.", t8_qa2: "komplex", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Nachhaltigkeit", t8_f2: "ist", t8_f3: "der", t8_f4: "Schlüssel", t8_f5: "um", t8_f6: "unsere", t8_f7: "Ökosysteme", t8_f8: "dauerhaft", t8_f9: "zu",
    t8_tk1: "Der", t8_tk2: "Mensch", t8_tk3: "ist", t8_tk4: "Teil", t8_tk5: "der", t8_tk6: "Natur", t8_tk7: "und", t8_tk8: "muss", t8_tk9: "verantwortungsvoll", t8_tk10: "mit",
    t8_bl1: "Wald", t8_bl2: "See", t8_i1: "Buche", t8_i2: "Alge", t8_i3: "Reh", t8_i4: "Hecht",
  },
};

export const OEKOLOGIE_ADV_K8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Stoffkreislauf", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Energiefluss", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "See im Jahreslauf", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Eutrophierung", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Symbiose", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Ökologische Nische", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Neobiota", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const ELEKTRO_K8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Induktion & Motoren",
    t1_title: "Magnetfelder", t1_text: "Unsichtbare Kräfte.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was erzeugt ein Magnetfeld?", t1_qa: "Stromdurchflossener Leiter", t1_qb: "Holzstab", t1_qc: "Glas", t1_qd: "Statisches Papier",
    t1_w1: "Um", t1_w2: "jeden", t1_w3: "elektrischen", t1_w4: "Strom", t1_w5: "herum", t1_w6: "entsteht", t1_w7: "immer", t1_w8: "ein",
    t1_l1: "Eisen", t1_r1: "Kern", t1_l2: "Spule", t1_r2: "Draht", t1_l3: "Pol", t1_r3: "Ende",
    t1_sent: "Feldlinien verlaufen von ___.", t1_qa2: "Nord nach Süd", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "Rechte-Hand-Regel", t1_f3: "hilft", t1_f4: "uns", t1_f5: "die", t1_f6: "Richtung", t1_f7: "der", t1_f8: "Feldlinien", t1_f9: "zu",
    t1_tk1: "Ein", t1_tk2: "starker", t1_tk3: "Elektromagnet", t1_tk4: "kann", t1_tk5: "mühelos", t1_tk6: "tonnenschwere", t1_tk7: "Lasten", t1_tk8: "aus", t1_tk9: "Stahl", t1_tk10: "bewegen.",
    t1_bl1: "Permanent", t1_bl2: "Elektro", t1_i1: "Hufeisen", t1_i2: "Spule", t1_i3: "Stab", t1_i4: "Kabel",
    t2_title: "Induktion", t2_text: "Strom aus Bewegung.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wer entdeckte die Induktion?", t2_qa: "Michael Faraday", t2_qb: "Nikola Tesla", t2_qc: "undefined", t2_qd: "Albert Einstein",
    t2_w1: "Wenn", t2_w2: "sich", t2_w3: "ein", t2_w4: "Magnet", t2_w5: "in", t2_w6: "einer", t2_w7: "Spule", t2_w8: "bewegt",
    t2_l1: "Dynamo", t2_r1: "Rad", t2_l2: "Generator", t2_r2: "Kraftwerk", t2_l3: "Spule", t2_r3: "Draht",
    t2_sent: "Bewegung im Magnetfeld macht ___.", t2_qa2: "Spannung", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Lenzsche", t2_f3: "Regel", t2_f4: "besagt", t2_f5: "dass", t2_f6: "der", t2_f7: "Induktionsstrom", t2_f8: "seiner", t2_f9: "Ursache",
    t2_tk1: "Induktionsherde", t2_tk2: "nutzen", t2_tk3: "dieses", t2_tk4: "Prinzip", t2_tk5: "um", t2_tk6: "Töpfe", t2_tk7: "direkt", t2_tk8: "durch", t2_tk9: "Magnetfelder", t2_tk10: "zu",
    t2_bl1: "Ursache", t2_bl2: "Wirkung", t2_i1: "Bewegung", t2_i2: "Spannung", t2_i3: "Magnet", t2_i4: "Strom",
    t3_title: "Der Generator", t3_text: "Strommaschine.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was macht ein Generator?", t3_qa: "Mechanische in elektrische Energie", t3_qb: "Hitze in Licht", t3_qc: "Strom in Wasser", t3_qd: "Nichts",
    t3_w1: "In", t3_w2: "fast", t3_w3: "allen", t3_w4: "Kraftwerken", t3_w5: "drehen", t3_w6: "riesige", t3_w7: "Generatoren", t3_w8: "um",
    t3_l1: "Rotor", t3_r1: "Dreht", t3_l2: "Stator", t3_r2: "Steht", t3_l3: "Welle", t3_r3: "Achse",
    t3_sent: "Er arbeitet wie ein großer ___.", t3_qa2: "Fahrraddynamo", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Ein", t3_f2: "Kommutator", t3_f3: "wird", t3_f4: "gebraucht", t3_f5: "um", t3_f6: "aus", t3_f7: "Wechselstrom", t3_f8: "einen", t3_f9: "Gleichstrom",
    t3_tk1: "Windturbinen", t3_tk2: "treiben", t3_tk3: "den", t3_tk4: "Generator", t3_tk5: "direkt", t3_tk6: "mit", t3_tk7: "der", t3_tk8: "Kraft", t3_tk9: "des", t3_tk10: "Windes",
    t3_bl1: "Beweglich", t3_bl2: "Fest", t3_i1: "Rotor", t3_i2: "Stator", t3_i3: "Achse", t3_i4: "Gehäuse",
    t4_title: "Elektromotor", t4_text: "Strom macht Drehung.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist das Herz des Motors?", t4_qa: "Die Lorentzkraft", t4_qb: "Reibung", t4_qc: "Hitze", t4_qd: "Schwerkraft",
    t4_w1: "Ein", t4_w2: "Elektromotor", t4_w3: "wandelt", t4_w4: "elektrische", t4_w5: "Energie", t4_w6: "wieder", t4_w7: "in", t4_w8: "mechanische",
    t4_l1: "Anker", t4_r1: "Mitte", t4_l2: "Magnet", t4_r2: "Außen", t4_l3: "Bürsten", t4_r3: "Kontakt",
    t4_sent: "Gleiche Pole ___ sich ab.", t4_qa2: "stoßen", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Durch", t4_f2: "ständiges", t4_f3: "Umpolen", t4_f4: "wird", t4_f5: "der", t4_f6: "innere", t4_f7: "Teil", t4_f8: "immer", t4_f9: "weiter",
    t4_tk1: "Elektroautos", t4_tk2: "sind", t4_tk3: "viel", t4_tk4: "effizienter", t4_tk5: "als", t4_tk6: "Fahrzeuge", t4_tk7: "mit", t4_tk8: "einem", t4_tk9: "Verbrennungsmotor.", t4_tk10: "",
    t4_bl1: "Motor", t4_bl2: "Generator", t4_i1: "Strom rein", t4_i2: "Strom raus", t4_i3: "Kraft raus", t4_i4: "Drehung rein",
    t5_title: "Transformator", t5_text: "Spannung ändern.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wozu dient ein Trafo?", t5_qa: "Hoch- oder Runterspannen", t5_qb: "Strom speichern", t5_qc: "Licht machen", t5_qd: "Kühlen",
    t5_w1: "Ein", t5_w2: "Transformator", t5_w3: "funktioniert", t5_w4: "nur", t5_w5: "mit", t5_w6: "Wechselstrom", t5_w7: "wegen", t5_w8: "des",
    t5_l1: "Primär", t5_r1: "Eingang", t5_l2: "Sekundär", t5_r2: "Ausgang", t5_l3: "Kern", t5_r3: "Eisen",
    t5_sent: "Er braucht zwei ___.", t5_qa2: "Spulen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Hochspannung", t5_f2: "ist", t5_f3: "nötig", t5_f4: "um", t5_f5: "Strom", t5_f6: "über", t5_f7: "weite", t5_f8: "Strecken", t5_f9: "verlustarm",
    t5_tk1: "Handyladegeräte", t5_tk2: "enthalten", t5_tk3: "winzige", t5_tk4: "Transformatoren", t5_tk5: "die", t5_tk6: "die", t5_tk7: "Spannung", t5_tk8: "für", t5_tk9: "uns", t5_tk10: "senken.",
    t5_bl1: "Viel Windung", t5_bl2: "Wenig", t5_i1: "Hoch", t5_i2: "Tief", t5_i3: "Viel Volt", t5_i4: "Wenig Volt",
    t6_title: "Stromnetz", t6_text: "Verteilung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie viel Volt hat die Steckdose?", t6_qa: "230 V", t6_qb: "12 V", t6_qc: "1000 V", t6_qd: "0 V",
    t6_w1: "Das", t6_w2: "Stromnetz", t6_w3: "muss", t6_w4: "immer", t6_w5: "genau", t6_w6: "so", t6_w7: "viel", t6_w8: "Energie",
    t6_l1: "Kraftwerk", t6_r1: "Quelle", t6_l2: "Leitung", t6_r2: "Weg", t6_l3: "Haus", t6_r3: "Ziel",
    t6_sent: "Überlandleitungen haben ___.", t6_qa2: "Hochspannung", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Smart", t6_f2: "Grids", t6_f3: "sind", t6_f4: "intelligente", t6_f5: "Netze", t6_f6: "die", t6_f7: "Strom", t6_f8: "aus", t6_f9: "vielen",
    t6_tk1: "Ein", t6_tk2: "Blackout", t6_tk3: "ist", t6_tk4: "ein", t6_tk5: "großer", t6_tk6: "Stromausfall", t6_tk7: "der", t6_tk8: "ganze", t6_tk9: "Länder", t6_tk10: "betreffen",
    t6_bl1: "Wechsel", t6_bl2: "Gleich", t6_i1: "Steckdose", t6_i2: "Batterie", t6_i3: "Netz", t6_i4: "Akku",
    t7_title: "Halbleiter", t7_text: "Chips & Co.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Bekanntester Halbleiter?", t7_qa: "Silizium", t7_qb: "Holz", t7_qc: "Wasser", t7_qd: "Eisen",
    t7_w1: "Halbleiter", t7_w2: "leiten", t7_w3: "den", t7_w4: "Strom", t7_w5: "nur", t7_w6: "unter", t7_w7: "ganz", t7_w8: "bestimmten",
    t7_l1: "Diode", t7_r1: "Ventil", t7_l2: "LED", t7_r2: "Licht", t7_l3: "Transistor", t7_r3: "Schalter",
    t7_sent: "Dioden lassen Strom nur in ___ Richtung.", t7_qa2: "eine", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "In", t7_f2: "jedem", t7_f3: "Computer", t7_f4: "stecken", t7_f5: "Milliarden", t7_f6: "winziger", t7_f7: "Transistoren", t7_f8: "auf", t7_f9: "einem",
    t7_tk1: "Photovoltaik", t7_tk2: "nutzt", t7_tk3: "Halbleiter", t7_tk4: "um", t7_tk5: "aus", t7_tk6: "Licht", t7_tk7: "direkt", t7_tk8: "elektrische", t7_tk9: "Energie", t7_tk10: "zu",
    t7_bl1: "Leiter", t7_bl2: "Isolator", t7_i1: "Kupfer", t7_i2: "Glas", t7_i3: "Silizium", t7_i4: "Plastik",
    t8_title: "Check", t8_text: "Physik-Profi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist Induktion?", t8_qa: "Strom durch Magnetfeldänderung", t8_qb: "Magnetismus durch Wärme", t8_qc: "Licht durch Reibung", t8_qd: "Ein Spiel",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "geheimen", t8_w5: "Kräfte", t8_w6: "von", t8_w7: "Elektrizität", t8_w8: "und",
    t8_l1: "Motor", t8_r1: "Kraft", t8_l2: "Trafo", t8_r2: "Wandel", t8_l3: "Spule", t8_r3: "Draht",
    t8_sent: "Physik macht Technik ___.", t8_qa2: "möglich", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Die", t8_f2: "Zukunft", t8_f3: "der", t8_f4: "Energie", t8_f5: "liegt", t8_f6: "in", t8_f7: "der", t8_f8: "intelligenten", t8_f9: "Nutzung",
    t8_tk1: "Experimentieren", t8_tk2: "ist", t8_tk3: "der", t8_tk4: "beste", t8_tk5: "Weg", t8_tk6: "um", t8_tk7: "die", t8_tk8: "Welt", t8_tk9: "wirklich", t8_tk10: "zu",
    t8_bl1: "Theorie", t8_bl2: "Praxis", t8_i1: "Buch", t8_i2: "Labor", t8_i3: "Formel", t8_i4: "Bau",
  },
};

export const ELEKTRO_K8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Magnetfelder", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Induktion", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Der Generator", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Elektromotor", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Transformator", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Stromnetz", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Halbleiter", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const EUROPA_ZUKUNFT_K8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Europa & Zukunft",
    t1_title: "Die EU-Werte", t1_text: "Was uns eint.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Ein Grundwert der EU?", t1_qa: "Demokratie und Freiheit", t1_qb: "Reichtum für wenige", t1_qc: "Streit", t1_qd: "Zensur",
    t1_w1: "Menschenwürde", t1_w2: "Freiheit", t1_w3: "Demokratie", t1_w4: "Gleichheit", t1_w5: "und", t1_w6: "Rechtsstaatlichkeit", t1_w7: "sind", t1_w8: "unsere",
    t1_l1: "Freiheit", t1_r1: "Reden", t1_l2: "Recht", t1_r2: "Gesetz", t1_l3: "Frieden", t1_r3: "Sicherheit",
    t1_sent: "Die EU sichert den ___.", t1_qa2: "Frieden", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "Europäische", t1_f3: "Union", t1_f4: "wurde", t1_f5: "gegründet", t1_f6: "damit", t1_f7: "nie", t1_f8: "wieder", t1_f9: "Krieg",
    t1_tk1: "Der", t1_tk2: "Friedensnobelpreis", t1_tk3: "wurde", t1_tk4: "der", t1_tk5: "EU", t1_tk6: "im", t1_tk7: "Jahr", t1_tk8: "zweitausendzwölf", t1_tk9: "verliehen.", t1_tk10: "",
    t1_bl1: "Recht", t1_bl2: "Werte", t1_i1: "Wahl", t1_i2: "Freiheit", t1_i3: "Gesetz", t1_i4: "Würde",
    t2_title: "Binnenmarkt", t2_text: "Grenzenloses Shoppen.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was darf frei reisen?", t2_qa: "Personen, Waren, Geld, Dienste", t2_qb: "Nur Briefe", t2_qc: "Nichts", t2_qd: "Nur Autos",
    t2_w1: "Der", t2_w2: "europäische", t2_w3: "Binnenmarkt", t2_w4: "ist", t2_w5: "einer", t2_w6: "der", t2_w7: "größten", t2_w8: "Wirtschaftsräume",
    t2_l1: "Ware", t2_r1: "LKW", t2_l2: "Geld", t2_r2: "Euro", t2_l3: "Mensch", t2_r3: "Reisen",
    t2_sent: "Zölle gibt es in der EU ___.", t2_qa2: "nicht", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Unternehmen", t2_f2: "können", t2_f3: "ihre", t2_f4: "Produkte", t2_f5: "ohne", t2_f6: "Zusatzkosten", t2_f7: "in", t2_f8: "alle", t2_f9: "Mitgliedstaaten",
    t2_tk1: "Schengen", t2_tk2: "bedeutet", t2_tk3: "dass", t2_tk4: "es", t2_tk5: "an", t2_tk6: "den", t2_tk7: "meisten", t2_tk8: "Grenzen", t2_tk9: "keine", t2_tk10: "Kontrollen",
    t2_bl1: "Freiheit", t2_bl2: "Früher", t2_i1: "Reisen", t2_i2: "Zoll", t2_i3: "Euro", t2_i4: "Grenze",
    t3_title: "Der Euro", t3_text: "Unsere Währung.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wann kam das Bargeld?", t3_qa: "1. Januar 2002", t3_qb: "1900", t3_qc: "2020", t3_qd: "Gestern",
    t3_w1: "Der", t3_w2: "Euro", t3_w3: "erleichtert", t3_w4: "das", t3_w5: "Reisen", t3_w6: "und", t3_w7: "den", t3_w8: "Handel",
    t3_l1: "Schein", t3_r1: "Papier", t3_l2: "Münze", t3_r2: "Metall", t3_l3: "Bank", t3_r3: "EZB",
    t3_sent: "Die EZB sitzt in ___.", t3_qa2: "Frankfurt", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Nicht", t3_f2: "alle", t3_f3: "EU-Länder", t3_f4: "nutzen", t3_f5: "den", t3_f6: "Euro", t3_f7: "als", t3_f8: "ihre", t3_f9: "offizielle",
    t3_tk1: "Stabilität", t3_tk2: "ist", t3_tk3: "das", t3_tk4: "wichtigste", t3_tk5: "Ziel", t3_tk6: "für", t3_tk7: "die", t3_tk8: "Europäische", t3_tk9: "Zentralbank.", t3_tk10: "",
    t3_bl1: "Euro", t3_bl2: "Kein Euro", t3_i1: "Deutschland", t3_i2: "Polen", t3_i3: "Spanien", t3_i4: "Schweiz",
    t4_title: "EU-Organe", t4_text: "Wer bestimmt?", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo sitzen die Kommissare?", t4_qa: "Brüssel", t4_qb: "Straßburg", t4_qc: "Luxemburg", t4_qd: "Berlin",
    t4_w1: "Die", t4_w2: "Europäische", t4_w3: "Kommission", t4_w4: "schlägt", t4_w5: "neue", t4_w6: "Gesetze", t4_w7: "für", t4_w8: "die",
    t4_l1: "Rat", t4_r1: "Staaten", t4_l2: "Parlament", t4_r2: "Volk", t4_l3: "Gericht", t4_r3: "Recht",
    t4_sent: "Abgeordnete sind im ___.", t4_qa2: "Parlament", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Das", t4_f2: "Europäische", t4_f3: "Parlament", t4_f4: "wird", t4_f5: "alle", t4_f6: "fünf", t4_f7: "Jahre", t4_f8: "direkt", t4_f9: "gewählt.",
    t4_tk1: "In", t4_tk2: "Luxemburg", t4_tk3: "befindet", t4_tk4: "sich", t4_tk5: "der", t4_tk6: "Europäische", t4_tk7: "Gerichtshof", t4_tk8: "der", t4_tk9: "über", t4_tk10: "Recht",
    t4_bl1: "Ort", t4_bl2: "Amt", t4_i1: "Brüssel", t4_i2: "Kommissar", t4_i3: "Straßburg", t4_i4: "Abgeordneter",
    t5_title: "Herausforderungen", t5_text: "Klima & Migration.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wichtigstes Ziel bis 2050?", t5_qa: "Klimaneutralität", t5_qb: "Mehr Plastik", t5_qc: "Wüstenbau", t5_qd: "Mondreise",
    t5_w1: "Globale", t5_w2: "Probleme", t5_w3: "kann", t5_w4: "kein", t5_w5: "europäisches", t5_w6: "Land", t5_w7: "mehr", t5_w8: "ganz",
    t5_l1: "Klima", t5_r1: "CO2", t5_l2: "Flucht", t5_r2: "Asyl", t5_l3: "Digital", t5_r3: "Daten",
    t5_sent: "Europa braucht gemeinsame ___.", t5_qa2: "Lösungen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Zusammenhalt", t5_f2: "ist", t5_f3: "wichtig", t5_f4: "um", t5_f5: "Frieden", t5_f6: "und", t5_f7: "Wohlstand", t5_f8: "für", t5_f9: "alle",
    t5_tk1: "Jugendarbeitslosigkeit", t5_tk2: "ist", t5_tk3: "in", t5_tk4: "manchen", t5_tk5: "Ländern", t5_tk6: "Südeuropas", t5_tk7: "ein", t5_tk8: "sehr", t5_tk9: "großes", t5_tk10: "Problem.",
    t5_bl1: "Problem", t5_bl2: "Chance", t5_i1: "Krise", t5_i2: "Austausch", t5_i3: "Krieg", t5_i4: "Handel",
    t6_title: "Erasmus", t6_text: "Lernen in Europa.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was ist Erasmus?", t6_qa: "Austausch für Schüler & Studenten", t6_qb: "Ein Raumschiff", t6_qc: "Ein neues Spiel", t6_qd: "Ein Gesetz",
    t6_w1: "Erasmus", t6_w2: "fördert", t6_w3: "das", t6_w4: "Verständnis", t6_w5: "und", t6_w6: "die", t6_w7: "Freundschaft", t6_w8: "zwischen",
    t6_l1: "Schule", t6_r1: "Lernen", t6_l2: "Reisen", t6_r2: "Erleben", t6_l3: "Sprache", t6_r3: "Sprechen",
    t6_sent: "Man lernt neue ___ kennen.", t6_qa2: "Kulturen", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Durch", t6_f2: "einen", t6_f3: "Auslandsaufenthalt", t6_f4: "erweitert", t6_f5: "man", t6_f6: "seinen", t6_f7: "Horizont", t6_f8: "und", t6_f9: "wird",
    t6_tk1: "Millionen", t6_tk2: "junge", t6_tk3: "Menschen", t6_tk4: "haben", t6_tk5: "bereits", t6_tk6: "an", t6_tk7: "diesem", t6_tk8: "erfolgreichen", t6_tk9: "Programm", t6_tk10: "teilgenommen.",
    t6_bl1: "Inland", t6_bl2: "Ausland", t6_i1: "Zuhause", t6_i2: "Paris", t6_i3: "Berlin", t6_i4: "Rom",
    t7_title: "Mitbestimmung", t7_text: "Deine Zukunft.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Ab wann darf man die EU wählen?", t7_qa: "16 (in DE)", t7_qb: "18", t7_qc: "21", t7_qd: "5",
    t7_w1: "Bürgerinitiativen", t7_w2: "erlauben", t7_w3: "es", t7_w4: "direkt", t7_w5: "Themen", t7_w6: "auf", t7_w7: "die", t7_w8: "Tagesordnung",
    t7_l1: "Wahl", t7_r1: "Stimme", t7_l2: "Demo", t7_r2: "Meinung", t7_l3: "Petition", t7_r3: "Unterschrift",
    t7_sent: "Deine Meinung ist ___.", t7_qa2: "wichtig", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Informiere", t7_f2: "dich", t7_f3: "über", t7_f4: "die", t7_f5: "Zukunft", t7_f6: "Europas", t7_f7: "und", t7_f8: "gestalte", t7_f9: "sie",
    t7_tk1: "Europa", t7_tk2: "ist", t7_tk3: "kein", t7_tk4: "fertiges", t7_tk5: "Projekt", t7_tk6: "sondern", t7_tk7: "ein", t7_tk8: "Weg", t7_tk9: "den", t7_tk10: "wir",
    t7_bl1: "Ja", t7_bl2: "Nein", t7_i1: "Wählen", t7_i2: "Ignorieren", t7_i3: "Mitmachen", t7_i4: "Schweigen",
    t8_title: "Check", t8_text: "Europa-Experte?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wie viele Sterne hat die Flagge?", t8_qa: "12", t8_qb: "27", t8_qc: "50", t8_qd: "10",
    t8_w1: "Wir", t8_w2: "sind", t8_w3: "alle", t8_w4: "Bürger", t8_w5: "Europas", t8_w6: "und", t8_w7: "tragen", t8_w8: "Verantwortung",
    t8_l1: "Stern", t8_r1: "Einheit", t8_l2: "Blau", t8_r2: "Farbe", t8_l3: "Kreis", t8_r3: "Form",
    t8_sent: "Die Sterne stehen für ___.", t8_qa2: "Einheit", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Vielfalt", t8_f2: "in", t8_f3: "der", t8_f4: "Einheit", t8_f5: "ist", t8_f6: "das", t8_f7: "stolze", t8_f8: "Motto", t8_f9: "unserer",
    t8_tk1: "Geografie", t8_tk2: "und", t8_tk3: "Politik", t8_tk4: "helfen", t8_tk5: "uns", t8_tk6: "unser", t8_tk7: "Zuhause", t8_tk8: "besser", t8_tk9: "zu", t8_tk10: "verstehen.",
    t8_bl1: "Staat", t8_bl2: "Union", t8_i1: "Polen", t8_i2: "EU", t8_i3: "Italien", t8_i4: "NATO",
  },
};

export const EUROPA_ZUKUNFT_K8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die EU-Werte", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Binnenmarkt", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Der Euro", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "EU-Organe", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Herausforderungen", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Erasmus", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Mitbestimmung", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const FINALE_K8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "K8 Master-Diplom",
    t1_title: "Weltkrieg", t1_text: "History.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wann 1. WK?", t1_qa: "1914-1918", t1_qb: "1939", t1_qc: "1800", t1_qd: "2000",
    t1_w1: "Der", t1_w2: "Krieg", t1_w3: "veränderte", t1_w4: "die", t1_w5: "ganze", t1_w6: "Welt", t1_w7: "und", t1_w8: "zerstörte",
    t1_l1: "Front", t1_r1: "Graben", t1_l2: "Heimat", t1_r2: "Hunger", t1_l3: "Frieden", t1_r3: "Versailles",
    t1_sent: "Er war eine ___.", t1_qa2: "Urkatastrophe", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "haben", t1_f3: "die", t1_f4: "Ursachen", t1_f5: "und", t1_f6: "Folgen", t1_f7: "genau", t1_f8: "analysiert.", t1_f9: "",
    t1_tk1: "Nie", t1_tk2: "wieder", t1_tk3: "darf", t1_tk4: "so", t1_tk5: "etwas", t1_tk6: "Schreckliches", t1_tk7: "nochmal", t1_tk8: "passieren.", t1_tk9: "", t1_tk10: "",
    t1_bl1: "Krieg", t1_bl2: "Frieden", t1_i1: "Panzer", t1_i2: "Vertrag", t1_i3: "Giftgas", t1_i4: "Bund",
    t2_title: "Weimar", t2_text: "Demokratie.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Erste Republik?", t2_qa: "Weimarer Republik", t2_qb: "Kaiserreich", t2_qc: "Dritter Staat", t2_qd: "BRD",
    t2_w1: "Die", t2_w2: "Republik", t2_w3: "kämpfte", t2_w4: "von", t2_w5: "Anfang", t2_w6: "an", t2_w7: "mit", t2_w8: "vielen",
    t2_l1: "1923", t2_r1: "Geld", t2_l2: "1929", t2_r2: "Krach", t2_l3: "1933", t2_r3: "Hitler",
    t2_sent: "Frauen durften endlich ___.", t2_qa2: "wählen", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Demokratie", t2_f2: "braucht", t2_f3: "überzeugte", t2_f4: "Menschen", t2_f5: "die", t2_f6: "sie", t2_f7: "mutig", t2_f8: "verteidigen.", t2_f9: "",
    t2_tk1: "Kultur", t2_tk2: "und", t2_tk3: "Wissenschaft", t2_tk4: "erlebten", t2_tk5: "eine", t2_tk6: "kurze", t2_tk7: "goldene", t2_tk8: "Blütezeit.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Frei", t2_bl2: "Zwang", t2_i1: "Ebert", t2_i2: "Hitler", t2_i3: "Wahl", t2_i4: "Verbot",
    t3_title: "Ökologie", t3_text: "Natur.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was sind Pilze?", t3_qa: "Destruenten", t3_qb: "Erzeuger", t3_qc: "Steine", t3_qd: "Autos",
    t3_w1: "Ein", t3_w2: "Ökosystem", t3_w3: "ist", t3_w4: "ein", t3_w5: "sehr", t3_w6: "empfindliches", t3_w7: "Gleichgewicht", t3_w8: "aller",
    t3_l1: "Wald", t3_r1: "Baum", t3_l2: "See", t3_r2: "Wasser", t3_l3: "Nische", t3_r3: "Beruf",
    t3_sent: "Energie wird im Kreis ___.", t3_qa2: "genutzt", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Nachhaltigkeit", t3_f2: "schützt", t3_f3: "unsere", t3_f4: "wichtigen", t3_f5: "Lebensräume", t3_f6: "für", t3_f7: "die", t3_f8: "Zukunft.", t3_f9: "",
    t3_tk1: "Symbiosen", t3_tk2: "zeigen", t3_tk3: "wie", t3_tk4: "wichtig", t3_tk5: "Zusammenarbeit", t3_tk6: "in", t3_tk7: "der", t3_tk8: "Natur", t3_tk9: "ist.", t3_tk10: "",
    t3_bl1: "Produzent", t3_bl2: "Konsument", t3_i1: "Gras", t3_i2: "Hase", t3_i3: "Moos", t3_i4: "Wolf",
    t4_title: "Elektrik", t4_text: "Physik.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wer erfand Generator?", t4_qa: "Faraday", t4_qb: "Edison", t4_qc: "Benz", t4_qd: "Ford",
    t4_w1: "Motoren", t4_w2: "und", t4_w3: "Generatoren", t4_w4: "sind", t4_w5: "die", t4_w6: "Grundlage", t4_w7: "unserer", t4_w8: "modernen",
    t4_l1: "Magnet", t4_r1: "Kraft", t4_l2: "Spule", t4_r2: "Draht", t4_l3: "Trafo", t4_r3: "Volt",
    t4_sent: "Induktion macht ___.", t4_qa2: "Strom", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Elektrische", t4_f2: "Energie", t4_f3: "ist", t4_f4: "vielseitig", t4_f5: "einsetzbar", t4_f6: "und", t4_f7: "gut", t4_f8: "zu", t4_f9: "transportieren.",
    t4_tk1: "Induktion", t4_tk2: "passiert", t4_tk3: "wenn", t4_tk4: "sich", t4_tk5: "ein", t4_tk6: "Magnetfeld", t4_tk7: "schnell", t4_tk8: "ändert.", t4_tk9: "", t4_tk10: "",
    t4_bl1: "Gleich", t4_bl2: "Wechsel", t4_i1: "Batterie", t4_i2: "Trafo", t4_i3: "Akku", t4_i4: "Netz",
    t5_title: "Europa", t5_text: "Union.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wo ist das Parlament?", t5_qa: "Straßburg", t5_qb: "Rom", t5_qc: "Berlin", t5_qd: "Madrid",
    t5_w1: "Die", t5_w2: "EU", t5_w3: "ist", t5_w4: "eine", t5_w5: "Gemeinschaft", t5_w6: "von", t5_w7: "Werten", t5_w8: "und",
    t5_l1: "Waren", t5_r1: "Handel", t5_l2: "Geld", t5_r2: "Bank", t5_l3: "Leute", t5_r3: "Schengen",
    t5_sent: "Der Euro ist unser ___.", t5_qa2: "Geld", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Gemeinsam", t5_f2: "sind", t5_f3: "wir", t5_f4: "in", t5_f5: "Europa", t5_f6: "stark", t5_f7: "für", t5_f8: "die", t5_f9: "Zukunft.",
    t5_tk1: "Herausforderungen", t5_tk2: "wie", t5_tk3: "der", t5_tk4: "Klimawandel", t5_tk5: "brauchen", t5_tk6: "echten", t5_tk7: "europäischen", t5_tk8: "Zusammenhalt.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Grenze", t5_bl2: "Frei", t5_i1: "Zoll", t5_i2: "Euro", t5_i3: "Pass", t5_i4: "Reisen",
    t6_title: "Arbeit", t6_text: "Zukunft.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was ist wichtig?", t6_qa: "Berufswahl", t6_qb: "Schlafen", t6_qc: "Nichts tun", t6_qd: "Nur Geld",
    t6_w1: "Die", t6_w2: "Arbeitswelt", t6_w3: "verändert", t6_w4: "sich", t6_w5: "durch", t6_w6: "die", t6_w7: "Digitalisierung", t6_w8: "rasant.",
    t6_l1: "Job", t6_r1: "Geld", t6_l2: "Lehre", t6_r2: "Wissen", t6_l3: "Chef", t6_r3: "Boss",
    t6_sent: "Lernen hört niemals ___.", t6_qa2: "auf", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Finde", t6_f2: "deine", t6_f3: "Stärken", t6_f4: "und", t6_f5: "gehe", t6_f6: "deinen", t6_f7: "eigenen", t6_f8: "Weg", t6_f9: "zum",
    t6_tk1: "Praktika", t6_tk2: "helfen", t6_tk3: "dir", t6_tk4: "einen", t6_tk5: "ersten", t6_tk6: "Einblick", t6_tk7: "in", t6_tk8: "verschiedene", t6_tk9: "Berufe", t6_tk10: "zu",
    t6_bl1: "Schule", t6_bl2: "Beruf", t6_i1: "Test", t6_i2: "Lohn", t6_i3: "Haus", t6_i4: "Werk",
    t7_title: "Chemie", t7_text: "Organik.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wichtigstes Element?", t7_qa: "Kohlenstoff", t7_qb: "Gold", t7_qc: "Eisen", t7_qd: "Salz",
    t7_w1: "Kohlenwasserstoffe", t7_w2: "sind", t7_w3: "die", t7_w4: "Basis", t7_w5: "für", t7_w6: "viele", t7_w7: "Stoffe", t7_w8: "wie",
    t7_l1: "C", t7_r1: "Kohle", t7_l2: "H", t7_r2: "Wasser", t7_l3: "O", t7_r3: "Sauer",
    t7_sent: "Organik ist Chemie des ___.", t7_qa2: "Lebens", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Wir", t7_f2: "haben", t7_f3: "den", t7_f4: "Aufbau", t7_f5: "komplexer", t7_f6: "Moleküle", t7_f7: "im", t7_f8: "Labor", t7_f9: "untersucht.",
    t7_tk1: "Reaktionen", t7_tk2: "wandeln", t7_tk3: "einfache", t7_tk4: "Stoffe", t7_tk5: "in", t7_tk6: "völlig", t7_tk7: "neue", t7_tk8: "Produkte", t7_tk9: "um.", t7_tk10: "",
    t7_bl1: "Natur", t7_bl2: "Künstlich", t7_i1: "Holz", t7_i2: "Plastik", t7_i3: "Öl", t7_i4: "Nylon",
    t8_title: "Diplom", t8_text: "K8 Fertig!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Bist du ein Profi?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Fast", t8_qd: "Vielleicht",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "du", t8_w4: "hast", t8_w5: "das", t8_w6: "K8", t8_w7: "Master-Diplom", t8_w8: "erreicht!",
    t8_l1: "Wissen", t8_r1: "Kopf", t8_l2: "Können", t8_r2: "Hand", t8_l3: "Mut", t8_r3: "Herz",
    t8_sent: "Ich habe es ___.", t8_qa2: "geschafft", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Du", t8_f2: "bist", t8_f3: "nun", t8_f4: "bestens", t8_f5: "vorbereitet", t8_f6: "auf", t8_f7: "alles", t8_f8: "was", t8_f9: "noch",
    t8_tk1: "Behalte", t8_tk2: "deinen", t8_tk3: "Wissensdurst", t8_tk4: "und", t8_tk5: "bleibe", t8_tk6: "immer", t8_tk7: "neugierig", t8_tk8: "auf", t8_tk9: "die", t8_tk10: "Welt.",
    t8_bl1: "Start", t8_bl2: "Ziel", t8_i1: "Frage", t8_i2: "Diplom", t8_i3: "Test", t8_i4: "Erfolg",
  },
};

export const FINALE_K8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Weltkrieg", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Weimar", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Ökologie", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Elektrik", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Europa", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Arbeit", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Chemie", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Diplom", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

