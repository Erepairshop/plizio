"use client";

export type ForceSceneId =
  | "apple-gravity" | "cart-push" | "sled-pull" | "ball-bounce"
  | "car-drag" | "dumbbell-weight" | "rocket-thrust" | "sail-wind"
  | "box-rope" | "parachute-gravity" | "spring-force" | "ball-gravity"
  | "magnet-attraction" | "suitcase-lift" | "bike-brake" | "door-pull";

export type ForceDirection = "up" | "down" | "left" | "right";
export type CircuitDiagramId = "closed" | "series" | "parallel" | "open";

const ARROWS: Record<ForceDirection, string> = {
  right: "M 112 60 L 154 60 M 143 50 L 154 60 L 143 70",
  left: "M 48 60 L 6 60 M 17 50 L 6 60 L 17 70",
  up: "M 80 42 L 80 6 M 70 17 L 80 6 L 90 17",
  down: "M 80 78 L 80 114 M 70 103 L 80 114 L 90 103",
};

function SceneArtwork({ scene }: { scene: ForceSceneId }) {
  const common = { stroke: "#334155", strokeWidth: 2.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (scene) {
    case "apple-gravity": return <g {...common}><path d="M80 22c-16 0-22 16-13 31 5 9 21 9 26 0 9-15 3-31-13-31Z" fill="#fb7185"/><path d="M80 22c0-8 5-12 11-14"/><path d="M91 8c6 0 10 3 12 8" stroke="#16a34a"/></g>;
    case "cart-push": return <g {...common}><path d="M42 42h66l-9 34H51Z" fill="#bfdbfe"/><path d="M42 42 35 27H22"/><circle cx="58" cy="86" r="8" fill="#fff"/><circle cx="91" cy="86" r="8" fill="#fff"/><path d="M20 55h18" stroke="#f97316"/></g>;
    case "sled-pull": return <g {...common}><path d="M43 64h65l-8 20H51Z" fill="#dbeafe"/><path d="M38 88c18 9 58 9 76 0"/><path d="M108 64 139 37" stroke="#f97316"/></g>;
    case "ball-bounce": return <g {...common}><circle cx="80" cy="55" r="23" fill="#fde68a"/><path d="M60 49c13 2 27 9 39 20M76 33c6 14 8 29 5 44"/><path d="M38 94h84" stroke="#94a3b8"/></g>;
    case "car-drag": return <g {...common}><path d="M35 69h91l-8-26H62L49 55H35Z" fill="#fecaca"/><circle cx="57" cy="78" r="9" fill="#fff"/><circle cx="108" cy="78" r="9" fill="#fff"/><path d="M130 48h22M136 58h16M140 68h12" stroke="#38bdf8"/></g>;
    case "dumbbell-weight": return <g {...common}><path d="M46 60h68" strokeWidth="7"/><rect x="31" y="40" width="16" height="40" rx="4" fill="#cbd5e1"/><rect x="113" y="40" width="16" height="40" rx="4" fill="#cbd5e1"/><path d="M61 33c8-10 30-10 38 0" stroke="#f59e0b"/></g>;
    case "rocket-thrust": return <g {...common}><path d="M80 18c18 17 22 47 0 65-22-18-18-48 0-65Z" fill="#e0e7ff"/><circle cx="80" cy="45" r="8" fill="#93c5fd"/><path d="m67 69-13 14 16-3M93 69l13 14-16-3"/><path d="m72 83 8 26 8-26" fill="#fb923c" stroke="#f97316"/></g>;
    case "sail-wind": return <g {...common}><path d="M33 88h92l-16 16H51Z" fill="#bae6fd"/><path d="M77 88V25"/><path d="M79 29v48h43Z" fill="#fef3c7"/><path d="M22 35h25M15 47h35M25 59h20" stroke="#38bdf8"/></g>;
    case "box-rope": return <g {...common}><rect x="58" y="42" width="55" height="48" rx="5" fill="#fed7aa"/><path d="M58 57 28 36M28 36h-15" stroke="#f97316"/><path d="M42 96h82" stroke="#94a3b8"/></g>;
    case "parachute-gravity": return <g {...common}><path d="M39 43a41 30 0 0 1 82 0Z" fill="#ddd6fe"/><path d="M39 43 70 76M121 43 90 76M80 43v33"/><circle cx="80" cy="83" r="7" fill="#fde68a"/><path d="M80 90v15M80 96l-10 9M80 96l10 9"/></g>;
    case "spring-force": return <g {...common}><path d="M28 31v60M28 42l-12 12M28 60 16 72M28 77 16 89"/><path d="M28 61h12l7-18 13 36 13-36 13 36 13-18h13" stroke="#7c3aed"/><rect x="121" y="44" width="27" height="34" rx="4" fill="#cbd5e1"/></g>;
    case "ball-gravity": return <g {...common}><circle cx="80" cy="47" r="23" fill="#bfdbfe"/><path d="M60 47h40M80 27v40"/><path d="M45 100h70" stroke="#94a3b8"/><path d="M113 35c10 10 12 24 6 36" stroke="#a78bfa" strokeDasharray="4 4"/></g>;
    case "magnet-attraction": return <g {...common}><path d="M42 38v36c0 28 43 28 43 0V38H68v36c0 8-9 8-9 0V38Z" fill="#fecaca"/><path d="M42 38h17M68 38h17" stroke="#2563eb"/><path d="M111 48v29M101 58h20M103 77h16"/><path d="M90 61h10" stroke="#f59e0b" strokeDasharray="3 3"/></g>;
    case "suitcase-lift": return <g {...common}><rect x="48" y="48" width="64" height="49" rx="7" fill="#fdba74"/><path d="M67 48V36h26v12M80 58v29"/><path d="M54 30c8-8 44-8 52 0" stroke="#38bdf8"/></g>;
    case "bike-brake": return <g {...common}><circle cx="48" cy="78" r="24"/><circle cx="116" cy="78" r="24"/><path d="m48 78 28-35 20 35H48l28-35 40 35M76 43h19M95 43l10-12"/><path d="M20 35h24M15 46h22" stroke="#f97316"/></g>;
    case "door-pull": return <g {...common}><path d="M48 21h63v84H48Z" fill="#fef3c7"/><circle cx="98" cy="64" r="4" fill="#f59e0b"/><path d="M111 21 128 33v72l-17 0"/><path d="M98 64h32" stroke="#f97316"/></g>;
  }
}

export function PhysicsForceSceneSvg({ scene, direction, className = "w-full h-auto" }: { scene: ForceSceneId; direction: ForceDirection; className?: string }) {
  return <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={`${scene}: ${direction}`}>

    <SceneArtwork scene={scene} />
    <path d={ARROWS[direction]} fill="none" stroke="#7c3aed" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

function Lamp({ x, y }: { x: number; y: number }) { return <g><circle cx={x} cy={y} r="10" fill="#fef3c7" stroke="#334155" strokeWidth="2"/><path d={`M${x-6} ${y-6}l12 12m0-12-12 12`} stroke="#f59e0b" strokeWidth="2"/></g>; }
function Battery({ x, y }: { x: number; y: number }) { return <g stroke="#334155" strokeWidth="2.4"><path d={`M${x} ${y-11}v22M${x+8} ${y-7}v14`}/><text x={x-13} y={y-14} fill="#334155" stroke="none" fontSize="10">+</text><text x={x+5} y={y-14} fill="#334155" stroke="none" fontSize="10">−</text></g>; }

export function CircuitDiagramSvg({ kind, className = "w-full h-auto" }: { kind: CircuitDiagramId; className?: string }) {
  const open = kind === "open";
  return <svg viewBox="0 0 180 110" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={`circuit: ${kind}`}>

    <g fill="none" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 30H78"/><path d={open ? "M78 30l20-14M104 30h38v52H38" : "M78 30h64v52H38"}/><path d="M38 30v18M38 66v16"/>
      {kind === "series" && <><path d="M98 30h44"/><Lamp x={88} y={30}/><Lamp x={125} y={82}/></>}
      {kind === "parallel" && <><path d="M92 30v52M126 30v52"/><Lamp x={92} y={56}/><Lamp x={126} y={56}/></>}
      {(kind === "closed" || kind === "open") && <Lamp x={124} y={82}/>}
    </g>
    <Battery x={34} y={57}/>
  </svg>;
}
