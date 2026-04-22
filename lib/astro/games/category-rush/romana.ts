import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "rom-cr-1",
    durationMs: 40000,
    categories: [
      { id: "c-acid", label: { en: "Acid", de: "Säure", hu: "Sav", ro: "Acid" }, edge: "top", color: "#E91E63" },
      { id: "c-base", label: { en: "Base", de: "Base", hu: "Lúg", ro: "Bază" }, edge: "bottom", color: "#03A9F4" },
      { id: "c-metal", label: { en: "Metal", de: "Metall", hu: "Fém", ro: "Metal" }, edge: "left", color: "#4CAF50" },
      { id: "c-gas", label: { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" }, edge: "right", color: "#FFC107" }
    ],
    items: [
      { id: "i1", label: { en: "Lemon juice", de: "Zitronensaft", hu: "Citromlé", ro: "Suc de lămâie" }, correctCategoryId: "c-acid" },
      { id: "i2", label: { en: "Soap", de: "Seife", hu: "Szappan", ro: "Săpun" }, correctCategoryId: "c-base" },
      { id: "i3", label: { en: "Iron", de: "Eisen", hu: "Vas", ro: "Fier" }, correctCategoryId: "c-metal" },
      { id: "i4", label: { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" }, correctCategoryId: "c-gas" },
      { id: "i5", label: { en: "Vinegar", de: "Essig", hu: "Ecet", ro: "Oțet" }, correctCategoryId: "c-acid" },
      { id: "i6", label: { en: "Helium", de: "Helium", hu: "Hélium", ro: "Heliu" }, correctCategoryId: "c-gas" }
    ]
  },
  {
    id: "rom-cr-2",
    durationMs: 40000,
    categories: [
      { id: "c-element", label: { en: "Element", de: "Element", hu: "Elem", ro: "Element" }, edge: "top", color: "#E91E63" },
      { id: "c-compound", label: { en: "Compound", de: "Verbindung", hu: "Vegyület", ro: "Compus" }, edge: "bottom", color: "#03A9F4" }
    ],
    items: [
      { id: "i1", label: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, correctCategoryId: "c-compound" },
      { id: "i2", label: { en: "Gold", de: "Gold", hu: "Arany", ro: "Aur" }, correctCategoryId: "c-element" },
      { id: "i3", label: { en: "Salt", de: "Salz", hu: "Só", ro: "Sare" }, correctCategoryId: "c-compound" },
      { id: "i4", label: { en: "Carbon", de: "Kohlenstoff", hu: "Szén", ro: "Carbon" }, correctCategoryId: "c-element" },
      { id: "i5", label: { en: "Silver", de: "Silber", hu: "Ezüst", ro: "Argint" }, correctCategoryId: "c-element" },
      { id: "i6", label: { en: "Sugar", de: "Zucker", hu: "Cukor", ro: "Zahăr" }, correctCategoryId: "c-compound" }
    ]
  },
  {
    id: "rom-cr-3",
    durationMs: 40000,
    categories: [
      { id: "c-atom", label: { en: "Atomic Particle", de: "Atomteilchen", hu: "Atomi részecske", ro: "Particulă atomică" }, edge: "top", color: "#9C27B0" },
      { id: "c-molecule", label: { en: "Molecule", de: "Molekül", hu: "Molekula", ro: "Moleculă" }, edge: "bottom", color: "#FF9800" }
    ],
    items: [
      { id: "i1", label: { en: "Proton", de: "Proton", hu: "Proton", ro: "Proton" }, correctCategoryId: "c-atom" },
      { id: "i2", label: { en: "H2O", de: "H2O", hu: "H2O", ro: "H2O" }, correctCategoryId: "c-molecule" },
      { id: "i3", label: { en: "Neutron", de: "Neutron", hu: "Neutron", ro: "Neutron" }, correctCategoryId: "c-atom" },
      { id: "i4", label: { en: "CO2", de: "CO2", hu: "CO2", ro: "CO2" }, correctCategoryId: "c-molecule" },
      { id: "i5", label: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" }, correctCategoryId: "c-atom" },
      { id: "i6", label: { en: "O2", de: "O2", hu: "O2", ro: "O2" }, correctCategoryId: "c-molecule" }
    ]
  },
  {
    id: "rom-cr-4",
    durationMs: 40000,
    categories: [
      { id: "c-physical", label: { en: "Physical Change", de: "Physik. Änderung", hu: "Fizikai változás", ro: "Schimbare fizică" }, edge: "left", color: "#607D8B" },
      { id: "c-chemical", label: { en: "Chemical Change", de: "Chem. Änderung", hu: "Kémiai változás", ro: "Schimbare chimică" }, edge: "right", color: "#795548" }
    ],
    items: [
      { id: "i1", label: { en: "Melting ice", de: "Eis schmelzen", hu: "Jég olvadása", ro: "Topirea gheții" }, correctCategoryId: "c-physical" },
      { id: "i2", label: { en: "Burning wood", de: "Holz brennen", hu: "Fa égése", ro: "Arderea lemnului" }, correctCategoryId: "c-chemical" },
      { id: "i3", label: { en: "Boiling water", de: "Wasser kochen", hu: "Víz forralása", ro: "Fierberea apei" }, correctCategoryId: "c-physical" },
      { id: "i4", label: { en: "Rusting iron", de: "Eisen rosten", hu: "Vas rozsdásodása", ro: "Ruginirea fierului" }, correctCategoryId: "c-chemical" },
      { id: "i5", label: { en: "Cutting paper", de: "Papier schneiden", hu: "Papír vágása", ro: "Tăierea hârtiei" }, correctCategoryId: "c-physical" },
      { id: "i6", label: { en: "Baking a cake", de: "Kuchen backen", hu: "Sütemény sütése", ro: "Coacerea unei prăjituri" }, correctCategoryId: "c-chemical" }
    ]
  }
];
