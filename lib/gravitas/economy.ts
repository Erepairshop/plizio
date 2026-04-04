/**
 * ── Gravitas Economy — központi ár- és egyensúly konfig ──────
 *
 * MINDEN ár és költség itt van egy helyen.
 * Ha módosítani kell az egyensúlyt → csak ezt a fájlt kell szerkeszteni.
 *
 * Gyűjtési sebesség referencia (1 drón, lv1 logistics):
 *   Lumen Dust:       ~100/óra  (gyakori)
 *   Verdant Crystals:  ~82/óra  (gyakori)
 *   Aether Ore:        ~66/óra  (közepes)
 *   Ember Shards:      ~52/óra  (ritka)
 *   Sable Alloy:       ~38/óra  (ritka)
 *   Rift Stone:        ~26/óra  (nagyon ritka)
 *
 * Tervezési elv:
 *   - Alap egységek: ~15-30 perc gyűjtés
 *   - Közép egységek: ~1 óra gyűjtés
 *   - Ritka egységek/épületek: ~2-4 óra gyűjtés
 *   - Endgame fejlesztések: ~8+ óra gyűjtés
 */

import type { GalaxyMaterialId } from "./world/mission";

// ── Költség típus ─────────────────────────────────────────────

export type MaterialCost = Partial<Record<GalaxyMaterialId, number>>;

// ── Egység költségek (warroom) ─────────────────────────────────

export const UNIT_COSTS = {
  /** Voidwalker — alap katona, olcsó, gyors */
  militia: {
    cost: { lumen_dust: 25, verdant_crystals: 15 } satisfies MaterialCost,
    productionTicks: 180, // 15 min
    maxCount: 10,
  },
  /** Recon Probe — felderítő szonda, közepes ár */
  ranger: {
    cost: { aether_ore: 60, verdant_crystals: 30 } satisfies MaterialCost,
    productionTicks: 120, // 10 min
    maxCount: 1,
  },
  /** Aegis Sentinel — nehéz védelem, drága */
  shieldbearer: {
    cost: { ember_shards: 50, sable_alloy: 30 } satisfies MaterialCost,
    productionTicks: 120, // 10 min
    maxCount: 1,
  },
  /** Scan Drone — gyors felderítés */
  scout_drone: {
    cost: { lumen_dust: 20, verdant_crystals: 20 } satisfies MaterialCost,
    productionTicks: 120, // 10 min
    maxCount: 3,
  },
} as const;

// ── Épület fejlesztési költségek (jövő) ───────────────────────

export const UPGRADE_COSTS = {
  /** Warroom lv2 */
  warroom_lv2: {
    cost: { sable_alloy: 80, ember_shards: 60, rift_stone: 30 } satisfies MaterialCost,
  },
  /** Warroom lv3 */
  warroom_lv3: {
    cost: { rift_stone: 100, sable_alloy: 120, ember_shards: 80 } satisfies MaterialCost,
  },
} as const;

// ── Gyűjtési idő kalkulátor (debug segédlet) ──────────────────

const YIELD_PER_HOUR: Record<GalaxyMaterialId, number> = {
  lumen_dust: 100,
  verdant_crystals: 82,
  aether_ore: 66,
  ember_shards: 52,
  sable_alloy: 38,
  rift_stone: 26,
};

/**
 * Kiszámolja mennyi idő (percben) egy költség összegyűjtése.
 * A leglassabb anyag határozza meg a teljes időt.
 */
export function estimateGatherMinutes(cost: MaterialCost): number {
  let maxMinutes = 0;
  for (const [matId, amount] of Object.entries(cost)) {
    if (!amount) continue;
    const perHour = YIELD_PER_HOUR[matId as GalaxyMaterialId] ?? 50;
    const minutes = (amount / perHour) * 60;
    if (minutes > maxMinutes) maxMinutes = minutes;
  }
  return Math.round(maxMinutes);
}
