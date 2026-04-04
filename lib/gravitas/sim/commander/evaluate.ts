import type { CommanderProfileId, CommanderProfileDef, CommanderMetrics, CommanderProfileEffects } from "./types";

export const PROFILE_DEFS: Record<CommanderProfileId, CommanderProfileDef> = {
  conqueror: {
    id: "conqueror",
    name: { en: "Conqueror", hu: "Hódító", de: "Eroberer", ro: "Cuceritor" },
    description: {
      en: "Aggressive style. +10% Attack, +10% Loot. Diplomacy is 20% harder.",
      hu: "Agresszív stílus. +10% Támadás, +10% Loot. A diplomácia 20%-kal nehezebb.",
      de: "Aggressiver Stil. +10% Angriff, +10% Loot. Diplomatie ist 20% schwerer.",
      ro: "Stil agresiv. +10% Atac, +10% Loot. Diplomația este cu 20% mai grea.",
    },
    effects: { attackBonus: 0.1, lootBonus: 0.1, reputationChangeMod: 0.8 },
  },
  merchant: {
    id: "merchant",
    name: { en: "Merchant", hu: "Kereskedő", de: "Händler", ro: "Comerciant" },
    description: {
      en: "Economy focus. +15% Mining, -10% Trade price. -5% Defense.",
      hu: "Gazdasági fókusz. +15% Bányászat, -10% Kereskedelmi ár. -5% Védelem.",
      de: "Wirtschaftsfokus. +15% Bergbau, -10% Handelspreis. -5% Verteidigung.",
      ro: "Focus economic. +15% Minerit, -10% Preț comerț. -5% Apărare.",
    },
    effects: { miningBonus: 0.15, tradeDiscount: 0.1, defensePenalty: 0.05 },
  },
  strategist: {
    id: "strategist",
    name: { en: "Strategist", hu: "Stratéga", de: "Stratege", ro: "Strateg" },
    description: {
      en: "Balanced growth. +5% All combat stats.",
      hu: "Kiegyensúlyozott fejlődés. +5% Minden harci stat.",
      de: "Ausgewogenes Wachstum. +5% Alle Kampfwerte.",
      ro: "Creștere echilibrată. +5% Toate statisticile de luptă.",
    },
    effects: { allStatsBonus: 0.05 },
  },
  guardian: {
    id: "guardian",
    name: { en: "Guardian", hu: "Őrző", de: "Wächter", ro: "Gardian" },
    description: {
      en: "Defensive focus. +15% Repair speed, +10% Defense. -10% Attack.",
      hu: "Védekező fókusz. +15% Javítási sebesség, +10% Védelem. -10% Támadás.",
      de: "Defensiver Fokus. +15% Reparaturgeschwindigkeit, +10% Verteidigung. -10% Angriff.",
      ro: "Focus defensiv. +15% Viteză reparație, +10% Apărare. -10% Atac.",
    },
    effects: { repairSpeedBonus: 0.15, defenseBonus: 0.1, attackPenalty: 0.1 },
  },
};

export function getProfileEffects(id: CommanderProfileId): CommanderProfileEffects {
  return PROFILE_DEFS[id].effects;
}

export function calculateModuleVariance(levels: Record<string, number>): number {
  const values = Object.values(levels);
  const n = values.length;
  if (n === 0) return 0;
  const mean = values.reduce((a, b) => a + b, 0) / n;
  const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
  return variance;
}

export function evaluateProfile(metrics: CommanderMetrics, moduleLevels: Record<string, number>): CommanderProfileId {
  const variance = calculateModuleVariance(moduleLevels);
  
  // Weights for determining archetype
  const battleWeight = metrics.battlesInitiated * 2 + metrics.battlesDefended;
  const miningWeight = metrics.miningMissions * 1.5;
  const repairWeight = metrics.unitsRepaired * 0.5;

  // Strategist check: low variance and active in multiple areas
  if (variance < 1.5 && (battleWeight > 5 || miningWeight > 5 || repairWeight > 5)) {
    return "strategist";
  }

  // Find max activity
  const scores = [
    { id: "conqueror" as CommanderProfileId, score: battleWeight },
    { id: "merchant" as CommanderProfileId, score: miningWeight },
    { id: "guardian" as CommanderProfileId, score: repairWeight },
  ];

  scores.sort((a, b) => b.score - a.score);
  
  if (scores[0].score === 0) return "strategist"; // Default for new players

  return scores[0].id;
}
