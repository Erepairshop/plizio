import type { FactionId } from "../faction/types";

export type NpcStationStatus = "active" | "disrupted" | "closed" | "contested";

export interface NpcStation {
  factionId: FactionId;
  status: NpcStationStatus;
  lastChangedTick: number;
  /** Trade price modifier when active: < 1 = bonus, > 1 = penalty */
  tradeMod: number;
}

export interface NpcStationsState {
  stations: NpcStation[];
  lastRotationTick: number;
}
