import type { PoolTopicDef } from "./types";

export const INFO_K6_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-8",
    t1_title: "Personenbezogene Daten", t1_text: "Personenbezogene Daten sind Infos, die jemanden identifizieren (Name, Adresse, Foto).", t1_inst: "Ordne die Paare zu:", t1_h1: "Persönlich oder nicht?", t1_h2: "Name, Foto, Adresse!", t1_q: "Was ist ein personenbezogenes Datum?", t1_qa: "Daten, die eine Person identifizieren", t1_qb: "Computerprogramme", t1_qc: "Bilder von Landschaften", t1_qd: "Wetterberichte",
    t1_l1: "Name", t1_r1: "Persönlich", t1_l2: "Lieblingsfarbe", t1_r2: "Nicht persönlich", t1_l3: "Adresse", t1_r3: "Persönlich",
    t2_title: "DSGVO / GDPR", t2_text: "Die DSGVO ist ein europäisches Gesetz, das persönliche Daten schützt.", t2_inst: "Fülle die Lücke aus:", t2_h1: "DSGVO = Datenschutzgesetz.", t2_h2: "In Europa gilt die DSGVO!", t2_q: "Wofür steht DSGVO?", t2_qa: "Datenschutz-Grundverordnung", t2_qb: "Digitale Software Grundversion", t2_qc: "Deutsche Sicherheitsverwaltung", t2_qd: "Daten-Speicher-Grundordnung",
    t2_sent: "Die DSGVO schützt persönliche ___ in Europa.", t2_qa2: "Daten", t2_qb2: "Computer", t2_qc2: "Geräte", t2_qd2: "Netzwerke",
    t3_title: "Cookie-Zustimmung", t3_text: "Beim ersten Besuchen einer Webseite musst du oft Cookies akzeptieren oder ablehnen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Zustimmen oder ablehnen?", t3_h2: "Du hast die Wahl!", t3_q: "Warum fragt eine Webseite nach Cookie-Zustimmung?", t3_qa: "Weil die DSGVO es vorschreibt", t3_qb: "Weil der Computer kaputt ist", t3_qc: "Weil das Passwort fehlt", t3_qd: "Weil die Webseite offline ist",
    t3_bl1: "Nötig", t3_bl2: "Optional", t3_i1: "Sitzungs-Cookie", t3_i2: "Werbe-Cookie", t3_i3: "Anmelde-Cookie", t3_i4: "Tracking-Cookie",
    t4_title: "Privates Surfen (Inkognito)", t4_text: "Im Inkognito-Modus speichert der Browser keinen Verlauf und keine Cookies.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Inkognito = kein Verlauf.", t4_h2: "Aber du bist nicht unsichtbar!", t4_q: "Was speichert der Browser im Inkognito-Modus NICHT?", t4_qa: "Verlauf und Cookies", t4_qb: "Internetverbindung", t4_qc: "Webseiten", t4_qd: "Passwörter",
    t4_w1: "Inkognito-Modus", t4_w2: "speichert", t4_w3: "keinen", t4_w4: "Browserverlauf.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Datenschutzeinstellungen", t5_text: "In den Datenschutzeinstellungen kannst du kontrollieren, wer deine Daten sehen darf.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Wer darf deine Daten sehen?", t5_h2: "Einstellungen kontrollieren!", t5_q: "Was kann man in den Datenschutzeinstellungen ändern?", t5_qa: "Wer deine Daten sehen darf", t5_qb: "Die Computergeschwindigkeit", t5_qc: "Die Bildschirmgröße", t5_qd: "Die Tastatursprache",
    t5_tk1: "Datenschutzeinstellungen", t5_tk2: "schützen", t5_tk3: "deine", t5_tk4: "persönlichen Daten.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-8",
    t1_title: "Personal Data", t1_text: "Personal data is information that identifies someone (name, address, photo).", t1_inst: "Match the pairs:", t1_h1: "Personal or not?", t1_h2: "Name, photo, address!", t1_q: "What is personal data?", t1_qa: "Data that identifies a person", t1_qb: "Computer programs", t1_qc: "Landscape images", t1_qd: "Weather reports",
    t1_l1: "Name", t1_r1: "Personal", t1_l2: "Favorite color", t1_r2: "Not personal", t1_l3: "Address", t1_r3: "Personal",
    t2_title: "GDPR", t2_text: "The GDPR is a European law that protects personal data.", t2_inst: "Fill in the blank:", t2_h1: "GDPR = data protection law.", t2_h2: "GDPR applies in Europe!", t2_q: "What does GDPR stand for?", t2_qa: "General Data Protection Regulation", t2_qb: "Global Digital Privacy Rights", t2_qc: "German Data Protection Rule", t2_qd: "General Database Protection Record",
    t2_sent: "The GDPR protects personal ___ in Europe.", t2_qa2: "data", t2_qb2: "computers", t2_qc2: "devices", t2_qd2: "networks",
    t3_title: "Cookie Consent", t3_text: "When first visiting a website you often need to accept or decline cookies.", t3_inst: "Sort into buckets:", t3_h1: "Accept or decline?", t3_h2: "You have the choice!", t3_q: "Why does a website ask for cookie consent?", t3_qa: "Because the GDPR requires it", t3_qb: "Because the computer is broken", t3_qc: "Because the password is missing", t3_qd: "Because the website is offline",
    t3_bl1: "Necessary", t3_bl2: "Optional", t3_i1: "Session cookie", t3_i2: "Advertising cookie", t3_i3: "Login cookie", t3_i4: "Tracking cookie",
    t4_title: "Private Browsing (Incognito)", t4_text: "In incognito mode the browser saves no history and no cookies.", t4_inst: "Put the words in order:", t4_h1: "Incognito = no history.", t4_h2: "But you're not invisible!", t4_q: "What does the browser NOT save in incognito mode?", t4_qa: "History and cookies", t4_qb: "Internet connection", t4_qc: "Websites", t4_qd: "Passwords",
    t4_w1: "Incognito mode", t4_w2: "saves", t4_w3: "no", t4_w4: "browser history.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Privacy Settings", t5_text: "In privacy settings you can control who is allowed to see your data.", t5_inst: "Highlight the correct word:", t5_h1: "Who may see your data?", t5_h2: "Control your settings!", t5_q: "What can you change in privacy settings?", t5_qa: "Who is allowed to see your data", t5_qb: "Computer speed", t5_qc: "Screen size", t5_qd: "Keyboard language",
    t5_tk1: "Privacy settings", t5_tk2: "protect", t5_tk3: "your", t5_tk4: "personal data.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-8",
    t1_title: "Személyes adatok", t1_text: "A személyes adatok olyan információk, amelyek azonosítanak valakit (név, cím, fotó).", t1_inst: "Párosítsd össze:", t1_h1: "Személyes vagy sem?", t1_h2: "Név, fotó, cím!", t1_q: "Mi a személyes adat?", t1_qa: "Olyan adat, ami azonosít egy személyt", t1_qb: "Számítógépes programok", t1_qc: "Tájképek", t1_qd: "Időjárás-jelentések",
    t1_l1: "Név", t1_r1: "Személyes", t1_l2: "Kedvenc szín", t1_r2: "Nem személyes", t1_l3: "Cím", t1_r3: "Személyes",
    t2_title: "GDPR (adatvédelmi rendelet)", t2_text: "A GDPR egy európai törvény, amely védi a személyes adatokat.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "GDPR = adatvédelmi törvény.", t2_h2: "Európában érvényes a GDPR!", t2_q: "Mit jelent a GDPR?", t2_qa: "Általános Adatvédelmi Rendelet", t2_qb: "Globális Digitális Jogok", t2_qc: "Általános Digitális Program", t2_qd: "Globális Adatbázis-védelem",
    t2_sent: "A GDPR védi a személyes ___ Európában.", t2_qa2: "adatokat", t2_qb2: "számítógépeket", t2_qc2: "eszközöket", t2_qd2: "hálózatokat",
    t3_title: "Cookie-hozzájárulás", t3_text: "Egy weboldal első látogatásakor sokszor el kell fogadni vagy el kell utasítani a cookie-kat.", t3_inst: "Válogasd szét:", t3_h1: "Elfogadod vagy visszautasítod?", t3_h2: "Te döntesz!", t3_q: "Miért kér egy weboldal cookie-hozzájárulást?", t3_qa: "Mert a GDPR előírja", t3_qb: "Mert a számítógép elromlott", t3_qc: "Mert a jelszó hiányzik", t3_qd: "Mert a weboldal offline",
    t3_bl1: "Szükséges", t3_bl2: "Opcionális", t3_i1: "Munkamenet cookie", t3_i2: "Reklám cookie", t3_i3: "Bejelentkezési cookie", t3_i4: "Nyomkövető cookie",
    t4_title: "Privát böngészés (inkognitó)", t4_text: "Inkognitó módban a böngésző nem ment előzményeket és cookie-kat.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Inkognitó = nincs előzmény.", t4_h2: "De nem vagy láthatatlan!", t4_q: "Mit NEM ment a böngésző inkognitó módban?", t4_qa: "Előzményeket és cookie-kat", t4_qb: "Internetkapcsolatot", t4_qc: "Weboldalakat", t4_qd: "Jelszavakat",
    t4_w1: "Az inkognitó mód", t4_w2: "nem ment", t4_w3: "böngészési", t4_w4: "előzményeket.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Adatvédelmi beállítások", t5_text: "Az adatvédelmi beállításokban szabályozhatod, ki láthatja az adataidat.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Ki láthatja az adataidat?", t5_h2: "Szabályozd a beállításokat!", t5_q: "Mit változtathatsz az adatvédelmi beállításokban?", t5_qa: "Ki láthatja az adataidat", t5_qb: "A számítógép sebességét", t5_qc: "A képernyő méretét", t5_qd: "A billentyűzet nyelvét",
    t5_tk1: "Az adatvédelmi", t5_tk2: "beállítások", t5_tk3: "védik", t5_tk4: "személyes adataidat.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-8",
    t1_title: "Date personale", t1_text: "Datele personale sunt informații care identifică o persoană (nume, adresă, fotografie).", t1_inst: "Potrivește perechile:", t1_h1: "Personal sau nu?", t1_h2: "Nume, fotografie, adresă!", t1_q: "Ce sunt datele personale?", t1_qa: "Date care identifică o persoană", t1_qb: "Programe de calculator", t1_qc: "Imagini cu peisaje", t1_qd: "Buletine meteo",
    t1_l1: "Nume", t1_r1: "Personal", t1_l2: "Culoare preferată", t1_r2: "Nepersonal", t1_l3: "Adresă", t1_r3: "Personal",
    t2_title: "GDPR", t2_text: "GDPR este o lege europeană care protejează datele personale.", t2_inst: "Completează spațiul liber:", t2_h1: "GDPR = lege de protecție a datelor.", t2_h2: "GDPR se aplică în Europa!", t2_q: "Ce înseamnă GDPR?", t2_qa: "Regulamentul General de Protecție a Datelor", t2_qb: "Drepturi Digitale Globale", t2_qc: "Regulă Germană de Protecție", t2_qd: "Registru General de Protecție",
    t2_sent: "GDPR protejează ___ personale în Europa.", t2_qa2: "datele", t2_qb2: "calculatoarele", t2_qc2: "dispozitivele", t2_qd2: "rețelele",
    t3_title: "Consimțământ cookie", t3_text: "La prima vizitare a unui site web trebuie adesea să accepți sau să refuzi cookie-urile.", t3_inst: "Sortează în găleți:", t3_h1: "Accepți sau refuzi?", t3_h2: "Tu alegi!", t3_q: "De ce cere un site web consimțământul pentru cookie?", t3_qa: "Deoarece GDPR o cere", t3_qb: "Deoarece calculatorul este stricat", t3_qc: "Deoarece parola lipsește", t3_qd: "Deoarece site-ul este offline",
    t3_bl1: "Necesar", t3_bl2: "Opțional", t3_i1: "Cookie de sesiune", t3_i2: "Cookie publicitate", t3_i3: "Cookie autentificare", t3_i4: "Cookie de urmărire",
    t4_title: "Navigare privată (Incognito)", t4_text: "În modul incognito browserul nu salvează istoric și nici cookie-uri.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Incognito = fără istoric.", t4_h2: "Dar nu ești invizibil!", t4_q: "Ce NU salvează browserul în modul incognito?", t4_qa: "Istoric și cookie-uri", t4_qb: "Conexiunea la internet", t4_qc: "Site-urile web", t4_qd: "Parolele",
    t4_w1: "Modul incognito", t4_w2: "nu salvează", t4_w3: "istoricul", t4_w4: "de navigare.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Setări de confidențialitate", t5_text: "În setările de confidențialitate poți controla cine are voie să-ți vadă datele.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Cine îți poate vedea datele?", t5_h2: "Controlează setările!", t5_q: "Ce poți schimba în setările de confidențialitate?", t5_qa: "Cine are voie să-ți vadă datele", t5_qb: "Viteza calculatorului", t5_qc: "Dimensiunea ecranului", t5_qd: "Limba tastaturii",
    t5_tk1: "Setările de", t5_tk2: "confidențialitate", t5_tk3: "protejează", t5_tk4: "datele personale.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K6_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🍪", color: "#FF9800" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🕵️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
