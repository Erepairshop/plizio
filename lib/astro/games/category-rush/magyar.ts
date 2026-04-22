import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "mag-cr-1",
    durationMs: 40000,
    categories: [
      { id: "c-element", label: { en: "Element", de: "Element", hu: "Elem", ro: "Element" }, edge: "top", color: "#E91E63" },
      { id: "c-compound", label: { en: "Compound", de: "Verbindung", hu: "Vegyület", ro: "Compus" }, edge: "bottom", color: "#03A9F4" }
    ],
    items: [
      { id: "i1", label: { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" }, correctCategoryId: "c-element" },
      { id: "i2", label: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, correctCategoryId: "c-compound" },
      { id: "i3", label: { en: "Iron", de: "Eisen", hu: "Vas", ro: "Fier" }, correctCategoryId: "c-element" },
      { id: "i4", label: { en: "Salt", de: "Salz", hu: "Só", ro: "Sare" }, correctCategoryId: "c-compound" },
      { id: "i5", label: { en: "Gold", de: "Gold", hu: "Arany", ro: "Aur" }, correctCategoryId: "c-element" },
      { id: "i6", label: { en: "Carbon dioxide", de: "Kohlendioxid", hu: "Szén-dioxid", ro: "Dioxid de carbon" }, correctCategoryId: "c-compound" }
    ]
  },
  {
    id: "mag-cr-2",
    durationMs: 40000,
    categories: [
      { id: "c-atom", label: { en: "Atomic Particle", de: "Atomteilchen", hu: "Atomi részecske", ro: "Particulă atomică" }, edge: "top", color: "#9C27B0" },
      { id: "c-molecule", label: { en: "Molecule", de: "Molekül", hu: "Molekula", ro: "Moleculă" }, edge: "bottom", color: "#FF9800" }
    ],
    items: [
      { id: "i1", label: { en: "Proton", de: "Proton", hu: "Proton", ro: "Proton" }, correctCategoryId: "c-atom" },
      { id: "i2", label: { en: "H2O", de: "H2O", hu: "H2O", ro: "H2O" }, correctCategoryId: "c-molecule" },
      { id: "i3", label: { en: "Neutron", de: "Neutron", hu: "Neutron", ro: "Neutron" }, correctCategoryId: "c-atom" },
      { id: "i4", label: { en: "O2", de: "O2", hu: "O2", ro: "O2" }, correctCategoryId: "c-molecule" },
      { id: "i5", label: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" }, correctCategoryId: "c-atom" },
      { id: "i6", label: { en: "NH3", de: "NH3", hu: "NH3", ro: "NH3" }, correctCategoryId: "c-molecule" }
    ]
  },
  {
    id: "mag-cr-3",
    durationMs: 40000,
    categories: [
      { id: "c-acid", label: { en: "Acid", de: "Säure", hu: "Sav", ro: "Acid" }, edge: "left", color: "#F44336" },
      { id: "c-base", label: { en: "Base", de: "Base", hu: "Lúg", ro: "Bază" }, edge: "right", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "Vinegar", de: "Essig", hu: "Ecet", ro: "Oțet" }, correctCategoryId: "c-acid" },
      { id: "i2", label: { en: "Soap", de: "Seife", hu: "Szappan", ro: "Săpun" }, correctCategoryId: "c-base" },
      { id: "i3", label: { en: "Lemon juice", de: "Zitronensaft", hu: "Citromlé", ro: "Suc de lămâie" }, correctCategoryId: "c-acid" },
      { id: "i4", label: { en: "Baking soda", de: "Backpulver", hu: "Szódabikarbóna", ro: "Bicarbonat de sodiu" }, correctCategoryId: "c-base" },
      { id: "i5", label: { en: "Hydrochloric acid", de: "Salzsäure", hu: "Sósav", ro: "Acid clorhidric" }, correctCategoryId: "c-acid" },
      { id: "i6", label: { en: "Ammonia", de: "Ammoniak", hu: "Ammónia", ro: "Amoniac" }, correctCategoryId: "c-base" }
    ]
  }
];
