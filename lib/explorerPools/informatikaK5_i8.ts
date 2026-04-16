// lib/explorerPools/informatikaK5_i8.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 8",
    t1_title: "Sicheres Passwort", t1_text: "Ein sicheres Passwort ist lang und enthält Buchstaben, Zahlen und Sonderzeichen.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was macht ein Passwort sicher?", t1_h2: "Lang und gemischt!", t1_q: "Was macht ein Passwort sicher?", t1_qa: "Lang mit Zahlen und Zeichen", t1_qb: "Nur der eigene Name", t1_qc: "Kurz und einfach", t1_qd: "Das Geburtsdatum",
    t1_l1: "Sicher", t1_r1: "Lang + gemischt", t1_l2: "Unsicher", t1_r2: "123456", t1_l3: "Gut", t1_r3: "P@ssw0rd!",
    t2_title: "Phishing erkennen", t2_text: "Phishing sind gefälschte Nachrichten, die versuchen, Passwörter zu stehlen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Echte Bank schreibt nicht so!", t2_h2: "Nie auf Links klicken!", t2_q: "Was ist Phishing?", t2_qa: "Gefälschte Nachrichten zum Passwort stehlen", t2_qb: "Ein sicheres Passwort", t2_qc: "Eine App zum Surfen", t2_qd: "Ein Spielprogramm",
    t2_sent: "Phishing-Mails versuchen dein ___ zu stehlen.", t2_qa2: "Passwort", t2_qb2: "Bild", t2_qc2: "Drucker", t2_qd2: "Spiel",
    t3_title: "Spam erkennen", t3_text: "Spam sind unerwünschte E-Mails, oft mit Werbung oder gefährlichen Links.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Spam oder normal?", t3_h2: "Unbekannt = Vorsicht!", t3_q: "Was ist Spam?", t3_qa: "Unerwünschte E-Mails", t3_qb: "Wichtige Schulnachrichten", t3_qc: "Nachrichten von Freunden", t3_qd: "Schul-E-Mails",
    t3_bl1: "Spam", t3_bl2: "Normale E-Mail", t3_i1: "Gratis iPhone gewonnen!", t3_i2: "Hausaufgaben heute", t3_i3: "Dringend: Konto gesperrt!", t3_i4: "Elternbrief",
    t4_title: "Datensicherung (Backup)", t4_text: "Ein Backup ist eine Sicherheitskopie deiner Daten, falls etwas schiefgeht.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Backup = Sicherheitskopie.", t4_h2: "Regelmäßig sichern!", t4_q: "Was ist ein Backup?", t4_qa: "Eine Sicherheitskopie", t4_qb: "Ein Passwort", t4_qc: "Eine App", t4_qd: "Ein Browser",
    t4_w1: "Ein", t4_w2: "Backup", t4_w3: "schützt", t4_w4: "deine", t4_w5: "Daten", t4_w6: "vor Verlust.", t4_w7: "",
    t5_title: "Urheberrecht (Copyright)", t5_text: "Urheberrecht schützt Bilder, Musik und Texte – du darfst sie nicht einfach kopieren.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Darf man alles kopieren?", t5_h2: "Urheberrecht = Schutz.", t5_q: "Was schützt das Urheberrecht?", t5_qa: "Werke des Urhebers (Bilder, Musik)", t5_qb: "Passwörter", t5_qc: "Hardware", t5_qd: "Betriebssysteme",
    t5_tk1: "Das", t5_tk2: "Urheberrecht", t5_tk3: "schützt", t5_tk4: "kreative", t5_tk5: "Werke.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer 8",
    t1_title: "Secure Password", t1_text: "A secure password is long and contains letters, numbers and special characters.", t1_inst: "Match the pairs:", t1_h1: "What makes a password secure?", t1_h2: "Long and mixed!", t1_q: "What makes a password secure?", t1_qa: "Long with numbers and symbols", t1_qb: "Only your own name", t1_qc: "Short and simple", t1_qd: "Date of birth",
    t1_l1: "Secure", t1_r1: "Long + mixed", t1_l2: "Insecure", t1_r2: "123456", t1_l3: "Good", t1_r3: "P@ssw0rd!",
    t2_title: "Recognizing Phishing", t2_text: "Phishing are fake messages that try to steal passwords.", t2_inst: "Fill in the blank:", t2_h1: "Real banks don't write like that!", t2_h2: "Never click on links!", t2_q: "What is phishing?", t2_qa: "Fake messages to steal passwords", t2_qb: "A secure password", t2_qc: "A browsing app", t2_qd: "A game program",
    t2_sent: "Phishing emails try to steal your ___.", t2_qa2: "password", t2_qb2: "picture", t2_qc2: "printer", t2_qd2: "game",
    t3_title: "Recognizing Spam", t3_text: "Spam are unwanted emails, often with advertisements or dangerous links.", t3_inst: "Sort into buckets:", t3_h1: "Spam or normal?", t3_h2: "Unknown = be careful!", t3_q: "What is spam?", t3_qa: "Unwanted emails", t3_qb: "Important school messages", t3_qc: "Messages from friends", t3_qd: "School emails",
    t3_bl1: "Spam", t3_bl2: "Normal email", t3_i1: "Free iPhone won!", t3_i2: "Homework today", t3_i3: "Urgent: Account blocked!", t3_i4: "Parent letter",
    t4_title: "Data Backup", t4_text: "A backup is a safety copy of your data in case something goes wrong.", t4_inst: "Put the words in order:", t4_h1: "Backup = safety copy.", t4_h2: "Back up regularly!", t4_q: "What is a backup?", t4_qa: "A safety copy", t4_qb: "A password", t4_qc: "An app", t4_qd: "A browser",
    t4_w1: "A", t4_w2: "backup", t4_w3: "protects", t4_w4: "your", t4_w5: "data", t4_w6: "from loss.", t4_w7: "",
    t5_title: "Copyright", t5_text: "Copyright protects images, music and texts – you may not simply copy them.", t5_inst: "Highlight the correct word:", t5_h1: "May you copy everything?", t5_h2: "Copyright = protection.", t5_q: "What does copyright protect?", t5_qa: "Works of the creator (images, music)", t5_qb: "Passwords", t5_qc: "Hardware", t5_qd: "Operating systems",
    t5_tk1: "Copyright", t5_tk2: "protects", t5_tk3: "creative", t5_tk4: "works.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező 8",
    t1_title: "Biztonságos jelszó", t1_text: "A biztonságos jelszó hosszú és betűket, számokat, speciális karaktereket tartalmaz.", t1_inst: "Párosítsd össze:", t1_h1: "Mi tesz egy jelszót biztonságossá?", t1_h2: "Hosszú és vegyes!", t1_q: "Mi tesz egy jelszót biztonságossá?", t1_qa: "Hosszú, számokkal és jelekkel", t1_qb: "Csak a saját nevem", t1_qc: "Rövid és egyszerű", t1_qd: "A születési dátum",
    t1_l1: "Biztonságos", t1_r1: "Hosszú + vegyes", t1_l2: "Nem biztonságos", t1_r2: "123456", t1_l3: "Jó", t1_r3: "P@ssw0rd!",
    t2_title: "Adathalászat (phishing)", t2_text: "Az adathalászat (phishing) olyan hamis üzenet, amely jelszavakat próbál ellopni.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Az igazi bank nem ír így!", t2_h2: "Soha ne kattints a linkre!", t2_q: "Mi az adathalászat?", t2_qa: "Hamis üzenet jelszó lopáshoz", t2_qb: "Biztonságos jelszó", t2_qc: "Böngészési alkalmazás", t2_qd: "Játékprogram",
    t2_sent: "Az adathalász e-mailek a ___ lopják el.", t2_qa2: "jelszavadat", t2_qb2: "képedet", t2_qc2: "nyomtatódat", t2_qd2: "játékodat",
    t3_title: "Spam felismerése", t3_text: "A spam kéretlen e-mail, sokszor reklámmal vagy veszélyes linkekkel.", t3_inst: "Válogasd szét:", t3_h1: "Spam vagy normál?", t3_h2: "Ismeretlen = óvatosan!", t3_q: "Mi a spam?", t3_qa: "Kéretlen e-mailek", t3_qb: "Fontos iskolai üzenetek", t3_qc: "Barátoktól érkező üzenetek", t3_qd: "Iskolai e-mailek",
    t3_bl1: "Spam", t3_bl2: "Normál e-mail", t3_i1: "Nyertél egy iPhone-t!", t3_i2: "Ma házi feladat", t3_i3: "Sürgős: Fiókod zárolva!", t3_i4: "Szülői levél",
    t4_title: "Biztonsági mentés (backup)", t4_text: "A backup az adataid másolata, arra az esetre, ha valami elromlik.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Backup = biztonsági másolat.", t4_h2: "Rendszeresen ments!", t4_q: "Mi a backup?", t4_qa: "Biztonsági másolat", t4_qb: "Jelszó", t4_qc: "Alkalmazás", t4_qd: "Böngésző",
    t4_w1: "A backup", t4_w2: "megvédi", t4_w3: "adataidat", t4_w4: "az elveszéstől.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Szerzői jog (copyright)", t5_text: "A szerzői jog megvédi a képeket, zenéket és szövegeket – nem másolhatod őket szabadon.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Mindent szabad másolni?", t5_h2: "Szerzői jog = védelem.", t5_q: "Mit véd a szerzői jog?", t5_qa: "A szerző alkotásait (képek, zene)", t5_qb: "Jelszavakat", t5_qc: "Hardvert", t5_qd: "Operációs rendszereket",
    t5_tk1: "A szerzői", t5_tk2: "jog", t5_tk3: "védi", t5_tk4: "a kreatív alkotásokat.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 8",
    t1_title: "Parolă sigură", t1_text: "O parolă sigură este lungă și conține litere, cifre și caractere speciale.", t1_inst: "Potrivește perechile:", t1_h1: "Ce face o parolă sigură?", t1_h2: "Lungă și mixtă!", t1_q: "Ce face o parolă sigură?", t1_qa: "Lungă cu cifre și simboluri", t1_qb: "Doar propriul nume", t1_qc: "Scurtă și simplă", t1_qd: "Data nașterii",
    t1_l1: "Sigură", t1_r1: "Lungă + mixtă", t1_l2: "Nesigură", t1_r2: "123456", t1_l3: "Bună", t1_r3: "P@ssw0rd!",
    t2_title: "Recunoașterea phishing-ului", t2_text: "Phishing-ul sunt mesaje false care încearcă să fure parole.", t2_inst: "Completează spațiul liber:", t2_h1: "Băncile reale nu scriu așa!", t2_h2: "Nu da click pe linkuri!", t2_q: "Ce este phishing-ul?", t2_qa: "Mesaje false pentru furt de parole", t2_qb: "O parolă sigură", t2_qc: "O aplicație de navigare", t2_qd: "Un program de jocuri",
    t2_sent: "Emailurile de phishing încearcă să fure ___.", t2_qa2: "parola", t2_qb2: "imaginea", t2_qc2: "imprimanta", t2_qd2: "jocul",
    t3_title: "Recunoașterea spam-ului", t3_text: "Spam-ul sunt emailuri nedorite, adesea cu reclame sau linkuri periculoase.", t3_inst: "Sortează în găleți:", t3_h1: "Spam sau normal?", t3_h2: "Necunoscut = atenție!", t3_q: "Ce este spam-ul?", t3_qa: "Emailuri nedorite", t3_qb: "Mesaje importante de la școală", t3_qc: "Mesaje de la prieteni", t3_qd: "Emailuri de la școală",
    t3_bl1: "Spam", t3_bl2: "Email normal", t3_i1: "Ai câștigat iPhone!", t3_i2: "Teme pentru azi", t3_i3: "Urgent: Cont blocat!", t3_i4: "Scrisoare de la părinți",
    t4_title: "Copie de rezervă (backup)", t4_text: "Un backup este o copie de siguranță a datelor, în caz că ceva merge prost.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Backup = copie de siguranță.", t4_h2: "Fă backup regulat!", t4_q: "Ce este un backup?", t4_qa: "O copie de siguranță", t4_qb: "O parolă", t4_qc: "O aplicație", t4_qd: "Un browser",
    t4_w1: "Un", t4_w2: "backup", t4_w3: "protejează", t4_w4: "datele", t4_w5: "de pierdere.", t4_w6: "", t4_w7: "",
    t5_title: "Dreptul de autor (copyright)", t5_text: "Dreptul de autor protejează imaginile, muzica și textele – nu le poți copia fără permisiune.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Poți copia orice?", t5_h2: "Copyright = protecție.", t5_q: "Ce protejează dreptul de autor?", t5_qa: "Operele creatorului (imagini, muzică)", t5_qb: "Parole", t5_qc: "Hardware", t5_qd: "Sisteme de operare",
    t5_tk1: "Dreptul", t5_tk2: "de autor", t5_tk3: "protejează", t5_tk4: "operele creative.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K5_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔐", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🎣", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📧", color: "#FF5722" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💾", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "©️", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [1,2] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
