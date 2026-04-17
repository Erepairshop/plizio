import type { PoolTopicDef } from "./types";

export const INFO_K6_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 2",
    t16_title: "Installation von Software",
    t16_text: "Software muss installiert werden, damit sie auf dem Computer läuft. Man sollte Programme nur aus vertrauenswürdigen Quellen laden.",
    t16_h1: "Setup ausführen", t16_h2: "Vertrauenswürdige Quellen",
    t16_inst: "Ordne den Installationsprozess!",
    t16_q: "Was sollte man vor einer Installation prüfen?",
    t16_qa: "Die Quelle", t16_qb: "Die Gehäusefarbe", t16_qc: "Das Wetter", t16_qd: "Den Strompreis",
    
    t17_title: "Malware und Viren",
    t17_text: "Malware sind schädliche Programme wie Viren, Trojaner oder Spyware. Ein aktueller Virenscanner schützt den Computer.",
    t17_h1: "Viren, Trojaner, Würmer", t17_h2: "Virenscanner nutzen",
    t17_inst: "Was ist gefährlich?",
    t17_q: "Wie nennt man Programme, die dem Computer schaden?",
    t17_qa: "Malware", t17_qb: "Hardware", t17_qc: "Firmware", t17_qd: "Shareware",
    
    t18_title: "Die Firewall",
    t18_text: "Eine Firewall überwacht den Datenverkehr und blockiert unerlaubte Zugriffe aus dem Internet auf deinen Computer.",
    t18_h1: "Schutzschild", t18_h2: "Datenverkehr filtern",
    t18_inst: "Lass nur Erlaubtes durch!",
    t18_q: "Was macht eine Firewall?",
    t18_qa: "Datenverkehr überwachen", t18_qb: "Computer kühlen", t18_qc: "Bilder drucken", t18_qd: "Dateien löschen",
    
    t19_title: "Datensicherung (Backup)",
    t19_text: "Ein Backup ist eine Kopie deiner Daten auf einem externen Speicher. So gehen wichtige Dateien bei einem Defekt nicht verloren.",
    t19_h1: "Regelmäßige Kopien", t19_h2: "Externe Festplatten/Cloud",
    t19_inst: "Sichere die Daten!",
    t19_q: "Warum macht man ein Backup?",
    t19_qa: "Gegen Datenverlust", t19_qb: "Damit der PC schneller wird", t19_qc: "Um Strom zu sparen", t19_qd: "Zum Spaß",
    
    t20_title: "Datenschutz (GDPR/DSGVO)",
    t20_text: "Die DSGVO schützt deine persönlichen Daten. Firmen dürfen Informationen über dich nur mit Erlaubnis speichern und nutzen.",
    t20_h1: "Persönliche Daten schützen", t20_h2: "Recht auf Auskunft",
    t20_inst: "Was sind private Daten?",
    t20_q: "Was gehört zu den persönlichen Daten?",
    t20_qa: "Wohnadresse", t20_qb: "Lieblingsfarbe von Autos", t20_qc: "Wetterbericht", t20_qd: "CPU-Temperatur",
    
    t21_title: "Software-Urheberrecht",
    t21_text: "Software ist urheberrechtlich geschützt. Man braucht eine Lizenz, um sie legal zu nutzen. Raubkopien sind verboten.",
    t21_h1: "Lizenzen (EULA)", t21_h2: "Open Source vs. Proprietär",
    t21_inst: "Lizenz-Typen zuordnen!",
    t21_q: "Darf man jede Software einfach kopieren und verteilen?",
    t21_qa: "Nein, nur mit Erlaubnis", t21_qb: "Ja, immer", t21_qc: "Nur am Wochenende", t21_qd: "Nur wenn sie teuer ist",
    
    t22_title: "Fortgeschrittenes Scratch",
    t22_text: "In Scratch kann man komplexe Spiele erstellen, indem man Nachrichten sendet und eigene Blöcke definiert.",
    t22_h1: "Nachrichten senden", t22_h2: "Eigene Blöcke",
    t22_inst: "Baue das Skript!",
    t22_q: "Wofür nutzt man 'Sende Nachricht' in Scratch?",
    t22_qa: "Kommunikation zwischen Figuren", t22_qb: "E-Mails schreiben", t22_qc: "Computer ausschalten", t22_qd: "Hintergrund löschen",
    
    t23_title: "Variablen und Typen",
    t23_text: "Variablen sind Platzhalter für Werte wie Zahlen oder Text. In Programmen speichern sie z.B. den Punktestand.",
    t23_h1: "Werte speichern", t23_h2: "Zahlen und Strings",
    t23_inst: "Setze die Variable!",
    t23_q: "Was speichert eine Variable in einem Spiel oft?",
    t23_qa: "Punktestand", t23_qb: "Monitorgröße", t23_qc: "Tastaturlayout", t23_qd: "Gehäuseform",
    
    t24_title: "Bedingungen (If-Then)",
    t24_text: "Bedingungen lassen das Programm Entscheidungen treffen: 'WENN die Taste gedrückt ist, DANN springe'.",
    t24_h1: "Entscheidungen treffen", t24_h2: "Wahr oder Falsch",
    t24_inst: "WENN ... DANN ...",
    t24_q: "Was passiert bei einer Bedingung?",
    t24_qa: "Programm verzweigt sich", t24_qb: "Programm wird gelöscht", t24_qc: "PC wird heiß", t24_qd: "Farbe ändert sich immer",
    
    t25_title: "Schleifen (Loops)",
    t25_text: "Schleifen wiederholen Befehle mehrmals oder solange eine Bedingung erfüllt ist, um Schreibarbeit zu sparen.",
    t25_h1: "Wiederholungen", t25_h2: "Endlosschleifen vermeiden",
    t25_inst: "Wie oft wiederholen?",
    t25_q: "Warum nutzt man Schleifen?",
    t25_qa: "Um Code zu wiederholen", t25_qb: "Um Musik zu hören", t25_qc: "Um den PC zu stoppen", t25_qd: "Um Bilder zu malen",
    
    t26_title: "Funktionen",
    t26_text: "Funktionen fassen Befehle zusammen, die man öfter braucht. Man gibt ihnen einen Namen und kann sie überall aufrufen.",
    t26_h1: "Wiederverwendbarkeit", t26_h2: "Parameter nutzen",
    t26_inst: "Definiere die Funktion!",
    t26_q: "Was ist der Vorteil von Funktionen?",
    t26_qa: "Struktur und Ordnung", t26_qb: "Schnelleres Internet", t26_qc: "Mehr Speicherplatz", t26_qd: "Bessere Grafik",
    
    t27_title: "Debugging (Fehlersuche)",
    t27_text: "Fehler in Programmen nennt man 'Bugs'. Debugging ist der Prozess, diese Fehler zu finden und zu beheben.",
    t27_h1: "Fehler finden", t27_h2: "Logisches Testen",
    t27_inst: "Finde den Bug!",
    t27_q: "Wie nennt man einen Fehler im Programmcode?",
    t27_qa: "Bug", t27_qb: "Fly", t27_qc: "Spider", t27_qd: "Ant",
    
    t28_title: "Digitale Bürgerschaft",
    t28_text: "Als digitaler Bürger verhält man sich im Netz höflich (Netiquette) und achtet auf Sicherheit und Privatsphäre.",
    t28_h1: "Netiquette", t28_h2: "Sicheres Passwort",
    t28_inst: "Was ist höflich?",
    t28_q: "Wie nennt man Verhaltensregeln im Internet?",
    t28_qa: "Netiquette", t28_qb: "Web-Gesetz", t28_qc: "Online-Plan", t28_qd: "Internet-Tabelle",
    
    t29_title: "Digitale Kreativität",
    t29_text: "Computer sind Werkzeuge für Kreativität: Man kann eigene Musik komponieren, digitale Kunst erschaffen oder Videos schneiden.",
    t29_h1: "Eigene Inhalte erstellen", t29_h2: "Kreative Tools",
    t29_inst: "Erstelle etwas Neues!",
    t29_q: "Was kann man am PC kreativ gestalten?",
    t29_qa: "Digitale Kunst", t29_qb: "Staub wischen", t29_qc: "Kabel sortieren", t29_qd: "Pixel zählen",
    
    t30_title: "Projektplanung",
    t30_text: "Bevor man ein Programm schreibt, plant man die Schritte: Was soll passieren? Wie sieht das Design aus?",
    t30_h1: "Ablauf planen", t30_h2: "Ziele definieren",
    t30_inst: "Plane dein Projekt!",
    t30_q: "Was ist der erste Schritt bei einem Projekt?",
    t30_qa: "Planung", t30_qb: "Löschen", t30_qc: "Drucken", t30_qd: "Verkaufen",
  },
  en: {
    explorer_title: "Informatics Explorer 2",
    t16_title: "Software Installation",
    t16_text: "Software must be installed to run on the computer. You should only download programs from trusted sources.",
    t16_h1: "Run setup", t16_h2: "Trusted sources",
    t16_inst: "Order the installation process!",
    t16_q: "What should you check before installing?",
    t16_qa: "The source", t16_qb: "Case color", t16_qc: "The weather", t16_qd: "Electricity price",
    
    t17_title: "Malware and Viruses",
    t17_text: "Malware are harmful programs like viruses, Trojans, or spyware. An up-to-date virus scanner protects the computer.",
    t17_h1: "Viruses, Trojans, Worms", t17_h2: "Use virus scanner",
    t17_inst: "What is dangerous?",
    t17_q: "What are programs that harm the computer called?",
    t17_qa: "Malware", t17_qb: "Hardware", t17_qc: "Firmware", t17_qd: "Shareware",
    
    t18_title: "The Firewall",
    t18_text: "A firewall monitors data traffic and blocks unauthorized access from the internet to your computer.",
    t18_h1: "Protective shield", t18_h2: "Filter data traffic",
    t18_inst: "Only let allowed traffic through!",
    t18_q: "What does a firewall do?",
    t18_qa: "Monitor data traffic", t18_qb: "Cool computer", t18_qc: "Print images", t18_qd: "Delete files",
    
    t19_title: "Data Backup",
    t19_text: "A backup is a copy of your data on external storage. This prevents important files from being lost if there's a defect.",
    t19_h1: "Regular copies", t19_h2: "External drives/Cloud",
    t19_inst: "Backup the data!",
    t19_q: "Why do we make backups?",
    t19_qa: "Against data loss", t19_qb: "To make PC faster", t19_qc: "To save power", t19_qd: "For fun",
    
    t20_title: "Data Protection (GDPR)",
    t20_text: "The GDPR protects your personal data. Companies can only store and use information about you with permission.",
    t20_h1: "Protect personal data", t20_h2: "Right to information",
    t20_inst: "What is private data?",
    t20_q: "What belongs to personal data?",
    t20_qa: "Home address", t20_qb: "Favorite car color", t20_qc: "Weather report", t20_qd: "CPU temperature",
    
    t21_title: "Software Copyright",
    t21_text: "Software is protected by copyright. You need a license to use it legally. Pirated copies are prohibited.",
    t21_h1: "Licenses (EULA)", t21_h2: "Open Source vs. Proprietary",
    t21_inst: "Match license types!",
    t21_q: "Can you just copy and distribute any software?",
    t21_qa: "No, only with permission", t21_qb: "Yes, always", t21_qc: "Only on weekends", t21_qd: "Only if it's expensive",
    
    t22_title: "Advanced Scratch",
    t22_text: "In Scratch, you can create complex games by sending messages and defining your own blocks.",
    t22_h1: "Send messages", t22_h2: "Custom blocks",
    t22_inst: "Build the script!",
    t22_q: "What is 'broadcast message' used for in Scratch?",
    t22_qa: "Communication between sprites", t22_qb: "Writing emails", t22_qc: "Shutting down computer", t22_qd: "Deleting background",
    
    t23_title: "Variables and Types",
    t23_text: "Variables are placeholders for values like numbers or text. In programs, they store things like the score.",
    t23_h1: "Store values", t23_h2: "Numbers and strings",
    t23_inst: "Set the variable!",
    t23_q: "What does a variable often store in a game?",
    t23_qa: "Score", t23_qb: "Monitor size", t23_qc: "Keyboard layout", t23_qd: "Case shape",
    
    t24_title: "Conditionals (If-Then)",
    t24_text: "Conditions let the program make decisions: 'IF the key is pressed, THEN jump'.",
    t24_h1: "Make decisions", t24_h2: "True or False",
    t24_inst: "IF ... THEN ...",
    t24_q: "What happens in a conditional?",
    t24_qa: "Program branches", t24_qb: "Program is deleted", t24_qc: "PC gets hot", t24_qd: "Color always changes",
    
    t25_title: "Loops",
    t25_text: "Loops repeat commands multiple times or as long as a condition is met to save typing work.",
    t25_h1: "Repetitions", t25_h2: "Avoid infinite loops",
    t25_inst: "How many repetitions?",
    t25_q: "Why do we use loops?",
    t25_qa: "To repeat code", t25_qb: "To listen to music", t25_qc: "To stop the PC", t25_qd: "To paint pictures",
    
    t26_title: "Functions",
    t26_text: "Functions group commands that you need often. You give them a name and can call them anywhere.",
    t26_h1: "Reusability", t26_h2: "Use parameters",
    t26_inst: "Define the function!",
    t26_q: "What is the advantage of functions?",
    t26_qa: "Structure and order", t26_qb: "Faster internet", t26_qc: "More storage space", t26_qd: "Better graphics",
    
    t27_title: "Debugging",
    t27_text: "Errors in programs are called 'bugs'. Debugging is the process of finding and fixing these errors.",
    t27_h1: "Find errors", t27_h2: "Logical testing",
    t27_inst: "Find the bug!",
    t27_q: "What is an error in program code called?",
    t27_qa: "Bug", t27_qb: "Fly", t27_qc: "Spider", t27_qd: "Ant",
    
    t28_title: "Digital Citizenship",
    t28_text: "As a digital citizen, you behave politely online (Netiquette) and care about security and privacy.",
    t28_h1: "Netiquette", t28_h2: "Secure password",
    t28_inst: "What is polite?",
    t28_q: "What are behavioral rules on the internet called?",
    t28_qa: "Netiquette", t28_qb: "Web Law", t28_qc: "Online Plan", t28_qd: "Internet Table",
    
    t29_title: "Digital Creativity",
    t29_text: "Computers are tools for creativity: You can compose your own music, create digital art, or edit videos.",
    t29_h1: "Create own content", t29_h2: "Creative tools",
    t29_inst: "Create something new!",
    t29_q: "What can you create creatively on a PC?",
    t29_qa: "Digital art", t29_qb: "Dusting", t29_qc: "Sorting cables", t29_qd: "Counting pixels",
    
    t30_title: "Project Planning",
    t30_text: "Before writing a program, you plan the steps: What should happen? What does the design look like?",
    t30_h1: "Plan flow", t30_h2: "Define goals",
    t30_inst: "Plan your project!",
    t30_q: "What is the first step in a project?",
    t30_qa: "Planning", t30_qb: "Deleting", t30_qc: "Printing", t30_qd: "Selling",
  },
  hu: {
    explorer_title: "Informatika Felfedező 2",
    t16_title: "Szoftver telepítése",
    t16_text: "A szoftvereket telepíteni kell, hogy fussanak a számítógépen. Csak megbízható forrásból töltsünk le programokat.",
    t16_h1: "Setup futtatása", t16_h2: "Megbízható források",
    t16_inst: "Rendezd a telepítési folyamatot!",
    t16_q: "Mit kell ellenőrizni telepítés előtt?",
    t16_qa: "A forrást", t16_qb: "A ház színét", t16_qc: "Az időjárást", t16_qd: "Az áram árát",
    
    t17_title: "Malware és vírusok",
    t17_text: "A malware-ek káros programok, mint a vírusok, trójaiak vagy kémprogramok. Egy friss vírusirtó védi a gépet.",
    t17_h1: "Vírusok, trójaiak, férgek", t17_h2: "Vírusirtó használata",
    t17_inst: "Mi veszélyes?",
    t17_q: "Hogy hívjuk a számítógépet károsító programokat?",
    t17_qa: "Malware", t17_qb: "Hardware", t17_qc: "Firmware", t17_qd: "Shareware",
    
    t18_title: "A tűzfal",
    t18_text: "A tűzfal figyeli az adatforgalmat és blokkolja a jogosulatlan hozzáféréseket az internet felől.",
    t18_h1: "Védőpajzs", t18_h2: "Adatforgalom szűrése",
    t18_inst: "Csak az engedélyezettet engedd át!",
    t18_q: "Mit csinál a tűzfal?",
    t18_qa: "Figyeli az adatforgalmat", t18_qb: "Hűti a gépet", t18_qc: "Képeket nyomtat", t18_qd: "Fájlokat töröl",
    
    t19_title: "Biztonsági mentés (Backup)",
    t19_text: "A biztonsági mentés az adataid másolata egy külső tárolón. Így a fontos fájlok nem vesznek el hiba esetén.",
    t19_h1: "Rendszeres másolatok", t19_h2: "Külső lemezek/Felhő",
    t19_inst: "Mentsd az adatokat!",
    t19_q: "Miért készítünk biztonsági mentést?",
    t19_qa: "Adatvesztés ellen", t19_qb: "Hogy gyorsabb legyen a PC", t19_qc: "Árammegtakarításért", t19_qd: "Szórakozásból",
    
    t20_title: "Adatvédelem (GDPR)",
    t20_text: "A GDPR védi a személyes adataidat. A cégek csak engedéllyel tárolhatnak és használhatnak információkat rólad.",
    t20_h1: "Személyes adatok védelme", t20_h2: "Tájékoztatáshoz való jog",
    t20_inst: "Mi számít magánadatnak?",
    t20_q: "Mi tartozik a személyes adatok közé?",
    t20_qa: "Lakcím", t20_qb: "Autók kedvenc színe", t20_qc: "Időjárásjelentés", t20_qd: "CPU hőmérséklet",
    
    t21_title: "Szoftver szerzői jog",
    t21_text: "A szoftverek szerzői jogi védelem alatt állnak. Licencre van szükség a legális használathoz.",
    t21_h1: "Licencek (EULA)", t21_h2: "Open Source vs. Jogvédett",
    t21_inst: "Párosítsd a licenctípusokat!",
    t21_q: "Szabadon másolhatunk bármilyen szoftvert?",
    t21_qa: "Nem, csak engedéllyel", t21_qb: "Igen, mindig", t21_qc: "Csak hétvégén", t21_qd: "Csak ha drága",
    
    t22_title: "Haladó Scratch",
    t22_text: "Scratch-ben összetett játékokat készíthetünk üzenetek küldésével és saját blokkok létrehozásával.",
    t22_h1: "Üzenetek küldése", t22_h2: "Saját blokkok",
    t22_inst: "Építsd fel a szkriptet!",
    t22_q: "Mire jó az üzenetküldés Scratch-ben?",
    t22_qa: "Szereplők közti kommunikáció", t22_qb: "E-mail írás", t22_qc: "Gép kikapcsolása", t22_qd: "Háttér törlése",
    
    t23_title: "Változók és típusok",
    t23_text: "A változók értékek (számok vagy szöveg) tárolására szolgálnak. Játékokban pl. a pontszámot tárolják.",
    t23_h1: "Értékek tárolása", t23_h2: "Számok és szövegek",
    t23_inst: "Állítsd be a változót!",
    t23_q: "Mit tárol gyakran egy változó egy játékban?",
    t23_qa: "Pontszámot", t23_qb: "Monitor méretét", t23_qc: "Billentyűzetkiosztást", t23_qd: "Ház formáját",
    
    t24_title: "Feltételek (Ha-Akkor)",
    t24_text: "A feltételek lehetővé teszik a döntéshozatalt: 'HA a gomb megnyomva, AKKOR ugorj'.",
    t24_h1: "Döntéshozatal", t24_h2: "Igaz vagy Hamis",
    t24_inst: "HA ... AKKOR ...",
    t24_q: "Mi történik egy feltételnél?",
    t24_qa: "Elágazik a program", t24_qb: "Törlődik a program", t24_qc: "Felforrósodik a gép", t24_qd: "Mindig változik a szín",
    
    t25_title: "Ciklusok (Loops)",
    t25_text: "A ciklusok megismétlik az utasításokat többször vagy amíg egy feltétel teljesül, így spórolnak a munkával.",
    t25_h1: "Ismétlések", t25_h2: "Végtelen ciklus elkerülése",
    t25_inst: "Hányszor ismételjünk?",
    t25_q: "Miért használunk ciklusokat?",
    t25_qa: "Kód ismétléséhez", t25_qb: "Zenehallgatáshoz", t25_qc: "A gép leállításához", t25_qd: "Képek festéséhez",
    
    t26_title: "Függvények",
    t26_text: "A függvények összefogják a gyakran használt utasításokat. Nevet adunk nekik, és bárhonnan meghívhatjuk őket.",
    t26_h1: "Újrafelhasználhatóság", t26_h2: "Paraméterek használata",
    t26_inst: "Definiáld a függvényt!",
    t26_q: "Mi a függvények előnye?",
    t26_qa: "Struktúra és rend", t26_qb: "Gyorsabb internet", t26_qc: "Több tárhely", t26_qd: "Jobb grafika",
    
    t27_title: "Hibakeresés (Debugging)",
    t27_text: "A programokban lévő hibákat 'bug'-nak hívjuk. A debugging a hibák megtalálásának és kijavításának folyamata.",
    t27_h1: "Hibák keresése", t27_h2: "Logikai tesztelés",
    t27_inst: "Találd meg a hibát!",
    t27_q: "Hogy hívjuk a programkódban lévő hibát?",
    t27_qa: "Bug", t27_qb: "Légy", t27_qc: "Pók", t27_qd: "Hangya",
    
    t28_title: "Digitális állampolgárság",
    t28_text: "Digitális állampolgárként udvariasan viselkedünk a hálón (Netikett) és figyelünk a biztonságra.",
    t28_h1: "Netikett", t28_h2: "Biztonságos jelszó",
    t28_inst: "Mi az udvarias?",
    t28_q: "Hogy hívjuk az internetes viselkedési szabályokat?",
    t28_qa: "Netikett", t28_qb: "Web-törvény", t28_qc: "Online terv", t28_qd: "Internet tábla",
    
    t29_title: "Digitális kreativitás",
    t29_text: "A számítógép a kreativitás eszköze: komponálhatunk zenét, készíthetünk digitális művészetet vagy videót vághatunk.",
    t29_h1: "Saját tartalom készítése", t29_h2: "Kreatív eszközök",
    t29_inst: "Alkoss valami újat!",
    t29_q: "Mit alkothatunk kreatívan a gépen?",
    t29_qa: "Digitális művészetet", t29_qb: "Portörlést", t29_qc: "Kábelrendezést", t29_qd: "Pixelszámlálást",
    
    t30_title: "Projekttervezés",
    t30_text: "Programozás előtt megtervezzük a lépéseket: Mi történjen? Hogy nézzen ki a design?",
    t30_h1: "Folyamat tervezése", t30_h2: "Célok kitűzése",
    t30_inst: "Tervezd meg a projekted!",
    t30_q: "Mi az első lépés egy projektnél?",
    t30_qa: "Tervezés", t30_qb: "Törlés", t30_qc: "Nyomtatás", t30_qd: "Eladás",
  },
  ro: {
    explorer_title: "Explorator Informatică 2",
    t16_title: "Instalarea software-ului",
    t16_text: "Software-ul trebuie instalat pentru a rula pe calculator. Programele ar trebui descărcate doar din surse de încredere.",
    t16_h1: "Rularea setup-ului", t16_h2: "Surse de încredere",
    t16_inst: "Ordonează procesul de instalare!",
    t16_q: "Ce ar trebui să verifici înainte de instalare?",
    t16_qa: "Sursa", t16_qb: "Culoarea carcasei", t16_qc: "Vremea", t16_qd: "Prețul curentului",
    
    t17_title: "Malware și viruși",
    t17_text: "Malware-ul reprezintă programe dăunătoare precum viruși, troieni sau spyware. Un antivirus actualizat protejează calculatorul.",
    t17_h1: "Viruși, Troieni, Viermi", t17_h2: "Utilizarea antivirusului",
    t17_inst: "Ce este periculos?",
    t17_q: "Cum se numesc programele care dăunează calculatorului?",
    t17_qa: "Malware", t17_qb: "Hardware", t17_qc: "Firmware", t17_qd: "Shareware",
    
    t18_title: "Firewall-ul",
    t18_text: "Un firewall monitorizează traficul de date și blochează accesul neautorizat de pe internet către calculatorul tău.",
    t18_h1: "Scut de protecție", t18_h2: "Filtrarea traficului",
    t18_inst: "Permite doar traficul autorizat!",
    t18_q: "Ce face un firewall?",
    t18_qa: "Monitorizează traficul", t18_qb: "Răcește calculatorul", t18_qc: "Imprimă imagini", t18_qd: "Șterge fișiere",
    
    t19_title: "Copia de rezervă (Backup)",
    t19_text: "Un backup este o copie a datelor tale pe un suport extern. Astfel, fișierele importante nu se pierd în caz de defect.",
    t19_h1: "Copii regulate", t19_h2: "Discuri externe/Cloud",
    t19_inst: "Salvează datele!",
    t19_q: "De ce facem backup?",
    t19_qa: "Împotriva pierderii datelor", t19_qb: "Pentru a mări viteza PC-ului", t19_qc: "Pentru a economisi curent", t19_qd: "Pentru distracție",
    
    t20_title: "Protecția datelor (GDPR)",
    t20_text: "GDPR protejează datele tale personale. Companiile pot stoca și folosi informații despre tine doar cu permisiune.",
    t20_h1: "Protejarea datelor personale", t20_h2: "Dreptul la informare",
    t20_inst: "Ce sunt datele private?",
    t20_q: "Ce aparține datelor personale?",
    t20_qa: "Adresa de acasă", t20_qb: "Culoarea preferată la mașini", t20_qc: "Prognoza meteo", t20_qd: "Temperatura CPU",
    
    t21_title: "Drepturi de autor software",
    t21_text: "Software-ul este protejat de drepturi de autor. Ai nevoie de o licență pentru a-l folosi legal.",
    t21_h1: "Licențe (EULA)", t21_h2: "Open Source vs. Proprietar",
    t21_inst: "Potrivește tipurile de licență!",
    t21_q: "Poți copia și distribui orice software?",
    t21_qa: "Nu, doar cu permisiune", t21_qb: "Da, întotdeauna", t21_qc: "Doar în weekend", t21_qd: "Doar dacă e scump",
    
    t22_title: "Scratch avansat",
    t22_text: "În Scratch poți crea jocuri complexe prin trimiterea de mesaje și definirea propriilor blocuri.",
    t22_h1: "Trimiterea de mesaje", t22_h2: "Blocuri proprii",
    t22_inst: "Construiește scriptul!",
    t22_q: "La ce folosește 'transmite mesaj' în Scratch?",
    t22_qa: "Comunicarea între personaje", t22_qb: "Scrierea de e-mailuri", t22_qc: "Oprirea calculatorului", t22_qd: "Ștergerea fundalului",
    
    t23_title: "Variabile și tipuri",
    t23_text: "Variabilele sunt substitute pentru valori precum numere sau text. În programe, ele stochează, de exemplu, scorul.",
    t23_h1: "Stocarea valorilor", t23_h2: "Numere și șiruri de caractere",
    t23_inst: "Setează variabila!",
    t23_q: "Ce stochează adesea o variabilă într-un joc?",
    t23_qa: "Scorul", t23_qb: "Dimensiunea monitorului", t23_qc: "Configurația tastaturii", t23_qd: "Forma carcasei",
    
    t24_title: "Condiții (If-Then)",
    t24_text: "Condițiile permit programului să ia decizii: 'DACĂ tasta este apăsată, ATUNCI sari'.",
    t24_h1: "Luarea deciziilor", t24_h2: "Adevărat sau Fals",
    t24_inst: "DACĂ ... ATUNCI ...",
    t24_q: "Ce se întâmplă la o condiție?",
    t24_qa: "Programul se ramifică", t24_qb: "Programul este șters", t24_qc: "PC-ul se încinge", t24_qd: "Culoarea se schimbă mereu",
    
    t25_title: "Bucle (Loops)",
    t25_text: "Buclele repetă comenzile de mai multe ori sau atâta timp cât o condiție este îndeplinită.",
    t25_h1: "Repetiții", t25_h2: "Evitarea buclelor infinite",
    t25_inst: "De câte ori să repetăm?",
    t25_q: "De ce folosim bucle?",
    t25_qa: "Pentru a repeta codul", t25_qb: "Pentru a asculta muzică", t25_qc: "Pentru a opri PC-ul", t25_qd: "Pentru a picta imagini",
    
    t26_title: "Funcții",
    t26_text: "Funcțiile grupează comenzi de care ai nevoie des. Le dai un nume și le poți apela oriunde.",
    t26_h1: "Reutilizabilitate", t26_h2: "Utilizarea parametrilor",
    t26_inst: "Definește funcția!",
    t26_q: "Care este avantajul funcțiilor?",
    t26_qa: "Structură și ordine", t26_qb: "Internet mai rapid", t26_qc: "Mai mult spațiu", t26_qd: "Grafică mai bună",
    
    t27_title: "Depanare (Debugging)",
    t27_text: "Erorile din programe se numesc 'bug-uri'. Depanarea este procesul de găsire și corectare a acestor erori.",
    t27_h1: "Găsirea erorilor", t27_h2: "Testare logică",
    t27_inst: "Găsește bug-ul!",
    t27_q: "Cum se numește o eroare în codul programului?",
    t27_qa: "Bug", t27_qb: "Muscă", t27_qc: "Păianjen", t27_qd: "Furnică",
    
    t28_title: "Cetățenie digitală",
    t28_text: "Ca cetățean digital, te comporți politicos pe net (Netichetă) și ai grijă de securitate și intimitate.",
    t28_h1: "Netichetă", t28_h2: "Parolă sigură",
    t28_inst: "Ce este politicos?",
    t28_q: "Cum se numesc regulile de comportament pe internet?",
    t28_qa: "Netichetă", t28_qb: "Legea Web", t28_qc: "Plan Online", t28_qd: "Tabel Internet",
    
    t29_title: "Creativitate digitală",
    t29_text: "Calculatoarele sunt instrumente pentru creativitate: poți compune muzică, crea artă digitală sau edita video.",
    t29_h1: "Crearea de conținut propriu", t29_h2: "Instrumente creative",
    t29_inst: "Creează ceva nou!",
    t29_q: "Ce poți crea creativ pe un PC?",
    t29_qa: "Artă digitală", t29_qb: "Ștergerea prafului", t29_qc: "Ordonarea cablurilor", t29_qd: "Numărarea pixelilor",
    
    t30_title: "Planificarea proiectului",
    t30_text: "Înainte de a scrie un program, planifici pașii: Ce ar trebui să se întâmple? Cum arată designul?",
    t30_h1: "Planificarea fluxului", t30_h2: "Definirea obiectivelor",
    t30_inst: "Planifică-ți proiectul!",
    t30_q: "Care este primul pas într-un proiect?",
    t30_qa: "Planificarea", t30_qb: "Ștergerea", t30_qc: "Imprimarea", t30_qd: "Vânzarea",
  },
};

export const INFO_K6_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t16_title", infoText: "t16_text",
    bulletKeys: ["t16_h1", "t16_h2"],
    svg: { type: "simple-icon", icon: "💿", color: "#6366F1" },
    interactive: {
      type: "word-order",
      instruction: "t16_inst",
      words: ["Download", "Setup", "Lizenz", "Finish"],
      correctOrder: [0, 1, 2, 3]
    },
    quiz: { question: "t16_q", choices: ["t16_qa", "t16_qb", "t16_qc", "t16_qd"], answer: "t16_qa" }
  },
  {
    infoTitle: "t17_title", infoText: "t17_text",
    bulletKeys: ["t17_h1", "t17_h2"],
    svg: { type: "simple-icon", icon: "🦠", color: "#EF4444" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t17_inst",
      buckets: [
        { id: "bad", label: "Malware" },
        { id: "good", label: "Safe" }
      ],
      items: [
        { text: "Virus", bucketId: "bad" },
        { text: "Trojaner", bucketId: "bad" },
        { text: "Update", bucketId: "good" },
        { text: "Antivirus", bucketId: "good" }
      ]
    },
    quiz: { question: "t17_q", choices: ["t17_qa", "t17_qb", "t17_qc", "t17_qd"], answer: "t17_qa" }
  },
  {
    infoTitle: "t18_title", infoText: "t18_text",
    bulletKeys: ["t18_h1", "t18_h2"],
    svg: { type: "simple-icon", icon: "🧱", color: "#F97316" },
    interactive: {
      type: "match-pairs",
      instruction: "t18_inst",
      pairs: [
        { left: "Eingang", right: "Prüfen" },
        { left: "Gefahr", right: "Blockieren" },
        { left: "Sicher", right: "Zulassen" }
      ]
    },
    quiz: { question: "t18_q", choices: ["t18_qa", "t18_qb", "t18_qc", "t18_qd"], answer: "t18_qa" }
  },
  {
    infoTitle: "t19_title", infoText: "t19_text",
    bulletKeys: ["t19_h1", "t19_h2"],
    svg: { type: "simple-icon", icon: "💾", color: "#3B82F6" },
    interactive: {
      type: "match-pairs",
      instruction: "t19_inst",
      pairs: [
        { left: "Original", right: "PC" },
        { left: "Backup", right: "Extern" },
        { left: "Verlust", right: "Wiederherstellen" }
      ]
    },
    quiz: { question: "t19_q", choices: ["t19_qa", "t19_qb", "t19_qc", "t19_qd"], answer: "t19_qa" }
  },
  {
    infoTitle: "t20_title", infoText: "t20_text",
    bulletKeys: ["t20_h1", "t20_h2"],
    svg: { type: "simple-icon", icon: "⚖️", color: "#10B981" },
    interactive: {
      type: "highlight-text",
      instruction: "t20_inst",
      tokens: ["Name", "Wetter", "Passwort", "Datum"],
      correctIndices: [0, 2]
    },
    quiz: { question: "t20_q", choices: ["t20_qa", "t20_qb", "t20_qc", "t20_qd"], answer: "t20_qa" }
  },
  {
    infoTitle: "t21_title", infoText: "t21_text",
    bulletKeys: ["t21_h1", "t21_h2"],
    svg: { type: "simple-icon", icon: "📜", color: "#8B5CF6" },
    interactive: {
      type: "match-pairs",
      instruction: "t21_inst",
      pairs: [
        { left: "Kaufen", right: "Lizenz" },
        { left: "Gratis", right: "Open Source" },
        { left: "Illegal", right: "Raubkopie" }
      ]
    },
    quiz: { question: "t21_q", choices: ["t21_qa", "t21_qb", "t21_qc", "t21_qd"], answer: "t21_qa" }
  },
  {
    infoTitle: "t22_title", infoText: "t22_text",
    bulletKeys: ["t22_h1", "t22_h2"],
    svg: { type: "simple-icon", icon: "🐱", color: "#F59E0B" },
    interactive: {
      type: "sentence-build",
      instruction: "t22_inst",
      fragments: ["WENN", "angeklickt", "SENDE", "Start"]
    },
    quiz: { question: "t22_q", choices: ["t22_qa", "t22_qb", "t22_qc", "t22_qd"], answer: "t22_qa" }
  },
  {
    infoTitle: "t23_title", infoText: "t23_text",
    bulletKeys: ["t23_h1", "t23_h2"],
    svg: { type: "simple-icon", icon: "📦", color: "#EC4899" },
    interactive: {
      type: "gap-fill",
      instruction: "t23_inst",
      sentence: "SETZE ___ AUF 10",
      choices: ["Score", "Farbe", "Bild", "Tons"],
      correctIndex: 0
    },
    quiz: { question: "t23_q", choices: ["t23_qa", "t23_qb", "t23_qc", "t23_qd"], answer: "t23_qa" }
  },
  {
    infoTitle: "t24_title", infoText: "t24_text",
    bulletKeys: ["t24_h1", "t24_h2"],
    svg: { type: "simple-icon", icon: "🌲", color: "#14B8A6" },
    interactive: {
      type: "match-pairs",
      instruction: "t24_inst",
      pairs: [
        { left: "WENN", right: "Bedingung" },
        { left: "DANN", right: "Aktion" },
        { left: "SONST", right: "Alternative" }
      ]
    },
    quiz: { question: "t24_q", choices: ["t24_qa", "t24_qb", "t24_qc", "t24_qd"], answer: "t24_qa" }
  },
  {
    infoTitle: "t25_title", infoText: "t25_text",
    bulletKeys: ["t25_h1", "t25_h2"],
    svg: { type: "simple-icon", icon: "🔁", color: "#F43F5E" },
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [1, 1, 1, 1, 1],
      answer: 5,
      instruction: "t25_inst",
      blockIcon: "🔄"
    },
    quiz: { question: "t25_q", choices: ["t25_qa", "t25_qb", "t25_qc", "t25_qd"], answer: "t25_qa" }
  },
  {
    infoTitle: "t26_title", infoText: "t26_text",
    bulletKeys: ["t26_h1", "t26_h2"],
    svg: { type: "simple-icon", icon: "🧩", color: "#60A5FA" },
    interactive: {
      type: "match-pairs",
      instruction: "t26_inst",
      pairs: [
        { left: "Name", right: "Aufruf" },
        { left: "Input", right: "Parameter" },
        { left: "Code", right: "Inhalt" }
      ]
    },
    quiz: { question: "t26_q", choices: ["t26_qa", "t26_qb", "t26_qc", "t26_qd"], answer: "t26_qa" }
  },
  {
    infoTitle: "t27_title", infoText: "t27_text",
    bulletKeys: ["t27_h1", "t27_h2"],
    svg: { type: "simple-icon", icon: "🔍", color: "#A855F7" },
    interactive: {
      type: "highlight-text",
      instruction: "t27_inst",
      tokens: ["Suche", "Fehler", "Repariere", "Test"],
      correctIndices: [1]
    },
    quiz: { question: "t27_q", choices: ["t27_qa", "t27_qb", "t27_qc", "t27_qd"], answer: "t27_qa" }
  },
  {
    infoTitle: "t28_title", infoText: "t28_text",
    bulletKeys: ["t28_h1", "t28_h2"],
    svg: { type: "simple-icon", icon: "🛡️", color: "#22C55E" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t28_inst",
      buckets: [
        { id: "good", label: "Höflich" },
        { id: "bad", label: "Unhöflich" }
      ],
      items: [
        { text: "Helfen", bucketId: "good" },
        { text: "Beleidigen", bucketId: "bad" },
        { text: "Fragen", bucketId: "good" },
        { text: "Spammen", bucketId: "bad" }
      ]
    },
    quiz: { question: "t28_q", choices: ["t28_qa", "t28_qb", "t28_qc", "t28_qd"], answer: "t28_qa" }
  },
  {
    infoTitle: "t29_title", infoText: "t29_text",
    bulletKeys: ["t29_h1", "t29_h2"],
    svg: { type: "simple-icon", icon: "✨", color: "#D946EF" },
    interactive: {
      type: "match-pairs",
      instruction: "t29_inst",
      pairs: [
        { left: "Musik", right: "Noten" },
        { left: "Kunst", right: "Farben" },
        { left: "Video", right: "Schnitt" }
      ]
    },
    quiz: { question: "t29_q", choices: ["t29_qa", "t29_qb", "t29_qc", "t29_qd"], answer: "t29_qa" }
  },
  {
    infoTitle: "t30_title", infoText: "t30_text",
    bulletKeys: ["t30_h1", "t30_h2"],
    svg: { type: "simple-icon", icon: "📋", color: "#475569" },
    interactive: {
      type: "word-order",
      instruction: "t30_inst",
      words: ["Idee", "Plan", "Code", "Test"],
      correctOrder: [0, 1, 2, 3]
    },
    quiz: { question: "t30_q", choices: ["t30_qa", "t30_qb", "t30_qc", "t30_qd"], answer: "t30_qa" }
  }
];
