import type { StarholdState, LocalizedString, AvatarTraitId, StarholdAvatarAnswer, StarholdAvatarProfile, StarholdPendingEvent } from "../types";
import { GRAVITAS_TEXT } from "../content";

const T = GRAVITAS_TEXT.events;

export const AVATAR_TRAIT_TITLES: Record<AvatarTraitId, LocalizedString> = {
  calm: { en: "Calm frame", hu: "Nyugodt keret", de: "Ruhiger Rahmen", ro: "Cadru calm" },
  curious: { en: "Curious frame", hu: "Kíváncsi keret", de: "Neugieriger Rahmen", ro: "Cadru curios" },
  protective: { en: "Protective frame", hu: "Védelmező keret", de: "Beschützender Rahmen", ro: "Cadru protector" },
  bold: { en: "Bold frame", hu: "Bátor keret", de: "Mutiger Rahmen", ro: "Cadru îndrăzneț" },
};

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

export function createAvatarProfile(answers: StarholdAvatarAnswer[], completedAtTick: number): StarholdAvatarProfile {
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

export function appendAvatarAnswer(state: StarholdState, answer: StarholdAvatarAnswer): StarholdState {
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
