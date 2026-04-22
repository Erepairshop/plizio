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
    t4_w1: "Zentriert", t4_w2: "bedeutet", t4_w3: "der Text", t4_w4: "steht", t4_w5: "in der Mitte.",
    t5_title: "Rechtschreibprüfung", t5_text: "Die Rechtschreibprüfung markiert Fehler mit einer roten Wellenlinie.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Rote Linie = Fehler!", t5_h2: "Die Rechtschreibprüfung hilft.", t5_q: "Was zeigt eine rote Wellenlinie unter einem Wort?", t5_qa: "Rechtschreibfehler", t5_qb: "Korrekte Schreibweise", t5_qc: "Fettdruck", t5_qd: "Link",
    t5_tk1: "Rote", t5_tk2: "Wellenlinien", t5_tk3: "zeigen", t5_tk4: "Rechtschreibfehler", t5_tk5: "an.",
    t6_title: "Hardware vs Software", t6_text: "Hardware kann man anfassen, Software sind Programme.", t6_inst: "Fülle die Lücke aus:", t6_h1: "Anfassen oder nicht?", t6_h2: "Maus ist Hardware.", t6_q: "Was ist Hardware?", t6_qa: "Maus", t6_qb: "Windows", t6_qc: "Ein Spiel", t6_qd: "Internet",
    t6_sent: "Die Tastatur ist Teil der ___.", t6_qa2: "Hardware", t6_qb2: "Software", t6_qc2: "Luft", t6_qd2: "Idee",
    t7_title: "Das Internet", t7_text: "Ein weltweites Netzwerk aus vielen Computern.", t7_inst: "Ordne die Paare zu:", t7_h1: "Was ist das WWW?", t7_h2: "Weltweit verbunden.", t7_q: "Was ist das Internet?", t7_qa: "Ein weltweites Computernetzwerk", t7_qb: "Ein einzelner PC", t7_qc: "Ein Kabel", t7_qd: "Ein Programm",
    t7_l1: "Internet", t7_r1: "Netzwerk", t7_l2: "WWW", t7_r2: "Webseiten", t7_l3: "Browser", t7_r3: "Programm",
    t8_title: "Suchmaschinen", t8_text: "Programme, um Informationen im Internet zu finden.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Suchen oder Chatten?", t8_h2: "Google ist eine Suchmaschine.", t8_q: "Wofür nutzt man eine Suchmaschine?", t8_qa: "Um Infos zu finden", t8_qb: "Um Bilder zu malen", t8_qc: "Um Musik zu hören", t8_qd: "Um offline zu spielen",
    t8_bl1: "Suchmaschine", t8_bl2: "Andere", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Sicheres Surfen", t9_text: "Gib niemals deine echten Daten an Fremde weiter.", t9_inst: "Markiere das richtige Wort:", t9_h1: "Vorsicht im Netz!", t9_h2: "Bleib anonym.", t9_q: "Sollte man Passwörter teilen?", t9_qa: "Niemals", t9_qb: "Nur mit Freunden", t9_qc: "Immer", t9_qd: "Ja, im Chat",
    t9_tk1: "Gib", t9_tk2: "niemals", t9_tk3: "deine", t9_tk4: "Passwörter", t9_tk5: "weiter.",
    t10_title: "Datenschutz", t10_text: "Schütze deine persönlichen Informationen online.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Schutz ist wichtig.", t10_h2: "Daten sind privat.", t10_q: "Was gehört zum Datenschutz?", t10_qa: "Private Infos geheim halten", t10_qb: "Alles posten", t10_qc: "Kamera immer an", t10_qd: "Jeden akzeptieren",
    t10_w1: "Schütze", t10_w2: "deine", t10_w3: "privaten Daten", t10_w4: "im", t10_w5: "Internet.",
    t11_title: "Cybermobbing", t11_text: "Im Internet nett zueinander sein, niemanden beleidigen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Respekt online.", t11_h2: "Nett bleiben.", t11_q: "Was ist Cybermobbing?", t11_qa: "Beleidigen im Internet", t11_qb: "Ein Computerspiel", t11_qc: "Ein Virus", t11_qd: "Ein Chatraum",
    t11_l1: "Respekt", t11_r1: "Wichtig", t11_l2: "Beleidigung", t11_r2: "Falsch", t11_l3: "Mobbing", t11_r3: "Gemein",
    t12_title: "Algorithmus", t12_text: "Eine Schritt-für-Schritt-Anleitung für den Computer, wie ein Rezept.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Wie ein Kochrezept.", t12_h2: "Schritt für Schritt.", t12_q: "Was ist ein Algorithmus?", t12_qa: "Eine genaue Anleitung", t12_qb: "Ein Computerteil", t12_qc: "Ein Bild", t12_qd: "Ein Spiel",
    t12_sent: "Ein Algorithmus ist wie ein ___.", t12_qa2: "Rezept", t12_qb2: "Kabel", t12_qc2: "Monitor", t12_qd2: "Fehler",
    t13_title: "Binärcode", t13_text: "Computer verstehen nur zwei Zahlen: 0 und 1.", t13_inst: "Markiere das richtige Wort:", t13_h1: "Nur Nullen und Einsen.", t13_h2: "Bits und Bytes.", t13_q: "Welche Zahlen nutzt der Binärcode?", t13_qa: "0 und 1", t13_qb: "1 und 2", t13_qc: "A und B", t13_qd: "0 bis 9",
    t13_tk1: "Computer", t13_tk2: "rechnen", t13_tk3: "nur", t13_tk4: "mit", t13_tk5: "0 und 1.",
    t14_title: "Cloud-Speicher", t14_text: "Daten im Internet speichern statt nur auf der Festplatte.", t14_inst: "Sortiere in die Eimer:", t14_h1: "Lokal oder online?", t14_h2: "Die Wolke (Cloud).", t14_q: "Was ist eine Cloud?", t14_qa: "Speicherplatz im Internet", t14_qb: "Ein Wetterphänomen", t14_qc: "Eine Festplatte", t14_qd: "Ein Drucker",
    t14_bl1: "Cloud", t14_bl2: "Lokal", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "USB-Stick", t14_i4: "Festplatte",
    t15_title: "Künstliche Intelligenz", t15_text: "Computer, die lernen und Aufgaben selbstständig lösen können.", t15_inst: "Bringe die Wörter in Ordnung:", t15_h1: "Lernende Maschinen.", t15_h2: "KI oder AI.", t15_q: "Was bedeutet KI?", t15_qa: "Künstliche Intelligenz", t15_qb: "Keine Informationen", t15_qc: "Kurze Internetverbindung", t15_qd: "Kabel und Internet",
    t15_w1: "KI", t15_w2: "steht", t15_w3: "für", t15_w4: "Künstliche", t15_w5: "Intelligenz." 
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
    t4_w1: "Centered", t4_w2: "means", t4_w3: "the text", t4_w4: "is", t4_w5: "in the middle.",
    t5_title: "Spell Checker", t5_text: "The spell checker marks errors with a red wavy line.", t5_inst: "Highlight the correct word:", t5_h1: "Red line = error!", t5_h2: "Spell checker helps.", t5_q: "What does a red wavy line under a word mean?", t5_qa: "Spelling error", t5_qb: "Correct spelling", t5_qc: "Bold text", t5_qd: "Hyperlink",
    t5_tk1: "Red", t5_tk2: "wavy lines", t5_tk3: "show", t5_tk4: "spelling", t5_tk5: "errors.",
    t6_title: "Hardware vs Software", t6_text: "Hardware you can touch, software are programs.", t6_inst: "Fill in the blank:", t6_h1: "Touch or not?", t6_h2: "Mouse is hardware.", t6_q: "What is hardware?", t6_qa: "Mouse", t6_qb: "Windows", t6_qc: "A game", t6_qd: "Internet",
    t6_sent: "The keyboard is part of the ___.", t6_qa2: "hardware", t6_qb2: "software", t6_qc2: "air", t6_qd2: "idea",
    t7_title: "The Internet", t7_text: "A global network of many computers.", t7_inst: "Match the pairs:", t7_h1: "What is the WWW?", t7_h2: "Globally connected.", t7_q: "What is the internet?", t7_qa: "A global computer network", t7_qb: "A single PC", t7_qc: "A cable", t7_qd: "A program",
    t7_l1: "Internet", t7_r1: "Network", t7_l2: "WWW", t7_r2: "Websites", t7_l3: "Browser", t7_r3: "Program",
    t8_title: "Search Engines", t8_text: "Programs to find information on the internet.", t8_inst: "Sort into buckets:", t8_h1: "Searching or chatting?", t8_h2: "Google is a search engine.", t8_q: "What do you use a search engine for?", t8_qa: "To find info", t8_qb: "To paint pictures", t8_qc: "To listen to music", t8_qd: "To play offline",
    t8_bl1: "Search Engine", t8_bl2: "Other", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Safe Surfing", t9_text: "Never give your real data to strangers.", t9_inst: "Highlight the correct word:", t9_h1: "Careful online!", t9_h2: "Stay anonymous.", t9_q: "Should you share passwords?", t9_qa: "Never", t9_qb: "Only with friends", t9_qc: "Always", t9_qd: "Yes, in chat",
    t9_tk1: "You should", t9_tk2: "never", t9_tk3: "share", t9_tk4: "your", t9_tk5: "passwords.",
    t10_title: "Privacy", t10_text: "Protect your personal information online.", t10_inst: "Put the words in order:", t10_h1: "Protection is important.", t10_h2: "Data is private.", t10_q: "What belongs to privacy?", t10_qa: "Keep private info secret", t10_qb: "Post everything", t10_qc: "Camera always on", t10_qd: "Accept everyone",
    t10_w1: "Protect", t10_w2: "your", t10_w3: "private data", t10_w4: "on", t10_w5: "the internet.",
    t11_title: "Cyberbullying", t11_text: "Be nice to each other on the internet, don't insult anyone.", t11_inst: "Match the pairs:", t11_h1: "Respect online.", t11_h2: "Stay nice.", t11_q: "What is cyberbullying?", t11_qa: "Insulting on the internet", t11_qb: "A computer game", t11_qc: "A virus", t11_qd: "A chat room",
    t11_l1: "Respect", t11_r1: "Important", t11_l2: "Insult", t11_r2: "Wrong", t11_l3: "Bullying", t11_r3: "Mean",
    t12_title: "Algorithm", t12_text: "A step-by-step instruction for the computer, like a recipe.", t12_inst: "Fill in the blank:", t12_h1: "Like a cooking recipe.", t12_h2: "Step by step.", t12_q: "What is an algorithm?", t12_qa: "An exact instruction", t12_qb: "A computer part", t12_qc: "A picture", t12_qd: "A game",
    t12_sent: "An algorithm is like a ___.", t12_qa2: "recipe", t12_qb2: "cable", t12_qc2: "monitor", t12_qd2: "mistake",
    t13_title: "Binary Code", t13_text: "Computers only understand two numbers: 0 and 1.", t13_inst: "Highlight the correct word:", t13_h1: "Only zeros and ones.", t13_h2: "Bits and bytes.", t13_q: "Which numbers does binary code use?", t13_qa: "0 and 1", t13_qb: "1 and 2", t13_qc: "A and B", t13_qd: "0 to 9",
    t13_tk1: "Computers", t13_tk2: "calculate", t13_tk3: "only", t13_tk4: "with", t13_tk5: "0 and 1.",
    t14_title: "Cloud Storage", t14_text: "Storing data on the internet instead of just on the hard drive.", t14_inst: "Sort into buckets:", t14_h1: "Local or online?", t14_h2: "The cloud.", t14_q: "What is a cloud?", t14_qa: "Storage space on the internet", t14_qb: "A weather phenomenon", t14_qc: "A hard drive", t14_qd: "A printer",
    t14_bl1: "Cloud", t14_bl2: "Local", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "USB flash drive", t14_i4: "Hard drive",
    t15_title: "Artificial Intelligence", t15_text: "Computers that learn and solve tasks independently.", t15_inst: "Put the words in order:", t15_h1: "Learning machines.", t15_h2: "AI.", t15_q: "What does AI stand for?", t15_qa: "Artificial Intelligence", t15_qb: "No Information", t15_qc: "Short Internet", t15_qd: "Cables and Internet",
    t15_w1: "AI", t15_w2: "stands", t15_w3: "for", t15_w4: "Artificial", t15_w5: "Intelligence." 
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
    t4_w1: "A középre", t4_w2: "zárt szöveg", t4_w3: "az oldal", t4_w4: "közepén", t4_w5: "helyezkedik el.",
    t5_title: "Helyesírás-ellenőrző", t5_text: "A helyesírás-ellenőrző piros hullámvonallal jelzi a hibákat.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Piros vonal = hiba!", t5_h2: "A helyesírás-ellenőrző segít.", t5_q: "Mit jelent a piros hullámvonal egy szó alatt?", t5_qa: "Helyesírási hiba", t5_qb: "Helyes írás", t5_qc: "Félkövér szöveg", t5_qd: "Hivatkozás",
    t5_tk1: "Piros", t5_tk2: "hullámvonal", t5_tk3: "jelzi", t5_tk4: "a helyesírási", t5_tk5: "hibát.",
    t6_title: "Hardver vs Szoftver", t6_text: "A hardvert meg lehet fogni, a szoftverek a programok.", t6_inst: "Töltsd ki a hiányt:", t6_h1: "Megfogható vagy nem?", t6_h2: "Az egér hardver.", t6_q: "Mi a hardver?", t6_qa: "Egér", t6_qb: "Windows", t6_qc: "Egy játék", t6_qd: "Internet",
    t6_sent: "A billentyűzet a ___ része.", t6_qa2: "hardver", t6_qb2: "szoftver", t6_qc2: "levegő", t6_qd2: "ötlet",
    t7_title: "Az Internet", t7_text: "Sok számítógép világméretű hálózata.", t7_inst: "Párosítsd össze:", t7_h1: "Mi az a WWW?", t7_h2: "Világszerte összekötve.", t7_q: "Mi az internet?", t7_qa: "Világméretű számítógép-hálózat", t7_qb: "Egyetlen PC", t7_qc: "Egy kábel", t7_qd: "Egy program",
    t7_l1: "Internet", t7_r1: "Hálózat", t7_l2: "WWW", t7_r2: "Weboldalak", t7_l3: "Böngésző", t7_r3: "Program",
    t8_title: "Keresőmotorok", t8_text: "Programok, amikkel információt keresünk az interneten.", t8_inst: "Válogasd szét:", t8_h1: "Keresés vagy csevegés?", t8_h2: "A Google egy keresőmotor.", t8_q: "Mire használunk egy keresőmotort?", t8_qa: "Infók keresésére", t8_qb: "Képek festésére", t8_qc: "Zenehallgatásra", t8_qd: "Offline játékra",
    t8_bl1: "Keresőmotor", t8_bl2: "Egyéb", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Biztonságos netezés", t9_text: "Soha ne add meg az igazi adataidat idegeneknek.", t9_inst: "Jelöld meg a helyes szót:", t9_h1: "Vigyázz a neten!", t9_h2: "Maradj névtelen.", t9_q: "Meg szabad osztani a jelszavad?", t9_qa: "Soha", t9_qb: "Csak barátokkal", t9_qc: "Mindig", t9_qd: "Igen, a chaten",
    t9_tk1: "Kérlek,", t9_tk2: "soha", t9_tk3: "ne", t9_tk4: "oszd meg", t9_tk5: "a jelszavad.",
    t10_title: "Adatvédelem", t10_text: "Védd a személyes információidat az interneten.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "A védelem fontos.", t10_h2: "Az adat privát.", t10_q: "Mi tartozik az adatvédelemhez?", t10_qa: "Privát infók titokban tartása", t10_qb: "Mindent posztolni", t10_qc: "Kamera mindig be", t10_qd: "Mindenkit elfogadni",
    t10_w1: "Védd", t10_w2: "a személyes", t10_w3: "adataidat", t10_w4: "az", t10_w5: "interneten.",
    t11_title: "Internetes zaklatás", t11_text: "Legyünk kedvesek egymással az interneten, ne bántsunk senkit.", t11_inst: "Párosítsd össze:", t11_h1: "Tisztelet online.", t11_h2: "Maradj kedves.", t11_q: "Mi a cyberbullying?", t11_qa: "Internetes zaklatás", t11_qb: "Számítógépes játék", t11_qc: "Egy vírus", t11_qd: "Egy chatszoba",
    t11_l1: "Tisztelet", t11_r1: "Fontos", t11_l2: "Sértés", t11_r2: "Helytelen", t11_l3: "Zaklatás", t11_r3: "Gonosz",
    t12_title: "Algoritmus", t12_text: "Lépésről lépésre szóló útmutató a gépnek, mint egy recept.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Mint egy recept.", t12_h2: "Lépésről lépésre.", t12_q: "Mi egy algoritmus?", t12_qa: "Pontos útmutató", t12_qb: "Számítógép-alkatrész", t12_qc: "Egy kép", t12_qd: "Egy játék",
    t12_sent: "Az algoritmus olyan, mint egy ___.", t12_qa2: "recept", t12_qb2: "kábel", t12_qc2: "monitor", t12_qd2: "hiba",
    t13_title: "Bináris kód", t13_text: "A számítógépek csak két számot értenek: 0 és 1.", t13_inst: "Jelöld meg a helyes szót:", t13_h1: "Csak nullák és egyesek.", t13_h2: "Bitek és bájtok.", t13_q: "Milyen számokat használ a bináris kód?", t13_qa: "0 és 1", t13_qb: "1 és 2", t13_qc: "A és B", t13_qd: "0-tól 9-ig",
    t13_tk1: "A számítógépek", t13_tk2: "kizárólag", t13_tk3: "a", t13_tk4: "következőket használják:", t13_tk5: "0 és 1.",
    t14_title: "Felhőtárhely", t14_text: "Adatok tárolása az interneten, nem csak a merevlemezen.", t14_inst: "Válogasd szét:", t14_h1: "Helyi vagy online?", t14_h2: "A felhő (cloud).", t14_q: "Mi a felhő?", t14_qa: "Tárhely az interneten", t14_qb: "Időjárási jelenség", t14_qc: "Merevlemez", t14_qd: "Nyomtató",
    t14_bl1: "Felhő", t14_bl2: "Helyi", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "Pendrive", t14_i4: "Merevlemez",
    t15_title: "Mesterséges intelligencia", t15_text: "Olyan számítógépek, amik tanulnak és önállóan oldanak meg feladatokat.", t15_inst: "Tedd sorrendbe a szavakat:", t15_h1: "Tanuló gépek.", t15_h2: "MI vagy AI.", t15_q: "Mit jelent az MI?", t15_qa: "Mesterséges Intelligencia", t15_qb: "Minden Információ", t15_qc: "Méretes Internet", t15_qd: "Mozgó Ikon",
    t15_w1: "Az MI", t15_w2: "a", t15_w3: "Mesterséges", t15_w4: "Intelligencia", t15_w5: "rövidítése." 
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
    t4_w1: "Centrat", t4_w2: "înseamnă", t4_w3: "că textul", t4_w4: "este", t4_w5: "la mijloc.",
    t5_title: "Verificator ortografic", t5_text: "Verificatorul ortografic marchează erorile cu o linie roșie ondulată.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Linie roșie = eroare!", t5_h2: "Verificatorul ortografic ajută.", t5_q: "Ce înseamnă o linie roșie ondulată sub un cuvânt?", t5_qa: "Eroare ortografică", t5_qb: "Scriere corectă", t5_qc: "Text bold", t5_qd: "Hyperlink",
    t5_tk1: "Liniile roșii", t5_tk2: "ondulate", t5_tk3: "indică", t5_tk4: "erori", t5_tk5: "ortografice.",
    t6_title: "Hardware vs Software", t6_text: "Hardware este ce poți atinge, software sunt programele.", t6_inst: "Completează spațiul liber:", t6_h1: "Atingi sau nu?", t6_h2: "Mouse-ul e hardware.", t6_q: "Ce este hardware-ul?", t6_qa: "Mouse", t6_qb: "Windows", t6_qc: "Un joc", t6_qd: "Internet",
    t6_sent: "Tastatura este o parte din ___.", t6_qa2: "hardware", t6_qb2: "software", t6_qc2: "aer", t6_qd2: "idee",
    t7_title: "Internetul", t7_text: "O rețea globală de multe calculatoare.", t7_inst: "Potrivește perechile:", t7_h1: "Ce este WWW?", t7_h2: "Conectați global.", t7_q: "Ce este internetul?", t7_qa: "O rețea globală de calculatoare", t7_qb: "Un singur PC", t7_qc: "Un cablu", t7_qd: "Un program",
    t7_l1: "Internet", t7_r1: "Rețea", t7_l2: "WWW", t7_r2: "Site-uri", t7_l3: "Browser", t7_r3: "Program",
    t8_title: "Motoare de căutare", t8_text: "Programe pentru a găsi informații pe internet.", t8_inst: "Sortează în găleți:", t8_h1: "Căutare sau chat?", t8_h2: "Google e motor de căutare.", t8_q: "Pentru ce folosești un motor de căutare?", t8_qa: "Pentru a găsi info", t8_qb: "Pentru a picta", t8_qc: "Pentru a asculta muzică", t8_qd: "Pentru jocuri offline",
    t8_bl1: "Motor de căutare", t8_bl2: "Altele", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Navigare sigură", t9_text: "Nu da niciodată datele tale reale străinilor.", t9_inst: "Evidențiază cuvântul corect:", t9_h1: "Atenție online!", t9_h2: "Rămâi anonim.", t9_q: "Ar trebui să împarți parolele?", t9_qa: "Niciodată", t9_qb: "Doar cu prietenii", t9_qc: "Întotdeauna", t9_qd: "Da, pe chat",
    t9_tk1: "Nu da", t9_tk2: "niciodată", t9_tk3: "parolele", t9_tk4: "tale", t9_tk5: "nimănui.",
    t10_title: "Confidențialitate", t10_text: "Protejează-ți informațiile personale online.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Protecția e importantă.", t10_h2: "Datele sunt private.", t10_q: "Ce ține de confidențialitate?", t10_qa: "Păstrarea secretă a datelor", t10_qb: "Postarea la tot", t10_qc: "Camera mereu pornită", t10_qd: "Acceptarea tuturor",
    t10_w1: "Protejează-ți", t10_w2: "datele", t10_w3: "private", t10_w4: "pe", t10_w5: "internet.",
    t11_title: "Hărțuirea online (Cyberbullying)", t11_text: "Fii drăguț cu ceilalți pe internet, nu jigni.", t11_inst: "Potrivește perechile:", t11_h1: "Respect online.", t11_h2: "Rămâi amabil.", t11_q: "Ce este cyberbullying?", t11_qa: "Jignirea pe internet", t11_qb: "Un joc video", t11_qc: "Un virus", t11_qd: "Un chat",
    t11_l1: "Respect", t11_r1: "Important", t11_l2: "Jignire", t11_r2: "Greșit", t11_l3: "Hărțuire", t11_r3: "Rău",
    t12_title: "Algoritm", t12_text: "Un ghid pas cu pas pentru calculator, ca o rețetă.", t12_inst: "Completează spațiul liber:", t12_h1: "Ca o rețetă.", t12_h2: "Pas cu pas.", t12_q: "Ce este un algoritm?", t12_qa: "O instrucțiune exactă", t12_qb: "O piesă de calculator", t12_qc: "O imagine", t12_qd: "Un joc",
    t12_sent: "Un algoritm este ca o ___.", t12_qa2: "rețetă", t12_qb2: "sârmă", t12_qc2: "tastatură", t12_qd2: "eroare",
    t13_title: "Cod binar", t13_text: "Calculatoarele înțeleg doar două numere: 0 și 1.", t13_inst: "Evidențiază cuvântul corect:", t13_h1: "Doar zero și unu.", t13_h2: "Biți și octeți.", t13_q: "Ce numere folosește codul binar?", t13_qa: "0 și 1", t13_qb: "1 și 2", t13_qc: "A și B", t13_qd: "0 la 9",
    t13_tk1: "Calculatoarele", t13_tk2: "calculează", t13_tk3: "doar", t13_tk4: "cu", t13_tk5: "0 și 1.",
    t14_title: "Stocare în Cloud", t14_text: "Stocarea datelor pe internet în loc de doar pe hard disk.", t14_inst: "Sortează în găleți:", t14_h1: "Local sau online?", t14_h2: "Norul (Cloud).", t14_q: "Ce este un cloud?", t14_qa: "Spațiu de stocare pe internet", t14_qb: "Un fenomen meteo", t14_qc: "Un hard disk", t14_qd: "O imprimantă",
    t14_bl1: "Cloud", t14_bl2: "Local", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "Stick USB", t14_i4: "Hard disk",
    t15_title: "Inteligență Artificială", t15_text: "Calculatoare care învață și rezolvă sarcini independent.", t15_inst: "Pune cuvintele în ordine:", t15_h1: "Mașini care învață.", t15_h2: "IA sau AI.", t15_q: "Ce înseamnă IA?", t15_qa: "Inteligență Artificială", t15_qb: "Informație Ascunsă", t15_qc: "Internet Adevărat", t15_qd: "Iconiță Animată",
    t15_w1: "IA", t15_w2: "este", t15_w3: "prescurtarea", t15_w4: "pentru Inteligență", t15_w5: "Artificială." 
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
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💻", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "t6_sent", choices: ["t6_qa2", "t6_qb2", "t6_qc2", "t6_qd2"], correctIndex: 0 },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#F44336" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b1"},{text:"t8_i3",bucketId:"b2"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", tokens: ["t9_tk1","t9_tk2","t9_tk3","t9_tk4","t9_tk5"], correctIndices: [1] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "💬", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "📝", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "0️⃣", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", tokens: ["t13_tk1","t13_tk2","t13_tk3","t13_tk4","t13_tk5"], correctIndices: [4] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#03A9F4" },
    interactive: { type: "drag-to-bucket", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", buckets: [{id:"b1",label:"t14_bl1"},{id:"b2",label:"t14_bl2"}], items: [{text:"t14_i1",bucketId:"b1"},{text:"t14_i2",bucketId:"b1"},{text:"t14_i3",bucketId:"b2"},{text:"t14_i4",bucketId:"b2"}] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#FFC107" },
    interactive: { type: "word-order", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", words: ["t15_w1", "t15_w2", "t15_w3", "t15_w4", "t15_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }

];
