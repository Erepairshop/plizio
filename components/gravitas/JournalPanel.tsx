"use client";

import React from "react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  lang: string;
}

export default function JournalPanel({ state, lang }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  return (
    <div className="p-4 space-y-3">
      {state.journal.length === 0 ? (
        <div className="py-10 text-center text-white/20 text-[10px] uppercase font-black tracking-widest italic">
          {localize({ en: "Awaiting first log entry...", hu: "Várakozás az első naplóbejegyzésre...", de: "Warte auf ersten Logbucheintrag...", ro: "Se așteaptă prima intrare în jurnal..." })}
        </div>
      ) : (
        [...state.journal].reverse().map((entry, i) => (
          <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <p className="text-[11px] text-white/70 leading-relaxed italic">
              {localize(entry.text)}
            </p>
            <div className="mt-1 text-[8px] font-black text-white/20 uppercase tracking-tighter">
              Tick {entry.tick}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
