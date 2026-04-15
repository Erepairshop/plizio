import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const ASTRODEUTSCH_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Astrodeutsch",
  meteorCatch: [
    {
      id: "de-vokale",
      title: { de: "Vokale fangen", en: "Vokale fangen", hu: "Vokale fangen", ro: "Vokale fangen" },
      prompt: { de: "Fange nur die Vokale (A, E, I, O, U).", en: "Fange nur die Vokale (A, E, I, O, U).", hu: "Fange nur die Vokale (A, E, I, O, U).", ro: "Fange nur die Vokale (A, E, I, O, U)." },
      goal: 8,
      speed: 4,
      theme: { sky: "#0b132b", glow: "#00f5d4", accent: "#00bbf9" },
      correctItems: [
        { id: "a", label: { de: "A", en: "A", hu: "A", ro: "A" }, emoji: "🅰️" },
        { id: "e", label: { de: "E", en: "E", hu: "E", ro: "E" }, emoji: "📧" },
        { id: "i", label: { de: "I", en: "I", hu: "I", ro: "I" }, emoji: "ℹ️" },
        { id: "o", label: { de: "O", en: "O", hu: "O", ro: "O" }, emoji: "⭕" },
        { id: "u", label: { de: "U", en: "U", hu: "U", ro: "U" }, emoji: "⛎" },
      ],
      wrongItems: [
        { id: "b", label: { de: "B", en: "B", hu: "B", ro: "B" }, emoji: "🅱️" },
        { id: "c", label: { de: "C", en: "C", hu: "C", ro: "C" }, emoji: "©️" },
        { id: "d", label: { de: "D", en: "D", hu: "D", ro: "D" }, emoji: "🆔" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "de-artikel",
      title: { de: "Der, Die oder Das", en: "Der, Die oder Das", hu: "Der, Die vagy Das", ro: "Der, Die sau Das" },
      instruction: { de: "Ordne die Nomen dem richtigen Artikel zu.", en: "Ordne die Nomen dem richtigen Artikel zu.", hu: "Rendezd a főneveket.", ro: "Sortează substantivele." },
      theme: { bg: "#0f172a", orbit: "#3b82f6", accent: "#60a5fa" },
      buckets: [
        { id: "der", label: { de: "Der", en: "Der", hu: "Der", ro: "Der" }, color: "#3b82f6" },
        { id: "die", label: { de: "Die", en: "Die", hu: "Die", ro: "Die" }, color: "#ec4899" },
        { id: "das", label: { de: "Das", en: "Das", hu: "Das", ro: "Das" }, color: "#10b981" },
      ],
      items: [
        { id: "tisch", label: { de: "Tisch", en: "Tisch", hu: "Tisch", ro: "Tisch" }, emoji: "🪑", bucketId: "der" },
        { id: "lampe", label: { de: "Lampe", en: "Lampe", hu: "Lampe", ro: "Lampe" }, emoji: "💡", bucketId: "die" },
        { id: "buch", label: { de: "Buch", en: "Buch", hu: "Buch", ro: "Buch" }, emoji: "📖", bucketId: "das" },
      ],
    }
  ],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
};
