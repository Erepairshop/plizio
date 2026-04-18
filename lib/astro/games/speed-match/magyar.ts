import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "mag-sm-1",
    taskDescription: {
      en: "Match the formula to the name.",
      de: "Ordne die Formel dem Namen zu.",
      hu: "Párosítsd a képletet a névvel.",
      ro: "Asociază formula cu numele."
    },
    pairs: [
      { id: "p1", a: { en: "H2O", de: "H2O", hu: "H2O", ro: "H2O" }, b: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, isMatch: true },
      { id: "p2", a: { en: "NaCl", de: "NaCl", hu: "NaCl", ro: "NaCl" }, b: { en: "Salt", de: "Salz", hu: "Só", ro: "Sare" }, isMatch: true },
      { id: "p3", a: { en: "O2", de: "O2", hu: "O2", ro: "O2" }, b: { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" }, isMatch: true },
      { id: "p4", a: { en: "Fe", de: "Fe", hu: "Fe", ro: "Fe" }, b: { en: "Iron", de: "Eisen", hu: "Vas", ro: "Fier" }, isMatch: true }
    ]
  },
  {
    id: "mag-sm-2",
    taskDescription: {
      en: "Match the element to its symbol.",
      de: "Ordne das Element seinem Symbol zu.",
      hu: "Párosítsd az elemet a vegyjelével.",
      ro: "Asociază elementul cu simbolul său."
    },
    pairs: [
      { id: "p1", a: { en: "Gold", de: "Gold", hu: "Arany", ro: "Aur" }, b: { en: "Au", de: "Au", hu: "Au", ro: "Au" }, isMatch: true },
      { id: "p2", a: { en: "Silver", de: "Silber", hu: "Ezüst", ro: "Argint" }, b: { en: "Ag", de: "Ag", hu: "Ag", ro: "Ag" }, isMatch: true },
      { id: "p3", a: { en: "Carbon", de: "Kohlenstoff", hu: "Szén", ro: "Carbon" }, b: { en: "C", de: "C", hu: "C", ro: "C" }, isMatch: true },
      { id: "p4", a: { en: "Helium", de: "Helium", hu: "Hélium", ro: "Heliu" }, b: { en: "He", de: "He", hu: "He", ro: "He" }, isMatch: true }
    ]
  },
  {
    id: "mag-sm-3",
    taskDescription: {
      en: "Match the particle to its charge.",
      de: "Ordne das Teilchen seiner Ladung zu.",
      hu: "Párosítsd a részecskét a töltésével.",
      ro: "Asociază particula cu sarcina ei."
    },
    pairs: [
      { id: "p1", a: { en: "Proton", de: "Proton", hu: "Proton", ro: "Proton" }, b: { en: "Positive (+)", de: "Positiv (+)", hu: "Pozitív (+)", ro: "Pozitivă (+)" }, isMatch: true },
      { id: "p2", a: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" }, b: { en: "Negative (-)", de: "Negativ (-)", hu: "Negatív (-)", ro: "Negativă (-)" }, isMatch: true },
      { id: "p3", a: { en: "Neutron", de: "Neutron", hu: "Neutron", ro: "Neutron" }, b: { en: "Neutral (0)", de: "Neutral (0)", hu: "Semleges (0)", ro: "Neutră (0)" }, isMatch: true }
    ]
  }
];
