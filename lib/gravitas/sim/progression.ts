import type { StarholdState, LocalizedString } from "./types";
import { pushJournal } from "./shared";
import { GRAVITAS_TEXT } from "./content";

export interface StarholdMilestone {
  id: string;
  label: LocalizedString;
  check: (state: StarholdState) => boolean;
  rewardStars: number;
  getProgress?: (state: StarholdState) => number;
}

export const STARHOLD_MILESTONES: StarholdMilestone[] = [
  {
    id: "first_activation",
    label: { en: "Spark of Life", hu: "Az élet szikrája", de: "Funke des Lebens", ro: "Scânteia vieții" },
    rewardStars: 3,
    check: (s) => s.resources.activation >= 25,
    getProgress: (s) => Math.min(100, (s.resources.activation / 25) * 100),
  },
  {
    id: "halfway_there",
    label: { en: "Dimensional Anchor", hu: "Dimenziós horgony", de: "Dimensionsanker", ro: "Ancoră dimensională" },
    rewardStars: 5,
    check: (s) => s.resources.activation >= 50,
    getProgress: (s) => Math.min(100, (s.resources.activation / 50) * 100),
  },
  {
    id: "survivor_3",
    label: { en: "Void Survivor", hu: "Void túlélő", de: "Void-Überlebender", ro: "Supraviețuitor Void" },
    rewardStars: 2,
    check: (s) => s.threatCycle >= 3,
    getProgress: (s) => Math.min(100, (s.threatCycle / 3) * 100),
  },
  {
    id: "survivor_7",
    label: { en: "Eternal Station", hu: "Örök állomás", de: "Ewige Station", ro: "Stație eternă" },
    rewardStars: 3,
    check: (s) => s.threatCycle >= 7,
    getProgress: (s) => Math.min(100, (s.threatCycle / 7) * 100),
  },
  {
    id: "entropy_master",
    label: { en: "Entropy Master", hu: "Entrópia mester", de: "Entropie-Meister", ro: "Maestru Entropie" },
    rewardStars: 3,
    check: (s) => s.lowEntropyStreak >= 50,
    getProgress: (s) => Math.min(100, (s.lowEntropyStreak / 50) * 100),
  },
  {
    id: "full_grid",
    label: { en: "Perfect Synchronization", hu: "Tökéletes szinkron", de: "Perfekte Synchronisation", ro: "Sincronizare perfectă" },
    rewardStars: 2,
    check: (s) => Object.values(s.modules).every(m => m.online && m.integrity > 80),
    getProgress: (s) => {
      const healthyCount = Object.values(s.modules).filter(m => m.online && m.integrity > 80).length;
      return (healthyCount / 4) * 100;
    },
  },
  {
    id: "crisis_escape",
    label: { en: "Back from the Brink", hu: "A szakadék széléről", de: "Vom Abgrund zurück", ro: "Înapoi de pe marginea prăpastiei" },
    rewardStars: 2,
    check: (s) => s.wasCrisis && !s.crisis,
    getProgress: (s) => (s.wasCrisis && !s.crisis) ? 100 : 0,
  },
  {
    id: "marks_zero",
    label: { en: "Perfect Harmony", hu: "Tökéletes harmónia", de: "Perfekte Harmonie", ro: "Harmonie perfectă" },
    rewardStars: 4,
    check: (s) => (s.marks.reactorScar + s.marks.shellStrain + s.marks.supplyStress + s.marks.voidEcho) === 0 && s.tick > 10,
    getProgress: (s) => {
      const totalMarks = s.marks.reactorScar + s.marks.shellStrain + s.marks.supplyStress + s.marks.voidEcho;
      return totalMarks === 0 ? 100 : Math.max(0, 100 - totalMarks * 5);
    },
  },
  {
    id: "overload_survive",
    label: { en: "Maximum Overdrive", hu: "Maximális túlhajtás", de: "Maximaler Overdrive", ro: "Suprasolicitare maximă" },
    rewardStars: 1,
    check: (s) => Object.values(s.modules).some(m => m.load > 95 && m.integrity > 0),
    getProgress: (s) => Math.min(100, (Math.max(...Object.values(s.modules).map(m => m.load)) / 95) * 100),
  },
  {
    id: "pulse_master",
    label: { en: "Avatar Pulse Master", hu: "Avatár impulzus mester", de: "Avatar-Puls Meister", ro: "Maestru Puls Avatar" },
    rewardStars: 2,
    check: (s) => s.avatarPulseCount >= 5,
    getProgress: (s) => Math.min(100, (s.avatarPulseCount / 5) * 100),
  },
  {
    id: "speed_activate",
    label: { en: "Quick Awakening", hu: "Gyors ébredés", de: "Schnelles Erwachen", ro: "Trezire rapidă" },
    rewardStars: 5,
    check: (s) => s.phase === "awakened" && s.tick <= 200,
    getProgress: (s) => s.phase === "awakened" ? (s.tick <= 200 ? 100 : 0) : Math.min(100, (s.resources.activation / 100) * 100),
  },
  {
    id: "iron_station",
    label: { en: "Iron Station", hu: "Vasállomás", de: "Eisenstation", ro: "Stație de fier" },
    rewardStars: 3,
    check: (s) => s.highStabilityStreak >= 30,
    getProgress: (s) => Math.min(100, (s.highStabilityStreak / 30) * 100),
  },
  {
    id: "deep_scavenger",
    label: { en: "Deep Scavenger", hu: "Mély gyűjtögető", de: "Tiefensammler", ro: "Recuperator profund" },
    rewardStars: 2,
    check: (s) => s.resources.supply >= 80,
    getProgress: (s) => Math.min(100, (s.resources.supply / 80) * 100),
  },
  {
    id: "power_grid",
    label: { en: "High Voltage", hu: "Magasfeszültség", de: "Hochspannung", ro: "Înaltă tensiune" },
    rewardStars: 2,
    check: (s) => s.resources.power >= 90,
    getProgress: (s) => Math.min(100, (s.resources.power / 90) * 100),
  },
  {
    id: "stability_wall",
    label: { en: "Immovable", hu: "Mozdíthatatlan", de: "Unbeweglich", ro: "De neclintit" },
    rewardStars: 2,
    check: (s) => s.resources.stability >= 95,
    getProgress: (s) => Math.min(100, (s.resources.stability / 95) * 100),
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
    id: "shield_efficiency",
    name: { en: "Shield Buffer", hu: "Pajzs puffer", de: "Schildpuffer", ro: "Tampon scut" },
    description: { en: "Reduces shell strain from impacts by 1.", hu: "Csökkenti a becsapódásokból eredő vázfeszülést 1-gyel.", de: "Senkt Hüllenspannung bei Einschlägen um 1.", ro: "Reduce tensiunea corpului la impact cu 1." },
    cost: 5,
    type: "utility",
  },
  {
    id: "threat_predictor",
    name: { en: "Threat Predictor", hu: "Veszély-előrejelző", de: "Bedrohungsprognose", ro: "Predictor de amenințări" },
    description: { en: "Always shows the threat timer, even when far away.", hu: "Mindig mutatja a fenyegetés idejét, távolról is.", de: "Zeigt den Bedrohungstimer immer an, auch aus der Ferne.", ro: "Afișează întotdeauna cronometrul amenințării." },
    cost: 10,
    type: "utility",
  },
  {
    id: "auto_salvage",
    name: { en: "Auto-Salvage Unit", hu: "Automata gyűjtő", de: "Auto-Bergungseinheit", ro: "Unitate auto-recuperare" },
    description: { en: "Automatically generates +1 materials every 10 ticks.", hu: "Minden 10. körben automatikusan +1 anyagot termel.", de: "Generiert alle 10 Ticks automatisch +1 Material.", ro: "Generează automat +1 materiale la fiecare 10 secunde." },
    cost: 15,
    type: "utility",
  },
  {
    id: "entropy_dampener",
    name: { en: "Entropy Dampener", hu: "Entrópia-csillapító", de: "Entropiedämpfer", ro: "Amortizor de entropie" },
    description: { en: "Slows down entropy growth by 25%.", hu: "25%-kal lassítja az entrópiaszint növekedését.", de: "Verlangsamt das Entropiewachstum um 25%.", ro: "Încetinește creșterea entropiei cu 25%." },
    cost: 8,
    type: "utility",
  },
  {
    id: "mark_shield",
    name: { en: "Mark Shield", hu: "Nyompajzs", de: "Spurenschild", ro: "Scut de marcaje" },
    description: { en: "Reduces mark gain after threat impact by 1.", hu: "1-gyel csökkenti a nyomok növekedését becsapódás után.", de: "Reduziert den Spurenzuwachs nach Einschlägen um 1.", ro: "Reduce acumularea de marcaje după impact cu 1." },
    cost: 12,
    type: "utility",
  },
  {
    id: "module_coolant",
    name: { en: "Advanced Coolant", hu: "Fejlett hűtőfolyadék", de: "Fortschrittliches Kühlmittel", ro: "Lichid de răcire avansat" },
    description: { en: "Module load cools down twice as fast.", hu: "A modulok terhelése kétszer gyorsabban hűl le.", de: "Modullast kühlt doppelt so schnell ab.", ro: "Sarcina modulului se răcește de două ori más repede." },
    cost: 6,
    type: "utility",
  },
  {
    id: "resonance_amplifier",
    name: { en: "Resonance Amplifier", hu: "Rezonancia-erősítő", de: "Resonanzverstärker", ro: "Amplificator de rezonanță" },
    description: { en: "Increases activation transfer speed by 30%.", hu: "30%-kal növeli az aktiválási átvitel sebességét.", de: "Erhöht die Aktivierungsübertragungsgeschwindigkeit um 30%.", ro: "Crește viteza de transfer de activare cu 30%." },
    cost: 15,
    type: "utility",
  },
  {
    id: "void_lens",
    name: { en: "Void Lens", hu: "Void lencse", de: "Void-Linse", ro: "Lentilă Void" },
    description: { en: "Void Echo marks decay twice as fast.", hu: "A Void visszhang (void echo) nyomok kétszer gyorsabban tűnnek el.", de: "Void-Echo-Spuren zerfallen doppelt so schnell.", ro: "Marcajele Ecou Void se degradează de două ori más repede." },
    cost: 10,
    type: "utility",
  },
  {
    id: "cyan_glow",
    name: { en: "Cyan Resonance", hu: "Cián rezonancia", de: "Cyan-Resonanz", ro: "Rezonanță cian" },
    description: { en: "Changes core pulse to deep cyan.", hu: "A mag pulzusát mélyciánra váltja.", de: "Ändert Kernpuls zu tiefem Cyan.", ro: "Schimbă pulsul nucleului în cian profund." },
    cost: 5,
    type: "cosmetic",
  },
  {
    id: "station_paint_gold",
    name: { en: "Golden Hull", hu: "Arany burkolat", de: "Goldene Hülle", ro: "Carcasă aurie" },
    description: { en: "A cosmetic golden trim for your station view.", hu: "Kozmetikai arany díszítés az állomás nézethez.", de: "Ein kosmetischer Goldrand für deine Stationsansicht.", ro: "Un ornament auriu cosmetic pentru vederea stației." },
    cost: 20,
    type: "cosmetic",
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
          completedMilestones: [...nextState.progression.completedMilestones, milestone.id],
          unclaimedMilestones: [...nextState.progression.unclaimedMilestones, milestone.id],
        },
        alert: alertLine,
        journal: pushJournal(nextState, milestone.label),
      };
    }
  }

  return nextState;
}

export function claimStarholdMilestone(state: StarholdState, milestoneId: string): StarholdState {
  if (!state.progression.unclaimedMilestones.includes(milestoneId)) {
    return state;
  }

  const milestone = STARHOLD_MILESTONES.find(m => m.id === milestoneId);
  if (!milestone) return state;

  return {
    ...state,
    progression: {
      ...state.progression,
      stars: state.progression.stars + milestone.rewardStars,
      lastStarGain: milestone.rewardStars,
      unclaimedMilestones: state.progression.unclaimedMilestones.filter(id => id !== milestoneId),
    },
    alert: {
      en: `Reward claimed: +${milestone.rewardStars} Stars`,
      hu: `Jutalom begyűjtve: +${milestone.rewardStars} Csillag`,
      de: `Belohnung erhalten: +${milestone.rewardStars} Sterne`,
      ro: `Recompensă colectată: +${milestone.rewardStars} Stele`
    },
  };
}

export function buyStarholdItem(state: StarholdState, itemId: string): StarholdState {
  if (itemId === "__FIRST_LOOP_ACK__") {
    return { ...state, firstLoopShown: true };
  }
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

export function addExperience(state: StarholdState, amount: number): StarholdState {
  if (state.level >= 25) return state;

  let nextState = { ...state };
  nextState.experience += amount;

  let mutated = false;
  let leveledUp = false;

  while (nextState.level < 25) {
    const requiredXp = nextState.level * nextState.level * 1000;
    if (nextState.experience >= requiredXp) {
      nextState.experience -= requiredXp;
      nextState.level += 1;
      mutated = true;
      leveledUp = true;
    } else {
      break;
    }
  }

  if (nextState.level >= 25 && !nextState.endgame.isZenithUnlocked) {
    nextState.endgame = {
      ...nextState.endgame,
      isZenithUnlocked: true,
    };
    nextState.journal = pushJournal(nextState, {
      en: "Maximum level reached. The Zenith Protocol is now unlocked.",
      hu: "Maximális szint elérve. A Zenit Protokoll feloldva.",
      de: "Maximales Level erreicht. Das Zenith-Protokoll ist nun entsperrt.",
      ro: "Nivel maxim atins. Protocolul Zenit este acum deblocat."
    });
    mutated = true;
  }

  if (leveledUp) {
    const alertMsg = {
      en: `Level Up! You are now level ${nextState.level}.`,
      hu: `Szintlépés! A szinted mostantól ${nextState.level}.`,
      de: `Levelaufstieg! Du bist jetzt Level ${nextState.level}.`,
      ro: `Creștere în nivel! Acum ești la nivelul ${nextState.level}.`
    };
    nextState.alert = alertMsg;
    nextState.journal = pushJournal(nextState, alertMsg);
  }

  return mutated ? nextState : { ...state, experience: nextState.experience };
}
