import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "geo-fb-1",
    taskDescription: { en: "Fill in the missing geography term.", de: "Fuellen Sie den fehlenden Geographiebegriff ein.", hu: "Egeszitsd ki a hianyzo foldrajzi fogalmat.", ro: "Completeaza termenul geografic lipsa." },
    sentenceParts: {
      before: { en: "The line at 0 degree latitude is called the ", de: "Die Linie bei 0 Grad Breite heisst ", hu: "A 0 fok szelesseg kor neve: ", ro: "Linia de la 0 grade latitudine se numeste " },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "prime meridian", de: "Nullmeridian", hu: "nullmeridian", ro: "meridianul zero" },
      { en: "equator", de: "Aequator", hu: "egyenlito", ro: "ecuator" },
      { en: "tropic", de: "Wendekreis", hu: "terito", ro: "tropic" }
    ],
    correctIndex: 1
  },
  {
    id: "geo-fb-2",
    taskDescription: { en: "Fill in the missing geography term.", de: "Fuellen Sie den fehlenden Geographiebegriff ein.", hu: "Egeszitsd ki a hianyzo foldrajzi fogalmat.", ro: "Completeaza termenul geografic lipsa." },
    sentenceParts: {
      before: { en: "The largest ocean on Earth is the ", de: "Der groesste Ozean der Erde ist der ", hu: "A Fold legnagyobb oceanja a ", ro: "Cel mai mare ocean al Pamantului este " },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "Atlantic Ocean", de: "Atlantik", hu: "Atlanti-ocean", ro: "Oceanul Atlantic" },
      { en: "Indian Ocean", de: "Indischer Ozean", hu: "Indiai-ocean", ro: "Oceanul Indian" },
      { en: "Pacific Ocean", de: "Pazifik", hu: "Csendes-ocean", ro: "Oceanul Pacific" }
    ],
    correctIndex: 2
  },
  {
    id: "geo-fb-3",
    taskDescription: { en: "Fill in the missing geography term.", de: "Fuellen Sie den fehlenden Geographiebegriff ein.", hu: "Egeszitsd ki a hianyzo foldrajzi fogalmat.", ro: "Completeaza termenul geografic lipsa." },
    sentenceParts: {
      before: { en: "A city where a government sits is called a ", de: "Eine Stadt mit Regierungssitz heisst ", hu: "A varos, ahol a kormany ul, az a ", ro: "Un oras unde se afla guvernul se numeste " },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "harbor", de: "Hafen", hu: "kikoto", ro: "port" },
      { en: "capital", de: "Hauptstadt", hu: "fovaros", ro: "capitala" },
      { en: "village", de: "Dorf", hu: "falu", ro: "sat" }
    ],
    correctIndex: 1
  }
];
