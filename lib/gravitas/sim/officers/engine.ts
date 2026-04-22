import type { StarholdState, LocalizedString } from "../types";
import type { OfficerState, Officer, OfficerTraitId } from "./types";
import { OFFICER_CONFIG } from "../../economy";
import { GALAXY_FACTIONS } from "../battle/factions";
import type { FactionId } from "../faction/types";
import { pushJournal } from "../shared";
import { nextRandom, randomInt } from "../rng";

const TRAIT_IDS: OfficerTraitId[] = ["tactician", "brute", "defender", "scavenger", "inspirer"];

const NAMES = {
  korgath: ["Gruk", "Vorlag", "Krull", "Draka", "Thokk"],
  velari: ["Sylas", "Vael", "Eris", "Nyx", "Lyr"],
  drex: ["Jax", "Rolt", "Zik", "Brog", "Mox"],
  synthoid: ["Unit-7", "Alpha-9", "Zeta-Prime", "Nexus-Core", "Echo-3"],
  noma: ["Aethel", "Omen", "Rune", "Cipher", "Enigma"],
};

export const OFFICER_TRAITS: Record<OfficerTraitId, { name: LocalizedString, description: LocalizedString }> = {
  tactician: {
    name: { en: "Tactician", hu: "Taktikus", de: "Taktiker", ro: "Tactician" },
    description: { en: "+15% Tactics", hu: "+15% Taktika", de: "+15% Taktik", ro: "+15% Tactici" },
  },
  brute: {
    name: { en: "Brute", hu: "Kíméletlen", de: "Grobian", ro: "Brută" },
    description: { en: "+15% Firepower", hu: "+15% Tűzerő", de: "+15% Feuerkraft", ro: "+15% Putere de foc" },
  },
  defender: {
    name: { en: "Defender", hu: "Védelmező", de: "Verteidiger", ro: "Apărător" },
    description: { en: "+15% Barrier", hu: "+15% Pajzs", de: "+15% Barriere", ro: "+15% Barieră" },
  },
  scavenger: {
    name: { en: "Scavenger", hu: "Gyűjtögető", de: "Plünderer", ro: "Căutător" },
    description: { en: "+25% Loot", hu: "+25% Zsákmány", de: "+25% Beute", ro: "+25% Pradă" },
  },
  inspirer: {
    name: { en: "Inspirer", hu: "Inspiráló", de: "Inspirierend", ro: "Inspirator" },
    description: { en: "+20% Inspiration", hu: "+20% Inspiráció", de: "+20% Inspiration", ro: "+20% Inspirație" },
  },
};

export function generateRecruit(rngState: number, tick: number): { officer: Officer, nextState: number } {
  const factions = Object.keys(GALAXY_FACTIONS) as FactionId[];
  
  const { value: rFacIdx, nextState: s1 } = randomInt(rngState, 0, factions.length - 1);
  const factionId = factions[rFacIdx];
  const nameList = NAMES[factionId] || ["Unknown"];
  
  const { value: rNameIdx, nextState: s2 } = randomInt(s1, 0, nameList.length - 1);
  const { value: rNum, nextState: s3 } = randomInt(s2, 0, 99);
  const name = nameList[rNameIdx] + " " + rNum;
  
  const { value: rTraitIdx, nextState: s4 } = randomInt(s3, 0, TRAIT_IDS.length - 1);
  const trait = TRAIT_IDS[rTraitIdx];
  
  const { value: rId, nextState: s5 } = randomInt(s4, 0, 999);
  
  const officer: Officer = {
    id: `officer_${tick}_${rId}`,
    name,
    factionId,
    portrait: factionId,
    level: 1,
    xp: 0,
    trait,
    status: "ready",
    availableAtTick: 0,
  };

  return { officer, nextState: s5 };
}

export function createInitialOfficerState(rngState?: number, currentTick: number = 0): { officerState: OfficerState, nextRngState: number } {
  const recruits = [];
  let currentRngState = rngState ?? 0;
  for (let i = 0; i < OFFICER_CONFIG.recruitPoolSize; i++) {
    const { officer, nextState } = generateRecruit(currentRngState, currentTick);
    recruits.push(officer);
    currentRngState = nextState;
  }
  return {
    officerState: {
      active: [],
      recruits,
      lastRecruitRefreshTick: currentTick,
    },
    nextRngState: currentRngState
  };
}

export function recruitOfficer(state: StarholdState, officerId: string): StarholdState {
  if (state.officers.active.length >= OFFICER_CONFIG.maxActiveOfficers) return state;
  if (state.resources.supply < OFFICER_CONFIG.baseRecruitCost) return state;
  
  const recruitIndex = state.officers.recruits.findIndex(o => o.id === officerId);
  if (recruitIndex === -1) return state;
  
  const officer = state.officers.recruits[recruitIndex];
  const newRecruits = [...state.officers.recruits];
  newRecruits.splice(recruitIndex, 1);
  
  return {
    ...state,
    resources: {
      ...state.resources,
      supply: state.resources.supply - OFFICER_CONFIG.baseRecruitCost,
    },
    officers: {
      ...state.officers,
      active: [...state.officers.active, officer],
      recruits: newRecruits,
    }
  };
}

export function dismissOfficer(state: StarholdState, officerId: string): StarholdState {
  const officerIndex = state.officers.active.findIndex(o => o.id === officerId);
  if (officerIndex === -1) return state;
  
  const newActive = [...state.officers.active];
  newActive.splice(officerIndex, 1);
  
  return {
    ...state,
    officers: {
      ...state.officers,
      active: newActive,
    }
  };
}

export function tickOfficers(state: StarholdState): StarholdState {
  // Only check every 10 ticks for performance
  if (state.tick % 10 !== 0) return state;

  let mutated = false;
  let currentRngState = state.globalRngState;
  
  let nextOfficers = { ...state.officers };

  // Refresh recruits (convert MS to ticks: 1000ms = 1 tick)
  const refreshTicks = Math.floor(OFFICER_CONFIG.recruitRefreshMs / 1000);
  if (state.tick - state.officers.lastRecruitRefreshTick > refreshTicks) {
    const recruits = [];
    for (let i = 0; i < OFFICER_CONFIG.recruitPoolSize; i++) {
      const { officer, nextState: s } = generateRecruit(currentRngState, state.tick);
      recruits.push(officer);
      currentRngState = s;
    }
    nextOfficers.recruits = recruits;
    nextOfficers.lastRecruitRefreshTick = state.tick;
    mutated = true;
  }

  // Heal wounded
  const nextActive = nextOfficers.active.map(o => {
    if (o.status === "wounded" && state.tick >= o.availableAtTick) {
      mutated = true;
      return { ...o, status: "ready" as const, availableAtTick: 0 };
    }
    return o;
  });

  if (mutated) {
    nextOfficers.active = nextActive;
    return { ...state, globalRngState: currentRngState, officers: nextOfficers };
  }

  return { ...state, globalRngState: currentRngState };
}