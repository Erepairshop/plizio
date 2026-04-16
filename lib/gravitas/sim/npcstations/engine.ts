import type { StarholdState } from "../types";
import type { NpcStationsState, NpcStation, NpcStationStatus } from "./types";
import type { FactionId } from "../faction/types";
import { nextRandom } from "../rng";
import { pushNotification } from "../notifications/engine";

const ROTATION_INTERVAL = 1800; // ticks between station rotations

const FACTION_IDS: FactionId[] = ["korgath", "velari", "drex", "synthoid", "noma"];

const STATION_STATUS_SEQUENCE: NpcStationStatus[] = ["active", "contested", "disrupted", "active", "closed", "active"];

const TRADE_MODS: Record<NpcStationStatus, number> = {
  active: 1.0,
  contested: 1.15,
  disrupted: 1.35,
  closed: 0, // no trade possible
};

export function createInitialNpcStationsState(): NpcStationsState {
  return {
    stations: FACTION_IDS.map((factionId) => ({
      factionId,
      status: "active" as NpcStationStatus,
      lastChangedTick: 0,
      tradeMod: 1.0,
    })),
    lastRotationTick: 0,
  };
}

export function normalizeNpcStationsState(raw: NpcStationsState | undefined): NpcStationsState {
  if (!raw) return createInitialNpcStationsState();
  const existingIds = new Set((raw.stations ?? []).map((s) => s.factionId));
  const missingStations: NpcStation[] = FACTION_IDS
    .filter((id) => !existingIds.has(id))
    .map((factionId) => ({ factionId, status: "active" as const, lastChangedTick: 0, tradeMod: 1.0 }));
  return {
    stations: [...(raw.stations ?? []), ...missingStations],
    lastRotationTick: raw.lastRotationTick ?? 0,
  };
}

export function tickNpcStations(state: StarholdState): StarholdState {
  const npcStations = normalizeNpcStationsState(state.npcStations);

  if (state.tick - npcStations.lastRotationTick < ROTATION_INTERVAL) {
    return { ...state, npcStations };
  }

  let rng = state.globalRngState;
  const nextStations: NpcStation[] = npcStations.stations.map((station) => {
    const { value: roll, nextState: rng1 } = nextRandom(rng);
    rng = rng1;

    // 60% chance to cycle status, 40% stays
    if (roll > 0.4) {
      const { value: seqRoll, nextState: rng2 } = nextRandom(rng);
      rng = rng2;
      const seqIdx = Math.floor(seqRoll * STATION_STATUS_SEQUENCE.length);
      const nextStatus = STATION_STATUS_SEQUENCE[seqIdx];
      return {
        ...station,
        status: nextStatus,
        lastChangedTick: state.tick,
        tradeMod: TRADE_MODS[nextStatus],
      };
    }
    return station;
  });

  // Notify if any station became "closed" or recovered to "active"
  const disruptedCount = nextStations.filter((s) => s.status === "closed" || s.status === "disrupted").length;
  let nextState: StarholdState = {
    ...state,
    globalRngState: rng,
    npcStations: { stations: nextStations, lastRotationTick: state.tick },
  };

  if (disruptedCount >= 3) {
    nextState = pushNotification(
      nextState,
      "trade",
      {
        en: "NPC Station Network Disrupted",
        hu: "NPC Állomáshálózat Megzavarodott",
        de: "NPC-Stationsnetzwerk gestört",
        ro: "Rețeaua de Stații NPC Perturbată",
      },
      {
        en: `${disruptedCount} of 5 faction stations are offline or disrupted. Trade routes affected.`,
        hu: `Az 5 frakció-állomásból ${disruptedCount} offline vagy megzavarodott. Kereskedelmi útvonalak érintve.`,
        de: `${disruptedCount} von 5 Fraktionsstationen sind offline oder gestört. Handelsrouten betroffen.`,
        ro: `${disruptedCount} din 5 stații de facțiune sunt offline sau perturbate. Rutele comerciale sunt afectate.`,
      },
      "Radio"
    );
  }

  return nextState;
}
