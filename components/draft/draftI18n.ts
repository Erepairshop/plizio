// Draft panel translations — HU / DE / EN / RO

export type DraftLang = "HU" | "DE" | "EN" | "RO";

export function getDraftLang(countryCode: string): DraftLang {
  if (countryCode === "HU") return "HU";
  if (countryCode === "RO") return "RO";
  if (countryCode === "US" || countryCode === "GB") return "EN";
  return "DE"; // default
}

interface DraftTranslations {
  // DraftPanel tabs
  tabColumn: string;
  tabColumnShort: string;
  tabMultiplication: string;
  tabDivision: string;
  tabFree: string;
  tabFreeShort: string;

  // Shared button titles
  addRow: string;
  removeRow: string;
  clearAll: string;
  undo: string;

  // Section headers
  divisionHeader: string;
  multiplicationHeader: string;
  freeHeader: string;

  // Footer hints
  columnHint: string;
  divisionHint: string;
  multiplicationHint: string;
  freeHint: string;

  // MathQuestionDisplay draft button
  showDraft: string;
  hideDraft: string;
}

const T: Record<DraftLang, DraftTranslations> = {
  HU: {
    tabColumn: "Oszlopok",
    tabColumnShort: "+/-",
    tabMultiplication: "Szorzás",
    tabDivision: "Osztás",
    tabFree: "Szabadkézi",
    tabFreeShort: "Vázlat",
    addRow: "Sor hozzáadása",
    removeRow: "Utolsó sor törlése",
    clearAll: "Mindent töröl",
    undo: "Visszavonás",
    divisionHeader: "Osztás",
    multiplicationHeader: "Szorzás",
    freeHeader: "Szabadkézi",
    columnHint: "Nyilak: navigáció · Enter: következő sor · Vonalgomb: vonal alá",
    divisionHint: "Nyilak: navigáció · Enter: következő sor · Vonalgomb: vonal alá",
    multiplicationHint: "1. sor: szorzandó · 2. sor: szorzó · Alatta: részeredmények",
    freeHint: "Rajzolj szabadon ujjal vagy egérrel",
    showDraft: "Piszkozat megjelenítése",
    hideDraft: "Piszkozat elrejtése",
  },
  DE: {
    tabColumn: "Spalten",
    tabColumnShort: "+/-",
    tabMultiplication: "Multiplikation",
    tabDivision: "Division",
    tabFree: "Freihand",
    tabFreeShort: "Skizze",
    addRow: "Zeile hinzufügen",
    removeRow: "Letzte Zeile löschen",
    clearAll: "Alles löschen",
    undo: "Rückgängig",
    divisionHeader: "Division",
    multiplicationHeader: "Multiplikation",
    freeHeader: "Freihand",
    columnHint: "Pfeile: Navigation · Enter: nächste Zeile · Linientaste: Linie unten",
    divisionHint: "Pfeile: Navigation · Enter: nächste Zeile · Linientaste: Linie unten",
    multiplicationHint: "1. Zeile: Multiplikand · 2. Zeile: Multiplikator · Darunter: Teilprodukte",
    freeHint: "Zeichne frei mit Finger oder Maus",
    showDraft: "Entwurf anzeigen",
    hideDraft: "Entwurf ausblenden",
  },
  EN: {
    tabColumn: "Columns",
    tabColumnShort: "+/-",
    tabMultiplication: "Multiply",
    tabDivision: "Division",
    tabFree: "Freehand",
    tabFreeShort: "Sketch",
    addRow: "Add row",
    removeRow: "Remove last row",
    clearAll: "Clear all",
    undo: "Undo",
    divisionHeader: "Division",
    multiplicationHeader: "Multiplication",
    freeHeader: "Freehand",
    columnHint: "Arrows: navigate · Enter: next row · Line button: underline",
    divisionHint: "Arrows: navigate · Enter: next row · Line button: underline",
    multiplicationHint: "Row 1: multiplicand · Row 2: multiplier · Below: partial results",
    freeHint: "Draw freely with finger or mouse",
    showDraft: "Show draft",
    hideDraft: "Hide draft",
  },
  RO: {
    tabColumn: "Coloane",
    tabColumnShort: "+/-",
    tabMultiplication: "Înmulțire",
    tabDivision: "Împărțire",
    tabFree: "Liber",
    tabFreeShort: "Schiță",
    addRow: "Adaugă rând",
    removeRow: "Șterge ultimul rând",
    clearAll: "Șterge tot",
    undo: "Anulează",
    divisionHeader: "Împărțire",
    multiplicationHeader: "Înmulțire",
    freeHeader: "Liber",
    columnHint: "Săgeți: navigare · Enter: rândul următor · Buton linie: linie jos",
    divisionHint: "Săgeți: navigare · Enter: rândul următor · Buton linie: linie jos",
    multiplicationHint: "Rândul 1: deînmulțit · Rândul 2: înmulțitor · Jos: rezultate parțiale",
    freeHint: "Desenează liber cu degetul sau mouse-ul",
    showDraft: "Arată ciorna",
    hideDraft: "Ascunde ciorna",
  },
};

export function getDraftT(countryCode: string): DraftTranslations {
  return T[getDraftLang(countryCode)];
}
