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

function generateNextMissionTime(lastMissionAt: number): number {
  const minDays = WEEKLY_MISSION_CONFIG.minDaysBetween;
  const maxDays = WEEKLY_MISSION_CONFIG.maxDaysBetween;
  let t = lastMissionAt >>> 0;
  const rng = () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
  const days = minDays + rng() * (maxDays - minDays);
  return lastMissionAt + days * 24 * 60 * 60 * 1000;
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

export function scheduleInitialWeeklyMission(): WeeklyMissionState {
  const now = Date.now();
  return {
    activeMission: null,
    lastMissionAt: now,
    completedCount: 0,
    nextMissionAt: generateNextMissionTime(now),
  };
}

import { GALAXY_FACTIONS } from "../battle/factions";
import { BUILDING_DESCRIPTORS } from "../battle/buildingDescriptors";

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
        lastReport: mission,
        lastMissionAt: now,
        nextMissionAt: generateNextMissionTime(now + nextState.weeklyMission.completedCount),
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
        lastMissionAt: now,
        completedCount: mission.phase === "completed" ? nextState.weeklyMission.completedCount + 1 : nextState.weeklyMission.completedCount,
        nextMissionAt: generateNextMissionTime(now + nextState.weeklyMission.completedCount + mission.waveResults.length),
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
    seedNow: now,
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
        phaseStartedAt: now,
      }
    }
  };
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
