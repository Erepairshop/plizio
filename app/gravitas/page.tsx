"use client";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronLeft, Power, Wrench, Radar, Cpu } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import GravitasHUD from "@/components/gravitas/GravitasHUD";
import GravitasAwakening from "@/components/gravitas/GravitasAwakening";
const GravitasScene = dynamic(() => import("@/components/gravitas/GravitasScene"), { ssr: false });
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
import { saveGravitasState, loadGravitasState, clearGravitasState } from "@/lib/gravitas/sim/persistence";
import { applyStarholdCommand, getGravitasActionSlots } from "@/lib/gravitas/sim/commands";
import { canStartActivationTransfer, getActivationStageInfo } from "@/lib/gravitas/sim/activation";
import { advanceStarholdTick } from "@/lib/gravitas/sim/tick";
import type { StarholdCommand, StarholdModuleId, StarholdState } from "@/lib/gravitas/sim/types";

const T = {
  en: {
    title: "Gravitas",
    subtitle: "A damaged station. A dormant shell. Bring the system back online.",
    phaseBoot: "Boot Phase",
    phaseActivation: "Activation Phase",
    phaseAwakened: "Awakened",
    scavenge: "Scavenge materials",
    stabilize: "Stabilize reactor",
    reroute: "Reroute power to core",
    repairLogistics: "Repair logistics",
    hold: "Hold to transfer pulse",
    holdHint: "Press and hold the center control to push your energy into the dormant shell.",
    transferTitle: "Awakening transfer",
    transferStageLabel: "Activation ladder",
    transferStage1: "Conduit primed",
    transferStage2: "Pulse anchored",
    transferStage3: "Shell resonance",
    transferStage4: "Conscious spark",
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
    riskLow: "Low",
    riskRising: "Rising",
    riskCritical: "Critical",
    riskHint: "If scars, strain and supply stress accumulate together, the station can start falling into repeating patterns.",
    reactorScar: "Reactor scar",
    shellStrain: "Shell strain",
    supplyStress: "Supply stress",
    repairSensor: "Repair sensor node",
    repairCore: "Repair core shell",
    actionScavengeHint: "Send a short salvage run into the outer ring.",
    actionReactorHint: "Bleed instability out of the reactor spine.",
    actionCoreHint: "Push the station toward the awakening threshold.",
    actionSensorHint: "Bring the long-range distortion grid back online.",
    back: "Home",
    newGame: "New game",
  },
  hu: {
    title: "Gravitas",
    subtitle: "Sérült állomás. Szunnyadó test. Indítsd újra a rendszert.",
    phaseBoot: "Boot fázis",
    phaseActivation: "Aktiválási fázis",
    phaseAwakened: "Felébredt",
    scavenge: "Nyersanyag gyűjtése",
    stabilize: "Reaktor stabilizálása",
    reroute: "Energia átirányítása a maghoz",
    repairLogistics: "Logisztika javítása",
    hold: "Tartsd nyomva az átvitelt",
    holdHint: "Nyomd és tartsd a központi vezérlőt, mintha az erő belőled áramlana a szunnyadó testbe.",
    transferTitle: "Ébresztési átadás",
    transferStageLabel: "Aktiválási lépcső",
    transferStage1: "Csatorna nyitva",
    transferStage2: "Pulzus rögzítve",
    transferStage3: "Testrezgés",
    transferStage4: "Tudati szikra",
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
    riskLow: "Alacsony",
    riskRising: "Emelkedő",
    riskCritical: "Kritikus",
    riskHint: "Ha a sebek, a testfeszülés és az ellátási nyomás együtt nőnek, az állomás ismétlődő mintákba csúszhat.",
    reactorScar: "Reaktorseb",
    shellStrain: "Testfeszülés",
    supplyStress: "Ellátási nyomás",
    repairSensor: "Szenzormodul javítása",
    repairCore: "Maghéj javítása",
    actionScavengeHint: "Rövid mentést küldesz a külső gyűrűbe.",
    actionReactorHint: "Kiereszted a felesleges instabilitást a reaktormagból.",
    actionCoreHint: "Közelebb tolod az állomást az ébredési küszöbhöz.",
    actionSensorHint: "Újraéleszted a távoli torzulásfigyelő hálót.",
    back: "Főoldal",
    newGame: "Új játék",
  },
  de: {
    title: "Gravitas",
    subtitle: "Eine beschädigte Station. Eine schlafende Hülle. Bring das System zurück.",
    phaseBoot: "Boot-Phase",
    phaseActivation: "Aktivierungsphase",
    phaseAwakened: "Erwacht",
    scavenge: "Material bergen",
    stabilize: "Reaktor stabilisieren",
    reroute: "Energie zum Kern umleiten",
    repairLogistics: "Logistik reparieren",
    hold: "Gedrückt halten für Transfer",
    holdHint: "Halte die zentrale Steuerung gedrückt, als würdest du selbst Energie in die schlafende Hülle leiten.",
    transferTitle: "Erweckungstransfer",
    transferStageLabel: "Aktivierungsleiter",
    transferStage1: "Leitung geöffnet",
    transferStage2: "Puls verankert",
    transferStage3: "Hüllenresonanz",
    transferStage4: "Bewusstseinsfunke",
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
    riskLow: "Niedrig",
    riskRising: "Steigend",
    riskCritical: "Kritisch",
    riskHint: "Wenn Narben, Hüllenspannung und Versorgungsdruck gemeinsam wachsen, kann die Station in Wiederholungsmuster fallen.",
    reactorScar: "Reaktornarbe",
    shellStrain: "Hüllenspannung",
    supplyStress: "Versorgungsdruck",
    repairSensor: "Sensorenknoten reparieren",
    repairCore: "Kernhülle reparieren",
    actionScavengeHint: "Schicke einen kurzen Bergungslauf in den äußeren Ring.",
    actionReactorHint: "Lass Instabilität aus dem Reaktorrücken abfließen.",
    actionCoreHint: "Schiebe die Station näher an die Erwachensschwelle.",
    actionSensorHint: "Hole das Distortionsgitter auf Reichweite zurück.",
    back: "Start",
    newGame: "Neues Spiel",
  },
  ro: {
    title: "Gravitas",
    subtitle: "O stație avariată. Un corp adormit. Repune sistemul în viață.",
    phaseBoot: "Faza Boot",
    phaseActivation: "Faza de activare",
    phaseAwakened: "Trezit",
    scavenge: "Colectează resurse",
    stabilize: "Stabilizează reactorul",
    reroute: "Redirecționează energia spre nucleu",
    repairLogistics: "Repară logistica",
    hold: "Ține apăsat pentru transfer",
    holdHint: "Ține apăsat controlul central, ca și cum energia ar curge din tine în corpul adormit.",
    transferTitle: "Transfer de trezire",
    transferStageLabel: "Scara activării",
    transferStage1: "Canal deschis",
    transferStage2: "Puls fixat",
    transferStage3: "Rezonanța corpului",
    transferStage4: "Scânteie conștientă",
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
    riskLow: "Scăzut",
    riskRising: "În creștere",
    riskCritical: "Critic",
    riskHint: "Dacă cicatricile, tensiunea și presiunea logistică cresc împreună, stația poate aluneca în tipare repetitive.",
    reactorScar: "Cicatrice reactor",
    shellStrain: "Tensiune corp",
    supplyStress: "Presiune logistică",
    repairSensor: "Repară nodul senzor",
    repairCore: "Repară carcasa nucleului",
    actionScavengeHint: "Trimite o scurtă recuperare în inelul exterior.",
    actionReactorHint: "Eliberează instabilitatea din coloana reactorului.",
    actionCoreHint: "Împinge stația mai aproape de pragul trezirii.",
    actionSensorHint: "Repune în funcțiune rețeaua de distorsiuni la distanță.",
    back: "Acasă",
    newGame: "Joc nou",
  },
} as const;

const MODULE_COPY = {
  en: {
    reactor: {
      role: "Keeps the station breathing and smooths out dangerous power spikes.",
    },
    logistics: {
      role: "Pulls salvage in from the outer hull and reopens dormant supply routes.",
    },
    core: {
      role: "Holds the dormant shell and becomes the center of the awakening ritual.",
    },
    sensor: {
      role: "Reads distortion, signal drift and faint activity beyond the hull.",
    },
  },
  hu: {
    reactor: {
      role: "Életben tartja az állomást és kisimítja a veszélyes energialökéseket.",
    },
    logistics: {
      role: "Begyűjti a külső roncsmezőből a nyersanyagot és újranyitja az ellátási útvonalakat.",
    },
    core: {
      role: "Itt nyugszik a szunnyadó test, és ez lesz az ébredés központja.",
    },
    sensor: {
      role: "A torzulásokat, jeleltolódásokat és a burkon túli halvány aktivitást figyeli.",
    },
  },
  de: {
    reactor: {
      role: "Hält die Station am Leben und dämpft gefährliche Energiespitzen.",
    },
    logistics: {
      role: "Zieht Bergungsgut aus der Außenhülle und öffnet Versorgungslinien erneut.",
    },
    core: {
      role: "Hier ruht die schlafende Hülle, und hier beginnt das Erwachen.",
    },
    sensor: {
      role: "Erfasst Verzerrungen, Signaldrift und schwache Aktivität außerhalb der Hülle.",
    },
  },
  ro: {
    reactor: {
      role: "Ține stația în viață și amortizează vârfurile periculoase de energie.",
    },
    logistics: {
      role: "Aduce materiale din carcasa exterioară și redeschide rutele de aprovizionare.",
    },
    core: {
      role: "Aici se află corpul adormit și tot aici începe trezirea.",
    },
    sensor: {
      role: "Citește distorsiuni, deviații de semnal și activitate slabă dincolo de carcasă.",
    },
  },
} as const;

function reducer(state: StarholdState, command: StarholdCommand | { type: "__TICK__" } | { type: "__RESET__" }) {
  if (command.type === "__RESET__") return createInitialStarholdState();
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
  const moduleCopy = MODULE_COPY[lang as keyof typeof MODULE_COPY] ?? MODULE_COPY.en;
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    () => loadGravitasState() ?? createInitialStarholdState()
  );
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("core");
  const [showAwakening, setShowAwakening] = useState(false);
  const didShowAwakening = useRef(false);
  const holdRef = useRef<number | null>(null);

  useEffect(() => {
    saveGravitasState(state);
  }, [state]);

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

  useEffect(() => {
    if (state.avatarAwake && !didShowAwakening.current) {
      didShowAwakening.current = true;
      setShowAwakening(true);
    }
  }, [state.avatarAwake]);

  const phaseLabel = useMemo(() => {
    if (state.phase === "boot") return t.phaseBoot;
    if (state.phase === "activation") return t.phaseActivation;
    return t.phaseAwakened;
  }, [state.phase, t]);

  const canReroute = canStartActivationTransfer(state);

  const beginTransfer = () => {
    if (state.phase !== "activation" || holdRef.current !== null || state.avatarAwake) return;
    holdRef.current = window.setInterval(() => {
      dispatch({ type: "CHANNEL_TO_CORE", amount: 4 });
    }, 160);
  };

  const stopTransfer = () => {
    if (holdRef.current !== null) {
      window.clearInterval(holdRef.current);
      holdRef.current = null;
    }
  };

  const handleNewGame = () => {
    if (!window.confirm(t.newGame + "?")) return;
    clearGravitasState();
    dispatch({ type: "__RESET__" });
    setSelectedModule("core");
  };

  const selectedModuleState = state.modules[selectedModule];
  const totalMarks = state.marks.reactorScar + state.marks.shellStrain + state.marks.supplyStress;
  const driftRiskLabel =
    totalMarks >= 7 ? t.riskCritical : totalMarks >= 4 ? t.riskRising : t.riskLow;
  const activationPercent = state.resources.activation;
  const activationStageInfo = useMemo(
    () => getActivationStageInfo(activationPercent, state.avatarAwake),
    [activationPercent, state.avatarAwake]
  );
  const transferStage = activationStageInfo.stage;
  const moduleActions = useMemo(
    () => getGravitasActionSlots(selectedModule, state),
    [selectedModule, state]
  );
  const transferStages = [t.transferStage1, t.transferStage2, t.transferStage3, t.transferStage4];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-3 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
              <ChevronLeft size={16} /> {t.back}
            </Link>
            <button
              onClick={handleNewGame}
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium"
            >
              {t.newGame}
            </button>
          </div>
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-black">{phaseLabel}</div>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[20px] sm:rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%),rgba(255,255,255,0.04)] backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-black">{t.title}</div>
                <h1 className="mt-2 sm:mt-3 text-base sm:text-2xl lg:text-4xl font-black leading-snug">{t.subtitle}</h1>
              </div>
              <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-full border border-cyan-300/30 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.16)]">
                <div className={`w-11 h-11 sm:w-16 sm:h-16 rounded-full transition-all duration-500 ${state.avatarAwake ? "bg-pink-400 shadow-[0_0_45px_rgba(244,114,182,0.7)]" : "bg-white/15"}`} />
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <GravitasHUD
                power={state.resources.power}
                materials={state.resources.materials}
                stability={state.resources.stability}
                activation={state.resources.activation}
              />
            </div>

            <div className="mt-4 sm:mt-6 overflow-hidden rounded-xl" style={{ maxHeight: "min(52vw, 340px)", minHeight: "180px" }}>
              <GravitasScene
                state={state}
                selectedModule={selectedModule}
                onSelectModule={setSelectedModule}
                activeEventId={state.pendingEvent?.id ?? null}
                pendingEvent={state.pendingEvent}
              />
            </div>

            <div className="mt-5 sm:mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{t.objective}</div>
                <p className="mt-3 text-white/75 leading-relaxed">{t.objectiveText}</p>
                {state.avatarAwake && (
                  <p className="mt-4 text-pink-200 font-semibold">{t.awakened}</p>
                )}
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/6 p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-cyan-200 font-black">{t.transferTitle}</div>
                <div className="mt-4 flex flex-col xs:flex-row items-start xs:items-center gap-4">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 mx-auto xs:mx-0">
                    <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
                    <div
                      className="absolute inset-2 rounded-full border-2 border-pink-300/40 transition-all duration-500"
                      style={{
                        transform: `scale(${0.84 + activationPercent / 500})`,
                        opacity: 0.55 + activationPercent / 250,
                      }}
                    />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300/30 via-fuchsia-400/25 to-pink-400/35 shadow-[0_0_40px_rgba(244,114,182,0.22)]" />
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-white">
                      {activationPercent}%
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 transition-all"
                        style={{ width: `${activationPercent}%` }}
                      />
                    </div>
                    <p className="mt-3 text-sm text-white/70">
                      {state.phase === "activation" || state.avatarAwake ? t.transferReady : t.transferLocked}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-black">{t.transferStageLabel}</div>
                  <div className="mt-3 grid gap-2">
                    {transferStages.map((label, index) => {
                      const stageIndex = index + 1;
                      const active = transferStage >= stageIndex;
                      return (
                        <div
                          key={label}
                          className={[
                            "rounded-xl border px-3 py-2 text-sm transition",
                            active
                              ? "border-pink-400/30 bg-pink-500/10 text-pink-100"
                              : "border-white/10 bg-black/20 text-white/45",
                          ].join(" ")}
                        >
                          <span className="font-black mr-2">{stageIndex}.</span>
                          {label}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button
                  type="button"
                  onMouseDown={beginTransfer}
                  onMouseUp={stopTransfer}
                  onMouseLeave={stopTransfer}
                  onTouchStart={beginTransfer}
                  onTouchEnd={stopTransfer}
                  disabled={state.phase !== "activation" || state.avatarAwake}
                  className={[
                    "mt-4 w-full rounded-2xl border px-4 py-4 text-sm font-black transition-all",
                    state.phase === "activation" && !state.avatarAwake
                      ? "border-pink-400/40 bg-pink-500/12 text-pink-100 shadow-[0_0_25px_rgba(244,114,182,0.18)]"
                      : "border-white/10 bg-white/5 text-white/35 cursor-not-allowed",
                  ].join(" ")}
                >
                  {t.hold}
                </button>
                {state.avatarAwake && (
                  <div className="mt-4 rounded-2xl border border-pink-400/25 bg-pink-500/10 px-4 py-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-pink-200/75 font-black">{t.awakeningMoment}</div>
                    <div className="mt-2 text-sm leading-relaxed text-pink-50/90">{t.awakeningBody}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 grid gap-3 grid-cols-2 xl:grid-cols-4">
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
                  <div className="mt-2 text-white/82">{moduleCopy[selectedModule].role}</div>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45 font-black">{t.marks}</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
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
              </div>
              <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-500/[0.04] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-amber-100/70 font-black">{t.driftRisk}</div>
                  <div className={`rounded-full px-3 py-1 text-[11px] font-black ${totalMarks >= 7 ? "bg-rose-500/15 text-rose-200" : totalMarks >= 4 ? "bg-amber-400/15 text-amber-200" : "bg-emerald-400/15 text-emerald-200"}`}>
                    {driftRiskLabel}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{t.riskHint}</p>
              </div>
            </section>

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
              <div className="mt-4 space-y-2 max-h-48 sm:max-h-none overflow-y-auto">
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
      {showAwakening && (
        <GravitasAwakening lang={lang} onDone={() => setShowAwakening(false)} />
      )}
    </main>
  );
}
