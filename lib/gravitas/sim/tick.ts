import type { StarholdModuleId, StarholdState, LocalizedString } from "./types";
import { applyStarholdEvents, createAvatarPreparationEvent, failRepairChallenge, advanceRepairChallengeWindow, normalizeRepairChallenge } from "./events";
import { clamp } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { coolDownResonance } from "./activation";
import { advanceStarholdThreat, createNextThreat } from "./threats";
import { checkStarholdMilestones } from "./progression";
import { addResourceDelta, pushJournal, updateModuleIntegrity, addModuleLoad } from "./shared";
import { getStarholdModifiers } from "./modifiers";
import { getModuleActionProfile } from "./modules";
import { getModuleIds } from "./registry";
import { isBootstrapComplete } from "./bootstrap";
import { isDemoChapter } from "./chapter";
import { getContinuationScavengeProfile, normalizeContinuationState } from "./continuation";
import { tickWarroomProduction } from "./warroom";
import { tickRepairBay, getRepairSlotCount } from "./repairbay";
import { applyStarholdCommand } from "./commands";
import { getEnemyResetTime, WORLD_LEVEL_TEXTS } from "./battle/worldScaling";
import { applyNaturalDrift } from "./faction/reputation";
import { evaluateSynergies } from "./synergy/evaluate";
import { SYNERGY_MAP } from "./synergy/registry";
import { advanceCyclePhase, getCycleEffects, CYCLE_PHASE_NAMES } from "./galaxy/cycles";
import { tickDilemmaEffects, tickDilemmaSpawn } from "./dilemma/engine";
import { tickTradeSystem } from "./trade/engine";
import { tickWeeklyMission } from "./weekly/engine";
import { nextRandom, randomInt } from "./rng";
import { evaluateProfile, getProfileEffects, PROFILE_DEFS } from "./commander/evaluate";
import { tickEspionage } from "./espionage/index";
import { tickResearch } from "./research/engine";
import { tickSupplyRoutes } from "./supplyroute/engine";
import { tickCodex } from "./codex/engine";
import { tickNotifications, pushNotification } from "./notifications/engine";
import { tickOfficers } from "./officers/engine";
import { tickFactionWars } from "./factionwars/engine";
import { tickExpeditions } from "./expeditions/engine";

/** Manage dynamic galaxy phases */
function tickGalaxyCycle(state: StarholdState): StarholdState {
  const now = Date.now();
  let nextState = state;

  // 1. Check for phase transition
  if (now >= state.galaxyCycle.phaseEndsAt) {
    const nextCycle = advanceCyclePhase(state.galaxyCycle);
    const nextPhase = nextCycle.currentPhase;
    const phaseName = CYCLE_PHASE_NAMES[nextPhase];

    const transitionAlert: LocalizedString = {
      en: `The galaxy has entered the ${phaseName.en} phase.`,
      hu: `A galaxis belépett a ${phaseName.hu} fázisba.`,
      de: `Die Galaxie ist in die ${phaseName.de}-Phase eingetreten.`,
      ro: `Galaxia a intrat în faza ${phaseName.ro}.`,
    };

    // Add phase-specific warning hints
    let hint: LocalizedString | null = null;
    if (nextPhase === "storm") {
      hint = {
        en: "Be careful with mining! Drone reliability is reduced.",
        hu: "Légy óvatos a bányászattal! A drónok megbízhatósága csökkent.",
        de: "Vorsicht beim Bergbau! Die Zuverlässigkeit der Drohnen ist verringert.",
        ro: "Atenție la minerit! Fiabilitatea dronelor este redusă.",
      };
    } else if (nextPhase === "war") {
      hint = {
        en: "Faction tensions are peaking. Expect frequent raids.",
        hu: "A frakciók közötti feszültség a tetőfokára hágott. Gyakori portyákra számíts.",
        de: "Die Spannungen zwischen den Fraktionen nehmen zu. Erwarte häufige Überfälle.",
        ro: "Tensiunile dintre fracțiuni ating cote maxime. Așteaptă-te la raiduri frecvente.",
      };
    }

    nextState = {
      ...state,
      galaxyCycle: nextCycle,
      alert: transitionAlert,
      journal: pushJournal(state, transitionAlert),
    };

    if (hint) {
      nextState.journal = pushJournal(nextState, hint);
    }
  }

  // 2. Apply passive effects (e.g., Hull drain in Storm)
  const effects = getCycleEffects(nextState.galaxyCycle.currentPhase);
  if (effects.hullDrainPerTick > 0 && nextState.resources.shield < 30) {
    const nextHull = Math.max(0, nextState.resources.hull - effects.hullDrainPerTick);
    nextState = {
      ...nextState,
      resources: {
        ...nextState.resources,
        hull: nextHull,
      }
    };
  }

  return nextState;
}

/** Check if world level should increase based on core level and time */
function tickFactionReputation(state: StarholdState): StarholdState {
  const now = Date.now();
  if (now - state.factionReputation.lastDriftAt >= 24 * 60 * 60 * 1000) {
    return {
      ...state,
      factionReputation: applyNaturalDrift(state.factionReputation),
    };
  }
  return state;
}

/** Daily evaluation of player playstyle profile */
function tickCommanderProfile(state: StarholdState): StarholdState {
  const now = Date.now();
  if (now - state.commander.metrics.lastEvaluatedAt < 24 * 60 * 60 * 1000) {
    return state;
  }

  const nextProfileId = evaluateProfile(state.commander.metrics, state.moduleLevels);
  let nextState = state;

  if (nextProfileId !== state.commander.currentProfile) {
    const profileDef = PROFILE_DEFS[nextProfileId];
    const changeAlert: LocalizedString = {
      en: `Commander profile updated: ${profileDef.name.en}`,
      hu: `Parancsnoki profil frissítve: ${profileDef.name.hu}`,
      de: `Kommandantenprofil aktualisiert: ${profileDef.name.de}`,
      ro: `Profil comandant actualizat: ${profileDef.name.ro}`,
    };

    nextState = {
      ...state,
      commander: {
        ...state.commander,
        currentProfile: nextProfileId,
        effects: getProfileEffects(nextProfileId),
      },
      alert: changeAlert,
      journal: pushJournal(state, changeAlert),
    };
  }

  return {
    ...nextState,
    commander: {
      ...nextState.commander,
      metrics: {
        ...nextState.commander.metrics,
        lastEvaluatedAt: now,
      }
    }
  };
}

function tickWorldLevel(state: StarholdState): StarholdState {
  const now = Date.now();
  const coreLevel = state.moduleLevels.core;
  
  // 1. Apply pending level increase
  if (state.worldLevelPending && now >= state.worldLevelPending.scheduledAt) {
    const nextLevel = state.worldLevelPending.targetLevel;
    return {
      ...state,
      worldLevel: nextLevel,
      worldLevelPending: null,
      alert: WORLD_LEVEL_TEXTS.changed,
      journal: pushJournal(state, WORLD_LEVEL_TEXTS.changed),
    };
  }

  // 2. Schedule new level increase if core level is higher and nothing is pending
  if (!state.worldLevelPending && coreLevel > state.worldLevel) {
    const { time: delay, nextRng: rRng } = getEnemyResetTime(state.globalRngState);
    return {
      ...state,
      globalRngState: rRng,
      worldLevelPending: {
        targetLevel: coreLevel,
        scheduledAt: now + delay,
      },
      alert: WORLD_LEVEL_TEXTS.pending,
    };
  }

  // 3. Update target level if core grows while pending (without resetting timer)
  if (state.worldLevelPending && coreLevel > state.worldLevelPending.targetLevel) {
    return {
      ...state,
      worldLevelPending: {
        ...state.worldLevelPending,
        targetLevel: coreLevel,
      }
    };
  }

  return state;
}

/** Check if any battle-related timers have completed (real-time based) */
function tickBattle(state: StarholdState): StarholdState {
  const activeScout = state.battleState.activeScout;
  if (!activeScout) return state;

  const now = Date.now();
  if (now >= activeScout.completesAt) {
    // Re-use COMPLETE_SCOUT logic from commands
    return applyStarholdCommand(state, { type: "COMPLETE_SCOUT" });
  }

  return state;
}

/** Check if any module upgrades have completed (real-time based) */
function tickUpgrades(state: StarholdState): StarholdState {
  if (state.upgradeQueue.length === 0) return state;
  const now = Date.now();
  const completed = state.upgradeQueue.filter(s => now >= s.completesAt);
  if (completed.length === 0) return state;

  let nextLevels = { ...state.moduleLevels };
  let journal = state.journal;
  let alert: LocalizedString | null = null;
  let nextRepairBay = state.repairBay;

  for (const slot of completed) {
    nextLevels = { ...nextLevels, [slot.moduleId]: slot.targetLevel };
    if (slot.moduleId === "repairbay") {
      const slotCount = getRepairSlotCount(slot.targetLevel);
      const currentSlots = nextRepairBay.repairSlots.slice(0, slotCount);
      while (currentSlots.length < slotCount) currentSlots.push(null);
      nextRepairBay = {
        ...nextRepairBay,
        level: slot.targetLevel,
        repairSlots: currentSlots,
      };
    }
    const doneText: LocalizedString = {
      en: `${slot.moduleId} reached level ${slot.targetLevel}!`,
      hu: `${slot.moduleId} elérte a ${slot.targetLevel}. szintet!`,
      de: `${slot.moduleId} hat Level ${slot.targetLevel} erreicht!`,
      ro: `${slot.moduleId} a ajuns la nivelul ${slot.targetLevel}!`,
    };
    journal = pushJournal({ ...state, journal }, doneText);
    alert = doneText;
  }

  // Synergy evaluation after upgrade completion
  let synergies = state.synergies;
  const newSynergies = evaluateSynergies(nextLevels, state.tick);
  
  // Check for newly activated synergies
  const added = newSynergies.active.filter(id => !state.synergies.active.includes(id));
  if (added.length > 0) {
    synergies = newSynergies;
    for (const synId of added) {
      const def = SYNERGY_MAP[synId];
      if (def) {
        const discoverText: LocalizedString = {
          en: `Synergy discovered: "${def.name.en}" — ${def.description.en}`,
          hu: `Szinergia felfedezve: "${def.name.hu}" — ${def.description.hu}`,
          de: `Synergie entdeckt: "${def.name.de}" — ${def.description.de}`,
          ro: `Sinergie descoperită: "${def.name.ro}" — ${def.description.ro}`,
        };
        journal = pushJournal({ ...state, journal }, discoverText);
        alert = discoverText; // Show the latest discovery
      }
    }
  }

  return {
    ...state,
    moduleLevels: nextLevels,
    repairBay: nextRepairBay,
    upgradeQueue: state.upgradeQueue.filter(s => now < s.completesAt),
    journal,
    alert: alert ?? state.alert,
    synergies,
  };
}

function stabilizeContinuationTick(previous: StarholdState, next: StarholdState): StarholdState {
  if (isDemoChapter(previous)) return next;
  return normalizeContinuationState({
    ...next,
    resources: {
      ...next.resources,
    },
  });
}

function completeActiveOperation(state: StarholdState): StarholdState {
  const op = state.activeOperation;
  if (!op) return state;

  const mods = getStarholdModifiers(state);
  switch (op.type) {
    case "stabilizeReactor": {
      const introWindow = state.phase === "boot" && state.tick < 90;
      const profile = getModuleActionProfile("reactor");
      const nextLoad = addModuleLoad(state, "reactor", profile.loadShift).load;
      const gainMult = mods.recoveryEfficiency;
      const recoveringFirstWave = state.reactorRecovery.active && state.threatCycle === 1;
      const completedStabilizations = recoveringFirstWave
        ? state.reactorRecovery.completedStabilizations + 1
        : state.reactorRecovery.completedStabilizations;
      const reactorRecovery = recoveringFirstWave
        ? completedStabilizations >= 2
          ? {
              active: false,
              completedStabilizations,
              nextPromptTick: state.tick + 999,
            }
          : {
              active: true,
              completedStabilizations,
              nextPromptTick: state.tick + 30,
            }
        : state.reactorRecovery;
      const recoveryAlert: LocalizedString = recoveringFirstWave && completedStabilizations >= 2
        ? {
            en: "Reactor restored. Wave 1 held.",
            hu: "Reaktor helyreállt. 1. hullám kivédve.",
            de: "Reaktor wiederhergestellt. Welle 1 abgewehrt.",
            ro: "Reactor restaurat. Valul 1 respins.",
          }
        : GRAVITAS_TEXT.alerts.reactorStabilized;
      return {
        ...state,
        activeOperation: null,
        resources: addResourceDelta(state.resources, {
          power: Math.floor((introWindow ? 12 : 10) * gainMult),
          stability: Math.floor((introWindow ? 10 : 8) * gainMult),
        }),
        marks: {
          ...state.marks,
          reactorScar: clamp(state.marks.reactorScar - 1),
        },
        modules: {
          ...state.modules,
          reactor: {
            ...updateModuleIntegrity(state, "reactor", Math.floor(profile.repairGain * gainMult)),
            load: nextLoad,
          },
        },
        reactorRecovery,
        alert: recoveryAlert,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.reactorRealigned),
      };
    }
    case "repairModule": {
      if (!op.moduleId) return { ...state, activeOperation: null };
      const introWindow = state.phase === "boot" && state.tick < 90;
      const profile = getModuleActionProfile(op.moduleId);
      const target = state.modules[op.moduleId];
      const nextIntegrity = clamp(target.integrity + Math.floor((profile.repairGain + (introWindow ? 3 : 0)) * mods.recoveryEfficiency));
      const nextLoad = addModuleLoad(state, op.moduleId, target.online ? 0 : profile.loadShift).load;
      return {
        ...state,
        activeOperation: null,
        resources: addResourceDelta(state.resources, {
          stability: Math.floor((introWindow ? 4 : 3) * mods.recoveryEfficiency),
        }),
        modules: {
          ...state.modules,
          [op.moduleId]: {
            ...target,
            integrity: nextIntegrity,
            online: nextIntegrity >= profile.onlineThreshold || target.online,
            load: nextLoad,
          },
        },
        alert: GRAVITAS_TEXT.alerts.modulePatched(target.name),
        journal: pushJournal(state, GRAVITAS_TEXT.journal.integrityRestored(target.name, nextIntegrity)),
      };
    }
    case "rerouteCore": {
      const introWindow = state.phase === "boot" && state.tick < 90;
      return {
        ...state,
        activeOperation: null,
        resources: {
          ...state.resources,
          activation: clamp(state.resources.activation + (introWindow ? 14 : 12)),
        },
        worldPulse: clamp(state.worldPulse + 3),
        alert: {
          en: "Power reroute completed. Core chamber primed.",
          hu: "Az átirányítás befejeződött. A magkamra készen áll.",
          de: "Energieumleitung abgeschlossen. Kernkammer bereit.",
          ro: "Redirecționarea s-a încheiat. Camera nucleului este pregătită.",
        },
        journal: pushJournal(state, {
          en: "Core conduits locked and the chamber accepted the incoming charge.",
          hu: "A magvezetékek rögzültek, a kamra befogadta a töltést.",
          de: "Kernleitungen verriegelten sich und die Kammer nahm die Ladung an.",
          ro: "Conductele nucleului s-au fixat, iar camera a acceptat încărcarea.",
        }),
      };
    }
    default:
      return { ...state, activeOperation: null };
  }
}

function advanceScavengeOperation(state: StarholdState): StarholdState {
  const op = state.scavengeOperation;
  if (!op) return state;

  if (!state.modules.logistics.online) {
    return {
      ...state,
      scavengeOperation: null,
      alert: {
        en: "Scavenge flight aborted. Logistics must be repaired first.",
        hu: "A gyűjtés megszakadt. Előbb a logisztikát kell megjavítani.",
        de: "Bergung abgebrochen. Die Logistik muss zuerst repariert werden.",
        ro: "Colectarea a fost oprită. Logistica trebuie reparată mai întâi.",
      },
      journal: pushJournal(state, {
        en: "The drone route failed because logistics could not support the salvage run.",
        hu: "A drónútvonal megszakadt, mert a logisztika nem tudta kiszolgálni a gyűjtést.",
        de: "Die Drohnenroute brach ab, weil die Logistik den Bergungslauf nicht tragen konnte.",
        ro: "Ruta dronelor a eșuat, deoarece logistica nu a putut susține colectarea.",
      }),
    };
  }

  const nextRemaining = op.remaining - 1;
  if (nextRemaining > 0) {
    return {
      ...state,
      scavengeOperation: {
        ...op,
        remaining: nextRemaining,
      },
    };
  }

  const continuationScavengeProfile = isDemoChapter(state)
    ? null
    : getContinuationScavengeProfile(state);
  const materialsGain = continuationScavengeProfile?.materialsGain ?? 2;
  const nextCycleDuration = continuationScavengeProfile?.cycleDuration ?? op.cycleDuration;

  return {
    ...state,
    resources: addResourceDelta(state.resources, {
      supply: materialsGain,
    }),
    worldPulse: clamp(state.worldPulse + 1),
    alert: GRAVITAS_TEXT.alerts.scavengeSuccess,
    scavengeOperation: {
      ...op,
      cycleDuration: nextCycleDuration,
      remaining: nextCycleDuration,
      completedCycles: op.completedCycles + 1,
    },
  };
}

export function advanceStarholdTick(inputState: StarholdState): StarholdState {
  let state = inputState;
  
  // Also process notification tick
  state = tickNotifications(state);
  
  const nextState = advanceStarholdTickInternal(state);
  if (nextState.alert && nextState.alert !== state.alert) {
    const text = nextState.alert.en.toLowerCase();
    let type: import("./notifications/types").NotificationType = "general";
    let icon = "Bell";

    if (text.includes("research")) { type = "research"; icon = "FlaskConical"; }
    else if (text.includes("upgrade") || text.includes("reached level")) { type = "upgrade"; icon = "ArrowUpCircle"; }
    else if (text.includes("raid") || text.includes("disrupted") || text.includes("destroyed") || text.includes("hostile")) { type = "raid"; icon = "AlertTriangle"; }
    else if (text.includes("exposed") || text.includes("spies") || text.includes("agent") || text.includes("intel")) { type = "espionage"; icon = "Eye"; }
    else if (text.includes("weekly") || text.includes("defend")) { type = "weekly"; icon = "Calendar"; }
    else if (text.includes("trade") || text.includes("route")) { type = "trade"; icon = "ArrowLeftRight"; }
    else if (text.includes("dilemma")) { type = "dilemma"; icon = "Scale"; }
    else if (text.includes("repair") || text.includes("dying") || text.includes("casualties")) { type = "repair"; icon = "Wrench"; }
    else if (text.includes("training") || text.includes("unit")) { type = "training"; icon = "Users"; }
    else if (text.includes("phase") || text.includes("cycle") || text.includes("storm") || text.includes("war")) { type = "system"; icon = "Globe"; }

    return pushNotification(nextState, type, nextState.alert, nextState.alert, icon);
  }
  return nextState;
}

function advanceStarholdTickInternal(inputState: StarholdState): StarholdState {
  let state = inputState;
  if (state.tick % 60 === 0) {
    state = { ...state, lastActiveAt: Date.now() };
  }
  if (!isDemoChapter(state) && state.repairChallenge.active) {
    state = {
      ...state,
      repairChallenge: {
        ...state.repairChallenge,
        active: false,
        windowSatisfied: false,
      },
    };
  }
  const normalizedRepairChallenge = normalizeRepairChallenge(state.repairChallenge, state.threatCycle);
  if (normalizedRepairChallenge !== state.repairChallenge) {
    state = {
      ...state,
      repairChallenge: normalizedRepairChallenge,
    };
  }
  if (state.pendingEvent?.id === "avatarPreparation" || (state.avatarImprintActive && !state.avatarAwake)) {
    return state;
  }
  if (isDemoChapter(state) && state.threatCycle === 0 && state.threat.countdown <= 1 && !isBootstrapComplete(state)) {
    const failureAlert = GRAVITAS_TEXT.journal.bootstrapFailed;
    return checkStarholdMilestones({
      ...state,
      stationLost: true,
      lockdown: true,
      lockdownDuration: state.lockdownDuration + 1,
      alert: failureAlert,
      journal: pushJournal(state, GRAVITAS_TEXT.journal.bootstrapFailedJournal),
      threat: {
        ...state.threat,
        countdown: 0,
      },
    });
  }
  const scriptedPhaseOne = !state.avatarAwake && state.tick < 180;
  const mods = getStarholdModifiers(state);
  const nextQuietTicks = Math.max(0, (state.eventQuietTicks ?? 0) - 1);
  const recoveryCalmWindow = isDemoChapter(state) && (state.waveRecoveryCalmTicks ?? 0) > 0;
  const nextRecoveryCalmTicks = Math.max(0, (state.waveRecoveryCalmTicks ?? 0) - 1);
  const repairChallengeExpired = isDemoChapter(state) && state.repairChallenge.active && state.tick > state.repairChallenge.promptEndsAtTick;
  if (repairChallengeExpired) {
    if (state.repairChallenge.windowSatisfied) {
      return checkStarholdMilestones(advanceRepairChallengeWindow({
        ...state,
        pendingEvent: null,
        postWaveSurgeTicks: 0,
        postWaveSurgeMode: null,
        waveRecoveryCalmTicks: 0,
      }));
    }
    return checkStarholdMilestones({
      ...failRepairChallenge({
        ...state,
        pendingEvent: null,
        postWaveSurgeTicks: 0,
        postWaveSurgeMode: null,
        waveRecoveryCalmTicks: 0,
      }),
    });
  }
  const introWindow = state.phase === "boot" && state.tick < 90;
  const settlingWindow = !state.avatarAwake && state.tick < 70;
  const earlyWindow = !state.avatarAwake && state.tick < 100;
  const firstWaveRecoveryActive =
    isDemoChapter(state) &&
    state.reactorRecovery.active &&
    state.threatCycle === 1 &&
    state.tick < state.reactorRecovery.nextPromptTick;
  const postWaveSurgeActive = (state.postWaveSurgeTicks ?? 0) > 0;
  const postWaveSurgeDangerWindow = postWaveSurgeActive && state.postWaveSurgeTicks <= 30;
  const postWaveSurgeSpike =
    postWaveSurgeDangerWindow &&
    (state.postWaveSurgeTicks % 10 === 0);
  const postWaveSurgeMode = state.postWaveSurgeMode ?? "gentle";
  const sensorOnline = state.modules.sensor.online;
  const sensorIntegrity = state.modules.sensor.integrity;
  const chapterDriftScale = isDemoChapter(state) ? 1 : 0.5;
  const softenDrift = (value: number) => Math.max(0, Math.round(value * chapterDriftScale));
  const reactorBoost = recoveryCalmWindow ? 0 : state.modules.reactor.online ? softenDrift(introWindow ? 3 : settlingWindow ? 2 : 2) : 0;
  const logisticsDrainBase = recoveryCalmWindow ? 0 : state.modules.logistics.online ? 0 : softenDrift(1 + Math.floor(state.marks.supplyStress / 4));
  const logisticsDrain = recoveryCalmWindow ? 0 : Math.max(0, logisticsDrainBase - softenDrift(introWindow ? 1 : 0));
  // sensorBoost synergy: Reactor + Sensor both healthy → +2 stability instead of +1
  const sensorStability = recoveryCalmWindow ? 0 : state.modules.sensor.online ? softenDrift((mods.sensorBoost ? 2 : 1) + (introWindow ? 1 : 0)) : 0;
  const phaseDrain = recoveryCalmWindow ? 0 : state.phase === "activation" ? softenDrift(1) : 0;

  // Crisis / Stability checks
  const isCrisis = state.resources.power < (introWindow ? 6 : 10) && state.resources.stability < (settlingWindow ? 20 : 30);
  const isHighStability = state.resources.stability > (settlingWindow ? 80 : 85);

  // Anomalies impact
  let anomalyPowerDrain = 0;
  let anomalyStabilityDrain = 0;
  state.anomalies.forEach(a => {
    if (a.id === "voidLeak") anomalyStabilityDrain += a.severity;
    if (a.id === "coreTremor") anomalyPowerDrain += Math.floor(a.severity / 2);
    if (a.id === "materialEntropy") { /* handled in commands/scavenge */ }
  });

  // Marks impact
  const scarDrain = Math.max(0, Math.floor(state.marks.reactorScar / 3) - (settlingWindow ? 1 : 0));
  const shellDrain = Math.max(0, Math.floor(state.marks.shellStrain / 2) - (settlingWindow ? 1 : 0));
  const voidDrain = Math.max(0, Math.floor(state.marks.voidEcho / 3) - (settlingWindow ? 1 : 0));
  const totalMarks = state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress + state.marks.voidEcho;
  const driftInstability = totalMarks > 8 ? Math.floor(totalMarks / 4) : 0;

  // Resonance effect
  const resonancePowerDrain = Math.floor(state.resonance / 25);

  // Entropy effect (soft trap)
  const entropyStabilityDrain = Math.max(0, Math.floor(state.entropy / 15) - (settlingWindow ? 1 : 0));
  const entropyPowerDrain = Math.max(0, Math.floor(state.entropy / 20) - (settlingWindow ? 1 : 0));

  // High Stability bonus: reduced drains
  const stabilityBuffer = softenDrift(isHighStability ? 2 : 0);
  const isAwakened = state.phase === "awakened";
  const decayMult = isAwakened ? 1.5 : 1;
  const worldPhase = state.worldPhase;
  const phasePowerDrain = recoveryCalmWindow ? 0 : softenDrift(worldPhase === 1 ? 1 : 0);
  const phaseStabilityBonus = recoveryCalmWindow ? 0 : softenDrift(worldPhase === 2 ? 1 : 0);
  const phaseEntropyBias = recoveryCalmWindow ? 0 : softenDrift(worldPhase === 3 ? 1 : 0);

  let nextPower = clamp(
    state.resources.power + reactorBoost - logisticsDrain - phaseDrain - scarDrain - resonancePowerDrain - entropyPowerDrain - anomalyPowerDrain - phasePowerDrain + softenDrift((isHighStability ? 1 : 0) + (mods.gridSynergy ? 1 : 0) + (mods.fullGrid ? 2 : 0) + (isAwakened ? 1 : 0))
  );
  let nextStability = clamp(
    state.resources.stability +
      sensorStability +
      stabilityBuffer +
      phaseStabilityBonus -
      (state.modules.reactor.integrity < 40 ? (settlingWindow ? 0 : 1) : 0) -
      (state.modules.core.load > 75 ? (introWindow ? 0 : 1) : 0) -
      shellDrain -
      voidDrain -
      anomalyStabilityDrain -
      entropyStabilityDrain -
      driftInstability -
      (isCrisis ? (settlingWindow ? 1 : 2) : 0)
  );

  if (firstWaveRecoveryActive && !recoveryCalmWindow) {
    nextStability = clamp(
      Math.max(
        nextStability + softenDrift(2 + (state.modules.reactor.online ? 1 : 0) + (sensorOnline ? 1 : 0)),
        Math.min(82, state.resources.stability + softenDrift(3))
      )
    );
  }
  let nextSupply = state.resources.supply;
  let nextActivation = state.resources.activation;
  if (state.repairChallenge.active && !recoveryCalmWindow) {
    const repairChallengeTarget = state.repairChallenge.sequence[state.repairChallenge.promptIndex] ?? null;
    const remainingWindow = Math.max(1, state.repairChallenge.promptEndsAtTick - state.tick + 1);
    switch (repairChallengeTarget) {
      case "reactor": {
        const drain = Math.max(1, Math.ceil(nextStability / remainingWindow));
        nextStability = clamp(Math.max(0, nextStability - drain));
        nextPower = clamp(Math.max(6, nextPower - 1));
        break;
      }
      case "logistics": {
        const drain = Math.max(1, Math.ceil(nextSupply / remainingWindow));
        nextSupply = clamp(Math.max(0, nextSupply - drain));
        nextPower = clamp(Math.max(6, nextPower - 1));
        break;
      }
      case "sensor": {
        const drain = Math.max(1, Math.ceil(nextPower / remainingWindow));
        nextPower = clamp(Math.max(0, nextPower - drain));
        nextStability = clamp(Math.max(12, nextStability - 1));
        break;
      }
      case "core": {
        const drain = Math.max(1, Math.ceil(nextActivation / remainingWindow));
        nextActivation = clamp(Math.max(0, nextActivation - drain));
        nextPower = clamp(Math.max(6, nextPower - 1));
        break;
      }
    }
  }
  if (postWaveSurgeDangerWindow && !recoveryCalmWindow) {
    const surgeDrop =
      postWaveSurgeMode === "aggressive"
        ? (state.postWaveSurgeTicks > 20 ? 5 : state.postWaveSurgeTicks > 10 ? 7 : 9)
        : (state.postWaveSurgeTicks > 20 ? 2 : state.postWaveSurgeTicks > 10 ? 4 : 6);
    nextStability = clamp(Math.max(16, nextStability - (postWaveSurgeSpike ? surgeDrop : 1)));
    if (postWaveSurgeSpike) {
      nextPower = clamp(nextPower - (postWaveSurgeMode === "aggressive" ? 2 : 1));
    }
  }

  let nextModules = { ...state.modules };
  // Module load cooling and overload wear
  Object.keys(nextModules).forEach((id) => {
    const m = nextModules[id as StarholdModuleId];
    // moduleCoolant: load cooling 2x faster
    const coolingBase = mods.moduleCoolant ? 2 : 1;
    const nextLoad = recoveryCalmWindow
      ? m.load
      : m.online
        ? clamp(m.load - coolingBase)
        : clamp(m.load - (coolingBase * 2));
    let nextIntegrity = m.integrity;
    if (!recoveryCalmWindow) {
      if (m.load >= 92) {
        nextIntegrity = clamp(nextIntegrity - 1);
      }
      if (m.load >= 95) {
        nextIntegrity = clamp(nextIntegrity - 1); // Total -2
      }
    }
    
    nextModules[id as StarholdModuleId] = { ...m, load: nextLoad, integrity: nextIntegrity };
  });

  let alert = state.alert;
  let nextJournal = [...state.journal];

  // Station Report every 50 ticks
  if (state.tick % 50 === 0 && state.tick > 0 && !recoveryCalmWindow) {
    const avgIntegrity = Math.floor(
      (nextModules.reactor.integrity + nextModules.logistics.integrity +
       nextModules.sensor.integrity + nextModules.core.integrity) / 4
    );
    const statusText = avgIntegrity > 70 ? { en: "STABLE", hu: "STABIL", de: "STABIL", ro: "STABIL" } : 
                       avgIntegrity > 40 ? { en: "DAMAGED", hu: "SÉRÜLT", de: "BESCHÄDIGT", ro: "AVARIAT" } : 
                       { en: "CRITICAL", hu: "KRITIKUS", de: "KRITISCH", ro: "CRITIC" };
    
    const report: LocalizedString = {
      en: `Station Report T${state.tick}: ${statusText.en} — Avg integrity ${avgIntegrity}%, Entropy ${state.entropy}, Marks ${totalMarks}`,
      hu: `Állomás jelentés T${state.tick}: ${statusText.hu} — Átlag integritás ${avgIntegrity}%, Entrópia ${state.entropy}, Nyomok ${totalMarks}`,
      de: `Stationsbericht T${state.tick}: ${statusText.de} — Durchschn. Integrität ${avgIntegrity}%, Entropie ${state.entropy}, Spuren ${totalMarks}`,
      ro: `Raport stație T${state.tick}: ${statusText.ro} — Integritate medie ${avgIntegrity}%, Entropie ${state.entropy}, Marcaje ${totalMarks}`,
    };
    nextJournal = pushJournal({ ...state, journal: nextJournal }, report);
  }

  // Lockdown logic
  let nextLockdown = state.lockdown;
  let nextPendingEvent = state.pendingEvent;
  const lockdownArmed = !scriptedPhaseOne && state.tick >= 95;
  if (nextStability === 0 && !nextLockdown && !recoveryCalmWindow) {
    if (lockdownArmed) {
      nextLockdown = true;
      nextPendingEvent = null; // Force clear to allow override event
      alert = {
        en: "STATION LOCKDOWN: Stability failure. Emergency override required.",
        hu: "ÁLLOMÁS LEZÁRVA: Stabilitási hiba. Kézi felülbírálás szükséges.",
        de: "STATIONS-LOCKDOWN: Stabilitätsfehler. Notfall-Override erforderlich.",
        ro: "BLOCARE STAȚIE: Eșec stabilitate. Este necesară suprascrierea de urgență.",
      };
      nextJournal = pushJournal({ ...state, journal: nextJournal }, alert);
    } else {
      nextStability = 8;
      alert = GRAVITAS_TEXT.alerts.critStability;
    }
  }

  if (!state.avatarAwake && nextStability > 0 && nextStability < 18 && !recoveryCalmWindow) {
    nextStability = clamp(
      nextStability +
        softenDrift((state.modules.reactor.online ? 2 : 1) + (state.modules.sensor.online ? 1 : 0))
    );
  }

  // Void Whispers (Psychic atmosphere)
  let currentRngState = state.globalRngState;
  
  const { value: rWhisperChance, nextState: s1 } = nextRandom(currentRngState);
  currentRngState = s1;
  
  if (!introWindow && state.marks.voidEcho > 8 && state.tick % 15 === 0 && rWhisperChance > 0.4 && !recoveryCalmWindow) {
    const whispers = GRAVITAS_TEXT.lore.voidWhispers || [];
    if (whispers.length > 0) {
      const { value: rIdx, nextState: s2 } = randomInt(currentRngState, 0, whispers.length - 1);
      currentRngState = s2;
      const randomWhisper = whispers[rIdx];
      nextJournal = pushJournal({ ...state, journal: nextJournal }, randomWhisper);
    }
  }

  // Glitch logic (accelerated in Crisis)
  const glitchThreshold = isCrisis ? 8 : 10;
  if (!earlyWindow && totalMarks > glitchThreshold && state.tick % (isCrisis ? 3 : 5) === 0 && !recoveryCalmWindow) {
    const ids = getModuleIds();
    const affectedModuleId = ids[state.tick % ids.length];
    const baseDamage = (isCrisis ? 4 : 2) + Math.floor(totalMarks / 5);
    // coreShield synergy: Logistics + Core both healthy → core takes 50% less integrity damage from glitches
    const damage = (affectedModuleId === "core" && mods.coreShield) ? Math.max(1, Math.floor(baseDamage / 2)) : baseDamage;
    nextModules[affectedModuleId] = {
      ...nextModules[affectedModuleId],
      integrity: clamp(nextModules[affectedModuleId].integrity - damage),
    };
    alert = GRAVITAS_TEXT.alerts.driftGlitch(nextModules[affectedModuleId].name);
    nextJournal = pushJournal({ ...state, journal: nextJournal }, alert);
  }

  // Entropy Spike (Aggressive damage at high entropy)
  if (!earlyWindow && state.entropy > 80 && state.tick % 4 === 0 && !recoveryCalmWindow) {
    const eids = getModuleIds();
    const { value: rMod, nextState: s3 } = randomInt(currentRngState, 0, eids.length - 1);
    currentRngState = s3;
    const targetId = eids[rMod];
    nextModules[targetId] = {
      ...nextModules[targetId],
      integrity: clamp(nextModules[targetId].integrity - 5),
    };
    alert = {
      en: `Critical Entropy Spike! ${nextModules[targetId].name.en} integrity failing.`,
      hu: `Kritikus entrópia-tüske! ${nextModules[targetId].name.hu} integritása omlik.`,
      de: `Kritischer Entropie-Peak! ${nextModules[targetId].name.de}-Integrität versagt.`,
      ro: `Vârf critic de entropie! Integritatea ${nextModules[targetId].name.ro} eșuează.`,
    };
    nextJournal = pushJournal({ ...state, journal: nextJournal }, alert);
  }

  // Activation should keep moving once the chamber is active.
  if (state.phase === "activation" && !state.avatarAwake && !recoveryCalmWindow) {
    const passiveGain =
      (state.modules.core.online ? 0.22 : 0) +
      (sensorOnline ? 0.16 : 0) +
      (nextStability >= 60 ? 0.12 : 0);
    const passiveLoss =
      (nextPower < 12 ? 0.22 : 0) +
      (nextStability < 40 ? 0.18 : 0) +
      (!sensorOnline ? 0.08 : 0);
    nextActivation = clamp(nextActivation + passiveGain - passiveLoss, 0, 100);
  } else if (state.phase === "boot" && nextActivation > 0 && !state.activeOperation && !recoveryCalmWindow) {
    nextActivation = clamp(nextActivation - 0.05, 0, 100);
  }

  const nextPhase =
    (state.avatarAwake || nextActivation >= 100) && state.phase !== "awakened" ? "awakened" : state.phase;

  // Auto-Salvage Item Logic
  if (state.progression.unlockedItems.includes("auto_salvage") && state.tick % 10 === 0) {
    nextSupply = clamp(nextSupply + 1);
  }

  let nextAlert =
    nextPower < 8
      ? GRAVITAS_TEXT.alerts.critPower
      : nextStability < 25
        ? GRAVITAS_TEXT.alerts.critStability
        : alert;

  // Anomaly duration decay (slower in Crisis)
  const nextAnomalies = state.anomalies
    .map(a => a.duration !== undefined ? { ...a, duration: a.duration - (isCrisis ? 0.5 : 1) } : a)
    .filter(a => a.duration === undefined || a.duration > 0);

  // Entropy logic
  let nextEntropy = state.entropy;
  if ((totalMarks > 12 || isCrisis || nextLockdown) && !recoveryCalmWindow) {
    const baseGain = softenDrift(Math.floor(totalMarks / 6) + (isCrisis ? 2 : 0) + (nextLockdown ? 3 : 0));
    // entropyDampener: 25% slower entropy growth
    let gain = mods.entropyDampener ? Math.ceil(baseGain * 0.75) : baseGain;
    if (state.tick < 70) gain = Math.min(gain, 1);
    nextEntropy = clamp(nextEntropy + gain);
  } else if (totalMarks < 5 || isHighStability) {
    nextEntropy = clamp(nextEntropy - softenDrift(isHighStability ? 2 : 1));
  }
  if (phaseEntropyBias > 0) {
    nextEntropy = clamp(nextEntropy - phaseEntropyBias);
  }
  if (!sensorOnline && (state.tick >= 70 || state.threat.countdown <= 12) && state.tick % 12 === 0 && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy + softenDrift(1));
  }
  if (sensorOnline && sensorIntegrity >= 55 && state.tick % 10 === 0 && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy - softenDrift(1));
  }
  if (firstWaveRecoveryActive && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy - softenDrift(1));
  }
  if (postWaveSurgeDangerWindow && !recoveryCalmWindow) {
    nextEntropy = clamp(nextEntropy + softenDrift(postWaveSurgeSpike ? 1 : 0));
  }

  const nextWorldPhase = state.tick > 0 && state.tick % 40 === 0 ? (state.worldPhase + 1) % 4 : state.worldPhase;
  if (postWaveSurgeSpike) {
    nextAlert = state.postWaveSurgeTicks >= 20
      ? GRAVITAS_TEXT.threats.finalWaveSpike
      : state.postWaveSurgeTicks >= 10
        ? GRAVITAS_TEXT.threats.finalWaveDrop
        : GRAVITAS_TEXT.threats.finalWaveSettle;
  }
  const worldPulseGain =
    softenDrift(Math.floor(totalMarks / (settlingWindow ? 6 : 4)) +
    Math.floor(nextEntropy / (settlingWindow ? 28 : 20)) +
    (state.threat.aftershock > 0 ? 2 : 0) +
    (state.phase === "awakened" ? 1 : 0) +
    (nextLockdown ? 2 : 0));
  const worldPulseEase = softenDrift((isHighStability ? 2 : 0) + (nextWorldPhase === 0 ? 1 : 0) + (firstWaveRecoveryActive ? 2 : 0));
  const nextWorldPulse = recoveryCalmWindow ? state.worldPulse : clamp(state.worldPulse + worldPulseGain - worldPulseEase);

  let worldShifted = false;
  if (nextWorldPhase !== state.worldPhase) {
    worldShifted = true;
    const worldTurn = GRAVITAS_TEXT.lore.worldTurns[nextWorldPhase];
    nextJournal = pushJournal({ ...state, journal: nextJournal }, worldTurn);
    alert = GRAVITAS_TEXT.alerts.worldPatternShift;
  }
  if (worldShifted) {
    nextAlert = GRAVITAS_TEXT.alerts.worldPatternShift;
  }

  if (nextLockdown && !recoveryCalmWindow) {
    const lids = getModuleIds();
    const targetId = lids[state.tick % lids.length];
    nextModules[targetId] = {
      ...nextModules[targetId],
      integrity: clamp(nextModules[targetId].integrity - 2),
    };
  }

  const nextLockdownDuration = nextLockdown ? state.lockdownDuration + 1 : 0;
  const allModulesCrit = Object.values(nextModules).every(m => m.integrity < 10);
  const stationLost = isDemoChapter(state) && nextLockdownDuration >= 30 && allModulesCrit;

  // Phase shift safety net: if awakening happened outside this tick, keep the transition stable.
  let firstLoopComplete = state.firstLoopComplete;
  let progression = { ...state.progression };
  if (state.phase === "awakened" && !state.firstLoopShown && !state.firstLoopComplete) {
    firstLoopComplete = true;
    progression.stars += 10;
    progression.lastStarGain = 10;
  }
  
  let nextHull = state.resources.hull;
  let nextShield = state.resources.shield;
  let nextMorale = state.resources.morale;
  let nextSignalRange = state.resources.signalRange;
  let nextSupplyFlow = state.resources.supplyFlow;

  // Level-gap effects
  const levels = state.moduleLevels;
  const coreLevel = levels.core;
  const syn = state.synergies.combined;

  // Hull max = 20 base + core * 3.2 (lv1=23, lv10=52, lv25=100)
  const hullMax = Math.min(100, 20 + coreLevel * 3.2 + (syn.hullMaxBonus ?? 0));
  if (nextHull > hullMax) nextHull = Math.max(hullMax, nextHull - 0.5);

  // Shield = 15 base + warroom * 3.4 (lv1=18, lv10=49, lv25=100)
  const warLevel = levels.warroom;
  const shieldMax = Math.min(100, 15 + warLevel * 3.4 + (syn.shieldMaxBonus ?? 0));
  if (state.warRoom.online && nextShield < shieldMax) {
    const shieldRegen = 0.5 * (1 + (syn.shieldRegenBonus ?? 0));
    nextShield = Math.min(shieldMax, nextShield + shieldRegen);
  }

  // Global resource regen bonus
  if (syn.resourceRegenBonus) {
    const regen = syn.resourceRegenBonus;
    if (reactorBoost > 0) nextPower += reactorBoost * regen;
    if (sensorStability > 0) nextStability += sensorStability * regen;
  }

  // Morale = module balance
  let moralePenalty = 0;
  for (const mod of ["reactor", "logistics", "sensor", "warroom"] as const) {
    const gap = coreLevel - levels[mod as "reactor" | "logistics" | "sensor" | "warroom"];
    if (gap >= 3) moralePenalty += 15;
    else if (gap >= 2) moralePenalty += 5;
  }
  const targetMorale = Math.max(0, Math.min(100, 75 - moralePenalty));
  nextMorale = nextMorale + (targetMorale - nextMorale) * 0.1;

  // Signal Range = 15 base + sensor * 3.4 (lv1=18, lv25=100)
  nextSignalRange = Math.min(100, 15 + levels.sensor * 3.4);

  // Supply Flow = 10 base + logistics * 3.6 (lv1=14, lv25=100)
  nextSupplyFlow = Math.min(100, 10 + levels.logistics * 3.6);

  // Reactor gap penalty
  const reactorGap = coreLevel - levels.reactor;
  if (reactorGap >= 3) {
    nextPower = Math.max(0, nextPower - 1.5);
    nextStability = Math.max(0, nextStability - 1.0);
  }

  // Sensor gap penalty
  const sensorGap = coreLevel - levels.sensor;
  if (sensorGap >= 3) {
    nextEntropy = Math.min(100, nextEntropy + 0.8);
  }

  const nextState = {
    ...state,
    tick: state.tick + 1,
    phase: nextPhase,
    resources: {
      ...state.resources,
      power: nextPower,
      stability: nextStability,
      supply: nextSupply,
      activation: nextActivation,
      hull: nextHull,
      shield: nextShield,
      morale: nextMorale,
      signalRange: nextSignalRange,
      supplyFlow: nextSupplyFlow,
    },
    modules: nextModules,
    marks: {
      // fullGrid synergy: All 4 modules online & healthy → marks decay 2× faster
      // Awakened fázisban: marks decay 50%-kal gyorsabb
      // voidLens: voidEcho decay 2x faster
      reactorScar: clamp(state.marks.reactorScar + (state.modules.reactor.load >= 95 ? 1 : 0) - (state.modules.reactor.integrity >= 70 ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult) : 0)),
      shellStrain: clamp(state.marks.shellStrain + (state.modules.core.load >= 95 ? 1 : 0) - (state.phase === "boot" ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult) : 0)),
      supplyStress: clamp(state.marks.supplyStress + (state.modules.logistics.load >= 95 ? 1 : 0) - (state.modules.logistics.online ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult) : 0)),
      voidEcho: clamp(state.marks.voidEcho + (state.modules.sensor.load >= 95 ? 1 : 0) - (state.modules.core.integrity >= 80 ? Math.ceil((mods.fullGrid ? 2 : 1) * decayMult * (mods.voidLens ? 2 : 1)) : 0)),
    },
    anomalies: nextAnomalies,
    entropy: nextEntropy,
    alert: nextAlert,
    journal: nextJournal,
    avatarAwake: state.avatarAwake || nextActivation >= 100,
    crisis: isCrisis,
    highStability: isHighStability,
    lockdown: nextLockdown,
    lockdownDuration: nextLockdownDuration,
    stationLost,
    firstLoopComplete,
    pendingEvent: nextPendingEvent,
    eventQuietTicks: nextQuietTicks,
    worldPulse: nextWorldPulse,
    worldPhase: nextWorldPhase,
    lowEntropyStreak: nextEntropy < 10 ? state.lowEntropyStreak + 1 : 0,
    highStabilityStreak: nextStability > 90 ? state.highStabilityStreak + 1 : 0,
    wasCrisis: state.crisis,
    progression,
    reactorRecovery:
      firstWaveRecoveryActive && state.tick + 1 >= state.reactorRecovery.nextPromptTick
        ? {
            ...state.reactorRecovery,
            active: false,
          }
        : state.reactorRecovery,
    postWaveSurgeTicks: postWaveSurgeActive ? Math.max(0, state.postWaveSurgeTicks - 1) : 0,
    postWaveSurgeMode: postWaveSurgeActive ? state.postWaveSurgeMode : null,
    waveRecoveryCalmTicks: nextRecoveryCalmTicks,
    activeOperation:
      state.activeOperation
        ? {
          ...state.activeOperation,
          remaining: Math.max(0, state.activeOperation.remaining - 1),
        }
        : null,
  };

  const calmLockedState = recoveryCalmWindow
    ? {
        ...nextState,
        resources: {
          ...nextState.resources,
          power: Math.max(nextState.resources.power, state.resources.power),
          stability: Math.max(nextState.resources.stability, state.resources.stability),
          supply: Math.max(nextState.resources.supply, state.resources.supply),
          activation: Math.max(nextState.resources.activation, state.resources.activation),
        },
        entropy: Math.min(nextState.entropy, state.entropy),
      }
    : !isDemoChapter(state)
      ? {
          ...nextState,
          resources: {
            ...nextState.resources,
            power: Math.max(nextState.resources.power, state.resources.power),
            stability: Math.max(nextState.resources.stability, state.resources.stability),
            supply: Math.max(nextState.resources.supply, state.resources.supply),
            activation: Math.max(nextState.resources.activation, state.resources.activation),
          },
          entropy: Math.min(nextState.entropy, state.entropy),
        }
      : nextState;

  const withOperation =
    calmLockedState.activeOperation && calmLockedState.activeOperation.remaining <= 0
      ? completeActiveOperation(calmLockedState)
      : calmLockedState;

  const withScavenge = advanceScavengeOperation(withOperation);

  let scriptedState = withScavenge;
  if (
    !scriptedState.avatarAwake &&
    scriptedState.avatarPrepArmedTick !== null &&
    scriptedState.tick >= scriptedState.avatarPrepArmedTick &&
    !scriptedState.pendingEvent &&
    !scriptedState.repairChallenge.active
  ) {
    const pendingEvent = createAvatarPreparationEvent(1);
    scriptedState = {
      ...withScavenge,
      pendingEvent,
      alert: pendingEvent.title,
      avatarPrepArmedTick: null,
    };
  }

  const withResonance = coolDownResonance(scriptedState);

  // Threat cycle
  const threatResult = advanceStarholdThreat(withResonance);

  // Events - skipped if threat just impacted or during aftershock
  if (
    threatResult.impacted ||
    threatResult.nextState.threat.aftershock > 0 ||
    threatResult.nextState.eventQuietTicks > 0 ||
    threatResult.nextState.resources.stability < 20 ||
    threatResult.nextState.activeOperation ||
    worldShifted ||
    recoveryCalmWindow
  ) {
    return stabilizeContinuationTick(
      state,
      checkStarholdMilestones(
        tickOfficers(
          tickCommanderProfile(
            tickDilemmaSpawn(
              tickDilemmaEffects(
                tickGalaxyCycle(
                  tickFactionReputation(
                    tickBattle(
                      tickTradeSystem(
                        tickSupplyRoutes(
                          tickWeeklyMission(
                            tickEspionage(
                              tickResearch(
                                tickCodex(
                                  tickUpgrades(
                                    tickRepairBay(
                                      applyStarholdEvents(
                                        tickWarroomProduction({
                                          ...threatResult.nextState,
                                          waveRecoveryCalmTicks: nextRecoveryCalmTicks,
                                        }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  return stabilizeContinuationTick(
    state,
    checkStarholdMilestones(
      tickExpeditions(
        tickFactionWars(
          tickOfficers(
            tickCommanderProfile(
              tickDilemmaSpawn(
                tickDilemmaEffects(
                  tickGalaxyCycle(
                    tickFactionReputation(
                      tickWorldLevel(
                        tickBattle(
                          tickTradeSystem(
                            tickSupplyRoutes(
                              tickWeeklyMission(
                                tickEspionage(
                                  tickResearch(
                                    tickCodex(
                                      tickUpgrades(
                                        tickRepairBay(
                                          applyStarholdEvents(
                                            tickWarroomProduction({
                                              ...threatResult.nextState,
                                              waveRecoveryCalmTicks: nextRecoveryCalmTicks,
                                            })
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
