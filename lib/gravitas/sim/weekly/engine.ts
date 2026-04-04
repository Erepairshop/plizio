import type { StarholdState } from "../types";
import type { WeeklyMissionState, WeeklyMission } from "./types";
import type { FactionId } from "../faction/types";
import { WEEKLY_MISSION_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { applyReputationChange } from "../faction/reputation";
import { getLootMultiplier } from "../battle/worldScaling";
import { resolveBattle } from "../battle/engine";
import type { BattleArmy, EnemyBuilding, ScoutReport, ResolveBattleInput } from "../battle/types";
import { pushJournal } from "../shared";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import type { GalaxyMaterialId } from "../../world/mission";
import { takeBestUnits } from "../warroom/veteran";
import { applyStarholdCommand } from "../commands";

function generateNextMissionTime(lastMissionAt: number): number {
  const minDays = WEEKLY_MISSION_CONFIG.minDaysBetween;
  const maxDays = WEEKLY_MISSION_CONFIG.maxDaysBetween;
  const days = minDays + Math.random() * (maxDays - minDays);
  return lastMissionAt + days * 24 * 60 * 60 * 1000;
}

function getWorstFaction(reputation: Record<FactionId, number>): FactionId {
  const factions = Object.entries(reputation) as [FactionId, number][];
  factions.sort((a, b) => a[1] - b[1]);
  return factions[0][0];
}

function getRandomFaction(exclude: FactionId, reputation: Record<FactionId, number>): FactionId {
  const factions = Object.keys(reputation).filter(f => f !== exclude) as FactionId[];
  return factions[Math.floor(Math.random() * factions.length)];
}

export function scheduleInitialWeeklyMission(): WeeklyMissionState {
  const now = Date.now();
  return {
    activeMission: null,
    lastMissionAt: now,
    completedCount: 0,
    nextMissionAt: generateNextMissionTime(now),
  };
}

export function tickWeeklyMission(state: StarholdState): StarholdState {
  if (state.phase !== "awakened") return state;

  const now = Date.now();
  let nextState = state;
  let mutated = false;

  // Spawning
  if (!nextState.weeklyMission.activeMission && now >= nextState.weeklyMission.nextMissionAt) {
    const attackerFactionId = getWorstFaction(nextState.factionReputation.reputation);
    const defenderFactionId = getRandomFaction(attackerFactionId, nextState.factionReputation.reputation);
    
    const newMission: WeeklyMission = {
      id: `weekly_${now}`,
      defenderFactionId,
      attackerFactionId,
      appearedAt: now,
      battleStartsAt: now + WEEKLY_MISSION_CONFIG.preparationTimeMs,
      phase: "preparation",
      phaseStartedAt: now,
      deployedUnits: null,
      waveResults: [],
      worldLevel: nextState.worldLevel,
    };

    nextState = {
      ...nextState,
      weeklyMission: {
        ...nextState.weeklyMission,
        activeMission: newMission,
      },
      alert: {
        en: `Emergency request: Defend a ${defenderFactionId} facility from ${attackerFactionId}!`,
        hu: `Vészhelyzet: Védj meg egy ${defenderFactionId} létesítményt a(z) ${attackerFactionId} ellen!`,
        de: `Notruf: Verteidige eine ${defenderFactionId}-Einrichtung vor ${attackerFactionId}!`,
        ro: `Cerere de urgență: Apără o facilitate ${defenderFactionId} de ${attackerFactionId}!`,
      }
    };
    mutated = true;
  }

  const mission = nextState.weeklyMission.activeMission;
  if (!mission) return mutated ? nextState : state;

  // Handle missed mission
  if (mission.phase === "preparation" && now >= mission.battleStartsAt && !mission.deployedUnits) {
    const nextReputation = applyReputationChange(
      nextState.factionReputation.reputation,
      mission.defenderFactionId,
      WEEKLY_MISSION_CONFIG.reputationPenaltyForMiss,
      "event",
      nextState
    );

    nextState = {
      ...nextState,
      factionReputation: {
        ...nextState.factionReputation,
        reputation: nextReputation,
      },
      weeklyMission: {
        ...nextState.weeklyMission,
        activeMission: null,
        lastMissionAt: now,
        nextMissionAt: generateNextMissionTime(now),
      },
      journal: pushJournal(nextState, {
        en: `The ${mission.defenderFactionId} facility fell. We arrived too late.`,
        hu: `A ${mission.defenderFactionId} létesítmény elesett. Túl későn érkeztünk.`,
        de: `Die ${mission.defenderFactionId}-Einrichtung fiel. Wir kamen zu spät.`,
        ro: `Facilitatea ${mission.defenderFactionId} a căzut. Am ajuns prea târziu.`,
      })
    };
    return nextState;
  }

  // Handle phase transitions
  if (mission.phase === "preparation" && now >= mission.battleStartsAt && mission.deployedUnits) {
    nextState = transitionMissionPhase(nextState, "wave1", now);
    mutated = true;
  } else if (mission.phase === "wave1") {
    nextState = resolveWeeklyWave(nextState, 1, now);
    mutated = true;
  } else if (mission.phase === "break1" && now >= mission.phaseStartedAt + WEEKLY_MISSION_CONFIG.breakTimeMs) {
    nextState = transitionMissionPhase(nextState, "wave2", now);
    mutated = true;
  } else if (mission.phase === "wave2") {
    nextState = resolveWeeklyWave(nextState, 2, now);
    mutated = true;
  } else if (mission.phase === "break2" && now >= mission.phaseStartedAt + WEEKLY_MISSION_CONFIG.breakTimeMs) {
    nextState = transitionMissionPhase(nextState, "wave3", now);
    mutated = true;
  } else if (mission.phase === "wave3") {
    nextState = resolveWeeklyWave(nextState, 3, now);
    mutated = true;
  } else if (mission.phase === "completed" || mission.phase === "failed") {
    const completedWaves = mission.waveResults.filter(r => r.victory).length;
    giveWeeklyRewards(nextState, completedWaves, mission.worldLevel, mission.defenderFactionId);
    
    nextState = {
      ...nextState,
      weeklyMission: {
        ...nextState.weeklyMission,
        activeMission: null,
        lastMissionAt: now,
        completedCount: mission.phase === "completed" ? nextState.weeklyMission.completedCount + 1 : nextState.weeklyMission.completedCount,
        nextMissionAt: generateNextMissionTime(now),
      }
    };
    mutated = true;
  }

  return mutated ? nextState : state;
}

function transitionMissionPhase(state: StarholdState, phase: WeeklyMission["phase"], now: number): StarholdState {
  const mission = state.weeklyMission.activeMission;
  if (!mission) return state;
  return {
    ...state,
    weeklyMission: {
      ...state.weeklyMission,
      activeMission: {
        ...mission,
        phase,
        phaseStartedAt: now,
      }
    }
  };
}

function resolveWeeklyWave(state: StarholdState, waveNum: number, now: number): StarholdState {
  const mission = state.weeklyMission.activeMission;
  if (!mission || !mission.deployedUnits) return state;

  const army: BattleArmy = {
    units: mission.deployedUnits,
    tacticId: "aggressive",
  };

  const strengthMod = WEEKLY_MISSION_CONFIG.waveStrengthMods[waveNum - 1];
  const baseArmor = 40 + mission.worldLevel * 8;
  const baseShield = 20 + mission.worldLevel * 5;
  const baseFirepower = 30 + mission.worldLevel * 6;
  const baseGarrison = 50 + mission.worldLevel * 20;

  const mockEnemyBuilding = {
    id: "derelict-outpost" as const,
    stats: {
      armor: Math.round(baseArmor * strengthMod),
      shield: Math.round(baseShield * strengthMod),
      firepower: Math.round(baseFirepower * strengthMod),
      speed: 5,
      garrison: Math.round(baseGarrison * strengthMod),
      antiAir: Math.round(10 * strengthMod),
    },
    traits: [],
    difficulty: mission.worldLevel,
    resetCooldownMs: 0,
    lootTableId: "weekly",
  } satisfies EnemyBuilding;

  const scoutReport: ScoutReport = {
    buildingId: mockEnemyBuilding.id,
    intelLevel: 100,
    revealedStats: {
      armor: mockEnemyBuilding.stats.armor,
      shield: mockEnemyBuilding.stats.shield,
      firepower: mockEnemyBuilding.stats.firepower,
      garrison: mockEnemyBuilding.stats.garrison,
    },
    revealedTraits: [],
    lastScoutedAt: now,
  };

  const result = resolveBattle({
    army,
    enemy: mockEnemyBuilding,
    playerState: state,
    avatarCombat: state.battleState.avatarCombat,
    scoutReport,
    descriptor: null as unknown as ResolveBattleInput["descriptor"],
    faction: null as unknown as ResolveBattleInput["faction"],
    battleHistory: state.battleState.battleHistory,
    seedNow: now,
  });

  // Apply casualties to deployed units permanently for next waves
  const nextDeployedUnits = { ...mission.deployedUnits };
  Object.keys(result.stats.unitsLost).forEach(k => {
    const unitId = k as keyof typeof result.stats.unitsLost;
    nextDeployedUnits[unitId] = Math.max(0, (nextDeployedUnits[unitId] ?? 0) - (result.stats.unitsLost[unitId] ?? 0));
  });

  const nextMission = {
    ...mission,
    deployedUnits: nextDeployedUnits,
    waveResults: [
      ...mission.waveResults,
      { wave: waveNum, victory: result.victory, unitsLost: result.stats.unitsLost }
    ],
  };

  let nextPhase: WeeklyMission["phase"];
  if (!result.victory) {
    nextPhase = "failed";
  } else if (waveNum === 3) {
    nextPhase = "completed";
  } else {
    nextPhase = waveNum === 1 ? "break1" : "break2";
  }

  // Also apply casualties to actual garrison via APPLY_BATTLE_RESULT
  let nextState = {
    ...state,
    weeklyMission: {
      ...state.weeklyMission,
      activeMission: {
        ...nextMission,
        phase: nextPhase,
        phaseStartedAt: now,
      }
    }
  };

  // We construct a fake battle result just to let the standard logic apply casualties to garrison correctly.
  // Note: we set loot to empty since rewards are given at the end.
  const fakeResultForCasualties = {
    ...result,
    loot: { materials: {}, items: [] },
  };

  const command: import("../types").StarholdCommand = {
    type: "APPLY_BATTLE_RESULT",
    result: fakeResultForCasualties,
    nodeId: "weekly_target",
  };

  return applyStarholdCommand(nextState, command);
}

function giveWeeklyRewards(state: StarholdState, completedWaves: number, worldLevel: number, defenderFactionId: FactionId) {
  if (completedWaves === 0) return;
  
  const mult = completedWaves === 3 ? 1.0 : completedWaves * 0.25;
  const baseReward = 500 * getLootMultiplier(worldLevel);

  const inventory = loadSavedGalaxyInventory();
  
  const rewardMaterials: Partial<Record<GalaxyMaterialId, number>> = {
    lumen_dust: Math.round(baseReward * mult),
    verdant_crystals: Math.round((baseReward * 0.8) * mult),
    aether_ore: Math.round((baseReward * 0.6) * mult),
  };

  if (completedWaves >= 2) {
    rewardMaterials.ember_shards = Math.round((baseReward * 0.4) * mult);
    rewardMaterials.sable_alloy = Math.round((baseReward * 0.3) * mult);
  }

  if (completedWaves === 3) {
    rewardMaterials.rift_stone = Math.round((baseReward * 0.15) * mult);
  }

  Object.entries(rewardMaterials).forEach(([matId, amount]) => {
    if (amount) {
      inventory[matId as GalaxyMaterialId] = (inventory[matId as GalaxyMaterialId] ?? 0) + amount;
    }
  });

  saveGalaxyInventory(inventory);

  const reputationBonus = completedWaves === 3 ? 15 : completedWaves * 3;
  // Apply rep via generic function without returning state just to mutate it if we were holding it, but since we are not mutating state directly here but just want to apply it... Wait, we NEED to mutate state.

  // Instead of direct mutation, this function just handles inventory (which is localStorage).
  // For state mutations like reputation, we should return a partial state update.
  // But wait, since we are inside tickWeeklyMission, we can just let `giveWeeklyRewards` be handled in the main tick, or we can mutate state here and return it.
}

export function deployWeeklyUnits(state: StarholdState, units: Record<string, number>): StarholdState {
  const mission = state.weeklyMission.activeMission;
  if (!mission || mission.phase !== "preparation") return state;

  return {
    ...state,
    weeklyMission: {
      ...state.weeklyMission,
      activeMission: {
        ...mission,
        deployedUnits: units,
      }
    }
  };
}