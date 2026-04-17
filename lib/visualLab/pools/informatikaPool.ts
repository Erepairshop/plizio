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
      binaryAsteroids: [{ id: "de-bin-5-1", title: "Binärsystem", instruction: "0 oder 1?", words: [{ word: "Ein", article: "1" }, { word: "Aus", article: "0" }], categories: ["0", "1"], theme: THEMES.binary }],
      hardwareSort: [{ id: "de-hw-5-1", title: "Hardware", instruction: "Eingabe oder Ausgabe?", words: [{ word: "Maus", article: "Input" }, { word: "Monitor", article: "Output" }], categories: ["Input", "Output"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "de-alg-5-1", title: "Anmeldung", instruction: "Schritte ordnen!", words: ["PC an", "Passwort", "Enter"], correctOrder: ["PC an", "Passwort", "Enter"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "de-tg-5-1", title: "Software", instruction: "Nur Hardware!", targetWord: "Hardware", wrongWords: ["Windows", "Chrome"], theme: THEMES.guardian }],
      securitySturm: [{ id: "de-sec-5-1", title: "Dateien", instruction: "Bildformate merken!", words: [".jpg", ".png"], flashDuration: 2000, theme: THEMES.security }]
    },
    6: {
      grade: 6,
      binaryAsteroids: [{ id: "de-bin-6-1", title: "Einheiten", instruction: "Bit oder Byte?", words: [{ word: "8 Bits", article: "Byte" }, { word: "Kleinste", article: "Bit" }], categories: ["Bit", "Byte"], theme: THEMES.binary }],
      hardwareSort: [{ id: "de-hw-6-1", title: "Speicher", instruction: "Magnetisch oder Optisch?", words: [{ word: "HDD", article: "Magnetisch" }, { word: "DVD", article: "Optisch" }], categories: ["Magnetisch", "Optisch"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "de-alg-6-1", title: "Schleifen", instruction: "Zyklus bauen!", words: ["Start", "Wiederhole", "Ende"], correctOrder: ["Start", "Wiederhole", "Ende"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "de-tg-6-1", title: "Internet", instruction: "Nur Web-Begriffe!", targetWord: "Web", wrongWords: ["Maus", "CPU"], theme: THEMES.guardian }],
      securitySturm: [{ id: "de-sec-6-1", title: "Sicherheit", instruction: "Passwörter merken!", words: ["Zahlen", "Großbuchstaben"], flashDuration: 2500, theme: THEMES.security }]
    },
    7: {
      grade: 7,
      binaryAsteroids: [{ id: "de-bin-7-1", title: "2er Potenzen", instruction: "Wert?", words: [{ word: "2^0", article: "1" }, { word: "2^3", article: "8" }], categories: ["1", "8"], theme: THEMES.binary }],
      hardwareSort: [{ id: "de-hw-7-1", title: "CPU vs RAM", instruction: "Was ist was?", words: [{ word: "Kern", article: "CPU" }, { word: "Speicher", article: "RAM" }], categories: ["CPU", "RAM"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "de-alg-7-1", title: "Bedingung", instruction: "Falls-Dann!", words: ["Falls", "Dann", "Sonst"], correctOrder: ["Falls", "Dann", "Sonst"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "de-tg-7-1", title: "OS", instruction: "Nur Betriebssysteme!", targetWord: "OS", wrongWords: ["Word", "Excel"], theme: THEMES.guardian }],
      securitySturm: [{ id: "de-sec-7-1", title: "Malware", instruction: "Viren merken!", words: ["Trojaner", "Wurm"], flashDuration: 2000, theme: THEMES.security }]
    },
    8: {
      grade: 8,
      binaryAsteroids: [{ id: "de-bin-8-1", title: "4-bit Rechnen", instruction: "Dezimal?", words: [{ word: "1010", article: "10" }, { word: "1111", article: "15" }], categories: ["10", "15"], theme: THEMES.binary }],
      hardwareSort: [{ id: "de-hw-8-1", title: "Netzwerk", instruction: "LAN oder WAN?", words: [{ word: "Haus", article: "LAN" }, { word: "Welt", article: "WAN" }], categories: ["LAN", "WAN"], theme: THEMES.hardware }],
      algorithmSniper: [{ id: "de-alg-8-1", title: "Logik", instruction: "UND-Verknüpfung!", words: ["Eingang A", "UND", "Ausgang"], correctOrder: ["Eingang A", "UND", "Ausgang"], theme: THEMES.algorithm }],
      termGuardian: [{ id: "de-tg-8-1", title: "KI-Agenten", instruction: "Nur KI-Begriffe!", targetWord: "KI", wrongWords: ["Diskette", "VGA"], theme: THEMES.guardian }],
      securitySturm: [{ id: "de-sec-8-1", title: "Krypto", instruction: "Verschlüsselung!", words: ["Key", "SSL", "Hash"], flashDuration: 1500, theme: THEMES.security }]
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
