import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "round1",
    taskDescription: {
      en: "Do these match? (Animals & Classes)",
      de: "Passen diese zusammen? (Tiere & Klassen)",
      hu: "Egyeznek? (Állatok és osztályaik)",
      ro: "Se potrivesc? (Animale și Clase)",
    },
    pairs: [
      {
        id: "r1-1",
        a: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" },
        b: { en: "Mammal", de: "Säugetier", hu: "Emlős", ro: "Mamifer" },
        isMatch: true,
      },
      {
        id: "r1-2",
        a: { en: "Frog", de: "Frosch", hu: "Béka", ro: "Broască" },
        b: { en: "Reptile", de: "Reptil", hu: "Hüllő", ro: "Reptilă" },
        isMatch: false,
      },
      {
        id: "r1-3",
        a: { en: "Eagle", de: "Adler", hu: "Sas", ro: "Vultur" },
        b: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" },
        isMatch: true,
      },
      {
        id: "r1-4",
        a: { en: "Shark", de: "Hai", hu: "Cápa", ro: "Rechin" },
        b: { en: "Mammal", de: "Säugetier", hu: "Emlős", ro: "Mamifer" },
        isMatch: false,
      },
    ]
  },
  {
    id: "round2",
    taskDescription: {
      en: "Do these match? (Materials & States)",
      de: "Passen diese zusammen? (Materialien & Zustände)",
      hu: "Egyeznek? (Anyagok és halmazállapotok)",
      ro: "Se potrivesc? (Materiale și Stări)",
    },
    pairs: [
      {
        id: "r2-1",
        a: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" },
        b: { en: "Liquid", de: "Flüssig", hu: "Folyékony", ro: "Lichid" },
        isMatch: true,
      },
      {
        id: "r2-2",
        a: { en: "Iron", de: "Eisen", hu: "Vas", ro: "Fier" },
        b: { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" },
        isMatch: false,
      },
      {
        id: "r2-3",
        a: { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" },
        b: { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" },
        isMatch: true,
      },
      {
        id: "r2-4",
        a: { en: "Wood", de: "Holz", hu: "Fa", ro: "Lemn" },
        b: { en: "Liquid", de: "Flüssig", hu: "Folyékony", ro: "Lichid" },
        isMatch: false,
      },
    ]
  },
  {
    id: "round3",
    taskDescription: {
      en: "Do these match? (Planets & Facts)",
      de: "Passen diese zusammen? (Planeten & Fakten)",
      hu: "Egyeznek? (Bolygók és tények)",
      ro: "Se potrivesc? (Planete și Fapte)",
    },
    pairs: [
      {
        id: "r3-1",
        a: { en: "Earth", de: "Erde", hu: "Föld", ro: "Pământ" },
        b: { en: "Has water", de: "Hat Wasser", hu: "Van vize", ro: "Are apă" },
        isMatch: true,
      },
      {
        id: "r3-2",
        a: { en: "Sun", de: "Sonne", hu: "Nap", ro: "Soare" },
        b: { en: "Planet", de: "Planet", hu: "Bolygó", ro: "Planetă" },
        isMatch: false,
      },
      {
        id: "r3-3",
        a: { en: "Mars", de: "Mars", hu: "Mars", ro: "Marte" },
        b: { en: "Red Planet", de: "Roter Planet", hu: "Vörös bolygó", ro: "Planeta Roșie" },
        isMatch: true,
      },
      {
        id: "r3-4",
        a: { en: "Jupiter", de: "Jupiter", hu: "Jupiter", ro: "Jupiter" },
        b: { en: "Smallest", de: "Kleinster", hu: "Legkisebb", ro: "Cel mai mic" },
        isMatch: false,
      },
    ]
  }
];
