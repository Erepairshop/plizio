import type { PoolTopicDef } from "./types";

export const INFO_K6_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 1",
    t1_title: "Fortgeschrittene Textverarbeitung",
    t1_text: "In der professionellen Textverarbeitung nutzt man Formatvorlagen für ein einheitliches Design und automatische Inhaltsverzeichnisse.",
    t1_h1: "Formatvorlagen nutzen", t1_h2: "Inhaltsverzeichnis erstellen",
    t1_inst: "Ordne die Begriffe zu!",
    t1_q: "Wofür verwendet man Formatvorlagen?",
    t1_qa: "Einheitliches Design", t1_qb: "Bilder einfügen", t1_qc: "Drucken", t1_qd: "Speichern",
    
    t2_title: "Tabellenkalkulation Grundlagen",
    t2_text: "Tabellen bestehen aus Spalten (A, B, C...) und Zeilen (1, 2, 3...). Eine Zelle hat eine Adresse wie A1. Formeln beginnen immer mit einem Gleichheitszeichen.",
    t2_h1: "Zelladressen (z.B. B5)", t2_h2: "Formeln mit =",
    t2_inst: "Ergänze die Formel!",
    t2_q: "Mit welchem Zeichen beginnt jede Formel?",
    t2_qa: "=", t2_qb: "+", t2_qc: "#", t2_qd: "!",
    
    t3_title: "Präsentationsprogramme",
    t3_text: "Gute Präsentationen haben wenig Text pro Folie. Übergänge und Animationen sollten sparsam eingesetzt werden.",
    t3_h1: "Weniger ist mehr", t3_h2: "Übergänge & Animationen",
    t3_inst: "Was gehört zu einer guten Folie?",
    t3_q: "Was sollte man bei Folien vermeiden?",
    t3_qa: "Zu viel Text", t3_qb: "Bilder", t3_qc: "Überschriften", t3_qd: "Seitenzahlen",
    
    t4_title: "Bildbearbeitung",
    t4_text: "Bilder bestehen aus Pixeln oder Vektoren. Man kann Helligkeit, Kontrast und Sättigung anpassen oder Filter anwenden.",
    t4_h1: "Pixel vs. Vektoren", t4_h2: "Filter und Effekte",
    t4_inst: "Wähle das Werkzeug!",
    t4_q: "Was ist ein Pixel?",
    t4_qa: "Ein Bildpunkt", t4_qb: "Ein Dateiformat", t4_qc: "Ein Farbraum", t4_qd: "Ein Programm",
    
    t5_title: "Einführung in Datenbanken",
    t5_text: "Datenbanken speichern große Mengen an Informationen strukturiert in Tabellen. Jede Zeile ist ein Datensatz.",
    t5_h1: "Tabellen und Felder", t5_h2: "Datensätze",
    t5_inst: "Sortiere die Begriffe!",
    t5_q: "Was ist ein Datensatz in einer Tabelle?",
    t5_qa: "Eine Zeile", t5_qb: "Eine Spalte", t5_qc: "Eine Überschrift", t5_qd: "Die ganze Tabelle",
    
    t6_title: "Dateiformate",
    t6_text: "Verschiedene Dateitypen haben unterschiedliche Endungen: .txt für Text, .jpg für Bilder, .mp3 für Musik und .mp4 für Videos.",
    t6_h1: ".jpg, .png (Bilder)", t6_h2: ".pdf (Dokumente)",
    t6_inst: "Welches Format für was?",
    t6_q: "Welches Format wird meist für Musik genutzt?",
    t6_qa: ".mp3", t6_qb: ".docx", t6_qc: ".exe", t6_qd: ".zip",
    
    t7_title: "Datenkompression",
    t7_text: "Kompression macht Dateien kleiner, damit sie weniger Speicherplatz brauchen. Es gibt verlustfreie und verlustbehaftete Kompression.",
    t7_h1: "Dateigröße verringern", t7_h2: "ZIP-Archive",
    t7_inst: "Packe die Dateien!",
    t7_q: "Warum komprimiert man Dateien?",
    t7_qa: "Um Platz zu sparen", t7_qb: "Damit sie schöner aussehen", t7_qc: "Um sie zu löschen", t7_qd: "Damit sie schneller drucken",
    
    t8_title: "Drucken und Ausgabe",
    t8_text: "Bevor man druckt, prüft man die Druckvorschau. Man kann Seitenbereich, Kopien und Farbe oder Schwarz-Weiß wählen.",
    t8_h1: "Druckvorschau", t8_h2: "Druckereinstellungen",
    t8_inst: "Bereite den Druck vor!",
    t8_q: "Was kann man in den Druckeinstellungen NICHT wählen?",
    t8_qa: "Schriftart ändern", t8_qb: "Anzahl der Kopien", t8_qc: "Schwarz-Weiß", t8_qd: "Querformat",
    
    t9_title: "Computernetzwerke",
    t9_text: "Ein Netzwerk verbindet Computer, damit sie Daten austauschen können. Das größte Netzwerk ist das Internet.",
    t9_h1: "Datenaustausch", t9_h2: "Internet",
    t9_inst: "Verbinde die Computer!",
    t9_q: "Was ist der Hauptzweck eines Netzwerks?",
    t9_qa: "Kommunikation", t9_qb: "Strom sparen", t9_qc: "Spiele löschen", t9_qd: "Tastatur reinigen",
    
    t10_title: "LAN und WAN",
    t10_text: "LAN ist ein lokales Netzwerk (z.B. zu Hause). WAN ist ein weitreichendes Netzwerk, das Städte oder Länder verbindet.",
    t10_h1: "LAN (Lokal)", t10_h2: "WAN (Global)",
    t10_inst: "Lokal oder Weit?",
    t10_q: "Wofür steht LAN?",
    t10_qa: "Local Area Network", t10_qb: "Large Apple Network", t10_qc: "Long Area Node", t10_qd: "Link All Now",
    
    t11_title: "IP-Adresse",
    t11_text: "Jedes Gerät im Netzwerk braucht eine eindeutige Adresse, die IP-Adresse, um gefunden zu werden.",
    t11_h1: "Eindeutige Identifikation", t11_h2: "IPv4 und IPv6",
    t11_inst: "Finde die richtige IP!",
    t11_q: "Was ist eine IP-Adresse?",
    t11_qa: "Eine Netzwerk-Adresse", t11_qb: "Ein Passwort", t11_qc: "Ein Benutzername", t11_qd: "Ein Dateiname",
    
    t12_title: "Router und Switches",
    t12_text: "Ein Switch verbindet Geräte im LAN. Ein Router verbindet verschiedene Netzwerke miteinander, z.B. dein Heimnetz mit dem Internet.",
    t12_h1: "Router = Wegweiser", t12_h2: "Switch = Verteiler",
    t12_inst: "Verteile die Daten!",
    t12_q: "Welches Gerät verbindet dein Haus mit dem Internet?",
    t12_qa: "Router", t12_qb: "Maus", t12_qc: "Monitor", t12_qd: "Drucker",
    
    t13_title: "WiFi und Ethernet",
    t13_text: "Computer können per Kabel (Ethernet) oder kabellos (WiFi/WLAN) mit dem Netzwerk verbunden werden.",
    t13_h1: "Kabel vs. Funk", t13_h2: "Stabilität und Speed",
    t13_inst: "Kabel oder Funk?",
    t13_q: "Was ist meist stabiler?",
    t13_qa: "Ethernet (Kabel)", t13_qb: "WiFi (Funk)", t13_qc: "Bluetooth", t13_qd: "Infrarot",
    
    t14_title: "Cloud Computing",
    t14_text: "In der Cloud speichert man Daten auf entfernten Servern im Internet statt nur auf der eigenen Festplatte.",
    t14_h1: "Speicher im Internet", t14_h2: "Überall verfügbar",
    t14_inst: "Lade es hoch!",
    t14_q: "Wo liegen Dateien, wenn sie 'in der Cloud' sind?",
    t14_qa: "Auf Internet-Servern", t14_qb: "In den Wolken", t14_qc: "Nur auf dem USB-Stick", t14_qd: "Im Papierkorb",
    
    t15_title: "Online Zusammenarbeit",
    t15_text: "Durch Online-Tools können mehrere Personen gleichzeitig am selben Dokument arbeiten, egal wo sie sind.",
    t15_h1: "Gleichzeitiges Arbeiten", t15_h2: "Gemeinsame Dokumente",
    t15_inst: "Arbeitet zusammen!",
    t15_q: "Was ist ein Vorteil von Online-Zusammenarbeit?",
    t15_qa: "Echtzeit-Editieren", t15_qb: "Man braucht kein Internet", t15_qc: "Es kostet immer Geld", t15_qd: "Der Computer wird schneller",
  },
  en: {
    explorer_title: "Informatics Explorer 1",
    t1_title: "Advanced Word Processing",
    t1_text: "Professional word processing uses styles for consistent design and automatic tables of contents.",
    t1_h1: "Using styles", t1_h2: "Create Table of Contents",
    t1_inst: "Match the terms!",
    t1_q: "What are styles used for?",
    t1_qa: "Consistent design", t1_qb: "Inserting images", t1_qc: "Printing", t1_qd: "Saving",
    
    t2_title: "Spreadsheet Basics",
    t2_text: "Spreadsheets consist of columns (A, B, C...) and rows (1, 2, 3...). A cell has an address like A1. Formulas always start with an equals sign.",
    t2_h1: "Cell addresses (e.g., B5)", t2_h2: "Formulas with =",
    t2_inst: "Complete the formula!",
    t2_q: "What character starts every formula?",
    t2_qa: "=", t2_qb: "+", t2_qc: "#", t2_qd: "!",
    
    t3_title: "Presentation Software",
    t3_text: "Good presentations have little text per slide. Transitions and animations should be used sparingly.",
    t3_h1: "Less is more", t3_h2: "Transitions & Animations",
    t3_inst: "What belongs on a good slide?",
    t3_q: "What should you avoid on slides?",
    t3_qa: "Too much text", t3_qb: "Images", t3_qc: "Headings", t3_qd: "Page numbers",
    
    t4_title: "Image Editing",
    t4_text: "Images consist of pixels or vectors. You can adjust brightness, contrast, and saturation or apply filters.",
    t4_h1: "Pixels vs. Vectors", t4_h2: "Filters and effects",
    t4_inst: "Choose the tool!",
    t4_q: "What is a pixel?",
    t4_qa: "A picture element", t4_qb: "A file format", t4_qc: "A color space", t4_qd: "A program",
    
    t5_title: "Introduction to Databases",
    t5_text: "Databases store large amounts of information structured in tables. Each row is a record.",
    t5_h1: "Tables and fields", t5_h2: "Records",
    t5_inst: "Sort the terms!",
    t5_q: "What is a record in a table?",
    t5_qa: "A row", t5_qb: "A column", t5_qc: "A heading", t5_qd: "The whole table",
    
    t6_title: "File Formats",
    t6_text: "Different file types have different extensions: .txt for text, .jpg for images, .mp3 for music, and .mp4 for videos.",
    t6_h1: ".jpg, .png (Images)", t6_h2: ".pdf (Documents)",
    t6_inst: "Which format for what?",
    t6_q: "Which format is mostly used for music?",
    t6_qa: ".mp3", t6_qb: ".docx", t6_qc: ".exe", t6_qd: ".zip",
    
    t7_title: "Data Compression",
    t7_text: "Compression makes files smaller so they take up less storage space. There is lossless and lossy compression.",
    t7_h1: "Reduce file size", t7_h2: "ZIP archives",
    t7_inst: "Pack the files!",
    t7_q: "Why do we compress files?",
    t7_qa: "To save space", t7_qb: "To make them look better", t7_qc: "To delete them", t7_qd: "To print faster",
    
    t8_title: "Printing and Output",
    t8_text: "Before printing, check the print preview. You can choose page range, copies, and color or black and white.",
    t8_h1: "Print preview", t8_h2: "Printer settings",
    t8_inst: "Prepare the print!",
    t8_q: "What can you NOT choose in print settings?",
    t8_qa: "Change font", t8_qb: "Number of copies", t8_qc: "Black and white", t8_qd: "Landscape mode",
    
    t9_title: "Computer Networks",
    t9_text: "A network connects computers so they can exchange data. The largest network is the Internet.",
    t9_h1: "Data exchange", t9_h2: "Internet",
    t9_inst: "Connect the computers!",
    t9_q: "What is the main purpose of a network?",
    t9_qa: "Communication", t9_qb: "Save power", t9_qc: "Delete games", t9_qd: "Clean keyboard",
    
    t10_title: "LAN and WAN",
    t10_text: "LAN is a local area network (e.g., at home). WAN is a wide area network connecting cities or countries.",
    t10_h1: "LAN (Local)", t10_h2: "WAN (Global)",
    t10_inst: "Local or Wide?",
    t10_q: "What does LAN stand for?",
    t10_qa: "Local Area Network", t10_qb: "Large Apple Network", t10_qc: "Long Area Node", t10_qd: "Link All Now",
    
    t11_title: "IP Address",
    t11_text: "Every device in the network needs a unique address, the IP address, to be found.",
    t11_h1: "Unique identification", t11_h2: "IPv4 and IPv6",
    t11_inst: "Find the correct IP!",
    t11_q: "What is an IP address?",
    t11_qa: "A network address", t11_qb: "A password", t11_qc: "A username", t11_qd: "A filename",
    
    t12_title: "Routers and Switches",
    t12_text: "A switch connects devices in the LAN. A router connects different networks together, e.g., your home network to the Internet.",
    t12_h1: "Router = Guide", t12_h2: "Switch = Distributor",
    t12_inst: "Distribute the data!",
    t12_q: "Which device connects your house to the Internet?",
    t12_qa: "Router", t12_qb: "Mouse", t12_qc: "Monitor", t12_qd: "Printer",
    
    t13_title: "WiFi and Ethernet",
    t13_text: "Computers can be connected to the network via cable (Ethernet) or wirelessly (WiFi/WLAN).",
    t13_h1: "Cable vs. Wireless", t13_h2: "Stability and Speed",
    t13_inst: "Cable or Wireless?",
    t13_q: "What is usually more stable?",
    t13_qa: "Ethernet (Cable)", t13_qb: "WiFi (Wireless)", t13_qc: "Bluetooth", t13_qd: "Infrared",
    
    t14_title: "Cloud Computing",
    t14_text: "In the cloud, you store data on remote servers on the Internet instead of just on your own hard drive.",
    t14_h1: "Online storage", t14_h2: "Available everywhere",
    t14_inst: "Upload it!",
    t14_q: "Where are files located when they are 'in the cloud'?",
    t14_qa: "On Internet servers", t14_qb: "In the clouds", t14_qc: "Only on the USB stick", t14_qd: "In the trash",
    
    t15_title: "Online Collaboration",
    t15_text: "Online tools allow multiple people to work on the same document at the same time, no matter where they are.",
    t15_h1: "Simultaneous work", t15_h2: "Shared documents",
    t15_inst: "Work together!",
    t15_q: "What is an advantage of online collaboration?",
    t15_qa: "Real-time editing", t15_qb: "No internet needed", t15_qc: "It always costs money", t15_qd: "Computer gets faster",
  },
  hu: {
    explorer_title: "Informatika Felfedező 1",
    t1_title: "Haladó szövegszerkesztés",
    t1_text: "A professzionális szövegszerkesztés során stílusokat használunk az egységes megjelenéshez és az automatikus tartalomjegyzékhez.",
    t1_h1: "Stílusok használata", t1_h2: "Tartalomjegyzék készítése",
    t1_inst: "Párosítsd a fogalmakat!",
    t1_q: "Mire használjuk a stílusokat?",
    t1_qa: "Egységes kinézet", t1_qb: "Képek beszúrása", t1_qc: "Nyomtatás", t1_qd: "Mentés",
    
    t2_title: "Táblázatkezelés alapjai",
    t2_text: "A táblázatok oszlopokból (A, B, C...) és sorokból (1, 2, 3...) állnak. Egy cellának címe van, például A1. A képletek mindig egyenlőségjellel kezdődnek.",
    t2_h1: "Cellacímek (pl. B5)", t2_h2: "Képletek = jellel",
    t2_inst: "Egészítsd ki a képletet!",
    t2_q: "Milyen jellel kezdődik minden képlet?",
    t2_qa: "=", t2_qb: "+", t2_qc: "#", t2_qd: "!",
    
    t3_title: "Prezentációs szoftverek",
    t3_text: "A jó prezentációban diánként kevés szöveg van. Az átmeneteket és animációkat mértékkel kell használni.",
    t3_h1: "A kevesebb több", t3_h2: "Átmenetek és animációk",
    t3_inst: "Mi tartozik egy jó diára?",
    t3_q: "Mit érdemes elkerülni a diákon?",
    t3_qa: "Túl sok szöveg", t3_qb: "Képek", t3_qc: "Címsorok", t3_qd: "Oldalszámok",
    
    t4_title: "Képszerkesztés",
    t4_text: "A képek pixelekből vagy vektorokból állnak. Állíthatjuk a fényerőt, kontrasztot és telítettséget, vagy szűrőket alkalmazhatunk.",
    t4_h1: "Pixel vs. Vektor", t4_h2: "Szűrők és effektusok",
    t4_inst: "Válaszd ki az eszközt!",
    t4_q: "Mi az a pixel?",
    t4_qa: "Egy képpont", t4_qb: "Egy fájlformátum", t4_qc: "Egy színtér", t4_qd: "Egy program",
    
    t5_title: "Bevezetés az adatbázisokba",
    t5_text: "Az adatbázisok nagy mennyiségű információt tárolnak strukturáltan, táblázatokban. Minden sor egy rekord.",
    t5_h1: "Táblák és mezők", t5_h2: "Rekordok",
    t5_inst: "Rendezd a fogalmakat!",
    t5_q: "Mi a rekord egy táblázatban?",
    t5_qa: "Egy sor", t5_qb: "Egy oszlop", t5_qc: "Egy fejléc", t5_qd: "Az egész táblázat",
    
    t6_title: "Fájlformátumok",
    t6_text: "A különböző fájltípusoknak eltérő kiterjesztéseik vannak: .txt szöveghez, .jpg képekhez, .mp3 zenéhez és .mp4 videókhoz.",
    t6_h1: ".jpg, .png (Képek)", t6_h2: ".pdf (Dokumentumok)",
    t6_inst: "Melyik formátum mihez való?",
    t6_q: "Melyik formátumot használják leggyakrabban zenéhez?",
    t6_qa: ".mp3", t6_qb: ".docx", t6_qc: ".exe", t6_qd: ".zip",
    
    t7_title: "Adattömörítés",
    t7_text: "A tömörítés kisebbé teszi a fájlokat, hogy kevesebb helyet foglaljanak. Létezik veszteségmentes és veszteséges tömörítés.",
    t7_h1: "Fájlméret csökkentése", t7_h2: "ZIP archívumok",
    t7_inst: "Csomagold be a fájlokat!",
    t7_q: "Miért tömörítünk fájlokat?",
    t7_qa: "Helytakarékosság", t7_qb: "Hogy szebben nézzenek ki", t7_qc: "Hogy töröljük őket", t7_qd: "Hogy gyorsabban nyomtassunk",
    
    t8_title: "Nyomtatás és kimenet",
    t8_text: "Nyomtatás előtt ellenőrizzük a nyomtatási képet. Kiválaszthatjuk az oldaltartományt, a példányszámot és a színt.",
    t8_h1: "Nyomtatási kép", t8_h2: "Nyomtatóbeállítások",
    t8_inst: "Készítsd elő a nyomtatást!",
    t8_q: "Mit NEM lehet kiválasztani a nyomtatási beállításokban?",
    t8_qa: "Betűtípus módosítása", t8_qb: "Példányszám", t8_qc: "Fekete-fehér", t8_qd: "Fekvő tájolás",
    
    t9_title: "Számítógépes hálózatok",
    t9_text: "A hálózat összeköti a számítógépeket az adatcsere érdekében. A legnagyobb hálózat az internet.",
    t9_h1: "Adatcsere", t9_h2: "Internet",
    t9_inst: "Kösd össze a gépeket!",
    t9_q: "Mi a hálózat fő célja?",
    t9_qa: "Kommunikáció", t9_qb: "Árammegtakarítás", t9_qc: "Játékok törlése", t9_qd: "Billentyűzettisztítás",
    
    t10_title: "LAN és WAN",
    t10_text: "A LAN egy helyi hálózat (pl. otthon). A WAN egy kiterjedt hálózat, amely városokat vagy országokat köt össze.",
    t10_h1: "LAN (Helyi)", t10_h2: "WAN (Globális)",
    t10_inst: "Helyi vagy Távoli?",
    t10_q: "Mit jelent a LAN?",
    t10_qa: "Local Area Network", t10_qb: "Large Apple Network", t10_qc: "Long Area Node", t10_qd: "Link All Now",
    
    t11_title: "IP-cím",
    t11_text: "A hálózat minden eszközének egyedi címre, az IP-címre van szüksége a megtaláláshoz.",
    t11_h1: "Egyedi azonosítás", t11_h2: "IPv4 és IPv6",
    t11_inst: "Keresd meg a helyes IP-t!",
    t11_q: "Mi az az IP-cím?",
    t11_qa: "Egy hálózati cím", t11_qb: "Egy jelszó", t11_qc: "Egy felhasználónév", t11_qd: "Egy fájlnév",
    
    t12_title: "Routerek és switchek",
    t12_text: "A switch az eszközöket köti össze a LAN-on belül. A router különböző hálózatokat köt össze, pl. az otthonit az internettel.",
    t12_h1: "Router = Útválasztó", t12_h2: "Switch = Elosztó",
    t12_inst: "Osztd el az adatokat!",
    t12_q: "Melyik eszköz köti össze a házat az internettel?",
    t12_qa: "Router", t12_qb: "Egér", t12_qc: "Monitor", t12_qd: "Nyomtató",
    
    t13_title: "WiFi és Ethernet",
    t13_text: "A számítógépek kábellel (Ethernet) vagy vezeték nélkül (WiFi/WLAN) csatlakozhatnak a hálózathoz.",
    t13_h1: "Kábel vs. Rádiójel", t13_h2: "Stabilitás és sebesség",
    t13_inst: "Kábel vagy WiFi?",
    t13_q: "Melyik általában stabilabb?",
    t13_qa: "Ethernet (Kábel)", t13_qb: "WiFi (Rádiójel)", t13_qc: "Bluetooth", t13_qd: "Infravörös",
    
    t14_title: "Felhő alapú számítástechnika",
    t14_text: "A felhőben az adatokat távoli internetes szervereken tároljuk a saját merevlemezünk helyett.",
    t14_h1: "Internetes tárhely", t14_h2: "Bárhonnan elérhető",
    t14_inst: "Töltsd fel!",
    t14_q: "Hol vannak a fájlok, ha 'a felhőben' vannak?",
    t14_qa: "Internetes szervereken", t14_qb: "A felhőkben", t14_qc: "Csak az USB-n", t14_qd: "A kukában",
    
    t15_title: "Online együttműködés",
    t15_text: "Az online eszközök lehetővé teszik, hogy többen dolgozzanak ugyanazon a dokumentumon egyszerre, bárhol is legyenek.",
    t15_h1: "Egyidejű munkavégzés", t15_h2: "Megosztott dokumentumok",
    t15_inst: "Dolgozzatok együtt!",
    t15_q: "Mi az online együttműködés előnye?",
    t15_qa: "Valós idejű szerkesztés", t15_qb: "Nem kell internet", t15_qc: "Mindig pénzbe kerül", t15_qd: "Gyorsabb lesz a gép",
  },
  ro: {
    explorer_title: "Explorator Informatică 1",
    t1_title: "Procesare text avansată",
    t1_text: "În procesarea profesională a textului, se folosesc stiluri pentru un design unitar și cuprinsuri automate.",
    t1_h1: "Utilizarea stilurilor", t1_h2: "Crearea cuprinsului",
    t1_inst: "Potrivește termenii!",
    t1_q: "Pentru ce se folosesc stilurile?",
    t1_qa: "Design unitar", t1_qb: "Inserare imagini", t1_qc: "Imprimare", t1_qd: "Salvare",
    
    t2_title: "Bazele calculului tabelar",
    t2_text: "Tabelele constau din coloane (A, B, C...) și rânduri (1, 2, 3...). O celulă are o adresă precum A1. Formulele încep întotdeauna cu semnul egal.",
    t2_h1: "Adrese de celule (ex. B5)", t2_h2: "Formule cu =",
    t2_inst: "Completează formula!",
    t2_q: "Cu ce semn începe fiecare formulă?",
    t2_qa: "=", t2_qb: "+", t2_qc: "#", t2_qd: "!",
    
    t3_title: "Programe de prezentare",
    t3_text: "Prezentările bune au puțin text pe fiecare diapozitiv. Tranzițiile și animațiile trebuie folosite cu măsură.",
    t3_h1: "Mai puțin înseamnă mai mult", t3_h2: "Tranziții și animații",
    t3_inst: "Ce aparține unui diapozitiv bun?",
    t3_q: "Ce ar trebui evitat pe diapozitive?",
    t3_qa: "Prea mult text", t3_qb: "Imagini", t3_qc: "Titluri", t3_qd: "Numere de pagină",
    
    t4_title: "Editare imagine",
    t4_text: "Imaginile constau din pixeli sau vectori. Se pot ajusta luminozitatea, contrastul și saturația sau se pot aplica filtre.",
    t4_h1: "Pixeli vs. Vectori", t4_h2: "Filtre și efecte",
    t4_inst: "Alege instrumentul!",
    t4_q: "Ce este un pixel?",
    t4_qa: "Un punct de imagine", t4_qb: "Un format de fișier", t4_qc: "Un spațiu de culoare", t4_qd: "Un program",
    
    t5_title: "Introducere în baze de date",
    t5_text: "Bazele de date stochează cantități mari de informații structurate în tabele. Fiecare rând este o înregistrare.",
    t5_h1: "Tabele și câmpuri", t5_h2: "Înregistrări",
    t5_inst: "Sortează termenii!",
    t5_q: "Ce este o înregistrare într-un tabel?",
    t5_qa: "Un rând", t5_qb: "O coloană", t5_qc: "Un antet", t5_qd: "Tot tabelul",
    
    t6_title: "Formate de fișiere",
    t6_text: "Diferitele tipuri de fișiere au extensii diferite: .txt pentru text, .jpg pentru imagini, .mp3 pentru muzică și .mp4 pentru videoclipuri.",
    t6_h1: ".jpg, .png (Imagini)", t6_h2: ".pdf (Documente)",
    t6_inst: "Care format pentru ce?",
    t6_q: "Care format este folosit cel mai mult pentru muzică?",
    t6_qa: ".mp3", t6_qb: ".docx", t6_qc: ".exe", t6_qd: ".zip",
    
    t7_title: "Compresia datelor",
    t7_text: "Compresia face fișierele mai mici, astfel încât să ocupe mai puțin spațiu de stocare. Există compresie fără pierderi și cu pierderi.",
    t7_h1: "Reducerea dimensiunii", t7_h2: "Arhive ZIP",
    t7_inst: "Împachetează fișierele!",
    t7_q: "De ce comprimăm fișierele?",
    t7_qa: "Pentru a economisi spațiu", t7_qb: "Pentru a arăta mai bine", t7_qc: "Pentru a le șterge", t7_qd: "Pentru a imprima mai repede",
    
    t8_title: "Imprimare și ieșire",
    t8_text: "Înainte de a imprima, verifică previzualizarea. Poți alege intervalul de pagini, numărul de copii și culoarea.",
    t8_h1: "Previzualizare", t8_h2: "Setări imprimantă",
    t8_inst: "Pregătește imprimarea!",
    t8_q: "Ce NU poți alege în setările de imprimare?",
    t8_qa: "Schimbarea fontului", t8_qb: "Numărul de copii", t8_qc: "Alb-negru", t8_qd: "Mod peisaj",
    
    t9_title: "Rețele de calculatoare",
    t9_text: "O rețea conectează calculatoarele pentru ca acestea să poată schimba date. Cea mai mare rețea este internetul.",
    t9_h1: "Schimb de date", t9_h2: "Internet",
    t9_inst: "Conectează calculatoarele!",
    t9_q: "Care este scopul principal al unei rețele?",
    t9_qa: "Comunicarea", t9_qb: "Economisirea curentului", t9_qc: "Ștergerea jocurilor", t9_qd: "Curățarea tastaturii",
    
    t10_title: "LAN și WAN",
    t10_text: "LAN este o rețea locală (ex. acasă). WAN este o rețea extinsă care conectează orașe sau țări.",
    t10_h1: "LAN (Local)", t10_h2: "WAN (Global)",
    t10_inst: "Local sau la distanță?",
    t10_q: "De la ce vine LAN?",
    t10_qa: "Local Area Network", t10_qb: "Large Apple Network", t10_qc: "Long Area Node", t10_qd: "Link All Now",
    
    t11_title: "Adresă IP",
    t11_text: "Fiecare dispozitiv din rețea are nevoie de o adresă unică, adresa IP, pentru a fi găsit.",
    t11_h1: "Identificare unică", t11_h2: "IPv4 și IPv6",
    t11_inst: "Găsește IP-ul corect!",
    t11_q: "Ce este o adresă IP?",
    t11_qa: "O adresă de rețea", t11_qb: "O parolă", t11_qc: "Un nume de utilizator", t11_qd: "Un nume de fișier",
    
    t12_title: "Routere și switch-uri",
    t12_text: "Un switch conectează dispozitivele în LAN. Un router conectează rețele diferite, ex. rețeaua de acasă cu internetul.",
    t12_h1: "Router = Ghid", t12_h2: "Switch = Distribuitor",
    t12_inst: "Distribuie datele!",
    t12_q: "Care dispozitiv conectează casa ta la internet?",
    t12_qa: "Router", t12_qb: "Mouse", t12_qc: "Monitor", t12_qd: "Imprimantă",
    
    t13_title: "WiFi și Ethernet",
    t13_text: "Calculatoarele pot fi conectate la rețea prin cablu (Ethernet) sau fără fir (WiFi/WLAN).",
    t13_h1: "Cablu vs. Wireless", t13_h2: "Stabilitate și viteză",
    t13_inst: "Cablu sau Wireless?",
    t13_q: "Ce este de obicei mai stabil?",
    t13_qa: "Ethernet (Cablu)", t13_qb: "WiFi (Wireless)", t13_qc: "Bluetooth", t13_qd: "Infraroșu",
    
    t14_title: "Cloud Computing",
    t14_text: "În cloud, stochezi date pe servere la distanță de pe internet în loc de propria unitate de stocare.",
    t14_h1: "Stocare online", t14_h2: "Disponibil oriunde",
    t14_inst: "Încarcă!",
    t14_q: "Unde se află fișierele când sunt 'în cloud'?",
    t14_qa: "Pe servere de internet", t14_qb: "În nori", t14_qc: "Doar pe stick-ul USB", t14_qd: "În coșul de gunoi",
    
    t15_title: "Colaborare online",
    t15_text: "Instrumentele online permit mai multor persoane să lucreze la același document în același timp, indiferent unde se află.",
    t15_h1: "Lucru simultan", t15_h2: "Documente partajate",
    t15_inst: "Lucrați împreună!",
    t15_q: "Care este un avantaj al colaborării online?",
    t15_qa: "Editare în timp real", t15_qb: "Nu e nevoie de internet", t15_qc: "Costă întotdeauna bani", t15_qd: "Calculatorul devine mai rapid",
  },
};

export const INFO_K6_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    bulletKeys: ["t1_h1", "t1_h2"],
    svg: { type: "simple-icon", icon: "📝", color: "#4F46E5" },
    interactive: {
      type: "match-pairs",
      instruction: "t1_inst",
      pairs: [
        { left: "Formatvorlage", right: "Design" },
        { left: "Inhaltsverzeichnis", right: "Struktur" },
        { left: "Kopfzeile", right: "Seitenzahl" }
      ]
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    bulletKeys: ["t2_h1", "t2_h2"],
    svg: { type: "simple-icon", icon: "📊", color: "#10B981" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst",
      sentence: "___A1 + B1",
      choices: ["=", "+", "#", "!"],
      correctIndex: 0
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    bulletKeys: ["t3_h1", "t3_h2"],
    svg: { type: "simple-icon", icon: "📽️", color: "#F59E0B" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t3_inst",
      buckets: [
        { id: "good", label: "Gut" },
        { id: "bad", label: "Schlecht" }
      ],
      items: [
        { text: "Wenig Text", bucketId: "good" },
        { text: "Bilder", bucketId: "good" },
        { text: "Ganze Sätze", bucketId: "bad" },
        { text: "Zu bunte Farben", bucketId: "bad" }
      ]
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    bulletKeys: ["t4_h1", "t4_h2"],
    svg: { type: "simple-icon", icon: "🎨", color: "#EC4899" },
    interactive: {
      type: "match-pairs",
      instruction: "t4_inst",
      pairs: [
        { left: "Helligkeit", right: "Licht" },
        { left: "Sättigung", right: "Farbe" },
        { left: "Kontrast", right: "Unterschied" }
      ]
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    bulletKeys: ["t5_h1", "t5_h2"],
    svg: { type: "simple-icon", icon: "🗄️", color: "#6366F1" },
    interactive: {
      type: "match-pairs",
      instruction: "t5_inst",
      pairs: [
        { left: "Tabelle", right: "Struktur" },
        { left: "Zeile", right: "Datensatz" },
        { left: "Spalte", right: "Feld" }
      ]
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    bulletKeys: ["t6_h1", "t6_h2"],
    svg: { type: "simple-icon", icon: "📁", color: "#8B5CF6" },
    interactive: {
      type: "match-pairs",
      instruction: "t6_inst",
      pairs: [
        { left: "Bild", right: ".jpg" },
        { left: "Musik", right: ".mp3" },
        { left: "Dokument", right: ".pdf" }
      ]
    },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    bulletKeys: ["t7_h1", "t7_h2"],
    svg: { type: "simple-icon", icon: "📦", color: "#F43F5E" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t7_inst",
      buckets: [
        { id: "zip", label: "ZIP" },
        { id: "normal", label: "Normal" }
      ],
      items: [
        { text: "Groß", bucketId: "normal" },
        { text: "Komprimiert", bucketId: "zip" },
        { text: "Platzsparend", bucketId: "zip" }
      ]
    },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    bulletKeys: ["t8_h1", "t8_h2"],
    svg: { type: "simple-icon", icon: "🖨️", color: "#3B82F6" },
    interactive: {
      type: "match-pairs",
      instruction: "t8_inst",
      pairs: [
        { left: "Vorschau", right: "Prüfen" },
        { left: "Kopien", right: "Anzahl" },
        { left: "Format", right: "Quer/Hoch" }
      ]
    },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    bulletKeys: ["t9_h1", "t9_h2"],
    svg: { type: "simple-icon", icon: "🌐", color: "#06B6D4" },
    interactive: {
      type: "match-pairs",
      instruction: "t9_inst",
      pairs: [
        { left: "Computer", right: "Knoten" },
        { left: "Internet", right: "Global" },
        { left: "Daten", right: "Pakete" }
      ]
    },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    bulletKeys: ["t10_h1", "t10_h2"],
    svg: { type: "simple-icon", icon: "🏠", color: "#22C55E" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t10_inst",
      buckets: [
        { id: "lan", label: "LAN" },
        { id: "wan", label: "WAN" }
      ],
      items: [
        { text: "Haus", bucketId: "lan" },
        { text: "Schule", bucketId: "lan" },
        { text: "Welt", bucketId: "wan" },
        { text: "Länder", bucketId: "wan" }
      ]
    },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    bulletKeys: ["t11_h1", "t11_h2"],
    svg: { type: "simple-icon", icon: "📍", color: "#EF4444" },
    interactive: {
      type: "highlight-text",
      instruction: "t11_inst",
      tokens: ["192.168.1.1", "hallo", "abc.def", "8.8.8.8"],
      correctIndices: [0, 3]
    },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    bulletKeys: ["t12_h1", "t12_h2"],
    svg: { type: "simple-icon", icon: "🚥", color: "#F97316" },
    interactive: {
      type: "match-pairs",
      instruction: "t12_inst",
      pairs: [
        { left: "Switch", right: "LAN" },
        { left: "Router", right: "Internet" },
        { left: "Modem", right: "Signal" }
      ]
    },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    bulletKeys: ["t13_h1", "t13_h2"],
    svg: { type: "simple-icon", icon: "📶", color: "#14B8A6" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t13_inst",
      buckets: [
        { id: "wifi", label: "WiFi" },
        { id: "cable", label: "Ethernet" }
      ],
      items: [
        { text: "Kabellos", bucketId: "wifi" },
        { text: "Kabel", bucketId: "cable" },
        { text: "Funk", bucketId: "wifi" },
        { text: "Stecker", bucketId: "cable" }
      ]
    },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    bulletKeys: ["t14_h1", "t14_h2"],
    svg: { type: "simple-icon", icon: "☁️", color: "#60A5FA" },
    interactive: {
      type: "match-pairs",
      instruction: "t14_inst",
      pairs: [
        { left: "Lokal", right: "Festplatte" },
        { left: "Cloud", right: "Server" },
        { left: "Offline", right: "Kein Netz" }
      ]
    },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    bulletKeys: ["t15_h1", "t15_h2"],
    svg: { type: "simple-icon", icon: "👥", color: "#A855F7" },
    interactive: {
      type: "match-pairs",
      instruction: "t15_inst",
      pairs: [
        { left: "Teilen", right: "Link" },
        { left: "Gleichzeitig", right: "Echtzeit" },
        { left: "Kommentar", right: "Feedback" }
      ]
    },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
