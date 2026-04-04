import type { FactionId } from "../faction/types";

export interface FactionWar {
  id: string;
  attackerId: FactionId;
  defenderId: FactionId;
  startedAt: number; // Date.now() timestamp
  endsAt: number; // 24 hours
  intensity: number;
}

export interface FactionWarState {
  activeWars: FactionWar[];
  lastWarSpawnAt: number; // Date.now() timestamp
}