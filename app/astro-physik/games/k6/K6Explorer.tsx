"use client";

import DynamicExplorer from "@/components/DynamicExplorer";
import type { IslandDef } from "@/lib/astromath";
import { PHYSIK_K6_I1_LABELS, PHYSIK_K6_I1_POOL } from "@/lib/explorerPools/physikK6";
import MachinesExplorer from "./MachinesExplorer";
import WheelExplorer from "./WheelExplorer";
import PressureExplorer from "./PressureExplorer";
import HydraulicsExplorer from "./HydraulicsExplorer";
import CircuitsExplorer from "./CircuitsExplorer";
import CurrentExplorer from "./CurrentExplorer";
import DensityExplorer from "./DensityExplorer";
import EnergyTransferExplorer from "./EnergyTransferExplorer";
import WavesExplorer from "./WavesExplorer";

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

const POOL_CONFIG: Record<string, {
  pool: typeof PHYSIK_K6_I1_POOL;
  labels: typeof PHYSIK_K6_I1_LABELS;
  title: string;
  icon: string;
}> = {
  i1: { pool: PHYSIK_K6_I1_POOL, labels: PHYSIK_K6_I1_LABELS, title: "explorer_title", icon: "⚙️" },
};

export default function K6Explorer({ island, grade, onDone, color = "#6366F1", lang = "de" }: Props) {
  const cfg = POOL_CONFIG[island.id];
  if (cfg) {
    return (
      <DynamicExplorer
        pool={cfg.pool}
        labels={cfg.labels}
        title={cfg.title}
        icon={cfg.icon}
        count={5}
        explorerId={`physik_k6_${island.id}`}
        subject="physik"
        color={color}
        lang={lang}
        grade={grade}
        onDone={onDone}
      />
    );
  }

  if (island.id === "i2") return <WheelExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i3") return <PressureExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i4") return <HydraulicsExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i5") return <CircuitsExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i6") return <CurrentExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i7") return <DensityExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i8") return <EnergyTransferExplorer color={color} lang={lang} onDone={onDone} />;
  if (island.id === "i9") return <WavesExplorer color={color} lang={lang} onDone={onDone} />;
  return <MachinesExplorer color={color} lang={lang} onDone={onDone} />;
}
