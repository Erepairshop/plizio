import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

export const PHYSIK_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: {
    grade: 5,
    meteorCatch: [
      {
        id: "ph-5-mc-1",
        title: "Energieformen",
        prompt: "Fange nur Energieformen ein!",
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "kin", label: "Kinetische Energie", emoji: "⚡" },
          { id: "pot", label: "Potenzielle Energie", emoji: "🧗" },
          { id: "waerme", label: "Wärmeenergie", emoji: "🔥" },
          { id: "elek", label: "Elektrische Energie", emoji: "💡" },
          { id: "licht", label: "Lichtenergie", emoji: "☀️" },
          { id: "chem", label: "Chemische Energie", emoji: "🔋" }
        ],
        wrongItems: [
          { id: "x1", label: "Dichte", emoji: "🧱" },
          { id: "x2", label: "Masse", emoji: "⚖️" },
          { id: "x3", label: "Volumen", emoji: "📦" }
        ]
      },
      {
        id: "ph-5-mc-2",
        title: "Einfache Maschinen",
        prompt: "Fange nur einfache Maschinen ein!",
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "hebel", label: "Hebel", emoji: "🕹️" },
          { id: "rolle", label: "Flaschenzug", emoji: "⛓️" },
          { id: "ebene", label: "Schiefe Ebene", emoji: "📐" },
          { id: "keil", label: "Keil", emoji: "🪓" },
          { id: "rad", label: "Rad und Achse", emoji: "🎡" },
          { id: "schraube", label: "Schraube", emoji: "🔩" }
        ],
        wrongItems: [
          { id: "x4", label: "Thermometer", emoji: "🌡️" },
          { id: "x5", label: "Batterie", emoji: "🔋" },
          { id: "x6", label: "Magnet", emoji: "🧲" },
          { id: "x7", label: "Glühlampe", emoji: "💡" }
        ]
      },
      {
        id: "ph-5-mc-3",
        title: "Wärmequellen",
        prompt: "Fange nur Wärmequellen ein!",
        goal: 5,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "sonne", label: "Sonne", emoji: "☀️" },
          { id: "feuer", label: "Lagerfeuer", emoji: "🔥" },
          { id: "heizung", label: "Heizkörper", emoji: "♨️" },
          { id: "reibung", label: "Reibung", emoji: "👏" },
          { id: "herd", label: "Herdplatte", emoji: "🍳" }
        ],
        wrongItems: [
          { id: "x8", label: "Eiswürfel", emoji: "🧊" },
          { id: "x9", label: "Schatten", emoji: "👤" },
          { id: "x10", label: "Spiegel", emoji: "🪞" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-5-os-1",
        title: "Kräfte sortieren",
        instruction: "Sortiere in Kontakt- oder Fernkraft.",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "kontakt", label: "Kontaktkraft", color: "#3b82f6" },
          { id: "fern", label: "Fernkraft", color: "#ef4444" }
        ],
        items: [
          { id: "reib", label: "Reibung", emoji: "🤝", bucketId: "kontakt" },
          { id: "zug", label: "Zugkraft", emoji: "🪢", bucketId: "kontakt" },
          { id: "druck", label: "Druckkraft", emoji: "👇", bucketId: "kontakt" },
          { id: "luft", label: "Luftwiderstand", emoji: "💨", bucketId: "kontakt" },
          { id: "schwer", label: "Schwerkraft", emoji: "🌍", bucketId: "fern" },
          { id: "magn", label: "Magnetismus", emoji: "🧲", bucketId: "fern" },
          { id: "elek", label: "Elektrische Kraft", emoji: "⚡", bucketId: "fern" }
        ]
      },
      {
        id: "ph-5-os-2",
        title: "Wärmeleiter & Isolatoren",
        instruction: "Sortiere in Wärmeleiter oder Isolator.",
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "leiter", label: "Wärmeleiter", color: "#f59e0b" },
          { id: "isolator", label: "Isolator", color: "#8b5cf6" }
        ],
        items: [
          { id: "kupfer", label: "Kupfer", emoji: "🥉", bucketId: "leiter" },
          { id: "eisen", label: "Eisen", emoji: "🔩", bucketId: "leiter" },
          { id: "alu", label: "Aluminium", emoji: "🥫", bucketId: "leiter" },
          { id: "holz", label: "Holz", emoji: "🪵", bucketId: "isolator" },
          { id: "plastik", label: "Plastik", emoji: "🧴", bucketId: "isolator" },
          { id: "wolle", label: "Wolle", emoji: "🧶", bucketId: "isolator" },
          { id: "luft", label: "Luft", emoji: "💨", bucketId: "isolator" }
        ]
      },
      {
        id: "ph-5-os-3",
        title: "Energiequellen",
        instruction: "Erneuerbar oder Nicht erneuerbar?",
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "ern", label: "Erneuerbar", color: "#10b981" },
          { id: "nicht", label: "Nicht erneuerbar", color: "#64748b" }
        ],
        items: [
          { id: "sonne", label: "Sonnenenergie", emoji: "☀️", bucketId: "ern" },
          { id: "wind", label: "Windenergie", emoji: "🌬️", bucketId: "ern" },
          { id: "wasser", label: "Wasserkraft", emoji: "🌊", bucketId: "ern" },
          { id: "kohle", label: "Kohle", emoji: "🪨", bucketId: "nicht" },
          { id: "oel", label: "Erdöl", emoji: "🛢️", bucketId: "nicht" },
          { id: "gas", label: "Erdgas", emoji: "🔥", bucketId: "nicht" },
          { id: "uran", label: "Uran", emoji: "☢️", bucketId: "nicht" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-5-sr-1",
        title: "Physik-Sprint K5 - Kräfte",
        instruction: "Wähle die richtige Antwort.",
        scenes: [
          {
            id: "ph-5-sr-1-s1",
            title: "Kraftmesser",
            prompt: "Womit misst man die Kraft?",
            sceneType: "community",
            visual: { icon: "📏", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Waage" },
              { id: "b", label: "Thermometer" },
              { id: "c", label: "Kraftmesser" },
              { id: "d", label: "Maßband" }
            ],
            correctChoiceId: "c",
            successFeedback: "Richtig! Der Kraftmesser (mit Spiralfeder) misst die Kraft.",
            failFeedback: "Falsch! Die Kraft wird mit einem Kraftmesser gemessen."
          },
          {
            id: "ph-5-sr-1-s2",
            title: "Schwerkraft",
            prompt: "Welche Kraft zieht uns zur Erde?",
            sceneType: "nature",
            visual: { icon: "🌍", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: "Reibungskraft" },
              { id: "b", label: "Magnetkraft" },
              { id: "c", label: "Gewichtskraft" },
              { id: "d", label: "Spannkraft" }
            ],
            correctChoiceId: "c",
            successFeedback: "Korrekt! Die Gewichtskraft (Schwerkraft) zieht Massen an.",
            failFeedback: "Nicht ganz. Es ist die Gewichtskraft."
          },
          {
            id: "ph-5-sr-1-s3",
            title: "Einheit",
            prompt: "In welcher Einheit wird die Kraft angegeben?",
            sceneType: "community",
            visual: { icon: "🍎", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Kilogramm (kg)" },
              { id: "b", label: "Newton (N)" },
              { id: "c", label: "Joule (J)" },
              { id: "d", label: "Meter (m)" }
            ],
            correctChoiceId: "b",
            successFeedback: "Stimmt! 1 Newton entspricht der Gewichtskraft von ca. 100g.",
            failFeedback: "Leider falsch. Die Einheit der Kraft ist Newton (N)."
          },
          {
            id: "ph-5-sr-1-s4",
            title: "Bremsen",
            prompt: "Was bremst einen rollenden Ball auf dem Rasen?",
            sceneType: "nature",
            visual: { icon: "⚽", bg: "#78350f", accent: "#f59e0b" },
            choices: [
              { id: "a", label: "Luftdruck" },
              { id: "b", label: "Gewichtskraft" },
              { id: "c", label: "Reibungskraft" },
              { id: "d", label: "Magnetkraft" }
            ],
            correctChoiceId: "c",
            successFeedback: "Perfekt! Die Reibungskraft wirkt der Bewegung entgegen.",
            failFeedback: "Falsch. Die Reibung bremst den Ball."
          }
        ]
      },
      {
        id: "ph-5-sr-2",
        title: "Physik-Sprint K5 - Energie",
        instruction: "Wähle die richtige Antwort zur Energie.",
        scenes: [
          {
            id: "ph-5-sr-2-s1",
            title: "Fahrrad",
            prompt: "Welche Energie hat ein fahrendes Fahrrad?",
            sceneType: "community",
            visual: { icon: "🚲", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Lageenergie" },
              { id: "b", label: "Kinetische Energie" },
              { id: "c", label: "Wärmeenergie" },
              { id: "d", label: "Spannenergie" }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Kinetische Energie ist die Bewegungsenergie.",
            failFeedback: "Nicht ganz. Bewegung bedeutet Kinetische Energie."
          },
          {
            id: "ph-5-sr-2-s2",
            title: "Feder",
            prompt: "Welche Energie speichert eine zusammengedrückte Feder?",
            sceneType: "community",
            visual: { icon: "🌀", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Spannenergie" },
              { id: "b", label: "Lichtenergie" },
              { id: "c", label: "Chemische Energie" },
              { id: "d", label: "Lageenergie" }
            ],
            correctChoiceId: "a",
            successFeedback: "Korrekt! Die Feder speichert Spannenergie.",
            failFeedback: "Falsch, es ist die Spannenergie."
          },
          {
            id: "ph-5-sr-2-s3",
            title: "Erhaltung",
            prompt: "Was besagt der Energieerhaltungssatz?",
            sceneType: "nature",
            visual: { icon: "♻️", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: "Energie wird verbraucht." },
              { id: "b", label: "Energie entsteht aus dem Nichts." },
              { id: "c", label: "Energie wird nur umgewandelt." },
              { id: "d", label: "Energie verschwindet." }
            ],
            correctChoiceId: "c",
            successFeedback: "Genau! Energie geht nie verloren.",
            failFeedback: "Leider falsch. Energie kann nur umgewandelt werden."
          },
          {
            id: "ph-5-sr-2-s4",
            title: "Einheit",
            prompt: "In welcher Einheit wird Energie gemessen?",
            sceneType: "community",
            visual: { icon: "⚡", bg: "#78350f", accent: "#f59e0b" },
            choices: [
              { id: "a", label: "Volt" },
              { id: "b", label: "Newton" },
              { id: "c", label: "Pascal" },
              { id: "d", label: "Joule" }
            ],
            correctChoiceId: "d",
            successFeedback: "Stimmt! Energie = Joule (J).",
            failFeedback: "Falsch, die Einheit ist Joule (J)."
          }
        ]
      },
      {
        id: "ph-5-sr-3",
        title: "Physik-Sprint K5 - Wärme & Maschinen",
        instruction: "Beantworte Fragen zu Wärme und Maschinen.",
        scenes: [
          {
            id: "ph-5-sr-3-s1",
            title: "Wippe",
            prompt: "Eine Wippe auf dem Spielplatz ist ein Beispiel für einen...",
            sceneType: "community",
            visual: { icon: "⚖️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Flaschenzug" },
              { id: "b", label: "Zweiseitigen Hebel" },
              { id: "c", label: "Einseitigen Hebel" },
              { id: "d", label: "Keil" }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Der Drehpunkt liegt zwischen den Kräften.",
            failFeedback: "Nicht ganz, es ist ein zweiseitiger Hebel."
          },
          {
            id: "ph-5-sr-3-s2",
            title: "Eis",
            prompt: "Bei welcher Temperatur schmilzt Eis (Celsius)?",
            sceneType: "nature",
            visual: { icon: "🧊", bg: "#0891b2", accent: "#22d3ee" },
            choices: [
              { id: "a", label: "100°C" },
              { id: "b", label: "-10°C" },
              { id: "c", label: "0°C" },
              { id: "d", label: "50°C" }
            ],
            correctChoiceId: "c",
            successFeedback: "Korrekt! 0°C ist der Schmelzpunkt von Wasser.",
            failFeedback: "Falsch. Eis schmilzt bei 0°C."
          },
          {
            id: "ph-5-sr-3-s3",
            title: "Ausdehnung",
            prompt: "Was passiert mit den meisten Stoffen, wenn man sie erhitzt?",
            sceneType: "community",
            visual: { icon: "🔥", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: "Sie dehnen sich aus." },
              { id: "b", label: "Sie ziehen sich zusammen." },
              { id: "c", label: "Sie werden schwerer." },
              { id: "d", label: "Sie werden unsichtbar." }
            ],
            correctChoiceId: "a",
            successFeedback: "Genau! Teilchen bewegen sich schneller und brauchen mehr Platz.",
            failFeedback: "Leider falsch. Sie dehnen sich aus."
          },
          {
            id: "ph-5-sr-3-s4",
            title: "Rolle",
            prompt: "Was ändert eine feste Rolle?",
            sceneType: "community",
            visual: { icon: "🏗️", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Die Größe der Kraft" },
              { id: "b", label: "Die Richtung der Kraft" },
              { id: "c", label: "Das Gewicht der Last" },
              { id: "d", label: "Die Masse" }
            ],
            correctChoiceId: "b",
            successFeedback: "Stimmt! Sie macht die Arbeit leichter (z.B. nach unten ziehen).",
            failFeedback: "Falsch, sie ändert nur die Zugrichtung."
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-5-cb-1",
        title: "Kräfte der Natur",
        instruction: "Ordne die Kräfte von der schwächsten zur stärksten (Beispielwerte).",
        hint: "Reibung beim Schieben ist meist kleiner als das volle Gewicht.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "reib-p", label: "Reibungskraft (Heft auf Tisch)", emoji: "🤝" },
          { id: "gewicht-p", label: "Gewichtskraft (Auto)", emoji: "⬇️" },
          { id: "feder-p", label: "Federkraft (Kugelschreiber)", emoji: "🌀" },
          { id: "magnet-p", label: "Magnetkraft (Kühlschrank)", emoji: "🧲" }
        ],
        slots: [
          { id: "slot-1", label: "1. Schwächste" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Stärkste" }
        ],
        solution: ["feder-p", "reib-p", "magnet-p", "gewicht-p"]
      },
      {
        id: "ph-5-cb-2",
        title: "Temperaturen",
        instruction: "Ordne von kalt nach heiß.",
        hint: "Wasser kocht bei 100°C.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "eis", label: "Schmelzendes Eis (0°C)", emoji: "🧊" },
          { id: "zimmer", label: "Zimmertemperatur (20°C)", emoji: "🛋️" },
          { id: "sonne", label: "Sonnenoberfläche (5500°C)", emoji: "☀️" },
          { id: "kochen", label: "Kochendes Wasser (100°C)", emoji: "♨️" }
        ],
        slots: [
          { id: "slot-1", label: "1. Kalt" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Heiß" }
        ],
        solution: ["eis", "zimmer", "kochen", "sonne"]
      },
      {
        id: "ph-5-cb-3",
        title: "Geschwindigkeiten",
        instruction: "Ordne die Fortbewegungsmittel von langsam nach schnell.",
        hint: "Ein Flugzeug ist schneller als ein Auto.",
        theme: { bg: "#0f172a", accent: "#3b82f6", card: "#1c1917" },
        parts: [
          { id: "auto", label: "Auto auf Autobahn", emoji: "🚗" },
          { id: "fuss", label: "Fußgänger", emoji: "🚶" },
          { id: "flug", label: "Verkehrsflugzeug", emoji: "✈️" },
          { id: "rad", label: "Fahrrad", emoji: "🚲" }
        ],
        slots: [
          { id: "slot-1", label: "1. Langsamste" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Schnellste" }
        ],
        solution: ["fuss", "rad", "auto", "flug"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-5-mr-1",
        title: "Physik-Begriffe merken",
        instruction: "Merke dir die Energieformen – wähle sie danach aus!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "kin2", label: "Kinetische Energie", emoji: "⚡" },
          { id: "pot2", label: "Potenzielle Energie", emoji: "🧗" },
          { id: "waerme2", label: "Wärmeenergie", emoji: "🔥" },
          { id: "elek2", label: "Elektrische Energie", emoji: "💡" }
        ],
        decoyItems: [
          { id: "dec1", label: "Dichte", emoji: "🧱" },
          { id: "dec2", label: "Volumen", emoji: "📦" },
          { id: "dec3", label: "Masse", emoji: "⚖️" },
          { id: "dec4", label: "Druck", emoji: "🔩" },
          { id: "dec5", label: "Temperatur", emoji: "🌡️" }
        ]
      },
      {
        id: "ph-5-mr-2",
        title: "Maschinen-Radar",
        instruction: "Merke dir die einfachen Maschinen – wähle sie danach aus!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#3b82f6", radar: "#1e3a5f" },
        targetItems: [
          { id: "hebel", label: "Hebel", emoji: "🕹️" },
          { id: "rolle", label: "Feste Rolle", emoji: "🏗️" },
          { id: "schief", label: "Schiefe Ebene", emoji: "📐" },
          { id: "keil", label: "Keil", emoji: "🪓" }
        ],
        decoyItems: [
          { id: "dec1", label: "Magnet", emoji: "🧲" },
          { id: "dec2", label: "Batterie", emoji: "🔋" },
          { id: "dec3", label: "Thermometer", emoji: "🌡️" },
          { id: "dec4", label: "Kompass", emoji: "🧭" },
          { id: "dec5", label: "Linse", emoji: "🔍" }
        ]
      },
      {
        id: "ph-5-mr-3",
        title: "Wärmequellen merken",
        instruction: "Merke dir Dinge, die Wärme abgeben!",
        flashDurationMs: 3500,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "sonne", label: "Sonne", emoji: "☀️" },
          { id: "feuer", label: "Lagerfeuer", emoji: "🔥" },
          { id: "heizung", label: "Heizkörper", emoji: "♨️" },
          { id: "reibung", label: "Reibung", emoji: "👏" }
        ],
        decoyItems: [
          { id: "dec1", label: "Eiswürfel", emoji: "🧊" },
          { id: "dec2", label: "Spiegel", emoji: "🪞" },
          { id: "dec3", label: "Schatten", emoji: "👤" },
          { id: "dec4", label: "Schnee", emoji: "❄️" },
          { id: "dec5", label: "Wind", emoji: "🌬️" }
        ]
      }
    ]
  },
  6: {
    grade: 6,
    meteorCatch: [
      {
        id: "ph-6-mc-1",
        title: "Elektrische Leiter",
        prompt: "Fange nur Stoffe ein, die Strom leiten!",
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#eab308", accent: "#fde047" },
        correctItems: [
          { id: "kupfer", label: "Kupfer", emoji: "🥉" },
          { id: "eisen", label: "Eisen", emoji: "🔩" },
          { id: "silber", label: "Silber", emoji: "🥈" },
          { id: "gold", label: "Gold", emoji: "🥇" },
          { id: "alu", label: "Aluminium", emoji: "🥫" },
          { id: "salz", label: "Salzwasser", emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x1", label: "Holz", emoji: "🪵" },
          { id: "x2", label: "Gummi", emoji: "🛞" },
          { id: "x3", label: "Plastik", emoji: "🧴" },
          { id: "x4", label: "Glas", emoji: "🪟" }
        ]
      },
      {
        id: "ph-6-mc-2",
        title: "Magnetische Stoffe",
        prompt: "Fange nur magnetische Materialien ein!",
        goal: 4,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "eisen", label: "Eisen", emoji: "🔩" },
          { id: "nickel", label: "Nickel", emoji: "🪙" },
          { id: "kobalt", label: "Kobalt", emoji: "🪨" },
          { id: "stahl", label: "Stahl", emoji: "🏗️" }
        ],
        wrongItems: [
          { id: "x5", label: "Kupfer", emoji: "🥉" },
          { id: "x6", label: "Aluminium", emoji: "🥫" },
          { id: "x7", label: "Silber", emoji: "🥈" },
          { id: "x8", label: "Gold", emoji: "🥇" }
        ]
      },
      {
        id: "ph-6-mc-3",
        title: "Druck erhöhen",
        prompt: "Fange Objekte ein, die viel Druck erzeugen!",
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#a855f7", accent: "#c084fc" },
        correctItems: [
          { id: "nadel", label: "Nadel", emoji: "🪡" },
          { id: "messer", label: "Scharfes Messer", emoji: "🔪" },
          { id: "nagel", label: "Nagel", emoji: "📌" },
          { id: "absatz", label: "Stöckelschuh", emoji: "👠" },
          { id: "stift", label: "Spitzer Bleistift", emoji: "✏️" }
        ],
        wrongItems: [
          { id: "x9", label: "Schneeschuh", emoji: "🥾" },
          { id: "x10", label: "Breiter Reifen", emoji: "🚜" },
          { id: "x11", label: "Skier", emoji: "🎿" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-6-os-1",
        title: "Schwimmen oder Sinken",
        instruction: "Sortiere, ob der Gegenstand in Wasser schwimmt oder sinkt.",
        theme: { bg: "#0f172a", orbit: "#3b82f6", accent: "#60a5fa" },
        buckets: [
          { id: "schwimmt", label: "Schwimmt", color: "#10b981" },
          { id: "sinkt", label: "Sinkt", color: "#ef4444" }
        ],
        items: [
          { id: "holz", label: "Holzblock", emoji: "🪵", bucketId: "schwimmt" },
          { id: "korken", label: "Korken", emoji: "🍾", bucketId: "schwimmt" },
          { id: "luft", label: "Luftballon", emoji: "🎈", bucketId: "schwimmt" },
          { id: "eisen", label: "Eisennagel", emoji: "📌", bucketId: "sinkt" },
          { id: "stein", label: "Stein", emoji: "🪨", bucketId: "sinkt" },
          { id: "gold", label: "Goldmünze", emoji: "🪙", bucketId: "sinkt" }
        ]
      },
      {
        id: "ph-6-os-2",
        title: "Stromkreis-Teile",
        instruction: "Ist es eine Stromquelle oder ein Verbraucher?",
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "quelle", label: "Stromquelle", color: "#f59e0b" },
          { id: "verbr", label: "Verbraucher", color: "#a855f7" }
        ],
        items: [
          { id: "batt", label: "Batterie", emoji: "🔋", bucketId: "quelle" },
          { id: "akku", label: "Akku", emoji: "📱", bucketId: "quelle" },
          { id: "solar", label: "Solarzelle", emoji: "☀️", bucketId: "quelle" },
          { id: "lampe", label: "Glühlampe", emoji: "💡", bucketId: "verbr" },
          { id: "motor", label: "Elektromotor", emoji: "⚙️", bucketId: "verbr" },
          { id: "heiz", label: "Heizspirale", emoji: "♨️", bucketId: "verbr" },
          { id: "led", label: "LED", emoji: "🚦", bucketId: "verbr" }
        ]
      },
      {
        id: "ph-6-os-3",
        title: "Pole des Magneten",
        instruction: "Ziehen sie sich an oder stoßen sie sich ab?",
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "anziehung", label: "Ziehen sich an", color: "#10b981" },
          { id: "abstoss", label: "Stoßen sich ab", color: "#ef4444" }
        ],
        items: [
          { id: "ns", label: "Nord und Süd", emoji: "🧲", bucketId: "anziehung" },
          { id: "sn", label: "Süd und Nord", emoji: "🧲", bucketId: "anziehung" },
          { id: "nn", label: "Nord und Nord", emoji: "🛑", bucketId: "abstoss" },
          { id: "ss", label: "Süd und Süd", emoji: "🛑", bucketId: "abstoss" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-6-sr-1",
        title: "Physik-Sprint K6 - Druck",
        instruction: "Beantworte Fragen zum Thema Druck.",
        scenes: [
          {
            id: "ph-6-sr-1-s1",
            title: "Druck berechnen",
            prompt: "Wie lautet die Formel für den Druck (p)?",
            sceneType: "community",
            visual: { icon: "📐", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "p = F * A" },
              { id: "b", label: "p = m / V" },
              { id: "c", label: "p = F / A" },
              { id: "d", label: "p = m * g" }
            ],
            correctChoiceId: "c",
            successFeedback: "Richtig! Druck = Kraft geteilt durch Fläche.",
            failFeedback: "Nicht ganz. p = F / A."
          },
          {
            id: "ph-6-sr-1-s2",
            title: "Schneeschuhe",
            prompt: "Warum sinkt man mit Schneeschuhen im Schnee nicht ein?",
            sceneType: "nature",
            visual: { icon: "🥾", bg: "#0f766e", accent: "#2dd4bf" },
            choices: [
              { id: "a", label: "Weil die Masse kleiner wird." },
              { id: "b", label: "Weil die Fläche größer und der Druck kleiner ist." },
              { id: "c", label: "Weil die Schuhe warm sind." },
              { id: "d", label: "Weil die Kraft größer wird." }
            ],
            correctChoiceId: "b",
            successFeedback: "Korrekt! Größere Fläche = kleinerer Druck.",
            failFeedback: "Falsch. Die größere Fläche verringert den Druck."
          },
          {
            id: "ph-6-sr-1-s3",
            title: "Luftdruck",
            prompt: "Was misst ein Barometer?",
            sceneType: "nature",
            visual: { icon: "🌤️", bg: "#0369a1", accent: "#38bdf8" },
            choices: [
              { id: "a", label: "Temperatur" },
              { id: "b", label: "Luftdruck" },
              { id: "c", label: "Schweredruck" },
              { id: "d", label: "Windgeschwindigkeit" }
            ],
            correctChoiceId: "b",
            successFeedback: "Genau! Es misst den atmosphärischen Druck.",
            failFeedback: "Leider falsch. Ein Barometer misst den Luftdruck."
          },
          {
            id: "ph-6-sr-1-s4",
            title: "Auftrieb",
            prompt: "Wann schwimmt ein Körper im Wasser?",
            sceneType: "nature",
            visual: { icon: "🚢", bg: "#1e40af", accent: "#60a5fa" },
            choices: [
              { id: "a", label: "Wenn Auftrieb = Gewichtskraft" },
              { id: "b", label: "Wenn Auftrieb < Gewichtskraft" },
              { id: "c", label: "Wenn er keine Masse hat" },
              { id: "d", label: "Wenn das Wasser kalt ist" }
            ],
            correctChoiceId: "a",
            successFeedback: "Stimmt! Kräftegleichgewicht lässt den Körper schwimmen.",
            failFeedback: "Falsch. Er schwimmt, wenn beide Kräfte gleich groß sind."
          }
        ]
      },
      {
        id: "ph-6-sr-2",
        title: "Physik-Sprint K6 - Elektrizität",
        instruction: "Beantworte Fragen zur Elektrizitätslehre.",
        scenes: [
          {
            id: "ph-6-sr-2-s1",
            title: "Stromkreis",
            prompt: "Aus welchen 3 Dingen besteht ein einfacher Stromkreis?",
            sceneType: "community",
            visual: { icon: "🔋", bg: "#854d0e", accent: "#facc15" },
            choices: [
              { id: "a", label: "Batterie, Wasser, Schalter" },
              { id: "b", label: "Spule, Magnet, Kabel" },
              { id: "c", label: "Stromquelle, Leiter, Verbraucher" },
              { id: "d", label: "Lampe, Motor, Heizung" }
            ],
            correctChoiceId: "c",
            successFeedback: "Richtig! Ohne diese drei gibt es keinen Stromfluss.",
            failFeedback: "Falsch. Quelle, Leiter und Verbraucher (Lampe) sind nötig."
          },
          {
            id: "ph-6-sr-2-s2",
            title: "Spannung",
            prompt: "Was gibt die elektrische Spannung an und in welcher Einheit?",
            sceneType: "community",
            visual: { icon: "⚡", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: "Den Antrieb des Stroms in Volt (V)" },
              { id: "b", label: "Die Menge der Elektronen in Ampere (A)" },
              { id: "c", label: "Den Widerstand in Ohm (Ω)" },
              { id: "d", label: "Die Leistung in Watt (W)" }
            ],
            correctChoiceId: "a",
            successFeedback: "Korrekt! Volt ist die Einheit der Spannung.",
            failFeedback: "Nicht ganz. Spannung wird in Volt gemessen."
          },
          {
            id: "ph-6-sr-2-s3",
            title: "Leiter",
            prompt: "Welches Material leitet elektrischen Strom besonders gut?",
            sceneType: "community",
            visual: { icon: "🥉", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Holz" },
              { id: "b", label: "Kupfer" },
              { id: "c", label: "Glas" },
              { id: "d", label: "Plastik" }
            ],
            correctChoiceId: "b",
            successFeedback: "Genau! Metalle wie Kupfer sind exzellente Leiter.",
            failFeedback: "Leider falsch. Kupfer ist der gute Leiter."
          },
          {
            id: "ph-6-sr-2-s4",
            title: "Schaltung",
            prompt: "Was passiert in einer Reihenschaltung, wenn eine Lampe kaputt geht?",
            sceneType: "community",
            visual: { icon: "💡", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Die anderen leuchten heller." },
              { id: "b", label: "Nichts, sie leuchten weiter." },
              { id: "c", label: "Alle Lampen gehen aus." },
              { id: "d", label: "Sie beginnen zu blinken." }
            ],
            correctChoiceId: "c",
            successFeedback: "Stimmt! Der Stromkreis ist dann unterbrochen.",
            failFeedback: "Falsch. Der Stromkreis ist unterbrochen, alle gehen aus."
          }
        ]
      },
      {
        id: "ph-6-sr-3",
        title: "Physik-Sprint K6 - Magnetismus",
        instruction: "Beantworte Fragen zu Magneten.",
        scenes: [
          {
            id: "ph-6-sr-3-s1",
            title: "Pole",
            prompt: "Was passiert, wenn sich zwei Nordpole nähern?",
            sceneType: "community",
            visual: { icon: "🧲", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: "Sie ziehen sich an." },
              { id: "b", label: "Sie stoßen sich ab." },
              { id: "c", label: "Sie werden entmagnetisiert." },
              { id: "d", label: "Nichts passiert." }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Gleichnamige Pole stoßen sich ab.",
            failFeedback: "Falsch. Sie stoßen sich ab."
          },
          {
            id: "ph-6-sr-3-s2",
            title: "Material",
            prompt: "Welches der folgenden Metalle ist magnetisch?",
            sceneType: "community",
            visual: { icon: "🔩", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Aluminium" },
              { id: "b", label: "Kupfer" },
              { id: "c", label: "Eisen" },
              { id: "d", label: "Silber" }
            ],
            correctChoiceId: "c",
            successFeedback: "Korrekt! Eisen, Nickel und Kobalt sind ferromagnetisch.",
            failFeedback: "Nicht ganz. Eisen ist das magnetische Metall."
          },
          {
            id: "ph-6-sr-3-s3",
            title: "Teilen",
            prompt: "Was passiert, wenn man einen Stabmagneten in der Mitte zerbricht?",
            sceneType: "community",
            visual: { icon: "⚡", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Man erhält einen Nordpol und einen Südpol." },
              { id: "b", label: "Der Magnet verliert seine Kraft." },
              { id: "c", label: "Man erhält zwei neue, vollständige Magnete." },
              { id: "d", label: "Er wird heiß." }
            ],
            correctChoiceId: "c",
            successFeedback: "Genau! Jeder Teil hat wieder einen Nord- und Südpol.",
            failFeedback: "Leider falsch. Es entstehen zwei komplette neue Magnete."
          },
          {
            id: "ph-6-sr-3-s4",
            title: "Erde",
            prompt: "Wo befindet sich der magnetische Südpol der Erde?",
            sceneType: "nature",
            visual: { icon: "🌍", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: "Am Äquator" },
              { id: "b", label: "In der Nähe des geografischen Nordpols" },
              { id: "c", label: "In der Nähe des geografischen Südpols" },
              { id: "d", label: "Im Erdkern" }
            ],
            correctChoiceId: "b",
            successFeedback: "Stimmt! Deshalb zeigt die Nord-Nadel des Kompasses dorthin.",
            failFeedback: "Falsch. Er ist nahe dem geografischen Nordpol."
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-6-cb-1",
        title: "Dichte von Stoffen",
        instruction: "Ordne von der geringsten zur höchsten Dichte.",
        hint: "Gold ist extrem schwer für sein Volumen.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "wasser", label: "Wasser (1 g/cm³)", emoji: "💧" },
          { id: "gold", label: "Gold (19,3 g/cm³)", emoji: "🪙" },
          { id: "holz", label: "Holz (ca. 0,6 g/cm³)", emoji: "🪵" },
          { id: "eisen", label: "Eisen (7,9 g/cm³)", emoji: "🔩" }
        ],
        slots: [
          { id: "slot-1", label: "1. Geringste Dichte" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Höchste Dichte" }
        ],
        solution: ["holz", "wasser", "eisen", "gold"]
      },
      {
        id: "ph-6-cb-2",
        title: "Leitfähigkeit",
        instruction: "Ordne vom schlechtesten zum besten elektrischen Leiter.",
        hint: "Metalle leiten am besten, Gummi isoliert.",
        theme: { bg: "#0f172a", accent: "#8b5cf6", card: "#1c1917" },
        parts: [
          { id: "salz", label: "Salzwasser (mäßiger Leiter)", emoji: "🌊" },
          { id: "gummi", label: "Gummi (Isolator)", emoji: "🛞" },
          { id: "eisen", label: "Eisen (guter Leiter)", emoji: "🏗️" },
          { id: "kupfer", label: "Kupfer (sehr guter Leiter)", emoji: "🥉" }
        ],
        slots: [
          { id: "slot-1", label: "1. Schlecht (Isolator)" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Bester Leiter" }
        ],
        solution: ["gummi", "salz", "eisen", "kupfer"]
      },
      {
        id: "ph-6-cb-3",
        title: "Druck im Alltag",
        instruction: "Ordne von geringem Druck auf den Boden zu hohem Druck.",
        hint: "Je spitzer, desto höher der Druck.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "nadel", label: "Stecknadelspitze", emoji: "📌" },
          { id: "schnee", label: "Schneeschuhe", emoji: "🥾" },
          { id: "absatz", label: "Stöckelschuh", emoji: "👠" },
          { id: "turn", label: "Turnschuh", emoji: "👟" }
        ],
        slots: [
          { id: "slot-1", label: "1. Geringster Druck" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Höchster Druck" }
        ],
        solution: ["schnee", "turn", "absatz", "nadel"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-6-mr-1",
        title: "Magnetische Metalle",
        instruction: "Merke dir die ferromagnetischen Stoffe!",
        flashDurationMs: 4000,
        selectionLimit: 3,
        theme: { bg: "#0f172a", accent: "#8b5cf6", radar: "#4c1d95" },
        targetItems: [
          { id: "eisen", label: "Eisen", emoji: "🔩" },
          { id: "nickel", label: "Nickel", emoji: "🪙" },
          { id: "kobalt", label: "Kobalt", emoji: "🪨" }
        ],
        decoyItems: [
          { id: "dec1", label: "Kupfer", emoji: "🥉" },
          { id: "dec2", label: "Aluminium", emoji: "🥫" },
          { id: "dec3", label: "Gold", emoji: "🥇" },
          { id: "dec4", label: "Silber", emoji: "🥈" },
          { id: "dec5", label: "Holz", emoji: "🪵" }
        ]
      },
      {
        id: "ph-6-mr-2",
        title: "Gute Leiter",
        instruction: "Merke dir die guten elektrischen Leiter!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#facc15", radar: "#854d0e" },
        targetItems: [
          { id: "kupfer", label: "Kupfer", emoji: "🥉" },
          { id: "alu", label: "Aluminium", emoji: "🥫" },
          { id: "silber", label: "Silber", emoji: "🥈" },
          { id: "salz", label: "Salzwasser", emoji: "🌊" }
        ],
        decoyItems: [
          { id: "dec1", label: "Plastik", emoji: "🧴" },
          { id: "dec2", label: "Gummi", emoji: "🛞" },
          { id: "dec3", label: "Glas", emoji: "🪟" },
          { id: "dec4", label: "Holz", emoji: "🪵" },
          { id: "dec5", label: "Papier", emoji: "📄" }
        ]
      },
      {
        id: "ph-6-mr-3",
        title: "Hoher Druck",
        instruction: "Merke dir Gegenstände, die viel Druck auf den Boden ausüben!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#ef4444", radar: "#7f1d1d" },
        targetItems: [
          { id: "nadel", label: "Stecknadel", emoji: "📌" },
          { id: "messer", label: "Scharfes Messer", emoji: "🔪" },
          { id: "nagel", label: "Eisennagel", emoji: "🔨" },
          { id: "absatz", label: "Stöckelschuh", emoji: "👠" }
        ],
        decoyItems: [
          { id: "dec1", label: "Schneeschuh", emoji: "🥾" },
          { id: "dec2", label: "Traktorreifen", emoji: "🚜" },
          { id: "dec3", label: "Skier", emoji: "🎿" },
          { id: "dec4", label: "Luftballon", emoji: "🎈" },
          { id: "dec5", label: "Kissen", emoji: "🛌" }
        ]
      }
    ]
  },
  7: {
    grade: 7,
    meteorCatch: [
      {
        id: "ph-7-mc-1",
        title: "Lichtquellen",
        prompt: "Fange nur selbstleuchtende Lichtquellen ein!",
        goal: 6,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#f59e0b", accent: "#fbbf24" },
        correctItems: [
          { id: "sonne", label: "Sonne", emoji: "☀️" },
          { id: "kerze", label: "Kerze", emoji: "🕯️" },
          { id: "lampe", label: "Glühlampe", emoji: "💡" },
          { id: "stern", label: "Stern", emoji: "⭐" },
          { id: "feuer", label: "Lagerfeuer", emoji: "🔥" },
          { id: "led", label: "LED-Diode", emoji: "🚦" }
        ],
        wrongItems: [
          { id: "x1", label: "Mond", emoji: "🌕" },
          { id: "x2", label: "Spiegel", emoji: "🪞" },
          { id: "x3", label: "Buch", emoji: "📖" },
          { id: "x4", label: "Reflektor", emoji: "🚲" }
        ]
      },
      {
        id: "ph-7-mc-2",
        title: "Schallerzeuger",
        prompt: "Fange nur Dinge ein, die Schall erzeugen!",
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#3b82f6", accent: "#60a5fa" },
        correctItems: [
          { id: "stimmgabel", label: "Stimmgabel", emoji: "🪚" },
          { id: "lautsprecher", label: "Lautsprecher", emoji: "🔊" },
          { id: "gitarre", label: "Gitarrensaite", emoji: "🎸" },
          { id: "trommel", label: "Trommel", emoji: "🥁" },
          { id: "stimme", label: "Menschliche Stimme", emoji: "🗣️" }
        ],
        wrongItems: [
          { id: "x5", label: "Vakuum", emoji: "🌌" },
          { id: "x6", label: "Lichtstrahl", emoji: "🔦" },
          { id: "x7", label: "Schatten", emoji: "👤" }
        ]
      },
      {
        id: "ph-7-mc-3",
        title: "Arbeit & Leistung",
        prompt: "Fange nur Einheiten für Arbeit und Leistung ein!",
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#10b981", accent: "#34d399" },
        correctItems: [
          { id: "joule", label: "Joule (J)", emoji: "⚡" },
          { id: "watt", label: "Watt (W)", emoji: "🔌" },
          { id: "kilowatt", label: "Kilowatt (kW)", emoji: "🏭" },
          { id: "newtonmeter", label: "Newtonmeter (Nm)", emoji: "📏" }
        ],
        wrongItems: [
          { id: "x8", label: "Newton (N)", emoji: "🍎" },
          { id: "x9", label: "Volt (V)", emoji: "🔋" },
          { id: "x10", label: "Ampere (A)", emoji: "🌊" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-7-os-1",
        title: "Lichtdurchlässigkeit",
        instruction: "Ist das Material lichtdurchlässig oder undurchlässig?",
        theme: { bg: "#0f172a", orbit: "#f59e0b", accent: "#fbbf24" },
        buckets: [
          { id: "durch", label: "Lichtdurchlässig", color: "#3b82f6" },
          { id: "undurch", label: "Lichtundurchlässig", color: "#64748b" }
        ],
        items: [
          { id: "glas", label: "Fensterglas", emoji: "🪟", bucketId: "durch" },
          { id: "wasser", label: "Klares Wasser", emoji: "💧", bucketId: "durch" },
          { id: "luft", label: "Luft", emoji: "💨", bucketId: "durch" },
          { id: "holz", label: "Holzbrett", emoji: "🪵", bucketId: "undurch" },
          { id: "stein", label: "Ziegelstein", emoji: "🧱", bucketId: "undurch" },
          { id: "pappe", label: "Karton", emoji: "📦", bucketId: "undurch" }
        ]
      },
      {
        id: "ph-7-os-2",
        title: "Töne sortieren",
        instruction: "Gehört die Eigenschaft zu einem hohen oder tiefen Ton?",
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "hoch", label: "Hoher Ton", color: "#ec4899" },
          { id: "tief", label: "Tiefer Ton", color: "#3b82f6" }
        ],
        items: [
          { id: "kurz", label: "Kurze Schallwellen", emoji: "〰️", bucketId: "hoch" },
          { id: "schnell", label: "Schnelle Schwingung", emoji: "⚡", bucketId: "hoch" },
          { id: "hfrequenz", label: "Hohe Frequenz", emoji: "📈", bucketId: "hoch" },
          { id: "lang", label: "Lange Schallwellen", emoji: "🌊", bucketId: "tief" },
          { id: "langsam", label: "Langsame Schwingung", emoji: "🐢", bucketId: "tief" },
          { id: "nfrequenz", label: "Niedrige Frequenz", emoji: "📉", bucketId: "tief" }
        ]
      },
      {
        id: "ph-7-os-3",
        title: "Arbeit vs. Leistung",
        instruction: "Gehört der Begriff zur mechanischen Arbeit oder zur Leistung?",
        theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
        buckets: [
          { id: "arbeit", label: "Arbeit (W)", color: "#f59e0b" },
          { id: "leistung", label: "Leistung (P)", color: "#ef4444" }
        ],
        items: [
          { id: "joule", label: "Einheit: Joule (J)", emoji: "⚡", bucketId: "arbeit" },
          { id: "kraftweg", label: "Kraft mal Weg", emoji: "📏", bucketId: "arbeit" },
          { id: "hub", label: "Hubarbeit", emoji: "🏗️", bucketId: "arbeit" },
          { id: "watt", label: "Einheit: Watt (W)", emoji: "💡", bucketId: "leistung" },
          { id: "arbeittime", label: "Arbeit pro Zeit", emoji: "⏱️", bucketId: "leistung" },
          { id: "schnell", label: "Wie schnell Arbeit verrichtet wird", emoji: "🏃", bucketId: "leistung" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-7-sr-1",
        title: "Physik-Sprint K7 - Optik",
        instruction: "Löse Aufgaben zum Licht.",
        scenes: [
          {
            id: "ph-7-sr-1-s1",
            title: "Ausbreitung",
            prompt: "Wie breitet sich Licht im Vakuum aus?",
            sceneType: "nature",
            visual: { icon: "🔦", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "In Kurven" },
              { id: "b", label: "Geradlinig" },
              { id: "c", label: "Gar nicht" },
              { id: "d", label: "Zickzack" }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Lichtstrahlen verlaufen geradlinig.",
            failFeedback: "Falsch. Licht breitet sich geradlinig aus."
          },
          {
            id: "ph-7-sr-1-s2",
            title: "Reflexion",
            prompt: "Wie lautet das Reflexionsgesetz am ebenen Spiegel?",
            sceneType: "community",
            visual: { icon: "🪞", bg: "#0891b2", accent: "#22d3ee" },
            choices: [
              { id: "a", label: "Einfallswinkel = Ausfallswinkel" },
              { id: "b", label: "Einfallswinkel > Ausfallswinkel" },
              { id: "c", label: "Einfallswinkel < Ausfallswinkel" },
              { id: "d", label: "Es gibt keinen Ausfallswinkel" }
            ],
            correctChoiceId: "a",
            successFeedback: "Korrekt! α = α'",
            failFeedback: "Nicht ganz. Beide Winkel sind exakt gleich groß."
          },
          {
            id: "ph-7-sr-1-s3",
            title: "Linsen",
            prompt: "Was macht eine Sammellinse (konvexe Linse)?",
            sceneType: "community",
            visual: { icon: "🔍", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Sie streut das Licht." },
              { id: "b", label: "Sie bündelt das Licht in einem Brennpunkt." },
              { id: "c", label: "Sie verschluckt das Licht." },
              { id: "d", label: "Sie ändert die Farbe des Lichts." }
            ],
            correctChoiceId: "b",
            successFeedback: "Genau! Parallele Strahlen treffen sich im Brennpunkt.",
            failFeedback: "Leider falsch. Sie bündelt das Licht."
          },
          {
            id: "ph-7-sr-1-s4",
            title: "Brechung",
            prompt: "Warum sieht ein Strohhalm im Wasserglas 'geknickt' aus?",
            sceneType: "community",
            visual: { icon: "🥤", bg: "#0369a1", accent: "#38bdf8" },
            choices: [
              { id: "a", label: "Wegen der Lichtbrechung am Übergang Luft/Wasser" },
              { id: "b", label: "Wegen der Lichtreflexion" },
              { id: "c", label: "Das Wasser verbiegt ihn" },
              { id: "d", label: "Wegen der Streuung" }
            ],
            correctChoiceId: "a",
            successFeedback: "Stimmt! Licht ändert beim Medium-Wechsel die Richtung.",
            failFeedback: "Falsch. Das Phänomen nennt sich Lichtbrechung."
          }
        ]
      },
      {
        id: "ph-7-sr-2",
        title: "Physik-Sprint K7 - Akustik",
        instruction: "Beantworte Fragen zu Schall.",
        scenes: [
          {
            id: "ph-7-sr-2-s1",
            title: "Schall",
            prompt: "Was ist Schall physikalisch gesehen?",
            sceneType: "community",
            visual: { icon: "🔊", bg: "#854d0e", accent: "#facc15" },
            choices: [
              { id: "a", label: "Ein Magnetfeld" },
              { id: "b", label: "Eine mechanische Schwingung (Welle)" },
              { id: "c", label: "Ein Lichtstrahl" },
              { id: "d", label: "Radioaktivität" }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Teilchen stoßen sich gegenseitig an.",
            failFeedback: "Falsch. Schall ist eine mechanische Welle."
          },
          {
            id: "ph-7-sr-2-s2",
            title: "Vakuum",
            prompt: "Warum hört man im Weltraum (Vakuum) keine Explosionen?",
            sceneType: "nature",
            visual: { icon: "🌌", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Weil es zu kalt ist." },
              { id: "b", label: "Weil Schall ein Medium (z.B. Luft) zur Ausbreitung braucht." },
              { id: "c", label: "Weil die Sterne den Schall absorbieren." },
              { id: "d", label: "Weil der Druck zu hoch ist." }
            ],
            correctChoiceId: "b",
            successFeedback: "Korrekt! Ohne Teilchen keine Schallwellen.",
            failFeedback: "Nicht ganz. Schall benötigt ein Trägermedium."
          },
          {
            id: "ph-7-sr-2-s3",
            title: "Frequenz",
            prompt: "Was bestimmt, ob ein Ton hoch oder tief klingt?",
            sceneType: "community",
            visual: { icon: "📈", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: "Die Frequenz (Schwingungen pro Sekunde)" },
              { id: "b", label: "Die Amplitude (Auslenkung)" },
              { id: "c", label: "Die Temperatur" },
              { id: "d", label: "Das Gewicht" }
            ],
            correctChoiceId: "a",
            successFeedback: "Genau! Hohe Frequenz = hoher Ton.",
            failFeedback: "Leider falsch. Die Frequenz bestimmt die Tonhöhe."
          },
          {
            id: "ph-7-sr-2-s4",
            title: "Einheit",
            prompt: "In welcher Einheit wird die Lautstärke (Schallpegel) gemessen?",
            sceneType: "community",
            visual: { icon: "🎧", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Hertz (Hz)" },
              { id: "b", label: "Pascal (Pa)" },
              { id: "c", label: "Dezibel (dB)" },
              { id: "d", label: "Watt (W)" }
            ],
            correctChoiceId: "c",
            successFeedback: "Stimmt! dB ist die Einheit für den Schallpegel.",
            failFeedback: "Falsch. Lautstärke wird in Dezibel (dB) angegeben."
          }
        ]
      },
      {
        id: "ph-7-sr-3",
        title: "Physik-Sprint K7 - Arbeit & Leistung",
        instruction: "Rechne mit Arbeit und Leistung.",
        scenes: [
          {
            id: "ph-7-sr-3-s1",
            title: "Arbeit",
            prompt: "Wie berechnet man die mechanische Arbeit (W)?",
            sceneType: "community",
            visual: { icon: "🏗️", bg: "#0f766e", accent: "#2dd4bf" },
            choices: [
              { id: "a", label: "W = m * v" },
              { id: "b", label: "W = F * s (Kraft mal Weg)" },
              { id: "c", label: "W = F / A" },
              { id: "d", label: "W = P / t" }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Arbeit ist Kraft entlang eines Weges.",
            failFeedback: "Falsch. Die Formel ist W = F * s."
          },
          {
            id: "ph-7-sr-3-s2",
            title: "Leistung",
            prompt: "Was gibt die mechanische Leistung (P) an?",
            sceneType: "community",
            visual: { icon: "⏱️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Wie viel Arbeit in einer bestimmten Zeit verrichtet wird" },
              { id: "b", label: "Wie schwer ein Gegenstand ist" },
              { id: "c", label: "Wie heiß ein Motor wird" },
              { id: "d", label: "Wie stark die Reibung ist" }
            ],
            correctChoiceId: "a",
            successFeedback: "Korrekt! P = W / t.",
            failFeedback: "Nicht ganz. Leistung ist Arbeit pro Zeit."
          },
          {
            id: "ph-7-sr-3-s3",
            title: "Einheit",
            prompt: "Welche Einheit hat die Leistung?",
            sceneType: "community",
            visual: { icon: "💡", bg: "#78350f", accent: "#f59e0b" },
            choices: [
              { id: "a", label: "Newton (N)" },
              { id: "b", label: "Joule (J)" },
              { id: "c", label: "Watt (W)" },
              { id: "d", label: "Meter pro Sekunde (m/s)" }
            ],
            correctChoiceId: "c",
            successFeedback: "Genau! 1 Watt = 1 Joule pro Sekunde.",
            failFeedback: "Leider falsch. Die Einheit ist Watt (W)."
          },
          {
            id: "ph-7-sr-3-s4",
            title: "Hubarbeit",
            prompt: "Welche Arbeit verrichtest du, wenn du eine Kiste anhebst?",
            sceneType: "community",
            visual: { icon: "📦", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: "Reibungsarbeit" },
              { id: "b", label: "Beschleunigungsarbeit" },
              { id: "c", label: "Spannarbeit" },
              { id: "d", label: "Hubarbeit" }
            ],
            correctChoiceId: "d",
            successFeedback: "Stimmt! Du überwindest die Gewichtskraft.",
            failFeedback: "Falsch. Beim Anheben verrichtet man Hubarbeit."
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-7-cb-1",
        title: "Schallfrequenzen",
        instruction: "Ordne die Frequenzen von tief (niedrig) nach hoch.",
        hint: "Ultraschall ist höher als das, was wir hören können.",
        theme: { bg: "#0f172a", accent: "#3b82f6", card: "#1c1917" },
        parts: [
          { id: "hoch", label: "Menschlicher hoher Ton (z.B. 10.000 Hz)", emoji: "🎵" },
          { id: "infra", label: "Infraschall (< 20 Hz)", emoji: "🐘" },
          { id: "ultra", label: "Ultraschall (> 20.000 Hz)", emoji: "🦇" },
          { id: "tief", label: "Menschlicher tiefer Ton (z.B. 100 Hz)", emoji: "🔈" }
        ],
        slots: [
          { id: "slot-1", label: "1. Tiefste Frequenz" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Höchste Frequenz" }
        ],
        solution: ["infra", "tief", "hoch", "ultra"]
      },
      {
        id: "ph-7-cb-2",
        title: "Lichtdurchlässigkeit",
        instruction: "Ordne von lichtundurchlässig zu komplett transparent.",
        hint: "Durch ein Milchglas sieht man nur verschwommen.",
        theme: { bg: "#0f172a", accent: "#fbbf24", card: "#1c1917" },
        parts: [
          { id: "klares", label: "Fensterglas", emoji: "🪟" },
          { id: "stein", label: "Ziegelstein", emoji: "🧱" },
          { id: "vakuum", label: "Leerer Raum (Vakuum)", emoji: "🌌" },
          { id: "milch", label: "Milchglas / Nebel", emoji: "🌫️" }
        ],
        slots: [
          { id: "slot-1", label: "1. Undurchlässig" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Perfekt transparent" }
        ],
        solution: ["stein", "milch", "klares", "vakuum"]
      },
      {
        id: "ph-7-cb-3",
        title: "Leistung (Watt)",
        instruction: "Ordne nach mechanischer/elektrischer Leistung aufsteigend.",
        hint: "Ein Kraftwerk liefert Millionen von Watt.",
        theme: { bg: "#0f172a", accent: "#10b981", card: "#1c1917" },
        parts: [
          { id: "auto", label: "Automotor (ca. 100 kW)", emoji: "🚗" },
          { id: "mensch", label: "Gehender Mensch (ca. 100 W)", emoji: "🚶" },
          { id: "kraftwerk", label: "Atomkraftwerk (ca. 1000 MW)", emoji: "🏭" },
          { id: "wind", label: "Große Windkraftanlage (ca. 3 MW)", emoji: "🌬️" }
        ],
        slots: [
          { id: "slot-1", label: "1. Wenig Leistung" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Viel Leistung" }
        ],
        solution: ["mensch", "auto", "wind", "kraftwerk"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-7-mr-1",
        title: "Optische Instrumente",
        instruction: "Merke dir die optischen Bauteile!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#22d3ee", radar: "#083344" },
        targetItems: [
          { id: "linse", label: "Sammellinse", emoji: "🔍" },
          { id: "prisma", label: "Prisma", emoji: "🔺" },
          { id: "spiegel", label: "Ebenerspiegel", emoji: "🪞" },
          { id: "loch", label: "Lochblende", emoji: "🕳️" }
        ],
        decoyItems: [
          { id: "dec1", label: "Stimmgabel", emoji: "🪚" },
          { id: "dec2", label: "Gitarre", emoji: "🎸" },
          { id: "dec3", label: "Waage", emoji: "⚖️" },
          { id: "dec4", label: "Thermometer", emoji: "🌡️" },
          { id: "dec5", label: "Kompass", emoji: "🧭" }
        ]
      },
      {
        id: "ph-7-mr-2",
        title: "Schallerzeuger",
        instruction: "Merke dir die Dinge, die Schall erzeugen!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f59e0b", radar: "#78350f" },
        targetItems: [
          { id: "stimm", label: "Stimmgabel", emoji: "🪚" },
          { id: "laut", label: "Lautsprecher", emoji: "🔊" },
          { id: "trommel", label: "Trommel", emoji: "🥁" },
          { id: "stimme", label: "Menschliche Stimme", emoji: "🗣️" }
        ],
        decoyItems: [
          { id: "dec1", label: "Vakuum", emoji: "🌌" },
          { id: "dec2", label: "Lichtstrahl", emoji: "🔦" },
          { id: "dec3", label: "Schatten", emoji: "👤" },
          { id: "dec4", label: "Spiegel", emoji: "🪞" },
          { id: "dec5", label: "Linse", emoji: "🔍" }
        ]
      },
      {
        id: "ph-7-mr-3",
        title: "Mechanische Einheiten",
        instruction: "Merke dir die Einheiten der Mechanik und Akustik!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#10b981", radar: "#064e3b" },
        targetItems: [
          { id: "joule", label: "Joule (Arbeit)", emoji: "⚡" },
          { id: "watt", label: "Watt (Leistung)", emoji: "💡" },
          { id: "newton", label: "Newton (Kraft)", emoji: "🍎" },
          { id: "hertz", label: "Hertz (Frequenz)", emoji: "📈" }
        ],
        decoyItems: [
          { id: "dec1", label: "Ampere", emoji: "🌊" },
          { id: "dec2", label: "Volt", emoji: "🔋" },
          { id: "dec3", label: "Ohm", emoji: "🔌" },
          { id: "dec4", label: "Coulomb", emoji: "⚛️" },
          { id: "dec5", label: "Lumen", emoji: "☀️" }
        ]
      }
    ]
  },
  8: {
    grade: 8,
    meteorCatch: [
      {
        id: "ph-8-mc-1",
        title: "Atombausteine",
        prompt: "Fange nur Bausteine des Atoms ein!",
        goal: 4,
        speed: 5,
        theme: { sky: "#0f172a", glow: "#8b5cf6", accent: "#a855f7" },
        correctItems: [
          { id: "proton", label: "Proton", emoji: "➕" },
          { id: "neutron", label: "Neutron", emoji: "⚪" },
          { id: "elektron", label: "Elektron", emoji: "➖" },
          { id: "atomkern", label: "Atomkern", emoji: "⚛️" }
        ],
        wrongItems: [
          { id: "x1", label: "Bakterium", emoji: "🦠" },
          { id: "x2", label: "Zelle", emoji: "🧬" },
          { id: "x3", label: "Lichtjahr", emoji: "🌌" },
          { id: "x4", label: "Molekül", emoji: "🔗" }
        ]
      },
      {
        id: "ph-8-mc-2",
        title: "Elektromagnetismus",
        prompt: "Fange Bauteile für einen Elektromagneten ein!",
        goal: 5,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#ef4444", accent: "#f87171" },
        correctItems: [
          { id: "spule", label: "Kupferspule", emoji: "🧵" },
          { id: "eisenkern", label: "Eisenkern", emoji: "🔩" },
          { id: "strom", label: "Gleichstrom", emoji: "⚡" },
          { id: "batterie", label: "Stromquelle", emoji: "🔋" },
          { id: "schalter", label: "Schalter", emoji: "🕹️" }
        ],
        wrongItems: [
          { id: "x5", label: "Prisma", emoji: "🔺" },
          { id: "x6", label: "Holzstab", emoji: "🪵" },
          { id: "x7", label: "Plastikrohr", emoji: "🪈" }
        ]
      },
      {
        id: "ph-8-mc-3",
        title: "Erneuerbare Energien",
        prompt: "Fange klimafreundliche Energiequellen ein!",
        goal: 6,
        speed: 4,
        theme: { sky: "#0f172a", glow: "#10b981", accent: "#34d399" },
        correctItems: [
          { id: "wind", label: "Windkraft", emoji: "🌬️" },
          { id: "solar", label: "Sonnenenergie", emoji: "☀️" },
          { id: "wasser", label: "Wasserkraft", emoji: "🌊" },
          { id: "geothermie", label: "Erdwärme", emoji: "🌋" },
          { id: "biomasse", label: "Biomasse", emoji: "🌱" },
          { id: "gezeiten", label: "Gezeitenkraft", emoji: "🌊" }
        ],
        wrongItems: [
          { id: "x8", label: "Kohlekraft", emoji: "🏭" },
          { id: "x9", label: "Erdgas", emoji: "🔥" },
          { id: "x10", label: "Kernkraft", emoji: "☢️" },
          { id: "x11", label: "Erdöl", emoji: "🛢️" }
        ]
      }
    ],
    orbitSort: [
      {
        id: "ph-8-os-1",
        title: "Atomkern vs. Atomhülle",
        instruction: "Wo befindet sich das Teilchen oder die Eigenschaft?",
        theme: { bg: "#0f172a", orbit: "#eab308", accent: "#fde047" },
        buckets: [
          { id: "kern", label: "Atomkern", color: "#ef4444" },
          { id: "huelle", label: "Atomhülle", color: "#3b82f6" }
        ],
        items: [
          { id: "proton", label: "Protonen", emoji: "➕", bucketId: "kern" },
          { id: "neutron", label: "Neutronen", emoji: "⚪", bucketId: "kern" },
          { id: "masse", label: "Fast die gesamte Masse", emoji: "⚖️", bucketId: "kern" },
          { id: "elektron", label: "Elektronen", emoji: "➖", bucketId: "huelle" },
          { id: "negativ", label: "Negative Ladung", emoji: "⚡", bucketId: "huelle" },
          { id: "volumen", label: "Fast das gesamte Volumen", emoji: "🌌", bucketId: "huelle" }
        ]
      },
      {
        id: "ph-8-os-2",
        title: "Gleichstrom vs. Wechselstrom",
        instruction: "Gehört die Eigenschaft zu DC (Gleichstrom) oder AC (Wechselstrom)?",
        theme: { bg: "#0f172a", orbit: "#8b5cf6", accent: "#a855f7" },
        buckets: [
          { id: "dc", label: "Gleichstrom (DC)", color: "#10b981" },
          { id: "ac", label: "Wechselstrom (AC)", color: "#f59e0b" }
        ],
        items: [
          { id: "batt", label: "Batterie liefert es", emoji: "🔋", bucketId: "dc" },
          { id: "richtung1", label: "Fließt nur in eine Richtung", emoji: "➡️", bucketId: "dc" },
          { id: "steckdose", label: "Kommt aus der Steckdose", emoji: "🔌", bucketId: "ac" },
          { id: "richtung2", label: "Wechselt ständig die Richtung", emoji: "🔀", bucketId: "ac" },
          { id: "hertz", label: "Hat in Europa 50 Hz", emoji: "📈", bucketId: "ac" },
          { id: "trafo", label: "Kann gut transformiert werden", emoji: "🏗️", bucketId: "ac" }
        ]
      },
      {
        id: "ph-8-os-3",
        title: "Strahlungsarten",
        instruction: "Sortiere nach Alpha- oder Betastrahlung.",
        theme: { bg: "#0f172a", orbit: "#ef4444", accent: "#f87171" },
        buckets: [
          { id: "alpha", label: "Alphastrahlung (α)", color: "#ef4444" },
          { id: "beta", label: "Betastrahlung (β)", color: "#3b82f6" }
        ],
        items: [
          { id: "heli", label: "Heliumkerne", emoji: "⚛️", bucketId: "alpha" },
          { id: "papier", label: "Wird durch Papier gestoppt", emoji: "📄", bucketId: "alpha" },
          { id: "positiv", label: "Positiv geladen", emoji: "➕", bucketId: "alpha" },
          { id: "elektr", label: "Schnelle Elektronen", emoji: "⚡", bucketId: "beta" },
          { id: "alu", label: "Wird durch Aluminium gestoppt", emoji: "🥫", bucketId: "beta" },
          { id: "negativ", label: "Negativ geladen", emoji: "➖", bucketId: "beta" }
        ]
      }
    ],
    signalRunner: [
      {
        id: "ph-8-sr-1",
        title: "Physik-Sprint K8 - Atomphysik",
        instruction: "Wähle die Fakten über Atome.",
        scenes: [
          {
            id: "ph-8-sr-1-s1",
            title: "Ladung",
            prompt: "Welche elektrische Ladung hat ein Proton?",
            sceneType: "nature",
            visual: { icon: "➕", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: "Negativ" },
              { id: "b", label: "Neutral" },
              { id: "c", label: "Positiv" },
              { id: "d", label: "Wechselnd" }
            ],
            correctChoiceId: "c",
            successFeedback: "Richtig! Protonen sind positiv, Elektronen negativ.",
            failFeedback: "Falsch. Ein Proton ist positiv geladen."
          },
          {
            id: "ph-8-sr-1-s2",
            title: "Kern",
            prompt: "Woraus besteht der Atomkern?",
            sceneType: "nature",
            visual: { icon: "⚛️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Nur aus Elektronen" },
              { id: "b", label: "Aus Protonen und Neutronen" },
              { id: "c", label: "Aus Quarks und Photonen" },
              { id: "d", label: "Aus Protonen und Elektronen" }
            ],
            correctChoiceId: "b",
            successFeedback: "Korrekt! Sie bilden zusammen die Nukleonen im Kern.",
            failFeedback: "Nicht ganz. Der Kern enthält Protonen und Neutronen."
          },
          {
            id: "ph-8-sr-1-s3",
            title: "Masse",
            prompt: "Wo befindet sich fast die gesamte Masse eines Atoms?",
            sceneType: "nature",
            visual: { icon: "⚖️", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "In der Atomhülle" },
              { id: "b", label: "Im Atomkern" },
              { id: "c", label: "Gleichmäßig verteilt" },
              { id: "d", label: "Außerhalb des Atoms" }
            ],
            correctChoiceId: "b",
            successFeedback: "Genau! Elektronen wiegen fast nichts.",
            failFeedback: "Leider falsch. Der winzige Kern enthält über 99% der Masse."
          },
          {
            id: "ph-8-sr-1-s4",
            title: "Ordnungszahl",
            prompt: "Was gibt die Ordnungszahl im Periodensystem an?",
            sceneType: "community",
            visual: { icon: "📋", bg: "#0891b2", accent: "#22d3ee" },
            choices: [
              { id: "a", label: "Anzahl der Neutronen" },
              { id: "b", label: "Das Gewicht des Atoms" },
              { id: "c", label: "Anzahl der Protonen" },
              { id: "d", label: "Anzahl der Schalen" }
            ],
            correctChoiceId: "c",
            successFeedback: "Stimmt! Sie bestimmt das chemische Element.",
            failFeedback: "Falsch. Die Ordnungszahl ist gleich der Protonenzahl."
          }
        ]
      },
      {
        id: "ph-8-sr-2",
        title: "Physik-Sprint K8 - Elektromagnetismus",
        instruction: "Beantworte Fragen zu Spulen und Induktion.",
        scenes: [
          {
            id: "ph-8-sr-2-s1",
            title: "Induktion",
            prompt: "Was passiert, wenn sich ein Magnet in einer Spule bewegt?",
            sceneType: "community",
            visual: { icon: "⚡", bg: "#854d0e", accent: "#facc15" },
            choices: [
              { id: "a", label: "Die Spule schmilzt" },
              { id: "b", label: "Es wird eine elektrische Spannung induziert" },
              { id: "c", label: "Der Magnet wird schwerer" },
              { id: "d", label: "Es entsteht Licht" }
            ],
            correctChoiceId: "b",
            successFeedback: "Richtig! Das ist das Prinzip der elektromagnetischen Induktion.",
            failFeedback: "Falsch. Es entsteht durch Induktion eine Spannung."
          },
          {
            id: "ph-8-sr-2-s2",
            title: "Generator",
            prompt: "Welche Energieumwandlung findet in einem Generator statt?",
            sceneType: "community",
            visual: { icon: "🏗️", bg: "#0f766e", accent: "#2dd4bf" },
            choices: [
              { id: "a", label: "Elektrische in Mechanische Energie" },
              { id: "b", label: "Wärmeenergie in Lichtenergie" },
              { id: "c", label: "Mechanische in Elektrische Energie" },
              { id: "d", label: "Chemische in Elektrische Energie" }
            ],
            correctChoiceId: "c",
            successFeedback: "Korrekt! Bewegung wird zu Strom (z.B. Windrad).",
            failFeedback: "Nicht ganz. Er wandelt Bewegung in Strom um."
          },
          {
            id: "ph-8-sr-2-s3",
            title: "Transformator",
            prompt: "Wofür nutzt man einen Transformator?",
            sceneType: "community",
            visual: { icon: "🔌", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Um Gleichstrom zu erzeugen" },
              { id: "b", label: "Um Wechselspannung hoch oder runter zu transformieren" },
              { id: "c", label: "Um Strom zu speichern" },
              { id: "d", label: "Um Widerstand zu messen" }
            ],
            correctChoiceId: "b",
            successFeedback: "Genau! Er hat eine Primär- und eine Sekundärspule.",
            failFeedback: "Leider falsch. Er ändert die Spannungshöhe."
          },
          {
            id: "ph-8-sr-2-s4",
            title: "Motor",
            prompt: "Ein Elektromotor ist vom Prinzip her die Umkehrung von...",
            sceneType: "community",
            visual: { icon: "⚙️", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "Einem Generator" },
              { id: "b", label: "Einem Akku" },
              { id: "c", label: "Einer Glühlampe" },
              { id: "d", label: "Einem Thermometer" }
            ],
            correctChoiceId: "a",
            successFeedback: "Stimmt! Motor: Strom -> Bewegung. Generator: Bewegung -> Strom.",
            failFeedback: "Falsch. Er ist die Umkehrung des Generators."
          }
        ]
      },
      {
        id: "ph-8-sr-3",
        title: "Physik-Sprint K8 - Moderne Physik",
        instruction: "Teste dein Wissen zur Kernphysik.",
        scenes: [
          {
            id: "ph-8-sr-3-s1",
            title: "Strahlung",
            prompt: "Welche Strahlung besteht aus Heliumkernen?",
            sceneType: "nature",
            visual: { icon: "☢️", bg: "#991b1b", accent: "#f87171" },
            choices: [
              { id: "a", label: "Röntgenstrahlung" },
              { id: "b", label: "Gammastrahlung" },
              { id: "c", label: "Betastrahlung" },
              { id: "d", label: "Alphastrahlung" }
            ],
            correctChoiceId: "d",
            successFeedback: "Richtig! Alphateilchen sind positiv geladene Heliumkerne.",
            failFeedback: "Falsch. Es ist die Alphastrahlung."
          },
          {
            id: "ph-8-sr-3-s2",
            title: "Abschirmung",
            prompt: "Womit kann man Alphastrahlung bereits stoppen?",
            sceneType: "community",
            visual: { icon: "🛡️", bg: "#1e3a5f", accent: "#fbbf24" },
            choices: [
              { id: "a", label: "Nur mit dickem Blei" },
              { id: "b", label: "Mit einem Blatt Papier" },
              { id: "c", label: "Mit 10 cm Beton" },
              { id: "d", label: "Gar nicht" }
            ],
            correctChoiceId: "b",
            successFeedback: "Korrekt! Sie hat eine sehr geringe Durchdringungskraft.",
            failFeedback: "Nicht ganz. Ein Blatt Papier reicht oft schon aus."
          },
          {
            id: "ph-8-sr-3-s3",
            title: "Halbwertszeit",
            prompt: "Was beschreibt die Halbwertszeit?",
            sceneType: "nature",
            visual: { icon: "⏱️", bg: "#064e3b", accent: "#10b981" },
            choices: [
              { id: "a", label: "Die Zeit, bis die Hälfte der Atomkerne zerfallen ist" },
              { id: "b", label: "Die Hälfte des Alters der Erde" },
              { id: "c", label: "Die Zeit, bis die Strahlung doppelt so stark ist" },
              { id: "d", label: "Die Zeit, bis ein Elektron halbiert wird" }
            ],
            correctChoiceId: "a",
            successFeedback: "Genau! Nach einer Halbwertszeit ist noch 50% des Materials da.",
            failFeedback: "Leider falsch. Sie gibt an, wann die Hälfte zerfallen ist."
          },
          {
            id: "ph-8-sr-3-s4",
            title: "Einstein",
            prompt: "Welche berühmte Formel beschreibt die Äquivalenz von Masse und Energie?",
            sceneType: "community",
            visual: { icon: "🧠", bg: "#4c1d95", accent: "#8b5cf6" },
            choices: [
              { id: "a", label: "F = m * a" },
              { id: "b", label: "E = m * c²" },
              { id: "c", label: "W = F * s" },
              { id: "d", label: "v = s / t" }
            ],
            correctChoiceId: "b",
            successFeedback: "Stimmt! Von Albert Einstein.",
            failFeedback: "Falsch. Es ist E = m * c²."
          }
        ]
      }
    ],
    constellationBuilder: [
      {
        id: "ph-8-cb-1",
        title: "Atomare Größen",
        instruction: "Ordne die Strukturen nach ihrer Größe (klein zu groß).",
        hint: "Ein Elektron ist viel kleiner als ein ganzes Atom.",
        theme: { bg: "#0f172a", accent: "#f59e0b", card: "#1c1917" },
        parts: [
          { id: "atom", label: "Ganzes Atom", emoji: "⚛️" },
          { id: "kern", label: "Atomkern", emoji: "🔴" },
          { id: "elektron", label: "Elektron", emoji: "➖" },
          { id: "molekuel", label: "Molekül (z.B. Wasser)", emoji: "💧" }
        ],
        slots: [
          { id: "slot-1", label: "1. Am kleinsten" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Am größten" }
        ],
        solution: ["elektron", "kern", "atom", "molekuel"]
      },
      {
        id: "ph-8-cb-2",
        title: "Elektromagnetisches Spektrum",
        instruction: "Ordne nach Energie der Strahlung (niedrig nach hoch).",
        hint: "Radiowellen sind harmlos, Gammastrahlung sehr energiereich.",
        theme: { bg: "#0f172a", accent: "#8b5cf6", card: "#1c1917" },
        parts: [
          { id: "licht", label: "Sichtbares Licht", emoji: "💡" },
          { id: "radio", label: "Radiowellen", emoji: "📻" },
          { id: "gamma", label: "Gammastrahlung", emoji: "☢️" },
          { id: "roentgen", label: "Röntgenstrahlung", emoji: "🩻" }
        ],
        slots: [
          { id: "slot-1", label: "1. Niedrigste Energie" },
          { id: "slot-2", label: "2." },
          { id: "slot-3", label: "3." },
          { id: "slot-4", label: "4. Höchste Energie" }
        ],
        solution: ["radio", "licht", "roentgen", "gamma"]
      },
      {
        id: "ph-8-cb-3",
        title: "Durchdringungskraft",
        instruction: "Ordne, welches Material welche Strahlung stoppen kann.",
        hint: "Alpha wird von Papier gestoppt, Gamma braucht Blei/Beton.",
        theme: { bg: "#0f172a", accent: "#ef4444", card: "#1c1917" },
        parts: [
          { id: "blei", label: "Dicker Bleiblock (stoppt Gamma)", emoji: "🧱" },
          { id: "papier", label: "Papier (stoppt Alpha)", emoji: "📄" },
          { id: "alu", label: "Aluminiumblech (stoppt Beta)", emoji: "🥫" },
          { id: "nichts", label: "Kein Hindernis", emoji: "💨" }
        ],
        slots: [
          { id: "slot-1", label: "1. Hält nichts auf" },
          { id: "slot-2", label: "2. Stoppt schwache Strahlung" },
          { id: "slot-3", label: "3. Stoppt mittlere Strahlung" },
          { id: "slot-4", label: "4. Stoppt stärkste Strahlung" }
        ],
        solution: ["nichts", "papier", "alu", "blei"]
      }
    ],
    memoryRadar: [
      {
        id: "ph-8-mr-1",
        title: "Atombausteine",
        instruction: "Merke dir die Teile des Atoms!",
        flashDurationMs: 4000,
        selectionLimit: 3,
        theme: { bg: "#0f172a", accent: "#a855f7", radar: "#4c1d95" },
        targetItems: [
          { id: "proton", label: "Proton", emoji: "➕" },
          { id: "neutron", label: "Neutron", emoji: "⚪" },
          { id: "elektron", label: "Elektron", emoji: "➖" }
        ],
        decoyItems: [
          { id: "dec1", label: "Bakterium", emoji: "🦠" },
          { id: "dec2", label: "Zelle", emoji: "🧬" },
          { id: "dec3", label: "Molekül", emoji: "💧" },
          { id: "dec4", label: "Lichtjahr", emoji: "🌌" },
          { id: "dec5", label: "Planet", emoji: "🪐" }
        ]
      },
      {
        id: "ph-8-mr-2",
        title: "Kraftwerke",
        instruction: "Merke dir Energiequellen für Kraftwerke!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#34d399", radar: "#064e3b" },
        targetItems: [
          { id: "wasser", label: "Wasserkraft", emoji: "🌊" },
          { id: "wind", label: "Windkraft", emoji: "🌬️" },
          { id: "kohle", label: "Kohle", emoji: "🪨" },
          { id: "kern", label: "Kernkraft (Uran)", emoji: "☢️" }
        ],
        decoyItems: [
          { id: "dec1", label: "Batterie", emoji: "🔋" },
          { id: "dec2", label: "Transformator", emoji: "🏗️" },
          { id: "dec3", label: "Elektromotor", emoji: "⚙️" },
          { id: "dec4", label: "Glühlampe", emoji: "💡" },
          { id: "dec5", label: "Prisma", emoji: "🔺" }
        ]
      },
      {
        id: "ph-8-mr-3",
        title: "Strahlungsarten",
        instruction: "Merke dir die energiereichen Strahlungen!",
        flashDurationMs: 4000,
        selectionLimit: 4,
        theme: { bg: "#0f172a", accent: "#f87171", radar: "#7f1d1d" },
        targetItems: [
          { id: "alpha", label: "Alphastrahlung", emoji: "☢️" },
          { id: "beta", label: "Betastrahlung", emoji: "⚡" },
          { id: "gamma", label: "Gammastrahlung", emoji: "🌊" },
          { id: "roent", label: "Röntgenstrahlung", emoji: "🩻" }
        ],
        decoyItems: [
          { id: "dec1", label: "Infraschall", emoji: "🐘" },
          { id: "dec2", label: "Ultraschall", emoji: "🦇" },
          { id: "dec3", label: "Wärmeleitung", emoji: "♨️" },
          { id: "dec4", label: "Reibung", emoji: "🤝" },
          { id: "dec5", label: "Schwerkraft", emoji: "🌍" }
        ]
      }
    ]
  },
};