import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";

export const SACHKUNDE_VISUAL_LAB_K3: SachkundeVisualLabGradePool = {
  grade: 3,
  meteorCatch: [
    {
      id: "k3-forest-life",
      title: "Waldkronen-Fang",
      prompt: "Fange nur Tiere aus dem Wald.",
      goal: 8,
      speed: 6,
      theme: { sky: "#18212f", glow: "#4ade80", accent: "#34d399" },
      correctItems: [
        { id: "eichhoernchen", label: "Eichhörnchen", emoji: "🐿️" },
        { id: "eule", label: "Eule", emoji: "🦉" },
        { id: "wildschwein", label: "Wildschwein", emoji: "🐗" },
        { id: "specht", label: "Specht", emoji: "🐦" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊" },
        { id: "hirsch", label: "Hirsch", emoji: "🦌" },
      ],
      wrongItems: [
        { id: "hai", label: "Hai", emoji: "🦈" },
        { id: "kamel", label: "Kamel", emoji: "🐫" },
        { id: "uBoot", label: "U-Boot", emoji: "🚤" },
        { id: "pinguin", label: "Pinguin", emoji: "🐧" },
      ],
    },
    {
      id: "k3-energie-erneuerbar",
      title: "Energie-Kollektor",
      prompt: "Sammle nur saubere, erneuerbare Energie ein.",
      goal: 6,
      speed: 6,
      theme: { sky: "#0b132b", glow: "#00f5d4", accent: "#00bbf9" },
      correctItems: [
        { id: "sonne", label: "Sonnenenergie", emoji: "☀️" },
        { id: "wind", label: "Windkraft", emoji: "🌬️" },
        { id: "wasser", label: "Wasserkraft", emoji: "🌊" },
      ],
      wrongItems: [
        { id: "kohle", label: "Kohle", emoji: "🪨" },
        { id: "oel", label: "Öl-Fass", emoji: "🛢️" },
        { id: "abgas", label: "Abgase", emoji: "💨" },
      ],
    },
    {
      id: "k3-insekten-jagd",
      title: "Insekten-Nebel",
      prompt: "Fange nur Insekten ein (sie haben 6 Beine!).",
      goal: 8,
      speed: 7,
      theme: { sky: "#1e1b4b", glow: "#c084fc", accent: "#a855f7" },
      correctItems: [
        { id: "biene", label: "Biene", emoji: "🐝" },
        { id: "kaefer", label: "Käfer", emoji: "🪲" },
        { id: "schmetterling", label: "Schmetterling", emoji: "🦋" },
        { id: "ameise", label: "Ameise", emoji: "🐜" },
        { id: "marienkaefer", label: "Marienkäfer", emoji: "🐞" },
      ],
      wrongItems: [
        { id: "spinne", label: "Spinne (8 Beine)", emoji: "🕷️" },
        { id: "frosch", label: "Frosch", emoji: "🐸" },
        { id: "maus", label: "Maus", emoji: "🐭" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "k3-machine-sort",
      title: "Maschinen-Orbits",
      instruction: "Sortiere: von Menschen gemacht oder aus der Natur.",
      theme: { bg: "#111827", orbit: "#60a5fa", accent: "#a78bfa" },
      buckets: [
        { id: "natur", label: "Natur", color: "#22c55e" },
        { id: "technik", label: "Technik", color: "#60a5fa" },
      ],
      items: [
        { id: "fluss", label: "Fluss", emoji: "🏞️", bucketId: "natur" },
        { id: "fels", label: "Fels", emoji: "🪨", bucketId: "natur" },
        { id: "baum", label: "Baum", emoji: "🌳", bucketId: "natur" },
        { id: "fahrrad", label: "Fahrrad", emoji: "🚲", bucketId: "technik" },
        { id: "windrad", label: "Windrad", emoji: "🌬️", bucketId: "technik" },
        { id: "roboter", label: "Roboter", emoji: "🤖", bucketId: "technik" },
      ],
    },
    {
      id: "k3-ernaehrungspyramide",
      title: "Lebensmittel-Schichten",
      instruction: "Basis der Pyramide (oft) oder Spitze (selten)?",
      theme: { bg: "#0f172a", orbit: "#facc15", accent: "#f472b6" },
      buckets: [
        { id: "basis", label: "Basis (Viel)", color: "#10b981" },
        { id: "spitze", label: "Spitze (Wenig)", color: "#ef4444" },
      ],
      items: [
        { id: "wasser", label: "Wasser", emoji: "💧", bucketId: "basis" },
        { id: "apfel", label: "Apfel", emoji: "🍎", bucketId: "basis" },
        { id: "brot", label: "Brot", emoji: "🍞", bucketId: "basis" },
        { id: "schokolade", label: "Schokolade", emoji: "🍫", bucketId: "spitze" },
        { id: "lutscher", label: "Lutscher", emoji: "🍭", bucketId: "spitze" },
        { id: "chips", label: "Chips", emoji: "🍟", bucketId: "spitze" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "k3-town-route",
      title: "Signal Runner: Stadt & Umwelt",
      instruction: "Handle überlegt in jeder Szene.",
      scenes: [
        {
          id: "river",
          title: "Am Bach",
          prompt: "Jemand will Müll in den Bach werfen. Was ist richtig?",
          sceneType: "nature",
          visual: { icon: "🌊", bg: "#0c4a6e", accent: "#38bdf8" },
          choices: [
            { id: "stop", label: "Ich sage Stopp und suche einen Mülleimer." },
            { id: "ignore", label: "Ich schaue weg." },
          ],
          correctChoiceId: "stop",
          successFeedback: "Gut. Gewässer müssen sauber bleiben.",
          failFeedback: "Nicht gut. Man sollte helfen, die Natur zu schützen.",
        },
        {
          id: "bus",
          title: "Im Bus",
          prompt: "Eine ältere Person steigt ein und es ist kein Platz frei.",
          sceneType: "community",
          visual: { icon: "🚌", bg: "#3f3f46", accent: "#f59e0b" },
          choices: [
            { id: "offer", label: "Ich biete meinen Platz an." },
            { id: "sleep", label: "Ich tue so, als merke ich nichts." },
          ],
          correctChoiceId: "offer",
          successFeedback: "Stark. Rücksicht gehört zum Zusammenleben.",
          failFeedback: "Besser wäre es, hilfsbereit zu sein.",
        },
      ],
    },
    {
      id: "k3-bike-check",
      title: "Fahrrad-Sicherheit",
      instruction: "Dein Fahrrad muss verkehrssicher sein.",
      scenes: [
        {
          id: "licht",
          title: "Fahrt im Dunkeln",
          prompt: "Dein Licht ist kaputt, aber es wird dunkel.",
          sceneType: "traffic",
          visual: { icon: "🚲", bg: "#0f172a", accent: "#facc15" },
          choices: [
            { id: "schieben", label: "Ich steige ab und schiebe." },
            { id: "fahren", label: "Ich fahre schnell weiter." },
          ],
          correctChoiceId: "schieben",
          successFeedback: "Sehr gut! Ohne Licht wirst du nicht gesehen.",
          failFeedback: "Lebensgefährlich! Ohne Licht musst du schieben.",
        },
        {
          id: "bremse",
          title: "Der Bremsentest",
          prompt: "Eine Bremse funktioniert nicht richtig.",
          sceneType: "safety",
          visual: { icon: "🛑", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "reparieren", label: "Ich lasse sie reparieren, bevor ich fahre." },
            { id: "eine", label: "Eine Bremse reicht schon aus." },
          ],
          correctChoiceId: "reparieren",
          successFeedback: "Perfekt. Zwei funktionierende Bremsen sind Pflicht.",
          failFeedback: "Falsch. Du brauchst zwingend zwei gute Bremsen.",
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "k3-pollination",
      title: "Bestäubungs-Kette",
      instruction: "Baue die Reihenfolge der Bestäubung.",
      hint: "Die Biene besucht zuerst die Blüte.",
      theme: { bg: "#3b0764", accent: "#f472b6", card: "rgba(244,114,182,0.1)" },
      parts: [
        { id: "bluete", label: "Blüte", emoji: "🌼" },
        { id: "biene", label: "Biene", emoji: "🐝" },
        { id: "frucht", label: "Frucht", emoji: "🍓" },
      ],
      slots: [
        { id: "slot1", label: "Start" },
        { id: "slot2", label: "Mitte" },
        { id: "slot3", label: "Ergebnis" },
      ],
      solution: ["bluete", "biene", "frucht"],
    },
    {
      id: "k3-photosynthese",
      title: "Energie-Formel (Photosynthese)",
      instruction: "Was braucht die Pflanze und was macht sie daraus?",
      hint: "Erst Energie sammeln, dann Luft zum Atmen machen.",
      theme: { bg: "#064e3b", accent: "#34d399", card: "rgba(52,211,153,0.1)" },
      parts: [
        { id: "sonne", label: "Licht & Wasser", emoji: "☀️💧" },
        { id: "blatt", label: "Grünes Blatt", emoji: "🍃" },
        { id: "sauerstoff", label: "Sauerstoff & Zucker", emoji: "💨🍬" },
      ],
      slots: [
        { id: "slot1", label: "Zutaten" },
        { id: "slot2", label: "Die Fabrik" },
        { id: "slot3", label: "Das Produkt" },
      ],
      solution: ["sonne", "blatt", "sauerstoff"],
    },
    {
      id: "k3-kompass",
      title: "Himmelsrichtungen",
      instruction: "Nie Ohne Seife Waschen. Ordne sie im Uhrzeigersinn ab oben.",
      hint: "Norden ist oben.",
      theme: { bg: "#1e1b4b", accent: "#fbbf24", card: "rgba(251,191,36,0.1)" },
      parts: [
        { id: "nord", label: "Norden", emoji: "⬆️" },
        { id: "ost", label: "Osten", emoji: "➡️" },
        { id: "sued", label: "Süden", emoji: "⬇️" },
      ],
      slots: [
        { id: "slot1", label: "Oben (12 Uhr)" },
        { id: "slot2", label: "Rechts (3 Uhr)" },
        { id: "slot3", label: "Unten (6 Uhr)" },
      ],
      solution: ["nord", "ost", "sued"],
    }
  ],
  memoryRadar: [
    {
      id: "k3-map-radar",
      title: "Radar: Kartenzeichen",
      instruction: "Merke dir nur typische Kartenzeichen.",
      flashDurationMs: 2200,
      selectionLimit: 4,
      theme: { bg: "#0f172a", accent: "#22c55e", radar: "#16a34a" },
      targetItems: [
        { id: "fluss", label: "Fluss", emoji: "〰️" },
        { id: "berg", label: "Berg", emoji: "⛰️" },
        { id: "stadt", label: "Stadt", emoji: "🏙️" },
        { id: "wald", label: "Wald", emoji: "🌲" },
      ],
      decoyItems: [
        { id: "gabel", label: "Gabel", emoji: "🍴" },
        { id: "socke", label: "Socke", emoji: "🧦" },
        { id: "drache", label: "Drache", emoji: "🐉" },
        { id: "kuchen", label: "Kuchen", emoji: "🍰" },
      ],
    },
    {
      id: "k3-maschinen-radar",
      title: "Mechanik-Scanner",
      instruction: "Merke dir die einfachen Maschinen.",
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#1e293b", accent: "#8b5cf6", radar: "#a855f7" },
      targetItems: [
        { id: "rad", label: "Das Rad", emoji: "⚙️" },
        { id: "hebel", label: "Der Hebel", emoji: "🕹️" },
        { id: "flaschenzug", label: "Flaschenzug", emoji: "⛓️" },
      ],
      decoyItems: [
        { id: "computer", label: "Computer", emoji: "💻" },
        { id: "handy", label: "Handy", emoji: "📱" },
        { id: "uhr", label: "Digitaluhr", emoji: "⌚" },
      ],
    }
  ],
};