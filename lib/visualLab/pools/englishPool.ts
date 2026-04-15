import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const ENGLISH_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "English",
  meteorCatch: [
    {
      id: "en-vowels",
      title: { de: "Vokale fangen", en: "Catch the Vowels", hu: "Magánhangzók fogása", ro: "Prinde vocalele" },
      prompt: { de: "Fange nur Vokale (A, E, I, O, U).", en: "Catch only vowels (A, E, I, O, U).", hu: "Csak magánhangzókat fogj ki (A, E, I, O, U).", ro: "Prinde doar vocalele (A, E, I, O, U)." },
      goal: 8,
      speed: 5,
      theme: { sky: "#0c4a6e", glow: "#38bdf8", accent: "#22d3ee" },
      correctItems: [
        { id: "a", label: { de: "A", en: "A", hu: "A", ro: "A" }, emoji: "🅰️" },
        { id: "e", label: { de: "E", en: "E", hu: "E", ro: "E" }, emoji: "📧" },
        { id: "i", label: { de: "I", en: "I", hu: "I", ro: "I" }, emoji: "ℹ️" },
        { id: "o", label: { de: "O", en: "O", hu: "O", ro: "O" }, emoji: "⭕" },
        { id: "u", label: { de: "U", en: "U", hu: "U", ro: "U" }, emoji: "⛎" },
      ],
      wrongItems: [
        { id: "b", label: { de: "B", en: "B", hu: "B", ro: "B" }, emoji: "🅱️" },
        { id: "c", label: { de: "C", en: "C", hu: "C", ro: "C" }, emoji: "©️" },
        { id: "d", label: { de: "D", en: "D", hu: "D", ro: "D" }, emoji: "🆔" },
      ],
    },
    {
      id: "en-animals",
      title: { de: "Englische Tiere", en: "English Animals", hu: "Angol állatok", ro: "Animale în engleză" },
      prompt: { de: "Fange das richtige Tier.", en: "Catch the correct animal.", hu: "Fogd ki a helyes állatot.", ro: "Prinde animalul corect." },
      goal: 6,
      speed: 6,
      theme: { sky: "#064e3b", glow: "#10b981", accent: "#34d399" },
      correctItems: [
        { id: "dog", label: { de: "Hund (Dog)", en: "Dog", hu: "Kutya (Dog)", ro: "Câine (Dog)" }, emoji: "🐶" },
        { id: "cat", label: { de: "Katze (Cat)", en: "Cat", hu: "Macska (Cat)", ro: "Pisică (Cat)" }, emoji: "🐱" },
        { id: "lion", label: { de: "Löwe (Lion)", en: "Lion", hu: "Oroszlán (Lion)", ro: "Leu (Lion)" }, emoji: "🦁" },
      ],
      wrongItems: [
        { id: "car", label: { de: "Auto", en: "Car", hu: "Autó", ro: "Mașină" }, emoji: "🚗" },
        { id: "ball", label: { de: "Ball", en: "Ball", hu: "Labda", ro: "Minge" }, emoji: "⚽" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "en-singular-plural",
      title: { de: "Einzahl oder Mehrzahl", en: "Singular or Plural", hu: "Egyes vagy többes szám", ro: "Singular sau Plural" },
      instruction: { de: "Sortiere die Wörter.", en: "Sort the words into the orbits.", hu: "Rendezd a szavakat.", ro: "Sortează cuvintele." },
      theme: { bg: "#1e1b4b", orbit: "#818cf8", accent: "#c7d2fe" },
      buckets: [
        { id: "singular", label: { de: "Einzahl", en: "Singular (1)", hu: "Egyes szám", ro: "Singular" }, color: "#6366f1" },
        { id: "plural", label: { de: "Mehrzahl", en: "Plural (2+)", hu: "Többes szám", ro: "Plural" }, color: "#a855f7" },
      ],
      items: [
        { id: "apple", label: { de: "Apple", en: "Apple", hu: "Apple", ro: "Apple" }, emoji: "🍎", bucketId: "singular" },
        { id: "apples", label: { de: "Apples", en: "Apples", hu: "Apples", ro: "Apples" }, emoji: "🍎🍎", bucketId: "plural" },
        { id: "book", label: { de: "Book", en: "Book", hu: "Book", ro: "Book" }, emoji: "📖", bucketId: "singular" },
        { id: "books", label: { de: "Books", en: "Books", hu: "Books", ro: "Books" }, emoji: "📚", bucketId: "plural" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "en-greetings",
      title: { de: "Grüße auf Englisch", en: "English Greetings", hu: "Angol köszönések", ro: "Salutări în engleză" },
      instruction: { de: "Wähle den richtigen Gruß.", en: "Choose the correct greeting for the situation.", hu: "Válaszd ki a helyes köszönést.", ro: "Alege salutul corect." },
      scenes: [
        {
          id: "morning",
          title: { de: "Morgen", en: "Morning", hu: "Reggel", ro: "Dimineața" },
          prompt: { de: "Es ist 8 Uhr morgens. Was sagst du?", en: "It is 8 AM. What do you say?", hu: "Reggel 8 óra van. Mit mondasz?", ro: "Este ora 8 dimineața. Ce spui?" },
          sceneType: "community",
          visual: { icon: "🌅", bg: "#0c4a6e", accent: "#facc15" },
          choices: [
            { id: "gm", label: { de: "Good Morning", en: "Good Morning", hu: "Good Morning", ro: "Good Morning" } },
            { id: "gn", label: { de: "Good Night", en: "Good Night", hu: "Good Night", ro: "Good Night" } },
          ],
          correctChoiceId: "gm",
          successFeedback: { de: "Richtig!", en: "Correct! Good morning is for the start of the day.", hu: "Helyes!", ro: "Corect!" },
          failFeedback: { de: "Falsch.", en: "Not quite. Good Night is for when you go to sleep.", hu: "Nem egészen.", ro: "Nu chiar." },
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "en-word-builder",
      title: { de: "Wort-Konstrukteur", en: "Word Builder", hu: "Szóépítő", ro: "Constructor de cuvinte" },
      instruction: { de: "Baue das Wort 'SPACE'.", en: "Build the word 'SPACE' in order.", hu: "Építsd fel a 'SPACE' szót.", ro: "Construiește cuvântul 'SPACE'." },
      hint: { de: "S - P - A - C - E", en: "S - P - A - C - E", hu: "S - P - A - C - E", ro: "S - P - A - C - E" },
      theme: { bg: "#0f172a", accent: "#38bdf8", card: "rgba(255,255,255,0.05)" },
      parts: [
        { id: "s", label: { de: "S", en: "S", hu: "S", ro: "S" } },
        { id: "p", label: { de: "P", en: "P", hu: "P", ro: "P" } },
        { id: "a", label: { de: "A", en: "A", hu: "A", ro: "A" } },
        { id: "c", label: { de: "C", en: "C", hu: "C", ro: "C" } },
        { id: "e", label: { de: "E", en: "E", hu: "E", ro: "E" } },
      ],
      slots: [
        { id: "s1", label: { de: "1.", en: "1st", hu: "1.", ro: "1." } },
        { id: "s2", label: { de: "2.", en: "2nd", hu: "2.", ro: "2." } },
        { id: "s3", label: { de: "3.", en: "3rd", hu: "3.", ro: "3." } },
        { id: "s4", label: { de: "4.", en: "4th", hu: "4.", ro: "4." } },
        { id: "s5", label: { de: "5.", en: "5th", hu: "5.", ro: "5." } },
      ],
      solution: ["s", "p", "a", "c", "e"],
    }
  ],
  memoryRadar: [
    {
      id: "en-colors",
      title: { de: "Radar: Farben", en: "Radar: Colors", hu: "Radar: Színek", ro: "Radar: Culori" },
      instruction: { de: "Merke dir die Farben auf Englisch.", en: "Remember the English color names.", hu: "Jegyezd meg az angol színeket.", ro: "Reține culorile în engleză." },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#1e293b", accent: "#f472b6", radar: "#ec4899" },
      targetItems: [
        { id: "red", label: { de: "Red (Rot)", en: "Red", hu: "Red (Piros)", ro: "Red (Roșu)" }, emoji: "🔴" },
        { id: "blue", label: { de: "Blue (Blau)", en: "Blue", hu: "Blue (Kék)", ro: "Blue (Albastru)" }, emoji: "🔵" },
        { id: "green", label: { de: "Green (Grün)", en: "Green", hu: "Green (Zöld)", ro: "Green (Verde)" }, emoji: "🟢" },
      ],
      decoyItems: [
        { id: "dog", label: { de: "Hund", en: "Dog", hu: "Kutya", ro: "Câine" }, emoji: "🐶" },
        { id: "car", label: { de: "Auto", en: "Car", hu: "Autó", ro: "Mașină" }, emoji: "🚗" },
      ],
    }
  ],
};
