import type { StarholdEventDefinition, StarholdState, StarholdEventId, StarholdModuleId, LocalizedString, StarholdPendingEvent, AvatarTraitId, StarholdAvatarAnswer, StarholdAvatarProfile, StarholdRepairChallengeState } from "./types";
import { clamp, pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";
import { isDemoChapter } from "./chapter";

const T = GRAVITAS_TEXT.events;
const A = GRAVITAS_TEXT.alerts;
const J = GRAVITAS_TEXT.journal;
const SCRIPTED_PHASE_ONE_END_TICK = 180;
const SCRIPTED_PHASE_ONE_EVENT_1_TICK = 90;
const SCRIPTED_PHASE_ONE_EVENT_2_TICK = 135;
function chainedEvent(
  base: {
    id: StarholdEventId;
    title: LocalizedString;
    body: LocalizedString;
    options: { id: string; label: LocalizedString }[];
  },
  chainId: string,
  chainStep: number,
  chainTotal: number
) {
  return {
    ...base,
    chainId,
    chainStep,
    chainTotal,
  };
}

export function createWaveRecoveryEvent(waveNumber: number): StarholdPendingEvent {
  const content = T.waveRecovery.step1;
  return {
    id: "waveRecovery",
    title: content.title,
    body: content.body,
    options: Object.entries(content.options).map(([id, label]) => ({ id, label })),
    waveNumber: Math.min(3, Math.max(1, waveNumber)),
    chainId: "wave-recovery",
    chainStep: 1,
    chainTotal: 1,
  };
}

function restoreModuleSet(state: StarholdState, moduleIds: StarholdModuleId[], alert: LocalizedString, journal: LocalizedString): StarholdState {
  const nextModules = { ...state.modules };
  moduleIds.forEach((id) => {
    nextModules[id] = {
      ...nextModules[id],
      integrity: 100,
      online: true,
      load: 0,
    };
  });

  return {
    ...state,
    pendingEvent: null,
    modules: nextModules,
    alert,
    journal: pushJournal(state, journal),
  };
}

function restoreWaveCalmState(
  state: StarholdState,
  restored: StarholdState,
  stabilityFloor: number,
  calmTicks: number,
): StarholdState {
  return {
    ...restored,
    resources: {
      ...restored.resources,
      stability: clamp(Math.max(restored.resources.stability, stabilityFloor)),
      power: clamp(Math.max(restored.resources.power, 18)),
    },
    threat: {
      ...restored.threat,
      aftershock: 0,
    },
    reactorRecovery: {
      active: false,
      completedStabilizations: state.reactorRecovery.completedStabilizations,
      nextPromptTick: state.tick + 999,
    },
    recoveryPriority: null,
    postWaveSurgeTicks: 0,
    postWaveSurgeMode: null,
    waveRecoveryCalmTicks: calmTicks,
  };
}

export function createAvatarPreparationEvent(stepNumber: number): StarholdPendingEvent {
  const step = Math.min(3, Math.max(1, stepNumber));
  const content = T.avatarPreparation[`step${step}` as "step1" | "step2" | "step3"];
  return {
    id: "avatarPreparation",
    title: content.title,
    body: content.body,
    options: Object.entries(content.options).map(([id, label]) => ({ id, label })),
    chainId: "avatar-preparation",
    chainStep: step,
    chainTotal: 3,
  };
}

function createRepairChallengeSequence(waveNumber: number): StarholdModuleId[] {
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

function repairChallengePrompt(state: StarholdState, challenge: StarholdRepairChallengeState): LocalizedString {
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

const AVATAR_TRAIT_TITLES: Record<AvatarTraitId, LocalizedString> = {
  calm: { en: "Calm frame", hu: "Nyugodt keret", de: "Ruhiger Rahmen", ro: "Cadru calm" },
  curious: { en: "Curious frame", hu: "Kíváncsi keret", de: "Neugieriger Rahmen", ro: "Cadru curios" },
  protective: { en: "Protective frame", hu: "Védelmező keret", de: "Beschützender Rahmen", ro: "Cadru protector" },
  bold: { en: "Bold frame", hu: "Bátor keret", de: "Mutiger Rahmen", ro: "Cadru îndrăzneț" },
};

function createAvatarProfile(answers: StarholdAvatarAnswer[], completedAtTick: number): StarholdAvatarProfile {
  const traitScores: Record<AvatarTraitId, number> = {
    calm: 0,
    curious: 0,
    protective: 0,
    bold: 0,
  };
  for (const answer of answers) {
    traitScores[answer.trait] += 1;
  }
  const archetype = (Object.entries(traitScores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "calm") as AvatarTraitId;
  return {
    completedAtTick,
    archetype,
    answers,
    traitScores,
    title: AVATAR_TRAIT_TITLES[archetype],
  };
}

function appendAvatarAnswer(state: StarholdState, answer: StarholdAvatarAnswer): StarholdState {
  const currentAnswers = state.avatarProfile?.answers ?? [];
  const nextAnswers = [...currentAnswers, answer];
  const partialScores: Record<AvatarTraitId, number> = {
    calm: 0,
    curious: 0,
    protective: 0,
    bold: 0,
  };
  for (const existing of nextAnswers) {
    partialScores[existing.trait] += 1;
  }
  return {
    ...state,
    avatarProfile: {
      completedAtTick: state.avatarProfile?.completedAtTick ?? state.tick,
      archetype: state.avatarProfile?.archetype ?? answer.trait,
      answers: nextAnswers,
      traitScores: partialScores,
      title: state.avatarProfile?.title ?? AVATAR_TRAIT_TITLES[answer.trait],
    },
  };
}

const STARHOLD_EVENTS: StarholdEventDefinition[] = [
  {
    id: "avatarPreparation",
    minTick: 0,
    cooldown: 0,
    shouldTrigger: () => false,
    create: () => createAvatarPreparationEvent(1),
    resolve: (state, optionId) => {
      const step = Math.min(3, Math.max(1, state.pendingEvent?.chainStep ?? 1));
      const optionTraitMap: Record<string, AvatarTraitId> = {
        calm: "calm",
        curious: "curious",
        protective: "protective",
        bold: "bold",
      };
      const selectedTrait = optionTraitMap[optionId] ?? "calm";
      const currentContent = T.avatarPreparation[`step${step}` as "step1" | "step2" | "step3"];
      const chosenLabel = currentContent.options[optionId as keyof typeof currentContent.options] ?? currentContent.options.calm;
      const answer: StarholdAvatarAnswer = {
        questionId: `step${step}`,
        optionId,
        trait: selectedTrait,
        label: chosenLabel,
      };
      const nextState = appendAvatarAnswer(state, answer);

      const nextStep = step + 1;
      if (step < 3) {
        const nextContent = T.avatarPreparation[`step${nextStep}` as "step1" | "step2" | "step3"];
        return {
          ...nextState,
          pendingEvent: {
            id: "avatarPreparation",
            title: nextContent.title,
            body: nextContent.body,
            options: Object.entries(nextContent.options).map(([id, label]) => ({ id, label })),
            chainId: "avatar-preparation",
            chainStep: nextStep,
            chainTotal: 3,
          },
          alert: {
            en: `Profile note: ${AVATAR_TRAIT_TITLES[selectedTrait].en}`,
            hu: `Profiljegy: ${AVATAR_TRAIT_TITLES[selectedTrait].hu}`,
            de: `Profilhinweis: ${AVATAR_TRAIT_TITLES[selectedTrait].de}`,
            ro: `Notă de profil: ${AVATAR_TRAIT_TITLES[selectedTrait].ro}`,
          },
          journal: pushJournal(state, {
            en: `Avatar prep step ${step} recorded: ${optionId}.`,
            hu: `Avatar-előkészítés ${step}. lépés rögzítve: ${optionId}.`,
            de: `Avatar-Vorbereitung Schritt ${step} gespeichert: ${optionId}.`,
            ro: `Pasul ${step} al pregătirii avatarului înregistrat: ${optionId}.`,
          }),
        };
      }

      const finalProfile = createAvatarProfile(nextState.avatarProfile?.answers ?? [answer], state.tick);
      return {
        ...nextState,
        pendingEvent: null,
        avatarProfile: finalProfile,
        avatarImprintActive: true,
        avatarImprintProgress: 0,
        alert: A.avatarImprintStart,
        journal: pushJournal(state, J.avatarImprintJournal),
        postWaveSurgeTicks: 0,
        postWaveSurgeMode: null,
      };
    },
  },
  {
    id: "waveRecovery",
    minTick: 0,
    cooldown: 0,
    shouldTrigger: () => false,
    create: () => createWaveRecoveryEvent(1),
    resolve: (state, optionId) => {
      const waveNumber = state.pendingEvent?.waveNumber ?? 1;
      const success = {
        en: "Congratulations. Your answer was perfect.",
        hu: "Gratulálok. A válaszod tökéletes volt.",
        de: "Glückwunsch. Deine Antwort war perfekt.",
        ro: "Felicitări. Răspunsul tău a fost perfect.",
      };
      const fail = {
        en: "Wrong answer. The stabilizer frame kicked back hard.",
        hu: "Rossz válasz. A stabilizátor keret erősen visszarúgott.",
        de: "Falsche Antwort. Der Stabilisatorrahmen schlug hart zurück.",
        ro: "Răspuns greșit. Cadrul stabilizator a lovit înapoi puternic.",
      };

      if (waveNumber >= 1 && optionId === "reactor") {
        const calmTicks = waveNumber >= 3 ? 45 : 45;
        const restored = restoreModuleSet(
          state,
          ["reactor"],
          success,
          {
            en: "Perfect answer. Reactor restored and the fault line sealed.",
            hu: "Tökéletes válasz. A reaktor helyreállt, a törésvonal lezárult.",
            de: "Perfekte Antwort. Reaktor wiederhergestellt und Bruchlinie versiegelt.",
            ro: "Răspuns perfect. Reactorul a fost restaurat și linia de avarie a fost sigilată.",
          }
        );
        return {
          ...restoreWaveCalmState(state, restored, 80, calmTicks),
          avatarPrepArmedTick: waveNumber >= 3 ? state.tick + calmTicks : null,
          alert: success,
        };
      }

      return {
        ...state,
        pendingEvent: null,
        avatarPrepArmedTick: null,
        repairChallenge: createRepairChallenge(state.tick, waveNumber),
        postWaveSurgeTicks: 0,
        postWaveSurgeMode: null,
        alert: fail,
        waveRecoveryCalmTicks: 0,
        journal: pushJournal(state, {
          en: "The recovery check failed. The wave remains a lingering threat.",
          hu: "A helyreállítási ellenőrzés hibás volt. A hullám továbbra is fenyeget.",
          de: "Der Wiederherstellungscheck war falsch. Die Welle bleibt eine anhaltende Bedrohung.",
          ro: "Verificarea de recuperare a eșuat. Valul rămâne o amenințare latentă.",
        }),
      };
    },
  },
  {
    id: "emergencyOverride",
    minTick: 0,
    cooldown: 0,
    shouldTrigger: (state) => isDemoChapter(state) && state.lockdown,
    create: () => ({
      ...chainedEvent(
        {
          id: "emergencyOverride",
          title: T.emergencyOverride.step1.title,
          body: T.emergencyOverride.step1.body,
          options: [
            { id: "forceGrid", label: T.emergencyOverride.step1.options.forceGrid },
            { id: "purgeBuffer", label: T.emergencyOverride.step1.options.purgeBuffer },
          ],
        },
        "lockdown-override",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "forceGrid") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "emergencyOverride",
              title: T.emergencyOverride.step2.title,
              body: T.emergencyOverride.step2.body,
              options: [
                { id: "patchVents", label: T.emergencyOverride.step2.options.patchVents },
                { id: "absorbSurge", label: T.emergencyOverride.step2.options.absorbSurge },
              ],
            },
            "lockdown-override",
            2,
            2
          ),
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability + 10),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 3),
          },
          alert: A.overrideForced,
          journal: pushJournal(state, J.gridForced),
        };
      }

      if (optionId === "purgeBuffer") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "emergencyOverride",
              title: T.emergencyOverride.step2.title,
              body: T.emergencyOverride.step2.body,
              options: [
                { id: "patchVents", label: T.emergencyOverride.step2.options.patchVents },
                { id: "absorbSurge", label: T.emergencyOverride.step2.options.absorbSurge },
              ],
            },
            "lockdown-override",
            2,
            2
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 15),
          },
          entropy: clamp(state.entropy - 10),
          alert: A.overrideBypass,
          journal: pushJournal(state, J.coolingBypassed),
        };
      }

      if (optionId === "patchVents") {
        return {
          ...state,
          pendingEvent: null,
          lockdown: false,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 15),
            stability: clamp(state.resources.stability + 15),
          },
          alert: A.lockdownLifted,
          journal: pushJournal(state, J.hullPatched),
        };
      }

      if (optionId === "absorbSurge") {
        return {
          ...state,
          pendingEvent: null,
          lockdown: false,
          entropy: clamp(state.entropy + 15),
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability + 10),
          },
          alert: A.lockdownLifted,
          journal: pushJournal(state, J.voidWhisperHeeded),
        };
      }

      return state;
    },
  },
  {
    id: "powerFluctuation",
    minTick: 8,
    cooldown: 10,
    shouldTrigger: (state) => state.resources.power <= 12 || state.modules.reactor.integrity < 45,
    create: () => ({
      ...chainedEvent(
        {
          id: "powerFluctuation",
          title: T.powerFluctuation.title,
          body: T.powerFluctuation.body,
          options: [
            { id: "vent", label: T.powerFluctuation.options.vent },
            { id: "absorb", label: T.powerFluctuation.options.absorb },
          ],
        },
        "reactor-surge",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "absorb") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "powerFluctuation",
              title: T.powerFluctuation.overload.title,
              body: T.powerFluctuation.overload.body,
              options: [
                { id: "lockCore", label: T.powerFluctuation.overload.options.lockCore },
                { id: "bleedHousing", label: T.powerFluctuation.overload.options.bleedHousing },
              ],
            },
            "reactor-surge",
            2,
            2
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 4),
            stability: clamp(state.resources.stability - 2),
          },
          alert: A.absorbed,
          journal: pushJournal(state, J.surgeCaptured),
        };
      }

      if (optionId === "lockCore") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 6),
            stability: clamp(state.resources.stability - 3),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 2),
          },
          modules: {
            ...state.modules,
            core: {
              ...state.modules.core,
              load: clamp(state.modules.core.load + 10),
            },
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 1,
          },
          alert: A.coreLocked,
          journal: pushJournal(state, J.overloadCore),
        };
      }

      if (optionId === "bleedHousing") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 2),
            stability: clamp(state.resources.stability + 2),
          },
          marks: {
            ...state.marks,
            reactorScar: clamp(state.marks.reactorScar + 2),
          },
          modules: {
            ...state.modules,
            reactor: {
              ...state.modules.reactor,
              integrity: clamp(state.modules.reactor.integrity - 4),
            },
          },
          alert: A.housingBurn,
          journal: pushJournal(state, J.reactorScar),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          power: clamp(state.resources.power - 1),
          stability: clamp(state.resources.stability + 1),
        },
        alert: A.vented,
        journal: pushJournal(state, J.surgeVented),
      };
    },
  },
  {
    id: "materialBottleneck",
    minTick: 10,
    cooldown: 12,
    shouldTrigger: (state) => state.resources.materials <= 6 && !state.modules.logistics.online,
    create: () => ({
      id: "materialBottleneck",
      title: T.materialBottleneck.title,
      body: T.materialBottleneck.body,
      options: [
        { id: "droneSweep", label: T.materialBottleneck.options.droneSweep },
        { id: "stripPlating", label: T.materialBottleneck.options.stripPlating },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "stripPlating") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 5),
            stability: clamp(state.resources.stability - 4),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 3),
          },
          alert: A.stripped,
          journal: pushJournal(state, J.emergencyPlating),
        };
      }

      return {
        ...state,
        pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 3),
            power: clamp(state.resources.power - 2),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 1),
          },
          alert: A.scavenged,
          journal: pushJournal(state, J.scavengerDrone),
      };
    },
  },
  {
    id: "entropyCascade",
    minTick: 26,
    cooldown: 30,
    shouldTrigger: (state) => state.entropy > 40,
    create: () => ({
      ...chainedEvent(
        {
          id: "entropyCascade",
          title: T.entropyCascade.step1.title,
          body: T.entropyCascade.step1.body,
          options: [
            { id: "purgeBuffer", label: T.entropyCascade.step1.options.purgeBuffer },
            { id: "isolateModules", label: T.entropyCascade.step1.options.isolateModules },
          ],
        },
        "entropy-cascade",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "purgeBuffer") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 15),
          },
          entropy: clamp(state.entropy - 25),
          alert: A.entropyPurged,
          journal: pushJournal(state, J.entropyStable),
        };
      }
      if (optionId === "isolateModules") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "entropyCascade",
              title: T.entropyCascade.step2.title,
              body: T.entropyCascade.step2.body,
              options: [
                { id: "burnOut", label: T.entropyCascade.step2.options.burnOut },
                { id: "redirectCore", label: T.entropyCascade.step2.options.redirectCore },
              ],
            },
            "entropy-cascade",
            2,
            2
          ),
          alert: A.cascadeIsolated,
          journal: pushJournal(state, {
            en: "You attempted to isolate the entropy, but the grid is failing.",
            hu: "Megpróbáltad izolálni az entrópiát, de a hálózat összeomlik.",
            de: "Du hast versucht, die Entropie zu isolieren, aber das Netz versagt.",
            ro: "Ai încercat să izolezi entropia, dar rețeaua eșuează.",
          }),
        };
      }
      if (optionId === "burnOut") {
        const moduleIds: StarholdModuleId[] = ["reactor", "logistics", "sensor"];
        const targetId = moduleIds[state.tick % 3];
        const target = state.modules[targetId];
        return {
          ...state,
          pendingEvent: null,
          modules: {
            ...state.modules,
            [targetId]: {
              ...target,
              online: false,
              integrity: clamp(target.integrity - 30),
            },
          },
          entropy: clamp(state.entropy - 15),
          alert: A.moduleBurnout(target.name),
          journal: pushJournal(state, J.entropyBurnout),
        };
      }
      if (optionId === "redirectCore") {
        return {
          ...state,
          pendingEvent: null,
          resonance: clamp(state.resonance + 40),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation - 10),
          },
          entropy: clamp(state.entropy - 10),
          alert: A.coreRedirection,
          journal: pushJournal(state, J.coreSpike),
        };
      }
      return state;
    },
  },
  {
    id: "signalDrift",
    minTick: 18,
    cooldown: 24,
    shouldTrigger: (state) =>
      state.modules.sensor.online &&
      state.phase !== "boot" &&
      (state.worldPulse >= 25 || state.marks.voidEcho >= 3) &&
      (state.entropy >= 18 || state.marks.shellStrain >= 4),
    create: () => ({
      ...chainedEvent(
        {
          id: "signalDrift",
          title: T.signalDrift.title,
          body: T.signalDrift.body,
          options: [
            { id: "trace", label: { en: "Trace the signal", hu: "Jel követése", de: "Signal verfolgen", ro: "Urmărește semnalul" } },
            { id: "mute", label: { en: "Mute it", hu: "Elcsendesítés", de: "Dämpfen", ro: "Amuțește-l" } },
          ],
        },
        "signal-drift",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "trace") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "signalDrift",
              title: {
                en: "Signal returns",
                hu: "A jel visszatér",
                de: "Signal kehrt zurück",
                ro: "Semnalul revine",
              },
              body: {
                en: "The signal bends around the shell and waits for an answer.",
                hu: "A jel a test köré hajlik, és válaszra vár.",
                de: "Das Signal biegt sich um die Hülle und wartet auf eine Antwort.",
                ro: "Semnalul se curbează în jurul corpului și așteaptă un răspuns.",
              },
              options: [
                { id: "answer", label: { en: "Answer it", hu: "Válaszolj", de: "Antworten", ro: "Răspunde" } },
                { id: "seal", label: { en: "Seal it off", hu: "Lezárás", de: "Versiegeln", ro: "Sigilează-l" } },
              ],
            },
            "signal-drift",
            2,
            2
          ),
          worldPulse: clamp(state.worldPulse + 10),
          alert: A.signalDrift,
          journal: pushJournal(state, J.signalDriftJournal),
        };
      }
      if (optionId === "answer") {
        return {
          ...state,
          pendingEvent: null,
          worldPulse: clamp(state.worldPulse + 6),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 5),
            stability: clamp(state.resources.stability - 2),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 1,
          },
          alert: A.phaseEcho,
          journal: pushJournal(state, J.worldEchoJournal),
        };
      }
      if (optionId === "seal") {
        return {
          ...state,
          pendingEvent: null,
          worldPulse: clamp(state.worldPulse - 12),
          entropy: clamp(state.entropy - 3),
          alert: A.worldPatternShift,
          journal: pushJournal(state, J.signalMuteJournal),
        };
      }
      return {
        ...state,
        pendingEvent: null,
        worldPulse: clamp(state.worldPulse - 4),
        alert: A.worldPatternShift,
        journal: pushJournal(state, J.signalMuteJournal),
      };
    },
  },
  {
    id: "signalPulse",
    minTick: 12,
    cooldown: 14,
    shouldTrigger: (state) => state.phase === "activation" && state.resources.activation >= 25,
    create: () => ({
      ...chainedEvent(
        {
          id: "signalPulse",
          title: T.signalPulse.title,
          body: T.signalPulse.body,
          options: [
            { id: "synchronize", label: T.signalPulse.options.synchronize },
            { id: "amplify", label: T.signalPulse.options.amplify },
          ],
        },
        "shell-echo",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "amplify") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "signalPulse",
              title: T.signalPulse.fracture.title,
              body: T.signalPulse.fracture.body,
              options: [
                { id: "holdResonance", label: T.signalPulse.fracture.options.holdResonance },
                { id: "breakContact", label: T.signalPulse.fracture.options.breakContact },
              ],
            },
            "shell-echo",
            2,
            2
          ),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 8),
            stability: clamp(state.resources.stability - 3),
          },
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho + 1),
          },
          alert: A.echoStrong,
          journal: pushJournal(state, J.forcedEcho),
        };
      }

      if (optionId === "holdResonance") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 10),
            stability: clamp(state.resources.stability - 2),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 1),
          },
          alert: A.resonanceHeld,
          journal: pushJournal(state, J.deepResponse),
        };
      }

      if (optionId === "breakContact") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 2),
            stability: clamp(state.resources.stability + 2),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain - 1),
          },
          alert: A.contactBroken,
          journal: pushJournal(state, J.resonanceCut),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          activation: clamp(state.resources.activation + 4),
          stability: clamp(state.resources.stability + 1),
        },
        alert: A.shellAligned,
        journal: pushJournal(state, J.steadiedResonance),
      };
    },
  },
  {
    id: "phaseEcho",
    minTick: 40,
    cooldown: 32,
    shouldTrigger: (state) =>
      state.avatarAwake &&
      state.highStability &&
      state.lowEntropyStreak >= 5 &&
      state.worldPhase % 2 === 1,
    create: () => ({
      id: "phaseEcho",
      title: T.phaseEcho.title,
      body: {
        en: "A quiet layer of the station begins to answer your presence.",
        hu: "Az állomás csendes rétege elkezd válaszolni a jelenlétedre.",
        de: "Eine stille Schicht der Station antwortet auf deine Präsenz.",
        ro: "Un strat tăcut al stației începe să răspundă prezenței tale."
      },
      options: [
        { id: "listen", label: { en: "Listen", hu: "Figyelj", de: "Lauschen", ro: "Ascultă" } },
        { id: "anchor", label: { en: "Anchor it", hu: "Horgonyozd le", de: "Verankern", ro: "Ancorează-l" } },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "listen") {
        return {
          ...state,
          pendingEvent: null,
          worldPulse: clamp(state.worldPulse + 8),
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 4),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 1,
          },
          alert: A.phaseEcho,
          journal: pushJournal(state, J.phaseEchoJournal),
        };
      }
      return {
        ...state,
        pendingEvent: null,
        worldPulse: clamp(state.worldPulse - 10),
        resources: {
          ...state.resources,
          stability: clamp(state.resources.stability + 4),
        },
        alert: A.worldPatternShift,
        journal: pushJournal(state, J.worldTurnJournal),
      };
    },
  },
  {
    id: "driftLock",
    minTick: 16,
    cooldown: 18,
    shouldTrigger: (state) =>
      state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress >= 7 &&
      state.phase !== "boot",
    create: () => ({
      id: "driftLock",
      title: T.driftLock.title,
      body: T.driftLock.body,
      options: [
        { id: "breakLoop", label: T.driftLock.options.breakLoop },
        { id: "foldInward", label: T.driftLock.options.foldInward },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "foldInward") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            activation: clamp(state.resources.activation + 6),
            stability: clamp(state.resources.stability - 5),
          },
          marks: {
            reactorScar: clamp(state.marks.reactorScar + 1),
            shellStrain: clamp(state.marks.shellStrain + 2),
            supplyStress: clamp(state.marks.supplyStress + 1),
            voidEcho: clamp(state.marks.voidEcho + 2),
          },
          alert: A.foldedInward,
          journal: pushJournal(state, J.repeatingPattern),
        };
      }

      return {
        ...state,
        pendingEvent: null,
        resources: {
          ...state.resources,
          power: clamp(state.resources.power - 4),
          materials: clamp(state.resources.materials - 3),
          stability: clamp(state.resources.stability + 2),
        },
        marks: {
          reactorScar: clamp(state.marks.reactorScar - 1),
          shellStrain: clamp(state.marks.shellStrain - 2),
          supplyStress: clamp(state.marks.supplyStress - 1),
          voidEcho: clamp(state.marks.voidEcho),
        },
        alert: A.driftBroken,
        journal: pushJournal(state, J.burnedToBreak),
      };
    },
  },
  {
    id: "voidBreach",
    minTick: 18,
    cooldown: 24,
    shouldTrigger: (state) => state.resources.activation > 40 && state.marks.voidEcho > 2,
    create: () => ({
      ...chainedEvent(
        {
          id: "voidBreach",
          title: T.voidBreach.step1.title,
          body: T.voidBreach.step1.body,
          options: [
            { id: "seal", label: T.voidBreach.step1.options.seal },
            { id: "commune", label: T.voidBreach.step1.options.commune },
          ],
        },
        "void-breach",
        1,
        2
      ),
    }),
    resolve: (state, optionId) => {
      if (optionId === "seal") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 10),
            stability: clamp(state.resources.stability + 5),
          },
          alert: A.voidSealed,
          journal: pushJournal(state, J.voidSealedJournal),
        };
      }
      if (optionId === "commune") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "voidBreach",
              title: T.voidBreach.step2.title,
              body: T.voidBreach.step2.body,
              options: [
                { id: "sacrifice", label: T.voidBreach.step2.options.sacrifice },
                { id: "anchor", label: T.voidBreach.step2.options.anchor },
              ],
            },
            "void-breach",
            2,
            2
          ),
          marks: {
            ...state.marks,
            voidEcho: clamp(state.marks.voidEcho + 4),
          },
          anomalies: state.anomalies.some((anomaly) => anomaly.id === "voidLeak")
            ? state.anomalies
            : [...state.anomalies, { id: "voidLeak", name: { en: "Void Leak", hu: "Void szivárgás", de: "Void-Leck", ro: "Scurgere Void" }, severity: 3 }],
          alert: A.voidCommune,
          journal: pushJournal(state, J.voidEchoJournal),
        };
      }
      if (optionId === "sacrifice") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials - 12),
            stability: clamp(state.resources.stability + 10),
          },
          alert: A.voidSacrifice,
          journal: pushJournal(state, J.voidSacrificeJournal),
        };
      }
      if (optionId === "anchor") {
        return {
          ...state,
          pendingEvent: null,
          marks: {
            ...state.marks,
            reactorScar: clamp(state.marks.reactorScar + 5),
            voidEcho: clamp(state.marks.voidEcho - 2),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 1,
          },
          alert: A.voidAnchored,
          journal: pushJournal(state, J.voidReactorScarJournal),
        };
      }
      return state;
    },
  },
  {
    id: "sensorGhosting",
    minTick: 14,
    cooldown: 18,
    shouldTrigger: (state) => state.modules.sensor.online && state.marks.shellStrain > 3,
    create: () => ({
      id: "sensorGhosting",
      title: T.sensorGhosting.title,
      body: T.sensorGhosting.body,
      options: [
        { id: "ignore", label: T.sensorGhosting.options.ignore },
        { id: "recalibrate", label: T.sensorGhosting.options.recalibrate },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "recalibrate") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 4),
          },
          alert: A.sensorRecalibrated,
          journal: pushJournal(state, J.sensorRecalibratedJournal),
        };
      }
      return {
        ...state,
        pendingEvent: null,
        anomalies: state.anomalies.some((anomaly) => anomaly.id === "sensorGhost")
          ? state.anomalies
          : [...state.anomalies, { id: "sensorGhost", name: { en: "Sensor Ghosts", hu: "Szenzor-szellemek", de: "Sensorgeister", ro: "Fantome senzori" }, severity: 2, duration: 10 }],
        alert: A.ghostsIgnored,
        journal: pushJournal(state, J.ghostAnomalyJournal),
      };
    },
  },
  {
    id: "deepTrek",
    minTick: 14,
    cooldown: 20,
    shouldTrigger: (state) => state.modules.logistics.online && state.resources.power > 15,
    create: () => ({
      id: "deepTrek",
      title: T.deepTrek.title,
      body: T.deepTrek.body,
      options: [
        { id: "sendDrone", label: T.deepTrek.options.sendDrone },
        { id: "recall", label: T.deepTrek.options.recall },
      ],
    }),
    resolve: (state, optionId) => {
      if (optionId === "sendDrone") {
        const success = Math.random() > 0.4;
        if (success) {
          return {
            ...state,
            pendingEvent: null,
            resources: {
              ...state.resources,
              materials: clamp(state.resources.materials + 20),
              power: clamp(state.resources.power - 8),
            },
            alert: A.trekSuccess,
            journal: pushJournal(state, J.trekRichesJournal),
          };
        } else {
          return {
            ...state,
            pendingEvent: null,
            resources: {
              ...state.resources,
              power: clamp(state.resources.power - 4),
            },
            marks: {
              ...state.marks,
              supplyStress: clamp(state.marks.supplyStress + 4),
            },
            alert: A.trekFailed,
            journal: pushJournal(state, J.trekLossJournal),
          };
        }
      }
      return {
        ...state,
        pendingEvent: null,
      };
    },
  },
  {
    id: "supplyCascade",
    minTick: 10,
    cooldown: 16,
    shouldTrigger: (state) => state.modules.logistics.online && state.resources.materials < 15,
    create: () => ({
      ...chainedEvent(
        {
          id: "supplyCascade",
          title: T.supplyCascade.step1.title,
          body: T.supplyCascade.step1.body,
          options: [
            { id: "divertPower", label: T.supplyCascade.step1.options.divertPower },
            { id: "riskDrones", label: T.supplyCascade.step1.options.riskDrones },
          ],
        },
        "supply-cascade",
        1,
        3
      ),
    }),
    resolve: (state, optionId) => {
      // Step 1 Resolves
      if (optionId === "divertPower") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step2.title,
              body: T.supplyCascade.step2.body,
              options: [
                { id: "processFuel", label: T.supplyCascade.step2.options.processFuel },
                { id: "stabilizeStructure", label: T.supplyCascade.step2.options.stabilizeStructure },
              ],
            },
            "supply-cascade",
            2,
            3
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power - 5),
          },
          alert: A.powerDiverted,
          journal: pushJournal(state, J.dronesProtected),
        };
      }
      if (optionId === "riskDrones") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step2.title,
              body: T.supplyCascade.step2.body,
              options: [
                { id: "processFuel", label: T.supplyCascade.step2.options.processFuel },
                { id: "stabilizeStructure", label: T.supplyCascade.step2.options.stabilizeStructure },
              ],
            },
            "supply-cascade",
            2,
            3
          ),
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability - 3),
          },
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 2),
          },
          alert: A.dronesLost,
          journal: pushJournal(state, J.droneDamage),
        };
      }

      // Step 2 Resolves
      if (optionId === "processFuel") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step3.title,
              body: T.supplyCascade.step3.body,
              options: [
                { id: "lockLogistics", label: T.supplyCascade.step3.options.lockLogistics },
                { id: "ventSensors", label: T.supplyCascade.step3.options.ventSensors },
              ],
            },
            "supply-cascade",
            3,
            3
          ),
          resources: {
            ...state.resources,
            power: clamp(state.resources.power + 12),
          },
          alert: A.fuelProcessed,
          journal: pushJournal(state, J.volatilePower),
        };
      }
      if (optionId === "stabilizeStructure") {
        return {
          ...state,
          pendingEvent: chainedEvent(
            {
              id: "supplyCascade",
              title: T.supplyCascade.step3.title,
              body: T.supplyCascade.step3.body,
              options: [
                { id: "lockLogistics", label: T.supplyCascade.step3.options.lockLogistics },
                { id: "ventSensors", label: T.supplyCascade.step3.options.ventSensors },
              ],
            },
            "supply-cascade",
            3,
            3
          ),
          resources: {
            ...state.resources,
            materials: clamp(state.resources.materials + 8),
            stability: clamp(state.resources.stability + 5),
          },
          alert: A.structureStabilized,
          journal: pushJournal(state, J.structuralReinforce),
        };
      }

      // Step 3 Resolves
      if (optionId === "lockLogistics") {
        return {
          ...state,
          pendingEvent: null,
          marks: {
            ...state.marks,
            supplyStress: clamp(state.marks.supplyStress + 3),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 2,
          },
          alert: A.logisticsLocked,
          journal: pushJournal(state, J.logisticsStress),
        };
      }
      if (optionId === "ventSensors") {
        return {
          ...state,
          pendingEvent: null,
          resources: {
            ...state.resources,
            stability: clamp(state.resources.stability - 4),
          },
          marks: {
            ...state.marks,
            shellStrain: clamp(state.marks.shellStrain + 2),
          },
          progression: {
            ...state.progression,
            stars: state.progression.stars + 2,
          },
          alert: A.sensorsVented,
          journal: pushJournal(state, J.sensorDistortion),
        };
      }

      return state;
    },
  },
];

export function applyStarholdEvents(state: StarholdState): StarholdState {
  if (!isDemoChapter(state)) {
    return state;
  }

  if (state.pendingEvent || (state.eventQuietTicks ?? 0) > 0) {
    return state;
  }

  if (state.repairChallenge.active) {
    return state;
  }

  if (state.avatarPrepArmedTick !== null && state.tick < state.avatarPrepArmedTick) {
    return state;
  }

  // Demo tutorial flow: during the first three waves, only the wave recovery prompt should appear.
  if (!state.avatarAwake && state.threatCycle > 0 && state.threatCycle <= 3 && state.avatarPrepArmedTick === null) {
    return state;
  }

  if (!state.avatarAwake && state.tick < SCRIPTED_PHASE_ONE_END_TICK) {
    if ((state.lastEventTick.powerFluctuation ?? -Infinity) < 0 && state.tick >= SCRIPTED_PHASE_ONE_EVENT_1_TICK) {
      const pendingEvent = STARHOLD_EVENTS.find((event) => event.id === "powerFluctuation")!.create(state);
      return {
        ...state,
        pendingEvent,
        alert: pendingEvent.title,
        lastEventTick: {
          ...state.lastEventTick,
          powerFluctuation: state.tick,
        },
      };
    }

    if ((state.lastEventTick.signalPulse ?? -Infinity) < 0 && state.tick >= SCRIPTED_PHASE_ONE_EVENT_2_TICK) {
      const pendingEvent = STARHOLD_EVENTS.find((event) => event.id === "signalPulse")!.create(state);
      return {
        ...state,
        pendingEvent,
        alert: pendingEvent.title,
        lastEventTick: {
          ...state.lastEventTick,
          signalPulse: state.tick,
        },
      };
    }

    return state;
  }

  const introWindow = state.phase === "boot" && state.tick < 90;
  const onboardingWindow = !state.avatarAwake && state.tick < 80;
  if (introWindow) {
    return state;
  }

  let nextState = state;

  for (const event of STARHOLD_EVENTS) {
    const lastTick = nextState.lastEventTick[event.id] ?? -Infinity;
    const effectiveMinTick = onboardingWindow ? event.minTick + 16 : event.minTick;
    if (nextState.tick < effectiveMinTick) continue;
    if (nextState.tick - lastTick < event.cooldown) continue;
    if (onboardingWindow && event.id !== "powerFluctuation" && event.id !== "materialBottleneck" && event.id !== "signalPulse") continue;
    if (!event.shouldTrigger(nextState)) continue;

    const pendingEvent = event.create(nextState);

    nextState = {
      ...nextState,
      pendingEvent,
      alert: pendingEvent.title,
      lastEventTick: {
        ...nextState.lastEventTick,
        [event.id]: nextState.tick,
      },
    };
    break;
  }

  return nextState;
}

export function resolveStarholdEvent(state: StarholdState, optionId: string): StarholdState {
  if (!state.pendingEvent) return state;

  const event = STARHOLD_EVENTS.find((entry) => entry.id === state.pendingEvent?.id);
  if (!event) {
    return {
      ...state,
      pendingEvent: null,
      eventQuietTicks: Math.max(state.eventQuietTicks ?? 0, state.tick < 80 ? 14 : 8),
    };
  }

  const nextState = event.resolve(state, optionId);
  if (nextState.pendingEvent === null) {
    const quietTicks = state.tick < 80 ? 14 : 8;
    const cooldownPadding = state.tick < 80 ? 18 : 10;
    return {
      ...nextState,
      lastEventTick: {
        ...nextState.lastEventTick,
        [event.id]: state.tick + Math.max(cooldownPadding, event.cooldown + (state.tick < 80 ? 8 : 2)),
      },
      eventQuietTicks: Math.max(nextState.eventQuietTicks ?? 0, quietTicks),
    };
  }
  return nextState;
}
