"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import StarChamberPanel from "@/components/gravitas/StarChamberPanel";
import ChroniclePanel from "@/components/gravitas/ChroniclePanel";
import EspionagePanel from "@/components/gravitas/EspionagePanel";
import ResearchPanel from "@/components/gravitas/ResearchPanel";
import TradePanel from "@/components/gravitas/TradePanel";
import CodexPanel from "@/components/gravitas/CodexPanel";
import OfficerLoungePanel from "@/components/gravitas/OfficerLoungePanel";
import FactionWarsPanel from "@/components/gravitas/FactionWarsPanel";
import ExpeditionsPanel from "@/components/gravitas/ExpeditionsPanel";
import type { StarholdState, StarholdCommand } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  lang: string;
  panels: any; // useGravitasPanels return type
  doAction: (cmd: StarholdCommand, color: string) => void;
}

export default function GravitasSidePanels({ state, lang, panels, doAction }: Props) {
  return (
    <AnimatePresence>
      {panels.shopOpen && (
        <StarChamberPanel
          key="star-chamber"
          state={state}
          lang={lang}
          onClose={() => panels.setShopOpen(false)}
          doAction={doAction}
        />
      )}
      {panels.chronicleOpen && (
        <ChroniclePanel
          key="chronicle"
          state={state}
          lang={lang}
          onClose={() => panels.setChronicleOpen(false)}
        />
      )}
      {panels.espionageOpen && (
        <EspionagePanel
          key="espionage"
          state={state}
          lang={lang}
          onClose={() => panels.setEspionageOpen(false)}
          doAction={doAction}
        />
      )}
      {panels.researchOpen && (
        <ResearchPanel
          key="research"
          state={state}
          lang={lang}
          onClose={() => panels.setResearchOpen(false)}
          doAction={doAction}
        />
      )}
      {panels.tradeOpen && (
        <TradePanel
          key="trade"
          state={state}
          lang={lang}
          onClose={() => panels.setTradeOpen(false)}
          doAction={doAction}
        />
      )}
      {panels.codexOpen && (
        <CodexPanel
          key="codex"
          state={state}
          lang={lang}
          onClose={() => panels.setCodexOpen(false)}
          doAction={doAction}
        />
      )}
      {panels.officersOpen && (
        <OfficerLoungePanel
          key="officers"
          state={state}
          lang={lang}
          onClose={() => panels.setOfficersOpen(false)}
          doAction={doAction}
        />
      )}
      {panels.factionWarsOpen && (
        <FactionWarsPanel
          key="faction-wars"
          state={state}
          lang={lang}
          onClose={() => panels.setFactionWarsOpen(false)}
          onIntervene={(war, side) => doAction({ 
            type: "APPLY_FACTION_WAR_RESULT", 
            result: { 
              victory: side === "attacker", 
              durationMs: 0, 
              phases: [], 
              stats: { 
                damageDealt: 0, 
                damageReceived: 0, 
                unitsLost: {}, 
                enemyGarrisonDestroyed: 0, 
                traitTriggered: [], 
                counterUsed: [] 
              }, 
              intelGained: 0, 
              casualties: { killed: {}, wounded: {} },
              loot: { materials: {} }
            }, 
            warId: war.id, 
            side 
          }, "rgba(244,63,94,0.4)")}
        />

      )}

      {panels.expeditionsOpen && (
        <ExpeditionsPanel
          key="expeditions"
          state={state}
          lang={lang}
          onClose={() => panels.setExpeditionsOpen(false)}
          doAction={doAction}
        />
      )}
    </AnimatePresence>
  );
}
