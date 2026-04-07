import { useState, useCallback } from "react";
import type { StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";

export function useGravitasActions(dispatch: React.Dispatch<any>) {
  const [impactFlash, setImpactFlash] = useState<string | null>(null);
  const [actionFlash, setActionFlash] = useState<string | null>(null);
  const [actionFeedback, setActionFeedback] = useState<LocalizedString | null>(null);
  const [starFeedback, setStarFeedback] = useState<number | null>(null);

  const doAction = useCallback((cmd: StarholdCommand, color: string) => {
    setActionFlash(color);
    setTimeout(() => setActionFlash(null), 400);
    dispatch(cmd);
  }, [dispatch]);

  const triggerImpact = useCallback((color: string) => {
    setImpactFlash(color);
    setTimeout(() => setImpactFlash(null), 600);
  }, []);

  return {
    impactFlash, setImpactFlash,
    actionFlash, setActionFlash,
    actionFeedback, setActionFeedback,
    starFeedback, setStarFeedback,
    doAction,
    triggerImpact
  };
}
