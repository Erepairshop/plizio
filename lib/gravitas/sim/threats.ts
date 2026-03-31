import type { StarholdState, StarholdThreatType, LocalizedString } from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";

export function advanceStarholdThreat(state: StarholdState): { nextState: StarholdState; impacted: boolean } {
  if (state.pendingEvent) {
    return { nextState: state, impacted: false };
  }

  const { threat } = state;

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
  let nextModules = { ...modules };
  let nextMarks = { ...marks };
  let nextAnomalies = [...state.anomalies];
  let impactJournal: LocalizedString;

  const baseDamage = threat.intensity * 5;
  const fortifyReduction = threat.fortified ? 0.6 : 0;
  const dampenReduction = threat.dampened ? 0.4 : 0;
  const totalReduction = fortifyReduction + dampenReduction;

  const finalDamage = Math.max(2, Math.floor(baseDamage * (1 - totalReduction)));

  switch (threat.type) {
    case "distortionWave":
      nextStability = clamp(nextStability - finalDamage * 2);
      nextMarks.shellStrain = clamp(nextMarks.shellStrain + (threat.fortified ? 1 : 3));
      impactJournal = T.distortionWaveImpact;
      break;
    case "voidStorm":
      nextPower = clamp(nextPower - finalDamage * 1.5);
      nextMarks.voidEcho = clamp(nextMarks.voidEcho + (threat.dampened ? 1 : 4));
      impactJournal = T.voidStormImpact;
      if (!threat.dampened && Math.random() > 0.5) {
        nextAnomalies.push({ id: "voidLeak", name: { en: "Void Leak", hu: "Void szivárgás", de: "Void-Leck", ro: "Scurgere Void" }, severity: 2 });
      }
      break;
    case "meteorShower":
      // Damage random modules
      const ids = (Object.keys(modules) as Array<keyof typeof modules>);
      ids.forEach(id => {
        const damage = Math.floor(finalDamage * (Math.random() + 0.5));
        nextModules[id] = {
          ...nextModules[id],
          integrity: clamp(nextModules[id].integrity - damage),
        };
      });
      nextMarks.shellStrain = clamp(nextMarks.shellStrain + 2);
      impactJournal = T.meteorShowerImpact;
      break;
  }

  // Generate next threat
  const threatTypes: StarholdThreatType[] = ["distortionWave", "voidStorm", "meteorShower"];
  const nextType = threatTypes[Math.floor(Math.random() * threatTypes.length)];
  const nextDuration = 12 + Math.floor(Math.random() * 8);

  return {
    ...state,
    resources: {
      ...resources,
      power: nextPower,
      stability: nextStability,
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
    },
    alert: impactJournal,
    journal: pushJournal(state, impactJournal),
  };
}
