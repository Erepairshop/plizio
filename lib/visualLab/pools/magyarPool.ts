import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const MAGYAR_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Magyar",
  meteorCatch: [
    {
      id: "hu-abc",
      title: { de: "Ungarisches ABC", en: "Hungarian ABC", hu: "ABC-vadászat", ro: "ABC-ul maghiar" },
      prompt: { de: "Fange nur ungarische Sonderzeichen (á, é, í, ó, ö, ő, ú, ü, ű).", en: "Catch only Hungarian special characters (á, é, í, ó, ö, ő, ú, ü, ű).", hu: "Csak a magyar ékezetes betűket fogd ki (á, é, í, ó, ö, ő, ú, ü, ű).", ro: "Prinde doar caracterele speciale maghiare (á, é, í, ó, ö, ő, ú, ü, ű)." },
      goal: 8,
      speed: 4,
      theme: { sky: "#450a0a", glow: "#ef4444", accent: "#f87171" },
      correctItems: [
        { id: "á", label: { de: "Á", en: "Á", hu: "Á", ro: "Á" }, emoji: "🅰️" },
        { id: "é", label: { de: "É", en: "É", hu: "É", ro: "É" }, emoji: "📧" },
        { id: "ő", label: { de: "Ő", en: "Ő", hu: "Ő", ro: "Ő" }, emoji: "🅾️" },
        { id: "ű", label: { de: "Ű", en: "Ű", hu: "Ű", ro: "Ű" }, emoji: "⛎" },
      ],
      wrongItems: [
        { id: "x", label: { de: "X", en: "X", hu: "X", ro: "X" }, emoji: "❌" },
        { id: "q", label: { de: "Q", en: "Q", hu: "Q", ro: "Q" }, emoji: "❓" },
        { id: "w", label: { de: "W", en: "W", hu: "W", ro: "W" }, emoji: "〰️" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "hu-rhyme",
      title: { de: "Reime finden", en: "Rhyme Time", hu: "Rímkereső", ro: "Găsește rimele" },
      instruction: { de: "Welche Wörter reimen sich auf 'Ház'?", en: "Which words rhyme with 'Ház' (House)?", hu: "Melyik szó rímel a 'Ház' szóra?", ro: "Ce cuvinte rimează cu 'Ház'?" },
      theme: { bg: "#022c22", orbit: "#10b981", accent: "#34d399" },
      buckets: [
        { id: "rhyme", label: { de: "Reimt sich (-áz)", en: "Rhymes (-áz)", hu: "Rímel (-áz)", ro: "Rimează (-áz)" }, color: "#10b981" },
        { id: "no-rhyme", label: { de: "Reimt sich nicht", en: "Does not rhyme", hu: "Nem rímel", ro: "Nu rimează" }, color: "#64748b" },
      ],
      items: [
        { id: "gaz", label: { de: "Gáz", en: "Gáz", hu: "Gáz", ro: "Gáz" }, emoji: "💨", bucketId: "rhyme" },
        { id: "raz", label: { de: "Ráz", en: "Ráz", hu: "Ráz", ro: "Ráz" }, emoji: "⚡", bucketId: "rhyme" },
        { id: "alma", label: { de: "Alma", en: "Alma", hu: "Alma", ro: "Alma" }, emoji: "🍎", bucketId: "no-rhyme" },
        { id: "kocsi", label: { de: "Kocsi", en: "Kocsi", hu: "Kocsi", ro: "Kocsi" }, emoji: "🚗", bucketId: "no-rhyme" },
      ],
    }
  ],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
};
