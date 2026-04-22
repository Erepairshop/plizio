import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "rom-sm-1",
    taskDescription: {
      en: "Match the formula to the name.",
      de: "Ordne die Formel dem Namen zu.",
      hu: "Párosítsd a képletet a névvel.",
      ro: "Asociază formula cu numele."
    },
    pairs: [
      { id: "p1", a: { en: "H2O", de: "H2O", hu: "H2O", ro: "H2O" }, b: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, isMatch: true },
      { id: "p2", a: { en: "CO2", de: "CO2", hu: "CO2", ro: "CO2" }, b: { en: "Carbon dioxide", de: "Kohlendioxid", hu: "Szén-dioxid", ro: "Dioxid de carbon" }, isMatch: true },
      { id: "p3", a: { en: "O2", de: "O2", hu: "O2", ro: "O2" }, b: { en: "Oxygen gas", de: "Sauerstoffgas", hu: "Oxigéngáz", ro: "Gaz oxigen" }, isMatch: true },
      { id: "p4", a: { en: "NaCl", de: "NaCl", hu: "NaCl", ro: "NaCl" }, b: { en: "Salt", de: "Salz", hu: "Só", ro: "Sare" }, isMatch: true }
    ]
  },
  {
    id: "rom-sm-2",
    taskDescription: {
      en: "Match the particle to its charge.",
      de: "Ordne das Teilchen seiner Ladung zu.",
      hu: "Párosítsd a részecskét a töltésével.",
      ro: "Asociază particula cu sarcina ei."
    },
    pairs: [
      { id: "p1", a: { en: "Proton", de: "Proton", hu: "Proton", ro: "Proton" }, b: { en: "Positive charge", de: "Positive Ladung", hu: "Pozitív töltés", ro: "Sarcină pozitivă" }, isMatch: true },
      { id: "p2", a: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" }, b: { en: "Negative charge", de: "Negative Ladung", hu: "Negatív töltés", ro: "Sarcină negatíva" }, isMatch: true },
      { id: "p3", a: { en: "Neutron", de: "Neutron", hu: "Neutron", ro: "Neutron" }, b: { en: "No charge", de: "Keine Ladung", hu: "Nincs töltés", ro: "Fără sarcină" }, isMatch: true },
      { id: "p4", a: { en: "Atom", de: "Atom", hu: "Atom", ro: "Atom" }, b: { en: "Neutral overall", de: "Neutral", hu: "Semleges", ro: "Neutru" }, isMatch: true }
    ]
  },
  {
    id: "rom-sm-3",
    taskDescription: {
      en: "Match the element to its symbol.",
      de: "Ordne das Element seinem Symbol zu.",
      hu: "Párosítsd az elemet a vegyjelével.",
      ro: "Asociază elementul cu simbolul său."
    },
    pairs: [
      { id: "p1", a: { en: "Iron", de: "Eisen", hu: "Vas", ro: "Fier" }, b: { en: "Fe", de: "Fe", hu: "Fe", ro: "Fe" }, isMatch: true },
      { id: "p2", a: { en: "Gold", de: "Gold", hu: "Arany", ro: "Aur" }, b: { en: "Au", de: "Au", hu: "Au", ro: "Au" }, isMatch: true },
      { id: "p3", a: { en: "Silver", de: "Silber", hu: "Ezüst", ro: "Argint" }, b: { en: "Ag", de: "Ag", hu: "Ag", ro: "Ag" }, isMatch: true },
      { id: "p4", a: { en: "Lead", de: "Blei", hu: "Ólom", ro: "Plumb" }, b: { en: "Pb", de: "Pb", hu: "Pb", ro: "Pb" }, isMatch: true }
    ]
  },
  {
    id: "rom-sm-4",
    taskDescription: {
      en: "Match the state of matter to its description.",
      de: "Ordne den Aggregatzustand seiner Beschreibung zu.",
      hu: "Párosítsd a halmazállapotot a leírásával.",
      ro: "Asociază starea de agregare cu descrierea sa."
    },
    pairs: [
      { id: "p1", a: { en: "Solid", de: "Fest", hu: "Szilárd", ro: "Solid" }, b: { en: "Fixed shape", de: "Feste Form", hu: "Állandó alak", ro: "Formă fixă" }, isMatch: true },
      { id: "p2", a: { en: "Liquid", de: "Flüssig", hu: "Folyékony", ro: "Lichid" }, b: { en: "Flows", de: "Fließt", hu: "Folyik", ro: "Curge" }, isMatch: true },
      { id: "p3", a: { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" }, b: { en: "Fills container", de: "Füllt Behälter", hu: "Kitölti a teret", ro: "Umple recipientul" }, isMatch: true },
      { id: "p4", a: { en: "Plasma", de: "Plasma", hu: "Plazma", ro: "Plasmă" }, b: { en: "Ionized gas", de: "Ionisiertes Gas", hu: "Ionizált gáz", ro: "Gaz ionizat" }, isMatch: true }
    ]
  }
];
