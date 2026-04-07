import type { StarholdState, LocalizedString } from "../types";
import { pushJournal } from "../shared";
import { pushArchiveEvent } from "../archive/manager";
import { getRepairSlotCount } from "../repairbay";
import { evaluateSynergies } from "../synergy/evaluate";
import { SYNERGY_MAP } from "../synergy/registry";

export function tickUpgrades(state: StarholdState): StarholdState {
  if (state.upgradeQueue.length === 0) return state;
  const completed = state.upgradeQueue.filter(s => state.tick >= s.completesAtTick);
  if (completed.length === 0) return state;

  let nextLevels = { ...state.moduleLevels };
  let journal = state.journal;
  let alert: LocalizedString | null = null;
  let nextRepairBay = state.repairBay;

  for (const slot of completed) {
    nextLevels = { ...nextLevels, [slot.moduleId]: slot.targetLevel };
    if (slot.moduleId === "repairbay") {
      const slotCount = getRepairSlotCount(slot.targetLevel);
      const currentSlots = nextRepairBay.repairSlots.slice(0, slotCount);
      while (currentSlots.length < slotCount) currentSlots.push(null);
      nextRepairBay = {
        ...nextRepairBay,
        level: slot.targetLevel,
        repairSlots: currentSlots,
      };
    }
    const doneText: LocalizedString = {
      en: `${slot.moduleId} reached level ${slot.targetLevel}!`,
      hu: `${slot.moduleId} elérte a ${slot.targetLevel}. szintet!`,
      de: `${slot.moduleId} hat Level ${slot.targetLevel} erreicht!`,
      ro: `${slot.moduleId} a ajuns la nivelul ${slot.targetLevel}!`,
    };
    journal = pushJournal({ ...state, journal }, doneText);
    alert = doneText;

    state = pushArchiveEvent(state, {
      category: "unlock",
      severity: "success",
      importance: 4,
      title: { en: "Module Upgraded", hu: "Modul Fejlesztve", de: "Modul aktualisiert", ro: "Modul Îmbunătățit" },
      summary: doneText,
      details: {
        targetId: slot.moduleId,
      }
    });
  }

  let synergies = state.synergies;
  const newSynergies = evaluateSynergies(nextLevels, state.tick);
  
  const added = newSynergies.active.filter(id => !state.synergies.active.includes(id));
  if (added.length > 0) {
    synergies = newSynergies;
    for (const synId of added) {
      const def = SYNERGY_MAP[synId];
      if (def) {
        const discoverText: LocalizedString = {
          en: `Synergy discovered: "${def.name.en}" — ${def.description.en}`,
          hu: `Szinergia felfedezve: "${def.name.hu}" — ${def.description.hu}`,
          de: `Synergie entdeckt: "${def.name.de}" — ${def.description.de}`,
          ro: `Sinergie descoperită: "${def.name.ro}" — ${def.description.ro}`,
        };
        journal = pushJournal({ ...state, journal }, discoverText);
        alert = discoverText;

        state = pushArchiveEvent(state, {
          category: "unlock",
          severity: "success",
          importance: 5,
          title: { en: "Synergy Discovered", hu: "Szinergia Felfedezve", de: "Synergie entdeckt", ro: "Sinergie Descoperită" },
          summary: discoverText,
          details: {
            targetId: synId,
          }
        });
      }
    }
  }

  return {
    ...state,
    moduleLevels: nextLevels,
    repairBay: nextRepairBay,
    upgradeQueue: state.upgradeQueue.filter(s => state.tick < s.completesAtTick),
    journal,
    alert: alert ?? state.alert,
    synergies,
  };
}
