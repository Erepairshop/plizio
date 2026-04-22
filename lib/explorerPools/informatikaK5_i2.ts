// lib/explorerPools/informatikaK5_i2.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 2",
    t16_title: "Speichern & Öffnen", t16_text: "Wir müssen unsere Arbeit speichern, damit sie nicht verloren geht.", t16_inst: "Ordne die Paare zu:", t16_h1: "Datei-Aktionen.", t16_h2: "Speichern oder laden.", t16_q: "Was passiert beim Speichern?", t16_qa: "Daten werden dauerhaft gesichert", t16_qb: "Daten werden gelöscht", t16_qc: "Der Computer geht aus", t16_qd: "Das Bild wird gemalt",
    t16_l1: "Speichern", t16_r1: "Save", t16_l2: "Öffnen", t16_r2: "Open", t16_l3: "Neu", t16_r3: "New",
    t17_title: "Internet Struktur", t17_text: "Das Internet ist ein weltweites Netz aus vielen Computern.", t17_inst: "Fülle die Lücke aus:", t17_h1: "Ein großes Netz.", t17_h2: "Verbindung weltweit.", t17_q: "Was verbindet das Internet?", t17_qa: "Computer weltweit", t17_qb: "Nur Drucker", t17_qc: "Nur Mäuse", t17_qd: "Zwei Laptops",
    t17_sent: "Das Internet ist ein riesiges ___.", t17_qa2: "Netzwerk", t17_qb2: "Haus", t17_qc2: "Kabel", t17_qd2: "Buch",
    t18_title: "Web-Browser", t18_text: "Ein Programm, mit dem wir Webseiten im Internet anschauen.", t18_inst: "Sortiere in die Eimer:", t18_h1: "Browser oder Webseite?", t18_h2: "Browser sind Werkzeuge.", t18_q: "Welches ist ein Web-Browser?", t18_qa: "Chrome", t18_qb: "Windows", t18_qc: "Google", t18_qd: "Tastatur",
    t18_bl1: "Browser", t18_bl2: "Webseite", t18_i1: "Edge", t18_i2: "Wikipedia", t18_i3: "Safari", t18_i4: "YouTube",
    t19_title: "Suchmaschinen", t19_text: "Sie helfen uns, Informationen im Internet schnell zu finden.", t19_inst: "Bringe die Wörter in Ordnung:", t19_h1: "Suchen macht schlau.", t19_h2: "Google ist eine...", t19_q: "Was macht eine Suchmaschine?", t19_qa: "Webseiten finden", t19_qb: "E-Mails schreiben", t19_qc: "Spiele spielen", t19_qd: "Hardware reparieren",
    t19_w1: "Google", t19_w2: "ist", t19_w3: "eine", t19_w4: "sehr", t19_w5: "bekannte", t19_w6: "Suchmaschine.", t19_w7: "",
    t20_title: "Glaubwürdigkeit", t20_text: "Nicht alles im Internet ist wahr. Wir müssen Informationen prüfen.", t20_inst: "Markiere das richtige Wort:", t20_h1: "Stimmt das?", t20_h2: "Immer kritisch sein.", t20_q: "Wie nennt man falsche Nachrichten?", t20_qa: "Fake News", t20_qb: "E-Mails", t20_qc: "Browser", t20_qd: "Hardware",
    t20_tk1: "Man", t20_tk2: "sollte", t20_tk3: "Informationen", t20_tk4: "immer", t20_tk5: "hinterfragen.",
    t21_title: "Digitale Sicherheit", t21_text: "Schütze deine Daten mit starken Passwörtern.", t21_inst: "Ordne die Paare zu:", t21_h1: "Sicher oder unsicher?", t21_h2: "Passwörter geheim halten.", t21_q: "Was ist ein sicheres Passwort?", t21_qa: "Lang mit Sonderzeichen", t21_qb: "123456", t21_qc: "Mein Vorname", t21_qd: "Passwort",
    t21_l1: "Sicher", t21_r1: "A?9!z2&", t21_l2: "Unsicher", t21_r2: "hallo", t21_l3: "Geheim", t21_r3: "Passwort",
    t22_title: "Netiquette", t22_text: "Höflichkeit und Regeln für das Verhalten im Internet.", t22_inst: "Fülle die Lücke aus:", t22_h1: "Sei nett!", t22_h2: "Keine Beleidigungen.", t22_q: "Was bedeutet Netiquette?", t22_qa: "Höflichkeit online", t22_qb: "Ein neues Spiel", t22_qc: "Internetkabel", t22_qd: "Computermaus",
    t22_sent: "Im Internet sollte man ___ sein.", t22_qa2: "höflich", t22_qb2: "laut", t22_qc2: "böse", t22_qd2: "unsichtbar",
    t23_title: "E-Mail", t23_text: "Digitale Briefe, die in Sekunden verschickt werden.", t23_inst: "Sortiere in die Eimer:", t23_h1: "Teile einer Mail.", t23_h2: "An wen und was?", t23_q: "Was braucht man zum Senden?", t23_qa: "E-Mail-Adresse", t23_qb: "Briefmarke", t23_qc: "Hausnummer", t23_qd: "Telefonnummer",
    t23_bl1: "Mail-Teil", t23_bl2: "Kein Teil", t23_i1: "Betreff", t23_i2: "Briefmarke", t23_i3: "Anhang", t23_i4: "Postkarte",
    t24_title: "Urheberrecht", t24_text: "Bilder und Texte gehören dem, der sie erstellt hat.", t24_inst: "Bringe die Wörter in Ordnung:", t24_h1: "Kopieren erlaubt?", t24_h2: "Rechte beachten.", t24_q: "Darf man fremde Bilder einfach nutzen?", t24_qa: "Nur mit Erlaubnis", t24_qb: "Ja, immer", t24_qc: "Nur wenn sie bunt sind", t24_qd: "Wenn sie im Internet sind",
    t24_w1: "Das", t24_w2: "Urheberrecht", t24_w3: "schützt", t24_w4: "die", t24_w5: "Werke", t24_w6: "von", t24_w7: "Künstlern.",
    t25_title: "Algorithmen", t25_text: "Eine genaue Schritt-für-Schritt-Anleitung zur Lösung eines Problems.", t25_inst: "Markiere das richtige Wort:", t25_h1: "Schritt für Schritt.", t25_h2: "Ein Rezept ist ein Algorithmus.", t25_q: "Was ist ein Algorithmus?", t25_qa: "Handlungsanweisung", t25_qb: "Ein Computerteil", t25_qc: "Ein Bildschirm", t25_qd: "Ein Kabel",
    t25_tk1: "Ein", t25_tk2: "Backrezept", t25_tk3: "ist", t25_tk4: "wie", t25_tk5: "ein", t25_tk6: "Algorithmus.",
    t26_title: "Programmieren", t26_text: "Dem Computer Befehle geben, damit er Aufgaben löst.", t26_inst: "Ordne die Paare zu:", t26_h1: "Sprachen lernen.", t26_h2: "Code schreiben.", t26_q: "Wie nennt man die Sprache der Computer?", t26_qa: "Programmiersprache", t26_qb: "Englisch", t26_qc: "Mathematik", t26_qd: "Latein",
    t26_l1: "Code", t26_r1: "Befehle", t26_l2: "Fehler", t26_r2: "Bug", t26_l3: "Sprache", t26_r3: "Python",
    t27_title: "Robotik Basics", t27_text: "Roboter nutzen Sensoren, um ihre Umwelt wahrzunehmen.", t27_inst: "Fülle die Lücke aus:", t27_h1: "Fühlen wie ein Mensch.", t27_h2: "Sensoren sind Augen/Ohren.", t27_q: "Was erkennt Hindernisse?", t27_qa: "Abstandssensor", t27_qb: "Motor", t27_qc: "Batterie", t27_qd: "Rad",
    t27_sent: "Ein Roboter braucht einen ___.", t27_qa2: "Motor", t27_qb2: "Hut", t27_qc2: "Schal", t27_qd2: "Keks",
    t28_title: "Künstliche Intelligenz", t28_text: "Computer, die lernen und wie Menschen denken sollen.", t28_inst: "Sortiere in die Eimer:", t28_h1: "KI oder Mensch?", t28_h2: "KI lernt aus Daten.", t28_q: "Was ist ein Beispiel für KI?", t28_qa: "Sprachassistent", t28_qb: "Toaster", t28_qc: "Hammer", t28_qd: "Fahrrad",
    t28_bl1: "KI", t28_bl2: "Keine KI", t28_i1: "Chatbot", t28_i2: "Bleistift", t28_i3: "Bilderkennung", t28_i4: "Lineal",
    t29_title: "Smarte Geräte", t29_text: "Geräte, die mit dem Internet verbunden sind (Smart Home).", t29_inst: "Bringe die Wörter in Ordnung:", t29_h1: "Alles vernetzt.", t29_h2: "Das Internet der Dinge.", t29_q: "Was ist ein smartes Gerät?", t29_qa: "Smarte Glühbirne", t29_qb: "Holztisch", t29_qc: "Papiertüte", t29_qd: "Gabel",
    t29_w1: "Smarte", t29_w2: "Geräte", t29_w3: "können", t29_w4: "über", t29_w5: "das", t29_w6: "Handy", t29_w7: "gesteuert", t29_w8: "werden.",
    t30_title: "Geschichte der IT", t30_text: "Früher waren Computer so groß wie ganze Zimmer.", t30_inst: "Markiere das richtige Wort:", t30_h1: "Früher vs. heute.", t30_h2: "Computer wurden kleiner.", t30_q: "Wer erfand die erste Rechenmaschine?", t30_qa: "Blaise Pascal", t30_qb: "Elon Musk", t30_qc: "Steve Jobs", t30_qd: "Bill Gates",
    t30_tk1: "Computer", t30_tk2: "wurden", t30_tk3: "im", t30_tk4: "Laufe", t30_tk5: "der", t30_tk6: "Zeit", t30_tk7: "immer", t30_tk8: "kleiner."
  },
  en: {
    explorer_title: "Informatics Explorer 2",
    t16_title: "Saving & Opening", t16_text: "We must save our work so it is not lost.", t16_inst: "Match the pairs:", t16_h1: "File actions.", t16_h2: "Save or load.", t16_q: "What happens when saving?", t16_qa: "Data is permanently secured", t16_qb: "Data is deleted", t16_qc: "The computer turns off", t16_qd: "The image is painted",
    t16_l1: "Save", t16_r1: "Save", t16_l2: "Open", t16_r2: "Open", t16_l3: "New", t16_r3: "New",
    t17_title: "Internet Structure", t17_text: "The internet is a worldwide network of many computers.", t17_inst: "Fill in the blank:", t17_h1: "A big net.", t17_h2: "Worldwide connection.", t17_q: "What does the internet connect?", t17_qa: "Computers worldwide", t17_qb: "Only printers", t17_qc: "Only mice", t17_qd: "Two laptops",
    t17_sent: "The internet is a huge ___.", t17_qa2: "network", t17_qb2: "house", t17_qc2: "cable", t17_qd2: "book",
    t18_title: "Web Browser", t18_text: "A program used to view web pages on the internet.", t18_inst: "Sort into buckets:", t18_h1: "Browser or website?", t18_h2: "Browsers are tools.", t18_q: "Which is a web browser?", t18_qa: "Chrome", t18_qb: "Windows", t18_qc: "Google", t18_qd: "Keyboard",
    t18_bl1: "Browser", t18_bl2: "Website", t18_i1: "Edge", t18_i2: "Wikipedia", t18_i3: "Safari", t18_i4: "YouTube",
    t19_title: "Search Engines", t19_text: "They help us find information on the internet quickly.", t19_inst: "Put the words in order:", t19_h1: "Searching makes you smart.", t19_h2: "Google is a...", t19_q: "What does a search engine do?", t19_qa: "Find websites", t19_qb: "Write emails", t19_qc: "Play games", t19_qd: "Repair hardware",
    t19_w1: "Google", t19_w2: "is", t19_w3: "a", t19_w4: "very", t19_w5: "well-known", t19_w6: "search", t19_w7: "engine.",
    t20_title: "Credibility", t20_text: "Not everything on the internet is true. We must check information.", t20_inst: "Highlight the correct word:", t20_h1: "Is that true?", t20_h2: "Always be critical.", t20_q: "What are fake news called?", t20_qa: "Fake News", t20_qb: "Emails", t20_qc: "Browsers", t20_qd: "Hardware",
    t20_tk1: "One", t20_tk2: "should", t20_tk3: "always", t20_tk4: "question", t20_tk5: "information.",
    t21_title: "Digital Security", t21_text: "Protect your data with strong passwords.", t21_inst: "Match the pairs:", t21_h1: "Safe or unsafe?", t21_h2: "Keep passwords secret.", t21_q: "What is a secure password?", t21_qa: "Long with special characters", t21_qb: "123456", t21_qc: "My first name", t21_qd: "Password",
    t21_l1: "Safe", t21_r1: "A?9!z2&", t21_l2: "Unsafe", t21_r2: "hello", t21_l3: "Secret", t21_r3: "Password",
    t22_title: "Netiquette", t22_text: "Politeness and rules for behavior on the internet.", t22_inst: "Fill in the blank:", t22_h1: "Be nice!", t22_h2: "No insults.", t22_q: "What does Netiquette mean?", t22_qa: "Politeness online", t22_qb: "A new game", t22_qc: "Internet cable", t22_qd: "Computer mouse",
    t22_sent: "One should be ___ on the internet.", t22_qa2: "polite", t22_qb2: "loud", t22_qc2: "mean", t22_qd2: "invisible",
    t23_title: "Email", t23_text: "Digital letters sent in seconds.", t23_inst: "Sort into buckets:", t23_h1: "Parts of a mail.", t23_h2: "To whom and what?", t23_q: "What do you need to send?", t23_qa: "Email address", t23_qb: "Postage stamp", t23_qc: "House number", t23_qd: "Phone number",
    t23_bl1: "Mail part", t23_bl2: "Not part", t23_i1: "Subject", t23_i2: "Stamp", t23_i3: "Attachment", t23_i4: "Postcard",
    t24_title: "Copyright", t24_text: "Images and texts belong to the person who created them.", t24_inst: "Put the words in order:", t24_h1: "Copying allowed?", t24_h2: "Observe rights.", t24_q: "Can you just use other people's images?", t24_qa: "Only with permission", t24_qb: "Yes, always", t24_qc: "Only if they are colorful", t24_qd: "If they are on the internet",
    t24_w1: "Copyright", t24_w2: "protects", t24_w3: "the", t24_w4: "works", t24_w5: "of", t24_w6: "artists.", t24_w7: "",
    t25_title: "Algorithms", t25_text: "A precise step-by-step instruction for solving a problem.", t25_inst: "Highlight the correct word:", t25_h1: "Step by step.", t25_h2: "A recipe is an algorithm.", t25_q: "What is an algorithm?", t25_qa: "Instruction", t25_qb: "A computer part", t25_qc: "A screen", t25_qd: "A cable",
    t25_tk1: "A", t25_tk2: "baking", t25_tk3: "recipe", t25_tk4: "is", t25_tk5: "like", t25_tk6: "an", t25_tk7: "algorithm.",
    t26_title: "Programming", t26_text: "Giving the computer commands so it solves tasks.", t26_inst: "Match the pairs:", t26_h1: "Learning languages.", t26_h2: "Writing code.", t26_q: "What is the language of computers called?", t26_qa: "Programming language", t26_qb: "English", t26_qc: "Mathematics", t26_qd: "Latin",
    t26_l1: "Code", t26_r1: "Commands", t26_l2: "Error", t26_r2: "Bug", t26_l3: "Language", t26_r3: "Python",
    t27_title: "Robotics Basics", t27_text: "Robots use sensors to perceive their environment.", t27_inst: "Fill in the blank:", t27_h1: "Feeling like a human.", t27_h2: "Sensors are eyes/ears.", t27_q: "What detects obstacles?", t27_qa: "Distance sensor", t27_qb: "Motor", t27_qc: "Battery", t27_qd: "Wheel",
    t27_sent: "A robot needs a ___.", t27_qa2: "motor", t27_qb2: "hat", t27_qc2: "scarf", t27_qd2: "cookie",
    t28_title: "Artificial Intelligence", t28_text: "Computers that learn and are supposed to think like humans.", t28_inst: "Sort into buckets:", t28_h1: "AI or human?", t28_h2: "AI learns from data.", t28_q: "What is an example of AI?", t28_qa: "Voice assistant", t28_qb: "Toaster", t28_qc: "Hammer", t28_qd: "Bicycle",
    t28_bl1: "AI", t28_bl2: "No AI", t28_i1: "Chatbot", t28_i2: "Pencil", t28_i3: "Image recognition", t28_i4: "Ruler",
    t29_title: "Smart Devices", t29_text: "Devices connected to the internet (Smart Home).", t29_inst: "Put the words in order:", t29_h1: "Everything connected.", t29_h2: "The Internet of Things.", t29_q: "What is a smart device?", t29_qa: "Smart light bulb", t29_qb: "Wooden table", t29_qc: "Paper bag", t29_qd: "Fork",
    t29_w1: "Smart", t29_w2: "devices", t29_w3: "can", t29_w4: "be", t29_w5: "controlled", t29_w6: "via", t29_w7: "cell", t29_w8: "phone.",
    t30_title: "History of IT", t30_text: "Computers used to be as big as entire rooms.", t30_inst: "Highlight the correct word:", t30_h1: "Then vs. now.", t30_h2: "Computers became smaller.", t30_q: "Who invented the first calculating machine?", t30_qa: "Blaise Pascal", t30_qb: "Elon Musk", t30_qc: "Steve Jobs", t30_qd: "Bill Gates",
    t30_tk1: "Computers", t30_tk2: "became", t30_tk3: "smaller", t30_tk4: "over", t30_tk5: "time.", t30_tk6: "", t30_tk7: "", t30_tk8: ""
  },
  hu: {
    explorer_title: "Informatika Felfedező 2",
    t16_title: "Mentés & Megnyitás", t16_text: "El kell mentenünk a munkánkat, hogy ne vesszen el.", t16_inst: "Párosítsd össze:", t16_h1: "Fájl műveletek.", t16_h2: "Mentés vagy betöltés.", t16_q: "Mi történik mentéskor?", t16_qa: "Az adatok tartósan rögzülnek", t16_qb: "Az adatok törlődnek", t16_qc: "A gép kikapcsol", t16_qd: "A kép kiszíneződik",
    t16_l1: "Mentés", t16_r1: "Save", t16_l2: "Megnyitás", t16_r2: "Open", t16_l3: "Új", t16_r3: "New",
    t17_title: "Internet felépítése", t17_text: "Az internet sok számítógép világméretű hálózata.", t17_inst: "Töltsd ki a hiányt:", t17_h1: "Egy nagy háló.", t17_h2: "Világméretű kapcsolat.", t17_q: "Mit köt össze az internet?", t17_qa: "Számítógépeket világszerte", t17_qb: "Csak nyomtatókat", t17_qc: "Csak egereket", t17_qd: "Két laptopot",
    t17_sent: "Az internet egy óriási ___.", t17_qa2: "hálózat", t17_qb2: "ház", t17_qc2: "kábel", t17_qd2: "könyv",
    t18_title: "Böngészők", t18_text: "Program, amivel weboldalakat nézünk az interneten.", t18_inst: "Válogasd szét:", t18_h1: "Böngésző vagy weboldal?", t18_h2: "A böngésző egy eszköz.", t18_q: "Melyik egy webböngésző?", t18_qa: "Chrome", t18_qb: "Windows", t18_qc: "Google", t18_qd: "Billentyűzet",
    t18_bl1: "Böngésző", t18_bl2: "Weboldal", t18_i1: "Edge", t18_i2: "Wikipedia", t18_i3: "Safari", t18_i4: "YouTube",
    t19_title: "Keresőmotorok", t19_text: "Segítenek gyorsan megtalálni az információkat.", t19_inst: "Tedd sorrendbe a szavakat:", t19_h1: "A keresés okosít.", t19_h2: "A Google egy...", t19_q: "Mit csinál a keresőmotor?", t19_qa: "Weboldalakat keres", t19_qb: "E-mailt ír", t19_qc: "Játszik", t19_qd: "Hardvert javít",
    t19_w1: "A Google", t19_w2: "egy", t19_w3: "nagyon", t19_w4: "ismert", t19_w5: "keresőmotor.", t19_w6: "", t19_w7: "",
    t20_title: "Hitelesség", t20_text: "Nem minden igaz az interneten. Ellenőrizni kell az információkat.", t20_inst: "Jelöld meg a helyes szót:", t20_h1: "Igaz ez?", t20_h2: "Légy kritikus.", t20_q: "Hogy hívják a hamis híreket?", t20_qa: "Fake News", t20_qb: "E-mail", t20_qc: "Böngésző", t20_qd: "Hardver",
    t20_tk1: "Az", t20_tk2: "információkat", t20_tk3: "mindig", t20_tk4: "ellenőrizni", t20_tk5: "kell.",
    t21_title: "Digitális biztonság", t21_text: "Védd az adataidat erős jelszavakkal.", t21_inst: "Párosítsd össze:", t21_h1: "Biztonságos vagy nem?", t21_h2: "Tartsd titokban a jelszót.", t21_q: "Milyen a jó jelszó?", t21_qa: "Hosszú és bonyolult", t21_qb: "123456", t21_qc: "A keresztnevem", t21_qd: "Jelszó",
    t21_l1: "Biztonságos", t21_r1: "A?9!z2&", t21_l2: "Gyenge", t21_r2: "hello", t21_l3: "Titkos", t21_r3: "Jelszó",
    t22_title: "Netikett", t22_text: "Udvariasság és viselkedési szabályok az interneten.", t22_inst: "Töltsd ki a hiányt:", t22_h1: "Légy kedves!", t22_h2: "Ne sértegess.", t22_q: "Mit jelent a Netikett?", t22_qa: "Online udvariasság", t22_qb: "Egy új játék", t22_qc: "Internetkábel", t22_qd: "Egér",
    t22_sent: "Az interneten ___ kell lenni.", t22_qa2: "udvariasnak", t22_qb2: "hangosnak", t22_qc2: "gonosznak", t22_qd2: "láthatatlannak",
    t23_title: "E-mail", t23_text: "Digitális levelek, amik másodpercek alatt megérkeznek.", t23_inst: "Válogasd szét:", t23_h1: "Egy e-mail részei.", t23_h2: "Kinek és mit?", t23_q: "Mi kell a küldéshez?", t23_qa: "E-mail cím", t23_qb: "Bélyeg", t23_qc: "Házszám", t23_qd: "Telefonszám",
    t23_bl1: "E-mail rész", t23_bl2: "Nem az", t23_i1: "Tárgy", t23_i2: "Bélyeg", t23_i3: "Csatolmány", t23_i4: "Képeslap",
    t24_title: "Szerzői jog", t24_text: "A képek és szövegek ahhoz tartoznak, aki készítette őket.", t24_inst: "Tedd sorrendbe a szavakat:", t24_h1: "Szabad másolni?", t24_h2: "Tiszteld a jogokat.", t24_q: "Használhatsz bárkitől bármilyen képet?", t24_qa: "Csak engedéllyel", t24_qb: "Igen, bármikor", t24_qc: "Csak ha színes", t24_qd: "Ha fent van a neten",
    t24_w1: "A szerzői", t24_w2: "jog", t24_w3: "védi", t24_w4: "az", t24_w5: "alkotók", t24_w6: "munkáit.", t24_w7: "",
    t25_title: "Algoritmusok", t25_text: "Pontos, lépésről-lépésre haladó utasítás egy feladat megoldására.", t25_inst: "Jelöld meg a helyes szót:", t25_h1: "Lépésről lépésre.", t25_h2: "Egy recept is algoritmus.", t25_q: "Mi az algoritmus?", t25_qa: "Utasítássorozat", t25_qb: "Alkatrész", t25_qc: "Képernyő", t25_qd: "Kábel",
    t25_tk1: "Egy", t25_tk2: "sütési", t25_tk3: "recept", t25_tk4: "olyan", t25_tk5: "mint", t25_tk6: "egy", t25_tk7: "algoritmus.",
    t26_title: "Programozás", t26_text: "Parancsokat adunk a gépnek, hogy megoldja a feladatokat.", t26_inst: "Párosítsd össze:", t26_h1: "Nyelveket tanulunk.", t26_h2: "Kódot írunk.", t26_q: "Hogy hívják a gépek nyelvét?", t26_qa: "Programozási nyelv", t26_qb: "Angol", t26_qc: "Matematika", t26_qd: "Latin",
    t26_l1: "Kód", t26_r1: "Parancsok", t26_l2: "Hiba", t26_r2: "Bug", t26_l3: "Nyelv", t26_r3: "Python",
    t27_title: "Robotika", t27_text: "A robotok szenzorokkal érzékelik a környezetüket.", t27_inst: "Töltsd ki a hiányt:", t27_h1: "Érzékelés.", t27_h2: "A szenzor a szem/fül.", t27_q: "Mi érzékeli az akadályt?", t27_qa: "Távolságmérő", t27_qb: "Motor", t27_qc: "Akku", t27_qd: "Kerék",
    t27_sent: "A robotnak kell egy ___.", t27_qa2: "motor", t27_qb2: "kalap", t27_qc2: "sál", t27_qd2: "keksz",
    t28_title: "Mesterséges intelligencia", t28_text: "Tanulni képes gépek, amik az emberi gondolkodást utánozzák.", t28_inst: "Válogasd szét:", t28_h1: "MI vagy ember?", t28_h2: "Az MI adatokból tanul.", t28_q: "Mi egy példa az MI-re?", t28_qa: "Hangasszisztens", t28_qb: "Kenyérpirító", t28_qc: "Kalapács", t28_qd: "Bicikli",
    t28_bl1: "MI", t28_bl2: "Nem MI", t28_i1: "Chatbot", t28_i2: "Ceruza", t28_i3: "Képfelismerő", t28_i4: "Vonalzó",
    t29_title: "Okos eszközök", t29_text: "Internetre kötött mindennapi eszközök (Smart Home).", t29_inst: "Tedd sorrendbe a szavakat:", t29_h1: "Minden összekötve.", t29_h2: "A dolgok internete.", t29_q: "Mi egy okos eszköz?", t29_qa: "Okos izzó", t29_qb: "Fanyelű kés", t29_qc: "Papírzacskó", t29_qd: "Villa",
    t29_w1: "Az okos", t29_w2: "eszközök", t29_w3: "mobilról", t29_w4: "is", t29_w5: "irányíthatóak.", t29_w6: "", t29_w7: "", t29_w8: "",
    t30_title: "Informatika története", t30_text: "Régen a számítógépek szobányi méretűek voltak.", t30_inst: "Jelöld meg a helyes szót:", t30_h1: "Régen vs. ma.", t30_h2: "Kisebbek lettek.", t30_q: "Ki készítette az első számológépet?", t30_qa: "Blaise Pascal", t30_qb: "Elon Musk", t30_qc: "Steve Jobs", t30_qd: "Bill Gates",
    t30_tk1: "A gépek", t30_tk2: "egyre", t30_tk3: "kisebbek", t30_tk4: "lettek", t30_tk5: "az", t30_tk6: "idővel."
  },
  ro: {
    explorer_title: "Explorator Informatică 2",
    t16_title: "Salvare & Deschidere", t16_text: "Trebuie să salvăm munca noastră pentru a nu se pierde.", t16_inst: "Potrivește perechile:", t16_h1: "Acțiuni fișiere.", t16_h2: "Salvează sau încarcă.", t16_q: "Ce se întâmplă la salvare?", t16_qa: "Datele sunt asigurate permanent", t16_qb: "Datele sunt șterse", t16_qc: "Calculatorul se oprește", t16_qd: "Imaginea este pictată",
    t16_l1: "Salvare", t16_r1: "Save", t16_l2: "Deschidere", t16_r2: "Open", t16_l3: "Nou", t16_r3: "New",
    t17_title: "Structura Internet", t17_text: "Internetul este o rețea mondială de calculatoare.", t17_inst: "Completează spațiul liber:", t17_h1: "O rețea mare.", t17_h2: "Conexiune mondială.", t17_q: "Ce conectează internetul?", t17_qa: "Calculatoare din toată lumea", t17_qb: "Doar imprimante", t17_qc: "Doar mouse-uri", t17_qd: "Două laptopuri",
    t17_sent: "Internetul este o ___ uriașă.", t17_qa2: "rețea", t17_qb2: "casă", t17_qc2: "cablu", t17_qd2: "carte",
    t18_title: "Browsere web", t18_text: "Programul cu care vizualizăm pagini web pe internet.", t18_inst: "Sortează în găleți:", t18_h1: "Browser sau pagină?", t18_h2: "Browserele sunt unelte.", t18_q: "Care este un browser web?", t18_qa: "Chrome", t18_qb: "Windows", t18_qc: "Google", t18_qd: "Tastatură",
    t18_bl1: "Browser", t18_bl2: "Pagină web", t18_i1: "Edge", t18_i2: "Wikipedia", t18_i3: "Safari", t18_i4: "YouTube",
    t19_title: "Motoare de căutare", t19_text: "Ne ajută să găsim rapid informații pe internet.", t19_inst: "Pune cuvintele în ordine:", t19_h1: "Căutarea te face deștept.", t19_h2: "Google este un...", t19_q: "Ce face un motor de căutare?", t19_qa: "Găsește pagini web", t19_qb: "Scrie e-mailuri", t19_qc: "Joacă jocuri", t19_qd: "Repară hardware",
    t19_w1: "Google", t19_w2: "este", t19_w3: "un", t19_w4: "motor", t19_w5: "de", t19_w6: "căutare", t19_w7: "cunoscut.",
    t20_title: "Credibilitate", t20_text: "Nu tot ce e pe internet e adevărat. Trebuie să verificăm informațiile.", t20_inst: "Evidențiază cuvântul corect:", t20_h1: "E adevărat?", t20_h2: "Fii mereu critic.", t20_q: "Cum se numesc știrile false?", t20_qa: "Fake News", t20_qb: "E-mailuri", t20_qc: "Browsere", t20_qd: "Hardware",
    t20_tk1: "Trebuie", t20_tk2: "să", t20_tk3: "verificăm", t20_tk4: "mereu", t20_tk5: "informațiile.",
    t21_title: "Securitate digitală", t21_text: "Protejează-ți datele cu parole puternice.", t21_inst: "Potrivește perechile:", t21_h1: "Sigur sau nesigur?", t21_h2: "Păstrează parola secretă.", t21_q: "Ce este o parolă sigură?", t21_qa: "Lungă cu caractere speciale", t21_qb: "123456", t21_qc: "Prenumele meu", t21_qd: "Parola",
    t21_l1: "Sigură", t21_r1: "A?9!z2&", t21_l2: "Nesigură", t21_r2: "hallo", t21_l3: "Secretă", t21_r3: "Parola",
    t22_title: "Netichetă", t22_text: "Politețea și regulile de comportament pe internet.", t22_inst: "Completează spațiul liber:", t22_h1: "Fii drăguț!", t22_h2: "Fără jigniri.", t22_q: "Ce înseamnă Neticheta?", t22_qa: "Politețe online", t22_qb: "Un joc nou", t22_qc: "Cablu internet", t22_qd: "Mouse",
    t22_sent: "Pe internet trebuie să fii ___.", t22_qa2: "politicos", t22_qb2: "gălăgios", t22_qc2: "rău", t22_qd2: "invizibil",
    t23_title: "E-mail", t23_text: "Scrisori digitale trimise în câteva secunde.", t23_inst: "Sortează în găleți:", t23_h1: "Părțile unui e-mail.", t23_h2: "Cui și ce?", t23_q: "De ce ai nevoie pentru a trimite?", t23_qa: "Adresă e-mail", t23_qb: "Timbru", t23_qc: "Număr casă", t23_qd: "Număr telefon",
    t23_bl1: "Parte mail", t23_bl2: "Nu este", t23_i1: "Subiect", t23_i2: "Timbru", t23_i3: "Atașament", t23_i4: "Carte poștală",
    t24_title: "Drepturi de autor", t24_text: "Imaginile și textele aparțin celui care le-a creat.", t24_inst: "Pune cuvintele în ordine:", t24_h1: "Putem copia?", t24_h2: "Respectă drepturile.", t24_q: "Poți folosi orice imagine de la alții?", t24_qa: "Doar cu permisiune", t24_qb: "Da, oricând", t24_qc: "Doar dacă e colorată", t24_qd: "Dacă e pe net",
    t24_w1: "Dreptul", t24_w2: "de", t24_w3: "autor", t24_w4: "protejează", t24_w5: "opera", t24_w6: "artiștilor.", t24_w7: "",
    t25_title: "Algoritmi", t25_text: "Instrucțiuni precise pas cu pas pentru a rezolva o problemă.", t25_inst: "Evidențiază cuvântul corect:", t25_h1: "Pas cu pas.", t25_h2: "O rețetă este un algoritm.", t25_q: "Ce este un algoritm?", t25_qa: "Set de instrucțiuni", t25_qb: "O piesă PC", t25_qc: "Un ecran", t25_qd: "Un cablu",
    t25_tk1: "O", t25_tk2: "rețetă", t25_tk3: "de", t25_tk4: "gătit", t25_tk5: "este", t25_tk6: "ca", t25_tk7: "un", t25_tk8: "algoritm.",
    t26_title: "Programare", t26_text: "Dăm comenzi calculatorului pentru a rezolva sarcini.", t26_inst: "Potrivește perechile:", t26_h1: "Învățăm limbaje.", t26_h2: "Scriem cod.", t26_q: "Cum se numește limbajul calculatoarelor?", t26_qa: "Limbaj de programare", t26_qb: "Engleză", t26_qc: "Matematică", t26_qd: "Latină",
    t26_l1: "Cod", t26_r1: "Comenzi", t26_l2: "Eroare", t26_r2: "Bug", t26_l3: "Limbaj", t26_r3: "Python",
    t27_title: "Bazele Roboticii", t27_text: "Roboții folosesc senzori pentru a percepe mediul.", t27_inst: "Completează spațiul liber:", t27_h1: "Simțuri.", t27_h2: "Senzorii sunt ochi/urechi.", t27_q: "Ce detectează obstacolele?", t27_qa: "Senzor distanță", t27_qb: "Motor", t27_qc: "Baterie", t27_qd: "Roată",
    t27_sent: "Un robot are nevoie de un ___.", t27_qa2: "motor", t27_qb2: "pălărie", t27_qc2: "fular", t27_qd2: "biscuite",
    t28_title: "Inteligență Artificială", t28_text: "Calculatoare care învață și ar trebui să gândească ca oamenii.", t28_inst: "Sortează în găleți:", t28_h1: "IA sau om?", t28_h2: "IA învață din date.", t28_q: "Ce este un exemplu de IA?", t28_qa: "Asistent vocal", t28_qb: "Prăjitor pâine", t28_qc: "Ciocan", t28_qd: "Bicicletă",
    t28_bl1: "IA", t28_bl2: "Nu e IA", t28_i1: "Chatbot", t28_i2: "Creion", t28_i3: "Recunoaștere imagini", t28_i4: "Riglă",
    t29_title: "Dispozitive Smart", t29_text: "Dispozitive conectate la internet (Smart Home).", t29_inst: "Pune cuvintele în ordine:", t29_h1: "Totul conectat.", t29_h2: "Internetul lucrurilor.", t29_q: "Ce este un dispozitiv smart?", t29_qa: "Bec inteligent", t29_qb: "Masă de lemn", t29_qc: "Pungă hârtie", t29_qd: "Furculiță",
    t29_w1: "Dispozitivele", t29_w2: "smart", t29_w3: "pot", t29_w4: "fi", t29_w5: "controlate", t29_w6: "prin", t29_w7: "telefon.",
    t30_title: "Istoria IT", t30_text: "Înainte, calculatoarele erau mari cât niște camere întregi.", t30_inst: "Evidențiază cuvântul corect:", t30_h1: "Atunci vs. acum.", t30_h2: "Au devenit mai mici.", t30_q: "Cine a inventat prima mașină de calcul?", t30_qa: "Blaise Pascal", t30_qb: "Elon Musk", t30_qc: "Steve Jobs", t30_qd: "Bill Gates",
    t30_tk1: "Calculatoarele", t30_tk2: "au", t30_tk3: "devenit", t30_tk4: "tot", t30_tk5: "mai", t30_tk6: "mici", t30_tk7: "în", t30_tk8: "timp."
  }
};

export const INFO_K5_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t16_title", infoText: "t16_text",
    svg: { type: "simple-icon", icon: "💾", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t16_inst", hint1: "t16_h1", hint2: "t16_h2", pairs: [{left:"t16_l1",right:"t16_r1"},{left:"t16_l2",right:"t16_r2"},{left:"t16_l3",right:"t16_r3"}] },
    quiz: { question: "t16_q", choices: ["t16_qa", "t16_qb", "t16_qc", "t16_qd"], answer: "t16_qa" }
  },
  {
    infoTitle: "t17_title", infoText: "t17_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t17_inst", hint1: "t17_h1", hint2: "t17_h2", sentence: "t17_sent", choices: ["t17_qa2", "t17_qb2", "t17_qc2", "t17_qd2"], correctIndex: 0 },
    quiz: { question: "t17_q", choices: ["t17_qa", "t17_qb", "t17_qc", "t17_qd"], answer: "t17_qa" }
  },
  {
    infoTitle: "t18_title", infoText: "t18_text",
    svg: { type: "icon-grid", items: [{emoji:"🧭",label:"Browser"},{emoji:"📄",label:"Web"}] },
    interactive: { type: "drag-to-bucket", instruction: "t18_inst", hint1: "t18_h1", hint2: "t18_h2", buckets: [{id:"b1",label:"t18_bl1"},{id:"b2",label:"t18_bl2"}], items: [{text:"t18_i1",bucketId:"b1"},{text:"t18_i2",bucketId:"b2"},{text:"t18_i3",bucketId:"b1"},{text:"t18_i4",bucketId:"b2"}] },
    quiz: { question: "t18_q", choices: ["t18_qa", "t18_qb", "t18_qc", "t18_qd"], answer: "t18_qa" }
  },
  {
    infoTitle: "t19_title", infoText: "t19_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t19_inst", hint1: "t19_h1", hint2: "t19_h2", words: ["t19_w1", "t19_w2", "t19_w3", "t19_w4", "t19_w5", "t19_w6"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t19_q", choices: ["t19_qa", "t19_qb", "t19_qc", "t19_qd"], answer: "t19_qa" }
  },
  {
    infoTitle: "t20_title", infoText: "t20_text",
    svg: { type: "simple-icon", icon: "🧐", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t20_inst", hint1: "t20_h1", hint2: "t20_h2", tokens: ["t20_tk1","t20_tk2","t20_tk3","t20_tk4","t20_tk5"].filter(x=>x!==undefined), correctIndices: [4] },
    quiz: { question: "t20_q", choices: ["t20_qa", "t20_qb", "t20_qc", "t20_qd"], answer: "t20_qa" }
  },
  {
    infoTitle: "t21_title", infoText: "t21_text",
    svg: { type: "simple-icon", icon: "🔐", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t21_inst", hint1: "t21_h1", hint2: "t21_h2", pairs: [{left:"t21_l1",right:"t21_r1"},{left:"t21_l2",right:"t21_r2"},{left:"t21_l3",right:"t21_r3"}] },
    quiz: { question: "t21_q", choices: ["t21_qa", "t21_qb", "t21_qc", "t21_qd"], answer: "t21_qa" }
  },
  {
    infoTitle: "t22_title", infoText: "t22_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t22_inst", hint1: "t22_h1", hint2: "t22_h2", sentence: "t22_sent", choices: ["t22_qa2", "t22_qb2", "t22_qc2", "t22_qd2"], correctIndex: 0 },
    quiz: { question: "t22_q", choices: ["t22_qa", "t22_qb", "t22_qc", "t22_qd"], answer: "t22_qa" }
  },
  {
    infoTitle: "t23_title", infoText: "t23_text",
    svg: { type: "simple-icon", icon: "📧", color: "#03A9F4" },
    interactive: { type: "drag-to-bucket", instruction: "t23_inst", hint1: "t23_h1", hint2: "t23_h2", buckets: [{id:"b1",label:"t23_bl1"},{id:"b2",label:"t23_bl2"}], items: [{text:"t23_i1",bucketId:"b1"},{text:"t23_i2",bucketId:"b2"},{text:"t23_i3",bucketId:"b1"},{text:"t23_i4",bucketId:"b2"}] },
    quiz: { question: "t23_q", choices: ["t23_qa", "t23_qb", "t23_qc", "t23_qd"], answer: "t23_qa" }
  },
  {
    infoTitle: "t24_title", infoText: "t24_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t24_inst", hint1: "t24_h1", hint2: "t24_h2", words: ["t24_w1", "t24_w2", "t24_w3", "t24_w4", "t24_w5", "t24_w6", "t24_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t24_q", choices: ["t24_qa", "t24_qb", "t24_qc", "t24_qd"], answer: "t24_qa" }
  },
  {
    infoTitle: "t25_title", infoText: "t25_text",
    svg: { type: "simple-icon", icon: "📑", color: "#9E9E9E" },
    interactive: { type: "highlight-text", instruction: "t25_inst", hint1: "t25_h1", hint2: "t25_h2", tokens: ["t25_tk1","t25_tk2","t25_tk3","t25_tk4","t25_tk5","t25_tk6","t25_tk7","t25_tk8"].filter(x=>x!==undefined), correctIndices: [2] },
    quiz: { question: "t25_q", choices: ["t25_qa", "t25_qb", "t25_qc", "t25_qd"], answer: "t25_qa" }
  },
  {
    infoTitle: "t26_title", infoText: "t26_text",
    svg: { type: "simple-icon", icon: "⌨️", color: "#000000" },
    interactive: { type: "match-pairs", instruction: "t26_inst", hint1: "t26_h1", hint2: "t26_h2", pairs: [{left:"t26_l1",right:"t26_r1"},{left:"t26_l2",right:"t26_r2"},{left:"t26_l3",right:"t26_r3"}] },
    quiz: { question: "t26_q", choices: ["t26_qa", "t26_qb", "t26_qc", "t26_qd"], answer: "t26_qa" }
  },
  {
    infoTitle: "t27_title", infoText: "t27_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t27_inst", hint1: "t27_h1", hint2: "t27_h2", sentence: "t27_sent", choices: ["t27_qa2", "t27_qb2", "t27_qc2", "t27_qd2"], correctIndex: 0 },
    quiz: { question: "t27_q", choices: ["t27_qa", "t27_qb", "t27_qc", "t27_qd"], answer: "t27_qa" }
  },
  {
    infoTitle: "t28_title", infoText: "t28_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#F06292" },
    interactive: { type: "drag-to-bucket", instruction: "t28_inst", hint1: "t28_h1", hint2: "t28_h2", buckets: [{id:"b1",label:"t28_bl1"},{id:"b2",label:"t28_bl2"}], items: [{text:"t28_i1",bucketId:"b1"},{text:"t28_i2",bucketId:"b2"},{text:"t28_i3",bucketId:"b1"},{text:"t28_i4",bucketId:"b2"}] },
    quiz: { question: "t28_q", choices: ["t28_qa", "t28_qb", "t28_qc", "t28_qd"], answer: "t28_qa" }
  },
  {
    infoTitle: "t29_title", infoText: "t29_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t29_inst", hint1: "t29_h1", hint2: "t29_h2", words: ["t29_w1", "t29_w2", "t29_w3", "t29_w4", "t29_w5", "t29_w6", "t29_w7", "t29_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, 8) },
    quiz: { question: "t29_q", choices: ["t29_qa", "t29_qb", "t29_qc", "t29_qd"], answer: "t29_qa" }
  },
  {
    infoTitle: "t30_title", infoText: "t30_text",
    svg: { type: "simple-icon", icon: "⏳", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t30_inst", hint1: "t30_h1", hint2: "t30_h2", tokens: ["t30_tk1","t30_tk2","t30_tk3","t30_tk4","t30_tk5","t30_tk6","t30_tk7","t30_tk8"].filter(x=>x!==undefined), correctIndices: [2] },
    quiz: { question: "t30_q", choices: ["t30_qa", "t30_qb", "t30_qc", "t30_qd"], answer: "t30_qa" }
  }
];
