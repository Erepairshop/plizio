import type { FactionId } from "../faction/types";

export interface FactionWar {
  id: string;
  attackerId: FactionId;
  defenderId: FactionId;
  startedAtTick: number;
  endsAtTick: number;
  intensity: number;
}

export interface FactionWarState {
  activeWars: FactionWar[];
  lastWarSpawnAtTick: number;
}