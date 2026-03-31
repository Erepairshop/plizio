import type { StarholdState, StarholdThreatType, LocalizedString, StarholdModuleId } from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { getStarholdModifiers } from "./modifiers";

export function advanceStarholdThreat(state: StarholdState): { nextState: StarholdState; impacted: boolean } {
  if (state.pendingEvent) {
    return { nextState: state, impacted: false };
  }

  const { threat } = state;

  // Handle lingering aftershock
  if (threat.aftershock > 0) {
    const nextAftershock = threat.aftershock - 1;
    const nextThreat = { ...threat, aftershock: nextAftershock };

    // Aftershock effects scale with threat intensity and type
    let entropyGain = 0;
    let stabilityLoss = 0;
    let powerDrain = 0;
    let nextModules = { ...state.modules };

    switch (threat.type) {
      case "distortionWave":
        stabilityLoss = Math.ceil(threat.intensity * 2);
        entropyGain = 1;
        break;
      case "voidStorm":
        powerDrain = Math.ceil(threat.intensity * 1.5);
        entropyGain = Math.ceil(threat.intensity / 2);
        break;
      case "meteorShower":
        stabilityLoss = Math.ceil(threat.intensity);
        // Lingering integrity decay for a random module during shower aftershock
        const ids: StarholdModuleId[] = ["reactor", "logistics", "core", "sensor"];
        const targetId = ids[state.tick % 4];
        nextModules[targetId] = {
          ...nextModules[targetId],
          integrity: clamp(nextModules[targetId].integrity - 1),
        };
        break;
    }

    const alert = nextAftershock === 0 ? GRAVITAS_TEXT.threats.aftershockCleared : state.alert;

    return {
      nextState: {
        ...state,
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability - (nextAftershock > 0 ? stabilityLoss : 0)),
          power: clamp(state.resources.power - (nextAftershock > 0 ? powerDrain : 0)),
        },
        modules: nextModules,
        entropy: clamp(state.entropy + (nextAftershock > 0 ? entropyGain : 0)),
        threat: nextThreat,
        alert,
      },
      impacted: false,
    };
  }

  if (threat.countdown > 1) {
    return {
      nextState: {
        ...state,
        threat: {
          ...threat,
          countdown: threat.countdown - 1,
        },
      },
      impacted: false,
    };
  }

  // Threat impacts!
  return {
    nextState: resolveThreatImpact(state),
    impacted: true,
  };
}

function resolveThreatImpact(state: StarholdState): StarholdState {
  const { threat, modules, resources, marks } = state;
  const T = GRAVITAS_TEXT.threats;
  const mods = getStarholdModifiers(state);

  let nextPower = resources.power;
  let nextStability = resources.stability;
  let nextMaterials = resources.materials;
  let nextModules = { ...modules };
  let nextMarks = { ...marks };
  let nextAnomalies = [...state.anomalies];
  let impactJournal: LocalizedString;
  let aftershockDuration = 0;

  const intensityFactor = 1 + (threat.intensity * 0.3);
  const predictionBonus = threat.predicted ? 0.35 : 0;

  switch (threat.type) {
    case "distortionWave": {
      const baseDmg = 28 * intensityFactor;
      const reduction = (threat.fortified ? 0.75 : 0) + predictionBonus;
      const finalDmg = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));

      nextStability = clamp(nextStability - finalDmg);
      nextMarks.shellStrain = clamp(nextMarks.shellStrain + Math.max(0, (threat.fortified ? 1 : 5) - mods.shellStrainReduction));

      if (!threat.fortified) {
        aftershockDuration = 6;
        if (Math.random() > 0.5) {
          nextAnomalies.push({
            id: "coreTremor",
            name: { en: "Core Tremor", hu: "Mag-remegés", de: "Kernbeben", ro: "Tremur nucleu" },
            severity: Math.ceil(threat.intensity / 2) + 2
          });
        }
      }
      impactJournal = T.distortionWaveImpact;
      break;
    }
    case "voidStorm": {
      const baseDmg = 22 * intensityFactor;
      const reduction = (threat.dampened ? 0.7 : 0) + predictionBonus;
      const finalDmg = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));

      nextPower = clamp(nextPower - finalDmg);
      nextMarks.voidEcho = clamp(nextMarks.voidEcho + (threat.dampened ? 1 : 6));

      if (!threat.dampened) {
        aftershockDuration = 5;
        nextStability = clamp(nextStability - 12);
        if (Math.random() > 0.3) {
          nextAnomalies.push({
            id: "voidLeak",
            name: { en: "Void Leak", hu: "Void szivárgás", de: "Void-Leck", ro: "Scurgere Void" },
            severity: Math.ceil(threat.intensity / 2) + 3
          });
        }
      }
      impactJournal = T.voidStormImpact;
      break;
    }
    case "meteorShower": {
      const baseDmg = 18 * intensityFactor;
      const reduction = (threat.intercepted ? 0.85 : 0) + predictionBonus;

      if (reduction >= 0.85) {
        const matCost = threat.intercepted ? 15 : 8;
        nextMaterials = clamp(nextMaterials - matCost);
        nextModules.logistics = {
          ...nextModules.logistics,
          integrity: clamp(nextModules.logistics.integrity - 18),
        };
        impactJournal = {
          en: "Meteors intercepted. Defensive perimeter held but suffered attrition.",
          hu: "Meteorok elfogva. A védelmi vonal kitartott, de veszteségeket szenvedett.",
          de: "Meteore abgefangen. Verteidigung hielt stand, erlitt aber Verluste.",
          ro: "Metoriți interceptați. Perimetrul defensiv a rezistat, dar a suferit pierderi."
        };
      } else {
        const ids = (Object.keys(modules) as Array<keyof typeof modules>);
        ids.forEach(id => {
          const dmg = Math.floor(baseDmg * (1.1 + Math.random() * 0.6) * (1 - reduction));
          nextModules[id] = {
            ...nextModules[id],
            integrity: clamp(nextModules[id].integrity - dmg),
          };
        });
        nextMarks.shellStrain = clamp(nextMarks.shellStrain + Math.max(0, 5 - mods.shellStrainReduction));
        impactJournal = T.meteorShowerImpact;
        aftershockDuration = 4;
      }
      break;
    }
  }

  const nextType = (["distortionWave", "voidStorm", "meteorShower"] as StarholdThreatType[])[Math.floor(Math.random() * 3)];
  const nextDuration = 22 + Math.floor(Math.random() * 15);
  const starReward = Math.ceil(threat.intensity / 2);

  return {
    ...state,
    resources: {
      ...resources,
      power: nextPower,
      stability: nextStability,
      materials: nextMaterials,
    },
    modules: nextModules,
    marks: nextMarks,
    anomalies: nextAnomalies,
    threat: {
      type: nextType,
      countdown: nextDuration,
      totalDuration: nextDuration,
      intensity: Math.min(10, threat.intensity + 1),
      fortified: false,
      dampened: false,
      intercepted: false,
      predicted: false,
      aftershock: aftershockDuration,
    },
    progression: {
      ...state.progression,
      stars: state.progression.stars + starReward,
      lastStarGain: starReward,
    },
    alert: impactJournal,
    journal: pushJournal(state, impactJournal),
  };
}
