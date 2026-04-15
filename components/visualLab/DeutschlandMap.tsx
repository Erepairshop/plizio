"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { DEUTSCHLAND_BUNDESLANDER, type BundeslandPath } from "@/lib/visualLab/maps/deutschlandPlaceholder";

type Lang = "de" | "hu" | "ro" | "en";

const T: Record<Lang, Record<string, string>> = {
  de: { capital: "Hauptstadt", detail: "Detailansicht aktivieren", placeholder: "Detailkarte folgt — Inhalt wird gerade vorbereitet." },
  hu: { capital: "Főváros", detail: "Részletes nézet", placeholder: "Részletes térkép készül — hamarosan elérhető." },
  ro: { capital: "Capitala", detail: "Vizualizare detaliată", placeholder: "Harta detaliată în pregătire — disponibilă în curând." },
  en: { capital: "Capital", detail: "Activate detail view", placeholder: "Detail map coming soon." },
};

interface Props {
  lang: Lang;
}

export default function DeutschlandMap({ lang }: Props) {
  const [selected, setSelected] = useState<BundeslandPath | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [detailFor, setDetailFor] = useState<string | null>(null);
  const t = T[lang] ?? T.en;

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 400 520"
        className="w-full max-w-md mx-auto block"
        style={{ filter: "drop-shadow(0 0 18px rgba(34,211,238,0.12))" }}
      >
        <defs>
          <linearGradient id="bl-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(8,47,73,0.6)" />
            <stop offset="100%" stopColor="rgba(2,15,30,0.85)" />
          </linearGradient>
          <linearGradient id="bl-fill-active" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
            <stop offset="100%" stopColor="rgba(8,145,178,0.5)" />
          </linearGradient>
        </defs>

        {/* Background grid for atmosphere */}
        <g opacity="0.08">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="520" stroke="#22D3EE" strokeWidth="0.3" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#22D3EE" strokeWidth="0.3" />
          ))}
        </g>

        {/* Bundesland regions */}
        <g>
          {DEUTSCHLAND_BUNDESLANDER.map((b) => {
            const isHover = hover === b.id;
            const isSelected = selected?.id === b.id;
            return (
              <path
                key={b.id}
                d={b.d}
                fill={isSelected || isHover ? "url(#bl-fill-active)" : "url(#bl-fill)"}
                stroke={isSelected ? "#67E8F9" : isHover ? "#22D3EE" : "#0EA5E9"}
                strokeWidth={isSelected ? 1.6 : 1}
                strokeLinejoin="round"
                opacity={hover && !isHover && !isSelected ? 0.55 : 1}
                onMouseEnter={() => setHover(b.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setSelected(b)}
                style={{ cursor: "pointer", transition: "opacity 200ms, stroke 200ms" }}
              />
            );
          })}
        </g>

        {/* Labels */}
        <g pointerEvents="none">
          {DEUTSCHLAND_BUNDESLANDER.map((b) => (
            <text
              key={`lbl-${b.id}`}
              x={b.labelX}
              y={b.labelY}
              fill={selected?.id === b.id ? "#ECFEFF" : "rgba(186,230,253,0.85)"}
              fontSize={b.id === "DE-BE" || b.id === "DE-HH" || b.id === "DE-HB" || b.id === "DE-SL" ? 7 : 9}
              fontWeight={selected?.id === b.id ? 700 : 500}
              textAnchor="middle"
              style={{ userSelect: "none" }}
            >
              {b.name[lang] ?? b.name.en}
            </text>
          ))}
        </g>
      </svg>

      {/* Bottom info card */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="
              fixed left-1/2 -translate-x-1/2 bottom-4
              w-[92%] max-w-md
              rounded-2xl border border-cyan-400/40
              bg-[#0A1929]/95 backdrop-blur-md
              shadow-[0_8px_32px_rgba(34,211,238,0.25)]
              p-4
              z-[130]
            "
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="text-cyan-300 font-semibold text-base leading-tight">
                  {selected.name[lang] ?? selected.name.en}
                </h3>
                <p className="text-white/60 text-xs mt-0.5">
                  {t.capital}: <span className="text-white/85">{selected.capital[lang] ?? selected.capital.en}</span>
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-white/60 hover:text-white p-1 rounded hover:bg-white/5"
              >
                <X size={16} />
              </button>
            </div>
            <button
              onClick={() => setDetailFor(selected.id)}
              className="
                mt-2 w-full flex items-center justify-center gap-1.5
                py-2 rounded-lg
                bg-gradient-to-r from-cyan-600 to-sky-700
                hover:from-cyan-500 hover:to-sky-600
                text-white text-sm font-medium
                shadow-md
              "
            >
              {t.detail}
              <ChevronRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail placeholder modal */}
      <AnimatePresence>
        {detailFor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setDetailFor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A1929] border border-cyan-400/40 rounded-2xl p-6 max-w-sm text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-cyan-300 font-semibold text-lg mb-2">
                {DEUTSCHLAND_BUNDESLANDER.find((b) => b.id === detailFor)?.name[lang]}
              </h3>
              <p className="text-white/70 text-sm mb-4">{t.placeholder}</p>
              <button
                onClick={() => setDetailFor(null)}
                className="px-4 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-white/80 text-sm"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
