"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Compass, Rocket, History, Shield, Crosshair, Radar, Activity, AlertTriangle, CheckCircle2, ChevronRight, UserPlus, Package } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { WarRoomUnitId } from "@/lib/gravitas/sim/warroom/types";
import type { ExpeditionDurationType } from "@/lib/gravitas/sim/expeditions/types";

interface ExpeditionsPanelProps {
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
  korgath_berserker: <Crosshair size={16} className="text-red-400" />,
  velari_shadow: <Radar size={16} className="text-emerald-400" />,
  drex_marauder: <Crosshair size={16} className="text-amber-400" />,
  synthoid_titan: <Shield size={16} className="text-cyan-400" />,
  noma_weaver: <Activity size={16} className="text-fuchsia-400" />,
};

const UNIT_NAMES: Record<WarRoomUnitId, LocalizedString> = {
  sentinel: { en: "Sentinel", hu: "Sentinel", de: "Sentinel", ro: "Sentinel" },
  vanguard: { en: "Vanguard", hu: "Vanguard", de: "Vanguard", ro: "Vanguard" },
  wraith: { en: "Wraith", hu: "Wraith", de: "Wraith", ro: "Wraith" },
  nexus: { en: "Nexus", hu: "Nexus", de: "Nexus", ro: "Nexus" },
  korgath_berserker: { en: "K. Berserker", hu: "K. Berserker", de: "K. Berserker", ro: "K. Berserker" },
  velari_shadow: { en: "V. Shadow", hu: "V. Árnyék", de: "V. Schatten", ro: "V. Umbră" },
  drex_marauder: { en: "D. Marauder", hu: "D. Fosztogató", de: "D. Plünderer", ro: "D. Prădător" },
  synthoid_titan: { en: "S. Titan", hu: "S. Titán", de: "S. Titan", ro: "S. Titan" },
  noma_weaver: { en: "N. Weaver", hu: "N. Szövő", de: "N. Weber", ro: "N. Țesător" },
};

const DURATIONS: Record<ExpeditionDurationType, { label: LocalizedString, hours: number, minSensor: number }> = {
  short: { label: { en: "Short Recon", hu: "Rövid Felderítés", de: "Kurze Aufklärung", ro: "Recunoaștere Scurtă" }, hours: 4, minSensor: 1 },
  medium: { label: { en: "Sector Patrol", hu: "Szektor Járőr", de: "Sektorpatrouille", ro: "Patrulă Sector" }, hours: 12, minSensor: 3 },
  long: { label: { en: "Deep Space", hu: "Mélyűr", de: "Tiefenraum", ro: "Spațiu Adânc" }, hours: 24, minSensor: 5 },
  deep_space: { label: { en: "Void Expedition", hu: "Void Expedíció", de: "Leeren-Expedition", ro: "Expediție în Vid" }, hours: 72, minSensor: 8 },
};

const ROUTE_TYPES: { id: import("@/lib/gravitas/sim/expeditions/types").ExpeditionRouteProfile; label: LocalizedString; desc: LocalizedString }[] = [
  { id: "safe", label: { en: "Safe", hu: "Biztonságos", de: "Sicher", ro: "Sigur" }, desc: { en: "Low risk, low reward.", hu: "Alacsony kockázat, alacsony jutalom.", de: "Geringes Risiko, geringe Belohnung.", ro: "Risc scăzut, recompensă mică." } },
  { id: "balanced", label: { en: "Balanced", hu: "Kiegyensúlyozott", de: "Ausgeglichen", ro: "Echilibrat" }, desc: { en: "Standard risk and reward.", hu: "Normál kockázat és jutalom.", de: "Standardrisiko und -belohnung.", ro: "Risc și recompensă standard." } },
  { id: "risky", label: { en: "Risky", hu: "Kockázatos", de: "Riskant", ro: "Riscant" }, desc: { en: "High risk, high reward.", hu: "Magas kockázat, magas jutalom.", de: "Hohes Risiko, hohe Belohnung.", ro: "Risc mare, recompensă mare." } },
  { id: "deep_space", label: { en: "Deep Space", hu: "Mélyűr", de: "Tiefenraum", ro: "Spațiu Adânc" }, desc: { en: "Extreme risk, rare discoveries.", hu: "Extrém kockázat, ritka leletek.", de: "Extremes Risiko, seltene Entdeckungen.", ro: "Risc extrem, descoperiri rare." } },
  { id: "black_route", label: { en: "Black Route", hu: "Fekete Útvonal", de: "Schwarze Route", ro: "Ruta Neagră" }, desc: { en: "Suicidal risk, massive wealth.", hu: "Öngyilkos kockázat, hatalmas vagyon.", de: "Selbstmörderisches Risiko, enormer Reichtum.", ro: "Risc sinucigaș, bogăție imensă." } },
];

function formatTimeLeft(ms: number): string {
  if (ms <= 0) return "0s";
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function ExpeditionsPanel({ state, doAction, onClose, lang }: ExpeditionsPanelProps) {
  const [now, setNow] = useState(Date.now());
  const [activeTab, setActiveTab] = useState<"new" | "active" | "history">("active");
  const [selectedUnits, setSelectedUnits] = useState<Record<WarRoomUnitId, number>>({} as any);
  const [routeProfile, setRouteProfile] = useState<import("@/lib/gravitas/sim/expeditions/types").ExpeditionRouteProfile>("safe");
  const [durationMode, setDurationMode] = useState<ExpeditionDurationType>("short");
  const [officerId, setOfficerId] = useState<string>("");

  // Sync duration with route to keep UI simple but distinct
  const handleRouteSelect = (route: import("@/lib/gravitas/sim/expeditions/types").ExpeditionRouteProfile) => {
    setRouteProfile(route);
    if (route === "safe") setDurationMode("short");
    else if (route === "balanced") setDurationMode("medium");
    else if (route === "risky") setDurationMode("long");
    else setDurationMode("deep_space"); // deep_space and black_route use longest duration
  };

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const handleUnitChange = (unitId: WarRoomUnitId, delta: number) => {
    setSelectedUnits(prev => {
      const current = prev[unitId] || 0;
      const available = state.warRoom.garrison[unitId]?.reduce((s, e) => s + e.count, 0) || 0;
      return { ...prev, [unitId]: Math.max(0, Math.min(available, current + delta)) };
    });
  };

  const handleLaunch = () => {
    doAction({ type: "LAUNCH_EXPEDITION", durationMode, routeProfile, fleet: { units: selectedUnits, officerId: officerId || undefined } }, "rgba(56,189,248,0.2)");
    setSelectedUnits({} as any);
    setOfficerId("");
    setActiveTab("active");
  };

  const handleRecall = (id: string) => {
    doAction({ type: "RECALL_EXPEDITION", expeditionId: id }, "rgba(244,63,94,0.2)");
  };

  const totalSelected = Object.values(selectedUnits).reduce((a, b) => a + b, 0);
  const canLaunch = totalSelected > 0 && state.moduleLevels.sensor >= DURATIONS[durationMode].minSensor;

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-xl text-white/80">
      <div className="flex items-center justify-between px-6 py-4 border-b border-sky-500/20 bg-sky-950/20 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400">
            <Compass size={24} />
          </div>
          <div>
            <h2 className="text-lg font-black uppercase tracking-widest text-white shadow-sky-500/50 drop-shadow-md">
              {localize({ en: "Deep Space Expeditions", hu: "Mélyűri Expedíciók", de: "Tiefenraum-Expeditionen", ro: "Expediții în Spațiul Îndepărtat" })}
            </h2>
            <p className="text-xs text-sky-200/60 font-medium tracking-wider">
              {localize({ en: "Explore the unknown Void", hu: "Fedezd fel az ismeretlen Voidot", de: "Erkunde das unbekannte Nichts", ro: "Explorează Vidul necunoscut" })}
            </p>
          </div>
        </div>
        <button onClick={onClose} className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <X size={18} />
        </button>
      </div>

      <div className="flex border-b border-white/5 px-4 shrink-0 overflow-x-auto no-scrollbar">
        {[
          { id: "active", icon: <Rocket size={14} />, label: { en: "Active", hu: "Aktív", de: "Aktiv", ro: "Active" } },
          { id: "new", icon: <Compass size={14} />, label: { en: "New Mission", hu: "Új Küldetés", de: "Neue Mission", ro: "Misiune Nouă" } },
          { id: "history", icon: <History size={14} />, label: { en: "History", hu: "Előzmények", de: "Verlauf", ro: "Istoric" } },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 font-black uppercase tracking-widest text-xs transition-colors border-b-2 ${
              activeTab === tab.id ? "text-sky-400 border-sky-400" : "text-white/40 border-transparent hover:text-white/80"
            }`}
          >
            {tab.icon}
            {localize(tab.label)}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <AnimatePresence mode="wait">
          {activeTab === "new" && (
            <motion.div key="new" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-2xl mx-auto space-y-6">
              
              {/* Route Selection */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-sky-400/80 mb-3">{localize({ en: "Mission Profile", hu: "Küldetés Profil", de: "Missionsprofil", ro: "Profil Misiune" })}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {ROUTE_TYPES.map((routeData) => {
                    const durationKey = routeData.id === "safe" ? "short" : routeData.id === "balanced" ? "medium" : routeData.id === "risky" ? "long" : "deep_space";
                    const durationData = DURATIONS[durationKey];
                    const available = state.moduleLevels.sensor >= durationData.minSensor;
                    return (
                      <button
                        key={routeData.id}
                        disabled={!available}
                        onClick={() => handleRouteSelect(routeData.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${!available ? "opacity-30 grayscale cursor-not-allowed" : routeProfile === routeData.id ? (routeData.id === "black_route" ? "bg-fuchsia-500/20 border-fuchsia-400 text-white shadow-[0_0_15px_rgba(217,70,239,0.2)]" : "bg-sky-500/20 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]") : "bg-white/5 border-white/10 hover:bg-white/10 text-white/60"}`}
                      >
                        <div>
                          <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${routeProfile === routeData.id ? (routeData.id === "black_route" ? "text-fuchsia-300" : "text-sky-300") : ""}`}>{localize(routeData.label)}</div>
                          <div className="text-[9px] leading-tight mb-2 opacity-70">{localize(routeData.desc)}</div>
                        </div>
                        <div>
                          <div className="text-xs font-mono">{durationData.hours}h</div>
                          {!available && <div className="text-[9px] text-rose-400 mt-1 uppercase">Sensor LVL {durationData.minSensor} req.</div>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fleet Selection */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-sky-400/80 mb-3 flex justify-between">
                  <span>{localize({ en: "Assign Fleet", hu: "Flotta Kijelölése", de: "Flotte zuweisen", ro: "Asignare Flotă" })}</span>
                  <span className="text-white/50">{totalSelected} Units Selected</span>
                </h3>
                <div className="space-y-2">
                  {Object.entries(state.warRoom.garrison).map(([rawUnitId, entries]) => {
                    const unitId = rawUnitId as WarRoomUnitId;
                    const available = entries.reduce((s, e) => s + e.count, 0);
                    if (available === 0) return null;
                    const selected = selectedUnits[unitId] || 0;

                    return (
                      <div key={unitId} className="flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="text-white/50">{UNIT_ICONS[unitId]}</div>
                          <span className="text-sm font-bold uppercase tracking-wider">{localize(UNIT_NAMES[unitId])}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-[10px] font-mono text-white/40">{available} Avail</div>
                          <div className="flex items-center bg-white/5 rounded-lg overflow-hidden border border-white/10">
                            <button onClick={() => handleUnitChange(unitId, -10)} className="px-3 py-1 hover:bg-white/10 transition">-10</button>
                            <button onClick={() => handleUnitChange(unitId, -1)} className="px-3 py-1 hover:bg-white/10 transition border-r border-white/10">-</button>
                            <div className="w-12 text-center font-mono font-bold text-sky-300">{selected}</div>
                            <button onClick={() => handleUnitChange(unitId, 1)} className="px-3 py-1 hover:bg-white/10 transition border-l border-white/10">+</button>
                            <button onClick={() => handleUnitChange(unitId, 10)} className="px-3 py-1 hover:bg-white/10 transition">+10</button>
                            <button onClick={() => handleUnitChange(unitId, available)} className="px-3 py-1 hover:bg-white/10 transition text-[9px] uppercase tracking-widest font-black text-sky-400">All</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Officer Selection */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-sky-400/80 mb-3">{localize({ en: "Commanding Officer", hu: "Parancsnok", de: "Kommandierender Offizier", ro: "Ofițer Comandant" })}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setOfficerId("")}
                    className={`p-3 rounded-xl border text-left transition-all text-xs font-bold uppercase tracking-widest ${officerId === "" ? "bg-sky-500/20 border-sky-400 text-white" : "bg-white/5 border-white/10 text-white/50"}`}
                  >
                    No Officer
                  </button>
                  {state.officers.active.map(o => (
                    <button
                      key={o.id}
                      onClick={() => setOfficerId(o.id)}
                      disabled={o.status !== "ready"}
                      className={`p-3 rounded-xl border text-left transition-all flex justify-between items-center ${o.status !== "ready" ? "opacity-30 grayscale cursor-not-allowed" : officerId === o.id ? "bg-purple-900/40 border-purple-400 text-white" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
                    >
                      <div className="font-bold text-xs uppercase tracking-widest">{o.name} <span className="text-[9px] text-white/40">LVL {o.level}</span></div>
                      {o.status !== "ready" && <span className="text-[9px] text-rose-400 uppercase">Busy</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Launch Button */}
              <button
                onClick={handleLaunch}
                disabled={!canLaunch}
                className="w-full py-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-30 disabled:grayscale transition-all text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(56,189,248,0.2)]"
              >
                <Rocket size={18} />
                {localize({ en: "Launch Expedition", hu: "Expedíció Indítása", de: "Expedition Starten", ro: "Lansează Expediția" })}
              </button>

            </motion.div>
          )}

          {activeTab === "active" && (
            <motion.div key="active" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
              {state.expeditions.activeExpeditions.length === 0 ? (
                <div className="py-20 text-center text-white/30 border border-white/5 rounded-2xl border-dashed">
                  <Compass size={48} className="mx-auto mb-4 opacity-20" />
                  <div className="text-sm font-black uppercase tracking-widest">{localize({ en: "No active expeditions", hu: "Nincsenek aktív expedíciók", de: "Keine aktiven Expeditionen", ro: "Nicio expediție activă" })}</div>
                </div>
              ) : (
                state.expeditions.activeExpeditions.map(exp => {
                  const targetTime = exp.status === "returning" ? exp.returnAt! : exp.endsAt;
                  const totalTime = exp.status === "returning" ? (exp.returnAt! - exp.logs[exp.logs.length-1].timestamp) : (exp.endsAt - exp.startedAt);
                  const remaining = Math.max(0, targetTime - now);
                  const progress = Math.min(100, Math.max(0, 100 - (remaining / totalTime) * 100));

                  const officer = exp.fleet.officerId ? state.officers.active.find(o => o.id === exp.fleet.officerId) : null;
                  const totalUnits = Object.values(exp.fleet.units).reduce((a, b) => a + b, 0);

                  return (
                    <div key={exp.id} className="bg-white/5 border border-sky-500/20 rounded-2xl p-5 overflow-hidden relative">
                      <div className="absolute top-0 left-0 h-1 bg-sky-500/20 w-full">
                        <div className="h-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all duration-1000" style={{ width: `${progress}%` }} />
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${exp.status === "returning" ? "bg-amber-500/20 text-amber-400" : "bg-sky-500/20 text-sky-400"}`}>
                              {exp.status === "returning" ? localize({ en: "Returning", hu: "Visszatérőben", de: "Rückkehr", ro: "Se întoarce" }) : localize({ en: "En Route", hu: "Úton", de: "Unterwegs", ro: "Pe drum" })}
                            </span>
                            <span className="text-[10px] text-white/40 uppercase tracking-widest">{localize(DURATIONS[exp.durationMode].label)}</span>
                          </div>
                          <div className="text-xs text-white/60 font-medium">
                            {totalUnits} Units deployed {officer ? `under Cmdr. ${officer.name}` : "without command"}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-mono text-white tracking-tight">{formatTimeLeft(remaining)}</div>
                          <div className="text-[10px] uppercase font-black tracking-widest text-sky-400/60">Estimated Arrival</div>
                        </div>
                      </div>

                      <div className="bg-black/50 border border-white/5 rounded-xl p-4 max-h-[150px] overflow-y-auto space-y-3 custom-scrollbar">
                        {exp.logs.map((log, i) => (
                          <div key={i} className="flex gap-3 text-xs leading-relaxed">
                            <span className="text-[10px] font-mono text-white/30 shrink-0 pt-0.5">
                              {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            <div className={`flex-1 font-medium ${
                              log.resultType === "danger" || log.resultType === "disaster" ? "text-rose-300" :
                              log.resultType === "discovery" || log.resultType === "reward" ? "text-emerald-300" :
                              "text-white/70"
                            }`}>
                              {localize(log.text)}
                            </div>
                          </div>
                        ))}
                      </div>

                      {exp.status === "en_route" && (
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={() => handleRecall(exp.id)}
                            className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest transition"
                          >
                            {localize({ en: "Abort & Recall", hu: "Megszakít & Visszahív", de: "Abbrechen & Zurückrufen", ro: "Anulează & Recheamă" })}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </motion.div>
          )}

          {activeTab === "history" && (
            <motion.div key="history" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
              {state.expeditions.completedLog.length === 0 ? (
                <div className="py-20 text-center text-white/30 border border-white/5 rounded-2xl border-dashed">
                  <History size={48} className="mx-auto mb-4 opacity-20" />
                  <div className="text-sm font-black uppercase tracking-widest">{localize({ en: "No expedition history", hu: "Nincs expedíciós előzmény", de: "Kein Expeditionsverlauf", ro: "Fără istoric de expediții" })}</div>
                </div>
              ) : (
                [...state.expeditions.completedLog].reverse().map(exp => (
                  <div key={exp.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 opacity-80 hover:opacity-100 transition">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 border-b border-white/5 pb-3 gap-2">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">
                          {new Date(exp.startedAt).toLocaleDateString()} - {localize(DURATIONS[exp.durationMode].label)}
                        </div>
                        <div className="flex gap-2">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${exp.routeProfile === "black_route" ? "bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30" : "bg-sky-500/20 text-sky-400 border border-sky-500/30"}`}>
                            {localize(ROUTE_TYPES.find(r => r.id === exp.routeProfile)?.label || { en: exp.routeProfile } as any)}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            {exp.crewProfile.replace("_", " ")}
                          </span>
                          {exp.recalled && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              Aborted
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {exp.rewardBreakdown?.finalLoot.supply && <div className="text-xs font-mono text-emerald-400 flex items-center gap-1"><Package size={12} /> +{exp.rewardBreakdown.finalLoot.supply} SU</div>}
                        {exp.rewardBreakdown?.finalLoot.intel && <div className="text-xs font-mono text-cyan-400 flex items-center gap-1"><Activity size={12} /> +{exp.rewardBreakdown.finalLoot.intel} Intel</div>}
                        {Object.entries(exp.casualties).map(([unitId, count]) => {
                          if (!count) return null;
                          return (
                            <div key={unitId} className="text-xs font-mono text-rose-400 flex items-center gap-1">
                              <AlertTriangle size={12} /> -{count} {unitId.split('_').pop()}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {exp.rewardBreakdown && (
                      <div className="mb-3 p-3 bg-black/40 border border-white/5 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
                        <div>
                          <div className="text-white/40 uppercase font-black">Route Mult</div>
                          <div className="font-mono text-sky-300">x{exp.rewardBreakdown.routeBonusMult.toFixed(1)}</div>
                        </div>
                        <div>
                          <div className="text-white/40 uppercase font-black">Crew Mult</div>
                          <div className="font-mono text-emerald-300">x{exp.rewardBreakdown.crewBonusMult.toFixed(2)}</div>
                        </div>
                        <div>
                          <div className="text-white/40 uppercase font-black">Risk Pen.</div>
                          <div className="font-mono text-rose-300">x{exp.rewardBreakdown.riskPenaltyMult.toFixed(1)}</div>
                        </div>
                        {exp.rewardBreakdown.rareDiscoveryBonus && (
                          <div>
                            <div className="text-white/40 uppercase font-black">Rare Drop</div>
                            <div className="font-mono text-fuchsia-400 font-bold">+{exp.rewardBreakdown.rareDiscoveryBonus.amount} {localize(exp.rewardBreakdown.rareDiscoveryBonus.name)}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {exp.lessonText && (
                      <div className="mb-3 p-2 bg-black/40 border-l-2 border-sky-500/50 rounded-r-lg text-xs italic text-sky-100/70">
                        {localize(exp.lessonText)}
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      {exp.logs.filter(l => l.resultType !== "safe").map((log, i) => (
                        <div key={i} className={`text-xs pl-2 border-l-2 ${
                              log.resultType === "danger" || log.resultType === "disaster" ? "border-rose-500 text-rose-200/80" :
                              log.resultType === "discovery" || log.resultType === "reward" ? "border-emerald-500 text-emerald-200/80" :
                              log.resultType === "ambush_survived" ? "border-amber-500 text-amber-200/80" :
                              "border-white/20 text-white/60"
                        }`}>
                          {localize(log.text)}
                        </div>
                      ))}
                      {exp.logs.filter(l => l.resultType !== "safe").length === 0 && (
                        <div className="text-xs text-white/40 italic">Routine patrol. No significant events.</div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}