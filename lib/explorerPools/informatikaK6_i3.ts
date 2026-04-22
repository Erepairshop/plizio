import type { PoolTopicDef } from "./types";

export const INFO_K6_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-3",
    t1_title: "URL (Webadresse)", t1_text: "Eine URL ist die Adresse einer Website im Internet (z.B. www.google.de).", t1_inst: "Ordne die Paare zu:", t1_h1: "URL = Webadresse", t1_h2: "Was steht am Anfang?", t1_q: "Was steht am Anfang einer URL?", t1_qa: "https://", t1_qb: "www@", t1_qc: "html:", t1_qd: "mail:",
    t1_l1: "https://", t1_r1: "Sicheres Protokoll", t1_l2: "www", t1_r2: "World Wide Web", t1_l3: ".de", t1_r3: "Deutsche Domain",
    t2_title: "Suchmaschinen", t2_text: "Suchmaschinen wie Google helfen uns, Webseiten im Internet zu finden.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Google, Bing, DuckDuckGo...", t2_h2: "Suchwörter eingeben!", t2_q: "Was ist eine Suchmaschine?", t2_qa: "Ein Programm zum Suchen im Internet", t2_qb: "Ein Computerspiel", t2_qc: "Ein Textverarbeitungsprogramm", t2_qd: "Ein E-Mail-Programm",
    t2_sent: "Google ist eine bekannte ___.", t2_qa2: "Suchmaschine", t2_qb2: "Festplatte", t2_qc2: "Tastatur", t2_qd2: "Kamera",
    t3_title: "Webbrowser", t3_text: "Ein Browser ist das Programm, mit dem wir Webseiten besuchen (Chrome, Firefox).", t3_inst: "Sortiere in die Eimer:", t3_h1: "Browser oder Suchmaschine?", t3_h2: "Unterschied beachten!", t3_q: "Was ist ein Webbrowser?", t3_qa: "Ein Programm zum Besuchen von Webseiten", t3_qb: "Eine Suchmaschine", t3_qc: "Ein Betriebssystem", t3_qd: "Ein Antivirenprogramm",
    t3_bl1: "Browser", t3_bl2: "Suchmaschine", t3_i1: "Chrome", t3_i2: "Google", t3_i3: "Firefox", t3_i4: "Bing",
    t4_title: "Cookies", t4_text: "Cookies sind kleine Datenpakete, die Webseiten auf deinem Computer speichern.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Cookies merken sich Infos.", t4_h2: "Angemeldet bleiben!", t4_q: "Wozu dienen Cookies?", t4_qa: "Webseiten speichern Einstellungen", t4_qb: "Bilder anzeigen", t4_qc: "Videos abspielen", t4_qd: "E-Mails senden",
    t4_w1: "Cookies", t4_w2: "speichern", t4_w3: "Daten", t4_w4: "auf dem Computer.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Cache (Zwischenspeicher)", t5_text: "Der Cache speichert Webseiteninhalte, damit sie beim nächsten Besuch schneller laden.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Cache = schnelleres Laden.", t5_h2: "Gespeicherte Daten helfen!", t5_q: "Was macht der Browser-Cache?", t5_qa: "Beschleunigt das Laden von Seiten", t5_qb: "Löscht Dateien", t5_qc: "Schreibt E-Mails", t5_qd: "Druckt Seiten",
    t5_tk1: "Der Cache", t5_tk2: "beschleunigt", t5_tk3: "das Laden", t5_tk4: "von Webseiten.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-3",
    t1_title: "URL (Web Address)", t1_text: "A URL is the address of a website on the internet (e.g. www.google.com).", t1_inst: "Match the pairs:", t1_h1: "URL = web address", t1_h2: "What comes at the start?", t1_q: "What comes at the start of a URL?", t1_qa: "https://", t1_qb: "www@", t1_qc: "html:", t1_qd: "mail:",
    t1_l1: "https://", t1_r1: "Secure protocol", t1_l2: "www", t1_r2: "World Wide Web", t1_l3: ".com", t1_r3: "Commercial domain",
    t2_title: "Search Engines", t2_text: "Search engines like Google help us find websites on the internet.", t2_inst: "Fill in the blank:", t2_h1: "Google, Bing, DuckDuckGo...", t2_h2: "Enter search words!", t2_q: "What is a search engine?", t2_qa: "A program for searching the internet", t2_qb: "A computer game", t2_qc: "A word processing program", t2_qd: "An email program",
    t2_sent: "Google is a well-known ___.", t2_qa2: "search engine", t2_qb2: "hard drive", t2_qc2: "keyboard", t2_qd2: "camera",
    t3_title: "Web Browser", t3_text: "A browser is the program we use to visit websites (Chrome, Firefox).", t3_inst: "Sort into buckets:", t3_h1: "Browser or search engine?", t3_h2: "Notice the difference!", t3_q: "What is a web browser?", t3_qa: "A program for visiting websites", t3_qb: "A search engine", t3_qc: "An operating system", t3_qd: "An antivirus program",
    t3_bl1: "Browser", t3_bl2: "Search engine", t3_i1: "Chrome", t3_i2: "Google", t3_i3: "Firefox", t3_i4: "Bing",
    t4_title: "Cookies", t4_text: "Cookies are small data packages that websites store on your computer.", t4_inst: "Put the words in order:", t4_h1: "Cookies remember info.", t4_h2: "Stay logged in!", t4_q: "What are cookies for?", t4_qa: "Websites store settings", t4_qb: "Display images", t4_qc: "Play videos", t4_qd: "Send emails",
    t4_w1: "Cookies", t4_w2: "store", t4_w3: "data", t4_w4: "on your computer.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Cache", t5_text: "The cache stores webpage content so it loads faster next time.", t5_inst: "Highlight the correct word:", t5_h1: "Cache = faster loading.", t5_h2: "Stored data helps!", t5_q: "What does the browser cache do?", t5_qa: "Speeds up loading of pages", t5_qb: "Deletes files", t5_qc: "Writes emails", t5_qd: "Prints pages",
    t5_tk1: "The cache", t5_tk2: "speeds up", t5_tk3: "loading", t5_tk4: "of webpages.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-3",
    t1_title: "URL (webcím)", t1_text: "Az URL egy weboldal címe az interneten (pl. www.google.hu).", t1_inst: "Párosítsd össze:", t1_h1: "URL = webcím", t1_h2: "Mi áll az elején?", t1_q: "Mi áll egy URL elején?", t1_qa: "https://", t1_qb: "www@", t1_qc: "html:", t1_qd: "mail:",
    t1_l1: "https://", t1_r1: "Biztonságos protokoll", t1_l2: "www", t1_r2: "World Wide Web", t1_l3: ".hu", t1_r3: "Magyar domain",
    t2_title: "Keresőmotorok", t2_text: "A keresőmotorok, mint a Google, segítenek weboldalakat találni az interneten.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Google, Bing, DuckDuckGo...", t2_h2: "Add meg a keresőszavakat!", t2_q: "Mi a keresőmotor?", t2_qa: "Program az internetes kereséshez", t2_qb: "Számítógépes játék", t2_qc: "Szövegszerkesztő program", t2_qd: "E-mail program",
    t2_sent: "A Google egy ismert ___.", t2_qa2: "keresőmotor", t2_qb2: "merevlemez", t2_qc2: "billentyűzet", t2_qd2: "kamera",
    t3_title: "Webböngésző", t3_text: "A böngésző az a program, amivel weboldalakat látogatunk (Chrome, Firefox).", t3_inst: "Válogasd szét:", t3_h1: "Böngésző vagy keresőmotor?", t3_h2: "Figyelj a különbségre!", t3_q: "Mi a webböngésző?", t3_qa: "Program weboldalak látogatásához", t3_qb: "Keresőmotor", t3_qc: "Operációs rendszer", t3_qd: "Vírusirtó program",
    t3_bl1: "Böngésző", t3_bl2: "Keresőmotor", t3_i1: "Chrome", t3_i2: "Google", t3_i3: "Firefox", t3_i4: "Bing",
    t4_title: "Cookie-k (sütik)", t4_text: "A cookie-k kis adatcsomagok, amelyeket a weboldalak tárolnak a számítógépeden.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "A cookie-k megjegyeznek infókat.", t4_h2: "Bejelentkezve maradni!", t4_q: "Mire valók a cookie-k?", t4_qa: "Weboldalak tárolják a beállításokat", t4_qb: "Képeket jelenítnek meg", t4_qc: "Videókat játszanak le", t4_qd: "E-maileket küldenek",
    t4_w1: "A cookie-k", t4_w2: "adatokat", t4_w3: "tárolnak", t4_w4: "a számítógépen.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Gyorsítótár (cache)", t5_text: "A gyorsítótár tárolja a weboldalak tartalmát, hogy legközelebb gyorsabban betöltődjön.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Cache = gyorsabb töltés.", t5_h2: "A tárolt adatok segítenek!", t5_q: "Mit csinál a böngésző gyorsítótára?", t5_qa: "Gyorsítja az oldalak betöltését", t5_qb: "Törli a fájlokat", t5_qc: "E-maileket ír", t5_qd: "Oldalakat nyomtat",
    t5_tk1: "A gyorsítótár", t5_tk2: "gyorsítja", t5_tk3: "a weboldalak", t5_tk4: "betöltését.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-3",
    t1_title: "URL (adresă web)", t1_text: "Un URL este adresa unui site web pe internet (ex. www.google.ro).", t1_inst: "Potrivește perechile:", t1_h1: "URL = adresă web", t1_h2: "Ce vine la început?", t1_q: "Ce vine la începutul unui URL?", t1_qa: "https://", t1_qb: "www@", t1_qc: "html:", t1_qd: "mail:",
    t1_l1: "https://", t1_r1: "Protocol securizat", t1_l2: "www", t1_r2: "World Wide Web", t1_l3: ".ro", t1_r3: "Domeniu românesc",
    t2_title: "Motoare de căutare", t2_text: "Motoarele de căutare precum Google ne ajută să găsim site-uri pe internet.", t2_inst: "Completează spațiul liber:", t2_h1: "Google, Bing, DuckDuckGo...", t2_h2: "Introdu cuvintele de căutare!", t2_q: "Ce este un motor de căutare?", t2_qa: "Un program pentru căutare pe internet", t2_qb: "Un joc pe calculator", t2_qc: "Un program de procesare text", t2_qd: "Un program de email",
    t2_sent: "Google este un ___ cunoscut.", t2_qa2: "motor de căutare", t2_qb2: "hard disk", t2_qc2: "tastatură", t2_qd2: "cameră",
    t3_title: "Browser web", t3_text: "Un browser este programul cu care vizităm site-uri web (Chrome, Firefox).", t3_inst: "Sortează în găleți:", t3_h1: "Browser sau motor de căutare?", t3_h2: "Observă diferența!", t3_q: "Ce este un browser web?", t3_qa: "Un program pentru vizitarea site-urilor", t3_qb: "Un motor de căutare", t3_qc: "Un sistem de operare", t3_qd: "Un antivirus",
    t3_bl1: "Browser", t3_bl2: "Motor de căutare", t3_i1: "Chrome", t3_i2: "Google", t3_i3: "Firefox", t3_i4: "Bing",
    t4_title: "Cookie-uri", t4_text: "Cookie-urile sunt pachete mici de date pe care site-urile le stochează pe calculatorul tău.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Cookie-urile rețin informații.", t4_h2: "Rămâi autentificat!", t4_q: "La ce servesc cookie-urile?", t4_qa: "Site-urile stochează setările", t4_qb: "Afișează imagini", t4_qc: "Redau videoclipuri", t4_qd: "Trimit emailuri",
    t4_w1: "Cookie-urile", t4_w2: "stochează", t4_w3: "date", t4_w4: "pe calculator.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Cache (memorie tampon)", t5_text: "Cache-ul stochează conținutul paginilor web pentru a se încărca mai repede data viitoare.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Cache = încărcare mai rapidă.", t5_h2: "Datele stocate ajută!", t5_q: "Ce face cache-ul browserului?", t5_qa: "Accelerează încărcarea paginilor", t5_qb: "Șterge fișierele", t5_qc: "Scrie emailuri", t5_qd: "Tipărește pagini",
    t5_tk1: "Cache-ul", t5_tk2: "accelerează", t5_tk3: "încărcarea", t5_tk4: "paginilor web.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K6_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🌐",label:"Browser"},{emoji:"🔍",label:"Search"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🍪", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
