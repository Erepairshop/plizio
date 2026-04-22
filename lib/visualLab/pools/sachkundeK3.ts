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
    },
    {
      id: "k3-map-signs-catch",
      title: "Kartenzeichen-Sammler",
      prompt: "Fange nur echte Landkartenzeichen.",
      goal: 6,
      speed: 6,
      theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "burg", label: "Burgruine", emoji: "🏰" },
        { id: "aussicht", label: "Aussichtsturm", emoji: "🗼" },
        { id: "zelt", label: "Zeltplatz", emoji: "⛺" },
      ],
      wrongItems: [
        { id: "fernseher", label: "Fernseher", emoji: "📺" },
        { id: "bett", label: "Bett", emoji: "🛏️" },
        { id: "controller", label: "Gamepad", emoji: "🎮" },
      ],
    },
    {
      id: "k3-healthy-food",
      title: "Gesunde Ernte",
      prompt: "Fange Obst und Gemüse für die Basis der Pyramide.",
      goal: 8,
      speed: 6,
      theme: { sky: "#14532d", glow: "#22c55e", accent: "#4ade80" },
      correctItems: [
        { id: "apfel", label: "Apfel", emoji: "🍎" },
        { id: "banane", label: "Banane", emoji: "🍌" },
        { id: "karotte", label: "Karotte", emoji: "🥕" },
        { id: "brokkoli", label: "Brokkoli", emoji: "🥦" },
      ],
      wrongItems: [
        { id: "cola", label: "Limonade", emoji: "🥤" },
        { id: "keks", label: "Keks", emoji: "🍪" },
        { id: "burger", label: "Burger", emoji: "🍔" },
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
    },
    {
      id: "k3-forest-sort",
      title: "Wald-Bewohner",
      instruction: "Ist es ein Tier oder eine Pflanze?",
      theme: { bg: "#064e3b", orbit: "#10b981", accent: "#34d399" },
      buckets: [
        { id: "tier", label: "Tiere", color: "#f59e0b" },
        { id: "pflanze", label: "Pflanzen", color: "#22c55e" },
      ],
      items: [
        { id: "reh", label: "Reh", emoji: "🦌", bucketId: "tier" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊", bucketId: "tier" },
        { id: "eiche", label: "Eiche", emoji: "🌳", bucketId: "pflanze" },
        { id: "farn", label: "Farn", emoji: "🌿", bucketId: "pflanze" },
        { id: "pilz", label: "Pilz", emoji: "🍄", bucketId: "pflanze" },
      ],
    },
    {
      id: "k3-energy-sort",
      title: "Energie-Sortierer",
      instruction: "Erneuerbar (gut fürs Klima) oder fossil?",
      theme: { bg: "#1e1b4b", orbit: "#0ea5e9", accent: "#38bdf8" },
      buckets: [
        { id: "erneuerbar", label: "Erneuerbar", color: "#22c55e" },
        { id: "fossil", label: "Fossil", color: "#ef4444" },
      ],
      items: [
        { id: "sonne", label: "Sonne", emoji: "☀️", bucketId: "erneuerbar" },
        { id: "wind", label: "Wind", emoji: "🌬️", bucketId: "erneuerbar" },
        { id: "kohle", label: "Kohle", emoji: "🪨", bucketId: "fossil" },
        { id: "erdgas", label: "Erdgas", emoji: "🔥", bucketId: "fossil" },
        { id: "erdoel", label: "Erdöl", emoji: "🛢️", bucketId: "fossil" },
      ],
    },
    {
      id: "k3-insect-sort",
      title: "Insekten-Flug",
      instruction: "Fliegt das Insekt oder krabbelt es am Boden?",
      theme: { bg: "#4a044e", orbit: "#d946ef", accent: "#e879f9" },
      buckets: [
        { id: "fliegt", label: "Fliegt", color: "#38bdf8" },
        { id: "krabbelt", label: "Krabbelt", color: "#a3e635" },
      ],
      items: [
        { id: "biene", label: "Biene", emoji: "🐝", bucketId: "fliegt" },
        { id: "schmetterling", label: "Schmetterling", emoji: "🦋", bucketId: "fliegt" },
        { id: "ameise", label: "Ameise", emoji: "🐜", bucketId: "krabbelt" },
        { id: "laufkaefer", label: "Laufkäfer", emoji: "🪲", bucketId: "krabbelt" },
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
    },
    {
      id: "k3-forest-rules",
      title: "Wald-Regeln",
      instruction: "Wie verhältst du dich richtig im Wald?",
      scenes: [
        {
          id: "laut",
          title: "Der laute Ruf",
          prompt: "Deine Freunde wollen im Wald laut rufen und spielen.",
          sceneType: "nature",
          visual: { icon: "🌲", bg: "#14532d", accent: "#22c55e" },
          choices: [
            { id: "leise", label: "Ich sage ihnen, dass wir leise sein müssen." },
            { id: "schreien", label: "Ich schreie laut mit." },
          ],
          correctChoiceId: "leise",
          successFeedback: "Richtig! Tiere brauchen Ruhe.",
          failFeedback: "Falsch! Lautstärke erschreckt die Tiere.",
        },
        {
          id: "muell",
          title: "Die leere Dose",
          prompt: "Deine Saftdose ist leer. Nirgends ist ein Mülleimer.",
          sceneType: "nature",
          visual: { icon: "🧃", bg: "#064e3b", accent: "#10b981" },
          choices: [
            { id: "mitnehmen", label: "Ich stecke sie in den Rucksack und nehme sie mit." },
            { id: "gebuesch", label: "Ich werfe sie ins Gebüsch." },
          ],
          correctChoiceId: "mitnehmen",
          successFeedback: "Sehr gut! Müll gehört nicht in den Wald.",
          failFeedback: "Nein! Müll ist gefährlich für den Wald.",
        }
      ]
    },
    {
      id: "k3-save-energy",
      title: "Energie-Detektiv",
      instruction: "Wo kannst du zu Hause Energie sparen?",
      scenes: [
        {
          id: "licht-aus",
          title: "Das leere Zimmer",
          prompt: "Du verlässt dein Zimmer. Das Licht brennt noch.",
          sceneType: "safety",
          visual: { icon: "💡", bg: "#422006", accent: "#f59e0b" },
          choices: [
            { id: "ausmachen", label: "Ich mache das Licht aus." },
            { id: "anlassen", label: "Ich lasse es an, falls ich wiederkomme." },
          ],
          correctChoiceId: "ausmachen",
          successFeedback: "Super! Das spart Strom.",
          failFeedback: "Schade! So wird Energie verschwendet.",
        },
        {
          id: "lueften",
          title: "Frische Luft",
          prompt: "Es ist Winter und du möchtest lüften. Die Heizung läuft.",
          sceneType: "safety",
          visual: { icon: "🪟", bg: "#0f172a", accent: "#38bdf8" },
          choices: [
            { id: "stoss", label: "Heizung aus, Fenster kurz ganz auf." },
            { id: "kipp", label: "Fenster stundenlang auf Kipp lassen." },
          ],
          correctChoiceId: "stoss",
          successFeedback: "Genau! Stoßlüften ist am besten.",
          failFeedback: "Falsch. Dabei geht viel Heizenergie verloren.",
        }
      ]
    },
    {
      id: "k3-healthy-lunch",
      title: "Gesunde Pause",
      instruction: "Was ist ein gutes Pausenbrot?",
      scenes: [
        {
          id: "trinken",
          title: "Der große Durst",
          prompt: "Du packst deine Trinkflasche für die Schule.",
          sceneType: "community",
          visual: { icon: "💧", bg: "#082f49", accent: "#0ea5e9" },
          choices: [
            { id: "wasser", label: "Ich fülle Wasser oder ungesüßten Tee ein." },
            { id: "cola", label: "Ich nehme eine zuckrige Limonade mit." },
          ],
          correctChoiceId: "wasser",
          successFeedback: "Richtig! Das ist der beste Durstlöscher.",
          failFeedback: "Falsch! Zu viel Zucker macht müde.",
        },
        {
          id: "essen",
          title: "Die Brotdose",
          prompt: "Was kommt in die Brotdose?",
          sceneType: "community",
          visual: { icon: "🥪", bg: "#3f2c00", accent: "#eab308" },
          choices: [
            { id: "vollkorn", label: "Vollkornbrot, Apfel und Karotten." },
            { id: "schoko", label: "Nur Schokoriegel und Gummibärchen." },
          ],
          correctChoiceId: "vollkorn",
          successFeedback: "Top! Das gibt Energie für den ganzen Tag.",
          failFeedback: "Nicht gut! Das reicht nicht für die Schule.",
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
    },
    {
      id: "k3-nahrungskette-wald",
      title: "Nahrungskette im Wald",
      instruction: "Wer frisst wen? Baue die Nahrungskette auf.",
      hint: "Es beginnt mit einer Pflanze.",
      theme: { bg: "#064e3b", accent: "#22c55e", card: "rgba(34,197,94,0.1)" },
      parts: [
        { id: "eichel", label: "Eichel", emoji: "🌰" },
        { id: "maus", label: "Waldmaus", emoji: "🐭" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊" },
      ],
      slots: [
        { id: "slot1", label: "Pflanze" },
        { id: "slot2", label: "Pflanzenfresser" },
        { id: "slot3", label: "Fleischfresser" },
      ],
      solution: ["eichel", "maus", "fuchs"],
    },
    {
      id: "k3-stromkreislauf",
      title: "Einfacher Stromkreis",
      instruction: "Wie fließt der Strom, damit die Lampe leuchtet?",
      hint: "Der Strom kommt aus der Batterie zur Lampe und zurück.",
      theme: { bg: "#451a03", accent: "#f59e0b", card: "rgba(245,158,11,0.1)" },
      parts: [
        { id: "batterie", label: "Batterie", emoji: "🔋" },
        { id: "schalter", label: "Schalter", emoji: "🕹️" },
        { id: "lampe", label: "Glühlampe", emoji: "💡" },
      ],
      slots: [
        { id: "slot1", label: "Stromquelle" },
        { id: "slot2", label: "Verbindung" },
        { id: "slot3", label: "Verbraucher" },
      ],
      solution: ["batterie", "schalter", "lampe"],
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
    },
    {
      id: "k3-wald-radar",
      title: "Wald-Scanner",
      instruction: "Merke dir typische Waldbewohner.",
      flashDurationMs: 2300,
      selectionLimit: 4,
      theme: { bg: "#064e3b", accent: "#10b981", radar: "#34d399" },
      targetItems: [
        { id: "specht", label: "Specht", emoji: "🐦" },
        { id: "eichhoernchen", label: "Eichhörnchen", emoji: "🐿️" },
        { id: "reh", label: "Reh", emoji: "🦌" },
        { id: "eule", label: "Eule", emoji: "🦉" },
      ],
      decoyItems: [
        { id: "pinguin", label: "Pinguin", emoji: "🐧" },
        { id: "loewe", label: "Löwe", emoji: "🦁" },
        { id: "hai", label: "Hai", emoji: "🦈" },
        { id: "krokodil", label: "Krokodil", emoji: "🐊" },
      ],
    },
    {
      id: "k3-insekten-radar",
      title: "Insekten-Detektor",
      instruction: "Merke dir nur die echten Insekten.",
      flashDurationMs: 2200,
      selectionLimit: 3,
      theme: { bg: "#4a044e", accent: "#d946ef", radar: "#e879f9" },
      targetItems: [
        { id: "marienkaefer", label: "Marienkäfer", emoji: "🐞" },
        { id: "biene", label: "Biene", emoji: "🐝" },
        { id: "ameise", label: "Ameise", emoji: "🐜" },
      ],
      decoyItems: [
        { id: "spinne", label: "Spinne", emoji: "🕷️" },
        { id: "schnecke", label: "Schnecke", emoji: "🐌" },
        { id: "wurm", label: "Regenwurm", emoji: "🪱" },
      ],
    },
    {
      id: "k3-ernaehrung-radar",
      title: "Gesunde-Basis-Radar",
      instruction: "Merke dir die gesunden Lebensmittel (Basis).",
      flashDurationMs: 2400,
      selectionLimit: 4,
      theme: { bg: "#14532d", accent: "#84cc16", radar: "#a3e635" },
      targetItems: [
        { id: "wasser", label: "Wasser", emoji: "💧" },
        { id: "apfel", label: "Apfel", emoji: "🍎" },
        { id: "brot", label: "Brot", emoji: "🍞" },
        { id: "karotte", label: "Karotte", emoji: "🥕" },
      ],
      decoyItems: [
        { id: "schoko", label: "Schokolade", emoji: "🍫" },
        { id: "lutscher", label: "Lutscher", emoji: "🍭" },
        { id: "chips", label: "Chips", emoji: "🍟" },
        { id: "cola", label: "Cola", emoji: "🥤" },
      ],
    }
  ],
  sequenceSort: [
    {
      id: "k3-seq-forest",
      title: "Baumwachstum",
      instruction: "Ordne die Schritte vom Samen zum Baum.",
      sequence: [
        { id: "samen", label: "Samen im Boden", emoji: "🌰" },
        { id: "keimling", label: "Kleiner Keimling", emoji: "🌱" },
        { id: "baum", label: "Großer Baum", emoji: "🌳" }
      ],
      theme: { bg: "#064e3b", accent: "#34d399" }
    },
    {
      id: "k3-seq-energy",
      title: "Weg des Stroms",
      instruction: "Wie kommt der Strom zur Lampe?",
      sequence: [
        { id: "kraftwerk", label: "Kraftwerk", emoji: "🏭" },
        { id: "leitung", label: "Stromleitung", emoji: "⚡" },
        { id: "steckdose", label: "Steckdose", emoji: "🔌" },
        { id: "lampe", label: "Lampe leuchtet", emoji: "💡" }
      ],
      theme: { bg: "#1e1b4b", accent: "#fbbf24" }
    },
    {
      id: "k3-seq-insects",
      title: "Entwicklung des Schmetterlings",
      instruction: "Ordne die Entwicklung richtig.",
      sequence: [
        { id: "ei", label: "Ei", emoji: "🥚" },
        { id: "raupe", label: "Raupe", emoji: "🐛" },
        { id: "puppe", label: "Puppe (Kokon)", emoji: "🪹" },
        { id: "schmetterling", label: "Schmetterling", emoji: "🦋" }
      ],
      theme: { bg: "#4a044e", accent: "#e879f9" }
    },
    {
      id: "k3-seq-food",
      title: "Ernährungspyramide bauen",
      instruction: "Von der größten Menge (unten) zur kleinsten Menge (oben).",
      sequence: [
        { id: "getraenke", label: "Wasser & Tee (Viel)", emoji: "💧" },
        { id: "gemuese", label: "Gemüse & Obst", emoji: "🥗" },
        { id: "brot", label: "Brot & Nudeln", emoji: "🍞" },
        { id: "suessigkeiten", label: "Süßigkeiten (Wenig)", emoji: "🍫" }
      ],
      theme: { bg: "#14532d", accent: "#84cc16" }
    },
    {
      id: "k3-seq-maps",
      title: "Kartenlesen",
      instruction: "Von der Wirklichkeit zur Karte.",
      sequence: [
        { id: "landschaft", label: "Landschaft betrachten", emoji: "🏞️" },
        { id: "flugzeug", label: "Von oben sehen", emoji: "✈️" },
        { id: "zeichnen", label: "Symbole zeichnen", emoji: "✏️" },
        { id: "karte", label: "Fertige Landkarte", emoji: "🗺️" }
      ],
      theme: { bg: "#0f172a", accent: "#38bdf8" }
    }
  ],
  factSwipe: [
    {
      id: "k3-fact-forest",
      title: "Wald-Fakten",
      instruction: "Ist die Aussage wahr oder falsch?",
      cards: [
        { id: "c1", statement: "Bäume produzieren Sauerstoff.", isTrue: true, explanation: "Blätter wandeln Sonnenlicht und CO2 in Sauerstoff um.", emoji: "🌳" },
        { id: "c2", statement: "Rehe schlafen in Nestern auf Bäumen.", isTrue: false, explanation: "Rehe leben auf dem Boden im Wald.", emoji: "🦌" },
        { id: "c3", statement: "Pilze sind keine Pflanzen.", isTrue: true, explanation: "Pilze bilden ein eigenes Reich, sie sind weder Tier noch Pflanze.", emoji: "🍄" }
      ],
      theme: { bg: "#064e3b", accent: "#10b981" }
    },
    {
      id: "k3-fact-energy",
      title: "Energie-Wissen",
      instruction: "Stimmt das?",
      cards: [
        { id: "c1", statement: "Windenergie ist erneuerbar.", isTrue: true, explanation: "Wind ist immer wieder da und verbraucht sich nicht.", emoji: "🌬️" },
        { id: "c2", statement: "Kohle ist gut für das Klima.", isTrue: false, explanation: "Beim Verbrennen von Kohle entsteht schädliches CO2.", emoji: "🪨" },
        { id: "c3", statement: "Sonnenlicht kann Strom erzeugen.", isTrue: true, explanation: "Solaranlagen verwandeln Sonnenlicht in elektrischen Strom.", emoji: "☀️" }
      ],
      theme: { bg: "#1e1b4b", accent: "#38bdf8" }
    },
    {
      id: "k3-fact-insects",
      title: "Insekten-Mythen",
      instruction: "Korrekt oder nicht?",
      cards: [
        { id: "c1", statement: "Spinnen sind Insekten.", isTrue: false, explanation: "Spinnen haben 8 Beine, Insekten haben 6 Beine.", emoji: "🕷️" },
        { id: "c2", statement: "Bienen sind wichtig für Obst.", isTrue: true, explanation: "Sie bestäuben die Blüten, daraus wachsen Früchte.", emoji: "🐝" },
        { id: "c3", statement: "Alle Insekten können stechen.", isTrue: false, explanation: "Die meisten Insekten, wie Schmetterlinge, können nicht stechen.", emoji: "🦋" }
      ],
      theme: { bg: "#4a044e", accent: "#d946ef" }
    },
    {
      id: "k3-fact-food",
      title: "Ernährungs-Lügen",
      instruction: "Wahr oder falsch?",
      cards: [
        { id: "c1", statement: "Wasser ist das beste Getränk.", isTrue: true, explanation: "Der Körper braucht viel ungesüßte Flüssigkeit.", emoji: "💧" },
        { id: "c2", statement: "Man darf nie Süßigkeiten essen.", isTrue: false, explanation: "Ab und zu ist etwas Süßes in Ordnung, nur nicht zu viel.", emoji: "🍫" },
        { id: "c3", statement: "Obst enthält Vitamine.", isTrue: true, explanation: "Vitamine stärken unser Immunsystem und halten uns fit.", emoji: "🍎" }
      ],
      theme: { bg: "#14532d", accent: "#84cc16" }
    },
    {
      id: "k3-fact-maps",
      title: "Karten-Checker",
      instruction: "Stimmt diese Kartenregel?",
      cards: [
        { id: "c1", statement: "Norden ist auf Karten meistens oben.", isTrue: true, explanation: "Karten sind fast immer nach Norden ausgerichtet.", emoji: "⬆️" },
        { id: "c2", statement: "Ein blaues Band auf der Karte ist eine Straße.", isTrue: false, explanation: "Ein blaues Band steht fast immer für einen Fluss.", emoji: "〰️" },
        { id: "c3", statement: "Man nutzt Symbole, weil nicht alles auf die Karte passt.", isTrue: true, explanation: "Kartenzeichen helfen, viel Information auf kleinem Platz zu zeigen.", emoji: "🗺️" }
      ],
      theme: { bg: "#0f172a", accent: "#60a5fa" }
    }
  ]
};