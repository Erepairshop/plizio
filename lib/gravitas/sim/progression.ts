import type { StarholdState, LocalizedString } from "./types";
import { pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";

export interface StarholdMilestone {
  id: string;
  label: LocalizedString;
  check: (state: StarholdState) => boolean;
  rewardStars: number;
}

export const STARHOLD_MILESTONES: StarholdMilestone[] = [
  {
    id: "first_activation",
    label: {
      en: "First Contact: Reached 25% activation.",
      hu: "Első kapcsolat: Elérted a 25% aktiválást.",
      de: "Erster Kontakt: 25% Aktivierung erreicht.",
      ro: "Primul contact: 25% activare atinsă.",
    },
    check: (state) => state.resources.activation >= 25,
    rewardStars: 1,
  },
  {
    id: "halfway_there",
    label: {
      en: "Midpoint: Reached 50% activation.",
      hu: "Félúton: Elérted az 50% aktiválást.",
      de: "Halbzeit: 50% Aktivierung erreicht.",
      ro: "La jumătate: 50% activare atinsă.",
    },
    check: (state) => state.resources.activation >= 50,
    rewardStars: 2,
  },
  {
    id: "awakened_avatar",
    label: {
      en: "Life Spark: Avatar fully awakened.",
      hu: "Életszikra: Az avatár teljesen felébredt.",
      de: "Lebensfunke: Avatar vollständig erwacht.",
      ro: "Scânteie de viață: Avatar complet trezit.",
    },
    check: (state) => state.avatarAwake,
    rewardStars: 5,
  },
  {
    id: "stable_foundation",
    label: {
      en: "Stability Master: Reached 80% stability.",
      hu: "Stabilitás mester: Elérted a 80% stabilitást.",
      de: "Stabilitätsmeister: 80% Stabilität erreicht.",
      ro: "Maestru stabilității: 80% stabilitate atinsă.",
    },
    check: (state) => state.resources.stability >= 80,
    rewardStars: 3,
  },
];

export interface StarholdShopItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  cost: number;
  type: "cosmetic" | "utility";
}

export const STARHOLD_SHOP_ITEMS: StarholdShopItem[] = [
  {
    id: "cyan_glow",
    name: { en: "Cyan Resonance", hu: "Cián rezonancia", de: "Cyan-Resonanz", ro: "Rezonanță cian" },
    description: { en: "Changes core pulse to deep cyan.", hu: "A mag pulzusát mélyciánra váltja.", de: "Ändert Kernpuls zu tiefem Cyan.", ro: "Schimbă pulsul nucleului în cian profund." },
    cost: 5,
    type: "cosmetic",
  },
  {
    id: "shield_efficiency",
    name: { en: "Shield Buffer", hu: "Pajzs puffer", de: "Schildpuffer", ro: "Tampon scut" },
    description: { en: "Reduces shell strain from impacts by 1.", hu: "Csökkenti a becsapódásokból eredő vázfeszülést 1-gyel.", de: "Senkt Hüllenspannung bei Einschlägen um 1.", ro: "Reduce tensiunea corpului la impact cu 1." },
    cost: 10,
    type: "utility",
  },
];

export function checkStarholdMilestones(state: StarholdState): StarholdState {
  let nextState = state;
  const currentCompleted = new Set(state.progression.completedMilestones);
  const ui = GRAVITAS_TEXT.ui;

  for (const milestone of STARHOLD_MILESTONES) {
    if (!currentCompleted.has(milestone.id) && milestone.check(state)) {
      const alertLine: LocalizedString = {
        en: `${ui.milestoneReached.en}: ${milestone.label.en}`,
        hu: `${ui.milestoneReached.hu}: ${milestone.label.hu}`,
        de: `${ui.milestoneReached.de}: ${milestone.label.de}`,
        ro: `${ui.milestoneReached.ro}: ${milestone.label.ro}`,
      };

      nextState = {
        ...nextState,
        progression: {
          ...nextState.progression,
          stars: nextState.progression.stars + milestone.rewardStars,
          completedMilestones: [...nextState.progression.completedMilestones, milestone.id],
        },
        alert: alertLine,
        journal: pushJournal(nextState, milestone.label),
      };
    }
  }

  return nextState;
}

export function buyStarholdItem(state: StarholdState, itemId: string): StarholdState {
  const item = STARHOLD_SHOP_ITEMS.find(i => i.id === itemId);
  if (!item || state.progression.stars < item.cost || state.progression.unlockedItems.includes(itemId)) {
    return state;
  }

  const ui = GRAVITAS_TEXT.ui;
  const unlockAlert: LocalizedString = {
    en: `${ui.itemUnlocked.en}: ${item.name.en}`,
    hu: `${ui.itemUnlocked.hu}: ${item.name.hu}`,
    de: `${ui.itemUnlocked.de}: ${item.name.de}`,
    ro: `${ui.itemUnlocked.ro}: ${item.name.ro}`,
  };

  const journalLine: LocalizedString = {
    en: `${ui.newEquipment.en}: ${item.name.en}`,
    hu: `${ui.newEquipment.hu}: ${item.name.hu}`,
    de: `${ui.newEquipment.de}: ${item.name.de}`,
    ro: `${ui.newEquipment.ro}: ${item.name.ro}`,
  };

  return {
    ...state,
    progression: {
      ...state.progression,
      stars: state.progression.stars - item.cost,
      unlockedItems: [...state.progression.unlockedItems, itemId],
    },
    alert: unlockAlert,
    journal: pushJournal(state, journalLine),
  };
}
