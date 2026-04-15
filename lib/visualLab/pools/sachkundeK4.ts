import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";

export const SACHKUNDE_VISUAL_LAB_K4: SachkundeVisualLabGradePool = {
  grade: 4,
  meteorCatch: [
    {
      id: "k4-energy-catch",
      title: "Energie-Fangfeld",
      prompt: "Fange nur Energiequellen ein.",
      goal: 8,
      speed: 7,
      theme: { sky: "#101828", glow: "#f59e0b", accent: "#facc15" },
      correctItems: [
        { id: "sonne", label: "Sonne", emoji: "☀️" },
        { id: "wind", label: "Wind", emoji: "🌬️" },
        { id: "wasser", label: "Wasser", emoji: "💧" },
        { id: "holz", label: "Holz", emoji: "🪵" },
        { id: "kohle", label: "Kohle", emoji: "🪨" },
      ],
      wrongItems: [
        { id: "kissen", label: "Kissen", emoji: "🛏️" },
        { id: "socke", label: "Socke", emoji: "🧦" },
        { id: "uhr", label: "Uhr", emoji: "⏰" },
        { id: "glas", label: "Glas", emoji: "🥃" },
      ],
    },
    {
      id: "k4-europa-catch",
      title: "Europa-Asteroiden",
      prompt: "Fange nur europäische Länder oder Hauptstädte ein.",
      goal: 7,
      speed: 6,
      theme: { sky: "#0b132b", glow: "#3b82f6", accent: "#60a5fa" },
      correctItems: [
        { id: "berlin", label: "Berlin", emoji: "🏛️" },
        { id: "paris", label: "Paris", emoji: "🗼" },
        { id: "rom", label: "Rom", emoji: "🏺" },
        { id: "spanien", label: "Spanien", emoji: "🇪🇸" },
        { id: "wien", label: "Wien", emoji: "🎻" },
      ],
      wrongItems: [
        { id: "tokio", label: "Tokio", emoji: "🗻" },
        { id: "newyork", label: "New York", emoji: "🗽" },
        { id: "kairo", label: "Kairo", emoji: "🏜️" },
        { id: "brasilien", label: "Brasilien", emoji: "🇧🇷" },
      ],
    },
    {
      id: "k4-mineralien",
      title: "Kristall-Sturm",
      prompt: "Sammle Steine und Mineralien.",
      goal: 6,
      speed: 6,
      theme: { sky: "#1e1b4b", glow: "#d946ef", accent: "#e879f9" },
      correctItems: [
        { id: "quarz", label: "Quarz", emoji: "💎" },
        { id: "granit", label: "Granit", emoji: "🪨" },
        { id: "gold", label: "Gold", emoji: "🪙" },
        { id: "sandstein", label: "Sandstein", emoji: "🧱" },
      ],
      wrongItems: [
        { id: "plastik", label: "Plastik", emoji: "🥤" },
        { id: "holz", label: "Holz", emoji: "🪵" },
        { id: "gummi", label: "Gummi", emoji: "🦆" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "k4-living-groups",
      title: "Lebewesen-Orbits",
      instruction: "Ordne die Tiere den richtigen Gruppen zu.",
      theme: { bg: "#111827", orbit: "#22c55e", accent: "#38bdf8" },
      buckets: [
        { id: "saeugetier", label: "Säugetier", color: "#f59e0b" },
        { id: "vogel", label: "Vogel", color: "#38bdf8" },
        { id: "insekt", label: "Insekt", color: "#22c55e" },
      ],
      items: [
        { id: "fuchs", label: "Fuchs", emoji: "🦊", bucketId: "saeugetier" },
        { id: "spatz", label: "Spatz", emoji: "🐦", bucketId: "vogel" },
        { id: "biene", label: "Biene", emoji: "🐝", bucketId: "insekt" },
        { id: "reh", label: "Reh", emoji: "🦌", bucketId: "saeugetier" },
        { id: "eule", label: "Eule", emoji: "🦉", bucketId: "vogel" },
        { id: "ameise", label: "Ameise", emoji: "🐜", bucketId: "insekt" },
      ],
    },
    {
      id: "k4-strom-leiter",
      title: "Elektro-Magnetfeld",
      instruction: "Leitet es Strom oder leitet es keinen Strom?",
      theme: { bg: "#1e293b", orbit: "#facc15", accent: "#a855f7" },
      buckets: [
        { id: "leiter", label: "Stromleiter ⚡", color: "#facc15" },
        { id: "isolator", label: "Isolator 🛑", color: "#94a3b8" },
      ],
      items: [
        { id: "kupfer", label: "Kupferdraht", emoji: "🧲", bucketId: "leiter" },
        { id: "eisen", label: "Eisennagel", emoji: "🔩", bucketId: "leiter" },
        { id: "gold", label: "Goldring", emoji: "💍", bucketId: "leiter" },
        { id: "holz", label: "Holzstück", emoji: "🪵", bucketId: "isolator" },
        { id: "plastik", label: "Plastiklöffel", emoji: "🥄", bucketId: "isolator" },
        { id: "glas", label: "Glasscheibe", emoji: "🪟", bucketId: "isolator" },
      ],
    },
    {
      id: "k4-koerper-organe",
      title: "Anatomie-Scanner",
      instruction: "Gehört es zu den Organen oder zu den Knochen?",
      theme: { bg: "#2e1025", orbit: "#ef4444", accent: "#f87171" },
      buckets: [
        { id: "organ", label: "Organe ❤️", color: "#ef4444" },
        { id: "knochen", label: "Knochen 🦴", color: "#f8fafc" },
      ],
      items: [
        { id: "herz", label: "Herz", emoji: "❤️", bucketId: "organ" },
        { id: "lunge", label: "Lunge", emoji: "🫁", bucketId: "organ" },
        { id: "gehirn", label: "Gehirn", emoji: "🧠", bucketId: "organ" },
        { id: "schaedel", label: "Schädel", emoji: "💀", bucketId: "knochen" },
        { id: "rippe", label: "Rippe", emoji: "🦴", bucketId: "knochen" },
        { id: "wirbel", label: "Wirbelsäule", emoji: "🦴", bucketId: "knochen" },
      ],
    }
  ],
  signalRunner: [
    {
      id: "k4-map-safety",
      title: "Signal Runner: Karten & Verantwortung",
      instruction: "Wähle in jeder Situation die beste Handlung.",
      scenes: [
        {
          id: "hike",
          title: "Wanderung",
          prompt: "Du bist auf einer Karte unsicher. Was hilft am meisten?",
          sceneType: "nature",
          visual: { icon: "🧭", bg: "#0f172a", accent: "#38bdf8" },
          choices: [
            { id: "legend", label: "Ich prüfe Legende und Himmelsrichtung." },
            { id: "guess", label: "Ich laufe einfach drauflos." },
          ],
          correctChoiceId: "legend",
          successFeedback: "Richtig. Karte und Richtung geben Sicherheit.",
          failFeedback: "Zu riskant. Erst orientieren, dann losgehen.",
        },
        {
          id: "storm",
          title: "Gewitter naht",
          prompt: "Auf dem Feld zieht ein Gewitter auf. Was ist die beste Entscheidung?",
          sceneType: "safety",
          visual: { icon: "⛈️", bg: "#312e81", accent: "#a78bfa" },
          choices: [
            { id: "shelter", label: "Ich suche Schutz in einem sicheren Gebäude." },
            { id: "tree", label: "Ich stelle mich unter einen einzelnen Baum." },
          ],
          correctChoiceId: "shelter",
          successFeedback: "Genau. Schutz im Gebäude ist sicherer.",
          failFeedback: "Nein. Ein einzelner Baum ist bei Gewitter gefährlich.",
        },
      ],
    },
    {
      id: "k4-notruf-pro",
      title: "Rettungs-Einsatz",
      instruction: "Wie setzt du einen Notruf richtig ab?",
      scenes: [
        {
          id: "anruf",
          title: "Der Anruf (Die 5 Ws)",
          prompt: "Du rufst die 112 an. Was musst du am Telefon beachten?",
          sceneType: "safety",
          visual: { icon: "📞", bg: "#450a0a", accent: "#ef4444" },
          choices: [
            { id: "warten", label: "Ich beantworte die Fragen und lege erst auf, wenn man es mir sagt." },
            { id: "auflegen", label: "Ich sage kurz 'Hilfe' und lege sofort auf." },
          ],
          correctChoiceId: "warten",
          successFeedback: "Lebenswichtig! Die Leitstelle braucht genaue Infos.",
          failFeedback: "Falsch! Auflegen verhindert, dass Hilfe kommt.",
        },
        {
          id: "bewusstlos",
          title: "Erste Hilfe",
          prompt: "Eine Person ist bewusstlos, atmet aber normal.",
          sceneType: "community",
          visual: { icon: "🩹", bg: "#052e16", accent: "#22c55e" },
          choices: [
            { id: "seitenlage", label: "Stabile Seitenlage und Notruf." },
            { id: "schuetteln", label: "Wild schütteln und Wasser ins Gesicht schütten." },
          ],
          correctChoiceId: "seitenlage",
          successFeedback: "Richtig. Die Seitenlage hält die Atemwege frei.",
          failFeedback: "Nein, das kann schaden. Stabile Seitenlage ist richtig.",
        }
      ]
    }
  ],
  constellationBuilder: [
    {
      id: "k4-food-chain",
      title: "Nahrungskette bauen",
      instruction: "Setze die Nahrungskette in die richtige Reihenfolge.",
      hint: "Beginne mit der Pflanze.",
      theme: { bg: "#052e16", accent: "#4ade80", card: "rgba(74,222,128,0.1)" },
      parts: [
        { id: "gras", label: "Gras", emoji: "🌱" },
        { id: "hase", label: "Hase", emoji: "🐇" },
        { id: "fuchs", label: "Fuchs", emoji: "🦊" },
      ],
      slots: [
        { id: "slot1", label: "Produzent" },
        { id: "slot2", label: "Pflanzenfresser" },
        { id: "slot3", label: "Fleischfresser" },
      ],
      solution: ["gras", "hase", "fuchs"],
    },
    {
      id: "k4-stromkreis",
      title: "Stromkreis-Konstrukteur",
      instruction: "Baue einen einfachen Stromkreis auf.",
      hint: "Von der Quelle über den Draht zur Lampe.",
      theme: { bg: "#1e1b4b", accent: "#facc15", card: "rgba(250,204,21,0.1)" },
      parts: [
        { id: "batterie", label: "Batterie (Stromquelle)", emoji: "🔋" },
        { id: "kabel", label: "Kupferkabel (Leiter)", emoji: "🔌" },
        { id: "lampe", label: "Glühlampe (Verbraucher)", emoji: "💡" },
      ],
      slots: [
        { id: "slot1", label: "Energie kommt von..." },
        { id: "slot2", label: "Strom fließt durch..." },
        { id: "slot3", label: "Strom leuchtet in..." },
      ],
      solution: ["batterie", "kabel", "lampe"],
    },
    {
      id: "k4-planeten",
      title: "Unser Sonnensystem",
      instruction: "Ordne die ersten drei Planeten von der Sonne aus.",
      hint: "Mein Vater Erklärt...",
      theme: { bg: "#0b132b", accent: "#38bdf8", card: "rgba(56,189,248,0.1)" },
      parts: [
        { id: "merkur", label: "Merkur", emoji: "🪐" },
        { id: "venus", label: "Venus", emoji: "🌕" },
        { id: "erde", label: "Erde", emoji: "🌍" },
      ],
      slots: [
        { id: "slot1", label: "Am nächsten zur Sonne" },
        { id: "slot2", label: "Der Zweite" },
        { id: "slot3", label: "Unser Zuhause (Der Dritte)" },
      ],
      solution: ["merkur", "venus", "erde"],
    }
  ],
  memoryRadar: [
    {
      id: "k4-europe-radar",
      title: "Radar: Europa merken",
      instruction: "Merke dir nur Länder oder Hauptstädte aus Europa.",
      flashDurationMs: 2500,
      selectionLimit: 4,
      theme: { bg: "#111827", accent: "#60a5fa", radar: "#3b82f6" },
      targetItems: [
        { id: "berlin", label: "Berlin", emoji: "🏛️" },
        { id: "wien", label: "Wien", emoji: "🎻" },
        { id: "paris", label: "Paris", emoji: "🗼" },
        { id: "rom", label: "Rom", emoji: "🏺" },
      ],
      decoyItems: [
        { id: "kairo", label: "Kairo", emoji: "🏜️" },
        { id: "tokio", label: "Tokio", emoji: "🗻" },
        { id: "sydney", label: "Sydney", emoji: "🌊" },
        { id: "lima", label: "Lima", emoji: "🦙" },
      ],
    },
    {
      id: "k4-organe-radar",
      title: "Medizinischer Scanner",
      instruction: "Präge dir die inneren Organe des Menschen ein.",
      flashDurationMs: 2200,
      selectionLimit: 4,
      theme: { bg: "#2e1025", accent: "#f87171", radar: "#ef4444" },
      targetItems: [
        { id: "herz", label: "Herz", emoji: "❤️" },
        { id: "lunge", label: "Lunge", emoji: "🫁" },
        { id: "gehirn", label: "Gehirn", emoji: "🧠" },
        { id: "magen", label: "Magen", emoji: "🥩" },
      ],
      decoyItems: [
        { id: "arm", label: "Arm", emoji: "💪" },
        { id: "fuss", label: "Fuß", emoji: "🦶" },
        { id: "auge", label: "Auge", emoji: "👁️" },
        { id: "haar", label: "Haare", emoji: "💇" },
      ],
    }
  ],
};