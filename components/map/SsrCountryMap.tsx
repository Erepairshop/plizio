// Server-rendered country map. Renders inline <svg> with all path data at
// build time so the static HTML shows the country shape immediately, before
// any JS chunk loads. Used as a "first paint" layer behind the interactive
// InteractiveMap (which hydrates on top with the same paths for pan/zoom/
// click/popup behaviour).
//
// IMPORTANT: NO "use client" — this lives in the server bundle so the inline
// SVG ends up in the static HTML output, not in a JS chunk.

type MapPath = {
  id: string;
  d: string;
  name?: { de?: string; hu?: string; ro?: string; en?: string };
};

export function SsrCountryMap({
  paths,
  viewBox,
  className = "absolute inset-0 w-full h-full pointer-events-none",
}: {
  paths: MapPath[];
  viewBox: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        filter: "drop-shadow(0 0 24px rgba(34,211,238,0.18))",
      }}
      aria-hidden="true"
    >
      {paths.map((p) => (
        <path
          key={p.id}
          d={p.d}
          fill="rgba(8, 47, 73, 0.55)"
          stroke="rgba(34, 211, 238, 0.4)"
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}
