"use client";

import { useReducer, useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";

// Simulation & Types
import { reducer } from "@/lib/gravitas/sim/reducer";
import { createInitialStarholdState } from "@/lib/gravitas/sim/createInitialState";
import { saveGravitasState, loadGravitasState } from "@/lib/gravitas/sim/persistence";
import { getGravitasActionSlots } from "@/lib/gravitas/sim/commands";
import { GRAVITAS_TEXT } from "@/lib/gravitas/sim/content";
import type { StarholdState, LocalizedString, StarholdModuleId } from "@/lib/gravitas/sim/types";

// Components
import GalaxyInteriorView from "@/components/gravitas/GalaxyInteriorView";
import ModuleInteriorPanel from "@/components/gravitas/ModuleInteriorPanel";
import JournalPanel from "@/components/gravitas/JournalPanel";
import MarksPanel from "@/components/gravitas/MarksPanel";
import GravitasActivation from "@/components/gravitas/GravitasActivation";
import ModuleUpgradePanel from "@/components/gravitas/ModuleUpgradePanel";
import FactionReputationPanel from "@/components/gravitas/FactionReputationPanel";
import GravitasOverlays from "@/components/gravitas/GravitasOverlays";
import ActionFeedbackPanel from "@/components/gravitas/map/ActionFeedbackPanel";
import GravitasImprint from "@/components/gravitas/GravitasImprint";

// Refactored Components & Hooks
import GravitasHeader from "@/components/gravitas/GravitasHeader";
import GravitasHUD from "@/components/gravitas/GravitasHUD";
import GravitasOverlayHost from "@/components/gravitas/GravitasOverlayHost";
import GravitasSidePanels from "@/components/gravitas/GravitasSidePanels";
import { useGravitasPanels } from "@/components/gravitas/useGravitasPanels";
import { useGravitasActions } from "@/components/gravitas/useGravitasActions";

export default function GravitasPage() {
  const { lang } = useLang();
  const content = GRAVITAS_TEXT;

  const [state, dispatch] = useReducer(reducer, undefined, createInitialStarholdState);
  const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("reactor");
  const [showAwakening, setShowAwakening] = useState(false);

  // Hooks
  const panels = useGravitasPanels();
  const actions = useGravitasActions(dispatch);

  const localize = useCallback((ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en, [lang]);

  // Persistence
  useEffect(() => {
    const saved = loadGravitasState();
    if (saved) dispatch({ type: "LOAD_STATE", state: saved });
  }, []);

  useEffect(() => {
    saveGravitasState(state);
  }, [state]);

  // Tick Loop
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Feedback & Effects
  useEffect(() => {
    if (state.alert) {
      actions.setActionFeedback(state.alert);
      const t = setTimeout(() => actions.setActionFeedback(null), 4000);
      return () => clearTimeout(t);
    }
  }, [state.alert]);

  useEffect(() => {
    if (state.progression.lastStarGain) {
      actions.setStarFeedback(state.progression.lastStarGain);
      const t = setTimeout(() => actions.setStarFeedback(null), 3000);
      return () => clearTimeout(t);
    }
  }, [state.progression.lastStarGain]);

  const moduleActions = useMemo(
    () => getGravitasActionSlots(selectedModule, state),
    [selectedModule, state]
  );

  const handleVictoryAction = (action: "retry" | "continue") => {
    if (action === "retry") {
      dispatch({ type: "RESET_STATE" });
    } else {
      dispatch({ type: "DISMISS_VICTORY" });
    }
  };

  return (
    <div className="relative h-screen w-full bg-[#020408] overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,24,48,1)_0%,_rgba(2,4,8,1)_100%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/stardust.png)" }}
      />
      
      {/* Impact Flash */}
      <AnimatePresence>
        {actions.impactFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 z-[100] pointer-events-none ${actions.impactFlash}`}
          />
        )}
      </AnimatePresence>

      <div className="relative flex flex-col h-full z-10">
        <GravitasHeader
          state={state}
          localize={localize}
          onChronicleOpen={() => panels.setChronicleOpen(true)}
          onShopOpen={() => panels.setShopOpen(true)}
          onCodexOpen={() => panels.setCodexOpen(true)}
          onConcordOpen={() => panels.setConcordOpen(true)}
          onNpcStationsOpen={() => panels.setNpcStationsOpen(true)}
        />

        <main className="relative flex-1 flex overflow-hidden">
          <GravitasHUD state={state} localize={localize} starFeedback={actions.starFeedback} />

          {/* Main Viewport */}
          <div className="flex-1 relative">
            <GalaxyInteriorView
              state={state}
              lang={lang as any}
              onClose={() => {}}
            />

            {/* Action Feedback Overlay */}
            {actions.actionFeedback && (
              <ActionFeedbackPanel 
                feedback={{
                  actionType: "fleet_arrival", // Use a valid type
                  success: true,
                  summary: actions.actionFeedback
                }} 
                lang={lang} 
              />
            )}

            {/* Imprint Overlay */}
            {state.avatarImprintActive && !state.avatarAwake && state.avatarProfile && (
              <GravitasImprint
                state={state}
                profile={state.avatarProfile}
                onBeginHold={() => dispatch({ type: "START_IMPRINT" })}
                onStopHold={() => dispatch({ type: "STOP_IMPRINT" })}
              />
            )}
          </div>

          {/* Right Side: Command Deck */}
          <div className="w-[380px] border-l border-white/5 bg-black/20 backdrop-blur-sm flex flex-col">
            <div className="flex border-b border-white/5">
              {(["modules", "marks", "journal", "activation", "upgrades", "factions"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => panels.setActivePanel(panels.activePanel === p ? null : p)}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-tighter transition-all ${panels.activePanel === p ? "text-cyan-400 bg-white/5" : "text-white/30 hover:text-white/60"}`}
                >
                  {localize(content.ui[p as keyof typeof content.ui] as LocalizedString || { en: p, hu: p, de: p, ro: p })}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {panels.activePanel === "modules" && (
                <ModuleInteriorPanel
                  moduleId={selectedModule}
                  state={state}
                  dispatch={dispatch}
                  lang={lang}
                />
              )}
              {panels.activePanel === "marks" && <MarksPanel state={state} lang={lang} />}
              {panels.activePanel === "journal" && <JournalPanel state={state} lang={lang} />}
              {panels.activePanel === "activation" && (
                <GravitasActivation
                  state={state}
                  t={content.ui as any}
                  onBeginTransfer={() => dispatch({ type: "START_TRANSFER" })}
                  onStopTransfer={() => dispatch({ type: "STOP_TRANSFER" })}
                />
              )}
              {panels.activePanel === "upgrades" && (
                <ModuleUpgradePanel
                  state={state}
                  dispatch={dispatch}
                  lang={lang}
                />
              )}
              {panels.activePanel === "factions" && (
                <FactionReputationPanel
                  factionReputation={state.factionReputation}
                  lang={lang}
                  onClose={() => panels.setActivePanel(null)}
                />
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Overlays & Modals */}
      <GravitasOverlays
        lang={lang}
        content={content}
        ui={content.ui}
        state={state}
        activePanel={panels.activePanel}
        setActivePanel={panels.setActivePanel}
        quickActionsOpen={panels.quickActionsOpen}
        setQuickActionsOpen={panels.setQuickActionsOpen}
        selectedModule={selectedModule}
        setSelectedModule={setSelectedModule}
        localize={localize}
        doAction={actions.doAction}
        restartGravitasChapter={() => dispatch({ type: "RESET_STATE" })}
      />

      <GravitasSidePanels 
        state={state} 
        lang={lang} 
        panels={panels} 
        doAction={actions.doAction} 
      />

      <GravitasOverlayHost 
        state={state} 
        lang={lang} 
        showAwakening={showAwakening} 
        onAwakeningDone={() => setShowAwakening(false)}
        onVictoryAction={handleVictoryAction}
      />
    </div>
  );
}
