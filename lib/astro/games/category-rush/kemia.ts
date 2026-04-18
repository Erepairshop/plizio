import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "kem-cr-1",
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
    id: "kem-cr-2",
    durationMs: 40000,
    categories: [
      { id: "c-element", label: { en: "Element", de: "Element", hu: "Elem", ro: "Element" }, edge: "top", color: "#E91E63" },
      { id: "c-compound", label: { en: "Compound", de: "Verbindung", hu: "Vegyület", ro: "Compus" }, edge: "bottom", color: "#03A9F4" }
    ],
    items: [
      { id: "i1", label: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, correctCategoryId: "c-compound" },
      { id: "i2", label: { en: "Gold", de: "Gold", hu: "Arany", ro: "Aur" }, correctCategoryId: "c-element" },
      { id: "i3", label: { en: "Salt", de: "Salz", hu: "Só", ro: "Sare" }, correctCategoryId: "c-compound" },
      { id: "i4", label: { en: "Carbon", de: "Kohlenstoff", hu: "Szén", ro: "Carbon" }, correctCategoryId: "c-element" }
    ]
  }
];
