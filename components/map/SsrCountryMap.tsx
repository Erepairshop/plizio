// Server-rendered country map. Renders inline <svg> with all path data at
// build time so the country shape AND POI markers are visible BEFORE any JS
// chunk loads. InteractiveMap hydrates on top with the same paths (and its
// own marker rendering) for pan/zoom/click/popup behaviour.
//
// IMPORTANT: NO "use client" — this lives in the server bundle so the inline
// SVG ends up in the static HTML output, not in a JS chunk.

import { poiColor } from "@/lib/visualLab/maps/poiColor";

type MapPath = {
  id: string;
  path: string;
  name?: { de?: string; hu?: string; ro?: string; en?: string };
};

export type ProjectedPoi = {
  id: string;
  x: number;
  y: number;
  type?: string;
  /** if true (state-capital usually) render slightly larger */
  major?: boolean;
};

export function SsrCountryMap({
  paths,
  viewBox,
  projectedPois,
  className = "absolute inset-0 w-full h-full pointer-events-none",
}: {
  paths: MapPath[];
  viewBox: string;
  projectedPois?: ProjectedPoi[];
  className?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ filter: "drop-shadow(0 0 24px rgba(34,211,238,0.18))" }}
      aria-hidden="true"
    >
      {paths.map((p) => (
        <path
          key={p.id}
          d={p.path}
          fill="rgba(8, 47, 73, 0.55)"
          stroke="rgba(34, 211, 238, 0.4)"
          strokeWidth="0.7"
        />
      ))}
      {projectedPois && projectedPois.length > 0 && (
        <g>
          {projectedPois.map((p) => (
            <circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={p.major ? 4.2 : 2.8}
              fill={poiColor(p.type)}
              stroke="rgba(0,0,0,0.4)"
              strokeWidth="0.5"
              opacity={p.major ? 1 : 0.85}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
