import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

export const BIOLOGIE_POOLS: Record<number, GeographieVisualLabGradePool> = {
  // ─────────────────────────────────────────────────────────────────────────
  // K5=Zelle/Pflanzen/Tiere
  // ─────────────────────────────────────────────────────────────────────────
  5: {
    grade: 5,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "bio-5-mc-1",
        title: "Zellorganellen",
        prompt: "Fange nur Zellorganellen ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#082f49", glow: "#38bdf8", accent: "#0ea5e9" },
        correctItems: [
          { id: "zellkern", label: "Zellkern", emoji: "⚛️" },
          { id: "mitochondrien", label: "Mitochondrien", emoji: "🔋" },
          { id: "chloroplasten", label: "Chloroplasten", emoji: "🌿" },
          { id: "vakuole", label: "Vakuole", emoji: "💧" },
          { id: "zellwand", label: "Zellwand", emoji: "🧱" },
        ],
        wrongItems: [
          { id: "blatt", label: "Blatt", emoji: "🍃" },
          { id: "wurzel", label: "Wurzel", emoji: "🌱" },
          { id: "blüte", label: "Blüte", emoji: "🌸" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "bio-5-os-1",
        title: "Pflanze oder Tier?",
        instruction: "Sortiere die Begriffe dem richtigen Reich zu.",
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "pflanze", label: "Pflanze", color: "#22c55e" },
          { id: "tier", label: "Tier", color: "#f97316" },
        ],
        items: [
          { id: "fotosynthese", label: "Fotosynthese", emoji: "☀️", bucketId: "pflanze" },
          { id: "zellulose", label: "Zellulose", emoji: "🌳", bucketId: "pflanze" },
          { id: "chlorophyll", label: "Chlorophyll", emoji: "🟢", bucketId: "pflanze" },
          { id: "bewegung", label: "Bewegung", emoji: "🏃", bucketId: "tier" },
          { id: "nervensystem", label: "Nervensystem", emoji: "🧠", bucketId: "tier" },
          { id: "muskeln", label: "Muskeln", emoji: "💪", bucketId: "tier" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "bio-5-sr-1",
        title: "Zellen Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "bio-5-sr-1-s1",
            title: "Zellkraftwerk",
            prompt: "Welches Zellorganell ist das 'Kraftwerk' der Zelle?",
            sceneType: "community",
            visual: { icon: "🔋", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Zellkern" },
              { id: "b", label: "Mitochondrium" },
              { id: "c", label: "Vakuole" },
              { id: "d", label: "Zellwand" },
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Mitochondrien produzieren Energie.",
            failFeedback: "Falsch. Es sind die Mitochondrien.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "bio-5-cb-1",
        title: "Zellorganellen nach Größe",
        instruction: "Ordne die Zellorganellen von klein nach groß.",
        hint: "Ribosomen sind sehr klein, der Zellkern ist groß.",
        theme: { bg: "#0f172a", accent: "#38bdf8", card: "#1e3a5f" },
        parts: [
          { id: "ribosom", label: "Ribosom", emoji: "🔬" },
          { id: "mitochondrium", label: "Mitochondrium", emoji: "🔋" },
          { id: "zellkern", label: "Zellkern", emoji: "⚛️" },
        ],
        slots: [
          { id: "slot-1", label: "1. Kleinstes" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3. Größtes" },
        ],
        solution: ["ribosom", "mitochondrium", "zellkern"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "bio-5-mr-1",
        title: "Tierklassen merken",
        instruction: "Merke dir die Tierklassen.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "säugetiere", label: "Säugetiere", emoji: "🐄" },
          { id: "vögel", label: "Vögel", emoji: "🐦" },
          { id: "fische", label: "Fische", emoji: "🐟" },
          { id: "reptilien", label: "Reptilien", emoji: "🐍" },
          { id: "amphibien", label: "Amphibien", emoji: "🐸" },
        ],
        decoyItems: [
          { id: "insekten", label: "Insekten", emoji: "🐞" },
          { id: "spinnen", label: "Spinnen", emoji: "🕷️" },
          { id: "würmer", label: "Würmer", emoji: "🐛" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // K6=Ökosystem/Fotosynthese/Körper
  // ─────────────────────────────────────────────────────────────────────────
  6: {
    grade: 6,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "bio-6-mc-1",
        title: "Teile eines Ökosystems",
        prompt: "Fange nur Teile eines Ökosystems ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#a78bfa", accent: "#7c3aed" },
        correctItems: [
          { id: "produzent", label: "Produzent", emoji: "🌱" },
          { id: "konsument", label: "Konsument", emoji: "🐇" },
          { id: "destruent", label: "Destruent", emoji: "🍄" },
          { id: "biotop", label: "Biotop", emoji: "🏞️" },
          { id: "biozönose", label: "Biozönose", emoji: "🤝" },
        ],
        wrongItems: [
          { id: "stadt", label: "Stadt", emoji: "🏙️" },
          { id: "auto", label: "Auto", emoji: "🚗" },
          { id: "computer", label: "Computer", emoji: "💻" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "bio-6-os-1",
        title: "Fotosynthese oder Zellatmung?",
        instruction: "Sortiere die Begriffe dem richtigen Prozess zu.",
        theme: { bg: "#1e1b4b", orbit: "#818cf8", accent: "#6366f1" },
        buckets: [
          { id: "fotosynthese", label: "Fotosynthese", color: "#22c55e" },
          { id: "zellatmung", label: "Zellatmung", color: "#f97316" },
        ],
        items: [
          { id: "sauerstoffproduktion", label: "Sauerstoffproduktion", emoji: "🌬️", bucketId: "fotosynthese" },
          { id: "glukoseproduktion", label: "Glukoseproduktion", emoji: "🍬", bucketId: "fotosynthese" },
          { id: "co2aufnahme", label: "CO2-Aufnahme", emoji: "💨", bucketId: "fotosynthese" },
          { id: "energieabgabe", label: "Energieabgabe", emoji: "⚡", bucketId: "zellatmung" },
          { id: "mitochondrien", label: "Mitochondrien", emoji: "🔋", bucketId: "zellatmung" },
          { id: "chloroplasten", label: "Chloroplasten", emoji: "🌿", bucketId: "fotosynthese" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "bio-6-sr-1",
        title: "Menschlicher Körper Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "bio-6-sr-1-s1",
            title: "Blutpumpe",
            prompt: "Welches Organ pumpt Blut durch den Körper?",
            sceneType: "community",
            visual: { icon: "❤️", bg: "#3b1f0f", accent: "#f97316" },
            choices: [
              { id: "a", label: "Lunge" },
              { id: "b", label: "Leber" },
              { id: "c", label: "Herz" },
              { id: "d", label: "Niere" },
            ],
            correctChoiceId: "c",
            successFeedback: "Richtig! Das Herz ist die Blutpumpe.",
            failFeedback: "Falsch. Es ist das Herz.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "bio-6-cb-1",
        title: "Verdauungsorgane",
        instruction: "Ordne die Verdauungsorgane in der richtigen Reihenfolge.",
        hint: "Die Nahrung beginnt im Mund.",
        theme: { bg: "#1c1917", accent: "#fb923c", card: "#292524" },
        parts: [
          { id: "mund", label: "Mund", emoji: "👄" },
          { id: "speiseröhre", label: "Speiseröhre", emoji: " трубопровод" },
          { id: "magen", label: "Magen", emoji: " желудок" },
          { id: "dünndarm", label: "Dünndarm", emoji: " кишечник" },
          { id: "dickdarm", label: "Dickdarm", emoji: " кишечник" },
        ],
        slots: [
          { id: "slot-1", label: "1. Start" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4." },
          { id: "slot-5", label: "5. Ende" },
        ],
        solution: ["mund", "speiseröhre", "magen", "dünndarm", "dickdarm"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "bio-6-mr-1",
        title: "Menschliche Organsysteme merken",
        instruction: "Merke dir die menschlichen Organsysteme.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#1e1b4b", accent: "#818cf8", radar: "#6366f1" },
        targetItems: [
          { id: "atmungssystem", label: "Atmungssystem", emoji: "🌬️" },
          { id: "kreislaufsystem", label: "Kreislaufsystem", emoji: "❤️" },
          { id: "nervensystem", label: "Nervensystem", emoji: "🧠" },
          { id: "verdauungssystem", label: "Verdauungssystem", emoji: "🍔" },
          { id: "skelettsystem", label: "Skelettsystem", emoji: "🦴" },
        ],
        decoyItems: [
          { id: "muskelsystem", label: "Muskelsystem", emoji: "💪" },
          { id: "hormonsystem", label: "Hormonsystem", emoji: "🧪" },
          { id: "lymphsystem", label: "Lymphsystem", emoji: "💧" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // K7=Genetik/Evolution/Sinnesorgane
  // ─────────────────────────────────────────────────────────────────────────
  7: {
    grade: 7,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "bio-7-mc-1",
        title: "Begriffe der Genetik",
        prompt: "Fange nur Begriffe der Genetik ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#34d399", accent: "#10b981" },
        correctItems: [
          { id: "dna", label: "DNA", emoji: "🧬" },
          { id: "gen", label: "Gen", emoji: "🔗" },
          { id: "chromosom", label: "Chromosom", emoji: "✖️" },
          { id: "allel", label: "Allel", emoji: "🅰️" },
          { id: "mutation", label: "Mutation", emoji: "💥" },
        ],
        wrongItems: [
          { id: "zelle", label: "Zelle", emoji: "🔬" },
          { id: "organ", label: "Organ", emoji: "🫁" },
          { id: "gewebe", label: "Gewebe", emoji: " tejido" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "bio-7-os-1",
        title: "Evolution oder Genetik?",
        instruction: "Sortiere die Begriffe dem richtigen Fachgebiet zu.",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "evolution", label: "Evolution", color: "#ef4444" },
          { id: "genetik", label: "Genetik", color: "#3b82f6" },
        ],
        items: [
          { id: "natürliche_selektion", label: "Natürliche Selektion", emoji: "🌿", bucketId: "evolution" },
          { id: "vererbung", label: "Vererbung", emoji: "👨‍👩‍👧", bucketId: "genetik" },
          { id: "anpassung", label: "Anpassung", emoji: "🦎", bucketId: "evolution" },
          { id: "dna_replikation", label: "DNA-Replikation", emoji: "🧬", bucketId: "genetik" },
          { id: "artenvielfalt", label: "Artenvielfalt", emoji: "🦋", bucketId: "evolution" },
          { id: "genom", label: "Genom", emoji: "📖", bucketId: "genetik" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "bio-7-sr-1",
        title: "Sinnesorgane Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "bio-7-sr-1-s1",
            title: "Hören",
            prompt: "Welches Sinnesorgan ist für das Hören zuständig?",
            sceneType: "nature",
            visual: { icon: "👂", bg: "#0a1a0a", accent: "#22c55e" },
            choices: [
              { id: "a", label: "Auge" },
              { id: "b", label: "Nase" },
              { id: "c", label: "Ohr" },
              { id: "d", label: "Zunge" },
            ],
            correctChoiceId: "c",
            successFeedback: "Richtig! Das Ohr ist für das Hören zuständig.",
            failFeedback: "Falsch. Es ist das Ohr.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "bio-7-cb-1",
        title: "Evolutionäre Entwicklungsschritte",
        instruction: "Ordne die Entwicklungsschritte chronologisch.",
        hint: "Einzeller waren vor Fischen.",
        theme: { bg: "#0f172a", accent: "#34d399", card: "#0d3321" },
        parts: [
          { id: "einzeller", label: "Einzeller", emoji: "🦠" },
          { id: "fische", label: "Fische", emoji: "🐟" },
          { id: "amphibien", label: "Amphibien", emoji: "🐸" },
          { id: "reptilien", label: "Reptilien", emoji: "🐍" },
          { id: "säugetiere", label: "Säugetiere", emoji: "🐄" },
        ],
        slots: [
          { id: "slot-1", label: "1. Frühester" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4." },
          { id: "slot-5", label: "5. Spätester" },
        ],
        solution: ["einzeller", "fische", "amphibien", "reptilien", "säugetiere"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "bio-7-mr-1",
        title: "Die fünf Sinne merken",
        instruction: "Merke dir die fünf Sinne.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#38bdf8", radar: "#1e40af" },
        targetItems: [
          { id: "sehen", label: "Sehen", emoji: "👁️" },
          { id: "hören", label: "Hören", emoji: "👂" },
          { id: "riechen", label: "Riechen", emoji: "👃" },
          { id: "schmecken", label: "Schmecken", emoji: "👅" },
          { id: "tasten", label: "Tasten", emoji: "🖐️" },
        ],
        decoyItems: [
          { id: "gleichgewicht", label: "Gleichgewicht", emoji: "🤸" },
          { id: "temperatur", label: "Temperatur", emoji: "🌡️" },
          { id: "schmerz", label: "Schmerz", emoji: "🤕" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // K8=Ökologie/Immunsystem/Biotechnologie
  // ─────────────────────────────────────────────────────────────────────────
  8: {
    grade: 8,

    // ── MeteorCatch ──────────────────────────────────────────────────────
    meteorCatch: [
      {
        id: "bio-8-mc-1",
        title: "Ökologische Begriffe",
        prompt: "Fange nur ökologische Begriffe ein.",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#d97706" },
        correctItems: [
          { id: "nische", label: "Nische", emoji: "🎯" },
          { id: "habitat", label: "Habitat", emoji: "🏡" },
          { id: "population", label: "Population", emoji: "👨‍👩‍👧‍👦" },
          { id: "gemeinschaft", label: "Gemeinschaft", emoji: "🤝" },
          { id: "sukzession", label: "Sukzession", emoji: "📈" },
        ],
        wrongItems: [
          { id: "gen", label: "Gen", emoji: "🧬" },
          { id: "zelle", label: "Zelle", emoji: "🔬" },
          { id: "molekül", label: "Molekül", emoji: "⚛️" },
        ],
      },
    ],

    // ── OrbitSort ────────────────────────────────────────────────────────
    orbitSort: [
      {
        id: "bio-8-os-1",
        title: "Immunsystem oder Biotechnologie?",
        instruction: "Sortiere die Begriffe dem richtigen Fachgebiet zu.",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#d97706" },
        buckets: [
          { id: "immunsystem", label: "Immunsystem", color: "#ef4444" },
          { id: "biotechnologie", label: "Biotechnologie", color: "#3b82f6" },
        ],
        items: [
          { id: "antikörper", label: "Antikörper", emoji: "🛡️", bucketId: "immunsystem" },
          { id: "impfung", label: "Impfung", emoji: "💉", bucketId: "immunsystem" },
          { id: "gentechnik", label: "Gentechnik", emoji: "🧬", bucketId: "biotechnologie" },
          { id: "klonen", label: "Klonen", emoji: "🐑", bucketId: "biotechnologie" },
          { id: "bakterien", label: "Bakterien", emoji: "🦠", bucketId: "immunsystem" },
          { id: "viren", label: "Viren", emoji: "👾", bucketId: "immunsystem" },
        ],
      },
    ],

    // ── SignalRunner ─────────────────────────────────────────────────────
    signalRunner: [
      {
        id: "bio-8-sr-1",
        title: "Immunsystem Quiz",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "bio-8-sr-1-s1",
            title: "B-Zellen",
            prompt: "Was produzieren B-Zellen?",
            sceneType: "safety",
            visual: { icon: "🛡️", bg: "#001a30", accent: "#38bdf8" },
            choices: [
              { id: "a", label: "Antikörper" },
              { id: "b", label: "Antigene" },
              { id: "c", label: "Viren" },
              { id: "d", label: "Bakterien" },
            ],
            correctChoiceId: "a",
            successFeedback: "Richtig! B-Zellen produzieren Antikörper.",
            failFeedback: "Falsch. B-Zellen produzieren Antikörper.",
          },
        ],
      },
    ],

    // ── ConstellationBuilder ─────────────────────────────────────────────
    constellationBuilder: [
      {
        id: "bio-8-cb-1",
        title: "Schritte der Gentechnik",
        instruction: "Ordne die Schritte der Gentechnik chronologisch.",
        hint: "Zuerst muss das Gen isoliert werden.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1f1a00" },
        parts: [
          { id: "genisolierung", label: "Genisolierung", emoji: "✂️" },
          { id: "vektoreinführung", label: "Vektoreinführung", emoji: "💉" },
          { id: "transformation", label: "Transformation", emoji: "🔄" },
          { id: "selektion", label: "Selektion", emoji: "✅" },
        ],
        slots: [
          { id: "slot-1", label: "1. Erster Schritt" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Letzter Schritt" },
        ],
        solution: ["genisolierung", "vektoreinführung", "transformation", "selektion"],
      },
    ],

    // ── MemoryRadar ──────────────────────────────────────────────────────
    memoryRadar: [
      {
        id: "bio-8-mr-1",
        title: "Biotechnologie-Anwendungen merken",
        instruction: "Merke dir die Anwendungen der Biotechnologie.",
        flashDurationMs: 4000,
        selectionLimit: 5,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#92400e" },
        targetItems: [
          { id: "insulinproduktion", label: "Insulinproduktion", emoji: "💉" },
          { id: "biokraftstoffe", label: "Biokraftstoffe", emoji: "⛽" },
          { id: "gentherapie", label: "Gentherapie", emoji: "🩹" },
          { id: "klonen_anwendung", label: "Klonen", emoji: "🐑" },
          { id: "forensik", label: "Forensik", emoji: "🕵️" },
        ],
        decoyItems: [
          { id: "smartphone_anwendung", label: "Smartphone-Herstellung", emoji: "📱" },
          { id: "autoherstellung", label: "Autoherstellung", emoji: "🚗" },
          { id: "brückenbau", label: "Brückenbau", emoji: "🌉" },
        ],
      },
    ],
  },
};
