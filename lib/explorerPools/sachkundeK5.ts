// lib/explorerPools/sachkundeK5.ts
import type { PoolTopicDef } from "./types";

export const SKELETT_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Der Bewegungsapparat",
    t1_title: "Das Skelett", t1_text: "Stütze unseres Körpers.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wie viele Knochen hat ein Erwachsener?", t1_qa: "Ca. 206", t1_qb: "Genau 100", t1_qc: "Nur 50", t1_qd: "Über 500",
    t1_w1: "Unser", t1_w2: "Skelett", t1_w3: "besteht", t1_w4: "aus", t1_w5: "vielen", t1_w6: "verschiedenen", t1_w7: "Knochen.", t1_w8: "",
    t1_l1: "Schädel", t1_r1: "Gehirnschutz", t1_l2: "Wirbelsäule", t1_r2: "Achse", t1_l3: "Brustkorb", t1_r3: "Herzschutz",
    t1_sent: "Die Knochen geben dem Körper ___.", t1_qa2: "Halt", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Röhrenknochen", t1_f2: "sind", t1_f3: "innen", t1_f4: "oft", t1_f5: "leicht", t1_f6: "und", t1_f7: "hohl.", t1_f8: "", t1_f9: "",
    t1_tk1: "Das", t1_tk2: "Skelett", t1_tk3: "wächst", t1_tk4: "in", t1_tk5: "der", t1_tk6: "Kindheit", t1_tk7: "ständig", t1_tk8: "mit.", t1_tk9: "", t1_tk10: "",
    t1_bl1: "Knochen", t1_bl2: "Organ", t1_i1: "Schädel", t1_i2: "Herz", t1_i3: "Oberschenkel", t1_i4: "Leber",
    t2_title: "Wirbelsäule", t2_text: "Doppel-S-Form für Stabilität.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Welche Form hat die Wirbelsäule?", t2_qa: "Doppel-S", t2_qb: "Gerade Linie", t2_qc: "Ein O", t2_qd: "Ein Z",
    t2_w1: "Die", t2_w2: "Wirbelsäule", t2_w3: "ist", t2_w4: "in", t2_w5: "mehrere", t2_w6: "Abschnitte", t2_w7: "unterteilt.", t2_w8: "",
    t2_l1: "Hals", t2_r1: "Oben", t2_l2: "Brust", t2_r2: "Mitte", t2_l3: "Lende", t2_r3: "Unten",
    t2_sent: "Die Bandscheiben wirken wie ___.", t2_qa2: "Stoßdämpfer", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Bandscheiben", t2_f2: "liegen", t2_f3: "zwischen", t2_f4: "den", t2_f5: "einzelnen", t2_f6: "knöchernen", t2_f7: "Wirbeln.", t2_f8: "", t2_f9: "",
    t2_tk1: "Eine", t2_tk2: "gute", t2_tk3: "Haltung", t2_tk4: "schützt", t2_tk5: "den", t2_tk6: "Rücken", t2_tk7: "vor", t2_tk8: "Schmerzen.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Teil", t2_bl2: "Kein Teil", t2_i1: "Wirbel", t2_i2: "Magen", t2_i3: "Bandscheibe", t2_i4: "Lunge",
    t3_title: "Gelenke", t3_text: "Verbindungen der Knochen.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Welches ist ein Kugelgelenk?", t3_qa: "Schultergelenk", t3_qb: "Kniegelenk", t3_qc: "Fingergelenk", t3_qd: "Schädelnaht",
    t3_w1: "Gelenke", t3_w2: "machen", t3_w3: "unseren", t3_w4: "starren", t3_w5: "Körper", t3_w6: "sehr", t3_w7: "beweglich.", t3_w8: "",
    t3_l1: "Kugelgelenk", t3_r1: "Schulter", t3_l2: "Scharnier", t3_r2: "Ellenbogen", t3_l3: "Sattelgelenk", t3_r3: "Daumen",
    t3_sent: "Gelenkschmiere mindert die ___.", t3_qa2: "Reibung", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Bänder", t3_f2: "und", t3_f3: "Kapseln", t3_f4: "halten", t3_f5: "das", t3_f6: "Gelenk", t3_f7: "zusammen.", t3_f8: "", t3_f9: "",
    t3_tk1: "Ein", t3_tk2: "Scharniergelenk", t3_tk3: "kann", t3_tk4: "man", t3_tk5: "nur", t3_tk6: "in", t3_tk7: "eine", t3_tk8: "Richtung", t3_tk9: "beugen.", t3_tk10: "",
    t3_bl1: "Gelenkform", t3_bl2: "Knochen", t3_i1: "Kugel", t3_i2: "Rippe", t3_i3: "Scharnier", t3_i4: "Schädel",
    t4_title: "Muskeln", t4_text: "Motor der Bewegung.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wie arbeiten Muskeln meist zusammen?", t4_qa: "Als Gegenspieler", t4_qb: "Alle gleichzeitig", t4_qc: "Gar nicht", t4_qd: "Zufällig",
    t4_w1: "Muskeln", t4_w2: "können", t4_w3: "sich", t4_w4: "zusammenziehen", t4_w5: "und", t4_w6: "wieder", t4_w7: "entspannen.", t4_w8: "",
    t4_l1: "Bizeps", t4_r1: "Beuger", t4_l2: "Trizeps", t4_r2: "Strecker", t4_l3: "Sehne", t4_r3: "Befestigung",
    t4_sent: "Der Bizeps beugt den ___.", t4_qa2: "Arm", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Bewegung", t4_f2: "entsteht", t4_f3: "immer", t4_f4: "durch", t4_f5: "Zug", t4_f6: "an", t4_f7: "den", t4_f8: "Knochen.", t4_f9: "",
    t4_tk1: "Wenn", t4_tk2: "der", t4_tk3: "Bizeps", t4_tk4: "anspannt", t4_tk5: "muss", t4_tk6: "der", t4_tk7: "Trizeps", t4_tk8: "lockerlassen.", t4_tk9: "", t4_tk10: "",
    t4_bl1: "Anspannung", t4_bl2: "Entspannung", t4_i1: "Hart", t4_i2: "Weich", t4_i3: "Kurz", t4_i4: "Lang",
    t5_title: "Knochenaufbau", t5_text: "Außen hart, innen weich.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was macht Knochen hart?", t5_qa: "Calcium", t5_qb: "Zucker", t5_qc: "Eisen", t5_qd: "Wasser",
    t5_w1: "Kalzium", t5_w2: "aus", t5_w3: "der", t5_w4: "Nahrung", t5_w5: "stärkt", t5_w6: "unsere", t5_w7: "Knochen.", t5_w8: "",
    t5_l1: "Knochenhaut", t5_r1: "Hülle", t5_l2: "Knochenmark", t5_r2: "Innen", t5_l3: "Knorpel", t5_r3: "Schutz",
    t5_sent: "Im Inneren befindet sich das ___.", t5_qa2: "Knochenmark", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Blutzellen", t5_f2: "werden", t5_f3: "oft", t5_f4: "im", t5_f5: "roten", t5_f6: "Knochenmark", t5_f7: "gebildet.", t5_f8: "", t5_f9: "",
    t5_tk1: "Milchprodukte", t5_tk2: "enthalten", t5_tk3: "viel", t5_tk4: "Kalzium", t5_tk5: "für", t5_tk6: "ein", t5_tk7: "starkes", t5_tk8: "Skelett.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Fest", t5_bl2: "Weich", t5_i1: "Kompakta", t5_i2: "Knochenmark", t5_i3: "Knorpel", t5_i4: "Schmiere",
    t6_title: "Haltung", t6_text: "Gesund sitzen und tragen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie trägt man den Ranzen am besten?", t6_qa: "Auf beiden Schultern", t6_qb: "In einer Hand", t6_qc: "Auf dem Kopf", t6_qd: "Gar nicht",
    t6_w1: "Schweres", t6_w2: "Heben", t6_w3: "sollte", t6_w4: "man", t6_w5: "immer", t6_w6: "aus", t6_w7: "den", t6_w8: "Beinen",
    t6_l1: "Gerade", t6_r1: "Gesund", t6_l2: "Gekrümmt", t6_r2: "Schädlich", t6_l3: "Gewicht", t6_r3: "Nah am Körper",
    t6_sent: "Der Rücken soll beim Heben ___ bleiben.", t6_qa2: "gerade", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Ein", t6_f2: "gut", t6_f3: "eingestellter", t6_f4: "Stuhl", t6_f5: "ist", t6_f6: "wichtig", t6_f7: "beim", t6_f8: "Lernen.", t6_f9: "",
    t6_tk1: "Zu", t6_tk2: "wenig", t6_tk3: "Bewegung", t6_tk4: "schadet", t6_tk5: "unseren", t6_tk6: "Muskeln", t6_tk7: "und", t6_tk8: "Gelenken.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Gesund", t6_bl2: "Schädlich", t6_i1: "Aufrecht", t6_i2: "Rundrücken", t6_i3: "Beidseitig", t6_i4: "Einseitig",
    t7_title: "Verletzungen", t7_text: "Wenn der Knochen bricht.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wie nennt man einen Knochenbruch medizinisch?", t7_qa: "Fraktur", t7_qb: "Fissur", t7_qc: "Zerrung", t7_qd: "Prellung",
    t7_w1: "Nach", t7_w2: "einem", t7_w3: "Bruch", t7_w4: "muss", t7_w5: "der", t7_w6: "Knochen", t7_w7: "wieder", t7_w8: "zusammenwachsen.",
    t7_l1: "Bruch", t7_r1: "Gips", t7_l2: "Verstauchung", t7_r2: "Verband", t7_l3: "Röntgen", t7_r3: "Bild",
    t7_sent: "Ein Gips stellt den Knochen ___.", t7_qa2: "ruhig", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Ein", t7_f2: "Röntgenbild", t7_f3: "zeigt", t7_f4: "genau", t7_f5: "wo", t7_f6: "der", t7_f7: "Knochen", t7_f8: "kaputt", t7_f9: "ist.",
    t7_tk1: "Der", t7_tk2: "Körper", t7_tk3: "kann", t7_tk4: "gebrochene", t7_tk5: "Knochen", t7_tk6: "ganz", t7_tk7: "von", t7_tk8: "selbst", t7_tk9: "heilen.", t7_tk10: "",
    t7_bl1: "Arzt", t7_bl2: "Zuhause", t7_i1: "Röntgen", t7_i2: "Pflaster", t7_i3: "Gips", t7_i4: "Ausruhen",
    t8_title: "Skelett-Check", t8_text: "Alles über Knochen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wo ist das kleinste Knöchelchen?", t8_qa: "Im Ohr", t8_qb: "Im Fuß", t8_qc: "Im Finger", t8_qd: "In der Nase",
    t8_w1: "Sport", t8_w2: "und", t8_w3: "gute", t8_w4: "Ernährung", t8_w5: "sind", t8_w6: "wichtig", t8_w7: "für", t8_w8: "unsere",
    t8_l1: "Steigbügel", t8_r1: "Winzig", t8_l2: "Oberschenkel", t8_r2: "Groß", t8_l3: "Schädel", t8_r3: "Rund",
    t8_sent: "Wir müssen unser Skelett gut ___.", t8_qa2: "pflegen", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Das", t8_f2: "Skelett", t8_f3: "eines", t8_f4: "Erwachsenen", t8_f5: "wiegt", t8_f6: "fast", t8_f7: "zehn", t8_f8: "Kilogramm.", t8_f9: "",
    t8_tk1: "Unser", t8_tk2: "Körper", t8_tk3: "ist", t8_tk4: "ein", t8_tk5: "sehr", t8_tk6: "komplexes", t8_tk7: "und", t8_tk8: "schlaues", t8_tk9: "System.", t8_tk10: "",
    t8_bl1: "Knochen", t8_bl2: "Nicht Knochen", t8_i1: "Rippe", t8_i2: "Herz", t8_i3: "Wirbel", t8_i4: "Blut",
  },
};

export const SKELETT_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Das Skelett", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wirbelsäule", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Gelenke", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Muskeln", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Knochenaufbau", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Haltung", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Verletzungen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Skelett-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const ZELLE_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Die Zelle",
    t1_title: "Das Mikroskop", t1_text: "Unsichtbares sichtbar machen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer hilft, Zellen zu sehen?", t1_qa: "Mikroskop", t1_qb: "Teleskop", t1_qc: "Lupe", t1_qd: "Brille",
    t1_w1: "Mit", t1_w2: "dem", t1_w3: "Mikroskop", t1_w4: "können", t1_w5: "wir", t1_w6: "Zellen", t1_w7: "genau", t1_w8: "beobachten.",
    t1_l1: "Okular", t1_r1: "Auge", t1_l2: "Objektiv", t1_r2: "Linse", t1_l3: "Objekttisch", t1_r3: "Ablage",
    t1_sent: "Ein Mikroskop vergrößert sehr ___.", t1_qa2: "stark", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Das", t1_f2: "Licht", t1_f3: "scheint", t1_f4: "von", t1_f5: "unten", t1_f6: "durch", t1_f7: "das", t1_f8: "Präparat.", t1_f9: "",
    t1_tk1: "Man", t1_tk2: "muss", t1_tk3: "sehr", t1_tk4: "vorsichtig", t1_tk5: "am", t1_tk6: "Triebrad", t1_tk7: "des", t1_tk8: "Mikroskops", t1_tk9: "drehen.", t1_tk10: "",
    t1_bl1: "Mikroskop", t1_bl2: "Teleskop", t1_i1: "Okular", t1_i2: "Sterne", t1_i3: "Objektiv", t1_i4: "Mond",
    t2_title: "Zellbestandteile", t2_text: "Bausteine des Lebens.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Was steuert die Zelle?", t2_qa: "Zellkern", t2_qb: "Membran", t2_qc: "Vakuole", t2_qd: "Wasser",
    t2_w1: "Alle", t2_w2: "Lebewesen", t2_w3: "bestehen", t2_w4: "aus", t2_w5: "vielen", t2_w6: "kleinen", t2_w7: "Zellen.", t2_w8: "",
    t2_l1: "Kern", t2_r1: "Steuerung", t2_l2: "Membran", t2_r2: "Grenze", t2_l3: "Plasma", t2_r3: "Flüssigkeit",
    t2_sent: "Die Zellmembran ist die äußere ___.", t2_qa2: "Hülle", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Der", t2_f2: "Zellkern", t2_f3: "enthält", t2_f4: "das", t2_f5: "wichtige", t2_f6: "Erbgut", t2_f7: "der", t2_f8: "Pflanze.", t2_f9: "",
    t2_tk1: "Im", t2_tk2: "Zellplasma", t2_tk3: "schwimmen", t2_tk4: "viele", t2_tk5: "kleine", t2_tk6: "Bestandteile", t2_tk7: "der", t2_tk8: "Zelle.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Pflanze", t2_bl2: "Tier", t2_i1: "Chloroplast", t2_i2: "Kern", t2_i3: "Zellwand", t2_i4: "Membran",
    t3_title: "Pflanzenzelle", t3_text: "Warum Pflanzen grün sind.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was gibt der Pflanzenzelle Form?", t3_qa: "Zellwand", t3_qb: "Kern", t3_qc: "Wasser", t3_qd: "Blattgrün",
    t3_w1: "Pflanzenzellen", t3_w2: "haben", t3_w3: "eine", t3_w4: "feste", t3_w5: "Zellwand", t3_w6: "aus", t3_w7: "Zellulose.", t3_w8: "",
    t3_l1: "Chloroplast", t3_r1: "Grün", t3_l2: "Zellwand", t3_r2: "Stabilität", t3_l3: "Vakuole", t3_r3: "Wasserspeicher",
    t3_sent: "Chloroplasten machen ___.", t3_qa2: "Fotosynthese", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "In", t3_f2: "der", t3_f3: "Vakuole", t3_f4: "wird", t3_f5: "sehr", t3_f6: "viel", t3_f7: "Wasser", t3_f8: "gespeichert.", t3_f9: "",
    t3_tk1: "Chloroplasten", t3_tk2: "nutzen", t3_tk3: "das", t3_tk4: "Sonnenlicht", t3_tk5: "um", t3_tk6: "Zucker", t3_tk7: "herzustellen.", t3_tk8: "", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Pflanze", t3_bl2: "Tier", t3_i1: "Zellwand", t3_i2: "Kern", t3_i3: "Chloroplast", t3_i4: "Zellplasma",
    t4_title: "Tierzelle", t4_text: "Unterschied zur Pflanze.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was fehlt der Tierzelle?", t4_qa: "Zellwand", t4_qb: "Kern", t4_qc: "Membran", t4_qd: "Plasma",
    t4_w1: "Tierische", t4_w2: "Zellen", t4_w3: "haben", t4_w4: "keine", t4_w5: "festen", t4_w6: "Zellwände", t4_w7: "als", t4_w8: "Hülle.",
    t4_l1: "Kern", t4_r1: "Zentrale", t4_l2: "Membran", t4_r2: "Hülle", t4_l3: "Form", t4_r3: "Veränderlich",
    t4_sent: "Tierzellen sind oft sehr ___.", t4_qa2: "flexibel", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Unsere", t4_f2: "Haut", t4_f3: "besteht", t4_f4: "auch", t4_f5: "aus", t4_f6: "sehr", t4_f7: "vielen", t4_f8: "Zellen.", t4_f9: "",
    t4_tk1: "Zellatmung", t4_tk2: "findet", t4_tk3: "in", t4_tk4: "den", t4_tk5: "Mitochondrien", t4_tk6: "der", t4_tk7: "Zelle", t4_tk8: "statt.", t4_tk9: "", t4_tk10: "",
    t4_bl1: "Gemeinsam", t4_bl2: "Nur Pflanze", t4_i1: "Kern", t4_i2: "Vakuole", t4_i3: "Membran", t4_i4: "Chloroplast",
    t5_title: "Einzeller", t5_text: "Leben aus einer Zelle.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was ist ein Einzeller?", t5_qa: "Pantoffeltierchen", t5_qb: "Elefant", t5_qc: "Baum", t5_qd: "Mensch",
    t5_w1: "Pantoffeltierchen", t5_w2: "schwimmen", t5_w3: "mit", t5_w4: "vielen", t5_w5: "feinen", t5_w6: "Wimpern", t5_w7: "im", t5_w8: "Teich.",
    t5_l1: "Pantoffeltierchen", t5_r1: "Wimpern", t5_l2: "Amöbe", t5_r2: "Scheinfüßchen", t5_l3: "Bakterium", t5_r3: "Klein",
    t5_sent: "Einzeller leben oft im ___.", t5_qa2: "Wasser", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Sie", t5_f2: "können", t5_f3: "alles", t5_f4: "was", t5_f5: "ein", t5_f6: "Lebewesen", t5_f7: "können", t5_f8: "muss.", t5_f9: "",
    t5_tk1: "Einzeller", t5_tk2: "pflanzen", t5_tk3: "sich", t5_tk4: "meist", t5_tk5: "durch", t5_tk6: "einfache", t5_tk7: "Zellteilung", t5_tk8: "fort.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Einzeller", t5_bl2: "Vielzeller", t5_i1: "Amöbe", t5_i2: "Hund", t5_i3: "Bakterium", t5_i4: "Baum",
    t6_title: "Zellteilung", t6_text: "Wie Lebewesen wachsen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Wie vermehren sich Zellen?", t6_qa: "Teilung", t6_qb: "Magie", t6_qc: "Essen", t6_qd: "Kleben",
    t6_w1: "Vor", t6_w2: "der", t6_w3: "Teilung", t6_w4: "verdoppelt", t6_w5: "sich", t6_w6: "das", t6_w7: "ganze", t6_w8: "Erbgut.",
    t6_l1: "Start", t6_r1: "1 Zelle", t6_l2: "Mitte", t6_r2: "Teilung", t6_l3: "Ende", t6_r3: "2 Zellen",
    t6_sent: "Aus einer Zelle werden ___.", t6_qa2: "zwei", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Wachstum", t6_f2: "bedeutet", t6_f3: "dass", t6_f4: "die", t6_f5: "Anzahl", t6_f6: "der", t6_f7: "Zellen", t6_f8: "steigt.", t6_f9: "",
    t6_tk1: "Täglich", t6_tk2: "erneuert", t6_tk3: "unser", t6_tk4: "Körper", t6_tk5: "Millionen", t6_tk6: "von", t6_tk7: "alten", t6_tk8: "Hautzellen.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Wachsen", t6_bl2: "Schrumpfen", t6_i1: "Teilung", t6_i2: "Absterben", t6_i3: "Verdopplung", t6_i4: "Zerfall",
    t7_title: "Gewebe", t7_text: "Zellverbände.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was bilden gleiche Zellen?", t7_qa: "Gewebe", t7_qb: "Auto", t7_qc: "Stein", t7_qd: "Wasser",
    t7_w1: "Viele", t7_w2: "gleiche", t7_w3: "Zellen", t7_w4: "bilden", t7_w5: "zusammen", t7_w6: "ein", t7_w7: "starkes", t7_w8: "Gewebe.",
    t7_l1: "Zelle", t7_r1: "Baustein", t7_l2: "Gewebe", t7_r2: "Verband", t7_l3: "Organ", t7_r3: "Körperteil",
    t7_sent: "Muskelgewebe besteht aus ___.", t7_qa2: "Muskelzellen", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Verschiedene", t7_f2: "Gewebe", t7_f3: "bauen", t7_f4: "unsere", t7_f5: "wichtigen", t7_f6: "Organe", t7_f7: "komplett", t7_f8: "auf.", t7_f9: "",
    t7_tk1: "Blut", t7_tk2: "wird", t7_tk3: "in", t7_tk4: "der", t7_tk5: "Biologie", t7_tk6: "als", t7_tk7: "flüssiges", t7_tk8: "Gewebe", t7_tk9: "bezeichnet.", t7_tk10: "",
    t7_bl1: "Zelle", t7_bl2: "Gewebe", t7_i1: "Muskelzelle", t7_i2: "Muskel", t7_i3: "Nervenzelle", t7_i4: "Nervstrang",
    t8_title: "Zellen-Check", t8_text: "Mikrobiologie.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Kleinste Lebewesen?", t8_qa: "Bakterien", t8_qb: "Mäuse", t8_qc: "Flöhe", t8_qd: "Ameisen",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "die", t8_w4: "Welt", t8_w5: "der", t8_w6: "Mikrobiologie", t8_w7: "genau", t8_w8: "kennengelernt.",
    t8_l1: "Mikroskop", t8_r1: "Gerät", t8_l2: "Präparat", t8_r2: "Objekt", t8_l3: "Zelle", t8_r3: "Baustein",
    t8_sent: "Der Zellkern ist der ___.", t8_qa2: "Chef", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Ohne", t8_f2: "Zellen", t8_f3: "gäbe", t8_f4: "es", t8_f5: "kein", t8_f6: "Leben", t8_f7: "auf", t8_f8: "Erden.", t8_f9: "",
    t8_tk1: "Die", t8_tk2: "Entdeckung", t8_tk3: "der", t8_tk4: "Zelle", t8_tk5: "war", t8_tk6: "ein", t8_tk7: "großer", t8_tk8: "Durchbruch.", t8_tk9: "", t8_tk10: "",
    t8_bl1: "Sichtbar", t8_bl2: "Unsichtbar", t8_i1: "Baum", t8_i2: "Bakterium", t8_i3: "Mensch", t8_i4: "Zellkern",
  },
};

export const ZELLE_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Das Mikroskop", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Zellbestandteile", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Pflanzenzelle", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Tierzelle", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Einzeller", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Zellteilung", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Gewebe", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Zellen-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const TIERE_WINTER_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Tiere im Winter",
    t1_title: "Winterruhe", t1_text: "Ab und zu aufwachen.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wer hält Winterruhe?", t1_qa: "Eichhörnchen", t1_qb: "Igel", t1_qc: "Frosch", t1_qd: "Storch",
    t1_w1: "Winterruher", t1_w2: "wachen", t1_w3: "manchmal", t1_w4: "auf", t1_w5: "um", t1_w6: "etwas", t1_w7: "zu", t1_w8: "fressen.",
    t1_l1: "Eichhörnchen", t1_r1: "Nüsse", t1_l2: "Dachs", t1_r2: "Höhle", t1_l3: "Ruhe", t1_r3: "Schlaf",
    t1_sent: "Das Eichhörnchen sucht seine ___.", t1_qa2: "Verstecke", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Ihre", t1_f2: "Körpertemperatur", t1_f3: "sinkt", t1_f4: "dabei", t1_f5: "nur", t1_f6: "sehr", t1_f7: "wenig", t1_f8: "ab.", t1_f9: "",
    t1_tk1: "Sie", t1_tk2: "haben", t1_tk3: "im", t1_tk4: "Herbst", t1_tk5: "viele", t1_tk6: "Vorräte", t1_tk7: "im", t1_tk8: "Boden", t1_tk9: "versteckt.", t1_tk10: "",
    t1_bl1: "Winterruhe", t1_bl2: "Winterschlaf", t1_i1: "Eichhörnchen", t1_i2: "Igel", t1_i3: "Dachs", t1_i4: "Fledermaus",
    t2_title: "Winterschlaf", t2_text: "Tiefschlaf.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wer hält Winterschlaf?", t2_qa: "Igel", t2_qb: "Reh", t2_qc: "Hund", t2_qd: "Fuchs",
    t2_w1: "Winterschläfer", t2_w2: "fressen", t2_w3: "sich", t2_w4: "im", t2_w5: "Herbst", t2_w6: "eine", t2_w7: "dicke", t2_w8: "Fettschicht",
    t2_l1: "Igel", t2_r1: "Laubhaufen", t2_l2: "Murmeltier", t2_r2: "Erdbau", t2_l3: "Fledermaus", t2_r3: "Höhle",
    t2_sent: "Der Herzschlag wird sehr ___.", t2_qa2: "langsam", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Atmung", t2_f3: "wird", t2_f4: "während", t2_f5: "des", t2_f6: "Schlafes", t2_f7: "sehr", t2_f8: "flach.", t2_f9: "",
    t2_tk1: "Ein", t2_tk2: "Igel", t2_tk3: "atmet", t2_tk4: "im", t2_tk5: "Winter", t2_tk6: "nur", t2_tk7: "noch", t2_tk8: "ganz", t2_tk9: "selten.", t2_tk10: "",
    t2_bl1: "Aktiv", t2_bl2: "Schläft", t2_i1: "Fuchs", t2_i2: "Igel", t2_i3: "Reh", t2_i4: "Murmeltier",
    t3_title: "Winterstarre", t3_text: "Erstarren bei Kälte.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was machen Frösche?", t3_qa: "Winterstarre", t3_qb: "Afrika-Flug", t3_qc: "Hausbau", t3_qd: "Winterschlaf",
    t3_w1: "Kröten", t3_w2: "und", t3_w3: "Schlangen", t3_w4: "verstecken", t3_w5: "sich", t3_w6: "im", t3_w7: "kalten", t3_w8: "Schlamm.",
    t3_l1: "Frosch", t3_r1: "Schlamm", t3_l2: "Eidechse", t3_r2: "Stein", t3_l3: "Insekt", t3_r3: "Erde",
    t3_sent: "Die Körpertemperatur passt sich ___ an.", t3_qa2: "außen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Wenn", t3_f2: "es", t3_f3: "wieder", t3_f4: "warm", t3_f5: "wird", t3_f6: "wachen", t3_f7: "sie", t3_f8: "auf.", t3_f9: "",
    t3_tk1: "Wechselwarme", t3_tk2: "Tiere", t3_tk3: "können", t3_tk4: "ihre", t3_tk5: "Körperwärme", t3_tk6: "nicht", t3_tk7: "selbst", t3_tk8: "steuern.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Starr", t3_bl2: "Warm", t3_i1: "Frosch", t3_i2: "Fuchs", t3_i3: "Schlange", t3_i4: "Hase",
    t4_title: "Zugvögel", t4_text: "In den Süden.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Warum fliegen sie weg?", t4_qa: "Kein Futter hier", t4_qb: "Dunkelheit", t4_qc: "Schneehass", t4_qd: "Spaß",
    t4_w1: "Viele", t4_w2: "Vögel", t4_w3: "fliegen", t4_w4: "Tausende", t4_w5: "Kilometer", t4_w6: "bis", t4_w7: "nach", t4_w8: "Afrika.",
    t4_l1: "Storch", t4_r1: "Afrika", t4_l2: "Schwalbe", t4_r2: "Süden", t4_l3: "Kuckuck", t4_r3: "Warm",
    t4_sent: "Störche fliegen in ___.", t4_qa2: "Formation", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Sie", t4_f2: "orientieren", t4_f3: "sich", t4_f4: "am", t4_f5: "Magnetfeld", t4_f6: "der", t4_f7: "Erde.", t4_f8: "", t4_f9: "",
    t4_tk1: "Standvögel", t4_tk2: "wie", t4_tk3: "die", t4_tk4: "Meise", t4_tk5: "bleiben", t4_tk6: "hingegen", t4_tk7: "hier", t4_tk8: "bei", t4_tk9: "uns.", t4_tk10: "",
    t4_bl1: "Zugvogel", t4_bl2: "Standvogel", t4_i1: "Storch", t4_i2: "Amsel", t4_i3: "Schwalbe", t4_i4: "Spatz",
    t5_title: "Standvögel", t5_text: "Sie bleiben hier.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Wer bleibt da?", t5_qa: "Meise", t5_qb: "Storch", t5_qc: "Schwalbe", t5_qd: "Kuckuck",
    t5_w1: "Amseln", t5_w2: "und", t5_w3: "Spatzen", t5_w4: "suchen", t5_w5: "hier", t5_w6: "im", t5_w7: "Schnee", t5_w8: "nach",
    t5_l1: "Meise", t5_r1: "Körner", t5_l2: "Rotkehlchen", t5_r2: "Beeren", t5_l3: "Spatz", t5_r3: "Krümel",
    t5_sent: "Vögel plustern sich ___.", t5_qa2: "auf", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Ein", t5_f2: "Futterhaus", t5_f3: "hilft", t5_f4: "den", t5_f5: "Vögeln", t5_f6: "durch", t5_f7: "den", t5_f8: "Winter.", t5_f9: "",
    t5_tk1: "Das", t5_tk2: "aufgeplusterte", t5_tk3: "Gefieder", t5_tk4: "hält", t5_tk5: "die", t5_tk6: "Vögel", t5_tk7: "schön", t5_tk8: "warm.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Körner", t5_bl2: "Insekten", t5_i1: "Fink", t5_i2: "Schwalbe", t5_i3: "Spatz", t5_i4: "Kuckuck",
    t6_title: "Winteraktive", t6_text: "Fuchs und Reh.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Schutz vor Kälte?", t6_qa: "Winterfell", t6_qb: "Mantel", t6_qc: "Feuer", t6_qd: "Decke",
    t6_w1: "Der", t6_w2: "Fuchs", t6_w3: "sucht", t6_w4: "auch", t6_w5: "im", t6_w6: "Schnee", t6_w7: "nach", t6_w8: "kleinen",
    t6_l1: "Fell", t6_r1: "Dicht", t6_l2: "Schnee", t6_r2: "Kalt", t6_l3: "Spur", t6_r3: "Abdruck",
    t6_sent: "Rehe suchen unter dem Schnee ___.", t6_qa2: "Moos", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Wildschweine", t6_f2: "finden", t6_f3: "noch", t6_f4: "Eicheln", t6_f5: "unter", t6_f6: "dem", t6_f7: "tiefen", t6_f8: "Schnee.", t6_f9: "",
    t6_tk1: "Ein", t6_tk2: "dickes", t6_tk3: "Winterfell", t6_tk4: "isoliert", t6_tk5: "den", t6_tk6: "Körper", t6_tk7: "hervorragend", t6_tk8: "gegen", t6_tk9: "Kälte.", t6_tk10: "",
    t6_bl1: "Winterfell", t6_bl2: "Kein Fell", t6_i1: "Fuchs", t6_i2: "Frosch", t6_i3: "Reh", t6_i4: "Storch",
    t7_title: "Fütterung", t7_text: "Helfen im Winter.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Was ist verboten?", t7_qa: "Salzbrot", t7_qb: "Körner", t7_qc: "Hafer", t7_qd: "Äpfel",
    t7_w1: "Meisenknödel", t7_w2: "kann", t7_w3: "man", t7_w4: "ganz", t7_w5: "einfach", t7_w6: "selbst", t7_w7: "zu", t7_w8: "Hause",
    t7_l1: "Apfel", t7_r1: "Amsel", t7_l2: "Körner", t7_r2: "Fink", t7_l3: "Fett", t7_r3: "Meise",
    t7_sent: "Das Futterhaus muss ___ sein.", t7_qa2: "sauber", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Wir", t7_f2: "stellen", t7_f3: "eine", t7_f4: "Schale", t7_f5: "mit", t7_f6: "frischem", t7_f7: "Wasser", t7_f8: "auf.", t7_f9: "",
    t7_tk1: "Streue", t7_tk2: "kein", t7_tk3: "Futter", t7_tk4: "auf", t7_tk5: "den", t7_tk6: "nassen", t7_tk7: "und", t7_tk8: "dreckigen", t7_tk9: "Boden.", t7_tk10: "",
    t7_bl1: "Gut", t7_bl2: "Schlecht", t7_i1: "Körner", t7_i2: "Chips", t7_i3: "Apfel", t7_i4: "Salzbrezel",
    t8_title: "Winter-Check", t8_text: "Überlebensstrategien.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was macht der Igel?", t8_qa: "Winterschlaf", t8_qb: "Starre", t8_qc: "Ruhe", t8_qd: "Flug",
    t8_w1: "Die", t8_w2: "Natur", t8_w3: "hat", t8_w4: "viele", t8_w5: "clevere", t8_w6: "Tricks", t8_w7: "für", t8_w8: "die",
    t8_l1: "Frosch", t8_r1: "Starre", t8_l2: "Igel", t8_r2: "Schlaf", t8_l3: "Eichhörnchen", t8_r3: "Ruhe",
    t8_sent: "Tiere haben schlaue ___.", t8_qa2: "Tricks", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "stören", t8_f3: "schlafende", t8_f4: "Tiere", t8_f5: "niemals", t8_f6: "in", t8_f7: "ihrem", t8_f8: "Versteck.", t8_f9: "",
    t8_tk1: "Im", t8_tk2: "Frühling", t8_tk3: "erwacht", t8_tk4: "der", t8_tk5: "Wald", t8_tk6: "wieder", t8_tk7: "zu", t8_tk8: "neuem", t8_tk9: "Leben.", t8_tk10: "",
    t8_bl1: "Hier", t8_bl2: "Süden", t8_i1: "Reh", t8_i2: "Storch", t8_i3: "Fuchs", t8_i4: "Schwalbe",
  },
};

export const TIERE_WINTER_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Winterruhe", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Winterschlaf", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Winterstarre", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zugvögel", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Standvögel", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Winteraktive", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Fütterung", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Winter-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const STEINZEIT_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Leben in der Steinzeit",
    t1_title: "Altsteinzeit", t1_text: "Jäger und Sammler.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Werkzeugmaterial?", t1_qa: "Stein", t1_qb: "Eisen", t1_qc: "Plastik", t1_qd: "Glas",
    t1_w1: "Die", t1_w2: "Menschen", t1_w3: "zogen", t1_w4: "als", t1_w5: "Nomaden", t1_w6: "den", t1_w7: "Tierherden", t1_w8: "hinterher.",
    t1_l1: "Speer", t1_r1: "Jagen", t1_l2: "Fell", t1_r2: "Kleidung", t1_l3: "Höhle", t1_r3: "Wohnen",
    t1_sent: "Feuerstein heißt auch ___.", t1_qa2: "Flint", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Beeren", t1_f2: "und", t1_f3: "Wurzeln", t1_f4: "waren", t1_f5: "wichtige", t1_f6: "Nahrung", t1_f7: "für", t1_f8: "sie.", t1_f9: "",
    t1_tk1: "Das", t1_tk2: "Feuer", t1_tk3: "bot", t1_tk4: "Schutz", t1_tk5: "vor", t1_tk6: "gefährlichen", t1_tk7: "und", t1_tk8: "wilden", t1_tk9: "Tieren.", t1_tk10: "",
    t1_bl1: "Werkzeug", t1_bl2: "Nahrung", t1_i1: "Faustkeil", t1_i2: "Beere", t1_i3: "Speer", t1_i4: "Fleisch",
    t2_title: "Das Feuer", t2_text: "Wichtigste Entdeckung.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie macht man Feuer?", t2_qa: "Steine schlagen", t2_qb: "Knopfdruck", t2_qc: "Feuerzeug", t2_qd: "Sonne",
    t2_w1: "Mit", t2_w2: "Zunderschwamm", t2_w3: "fängt", t2_w4: "man", t2_w5: "die", t2_w6: "kleinen", t2_w7: "heißen", t2_w8: "Funken",
    t2_l1: "Licht", t2_r1: "Sehen", t2_l2: "Wärme", t2_r2: "Heizen", t2_l3: "Schutz", t2_r3: "Tiere",
    t2_sent: "Feuer machte Fleisch ___.", t2_qa2: "weich", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Rund", t2_f2: "um", t2_f3: "das", t2_f4: "Feuer", t2_f5: "versammelte", t2_f6: "sich", t2_f7: "die", t2_f8: "ganze", t2_f9: "Sippe.",
    t2_tk1: "Die", t2_tk2: "Menschen", t2_tk3: "mussten", t2_tk4: "das", t2_tk5: "Feuer", t2_tk6: "immer", t2_tk7: "gut", t2_tk8: "bewachen.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Nutzen", t2_bl2: "Gefahr", t2_i1: "Kochen", t2_i2: "Verbrennen", t2_i3: "Licht", t2_i4: "Waldbrand",
    t3_title: "Eiszeit-Tiere", t3_text: "Mammut & Co.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wer lebte damals?", t3_qa: "Mammut", t3_qb: "Dino", t3_qc: "Kuh", t3_qd: "Schaf",
    t3_w1: "Säbelzahntiger", t3_w2: "waren", t3_w3: "gefährliche", t3_w4: "Raubtiere", t3_w5: "in", t3_w6: "der", t3_w7: "kalten", t3_w8: "Eiszeit.",
    t3_l1: "Mammut", t3_r1: "Fell", t3_l2: "Säbelzahn", t3_r2: "Zähne", t3_l3: "Rentier", t3_r3: "Geweih",
    t3_sent: "Das Mammut hatte dickes ___.", t3_qa2: "Fell", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Aus", t3_f2: "Knochen", t3_f3: "wurden", t3_f4: "Nadeln", t3_f5: "und", t3_f6: "kleiner", t3_f7: "Schmuck", t3_f8: "geschnitzt.", t3_f9: "",
    t3_tk1: "Höhlenmalereien", t3_tk2: "zeigen", t3_tk3: "uns", t3_tk4: "heute", t3_tk5: "noch", t3_tk6: "die", t3_tk7: "Tiere", t3_tk8: "von", t3_tk9: "damals.", t3_tk10: "",
    t3_bl1: "Eiszeit", t3_bl2: "Heute", t3_i1: "Mammut", t3_i2: "Kuh", t3_i3: "Säbelzahntiger", t3_i4: "Hund",
    t4_title: "Faustkeil", t4_text: "Das Universaltool.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was ist ein Faustkeil?", t4_qa: "Steinwerkzeug", t4_qb: "Hammer", t4_qc: "Säge", t4_qd: "Bohrer",
    t4_w1: "Durch", t4_w2: "geschicktes", t4_w3: "Abschlagen", t4_w4: "wurden", t4_w5: "die", t4_w6: "Steine", t4_w7: "sehr", t4_w8: "scharf.",
    t4_l1: "Schaben", t4_r1: "Fell", t4_l2: "Schneiden", t4_r2: "Fleisch", t4_l3: "Bohren", t4_r3: "Holz",
    t4_sent: "Er ist scharf wie ein ___.", t4_qa2: "Messer", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Mit", t4_f2: "Pech", t4_f3: "klebte", t4_f4: "man", t4_f5: "Pfeilspitzen", t4_f6: "an", t4_f7: "den", t4_f8: "Holzstab.", t4_f9: "",
    t4_tk1: "Birkenpech", t4_tk2: "war", t4_tk3: "der", t4_tk4: "erste", t4_tk5: "Klebstoff", t4_tk6: "in", t4_tk7: "der", t4_tk8: "Geschichte", t4_tk9: "der", t4_tk10: "Menschheit.",
    t4_bl1: "Stein", t4_bl2: "Holz", t4_i1: "Faustkeil", t4_i2: "Speer", t4_i3: "Schaber", t4_i4: "Bogen",
    t5_title: "Jungsteinzeit", t5_text: "Sesshaftigkeit.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was erfanden sie?", t5_qa: "Ackerbau", t5_qb: "Auto", t5_qc: "Rad", t5_qd: "Glas",
    t5_w1: "Die", t5_w2: "Menschen", t5_w3: "bauten", t5_w4: "feste", t5_w5: "Häuser", t5_w6: "aus", t5_w7: "Holz", t5_w8: "und",
    t5_l1: "Acker", t5_r1: "Weizen", t5_l2: "Tiere", t5_r2: "Schaf", t5_l3: "Dorf", t5_r3: "Haus",
    t5_sent: "Menschen bauten feste ___.", t5_qa2: "Häuser", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Sie", t5_f2: "lernten", t5_f3: "Töpfe", t5_f4: "aus", t5_f5: "Ton", t5_f6: "im", t5_f7: "Feuer", t5_f8: "zu", t5_f9: "brennen.",
    t5_tk1: "Getreide", t5_tk2: "wurde", t5_tk3: "mit", t5_tk4: "Mahlsteinen", t5_tk5: "zu", t5_tk6: "feinem", t5_tk7: "Mehl", t5_tk8: "zerrieben.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Nomade", t5_bl2: "Bauer", t5_i1: "Höhle", t5_i2: "Haus", t5_i3: "Jagen", t5_i4: "Acker",
    t6_title: "Weben & Ton", t6_text: "Erfindungen.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Material für Töpfe?", t6_qa: "Ton", t6_qb: "Eisen", t6_qc: "Glas", t6_qd: "Holz",
    t6_w1: "Mit", t6_w2: "dem", t6_w3: "Webstuhl", t6_w4: "konnten", t6_w5: "die", t6_w6: "Menschen", t6_w7: "Stoffe", t6_w8: "herstellen.",
    t6_l1: "Ton", t6_r1: "Topf", t6_l2: "Wolle", t6_r2: "Kleid", t6_l3: "Stein", t6_r3: "Axt",
    t6_sent: "Keramik wird im Ofen ___.", t6_qa2: "gebrannt", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Vorratsgefäße", t6_f2: "waren", t6_f3: "wichtig", t6_f4: "um", t6_f5: "das", t6_f6: "Getreide", t6_f7: "zu", t6_f8: "lagern.", t6_f9: "",
    t6_tk1: "Verzierungen", t6_tk2: "auf", t6_tk3: "den", t6_tk4: "Töpfen", t6_tk5: "nennt", t6_tk6: "man", t6_tk7: "heute", t6_tk8: "Bandkeramik.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Natur", t6_bl2: "Gemacht", t6_i1: "Lehm", t6_i2: "Topf", t6_i3: "Wolle", t6_i4: "Tuch",
    t7_title: "Metallzeit", t7_text: "Bronze & Eisen.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Woraus ist Bronze?", t7_qa: "Kupfer+Zinn", t7_qb: "Gold", t7_qc: "Silber", t7_qd: "Stein",
    t7_w1: "Werkzeuge", t7_w2: "aus", t7_w3: "Bronze", t7_w4: "waren", t7_w5: "viel", t7_w6: "härter", t7_w7: "als", t7_w8: "Steine.",
    t7_l1: "Kupfer", t7_r1: "Rot", t7_l2: "Zinn", t7_r2: "Weiß", t7_l3: "Feuer", t7_r3: "Heiß",
    t7_sent: "Metall wird im Feuer ___.", t7_qa2: "flüssig", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Der", t7_f2: "Schmied", t7_f3: "goss", t7_f4: "das", t7_f5: "Metall", t7_f6: "in", t7_f7: "eine", t7_f8: "Form.", t7_f9: "",
    t7_tk1: "Schwerter", t7_tk2: "und", t7_tk3: "Schmuck", t7_tk4: "wurden", t7_tk5: "nun", t7_tk6: "aus", t7_tk7: "glänzendem", t7_tk8: "Metall", t7_tk9: "gemacht.", t7_tk10: "",
    t7_bl1: "Metall", t7_bl2: "Stein", t7_i1: "Bronze", t7_i2: "Flint", t7_i3: "Kupfer", t7_i4: "Quarz",
    t8_title: "Zeit-Check", t8_text: "Archäologie.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Wer gräbt aus?", t8_qa: "Archäologe", t8_qb: "Bauer", t8_qc: "Lehrer", t8_qd: "Arzt",
    t8_w1: "Die", t8_w2: "Steinzeit", t8_w3: "ist", t8_w4: "die", t8_w5: "längste", t8_w6: "Epoche", t8_w7: "der", t8_w8: "Menschheitsgeschichte.",
    t8_l1: "Früher", t8_r1: "Stein", t8_l2: "Heute", t8_r2: "Stahl", t8_l3: "Fund", t8_r3: "Scherbe",
    t8_sent: "Die Steinzeit war sehr ___.", t8_qa2: "lang", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "alles", t8_f4: "aus", t8_f5: "Gräbern", t8_f6: "und", t8_f7: "Ausgrabungen", t8_f8: "gelernt.", t8_f9: "",
    t8_tk1: "Ein", t8_tk2: "Faustkeil", t8_tk3: "ist", t8_tk4: "heute", t8_tk5: "ein", t8_tk6: "wertvolles", t8_tk7: "Stück", t8_tk8: "im", t8_tk9: "Museum.", t8_tk10: "",
    t8_bl1: "Früher", t8_bl2: "Später", t8_i1: "Mammut", t8_i2: "Traktor", t8_i3: "Höhle", t8_i4: "Stadt",
  },
};

export const STEINZEIT_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Altsteinzeit", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Das Feuer", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Eiszeit-Tiere", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Faustkeil", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Jungsteinzeit", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Weben & Ton", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Metallzeit", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Zeit-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const EUROPA_GEO_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Geografie Europas",
    t1_title: "Berge & Meer", t1_text: "Topografie.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Gebirge im Süden?", t1_qa: "Alpen", t1_qb: "Ural", t1_qc: "Anden", t1_qd: "Atlas",
    t1_w1: "Die", t1_w2: "Alpen", t1_w3: "sind", t1_w4: "das", t1_w5: "höchste", t1_w6: "Gebirge", t1_w7: "im", t1_w8: "Inneren",
    t1_l1: "Nord", t1_r1: "Island", t1_l2: "Süd", t1_r2: "Italien", t1_l3: "Ost", t1_r3: "Russland",
    t1_sent: "Der Mont Blanc ist sehr ___.", t1_qa2: "hoch", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Der", t1_f2: "Mont", t1_f3: "Blanc", t1_f4: "liegt", t1_f5: "genau", t1_f6: "auf", t1_f7: "der", t1_f8: "Grenze.", t1_f9: "",
    t1_tk1: "Island", t1_tk2: "ist", t1_tk3: "eine", t1_tk4: "große", t1_tk5: "Vulkaninsel", t1_tk6: "weit", t1_tk7: "oben", t1_tk8: "im", t1_tk9: "Norden.", t1_tk10: "",
    t1_bl1: "Berg", t1_bl2: "Meer", t1_i1: "Alpen", t1_i2: "Nordsee", t1_i3: "Karpaten", t1_i4: "Ostsee",
    t2_title: "Klimazonen", t2_text: "Wetter in Europa.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wo ist es warm?", t2_qa: "Süden", t2_qb: "Norden", t2_qc: "Pol", t2_qd: "Island",
    t2_w1: "Der", t2_w2: "Golfstrom", t2_w3: "bringt", t2_w4: "warmes", t2_w5: "Wasser", t2_w6: "an", t2_w7: "die", t2_w8: "Küste.",
    t2_l1: "Nord", t2_r1: "Kalt", t2_l2: "Mitte", t2_r2: "Mild", t2_l3: "Süd", t2_r3: "Heiß",
    t2_sent: "Am Mittelmeer ist es oft ___.", t2_qa2: "sonnig", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "In", t2_f2: "der", t2_f3: "Tundra", t2_f4: "wachsen", t2_f5: "keine", t2_f6: "großen", t2_f7: "Bäume", t2_f8: "mehr.", t2_f9: "",
    t2_tk1: "Wir", t2_tk2: "in", t2_tk3: "Deutschland", t2_tk4: "leben", t2_tk5: "in", t2_tk6: "der", t2_tk7: "gemäßigten", t2_tk8: "Klimazone", t2_tk9: "Europas.", t2_tk10: "",
    t2_bl1: "Warm", t2_bl2: "Kalt", t2_i1: "Spanien", t2_i2: "Finnland", t2_i3: "Griechenland", t2_i4: "Norwegen",
    t3_title: "Hauptstädte Ost", t3_text: "Polen, Ungarn, Prag.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Hauptstadt Polens?", t3_qa: "Warschau", t3_qb: "Prag", t3_qc: "Wien", t3_qd: "Kiew",
    t3_w1: "Osteuropa", t3_w2: "hat", t3_w3: "sehr", t3_w4: "viele", t3_w5: "kulturell", t3_w6: "reiche", t3_w7: "und", t3_w8: "alte",
    t3_l1: "Polen", t3_r1: "Warschau", t3_l2: "Ungarn", t3_r2: "Budapest", t3_l3: "Tschechien", t3_r3: "Prag",
    t3_sent: "Die Donau fließt durch ___.", t3_qa2: "Budapest", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Die", t3_f2: "Donau", t3_f3: "verbindet", t3_f4: "viele", t3_f5: "Länder", t3_f6: "in", t3_f7: "Osteuropa", t3_f8: "miteinander.", t3_f9: "",
    t3_tk1: "Moskau", t3_tk2: "ist", t3_tk3: "die", t3_tk4: "Hauptstadt", t3_tk5: "von", t3_tk6: "Russland", t3_tk7: "im", t3_tk8: "Osten.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Land", t3_bl2: "Stadt", t3_i1: "Polen", t3_i2: "Prag", t3_i3: "Ungarn", t3_i4: "Warschau",
    t4_title: "Hauptstädte West", t4_text: "Paris, London, Rom.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Wo ist der Eiffelturm?", t4_qa: "Paris", t4_qb: "Berlin", t4_qc: "Madrid", t4_qd: "Bern",
    t4_w1: "In", t4_w2: "London", t4_w3: "kann", t4_w4: "man", t4_w5: "den", t4_w6: "Big", t4_w7: "Ben", t4_w8: "bewundern.",
    t4_l1: "Frankreich", t4_r1: "Paris", t4_l2: "England", t4_r2: "London", t4_l3: "Spanien", t4_r3: "Madrid",
    t4_sent: "London liegt an der ___.", t4_qa2: "Themse", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Madrid", t4_f2: "ist", t4_f3: "die", t4_f4: "sonnige", t4_f5: "Hauptstadt", t4_f6: "von", t4_f7: "Spanien.", t4_f8: "", t4_f9: "",
    t4_tk1: "Der", t4_tk2: "Eurostar", t4_tk3: "Zug", t4_tk4: "fährt", t4_tk5: "durch", t4_tk6: "den", t4_tk7: "Tunnel", t4_tk8: "nach", t4_tk9: "London.", t4_tk10: "",
    t4_bl1: "West", t4_bl2: "Ost", t4_i1: "Paris", t4_i2: "Warschau", t4_i3: "London", t4_i4: "Prag",
    t5_title: "Wirtschaft", t5_text: "Industrie.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Was baut der Süden an?", t5_qa: "Oliven", t5_qb: "Eis", t5_qc: "Autos", t5_qd: "Kohle",
    t5_w1: "Im", t5_w2: "Ruhrgebiet", t5_w3: "gab", t5_w4: "es", t5_w5: "früher", t5_w6: "sehr", t5_w7: "viele", t5_w8: "Kohleminen.",
    t5_l1: "Italien", t5_r1: "Wein", t5_l2: "Deutschland", t5_r2: "Maschinen", t5_l3: "Norwegen", t5_r3: "Lachs",
    t5_sent: "Deutschland baut viele ___.", t5_qa2: "Autos", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Der", t5_f2: "Rotterdamer", t5_f3: "Hafen", t5_f4: "ist", t5_f5: "der", t5_f6: "größte", t5_f7: "in", t5_f8: "ganz", t5_f9: "Europa.",
    t5_tk1: "In", t5_tk2: "der", t5_tk3: "EU", t5_tk4: "werden", t5_tk5: "Waren", t5_tk6: "frei", t5_tk7: "über", t5_tk8: "die", t5_tk9: "Grenzen", t5_tk10: "transportiert.",
    t5_bl1: "Süd", t5_bl2: "Nord", t5_i1: "Zitronen", t5_i2: "Erdöl", t5_i3: "Orangen", t5_i4: "Holz",
    t6_title: "Die EU", t6_text: "Politik.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Hauptsitz der EU?", t6_qa: "Brüssel", t6_qb: "Berlin", t6_qc: "London", t6_qd: "Rom",
    t6_w1: "Die", t6_w2: "Europäische", t6_w3: "Union", t6_w4: "sichert", t6_w5: "den", t6_w6: "Frieden", t6_w7: "auf", t6_w8: "dem",
    t6_l1: "Währung", t6_r1: "Euro", t6_l2: "Stadt", t6_r2: "Brüssel", t6_l3: "Flagge", t6_r3: "Sterne",
    t6_sent: "Wir bezahlen mit dem ___.", t6_qa2: "Euro", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Alle", t6_f2: "Bürger", t6_f3: "dürfen", t6_f4: "das", t6_f5: "Europaparlament", t6_f6: "direkt", t6_f7: "wählen.", t6_f8: "", t6_f9: "",
    t6_tk1: "Sterne", t6_tk2: "auf", t6_tk3: "der", t6_tk4: "Flagge", t6_tk5: "stehen", t6_tk6: "für", t6_tk7: "die", t6_tk8: "Einheit", t6_tk9: "der", t6_tk10: "Völker.",
    t6_bl1: "EU", t6_bl2: "Nicht EU", t6_i1: "Euro", t6_i2: "Pfund", t6_i3: "Brüssel", t6_i4: "Schweiz",
    t7_title: "Wahrzeichen", t7_text: "Bauwerke.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wo steht das Kolosseum?", t7_qa: "Rom", t7_qb: "Athen", t7_qc: "Paris", t7_qd: "Wien",
    t7_w1: "Die", t7_w2: "Akropolis", t7_w3: "ist", t7_w4: "ein", t7_w5: "sehr", t7_w6: "altes", t7_w7: "Wahrzeichen", t7_w8: "in",
    t7_l1: "Rom", t7_r1: "Kolosseum", t7_l2: "Paris", t7_r2: "Eiffelturm", t7_l3: "London", t7_r3: "Big Ben",
    t7_sent: "Big Ben ist in ___.", t7_qa2: "London", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Viele", t7_f2: "Touristen", t7_f3: "reisen", t7_f4: "extra", t7_f5: "nach", t7_f6: "Europa", t7_f7: "um", t7_f8: "das", t7_f9: "zu",
    t7_tk1: "Der", t7_tk2: "Schiefe", t7_tk3: "Turm", t7_tk4: "von", t7_tk5: "Pisa", t7_tk6: "ist", t7_tk7: "weltberühmt", t7_tk8: "für", t7_tk9: "seine", t7_tk10: "Neigung.",
    t7_bl1: "Bauwerk", t7_bl2: "Natur", t7_i1: "Turm", t7_i2: "Berg", t7_i3: "Brücke", t7_i4: "Fluss",
    t8_title: "Geo-Check", t8_text: "Wissenstest.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Kleinstes Land?", t8_qa: "Vatikan", t8_qb: "Monaco", t8_qc: "Malta", t8_qd: "Polen",
    t8_w1: "Wer", t8_w2: "viel", t8_w3: "reist", t8_w4: "lernt", t8_w5: "die", t8_w6: "verschiedenen", t8_w7: "Kulturen", t8_w8: "besser",
    t8_l1: "Groß", t8_r1: "Russland", t8_l2: "Klein", t8_r2: "Vatikan", t8_l3: "Insel", t8_r3: "Island",
    t8_sent: "Europa ist ein ___.", t8_qa2: "Kontinent", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "sollten", t8_f3: "unser", t8_f4: "gemeinsames", t8_f5: "Europa", t8_f6: "schätzen", t8_f7: "und", t8_f8: "schützen.", t8_f9: "",
    t8_tk1: "Geografie", t8_tk2: "hilft", t8_tk3: "uns", t8_tk4: "die", t8_tk5: "Weltkarte", t8_tk6: "richtig", t8_tk7: "lesen", t8_tk8: "zu", t8_tk9: "können.", t8_tk10: "",
    t8_bl1: "Insel", t8_bl2: "Binnenland", t8_i1: "Irland", t8_i2: "Österreich", t8_i3: "Zypern", t8_i4: "Ungarn",
  },
};

export const EUROPA_GEO_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Berge & Meer", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Klimazonen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Hauptstädte Ost", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Hauptstädte West", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wirtschaft", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Die EU", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Wahrzeichen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Geo-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const PHYSIK_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Magnete & Stromkreise",
    t1_title: "Pole", t1_text: "Nordsüd.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Gleiche Pole?", t1_qa: "Abstoßen", t1_qb: "Anziehen", t1_qc: "Kleiden", t1_qd: "Leuchten",
    t1_w1: "Das", t1_w2: "Magnetfeld", t1_w3: "ist", t1_w4: "um", t1_w5: "die", t1_w6: "Pole", t1_w7: "herum", t1_w8: "am",
    t1_l1: "Nord+Süd", t1_r1: "Anziehung", t1_l2: "Nord+Nord", t1_r2: "Abstoßung", t1_l3: "Süd+Süd", t1_r3: "Abstoßung",
    t1_sent: "Gleiche Pole stoßen sich ___.", t1_qa2: "ab", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "können", t1_f3: "die", t1_f4: "Magnetlinien", t1_f5: "mit", t1_f6: "Eisenfeilspänen", t1_f7: "sichtbar", t1_f8: "machen.", t1_f9: "",
    t1_tk1: "Die", t1_tk2: "Erde", t1_tk3: "ist", t1_tk4: "ein", t1_tk5: "riesiger", t1_tk6: "Magnet", t1_tk7: "mit", t1_tk8: "zwei", t1_tk9: "Polen.", t1_tk10: "",
    t1_bl1: "Zusammen", t1_bl2: "Weg", t1_i1: "Anziehung", t1_i2: "Abstoßung", t1_i3: "Zug", t1_i4: "Druck",
    t2_title: "Elektromagnet", t2_text: "Strom macht Kraft.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie abschalten?", t2_qa: "Strom aus", t2_qb: "Wasser drauf", t2_qc: "Wegwerfen", t2_qd: "Anmalen",
    t2_w1: "Wenn", t2_w2: "Strom", t2_w3: "fließt", t2_w4: "wird", t2_w5: "die", t2_w6: "Spule", t2_w7: "zu", t2_w8: "einem",
    t2_l1: "Schalter", t2_r1: "An/Aus", t2_l2: "Spule", t2_r2: "Kraft", t2_l3: "Draht", t2_r3: "Metall",
    t2_sent: "Strom macht Eisen ___.", t2_qa2: "magnetisch", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Schrottplätze", t2_f2: "nutzen", t2_f3: "Elektromagnete", t2_f4: "um", t2_f5: "schwere", t2_f6: "Autos", t2_f7: "zu", t2_f8: "heben.", t2_f9: "",
    t2_tk1: "Ohne", t2_tk2: "Elektromagnete", t2_tk3: "würde", t2_tk4: "kein", t2_tk5: "einziger", t2_tk6: "Elektromotor", t2_tk7: "auf", t2_tk8: "der", t2_tk9: "Welt", t2_tk10: "drehen.",
    t2_bl1: "Strom", t2_bl2: "Magnet", t2_i1: "Fluss", t2_i2: "Pol", t2_i3: "Kabel", t2_i4: "Kraft",
    t3_title: "Leiter", t3_text: "Stromfluss.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was leitet?", t3_qa: "Kupfer", t3_qb: "Holz", t3_qc: "Gummi", t3_qd: "Glas",
    t3_w1: "Metalle", t3_w2: "wie", t3_w3: "Silber", t3_w4: "und", t3_w5: "Gold", t3_w6: "sind", t3_w7: "besonders", t3_w8: "gute",
    t3_l1: "Alu", t3_r1: "Leiter", t3_l2: "Plastik", t3_r2: "Isolator", t3_l3: "Eisen", t3_r3: "Leiter",
    t3_sent: "Gummi ist ein ___.", t3_qa2: "Isolator", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Salzwasser", t3_f2: "kann", t3_f3: "auch", t3_f4: "sehr", t3_f5: "gut", t3_f6: "den", t3_f7: "Strom", t3_f8: "leiten.", t3_f9: "",
    t3_tk1: "Der", t3_tk2: "menschliche", t3_tk3: "Körper", t3_tk4: "besteht", t3_tk5: "aus", t3_tk6: "Wasser", t3_tk7: "und", t3_tk8: "leitet", t3_tk9: "Strom.", t3_tk10: "",
    t3_bl1: "Leiter", t3_bl2: "Isolator", t3_i1: "Gold", t3_i2: "Luft", t3_i3: "Kupfer", t3_i4: "Papier",
    t4_title: "Schalter", t4_text: "Kontrolle.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was macht er?", t4_qa: "Kreis schließen", t4_qb: "Strom machen", t4_qc: "Kühlen", t4_qd: "Wiegen",
    t4_w1: "Ein", t4_w2: "Taster", t4_w3: "schließt", t4_w4: "den", t4_w5: "Kreis", t4_w6: "nur", t4_w7: "solange", t4_w8: "man",
    t4_l1: "Ein", t4_r1: "Licht", t4_l2: "Aus", t4_r2: "Dunkel", t4_l3: "Taster", t4_r3: "Klingel",
    t4_sent: "Strom fließt nur wenn ___.", t4_qa2: "zu", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Lichtschalter", t4_f2: "im", t4_f3: "Haus", t4_f4: "sind", t4_f5: "meistens", t4_f6: "sogenannte", t4_f7: "Wechselschalter.", t4_f8: "", t4_f9: "",
    t4_tk1: "Sicherungen", t4_tk2: "sind", t4_tk3: "automatische", t4_tk4: "Schalter", t4_tk5: "die", t4_tk6: "bei", t4_tk7: "Gefahr", t4_tk8: "auslösen.", t4_tk9: "", t4_tk10: "",
    t4_bl1: "An", t4_bl2: "Aus", t4_i1: "Hell", t4_i2: "Dunkel", t4_i3: "Strom", t4_i4: "Nichts",
    t5_title: "Schaltungen", t5_text: "Reihe & Parallel.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Typisch für Haus?", t5_qa: "Parallel", t5_qb: "Reihe", t5_qc: "Kreis", t5_qd: "Viereck",
    t5_w1: "Wenn", t5_w2: "eine", t5_w3: "Lampe", t5_w4: "kaputt", t5_w5: "geht", t5_w6: "leuchten", t5_w7: "die", t5_w8: "anderen",
    t5_l1: "Reihe", t5_r1: "Kette", t5_l2: "Parallel", t5_r2: "Haus", t5_l3: "Licht", t5_r3: "Hell",
    t5_sent: "In Reihe wird Licht ___.", t5_qa2: "dunkler", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "In", t5_f2: "der", t5_f3: "Reihenschaltung", t5_f4: "wird", t5_f5: "das", t5_f6: "Licht", t5_f7: "immer", t5_f8: "schwächer.", t5_f9: "",
    t5_tk1: "Der", t5_tk2: "Strom", t5_tk3: "sucht", t5_tk4: "sich", t5_tk5: "in", t5_tk6: "Knotenpunkten", t5_tk7: "verschiedene", t5_tk8: "Wege.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Reihe", t5_bl2: "Parallel", t5_i1: "Kette", t5_i2: "Hausnetz", t5_i3: "Lichterkette", t5_i4: "Steckdose",
    t6_title: "Volt & Ampere", t6_text: "Einheiten.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Spannungseinheit?", t6_qa: "Volt", t6_qb: "Ampere", t6_qc: "Meter", t6_qd: "Kilo",
    t6_w1: "Eine", t6_w2: "Batterie", t6_w3: "hat", t6_w4: "meistens", t6_w5: "eine", t6_w6: "Spannung", t6_w7: "von", t6_w8: "wenigen",
    t6_l1: "V", t6_r1: "Volt", t6_l2: "A", t6_r2: "Ampere", t6_l3: "W", t6_r3: "Watt",
    t6_sent: "Ampere misst die ___.", t6_qa2: "Stärke", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Aus", t6_f2: "der", t6_f3: "Steckdose", t6_f4: "kommen", t6_f5: "gefährliche", t6_f6: "zwei", t6_f7: "hundert", t6_f8: "dreißig", t6_f9: "Volt.",
    t6_tk1: "Man", t6_tk2: "kann", t6_tk3: "sich", t6_tk4: "die", t6_tk5: "Spannung", t6_tk6: "wie", t6_tk7: "den", t6_tk8: "Wasserdruck", t6_tk9: "vorstellen.", t6_tk10: "",
    t6_bl1: "Druck", t6_bl2: "Fluss", t6_i1: "Volt", t6_i2: "Ampere", t6_i3: "Spannung", t6_i4: "Strom",
    t7_title: "Sicherheit", t7_text: "Gefahr!", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Warum Föhn + Wasser?", t7_qa: "Leitung", t7_qb: "Rost", t7_qc: "Lärm", t7_qd: "Farbe",
    t7_w1: "Zieh", t7_w2: "immer", t7_w3: "am", t7_w4: "Stecker", t7_w5: "und", t7_w6: "niemals", t7_w7: "am", t7_w8: "dünnen",
    t7_l1: "Finger", t7_r1: "Weg", t7_l2: "Sicherung", t7_r2: "Schutz", t7_l3: "Gummi", t7_r3: "Isolator",
    t7_sent: "Wasser leitet ___.", t7_qa2: "Strom", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Vor", t7_f2: "einer", t7_f3: "Reparatur", t7_f4: "muss", t7_f5: "man", t7_f6: "immer", t7_f7: "die", t7_f8: "Sicherung", t7_f9: "herausnehmen.",
    t7_tk1: "Elektriker", t7_tk2: "tragen", t7_tk3: "spezielle", t7_tk4: "Schuhe", t7_tk5: "mit", t7_tk6: "dicken", t7_tk7: "Gummisohlen", t7_tk8: "als", t7_tk9: "Isolator.", t7_tk10: "",
    t7_bl1: "Sicher", t7_bl2: "Gefahr", t7_i1: "Gummi", t7_i2: "Wasser", t7_i3: "Stecker", t7_i4: "Draht",
    t8_title: "Physik-Check", t8_text: "Wissen.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist Watt?", t8_qa: "Leistung", t8_qb: "Zeit", t8_qc: "Länge", t8_qd: "Preis",
    t8_w1: "Energie", t8_w2: "geht", t8_w3: "nie", t8_w4: "verloren", t8_w5: "sie", t8_w6: "wird", t8_w7: "nur", t8_w8: "umgewandelt.",
    t8_l1: "Motor", t8_r1: "Kraft", t8_l2: "Lampe", t8_r2: "Licht", t8_l3: "Akku", t8_r3: "Strom",
    t8_sent: "Energie wird ___.", t8_qa2: "umgewandelt", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Wir", t8_f2: "haben", t8_f3: "viele", t8_f4: "Schaltpläne", t8_f5: "mit", t8_f6: "Symbolen", t8_f7: "gezeichnet.", t8_f8: "", t8_f9: "",
    t8_tk1: "Die", t8_tk2: "Lehre", t8_tk3: "vom", t8_tk4: "Strom", t8_tk5: "nennt", t8_tk6: "man", t8_tk7: "in", t8_tk8: "der", t8_tk9: "Schule", t8_tk10: "Elektrizitätslehre.",
    t8_bl1: "Bauteil", t8_bl2: "Einheit", t8_i1: "Lampe", t8_i2: "Volt", t8_i3: "Schalter", t8_i4: "Watt",
  },
};

export const PHYSIK_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Pole", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Elektromagnet", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Leiter", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Schalter", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Schaltungen", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Volt & Ampere", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Sicherheit", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Physik-Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const WASSER_WETTER_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wetter & Wasser",
    t1_title: "Kreislauf", t1_text: "Wasserreise.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Wasser -> Dampf?", t1_qa: "Verdunstung", t1_qb: "Eis", t1_qc: "Regen", t1_qd: "Salz",
    t1_w1: "Die", t1_w2: "Sonne", t1_w3: "ist", t1_w4: "der", t1_w5: "Motor", t1_w6: "für", t1_w7: "den", t1_w8: "ganzen",
    t1_l1: "Oben", t1_r1: "Dampf", t1_l2: "Unten", t1_r2: "Regen", t1_l3: "Meer", t1_r3: "Start",
    t1_sent: "Dampf wird zu ___.", t1_qa2: "Wolken", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Das", t1_f2: "Wasser", t1_f3: "fließt", t1_f4: "über", t1_f5: "die", t1_f6: "Flüsse", t1_f7: "zurück", t1_f8: "ins", t1_f9: "Meer.",
    t1_tk1: "Ein", t1_tk2: "Wassertropfen", t1_tk3: "ist", t1_tk4: "schon", t1_tk5: "sehr", t1_tk6: "lange", t1_tk7: "auf", t1_tk8: "unserer", t1_tk9: "Erde", t1_tk10: "unterwegs.",
    t1_bl1: "Warm", t1_bl2: "Kalt", t1_i1: "Dampf", t1_i2: "Eis", t1_i3: "Gas", t1_i4: "Schnee",
    t2_title: "Wind & Regen", t2_text: "Phänomene.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Wie entsteht Wind?", t2_qa: "Druckunterschied", t2_qb: "Pusten", t2_qc: "Laufen", t2_qd: "Sonne",
    t2_w1: "Warme", t2_w2: "Luft", t2_w3: "steigt", t2_w4: "auf", t2_w5: "und", t2_w6: "kalte", t2_w7: "Luft", t2_w8: "strömt",
    t2_l1: "Wind", t2_r1: "Sturm", t2_l2: "Regen", t2_r2: "Nass", t2_l3: "Eis", t2_r3: "Hagel",
    t2_sent: "Blitz braucht ___.", t2_qa2: "Donner", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Gewitter", t2_f2: "bringen", t2_f3: "oft", t2_f4: "gefährliche", t2_f5: "Blitze", t2_f6: "und", t2_f7: "lauten", t2_f8: "Donner", t2_f9: "mit.",
    t2_tk1: "Hagel", t2_tk2: "entsteht", t2_tk3: "wenn", t2_tk4: "Wassertropfen", t2_tk5: "in", t2_tk6: "der", t2_tk7: "Wolke", t2_tk8: "schnell", t2_tk9: "gefrieren.", t2_tk10: "",
    t2_bl1: "Luft", t2_bl2: "Wasser", t2_i1: "Wind", t2_i2: "Regen", t2_i3: "Böe", t2_i4: "Schauer",
    t3_title: "Wetterkarte", t3_text: "Prognose.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Was bedeutet H?", t3_qa: "Hochdruck", t3_qb: "Heiß", t3_qc: "Hagel", t3_qd: "Halt",
    t3_w1: "Meteorologen", t3_w2: "messen", t3_w3: "Luftdruck", t3_w4: "und", t3_w5: "Temperatur", t3_w6: "an", t3_w7: "vielen", t3_w8: "Stationen.",
    t3_l1: "Sonne", t3_r1: "Hoch", t3_l2: "Regen", t3_r2: "Tief", t3_l3: "Wind", t3_r3: "Front",
    t3_sent: "T steht für ___.", t3_qa2: "Tiefdruck", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Satelliten", t3_f2: "liefern", t3_f3: "uns", t3_f4: "Bilder", t3_f5: "von", t3_f6: "den", t3_f7: "Wolken", t3_f8: "aus", t3_f9: "dem",
    t3_tk1: "Isothermen", t3_tk2: "sind", t3_tk3: "Linien", t3_tk4: "die", t3_tk5: "Orte", t3_tk6: "mit", t3_tk7: "gleicher", t3_tk8: "Temperatur", t3_tk9: "verbinden.", t3_tk10: "",
    t3_bl1: "Gut", t3_bl2: "Schlecht", t3_i1: "Sonne", t3_i2: "Wolke", t3_i3: "H", t3_i4: "T",
    t4_title: "Zustände", t4_text: "Aggregat.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Siedepunkt?", t4_qa: "100 Grad", t4_qb: "0 Grad", t4_qc: "50 Grad", t4_qd: "10 Grad",
    t4_w1: "Wenn", t4_w2: "Wasser", t4_w3: "gefriert", t4_w4: "dehnt", t4_w5: "es", t4_w6: "sich", t4_w7: "überraschend", t4_w8: "stark",
    t4_l1: "Eis", t4_r1: "Fest", t4_l2: "Wasser", t4_r2: "Flüssig", t4_l3: "Dampf", t4_r3: "Gas",
    t4_sent: "Eis schmilzt ab ___ Grad.", t4_qa2: "null", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Man", t4_f2: "nennt", t4_f3: "dieses", t4_f4: "Verhalten", t4_f5: "auch", t4_f6: "die", t4_f7: "Anomalie", t4_f8: "des", t4_f9: "Wassers.",
    t4_tk1: "Nur", t4_tk2: "Wasser", t4_tk3: "kommt", t4_tk4: "in", t4_tk5: "der", t4_tk6: "Natur", t4_tk7: "in", t4_tk8: "allen", t4_tk9: "drei", t4_tk10: "Zuständen",
    t4_bl1: "Heiß", t4_bl2: "Kalt", t4_i1: "Dampf", t4_i2: "Eis", t4_i3: "Kochen", t4_i4: "Gefrieren",
    t5_title: "Trinkwasser", t5_text: "Versorgung.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Woher kommt es?", t5_qa: "Grundwasser", t5_qb: "Salzmeer", t5_qc: "Luft", t5_qd: "Eis",
    t5_w1: "In", t5_w2: "der", t5_w3: "Kläranlage", t5_w4: "fressen", t5_w5: "Bakterien", t5_w6: "den", t5_w7: "Schmutz", t5_w8: "im",
    t5_l1: "Klärung", t5_r1: "Sauber", t5_l2: "Pumpe", t5_r2: "Druck", t5_l3: "Rohr", t5_r3: "Haus",
    t5_sent: "Wir müssen Wasser ___.", t5_qa2: "sparen", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Sauberes", t5_f2: "Trinkwasser", t5_f3: "ist", t5_f4: "in", t5_f5: "vielen", t5_f6: "Ländern", t5_f7: "sehr", t5_f8: "knapp.", t5_f9: "",
    t5_tk1: "Das", t5_tk2: "deutsche", t5_tk3: "Leitungswasser", t5_tk4: "hat", t5_tk5: "eine", t5_tk6: "sehr", t5_tk7: "hohe", t5_tk8: "und", t5_tk9: "geprüfte", t5_tk10: "Qualität.",
    t5_bl1: "Natur", t5_bl2: "Technik", t5_i1: "Quelle", t5_i2: "Werk", t5_i3: "Regen", t5_i4: "Filter",
    t6_title: "Klimawandel", t6_text: "Erwärmung.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Gasname?", t6_qa: "CO2", t6_qb: "O2", t6_qc: "Gold", t6_qd: "Staub",
    t6_w1: "Das", t6_w2: "Klima", t6_w3: "beschreibt", t6_w4: "das", t6_w5: "Wetter", t6_w6: "über", t6_w7: "mindestens", t6_w8: "dreißig",
    t6_l1: "Wärme", t6_r1: "Anstieg", t6_l2: "Eis", t6_r2: "Schmelze", t6_l3: "Gas", t6_r3: "Treibhaus",
    t6_sent: "Die Erde wird ___.", t6_qa2: "wärmer", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Treibhausgase", t6_f2: "wie", t6_f3: "Kohlendioxid", t6_f4: "verändern", t6_f5: "das", t6_f6: "Klima", t6_f7: "auf", t6_f8: "der", t6_f9: "Erde.",
    t6_tk1: "Schmelzende", t6_tk2: "Gletscher", t6_tk3: "sind", t6_tk4: "ein", t6_tk5: "deutliches", t6_tk6: "Zeichen", t6_tk7: "für", t6_tk8: "die", t6_tk9: "Erderwärmung.", t6_tk10: "",
    t6_bl1: "Gas", t6_bl2: "Folge", t6_i1: "CO2", t6_i2: "Hitze", t6_i3: "Methan", t6_i4: "Flut",
    t7_title: "Geräte", t7_text: "Messung.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Luftdruckgerät?", t7_qa: "Barometer", t7_qb: "Waage", t7_qc: "Uhr", t7_qd: "Maßband",
    t7_w1: "Ein", t7_w2: "Regenmesser", t7_w3: "sammelt", t7_w4: "das", t7_w5: "Wasser", t7_w6: "in", t7_w7: "einem", t7_w8: "Becher.",
    t7_l1: "Druck", t7_r1: "Baro", t7_l2: "Wärme", t7_r2: "Thermo", t7_l3: "Wind", t7_r3: "Anemo",
    t7_sent: "Wärme misst das ___.", t7_qa2: "Thermometer", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Die", t7_f2: "Wetterhütte", t7_f3: "steht", t7_f4: "immer", t7_f5: "zwei", t7_f6: "Meter", t7_f7: "über", t7_f8: "dem", t7_f9: "Boden.",
    t7_tk1: "Messungen", t7_tk2: "helfen", t7_tk3: "dem", t7_tk4: "Meteorologen", t7_tk5: "die", t7_tk6: "genaue", t7_tk7: "Vorhersage", t7_tk8: "zu", t7_tk9: "berechnen.", t7_tk10: "",
    t7_bl1: "Grad", t7_bl2: "Druck", t7_i1: "Celsius", t7_i2: "Pascal", t7_i3: "Warm", t7_i4: "Bar",
    t8_title: "Check", t8_text: "Wetterfrosch.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Was ist Nebel?", t8_qa: "Tiefe Wolke", t8_qb: "Rauch", t8_qc: "Staub", t8_qd: "Licht",
    t8_w1: "Nach", t8_w2: "dem", t8_w3: "Regen", t8_w4: "bricht", t8_w5: "die", t8_w6: "Sonne", t8_w7: "das", t8_w8: "weiße",
    t8_l1: "Sonne", t8_r1: "Energie", t8_l2: "Regen", t8_r2: "Nass", t8_l3: "Licht", t8_r3: "Bunt",
    t8_sent: "Regenbogen braucht ___.", t8_qa2: "Sonne", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Die", t8_f2: "Farben", t8_f3: "entstehen", t8_f4: "durch", t8_f5: "Brechung", t8_f6: "in", t8_f7: "den", t8_f8: "Tropfen.", t8_f9: "",
    t8_tk1: "Wetterbeobachtung", t8_tk2: "ist", t8_tk3: "ein", t8_tk4: "spannendes", t8_tk5: "Hobby", t8_tk6: "für", t8_tk7: "jeden", t8_tk8: "Naturfreund.", t8_tk9: "", t8_tk10: "",
    t8_bl1: "Licht", t8_bl2: "Wasser", t8_i1: "Farbe", t8_i2: "Tropfen", t8_i3: "Sonne", t8_i4: "Regen",
  },
};

export const WASSER_WETTER_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Kreislauf", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Wind & Regen", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Wetterkarte", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Zustände", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Trinkwasser", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Klimawandel", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Geräte", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const PFLANZEN_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Blüten & Pflanzen",
    t1_title: "Pflanzenbau", t1_text: "Bauteile.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Was verankert?", t1_qa: "Wurzel", t1_qb: "Blatt", t1_qc: "Blüte", t1_qd: "Ast",
    t1_w1: "Die", t1_w2: "Wurzel", t1_w3: "nimmt", t1_w4: "Wasser", t1_w5: "und", t1_w6: "Mineralien", t1_w7: "aus", t1_w8: "dem",
    t1_l1: "Unten", t1_r1: "Wurzel", t1_l2: "Mitte", t1_r2: "Stängel", t1_l3: "Oben", t1_r3: "Blüte",
    t1_sent: "Blätter machen ___.", t1_qa2: "Energie", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Jeder", t1_f2: "Teil", t1_f3: "der", t1_f4: "Pflanze", t1_f5: "hat", t1_f6: "seine", t1_f7: "eigene", t1_f8: "Aufgabe.", t1_f9: "",
    t1_tk1: "Der", t1_tk2: "Stängel", t1_tk3: "trägt", t1_tk4: "die", t1_tk5: "Blätter", t1_tk6: "und", t1_tk7: "die", t1_tk8: "Blüte.", t1_tk9: "", t1_tk10: "",
    t1_bl1: "Halt", t1_bl2: "Nahrung", t1_i1: "Wurzel", t1_i2: "Blatt", t1_i3: "Knolle", t1_i4: "Chloroplast",
    t2_title: "Die Blüte", t2_text: "Organe.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Männlich?", t2_qa: "Staubblatt", t2_qb: "Stempel", t2_qc: "Kelch", t2_qd: "Wurzel",
    t2_w1: "Die", t2_w2: "bunten", t2_w3: "Kronblätter", t2_w4: "locken", t2_w5: "die", t2_w6: "vielen", t2_w7: "Insekten", t2_w8: "an.",
    t2_l1: "Pollen", t2_r1: "Staubblatt", t2_l2: "Frucht", t2_r2: "Stempel", t2_l3: "Schutz", t2_r3: "Kelchblatt",
    t2_sent: "Stempel ist ___.", t2_qa2: "weiblich", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "In", t2_f2: "der", t2_f3: "Blüte", t2_f4: "befinden", t2_f5: "sich", t2_f6: "die", t2_f7: "Fortpflanzungsorgane.", t2_f8: "", t2_f9: "",
    t2_tk1: "Der", t2_tk2: "Fruchtknoten", t2_tk3: "sitzt", t2_tk4: "ganz", t2_tk5: "unten", t2_tk6: "in", t2_tk7: "der", t2_tk8: "Blüte.", t2_tk9: "", t2_tk10: "",
    t2_bl1: "Bunt", t2_bl2: "Grün", t2_i1: "Krone", t2_i2: "Kelch", t2_i3: "Blüte", t2_i4: "Blatt",
    t3_title: "Bestäubung", t3_text: "Transport.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Wer hilft?", t3_qa: "Biene", t3_qb: "Hund", t3_qc: "Fisch", t3_qd: "Katze",
    t3_w1: "Die", t3_w2: "Biene", t3_w3: "fliegt", t3_w4: "von", t3_w5: "einer", t3_w6: "Blüte", t3_w7: "zur", t3_w8: "nächsten.",
    t3_l1: "Biene", t3_r1: "Tier", t3_l2: "Wind", t3_r2: "Luft", t3_l3: "Blume", t3_r3: "Ziel",
    t3_sent: "Wind trägt ___.", t3_qa2: "Pollen", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Der", t3_f2: "Pollen", t3_f3: "muss", t3_f4: "genau", t3_f5: "auf", t3_f6: "die", t3_f7: "Narbe", t3_f8: "gelangen.", t3_f9: "",
    t3_tk1: "Wenn", t3_tk2: "die", t3_tk3: "Biene", t3_tk4: "Nektar", t3_tk5: "trinkt", t3_tk6: "bleibt", t3_tk7: "Pollen", t3_tk8: "kleben.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Biene", t3_bl2: "Pflanze", t3_i1: "Nektar", t3_i2: "Pollen", t3_i3: "Flügel", t3_i4: "Stempel",
    t4_title: "Befruchtung", t4_text: "Samenbildung.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Was wächst?", t4_qa: "Pollenschlauch", t4_qb: "Blatt", t4_qc: "Ast", t4_qd: "Stein",
    t4_w1: "Nach", t4_w2: "der", t4_w3: "Befruchtung", t4_w4: "verwelken", t4_w5: "die", t4_w6: "bunten", t4_w7: "Blütenblätter", t4_w8: "schnell.",
    t4_l1: "Oben", t4_r1: "Narbe", t4_l2: "Unten", t4_r2: "Knoten", t4_l3: "Ziel", t4_r3: "Samen",
    t4_sent: "Aus Knoten wird ___.", t4_qa2: "Frucht", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Die", t4_f2: "Samenanlage", t4_f3: "entwickelt", t4_f4: "sich", t4_f5: "zum", t4_f6: "neuen", t4_f7: "Samen.", t4_f8: "", t4_f9: "",
    t4_tk1: "Aus", t4_tk2: "der", t4_tk3: "kleinen", t4_tk4: "Blüte", t4_tk5: "entsteht", t4_tk6: "ein", t4_tk7: "leckerer", t4_tk8: "Apfel.", t4_tk9: "", t4_tk10: "",
    t4_bl1: "Alt", t4_bl2: "Neu", t4_i1: "Blüte", t4_i2: "Samen", t4_i3: "Welk", t4_i4: "Keim",
    t5_title: "Verbreitung", t5_text: "Reise.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Löwenzahn?", t5_qa: "Wind", t5_qb: "Wasser", t5_qc: "Tier", t5_qd: "Auto",
    t5_w1: "Tiere", t5_w2: "fressen", t5_w3: "die", t5_w4: "Früchte", t5_w5: "und", t5_w6: "scheiden", t5_w7: "Samen", t5_w8: "aus.",
    t5_l1: "Wind", t5_r1: "Schirm", t5_l2: "Tier", t5_r2: "Klette", t5_l3: "Selbst", t5_r3: "Spring",
    t5_sent: "Kletten nutzen ___.", t5_qa2: "Tiere", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Samen", t5_f2: "müssen", t5_f3: "weit", t5_f4: "weg", t5_f5: "von", t5_f6: "der", t5_f7: "Mutterpflanze", t5_f8: "fliegen.", t5_f9: "",
    t5_tk1: "Kokosnüsse", t5_tk2: "können", t5_tk3: "sehr", t5_tk4: "lange", t5_tk5: "im", t5_tk6: "Meerwasser", t5_tk7: "schwimmen.", t5_tk8: "", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Fliegen", t5_bl2: "Haken", t5_i1: "Pappel", t5_i2: "Klette", t5_i3: "Ahorn", t5_i4: "Distel",
    t6_title: "Keimung", t6_text: "Neuanfang.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Was nötig?", t6_qa: "Wasser", t6_qb: "Eis", t6_qc: "Dunkel", t6_qd: "Salz",
    t6_w1: "Der", t6_w2: "Keimling", t6_w3: "ernährt", t6_w4: "sich", t6_w5: "zuerst", t6_w6: "aus", t6_w7: "dem", t6_w8: "Keimblatt.",
    t6_l1: "Wasser", t6_r1: "Quell", t6_l2: "Wärme", t6_r2: "Wachs", t6_l3: "Licht", t6_r3: "Grün",
    t6_sent: "Zuerst kommt die ___.", t6_qa2: "Wurzel", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Sobald", t6_f2: "sich", t6_f3: "grüne", t6_f4: "Blätter", t6_f5: "bilden", t6_f6: "beginnt", t6_f7: "die", t6_f8: "Fotosynthese.", t6_f9: "",
    t6_tk1: "Viele", t6_tk2: "Samen", t6_tk3: "können", t6_tk4: "sehr", t6_tk5: "lange", t6_tk6: "im", t6_tk7: "Boden", t6_tk8: "überleben.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Wichtig", t6_bl2: "Egal", t6_i1: "Wasser", t6_i2: "Limo", t6_i3: "Wärme", t6_i4: "Eis",
    t7_title: "Laubbaum", t7_text: "Apfelbaum.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Wann Blüte?", t7_qa: "Frühling", t7_qb: "Herbst", t7_qc: "Winter", t7_qd: "Nie",
    t7_w1: "Der", t7_w2: "Baum", t7_w3: "braucht", t7_w4: "viele", t7_w5: "Jahre", t7_w6: "bis", t7_w7: "er", t7_w8: "Früchte",
    t7_l1: "Knospe", t7_r1: "Zu", t7_l2: "Blüte", t7_r2: "Offen", t7_l3: "Frucht", t7_r3: "Reif",
    t7_sent: "Im Herbst fallen ___.", t7_qa2: "Blätter", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Die", t7_f2: "Wurzelns", t7_f3: "eines", t7_f4: "Baumes", t7_f5: "reichen", t7_f6: "sehr", t7_f7: "tief", t7_f8: "hinab.", t7_f9: "",
    t7_tk1: "Unter", t7_tk2: "der", t7_tk3: "Rinde", t7_tk4: "fließt", t7_tk5: "der", t7_tk6: "wichtige", t7_tk7: "Saft", t7_tk8: "des", t7_tk9: "Baumes.", t7_tk10: "",
    t7_bl1: "Teil", t7_bl2: "Baum", t7_i1: "Blatt", t7_i2: "Eiche", t7_i3: "Zweig", t7_i4: "Buche",
    t8_title: "Check", t8_text: "Botaniker.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Frühblüher?", t8_qa: "Tulpe", t8_qb: "Kürbis", t8_qc: "Rose", t8_qd: "Tanne",
    t8_w1: "Wir", t8_w2: "haben", t8_w3: "den", t8_w4: "Kreislauf", t8_w5: "der", t8_w6: "Natur", t8_w7: "genau", t8_w8: "beobachtet.",
    t8_l1: "Blüte", t8_r1: "Schön", t8_l2: "Samen", t8_r2: "Klein", t8_l3: "Frucht", t8_r3: "Essen",
    t8_sent: "Pflanzen sind ___.", t8_qa2: "lebendig", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Pflanzen", t8_f2: "sind", t8_f3: "die", t8_f4: "Grundlage", t8_f5: "für", t8_f6: "alles", t8_f7: "Leben", t8_f8: "hier.", t8_f9: "",
    t8_tk1: "Biologie", t8_tk2: "hilft", t8_tk3: "uns", t8_tk4: "unsere", t8_tk5: "wundervolle", t8_tk6: "Umwelt", t8_tk7: "zu", t8_tk8: "schützen.", t8_tk9: "", t8_tk10: "",
    t8_bl1: "Natur", t8_bl2: "Garten", t8_i1: "Wald", t8_i2: "Park", t8_i3: "Wiese", t8_i4: "Beet",
  },
};

export const PFLANZEN_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Pflanzenbau", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "t1_sent", choices: ["t1_qa2", "t1_qb2", "t1_qc2", "t1_qd2"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "Die Blüte", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Bestäubung", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Befruchtung", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Verbreitung", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Keimung", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Laubbaum", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Check", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

export const FINALE_K5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "K5 Abschluss-Diplom",
    t1_title: "Bio-Review", t1_text: "Leben.", t1_inst: "Löse die Aufgabe:", t1_h1: "Schau genau hin!", t1_h2: "Denk nach!", t1_q: "Schutz Gehirn?", t1_qa: "Schädel", t1_qb: "Haut", t1_qc: "Haar", t1_qd: "Hut",
    t1_w1: "Die", t1_w2: "Biologie", t1_w3: "ist", t1_w4: "die", t1_w5: "Lehre", t1_w6: "von", t1_w7: "allen", t1_w8: "Lebewesen.",
    t1_l1: "Zelle", t1_r1: "Kern", t1_l2: "Knochen", t1_r2: "Halt", t1_l3: "Tier", t1_r3: "Winter",
    t1_sent: "Zellen haben einen ___.", t1_qa2: "Kern", t1_qb2: "falsch", t1_qc2: "nicht", t1_qd2: "vielleicht",
    t1_f1: "Wir", t1_f2: "haben", t1_f3: "den", t1_f4: "Aufbau", t1_f5: "einer", t1_f6: "Pflanzenzelle", t1_f7: "genau", t1_f8: "studiert.", t1_f9: "",
    t1_tk1: "Das", t1_tk2: "menschliche", t1_tk3: "Skelett", t1_tk4: "ist", t1_tk5: "ein", t1_tk6: "Meisterwerk", t1_tk7: "der", t1_tk8: "Natur.", t1_tk9: "", t1_tk10: "",
    t1_bl1: "Bio", t1_bl2: "Nicht", t1_i1: "Zelle", t1_i2: "Stein", t1_i3: "Blatt", t1_i4: "Auto",
    t2_title: "Geo-Review", t2_text: "Erde.", t2_inst: "Löse die Aufgabe:", t2_h1: "Schau genau hin!", t2_h2: "Denk nach!", t2_q: "Hauptstadt Frankreich?", t2_qa: "Paris", t2_qb: "Rom", t2_qc: "Berlin", t2_qd: "Wien",
    t2_w1: "Europa", t2_w2: "ist", t2_w3: "ein", t2_w4: "Kontinent", t2_w5: "mit", t2_w6: "sehr", t2_w7: "vielen", t2_w8: "Ländern.",
    t2_l1: "Ost", t2_r1: "Polen", t2_l2: "West", t2_r2: "Frankreich", t2_l3: "Süd", t2_r3: "Italien",
    t2_sent: "Europa ist ein ___.", t2_qa2: "Kontinent", t2_qb2: "falsch", t2_qc2: "nicht", t2_qd2: "vielleicht",
    t2_f1: "Die", t2_f2: "Europäische", t2_f3: "Union", t2_f4: "sorgt", t2_f5: "für", t2_f6: "Frieden", t2_f7: "und", t2_f8: "Handel.", t2_f9: "",
    t2_tk1: "Mit", t2_tk2: "einem", t2_tk3: "Atlas", t2_tk4: "findet", t2_tk5: "man", t2_tk6: "jeden", t2_tk7: "Ort", t2_tk8: "der", t2_tk9: "Welt.", t2_tk10: "",
    t2_bl1: "Land", t2_bl2: "Stadt", t2_i1: "Polen", t2_i2: "Warschau", t2_i3: "Spanien", t2_i4: "Madrid",
    t3_title: "Physik-Review", t3_text: "Kraft.", t3_inst: "Löse die Aufgabe:", t3_h1: "Schau genau hin!", t3_h2: "Denk nach!", t3_q: "Zieht Eisen?", t3_qa: "Magnet", t3_qb: "Holz", t3_qc: "Glas", t3_qd: "Luft",
    t3_w1: "Spannung", t3_w2: "und", t3_w3: "Stromstärke", t3_w4: "sind", t3_w5: "wichtige", t3_w6: "elektrische", t3_w7: "Größen", t3_w8: "geworden.",
    t3_l1: "Volt", t3_r1: "U", t3_l2: "Ampere", t3_r2: "I", t3_l3: "Watt", t3_r3: "P",
    t3_sent: "Strom braucht einen ___.", t3_qa2: "Kreis", t3_qb2: "falsch", t3_qc2: "nicht", t3_qd2: "vielleicht",
    t3_f1: "Sicherheit", t3_f2: "geht", t3_f3: "vor", t3_f4: "beim", t3_f5: "Umgang", t3_f6: "mit", t3_f7: "dem", t3_f8: "Strom.", t3_f9: "",
    t3_tk1: "Elektromagnete", t3_tk2: "kann", t3_tk3: "man", t3_tk4: "mit", t3_tk5: "einem", t3_tk6: "Schalter", t3_tk7: "einfach", t3_tk8: "ausschalten.", t3_tk9: "", t3_tk10: "",
    t3_bl1: "Strom", t3_bl2: "Magnet", t3_i1: "Kabel", t3_i2: "Pol", t3_i3: "Akku", t3_i4: "Eisen",
    t4_title: "History-Review", t4_text: "Steinzeit.", t4_inst: "Löse die Aufgabe:", t4_h1: "Schau genau hin!", t4_h2: "Denk nach!", t4_q: "Mammutjäger?", t4_qa: "Neandertaler", t4_qb: "Ritter", t4_qc: "Römer", t4_qd: "Piraten",
    t4_w1: "In", t4_w2: "der", t4_w3: "Jungsteinzeit", t4_w4: "wurden", t4_w5: "die", t4_w6: "Menschen", t4_w7: "endlich", t4_w8: "sesshaft.",
    t4_l1: "Jäger", t4_r1: "Alt", t4_l2: "Bauer", t4_r2: "Jung", t4_l3: "Metall", t4_r3: "Bronze",
    t4_sent: "Wichtigstes Tool war ___.", t4_qa2: "Faustkeil", t4_qb2: "falsch", t4_qc2: "nicht", t4_qd2: "vielleicht",
    t4_f1: "Das", t4_f2: "Feuer", t4_f3: "bot", t4_f4: "Schutz", t4_f5: "und", t4_f6: "Wärme", t4_f7: "in", t4_f8: "der", t4_f9: "Höhle.",
    t4_tk1: "Töpfern", t4_tk2: "und", t4_tk3: "Weben", t4_tk4: "waren", t4_tk5: "große", t4_tk6: "Erfindungen", t4_tk7: "der", t4_tk8: "Menschheit.", t4_tk9: "", t4_tk10: "",
    t4_bl1: "Früher", t4_bl2: "Später", t4_i1: "Mammut", t4_i2: "Sesshaft", t4_i3: "Speer", t4_i4: "Dorf",
    t5_title: "Wetter-Review", t5_text: "Natur.", t5_inst: "Löse die Aufgabe:", t5_h1: "Schau genau hin!", t5_h2: "Denk nach!", t5_q: "Luftdruck?", t5_qa: "Barometer", t5_qb: "Uhr", t5_qc: "Waage", t5_qd: "Lineal",
    t5_w1: "Der", t5_w2: "Wasserkreislauf", t5_w3: "sorgt", t5_w4: "dafür", t5_w5: "dass", t5_w6: "es", t5_w7: "immer", t5_w8: "regnet.",
    t5_l1: "Eis", t5_r1: "Fest", t5_l2: "Nass", t5_r2: "Flüssig", t5_l3: "Dampf", t5_r3: "Gas",
    t5_sent: "Wasser gefriert bei ___.", t5_qa2: "Null", t5_qb2: "falsch", t5_qc2: "nicht", t5_qd2: "vielleicht",
    t5_f1: "Meteorologen", t5_f2: "sagen", t5_f3: "uns", t5_f4: "das", t5_f5: "Wetter", t5_f6: "für", t5_f7: "morgen", t5_f8: "voraus.", t5_f9: "",
    t5_tk1: "Klimaschutz", t5_tk2: "ist", t5_tk3: "wichtig", t5_tk4: "um", t5_tk5: "die", t5_tk6: "Erderwärmung", t5_tk7: "zu", t5_tk8: "stoppen.", t5_tk9: "", t5_tk10: "",
    t5_bl1: "Nass", t5_bl2: "Trocken", t5_i1: "Regen", t5_i2: "Wüste", t5_i3: "See", t5_i4: "Sand",
    t6_title: "Natur-Review", t6_text: "Winter.", t6_inst: "Löse die Aufgabe:", t6_h1: "Schau genau hin!", t6_h2: "Denk nach!", t6_q: "Nusssammler?", t6_qa: "Eichhörnchen", t6_qb: "Igel", t6_qc: "Frosch", t6_qd: "Hund",
    t6_w1: "Der", t6_w2: "Winterschlaf", t6_w3: "spart", t6_w4: "sehr", t6_w5: "viel", t6_w6: "kostbare", t6_w7: "Energie", t6_w8: "ein.",
    t6_l1: "Schlaf", t6_r1: "Igel", t6_l2: "Ruhe", t6_r2: "Dachs", t6_l3: "Starre", t6_r3: "Frosch",
    t6_sent: "Störche fliegen nach ___.", t6_qa2: "Süden", t6_qb2: "falsch", t6_qc2: "nicht", t6_qd2: "vielleicht",
    t6_f1: "Ein", t6_f2: "dickes", t6_f3: "Fell", t6_f4: "schützt", t6_f5: "vor", t6_f6: "der", t6_f7: "eisigen", t6_f8: "Kälte.", t6_f9: "",
    t6_tk1: "Wir", t6_tk2: "können", t6_tk3: "den", t6_tk4: "Vögeln", t6_tk5: "mit", t6_tk6: "einem", t6_tk7: "Futterhaus", t6_tk8: "helfen.", t6_tk9: "", t6_tk10: "",
    t6_bl1: "Bleibt", t6_bl2: "Zieht", t6_i1: "Meise", t6_i2: "Storch", t6_i3: "Spatz", t6_i4: "Schwalbe",
    t7_title: "Wissen", t7_text: "Forscher.", t7_inst: "Löse die Aufgabe:", t7_h1: "Schau genau hin!", t7_h2: "Denk nach!", t7_q: "Sachkunde?", t7_qa: "Welt erklären", t7_qb: "Schlafen", t7_qc: "Singen", t7_qd: "Turnen",
    t7_w1: "Behalte", t7_w2: "deine", t7_w3: "Neugier", t7_w4: "und", t7_w5: "stelle", t7_w6: "immer", t7_w7: "viele", t7_w8: "Fragen!",
    t7_l1: "Natur", t7_r1: "Bio", t7_l2: "Technik", t7_r2: "Physik", t7_l3: "Raum", t7_r3: "Geo",
    t7_sent: "Wissen ist ___.", t7_qa2: "Macht", t7_qb2: "falsch", t7_qc2: "nicht", t7_qd2: "vielleicht",
    t7_f1: "Die", t7_f2: "Welt", t7_f3: "ist", t7_f4: "voller", t7_f5: "Geheimnisse", t7_f6: "die", t7_f7: "wir", t7_f8: "entdecken", t7_f9: "können.",
    t7_tk1: "Ein", t7_tk2: "echter", t7_tk3: "Forscher", t7_tk4: "gibt", t7_tk5: "niemals", t7_tk6: "auf", t7_tk7: "wenn", t7_tk8: "er", t7_tk9: "sucht.", t7_tk10: "",
    t7_bl1: "Frage", t7_bl2: "Antwort", t7_i1: "Warum", t7_i2: "Darum", t7_i3: "Wie", t7_i4: "Deshalb",
    t8_title: "Abschluss", t8_text: "Diplom.", t8_inst: "Löse die Aufgabe:", t8_h1: "Schau genau hin!", t8_h2: "Denk nach!", t8_q: "Fertig?", t8_qa: "Ja!", t8_qb: "Nein", t8_qc: "Fast", t8_qd: "Hilfe",
    t8_w1: "Herzlichen", t8_w2: "Glückwunsch", t8_w3: "du", t8_w4: "hast", t8_w5: "das", t8_w6: "K5", t8_w7: "Diplom", t8_w8: "erreicht!",
    t8_l1: "Kopf", t8_r1: "Wissen", t8_l2: "Hand", t8_r2: "Können", t8_l3: "Herz", t8_r3: "Mut",
    t8_sent: "Ich bin nun ein ___.", t8_qa2: "Profi", t8_qb2: "falsch", t8_qc2: "nicht", t8_qd2: "vielleicht",
    t8_f1: "Feiere", t8_f2: "deinen", t8_f3: "Erfolg", t8_f4: "und", t8_f5: "sei", t8_f6: "stolz", t8_f7: "auf", t8_f8: "dich.", t8_f9: "",
    t8_tk1: "In", t8_tk2: "der", t8_tk3: "nächsten", t8_tk4: "Klasse", t8_tk5: "warten", t8_tk6: "viele", t8_tk7: "neue", t8_tk8: "Abenteuer", t8_tk9: "auf", t8_tk10: "dich.",
    t8_bl1: "Start", t8_bl2: "Ziel", t8_i1: "Anfang", t8_i2: "Diplom", t8_i3: "Test", t8_i4: "Sieg",
  },
};

export const FINALE_K5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "Bio-Review", color: "#4CAF50" },
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
    svg: { type: "word-display", word: "Physik-Review", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "History-Review", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left:"t4_l1",right:"t4_r1"},{left:"t4_l2",right:"t4_r2"},{left:"t4_l3",right:"t4_r3"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "Wetter-Review", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9","t5_tk10"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Natur-Review", color: "#4CAF50" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1","t6_f2","t6_f3","t6_f4","t6_f5","t6_f6","t6_f7","t6_f8","t6_f9"].filter(x=>x!=="") },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Wissen", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id:"b1",label:"t7_bl1"},{id:"b2",label:"t7_bl2"}], items: [{text:"t7_i1",bucketId:"b1"},{text:"t7_i2",bucketId:"b2"},{text:"t7_i3",bucketId:"b1"},{text:"t7_i4",bucketId:"b2"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "Abschluss", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5", "t8_w6", "t8_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  }
];

