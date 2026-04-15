import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const ROMANIAN_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Romanian",
  meteorCatch: [
    {
      id: "ro-vowels",
      title: { de: "Rumänische Vokale", en: "Romanian Vowels", hu: "Román magánhangzók", ro: "Prinde vocalele române" },
      prompt: { de: "Fange nur rumänische Sonderzeichen (ă, â, î, ș, ț).", en: "Catch only Romanian special characters (ă, â, î, ș, ț).", hu: "Csak a román speciális karaktereket fogd ki (ă, â, î, ș, ț).", ro: "Prinde doar diacriticele românești (ă, â, î, ș, ț)." },
      goal: 8,
      speed: 4,
      theme: { sky: "#1e1b4b", glow: "#facc15", accent: "#fbbf24" },
      correctItems: [
        { id: "ă", label: { de: "Ă", en: "Ă", hu: "Ă", ro: "Ă" }, emoji: "🅰️" },
        { id: "â", label: { de: "Â", en: "Â", hu: "Â", ro: "Â" }, emoji: "🅰️" },
        { id: "î", label: { de: "Î", en: "Î", hu: "Î", ro: "Î" }, emoji: "ℹ️" },
        { id: "ș", label: { de: "Ș", en: "Ș", hu: "Ș", ro: "Ș" }, emoji: "💲" },
        { id: "ț", label: { de: "Ț", en: "Ț", hu: "Ț", ro: "Ț" }, emoji: "🔱" },
      ],
      wrongItems: [
        { id: "k", label: { de: "K", en: "K", hu: "K", ro: "K" }, emoji: "🆗" },
        { id: "y", label: { de: "Y", en: "Y", hu: "Y", ro: "Y" }, emoji: "💹" },
        { id: "w", label: { de: "W", en: "W", hu: "W", ro: "W" }, emoji: "〰️" },
      ],
    }
  ],
  orbitSort: [],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
};
