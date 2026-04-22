"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import AwakeningCeremony from "@/components/gravitas/AwakeningCeremony";
import { VictoryOverlay } from "@/components/gravitas/VictoryOverlay";
import type { StarholdState } from "@/lib/gravitas/sim/types";


interface Props {
  state: StarholdState;
  lang: string;
  showAwakening: boolean;
  onAwakeningDone: () => void;
  onVictoryAction: (action: "retry" | "continue") => void;
}

export default function GravitasOverlayHost({ state, lang, showAwakening, onAwakeningDone, onVictoryAction }: Props) {
  return (
    <AnimatePresence>
      {showAwakening && (
        <AwakeningCeremony 
          key="gravitas-awakening" 
          lang={lang} 
          profile={state.avatarProfile} 
          onDone={onAwakeningDone} 
        />
      )}
      {(state.stationLost || (state.firstLoopComplete && !state.firstLoopShown)) && (
        <VictoryOverlay
          key="gravitas-victory"
          state={state}
          lang={lang}
          onAction={onVictoryAction}
        />
      )}
    </AnimatePresence>
  );
}
