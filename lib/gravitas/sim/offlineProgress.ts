import type { StarholdState, LocalizedString } from "./types";
import type { WarRoomUnitId, GarrisonEntry } from "./warroom/types";

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
  /** Galaxy ciklus fázisváltások amik történtek */
  phaseChanges: Array<{ from: string; to: string }>;
  /** Dilemma késleltetett hatások amik aktiválódtak */
  triggeredDelayedEffects: number;
  /** Természetes reputáció drift */
  reputationDrifted: boolean;
  /** Drón mission-ök amik visszatértek */
  completedMissions: number;
  /** Összegyűjtött anyagok a visszatért drónokból */
  gatheredMaterials: Partial<Record<string, number>>;
}

export function processOfflineProgress(state: StarholdState): { 
  state: StarholdState; 
  report: OfflineProgressReport;
} {
  const now = Date.now();
  const lastActiveAt = state.lastActiveAt ?? now;
  const offlineDurationMs = Math.max(0, now - lastActiveAt);
  
  if (offlineDurationMs < 60_000) {
    return { state, report: createEmptyReport(offlineDurationMs) };
  }

  const nextState = { ...state };
  const report: OfflineProgressReport = createEmptyReport(offlineDurationMs);

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

  for (const slot of nextState.repairBay.repairSlots) {
    if (!slot) continue;
    if (now >= slot.completesAt) {
      report.completedRepairs.push({
        unitId: slot.unitId as WarRoomUnitId,
        count: slot.batchSize
      });
    }
  }

  for (const upgrade of nextState.upgradeQueue) {
    if (now >= upgrade.completesAt) {
      report.completedUpgrades.push({
        moduleId: upgrade.moduleId,
        newLevel: upgrade.targetLevel
      });
    }
  }

  nextState.lastActiveAt = now;

  return { state: nextState, report };
}

function createEmptyReport(offlineDurationMs: number): OfflineProgressReport {
  return {
    offlineDurationMs,
    completedTraining: [],
    completedRepairs: [],
    completedUpgrades: [],
    decayedWounded: 0,
    phaseChanges: [],
    triggeredDelayedEffects: 0,
    reputationDrifted: false,
    completedMissions: 0,
    gatheredMaterials: {},
  };
}

export function formatOfflineReport(report: OfflineProgressReport, lang: string): LocalizedString[] {
  const lines: LocalizedString[] = [];
  
  const hours = Math.floor(report.offlineDurationMs / 3_600_000);
  const mins = Math.floor((report.offlineDurationMs % 3_600_000) / 60_000);
  
  if (hours > 0 || mins > 0) {
    lines.push({
      en: `You were away for ${hours}h ${mins}m.`,
      hu: `${hours} óra ${mins} perce voltál távol.`,
      de: `Du warst ${hours}h ${mins}m abwesend.`,
      ro: `Ai fost plecat ${hours}h ${mins}m.`,
    });
  }

  for (const t of report.completedTraining) {
    lines.push({
      en: `Training complete: ${t.batchSize}× ${t.unitId} (Lv${t.level})`,
      hu: `Kiképzés kész: ${t.batchSize}× ${t.unitId} (Lv${t.level})`,
      de: `Ausbildung abgeschlossen: ${t.batchSize}× ${t.unitId} (Lv${t.level})`,
      ro: `Antrenament complet: ${t.batchSize}× ${t.unitId} (Lv${t.level})`,
    });
  }

  for (const r of report.completedRepairs) {
    lines.push({
      en: `Repair complete: ${r.count}× ${r.unitId} restored`,
      hu: `Javítás kész: ${r.count}× ${r.unitId} helyreállítva`,
      de: `Reparatur abgeschlossen: ${r.count}× ${r.unitId} wiederhergestellt`,
      ro: `Reparație completă: ${r.count}× ${r.unitId} restaurat`,
    });
  }

  for (const u of report.completedUpgrades) {
    lines.push({
      en: `Module upgraded: ${u.moduleId} → Lv${u.newLevel}`,
      hu: `Modul fejlesztve: ${u.moduleId} → Lv${u.newLevel}`,
      de: `Modul aufgerüstet: ${u.moduleId} → Lv${u.newLevel}`,
      ro: `Modul îmbunătățit: ${u.moduleId} → Lv${u.newLevel}`,
    });
  }

  if (report.decayedWounded > 0) {
    lines.push({
      en: `⚠ ${report.decayedWounded} wounded soldiers died without treatment.`,
      hu: `⚠ ${report.decayedWounded} sebesült katona meghalt ellátás nélkül.`,
      de: `⚠ ${report.decayedWounded} verwundete Soldaten starben ohne Behandlung.`,
      ro: `⚠ ${report.decayedWounded} soldați răniți au murit fără tratament.`,
    });
  }

  for (const p of report.phaseChanges) {
    lines.push({
      en: `Galaxy phase changed: ${p.from} → ${p.to}`,
      hu: `Galaxis fázis változott: ${p.from} → ${p.to}`,
      de: `Galaxiephase geändert: ${p.from} → ${p.to}`,
      ro: `Faza galaxiei schimbată: ${p.from} → ${p.to}`,
    });
  }

  if (report.completedMissions > 0) {
    lines.push({
      en: `${report.completedMissions} drone mission(s) returned with materials.`,
      hu: `${report.completedMissions} drón küldetés tért vissza anyaggal.`,
      de: `${report.completedMissions} Drohnenmission(en) kehrten mit Materialien zurück.`,
      ro: `${report.completedMissions} misiune(i) de drone s-au întors cu materiale.`,
    });
  }

  return lines;
}
