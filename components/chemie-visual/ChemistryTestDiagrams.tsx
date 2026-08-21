import type { ReactNode } from "react";

export type ParticleDiagramId = "solid" | "liquid" | "gas" | "dissolving" | "diffusion" | "heating";
export type SeparationDiagramId = "filtration" | "evaporation" | "magnet" | "decanting" | "distillation" | "chromatography";
export type HazardDiagramId = "flammable" | "toxic" | "corrosive" | "irritant" | "oxidizing" | "explosive";
export type ChangeDiagramId = "melting" | "rusting" | "dissolving" | "burning" | "fizzing" | "precipitate";

const INK = "#334155";
const ACCENT = "#7c3aed";
const LINE = { fill: "none", stroke: INK, strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Canvas({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" className={className ?? "h-auto w-full"} role="img" aria-label={label}>{children}</svg>;
}

function Dot({ x, y, color = "#2dd4bf", r = 5 }: { x: number; y: number; color?: string; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={color} stroke={INK} strokeWidth="1.5" />;
}

export function ParticleDiagramSvg({ kind, label, className }: { kind: ParticleDiagramId; label: string; className?: string }) {
  const grid = [[48,38],[70,38],[92,38],[114,38],[48,60],[70,60],[92,60],[114,60],[48,82],[70,82],[92,82],[114,82]];
  const liquid = [[42,73],[61,66],[81,76],[101,68],[121,77],[51,91],[73,94],[96,89],[118,96]];
  const gas = [[29,28],[73,20],[132,31],[48,61],[111,59],[23,94],[82,99],[150,88]];
  return <Canvas label={label} className={className}>
    {kind === "solid" && <g>{grid.map(([x,y],i)=><Dot key={i} x={x} y={y}/>)}</g>}
    {kind === "liquid" && <g><path d="M28 96h124" {...LINE} stroke="#38bdf8"/>{liquid.map(([x,y],i)=><Dot key={i} x={x} y={y} color="#38bdf8"/>)}</g>}
    {kind === "gas" && <g>{gas.map(([x,y],i)=><Dot key={i} x={x} y={y} color="#a78bfa"/>)}<path d="m35 48 12-5m55-9 13 5m20 34 12-5" {...LINE} stroke={ACCENT}/></g>}
    {kind === "dissolving" && <g><path d="M42 24v65c0 17 96 17 96 0V24" {...LINE}/><path d="M43 72c24-7 70 7 94 0v19c0 14-94 14-94 0Z" fill="#bae6fd" stroke="none"/>{[[58,43],[75,54],[94,45],[116,57]].map(([x,y],i)=><Dot key={`s${i}`} x={x} y={y} color="#f59e0b"/>)}{[[53,82],[70,91],[91,80],[110,93],[126,82]].map(([x,y],i)=><Dot key={`w${i}`} x={x} y={y} color="#38bdf8" r={4}/>)}</g>}
    {kind === "diffusion" && <g>{[[35,36],[42,58],[31,82],[55,91]].map(([x,y],i)=><Dot key={i} x={x} y={y} color="#fb7185"/>)}{[[123,32],[145,51],[126,74],[149,94]].map(([x,y],i)=><Dot key={i} x={x} y={y} color="#38bdf8"/>)}<path d="M65 61h50m-11-9 11 9-11 9M115 82H65m11-9-11 9 11 9" {...LINE} stroke={ACCENT}/></g>}
    {kind === "heating" && <g>{liquid.map(([x,y],i)=><Dot key={i} x={x} y={y} color="#fb923c"/>)}<path d="M48 105c7-18 14 8 21-10 7-18 14 8 21-10 7-18 14 8 21-10 7-18 14 8 21-10" {...LINE} stroke="#f97316"/><path d="M62 56V30m-7 10 7-10 7 10M105 52V22m-7 10 7-10 7 10" {...LINE} stroke={ACCENT}/></g>}
  </Canvas>;
}

export function SeparationDiagramSvg({ kind, label, className }: { kind: SeparationDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g {...LINE}>
    {kind === "filtration" && <><path d="M50 20h42l-13 32v35m0 0h35v20H68V87"/><path d="M53 27h36l-5 13H58Z" fill="#fed7aa"/><path d="M79 55v20" stroke="#38bdf8" strokeDasharray="3 4"/><path d="M72 97h36" stroke="#38bdf8"/></>}
    {kind === "evaporation" && <><path d="M48 76h84l-10 25H58Z" fill="#bae6fd"/><path d="M62 109h56M72 109l-8 8m44-8 8 8"/><path d="M67 66c-10-12 8-15 0-27m25 27c-10-12 8-15 0-27m25 27c-10-12 8-15 0-27" stroke={ACCENT}/></>}
    {kind === "magnet" && <><path d="M40 26v45c0 33 49 33 49 0V26H70v45c0 10-11 10-11 0V26Z" fill="#fecaca"/><path d="M40 26h19m11 0h19" stroke="#2563eb"/><circle cx="126" cy="48" r="5" fill="#94a3b8"/><circle cx="139" cy="68" r="5" fill="#94a3b8"/><circle cx="117" cy="87" r="5" fill="#94a3b8"/><path d="M98 62h20m-9-8 9 8-9 8" stroke={ACCENT}/></>}
    {kind === "decanting" && <><path d="M44 28h46v55c0 20-46 20-46 0Z" transform="rotate(-25 67 64)" fill="#bae6fd"/><path d="M111 69h42v32H111Z"/><path d="M93 58c17 4 23 11 27 20" stroke="#38bdf8"/><path d="M112 90h40" stroke="#38bdf8"/></>}
    {kind === "distillation" && <><path d="M34 92c0-28 9-48 24-48s24 20 24 48Z" fill="#dbeafe"/><path d="M58 44V26h45v19l34 25v25"/><path d="M103 35h43v20h-43"/><path d="M115 35v20m12-20v20m10 40h18" stroke="#38bdf8"/><path d="M44 78h28" stroke="#f59e0b"/></>}
    {kind === "chromatography" && <><path d="M55 18h70v88H55Z" fill="#f8fafc"/><path d="M62 88h56" stroke="#38bdf8"/><circle cx="74" cy="80" r="4" fill="#7c3aed"/><circle cx="91" cy="80" r="4" fill="#7c3aed"/><circle cx="108" cy="80" r="4" fill="#7c3aed"/><circle cx="74" cy="46" r="5" fill="#fb7185"/><circle cx="91" cy="59" r="5" fill="#f59e0b"/><circle cx="108" cy="34" r="5" fill="#38bdf8"/></>}
  </g></Canvas>;
}

export function HazardDiagramSvg({ kind, label, className }: { kind: HazardDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g transform="translate(90 60) rotate(45)"><rect x="-39" y="-39" width="78" height="78" fill="#fff" stroke="#ef4444" strokeWidth="5"/></g><g {...LINE} strokeWidth="3">
    {kind === "flammable" && <path d="M91 92c-25 0-30-24-14-39 4 12 12 13 13-2 1-13 9-23 16-29 3 16 17 24 17 43 0 16-12 27-32 27Z" fill="#fb923c"/>}
    {kind === "toxic" && <><circle cx="90" cy="50" r="19" fill="#fff"/><circle cx="83" cy="47" r="3" fill={INK}/><circle cx="97" cy="47" r="3" fill={INK}/><path d="m83 58 14 0M58 88l64-35M58 53l64 35"/></>}
    {kind === "corrosive" && <><path d="M50 33h36v10H50Zm49 0h32v10H99Z" fill="#cbd5e1"/><path d="m68 43 10 24m37-24-11 24"/><circle cx="79" cy="73" r="4" fill="#7c3aed"/><circle cx="102" cy="73" r="4" fill="#7c3aed"/><path d="M43 88h52m11 0h35M55 81l32 13"/></>}
    {kind === "irritant" && <><path d="M90 31v40" strokeWidth="8"/><circle cx="90" cy="88" r="5" fill={INK}/></>}
    {kind === "oxidizing" && <><circle cx="90" cy="78" r="17"/><path d="M90 63c-18-8-12-25 2-36 0 13 17 17 9 31" fill="#fb923c"/></>}
    {kind === "explosive" && <><path d="m90 61 13-31m-8 35 30-20M82 58 61 31m18 37-35-5m43 9-20 28m29-29 31 21"/><path d="m70 55 15-13 18 9 8 20-19 14-23-9Z" fill="#f59e0b"/></>}
  </g></Canvas>;
}

export function ChangeDiagramSvg({ kind, label, className }: { kind: ChangeDiagramId; label: string; className?: string }) {
  return <Canvas label={label} className={className}><g {...LINE}>
    {kind === "melting" && <><path d="M49 34h47v43H49Z" fill="#bae6fd"/><path d="M45 92c16-13 34 9 51-3 14-10 30 4 42-4" stroke="#38bdf8"/><path d="M119 24v42m-10-10 10 10 10-10" stroke={ACCENT}/></>}
    {kind === "rusting" && <><path d="M48 82h85l-15 17H60Z" fill="#cbd5e1"/><path d="M59 65h62l-8 17H67Z" fill="#b45309"/><circle cx="74" cy="73" r="3" fill="#f97316"/><circle cx="99" cy="70" r="4" fill="#f97316"/><path d="M77 27c-9 13-5 25 4 29m28-29c-9 13-5 25 4 29" stroke="#38bdf8"/></>}
    {kind === "dissolving" && <><path d="M48 29v62c0 18 84 18 84 0V29"/><path d="M49 69c21-6 61 6 82 0v24c0 14-82 14-82 0Z" fill="#bae6fd" stroke="none"/><path d="M73 43h35l-6 13H79Z" fill="#fef3c7"/><circle cx="72" cy="82" r="3" fill="#f59e0b"/><circle cx="91" cy="91" r="3" fill="#f59e0b"/><circle cx="110" cy="80" r="3" fill="#f59e0b"/></>}
    {kind === "burning" && <><path d="M42 94h96M58 88l57-49M72 98l56-48" stroke="#92400e" strokeWidth="7"/><path d="M95 66c-23-13-12-35 5-49 0 18 23 23 14 45-4 10-11 14-19 4Z" fill="#fb923c" stroke="#f97316"/></>}
    {kind === "fizzing" && <><path d="M54 24h40l-7 23v48c0 14-26 14-26 0V47Z" fill="#fef3c7"/><path d="M61 75h26" stroke="#38bdf8"/><circle cx="74" cy="66" r="4" fill="#38bdf8"/><circle cx="86" cy="55" r="3" fill="#38bdf8"/><circle cx="104" cy="45" r="5" fill="#38bdf8"/><circle cx="120" cy="30" r="4" fill="#38bdf8"/></>}
    {kind === "precipitate" && <><path d="M53 22h74v69c0 22-74 22-74 0Z"/><path d="M54 58h72v34c0 18-72 18-72 0Z" fill="#dbeafe" stroke="none"/><circle cx="71" cy="87" r="6" fill="#f59e0b"/><circle cx="91" cy="94" r="7" fill="#f59e0b"/><circle cx="111" cy="84" r="5" fill="#f59e0b"/><path d="M90 28v23m-9-9 9 9 9-9" stroke={ACCENT}/></>}
  </g></Canvas>;
}
