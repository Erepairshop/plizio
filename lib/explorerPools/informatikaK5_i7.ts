// lib/explorerPools/informatikaK5_i7.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 7",
    t1_title: "Folie (Dia)", t1_text: "Eine Präsentation besteht aus Folien (Dias), wie die Seiten eines Buches.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was gehört zur Präsentation?", t1_h2: "Folie, Vorlage, Animation!", t1_q: "Wie heißt eine einzelne Seite einer Präsentation?", t1_qa: "Folie (Dia)", t1_qb: "Seite", t1_qc: "Zelle", t1_qd: "Absatz",
    t1_l1: "Folie", t1_r1: "Eine Seite der Präs.", t1_l2: "Vorlage", t1_r2: "Vorfertigtes Design", t1_l3: "Animation", t1_r3: "Bewegung",
    t2_title: "Vorlagen (Templates)", t2_text: "Vorlagen sind fertige Designs für Präsentationen, die Zeit sparen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Vorlagen = fertiges Design.", t2_h2: "Spart Zeit!", t2_q: "Was ist eine Vorlage in PowerPoint?", t2_qa: "Ein fertiges Design", t2_qb: "Eine leere Seite", t2_qc: "Ein Video", t2_qd: "Ein Diagramm",
    t2_sent: "Mit einer ___ spare ich beim Gestalten Zeit.", t2_qa2: "Vorlage", t2_qb2: "Formel", t2_qc2: "Datei", t2_qd2: "Maus",
    t3_title: "Animationen", t3_text: "Animationen lassen Texte und Bilder auf der Folie erscheinen oder verschwinden.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Bewegung oder fest?", t3_h2: "Animation = in Bewegung.", t3_q: "Was macht eine Animation?", t3_qa: "Elemente bewegen sich", t3_qb: "Elemente werden gelöscht", t3_qc: "Elemente werden kopiert", t3_qd: "Elemente werden gespeichert",
    t3_bl1: "Animiert", t3_bl2: "Fest", t3_i1: "Einblenden", t3_i2: "Textfeld", t3_i3: "Fliegen", t3_i4: "Bild",
    t4_title: "Übergänge", t4_text: "Übergänge sind die Effekte beim Wechsel von einer Folie zur nächsten.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Übergang = Folie wechseln.", t4_h2: "Sanft oder dramatisch?", t4_q: "Wann sieht man einen Übergang?", t4_qa: "Beim Wechsel zur nächsten Folie", t4_qb: "Beim Öffnen der Datei", t4_qc: "Beim Speichern", t4_qd: "Beim Drucken",
    t4_w1: "Übergänge", t4_w2: "verbinden", t4_w3: "die", t4_w4: "Folien", t4_w5: "optisch.", t4_w6: "", t4_w7: "",
    t5_title: "Aufzählungen", t5_text: "Aufzählungen (Bullet Points) helfen, Informationen übersichtlich zu gliedern.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Punkte oder Nummern?", t5_h2: "Übersichtlich gliedern!", t5_q: "Wofür verwendet man Aufzählungen in Präsentationen?", t5_qa: "Informationen gliedern", t5_qb: "Zahlen addieren", t5_qc: "Bilder malen", t5_qd: "E-Mails schreiben",
    t5_tk1: "Aufzählungspunkte", t5_tk2: "machen", t5_tk3: "Inhalte", t5_tk4: "übersichtlich.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer 7",
    t1_title: "Slide", t1_text: "A presentation consists of slides, like the pages of a book.", t1_inst: "Match the pairs:", t1_h1: "What belongs in a presentation?", t1_h2: "Slide, template, animation!", t1_q: "What is a single page of a presentation called?", t1_qa: "Slide", t1_qb: "Page", t1_qc: "Cell", t1_qd: "Paragraph",
    t1_l1: "Slide", t1_r1: "One page of pres.", t1_l2: "Template", t1_r2: "Ready-made design", t1_l3: "Animation", t1_r3: "Movement",
    t2_title: "Templates", t2_text: "Templates are ready-made designs for presentations that save time.", t2_inst: "Fill in the blank:", t2_h1: "Template = ready design.", t2_h2: "Saves time!", t2_q: "What is a template in PowerPoint?", t2_qa: "A ready-made design", t2_qb: "A blank page", t2_qc: "A video", t2_qd: "A chart",
    t2_sent: "A ___ saves me time when designing.", t2_qa2: "template", t2_qb2: "formula", t2_qc2: "file", t2_qd2: "mouse",
    t3_title: "Animations", t3_text: "Animations make texts and images appear or disappear on the slide.", t3_inst: "Sort into buckets:", t3_h1: "Moving or fixed?", t3_h2: "Animation = in motion.", t3_q: "What does an animation do?", t3_qa: "Elements move", t3_qb: "Elements are deleted", t3_qc: "Elements are copied", t3_qd: "Elements are saved",
    t3_bl1: "Animated", t3_bl2: "Fixed", t3_i1: "Fade in", t3_i2: "Text box", t3_i3: "Fly in", t3_i4: "Image",
    t4_title: "Transitions", t4_text: "Transitions are effects when changing from one slide to the next.", t4_inst: "Put the words in order:", t4_h1: "Transition = changing slide.", t4_h2: "Smooth or dramatic?", t4_q: "When do you see a transition?", t4_qa: "When moving to the next slide", t4_qb: "When opening the file", t4_qc: "When saving", t4_qd: "When printing",
    t4_w1: "Transitions", t4_w2: "connect", t4_w3: "slides", t4_w4: "visually.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Bullet Points", t5_text: "Bullet points help structure information clearly.", t5_inst: "Highlight the correct word:", t5_h1: "Dots or numbers?", t5_h2: "Structure clearly!", t5_q: "What are bullet points used for in presentations?", t5_qa: "Structure information", t5_qb: "Add numbers", t5_qc: "Draw pictures", t5_qd: "Write emails",
    t5_tk1: "Bullet points", t5_tk2: "make", t5_tk3: "content", t5_tk4: "clear.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező 7",
    t1_title: "Dia (diakép)", t1_text: "A prezentáció diákból (diakép) áll, mint a könyv lapjai.", t1_inst: "Párosítsd össze:", t1_h1: "Mi tartozik a prezentációhoz?", t1_h2: "Dia, sablon, animáció!", t1_q: "Hogy hívják a prezentáció egy oldalát?", t1_qa: "Dia (diakép)", t1_qb: "Oldal", t1_qc: "Cella", t1_qd: "Bekezdés",
    t1_l1: "Dia", t1_r1: "Prezentáció egy lapja", t1_l2: "Sablon", t1_r2: "Kész tervezési minta", t1_l3: "Animáció", t1_r3: "Mozgás",
    t2_title: "Sablonok (templates)", t2_text: "A sablonok kész tervezési minták prezentációkhoz, amelyek időt spórolnak.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Sablon = kész design.", t2_h2: "Időt takarít meg!", t2_q: "Mi a sablon a PowerPointban?", t2_qa: "Kész tervezési minta", t2_qb: "Üres oldal", t2_qc: "Videó", t2_qd: "Diagram",
    t2_sent: "A ___ segítségével időt spórolok tervezésnél.", t2_qa2: "sablon", t2_qb2: "képlet", t2_qc2: "fájl", t2_qd2: "egér",
    t3_title: "Animációk", t3_text: "Az animációk megjelenítik vagy eltüntetik a szövegeket és képeket a dián.", t3_inst: "Válogasd szét:", t3_h1: "Mozog vagy áll?", t3_h2: "Animáció = mozgás.", t3_q: "Mit csinál egy animáció?", t3_qa: "Az elemek mozognak", t3_qb: "Az elemek törlődnek", t3_qc: "Az elemek másolódnak", t3_qd: "Az elemek mentődnek",
    t3_bl1: "Animált", t3_bl2: "Fix", t3_i1: "Beúsztatás", t3_i2: "Szövegmező", t3_i3: "Repülés", t3_i4: "Kép",
    t4_title: "Áttűnések", t4_text: "Az áttűnések az egyik diáról a másikra váltás effektusai.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Áttűnés = diaváltás.", t4_h2: "Lágy vagy drámai?", t4_q: "Mikor látunk áttűnést?", t4_qa: "A következő diára váltáskor", t4_qb: "A fájl megnyitásakor", t4_qc: "Mentéskor", t4_qd: "Nyomtatáskor",
    t4_w1: "Az áttűnések", t4_w2: "vizuálisan", t4_w3: "kötik", t4_w4: "össze", t4_w5: "a diákat.", t4_w6: "", t4_w7: "",
    t5_title: "Felsorolások", t5_text: "A felsorolások (bullet pointok) segítenek az információkat átláthatóan csoportosítani.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Pontok vagy számok?", t5_h2: "Átláthatóan rendez!", t5_q: "Mire való a felsorolás a prezentációban?", t5_qa: "Információk rendezésére", t5_qb: "Számok összeadására", t5_qc: "Képek rajzolására", t5_qd: "E-mailek írására",
    t5_tk1: "A felsorolások", t5_tk2: "átláthatóvá", t5_tk3: "teszik", t5_tk4: "a tartalmat.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 7",
    t1_title: "Diapozitiv", t1_text: "O prezentare constă din diapozitive, ca paginile unei cărți.", t1_inst: "Potrivește perechile:", t1_h1: "Ce aparține unei prezentări?", t1_h2: "Diapozitiv, șablon, animație!", t1_q: "Cum se numește o singură pagină a unei prezentări?", t1_qa: "Diapozitiv", t1_qb: "Pagină", t1_qc: "Celulă", t1_qd: "Paragraf",
    t1_l1: "Diapozitiv", t1_r1: "O pagină de prez.", t1_l2: "Șablon", t1_r2: "Design gata făcut", t1_l3: "Animație", t1_r3: "Mișcare",
    t2_title: "Șabloane", t2_text: "Șabloanele sunt design-uri gata făcute pentru prezentări, care economisesc timp.", t2_inst: "Completează spațiul liber:", t2_h1: "Șablon = design gata.", t2_h2: "Economisești timp!", t2_q: "Ce este un șablon în PowerPoint?", t2_qa: "Un design gata făcut", t2_qb: "O pagină goală", t2_qc: "Un videoclip", t2_qd: "O diagramă",
    t2_sent: "Un ___ mă ajută să economisesc timp la design.", t2_qa2: "șablon", t2_qb2: "formulă", t2_qc2: "fișier", t2_qd2: "mouse",
    t3_title: "Animații", t3_text: "Animațiile fac ca textele și imaginile să apară sau să dispară pe diapozitiv.", t3_inst: "Sortează în găleți:", t3_h1: "În mișcare sau fix?", t3_h2: "Animație = în mișcare.", t3_q: "Ce face o animație?", t3_qa: "Elementele se mișcă", t3_qb: "Elementele se șterg", t3_qc: "Elementele se copiază", t3_qd: "Elementele se salvează",
    t3_bl1: "Animat", t3_bl2: "Fix", t3_i1: "Apariție", t3_i2: "Casetă text", t3_i3: "Zbor", t3_i4: "Imagine",
    t4_title: "Tranziții", t4_text: "Tranzițiile sunt efecte la trecerea de la un diapozitiv la altul.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Tranziție = schimbare diapozitiv.", t4_h2: "Lent sau dramatic?", t4_q: "Când se vede o tranziție?", t4_qa: "La trecerea la diapozitivul următor", t4_qb: "La deschiderea fișierului", t4_qc: "La salvare", t4_qd: "La tipărire",
    t4_w1: "Tranzițiile", t4_w2: "conectează", t4_w3: "diapozitivele", t4_w4: "vizual.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Liste cu marcatori", t5_text: "Listele cu marcatori ajută la structurarea clară a informațiilor.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Puncte sau numere?", t5_h2: "Structurare clară!", t5_q: "Pentru ce se folosesc listele cu marcatori în prezentări?", t5_qa: "Structurarea informațiilor", t5_qb: "Adunarea numerelor", t5_qc: "Desenarea imaginilor", t5_qd: "Scrierea emailurilor",
    t5_tk1: "Listele", t5_tk2: "cu marcatori", t5_tk3: "clarifică", t5_tk4: "conținutul.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K5_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🖥️", color: "#FF9800" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "✨", color: "#F44336" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "➡️", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📋", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
