"use client";

import type { StarholdState, StarholdCommand } from "@/lib/gravitas/sim/types";
import { WARROOM_UNITS, WARROOM_UNIT_ORDER } from "@/lib/gravitas/sim/warroom/units";
import { canTrainUnit, getTotalGarrison, getMaxUnitLevel } from "@/lib/gravitas/sim/warroom/production";
import type { WarRoomUnitId, GarrisonEntry } from "@/lib/gravitas/sim/warroom/types";
import { WARROOM_PRODUCTION_CONFIG } from "@/lib/gravitas/economy";
import WarRoomUnitCard from "./WarRoomUnitCard";
import WarRoomProgress from "./WarRoomProgress";
import WarRoomGarrison from "./WarRoomGarrison";

type Lang = "en" | "hu" | "de" | "ro";

const TITLE: Record<Lang, string> = {
  en: "Command Deck",
  hu: "Főhadiszállás",
  de: "Kommandozentrale",
  ro: "Centrul de comandă",
};

const GARRISON_LABEL: Record<Lang, string> = {
  en: "Garrison",
  hu: "Helyőrség",
  de: "Garnison",
  ro: "Garnizoană",
};

const OFFLINE_LABEL: Record<Lang, string> = {
  en: "Module offline — repair to enable training",
  hu: "Modul offline — javítsd meg a kiképzés engedélyezéséhez",
  de: "Modul offline — reparieren, um Ausbildung zu ermöglichen",
  ro: "Modul offline — repară pentru a activa antrenamentul",
};

function sumEntries(entries: GarrisonEntry[]): number {
  return entries.reduce((s, e) => s + e.count, 0);
}

export default function WarRoomPanel({
  state,
  dispatch,
  lang,
}: {
  state: StarholdState;
  dispatch: (cmd: StarholdCommand) => void;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const { warRoom } = state;
  const isOnline = warRoom.online;
  const totalGarrison = getTotalGarrison(warRoom.garrison);
  const maxLevel = getMaxUnitLevel(warRoom.level);

  return (
    <div className="flex flex-col gap-3 p-3 sm:p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-lg">⚔️</span>
        <span className="text-sm sm:text-base font-black text-white/90">{TITLE[l]}</span>
        <span className="ml-auto text-[10px] font-bold text-white/30 uppercase tracking-wider">
          Lv {warRoom.level}
        </span>
      </div>

      {/* Garrison counter */}
      <div className="text-[10px] font-bold text-white/40 px-1">
        {totalGarrison}/{WARROOM_PRODUCTION_CONFIG.garrisonCap}
      </div>

      {/* Offline warning */}
      {!isOnline && (
        <div className="text-[11px] text-red-400/80 font-medium px-1">
          {OFFLINE_LABEL[l]}
        </div>
      )}

      {/* Unit cards — horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {WARROOM_UNIT_ORDER.map((unitId) => {
          const def = WARROOM_UNITS[unitId];
          const slot = warRoom.productionSlots[unitId];
          return (
            <WarRoomUnitCard
              key={unitId}
              unit={def}
              canAfford={canTrainUnit(state, unitId, 1)}
              isTraining={slot !== null}
              garrisonCount={sumEntries(warRoom.garrison[unitId])}
              garrisonCap={WARROOM_PRODUCTION_CONFIG.garrisonCap}
              totalGarrison={totalGarrison}
              maxUnitLevel={maxLevel}
              onTrain={() => dispatch({ type: "TRAIN_UNIT", unitId, level: 1 })}
              lang={lang}
            />
          );
        })}
      </div>

      {/* Active productions (up to 4 parallel) */}
      {WARROOM_UNIT_ORDER.map((unitId) => {
        const slot = warRoom.productionSlots[unitId];
        if (!slot) return null;
        return (
          <WarRoomProgress
            key={unitId}
            slot={slot}
            unitDef={WARROOM_UNITS[unitId]}
            onCancel={() => dispatch({ type: "CANCEL_TRAINING", unitId })}
            lang={lang}
          />
        );
      })}

      {/* Garrison */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] sm:text-[11px] font-bold text-white/40 uppercase tracking-wider">
          {GARRISON_LABEL[l]}
        </span>
        <WarRoomGarrison garrison={warRoom.garrison} lang={lang} />
      </div>
    </div>
  );
}
