import type { StarholdState } from "../types";
import type { EspionageState, EspionageMission, EspionageMissionType, EspionageIntelAction } from "./types";
import type { FactionId } from "../faction/types";
import { ESPIONAGE_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { pushJournal } from "../shared";
import { getReputationTier, applyReputationChange } from "../faction/reputation";
import { nextRandom, randomInt } from "../rng";
import { reserveUnits, releaseAllocation, releaseAllocationWithCasualties, updateAllocationStatus, reportLostAllocation } from "../warroom/ledger";

export function createInitialEspionageState(): EspionageState {
  return {
    missions: [],
    totalIntel: 0,
    extractedCount: 0,
    lostCount: 0,
    lastExposureEventTick: null,
    decoyActiveUntilTick: null,
  };
}

export function deploySpies(
  state: StarholdState, 
  target: import("./types").EspionageTarget, 
  operativeUnitId: import("../warroom/types").WarRoomUnitId, 
  operativeCount: number, 
  operativeRole: import("./types").EspionageOperativeRole, 
  missionType: EspionageMissionType
): StarholdState {
  if (state.espionage.missions.length >= ESPIONAGE_CONFIG.maxActiveMissions) return state;
  if (operativeCount < ESPIONAGE_CONFIG.minWraithsPerMission) return state;
  
  let currentRngState = state.globalRngState;
  const { value: r1, nextState: s1 } = randomInt(currentRngState, 0, 9999);
  currentRngState = s1;

  const missionId = `spy_${state.tick}_${r1}`;
  const allocationId = `esp_${missionId}`;

  const reservation = reserveUnits(state, allocationId, "battle", { [operativeUnitId]: operativeCount });
  if (!reservation.success) return state;

  let initialRisk = 0;
  if (target.type === "faction") {
    const rep = state.factionReputation.reputation[target.id as FactionId] ?? 0;
    if (getReputationTier(rep) === "hostile") {
      initialRisk = 30; // Harder to infiltrate hostile factions
    }
  }

  const deployTicks = Math.floor(ESPIONAGE_CONFIG.deployTimeMs / 1000);
  const newMission: EspionageMission = {
    id: missionId,
    allocationId,
    type: missionType,
    target,
    operativeRole,
    operativeUnitId,
    operativeCount,
    phase: "deploying",
    startedAtTick: state.tick,
    activeAtTick: state.tick + deployTicks,
    exposureRisk: initialRisk,
    intelGathered: 0,
    intelDepthLevel: 0,
    lastYieldAtTick: state.tick + deployTicks,
    revealedData: {},
  };

  let nextState = updateAllocationStatus(reservation.nextState, allocationId, "traveling", state.tick + deployTicks);

  return {
    ...nextState,
    globalRngState: currentRngState,
    espionage: {
      ...nextState.espionage,
      missions: [...nextState.espionage.missions, newMission],
    },
    journal: pushJournal(nextState, {
      en: `Deployed ${operativeCount} ${operativeRole}s to infiltrate ${target.id}.`,
      hu: `${operativeCount} ${operativeRole} beépítése elindítva a(z) ${target.id} célpontba.`,
      de: `${operativeCount} ${operativeRole}s entsandt, um ${target.id} zu infiltrieren.`,
      ro: `${operativeCount} ${operativeRole} trimiși pentru a infiltra ${target.id}.`,
    })
  };
}

export function extractSpies(state: StarholdState, missionId: string): StarholdState {
  const mission = state.espionage.missions.find(m => m.id === missionId);
  if (!mission || mission.phase === "extracted" || mission.phase === "lost") return state;

  const isExposed = mission.phase === "exposed";
  const lostCount = isExposed ? Math.floor(mission.operativeCount * ESPIONAGE_CONFIG.exposureLossRatio) : 0;

  let nextState = state;
  if (lostCount > 0) {
    nextState = releaseAllocationWithCasualties(nextState, mission.allocationId, { [mission.operativeUnitId]: lostCount });
  } else {
    nextState = releaseAllocation(nextState, mission.allocationId);
  }

  const nextMissions = nextState.espionage.missions.map(m => {
    if (m.id === missionId) {
      return { ...m, phase: "extracted" as const };
    }
    return m;
  });

  const returnCount = mission.operativeCount - lostCount;
  const text = {
    en: `Extraction complete. ${returnCount} ${mission.operativeRole}s returned from ${mission.target.id}.`,
    hu: `Kivonás sikeres. ${returnCount} ${mission.operativeRole} visszatért a(z) ${mission.target.id} területről.`,
    de: `Extraktion abgeschlossen. ${returnCount} ${mission.operativeRole}s von ${mission.target.id} zurückgekehrt.`,
    ro: `Extracție completă. ${returnCount} ${mission.operativeRole}s s-au întors din ${mission.target.id}.`,
  };

  return {
    ...nextState,
    espionage: {
      ...nextState.espionage,
      missions: nextMissions,
      extractedCount: nextState.espionage.extractedCount + 1,
      totalIntel: nextState.espionage.totalIntel + mission.intelGathered,
    },
    journal: pushJournal(nextState, text),
    alert: text,
  };
}

export function tickEspionage(state: StarholdState): StarholdState {
  let nextState = state;
  let mutated = false;
  let currentRngState = state.globalRngState;

  // Avatar Traits Check
  const isCurious = !!state.battleState.avatarCombat.innateBonus?.intel; // Curious maps to intel
  const isCalm = !!state.battleState.avatarCombat.innateBonus?.barrier; // Calm maps to barrier
  const isBold = state.derived?.commanderBonuses.isBold; // Bold maps to firepower

  const intelYieldIntervalTicks = Math.floor(ESPIONAGE_CONFIG.intelYieldIntervalMs / 1000);
  const extractGracePeriodTicks = Math.floor(ESPIONAGE_CONFIG.extractGracePeriodMs / 1000);

  const nextMissions = nextState.espionage.missions.map(mission => {
    let m = { ...mission };

    if (m.phase === "deploying" && state.tick >= m.activeAtTick) {
      m.phase = "active";
      nextState = updateAllocationStatus(nextState, m.allocationId, "working");
      mutated = true;
    }

    if (m.phase === "active") {
      const elapsedSinceYield = state.tick - m.lastYieldAtTick;
      if (elapsedSinceYield >= intelYieldIntervalTicks) {
        const yieldCycles = Math.floor(elapsedSinceYield / intelYieldIntervalTicks);
        
        let rep = 0;
        if (m.target.type === "faction") {
          rep = nextState.factionReputation.reputation[m.target.id as FactionId] ?? 0;
        }
        const tier = getReputationTier(rep);
        const tensionMod = tier === "hostile" ? 3 : tier === "tense" ? 1 : tier === "allied" ? -1 : 0;
        
        for (let i = 0; i < yieldCycles; i++) {
          // Operative Role Modifiers
          let operativeIntelMult = 1.0;
          let operativeRiskMult = 1.0;
          let depthAdvanceChance = 0.1;
          
          if (m.operativeRole === "scout") {
            operativeRiskMult = 0.5;
            operativeIntelMult = 0.5;
          } else if (m.operativeRole === "infiltrator") {
            operativeIntelMult = 2.0;
          } else if (m.operativeRole === "analyst") {
            depthAdvanceChance = 0.4;
          } else if (m.operativeRole === "saboteur") {
            operativeRiskMult = 2.0; // High risk for non-sabotage, but very effective for sabotage
          }

          // Avatar Trait modifications
          if (isCurious && (m.type === "deepScan" || m.type === "infiltrate")) {
             depthAdvanceChance += 0.15;
          }

          // Mission specifics
          let yieldAmount = 0;
          let exposureGrowthMult = 1.0;
          
          switch (m.type) {
            case "passiveScan":
              yieldAmount = 5 + m.operativeCount;
              exposureGrowthMult = 0.2;
              break;
            case "deepScan":
              yieldAmount = 15 + m.operativeCount * 1.5;
              exposureGrowthMult = 0.8;
              break;
            case "infiltrate":
              yieldAmount = 10 + m.operativeCount * 2;
              exposureGrowthMult = 1.2;
              break;
            case "sabotage":
              yieldAmount = 5;
              exposureGrowthMult = m.operativeRole === "saboteur" ? 1.0 : 3.0; // Saboteurs are better at this
              if (isBold) {
                 // Bold makes sabotage better (intel wise, maybe other effects later)
                 yieldAmount += 5;
              }
              break;
            case "counterfeitIntel":
              yieldAmount = 0;
              exposureGrowthMult = 1.5;
              break;
            case "decoyDeployment":
              yieldAmount = 0;
              exposureGrowthMult = isBold ? 3.5 : 3.0; // High risk to draw attention, worse if Bold
              break;
            default:
              yieldAmount = 10 + m.operativeCount;
          }
          
          m.intelGathered += Math.floor(yieldAmount * operativeIntelMult);

          // Intel Depth Progression
          if (m.type === "deepScan" || m.type === "infiltrate") {
            const { value: rDepth, nextState: sDepth } = nextRandom(currentRngState);
            currentRngState = sDepth;

            if (m.intelDepthLevel < 4 && rDepth < depthAdvanceChance) {
              m.intelDepthLevel += 1;
              let depthMsg = "";
              if (m.intelDepthLevel === 1) depthMsg = `Level 1 Intel acquired: Basic Stats revealed for ${m.target.id}.`;
              if (m.intelDepthLevel === 2) depthMsg = `Level 2 Intel acquired: Operational Status revealed for ${m.target.id}.`;
              if (m.intelDepthLevel === 3) {
                 depthMsg = `Level 3 Intel acquired: Hidden Traits revealed for ${m.target.id}.`;
                 
                 // Roll a hidden trait
                 const traits = ["heavy_armor", "stealth", "emp_burst", "shield_regen"];
                 const { value: rTrait, nextState: sTrait } = randomInt(currentRngState, 0, traits.length - 1);
                 currentRngState = sTrait;
                 const discovered = traits[rTrait];
                 m.revealedData.traits = [...(m.revealedData.traits || []), discovered];
              }
              if (m.intelDepthLevel === 4) {
                 depthMsg = `Level 4 Intel acquired: Loot tables & Vulnerabilities revealed for ${m.target.id}.`;
                 
                 // Roll a loot hint
                 const hints = ["Rift Stone possible", "High Supply Cache", "Artifact chance 10%"];
                 const { value: rHint, nextState: sHint } = randomInt(currentRngState, 0, hints.length - 1);
                 currentRngState = sHint;
                 const discoveredHint = hints[rHint];
                 m.revealedData.lootHints = [...(m.revealedData.lootHints || []), discoveredHint];
              }

              const alertText = {
                en: depthMsg,
                hu: `Új hírszerzési szint: ${depthMsg}`,
                de: `Neues Intel-Level: ${depthMsg}`,
                ro: `Nivel nou de intel: ${depthMsg}`,
              };
              nextState = { ...nextState, alert: alertText, journal: pushJournal(nextState, alertText) };
            }
          }

          // Exposure growth
          const exposureGrowth = (ESPIONAGE_CONFIG.baseExposureGrowthPerHour * 4 + tensionMod * 4) * exposureGrowthMult * operativeRiskMult;
          m.exposureRisk = Math.min(100, m.exposureRisk + exposureGrowth);
          
          // Exposure check
          if (m.exposureRisk >= ESPIONAGE_CONFIG.exposureThreshold) {
            const chance = (m.exposureRisk - 70) * 0.02; // 2% per point above 70
            const { value: rExp, nextState: sExp } = nextRandom(currentRngState);
            currentRngState = sExp;

            if (rExp < chance) {
              // Counter-Intel Check (Did the player leave a decoy?)
              if (nextState.espionage.decoyActiveUntilTick && state.tick < nextState.espionage.decoyActiveUntilTick) {
                m.exposureRisk = 50; // Reset risk
                nextState.espionage.decoyActiveUntilTick = null; // Consume decoy
                const decoyText = {
                  en: `Operatives compromised, but the active decoy diverted attention. Exposure reduced.`,
                  hu: `Az ügynökök lebuktak, de az aktív csalétek elterelte a figyelmet. A kockázat csökkent.`,
                  de: `Agenten kompromittiert, aber der aktive Köder lenkte die Aufmerksamkeit ab. Risiko verringert.`,
                  ro: `Agenți compromiși, dar momeala activă a distras atenția. Expunere redusă.`,
                };
                nextState = { ...nextState, alert: decoyText, journal: pushJournal(nextState, decoyText) };
                continue; // Survive exposure
              }

              // Calm Avatar Trait check (Close Call)
              if (isCalm) {
                 const { value: rCalm, nextState: sCalm } = nextRandom(currentRngState);
                 currentRngState = sCalm;
                 if (rCalm < 0.10) {
                   m.exposureRisk = 69; // Reduce below threshold
                   const calmText = {
                     en: `Operatives kept their cool and narrowly escaped exposure.`,
                     hu: `Az ügynökök megőrizték a hidegvérüket, és hajszál híján elkerülték a lebukást.`,
                     de: `Die Agenten bewahrten einen kühlen Kopf und entgingen knapp der Entdeckung.`,
                     ro: `Agenții și-au păstrat calmul și au scăpat la limită de demascare.`,
                   };
                   nextState = { ...nextState, alert: calmText, journal: pushJournal(nextState, calmText) };
                   continue; // Survive
                 }
              }

              m.phase = "exposed";
              m.lastYieldAtTick = state.tick; // marking exposure time
              m.trapTriggered = true;
              
              let repPenalty = -15;
              if (isCurious) repPenalty -= 5; // Curious penalty

              if (m.target.type === "faction" || m.target.type === "battle_node") {
                 nextState = {
                  ...nextState,
                  factionReputation: {
                    ...nextState.factionReputation,
                    reputation: applyReputationChange(
                      nextState.factionReputation.reputation,
                      m.target.type === "faction" ? (m.target.id as FactionId) : "noma", // fallback
                      repPenalty, 
                      "espionage_caught",
                      nextState
                    )
                  }
                };
              }

              const lostOps = Math.floor(m.operativeCount * ESPIONAGE_CONFIG.exposureLossRatio);
              nextState = {
                  ...nextState,
                  statistics: {
                    ...nextState.statistics,
                    trauma: {
                      ...nextState.statistics.trauma,
                      agentsLost: nextState.statistics.trauma.agentsLost + lostOps,
                    }
                  },
                  espionage: {
                    ...nextState.espionage,
                    lastExposureEventTick: state.tick,
                    lostCount: nextState.espionage.lostCount + lostOps,
                  }
              };
              
              const alertText = {
                en: `Spies exposed targeting ${m.target.id}! Severe repercussions expected.`,
                hu: `Kémeink lebuktak a(z) ${m.target.id} célpontnál! Súlyos következmények várhatók.`,
                de: `Spione beim Ziel ${m.target.id} enttarnt! Schwere Konsequenzen erwartet.`,
                ro: `Spioni demascați vizând ${m.target.id}! Se așteaptă repercusiuni severe.`,
              };
              nextState = { ...nextState, alert: alertText, journal: pushJournal(nextState, alertText) };
              break; // exit yield loop if exposed
            }
          }
        }
        
        if (m.phase === "active") {
          m.lastYieldAtTick += yieldCycles * intelYieldIntervalTicks;
        }
        mutated = true;
      }
    }

    if (m.phase === "exposed") {
      if (state.tick >= m.lastYieldAtTick + extractGracePeriodTicks) {
        m.phase = "lost";
        
        // Report lost allocation to ledger
        nextState = reportLostAllocation(nextState, m.allocationId);

        nextState = {
          ...nextState,
          espionage: {
            ...nextState.espionage,
            lostCount: nextState.espionage.lostCount + Math.ceil(m.operativeCount * (1 - ESPIONAGE_CONFIG.exposureLossRatio)),
          }
        };
        const alertText = {
          en: `Exposed spies targeting ${m.target.id} have been lost permanently.`,
          hu: `A lebukott kémek a(z) ${m.target.id} célpontnál végleg elvesztek.`,
          de: `Enttarnte Spione beim Ziel ${m.target.id} sind endgültig verloren.`,
          ro: `Spionii demascați vizând ${m.target.id} au fost pierduți definitiv.`,
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
      globalRngState: currentRngState,
      espionage: {
        ...nextState.espionage,
        missions: nextMissions,
      }
    };
  }

  return { ...nextState, globalRngState: currentRngState };
}

export function spendIntel(state: StarholdState, action: EspionageIntelAction, extraArg?: any): StarholdState {
  const cost = ESPIONAGE_CONFIG.intelCosts[action];
  
  // Bold avatar penalty for counterfeit/decoy
  const isBold = state.derived?.commanderBonuses.isBold;
  const actualCost = (isBold && (action === "counterfeitIntel" || action === "decoyDeployment")) ? Math.floor(cost * 1.2) : cost;

  if (state.espionage.totalIntel < actualCost) return state;

  let nextState = {
    ...state,
    espionage: {
      ...state.espionage,
      totalIntel: state.espionage.totalIntel - actualCost,
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
          lastScoutedAtTick: 0
        };
        nextState.battleState.scoutReports[extraArg] = {
          ...currentReport,
          intelLevel: 100,
          lastScoutedAtTick: state.tick,
        };
      }
      break;
    case "weakenDefense":
      nextState.journal = pushJournal(nextState, { en: "Enemy defenses weakened via intel.", hu: "Ellenséges védelem gyengítve intelből.", de: "Feindliche Verteidigung geschwächt.", ro: "Apărarea inamicului slăbită." });
      break;
    case "factionSecret":
      if (extraArg && typeof extraArg === "string") {
        const isCurious = nextState.derived?.commanderBonuses.isCurious;
        const baseRepGain = 15;
        const repGain = isCurious ? Math.floor(baseRepGain * 1.5) : baseRepGain;

        nextState.factionReputation.reputation = applyReputationChange(
          nextState.factionReputation.reputation,
          extraArg as import("../faction/types").FactionId,
          repGain,
          "event",
          nextState
        );
      }
      break;
    case "earlyWarning":
      if (nextState.weeklyMission.activeMission && nextState.weeklyMission.activeMission.phase === "preparation") {
        nextState.weeklyMission.activeMission.battleStartsAtTick += 2 * 3600; // 2 hours in ticks
      }
      break;
    case "sabotageSupply":
      nextState.journal = pushJournal(nextState, { en: "Enemy supplies sabotaged.", hu: "Ellenséges utánpótlás szabotálva.", de: "Feindlicher Nachschub sabotiert.", ro: "Aprovizionarea inamicului sabotată." });
      break;
    case "counterfeitIntel":
      nextState.journal = pushJournal(nextState, { en: "Planted counterfeit intel to mislead enemies.", hu: "Hamis információkat juttattunk be az ellenség megtévesztésére.", de: "Gefälschte Informationen platziert, um Feinde in die Irre zu führen.", ro: "Au fost plantate informații false pentru a induce în eroare inamicii." });
      break;
    case "decoyDeployment":
      nextState.espionage.decoyActiveUntilTick = state.tick + 24 * 3600; // 24h decoy in ticks
      nextState.journal = pushJournal(nextState, { en: "Decoy deployment active. Future raids will be misdirected.", hu: "Csalétek bevetve. A jövőbeli portyák tévútra kerülnek.", de: "Täuschungseinsatz aktiv. Zukünftige Überfälle werden fehlgeleitet.", ro: "Desfășurare momeală activă. Raidurile viitoare vor fi deturnate." });
      break;
  }

  return nextState;
}
