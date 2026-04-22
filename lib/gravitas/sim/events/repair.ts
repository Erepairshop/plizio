import type { StarholdState, StarholdModuleId, LocalizedString, StarholdRepairChallengeState } from "../types";
import { pushJournal } from "../shared";
import { isDemoChapter } from "../chapter";

export function createRepairChallengeSequence(waveNumber: number): StarholdModuleId[] {
  if (waveNumber <= 3) return ["reactor"];
  return ["reactor", "logistics", "sensor"];
}

export function normalizeRepairChallenge(challenge: StarholdRepairChallengeState, waveNumber = 1): StarholdRepairChallengeState {
  const desiredSequence = createRepairChallengeSequence(waveNumber);
  const sequenceMatches =
    challenge.sequence.length === desiredSequence.length &&
    challenge.sequence.every((moduleId, index) => moduleId === desiredSequence[index]);
  if (
    sequenceMatches &&
    challenge.promptIndex >= 0 &&
    challenge.promptIndex < desiredSequence.length &&
    challenge.unlocksAvatarPrep === (waveNumber >= 3)
  ) {
    return challenge;
  }

  return {
    ...challenge,
    sequence: desiredSequence,
    promptIndex: Math.min(challenge.promptIndex, Math.max(0, desiredSequence.length - 1)),
    unlocksAvatarPrep: waveNumber >= 3,
  };
}

export function createRepairChallenge(startedTick: number, waveNumber = 1): StarholdRepairChallengeState {
  return {
    active: true,
    startedTick,
    promptEndsAtTick: startedTick + 45,
    promptIndex: 0,
    sequence: createRepairChallengeSequence(waveNumber),
    windowSatisfied: false,
    unlocksAvatarPrep: waveNumber >= 3,
  };
}

export function repairChallengePrompt(state: StarholdState, challenge: StarholdRepairChallengeState): LocalizedString {
  const moduleId = challenge.sequence[challenge.promptIndex] ?? challenge.sequence[0] ?? "reactor";
  const moduleName = state.modules[moduleId].name;
  return {
    en: `Repair now: ${moduleName.en}.`,
    hu: `Most javítsd: ${moduleName.hu}.`,
    de: `Jetzt reparieren: ${moduleName.de}.`,
    ro: `Repară acum: ${moduleName.ro}.`,
  };
}

export function getRepairChallengeModule(challenge: StarholdRepairChallengeState | null | undefined): StarholdModuleId | null {
  if (!challenge?.active) return null;
  return challenge.sequence[challenge.promptIndex] ?? null;
}

export function failRepairChallenge(state: StarholdState): StarholdState {
  if (!isDemoChapter(state)) {
    return {
      ...state,
      repairChallenge: {
        ...state.repairChallenge,
        active: false,
      },
      lockdown: false,
      stationLost: false,
      pendingEvent: null,
    };
  }
  return {
    ...state,
    repairChallenge: {
      ...state.repairChallenge,
      active: false,
    },
    stationLost: true,
    lockdown: true,
    lockdownDuration: state.lockdownDuration + 1,
    alert: {
      en: "No repair response. Station failure.",
      hu: "Nincs javítási reakció. Az állomás elbukott.",
      de: "Keine Reparaturreaktion. Stationsausfall.",
      ro: "Nicio reacție de reparație. Stația a eșuat.",
    },
    journal: pushJournal(state, {
      en: "The repair chain failed. The station could not hold.",
      hu: "A javítási lánc elbukott. Az állomás nem tudta tartani magát.",
      de: "Die Reparaturkette ist gescheitert. Die Station hielt nicht stand.",
      ro: "Lanțul de reparații a eșuat. Stația nu a rezistat.",
    }),
  };
}

export function advanceRepairChallenge(state: StarholdState, moduleId: StarholdModuleId): StarholdState {
  const challenge = state.repairChallenge;
  if (!challenge.active) return state;
  const expected = getRepairChallengeModule(challenge);
  if (!expected || expected !== moduleId) return state;

  return {
    ...state,
    repairChallenge: {
      ...challenge,
      windowSatisfied: true,
    },
    alert: {
      en: `${state.modules[moduleId].name.en} restored. Hold the line.`,
      hu: `${state.modules[moduleId].name.hu} helyreállt. Tartsd a vonalat.`,
      de: `${state.modules[moduleId].name.de} wiederhergestellt. Halte die Linie.`,
      ro: `${state.modules[moduleId].name.ro} restaurat. Ține linia.`,
    },
  };
}

export function advanceRepairChallengeWindow(state: StarholdState): StarholdState {
  const challenge = state.repairChallenge;
  if (!challenge.active || !challenge.windowSatisfied) return state;
  const nextIndex = challenge.promptIndex + 1;
  if (nextIndex >= challenge.sequence.length) {
    const nextChallenge = {
      ...challenge,
      active: false,
      windowSatisfied: false,
    };
    return {
      ...state,
      repairChallenge: nextChallenge,
      avatarPrepArmedTick: challenge.unlocksAvatarPrep ? state.tick + 1 : null,
      alert: challenge.unlocksAvatarPrep
        ? {
            en: "Repair chain held. Avatar preparation unlocked.",
            hu: "A javítási lánc kitartott. Az avatar-előkészítés feloldva.",
            de: "Reparaturkette gehalten. Avatar-Vorbereitung freigeschaltet.",
            ro: "Lanțul de reparații a rezistat. Pregătirea avatarului a fost deblocată.",
          }
        : state.alert,
      journal: challenge.unlocksAvatarPrep
        ? pushJournal(state, {
            en: "The repair chain held and the avatar preparation sequence can begin.",
            hu: "A javítási lánc kitartott, az avatar-előkészítés elkezdődhet.",
            de: "Die Reparaturkette hielt, die Avatar-Vorbereitung kann beginnen.",
            ro: "Lanțul de reparații a rezistat și pregătirea avatarului poate începe.",
          })
        : state.journal,
    };
  }

  const nextChallenge = {
    ...challenge,
    promptIndex: nextIndex,
    promptEndsAtTick: state.tick + 45,
    windowSatisfied: false,
  };

  return {
    ...state,
    repairChallenge: nextChallenge,
    alert: repairChallengePrompt(state, nextChallenge),
  };
}
