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
        { id: "hu-bin-5-2", title: "Logikai értékek", instruction: "Válaszd ki a biteket!", words: [{ word: "Igaz", article: "1" }, { word: "Hamis", article: "0" }, { word: "Igen", article: "1" }, { word: "Nem", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "hu-bin-5-3", title: "Bit-állapotok", instruction: "Aktív vagy Inaktív?", words: [{ word: "Világít", article: "1" }, { word: "Sötét", article: "0" }, { word: "Nyitott", article: "1" }, { word: "Zárt", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "hu-hw-5-1", title: "Perifériák", instruction: "Input vagy Output?", words: [{ word: "Egér", article: "Input" }, { word: "Monitor", article: "Output" }, { word: "Billentyűzet", article: "Input" }, { word: "Nyomtató", article: "Output" }, { word: "Scanner", article: "Input" }, { word: "Hangszóró", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware },
        { id: "hu-hw-5-2", title: "Eszközök", instruction: "PC vagy Mobil?", words: [{ word: "Asztali gép", article: "PC" }, { word: "Okostelefon", article: "Mobil" }, { word: "Toronyház", article: "PC" }, { word: "Táblagép", article: "Mobil" }], categories: ["PC", "Mobil"], theme: THEMES.hardware },
        { id: "hu-hw-5-3", title: "Elhelyezés", instruction: "Belső vagy Külső?", words: [{ word: "CPU", article: "Belső" }, { word: "USB meghajtó", article: "Külső" }, { word: "RAM", article: "Belső" }, { word: "Webkamera", article: "Külső" }], categories: ["Belső", "Külső"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "hu-alg-5-1", title: "Bejelentkezés", instruction: "Sorrendezd a lépéseket!", words: ["Gép bekapcsolása", "Felhasználónév", "Jelszó", "Enter lenyomása"], correctOrder: ["Gép bekapcsolása", "Felhasználónév", "Jelszó", "Enter lenyomása"], theme: THEMES.algorithm },
        { id: "hu-alg-5-2", title: "Fájl mentése", instruction: "Helyes sorrend!", words: ["Fájl létrehozása", "Tartalom beírása", "Név megadása", "Mentés"], correctOrder: ["Fájl létrehozása", "Tartalom beírása", "Név megadása", "Mentés"], theme: THEMES.algorithm },
        { id: "hu-alg-5-3", title: "E-mail küldése", instruction: "Sorrendezd a lépéseket!", words: ["Program megnyitása", "Cím beírása", "Tárgy írása", "Küldés"], correctOrder: ["Program megnyitása", "Cím beírása", "Tárgy írása", "Küldés"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "hu-tg-5-1", title: "Hardver-őr", instruction: "Csak hardvert engedj át!", targetWord: "Hardver", wrongWords: ["Windows", "Paint", "Játék", "Word", "Böngésző"], theme: THEMES.guardian },
        { id: "hu-tg-5-2", title: "Szoftver-őr", instruction: "Csak szoftvert engedj át!", targetWord: "Szoftver", wrongWords: ["Monitor", "Billentyűzet", "Egér", "Nyomtató", "CPU"], theme: THEMES.guardian },
        { id: "hu-tg-5-3", title: "Beviteli eszközök", instruction: "Csak beviteli eszközök!", targetWord: "Input", wrongWords: ["Nyomtató", "Monitor", "Hangszóró", "Projektor", "TV"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "hu-sec-5-1", title: "Fájlformátumok", instruction: "Jegyezd meg a képfájlokat!", words: ["foto.jpg", "kep.png", "rajz.bmp"], flashDuration: 2000, theme: THEMES.security },
        { id: "hu-sec-5-2", title: "Szövegformátumok", instruction: "Jegyezd meg a szövegfájlokat!", words: [".doc", ".pdf", ".txt", ".odt"], flashDuration: 2500, theme: THEMES.security },
        { id: "hu-sec-5-3", title: "Rendszermappák", instruction: "Jegyezd meg a mappákat!", words: ["Asztal", "Letöltések", "Dokumentumok", "Képek"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    6: {
      grade: 6,
      binaryAsteroids: [
        { id: "hu-bin-6-1", title: "Mértékegységek", instruction: "Bit vagy Byte?", words: [{ word: "8 bit", article: "Byte" }, { word: "Legkisebb", article: "Bit" }, { word: "Karakter", article: "Byte" }, { word: "0 vagy 1", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary },
        { id: "hu-bin-6-2", title: "Fájlméretek", instruction: "Byte vagy Kilobyte?", words: [{ word: "1 betű", article: "Byte" }, { word: "1000 bájt", article: "Kilobyte" }, { word: "Kis kép", article: "Kilobyte" }, { word: "1 képpont-adat", article: "Byte" }], categories: ["Byte", "Kilobyte"], theme: THEMES.binary },
        { id: "hu-bin-6-3", title: "Tárméret", instruction: "KB vagy MB?", words: [{ word: "1024 KB", article: "MB" }, { word: "Kis dokumentum", article: "KB" }, { word: "MP3 dal", article: "MB" }, { word: "Szövegfájl", article: "KB" }], categories: ["KB", "MB"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "hu-hw-6-1", title: "Tárolók", instruction: "Mágneses vagy Optikai?", words: [{ word: "Merevlemez", article: "Mágneses" }, { word: "CD", article: "Optikai" }, { word: "DVD", article: "Optikai" }, { word: "Floppy", article: "Mágneses" }], categories: ["Mágneses", "Optikai"], theme: THEMES.hardware },
        { id: "hu-hw-6-2", title: "Tártípusok", instruction: "Ideiglenes vagy Állandó?", words: [{ word: "RAM", article: "Ideiglenes" }, { word: "ROM", article: "Állandó" }, { word: "Munkamemória", article: "Ideiglenes" }, { word: "Merevlemez", article: "Állandó" }], categories: ["Ideiglenes", "Állandó"], theme: THEMES.hardware },
        { id: "hu-hw-6-3", title: "Csatlakozók", instruction: "USB vagy HDMI?", words: [{ word: "Egér csatlakoztatás", article: "USB" }, { word: "Monitor összekötés", article: "HDMI" }, { word: "Billentyűzet", article: "USB" }, { word: "Projektor", article: "HDMI" }], categories: ["USB", "HDMI"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "hu-alg-6-1", title: "Ciklusok", instruction: "Építs ciklust!", words: ["Ismételd", "10 alkalommal", "Lépj előre", "Ciklus vége"], correctOrder: ["Ismételd", "10 alkalommal", "Lépj előre", "Ciklus vége"], theme: THEMES.algorithm },
        { id: "hu-alg-6-2", title: "Feltételes utasítás", instruction: "Ha-Akkor sorrendbe!", words: ["Feltétel ellenőrzése", "Ha igaz", "Utasítás végrehajtása", "Vége"], correctOrder: ["Feltétel ellenőrzése", "Ha igaz", "Utasítás végrehajtása", "Vége"], theme: THEMES.algorithm },
        { id: "hu-alg-6-3", title: "Program folyamata", instruction: "Folyamat sorrendbe!", words: ["KEZDET", "Bemenet olvasása", "Feldolgozás", "Kimenet", "VÉGE"], correctOrder: ["KEZDET", "Bemenet olvasása", "Feldolgozás", "Kimenet", "VÉGE"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "hu-tg-6-1", title: "Net-szótár", instruction: "Csak internetes fogalmak!", targetWord: "Net", wrongWords: ["Egér", "Alaplap", "Tápegység", "Ház"], theme: THEMES.guardian },
        { id: "hu-tg-6-2", title: "Böngésző-őr", instruction: "Csak böngészők!", targetWord: "Böngésző", wrongWords: ["Excel", "Photoshop", "Word", "Paint"], theme: THEMES.guardian },
        { id: "hu-tg-6-3", title: "Hálózati eszközök", instruction: "Csak hálózati eszközök!", targetWord: "Hálózat", wrongWords: ["Nyomtató", "Scanner", "Billentyűzet", "Egér"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "hu-sec-6-1", title: "Jelszó-biztonság", instruction: "Jó jelszó elemei!", words: ["Nagybetű", "Szám", "Speciális karakter"], flashDuration: 2500, theme: THEMES.security },
        { id: "hu-sec-6-2", title: "Net-szabályok", instruction: "Biztonsági szabályok!", words: ["Jelszó titokban tartása", "Idegen linkek kerülése", "Víruskereső használata"], flashDuration: 3000, theme: THEMES.security },
        { id: "hu-sec-6-3", title: "Veszélyes kiterjesztések", instruction: "Jegyezd meg a veszélyes fájlokat!", words: [".exe", ".bat", ".vbs", ".com"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    7: {
      grade: 7,
      binaryAsteroids: [
        { id: "hu-bin-7-1", title: "Kettes hatványok", instruction: "Érték keresése", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }, { word: "2^5", article: "32" }, { word: "2^7", article: "128" }], categories: ["1", "8", "32", "128"], theme: THEMES.binary },
        { id: "hu-bin-7-2", title: "Magasabb hatványok", instruction: "Melyik értéket jelöl?", words: [{ word: "2^4", article: "16" }, { word: "2^5", article: "32" }, { word: "2^6", article: "64" }, { word: "2^7", article: "128" }], categories: ["16", "32", "64", "128"], theme: THEMES.binary },
        { id: "hu-bin-7-3", title: "Bináris → Decimális", instruction: "Decimális értéke?", words: [{ word: "0001", article: "1" }, { word: "0010", article: "2" }, { word: "0100", article: "4" }, { word: "1000", article: "8" }], categories: ["1", "2", "4", "8"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "hu-hw-7-1", title: "Processzor vs Memória", instruction: "Melyik hova tartozik?", words: [{ word: "ALU", article: "CPU" }, { word: "Regiszter", article: "CPU" }, { word: "RAM", article: "Memória" }, { word: "ROM", article: "Memória" }], categories: ["CPU", "Memória"], theme: THEMES.hardware },
        { id: "hu-hw-7-2", title: "Hálózati eszközök", instruction: "Aktív vagy Passzív?", words: [{ word: "Router", article: "Aktív" }, { word: "Kábel", article: "Passzív" }, { word: "Switch", article: "Aktív" }, { word: "Csatlakozó", article: "Passzív" }], categories: ["Aktív", "Passzív"], theme: THEMES.hardware },
        { id: "hu-hw-7-3", title: "Tárhierarchia", instruction: "Gyors vagy Lassú?", words: [{ word: "CPU gyorsítótár", article: "Gyors" }, { word: "Merevlemez", article: "Lassú" }, { word: "RAM", article: "Gyors" }, { word: "CD-ROM", article: "Lassú" }], categories: ["Gyors", "Lassú"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "hu-alg-7-1", title: "Elágazások", instruction: "Ha-Akkor szerkezet", words: ["Ha feltétel", "Akkor művelet", "Különben", "Másik művelet"], correctOrder: ["Ha feltétel", "Akkor művelet", "Különben", "Másik művelet"], theme: THEMES.algorithm },
        { id: "hu-alg-7-2", title: "Rendezési algoritmus", instruction: "Buborék-rendezés lépései!", words: ["Lista beolvasása", "Szomszédok összehasonlítása", "Csere ha kell", "Ismétlés", "Kiírás"], correctOrder: ["Lista beolvasása", "Szomszédok összehasonlítása", "Csere ha kell", "Ismétlés", "Kiírás"], theme: THEMES.algorithm },
        { id: "hu-alg-7-3", title: "Függvényhívás", instruction: "Függvény sorrendbe!", words: ["Függvény definiálása", "Paraméter átadása", "Kód futtatása", "Eredmény visszaadása"], correctOrder: ["Függvény definiálása", "Paraméter átadása", "Kód futtatása", "Eredmény visszaadása"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "hu-tg-7-1", title: "Rendszerszoftver", instruction: "Csak operációs rendszerek!", targetWord: "OS", wrongWords: ["Chrome", "Word", "Facebook", "VLC"], theme: THEMES.guardian },
        { id: "hu-tg-7-2", title: "Programnyelvek", instruction: "Csak programnyelvek!", targetWord: "Kód", wrongWords: ["Windows", "Router", "Monitor", "Merevlemez"], theme: THEMES.guardian },
        { id: "hu-tg-7-3", title: "Protokoll-őr", instruction: "Csak hálózati protokollok!", targetWord: "Protokoll", wrongWords: ["Word", "Paint", "Notepad", "Excel"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "hu-sec-7-1", title: "Vírustan", instruction: "Jegyezd meg a típusokat!", words: ["Trójai", "Féreg", "Zsarolóvírus"], flashDuration: 2000, theme: THEMES.security },
        { id: "hu-sec-7-2", title: "Védekezés", instruction: "Védelmi eszközök!", words: ["Tűzfal", "Víruskereső", "Frissítések telepítése", "Biztonsági mentés"], flashDuration: 3000, theme: THEMES.security },
        { id: "hu-sec-7-3", title: "Támadási módszerek", instruction: "Jegyezd meg a támadásokat!", words: ["Adathalászat", "Nyers erő", "SQL befecskendezés", "DoS támadás"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    8: {
      grade: 8,
      binaryAsteroids: [
        { id: "hu-bin-8-1", title: "4-bit számolás", instruction: "Decimális érték?", words: [{ word: "1010", article: "10" }, { word: "1100", article: "12" }, { word: "1111", article: "15" }, { word: "0101", article: "5" }], categories: ["5", "10", "12", "15"], theme: THEMES.binary },
        { id: "hu-bin-8-2", title: "Bináris összeadás", instruction: "Eredmény?", words: [{ word: "0001 + 0001", article: "0010" }, { word: "0011 + 0001", article: "0100" }, { word: "0110 + 0010", article: "1000" }], categories: ["0010", "0100", "1000"], theme: THEMES.binary },
        { id: "hu-bin-8-3", title: "Logikai műveletek", instruction: "ÉS (AND) eredménye?", words: [{ word: "1 ÉS 1", article: "1" }, { word: "1 ÉS 0", article: "0" }, { word: "0 ÉS 0", article: "0" }, { word: "0 ÉS 1", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "hu-hw-8-1", title: "Hálózatok", instruction: "LAN vagy WAN?", words: [{ word: "Iskolai hálózat", article: "LAN" }, { word: "Internet", article: "WAN" }, { word: "Router", article: "LAN" }, { word: "Műhold", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware },
        { id: "hu-hw-8-2", title: "OSI-modell", instruction: "Alsó vagy Felső réteg?", words: [{ word: "Fizikai átvitel", article: "Alsó" }, { word: "Alkalmazás", article: "Felső" }, { word: "Fizikai", article: "Alsó" }, { word: "Megjelenítés", article: "Felső" }], categories: ["Alsó", "Felső"], theme: THEMES.hardware },
        { id: "hu-hw-8-3", title: "Felhő vs Helyi", instruction: "Felhő vagy Helyi?", words: [{ word: "Google Drive", article: "Felhő" }, { word: "Külső HDD", article: "Helyi" }, { word: "OneDrive", article: "Felhő" }, { word: "USB-meghajtó", article: "Helyi" }], categories: ["Felhő", "Helyi"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "hu-alg-8-1", title: "Logikai kapuk", instruction: "ÉS művelet (AND)", words: ["A bemenet", "B bemenet", "ÉS kapu", "Kimenet"], correctOrder: ["A bemenet", "B bemenet", "ÉS kapu", "Kimenet"], theme: THEMES.algorithm },
        { id: "hu-alg-8-2", title: "Adatbázis-lekérdezés", instruction: "SQL sorrendbe!", words: ["SELECT oszlop", "FROM tábla", "WHERE feltétel", "ORDER BY mező"], correctOrder: ["SELECT oszlop", "FROM tábla", "WHERE feltétel", "ORDER BY mező"], theme: THEMES.algorithm },
        { id: "hu-alg-8-3", title: "Program fordítása", instruction: "Lépések sorrendbe!", words: ["Forráskód megírása", "Fordító indítása", "Hibák javítása", "Futtatás"], correctOrder: ["Forráskód megírása", "Fordító indítása", "Hibák javítása", "Futtatás"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "hu-tg-8-1", title: "AI és Ágensek", instruction: "Csak MI fogalmak!", targetWord: "AI", wrongWords: ["Hajlékonylemez", "Telefax", "Mágnesszalag"], theme: THEMES.guardian },
        { id: "hu-tg-8-2", title: "Adatbázis-fogalmak", instruction: "Csak adatbázis fogalmak!", targetWord: "DB", wrongWords: ["Tűzfal", "WLAN", "Bluetooth", "Monitor"], theme: THEMES.guardian },
        { id: "hu-tg-8-3", title: "Titkosítás", instruction: "Csak kriptográfiai fogalmak!", targetWord: "Kriptó", wrongWords: ["Egér", "Nyomtató", "Billentyűzet", "Projektor"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "hu-sec-8-1", title: "Kriptográfia", instruction: "Biztonsági fogalmak!", words: ["Titkosítás", "Kulcs", "Hash", "Digitális aláírás"], flashDuration: 1500, theme: THEMES.security },
        { id: "hu-sec-8-2", title: "Protokollok", instruction: "Biztonsági protokollok!", words: ["HTTPS", "SSL", "TLS", "SSH"], flashDuration: 2000, theme: THEMES.security },
        { id: "hu-sec-8-3", title: "Támadási vektorok", instruction: "Jegyezd meg a támadásokat!", words: ["Közbeékelődéses támadás", "Nulladik napi kihasználás", "Social engineering", "DDoS"], flashDuration: 1800, theme: THEMES.security },
      ],
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
      binaryAsteroids: [
        { id: "ro-bin-5-1", title: "Baze binare", instruction: "0 sau 1?", words: [{ word: "Pornit", article: "1" }, { word: "Oprit", article: "0" }, { word: "Curent activ", article: "1" }, { word: "Fără curent", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "ro-bin-5-2", title: "Valori logice", instruction: "Alege bitul corect!", words: [{ word: "Adevărat", article: "1" }, { word: "Fals", article: "0" }, { word: "Da", article: "1" }, { word: "Nu", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "ro-bin-5-3", title: "Stări bit", instruction: "Activ sau Inactiv?", words: [{ word: "Luminează", article: "1" }, { word: "Stins", article: "0" }, { word: "Deschis", article: "1" }, { word: "Închis", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "ro-hw-5-1", title: "Hardware", instruction: "Intrare sau Ieșire?", words: [{ word: "Mouse", article: "Input" }, { word: "Monitor", article: "Output" }, { word: "Tastatură", article: "Input" }, { word: "Imprimantă", article: "Output" }, { word: "Scanner", article: "Input" }, { word: "Boxe", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware },
        { id: "ro-hw-5-2", title: "Dispozitive", instruction: "PC sau Mobil?", words: [{ word: "Calculator desktop", article: "PC" }, { word: "Smartphone", article: "Mobil" }, { word: "Turn", article: "PC" }, { word: "Tabletă", article: "Mobil" }], categories: ["PC", "Mobil"], theme: THEMES.hardware },
        { id: "ro-hw-5-3", title: "Localizare", instruction: "Intern sau Extern?", words: [{ word: "CPU", article: "Intern" }, { word: "Stick USB", article: "Extern" }, { word: "RAM", article: "Intern" }, { word: "Webcam", article: "Extern" }], categories: ["Intern", "Extern"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "ro-alg-5-1", title: "Logare", instruction: "Ordonează pașii!", words: ["Pornire calculator", "Utilizator", "Parolă", "Apasă Enter"], correctOrder: ["Pornire calculator", "Utilizator", "Parolă", "Apasă Enter"], theme: THEMES.algorithm },
        { id: "ro-alg-5-2", title: "Salvare fișier", instruction: "Ordinea corectă!", words: ["Creare fișier", "Introducere conținut", "Ales nume", "Salvare"], correctOrder: ["Creare fișier", "Introducere conținut", "Ales nume", "Salvare"], theme: THEMES.algorithm },
        { id: "ro-alg-5-3", title: "Trimitere email", instruction: "Ordonează pașii!", words: ["Deschide aplicația", "Introdu destinatar", "Scrie subiect", "Trimite"], correctOrder: ["Deschide aplicația", "Introdu destinatar", "Scrie subiect", "Trimite"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "ro-tg-5-1", title: "Gardian Hardware", instruction: "Doar Hardware!", targetWord: "Hardware", wrongWords: ["Windows", "Paint", "Joc", "Word", "Browser"], theme: THEMES.guardian },
        { id: "ro-tg-5-2", title: "Gardian Software", instruction: "Doar Software!", targetWord: "Software", wrongWords: ["Monitor", "Tastatură", "Mouse", "Imprimantă", "CPU"], theme: THEMES.guardian },
        { id: "ro-tg-5-3", title: "Dispozitive intrare", instruction: "Doar dispozitive de intrare!", targetWord: "Intrare", wrongWords: ["Imprimantă", "Monitor", "Boxe", "Proiector", "TV"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "ro-sec-5-1", title: "Fișiere foto", instruction: "Reține formatele foto!", words: ["foto.jpg", "imagine.png", "desen.bmp"], flashDuration: 2000, theme: THEMES.security },
        { id: "ro-sec-5-2", title: "Formate text", instruction: "Reține formatele text!", words: [".doc", ".pdf", ".txt", ".odt"], flashDuration: 2500, theme: THEMES.security },
        { id: "ro-sec-5-3", title: "Foldere sistem", instruction: "Reține folderele importante!", words: ["Desktop", "Descărcări", "Documente", "Imagini"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    6: {
      grade: 6,
      binaryAsteroids: [
        { id: "ro-bin-6-1", title: "Unități", instruction: "Bit sau Byte?", words: [{ word: "8 biți", article: "Byte" }, { word: "Cel mai mic", article: "Bit" }, { word: "Un caracter", article: "Byte" }, { word: "0 sau 1", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary },
        { id: "ro-bin-6-2", title: "Dimensiuni fișiere", instruction: "Byte sau Kilobyte?", words: [{ word: "O literă", article: "Byte" }, { word: "1000 de octeți", article: "Kilobyte" }, { word: "Imagine mică", article: "Kilobyte" }, { word: "Info 1 pixel", article: "Byte" }], categories: ["Byte", "Kilobyte"], theme: THEMES.binary },
        { id: "ro-bin-6-3", title: "Capacitate stocare", instruction: "KB sau MB?", words: [{ word: "1024 KB", article: "MB" }, { word: "Document mic", article: "KB" }, { word: "Melodie MP3", article: "MB" }, { word: "Fișier text", article: "KB" }], categories: ["KB", "MB"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "ro-hw-6-1", title: "Stocare", instruction: "Magnetic sau Optic?", words: [{ word: "HDD", article: "Magnetic" }, { word: "CD", article: "Optic" }, { word: "DVD", article: "Optic" }, { word: "Floppy", article: "Magnetic" }], categories: ["Magnetic", "Optic"], theme: THEMES.hardware },
        { id: "ro-hw-6-2", title: "Tipuri memorie", instruction: "Volatilă sau Permanentă?", words: [{ word: "RAM", article: "Volatilă" }, { word: "ROM", article: "Permanentă" }, { word: "Memorie operativă", article: "Volatilă" }, { word: "Hard disk", article: "Permanentă" }], categories: ["Volatilă", "Permanentă"], theme: THEMES.hardware },
        { id: "ro-hw-6-3", title: "Conectori", instruction: "USB sau HDMI?", words: [{ word: "Conectare mouse", article: "USB" }, { word: "Conectare monitor", article: "HDMI" }, { word: "Tastatură", article: "USB" }, { word: "Proiector", article: "HDMI" }], categories: ["USB", "HDMI"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "ro-alg-6-1", title: "Cicluri", instruction: "Construiește ciclul!", words: ["Contor = 0", "Cât timp contor < 10", "Contor + 1", "Sfârșit ciclu"], correctOrder: ["Contor = 0", "Cât timp contor < 10", "Contor + 1", "Sfârșit ciclu"], theme: THEMES.algorithm },
        { id: "ro-alg-6-2", title: "Instrucțiune condiționată", instruction: "Dacă-Atunci în ordine!", words: ["Verifică condiția", "Dacă adevărat", "Execută acțiunea", "Sfârșit"], correctOrder: ["Verifică condiția", "Dacă adevărat", "Execută acțiunea", "Sfârșit"], theme: THEMES.algorithm },
        { id: "ro-alg-6-3", title: "Flux program", instruction: "Ordonează fluxul!", words: ["START", "Citire intrare", "Procesare", "Afișare", "STOP"], correctOrder: ["START", "Citire intrare", "Procesare", "Afișare", "STOP"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "ro-tg-6-1", title: "Internet", instruction: "Doar termeni web!", targetWord: "Web", wrongWords: ["Mouse", "CPU", "RAM", "Imprimantă"], theme: THEMES.guardian },
        { id: "ro-tg-6-2", title: "Gardian browser", instruction: "Doar browsere!", targetWord: "Browser", wrongWords: ["Excel", "Photoshop", "Word", "Paint"], theme: THEMES.guardian },
        { id: "ro-tg-6-3", title: "Dispozitive rețea", instruction: "Doar dispozitive de rețea!", targetWord: "Rețea", wrongWords: ["Imprimantă", "Scanner", "Tastatură", "Mouse"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "ro-sec-6-1", title: "Parolă sigură", instruction: "Caracteristici parolă bună!", words: ["Cel puțin 8 caractere", "Litere mari și mici", "Cifre", "Caractere speciale"], flashDuration: 3000, theme: THEMES.security },
        { id: "ro-sec-6-2", title: "Reguli internet", instruction: "Reține regulile de siguranță!", words: ["Păstrează parola secretă", "Evită linkuri necunoscute", "Folosește antivirus"], flashDuration: 3000, theme: THEMES.security },
        { id: "ro-sec-6-3", title: "Extensii periculoase", instruction: "Reține fișierele periculoase!", words: [".exe", ".bat", ".vbs", ".com"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    7: {
      grade: 7,
      binaryAsteroids: [
        { id: "ro-bin-7-1", title: "Puteri ale lui 2", instruction: "Valoare?", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }, { word: "2^5", article: "32" }, { word: "2^7", article: "128" }], categories: ["1", "8", "32", "128"], theme: THEMES.binary },
        { id: "ro-bin-7-2", title: "Puteri mai mari", instruction: "Care este valoarea?", words: [{ word: "2^4", article: "16" }, { word: "2^5", article: "32" }, { word: "2^6", article: "64" }, { word: "2^7", article: "128" }], categories: ["16", "32", "64", "128"], theme: THEMES.binary },
        { id: "ro-bin-7-3", title: "Binar → Zecimal", instruction: "Valoare zecimală?", words: [{ word: "0001", article: "1" }, { word: "0010", article: "2" }, { word: "0100", article: "4" }, { word: "1000", article: "8" }], categories: ["1", "2", "4", "8"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "ro-hw-7-1", title: "CPU vs RAM", instruction: "Ce este ce?", words: [{ word: "ALU", article: "CPU" }, { word: "Registru", article: "CPU" }, { word: "Memorie operativă", article: "RAM" }, { word: "ROM", article: "RAM" }], categories: ["CPU", "RAM"], theme: THEMES.hardware },
        { id: "ro-hw-7-2", title: "Dispozitive rețea", instruction: "Activ sau Pasiv?", words: [{ word: "Router", article: "Activ" }, { word: "Cablu", article: "Pasiv" }, { word: "Switch", article: "Activ" }, { word: "Conector", article: "Pasiv" }], categories: ["Activ", "Pasiv"], theme: THEMES.hardware },
        { id: "ro-hw-7-3", title: "Ierarhia memoriei", instruction: "Rapid sau Lent?", words: [{ word: "Cache CPU", article: "Rapid" }, { word: "Hard disk", article: "Lent" }, { word: "RAM", article: "Rapid" }, { word: "CD-ROM", article: "Lent" }], categories: ["Rapid", "Lent"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "ro-alg-7-1", title: "Condiții", instruction: "Dacă-Atunci-Altfel!", words: ["DACĂ condiție", "ATUNCI acțiune1", "ALTFEL acțiune2", "SFÂRȘIT"], correctOrder: ["DACĂ condiție", "ATUNCI acțiune1", "ALTFEL acțiune2", "SFÂRȘIT"], theme: THEMES.algorithm },
        { id: "ro-alg-7-2", title: "Algoritm sortare", instruction: "Pași bubble sort!", words: ["Citire listă", "Comparare vecini", "Schimb dacă necesar", "Repetare", "Afișare"], correctOrder: ["Citire listă", "Comparare vecini", "Schimb dacă necesar", "Repetare", "Afișare"], theme: THEMES.algorithm },
        { id: "ro-alg-7-3", title: "Apel funcție", instruction: "Ordonează funcția!", words: ["Definire funcție", "Transmitere parametri", "Execuție cod", "Returnare rezultat"], correctOrder: ["Definire funcție", "Transmitere parametri", "Execuție cod", "Returnare rezultat"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "ro-tg-7-1", title: "Sisteme de operare", instruction: "Doar sisteme de operare!", targetWord: "OS", wrongWords: ["Word", "Excel", "Chrome", "Photoshop"], theme: THEMES.guardian },
        { id: "ro-tg-7-2", title: "Limbaje programare", instruction: "Doar limbaje de programare!", targetWord: "Cod", wrongWords: ["Windows", "Router", "Monitor", "Hard disk"], theme: THEMES.guardian },
        { id: "ro-tg-7-3", title: "Gardian protocoale", instruction: "Doar protocoale de rețea!", targetWord: "Protocol", wrongWords: ["Word", "Paint", "Notepad", "Excel"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "ro-sec-7-1", title: "Tipuri malware", instruction: "Reține virușii!", words: ["Troian", "Vierme", "Ransomware", "Spyware"], flashDuration: 2000, theme: THEMES.security },
        { id: "ro-sec-7-2", title: "Protecție", instruction: "Reține metodele de protecție!", words: ["Firewall", "Antivirus", "Actualizări", "Backup"], flashDuration: 3000, theme: THEMES.security },
        { id: "ro-sec-7-3", title: "Metode de atac", instruction: "Reține atacurile!", words: ["Phishing", "Forță brută", "SQL injection", "Atac DoS"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    8: {
      grade: 8,
      binaryAsteroids: [
        { id: "ro-bin-8-1", title: "Calcul 4-bit", instruction: "Decimal?", words: [{ word: "1010", article: "10" }, { word: "1100", article: "12" }, { word: "1111", article: "15" }, { word: "0101", article: "5" }], categories: ["5", "10", "12", "15"], theme: THEMES.binary },
        { id: "ro-bin-8-2", title: "Adunare binară", instruction: "Rezultat?", words: [{ word: "0001 + 0001", article: "0010" }, { word: "0011 + 0001", article: "0100" }, { word: "0110 + 0010", article: "1000" }], categories: ["0010", "0100", "1000"], theme: THEMES.binary },
        { id: "ro-bin-8-3", title: "Operatori logici", instruction: "Rezultat ȘI (AND)?", words: [{ word: "1 ȘI 1", article: "1" }, { word: "1 ȘI 0", article: "0" }, { word: "0 ȘI 0", article: "0" }, { word: "0 ȘI 1", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "ro-hw-8-1", title: "Tipuri de rețea", instruction: "LAN sau WAN?", words: [{ word: "Rețea școlară", article: "LAN" }, { word: "Internet", article: "WAN" }, { word: "Rețea de acasă", article: "LAN" }, { word: "Rețea mobilă", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware },
        { id: "ro-hw-8-2", title: "Model OSI", instruction: "Nivel inferior sau superior?", words: [{ word: "Transmisie fizică", article: "Inferior" }, { word: "Aplicație", article: "Superior" }, { word: "Fizic", article: "Inferior" }, { word: "Prezentare", article: "Superior" }], categories: ["Inferior", "Superior"], theme: THEMES.hardware },
        { id: "ro-hw-8-3", title: "Cloud vs Local", instruction: "Cloud sau Local?", words: [{ word: "Google Drive", article: "Cloud" }, { word: "HDD extern", article: "Local" }, { word: "OneDrive", article: "Cloud" }, { word: "Stick USB", article: "Local" }], categories: ["Cloud", "Local"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "ro-alg-8-1", title: "Porți logice", instruction: "Poarta ȘI!", words: ["Intrare A", "Intrare B", "Poarta ȘI", "Ieșire"], correctOrder: ["Intrare A", "Intrare B", "Poarta ȘI", "Ieșire"], theme: THEMES.algorithm },
        { id: "ro-alg-8-2", title: "Interogare bază date", instruction: "Ordonează SQL!", words: ["SELECT coloană", "FROM tabel", "WHERE condiție", "ORDER BY câmp"], correctOrder: ["SELECT coloană", "FROM tabel", "WHERE condiție", "ORDER BY câmp"], theme: THEMES.algorithm },
        { id: "ro-alg-8-3", title: "Compilare program", instruction: "Ordonează pașii!", words: ["Scriere cod sursă", "Pornire compilator", "Corectare erori", "Rulare"], correctOrder: ["Scriere cod sursă", "Pornire compilator", "Corectare erori", "Rulare"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "ro-tg-8-1", title: "Agenți IA", instruction: "Doar termeni IA!", targetWord: "IA", wrongWords: ["Dischetă", "Cablu VGA", "Mouse", "Cartuș cerneală"], theme: THEMES.guardian },
        { id: "ro-tg-8-2", title: "Termeni baze date", instruction: "Doar termeni baze de date!", targetWord: "BD", wrongWords: ["Firewall", "WLAN", "Bluetooth", "Monitor"], theme: THEMES.guardian },
        { id: "ro-tg-8-3", title: "Criptografie", instruction: "Doar termeni de criptografie!", targetWord: "Criptare", wrongWords: ["Mouse", "Imprimantă", "Tastatură", "Proiector"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "ro-sec-8-1", title: "Criptografie", instruction: "Reține noțiunile!", words: ["Criptare", "Cheie publică", "Funcție hash", "Semnătură digitală"], flashDuration: 1500, theme: THEMES.security },
        { id: "ro-sec-8-2", title: "Protocoale", instruction: "Protocoale de securitate!", words: ["HTTPS", "SSL", "TLS", "SSH"], flashDuration: 2000, theme: THEMES.security },
        { id: "ro-sec-8-3", title: "Vectori de atac", instruction: "Reține atacurile!", words: ["Man-in-the-Middle", "Zero-Day exploit", "Inginerie socială", "DDoS"], flashDuration: 1800, theme: THEMES.security },
      ],
    }
  },
  en: {
    5: {
      grade: 5,
      binaryAsteroids: [
        { id: "en-bin-5-1", title: "Binary Basics", instruction: "0 or 1?", words: [{ word: "On", article: "1" }, { word: "Off", article: "0" }, { word: "Power active", article: "1" }, { word: "No power", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "en-bin-5-2", title: "Logic Values", instruction: "Pick the correct bit!", words: [{ word: "True", article: "1" }, { word: "False", article: "0" }, { word: "Yes", article: "1" }, { word: "No", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
        { id: "en-bin-5-3", title: "Bit States", instruction: "Active or Inactive?", words: [{ word: "Glowing", article: "1" }, { word: "Dark", article: "0" }, { word: "Open", article: "1" }, { word: "Closed", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "en-hw-5-1", title: "Peripherals", instruction: "Input or Output?", words: [{ word: "Mouse", article: "Input" }, { word: "Monitor", article: "Output" }, { word: "Keyboard", article: "Input" }, { word: "Printer", article: "Output" }, { word: "Scanner", article: "Input" }, { word: "Speaker", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware },
        { id: "en-hw-5-2", title: "Devices", instruction: "PC or Mobile?", words: [{ word: "Desktop", article: "PC" }, { word: "Smartphone", article: "Mobile" }, { word: "Tower", article: "PC" }, { word: "Tablet", article: "Mobile" }], categories: ["PC", "Mobile"], theme: THEMES.hardware },
        { id: "en-hw-5-3", title: "Location", instruction: "Internal or External?", words: [{ word: "CPU", article: "Internal" }, { word: "USB drive", article: "External" }, { word: "RAM", article: "Internal" }, { word: "Webcam", article: "External" }], categories: ["Internal", "External"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "en-alg-5-1", title: "Login", instruction: "Order the steps!", words: ["Power on", "Enter username", "Enter password", "Press Enter"], correctOrder: ["Power on", "Enter username", "Enter password", "Press Enter"], theme: THEMES.algorithm },
        { id: "en-alg-5-2", title: "Save a File", instruction: "Correct order!", words: ["Create file", "Enter content", "Choose name", "Save"], correctOrder: ["Create file", "Enter content", "Choose name", "Save"], theme: THEMES.algorithm },
        { id: "en-alg-5-3", title: "Send an Email", instruction: "Order the steps!", words: ["Open app", "Enter recipient", "Write subject", "Send"], correctOrder: ["Open app", "Enter recipient", "Write subject", "Send"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "en-tg-5-1", title: "Hardware Guard", instruction: "Only Hardware!", targetWord: "Hardware", wrongWords: ["Windows", "Chrome", "Game", "Word", "Browser"], theme: THEMES.guardian },
        { id: "en-tg-5-2", title: "Software Guard", instruction: "Only Software!", targetWord: "Software", wrongWords: ["Monitor", "Keyboard", "Mouse", "Printer", "CPU"], theme: THEMES.guardian },
        { id: "en-tg-5-3", title: "Input Devices", instruction: "Only input devices!", targetWord: "Input", wrongWords: ["Printer", "Monitor", "Speaker", "Projector", "TV"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "en-sec-5-1", title: "Photo Formats", instruction: "Remember photo formats!", words: ["photo.jpg", "image.png", "drawing.bmp"], flashDuration: 2000, theme: THEMES.security },
        { id: "en-sec-5-2", title: "Text Formats", instruction: "Remember text formats!", words: [".doc", ".pdf", ".txt", ".odt"], flashDuration: 2500, theme: THEMES.security },
        { id: "en-sec-5-3", title: "System Folders", instruction: "Remember important folders!", words: ["Desktop", "Downloads", "Documents", "Pictures"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    6: {
      grade: 6,
      binaryAsteroids: [
        { id: "en-bin-6-1", title: "Units", instruction: "Bit or Byte?", words: [{ word: "8 bits", article: "Byte" }, { word: "Smallest unit", article: "Bit" }, { word: "One character", article: "Byte" }, { word: "0 or 1", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary },
        { id: "en-bin-6-2", title: "File Sizes", instruction: "Byte or Kilobyte?", words: [{ word: "One letter", article: "Byte" }, { word: "1000 bytes", article: "Kilobyte" }, { word: "Small image", article: "Kilobyte" }, { word: "1 pixel data", article: "Byte" }], categories: ["Byte", "Kilobyte"], theme: THEMES.binary },
        { id: "en-bin-6-3", title: "Storage Size", instruction: "KB or MB?", words: [{ word: "1024 KB", article: "MB" }, { word: "Small document", article: "KB" }, { word: "MP3 song", article: "MB" }, { word: "Text file", article: "KB" }], categories: ["KB", "MB"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "en-hw-6-1", title: "Storage Types", instruction: "Magnetic or Optical?", words: [{ word: "HDD", article: "Magnetic" }, { word: "CD", article: "Optical" }, { word: "DVD", article: "Optical" }, { word: "Floppy", article: "Magnetic" }], categories: ["Magnetic", "Optical"], theme: THEMES.hardware },
        { id: "en-hw-6-2", title: "Memory Types", instruction: "Volatile or Permanent?", words: [{ word: "RAM", article: "Volatile" }, { word: "ROM", article: "Permanent" }, { word: "Working memory", article: "Volatile" }, { word: "Hard drive", article: "Permanent" }], categories: ["Volatile", "Permanent"], theme: THEMES.hardware },
        { id: "en-hw-6-3", title: "Connectors", instruction: "USB or HDMI?", words: [{ word: "Connect mouse", article: "USB" }, { word: "Connect monitor", article: "HDMI" }, { word: "Keyboard", article: "USB" }, { word: "Projector", article: "HDMI" }], categories: ["USB", "HDMI"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "en-alg-6-1", title: "Loops", instruction: "Build the loop!", words: ["Counter = 0", "While counter < 10", "Counter + 1", "End loop"], correctOrder: ["Counter = 0", "While counter < 10", "Counter + 1", "End loop"], theme: THEMES.algorithm },
        { id: "en-alg-6-2", title: "Conditional Statement", instruction: "If-Then in order!", words: ["Check condition", "If true", "Execute action", "End"], correctOrder: ["Check condition", "If true", "Execute action", "End"], theme: THEMES.algorithm },
        { id: "en-alg-6-3", title: "Program Flow", instruction: "Order the flow!", words: ["START", "Read input", "Process", "Output", "END"], correctOrder: ["START", "Read input", "Process", "Output", "END"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "en-tg-6-1", title: "Web Guard", instruction: "Only Web terms!", targetWord: "Web", wrongWords: ["Mouse", "CPU", "RAM", "Printer"], theme: THEMES.guardian },
        { id: "en-tg-6-2", title: "Browser Guard", instruction: "Only browsers!", targetWord: "Browser", wrongWords: ["Excel", "Photoshop", "Word", "Paint"], theme: THEMES.guardian },
        { id: "en-tg-6-3", title: "Network Devices", instruction: "Only network devices!", targetWord: "Network", wrongWords: ["Printer", "Scanner", "Keyboard", "Mouse"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "en-sec-6-1", title: "Safe Password", instruction: "Password requirements!", words: ["At least 8 characters", "Upper and lowercase", "Numbers", "Special characters"], flashDuration: 3000, theme: THEMES.security },
        { id: "en-sec-6-2", title: "Internet Rules", instruction: "Remember safety rules!", words: ["Keep password secret", "Avoid unknown links", "Use antivirus"], flashDuration: 3000, theme: THEMES.security },
        { id: "en-sec-6-3", title: "Dangerous Extensions", instruction: "Remember dangerous files!", words: [".exe", ".bat", ".vbs", ".com"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    7: {
      grade: 7,
      binaryAsteroids: [
        { id: "en-bin-7-1", title: "Powers of 2", instruction: "Value?", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }, { word: "2^5", article: "32" }, { word: "2^7", article: "128" }], categories: ["1", "8", "32", "128"], theme: THEMES.binary },
        { id: "en-bin-7-2", title: "Higher Powers", instruction: "Which value?", words: [{ word: "2^4", article: "16" }, { word: "2^5", article: "32" }, { word: "2^6", article: "64" }, { word: "2^7", article: "128" }], categories: ["16", "32", "64", "128"], theme: THEMES.binary },
        { id: "en-bin-7-3", title: "Binary to Decimal", instruction: "Decimal value?", words: [{ word: "0001", article: "1" }, { word: "0010", article: "2" }, { word: "0100", article: "4" }, { word: "1000", article: "8" }], categories: ["1", "2", "4", "8"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "en-hw-7-1", title: "CPU vs RAM", instruction: "Which is which?", words: [{ word: "ALU", article: "CPU" }, { word: "Register", article: "CPU" }, { word: "Working memory", article: "RAM" }, { word: "ROM", article: "RAM" }], categories: ["CPU", "RAM"], theme: THEMES.hardware },
        { id: "en-hw-7-2", title: "Network Devices", instruction: "Active or Passive?", words: [{ word: "Router", article: "Active" }, { word: "Cable", article: "Passive" }, { word: "Switch", article: "Active" }, { word: "Connector", article: "Passive" }], categories: ["Active", "Passive"], theme: THEMES.hardware },
        { id: "en-hw-7-3", title: "Memory Hierarchy", instruction: "Fast or Slow?", words: [{ word: "CPU Cache", article: "Fast" }, { word: "Hard drive", article: "Slow" }, { word: "RAM", article: "Fast" }, { word: "CD-ROM", article: "Slow" }], categories: ["Fast", "Slow"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "en-alg-7-1", title: "Conditions", instruction: "If-Then-Else!", words: ["IF condition", "THEN action1", "ELSE action2", "END"], correctOrder: ["IF condition", "THEN action1", "ELSE action2", "END"], theme: THEMES.algorithm },
        { id: "en-alg-7-2", title: "Sort Algorithm", instruction: "Bubble sort steps!", words: ["Read list", "Compare neighbors", "Swap if needed", "Repeat", "Output"], correctOrder: ["Read list", "Compare neighbors", "Swap if needed", "Repeat", "Output"], theme: THEMES.algorithm },
        { id: "en-alg-7-3", title: "Function Call", instruction: "Order the function!", words: ["Define function", "Pass parameters", "Execute code", "Return result"], correctOrder: ["Define function", "Pass parameters", "Execute code", "Return result"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "en-tg-7-1", title: "OS Guard", instruction: "Only Operating Systems!", targetWord: "OS", wrongWords: ["Word", "Excel", "Chrome", "Photoshop"], theme: THEMES.guardian },
        { id: "en-tg-7-2", title: "Languages Guard", instruction: "Only programming languages!", targetWord: "Code", wrongWords: ["Windows", "Router", "Monitor", "Hard drive"], theme: THEMES.guardian },
        { id: "en-tg-7-3", title: "Protocol Guard", instruction: "Only network protocols!", targetWord: "Protocol", wrongWords: ["Word", "Paint", "Notepad", "Excel"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "en-sec-7-1", title: "Malware Types", instruction: "Remember the threats!", words: ["Trojan", "Worm", "Ransomware", "Spyware"], flashDuration: 2000, theme: THEMES.security },
        { id: "en-sec-7-2", title: "Protection", instruction: "Remember protection methods!", words: ["Firewall", "Antivirus", "Install updates", "Backup"], flashDuration: 3000, theme: THEMES.security },
        { id: "en-sec-7-3", title: "Attack Methods", instruction: "Remember the attacks!", words: ["Phishing", "Brute force", "SQL injection", "DoS attack"], flashDuration: 2000, theme: THEMES.security },
      ],
    },
    8: {
      grade: 8,
      binaryAsteroids: [
        { id: "en-bin-8-1", title: "4-bit Math", instruction: "Decimal value?", words: [{ word: "1010", article: "10" }, { word: "1100", article: "12" }, { word: "1111", article: "15" }, { word: "0101", article: "5" }], categories: ["5", "10", "12", "15"], theme: THEMES.binary },
        { id: "en-bin-8-2", title: "Binary Addition", instruction: "Result?", words: [{ word: "0001 + 0001", article: "0010" }, { word: "0011 + 0001", article: "0100" }, { word: "0110 + 0010", article: "1000" }], categories: ["0010", "0100", "1000"], theme: THEMES.binary },
        { id: "en-bin-8-3", title: "Logic Operators", instruction: "AND result?", words: [{ word: "1 AND 1", article: "1" }, { word: "1 AND 0", article: "0" }, { word: "0 AND 0", article: "0" }, { word: "0 AND 1", article: "0" }], categories: ["0", "1"], theme: THEMES.binary },
      ],
      hardwareSort: [
        { id: "en-hw-8-1", title: "Network Types", instruction: "LAN or WAN?", words: [{ word: "School network", article: "LAN" }, { word: "Internet", article: "WAN" }, { word: "Home network", article: "LAN" }, { word: "Mobile network", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware },
        { id: "en-hw-8-2", title: "OSI Model", instruction: "Lower or Upper layer?", words: [{ word: "Bit transmission", article: "Lower" }, { word: "Application", article: "Upper" }, { word: "Physical", article: "Lower" }, { word: "Presentation", article: "Upper" }], categories: ["Lower", "Upper"], theme: THEMES.hardware },
        { id: "en-hw-8-3", title: "Cloud vs Local", instruction: "Cloud or Local?", words: [{ word: "Google Drive", article: "Cloud" }, { word: "External HDD", article: "Local" }, { word: "OneDrive", article: "Cloud" }, { word: "USB drive", article: "Local" }], categories: ["Cloud", "Local"], theme: THEMES.hardware },
      ],
      algorithmSniper: [
        { id: "en-alg-8-1", title: "Logic Gates", instruction: "AND Gate!", words: ["Input A", "Input B", "AND gate", "Output"], correctOrder: ["Input A", "Input B", "AND gate", "Output"], theme: THEMES.algorithm },
        { id: "en-alg-8-2", title: "Database Query", instruction: "Order the SQL!", words: ["SELECT column", "FROM table", "WHERE condition", "ORDER BY field"], correctOrder: ["SELECT column", "FROM table", "WHERE condition", "ORDER BY field"], theme: THEMES.algorithm },
        { id: "en-alg-8-3", title: "Compile Program", instruction: "Order the steps!", words: ["Write source code", "Start compiler", "Fix errors", "Run"], correctOrder: ["Write source code", "Start compiler", "Fix errors", "Run"], theme: THEMES.algorithm },
      ],
      termGuardian: [
        { id: "en-tg-8-1", title: "AI Agents", instruction: "Only AI terms!", targetWord: "AI", wrongWords: ["Floppy disk", "VGA cable", "Mouse", "Ink cartridge"], theme: THEMES.guardian },
        { id: "en-tg-8-2", title: "Database Terms", instruction: "Only database terms!", targetWord: "DB", wrongWords: ["Firewall", "WLAN", "Bluetooth", "Monitor"], theme: THEMES.guardian },
        { id: "en-tg-8-3", title: "Cryptography", instruction: "Only cryptography terms!", targetWord: "Crypto", wrongWords: ["Mouse", "Printer", "Keyboard", "Projector"], theme: THEMES.guardian },
      ],
      securitySturm: [
        { id: "en-sec-8-1", title: "Cryptography", instruction: "Security concepts!", words: ["Encryption", "Public key", "Hash function", "Digital signature"], flashDuration: 1500, theme: THEMES.security },
        { id: "en-sec-8-2", title: "Protocols", instruction: "Security protocols!", words: ["HTTPS", "SSL", "TLS", "SSH"], flashDuration: 2000, theme: THEMES.security },
        { id: "en-sec-8-3", title: "Attack Vectors", instruction: "Remember the attacks!", words: ["Man-in-the-Middle", "Zero-Day exploit", "Social Engineering", "DDoS"], flashDuration: 1800, theme: THEMES.security },
      ],
    }
  }
};
