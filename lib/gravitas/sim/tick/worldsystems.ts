import type { StarholdState } from "../types";
import { pushNotification } from "../notifications/engine";
import { nextRandom } from "../rng";

const WORLD_ECHO_INTERVAL = 14400; // ticks (~4 hours at 1 tick/sec)
const ANOMALY_INSTABILITY_COOLDOWN = 3600; // ticks (~1 hour)

/** Cyclic lore messages for World Echo notifications */
const WORLD_ECHO_MESSAGES: Array<{ en: string; hu: string; de: string; ro: string }> = [
  {
    en: "A deep resonance pulse was detected across the quadrant — origin unknown.",
    hu: "Mély rezonanciaimpulzust észleltek az egész kvadránsban — az eredet ismeretlen.",
    de: "Ein tiefer Resonanzpuls wurde im gesamten Quadranten detektiert — Ursprung unbekannt.",
    ro: "Un puls de rezonanță profundă a fost detectat în tot cadranul — origine necunoscută.",
  },
  {
    en: "Ancient signal patterns echo through subspace. The void remembers.",
    hu: "Ősi jelminták visszhangoznak az alértéren. Az üresség emlékezik.",
    de: "Alte Signalmuster hallen durch den Unterraum. Die Leere erinnert sich.",
    ro: "Tiparele vechi de semnale răsună prin subspațiu. Vidul își amintește.",
  },
  {
    en: "Gravitational anomaly detected in sector 7. No immediate threat identified.",
    hu: "Gravitációs anomáliát észleltek a 7-es szektorban. Azonnali veszély nem azonosítható.",
    de: "Gravitationsanomalie in Sektor 7 detektiert. Keine unmittelbare Bedrohung identifiziert.",
    ro: "Anomalie gravitațională detectată în sectorul 7. Nicio amenințare imediată identificată.",
  },
  {
    en: "The galactic current shifts. Navigation charts require recalibration.",
    hu: "A galaktikus áramlat eltolódik. A navigációs térképek újrakalibrálást igényelnek.",
    de: "Die galaktische Strömung verschiebt sich. Navigationskarten erfordern Neukalibrierung.",
    ro: "Curentul galactic se schimbă. Hărțile de navigație necesită recalibrare.",
  },
  {
    en: "Long-range sensors picked up faint transmissions from the outer reaches.",
    hu: "A hosszú hatótávolságú szenzorgyenge adásokat fogtak a külső területekről.",
    de: "Langstreckensensoren empfingen schwache Übertragungen aus den Außenbereichen.",
    ro: "Senzorii cu rază lungă au captat transmisii slabe din zonele exterioare.",
  },
  {
    en: "A stellar convergence event has been logged. Rare materials may surface nearby.",
    hu: "Csillagkonvergencia-esemény naplózva. Ritka anyagok bukkanhatnak fel a közelben.",
    de: "Ein stellares Konvergenzereignis wurde protokolliert. Seltene Materialien können in der Nähe auftauchen.",
    ro: "Un eveniment de convergență stelară a fost înregistrat. Materiale rare pot apărea în apropiere.",
  },
];

let worldEchoIndex = 0;

export function tickWorldEcho(state: StarholdState): StarholdState {
  if (state.tick === 0 || state.tick % WORLD_ECHO_INTERVAL !== 0) return state;

  const msg = WORLD_ECHO_MESSAGES[worldEchoIndex % WORLD_ECHO_MESSAGES.length];
  worldEchoIndex++;

  const title: import("../types").LocalizedString = {
    en: "Galactic Echo",
    hu: "Galaktikus Visszhang",
    de: "Galaktisches Echo",
    ro: "Ecou Galactic",
  };

  return pushNotification(state, "system", title, msg, "Radio");
}

/** Advance instability on anomaly-type galaxy nodes. High instability triggers a station anomaly. */
export function tickGalaxyAnomalyNodes(state: StarholdState): StarholdState {
  const galaxy = state.galaxy;
  if (!galaxy || !galaxy.transientNodes) return state;

  const anomalyNodes = galaxy.transientNodes.filter((n) => n.type === "anomaly");
  if (anomalyNodes.length === 0) return state;

  let rng = state.globalRngState;
  let nextState = state;
  let triggered = false;

  const updatedNodes = galaxy.transientNodes.map((node) => {
    if (node.type !== "anomaly") return node;

    const cooldownOk = state.tick - (node.cooldownUntil ?? 0) >= 0;
    if (!cooldownOk) return node;

    const { value: roll, nextState: rng1 } = nextRandom(rng);
    rng = rng1;

    // Instability drifts up slightly each eval cycle (~every 3600 ticks)
    if (state.tick % ANOMALY_INSTABILITY_COOLDOWN !== 0) return node;

    const instabilityDelta = roll > 0.5 ? Math.ceil(roll * 8) : -Math.ceil((1 - roll) * 4);
    const nextInstability = Math.max(0, Math.min(100, (node.instability ?? 0) + instabilityDelta));

    if (nextInstability >= 80 && !triggered) {
      triggered = true;
      // Push warning notification
      const title: import("../types").LocalizedString = {
        en: "Anomaly Node Critical",
        hu: "Anomália Csomópont Kritikus",
        de: "Anomalieknoten Kritisch",
        ro: "Nod de Anomalie Critic",
      };
      const msg: import("../types").LocalizedString = {
        en: "A galactic anomaly node has reached critical instability. Nearby operations may be disrupted.",
        hu: "Egy galaktikus anomália-csomópont elérte a kritikus instabilitást. A közeli műveletek zavarhatók.",
        de: "Ein galaktischer Anomalieknoten hat kritische Instabilität erreicht. Nahe Operationen können gestört sein.",
        ro: "Un nod de anomalie galactică a atins instabilitatea critică. Operațiunile din apropiere pot fi perturbate.",
      };
      nextState = pushNotification(
        { ...nextState, globalRngState: rng },
        "system",
        title,
        msg,
        "AlertTriangle"
      );
      rng = nextState.globalRngState;
    }

    return {
      ...node,
      instability: nextInstability,
      cooldownUntil: nextInstability >= 80 ? state.tick + ANOMALY_INSTABILITY_COOLDOWN : node.cooldownUntil,
    };
  });

  return {
    ...nextState,
    globalRngState: rng,
    galaxy: {
      ...galaxy,
      transientNodes: updatedNodes,
    },
  };
}
