// lib/explorerPools/informatikaK6_i6.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-6",
    t1_title: "HTML Tags", t1_text: "HTML-Tags sind Befehle in spitzen Klammern, die Webseiten strukturieren.", t1_inst: "Ordne die Paare zu:", t1_h1: "Tag öffnen und schließen!", t1_h2: "<tag>...</tag>", t1_q: "Wie sieht ein HTML-Tag aus?", t1_qa: "<tag>Inhalt</tag>", t1_qb: "[tag]Inhalt[/tag]", t1_qc: "{tag}Inhalt{/tag}", t1_qd: "(tag)Inhalt(/tag)",
    t1_l1: "<h1>", t1_r1: "Großer Titel", t1_l2: "<p>", t1_r2: "Absatz", t1_l3: "<img>", t1_r3: "Bild",
    t2_title: "HTML Grundstruktur", t2_text: "Jede HTML-Seite hat <html>, <head> und <body> als Grundstruktur.", t2_inst: "Fülle die Lücke aus:", t2_h1: "HTML > head + body", t2_h2: "Grundgerüst einer Webseite.", t2_q: "Was enthält der <body>-Tag?", t2_qa: "Den sichtbaren Inhalt der Seite", t2_qb: "Den Titel im Browser-Tab", t2_qc: "Die CSS-Stile", t2_qd: "Das Passwort",
    t2_sent: "Der ___ enthält den sichtbaren Inhalt einer Webseite.", t2_qa2: "<body>", t2_qb2: "<head>", t2_qc2: "<html>", t2_qd2: "<style>",
    t3_title: "Head und Body", t3_text: "<head> enthält Metadaten, <body> den sichtbaren Inhalt.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Metadaten oder Inhalt?", t3_h2: "Head = Infos, Body = Inhalt.", t3_q: "Was gehört in den <head>-Bereich?", t3_qa: "Titel und Metadaten", t3_qb: "Text und Bilder", t3_qc: "Buttons und Links", t3_qd: "Videos und Audio",
    t3_bl1: "<head>", t3_bl2: "<body>", t3_i1: "<title>", t3_i2: "<p>Text</p>", t3_i3: "<meta>", t3_i4: "<img>",
    t4_title: "Absatz-Tag", t4_text: "Der <p>-Tag erstellt einen neuen Textabsatz in HTML.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "<p> = Absatz.", t4_h2: "Paragraphen strukturieren!", t4_q: "Welcher Tag erstellt einen Absatz in HTML?", t4_qa: "<p>", t4_qb: "<h1>", t4_qc: "<div>", t4_qd: "<span>",
    t4_w1: "Der", t4_w2: "<p>-Tag", t4_w3: "erstellt", t4_w4: "einen", t4_w5: "Textabsatz.", t4_w6: "", t4_w7: "",
    t5_title: "Überschriften in HTML", t5_text: "<h1> ist die größte Überschrift, <h6> die kleinste in HTML.", t5_inst: "Markiere das richtige Wort:", t5_h1: "h1 = größte Überschrift.", t5_h2: "h6 = kleinste Überschrift!", t5_q: "Welcher Tag ist die größte Überschrift?", t5_qa: "<h1>", t5_qb: "<h6>", t5_qc: "<p>", t5_qd: "<div>",
    t5_tk1: "<h1>", t5_tk2: "ist", t5_tk3: "die größte", t5_tk4: "Überschrift", t5_tk5: "in HTML.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-6",
    t1_title: "HTML Tags", t1_text: "HTML tags are commands in angle brackets that structure webpages.", t1_inst: "Match the pairs:", t1_h1: "Open and close tags!", t1_h2: "<tag>...</tag>", t1_q: "What does an HTML tag look like?", t1_qa: "<tag>content</tag>", t1_qb: "[tag]content[/tag]", t1_qc: "{tag}content{/tag}", t1_qd: "(tag)content(/tag)",
    t1_l1: "<h1>", t1_r1: "Large heading", t1_l2: "<p>", t1_r2: "Paragraph", t1_l3: "<img>", t1_r3: "Image",
    t2_title: "Basic HTML Structure", t2_text: "Every HTML page has <html>, <head> and <body> as the basic structure.", t2_inst: "Fill in the blank:", t2_h1: "HTML > head + body", t2_h2: "The skeleton of a webpage.", t2_q: "What does the <body> tag contain?", t2_qa: "The visible content of the page", t2_qb: "The title in the browser tab", t2_qc: "The CSS styles", t2_qd: "The password",
    t2_sent: "The ___ contains the visible content of a webpage.", t2_qa2: "<body>", t2_qb2: "<head>", t2_qc2: "<html>", t2_qd2: "<style>",
    t3_title: "Head and Body", t3_text: "<head> contains metadata, <body> contains the visible content.", t3_inst: "Sort into buckets:", t3_h1: "Metadata or content?", t3_h2: "Head = info, Body = content.", t3_q: "What belongs in the <head> section?", t3_qa: "Title and metadata", t3_qb: "Text and images", t3_qc: "Buttons and links", t3_qd: "Videos and audio",
    t3_bl1: "<head>", t3_bl2: "<body>", t3_i1: "<title>", t3_i2: "<p>text</p>", t3_i3: "<meta>", t3_i4: "<img>",
    t4_title: "Paragraph Tag", t4_text: "The <p> tag creates a new text paragraph in HTML.", t4_inst: "Put the words in order:", t4_h1: "<p> = paragraph.", t4_h2: "Structure paragraphs!", t4_q: "Which tag creates a paragraph in HTML?", t4_qa: "<p>", t4_qb: "<h1>", t4_qc: "<div>", t4_qd: "<span>",
    t4_w1: "The", t4_w2: "<p> tag", t4_w3: "creates", t4_w4: "a text", t4_w5: "paragraph.", t4_w6: "", t4_w7: "",
    t5_title: "Headings in HTML", t5_text: "<h1> is the largest heading, <h6> the smallest in HTML.", t5_inst: "Highlight the correct word:", t5_h1: "h1 = largest heading.", t5_h2: "h6 = smallest heading!", t5_q: "Which tag is the largest heading?", t5_qa: "<h1>", t5_qb: "<h6>", t5_qc: "<p>", t5_qd: "<div>",
    t5_tk1: "<h1>", t5_tk2: "is", t5_tk3: "the largest", t5_tk4: "heading", t5_tk5: "in HTML.", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-6",
    t1_title: "HTML tag-ek", t1_text: "A HTML tag-ek csúcsos zárójelben lévő parancsok, amelyek struktúrálják a weboldalakat.", t1_inst: "Párosítsd össze:", t1_h1: "Tag megnyitása és bezárása!", t1_h2: "<tag>...</tag>", t1_q: "Hogyan néz ki egy HTML tag?", t1_qa: "<tag>tartalom</tag>", t1_qb: "[tag]tartalom[/tag]", t1_qc: "{tag}tartalom{/tag}", t1_qd: "(tag)tartalom(/tag)",
    t1_l1: "<h1>", t1_r1: "Nagy fejléc", t1_l2: "<p>", t1_r2: "Bekezdés", t1_l3: "<img>", t1_r3: "Kép",
    t2_title: "HTML alapstruktúra", t2_text: "Minden HTML oldal alapstruktúrája: <html>, <head> és <body>.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "HTML > head + body", t2_h2: "A weboldal vázlata.", t2_q: "Mit tartalmaz a <body> tag?", t2_qa: "Az oldal látható tartalmát", t2_qb: "A böngészőfül nevét", t2_qc: "A CSS stílusokat", t2_qd: "A jelszót",
    t2_sent: "A ___ tartalmazza a weboldal látható tartalmát.", t2_qa2: "<body>", t2_qb2: "<head>", t2_qc2: "<html>", t2_qd2: "<style>",
    t3_title: "Head és Body", t3_text: "A <head> metaadatokat tartalmaz, a <body> a látható tartalmat.", t3_inst: "Válogasd szét:", t3_h1: "Metaadat vagy tartalom?", t3_h2: "Head = info, Body = tartalom.", t3_q: "Mi kerül a <head> részbe?", t3_qa: "Cím és metaadatok", t3_qb: "Szöveg és képek", t3_qc: "Gombok és linkek", t3_qd: "Videók és hangok",
    t3_bl1: "<head>", t3_bl2: "<body>", t3_i1: "<title>", t3_i2: "<p>szöveg</p>", t3_i3: "<meta>", t3_i4: "<img>",
    t4_title: "Bekezdés tag", t4_text: "A <p> tag új szövegbekezdést hoz létre HTML-ben.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "<p> = bekezdés.", t4_h2: "Bekezdésekkel strukturálj!", t4_q: "Melyik tag hoz létre bekezdést HTML-ben?", t4_qa: "<p>", t4_qb: "<h1>", t4_qc: "<div>", t4_qd: "<span>",
    t4_w1: "A", t4_w2: "<p> tag", t4_w3: "szövegbekezdést", t4_w4: "hoz létre.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Fejlécek HTML-ben", t5_text: "A <h1> a legnagyobb fejléc, a <h6> a legkisebb HTML-ben.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "h1 = legnagyobb fejléc.", t5_h2: "h6 = legkisebb fejléc!", t5_q: "Melyik tag a legnagyobb fejléc?", t5_qa: "<h1>", t5_qb: "<h6>", t5_qc: "<p>", t5_qd: "<div>",
    t5_tk1: "A <h1>", t5_tk2: "a legnagyobb", t5_tk3: "fejléc", t5_tk4: "HTML-ben.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-6",
    t1_title: "Etichete HTML", t1_text: "Etichetele HTML sunt comenzi în paranteze unghiulare care structurează paginile web.", t1_inst: "Potrivește perechile:", t1_h1: "Deschide și închide etichetele!", t1_h2: "<tag>...</tag>", t1_q: "Cum arată o etichetă HTML?", t1_qa: "<tag>conținut</tag>", t1_qb: "[tag]conținut[/tag]", t1_qc: "{tag}conținut{/tag}", t1_qd: "(tag)conținut(/tag)",
    t1_l1: "<h1>", t1_r1: "Titlu mare", t1_l2: "<p>", t1_r2: "Paragraf", t1_l3: "<img>", t1_r3: "Imagine",
    t2_title: "Structura de bază HTML", t2_text: "Fiecare pagină HTML are <html>, <head> și <body> ca structură de bază.", t2_inst: "Completează spațiul liber:", t2_h1: "HTML > head + body", t2_h2: "Scheletul unei pagini web.", t2_q: "Ce conține eticheta <body>?", t2_qa: "Conținutul vizibil al paginii", t2_qb: "Titlul din tab-ul browserului", t2_qc: "Stilurile CSS", t2_qd: "Parola",
    t2_sent: "___ conține conținutul vizibil al paginii web.", t2_qa2: "<body>", t2_qb2: "<head>", t2_qc2: "<html>", t2_qd2: "<style>",
    t3_title: "Head și Body", t3_text: "<head> conține metadate, <body> conținutul vizibil.", t3_inst: "Sortează în găleți:", t3_h1: "Metadate sau conținut?", t3_h2: "Head = info, Body = conținut.", t3_q: "Ce aparține secțiunii <head>?", t3_qa: "Titlu și metadate", t3_qb: "Text și imagini", t3_qc: "Butoane și linkuri", t3_qd: "Videoclipuri și audio",
    t3_bl1: "<head>", t3_bl2: "<body>", t3_i1: "<title>", t3_i2: "<p>text</p>", t3_i3: "<meta>", t3_i4: "<img>",
    t4_title: "Eticheta de paragraf", t4_text: "Eticheta <p> creează un nou paragraf text în HTML.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "<p> = paragraf.", t4_h2: "Structurează cu paragrafe!", t4_q: "Ce etichetă creează un paragraf în HTML?", t4_qa: "<p>", t4_qb: "<h1>", t4_qc: "<div>", t4_qd: "<span>",
    t4_w1: "Eticheta", t4_w2: "<p>", t4_w3: "creează", t4_w4: "un paragraf text.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Titluri în HTML", t5_text: "<h1> este cel mai mare titlu, <h6> cel mai mic în HTML.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "h1 = titlu cel mai mare.", t5_h2: "h6 = titlu cel mai mic!", t5_q: "Ce etichetă reprezintă cel mai mare titlu?", t5_qa: "<h1>", t5_qb: "<h6>", t5_qc: "<p>", t5_qd: "<div>",
    t5_tk1: "<h1>", t5_tk2: "este", t5_tk3: "cel mai mare", t5_tk4: "titlu în HTML.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K6_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{text:"<h1>",bg:"#E91E63",color:"#fff"},{text:"<p>",bg:"#2196F3",color:"#fff"}] },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🏗️", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📋", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "¶", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📰", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
