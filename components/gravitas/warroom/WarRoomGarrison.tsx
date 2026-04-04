"use client";

import type { WarRoomUnitId } from "@/lib/gravitas/sim/warroom/types";
import { WARROOM_UNITS, WARROOM_UNIT_ORDER } from "@/lib/gravitas/sim/warroom/units";

type Lang = "en" | "hu" | "de" | "ro";

const EMPTY_LABEL: Record<Lang, string> = {
  en: "No units yet",
  hu: "Még nincsenek egységek",
  de: "Noch keine Einheiten",
  ro: "Nicio unitate încă",
};

export default function WarRoomGarrison({
  garrison,
  lang,
}: {
  garrison: Record<WarRoomUnitId, number>;
  lang: string;
}) {
  const l = (lang || "en") as Lang;
  const hasAny = WARROOM_UNIT_ORDER.some((id) => garrison[id] > 0);

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
        const count = garrison[id];
        if (count <= 0) return null;
        const def = WARROOM_UNITS[id];
        return (
          <div
            key={id}
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-white/10 bg-white/5 text-[11px] sm:text-xs font-black"
          >
            <span>{def.icon}</span>
            <span className="text-white/80">×{count}</span>
          </div>
        );
      })}
    </div>
  );
}
