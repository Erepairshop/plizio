import type { StarholdState, StarholdDerivedState } from "./types";
import { getReputationTier } from "./faction/reputation";
import type { FactionId } from "./faction/types";

export function recalculateDerivedState(activeState: StarholdState): StarholdDerivedState {
  const isEmbargoed = activeState.endgame?.embargoedPlayers?.includes("local_player") || false;
  const taxRate = activeState.endgame?.imperialTaxRate ?? 0;

  const isCurious = !!activeState.battleState?.avatarCombat?.innateBonus?.intel;
  const isBold = !!activeState.battleState?.avatarCombat?.innateBonus?.firepower;
  const isProtective = !!activeState.battleState?.avatarCombat?.innateBonus?.inspiration;
  const isCalm = !!activeState.battleState?.avatarCombat?.innateBonus?.barrier;
  const isReckless = !!activeState.battleState?.avatarCombat?.innateBonus?.tactics;

  const calmBuffs = activeState.research?.calmProductionBuffs || 0;
  
  // Base production mults
  let supplyMult = 1.0;
  let powerMult = 1.0;

  if (isCalm && calmBuffs > 0) {
    supplyMult += 0.1 * calmBuffs;
    powerMult += 0.1 * calmBuffs;
  }

  // Active research bonuses
  let bonusShield = isProtective ? 10 : 0;
  let bonusFirepower = 0;
  let bonusArmor = 0;

  // Global Multipliers
  let globalProduction = 1.0;
  let globalResearch = isCurious ? 0.8 : 1.0; // 20% faster
  let globalRepair = 1.0;
  let globalExpRisk = 1.0;
  let globalTradeYield = 1.0;
  let globalIntelYield = 1.0;

  // Faction Effects
  const factionEffects: Record<string, { tradeRisk: number; expRisk: number; intelRisk: number; tradeYield: number }> = {};
  const factionIds = Object.keys(activeState.factionReputation?.reputation || {}) as FactionId[];
  for (const fId of factionIds) {
    const rep = activeState.factionReputation.reputation[fId] ?? 0;
    const tier = getReputationTier(rep);
    
    let fTradeRisk = 0;
    let fExpRisk = 0;
    let fIntelRisk = 0;
    let fTradeYield = 1.0;

    if (tier === "hostile") {
      fTradeRisk += 0.95;
      fIntelRisk += 0.3;
    } else if (tier === "allied") {
      if (isProtective) {
        fTradeYield += 0.1;
      }
    }
    
    factionEffects[fId] = {
      tradeRisk: fTradeRisk,
      expRisk: fExpRisk,
      intelRisk: fIntelRisk,
      tradeYield: fTradeYield,
    };
  }

  const reactorLevel = activeState.moduleLevels?.reactor ?? 1;
  const maxAntimatter = 50 + (reactorLevel * 50);

  return {
    globalMultipliers: {
      production: globalProduction,
      research: globalResearch,
      repair: globalRepair,
      expRisk: globalExpRisk,
      tradeYield: globalTradeYield,
      intelYield: globalIntelYield,
    },
    factionEffects,
    commanderBonuses: {
      isCurious,
      isBold,
      isProtective,
      isCalm,
      isReckless,
    },
    productionMultipliers: {
      supply: supplyMult,
      power: powerMult,
    },
    tradeModifiers: {
      taxRate,
      isEmbargoed,
    },
    combatModifiers: {
      bonusFirepower,
      bonusArmor,
      bonusShield,
    },
    maxAntimatter,
  };
}
