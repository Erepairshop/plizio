/**
 * ── Gravitas Economy — központi ár- és egyensúly konfig ──────
 *
 * MINDEN ár és költség itt van egy helyen.
 * Ha módosítani kell az egyensúlyt → csak ezt a fájlt kell szerkeszteni.
 *
 * ═══════════════════════════════════════════════════════════════
 * GYŰJTÉSI SEBESSÉG REFERENCIA (1 drón, lv1 logistics):
 *   Lumen Dust:       ~100/óra  (gyakori)    — LD
 *   Verdant Crystals:  ~82/óra  (gyakori)    — VC
 *   Aether Ore:        ~66/óra  (közepes)    — AO
 *   Ember Shards:      ~52/óra  (ritka)      — ES
 *   Sable Alloy:       ~38/óra  (ritka)      — SA
 *   Rift Stone:        ~26/óra  (nagyon ritka)— RS
 *
 * Logistics bonus: +10-15% / szint → lv10: ~2x gyorsabb
 * ═══════════════════════════════════════════════════════════════
 *
 * LEVEL RENDSZER SZABÁLYOK:
 *   - 5 modul: reactor, logistics, core, sensor, warroom
 *   - Mind max 25 level
 *   - Core = kapuőr: semmi nem lehet magasabb szintű mint a core
 *   - Ha modul 3+ szinttel lemarad core-tól → veszélyzóna
 *   - ~2 hónap aktív játék a core 25 eléréséhez
 *   - Lv25 után: prémium fejlesztések (nem lv26, hanem lv25+)
 *
 * WARROOM EGYSÉG FELOLDÁSOK:
 *   - Warroom lv1:  Voidwalker
 *   - Warroom lv5:  2. egység
 *   - Warroom lv10: 3. egység
 *   - Warroom lv15: 4. egység
 *   - Warroom lv20: 5. egység
 */

import type { GalaxyMaterialId } from "./world/mission";

// ── Költség típus ─────────────────────────────────────────────

export type MaterialCost = Partial<Record<GalaxyMaterialId, number>>;

// ── Modul ID-k (az 5 fejleszthető modul) ──────────────────────

export type UpgradableModuleId = "reactor" | "logistics" | "core" | "sensor" | "warroom";

export const ALL_MODULE_IDS: UpgradableModuleId[] = ["reactor", "logistics", "core", "sensor", "warroom"];

// ── Szint költségek (1→2, 2→3, ... 24→25) ─────────────────────
//
// Képlet: LINEÁRIS görbe, lv2 = 1 nap gyűjtés, lv25 = 10 nap (24h/nap)
// Max 4 anyag / épület fejlesztés (2 primary + 1 secondary + 1 rare)
// Max 2 anyag / katona fejlesztés
// Egy modul maxolása: ~132 nap (sum 1..10 × 24 level)
//
// Az árak SZINTENKÉNT vannak, tehát getLevelCost(moduleId, targetLevel)
// = mennyibe kerül az adott szintre fejleszteni

export interface LevelCostEntry {
  cost: MaterialCost;
  /** Építési idő másodpercben (valós idő, nem tick) */
  buildSeconds: number;
  /** Előfeltétel: core minimum szintje (core-nál ez nincs) */
  requireCoreLevel?: number;
  /** Egyéb előfeltételek: moduleId → minimális szint */
  requireModules?: Partial<Record<UpgradableModuleId, number>>;
}

// ── Építési idő konfig ────────────────────────────────────────
//
// Core:  lv2 = 1 nap (86400s),  lv25 = 7 nap (604800s)
// Többi: lv2 = 12 óra (43200s), lv25 = 3.5 nap (302400s)
// Lineáris interpoláció közöttük

const CORE_BUILD_SECONDS = { min: 86400, max: 604800 };   // 1 nap → 7 nap
const OTHER_BUILD_SECONDS = { min: 43200, max: 302400 };   // 12 óra → 3.5 nap

function getBuildSeconds(moduleId: UpgradableModuleId, targetLevel: number): number {
  const range = moduleId === "core" ? CORE_BUILD_SECONDS : OTHER_BUILD_SECONDS;
  // Lineáris interpoláció: lv2 = min, lv25 = max
  const t = (targetLevel - 2) / 23; // 0..1
  return Math.round(range.min + t * (range.max - range.min));
}

// ── Upgrade slot rendszer ─────────────────────────────────────

export const UPGRADE_SLOT_CONFIG = {
  /** Alapértelmezett párhuzamos upgrade slotok száma */
  baseSlots: 1,
  /** Max slotok (feladatokkal bővíthető) */
  maxSlots: 5,
} as const;

// ── Szint költség generátor ───────────────────────────────────
//
// Ahelyett hogy 25×5 = 125 sort kézzel írnánk, generáljuk.
// Minden modulnak saját "profil"-ja van ami meghatározza:
//   - Melyik anyagokat használja elsődlegesen
//   - Milyen szorzóval nőnek az árak

interface ModuleCostProfile {
  /** 2 elsődleges anyag (mindig kell) */
  primary: [GalaxyMaterialId, GalaxyMaterialId];
  /** 1 másodlagos anyag (lv6-tól) */
  secondary: GalaxyMaterialId;
  /** 1 ritka anyag (lv14-től) */
  rare: GalaxyMaterialId;
}

// Max 4 anyag / épület fejlesztés (2 primary + 1 secondary + 1 rare)
const MODULE_COST_PROFILES: Record<UpgradableModuleId, ModuleCostProfile> = {
  reactor:   { primary: ["ember_shards", "lumen_dust"],      secondary: "aether_ore",      rare: "rift_stone" },
  logistics: { primary: ["verdant_crystals", "lumen_dust"],  secondary: "sable_alloy",     rare: "rift_stone" },
  core:      { primary: ["aether_ore", "lumen_dust"],        secondary: "ember_shards",    rare: "rift_stone" },
  sensor:    { primary: ["verdant_crystals", "aether_ore"],  secondary: "lumen_dust",      rare: "rift_stone" },
  warroom:   { primary: ["sable_alloy", "lumen_dust"],       secondary: "ember_shards",    rare: "rift_stone" },
};

/**
 * Generál egy szint költséget az adott modulhoz és szinthez.
 *
 * GÖRBE: lineáris, lv2 = 1 nap gyűjtés, lv25 = 10 nap gyűjtés (24h/nap)
 * Max 4 anyag / fejlesztés: 2 primary + 1 secondary (lv6+) + 1 rare (lv14+)
 *
 * Primary amount = gatherDays × 24h × slowestPrimaryRate
 * Secondary: 15-30% of primary time (ramp lv6→lv25)
 * Rare: 10-25% of primary time (ramp lv14→lv25)
 */
function generateLevelCost(moduleId: UpgradableModuleId, targetLevel: number): LevelCostEntry {
  const profile = MODULE_COST_PROFILES[moduleId];

  // Lineáris görbe: lv2 = 1 nap, lv25 = 10 nap
  const gatherDays = 1 + (targetLevel - 2) * 9 / 23;
  const gatherHours = gatherDays * 24;

  // Bottleneck: leglassabb primary anyag
  const slowestPrimaryRate = Math.min(
    YIELD_PER_HOUR[profile.primary[0]],
    YIELD_PER_HOUR[profile.primary[1]],
  );
  const primaryAmount = Math.round(gatherHours * slowestPrimaryRate);

  const cost: MaterialCost = {};

  // 2 primary anyag: mindig kell
  cost[profile.primary[0]] = primaryAmount;
  cost[profile.primary[1]] = primaryAmount;

  // 1 secondary anyag: lv6-tól, 15%→30% primary idő
  if (targetLevel >= 6) {
    const secFrac = 0.15 + (targetLevel - 6) * 0.15 / 19;
    const secRate = YIELD_PER_HOUR[profile.secondary];
    cost[profile.secondary] = Math.round(secFrac * gatherHours * secRate);
  }

  // 1 rare anyag: lv14-től, 10%→25% primary idő
  if (targetLevel >= 14) {
    const rareFrac = 0.10 + (targetLevel - 14) * 0.15 / 11;
    const rareRate = YIELD_PER_HOUR[profile.rare];
    cost[profile.rare] = Math.round(rareFrac * gatherHours * rareRate);
  }

  const entry: LevelCostEntry = {
    cost,
    buildSeconds: getBuildSeconds(moduleId, targetLevel),
  };

  // Core előfeltétel (core-nál nincs, többinél = target level)
  if (moduleId !== "core") {
    entry.requireCoreLevel = targetLevel;
  }

  // Core lv3+ igényel reactor lv2+
  if (moduleId === "core" && targetLevel >= 3) {
    entry.requireModules = {
      reactor: Math.max(1, targetLevel - 2),
    };
  }

  return entry;
}

// ── Generált szint költségek (cache) ──────────────────────────

const _levelCostCache = new Map<string, LevelCostEntry>();

export function getLevelCost(moduleId: UpgradableModuleId, targetLevel: number): LevelCostEntry | null {
  if (targetLevel < 2 || targetLevel > 25) return null;
  const key = `${moduleId}_${targetLevel}`;
  let entry = _levelCostCache.get(key);
  if (!entry) {
    entry = generateLevelCost(moduleId, targetLevel);
    _levelCostCache.set(key, entry);
  }
  return entry;
}

/** Ellenőrzi hogy fejleszthető-e az adott modul */
export function canUpgradeModule(
  moduleId: UpgradableModuleId,
  currentLevels: Record<UpgradableModuleId, number>,
  inventory: Record<GalaxyMaterialId, number>,
): { canUpgrade: boolean; reason?: string } {
  const currentLevel = currentLevels[moduleId];
  if (currentLevel >= 25) return { canUpgrade: false, reason: "max_level" };

  const targetLevel = currentLevel + 1;
  const entry = getLevelCost(moduleId, targetLevel);
  if (!entry) return { canUpgrade: false, reason: "no_cost_data" };

  // Core level előfeltétel
  if (entry.requireCoreLevel && currentLevels.core < entry.requireCoreLevel) {
    return { canUpgrade: false, reason: "core_level" };
  }

  // Egyéb modul előfeltételek
  if (entry.requireModules) {
    for (const [reqMod, reqLv] of Object.entries(entry.requireModules)) {
      if (currentLevels[reqMod as UpgradableModuleId] < reqLv!) {
        return { canUpgrade: false, reason: "module_requirement" };
      }
    }
  }

  // Anyagok ellenőrzése
  for (const [matId, amount] of Object.entries(entry.cost)) {
    if (amount && inventory[matId as GalaxyMaterialId] < amount) {
      return { canUpgrade: false, reason: "materials" };
    }
  }

  return { canUpgrade: true };
}

// ── Egység költségek (warroom) ─────────────────────────────────

export const UNIT_COSTS = {
  /** Voidwalker — alap katona, olcsó, gyors (warroom lv1) */
  militia: {
    cost: { lumen_dust: 25, verdant_crystals: 15 } satisfies MaterialCost,
    productionTicks: 900, // 15 min (1 tick = 1 sec)
    maxCount: 10,
  },
  /** 2. egység — warroom lv5-től (TBD) */
  ranger: {
    cost: { aether_ore: 60, verdant_crystals: 30 } satisfies MaterialCost,
    productionTicks: 600, // 10 min
    maxCount: 1,
  },
  /** 3. egység — warroom lv10-től (TBD) */
  shieldbearer: {
    cost: { ember_shards: 50, sable_alloy: 30 } satisfies MaterialCost,
    productionTicks: 600, // 10 min
    maxCount: 1,
  },
  /** 4. egység — warroom lv15-től (TBD) */
  scout_drone: {
    cost: { lumen_dust: 20, verdant_crystals: 20 } satisfies MaterialCost,
    productionTicks: 600, // 10 min
    maxCount: 3,
  },
} as const;

// ── Warroom level bónuszok ────────────────────────────────────

export const WARROOM_LEVEL_CONFIG = {
  /** Garrison max = base + (level-1) × perLevel */
  garrisonBase: 10,
  garrisonPerLevel: 40, // lv1: 10, lv5: 170, lv10: 370, lv25: 970 ≈ 1000
  /** Production speed bonus: 1.0 = alap, 0.9 = 10% gyorsabb */
  productionSpeedPerLevel: 0.03, // lv1: 1.0, lv10: 0.73, lv25: 0.28 → max ~3.5x gyorsabb
  /** Egység feloldási szintek */
  unitUnlockLevels: {
    militia: 1,
    ranger: 5,
    shieldbearer: 10,
    scout_drone: 15,
    // 5. egység: 20 (TBD)
  } as Record<string, number>,
} as const;

// ── Modul level bónuszok ──────────────────────────────────────

export const MODULE_LEVEL_CONFIG = {
  reactor: {
    /** Power termelés bónusz per level (%) */
    powerBonusPerLevel: 8, // lv1: +0%, lv10: +72%, lv25: +192%
    /** Veszélyzóna: ha core - reactor >= 3 */
    dangerGap: 3,
  },
  logistics: {
    /** Bányász sebesség bónusz per level (%) */
    gatherSpeedBonusPerLevel: 12, // lv1: +0%, lv10: +108%, lv25: +288%
    dangerGap: 3,
  },
  sensor: {
    /** Threat előrejelzés bónusz (tick-ben korábbi figyelmeztetés) */
    threatWarningPerLevel: 2, // lv1: +0 tick, lv10: +18 tick, lv25: +48 tick
    dangerGap: 3,
  },
  core: {
    /** Max szint — kapuőr, más modulok nem léphetik túl */
    maxLevel: 25,
  },
  warroom: {
    dangerGap: 3,
  },
} as const;

// ── Veszélyzóna ellenőrzés ────────────────────────────────────

export function isModuleInDanger(
  moduleId: UpgradableModuleId,
  currentLevels: Record<UpgradableModuleId, number>,
): boolean {
  if (moduleId === "core") return false;
  const config = MODULE_LEVEL_CONFIG[moduleId as keyof typeof MODULE_LEVEL_CONFIG];
  const gap = "dangerGap" in config ? config.dangerGap : 3;
  return currentLevels.core - currentLevels[moduleId] >= gap;
}

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
 * A leglassabb anyag határozza meg a teljes időt (1 drón, lv1).
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
