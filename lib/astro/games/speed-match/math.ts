import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "math-sm-1",
    taskDescription: {
      en: "Do these match? (Fraction & Decimal)",
      de: "Passen diese zusammen? (Bruch & Dezimalzahl)",
      hu: "Egyeznek? (Tört és tizedestört)",
      ro: "Se potrivesc? (Fracție și Zecimală)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "1/2", de: "1/2", hu: "1/2", ro: "1/2" },
        b: { en: "0.5", de: "0,5", hu: "0,5", ro: "0,5" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "1/4", de: "1/4", hu: "1/4", ro: "1/4" },
        b: { en: "0.25", de: "0,25", hu: "0,25", ro: "0,25" },
        isMatch: true,
      },
      {
        id: "p3",
        a: { en: "3/4", de: "3/4", hu: "3/4", ro: "3/4" },
        b: { en: "0.7", de: "0,7", hu: "0,7", ro: "0,7" },
        isMatch: false,
      },
      {
        id: "p4",
        a: { en: "1/10", de: "1/10", hu: "1/10", ro: "1/10" },
        b: { en: "0.1", de: "0,1", hu: "0,1", ro: "0,1" },
        isMatch: true,
      },
    ]
  },
  {
    id: "math-sm-2",
    taskDescription: {
      en: "Do these match? (Multiplication)",
      de: "Passen diese zusammen? (Multiplikation)",
      hu: "Egyeznek? (Szorzás)",
      ro: "Se potrivesc? (Înmulțire)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "5 * 6", de: "5 * 6", hu: "5 * 6", ro: "5 * 6" },
        b: { en: "30", de: "30", hu: "30", ro: "30" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "7 * 8", de: "7 * 8", hu: "7 * 8", ro: "7 * 8" },
        b: { en: "54", de: "54", hu: "54", ro: "54" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "9 * 4", de: "9 * 4", hu: "9 * 4", ro: "9 * 4" },
        b: { en: "36", de: "36", hu: "36", ro: "36" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "12 * 3", de: "12 * 3", hu: "12 * 3", ro: "12 * 3" },
        b: { en: "32", de: "32", hu: "32", ro: "32" },
        isMatch: false,
      },
    ]
  },
  {
    id: "math-sm-3",
    taskDescription: {
      en: "Do these match? (Addition & Subtraction)",
      de: "Passen diese zusammen? (Addition & Subtraktion)",
      hu: "Egyeznek? (Összeadás és kivonás)",
      ro: "Se potrivesc? (Adunare și Scădere)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "15 + 27", de: "15 + 27", hu: "15 + 27", ro: "15 + 27" },
        b: { en: "42", de: "42", hu: "42", ro: "42" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "100 - 36", de: "100 - 36", hu: "100 - 36", ro: "100 - 36" },
        b: { en: "64", de: "64", hu: "64", ro: "64" },
        isMatch: true,
      },
      {
        id: "p3",
        a: { en: "45 + 55", de: "45 + 55", hu: "45 + 55", ro: "45 + 55" },
        b: { en: "90", de: "90", hu: "90", ro: "90" },
        isMatch: false,
      },
      {
        id: "p4",
        a: { en: "82 - 19", de: "82 - 19", hu: "82 - 19", ro: "82 - 19" },
        b: { en: "63", de: "63", hu: "63", ro: "63" },
        isMatch: true,
      },
    ]
  }
];
