import { SoundMatchRound } from "../../../../components/astro-games/views/m3/SoundMatchView";

export const rounds: SoundMatchRound[] = [
  {
    id: "sm-1",
    taskDescription: {
      en: "What makes this sound? Match the image to the word!",
      de: "Was macht dieses Geräusch? Ordne das Bild dem Wort zu!",
      hu: "Mi adja ezt a hangot? Párosítsd a képet a szóval!",
      ro: "Ce face acest sunet? Potrivește imaginea cu cuvântul!"
    },
    audioEmoji: "🦁",
    options: [
      { id: "o1", label: { en: "Lion", de: "Löwe", hu: "Oroszlán", ro: "Leu" }, isCorrect: true },
      { id: "o2", label: { en: "Tiger", de: "Tiger", hu: "Tigris", ro: "Tigru" }, isCorrect: false },
      { id: "o3", label: { en: "Bear", de: "Bär", hu: "Medve", ro: "Urs" }, isCorrect: false },
      { id: "o4", label: { en: "Wolf", de: "Wolf", hu: "Farkas", ro: "Lup" }, isCorrect: false }
    ]
  },
  {
    id: "sm-2",
    taskDescription: {
      en: "Which instrument do you hear?",
      de: "Welches Instrument hörst du?",
      hu: "Milyen hangszert hallasz?",
      ro: "Ce instrument auzi?"
    },
    audioEmoji: "🎸",
    options: [
      { id: "o1", label: { en: "Piano", de: "Klavier", hu: "Zongora", ro: "Pian" }, isCorrect: false },
      { id: "o2", label: { en: "Guitar", de: "Gitarre", hu: "Gitár", ro: "Chitară" }, isCorrect: true },
      { id: "o3", label: { en: "Drums", de: "Schlagzeug", hu: "Dob", ro: "Tobe" }, isCorrect: false },
      { id: "o4", label: { en: "Violin", de: "Geige", hu: "Hegedű", ro: "Vioară" }, isCorrect: false }
    ]
  },
  {
    id: "sm-3",
    taskDescription: {
      en: "Which vehicle makes this sound?",
      de: "Welches Fahrzeug macht dieses Geräusch?",
      hu: "Melyik jármű adja ezt a hangot?",
      ro: "Ce vehicul face acest sunet?"
    },
    audioEmoji: "🚑",
    options: [
      { id: "o1", label: { en: "Ambulance", de: "Krankenwagen", hu: "Mentőautó", ro: "Ambulanță" }, isCorrect: true },
      { id: "o2", label: { en: "Police", de: "Polizei", hu: "Rendőrség", ro: "Poliție" }, isCorrect: false },
      { id: "o3", label: { en: "Firetruck", de: "Feuerwehr", hu: "Tűzoltó", ro: "Mașină de pompieri" }, isCorrect: false },
      { id: "o4", label: { en: "Train", de: "Zug", hu: "Vonat", ro: "Tren" }, isCorrect: false }
    ]
  },
  {
    id: "sm-4",
    taskDescription: {
      en: "Which animal is croaking here?",
      de: "Welches Tier quakt hier?",
      hu: "Melyik állat brekeg itt?",
      ro: "Ce animal orăcăie aici?"
    },
    audioEmoji: "🐸",
    options: [
      { id: "o1", label: { en: "Snake", de: "Schlange", hu: "Kígyó", ro: "Șarpe" }, isCorrect: false },
      { id: "o2", label: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, isCorrect: false },
      { id: "o3", label: { en: "Frog", de: "Frosch", hu: "Béka", ro: "Broască" }, isCorrect: true },
      { id: "o4", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, isCorrect: false }
    ]
  },
  {
    id: "sm-5",
    taskDescription: {
      en: "What kind of weather makes this noise?",
      de: "Welches Wetter macht dieses Geräusch?",
      hu: "Milyen időjárás adja ezt a hangot?",
      ro: "Ce fel de vreme face acest zgomot?"
    },
    audioEmoji: "⛈️",
    options: [
      { id: "o1", label: { en: "Sunshine", de: "Sonnenschein", hu: "Napsütés", ro: "Soare" }, isCorrect: false },
      { id: "o2", label: { en: "Snow", de: "Schnee", hu: "Hó", ro: "Zăpadă" }, isCorrect: false },
      { id: "o3", label: { en: "Thunderstorm", de: "Gewitter", hu: "Vihar", ro: "Furtună" }, isCorrect: true },
      { id: "o4", label: { en: "Fog", de: "Nebel", hu: "Köd", ro: "Ceață" }, isCorrect: false }
    ]
  }
];
