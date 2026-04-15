import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";

export const SACHKUNDE_VISUAL_LAB_K2: SachkundeVisualLabGradePool = {
  grade: 2,
  meteorCatch: [
    {
      id: "k2-plant-parts",
      title: "Botanischer Nebel",
      prompt: "Fange nur Teile einer Pflanze ein.",
      goal: 7,
      speed: 6,
      theme: { sky: "#052e16", glow: "#34d399", accent: "#22c55e" },
      correctItems: [
        { id: "blatt", label: "Blatt", emoji: "🍃" },
        { id: "wurzel", label: "Wurzel", emoji: "🪴" },
        { id: "bluete", label: "Blüte", emoji: "🌸" },
        { id: "stiel", label: "Stiel", emoji: "🌿" },
        { id: "samen", label: "Samen", emoji: "🌰" },
        { id: "stamm", label: "Stamm", emoji: "🪵" },
      ],
      wrongItems: [
        { id: "lampe", label: "Lampe", emoji: "💡" },
        { id: "teller", label: "Teller", emoji: "🍽️" },
        { id: "schuh", label: "Schuh", emoji: "👟" },
        { id: "stift", label: "Stift", emoji: "✏️" },
      ],
    },
    {
      id: "k2-magnetismus",
      title: "Magnet-Feld",
      prompt: "Fange nur Dinge aus Eisen oder Metall, die magnetisch sind.",
      goal: 6,
      speed: 5,
      theme: { sky: "#1e1b4b", glow: "#8b5cf6", accent: "#c084fc" },
      correctItems: [
        { id: "nagel", label: "Nagel", emoji: "🔩" },
        { id: "schluessel", label: "Schlüssel", emoji: "🔑" },
        { id: "klammer", label: "Büroklammer", emoji: "📎" },
        { id: "schraube", label: "Schraube", emoji: "🔧" },
      ],
      wrongItems: [
        { id: "holz", label: "Holzstück", emoji: "🪵" },
        { id: "plastik", label: "Plastikbecher", emoji: "🥤" },
        { id: "apfel", label: "Apfel", emoji: "🍎" },
        { id: "stoff", label: "Stofftier", emoji: "🧸" },
      ],
    },
    {
      id: "k2-wasser-fluessig",
      title: "Aquarius-Tropfen",
      prompt: "Fange nur flüssige Dinge ein.",
      goal: 6,
      speed: 6,
      theme: { sky: "#0c4a6e", glow: "#0ea5e9", accent: "#38bdf8" },
      correctItems: [
        { id: "regen", label: "Regen", emoji: "🌧️" },
        { id: "saft", label: "Saft", emoji: "🧃" },
        { id: "see", label: "See-Wasser", emoji: "🌊" },
        { id: "milch", label: "Milch", emoji: "🥛" },
      ],
      wrongItems: [
        { id: "eis", label: "Eiswürfel", emoji: "🧊" },
        { id: "dampf", label: "Wasserdampf", emoji: "💨" },
        { id: "stein", label: "Stein", emoji: "🪨" },
        { id: "schnee", label: "Schnee", emoji: "❄️" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "k2-safe-danger",
      title: "Gefahren-Radar",
      instruction: "Ordne die Dinge richtig zu.",
      theme: { bg: "#101827", orbit: "#f87171", accent: "#fbbf24" },
      buckets: [
        { id: "sicher", label: "Sicher", color: "#22c55e" },
        { id: "gefahr", label: "Gefahr", color: "#ef4444" },
      ],
      items: [
        { id: "helm", label: "Helm", emoji: "⛑️", bucketId: "sicher" },
        { id: "zebra", label: "Zebrastreifen", emoji: "🚸", bucketId: "sicher" },
        { id: "gurt", label: "Anschnallgurt", emoji: "💺", bucketId: "sicher" },
        { id: "messer", label: "Messer", emoji: "🔪", bucketId: "gefahr" },
        { id: "feuer", label: "Offenes Feuer", emoji: "🔥", bucketId: "gefahr" },
        { id: "steckdose", label: "Steckdose", emoji: "⚡", bucketId: "gefahr" },
      ],
    },
    {
      id: "k2-schwimmen-sinken",
      title: "See-Schwerkraft",
      instruction: "Schwimmt das oder sinkt es im Wasser?",
      theme: { bg: "#0f172a", orbit: "#0284c7", accent: "#38bdf8" },
      buckets: [
        { id: "schwimmt", label: "Schwimmt ⛵", color: "#38bdf8" },
        { id: "sinkt", label: "Sinkt ⚓", color: "#64748b" },
      ],
      items: [
        { id: "holz", label: "Holzstück", emoji: "🪵", bucketId: "schwimmt" },
        { id: "korken", label: "Korken", emoji: "🍾", bucketId: "schwimmt" },
        { id: "ente", label: "Gummi-Ente", emoji: "🦆", bucketId: "schwimmt" },
        { id: "stein", label: "Stein", emoji: "🪨", bucketId: "sinkt" },
        { id: "schluessel", label: "Schlüssel", emoji: "🔑", bucketId: "sinkt" },
        { id: "muenze", label: "Münze", emoji: "🪙", bucketId: "sinkt" },
      ],
    },
    {
      id: "k2-zahnpflege",
      title: "Planeten-Lächeln",
      instruction: "Ist das gut für die Zähne oder schlecht?",
      theme: { bg: "#1f2937", orbit: "#10b981", accent: "#f472b6" },
      buckets: [
        { id: "gesund", label: "Zahnfreundlich 🦷", color: "#10b981" },
        { id: "ungesund", label: "Schlecht für Zähne 🦠", color: "#ef4444" },
      ],
      items: [
        { id: "apfel", label: "Apfel", emoji: "🍎", bucketId: "gesund" },
        { id: "karotte", label: "Karotte", emoji: "🥕", bucketId: "gesund" },
        { id: "zahnbuerste", label: "Zahnbürste", emoji: "🪥", bucketId: "gesund" },
        { id: "lutscher", label: "Lutscher", emoji: "🍭", bucketId: "ungesund" },
        { id: "schokolade", label: "Schokolade", emoji: "🍫", bucketId: "ungesund" },
        { id: "cola", label: "Cola", emoji: "🥤", bucketId: "ungesund" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "k2-water-day",
      title: "Signal Runner: Wasser & Alltag",
      instruction: "Wähle die kluge Entscheidung.",
      scenes: [
        {
          id: "durst",
          title: "Nach dem Sport",
          prompt: "Du hast großen Durst. Was trinkst du am besten?",
          sceneType: "safety",
          visual: { icon: "💧", bg: "#0c4a6e", accent: "#38bdf8" },
          choices: [
            { id: "wasser", label: "Ein Glas Wasser." },
            { id: "cola", label: "Sehr viel Cola." },
          ],
          correctChoiceId: "wasser",
          successFeedback: "Gut entschieden. Wasser ist eine starke Wahl.",
          failFeedback: "Nicht optimal. Wasser passt hier besser.",
        },
        {
          id: "abfall",
          title: "Im Park",
          prompt: "Du hast eine leere Flasche. Was machst du?",
          sceneType: "community",
          visual: { icon: "♻️", bg: "#14532d", accent: "#4ade80" },
          choices: [
            { id: "bin", label: "Ich werfe sie in den richtigen Behälter." },
            { id: "ground", label: "Ich lasse sie auf dem Boden." },
          ],
          correctChoiceId: "bin",
          successFeedback: "Richtig. So bleibt der Park sauber.",
          failFeedback: "Das ist keine gute Idee. Müll gehört in den Behälter.",
        },
      ],
    },
    {
      id: "k2-erste-hilfe",
      title: "Notfall-Kommando",
      instruction: "Wie handelst du im Notfall richtig?",
      scenes: [
        {
          id: "feuer",
          title: "Es brennt!",
          prompt: "Du siehst ein Feuer. Was ist die wichtigste Nummer?",
          sceneType: "safety",
          visual: { icon: "🔥", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "112", label: "Ich rufe die Feuerwehr (112)." },
            { id: "verstecken", label: "Ich verstecke mich im Schrank." },
          ],
          correctChoiceId: "112",
          successFeedback: "Genau richtig! Die 112 rettet Leben.",
          failFeedback: "Falsch! Verstecken ist bei Feuer extrem gefährlich.",
        },
        {
          id: "pflaster",
          title: "Kleiner Unfall",
          prompt: "Dein Freund ist gefallen und hat eine kleine Wunde.",
          sceneType: "community",
          visual: { icon: "🩹", bg: "#0f172a", accent: "#10b981" },
          choices: [
            { id: "helfen", label: "Ich tröste ihn und hole ein Pflaster." },
            { id: "auslachen", label: "Ich lache ihn aus." },
          ],
          correctChoiceId: "helfen",
          successFeedback: "Super! Erste Hilfe fängt beim Trösten an.",
          failFeedback: "Nein, das ist nicht nett und hilft niemandem.",
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "k2-water-cycle",
      title: "Wasserkreislauf",
      instruction: "Bringe die Stationen in die richtige Reihenfolge.",
      hint: "Erst steigt Wasser auf, dann kommt es wieder herunter.",
      theme: { bg: "#082f49", accent: "#38bdf8", card: "rgba(56,189,248,0.1)" },
      parts: [
        { id: "verdunstung", label: "Verdunstung", emoji: "☁️" },
        { id: "wolke", label: "Wolkenbildung", emoji: "🌥️" },
        { id: "regen", label: "Niederschlag/Regen", emoji: "🌧️" },
      ],
      slots: [
        { id: "slot1", label: "Schritt 1 (Sonne scheint)" },
        { id: "slot2", label: "Schritt 2 (Am Himmel)" },
        { id: "slot3", label: "Schritt 3 (Zurück zur Erde)" },
      ],
      solution: ["verdunstung", "wolke", "regen"],
    },
    {
      id: "k2-pflanzen-wachstum",
      title: "Pflanzen-Wachstum",
      instruction: "Wie wächst eine Pflanze heran?",
      hint: "Alles beginnt mit einem kleinen Samen.",
      theme: { bg: "#14532d", accent: "#4ade80", card: "rgba(74,222,128,0.1)" },
      parts: [
        { id: "samen", label: "Samen im Boden", emoji: "🌰" },
        { id: "keimling", label: "Keimling wächst", emoji: "🌱" },
        { id: "bluete", label: "Pflanze blüht", emoji: "🌻" },
      ],
      slots: [
        { id: "slot1", label: "Am Anfang" },
        { id: "slot2", label: "Später" },
        { id: "slot3", label: "Am Ende" },
      ],
      solution: ["samen", "keimling", "bluete"],
    },
    {
      id: "k2-nahrungskette-einfach",
      title: "Kleine Nahrungskette",
      instruction: "Wer frisst wen? Baue die Kette richtig auf.",
      hint: "Eine Pflanze macht den Anfang.",
      theme: { bg: "#1e1b4b", accent: "#f59e0b", card: "rgba(245,158,11,0.1)" },
      parts: [
        { id: "blatt", label: "Blatt", emoji: "🍃" },
        { id: "raupe", label: "Raupe", emoji: "🐛" },
        { id: "vogel", label: "Vogel", emoji: "🐦" },
      ],
      slots: [
        { id: "slot1", label: "Pflanze" },
        { id: "slot2", label: "Frisst die Pflanze" },
        { id: "slot3", label: "Frisst das Tier" },
      ],
      solution: ["blatt", "raupe", "vogel"],
    }
  ],
  memoryRadar: [
    {
      id: "k2-traffic-signs",
      title: "Radar: Verkehrszeichen",
      instruction: "Merke dir nur die Verkehrszeichen.",
      flashDurationMs: 2200,
      selectionLimit: 4,
      theme: { bg: "#111827", accent: "#facc15", radar: "#f59e0b" },
      targetItems: [
        { id: "stop", label: "Stop", emoji: "🛑" },
        { id: "bike", label: "Radweg", emoji: "🚲" },
        { id: "zebra", label: "Überweg", emoji: "🚸" },
        { id: "ampel", label: "Ampel", emoji: "🚦" },
      ],
      decoyItems: [
        { id: "baum", label: "Baum", emoji: "🌳" },
        { id: "apfel", label: "Apfel", emoji: "🍎" },
        { id: "fisch", label: "Fisch", emoji: "🐟" },
        { id: "buch", label: "Buch", emoji: "📘" },
      ],
    },
    {
      id: "k2-berufe-radar",
      title: "Berufe-Scanner",
      instruction: "Präge dir die Werkzeuge ein, die eine Ärztin oder ein Arzt braucht.",
      flashDurationMs: 2000,
      selectionLimit: 3,
      theme: { bg: "#1e293b", accent: "#00f5d4", radar: "#06b6d4" },
      targetItems: [
        { id: "stethoskop", label: "Stethoskop", emoji: "🩺" },
        { id: "spritze", label: "Spritze", emoji: "💉" },
        { id: "pflaster", label: "Pflaster", emoji: "🩹" },
      ],
      decoyItems: [
        { id: "hammer", label: "Hammer", emoji: "🔨" },
        { id: "pfanne", label: "Pfanne", emoji: "🍳" },
        { id: "traktor", label: "Traktor", emoji: "🚜" },
        { id: "pinsel", label: "Pinsel", emoji: "🖌️" },
      ],
    }
  ],
};