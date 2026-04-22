import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const MAGYAR_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Magyar",
  meteorCatch: [
    {
      id: "hu-mc-1",
      title: {
        de: "Lange Vokale",
        en: "Long Vowels",
        hu: "Hosszú magánhangzók",
        ro: "Vocale lungi"
      },
      prompt: {
        de: "Fange die langen Vokale!",
        en: "Catch the long vowels!",
        hu: "Fogd ki a hosszú magánhangzókat!",
        ro: "Prinde vocalele lungi!"
      },
      goal: 6,
      speed: 3,
      theme: {
        sky: "#1e3a8a",
        glow: "#3b82f6",
        accent: "#60a5fa"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Á",
            en: "Á",
            hu: "Á",
            ro: "Á"
          },
          emoji: "🅰️"
        },
        {
          id: "c2",
          label: {
            de: "É",
            en: "É",
            hu: "É",
            ro: "É"
          },
          emoji: "📧"
        },
        {
          id: "c3",
          label: {
            de: "Í",
            en: "Í",
            hu: "Í",
            ro: "Í"
          },
          emoji: "📍"
        },
        {
          id: "c4",
          label: {
            de: "Ó",
            en: "Ó",
            hu: "Ó",
            ro: "Ó"
          },
          emoji: "🅾️"
        },
        {
          id: "c5",
          label: {
            de: "Ő",
            en: "Ő",
            hu: "Ő",
            ro: "Ő"
          },
          emoji: "🔘"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "a",
            en: "a",
            hu: "a",
            ro: "a"
          },
          emoji: "🅰️"
        },
        {
          id: "w2",
          label: {
            de: "e",
            en: "e",
            hu: "e",
            ro: "e"
          },
          emoji: "📧"
        },
        {
          id: "w3",
          label: {
            de: "i",
            en: "i",
            hu: "i",
            ro: "i"
          },
          emoji: "📍"
        },
        {
          id: "w4",
          label: {
            de: "o",
            en: "o",
            hu: "o",
            ro: "o"
          },
          emoji: "🅾️"
        },
        {
          id: "w5",
          label: {
            de: "ö",
            en: "ö",
            hu: "ö",
            ro: "ö"
          },
          emoji: "🔘"
        }
      ]
    },
    {
      id: "hu-mc-2",
      title: {
        de: "Doppelkonsonanten",
        en: "Double Consonants",
        hu: "Kétjegyű mássalhangzók",
        ro: "Consoane duble"
      },
      prompt: {
        de: "Fange die Doppelbuchstaben!",
        en: "Catch the double consonants!",
        hu: "Keresd a kétjegyű mássalhangzókat!",
        ro: "Prinde consoanele duble!"
      },
      goal: 6,
      speed: 4,
      theme: {
        sky: "#14532d",
        glow: "#22c55e",
        accent: "#4ade80"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Sz",
            en: "Sz",
            hu: "Sz",
            ro: "Sz"
          },
          emoji: "🔤"
        },
        {
          id: "c2",
          label: {
            de: "Cs",
            en: "Cs",
            hu: "Cs",
            ro: "Cs"
          },
          emoji: "🔤"
        },
        {
          id: "c3",
          label: {
            de: "Ty",
            en: "Ty",
            hu: "Ty",
            ro: "Ty"
          },
          emoji: "🔤"
        },
        {
          id: "c4",
          label: {
            de: "Zs",
            en: "Zs",
            hu: "Zs",
            ro: "Zs"
          },
          emoji: "🔤"
        },
        {
          id: "c5",
          label: {
            de: "Gy",
            en: "Gy",
            hu: "Gy",
            ro: "Gy"
          },
          emoji: "🔤"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "B",
            en: "B",
            hu: "B",
            ro: "B"
          },
          emoji: "🅱️"
        },
        {
          id: "w2",
          label: {
            de: "K",
            en: "K",
            hu: "K",
            ro: "K"
          },
          emoji: "🔠"
        },
        {
          id: "w3",
          label: {
            de: "L",
            en: "L",
            hu: "L",
            ro: "L"
          },
          emoji: "🔠"
        },
        {
          id: "w4",
          label: {
            de: "M",
            en: "M",
            hu: "M",
            ro: "M"
          },
          emoji: "Ⓜ️"
        },
        {
          id: "w5",
          label: {
            de: "P",
            en: "P",
            hu: "P",
            ro: "P"
          },
          emoji: "🅿️"
        }
      ]
    },
    {
      id: "hu-mc-3",
      title: {
        de: "Tiere",
        en: "Animals",
        hu: "Állatok",
        ro: "Animale"
      },
      prompt: {
        de: "Fange die Tiere!",
        en: "Catch the animals!",
        hu: "Kapd el az állatokat!",
        ro: "Prinde animalele!"
      },
      goal: 8,
      speed: 4,
      theme: {
        sky: "#451a03",
        glow: "#d97706",
        accent: "#fbbf24"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Hund",
            en: "Dog",
            hu: "Kutya",
            ro: "Câine"
          },
          emoji: "🐕"
        },
        {
          id: "c2",
          label: {
            de: "Katze",
            en: "Cat",
            hu: "Macska",
            ro: "Pisică"
          },
          emoji: "🐈"
        },
        {
          id: "c3",
          label: {
            de: "Maus",
            en: "Mouse",
            hu: "Egér",
            ro: "Șoarece"
          },
          emoji: "🐁"
        },
        {
          id: "c4",
          label: {
            de: "Pferd",
            en: "Horse",
            hu: "Ló",
            ro: "Cal"
          },
          emoji: "🐎"
        },
        {
          id: "c5",
          label: {
            de: "Kuh",
            en: "Cow",
            hu: "Tehén",
            ro: "Vacã"
          },
          emoji: "🐄"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Auto",
            en: "Car",
            hu: "Autó",
            ro: "Mașină"
          },
          emoji: "🚗"
        },
        {
          id: "w2",
          label: {
            de: "Haus",
            en: "House",
            hu: "Ház",
            ro: "Casă"
          },
          emoji: "🏠"
        },
        {
          id: "w3",
          label: {
            de: "Baum",
            en: "Tree",
            hu: "Fa",
            ro: "Copac"
          },
          emoji: "🌳"
        },
        {
          id: "w4",
          label: {
            de: "Buch",
            en: "Book",
            hu: "Könyv",
            ro: "Carte"
          },
          emoji: "📖"
        },
        {
          id: "w5",
          label: {
            de: "Tisch",
            en: "Table",
            hu: "Asztal",
            ro: "Masă"
          },
          emoji: "🪑"
        }
      ]
    },
    {
      id: "hu-mc-4",
      title: {
        de: "Farben",
        en: "Colors",
        hu: "Színek",
        ro: "Culori"
      },
      prompt: {
        de: "Sammle die Farben!",
        en: "Collect the colors!",
        hu: "Gyűjtsd össze a színeket!",
        ro: "Colectează culorile!"
      },
      goal: 7,
      speed: 3,
      theme: {
        sky: "#4c1d95",
        glow: "#8b5cf6",
        accent: "#a78bfa"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Rot",
            en: "Red",
            hu: "Piros",
            ro: "Roșu"
          },
          emoji: "🔴"
        },
        {
          id: "c2",
          label: {
            de: "Blau",
            en: "Blue",
            hu: "Kék",
            ro: "Albastru"
          },
          emoji: "🔵"
        },
        {
          id: "c3",
          label: {
            de: "Grün",
            en: "Green",
            hu: "Zöld",
            ro: "Verde"
          },
          emoji: "🟢"
        },
        {
          id: "c4",
          label: {
            de: "Gelb",
            en: "Yellow",
            hu: "Sárga",
            ro: "Galben"
          },
          emoji: "🟡"
        },
        {
          id: "c5",
          label: {
            de: "Schwarz",
            en: "Black",
            hu: "Fekete",
            ro: "Negru"
          },
          emoji: "⚫"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Eins",
            en: "One",
            hu: "Egy",
            ro: "Unu"
          },
          emoji: "1️⃣"
        },
        {
          id: "w2",
          label: {
            de: "Zwei",
            en: "Two",
            hu: "Kettő",
            ro: "Doi"
          },
          emoji: "2️⃣"
        },
        {
          id: "w3",
          label: {
            de: "Drei",
            en: "Three",
            hu: "Három",
            ro: "Trei"
          },
          emoji: "3️⃣"
        },
        {
          id: "w4",
          label: {
            de: "Vier",
            en: "Four",
            hu: "Négy",
            ro: "Patru"
          },
          emoji: "4️⃣"
        },
        {
          id: "w5",
          label: {
            de: "Fünf",
            en: "Five",
            hu: "Öt",
            ro: "Cinci"
          },
          emoji: "5️⃣"
        }
      ]
    },
    {
      id: "hu-mc-5",
      title: {
        de: "Zahlen",
        en: "Numbers",
        hu: "Számok",
        ro: "Numere"
      },
      prompt: {
        de: "Sammle die Zahlen!",
        en: "Collect the numbers!",
        hu: "Gyűjtsd a számokat!",
        ro: "Colectează numerele!"
      },
      goal: 7,
      speed: 3,
      theme: {
        sky: "#083344",
        glow: "#06b6d4",
        accent: "#67e8f9"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Eins",
            en: "One",
            hu: "Egy",
            ro: "Unu"
          },
          emoji: "1️⃣"
        },
        {
          id: "c2",
          label: {
            de: "Zwei",
            en: "Two",
            hu: "Kettő",
            ro: "Doi"
          },
          emoji: "2️⃣"
        },
        {
          id: "c3",
          label: {
            de: "Drei",
            en: "Three",
            hu: "Három",
            ro: "Trei"
          },
          emoji: "3️⃣"
        },
        {
          id: "c4",
          label: {
            de: "Vier",
            en: "Four",
            hu: "Négy",
            ro: "Patru"
          },
          emoji: "4️⃣"
        },
        {
          id: "c5",
          label: {
            de: "Fünf",
            en: "Five",
            hu: "Öt",
            ro: "Cinci"
          },
          emoji: "5️⃣"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Rot",
            en: "Red",
            hu: "Piros",
            ro: "Roșu"
          },
          emoji: "🔴"
        },
        {
          id: "w2",
          label: {
            de: "Blau",
            en: "Blue",
            hu: "Kék",
            ro: "Albastru"
          },
          emoji: "🔵"
        },
        {
          id: "w3",
          label: {
            de: "Grün",
            en: "Green",
            hu: "Zöld",
            ro: "Verde"
          },
          emoji: "🟢"
        },
        {
          id: "w4",
          label: {
            de: "Gelb",
            en: "Yellow",
            hu: "Sárga",
            ro: "Galben"
          },
          emoji: "🟡"
        },
        {
          id: "w5",
          label: {
            de: "Weiß",
            en: "White",
            hu: "Fehér",
            ro: "Alb"
          },
          emoji: "⚪"
        }
      ]
    },
    {
      id: "hu-mc-6",
      title: {
        de: "Früchte",
        en: "Fruits",
        hu: "Gyümölcsök",
        ro: "Fructe"
      },
      prompt: {
        de: "Fange die Früchte!",
        en: "Catch the fruits!",
        hu: "Kapd el a gyümölcsöket!",
        ro: "Prinde fructele!"
      },
      goal: 8,
      speed: 4,
      theme: {
        sky: "#831843",
        glow: "#ec4899",
        accent: "#f472b6"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Apfel",
            en: "Apple",
            hu: "Alma",
            ro: "Măr"
          },
          emoji: "🍎"
        },
        {
          id: "c2",
          label: {
            de: "Birne",
            en: "Pear",
            hu: "Körte",
            ro: "Pară"
          },
          emoji: "🍐"
        },
        {
          id: "c3",
          label: {
            de: "Banane",
            en: "Banana",
            hu: "Banán",
            ro: "Banană"
          },
          emoji: "🍌"
        },
        {
          id: "c4",
          label: {
            de: "Traube",
            en: "Grape",
            hu: "Szőlő",
            ro: "Strugure"
          },
          emoji: "🍇"
        },
        {
          id: "c5",
          label: {
            de: "Kirsche",
            en: "Cherry",
            hu: "Cseresznye",
            ro: "Cireașă"
          },
          emoji: "🍒"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Karotte",
            en: "Carrot",
            hu: "Répa",
            ro: "Morcov"
          },
          emoji: "🥕"
        },
        {
          id: "w2",
          label: {
            de: "Brot",
            en: "Bread",
            hu: "Kenyér",
            ro: "Pâine"
          },
          emoji: "🍞"
        },
        {
          id: "w3",
          label: {
            de: "Käse",
            en: "Cheese",
            hu: "Sajt",
            ro: "Brânză"
          },
          emoji: "🧀"
        },
        {
          id: "w4",
          label: {
            de: "Milch",
            en: "Milk",
            hu: "Tej",
            ro: "Lapte"
          },
          emoji: "🥛"
        },
        {
          id: "w5",
          label: {
            de: "Wasser",
            en: "Water",
            hu: "Víz",
            ro: "Apă"
          },
          emoji: "💧"
        }
      ]
    },
    {
      id: "hu-mc-7",
      title: {
        de: "Verben",
        en: "Verbs",
        hu: "Igék",
        ro: "Verbe"
      },
      prompt: {
        de: "Fange die Tunwörter (Verben)!",
        en: "Catch the action words (verbs)!",
        hu: "Fogd ki a cselekvést jelentő szavakat (igék)!",
        ro: "Prinde cuvintele de acțiune (verbe)!"
      },
      goal: 7,
      speed: 5,
      theme: {
        sky: "#3f6212",
        glow: "#84cc16",
        accent: "#a3e635"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Läuft",
            en: "Runs",
            hu: "Fut",
            ro: "Aleargă"
          },
          emoji: "🏃"
        },
        {
          id: "c2",
          label: {
            de: "Liest",
            en: "Reads",
            hu: "Olvas",
            ro: "Citește"
          },
          emoji: "📖"
        },
        {
          id: "c3",
          label: {
            de: "Schreibt",
            en: "Writes",
            hu: "Ír",
            ro: "Scrie"
          },
          emoji: "✍️"
        },
        {
          id: "c4",
          label: {
            de: "Spielt",
            en: "Plays",
            hu: "Játszik",
            ro: "Se joacă"
          },
          emoji: "🎮"
        },
        {
          id: "c5",
          label: {
            de: "Schläft",
            en: "Sleeps",
            hu: "Alsik",
            ro: "Doarme"
          },
          emoji: "😴"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Haus",
            en: "House",
            hu: "Ház",
            ro: "Casă"
          },
          emoji: "🏠"
        },
        {
          id: "w2",
          label: {
            de: "Auto",
            en: "Car",
            hu: "Autó",
            ro: "Mașină"
          },
          emoji: "🚗"
        },
        {
          id: "w3",
          label: {
            de: "Stuhl",
            en: "Chair",
            hu: "Szék",
            ro: "Scaun"
          },
          emoji: "🪑"
        },
        {
          id: "w4",
          label: {
            de: "Tisch",
            en: "Table",
            hu: "Asztal",
            ro: "Masă"
          },
          emoji: "🪑"
        },
        {
          id: "w5",
          label: {
            de: "Baum",
            en: "Tree",
            hu: "Fa",
            ro: "Copac"
          },
          emoji: "🌳"
        }
      ]
    },
    {
      id: "hu-mc-8",
      title: {
        de: "Nomen",
        en: "Nouns",
        hu: "Főnevek",
        ro: "Substantive"
      },
      prompt: {
        de: "Fange die Namenwörter (Nomen)!",
        en: "Catch the naming words (nouns)!",
        hu: "Fogd ki a főneveket!",
        ro: "Prinde cuvintele de denumire (substantive)!"
      },
      goal: 7,
      speed: 4,
      theme: {
        sky: "#581c87",
        glow: "#a855f7",
        accent: "#c084fc"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Haus",
            en: "House",
            hu: "Ház",
            ro: "Casă"
          },
          emoji: "🏠"
        },
        {
          id: "c2",
          label: {
            de: "Auto",
            en: "Car",
            hu: "Autó",
            ro: "Mașină"
          },
          emoji: "🚗"
        },
        {
          id: "c3",
          label: {
            de: "Baum",
            en: "Tree",
            hu: "Fa",
            ro: "Copac"
          },
          emoji: "🌳"
        },
        {
          id: "c4",
          label: {
            de: "Buch",
            en: "Book",
            hu: "Könyv",
            ro: "Carte"
          },
          emoji: "📖"
        },
        {
          id: "c5",
          label: {
            de: "Stadt",
            en: "City",
            hu: "Város",
            ro: "Oraș"
          },
          emoji: "🏙️"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Geht",
            en: "Goes",
            hu: "Megy",
            ro: "Merge"
          },
          emoji: "🚶"
        },
        {
          id: "w2",
          label: {
            de: "Steht",
            en: "Stands",
            hu: "Áll",
            ro: "Stă"
          },
          emoji: "🧍"
        },
        {
          id: "w3",
          label: {
            de: "Sitzt",
            en: "Sits",
            hu: "Ül",
            ro: "Șade"
          },
          emoji: "🪑"
        },
        {
          id: "w4",
          label: {
            de: "Schön",
            en: "Beautiful",
            hu: "Szép",
            ro: "Frumos"
          },
          emoji: "✨"
        },
        {
          id: "w5",
          label: {
            de: "Gut",
            en: "Good",
            hu: "Jó",
            ro: "Bun"
          },
          emoji: "👍"
        }
      ]
    },
    {
      id: "hu-mc-9",
      title: {
        de: "Familie",
        en: "Family",
        hu: "Család",
        ro: "Familie"
      },
      prompt: {
        de: "Sammle Familienmitglieder!",
        en: "Collect family members!",
        hu: "Gyűjtsd össze a családtagokat!",
        ro: "Colectează membrii familiei!"
      },
      goal: 6,
      speed: 3,
      theme: {
        sky: "#0f766e",
        glow: "#14b8a6",
        accent: "#2dd4bf"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Mutter",
            en: "Mother",
            hu: "Anya",
            ro: "Mamă"
          },
          emoji: "👩"
        },
        {
          id: "c2",
          label: {
            de: "Vater",
            en: "Father",
            hu: "Apa",
            ro: "Tată"
          },
          emoji: "👨"
        },
        {
          id: "c3",
          label: {
            de: "Bruder",
            en: "Brother",
            hu: "Fivér",
            ro: "Frate"
          },
          emoji: "👦"
        },
        {
          id: "c4",
          label: {
            de: "Schwester",
            en: "Sister",
            hu: "Nővér",
            ro: "Soră"
          },
          emoji: "👧"
        },
        {
          id: "c5",
          label: {
            de: "Oma",
            en: "Grandma",
            hu: "Nagymama",
            ro: "Bunică"
          },
          emoji: "👵"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Arzt",
            en: "Doctor",
            hu: "Orvos",
            ro: "Doctor"
          },
          emoji: "👩‍⚕️"
        },
        {
          id: "w2",
          label: {
            de: "Lehrer",
            en: "Teacher",
            hu: "Tanár",
            ro: "Profesor"
          },
          emoji: "👨‍🏫"
        },
        {
          id: "w3",
          label: {
            de: "Polizist",
            en: "Police",
            hu: "Rendőr",
            ro: "Polițist"
          },
          emoji: "👮"
        },
        {
          id: "w4",
          label: {
            de: "Bäcker",
            en: "Baker",
            hu: "Pék",
            ro: "Brutar"
          },
          emoji: "🥖"
        },
        {
          id: "w5",
          label: {
            de: "Fahrer",
            en: "Driver",
            hu: "Sofőr",
            ro: "Șofer"
          },
          emoji: "🚗"
        }
      ]
    },
    {
      id: "hu-mc-10",
      title: {
        de: "Wetter",
        en: "Weather",
        hu: "Időjárás",
        ro: "Vreme"
      },
      prompt: {
        de: "Fange die Wetter-Wörter!",
        en: "Catch the weather words!",
        hu: "Fogd ki az időjárással kapcsolatos szavakat!",
        ro: "Prinde cuvintele despre vreme!"
      },
      goal: 6,
      speed: 4,
      theme: {
        sky: "#0369a1",
        glow: "#0ea5e9",
        accent: "#38bdf8"
      },
      correctItems: [
        {
          id: "c1",
          label: {
            de: "Sonne",
            en: "Sun",
            hu: "Nap",
            ro: "Soare"
          },
          emoji: "☀️"
        },
        {
          id: "c2",
          label: {
            de: "Regen",
            en: "Rain",
            hu: "Eső",
            ro: "Ploaie"
          },
          emoji: "🌧️"
        },
        {
          id: "c3",
          label: {
            de: "Wind",
            en: "Wind",
            hu: "Szél",
            ro: "Vânt"
          },
          emoji: "💨"
        },
        {
          id: "c4",
          label: {
            de: "Schnee",
            en: "Snow",
            hu: "Hó",
            ro: "Zăpadă"
          },
          emoji: "❄️"
        },
        {
          id: "c5",
          label: {
            de: "Wolke",
            en: "Cloud",
            hu: "Felhő",
            ro: "Nor"
          },
          emoji: "☁️"
        }
      ],
      wrongItems: [
        {
          id: "w1",
          label: {
            de: "Berg",
            en: "Mountain",
            hu: "Hegy",
            ro: "Munte"
          },
          emoji: "⛰️"
        },
        {
          id: "w2",
          label: {
            de: "Fluss",
            en: "River",
            hu: "Folyó",
            ro: "Râu"
          },
          emoji: "🏞️"
        },
        {
          id: "w3",
          label: {
            de: "See",
            en: "Lake",
            hu: "Tó",
            ro: "Lac"
          },
          emoji: "🌊"
        },
        {
          id: "w4",
          label: {
            de: "Gras",
            en: "Grass",
            hu: "Fű",
            ro: "Iarbă"
          },
          emoji: "🌱"
        },
        {
          id: "w5",
          label: {
            de: "Stein",
            en: "Stone",
            hu: "Kő",
            ro: "Piatră"
          },
          emoji: "🪨"
        }
      ]
    }
  ],
  orbitSort: [
    {
      id: "hu-os-1",
      title: {
        de: "Kurze und lange Vokale",
        en: "Short and Long Vowels",
        hu: "Rövid és hosszú magánhangzók",
        ro: "Vocale scurte și lungi"
      },
      instruction: {
        de: "Sortiere die Vokale nach Länge",
        en: "Sort the vowels by length",
        hu: "Válogasd szét a magánhangzókat hosszúság szerint",
        ro: "Sortează vocalele după lungime"
      },
      theme: {
        bg: "#1e293b",
        orbit: "#3b82f6",
        accent: "#60a5fa"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Kurz",
            en: "Short",
            hu: "Rövid",
            ro: "Scurt"
          },
          color: "#ef4444"
        },
        {
          id: "b2",
          label: {
            de: "Lang",
            en: "Long",
            hu: "Hosszú",
            ro: "Lung"
          },
          color: "#10b981"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "a",
            en: "a",
            hu: "a",
            ro: "a"
          },
          emoji: "🅰️",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "e",
            en: "e",
            hu: "e",
            ro: "e"
          },
          emoji: "📧",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "á",
            en: "á",
            hu: "á",
            ro: "á"
          },
          emoji: "🅰️",
          bucketId: "b2"
        },
        {
          id: "i4",
          label: {
            de: "é",
            en: "é",
            hu: "é",
            ro: "é"
          },
          emoji: "📧",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "i",
            en: "i",
            hu: "i",
            ro: "i"
          },
          emoji: "📍",
          bucketId: "b1"
        },
        {
          id: "i6",
          label: {
            de: "í",
            en: "í",
            hu: "í",
            ro: "í"
          },
          emoji: "📍",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-2",
      title: {
        de: "Gerade / Ungerade Zahlen",
        en: "Even / Odd Numbers",
        hu: "Páros és páratlan számok",
        ro: "Numere pare / impare"
      },
      instruction: {
        de: "Sortiere die Zahlen in gerade und ungerade.",
        en: "Sort numbers into even and odd.",
        hu: "Válogasd szét a számokat párosra és páratlanra.",
        ro: "Sortează numerele în pare și impare."
      },
      theme: {
        bg: "#0f172a",
        orbit: "#8b5cf6",
        accent: "#a78bfa"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Gerade",
            en: "Even",
            hu: "Páros",
            ro: "Par"
          },
          color: "#f59e0b"
        },
        {
          id: "b2",
          label: {
            de: "Ungerade",
            en: "Odd",
            hu: "Páratlan",
            ro: "Impar"
          },
          color: "#3b82f6"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Zwei",
            en: "Two",
            hu: "Kettő",
            ro: "Doi"
          },
          emoji: "2️⃣",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Vier",
            en: "Four",
            hu: "Négy",
            ro: "Patru"
          },
          emoji: "4️⃣",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Sechs",
            en: "Six",
            hu: "Hat",
            ro: "Șase"
          },
          emoji: "6️⃣",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Eins",
            en: "One",
            hu: "Egy",
            ro: "Unu"
          },
          emoji: "1️⃣",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Drei",
            en: "Three",
            hu: "Három",
            ro: "Trei"
          },
          emoji: "3️⃣",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Fünf",
            en: "Five",
            hu: "Öt",
            ro: "Cinci"
          },
          emoji: "5️⃣",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-3",
      title: {
        de: "Nomen vs. Verben",
        en: "Nouns vs. Verbs",
        hu: "Főnevek és igék",
        ro: "Substantive vs. Verbe"
      },
      instruction: {
        de: "Sortiere in Namenwörter und Tunwörter.",
        en: "Sort into nouns and verbs.",
        hu: "Válogasd szét főnevekre és igékre.",
        ro: "Sortează în substantive și verbe."
      },
      theme: {
        bg: "#022c22",
        orbit: "#10b981",
        accent: "#34d399"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Nomen",
            en: "Nouns",
            hu: "Főnév",
            ro: "Substantiv"
          },
          color: "#3b82f6"
        },
        {
          id: "b2",
          label: {
            de: "Verben",
            en: "Verbs",
            hu: "Ige",
            ro: "Verb"
          },
          color: "#ef4444"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Haus",
            en: "House",
            hu: "Ház",
            ro: "Casă"
          },
          emoji: "🏠",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Auto",
            en: "Car",
            hu: "Autó",
            ro: "Mașină"
          },
          emoji: "🚗",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Apfel",
            en: "Apple",
            hu: "Alma",
            ro: "Măr"
          },
          emoji: "🍎",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Geht",
            en: "Goes",
            hu: "Megy",
            ro: "Merge"
          },
          emoji: "🚶",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Isst",
            en: "Eats",
            hu: "Eszik",
            ro: "Mănâncă"
          },
          emoji: "🍔",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Trinkt",
            en: "Drinks",
            hu: "Iszik",
            ro: "Bea"
          },
          emoji: "🥛",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-4",
      title: {
        de: "Haustiere vs. Wilde Tiere",
        en: "Pets vs. Wild Animals",
        hu: "Háziállatok és vadállatok",
        ro: "Animale de companie vs. sălbatice"
      },
      instruction: {
        de: "Sortiere die Tiere richtig.",
        en: "Sort the animals correctly.",
        hu: "Válogasd szét az állatokat helyesen.",
        ro: "Sortează animalele corect."
      },
      theme: {
        bg: "#3f1a05",
        orbit: "#f59e0b",
        accent: "#fbbf24"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Haustier",
            en: "Pet",
            hu: "Háziállat",
            ro: "De companie"
          },
          color: "#10b981"
        },
        {
          id: "b2",
          label: {
            de: "Wildtier",
            en: "Wild Animal",
            hu: "Vadállat",
            ro: "Sălbatic"
          },
          color: "#ef4444"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Hund",
            en: "Dog",
            hu: "Kutya",
            ro: "Câine"
          },
          emoji: "🐕",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Katze",
            en: "Cat",
            hu: "Macska",
            ro: "Pisică"
          },
          emoji: "🐈",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Kuh",
            en: "Cow",
            hu: "Tehén",
            ro: "Vacã"
          },
          emoji: "🐄",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Löwe",
            en: "Lion",
            hu: "Oroszlán",
            ro: "Leu"
          },
          emoji: "🦁",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Bär",
            en: "Bear",
            hu: "Medve",
            ro: "Urs"
          },
          emoji: "🐻",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Wolf",
            en: "Wolf",
            hu: "Farkas",
            ro: "Lup"
          },
          emoji: "🐺",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-5",
      title: {
        de: "Groß und Klein",
        en: "Big and Small",
        hu: "Nagy és kicsi",
        ro: "Mare și mic"
      },
      instruction: {
        de: "Sortiere die Dinge nach Größe.",
        en: "Sort the objects by size.",
        hu: "Válogasd szét a dolgokat méretük alapján.",
        ro: "Sortează obiectele după dimensiune."
      },
      theme: {
        bg: "#172554",
        orbit: "#1e40af",
        accent: "#3b82f6"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Groß",
            en: "Big",
            hu: "Nagy",
            ro: "Mare"
          },
          color: "#f59e0b"
        },
        {
          id: "b2",
          label: {
            de: "Klein",
            en: "Small",
            hu: "Kicsi",
            ro: "Mic"
          },
          color: "#10b981"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Elefant",
            en: "Elephant",
            hu: "Elefánt",
            ro: "Elefant"
          },
          emoji: "🐘",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Berg",
            en: "Mountain",
            hu: "Hegy",
            ro: "Munte"
          },
          emoji: "⛰️",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Haus",
            en: "House",
            hu: "Ház",
            ro: "Casă"
          },
          emoji: "🏠",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Ameise",
            en: "Ant",
            hu: "Hangya",
            ro: "Furnică"
          },
          emoji: "🐜",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Kiesel",
            en: "Pebble",
            hu: "Kavics",
            ro: "Pietricică"
          },
          emoji: "🪨",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Fliege",
            en: "Fly",
            hu: "Légy",
            ro: "Muscă"
          },
          emoji: "🪰",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-6",
      title: {
        de: "Tage und Monate",
        en: "Days and Months",
        hu: "Napok és hónapok",
        ro: "Zile și luni"
      },
      instruction: {
        de: "Sortiere in Tage und Monate.",
        en: "Sort into days and months.",
        hu: "Válogasd szét napokra és hónapokra.",
        ro: "Sortează în zile și luni."
      },
      theme: {
        bg: "#2e1065",
        orbit: "#7c3aed",
        accent: "#8b5cf6"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Tag",
            en: "Day",
            hu: "Nap",
            ro: "Ziua"
          },
          color: "#ec4899"
        },
        {
          id: "b2",
          label: {
            de: "Monat",
            en: "Month",
            hu: "Hónap",
            ro: "Luna"
          },
          color: "#14b8a6"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Montag",
            en: "Monday",
            hu: "Hétfő",
            ro: "Luni"
          },
          emoji: "📅",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Dienstag",
            en: "Tuesday",
            hu: "Kedd",
            ro: "Marți"
          },
          emoji: "📅",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Freitag",
            en: "Friday",
            hu: "Péntek",
            ro: "Vineri"
          },
          emoji: "📅",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Januar",
            en: "January",
            hu: "Január",
            ro: "Ianuarie"
          },
          emoji: "🗓️",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Februar",
            en: "February",
            hu: "Február",
            ro: "Februarie"
          },
          emoji: "🗓️",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "März",
            en: "March",
            hu: "Március",
            ro: "Martie"
          },
          emoji: "🗓️",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-7",
      title: {
        de: "Vokalharmonie",
        en: "Vowel Harmony",
        hu: "Hangrend",
        ro: "Armonia vocalelor"
      },
      instruction: {
        de: "Hoch (Front) oder Tief (Back) Vokalharmonie?",
        en: "Front (Hoch) or Back (Tief) Vowels?",
        hu: "Magas vagy mély hangrendű szavak?",
        ro: "Vocale anterioare (înalte) sau posterioare (joase)?"
      },
      theme: {
        bg: "#4a044e",
        orbit: "#c026d3",
        accent: "#d946ef"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Hoch (e,é,i,í,ö,ő,ü,ű)",
            en: "Front",
            hu: "Magas",
            ro: "Anterioare"
          },
          color: "#3b82f6"
        },
        {
          id: "b2",
          label: {
            de: "Tief (a,á,o,ó,u,ú)",
            en: "Back",
            hu: "Mély",
            ro: "Posterioare"
          },
          color: "#ef4444"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Zehn",
            en: "Ten",
            hu: "Tíz",
            ro: "Zece"
          },
          emoji: "🔟",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Musik",
            en: "Music",
            hu: "Zene",
            ro: "Muzică"
          },
          emoji: "🎵",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Kühl",
            en: "Cool",
            hu: "Hűvös",
            ro: "Răcoros"
          },
          emoji: "🧊",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Auto",
            en: "Car",
            hu: "Autó",
            ro: "Mașină"
          },
          emoji: "🚗",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Tor",
            en: "Gate",
            hu: "Kapu",
            ro: "Poartă"
          },
          emoji: "⛩️",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Tisch",
            en: "Table",
            hu: "Asztal",
            ro: "Masă"
          },
          emoji: "🪑",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-8",
      title: {
        de: "Winter und Sommer",
        en: "Winter and Summer",
        hu: "Tél és Nyár",
        ro: "Iarnă și Vară"
      },
      instruction: {
        de: "Sortiere die Wörter nach Jahreszeit.",
        en: "Sort words by season.",
        hu: "Válogasd a szavakat évszakok szerint.",
        ro: "Sortează cuvintele după anotimp."
      },
      theme: {
        bg: "#0c4a6e",
        orbit: "#0284c7",
        accent: "#38bdf8"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Winter",
            en: "Winter",
            hu: "Tél",
            ro: "Iarnă"
          },
          color: "#e0f2fe"
        },
        {
          id: "b2",
          label: {
            de: "Sommer",
            en: "Summer",
            hu: "Nyár",
            ro: "Vară"
          },
          color: "#fef08a"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Schnee",
            en: "Snow",
            hu: "Hó",
            ro: "Zăpadă"
          },
          emoji: "❄️",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Kalt",
            en: "Cold",
            hu: "Hideg",
            ro: "Rece"
          },
          emoji: "🥶",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Eis",
            en: "Ice",
            hu: "Jég",
            ro: "Gheață"
          },
          emoji: "🧊",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Heiß",
            en: "Hot",
            hu: "Meleg",
            ro: "Cald"
          },
          emoji: "🥵",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Strand",
            en: "Beach",
            hu: "Strand",
            ro: "Plajă"
          },
          emoji: "🏖️",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Sonne",
            en: "Sun",
            hu: "Nap",
            ro: "Soare"
          },
          emoji: "☀️",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-9",
      title: {
        de: "Werkzeuge vs. Spielzeuge",
        en: "Tools vs. Toys",
        hu: "Szerszámok és játékok",
        ro: "Unelte vs. Jucării"
      },
      instruction: {
        de: "Sortiere in Werkzeuge und Spielzeuge.",
        en: "Sort into tools and toys.",
        hu: "Válogasd szerszámokra és játékokra.",
        ro: "Sortează în unelte și jucării."
      },
      theme: {
        bg: "#1f2937",
        orbit: "#4b5563",
        accent: "#9ca3af"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Werkzeug",
            en: "Tool",
            hu: "Szerszám",
            ro: "Unealtă"
          },
          color: "#64748b"
        },
        {
          id: "b2",
          label: {
            de: "Spielzeug",
            en: "Toy",
            hu: "Játék",
            ro: "Jucărie"
          },
          color: "#f43f5e"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Hammer",
            en: "Hammer",
            hu: "Kalapács",
            ro: "Ciocan"
          },
          emoji: "🔨",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Säge",
            en: "Saw",
            hu: "Fűrész",
            ro: "Ferăstrău"
          },
          emoji: "🪚",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Axt",
            en: "Axe",
            hu: "Fejsze",
            ro: "Topor"
          },
          emoji: "🪓",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Puppe",
            en: "Doll",
            hu: "Baba",
            ro: "Păpușă"
          },
          emoji: "🪆",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Ball",
            en: "Ball",
            hu: "Labda",
            ro: "Minge"
          },
          emoji: "⚽",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Auto",
            en: "Toy Car",
            hu: "Kisautó",
            ro: "Mașinuță"
          },
          emoji: "🏎️",
          bucketId: "b2"
        }
      ]
    },
    {
      id: "hu-os-10",
      title: {
        de: "Essen und Trinken",
        en: "Food and Drink",
        hu: "Étel és ital",
        ro: "Mâncare și băutură"
      },
      instruction: {
        de: "Sortiere in Essen und Trinken.",
        en: "Sort into food and drink.",
        hu: "Válogasd ételre és italra.",
        ro: "Sortează în mâncare și băutură."
      },
      theme: {
        bg: "#431407",
        orbit: "#9a3412",
        accent: "#fb923c"
      },
      buckets: [
        {
          id: "b1",
          label: {
            de: "Essen",
            en: "Food",
            hu: "Étel",
            ro: "Mâncare"
          },
          color: "#fbbf24"
        },
        {
          id: "b2",
          label: {
            de: "Trinken",
            en: "Drink",
            hu: "Ital",
            ro: "Băutură"
          },
          color: "#38bdf8"
        }
      ],
      items: [
        {
          id: "i1",
          label: {
            de: "Brot",
            en: "Bread",
            hu: "Kenyér",
            ro: "Pâine"
          },
          emoji: "🍞",
          bucketId: "b1"
        },
        {
          id: "i2",
          label: {
            de: "Käse",
            en: "Cheese",
            hu: "Sajt",
            ro: "Brânză"
          },
          emoji: "🧀",
          bucketId: "b1"
        },
        {
          id: "i3",
          label: {
            de: "Apfel",
            en: "Apple",
            hu: "Alma",
            ro: "Măr"
          },
          emoji: "🍎",
          bucketId: "b1"
        },
        {
          id: "i4",
          label: {
            de: "Wasser",
            en: "Water",
            hu: "Víz",
            ro: "Apă"
          },
          emoji: "💧",
          bucketId: "b2"
        },
        {
          id: "i5",
          label: {
            de: "Milch",
            en: "Milk",
            hu: "Tej",
            ro: "Lapte"
          },
          emoji: "🥛",
          bucketId: "b2"
        },
        {
          id: "i6",
          label: {
            de: "Saft",
            en: "Juice",
            hu: "Gyümölcslé",
            ro: "Suc"
          },
          emoji: "🧃",
          bucketId: "b2"
        }
      ]
    }
  ],
  signalRunner: [
    {
      id: "hu-sr-1",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-1",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Guten Morgen",
            en: "Good Morning",
            hu: "Jó reggelt",
            ro: "Bună dimineața"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Jó reggelt",
                en: "Jó reggelt",
                hu: "Jó reggelt",
                ro: "Jó reggelt"
              }
            },
            {
              id: "c2",
              label: {
                de: "Jó éjszakát",
                en: "Jó éjszakát",
                hu: "Jó éjszakát",
                ro: "Jó éjszakát"
              }
            },
            {
              id: "c3",
              label: {
                de: "Szia",
                en: "Szia",
                hu: "Szia",
                ro: "Szia"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-2",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-2",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Auf Wiedersehen",
            en: "Goodbye",
            hu: "Viszlát",
            ro: "La revedere"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Viszlát",
                en: "Viszlát",
                hu: "Viszlát",
                ro: "Viszlát"
              }
            },
            {
              id: "c2",
              label: {
                de: "Szia",
                en: "Szia",
                hu: "Szia",
                ro: "Szia"
              }
            },
            {
              id: "c3",
              label: {
                de: "Kérem",
                en: "Kérem",
                hu: "Kérem",
                ro: "Kérem"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-3",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-3",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Danke",
            en: "Thank you",
            hu: "Köszönöm",
            ro: "Mulțumesc"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Köszönöm",
                en: "Köszönöm",
                hu: "Köszönöm",
                ro: "Köszönöm"
              }
            },
            {
              id: "c2",
              label: {
                de: "Kérem",
                en: "Kérem",
                hu: "Kérem",
                ro: "Kérem"
              }
            },
            {
              id: "c3",
              label: {
                de: "Bocsánat",
                en: "Bocsánat",
                hu: "Bocsánat",
                ro: "Bocsánat"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-4",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-4",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Ja",
            en: "Yes",
            hu: "Igen",
            ro: "Da"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Igen",
                en: "Igen",
                hu: "Igen",
                ro: "Igen"
              }
            },
            {
              id: "c2",
              label: {
                de: "Nem",
                en: "Nem",
                hu: "Nem",
                ro: "Nem"
              }
            },
            {
              id: "c3",
              label: {
                de: "Talán",
                en: "Talán",
                hu: "Talán",
                ro: "Talán"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-5",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-5",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Bitte",
            en: "Please",
            hu: "Kérem",
            ro: "Te rog"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Kérem",
                en: "Kérem",
                hu: "Kérem",
                ro: "Kérem"
              }
            },
            {
              id: "c2",
              label: {
                de: "Köszönöm",
                en: "Köszönöm",
                hu: "Köszönöm",
                ro: "Köszönöm"
              }
            },
            {
              id: "c3",
              label: {
                de: "Igen",
                en: "Igen",
                hu: "Igen",
                ro: "Igen"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-6",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-6",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Wo ist...?",
            en: "Where is...?",
            hu: "Hol van...?",
            ro: "Unde este...?"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Hol van...?",
                en: "Hol van...?",
                hu: "Hol van...?",
                ro: "Hol van...?"
              }
            },
            {
              id: "c2",
              label: {
                de: "Ki az...?",
                en: "Ki az...?",
                hu: "Ki az...?",
                ro: "Ki az...?"
              }
            },
            {
              id: "c3",
              label: {
                de: "Mi az...?",
                en: "Mi az...?",
                hu: "Mi az...?",
                ro: "Mi az...?"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-7",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-7",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Mein Name ist...",
            en: "My name is...",
            hu: "A nevem...",
            ro: "Numele meu este..."
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "A nevem...",
                en: "A nevem...",
                hu: "A nevem...",
                ro: "A nevem..."
              }
            },
            {
              id: "c2",
              label: {
                de: "Te vagy...",
                en: "Te vagy...",
                hu: "Te vagy...",
                ro: "Te vagy..."
              }
            },
            {
              id: "c3",
              label: {
                de: "Ő az...",
                en: "Ő az...",
                hu: "Ő az...",
                ro: "Ő az..."
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-8",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-8",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Wie geht es dir?",
            en: "How are you?",
            hu: "Hogy vagy?",
            ro: "Ce mai faci?"
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Hogy vagy?",
                en: "Hogy vagy?",
                hu: "Hogy vagy?",
                ro: "Hogy vagy?"
              }
            },
            {
              id: "c2",
              label: {
                de: "Ki vagy?",
                en: "Ki vagy?",
                hu: "Ki vagy?",
                ro: "Ki vagy?"
              }
            },
            {
              id: "c3",
              label: {
                de: "Hol vagy?",
                en: "Hol vagy?",
                hu: "Hol vagy?",
                ro: "Hol vagy?"
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-9",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-9",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Ich habe Hunger.",
            en: "I am hungry.",
            hu: "Éhes vagyok.",
            ro: "Mi-e foame."
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Éhes vagyok.",
                en: "Éhes vagyok.",
                hu: "Éhes vagyok.",
                ro: "Éhes vagyok."
              }
            },
            {
              id: "c2",
              label: {
                de: "Szomjas vagyok.",
                en: "Szomjas vagyok.",
                hu: "Szomjas vagyok.",
                ro: "Szomjas vagyok."
              }
            },
            {
              id: "c3",
              label: {
                de: "Fáradt vagyok.",
                en: "Fáradt vagyok.",
                hu: "Fáradt vagyok.",
                ro: "Fáradt vagyok."
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    },
    {
      id: "hu-sr-10",
      title: {
        de: "Ausdrücke",
        en: "Expressions",
        hu: "Kifejezések",
        ro: "Expresii"
      },
      instruction: {
        de: "Wähle die richtige Übersetzung.",
        en: "Choose the correct translation.",
        hu: "Válaszd ki a helyes fordítást.",
        ro: "Alege traducerea corectă."
      },
      scenes: [
        {
          id: "s-10",
          title: {
            de: "Übersetzung",
            en: "Translation",
            hu: "Fordítás",
            ro: "Traducere"
          },
          prompt: {
            de: "Ich liebe dich.",
            en: "I love you.",
            hu: "Szeretlek.",
            ro: "Te iubesc."
          },
          sceneType: "community",
          visual: {
            icon: "🗣️",
            bg: "#1e40af",
            accent: "#60a5fa"
          },
          choices: [
            {
              id: "c1",
              label: {
                de: "Szeretlek.",
                en: "Szeretlek.",
                hu: "Szeretlek.",
                ro: "Szeretlek."
              }
            },
            {
              id: "c2",
              label: {
                de: "Gyűlöllek.",
                en: "Gyűlöllek.",
                hu: "Gyűlöllek.",
                ro: "Gyűlöllek."
              }
            },
            {
              id: "c3",
              label: {
                de: "Tetszik.",
                en: "Tetszik.",
                hu: "Tetszik.",
                ro: "Tetszik."
              }
            }
          ],
          correctChoiceId: "c1",
          successFeedback: {
            de: "Richtig!",
            en: "Correct!",
            hu: "Helyes!",
            ro: "Corect!"
          },
          failFeedback: {
            de: "Falsch!",
            en: "Wrong!",
            hu: "Helytelen!",
            ro: "Greșit!"
          }
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "hu-cb-1",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Ich lese ein Buch.",
        en: "I read a book.",
        hu: "Én olvasok egy könyvet.",
        ro: "Eu citesc o carte."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "Én",
            en: "Én",
            hu: "Én",
            ro: "Én"
          }
        },
        {
          id: "p1",
          label: {
            de: "olvasok",
            en: "olvasok",
            hu: "olvasok",
            ro: "olvasok"
          }
        },
        {
          id: "p2",
          label: {
            de: "egy",
            en: "egy",
            hu: "egy",
            ro: "egy"
          }
        },
        {
          id: "p3",
          label: {
            de: "könyvet.",
            en: "könyvet.",
            hu: "könyvet.",
            ro: "könyvet."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s3",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2",
        "p3"
      ]
    },
    {
      id: "hu-cb-2",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Der Hund bellt.",
        en: "The dog barks.",
        hu: "A kutya ugat.",
        ro: "Câinele latră."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "A",
            en: "A",
            hu: "A",
            ro: "A"
          }
        },
        {
          id: "p1",
          label: {
            de: "kutya",
            en: "kutya",
            hu: "kutya",
            ro: "kutya"
          }
        },
        {
          id: "p2",
          label: {
            de: "ugat.",
            en: "ugat.",
            hu: "ugat.",
            ro: "ugat."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    },
    {
      id: "hu-cb-3",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Ich möchte einen Apfel.",
        en: "I would like an apple.",
        hu: "Kérek egy almát.",
        ro: "Aș dori un măr."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "Kérek",
            en: "Kérek",
            hu: "Kérek",
            ro: "Kérek"
          }
        },
        {
          id: "p1",
          label: {
            de: "egy",
            en: "egy",
            hu: "egy",
            ro: "egy"
          }
        },
        {
          id: "p2",
          label: {
            de: "almát.",
            en: "almát.",
            hu: "almát.",
            ro: "almát."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    },
    {
      id: "hu-cb-4",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Wo ist der Laden?",
        en: "Where is the store?",
        hu: "Hol van a bolt?",
        ro: "Unde este magazinul?"
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "Hol",
            en: "Hol",
            hu: "Hol",
            ro: "Hol"
          }
        },
        {
          id: "p1",
          label: {
            de: "van",
            en: "van",
            hu: "van",
            ro: "van"
          }
        },
        {
          id: "p2",
          label: {
            de: "a",
            en: "a",
            hu: "a",
            ro: "a"
          }
        },
        {
          id: "p3",
          label: {
            de: "bolt?",
            en: "bolt?",
            hu: "bolt?",
            ro: "bolt?"
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s3",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2",
        "p3"
      ]
    },
    {
      id: "hu-cb-5",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Das ist ein schöner Tag.",
        en: "This is a beautiful day.",
        hu: "Ez egy szép nap.",
        ro: "Aceasta este o zi frumoasă."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "Ez",
            en: "Ez",
            hu: "Ez",
            ro: "Ez"
          }
        },
        {
          id: "p1",
          label: {
            de: "egy",
            en: "egy",
            hu: "egy",
            ro: "egy"
          }
        },
        {
          id: "p2",
          label: {
            de: "szép",
            en: "szép",
            hu: "szép",
            ro: "szép"
          }
        },
        {
          id: "p3",
          label: {
            de: "nap.",
            en: "nap.",
            hu: "nap.",
            ro: "nap."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s3",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2",
        "p3"
      ]
    },
    {
      id: "hu-cb-6",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Ich liebe Schokolade.",
        en: "I like chocolate.",
        hu: "Szeretem a csokoládét.",
        ro: "Îmi place ciocolata."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "Szeretem",
            en: "Szeretem",
            hu: "Szeretem",
            ro: "Szeretem"
          }
        },
        {
          id: "p1",
          label: {
            de: "a",
            en: "a",
            hu: "a",
            ro: "a"
          }
        },
        {
          id: "p2",
          label: {
            de: "csokoládét.",
            en: "csokoládét.",
            hu: "csokoládét.",
            ro: "csokoládét."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    },
    {
      id: "hu-cb-7",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Die Sonne ist gelb.",
        en: "The sun is yellow.",
        hu: "A nap sárga.",
        ro: "Soarele este galben."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "A",
            en: "A",
            hu: "A",
            ro: "A"
          }
        },
        {
          id: "p1",
          label: {
            de: "nap",
            en: "nap",
            hu: "nap",
            ro: "nap"
          }
        },
        {
          id: "p2",
          label: {
            de: "sárga.",
            en: "sárga.",
            hu: "sárga.",
            ro: "sárga."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    },
    {
      id: "hu-cb-8",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Das Wasser ist kalt.",
        en: "The water is cold.",
        hu: "A víz hideg.",
        ro: "Apa este rece."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "A",
            en: "A",
            hu: "A",
            ro: "A"
          }
        },
        {
          id: "p1",
          label: {
            de: "víz",
            en: "víz",
            hu: "víz",
            ro: "víz"
          }
        },
        {
          id: "p2",
          label: {
            de: "hideg.",
            en: "hideg.",
            hu: "hideg.",
            ro: "hideg."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    },
    {
      id: "hu-cb-9",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Nächste Woche Dienstag.",
        en: "Next week Tuesday.",
        hu: "Jövő héten kedden.",
        ro: "Săptămâna viitoare marți."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "Jövő",
            en: "Jövő",
            hu: "Jövő",
            ro: "Jövő"
          }
        },
        {
          id: "p1",
          label: {
            de: "héten",
            en: "héten",
            hu: "héten",
            ro: "héten"
          }
        },
        {
          id: "p2",
          label: {
            de: "kedden.",
            en: "kedden.",
            hu: "kedden.",
            ro: "kedden."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    },
    {
      id: "hu-cb-10",
      title: {
        de: "Sätze bauen",
        en: "Build Sentences",
        hu: "Mondatépítés",
        ro: "Construiește propoziții"
      },
      instruction: {
        de: "Bilde den richtigen ungarischen Satz.",
        en: "Build the correct Hungarian sentence.",
        hu: "Építsd fel a helyes magyar mondatot.",
        ro: "Construiește propoziția corectă în maghiară."
      },
      hint: {
        de: "Der Vogel fliegt.",
        en: "The bird flies.",
        hu: "A madár repül.",
        ro: "Pasărea zboară."
      },
      theme: {
        bg: "#1e1b4b",
        accent: "#8b5cf6",
        card: "#312e81"
      },
      parts: [
        {
          id: "p0",
          label: {
            de: "A",
            en: "A",
            hu: "A",
            ro: "A"
          }
        },
        {
          id: "p1",
          label: {
            de: "madár",
            en: "madár",
            hu: "madár",
            ro: "madár"
          }
        },
        {
          id: "p2",
          label: {
            de: "repül.",
            en: "repül.",
            hu: "repül.",
            ro: "repül."
          }
        }
      ],
      slots: [
        {
          id: "s0",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s1",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        },
        {
          id: "s2",
          label: {
            de: "___",
            en: "___",
            hu: "___",
            ro: "___"
          }
        }
      ],
      solution: [
        "p0",
        "p1",
        "p2"
      ]
    }
  ],
  memoryRadar: [
    {
      id: "hu-mr-1",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Hunde!",
        en: "Find all Dogs!",
        hu: "Keresd meg az összes kutyákt!",
        ro: "Găsește toți/toate Câini!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Hunde",
            en: "Dogs",
            hu: "Kutyák",
            ro: "Câini"
          },
          emoji: "🐕"
        },
        {
          id: "t2",
          label: {
            de: "Hunde",
            en: "Dogs",
            hu: "Kutyák",
            ro: "Câini"
          },
          emoji: "🐕"
        },
        {
          id: "t3",
          label: {
            de: "Hunde",
            en: "Dogs",
            hu: "Kutyák",
            ro: "Câini"
          },
          emoji: "🐕"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Katze",
            en: "Cat",
            hu: "Macska",
            ro: "Pisică"
          },
          emoji: "🐈"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🐁"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🐄"
        }
      ]
    },
    {
      id: "hu-mr-2",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Häuser!",
        en: "Find all Houses!",
        hu: "Keresd meg az összes házakt!",
        ro: "Găsește toți/toate Case!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Häuser",
            en: "Houses",
            hu: "Házak",
            ro: "Case"
          },
          emoji: "🏠"
        },
        {
          id: "t2",
          label: {
            de: "Häuser",
            en: "Houses",
            hu: "Házak",
            ro: "Case"
          },
          emoji: "🏠"
        },
        {
          id: "t3",
          label: {
            de: "Häuser",
            en: "Houses",
            hu: "Házak",
            ro: "Case"
          },
          emoji: "🏠"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Zelt",
            en: "Tent",
            hu: "Sátor",
            ro: "Cort"
          },
          emoji: "⛺"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🏰"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🏢"
        }
      ]
    },
    {
      id: "hu-mr-3",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Autos!",
        en: "Find all Cars!",
        hu: "Keresd meg az összes autókt!",
        ro: "Găsește toți/toate Mașini!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Autos",
            en: "Cars",
            hu: "Autók",
            ro: "Mașini"
          },
          emoji: "🚗"
        },
        {
          id: "t2",
          label: {
            de: "Autos",
            en: "Cars",
            hu: "Autók",
            ro: "Mașini"
          },
          emoji: "🚗"
        },
        {
          id: "t3",
          label: {
            de: "Autos",
            en: "Cars",
            hu: "Autók",
            ro: "Mașini"
          },
          emoji: "🚗"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Bus",
            en: "Bus",
            hu: "Busz",
            ro: "Autobuz"
          },
          emoji: "🚌"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🚆"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🚲"
        }
      ]
    },
    {
      id: "hu-mr-4",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Bäume!",
        en: "Find all Trees!",
        hu: "Keresd meg az összes fákt!",
        ro: "Găsește toți/toate Copaci!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Bäume",
            en: "Trees",
            hu: "Fák",
            ro: "Copaci"
          },
          emoji: "🌳"
        },
        {
          id: "t2",
          label: {
            de: "Bäume",
            en: "Trees",
            hu: "Fák",
            ro: "Copaci"
          },
          emoji: "🌳"
        },
        {
          id: "t3",
          label: {
            de: "Bäume",
            en: "Trees",
            hu: "Fák",
            ro: "Copaci"
          },
          emoji: "🌳"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Blume",
            en: "Flower",
            hu: "Virág",
            ro: "Floare"
          },
          emoji: "🌸"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🌿"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🍄"
        }
      ]
    },
    {
      id: "hu-mr-5",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Bücher!",
        en: "Find all Books!",
        hu: "Keresd meg az összes könyvekt!",
        ro: "Găsește toți/toate Cărți!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Bücher",
            en: "Books",
            hu: "Könyvek",
            ro: "Cărți"
          },
          emoji: "📖"
        },
        {
          id: "t2",
          label: {
            de: "Bücher",
            en: "Books",
            hu: "Könyvek",
            ro: "Cărți"
          },
          emoji: "📖"
        },
        {
          id: "t3",
          label: {
            de: "Bücher",
            en: "Books",
            hu: "Könyvek",
            ro: "Cărți"
          },
          emoji: "📖"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Heft",
            en: "Notebook",
            hu: "Füzet",
            ro: "Caiet"
          },
          emoji: "📓"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "✏️"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "💻"
        }
      ]
    },
    {
      id: "hu-mr-6",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Äpfel!",
        en: "Find all Apples!",
        hu: "Keresd meg az összes almákt!",
        ro: "Găsește toți/toate Mere!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Äpfel",
            en: "Apples",
            hu: "Almák",
            ro: "Mere"
          },
          emoji: "🍎"
        },
        {
          id: "t2",
          label: {
            de: "Äpfel",
            en: "Apples",
            hu: "Almák",
            ro: "Mere"
          },
          emoji: "🍎"
        },
        {
          id: "t3",
          label: {
            de: "Äpfel",
            en: "Apples",
            hu: "Almák",
            ro: "Mere"
          },
          emoji: "🍎"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Banane",
            en: "Banana",
            hu: "Banán",
            ro: "Banană"
          },
          emoji: "🍌"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🍐"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🍇"
        }
      ]
    },
    {
      id: "hu-mr-7",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Bälle!",
        en: "Find all Balls!",
        hu: "Keresd meg az összes labdákt!",
        ro: "Găsește toți/toate Mingii!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Bälle",
            en: "Balls",
            hu: "Labdák",
            ro: "Mingii"
          },
          emoji: "⚽"
        },
        {
          id: "t2",
          label: {
            de: "Bälle",
            en: "Balls",
            hu: "Labdák",
            ro: "Mingii"
          },
          emoji: "⚽"
        },
        {
          id: "t3",
          label: {
            de: "Bälle",
            en: "Balls",
            hu: "Labdák",
            ro: "Mingii"
          },
          emoji: "⚽"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Würfel",
            en: "Cube",
            hu: "Kocka",
            ro: "Cub"
          },
          emoji: "🎲"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🪆"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🏎️"
        }
      ]
    },
    {
      id: "hu-mr-8",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Sterne!",
        en: "Find all Stars!",
        hu: "Keresd meg az összes csillagokt!",
        ro: "Găsește toți/toate Stele!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Sterne",
            en: "Stars",
            hu: "Csillagok",
            ro: "Stele"
          },
          emoji: "⭐"
        },
        {
          id: "t2",
          label: {
            de: "Sterne",
            en: "Stars",
            hu: "Csillagok",
            ro: "Stele"
          },
          emoji: "⭐"
        },
        {
          id: "t3",
          label: {
            de: "Sterne",
            en: "Stars",
            hu: "Csillagok",
            ro: "Stele"
          },
          emoji: "⭐"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Planet",
            en: "Planet",
            hu: "Bolygó",
            ro: "Planetă"
          },
          emoji: "🪐"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "☄️"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🚀"
        }
      ]
    },
    {
      id: "hu-mr-9",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Sonnen!",
        en: "Find all Suns!",
        hu: "Keresd meg az összes napokt!",
        ro: "Găsește toți/toate Sori!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Sonnen",
            en: "Suns",
            hu: "Napok",
            ro: "Sori"
          },
          emoji: "☀️"
        },
        {
          id: "t2",
          label: {
            de: "Sonnen",
            en: "Suns",
            hu: "Napok",
            ro: "Sori"
          },
          emoji: "☀️"
        },
        {
          id: "t3",
          label: {
            de: "Sonnen",
            en: "Suns",
            hu: "Napok",
            ro: "Sori"
          },
          emoji: "☀️"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Wolke",
            en: "Cloud",
            hu: "Felhő",
            ro: "Nor"
          },
          emoji: "☁️"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "🌧️"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "💨"
        }
      ]
    },
    {
      id: "hu-mr-10",
      title: {
        de: "Radar-Gedächtnis",
        en: "Radar Memory",
        hu: "Memória radar",
        ro: "Radar de memorie"
      },
      instruction: {
        de: "Finde alle Monde!",
        en: "Find all Moons!",
        hu: "Keresd meg az összes holdakt!",
        ro: "Găsește toți/toate Luni!"
      },
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: {
        bg: "#064e3b",
        accent: "#34d399",
        radar: "#10b981"
      },
      targetItems: [
        {
          id: "t1",
          label: {
            de: "Monde",
            en: "Moons",
            hu: "Holdak",
            ro: "Luni"
          },
          emoji: "🌙"
        },
        {
          id: "t2",
          label: {
            de: "Monde",
            en: "Moons",
            hu: "Holdak",
            ro: "Luni"
          },
          emoji: "🌙"
        },
        {
          id: "t3",
          label: {
            de: "Monde",
            en: "Moons",
            hu: "Holdak",
            ro: "Luni"
          },
          emoji: "🌙"
        }
      ],
      decoyItems: [
        {
          id: "d1",
          label: {
            de: "Erde",
            en: "Earth",
            hu: "Föld",
            ro: "Pământ"
          },
          emoji: "🌍"
        },
        {
          id: "d2",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "☀️"
        },
        {
          id: "d3",
          label: {
            de: "Falsch",
            en: "Wrong",
            hu: "Hamis",
            ro: "Fals"
          },
          emoji: "⭐"
        }
      ]
    }
  ]
};
