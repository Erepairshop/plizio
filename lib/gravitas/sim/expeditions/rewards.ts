import type { StarholdState, LocalizedString } from "../types";
import type { ActiveExpedition, ExpeditionRouteProfile, ExpeditionCrewProfile } from "./types";
import type { GalaxyMaterialId } from "../../world/mission";
import { loadSavedGalaxyInventory, saveGalaxyInventory } from "../../world/mission";
import { applyReputationChange } from "../faction/reputation";
import { pushJournal } from "../shared";
import { getRouteLootMultiplier } from "./logic";
import { getResearchEffect } from "../research/engine";
import { nextRandom, randomInt } from "../rng";

export function giveExpeditionRewards(
  state: StarholdState,
  exp: ActiveExpedition
): { nextState: StarholdState; journalEntries: LocalizedString[] } {
  let nextState = state;
  let currentRngState = state.globalRngState;
  const journalEntries: LocalizedString[] = [];

  const lootBoost = getResearchEffect(state.research.completed, "expedition.lootChance") / 100;
  const rareBoost = getResearchEffect(state.research.completed, "expedition.rareChance") / 100;

  const breakdown: import("./types").ExpeditionRewardBreakdown = {
    baseLoot: {},
    routeBonusMult: getRouteLootMultiplier(exp.routeProfile) * (1 + lootBoost),
    crewBonusMult: 1.0,
    durationBonusMult: 1.0,
    intelBonusAmount: exp.loot.intel || 0,
    riskPenaltyMult: exp.recalled ? 0.4 : 1.0, // Significant penalty for recalling
    finalLoot: {},
  };

  if (exp.crewProfile === "support_heavy") breakdown.crewBonusMult = 1.15;
  if (exp.crewProfile === "scout_heavy") breakdown.crewBonusMult = 1.05;

  const totalMultiplier = breakdown.routeBonusMult * breakdown.crewBonusMult * breakdown.durationBonusMult * breakdown.riskPenaltyMult;

  // Base resources (intel & supply are already accumulated in exp.loot during events)
  if (exp.loot.intel) {
    nextState = {
      ...nextState,
      resources: {
        ...nextState.resources,
        activation: Math.min(100, nextState.resources.activation + exp.loot.intel)
      }
    };
    breakdown.finalLoot.intel = exp.loot.intel;
  }
  if (exp.loot.supply) {
    const supplyGained = Math.floor(exp.loot.supply * totalMultiplier);
    nextState = {
      ...nextState,
      resources: {
        ...nextState.resources,
        supply: nextState.resources.supply + supplyGained
      }
    };
    breakdown.baseLoot.supply = exp.loot.supply;
    breakdown.finalLoot.supply = supplyGained;
  }

  // Determine rare material / artifact rewards based on route and crew
  const inventory = loadSavedGalaxyInventory();
  let materialsGained = false;

  // Base materials for finishing
  if (exp.routeProfile !== "safe" && !exp.recalled) {
    const { value: rBase, nextState: sBase } = nextRandom(currentRngState);
    currentRngState = sBase;
    const baseMatRoll = Math.floor(rBase * 100);
    if (baseMatRoll > 0) {
      breakdown.baseLoot.lumen_dust = baseMatRoll;
      breakdown.baseLoot.verdant_crystals = Math.floor(baseMatRoll * 0.8);

      const lumenGained = Math.floor(baseMatRoll * totalMultiplier);
      const verdantGained = Math.floor(Math.floor(baseMatRoll * 0.8) * totalMultiplier);

      inventory.lumen_dust = (inventory.lumen_dust || 0) + lumenGained;
      inventory.verdant_crystals = (inventory.verdant_crystals || 0) + verdantGained;

      breakdown.finalLoot.lumen_dust = lumenGained;
      breakdown.finalLoot.verdant_crystals = verdantGained;
      materialsGained = true;
    }
  }

  // Rare materials chance
  let rareChance = exp.routeProfile === "black_route" ? 0.8 :
                   exp.routeProfile === "deep_space" ? 0.4 :
                   exp.routeProfile === "risky" ? 0.2 : 0.05;
  
  rareChance += rareBoost;
  if (exp.crewProfile === "support_heavy") rareChance += 0.1; // Better at salvaging
  
  // Avatar reckless effect
  const isReckless = !!state.battleState.avatarCombat.innateBonus?.tactics;
  if (isReckless && exp.routeProfile === "black_route") {
    rareChance += 0.1;
  }

  if (exp.recalled) rareChance *= 0.1; // Almost impossible to get rare loot if recalled

  const { value: rRare, nextState: sRare } = nextRandom(currentRngState);
  currentRngState = sRare;

  if (rRare < rareChance) {
    const { value: rAmt, nextState: sAmt } = nextRandom(currentRngState);
    currentRngState = sAmt;
    const amountRaw = Math.floor(rAmt * 30) + 10;
    const amount = Math.max(1, Math.floor(amountRaw * totalMultiplier));
    
    const { value: rType, nextState: sType } = nextRandom(currentRngState);
    currentRngState = sType;
    const rareType = rType > 0.5 ? "rift_stone" : "sable_alloy";
    inventory[rareType] = (inventory[rareType] || 0) + amount;
    materialsGained = true;

    breakdown.baseLoot[rareType] = amountRaw;
    breakdown.finalLoot[rareType] = amount;
    
    breakdown.rareDiscoveryBonus = {
      name: rareType === "rift_stone" ? { en: "Rift Stone", hu: "Rift Kő", de: "Rift-Stein", ro: "Piatră Rift" } : { en: "Sable Alloy", hu: "Ében Ötvözet", de: "Zobel-Legierung", ro: "Aliaj Sable" },
      amount
    };

    journalEntries.push({
      en: `Salvage operations yielded ${amount} ${rareType}.`,
      hu: `A mentőakciók során nyertünk ${amount} db ${rareType}-t.`,
      de: `Bergungsoperationen brachten ${amount} ${rareType} ein.`,
      ro: `Operațiunile de recuperare au adus ${amount} ${rareType}.`
    });
  }

  if (materialsGained) {
    saveGalaxyInventory(inventory);
  }

  // Artifact / Blueprint chance (Placeholder logic for future expansions)
  let artifactChance = exp.routeProfile === "black_route" ? 0.3 : exp.routeProfile === "deep_space" ? 0.1 : 0.02;
  if (exp.crewProfile === "scout_heavy") artifactChance += 0.05;
  if (exp.recalled) artifactChance = 0;

  const { value: rArtifact, nextState: sArtifact } = nextRandom(currentRngState);
  currentRngState = sArtifact;

  if (rArtifact < artifactChance) {
    journalEntries.push({
      en: "The fleet recovered a piece of an unknown technological artifact.",
      hu: "A flotta egy ismeretlen technológiai ereklye darabját szerezte meg.",
      de: "Die Flotte barg ein Stück eines unbekannten technologischen Artefakts.",
      ro: "Flota a recuperat o bucată dintr-un artefact tehnologic necunoscut."
    });
  }

  if (!exp.recalled && (exp.routeProfile === "balanced" || exp.routeProfile === "risky" || exp.routeProfile === "black_route")) {
    const { value: rFacEvent, nextState: sFacEvent } = nextRandom(currentRngState);
    currentRngState = sFacEvent;

    if (rFacEvent < 0.3) {
      const factions: import("../faction/types").FactionId[] = ["korgath", "velari", "drex", "synthoid", "noma"];
      const { value: rFacId, nextState: sFacId } = randomInt(currentRngState, 0, factions.length - 1);
      currentRngState = sFacId;

      const randomFaction = factions[rFacId];
      
      nextState = {
        ...nextState,
        factionReputation: {
          ...nextState.factionReputation,
          reputation: applyReputationChange(nextState.factionReputation.reputation, randomFaction, 2, "event", nextState)
        }
      };

      journalEntries.push({
        en: `Aided a distressed ${randomFaction} vessel during the voyage. Reputation slightly improved.`,
        hu: `Segítettünk egy bajba jutott ${randomFaction} hajónak az út során. A reputációnk enyhén nőtt.`,
        de: `Einem in Not geratenen ${randomFaction}-Schiff geholfen. Ruf leicht verbessert.`,
        ro: `Am ajutat o navă ${randomFaction} aflată în dificultate în timpul călătoriei. Reputația s-a îmbunătățit ușor.`
      });
    }
  }

  exp.rewardBreakdown = breakdown;

  journalEntries.push({
    en: `Expedition returned. Secured ${breakdown.finalLoot.supply || 0} SU and ${breakdown.finalLoot.intel || 0} Intel.`,
    hu: `Az expedíció visszatért. ${breakdown.finalLoot.supply || 0} SU és ${breakdown.finalLoot.intel || 0} Intel biztosítva.`,
    de: `Expedition zurückgekehrt. ${breakdown.finalLoot.supply || 0} SU und ${breakdown.finalLoot.intel || 0} Intel gesichert.`,
    ro: `Expediția s-a întors. S-au asigurat ${breakdown.finalLoot.supply || 0} SU și ${breakdown.finalLoot.intel || 0} Intel.`
  });

  return { nextState, journalEntries };
}