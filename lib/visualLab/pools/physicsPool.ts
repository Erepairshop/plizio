import type { MultilingualVisualLabPool } from "@/lib/visualLab/multilingualTypes";

export const PHYSICS_VISUAL_LAB_POOL: MultilingualVisualLabPool = {
  subject: "Physics",
  meteorCatch: [
    {
      id: "phys-matter-states",
      title: { de: "Aggregatzustände", en: "States of Matter", hu: "Halmazállapotok", ro: "Stări de agregare" },
      prompt: { de: "Fange nur gasförmige Dinge.", en: "Catch only gaseous items.", hu: "Csak a gáz halmazállapotúakat fogd ki.", ro: "Prinde doar stările gazoase." },
      goal: 6,
      speed: 5,
      theme: { sky: "#0c4a6e", glow: "#7dd3fc", accent: "#38bdf8" },
      correctItems: [
        { id: "steam", label: { de: "Wasserdampf", en: "Steam", hu: "Vízgőz", ro: "Abur" }, emoji: "💨" },
        { id: "air", label: { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" }, emoji: "🌬️" },
        { id: "helium", label: { de: "Helium", en: "Helium", hu: "Hélium", ro: "Heliu" }, emoji: "🎈" },
      ],
      wrongItems: [
        { id: "ice", label: { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață" }, emoji: "🧊" },
        { id: "water", label: { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă" }, emoji: "💧" },
        { id: "stone", label: { de: "Stein", en: "Stone", hu: "Kő", ro: "Piatră" }, emoji: "🪨" },
      ],
    }
  ],
  orbitSort: [
    {
      id: "phys-conductors",
      title: { de: "Leiter oder Isolatoren", en: "Conductors or Insulators", hu: "Vezetők vagy szigetelők", ro: "Conductori sau Izolatori" },
      instruction: { de: "Leitet es Strom?", en: "Does it conduct electricity?", hu: "Vezeti az áramot?", ro: "Conduce electricitatea?" },
      theme: { bg: "#0f172a", orbit: "#facc15", accent: "#fbbf24" },
      buckets: [
        { id: "conductor", label: { de: "Leiter", en: "Conductor", hu: "Vezető", ro: "Conductor" }, color: "#fbbf24" },
        { id: "insulator", label: { de: "Isolator", en: "Insulator", hu: "Szigetelő", ro: "Izolator" }, color: "#64748b" },
      ],
      items: [
        { id: "copper", label: { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru" }, emoji: "🧲", bucketId: "conductor" },
        { id: "iron", label: { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" }, emoji: "🔩", bucketId: "conductor" },
        { id: "wood", label: { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" }, emoji: "🪵", bucketId: "insulator" },
        { id: "rubber", label: { de: "Gummi", en: "Rubber", hu: "Gumi", ro: "Cauciuc" }, emoji: "🦆", bucketId: "insulator" },
      ],
    }
  ],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
};
