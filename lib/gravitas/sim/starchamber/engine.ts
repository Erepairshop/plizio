import type { StarholdState, LocalizedString } from "../types";
import { STAR_CHAMBER_ITEMS } from "./registry";
import { pushJournal, withAlert, addResourceDelta, clamp } from "../shared";
import { pushArchiveEvent } from "../archive/manager";

export function unlockStarChamberItem(state: StarholdState, itemId: string): StarholdState {
  const item = STAR_CHAMBER_ITEMS.find(i => i.id === itemId);
  if (!item) return state;

  if (state.starChamber.unlockedItemIds.includes(itemId)) {
    return withAlert(state, { en: "Item already unlocked.", hu: "Tétel már feloldva.", de: "Gegenstand bereits freigeschaltet.", ro: "Element deja deblocat." });
  }

  // Check requirements
  if (item.requirements) {
    if (item.requirements.coreLevel && state.moduleLevels.core < item.requirements.coreLevel) {
      return withAlert(state, { 
        en: `Core level ${item.requirements.coreLevel} required.`, 
        hu: `Mag szint ${item.requirements.coreLevel} szükséges.`, 
        de: `Kern-Level ${item.requirements.coreLevel} erforderlich.`, 
        ro: `Nivel nucleu ${item.requirements.coreLevel} necesar.` 
      });
    }
    if (item.requirements.completedResearch) {
      for (const resId of item.requirements.completedResearch) {
        if (!state.research.completed.includes(resId)) {
          return withAlert(state, { en: "Required research not completed.", hu: "Szükséges kutatás nincs befejezve.", de: "Erforderliche Forschung nicht abgeschlossen.", ro: "Cercetarea necesară nu este finalizată." });
        }
      }
    }
    if (item.requirements.milestoneId && !state.progression.completedMilestones.includes(item.requirements.milestoneId)) {
      return withAlert(state, { en: "Required milestone not reached.", hu: "Szükséges mérföldkő nincs elérve.", de: "Erforderlicher Meilenstein nicht erreicht.", ro: "Mérföldkő necesar neatins." });
    }
  }

  if (state.progression.stars < item.unlockStarCost) {
    return withAlert(state, { en: "Not enough stars.", hu: "Nincs elég csillag.", de: "Nicht genug Sterne.", ro: "Nu sunt destule stele." });
  }

  const nextState: StarholdState = {
    ...state,
    progression: {
      ...state.progression,
      stars: state.progression.stars - item.unlockStarCost,
    },
    starChamber: {
      ...state.starChamber,
      unlockedItemIds: [...state.starChamber.unlockedItemIds, itemId],
    }
  };

  const journalText: LocalizedString = {
    en: `Star Chamber: ${item.name.en} unlocked.`,
    hu: `Csillagkamra: ${item.name.hu} feloldva.`,
    de: `Sternenkammer: ${item.name.de} freigeschaltet.`,
    ro: `Camera Stelelor: ${item.name.ro} deblocat.`
  };

  return pushArchiveEvent(
    { ...nextState, journal: pushJournal(nextState, journalText), alert: journalText },
    {
      category: "unlock",
      severity: "success",
      importance: 4,
      title: { en: "Star Chamber Unlock", hu: "Csillagkamra Feloldás", de: "Sternenkammer-Freischaltung", ro: "Deblocare Camera Stelelor" },
      summary: journalText,
      details: { targetId: itemId }
    }
  );
}

export function activateStarChamberItem(state: StarholdState, itemId: string, targetId?: string): StarholdState {
  const item = STAR_CHAMBER_ITEMS.find(i => i.id === itemId);
  if (!item || item.isPassive) return state;

  if (!state.starChamber.unlockedItemIds.includes(itemId)) {
    return withAlert(state, { en: "Item not unlocked.", hu: "Tétel nincs feloldva.", de: "Gegenstand nicht freigeschaltet.", ro: "Element nedeblocat." });
  }

  const cooldownReadyAt = state.starChamber.itemCooldowns[itemId] || 0;
  if (state.tick < cooldownReadyAt) {
    return withAlert(state, { en: "System on cooldown.", hu: "Rendszer újratöltődik.", de: "System lädt auf.", ro: "Sistem în reîncărcare." });
  }

  // Check resource costs
  if (item.activationResourceCost) {
    for (const [resId, cost] of Object.entries(item.activationResourceCost)) {
      if ((state.resources as any)[resId] < (cost ?? 0)) {
        return withAlert(state, { en: `Not enough ${resId}.`, hu: `Nincs elég ${resId}.`, de: `Nicht genug ${resId}.`, ro: `Nu este destul ${resId}.` });
      }
    }
  }

  let nextState = state;

  // Deduct costs
  if (item.activationResourceCost) {
    const delta: any = {};
    for (const [resId, cost] of Object.entries(item.activationResourceCost)) {
      delta[resId] = -(cost ?? 0);
    }
    nextState.resources = addResourceDelta(nextState.resources, delta);
  }

  // Apply effects
  let effectApplied = false;
  let effectSummary: LocalizedString = { en: "", hu: "", de: "", ro: "" };

  switch (itemId) {
    case "phase_gate":
      // Logic for phase gate (teleport) would go here
      // For now, we just mark it as used
      effectApplied = true;
      effectSummary = { en: "Phase Gate stabilized. Fleet teleportation ready.", hu: "Fáziskapu stabilizálva. Flotta teleportáció kész.", de: "Phasentor stabilisiert. Flottenteleportation bereit.", ro: "Poarta de Fază stabilizată. Teleportarea flotei gata." };
      break;
    case "repair_burst":
      const nextModules = { ...nextState.modules };
      Object.keys(nextModules).forEach(id => {
        const m = nextModules[id as keyof typeof nextModules];
        nextModules[id as keyof typeof nextModules] = { ...m, integrity: clamp(m.integrity + 15) };
      });
      nextState.modules = nextModules;
      effectApplied = true;
      effectSummary = { en: "Repair Burst completed. All modules reinforced.", hu: "Javító Hullám befejezve. Minden modul megerősítve.", de: "Reparaturstoß abgeschlossen. Alle Module verstärkt.", ro: "Impuls de Reparație finalizat. Toate modulele consolidate." };
      break;
    case "shield_rebuild":
      nextState.resources.shield = clamp(nextState.resources.shield + 50);
      effectApplied = true;
      effectSummary = { en: "Shield Rebuild successful. Station defenses restored.", hu: "Pajzs Újjáépítés sikeres. Állomás védelme helyreállt.", de: "Schildwiederaufbau erfolgreich. Stationsverteidigung wiederhergestellt.", ro: "Reconstrucție Scut reușită. Apărarea stației restaurată." };
      break;
    case "void_echo_purge":
      nextState.marks.voidEcho = 0;
      nextState.entropy = clamp(nextState.entropy - 10);
      effectApplied = true;
      effectSummary = { en: "Void Echoes purged. Station grid stabilized.", hu: "Void Visszhangok tisztítva. Állomás hálózata stabilizálva.", de: "Void-Echos gelöscht. Stationsnetz stabilisiert.", ro: "Ecouri Void purjate. Rețeaua stației stabilizată." };
      break;
    case "chrono_core":
      // Chrono Core logic: accelerate all timers
      const accelerationTicks = 1800; // 30 mins
      nextState = {
        ...nextState,
        upgradeQueue: nextState.upgradeQueue.map(u => ({ ...u, completesAtTick: Math.max(nextState.tick, u.completesAtTick - accelerationTicks) })),
        research: {
          ...nextState.research,
          active: nextState.research.active ? { ...nextState.research.active, completesAtTick: Math.max(nextState.tick, nextState.research.active.completesAtTick - accelerationTicks) } : null
        },
        galaxy: {
          ...nextState.galaxy,
          activeFleets: nextState.galaxy.activeFleets.map(f => ({ ...f, arrivalTime: Math.max(nextState.tick, f.arrivalTime - accelerationTicks) }))
        }
      };
      effectApplied = true;
      effectSummary = { en: "Chrono Core Overdrive: Time streams accelerated.", hu: "Chrono Mag Túlhajtás: Időfolyamok felgyorsítva.", de: "Chrono-Kern-Overdrive: Zeitströme beschleunigt.", ro: "Suprasolicitare Chrono: Fluxurile temporale accelerate." };
      break;
    default:
      effectApplied = true;
      effectSummary = { en: "System activated.", hu: "Rendszer aktiválva.", de: "System aktiviert.", ro: "Sistem activat." };
  }

  if (effectApplied) {
    // Set cooldown
    if (item.cooldownTicks) {
      nextState.starChamber.itemCooldowns[itemId] = nextState.tick + item.cooldownTicks;
    }

    nextState.journal = pushJournal(nextState, effectSummary);
    nextState.alert = effectSummary;

    return pushArchiveEvent(nextState, {
      category: "system",
      severity: "info",
      importance: 3,
      title: item.name,
      summary: effectSummary,
      details: { targetId: itemId }
    });
  }

  return nextState;
}
