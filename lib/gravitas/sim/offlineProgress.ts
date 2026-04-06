import type { StarholdState, LocalizedString } from "./types";
import type { WarRoomUnitId } from "./warroom/types";
import { getRouteYieldModifier } from "./supplyroute/engine";
import { SUPPLY_ROUTE_CONFIG } from "../economy";
import { nextRandom, randomInt } from "./rng";
import { applyReputationChange } from "./faction/reputation";
import { FACTION_REPUTATION_CONFIG } from "../economy";

export interface OfflineProgressReport {
  /** Hány ms volt a játékos távol */
  offlineDurationMs: number;
  /** Elkészült warroom gyártások */
  completedTraining: Array<{ unitId: WarRoomUnitId; batchSize: number; level: number }>;
  /** Elkészült repair-ek */
  completedRepairs: Array<{ unitId: WarRoomUnitId; count: number }>;
  /** Elkészült modul upgrade-ek */
  completedUpgrades: Array<{ moduleId: string; newLevel: number }>;
  /** Elpusztult sebesültek (decay) */
  decayedWounded: number;
  
  // -- ÚJ KONSZOLIDÁLT ELEMEK --
  
  /** Mennyi nyersanyag termelődött O(1) ugrásból */
  gatheredMaterials: Record<string, number>;
  /** Kereskedelmi szállítmányok */
  completedTrades: number;
  seizedTrades: number;
  /** Expedíciók */
  completedExpeditions: number;
  expeditionCasualties: number;
  /** Supply routes */
  supplyRouteYields: number;
  supplyRouteRaids: number;

  agentsLost: number;
  intelGained: number;
  ambushesSuffered: number;
  cargoLost: number;
  
  // -- LEGACY KOMPATIBILITÁS (UI miatt) --
  phaseChanges: Array<{ from: string; to: string }>;
  triggeredDelayedEffects: number;
  reputationDrifted: boolean;
  completedMissions: number;
}

const MAX_OFFLINE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days max catch-up
const MIN_OFFLINE_MS = 60 * 1000; // 1 minute

function createEmptyReport(offlineDurationMs: number): OfflineProgressReport {
  return {
    offlineDurationMs,
    completedTraining: [],
    completedRepairs: [],
    completedUpgrades: [],
    decayedWounded: 0,
    gatheredMaterials: {},
    completedTrades: 0,
    seizedTrades: 0,
    completedExpeditions: 0,
    expeditionCasualties: 0,
    supplyRouteYields: 0,
    supplyRouteRaids: 0,
    agentsLost: 0,
    intelGained: 0,
    ambushesSuffered: 0,
    cargoLost: 0,
    phaseChanges: [],
    triggeredDelayedEffects: 0,
    reputationDrifted: false,
    completedMissions: 0,
  };
}

export function processOfflineProgress(state: StarholdState): { 
  state: StarholdState; 
  report: OfflineProgressReport;
} {
  const now = Date.now();
  const lastActiveAt = state.lastActiveAt ?? now;
  const rawOfflineMs = Math.max(0, now - lastActiveAt);
  
  if (rawOfflineMs < MIN_OFFLINE_MS) {
    return { state: { ...state, lastActiveAt: now }, report: createEmptyReport(0) };
  }

  const offlineDurationMs = Math.min(rawOfflineMs, MAX_OFFLINE_MS);
  let nextState = { ...state, lastActiveAt: now };
  let currentRngState = state.globalRngState;
  const report = createEmptyReport(offlineDurationMs);

  const endgame = nextState.endgame ?? {
    isZenithUnlocked: false,
    zenithHolder: null,
    zenithHoldTimeSeconds: 0,
    galacticLeader: null,
    imperialTaxRate: 0,
    embargoedPlayers: [],
  };
  const isEmbargoed = endgame.embargoedPlayers.includes("local_player");
  const taxRate = endgame.imperialTaxRate;

  // 1. WarRoom (Training)
  for (const [unitId, slot] of Object.entries(nextState.warRoom.productionSlots)) {
    if (!slot) continue;
    if (now >= slot.completesAt) {
      report.completedTraining.push({ 
        unitId: unitId as WarRoomUnitId, 
        batchSize: slot.batchSize, 
        level: slot.targetLevel 
      });
    }
  }

  // 2. RepairBay
  for (const slot of nextState.repairBay.repairSlots) {
    if (!slot) continue;
    if (now >= slot.completesAt) {
      report.completedRepairs.push({
        unitId: slot.unitId as WarRoomUnitId,
        count: slot.batchSize
      });
    }
  }

  // 3. Upgrades
  for (const upgrade of nextState.upgradeQueue) {
    if (now >= upgrade.completesAt) {
      report.completedUpgrades.push({
        moduleId: upgrade.moduleId,
        newLevel: upgrade.targetLevel
      });
    }
  }

  // 4. Base Production (Supply)
  if (state.modules.logistics.online) {
    // 1 supply per 10 ticks = 6 supply per minute (simplified offline rate)
    const minutesOffline = Math.floor(offlineDurationMs / 60000);
    const supplyYield = minutesOffline * 6;
    if (supplyYield > 0) {
      nextState.resources.supply += supplyYield;
      report.gatheredMaterials["supply"] = supplyYield;
    }
  }

  // 5. Supply Routes (O(1) Jumps)
  const globalYieldMod = getRouteYieldModifier(nextState);
  let totalSupplyRouteYields = 0;

  for (let r of nextState.supplyRoutes?.routes ?? []) {
    if (r.status === "active") {
      const elapsed = offlineDurationMs; // Simplified to total offline time for jump
      const yieldCycles = Math.floor(elapsed / SUPPLY_ROUTE_CONFIG.yieldIntervalMs);
      
      if (yieldCycles > 0) {
        const amount = Math.floor(r.yieldPerHour * yieldCycles * globalYieldMod);
        if (amount > 0) {
           totalSupplyRouteYields += amount;
           report.gatheredMaterials[r.materialId] = (report.gatheredMaterials[r.materialId] || 0) + amount;
        }

        // Simulate risk over N cycles using PRNG
        const baseRisk = r.yieldPerHour * 0.001; // dummy risk factor for offline jump
        const expectedRaids = yieldCycles * baseRisk;
        
        // Very basic RNG check if any raids occurred
        const { value: rRaid, nextState: s1 } = nextRandom(currentRngState);
        currentRngState = s1;
        if (rRaid < expectedRaids) {
          report.supplyRouteRaids += 1;
          r.status = "disrupted";
          r.disruptedUntil = now + SUPPLY_ROUTE_CONFIG.disruptionDurationMs;
        }
      }
    }
  }
  if (totalSupplyRouteYields > 0) {
    report.supplyRouteYields = totalSupplyRouteYields;
  }

  // 6. Trade Offers & Active Trades (O(1) Jump)
  const remainingActiveTrades = [];
  for (let trade of nextState.tradeSystem?.activeTrades ?? []) {
    if (trade.status === "in_transit" || trade.status === "delayed") {
      if (now >= trade.completesAt) {
        // Roll for interception once instead of every tick
        const { value: rInt, nextState: s2 } = nextRandom(currentRngState);
        currentRngState = s2;
        
        let baseRisk = trade.offer.routeType === "local" ? 0 : trade.offer.routeType === "sector" ? 0.05 : 0.15;
        if (trade.offer.partnerType === "smuggler") baseRisk += 0.1;
        
        if (rInt < baseRisk && trade.offer.partnerType === "smuggler" && rInt < 0.7) {
          trade.status = "seized";
          report.seizedTrades++;
        } else {
          trade.status = "completed";
          report.completedTrades++;

          let finalAmount = trade.offer.amountOffered;
          if (isEmbargoed) {
            finalAmount = 0;
          } else {
            finalAmount = Math.floor(finalAmount * (1 - taxRate));
          }

          if (finalAmount > 0) {
             report.gatheredMaterials[trade.offer.materialOffered] = (report.gatheredMaterials[trade.offer.materialOffered] || 0) + finalAmount;
          }

          nextState.factionReputation.reputation = applyReputationChange(
            nextState.factionReputation.reputation,
            trade.offer.factionId,
            FACTION_REPUTATION_CONFIG.changes.tradeAccepted,
            "trade_accepted",
            nextState
          );
        }      } else {
        remainingActiveTrades.push(trade);
      }
    } else {
      remainingActiveTrades.push(trade);
    }
  }
  if (nextState.tradeSystem) {
    nextState.tradeSystem.activeTrades = remainingActiveTrades;
  }

  // 7. Expeditions
  const remainingExpeditions = [];
  for (let exp of nextState.expeditions?.activeExpeditions ?? []) {
    if (exp.status === "en_route" || exp.status === "returning") {
      const targetTime = exp.status === "en_route" ? exp.endsAt : (exp.returnAt || 0);
      if (now >= targetTime) {
        report.completedExpeditions++;
        
        // Random chance of offline casualty
        const { value: rCas, nextState: s3 } = nextRandom(currentRngState);
        currentRngState = s3;

        let riskMult = exp.routeProfile === "balanced" ? 0.2 : exp.routeProfile === "risky" ? 1.5 : exp.routeProfile === "black_route" ? 2.5 : 1.0;
        riskMult *= (nextState.derived?.globalMultipliers.expRisk || 1.0);

        if (rCas < 0.2 * riskMult) {
           report.expeditionCasualties += 1;
           report.ambushesSuffered += 1;
           if (nextState.statistics?.trauma) {
             nextState.statistics.trauma.ambushesSuffered += 1;
             nextState.statistics.trauma.expeditionCasualties += 1;
           }
        }
        
        // Supply yield
        const supplyGained = 200 + Math.floor(rCas * 100);
        report.gatheredMaterials["supply"] = (report.gatheredMaterials["supply"] || 0) + supplyGained;
        
        // Intel yield
        const intelGained = 20 + Math.floor(rCas * 20);
        report.intelGained += intelGained;
        nextState.espionage.totalIntel += intelGained;
      } else {
        remainingExpeditions.push(exp);
      }
    } else {
      remainingExpeditions.push(exp);
    }
  }
  if (nextState.expeditions) {
    nextState.expeditions.activeExpeditions = remainingExpeditions;
  }

  // 8. Espionage
  const remainingMissions = [];
  for (let mission of nextState.espionage?.missions ?? []) {
    if (mission.phase === "active") {
      if (now >= mission.lastYieldAt + 60 * 60 * 1000) { // check if offline for an hour at least
        const { value: rExp, nextState: s4 } = nextRandom(currentRngState);
        currentRngState = s4;

        if (rExp < mission.exposureRisk / 100) {
          mission.phase = "exposed";
          const lostOps = Math.max(1, Math.floor(mission.operativeCount * 0.5));
          report.agentsLost += lostOps;
          nextState.statistics.trauma.agentsLost += lostOps;
          nextState.espionage.lostCount += lostOps;
        } else {
           const cycles = Math.floor(offlineDurationMs / (60 * 60 * 1000));
           if (cycles > 0) {
              const intelYield = cycles * 10;
              mission.intelGathered += intelYield;
              nextState.espionage.totalIntel += intelYield;
              report.intelGained += intelYield;
           }
           remainingMissions.push(mission);
        }
      } else {
        remainingMissions.push(mission);
      }
    } else {
      remainingMissions.push(mission);
    }
  }
  if (nextState.espionage) {
    nextState.espionage.missions = remainingMissions;
  }

  nextState.globalRngState = currentRngState;
  
  // Attach summary
  nextState.offlineSummary = report;

  return { state: nextState, report };
}

export function formatOfflineReport(report: OfflineProgressReport, lang: string): LocalizedString[] {
  const lines: LocalizedString[] = [];
  
  const hours = Math.floor(report.offlineDurationMs / 3_600_000);
  const mins = Math.floor((report.offlineDurationMs % 3_600_000) / 60_000);
  
  if (hours > 0 || mins > 0) {
    lines.push({
      en: `Commander, you were away for ${hours}h ${mins}m.`,
      hu: `Parancsnok, ${hours} óra ${mins} perce volt távol.`,
      de: `Kommandant, Sie waren ${hours}h ${mins}m abwesend.`,
      ro: `Comandante, ai fost plecat ${hours}h ${mins}m.`,
    });
  }

  if (report.completedTraining.length > 0) {
    lines.push({
      en: `${report.completedTraining.length} training batches completed.`,
      hu: `${report.completedTraining.length} kiképzés befejeződött.`,
      de: `${report.completedTraining.length} Ausbildungsgruppen abgeschlossen.`,
      ro: `${report.completedTraining.length} serii de antrenament completate.`,
    });
  }

  if (report.completedRepairs.length > 0) {
    lines.push({
      en: `${report.completedRepairs.length} repair batches completed.`,
      hu: `${report.completedRepairs.length} javítás befejeződött.`,
      de: `${report.completedRepairs.length} Reparaturaufträge abgeschlossen.`,
      ro: `${report.completedRepairs.length} serii de reparații completate.`,
    });
  }

  if (report.completedUpgrades.length > 0) {
    lines.push({
      en: `${report.completedUpgrades.length} modules upgraded.`,
      hu: `${report.completedUpgrades.length} modul fejlesztve.`,
      de: `${report.completedUpgrades.length} Module aufgerüstet.`,
      ro: `${report.completedUpgrades.length} module îmbunătățite.`,
    });
  }

  if (report.completedTrades > 0) {
    lines.push({
      en: `${report.completedTrades} trade shipments arrived successfully.`,
      hu: `${report.completedTrades} kereskedelmi szállítmány sikeresen megérkezett.`,
      de: `${report.completedTrades} Handelslieferungen erfolgreich eingetroffen.`,
      ro: `${report.completedTrades} transporturi comerciale au sosit cu succes.`,
    });
  }
  
  if (report.seizedTrades > 0) {
    lines.push({
      en: `⚠ ${report.seizedTrades} shipments were seized or lost in transit.`,
      hu: `⚠ ${report.seizedTrades} szállítmány elveszett vagy lefoglalták.`,
      de: `⚠ ${report.seizedTrades} Lieferungen wurden beschlagnahmt oder gingen verloren.`,
      ro: `⚠ ${report.seizedTrades} transporturi au fost confiscate sau pierdute.`,
    });
  }

  if (report.completedExpeditions > 0) {
    lines.push({
      en: `${report.completedExpeditions} expeditions returned to the Starhold.`,
      hu: `${report.completedExpeditions} expedíció visszatért a Starholdba.`,
      de: `${report.completedExpeditions} Expeditionen kehrten zum Starhold zurück.`,
      ro: `${report.completedExpeditions} expediții s-au întors la Starhold.`,
    });
  }

  if (report.supplyRouteRaids > 0) {
    lines.push({
      en: `⚠ Supply routes suffered ${report.supplyRouteRaids} raids while you were away.`,
      hu: `⚠ Az utánpótlási útvonalak ${report.supplyRouteRaids} támadást szenvedtek el.`,
      de: `⚠ Versorgungsrouten erlitten ${report.supplyRouteRaids} Überfälle in Ihrer Abwesenheit.`,
      ro: `⚠ Rutele de aprovizionare au suferit ${report.supplyRouteRaids} raiduri.`,
    });
  }

  const materials = Object.entries(report.gatheredMaterials);
  if (materials.length > 0) {
    const matStr = materials.map(([k, v]) => `${v} ${k}`).join(', ');
    lines.push({
      en: `Total materials gathered: ${matStr}`,
      hu: `Összes gyűjtött anyag: ${matStr}`,
      de: `Gesammelte Materialien: ${matStr}`,
      ro: `Materiale totale adunate: ${matStr}`,
    });
  }

  return lines;
}
