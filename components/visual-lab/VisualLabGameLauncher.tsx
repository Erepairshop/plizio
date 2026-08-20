"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Play } from "lucide-react";
import type { VisualLabSubject } from "@/components/VisualLab";
import type { VisualLabSeoLang } from "@/lib/visualLab/seoCatalog";

const VisualLab = dynamic(() => import("@/components/VisualLab"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[120] bg-[#020408]" />,
});

const COPY = {
  de: { grade: "Klasse wählen", play: "Spiel starten" },
  hu: { grade: "Válassz osztályt", play: "Játék indítása" },
  ro: { grade: "Alege clasa", play: "Pornește jocul" },
  en: { grade: "Choose grade", play: "Start game" },
} as const;

export default function VisualLabGameLauncher({
  subject,
  gameId,
  gameName,
  lang,
  grades,
}: {
  subject: VisualLabSubject;
  gameId: string;
  gameName: string;
  lang: VisualLabSeoLang;
  grades: readonly number[];
}) {
  const [grade, setGrade] = useState(grades[0] ?? 1);
  const [open, setOpen] = useState(false);
  const copy = COPY[lang];

  const launch = () => {
    setOpen(true);
  };

  return (
    <section className="rounded-3xl border border-cyan-200/40 bg-white/90 p-4 shadow-lg shadow-cyan-950/10 sm:p-6" aria-label={gameName}>
      <p className="mb-3 text-sm font-bold text-slate-700">{copy.grade}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {grades.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setGrade(item)}
            aria-pressed={grade === item}
            className={`min-h-11 min-w-11 rounded-xl border px-4 py-2 text-base font-black transition ${
              grade === item
                ? "border-cyan-600 bg-cyan-600 text-white shadow-md"
                : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={launch}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-3 text-base font-black text-white shadow-lg shadow-cyan-900/20 transition active:scale-[.98]"
      >
        <Play size={20} aria-hidden />
        {copy.play}
      </button>

      {open && (
        <VisualLab
          subject={subject}
          grade={grade}
          lang={lang}
          open
          onClose={() => setOpen(false)}
          initialGameId={gameId}
        />
      )}
    </section>
  );
}
