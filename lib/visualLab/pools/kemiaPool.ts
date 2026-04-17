import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

export const KEMIA_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "ke-5-mc-1",
        title: "Aggregatzustände: Fest",
        prompt: "Fange alle festen Stoffe!",
        goal: 5,
        speed: 1.2,
        theme: { sky: "#0f0f1b", glow: "#00f0ff", accent: "#ff007f" },
        correctItems: [
          { id: "mc1-c1", label: "Eis", emoji: "🧊" },
          { id: "mc1-c2", label: "Holz", emoji: "🪵" },
          { id: "mc1-c3", label: "Stein", emoji: "🪨" },
          { id: "mc1-c4", label: "Eisen", emoji: "🔩" },
          { id: "mc1-c5", label: "Salz", emoji: "🧂" }
        ],
        wrongItems: [
          { id: "mc1-w1", label: "Wasser", emoji: "💧" },
          { id: "mc1-w2", label: "Luft", emoji: "💨" },
          { id: "mc1-w3", label: "Öl", emoji: "🛢️" },
          { id: "mc1-w4", label: "Dampf", emoji: "☁️" },
          { id: "mc1-w5", label: "Saft", emoji: "🧃" }
        ]
      },
      {
        id: "ke-5-mc-2",
        title: "Aggregatzustände: Flüssig",
        prompt: "Fange alle flüssigen Stoffe!",
        goal: 5,
        speed: 1.5,
        theme: { sky: "#1a0b2e", glow: "#ff007f", accent: "#00f0ff" },
        correctItems: [
          { id: "mc2-c1", label: "Wasser", emoji: "💧" },
          { id: "mc2-c2", label: "Öl", emoji: "🛢️" },
          { id: "mc2-c3", label: "Milch", emoji: "🥛" },
          { id: "mc2-c4", label: "Saft", emoji: "🧃" },
          { id: "mc2-c5", label: "Honig", emoji: "🍯" }
        ],
        wrongItems: [
          { id: "mc2-w1", label: "Eis", emoji: "🧊" },
          { id: "mc2-w2", label: "Stein", emoji: "🪨" },
          { id: "mc2-w3", label: "Luft", emoji: "💨" },
          { id: "mc2-w4", label: "Holz", emoji: "🪵" },
          { id: "mc2-w5", label: "Dampf", emoji: "☁️" }
        ]
      },
      {
        id: "ke-5-mc-3",
        title: "Aggregatzustände: Gasförmig",
        prompt: "Fange alle gasförmigen Stoffe!",
        goal: 5,
        speed: 1.8,
        theme: { sky: "#0a192f", glow: "#00ff9d", accent: "#ff007f" },
        correctItems: [
          { id: "mc3-c1", label: "Luft", emoji: "💨" },
          { id: "mc3-c2", label: "Wasserdampf", emoji: "☁️" },
          { id: "mc3-c3", label: "Helium", emoji: "🎈" },
          { id: "mc3-c4", label: "Sauerstoff", emoji: "🫧" },
          { id: "mc3-c5", label: "Kohlendioxid", emoji: "🌫️" }
        ],
        wrongItems: [
          { id: "mc3-w1", label: "Wasser", emoji: "💧" },
          { id: "mc3-w2", label: "Eis", emoji: "🧊" },
          { id: "mc3-w3", label: "Stein", emoji: "🪨" },
          { id: "mc3-w4", label: "Holz", emoji: "🪵" },
          { id: "mc3-w5", label: "Öl", emoji: "🛢️" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ke-5-os-1",
        title: "Stoffeigenschaften: Magnetisch oder nicht?",
        instruction: "Sortiere die Stoffe nach ihrer magnetischen Eigenschaft.",
        theme: { bg: "#111111", orbit: "#333333", accent: "#ff007f" },
        buckets: [
          { id: "b-mag", label: "Magnetisch", color: "#ff007f" },
          { id: "b-nonmag", label: "Nicht magnetisch", color: "#00f0ff" }
        ],
        items: [
          { id: "os1-i1", label: "Eisen", emoji: "🔩", bucketId: "b-mag" },
          { id: "os1-i2", label: "Nickel", emoji: "🪙", bucketId: "b-mag" },
          { id: "os1-i3", label: "Kobalt", emoji: "🧲", bucketId: "b-mag" },
          { id: "os1-i4", label: "Holz", emoji: "🪵", bucketId: "b-nonmag" },
          { id: "os1-i5", label: "Plastik", emoji: "🥤", bucketId: "b-nonmag" },
          { id: "os1-i6", label: "Glas", emoji: "🫙", bucketId: "b-nonmag" }
        ]
      },
      {
        id: "ke-5-os-2",
        title: "Wasserlöslichkeit",
        instruction: "Sortiere die Stoffe danach, ob sie sich in Wasser lösen.",
        theme: { bg: "#0a192f", orbit: "#1a365d", accent: "#00f0ff" },
        buckets: [
          { id: "b-sol", label: "Löslich", color: "#00f0ff" },
          { id: "b-insol", label: "Unlöslich", color: "#ff007f" }
        ],
        items: [
          { id: "os2-i1", label: "Salz", emoji: "🧂", bucketId: "b-sol" },
          { id: "os2-i2", label: "Zucker", emoji: "🍬", bucketId: "b-sol" },
          { id: "os2-i3", label: "Sand", emoji: "🏖️", bucketId: "b-insol" },
          { id: "os2-i4", label: "Öl", emoji: "🛢️", bucketId: "b-insol" },
          { id: "os2-i5", label: "Kaffeepulver", emoji: "☕", bucketId: "b-sol" },
          { id: "os2-i6", label: "Stein", emoji: "🪨", bucketId: "b-insol" }
        ]
      },
      {
        id: "ke-5-os-3",
        title: "Wärmeleitfähigkeit",
        instruction: "Sortiere die Stoffe nach ihrer Wärmeleitfähigkeit.",
        theme: { bg: "#2d0a0a", orbit: "#5c1a1a", accent: "#ff4500" },
        buckets: [
          { id: "b-cond", label: "Guter Leiter", color: "#ff4500" },
          { id: "b-insul", label: "Isolator", color: "#00f0ff" }
        ],
        items: [
          { id: "os3-i1", label: "Kupfer", emoji: "🥉", bucketId: "b-cond" },
          { id: "os3-i2", label: "Aluminium", emoji: "🥫", bucketId: "b-cond" },
          { id: "os3-i3", label: "Eisen", emoji: "🔩", bucketId: "b-cond" },
          { id: "os3-i4", label: "Holz", emoji: "🪵", bucketId: "b-insul" },
          { id: "os3-i5", label: "Styropor", emoji: "📦", bucketId: "b-insul" },
          { id: "os3-i6", label: "Wolle", emoji: "🧶", bucketId: "b-insul" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ke-5-sr-1",
        title: "Sicherheit im Labor",
        instruction: "Triff die richtigen Entscheidungen für die Sicherheit im Labor.",
        scenes: [
          {
            id: "sr1-s1",
            title: "Schutzkleidung",
            prompt: "Du betrittst das Chemielabor. Was ziehst du an?",
            sceneType: "safety",
            visual: { icon: "🥼", bg: "#1a1a2e", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: "Kittel und Schutzbrille" },
              { id: "c2", label: "Nur meine normale Kleidung" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Richtig! Sicherheit geht vor.",
            failFeedback: "Falsch! Im Labor brauchst du immer Schutzkleidung."
          },
          {
            id: "sr1-s2",
            title: "Geruchsprobe",
            prompt: "Wie prüfst du den Geruch einer unbekannten Flüssigkeit?",
            sceneType: "safety",
            visual: { icon: "👃", bg: "#1a1a2e", accent: "#ff007f" },
            choices: [
              { id: "c1", label: "Nase direkt über das Gefäß halten" },
              { id: "c2", label: "Den Geruch mit der Hand zufächeln" }
            ],
            correctChoiceId: "c2",
            successFeedback: "Sehr gut! So schützt du deine Atemwege.",
            failFeedback: "Gefährlich! Dämpfe können ätzend sein."
          },
          {
            id: "sr1-s3",
            title: "Essen und Trinken",
            prompt: "Du hast Durst während des Experiments. Was tust du?",
            sceneType: "safety",
            visual: { icon: "🚫", bg: "#1a1a2e", accent: "#ff007f" },
            choices: [
              { id: "c1", label: "Ich trinke aus meiner Wasserflasche" },
              { id: "c2", label: "Ich warte, bis ich das Labor verlasse" }
            ],
            correctChoiceId: "c2",
            successFeedback: "Korrekt! Im Labor ist Essen und Trinken verboten.",
            failFeedback: "Falsch! Chemikalien könnten in dein Getränk gelangen."
          },
          {
            id: "sr1-s4",
            title: "Aufräumen",
            prompt: "Das Experiment ist beendet. Was machst du mit den Resten?",
            sceneType: "safety",
            visual: { icon: "🧹", bg: "#1a1a2e", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: "Alles in den Ausguss kippen" },
              { id: "c2", label: "In die dafür vorgesehenen Sammelbehälter geben" }
            ],
            correctChoiceId: "c2",
            successFeedback: "Perfekt! So schonen wir die Umwelt.",
            failFeedback: "Falsch! Viele Chemikalien dürfen nicht ins Abwasser."
          }
        ]
      },
      {
        id: "ke-5-sr-2",
        title: "Trennverfahren im Alltag",
        instruction: "Wähle das richtige Trennverfahren für die jeweilige Situation.",
        scenes: [
          {
            id: "sr2-s1",
            title: "Nudeln kochen",
            prompt: "Wie trennst du die gekochten Nudeln vom Wasser?",
            sceneType: "nature",
            visual: { icon: "🍝", bg: "#0f172a", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: "Filtrieren (Sieb)" },
              { id: "c2", label: "Verdampfen" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Richtig! Ein Sieb wirkt wie ein Filter.",
            failFeedback: "Falsch! Das würde viel zu lange dauern."
          },
          {
            id: "sr2-s2",
            title: "Kaffee kochen",
            prompt: "Wie trennst du das Kaffeepulver vom flüssigen Kaffee?",
            sceneType: "nature",
            visual: { icon: "☕", bg: "#0f172a", accent: "#ff007f" },
            choices: [
              { id: "c1", label: "Dekantieren" },
              { id: "c2", label: "Filtrieren (Kaffeefilter)" }
            ],
            correctChoiceId: "c2",
            successFeedback: "Genau! Der Filter hält die festen Stoffe zurück.",
            failFeedback: "Falsch! Beim Dekantieren würde Kaffeesatz mitkommen."
          },
          {
            id: "sr2-s3",
            title: "Salzgewinnung",
            prompt: "Wie gewinnt man Salz aus Meerwasser?",
            sceneType: "nature",
            visual: { icon: "🧂", bg: "#0f172a", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: "Eindampfen" },
              { id: "c2", label: "Filtrieren" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Korrekt! Das Wasser verdunstet, das Salz bleibt zurück.",
            failFeedback: "Falsch! Salz ist im Wasser gelöst und geht durch den Filter."
          },
          {
            id: "sr2-s4",
            title: "Eisenspäne im Sand",
            prompt: "Wie trennst du Eisenspäne von Sand?",
            sceneType: "nature",
            visual: { icon: "🧲", bg: "#0f172a", accent: "#ff007f" },
            choices: [
              { id: "c1", label: "Mit einem Magneten" },
              { id: "c2", label: "Mit Wasser mischen und filtrieren" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Super! Eisen ist magnetisch, Sand nicht.",
            failFeedback: "Falsch! Das ist viel zu umständlich."
          }
        ]
      },
      {
        id: "ke-5-sr-3",
        title: "Wasser und seine Eigenschaften",
        instruction: "Beantworte die Fragen rund um das Thema Wasser.",
        scenes: [
          {
            id: "sr3-s1",
            title: "Gefrierpunkt",
            prompt: "Bei welcher Temperatur gefriert Wasser?",
            sceneType: "nature",
            visual: { icon: "🧊", bg: "#001f3f", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: "0 °C" },
              { id: "c2", label: "100 °C" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Richtig! Bei 0 °C wird Wasser zu Eis.",
            failFeedback: "Falsch! Bei 100 °C kocht Wasser."
          },
          {
            id: "sr3-s2",
            title: "Siedepunkt",
            prompt: "Bei welcher Temperatur kocht Wasser?",
            sceneType: "nature",
            visual: { icon: "♨️", bg: "#001f3f", accent: "#ff007f" },
            choices: [
              { id: "c1", label: "100 °C" },
              { id: "c2", label: "50 °C" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Genau! Bei 100 °C wird Wasser zu Wasserdampf.",
            failFeedback: "Falsch! 50 °C ist nur warmes Wasser."
          },
          {
            id: "sr3-s3",
            title: "Dichteanomalie",
            prompt: "Warum schwimmt Eis auf Wasser?",
            sceneType: "nature",
            visual: { icon: "🧊", bg: "#001f3f", accent: "#00f0ff" },
            choices: [
              { id: "c1", label: "Eis hat eine geringere Dichte als flüssiges Wasser" },
              { id: "c2", label: "Eis ist schwerer als flüssiges Wasser" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Korrekt! Das nennt man die Dichteanomalie des Wassers.",
            failFeedback: "Falsch! Wäre es schwerer, würde es sinken."
          },
          {
            id: "sr3-s4",
            title: "Lösungsmittel",
            prompt: "Welcher Stoff löst sich NICHT in Wasser?",
            sceneType: "nature",
            visual: { icon: "💧", bg: "#001f3f", accent: "#ff007f" },
            choices: [
              { id: "c1", label: "Öl" },
              { id: "c2", label: "Zucker" }
            ],
            correctChoiceId: "c1",
            successFeedback: "Richtig! Öl und Wasser mischen sich nicht.",
            failFeedback: "Falsch! Zucker löst sich sehr gut in Wasser."
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ke-5-cb-1",
        title: "Aggregatzustände Übergänge",
        instruction: "Ordne die Begriffe den richtigen Übergängen zu.",
        hint: "Denke daran, was passiert, wenn man Eis erhitzt oder Wasser kocht.",
        theme: { bg: "#1a1a2e", accent: "#00f0ff", card: "#2a2a4a" },
        parts: [
          { id: "p1", label: "Schmelzen", emoji: "🔥" },
          { id: "p2", label: "Verdampfen", emoji: "♨️" },
          { id: "p3", label: "Kondensieren", emoji: "💧" },
          { id: "p4", label: "Erstarren", emoji: "❄️" }
        ],
        slots: [
          { id: "s1", label: "Fest zu Flüssig" },
          { id: "s2", label: "Flüssig zu Gasförmig" },
          { id: "s3", label: "Gasförmig zu Flüssig" },
          { id: "s4", label: "Flüssig zu Fest" }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      },
      {
        id: "ke-5-cb-2",
        title: "Trennverfahren zuordnen",
        instruction: "Ordne das Trennverfahren dem passenden Gemisch zu.",
        hint: "Überlege, welche Eigenschaften die Stoffe im Gemisch haben.",
        theme: { bg: "#0f172a", accent: "#ff007f", card: "#1e293b" },
        parts: [
          { id: "p1", label: "Filtrieren", emoji: "☕" },
          { id: "p2", label: "Eindampfen", emoji: "🧂" },
          { id: "p3", label: "Magnetscheiden", emoji: "🧲" },
          { id: "p4", label: "Dekantieren", emoji: "🫗" }
        ],
        slots: [
          { id: "s1", label: "Sand und Wasser" },
          { id: "s2", label: "Salz und Wasser" },
          { id: "s3", label: "Eisen und Sand" },
          { id: "s4", label: "Öl und Wasser" }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      },
      {
        id: "ke-5-cb-3",
        title: "Stoffeigenschaften",
        instruction: "Ordne die Eigenschaft dem passenden Stoff zu.",
        hint: "Welcher Stoff ist bekannt für diese Eigenschaft?",
        theme: { bg: "#2d0a0a", accent: "#ff4500", card: "#4a1515" },
        parts: [
          { id: "p1", label: "Magnetisch", emoji: "🧲" },
          { id: "p2", label: "Elektrischer Leiter", emoji: "⚡" },
          { id: "p3", label: "Brennbarkeit", emoji: "🔥" },
          { id: "p4", label: "Wasserlöslich", emoji: "💧" }
        ],
        slots: [
          { id: "s1", label: "Eisen" },
          { id: "s2", label: "Kupfer" },
          { id: "s3", label: "Holz" },
          { id: "s4", label: "Zucker" }
        ],
        solution: ["p1", "p2", "p3", "p4"]
      }
    ],
    memoryRadar: [
      {
        id: "ke-5-mr-1",
        title: "Finde die Metalle",
        instruction: "Merke dir die Metalle und finde sie auf dem Radar wieder.",
        flashDurationMs: 3000,
        selectionLimit: 3,
        theme: { bg: "#0a192f", accent: "#00f0ff", radar: "#1a365d" },
        targetItems: [
          { id: "t1", label: "Eisen", emoji: "🔩" },
          { id: "t2", label: "Kupfer", emoji: "🥉" },
          { id: "t3", label: "Aluminium", emoji: "🥫" }
        ],
        decoyItems: [
          { id: "d1", label: "Holz", emoji: "🪵" },
          { id: "d2", label: "Plastik", emoji: "🥤" },
          { id: "d3", label: "Glas", emoji: "🫙" },
          { id: "d4", label: "Gummi", emoji: "🛞" },
          { id: "d5", label: "Stein", emoji: "🪨" }
        ]
      },
      {
        id: "ke-5-mr-2",
        title: "Finde die reinen Stoffe",
        instruction: "Merke dir die reinen Stoffe und finde sie auf dem Radar wieder.",
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#1a1a2e", accent: "#ff007f", radar: "#2a2a4a" },
        targetItems: [
          { id: "t1", label: "Destilliertes Wasser", emoji: "💧" },
          { id: "t2", label: "Gold", emoji: "🪙" },
          { id: "t3", label: "Sauerstoff", emoji: "🫧" },
          { id: "t4", label: "Kochsalz", emoji: "🧂" }
        ],
        decoyItems: [
          { id: "d1", label: "Meerwasser", emoji: "🌊" },
          { id: "d2", label: "Luft", emoji: "💨" },
          { id: "d3", label: "Orangensaft", emoji: "🧃" },
          { id: "d4", label: "Granit", emoji: "🪨" },
          { id: "d5", label: "Milch", emoji: "🥛" }
        ]
      },
      {
        id: "ke-5-mr-3",
        title: "Finde die Laborgeräte",
        instruction: "Merke dir die Laborgeräte und finde sie auf dem Radar wieder.",
        flashDurationMs: 3000,
        selectionLimit: 3,
        theme: { bg: "#111111", accent: "#00ff9d", radar: "#333333" },
        targetItems: [
          { id: "t1", label: "Reagenzglas", emoji: "🧪" },
          { id: "t2", label: "Schutzbrille", emoji: "🥽" },
          { id: "t3", label: "Mikroskop", emoji: "🔬" }
        ],
        decoyItems: [
          { id: "d1", label: "Kochtopf", emoji: "🍲" },
          { id: "d2", label: "Gabel", emoji: "🍴" },
          { id: "d3", label: "Hammer", emoji: "🔨" },
          { id: "d4", label: "Besen", emoji: "🧹" },
          { id: "d5", label: "Gießkanne", emoji: "🚿" }
        ]
      }
    ]
  },
  6: {
  grade: 6,
  meteorCatch: [
    {
      id: "ke-6-mc-1",
      title: "Elementarteilchen",
      prompt: "Fange die Bausteine eines Atoms!",
      goal: 10,
      speed: 3,
      theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "ke-6-mc-1-c1", label: "Proton", emoji: "🔴" },
        { id: "ke-6-mc-1-c2", label: "Neutron", emoji: "⚪" },
        { id: "ke-6-mc-1-c3", label: "Elektron", emoji: "🔵" }
      ],
      wrongItems: [
        { id: "ke-6-mc-1-w1", label: "Zelle", emoji: "🦠" },
        { id: "ke-6-mc-1-w2", label: "Bakterium", emoji: "🧫" },
        { id: "ke-6-mc-1-w3", label: "Virus", emoji: "🧬" }
      ]
    },
    {
      id: "ke-6-mc-2",
      title: "Metalle",
      prompt: "Fange nur die Metalle!",
      goal: 12,
      speed: 4,
      theme: { sky: "#1e1b4b", glow: "#fbbf24", accent: "#f59e0b" },
      correctItems: [
        { id: "ke-6-mc-2-c1", label: "Eisen", emoji: "🔩" },
        { id: "ke-6-mc-2-c2", label: "Gold", emoji: "🪙" },
        { id: "ke-6-mc-2-c3", label: "Kupfer", emoji: "🥉" }
      ],
      wrongItems: [
        { id: "ke-6-mc-2-w1", label: "Sauerstoff", emoji: "💨" },
        { id: "ke-6-mc-2-w2", label: "Helium", emoji: "🎈" },
        { id: "ke-6-mc-2-w3", label: "Schwefel", emoji: "🪨" }
      ]
    },
    {
      id: "ke-6-mc-3",
      title: "Chemische Symbole",
      prompt: "Fange die echten chemischen Symbole!",
      goal: 15,
      speed: 5,
      theme: { sky: "#020617", glow: "#10b981", accent: "#34d399" },
      correctItems: [
        { id: "ke-6-mc-3-c1", label: "H", emoji: "💧" },
        { id: "ke-6-mc-3-c2", label: "O", emoji: "💨" },
        { id: "ke-6-mc-3-c3", label: "C", emoji: "🪨" }
      ],
      wrongItems: [
        { id: "ke-6-mc-3-w1", label: "Xy", emoji: "❓" },
        { id: "ke-6-mc-3-w2", label: "Zz", emoji: "❌" },
        { id: "ke-6-mc-3-w3", label: "Qq", emoji: "🚫" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "ke-6-os-1",
      title: "Metalle und Nichtmetalle",
      instruction: "Sortiere die Elemente in die richtigen Kategorien!",
      theme: { bg: "#1e1b4b", orbit: "#6366f1", accent: "#818cf8" },
      buckets: [
        { id: "ke-6-os-1-b1", label: "Metalle", color: "#fbbf24" },
        { id: "ke-6-os-1-b2", label: "Nichtmetalle", color: "#34d399" }
      ],
      items: [
        { id: "ke-6-os-1-i1", label: "Eisen", emoji: "🔩", bucketId: "ke-6-os-1-b1" },
        { id: "ke-6-os-1-i2", label: "Gold", emoji: "🪙", bucketId: "ke-6-os-1-b1" },
        { id: "ke-6-os-1-i3", label: "Sauerstoff", emoji: "💨", bucketId: "ke-6-os-1-b2" },
        { id: "ke-6-os-1-i4", label: "Kohlenstoff", emoji: "🪨", bucketId: "ke-6-os-1-b2" }
      ]
    },
    {
      id: "ke-6-os-2",
      title: "Kern und Hülle",
      instruction: "Wo befinden sich diese Teilchen im Atom?",
      theme: { bg: "#0f172a", orbit: "#ec4899", accent: "#f472b6" },
      buckets: [
        { id: "ke-6-os-2-b1", label: "Atomkern", color: "#ef4444" },
        { id: "ke-6-os-2-b2", "label": "Atomhülle", color: "#3b82f6" }
      ],
      items: [
        { id: "ke-6-os-2-i1", label: "Proton", emoji: "🔴", bucketId: "ke-6-os-2-b1" },
        { id: "ke-6-os-2-i2", label: "Neutron", emoji: "⚪", bucketId: "ke-6-os-2-b1" },
        { id: "ke-6-os-2-i3", label: "Elektron", emoji: "🔵", bucketId: "ke-6-os-2-b2" },
        { id: "ke-6-os-2-i4", label: "Valenzelektron", emoji: "⚡", bucketId: "ke-6-os-2-b2" }
      ]
    },
    {
      id: "ke-6-os-3",
      title: "Elemente und Verbindungen",
      instruction: "Unterscheide reine Elemente von chemischen Verbindungen!",
      theme: { bg: "#020617", orbit: "#14b8a6", accent: "#2dd4bf" },
      buckets: [
        { id: "ke-6-os-3-b1", label: "Element", color: "#eab308" },
        { id: "ke-6-os-3-b2", "label": "Verbindung", color: "#a855f7" }
      ],
      items: [
        { id: "ke-6-os-3-i1", label: "Wasserstoff (H)", emoji: "🎈", bucketId: "ke-6-os-3-b1" },
        { id: "ke-6-os-3-i2", label: "Sauerstoff (O)", emoji: "💨", bucketId: "ke-6-os-3-b1" },
        { id: "ke-6-os-3-i3", label: "Wasser (H2O)", emoji: "💧", bucketId: "ke-6-os-3-b2" },
        { id: "ke-6-os-3-i4", "label": "Kohlenstoffdioxid (CO2)", emoji: "🌫️", bucketId: "ke-6-os-3-b2" }
      ]
    }
  ],
  signalRunner: [
    {
      id: "ke-6-sr-1",
      title: "Sicherheit im Labor",
      instruction: "Triff die richtigen Entscheidungen für ein sicheres Experiment!",
      scenes: [
        {
          id: "ke-6-sr-1-s1",
          title: "Vorbereitung",
          prompt: "Du betrittst das Labor. Was machst du zuerst?",
          sceneType: "safety",
          visual: { icon: "🥽", bg: "#171717", accent: "#ef4444" },
          choices: [
            { id: "ke-6-sr-1-s1-c1", label: "Schutzbrille aufsetzen" },
            { id: "ke-6-sr-1-s1-c2", label: "Essen auspacken" },
            { id: "ke-6-sr-1-s1-c3", label: "Chemikalien mischen" },
            { id: "ke-6-sr-1-s1-c4", label: "Fenster öffnen" }
          ],
          correctChoiceId: "ke-6-sr-1-s1-c1",
          successFeedback: "Richtig! Die Schutzbrille ist das Wichtigste.",
          failFeedback: "Falsch! Sicherheit geht vor, setze immer zuerst die Schutzbrille auf."
        },
        {
          id: "ke-6-sr-1-s2",
          title: "Geruchstest",
          prompt: "Du sollst den Geruch einer Flüssigkeit prüfen. Wie gehst du vor?",
          sceneType: "safety",
          visual: { icon: "👃", bg: "#1e293b", accent: "#3b82f6" },
          choices: [
            { id: "ke-6-sr-1-s2-c1", "label": "Nase direkt ans Gefäß halten" },
            { id: "ke-6-sr-1-s2-c2", "label": "Dämpfe mit der Hand zufecheln" },
            { id: "ke-6-sr-1-s2-c3", "label": "Einen tiefen Atemzug nehmen" },
            { id: "ke-6-sr-1-s2-c4", "label": "Flüssigkeit probieren" }
          ],
          correctChoiceId: "ke-6-sr-1-s2-c2",
          successFeedback: "Sehr gut! So schützt du deine Atemwege.",
          failFeedback: "Gefährlich! Niemals direkt an Chemikalien riechen."
        },
        {
          id: "ke-6-sr-1-s3",
          title: "Erhitzen",
          prompt: "Du erhitzt eine Flüssigkeit im Reagenzglas. Wohin zeigt die Öffnung?",
          sceneType: "safety",
          visual: { icon: "🔥", bg: "#271c19", accent: "#f97316" },
          choices: [
            { id: "ke-6-sr-1-s3-c1", "label": "Auf mich selbst" },
            { id: "ke-6-sr-1-s3-c2", "label": "Auf meinen Nachbarn" },
            { id: "ke-6-sr-1-s3-c3", "label": "Zur Wand (weg von Personen)" },
            { id: "ke-6-sr-1-s3-c4", "label": "Nach oben an die Decke" }
          ],
          correctChoiceId: "ke-6-sr-1-s3-c3",
          successFeedback: "Korrekt! So wird niemand durch Spritzer verletzt.",
          failFeedback: "Falsch! Die Öffnung muss immer von Personen weg zeigen."
        },
        {
          id: "ke-6-sr-1-s4",
          title: "Aufräumen",
          prompt: "Das Experiment ist beendet. Was passiert mit den Resten?",
          sceneType: "safety",
          visual: { icon: "🧹", bg: "#14532d", accent: "#22c55e" },
          choices: [
            { id: "ke-6-sr-1-s4-c1", "label": "Alles in den Ausguss kippen" },
            { id: "ke-6-sr-1-s4-c2", "label": "In den normalen Mülleimer werfen" },
            { id: "ke-6-sr-1-s4-c3", "label": "In die vorgesehenen Sammelbehälter geben" },
            { id: "ke-6-sr-1-s4-c4", "label": "Auf dem Tisch stehen lassen" }
          ],
          correctChoiceId: "ke-6-sr-1-s4-c3",
          successFeedback: "Perfekt! Fachgerechte Entsorgung schützt die Umwelt.",
          failFeedback: "Falsch! Chemikalien gehören in spezielle Sammelbehälter."
        }
      ]
    },
    {
      id: "ke-6-sr-2",
      title: "Aggregatzustände",
      instruction: "Erkenne die richtigen Phasenübergänge!",
      scenes: [
        {
          id: "ke-6-sr-2-s1",
          title: "Eis schmilzt",
          prompt: "Eis wird zu flüssigem Wasser. Wie nennt man das?",
          sceneType: "nature",
          visual: { icon: "🧊", bg: "#0f172a", accent: "#38bdf8" },
          choices: [
            { id: "ke-6-sr-2-s1-c1", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s1-c2", "label": "Verdampfen" },
            { id: "ke-6-sr-2-s1-c3", "label": "Kondensieren" },
            { id: "ke-6-sr-2-s1-c4", "label": "Erstarren" }
          ],
          correctChoiceId: "ke-6-sr-2-s1-c1",
          successFeedback: "Richtig! Fest zu flüssig nennt man Schmelzen.",
          failFeedback: "Falsch! Wenn Eis zu Wasser wird, schmilzt es."
        },
        {
          id: "ke-6-sr-2-s2",
          title: "Wasser kocht",
          prompt: "Flüssiges Wasser wird zu Wasserdampf. Wie heißt dieser Vorgang?",
          sceneType: "nature",
          visual: { icon: "♨️", bg: "#1e1b4b", accent: "#818cf8" },
          choices: [
            { id: "ke-6-sr-2-s2-c1", "label": "Sublimieren" },
            { id: "ke-6-sr-2-s2-c2", "label": "Verdampfen" },
            { id: "ke-6-sr-2-s2-c3", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s2-c4", "label": "Erstarren" }
          ],
          correctChoiceId: "ke-6-sr-2-s2-c2",
          successFeedback: "Genau! Flüssig zu gasförmig ist Verdampfen.",
          failFeedback: "Falsch! Es handelt sich um Verdampfen."
        },
        {
          id: "ke-6-sr-2-s3",
          title: "Tau am Morgen",
          prompt: "Wasserdampf wird zu Wassertropfen auf Blättern. Was passiert hier?",
          sceneType: "nature",
          visual: { icon: "💧", bg: "#064e3b", accent: "#34d399" },
          choices: [
            { id: "ke-6-sr-2-s3-c1", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s3-c2", "label": "Verdampfen" },
            { id: "ke-6-sr-2-s3-c3", "label": "Kondensieren" },
            { id: "ke-6-sr-2-s3-c4", "label": "Resublimieren" }
          ],
          correctChoiceId: "ke-6-sr-2-s3-c3",
          successFeedback: "Richtig! Gasförmig zu flüssig ist Kondensieren.",
          failFeedback: "Falsch! Der Wasserdampf kondensiert zu Tropfen."
        },
        {
          id: "ke-6-sr-2-s4",
          title: "Wasser gefriert",
          prompt: "Flüssiges Wasser wird zu Eis. Wie nennt man das?",
          sceneType: "nature",
          visual: { icon: "❄️", bg: "#172554", accent: "#60a5fa" },
          choices: [
            { id: "ke-6-sr-2-s4-c1", "label": "Erstarren" },
            { id: "ke-6-sr-2-s4-c2", "label": "Schmelzen" },
            { id: "ke-6-sr-2-s4-c3", "label": "Kondensieren" },
            { id: "ke-6-sr-2-s4-c4", "label": "Sublimieren" }
          ],
          correctChoiceId: "ke-6-sr-2-s4-c1",
          successFeedback: "Korrekt! Flüssig zu fest nennt man Erstarren.",
          failFeedback: "Falsch! Das Wasser erstarrt zu Eis."
        }
      ]
    },
    {
      id: "ke-6-sr-3",
      title: "Chemische Reaktionen",
      instruction: "Erkenne die Merkmale einer chemischen Reaktion!",
      scenes: [
        {
          id: "ke-6-sr-3-s1",
          title: "Holz verbrennt",
          prompt: "Holz verbrennt zu Asche und Rauch. Ist das eine chemische Reaktion?",
          sceneType: "nature",
          visual: { icon: "🔥", bg: "#2a1215", accent: "#f43f5e" },
          choices: [
            { id: "ke-6-sr-3-s1-c1", "label": "Ja, es entstehen neue Stoffe" },
            { id: "ke-6-sr-3-s1-c2", "label": "Nein, das Holz ändert nur die Form" },
            { id: "ke-6-sr-3-s1-c3", "label": "Nein, es ist nur ein Phasenübergang" },
            { id: "ke-6-sr-3-s1-c4", "label": "Ja, aber nur weil es heiß wird" }
          ],
          correctChoiceId: "ke-6-sr-3-s1-c1",
          successFeedback: "Richtig! Bei einer chemischen Reaktion entstehen neue Stoffe.",
          failFeedback: "Falsch! Es entstehen neue Stoffe (Asche, Gase), also ist es eine chemische Reaktion."
        },
        {
          id: "ke-6-sr-3-s2",
          title: "Papier zerreißen",
          prompt: "Du zerreißt ein Blatt Papier. Ist das eine chemische Reaktion?",
          sceneType: "community",
          visual: { icon: "📄", bg: "#1e293b", accent: "#94a3b8" },
          choices: [
            { id: "ke-6-sr-3-s2-c1", "label": "Ja, das Papier ist kaputt" },
            { id: "ke-6-sr-3-s2-c2", "label": "Nein, es bleibt Papier" },
            { id: "ke-6-sr-3-s2-c3", "label": "Ja, es entstehen zwei neue Stoffe" },
            { id: "ke-6-sr-3-s2-c4", "label": "Nein, weil es nicht brennt" }
          ],
          correctChoiceId: "ke-6-sr-3-s2-c2",
          successFeedback: "Genau! Es ändert sich nur die Form, nicht der Stoff.",
          failFeedback: "Falsch! Es entstehen keine neuen Stoffe, also ist es keine chemische Reaktion."
        },
        {
          id: "ke-6-sr-3-s3",
          title: "Eisen rostet",
          prompt: "Ein Fahrrad rostet im Regen. Was passiert hier?",
          sceneType: "traffic",
          visual: { icon: "🚲", bg: "#3f2c22", accent: "#d97706" },
          choices: [
            { id: "ke-6-sr-3-s3-c1", "label": "Das Eisen schmilzt" },
            { id: "ke-6-sr-3-s3-c2", "label": "Das Eisen reagiert mit Sauerstoff zu Rost" },
            { id: "ke-6-sr-3-s3-c3", "label": "Das Wasser färbt das Eisen braun" },
            { id: "ke-6-sr-3-s3-c4", "label": "Das Eisen verdampft" }
          ],
          correctChoiceId: "ke-6-sr-3-s3-c2",
          successFeedback: "Richtig! Rosten ist eine chemische Reaktion (Oxidation).",
          failFeedback: "Falsch! Eisen und Sauerstoff reagieren chemisch zu Rost."
        },
        {
          id: "ke-6-sr-3-s4",
          title: "Brausetablette",
          prompt: "Eine Brausetablette löst sich sprudelnd in Wasser auf. Warum sprudelt es?",
          sceneType: "community",
          visual: { icon: "🫧", bg: "#082f49", accent: "#0ea5e9" },
          choices: [
            { id: "ke-6-sr-3-s4-c1", "label": "Das Wasser kocht" },
            { id: "ke-6-sr-3-s4-c2", "label": "Es entsteht ein neues Gas durch eine Reaktion" },
            { id: "ke-6-sr-3-s4-c3", "label": "Die Tablette atmet aus" },
            { id: "ke-6-sr-3-s4-c4", "label": "Das Wasser verdampft" }
          ],
          correctChoiceId: "ke-6-sr-3-s4-c2",
          successFeedback: "Korrekt! Die Gasentwicklung ist ein Zeichen für eine chemische Reaktion.",
          failFeedback: "Falsch! Es entsteht ein neues Gas (Kohlenstoffdioxid) durch eine chemische Reaktion."
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "ke-6-cb-1",
      title: "Atommodell",
      instruction: "Baue das Schalenmodell eines Atoms auf!",
      hint: "Von innen nach außen.",
      theme: { bg: "#020617", accent: "#14b8a6", card: "#0f172a" },
      parts: [
        { id: "ke-6-cb-1-p1", label: "Atomkern", emoji: "🎯" },
        { id: "ke-6-cb-1-p2", label: "K-Schale", emoji: "⭕" },
        { id: "ke-6-cb-1-p3", label: "L-Schale", emoji: "🪐" },
        { id: "ke-6-cb-1-p4", label: "Valenzelektronen", emoji: "⚡" }
      ],
      slots: [
        { id: "ke-6-cb-1-s1", label: "Zentrum" },
        { id: "ke-6-cb-1-s2", "label": "Innere Schale" },
        { id: "ke-6-cb-1-s3", "label": "Äußere Schale" },
        { id: "ke-6-cb-1-s4", "label": "Außenhülle" }
      ],
      solution: [
        "ke-6-cb-1-p1",
        "ke-6-cb-1-p2",
        "ke-6-cb-1-p3",
        "ke-6-cb-1-p4"
      ]
    },
    {
      id: "ke-6-cb-2",
      title: "Periodensystem",
      instruction: "Ordne die Informationen eines Elements im Periodensystem!",
      hint: "Von oben nach unten auf der Kachel.",
      theme: { bg: "#1e1b4b", accent: "#8b5cf6", card: "#2e1065" },
      parts: [
        { id: "ke-6-cb-2-p1", label: "Ordnungszahl", emoji: "🔢" },
        { id: "ke-6-cb-2-p2", label: "Elementsymbol", emoji: "🔠" },
        { id: "ke-6-cb-2-p3", label: "Elementname", emoji: "📝" },
        { id: "ke-6-cb-2-p4", label: "Atommasse", emoji: "⚖️" }
      ],
      slots: [
        { id: "ke-6-cb-2-s1", label: "Oben links" },
        { id: "ke-6-cb-2-s2", "label": "Mitte groß" },
        { id: "ke-6-cb-2-s3", "label": "Darunter" },
        { id: "ke-6-cb-2-s4", "label": "Ganz unten" }
      ],
      solution: [
        "ke-6-cb-2-p1",
        "ke-6-cb-2-p2",
        "ke-6-cb-2-p3",
        "ke-6-cb-2-p4"
      ]
    },
    {
      id: "ke-6-cb-3",
      title: "Reaktionsgleichung",
      instruction: "Baue eine einfache chemische Reaktionsgleichung auf!",
      hint: "Ausgangsstoffe reagieren zu Endstoffen.",
      theme: { bg: "#171717", accent: "#f59e0b", card: "#262626" },
      parts: [
        { id: "ke-6-cb-3-p1", label: "Edukt 1", emoji: "🧪" },
        { id: "ke-6-cb-3-p2", label: "Edukt 2", emoji: "🧪" },
        { id: "ke-6-cb-3-p3", label: "Reaktionspfeil", emoji: "➡️" },
        { id: "ke-6-cb-3-p4", label: "Produkt", emoji: "✨" }
      ],
      slots: [
        { id: "ke-6-cb-3-s1", label: "Startstoff A" },
        { id: "ke-6-cb-3-s2", label: "Startstoff B" },
        { id: "ke-6-cb-3-s3", label: "Reagiert zu" },
        { id: "ke-6-cb-3-s4", label: "Endstoff" }
      ],
      solution: [
        "ke-6-cb-3-p1",
        "ke-6-cb-3-p2",
        "ke-6-cb-3-p3",
        "ke-6-cb-3-p4"
      ]
    }
  ],
  memoryRadar: [
    {
      id: "ke-6-mr-1",
      title: "Edelgase",
      instruction: "Merke dir die Edelgase auf dem Radar!",
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#111827", accent: "#f59e0b", radar: "#4b5563" },
      targetItems: [
        { id: "ke-6-mr-1-t1", label: "Helium", emoji: "🎈" },
        { id: "ke-6-mr-1-t2", label: "Neon", emoji: "💡" },
        { id: "ke-6-mr-1-t3", label: "Argon", emoji: "🛡️" }
      ],
      decoyItems: [
        { id: "ke-6-mr-1-d1", label: "Sauerstoff", emoji: "💨" },
        { id: "ke-6-mr-1-d2", label: "Eisen", emoji: "🔩" },
        { id: "ke-6-mr-1-d3", label: "Gold", emoji: "🪙" },
        { id: "ke-6-mr-1-d4", label: "Kohlenstoff", emoji: "🪨" },
        { id: "ke-6-mr-1-d5", label: "Wasserstoff", emoji: "💧" }
      ]
    },
    {
      id: "ke-6-mr-2",
      title: "Alkalimetalle",
      instruction: "Finde die Alkalimetalle!",
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#2e1065", accent: "#c084fc", radar: "#581c87" },
      targetItems: [
        { id: "ke-6-mr-2-t1", label: "Lithium", emoji: "🔋" },
        { id: "ke-6-mr-2-t2", label: "Natrium", emoji: "🧂" },
        { id: "ke-6-mr-2-t3", label: "Kalium", emoji: "🍌" }
      ],
      decoyItems: [
        { id: "ke-6-mr-2-d1", label: "Kupfer", emoji: "🥉" },
        { id: "ke-6-mr-2-d2", label: "Silber", emoji: "🥈" },
        { id: "ke-6-mr-2-d3", label: "Chlor", emoji: "🟢" },
        { id: "ke-6-mr-2-d4", label: "Stickstoff", emoji: "🧊" },
        { id: "ke-6-mr-2-d5", label: "Schwefel", emoji: "🪨" }
      ]
    },
    {
      id: "ke-6-mr-3",
      title: "Laborgeräte",
      instruction: "Erinnere dich an die echten Laborgeräte!",
      flashDurationMs: 2000,
      selectionLimit: 4,
      theme: { bg: "#064e3b", accent: "#34d399", radar: "#065f46" },
      targetItems: [
        { id: "ke-6-mr-3-t1", label: "Reagenzglas", emoji: "🧪" },
        { id: "ke-6-mr-3-t2", label: "Becherglas", emoji: "🥛" },
        { id: "ke-6-mr-3-t3", label: "Erlenmeyerkolben", emoji: "⚗️" },
        { id: "ke-6-mr-3-t4", label: "Pipette", emoji: "💧" }
      ],
      decoyItems: [
        { id: "ke-6-mr-3-d1", label: "Kaffeetasse", emoji: "☕" },
        { id: "ke-6-mr-3-d2", label: "Bratpfanne", emoji: "🍳" },
        { id: "ke-6-mr-3-d3", label: "Gießkanne", emoji: "🚿" },
        { id: "ke-6-mr-3-d4", "label": "Trinkglas", emoji: "🥤" },
        { id: "ke-6-mr-3-d5", "label": "Suppenschüssel", emoji: "🥣" }
      ]
    }
  ]
  },
  7: {
  grade: 7,
  meteorCatch: [
    {
      id: "ke-7-mc-1",
      title: "Säuren fangen",
      prompt: "Fange alle sauren Lösungen!",
      goal: 10,
      speed: 1.2,
      theme: { sky: "#1a1a2e", glow: "#e94560", accent: "#0f3460" },
      correctItems: [
        { id: "ke-7-mc-1-c1", label: "Zitronensaft", emoji: "🍋" },
        { id: "ke-7-mc-1-c2", label: "Essig", emoji: "🏺" },
        { id: "ke-7-mc-1-c3", label: "Magensäure", emoji: "🧪" }
      ],
      wrongItems: [
        { id: "ke-7-mc-1-w1", label: "Seifenwasser", emoji: "🧼" },
        { id: "ke-7-mc-1-w2", label: "Natronlauge", emoji: "🧴" },
        { id: "ke-7-mc-1-w3", label: "Reines Wasser", emoji: "💧" }
      ]
    },
    {
      id: "ke-7-mc-2",
      title: "Oxide sammeln",
      prompt: "Sammle die Oxide ein!",
      goal: 12,
      speed: 1.5,
      theme: { sky: "#0f0f0f", glow: "#ff9a00", accent: "#333333" },
      correctItems: [
        { id: "ke-7-mc-2-c1", label: "Kohlenstoffdioxid", emoji: "💨" },
        { id: "ke-7-mc-2-c2", label: "Eisenoxid", emoji: "🪨" },
        { id: "ke-7-mc-2-c3", label: "Magnesiumoxid", emoji: "✨" }
      ],
      wrongItems: [
        { id: "ke-7-mc-2-w1", label: "Sauerstoff", emoji: "🌬️" },
        { id: "ke-7-mc-2-w2", label: "Eisen", emoji: "🔩" },
        { id: "ke-7-mc-2-w3", label: "Magnesium", emoji: "🪙" }
      ]
    },
    {
      id: "ke-7-mc-3",
      title: "Basen erkennen",
      prompt: "Fange alle alkalischen Lösungen (Basen)!",
      goal: 15,
      speed: 1.8,
      theme: { sky: "#001f3f", glow: "#0074d9", accent: "#7fdbff" },
      correctItems: [
        { id: "ke-7-mc-3-c1", label: "Natronlauge", emoji: "🧴" },
        { id: "ke-7-mc-3-c2", label: "Seifenlösung", emoji: "🧼" },
        { id: "ke-7-mc-3-c3", label: "Ammoniakwasser", emoji: "🧪" }
      ],
      wrongItems: [
        { id: "ke-7-mc-3-w1", label: "Zitronensaft", emoji: "🍋" },
        { id: "ke-7-mc-3-w2", label: "Essig", emoji: "🏺" },
        { id: "ke-7-mc-3-w3", label: "Kohlensäure", emoji: "🫧" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "ke-7-os-1",
      title: "Säure oder Base?",
      instruction: "Ordne die Stoffe in Säuren und Basen ein.",
      theme: { bg: "#111111", orbit: "#444444", accent: "#ff4136" },
      buckets: [
        { id: "b-acid", label: "Säure", color: "#ff4136" },
        { id: "b-base", label: "Base", color: "#0074d9" }
      ],
      items: [
        { id: "ke-7-os-1-i1", label: "Zitronensäure", emoji: "🍋", bucketId: "b-acid" },
        { id: "ke-7-os-1-i2", label: "Natronlauge", emoji: "🧴", bucketId: "b-base" },
        { id: "ke-7-os-1-i3", label: "Essigsäure", emoji: "🏺", bucketId: "b-acid" },
        { id: "ke-7-os-1-i4", label: "Seifenlösung", emoji: "🧼", bucketId: "b-base" },
        { id: "ke-7-os-1-i5", label: "Kohlensäure", emoji: "🫧", bucketId: "b-acid" },
        { id: "ke-7-os-1-i6", label: "Kalkwasser", emoji: "🥛", bucketId: "b-base" }
      ]
    },
    {
      id: "ke-7-os-2",
      title: "Element oder Verbindung?",
      instruction: "Sortiere nach Element und chemischer Verbindung.",
      theme: { bg: "#1a1a1a", orbit: "#555555", accent: "#2ecc40" },
      buckets: [
        { id: "b-element", label: "Element", color: "#2ecc40" },
        { id: "b-compound", label: "Verbindung", color: "#ff851b" }
      ],
      items: [
        { id: "ke-7-os-2-i1", label: "Sauerstoff (O2)", emoji: "🌬️", bucketId: "b-element" },
        { id: "ke-7-os-2-i2", label: "Wasser (H2O)", emoji: "💧", bucketId: "b-compound" },
        { id: "ke-7-os-2-i3", label: "Eisen (Fe)", emoji: "🔩", bucketId: "b-element" },
        { id: "ke-7-os-2-i4", label: "Kohlenstoffdioxid (CO2)", emoji: "💨", bucketId: "b-compound" },
        { id: "ke-7-os-2-i5", label: "Kupfer (Cu)", emoji: "🪙", bucketId: "b-element" },
        { id: "ke-7-os-2-i6", label: "Natriumchlorid (NaCl)", emoji: "🧂", bucketId: "b-compound" }
      ]
    },
    {
      id: "ke-7-os-3",
      title: "pH-Wert Sortierung",
      instruction: "Ordne die pH-Werte in sauer und alkalisch ein.",
      theme: { bg: "#0d0d0d", orbit: "#333333", accent: "#b10dc9" },
      buckets: [
        { id: "b-acidic", label: "Sauer (pH < 7)", color: "#ff4136" },
        { id: "b-alkaline", label: "Alkalisch (pH > 7)", color: "#0074d9" }
      ],
      items: [
        { id: "ke-7-os-3-i1", label: "pH 2", emoji: "🔴", bucketId: "b-acidic" },
        { id: "ke-7-os-3-i2", label: "pH 12", emoji: "🔵", bucketId: "b-alkaline" },
        { id: "ke-7-os-3-i3", label: "pH 5", emoji: "🟠", bucketId: "b-acidic" },
        { id: "ke-7-os-3-i4", label: "pH 9", emoji: "🟢", bucketId: "b-alkaline" },
        { id: "ke-7-os-3-i5", label: "pH 1", emoji: "🟥", bucketId: "b-acidic" },
        { id: "ke-7-os-3-i6", label: "pH 14", emoji: "🟦", bucketId: "b-alkaline" }
      ]
    }
  ],
  signalRunner: [
    {
      id: "ke-7-sr-1",
      title: "Labor-Sicherheit",
      instruction: "Triff die richtigen Entscheidungen im Chemielabor.",
      scenes: [
        {
          id: "ke-7-sr-1-s1",
          title: "Schutzbrille",
          prompt: "Du beginnst ein Experiment mit Säuren. Was tust du zuerst?",
          sceneType: "safety",
          visual: { icon: "🥽", bg: "#111111", accent: "#ffdc00" },
          choices: [
            { id: "c1", label: "Schutzbrille aufsetzen" },
            { id: "c2", label: "Sofort losmischen" },
            { id: "c3", label: "Am Reagenzglas riechen" },
            { id: "c4", label: "Wasser trinken" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Richtig! Die Schutzbrille ist Pflicht.",
          failFeedback: "Falsch! Ohne Schutzbrille ist es zu gefährlich."
        },
        {
          id: "ke-7-sr-1-s2",
          title: "Geruchsprobe",
          prompt: "Du sollst den Geruch eines Stoffes prüfen. Wie machst du das?",
          sceneType: "safety",
          visual: { icon: "👃", bg: "#1a1a2e", accent: "#0f3460" },
          choices: [
            { id: "c1", label: "Nase direkt ans Gefäß halten" },
            { id: "c2", label: "Dämpfe mit der Hand zufächeln" },
            { id: "c3", label: "Tief einatmen" },
            { id: "c4", label: "Den Stoff probieren" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Sehr gut! So schützt du deine Atemwege.",
          failFeedback: "Gefährlich! Dämpfe können ätzend sein."
        },
        {
          id: "ke-7-sr-1-s3",
          title: "Säure verdünnen",
          prompt: "Du musst eine konzentrierte Säure verdünnen. Wie gehst du vor?",
          sceneType: "safety",
          visual: { icon: "💧", bg: "#222222", accent: "#ff4136" },
          choices: [
            { id: "c1", label: "Wasser in die Säure gießen" },
            { id: "c2", label: "Säure in das Wasser gießen" },
            { id: "c3", label: "Beides gleichzeitig mischen" },
            { id: "c4", label: "Kräftig schütteln" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Korrekt! Erst das Wasser, dann die Säure.",
          failFeedback: "Falsch! 'Zuerst das Wasser, dann die Säure, sonst geschieht das Ungeheure!'"
        },
        {
          id: "ke-7-sr-1-s4",
          title: "Brenner entzünden",
          prompt: "Du möchtest den Bunsenbrenner anzünden. Was ist die richtige Reihenfolge?",
          sceneType: "safety",
          visual: { icon: "🔥", bg: "#111111", accent: "#ff851b" },
          choices: [
            { id: "c1", label: "Gashahn auf, Streichholz suchen" },
            { id: "c2", label: "Streichholz an, Gashahn auf" },
            { id: "c3", label: "Luftzufuhr ganz auf, dann Gas" },
            { id: "c4", label: "Brenner ohne Aufsicht brennen lassen" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! Erst die Flamme, dann das Gas.",
          failFeedback: "Falsch! Es könnte sich zu viel Gas ansammeln."
        }
      ]
    },
    {
      id: "ke-7-sr-2",
      title: "Reaktionen im Alltag",
      instruction: "Erkenne chemische Reaktionen in deiner Umgebung.",
      scenes: [
        {
          id: "ke-7-sr-2-s1",
          title: "Rostiges Fahrrad",
          prompt: "Dein Fahrrad stand im Regen und rostet. Was passiert hier?",
          sceneType: "nature",
          visual: { icon: "🚲", bg: "#2b2b2b", accent: "#8b4513" },
          choices: [
            { id: "c1", label: "Eisen reagiert mit Sauerstoff" },
            { id: "c2", label: "Das Eisen schmilzt" },
            { id: "c3", label: "Das Wasser färbt das Eisen" },
            { id: "c4", label: "Eisen verdunstet" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Richtig! Es entsteht Eisenoxid (Rost).",
          failFeedback: "Falsch! Rosten ist eine Oxidation."
        },
        {
          id: "ke-7-sr-2-s2",
          title: "Lagerfeuer",
          prompt: "Holz verbrennt im Lagerfeuer. Welche Art von Reaktion ist das?",
          sceneType: "nature",
          visual: { icon: "🔥", bg: "#1a0f00", accent: "#ff4500" },
          choices: [
            { id: "c1", label: "Eine exotherme Reaktion" },
            { id: "c2", label: "Eine endotherme Reaktion" },
            { id: "c3", label: "Ein physikalischer Vorgang" },
            { id: "c4", label: "Eine Neutralisation" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Genau! Es wird Energie in Form von Wärme frei.",
          failFeedback: "Falsch! Bei einer Verbrennung wird Energie freigesetzt."
        },
        {
          id: "ke-7-sr-2-s3",
          title: "Brausetablette",
          prompt: "Eine Brausetablette löst sich sprudelnd in Wasser auf. Welches Gas entsteht?",
          sceneType: "nature",
          visual: { icon: "🫧", bg: "#001f3f", accent: "#7fdbff" },
          choices: [
            { id: "c1", label: "Sauerstoff" },
            { id: "c2", label: "Wasserstoff" },
            { id: "c3", label: "Kohlenstoffdioxid" },
            { id: "c4", label: "Stickstoff" }
          ],
          correctChoiceId: "c3",
          successFeedback: "Richtig! Das Sprudeln kommt vom Kohlenstoffdioxid.",
          failFeedback: "Falsch! Es entsteht Kohlenstoffdioxid (CO2)."
        },
        {
          id: "ke-7-sr-2-s4",
          title: "Kalkentfernung",
          prompt: "Du putzt verkalkte Armaturen mit Essig. Warum funktioniert das?",
          sceneType: "community",
          visual: { icon: "🚰", bg: "#111111", accent: "#aaaaaa" },
          choices: [
            { id: "c1", label: "Essig ist eine Säure und löst Kalk" },
            { id: "c2", label: "Essig ist eine Base und neutralisiert Kalk" },
            { id: "c3", label: "Essig riecht stark" },
            { id: "c4", label: "Essig kühlt den Kalk ab" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Korrekt! Säuren reagieren mit Kalk.",
          failFeedback: "Falsch! Essig ist eine Säure, die den Kalk zersetzt."
        }
      ]
    },
    {
      id: "ke-7-sr-3",
      title: "Indikatoren",
      instruction: "Bestimme den pH-Wert mit Indikatoren.",
      scenes: [
        {
          id: "ke-7-sr-3-s1",
          title: "Rotkohlsaft in Säure",
          prompt: "Du gibst Zitronensaft zu Rotkohlsaft. Welche Farbe entsteht?",
          sceneType: "nature",
          visual: { icon: "🥬", bg: "#220022", accent: "#ff0055" },
          choices: [
            { id: "c1", label: "Rot/Pink" },
            { id: "c2", label: "Grün" },
            { id: "c3", label: "Blau" },
            { id: "c4", label: "Gelb" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Richtig! Im sauren Bereich wird Rotkohlsaft rot.",
          failFeedback: "Falsch! Säuren färben den Indikator rot."
        },
        {
          id: "ke-7-sr-3-s2",
          title: "Universalindikator in Wasser",
          prompt: "Welche Farbe zeigt Universalindikator in reinem Wasser?",
          sceneType: "nature",
          visual: { icon: "💧", bg: "#002200", accent: "#00ff00" },
          choices: [
            { id: "c1", label: "Rot" },
            { id: "c2", label: "Grün" },
            { id: "c3", label: "Blau" },
            { id: "c4", label: "Violett" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Genau! Wasser ist neutral (pH 7), also grün.",
          failFeedback: "Falsch! Neutral bedeutet beim Universalindikator grün."
        },
        {
          id: "ke-7-sr-3-s3",
          title: "Rotkohlsaft in Base",
          prompt: "Du gibst Seifenlösung zu Rotkohlsaft. Welche Farbe entsteht?",
          sceneType: "nature",
          visual: { icon: "🧼", bg: "#001122", accent: "#00ffcc" },
          choices: [
            { id: "c1", label: "Rot" },
            { id: "c2", label: "Grün/Gelb" },
            { id: "c3", label: "Farblos" },
            { id: "c4", label: "Pink" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! Im alkalischen Bereich wird er grün bis gelb.",
          failFeedback: "Falsch! Basen färben den Rotkohlsaft grün/gelb."
        },
        {
          id: "ke-7-sr-3-s4",
          title: "Lackmuspapier",
          prompt: "Blaues Lackmuspapier wird in eine Lösung getaucht und wird rot. Die Lösung ist...",
          sceneType: "nature",
          visual: { icon: "📜", bg: "#221111", accent: "#ff3333" },
          choices: [
            { id: "c1", label: "Sauer" },
            { id: "c2", label: "Alkalisch" },
            { id: "c3", label: "Neutral" },
            { id: "c4", label: "Salzig" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Korrekt! Säuren färben Lackmus rot.",
          failFeedback: "Falsch! Ein Farbumschlag nach Rot zeigt eine Säure an."
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "ke-7-cb-1",
      title: "Wassermolekül",
      instruction: "Baue die chemische Formel für Wasser zusammen.",
      hint: "Zwei Wasserstoffatome und ein Sauerstoffatom.",
      theme: { bg: "#001f3f", accent: "#7fdbff", card: "#003366" },
      parts: [
        { id: "p1", label: "H", emoji: "⚪" },
        { id: "p2", label: "2", emoji: "🔢" },
        { id: "p3", label: "O", emoji: "🔴" },
        { id: "p4", label: "1", emoji: "🔢" }
      ],
      slots: [
        { id: "s1", label: "Element 1" },
        { id: "s2", label: "Anzahl" },
        { id: "s3", label: "Element 2" },
        { id: "s4", label: "Leer" }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-7-cb-2",
      title: "Kohlenstoffdioxid",
      instruction: "Baue die chemische Formel für Kohlenstoffdioxid.",
      hint: "Ein Kohlenstoffatom und zwei Sauerstoffatome.",
      theme: { bg: "#111111", accent: "#ff851b", card: "#333333" },
      parts: [
        { id: "p1", label: "C", emoji: "⚫" },
        { id: "p2", label: "O", emoji: "🔴" },
        { id: "p3", label: "2", emoji: "🔢" },
        { id: "p4", label: "3", emoji: "🔢" }
      ],
      slots: [
        { id: "s1", label: "Element 1" },
        { id: "s2", label: "Element 2" },
        { id: "s3", label: "Anzahl" },
        { id: "s4", label: "Falsch" }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-7-cb-3",
      title: "Reaktionsgleichung",
      instruction: "Vervollständige die Wortgleichung für die Verbrennung von Eisen.",
      hint: "Eisen reagiert mit Sauerstoff zu...",
      theme: { bg: "#2b1a1a", accent: "#ff4136", card: "#4a2a2a" },
      parts: [
        { id: "p1", label: "Eisen", emoji: "🔩" },
        { id: "p2", label: "+", emoji: "➕" },
        { id: "p3", label: "Sauerstoff", emoji: "🌬️" },
        { id: "p4", label: "Eisenoxid", emoji: "🪨" }
      ],
      slots: [
        { id: "s1", label: "Edukt 1" },
        { id: "s2", label: "Plus" },
        { id: "s3", label: "Edukt 2" },
        { id: "s4", label: "Produkt" }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    }
  ],
  memoryRadar: [
    {
      id: "ke-7-mr-1",
      title: "Säuren finden",
      instruction: "Merke dir die Säuren und wähle sie aus.",
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#1a0000", accent: "#ff4136", radar: "#330000" },
      targetItems: [
        { id: "t1", label: "Salzsäure", emoji: "🧪" },
        { id: "t2", label: "Zitronensäure", emoji: "🍋" },
        { id: "t3", label: "Essigsäure", emoji: "🏺" }
      ],
      decoyItems: [
        { id: "d1", label: "Natronlauge", emoji: "🧴" },
        { id: "d2", label: "Kalkwasser", emoji: "🥛" },
        { id: "d3", label: "Wasser", emoji: "💧" },
        { id: "d4", label: "Kochsalz", emoji: "🧂" },
        { id: "d5", label: "Zucker", emoji: "🍬" }
      ]
    },
    {
      id: "ke-7-mr-2",
      title: "Oxide merken",
      instruction: "Finde alle Oxide auf dem Radar.",
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#001a1a", accent: "#39cccc", radar: "#003333" },
      targetItems: [
        { id: "t1", label: "Kupferoxid", emoji: "🪨" },
        { id: "t2", label: "Magnesiumoxid", emoji: "✨" },
        { id: "t3", label: "Kohlenstoffdioxid", emoji: "💨" }
      ],
      decoyItems: [
        { id: "d1", label: "Kupfer", emoji: "🪙" },
        { id: "d2", label: "Magnesium", emoji: "🔥" },
        { id: "d3", label: "Kohlenstoff", emoji: "⚫" },
        { id: "d4", label: "Sauerstoff", emoji: "🌬️" },
        { id: "d5", label: "Wasserstoff", emoji: "🎈" }
      ]
    },
    {
      id: "ke-7-mr-3",
      title: "Alkalische Lösungen",
      instruction: "Identifiziere die alkalischen Lösungen (Basen).",
      flashDurationMs: 2500,
      selectionLimit: 3,
      theme: { bg: "#00001a", accent: "#0074d9", radar: "#000033" },
      targetItems: [
        { id: "t1", label: "Natronlauge", emoji: "🧴" },
        { id: "t2", label: "Seifenlösung", emoji: "🧼" },
        { id: "t3", label: "Kalkwasser", emoji: "🥛" }
      ],
      decoyItems: [
        { id: "d1", label: "Essig", emoji: "🏺" },
        { id: "d2", label: "Zitronensaft", emoji: "🍋" },
        { id: "d3", label: "Apfelsaft", emoji: "🧃" },
        { id: "d4", label: "Mineralwasser", emoji: "🫧" },
        { id: "d5", label: "Kochsalzlösung", emoji: "🧂" }
      ]
    }
  ]
  },
  8: {
  grade: 8,
  meteorCatch: [
    {
      id: "ke-8-mc-1",
      title: "Alkalimetalle fangen",
      prompt: "Fange nur die Alkalimetalle!",
      goal: 10,
      speed: 1.5,
      theme: { sky: "#1a1a2e", glow: "#e94560", accent: "#0f3460" },
      correctItems: [
        { id: "ke-8-mc-1-c1", label: "Lithium", emoji: "🔴" },
        { id: "ke-8-mc-1-c2", label: "Natrium", emoji: "🟡" },
        { id: "ke-8-mc-1-c3", label: "Kalium", emoji: "🟣" }
      ],
      wrongItems: [
        { id: "ke-8-mc-1-w1", label: "Eisen", emoji: "🔩" },
        { id: "ke-8-mc-1-w2", label: "Sauerstoff", emoji: "💨" },
        { id: "ke-8-mc-1-w3", label: "Helium", emoji: "🎈" }
      ]
    },
    {
      id: "ke-8-mc-2",
      title: "Halogene sammeln",
      prompt: "Sammle die Halogene ein!",
      goal: 12,
      speed: 1.8,
      theme: { sky: "#0f0f1b", glow: "#4ecca3", accent: "#232931" },
      correctItems: [
        { id: "ke-8-mc-2-c1", label: "Fluor", emoji: "🟢" },
        { id: "ke-8-mc-2-c2", label: "Chlor", emoji: "🧪" },
        { id: "ke-8-mc-2-c3", label: "Brom", emoji: "🟤" }
      ],
      wrongItems: [
        { id: "ke-8-mc-2-w1", label: "Neon", emoji: "💡" },
        { id: "ke-8-mc-2-w2", label: "Kupfer", emoji: "🪙" },
        { id: "ke-8-mc-2-w3", label: "Kohlenstoff", emoji: "⚫" }
      ]
    },
    {
      id: "ke-8-mc-3",
      title: "Edelgase isolieren",
      prompt: "Fange die reaktionsträgen Edelgase!",
      goal: 15,
      speed: 2.0,
      theme: { sky: "#121212", glow: "#bb86fc", accent: "#3700b3" },
      correctItems: [
        { id: "ke-8-mc-3-c1", label: "Helium", emoji: "🎈" },
        { id: "ke-8-mc-3-c2", label: "Neon", emoji: "💡" },
        { id: "ke-8-mc-3-c3", label: "Argon", emoji: "🔵" }
      ],
      wrongItems: [
        { id: "ke-8-mc-3-w1", label: "Wasserstoff", emoji: "💥" },
        { id: "ke-8-mc-3-w2", label: "Stickstoff", emoji: "❄️" },
        { id: "ke-8-mc-3-w3", label: "Schwefel", emoji: "🟡" }
      ]
    }
  ],
  orbitSort: [
    {
      id: "ke-8-os-1",
      title: "Metalle vs. Nichtmetalle",
      instruction: "Sortiere die Elemente in Metalle und Nichtmetalle.",
      theme: { bg: "#1c1c1c", orbit: "#333333", accent: "#ff9800" },
      buckets: [
        { id: "b-metal", label: "Metalle", color: "#ff5722" },
        { id: "b-nonmetal", label: "Nichtmetalle", color: "#03a9f4" }
      ],
      items: [
        { id: "ke-8-os-1-i1", label: "Eisen", emoji: "🔩", bucketId: "b-metal" },
        { id: "ke-8-os-1-i2", label: "Sauerstoff", emoji: "💨", bucketId: "b-nonmetal" },
        { id: "ke-8-os-1-i3", label: "Kupfer", emoji: "🪙", bucketId: "b-metal" },
        { id: "ke-8-os-1-i4", label: "Kohlenstoff", emoji: "⚫", bucketId: "b-nonmetal" }
      ]
    },
    {
      id: "ke-8-os-2",
      title: "Kationen und Anionen",
      instruction: "Ordne die Ionen nach ihrer Ladung.",
      theme: { bg: "#0d1117", orbit: "#161b22", accent: "#58a6ff" },
      buckets: [
        { id: "b-cation", label: "Kationen (+)", color: "#f85149" },
        { id: "b-anion", label: "Anionen (-)", color: "#3fb950" }
      ],
      items: [
        { id: "ke-8-os-2-i1", label: "Na+", emoji: "➕", bucketId: "b-cation" },
        { id: "ke-8-os-2-i2", label: "Cl-", emoji: "➖", bucketId: "b-anion" },
        { id: "ke-8-os-2-i3", label: "Mg2+", emoji: "➕", bucketId: "b-cation" },
        { id: "ke-8-os-2-i4", label: "O2-", emoji: "➖", bucketId: "b-anion" }
      ]
    },
    {
      id: "ke-8-os-3",
      title: "Oxidation oder Reduktion",
      instruction: "Sortiere die Prozesse nach Elektronenabgabe oder -aufnahme.",
      theme: { bg: "#1a1a2e", orbit: "#16213e", accent: "#e94560" },
      buckets: [
        { id: "b-ox", label: "Oxidation", color: "#ff4b4b" },
        { id: "b-red", label: "Reduktion", color: "#4b4bff" }
      ],
      items: [
        { id: "ke-8-os-3-i1", label: "Elektronenabgabe", emoji: "📤", bucketId: "b-ox" },
        { id: "ke-8-os-3-i2", label: "Elektronenaufnahme", emoji: "📥", bucketId: "b-red" },
        { id: "ke-8-os-3-i3", label: "Fe wird zu Fe2+", emoji: "⬆️", bucketId: "b-ox" },
        { id: "ke-8-os-3-i4", label: "Cu2+ wird zu Cu", emoji: "⬇️", bucketId: "b-red" }
      ]
    }
  ],
  signalRunner: [
    {
      id: "ke-8-sr-1",
      title: "Labor-Sicherheit",
      instruction: "Triff die richtigen Entscheidungen im Chemielabor.",
      scenes: [
        {
          id: "ke-8-sr-1-s1",
          title: "Schutzkleidung",
          prompt: "Du betrittst das Labor. Was ziehst du zuerst an?",
          sceneType: "safety",
          visual: { icon: "🥽", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: "Nur Handschuhe" },
            { id: "c2", label: "Schutzbrille und Kittel" },
            { id: "c3", label: "Sonnenbrille" },
            { id: "c4", label: "Nichts" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! Schutzbrille und Kittel sind Pflicht.",
          failFeedback: "Falsch. Ohne Schutzbrille und Kittel darfst du nicht experimentieren."
        },
        {
          id: "ke-8-sr-1-s2",
          title: "Chemikalien riechen",
          prompt: "Wie prüfst du den Geruch einer unbekannten Flüssigkeit?",
          sceneType: "safety",
          visual: { icon: "👃", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: "Nase direkt über das Gefäß halten" },
            { id: "c2", label: "Dämpfe mit der Hand zufächeln" },
            { id: "c3", label: "Tief einatmen" },
            { id: "c4", label: "Einen Tropfen probieren" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Sehr gut! Zufächeln ist die sichere Methode.",
          failFeedback: "Gefährlich! Niemals direkt an Chemikalien riechen."
        },
        {
          id: "ke-8-sr-1-s3",
          title: "Säuren verdünnen",
          prompt: "Du musst konzentrierte Schwefelsäure verdünnen. Wie gehst du vor?",
          sceneType: "safety",
          visual: { icon: "💧", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: "Wasser in die Säure gießen" },
            { id: "c2", label: "Säure in das Wasser gießen" },
            { id: "c3", label: "Beides gleichzeitig mischen" },
            { id: "c4", label: "Säure erhitzen" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Korrekt! Erst das Wasser, dann die Säure.",
          failFeedback: "Falsch! Gießt du Wasser in Säure, kann es spritzen."
        },
        {
          id: "ke-8-sr-1-s4",
          title: "Glasbruch",
          prompt: "Ein Reagenzglas zerbricht. Was tust du?",
          sceneType: "safety",
          visual: { icon: "💥", bg: "#222831", accent: "#00adb5" },
          choices: [
            { id: "c1", label: "Mit bloßen Händen aufsammeln" },
            { id: "c2", label: "Liegen lassen" },
            { id: "c3", label: "Lehrkraft rufen und Besen holen" },
            { id: "c4", label: "In den normalen Müll werfen" }
          ],
          correctChoiceId: "c3",
          successFeedback: "Richtig! Immer die Lehrkraft informieren.",
          failFeedback: "Falsch. Verletzungsgefahr und falsche Entsorgung!"
        }
      ]
    },
    {
      id: "ke-8-sr-2",
      title: "Redoxreaktionen im Alltag",
      instruction: "Erkenne Redoxreaktionen in deiner Umgebung.",
      scenes: [
        {
          id: "ke-8-sr-2-s1",
          title: "Rostendes Fahrrad",
          prompt: "Dein Fahrrad rostet im Regen. Was passiert chemisch?",
          sceneType: "nature",
          visual: { icon: "🚲", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: "Eisen wird reduziert" },
            { id: "c2", label: "Eisen wird oxidiert" },
            { id: "c3", label: "Eisen verdampft" },
            { id: "c4", label: "Eisen schmilzt" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! Eisen reagiert mit Sauerstoff (Oxidation).",
          failFeedback: "Falsch. Rosten ist eine Oxidation von Eisen."
        },
        {
          id: "ke-8-sr-2-s2",
          title: "Lagerfeuer",
          prompt: "Holz verbrennt im Lagerfeuer. Welche Rolle spielt Sauerstoff?",
          sceneType: "nature",
          visual: { icon: "🔥", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: "Er ist das Oxidationsmittel" },
            { id: "c2", label: "Er ist das Reduktionsmittel" },
            { id: "c3", label: "Er kühlt das Feuer" },
            { id: "c4", label: "Er brennt selbst" }
          ],
          correctChoiceId: "c1",
          successFeedback: "Korrekt! Sauerstoff nimmt Elektronen auf.",
          failFeedback: "Falsch. Sauerstoff oxidiert den Kohlenstoff im Holz."
        },
        {
          id: "ke-8-sr-2-s3",
          title: "Apfel wird braun",
          prompt: "Ein angeschnittener Apfel wird braun. Warum?",
          sceneType: "nature",
          visual: { icon: "🍎", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: "Er trocknet aus" },
            { id: "c2", label: "Reaktion mit Stickstoff" },
            { id: "c3", label: "Oxidation durch Luftsauerstoff" },
            { id: "c4", label: "Er gefriert" }
          ],
          correctChoiceId: "c3",
          successFeedback: "Genau! Enzyme katalysieren die Oxidation.",
          failFeedback: "Falsch. Es ist eine Oxidationsreaktion."
        },
        {
          id: "ke-8-sr-2-s4",
          title: "Batterie entlädt sich",
          prompt: "Was liefert den Strom in einer Batterie?",
          sceneType: "traffic",
          visual: { icon: "🔋", bg: "#1a1a1a", accent: "#ff5722" },
          choices: [
            { id: "c1", label: "Kleine Motoren" },
            { id: "c2", label: "Eine Redoxreaktion" },
            { id: "c3", label: "Reibung" },
            { id: "c4", label: "Wärme" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! Elektronen fließen durch die Redoxreaktion.",
          failFeedback: "Falsch. Batterien nutzen chemische Redoxreaktionen."
        }
      ]
    },
    {
      id: "ke-8-sr-3",
      title: "Kohlenstoffkreislauf",
      instruction: "Verfolge den Weg des Kohlenstoffs.",
      scenes: [
        {
          id: "ke-8-sr-3-s1",
          title: "Fotosynthese",
          prompt: "Wie nehmen Pflanzen Kohlenstoff auf?",
          sceneType: "nature",
          visual: { icon: "🌿", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: "Als reinen Kohlenstoff aus dem Boden" },
            { id: "c2", label: "Als Kohlenstoffdioxid aus der Luft" },
            { id: "c3", label: "Als Kohlenmonoxid" },
            { id: "c4", label: "Als Methan" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! CO2 wird aus der Luft aufgenommen.",
          failFeedback: "Falsch. Pflanzen nutzen CO2 für die Fotosynthese."
        },
        {
          id: "ke-8-sr-3-s2",
          title: "Atmung",
          prompt: "Was atmen Tiere und Menschen aus?",
          sceneType: "nature",
          visual: { icon: "🫁", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: "Sauerstoff" },
            { id: "c2", label: "Kohlenstoffdioxid" },
            { id: "c3", label: "Helium" },
            { id: "c4", label: "Stickstoff" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Korrekt! CO2 wird bei der Zellatmung frei.",
          failFeedback: "Falsch. Wir atmen Kohlenstoffdioxid aus."
        },
        {
          id: "ke-8-sr-3-s3",
          title: "Verbrennung",
          prompt: "Was entsteht bei der vollständigen Verbrennung von Erdgas (Methan)?",
          sceneType: "community",
          visual: { icon: "🏭", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: "Nur Wasser" },
            { id: "c2", label: "Kohlenstoffdioxid und Wasser" },
            { id: "c3", label: "Reiner Kohlenstoff" },
            { id: "c4", label: "Sauerstoff" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Sehr gut! CO2 und H2O sind die Produkte.",
          failFeedback: "Falsch. Es entstehen CO2 und Wasser."
        },
        {
          id: "ke-8-sr-3-s4",
          title: "Ozeane",
          prompt: "Welche Rolle spielen die Ozeane im Kohlenstoffkreislauf?",
          sceneType: "nature",
          visual: { icon: "🌊", bg: "#0f2922", accent: "#4caf50" },
          choices: [
            { id: "c1", label: "Sie produzieren Kohle" },
            { id: "c2", label: "Sie speichern gelöstes CO2" },
            { id: "c3", label: "Sie verbrennen Kohlenstoff" },
            { id: "c4", label: "Keine Rolle" }
          ],
          correctChoiceId: "c2",
          successFeedback: "Richtig! Ozeane sind riesige CO2-Speicher.",
          failFeedback: "Falsch. Ozeane nehmen große Mengen CO2 auf."
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "ke-8-cb-1",
      title: "Natriumchlorid (Kochsalz)",
      instruction: "Baue das Ionengitter von Natriumchlorid auf.",
      hint: "Ein Kation und ein Anion ziehen sich an.",
      theme: { bg: "#121212", accent: "#bb86fc", card: "#1e1e1e" },
      parts: [
        { id: "p1", label: "Na+", emoji: "🔵" },
        { id: "p2", label: "Cl-", emoji: "🟢" },
        { id: "p3", label: "Na+", emoji: "🔵" },
        { id: "p4", label: "Cl-", emoji: "🟢" }
      ],
      slots: [
        { id: "s1", label: "Kation 1" },
        { id: "s2", label: "Anion 1" },
        { id: "s3", label: "Kation 2" },
        { id: "s4", label: "Anion 2" }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-8-cb-2",
      title: "Methan-Molekül",
      instruction: "Konstruiere ein Methan-Molekül (CH4).",
      hint: "Kohlenstoff steht im Zentrum und bindet vier Wasserstoffatome.",
      theme: { bg: "#001f3f", accent: "#39cccc", card: "#001528" },
      parts: [
        { id: "p1", label: "C-Atom", emoji: "⚫" },
        { id: "p2", label: "H-Atom", emoji: "⚪" },
        { id: "p3", label: "H-Atom", emoji: "⚪" },
        { id: "p4", label: "H-Atom", emoji: "⚪" }
      ],
      slots: [
        { id: "s1", label: "Zentrum" },
        { id: "s2", label: "Bindung 1" },
        { id: "s3", label: "Bindung 2" },
        { id: "s4", label: "Bindung 3" }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    },
    {
      id: "ke-8-cb-3",
      title: "Kupferoxid-Reduktion",
      instruction: "Stelle die Reaktionsgleichung: CuO + C -> Cu + CO auf.",
      hint: "Kupferoxid reagiert mit Kohlenstoff.",
      theme: { bg: "#2b1010", accent: "#ff4136", card: "#1a0a0a" },
      parts: [
        { id: "p1", label: "CuO", emoji: "🟤" },
        { id: "p2", label: "C", emoji: "⚫" },
        { id: "p3", label: "Cu", emoji: "🪙" },
        { id: "p4", label: "CO", emoji: "💨" }
      ],
      slots: [
        { id: "s1", label: "Edukt 1" },
        { id: "s2", label: "Edukt 2" },
        { id: "s3", label: "Produkt 1" },
        { id: "s4", label: "Produkt 2" }
      ],
      solution: ["p1", "p2", "p3", "p4"]
    }
  ],
  memoryRadar: [
    {
      id: "ke-8-mr-1",
      title: "Alkalimetalle finden",
      instruction: "Merke dir die Positionen der Alkalimetalle.",
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#0f0f1b", accent: "#e94560", radar: "#1a1a2e" },
      targetItems: [
        { id: "t1", label: "Lithium", emoji: "🔴" },
        { id: "t2", label: "Natrium", emoji: "🟡" },
        { id: "t3", label: "Kalium", emoji: "🟣" }
      ],
      decoyItems: [
        { id: "d1", label: "Magnesium", emoji: "⚪" },
        { id: "d2", label: "Calcium", emoji: "🦴" },
        { id: "d3", label: "Eisen", emoji: "🔩" },
        { id: "d4", label: "Kupfer", emoji: "🪙" },
        { id: "d5", label: "Zink", emoji: "🔋" }
      ]
    },
    {
      id: "ke-8-mr-2",
      title: "Halogene aufspüren",
      instruction: "Finde die Halogene auf dem Radar.",
      flashDurationMs: 2500,
      selectionLimit: 4,
      theme: { bg: "#121212", accent: "#4ecca3", radar: "#232931" },
      targetItems: [
        { id: "t1", label: "Fluor", emoji: "🟢" },
        { id: "t2", label: "Chlor", emoji: "🧪" },
        { id: "t3", label: "Brom", emoji: "🟤" },
        { id: "t4", label: "Iod", emoji: "🟣" }
      ],
      decoyItems: [
        { id: "d1", label: "Sauerstoff", emoji: "💨" },
        { id: "d2", label: "Stickstoff", emoji: "❄️" },
        { id: "d3", label: "Kohlenstoff", emoji: "⚫" },
        { id: "d4", label: "Schwefel", emoji: "🟡" },
        { id: "d5", label: "Phosphor", emoji: "🔥" }
      ]
    },
    {
      id: "ke-8-mr-3",
      title: "Edelgase merken",
      instruction: "Präge dir die Edelgase ein.",
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#1a1a2e", accent: "#bb86fc", radar: "#16213e" },
      targetItems: [
        { id: "t1", label: "Helium", emoji: "🎈" },
        { id: "t2", label: "Neon", emoji: "💡" },
        { id: "t3", label: "Argon", emoji: "🔵" }
      ],
      decoyItems: [
        { id: "d1", label: "Wasserstoff", emoji: "💥" },
        { id: "d2", label: "Sauerstoff", emoji: "💨" },
        { id: "d3", label: "Chlor", emoji: "🧪" },
        { id: "d4", label: "Natrium", emoji: "🟡" },
        { id: "d5", label: "Eisen", emoji: "🔩" }
      ]
    }
  ]
  }
};
