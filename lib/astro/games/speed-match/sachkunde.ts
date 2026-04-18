import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "round1",
    pairs: [
      {
        id: "r1-p1",
        a: { en: "Sun", hu: "Nap", de: "Sonne", ro: "Soare" },
        b: { en: "Star", hu: "Csillag", de: "Stern", ro: "Stea" },
        isMatch: true,
      },
      {
        id: "r1-p2",
        a: { en: "Earth", hu: "Föld", de: "Erde", ro: "Pământ" },
        b: { en: "Gas Giant", hu: "Gázóriás", de: "Gasriese", ro: "Gigant gazos" },
        isMatch: false,
      }
    ]
  },
  {
    id: "round2",
    pairs: [
      {
        id: "r2-p1",
        a: { en: "Water", hu: "Víz", de: "Wasser", ro: "Apă" },
        b: { en: "H2O", hu: "H2O", de: "H2O", ro: "H2O" },
        isMatch: true,
      },
      {
        id: "r2-p2",
        a: { en: "Moon", hu: "Hold", de: "Mond", ro: "Lună" },
        b: { en: "Planet", hu: "Bolygó", de: "Planet", ro: "Planetă" },
        isMatch: false,
      }
    ]
  },
  {
    id: "round3",
    pairs: [
      {
        id: "r3-p1",
        a: { en: "Dog", hu: "Kutya", de: "Hund", ro: "Câine" },
        b: { en: "Mammal", hu: "Emlős", de: "Säugetier", ro: "Mamifer" },
        isMatch: true,
      },
      {
        id: "r3-p2",
        a: { en: "Spider", hu: "Pók", de: "Spinne", ro: "Păianjen" },
        b: { en: "Insect", hu: "Rovar", de: "Insekt", ro: "Insectă" },
        isMatch: false,
      }
    ]
  },
  {
    id: "round4",
    pairs: [
      {
        id: "r4-p1",
        a: { en: "Herbivore", hu: "Növényevő", de: "Pflanzenfresser", ro: "Erbivor" },
        b: { en: "Eats Plants", hu: "Növényeket eszik", de: "Frisst Pflanzen", ro: "Mănâncă plante" },
        isMatch: true,
      },
      {
        id: "r4-p2",
        a: { en: "Ice", hu: "Jég", de: "Eis", ro: "Gheață" },
        b: { en: "Liquid", hu: "Folyadék", de: "Flüssigkeit", ro: "Lichid" },
        isMatch: false,
      }
    ]
  }
];
