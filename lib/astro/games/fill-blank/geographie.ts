import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "geo-fb-1",
    taskDescription: { en: "Fill in the missing geography term.", de: "Füllen Sie den fehlenden Geographiebegriff ein.", hu: "Egészítsd ki a hiányzó földrajzi fogalmat.", ro: "Completează termenul geografic lipsă." },
    sentenceParts: {
      before: { en: "The line at 0 degree latitude is called the ", de: "Die Linie bei 0 Grad Breite heißt ", hu: "A 0 fok szélességi kör neve: ", ro: "Linia de la 0 grade latitudine se numește " },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "prime meridian", de: "Nullmeridian", hu: "nullmeridián", ro: "meridianul zero" },
      { en: "equator", de: "Äquator", hu: "Egyenlítő", ro: "Ecuatorul" },
      { en: "tropic", de: "Wendekreis", hu: "térítő", ro: "tropic" }
    ],
    correctIndex: 1
  },
  {
    id: "geo-fb-2",
    taskDescription: { en: "Fill in the missing geography term.", de: "Füllen Sie den fehlenden Geographiebegriff ein.", hu: "Egészítsd ki a hiányzó földrajzi fogalmat.", ro: "Completează termenul geografic lipsă." },
    sentenceParts: {
      before: { en: "The largest ocean on Earth is the ", de: "Der größte Ozean der Erde ist der ", hu: "A Föld legnagyobb óceánja a ", ro: "Cel mai mare ocean al Pământului este " },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "Atlantic Ocean", de: "Atlantik", hu: "Atlanti-óceán", ro: "Oceanul Atlantic" },
      { en: "Indian Ocean", de: "Indischer Ozean", hu: "Indiai-óceán", ro: "Oceanul Indian" },
      { en: "Pacific Ocean", de: "Pazifik", hu: "Csendes-óceán", ro: "Oceanul Pacific" }
    ],
    correctIndex: 2
  },
  {
    id: "geo-fb-3",
    taskDescription: { en: "Fill in the missing geography term.", de: "Füllen Sie den fehlenden Geographiebegriff ein.", hu: "Egészítsd ki a hiányzó földrajzi fogalmat.", ro: "Completează termenul geografic lipsă." },
    sentenceParts: {
      before: { en: "A city where a government sits is called a ", de: "Eine Stadt mit Regierungssitz heißt ", hu: "A város, ahol a kormány ülésezik, az a ", ro: "Un oraș unde se află guvernul se numește " },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "harbor", de: "Hafen", hu: "kikötő", ro: "port" },
      { en: "capital", de: "Hauptstadt", hu: "főváros", ro: "capitală" },
      { en: "village", de: "Dorf", hu: "falu", ro: "sat" }
    ],
    correctIndex: 1
  }
];
