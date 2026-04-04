import type { StarholdState } from "../types";
import type { ResearchState } from "./types";
import { RESEARCH_PROJECTS } from "./projects";
import { RESEARCH_CONFIG } from "../../economy";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import type { GalaxyMaterialId } from "../../world/mission";
import { pushJournal } from "../shared";

export function createInitialResearchState(discoveredFields: import("./types").ResearchFieldId[] = ["weapons", "shields"]): ResearchState {
  return {
    completed: [],
    active: null,
    discoveredFields,
  };
}

export function canResearch(state: StarholdState, projectId: string): boolean {
  if (state.research.active) return false;
  if (state.research.completed.includes(projectId)) return false;

  const project = RESEARCH_PROJECTS.find(p => p.id === projectId);
  if (!project) return false;

  if (!state.research.discoveredFields.includes(project.fieldId)) return false;

  const coreLevel = state.moduleLevels.core;
  const requiredCore = RESEARCH_CONFIG.tierUnlockCoreLevels[project.tier - 1];
  if (coreLevel < requiredCore) return false;

  for (const req of project.prerequisites) {
    if (!state.research.completed.includes(req)) return false;
  }

  const inventory = loadSavedGalaxyInventory();
  for (const [matId, amount] of Object.entries(project.materialCost)) {
    if (amount && (inventory[matId as GalaxyMaterialId] ?? 0) < amount) {
      return false;
    }
  }

  return true;
}

export function startResearch(state: StarholdState, projectId: string): StarholdState {
  if (!canResearch(state, projectId)) return state;

  const project = RESEARCH_PROJECTS.find(p => p.id === projectId);
  if (!project) return state;

  const inventory = loadSavedGalaxyInventory();
  for (const [matId, amount] of Object.entries(project.materialCost)) {
    if (amount) {
      inventory[matId as GalaxyMaterialId] -= amount;
    }
  }
  saveGalaxyInventory(inventory);

  const durationMs = RESEARCH_CONFIG.tierDurationMs[project.tier - 1];
  const now = Date.now();

  const text = {
    en: `Research started: ${project.name.en}`,
    hu: `Kutatás indítva: ${project.name.hu}`,
    de: `Forschung gestartet: ${project.name.de}`,
    ro: `Cercetare începută: ${project.name.ro}`,
  };

  return {
    ...state,
    research: {
      ...state.research,
      active: {
        projectId,
        startedAt: now,
        completesAt: now + durationMs,
      }
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function cancelResearch(state: StarholdState): StarholdState {
  if (!state.research.active) return state;
  
  const project = RESEARCH_PROJECTS.find(p => p.id === state.research.active!.projectId);
  if (project) {
    const inventory = loadSavedGalaxyInventory();
    for (const [matId, amount] of Object.entries(project.materialCost)) {
      if (amount) {
        inventory[matId as GalaxyMaterialId] += Math.floor(amount * 0.5); // 50% refund
      }
    }
    saveGalaxyInventory(inventory);
  }

  const text = {
    en: "Research cancelled. 50% materials refunded.",
    hu: "Kutatás megszakítva. 50% anyag visszatérítve.",
    de: "Forschung abgebrochen. 50% Materialien erstattet.",
    ro: "Cercetare anulată. 50% materiale rambursate.",
  };

  return {
    ...state,
    research: {
      ...state.research,
      active: null,
    },
    alert: text,
    journal: pushJournal(state, text),
  };
}

export function tickResearch(state: StarholdState): StarholdState {
  let nextState = state;
  let mutated = false;

  // Check discovery
  const config = RESEARCH_CONFIG.fieldDiscovery;
  if (!nextState.research.discoveredFields.includes("logistics")) {
    if (nextState.moduleLevels.logistics >= config.logistics.moduleLevel[1]) {
      nextState = {
        ...nextState,
        research: { ...nextState.research, discoveredFields: [...nextState.research.discoveredFields, "logistics"] }
      };
      mutated = true;
    }
  }
  if (!nextState.research.discoveredFields.includes("sensors")) {
    if (nextState.moduleLevels.sensor >= config.sensors.moduleLevel[1]) {
      nextState = {
        ...nextState,
        research: { ...nextState.research, discoveredFields: [...nextState.research.discoveredFields, "sensors"] }
      };
      mutated = true;
    }
  }
  if (!nextState.research.discoveredFields.includes("void")) {
    if (nextState.moduleLevels.core >= config.void.coreLevel && nextState.entropy >= config.void.entropyThreshold) {
      nextState = {
        ...nextState,
        research: { ...nextState.research, discoveredFields: [...nextState.research.discoveredFields, "void"] }
      };
      mutated = true;
    }
  }

  // Check completion
  if (nextState.research.active) {
    const now = Date.now();
    if (now >= nextState.research.active.completesAt) {
      const project = RESEARCH_PROJECTS.find(p => p.id === nextState.research.active!.projectId);
      nextState = {
        ...nextState,
        research: {
          ...nextState.research,
          completed: [...nextState.research.completed, nextState.research.active.projectId],
          active: null,
        }
      };
      if (project) {
        const text = {
          en: `Research completed: ${project.name.en}`,
          hu: `Kutatás befejezve: ${project.name.hu}`,
          de: `Forschung abgeschlossen: ${project.name.de}`,
          ro: `Cercetare finalizată: ${project.name.ro}`,
        };
        nextState = { ...nextState, alert: text, journal: pushJournal(nextState, text) };
      }
      mutated = true;
    }
  }

  return mutated ? nextState : state;
}

export function getResearchEffect(completed: string[], target: string): number {
  let total = 0;
  for (const pid of completed) {
    const p = RESEARCH_PROJECTS.find(x => x.id === pid);
    if (p && p.effect.target === target) {
      total += p.effect.value;
    }
  }
  return total;
}