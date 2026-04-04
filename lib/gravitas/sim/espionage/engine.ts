import type { StarholdState } from "../types";
import type { EspionageState, EspionageMission, EspionageMissionType, EspionageIntelAction } from "./types";
import type { FactionId } from "../faction/types";
import { ESPIONAGE_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { takeBestUnits, mergeGarrisonEntries } from "../warroom/veteran";
import { pushJournal } from "../shared";
import { getReputationTier, applyReputationChange } from "../faction/reputation";

export function createInitialEspionageState(): EspionageState {
  return {
    missions: [],
    totalIntel: 0,
    extractedCount: 0,
    lostCount: 0,
    lastExposureEvent: null,
  };
}

export function deploySpies(state: StarholdState, targetFactionId: FactionId, wraithCount: number, missionType: EspionageMissionType): StarholdState {
  if (state.espionage.missions.length >= ESPIONAGE_CONFIG.maxActiveMissions) return state;
  if (wraithCount < ESPIONAGE_CONFIG.minWraithsPerMission) return state;
  
  const currentWraiths = state.warRoom.garrison.wraith ?? [];
  const totalWraiths = currentWraiths.reduce((sum, e) => sum + e.count, 0);
  if (totalWraiths < wraithCount) return state;

  const { remaining, taken } = takeBestUnits(currentWraiths, wraithCount);

  const now = Date.now();
  const newMission: EspionageMission = {
    id: `spy_${now}`,
    type: missionType,
    targetFactionId,
    wraithCount,
    phase: "deploying",
    startedAt: now,
    activeAt: now + ESPIONAGE_CONFIG.deployTimeMs,
    exposureRisk: 0,
    intelGathered: 0,
    lastYieldAt: now + ESPIONAGE_CONFIG.deployTimeMs,
  };

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      garrison: {
        ...state.warRoom.garrison,
        wraith: remaining,
      }
    },
    espionage: {
      ...state.espionage,
      missions: [...state.espionage.missions, newMission],
    },
    journal: pushJournal(state, {
      en: `Deployed ${wraithCount} Wraiths to infiltrate ${targetFactionId}.`,
      hu: `${wraithCount} Wraith beépítése elindítva a(z) ${targetFactionId} frakcióba.`,
      de: `${wraithCount} Wraiths entsandt, um ${targetFactionId} zu infiltrieren.`,
      ro: `${wraithCount} Wraiths trimiși pentru a infiltra ${targetFactionId}.`,
    })
  };
}

export function extractSpies(state: StarholdState, missionId: string): StarholdState {
  const mission = state.espionage.missions.find(m => m.id === missionId);
  if (!mission || mission.phase === "extracted" || mission.phase === "lost") return state;

  const isExposed = mission.phase === "exposed";
  const returnCount = isExposed ? Math.floor(mission.wraithCount * (1 - ESPIONAGE_CONFIG.exposureLossRatio)) : mission.wraithCount;

  let nextGarrison = state.warRoom.garrison;
  if (returnCount > 0) {
    // Return them as level 1 basic for simplicity, or we could track their actual veteran status,
    // but the spec just says "Wraith-ek visszakerülnek a garrisonba". We'll just add basic ones.
    nextGarrison = {
      ...nextGarrison,
      wraith: mergeGarrisonEntries(nextGarrison.wraith ?? [], [{ count: returnCount, level: 1 }])
    };
  }

  const nextMissions = state.espionage.missions.map(m => {
    if (m.id === missionId) {
      return { ...m, phase: "extracted" as const };
    }
    return m;
  });

  const text = {
    en: `Extraction complete. ${returnCount} Wraiths returned from ${mission.targetFactionId}.`,
    hu: `Kivonás sikeres. ${returnCount} Wraith visszatért a(z) ${mission.targetFactionId} területről.`,
    de: `Extraktion abgeschlossen. ${returnCount} Wraiths von ${mission.targetFactionId} zurückgekehrt.`,
    ro: `Extracție completă. ${returnCount} Wraiths s-au întors din ${mission.targetFactionId}.`,
  };

  return {
    ...state,
    warRoom: {
      ...state.warRoom,
      garrison: nextGarrison,
    },
    espionage: {
      ...state.espionage,
      missions: nextMissions,
      extractedCount: state.espionage.extractedCount + 1,
      totalIntel: state.espionage.totalIntel + mission.intelGathered,
    },
    journal: pushJournal(state, text),
    alert: text,
  };
}

export function tickEspionage(state: StarholdState): StarholdState {
  const now = Date.now();
  let nextState = state;
  let mutated = false;

  const nextMissions = nextState.espionage.missions.map(mission => {
    let m = { ...mission };

    if (m.phase === "deploying" && now >= m.activeAt) {
      m.phase = "active";
      mutated = true;
    }

    if (m.phase === "active") {
      const elapsedSinceYield = now - m.lastYieldAt;
      if (elapsedSinceYield >= ESPIONAGE_CONFIG.intelYieldIntervalMs) {
        const yieldCycles = Math.floor(elapsedSinceYield / ESPIONAGE_CONFIG.intelYieldIntervalMs);
        
        const rep = nextState.factionReputation.reputation[m.targetFactionId] ?? 0;
        const tier = getReputationTier(rep);
        const tensionMod = tier === "hostile" ? 3 : tier === "tense" ? 1 : tier === "allied" ? -1 : 0;
        
        for (let i = 0; i < yieldCycles; i++) {
          // Intel yield
          let yieldAmount = 0;
          if (m.type === "infiltrate") {
            yieldAmount = 10 + m.wraithCount * 2;
          } else if (m.type === "deepCover") {
            yieldAmount = 20 + m.wraithCount * 3;
          } else {
            yieldAmount = 10 + m.wraithCount; // fallback for others
          }
          
          m.intelGathered += yieldAmount;
          
          // Exposure growth
          const growthMult = m.type === "deepCover" ? 1.5 : 1.0;
          const exposureGrowth = (ESPIONAGE_CONFIG.baseExposureGrowthPerHour * 4 + tensionMod * 4) * growthMult;
          m.exposureRisk = Math.min(100, m.exposureRisk + exposureGrowth);
          
          // Exposure check
          if (m.exposureRisk >= ESPIONAGE_CONFIG.exposureThreshold) {
            const chance = (m.exposureRisk - 70) * 0.02; // 2% per point above 70
            if (Math.random() < chance) {
              m.phase = "exposed";
              m.lastYieldAt = now; // marking exposure time
              
              nextState = {
                ...nextState,
                factionReputation: {
                  ...nextState.factionReputation,
                  reputation: applyReputationChange(
                    nextState.factionReputation.reputation,
                    m.targetFactionId,
                    -10, // Reputation hit
                    "espionage_caught",
                    nextState
                  )
                },
                espionage: {
                  ...nextState.espionage,
                  lastExposureEvent: now,
                  lostCount: nextState.espionage.lostCount + Math.floor(m.wraithCount * ESPIONAGE_CONFIG.exposureLossRatio),
                }
              };
              
              const alertText = {
                en: `Spies exposed in ${m.targetFactionId} territory!`,
                hu: `Kémeink lebuktak a(z) ${m.targetFactionId} területen!`,
                de: `Spione im ${m.targetFactionId}-Gebiet enttarnt!`,
                ro: `Spioni demascați în teritoriul ${m.targetFactionId}!`,
              };
              nextState = { ...nextState, alert: alertText, journal: pushJournal(nextState, alertText) };
              break; // exit yield loop if exposed
            }
          }
        }
        
        if (m.phase === "active") {
          m.lastYieldAt += yieldCycles * ESPIONAGE_CONFIG.intelYieldIntervalMs;
        }
        mutated = true;
      }
    }

    if (m.phase === "exposed") {
      if (now >= m.lastYieldAt + ESPIONAGE_CONFIG.extractGracePeriodMs) {
        m.phase = "lost";
        nextState = {
          ...nextState,
          espionage: {
            ...nextState.espionage,
            lostCount: nextState.espionage.lostCount + Math.ceil(m.wraithCount * (1 - ESPIONAGE_CONFIG.exposureLossRatio)),
          }
        };
        const alertText = {
          en: `Exposed spies in ${m.targetFactionId} have been lost permanently.`,
          hu: `A lebukott kémek a(z) ${m.targetFactionId} területen végleg elvesztek.`,
          de: `Enttarnte Spione in ${m.targetFactionId} sind endgültig verloren.`,
          ro: `Spionii demascați în ${m.targetFactionId} au fost pierduți definitiv.`,
        };
        nextState = { ...nextState, alert: alertText, journal: pushJournal(nextState, alertText) };
        mutated = true;
      }
    }

    return m;
  });

  if (mutated) {
    nextState = {
      ...nextState,
      espionage: {
        ...nextState.espionage,
        missions: nextMissions,
      }
    };
  }

  return nextState;
}

export function spendIntel(state: StarholdState, action: EspionageIntelAction, extraArg?: any): StarholdState {
  const cost = ESPIONAGE_CONFIG.intelCosts[action];
  if (state.espionage.totalIntel < cost) return state;

  let nextState = {
    ...state,
    espionage: {
      ...state.espionage,
      totalIntel: state.espionage.totalIntel - cost,
    }
  };

  switch (action) {
    case "revealBuilding":
      if (extraArg && typeof extraArg === "string") {
        const currentReport = nextState.battleState.scoutReports[extraArg] || {
          buildingId: extraArg,
          intelLevel: 0,
          revealedStats: {},
          revealedTraits: [],
          lastScoutedAt: 0
        };
        nextState.battleState.scoutReports[extraArg] = {
          ...currentReport,
          intelLevel: 100,
          lastScoutedAt: Date.now(),
        };
      }
      break;
    case "weakenDefense":
      // Implementation depends on how we want to track it.
      // For now, we will add a journal entry, actual implementation would require tracking this buff.
      nextState.journal = pushJournal(nextState, { en: "Enemy defenses weakened via intel.", hu: "Ellenséges védelem gyengítve intelből.", de: "Feindliche Verteidigung geschwächt.", ro: "Apărarea inamicului slăbită." });
      break;
    case "factionSecret":
      if (extraArg && typeof extraArg === "string") {
        nextState.factionReputation.reputation = applyReputationChange(
          nextState.factionReputation.reputation,
          extraArg as FactionId,
          15,
          "event",
          nextState
        );
      }
      break;
    case "earlyWarning":
      if (nextState.weeklyMission.activeMission && nextState.weeklyMission.activeMission.phase === "preparation") {
        nextState.weeklyMission.activeMission.battleStartsAt += 2 * 60 * 60 * 1000;
      }
      break;
    case "sabotageSupply":
      // Again, needs tracking buff.
      nextState.journal = pushJournal(nextState, { en: "Enemy supplies sabotaged.", hu: "Ellenséges utánpótlás szabotálva.", de: "Feindlicher Nachschub sabotiert.", ro: "Aprovizionarea inamicului sabotată." });
      break;
  }

  return nextState;
}