import type { StarholdState } from "../types";
import type { EspionageState, EspionageMission, EspionageMissionType, EspionageIntelAction } from "./types";
import type { FactionId } from "../faction/types";
import { ESPIONAGE_CONFIG, FACTION_REPUTATION_CONFIG } from "../../economy";
import { takeBestUnits, mergeGarrisonEntries } from "../warroom/veteran";
import { pushJournal } from "../shared";
import { getReputationTier, applyReputationChange } from "../faction/reputation";
import { nextRandom, randomInt } from "../rng";

export function createInitialEspionageState(): EspionageState {
  return {
    missions: [],
    totalIntel: 0,
    extractedCount: 0,
    lostCount: 0,
    lastExposureEvent: null,
    decoyActiveUntil: null,
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
  
  const currentUnits = state.warRoom.garrison[operativeUnitId] ?? [];
  const totalUnits = currentUnits.reduce((sum, e) => sum + e.count, 0);
  if (totalUnits < operativeCount) return state;

  const { remaining, taken } = takeBestUnits(currentUnits, operativeCount);

  let currentRngState = state.globalRngState;
  const { value: r1, nextState: s1 } = randomInt(currentRngState, 0, 9999);
  currentRngState = s1;

  const now = Date.now();
  const newMission: EspionageMission = {
    id: `spy_${now}_${r1}`,
    type: missionType,
    target,
    operativeRole,
    operativeUnitId,
    operativeCount,
    phase: "deploying",
    startedAt: now,
    activeAt: now + ESPIONAGE_CONFIG.deployTimeMs,
    exposureRisk: 0,
    intelGathered: 0,
    intelDepthLevel: 0,
    lastYieldAt: now + ESPIONAGE_CONFIG.deployTimeMs,
    revealedData: {},
  };

  return {
    ...state,
    globalRngState: currentRngState,
    warRoom: {
      ...state.warRoom,
      garrison: {
        ...state.warRoom.garrison,
        [operativeUnitId]: remaining,
      }
    },
    espionage: {
      ...state.espionage,
      missions: [...state.espionage.missions, newMission],
    },
    journal: pushJournal(state, {
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
  const returnCount = isExposed ? Math.floor(mission.operativeCount * (1 - ESPIONAGE_CONFIG.exposureLossRatio)) : mission.operativeCount;

  let nextGarrison = state.warRoom.garrison;
  if (returnCount > 0) {
    nextGarrison = {
      ...nextGarrison,
      [mission.operativeUnitId]: mergeGarrisonEntries(nextGarrison[mission.operativeUnitId] ?? [], [{ count: returnCount, level: 1 }])
    };
  }

  const nextMissions = state.espionage.missions.map(m => {
    if (m.id === missionId) {
      return { ...m, phase: "extracted" as const };
    }
    return m;
  });

  const text = {
    en: `Extraction complete. ${returnCount} ${mission.operativeRole}s returned from ${mission.target.id}.`,
    hu: `Kivonás sikeres. ${returnCount} ${mission.operativeRole} visszatért a(z) ${mission.target.id} területről.`,
    de: `Extraktion abgeschlossen. ${returnCount} ${mission.operativeRole}s von ${mission.target.id} zurückgekehrt.`,
    ro: `Extracție completă. ${returnCount} ${mission.operativeRole}s s-au întors din ${mission.target.id}.`,
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
  let currentRngState = state.globalRngState;

  // Avatar Traits Check
  const isCurious = !!state.battleState.avatarCombat.innateBonus?.intel; // Curious maps to intel
  const isCalm = !!state.battleState.avatarCombat.innateBonus?.barrier; // Calm maps to barrier
  const isBold = !!state.battleState.avatarCombat.innateBonus?.firepower; // Bold maps to firepower

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
              if (nextState.espionage.decoyActiveUntil && now < nextState.espionage.decoyActiveUntil) {
                m.exposureRisk = 50; // Reset risk
                nextState.espionage.decoyActiveUntil = null; // Consume decoy
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
              m.lastYieldAt = now; // marking exposure time
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

              nextState = {
                  ...nextState,
                  espionage: {
                    ...nextState.espionage,
                    lastExposureEvent: now,
                    lostCount: nextState.espionage.lostCount + Math.floor(m.operativeCount * ESPIONAGE_CONFIG.exposureLossRatio),
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
  const isBold = !!state.battleState.avatarCombat.innateBonus?.firepower;
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
      nextState.journal = pushJournal(nextState, { en: "Enemy supplies sabotaged.", hu: "Ellenséges utánpótlás szabotálva.", de: "Feindlicher Nachschub sabotiert.", ro: "Aprovizionarea inamicului sabotată." });
      break;
    case "counterfeitIntel":
      nextState.journal = pushJournal(nextState, { en: "Planted counterfeit intel to mislead enemies.", hu: "Hamis információkat juttattunk be az ellenség megtévesztésére.", de: "Gefälschte Informationen platziert, um Feinde in die Irre zu führen.", ro: "Au fost plantate informații false pentru a induce în eroare inamicii." });
      break;
    case "decoyDeployment":
      nextState.espionage.decoyActiveUntil = Date.now() + 24 * 60 * 60 * 1000; // 24h decoy
      nextState.journal = pushJournal(nextState, { en: "Decoy deployment active. Future raids will be misdirected.", hu: "Csalétek bevetve. A jövőbeli portyák tévútra kerülnek.", de: "Täuschungseinsatz aktiv. Zukünftige Überfälle werden fehlgeleitet.", ro: "Desfășurare momeală activă. Raidurile viitoare vor fi deturnate." });
      break;
  }

  return nextState;
}
