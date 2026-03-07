"use client";
type FurnitureProps = { x: number; y: number };

export default function BedBasic({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="sFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574"/>
          <stop offset="100%" stopColor="#A0724A"/>
        </linearGradient>
        <linearGradient id="sMat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8F4EC"/>
          <stop offset="100%" stopColor="#EDE4D0"/>
        </linearGradient>
        <linearGradient id="sDuvet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8C4E8"/>
          <stop offset="100%" stopColor="#7096C8"/>
        </linearGradient>
        <filter id="sSh">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.2)"/>
        </filter>
      </defs>

      <rect x={-26} y={-50} width={52} height={100} rx={4} fill="url(#sFrame)" filter="url(#sSh)"/>
      <rect x={-26} y={-50} width={52} height={12} rx={4} fill="#C08040"/>
      <rect x={-22} y={-48} width={44} height={8} rx={3} fill="rgba(255,255,255,0.12)"/>
      <rect x={-22} y={-36} width={44} height={82} rx={3} fill="url(#sMat)"/>

      {/* Pillow */}
      <rect x={-18} y={-33} width={36} height={20} rx={6} fill="white"/>
      <rect x={-18} y={-33} width={36} height={20} rx={6} fill="none" stroke="rgba(200,185,160,0.6)" strokeWidth={0.8}/>
      <rect x={-15} y={-30} width={30} height={3} rx={2} fill="rgba(255,255,255,0.8)"/>
      <ellipse cx={0} cy={-23} rx={4} ry={4} fill="none" stroke="rgba(200,185,160,0.4)" strokeWidth={0.6}/>

      {/* Duvet */}
      <rect x={-20} y={-10} width={40} height={50} rx={5} fill="url(#sDuvet)"/>
      <rect x={-20} y={-10} width={40} height={8} rx={4} fill="rgba(255,255,255,0.2)"/>
      <line x1={-7} y1={-10} x2={-7} y2={40} stroke="rgba(255,255,255,0.2)" strokeWidth={0.6}/>
      <line x1={7} y1={-10} x2={7} y2={40} stroke="rgba(255,255,255,0.2)" strokeWidth={0.6}/>
      <line x1={-20} y1={5} x2={20} y2={5} stroke="rgba(255,255,255,0.2)" strokeWidth={0.6}/>
      <line x1={-20} y1={20} x2={20} y2={20} stroke="rgba(255,255,255,0.2)" strokeWidth={0.6}/>
      <line x1={-20} y1={35} x2={20} y2={35} stroke="rgba(255,255,255,0.2)" strokeWidth={0.6}/>
      <rect x={-20} y={-10} width={40} height={50} rx={5} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={0.8}/>

      {/* Footboard */}
      <rect x={-26} y={42} width={52} height={8} rx={3} fill="#C08040"/>
    </g>
  );
}
