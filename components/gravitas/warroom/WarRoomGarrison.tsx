"use client";

import type { WarRoomUnitId, GarrisonEntry } from "@/lib/gravitas/sim/warroom/types";
import { WARROOM_UNITS, WARROOM_UNIT_ORDER } from "@/lib/gravitas/sim/warroom/units";

type Lang = "en" | "hu" | "de" | "ro";

const EMPTY_LABEL: Record<Lang, string> = {
  en: "No units yet",
  hu: "Még nincsenek egységek",
  de: "Noch keine Einheiten",
  ro: "Nicio unitate încă",
};

function sumEntries(entries: GarrisonEntry[]): number {
  return entries.reduce((s, e) => s + e.count, 0);
}

export default function WarRoomGarrison({
  garrison,
  lang,
}: {
  garrison: Record<WarRoomUnitId, GarrisonEntry[]>;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const hasAny = WARROOM_UNIT_ORDER.some((id) => sumEntries(garrison[id]) > 0);

  if (!hasAny) {
    return (
      <span className="text-[11px] text-white/30 font-medium italic">
        {EMPTY_LABEL[l]}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {WARROOM_UNIT_ORDER.map((id) => {
        const entries = garrison[id];
        const total = sumEntries(entries);
        if (total <= 0) return null;
        const def = WARROOM_UNITS[id];
        // Show level breakdown if multiple levels exist
        const levels = entries.filter((e) => e.count > 0);
        return (
          <div
            key={id}
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-white/10 bg-white/5 text-[11px] sm:text-xs font-black"
          >
            <span>{def.icon}</span>
            <span className="text-white/80">×{total}</span>
            {levels.length > 1 && (
              <span className="text-[8px] text-white/30 ml-0.5">
                ({levels.map((e) => `L${e.level}:${e.count}`).join(" ")})
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
