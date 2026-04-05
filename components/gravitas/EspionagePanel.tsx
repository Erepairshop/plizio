"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Shield, Send, AlertTriangle, Fingerprint, Activity, Clock, Zap, Cpu, Ghost } from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { EspionageIntelAction, EspionageMissionType } from "@/lib/gravitas/sim/espionage/types";
import { ESPIONAGE_CONFIG } from "@/lib/gravitas/economy";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";
import type { WarRoomUnitId, GarrisonEntry } from "@/lib/gravitas/sim/warroom/types";

interface EspionagePanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const FACTIONS: { id: FactionId; name: string }[] = [
  { id: "korgath", name: "Korgath" },
  { id: "velari", name: "Velari" },
  { id: "drex", name: "Drex" },
  { id: "synthoid", name: "Synthoid" },
  { id: "noma", name: "Noma" },
];

const TARGET_TYPES: { id: import("@/lib/gravitas/sim/espionage/types").EspionageTargetType; name: LocalizedString }[] = [
  { id: "faction", name: { en: "Faction Hub", hu: "Frakció Központ", de: "Fraktionszentrum", ro: "Centru Facțiune" } },
  { id: "battle_node", name: { en: "Outpost / Node", hu: "Helyőrség / Csomópont", de: "Außenposten", ro: "Avanpost" } },
  { id: "trade_route", name: { en: "Trade Route", hu: "Kereskedelmi Útvonal", de: "Handelsroute", ro: "Rută Comercială" } },
  { id: "expedition_route", name: { en: "Expedition Route", hu: "Expedíciós Útvonal", de: "Expeditionsroute", ro: "Rută Expediție" } },
];

const OPERATIVE_ROLES: { id: import("@/lib/gravitas/sim/espionage/types").EspionageOperativeRole; name: LocalizedString; desc: LocalizedString }[] = [
  { id: "infiltrator", name: { en: "Infiltrator", hu: "Beépülő", de: "Infiltrator", ro: "Infiltrator" }, desc: { en: "High intel yield.", hu: "Magas hírszerzési hozam.", de: "Hoher Intel-Ertrag.", ro: "Randament mare de intel." } },
  { id: "scout", name: { en: "Scout", hu: "Felderítő", de: "Späher", ro: "Cercetaș" }, desc: { en: "Low risk, low yield.", hu: "Alacsony kockázat, alacsony hozam.", de: "Geringes Risiko, geringer Ertrag.", ro: "Risc mic, randament mic." } },
  { id: "analyst", name: { en: "Analyst", hu: "Elemző", de: "Analyst", ro: "Analist" }, desc: { en: "Quickly uncovers deep intel layers.", hu: "Gyorsan tár fel mély hírszerzési rétegeket.", de: "Deckt schnell tiefe Intel-Ebenen auf.", ro: "Descoperă rapid straturi adânci de intel." } },
  { id: "saboteur", name: { en: "Saboteur", hu: "Szabotőr", de: "Saboteur", ro: "Sabotor" }, desc: { en: "High risk, powerful disruption.", hu: "Magas kockázat, erős zavarás.", de: "Hohes Risiko, starke Störung.", ro: "Risc mare, perturbare puternică." } },
];
const MISSION_TYPES: { id: EspionageMissionType; name: LocalizedString; desc: LocalizedString }[] = [
  { id: "passiveScan", name: { en: "Passive Scan", hu: "Passzív Szkennelés", de: "Passiver Scan", ro: "Scanare Pasivă" }, desc: { en: "Low yield, very low risk.", hu: "Alacsony hozam, nagyon alacsony kockázat.", de: "Geringer Ertrag, sehr geringes Risiko.", ro: "Randament scăzut, risc foarte mic." } },
  { id: "deepScan", name: { en: "Deep Scan", hu: "Mélyszkennelés", de: "Tiefenscan", ro: "Scanare Profundă" }, desc: { en: "Good yield, moderate risk. Can reveal traits.", hu: "Jó hozam, mérsékelt kockázat. Felfedhet tulajdonságokat.", de: "Guter Ertrag, mittleres Risiko. Kann Eigenschaften aufdecken.", ro: "Randament bun, risc moderat. Poate dezvălui trăsături." } },
  { id: "infiltrate", name: { en: "Infiltrate", hu: "Beépülés", de: "Infiltrieren", ro: "Infiltrare" }, desc: { en: "Standard intel gathering.", hu: "Normál intel gyűjtés.", de: "Standard Intel-Sammlung.", ro: "Colectare standard de intel." } },
  { id: "sabotage", name: { en: "Sabotage", hu: "Szabotázs", de: "Sabotage", ro: "Sabotaj" }, desc: { en: "Disrupt operations. High risk.", hu: "Műveletek megzavarása. Magas kockázat.", de: "Operationen stören. Hohes Risiko.", ro: "Întreruperea operațiunilor. Risc ridicat." } },
  { id: "counterfeitIntel", name: { en: "Counterfeit Intel", hu: "Hamis Intel", de: "Gefälschte Intel", ro: "Intel Fals" }, desc: { en: "Feed false info to reduce raid chances.", hu: "Hamis infókkal csökkenti a portyák esélyét.", de: "Falsche Infos, um Überfallrisiko zu senken.", ro: "Informații false pentru a reduce șansele de raid." } },
  { id: "decoyDeployment", name: { en: "Decoy", hu: "Csalétek", de: "Köder", ro: "Momeală" }, desc: { en: "Draw attention to protect the main base.", hu: "Figyelemelterelés a fő bázis védelmében.", de: "Aufmerksamkeit ablenken, um Hauptbasis zu schützen.", ro: "Atrage atenția pentru a proteja baza principală." } },
];

const INTEL_ACTIONS: { id: EspionageIntelAction; name: LocalizedString; cost: number; desc: LocalizedString; icon: React.ReactNode; requiresFaction?: boolean }[] = [
  { id: "revealBuilding", name: { en: "Reveal Building", hu: "Épület Feltárás", de: "Gebäude Aufdecken", ro: "Dezvăluie Clădirea" }, cost: ESPIONAGE_CONFIG.intelCosts.revealBuilding, desc: { en: "Gain full scout report for a building.", hu: "Teljes felderítési jelentés egy épületről.", de: "Vollständiger Spähbericht für ein Gebäude.", ro: "Obține un raport complet de cercetare." }, icon: <Eye size={14} /> },
  { id: "weakenDefense", name: { en: "Weaken Defense", hu: "Védelem Gyengítés", de: "Verteidigung Schwächen", ro: "Slăbește Apărarea" }, cost: ESPIONAGE_CONFIG.intelCosts.weakenDefense, desc: { en: "Reduce target faction armor by 20%.", hu: "Célpont páncélzatának 20%-os csökkentése.", de: "Reduziert Ziel-Rüstung um 20%.", ro: "Reduce armura facțiunii țintă cu 20%." }, icon: <Shield size={14} /> },
  { id: "factionSecret", name: { en: "Faction Secret", hu: "Frakció Titok", de: "Fraktionsgeheimnis", ro: "Secret de Facțiune" }, cost: ESPIONAGE_CONFIG.intelCosts.factionSecret, desc: { en: "Improve reputation with a faction (+15).", hu: "Reputáció javítása (+15) egy frakcióval.", de: "Ruf bei einer Fraktion verbessern (+15).", ro: "Îmbunătățește reputația cu o facțiune (+15)." }, icon: <Fingerprint size={14} />, requiresFaction: true },
  { id: "earlyWarning", name: { en: "Early Warning", hu: "Korai Figyelmeztetés", de: "Frühwarnung", ro: "Avertizare Timpurie" }, cost: ESPIONAGE_CONFIG.intelCosts.earlyWarning, desc: { en: "+2h prep time for weekly mission.", hu: "+2 óra felkészülési idő a heti küldetéshez.", de: "+2h Vorbereitungszeit für wöchentliche Mission.", ro: "+2h timp de pregătire pentru misiunea săptămânală." }, icon: <Clock size={14} /> },
  { id: "sabotageSupply", name: { en: "Sabotage Supply", hu: "Ellátás Szabotázs", de: "Nachschub Sabotieren", ro: "Sabotaj Aprovizionare" }, cost: ESPIONAGE_CONFIG.intelCosts.sabotageSupply, desc: { en: "Target faction trade offers cost 50% more.", hu: "A célpont kereskedelmi ajánlatai 50%-kal drágábbak.", de: "Ziele-Handelsangebote kosten 50% mehr.", ro: "Ofertele de comerț ale țintei costă cu 50% mai mult." }, icon: <Activity size={14} /> },
  { id: "counterfeitIntel", name: { en: "Plant Intel", hu: "Intel Beültetés", de: "Intel Platzieren", ro: "Plantează Intel" }, cost: ESPIONAGE_CONFIG.intelCosts.counterfeitIntel, desc: { en: "Misdirect faction raids.", hu: "Félrevezeti a frakció portyákat.", de: "Fraktions-Überfälle fehlleiten.", ro: "Deturnează raidurile facțiunii." }, icon: <Ghost size={14} /> },
  { id: "decoyDeployment", name: { en: "Deploy Decoy", hu: "Csalétek Bevetés", de: "Köder Einsetzen", ro: "Desfășoară Momeală" }, cost: ESPIONAGE_CONFIG.intelCosts.decoyDeployment, desc: { en: "Prevent raids for 24h.", hu: "Megakadályozza a portyákat 24 órára.", de: "Verhindert Überfälle für 24h.", ro: "Previn raidurile pentru 24h." }, icon: <Shield size={14} /> },
];

function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const h = Math.floor(ms / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function EspionagePanel({ state, doAction, onClose, lang }: EspionagePanelProps) {
  const [now, setNow] = useState(Date.now());
  const [selectedTargetType, setSelectedTargetType] = useState<import("@/lib/gravitas/sim/espionage/types").EspionageTargetType>("faction");
  const [selectedTargetId, setSelectedTargetId] = useState<string>("korgath");
  const [selectedOperativeRole, setSelectedOperativeRole] = useState<import("@/lib/gravitas/sim/espionage/types").EspionageOperativeRole>("infiltrator");
  const [selectedOperativeUnitId, setSelectedOperativeUnitId] = useState<WarRoomUnitId>("wraith");
  
  const [selectedType, setSelectedType] = useState<EspionageMissionType>("infiltrate");
  const [deployCount, setDeployCount] = useState<number>(ESPIONAGE_CONFIG.minWraithsPerMission);
  const [targetActionFaction, setTargetActionFaction] = useState<FactionId>("korgath");

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(160,60,255,0.15)";

  const availableUnitsList = ["wraith", "nexus", "vanguard", "sentinel"] as WarRoomUnitId[];
  const totalUnitsOfType = state.warRoom.garrison[selectedOperativeUnitId as WarRoomUnitId]?.reduce((sum: number, e: GarrisonEntry) => sum + e.count, 0) ?? 0;

  const handleDeploy = () => {
    doAction({ 
      type: "DEPLOY_SPIES", 
      target: { type: selectedTargetType, id: selectedTargetId }, 
      operativeUnitId: selectedOperativeUnitId,
      operativeCount: deployCount,
      operativeRole: selectedOperativeRole,
      missionType: selectedType 
    }, dispatchColor);
  };

  const handleExtract = (missionId: string) => {
    doAction({ type: "EXTRACT_SPIES", missionId }, "rgba(244,63,94,0.15)");
  };

  const handleSpendIntel = (action: EspionageIntelAction) => {
    const requiresFaction = INTEL_ACTIONS.find(a => a.id === action)?.requiresFaction;
    doAction({ type: "SPEND_INTEL", action, extraArg: requiresFaction ? targetActionFaction : undefined }, dispatchColor);
  };

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-md text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/20 bg-black/40">
        <div className="flex items-center gap-3">
          <Eye size={20} className="text-purple-400" />
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-white">
              {localize({ en: "Spy Network", hu: "Kémhálózat", de: "Spionagenetzwerk", ro: "Rețea de Spionaj" })}
            </h2>
            <p className="text-[10px] text-white/60">Ghost Squadron Command</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-200 text-[11px] font-black">
            INTEL: {state.espionage.totalIntel}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="border-b border-purple-500/10 bg-white/5 px-4 py-3">
        <p className="max-w-4xl text-[11px] leading-relaxed text-white/60">
          {localize({
            en: "Send covert teams to gather intel, sabotage rivals, or trigger targeted espionage actions. Stronger missions cost more, but reveal more and hit harder.",
            hu: "Küldj titkos csapatokat intel gyűjtésre, szabotázsra vagy célzott kémkedési műveletekre. Az erősebb küldetések többe kerülnek, de többet fednek fel és nagyobb hatást adnak.",
            de: "Sende verdeckte Teams, um Intel zu sammeln, Rivalen zu sabotieren oder gezielte Spionageaktionen auszulösen. Stärkere Missionen kosten mehr, decken aber mehr auf und wirken stärker.",
            ro: "Trimite echipe secrete pentru a strânge intel, a sabota rivali sau a declanșa acțiuni de spionaj țintite. Misiunile mai puternice costă mai mult, dar dezvăluie mai multe și lovesc mai tare.",
          })}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Active Missions */}
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
            <span>{localize({ en: "Active Operations", hu: "Aktív Műveletek", de: "Aktive Operationen", ro: "Operațiuni Active" })}</span>
            <div className="h-px bg-purple-500/10 flex-1" />
            <span>{state.espionage.missions.length} / {ESPIONAGE_CONFIG.maxActiveMissions}</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {state.espionage.missions.length === 0 ? (
              <div className="col-span-full py-6 text-center text-white/30 text-xs italic border border-white/5 rounded-xl border-dashed">
                {localize({ en: "No active field operatives.", hu: "Nincsenek aktív ügynökök a terepen.", de: "Keine aktiven Feldagenten.", ro: "Niciun agent de teren activ." })}
              </div>
            ) : (
              state.espionage.missions.map(mission => {
                const isDeploying = mission.phase === "deploying";
                const isActive = mission.phase === "active";
                const isExposed = mission.phase === "exposed";
                const isEnded = mission.phase === "extracted" || mission.phase === "lost";
                
                const timeRemaining = Math.max(0, mission.activeAt - now);
                const timeElapsed = Math.max(0, now - mission.startedAt);
                
                return (
                  <div key={mission.id} className={`p-4 rounded-xl border transition-all ${isExposed ? "border-rose-500 bg-rose-950/20" : isActive ? "border-emerald-500/30 bg-white/5" : isDeploying ? "border-cyan-500/30 bg-white/5" : "border-white/5 bg-black/40 opacity-60"}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm font-black uppercase text-white/90">{mission.target.id}</div>
                        <div className="text-[10px] text-white/50">{localize(MISSION_TYPES.find(t => t.id === mission.type)?.name || {en:"?"} as any)} • {mission.operativeCount} {mission.operativeUnitId.split('_').pop()?.toUpperCase()}s</div>
                      </div>
                      <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${isExposed ? "bg-rose-500 text-white animate-pulse" : isActive ? "bg-emerald-500/20 text-emerald-300" : isDeploying ? "bg-cyan-500/20 text-cyan-300" : "bg-white/10 text-white/50"}`}>
                        {mission.phase}
                      </div>
                    </div>
                    
                    {isDeploying && (
                      <div className="flex items-center gap-2 text-cyan-200/80 text-xs font-mono mb-4">
                        <Send size={14} className="animate-pulse" /> Deploying: {formatDuration(timeRemaining)}
                      </div>
                    )}
                    
                    {isActive && (
                      <div className="flex items-center gap-2 text-emerald-200/80 text-xs font-mono mb-4">
                        <Activity size={14} /> Active: {formatDuration(timeElapsed)}
                      </div>
                    )}
                    
                    {(isActive || isExposed) && (
                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-white/50">Exposure Risk</span>
                            <span className={mission.exposureRisk > 70 ? "text-rose-400 font-bold" : "text-white/70"}>{Math.round(mission.exposureRisk)}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-black border border-white/10 overflow-hidden relative">
                            <motion.div 
                              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-500 via-yellow-500 to-rose-500" 
                              initial={{ width: `${mission.exposureRisk}%` }} 
                              animate={{ width: `${mission.exposureRisk}%` }} 
                            />
                            <div className="absolute left-[80%] top-0 bottom-0 w-px bg-white/50 z-10" />
                          </div>
                        </div>
                        <div className="flex justify-between text-xs font-black text-purple-300">
                          <span>Intel Gathered</span>
                          <span>+{mission.intelGathered}</span>
                        </div>

                        {mission.type === "deepScan" || mission.type === "infiltrate" ? (
                          <div>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-white/50">Intel Depth</span>
                              <span className="text-white/70">Level {mission.intelDepthLevel}/4</span>
                            </div>
                            <div className="flex gap-1 h-1.5 w-full">
                              {[1,2,3,4].map(level => (
                                <div key={level} className={`flex-1 rounded-full ${mission.intelDepthLevel >= level ? "bg-cyan-400" : "bg-white/10"}`} />
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {mission.revealedData?.traits && mission.revealedData.traits.length > 0 && (
                          <div className="text-[10px] text-white/40">
                            <span className="text-white/60">Revealed Traits: </span>
                            {Array.from(new Set(mission.revealedData.traits)).join(", ")}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {!isEnded && (
                      <button
                        onClick={() => handleExtract(mission.id)}
                        className={`w-full py-2 rounded-lg font-black uppercase tracking-widest text-[10px] transition-all ${isExposed ? "bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]" : "bg-white/5 hover:bg-white/10 border border-white/10 text-white/70"}`}
                      >
                        {isExposed ? localize({ en: "Emergency Extract!", hu: "SÜRGŐS KIVONÁS!", de: "Notfall-Extraktion!", ro: "Extracție de Urgență!" }) : localize({ en: "Extract Agents", hu: "Kivonás", de: "Agenten extrahieren", ro: "Extrage Agenții" })}
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Deploy New Mission */}
        {state.espionage.missions.length < ESPIONAGE_CONFIG.maxActiveMissions && (
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
              <span>{localize({ en: "New Operation", hu: "Új Művelet", de: "Neue Operation", ro: "Nouă Operațiune" })}</span>
              <div className="h-px bg-purple-500/10 flex-1" />
            </h3>
            
            <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70 mb-2">Target Type</label>
                  <select 
                    value={selectedTargetType} 
                    onChange={e => setSelectedTargetType(e.target.value as any)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    {TARGET_TYPES.map(t => <option key={t.id} value={t.id}>{localize(t.name)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70 mb-2">Target ID</label>
                  <select 
                    value={selectedTargetId} 
                    onChange={e => setSelectedTargetId(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    {/* Placeholder options, could be dynamically populated based on target type */}
                    {selectedTargetType === "faction" ? FACTIONS.map(f => <option key={f.id} value={f.id}>{f.name}</option>) : <option value="derelict-outpost">Derelict Outpost</option>}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70 mb-2">Role & Asset</label>
                  <div className="flex gap-2">
                    <select 
                      value={selectedOperativeRole} 
                      onChange={e => setSelectedOperativeRole(e.target.value as any)}
                      className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                    >
                      {OPERATIVE_ROLES.map(r => <option key={r.id} value={r.id}>{localize(r.name)}</option>)}
                    </select>
                    <select 
                      value={selectedOperativeUnitId} 
                      onChange={e => setSelectedOperativeUnitId(e.target.value as any)}
                      className="w-16 bg-black/50 border border-white/10 rounded-lg px-2 py-2 text-xs text-white focus:outline-none focus:border-purple-500 text-center"
                    >
                      {availableUnitsList.map(u => <option key={u} value={u}>{u.substring(0,2).toUpperCase()}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70 mb-2">Mission Type</label>
                  <select 
                    value={selectedType} 
                    onChange={e => setSelectedType(e.target.value as EspionageMissionType)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    {MISSION_TYPES.map(t => <option key={t.id} value={t.id}>{localize(t.name)}</option>)}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[10px] uppercase font-black tracking-widest text-purple-300/70">Assigned Operatives</label>
                  <span className="text-[10px] text-white/50">Available: <span className="text-white font-bold">{totalUnitsOfType}</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setDeployCount(Math.max(ESPIONAGE_CONFIG.minWraithsPerMission, deployCount - 1))}
                    disabled={deployCount <= ESPIONAGE_CONFIG.minWraithsPerMission}
                    className="h-8 w-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 flex items-center justify-center font-bold"
                  >-</button>
                  <div className="flex-1">
                    <input 
                      type="range" 
                      min={ESPIONAGE_CONFIG.minWraithsPerMission} 
                      max={Math.max(ESPIONAGE_CONFIG.minWraithsPerMission, totalUnitsOfType)} 
                      value={deployCount} 
                      onChange={e => setDeployCount(parseInt(e.target.value))}
                      className="w-full accent-purple-500"
                      disabled={totalUnitsOfType < ESPIONAGE_CONFIG.minWraithsPerMission}
                    />
                  </div>
                  <button 
                    onClick={() => setDeployCount(Math.min(totalUnitsOfType, deployCount + 1))}
                    disabled={deployCount >= totalUnitsOfType}
                    className="h-8 w-8 rounded bg-white/5 border border-white/10 disabled:opacity-30 flex items-center justify-center font-bold"
                  >+</button>
                  <div className="w-10 text-center font-black text-purple-300">{deployCount}</div>
                </div>
              </div>
              
              <button
                onClick={handleDeploy}
                disabled={totalUnitsOfType < ESPIONAGE_CONFIG.minWraithsPerMission}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-white/5 disabled:text-white/30 text-white font-black uppercase tracking-widest text-xs transition"
              >
                {localize({ en: "Deploy Agents", hu: "Ügynökök Bevetése", de: "Agenten Entsenden", ro: "Desfășoară Agenții" })}
              </button>
            </div>
          </div>
        )}

        {/* Intel Expenditure */}
        {state.espionage.totalIntel > 0 && (
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-purple-300/50 mb-3 flex items-center gap-2">
              <span>{localize({ en: "Intel Operations", hu: "Hírszerzési Műveletek", de: "Intel-Operationen", ro: "Operațiuni de Intel" })}</span>
              <div className="h-px bg-purple-500/10 flex-1" />
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {INTEL_ACTIONS.map(action => {
                const canAfford = state.espionage.totalIntel >= action.cost;
                return (
                  <button
                    key={action.id}
                    onClick={() => canAfford && handleSpendIntel(action.id)}
                    disabled={!canAfford}
                    className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${canAfford ? "border-purple-500/30 bg-purple-900/20 hover:bg-purple-800/30 cursor-pointer" : "border-white/5 bg-white/5 opacity-50 cursor-not-allowed"}`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className="flex items-center gap-2 text-purple-300">
                        {action.icon}
                        <span className="font-black text-xs uppercase">{localize(action.name)}</span>
                      </div>
                      <div className={`text-[10px] font-black ${canAfford ? "text-purple-200" : "text-rose-400"}`}>
                        -{action.cost} INTEL
                      </div>
                    </div>
                    <div className="text-[10px] text-white/60 flex-1">
                      {localize(action.desc)}
                    </div>
                    {action.requiresFaction && canAfford && (
                      <select 
                        value={targetActionFaction}
                        onChange={e => setTargetActionFaction(e.target.value as FactionId)}
                        onClick={e => e.stopPropagation()}
                        className="mt-2 w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-[10px] text-white focus:outline-none"
                      >
                        {FACTIONS.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                      </select>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
