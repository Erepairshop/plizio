import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "info-sm-1",
    taskDescription: {
      en: "Do these match? (Hardware & Type)",
      de: "Passen diese zusammen? (Hardware & Typ)",
      hu: "Egyeznek? (Hardver és típus)",
      ro: "Se potrivesc? (Hardware și Tip)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "CPU", de: "CPU", hu: "Processzor", ro: "CPU" },
        b: { en: "Processing", de: "Verarbeitung", hu: "Feldolgozás", ro: "Procesare" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "SSD", de: "SSD", hu: "SSD", ro: "SSD" },
        b: { en: "Input", de: "Eingabe", hu: "Bemenet", ro: "Intrare" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "RAM", de: "RAM", hu: "Memória", ro: "RAM" },
        b: { en: "Short-term storage", de: "Kurzzeitspeicher", hu: "Ideiglenes tárolás", ro: "Stocare temporară" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Monitor", de: "Monitor", hu: "Monitor", ro: "Monitor" },
        b: { en: "Software", de: "Software", hu: "Szoftver", ro: "Software" },
        isMatch: false,
      },
    ]
  },
  {
    id: "info-sm-2",
    taskDescription: {
      en: "Do these match? (Extension & File Type)",
      de: "Passen diese zusammen? (Erweiterung & Dateityp)",
      hu: "Egyeznek? (Kiterjesztés és fájltípus)",
      ro: "Se potrivesc? (Extensie și Tip de fișier)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: ".jpg", de: ".jpg", hu: ".jpg", ro: ".jpg" },
        b: { en: "Image", de: "Bild", hu: "Kép", ro: "Imagine" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: ".mp3", de: ".mp3", hu: ".mp3", ro: ".mp3" },
        b: { en: "Text", de: "Text", hu: "Szöveg", ro: "Text" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: ".docx", de: ".docx", hu: ".docx", ro: ".docx" },
        b: { en: "Document", de: "Dokument", hu: "Dokumentum", ro: "Document" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: ".exe", de: ".exe", hu: ".exe", ro: ".exe" },
        b: { en: "Program", de: "Programm", hu: "Program", ro: "Program" },
        isMatch: true,
      },
    ]
  }
];
