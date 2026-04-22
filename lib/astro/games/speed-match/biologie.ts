import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "bio-sm-1",
    taskDescription: {
      en: "Do these match? (Organ & Function)",
      de: "Passen diese zusammen? (Organ & Funktion)",
      hu: "Egyeznek? (Szerv és funkció)",
      ro: "Se potrivesc? (Organ și Funcție)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Heart", de: "Herz", hu: "Szív", ro: "Inimă" },
        b: { en: "Pumps blood", de: "Pumpt Blut", hu: "Vért pumpál", ro: "Pompează sânge" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Lungs", de: "Lungen", hu: "Tüdő", ro: "Plămâni" },
        b: { en: "Digests food", de: "Verdaut Nahrung", hu: "Emészti az ételt", ro: "Digeră hrana" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "Brain", de: "Gehirn", hu: "Agy", ro: "Creier" },
        b: { en: "Controls body", de: "Steuert den Körper", hu: "Irányítja a testet", ro: "Controlează corpul" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Stomach", de: "Magen", hu: "Gyomor", ro: "Stomac" },
        b: { en: "Filters blood", de: "Filtert Blut", hu: "Szűri a vért", ro: "Filtrează sângele" },
        isMatch: false,
      },
    ]
  },
  {
    id: "bio-sm-2",
    taskDescription: {
      en: "Do these match? (Cell part & Function)",
      de: "Passen diese zusammen? (Zellteil & Funktion)",
      hu: "Egyeznek? (Sejtalkotó és funkció)",
      ro: "Se potrivesc? (Parte a celulei și Funcție)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Nucleus", de: "Zellkern", hu: "Sejtmag", ro: "Nucleu" },
        b: { en: "Control center", de: "Steuerzentrum", hu: "Irányítóközpont", ro: "Centru de control" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Mitochondria", de: "Mitochondrien", hu: "Mitokondrium", ro: "Mitocondrie" },
        b: { en: "Makes energy", de: "Macht Energie", hu: "Energiát termel", ro: "Produce energie" },
        isMatch: true,
      },
      {
        id: "p3",
        a: { en: "Cell wall", de: "Zellwand", hu: "Sejtfal", ro: "Perete celular" },
        b: { en: "In animal cells", de: "In Tierzellen", hu: "Állati sejtekben", ro: "În celule animale" },
        isMatch: false,
      },
      {
        id: "p4",
        a: { en: "Chloroplast", de: "Chloroplast", hu: "Kloroplasztisz", ro: "Cloroplast" },
        b: { en: "Photosynthesis", de: "Photosynthese", hu: "Fotoszintézis", ro: "Fotosinteză" },
        isMatch: true,
      },
    ]
  },
  {
    id: "bio-sm-3",
    taskDescription: {
      en: "Do these match? (Animal & Classification)",
      de: "Passen diese zusammen? (Tier & Klassifizierung)",
      hu: "Egyeznek? (Állat és osztályozás)",
      ro: "Se potrivesc? (Animal și Clasificare)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Dolphin", de: "Delfin", hu: "Delfin", ro: "Delfin" },
        b: { en: "Mammal", de: "Säugetier", hu: "Emlős", ro: "Mamifer" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Penguin", de: "Pinguin", hu: "Pingvin", ro: "Pinguin" },
        b: { en: "Fish", de: "Fisch", hu: "Hal", ro: "Pește" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "Frog", de: "Frosch", hu: "Béka", ro: "Broască" },
        b: { en: "Amphibian", de: "Amphibie", hu: "Kétéltű", ro: "Amfibian" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Spider", de: "Spinne", hu: "Pók", ro: "Păianjen" },
        b: { en: "Insect", de: "Insekt", hu: "Rovar", ro: "Insectă" },
        isMatch: false,
      },
    ]
  }
];