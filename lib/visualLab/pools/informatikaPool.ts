import { 
  Language, 
  ArtikelAsteroidsRound, 
  SatzbauSniperRound, 
  WortWaechterRound,
  TippSturmRound
} from "../languageTypes";

export interface InformatikaGradePool {
  grade: number;
  binaryAsteroids: ArtikelAsteroidsRound[];
  hardwareSort: ArtikelAsteroidsRound[];
  algorithmSniper: SatzbauSniperRound[];
  termGuardian: WortWaechterRound[];
  securitySturm: TippSturmRound[];
}

const THEMES = {
  binary: { bg: "#020617", accent: "#38bdf8" },
  hardware: { bg: "#1e1b4b", accent: "#818cf8" },
  algorithm: { bg: "#064e3b", accent: "#34d399" },
  guardian: { bg: "#312e81", accent: "#a78bfa" },
  security: { bg: "#450a0a", accent: "#f87171" }
};

export const INFORMATIKA_POOLS: Record<Language, Record<number, InformatikaGradePool>> = {
  hu: {
    5: {
      grade: 5,
      binaryAsteroids: [
        { id: "hu-bin-5-1", title: "Bináris alapok", instruction: "Melyik bit jelöli az állapotot?", words: [{ word: "Bekapcsolva", article: "1" }, { word: "Kikapcsolva", article: "0" }, { word: "Van áram", article: "1" }, { word: "Nincs áram", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "hu-bin-5-2", title: "Logikai értékek", instruction: "Válaszd ki a biteket!", words: [{ word: "Igaz", article: "1" }, { word: "Hamis", article: "0" }, { word: "Igen", article: "1" }, { word: "Nem", article: "0" }], categories: ["0", "1"], theme: THEMES.binary }
      ],
      hardwareSort: [
        { id: "hu-hw-5-1", title: "Perifériák", instruction: "Input vagy Output?", words: [{ word: "Egér", article: "Input" }, { word: "Monitor", article: "Output" }, { word: "Billentyűzet", article: "Input" }, { word: "Nyomtató", article: "Output" }, { word: "Scanner", article: "Input" }, { word: "Hangszóró", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware }
      ],
      algorithmSniper: [
        { id: "hu-alg-5-1", title: "Bejelentkezés", instruction: "Sorrendezd a lépéseket!", words: ["Gép bekapcsolása", "Felhasználónév", "Jelszó", "Enter lenyomása"], correctOrder: ["Gép bekapcsolása", "Felhasználónév", "Jelszó", "Enter lenyomása"], theme: THEMES.algorithm }
      ],
      termGuardian: [
        { id: "hu-tg-5-1", title: "Hardver-őr", instruction: "Csak hardvert engedj át!", targetWord: "Hardver", wrongWords: ["Windows", "Paint", "Játék", "Word", "Böngésző"], theme: THEMES.guardian }
      ],
      securitySturm: [
        { id: "hu-sec-5-1", title: "Fájlformátumok", instruction: "Jegyezd meg a képfájlokat!", words: ["foto.jpg", "kep.png", "rajz.bmp"], flashDuration: 2000, theme: THEMES.security }
      ]
    },
    6: {
      grade: 6,
      binaryAsteroids: [
        { id: "hu-bin-6-1", title: "Mértékegységek", instruction: "Bit vagy Byte?", words: [{ word: "8 bit", article: "Byte" }, { word: "Legkisebb", article: "Bit" }, { word: "Karakter", article: "Byte" }, { word: "0 vagy 1", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary }
      ],
      hardwareSort: [
        { id: "hu-hw-6-1", title: "Tárolók", instruction: "Mágneses vagy Optikai?", words: [{ word: "Merevlemez", article: "Mágneses" }, { word: "CD", article: "Optikai" }, { word: "DVD", article: "Optikai" }, { word: "Floppy", article: "Mágneses" }], categories: ["Mágneses", "Optikai"], theme: THEMES.hardware }
      ],
      algorithmSniper: [
        { id: "hu-alg-6-1", title: "Ciklusok", instruction: "Építs ciklust!", words: ["Ismételd", "10 alkalommal", "Lépj előre", "Ciklus vége"], correctOrder: ["Ismételd", "10 alkalommal", "Lépj előre", "Ciklus vége"], theme: THEMES.algorithm }
      ],
      termGuardian: [
        { id: "hu-tg-6-1", title: "Net-szótár", instruction: "Csak internetes fogalmak!", targetWord: "Net", wrongWords: ["Egér", "Alaplap", "Tápegység", "Ház"], theme: THEMES.guardian }
      ],
      securitySturm: [
        { id: "hu-sec-6-1", title: "Jelszó-biztonság", instruction: "Jó jelszó elemei!", words: ["Nagybetű", "Szám", "Speciális karakter"], flashDuration: 2500, theme: THEMES.security }
      ]
    },
    7: {
      grade: 7,
      binaryAsteroids: [
        { id: "hu-bin-7-1", title: "Kettes hatványok", instruction: "Érték keresése", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }, { word: "2^5", article: "32" }, { word: "2^7", article: "128" }], categories: ["1", "8", "32", "128"], theme: THEMES.binary }
      ],
      hardwareSort: [
        { id: "hu-hw-7-1", title: "Processzor vs Memória", instruction: "Melyik hova tartozik?", words: [{ word: "ALU", article: "CPU" }, { word: "Regiszter", article: "CPU" }, { word: "RAM", article: "Memória" }, { word: "ROM", article: "Memória" }], categories: ["CPU", "Memória"], theme: THEMES.hardware }
      ],
      algorithmSniper: [
        { id: "hu-alg-7-1", title: "Elágazások", instruction: "Ha-Akkor szerkezet", words: ["Ha feltétel", "Akkor művelet", "Különben", "Másik művelet"], correctOrder: ["Ha feltétel", "Akkor művelet", "Különben", "Másik művelet"], theme: THEMES.algorithm }
      ],
      termGuardian: [
        { id: "hu-tg-7-1", title: "Rendszerszoftver", instruction: "Csak operációs rendszerek!", targetWord: "OS", wrongWords: ["Chrome", "Word", "Facebook", "VLC"], theme: THEMES.guardian }
      ],
      securitySturm: [
        { id: "hu-sec-7-1", title: "Vírustan", instruction: "Jegyezd meg a típusokat!", words: ["Trójai", "Féreg", "Zsarolóvírus"], flashDuration: 2000, theme: THEMES.security }
      ]
    },
    8: {
      grade: 8,
      binaryAsteroids: [
        { id: "hu-bin-8-1", title: "4-bit számolás", instruction: "Decimális érték?", words: [{ word: "1010", article: "10" }, { word: "1100", article: "12" }, { word: "1111", article: "15" }, { word: "0101", article: "5" }], categories: ["5", "10", "12", "15"], theme: THEMES.binary }
      ],
      hardwareSort: [
        { id: "hu-hw-8-1", title: "Hálózatok", instruction: "LAN vagy WAN?", words: [{ word: "Iskolai hálózat", article: "LAN" }, { word: "Internet", article: "WAN" }, { word: "Router", article: "LAN" }, { word: "Műhold", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware }
      ],
      algorithmSniper: [
        { id: "hu-alg-8-1", title: "Logikai kapuk", instruction: "ÉS művelet (AND)", words: ["A bemenet", "B bemenet", "ÉS kapu", "Kimenet"], correctOrder: ["A bemenet", "B bemenet", "ÉS kapu", "Kimenet"], theme: THEMES.algorithm }
      ],
      termGuardian: [
        { id: "hu-tg-8-1", title: "AI és Ágensek", instruction: "Csak MI fogalmak!", targetWord: "AI", wrongWords: ["Hajlékonylemez", "Telefax", "Mágnesszalag"], theme: THEMES.guardian }
      ],
      securitySturm: [
        { id: "hu-sec-8-1", title: "Kriptográfia", instruction: "Biztonsági fogalmak!", words: ["Titkosítás", "Kulcs", "Hash", "Digitális aláírás"], flashDuration: 1500, theme: THEMES.security }
      ]
    }
  },
  de: {
    5: {
      grade: 5,
      binaryAsteroids: [
        { id: "de-bin-5-1", title: "Binärsystem", instruction: "0 oder 1?", words: [{ word: "Ein", article: "1" }, { word: "Aus", article: "0" }, { word: "Strom an", article: "1" }, { word: "Kein Strom", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "de-bin-5-2", title: "Logische Werte", instruction: "Wahr = 1, Falsch = 0?", words: [{ word: "Wahr", article: "1" }, { word: "Falsch", article: "0" }, { word: "Ja", article: "1" }, { word: "Nein", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "de-bin-5-3", title: "Bit-Zustände", instruction: "Aktiv oder Inaktiv?", words: [{ word: "Leuchtet", article: "1" }, { word: "Dunkel", article: "0" }, { word: "Offen", article: "1" }, { word: "Geschlossen", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "de-hw-5-1", title: "Peripherie", instruction: "Eingabe oder Ausgabe?", words: [{ word: "Maus", article: "Eingabe" }, { word: "Monitor", article: "Ausgabe" }, { word: "Tastatur", article: "Eingabe" }, { word: "Drucker", article: "Ausgabe" }, { word: "Scanner", article: "Eingabe" }, { word: "Lautsprecher", article: "Ausgabe" }], categories: ["Eingabe", "Ausgabe"], theme: THEMES.hardware },
        { id: "de-hw-5-2", title: "Geräte", instruction: "PC oder Mobil?", words: [{ word: "Desktop", article: "PC" }, { word: "Smartphone", article: "Mobil" }, { word: "Tower", article: "PC" }, { word: "Tablet", article: "Mobil" }], categories: ["PC", "Mobil"], theme: THEMES.hardware },
        { id: "de-hw-5-3", title: "Hardware-Typen", instruction: "Intern oder Extern?", words: [{ word: "CPU", article: "Intern" }, { word: "USB-Stick", article: "Extern" }, { word: "RAM", article: "Intern" }, { word: "Webcam", article: "Extern" }], categories: ["Intern", "Extern"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "de-alg-5-1", title: "Anmeldung", instruction: "Schritte ordnen!", words: ["PC einschalten", "Benutzername eingeben", "Passwort eingeben", "Enter drücken"], correctOrder: ["PC einschalten", "Benutzername eingeben", "Passwort eingeben", "Enter drücken"], theme: THEMES.algorithm },
        { id: "de-alg-5-2", title: "Datei speichern", instruction: "Richtige Reihenfolge!", words: ["Datei erstellen", "Inhalt eingeben", "Speichern wählen", "Namen vergeben"], correctOrder: ["Datei erstellen", "Inhalt eingeben", "Namen vergeben", "Speichern wählen"], theme: THEMES.algorithm },
        { id: "de-alg-5-3", title: "E-Mail schreiben", instruction: "Schritte ordnen!", words: ["Programm öffnen", "Empfänger eingeben", "Betreff schreiben", "Senden klicken"], correctOrder: ["Programm öffnen", "Empfänger eingeben", "Betreff schreiben", "Senden klicken"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "de-tg-5-1", title: "Hardware-Wächter", instruction: "Nur Hardware durchlassen!", targetWord: "Hardware", wrongWords: ["Windows", "Paint", "Spiel", "Browser", "Word"], theme: THEMES.guardian },
        { id: "de-tg-5-2", title: "Software-Wächter", instruction: "Nur Software durchlassen!", targetWord: "Software", wrongWords: ["Monitor", "Tastatur", "Maus", "Drucker", "CPU"], theme: THEMES.guardian },
        { id: "de-tg-5-3", title: "Eingabegeräte", instruction: "Nur Eingabegeräte!", targetWord: "Eingabe", wrongWords: ["Drucker", "Monitor", "Lautsprecher", "Beamer", "TV"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "de-sec-5-1", title: "Bildformate", instruction: "Bildformate merken!", words: [".jpg", ".png", ".bmp", ".gif"], flashDuration: 2500, theme: THEMES.security },
        { id: "de-sec-5-2", title: "Textformate", instruction: "Textformate merken!", words: [".doc", ".pdf", ".txt", ".odt"], flashDuration: 2500, theme: THEMES.security },
        { id: "de-sec-5-3", title: "Wichtige Ordner", instruction: "Systemordner merken!", words: ["Desktop", "Downloads", "Dokumente", "Bilder"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    6: {
      grade: 6,
      binaryAsteroids: [
        { id: "de-bin-6-1", title: "Einheiten", instruction: "Bit oder Byte?", words: [{ word: "8 Bits", article: "Byte" }, { word: "Kleinste Einheit", article: "Bit" }, { word: "1 Zeichen", article: "Byte" }, { word: "0 oder 1", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary },
        { id: "de-bin-6-2", title: "Dateigrößen", instruction: "Byte oder Kilobyte?", words: [{ word: "1 Buchstabe", article: "Byte" }, { word: "1000 Bytes", article: "Kilobyte" }, { word: "Kleines Bild", article: "Kilobyte" }, { word: "1 Pixel-Info", article: "Byte" }], categories: ["Byte", "Kilobyte"], theme: THEMES.binary },
        { id: "de-bin-6-3", title: "Speichergrößen", instruction: "KB oder MB?", words: [{ word: "1024 KB", article: "MB" }, { word: "Kleines Dokument", article: "KB" }, { word: "MP3-Lied", article: "MB" }, { word: "Textdatei", article: "KB" }], categories: ["KB", "MB"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "de-hw-6-1", title: "Speichertypen", instruction: "Magnetisch oder Optisch?", words: [{ word: "Festplatte", article: "Magnetisch" }, { word: "CD", article: "Optisch" }, { word: "DVD", article: "Optisch" }, { word: "Diskette", article: "Magnetisch" }], categories: ["Magnetisch", "Optisch"], theme: THEMES.hardware },
        { id: "de-hw-6-2", title: "Speicher-Typen", instruction: "Flüchtig oder Dauerhaft?", words: [{ word: "RAM", article: "Flüchtig" }, { word: "ROM", article: "Dauerhaft" }, { word: "Arbeitsspeicher", article: "Flüchtig" }, { word: "Festplatte", article: "Dauerhaft" }], categories: ["Flüchtig", "Dauerhaft"], theme: THEMES.hardware },
        { id: "de-hw-6-3", title: "Anschlüsse", instruction: "USB oder HDMI?", words: [{ word: "Maus anschließen", article: "USB" }, { word: "Monitor verbinden", article: "HDMI" }, { word: "Tastatur", article: "USB" }, { word: "Projektor", article: "HDMI" }], categories: ["USB", "HDMI"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "de-alg-6-1", title: "Zählschleife", instruction: "Schleife aufbauen!", words: ["Zähler = 0", "Solange Zähler < 10", "Zähler + 1", "Schleife Ende"], correctOrder: ["Zähler = 0", "Solange Zähler < 10", "Zähler + 1", "Schleife Ende"], theme: THEMES.algorithm },
        { id: "de-alg-6-2", title: "Bedingte Anweisung", instruction: "Wenn-Dann ordnen!", words: ["Bedingung prüfen", "Wenn wahr", "Aktion ausführen", "Ende"], correctOrder: ["Bedingung prüfen", "Wenn wahr", "Aktion ausführen", "Ende"], theme: THEMES.algorithm },
        { id: "de-alg-6-3", title: "Programm-Ablauf", instruction: "Ablauf ordnen!", words: ["START", "Eingabe lesen", "Verarbeitung", "Ausgabe", "ENDE"], correctOrder: ["START", "Eingabe lesen", "Verarbeitung", "Ausgabe", "ENDE"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "de-tg-6-1", title: "Internet-Begriffe", instruction: "Nur Internet-Begriffe!", targetWord: "Internet", wrongWords: ["Tastatur", "RAM", "Festplatte", "Drucker"], theme: THEMES.guardian },
        { id: "de-tg-6-2", title: "Browser-Wächter", instruction: "Nur Browser!", targetWord: "Browser", wrongWords: ["Excel", "Photoshop", "Word", "Paint"], theme: THEMES.guardian },
        { id: "de-tg-6-3", title: "Netzwerk-Wächter", instruction: "Nur Netzwerk-Geräte!", targetWord: "Netzwerk", wrongWords: ["Drucker", "Scanner", "Tastatur", "Maus"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "de-sec-6-1", title: "Sicheres Passwort", instruction: "Merkmale merken!", words: ["Mindestens 8 Zeichen", "Groß- und Kleinbuchstaben", "Zahlen", "Sonderzeichen"], flashDuration: 3000, theme: THEMES.security },
        { id: "de-sec-6-2", title: "Internet-Regeln", instruction: "Sicherheitsregeln merken!", words: ["Passwort geheim halten", "Keine fremden Links", "Viren-Scanner nutzen"], flashDuration: 3000, theme: THEMES.security },
        { id: "de-sec-6-3", title: "Datei-Endungen", instruction: "Gefährliche Endungen merken!", words: [".exe", ".bat", ".vbs", ".com"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    7: {
      grade: 7,
      binaryAsteroids: [
        { id: "de-bin-7-1", title: "Zweierpotenzen", instruction: "Welcher Wert?", words: [{ word: "2^0", article: "1" }, { word: "2^1", article: "2" }, { word: "2^2", article: "4" }, { word: "2^3", article: "8" }], categories: ["1", "2", "4", "8"], theme: THEMES.binary },
        { id: "de-bin-7-2", title: "Höhere Potenzen", instruction: "Welcher Wert?", words: [{ word: "2^4", article: "16" }, { word: "2^5", article: "32" }, { word: "2^6", article: "64" }, { word: "2^7", article: "128" }], categories: ["16", "32", "64", "128"], theme: THEMES.binary },
        { id: "de-bin-7-3", title: "Binär-Dezimal", instruction: "Dezimalwert?", words: [{ word: "0001", article: "1" }, { word: "0010", article: "2" }, { word: "0100", article: "4" }, { word: "1000", article: "8" }], categories: ["1", "2", "4", "8"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "de-hw-7-1", title: "CPU-Teile", instruction: "CPU oder RAM?", words: [{ word: "ALU", article: "CPU" }, { word: "Arbeitsspeicher", article: "RAM" }, { word: "Steuerwerk", article: "CPU" }, { word: "Cache", article: "CPU" }, { word: "DIMM-Modul", article: "RAM" }], categories: ["CPU", "RAM"], theme: THEMES.hardware },
        { id: "de-hw-7-2", title: "Netzwerk-Geräte", instruction: "Aktiv oder Passiv?", words: [{ word: "Router", article: "Aktiv" }, { word: "Kabel", article: "Passiv" }, { word: "Switch", article: "Aktiv" }, { word: "Stecker", article: "Passiv" }], categories: ["Aktiv", "Passiv"], theme: THEMES.hardware },
        { id: "de-hw-7-3", title: "Speicherhierarchie", instruction: "Schnell oder Langsam?", words: [{ word: "CPU-Cache", article: "Schnell" }, { word: "Festplatte", article: "Langsam" }, { word: "RAM", article: "Schnell" }, { word: "CD-ROM", article: "Langsam" }], categories: ["Schnell", "Langsam"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "de-alg-7-1", title: "Wenn-Dann-Sonst", instruction: "Struktur aufbauen!", words: ["WENN Bedingung", "DANN Aktion1", "SONST Aktion2", "ENDE"], correctOrder: ["WENN Bedingung", "DANN Aktion1", "SONST Aktion2", "ENDE"], theme: THEMES.algorithm },
        { id: "de-alg-7-2", title: "Sortieralgorithmus", instruction: "Bubble-Sort Schritte!", words: ["Liste einlesen", "Nachbarn vergleichen", "Tauschen falls nötig", "Wiederholen", "Ausgeben"], correctOrder: ["Liste einlesen", "Nachbarn vergleichen", "Tauschen falls nötig", "Wiederholen", "Ausgeben"], theme: THEMES.algorithm },
        { id: "de-alg-7-3", title: "Funktionsaufruf", instruction: "Funktion ordnen!", words: ["Funktion definieren", "Parameter übergeben", "Code ausführen", "Ergebnis zurückgeben"], correctOrder: ["Funktion definieren", "Parameter übergeben", "Code ausführen", "Ergebnis zurückgeben"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "de-tg-7-1", title: "Betriebssysteme", instruction: "Nur Betriebssysteme!", targetWord: "OS", wrongWords: ["Word", "Excel", "Chrome", "Photoshop"], theme: THEMES.guardian },
        { id: "de-tg-7-2", title: "Programmiersprachen", instruction: "Nur Programmiersprachen!", targetWord: "Code", wrongWords: ["Windows", "Router", "Monitor", "Festplatte"], theme: THEMES.guardian },
        { id: "de-tg-7-3", title: "Protokoll-Wächter", instruction: "Nur Netzwerkprotokolle!", targetWord: "Protokoll", wrongWords: ["Word", "Paint", "Notepad", "Excel"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "de-sec-7-1", title: "Malware-Typen", instruction: "Schädlinge merken!", words: ["Trojaner", "Computerwurm", "Ransomware", "Spyware"], flashDuration: 2500, theme: THEMES.security },
        { id: "de-sec-7-2", title: "Schutzmaßnahmen", instruction: "Schutz merken!", words: ["Firewall", "Antivirenprogramm", "Updates installieren", "Backup"], flashDuration: 3000, theme: THEMES.security },
        { id: "de-sec-7-3", title: "Angriffsmethoden", instruction: "Angriffe merken!", words: ["Phishing", "Brute-Force", "SQL-Injection", "DoS-Angriff"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    8: {
      grade: 8,
      binaryAsteroids: [
        { id: "de-bin-8-1", title: "4-Bit Dezimal", instruction: "Dezimalwert?", words: [{ word: "1010", article: "10" }, { word: "1100", article: "12" }, { word: "1111", article: "15" }, { word: "0101", article: "5" }], categories: ["5", "10", "12", "15"], theme: THEMES.binary },
        { id: "de-bin-8-2", title: "Binär-Addition", instruction: "Ergebnis?", words: [{ word: "0001 + 0001", article: "0010" }, { word: "0011 + 0001", article: "0100" }, { word: "0110 + 0010", article: "1000" }], categories: ["0010", "0100", "1000"], theme: THEMES.binary },
        { id: "de-bin-8-3", title: "Logische Operatoren", instruction: "AND-Ergebnis?", words: [{ word: "1 AND 1", article: "1" }, { word: "1 AND 0", article: "0" }, { word: "0 AND 0", article: "0" }, { word: "0 AND 1", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "de-hw-8-1", title: "Netzwerktypen", instruction: "LAN oder WAN?", words: [{ word: "Schulnetzwerk", article: "LAN" }, { word: "Internet", article: "WAN" }, { word: "Heimnetzwerk", article: "LAN" }, { word: "Mobilnetz", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware },
        { id: "de-hw-8-2", title: "OSI-Modell", instruction: "Untere oder Obere Schicht?", words: [{ word: "Bitübertragung", article: "Unten" }, { word: "Anwendung", article: "Oben" }, { word: "Physisch", article: "Unten" }, { word: "Präsentation", article: "Oben" }], categories: ["Unten", "Oben"], theme: THEMES.hardware },
        { id: "de-hw-8-3", title: "Cloud vs Lokal", instruction: "Cloud oder Lokal?", words: [{ word: "Google Drive", article: "Cloud" }, { word: "Externe HDD", article: "Lokal" }, { word: "OneDrive", article: "Cloud" }, { word: "USB-Stick", article: "Lokal" }], categories: ["Cloud", "Lokal"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "de-alg-8-1", title: "AND-Gatter", instruction: "Logikgatter aufbauen!", words: ["Eingang A", "Eingang B", "AND-Gatter", "Ausgang"], correctOrder: ["Eingang A", "Eingang B", "AND-Gatter", "Ausgang"], theme: THEMES.algorithm },
        { id: "de-alg-8-2", title: "Datenbankabfrage", instruction: "SQL-Abfrage ordnen!", words: ["SELECT Spalte", "FROM Tabelle", "WHERE Bedingung", "ORDER BY Feld"], correctOrder: ["SELECT Spalte", "FROM Tabelle", "WHERE Bedingung", "ORDER BY Feld"], theme: THEMES.algorithm },
        { id: "de-alg-8-3", title: "Programm kompilieren", instruction: "Schritte ordnen!", words: ["Quellcode schreiben", "Compiler starten", "Fehler beheben", "Ausführen"], correctOrder: ["Quellcode schreiben", "Compiler starten", "Fehler beheben", "Ausführen"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "de-tg-8-1", title: "KI-Begriffe", instruction: "Nur KI-Begriffe!", targetWord: "KI", wrongWords: ["Diskette", "VGA-Kabel", "Maus", "Tintenpatrone"], theme: THEMES.guardian },
        { id: "de-tg-8-2", title: "Datenbank-Begriffe", instruction: "Nur Datenbank-Begriffe!", targetWord: "DB", wrongWords: ["Firewall", "WLAN", "Bluetooth", "Monitor"], theme: THEMES.guardian },
        { id: "de-tg-8-3", title: "Verschlüsselung", instruction: "Nur Krypto-Begriffe!", targetWord: "Krypto", wrongWords: ["Maus", "Drucker", "Tastatur", "Beamer"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "de-sec-8-1", title: "Kryptographie", instruction: "Begriffe merken!", words: ["Verschlüsselung", "Öffentlicher Schlüssel", "Hash-Funktion", "Digitale Signatur"], flashDuration: 2000, theme: THEMES.security },
        { id: "de-sec-8-2", title: "Protokolle", instruction: "Sicherheitsprotokolle merken!", words: ["HTTPS", "SSL", "TLS", "SSH"], flashDuration: 2000, theme: THEMES.security },
        { id: "de-sec-8-3", title: "Angriffsvektoren", instruction: "Angriffe merken!", words: ["Man-in-the-Middle", "Zero-Day-Exploit", "Social Engineering", "DDoS"], flashDuration: 1800, theme: THEMES.security },
      ],
    }
  },
  ro: {
    5: {
      grade: 5,
      binaryAsteroids: [{ id: "ro-bin-5-1", title: "Baze binare", instruction: "0 sau 1?", words: [{ word: "Pornit", article: "1" }, { word: "Oprit", article: "0" }], categories: ["0", "1"], theme: THEMES.binary }],
      hardwareSort: [{ id: "ro-hw-5-1", title: "Hardware", instruction: "Intrare sau Ieșire?", words: [{ word: "Mouse", article: "Input" }, { word: "Monitor", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "ro-alg-5-1", title: "Logare", instruction: "Ordonează pașii!", words: ["Start", "Parola", "Enter"], correctOrder: ["Start", "Parola", "Enter"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "ro-tg-5-1", title: "Software", instruction: "Doar Hardware!", targetWord: "Hardware", wrongWords: ["Windows", "Paint"], theme: THEMES.guardian }],
      securitySturm: [{ id: "ro-sec-5-1", title: "Fișiere", instruction: "Reține formatele foto!", words: [".jpg", ".png"], flashDuration: 2000, theme: THEMES.security }]
    },
    6: {
      grade: 6,
      binaryAsteroids: [{ id: "ro-bin-6-1", title: "Unități", instruction: "Bit sau Byte?", words: [{ word: "8 biți", article: "Byte" }, { word: "Cel mai mic", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary }],
      hardwareSort: [{ id: "ro-hw-6-1", title: "Stocare", instruction: "Magnetic sau Optic?", words: [{ word: "HDD", article: "Magnetic" }, { word: "CD", article: "Optic" }], categories: ["Magnetic", "Optic"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "ro-alg-6-1", title: "Cicluri", instruction: "Construiește ciclul!", words: ["Start", "Repetă", "Stop"], correctOrder: ["Start", "Repetă", "Stop"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "ro-tg-6-1", title: "Internet", instruction: "Doar termeni web!", targetWord: "Web", wrongWords: ["Mouse", "CPU"], theme: THEMES.guardian }],
      securitySturm: [{ id: "ro-sec-6-1", title: "Securitate", instruction: "Reține parolele!", words: ["Cifre", "Litere mari"], flashDuration: 2500, theme: THEMES.security }]
    },
    7: {
      grade: 7,
      binaryAsteroids: [{ id: "ro-bin-7-1", title: "Puteri", instruction: "Valoare?", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }], categories: ["1", "8"], theme: THEMES.binary }],
      hardwareSort: [{ id: "ro-hw-7-1", title: "CPU vs RAM", instruction: "Ce este ce?", words: [{ word: "Nucleu", article: "CPU" }, { word: "Memorie", article: "RAM" }], categories: ["CPU", "RAM"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "ro-alg-7-1", title: "Condiții", instruction: "Dacă-Atunci!", words: ["Dacă", "Atunci", "Altfel"], correctOrder: ["Dacă", "Atunci", "Altfel"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "ro-tg-7-1", title: "OS", instruction: "Sisteme de operare!", targetWord: "OS", wrongWords: ["Word", "Excel"], theme: THEMES.guardian }],
      securitySturm: [{ id: "ro-sec-7-1", title: "Malware", instruction: "Reține virușii!", words: ["Troian", "Vierme"], flashDuration: 2000, theme: THEMES.security }]
    },
    8: {
      grade: 8,
      binaryAsteroids: [{ id: "ro-bin-8-1", title: "Calcul 4-bit", instruction: "Decimal?", words: [{ word: "1010", article: "10" }, { word: "1111", article: "15" }], categories: ["10", "15"], theme: THEMES.binary }],
      hardwareSort: [{ id: "ro-hw-8-1", title: "Rețea", instruction: "LAN sau WAN?", words: [{ word: "Casă", article: "LAN" }, { word: "Lume", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "ro-alg-8-1", title: "Logică", instruction: "Poarta ȘI!", words: ["Intrare", "ȘI", "Ieșire"], correctOrder: ["Intrare", "ȘI", "Ieșire"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "ro-tg-8-1", title: "Agenți IA", instruction: "Doar termeni IA!", targetWord: "IA", wrongWords: ["Dischetă", "VGA"], theme: THEMES.guardian }],
      securitySturm: [{ id: "ro-sec-8-1", title: "Cripto", instruction: "Criptare!", words: ["Cheie", "SSL", "Hash"], flashDuration: 1500, theme: THEMES.security }]
    }
  },
  en: {
    5: {
      grade: 5,
      binaryAsteroids: [{ id: "en-bin-5-1", title: "Binary Basics", instruction: "0 or 1?", words: [{ word: "On", article: "1" }, { word: "Off", article: "0" }], categories: ["0", "1"], theme: THEMES.binary }],
      hardwareSort: [{ id: "en-hw-5-1", title: "Hardware", instruction: "Input or Output?", words: [{ word: "Mouse", article: "Input" }, { word: "Monitor", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "en-alg-5-1", title: "Login", instruction: "Order steps!", words: ["Power on", "Pass", "Enter"], correctOrder: ["Power on", "Pass", "Enter"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "en-tg-5-1", title: "Software", instruction: "Only Hardware!", targetWord: "Hardware", wrongWords: ["Windows", "Chrome"], theme: THEMES.guardian }],
      securitySturm: [{ id: "en-sec-5-1", title: "Files", instruction: "Remember photo formats!", words: [".jpg", ".png"], flashDuration: 2000, theme: THEMES.security }]
    },
    6: {
      grade: 6,
      binaryAsteroids: [{ id: "en-bin-6-1", title: "Units", instruction: "Bit or Byte?", words: [{ word: "8 bits", article: "Byte" }, { word: "Smallest", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary }],
      hardwareSort: [{ id: "en-hw-6-1", title: "Storage", instruction: "Magnetic or Optical?", words: [{ word: "HDD", article: "Magnetic" }, { word: "DVD", article: "Optical" }], categories: ["Magnetic", "Optical"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "en-alg-6-1", title: "Loops", instruction: "Build loop!", words: ["Start", "Repeat", "End"], correctOrder: ["Start", "Repeat", "End"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "en-tg-6-1", title: "Web", instruction: "Only Web terms!", targetWord: "Web", wrongWords: ["Mouse", "CPU"], theme: THEMES.guardian }],
      securitySturm: [{ id: "en-sec-6-1", title: "Security", instruction: "Safe passwords!", words: ["Numbers", "Capitals"], flashDuration: 2500, theme: THEMES.security }]
    },
    7: {
      grade: 7,
      binaryAsteroids: [{ id: "en-bin-7-1", title: "Powers of 2", instruction: "Value?", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }], categories: ["1", "8"], theme: THEMES.binary }],
      hardwareSort: [{ id: "en-hw-7-1", title: "CPU vs RAM", instruction: "Which is which?", words: [{ word: "Core", article: "CPU" }, { word: "Memory", article: "RAM" }], categories: ["CPU", "RAM"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "en-alg-7-1", title: "Conditions", instruction: "If-Then-Else!", words: ["If", "Then", "Else"], correctOrder: ["If", "Then", "Else"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "en-tg-7-1", title: "OS", instruction: "Operating Systems!", targetWord: "OS", wrongWords: ["Word", "Excel"], theme: THEMES.guardian }],
      securitySturm: [{ id: "en-sec-7-1", title: "Malware", instruction: "Remember viruses!", words: ["Trojan", "Worm"], flashDuration: 2000, theme: THEMES.security }]
    },
    8: {
      grade: 8,
      binaryAsteroids: [{ id: "en-bin-8-1", title: "4-bit Math", instruction: "Decimal?", words: [{ word: "1010", article: "10" }, { word: "1111", article: "15" }], categories: ["10", "15"], theme: THEMES.binary }],
      hardwareSort: [{ id: "en-hw-8-1", title: "Networks", instruction: "LAN or WAN?", words: [{ word: "Home", article: "LAN" }, { word: "World", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "en-alg-8-1", title: "Logic Gates", instruction: "AND Gate!", words: ["Input", "AND", "Output"], correctOrder: ["Input", "AND", "Output"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "en-tg-8-1", title: "AI Agents", instruction: "Only AI terms!", targetWord: "AI", wrongWords: ["Floppy", "VGA"], theme: THEMES.guardian }],
      securitySturm: [{ id: "en-sec-8-1", title: "Crypto", instruction: "Encryption!", words: ["Key", "SSL", "Hash"], flashDuration: 1500, theme: THEMES.security }]
    }
  }
};
