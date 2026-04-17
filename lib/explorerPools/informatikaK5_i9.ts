// lib/explorerPools/informatikaK5_i9.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 9",
    t1_title: "Reihenfolge (Sequenz)", t1_text: "Beim Programmieren wird jeder Befehl in der richtigen Reihenfolge ausgeführt.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was kommt zuerst?", t1_h2: "Reihenfolge ist wichtig!", t1_q: "Was passiert, wenn die Reihenfolge falsch ist?", t1_qa: "Das Programm funktioniert nicht richtig", t1_qb: "Das Programm wird schneller", t1_qc: "Das Programm löscht Daten", t1_qd: "Das Programm druckt",
    t1_l1: "1. Schritt", t1_r1: "Zuerst", t1_l2: "2. Schritt", t1_r2: "Dann", t1_l3: "3. Schritt", t1_r3: "Zuletzt",
    t2_title: "Bedingung (if-Anweisung)", t2_text: "Eine Bedingung prüft, ob etwas wahr oder falsch ist, und entscheidet, was passiert.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Wenn... dann...", t2_h2: "True oder False?", t2_q: "Was macht eine if-Anweisung?", t2_qa: "Prüft eine Bedingung", t2_qb: "Wiederholt einen Befehl", t2_qc: "Speichert eine Datei", t2_qd: "Öffnet ein Programm",
    t2_sent: "Wenn die Bedingung ___ ist, führt das Programm den Befehl aus.", t2_qa2: "wahr", t2_qb2: "falsch", t2_qc2: "leer", t2_qd2: "groß",
    t3_title: "Schleife (Wiederholung)", t3_text: "Eine Schleife wiederholt Befehle mehrmals, ohne sie extra schreiben zu müssen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Einmal oder viele Male?", t3_h2: "Schleife = Wiederholung.", t3_q: "Wann benutzt man eine Schleife?", t3_qa: "Wenn man etwas mehrmals wiederholen will", t3_qb: "Wenn man eine Datei speichert", t3_qc: "Wenn man eine Farbe wählt", t3_qd: "Wenn man druckt",
    t3_bl1: "Schleife (viele Male)", t3_bl2: "Einmalig", t3_i1: "10× bewegen", t3_i2: "Einmal drucken", t3_i3: "100× zählen", t3_i4: "Datei öffnen",
    t4_title: "Scratch Grundlagen", t4_text: "Scratch ist eine Programmiersprache für Anfänger mit bunten Bausteinen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Scratch = bunte Bausteine.", t4_h2: "Einfach anfangen!", t4_q: "Was ist Scratch?", t4_qa: "Eine visuelle Programmiersprache", t4_qb: "Ein Texteditor", t4_qc: "Ein Zeichenprogramm", t4_qd: "Ein Tabellenkalkulationsprogramm",
    t4_w1: "In", t4_w2: "Scratch", t4_w3: "programmieren", t4_w4: "wir", t4_w5: "mit Bausteinen.", t4_w6: "", t4_w7: "",
    t5_title: "Fehler beheben (Debugging)", t5_text: "Debugging bedeutet, Fehler im Programm zu suchen und zu beheben.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Bug = Fehler, Debug = beheben.", t5_h2: "Fehler finden und reparieren!", t5_q: "Was bedeutet 'Debuggen'?", t5_qa: "Programmfehler suchen und beheben", t5_qb: "Programme installieren", t5_qc: "Dateien löschen", t5_qd: "E-Mails lesen",
    t5_tk1: "Debugging", t5_tk2: "hilft", t5_tk3: "Fehler", t5_tk4: "im Programm", t5_tk5: "zu beheben.", t5_tk6: "",
    t6_title: "Hardware vs Software", t6_text: "Hardware kann man anfassen, Software sind Programme.", t6_inst: "Fülle die Lücke aus:", t6_h1: "Anfassen oder nicht?", t6_h2: "Maus ist Hardware.", t6_q: "Was ist Hardware?", t6_qa: "Maus", t6_qb: "Windows", t6_qc: "Ein Spiel", t6_qd: "Internet",
    t6_sent: "Die Tastatur ist Teil der ___.", t6_qa2: "Hardware", t6_qb2: "Software", t6_qc2: "Luft", t6_qd2: "Idee",
    t7_title: "Das Internet", t7_text: "Ein weltweites Netzwerk aus vielen Computern.", t7_inst: "Ordne die Paare zu:", t7_h1: "Was ist das WWW?", t7_h2: "Weltweit verbunden.", t7_q: "Was ist das Internet?", t7_qa: "Ein weltweites Computernetzwerk", t7_qb: "Ein einzelner PC", t7_qc: "Ein Kabel", t7_qd: "Ein Programm",
    t7_l1: "Internet", t7_r1: "Netzwerk", t7_l2: "WWW", t7_r2: "Webseiten", t7_l3: "Browser", t7_r3: "Programm",
    t8_title: "Suchmaschinen", t8_text: "Programme, um Informationen im Internet zu finden.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Suchen oder Chatten?", t8_h2: "Google ist eine Suchmaschine.", t8_q: "Wofür nutzt man eine Suchmaschine?", t8_qa: "Um Infos zu finden", t8_qb: "Um Bilder zu malen", t8_qc: "Um Musik zu hören", t8_qd: "Um offline zu spielen",
    t8_bl1: "Suchmaschine", t8_bl2: "Andere", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Sicheres Surfen", t9_text: "Gib niemals deine echten Daten an Fremde weiter.", t9_inst: "Markiere das richtige Wort:", t9_h1: "Vorsicht im Netz!", t9_h2: "Bleib anonym.", t9_q: "Sollte man Passwörter teilen?", t9_qa: "Niemals", t9_qb: "Nur mit Freunden", t9_qc: "Immer", t9_qd: "Ja, im Chat",
    t9_tk1: "Gib", t9_tk2: "niemals", t9_tk3: "deine", t9_tk4: "Passwörter", t9_tk5: "weiter.", t9_tk6: "",
    t10_title: "Datenschutz", t10_text: "Schütze deine persönlichen Informationen online.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Schutz ist wichtig.", t10_h2: "Daten sind privat.", t10_q: "Was gehört zum Datenschutz?", t10_qa: "Private Infos geheim halten", t10_qb: "Alles posten", t10_qc: "Kamera immer an", t10_qd: "Jeden akzeptieren",
    t10_w1: "Schütze", t10_w2: "deine", t10_w3: "privaten", t10_w4: "Daten", t10_w5: "im", t10_w6: "Internet.", t10_w7: "",
    t11_title: "Cybermobbing", t11_text: "Im Internet nett zueinander sein, niemanden beleidigen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Respekt online.", t11_h2: "Nett bleiben.", t11_q: "Was ist Cybermobbing?", t11_qa: "Beleidigen im Internet", t11_qb: "Ein Computerspiel", t11_qc: "Ein Virus", t11_qd: "Ein Chatraum",
    t11_l1: "Respekt", t11_r1: "Wichtig", t11_l2: "Beleidigung", t11_r2: "Falsch", t11_l3: "Mobbing", t11_r3: "Gemein",
    t12_title: "Algorithmus", t12_text: "Eine Schritt-für-Schritt-Anleitung für den Computer, wie ein Rezept.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Wie ein Kochrezept.", t12_h2: "Schritt für Schritt.", t12_q: "Was ist ein Algorithmus?", t12_qa: "Eine genaue Anleitung", t12_qb: "Ein Computerteil", t12_qc: "Ein Bild", t12_qd: "Ein Spiel",
    t12_sent: "Ein Algorithmus ist wie ein ___.", t12_qa2: "Rezept", t12_qb2: "Kabel", t12_qc2: "Monitor", t12_qd2: "Fehler",
    t13_title: "Binärcode", t13_text: "Computer verstehen nur zwei Zahlen: 0 und 1.", t13_inst: "Markiere das richtige Wort:", t13_h1: "Nur Nullen und Einsen.", t13_h2: "Bits und Bytes.", t13_q: "Welche Zahlen nutzt der Binärcode?", t13_qa: "0 und 1", t13_qb: "1 und 2", t13_qc: "A und B", t13_qd: "0 bis 9",
    t13_tk1: "Computer", t13_tk2: "rechnen", t13_tk3: "nur", t13_tk4: "mit", t13_tk5: "0 und 1.", t13_tk6: "",
    t14_title: "Cloud-Speicher", t14_text: "Daten im Internet speichern statt nur auf der Festplatte.", t14_inst: "Sortiere in die Eimer:", t14_h1: "Lokal oder online?", t14_h2: "Die Wolke (Cloud).", t14_q: "Was ist eine Cloud?", t14_qa: "Speicherplatz im Internet", t14_qb: "Ein Wetterphänomen", t14_qc: "Eine Festplatte", t14_qd: "Ein Drucker",
    t14_bl1: "Cloud", t14_bl2: "Lokal", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "USB-Stick", t14_i4: "Festplatte",
    t15_title: "Künstliche Intelligenz", t15_text: "Computer, die lernen und Aufgaben selbstständig lösen können.", t15_inst: "Bringe die Wörter in Ordnung:", t15_h1: "Lernende Maschinen.", t15_h2: "KI oder AI.", t15_q: "Was bedeutet KI?", t15_qa: "Künstliche Intelligenz", t15_qb: "Keine Informationen", t15_qc: "Kurze Internetverbindung", t15_qd: "Kabel und Internet",
    t15_w1: "KI", t15_w2: "steht", t15_w3: "für", t15_w4: "Künstliche", t15_w5: "Intelligenz.", t15_w6: "", t15_w7: "" 
  },
  en: {
    explorer_title: "Informatics Explorer 9",
    t1_title: "Sequence", t1_text: "In programming, every command is executed in the correct order.", t1_inst: "Match the pairs:", t1_h1: "What comes first?", t1_h2: "Order matters!", t1_q: "What happens if the order is wrong?", t1_qa: "The program doesn't work correctly", t1_qb: "The program becomes faster", t1_qc: "The program deletes data", t1_qd: "The program prints",
    t1_l1: "1st step", t1_r1: "First", t1_l2: "2nd step", t1_r2: "Then", t1_l3: "3rd step", t1_r3: "Last",
    t2_title: "Condition (if statement)", t2_text: "A condition checks if something is true or false and decides what happens.", t2_inst: "Fill in the blank:", t2_h1: "If... then...", t2_h2: "True or False?", t2_q: "What does an if statement do?", t2_qa: "Checks a condition", t2_qb: "Repeats a command", t2_qc: "Saves a file", t2_qd: "Opens a program",
    t2_sent: "If the condition is ___, the program executes the command.", t2_qa2: "true", t2_qb2: "false", t2_qc2: "empty", t2_qd2: "large",
    t3_title: "Loop (Repetition)", t3_text: "A loop repeats commands multiple times without having to write them extra.", t3_inst: "Sort into buckets:", t3_h1: "Once or many times?", t3_h2: "Loop = repetition.", t3_q: "When do you use a loop?", t3_qa: "When you want to repeat something many times", t3_qb: "When saving a file", t3_qc: "When choosing a color", t3_qd: "When printing",
    t3_bl1: "Loop (many times)", t3_bl2: "Once only", t3_i1: "Move 10×", t3_i2: "Print once", t3_i3: "Count 100×", t3_i4: "Open file",
    t4_title: "Scratch Basics", t4_text: "Scratch is a programming language for beginners with colorful blocks.", t4_inst: "Put the words in order:", t4_h1: "Scratch = colorful blocks.", t4_h2: "Easy to start!", t4_q: "What is Scratch?", t4_qa: "A visual programming language", t4_qb: "A text editor", t4_qc: "A drawing program", t4_qd: "A spreadsheet",
    t4_w1: "In", t4_w2: "Scratch", t4_w3: "we", t4_w4: "program", t4_w5: "with blocks.", t4_w6: "", t4_w7: "",
    t5_title: "Debugging", t5_text: "Debugging means finding and fixing errors in a program.", t5_inst: "Highlight the correct word:", t5_h1: "Bug = error, Debug = fix.", t5_h2: "Find and repair errors!", t5_q: "What does 'debugging' mean?", t5_qa: "Finding and fixing program errors", t5_qb: "Installing programs", t5_qc: "Deleting files", t5_qd: "Reading emails",
    t5_tk1: "Debugging", t5_tk2: "helps", t5_tk3: "fix", t5_tk4: "errors", t5_tk5: "in a program.", t5_tk6: "",
    t6_title: "Hardware vs Software", t6_text: "Hardware you can touch, software are programs.", t6_inst: "Fill in the blank:", t6_h1: "Touch or not?", t6_h2: "Mouse is hardware.", t6_q: "What is hardware?", t6_qa: "Mouse", t6_qb: "Windows", t6_qc: "A game", t6_qd: "Internet",
    t6_sent: "The keyboard is part of the ___.", t6_qa2: "hardware", t6_qb2: "software", t6_qc2: "air", t6_qd2: "idea",
    t7_title: "The Internet", t7_text: "A global network of many computers.", t7_inst: "Match the pairs:", t7_h1: "What is the WWW?", t7_h2: "Globally connected.", t7_q: "What is the internet?", t7_qa: "A global computer network", t7_qb: "A single PC", t7_qc: "A cable", t7_qd: "A program",
    t7_l1: "Internet", t7_r1: "Network", t7_l2: "WWW", t7_r2: "Websites", t7_l3: "Browser", t7_r3: "Program",
    t8_title: "Search Engines", t8_text: "Programs to find information on the internet.", t8_inst: "Sort into buckets:", t8_h1: "Searching or chatting?", t8_h2: "Google is a search engine.", t8_q: "What do you use a search engine for?", t8_qa: "To find info", t8_qb: "To paint pictures", t8_qc: "To listen to music", t8_qd: "To play offline",
    t8_bl1: "Search Engine", t8_bl2: "Other", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Safe Surfing", t9_text: "Never give your real data to strangers.", t9_inst: "Highlight the correct word:", t9_h1: "Careful online!", t9_h2: "Stay anonymous.", t9_q: "Should you share passwords?", t9_qa: "Never", t9_qb: "Only with friends", t9_qc: "Always", t9_qd: "Yes, in chat",
    t9_tk1: "Never", t9_tk2: "share", t9_tk3: "your", t9_tk4: "passwords", t9_tk5: "with anyone.", t9_tk6: "",
    t10_title: "Privacy", t10_text: "Protect your personal information online.", t10_inst: "Put the words in order:", t10_h1: "Protection is important.", t10_h2: "Data is private.", t10_q: "What belongs to privacy?", t10_qa: "Keep private info secret", t10_qb: "Post everything", t10_qc: "Camera always on", t10_qd: "Accept everyone",
    t10_w1: "Protect", t10_w2: "your", t10_w3: "private", t10_w4: "data", t10_w5: "on", t10_w6: "the internet.", t10_w7: "",
    t11_title: "Cyberbullying", t11_text: "Be nice to each other on the internet, don't insult anyone.", t11_inst: "Match the pairs:", t11_h1: "Respect online.", t11_h2: "Stay nice.", t11_q: "What is cyberbullying?", t11_qa: "Insulting on the internet", t11_qb: "A computer game", t11_qc: "A virus", t11_qd: "A chat room",
    t11_l1: "Respect", t11_r1: "Important", t11_l2: "Insult", t11_r2: "Wrong", t11_l3: "Bullying", t11_r3: "Mean",
    t12_title: "Algorithm", t12_text: "A step-by-step instruction for the computer, like a recipe.", t12_inst: "Fill in the blank:", t12_h1: "Like a cooking recipe.", t12_h2: "Step by step.", t12_q: "What is an algorithm?", t12_qa: "An exact instruction", t12_qb: "A computer part", t12_qc: "A picture", t12_qd: "A game",
    t12_sent: "An algorithm is like a ___.", t12_qa2: "recipe", t12_qb2: "cable", t12_qc2: "monitor", t12_qd2: "mistake",
    t13_title: "Binary Code", t13_text: "Computers only understand two numbers: 0 and 1.", t13_inst: "Highlight the correct word:", t13_h1: "Only zeros and ones.", t13_h2: "Bits and bytes.", t13_q: "Which numbers does binary code use?", t13_qa: "0 and 1", t13_qb: "1 and 2", t13_qc: "A and B", t13_qd: "0 to 9",
    t13_tk1: "Computers", t13_tk2: "calculate", t13_tk3: "only", t13_tk4: "with", t13_tk5: "0 and 1.", t13_tk6: "",
    t14_title: "Cloud Storage", t14_text: "Storing data on the internet instead of just on the hard drive.", t14_inst: "Sort into buckets:", t14_h1: "Local or online?", t14_h2: "The cloud.", t14_q: "What is a cloud?", t14_qa: "Storage space on the internet", t14_qb: "A weather phenomenon", t14_qc: "A hard drive", t14_qd: "A printer",
    t14_bl1: "Cloud", t14_bl2: "Local", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "USB flash drive", t14_i4: "Hard drive",
    t15_title: "Artificial Intelligence", t15_text: "Computers that learn and solve tasks independently.", t15_inst: "Put the words in order:", t15_h1: "Learning machines.", t15_h2: "AI.", t15_q: "What does AI stand for?", t15_qa: "Artificial Intelligence", t15_qb: "No Information", t15_qc: "Short Internet", t15_qd: "Cables and Internet",
    t15_w1: "AI", t15_w2: "stands", t15_w3: "for", t15_w4: "Artificial", t15_w5: "Intelligence.", t15_w6: "", t15_w7: "" 
  },
  hu: {
    explorer_title: "Informatika Felfedező 9",
    t1_title: "Sorrend (szekvencia)", t1_text: "A programozásban minden utasítás a helyes sorrendben hajtódik végre.", t1_inst: "Párosítsd össze:", t1_h1: "Mi jön először?", t1_h2: "A sorrend számít!", t1_q: "Mi történik, ha a sorrend rossz?", t1_qa: "A program nem működik helyesen", t1_qb: "A program gyorsabb lesz", t1_qc: "A program adatot töröl", t1_qd: "A program nyomtat",
    t1_l1: "1. lépés", t1_r1: "Először", t1_l2: "2. lépés", t1_r2: "Aztán", t1_l3: "3. lépés", t1_r3: "Végül",
    t2_title: "Feltétel (if-utasítás)", t2_text: "A feltétel megvizsgálja, hogy valami igaz vagy hamis-e, és ennek alapján dönt.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Ha... akkor...", t2_h2: "Igaz vagy hamis?", t2_q: "Mit csinál az if-utasítás?", t2_qa: "Megvizsgál egy feltételt", t2_qb: "Megismétel egy parancsot", t2_qc: "Ment egy fájlt", t2_qd: "Megnyit egy programot",
    t2_sent: "Ha a feltétel ___, a program végrehajtja az utasítást.", t2_qa2: "igaz", t2_qb2: "hamis", t2_qc2: "üres", t2_qd2: "nagy",
    t3_title: "Ciklus (ismétlés)", t3_text: "A ciklus parancsokat ismétel meg többször, anélkül hogy külön kellene leírni.", t3_inst: "Válogasd szét:", t3_h1: "Egyszer vagy sokszor?", t3_h2: "Ciklus = ismétlés.", t3_q: "Mikor használunk ciklust?", t3_qa: "Ha valamit sokszor meg akarunk ismételni", t3_qb: "Ha fájlt mentünk", t3_qc: "Ha színt választunk", t3_qd: "Ha nyomtatunk",
    t3_bl1: "Ciklus (sokszor)", t3_bl2: "Egyszer", t3_i1: "10× mozgás", t3_i2: "Egyszer nyomtat", t3_i3: "100× számol", t3_i4: "Fájl megnyitás",
    t4_title: "Scratch alapok", t4_text: "A Scratch kezdőknek való programozási nyelv, színes blokkokkal.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Scratch = színes blokkok.", t4_h2: "Könnyű elkezdeni!", t4_q: "Mi a Scratch?", t4_qa: "Vizuális programozási nyelv", t4_qb: "Szövegszerkesztő", t4_qc: "Rajzolóprogram", t4_qd: "Táblázatkezelő",
    t4_w1: "A Scratch-ben", t4_w2: "blokkokkal", t4_w3: "programozunk.", t4_w4: "", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Hibakeresés (debugging)", t5_text: "A debugging a programban lévő hibák megkeresését és kijavítását jelenti.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Bug = hiba, Debug = javítás.", t5_h2: "Hibát keresni és javítani!", t5_q: "Mit jelent a 'debuggolás'?", t5_qa: "Programhibák keresése és javítása", t5_qb: "Programok telepítése", t5_qc: "Fájlok törlése", t5_qd: "E-mailek olvasása",
    t5_tk1: "A debugging", t5_tk2: "segít", t5_tk3: "megtalálni", t5_tk4: "és javítani", t5_tk5: "a hibákat.", t5_tk6: "",
    t6_title: "Hardver vs Szoftver", t6_text: "A hardvert meg lehet fogni, a szoftverek a programok.", t6_inst: "Töltsd ki a hiányt:", t6_h1: "Megfogható vagy nem?", t6_h2: "Az egér hardver.", t6_q: "Mi a hardver?", t6_qa: "Egér", t6_qb: "Windows", t6_qc: "Egy játék", t6_qd: "Internet",
    t6_sent: "A billentyűzet a ___ része.", t6_qa2: "hardver", t6_qb2: "szoftver", t6_qc2: "levegő", t6_qd2: "ötlet",
    t7_title: "Az Internet", t7_text: "Sok számítógép világméretű hálózata.", t7_inst: "Párosítsd össze:", t7_h1: "Mi az a WWW?", t7_h2: "Világszerte összekötve.", t7_q: "Mi az internet?", t7_qa: "Világméretű számítógép-hálózat", t7_qb: "Egyetlen PC", t7_qc: "Egy kábel", t7_qd: "Egy program",
    t7_l1: "Internet", t7_r1: "Hálózat", t7_l2: "WWW", t7_r2: "Weboldalak", t7_l3: "Böngésző", t7_r3: "Program",
    t8_title: "Keresőmotorok", t8_text: "Programok, amikkel információt keresünk az interneten.", t8_inst: "Válogasd szét:", t8_h1: "Keresés vagy csevegés?", t8_h2: "A Google egy keresőmotor.", t8_q: "Mire használunk egy keresőmotort?", t8_qa: "Infók keresésére", t8_qb: "Képek festésére", t8_qc: "Zenehallgatásra", t8_qd: "Offline játékra",
    t8_bl1: "Keresőmotor", t8_bl2: "Egyéb", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Biztonságos netezés", t9_text: "Soha ne add meg az igazi adataidat idegeneknek.", t9_inst: "Jelöld meg a helyes szót:", t9_h1: "Vigyázz a neten!", t9_h2: "Maradj névtelen.", t9_q: "Meg szabad osztani a jelszavad?", t9_qa: "Soha", t9_qb: "Csak barátokkal", t9_qc: "Mindig", t9_qd: "Igen, a chaten",
    t9_tk1: "Soha", t9_tk2: "ne", t9_tk3: "oszd", t9_tk4: "meg", t9_tk5: "a jelszavad.", t9_tk6: "",
    t10_title: "Adatvédelem", t10_text: "Védd a személyes információidat az interneten.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "A védelem fontos.", t10_h2: "Az adat privát.", t10_q: "Mi tartozik az adatvédelemhez?", t10_qa: "Privát infók titokban tartása", t10_qb: "Mindent posztolni", t10_qc: "Kamera mindig be", t10_qd: "Mindenkit elfogadni",
    t10_w1: "Védd", t10_w2: "a", t10_w3: "személyes", t10_w4: "adataidat", t10_w5: "az", t10_w6: "interneten.", t10_w7: "",
    t11_title: "Internetes zaklatás", t11_text: "Legyünk kedvesek egymással az interneten, ne bántsunk senkit.", t11_inst: "Párosítsd össze:", t11_h1: "Tisztelet online.", t11_h2: "Maradj kedves.", t11_q: "Mi a cyberbullying?", t11_qa: "Internetes zaklatás", t11_qb: "Számítógépes játék", t11_qc: "Egy vírus", t11_qd: "Egy chatszoba",
    t11_l1: "Tisztelet", t11_r1: "Fontos", t11_l2: "Sértés", t11_r2: "Helytelen", t11_l3: "Zaklatás", t11_r3: "Gonosz",
    t12_title: "Algoritmus", t12_text: "Lépésről lépésre szóló útmutató a gépnek, mint egy recept.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Mint egy recept.", t12_h2: "Lépésről lépésre.", t12_q: "Mi egy algoritmus?", t12_qa: "Pontos útmutató", t12_qb: "Számítógép-alkatrész", t12_qc: "Egy kép", t12_qd: "Egy játék",
    t12_sent: "Az algoritmus olyan, mint egy ___.", t12_qa2: "recept", t12_qb2: "kábel", t12_qc2: "monitor", t12_qd2: "hiba",
    t13_title: "Bináris kód", t13_text: "A számítógépek csak két számot értenek: 0 és 1.", t13_inst: "Jelöld meg a helyes szót:", t13_h1: "Csak nullák és egyesek.", t13_h2: "Bitek és bájtok.", t13_q: "Milyen számokat használ a bináris kód?", t13_qa: "0 és 1", t13_qb: "1 és 2", t13_qc: "A és B", t13_qd: "0-tól 9-ig",
    t13_tk1: "A gépek", t13_tk2: "csak", t13_tk3: "0-val", t13_tk4: "és", t13_tk5: "1-gyel számolnak.", t13_tk6: "",
    t14_title: "Felhőtárhely", t14_text: "Adatok tárolása az interneten, nem csak a merevlemezen.", t14_inst: "Válogasd szét:", t14_h1: "Helyi vagy online?", t14_h2: "A felhő (cloud).", t14_q: "Mi a felhő?", t14_qa: "Tárhely az interneten", t14_qb: "Időjárási jelenség", t14_qc: "Merevlemez", t14_qd: "Nyomtató",
    t14_bl1: "Felhő", t14_bl2: "Helyi", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "Pendrive", t14_i4: "Merevlemez",
    t15_title: "Mesterséges intelligencia", t15_text: "Olyan számítógépek, amik tanulnak és önállóan oldanak meg feladatokat.", t15_inst: "Tedd sorrendbe a szavakat:", t15_h1: "Tanuló gépek.", t15_h2: "MI vagy AI.", t15_q: "Mit jelent az MI?", t15_qa: "Mesterséges Intelligencia", t15_qb: "Minden Információ", t15_qc: "Méretes Internet", t15_qd: "Mozgó Ikon",
    t15_w1: "Az MI", t15_w2: "a", t15_w3: "Mesterséges", t15_w4: "Intelligencia", t15_w5: "rövidítése.", t15_w6: "", t15_w7: "" 
  },
  ro: {
    explorer_title: "Explorator Informatică 9",
    t1_title: "Secvență", t1_text: "În programare, fiecare comandă se execută în ordinea corectă.", t1_inst: "Potrivește perechile:", t1_h1: "Ce vine primul?", t1_h2: "Ordinea contează!", t1_q: "Ce se întâmplă dacă ordinea este greșită?", t1_qa: "Programul nu funcționează corect", t1_qb: "Programul devine mai rapid", t1_qc: "Programul șterge date", t1_qd: "Programul tipărește",
    t1_l1: "Pasul 1", t1_r1: "Primul", t1_l2: "Pasul 2", t1_r2: "Apoi", t1_l3: "Pasul 3", t1_r3: "Ultimul",
    t2_title: "Condiție (instrucțiunea if)", t2_text: "O condiție verifică dacă ceva este adevărat sau fals și decide ce se întâmplă.", t2_inst: "Completează spațiul liber:", t2_h1: "Dacă... atunci...", t2_h2: "Adevărat sau Fals?", t2_q: "Ce face o instrucțiune if?", t2_qa: "Verifică o condiție", t2_qb: "Repetă o comandă", t2_qc: "Salvează un fișier", t2_qd: "Deschide un program",
    t2_sent: "Dacă condiția este ___, programul execută comanda.", t2_qa2: "adevărată", t2_qb2: "falsă", t2_qc2: "goală", t2_qd2: "mare",
    t3_title: "Buclă (repetiție)", t3_text: "O buclă repetă comenzi de mai multe ori fără a le scrie din nou.", t3_inst: "Sortează în găleți:", t3_h1: "O dată sau de multe ori?", t3_h2: "Buclă = repetiție.", t3_q: "Când folosim o buclă?", t3_qa: "Când vrem să repetăm ceva de mai multe ori", t3_qb: "Când salvăm un fișier", t3_qc: "Când alegem o culoare", t3_qd: "Când tipărim",
    t3_bl1: "Buclă (de multe ori)", t3_bl2: "O dată", t3_i1: "Mișcă 10×", t3_i2: "Tipărire o dată", t3_i3: "Numără 100×", t3_i4: "Deschide fișier",
    t4_title: "Scratch - noțiuni de bază", t4_text: "Scratch este un limbaj de programare pentru începători cu blocuri colorate.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Scratch = blocuri colorate.", t4_h2: "Ușor de început!", t4_q: "Ce este Scratch?", t4_qa: "Un limbaj de programare vizual", t4_qb: "Un editor de text", t4_qc: "Un program de desen", t4_qd: "Un tabel de calcul",
    t4_w1: "În", t4_w2: "Scratch", t4_w3: "programăm", t4_w4: "cu blocuri.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Depanare (debugging)", t5_text: "Depanarea înseamnă găsirea și corectarea erorilor dintr-un program.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Bug = eroare, Debug = corectare.", t5_h2: "Găsește și repară erorile!", t5_q: "Ce înseamnă 'depanare'?", t5_qa: "Găsirea și corectarea erorilor", t5_qb: "Instalarea programelor", t5_qc: "Ștergerea fișierelor", t5_qd: "Citirea emailurilor",
    t5_tk1: "Depanarea", t5_tk2: "ajută", t5_tk3: "la corectarea", t5_tk4: "erorilor", t5_tk5: "din program.", t5_tk6: "",
    t6_title: "Hardware vs Software", t6_text: "Hardware este ce poți atinge, software sunt programele.", t6_inst: "Completează spațiul liber:", t6_h1: "Atingi sau nu?", t6_h2: "Mouse-ul e hardware.", t6_q: "Ce este hardware-ul?", t6_qa: "Mouse", t6_qb: "Windows", t6_qc: "Un joc", t6_qd: "Internet",
    t6_sent: "Tastatura este o parte din ___.", t6_qa2: "hardware", t6_qb2: "software", t6_qc2: "aer", t6_qd2: "idee",
    t7_title: "Internetul", t7_text: "O rețea globală de multe calculatoare.", t7_inst: "Potrivește perechile:", t7_h1: "Ce este WWW?", t7_h2: "Conectați global.", t7_q: "Ce este internetul?", t7_qa: "O rețea globală de calculatoare", t7_qb: "Un singur PC", t7_qc: "Un cablu", t7_qd: "Un program",
    t7_l1: "Internet", t7_r1: "Rețea", t7_l2: "WWW", t7_r2: "Site-uri", t7_l3: "Browser", t7_r3: "Program",
    t8_title: "Motoare de căutare", t8_text: "Programe pentru a găsi informații pe internet.", t8_inst: "Sortează în găleți:", t8_h1: "Căutare sau chat?", t8_h2: "Google e motor de căutare.", t8_q: "Pentru ce folosești un motor de căutare?", t8_qa: "Pentru a găsi info", t8_qb: "Pentru a picta", t8_qc: "Pentru a asculta muzică", t8_qd: "Pentru jocuri offline",
    t8_bl1: "Motor de căutare", t8_bl2: "Altele", t8_i1: "Google", t8_i2: "Bing", t8_i3: "Paint", t8_i4: "Word",
    t9_title: "Navigare sigură", t9_text: "Nu da niciodată datele tale reale străinilor.", t9_inst: "Evidențiază cuvântul corect:", t9_h1: "Atenție online!", t9_h2: "Rămâi anonim.", t9_q: "Ar trebui să împarți parolele?", t9_qa: "Niciodată", t9_qb: "Doar cu prietenii", t9_qc: "Întotdeauna", t9_qd: "Da, pe chat",
    t9_tk1: "Nu", t9_tk2: "împărți", t9_tk3: "niciodată", t9_tk4: "parolele", t9_tk5: "tale.", t9_tk6: "",
    t10_title: "Confidențialitate", t10_text: "Protejează-ți informațiile personale online.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Protecția e importantă.", t10_h2: "Datele sunt private.", t10_q: "Ce ține de confidențialitate?", t10_qa: "Păstrarea secretă a datelor", t10_qb: "Postarea la tot", t10_qc: "Camera mereu pornită", t10_qd: "Acceptarea tuturor",
    t10_w1: "Protejează-ți", t10_w2: "datele", t10_w3: "private", t10_w4: "pe", t10_w5: "internet.", t10_w6: "", t10_w7: "",
    t11_title: "Hărțuirea online (Cyberbullying)", t11_text: "Fii drăguț cu ceilalți pe internet, nu jigni.", t11_inst: "Potrivește perechile:", t11_h1: "Respect online.", t11_h2: "Rămâi amabil.", t11_q: "Ce este cyberbullying?", t11_qa: "Jignirea pe internet", t11_qb: "Un joc video", t11_qc: "Un virus", t11_qd: "Un chat",
    t11_l1: "Respect", t11_r1: "Important", t11_l2: "Jignire", t11_r2: "Greșit", t11_l3: "Hărțuire", t11_r3: "Rău",
    t12_title: "Algoritm", t12_text: "Un ghid pas cu pas pentru calculator, ca o rețetă.", t12_inst: "Completează spațiul liber:", t12_h1: "Ca o rețetă.", t12_h2: "Pas cu pas.", t12_q: "Ce este un algoritm?", t12_qa: "O instrucțiune exactă", t12_qb: "O piesă de calculator", t12_qc: "O imagine", t12_qd: "Un joc",
    t12_sent: "Un algoritm este ca o ___.", t12_qa2: "rețetă", t12_qb2: "sârmă", t12_qc2: "tastatură", t12_qd2: "eroare",
    t13_title: "Cod binar", t13_text: "Calculatoarele înțeleg doar două numere: 0 și 1.", t13_inst: "Evidențiază cuvântul corect:", t13_h1: "Doar zero și unu.", t13_h2: "Biți și octeți.", t13_q: "Ce numere folosește codul binar?", t13_qa: "0 și 1", t13_qb: "1 și 2", t13_qc: "A și B", t13_qd: "0 la 9",
    t13_tk1: "Calculatoarele", t13_tk2: "calculează", t13_tk3: "doar", t13_tk4: "cu", t13_tk5: "0 și 1.", t13_tk6: "",
    t14_title: "Stocare în Cloud", t14_text: "Stocarea datelor pe internet în loc de doar pe hard disk.", t14_inst: "Sortează în găleți:", t14_h1: "Local sau online?", t14_h2: "Norul (Cloud).", t14_q: "Ce este un cloud?", t14_qa: "Spațiu de stocare pe internet", t14_qb: "Un fenomen meteo", t14_qc: "Un hard disk", t14_qd: "O imprimantă",
    t14_bl1: "Cloud", t14_bl2: "Local", t14_i1: "Google Drive", t14_i2: "iCloud", t14_i3: "Stick USB", t14_i4: "Hard disk",
    t15_title: "Inteligență Artificială", t15_text: "Calculatoare care învață și rezolvă sarcini independent.", t15_inst: "Pune cuvintele în ordine:", t15_h1: "Mașini care învață.", t15_h2: "IA sau AI.", t15_q: "Ce înseamnă IA?", t15_qa: "Inteligență Artificială", t15_qb: "Informație Ascunsă", t15_qc: "Internet Adevărat", t15_qd: "Iconiță Animată",
    t15_w1: "IA", t15_w2: "înseamnă", t15_w3: "Inteligență", t15_w4: "Artificială.", t15_w5: "", t15_w6: "", t15_w7: "" 
  }
};

export const INFO_K5_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔢", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "❓", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐱", color: "#FF5722" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3"], correctOrder: [0,1,2] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🐛", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [0] },
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
    interactive: { type: "highlight-text", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", tokens: ["t9_tk1","t9_tk2","t9_tk3","t9_tk4","t9_tk5","t9_tk6"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
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
    interactive: { type: "highlight-text", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", tokens: ["t13_tk1","t13_tk2","t13_tk3","t13_tk4","t13_tk5","t13_tk6"].filter(x=>x!==""), correctIndices: [4] },
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
    interactive: { type: "word-order", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", words: ["t15_w1", "t15_w2", "t15_w3", "t15_w4", "t15_w5", "t15_w6", "t15_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 5) },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }

];
