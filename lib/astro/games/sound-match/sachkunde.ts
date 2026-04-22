import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "sk-sm-1",
    taskDescription: {
      en: "Which natural element makes this sound?",
      de: "Welches Element der Natur macht dieses Geräusch?",
      hu: "Melyik természeti elem adja ezt a hangot?",
      ro: "Ce element al naturii face acest sunet?"
    },
    audioEmoji: "🌬️",
    options: [
      { id: "o1", label: { en: "Wind", de: "Wind", hu: "Szél", ro: "Vânt" }, isCorrect: true },
      { id: "o2", label: { en: "Rain", de: "Regen", hu: "Eső", ro: "Ploaie" }, isCorrect: false },
      { id: "o3", label: { en: "Fire", de: "Feuer", hu: "Tűz", ro: "Foc" }, isCorrect: false },
      { id: "o4", label: { en: "Stone", de: "Stein", hu: "Kő", ro: "Piatră" }, isCorrect: false }
    ]
  },
  {
    id: "sk-sm-2",
    taskDescription: {
      en: "Which farm animal clucks like this?",
      de: "Welches Bauernhoftier gackert so?",
      hu: "Melyik haszonállat kotkodácsol így?",
      ro: "Ce animal de la fermă cotcodăcește așa?"
    },
    audioEmoji: "🐔",
    options: [
      { id: "o1", label: { en: "Cow", de: "Kuh", hu: "Tehén", ro: "Vac" }, isCorrect: false },
      { id: "o2", label: { en: "Chicken", de: "Huhn", hu: "Tyúk", ro: "Găină" }, isCorrect: true },
      { id: "o3", label: { en: "Pig", de: "Schwein", hu: "Disznó", ro: "Porc" }, isCorrect: false },
      { id: "o4", label: { en: "Horse", de: "Pferd", hu: "Ló", ro: "Cal" }, isCorrect: false }
    ]
  },
  {
    id: "sk-sm-3",
    taskDescription: {
      en: "What weather phenomenon produces this loud sound?",
      de: "Welches Wetterphänomen erzeugt dieses laute Geräusch?",
      hu: "Melyik időjárási jelenség adja ezt a hangos hangot?",
      ro: "Ce fenomen meteorologic produce acest sunet puternic?"
    },
    audioEmoji: "⚡",
    options: [
      { id: "o1", label: { en: "Snow", de: "Schnee", hu: "Hó", ro: "Zăpadă" }, isCorrect: false },
      { id: "o2", label: { en: "Fog", de: "Nebel", hu: "Köd", ro: "Ceață" }, isCorrect: false },
      { id: "o3", label: { en: "Thunder", de: "Donner", hu: "Mennydörgés", ro: "Tunet" }, isCorrect: true },
      { id: "o4", label: { en: "Sun", de: "Sonne", hu: "Nap", ro: "Soare" }, isCorrect: false }
    ]
  },
  {
    id: "sk-sm-4",
    taskDescription: {
      en: "Which insect makes a buzzing sound like this?",
      de: "Welches Insekt summt so?",
      hu: "Melyik rovar zümmög így?",
      ro: "Ce insectă bâzâie așa?"
    },
    audioEmoji: "🐝",
    options: [
      { id: "o1", label: { en: "Spider", de: "Spinne", hu: "Pók", ro: "Păianjen" }, isCorrect: false },
      { id: "o2", label: { en: "Bee", de: "Biene", hu: "Méh", ro: "Albină" }, isCorrect: true },
      { id: "o3", label: { en: "Butterfly", de: "Schmetterling", hu: "Pillangó", ro: "Fluture" }, isCorrect: false },
      { id: "o4", label: { en: "Ant", de: "Ameise", hu: "Hangya", ro: "Furnică" }, isCorrect: false }
    ]
  },
  {
    id: "sk-sm-5",
    taskDescription: {
      en: "Listen to the forest. Who is howling?",
      de: "Hör in den Wald. Wer heult da?",
      hu: "Hallgasd az erdőt. Ki üvölt?",
      ro: "Ascultă pădurea. Cine urlă?"
    },
    audioEmoji: "🐺",
    options: [
      { id: "o1", label: { en: "Bear", de: "Bär", hu: "Medve", ro: "Urs" }, isCorrect: false },
      { id: "o2", label: { en: "Rabbit", de: "Hase", hu: "Nyúl", ro: "Iepure" }, isCorrect: false },
      { id: "o3", label: { en: "Owl", de: "Eule", hu: "Bagoly", ro: "Bufniță" }, isCorrect: false },
      { id: "o4", label: { en: "Wolf", de: "Wolf", hu: "Farkas", ro: "Lup" }, isCorrect: true }
    ]
  }
];
