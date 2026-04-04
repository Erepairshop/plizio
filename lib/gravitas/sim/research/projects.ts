import type { ResearchProject, ResearchFieldId, ResearchTier } from "./types";
import type { GalaxyMaterialId } from "../../world/mission";

const MATS: GalaxyMaterialId[] = ["lumen_dust", "verdant_crystals", "aether_ore", "ember_shards", "sable_alloy", "rift_stone"];

function generateProjectsForField(fieldId: ResearchFieldId): ResearchProject[] {
  const projects: ResearchProject[] = [];
  const tiers: ResearchTier[] = [1, 2, 3, 4];
  
  const names: Record<ResearchFieldId, Record<number, string[]>> = {
    weapons: {
      1: ["Advanced Calibrations", "Garrison Expansion"],
      2: ["Plasma Chambers", "Assault Tactics"],
      3: ["Wraith Sabotage", "Modular Plating"],
      4: ["Void Cannon", "Annihilation Matrix"],
    },
    shields: {
      1: ["Hardened Shell", "Shield Overcharge"],
      2: ["Nanite Regen", "Reactive Plating"],
      3: ["Threat Dampening", "Fortification Network"],
      4: ["Absolute Barrier", "Aegis Core"],
    },
    logistics: {
      1: ["Supply Optimization", "Drone Thrusters"],
      2: ["Trade Algorithms", "Expansion Slot"],
      3: ["Repair Protocols", "Mining Deep-Scan"],
      4: ["Quantum Logistics", "Infinite Cargo"],
    },
    sensors: {
      1: ["Recon Uplink", "Intel Decryption"],
      2: ["Predictive Models", "Stealth Coating"],
      3: ["Deep Space Sonar", "Signal Optimization"],
      4: ["Omniscience", "Truth Eye"],
    },
    void: {
      1: ["Entropy Weaving", "Echo Resistance"],
      2: ["Resonance Focusing", "Anomaly Isolation"],
      3: ["Narrative Control", "Crisis Buffer"],
      4: ["Void Mastery", "Reality Anchor"],
    }
  };

  const effects: Record<ResearchFieldId, Record<number, any[]>> = {
    weapons: {
      1: [{ type: "statBoost", target: "battle.firepower", value: 10 }, { type: "statBoost", target: "garrison.capacity", value: 50 }],
      2: [{ type: "statBoost", target: "battle.firepower", value: 20 }, { type: "unlock", target: "tactic.assault", value: 1 }],
      3: [{ type: "statBoost", target: "wraith.sabotage", value: 30 }, { type: "modifier", target: "unit.upgradeCost", value: -20 }],
      4: [{ type: "unlock", target: "weapon.voidCannon", value: 1 }, { type: "statBoost", target: "battle.firepower", value: 40 }],
    },
    shields: {
      1: [{ type: "statBoost", target: "battle.armor", value: 15 }, { type: "statBoost", target: "battle.shield", value: 10 }],
      2: [{ type: "passive", target: "hull.regen", value: 1 }, { type: "passive", target: "shield.regen", value: 1 }],
      3: [{ type: "modifier", target: "threat.damage", value: -25 }, { type: "modifier", target: "fortify.cost", value: -30 }],
      4: [{ type: "unlock", target: "shield.absoluteBarrier", value: 1 }, { type: "statBoost", target: "battle.armor", value: 40 }],
    },
    logistics: {
      1: [{ type: "statBoost", target: "supply.flow", value: 20 }, { type: "statBoost", target: "drone.speed", value: 15 }],
      2: [{ type: "modifier", target: "trade.prices", value: -10 }, { type: "statBoost", target: "drone.slots", value: 1 }],
      3: [{ type: "statBoost", target: "repair.speed", value: 30 }, { type: "statBoost", target: "material.yield", value: 25 }],
      4: [{ type: "modifier", target: "upgrade.time", value: -40 }, { type: "statBoost", target: "supply.flow", value: 50 }],
    },
    sensors: {
      1: [{ type: "statBoost", target: "scout.speed", value: 25 }, { type: "statBoost", target: "intel.quality", value: 20 }],
      2: [{ type: "unlock", target: "threat.predictionAuto", value: 1 }, { type: "modifier", target: "espionage.exposure", value: -15 }],
      3: [{ type: "unlock", target: "galaxy.hiddenNodes", value: 1 }, { type: "modifier", target: "deepScan.cost", value: -50 }],
      4: [{ type: "unlock", target: "sensor.omniscience", value: 1 }, { type: "statBoost", target: "intel.quality", value: 50 }],
    },
    void: {
      1: [{ type: "modifier", target: "entropy.decay", value: 20 }, { type: "statBoost", target: "voidEcho.resistance", value: 10 }],
      2: [{ type: "statBoost", target: "resonance.efficiency", value: 30 }, { type: "modifier", target: "anomaly.duration", value: -40 }],
      3: [{ type: "unlock", target: "dilemma.extraOption", value: 1 }, { type: "statBoost", target: "crisis.threshold", value: 20 }],
      4: [{ type: "unlock", target: "void.mastery", value: 1 }, { type: "modifier", target: "entropy.decay", value: 50 }],
    }
  };

  for (const tier of tiers) {
    for (let i = 0; i < 2; i++) {
      const id = `${fieldId}_t${tier}_${i+1}`;
      const nameStr = names[fieldId]?.[tier]?.[i] ?? `Project ${id}`;
      const effect = effects[fieldId]?.[tier]?.[i] ?? { type: "statBoost", target: "unknown", value: 0 };
      
      const cost: Partial<Record<GalaxyMaterialId, number>> = {};
      cost[MATS[0]] = tier * 100 + i * 50;
      cost[MATS[tier]] = tier * 50;
      
      const prerequisites = [];
      if (tier > 1) {
        prerequisites.push(`${fieldId}_t${tier-1}_1`);
      }

      projects.push({
        id,
        fieldId,
        tier,
        name: { en: nameStr, hu: nameStr, de: nameStr, ro: nameStr },
        description: { en: `${nameStr} desc`, hu: `${nameStr} leírás`, de: `${nameStr} beschreibung`, ro: `${nameStr} descriere` },
        effect,
        prerequisites,
        materialCost: cost,
      });
    }
  }

  return projects;
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  ...generateProjectsForField("weapons"),
  ...generateProjectsForField("shields"),
  ...generateProjectsForField("logistics"),
  ...generateProjectsForField("sensors"),
  ...generateProjectsForField("void"),
];