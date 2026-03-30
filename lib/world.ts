export interface WorldZone {
  id: string;
  name: string;
  emoji: string;
  games: string[];
  color: string;
  glow: string;
}

export interface WorldProgress {
  completedZones: string[];
}

export const WORLD_ZONES: WorldZone[] = [
  { id: "mountain", name: "Hegyvidék", emoji: "🏔️", games: ["numberpath", "pathbuilder", "topicsort", "pipeflow", "deductiongrid", "timeecho", "minisudoku"], color: "#64748b", glow: "rgba(100,116,139,0.4)" },
  { id: "ocean",    name: "Óceán",     emoji: "🌊", games: ["memoryflash", "spotdiff"],   color: "#0ea5e9", glow: "rgba(14,165,233,0.4)" },
  { id: "city",     name: "Város",     emoji: "🏙️", games: ["reflexrush", "quickpick"],   color: "#a855f7", glow: "rgba(168,85,247,0.4)" },
  { id: "forest",   name: "Erdő",      emoji: "🌲", games: ["kodex", "wordscramble"],     color: "#22c55e", glow: "rgba(34,197,94,0.4)"  },
  { id: "desert",   name: "Sivatag",   emoji: "🏜️", games: ["mathtest", "numberrush"],    color: "#f59e0b", glow: "rgba(245,158,11,0.4)" },
  { id: "volcano",  name: "Vulkán",    emoji: "🌋", games: ["patternforge"],               color: "#ef4444", glow: "rgba(239,68,68,0.4)"  },
];

const SAVE_KEY = "plizio_world_progress";

export function getWorldProgress(): WorldProgress {
  if (typeof window === "undefined") return { completedZones: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : { completedZones: [] };
  } catch {
    return { completedZones: [] };
  }
}

export function completeZone(zoneId: string): void {
  const p = getWorldProgress();
  if (!p.completedZones.includes(zoneId)) {
    p.completedZones.push(zoneId);
    localStorage.setItem(SAVE_KEY, JSON.stringify(p));
  }
}

/** Egy zona akkor elerheto, ha az elotte levo teljesitve van (vagy az elso) */
export function isZoneUnlocked(zoneIndex: number, completedZones: string[]): boolean {
  if (zoneIndex === 0) return true;
  return completedZones.includes(WORLD_ZONES[zoneIndex - 1].id);
}
