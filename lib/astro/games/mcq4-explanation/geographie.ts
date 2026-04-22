import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "geo-mcq-1",
    taskDescription: { en: "Choose the correct answer.", de: "Wähle die richtige Antwort.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
    question: {
      en: "Which mountain range separates Europe and Asia in many school maps?",
      de: "Welches Gebirge trennt in vielen Schulkarten Europa und Asien?",
      hu: "Melyik hegylánc választja el Európát és Ázsiát sok iskolai térképen?",
      ro: "Ce lanț muntos separă Europa și Asia pe multe hărți școlare?"
    },
    options: [
      { en: "Andes", de: "Anden", hu: "Andok", ro: "Anzi" },
      { en: "Ural", de: "Ural", hu: "Urál", ro: "Ural" },
      { en: "Alps", de: "Alpen", hu: "Alpok", ro: "Alpi" },
      { en: "Atlas", de: "Atlas", hu: "Atlasz", ro: "Atlas" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The Ural Mountains are commonly used as part of the Europe-Asia boundary.",
      de: "Das Uralgebirge wird oft als Teil der Grenze zwischen Europa und Asien genutzt.",
      hu: "Az Urál hegység gyakran szerepel Európa és Ázsia határaként.",
      ro: "Munții Ural sunt folosiți frecvent ca parte a graniței Europa-Asia."
    }
  },
  {
    id: "geo-mcq-2",
    taskDescription: { en: "Choose the correct answer.", de: "Wähle die richtige Antwort.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
    question: { en: "What does a map scale show?", de: "Was zeigt der Maßstab einer Karte?", hu: "Mit mutat a térkép méretaránya?", ro: "Ce arată scara unei hărți?" },
    options: [
      { en: "Population growth", de: "Bevölkerungswachstum", hu: "népességnövekedés", ro: "creșterea populației" },
      { en: "Weather forecast", de: "Wettervorhersage", hu: "időjárás-előrejelzés", ro: "prognoza meteo" },
      { en: "Distance relation", de: "Entfernungsverhältnis", hu: "távolságarány", ro: "raportul distanțelor" },
      { en: "River speed", de: "Flussgeschwindigkeit", hu: "folyó sebessége", ro: "viteza râului" }
    ],
    correctIndex: 2,
    explanation: {
      en: "Scale connects map distance and real-world distance.",
      de: "Der Maßstab verbindet Kartenentfernung und reale Entfernung.",
      hu: "A méretarány a térképi és a valós távolság közötti kapcsolat.",
      ro: "Scara leagă distanța de pe hartă de distanța reală."
    }
  },
  {
    id: "geo-mcq-3",
    taskDescription: { en: "Choose the correct answer.", de: "Wähle die richtige Antwort.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
    question: { en: "Which climate is typical near the Equator?", de: "Welches Klima ist typisch in Äquatornähe?", hu: "Melyik éghajlat jellemző az Egyenlítő közelében?", ro: "Ce climă este tipică în apropierea Ecuatorului?" },
    options: [
      { en: "Polar", de: "Polar", hu: "poláris", ro: "polar" },
      { en: "Tropical", de: "Tropisch", hu: "trópusi", ro: "tropical" },
      { en: "Subarctic", de: "Subarktisch", hu: "szubarktikus", ro: "subarctic" },
      { en: "Mediterranean", de: "Mittelmeer", hu: "mediterrán", ro: "mediteranean" }
    ],
    correctIndex: 1,
    explanation: {
      en: "Equatorial areas are warm all year with frequent rain.",
      de: "Äquatornahe Gebiete sind ganzjährig warm und oft niederschlagsreich.",
      hu: "Az Egyenlítő környékén egész évben meleg van, sok csapadék.",
      ro: "Zonele ecuatoriale sunt calde tot anul, cu ploi dese."
    }
  }
];
