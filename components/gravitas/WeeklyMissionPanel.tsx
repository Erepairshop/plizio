"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Shield, Clock, Crosshair, Radar, Activity, Check, Skull } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { WarRoomUnitId } from "@/lib/gravitas/sim/warroom/types";
import { WEEKLY_MISSION_CONFIG } from "@/lib/gravitas/economy";
import { GALAXY_FACTIONS } from "@/lib/gravitas/sim/battle/factions";

interface WeeklyMissionPanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const UNIT_ICONS: Record<WarRoomUnitId, React.ReactNode> = {
  sentinel: <Shield size={16} />,
  vanguard: <Crosshair size={16} />,
  wraith: <Radar size={16} />,
  nexus: <Activity size={16} />,
};

const UNIT_NAMES: Record<WarRoomUnitId, LocalizedString> = {
  sentinel: { en: "Sentinel", hu: "Sentinel", de: "Sentinel", ro: "Sentinel" },
  vanguard: { en: "Vanguard", hu: "Vanguard", de: "Vanguard", ro: "Vanguard" },
  wraith: { en: "Wraith", hu: "Wraith", de: "Wraith", ro: "Wraith" },
  nexus: { en: "Nexus", hu: "Nexus", de: "Nexus", ro: "Nexus" },
};

function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const d = Math.floor(ms / (24 * 60 * 60 * 1000));
  const h = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function WeeklyMissionPanel({ state, doAction, onClose, lang }: WeeklyMissionPanelProps) {
  const [now, setNow] = useState(Date.now());
  const [deployments, setDeployments] = useState<Record<string, number>>({
    sentinel: 0,
    vanguard: 0,
    wraith: 0,
    nexus: 0,
  });

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(251,146,60,0.15)";

  const missionState = state.weeklyMission;
  const mission = missionState.activeMission;

  const totalByType = (unitId: string) => 
    (state.warRoom.garrison[unitId as keyof typeof state.warRoom.garrison] ?? [])
      .reduce((sum: number, e: any) => sum + e.count, 0);

  const handleDeploy = () => {
    doAction({ type: "DEPLOY_WEEKLY_UNITS", units: deployments }, dispatchColor);
  };

  const renderContent = () => {
    if (!mission) {
      const timeRemaining = Math.max(0, missionState.nextMissionAt - now);
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-900/30 flex items-center justify-center mb-6 border border-cyan-500/20">
            <Clock size={32} className="text-cyan-400" />
          </div>
          <h3 className="text-xl font-black uppercase text-white/90 mb-2">
            {localize({ en: "All Quiet", hu: "Minden Csendes", de: "Alles Ruhig", ro: "Totul Liniștit" })}
          </h3>
          <p className="text-sm text-white/60 mb-8 max-w-sm">
            {localize({ en: "No emergency requests at this time. Keep your forces ready.", hu: "Jelenleg nincsenek vészhelyzeti kérések. Tartsd készenlétben a csapataidat.", de: "Derzeit keine Notfallanfragen. Halte deine Truppen bereit.", ro: "Nicio cerere de urgență în acest moment. Ține-ți forțele pregătite." })}
          </p>
          <div className="bg-black/40 border border-white/10 rounded-xl p-4 w-full max-w-xs">
            <div className="text-[10px] font-black uppercase tracking-widest text-cyan-300/70 mb-2">
              {localize({ en: "Next Signal In", hu: "Következő Jel", de: "Nächstes Signal In", ro: "Următorul Semnal În" })}
            </div>
            <div className="text-2xl font-mono text-cyan-400">
              {formatDuration(timeRemaining)}
            </div>
          </div>
          <div className="mt-8 text-xs text-white/40">
            {localize({ en: "Completed Missions:", hu: "Teljesített Küldetések:", de: "Abgeschlossene Missionen:", ro: "Misiuni Finalizate:" })} <span className="font-bold text-white/70">{missionState.completedCount}</span>
          </div>
        </div>
      );
    }

    if (mission.phase === "preparation") {
      const timeRemaining = Math.max(0, mission.battleStartsAt - now);
      
      if (mission.deployedUnits) {
        return (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center mb-6 border border-emerald-500/20">
              <Shield size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-black uppercase text-white/90 mb-2">
              {localize({ en: "Forces Deployed", hu: "Csapatok Bevetve", de: "Truppen Entsandt", ro: "Forțe Desfășurate" })}
            </h3>
            <p className="text-sm text-white/60 mb-8 max-w-sm">
              {localize({ en: "Your troops have secured the perimeter and are awaiting the attack.", hu: "Csapataid biztosították a perimétert és várják a támadást.", de: "Deine Truppen haben den Perimeter gesichert und erwarten den Angriff.", ro: "Trupele tale au asigurat perimetrul și așteaptă atacul." })}
            </p>
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 w-full max-w-xs">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-300/70 mb-2">
                {localize({ en: "Attack Commences In", hu: "Támadás Kezdődik", de: "Angriff Beginnt In", ro: "Atacul Începe În" })}
              </div>
              <div className="text-2xl font-mono text-emerald-400">
                {formatDuration(timeRemaining)}
              </div>
            </div>
          </div>
        );
      }

      const totalDeployed = Object.values(deployments).reduce((sum, v) => sum + v, 0);

      return (
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-black text-cyan-300 uppercase tracking-wide mb-1">
                  {localize({ en: "Emergency Defense", hu: "Vészhelyzeti Védelem", de: "Notfallverteidigung", ro: "Apărare de Urgență" })}
                </h3>
                <p className="text-sm text-cyan-100/70">
                  {localize({ en: "A facility needs immediate assistance against incoming waves.", hu: "Egy létesítmény azonnali segítséget kér a közeledő hullámok ellen.", de: "Eine Einrichtung benötigt sofortige Hilfe gegen anrückende Wellen.", ro: "O facilitate are nevoie de asistență imediată împotriva valurilor inamice." })}
                </p>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-widest text-cyan-300/50 mb-1">
                  {localize({ en: "Time Remaining", hu: "Hátralévő Idő", de: "Verbleibende Zeit", ro: "Timp Rămas" })}
                </div>
                <div className="text-xl font-mono text-cyan-400 font-bold">{formatDuration(timeRemaining)}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-cyan-500/20">
              <div>
                <div className="text-[10px] uppercase text-cyan-300/50 font-black mb-1">Target</div>
                <div className="text-sm text-white font-bold">{localize(GALAXY_FACTIONS[mission.defenderFactionId]?.name || { en: mission.defenderFactionId } as any)} Facility</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-cyan-300/50 font-black mb-1">Attacker</div>
                <div className="text-sm text-rose-400 font-bold">{localize(GALAXY_FACTIONS[mission.attackerFactionId]?.name || { en: mission.attackerFactionId } as any)}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-cyan-300/50 font-black mb-1">Threat Level</div>
                <div className="text-sm text-amber-400 font-bold">LVL {mission.worldLevel}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-cyan-300/50 font-black mb-1">Format</div>
                <div className="text-sm text-white font-bold">3 Waves</div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-white/50 mb-4">
              {localize({ en: "Assign Defense Force", hu: "Védelmi Erők Kijelölése", de: "Verteidigungskräfte Zuweisen", ro: "Atribuie Forța de Apărare" })}
            </h3>
            
            <div className="space-y-4 flex-1">
              {(["sentinel", "vanguard", "wraith", "nexus"] as WarRoomUnitId[]).map(unitId => {
                const total = totalByType(unitId);
                const count = deployments[unitId];
                
                return (
                  <div key={unitId} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">{UNIT_ICONS[unitId]}</span>
                        <span className="text-sm font-black uppercase text-white/90">{localize(UNIT_NAMES[unitId])}</span>
                      </div>
                      <span className="text-[10px] font-bold text-white/50">Available: {total}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => setDeployments(prev => ({ ...prev, [unitId]: Math.max(0, prev[unitId] - 1) }))} disabled={count <= 0} className="w-8 h-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 font-bold text-white">-</button>
                      <input 
                        type="range" 
                        min="0" 
                        max={total} 
                        value={count} 
                        onChange={e => setDeployments(prev => ({ ...prev, [unitId]: parseInt(e.target.value) }))}
                        className="flex-1 accent-cyan-500"
                        disabled={total === 0}
                      />
                      <button onClick={() => setDeployments(prev => ({ ...prev, [unitId]: Math.min(total, prev[unitId] + 1) }))} disabled={count >= total} className="w-8 h-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 font-bold text-white">+</button>
                      <div className="w-12 text-right font-black text-cyan-300">{count}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleDeploy}
              disabled={totalDeployed === 0}
              className="mt-6 w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-white/5 disabled:text-white/30 border-b-2 border-cyan-800 disabled:border-transparent text-white font-black uppercase tracking-widest text-sm transition"
            >
              {localize({ en: "Deploy Units", hu: "Egységek Bevetése", de: "Einheiten Entsenden", ro: "Desfășoară Unități" })}
            </button>
          </div>
        </div>
      );
    }

    if (["wave1", "break1", "wave2", "break2", "wave3"].includes(mission.phase)) {
      const isBreak = mission.phase.startsWith("break");
      const currentWave = mission.phase.includes("1") ? 1 : mission.phase.includes("2") ? 2 : 3;
      const nextEventAt = isBreak ? mission.phaseStartedAt + WEEKLY_MISSION_CONFIG.breakTimeMs : 0;
      const timeRemaining = Math.max(0, nextEventAt - now);

      return (
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">
          <div className="w-full max-w-2xl bg-orange-950/20 border border-orange-500/30 rounded-2xl overflow-hidden">
            <div className="bg-orange-900/40 p-4 border-b border-orange-500/20 text-center">
              <h2 className="text-xl font-black text-orange-400 uppercase tracking-widest mb-1">
                {isBreak ? localize({ en: "Intermission", hu: "Szünet", de: "Pause", ro: "Pauză" }) : localize({ en: "Combat Active", hu: "Harc Folyamatban", de: "Kampf Aktiv", ro: "Luptă Activă" })}
              </h2>
              <p className="text-orange-200/70 text-sm">
                Wave {currentWave} of 3
              </p>
            </div>

            {isBreak && (
              <div className="p-8 text-center border-b border-white/5">
                <div className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">
                  {localize({ en: "Next wave in", hu: "Következő hullám", de: "Nächste Welle in", ro: "Următorul val în" })}
                </div>
                <div className="text-4xl font-mono text-white/90">
                  {formatDuration(timeRemaining)}
                </div>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-white/50 mb-4">
                {localize({ en: "Wave Results", hu: "Hullám Eredmények", de: "Wellen-Ergebnisse", ro: "Rezultatele Valului" })}
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map(waveNum => {
                  const result = mission.waveResults.find(r => r.wave === waveNum);
                  
                  if (!result) {
                    return (
                      <div key={waveNum} className="p-4 rounded-xl bg-black/40 border border-white/5 text-white/30 text-sm flex items-center justify-between">
                        <span>Wave {waveNum}</span>
                        <span>Pending</span>
                      </div>
                    );
                  }

                  const lostTotal = Object.values(result.unitsLost).reduce((a,b) => a+b, 0);

                  return (
                    <div key={waveNum} className={`p-4 rounded-xl border flex flex-col gap-2 ${result.victory ? "bg-emerald-900/10 border-emerald-500/20" : "bg-rose-900/10 border-rose-500/20"}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white/90">Wave {waveNum}</span>
                        <div className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${result.victory ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>
                          {result.victory ? localize({ en: "Victory", hu: "Győzelem", de: "Sieg", ro: "Victorie" }) : localize({ en: "Defeat", hu: "Vereség", de: "Niederlage", ro: "Înfrângere" })}
                        </div>
                      </div>
                      {lostTotal > 0 && (
                        <div className="text-xs text-rose-400/80 flex items-center gap-1.5">
                          <Skull size={12} /> {lostTotal} units lost
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (mission.phase === "completed" || mission.phase === "failed") {
      const isSuccess = mission.phase === "completed";
      const totalLost = mission.waveResults.reduce((sum, res) => {
        return sum + Object.values(res.unitsLost).reduce((a,b) => a+b, 0);
      }, 0);

      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border ${isSuccess ? "bg-emerald-900/30 border-emerald-500/30 text-emerald-400" : "bg-rose-900/30 border-rose-500/30 text-rose-400"}`}>
            {isSuccess ? <Check size={40} /> : <X size={40} />}
          </div>
          <h3 className={`text-3xl font-black uppercase tracking-widest mb-4 ${isSuccess ? "text-emerald-400" : "text-rose-400"}`}>
            {isSuccess ? localize({ en: "Defense Successful", hu: "Sikeres Védelem", de: "Verteidigung Erfolgreich", ro: "Apărare Reușită" }) : localize({ en: "Defense Failed", hu: "Védelem Elbukott", de: "Verteidigung Fehlgeschlagen", ro: "Apărare Eșuată" })}
          </h3>
          <p className="text-white/60 mb-8 max-w-md">
            {isSuccess 
              ? localize({ en: "The facility has been secured. Your forces have returned and rewards are being processed.", hu: "A létesítményt biztosítottuk. Csapataid visszatértek, a jutalmak úton vannak.", de: "Einrichtung gesichert. Truppen sind zurück, Belohnungen werden bearbeitet.", ro: "Facilitatea a fost securizată. Forțele s-au întors, recompensele sunt pe drum." })
              : localize({ en: "The facility was overrun. Surviving units have retreated to base.", hu: "A létesítmény elesett. A túlélő egységek visszavonultak a bázisra.", de: "Einrichtung überrannt. Überlebende Einheiten haben sich zurückgezogen.", ro: "Facilitatea a fost invadată. Unitățile supraviețuitoare s-au retras." })
            }
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
              <div className="text-[10px] uppercase font-black text-white/40 mb-1">Waves Survived</div>
              <div className="text-xl font-bold text-white">{mission.waveResults.filter(r => r.victory).length} / 3</div>
            </div>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
              <div className="text-[10px] uppercase font-black text-white/40 mb-1">Total Casualties</div>
              <div className="text-xl font-bold text-rose-400">{totalLost}</div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const bgColor = mission?.phase === "preparation" ? "bg-black/90" : 
                  (mission?.phase.includes("wave") || mission?.phase.includes("break")) ? "bg-orange-950/90" :
                  mission?.phase === "completed" ? "bg-emerald-950/90" :
                  mission?.phase === "failed" ? "bg-rose-950/90" : "bg-black/90";

  const headerColor = mission?.phase === "preparation" ? "border-cyan-500/20 text-cyan-400" : 
                      (mission?.phase.includes("wave") || mission?.phase.includes("break")) ? "border-orange-500/20 text-orange-400" :
                      mission?.phase === "completed" ? "border-emerald-500/20 text-emerald-400" :
                      mission?.phase === "failed" ? "border-rose-500/20 text-rose-400" : "border-white/10 text-white/60";

  return (
    <div className={`absolute inset-0 z-[28] flex flex-col backdrop-blur-md text-white/80 transition-colors duration-1000 ${bgColor}`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-3 border-b bg-black/40 ${headerColor}`}>
        <div className="flex items-center gap-3">
          <Calendar size={20} />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Weekly Mission", hu: "Heti Küldetés", de: "Wöchentliche Mission", ro: "Misiune Săptămânală" })}
            </h2>
            <p className="text-[10px] text-white/60">Special Operations</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <X size={16} className="text-white" />
        </button>
      </div>

      {renderContent()}
    </div>
  );
}