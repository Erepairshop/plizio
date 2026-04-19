"use client";

import React, { useState } from "react";
import { europaMap, europaViewBox } from "@/lib/visualLab/maps/europa.svg";
import { useRouter } from "next/navigation";

type Lang = "de" | "hu" | "ro" | "en";

interface EuropeMapProps {
  lang: Lang;
  onCountryClick?: (countryId: string) => void;
}

export const EuropeMap: React.FC<EuropeMapProps> = ({ lang, onCountryClick }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  const handleCountryClick = (countryId: string) => {
    if (onCountryClick) {
      onCountryClick(countryId);
      return;
    }

    // DE/HU/RO → kész térképek
    const bindings: Record<string, string> = {
      "DE": "/visual-lab?subject=geographie&country=deutschland",
      "HU": "/visual-lab?subject=geographie&country=magyarorszag",
      "RO": "/visual-lab?subject=geographie&country=romania",
    };
    const target = bindings[countryId];
    if (target) {
      router.push(target);
    } else {
      // Placeholder for other countries
      console.log(`Country ${countryId} clicked, but no specific map available yet.`);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-[#020408]/40 rounded-2xl border border-cyan-500/10 p-4">
      <svg
        viewBox={europaViewBox}
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 20px rgba(34,211,238,0.1))" }}
      >
        <g>
          {europaMap.map((country) => {
            const isHovered = hovered === country.id;
            
            return (
              <path
                key={country.id}
                d={country.path}
                fill={isHovered ? "rgba(34,211,238,0.3)" : "rgba(8,47,73,0.4)"}
                stroke={isHovered ? "#22D3EE" : "rgba(34,211,238,0.3)"}
                strokeWidth={isHovered ? 2 : 1}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHovered(country.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleCountryClick(country.id)}
              />
            );
          })}
        </g>

        {/* Capitals and Labels */}
        <g pointerEvents="none">
          {europaMap.map((country) => {
            const isHovered = hovered === country.id;
            const showLabel = isHovered || ["DE", "HU", "RO", "FR", "GB", "IT", "ES"].includes(country.id);
            
            return (
              <React.Fragment key={`label-${country.id}`}>
                <circle
                  cx={country.capitalCoords[0]}
                  cy={country.capitalCoords[1]}
                  r={3}
                  fill="#FFD700"
                  stroke="#020408"
                  strokeWidth={1}
                />
                {showLabel && (
                  <text
                    x={country.labelX}
                    y={country.labelY}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="600"
                    style={{ paintOrder: "stroke", stroke: "#020408", strokeWidth: 2 }}
                  >
                    {country.name[lang] || country.name.en}
                  </text>
                )}
              </React.Fragment>
            );
          })}
        </g>
      </svg>

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-white/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400" />
          <span>{lang === "hu" ? "Kattintható országok" : lang === "ro" ? "Țări interactive" : "Interactive countries"}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span>{lang === "hu" ? "Fővárosok" : lang === "ro" ? "Capitale" : "Capitals"}</span>
        </div>
      </div>
    </div>
  );
};
