import { useState, useCallback } from "react";

export type GravitasPanelId = "modules" | "marks" | "journal" | "activation" | "upgrades" | "factions" | null;

export function useGravitasPanels() {
  const [activePanel, setActivePanel] = useState<GravitasPanelId>(null);
  const [shopOpen, setShopOpen] = useState(false);
  const [chronicleOpen, setChronicleOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const [moduleInfoOpen, setModuleInfoOpen] = useState(false);
  const [movePickerOpen, setMovePickerOpen] = useState(false);
  const [espionageOpen, setEspionageOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [tradeOpen, setTradeOpen] = useState(false);
  const [codexOpen, setCodexOpen] = useState(false);
  const [officersOpen, setOfficersOpen] = useState(false);
  const [factionWarsOpen, setFactionWarsOpen] = useState(false);
  const [expeditionsOpen, setExpeditionsOpen] = useState(false);
  const [concordOpen, setConcordOpen] = useState(false);
  const [npcStationsOpen, setNpcStationsOpen] = useState(false);

  const closeAllPanels = useCallback(() => {
    setActivePanel(null);
    setShopOpen(false);
    setChronicleOpen(false);
    setQuickActionsOpen(false);
    setModuleInfoOpen(false);
    setMovePickerOpen(false);
    setEspionageOpen(false);
    setResearchOpen(false);
    setTradeOpen(false);
    setCodexOpen(false);
    setOfficersOpen(false);
    setFactionWarsOpen(false);
    setExpeditionsOpen(false);
    setConcordOpen(false);
    setNpcStationsOpen(false);
  }, []);

  return {
    activePanel, setActivePanel,
    shopOpen, setShopOpen,
    chronicleOpen, setChronicleOpen,
    quickActionsOpen, setQuickActionsOpen,
    moduleInfoOpen, setModuleInfoOpen,
    movePickerOpen, setMovePickerOpen,
    espionageOpen, setEspionageOpen,
    researchOpen, setResearchOpen,
    tradeOpen, setTradeOpen,
    codexOpen, setCodexOpen,
    officersOpen, setOfficersOpen,
    factionWarsOpen, setFactionWarsOpen,
    expeditionsOpen, setExpeditionsOpen,
    concordOpen, setConcordOpen,
    npcStationsOpen, setNpcStationsOpen,
    closeAllPanels
  };
}
