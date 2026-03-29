// lib/explorerPools/sachkundeK7.ts
import type { PoolTopicDef } from "./types";

export const ATOMBAU_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Atome & Materie",
    t1_title: "Das Atommodell", t1_text: "Die kleinsten Teilchen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer erfand das Kern-Hülle-Modell?", t1_qa: "Rutherford", t1_qb: "Einstein", t1_qc: "Newton", t1_qd: "Curie",
    t1_w1: "Im", t1_w2: "Atomkern", t1_w3: "befinden", t1_w4: "sich", t1_w5: "die", t1_w6: "positiven", t1_w7: "Protonen", t1_w8: "und",
    t1_l1: "Proton", t1_r1: "Positiv", t1_l2: "Neutron", t1_r2: "Neutral", t1_l3: "Elektron", t1_r3: "Negativ",
    t1_sent: "Atome bestehen aus Kern und ___.", t1_qa2: "Hülle", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "Elektronen", t1_f3: "bewegen", t1_f4: "ich", t1_f5: "mit", t1_f6: "hoher", t1_f7: "Geschwindigkeit", t1_f8: "um", t1_f9: "den",
    t1_tk1: "Fast", t1_tk2: "die", t1_tk3: "gesamte", t1_tk4: "Masse", t1_tk5: "eines", t1_tk6: "Atoms", t1_tk7: "ist", t1_tk8: "im", t1_tk9: "winzigen", t1_tk10: "Kern.",
    t1_bl1: "Kern", t1_bl2: "Hülle", t1_i1: "Proton", t1_i2: "Elektron", t1_i3: "Neutron", t1_i4: "Schale",
    t2_title: "Elemente", t2_text: "Das Periodensystem.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was ist H?", t2_qa: "Wasserstoff", t2_qb: "Helium", t2_qc: "Gold", t2_qd: "Eisen",
    t2_w1: "Jedes", t2_w2: "Element", t2_w3: "hat", t2_w4: "eine", t2_w5: "eindeutige", t2_w6: "Ordnungszahl", t2_w7: "im", t2_w8: "großen",
    t2_l1: "H", t2_r1: "Wasserstoff", t2_l2: "O", t2_r2: "Sauerstoff", t2_l3: "Au", t2_r3: "Gold",
    t2_sent: "Elemente sind im ___ geordnet.", t2_qa2: "Periodensystem", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Spalten", t2_f3: "im", t2_f4: "Periodensystem", t2_f5: "nennt", t2_f6: "man", t2_f7: "auch", t2_f8: "Hauptgruppen.", t2_f9: "",
    t2_tk1: "Edelgase", t2_tk2: "sind", t2_tk3: "besonders", t2_tk4: "reaktionsträge", t2_tk5: "und", t2_tk6: "gehen", t2_tk7: "kaum", t2_tk8: "Verbindungen", t2_tk9: "ein.", t2_tk10: "",
    t2_bl1: "Metall", t2_bl2: "Nichtmetall", t2_i1: "Eisen", t2_i2: "Sauerstoff", t2_i3: "Gold", t2_i4: "Stickstoff",
    t3_title: "Moleküle", t3_text: "Verbindungen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was ist H2O?", t3_qa: "Wasser", t3_qb: "Salz", t3_qc: "Luft", t3_qd: "Zucker",
    t3_w1: "Ein", t3_w2: "Wassermolekül", t3_w3: "besteht", t3_w4: "aus", t3_w5: "zwei", t3_w6: "Wasserstoffatomen", t3_w7: "und", t3_w8: "einem",
    t3_l1: "H2O", t3_r1: "Wasser", t3_l2: "CO2", t3_r2: "Kohlendioxid", t3_l3: "NaCl", t3_r3: "Kochsalz",
    t3_sent: "Atome verbinden sich zu ___.", t3_qa2: "Molekülen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Chemische", t3_f2: "Bindungen", t3_f3: "halten", t3_f4: "die", t3_f5: "Atome", t3_f6: "fest", t3_f7: "zusammen.", t3_f8: "", t3_f9: "",
    t3_tk1: "Bei", t3_tk2: "einer", t3_tk3: "chemischen", t3_tk4: "Reaktion", t3_tk5: "werden", t3_tk6: "Atome", t3_tk7: "neu", t3_tk8: "angeordnet.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Element", t3_bl2: "Verbindung", t3_i1: "Sauerstoff", t3_i2: "Wasser", t3_i3: "Wasserstoff", t3_i4: "Salz",
    t4_title: "Zustandsraum", t4_text: "Teilchenmodell.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was passiert beim Erhitzen?", t4_qa: "Teilchen bewegen sich schneller", t4_qb: "Sie bleiben stehen", t4_qc: "Sie verschwinden", t4_qd: "Sie werden größer",
    t4_w1: "In", t4_w2: "Festkörpern", t4_w3: "schwingen", t4_w4: "die", t4_w5: "Teilchen", t4_w6: "nur", t4_w7: "um", t4_w8: "ihre",
    t4_l1: "Fest", t4_r1: "Gitter", t4_l2: "Flüssig", t4_r2: "Nah", t4_l3: "Gas", t4_r3: "Frei",
    t4_sent: "Wärme ist ungeordnete ___.", t4_qa2: "Bewegung", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Zwischen", t4_f2: "den", t4_f3: "kleinen", t4_f4: "Teilchen", t4_f5: "ist", t4_f6: "absolut", t4_f7: "gar", t4_f8: "nichts", t4_f9: "also",
    t4_tk1: "Diffusion", t4_tk2: "ist", t4_tk3: "die", t4_tk4: "selbstständige", t4_tk5: "Vermischung", t4_tk6: "von", t4_tk7: "Stoffen", t4_tk8: "durch", t4_tk9: "Teilchenbewegung.", t4_tk10: "",
    t4_bl1: "Heiß", t4_bl2: "Kalt", t4_i1: "Dampf", t4_i2: "Eis", t4_i3: "Sieden", t4_i4: "Gefrieren",
    t5_title: "Metalle", t5_text: "Leiter der Chemie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist typisch für Metalle?", t5_qa: "Glanz und Leitfähigkeit", t5_qb: "Sie sind immer flüssig", t5_qc: "Sie brennen sofort", t5_qd: "Sie sind durchsichtig",
    t5_w1: "Die", t5_w2: "meisten", t5_w3: "Metalle", t5_w4: "haben", t5_w5: "einen", t5_w6: "sehr", t5_w7: "hohen", t5_w8: "Schmelzpunkt.",
    t5_l1: "Eisen", t5_r1: "Magnetisch", t5_l2: "Kupfer", t5_r2: "Kabel", t5_l3: "Quecksilber", t5_r3: "Flüssig",
    t5_sent: "Kupfer leitet den ___ sehr gut.", t5_qa2: "Strom", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Legierungen", t5_f2: "sind", t5_f3: "Mischungen", t5_f4: "aus", t5_f5: "verschiedenen", t5_f6: "Metallen", t5_f7: "wie", t5_f8: "zum", t5_f9: "Beispiel",
    t5_tk1: "Edelmetalle", t5_tk2: "wie", t5_tk3: "Gold", t5_tk4: "und", t5_tk5: "Platin", t5_tk6: "reagieren", t5_tk7: "nicht", t5_tk8: "mit", t5_tk9: "Sauerstoff.", t5_tk10: "",
    t5_bl1: "Edel", t5_bl2: "Unedel", t5_i1: "Gold", t5_i2: "Eisen", t5_i3: "Silber", t5_i4: "Zink",
    t6_title: "Säuren & Laugen", t6_text: "pH-Werte.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was misst der pH-Wert?", t6_qa: "Säuregehalt", t6_qb: "Gewicht", t6_qc: "Länge", t6_qd: "Zeit",
    t6_w1: "Ein", t6_w2: "Indikator", t6_w3: "ändert", t6_w4: "seine", t6_w5: "Farbe", t6_w6: "je", t6_w7: "nach", t6_w8: "dem",
    t6_l1: "Säure", t6_r1: "Rot", t6_l2: "Neutral", t6_r2: "Grün", t6_l3: "Lauge", t6_r3: "Blau",
    t6_sent: "Zitronensaft ist eine ___.", t6_qa2: "Säure", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Vorsicht", t6_f2: "beim", t6_f3: "Umgang", t6_f4: "mit", t6_f5: "starken", t6_f6: "Säuren", t6_f7: "da", t6_f8: "sie", t6_f9: "ätzend",
    t6_tk1: "Die", t6_tk2: "Neutralisation", t6_tk3: "ist", t6_tk4: "eine", t6_tk5: "Reaktion", t6_tk6: "zwischen", t6_tk7: "Säure", t6_tk8: "und", t6_tk9: "Lauge.", t6_tk10: "",
    t6_bl1: "Sauer", t6_bl2: "Basisch", t6_i1: "Essig", t6_i2: "Seife", t6_i3: "Zitrone", t6_i4: "Natron",
    t7_title: "Luftgemisch", t7_text: "Was wir atmen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Woraus besteht Luft hauptsächlich?", t7_qa: "Stickstoff (78%)", t7_qb: "Sauerstoff", t7_qc: "CO2", t7_qd: "Helium",
    t7_w1: "Sauerstoff", t7_w2: "macht", t7_w3: "nur", t7_w4: "etwa", t7_w5: "ein", t7_w6: "Fünftel", t7_w7: "unserer", t7_w8: "Atemluft",
    t7_l1: "N2", t7_r1: "Stickstoff", t7_l2: "O2", t7_r2: "Sauerstoff", t7_l3: "Ar", t7_r3: "Argon",
    t7_sent: "Sauerstoff ist nötig für die ___.", t7_qa2: "Verbrennung", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Pflanzen", t7_f2: "wandeln", t7_f3: "Kohlendioxid", t7_f4: "wieder", t7_f5: "in", t7_f6: "lebenswichtigen", t7_f7: "Sauerstoff", t7_f8: "um.", t7_f9: "",
    t7_tk1: "Luft", t7_tk2: "ist", t7_tk3: "ein", t7_tk4: "Gasgemisch", t7_tk5: "das", t7_tk6: "unsere", t7_tk7: "ganze", t7_tk8: "Erde", t7_tk9: "wie", t7_tk10: "eine",
    t7_bl1: "Gas", t7_bl2: "Edelgas", t7_i1: "Stickstoff", t7_i2: "Argon", t7_i3: "Sauerstoff", t7_i4: "Neon",
    t8_title: "Chemie-Check", t8_text: "Laborprofi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist eine Reaktion?", t8_qa: "Stoffumwandlung", t8_qb: "Ein Buch", t8_qc: "Ein Bild", t8_qd: "Schlafen",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "Grundlagen", t8_w5: "der", t8_w6: "modernen", t8_w7: "Chemie", t8_w8: "erfolgreich",
    t8_l1: "Labor", t8_r1: "Kittel", t8_l2: "Stoff", t8_r2: "Eigenschaft", t8_l3: "Kern", t8_r3: "Atom",
    t8_sent: "Chemie ist die Lehre der ___.", t8_qa2: "Stoffe", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Sicherheitsregeln", t8_f2: "sind", t8_f3: "bei", t8_f4: "jedem", t8_f5: "Experiment", t8_f6: "unbedingt", t8_f7: "zu", t8_f8: "beachten.", t8_f9: "",
    t8_tk1: "Die", t8_tk2: "Wissenschaft", t8_tk3: "hilft", t8_tk4: "uns", t8_tk5: "die", t8_tk6: "Materie", t8_tk7: "um", t8_tk8: "uns", t8_tk9: "herum", t8_tk10: "zu",
    t8_bl1: "Physik", t8_bl2: "Chemie", t8_i1: "Magnet", t8_i2: "Molekül", t8_i3: "Linse", t8_i4: "Säure",
  },
};

export const ATOMBAU_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Das Atommodell", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Elemente", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Moleküle", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zustandsraum", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Metalle", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Säuren & Laugen", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Luftgemisch", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Chemie-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const TEKTONIK_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Vulkane & Erdbeben",
    t1_title: "Plattentektonik", t1_text: "Die Erde bewegt sich.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie heißen die schwimmenden Landmassen?", t1_qa: "Lithosphärenplatten", t1_qb: "Schiffe", t1_qc: "Inseln", t1_qd: "Berge",
    t1_w1: "Die", t1_w2: "Erdkruste", t1_w3: "besteht", t1_w4: "aus", t1_w5: "vielen", t1_w6: "großen", t1_w7: "und", t1_w8: "kleinen",
    t1_l1: "Konvergent", t1_r1: "Zusammen", t1_l2: "Divergent", t1_r2: "Auseinander", t1_l3: "Transform", t1_r3: "Vorbei",
    t1_sent: "Platten bewegen sich auf dem ___.", t1_qa2: "Mantel", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Durch", t1_f2: "die", t1_f3: "Hitze", t1_f4: "im", t1_f5: "Erdinneren", t1_f6: "entstehen", t1_f7: "gewaltige", t1_f8: "Strömungen", t1_f9: "im",
    t1_tk1: "Wegener", t1_tk2: "war", t1_tk3: "der", t1_tk4: "erste", t1_tk5: "Forscher", t1_tk6: "der", t1_tk7: "die", t1_tk8: "Kontinentaldrift", t1_tk9: "beschrieb.", t1_tk10: "",
    t1_bl1: "Ozeanisch", t1_bl2: "Kontinental", t1_i1: "Dünner", t1_i2: "Dicker", t1_i3: "Schwerer", t1_i4: "Leichter",
    t2_title: "Vulkane", t2_text: "Feuerberge.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie heißt flüssiges Gestein unter der Erde?", t2_qa: "Magma", t2_qb: "Lava", t2_qc: "Wasser", t2_qd: "Öl",
    t2_w1: "Ein", t2_w2: "Vulkan", t2_w3: "bricht", t2_w4: "aus", t2_w5: "wenn", t2_w6: "der", t2_w7: "Druck", t2_w8: "im",
    t2_l1: "Krater", t2_r1: "Öffnung", t2_l2: "Schlot", t2_r2: "Gang", t2_l3: "Kammer", t2_r3: "Speicher",
    t2_sent: "Wenn Magma austritt, heißt es ___.", t2_qa2: "Lava", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Aschewolken", t2_f2: "können", t2_f3: "den", t2_f4: "Flugverkehr", t2_f5: "über", t2_f6: "ganzen", t2_f7: "Kontinenten", t2_f8: "lahmlegen.", t2_f9: "",
    t2_tk1: "Der", t2_tk2: "Pazifische", t2_tk3: "Feuerring", t2_tk4: "ist", t2_tk5: "eine", t2_tk6: "Zone", t2_tk7: "mit", t2_tk8: "besonders", t2_tk9: "vielen", t2_tk10: "aktiven",
    t2_bl1: "Aktiv", t2_bl2: "Erloschen", t2_i1: "Ätna", t2_i2: "Eifel", t2_i3: "Vesuv", t2_i4: "Rhön",
    t3_title: "Erdbeben", t3_text: "Wenn die Erde bebt.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Womit misst man Erdbeben?", t3_qa: "Seismograph", t3_qb: "Thermometer", t3_qc: "Lineal", t3_qd: "Uhr",
    t3_w1: "Erdbeben", t3_w2: "entstehen", t3_w3: "oft", t3_w4: "an", t3_w5: "den", t3_w6: "Grenzen", t3_w7: "von", t3_w8: "tektonischen",
    t3_l1: "Epizentrum", t3_r1: "Oben", t3_l2: "Hypozentrum", t3_r2: "Unten", t3_l3: "Richter", t3_r3: "Skala",
    t3_sent: "Die Stärke wird auf der ___ angegeben.", t3_qa2: "Richterskala", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Tsunamis", t3_f2: "sind", t3_f3: "riesige", t3_f4: "Flutwellen", t3_f5: "die", t3_f6: "durch", t3_f7: "Seebeben", t3_f8: "ausgelöst", t3_f9: "werden.",
    t3_tk1: "Nachbeben", t3_tk2: "können", t3_tk3: "noch", t3_tk4: "Tage", t3_tk5: "nach", t3_tk6: "dem", t3_tk7: "Hauptbeben", t3_tk8: "große", t3_tk9: "Schäden", t3_tk10: "anrichten.",
    t3_bl1: "Ursache", t3_bl2: "Folge", t3_i1: "Platte", t3_i2: "Tsunami", t3_i3: "Reibung", t3_i4: "Zerstörung",
    t4_title: "Gebirgsbildung", t4_text: "Berge falten.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie entstanden die Alpen?", t4_qa: "Plattenkollision", t4_qb: "Vulkanismus (nur)", t4_qc: "Wind", t4_qd: "Regen",
    t4_w1: "Wenn", t4_w2: "zwei", t4_w3: "Kontinentalplatten", t4_w4: "zusammenstoßen", t4_w5: "faltet", t4_w6: "sich", t4_w7: "das", t4_w8: "Gestein",
    t4_l1: "Alpen", t4_r1: "Europa", t4_l2: "Himalaya", t4_r2: "Asien", t4_l3: "Anden", t4_r3: "Amerika",
    t4_sent: "Gesteinsschichten werden ___.", t4_qa2: "gefaltet", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Fossilien", t4_f2: "von", t4_f3: "Meerestieren", t4_f4: "findet", t4_f5: "man", t4_f6: "oft", t4_f7: "hoch", t4_f8: "oben", t4_f9: "auf",
    t4_tk1: "Erosion", t4_tk2: "durch", t4_tk3: "Eis", t4_tk4: "und", t4_tk5: "Wasser", t4_tk6: "trägt", t4_tk7: "die", t4_tk8: "Berge", t4_tk9: "über", t4_tk10: "Millionen",
    t4_bl1: "Faltung", t4_bl2: "Vulkan", t4_i1: "Alpen", t4_i2: "Ätna", t4_i3: "Himalaya", t4_i4: "Fuji",
    t5_title: "Schichtenbau", t5_text: "Inneres der Erde.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist in der Mitte?", t5_qa: "Erdkern", t5_qb: "Erdmantel", t5_qc: "Erdkruste", t5_qd: "Luft",
    t5_w1: "Der", t5_w2: "innere", t5_w3: "Kern", t5_w4: "der", t5_w5: "Erde", t5_w6: "ist", t5_w7: "trotz", t5_w8: "der",
    t5_l1: "Kruste", t5_r1: "Außen", t5_l2: "Mantel", t5_r2: "Mitte", t5_l3: "Kern", t5_r3: "Innen",
    t5_sent: "Die Kruste ist die dünne ___.", t5_qa2: "Haut", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Die", t5_f2: "Temperatur", t5_f3: "im", t5_f4: "Erdkern", t5_f5: "beträgt", t5_f6: "über", t5_f7: "fünftausend", t5_f8: "Grad", t5_f9: "Celsius.",
    t5_tk1: "Sial", t5_tk2: "und", t5_tk3: "Sima", t5_tk4: "sind", t5_tk5: "alte", t5_tk6: "Bezeichnungen", t5_tk7: "für", t5_tk8: "die", t5_tk9: "verschiedenen", t5_tk10: "Krustenschichten.",
    t5_bl1: "Fest", t5_bl2: "Flüssig", t5_i1: "Kruste", t5_i2: "Magma", t5_i3: "Kern", t5_i4: "Außenmantel",
    t6_title: "Grabenbruch", t6_text: "Afrika reißt.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was passiert im Ostafrikanischen Graben?", t6_qa: "Kontinent bricht auseinander", t6_qb: "Er wird breiter", t6_qc: "Nichts", t6_qd: "Er sinkt ins Meer",
    t6_w1: "Ein", t6_w2: "Grabenbruch", t6_w3: "entsteht", t6_w4: "wenn", t6_w5: "Platten", t6_w6: "sich", t6_w7: "voneinander", t6_w8: "entfernen.",
    t6_l1: "Riss", t6_r1: "Spalte", t6_l2: "Graben", t6_r2: "Senke", t6_l3: "See", t6_r3: "Wasser",
    t6_sent: "Hier entsteht ein neuer ___.", t6_qa2: "Ozean", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Viele", t6_f2: "große", t6_f3: "Seen", t6_f4: "in", t6_f5: "Afrika", t6_f6: "liegen", t6_f7: "genau", t6_f8: "in", t6_f9: "diesem",
    t6_tk1: "Island", t6_tk2: "liegt", t6_tk3: "mitten", t6_tk4: "auf", t6_tk5: "dem", t6_tk6: "Mittelatlantischen", t6_tk7: "Rücken", t6_tk8: "und", t6_tk9: "wird", t6_tk10: "immer",
    t6_bl1: "Weg", t6_bl2: "Hin", t6_i1: "Divergenz", t6_i2: "Konvergenz", t6_i3: "Graben", t6_i4: "Faltung",
    t7_title: "Gesteine", t7_text: "Basalt und Granit.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wie entsteht Basalt?", t7_qa: "Schnelle Abkühlung von Lava", t7_qb: "Druck im Berg", t7_qc: "Wind", t7_qd: "Sonne",
    t7_w1: "Es", t7_w2: "gibt", t7_w3: "drei", t7_w4: "Hauptgruppen", t7_w5: "von", t7_w6: "Gesteinen", t7_w7: "auf", t7_w8: "unserer",
    t7_l1: "Magmatit", t7_r1: "Feuer", t7_l2: "Sediment", t7_r2: "Ablagerung", t7_l3: "Metamorphit", t7_r3: "Druck",
    t7_sent: "Granit ist ein ___ Gestein.", t7_qa2: "magmatisches", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Sedimentgesteine", t7_f2: "entstehen", t7_f3: "durch", t7_f4: "das", t7_f5: "Ablagern", t7_f6: "von", t7_f7: "Sand", t7_f8: "und", t7_f9: "Schlamm.",
    t7_tk1: "Marmor", t7_tk2: "ist", t7_tk3: "ein", t7_tk4: "Metamorphit", t7_tk5: "der", t7_tk6: "aus", t7_tk7: "Kalkstein", t7_tk8: "unter", t7_tk9: "großem", t7_tk10: "Druck",
    t7_bl1: "Hart", t7_bl2: "Weich", t7_i1: "Granit", t7_i2: "Kalk", t7_i3: "Basalt", t7_i4: "Sand",
    t8_title: "Geo-Check", t8_text: "Erdbebenprofi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wo ist die San-Andreas-Verwerfung?", t8_qa: "Kalifornien (USA)", t8_qb: "Deutschland", t8_qc: "China", t8_qd: "Australien",
    t8_w1: "Die", t8_w2: "Dynamik", t8_w3: "der", t8_w4: "Erde", t8_w5: "ist", t8_w6: "faszinierend", t8_w7: "und", t8_w8: "manchmal",
    t8_l1: "Beben", t8_r1: "Rütteln", t8_l2: "Vulkan", t8_r2: "Lava", t8_l3: "Platte", t8_r3: "Drift",
    t8_sent: "Tektonik formt unsere ___.", t8_qa2: "Landschaft", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Frühwarnsysteme", t8_f2: "können", t8_f3: "viele", t8_f4: "Menschenleben", t8_f5: "bei", t8_f6: "Naturkatastrophen", t8_f7: "retten.", t8_f8: "", t8_f9: "",
    t8_tk1: "Wir", t8_tk2: "haben", t8_tk3: "gelernt", t8_tk4: "dass", t8_tk5: "unser", t8_tk6: "Planet", t8_tk7: "unter", t8_tk8: "uns", t8_tk9: "niemals", t8_tk10: "stillsteht.",
    t8_bl1: "Schnell", t8_bl2: "Langsam", t8_i1: "Beben", t8_i2: "Drift", t8_i3: "Sturm", t8_i4: "Gebirge",
  },
};

export const TEKTONIK_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Plattentektonik", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Vulkane", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Erdbeben", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Gebirgsbildung", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Schichtenbau", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Grabenbruch", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Gesteine", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Geo-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const MITTELALTER_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das Mittelalter",
    t1_title: "Ständegesellschaft", t1_text: "Gottgewollte Ordnung.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer gehörte zum ersten Stand?", t1_qa: "Klerus (Geistliche)", t1_qb: "Adel", t1_qc: "Bauern", t1_qd: "Ritter",
    t1_w1: "Klerus", t1_w2: "Adel", t1_w3: "und", t1_w4: "Bauern", t1_w5: "waren", t1_w6: "die", t1_w7: "drei", t1_w8: "Hauptstände",
    t1_l1: "1. Stand", t1_r1: "Kirche", t1_l2: "2. Stand", t1_r2: "Ritter", t1_l3: "3. Stand", t1_r3: "Bauern",
    t1_sent: "Bauern machten ___ Prozent aus.", t1_qa2: "neunzig", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Man", t1_f2: "wurde", t1_f3: "in", t1_f4: "einen", t1_f5: "Stand", t1_f6: "hineingeboren", t1_f7: "und", t1_f8: "blieb", t1_f9: "meist",
    t1_tk1: "Die", t1_tk2: "Bauern", t1_tk3: "mussten", t1_tk4: "hohe", t1_tk5: "Abgaben", t1_tk6: "und", t1_tk7: "Dienste", t1_tk8: "für", t1_tk9: "ihre", t1_tk10: "Grundherren",
    t1_bl1: "Macht", t1_bl2: "Arbeit", t1_i1: "König", t1_i2: "Bauer", t1_i3: "Bischof", t1_i4: "Knecht",
    t2_title: "Ritter & Burgen", t2_text: "Leben hinter Mauern.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie nennt man die Ausbildung zum Ritter?", t2_qa: "Page, Knappe, Ritter", t2_qb: "Schule", t2_qc: "Studium", t2_qd: "Lehre",
    t2_w1: "Ritter", t2_w2: "mussten", t2_w3: "tapfer", t2_w4: "treu", t2_w5: "und", t2_w6: "immer", t2_w7: "höflich", t2_w8: "zu",
    t2_l1: "Burg", t2_r1: "Stein", t2_l2: "Rüstung", t2_r2: "Eisen", t2_l3: "Turnier", t2_r3: "Kampf",
    t2_sent: "Burgen dienten dem ___.", t2_qa2: "Schutz", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Eine", t2_f2: "Belagerung", t2_f3: "konnte", t2_f4: "viele", t2_f5: "Monate", t2_f6: "dauern", t2_f7: "bis", t2_f8: "das", t2_f9: "Essen",
    t2_tk1: "Die", t2_tk2: "Ritterzeit", t2_tk3: "endete", t2_tk4: "langsam", t2_tk5: "mit", t2_tk6: "der", t2_tk7: "Erfindung", t2_tk8: "von", t2_tk9: "Schießpulver", t2_tk10: "und",
    t2_bl1: "Wohnen", t2_bl2: "Kämpfen", t2_i1: "Palas", t2_i2: "Schwert", t2_i3: "Bergfried", t2_i4: "Lanze",
    t3_title: "Das Lehenswesen", t3_text: "Land gegen Treue.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wer vergab das Land?", t3_qa: "Lehensherr (König)", t3_qb: "Papst", t3_qc: "Bauer", t3_qd: "Händler",
    t3_w1: "Der", t3_w2: "König", t3_w3: "gab", t3_w4: "dem", t3_w5: "Adel", t3_w6: "Land", t3_w7: "als", t3_w8: "Lehen",
    t3_l1: "König", t3_r1: "Oben", t3_l2: "Herzog", t3_r2: "Mitte", t3_l3: "Ritter", t3_r3: "Unten",
    t3_sent: "Der Empfänger war der ___.", t3_qa2: "Vasall", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Dieses", t3_f2: "System", t3_f3: "bildete", t3_f4: "das", t3_f5: "Rückgrat", t3_f6: "der", t3_f7: "mittelalterlichen", t3_f8: "Herrschaft", t3_f9: "und",
    t3_tk1: "Ein", t3_tk2: "Eid", t3_tk3: "besiegelte", t3_tk4: "die", t3_tk5: "Treue", t3_tk6: "zwischen", t3_tk7: "dem", t3_tk8: "Herrn", t3_tk9: "und", t3_tk10: "seinem",
    t3_bl1: "Geben", t3_bl2: "Nehmen", t3_i1: "Lehen", t3_i2: "Dienst", t3_i3: "Schutz", t3_i4: "Treue",
    t4_title: "Klosterleben", t4_text: "Ora et labora.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was bedeutet 'Ora et labora'?", t4_qa: "Bete und arbeite", t4_qb: "Essen und Trinken", t4_qc: "Schlafen und Träumen", t4_qd: "Kämpfen und Siegen",
    t4_w1: "Klöster", t4_w2: "waren", t4_w3: "wichtige", t4_w4: "Zentren", t4_w5: "für", t4_w6: "Bildung", t4_w7: "Medizin", t4_w8: "und",
    t4_l1: "Abt", t4_r1: "Leiter", t4_l2: "Mönch", t4_r2: "Bruder", t4_l3: "Novize", t4_r3: "Schüler",
    t4_sent: "Mönche schrieben Bücher ___.", t4_qa2: "ab", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Die", t4_f2: "Mönche", t4_f3: "lebten", t4_f4: "nach", t4_f5: "strengen", t4_f6: "Regeln", t4_f7: "in", t4_f8: "Stille", t4_f9: "und",
    t4_tk1: "In", t4_tk2: "der", t4_tk3: "Schreibstube", t4_tk4: "kopierten", t4_tk5: "Mönche", t4_tk6: "wertvolle", t4_tk7: "Handschriften", t4_tk8: "auf", t4_tk9: "teures", t4_tk10: "Pergament.",
    t4_bl1: "Ort", t4_bl2: "Tätigkeit", t4_i1: "Kirche", t4_i2: "Beten", t4_i3: "Garten", t4_i4: "Lesen",
    t5_title: "Stadt im Mittelalter", t5_text: "Stadtluft macht frei.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wer regierte die Stadt?", t5_qa: "Stadtrat und Patrizier", t5_qb: "Der König allein", t5_qc: "Die Bauern", t5_qd: "Niemand",
    t5_w1: "Handwerker", t5_w2: "schlossen", t5_w3: "sich", t5_w4: "in", t5_w5: "Zünften", t5_w6: "zusammen", t5_w7: "um", t5_w8: "ihre",
    t5_l1: "Markt", t5_r1: "Kaufen", t5_l2: "Zunft", t5_r2: "Handwerk", t5_l3: "Mauer", t5_r3: "Schutz",
    t5_sent: "Märkte waren wichtige ___.", t5_qa2: "Handelsplätze", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "In", t5_f2: "den", t5_f3: "engen", t5_f4: "Gassen", t5_f5: "war", t5_f6: "es", t5_f7: "oft", t5_f8: "sehr", t5_f9: "schmutzig",
    t5_tk1: "Wer", t5_tk2: "ein", t5_tk3: "Jahr", t5_tk4: "und", t5_tk5: "einen", t5_tk6: "Tag", t5_tk7: "in", t5_tk8: "der", t5_tk9: "Stadt", t5_tk10: "lebte",
    t5_bl1: "Beruf", t5_bl2: "Ort", t5_i1: "Schmied", t5_i2: "Rathaus", t5_i3: "Bäcker", t5_i4: "Gasse",
    t6_title: "Kreuzzüge", t6_text: "Krieg im Namen Gottes.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was war das Ziel?", t6_qa: "Eroberung Jerusalems", t6_qb: "Entdeckung Amerikas", t6_qc: "Bau von Schiffen", t6_qd: "Handel mit China",
    t6_w1: "Ritter", t6_w2: "aus", t6_w3: "ganz", t6_w4: "Europa", t6_w5: "zogen", t6_w6: "in", t6_w7: "den", t6_w8: "Orient",
    t6_l1: "Kreuz", t6_r1: "Symbol", t6_l2: "Orient", t6_r2: "Osten", t6_l3: "Jerusalem", t6_r3: "Stadt",
    t6_sent: "Es gab insgesamt ___ große Kreuzzüge.", t6_qa2: "sieben", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Durch", t6_f2: "die", t6_f3: "Kreuzzüge", t6_f4: "kamen", t6_f5: "auch", t6_f6: "viele", t6_f7: "neue", t6_f8: "Waren", t6_f9: "und",
    t6_tk1: "Der", t6_tk2: "Papst", t6_tk3: "rief", t6_tk4: "die", t6_tk5: "Christen", t6_tk6: "dazu", t6_tk7: "auf", t6_tk8: "das", t6_tk9: "Heilige", t6_tk10: "Land",
    t6_bl1: "West", t6_bl2: "Ost", t6_i1: "Ritter", t6_i2: "Gewürze", t6_i3: "Burg", t6_i4: "Seide",
    t7_title: "Die Pest", t7_text: "Der schwarze Tod.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wer übertrug die Pest hauptsächlich?", t7_qa: "Rattenflöhe", t7_qb: "Hunde", t7_qc: "Vögel", t7_qd: "Fliegen",
    t7_w1: "Die", t7_w2: "Menschen", t7_w3: "wussten", t7_w4: "damals", t7_w5: "nichts", t7_w6: "über", t7_w7: "Bakterien", t7_w8: "oder",
    t7_l1: "Tod", t7_r1: "Schwarz", t7_l2: "Angst", t7_r2: "Groß", t7_l3: "Flucht", t7_r3: "Land",
    t7_sent: "Ein Drittel der Menschen ___.", t7_qa2: "starb", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Pestärzte", t7_f2: "trugen", t7_f3: "oft", t7_f4: "unheimliche", t7_f5: "Masken", t7_f6: "die", t7_f7: "wie", t7_f8: "Vogelschnäbel", t7_f9: "aussahen.",
    t7_tk1: "Die", t7_tk2: "Pest", t7_tk3: "veränderte", t7_tk4: "die", t7_tk5: "Gesellschaft", t7_tk6: "weil", t7_tk7: "plötzlich", t7_tk8: "viele", t7_tk9: "Arbeiter", t7_tk10: "fehlten.",
    t7_bl1: "Krank", t7_bl2: "Gesund", t7_i1: "Beule", t7_i2: "Sport", t7_i3: "Fieber", t7_i4: "Essen",
    t8_title: "Zeit-Check", t8_text: "Mittelalter-Meister?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wann war das Mittelalter etwa?", t8_qa: "500 bis 1500 n. Chr.", t8_qb: "Vor der Steinzeit", t8_qc: "Gestern", t8_qd: "Im Jahr 2000",
    t8_w1: "Das", t8_w2: "Mittelalter", t8_w3: "war", t8_w4: "keineswegs", t8_w5: "nur", t8_w6: "finster", t8_w7: "sondern", t8_w8: "auch",
    t8_l1: "Früh", t8_r1: "Anfang", t8_l2: "Hoch", t8_r2: "Blüte", t8_l3: "Spät", t8_r3: "Ende",
    t8_sent: "Die Neuzeit begann mit dem ___.", t8_qa2: "Buchdruck", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Erfindungen", t8_f2: "wie", t8_f3: "das", t8_f4: "Rad", t8_f5: "oder", t8_f6: "der", t8_f7: "Kompass", t8_f8: "prägten", t8_f9: "die",
    t8_tk1: "Wir", t8_tk2: "haben", t8_tk3: "die", t8_tk4: "spannende", t8_tk5: "Epoche", t8_tk6: "zwischen", t8_tk7: "Antike", t8_tk8: "und", t8_tk9: "Neuzeit", t8_tk10: "nun",
    t8_bl1: "Früher", t8_bl2: "Heute", t8_i1: "Ritter", t8_i2: "Handy", t8_i3: "Burg", t8_i4: "Auto",
  },
};

export const MITTELALTER_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Ständegesellschaft", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Ritter & Burgen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Das Lehenswesen", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Klosterleben", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Stadt im Mittelalter", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Kreuzzüge", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Die Pest", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Zeit-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7", "t8_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const GENETIK_BASICS_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Grundlagen der Genetik",
    t1_title: "Die DNA", t1_text: "Der Code des Lebens.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Welche Form hat die DNA?", t1_qa: "Doppelhelix", t1_qb: "Kreis", t1_qc: "Viereck", t1_qd: "Linie",
    t1_w1: "Die", t1_w2: "DNA", t1_w3: "befindet", t1_w4: "sich", t1_w5: "gut", t1_w6: "geschützt", t1_w7: "im", t1_w8: "Kern",
    t1_l1: "A-T", t1_r1: "Paar", t1_l2: "G-C", t1_r2: "Paar", t1_l3: "Helix", t1_r3: "Form",
    t1_sent: "Die DNA speichert unsere ___.", t1_qa2: "Erbinfos", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Gene", t1_f2: "sind", t1_f3: "Abschnitte", t1_f4: "auf", t1_f5: "der", t1_f6: "DNA", t1_f7: "die", t1_f8: "bestimmte", t1_f9: "Merkmale",
    t1_tk1: "Watson", t1_tk2: "und", t1_tk3: "Crick", t1_tk4: "entschlüsselten", t1_tk5: "im", t1_tk6: "Jahr", t1_tk7: "neunzehnhundertdreiundfünfzig", t1_tk8: "die", t1_tk9: "Struktur", t1_tk10: "der",
    t1_bl1: "Baustein", t1_bl2: "Form", t1_i1: "Base", t1_i2: "Helix", t1_i3: "Zucker", t1_i4: "Spiral",
    t2_title: "Chromosomen", t2_text: "Verpackte Gene.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie viele Chromosomen hat ein Mensch?", t2_qa: "46 (23 Paare)", t2_qb: "10", t2_qc: "100", t2_qd: "Zwei",
    t2_w1: "Chromosomen", t2_w2: "sind", t2_w3: "die", t2_w4: "Transportform", t2_w5: "der", t2_w6: "Erbinformation", t2_w7: "während", t2_w8: "der",
    t2_l1: "XY", t2_r1: "Mann", t2_l2: "XX", t2_r2: "Frau", t2_l3: "Geno", t2_r3: "Typ",
    t2_sent: "Das 23. Paar bestimmt das ___.", t2_qa2: "Geschlecht", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Ein", t2_f2: "Karyogramm", t2_f3: "zeigt", t2_f4: "alle", t2_f5: "Chromosomen", t2_f6: "einer", t2_f7: "Zelle", t2_f8: "nach", t2_f9: "der",
    t2_tk1: "Down-Syndrom", t2_tk2: "entsteht", t2_tk3: "wenn", t2_tk4: "das", t2_tk5: "Chromosom", t2_tk6: "einundzwanzig", t2_tk7: "dreimal", t2_tk8: "vorhanden", t2_tk9: "ist.", t2_tk10: "",
    t2_bl1: "Zahl", t2_bl2: "Teil", t2_i1: "46", t2_i2: "Arm", t2_i3: "Paar", t2_i4: "Zentrum",
    t3_title: "Mendel-Regeln", t3_text: "Erbsen zählen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wer war der Vater der Genetik?", t3_qa: "Gregor Mendel", t3_qb: "Charles Darwin", t3_qc: "Albert Einstein", t3_qd: "Isaac Newton",
    t3_w1: "Die", t3_w2: "Uniformitätsregel", t3_w3: "besagt", t3_w4: "dass", t3_w5: "alle", t3_w6: "Nachkommen", t3_w7: "der", t3_w8: "ersten",
    t3_l1: "Dominant", t3_r1: "Stark", t3_l2: "Rezessiv", t3_r2: "Schwach", t3_l3: "Uniform", t3_r3: "Gleich",
    t3_sent: "Mendel kreuzte verschiedene ___.", t3_qa2: "Erbsen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Mendel", t3_f2: "entdeckte", t3_f3: "die", t3_f4: "Gesetze", t3_f5: "der", t3_f6: "Vererbung", t3_f7: "durch", t3_f8: "seine", t3_f9: "vielen",
    t3_tk1: "Phänotyp", t3_tk2: "nennt", t3_tk3: "man", t3_tk4: "das", t3_tk5: "äußere", t3_tk6: "Erscheinungsbild", t3_tk7: "eines", t3_tk8: "Lebewesens.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Sichtbar", t3_bl2: "Versteckt", t3_i1: "Haarfarbe", t3_i2: "Gencode", t3_i3: "Größe", t3_i4: "Allele",
    t4_title: "Dominant & Rezessiv", t4_text: "Wer setzt sich durch?", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Welches Merkmal wird sichtbar?", t4_qa: "Das dominante", t4_qb: "Das rezessive", t4_qc: "Immer beide", t4_qd: "Keines",
    t4_w1: "Rezessive", t4_w2: "Merkmale", t4_w3: "treten", t4_w4: "nur", t4_w5: "auf", t4_w6: "wenn", t4_w7: "kein", t4_w8: "dominantes",
    t4_l1: "Großbuchstabe", t4_r1: "Dominant", t4_l2: "Kleinbuchstabe", t4_r2: "Rezessiv", t4_l3: "Mischung", t4_r3: "Intermediär",
    t4_sent: "Braune Augen sind meist ___.", t4_qa2: "dominant", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Wenn", t4_f2: "beide", t4_f3: "Eltern", t4_f4: "blaue", t4_f5: "Augen", t4_f6: "haben", t4_f7: "bekommen", t4_f8: "die", t4_f9: "Kinder",
    t4_tk1: "Albinismus", t4_tk2: "ist", t4_tk3: "ein", t4_tk4: "Beispiel", t4_tk5: "für", t4_tk6: "ein", t4_tk7: "rezessiv", t4_tk8: "vererbtes", t4_tk9: "Merkmal.", t4_tk10: "",
    t4_bl1: "Dominant", t4_bl2: "Rezessiv", t4_i1: "Braun", t4_i2: "Blau", t4_i3: "Dunkel", t4_i4: "Hell",
    t5_title: "Mutationen", t5_text: "Fehler im Code.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist eine Mutation?", t5_qa: "Spontane Änderung des Erbguts", t5_qb: "Eine neue Frisur", t5_qc: "Ein Umzug", t5_qd: "Essen",
    t5_w1: "Mutationen", t5_w2: "können", t5_w3: "durch", t5_w4: "Umweltfaktoren", t5_w5: "oder", t5_w6: "Zufall", t5_w7: "bei", t5_w8: "der",
    t5_l1: "Genmuta", t5_r1: "Klein", t5_l2: "Chromomuta", t5_r2: "Mittel", t5_l3: "Genommuta", t5_r3: "Groß",
    t5_sent: "UV-Strahlung kann ___ auslösen.", t5_qa2: "Mutationen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Manche", t5_f2: "Mutationen", t5_f3: "sind", t5_f4: "schädlich", t5_f5: "andere", t5_f6: "haben", t5_f7: "gar", t5_f8: "keine", t5_f9: "Auswirkung.",
    t5_tk1: "Evolution", t5_tk2: "wäre", t5_tk3: "ohne", t5_tk4: "Mutationen", t5_tk5: "und", t5_tk6: "die", t5_tk7: "dadurch", t5_tk8: "entstehende", t5_tk9: "Vielfalt", t5_tk10: "unmöglich.",
    t5_bl1: "Natur", t5_bl2: "Gefahr", t5_i1: "Vielfalt", t5_i2: "Röntgen", t5_i3: "Chance", t5_i4: "Gift",
    t6_title: "Zellkern & Teilung", t6_text: "Mitose.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie nennt man die normale Zellteilung?", t6_qa: "Mitose", t6_qb: "Meiose", t6_qc: "Metamorphose", t6_qd: "Fotosynthese",
    t6_w1: "Vor", t6_w2: "der", t6_w3: "Teilung", t6_w4: "muss", t6_w5: "die", t6_w6: "DNA", t6_w7: "einmal", t6_w8: "komplett",
    t6_l1: "Prophase", t6_r1: "Start", t6_l2: "Metaphase", t6_r2: "Mitte", t6_l3: "Anaphase", t6_r3: "Trennung",
    t6_sent: "Bei der Mitose entstehen ___ Zellen.", t6_qa2: "identische", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Die", t6_f2: "Mitose", t6_f3: "dient", t6_f4: "dem", t6_f5: "Wachstum", t6_f6: "und", t6_f7: "der", t6_f8: "Erneuerung", t6_f9: "unserer",
    t6_tk1: "Spindelfasern", t6_tk2: "ziehen", t6_tk3: "die", t6_tk4: "Chromatiden", t6_tk5: "zu", t6_tk6: "den", t6_tk7: "beiden", t6_tk8: "Polen", t6_tk9: "der", t6_tk10: "Zelle.",
    t6_bl1: "Einfach", t6_bl2: "Doppelt", t6_i1: "Hälfte", t6_i2: "Kopie", t6_i3: "Chromatid", t6_i4: "Chromosom",
    t7_title: "Fortpflanzung", t7_text: "Meiose.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was entsteht bei der Meiose?", t7_qa: "Geschlechtszellen (Keimzellen)", t7_qb: "Hautzellen", t7_qc: "Blut", t7_qd: "Knochen",
    t7_w1: "Bei", t7_w2: "der", t7_w3: "Befruchtung", t7_w4: "verschmelzen", t7_w5: "Eizelle", t7_w6: "und", t7_w7: "Spermium", t7_w8: "miteinander.",
    t7_l1: "Ei", t7_r1: "Groß", t7_l2: "Sperma", t7_r2: "Klein", t7_l3: "Zygote", t7_r3: "Neu",
    t7_sent: "Keimzellen haben einen ___ Satz.", t7_qa2: "halben", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Die", t7_f2: "Meiose", t7_f3: "halbiert", t7_f4: "den", t7_f5: "Chromosomensatz", t7_f6: "damit", t7_f7: "er", t7_f8: "nicht", t7_f9: "immer",
    t7_tk1: "Durch", t7_tk2: "Crossing-over", t7_tk3: "wird", t7_tk4: "das", t7_tk5: "Erbgut", t7_tk6: "neu", t7_tk7: "kombiniert", t7_tk8: "und", t7_tk9: "durchmischt.", t7_tk10: "",
    t7_bl1: "Mann", t7_bl2: "Frau", t7_i1: "Spermie", t7_i2: "Eizelle", t7_i3: "Hoden", t7_i4: "Uterus",
    t8_title: "Check", t8_text: "Genetik-Genie?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wo liegt das Erbgut?", t8_qa: "Im Zellkern", t8_qb: "Im Magen", t8_qc: "Im Fuß", t8_qd: "In den Haaren",
    t8_w1: "Die", t8_w2: "moderne", t8_w3: "Biologie", t8_w4: "hat", t8_w5: "durch", t8_w6: "die", t8_w7: "Genetik", t8_w8: "riesige",
    t8_l1: "DNA", t8_r1: "Code", t8_l2: "Gen", t8_r2: "Teil", t8_l3: "Kern", t8_r3: "Ort",
    t8_sent: "Genetik erklärt die ___.", t8_qa2: "Vererbung", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "verstanden", t8_f4: "warum", t8_f5: "wir", t8_f6: "unseren", t8_f7: "Eltern", t8_f8: "ähnlich", t8_f9: "sehen.",
    t8_tk1: "Stammbäume", t8_tk2: "helfen", t8_tk3: "dabei", t8_tk4: "die", t8_tk5: "Vererbung", t8_tk6: "von", t8_tk7: "Merkmalen", t8_tk8: "über", t8_tk9: "viele", t8_tk10: "Generationen",
    t8_bl1: "Winzig", t8_bl2: "Sichtbar", t8_i1: "Molekül", t8_i2: "Mensch", t8_i3: "Gen", t8_i4: "Körper",
  },
};

export const GENETIK_BASICS_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Die DNA", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Chromosomen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Mendel-Regeln", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Dominant & Rezessiv", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Mutationen", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Zellkern & Teilung", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Fortpflanzung", color: "#4CAF50" },
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

export const ENERGIE_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Energieformen",
    t1_title: "Energiearten", t1_text: "Kraft in vielen Formen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist Bewegungsenergie?", t1_qa: "Kinetische Energie", t1_qb: "Potenzielle Energie", t1_qc: "Wärme", t1_qd: "Licht",
    t1_w1: "Energie", t1_w2: "kann", t1_w3: "in", t1_w4: "vielen", t1_w5: "verschiedenen", t1_w6: "Formen", t1_w7: "vorkommen", t1_w8: "und",
    t1_l1: "Lage", t1_r1: "Hoch", t1_l2: "Bewegung", t1_r2: "Schnell", t1_l3: "Wärme", t1_r3: "Heiß",
    t1_sent: "Ein gespannter Bogen hat ___.", t1_qa2: "Spannenergie", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "Summe", t1_f3: "aus", t1_f4: "potenzieller", t1_f5: "und", t1_f6: "kinetischer", t1_f7: "Energie", t1_f8: "bleibt", t1_f9: "oft",
    t1_tk1: "Energie", t1_tk2: "geht", t1_tk3: "niemals", t1_tk4: "verloren", t1_tk5: "sie", t1_tk6: "wird", t1_tk7: "immer", t1_tk8: "nur", t1_tk9: "umgewandelt.", t1_tk10: "",
    t1_bl1: "Aktiv", t1_bl2: "Gespeichert", t1_i1: "Flug", t1_i2: "Feder", t1_i3: "Lauf", t1_i4: "Batterie",
    t2_title: "Umwandlung", t2_text: "Vom Wind zum Strom.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was macht ein Generator?", t2_qa: "Bewegung -> Strom", t2_qb: "Licht -> Wärme", t2_qc: "Strom -> Wasser", t2_qd: "Nichts",
    t2_w1: "In", t2_w2: "einem", t2_w3: "Kraftwerk", t2_w4: "wird", t2_w5: "meistens", t2_w6: "Wärme", t2_w7: "in", t2_w8: "elektrische",
    t2_l1: "Solar", t2_r1: "Licht", t2_l2: "Wind", t2_r2: "Drehung", t2_l3: "Motor", t2_r3: "Strom",
    t2_sent: "Ein Motor macht aus Strom ___.", t2_qa2: "Bewegung", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Bei", t2_f2: "jeder", t2_f3: "Umwandlung", t2_f4: "entsteht", t2_f5: "leider", t2_f6: "auch", t2_f7: "immer", t2_f8: "etwas", t2_f9: "unbedeutende",
    t2_tk1: "Der", t2_tk2: "Wirkungsgrad", t2_tk3: "gibt", t2_tk4: "an", t2_tk5: "wie", t2_tk6: "viel", t2_tk7: "Nutzenenergie", t2_tk8: "man", t2_tk9: "tatsächlich", t2_tk10: "erhält.",
    t2_bl1: "Input", t2_bl2: "Output", t2_i1: "Sonne", t2_i2: "Strom", t2_i3: "Wind", t2_i4: "Kraft",
    t3_title: "Fossile Energie", t3_text: "Alt und begrenzt.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was ist ein fossiler Brennstoff?", t3_qa: "Kohle, Öl, Gas", t3_qb: "Sonne", t3_qc: "Wind", t3_qd: "Holz",
    t3_w1: "Fossile", t3_w2: "Energieträger", t3_w3: "brauchen", t3_w4: "Millionen", t3_w5: "Jahre", t3_w6: "um", t3_w7: "zu", t3_w8: "entstehen.",
    t3_l1: "Kohle", t3_r1: "Fest", t3_l2: "Erdöl", t3_r2: "Flüssig", t3_l3: "Gas", t3_r3: "Gas",
    t3_sent: "Kohle entstand aus alten ___.", t3_qa2: "Pflanzen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Das", t3_f2: "Verbrennen", t3_f3: "dieser", t3_f4: "Stoffe", t3_f5: "setzt", t3_f6: "sehr", t3_f7: "viel", t3_f8: "schädliches", t3_f9: "CO2",
    t3_tk1: "Erdöl", t3_tk2: "ist", t3_tk3: "auch", t3_tk4: "ein", t3_tk5: "wichtiger", t3_tk6: "Rohstoff", t3_tk7: "für", t3_tk8: "die", t3_tk9: "Herstellung", t3_tk10: "von",
    t3_bl1: "Brennbar", t3_bl2: "Nicht", t3_i1: "Öl", t3_i2: "Stein", t3_i3: "Gas", t3_i4: "Wasser",
    t4_title: "Kernenergie", t4_text: "Kraft aus dem Atom.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was passiert im Reaktor?", t4_qa: "Kernspaltung", t4_qb: "Kernschmelze (normal)", t4_qc: "Verbrennung", t4_qd: "Verdunstung",
    t4_w1: "Bei", t4_w2: "der", t4_w3: "Spaltung", t4_w4: "von", t4_w5: "Urankernen", t4_w6: "wird", t4_w7: "unglaublich", t4_w8: "viel",
    t4_l1: "Kern", t4_r1: "Spaltung", t4_l2: "Dampf", t4_r2: "Turbine", t4_l3: "Strom", t4_r3: "Generator",
    t4_sent: "Uran ist der ___.", t4_qa2: "Brennstoff", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Radioaktiver", t4_f2: "Abfall", t4_f3: "muss", t4_f4: "für", t4_f5: "tausende", t4_f6: "Jahre", t4_f7: "sicher", t4_f8: "gelagert", t4_f9: "werden.",
    t4_tk1: "In", t4_tk2: "vielen", t4_tk3: "Ländern", t4_tk4: "wird", t4_tk5: "heute", t4_tk6: "über", t4_tk7: "den", t4_tk8: "Ausstieg", t4_tk9: "aus", t4_tk10: "der",
    t4_bl1: "Vorteil", t4_bl2: "Nachteil", t4_i1: "Viel Strom", t4_i2: "Müll", t4_i3: "Kein CO2", t4_i4: "Gefahr",
    t5_title: "Solar & Wind", t5_text: "Grüne Energie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Woraus besteht Lichtenergie?", t5_qa: "Photonen", t5_qb: "Elektronen", t5_qc: "Protonen", t5_qd: "Neutronen",
    t5_w1: "Photovoltaikanlagen", t5_w2: "wandeln", t5_w3: "das", t5_w4: "Sonnenlicht", t5_w5: "direkt", t5_w6: "in", t5_w7: "elektrischen", t5_w8: "Strom",
    t5_l1: "Wind", t5_r1: "Rad", t5_l2: "Solar", t5_r2: "Zelle", t5_l3: "Bio", t5_r3: "Mais",
    t5_sent: "Wind entsteht durch ___.", t5_qa2: "Sonne", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Die", t5_f2: "Sonne", t5_f3: "schickt", t5_f4: "uns", t5_f5: "jeden", t5_f6: "Tag", t5_f7: "viel", t5_f8: "mehr", t5_f9: "Energie",
    t5_tk1: "Offshore-Windparks", t5_tk2: "stehen", t5_tk3: "mitten", t5_tk4: "im", t5_tk5: "Meer", t5_tk6: "wo", t5_tk7: "der", t5_tk8: "Wind", t5_tk9: "stetig", t5_tk10: "weht.",
    t5_bl1: "Tag", t5_bl2: "Nacht", t5_i1: "Sonne", t5_i2: "Wind", t5_i3: "Licht", t5_i4: "Flaute",
    t6_title: "Wasserkraft", t6_text: "Strömung nutzen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was dreht das Wasser?", t6_qa: "Die Turbine", t6_qb: "Das Rad", t6_qc: "Den Stein", t6_qd: "Die Fische",
    t6_w1: "Wasserkraftwerke", t6_w2: "sind", t6_w3: "sehr", t6_w4: "zuverlässig", t6_w5: "und", t6_w6: "stoßen", t6_w7: "keine", t6_w8: "Schadstoffe",
    t6_l1: "Fluss", t6_r1: "Lauf", t6_l2: "See", t6_r2: "Speicher", t6_l3: "Meer", t6_r3: "Gezeiten",
    t6_sent: "Ein Stausee speichert ___.", t6_qa2: "Energie", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Staudämme", t6_f2: "verändern", t6_f3: "jedoch", t6_f4: "stark", t6_f5: "den", t6_f6: "natürlichen", t6_f7: "Lebensraum", t6_f8: "der", t6_f9: "Tiere.",
    t6_tk1: "Gezeitenkraftwerke", t6_tk2: "nutzen", t6_tk3: "den", t6_tk4: "Unterschied", t6_tk5: "zwischen", t6_tk6: "Ebbe", t6_tk7: "und", t6_tk8: "Flut", t6_tk9: "am", t6_tk10: "Meer.",
    t6_bl1: "Hoch", t6_bl2: "Tief", t6_i1: "Stausee", t6_i2: "Turbine", t6_i3: "Damm", t6_i4: "Fluss",
    t7_title: "Energiesparen", t7_text: "Weniger ist mehr.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was verbraucht viel Strom?", t7_qa: "Alte Heizungen", t7_qb: "LED Lampen", t7_qc: "Ein Buch", t7_qd: "Fahrradfahren",
    t7_w1: "Durch", t7_w2: "bessere", t7_w3: "Dämmung", t7_w4: "kann", t7_w5: "man", t7_w6: "viel", t7_w7: "Heizenergie", t7_w8: "im",
    t7_l1: "Licht", t7_r1: "LED", t7_l2: "Heizen", t7_r2: "Dämmen", t7_l3: "Gerät", t7_r3: "A+++",
    t7_sent: "Standby verbraucht heimlich ___.", t7_qa2: "Strom", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Jede", t7_f2: "gesparte", t7_f3: "Kilowattstunde", t7_f4: "schont", t7_f5: "die", t7_f6: "Umwelt", t7_f7: "und", t7_f8: "auch", t7_f9: "den",
    t7_tk1: "Effizienz", t7_tk2: "bedeutet", t7_tk3: "mit", t7_tk4: "weniger", t7_tk5: "Einsatz", t7_tk6: "das", t7_tk7: "gleiche", t7_tk8: "Ergebnis", t7_tk9: "zu", t7_tk10: "erzielen.",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Dämmung", t7_i2: "Lüften", t7_i3: "LED", t7_i4: "Fenster auf",
    t8_title: "Check", t8_text: "Energie-Experte?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Einheit der Energie?", t8_qa: "Joule / Wattsekunde", t8_qb: "Newton", t8_qc: "Meter", t8_qd: "Grad",
    t8_w1: "Wir", t8_w2: "wissen", t8_w3: "jetzt", t8_w4: "woher", t8_w5: "unser", t8_w6: "Strom", t8_w7: "kommt", t8_w8: "und",
    t8_l1: "Kraft", t8_r1: "Newton", t8_l2: "Arbeit", t8_r2: "Joule", t8_l3: "Leistung", t8_r3: "Watt",
    t8_sent: "Leistung misst man in ___.", t8_qa2: "Watt", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Die", t8_f2: "Zukunft", t8_f3: "gehört", t8_f4: "den", t8_f5: "sauberen", t8_f6: "und", t8_f7: "unendlichen", t8_f8: "Energiequellen", t8_f9: "unserer",
    t8_tk1: "Physik", t8_tk2: "hilft", t8_tk3: "uns", t8_tk4: "die", t8_tk5: "wichtigen", t8_tk6: "Fragen", t8_tk7: "unserer", t8_tk8: "Energieversorgung", t8_tk9: "zu", t8_tk10: "beantworten.",
    t8_bl1: "Natur", t8_bl2: "Technik", t8_i1: "Blitz", t8_i2: "Batterie", t8_i3: "Sonne", t8_i4: "Kabel",
  },
};

export const ENERGIE_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Energiearten", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Umwandlung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Fossile Energie", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Kernenergie", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Solar & Wind", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Wasserkraft", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Energiesparen", color: "#4CAF50" },
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

export const RECHTSSTAAT_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Gesetze & Recht",
    t1_title: "Der Rechtsstaat", t1_text: "Niemand steht über dem Gesetz.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was ist ein Merkmal des Rechtsstaats?", t1_qa: "Unabhängige Richter", t1_qb: "Ein starker König", t1_qc: "Willkür", t1_qd: "Keine Regeln",
    t1_w1: "In", t1_w2: "einem", t1_w3: "Rechtsstaat", t1_w4: "muss", t1_w5: "sich", t1_w6: "auch", t1_w7: "der", t1_w8: "Staat",
    t1_l1: "Richter", t1_r1: "Urteil", t1_l2: "Polizei", t1_r2: "Schutz", t1_l3: "Anwalt", t1_r3: "Hilfe",
    t1_sent: "Gesetze gelten für ___.", t1_qa2: "alle", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Die", t1_f2: "Gewaltenteilung", t1_f3: "sorgt", t1_f4: "dafür", t1_f5: "dass", t1_f6: "Macht", t1_f7: "kontrolliert", t1_f8: "und", t1_f9: "verteilt",
    t1_tk1: "Rechtssicherheit", t1_tk2: "bedeutet", t1_tk3: "dass", t1_tk4: "man", t1_tk5: "sich", t1_tk6: "auf", t1_tk7: "die", t1_tk8: "bestehenden", t1_tk9: "Gesetze", t1_tk10: "verlassen",
    t1_bl1: "Recht", t1_bl2: "Unrecht", t1_i1: "Gesetz", t1_i2: "Willkür", t1_i3: "Freiheit", t1_i4: "Zwang",
    t2_title: "Strafrecht", t2_text: "Verbrechen und Strafe.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was ist das Ziel von Strafe?", t2_qa: "Resozialisierung", t2_qb: "Rache (nur)", t2_qc: "Geld verdienen", t2_qd: "Spaß",
    t2_w1: "Das", t2_w2: "Strafgesetzbuch", t2_w3: "legt", t2_w4: "fest", t2_w5: "welche", t2_w6: "Handlungen", t2_w7: "verboten", t2_w8: "sind",
    t2_l1: "Täter", t2_r1: "Schuld", t2_l2: "Opfer", t2_r2: "Schaden", t2_l3: "Zeuge", t2_r3: "Aussage",
    t2_sent: "Diebstahl ist eine ___.", t2_qa2: "Straftat", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Jugendliche", t2_f2: "unterliegen", t2_f3: "dem", t2_f4: "Jugendstrafrecht", t2_f5: "das", t2_f6: "eher", t2_f7: "erziehen", t2_f8: "als", t2_f9: "strafen",
    t2_tk1: "Die", t2_tk2: "Staatsanwaltschaft", t2_tk3: "klagt", t2_tk4: "Personen", t2_tk5: "an", t2_tk6: "wenn", t2_tk7: "sie", t2_tk8: "eine", t2_tk9: "Straftat", t2_tk10: "begangen",
    t2_bl1: "Anklage", t2_bl2: "Verteidigung", t2_i1: "Staatsanwalt", t2_i2: "Anwalt", t2_i3: "Indiz", t2_i4: "Beweis",
    t3_title: "Zivilrecht", t3_text: "Streit unter Bürgern.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was regelt das BGB?", t3_qa: "Verträge und Käufe", t3_qb: "Mord", t3_qc: "Wahlen", t3_qd: "Autofahren (nur)",
    t3_w1: "Das", t3_w2: "Bürgerliche", t3_w3: "Gesetzbuch", t3_w4: "regelt", t3_w5: "die", t3_w6: "Rechtsbeziehungen", t3_w7: "zwischen", t3_w8: "privaten",
    t3_l1: "Kauf", t3_r1: "Ware", t3_l2: "Miete", t3_r2: "Haus", t3_l3: "Erbe", t3_r3: "Geld",
    t3_sent: "Ein Vertrag ist eine ___.", t3_qa2: "Einigung", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Wer", t3_f2: "einen", t3_f3: "Schaden", t3_f4: "verursacht", t3_f5: "muss", t3_f6: "diesen", t3_f7: "dem", t3_f8: "anderen", t3_f9: "wieder",
    t3_tk1: "Schadenersatz", t3_tk2: "ist", t3_tk3: "eine", t3_tk4: "wichtige", t3_tk5: "Säule", t3_tk6: "im", t3_tk7: "deutschen", t3_tk8: "Zivilrecht", t3_tk9: "für", t3_tk10: "alle",
    t3_bl1: "Privat", t3_bl2: "Öffentlich", t3_i1: "Vertrag", t3_i2: "Steuer", t3_i3: "Kauf", t3_i4: "Wahl",
    t4_title: "Jugendschutz", t4_text: "Regeln für dich.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Ab wann darf man rauchen?", t4_qa: "18", t4_qb: "12", t4_qc: "16", t4_qd: "Nie (für alle)",
    t4_w1: "Das", t4_w2: "Jugendschutzgesetz", t4_w3: "regelt", t4_w4: "den", t4_w5: "Aufenthalt", t4_w6: "in", t4_w7: "Gaststätten", t4_w8: "und",
    t4_l1: "Kino", t4_r1: "FSK", t4_l2: "Disco", t4_r2: "Uhrzeit", t4_l3: "Alkohol", t4_r3: "Verbot",
    t4_sent: "Das JuSchG schützt ___.", t4_qa2: "Kinder", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Eltern", t4_f2: "haben", t4_f3: "die", t4_f4: "Pflicht", t4_f5: "ihre", t4_f6: "Kinder", t4_f7: "vor", t4_f8: "Gefahren", t4_f9: "zu",
    t4_tk1: "Altersbeschränkungen", t4_tk2: "bei", t4_tk3: "Computerspielen", t4_tk4: "sollen", t4_tk5: "die", t4_tk6: "seelische", t4_tk7: "Entwicklung", t4_tk8: "von", t4_tk9: "Kindern", t4_tk10: "bewahren.",
    t4_bl1: "Erlaubt", t4_bl2: "Verboten", t4_i1: "Saft", t4_i2: "Zigaretten", t4_i3: "Wasser", t4_i4: "Schnaps",
    t5_title: "Gerichtsverhandlung", t5_text: "Im Namen des Volkes.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wer entscheidet über die Schuld?", t5_qa: "Der Richter", t5_qb: "Die Zuschauer", t5_qc: "Der Angeklagte", t5_qd: "Die Presse",
    t5_w1: "Der", t5_w2: "Grundsatz", t5_w3: "Im", t5_w4: "Zweifel", t5_w5: "für", t5_w6: "den", t5_w7: "Angeklagten", t5_w8: "gilt",
    t5_l1: "Urteil", t5_r1: "Ende", t5_l2: "Revision", t5_r2: "Neu", t5_l3: "Berufung", t5_r3: "Check",
    t5_sent: "In dubio pro ___.", t5_qa2: "reo", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Zeugen", t5_f2: "sind", t5_f3: "verpflichtet", t5_f4: "vor", t5_f5: "Gericht", t5_f6: "immer", t5_f7: "die", t5_f8: "volle", t5_f9: "Wahrheit",
    t5_tk1: "Schöffen", t5_tk2: "sind", t5_tk3: "ehrenamtliche", t5_tk4: "Richter", t5_tk5: "aus", t5_tk6: "dem", t5_tk7: "Volk", t5_tk8: "die", t5_tk9: "beim", t5_tk10: "Urteil",
    t5_bl1: "Pro", t5_bl2: "Contra", t5_i1: "Anwalt", t5_i2: "Ankläger", t5_i3: "Freispruch", t5_i4: "Haft",
    t6_title: "Menschenrechte", t6_text: "Weltweit gültig.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wer verabschiedete die Menschenrechte?", t6_qa: "Die UNO", t6_qb: "Die USA", t6_qc: "Deutschland", t6_qd: "Der Papst",
    t6_w1: "Menschenrechte", t6_w2: "gelten", t6_w3: "für", t6_w4: "jeden", t6_w5: "Menschen", t6_w6: "überall", t6_w7: "auf", t6_w8: "der",
    t6_l1: "Leben", t6_r1: "Recht", t6_l2: "Freiheit", t6_r2: "Reden", t6_l3: "Folter", t6_r3: "Verbot",
    t6_sent: "Alle Menschen sind frei und ___.", t6_qa2: "gleich", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Organisationen", t6_f2: "wie", t6_f3: "Amnesty", t6_f4: "International", t6_f5: "setzen", t6_f6: "sich", t6_f7: "weltweit", t6_f8: "für", t6_f9: "diese",
    t6_tk1: "Das", t6_tk2: "Recht", t6_tk3: "auf", t6_tk4: "Bildung", t6_tk5: "ist", t6_tk6: "ein", t6_tk7: "wichtiges", t6_tk8: "Menschenrecht", t6_tk9: "für", t6_tk10: "alle",
    t6_bl1: "Freiheit", t6_bl2: "Zwang", t6_i1: "Meinung", t6_i2: "Zensur", t6_i3: "Glauben", t6_i4: "Haft",
    t7_title: "Polizei", t7_text: "Freund und Helfer.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was darf die Polizei?", t7_qa: "Gefahren abwehren", t7_qb: "Alles was sie will", t7_qc: "Gesetze ändern", t7_qd: "Urteile sprechen",
    t7_w1: "Die", t7_w2: "Polizei", t7_w3: "darf", t7_w4: "nur", t7_w5: "auf", t7_w6: "Grundlage", t7_w7: "von", t7_w8: "Gesetzen",
    t7_l1: "Streife", t7_r1: "Präsenz", t7_l2: "Ermittlung", t7_r2: "Suche", t7_l3: "Verkehr", t7_r3: "Kontrolle",
    t7_sent: "Die Polizei ist die ___.", t7_qa2: "Exekutive", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Bei", t7_f2: "einer", t7_f3: "Festnahme", t7_f4: "muss", t7_f5: "man", t7_f6: "über", t7_f7: "seine", t7_f8: "Rechte", t7_f9: "aufgeklärt",
    t7_tk1: "Polizeibeamte", t7_tk2: "leisten", t7_tk3: "einen", t7_tk4: "Eid", t7_tk5: "auf", t7_tk6: "die", t7_tk7: "Verfassung", t7_tk8: "unseres", t7_tk9: "Landes.", t7_tk10: "",
    t7_bl1: "Schutz", t7_bl2: "Eingriff", t7_i1: "Hilfe", t7_i2: "Haft", t7_i3: "Wache", t7_i4: "Durchsuchung",
    t8_title: "Check", t8_text: "Rechtsexperte?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer schreibt Gesetze?", t8_qa: "Legislative (Parlament)", t8_qb: "Polizei", t8_qc: "Richter", t8_qd: "König",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "gelernt", t8_w4: "wie", t8_w5: "unser", t8_w6: "Rechtssystem", t8_w7: "funktioniert", t8_w8: "und",
    t8_l1: "Paragraph", t8_r1: "Zeichen", t8_l2: "Gesetz", t8_r2: "Regel", t8_l3: "Recht", t8_r3: "Anspruch",
    t8_sent: "Recht bringt ___.", t8_qa2: "Frieden", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Ein", t8_f2: "faires", t8_f3: "Verfahren", t8_f4: "ist", t8_f5: "die", t8_f6: "Grundlage", t8_f7: "für", t8_f8: "Gerechtigkeit", t8_f9: "in",
    t8_tk1: "Demokratie", t8_tk2: "und", t8_tk3: "Rechtsstaatlichkeit", t8_tk4: "gehören", t8_tk5: "untrennbar", t8_tk6: "zusammen", t8_tk7: "für", t8_tk8: "eine", t8_tk9: "freie", t8_tk10: "Welt.",
    t8_bl1: "Regel", t8_bl2: "Strafe", t8_i1: "Gesetz", t8_i2: "Gefängnis", t8_i3: "Gebot", t8_i4: "Bussgeld",
  },
};

export const RECHTSSTAAT_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Der Rechtsstaat", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Strafrecht", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Zivilrecht", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Jugendschutz", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Gerichtsverhandlung", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Menschenrechte", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Polizei", color: "#4CAF50" },
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

export const GLOBAL_ECON_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wirtschaft & Weltmarkt",
    t1_title: "Globalisierung", t1_text: "Vernetzte Welt.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was fördert die Globalisierung?", t1_qa: "Internet und Container", t1_qb: "Mauern", t1_qc: "Pferdekarren", t1_qd: "Bücher (nur)",
    t1_w1: "Heutzutage", t1_w2: "kommen", t1_w3: "viele", t1_w4: "Teile", t1_w5: "eines", t1_w6: "Produkts", t1_w7: "aus", t1_w8: "vielen",
    t1_l1: "Import", t1_r1: "Rein", t1_l2: "Export", t1_r2: "Raus", t1_l3: "Zoll", t1_r3: "Gebühr",
    t1_sent: "Waren reisen um den ___.", t1_qa2: "Globus", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Große", t1_f2: "Containerschiffe", t1_f3: "transportieren", t1_f4: "täglich", t1_f5: "Millionen Tonnen", t1_f6: "an", t1_f7: "Waren", t1_f8: "über", t1_f9: "die",
    t1_tk1: "Die", t1_tk2: "Vernetzung", t1_tk3: "der", t1_tk4: "Welt", t1_tk5: "hat", t1_tk6: "sowohl", t1_tk7: "viele", t1_tk8: "Vorteile", t1_tk9: "als", t1_tk10: "auch",
    t1_bl1: "Nah", t1_bl2: "Fern", t1_i1: "Bäcker", t1_i2: "Amazon", t1_i3: "Hofladen", t1_i4: "Apple",
    t2_title: "Marktwirtschaft", t2_text: "Angebot und Nachfrage.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wann steigt der Preis?", t2_qa: "Hohe Nachfrage, wenig Angebot", t2_qb: "Viel Angebot", t2_qc: "Immer", t2_qd: "Nachts",
    t2_w1: "In", t2_w2: "einer", t2_w3: "freien", t2_w4: "Marktwirtschaft", t2_w5: "bestimmt", t2_w6: "der", t2_w7: "Wettbewerb", t2_w8: "das",
    t2_l1: "Angebot", t2_r1: "Verkauf", t2_l2: "Nachfrage", t2_r2: "Kauf", t2_l3: "Gleichgewicht", t2_r3: "Preis",
    t2_sent: "Der Markt regelt den ___.", t2_qa2: "Preis", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Wenn", t2_f2: "viele", t2_f3: "Menschen", t2_f4: "das", t2_f5: "gleiche", t2_f6: "Produkt", t2_f7: "wollen", t2_f8: "wird", t2_f9: "es",
    t2_tk1: "Monopole", t2_tk2: "sind", t2_tk3: "schlecht", t2_tk4: "für", t2_tk5: "den", t2_tk6: "Markt", t2_tk7: "weil", t2_tk8: "dann", t2_tk9: "kein", t2_tk10: "echter",
    t2_bl1: "Käufer", t2_bl2: "Verkäufer", t2_i1: "Kunde", t2_i2: "Händler", t2_i3: "Bedarf", t2_i4: "Ware",
    t3_title: "Soziale Marktwirtschaft", t3_text: "Freiheit mit Schutz.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was ist typisch für Deutschland?", t3_qa: "Soziale Marktwirtschaft", t3_qb: "Diktatur", t3_qc: "Tauschhandel", t3_qd: "Planwirtschaft",
    t3_w1: "Der", t3_w2: "Staat", t3_w3: "greift", t3_w4: "ein", t3_w5: "um", t3_w6: "Schwächere", t3_w7: "in", t3_w8: "der",
    t3_l1: "Rente", t3_r1: "Alt", t3_l2: "Pflege", t3_r2: "Krank", t3_l3: "Arbeitslos", t3_r3: "Jobsuche",
    t3_sent: "Der Staat hilft bei ___.", t3_qa2: "Not", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Steuern", t3_f2: "werden", t3_f3: "genutzt", t3_f4: "um", t3_f5: "Schulen", t3_f6: "Straßen", t3_f7: "und", t3_f8: "Krankenhäuser", t3_f9: "für",
    t3_tk1: "Das", t3_tk2: "Sozialversicherungssystem", t3_tk3: "schützt", t3_tk4: "die", t3_tk5: "Bürger", t3_tk6: "vor", t3_tk7: "den", t3_tk8: "großen", t3_tk9: "Risiken", t3_tk10: "des",
    t3_bl1: "Privat", t3_bl2: "Staatlich", t3_i1: "Firma", t3_i2: "Schule", t3_i3: "Haus", t3_i4: "Polizei",
    t4_title: "Unternehmen", t4_text: "Produktion.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist das Ziel einer Firma?", t4_qa: "Gewinn erwirtschaften", t4_qb: "Geld verschenken", t4_qc: "Schlafen", t4_qd: "Urlaub machen",
    t4_w1: "Ein", t4_w2: "Unternehmen", t4_w3: "braucht", t4_w4: "Kapital", t4_w5: "Arbeit", t4_w6: "und", t4_w7: "gute", t4_w8: "Ideen",
    t4_l1: "Chef", t4_r1: "Leitung", t4_l2: "Azubi", t4_r2: "Lernen", t4_l3: "Kunde", t4_r3: "Zahlen",
    t4_sent: "Mitarbeiter bekommen ___.", t4_qa2: "Lohn", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Innovationen", t4_f2: "sind", t4_f3: "wichtig", t4_f4: "damit", t4_f5: "Firmen", t4_f6: "auch", t4_f7: "in", t4_f8: "Zukunft", t4_f9: "noch",
    t4_tk1: "Marketing", t4_tk2: "versucht", t4_tk3: "die", t4_tk4: "Bedürfnisse", t4_tk5: "der", t4_tk6: "Menschen", t4_tk7: "zu", t4_tk8: "wecken", t4_tk9: "und", t4_tk10: "zu",
    t4_bl1: "Kosten", t4_bl2: "Einnahmen", t4_i1: "Miete", t4_i2: "Umsatz", t4_i3: "Gehalt", t4_i4: "Verkauf",
    t5_title: "Geld & Banken", t5_text: "Finanzwelt.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist Inflation?", t5_qa: "Geldentwertung", t5_qb: "Mehr Geld für alle", t5_qc: "Ein Spiel", t5_qd: "Wetter",
    t5_w1: "Banken", t5_w2: "verleihen", t5_w3: "Geld", t5_w4: "als", t5_w5: "Kredite", t5_w6: "und", t5_w7: "verlangen", t5_w8: "dafür",
    t5_l1: "Konto", t5_r1: "Nummer", t5_l2: "Karte", t5_r2: "Chip", t5_l3: "Tresor", t5_r3: "Sicher",
    t5_sent: "Zinsen gibt es fürs ___.", t5_qa2: "Sparen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Die", t5_f2: "Zentralbank", t5_f3: "steuert", t5_f4: "die", t5_f5: "Menge", t5_f6: "an", t5_f7: "Geld", t5_f8: "die", t5_f9: "im",
    t5_tk1: "Bargeld", t5_tk2: "wird", t5_tk3: "im", t5_tk4: "Alltag", t5_tk5: "immer", t5_tk6: "öfter", t5_tk7: "durch", t5_tk8: "digitale", t5_tk9: "Zahlungen", t5_tk10: "ersetzt.",
    t5_bl1: "Haben", t5_bl2: "Soll", t5_i1: "Guthaben", t5_i2: "Schulden", t5_i3: "Plus", t5_i4: "Minus",
    t6_title: "Fairer Handel", t6_text: "Gerechtigkeit.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was garantiert Fair Trade?", t6_qa: "Bessere Preise für Bauern", t6_qb: "Billigste Produkte", t6_qc: "Schnelle Lieferung", t6_qd: "Plastikverpackung",
    t6_w1: "Fairer", t6_w2: "Handel", t6_w3: "hilft", t6_w4: "Menschen", t6_w5: "in", t6_w6: "ärmeren", t6_w7: "Ländern", t6_w8: "von",
    t6_l1: "Kaffee", t6_r1: "Bohne", t6_l2: "Kakao", t6_r2: "Schoko", t6_l3: "Banane", t6_r3: "Frucht",
    t6_sent: "Kinderarbeit ist streng ___.", t6_qa2: "verboten", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Achte", t6_f2: "beim", t6_f3: "Einkaufen", t6_f4: "auf", t6_f5: "Siegel", t6_f6: "die", t6_f7: "eine", t6_f8: "faire", t6_f9: "Produktion",
    t6_tk1: "Nachhaltigkeit", t6_tk2: "bedeutet", t6_tk3: "auch", t6_tk4: "soziale", t6_tk5: "Verantwortung", t6_tk6: "für", t6_tk7: "die", t6_tk8: "Produzenten", t6_tk9: "zu", t6_tk10: "übernehmen.",
    t6_bl1: "Fair", t6_bl2: "Unfair", t6_i1: "Guter Lohn", t6_i2: "Ausbeutung", t6_i3: "Schutz", t6_i4: "Hunger",
    t7_title: "Konsum", t7_text: "Wir als Käufer.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was beeinflusst uns?", t7_qa: "Werbung und Trends", t7_qb: "Nur Hunger", t7_qc: "Nichts", t7_qd: "Das Wetter (nur)",
    t7_w1: "Unser", t7_w2: "Konsumverhalten", t7_w3: "hat", t7_w4: "direkte", t7_w5: "Auswirkungen", t7_w6: "auf", t7_w7: "die", t7_w8: "Umwelt",
    t7_l1: "Billig", t7_r1: "Kurz", t7_l2: "Teuer", t7_r2: "Lang", t7_l3: "Qualität", t7_r3: "Gut",
    t7_sent: "Kaufe nur was du ___.", t7_qa2: "brauchst", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Second-Hand", t7_f2: "und", t7_f3: "Recycling", t7_f4: "helfen", t7_f5: "dabei", t7_f6: "wertvolle", t7_f7: "Ressourcen", t7_f8: "unserer", t7_f9: "Erde",
    t7_tk1: "Verbraucherschutz", t7_tk2: "informiert", t7_tk3: "uns", t7_tk4: "über", t7_tk5: "unsere", t7_tk6: "Rechte", t7_tk7: "gegenüber", t7_tk8: "Händlern", t7_tk9: "und", t7_tk10: "Herstellern.",
    t7_bl1: "Wichtig", t7_bl2: "Wunsch", t7_i1: "Essen", t7_i2: "Handy", t7_i3: "Wasser", t7_i4: "Spiel",
    t8_title: "Check", t8_text: "Wirtschaftsprofi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist Export?", t8_qa: "Verkauf ins Ausland", t8_qb: "Einkauf", t8_qc: "Geschenk", t8_qd: "Lagerung",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "komplexen", t8_w5: "Wege", t8_w6: "des", t8_w7: "Geldes", t8_w8: "und",
    t8_l1: "Markt", t8_r1: "Platz", t8_l2: "Geld", t8_r2: "Mittel", t8_l3: "Arbeit", t8_r3: "Kraft",
    t8_sent: "Wirtschaft betrifft uns ___.", t8_qa2: "täglich", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Eine", t8_f2: "starke", t8_f3: "Wirtschaft", t8_f4: "braucht", t8_f5: "gebildete", t8_f6: "Menschen", t8_f7: "und", t8_f8: "faire", t8_f9: "Regeln",
    t8_tk1: "Globales", t8_tk2: "Denken", t8_tk3: "ist", t8_tk4: "wichtig", t8_tk5: "um", t8_tk6: "die", t8_tk7: "Herausforderungen", t8_tk8: "der", t8_tk9: "Zukunft", t8_tk10: "zu",
    t8_bl1: "Lokal", t8_bl2: "Global", t8_i1: "Hofladen", t8_i2: "Weltmarkt", t8_i3: "Dorf", t8_i4: "Internet",
  },
};

export const GLOBAL_ECON_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Globalisierung", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Marktwirtschaft", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Soziale Marktwirtschaft", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Unternehmen", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Geld & Banken", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Fairer Handel", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Konsum", color: "#4CAF50" },
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

export const SUCHT_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Suchtprävention",
    t1_title: "Was ist Sucht?", t1_text: "Abhängigkeit.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wann ist man süchtig?", t1_qa: "Zwanghaftes Verlangen", t1_qb: "Wenn man Hunger hat", t1_qc: "Einmal pro Woche", t1_qd: "Nie",
    t1_w1: "Sucht", t1_w2: "kann", t1_w3: "sowohl", t1_w4: "körperlich", t1_w5: "als", t1_w6: "auch", t1_w7: "psychisch", t1_w8: "sein.",
    t1_l1: "Stoff", t1_r1: "Alkohol", t1_l2: "Verhalten", t1_r2: "Zocken", t1_l3: "Gefühl", t1_r3: "Zwang",
    t1_sent: "Sucht schadet der ___.", t1_qa2: "Gesundheit", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Der", t1_f2: "Körper", t1_f3: "gewöhnt", t1_f4: "sich", t1_f5: "an", t1_f6: "das", t1_f7: "Gift", t1_f8: "und", t1_f9: "braucht",
    t1_tk1: "Kontrollverlust", t1_tk2: "ist", t1_tk3: "ein", t1_tk4: "typisches", t1_tk5: "Anzeichen", t1_tk6: "für", t1_tk7: "eine", t1_tk8: "beginnende", t1_tk9: "Abhängigkeit.", t1_tk10: "",
    t1_bl1: "Sichtbar", t1_bl2: "Unsichtbar", t1_i1: "Zittern", t1_i2: "Gedanken", t1_i3: "Schweiß", t1_i4: "Gier",
    t2_title: "Rauchen", t2_text: "Gefahr für die Lunge.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was ist in Zigaretten?", t2_qa: "Nikotin und Teer", t2_qb: "Nur Vitamine", t2_qc: "Zucker", t2_qd: "Wasser",
    t2_w1: "Nikotin", t2_w2: "ist", t2_w3: "ein", t2_w4: "Nervengift", t2_w5: "das", t2_w6: "sehr", t2_w7: "schnell", t2_w8: "süchtig",
    t2_l1: "Lunge", t2_r1: "Krebs", t2_l2: "Herz", t2_r2: "Infarkt", t2_l3: "Haut", t2_r3: "Falten",
    t2_sent: "Rauchen macht sehr ___.", t2_qa2: "abhängig", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Passivrauchen", t2_f2: "ist", t2_f3: "für", t2_f4: "Mitmenschen", t2_f5: "fast", t2_f6: "genauso", t2_f7: "gefährlich", t2_f8: "wie", t2_f9: "selber",
    t2_tk1: "Die", t2_tk2: "Teerstoffe", t2_tk3: "verkleben", t2_tk4: "die", t2_tk5: "feinen", t2_tk6: "Flimmerhärchen", t2_tk7: "in", t2_tk8: "unseren", t2_tk9: "Bronchien.", t2_tk10: "",
    t2_bl1: "Gift", t2_bl2: "Folge", t2_i1: "Teer", t2_i2: "Husten", t2_i3: "Nikotin", t2_i4: "Atemnot",
    t3_title: "Alkohol", t3_text: "Unterschätztes Gift.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was schädigt Alkohol?", t3_qa: "Leber und Gehirn", t3_qb: "Nur die Füße", t3_qc: "Die Haare", t3_qd: "Nichts",
    t3_w1: "Alkohol", t3_w2: "ist", t3_w3: "besonders", t3_w4: "für", t3_w5: "Jugendliche", t3_w6: "gefährlich", t3_w7: "da", t3_w8: "der",
    t3_l1: "Rausch", t3_r1: "Spaß", t3_l2: "Kater", t3_r2: "Schmerz", t3_l3: "Sucht", t3_r3: "Zwang",
    t3_sent: "Alkohol verlangsamt das ___.", t3_qa2: "Reaktionsvermögen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Promille", t3_f2: "gibt", t3_f3: "an", t3_f4: "wie", t3_f5: "viel", t3_f6: "reiner", t3_f7: "Alkohol", t3_f8: "im", t3_f9: "Blut",
    t3_tk1: "Schon", t3_tk2: "kleine", t3_tk3: "Mengen", t3_tk4: "Alkohol", t3_tk5: "beeinträchtigen", t3_tk6: "unsere", t3_tk7: "Wahrnehmung", t3_tk8: "und", t3_tk9: "unser", t3_tk10: "Urteilsvermögen.",
    t3_bl1: "Körper", t3_bl2: "Geist", t3_i1: "Leber", t3_i2: "Lallen", t3_i3: "Magen", t3_i4: "Schwindel",
    t4_title: "Digitale Sucht", t4_text: "Handy & Games.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wann wird Zocken zur Sucht?", t4_qa: "Wenn man alles andere vergisst", t4_qb: "Wenn es Spaß macht", t4_qc: "Nur am Wochenende", t4_qd: "Nie",
    t4_w1: "Online-Spiele", t4_w2: "sind", t4_w3: "oft", t4_w4: "so", t4_w5: "gebaut", t4_w6: "dass", t4_w7: "man", t4_w8: "immer",
    t4_l1: "Handy", t4_r1: "Chat", t4_l2: "PC", t4_r2: "Zocken", t4_l3: "Konsole", t4_r3: "Controller",
    t4_sent: "Medienfasten hilft bei der ___.", t4_qa2: "Kontrolle", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Schlafmangel", t4_f2: "und", t4_f3: "schlechte", t4_f4: "Noten", t4_f5: "sind", t4_f6: "oft", t4_f7: "Folgen", t4_f8: "von", t4_f9: "zu",
    t4_tk1: "Real-Life", t4_tk2: "sollte", t4_tk3: "immer", t4_tk4: "Vorrang", t4_tk5: "vor", t4_tk6: "der", t4_tk7: "virtuellen", t4_tk8: "Welt", t4_tk9: "haben.", t4_tk10: "",
    t4_bl1: "Echt", t4_bl2: "Virtual", t4_i1: "Freunde", t4_i2: "Avatar", t4_i3: "Sport", t4_i4: "Level",
    t5_title: "Drogen", t5_text: "Illegale Substanzen.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was bewirken Drogen?", t5_qa: "Veränderung der Wahrnehmung", t5_qb: "Gesundheit", t5_qc: "Ewige Jugend", t5_qd: "Intelligenz",
    t5_w1: "Illegale", t5_w2: "Drogen", t5_w3: "haben", t5_w4: "ein", t5_w5: "extrem", t5_w6: "hohes", t5_w7: "Potenzial", t5_w8: "für",
    t5_l1: "Cannabis", t5_r1: "Weich", t5_l2: "Heroin", t5_r2: "Hart", t5_l3: "Ecstasy", t5_r3: "Synthetisch",
    t5_sent: "Drogen zerstören das ___.", t5_qa2: "Leben", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Dealer", t5_f2: "wollen", t5_f3: "nur", t5_f4: "dein", t5_f5: "Geld", t5_f6: "und", t5_f7: "scheren", t5_f8: "sich", t5_f9: "nicht",
    t5_tk1: "Der", t5_tk2: "Erstkonsum", t5_tk3: "passiert", t5_tk4: "oft", t5_tk5: "aus", t5_tk6: "Neugier", t5_tk7: "oder", t5_tk8: "durch", t5_tk9: "Gruppenzwang.", t5_tk10: "",
    t5_bl1: "Legal", t5_bl2: "Illegal", t5_i1: "Kaffee", t5_i2: "Koks", t5_i3: "Tee", t5_i4: "Heroin",
    t6_title: "Gruppenzwang", t6_text: "Nein sagen können.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie bleibt man stark?", t6_qa: "Eigene Meinung vertreten", t6_qb: "Immer mitmachen", t6_qc: "Weglaufen", t6_qd: "Gar nichts sagen",
    t6_w1: "Es", t6_w2: "erfordert", t6_w3: "viel", t6_w4: "Mut", t6_w5: "gegen", t6_w6: "den", t6_w7: "Strom", t6_w8: "zu",
    t6_l1: "Mut", t6_r1: "Stark", t6_l2: "Angst", t6_r2: "Schwach", t6_l3: "Selbst", t6_r3: "Bewusst",
    t6_sent: "Echte Freunde akzeptieren ein ___.", t6_qa2: "Nein", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Wer", t6_f2: "Selbstvertrauen", t6_f3: "hat", t6_f4: "muss", t6_f5: "sich", t6_f6: "nicht", t6_f7: "durch", t6_f8: "Drogen", t6_f9: "beweisen.",
    t6_tk1: "Man", t6_tk2: "muss", t6_tk3: "lernen", t6_tk4: "Situationen", t6_tk5: "richtig", t6_tk6: "einzuschätzen", t6_tk7: "und", t6_tk8: "Grenzen", t6_tk9: "zu", t6_tk10: "setzen.",
    t6_bl1: "Ich", t6_bl2: "Wir", t6_i1: "Wille", t6_i2: "Zwang", t6_i3: "Meinung", t6_i4: "Druck",
    t7_title: "Hilfe finden", t7_text: "Du bist nicht allein.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wo gibt es Hilfe?", t7_qa: "Beratungsstellen", t7_qb: "Gar nirgends", t7_qc: "Im Kiosk", t7_qd: "In der Disco",
    t7_w1: "Es", t7_w2: "gibt", t7_w3: "viele", t7_w4: "Experten", t7_w5: "die", t7_w6: "dir", t7_w7: "bei", t7_w8: "Suchtproblemen",
    t7_l1: "Telefon", t7_r1: "Nummer", t7_l2: "Schule", t7_r2: "Vertrauen", t7_l3: "Arzt", t7_r3: "Medizin",
    t7_sent: "Reden ist der erste ___.", t7_qa2: "Schritt", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Auch", t7_f2: "Angehörige", t7_f3: "von", t7_f4: "Süchtigen", t7_f5: "brauchen", t7_f6: "oft", t7_f7: "Unterstützung", t7_f8: "und", t7_f9: "Beratung.",
    t7_tk1: "Anonyme", t7_tk2: "Beratungsangebote", t7_tk3: "machen", t7_tk4: "es", t7_tk5: "leichter", t7_tk6: "über", t7_tk7: "heimliche", t7_tk8: "Probleme", t7_tk9: "zu", t7_tk10: "sprechen.",
    t7_bl1: "Hilfe", t7_bl2: "Problem", t7_i1: "Berater", t7_i2: "Sucht", t7_i3: "Hotline", t7_i4: "Not",
    t8_title: "Check", t8_text: "Präventionsprofi?", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist am besten?", t8_qa: "Gar nicht erst anfangen", t8_qb: "Alles ausprobieren", t8_qc: "Warten", t8_qd: "Ignorieren",
    t8_w1: "Prävention", t8_w2: "bedeutet", t8_w3: "vorzubeugen", t8_w4: "bevor", t8_w5: "ein", t8_w6: "großes", t8_w7: "Problem", t8_w8: "entsteht.",
    t8_l1: "Gesund", t8_r1: "Essen", t8_l2: "Fit", t8_r2: "Sport", t8_l3: "Frei", t8_r3: "Wille",
    t8_sent: "Ein starkes Ich braucht keine ___.", t8_qa2: "Drogen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "gelernt", t8_f4: "wie", t8_f5: "wir", t8_f6: "unser", t8_f7: "Leben", t8_f8: "selbst", t8_f9: "bestimmen",
    t8_tk1: "Wissen", t8_tk2: "über", t8_tk3: "die", t8_tk4: "Gefahren", t8_tk5: "ist", t8_tk6: "der", t8_tk7: "beste", t8_tk8: "Schutz", t8_tk9: "vor", t8_tk10: "Sucht.",
    t8_bl1: "Freiheit", t8_bl2: "Sucht", t8_i1: "Hobby", t8_i2: "Zwang", t8_i3: "Sport", t8_i4: "Gier",
  },
};

export const SUCHT_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Was ist Sucht?", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Rauchen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Alkohol", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Digitale Sucht", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Drogen", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Gruppenzwang", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Hilfe finden", color: "#4CAF50" },
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

export const FINALE_K7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "K7 Experten-Diplom",
    t1_title: "Chemie-Review", t1_text: "Atome.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Positiv im Kern?", t1_qa: "Protonen", t1_qb: "Elektronen", t1_qc: "Neutronen", t1_qd: "Atome",
    t1_w1: "Atome", t1_w2: "sind", t1_w3: "die", t1_w4: "Bausteine", t1_w5: "aus", t1_w6: "denen", t1_w7: "alles", t1_w8: "um",
    t1_l1: "Kern", t1_r1: "Masse", t1_l2: "Hülle", t1_r2: "Raum", t1_l3: "Base", t1_r3: "Lauge",
    t1_sent: "H2O ist das Molekül für ___.", t1_qa2: "Wasser", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "kennen", t1_f3: "jetzt", t1_f4: "den", t1_f5: "Aufbau", t1_f6: "der", t1_f7: "kleinsten", t1_f8: "Teilchen.", t1_f9: "",
    t1_tk1: "Das", t1_tk2: "Periodensystem", t1_tk3: "ordnet", t1_tk4: "alle", t1_tk5: "bekannten", t1_tk6: "Elemente", t1_tk7: "unserer", t1_tk8: "Welt.", t1_tk9: "", t1_tk10: "",
    t1_bl1: "Teil", t1_bl2: "Stoff", t1_i1: "Atom", t1_i2: "Gold", t1_i3: "Neutron", t1_i4: "Eisen",
    t2_title: "Geo-Review", t2_text: "Platten.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was ist Lava?", t2_qa: "Flüssiges Gestein außen", t2_qb: "Wasser", t2_qc: "Gas", t2_qd: "Eis",
    t2_w1: "Die", t2_w2: "Erde", t2_w3: "ist", t2_w4: "in", t2_w5: "ständiger", t2_w6: "Bewegung", t2_w7: "tief", t2_w8: "unter",
    t2_l1: "Beben", t2_r1: "Richter", t2_l2: "Vulkan", t2_r2: "Magma", t2_l3: "Gebirge", t2_r3: "Faltung",
    t2_sent: "Kontinente bewegen sich auf dem ___.", t2_qa2: "Mantel", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Plattentektonik", t2_f2: "erklärt", t2_f3: "wie", t2_f4: "Berge", t2_f5: "und", t2_f6: "Ozeane", t2_f7: "entstehen.", t2_f8: "", t2_f9: "",
    t2_tk1: "Vulkane", t2_tk2: "zeigen", t2_tk3: "uns", t2_tk4: "wie", t2_tk5: "heiß", t2_tk6: "es", t2_tk7: "im", t2_tk8: "Inneren", t2_tk9: "der", t2_tk10: "Erde",
    t2_bl1: "Innen", t2_bl2: "Außen", t2_i1: "Kern", t2_i2: "Kruste", t2_i3: "Mantel", t2_i4: "Boden",
    t3_title: "History-Review", t3_text: "Ritter.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Erster Stand?", t3_qa: "Klerus", t3_qb: "Adel", t3_qc: "Bauern", t3_qd: "Händler",
    t3_w1: "Das", t3_w2: "Mittelalter", t3_w3: "war", t3_w4: "eine", t3_w5: "Zeit", t3_w6: "von", t3_w7: "Rittern", t3_w8: "Burgen",
    t3_l1: "Stand", t3_r1: "Kirche", t3_l2: "Burg", t3_r2: "Ritter", t3_l3: "Zunft", t3_r3: "Handwerk",
    t3_sent: "Burgen schützten die ___.", t3_qa2: "Menschen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Städte", t3_f2: "boten", t3_f3: "den", t3_f4: "Menschen", t3_f5: "neue", t3_f6: "Freiheiten", t3_f7: "und", t3_f8: "Chancen.", t3_f9: "",
    t3_tk1: "Das", t3_tk2: "Lehenswesen", t3_tk3: "bestimmte", t3_tk4: "die", t3_tk5: "Ordnung", t3_tk6: "im", t3_tk7: "ganzen", t3_tk8: "Land.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Adel", t3_bl2: "Bauer", t3_i1: "Graf", t3_i2: "Knecht", t3_i3: "Ritter", t3_i4: "Magd",
    t4_title: "Bio-Review", t4_text: "DNA.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was sind 46 Stück?", t4_qa: "Chromosomen", t4_qb: "Finger", t4_qc: "Zähne", t4_qd: "Haare",
    t4_w1: "Die", t4_w2: "DNA", t4_w3: "enthält", t4_w4: "den", t4_w5: "Bauplan", t4_w6: "für", t4_w7: "jedes", t4_w8: "Lebewesen.",
    t4_l1: "Kern", t4_r1: "DNA", t4_l2: "Helix", t4_r2: "Form", t4_l3: "Gen", t4_r3: "Teil",
    t4_sent: "Mendel erforschte die ___.", t4_qa2: "Vererbung", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Merkmale", t4_f2: "werden", t4_f3: "von", t4_f4: "Generation", t4_f5: "zu", t4_f6: "Generation", t4_f7: "weitergegeben.", t4_f8: "", t4_f9: "",
    t4_tk1: "Mutationen", t4_tk2: "sorgen", t4_tk3: "für", t4_tk4: "Vielfalt", t4_tk5: "und", t4_tk6: "Veränderung", t4_tk7: "in", t4_tk8: "der", t4_tk9: "Natur.", t4_tk10: "",
    t4_bl1: "Code", t4_bl2: "Merkmal", t4_i1: "Gen", t4_i2: "Auge", t4_i3: "Basis", t4_i4: "Haar",
    t5_title: "Physik-Review", t5_text: "Energie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Energie der Bewegung?", t5_qa: "Kinetisch", t5_qb: "Potenziell", t5_qc: "Wärme", t5_qd: "Licht",
    t5_w1: "Wir", t5_w2: "nutzen", t5_w3: "verschiedene", t5_w4: "Quellen", t5_w5: "um", t5_w6: "unseren", t5_w7: "Strom", t5_w8: "zu",
    t5_l1: "Solar", t5_r1: "Sonne", t5_l2: "Wind", t5_r2: "Luft", t5_l3: "Kohle", t5_r3: "Fossil",
    t5_sent: "Energie wird niemals ___.", t5_qa2: "vernichtet", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Erneuerbare", t5_f2: "Energien", t5_f3: "sind", t5_f4: "wichtig", t5_f5: "für", t5_f6: "die", t5_f7: "Zukunft.", t5_f8: "", t5_f9: "",
    t5_tk1: "Umwandlung", t5_tk2: "bedeutet", t5_tk3: "dass", t5_tk4: "Energie", t5_tk5: "ihre", t5_tk6: "Form", t5_tk7: "wechselt.", t5_tk8: "", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Sauber", t5_bl2: "Endlich", t5_i1: "Wind", t5_i2: "Öl", t5_i3: "Sonne", t5_i4: "Gas",
    t6_title: "Recht-Review", t6_text: "Gesetze.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wer entscheidet?", t6_qa: "Richter", t6_qb: "Polizei", t6_qc: "Zeuge", t6_qd: "Bauer",
    t6_w1: "Im", t6_w2: "Rechtsstaat", t6_w3: "schützt", t6_w4: "das", t6_w5: "Gesetz", t6_w6: "die", t6_w7: "Freiheit", t6_w8: "der",
    t6_l1: "BGB", t6_r1: "Kauf", t6_l2: "StGB", t6_r2: "Mord", t6_l3: "GG", t6_r3: "Recht",
    t6_sent: "Gesetze gelten für ___.", t6_qa2: "alle", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Gewaltenteilung", t6_f2: "verhindert", t6_f3: "den", t6_f4: "Missbrauch", t6_f5: "von", t6_f6: "Macht.", t6_f7: "", t6_f8: "", t6_f9: "",
    t6_tk1: "Menschenrechte", t6_tk2: "sind", t6_tk3: "die", t6_tk4: "Basis", t6_tk5: "für", t6_tk6: "ein", t6_tk7: "friedliches", t6_tk8: "Zusammenleben.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Recht", t6_bl2: "Pflicht", t6_i1: "Wahl", t6_i2: "Steuer", t6_i3: "Reden", t6_i4: "Schule",
    t7_title: "Markt-Review", t7_text: "Handel.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wer kauft?", t7_qa: "Konsument", t7_qb: "Produzent", t7_qc: "Bank", t7_qd: "Staat",
    t7_w1: "Globalisierung", t7_w2: "vernetzt", t7_w3: "die", t7_w4: "Märkte", t7_w5: "über", t7_w6: "die", t7_w7: "ganze", t7_w8: "Welt.",
    t7_l1: "Export", t7_r1: "Raus", t7_l2: "Import", t7_r2: "Rein", t7_l3: "Zoll", t7_r3: "Steuer",
    t7_sent: "Angebot bestimmt den ___.", t7_qa2: "Preis", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Soziale", t7_f2: "Marktwirtschaft", t7_f3: "verbindet", t7_f4: "Freiheit", t7_f5: "mit", t7_f6: "Sicherheit.", t7_f7: "", t7_f8: "", t7_f9: "",
    t7_tk1: "Fairer", t7_tk2: "Handel", t7_tk3: "sorgt", t7_tk4: "für", t7_tk5: "bessere", t7_tk6: "Bedingungen", t7_tk7: "weltweit.", t7_tk8: "", t7_tk9: "", t7_tk10: "",
    t7_bl1: "Kauf", t7_bl2: "Verkauf", t7_i1: "Kunde", t7_i2: "Laden", t7_i3: "Nachfrage", t7_i4: "Angebot",
    t8_title: "Diplom", t8_text: "Endspurt!", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Ready for K8?", t8_qa: "Ja, klar!", t8_qb: "Nein", t8_qc: "Vielleicht", t8_qd: "Warte",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "du", t8_w4: "hast", t8_w5: "das", t8_w6: "K7", t8_w7: "Diplom", t8_w8: "erreicht!",
    t8_l1: "Wissen", t8_r1: "Kopf", t8_l2: "Können", t8_r2: "Hand", t8_l3: "Sieg", t8_r3: "Herz",
    t8_sent: "Ich bin ein Sachkunde- ___.", t8_qa2: "Profi", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Du", t8_f2: "hast", t8_f3: "viele", t8_f4: "komplexe", t8_f5: "Themen", t8_f6: "gemeistert", t8_f7: "und", t8_f8: "verstanden.", t8_f9: "",
    t8_tk1: "Die", t8_tk2: "Welt", t8_tk3: "der", t8_tk4: "Wissenschaft", t8_tk5: "steht", t8_tk6: "dir", t8_tk7: "jetzt", t8_tk8: "offen.", t8_tk9: "", t8_tk10: "",
    t8_bl1: "Start", t8_bl2: "Ziel", t8_i1: "Frage", t8_i2: "Diplom", t8_i3: "Lernen", t8_i4: "Erfolg",
  },
};

export const FINALE_K7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Chemie-Review", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Geo-Review", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "History-Review", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7", "t3_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Bio-Review", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Physik-Review", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Recht-Review", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Markt-Review", color: "#4CAF50" },
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

