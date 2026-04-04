import type { StarholdState, LocalizedString } from "../types";
import type { DilemmaEvent, DilemmaChoice, DilemmaImmediateEffect, DilemmaDelayedEffect, DilemmaId } from "./types";
import { DILEMMA_DEFS, DILEMMA_MAP } from "./registry";
import { getDilemmaEffects } from "./effects";
import { applyReputationChange } from "../faction/reputation";
import { addResourceDelta, pushJournal } from "../shared";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";

export function selectRandomDilemma(state: StarholdState): DilemmaEvent | null {
  const eligible = DILEMMA_DEFS.filter(def => {
    // 1. Basic phase check
    if (def.requiredPhase && state.galaxyCycle.currentPhase !== def.requiredPhase) return false;

    // 2. Cooldown check
    const lastTime = state.dilemmaSystem.history.filter(h => h.dilemmaId === def.id).sort((a, b) => b.timestamp - a.timestamp)[0]?.timestamp || 0;
    if (Date.now() - lastTime < def.cooldownDays * 24 * 60 * 60 * 1000) return false;

    // 3. Rare check
    if (def.rare) {
      const currentMonth = new Date().getMonth();
      if (state.dilemmaSystem.lastRareMonth === currentMonth) return false;
    }

    // 4. Conditions check
    const cond = def.conditions;
    if (cond.minPlayDays && state.tick < cond.minPlayDays * 24 * 60) return false;
    if (cond.minModuleLevel) {
      for (const [modId, level] of Object.entries(cond.minModuleLevel)) {
        if ((state.moduleLevels as Record<string, number>)[modId] < (level ?? 0)) return false;
      }
    }
    if (cond.minResource) {
      for (const [resId, val] of Object.entries(cond.minResource)) {
        if ((state.resources as unknown as Record<string, number>)[resId] < (val ?? 0)) return false;
      }
    }
    if (cond.requirePreviousChoice) {
      const prev = state.dilemmaSystem.history.find(h => h.dilemmaId === cond.requirePreviousChoice!.dilemmaId);
      if (prev?.optionId !== cond.requirePreviousChoice!.optionId) return false;
    }

    // Special logic for specific IDs
    if (def.id === "reactor_overload" && state.modules.reactor.integrity >= 60) return false;
    if (def.id === "supply_crisis" && state.resources.supply >= 30) return false;
    if (def.id === "repair_accident") {
      const woundedCount = Object.values(state.repairBay.wounded).reduce((sum, list) => sum + list.length, 0);
      if (woundedCount === 0) return false;
    }

    return true;
  });

  if (eligible.length === 0) return null;
  return eligible[Math.floor(Math.random() * eligible.length)];
}

export function triggerDilemma(state: StarholdState, event: DilemmaEvent): StarholdState {
  // If faction is null but event expects it, pick a relevant one
  let factionId = event.factionId;
  if (!factionId && (event.id === "refugees" || event.id === "spy_offer")) {
    const factions: import("../faction/types").FactionId[] = ["korgath", "velari", "drex", "synthoid", "noma"];
    factionId = factions[Math.floor(Math.random() * factions.length)];
  }

  const localizedName = factionId ? {
    en: `${event.name.en} (${factionId})`,
    hu: `${event.name.hu} (${factionId})`,
    de: `${event.name.de} (${factionId})`,
    ro: `${event.name.ro} (${factionId})`,
  } : event.name;

  return {
    ...state,
    dilemmaSystem: {
      ...state.dilemmaSystem,
      activeDilemma: { event: { ...event, factionId, name: localizedName }, appearedAt: Date.now() },
    },
    alert: localizedName,
  };
}

export function resolveDilemma(state: StarholdState, optionId: string): StarholdState {
  const active = state.dilemmaSystem.activeDilemma;
  if (!active) return state;

  const { event } = active;
  const effects = getDilemmaEffects(event.id, optionId, event.factionId);

  let nextState = applyImmediateEffect(state, effects.immediate, event.factionId);

  const choice: DilemmaChoice = {
    dilemmaId: event.id,
    optionId,
    timestamp: Date.now(),
    factionId: event.factionId,
  };

  nextState = {
    ...nextState,
    dilemmaSystem: {
      ...nextState.dilemmaSystem,
      history: [...nextState.dilemmaSystem.history, choice],
      pendingEffects: [...nextState.dilemmaSystem.pendingEffects, ...effects.delayed],
      activeDilemma: null,
      lastDilemmaAt: Date.now(),
      lastRareMonth: event.rare ? new Date().getMonth() : nextState.dilemmaSystem.lastRareMonth,
    },
    journal: pushJournal(nextState, effects.journalText),
    alert: effects.journalText,
  };

  return nextState;
}

function applyImmediateEffect(state: StarholdState, effect: DilemmaImmediateEffect, factionId: import("../faction/types").FactionId | null): StarholdState {
  let nextState = state;

  // 1. Reputation
  if (effect.reputationChanges) {
    let nextRep = { ...state.factionReputation.reputation };
    for (const [fid, delta] of Object.entries(effect.reputationChanges)) {
      nextRep = applyReputationChange(nextRep, fid as any, delta as number, "event", state);
    }
    nextState = { ...nextState, factionReputation: { ...state.factionReputation, reputation: nextRep } };
  }

  // 2. Resources
  if (effect.resourceChanges) {
    const resDelta: Partial<Record<string, number>> = {};
    for (const [rid, delta] of Object.entries(effect.resourceChanges)) {
      if (rid.startsWith("moduleIntegrity_")) {
        const mid = rid.split("_")[1] as keyof typeof nextState.modules;
        if (nextState.modules[mid]) {
          nextState = {
            ...nextState,
            modules: {
              ...nextState.modules,
              [mid]: { ...nextState.modules[mid], integrity: Math.max(0, Math.min(100, nextState.modules[mid].integrity + (delta as number))) },
            },
          };
        }
      } else {
        resDelta[rid] = delta as number;
      }
    }
    if (Object.keys(resDelta).length > 0) {
      nextState = { ...nextState, resources: addResourceDelta(nextState.resources, resDelta as any) };
    }
  }

  // 3. Materials
  if (effect.materialChanges) {
    const inv = loadSavedGalaxyInventory();
    for (const [mid, delta] of Object.entries(effect.materialChanges)) {
      const key = mid as keyof typeof inv;
      inv[key] = Math.max(0, (inv[key] || 0) + (delta as number));
    }
    saveGalaxyInventory(inv);
  }

  // 4. Module offline
  if (effect.moduleOffline) {
    let mid = effect.moduleOffline.moduleId;
    if (mid === "random") {
      const ids: any[] = ["reactor", "logistics", "core", "sensor"];
      mid = ids[Math.floor(Math.random() * ids.length)];
    }
    const mKey = mid as keyof typeof nextState.modules;
    if (nextState.modules[mKey]) {
      nextState = {
        ...nextState,
        modules: {
          ...nextState.modules,
          [mKey]: { ...nextState.modules[mKey], online: false },
        },
      };
    }
  }

  return nextState;
}

export function tickDilemmaEffects(state: StarholdState): StarholdState {
  const now = Date.now();
  const pending = state.dilemmaSystem.pendingEffects;
  if (pending.length === 0) return state;

  const toTrigger = pending.filter(e => now >= e.triggerAt);
  if (toTrigger.length === 0) return state;

  let nextState = state;
  const stillPending = pending.filter(e => now < e.triggerAt);

  for (const delayed of toTrigger) {
    if (Math.random() < delayed.chance) {
      nextState = applyImmediateEffect(nextState, delayed.effect, null);
      
      // Special logic for specific delayed IDs
      if (delayed.id === "refugee_workers") {
        nextState = {
          ...nextState,
          synergies: {
            ...nextState.synergies,
            permanentDroneSpeedBoost: (nextState.synergies.permanentDroneSpeedBoost || 0) + 0.05,
          }
        };
      } else if (delayed.id === "refugee_revenge_trigger") {
        const revengeEvent = DILEMMA_MAP["refugee_revenge"];
        if (revengeEvent) nextState = triggerDilemma(nextState, revengeEvent);
      } else if (delayed.id === "double_play_fail") {
        const backfireEvent = DILEMMA_MAP["spy_backfire"];
        if (backfireEvent) nextState = triggerDilemma(nextState, backfireEvent);
      }

      nextState.journal = pushJournal(nextState, delayed.journalText);
      nextState.alert = delayed.journalText;
    }
  }

  return {
    ...nextState,
    dilemmaSystem: {
      ...nextState.dilemmaSystem,
      pendingEffects: stillPending,
    }
  };
}

export function tickDilemmaSpawn(state: StarholdState): StarholdState {
  const sys = state.dilemmaSystem;
  if (sys.activeDilemma) return state;

  const now = Date.now();
  // 1-3 days random gap
  const minGap = 1 * 24 * 60 * 60 * 1000;
  const maxGap = 3 * 24 * 60 * 60 * 1000;
  
  // Deterministic seed based on state.tick or just Math.random
  if (now - sys.lastDilemmaAt < minGap) return state;

  // Small chance every tick to spawn if gap is met
  const chance = 0.001; // Approx once per hour of ticks, but we want 1-3 days real time.
  // Actually, since this is called every tick (1s), 0.001 is too much.
  // Let's use a time-based threshold or a very small chance.
  if (Math.random() > 0.0005) return state;

  const event = selectRandomDilemma(state);
  if (!event) return state;

  return triggerDilemma(state, event);
}
