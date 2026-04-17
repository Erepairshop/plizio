import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

export const GESCHICHTE_POOLS: Record<number, GeographieVisualLabGradePool> = {
  // ─────────────────────────────────────────────────────────────────────────
  // GRADE 5 — Antike / Ägypten / Griechenland
  // ─────────────────────────────────────────────────────────────────────────
  5: {
    grade: 5,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "ge-5-mc-1",
        title: "Ägyptische Götter",
        prompt: "Fange nur ägyptische Götter ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#082f49", glow: "#38bdf8", accent: "#0ea5e9" },
        correctItems: [
          { id: "ra", label: "Re", emoji: "☀️" },
          { id: "isis", label: "Isis", emoji: "👑" },
          { id: "osiris", label: "Osiris", emoji: "🌿" },
          { id: "horus", label: "Horus", emoji: "🦅" },
          { id: "anubis", label: "Anubis", emoji: "🐺" },
        ],
        wrongItems: [
          { id: "zeus", label: "Zeus", emoji: "⚡" },
          { id: "odin", label: "Odin", emoji: "⚔️" },
          { id: "jupiter", label: "Jupiter", emoji: "🪐" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "ge-5-os-1",
        title: "Ägypten oder Griechenland?",
        instruction: "Sortiere die Begriffe dem richtigen Kulturkreis zu.",
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "aegypten", label: "Ägypten", color: "#f59e0b" },
          { id: "griechenland", label: "Griechenland", color: "#3b82f6" },
        ],
        items: [
          { id: "pyramide", label: "Pyramide", emoji: "🔺", bucketId: "aegypten" },
          { id: "pharao", label: "Pharao", emoji: "👑", bucketId: "aegypten" },
          { id: "hieroglyphen", label: "Hieroglyphen", emoji: "📜", bucketId: "aegypten" },
          { id: "akropolis", label: "Akropolis", emoji: "🏛️", bucketId: "griechenland" },
          { id: "demokratie", label: "Demokratie", emoji: "🗳️", bucketId: "griechenland" },
          { id: "olympia", label: "Olympia", emoji: "🏅", bucketId: "griechenland" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "ge-5-sr-1",
        title: "Antike Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "ge-5-sr-1-s1",
            title: "Pyramidenbau",
            prompt: "Wer ließ die Große Pyramide von Gizeh bauen?",
            sceneType: "community",
            visual: { icon: "🔺", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Tutanchamun" },
              { id: "b", label: "Cheops" },
              { id: "c", label: "Ramses II" },
              { id: "d", label: "Kleopatra" },
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Cheops ließ die größte Pyramide bauen.",
            failFeedback: "Falsch. Es war Pharao Cheops.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "ge-5-cb-1",
        title: "Griechische Philosophen",
        instruction: "Ordne die Philosophen chronologisch.",
        hint: "Sokrates lebte vor Platon, Platon vor Aristoteles.",
        theme: { bg: "#0f172a", accent: "#38bdf8", card: "#1e3a5f" },
        parts: [
          { id: "sokrates", label: "Sokrates (ca. 470-399 v.Chr.)", emoji: "🤔" },
          { id: "platon", label: "Platon (ca. 428-348 v.Chr.)", emoji: "📚" },
          { id: "aristoteles", label: "Aristoteles (384-322 v.Chr.)", emoji: "🔬" },
        ],
        slots: [
          { id: "slot-1", label: "1. Frühester" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3. Spätester" },
        ],
        solution: ["sokrates", "platon", "aristoteles"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "ge-5-mr-1",
        title: "Antike Wunder merken",
        instruction: "Merke dir die antiken Weltwunder.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "gizeh", label: "Pyramiden von Gizeh", emoji: "🔺" },
          { id: "babylon", label: "Hängende Gärten von Babylon", emoji: "🌳" },
          { id: "ephesos", label: "Artemis-Tempel in Ephesos", emoji: "🏛️" },
          { id: "rhodos", label: "Koloss von Rhodos", emoji: "🗽" },
          { id: "alexandria", label: "Leuchtturm von Alexandria", emoji: "灯" },
        ],
        decoyItems: [
          { id: "eiffelturm", label: "Eiffelturm", emoji: "🗼" },
          { id: "kolosseum", label: "Kolosseum", emoji: "🏟️" },
          { id: "chinesische_mauer", label: "Chinesische Mauer", emoji: "🧱" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADE 6 — Mittelalter / Römer / Ritter
  // ─────────────────────────────────────────────────────────────────────────
  6: {
    grade: 6,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "ge-6-mc-1",
        title: "Römische Kaiser",
        prompt: "Fange nur römische Kaiser ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#a78bfa", accent: "#7c3aed" },
        correctItems: [
          { id: "augustus", label: "Augustus", emoji: "👑" },
          { id: "nero", label: "Nero", emoji: "🔥" },
          { id: "hadrian", label: "Hadrian", emoji: "🏛️" },
          { id: "konstantin", label: "Konstantin der Große", emoji: "✝️" },
          { id: "caesar", label: "Julius Caesar (als Diktator)", emoji: "⚔️" },
        ],
        wrongItems: [
          { id: "alexander", label: "Alexander der Große", emoji: "🐎" },
          { id: "hannibal", label: "Hannibal", emoji: "🐘" },
          { id: "kleopatra", label: "Kleopatra", emoji: "🐍" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "ge-6-os-1",
        title: "Römer oder Mittelalter?",
        instruction: "Sortiere die Begriffe der richtigen Epoche zu.",
        theme: { bg: "#1e1b4b", orbit: "#818cf8", accent: "#6366f1" },
        buckets: [
          { id: "roemer", label: "Römisches Reich", color: "#f59e0b" },
          { id: "mittelalter", label: "Mittelalter", color: "#3b82f6" },
        ],
        items: [
          { id: "legion", label: "Legion", emoji: "🛡️", bucketId: "roemer" },
          { id: "kolosseum", label: "Kolosseum", emoji: "🏟️", bucketId: "roemer" },
          { id: "latein", label: "Latein", emoji: "📜", bucketId: "roemer" },
          { id: "burg", label: "Burg", emoji: "🏰", bucketId: "mittelalter" },
          { id: "ritter", label: "Ritter", emoji: "⚔️", bucketId: "mittelalter" },
          { id: "feudalismus", label: "Feudalismus", emoji: "🧑‍🤝‍🧑", bucketId: "mittelalter" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "ge-6-sr-1",
        title: "Mittelalter Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "ge-6-sr-1-s1",
            title: "Kreuzzüge",
            prompt: "Was war der Hauptgrund für die Kreuzzüge?",
            sceneType: "community",
            visual: { icon: "✝️", bg: "#3b1f0f", accent: "#f97316" },
            choices: [
              { id: "a", label: "Handelswege sichern" },
              { id: "b", label: "Das Heilige Land zurückerobern" },
              { id: "c", label: "Neue Länder entdecken" },
              { id: "d", label: "Wissenschaftliche Erkenntnisse gewinnen" },
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Die Rückeroberung des Heiligen Landes war das Ziel.",
            failFeedback: "Falsch. Es ging um die Rückeroberung des Heiligen Landes.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "ge-6-cb-1",
        title: "Wichtige Ereignisse im Mittelalter",
        instruction: "Ordne die Ereignisse chronologisch.",
        hint: "Die Völkerwanderung war vor der Gründung des Heiligen Römischen Reiches.",
        theme: { bg: "#1c1917", accent: "#fb923c", card: "#292524" },
        parts: [
          { id: "voelkerwanderung", label: "Völkerwanderung (ca. 375-568 n.Chr.)", emoji: "🚶" },
          { id: "karl_der_grosse", label: "Krönung Karls des Großen (800 n.Chr.)", emoji: "👑" },
          { id: "kreuzzuege", label: "Erster Kreuzzug (1096-1099)", emoji: "⚔️" },
          { id: "schwarzer_tod", label: "Schwarzer Tod (ca. 1346-1353)", emoji: "💀" },
        ],
        slots: [
          { id: "slot-1", label: "1. Frühestes" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Spätestes" },
        ],
        solution: ["voelkerwanderung", "karl_der_grosse", "kreuzzuege", "schwarzer_tod"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "ge-6-mr-1",
        title: "Mittelalterliche Berufe merken",
        instruction: "Merke dir die Berufe des Mittelalters.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#1e1b4b", accent: "#818cf8", radar: "#6366f1" },
        targetItems: [
          { id: "schmied", label: "Schmied", emoji: "🔨" },
          { id: "bäcker", label: "Bäcker", emoji: "🍞" },
          { id: "weber", label: "Weber", emoji: "🧵" },
          { id: "mönch", label: "Mönch", emoji: "🙏" },
          { id: "ritter", label: "Ritter", emoji: "⚔️" },
        ],
        decoyItems: [
          { id: "astronaut", label: "Astronaut", emoji: "🚀" },
          { id: "programmierer", label: "Programmierer", emoji: "💻" },
          { id: "arzt", label: "Arzt", emoji: "🩺" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADE 7 — Renaissance / Reformation / Entdeckungen
  // ─────────────────────────────────────────────────────────────────────────
  7: {
    grade: 7,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "ge-7-mc-1",
        title: "Renaissance-Künstler",
        prompt: "Fange nur Künstler der Renaissance ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#34d399", accent: "#10b981" },
        correctItems: [
          { id: "da_vinci", label: "Leonardo da Vinci", emoji: "🎨" },
          { id: "michelangelo", label: "Michelangelo", emoji: "彫" },
          { id: "raphael", label: "Raffael", emoji: "🖼️" },
          { id: "durer", label: "Albrecht Dürer", emoji: "✍️" },
          { id: "botticelli", label: "Sandro Botticelli", emoji: "🌸" },
        ],
        wrongItems: [
          { id: "picasso", label: "Pablo Picasso", emoji: " абстракт" },
          { id: "van_gogh", label: "Vincent van Gogh", emoji: "🌻" },
          { id: "monet", label: "Claude Monet", emoji: "💧" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "ge-7-os-1",
        title: "Reformation oder Entdeckungen?",
        instruction: "Sortiere die Begriffe der richtigen Epoche zu.",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "reformation", label: "Reformation", color: "#ef4444" },
          { id: "entdeckungen", label: "Zeitalter der Entdeckungen", color: "#3b82f6" },
        ],
        items: [
          { id: "luther", label: "Martin Luther", emoji: "✝️", bucketId: "reformation" },
          { id: "thesenanschlag", label: "Thesenanschlag", emoji: "📜", bucketId: "reformation" },
          { id: "protestantismus", label: "Protestantismus", emoji: "⛪", bucketId: "reformation" },
          { id: "kolumbus", label: "Christoph Kolumbus", emoji: "⛵", bucketId: "entdeckungen" },
          { id: "amerika", label: "Entdeckung Amerikas", emoji: "🌎", bucketId: "entdeckungen" },
          { id: "magellan", label: "Ferdinand Magellan", emoji: "🗺️", bucketId: "entdeckungen" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "ge-7-sr-1",
        title: "Entdeckungen Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "ge-7-sr-1-s1",
            title: "Amerika",
            prompt: "Wann entdeckte Christoph Kolumbus Amerika?",
            sceneType: "nature",
            visual: { icon: "⛵", bg: "#0a1a0a", accent: "#22c55e" },
            choices: [
              { id: "a", label: "1453" },
              { id: "b", label: "1492" },
              { id: "c", label: "1517" },
              { id: "d", label: "1588" },
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Kolumbus erreichte Amerika 1492.",
            failFeedback: "Falsch. Amerika wurde 1492 entdeckt.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "ge-7-cb-1",
        title: "Wichtige Erfindungen der Renaissance",
        instruction: "Ordne die Erfindungen chronologisch.",
        hint: "Der Buchdruck war vor dem Fernrohr.",
        theme: { bg: "#0f172a", accent: "#34d399", card: "#0d3321" },
        parts: [
          { id: "buchdruck", label: "Buchdruck (ca. 1450)", emoji: "🖨️" },
          { id: "kompass", label: "Verbesserter Kompass (15. Jh.)", emoji: "🧭" },
          { id: "fernrohr", label: "Fernrohr (ca. 1608)", emoji: "🔭" },
        ],
        slots: [
          { id: "slot-1", label: "1. Früheste" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3. Späteste" },
        ],
        solution: ["buchdruck", "kompass", "fernrohr"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "ge-7-mr-1",
        title: "Entdecker merken",
        instruction: "Merke dir die berühmten Entdecker.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "kolumbus_m", label: "Christoph Kolumbus", emoji: "⛵" },
          { id: "magellan_m", label: "Ferdinand Magellan", emoji: "🗺️" },
          { id: "vasco_da_gama", label: "Vasco da Gama", emoji: "⚓" },
          { id: "cortes", label: "Hernán Cortés", emoji: "⚔️" },
          { id: "pizarro", label: "Francisco Pizarro", emoji: "💰" },
        ],
        decoyItems: [
          { id: "marco_polo", label: "Marco Polo", emoji: "🐪" },
          { id: "james_cook", label: "James Cook", emoji: "🧭" },
          { id: "leif_erikson", label: "Leif Erikson", emoji: "🛶" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRADE 8 — Industrialisierung / Weltkriege / Moderne
  // ─────────────────────────────────────────────────────────────────────────
  8: {
    grade: 8,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "ge-8-mc-1",
        title: "Erfindungen der Industrialisierung",
        prompt: "Fange nur Erfindungen der Industrialisierung ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "dampfmaschine", label: "Dampfmaschine", emoji: "🚂" },
          { id: "webstuhl", label: "Mechanischer Webstuhl", emoji: "🧵" },
          { id: "eisenbahn", label: "Eisenbahn", emoji: "🚆" },
          { id: "telegraf", label: "Telegraf", emoji: " telegraph" },
          { id: "glühbirne", label: "Glühbirne", emoji: "💡" },
        ],
        wrongItems: [
          { id: "smartphone", label: "Smartphone", emoji: "📱" },
          { id: "internet", label: "Internet", emoji: "🌐" },
          { id: "atomkraftwerk", label: "Atomkraftwerk", emoji: "☢️" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "ge-8-os-1",
        title: "Erster oder Zweiter Weltkrieg?",
        instruction: "Sortiere die Ereignisse dem richtigen Weltkrieg zu.",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#d97706" },
        buckets: [
          { id: "erster_wk", label: "Erster Weltkrieg", color: "#ef4444" },
          { id: "zweiter_wk", label: "Zweiter Weltkrieg", color: "#3b82f6" },
        ],
        items: [
          { id: "sarajevo", label: "Attentat von Sarajevo", emoji: "🔫", bucketId: "erster_wk" },
          { id: "versailles", label: "Versailler Vertrag", emoji: "📜", bucketId: "erster_wk" },
          { id: "schlieffenplan", label: "Schlieffen-Plan", emoji: "🗺️", bucketId: "erster_wk" },
          { id: "pearl_harbor", label: "Pearl Harbor", emoji: "💣", bucketId: "zweiter_wk" },
          { id: "holocaust", label: "Holocaust", emoji: "🕯️", bucketId: "zweiter_wk" },
          { id: "hiroshima", label: "Hiroshima", emoji: "☢️", bucketId: "zweiter_wk" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "ge-8-sr-1",
        title: "Weltkriege Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "ge-8-sr-1-s1",
            title: "Erster Weltkrieg Beginn",
            prompt: "Wann begann der Erste Weltkrieg?",
            sceneType: "safety",
            visual: { icon: "⚔️", bg: "#001a30", accent: "#38bdf8" },
            choices: [
              { id: "a", label: "1905" },
              { id: "b", label: "1914" },
              { id: "c", label: "1918" },
              { id: "d", label: "1939" },
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Der Erste Weltkrieg begann 1914.",
            failFeedback: "Falsch. Der Erste Weltkrieg begann 1914.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "ge-8-cb-1",
        title: "Wichtige Ereignisse des 20. Jahrhunderts",
        instruction: "Ordne die Ereignisse chronologisch.",
        hint: "Der Erste Weltkrieg war vor dem Zweiten Weltkrieg.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1f1a00" },
        parts: [
          { id: "erster_wk_cb", label: "Erster Weltkrieg (1914-1918)", emoji: "⚔️" },
          { id: "weltwirtschaftskrise", label: "Weltwirtschaftskrise (1929)", emoji: "📉" },
          { id: "zweiter_wk_cb", label: "Zweiter Weltkrieg (1939-1945)", emoji: "💣" },
          { id: "mauerfall", label: "Mauerfall (1989)", emoji: "🧱" },
        ],
        slots: [
          { id: "slot-1", label: "1. Frühestes" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Spätestes" },
        ],
        solution: ["erster_wk_cb", "weltwirtschaftskrise", "zweiter_wk_cb", "mauerfall"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "ge-8-mr-1",
        title: "Wichtige Persönlichkeiten der Moderne",
        instruction: "Merke dir die Persönlichkeiten.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#92400e" },
        targetItems: [
          { id: "churchill", label: "Winston Churchill", emoji: "🇬🇧" },
          { id: "roosevelt", label: "Franklin D. Roosevelt", emoji: "🇺🇸" },
          { id: "hitler", label: "Adolf Hitler", emoji: "🚫" },
          { id: "stalin", label: "Josef Stalin", emoji: "☭" },
          { id: "gandhi", label: "Mahatma Gandhi", emoji: "🕊️" },
        ],
        decoyItems: [
          { id: "napoleon", label: "Napoleon Bonaparte", emoji: "🇫🇷" },
          { id: "queen_victoria", label: "Königin Victoria", emoji: "👑" },
          { id: "otto_von_bismarck", label: "Otto von Bismarck", emoji: "🇩🇪" },
        ],
      },
    ],
  },
};
