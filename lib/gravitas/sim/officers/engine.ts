import type { StarholdState, LocalizedString } from "../types";
import type { OfficerState, Officer, OfficerTraitId } from "./types";
import { OFFICER_CONFIG } from "../../economy";
import { GALAXY_FACTIONS } from "../battle/factions";
import type { FactionId } from "../faction/types";
import { pushJournal } from "../shared";

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

function generateRecruit(): Officer {
  const factions = Object.keys(GALAXY_FACTIONS) as FactionId[];
  const factionId = factions[Math.floor(Math.random() * factions.length)];
  const nameList = NAMES[factionId] || ["Unknown"];
  const name = nameList[Math.floor(Math.random() * nameList.length)] + " " + Math.floor(Math.random() * 100);
  const trait = TRAIT_IDS[Math.floor(Math.random() * TRAIT_IDS.length)];
  
  return {
    id: `officer_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name,
    factionId,
    portrait: factionId,
    level: 1,
    xp: 0,
    trait,
    status: "ready",
    availableAt: 0,
  };
}

export function createInitialOfficerState(): OfficerState {
  const recruits = [];
  for (let i = 0; i < OFFICER_CONFIG.recruitPoolSize; i++) {
    recruits.push(generateRecruit());
  }
  return {
    active: [],
    recruits,
    lastRecruitRefresh: Date.now(),
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
  if (state.tick % 60 !== 0) return state;

  const now = Date.now();
  let mutated = false;
  
  let nextOfficers = { ...state.officers };

  // Refresh recruits
  if (now - state.officers.lastRecruitRefresh > OFFICER_CONFIG.recruitRefreshMs) {
    const recruits = [];
    for (let i = 0; i < OFFICER_CONFIG.recruitPoolSize; i++) {
      recruits.push(generateRecruit());
    }
    nextOfficers.recruits = recruits;
    nextOfficers.lastRecruitRefresh = now;
    mutated = true;
  }

  // Heal wounded
  const nextActive = nextOfficers.active.map(o => {
    if (o.status === "wounded" && now >= o.availableAt) {
      mutated = true;
      return { ...o, status: "ready" as const, availableAt: 0 };
    }
    return o;
  });

  if (mutated) {
    nextOfficers.active = nextActive;
    return { ...state, officers: nextOfficers };
  }

  return state;
}