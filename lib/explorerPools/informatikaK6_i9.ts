import type { PoolTopicDef } from "./types";

export const INFO_K6_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-9",
    t1_title: "Digitaler Fußabdruck", t1_text: "Alles, was wir online tun, hinterlässt einen digitalen Fußabdruck.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was hinterlässt Spuren?", t1_h2: "Online immer Spuren!", t1_q: "Was ist ein digitaler Fußabdruck?", t1_qa: "Spuren unserer Online-Aktivitäten", t1_qb: "Unser Körpergewicht digital", t1_qc: "Eine Datei auf USB", t1_qd: "Ein Computerprogramm",
    t1_l1: "Kommentar posten", t1_r1: "Hinterlässt Spur", t1_l2: "Offline lesen", t1_r2: "Hinterlässt keine Spur", t1_l3: "Video hochladen", t1_r3: "Hinterlässt Spur",
    t2_title: "Online-Reputation", t2_text: "Unsere Online-Reputation ist, wie andere uns im Internet wahrnehmen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Was denken andere über dich?", t2_h2: "Einmal online = für immer!", t2_q: "Was beeinflusst unsere Online-Reputation?", t2_qa: "Was wir online posten und schreiben", t2_qb: "Unsere Schuhgröße", t2_qc: "Die Computermarke", t2_qd: "Die Bildschirmauflösung",
    t2_sent: "Unsere Online-___ entsteht durch alles, was wir im Internet machen.", t2_qa2: "Reputation", t2_qb2: "Tastatur", t2_qc2: "Festplatte", t2_qd2: "Kabel",
    t3_title: "Soziale Medien", t3_text: "Soziale Medien wie Instagram oder TikTok verbinden Menschen, aber hinterlassen Daten.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Soziale Medien oder nicht?", t3_h2: "Instagram, TikTok, Facebook!", t3_q: "Was sind soziale Medien?", t3_qa: "Plattformen zum Teilen und Kommunizieren", t3_qb: "Textverarbeitungsprogramme", t3_qc: "Antivirenprogramme", t3_qd: "Betriebssysteme",
    t3_bl1: "Soziale Medien", t3_bl2: "Kein soziales Medium", t3_i1: "Instagram", t3_i2: "Word", t3_i3: "TikTok", t3_i4: "Excel",
    t4_title: "Löschbarkeit von Daten", t4_text: "Einmal ins Internet gestellte Daten sind fast nie wirklich weg – auch wenn du sie löschst.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Gelöscht heißt nicht verschwunden!", t4_h2: "Denk nach, bevor du postest!", t4_q: "Was passiert mit Daten, die du online gelöscht hast?", t4_qa: "Sie können oft noch gefunden werden", t4_qb: "Sie sind sofort weg", t4_qc: "Sie werden automatisch gespeichert", t4_qd: "Sie werden gedruckt",
    t4_w1: "Einmal online", t4_w2: "gestellte", t4_w3: "Daten", t4_w4: "bleiben erhalten.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Netiquette", t5_text: "Netiquette sind die Regeln des respektvollen Umgangs im Internet.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Respekt auch online!", t5_h2: "Wie im echten Leben!", t5_q: "Was bedeutet Netiquette?", t5_qa: "Regeln für respektvolles Verhalten im Internet", t5_qb: "Eine neue Internettechnologie", t5_qc: "Ein Antivirenprogramm", t5_qd: "Eine Art Programmiercode",
    t5_tk1: "Netiquette", t5_tk2: "bedeutet", t5_tk3: "respektvolles", t5_tk4: "Verhalten im Netz.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-9",
    t1_title: "Digital Footprint", t1_text: "Everything we do online leaves a digital footprint.", t1_inst: "Match the pairs:", t1_h1: "What leaves traces?", t1_h2: "Online always leaves traces!", t1_q: "What is a digital footprint?", t1_qa: "Traces of our online activities", t1_qb: "Our body weight digitally", t1_qc: "A file on USB", t1_qd: "A computer program",
    t1_l1: "Post a comment", t1_r1: "Leaves a trace", t1_l2: "Read offline", t1_r2: "Leaves no trace", t1_l3: "Upload a video", t1_r3: "Leaves a trace",
    t2_title: "Online Reputation", t2_text: "Our online reputation is how others perceive us on the internet.", t2_inst: "Fill in the blank:", t2_h1: "What do others think of you?", t2_h2: "Once online = forever!", t2_q: "What influences our online reputation?", t2_qa: "What we post and write online", t2_qb: "Our shoe size", t2_qc: "The computer brand", t2_qd: "Screen resolution",
    t2_sent: "Our online ___ is created by everything we do on the internet.", t2_qa2: "reputation", t2_qb2: "keyboard", t2_qc2: "hard drive", t2_qd2: "cable",
    t3_title: "Social Media", t3_text: "Social media like Instagram or TikTok connects people, but leaves data.", t3_inst: "Sort into buckets:", t3_h1: "Social media or not?", t3_h2: "Instagram, TikTok, Facebook!", t3_q: "What is social media?", t3_qa: "Platforms for sharing and communicating", t3_qb: "Word processing programs", t3_qc: "Antivirus programs", t3_qd: "Operating systems",
    t3_bl1: "Social media", t3_bl2: "Not social media", t3_i1: "Instagram", t3_i2: "Word", t3_i3: "TikTok", t3_i4: "Excel",
    t4_title: "Data Deletion", t4_text: "Once posted online, data is almost never truly gone – even if you delete it.", t4_inst: "Put the words in order:", t4_h1: "Deleted doesn't mean gone!", t4_h2: "Think before you post!", t4_q: "What happens to data you delete online?", t4_qa: "It can often still be found", t4_qb: "It is immediately gone", t4_qc: "It is automatically saved", t4_qd: "It is printed",
    t4_w1: "Once posted", t4_w2: "online,", t4_w3: "data", t4_w4: "often stays.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Netiquette", t5_text: "Netiquette are the rules of respectful behavior on the internet.", t5_inst: "Highlight the correct word:", t5_h1: "Respect online too!", t5_h2: "Like in real life!", t5_q: "What does netiquette mean?", t5_qa: "Rules for respectful behavior online", t5_qb: "A new internet technology", t5_qc: "An antivirus program", t5_qd: "A type of programming code",
    t5_tk1: "Netiquette", t5_tk2: "means", t5_tk3: "respectful", t5_tk4: "behavior online.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-9",
    t1_title: "Digitális lábnyom", t1_text: "Minden, amit online csinálunk, digitális lábnyomot hagy maga után.", t1_inst: "Párosítsd össze:", t1_h1: "Mi hagy nyomot?", t1_h2: "Online mindig nyomot hagy!", t1_q: "Mi a digitális lábnyom?", t1_qa: "Online tevékenységeink nyomai", t1_qb: "Digitálisan mért testsúlyunk", t1_qc: "Egy fájl az USB-n", t1_qd: "Egy számítógépes program",
    t1_l1: "Komment írása", t1_r1: "Nyomot hagy", t1_l2: "Offline olvasás", t1_r2: "Nem hagy nyomot", t1_l3: "Videó feltöltése", t1_r3: "Nyomot hagy",
    t2_title: "Online reputáció", t2_text: "Az online reputációnk az, ahogy mások az interneten látnak minket.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Mit gondolnak rólad mások?", t2_h2: "Egyszer online = örökre!", t2_q: "Mi befolyásolja az online reputációnkat?", t2_qa: "Amit online posztolunk és írunk", t2_qb: "A cipőméretünk", t2_qc: "A számítógép márkája", t2_qd: "A képernyőfelbontás",
    t2_sent: "Az online ___ mindabból alakul ki, amit az interneten csinálunk.", t2_qa2: "reputációnk", t2_qb2: "billentyűzetünk", t2_qc2: "merevlemezünk", t2_qd2: "kábelünk",
    t3_title: "Közösségi média", t3_text: "A közösségi média, mint az Instagram vagy TikTok, embereket kapcsol össze, de adatokat hagy.", t3_inst: "Válogasd szét:", t3_h1: "Közösségi média vagy sem?", t3_h2: "Instagram, TikTok, Facebook!", t3_q: "Mi a közösségi média?", t3_qa: "Megosztásra és kommunikációra való platformok", t3_qb: "Szövegszerkesztő programok", t3_qc: "Vírusirtó programok", t3_qd: "Operációs rendszerek",
    t3_bl1: "Közösségi média", t3_bl2: "Nem közösségi média", t3_i1: "Instagram", t3_i2: "Word", t3_i3: "TikTok", t3_i4: "Excel",
    t4_title: "Adatok törölhetősége", t4_text: "Az egyszer internetre kerülő adatok szinte sosem tűnnek el teljesen – még ha töröljük is.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Törölve nem jelent eltűnve!", t4_h2: "Gondolkodj, mielőtt posztolsz!", t4_q: "Mi történik az általad online törölt adatokkal?", t4_qa: "Sokszor még megtalálhatók", t4_qb: "Azonnal eltűnnek", t4_qc: "Automatikusan mentődnek", t4_qd: "Kinyomtatódnak",
    t4_w1: "Az egyszer", t4_w2: "internetre", t4_w3: "kerülő adatok", t4_w4: "sokszor megmaradnak.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Netiquette", t5_text: "A netiquette az internetes tisztelettudó viselkedés szabályai.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Online is tisztelet!", t5_h2: "Mint a valóságban!", t5_q: "Mit jelent a netiquette?", t5_qa: "Az online tisztelettudó viselkedés szabályai", t5_qb: "Egy új internetes technológia", t5_qc: "Vírusirtó program", t5_qd: "Egy programozási kód típusa",
    t5_tk1: "A netiquette", t5_tk2: "az online", t5_tk3: "tisztelettudó", t5_tk4: "viselkedést jelenti.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-9",
    t1_title: "Amprenta digitală", t1_text: "Tot ceea ce facem online lasă o amprentă digitală.", t1_inst: "Potrivește perechile:", t1_h1: "Ce lasă urme?", t1_h2: "Online lasă întotdeauna urme!", t1_q: "Ce este amprenta digitală?", t1_qa: "Urmele activităților noastre online", t1_qb: "Greutatea noastră în format digital", t1_qc: "Un fișier pe USB", t1_qd: "Un program de calculator",
    t1_l1: "Postare comentariu", t1_r1: "Lasă urmă", t1_l2: "Citit offline", t1_r2: "Nu lasă urmă", t1_l3: "Încărcare video", t1_r3: "Lasă urmă",
    t2_title: "Reputație online", t2_text: "Reputația noastră online este modul în care ceilalți ne percep pe internet.", t2_inst: "Completează spațiul liber:", t2_h1: "Ce gândesc alții despre tine?", t2_h2: "Odată online = pentru totdeauna!", t2_q: "Ce ne influențează reputația online?", t2_qa: "Ce postăm și scriem online", t2_qb: "Numărul nostru la pantofi", t2_qc: "Marca calculatorului", t2_qd: "Rezoluția ecranului",
    t2_sent: "___ noastră online se formează din tot ceea ce facem pe internet.", t2_qa2: "Reputația", t2_qb2: "Tastatura", t2_qc2: "Hard disk-ul", t2_qd2: "Cablul",
    t3_title: "Rețele sociale", t3_text: "Rețelele sociale precum Instagram sau TikTok conectează oamenii, dar lasă date.", t3_inst: "Sortează în găleți:", t3_h1: "Rețea socială sau nu?", t3_h2: "Instagram, TikTok, Facebook!", t3_q: "Ce sunt rețelele sociale?", t3_qa: "Platforme pentru partajare și comunicare", t3_qb: "Programe de procesare text", t3_qc: "Programe antivirus", t3_qd: "Sisteme de operare",
    t3_bl1: "Rețea socială", t3_bl2: "Nu este rețea socială", t3_i1: "Instagram", t3_i2: "Word", t3_i3: "TikTok", t3_i4: "Excel",
    t4_title: "Posibilitatea de ștergere a datelor", t4_text: "Datele postate online nu dispar aproape niciodată complet – chiar dacă le ștergi.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Șters nu înseamnă dispărut!", t4_h2: "Gândește înainte de a posta!", t4_q: "Ce se întâmplă cu datele pe care le ștergi online?", t4_qa: "Pot fi adesea găsite în continuare", t4_qb: "Dispar imediat", t4_qc: "Se salvează automat", t4_qd: "Se tipăresc",
    t4_w1: "Odată postate", t4_w2: "online,", t4_w3: "datele", t4_w4: "rămân adesea.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Netiquette", t5_text: "Netiquette sunt regulile comportamentului respectuos pe internet.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Respect și online!", t5_h2: "Ca în viața reală!", t5_q: "Ce înseamnă netiquette?", t5_qa: "Reguli pentru comportament respectuos online", t5_qb: "O nouă tehnologie internet", t5_qc: "Un program antivirus", t5_qd: "Un tip de cod de programare",
    t5_tk1: "Netiquette", t5_tk2: "înseamnă", t5_tk3: "comportament respectuos", t5_tk4: "online.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K6_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👣", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⭐", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📱", color: "#E91E63" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "♾️", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0,2] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
