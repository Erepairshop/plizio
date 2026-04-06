import type { StarholdState } from "../types";
import type { ResearchState } from "./types";
import { RESEARCH_PROJECTS } from "./projects";
import { RESEARCH_CONFIG } from "../../economy";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import type { GalaxyMaterialId } from "../../world/mission";
import { pushJournal } from "../shared";
import { nextRandom } from "../rng";

export function createInitialResearchState(discoveredFields: import("./types").ResearchFieldId[] = ["weapons", "shields"]): ResearchState {
  return {
    completed: [],
    active: null,
    discoveredFields,
    unlockedTechs: [],
    calmProductionBuffs: 0,
  };
}

export function canResearch(state: StarholdState, projectId: string): boolean {
  if (state.research.active) return false;
  if (state.research.completed.includes(projectId)) return false;

  const project = RESEARCH_PROJECTS.find(p => p.id === projectId);
  if (!project) return false;

  if (!state.research.discoveredFields.includes(project.fieldId)) return false;

  const coreLevel = state.moduleLevels.core;
  const requiredCore = RESEARCH_CONFIG.tierUnlockCoreLevels[project.tier - 1] || 1; // fallback for tier 5
  if (coreLevel < requiredCore) return false;

  if (project.prerequisites.projects) {
    for (const req of project.prerequisites.projects) {
      if (!state.research.completed.includes(req)) return false;
    }
  }
  if (project.prerequisites.moduleLevels) {
    for (const [modId, level] of Object.entries(project.prerequisites.moduleLevels)) {
      if ((state.moduleLevels as Record<string, number>)[modId] < (level ?? 0)) return false;
    }
  }
  if (project.prerequisites.factionReputation) {
    for (const [facId, rep] of Object.entries(project.prerequisites.factionReputation)) {
      if ((state.factionReputation.reputation as Record<string, number>)[facId] < (rep ?? 0)) return false;
    }
  }
  if (project.prerequisites.resources) {
    for (const [resId, val] of Object.entries(project.prerequisites.resources)) {
      if ((state.resources as unknown as Record<string, number>)[resId] < (val ?? 0)) return false;
    }
  }

  const isBold = state.derived?.commanderBonuses.isBold;
  const isProtective = state.derived?.commanderBonuses.isProtective;

  const inventory = loadSavedGalaxyInventory();
  for (const [matId, baseAmount] of Object.entries(project.materialCost)) {
    if (baseAmount) {
      let amount = baseAmount;
      if (isBold && (project.fieldId === "logistics" || project.fieldId === "sensors")) {
        amount = Math.ceil(amount * 1.2);
      }
      if (isProtective && project.fieldId === "shields") {
        amount = Math.ceil(amount * 0.75);
      }
      if ((inventory[matId as GalaxyMaterialId] ?? 0) < amount) {
        return false;
      }
    }
  }

  return true;
}

export function startResearch(state: StarholdState, projectId: string): StarholdState {
  if (!canResearch(state, projectId)) return state;

  const project = RESEARCH_PROJECTS.find(p => p.id === projectId);
  if (!project) return state;

  const isCurious = !!state.battleState.avatarCombat.innateBonus?.intel;
  const isBold = state.derived?.commanderBonuses.isBold;
  const isProtective = state.derived?.commanderBonuses.isProtective;

  const hasLifeLossTrauma = project.prerequisites.trauma?.agentsLost || project.prerequisites.trauma?.expeditionCasualties;
  const protectiveDiscount = isProtective && hasLifeLossTrauma ? 0.5 : 1.0;

  const inventory = loadSavedGalaxyInventory();
  for (const [matId, baseAmount] of Object.entries(project.materialCost)) {
    if (baseAmount) {
      let amount = baseAmount;
      if (isBold && (project.fieldId === "logistics" || project.fieldId === "sensors")) {
        amount = Math.ceil(amount * 1.2);
      }
      if (isProtective && project.fieldId === "shields") {
        amount = Math.ceil(amount * 0.75);
      }
      amount = Math.ceil(amount * protectiveDiscount);
      inventory[matId as GalaxyMaterialId] -= amount;
    }
  }
  saveGalaxyInventory(inventory);

  let durationMs = project.baseDurationMs ?? RESEARCH_CONFIG.tierDurationMs[project.tier - 1] ?? (240 * 3600000); // default to long if not found
  
  if (isCurious) {
    durationMs = Math.ceil(durationMs * 0.8);
  }
  if (isBold && project.fieldId === "weapons") {
    durationMs = 0;
  }
  if (protectiveDiscount < 1.0) {
    durationMs = Math.ceil(durationMs * protectiveDiscount);
  }

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
    const isBold = state.derived?.commanderBonuses.isBold;
    const isProtective = state.derived?.commanderBonuses.isProtective;

    const hasLifeLossTrauma = project.prerequisites.trauma?.agentsLost || project.prerequisites.trauma?.expeditionCasualties;
    const protectiveDiscount = isProtective && hasLifeLossTrauma ? 0.5 : 1.0;

    const inventory = loadSavedGalaxyInventory();
    for (const [matId, baseAmount] of Object.entries(project.materialCost)) {
      if (baseAmount) {
        let amount = baseAmount;
        if (isBold && (project.fieldId === "logistics" || project.fieldId === "sensors")) {
          amount = Math.ceil(amount * 1.2);
        }
        if (isProtective && project.fieldId === "shields") {
          amount = Math.ceil(amount * 0.75);
        }
        amount = Math.ceil(amount * protectiveDiscount);
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
  if (!nextState.research.discoveredFields.includes("core")) {
    if (nextState.moduleLevels.core >= 10) {
      nextState = {
        ...nextState,
        research: { ...nextState.research, discoveredFields: [...nextState.research.discoveredFields, "core"] }
      };
      mutated = true;
    }
  }

  // Check completion
  if (nextState.research.active) {
    const now = Date.now();
    if (now >= nextState.research.active.completesAt) {
      const project = RESEARCH_PROJECTS.find(p => p.id === nextState.research.active!.projectId);
      
      if (project) {
        const isCurious = nextState.derived?.commanderBonuses.isCurious;
        const isCalm = nextState.derived?.commanderBonuses.isCalm;
        
        let currentRngState = nextState.globalRngState;

        // Is it experimental? (e.g. requires rift_stone)
        const isExperimental = !!project.materialCost["rift_stone"];

        let success = true;
        let text: any = {
          en: `Research completed: ${project.name.en}`,
          hu: `Kutatás befejezve: ${project.name.hu}`,
          de: `Forschung abgeschlossen: ${project.name.de}`,
          ro: `Cercetare finalizată: ${project.name.ro}`,
        };

        if (isExperimental) {
           const { value: rngVal, nextState: s1 } = nextRandom(currentRngState);
           currentRngState = s1;
           nextState.globalRngState = currentRngState;

           let breakthroughChance = 0.7;
           if (isCurious) breakthroughChance = 0.85;

           if (rngVal <= breakthroughChance) {
               // Breakthrough
               text = {
                 en: `Breakthrough! Research completed: ${project.name.en}`,
                 hu: `Áttörés! Kutatás befejezve: ${project.name.hu}`,
                 de: `Durchbruch! Forschung abgeschlossen: ${project.name.de}`,
                 ro: `Descoperire! Cercetare finalizată: ${project.name.ro}`,
               };
           } else {
               // Catastrophe
               success = false;
               text = {
                 en: `Catastrophe! Experimental research failed: ${project.name.en}`,
                 hu: `Katasztrófa! A kísérleti kutatás elbukott: ${project.name.hu}`,
                 de: `Katastrophe! Experimentelle Forschung fehlgeschlagen: ${project.name.de}`,
                 ro: `Catastrofă! Cercetarea experimentală a eșuat: ${project.name.ro}`,
               };
           }
        }

        if (success) {
            let nextUnlocked = [...nextState.research.unlockedTechs, project.id];
            let nextCompleted = [...nextState.research.completed, project.id];
            let nextCalmBuffs = nextState.research.calmProductionBuffs || 0;

            if (isCalm && (project.fieldId === "logistics" || project.fieldId === "sensors")) {
                nextCalmBuffs += 1;
            }

            nextState = {
              ...nextState,
              research: {
                ...nextState.research,
                completed: nextCompleted,
                unlockedTechs: nextUnlocked,
                active: null,
                calmProductionBuffs: nextCalmBuffs,
              }
            };
        } else {
            nextState = {
              ...nextState,
              research: {
                ...nextState.research,
                active: null,
              }
            };
        }

        nextState = { ...nextState, alert: text, journal: pushJournal(nextState, text) };
      } else {
        nextState = {
          ...nextState,
          research: { ...nextState.research, active: null }
        };
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
    if (p && p.effects) {
      for (const eff of p.effects) {
        if (eff.target === target) {
          total += eff.value;
        }
      }
    }
  }
  return total;
}