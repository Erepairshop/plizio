import type { LocalizedString } from "../types";
import type { GarrisonEntry } from "./types";
import { VETERAN_CONFIG } from "../../economy";

const VETERAN_NAMES: LocalizedString[] = [
  { en: "The Red Shadows", hu: "A Vörös Árnyékok", de: "Die Roten Schatten", ro: "Umbrele Roșii" },
  { en: "Iron Vanguard", hu: "Vas Előőrs", de: "Eiserne Vorhut", ro: "Avangarda de Fier" },
  { en: "Void Walkers", hu: "Üresség Járók", de: "Leerenläufer", ro: "Umblătorii în Vid" },
  { en: "Steel Phalanx", hu: "Acélfalanx", de: "Stahlphalanx", ro: "Falanga de Oțel" },
  { en: "Silent Death", hu: "Néma Halál", de: "Stiller Tod", ro: "Moartea Tăcută" },
  { en: "Storm Bringers", hu: "Viharhozók", de: "Sturmbringer", ro: "Aducătorii de Furtună" },
  { en: "Ghost Squadron", hu: "Szellem Osztag", de: "Geistergeschwader", ro: "Escadrila Fantomă" },
  { en: "Blood Hounds", hu: "Vérkopók", de: "Bluthunde", ro: "Câinii de Sânge" },
  { en: "Sun Breakers", hu: "Napzúzók", de: "Sonnenbrecher", ro: "Distrugătorii de Sori" },
  { en: "Nightfall", hu: "Éjhullás", de: "Einbruch der Nacht", ro: "Căderea Nopții" },
  { en: "Crimson Blades", hu: "Karmazsin Pengék", de: "Karmesinklingen", ro: "Lamele Purpurii" },
  { en: "Abyssal Guard", hu: "Abisszális Gárda", de: "Abgrundwache", ro: "Garda Abisală" },
  { en: "Echo Company", hu: "Visszhang Század", de: "Echo-Kompanie", ro: "Compania Ecou" },
  { en: "Nova Strike", hu: "Nova Csapás", de: "Nova-Schlag", ro: "Lovitura Nova" },
  { en: "Titan's Wrath", hu: "Titán Haragja", de: "Zorn des Titanen", ro: "Furia Titanului" },
  { en: "Spectral Ops", hu: "Spektrális Egység", de: "Spektral-Ops", ro: "Operațiuni Spectrale" },
  { en: "Apex Predators", hu: "Csúcsragadozók", de: "Spitzenprädatoren", ro: "Prădători de Vârf" },
  { en: "Meteor Fall", hu: "Meteorhullás", de: "Meteorfall", ro: "Căderea Meteorului" },
  { en: "Onyx Legion", hu: "Ónix Légió", de: "Onyx-Legion", ro: "Legiunea Onix" },
  { en: "Solar Flare", hu: "Napkitörés", de: "Sonneneruption", ro: "Erupție Solară" },
];

export function getVeteranTier(battlesSurvived: number): "hardened" | "veteran" | "elite" | "legendary" | undefined {
  if (battlesSurvived >= VETERAN_CONFIG.tiers.legendary.minBattles) return "legendary";
  if (battlesSurvived >= VETERAN_CONFIG.tiers.elite.minBattles) return "elite";
  if (battlesSurvived >= VETERAN_CONFIG.tiers.veteran.minBattles) return "veteran";
  if (battlesSurvived >= VETERAN_CONFIG.tiers.hardened.minBattles) return "hardened";
  return undefined;
}

export function getVeteranStatMultiplier(tier?: "hardened" | "veteran" | "elite" | "legendary"): number {
  if (!tier) return 1.0;
  return 1.0 + VETERAN_CONFIG.tiers[tier].statBonus;
}

export function generateVeteranName(seed?: number): LocalizedString {
  const index = Math.floor((seed ?? Math.random()) * VETERAN_NAMES.length) % VETERAN_NAMES.length;
  return VETERAN_NAMES[index];
}

export function incrementVeteranStats(entry: GarrisonEntry): GarrisonEntry {
  const battles = (entry.battlesSurvived ?? 0) + 1;
  const tier = getVeteranTier(battles);
  let name = entry.veteranName;
  
  if (tier && (tier === "veteran" || tier === "elite" || tier === "legendary") && !name) {
    name = generateVeteranName();
  }

  return {
    ...entry,
    battlesSurvived: battles,
    veteranTier: tier,
    veteranName: name,
  };
}

export function mergeGarrisonEntries(
  current: GarrisonEntry[],
  additions: GarrisonEntry[],
): GarrisonEntry[] {
  const all = [...current, ...additions];
  const merged: GarrisonEntry[] = [];

  for (const entry of all) {
    if (entry.count <= 0) continue;
    const existing = merged.find(e => 
      e.level === entry.level && 
      (e.battlesSurvived ?? 0) === (entry.battlesSurvived ?? 0) &&
      e.veteranTier === entry.veteranTier &&
      e.veteranName?.en === entry.veteranName?.en
    );
    if (existing) {
      existing.count += entry.count;
    } else {
      merged.push({ ...entry });
    }
  }
  return merged.sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    return (b.battlesSurvived ?? 0) - (a.battlesSurvived ?? 0);
  });
}

export function takeBestUnits(
  entries: GarrisonEntry[],
  count: number,
): {
  remaining: GarrisonEntry[];
  taken: GarrisonEntry[];
} {
  let toTake = Math.max(0, Math.floor(count));
  if (toTake <= 0) {
    return { remaining: entries, taken: [] };
  }

  const sorted = [...entries].sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    return (b.battlesSurvived ?? 0) - (a.battlesSurvived ?? 0);
  });

  const remaining: GarrisonEntry[] = [];
  const taken: GarrisonEntry[] = [];

  for (const entry of sorted) {
    if (toTake > 0) {
      const take = Math.min(toTake, entry.count);
      if (take > 0) {
        taken.push({ ...entry, count: take });
      }
      toTake -= take;
      if (entry.count > take) {
        remaining.push({ ...entry, count: entry.count - take });
      }
    } else {
      remaining.push({ ...entry });
    }
  }

  return { 
    remaining: remaining.sort((a, b) => a.level - b.level), 
    taken: taken.sort((a, b) => a.level - b.level) 
  };
}

export function takeBestUnitsOfLevel(
  entries: GarrisonEntry[],
  level: number,
  count: number,
): {
  remaining: GarrisonEntry[];
  taken: GarrisonEntry[];
} {
  const levelEntries = entries.filter(e => e.level === level);
  const otherEntries = entries.filter(e => e.level !== level);

  const { remaining: remainingOfLevel, taken } = takeBestUnits(levelEntries, count);

  return {
    remaining: [...otherEntries, ...remainingOfLevel].sort((a, b) => a.level - b.level),
    taken
  };
}