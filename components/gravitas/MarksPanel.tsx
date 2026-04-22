"use client";

import React from "react";
import { MarkBox } from "./GravitasUiParts";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  lang: string;
}

export default function MarksPanel({ state, lang }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-3">
        <MarkBox
          label={localize({ en: "Reactor Scar", hu: "Reaktorseb", de: "Reaktornarbe", ro: "Cicatrice reactor" })}
          value={state.marks.reactorScar}
          color="rose"
        />
        <MarkBox
          label={localize({ en: "Shell Strain", hu: "Testfeszülés", de: "Hüllenspannung", ro: "Tensiune corp" })}
          value={state.marks.shellStrain}
          color="pink"
        />
        <MarkBox
          label={localize({ en: "Supply Stress", hu: "Ellátási nyomás", de: "Versorgungsdruck", ro: "Presiune logistică" })}
          value={state.marks.supplyStress}
          color="amber"
        />
        <MarkBox
          label={localize({ en: "Void Echo", hu: "Void visszhang", de: "Void-Echo", ro: "Ecou void" })}
          value={state.marks.voidEcho}
          color="indigo"
        />
      </div>

      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
          {localize({ en: "Drift Risk", hu: "Drift kockázat", de: "Driftrisiko", ro: "Risc de derivă" })}
        </h4>
        <p className="text-[11px] text-white/50 leading-relaxed italic">
          {localize({ 
            en: "If scars, strain and supply stress accumulate together, the station can start falling into repeating patterns.", 
            hu: "Ha a sebek, a testfeszülés és az ellátási nyomás együtt nőnek, az állomás ismétlődő mintákba csúszhat.", 
            de: "Wenn Narben, Hüllenspannung und Versorgungsdruck gemeinsam wachsen, kann die Station in Wiederholungsmuster fallen.", 
            ro: "Dacă cicatricile, tensiunea și presiunea logistică cresc împreună, stația poate aluneca în tipare repetitive." 
          })}
        </p>
      </div>
    </div>
  );
}
