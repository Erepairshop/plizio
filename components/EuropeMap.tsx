"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { europaMap, europaViewBox, EuropeCountry } from "@/lib/visualLab/maps/europa.svg";
import { Lang } from "@/lib/visualLab/maps/resolver";
import { motion, AnimatePresence } from "framer-motion";

interface EuropeMapProps {
  lang: Lang;
}

// Basic mappings for known countries to their Visual Lab endpoints or parameters.
// If it's not in the list, we show a placeholder "Coming soon".
const COUNTRY_BINDINGS: Record<string, string> = {
  DE: "deutschland-map",
  HU: "magyarorszag", // stub if not exists
  RO: "romania",      // stub if not exists
};

export default function EuropeMap({ lang }: EuropeMapProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<{title: string, info: string} | null>(null);

  const handleCountryClick = (country: EuropeCountry) => {
    const bind = COUNTRY_BINDINGS[country.id];
    if (bind === "deutschland-map") {
      router.push(`/visual-lab?vlab=deutschland-map`);
    } else if (bind === "magyarorszag" || bind === "romania") {
      router.push(`/visual-lab?vlab=${country.id.toLowerCase()}-map`);
    } else {
      const comingSoon: Record<Lang, string> = {
        de: "Bald verfügbar",
        hu: "Hamarosan",
        ro: "În curând",
        en: "Coming soon"
      };
      setToastMessage({
        title: country.names[lang] || country.names.en,
        info: comingSoon[lang] || comingSoon.en
      });
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl bg-slate-900 overflow-hidden shadow-2xl border border-white/10 p-4">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 text-white px-6 py-3 rounded-full flex flex-col items-center shadow-lg pointer-events-none"
          >
            <span className="font-bold text-cyan-300">{toastMessage.title}</span>
            <span className="text-sm opacity-80">{toastMessage.info}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <svg
        viewBox={europaViewBox}
        className="w-full h-auto max-h-[80vh] select-none"
        style={{ filter: "drop-shadow(0 0 20px rgba(0,255,255,0.1))" }}
      >
        {/* Render paths */}
        <g>
          {europaMap.map((country) => {
            const isHovered = hovered === country.id;
            return (
              <path
                key={`path-${country.id}`}
                d={country.path}
                fill={isHovered ? "rgba(6, 182, 212, 0.4)" : "rgba(30, 41, 59, 0.8)"}
                stroke={isHovered ? "rgba(34, 211, 238, 0.8)" : "rgba(148, 163, 184, 0.4)"}
                strokeWidth={isHovered ? "1.5" : "0.5"}
                className="transition-all duration-300 cursor-pointer hover:z-10"
                onMouseEnter={() => setHovered(country.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleCountryClick(country)}
              >
                <title>{country.names[lang] || country.names.en}</title>
              </path>
            );
          })}
        </g>
        
        {/* Render capitals */}
        <g className="pointer-events-none">
          {europaMap.map((country) => {
            if (!country.capital || !country.capital.coords) return null;
            const [cx, cy] = country.capital.coords;
            const isHovered = hovered === country.id;
            return (
              <g key={`cap-${country.id}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 4 : 2}
                  fill={isHovered ? "#fff" : "#22d3ee"}
                  className="transition-all duration-300"
                />
                {isHovered && (
                  <text
                    x={cx}
                    y={cy - 8}
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="drop-shadow-md"
                    style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
                  >
                    {country.capital.name}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
