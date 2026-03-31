"use client";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Power, Wrench, Radar, Cpu } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import GravitasHUD from "@/components/gravitas/GravitasHUD";
import GravitasScene from "@/components/gravitas/GravitasScene";
import GravitasActivation from "@/components/gravitas/GravitasActivation";
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
import { applyStarholdCommand, getGravitasActionSlots } from "@/lib/gravitas/sim/commands";
import { canStartActivationTransfer } from "@/lib/gravitas/sim/activation";
import { advanceStarholdTick } from "@/lib/gravitas/sim/tick";
import type { StarholdCommand, StarholdModuleId, StarholdState } from "@/lib/gravitas/sim/types";
import { GRAVITAS_TEXT } from "@/lib/gravitas/sim/content";

const T = {
  en: {
    title: "Gravitas",
    subtitle: "A damaged station. A dormant shell. Bring the system back online.",
    scavenge: "Scavenge materials",
    stabilize: "Stabilize reactor",
    reroute: "Reroute power to core",
    repairLogistics: "Repair logistics",
    hold: "Hold to transfer pulse",
    holdHint: "Press and hold the center control to push your energy into the dormant shell.",
    transferTitle: "Awakening transfer",
    transferStageLabel: "Activation ladder",
    transferStage0: "Dormant shell",
    transferStage1: "Conduit primed",
    transferStage2: "Pulse anchored",
    transferStage3: "Shell resonance",
    transferStage4: "Conscious spark",
    resonance: "Resonance",
    transferReady: "The chamber is listening. Hold the transfer and push your own pulse into the shell.",
    transferLocked: "Stabilize the station first, then route power into the core chamber.",
    awakeningMoment: "Awakening moment",
    awakeningBody: "The shell catches your pulse, opens its eyes and becomes the first living version of your avatar.",
    modules: "Modules",
    focus: "Focus",
    focusHint: "Tap a module in the station view to inspect its status and current role.",
    actions: "Actions",
    actionHint: "The current command deck changes with the module you are focusing on.",
    journal: "Journal",
    eventTitle: "Live event",
    resolve: "Resolve",
    eventChain: "Incident chain",
    objective: "Objective",
    objectiveText: "Recover enough power and stability to awaken the shell in the core chamber.",
    awakened: "The shell opened its eyes. This is the first living spark of your avatar.",
    offline: "Offline",
    online: "Online",
    integrity: "Integrity",
    load: "Load",
    selectedStatus: "Status",
    selectedRole: "Role",
    marks: "Persistent marks",
    driftRisk: "Drift risk",
    riskHint: "If scars, strain and supply stress accumulate together, the station can start falling into repeating patterns.",
    reactorScar: "Reactor scar",
    shellStrain: "Shell strain",
    supplyStress: "Supply stress",
    voidEcho: "Void echo",
    anomalies: "Active anomalies",
    purge: "Purge",
    severity: "Severity",
    repairSensor: "Repair sensor node",
    repairCore: "Repair core shell",
    actionScavengeHint: "Send a short salvage run into the outer ring.",
    actionReactorHint: "Bleed instability out of the reactor spine.",
    actionCoreHint: "Push the station toward the awakening threshold.",
    actionSensorHint: "Bring the long-range distortion grid back online.",
    back: "Home",
  },
  hu: {
    title: "Gravitas",
    subtitle: "Sérült állomás. Szunnyadó test. Indítsd újra a rendszert.",
    scavenge: "Nyersanyag gyűjtése",
    stabilize: "Reaktor stabilizálása",
    reroute: "Energia átirányítása a maghoz",
    repairLogistics: "Logisztika javítása",
    hold: "Tartsd nyomva az átvitelt",
    holdHint: "Nyomd és tartsd a központi vezérlőt, mintha az erő belőled áramlana a szunnyadó testbe.",
    transferTitle: "Ébresztési átadás",
    transferStageLabel: "Aktiválási lépcső",
    transferStage0: "Szunnyadó test",
    transferStage1: "Csatorna nyitva",
    transferStage2: "Pulzus rögzítve",
    transferStage3: "Testrezgés",
    transferStage4: "Tudati szikra",
    resonance: "Rezonancia",
    transferReady: "A kamra már figyel. Tartsd az átvitelt, és told át a saját pulzusodat a testbe.",
    transferLocked: "Előbb stabilizáld az állomást, majd irányíts energiát a magkamrába.",
    awakeningMoment: "Ébredési pillanat",
    awakeningBody: "A test elkapja a pulzusodat, kinyitja a szemét, és az avatárod első élő formájává válik.",
    modules: "Modulok",
    focus: "Fókusz",
    focusHint: "Érints meg egy modult az állomásnézetben, hogy lásd az állapotát és szerepét.",
    actions: "Műveletek",
    actionHint: "A parancspanel annak megfelelően változik, hogy melyik modulra fókuszálsz.",
    journal: "Napló",
    eventTitle: "Aktív esemény",
    resolve: "Döntés",
    eventChain: "Incidenslánc",
    objective: "Cél",
    objectiveText: "Szerezz elég energiát és stabilitást ahhoz, hogy felébresszd a testet a magkamrában.",
    awakened: "A test felnézett. Ez az avatárod első valódi pillanata.",
    offline: "Offline",
    online: "Online",
    integrity: "Integritás",
    load: "Terhelés",
    selectedStatus: "Állapot",
    selectedRole: "Szerep",
    marks: "Tartós nyomok",
    driftRisk: "Drift kockázat",
    riskHint: "Ha a sebek, a testfeszülés és az ellátási nyomás együtt nőnek, az állomás ismétlődő mintákba csúszhat.",
    reactorScar: "Reaktorseb",
    shellStrain: "Testfeszülés",
    supplyStress: "Ellátási nyomás",
    voidEcho: "Void visszhang",
    anomalies: "Aktív anomáliák",
    purge: "Semlegesítés",
    severity: "Súlyosság",
    repairSensor: "Szenzormodul javítása",
    repairCore: "Maghéj javítása",
    actionScavengeHint: "Rövid mentést küldesz a külső gyűrűbe.",
    actionReactorHint: "Kiereszted a felesleges instabilitást a reaktormagból.",
    actionCoreHint: "Közelebb tolod az állomást az ébredési küszöbhöz.",
    actionSensorHint: "Újraéleszted a távoli torzulásfigyelő hálót.",
    back: "Főoldal",
  },
  de: {
    title: "Gravitas",
    subtitle: "Eine beschädigte Station. Eine schlafende Hülle. Bring das System zurück.",
    scavenge: "Material bergen",
    stabilize: "Reaktor stabilisieren",
    reroute: "Energie zum Kern umleiten",
    repairLogistics: "Logistik reparieren",
    hold: "Gedrückt halten für Transfer",
    holdHint: "Halte die zentrale Steuerung gedrückt, als würdest du selbst Energie in die schlafende Hülle leiten.",
    transferTitle: "Erweckungstransfer",
    transferStageLabel: "Aktivierungsleiter",
    transferStage0: "Schlafende Hülle",
    transferStage1: "Leitung geöffnet",
    transferStage2: "Puls verankert",
    transferStage3: "Hüllenresonanz",
    transferStage4: "Bewusstseinsfunke",
    resonance: "Resonanz",
    transferReady: "Die Kammer hört zu. Halte den Transfer und drücke deinen Puls in die Hülle.",
    transferLocked: "Stabilisiere zuerst die Station und leite dann Energie in die Kernkammer.",
    awakeningMoment: "Erwachensmoment",
    awakeningBody: "Die Hülle fängt deinen Puls auf, öffnet die Augen und wird zur ersten lebendigen Form deines Avatars.",
    modules: "Module",
    focus: "Fokus",
    focusHint: "Tippe im Stationsbild auf ein Modul, um Zustand und Aufgabe zu prüfen.",
    actions: "Aktionen",
    actionHint: "Das Befehlsfeld passt sich dem gerade fokussierten Modul an.",
    journal: "Logbuch",
    eventTitle: "Aktives Ereignis",
    resolve: "Entscheidung",
    eventChain: "Ereigniskette",
    objective: "Ziel",
    objectiveText: "Sammle genug Energie und Stabilität, um die Hülle in der Kernkammer zu erwecken.",
    awakened: "Die Hülle hat die Augen geöffnet. Das ist der erste lebendige Moment deines Avatars.",
    offline: "Offline",
    online: "Online",
    integrity: "Integrität",
    load: "Last",
    selectedStatus: "Status",
    selectedRole: "Rolle",
    marks: "Dauerhafte Spuren",
    driftRisk: "Driftrisiko",
    riskHint: "Wenn Narben, Hüllenspannung und Versorgungsdruck gemeinsam wachsen, kann die Station in Wiederholungsmuster fallen.",
    reactorScar: "Reaktornarbe",
    shellStrain: "Hüllenspannung",
    supplyStress: "Versorgungsdruck",
    voidEcho: "Void-Echo",
    anomalies: "Aktive Anomalien",
    purge: "Tilgen",
    severity: "Stärke",
    repairSensor: "Sensorenknoten reparieren",
    repairCore: "Kernhülle reparieren",
    actionScavengeHint: "Schicke einen kurzen Bergungslauf in den äußeren Ring.",
    actionReactorHint: "Lass Instabilität aus dem Reaktorrücken abfließen.",
    actionCoreHint: "Schiebe die Station näher an die Erwachensschwelle.",
    actionSensorHint: "Hole das Distortionsgitter auf Reichweite zurück.",
    back: "Start",
  },
  ro: {
    title: "Gravitas",
    subtitle: "O stație avariată. Un corp adormit. Repune sistemul în viață.",
    scavenge: "Colectează resurse",
    stabilize: "Stabilizează reactorul",
    reroute: "Redirecționează energia spre nucleu",
    repairLogistics: "Repară logistica",
    hold: "Ține apăsat pentru transfer",
    holdHint: "Ține apăsat controlul central, ca și cum energia ar curge din tine în corpul adormit.",
    transferTitle: "Transfer de trezire",
    transferStageLabel: "Scara activării",
    transferStage0: "Corp adormit",
    transferStage1: "Canal deschis",
    transferStage2: "Puls fixat",
    transferStage3: "Rezonanța corpului",
    transferStage4: "Scânteie conștientă",
    resonance: "Rezonanță",
    transferReady: "Camera ascultă deja. Ține transferul și împinge propriul puls în corp.",
    transferLocked: "Stabilizează mai întâi stația, apoi redirecționează energia spre camera nucleului.",
    awakeningMoment: "Momentul trezirii",
    awakeningBody: "Corpul îți prinde pulsul, deschide ochii și devine prima formă vie a avatarului tău.",
    modules: "Module",
    focus: "Focus",
    focusHint: "Atinge un modul din imaginea stației pentru a-i vedea starea și rolul.",
    actions: "Acțiuni",
    actionHint: "Panoul de comandă se schimbă în funcție de modulul pe care îl urmărești.",
    journal: "Jurnal",
    eventTitle: "Eveniment activ",
    resolve: "Decizie",
    eventChain: "Lanț de incidente",
    objective: "Obiectiv",
    objectiveText: "Adună suficientă energie și stabilitate pentru a trezi corpul din camera nucleului.",
    awakened: "Corpul a deschis ochii. Acesta este primul moment viu al avatarului tău.",
    offline: "Offline",
    online: "Online",
    integrity: "Integritate",
    load: "Încărcare",
    selectedStatus: "Stare",
    selectedRole: "Rol",
    marks: "Urme persistente",
    driftRisk: "Risc de derivă",
    riskHint: "Dacă cicatricile, tensiunea și presiunea logistică cresc împreună, stația poate aluneca în tipare repetitive.",
    reactorScar: "Cicatrice reactor",
    shellStrain: "Tensiune corp",
    supplyStress: "Presiune logistică",
    voidEcho: "Ecou void",
    anomalies: "Anomalii active",
    purge: "Purjează",
    severity: "Severitate",
    repairSensor: "Repară nodul senzor",
    repairCore: "Repară carcasa nucleului",
    actionScavengeHint: "Trimite o scurtă recuperare în inelul exterior.",
    actionReactorHint: "Eliberează instabilitatea din coloana reactorului.",
    actionCoreHint: "Împinge stația mai aproape de pragul trezirii.",
    actionSensorHint: "Repune în funcțiune rețeaua de distorsiuni la distanță.",
    back: "Acasă",
  },
} as const;

function reducer(state: StarholdState, command: StarholdCommand | { type: "__TICK__" }) {
  if (command.type === "__TICK__") {
    return advanceStarholdTick(state);
  }
  return applyStarholdCommand(state, command);
}

function moduleIcon(moduleId: StarholdModuleId) {
  switch (moduleId) {
    case "reactor":
      return Power;
    case "logistics":
      return Wrench;
    case "sensor":
      return Radar;
    case "core":
      return Cpu;
  }
}

export default function GravitasPage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const content = GRAVITAS_TEXT;

  const [state, dispatch] = useReducer(reducer, undefined, createInitialStarholdState);
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("core");
  const holdRef = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      dispatch({ type: "__TICK__" });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    return () => {
      if (holdRef.current !== null) {
        window.clearInterval(holdRef.current);
      }
    };
  }, []);

  const phaseLabel = useMemo(() => {
    const ui = content.ui;
    if (state.phase === "boot") return ui.phaseBoot[lang as keyof typeof ui.phaseBoot] ?? ui.phaseBoot.en;
    if (state.phase === "activation") return ui.phaseActivation[lang as keyof typeof ui.phaseActivation] ?? ui.phaseActivation.en;
    return ui.phaseAwakened[lang as keyof typeof ui.phaseAwakened] ?? ui.phaseAwakened.en;
  }, [state.phase, lang, content.ui]);

  const canReroute = canStartActivationTransfer(state);

  const beginTransfer = () => {
    if (state.phase !== "activation" || holdRef.current !== null || state.avatarAwake) return;
    holdRef.current = window.setInterval(() => {
      dispatch({ type: "CHANNEL_TO_CORE", amount: 0.6 });
    }, 60);
  };

  const stopTransfer = () => {
    if (holdRef.current !== null) {
      window.clearInterval(holdRef.current);
      holdRef.current = null;
    }
  };

  const selectedModuleState = state.modules[selectedModule];
  const totalMarks = state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress + state.marks.voidEcho;
  const driftRiskLabel = useMemo(() => {
    const ui = content.ui;
    const labelObj = totalMarks >= 7 ? ui.riskCritical : totalMarks >= 4 ? ui.riskRising : ui.riskLow;
    return labelObj[lang as keyof typeof labelObj] ?? labelObj.en;
  }, [totalMarks, lang, content.ui]);

  const activationPercent = state.resources.activation;
  const moduleActions = useMemo(
    () => getGravitasActionSlots(selectedModule, state),
    [selectedModule, state]
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-3 mb-5">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
            <ChevronLeft size={16} /> {t.back}
          </Link>
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-black">{phaseLabel}</div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%),rgba(255,255,255,0.04)] backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-black">{t.title}</div>
                <h1 className="mt-3 text-3xl sm:text-5xl font-black">{t.subtitle}</h1>
              </div>
              <div className="w-28 h-28 rounded-full border border-cyan-300/30 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.16)]">
                <div className={`w-16 h-16 rounded-full transition-all duration-500 ${state.avatarAwake ? "bg-pink-400 shadow-[0_0_45px_rgba(244,114,182,0.7)]" : "bg-white/15"}`} />
              </div>
            </div>

            <div className="mt-6">
              <GravitasHUD
                power={state.resources.power}
                materials={state.resources.materials}
                stability={state.resources.stability}
                activation={state.resources.activation}
              />
            </div>

            <div className="mt-6">
              <GravitasScene
                state={state}
                selectedModule={selectedModule}
                onSelectModule={setSelectedModule}
                activeEventId={state.pendingEvent?.id ?? null}
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{t.objective}</div>
                <p className="mt-3 text-white/75 leading-relaxed">{t.objectiveText}</p>
                {state.avatarAwake && (
                  <p className="mt-4 text-pink-200 font-semibold">{t.awakened}</p>
                )}
              </div>
              <GravitasActivation
                state={state}
                t={t}
                onBeginTransfer={beginTransfer}
                onStopTransfer={stopTransfer}
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <button
                type="button"
                onClick={() => dispatch({ type: "SCAVENGE" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">01</div>
                <div className="mt-2 font-black">{t.scavenge}</div>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "STABILIZE_REACTOR" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">02</div>
                <div className="mt-2 font-black">{t.stabilize}</div>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "REPAIR_MODULE", moduleId: "logistics" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">03</div>
                <div className="mt-2 font-black">{t.repairLogistics}</div>
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "REROUTE_TO_CORE" })}
                disabled={!canReroute}
                className={[
                  "rounded-2xl border px-4 py-4 text-left transition",
                  canReroute
                    ? "border-cyan-300/30 bg-cyan-400/10 hover:bg-cyan-400/15"
                    : "border-white/10 bg-white/5 text-white/35 cursor-not-allowed",
                ].join(" ")}
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">04</div>
                <div className="mt-2 font-black">{t.reroute}</div>
              </button>
            </div>
          </section>

          <aside className="grid gap-5">
            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{t.modules}</div>
              <div className="mt-4 space-y-3">
                {Object.values(state.modules).map((module) => {
                  const Icon = moduleIcon(module.id);
                  const isSelected = module.id === selectedModule;
                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setSelectedModule(module.id)}
                      className={[
                        "w-full rounded-2xl border bg-black/20 p-4 text-left transition",
                        isSelected ? "border-pink-400/35 bg-pink-500/8" : "border-white/10 hover:bg-white/6",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-pink-400/16 text-pink-200" : module.online ? "bg-cyan-400/12 text-cyan-200" : "bg-white/8 text-white/40"}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-black">{module.name}</div>
                            <div className="text-xs text-white/50">{module.online ? t.online : t.offline}</div>
                          </div>
                        </div>
                        <div className="text-right text-xs text-white/55">
                          <div>{t.integrity}: {module.integrity}%</div>
                          <div>{t.load}: {module.load}%</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[28px] border border-pink-300/15 bg-pink-500/[0.04] p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-pink-200/75 font-black">{t.focus}</div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-xl font-black">{selectedModuleState.name}</div>
                <div className={`rounded-full px-3 py-1 text-xs font-black ${selectedModuleState.online ? "bg-cyan-400/12 text-cyan-200" : "bg-white/8 text-white/50"}`}>
                  {selectedModuleState.online ? t.online : t.offline}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{t.focusHint}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{t.selectedStatus}</div>
                  <div className="mt-2 text-white/82">{t.integrity}: {selectedModuleState.integrity}%</div>
                  <div className="text-white/62">{t.load}: {selectedModuleState.load}%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{t.selectedRole}</div>
                  <div className="mt-2 text-white/82">{content.modules[selectedModule].role[lang as Lang] ?? content.modules[selectedModule].role.en}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{t.marks}</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{t.reactorScar}</div>
                  <div className="mt-2 text-lg font-black text-rose-200">{state.marks.reactorScar}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{t.shellStrain}</div>
                  <div className="mt-2 text-lg font-black text-pink-200">{state.marks.shellStrain}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{t.supplyStress}</div>
                  <div className="mt-2 text-lg font-black text-amber-200">{state.marks.supplyStress}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-black">{t.voidEcho}</div>
                  <div className="mt-2 text-lg font-black text-indigo-200">{state.marks.voidEcho}</div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-500/[0.04] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-amber-100/70 font-black">{t.driftRisk}</div>
                  <div className={`rounded-full px-3 py-1 text-[11px] font-black ${totalMarks >= 12 ? "bg-rose-500/15 text-rose-200" : totalMarks >= 6 ? "bg-amber-400/15 text-amber-200" : "bg-emerald-400/15 text-emerald-200"}`}>
                    {driftRiskLabel}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{t.riskHint}</p>
              </div>
            </section>

            {state.anomalies.length > 0 && (
              <section className="rounded-[28px] border border-rose-400/20 bg-rose-500/[0.08] p-5 shadow-2xl">
                <div className="text-xs uppercase tracking-[0.28em] text-rose-200/80 font-black">{t.anomalies}</div>
                <div className="mt-4 space-y-3">
                  {state.anomalies.map((anomaly) => (
                    <div key={anomaly.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-black text-rose-100">{anomaly.name}</div>
                        <div className="text-xs text-rose-300 font-black uppercase tracking-wider">{t.severity}: {anomaly.severity}</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                         <div className="h-1 flex-1 rounded-full bg-white/10">
                            <div className="h-full bg-rose-400 rounded-full" style={{ width: `${(anomaly.severity / 5) * 100}%` }} />
                         </div>
                         {anomaly.duration !== undefined && (
                           <div className="text-[10px] text-white/40">{anomaly.duration}T</div>
                         )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-[28px] border border-cyan-300/15 bg-cyan-400/[0.04] p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/80 font-black">{t.actions}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/68">{t.actionHint}</p>
              <div className="mt-4 grid gap-3">
                {moduleActions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => dispatch(action.command)}
                      disabled={action.disabled || !!state.pendingEvent}
                      className={[
                        "rounded-2xl border px-4 py-4 text-left transition",
                        action.disabled || state.pendingEvent
                          ? "border-white/10 bg-white/5 text-white/35 cursor-not-allowed"
                        : action.emphasis === "primary"
                          ? "border-pink-300/25 bg-pink-500/8 hover:bg-pink-500/12"
                          : "border-cyan-300/20 bg-black/20 hover:bg-cyan-400/10",
                      ].join(" ")}
                    >
                    <div className="font-black">{action.label}</div>
                    <div className="mt-1 text-sm text-white/60">{action.hint}</div>
                  </button>
                ))}
              </div>
            </section>

            {state.pendingEvent && (
              <section className="rounded-[28px] border border-amber-300/20 bg-amber-500/[0.06] p-5 shadow-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs uppercase tracking-[0.28em] text-amber-200/80 font-black">{t.eventTitle}</div>
                  {state.pendingEvent.chainStep && state.pendingEvent.chainTotal && (
                    <div className="rounded-full border border-amber-300/20 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-100/75 font-black">
                      {t.eventChain} {state.pendingEvent.chainStep}/{state.pendingEvent.chainTotal}
                    </div>
                  )}
                </div>
                <div className="mt-3 text-xl font-black text-white">{state.pendingEvent.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/72">{state.pendingEvent.body}</p>
                <div className="mt-4 grid gap-3">
                  {state.pendingEvent.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => dispatch({ type: "RESOLVE_EVENT", optionId: option.id })}
                      className="rounded-2xl border border-amber-300/20 bg-black/20 px-4 py-3 text-left transition hover:bg-amber-400/10"
                    >
                      <div className="text-[11px] uppercase tracking-[0.22em] text-amber-200/60 font-black">{t.resolve}</div>
                      <div className="mt-1 font-black text-white">{option.label}</div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{t.journal}</div>
              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/6 px-4 py-3 text-sm text-cyan-100">
                {state.alert}
              </div>
              <div className="mt-4 space-y-2">
                {state.journal.map((line) => (
                  <div key={line} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/72">
                    {line}
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
