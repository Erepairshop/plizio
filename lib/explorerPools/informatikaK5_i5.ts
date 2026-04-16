// lib/explorerPools/informatikaK5_i5.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 5",
    t1_title: "Schriftarten (Fonts)", t1_text: "Mit verschiedenen Schriftarten gestalten wir Texte schöner und lesbarer.", t1_inst: "Ordne die Paare zu:", t1_h1: "Welcher Stil ist was?", t1_h2: "Fett, kursiv oder normal?", t1_q: "Was bedeutet 'kursiv'?", t1_qa: "Schräggestellte Schrift", t1_qb: "Dicke Schrift", t1_qc: "Unterstrichene Schrift", t1_qd: "Große Schrift",
    t1_l1: "Fett", t1_r1: "Bold", t1_l2: "Kursiv", t1_r2: "Schräg", t1_l3: "Normal", t1_r3: "Regular",
    t2_title: "Absatz und Einzug", t2_text: "Ein Absatz trennt Textabschnitte. Mit Einzug rücken wir die erste Zeile ein.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Wie fängt ein neuer Abschnitt an?", t2_h2: "Enter = neuer Absatz.", t2_q: "Was trennt Textabschnitte voneinander?", t2_qa: "Ein Absatz", t2_qb: "Ein Wort", t2_qc: "Ein Bild", t2_qd: "Eine Datei",
    t2_sent: "Mit der Enter-Taste beginnt ein neuer ___.", t2_qa2: "Absatz", t2_qb2: "Ordner", t2_qc2: "Drucker", t2_qd2: "Monitor",
    t3_title: "Seitenränder (Ränder)", t3_text: "Ränder sind die Abstände zwischen Text und Seitenrand.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Was gehört zum Text, was zum Rand?", t3_h2: "Ränder = Abstände.", t3_q: "Was sind Seitenränder?", t3_qa: "Abstände zwischen Text und Rand", t3_qb: "Der Zeilenabstand", t3_qc: "Die Schriftgröße", t3_qd: "Die Schriftfarbe",
    t3_bl1: "Textinhalt", t3_bl2: "Seitenlayout", t3_i1: "Fließtext", t3_i2: "Ränder", t3_i3: "Wörter", t3_i4: "Zeilenabstand",
    t4_title: "Textausrichtung", t4_text: "Text kann linksbündig, rechtsbündig, zentriert oder Blocksatz sein.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Links, rechts oder Mitte?", t4_h2: "Blocksatz = beide Seiten gleich.", t4_q: "Was bedeutet 'zentriert'?", t4_qa: "Text in der Mitte", t4_qb: "Text am linken Rand", t4_qc: "Text am rechten Rand", t4_qd: "Text auf beiden Seiten",
    t4_w1: "Zentriert", t4_w2: "bedeutet", t4_w3: "der", t4_w4: "Text", t4_w5: "steht", t4_w6: "in", t4_w7: "der Mitte.",
    t5_title: "Rechtschreibprüfung", t5_text: "Die Rechtschreibprüfung markiert Fehler mit einer roten Wellenlinie.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Rote Linie = Fehler!", t5_h2: "Die Rechtschreibprüfung hilft.", t5_q: "Was zeigt eine rote Wellenlinie unter einem Wort?", t5_qa: "Rechtschreibfehler", t5_qb: "Korrekte Schreibweise", t5_qc: "Fettdruck", t5_qd: "Link",
    t5_tk1: "Rote", t5_tk2: "Wellenlinien", t5_tk3: "zeigen", t5_tk4: "Rechtschreibfehler", t5_tk5: "an.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer 5",
    t1_title: "Fonts", t1_text: "With different fonts we make texts more beautiful and readable.", t1_inst: "Match the pairs:", t1_h1: "Which style is what?", t1_h2: "Bold, italic or normal?", t1_q: "What does 'italic' mean?", t1_qa: "Slanted text", t1_qb: "Thick text", t1_qc: "Underlined text", t1_qd: "Large text",
    t1_l1: "Bold", t1_r1: "Thick", t1_l2: "Italic", t1_r2: "Slanted", t1_l3: "Normal", t1_r3: "Regular",
    t2_title: "Paragraph and Indent", t2_text: "A paragraph separates text sections. Indent moves the first line inward.", t2_inst: "Fill in the blank:", t2_h1: "How does a new section start?", t2_h2: "Enter = new paragraph.", t2_q: "What separates text sections?", t2_qa: "A paragraph", t2_qb: "A word", t2_qc: "A picture", t2_qd: "A file",
    t2_sent: "The Enter key starts a new ___.", t2_qa2: "paragraph", t2_qb2: "folder", t2_qc2: "printer", t2_qd2: "monitor",
    t3_title: "Margins", t3_text: "Margins are the spaces between text and the page edge.", t3_inst: "Sort into buckets:", t3_h1: "What belongs to text, what to margin?", t3_h2: "Margins = spacing.", t3_q: "What are page margins?", t3_qa: "Space between text and edge", t3_qb: "Line spacing", t3_qc: "Font size", t3_qd: "Font color",
    t3_bl1: "Text content", t3_bl2: "Page layout", t3_i1: "Body text", t3_i2: "Margins", t3_i3: "Words", t3_i4: "Line spacing",
    t4_title: "Text Alignment", t4_text: "Text can be left, right, centered or justified.", t4_inst: "Put the words in order:", t4_h1: "Left, right or center?", t4_h2: "Justified = both sides equal.", t4_q: "What does 'centered' mean?", t4_qa: "Text in the middle", t4_qb: "Text at left edge", t4_qc: "Text at right edge", t4_qd: "Text on both sides",
    t4_w1: "Centered", t4_w2: "means", t4_w3: "the", t4_w4: "text", t4_w5: "is", t4_w6: "in", t4_w7: "the middle.",
    t5_title: "Spell Checker", t5_text: "The spell checker marks errors with a red wavy line.", t5_inst: "Highlight the correct word:", t5_h1: "Red line = error!", t5_h2: "Spell checker helps.", t5_q: "What does a red wavy line under a word mean?", t5_qa: "Spelling error", t5_qb: "Correct spelling", t5_qc: "Bold text", t5_qd: "Hyperlink",
    t5_tk1: "Red", t5_tk2: "wavy lines", t5_tk3: "show", t5_tk4: "spelling errors.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező 5",
    t1_title: "Betűtípusok", t1_text: "Különböző betűtípusokkal szebbé és olvashatóbbá tesszük a szöveget.", t1_inst: "Párosítsd össze:", t1_h1: "Melyik stílus mi?", t1_h2: "Félkövér, dőlt vagy normál?", t1_q: "Mit jelent a 'dőlt' betű?", t1_qa: "Döntött szöveg", t1_qb: "Vastag szöveg", t1_qc: "Aláhúzott szöveg", t1_qd: "Nagy szöveg",
    t1_l1: "Félkövér", t1_r1: "Vastag", t1_l2: "Dőlt", t1_r2: "Döntött", t1_l3: "Normál", t1_r3: "Alap",
    t2_title: "Bekezdés és behúzás", t2_text: "A bekezdés szövegrészeket választ el. A behúzás az első sort beljebb tolja.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Hogyan kezdődik az új rész?", t2_h2: "Enter = új bekezdés.", t2_q: "Mi választja el a szövegrészeket?", t2_qa: "A bekezdés", t2_qb: "Egy szó", t2_qc: "Egy kép", t2_qd: "Egy fájl",
    t2_sent: "Az Enter gombbal új ___ kezdünk.", t2_qa2: "bekezdést", t2_qb2: "mappát", t2_qc2: "nyomtatót", t2_qd2: "monitort",
    t3_title: "Margók", t3_text: "A margó a szöveg és az oldal széle közötti távolság.", t3_inst: "Válogasd szét:", t3_h1: "Mi tartozik a szöveghez, mi a margóhoz?", t3_h2: "Margó = távolság.", t3_q: "Mik az oldalmargók?", t3_qa: "A szöveg és az oldal széle közötti hely", t3_qb: "A sorköz", t3_qc: "A betűméret", t3_qd: "A betűszín",
    t3_bl1: "Szövegtartalom", t3_bl2: "Oldalelrendezés", t3_i1: "Folyó szöveg", t3_i2: "Margók", t3_i3: "Szavak", t3_i4: "Sorköz",
    t4_title: "Sorkizárás", t4_text: "A szöveg lehet balra zárt, jobbra zárt, középre zárt vagy sorkizárt.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Bal, jobb vagy közép?", t4_h2: "Sorkizárt = mindkét oldal egyforma.", t4_q: "Mit jelent a 'középre zárt'?", t4_qa: "Szöveg középen van", t4_qb: "Szöveg bal szélen van", t4_qc: "Szöveg jobb szélen van", t4_qd: "Szöveg mindkét oldalon",
    t4_w1: "A középre", t4_w2: "zárt szöveg", t4_w3: "az oldal", t4_w4: "közepén", t4_w5: "helyezkedik el.", t4_w6: "", t4_w7: "",
    t5_title: "Helyesírás-ellenőrző", t5_text: "A helyesírás-ellenőrző piros hullámvonallal jelzi a hibákat.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Piros vonal = hiba!", t5_h2: "A helyesírás-ellenőrző segít.", t5_q: "Mit jelent a piros hullámvonal egy szó alatt?", t5_qa: "Helyesírási hiba", t5_qb: "Helyes írás", t5_qc: "Félkövér szöveg", t5_qd: "Hivatkozás",
    t5_tk1: "Piros", t5_tk2: "hullámvonal", t5_tk3: "jelzi", t5_tk4: "a helyesírási hibát.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 5",
    t1_title: "Fonturi", t1_text: "Cu diferite fonturi facem textele mai frumoase și mai lizibile.", t1_inst: "Potrivește perechile:", t1_h1: "Ce stil este ce?", t1_h2: "Bold, italic sau normal?", t1_q: "Ce înseamnă 'italic'?", t1_qa: "Text înclinat", t1_qb: "Text gros", t1_qc: "Text subliniat", t1_qd: "Text mare",
    t1_l1: "Bold", t1_r1: "Gros", t1_l2: "Italic", t1_r2: "Înclinat", t1_l3: "Normal", t1_r3: "Regular",
    t2_title: "Paragraf și indentare", t2_text: "Un paragraf separă secțiunile de text. Indentarea mută primul rând mai înăuntru.", t2_inst: "Completează spațiul liber:", t2_h1: "Cum începe o secțiune nouă?", t2_h2: "Enter = paragraf nou.", t2_q: "Ce separă secțiunile de text?", t2_qa: "Un paragraf", t2_qb: "Un cuvânt", t2_qc: "O imagine", t2_qd: "Un fișier",
    t2_sent: "Tasta Enter începe un nou ___.", t2_qa2: "paragraf", t2_qb2: "dosar", t2_qc2: "imprimantă", t2_qd2: "monitor",
    t3_title: "Margini", t3_text: "Marginile sunt spațiile dintre text și marginea paginii.", t3_inst: "Sortează în găleți:", t3_h1: "Ce aparține textului, ce marginii?", t3_h2: "Margini = spațiere.", t3_q: "Ce sunt marginile paginii?", t3_qa: "Spațiu dintre text și margine", t3_qb: "Spațierea rândurilor", t3_qc: "Dimensiunea fontului", t3_qd: "Culoarea fontului",
    t3_bl1: "Conținut text", t3_bl2: "Layout pagină", t3_i1: "Text curent", t3_i2: "Margini", t3_i3: "Cuvinte", t3_i4: "Spațiere rânduri",
    t4_title: "Aliniere text", t4_text: "Textul poate fi aliniat la stânga, dreapta, centrat sau justificat.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Stânga, dreapta sau centru?", t4_h2: "Justificat = ambele laturi egale.", t4_q: "Ce înseamnă 'centrat'?", t4_qa: "Textul este la mijloc", t4_qb: "Textul este la marginea stângă", t4_qc: "Textul este la marginea dreaptă", t4_qd: "Textul pe ambele laturi",
    t4_w1: "Centrat", t4_w2: "înseamnă", t4_w3: "textul", t4_w4: "este", t4_w5: "la mijloc.", t4_w6: "", t4_w7: "",
    t5_title: "Verificator ortografic", t5_text: "Verificatorul ortografic marchează erorile cu o linie roșie ondulată.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Linie roșie = eroare!", t5_h2: "Verificatorul ortografic ajută.", t5_q: "Ce înseamnă o linie roșie ondulată sub un cuvânt?", t5_qa: "Eroare ortografică", t5_qb: "Scriere corectă", t5_qc: "Text bold", t5_qd: "Hyperlink",
    t5_tk1: "Liniile", t5_tk2: "roșii", t5_tk3: "ondulate", t5_tk4: "indică erori ortografice.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K5_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{text:"B",bg:"#212121",color:"#fff"},{text:"I",bg:"#9E9E9E",color:"#fff"},{text:"U",bg:"#1565C0",color:"#fff"}] },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📄", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📐", color: "#795548" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "↔️", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "✅", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
