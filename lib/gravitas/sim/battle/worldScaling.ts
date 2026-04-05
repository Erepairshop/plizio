import type { GalaxyMaterialId } from "../../world/mission";
import type { LocalizedString } from "../types";

/** Calculates scaled enemy stats based on world level */
export function getScaledEnemyStats(
  baseStats: { armor: number; shield: number; firepower: number; speed: number; garrison: number; antiAir: number },
  worldLevel: number,
): typeof baseStats {
  // Multiplier: lv1 = 1.0, lv5 = 1.4, lv10 = 1.9, lv25 = 3.4
  const scale = 1 + (worldLevel - 1) * 0.1;
  return {
    armor: Math.round(baseStats.armor * scale),
    shield: Math.round(baseStats.shield * scale),
    firepower: Math.round(baseStats.firepower * scale),
    speed: Math.round(baseStats.speed * scale),
    garrison: Math.round(baseStats.garrison * scale),
    antiAir: Math.round(baseStats.antiAir * scale),
  };
}

/** Minimum troop count per building + world level */
export function getMinimumTroops(buildingId: string, worldLevel: number): number {
  const baseTroops: Record<string, number> = {
    "derelict-outpost": 20,
    "raider-stronghold": 50,
    "fortified-relay": 100,
  };
  const base = baseTroops[buildingId] ?? 50;
  // Lv1: base, Lv10: base×3, Lv25: base×6
  const scale = 1 + (worldLevel - 1) * 0.22;
  return Math.round(base * scale);
}

/** Loot multiplier based on world level — higher level = better loot */
export function getLootMultiplier(worldLevel: number): number {
  // Lv1: 1.0, Lv5: 1.4, Lv10: 2.0, Lv25: 3.4
  return 1 + (worldLevel - 1) * 0.1;
}

/** Meteor yield multiplier — higher level = more and rarer materials */
export function getMeteorYieldMultiplier(worldLevel: number): number {
  return 1 + (worldLevel - 1) * 0.1;
}

/** Which materials are available at a given world level */
export function getAvailableMaterials(worldLevel: number): GalaxyMaterialId[] {
  const materials: GalaxyMaterialId[] = ["lumen_dust", "verdant_crystals"];
  if (worldLevel >= 3) materials.push("aether_ore");
  if (worldLevel >= 6) materials.push("ember_shards");
  if (worldLevel >= 10) materials.push("sable_alloy");
  if (worldLevel >= 15) materials.push("rift_stone");
  return materials;
}

/** Random delay for world level transition: 24-48 hours in ms */
import { nextRandom } from "../rng";

export function getEnemyResetTime(rngState: number): { time: number; nextRng: number } {
  const minMs = 24 * 60 * 60 * 1000;   // 24 hours
  const maxMs = 48 * 60 * 60 * 1000;   // 48 hours
  const { value: rReset, nextState: sReset } = nextRandom(rngState);
  return { time: minMs + rReset * (maxMs - minMs), nextRng: sReset };
}

/** Texts for world level changes */
export const WORLD_LEVEL_TEXTS = {
  pending: {
    en: "Disturbances detected in the surrounding sectors...",
    hu: "Zavarokat észleltünk a környező szektorokban...",
    de: "Störungen in den umliegenden Sektoren erkannt...",
    ro: "Perturbări detectate în sectoarele înconjurătoare...",
  } as LocalizedString,
  changed: {
    en: "The galaxy forces have adapted to your presence. Everything out there just got stronger.",
    hu: "A galaxis erői alkalmazkodtak a jelenlétedhez. Odakint minden erősebb lett.",
    de: "Die Kräfte der Galaxie haben sich an deine Präsenz angepasst. Alles da draußen ist stärker geworden.",
    ro: "Forțele galaxiei s-au adaptat la prezența ta. Totul de afară a devenit mai puternic.",
  } as LocalizedString,
};
