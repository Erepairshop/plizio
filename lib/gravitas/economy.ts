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

export type UpgradableModuleId = "reactor" | "logistics" | "core" | "sensor" | "warroom" | "repairbay";

export const ALL_MODULE_IDS: UpgradableModuleId[] = ["reactor", "logistics", "core", "sensor", "warroom", "repairbay"];

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
  repairbay: { primary: ["aether_ore", "sable_alloy"],       secondary: "verdant_crystals", rare: "rift_stone" },
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
  sentinel: {
    base: { ember_shards: 40, sable_alloy: 20 } satisfies MaterialCost,
    perLevel: { ember_shards: 15, sable_alloy: 10 } satisfies MaterialCost,
  },
  vanguard: {
    base: { lumen_dust: 30, verdant_crystals: 20 } satisfies MaterialCost,
    perLevel: { lumen_dust: 12, verdant_crystals: 8 } satisfies MaterialCost,
  },
  wraith: {
    base: { aether_ore: 35, verdant_crystals: 15 } satisfies MaterialCost,
    perLevel: { aether_ore: 14, verdant_crystals: 6 } satisfies MaterialCost,
  },
  nexus: {
    base: { lumen_dust: 25, aether_ore: 15 } satisfies MaterialCost,
    perLevel: { lumen_dust: 10, aether_ore: 8 } satisfies MaterialCost,
  },
} as const;

export const WARROOM_PRODUCTION_CONFIG = {
  batchBaseSizePerLevel: 10,
  baseProductionTicksPerBatch: 900,
  upgradeCostRatio: 0.4,
  upgradeDurationRatio: 0.5,
  cancelRefundRatio: 0.5,
  garrisonCap: 1000,
  maxUnitLevel: 10,
  statScalePerLevel: 0.15,
  parallelSlots: 4,
} as const;

export const REPAIR_BAY_CONFIG = {
  baseRepairTicks: 600,
  baseCostRatio: 0.25,
  minCostRatio: 0.12,
  logisticsCostReduction: 0.015,
  warroomSpeedBonus: 0.02,
  maxWarroomSpeedBonus: 0.5,
  decayGraceHours: 24,
  decayGracePerCoreLevel: 1,
  decayRatePerHour: 0.02,
  cancelRefundRatio: 0.5,
} as const;

// ── Warroom level bónuszok ────────────────────────────────────

export const WARROOM_LEVEL_CONFIG = {
  /** Global cap handled by WARROOM_PRODUCTION_CONFIG.garrisonCap */
  garrisonBase: WARROOM_PRODUCTION_CONFIG.garrisonCap,
  garrisonPerLevel: 0,
  /** Production speed bonus: 1.0 = alap, 0.9 = 10% gyorsabb */
  productionSpeedPerLevel: 0.03,
  /** Egység feloldási szintek */
  unitUnlockLevels: {
    sentinel: 1,
    vanguard: 1,
    wraith: 1,
    nexus: 1,
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
  repairbay: {
    dangerGap: 3,
  },
} as const;

export const DRONE_CONFIG = {
  maxDrones: 12,
  baseDronesPerLogisticsLevel: 0.5, // floor(level / 2) + 1
  baseMiningDurationMs: 60 * 60 * 1000, // 60 min base (matching default in mission.ts)
} as const;

export const FACTION_REPUTATION_CONFIG = {
  tiers: {
    hostile: { min: -100, max: -61 },
    tense: { min: -60, max: -21 },
    neutral: { min: -20, max: 20 },
    friendly: { min: 21, max: 60 },
    allied: { min: 61, max: 100 },
  },
  changes: {
    battleVictory: -8, // the defeated faction
    enemyDefeated: 3, // faction whose enemy you defeated
    tradeAccepted: 5,
    tradeRejected: -2,
    dilemmaHelp: 10,
    dilemmaReject: -5,
    espionageCaught: -15,
    naturalDriftPerDay: 1, // +1 towards neutral (0) per day
  },
  effects: {
    hostileRaidFrequency: 2.0,
    hostileRaidStrength: 1.3,
    tenseTradeMarkup: 0.25,
    friendlyTradeDiscount: 0.15,
    alliedTradeDiscount: 0.3,
  },
} as const;

export const GALAXY_CYCLE_CONFIG = {
  phaseDurations: {
    calm: 14 * 24 * 60 * 60 * 1000,    // 14 nap
    storm: 7 * 24 * 60 * 60 * 1000,    // 7 nap
    war: 7 * 24 * 60 * 60 * 1000,      // 7 nap
    trade: 7 * 24 * 60 * 60 * 1000,    // 7 nap
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
export const TRADE_CONFIG = {
  refreshHours: 6,
  maxOffers: 3,
} as const;

export const WEEKLY_MISSION_CONFIG = {
  minDaysBetween: 5,
  maxDaysBetween: 9,
  preparationTimeMs: 60 * 60 * 1000, // 1 hour
  breakTimeMs: 5 * 60 * 1000, // 5 minutes
  waveStrengthMods: [0.8, 1.2, 1.8], // multipliers for enemy stats
  reputationPenaltyForMiss: -5,
} as const;

export const ESPIONAGE_CONFIG = {
  maxActiveMissions: 3,
  minWraithsPerMission: 5,
  deployTimeMs: 2 * 60 * 60 * 1000,
  intelYieldIntervalMs: 4 * 60 * 60 * 1000,
  baseExposureGrowthPerHour: 2,
  exposureThreshold: 80,
  exposureLossRatio: 0.5,
  extractGracePeriodMs: 60 * 60 * 1000,
  intelCosts: { revealBuilding: 50, weakenDefense: 80, factionSecret: 120, earlyWarning: 30, sabotageSupply: 100 },
} as const;

export const RESEARCH_CONFIG = {
  tierUnlockCoreLevels: [3, 8, 14, 20],
  tierDurationMs: [6 * 3600000, 18 * 3600000, 48 * 3600000, 120 * 3600000],
  fieldDiscovery: { 
    weapons: "auto", 
    shields: "auto", 
    logistics: { moduleLevel: ["logistics", 5] as const }, 
    sensors: { moduleLevel: ["sensor", 5] as const }, 
    void: { coreLevel: 10, entropyThreshold: 50 } 
  },
} as const;

export const SUPPLY_ROUTE_CONFIG = {
  baseYieldPerHour: 20,
  yieldIntervalMs: 60 * 60 * 1000,
  raidCheckIntervalMs: 6 * 60 * 60 * 1000,
  disruptionDurationMs: 4 * 60 * 60 * 1000,
  minReputationForRoute: 30,
  maxRoutesBase: 1,
  maxRoutesPerLogisticsLevels: 5,
  destroyChanceIfLowProtection: 0.1,
  abandonReputationPenalty: -3,
} as const;

export const VETERAN_CONFIG = {
  tiers: {
    hardened: { minBattles: 5, statBonus: 0.05 },
    veteran: { minBattles: 10, statBonus: 0.10 },
    elite: { minBattles: 20, statBonus: 0.15 },
    legendary: { minBattles: 50, statBonus: 0.20 },
  }
} as const;
