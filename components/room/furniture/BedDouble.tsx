"use client";
type FurnitureProps = { x: number; y: number };

export default function BedDouble({ x, y }: FurnitureProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="dFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574"/>
          <stop offset="100%" stopColor="#A0724A"/>
        </linearGradient>
        <linearGradient id="dMat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8F4EC"/>
          <stop offset="100%" stopColor="#EDE4D0"/>
        </linearGradient>
        <linearGradient id="dDuvet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8C4E8"/>
          <stop offset="100%" stopColor="#7096C8"/>
        </linearGradient>
        <filter id="dSh">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.2)"/>
        </filter>
      </defs>

      <rect x={-44} y={-50} width={88} height={100} rx={4} fill="url(#dFrame)" filter="url(#dSh)"/>
      <rect x={-44} y={-50} width={88} height={12} rx={4} fill="#C08040"/>
      <rect x={-38} y={-48} width={36} height={8} rx={3} fill="rgba(255,255,255,0.1)"/>
      <rect x={2} y={-48} width={36} height={8} rx={3} fill="rgba(255,255,255,0.1)"/>
      <rect x={-40} y={-36} width={80} height={82} rx={3} fill="url(#dMat)"/>
      <line x1={0} y1={-36} x2={0} y2={46} stroke="rgba(180,160,120,0.2)" strokeWidth={0.8} strokeDasharray="3,2"/>

      {/* Pillow left */}
      <rect x={-38} y={-33} width={34} height={20} rx={6} fill="white"/>
      <rect x={-38} y={-33} width={34} height={20} rx={6} fill="none" stroke="rgba(200,185,160,0.6)" strokeWidth={0.8}/>
      <rect x={-35} y={-30} width={28} height={3} rx={2} fill="rgba(255,255,255,0.8)"/>
      <ellipse cx={-21} cy={-23} rx={4} ry={4} fill="none" stroke="rgba(200,185,160,0.4)" strokeWidth={0.6}/>

      {/* Pillow right */}
      <rect x={4} y={-33} width={34} height={20} rx={6} fill="white"/>
      <rect x={4} y={-33} width={34} height={20} rx={6} fill="none" stroke="rgba(200,185,160,0.6)" strokeWidth={0.8}/>
      <rect x={7} y={-30} width={28} height={3} rx={2} fill="rgba(255,255,255,0.8)"/>
      <ellipse cx={21} cy={-23} rx={4} ry={4} fill="none" stroke="rgba(200,185,160,0.4)" strokeWidth={0.6}/>

      {/* Duvet */}
      <rect x={-38} y={-10} width={76} height={52} rx={5} fill="url(#dDuvet)"/>
      <rect x={-38} y={-10} width={76} height={8} rx={4} fill="rgba(255,255,255,0.2)"/>
      <line x1={-25} y1={-10} x2={-25} y2={42} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <line x1={-12} y1={-10} x2={-12} y2={42} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <line x1={0} y1={-10} x2={0} y2={42} stroke="rgba(255,255,255,0.25)" strokeWidth={0.8}/>
      <line x1={12} y1={-10} x2={12} y2={42} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <line x1={25} y1={-10} x2={25} y2={42} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <line x1={-38} y1={5} x2={38} y2={5} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <line x1={-38} y1={20} x2={38} y2={20} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <line x1={-38} y1={35} x2={38} y2={35} stroke="rgba(255,255,255,0.18)" strokeWidth={0.6}/>
      <rect x={-38} y={-10} width={76} height={52} rx={5} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={0.8}/>

      {/* Footboard */}
      <rect x={-44} y={44} width={88} height={8} rx={3} fill="#C08040"/>
    </g>
  );
}
