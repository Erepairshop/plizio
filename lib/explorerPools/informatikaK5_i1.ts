// @ts-nocheck
// lib/explorerPools/informatikaK5_i1.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 1",
    t1_title: "Welt der Daten", t1_text: "Daten sind Informationen, die wir sammeln und verarbeiten.", t1_inst: "Ordne die Paare zu:", t1_h1: "Denk an Beispiele!", t1_h2: "Was gehört zusammen?", t1_q: "Was ist eine Information?", t1_qa: "Wissen aus Daten", t1_qb: "Nur eine Zahl", t1_qc: "Ein Kabel", t1_qd: "Der Monitor",
    t1_l1: "Zahl", t1_r1: "7", t1_l2: "Text", t1_r2: "Hallo", t1_l3: "Bild", t1_r3: "Foto",
    t2_title: "Hardware Grundlagen", t2_text: "Hardware sind alle Teile eines Computers, die man anfassen kann.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Anfassen oder nicht?", t2_h2: "Hardware ist physisch.", t2_q: "Was ist Hardware?", t2_qa: "Maus", t2_qb: "Windows", t2_qc: "Ein Spiel", t2_qd: "Internet",
    t2_sent: "Die Tastatur ist ein Teil der ___.", t2_qa2: "Hardware", t2_qb2: "Software", t2_qc2: "Luft", t2_qd2: "Daten",
    t3_title: "Software", t3_text: "Software sind Programme und Apps, die auf der Hardware laufen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Programme vs. Teile.", t3_h2: "Was kannst du anfassen?", t3_q: "Was ist Software?", t3_qa: "Webbrowser", t3_qb: "Drucker", t3_qc: "Gehäuse", t3_qd: "Stromkabel",
    t3_bl1: "Hardware", t3_bl2: "Software", t3_i1: "Maus", t3_i2: "Windows", t3_i3: "Monitor", t3_i4: "Paint",
    t4_title: "Betriebssystem (OS)", t4_text: "Das Betriebssystem verwaltet die Hardware und andere Programme.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Windows ist ein...", t4_h2: "Es steuert alles.", t4_q: "Welches ist ein Betriebssystem?", t4_qa: "Android", t4_qb: "Google", t4_qc: "YouTube", t4_qd: "Word",
    t4_w1: "Windows", t4_w2: "ist", t4_w3: "ein", t4_w4: "bekanntes", t4_w5: "Betriebssystem", t4_w6: "für", t4_w7: "Computer.",
    t5_title: "Dateiverwaltung", t5_text: "Dateien werden in Ordnern gespeichert, um Ordnung zu halten.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Wo speichert man?", t5_h2: "Ordner halten Ordnung.", t5_q: "Wo liegen Dateien meistens?", t5_qa: "In Ordnern", t5_qb: "Im Papierkorb", t5_qc: "In der Maus", t5_qd: "Im Drucker",
    t5_tk1: "Ordner", t5_tk2: "helfen", t5_tk3: "uns", t5_tk4: "Dateien", t5_tk5: "schnell", t5_tk6: "wiederzufinden.",
    t6_title: "Peripheriegeräte", t6_text: "Geräte, die man an den Computer anschließt.", t6_inst: "Ordne die Paare zu:", t6_h1: "Anschließen!", t6_h2: "Außen am PC.", t6_q: "Was ist ein Peripheriegerät?", t6_qa: "Drucker", t6_qb: "Mainboard", t6_qc: "Prozessor", t6_qd: "Netzteil",
    t6_l1: "Drucken", t6_r1: "Drucker", t6_l2: "Steuern", t6_r2: "Maus", t6_l3: "Hören", t6_r3: "Headset",
    t7_title: "Eingabegeräte", t7_text: "Damit schicken wir Informationen IN den Computer.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Rein in den PC!", t7_h2: "Tippen oder klicken.", t7_q: "Was ist ein Eingabegerät?", t7_qa: "Mikrofon", t7_qb: "Monitor", t7_qc: "Lautsprecher", t7_qd: "Drucker",
    t7_sent: "Mit der Maus machen wir eine ___.", t7_qa2: "Eingabe", t7_qb2: "Ausgabe", t7_qc2: "Pause", t7_qd2: "Suppe",
    t8_title: "Ausgabegeräte", t8_text: "Damit zeigt uns der Computer Ergebnisse.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Was kommt raus?", t8_h2: "Bild oder Ton.", t8_q: "Was ist ein Ausgabegerät?", t8_qa: "Monitor", t8_qb: "Tastatur", t8_qc: "Scanner", t8_qd: "Webcam",
    t8_bl1: "Eingabe", t8_bl2: "Ausgabe", t8_i1: "Tastatur", t8_i2: "Monitor", t8_i3: "Maus", t8_i4: "Drucker",
    t9_title: "Speichermedien", t9_text: "Hier werden Daten dauerhaft gesichert.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "USB-Sticks sind...", t9_h2: "Speichern ist wichtig.", t9_q: "Was speichert am meisten?", t9_qa: "Festplatte (HDD)", t9_qb: "CD", t9_qc: "Diskette", t9_qd: "Arbeitsspeicher",
    t9_w1: "Eine", t9_w2: "SSD", t9_w3: "speichert", t9_w4: "Daten", t9_w5: "sehr", t9_w6: "schnell", t9_w7: "ab.",
    t10_title: "Monitor & Display", t10_text: "Der Bildschirm zeigt uns Bilder aus vielen kleinen Pixeln.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Kleine Punkte.", t10_h2: "Bildpunkte.", t10_q: "Wie nennt man die Bildpunkte?", t10_qa: "Pixel", t10_qb: "Atome", t10_qc: "Körner", t10_qd: "Flecken",
    t10_tk1: "Viele", t10_tk2: "Pixel", t10_tk3: "ergeben", t10_tk4: "ein", t10_tk5: "scharfes", t10_tk6: "Bild.",
    t11_title: "Tastatur & Tippen", t11_text: "Mit der Tastatur schreiben wir Texte.", t11_inst: "Ordne die Paare zu:", t11_h1: "Welche Taste?", t11_h2: "Großschreiben oder Löschen.", t11_q: "Wie macht man einen Zeilenumbruch?", t11_qa: "Enter-Taste", t11_qb: "Leertaste", t11_qc: "Shift-Taste", t11_qd: "Esc-Taste",
    t11_l1: "Löschen", t11_r1: "Backspace", t11_l2: "Groß", t11_r2: "Shift", t11_l3: "Abstand", t11_r3: "Leertaste",
    t12_title: "Maus & Steuerung", t12_text: "Die Maus steuert den Zeiger auf dem Bildschirm.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Klick!", t12_h2: "Rechts oder links.", t12_q: "Was macht das Scrollrad?", t12_qa: "Blättern", t12_qb: "Löschen", t12_qc: "Ausschalten", t12_qd: "Tippen",
    t12_sent: "Ein Doppelklick ___ ein Programm.", t12_qa2: "öffnet", t12_qb2: "löscht", t12_qc2: "beendet", t12_qd2: "malt",
    t13_title: "Digitale Grafik", t13_text: "Bilder können Pixel- oder Vektorgrafiken sein.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Punkte oder Linien?", t13_h2: "Fotos sind Pixel.", t13_q: "Was ist ein Foto meistens?", t13_qa: "Pixelgrafik", t13_qb: "Vektorgrafik", t13_qc: "Textdatei", t13_qd: "Hardware",
    t13_bl1: "Pixel", t13_bl2: "Vektor", t13_i1: "Foto", t13_i2: "Logo", t13_i3: "Screenshot", t13_i4: "Icon",
    t14_title: "Textverarbeitung", t14_text: "Programme zum Schreiben von Briefen und Aufsätzen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Word ist für...", t14_h2: "Schreiben macht Spaß.", t14_q: "Welches Programm ist für Text?", t14_qa: "Word", t14_qb: "Paint", t14_qc: "Excel", t14_qd: "Chrome",
    t14_w1: "Wir", t14_w2: "schreiben", t14_w3: "einen", t14_w4: "Text", t14_w5: "am", t14_w6: "Computer.",
    t15_title: "Formatierung", t15_text: "Den Text schöner machen (fett, kursiv, Farbe).", t15_inst: "Markiere das richtige Wort:", t15_h1: "Wie sieht es aus?", t15_h2: "Hervorheben.", t15_q: "Was bedeutet 'Fett'?", t15_qa: "Dicke Schrift", t15_qb: "Schräge Schrift", t15_qc: "Große Buchstaben", t15_qd: "Unterstrichen",
    t15_tk1: "Fett", t15_tk2: "und", t15_tk3: "Kursiv", t15_tk4: "sind", t15_tk5: "Arten", t15_tk6: "der", t15_tk7: "Formatierung."
  },
  en: {
    explorer_title: "Informatics Explorer 1",
    t1_title: "World of Data", t1_text: "Data is information that we collect and process.", t1_inst: "Match the pairs:", t1_h1: "Think of examples!", t1_h2: "What goes together?", t1_q: "What is information?", t1_qa: "Knowledge from data", t1_qb: "Just a number", t1_qc: "A cable", t1_qd: "The monitor",
    t1_l1: "Number", t1_r1: "7", t1_l2: "Text", t1_r2: "Hello", t1_l3: "Image", t1_r3: "Photo",
    t2_title: "Hardware Basics", t2_text: "Hardware is all the parts of a computer that you can touch.", t2_inst: "Fill in the blank:", t2_h1: "Touch or not?", t2_h2: "Hardware is physical.", t2_q: "What is hardware?", t2_qa: "Mouse", t2_qb: "Windows", t2_qc: "A game", t2_qd: "Internet",
    t2_sent: "The keyboard is part of the ___.", t2_qa2: "hardware", t2_qb2: "software", t2_qc2: "air", t2_qd2: "data",
    t3_title: "Software", t3_text: "Software is programs and apps that run on hardware.", t3_inst: "Sort into buckets:", t3_h1: "Programs vs. parts.", t3_h2: "What can you touch?", t3_q: "What is software?", t3_qa: "Web browser", t3_qb: "Printer", t3_qc: "Case", t3_qd: "Power cable",
    t3_bl1: "Hardware", t3_bl2: "Software", t3_i1: "Mouse", t3_i2: "Windows", t3_i3: "Monitor", t3_i4: "Paint",
    t4_title: "Operating System (OS)", t4_text: "The OS manages the hardware and other programs.", t4_inst: "Put the words in order:", t4_h1: "Windows is an...", t4_h2: "It controls everything.", t4_q: "Which is an operating system?", t4_qa: "Android", t4_qb: "Google", t4_qc: "YouTube", t4_qd: "Word",
    t4_w1: "Windows", t4_w2: "is", t4_w3: "a", t4_w4: "well-known", t4_w5: "operating", t4_w6: "system.", t4_w7: "",
    t5_title: "File Management", t5_text: "Files are stored in folders to keep things organized.", t5_inst: "Highlight the correct word:", t5_h1: "Where to save?", t5_h2: "Folders keep order.", t5_q: "Where are files usually located?", t5_qa: "In folders", t5_qb: "In the trash", t5_qc: "In the mouse", t5_qd: "In the printer",
    t5_tk1: "Folders", t5_tk2: "help", t5_tk3: "us", t5_tk4: "find", t5_tk5: "files", t5_tk6: "quickly.",
    t6_title: "Peripherals", t6_text: "Devices that you connect to the computer.", t6_inst: "Match the pairs:", t6_h1: "Connect them!", t6_h2: "Outside the PC.", t6_q: "What is a peripheral device?", t6_qa: "Printer", t6_qb: "Mainboard", t6_qc: "Processor", t6_qd: "Power supply",
    t6_l1: "Printing", t6_r1: "Printer", t6_l2: "Control", t6_r2: "Mouse", t6_l3: "Listening", t6_r3: "Headset",
    t7_title: "Input Devices", t7_text: "We send information INTO the computer with these.", t7_inst: "Fill in the blank:", t7_h1: "Into the PC!", t7_h2: "Typing or clicking.", t7_q: "What is an input device?", t7_qa: "Microphone", t7_qb: "Monitor", t7_qc: "Speakers", t7_qd: "Printer",
    t7_sent: "We make an ___ with the mouse.", t7_qa2: "input", t7_qb2: "output", t7_qc2: "break", t7_qd2: "soup",
    t8_title: "Output Devices", t8_text: "The computer shows us results with these.", t8_inst: "Sort into buckets:", t8_h1: "What comes out?", t8_h2: "Image or sound.", t8_q: "What is an output device?", t8_qa: "Monitor", t8_qb: "Keyboard", t8_qc: "Scanner", t8_qd: "Webcam",
    t8_bl1: "Input", t8_bl2: "Output", t8_i1: "Keyboard", t8_i2: "Monitor", t8_i3: "Mouse", t8_i4: "Printer",
    t9_title: "Storage Media", t9_text: "Data is permanently saved here.", t9_inst: "Put the words in order:", t9_h1: "USB sticks are...", t9_h2: "Saving is important.", t9_q: "What stores the most?", t9_qa: "Hard drive (HDD)", t9_qb: "CD", t9_qc: "Floppy disk", t9_qd: "RAM",
    t9_w1: "An", t9_w2: "SSD", t9_w3: "saves", t9_w4: "data", t9_w5: "very", t9_w6: "fast.", t9_w7: "",
    t10_title: "Monitor & Display", t10_text: "The screen shows us images made of many tiny pixels.", t10_inst: "Highlight the correct word:", t10_h1: "Small dots.", t10_h2: "Image points.", t10_q: "What are the image points called?", t10_qa: "Pixels", t10_qb: "Atoms", t10_qc: "Grains", t10_qd: "Spots",
    t10_tk1: "Many", t10_tk2: "pixels", t10_tk3: "form", t10_tk4: "a", t10_tk5: "sharp", t10_tk6: "image.",
    t11_title: "Keyboard & Typing", t11_text: "We write texts with the keyboard.", t11_inst: "Match the pairs:", t11_h1: "Which key?", t11_h2: "Capitalize or delete.", t11_q: "How to make a line break?", t11_qa: "Enter key", t11_qb: "Space bar", t11_qc: "Shift key", t11_qd: "Esc key",
    t11_l1: "Delete", t11_r1: "Backspace", t11_l2: "Capital", t11_r2: "Shift", t11_l3: "Space", t11_r3: "Space bar",
    t12_title: "Mouse & Control", t12_text: "The mouse controls the pointer on the screen.", t12_inst: "Fill in the blank:", t12_h1: "Click!", t12_h2: "Right or left.", t12_q: "What does the scroll wheel do?", t12_qa: "Scrolling", t12_qb: "Deleting", t12_qc: "Switch off", t12_qd: "Typing",
    t12_sent: "A double-click ___ a program.", t12_qa2: "opens", t12_qb2: "deletes", t12_qc2: "ends", t12_qd2: "paints",
    t13_title: "Digital Graphics", t13_text: "Images can be pixel or vector graphics.", t13_inst: "Sort into buckets:", t13_h1: "Dots or lines?", t13_h2: "Photos are pixels.", t13_q: "What is a photo usually?", t13_qa: "Pixel graphic", t13_qb: "Vector graphic", t13_qc: "Text file", t13_qd: "Hardware",
    t13_bl1: "Pixel", t13_bl2: "Vector", t13_i1: "Photo", t13_i2: "Logo", t13_i3: "Screenshot", t13_i4: "Icon",
    t14_title: "Text Processing", t14_text: "Programs for writing letters and essays.", t14_inst: "Put the words in order:", t14_h1: "Word is for...", t14_h2: "Writing is fun.", t14_q: "Which program is for text?", t14_qa: "Word", t14_qb: "Paint", t14_qc: "Excel", t14_qd: "Chrome",
    t14_w1: "We", t14_w2: "write", t14_w3: "a", t14_w4: "text", t14_w5: "on", t14_w6: "the", t14_w7: "computer.",
    t15_title: "Formatting", t15_text: "Making the text look better (bold, italic, color).", t15_inst: "Highlight the correct word:", t15_h1: "How does it look?", t15_h2: "Highlighting.", t15_q: "What does 'Bold' mean?", t15_qa: "Thick text", t15_qb: "Slanted font", t15_qc: "Large letters", t15_qd: "Underlined",
    t15_tk1: "Bold", t15_tk2: "and", t15_tk3: "Italic", t15_tk4: "are", t15_tk5: "types", t15_tk6: "of", t15_tk7: "formatting."
  },
  hu: {
    explorer_title: "Informatika Felfedező 1",
    t1_title: "Adatok világa", t1_text: "Az adatok olyan információk, amelyeket gyűjtünk és feldolgozunk.", t1_inst: "Párosítsd össze:", t1_h1: "Gondolj példákra!", t1_h2: "Mi tartozik össze?", t1_q: "Mi az információ?", t1_qa: "Adatokból származó tudás", t1_qb: "Csak egy szám", t1_qc: "Egy kábel", t1_qd: "A monitor",
    t1_l1: "Szám", t1_r1: "7", t1_l2: "Szöveg", t1_r2: "Szia", t1_l3: "Kép", t1_r3: "Fotó",
    t2_title: "Hardver alapok", t2_text: "A hardver a számítógép összes megfogható része.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Megfogható vagy nem?", t2_h2: "A hardver fizikai.", t2_q: "Mi a hardver?", t2_qa: "Egér", t2_qb: "Windows", t2_qc: "Egy játék", t2_qd: "Internet",
    t2_sent: "A billentyűzet a ___ része.", t2_qa2: "hardver", t2_qb2: "szoftver", t2_qc2: "levegő", t2_qd2: "adat",
    t3_title: "Szoftver", t3_text: "A szoftverek a hardveren futó programok és alkalmazások.", t3_inst: "Válogasd szét:", t3_h1: "Programok vs. alkatrészek.", t3_h2: "Mit tudsz megfogni?", t3_q: "Mi a szoftver?", t3_qa: "Böngésző", t3_qb: "Nyomtató", t3_qc: "Ház", t3_qd: "Tápkábel",
    t3_bl1: "Hardver", t3_bl2: "Szoftver", t3_i1: "Egér", t3_i2: "Windows", t3_i3: "Monitor", t3_i4: "Paint",
    t4_title: "Operációs rendszer (OS)", t4_text: "Az OS kezeli a hardvert és a többi programot.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "A Windows egy...", t4_h2: "Ez irányít mindent.", t4_q: "Melyik operációs rendszer?", t4_qa: "Android", t4_qb: "Google", t4_qc: "YouTube", t4_qd: "Word",
    t4_w1: "A Windows", t4_w2: "egy", t4_w3: "ismert", t4_w4: "operációs", t4_w5: "rendszer", t4_w6: "számítógépekhez.", t4_w7: "",
    t5_title: "Fájlkezelés", t5_text: "A fájlokat mappákban tároljuk a rend kedvéért.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Hova mentsünk?", t5_h2: "A mappák rendet tartanak.", t5_q: "Hol vannak általában a fájlok?", t5_qa: "Mappákban", t5_qb: "A kukában", t5_qc: "Az egérben", t5_qd: "A nyomtatóban",
    t5_tk1: "A mappák", t5_tk2: "segítenek", t5_tk3: "gyorsan", t5_tk4: "megtalálni", t5_tk5: "a", t5_tk6: "fájlokat.",
    t6_title: "Perifériák", t6_text: "Eszközök, amiket a számítógéphez csatlakoztatunk.", t6_inst: "Párosítsd össze:", t6_h1: "Csatlakoztasd!", t6_h2: "A gépen kívül.", t6_q: "Mi a periféria?", t6_qa: "Nyomtató", t6_qb: "Alaplap", t6_qc: "Processzor", t6_qd: "Tápegység",
    t6_l1: "Nyomtatás", t6_r1: "Nyomtató", t6_l2: "Vezérlés", t6_r2: "Egér", t6_l3: "Hallgatás", t6_r3: "Fejhallgató",
    t7_title: "Beviteli eszközök", t7_text: "Ezekkel küldünk információt a számítógépbe.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Be a gépbe!", t7_h2: "Gépelés vagy kattintás.", t7_q: "Mi a beviteli eszköz?", t7_qa: "Mikrofon", t7_qb: "Monitor", t7_qc: "Hangszóró", t7_qd: "Nyomtató",
    t7_sent: "Az egérrel ___ végzünk.", t7_qa2: "bevitelt", t7_qb2: "kivitelt", t7_qc2: "szünetet", t7_qd2: "levest",
    t8_title: "Kiviteli eszközök", t8_text: "Ezekkel mutatja meg a gép az eredményeket.", t8_inst: "Válogasd szét:", t8_h1: "Mi jön ki?", t8_h2: "Kép vagy hang.", t8_q: "Mi a kiviteli eszköz?", t8_qa: "Monitor", t8_qb: "Billentyűzet", t8_qc: "Scanner", t8_qd: "Webkamera",
    t8_bl1: "Bevitel", t8_bl2: "Kivitel", t8_i1: "Billentyűzet", t8_i2: "Monitor", t8_i3: "Egér", t8_i4: "Nyomtató",
    t9_title: "Adathordozók", t9_text: "Itt tároljuk tartósan az adatokat.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Az USB kulcs...", t9_h2: "A mentés fontos.", t9_q: "Mi tárolja a legtöbbet?", t9_qa: "Merevlemez (HDD)", t9_qb: "CD", t9_qc: "Floppy", t9_qd: "RAM",
    t9_w1: "Az", t9_w2: "SSD", t9_w3: "nagyon", t9_w4: "gyorsan", t9_w5: "menti", t9_w6: "el", t9_w7: "az adatokat.",
    t10_title: "Monitor & Kijelző", t10_text: "A képernyő sok apró pixelből álló képet mutat.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Apró pontok.", t10_h2: "Képpontok.", t10_q: "Hogyan hívják a képpontokat?", t10_qa: "Pixel", t10_qb: "Atom", t10_qc: "Szemcse", t10_qd: "Folt",
    t10_tk1: "Sok", t10_tk2: "pixel", t10_tk3: "ad", t10_tk4: "ki", t10_tk5: "egy", t10_tk6: "éles", t10_tk7: "képet.",
    t11_title: "Billentyűzet", t11_text: "A billentyűzettel szövegeket írunk.", t11_inst: "Párosítsd össze:", t11_h1: "Melyik gomb?", t11_h2: "Nagybetű vagy törlés.", t11_q: "Hogyan kezdünk új sort?", t11_qa: "Enter gomb", t11_qb: "Szóköz", t11_qc: "Shift gomb", t11_qd: "Esc gomb",
    t11_l1: "Törlés", t11_r1: "Backspace", t11_l2: "Nagybetű", t11_r2: "Shift", t11_l3: "Szóköz", t11_r3: "Space",
    t12_title: "Egér & Vezérlés", t12_text: "Az egér irányítja a mutatót a képernyőn.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Katt!", t12_h2: "Jobb vagy bal.", t12_q: "Mit csinál a görgetőkerék?", t12_qa: "Görgetés", t12_qb: "Törlés", t12_qc: "Kikapcsolás", t12_qd: "Gépelés",
    t12_sent: "A dupla kattintás ___ egy programot.", t12_qa2: "megnyit", t12_qb2: "töröl", t12_qc2: "bezár", t12_qd2: "fest",
    t13_title: "Digitális grafika", t13_text: "A képek lehetnek pixel- vagy vektorgrafikusak.", t13_inst: "Válogasd szét:", t13_h1: "Pontok vagy vonalak?", t13_h2: "A fotók pixelek.", t13_q: "Mi általában egy fotó?", t13_qa: "Pixelgrafika", t13_qb: "Vektorgrafika", t13_qc: "Szövegfájl", t13_qd: "Hardver",
    t13_bl1: "Pixel", t13_bl2: "Vektor", t13_i1: "Fotó", t13_i2: "Logó", t13_i3: "Képernyőkép", t13_i4: "Ikon",
    t14_title: "Szövegszerkesztés", t14_text: "Levelek és fogalmazások írására szolgáló programok.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "A Word való...", t14_h2: "Az írás élmény.", t14_q: "Melyik program szövegre való?", t14_qa: "Word", t14_qb: "Paint", t14_qc: "Excel", t14_qd: "Chrome",
    t14_w1: "Szöveget", t14_w2: "írunk", t14_w3: "a", t14_w4: "számítógépen.", t14_w5: "", t14_w6: "", t14_w7: "",
    t15_title: "Formázás", t15_text: "A szöveg szebbé tétele (félkövér, dőlt, szín).", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Hogy néz ki?", t15_h2: "Kiemelés.", t15_q: "Mit jelent a 'Félkövér'?", t15_qa: "Vastag betűk", t15_qb: "Dőlt betűk", t15_qc: "Nagy betűk", t15_qd: "Aláhúzott",
    t15_tk1: "A félkövér", t15_tk2: "és", t15_tk3: "a dőlt", t15_tk4: "a formázás", t15_tk5: "típusai."
  },
  ro: {
    explorer_title: "Explorator Informatică 1",
    t1_title: "Lumea Datelor", t1_text: "Datele sunt informații pe care le colectăm și le procesăm.", t1_inst: "Potrivește perechile:", t1_h1: "Gândește-te la exemple!", t1_h2: "Ce se potrivește?", t1_q: "Ce este o informație?", t1_qa: "Cunoștințe din date", t1_qb: "Doar un număr", t1_qc: "Un cablu", t1_qd: "Monitorul",
    t1_l1: "Număr", t1_r1: "7", t1_l2: "Text", t1_r2: "Salut", t1_l3: "Imagine", t1_r3: "Foto",
    t2_title: "Bazele Hardware", t2_text: "Hardware sunt toate părțile unui calculator pe care le poți atinge.", t2_inst: "Completează spațiul liber:", t2_h1: "Atingere sau nu?", t2_h2: "Hardware-ul este fizic.", t2_q: "Ce este hardware-ul?", t2_qa: "Mouse", t2_qb: "Windows", t2_qc: "Un joc", t2_qd: "Internet",
    t2_sent: "Tastatura este o parte din ___.", t2_qa2: "hardware", t2_qb2: "software", t2_qc2: "aer", t2_qd2: "date",
    t3_title: "Software", t3_text: "Software-ul sunt programele și aplicațiile care rulează pe hardware.", t3_inst: "Sortează în găleți:", t3_h1: "Programe vs. piese.", t3_h2: "Ce poți atinge?", t3_q: "Ce este software-ul?", t3_qa: "Browser web", t3_qb: "Imprimantă", t3_qc: "Carcasă", t3_qd: "Cablu curent",
    t3_bl1: "Hardware", t3_bl2: "Software", t3_i1: "Mouse", t3_i2: "Windows", t3_i3: "Monitor", t3_i4: "Paint",
    t4_title: "Sistem de operare (OS)", t4_text: "OS-ul gestionează hardware-ul și alte programe.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Windows este un...", t4_h2: "Controlează totul.", t4_q: "Care este un sistem de operare?", t4_qa: "Android", t4_qb: "Google", t4_qc: "YouTube", t4_qd: "Word",
    t4_w1: "Windows", t4_w2: "este", t4_w3: "un", t4_w4: "sistem", t4_w5: "de", t4_w6: "operare", t4_w7: "cunoscut.",
    t5_title: "Gestionarea fișierelor", t5_text: "Fișierele sunt stocate în dosare pentru a menține ordinea.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Unde salvăm?", t5_h2: "Dosarele mențin ordinea.", t5_q: "Unde se află de obicei fișierele?", t5_qa: "În dosare", t5_qb: "În coș", t5_qc: "În mouse", t5_qd: "În imprimantă",
    t5_tk1: "Dosarele", t5_tk2: "ne", t5_tk3: "ajută", t5_tk4: "să", t5_tk5: "găsim", t5_tk6: "fișierele", t5_tk7: "rapid.",
    t6_title: "Periferice", t6_text: "Dispozitive pe care le conectezi la calculator.", t6_inst: "Potrivește perechile:", t6_h1: "Conectează-le!", t6_h2: "În afara PC-ului.", t6_q: "Ce este un periferic?", t6_qa: "Imprimantă", t6_qb: "Placă de bază", t6_qc: "Procesor", t6_qd: "Sursă",
    t6_l1: "Tipărire", t6_r1: "Imprimantă", t6_l2: "Control", t6_r2: "Mouse", t6_l3: "Ascultare", t6_r3: "Căști",
    t7_title: "Dispozitive de intrare", t7_text: "Trimitem informații ÎN calculator cu acestea.", t7_inst: "Completează spațiul liber:", t7_h1: "În PC!", t7_h2: "Tastare sau clic.", t7_q: "Ce este un dispozitiv de intrare?", t7_qa: "Microfon", t7_qb: "Monitor", t7_qc: "Boxe", t7_qd: "Imprimantă",
    t7_sent: "Cu mouse-ul facem o ___.", t7_qa2: "intrare", t7_qb2: "ieșire", t7_qc2: "pauză", t7_qd2: "supă",
    t8_title: "Dispozitive de ieșire", t8_text: "Calculatorul ne arată rezultatele cu acestea.", t8_inst: "Sortează în găleți:", t8_h1: "Ce iese?", t8_h2: "Imagine sau sunet.", t8_q: "Ce este un dispozitiv de ieșire?", t8_qa: "Monitor", t8_qb: "Tastatură", t8_qc: "Scanner", t8_qd: "Webcam",
    t8_bl1: "Intrare", t8_bl2: "Ieșire", t8_i1: "Tastatură", t8_i2: "Monitor", t8_i3: "Mouse", t8_i4: "Imprimantă",
    t9_title: "Medii de stocare", t9_text: "Datele sunt salvate permanent aici.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Stick-urile USB sunt...", t9_h2: "Salvarea e importantă.", t9_q: "Ce stochează cel mai mult?", t9_qa: "Hard disk (HDD)", t9_qb: "CD", t9_qc: "Dischetă", t9_qd: "RAM",
    t9_w1: "Un", t9_w2: "SSD", t9_w3: "salvează", t9_w4: "datele", t9_w5: "foarte", t9_w6: "rapid.", t9_w7: "",
    t10_title: "Monitor & Display", t10_text: "Ecranul ne arată imagini formate din mulți pixeli mici.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Puncte mici.", t10_h2: "Puncte de imagine.", t10_q: "Cum se numesc punctele de imagine?", t10_qa: "Pixeli", t10_qb: "Atomi", t10_qc: "Grăunțe", t10_qd: "Pete",
    t10_tk1: "Mulți", t10_tk2: "pixeli", t10_tk3: "formează", t10_tk4: "o", t10_tk5: "imagine", t10_tk6: "clară.",
    t11_title: "Tastatură & Tastare", t11_text: "Scriem texte cu tastatura.", t11_inst: "Potrivește perechile:", t11_h1: "Ce tastă?", t11_h2: "Majuscule sau ștergere.", t11_q: "Cum faci un rând nou?", t11_qa: "Tasta Enter", t11_qb: "Bara de spațiu", t11_qc: "Tasta Shift", t11_qd: "Tasta Esc",
    t11_l1: "Ștergere", t11_r1: "Backspace", t11_l2: "Mare", t11_r2: "Shift", t11_l3: "Spațiu", t11_r3: "Space",
    t12_title: "Mouse & Control", t12_text: "Mouse-ul controlează indicatorul de pe ecran.", t12_inst: "Completează spațiul liber:", t12_h1: "Clic!", t12_h2: "Dreapta sau stânga.", t12_q: "Ce face rotița de scroll?", t12_qa: "Defilare", t12_qb: "Ștergere", t12_qc: "Oprire", t12_qd: "Tastare",
    t12_sent: "Un dublu clic ___ un program.", t12_qa2: "deschide", t12_qb2: "șterge", t12_qc2: "închide", t12_qd2: "pictează",
    t13_title: "Grafică digitală", t13_text: "Imaginile pot fi pixel sau vector.", t13_inst: "Sortează în găleți:", t13_h1: "Puncte sau linii?", t13_h2: "Pozele sunt pixeli.", t13_q: "Ce este de obicei o poză?", t13_qa: "Grafică pixel", t13_qb: "Grafică vector", t13_qc: "Fișier text", t13_qd: "Hardware",
    t13_bl1: "Pixel", t13_bl2: "Vector", t13_i1: "Foto", t13_i2: "Logo", t13_i3: "Screenshot", t13_i4: "Icon",
    t14_title: "Procesare text", t14_text: "Programe pentru scrierea scrisorilor și eseurilor.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Word este pentru...", t14_h2: "Scrisul e distractiv.", t14_q: "Care program este pentru text?", t14_qa: "Word", t14_qb: "Paint", t14_qc: "Excel", t14_qd: "Chrome",
    t14_w1: "Noi", t14_w2: "scriem", t14_w3: "un", t14_w4: "text", t14_w5: "la", t14_w6: "calculator.", t14_w7: "",
    t15_title: "Formatare", t15_text: "Înfrumusețarea textului (bold, italic, culoare).", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Cum arată?", t15_h2: "Evidențiere.", t15_q: "Ce înseamnă 'Bold'?", t15_qa: "Text îngroșat", t15_qb: "Scris înclinat", t15_qc: "Litere mari", t15_qd: "Subliniat",
    t15_tk1: "Bold", t15_tk2: "și", t15_tk3: "Italic", t15_tk4: "sunt", t15_tk5: "tipuri", t15_tk6: "de", t15_tk7: "formatare."
  }
};

export const INFO_K5_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📊", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "💻", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"💿",label:"Software"},{emoji:"⌨️",label:"Hardware"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📁", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔌", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎤", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🖨️", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "💾", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📺", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [1] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⌨️", color: "#212121" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🖱️", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🖼️",label:"Pixel"},{emoji:"📐",label:"Vector"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📝", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 4) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"B",bg:"#fff",color:"#000",emoji:"🅰️"},{text:"I",bg:"#fff",color:"#000",emoji:"斜"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [0,2] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

