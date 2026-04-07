import type { StarholdState } from "../types";
import type { WeeklyMissionState, WeeklyMission, WeeklyWaveResult } from "./types";
import type { FactionId } from "../faction/types";
import { WEEKLY_MISSION_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { applyReputationChange } from "../faction/reputation";
import { resolveBattle } from "../battle/engine";
import type { BattleArmy, EnemyBuilding, ScoutReport, ResolveBattleInput } from "../battle/types";
import { pushJournal } from "../shared";
import { applyWeeklyWaveCasualtiesToState } from "./casualties";
import { giveWeeklyRewards } from "./rewards";

function generateNextMissionTimeTicks(lastMissionAtTick: number): number {
  const minDays = WEEKLY_MISSION_CONFIG.minDaysBetween;
  const maxDays = WEEKLY_MISSION_CONFIG.maxDaysBetween;
  let t = lastMissionAtTick >>> 0;
  const rng = () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
  const days = minDays + rng() * (maxDays - minDays);
  return lastMissionAtTick + Math.floor(days * 24 * 3600);
}

function getWorstFaction(reputation: Record<FactionId, number>): FactionId {
  const factions = Object.entries(reputation) as [FactionId, number][];
  factions.sort((a, b) => a[1] - b[1]);
  return factions[0][0];
}

function getRandomFaction(exclude: FactionId, reputation: Record<FactionId, number>): FactionId {
  const factions = Object.keys(reputation).filter(f => f !== exclude) as FactionId[];
  let seed = factions.length;
  Object.entries(reputation).forEach(([id, rep]) => {
    seed ^= (id.length * 31) ^ Math.round(rep * 100);
  });
  let t = seed >>> 0;
  const rng = () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
  return factions[Math.floor(rng() * factions.length)];
}

export function scheduleInitialWeeklyMission(state: StarholdState): WeeklyMissionState {
  return {
    activeMission: null,
    lastMissionAtTick: state.tick,
    completedCount: 0,
    nextMissionAtTick: generateNextMissionTimeTicks(state.tick),
  };
}

import { GALAXY_FACTIONS } from "../battle/factions";
import { BUILDING_DESCRIPTORS } from "../battle/buildingDescriptors";

export function tickWeeklyMission(state: StarholdState): StarholdState {
  if (state.phase !== "awakened") return state;

  let nextState = state;
  let mutated = false;

  const prepTicks = Math.floor(WEEKLY_MISSION_CONFIG.preparationTimeMs / 1000);
  const breakTicks = Math.floor(WEEKLY_MISSION_CONFIG.breakTimeMs / 1000);

  // Spawning
  if (!nextState.weeklyMission.activeMission && state.tick >= nextState.weeklyMission.nextMissionAtTick) {
    const attackerFactionId = getWorstFaction(nextState.factionReputation.reputation);
    const defenderFactionId = getRandomFaction(attackerFactionId, nextState.factionReputation.reputation);
    
    const newMission: WeeklyMission = {
      id: `weekly_${state.tick}`,
      defenderFactionId,
      attackerFactionId,
      appearedAtTick: state.tick,
      battleStartsAtTick: state.tick + prepTicks,
      phase: "preparation",
      phaseStartedAtTick: state.tick,
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
  if (mission.phase === "preparation" && state.tick >= mission.battleStartsAtTick && !mission.deployedUnits) {
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
        lastReport: mission,
        lastMissionAtTick: state.tick,
        nextMissionAtTick: generateNextMissionTimeTicks(state.tick + nextState.weeklyMission.completedCount),
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
  if (mission.phase === "preparation" && state.tick >= mission.battleStartsAtTick && mission.deployedUnits) {
    nextState = transitionMissionPhase(nextState, "wave1", state.tick);
    mutated = true;
  } else if (mission.phase === "wave1") {
    nextState = resolveWeeklyWave(nextState, 1, state.tick);
    mutated = true;
  } else if (mission.phase === "break1" && state.tick >= mission.phaseStartedAtTick + breakTicks) {
    nextState = transitionMissionPhase(nextState, "wave2", state.tick);
    mutated = true;
  } else if (mission.phase === "wave2") {
    nextState = resolveWeeklyWave(nextState, 2, state.tick);
    mutated = true;
  } else if (mission.phase === "break2" && state.tick >= mission.phaseStartedAtTick + breakTicks) {
    nextState = transitionMissionPhase(nextState, "wave3", state.tick);
    mutated = true;
  } else if (mission.phase === "wave3") {
    nextState = resolveWeeklyWave(nextState, 3, state.tick);
    mutated = true;
  } else if (mission.phase === "completed" || mission.phase === "failed") {
    const completedWaves = mission.waveResults.filter(r => r.victory).length;
    const { nextState: rewardedState, breakdown } = giveWeeklyRewards(nextState, completedWaves, mission.worldLevel, mission.defenderFactionId);
    nextState = rewardedState;
    
    // Mission failure effect: Faction Reputation Penalty
    if (mission.phase === "failed") {
      const nextRep = applyReputationChange(
        nextState.factionReputation.reputation,
        mission.defenderFactionId,
        -10, // significant penalty for failing defense
        "battle_defeat",
        nextState
      );
      nextState = {
        ...nextState,
        factionReputation: {
          ...nextState.factionReputation,
          reputation: nextRep,
        }
      };
    }

    // Release units from ledger
    const totalKilled: Record<string, number> = {};
    const totalWounded: Record<string, number> = {};
    for (const res of mission.waveResults) {
      for (const [uId, count] of Object.entries(res.unitsLost)) {
        totalKilled[uId] = (totalKilled[uId] || 0) + count;
      }
      for (const [uId, count] of Object.entries(res.unitsWounded)) {
        totalWounded[uId] = (totalWounded[uId] || 0) + count;
      }
    }
    nextState = releaseAllocationWithCasualties(
      nextState, 
      mission.id, 
      totalKilled as Record<import("../warroom/types").WarRoomUnitId, number>,
      totalWounded as Record<import("../warroom/types").WarRoomUnitId, number>
    );

    const overallLesson = mission.phase === "completed"
      ? { en: "A flawless defense. The garrison held strong.", hu: "Hibátlan védelem. A helyőrség kitartott.", de: "Eine makellose Verteidigung. Die Garnison hielt stand.", ro: "O apărare impecabilă. Garnizoana a rezistat." }
      : { en: "Defenses crumbled under pressure. Reinforcements needed.", hu: "A védelem összeomlott a nyomás alatt. Erősítésre van szükség.", de: "Die Verteidigung brach unter dem Druck zusammen. Verstärkung erforderlich.", ro: "Apărarea s-a prăbușit sub presiune. E nevoie de întăriri." };

    nextState = {
      ...nextState,
      weeklyMission: {
        ...nextState.weeklyMission,
        activeMission: null,
        lastReport: {
          ...mission,
          rewardBreakdown: breakdown,
          overallLesson
        },
        lastMissionAtTick: state.tick,
        completedCount: mission.phase === "completed" ? nextState.weeklyMission.completedCount + 1 : nextState.weeklyMission.completedCount,
        nextMissionAtTick: generateNextMissionTimeTicks(state.tick + nextState.weeklyMission.completedCount + mission.waveResults.length),
      }
    };
    mutated = true;
  }

  return mutated ? nextState : state;
}

function transitionMissionPhase(state: StarholdState, phase: WeeklyMission["phase"], tick: number): StarholdState {
  const mission = state.weeklyMission.activeMission;
  if (!mission) return state;
  return {
    ...state,
    weeklyMission: {
      ...state.weeklyMission,
      activeMission: {
        ...mission,
        phase,
        phaseStartedAtTick: tick,
      }
    }
  };
}

function resolveWeeklyWave(state: StarholdState, waveNum: number, tick: number): StarholdState {
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
    lastScoutedAtTick: tick,
  };

  const attackerFaction = GALAXY_FACTIONS[mission.attackerFactionId];
  const weeklyDescriptor = BUILDING_DESCRIPTORS["derelict-outpost"]; // fallback to valid descriptor

  const result = resolveBattle({
    army,
    enemy: mockEnemyBuilding,
    playerState: state,
    avatarCombat: state.battleState.avatarCombat,
    scoutReport,
    descriptor: weeklyDescriptor,
    faction: attackerFaction,
    battleHistory: state.battleState.battleHistory,
    seedNow: tick,
  });

  const { nextState, computedCasualties } = applyWeeklyWaveCasualtiesToState(state, result);

  // Determine lesson based on stats
  let lessonText;
  if (result.victory) {
    if (result.durationMs <= 2000) {
      lessonText = {
        en: `Wave ${waveNum} cleared cleanly. Firepower was overwhelming.`,
        hu: `${waveNum}. hullám tisztán hárítva. A tűzerő elsöprő volt.`,
        de: `Welle ${waveNum} sauber abgewehrt. Feuerkraft war überwältigend.`,
        ro: `Valul ${waveNum} curățat fără probleme. Puterea de foc a fost copleșitoare.`
      };
    } else {
      lessonText = {
        en: `Wave ${waveNum} took time to wear down enemy defenses.`,
        hu: `A(z) ${waveNum}. hullám ellenfeleinek védelmét időbe telt felőrölni.`,
        de: `Welle ${waveNum} brauchte Zeit, um die feindliche Verteidigung aufzureiben.`,
        ro: `Valul ${waveNum} a durat ceva timp pentru a epuiza apărarea inamică.`
      };
    }
  } else {
    lessonText = {
      en: `Wave ${waveNum} overwhelmed your forces. Casualties were high.`,
      hu: `A(z) ${waveNum}. hullám elsöpörte a csapataidat. Magas veszteségek.`,
      de: `Welle ${waveNum} überrannte deine Truppen. Die Verluste waren hoch.`,
      ro: `Valul ${waveNum} a copleșit forțele tale. Pierderile au fost mari.`
    };
  }

  const waveResult: WeeklyWaveResult = {
    wave: waveNum,
    victory: result.victory,
    unitsLost: computedCasualties.killed,
    unitsWounded: computedCasualties.wounded,
    damageDealt: result.stats.damageDealt,
    damageReceived: result.stats.damageReceived,
    enemyGarrisonDestroyed: result.stats.enemyGarrisonDestroyed,
    traitTriggered: result.stats.traitTriggered,
    counterUsed: result.stats.counterUsed,
    tacticId: result.stats.tacticId,
    lessonText,
  };

  // Apply casualties to deployed units permanently for next waves
  const nextDeployedUnits = { ...mission.deployedUnits };
  Object.keys(computedCasualties.killed).forEach(k => {
    nextDeployedUnits[k] = Math.max(0, (nextDeployedUnits[k] ?? 0) - (computedCasualties.killed[k] ?? 0));
  });
  Object.keys(computedCasualties.wounded).forEach(k => {
    nextDeployedUnits[k] = Math.max(0, (nextDeployedUnits[k] ?? 0) - (computedCasualties.wounded[k] ?? 0));
  });

  const nextMission = {
    ...mission,
    deployedUnits: nextDeployedUnits,
    waveResults: [
      ...mission.waveResults,
      waveResult
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

  return {
    ...nextState,
    weeklyMission: {
      ...nextState.weeklyMission,
      activeMission: {
        ...nextMission,
        phase: nextPhase,
        phaseStartedAtTick: tick,
      }
    }
  };
}

import { reserveUnits, releaseAllocation, releaseAllocationWithCasualties } from "../warroom/ledger";

export function deployWeeklyUnits(state: StarholdState, units: Record<string, number>): StarholdState {
  const mission = state.weeklyMission.activeMission;
  if (!mission || mission.phase !== "preparation") return state;

  const reservation = reserveUnits(state, mission.id, "weekly", units as Record<import("../warroom/types").WarRoomUnitId, number>);
  
  if (!reservation.success) {
    return state; // Or alert missing units
  }

  return {
    ...reservation.nextState,
    weeklyMission: {
      ...reservation.nextState.weeklyMission,
      activeMission: {
        ...mission,
        deployedUnits: units,
      }
    }
  };
}
