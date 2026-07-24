import type { StarholdState, LocalizedString } from "../types";
import type {
  OfficerState,
  Officer,
  OfficerAssignment,
  OfficerMissionOutcome,
  OfficerMissionType,
  OfficerMood,
  OfficerPersonality,
  OfficerTraitId,
} from "./types";
import { OFFICER_CONFIG } from "../../economy";
import { GALAXY_FACTIONS } from "../battle/factions";
import type { FactionId } from "../faction/types";
import { randomInt } from "../rng";
import { pushNotification } from "../notifications/engine";

const TRAIT_IDS: OfficerTraitId[] = ["tactician", "brute", "defender", "scavenger", "inspirer"];
const PERSONALITIES: OfficerPersonality[] = ["loyal", "ambitious", "mercenary", "rebellious", "stoic"];
const AVATAR_ARCHETYPES = ["warlord", "diplomat", "explorer", "engineer", "shadow", "trader"];

const NAMES: Record<FactionId, string[]> = {
  korgath: ["Gruk", "Vorlag", "Krull", "Draka", "Thokk"],
  velari: ["Sylas", "Vael", "Eris", "Nyx", "Lyr"],
  drex: ["Jax", "Rolt", "Zik", "Brog", "Mox"],
  synthoid: ["Unit-7", "Alpha-9", "Zeta-Prime", "Nexus-Core", "Echo-3"],
  noma: ["Aethel", "Omen", "Rune", "Cipher", "Enigma"],
};

export const OFFICER_TRAITS: Record<OfficerTraitId, { name: LocalizedString; description: LocalizedString }> = {
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

export const OFFICER_ASSIGNMENTS: Array<{ id: OfficerAssignment; label: LocalizedString; bonus: string }> = [
  { id: "research", label: { en: "Research Officer", hu: "Kutatótiszt", de: "Forschungsoffizier", ro: "Ofițer Cercetare" }, bonus: "-15% research" },
  { id: "warroom", label: { en: "War Room Commander", hu: "Haditanács-parancsnok", de: "Kriegsraum-Kommandant", ro: "Comandant War Room" }, bonus: "+10% production" },
  { id: "scout", label: { en: "Scout Lead", hu: "Felderítővezető", de: "Spähführer", ro: "Lider Cercetaș" }, bonus: "+2 intel depth" },
  { id: "repair", label: { en: "Repair Supervisor", hu: "Javításfelügyelő", de: "Reparaturaufseher", ro: "Supervizor Reparații" }, bonus: "+20% repair" },
  { id: "trade", label: { en: "Trade Liaison", hu: "Kereskedelmi tiszt", de: "Handelsverbindung", ro: "Legătură Comercială" }, bonus: "+10% route yield" },
  { id: "anomaly", label: { en: "Anomaly Observer", hu: "Anomália-megfigyelő", de: "Anomalie-Beobachter", ro: "Observator Anomalie" }, bonus: "-25% instability" },
];

export const OFFICER_MISSIONS: Array<{
  id: OfficerMissionType;
  label: LocalizedString;
  durationTicks: number;
  risk: "low" | "medium";
}> = [
  { id: "recon", label: { en: "Recon", hu: "Felderítés", de: "Aufklärung", ro: "Recunoaștere" }, durationTicks: 600, risk: "low" },
  { id: "patrol", label: { en: "Patrol", hu: "Járőrözés", de: "Patrouille", ro: "Patrulare" }, durationTicks: 900, risk: "medium" },
  { id: "salvage", label: { en: "Salvage", hu: "Mentés", de: "Bergung", ro: "Salvare" }, durationTicks: 1200, risk: "medium" },
  { id: "negotiation", label: { en: "Negotiation", hu: "Tárgyalás", de: "Verhandlung", ro: "Negociere" }, durationTicks: 2400, risk: "low" },
  { id: "training", label: { en: "Training", hu: "Kiképzés", de: "Training", ro: "Antrenament" }, durationTicks: 3600, risk: "low" },
];

const PERSONALITY_LOYALTY: Record<OfficerPersonality, number> = {
  loyal: 80,
  ambitious: 60,
  mercenary: 50,
  rebellious: 40,
  stoic: 70,
};

const TRAIT_MISSION_BONUS: Record<OfficerTraitId, Partial<Record<OfficerMissionType, number>>> = {
  tactician: { recon: 15, patrol: 10 },
  brute: { salvage: 10, patrol: 10 },
  defender: { patrol: 15, negotiation: 5 },
  scavenger: { salvage: 20, recon: 5 },
  inspirer: { negotiation: 15, training: 10 },
};

function moodFromLoyalty(loyalty: number): OfficerMood {
  if (loyalty >= 80) return "elated";
  if (loyalty >= 60) return "content";
  if (loyalty >= 40) return "neutral";
  if (loyalty >= 20) return "tense";
  return "resentful";
}

function clampLoyalty(value: number): number {
  return Math.max(0, Math.min(100, value));
}

export function generateRecruit(rngState: number, tick: number): { officer: Officer; nextState: number } {
  const factions = Object.keys(GALAXY_FACTIONS) as FactionId[];
  const { value: factionIndex, nextState: s1 } = randomInt(rngState, 0, factions.length - 1);
  const factionId = factions[factionIndex];
  const { value: nameIndex, nextState: s2 } = randomInt(s1, 0, NAMES[factionId].length - 1);
  const { value: suffix, nextState: s3 } = randomInt(s2, 0, 99);
  const { value: traitIndex, nextState: s4 } = randomInt(s3, 0, TRAIT_IDS.length - 1);
  const { value: personalityIndex, nextState: s5 } = randomInt(s4, 0, PERSONALITIES.length - 1);
  const { value: affinityIndex, nextState: s6 } = randomInt(s5, 0, AVATAR_ARCHETYPES.length - 1);
  const { value: idSuffix, nextState: s7 } = randomInt(s6, 0, 999);
  const personality = PERSONALITIES[personalityIndex];
  const loyalty = PERSONALITY_LOYALTY[personality];

  return {
    officer: {
      id: `officer_${tick}_${idSuffix}`,
      name: `${NAMES[factionId][nameIndex]} ${suffix}`,
      factionId,
      portrait: factionId,
      level: 1,
      xp: 0,
      trait: TRAIT_IDS[traitIndex],
      status: "ready",
      availableAtTick: 0,
      personality,
      loyalty,
      mood: moodFromLoyalty(loyalty),
      avatarAffinity: [AVATAR_ARCHETYPES[affinityIndex]],
      assignment: null,
      missionStatus: "idle",
      recentReports: [],
    },
    nextState: s7,
  };
}

export function createInitialOfficerState(
  rngState = 1,
  currentTick = 0,
): { officerState: OfficerState; nextRngState: number } {
  const recruits: Officer[] = [];
  let nextRngState = rngState;
  for (let index = 0; index < OFFICER_CONFIG.recruitPoolSize; index += 1) {
    const generated = generateRecruit(nextRngState, currentTick);
    recruits.push(generated.officer);
    nextRngState = generated.nextState;
  }
  return {
    officerState: { active: [], recruits, lastRecruitRefreshTick: currentTick },
    nextRngState,
  };
}

export function recruitOfficer(state: StarholdState, officerId: string): StarholdState {
  if (state.officers.active.length >= OFFICER_CONFIG.maxActiveOfficers) return state;
  if (state.resources.supply < OFFICER_CONFIG.baseRecruitCost) return state;
  const recruit = state.officers.recruits.find(officer => officer.id === officerId);
  if (!recruit) return state;

  return {
    ...state,
    resources: { ...state.resources, supply: state.resources.supply - OFFICER_CONFIG.baseRecruitCost },
    officers: {
      ...state.officers,
      active: [...state.officers.active, recruit],
      recruits: state.officers.recruits.filter(officer => officer.id !== officerId),
    },
  };
}

export function dismissOfficer(state: StarholdState, officerId: string): StarholdState {
  if (!state.officers.active.some(officer => officer.id === officerId)) return state;
  return {
    ...state,
    officers: {
      ...state.officers,
      active: state.officers.active.filter(officer => officer.id !== officerId),
    },
  };
}

export function getAssignedOfficer(state: StarholdState, assignment: OfficerAssignment): Officer | undefined {
  return state.officers.active.find(
    officer =>
      officer.assignment === assignment &&
      officer.status === "ready" &&
      officer.missionStatus === "idle",
  );
}

export function assignOfficer(
  state: StarholdState,
  officerId: string,
  assignmentId: OfficerAssignment | null,
): StarholdState {
  const officer = state.officers.active.find(candidate => candidate.id === officerId);
  if (!officer || officer.status !== "ready" || officer.missionStatus === "on_mission") return state;

  const active = state.officers.active
    .map(candidate =>
      assignmentId && candidate.id !== officerId && candidate.assignment === assignmentId
        ? { ...candidate, assignment: null }
        : candidate,
    )
    .map(candidate => candidate.id === officerId ? { ...candidate, assignment: assignmentId } : candidate);
  return { ...state, officers: { ...state.officers, active } };
}

export function sendOnMission(
  state: StarholdState,
  officerId: string,
  missionType: OfficerMissionType,
): StarholdState {
  const mission = OFFICER_MISSIONS.find(candidate => candidate.id === missionType);
  const officer = state.officers.active.find(candidate => candidate.id === officerId);
  if (!mission || !officer || officer.status !== "ready" || officer.missionStatus === "on_mission") return state;

  return {
    ...state,
    officers: {
      ...state.officers,
      active: state.officers.active.map(candidate => candidate.id === officerId ? {
        ...candidate,
        assignment: null,
        missionStatus: "on_mission",
        currentMission: {
          type: missionType,
          startTick: state.tick,
          endTick: state.tick + mission.durationTicks,
        },
      } : candidate),
    },
  };
}

function missionNote(type: OfficerMissionType, outcome: OfficerMissionOutcome): LocalizedString {
  const name = OFFICER_MISSIONS.find(mission => mission.id === type)!.label;
  const result: Record<OfficerMissionOutcome, LocalizedString> = {
    success: { en: "completed successfully", hu: "sikeresen teljesítve", de: "erfolgreich abgeschlossen", ro: "finalizată cu succes" },
    partial: { en: "returned with partial results", hu: "részleges eredménnyel zárult", de: "mit Teilergebnis beendet", ro: "încheiată cu rezultate parțiale" },
    failure: { en: "failed without lasting damage", hu: "sikertelen, tartós kár nélkül", de: "ohne bleibenden Schaden gescheitert", ro: "eșuată fără daune permanente" },
    wound: { en: "ended with an officer wounded", hu: "a tiszt sérülésével végződött", de: "mit einem verwundeten Offizier beendet", ro: "încheiată cu ofițerul rănit" },
  };
  return {
    en: `${name.en} ${result[outcome].en}.`,
    hu: `${name.hu}: ${result[outcome].hu}.`,
    de: `${name.de} ${result[outcome].de}.`,
    ro: `${name.ro}: ${result[outcome].ro}.`,
  };
}

function resolveCompletedMission(
  state: StarholdState,
  officer: Officer,
): { state: StarholdState; officer: Officer } {
  const missionType = officer.currentMission!.type;
  const { value: roll, nextState: rngState } = randomInt(state.globalRngState, 0, 99);
  const score =
    roll +
    (TRAIT_MISSION_BONUS[officer.trait][missionType] ?? 0) +
    Math.floor(officer.loyalty / 20) +
    Math.max(0, officer.level - 1);
  const woundRisk = missionType === "patrol" ? 30 : missionType === "salvage" ? 20 : 5;
  const outcome: OfficerMissionOutcome =
    score >= 75 ? "success" :
    score >= 50 ? "partial" :
    roll < woundRisk ? "wound" : "failure";
  const loyaltyDelta = outcome === "success" ? 4 : outcome === "partial" ? 1 : outcome === "wound" ? -6 : -3;
  const xpGain = outcome === "success" ? 15 : outcome === "partial" ? 8 : outcome === "wound" ? 5 : 2;
  const totalXp = officer.xp + xpGain;
  const lootKey = outcome === "success"
    ? missionType === "salvage" ? "ember_shards" : missionType === "recon" ? "lumen_dust" : undefined
    : outcome === "partial" && missionType === "salvage" ? "lumen_dust" : undefined;
  const lootAmount = lootKey ? (outcome === "success" ? Math.max(5, Math.floor(score / 5)) : 3) : undefined;
  const note = missionNote(missionType, outcome);
  const loyalty = clampLoyalty(officer.loyalty + loyaltyDelta);
  const updated: Officer = {
    ...officer,
    missionStatus: "idle",
    currentMission: undefined,
    loyalty,
    mood: moodFromLoyalty(loyalty),
    xp: totalXp >= 100 ? totalXp - 100 : totalXp,
    level: totalXp >= 100 ? officer.level + 1 : officer.level,
    status: outcome === "wound" ? "wounded" : officer.status,
    availableAtTick: outcome === "wound" ? state.tick + 14400 : officer.availableAtTick,
    recentReports: [{
      tick: state.tick,
      missionType,
      outcome,
      loyaltyDelta,
      lootKey,
      lootAmount,
      note,
    }, ...officer.recentReports].slice(0, 3),
  };
  let nextState: StarholdState = { ...state, globalRngState: rngState };
  if (lootKey && lootAmount) {
    nextState = {
      ...nextState,
      inventory: { ...nextState.inventory, [lootKey]: (nextState.inventory[lootKey] ?? 0) + lootAmount },
    };
  }
  const title: LocalizedString = {
    en: `${officer.name} returned`,
    hu: `${officer.name} visszatért`,
    de: `${officer.name} ist zurückgekehrt`,
    ro: `${officer.name} s-a întors`,
  };
  nextState = pushNotification(nextState, outcome === "wound" ? "system" : "general", title, note, "Medal");
  return { state: nextState, officer: updated };
}

export function tickOfficers(state: StarholdState): StarholdState {
  if (state.tick % 60 !== 0) return state;

  let mutated = false;
  let currentRngState = state.globalRngState;
  let workingState = state;
  const nextOfficers = { ...state.officers };
  const refreshTicks = Math.floor(OFFICER_CONFIG.recruitRefreshMs / 1000);

  if (state.tick - state.officers.lastRecruitRefreshTick > refreshTicks) {
    const recruits: Officer[] = [];
    for (let index = 0; index < OFFICER_CONFIG.recruitPoolSize; index += 1) {
      const generated = generateRecruit(currentRngState, state.tick);
      recruits.push(generated.officer);
      currentRngState = generated.nextState;
    }
    nextOfficers.recruits = recruits;
    nextOfficers.lastRecruitRefreshTick = state.tick;
    mutated = true;
  }

  const active: Officer[] = [];
  for (const officer of nextOfficers.active) {
    let updated = officer;
    if (updated.status === "wounded" && state.tick >= updated.availableAtTick) {
      updated = { ...updated, status: "ready", availableAtTick: 0 };
      mutated = true;
    }
    if (
      updated.missionStatus === "on_mission" &&
      updated.currentMission &&
      state.tick >= updated.currentMission.endTick
    ) {
      const resolved = resolveCompletedMission(
        { ...workingState, globalRngState: currentRngState },
        updated,
      );
      workingState = resolved.state;
      currentRngState = workingState.globalRngState;
      updated = resolved.officer;
      mutated = true;
    }
    active.push(updated);
  }

  if (mutated) {
    nextOfficers.active = active;
    return { ...workingState, globalRngState: currentRngState, officers: nextOfficers };
  }
  return { ...workingState, globalRngState: currentRngState };
}
