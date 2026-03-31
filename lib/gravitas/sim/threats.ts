import type { StarholdState, StarholdThreatType, LocalizedString } from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";

export function advanceStarholdThreat(state: StarholdState): { nextState: StarholdState; impacted: boolean } {
  if (state.pendingEvent) {
    return { nextState: state, impacted: false };
  }

  const { threat } = state;

  // Handle lingering aftershock
  if (threat.aftershock > 0) {
    const nextAftershock = threat.aftershock - 1;
    const nextThreat = { ...threat, aftershock: nextAftershock };
    const entropyGain = nextAftershock > 0 ? 2 : 0;
    const stabilityLoss = nextAftershock > 0 ? 3 : 0;
    const alert = nextAftershock === 0 ? GRAVITAS_TEXT.threats.aftershockCleared : state.alert;

    return {
      nextState: {
        ...state,
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability - stabilityLoss),
        },
        entropy: clamp(state.entropy + entropyGain),
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

  let nextPower = resources.power;
  let nextStability = resources.stability;
  let nextMaterials = resources.materials;
  let nextModules = { ...modules };
  let nextMarks = { ...marks };
  let nextAnomalies = [...state.anomalies];
  let impactJournal: LocalizedString;
  let aftershockDuration = 0;

  const intensityFactor = 1 + (threat.intensity * 0.2);
  const predictionBonus = threat.predicted ? 0.25 : 0; // Increased from 0.2

  switch (threat.type) {
    case "distortionWave": {
      const baseDmg = 22 * intensityFactor;
      const reduction = (threat.fortified ? 0.75 : 0) + predictionBonus;
      const finalDmg = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));

      nextStability = clamp(nextStability - finalDmg);
      nextMarks.shellStrain = clamp(nextMarks.shellStrain + (threat.fortified ? 1 : 4));

      if (!threat.fortified) {
        aftershockDuration = 4;
        if (Math.random() > 0.6) {
          nextAnomalies.push({
            id: "coreTremor",
            name: { en: "Core Tremor", hu: "Mag-remegés", de: "Kernbeben", ro: "Tremur nucleu" },
            severity: 3
          });
        }
      }
      impactJournal = T.distortionWaveImpact;
      break;
    }
    case "voidStorm": {
      const baseDmg = 18 * intensityFactor;
      const reduction = (threat.dampened ? 0.7 : 0) + predictionBonus;
      const finalDmg = Math.floor(baseDmg * (1 - Math.min(0.9, reduction)));

      nextPower = clamp(nextPower - finalDmg);
      nextMarks.voidEcho = clamp(nextMarks.voidEcho + (threat.dampened ? 1 : 5));

      if (!threat.dampened) {
        aftershockDuration = 3;
        nextStability = clamp(nextStability - 8);
        if (Math.random() > 0.4) {
          nextAnomalies.push({
            id: "voidLeak",
            name: { en: "Void Leak", hu: "Void szivárgás", de: "Void-Leck", ro: "Scurgere Void" },
            severity: 4
          });
        }
      }
      impactJournal = T.voidStormImpact;
      break;
    }
    case "meteorShower": {
      const baseDmg = 14 * intensityFactor;
      const reduction = (threat.intercepted ? 0.85 : 0) + predictionBonus;

      if (reduction >= 0.85) {
        // Intercepted or heavily predicted
        nextMaterials = clamp(nextMaterials - (threat.intercepted ? 10 : 5));
        nextModules.logistics = {
          ...nextModules.logistics,
          integrity: clamp(nextModules.logistics.integrity - 12),
        };
        impactJournal = {
          en: "Meteors intercepted. Shield drones took the brunt of the impact.",
          hu: "Meteorok elfogva. A védődrónok nyelték el a becsapódás erejét.",
          de: "Meteore abgefangen. Schilddrohnen fingen den Einschlag ab.",
          ro: "Metoriți interceptați. Dronele de scut au preluat forța impactului."
        };
      } else {
        // Full impact on all modules
        const ids = (Object.keys(modules) as Array<keyof typeof modules>);
        ids.forEach(id => {
          const dmg = Math.floor(baseDmg * (0.9 + Math.random() * 0.5) * (1 - reduction));
          nextModules[id] = {
            ...nextModules[id],
            integrity: clamp(nextModules[id].integrity - dmg),
          };
        });
        nextMarks.shellStrain = clamp(nextMarks.shellStrain + 3);
        impactJournal = T.meteorShowerImpact;
        aftershockDuration = 2;
      }
      break;
    }
  }

  // Generate next threat
  const threatTypes: StarholdThreatType[] = ["distortionWave", "voidStorm", "meteorShower"];
  const nextType = threatTypes[Math.floor(Math.random() * threatTypes.length)];
  const nextDuration = 18 + Math.floor(Math.random() * 12);

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
      stars: state.progression.stars + 1,
    },
    alert: impactJournal,
    journal: pushJournal(state, impactJournal),
  };
}
