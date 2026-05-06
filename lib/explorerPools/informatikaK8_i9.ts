// @ts-nocheck
// lib/explorerPools/informatikaK8_i9.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "IT-Berufe",
    t1_title: "Softwareentwickler", t1_text: "Ein Softwareentwickler schreibt, testet und wartet Programme. Er nutzt Programmiersprachen wie Python, Java oder JavaScript.",
    t1_inst: "Ordne die IT-Berufe ihren Aufgaben zu.", t1_h1: "Entwickler schreibt Code, Analyst wertet Daten aus", t1_h2: "Jeder IT-Beruf hat eine eigene Spezialisierung",
    t1_l1: "Softwareentwickler", t1_r1: "schreibt und wartet Programme",
    t1_l2: "Datenanalyst", t1_r2: "wertet Daten aus und erstellt Berichte",
    t1_l3: "Cybersecurity-Experte", t1_r3: "schützt Systeme vor Cyberangriffen",
    t1_q: "Was macht ein Softwareentwickler hauptsächlich?", t1_qa: "Er schreibt, testet und wartet Programme", t1_qb: "Er verwaltet Netzwerke", t1_qc: "Er gestaltet Benutzeroberflächen", t1_qd: "Er analysiert Daten",

    t2_title: "Datenanalyst", t2_text: "Ein Datenanalyst sammelt, bereinigt und analysiert große Datenmengen, um Erkenntnisse für Entscheidungen zu gewinnen. Er nutzt Tools wie Excel, SQL und Python.",
    t2_inst: "Fülle die Lücke aus.", t2_h1: "Datenanalyst = Daten auswerten und visualisieren", t2_h2: "SQL und Python sind typische Analysetools",
    t2_sent: "Ein Datenanalyst verwendet häufig ___ , um Daten abzufragen.",
    t2_qa2: "SQL", t2_qb2: "Photoshop", t2_qc2: "Word", t2_qd2: "PowerPoint",
    t2_q: "Was ist die Hauptaufgabe eines Datenanalysten?", t2_qa: "Daten sammeln, bereinigen und analysieren", t2_qb: "Programme schreiben und testen", t2_qc: "Netzwerke verwalten", t2_qd: "Webseiten gestalten",

    t3_title: "Cybersecurity-Experte", t3_text: "Ein Cybersecurity-Experte schützt Computersysteme und Netzwerke vor Angriffen und Datenverlust. Er analysiert Bedrohungen und entwickelt Sicherheitslösungen.",
    t3_inst: "Sortiere die Wörter in die richtige Reihenfolge.", t3_h1: "Cybersecurity = Schutz vor digitalen Angriffen", t3_h2: "Penetrationstest = geplanter Angriff zur Sicherheitsprüfung",
    t3_w1: "Ein Cybersecurity-Experte", t3_w2: "schützt Systeme", t3_w3: "vor Cyberangriffen", t3_w4: "und analysiert", t3_w5: "Sicherheitsbedrohungen.",
    t3_q: "Was schützt ein Cybersecurity-Experte?", t3_qa: "Computersysteme und Netzwerke vor Angriffen", t3_qb: "Daten in Excel-Tabellen", t3_qc: "Webseiten-Design", t3_qd: "Serverräume vor Feuer",

    t4_title: "UX-Designer", t4_text: "Ein UX-Designer (User Experience) gestaltet Benutzeroberflächen so, dass sie einfach, intuitiv und angenehm zu bedienen sind.",
    t4_inst: "Sortiere die Begriffe in die richtige Kategorie.", t4_h1: "UX = wie das Produkt sich anfühlt, UI = wie es aussieht", t4_h2: "Gutes UX: einfach zu lernen, schnell zu bedienen",
    t4_bl1: "UX-Aufgaben", t4_bl2: "Entwickler-Aufgaben",
    t4_i1: "Benutzerfreundlichkeit testen", t4_i2: "Code schreiben und debuggen", t4_i3: "Wireframes und Prototypen erstellen", t4_i4: "Algorithmen implementieren",
    t4_q: "Was ist die Hauptaufgabe eines UX-Designers?", t4_qa: "Benutzeroberflächen intuitiv und angenehm zu gestalten", t4_qb: "Netzwerke zu verwalten", t4_qc: "Sicherheitslücken zu finden", t4_qd: "Datenbanken zu verwalten",

    t5_title: "IT-Zertifikate", t5_text: "IT-Zertifikate sind anerkannte Nachweise für bestimmte Kenntnisse und Fähigkeiten, z. B. CompTIA A+, Cisco CCNA oder Google Cloud-Zertifikate.",
    t5_inst: "Markiere die anerkannten IT-Zertifikate.", t5_h1: "CompTIA, Cisco, Microsoft, Google sind bekannte Anbieter", t5_h2: "Zertifikate zeigen Arbeitgebern nachgewiesene Fähigkeiten",
    t5_tk1: "CompTIA A+", t5_tk2: "Führerschein Klasse B", t5_tk3: "Cisco CCNA", t5_tk4: "Schwimmabzeichen", t5_tk5: "Google Cloud Professional",
    t5_q: "Wozu dienen IT-Zertifikate im Beruf?", t5_qa: "Sie beweisen anerkannte Kenntnisse und Fähigkeiten", t5_qb: "Sie ersetzen das Schulzeugnis", t5_qc: "Sie sind nur in Deutschland gültig", t5_qd: "Sie werden von Schulen ausgestellt",

    t6_title: "Data Scientist", t6_text: "Nutzt Mathematik, Statistik und maschinelles Lernen, um komplexe Datenprobleme zu lösen.",
    t6_inst: "Verbinde die Begriffe:", t6_l1: "Mathematik", t6_r1: "Statistik", t6_l2: "ML", t6_r2: "Algorithmen", t6_l3: "Code", t6_r3: "Python",
    t6_q: "Was macht ein Data Scientist?", t6_qa: "Modelle trainieren", t6_qb: "Kabel verlegen", t6_qc: "PCs reparieren", t6_qd: "Webseiten malen",

    t7_title: "Cybersecurity Analyst", t7_text: "Überwacht Netzwerke auf Sicherheitsverletzungen und untersucht Vorfälle.",
    t7_inst: "Fülle die Lücke:", t7_sent: "Er sucht nach ___ im Netzwerk.", t7_qa7: "Schwachstellen", t7_qb7: "Katzen", t7_qc7: "Kabeln", t7_qd7: "Farben",
    t7_q: "Was ist das Ziel?", t7_qa: "Sicherheit", t7_qb: "Design", t7_qc: "Marketing", t7_qd: "Verkauf",

    t8_title: "UX/UI Designer", t8_text: "Fokussiert sich auf das Benutzererlebnis und das visuelle Design einer App.",
    t8_inst: "Sortiere die Elemente:", t8_bl1: "UX (Erlebnis)", t8_bl2: "UI (Design)", t8_i1: "Wireframes", t8_i2: "Farben", t8_i3: "Benutzerfluss", t8_i4: "Typografie",
    t8_q: "Wofür steht UI?", t8_qa: "User Interface", t8_qb: "User Internet", t8_qc: "Universal Index", t8_qd: "Unit Input",

    t9_title: "DevOps Engineer", t9_text: "Verbindet Softwareentwicklung und IT-Betrieb für schnellere Releases.",
    t9_inst: "Ordne den Ablauf:", t9_w1: "Planen", t9_w2: "Code", t9_w3: "Testen", t9_w4: "Deploy", t9_w5: "Betrieb",
    t9_q: "Was bedeutet DevOps?", t9_qa: "Development & Operations", t9_qb: "Device & Options", t9_qc: "Developer & Operator", t9_qd: "Data & Output",

    t10_title: "Cloud Architect", t10_text: "Entwirft und verwaltet Cloud-Infrastrukturen wie AWS oder Azure.",
    t10_inst: "Markiere die Cloud-Begriffe:", t10_tk1: "AWS", t10_tk2: "lokaler PC", t10_tk3: "Azure", t10_tk4: "USB-Stick",
    t10_q: "Welche ist eine Cloud-Plattform?", t10_qa: "Azure", t10_qb: "Windows 95", t10_qc: "MS Paint", t10_qd: "BIOS",

    t11_title: "Datenbankadministrator (DBA)", t11_text: "Sorgt dafür, dass Datenbanken sicher, schnell und verfügbar bleiben.",
    t11_inst: "Fülle die Lücke:", t11_sent: "Ein DBA verwendet oft ___.", t11_qa11: "SQL", t11_qb11: "HTML", t11_qc11: "CSS", t11_qd11: "HTTP",
    t11_q: "Was macht ein DBA?", t11_qa: "Daten verwalten", t11_qb: "Spiele spielen", t11_qc: "Bilder malen", t11_qd: "Musik machen",

    t12_title: "QA Tester", t12_text: "Sucht nach Bugs und stellt sicher, dass Software fehlerfrei funktioniert.",
    t12_inst: "Verbinde:", t12_l1: "Bug", t12_r1: "Fehler", t12_l2: "Test", t12_r2: "Prüfung", t12_l3: "Fix", t12_r3: "Lösung",
    t12_q: "Was ist ein 'Bug'?", t12_qa: "Ein Programmfehler", t12_qb: "Ein Feature", t12_qc: "Ein Virus", t12_qd: "Ein Kabel",

    t13_title: "Spieleentwickler", t13_text: "Erstellt Videospiele mit Engines wie Unity oder Unreal.",
    t13_inst: "Sortiere:", t13_bl1: "Engine", t13_bl2: "Beruf", t13_i1: "Unity", t13_i2: "Unreal", t13_i3: "Designer", t13_i4: "Programmierer",
    t13_q: "Was ist Unity?", t13_qa: "Game Engine", t13_qb: "Browser", t13_qc: "Betriebssystem", t13_qd: "Datenbank",

    t14_title: "IT-Produktmanager", t14_text: "Plant und leitet die Entwicklung eines Softwareprodukts.",
    t14_inst: "Ordne den Prozess:", t14_w1: "Idee", t14_w2: "Plan", t14_w3: "Design", t14_w4: "Code", t14_w5: "Launch",
    t14_q: "Was leitet ein Produktmanager?", t14_qa: "Das Produkt", t14_qb: "Die Server", t14_qc: "Das Netzwerk", t14_qd: "Die Buchhaltung",

    t15_title: "Netzwerkingenieur", t15_text: "Baut und wartet Computernetzwerke (LAN, WAN).",
    t15_inst: "Markiere Netzwerkgeräte:", t15_tk1: "Router", t15_tk2: "Switch", t15_tk3: "HTML", t15_tk4: "CSS",
    t15_q: "Was verbindet Netzwerke?", t15_qa: "Router", t15_qb: "Monitor", t15_qc: "Maus", t15_qd: "Tastatur"
  },
  en: {
    explorer_title: "IT Careers",
    t1_title: "Software developer", t1_text: "A software developer writes, tests and maintains programs. They use programming languages such as Python, Java or JavaScript.",
    t1_inst: "Match the IT careers to their tasks.", t1_h1: "Developer writes code, analyst evaluates data", t1_h2: "Each IT career has its own specialization",
    t1_l1: "Software developer", t1_r1: "writes and maintains programs",
    t1_l2: "Data analyst", t1_r2: "evaluates data and creates reports",
    t1_l3: "Cybersecurity expert", t1_r3: "protects systems from cyberattacks",
    t1_q: "What does a software developer mainly do?", t1_qa: "They write, test and maintain programs", t1_qb: "They manage networks", t1_qc: "They design user interfaces", t1_qd: "They analyze data",

    t2_title: "Data analyst", t2_text: "A data analyst collects, cleans and analyzes large amounts of data to gain insights for decisions. They use tools like Excel, SQL and Python.",
    t2_inst: "Fill in the blank.", t2_h1: "Data analyst = evaluate and visualize data", t2_h2: "SQL and Python are typical analysis tools",
    t2_sent: "A data analyst often uses ___ to query data.",
    t2_qa2: "SQL", t2_qb2: "Photoshop", t2_qc2: "Word", t2_qd2: "PowerPoint",
    t2_q: "What is the main task of a data analyst?", t2_qa: "Collecting, cleaning and analyzing data", t2_qb: "Writing and testing programs", t2_qc: "Managing networks", t2_qd: "Designing web pages",

    t3_title: "Cybersecurity expert", t3_text: "A cybersecurity expert protects computer systems and networks from attacks and data loss. They analyze threats and develop security solutions.",
    t3_inst: "Sort the words into the correct order.", t3_h1: "Cybersecurity = protection from digital attacks", t3_h2: "Penetration test = planned attack to test security",
    t3_w1: "A cybersecurity expert", t3_w2: "protects systems", t3_w3: "from cyberattacks", t3_w4: "and analyzes", t3_w5: "security threats.",
    t3_q: "What does a cybersecurity expert protect?", t3_qa: "Computer systems and networks from attacks", t3_qb: "Data in Excel tables", t3_qc: "Web page design", t3_qd: "Server rooms from fire",

    t4_title: "UX designer", t4_text: "A UX designer creates user interfaces that are easy, intuitive and pleasant to use.",
    t4_inst: "Sort the terms into the correct category.", t4_h1: "UX = how the product feels, UI = how it looks", t4_h2: "Good UX: easy to learn, quick to use",
    t4_bl1: "UX tasks", t4_bl2: "Developer tasks",
    t4_i1: "testing usability", t4_i2: "writing and debugging code", t4_i3: "creating wireframes and prototypes", t4_i4: "implementing algorithms",
    t4_q: "What is the main task of a UX designer?", t4_qa: "Making user interfaces intuitive and pleasant", t4_qb: "Managing networks", t4_qc: "Finding security vulnerabilities", t4_qd: "Managing databases",

    t5_title: "IT certifications", t5_text: "IT certifications are recognized proofs of specific knowledge and skills, e.g. CompTIA A+, Cisco CCNA or Google Cloud certifications.",
    t5_inst: "Highlight the recognized IT certifications.", t5_h1: "CompTIA, Cisco, Microsoft, Google are well-known providers", t5_h2: "Certifications show employers proven skills",
    t5_tk1: "CompTIA A+", t5_tk2: "Driver's license class B", t5_tk3: "Cisco CCNA", t5_tk4: "Swimming badge", t5_tk5: "Google Cloud Professional",
    t5_q: "What are IT certifications used for in a career?", t5_qa: "They prove recognized knowledge and skills", t5_qb: "They replace the school report", t5_qc: "They are only valid in Germany", t5_qd: "They are issued by schools",

    t6_title: "Data Scientist", t6_text: "Uses math, statistics, and machine learning to solve complex data problems.",
    t6_inst: "Match the terms:", t6_l1: "Math", t6_r1: "Statistics", t6_l2: "ML", t6_r2: "Algorithms", t6_l3: "Code", t6_r3: "Python",
    t6_q: "What does a Data Scientist do?", t6_qa: "Train models", t6_qb: "Lay cables", t6_qc: "Repair PCs", t6_qd: "Paint websites",

    t7_title: "Cybersecurity Analyst", t7_text: "Monitors networks for security breaches and investigates incidents.",
    t7_inst: "Fill in the blank:", t7_sent: "They look for ___ in the network.", t7_qa7: "Vulnerabilities", t7_qb7: "Cats", t7_qc7: "Cables", t7_qd7: "Colors",
    t7_q: "What is the goal?", t7_qa: "Security", t7_qb: "Design", t7_qc: "Marketing", t7_qd: "Sales",

    t8_title: "UX/UI Designer", t8_text: "Focuses on the user experience and visual design of an app.",
    t8_inst: "Sort the items:", t8_bl1: "UX (Experience)", t8_bl2: "UI (Design)", t8_i1: "Wireframes", t8_i2: "Colors", t8_i3: "User flow", t8_i4: "Typography",
    t8_q: "What does UI stand for?", t8_qa: "User Interface", t8_qb: "User Internet", t8_qc: "Universal Index", t8_qd: "Unit Input",

    t9_title: "DevOps Engineer", t9_text: "Combines software development and IT operations for faster releases.",
    t9_inst: "Order the process:", t9_w1: "Plan", t9_w2: "Code", t9_w3: "Test", t9_w4: "Deploy", t9_w5: "Operate",
    t9_q: "What does DevOps mean?", t9_qa: "Development & Operations", t9_qb: "Device & Options", t9_qc: "Developer & Operator", t9_qd: "Data & Output",

    t10_title: "Cloud Architect", t10_text: "Designs and manages cloud infrastructures like AWS or Azure.",
    t10_inst: "Highlight the cloud terms:", t10_tk1: "AWS", t10_tk2: "Local PC", t10_tk3: "Azure", t10_tk4: "USB stick",
    t10_q: "Which is a cloud platform?", t10_qa: "Azure", t10_qb: "Windows 95", t10_qc: "MS Paint", t10_qd: "BIOS",

    t11_title: "Database Administrator (DBA)", t11_text: "Ensures databases remain secure, fast, and available.",
    t11_inst: "Fill in the blank:", t11_sent: "A DBA often uses ___.", t11_qa11: "SQL", t11_qb11: "HTML", t11_qc11: "CSS", t11_qd11: "HTTP",
    t11_q: "What does a DBA do?", t11_qa: "Manage data", t11_qb: "Play games", t11_qc: "Paint pictures", t11_qd: "Make music",

    t12_title: "QA Tester", t12_text: "Looks for bugs and ensures software works without errors.",
    t12_inst: "Match:", t12_l1: "Bug", t12_r1: "Error", t12_l2: "Test", t12_r2: "Check", t12_l3: "Fix", t12_r3: "Solution",
    t12_q: "What is a 'bug'?", t12_qa: "A program error", t12_qb: "A feature", t12_qc: "A virus", t12_qd: "A cable",

    t13_title: "Game Developer", t13_text: "Creates video games using engines like Unity or Unreal.",
    t13_inst: "Sort:", t13_bl1: "Engine", t13_bl2: "Role", t13_i1: "Unity", t13_i2: "Unreal", t13_i3: "Designer", t13_i4: "Programmer",
    t13_q: "What is Unity?", t13_qa: "Game Engine", t13_qb: "Browser", t13_qc: "Operating System", t13_qd: "Database",

    t14_title: "IT Product Manager", t14_text: "Plans and leads the development of a software product.",
    t14_inst: "Order the process:", t14_w1: "Idea", t14_w2: "Plan", t14_w3: "Design", t14_w4: "Code", t14_w5: "Launch",
    t14_q: "What does a product manager lead?", t14_qa: "The product", t14_qb: "The servers", t14_qc: "The network", t14_qd: "Accounting",

    t15_title: "Network Engineer", t15_text: "Builds and maintains computer networks (LAN, WAN).",
    t15_inst: "Highlight network devices:", t15_tk1: "Router", t15_tk2: "Switch", t15_tk3: "HTML", t15_tk4: "CSS",
    t15_q: "What connects networks?", t15_qa: "Router", t15_qb: "Monitor", t15_qc: "Mouse", t15_qd: "Keyboard"
  },
  hu: {
    explorer_title: "IT Szakmák",
    t1_title: "Szoftverfejlesztő", t1_text: "A szoftverfejlesztő programokat ír, tesztel és karbantart. Python, Java vagy JavaScript programozási nyelveket használ.",
    t1_inst: "Párosítsd az IT-szakmákat a feladataikhoz.", t1_h1: "fejlesztő kódot ír, elemző adatokat értékel", t1_h2: "Minden IT-szakmának saját specializációja van",
    t1_l1: "Szoftverfejlesztő", t1_r1: "programokat ír és karbantart",
    t1_l2: "Adatelemző", t1_r2: "adatokat értékel és jelentéseket készít",
    t1_l3: "Kiberbiztonság-szakértő", t1_r3: "rendszereket véd kibertámadásoktól",
    t1_q: "Mit csinál főleg a szoftverfejlesztő?", t1_qa: "Programokat ír, tesztel és karbantart", t1_qb: "Hálózatokat kezel", t1_qc: "Felhasználói felületeket tervez", t1_qd: "Adatokat elemez",

    t2_title: "Adatelemző", t2_text: "Az adatelemző nagy mennyiségű adatot gyűjt, tisztít és elemez, hogy döntésekhez nyerjen ki felismeréseket. Excel, SQL és Python eszközöket használ.",
    t2_inst: "Töltsd ki a hiányzó részt.", t2_h1: "adatelemző = adatokat értékel és vizualizál", t2_h2: "az SQL és Python tipikus elemzőeszközök",
    t2_sent: "Az adatelemző gyakran ___ használ az adatok lekérdezéséhez.",
    t2_qa2: "SQL-t", t2_qb2: "Photoshopot", t2_qc2: "Wordöt", t2_qd2: "PowerPointot",
    t2_q: "Mi az adatelemző fő feladata?", t2_qa: "Adatok gyűjtése, tisztítása és elemzése", t2_qb: "Programok írása és tesztelése", t2_qc: "Hálózatok kezelése", t2_qd: "Weboldalak tervezése",

    t3_title: "Kiberbiztonság-szakértő", t3_text: "A kiberbiztonság-szakértő számítógépes rendszereket és hálózatokat véd támadásoktól és adatvesztéstől. Fenyegetéseket elemez és biztonsági megoldásokat fejleszt.",
    t3_inst: "Rendezd a szavakat helyes sorrendbe.", t3_h1: "kiberbiztonság = védelem a digitális támadásoktól", t3_h2: "penetrációs teszt = tervezett támadás a biztonság ellenőrzéséhez",
    t3_w1: "A kiberbiztonság-szakértő", t3_w2: "rendszereket véd", t3_w3: "kibertámadásoktól", t3_w4: "és biztonsági", t3_w5: "fenyegetéseket elemez.",
    t3_q: "Mit véd a kiberbiztonság-szakértő?", t3_qa: "Számítógépes rendszereket és hálózatokat támadásoktól", t3_qb: "Adatokat Excel-táblázatokban", t3_qc: "Weboldal-designt", t3_qd: "Szerverszobákat tűztől",

    t4_title: "UX tervező", t4_text: "A UX-tervező (User Experience) olyan felhasználói felületeket tervez, amelyek egyszerűek, intuitívak és kellemesek.",
    t4_inst: "Rendezd a fogalmakat a megfelelő kategóriába.", t4_h1: "UX = hogyan érzi magát a felhasználó, UI = hogyan néz ki", t4_h2: "jó UX: könnyen tanulható, gyorsan kezelhető",
    t4_bl1: "UX feladatok", t4_bl2: "Fejlesztői feladatok",
    t4_i1: "használhatóság tesztelése", t4_i2: "kód írása és debuggolása", t4_i3: "vázlatok és prototípusok készítése", t4_i4: "algoritmusok implementálása",
    t4_q: "Mi a UX-tervező fő feladata?", t4_qa: "Intuitív és kellemes felhasználói felületek tervezése", t4_qb: "Hálózatok kezelése", t4_qc: "Biztonsági rések megtalálása", t4_qd: "Adatbázisok kezelése",

    t5_title: "IT-tanúsítványok", t5_text: "Az IT-tanúsítványok elismert igazolások meghatározott tudásról és készségekről, például CompTIA A+, Cisco CCNA vagy Google Cloud tanúsítványok.",
    t5_inst: "Emeld ki az elismert IT-tanúsítványokat.", t5_h1: "a CompTIA, Cisco, Microsoft, Google ismert tanúsítványkiadók", t5_h2: "a tanúsítványok igazolt készségeket mutatnak a munkáltatóknak",
    t5_tk1: "CompTIA A+", t5_tk2: "B-kategóriás jogosítvány", t5_tk3: "Cisco CCNA", t5_tk4: "Úszójelvény", t5_tk5: "Google Cloud Professional",
    t5_q: "Mire valók az IT-tanúsítványok a munkában?", t5_qa: "Elismert tudást és készségeket igazolnak", t5_qb: "Helyettesítik az iskolai bizonyítványt", t5_qc: "Csak Németországban érvényesek", t5_qd: "Iskolák adják ki őket",

    t6_title: "Adattudós", t6_text: "Matematikát, statisztikát és gépi tanulást használ összetett adatproblémák megoldására.",
    t6_inst: "Párosítsd a fogalmakat:", t6_l1: "Matematika", t6_r1: "Statisztika", t6_l2: "ML", t6_r2: "Algoritmusok", t6_l3: "Kód", t6_r3: "Python",
    t6_q: "Mit csinál egy adattudós?", t6_qa: "Modelleket tanít", t6_qb: "Kábeleket fektet", t6_qc: "Számítógépet szerel", t6_qd: "Weboldalakat fest",

    t7_title: "Kiberbiztonsági elemző", t7_text: "Hálózatokat figyel biztonsági rések után, és kivizsgálja az incidenseket.",
    t7_inst: "Pótold:", t7_sent: "___ keres a hálózatban.", t7_qa7: "Sebezhetőségeket", t7_qb7: "Macskákat", t7_qc7: "Kábeleket", t7_qd7: "Színeket",
    t7_q: "Mi a cél?", t7_qa: "Biztonság", t7_qb: "Dizájn", t7_qc: "Marketing", t7_qd: "Értékesítés",

    t8_title: "UX/UI Tervező", t8_text: "Az alkalmazás felhasználói élményére és vizuális dizájnjára fókuszál.",
    t8_inst: "Válogasd szét:", t8_bl1: "UX (Élmény)", t8_bl2: "UI (Dizájn)", t8_i1: "Drótvázak", t8_i2: "Színek", t8_i3: "Felhasználói út", t8_i4: "Tipográfia",
    t8_q: "Mit jelent az UI?", t8_qa: "User Interface", t8_qb: "User Internet", t8_qc: "Universal Index", t8_qd: "Unit Input",

    t9_title: "DevOps Mérnök", t9_text: "Összeköti a szoftverfejlesztést és az IT-üzemeltetést a gyorsabb kiadásokért.",
    t9_inst: "Rendezd a folyamatot:", t9_w1: "Tervezés", t9_w2: "Kód", t9_w3: "Teszt", t9_w4: "Kiadás", t9_w5: "Üzemeltetés",
    t9_q: "Mit jelent a DevOps?", t9_qa: "Development & Operations", t9_qb: "Device & Options", t9_qc: "Developer & Operator", t9_qd: "Data & Output",

    t10_title: "Felhő Építész", t10_text: "Felhő-infrastruktúrákat tervez és kezel, mint az AWS vagy az Azure.",
    t10_inst: "Jelöld a felhős fogalmakat:", t10_tk1: "AWS", t10_tk2: "Helyi PC", t10_tk3: "Azure", t10_tk4: "USB pendrive",
    t10_q: "Melyik egy felhőplatform?", t10_qa: "Azure", t10_qb: "Windows 95", t10_qc: "MS Paint", t10_qd: "BIOS",

    t11_title: "Adatbázis-adminisztrátor", t11_text: "Gondoskodik arról, hogy az adatbázisok biztonságosak, gyorsak és elérhetőek maradjanak.",
    t11_inst: "Pótold:", t11_sent: "Egy DBA gyakran használ ___.", t11_qa11: "SQL-t", t11_qb11: "HTML-t", t11_qc11: "CSS-t", t11_qd11: "HTTP-t",
    t11_q: "Mit csinál egy DBA?", t11_qa: "Adatokat kezel", t11_qb: "Játékokat játszik", t11_qc: "Képeket fest", t11_qd: "Zenél",

    t12_title: "QA Tesztelő", t12_text: "Hibákat keres, és biztosítja, hogy a szoftver hibamentesen működjön.",
    t12_inst: "Párosítsd:", t12_l1: "Bug", t12_r1: "Hiba", t12_l2: "Test", t12_r2: "Vizsgálat", t12_l3: "Fix", t12_r3: "Megoldás",
    t12_q: "Mi az a 'bug'?", t12_qa: "Szoftverhiba", t12_qb: "Funkció", t12_qc: "Vírus", t12_qd: "Kábel",

    t13_title: "Játékfejlesztő", t13_text: "Videójátékokat készít olyan motorokkal, mint a Unity vagy az Unreal.",
    t13_inst: "Válogasd szét:", t13_bl1: "Motor", t13_bl2: "Szerep", t13_i1: "Unity", t13_i2: "Unreal", t13_i3: "Dizájner", t13_i4: "Programozó",
    t13_q: "Mi a Unity?", t13_qa: "Játékmotor (Game Engine)", t13_qb: "Böngésző", t13_qc: "Operációs rendszer", t13_qd: "Adatbázis",

    t14_title: "IT Termékmenedzser", t14_text: "Megtervezi és irányítja egy szoftvertermék fejlesztését.",
    t14_inst: "Rendezd a folyamatot:", t14_w1: "Ötlet", t14_w2: "Terv", t14_w3: "Dizájn", t14_w4: "Kód", t14_w5: "Indítás",
    t14_q: "Mit irányít a termékmenedzser?", t14_qa: "A terméket", t14_qb: "A szervereket", t14_qc: "A hálózatot", t14_qd: "A könyvelést",

    t15_title: "Hálózati mérnök", t15_text: "Számítógépes hálózatokat (LAN, WAN) épít és tart karban.",
    t15_inst: "Jelöld a hálózati eszközöket:", t15_tk1: "Router", t15_tk2: "Switch", t15_tk3: "HTML", t15_tk4: "CSS",
    t15_q: "Mi köt össze hálózatokat?", t15_qa: "Router", t15_qb: "Monitor", t15_qc: "Egér", t15_qd: "Billentyűzet"
  },
  ro: {
    explorer_title: "Cariere IT",
    t1_title: "Dezvoltator software", t1_text: "Un dezvoltator software scrie, testează și întreține programe. Folosește limbaje de programare precum Python, Java sau JavaScript.",
    t1_inst: "Potrivește carierele IT cu sarcinile lor.", t1_h1: "Dezvoltatorul scrie cod, analistul evaluează date", t1_h2: "Fiecare carieră IT are propria specializare",
    t1_l1: "Dezvoltator software", t1_r1: "scrie și întrețin programe",
    t1_l2: "Analist de date", t1_r2: "evaluează date și creează rapoarte",
    t1_l3: "Expert în securitate cibernetică", t1_r3: "protejează sistemele de atacuri cibernetice",
    t1_q: "Ce face în principal un dezvoltator software?", t1_qa: "Scrie, testează și întreține programe", t1_qb: "Gestionează rețele", t1_qc: "Proiectează interfețe utilizator", t1_qd: "Analizează date",

    t2_title: "Analist de date", t2_text: "Un analist de date colectează, curăță și analizează cantități mari de date pentru a obține informații pentru decizii. Folosește instrumente precum Excel, SQL și Python.",
    t2_inst: "Completează spațiul liber.", t2_h1: "Analist de date = evaluează și vizualizează date", t2_h2: "SQL și Python sunt instrumente tipice de analiză",
    t2_sent: "Un analist de date folosește adesea ___ pentru a interoga date.",
    t2_qa2: "SQL", t2_qb2: "Photoshop", t2_qc2: "Word", t2_qd2: "PowerPoint",
    t2_q: "Care este sarcina principală a unui analist de date?", t2_qa: "Colectarea, curățarea și analizarea datelor", t2_qb: "Scrierea și testarea programelor", t2_qc: "Gestionarea rețelelor", t2_qd: "Proiectarea paginilor web",

    t3_title: "Expert în securitate cibernetică", t3_text: "Un expert în securitate cibernetică protejează sistemele informatice și rețelele de atacuri și pierderi de date. Analizează amenințările și dezvoltă soluții de securitate.",
    t3_inst: "Sortează cuvintele în ordinea corectă.", t3_h1: "Securitate cibernetică = protecție față de atacuri digitale", t3_h2: "Test de penetrare = atac planificat pentru verificarea securității",
    t3_w1: "Un expert în securitate cibernetică", t3_w2: "protejează sistemele", t3_w3: "de atacuri cibernetice", t3_w4: "și analizează", t3_w5: "amenințările de securitate.",
    t3_q: "Ce protejează un expert în securitate cibernetică?", t3_qa: "Sisteme informatice și rețele de atacuri", t3_qb: "Date în tabele Excel", t3_qc: "Design de pagini web", t3_qd: "Camere de servere de incendiu",

    t4_title: "Designer UX", t4_text: "Un designer UX (User Experience) creează interfețe utilizator care sunt simple, intuitive și plăcute de folosit.",
    t4_inst: "Sortează termenii în categoria corectă.", t4_h1: "UX = cum se simte produsul, UI = cum arată", t4_h2: "UX bun: ușor de învățat, rapid de utilizat",
    t4_bl1: "Sarcini UX", t4_bl2: "Sarcini dezvoltator",
    t4_i1: "testarea ușurinței de utilizare", t4_i2: "scrierea și depanarea codului", t4_i3: "crearea wireframe-urilor și prototipurilor", t4_i4: "implementarea algoritmilor",
    t4_q: "Care este sarcina principală a unui designer UX?", t4_qa: "Crearea interfețelor utilizator intuitive și plăcute", t4_qb: "Gestionarea rețelelor", t4_qc: "Găsirea vulnerabilităților de securitate", t4_qd: "Gestionarea bazelor de date",

    t5_title: "Certificări IT", t5_text: "Certificările IT sunt dovezi recunoscute de cunoștințe și abilități specifice, ex. CompTIA A+, Cisco CCNA sau certificări Google Cloud.",
    t5_inst: "Evidențiază certificările IT recunoscute.", t5_h1: "CompTIA, Cisco, Microsoft, Google sunt furnizori cunoscuți", t5_h2: "Certificările arată angajatorilor abilități dovedite",
    t5_tk1: "CompTIA A+", t5_tk2: "Permis de conducere clasa B", t5_tk3: "Cisco CCNA", t5_tk4: "Insignă de înot", t5_tk5: "Google Cloud Professional",
    t5_q: "La ce servesc certificările IT în carieră?", t5_qa: "Dovedesc cunoștințe și abilități recunoscute", t5_qb: "Înlocuiesc diploma școlară", t5_qc: "Sunt valabile doar în Germania", t5_qd: "Sunt emise de școli",

    t6_title: "Cercetător de date (Data Scientist)", t6_text: "Folosește matematica, statistica și învățarea automată pentru a rezolva probleme complexe de date.",
    t6_inst: "Potrivește termenii:", t6_l1: "Matematică", t6_r1: "Statistică", t6_l2: "ML", t6_r2: "Algoritmi", t6_l3: "Cod", t6_r3: "Python",
    t6_q: "Ce face un Data Scientist?", t6_qa: "Antrenează modele", t6_qb: "Pune cabluri", t6_qc: "Repară PC-uri", t6_qd: "Pictează site-uri",

    t7_title: "Analist securitate cibernetică", t7_text: "Monitorizează rețelele pentru încălcări de securitate și investighează incidentele.",
    t7_inst: "Completează:", t7_sent: "El caută ___ în rețea.", t7_qa7: "Vulnerabilități", t7_qb7: "Pisici", t7_qc7: "Cabluri", t7_qd7: "Culori",
    t7_q: "Care este scopul?", t7_qa: "Securitate", t7_qb: "Design", t7_qc: "Marketing", t7_qd: "Vânzări",

    t8_title: "Designer UX/UI", t8_text: "Se concentrează pe experiența utilizatorului și designul vizual al unei aplicații.",
    t8_inst: "Sortează:", t8_bl1: "UX (Experiență)", t8_bl2: "UI (Design)", t8_i1: "Wireframe-uri", t8_i2: "Culori", t8_i3: "Fluxul utilizatorului", t8_i4: "Tipografie",
    t8_q: "Ce înseamnă UI?", t8_qa: "User Interface", t8_qb: "User Internet", t8_qc: "Universal Index", t8_qd: "Unit Input",

    t9_title: "Inginer DevOps", t9_text: "Combină dezvoltarea software și operațiunile IT pentru lansări mai rapide.",
    t9_inst: "Ordonează procesul:", t9_w1: "Planifică", t9_w2: "Cod", t9_w3: "Testează", t9_w4: "Lansează", t9_w5: "Operează",
    t9_q: "Ce înseamnă DevOps?", t9_qa: "Development & Operations", t9_qb: "Device & Options", t9_qc: "Developer & Operator", t9_qd: "Data & Output",

    t10_title: "Arhitect Cloud", t10_text: "Proiectează și gestionează infrastructuri cloud precum AWS sau Azure.",
    t10_inst: "Evidențiază termenii cloud:", t10_tk1: "AWS", t10_tk2: "PC local", t10_tk3: "Azure", t10_tk4: "Stick USB",
    t10_q: "Care este o platformă cloud?", t10_qa: "Azure", t10_qb: "Windows 95", t10_qc: "MS Paint", t10_qd: "BIOS",

    t11_title: "Administrator baze de date (DBA)", t11_text: "Se asigură că bazele de date rămân sigure, rapide și disponibile.",
    t11_inst: "Completează:", t11_sent: "Un DBA folosește adesea ___.", t11_qa11: "SQL", t11_qb11: "HTML", t11_qc11: "CSS", t11_qd11: "HTTP",
    t11_q: "Ce face un DBA?", t11_qa: "Gestionează date", t11_qb: "Joacă jocuri", t11_qc: "Pictează imagini", t11_qd: "Face muzică",

    t12_title: "Tester QA", t12_text: "Caută bug-uri și se asigură că software-ul funcționează fără erori.",
    t12_inst: "Potrivește:", t12_l1: "Bug", t12_r1: "Eroare", t12_l2: "Test", t12_r2: "Verificare", t12_l3: "Fix", t12_r3: "Soluție",
    t12_q: "Ce este un 'bug'?", t12_qa: "O eroare de program", t12_qb: "O funcționalitate", t12_qc: "Un virus", t12_qd: "Un cablu",

    t13_title: "Dezvoltator de jocuri", t13_text: "Creează jocuri video folosind motoare precum Unity sau Unreal.",
    t13_inst: "Sortează:", t13_bl1: "Motor", t13_bl2: "Rol", t13_i1: "Unity", t13_i2: "Unreal", t13_i3: "Designer", t13_i4: "Programator",
    t13_q: "Ce este Unity?", t13_qa: "Motor de joc", t13_qb: "Browser", t13_qc: "Sistem de operare", t13_qd: "Bază de date",

    t14_title: "Manager de produs IT", t14_text: "Planifică și conduce dezvoltarea unui produs software.",
    t14_inst: "Ordonează procesul:", t14_w1: "Idee", t14_w2: "Plan", t14_w3: "Design", t14_w4: "Cod", t14_w5: "Lansare",
    t14_q: "Ce conduce un manager de produs?", t14_qa: "Produsul", t14_qb: "Serverele", t14_qc: "Rețeaua", t14_qd: "Contabilitatea",

    t15_title: "Inginer de rețea", t15_text: "Construiește și întreține rețele de calculatoare (LAN, WAN).",
    t15_inst: "Evidențiază dispozitivele de rețea:", t15_tk1: "Router", t15_tk2: "Switch", t15_tk3: "HTML", t15_tk4: "CSS",
    t15_q: "Ce conectează rețelele?", t15_qa: "Router", t15_qb: "Monitor", t15_qc: "Mouse", t15_qd: "Tastatură"
  }
};

export const INFO_K8_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "💻", color: "#1565C0" },
    interactive: {
      type: "match-pairs",
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📊", color: "#006064" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
      sentence: "t2_sent",
      choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"],
      correctIndex: 0,
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#B71C1C" },
    interactive: {
      type: "word-order",
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"],
      correctOrder: [0, 1, 2, 3, 4],
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E65100" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
      buckets: [
        { id: "ux", label: "t4_bl1" },
        { id: "dev", label: "t4_bl2" },
      ],
      items: [
        { text: "t4_i1", bucketId: "ux" },
        { text: "t4_i2", bucketId: "dev" },
        { text: "t4_i3", bucketId: "ux" },
        { text: "t4_i4", bucketId: "dev" },
      ],
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏅", color: "#4A148C" },
    interactive: {
      type: "highlight-text",
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
      tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5"],
      correctIndices: [0, 2, 4],
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#00838F" },
    interactive: {
      type: "match-pairs",
      instruction: "t6_inst",
      pairs: [
        { left: "t6_l1", right: "t6_r1" },
        { left: "t6_l2", right: "t6_r2" },
        { left: "t6_l3", right: "t6_r3" },
      ],
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🕵️", color: "#2E7D32" },
    interactive: {
      type: "gap-fill",
      instruction: "t7_inst",
      sentence: "t7_sent",
      choices: ["t7_qa7", "t7_qb7", "t7_qc7", "t7_qd7"],
      correctIndex: 0,
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "📱", color: "#F9A825" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t8_inst",
      buckets: [
        { id: "ux", label: "t8_bl1" },
        { id: "ui", label: "t8_bl2" },
      ],
      items: [
        { text: "t8_i1", bucketId: "ux" },
        { text: "t8_i2", bucketId: "ui" },
        { text: "t8_i3", bucketId: "ux" },
        { text: "t8_i4", bucketId: "ui" },
      ],
    },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#1565C0" },
    interactive: {
      type: "word-order",
      instruction: "t9_inst",
      words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5"],
      correctOrder: [0, 1, 2, 3, 4],
    },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#0288D1" },
    interactive: {
      type: "highlight-text",
      instruction: "t10_inst",
      tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4"],
      correctIndices: [0, 2],
    },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🗄️", color: "#424242" },
    interactive: {
      type: "gap-fill",
      instruction: "t11_inst",
      sentence: "t11_sent",
      choices: ["t11_qa11", "t11_qb11", "t11_qc11", "t11_qd11"],
      correctIndex: 0,
    },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🐛", color: "#C62828" },
    interactive: {
      type: "match-pairs",
      instruction: "t12_inst",
      pairs: [
        { left: "t12_l1", right: "t12_r1" },
        { left: "t12_l2", right: "t12_r2" },
        { left: "t12_l3", right: "t12_r3" },
      ],
    },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#6A1B9A" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t13_inst",
      buckets: [
        { id: "engine", label: "t13_bl1" },
        { id: "role", label: "t13_bl2" },
      ],
      items: [
        { text: "t13_i1", bucketId: "engine" },
        { text: "t13_i2", bucketId: "engine" },
        { text: "t13_i3", bucketId: "role" },
        { text: "t13_i4", bucketId: "role" },
      ],
    },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📈", color: "#EF6C00" },
    interactive: {
      type: "word-order",
      instruction: "t14_inst",
      words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5"],
      correctOrder: [0, 1, 2, 3, 4],
    },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#00695C" },
    interactive: {
      type: "highlight-text",
      instruction: "t15_inst",
      tokens: ["t15_tk1", "t15_tk2", "t15_tk3", "t15_tk4"],
      correctIndices: [0, 1],
    },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
  }
];

