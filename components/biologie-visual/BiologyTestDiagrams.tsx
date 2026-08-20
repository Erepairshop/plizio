import type { ReactNode } from "react";

export type OrganDiagramId = "heart" | "lungs" | "brain" | "stomach" | "liver" | "kidney";
export type PlantDiagramId = "flower" | "leaf" | "stem" | "root" | "fruit" | "seed";
export type CellDiagramId = "nucleus" | "mitochondrion" | "membrane" | "ribosome" | "chloroplast" | "vacuole";
export type GeneticsDiagramId = "dna" | "chromosome" | "punnett" | "mutation" | "selection" | "phylogeny";

const INK = "#334155";
const VIOLET = "#7c3aed";
const GREEN = "#22c55e";
const BLUE = "#38bdf8";
const CORAL = "#fb7185";
const AMBER = "#f59e0b";
const LINE = {
  fill: "none",
  stroke: INK,
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Canvas({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 180 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? "h-auto w-full"}
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

export function OrganDiagramSvg({ kind, label, className }: { kind: OrganDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g {...LINE}>
    {kind === "heart" && <><path d="M90 103C75 86 44 66 49 42c4-20 30-24 41-7 11-17 37-13 41 7 5 24-26 44-41 61Z" fill="#fecdd3"/><path d="M89 36c-2-11 3-21 12-27m-7 27c8-8 18-12 29-10M83 35c-8-7-16-11-27-9" stroke={CORAL}/><path d="M90 42v45M70 56h40" stroke={CORAL} strokeDasharray="4 4"/></>}
    {kind === "lungs" && <><path d="M87 32v68M93 32v68"/><path d="M87 43C70 28 48 38 43 62c-7 34 13 45 44 32Z" fill="#bae6fd"/><path d="M93 43c17-15 39-5 44 19 7 34-13 45-44 32Z" fill="#bae6fd"/><path d="m90 34-18-18m18 18 18-18M72 16v24m36-24v24" stroke={BLUE}/></>}
    {kind === "brain" && <><path d="M53 87c-18-7-19-31-4-40-3-18 18-30 32-20 10-18 37-11 38 8 20 1 27 28 12 40 3 21-22 33-38 21-13 16-39 8-40-9Z" fill="#ddd6fe"/><path d="M71 32c-7 10 2 19 10 22-12 8-11 24-1 31m30-50c8 9 2 20-7 24 11 8 8 25-3 33M50 54c12-4 23 2 27 11m43-18c-10 0-19 6-22 15" stroke={VIOLET}/></>}
    {kind === "stomach" && <><path d="M81 18v30c-22 5-31 24-24 43 8 23 42 25 58 6 14-17 5-38-11-47-8-5-9-20-8-32" fill="#fed7aa"/><path d="M80 48c9 3 16 2 24 2m-40 29c13-8 31 2 45-9M69 91c13-5 25 6 38-3" stroke={AMBER}/><path d="M114 97c8 1 12 6 13 13" /></>}
    {kind === "liver" && <><path d="M37 57c6-25 37-38 76-31 22 4 34 18 29 37-6 23-33 31-58 28-27-3-52-13-47-34Z" fill="#fdba74"/><path d="M91 27c4 17-3 40-18 61M77 52c22 1 41 8 60 18" stroke="#c2410c"/><path d="M102 91v17m-8-8h16" stroke={GREEN}/></>}
    {kind === "kidney" && <><path d="M75 27C50 17 35 39 41 67c5 24 23 37 42 24 12-8 4-23-1-31-6-10 4-22-7-33Z" fill="#fecdd3"/><path d="M105 27c25-10 40 12 34 40-5 24-23 37-42 24-12-8-4-23 1-31 6-10-4-22 7-33Z" fill="#fecdd3"/><path d="M82 59c11 4 9 21 8 45m8-45c-11 4-9 21-8 45" stroke={CORAL}/><path d="M83 75h14" /></>}
  </g></Canvas>;
}

export function PlantDiagramSvg({ kind, label, className }: { kind: PlantDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g {...LINE}>
    {kind === "flower" && <><path d="M90 66v45"/><path d="M90 82c-18-13-28-5-31 5 12 5 23 4 31-5Zm0 10c17-12 27-4 31 6-12 5-23 3-31-6Z" fill="#bbf7d0"/><circle cx="90" cy="48" r="10" fill="#fde68a"/>{[0,60,120,180,240,300].map((a)=><ellipse key={a} cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8" transform={`rotate(${a} 90 48)`}/>)}</>}
    {kind === "leaf" && <><path d="M38 93C42 40 78 14 142 22c-4 54-40 82-104 71Z" fill="#bbf7d0"/><path d="M43 90 133 29M69 72 55 51m38 3-4-25m18 14 18 12" stroke={GREEN}/></>}
    {kind === "stem" && <><path d="M89 109c-1-30 1-59 2-88" stroke={GREEN} strokeWidth="6"/><path d="M90 51c-21-18-35-9-41 5 17 9 29 5 41-5Zm1 23c20-17 34-8 40 7-17 8-29 4-40-7Z" fill="#bbf7d0"/><path d="M91 21c-8 2-13 8-15 15m15-15c8 2 13 8 15 15" stroke={VIOLET}/></>}
    {kind === "root" && <><path d="M90 12v43M37 55h106" stroke={GREEN}/><path d="M90 55v53m0-33L62 102m28-19 25 25M74 81 56 72m46 11 22-13M77 96l-3 15m31-15 5 15" stroke="#a16207"/><path d="M47 55c15-10 71-10 86 0" stroke="#94a3b8" strokeDasharray="3 4"/></>}
    {kind === "fruit" && <><path d="M91 32c-3-12 3-21 13-27"/><path d="M95 23c10-9 21-7 27 1-9 8-18 9-27-1Z" fill="#bbf7d0"/><path d="M90 36c24-16 46 2 42 32-4 31-25 43-42 34-17 9-38-3-42-34-4-30 18-48 42-32Z" fill="#fda4af"/><path d="M90 46v49" stroke={CORAL} strokeDasharray="4 4"/><circle cx="80" cy="69" r="3" fill="#78350f"/><circle cx="100" cy="75" r="3" fill="#78350f"/></>}
    {kind === "seed" && <><path d="M90 103c-34-8-46-38-27-64 17-23 49-20 61 4 13 27-2 52-34 60Z" fill="#fde68a"/><path d="M70 83c17-4 28-18 34-42M86 72c6 4 13 9 18 17" stroke="#a16207"/><path d="M104 41c9 9 12 21 9 34" stroke={GREEN}/></>}
  </g></Canvas>;
}

export function CellDiagramSvg({ kind, label, className }: { kind: CellDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g {...LINE}>
    {kind === "nucleus" && <><path d="M35 61c0-35 25-48 55-48s55 13 55 48-25 47-55 47-55-12-55-47Z" fill="#e0f2fe"/><circle cx="90" cy="61" r="27" fill="#ddd6fe"/><circle cx="84" cy="55" r="8" fill="#a78bfa"/><path d="m74 72 30-24m-27 7 24 21" stroke={VIOLET}/></>}
    {kind === "mitochondrion" && <><path d="M34 61c0-30 25-44 56-44s56 14 56 44-25 43-56 43-56-13-56-43Z" fill="#fed7aa"/><path d="M51 62c12-27 24 26 38 0s25 27 40-2" stroke="#f97316" strokeWidth="4"/><path d="M55 43c20-14 49-14 70 0m-70 37c20 14 49 14 70 0" stroke={AMBER}/></>}
    {kind === "membrane" && <>{[35,53,71,89,107,125,143].map((x)=><g key={x}><circle cx={x} cy="46" r="6" fill="#bae6fd"/><circle cx={x} cy="74" r="6" fill="#bae6fd"/><path d={`M${x-2} 52v16m4-16v16`} stroke={BLUE}/></g>)}<path d="M24 37h132M24 83h132" stroke="#94a3b8" strokeDasharray="3 4"/><path d="M90 18v18m-7-9 7 9 7-9m0 66-7-9-7 9m7-9v18" stroke={VIOLET}/></>}
    {kind === "ribosome" && <><path d="M33 88c12-35 29-55 57-55s45 20 57 55" stroke="#94a3b8" strokeDasharray="4 4"/>{[[49,77],[62,55],[77,83],[91,49],[104,76],[121,57],[136,84]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="7" fill="#c4b5fd" stroke={INK} strokeWidth="1.5"/>)}<path d="M35 103c30-15 75-15 110 0" stroke={VIOLET}/></>}
    {kind === "chloroplast" && <><ellipse cx="90" cy="60" rx="61" ry="43" fill="#bbf7d0"/>{[48,69,90,111,132].map((x)=><g key={x}><rect x={x-9} y="43" width="18" height="7" rx="3" fill="#4ade80"/><rect x={x-9} y="55" width="18" height="7" rx="3" fill="#4ade80"/><rect x={x-9} y="67" width="18" height="7" rx="3" fill="#4ade80"/></g>)}<path d="M40 88c31-9 69-9 100 0" stroke={GREEN}/></>}
    {kind === "vacuole" && <><path d="M25 28h130v64H25Z" fill="#dcfce7"/><path d="M48 34c29-14 70-10 84 11 15 22 4 43-23 52-30 9-63-1-70-23-6-18-1-33 9-40Z" fill="#bae6fd" stroke={BLUE}/><path d="M61 53c18-7 39-5 56 4m-48 19c17 6 34 6 49-1" stroke="#fff" strokeWidth="4"/></>}
  </g></Canvas>;
}

export function GeneticsDiagramSvg({ kind, label, className }: { kind: GeneticsDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g {...LINE}>
    {kind === "dna" && <><path d="M42 18c36 19 60 65 96 84M138 18c-36 19-60 65-96 84" stroke={BLUE}/>{[28,42,57,72,87].map((y,i)=><path key={y} d={`M${55+i*10} ${y}h${70-i*20}`} stroke={i%2 ? CORAL : VIOLET}/>)}</>}
    {kind === "chromosome" && <><path d="M57 18c0 27 20 30 33 43-13 13-33 17-33 42M123 18c0 27-20 30-33 43 13 13 33 17 33 42" stroke={VIOLET} strokeWidth="8"/><circle cx="90" cy="61" r="7" fill="#fde68a"/><path d="M38 24h22m60 0h22M37 99h23m60 0h23" stroke="#94a3b8" strokeDasharray="4 4"/></>}
    {kind === "punnett" && <><path d="M63 29h85v76H63Zm42 0v76M63 67h85M36 48h18m-18 38h18M82 12v12m44-12v12"/><text x="76" y="54" fill={VIOLET} stroke="none" fontSize="15">Aa</text><text x="117" y="54" fill={VIOLET} stroke="none" fontSize="15">aa</text><text x="76" y="92" fill={VIOLET} stroke="none" fontSize="15">AA</text><text x="117" y="92" fill={VIOLET} stroke="none" fontSize="15">Aa</text></>}
    {kind === "mutation" && <><path d="M29 42c30-18 91-18 122 0M29 78c30 18 91 18 122 0" stroke={BLUE}/>{[43,61,79,97,115,133].map((x)=><path key={x} d={`M${x} 35v50`} stroke="#94a3b8"/>)}<path d="m88 49 9 12-9 12-9-12Z" fill="#fda4af" stroke={CORAL}/><path d="M90 19v20m-8-9 8 9 8-9" stroke={CORAL}/></>}
    {kind === "selection" && <><path d="M22 101h136" stroke="#94a3b8"/>{[[39,84,8],[66,75,13],[101,59,20],[137,39,28]].map(([x,y,r],i)=><g key={x}><circle cx={x} cy={y} r={r/2} fill={i<2 ? "#cbd5e1" : "#bbf7d0"}/><path d={`M${x} ${y-r/2}v-${r}`} stroke={GREEN}/></g>)}<path d="M31 28h112m-11-9 11 9-11 9" stroke={VIOLET}/></>}
    {kind === "phylogeny" && <><path d="M30 101h30V77h30V53h30V29h30M60 77V46m30 7V24m30 5V12" /><circle cx="60" cy="46" r="6" fill="#fde68a"/><circle cx="90" cy="24" r="6" fill="#bae6fd"/><circle cx="120" cy="12" r="6" fill="#c4b5fd"/><circle cx="150" cy="29" r="6" fill="#bbf7d0"/><path d="M29 101h121" stroke={VIOLET} strokeDasharray="4 4"/></>}
  </g></Canvas>;
}

export type BiologyDiagramFamily = "organ" | "plant" | "cell" | "genetics";

const PRINT_BODIES: Record<BiologyDiagramFamily, Record<string, string>> = {
  organ: {
    heart: '<path d="M90 103C75 86 44 66 49 42c4-20 30-24 41-7 11-17 37-13 41 7 5 24-26 44-41 61Z" fill="#fecdd3"/><path d="M89 36c-2-11 3-21 12-27m-7 27c8-8 18-12 29-10M83 35c-8-7-16-11-27-9" stroke="#fb7185"/><path d="M90 42v45M70 56h40" stroke="#fb7185" stroke-dasharray="4 4"/>',
    lungs: '<path d="M87 32v68M93 32v68"/><path d="M87 43C70 28 48 38 43 62c-7 34 13 45 44 32Z" fill="#bae6fd"/><path d="M93 43c17-15 39-5 44 19 7 34-13 45-44 32Z" fill="#bae6fd"/><path d="m90 34-18-18m18 18 18-18M72 16v24m36-24v24" stroke="#38bdf8"/>',
    brain: '<path d="M53 87c-18-7-19-31-4-40-3-18 18-30 32-20 10-18 37-11 38 8 20 1 27 28 12 40 3 21-22 33-38 21-13 16-39 8-40-9Z" fill="#ddd6fe"/><path d="M71 32c-7 10 2 19 10 22-12 8-11 24-1 31m30-50c8 9 2 20-7 24 11 8 8 25-3 33M50 54c12-4 23 2 27 11m43-18c-10 0-19 6-22 15" stroke="#7c3aed"/>',
    stomach: '<path d="M81 18v30c-22 5-31 24-24 43 8 23 42 25 58 6 14-17 5-38-11-47-8-5-9-20-8-32" fill="#fed7aa"/><path d="M80 48c9 3 16 2 24 2m-40 29c13-8 31 2 45-9M69 91c13-5 25 6 38-3" stroke="#f59e0b"/>',
    liver: '<path d="M37 57c6-25 37-38 76-31 22 4 34 18 29 37-6 23-33 31-58 28-27-3-52-13-47-34Z" fill="#fdba74"/><path d="M91 27c4 17-3 40-18 61M77 52c22 1 41 8 60 18" stroke="#c2410c"/>',
    kidney: '<path d="M75 27C50 17 35 39 41 67c5 24 23 37 42 24 12-8 4-23-1-31-6-10 4-22-7-33Z" fill="#fecdd3"/><path d="M105 27c25-10 40 12 34 40-5 24-23 37-42 24-12-8-4-23 1-31 6-10-4-22 7-33Z" fill="#fecdd3"/><path d="M82 59c11 4 9 21 8 45m8-45c-11 4-9 21-8 45" stroke="#fb7185"/>',
  },
  plant: {
    flower: '<path d="M90 66v45"/><circle cx="90" cy="48" r="10" fill="#fde68a"/><ellipse cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8"/><ellipse cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8" transform="rotate(60 90 48)"/><ellipse cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8" transform="rotate(120 90 48)"/><ellipse cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8" transform="rotate(180 90 48)"/><ellipse cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8" transform="rotate(240 90 48)"/><ellipse cx="90" cy="26" rx="11" ry="20" fill="#fbcfe8" transform="rotate(300 90 48)"/>',
    leaf: '<path d="M38 93C42 40 78 14 142 22c-4 54-40 82-104 71Z" fill="#bbf7d0"/><path d="M43 90 133 29M69 72 55 51m38 3-4-25m18 14 18 12" stroke="#22c55e"/>',
    stem: '<path d="M89 109c-1-30 1-59 2-88" stroke="#22c55e" stroke-width="6"/><path d="M90 51c-21-18-35-9-41 5 17 9 29 5 41-5Zm1 23c20-17 34-8 40 7-17 8-29 4-40-7Z" fill="#bbf7d0"/>',
    root: '<path d="M90 12v43M37 55h106" stroke="#22c55e"/><path d="M90 55v53m0-33L62 102m28-19 25 25M74 81 56 72m46 11 22-13M77 96l-3 15m31-15 5 15" stroke="#a16207"/>',
    fruit: '<path d="M91 32c-3-12 3-21 13-27"/><path d="M95 23c10-9 21-7 27 1-9 8-18 9-27-1Z" fill="#bbf7d0"/><path d="M90 36c24-16 46 2 42 32-4 31-25 43-42 34-17 9-38-3-42-34-4-30 18-48 42-32Z" fill="#fda4af"/>',
    seed: '<path d="M90 103c-34-8-46-38-27-64 17-23 49-20 61 4 13 27-2 52-34 60Z" fill="#fde68a"/><path d="M70 83c17-4 28-18 34-42M86 72c6 4 13 9 18 17" stroke="#a16207"/>',
  },
  cell: {
    nucleus: '<path d="M35 61c0-35 25-48 55-48s55 13 55 48-25 47-55 47-55-12-55-47Z" fill="#e0f2fe"/><circle cx="90" cy="61" r="27" fill="#ddd6fe"/><circle cx="84" cy="55" r="8" fill="#a78bfa"/>',
    mitochondrion: '<path d="M34 61c0-30 25-44 56-44s56 14 56 44-25 43-56 43-56-13-56-43Z" fill="#fed7aa"/><path d="M51 62c12-27 24 26 38 0s25 27 40-2" stroke="#f97316" stroke-width="4"/>',
    membrane: '<path d="M24 37h132M24 83h132" stroke="#94a3b8" stroke-dasharray="3 4"/><path d="M35 46v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28m18-28v28" stroke="#38bdf8"/><path d="M90 18v18m-7-9 7 9 7-9" stroke="#7c3aed"/>',
    ribosome: '<path d="M33 88c12-35 29-55 57-55s45 20 57 55" stroke="#94a3b8" stroke-dasharray="4 4"/><circle cx="49" cy="77" r="7" fill="#c4b5fd"/><circle cx="77" cy="83" r="7" fill="#c4b5fd"/><circle cx="104" cy="76" r="7" fill="#c4b5fd"/><circle cx="136" cy="84" r="7" fill="#c4b5fd"/>',
    chloroplast: '<ellipse cx="90" cy="60" rx="61" ry="43" fill="#bbf7d0"/><path d="M40 88c31-9 69-9 100 0" stroke="#22c55e"/><path d="M42 45h95M42 58h95M42 71h95" stroke="#4ade80" stroke-width="6" stroke-dasharray="16 6"/>',
    vacuole: '<path d="M25 28h130v64H25Z" fill="#dcfce7"/><path d="M48 34c29-14 70-10 84 11 15 22 4 43-23 52-30 9-63-1-70-23-6-18-1-33 9-40Z" fill="#bae6fd" stroke="#38bdf8"/>',
  },
  genetics: {
    dna: '<path d="M42 18c36 19 60 65 96 84M138 18c-36 19-60 65-96 84" stroke="#38bdf8"/><path d="M55 28h70M65 42h50M75 57h30M75 72h30M65 87h50" stroke="#7c3aed"/>',
    chromosome: '<path d="M57 18c0 27 20 30 33 43-13 13-33 17-33 42M123 18c0 27-20 30-33 43 13 13 33 17 33 42" stroke="#7c3aed" stroke-width="8"/><circle cx="90" cy="61" r="7" fill="#fde68a"/>',
    punnett: '<path d="M63 29h85v76H63Zm42 0v76M63 67h85M36 48h18m-18 38h18M82 12v12m44-12v12"/><text x="76" y="54" fill="#7c3aed" stroke="none" font-size="15">Aa</text><text x="117" y="54" fill="#7c3aed" stroke="none" font-size="15">aa</text>',
    mutation: '<path d="M29 42c30-18 91-18 122 0M29 78c30 18 91 18 122 0" stroke="#38bdf8"/><path d="M43 35v50m18-50v50m18-50v50m18-50v50m18-50v50m18-50v50" stroke="#94a3b8"/><path d="m88 49 9 12-9 12-9-12Z" fill="#fda4af" stroke="#fb7185"/>',
    selection: '<path d="M22 101h136" stroke="#94a3b8"/><circle cx="39" cy="84" r="4" fill="#cbd5e1"/><circle cx="66" cy="75" r="7" fill="#cbd5e1"/><circle cx="101" cy="59" r="10" fill="#bbf7d0"/><circle cx="137" cy="39" r="14" fill="#bbf7d0"/><path d="M31 28h112m-11-9 11 9-11 9" stroke="#7c3aed"/>',
    phylogeny: '<path d="M30 101h30V77h30V53h30V29h30M60 77V46m30 7V24m30 5V12"/><circle cx="60" cy="46" r="6" fill="#fde68a"/><circle cx="90" cy="24" r="6" fill="#bae6fd"/><circle cx="120" cy="12" r="6" fill="#c4b5fd"/><circle cx="150" cy="29" r="6" fill="#bbf7d0"/>',
  },
};

export function biologyDiagramSvgMarkup(family: BiologyDiagramFamily, kind: string, label: string): string {
  const body = PRINT_BODIES[family]?.[kind];
  if (!body) return "";
  const safeLabel = label.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
  return `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#334155" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="${safeLabel}" style="width:100%;height:auto;max-height:90px;">${body}</svg>`;
}
