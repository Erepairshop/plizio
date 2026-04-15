import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const CHEMISTRY_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Chemistry",
  meteorCatch: [
    {
      id: "chem-elements",
      title: { de: "Elemente fangen", en: "Catch the Elements", hu: "Elemvadászat", ro: "Prinde elementele" },
      prompt: { de: "Fange nur Metalle.", en: "Catch only metals.", hu: "Csak fémeket fogj ki.", ro: "Prinde doar metalele." },
      goal: 6,
      speed: 5,
      theme: { sky: "#1e1b4b", glow: "#818cf8", accent: "#c7d2fe" },
      correctItems: [
        { id: "iron", label: { de: "Eisen (Fe)", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩" },
        { id: "gold", label: { de: "Gold (Au)", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🪙" },
        { id: "copper", label: { de: "Kupfer (Cu)", en: "Copper", hu: "Réz", ro: "Cupru" }, emoji: "🧲" },
      ],
      wrongItems: [
        { id: "oxygen", label: { de: "Sauerstoff (O)", en: "Oxygen", hu: "Oxigén", ro: "Oxigen" }, emoji: "💨" },
        { id: "carbon", label: { de: "Kohlenstoff (C)", en: "Carbon", hu: "Szén", ro: "Carbon" }, emoji: "🪨" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "chem-mixtures",
      title: { de: "Gemische oder Stoffe", en: "Mixtures or Pure Substances", hu: "Keverékek vagy tiszta anyagok", ro: "Amestecuri sau Substanțe pure" },
      instruction: { de: "Ist es ein Gemisch?", en: "Is it a mixture or a pure substance?", hu: "Keverék vagy tiszta anyag?", ro: "Este un amestec sau o substanță pură?" },
      theme: { bg: "#0f172a", orbit: "#10b981", accent: "#34d399" },
      buckets: [
        { id: "mixture", label: { de: "Gemisch", en: "Mixture", hu: "Keverék", ro: "Amestec" }, color: "#10b981" },
        { id: "pure", label: { de: "Reinstoff", en: "Pure Substance", hu: "Tiszta anyag", ro: "Substanță pură" }, color: "#3b82f6" },
      ],
      items: [
        { id: "air", label: { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" }, emoji: "🌬️", bucketId: "mixture" },
        { id: "saltwater", label: { de: "Salzwasser", en: "Saltwater", hu: "Sós víz", ro: "Apă sărată" }, emoji: "🌊", bucketId: "mixture" },
        { id: "gold", label: { de: "Gold", en: "Gold", hu: "Arany", ro: "Aur" }, emoji: "🪙", bucketId: "pure" },
        { id: "distilled", label: { de: "Dest. Wasser", en: "Distilled Water", hu: "Desztillált víz", ro: "Apă distilată" }, emoji: "🧪", bucketId: "pure" },
      ],
    }
  ],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
};
