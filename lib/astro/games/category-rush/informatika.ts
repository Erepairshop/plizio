import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "info-cr-1",
    durationMs: 30000,
    categories: [
      { id: "c-hardware", label: { en: "Hardware", de: "Hardware", hu: "Hardver", ro: "Hardware" }, edge: "top", color: "#E91E63" },
      { id: "c-software", label: { en: "Software", de: "Software", hu: "Szoftver", ro: "Software" }, edge: "bottom", color: "#03A9F4" },
    ],
    items: [
      { id: "i1", label: { en: "Mouse", de: "Maus", hu: "Egér", ro: "Mouse" }, correctCategoryId: "c-hardware" },
      { id: "i2", label: { en: "Browser", de: "Browser", hu: "Böngésző", ro: "Browser" }, correctCategoryId: "c-software" },
      { id: "i3", label: { en: "Monitor", de: "Monitor", hu: "Monitor", ro: "Monitor" }, correctCategoryId: "c-hardware" },
      { id: "i4", label: { en: "Windows", de: "Windows", hu: "Windows", ro: "Windows" }, correctCategoryId: "c-software" },
      { id: "i5", label: { en: "Keyboard", de: "Tastatur", hu: "Billentyűzet", ro: "Tastatură" }, correctCategoryId: "c-hardware" },
      { id: "i6", label: { en: "Paint", de: "Malen", hu: "Paint", ro: "Paint" }, correctCategoryId: "c-software" }
    ]
  },
  {
    id: "info-cr-2",
    durationMs: 30000,
    categories: [
      { id: "c-input", label: { en: "Input", de: "Eingabe", hu: "Bemenet", ro: "Intrare" }, edge: "left", color: "#4CAF50" },
      { id: "c-output", label: { en: "Output", de: "Ausgabe", hu: "Kimenet", ro: "Ieșire" }, edge: "right", color: "#FFC107" }
    ],
    items: [
      { id: "i1", label: { en: "Microphone", de: "Mikrofon", hu: "Mikrofon", ro: "Microfon" }, correctCategoryId: "c-input" },
      { id: "i2", label: { en: "Printer", de: "Drucker", hu: "Nyomtató", ro: "Imprimantă" }, correctCategoryId: "c-output" },
      { id: "i3", label: { en: "Scanner", de: "Scanner", hu: "Szkenner", ro: "Scanner" }, correctCategoryId: "c-input" },
      { id: "i4", label: { en: "Speaker", de: "Lautsprecher", hu: "Hangszóró", ro: "Difuzor" }, correctCategoryId: "c-output" },
      { id: "i5", label: { en: "Webcam", de: "Webcam", hu: "Webkamera", ro: "Webcam" }, correctCategoryId: "c-input" },
      { id: "i6", label: { en: "Projector", de: "Projektor", hu: "Projektor", ro: "Proiector" }, correctCategoryId: "c-output" }
    ]
  }
];
