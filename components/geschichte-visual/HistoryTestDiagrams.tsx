import type { SVGProps } from "react";

export const HISTORY_DIAGRAM_IDS = [
  "ancient-river", "greek-polis", "roman-road", "medieval-feudal", "printing-reformation", "industrial-modern",
  "clay-tablet", "ancient-coin", "medieval-manuscript", "royal-charter", "newspaper", "photograph",
  "migration-routes", "roman-network", "silk-road", "ocean-voyages", "industrial-rail", "cold-war-blocs",
  "irrigation-surplus", "feudal-protection", "plague-change", "print-ideas", "factory-urbanization", "alliances-war",
] as const;

export type HistoryDiagramId = (typeof HISTORY_DIAGRAM_IDS)[number];

export type HistoryDiagramFamily = "timeline" | "source" | "map" | "cause";

export const HISTORY_DIAGRAM_FAMILY: Record<HistoryDiagramId, HistoryDiagramFamily> = Object.fromEntries(
  HISTORY_DIAGRAM_IDS.map((id, index) => [id, index < 6 ? "timeline" : index < 12 ? "source" : index < 18 ? "map" : "cause"]),
) as Record<HistoryDiagramId, HistoryDiagramFamily>;

const BODIES: Record<HistoryDiagramId, string> = {
  "ancient-river": `<path d="M15 91c28-18 43 17 71-2s44 15 79-3" stroke="#3b82f6" stroke-width="5"/><path d="M43 80V48h34v32M37 48h46L60 24zM111 80V57h33v23M106 57h43l-21-18z" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M24 99h145" stroke="#64748b" stroke-width="2"/>`,
  "greek-polis": `<path d="M31 91h138M48 91V59h104v32M57 59V43h86v16M67 43l24-20 24 20" stroke="#334155" stroke-width="3"/><path d="M65 61v26M83 61v26M101 61v26M119 61v26M137 61v26" stroke="#6366f1" stroke-width="4"/><circle cx="91" cy="23" r="4" fill="#f59e0b" stroke="none"/>`,
  "roman-road": `<path d="M18 98L77 25l105 73" stroke="#475569" stroke-width="13"/><path d="M18 98L77 25l105 73" stroke="#f8fafc" stroke-width="2" stroke-dasharray="7 7"/><path d="M35 82h32v16H35zM127 72h32v26h-32z" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M143 72V54M135 54h16" stroke="#b91c1c" stroke-width="3"/>`,
  "medieval-feudal": `<path d="M22 100h156M41 100V55h23v-17h25v17h23v45M48 55l4-18 5 18M73 38l4-18 5 18M97 55l4-18 5 18" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M119 100V72h39v28M129 72v-14h19v14" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M112 88h7M158 88h12" stroke="#16a34a" stroke-width="4"/>`,
  "printing-reformation": `<path d="M36 92h128M52 92V35h74v57M126 48h23v44M62 45h54M62 58h54M62 71h54" fill="#f8fafc" stroke="#334155" stroke-width="3"/><path d="M72 24h66v16H72z" fill="#fbbf24" stroke="#92400e" stroke-width="3"/><circle cx="149" cy="38" r="13" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><path d="M149 25v26M136 38h26" stroke="#2563eb" stroke-width="2"/>`,
  "industrial-modern": `<path d="M18 101h164M30 101V58h38v43M68 101V43h47v58M115 101V68h47v33" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M40 58V29h12v29M87 43V20h12v23" stroke="#475569" stroke-width="6"/><path d="M46 27c11-13 18 8 30-6M93 18c10-10 18 7 27-5" stroke="#94a3b8" stroke-width="5"/><circle cx="141" cy="83" r="11" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><path d="M141 69v28M127 83h28" stroke="#b45309" stroke-width="3"/>`,
  "clay-tablet": `<path d="M45 21q-9 3-8 14l8 58q1 9 11 8l88-9q10-1 9-11l-7-57q-1-9-12-8z" fill="#fed7aa" stroke="#9a3412" stroke-width="3"/><path d="M60 39l13 6-11 5M83 35l11 5-9 6M107 32l14 7-12 5M65 61l16 7-14 5M94 58l12 6-10 5M120 54l15 7-12 5M70 81l14 6M99 77l17 7" stroke="#7c2d12" stroke-width="3"/>`,
  "ancient-coin": `<circle cx="100" cy="60" r="45" fill="#fef3c7" stroke="#b45309" stroke-width="4"/><circle cx="100" cy="60" r="36" stroke="#d97706" stroke-width="2" stroke-dasharray="3 5"/><path d="M91 82c-7-12-4-34 7-46 10 3 17 12 18 22-8 1-12 7-10 13 3 7-2 12-15 11z" fill="#fde68a" stroke="#92400e" stroke-width="3"/><path d="M88 91h28" stroke="#92400e" stroke-width="3"/>`,
  "medieval-manuscript": `<path d="M35 25q8-10 20 0h91q12-8 19 2v72q-10-8-21 0H55q-12-7-20 0z" fill="#fffbeb" stroke="#78350f" stroke-width="3"/><path d="M100 29v66M48 41h40M48 52h34M48 63h40M112 41h39M112 52h34M112 63h39" stroke="#92400e" stroke-width="2"/><path d="M51 78c12-14 21 14 34 0M116 79c8-12 19 9 31-2" stroke="#2563eb" stroke-width="3"/>`,
  "royal-charter": `<path d="M43 21h104v74H43z" fill="#fffbeb" stroke="#78350f" stroke-width="3"/><path d="M59 39h72M59 50h72M59 61h55M59 72h61" stroke="#64748b" stroke-width="2"/><circle cx="130" cy="84" r="15" fill="#ef4444" stroke="#991b1b" stroke-width="3"/><path d="M124 96l-6 17M136 96l7 17" stroke="#991b1b" stroke-width="5"/><path d="M76 20v-8M68 16h16" stroke="#d97706" stroke-width="3"/>`,
  "newspaper": `<path d="M25 20h150v82H25z" fill="#f8fafc" stroke="#334155" stroke-width="3"/><path d="M38 34h124M38 45h75M38 56h75M38 67h75M38 78h75M124 45h38v33h-38zM124 88h38" stroke="#475569" stroke-width="3"/><path d="M61 28h78" stroke="#0f172a" stroke-width="6"/>`,
  "photograph": `<path d="M31 24h138v76H31z" fill="#f8fafc" stroke="#334155" stroke-width="3"/><circle cx="68" cy="53" r="14" fill="#cbd5e1" stroke="#475569" stroke-width="3"/><path d="M45 88l29-22 22 15 25-29 34 36z" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><path d="M46 108h108" stroke="#64748b" stroke-width="3"/>`,
  "migration-routes": `<path d="M27 75c5-34 40-55 72-44 20 7 20 27 43 28 19 1 30 14 30 31-29 7-54-5-78 2-25 8-49 4-67-17z" fill="#ecfccb" stroke="#3f6212" stroke-width="3"/><path d="M39 66c26-23 44 15 70-7M102 45c22-10 31 15 50 15" stroke="#dc2626" stroke-width="4"/><path d="M103 52l8 7-10 3M145 54l9 6-10 4" stroke="#dc2626" stroke-width="3"/>`,
  "roman-network": `<path d="M31 84c9-41 42-61 74-45 26 13 39 2 62 25-17 31-48 34-72 25-25-9-42 12-64-5z" fill="#ffedd5" stroke="#9a3412" stroke-width="3"/><circle cx="98" cy="65" r="7" fill="#dc2626" stroke="none"/><path d="M98 65L48 50M98 65l52-21M98 65l-38 28M98 65l51 25" stroke="#b91c1c" stroke-width="3"/><circle cx="48" cy="50" r="4" fill="#b91c1c"/><circle cx="150" cy="44" r="4" fill="#b91c1c"/><circle cx="60" cy="93" r="4" fill="#b91c1c"/><circle cx="149" cy="90" r="4" fill="#b91c1c"/>`,
  "silk-road": `<path d="M22 73c25-38 59-24 80-42 24 14 45 8 76 39-30 30-59 8-82 24-22-12-48 2-74-21z" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M34 69c29-16 40 15 67-3s40 12 67-2" stroke="#7c3aed" stroke-width="4" stroke-dasharray="7 5"/><circle cx="34" cy="69" r="5" fill="#7c3aed"/><circle cx="168" cy="64" r="5" fill="#7c3aed"/>`,
  "ocean-voyages": `<path d="M20 74c14-33 34-51 59-50-9 24-4 43 18 56-29 20-53 16-77-6zM129 31c22 4 39 21 51 49-22 14-42 9-60-8 13-11 16-25 9-41z" fill="#dcfce7" stroke="#166534" stroke-width="3"/><path d="M77 51c24-20 45-18 68 3" stroke="#2563eb" stroke-width="4"/><path d="M137 48l10 6-11 5" stroke="#2563eb" stroke-width="3"/><path d="M82 86h37l-7 13H89zM99 86V63l18 13H99" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>`,
  "industrial-rail": `<path d="M21 94h158M29 105L68 39M171 105l-39-66M45 79h110M38 92h124M32 104h136" stroke="#475569" stroke-width="3"/><path d="M64 68h72v22H64zM79 52h31v16H79z" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><circle cx="79" cy="92" r="9" fill="#f8fafc" stroke="#334155" stroke-width="4"/><circle cx="122" cy="92" r="9" fill="#f8fafc" stroke="#334155" stroke-width="4"/>`,
  "cold-war-blocs": `<path d="M24 28h64v70H24z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><path d="M112 28h64v70h-64z" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/><path d="M100 18v92" stroke="#475569" stroke-width="4" stroke-dasharray="7 5"/><path d="M42 54h28M56 40v28M130 54h28M144 40v28" stroke="#334155" stroke-width="3"/><path d="M87 68h26M91 62l-7 6 7 6M109 62l7 6-7 6" stroke="#7c3aed" stroke-width="3"/>`,
  "irrigation-surplus": `<path d="M18 91h164M25 77c26-21 45 18 73-2s43 16 76-4" stroke="#3b82f6" stroke-width="5"/><path d="M43 71V35h28v36M37 35h40L57 20z" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M107 88V55M121 88V49M135 88V58M149 88V45" stroke="#16a34a" stroke-width="4"/><path d="M76 58h25M94 52l9 6-9 6" stroke="#7c3aed" stroke-width="3"/>`,
  "feudal-protection": `<path d="M26 101h148M38 101V54h56v47M47 54V39h14v15M72 54V32h14v22" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M118 101V75h34v26M112 75h46l-23-19z" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><path d="M96 70h20M110 64l8 6-8 6M116 87H96M102 81l-8 6 8 6" stroke="#7c3aed" stroke-width="3"/>`,
  "plague-change": `<path d="M25 98h150M38 98V55h44v43M118 98V68h38v30" fill="#f1f5f9" stroke="#334155" stroke-width="3"/><circle cx="100" cy="35" r="18" fill="#ede9fe" stroke="#6d28d9" stroke-width="3"/><path d="M91 28l18 14M109 28L91 42" stroke="#6d28d9" stroke-width="4"/><path d="M84 78h31M107 72l10 6-10 6" stroke="#dc2626" stroke-width="3"/><path d="M47 70h26M126 82h21" stroke="#64748b" stroke-width="4"/>`,
  "print-ideas": `<path d="M24 91h152M37 91V38h65v53M112 91V55h46v36" fill="#f8fafc" stroke="#334155" stroke-width="3"/><path d="M49 49h41M49 60h41M49 71h32" stroke="#475569" stroke-width="3"/><path d="M102 63h18M113 57l9 6-9 6" stroke="#7c3aed" stroke-width="3"/><circle cx="136" cy="37" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><path d="M136 22v30M121 37h30" stroke="#d97706" stroke-width="2"/>`,
  "factory-urbanization": `<path d="M20 101h160M31 101V57h39v44M70 101V42h43v59M124 101V72h37v29" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><path d="M43 57V27h12v30M91 42V19h12v23" stroke="#475569" stroke-width="6"/><path d="M55 82h14M83 61h18M135 85h15" stroke="#2563eb" stroke-width="4"/><path d="M113 67h12M119 61l8 6-8 6" stroke="#dc2626" stroke-width="3"/>`,
  "alliances-war": `<circle cx="48" cy="38" r="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><circle cx="151" cy="38" r="16" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/><circle cx="75" cy="91" r="16" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><circle cx="127" cy="91" r="16" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><path d="M62 47l20 30M138 48l-17 29M64 36h71M91 91h20" stroke="#475569" stroke-width="4"/><path d="M91 59l18 8-18 8z" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>`,
};

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]!);
}

export function historyDiagramSvgMarkup(kind: HistoryDiagramId, label: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" role="img" aria-label="${escapeXml(label)}" style="width:190px;max-width:100%;height:auto"><title>${escapeXml(label)}</title>${BODIES[kind]}</svg>`;
}

type Props = SVGProps<SVGSVGElement> & { kind: HistoryDiagramId; label: string };

export function HistoryTestDiagram({ kind, label, ...props }: Props) {
  return (
    <svg viewBox="0 0 200 120" role="img" aria-label={label} {...props}>
      <title>{label}</title>
      <g dangerouslySetInnerHTML={{ __html: BODIES[kind] }} />
    </svg>
  );
}
