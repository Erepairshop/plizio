import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "geo-mcq-1",
    taskDescription: { en: "Choose the correct answer.", de: "Waehle die richtige Antwort.", hu: "Valaszd ki a helyes valaszt.", ro: "Alege raspunsul corect." },
    question: {
      en: "Which mountain range separates Europe and Asia in many school maps?",
      de: "Welches Gebirge trennt in vielen Schulkarten Europa und Asien?",
      hu: "Melyik hegylanc valasztja el Europat es Azsiat sok iskolai terkepen?",
      ro: "Ce lant muntos separa Europa si Asia pe multe harti scolare?"
    },
    options: [
      { en: "Andes", de: "Anden", hu: "Andok", ro: "Anzi" },
      { en: "Ural", de: "Ural", hu: "Ural", ro: "Ural" },
      { en: "Alps", de: "Alpen", hu: "Alpok", ro: "Alpi" },
      { en: "Atlas", de: "Atlas", hu: "Atlasz", ro: "Atlas" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The Ural Mountains are commonly used as part of the Europe-Asia boundary.",
      de: "Das Uralgebirge wird oft als Teil der Grenze zwischen Europa und Asien genutzt.",
      hu: "Az Ural-hegyseg gyakran szerepel Europa es Azsia hatarakent.",
      ro: "Muntii Ural sunt folositi frecvent ca parte a granitei Europa-Asia."
    }
  },
  {
    id: "geo-mcq-2",
    taskDescription: { en: "Choose the correct answer.", de: "Waehle die richtige Antwort.", hu: "Valaszd ki a helyes valaszt.", ro: "Alege raspunsul corect." },
    question: { en: "What does a map scale show?", de: "Was zeigt der Massstab einer Karte?", hu: "Mit mutat a terkep meretaranya?", ro: "Ce arata scara unei harti?" },
    options: [
      { en: "Population growth", de: "Bevoelkerungswachstum", hu: "nepesseg novekedes", ro: "cresterea populatiei" },
      { en: "Weather forecast", de: "Wettervorhersage", hu: "idojaras elorejelzes", ro: "prognoza meteo" },
      { en: "Distance relation", de: "Entfernungsverhaeltnis", hu: "tavolsag arany", ro: "raportul distantelor" },
      { en: "River speed", de: "Flussgeschwindigkeit", hu: "folyo sebesseg", ro: "viteza raului" }
    ],
    correctIndex: 2,
    explanation: {
      en: "Scale connects map distance and real-world distance.",
      de: "Der Massstab verbindet Kartenentfernung und reale Entfernung.",
      hu: "A meretarany a terkepi es a valos tavolsag kozotti kapcsolat.",
      ro: "Scara leaga distanta de pe harta de distanta reala."
    }
  },
  {
    id: "geo-mcq-3",
    taskDescription: { en: "Choose the correct answer.", de: "Waehle die richtige Antwort.", hu: "Valaszd ki a helyes valaszt.", ro: "Alege raspunsul corect." },
    question: { en: "Which climate is typical near the Equator?", de: "Welches Klima ist typisch in Aequatornaehe?", hu: "Melyik eghajlat jellemzo az Egyenlito kozeleben?", ro: "Ce clima este tipica in apropierea Ecuatorului?" },
    options: [
      { en: "Polar", de: "Polar", hu: "polaris", ro: "polar" },
      { en: "Tropical", de: "Tropisch", hu: "tropusi", ro: "tropical" },
      { en: "Subarctic", de: "Subarktisch", hu: "szubarktikus", ro: "subarctic" },
      { en: "Mediterranean", de: "Mittelmeer", hu: "mediterran", ro: "mediteranean" }
    ],
    correctIndex: 1,
    explanation: {
      en: "Equatorial areas are warm all year with frequent rain.",
      de: "Aequatornahe Gebiete sind ganzjaehrig warm und oft niederschlagsreich.",
      hu: "Az Egyenlito kornyeken egesz evben meleg van, sok csapadekkal.",
      ro: "Zonele ecuatoriale sunt calde tot anul, cu ploi dese."
    }
  }
];
