import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { StarholdShopItem } from "@/lib/gravitas/sim/progression";

export type StarhallTabId = "chamber" | "chronicle" | "daily";

export type ShopPricingTier = "stellar" | "hybrid" | "material";

export interface ShopHybridCost {
  stars: number;
  materialLabel?: LocalizedString;
  materialAmount?: number;
  tier: ShopPricingTier;
}

const HYBRID_IDS = new Set(["auto_salvage", "resonance_amplifier", "mark_shield", "shield_efficiency"]);
const MATERIAL_IDS = new Set(["module_coolant", "void_lens"]);

const MATERIAL_LABEL_BY_TIER: LocalizedString = {
  en: "Ember Shards",
  hu: "Parázs Szilánk",
  de: "Glutsplitter",
  ro: "Cioburi de Jar",
};

const MATERIAL_LABEL_UTILITY: LocalizedString = {
  en: "Aether Ore",
  hu: "Éter Érc",
  de: "Äthererz",
  ro: "Minereu Aether",
};

export function getPricingTier(item: StarholdShopItem): ShopPricingTier {
  if (MATERIAL_IDS.has(item.id)) return "material";
  if (HYBRID_IDS.has(item.id)) return "hybrid";
  return "stellar";
}

export function getHybridCost(item: StarholdShopItem): ShopHybridCost {
  const tier = getPricingTier(item);
  if (tier === "stellar") {
    return { stars: item.cost, tier };
  }
  if (tier === "material") {
    return {
      stars: 0,
      materialLabel: MATERIAL_LABEL_UTILITY,
      materialAmount: Math.max(6, item.cost * 2),
      tier,
    };
  }
  return {
    stars: Math.max(1, Math.ceil(item.cost / 2)),
    materialLabel: MATERIAL_LABEL_BY_TIER,
    materialAmount: Math.max(4, Math.ceil(item.cost * 1.2)),
    tier,
  };
}

export const TIER_LABEL: Record<ShopPricingTier, LocalizedString> = {
  stellar: { en: "Stellar", hu: "Csillag", de: "Stellar", ro: "Stelar" },
  hybrid: { en: "Hybrid", hu: "Hibrid", de: "Hybrid", ro: "Hibrid" },
  material: { en: "Material Tribute", hu: "Nyersanyag", de: "Material", ro: "Material" },
};

export const TIER_COLOR: Record<ShopPricingTier, string> = {
  stellar: "border-amber-400/40 bg-amber-500/10 text-amber-200",
  hybrid: "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200",
  material: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
};

/** Rotating daily task selection. Pure UI — reads progression/milestones only. */
export function pickDailyTaskIds(allIds: string[], slots = 3): string[] {
  if (allIds.length === 0) return [];
  const dayIndex = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  const sorted = [...allIds].sort();
  const picks: string[] = [];
  for (let i = 0; i < Math.min(slots, sorted.length); i++) {
    picks.push(sorted[(dayIndex + i * 7) % sorted.length]);
  }
  return picks;
}

export function formatRelativeTime(ts: number): string {
  const diff = Date.now() - ts;
  if (diff < 60_000) return "now";
  const m = Math.floor(diff / 60_000);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
}
