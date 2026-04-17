// lib/explorerPools/informatikaK5_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 3",
    t1_title: "Textverarbeitungsprogramm", t1_text: "Mit Word schreiben und formatieren wir Texte am Computer.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was macht welches Programm?", t1_h2: "Word, Excel, Paint!", t1_q: "Welches Programm benutzt man für Briefe?", t1_qa: "Word", t1_qb: "Excel", t1_qc: "Paint", t1_qd: "PowerPoint",
    t1_l1: "Word", t1_r1: "Texte schreiben", t1_l2: "Excel", t1_r2: "Tabellen", t1_l3: "Paint", t1_r3: "Malen",
    t2_title: "Tabellenkalkulation", t2_text: "Mit Excel erstellen wir Tabellen und rechnen mit Zahlen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Rechnen mit Zahlen?", t2_h2: "Tabellen = Zeilen und Spalten.", t2_q: "Wofür benutzt man Excel?", t2_qa: "Tabellen und Berechnungen", t2_qb: "Bilder malen", t2_qc: "Videos schauen", t2_qd: "Musik hören",
    t2_sent: "Excel wird benutzt um ___ zu erstellen.", t2_qa2: "Tabellen", t2_qb2: "Briefe", t2_qc2: "Videos", t2_qd2: "Fotos",
    t3_title: "Malprogramm Paint", t3_text: "Mit Paint können wir Bilder zeichnen und Fotos bearbeiten.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Malen oder Rechnen?", t3_h2: "Welches Programm ist wofür?", t3_q: "Was kann man mit Paint machen?", t3_qa: "Bilder malen", t3_qb: "Tabellen erstellen", t3_qc: "Texte schreiben", t3_qd: "E-Mails senden",
    t3_bl1: "Bilder", t3_bl2: "Zahlen", t3_i1: "Paint", t3_i2: "Excel", t3_i3: "Foto bearbeiten", t3_i4: "Rechnung",
    t4_title: "Datei speichern", t4_text: "Mit Strg+S oder dem Speichern-Knopf sichern wir unsere Arbeit.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Strg+S ist zum...", t4_h2: "Nicht vergessen zu speichern!", t4_q: "Welche Tastenkombination speichert eine Datei?", t4_qa: "Strg+S", t4_qb: "Strg+C", t4_qc: "Strg+V", t4_qd: "Strg+Z",
    t4_w1: "Drücke", t4_w2: "Strg+S", t4_w3: "um", t4_w4: "die", t4_w5: "Datei", t4_w6: "zu", t4_w7: "speichern.",
    t5_title: "Kopieren und Einfügen", t5_text: "Mit Strg+C kopieren wir Text, mit Strg+V fügen wir ihn ein.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Kopieren = Strg+C", t5_h2: "Einfügen = Strg+V", t5_q: "Was macht Strg+V?", t5_qa: "Text einfügen", t5_qb: "Text löschen", t5_qc: "Text kopieren", t5_qd: "Text speichern",
    t5_tk1: "Strg+C", t5_tk2: "kopiert", t5_tk3: "und", t5_tk4: "Strg+V", t5_tk5: "fügt", t5_tk6: "ein.",
  },
  en: {
    explorer_title: "Informatics Explorer 3",
    t1_title: "Word Processor", t1_text: "With Word we write and format texts on the computer.", t1_inst: "Match the pairs:", t1_h1: "What does each program do?", t1_h2: "Word, Excel, Paint!", t1_q: "Which program do you use for letters?", t1_qa: "Word", t1_qb: "Excel", t1_qc: "Paint", t1_qd: "PowerPoint",
    t1_l1: "Word", t1_r1: "Write texts", t1_l2: "Excel", t1_r2: "Spreadsheets", t1_l3: "Paint", t1_r3: "Drawing",
    t2_title: "Spreadsheets", t2_text: "With Excel we create tables and calculate with numbers.", t2_inst: "Fill in the blank:", t2_h1: "Calculating with numbers?", t2_h2: "Tables = rows and columns.", t2_q: "What is Excel used for?", t2_qa: "Tables and calculations", t2_qb: "Painting pictures", t2_qc: "Watching videos", t2_qd: "Listening to music",
    t2_sent: "Excel is used to create ___.", t2_qa2: "spreadsheets", t2_qb2: "letters", t2_qc2: "videos", t2_qd2: "photos",
    t3_title: "Paint Drawing Program", t3_text: "With Paint we can draw pictures and edit photos.", t3_inst: "Sort into buckets:", t3_h1: "Drawing or calculating?", t3_h2: "Which program is for what?", t3_q: "What can you do with Paint?", t3_qa: "Draw pictures", t3_qb: "Create spreadsheets", t3_qc: "Write texts", t3_qd: "Send emails",
    t3_bl1: "Images", t3_bl2: "Numbers", t3_i1: "Paint", t3_i2: "Excel", t3_i3: "Edit photo", t3_i4: "Invoice",
    t4_title: "Saving a File", t4_text: "With Ctrl+S or the Save button we protect our work.", t4_inst: "Put the words in order:", t4_h1: "Ctrl+S is for...", t4_h2: "Don't forget to save!", t4_q: "Which keyboard shortcut saves a file?", t4_qa: "Ctrl+S", t4_qb: "Ctrl+C", t4_qc: "Ctrl+V", t4_qd: "Ctrl+Z",
    t4_w1: "Press", t4_w2: "Ctrl+S", t4_w3: "to", t4_w4: "save", t4_w5: "the", t4_w6: "file.", t4_w7: "",
    t5_title: "Copy and Paste", t5_text: "With Ctrl+C we copy text, with Ctrl+V we paste it.", t5_inst: "Highlight the correct word:", t5_h1: "Copy = Ctrl+C", t5_h2: "Paste = Ctrl+V", t5_q: "What does Ctrl+V do?", t5_qa: "Paste text", t5_qb: "Delete text", t5_qc: "Copy text", t5_qd: "Save text",
    t5_tk1: "Ctrl+C", t5_tk2: "copies", t5_tk3: "and", t5_tk4: "Ctrl+V", t5_tk5: "pastes", t5_tk6: "it.",
  },
  hu: {
    explorer_title: "Informatika Felfedező 3",
    t1_title: "Szövegszerkesztő program", t1_text: "A Word segítségével szövegeket írunk és formázunk a számítógépen.", t1_inst: "Párosítsd össze:", t1_h1: "Melyik program mit csinál?", t1_h2: "Word, Excel, Paint!", t1_q: "Melyik programot használjuk levelekhez?", t1_qa: "Word", t1_qb: "Excel", t1_qc: "Paint", t1_qd: "PowerPoint",
    t1_l1: "Word", t1_r1: "Szövegírás", t1_l2: "Excel", t1_r2: "Táblázatok", t1_l3: "Paint", t1_r3: "Rajzolás",
    t2_title: "Táblázatkezelő", t2_text: "Az Excellel táblázatokat készítünk és számolunk.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Számolás számokkal?", t2_h2: "Táblázat = sorok és oszlopok.", t2_q: "Mire való az Excel?", t2_qa: "Táblázatok és számítások", t2_qb: "Képek rajzolása", t2_qc: "Videók nézése", t2_qd: "Zene hallgatása",
    t2_sent: "Az Excel segítségével ___ készítünk.", t2_qa2: "táblázatot", t2_qb2: "levelet", t2_qc2: "videót", t2_qd2: "fotót",
    t3_title: "Paint rajzolóprogram", t3_text: "A Paint programmal képeket rajzolhatunk és fotókat szerkeszthetünk.", t3_inst: "Válogasd szét:", t3_h1: "Rajzolás vagy számolás?", t3_h2: "Melyik program mire való?", t3_q: "Mit csinálhatunk a Paint-tel?", t3_qa: "Képeket rajzolni", t3_qb: "Táblázatot készíteni", t3_qc: "Szöveget írni", t3_qd: "E-mailt küldeni",
    t3_bl1: "Képek", t3_bl2: "Számok", t3_i1: "Paint", t3_i2: "Excel", t3_i3: "Fotó szerkesztés", t3_i4: "Számítás",
    t4_title: "Fájl mentése", t4_text: "A Ctrl+S billentyűkombinációval vagy a Mentés gombbal biztosítjuk munkánkat.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "A Ctrl+S arra való, hogy...", t4_h2: "Ne felejtsd el menteni!", t4_q: "Melyik billentyűkombináció ment fájlt?", t4_qa: "Ctrl+S", t4_qb: "Ctrl+C", t4_qc: "Ctrl+V", t4_qd: "Ctrl+Z",
    t4_w1: "Nyomd", t4_w2: "meg", t4_w3: "a Ctrl+S-t", t4_w4: "a fájl", t4_w5: "mentéséhez.", t4_w6: "", t4_w7: "",
    t5_title: "Másolás és beillesztés", t5_text: "A Ctrl+C-vel másolunk, a Ctrl+V-vel illesztünk be szöveget.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Másolás = Ctrl+C", t5_h2: "Beillesztés = Ctrl+V", t5_q: "Mit csinál a Ctrl+V?", t5_qa: "Szöveget illeszt be", t5_qb: "Szöveget töröl", t5_qc: "Szöveget másol", t5_qd: "Szöveget ment",
    t5_tk1: "Ctrl+C", t5_tk2: "másol", t5_tk3: "és", t5_tk4: "Ctrl+V", t5_tk5: "beilleszt.", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 3",
    t1_title: "Procesor de text", t1_text: "Cu Word scriem și formatăm texte pe calculator.", t1_inst: "Potrivește perechile:", t1_h1: "Ce face fiecare program?", t1_h2: "Word, Excel, Paint!", t1_q: "Ce program folosim pentru scrisori?", t1_qa: "Word", t1_qb: "Excel", t1_qc: "Paint", t1_qd: "PowerPoint",
    t1_l1: "Word", t1_r1: "Scriere texte", t1_l2: "Excel", t1_r2: "Tabele", t1_l3: "Paint", t1_r3: "Desen",
    t2_title: "Foi de calcul", t2_text: "Cu Excel creăm tabele și calculăm cu numere.", t2_inst: "Completează spațiul liber:", t2_h1: "Calcul cu numere?", t2_h2: "Tabel = rânduri și coloane.", t2_q: "La ce folosim Excel?", t2_qa: "Tabele și calcule", t2_qb: "Desenat imagini", t2_qc: "Vizionat videoclipuri", t2_qd: "Ascultat muzică",
    t2_sent: "Excel se folosește pentru a crea ___.", t2_qa2: "tabele", t2_qb2: "scrisori", t2_qc2: "videoclipuri", t2_qd2: "fotografii",
    t3_title: "Programul de desen Paint", t3_text: "Cu Paint putem desena imagini și edita fotografii.", t3_inst: "Sortează în găleți:", t3_h1: "Desen sau calcul?", t3_h2: "Ce program este pentru ce?", t3_q: "Ce putem face cu Paint?", t3_qa: "Desena imagini", t3_qb: "Crea tabele", t3_qc: "Scrie texte", t3_qd: "Trimite emailuri",
    t3_bl1: "Imagini", t3_bl2: "Numere", t3_i1: "Paint", t3_i2: "Excel", t3_i3: "Editare foto", t3_i4: "Calcul",
    t4_title: "Salvarea unui fișier", t4_text: "Cu Ctrl+S sau butonul Salvare ne protejăm munca.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Ctrl+S este pentru...", t4_h2: "Nu uita să salvezi!", t4_q: "Ce combinație de taste salvează un fișier?", t4_qa: "Ctrl+S", t4_qb: "Ctrl+C", t4_qc: "Ctrl+V", t4_qd: "Ctrl+Z",
    t4_w1: "Apasă", t4_w2: "Ctrl+S", t4_w3: "pentru", t4_w4: "a salva", t4_w5: "fișierul.", t4_w6: "", t4_w7: "",
    t5_title: "Copiere și lipire", t5_text: "Cu Ctrl+C copiem textul, cu Ctrl+V îl lipim.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Copiere = Ctrl+C", t5_h2: "Lipire = Ctrl+V", t5_q: "Ce face Ctrl+V?", t5_qa: "Lipește text", t5_qb: "Șterge text", t5_qc: "Copiază text", t5_qd: "Salvează text",
    t5_tk1: "Ctrl+C", t5_tk2: "copiază", t5_tk3: "și", t5_tk4: "Ctrl+V", t5_tk5: "lipește.", t5_tk6: "",
  }
};

export const INFO_K5_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📝", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📊", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#FF5722" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💾", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{text:"C",bg:"#2196F3",color:"#fff"},{text:"V",bg:"#4CAF50",color:"#fff"}] },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [0,3] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
