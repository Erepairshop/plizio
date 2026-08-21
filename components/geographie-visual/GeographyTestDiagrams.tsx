import type { SVGProps } from "react";

export const GEOGRAPHY_DIAGRAM_IDS = [
  "compass-rose", "scale-bar", "continents-grid", "earth-layers", "water-cycle-simple", "settlement-network",
  "contour-hill", "climate-zones", "river-basin", "ocean-current", "mediterranean-farm", "sustainable-tourism",
  "plate-boundary", "volcano-profile", "climate-graph", "population-pyramid", "migration-push-pull", "urban-growth",
  "river-meander", "glacial-valley", "trade-network", "sector-chain", "energy-transition", "future-city",
] as const;

export type GeographyDiagramId = (typeof GEOGRAPHY_DIAGRAM_IDS)[number];
export type GeographyDiagramFamily = "map" | "data" | "system" | "decision";

export const GEOGRAPHY_DIAGRAM_FAMILY: Record<GeographyDiagramId, GeographyDiagramFamily> = {
  "compass-rose": "map", "scale-bar": "data", "continents-grid": "map", "earth-layers": "system",
  "water-cycle-simple": "system", "settlement-network": "decision", "contour-hill": "data",
  "climate-zones": "map", "river-basin": "system", "ocean-current": "map",
  "mediterranean-farm": "decision", "sustainable-tourism": "decision", "plate-boundary": "system",
  "volcano-profile": "data", "climate-graph": "data", "population-pyramid": "data",
  "migration-push-pull": "system", "urban-growth": "decision", "river-meander": "system",
  "glacial-valley": "data", "trade-network": "map", "sector-chain": "system",
  "energy-transition": "decision", "future-city": "decision",
};

const BODIES: Record<GeographyDiagramId, string> = {
  "compass-rose": `<circle cx="100" cy="60" r="37" fill="#ecfeff" stroke="#0e7490" stroke-width="3"/><path d="M100 12l10 38 38 10-38 10-10 38-10-38-38-10 38-10z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><path d="M100 19v82M59 60h82" stroke="#334155" stroke-width="2"/><circle cx="100" cy="60" r="5" fill="#f59e0b"/>`,
  "scale-bar": `<path d="M28 76h144" stroke="#334155" stroke-width="5"/><path d="M28 65v22M76 65v22M124 65v22M172 65v22" stroke="#334155" stroke-width="3"/><path d="M28 76h48M124 76h48" stroke="#06b6d4" stroke-width="8"/><path d="M40 45l34-22 30 19 26-14 30 18" fill="none" stroke="#16a34a" stroke-width="3"/><circle cx="40" cy="45" r="4" fill="#ef4444"/><circle cx="160" cy="46" r="4" fill="#ef4444"/>`,
  "continents-grid": `<ellipse cx="100" cy="60" rx="76" ry="46" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><path d="M24 60h152M100 14v92M44 32h112M44 88h112M63 18c-15 28-15 56 0 84M137 18c15 28 15 56 0 84" stroke="#60a5fa" stroke-width="2"/><path d="M48 43l20-13 17 9-7 18-23 8zM112 30l27 5 13 18-17 11-11 23-18-8 8-25z" fill="#86efac" stroke="#15803d" stroke-width="2"/>`,
  "earth-layers": `<circle cx="100" cy="61" r="49" fill="#fde68a" stroke="#92400e" stroke-width="3"/><path d="M100 12a49 49 0 0 1 0 98z" fill="#fb923c" stroke="#c2410c" stroke-width="2"/><path d="M100 30a31 31 0 0 1 0 62z" fill="#ef4444" stroke="#991b1b" stroke-width="2"/><path d="M100 46a15 15 0 0 1 0 30z" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><path d="M100 12v98" stroke="#334155" stroke-width="2"/>`,
  "water-cycle-simple": `<path d="M20 92h160M25 92l32-38 28 38M115 92l24-31 31 31" fill="#dcfce7" stroke="#166534" stroke-width="3"/><path d="M21 96c30-10 50 9 81-2s48 8 77-2" stroke="#0284c7" stroke-width="6"/><circle cx="145" cy="25" r="14" fill="#fde68a" stroke="#d97706" stroke-width="3"/><path d="M66 70c3-17 17-25 28-11 8-12 26-7 27 8" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/><path d="M92 75v20M84 87l8 9 8-9M128 80c-8-17-3-30 7-39M129 50l7-10 4 12" stroke="#7c3aed" stroke-width="3"/>`,
  "settlement-network": `<circle cx="100" cy="60" r="13" fill="#f59e0b" stroke="#92400e" stroke-width="3"/><circle cx="38" cy="34" r="8" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><circle cx="164" cy="31" r="8" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><circle cx="42" cy="94" r="8" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><circle cx="158" cy="96" r="8" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><path d="M88 55L46 38M112 54l44-19M89 69L49 89M111 70l39 21M100 47V18" stroke="#475569" stroke-width="4"/><path d="M91 18h18" stroke="#16a34a" stroke-width="7"/>`,
  "contour-hill": `<ellipse cx="100" cy="63" rx="72" ry="42" fill="#ecfccb" stroke="#3f6212" stroke-width="3"/><ellipse cx="100" cy="63" rx="53" ry="31" fill="none" stroke="#65a30d" stroke-width="3"/><ellipse cx="100" cy="63" rx="32" ry="19" fill="none" stroke="#65a30d" stroke-width="3"/><ellipse cx="100" cy="63" rx="12" ry="8" fill="#fde68a" stroke="#a16207" stroke-width="3"/><path d="M18 108h164M35 106c20-4 31-35 65-70 33 35 47 67 66 70" fill="none" stroke="#0f766e" stroke-width="3"/>`,
  "climate-zones": `<circle cx="100" cy="60" r="49" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><path d="M55 38h90M51 52h98M51 68h98M55 82h90" stroke="#334155" stroke-width="2"/><path d="M55 38h90" stroke="#60a5fa" stroke-width="10"/><path d="M51 52h98M51 68h98" stroke="#fbbf24" stroke-width="12"/><path d="M55 82h90" stroke="#60a5fa" stroke-width="10"/><path d="M100 11v98" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>`,
  "river-basin": `<path d="M18 98h164M34 92l35-49 24 31 23-43 48 61" fill="#dcfce7" stroke="#166534" stroke-width="3"/><path d="M69 45c4 20 25 18 31 35 7-14 12-25 17-46M100 80c8 8 13 16 15 26M52 70c18 1 30 6 42 16M145 65c-13 3-23 10-32 21" fill="none" stroke="#0284c7" stroke-width="4"/><path d="M115 106c15 0 30 0 48-8" stroke="#0284c7" stroke-width="7"/>`,
  "ocean-current": `<ellipse cx="100" cy="60" rx="76" ry="45" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/><path d="M49 33l22-10 14 14-12 19-24 4zM123 29l25 7 11 18-19 9-10 25-18-9 7-25z" fill="#86efac" stroke="#15803d" stroke-width="2"/><path d="M68 82c26 17 64 12 78-11M137 75l11-5-3 12M139 42c-26-17-57-12-73 4M74 40l-11 7 3-13" stroke="#ef4444" stroke-width="4"/>`,
  "mediterranean-farm": `<circle cx="155" cy="25" r="13" fill="#fde68a" stroke="#d97706" stroke-width="3"/><path d="M18 99h164M26 93l33-39 31 39M91 93l24-26 23 26" fill="#fed7aa" stroke="#9a3412" stroke-width="3"/><path d="M55 91V56M43 70c12-8 25-8 36 0M45 80c11-6 22-6 32 0" stroke="#15803d" stroke-width="5"/><path d="M124 92V61M114 73c10-7 20-7 30 0M116 82c9-5 18-5 26 0" stroke="#65a30d" stroke-width="4"/>`,
  "sustainable-tourism": `<path d="M18 99h164M27 95l42-59 37 59M103 95l31-43 38 43" fill="#dcfce7" stroke="#166534" stroke-width="3"/><path d="M22 102c25-9 42 8 68-2s45 7 84-3" stroke="#0284c7" stroke-width="5"/><path d="M79 78h42v21H79zM87 78V61h26v17" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M92 61l8-12 8 12M42 86h20M142 82h19" stroke="#16a34a" stroke-width="4"/>`,
  "plate-boundary": `<path d="M18 46h70l12 18 12-18h70v49H18z" fill="#fed7aa" stroke="#9a3412" stroke-width="3"/><path d="M22 46h63M115 46h63" stroke="#475569" stroke-width="8"/><path d="M75 29l17 12-17 12M125 29l-17 12 17 12" fill="none" stroke="#dc2626" stroke-width="4"/><path d="M100 63c-11 17-5 27 0 37 5-10 11-20 0-37z" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>`,
  "volcano-profile": `<path d="M25 99h150L124 78l-24-56-25 57z" fill="#cbd5e1" stroke="#334155" stroke-width="3"/><path d="M100 22l-8 37-17 40M100 22l10 39 14 17" stroke="#dc2626" stroke-width="5"/><path d="M90 26c-18-15-13-24 1-21M108 23c17-17 21-5 16 5" stroke="#94a3b8" stroke-width="6"/><path d="M91 60h18M82 78h36" stroke="#64748b" stroke-width="3"/>`,
  "climate-graph": `<path d="M28 18v82h145M40 82l11-8 12 4 12-18 12-19 12-6 12 5 12 19 12 13 12 8 12-3" fill="none" stroke="#ef4444" stroke-width="4"/><path d="M43 100V70M59 100V64M75 100V55M91 100V43M107 100V35M123 100V47M139 100V62M155 100V76" stroke="#0284c7" stroke-width="10"/><path d="M28 60h145M28 36h145" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>`,
  "population-pyramid": `<path d="M100 16v88M99 98H24M101 98h75" stroke="#334155" stroke-width="3"/><path d="M94 91H42v-10h52zM94 77H50v-10h44zM94 63H59v-10h35zM94 49H69v-10h25zM94 35H79v-10h15z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/><path d="M106 91h52v-10h-52zM106 77h44v-10h-44zM106 63h35v-10h-35zM106 49h25v-10h-25zM106 35h15v-10h-15z" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/>`,
  "migration-push-pull": `<circle cx="48" cy="61" r="27" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/><circle cx="152" cy="61" r="27" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><path d="M75 55h49M113 45l13 10-13 10" stroke="#7c3aed" stroke-width="5"/><path d="M34 51l28 20M62 51L34 71" stroke="#b91c1c" stroke-width="4"/><path d="M139 63l9 9 18-22" fill="none" stroke="#15803d" stroke-width="4"/><circle cx="100" cy="96" r="7" fill="#f59e0b"/>`,
  "urban-growth": `<path d="M18 101h164M29 101V72h25v29M60 101V52h30v49M97 101V31h35v70M140 101V62h28v39" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M37 82h9M69 65h12M107 45h15M149 74h10" stroke="#06b6d4" stroke-width="4"/><path d="M22 109h156" stroke="#16a34a" stroke-width="5"/><path d="M35 37c22-18 40-15 57-4" fill="none" stroke="#f59e0b" stroke-width="4"/>`,
  "river-meander": `<path d="M20 92h160M25 81c31-42 57 31 88-5s41 16 61-25" fill="none" stroke="#0284c7" stroke-width="12"/><path d="M25 81c31-42 57 31 88-5s41 16 61-25" fill="none" stroke="#bae6fd" stroke-width="4"/><path d="M52 33c-15 18-9 36 7 47M142 85c13-16 10-31-2-45" fill="none" stroke="#dc2626" stroke-width="3"/><path d="M55 67l5 14-14-4M139 53l1-15 13 8" stroke="#dc2626" stroke-width="3"/>`,
  "glacial-valley": `<path d="M18 26c19 3 28 74 62 75h40c34-1 43-72 62-75" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/><path d="M18 102h164M31 95l33-51 25 40M112 84l24-42 34 53" fill="#f1f5f9" stroke="#475569" stroke-width="3"/><path d="M82 101c8-19 26-19 36 0" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>`,
  "trade-network": `<ellipse cx="100" cy="60" rx="76" ry="45" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/><circle cx="48" cy="47" r="7" fill="#f59e0b"/><circle cx="103" cy="30" r="7" fill="#f59e0b"/><circle cx="151" cy="61" r="7" fill="#f59e0b"/><circle cx="84" cy="91" r="7" fill="#f59e0b"/><path d="M55 44l39-11M110 34l34 21M144 67L91 87M79 86L51 54M55 51l83 11" stroke="#7c3aed" stroke-width="3"/><path d="M91 28l9 4-8 5M137 52l9 5-9 4M96 82l-8 7 11 1" stroke="#7c3aed" stroke-width="2"/>`,
  "sector-chain": `<circle cx="35" cy="61" r="18" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><rect x="82" y="43" width="36" height="36" fill="#fed7aa" stroke="#9a3412" stroke-width="3"/><path d="M143 80V50h30v30M148 50V38h20v12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><path d="M55 61h23M69 54l10 7-10 7M121 61h18M130 54l10 7-10 7" stroke="#7c3aed" stroke-width="4"/><path d="M25 62l9-12 12 12-7 11z" fill="#f59e0b"/>`,
  "energy-transition": `<path d="M20 101h160M35 101V58h28v43M47 58V27h8v31M39 28c9-11 17 8 26-4" stroke="#475569" stroke-width="5"/><path d="M105 101V48M105 48l-28 18M105 48l31 16M105 48v-32" stroke="#0e7490" stroke-width="4"/><circle cx="105" cy="48" r="5" fill="#06b6d4"/><path d="M137 101h35l-8-28h-20z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><circle cx="155" cy="24" r="13" fill="#fde68a" stroke="#d97706" stroke-width="3"/><path d="M72 82h21M84 75l10 7-10 7" stroke="#16a34a" stroke-width="4"/>`,
  "future-city": `<path d="M18 101h164M28 101V61h30v40M66 101V39h36v62M111 101V56h28v45M148 101V72h24v29" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M35 71h16M75 51h18M118 67h14M154 82h12" stroke="#06b6d4" stroke-width="4"/><path d="M20 108h160" stroke="#16a34a" stroke-width="6"/><circle cx="87" cy="90" r="8" fill="#f59e0b"/><path d="M87 82V68M80 73h14M144 47c8-12 18-12 26 0" fill="none" stroke="#15803d" stroke-width="4"/>`,
};

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]!);
}

export function geographyDiagramSvgMarkup(kind: GeographyDiagramId, label: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" role="img" aria-label="${escapeXml(label)}" style="width:190px;max-width:100%;height:auto"><title>${escapeXml(label)}</title>${BODIES[kind]}</svg>`;
}

type Props = SVGProps<SVGSVGElement> & { kind: GeographyDiagramId; label: string };

export function GeographyTestDiagram({ kind, label, ...props }: Props) {
  return (
    <svg viewBox="0 0 200 120" role="img" aria-label={label} {...props}>
      <title>{label}</title>
      <g dangerouslySetInnerHTML={{ __html: BODIES[kind] }} />
    </svg>
  );
}
