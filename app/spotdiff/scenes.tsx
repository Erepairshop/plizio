"use client";

export interface Hotspot { id: number; cx: number; cy: number; r: number; }

export interface SceneSVGProps {
  isRight: boolean;
  found: number[];
  hotspots: Hotspot[];
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

export interface SceneDef {
  id: string;
  title: string;
  hotspots: Hotspot[];
  SVG: React.FC<SceneSVGProps>;
}

const S = { display: "block" as const, width: "100%", height: "auto" };

function FO({ f, h }: { f: number[]; h: Hotspot[] }) {
  return (
    <>
      {h.map((hs) =>
        f.includes(hs.id) ? (
          <circle key={hs.id} cx={hs.cx} cy={hs.cy} r={hs.r} fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.85" />
        ) : null
      )}
    </>
  );
}

// ─── SCENE 1: PARK ───────────────────────────────────────────────────────────
function ParkSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="130" fill="#4A90D9" />
      <rect y="130" width="320" height="70" fill="#5CAD4A" />
      <rect x="135" y="130" width="50" height="70" fill="#D4B483" />
      {/* Cloud: left=2 ellipses, right=1 */}
      <ellipse cx="88" cy="28" rx="42" ry="20" fill="white" />
      {!R && <ellipse cx="110" cy="16" rx="28" ry="17" fill="white" />}
      {/* Sun: left=circle+rays, right=circle only */}
      <circle cx="272" cy="30" r="20" fill="#FFDC00" />
      {!R && [0,45,90,135,180,225,270,315].map((a, i) => {
        const rad = (a * Math.PI) / 180;
        return <line key={i} x1={272+24*Math.cos(rad)} y1={30+24*Math.sin(rad)} x2={272+36*Math.cos(rad)} y2={30+36*Math.sin(rad)} stroke="#FFDC00" strokeWidth="2.5" strokeLinecap="round" />;
      })}
      {/* Left tree */}
      <rect x="55" y="105" width="14" height="40" fill="#7B5E3A" rx="2" />
      <circle cx="62" cy="84" r="34" fill={R ? "#8B1A1A" : "#2E8B57"} />
      {/* Right tree: missing on right */}
      <rect x="238" y="108" width="12" height="37" fill="#7B5E3A" rx="2" />
      {!R && <circle cx="244" cy="86" r="30" fill="#2E8B57" />}
      {/* Bench */}
      <rect x="140" y="143" width="80" height="9" fill="#A0785A" rx="3" />
      <rect x="148" y="152" width="6" height="22" fill="#7B5E3A" />
      <rect x="207" y="152" width="6" height="22" fill="#7B5E3A" />
      {/* Flowers */}
      <rect x="223" y="155" width="3" height="18" fill="#4CAF50" />
      <circle cx="224" cy="150" r="8" fill="#FF4081" />
      <rect x="241" y="155" width="3" height="18" fill="#4CAF50" />
      <circle cx="242" cy="150" r="8" fill="#FFDC00" />
      <rect x="259" y="155" width="3" height="18" fill="#4CAF50" />
      <circle cx="260" cy="150" r="8" fill={R ? "#FF4081" : "#B44DFF"} />
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 2: VÍZ ALATTI VILÁG ───────────────────────────────────────────────
function FishSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="200" fill="#003D6B" />
      <path d="M0,175 Q80,160 160,170 Q240,180 320,165 L320,200 L0,200 Z" fill="#C2A862" />
      <path d="M40,175 Q30,150 45,130 Q55,110 40,90" fill="none" stroke="#2E8B57" strokeWidth="5" strokeLinecap="round" />
      <path d="M280,175 Q290,150 275,130 Q265,110 280,90" fill="none" stroke="#2E8B57" strokeWidth="5" strokeLinecap="round" />
      {/* Big fish color */}
      <ellipse cx="105" cy="95" rx="38" ry="22" fill={R ? "#FFD700" : "#FF6B1A"} />
      <polygon points="65,83 42,68 42,112" fill={R ? "#FFD700" : "#FF6B1A"} />
      <circle cx="128" cy="90" r="5" fill="white" /><circle cx="129" cy="90" r="3" fill="#333" />
      {/* Small blue fish: missing on right */}
      {!R && <>
        <ellipse cx="240" cy="55" rx="18" ry="10" fill="#4FC3F7" />
        <polygon points="222,48 206,42 206,62" fill="#4FC3F7" />
        <circle cx="250" cy="52" r="3" fill="white" /><circle cx="251" cy="52" r="1.5" fill="#222" />
      </>}
      {/* Coral: missing on right */}
      {!R && <path d="M260,165 L260,140 M260,145 Q270,130 278,128 M260,150 Q250,135 243,132" stroke="#FF80AB" strokeWidth="4" strokeLinecap="round" fill="none" />}
      {/* Bubbles: left=5, right=3 */}
      <circle cx="85" cy="55" r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <circle cx="100" cy="35" r="4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <circle cx="115" cy="50" r="3" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      {!R && <>
        <circle cx="70" cy="40" r="4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <circle cx="128" cy="38" r="3.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      </>}
      {/* Starfish color */}
      <polygon points="185,148 188,162 200,158 192,168 185,165 178,168 170,158 182,162" fill={R ? "#9C27B0" : "#FF7043"} />
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 3: ÉJSZAKAI VÁROS ─────────────────────────────────────────────────
function CitySVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="200" fill="#0A0A2E" />
      <rect y="175" width="320" height="25" fill="#2C2C2C" />
      <rect y="165" width="320" height="12" fill="#3A3A3A" />
      {/* Buildings */}
      <rect x="10" y="70" width="80" height="105" fill="#1A1A3E" />
      <rect x="120" y="90" width="80" height="85" fill="#1A1A3E" />
      <rect x="230" y="50" width="70" height="125" fill="#1A1A3E" />
      {/* Windows – always dark */}
      {[35,55,75].map(y => [20,50].map(x => <rect key={`${x}${y}`} x={x} y={y} width="14" height="10" rx="1" fill="#0D0D28" />))}
      {/* Lit window: left=yellow, right=dark */}
      <rect x="20" y="78" width="14" height="10" rx="1" fill={R ? "#0D0D28" : "#FFD700"} />
      {[100,115].map(y => [130,165].map(x => <rect key={`${x}${y}`} x={x} y={y} width="14" height="10" rx="1" fill="#0D0D28" />))}
      {[65,85,105,125].map(y => [240,270].map(x => <rect key={`${x}${y}`} x={x} y={y} width="14" height="10" rx="1" fill="#0D0D28" />))}
      {/* Streetlamp */}
      <rect x="161" y="90" width="4" height="80" fill="#888" />
      <path d="M163,90 Q163,75 178,75" fill="none" stroke="#888" strokeWidth="3" />
      <circle cx="178" cy="75" r="5" fill={R ? "#FF2D78" : "#FFD700"} />
      {/* Moon: right=crescent */}
      <circle cx="275" cy="25" r="18" fill="#FFFDE7" />
      {R && <circle cx="282" cy="20" r="16" fill="#0A0A2E" />}
      {/* Stars: left=5, right=3 */}
      <circle cx="60" cy="15" r="2" fill="white" />
      <circle cx="170" cy="10" r="2" fill="white" />
      <circle cx="220" cy="20" r="2" fill="white" />
      {!R && <><circle cx="110" cy="8" r="2" fill="white" /><circle cx="200" cy="5" r="1.5" fill="white" /></>}
      {/* Car color */}
      <rect x="48" y="162" width="70" height="22" rx="5" fill={R ? "#00D4FF" : "#FF2D78"} />
      <rect x="58" y="152" width="50" height="15" rx="5" fill={R ? "#00D4FF" : "#FF2D78"} />
      <circle cx="63" cy="185" r="8" fill="#111" /><circle cx="108" cy="185" r="8" fill="#111" />
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 28: KONYHA ────────────────────────────────────────────────────────
function KitchenSVG2({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="wallK2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#E0D8CC" />
        </linearGradient>
        <linearGradient id="counterK2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        <linearGradient id="cabinetK2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8B890" />
          <stop offset="100%" stopColor="#A89870" />
        </linearGradient>
        <linearGradient id="floorK2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8C8A0" />
          <stop offset="100%" stopColor="#B8A880" />
        </linearGradient>
        <filter id="shadowK2">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softK2">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── FAL ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#wallK2)" />
      {/* Csempe minta a falon */}
      {[0,20,40,60,80,100].map(y =>
        [0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="19" height="19"
            fill="none" stroke="#DDD8CC" strokeWidth="0.5" />
        ))
      )}

      {/* ── PADLÓ ── */}
      <rect x="0" y="158" width="320" height="42" fill="url(#floorK2)" />
      {[0,32,64,96,128,160,192,224,256,288,320].map(x => (
        <line key={x} x1={x} y1="158" x2={x} y2="200"
          stroke="#A89060" strokeWidth="0.6" opacity="0.5" />
      ))}
      {[165,180,195].map(y => (
        <line key={y} x1="0" y1={y} x2="320" y2={y}
          stroke="#A89060" strokeWidth="0.4" opacity="0.3" />
      ))}

      {/* ── FELSŐ SZEKRÉNYEK ── */}
      {/* Bal felső szekrény */}
      <rect x="0" y="8" width="110" height="62" fill="url(#cabinetK2)"
        rx="2" filter="url(#shadowK2)" />
      <rect x="2" y="10" width="51" height="58" fill="#D4C49C" rx="1" />
      <rect x="55" y="10" width="53" height="58" fill="#D4C49C" rx="1" />
      <rect x="2" y="10" width="51" height="58" fill="none"
        stroke="#B8A880" strokeWidth="1" rx="1" />
      <rect x="55" y="10" width="53" height="58" fill="none"
        stroke="#B8A880" strokeWidth="1" rx="1" />
      {/* Fogantyúk */}
      <rect x="22" y="38" width="12" height="3" fill="#888" rx="1" />
      <rect x="73" y="38" width="12" height="3" fill="#888" rx="1" />

      {/* Jobb felső szekrény */}
      <rect x="210" y="8" width="110" height="62" fill="url(#cabinetK2)"
        rx="2" filter="url(#shadowK2)" />
      <rect x="212" y="10" width="51" height="58" fill="#D4C49C" rx="1" />
      <rect x="265" y="10" width="53" height="58" fill="#D4C49C" rx="1" />
      <rect x="212" y="10" width="51" height="58" fill="none"
        stroke="#B8A880" strokeWidth="1" rx="1" />
      <rect x="265" y="10" width="53" height="58" fill="none"
        stroke="#B8A880" strokeWidth="1" rx="1" />
      <rect x="232" y="38" width="12" height="3" fill="#888" rx="1" />
      <rect x="283" y="38" width="12" height="3" fill="#888" rx="1" />

      {/* ── ABLAK ── */}
      <rect x="118" y="10" width="84" height="60" fill="#88CCEE"
        rx="3" stroke="#C8B898" strokeWidth="2" filter="url(#shadowK2)" />
      <line x1="160" y1="10" x2="160" y2="70" stroke="#C8B898" strokeWidth="1.5" />
      <line x1="118" y1="40" x2="202" y2="40" stroke="#C8B898" strokeWidth="1.5" />
      {/* Ablak fény */}
      <rect x="120" y="12" width="38" height="26" fill="#AAD8EE" opacity="0.5" />
      <rect x="162" y="12" width="38" height="26" fill="#AAD8EE" opacity="0.4" />
      {/* Kilátás – madarak R=true esetén 3, R=false 2 (NEHÉZ) */}
      <path d="M 128 28 Q 132 24 136 28 Q 140 24 144 28"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 168 22 Q 172 18 176 22 Q 180 18 184 22"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      {R && (
        <path d="M 148 35 Q 152 31 156 35 Q 160 31 164 35"
          fill="none" stroke="#33344488" strokeWidth="1.2" />
      )}
      {/* Függöny */}
      <path d="M 118 10 Q 126 22 123 38 Q 121 52 118 70"
        fill="#E8D0B0" opacity="0.75" />
      <path d="M 202 10 Q 194 22 197 38 Q 199 52 202 70"
        fill="#E8D0B0" opacity="0.75" />

      {/* ── PULT ── */}
      <rect x="0" y="108" width="320" height="10" fill="url(#counterK2)"
        filter="url(#shadowK2)" />
      <rect x="0" y="108" width="320" height="3" fill="#E0E0E0" />
      <rect x="0" y="115" width="320" height="3" fill="#888" />

      {/* ── ALSÓ SZEKRÉNYEK ── */}
      <rect x="0" y="118" width="140" height="42" fill="url(#cabinetK2)"
        filter="url(#shadowK2)" />
      {[2,48,94].map(x => (
        <g key={x}>
          <rect x={x} y="120" width="42" height="38" fill="#D4C49C" rx="1" />
          <rect x={x} y="120" width="42" height="38" fill="none"
            stroke="#B8A880" strokeWidth="1" rx="1" />
          <rect x={x+14} y="138" width="14" height="3" fill="#888" rx="1" />
        </g>
      ))}

      <rect x="180" y="118" width="140" height="42" fill="url(#cabinetK2)"
        filter="url(#shadowK2)" />
      {[182,228,274].map(x => (
        <g key={x}>
          <rect x={x} y="120" width="42" height="38" fill="#D4C49C" rx="1" />
          <rect x={x} y="120" width="42" height="38" fill="none"
            stroke="#B8A880" strokeWidth="1" rx="1" />
          <rect x={x+14} y="138" width="14" height="3" fill="#888" rx="1" />
        </g>
      ))}

      {/* ── MOSOGATÓ ── */}
      <rect x="142" y="100" width="36" height="18" fill="#AAA"
        rx="3" filter="url(#shadowK2)" />
      <rect x="144" y="102" width="32" height="14" fill="#999" rx="2" />
      <rect x="146" y="104" width="28" height="10" fill="#888" rx="1" />
      {/* Csap */}
      <rect x="156" y="95" width="8" height="8" fill="#CCC" rx="2" />
      <ellipse cx="160" cy="94" rx="5" ry="2" fill="#DDD" />
      <ellipse cx="160" cy="93" rx="3" ry="1.5" fill="#EEE" />
      {/* Vízsugár */}
      <path d="M 160 95 Q 161 100 160 105"
        fill="none" stroke="#88BBDD" strokeWidth="1.5" opacity="0.7" />

      {/* ── TŰZHELY ── */}
      <rect x="0" y="75" width="110" height="35" fill="#555"
        rx="2" filter="url(#shadowK2)" />
      <rect x="2" y="77" width="106" height="31" fill="#444" rx="1" />
      {/* Főzőlapok */}
      {[[22,88],[55,88],[88,88],[38,95],[72,95]].map(([cx,cy],i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx="14" ry="4" fill="#333" />
          <ellipse cx={cx} cy={cy} rx={i < 3 ? "12" : "10"}
            ry={i < 3 ? "3.5" : "3"} fill="#222" />
          {/* Láng – R=true esetén más főzőlap ég (KÖZEPES) */}
          {((R && i === 1) || (!R && i === 0)) && (
            <>
              <ellipse cx={cx} cy={cy-2} rx="5" ry="3" fill="#FF6600" opacity="0.8" />
              <ellipse cx={cx} cy={cy-3} rx="3" ry="2" fill="#FFD700" opacity="0.7" />
              <ellipse cx={cx} cy={cy-4} rx="1.5" ry="1.5" fill="#FFEEAA" opacity="0.6" />
            </>
          )}
        </g>
      ))}
      {/* Sütő ajtaja */}
      <rect x="4" y="110" width="102" height="46" fill="#444"
        rx="2" filter="url(#shadowK2)" />
      <rect x="6" y="112" width="98" height="42" fill="#555" rx="1" />
      <rect x="8" y="114" width="94" height="38" fill="#333" rx="1" />
      {/* Sütő ablaka */}
      <rect x="15" y="118" width="80" height="28" fill="#222" rx="2"
        stroke="#666" strokeWidth="1" />
      <rect x="17" y="120" width="76" height="24" fill="#1A1A1A" rx="1" />
      {/* Sütő fogantyú */}
      <rect x="28" y="148" width="54" height="4" fill="#888" rx="2" />

      {/* ── HŰTŐ ── */}
      <rect x="210" y="70" width="110" height="90" fill="#EEEEEE"
        rx="3" filter="url(#shadowK2)" />
      <rect x="212" y="72" width="106" height="86" fill="#F5F5F5" rx="2" />
      {/* Hűtő ajtók */}
      <rect x="214" y="74" width="102" height="42" fill="#EFEFEF"
        rx="1" stroke="#DDD" strokeWidth="0.8" />
      <rect x="214" y="118" width="102" height="38" fill="#EFEFEF"
        rx="1" stroke="#DDD" strokeWidth="0.8" />
      {/* Fogantyúk */}
      <rect x="306" y="88" width="4" height="14" fill="#AAA" rx="2" />
      <rect x="306" y="128" width="4" height="10" fill="#AAA" rx="2" />
      {/* Hűtő mágneses tábla */}
      <rect x="225" y="82" width="50" height="28" fill="white"
        rx="2" stroke="#CCC" strokeWidth="0.8" />
      {/* Bevásárlólista – R=true esetén 3 sor, R=false 4 (NEHÉZ) */}
      {[88,94,100,...(R ? [] : [106])].map(y => (
        <line key={y} x1="228" y1={y} x2="272" y2={y}
          stroke="#888" strokeWidth="1.2" opacity="0.7" />
      ))}
      <text x="250" y="88" textAnchor="middle" fontSize="5"
        fill="#444" fontWeight="bold">SHOPPING</text>
      {/* Mágnes */}
      <ellipse cx="226" cy="84" rx="4" ry="3" fill="#EE2222" opacity="0.8" />
      <ellipse cx="274" cy="84" rx="4" ry="3" fill="#2244EE" opacity="0.8" />

      {/* ── EDÉNYEK a pulton ── */}
      {/* Nagy fazék */}
      <ellipse cx="60" cy="105" rx="18" ry="5" fill="#888" />
      <rect x="42" y="85" width="36" height="20" fill="#999" rx="3" />
      <ellipse cx="60" cy="85" rx="18" ry="5" fill="#AAA" />
      <ellipse cx="60" cy="84" rx="14" ry="3.5" fill="#BBB" />
      {/* Fazék füle */}
      <path d="M 42 92 Q 36 92 36 98 Q 36 104 42 104"
        fill="none" stroke="#888" strokeWidth="2.5" />
      <path d="M 78 92 Q 84 92 84 98 Q 84 104 78 104"
        fill="none" stroke="#888" strokeWidth="2.5" />
      {/* Gőz */}
      <path d="M 54 82 Q 52 76 54 70" fill="none" stroke="#CCC" strokeWidth="1.5" opacity="0.6" />
      <path d="M 60 82 Q 58 74 60 68" fill="none" stroke="#CCC" strokeWidth="1.5" opacity="0.6" />
      <path d="M 66 82 Q 68 76 66 70" fill="none" stroke="#CCC" strokeWidth="1.5" opacity="0.6" />

      {/* Kisebb lábas */}
      <ellipse cx="165" cy="107" rx="12" ry="3.5" fill="#777" />
      <rect x="153" y="94" width="24" height="13" fill="#888" rx="2" />
      <ellipse cx="165" cy="94" rx="12" ry="3.5" fill="#999" />
      <line x1="177" y1="100" x2="190" y2="98" stroke="#777" strokeWidth="2.5"
        strokeLinecap="round" />

      {/* Kenyér – R=true esetén más szín (KÖZEPES) */}
      <ellipse cx="248" cy="106" rx="18" ry="8" fill={R ? "#D4824A" : "#C87A3A"}
        filter="url(#shadowK2)" />
      <ellipse cx="248" cy="103" rx="15" ry="6" fill={R ? "#E89A5A" : "#D8903A"} />
      {[240,248,256].map(x => (
        <path key={x}
          d={`M ${x} 102 Q ${x+2} 98 ${x+4} 102`}
          fill="none" stroke={R ? "#C07030" : "#B06020"} strokeWidth="0.8" />
      ))}

      {/* ── FALI ÓRA ── */}
      <circle cx="160" cy="85" r="14" fill="#F5F5F0"
        stroke="#888" strokeWidth="1.2" filter="url(#shadowK2)" />
      <circle cx="160" cy="85" r="12" fill="#FAFAF5" />
      <circle cx="160" cy="85" r="1.5" fill="#333" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(angle => (
        <line key={angle}
          x1={160 + Math.cos(angle * Math.PI / 180) * 9}
          y1={85 + Math.sin(angle * Math.PI / 180) * 9}
          x2={160 + Math.cos(angle * Math.PI / 180) * 11}
          y2={85 + Math.sin(angle * Math.PI / 180) * 11}
          stroke="#888" strokeWidth={angle % 90 === 0 ? "1.5" : "0.8"} />
      ))}
      {/* Óra mutatók – R=true esetén más időpont (KÖZEPES) */}
      <line x1="160" y1="85"
        x2={160 + Math.cos((R ? -60 : -90) * Math.PI / 180) * 7}
        y2={85 + Math.sin((R ? -60 : -90) * Math.PI / 180) * 7}
        stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="160" y1="85"
        x2={160 + Math.cos((R ? 30 : 0) * Math.PI / 180) * 10}
        y2={85 + Math.sin((R ? 30 : 0) * Math.PI / 180) * 10}
        stroke="#222" strokeWidth="1.2" strokeLinecap="round" />

      {/* ── VIRÁGCSERÉP az ablakon ── */}
      <rect x="126" y="63" width="10" height="7" fill="#CC4422" rx="1" />
      <ellipse cx="131" cy="63" rx="6" ry="2.5" fill="#AA3311" />
      <rect x="128" y="57" width="6" height="7" fill="#3A8A18" rx="1" />
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle}
          cx={131 + Math.cos(angle * Math.PI / 180) * 5}
          cy={55 + Math.sin(angle * Math.PI / 180) * 4}
          rx="3" ry="2"
          fill="#FF6688"
          transform={`rotate(${angle} 131 55)`}
          opacity="0.9" />
      ))}
      <circle cx="131" cy="55" r="2" fill="#FFE566" />

      {/* Árnyékok */}
      <ellipse cx="60" cy="108" rx="18" ry="2.5" fill="#00000022" />
      <ellipse cx="165" cy="109" rx="12" ry="2" fill="#00000022" />
      <ellipse cx="248" cy="112" rx="18" ry="2.5" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 5: STRAND ─────────────────────────────────────────────────────────
function BeachSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="120" fill="#87CEEB" />
      <rect y="110" width="320" height="50" fill="#0099CC" opacity="0.8" />
      <rect y="150" width="320" height="50" fill="#F4D03F" />
      {/* Palm tree */}
      <path d="M40,200 Q50,160 45,120" fill="none" stroke="#8B5E3C" strokeWidth="8" strokeLinecap="round" />
      <path d="M45,120 Q20,100 10,90" fill="none" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />
      <path d="M45,120 Q70,100 80,85" fill="none" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />
      <path d="M45,120 Q45,95 50,78" fill="none" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />
      {!R && <path d="M45,120 Q22,112 14,108" fill="none" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />}
      {/* Umbrella */}
      <rect x="158" y="50" width="4" height="100" fill="#8B5E3C" />
      <path d="M80,58 Q160,25 160,58 Z" fill={R ? "#4FC3F7" : "#FF6B6B"} />
      {/* Sun: left=rays, right=circle only */}
      <circle cx="240" cy="30" r="22" fill="#FFD700" />
      {!R && [0,45,90,135,180,225,270,315].map((a, i) => {
        const rad = (a * Math.PI) / 180;
        return <line key={i} x1={240+26*Math.cos(rad)} y1={30+26*Math.sin(rad)} x2={240+38*Math.cos(rad)} y2={30+38*Math.sin(rad)} stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />;
      })}
      {/* Seagull: missing on right */}
      {!R && <>
        <path d="M258,75 Q265,68 272,75" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" />
        <path d="M272,75 Q279,68 286,75" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      </>}
      {/* Crab color */}
      <ellipse cx="220" cy="158" rx="15" ry="10" fill={R ? "#FF8F00" : "#E53935"} />
      <path d="M205,158 Q195,150 192,155" fill="none" stroke={R ? "#FF8F00" : "#E53935"} strokeWidth="3" strokeLinecap="round" />
      <path d="M235,158 Q245,150 248,155" fill="none" stroke={R ? "#FF8F00" : "#E53935"} strokeWidth="3" strokeLinecap="round" />
      <circle cx="214" cy="151" r="3" fill="white" /><circle cx="226" cy="151" r="3" fill="white" />
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 6: ŰR ─────────────────────────────────────────────────────────────
function SpaceSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="200" fill="#050520" />
      {/* Background stars */}
      {[[20,15],[50,40],[80,10],[140,30],[180,18],[250,35],[300,12],[310,50],[30,80],[90,60]].map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.5)" />
      )}
      {/* Planet */}
      <circle cx="240" cy="70" r="32" fill="#E8A87C" />
      <ellipse cx="240" cy="60" rx="14" ry="8" fill="#C4845A" opacity="0.5" />
      <ellipse cx="240" cy="70" rx="50" ry="15" fill="none" stroke={R ? "#00D4FF" : "#FFD700"} strokeWidth="4" opacity="0.7" />
      {/* Rocket */}
      <rect x="88" y="60" width="24" height="50" rx="8" fill={R ? "#FF5252" : "white"} />
      <polygon points="100,50 88,70 112,70" fill="#FF5252" />
      <circle cx="100" cy="85" r="7" fill="#87CEEB" />
      <path d="M92,110 Q100,125 108,110" fill="none" stroke="#FF6B1A" strokeWidth="3" />
      {/* Stars: left=6, right=4 */}
      <circle cx="60" cy="15" r="2.5" fill="white" />
      <circle cx="130" cy="8" r="2" fill="white" />
      <circle cx="190" cy="12" r="2.5" fill="white" />
      <circle cx="220" cy="25" r="2" fill="white" />
      {!R && <><circle cx="30" cy="25" r="2" fill="white" /><circle cx="300" cy="15" r="2.5" fill="white" /></>}
      {/* Alien */}
      <ellipse cx="60" cy="150" rx="18" ry="14" fill={R ? "#E91E63" : "#4CAF50"} />
      <ellipse cx="60" cy="138" rx="14" ry="12" fill={R ? "#E91E63" : "#4CAF50"} />
      <ellipse cx="54" cy="135" rx="4" ry="5" fill="black" /><ellipse cx="66" cy="135" rx="4" ry="5" fill="black" />
      <line x1="55" y1="127" x2="50" y2="117" stroke={R ? "#E91E63" : "#4CAF50"} strokeWidth="2" />
      <line x1="65" y1="127" x2="70" y2="117" stroke={R ? "#E91E63" : "#4CAF50"} strokeWidth="2" />
      <circle cx="50" cy="115" r="3" fill={R ? "#E91E63" : "#4CAF50"} /><circle cx="70" cy="115" r="3" fill={R ? "#E91E63" : "#4CAF50"} />
      {/* Moon: right=crescent */}
      <circle cx="280" cy="160" r="16" fill="#FFFDE7" />
      {R && <circle cx="287" cy="155" r="14" fill="#050520" />}
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 7: FARM ───────────────────────────────────────────────────────────
function FarmSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="150" fill="#87CEEB" />
      <rect y="150" width="320" height="50" fill="#4CAF50" />
      {/* Cloud: left=2, right=1 */}
      <ellipse cx="60" cy="30" rx="30" ry="12" fill="white" opacity="0.9" />
      {!R && <ellipse cx="60" cy="20" rx="18" ry="10" fill="white" opacity="0.9" />}
      <ellipse cx="200" cy="25" rx="28" ry="11" fill="white" opacity="0.9" />
      {/* Barn */}
      <rect x="150" y="80" width="100" height="90" fill="#CC3300" />
      <polygon points="145,80 200,40 255,80" fill="#8B1A1A" />
      {/* Barn door: missing on right */}
      {!R && <rect x="185" y="130" width="30" height="40" fill="#8B5E3C" />}
      {/* Fence: left=6 posts, right=4 */}
      {[10,35,60,85].map(x => <rect key={x} x={x} y="155" width="6" height="30" fill="#D4B896" />)}
      {!R && <><rect x="110" y="155" width="6" height="30" fill="#D4B896" /><rect x="135" y="155" width="6" height="30" fill="#D4B896" /></>}
      <rect x="10" y="162" width="131" height="4" fill="#D4B896" />
      <rect x="10" y="174" width="131" height="4" fill="#D4B896" />
      {/* Cow */}
      <ellipse cx="100" cy="130" rx="28" ry="18" fill="white" stroke="#333" strokeWidth="1" />
      <ellipse cx="122" cy="122" rx="12" ry="10" fill="white" stroke="#333" strokeWidth="1" />
      {!R && <><ellipse cx="92" cy="125" rx="8" ry="6" fill="#333" /><ellipse cx="108" cy="135" rx="7" ry="5" fill="#333" /></>}
      <rect x="80" y="145" width="6" height="18" fill="#ddd" /><rect x="90" y="145" width="6" height="18" fill="#ddd" />
      <rect x="106" y="145" width="6" height="18" fill="#ddd" /><rect x="116" y="145" width="6" height="18" fill="#ddd" />
      {/* Sunflower: missing on right */}
      {!R && <>
        <rect x="258" y="148" width="4" height="22" fill="#4CAF50" />
        <circle cx="260" cy="138" r="12" fill="#FFD700" />
        <circle cx="260" cy="138" r="6" fill="#8B4513" />
      </>}
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 8: HÓ ─────────────────────────────────────────────────────────────
function SnowSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="200" fill="#B3D9F0" />
      <rect y="165" width="320" height="35" fill="white" />
      {/* Pine trees */}
      <polygon points="55,80 35,140 75,140" fill={R ? "#37474F" : "#1B5E20"} />
      <rect x="52" y="140" width="8" height="25" fill="#8B5E3C" />
      <polygon points="265,70 242,140 288,140" fill="#1B5E20" />
      <rect x="261" y="140" width="8" height="25" fill="#8B5E3C" />
      {/* Snowman */}
      <circle cx="160" cy="148" r="32" fill="white" stroke="#ccc" strokeWidth="1" />
      <circle cx="160" cy="102" r="22" fill="white" stroke="#ccc" strokeWidth="1" />
      <circle cx="160" cy="70" r="18" fill="white" stroke="#ccc" strokeWidth="1" />
      {/* Hat color */}
      <rect x="143" y="46" width="34" height="5" fill={R ? "#4CAF50" : "#333"} />
      <rect x="148" y="26" width="24" height="21" fill={R ? "#4CAF50" : "#333"} />
      {/* Scarf color */}
      <path d="M140,90 Q160,84 180,90 Q175,97 160,94 Q145,97 140,90 Z" fill={R ? "#2196F3" : "#FF5252"} />
      {/* Buttons: left=3, right=2 */}
      <circle cx="160" cy="110" r="4" fill="#555" />
      <circle cx="160" cy="122" r="4" fill="#555" />
      {!R && <circle cx="160" cy="134" r="4" fill="#555" />}
      {/* Eyes & nose */}
      <circle cx="153" cy="66" r="3" fill="#333" /><circle cx="167" cy="66" r="3" fill="#333" />
      <polygon points="160,70 175,73 160,76" fill="#FF6B1A" />
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 9: HALLOWEEN ───────────────────────────────────────────────────────
function HalloweenSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="200" fill="#1A0A2E" />
      <rect y="172" width="320" height="28" fill="#2A2010" />
      {/* Bare tree */}
      <rect x="45" y="75" width="10" height="100" fill="#333" />
      <path d="M50,100 Q30,80 15,75" fill="none" stroke="#333" strokeWidth="4" />
      <path d="M50,115 Q35,100 22,96" fill="none" stroke="#333" strokeWidth="3" />
      {!R && <path d="M50,88 Q68,68 82,62" fill="none" stroke="#333" strokeWidth="3" />}
      {/* Moon: right=crescent */}
      <circle cx="260" cy="25" r="20" fill="#FFFDE7" />
      {R && <circle cx="267" cy="20" r="18" fill="#1A0A2E" />}
      {/* Bats: left=4, right=2 */}
      <path d="M150,22 Q158,15 166,22" fill="none" stroke="#555" strokeWidth="2" />
      <path d="M166,22 Q174,15 182,22" fill="none" stroke="#555" strokeWidth="2" />
      <path d="M190,35 Q198,28 206,35" fill="none" stroke="#555" strokeWidth="2" />
      <path d="M206,35 Q214,28 222,35" fill="none" stroke="#555" strokeWidth="2" />
      {!R && <>
        <path d="M110,18 Q118,11 126,18" fill="none" stroke="#555" strokeWidth="2" />
        <path d="M126,18 Q134,11 142,18" fill="none" stroke="#555" strokeWidth="2" />
        <path d="M228,28 Q236,21 244,28" fill="none" stroke="#555" strokeWidth="2" />
        <path d="M244,28 Q252,21 260,28" fill="none" stroke="#555" strokeWidth="2" />
      </>}
      {/* Ghost color */}
      <path d="M215,95 Q215,105 230,110 Q245,115 245,100 Q245,80 230,78 Q215,80 215,95 Z" fill={R ? "#9C27B0" : "white"} />
      <path d="M215,108 Q220,115 225,108 Q230,115 235,108 Q240,115 245,108" fill={R ? "#9C27B0" : "white"} />
      <circle cx="224" cy="96" r="4" fill="#333" /><circle cx="236" cy="96" r="4" fill="#333" />
      {/* Pumpkin */}
      <ellipse cx="90" cy="140" rx="32" ry="28" fill="#FF6B1A" />
      <rect x="87" y="112" width="6" height="10" fill="#4CAF50" rx="2" />
      {R
        ? <><circle cx="78" cy="132" r="7" fill="#1A0A2E" /><circle cx="102" cy="132" r="7" fill="#1A0A2E" /></>
        : <><polygon points="72,124 82,114 92,124" fill="#1A0A2E" /><polygon points="88,124 98,114 108,124" fill="#1A0A2E" /></>
      }
      <path d="M78,148 Q90,158 102,148" fill="none" stroke="#1A0A2E" strokeWidth="2.5" />
      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 10: HEGY ──────────────────────────────────────────────────────────
function MountainSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="200" fill="#87CEEB" />
      {/* Clouds */}
      <ellipse cx="80" cy="35" rx="35" ry="14" fill="white" opacity="0.9" />
      <ellipse cx="80" cy="25" rx="20" ry="12" fill="white" opacity="0.9" />
      <ellipse cx="220" cy="28" rx="30" ry="12" fill="white" opacity="0.9" />
      {/* Mountains */}
      <polygon points="160,20 40,170 280,170" fill="#7B8B6F" />
      <polygon points="60,90 10,170 110,170" fill="#6B7B5F" />
      <polygon points="270,80 220,170 320,170" fill="#6B7B5F" />
      {/* Snow cap: left=large, right=small */}
      {R
        ? <polygon points="160,20 140,65 180,65" fill="white" />
        : <polygon points="160,20 118,85 202,85" fill="white" />
      }
      {/* Second peak: left=exists, right=missing */}
      {!R && <>
        <polygon points="220,50 200,90 240,90" fill="#7B8B6F" />
        <polygon points="220,50 210,74 230,74" fill="white" />
      </>}
      {/* Lake color */}
      <ellipse cx="120" cy="165" rx="50" ry="18" fill={R ? "#81C784" : "#4FC3F7"} opacity="0.85" />
      {/* Eagle: missing on right */}
      {!R && <>
        <path d="M255,58 Q265,51 275,58" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M275,58 Q285,51 295,58" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="275" cy="60" rx="6" ry="4" fill="#555" />
      </>}
      {/* Pine trees at base */}
      <polygon points="30,155 18,175 42,175" fill="#1B5E20" />
      <polygon points="55,148 43,170 67,170" fill="#1B5E20" />
      <polygon points="270,155 258,175 282,175" fill="#1B5E20" />
      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 11: ISKOLA (PROFI) ─────────────────────────────────────────────────
function SchoolSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        {/* Égbolt gradient */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A90D9" />
          <stop offset="100%" stopColor="#B8D9F0" />
        </linearGradient>
        {/* Fű gradient */}
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6DC96D" />
          <stop offset="100%" stopColor="#3A8C3A" />
        </linearGradient>
        {/* Épület fal gradient */}
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#DEC99A" />
        </linearGradient>
        {/* Tető gradient */}
        <linearGradient id="roofL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={R ? "#CC2222" : "#882222"} />
          <stop offset="100%" stopColor={R ? "#991111" : "#551111"} />
        </linearGradient>
        {/* Ablak üveg */}
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D0EFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#90CCF0" stopOpacity="0.7" />
        </linearGradient>
        {/* Fa lombozat */}
        <radialGradient id="tree1" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#7DCF5A" />
          <stop offset="100%" stopColor="#3A7A2A" />
        </radialGradient>
        <radialGradient id="tree2" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#5BBF40" />
          <stop offset="100%" stopColor="#2A6A1A" />
        </radialGradient>
        {/* Árnyék filter */}
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#00000033" />
        </filter>
        {/* Nap sugár filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="160" fill="url(#sky)" />

      {/* Felhők */}
      <g opacity="0.9">
        <ellipse cx="55" cy="30" rx="28" ry="14" fill="white" />
        <ellipse cx="40" cy="34" rx="18" ry="11" fill="white" />
        <ellipse cx="72" cy="34" rx="20" ry="11" fill="white" />
      </g>
      <g opacity="0.85">
        <ellipse cx="240" cy="22" rx="22" ry="11" fill="white" />
        <ellipse cx="228" cy="26" rx="14" ry="9" fill="white" />
        <ellipse cx="254" cy="26" rx="16" ry="9" fill="white" />
      </g>

      {/* Nap – R=true esetén eltolva/kisebb */}
      <circle cx={R ? "295" : "288"} cy="22" r={R ? 13 : 17}
        fill="#FFE033" filter="url(#glow)" opacity="0.95" />
      <circle cx={R ? "295" : "288"} cy="22" r={R ? 9 : 12} fill="#FFD700" />

      {/* ── FŰ ── */}
      <rect x="0" y="155" width="320" height="45" fill="url(#grass)" />
      {/* Fűszálak */}
      {[10,25,40,55,290,305,315].map(x => (
        <line key={x} x1={x} y1="155" x2={x-3} y2="148" stroke="#4CAF50" strokeWidth="1.5" />
      ))}

      {/* Járda */}
      <rect x="118" y="153" width="84" height="12" fill="#CED0D4" />
      <rect x="118" y="153" width="84" height="2" fill="#B0B3B8" />
      {/* Járda fugák */}
      {[139,160,181].map(x => (
        <line key={x} x1={x} y1="153" x2={x} y2="165" stroke="#B0B3B8" strokeWidth="0.8" />
      ))}

      {/* ── ÉPÜLET ÁRNYÉK ── */}
      <ellipse cx="162" cy="158" rx="95" ry="6" fill="#00000022" />

      {/* ── ÉPÜLET FAL ── */}
      <rect x="58" y="62" width="204" height="98" fill="url(#wall)" filter="url(#shadow)" />

      {/* Tégla textúra */}
      {[70,82,94,106,118,130,142].map(y => (
        <g key={y}>
          {[62,90,118,146,174,202,230].map((x,i) => (
            <rect key={x} x={x+(i%2)*14} y={y} width="26" height="10"
              fill="none" stroke="#C4A87088" strokeWidth="0.4" rx="0.5" />
          ))}
        </g>
      ))}

      {/* ── TETŐ ── */}
      {/* Tető árnyék */}
      <polygon points="52,64 160,16 268,64" fill="#00000022" transform="translate(3,4)" />
      {/* Tető */}
      <polygon points="52,64 160,16 268,64" fill="url(#roofL)" filter="url(#shadow)" />
      {/* Tető él */}
      <polygon points="52,64 160,16 268,64" fill="none" stroke="#661111" strokeWidth="1.5" />
      {/* Tető cserepek */}
      {[0,1,2,3,4].map(i => (
        <line key={i}
          x1={160 - i*22} y1={16 + i*12}
          x2={160 + i*22} y2={16 + i*12}
          stroke="#66111166" strokeWidth="0.8" />
      ))}

      {/* Zászlórúd */}
      <line x1="160" y1="16" x2="160" y2="-2" stroke="#888" strokeWidth="2" />
      {/* Zászló – R=false piros, R=true kék */}
      <polygon points="160,-2 188,5 160,12" fill={R ? "#2255DD" : "#EE2222"} />
      <line x1="160" y1="-2" x2="160" y2="12" stroke="#666" strokeWidth="1" />

      {/* ── BAL SZÁRNY ── */}
      <rect x="58" y="62" width="52" height="98" fill="#EDD9A8" opacity="0.3" />

      {/* ── JOBB SZÁRNY ── */}
      <rect x="210" y="62" width="52" height="98" fill="#C4A870" opacity="0.2" />

      {/* ── BAL ABLAK ── */}
      <rect x="72" y="78" width="38" height="32" fill="#B8D0E0" rx="2" />
      <rect x="72" y="78" width="38" height="32" fill="url(#glass)" rx="2" />
      {/* Ablakkeret */}
      <rect x="72" y="78" width="38" height="32" fill="none"
        stroke="#FFFFFF" strokeWidth="2.5" rx="2" />
      <rect x="72" y="78" width="38" height="32" fill="none"
        stroke="#8899AA" strokeWidth="1" rx="2" />
      {/* Ablak osztó */}
      <line x1="91" y1="78" x2="91" y2="110" stroke="#8899AA" strokeWidth="1.2" />
      <line x1="72" y1="94" x2="110" y2="94" stroke="#8899AA" strokeWidth="1.2" />
      {/* Ablak fényvisszaverés */}
      <line x1="75" y1="81" x2="82" y2="88" stroke="white" strokeWidth="1.5" opacity="0.6" />

      {/* ── JOBB ABLAK – R=true esetén sárga keret ── */}
      <rect x="210" y="78" width="38" height="32" fill="url(#glass)" rx="2" />
      <rect x="210" y="78" width="38" height="32" fill="none"
        stroke={R ? "#FFD700" : "#FFFFFF"} strokeWidth={R ? 3 : 2.5} rx="2" />
      <rect x="210" y="78" width="38" height="32" fill="none"
        stroke={R ? "#FFA500" : "#8899AA"} strokeWidth="1" rx="2" />
      <line x1="229" y1="78" x2="229" y2="110" stroke="#8899AA" strokeWidth="1.2" />
      <line x1="210" y1="94" x2="248" y2="94" stroke="#8899AA" strokeWidth="1.2" />
      <line x1="213" y1="81" x2="220" y2="88" stroke="white" strokeWidth="1.5" opacity="0.6" />

      {/* ── AJTÓ ── */}
      <rect x="136" y="112" width="48" height="48" fill="#8B6340" rx="3" />
      {/* Ajtó árnyék */}
      <rect x="136" y="112" width="48" height="48" fill="#00000022" rx="3" />
      {/* Ajtó panel */}
      <rect x="140" y="116" width="18" height="22" fill="#7A5530" rx="2" />
      <rect x="162" y="116" width="18" height="22" fill="#7A5530" rx="2" />
      <rect x="140" y="142" width="40" height="14" fill="#7A5530" rx="2" />
      {/* Kilincs */}
      <circle cx="157" cy="137" r="3.5" fill="#FFD700" />
      <circle cx="163" cy="137" r="3.5" fill="#FFD700" />
      {/* Ajtó fény */}
      <line x1="139" y1="114" x2="139" y2="158" stroke="white" strokeWidth="1" opacity="0.3" />

      {/* ── ISKOLA TÁBLA ── */}
      <rect x="96" y="66" width="128" height="20" fill="#CC3333" rx="3" filter="url(#shadow)" />
      <rect x="98" y="68" width="124" height="16" fill="#BB2222" rx="2" />
      <text x="160" y="79" textAnchor="middle" fontSize="9" fill="white"
        fontWeight="bold" letterSpacing="2">ISKOLA</text>
      {/* Tábla csavarok */}
      <circle cx="101" cy="76" r="2" fill="#AA1111" />
      <circle cx="219" cy="76" r="2" fill="#AA1111" />

      {/* ── BAL FA ── */}
      <rect x="24" y="118" width="9" height="40" fill="#6B4423" />
      <rect x="25" y="118" width="3" height="40" fill="#7B5533" opacity="0.5" />
      {/* Gyökér */}
      <ellipse cx="28" cy="157" rx="12" ry="4" fill="#5A3A1A" opacity="0.5" />
      {/* Lombozat rétegek */}
      <circle cx="28" cy="106" r="26" fill="#2D6E1A" />
      <circle cx="28" cy="103" r="23" fill="url(#tree1)" />
      <circle cx="18" cy="110" r="16" fill="#3A8A25" />
      <circle cx="38" cy="108" r="17" fill="#4A9A30" />
      {/* Fény */}
      <circle cx="22" cy="97" r="7" fill="#90D060" opacity="0.4" />

      {/* ── JOBB FA – R=true esetén hiányzik ── */}
      {!R && <>
        <rect x="287" y="118" width="9" height="40" fill="#6B4423" />
        <rect x="288" y="118" width="3" height="40" fill="#7B5533" opacity="0.5" />
        <ellipse cx="291" cy="157" rx="12" ry="4" fill="#5A3A1A" opacity="0.5" />
        <circle cx="291" cy="106" r="26" fill="#2D6E1A" />
        <circle cx="291" cy="103" r="23" fill="url(#tree2)" />
        <circle cx="281" cy="110" r="16" fill="#3A8A25" />
        <circle cx="301" cy="108" r="17" fill="#4A9A30" />
        <circle cx="285" cy="97" r="7" fill="#90D060" opacity="0.4" />
      </>}

      {/* ── PAD – R=true esetén extra ── */}
      {R && <>
        {/* Pad lába */}
        <rect x="88" y="152" width="4" height="10" fill="#7B5533" rx="1" />
        <rect x="108" y="152" width="4" height="10" fill="#7B5533" rx="1" />
        {/* Pad ülőke */}
        <rect x="84" y="148" width="32" height="5" fill="#A0724A" rx="2" />
        {/* Pad támlája */}
        <rect x="84" y="140" width="32" height="4" fill="#A0724A" rx="2" />
        <rect x="88" y="140" width="4" height="9" fill="#8B6340" rx="1" />
        <rect x="108" y="140" width="4" height="9" fill="#8B6340" rx="1" />
        {/* Pad árnyék */}
        <ellipse cx="100" cy="162" rx="18" ry="3" fill="#00000022" />
      </>}

      {/* ── KERÍTÉS ── */}
      {[62,82,102,122,198,218,238,258].map(x => (
        <rect key={x} x={x} y="150" width="4" height="12" fill="#DDD" rx="1" />
      ))}
      <rect x="62" y="153" width="64" height="3" fill="#CCC" rx="1" />
      <rect x="198" y="153" width="64" height="3" fill="#CCC" rx="1" />

      {/* ── MADARAK ── */}
      <path d="M 40 45 Q 43 42 46 45 Q 49 42 52 45" fill="none" stroke="#334" strokeWidth="1.2" />
      <path d="M 270 38 Q 273 35 276 38 Q 279 35 282 38" fill="none" stroke="#334" strokeWidth="1.2" />

      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 12: VÁROS NAPPAL ───────────────────────────────────────────────────
function CityDaySVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        {/* Égbolt */}
        <linearGradient id="skyC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A7BD5" />
          <stop offset="100%" stopColor="#C9E8F8" />
        </linearGradient>
        {/* Aszfalt */}
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        {/* Bal nagy épület */}
        <linearGradient id="bldL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7AA0C0" />
          <stop offset="100%" stopColor="#5580A0" />
        </linearGradient>
        {/* Középső épület */}
        <linearGradient id="bldM" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="100%" stopColor="#C8B580" />
        </linearGradient>
        {/* Jobb épület */}
        <linearGradient id="bldR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A0B8A0" />
          <stop offset="100%" stopColor="#708870" />
        </linearGradient>
        {/* Ablak üveg */}
        <linearGradient id="glassC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D0EEFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#88BBDD" stopOpacity="0.7" />
        </linearGradient>
        {/* Nap */}
        <radialGradient id="sunC" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0A0" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Árnyék */}
        <filter id="shadowC">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#00000044" />
        </filter>
        <filter id="glowC">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyC)" />

      {/* Nap */}
      <circle cx="280" cy="28" r="20" fill="url(#sunC)" filter="url(#glowC)" />
      <circle cx="280" cy="28" r="14" fill="#FFE566" />

      {/* Felhők */}
      <g opacity="0.92">
        <ellipse cx="60" cy="25" rx="30" ry="13" fill="white" />
        <ellipse cx="44" cy="29" rx="18" ry="10" fill="white" />
        <ellipse cx="78" cy="29" rx="20" ry="10" fill="white" />
      </g>
      <g opacity="0.85">
        <ellipse cx="185" cy="18" rx="22" ry="10" fill="white" />
        <ellipse cx="172" cy="22" rx="14" ry="8" fill="white" />
        <ellipse cx="198" cy="22" rx="15" ry="8" fill="white" />
      </g>

      {/* ── ASZFALT ── */}
      <rect x="0" y="155" width="320" height="45" fill="url(#road)" />
      {/* Járdasáv */}
      <rect x="0" y="150" width="320" height="8" fill="#AAA" />
      <rect x="0" y="150" width="320" height="2" fill="#CCC" />
      {/* Útburkolati jelek */}
      {[40, 90, 140, 190, 240].map(x => (
        <rect key={x} x={x} y="170" width="20" height="5" fill="#EEE" opacity="0.7" rx="1" />
      ))}

      {/* ── BAL NAGY ÉPÜLET ── */}
      <rect x="5" y="45" width="85" height="110" fill="url(#bldL)" filter="url(#shadowC)" />
      {/* Ablakok rács */}
      {[52,67,82,97,112,127].map(y =>
        [12,30,48,66].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="14" height="10"
            fill="url(#glassC)" stroke="#FFFFFF55" strokeWidth="0.8" rx="1" />
        ))
      )}
      {/* Bejárat */}
      <rect x="35" y="130" width="25" height="25" fill="#3A5A7A" rx="2" />
      <rect x="37" y="132" width="10" height="23" fill="#2A4A6A" rx="1" />
      <rect x="49" y="132" width="10" height="23" fill="#2A4A6A" rx="1" />
      {/* Épület neve */}
      <rect x="8" y="47" width="79" height="12" fill="#446688" rx="1" />
      <text x="47" y="56" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold" letterSpacing="1">IRODAHÁZ</text>

      {/* ── KÖZÉPSŐ ÉPÜLET ── */}
      <rect x="105" y="70" width="70" height="85" fill="url(#bldM)" filter="url(#shadowC)" />
      {/* Tető párkány */}
      <rect x="102" y="66" width="76" height="7" fill="#B09060" rx="1" />
      {/* Ablakok */}
      {[78,93,108,123].map(y =>
        [112,130,148].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="13" height="10"
            fill="url(#glassC)" stroke="#CCAA6688" strokeWidth="0.8" rx="1" />
        ))
      )}
      {/* Bejárat */}
      <rect x="130" y="130" width="20" height="25" fill="#7B5B3A" rx="2" />
      <circle cx="147" cy="143" r="2.5" fill="#FFD700" />
      {/* Erkély – R=true esetén piros korlát, R=false kék */}
      <rect x="108" y="98" width="64" height="3" fill={R ? "#CC2222" : "#2255CC"} rx="1" />
      <rect x="108" y="88" width="64" height="3" fill={R ? "#CC2222" : "#2255CC"} rx="1" />
      {[112,122,132,142,152,162].map(x => (
        <rect key={x} x={x} y="88" width="2" height="13" fill={R ? "#CC2222" : "#2255CC"} rx="0.5" />
      ))}

      {/* ── JOBB ÉPÜLET ── */}
      <rect x="190" y="55" width="80" height="100" fill="url(#bldR)" filter="url(#shadowC)" />
      {/* Tető */}
      <rect x="187" y="50" width="86" height="8" fill="#507050" rx="1" />
      <rect x="220" y="38" width="20" height="15" fill="#507050" />
      {/* Víztorony */}
      <rect x="223" y="30" width="14" height="10" fill="#607060" rx="1" />
      <ellipse cx="230" cy="30" rx="10" ry="4" fill="#708070" />
      {/* Ablakok */}
      {[62,78,94,110,126].map(y =>
        [197,217,237].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="14" height="11"
            fill="url(#glassC)" stroke="#FFFFFF44" strokeWidth="0.8" rx="1" />
        ))
      )}
      {/* Bejárat */}
      <rect x="218" y="128" width="24" height="27" fill="#405840" rx="2" />
      <rect x="220" y="130" width="9" height="25" fill="#304830" rx="1" />
      <rect x="231" y="130" width="9" height="25" fill="#304830" rx="1" />

      {/* ── LÁMPAOSZLOP BAL – R=true esetén sárga fény, R=false fehér ── */}
      <rect x="88" y="110" width="4" height="42" fill="#888" />
      <rect x="80" y="108" width="20" height="5" fill="#999" rx="2" />
      <ellipse cx="90" cy="108" rx="10" ry="4" fill={R ? "#FFE566" : "#FFFFFF"} opacity="0.9" />
      {R && <ellipse cx="90" cy="108" rx="14" ry="6" fill="#FFE566" opacity="0.3" />}

      {/* ── LÁMPAOSZLOP JOBB ── */}
      <rect x="228" y="110" width="4" height="42" fill="#888" />
      <rect x="220" y="108" width="20" height="5" fill="#999" rx="2" />
      <ellipse cx="232" cy="108" rx="10" ry="4" fill="#FFFFFF" opacity="0.9" />

      {/* ── AUTO BAL – R=true esetén piros, R=false kék ── */}
      <g filter="url(#shadowC)">
        <rect x="30" y="158" width="52" height="22" fill={R ? "#CC2222" : "#2244AA"} rx="4" />
        <rect x="36" y="153" width="38" height="16" fill={R ? "#DD4444" : "#3355BB"} rx="3" />
        {/* Ablakok */}
        <rect x="39" y="155" width="14" height="10" fill="url(#glassC)" rx="1" />
        <rect x="56" y="155" width="14" height="10" fill="url(#glassC)" rx="1" />
        {/* Kerekek */}
        <circle cx="44" cy="180" r="7" fill="#222" />
        <circle cx="44" cy="180" r="4" fill="#555" />
        <circle cx="68" cy="180" r="7" fill="#222" />
        <circle cx="68" cy="180" r="4" fill="#555" />
        {/* Fényszóró */}
        <rect x="80" y="163" width="5" height="5" fill="#FFE566" rx="1" />
        <rect x="27" y="163" width="5" height="5" fill="#FF6666" rx="1" />
      </g>

      {/* ── AUTO JOBB – R=true esetén hiányzik ── */}
      {!R && (
        <g filter="url(#shadowC)">
          <rect x="230" y="158" width="52" height="22" fill="#228844" rx="4" />
          <rect x="236" y="153" width="38" height="16" fill="#339955" rx="3" />
          <rect x="239" y="155" width="14" height="10" fill="url(#glassC)" rx="1" />
          <rect x="256" y="155" width="14" height="10" fill="url(#glassC)" rx="1" />
          <circle cx="244" cy="180" r="7" fill="#222" />
          <circle cx="244" cy="180" r="4" fill="#555" />
          <circle cx="268" cy="180" r="7" fill="#222" />
          <circle cx="268" cy="180" r="4" fill="#555" />
          <rect x="280" y="163" width="5" height="5" fill="#FFE566" rx="1" />
          <rect x="227" y="163" width="5" height="5" fill="#FF6666" rx="1" />
        </g>
      )}

      {/* ── FA BAL SZÉLEN ── */}
      <rect x="0" y="118" width="7" height="35" fill="#6B4423" />
      <circle cx="3" cy="108" r="18" fill="#2D6E1A" />
      <circle cx="3" cy="105" r="15" fill="#4A9A30" />

      {/* ── KÖZLEKEDÉSI LÁMPA – R=true esetén piros, R=false zöld ── */}
      <rect x="155" y="120" width="8" height="35" fill="#555" />
      <rect x="151" y="108" width="16" height="36" fill="#333" rx="3" />
      <circle cx="159" cy="116" r="5" fill={R ? "#FF2222" : "#444"} opacity={R ? 1 : 0.4} />
      <circle cx="159" cy="128" r="5" fill="#FF9900" opacity="0.4" />
      <circle cx="159" cy="140" r="5" fill={R ? "#444" : "#22CC22"} opacity={R ? 0.4 : 1} />

      {/* ── MADARAK ── */}
      <path d="M 120 35 Q 123 32 126 35 Q 129 32 132 35" fill="none" stroke="#33344466" strokeWidth="1.2" />
      <path d="M 250 45 Q 253 42 256 45 Q 259 42 262 45" fill="none" stroke="#33344466" strokeWidth="1.2" />

      {/* Épület árnyékok a földön */}
      <ellipse cx="47" cy="153" rx="42" ry="4" fill="#00000022" />
      <ellipse cx="140" cy="153" rx="35" ry="3" fill="#00000022" />
      <ellipse cx="230" cy="153" rx="40" ry="4" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 13: ERDŐ ───────────────────────────────────────────────────────────
function ForestSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyF" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E6EA6" />
          <stop offset="100%" stopColor="#A8D0EE" />
        </linearGradient>
        <linearGradient id="groundF" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A8A3A" />
          <stop offset="100%" stopColor="#3A6A20" />
        </linearGradient>
        <linearGradient id="trunkF" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7B5533" />
          <stop offset="100%" stopColor="#5A3A1A" />
        </linearGradient>
        <radialGradient id="leaf1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#7DCF4A" />
          <stop offset="100%" stopColor="#2D6E1A" />
        </radialGradient>
        <radialGradient id="leaf2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6BBF3A" />
          <stop offset="100%" stopColor="#1D5E0A" />
        </radialGradient>
        <radialGradient id="leaf3" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#8FD455" />
          <stop offset="100%" stopColor="#3D7E1A" />
        </radialGradient>
        <filter id="shadowF">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#00000044" />
        </filter>
        <filter id="softF">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyF)" />

      {/* Nap – R=true esetén 8px-el arrébb (NEHÉZ!) */}
      <circle cx={R ? "272" : "280"} cy="25" r="18" fill="#FFE566" filter="url(#softF)" opacity="0.9" />
      <circle cx={R ? "272" : "280"} cy="25" r="12" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="70" cy="28" rx="32" ry="13" fill="white" />
        <ellipse cx="52" cy="32" rx="20" ry="10" fill="white" />
        <ellipse cx="88" cy="32" rx="22" ry="10" fill="white" />
      </g>

      {/* ── TALAJ ── */}
      <rect x="0" y="148" width="320" height="52" fill="url(#groundF)" />
      {/* Fűszálak */}
      {[5,18,32,48,65,80,95,115,135,155,175,195,215,235,255,275,295,310].map(x => (
        <line key={x} x1={x} y1="148" x2={x-2} y2="141" stroke="#4CAF50" strokeWidth="1.5" />
      ))}
      {/* Avarlevel a talajon */}
      {[30,70,120,170,220,270].map(x => (
        <ellipse key={x} cx={x} cy="152" rx="5" ry="2.5"
          fill="#A0722A" opacity="0.6" transform={`rotate(${x % 40 - 20} ${x} 152)`} />
      ))}

      {/* ── HÁTTÉR FÁK (halvány, mélység) ── */}
      {[20, 60, 100, 145, 185, 230, 270, 305].map((x, i) => (
        <g key={x} opacity="0.45">
          <rect x={x - 3} y={90 + (i % 3) * 5} width="6" height={55 - (i % 3) * 5} fill="#5A3A1A" />
          <circle cx={x} cy={80 + (i % 3) * 5} r={18 - (i % 3) * 2} fill="#1D5E0A" />
          <circle cx={x} cy={75 + (i % 3) * 5} r={14 - (i % 3) * 2} fill="#2D6E1A" />
        </g>
      ))}

      {/* ── BAL NAGY FA ── */}
      <rect x="38" y="88" width="12" height="62" fill="url(#trunkF)" />
      <rect x="39" y="88" width="4" height="62" fill="#9B7553" opacity="0.3" />
      {/* Gyökér */}
      <path d="M38,148 Q30,152 22,155" stroke="#5A3A1A" strokeWidth="3" fill="none" />
      <path d="M50,148 Q58,152 65,156" stroke="#5A3A1A" strokeWidth="3" fill="none" />
      {/* Lombozat */}
      <circle cx="44" cy="95" r="32" fill="#1D5E0A" />
      <circle cx="44" cy="90" r="28" fill="url(#leaf1)" />
      <circle cx="28" cy="100" r="20" fill="#2D6E1A" />
      <circle cx="60" cy="98" r="22" fill="#3A7A25" />
      <circle cx="44" cy="78" r="18" fill="#4A8A30" />
      {/* Fényvisszaverés */}
      <circle cx="35" cy="82" r="8" fill="#90D060" opacity="0.25" />

      {/* ── KÖZÉPSŐ FA ── */}
      <rect x="148" y="95" width="10" height="55" fill="url(#trunkF)" />
      <path d="M148,148 Q140,153 133,157" stroke="#5A3A1A" strokeWidth="2.5" fill="none" />
      <path d="M158,148 Q165,153 172,157" stroke="#5A3A1A" strokeWidth="2.5" fill="none" />
      <circle cx="153" cy="100" r="28" fill="#1D5E0A" />
      <circle cx="153" cy="96" r="24" fill="url(#leaf2)" />
      <circle cx="138" cy="106" r="17" fill="#2D6E1A" />
      <circle cx="168" cy="104" r="19" fill="#3A7A25" />
      <circle cx="153" cy="85" r="16" fill="#4A8A30" />
      <circle cx="145" cy="89" r="7" fill="#90D060" opacity="0.22" />

      {/* ── JOBB FA ── */}
      <rect x="262" y="82" width="13" height="68" fill="url(#trunkF)" />
      <path d="M262,148 Q254,153 246,157" stroke="#5A3A1A" strokeWidth="3" fill="none" />
      <path d="M275,148 Q282,153 290,157" stroke="#5A3A1A" strokeWidth="3" fill="none" />
      <circle cx="268" cy="88" r="34" fill="#1D5E0A" />
      <circle cx="268" cy="83" r="30" fill="url(#leaf3)" />
      <circle cx="250" cy="95" r="22" fill="#2D6E1A" />
      <circle cx="286" cy="92" r="24" fill="#3A7A25" />
      <circle cx="268" cy="70" r="20" fill="#4A8A30" />
      <circle cx="258" cy="75" r="9" fill="#90D060" opacity="0.22" />

      {/* ── BOKOR BAL – R=true esetén 1 virággal több (NEHÉZ!) ── */}
      <circle cx="105" cy="148" r="14" fill="#2D7A1A" />
      <circle cx="92" cy="150" r="11" fill="#3A8A25" />
      <circle cx="118" cy="150" r="12" fill="#258A18" />
      <circle cx="105" cy="140" r="10" fill="#4A9A30" />
      {/* Virágok a bokron */}
      <circle cx="96" cy="143" r="3" fill="#FF9999" />
      <circle cx="96" cy="143" r="1.5" fill="#FFE0E0" />
      <circle cx="112" cy="142" r="3" fill="#FF9999" />
      <circle cx="112" cy="142" r="1.5" fill="#FFE0E0" />
      {/* Extra virág R=true esetén – közel a többihez (NEHÉZ!) */}
      {R && <>
        <circle cx="104" cy="138" r="3" fill="#FF9999" />
        <circle cx="104" cy="138" r="1.5" fill="#FFE0E0" />
      </>}

      {/* ── BOKOR JOBB ── */}
      <circle cx="215" cy="149" r="13" fill="#2D7A1A" />
      <circle cx="203" cy="151" r="10" fill="#3A8A25" />
      <circle cx="227" cy="151" r="11" fill="#258A18" />
      <circle cx="215" cy="141" r="9" fill="#4A9A30" />

      {/* ── GOMBA – R=true esetén a kalap 1px-el szélesebb (NAGYON NEHÉZ!) ── */}
      <rect x="84" y="148" width="5" height="8" fill="#EEE" />
      <ellipse cx="86" cy="148" rx={R ? 10 : 9} ry="5" fill="#CC2222" />
      {/* Pöttyök */}
      <circle cx="83" cy="146" r="1.5" fill="white" opacity="0.9" />
      <circle cx="89" cy="145" r="1.2" fill="white" opacity="0.9" />

      {/* ── MADARAK – R=true esetén 3 madár van, R=false 2 (KÖZEPES) ── */}
      <path d="M 130 38 Q 134 34 138 38 Q 142 34 146 38" fill="none" stroke="#223" strokeWidth="1.3" />
      <path d="M 155 32 Q 159 28 163 32 Q 167 28 171 32" fill="none" stroke="#223" strokeWidth="1.3" />
      {R && <path d="M 178 40 Q 182 36 186 40 Q 190 36 194 40" fill="none" stroke="#223" strokeWidth="1.3" />}

      {/* ── PATAK – R=true esetén kissé más kanyar (KÖZEPES) ── */}
      <path
        d={R
          ? "M 0 165 Q 40 158 80 163 Q 120 168 160 162 Q 200 156 240 161 Q 280 166 320 160"
          : "M 0 165 Q 40 160 80 165 Q 120 170 160 164 Q 200 158 240 163 Q 280 168 320 162"}
        fill="none" stroke="#5599DD" strokeWidth="4" opacity="0.6" />
      <path
        d={R
          ? "M 0 165 Q 40 158 80 163 Q 120 168 160 162 Q 200 156 240 161 Q 280 166 320 160"
          : "M 0 165 Q 40 160 80 165 Q 120 170 160 164 Q 200 158 240 163 Q 280 168 320 162"}
        fill="none" stroke="#88BBFF" strokeWidth="2" opacity="0.4" />

      {/* ── SZARVAS – R=true esetén agancs 1 ággal több (NEHÉZ!) ── */}
      {/* Test */}
      <ellipse cx="195" cy="138" rx="18" ry="10" fill="#8B6340" />
      {/* Fej */}
      <circle cx="211" cy="130" r="8" fill="#8B6340" />
      {/* Fül */}
      <ellipse cx="216" cy="125" rx="3" ry="5" fill="#8B6340" />
      <ellipse cx="216" cy="125" rx="1.5" ry="3" fill="#CC9977" />
      {/* Szem */}
      <circle cx="214" cy="129" r="1.5" fill="#222" />
      {/* Lábak */}
      <rect x="182" y="146" width="4" height="10" fill="#7A5530" rx="1" />
      <rect x="190" y="146" width="4" height="10" fill="#7A5530" rx="1" />
      <rect x="198" y="146" width="4" height="10" fill="#7A5530" rx="1" />
      <rect x="206" y="146" width="4" height="10" fill="#7A5530" rx="1" />
      {/* Agancs – R=true esetén extra ág */}
      <path d="M 212 123 Q 215 115 218 110" stroke="#6B4423" strokeWidth="2" fill="none" />
      <path d="M 218 110 Q 222 105 225 102" stroke="#6B4423" strokeWidth="1.5" fill="none" />
      <path d="M 218 110 Q 214 105 213 101" stroke="#6B4423" strokeWidth="1.5" fill="none" />
      {R && <path d="M 215 116 Q 220 112 224 110" stroke="#6B4423" strokeWidth="1.5" fill="none" />}

      {/* Árnyékok */}
      <ellipse cx="44" cy="151" rx="28" ry="4" fill="#00000033" />
      <ellipse cx="153" cy="151" rx="24" ry="3" fill="#00000033" />
      <ellipse cx="268" cy="151" rx="30" ry="4" fill="#00000033" />
      <ellipse cx="195" cy="151" rx="16" ry="3" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 14: ÁLLATKERT ─────────────────────────────────────────────────────
function ZooSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyZ" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5599CC" />
          <stop offset="100%" stopColor="#BBD9EE" />
        </linearGradient>
        <linearGradient id="groundZ" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7AAA50" />
          <stop offset="100%" stopColor="#4A7A28" />
        </linearGradient>
        <linearGradient id="pathZ" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4C4A0" />
          <stop offset="100%" stopColor="#B8A880" />
        </linearGradient>
        <linearGradient id="cageZ" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8B890" />
          <stop offset="100%" stopColor="#A89870" />
        </linearGradient>
        <filter id="shadowZ">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softZ">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyZ)" />

      {/* Nap */}
      <circle cx="290" cy="22" r="16" fill="#FFE566" filter="url(#softZ)" opacity="0.9" />
      <circle cx="290" cy="22" r="11" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.9">
        <ellipse cx="65" cy="22" rx="28" ry="12" fill="white" />
        <ellipse cx="50" cy="26" rx="18" ry="9" fill="white" />
        <ellipse cx="80" cy="26" rx="19" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="190" cy="18" rx="22" ry="10" fill="white" />
        <ellipse cx="178" cy="22" rx="14" ry="8" fill="white" />
        <ellipse cx="202" cy="22" rx="15" ry="8" fill="white" />
      </g>

      {/* ── TALAJ ── */}
      <rect x="0" y="148" width="320" height="52" fill="url(#groundZ)" />

      {/* Ösvény */}
      <path d="M 0 175 Q 80 168 160 172 Q 240 176 320 170"
        fill="url(#pathZ)" stroke="#C0B090" strokeWidth="0.5" />
      <rect x="0" y="170" width="320" height="18" fill="url(#pathZ)" opacity="0.7" />

      {/* ── BAL KETREC – ZSIRÁF ── */}
      <rect x="8" y="60" width="90" height="92" fill="#D4C4A0" opacity="0.3" rx="2" />
      {/* Ketrec rácsok */}
      {[8,20,32,44,56,68,80,92].map(x => (
        <line key={x} x1={x} y1="60" x2={x} y2="152" stroke="#8B7B5B" strokeWidth="1.2" opacity="0.7" />
      ))}
      {[75,90,105,120,135].map(y => (
        <line key={y} x1="8" y1={y} x2="98" y2={y} stroke="#8B7B5B" strokeWidth="0.8" opacity="0.5" />
      ))}
      {/* Ketrec keret */}
      <rect x="8" y="60" width="90" height="92" fill="none"
        stroke="#7B6B4B" strokeWidth="2" rx="2" />
      {/* Ketrec tábla */}
      <rect x="28" y="60" width="44" height="12" fill="#7B6B4B" rx="2" />
      <text x="50" y="69" textAnchor="middle" fontSize="6" fill="#FFE0A0" fontWeight="bold">ZSIRÁF</text>

      {/* Zsiráf test */}
      <ellipse cx="55" cy="128" rx="18" ry="12" fill="#E8B840" />
      {/* Zsiráf nyak */}
      <rect x="58" y="90" width="10" height="42" fill="#E8B840" rx="4" />
      {/* Nyak foltok */}
      <rect x="59" y="95" width="4" height="4" fill="#C48820" rx="1" opacity="0.7" />
      <rect x="62" y="103" width="4" height="4" fill="#C48820" rx="1" opacity="0.7" />
      <rect x="59" y="111" width="4" height="4" fill="#C48820" rx="1" opacity="0.7" />
      {/* Zsiráf fej */}
      <ellipse cx="63" cy="85" rx="9" ry="7" fill="#E8B840" />
      {/* Szem – R=true esetén 2px-el lejjebb (NAGYON NEHÉZ!) */}
      <circle cx="67" cy={R ? "83" : "81"} r="2" fill="#333" />
      <circle cx="68" cy={R ? "82" : "80"} r="0.8" fill="white" />
      {/* Szar */}
      <line x1="63" y1="78" x2="60" y2="72" stroke="#C48820" strokeWidth="1.5" />
      <circle cx="60" cy="72" r="2" fill="#C48820" />
      <line x1="67" y1="78" x2="70" y2="72" stroke="#C48820" strokeWidth="1.5" />
      <circle cx="70" cy="72" r="2" fill="#C48820" />
      {/* Lábak */}
      {[38,46,58,66].map(x => (
        <rect key={x} x={x} y="138" width="5" height="14" fill="#D4A030" rx="2" />
      ))}
      {/* Test foltok */}
      <ellipse cx="48" cy="122" rx="5" ry="4" fill="#C48820" opacity="0.6" />
      <ellipse cx="62" cy="130" rx="4" ry="5" fill="#C48820" opacity="0.6" />
      <ellipse cx="55" cy="116" rx="3" ry="4" fill="#C48820" opacity="0.6" />

      {/* ── KÖZÉPSŐ KETREC – MAJOM ── */}
      <rect x="113" y="65" width="88" height="87" fill="#C8D8B0" opacity="0.3" rx="2" />
      {/* Mászófa */}
      <rect x="153" y="68" width="6" height="72" fill="#8B6340" />
      <rect x="138" y="95" width="36" height="5" fill="#8B6340" rx="1" />
      <rect x="138" y="115" width="36" height="5" fill="#8B6340" rx="1" />
      {/* Rácsok */}
      {[113,125,137,149,161,173,185,197].map(x => (
        <line key={x} x1={x} y1="65" x2={x} y2="152" stroke="#7A8B6A" strokeWidth="1.2" opacity="0.7" />
      ))}
      {[80,95,110,125,140].map(y => (
        <line key={y} x1="113" y1={y} x2="201" y2={y} stroke="#7A8B6A" strokeWidth="0.8" opacity="0.5" />
      ))}
      <rect x="113" y="65" width="88" height="87" fill="none"
        stroke="#6A7B5A" strokeWidth="2" rx="2" />
      <rect x="133" y="65" width="46" height="12" fill="#6A7B5A" rx="2" />
      <text x="156" y="74" textAnchor="middle" fontSize="6" fill="#E0FFB0" fontWeight="bold">MAJOM</text>

      {/* Majom – az ágon ül */}
      {/* Test */}
      <ellipse cx="157" cy="108" rx="11" ry="9" fill="#C8824A" />
      {/* Has */}
      <ellipse cx="157" cy="110" rx="7" ry="6" fill="#E8A870" />
      {/* Fej */}
      <circle cx="157" cy="97" r="9" fill="#C8824A" />
      {/* Arc */}
      <ellipse cx="157" cy="100" rx="6" ry="5" fill="#E8A870" />
      {/* Szemek – R=true esetén távolabb egymástól 2px-el (NAGYON NEHÉZ!) */}
      <circle cx={R ? "153" : "154"} cy="97" r="2" fill="#222" />
      <circle cx={R ? "153" : "154"} cy="97" r="0.8" fill="white" />
      <circle cx={R ? "161" : "160"} cy="97" r="2" fill="#222" />
      <circle cx={R ? "161" : "160"} cy="97" r="0.8" fill="white" />
      {/* Fül */}
      <circle cx="148" cy="97" r="4" fill="#C8824A" />
      <circle cx="148" cy="97" r="2.5" fill="#E8A870" />
      <circle cx="166" cy="97" r="4" fill="#C8824A" />
      <circle cx="166" cy="97" r="2.5" fill="#E8A870" />
      {/* Száj */}
      <path d="M 153 102 Q 157 105 161 102" fill="none" stroke="#A06030" strokeWidth="1" />
      {/* Farok */}
      <path d="M 157 116 Q 170 120 172 110 Q 174 100 168 98"
        fill="none" stroke="#C8824A" strokeWidth="3" />
      {/* Karok */}
      <line x1="146" y1="104" x2="138" y2="97" stroke="#C8824A" strokeWidth="3" strokeLinecap="round" />
      <line x1="168" y1="104" x2="175" y2="97" stroke="#C8824A" strokeWidth="3" strokeLinecap="round" />

      {/* ── JOBB KETREC – OROSZLÁN ── */}
      <rect x="216" y="62" width="96" height="90" fill="#E8D8B0" opacity="0.3" rx="2" />
      {[216,228,240,252,264,276,288,300,312].map(x => (
        <line key={x} x1={x} y1="62" x2={x} y2="152" stroke="#8B7B5B" strokeWidth="1.2" opacity="0.7" />
      ))}
      {[77,92,107,122,137].map(y => (
        <line key={y} x1="216" y1={y} x2="312" y2={y} stroke="#8B7B5B" strokeWidth="0.8" opacity="0.5" />
      ))}
      <rect x="216" y="62" width="96" height="90" fill="none"
        stroke="#7B6B4B" strokeWidth="2" rx="2" />
      <rect x="236" y="62" width="56" height="12" fill="#7B6B4B" rx="2" />
      <text x="264" y="71" textAnchor="middle" fontSize="6" fill="#FFE0A0" fontWeight="bold">OROSZLÁN</text>

      {/* Oroszlán */}
      {/* Test */}
      <ellipse cx="264" cy="125" rx="28" ry="18" fill="#D4A840" />
      {/* Sörény – R=true esetén 1 körrel kevesebb (NEHÉZ!) */}
      <circle cx="264" cy="98" r="18" fill="#8B5A20" />
      {!R && <circle cx="264" cy="98" r="14" fill="#A06A28" />}
      <circle cx="264" cy="98" r={R ? "14" : "11"} fill="#C07830" />
      {/* Fej */}
      <circle cx="264" cy="98" r="12" fill="#D4A840" />
      {/* Arc */}
      <ellipse cx="264" cy="101" rx="8" ry="6" fill="#E8C060" />
      {/* Szemek */}
      <circle cx="259" cy="96" r="2.5" fill="#228833" />
      <circle cx="259" cy="96" r="1.2" fill="#111" />
      <circle cx="269" cy="96" r="2.5" fill="#228833" />
      <circle cx="269" cy="96" r="1.2" fill="#111" />
      {/* Orr */}
      <ellipse cx="264" cy="102" rx="3" ry="2" fill="#C07030" />
      {/* Bajusz – R=true esetén 1px-el hosszabb (NAGYON NEHÉZ!) */}
      <line x1="264" y1="104" x2={R ? "248" : "249"} y2="102" stroke="#8B6040" strokeWidth="0.8" opacity="0.8" />
      <line x1="264" y1="104" x2={R ? "280" : "279"} y2="102" stroke="#8B6040" strokeWidth="0.8" opacity="0.8" />
      <line x1="264" y1="106" x2={R ? "249" : "250"} y2="106" stroke="#8B6040" strokeWidth="0.8" opacity="0.8" />
      <line x1="264" y1="106" x2={R ? "279" : "278"} y2="106" stroke="#8B6040" strokeWidth="0.8" opacity="0.8" />
      {/* Fül */}
      <circle cx="253" cy="88" r="5" fill="#D4A840" />
      <circle cx="275" cy="88" r="5" fill="#D4A840" />
      {/* Lábak */}
      {[242,252,270,280].map(x => (
        <rect key={x} x={x} y="140" width="7" height="14" fill="#C49830" rx="3" />
      ))}
      {/* Farok */}
      <path d="M 292 125 Q 308 118 310 108 Q 312 100 306 98"
        fill="none" stroke="#C49830" strokeWidth="3" />
      <circle cx="306" cy="97" r="5" fill="#8B5A20" />

      {/* ── TÁBLA – R=true esetén 1 betű más (NEHÉZ!) ── */}
      <rect x="118" y="155" width="84" height="16" fill="#5A8A3A" rx="3" filter="url(#shadowZ)" />
      <rect x="120" y="157" width="80" height="12" fill="#4A7A2A" rx="2" />
      <text x="160" y="166" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold" letterSpacing="1">
        {R ? "ÁLLATKER+" : "ÁLLATKERT"}
      </text>

      {/* ── LÁTOGATÓ – R=true esetén piros sapka, R=false kék (KÖZEPES→NEHÉZ) ── */}
      {/* Test */}
      <ellipse cx="160" cy="170" rx="7" ry="9" fill="#4466AA" />
      {/* Fej */}
      <circle cx="160" cy="158" r="6" fill="#FFCC99" />
      {/* Sapka – árnyalat különbség */}
      <ellipse cx="160" cy="153" rx="7" ry="3" fill={R ? "#CC3333" : "#3355BB"} />
      <rect x="154" y="150" width="12" height="4" fill={R ? "#BB2222" : "#2244AA"} rx="1" />
      {/* Lábak */}
      <rect x="155" y="178" width="4" height="10" fill="#334488" rx="1" />
      <rect x="161" y="178" width="4" height="10" fill="#334488" rx="1" />

      {/* Árnyékok */}
      <ellipse cx="55" cy="152" rx="22" ry="3" fill="#00000033" />
      <ellipse cx="157" cy="152" rx="18" ry="3" fill="#00000033" />
      <ellipse cx="264" cy="152" rx="25" ry="3" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 15: KERT ───────────────────────────────────────────────────────────
function GardenSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A8FCC" />
          <stop offset="100%" stopColor="#B8DAEF" />
        </linearGradient>
        <linearGradient id="groundG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6AAA40" />
          <stop offset="100%" stopColor="#3A7A18" />
        </linearGradient>
        <linearGradient id="soilG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5E3C" />
          <stop offset="100%" stopColor="#6B3E1C" />
        </linearGradient>
        <linearGradient id="houseG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0E0C0" />
          <stop offset="100%" stopColor="#D8C8A0" />
        </linearGradient>
        <radialGradient id="roseR" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FF8888" />
          <stop offset="100%" stopColor="#CC2222" />
        </radialGradient>
        <radialGradient id="roseY" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#CC9900" />
        </radialGradient>
        <radialGradient id="rosePink" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFB0D0" />
          <stop offset="100%" stopColor="#DD5599" />
        </radialGradient>
        <filter id="shadowG">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softG">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyG)" />

      {/* Nap – R=true esetén 6px-el arrébb (NAGYON NEHÉZ) */}
      <circle cx={R ? "38" : "32"} cy="28" r="17" fill="#FFE566" filter="url(#softG)" opacity="0.92" />
      <circle cx={R ? "38" : "32"} cy="28" r="11" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="140" cy="22" rx="30" ry="12" fill="white" />
        <ellipse cx="123" cy="26" rx="18" ry="9" fill="white" />
        <ellipse cx="156" cy="26" rx="20" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="250" cy="18" rx="24" ry="10" fill="white" />
        <ellipse cx="237" cy="22" rx="15" ry="8" fill="white" />
        <ellipse cx="263" cy="22" rx="16" ry="8" fill="white" />
      </g>

      {/* ── HÁZ A HÁTTÉRBEN ── */}
      <rect x="200" y="55" width="115" height="100" fill="url(#houseG)" filter="url(#shadowG)" />
      {/* Tető */}
      <polygon points="193,58 257,18 322,58" fill="#884422" />
      <polygon points="193,58 257,18 322,58" fill="none" stroke="#662200" strokeWidth="1.2" />
      {/* Ablakok */}
      <rect x="210" y="70" width="28" height="22" fill="#AAD8EE" rx="2" stroke="#CCBBAA" strokeWidth="1.2" />
      <line x1="224" y1="70" x2="224" y2="92" stroke="#CCBBAA" strokeWidth="1" />
      <line x1="210" y1="81" x2="238" y2="81" stroke="#CCBBAA" strokeWidth="1" />
      {/* Jobb ablak – R=true esetén 1 keresztrács hiányzik (NEHÉZ) */}
      <rect x="272" y="70" width="28" height="22" fill="#AAD8EE" rx="2" stroke="#CCBBAA" strokeWidth="1.2" />
      {!R && <line x1="286" y1="70" x2="286" y2="92" stroke="#CCBBAA" strokeWidth="1" />}
      <line x1="272" y1="81" x2="300" y2="81" stroke="#CCBBAA" strokeWidth="1" />
      {/* Ajtó */}
      <rect x="238" y="110" width="26" height="45" fill="#7B5B3A" rx="2" />
      <rect x="240" y="112" width="10" height="20" fill="#6A4A29" rx="1" />
      <rect x="252" y="112" width="10" height="20" fill="#6A4A29" rx="1" />
      <circle cx="250" cy="133" r="2.5" fill="#FFD700" />
      {/* Küszöb */}
      <rect x="232" y="153" width="38" height="4" fill="#B09070" rx="1" />

      {/* ── TALAJ ── */}
      <rect x="0" y="148" width="320" height="52" fill="url(#groundG)" />
      {/* Fűszálak */}
      {[8,22,38,55,72,90,108,128,148,168,188,208,228,248,268,288,305,318].map(x => (
        <line key={x} x1={x} y1="148" x2={x - 2} y2="141"
          stroke="#4CAF50" strokeWidth="1.5" opacity="0.8" />
      ))}

      {/* ── VIRÁGÁGY BAL ── */}
      <rect x="18" y="138" width="100" height="18" fill="url(#soilG)" rx="3" />
      <rect x="18" y="138" width="100" height="3" fill="#9B6E4C" rx="2" />
      {/* Szegély */}
      {[22,30,38,46,54,62,70,78,86,94,102,110].map(x => (
        <rect key={x} x={x} y="153" width="5" height="6"
          fill="#D4A870" rx="1" opacity="0.8" />
      ))}

      {/* Virágok a bal ágyban */}
      {/* Piros rózsák */}
      {[28, 52, 76, 100].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="138" x2={x} y2={118 - i % 2 * 4} stroke="#3A8A20" strokeWidth="1.8" />
          {/* Levél */}
          <ellipse cx={x - 4} cy={128 - i % 2 * 3} rx="5" ry="2.5"
            fill="#3A8A20" transform={`rotate(-30 ${x - 4} ${128 - i % 2 * 3})`} />
          {/* Virág */}
          <circle cx={x} cy={114 - i % 2 * 4} r="6" fill="url(#roseR)" />
          <circle cx={x - 2} cy={112 - i % 2 * 4} r="3" fill="#FF5555" opacity="0.6" />
          <circle cx={x + 2} cy={116 - i % 2 * 4} r="2.5" fill="#FF9999" opacity="0.5" />
          <circle cx={x} cy={113 - i % 2 * 4} r="2" fill="#FFB0B0" opacity="0.4" />
        </g>
      ))}

      {/* Sárga virágok */}
      {[40, 64, 88].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="138" x2={x} y2={122 - i % 2 * 3} stroke="#3A8A20" strokeWidth="1.5" />
          <ellipse cx={x + 4} cy={130 - i % 2 * 2} rx="4" ry="2"
            fill="#3A8A20" transform={`rotate(25 ${x + 4} ${130 - i % 2 * 2})`} />
          <circle cx={x} cy={118 - i % 2 * 3} r="5" fill="url(#roseY)" />
          <circle cx={x} cy={117 - i % 2 * 3} r="2" fill="#FFE8A0" opacity="0.6" />
        </g>
      ))}

      {/* ── VIRÁGÁGY JOBB ── */}
      <rect x="175" y="138" width="95" height="18" fill="url(#soilG)" rx="3" />
      <rect x="175" y="138" width="95" height="3" fill="#9B6E4C" rx="2" />
      {[179,187,195,203,211,219,227,235,243,251,259,265].map(x => (
        <rect key={x} x={x} y="153" width="5" height="6"
          fill="#D4A870" rx="1" opacity="0.8" />
      ))}

      {/* Rózsaszín virágok */}
      {[185, 208, 231, 254].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="138" x2={x} y2={116 - i % 2 * 5} stroke="#3A8A20" strokeWidth="1.8" />
          <ellipse cx={x - 4} cy={127 - i % 2 * 3} rx="5" ry="2.5"
            fill="#3A8A20" transform={`rotate(-25 ${x - 4} ${127 - i % 2 * 3})`} />
          <circle cx={x} cy={112 - i % 2 * 5} r="6" fill="url(#rosePink)" />
          <circle cx={x - 2} cy={110 - i % 2 * 5} r="3" fill="#FFD0E8" opacity="0.6" />
          <circle cx={x + 2} cy={114 - i % 2 * 5} r="2.5" fill="#FF88BB" opacity="0.5" />
        </g>
      ))}

      {/* ── KERTI PAD ── */}
      <rect x="108" y="140" width="58" height="5" fill="#A07848" rx="2" filter="url(#shadowG)" />
      <rect x="108" y="132" width="58" height="4" fill="#A07848" rx="2" />
      <rect x="111" y="132" width="4" height="14" fill="#8B6338" rx="1" />
      <rect x="158" y="132" width="4" height="14" fill="#8B6338" rx="1" />
      <rect x="124" y="132" width="4" height="14" fill="#8B6338" rx="1" />
      <rect x="145" y="132" width="4" height="14" fill="#8B6338" rx="1" />
      <ellipse cx="137" cy="148" rx="28" ry="3" fill="#00000022" />

      {/* ── ÖNTÖZŐKANNA – R=true esetén 1px-el arrébb (NAGYON NEHÉZ) ── */}
      <g transform={`translate(${R ? 1 : 0}, 0)`}>
        {/* Kanna teste */}
        <ellipse cx="80" cy="162" rx="16" ry="12" fill="#5588CC" />
        <rect x="64" y="154" width="32" height="16" fill="#4477BB" rx="4" />
        {/* Kanna nyak */}
        <rect x="94" y="156" width="14" height="5" fill="#4477BB" rx="2" />
        {/* Rózsa */}
        <ellipse cx="108" cy="158" rx="5" ry="4" fill="#3366AA" />
        {[106,108,110].map(x => (
          <line key={x} x1={x} y1="158" x2={x} y2="168" stroke="#3366AA" strokeWidth="1.2" />
        ))}
        {/* Fogantyú */}
        <path d="M 68 152 Q 58 148 60 158 Q 62 165 68 164"
          fill="none" stroke="#3366AA" strokeWidth="2.5" />
        {/* Fény */}
        <ellipse cx="74" cy="157" rx="6" ry="3" fill="white" opacity="0.18" />
      </g>

      {/* ── PILLANGÓ – R=true esetén 3px-el arrébb (NAGYON NEHÉZ) ── */}
      <g transform={`translate(${R ? 3 : 0}, 0)`}>
        <ellipse cx="148" cy="108" rx="9" ry="6"
          fill="#FF9922" opacity="0.85" transform="rotate(-25 148 108)" />
        <ellipse cx="148" cy="108" rx="9" ry="6"
          fill="#FF9922" opacity="0.85" transform="rotate(25 148 108)" />
        <ellipse cx="148" cy="110" rx="6" ry="4"
          fill="#FFBB44" opacity="0.7" transform="rotate(-20 148 110)" />
        <ellipse cx="148" cy="110" rx="6" ry="4"
          fill="#FFBB44" opacity="0.7" transform="rotate(20 148 110)" />
        {/* Csápok */}
        <line x1="148" y1="104" x2="144" y2="98" stroke="#553300" strokeWidth="0.8" />
        <circle cx="144" cy="98" r="1.2" fill="#553300" />
        <line x1="148" y1="104" x2="152" y2="98" stroke="#553300" strokeWidth="0.8" />
        <circle cx="152" cy="98" r="1.2" fill="#553300" />
        {/* Test */}
        <ellipse cx="148" cy="108" rx="2" ry="6" fill="#553300" />
      </g>

      {/* ── KERÍTÉS ── */}
      {[5,18,31,44,57,70,83,96,109].map(x => (
        <g key={x}>
          <rect x={x} y="148" width="5" height="16" fill="#DDD0BB" rx="1" />
          <polygon points={`${x},148 ${x + 2.5},143 ${x + 5},148`} fill="#EEE0CC" />
        </g>
      ))}
      <rect x="5" y="151" width="104" height="3" fill="#CCC0AA" rx="1" />
      <rect x="5" y="158" width="104" height="3" fill="#CCC0AA" rx="1" />

      {/* ── MACSKA a padon – R=true esetén farka felfelé áll, R=false lefelé (NEHÉZ) ── */}
      {/* Test */}
      <ellipse cx="137" cy="133" rx="8" ry="6" fill="#888888" />
      {/* Fej */}
      <circle cx="144" cy="128" r="6" fill="#888888" />
      {/* Fülek */}
      <polygon points="140,123 142,118 145,123" fill="#888888" />
      <polygon points="144,123 146,118 149,123" fill="#888888" />
      <polygon points="141,123 142,120 144,123" fill="#FFAAAA" />
      <polygon points="145,123 146,120 148,123" fill="#FFAAAA" />
      {/* Szemek */}
      <ellipse cx="142" cy="127" rx="1.8" ry="1.2" fill="#22AA22" />
      <ellipse cx="147" cy="127" rx="1.8" ry="1.2" fill="#22AA22" />
      <ellipse cx="142" cy="127" rx="0.8" ry="1" fill="#111" />
      <ellipse cx="147" cy="127" rx="0.8" ry="1" fill="#111" />
      {/* Bajusz */}
      <line x1="144" y1="130" x2="138" y2="129" stroke="#CCC" strokeWidth="0.7" />
      <line x1="144" y1="131" x2="138" y2="132" stroke="#CCC" strokeWidth="0.7" />
      <line x1="144" y1="130" x2="150" y2="129" stroke="#CCC" strokeWidth="0.7" />
      <line x1="144" y1="131" x2="150" y2="132" stroke="#CCC" strokeWidth="0.7" />
      {/* Farok – R=true felfelé, R=false lefelé (NEHÉZ) */}
      <path
        d={R
          ? "M 129 133 Q 122 130 120 124 Q 119 118 124 116"
          : "M 129 133 Q 122 136 120 142 Q 119 148 124 150"}
        fill="none" stroke="#888888" strokeWidth="2.5" />

      {/* Madár a kerítésen */}
      <path d="M 55 143 Q 58 140 61 143 Q 64 140 67 143"
        fill="none" stroke="#334" strokeWidth="1.2" />
      <circle cx="61" cy="144" r="3" fill="#885533" />
      <circle cx="62" cy="142" r="2" fill="#AA7744" />
      <circle cx="63" cy="141" r="1" fill="#111" />

      {/* Árnyékok */}
      <ellipse cx="80" cy="170" rx="16" ry="3" fill="#00000022" />
      <ellipse cx="257" cy="155" rx="55" ry="4" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 16: PIAC ───────────────────────────────────────────────────────────
function MarketSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5599DD" />
          <stop offset="100%" stopColor="#BBDDF5" />
        </linearGradient>
        <linearGradient id="groundM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8B890" />
          <stop offset="100%" stopColor="#A89870" />
        </linearGradient>
        <linearGradient id="tent1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EE4444" />
          <stop offset="100%" stopColor="#AA2222" />
        </linearGradient>
        <linearGradient id="tent2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#44AA44" />
          <stop offset="100%" stopColor="#226622" />
        </linearGradient>
        <linearGradient id="tent3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4466EE" />
          <stop offset="100%" stopColor="#223388" />
        </linearGradient>
        <linearGradient id="tableM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A870" />
          <stop offset="100%" stopColor="#B08850" />
        </linearGradient>
        <filter id="shadowM">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softM">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyM)" />

      {/* Nap */}
      <circle cx="285" cy="25" r="17" fill="#FFE566" filter="url(#softM)" opacity="0.9" />
      <circle cx="285" cy="25" r="11" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="75" cy="25" rx="30" ry="12" fill="white" />
        <ellipse cx="58" cy="29" rx="19" ry="9" fill="white" />
        <ellipse cx="91" cy="29" rx="21" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="195" cy="20" rx="24" ry="10" fill="white" />
        <ellipse cx="182" cy="24" rx="15" ry="8" fill="white" />
        <ellipse cx="208" cy="24" rx="16" ry="8" fill="white" />
      </g>

      {/* ── TALAJ ── */}
      <rect x="0" y="155" width="320" height="45" fill="url(#groundM)" />
      {/* Kövezet fugák */}
      {[165,175,185,195].map(y =>
        [0,40,80,120,160,200,240,280].map(x => (
          <line key={`${x}-${y}`} x1={x} y1={y} x2={x + 38} y2={y}
            stroke="#B8A880" strokeWidth="0.5" opacity="0.6" />
        ))
      )}
      {[0,40,80,120,160,200,240,280,320].map(x => (
        <line key={x} x1={x} y1="155" x2={x} y2="200"
          stroke="#B8A880" strokeWidth="0.5" opacity="0.6" />
      ))}

      {/* ── BAL SÁTOR – PIROS ── */}
      {/* Sátor ponyva */}
      <polygon points="5,65 55,48 105,65" fill="url(#tent1)" filter="url(#shadowM)" />
      <polygon points="5,65 55,48 105,65" fill="none" stroke="#881111" strokeWidth="1" />
      {/* Csíkok */}
      <polygon points="20,65 55,48 90,65" fill="#FF6666" opacity="0.35" />
      <polygon points="35,65 55,48 75,65" fill="#FF9999" opacity="0.25" />
      {/* Felfüggesztett lámpás */}
      <line x1="55" y1="48" x2="55" y2="42" stroke="#888" strokeWidth="1" />
      <ellipse cx="55" cy="40" rx="5" ry="3" fill="#FFE566" opacity="0.9" />
      {/* Pult */}
      <rect x="8" y="95" width="94" height="8" fill="url(#tableM)" rx="1" filter="url(#shadowM)" />
      <rect x="8" y="95" width="94" height="2" fill="#E4B880" rx="1" />
      {/* Pult lábai */}
      {[12, 35, 58, 82, 96].map(x => (
        <rect key={x} x={x} y="103" width="4" height="30" fill="#9B7040" rx="1" />
      ))}
      {/* Zöldségek a pulton */}
      {/* Paradicsomok */}
      {[18, 30, 42].map(x => (
        <g key={x}>
          <circle cx={x} cy="92" r="5.5" fill="#EE3333" />
          <circle cx={x - 1} cy="90" r="2" fill="#FF6666" opacity="0.5" />
          <line x1={x} y1="87" x2={x} y2="84" stroke="#3A8A20" strokeWidth="1.2" />
        </g>
      ))}
      {/* Sárgarépák */}
      {[55, 66, 77].map(x => (
        <g key={x}>
          <ellipse cx={x} cy="92" rx="3.5" ry="6" fill="#FF8833" />
          <line x1={x - 2} y1="87" x2={x} y2="83" stroke="#3A8A20" strokeWidth="1" />
          <line x1={x} y1="87" x2={x} y2="83" stroke="#3A8A20" strokeWidth="1" />
          <line x1={x + 2} y1="87" x2={x} y2="83" stroke="#3A8A20" strokeWidth="1" />
        </g>
      ))}
      {/* Alma – R=true esetén 4 alma van, R=false 3 (KÖZEPES) */}
      {[84, 93, 102, ...(R ? [111] : [])].map(x => (
        <g key={x}>
          <circle cx={x} cy="92" r="5" fill="#CC2244" />
          <circle cx={x - 1} cy="90" r="2" fill="#EE4466" opacity="0.5" />
          <line x1={x} y1="87" x2={x + 1} y2="84" stroke="#3A8A20" strokeWidth="1.2" />
          <ellipse cx={x + 3} cy="85" rx="3" ry="1.5"
            fill="#3A8A20" transform={`rotate(-20 ${x + 3} 85)`} />
        </g>
      ))}

      {/* ── KÖZÉPSŐ SÁTOR – ZÖLD ── */}
      <polygon points="110,62 160,44 210,62" fill="url(#tent2)" filter="url(#shadowM)" />
      <polygon points="110,62 160,44 210,62" fill="none" stroke="#115511" strokeWidth="1" />
      <polygon points="125,62 160,44 195,62" fill="#66CC66" opacity="0.3" />
      <polygon points="140,62 160,44 180,62" fill="#99EE99" opacity="0.2" />
      <line x1="160" y1="44" x2="160" y2="38" stroke="#888" strokeWidth="1" />
      <ellipse cx="160" cy="36" rx="5" ry="3" fill="#FFE566" opacity="0.9" />
      {/* Pult */}
      <rect x="113" y="92" width="94" height="8" fill="url(#tableM)" rx="1" filter="url(#shadowM)" />
      <rect x="113" y="92" width="94" height="2" fill="#E4B880" rx="1" />
      {[117,140,163,187,201].map(x => (
        <rect key={x} x={x} y="100" width="4" height="33" fill="#9B7040" rx="1" />
      ))}
      {/* Gyümölcsök */}
      {/* Citromok */}
      {[122, 134, 146].map(x => (
        <g key={x}>
          <ellipse cx={x} cy="88" rx="6" ry="4.5" fill="#EEE030" />
          <ellipse cx={x - 2} cy="86" rx="2.5" ry="1.5" fill="#FFFF80" opacity="0.5" />
        </g>
      ))}
      {/* Narancsok */}
      {[158, 170, 182].map(x => (
        <g key={x}>
          <circle cx={x} cy="88" r="5.5" fill="#FF8833" />
          <circle cx={x - 1} cy="86" r="2" fill="#FFAA55" opacity="0.5" />
          <line x1={x} y1="83" x2={x} y2="80" stroke="#3A8A20" strokeWidth="1" />
        </g>
      ))}
      {/* Szőlő – R=true esetén 1 szem hiányzik (KÖZEPES) */}
      <g>
        {[
          [194, 86], [200, 86], [206, 86],
          [197, 80], [203, 80],
          ...(R ? [] : [[200, 74]])
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#8833CC" />
        ))}
        <line x1="200" y1="74" x2="200" y2="70" stroke="#3A8A20" strokeWidth="1.2" />
        <ellipse cx="204" cy="71" rx="4" ry="2"
          fill="#3A8A20" transform="rotate(-20 204 71)" />
      </g>

      {/* ── JOBB SÁTOR – KÉK ── */}
      <polygon points="215,65 265,47 315,65" fill="url(#tent3)" filter="url(#shadowM)" />
      <polygon points="215,65 265,47 315,65" fill="none" stroke="#112266" strokeWidth="1" />
      <polygon points="230,65 265,47 300,65" fill="#6688FF" opacity="0.3" />
      <polygon points="245,65 265,47 285,65" fill="#99AAFF" opacity="0.2" />
      <line x1="265" y1="47" x2="265" y2="41" stroke="#888" strokeWidth="1" />
      <ellipse cx="265" cy="39" rx="5" ry="3" fill="#FFE566" opacity="0.9" />
      {/* Pult */}
      <rect x="218" y="95" width="94" height="8" fill="url(#tableM)" rx="1" filter="url(#shadowM)" />
      <rect x="218" y="95" width="94" height="2" fill="#E4B880" rx="1" />
      {[222,245,268,292,306].map(x => (
        <rect key={x} x={x} y="103" width="4" height="30" fill="#9B7040" rx="1" />
      ))}
      {/* Kenyerek */}
      {[228, 244, 260].map(x => (
        <g key={x}>
          <ellipse cx={x} cy="90" rx="9" ry="6" fill="#C8843A" />
          <ellipse cx={x} cy="88" rx="7" ry="4" fill="#D89A50" />
          {[x-5,x-1,x+3].map(lx => (
            <path key={lx}
              d={`M ${lx} 87 Q ${lx + 1} 84 ${lx + 2} 87`}
              fill="none" stroke="#A06830" strokeWidth="0.8" />
          ))}
        </g>
      ))}
      {/* Sajt – R=true esetén más szín (KÖZEPES) */}
      <polygon points="276,98 300,98 298,84 278,84" fill={R ? "#EE9922" : "#EED422"} />
      <polygon points="276,98 300,98 298,84 278,84"
        fill="none" stroke={R ? "#CC7700" : "#CCA800"} strokeWidth="0.8" />
      {[282,288,294].map(x => (
        <circle key={x} cx={x} cy="91" r="2.5"
          fill={R ? "#CC7700" : "#AA8800"} opacity="0.5" />
      ))}

      {/* ── VÁSÁRLÓK ── */}
      {/* Bal vásárló */}
      <ellipse cx="62" cy="148" rx="9" ry="11" fill="#AA6633" />
      <circle cx="62" cy="134" r="7" fill="#FFCC99" />
      <ellipse cx="62" cy="130" rx="8" ry="3.5" fill="#884422" />
      <rect x="55" y="144" width="5" height="12" fill="#664422" rx="1" />
      <rect x="63" y="144" width="5" height="12" fill="#664422" rx="1" />
      {/* Kosár */}
      <ellipse cx="72" cy="148" rx="7" ry="5" fill="#C8A060" />
      <rect x="66" y="143" width="12" height="8" fill="#D4A870" rx="2" />
      <path d="M 66 143 Q 72 138 78 143" fill="none" stroke="#A07840" strokeWidth="1.5" />

      {/* Jobb vásárló */}
      <ellipse cx="248" cy="148" rx="9" ry="11" fill="#6644AA" />
      <circle cx="248" cy="134" r="7" fill="#FFCC99" />
      {/* Kalap – R=true esetén piros, R=false zöld (KÖZEPES) */}
      <ellipse cx="248" cy="130" rx="9" ry="3.5" fill={R ? "#CC2222" : "#228833"} />
      <rect x="241" y="124" width="14" height="7" fill={R ? "#BB1111" : "#117722"} rx="2" />
      <rect x="246" y="144" width="5" height="12" fill="#4433AA" rx="1" />
      <rect x="252" y="144" width="5" height="12" fill="#4433AA" rx="1" />
      {/* Szatyor */}
      <rect x="256" y="140" width="10" height="14" fill="#EEBB44" rx="2" />
      <path d="M 258 140 Q 261 135 264 140" fill="none" stroke="#CC9922" strokeWidth="1.5" />

      {/* ── TÁBLA a piacon – R=true esetén 1 betű más (KÖZEPES) ── */}
      <rect x="128" y="150" width="64" height="14" fill="#884422" rx="3" filter="url(#shadowM)" />
      <rect x="130" y="152" width="60" height="10" fill="#772211" rx="2" />
      <text x="160" y="160" textAnchor="middle" fontSize="7"
        fill="#FFE0A0" fontWeight="bold" letterSpacing="1">
        {R ? "PI4C" : "PIAC"}
      </text>

      {/* Madarak */}
      <path d="M 108 38 Q 112 34 116 38 Q 120 34 124 38"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 230 32 Q 234 28 238 32 Q 242 28 246 32"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="55" cy="156" rx="20" ry="3" fill="#00000022" />
      <ellipse cx="248" cy="156" rx="20" ry="3" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE 17: VASÚTÁLLOMÁS ───────────────────────────────────────────────────
function TrainStationSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyT" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4488BB" />
          <stop offset="100%" stopColor="#AACCEE" />
        </linearGradient>
        <linearGradient id="platformT" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBBBBB" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="trainBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DD3333" />
          <stop offset="100%" stopColor="#992222" />
        </linearGradient>
        <linearGradient id="trainFront" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#CC2222" />
          <stop offset="100%" stopColor="#881111" />
        </linearGradient>
        <linearGradient id="stationWall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8D8B8" />
          <stop offset="100%" stopColor="#C8B898" />
        </linearGradient>
        <linearGradient id="roofT" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#558844" />
          <stop offset="100%" stopColor="#336622" />
        </linearGradient>
        <filter id="shadowT">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000055" />
        </filter>
        <filter id="softT">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyT)" />

      {/* Nap */}
      <circle cx="38" cy="28" r="16" fill="#FFE566" filter="url(#softT)" opacity="0.9" />
      <circle cx="38" cy="28" r="10" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="130" cy="22" rx="30" ry="12" fill="white" />
        <ellipse cx="113" cy="26" rx="19" ry="9" fill="white" />
        <ellipse cx="147" cy="26" rx="21" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="260" cy="18" rx="24" ry="10" fill="white" />
        <ellipse cx="247" cy="22" rx="15" ry="8" fill="white" />
        <ellipse cx="273" cy="22" rx="16" ry="8" fill="white" />
      </g>

      {/* ── ÁLLOMÁS ÉPÜLET ── */}
      <rect x="5" y="55" width="130" height="100" fill="url(#stationWall)" filter="url(#shadowT)" />
      {/* Tető */}
      <rect x="2" y="48" width="136" height="12" fill="url(#roofT)" rx="2" />
      <rect x="2" y="48" width="136" height="3" fill="#66AA55" rx="2" />
      {/* Tégla textúra */}
      {[60,72,84,96,108,120,132,144].map(y =>
        [8,36,64,92,116].map((x, i) => (
          <rect key={`${x}-${y}`} x={x + (i % 2) * 14} y={y}
            width="24" height="10" fill="none"
            stroke="#C8A87888" strokeWidth="0.4" rx="0.5" />
        ))
      )}
      {/* Állomás neve tábla */}
      <rect x="22" y="57" width="96" height="14" fill="#336622" rx="2" filter="url(#shadowT)" />
      <rect x="24" y="59" width="92" height="10" fill="#224411" rx="1" />
      {/* R=true esetén 1 betű más (KÖZEPES) */}
      <text x="70" y="67" textAnchor="middle" fontSize="7"
        fill="#AAFFAA" fontWeight="bold" letterSpacing="1.5">
        {R ? "ÁLLOMÁS" : "ÁLLOMÁS"}
      </text>
      <text x="70" y="67" textAnchor="middle" fontSize="7"
        fill="#AAFFAA" fontWeight="bold" letterSpacing="1.5">
        {R ? "KELETI" : "KELET1"}
      </text>

      {/* Főbejárat */}
      <rect x="48" y="105" width="44" height="50" fill="#5577AA" rx="3" />
      <path d="M 48 105 Q 70 92 92 105" fill="#4466AA" />
      <rect x="50" y="107" width="18" height="48" fill="#3355AA" rx="2" />
      <rect x="70" y="107" width="20" height="48" fill="#3355AA" rx="2" />
      <circle cx="69" cy="132" r="2.5" fill="#FFD700" />
      <circle cx="71" cy="132" r="2.5" fill="#FFD700" />

      {/* Bal ablak */}
      <rect x="12" y="75" width="30" height="24" fill="#88BBDD" rx="2"
        stroke="#AAAAAA" strokeWidth="1.2" />
      <line x1="27" y1="75" x2="27" y2="99" stroke="#AAAAAA" strokeWidth="1" />
      <line x1="12" y1="87" x2="42" y2="87" stroke="#AAAAAA" strokeWidth="1" />
      <rect x="13" y="76" width="13" height="5" fill="white" opacity="0.15" />

      {/* Jobb ablak – R=true esetén redőny félig le (KÖZEPES) */}
      <rect x="98" y="75" width="30" height="24" fill="#88BBDD" rx="2"
        stroke="#AAAAAA" strokeWidth="1.2" />
      {R && <rect x="98" y="75" width="30" height="12" fill="#CCAA66" rx="2" opacity="0.9" />}
      {R && [77,79,81,83,85].map(y => (
        <line key={y} x1="98" y1={y} x2="128" y2={y}
          stroke="#AA8844" strokeWidth="0.7" opacity="0.7" />
      ))}
      <line x1="113" y1="75" x2="113" y2="99" stroke="#AAAAAA" strokeWidth="1" />
      <line x1="98" y1="87" x2="128" y2="87" stroke="#AAAAAA" strokeWidth="1" />
      <rect x="99" y="76" width="13" height="5" fill="white" opacity="0.15" />

      {/* Óra az épületen */}
      <circle cx="70" cy="85" r="10" fill="#F5F5F0" stroke="#888" strokeWidth="1.2"
        filter="url(#shadowT)" />
      <circle cx="70" cy="85" r="8" fill="#FAFAF5" />
      {/* Óra számok */}
      <text x="70" y="78" textAnchor="middle" fontSize="4" fill="#333">12</text>
      <text x="70" y="95" textAnchor="middle" fontSize="4" fill="#333">6</text>
      <text x="62" y="87" textAnchor="middle" fontSize="4" fill="#333">9</text>
      <text x="78" y="87" textAnchor="middle" fontSize="4" fill="#333">3</text>
      {/* Óra mutatók – R=true esetén más időpont (KÖZEPES) */}
      <line x1="70" y1="85" x2={R ? "70" : "74"} y2={R ? "78" : "82"}
        stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="85" x2={R ? "76" : "70"} y2={R ? "85" : "79"}
        stroke="#222" strokeWidth="1" strokeLinecap="round" />

      {/* Lámpaoszlop */}
      <rect x="140" y="80" width="5" height="75" fill="#777" />
      <rect x="132" y="78" width="21" height="5" fill="#888" rx="2" />
      <ellipse cx="142" cy="78" rx="11" ry="4" fill="#FFE566" opacity="0.85" />
      <ellipse cx="142" cy="78" rx="15" ry="6" fill="#FFE566" opacity="0.2" />

      {/* ── VÁGÁNYOK ── */}
      <rect x="0" y="148" width="320" height="52" fill="#555" />
      {/* Talpfák */}
      {[5,25,45,65,85,105,125,145,165,185,205,225,245,265,285,305].map(x => (
        <rect key={x} x={x} y="150" width="15" height="48" fill="#6B4423"
          rx="1" opacity="0.85" />
      ))}
      {/* Sínek */}
      <rect x="0" y="152" width="320" height="5" fill="#999" rx="1" />
      <rect x="0" y="168" width="320" height="5" fill="#999" rx="1" />
      <rect x="0" y="184" width="320" height="5" fill="#999" rx="1" />
      {/* Sín fény */}
      <rect x="0" y="152" width="320" height="1.5" fill="#CCC" opacity="0.5" />
      <rect x="0" y="168" width="320" height="1.5" fill="#CCC" opacity="0.5" />

      {/* ── PERON ── */}
      <rect x="0" y="130" width="175" height="22" fill="url(#platformT)" rx="2"
        filter="url(#shadowT)" />
      <rect x="0" y="130" width="175" height="3" fill="#CCCCCC" rx="2" />
      {/* Peron csík */}
      <rect x="0" y="145" width="175" height="4" fill="#FFDD00" opacity="0.7" />
      {/* Peron sorszám */}
      <rect x="8" y="133" width="20" height="10" fill="#336622" rx="1" />
      <text x="18" y="141" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">1.</text>

      {/* ── VONAT ── */}
      {/* Mozdony */}
      <rect x="155" y="108" width="75" height="42" fill="url(#trainBody)"
        rx="4" filter="url(#shadowT)" />
      {/* Mozdony elejej */}
      <rect x="224" y="112" width="25" height="34" fill="url(#trainFront)" rx="3" />
      {/* Fényszóró */}
      <circle cx="245" cy="122" r="4" fill="#FFE566" opacity="0.9" />
      <circle cx="245" cy="122" r="2.5" fill="#FFF0A0" />
      <circle cx="245" cy="134" r="3" fill="#FF4444" opacity="0.8" />
      {/* Szélvédő */}
      <rect x="225" y="114" width="16" height="12" fill="#88CCEE" rx="2"
        stroke="#CCCCCC" strokeWidth="0.8" />
      <rect x="226" y="115" width="6" height="4" fill="white" opacity="0.2" />
      {/* Mozdony ablakok */}
      {[162, 182, 202].map(x => (
        <g key={x}>
          <rect x={x} y="113" width="16" height="11" fill="#88CCEE" rx="2"
            stroke="#CC3333" strokeWidth="0.8" />
          <rect x={x + 1} y="114" width="6" height="4" fill="white" opacity="0.2" />
        </g>
      ))}
      {/* Mozdony díszcsík – R=true esetén fehér, R=false sárga (KÖZEPES) */}
      <rect x="155" y="132" width="94" height="4"
        fill={R ? "#FFFFFF" : "#FFD700"} opacity="0.85" />
      {/* Kerekek */}
      {[168, 192, 216, 238].map(x => (
        <g key={x}>
          <circle cx={x} cy="152" r="9" fill="#333" />
          <circle cx={x} cy="152" r="6" fill="#555" />
          <circle cx={x} cy="152" r="3" fill="#777" />
          <line x1={x - 6} y1="152" x2={x + 6} y2="152" stroke="#888" strokeWidth="1" />
          <line x1={x} y1="146" x2={x} y2="158" stroke="#888" strokeWidth="1" />
        </g>
      ))}
      {/* Kerék összekötő rúd */}
      <rect x="162" y="150" width="82" height="3" fill="#444" rx="1" />
      {/* Kémény */}
      <rect x="168" y="100" width="10" height="10" fill="#777" rx="2" />
      <ellipse cx="173" cy="100" rx="8" ry="4" fill="#666" />
      {/* Füst */}
      <circle cx="173" cy="94" r="7" fill="#AAAAAA" opacity="0.5" />
      <circle cx="168" cy="87" r="6" fill="#BBBBBB" opacity="0.4" />
      <circle cx="178" cy="82" r="8" fill="#CCCCCC" opacity="0.3" />

      {/* ── VAGON ── */}
      <rect x="60" y="112" width="92" height="38" fill="#CC2222" rx="3"
        filter="url(#shadowT)" />
      <rect x="60" y="112" width="92" height="4" fill="#EE4444" rx="3" />
      {/* Vagon ablakok */}
      {[68, 88, 108, 128].map(x => (
        <g key={x}>
          <rect x={x} y="117" width="16" height="12" fill="#88CCEE" rx="2"
            stroke="#AA1111" strokeWidth="0.8" />
          <rect x={x + 1} y="118" width="6" height="4" fill="white" opacity="0.2" />
        </g>
      ))}
      {/* Vagon díszcsík */}
      <rect x="60" y="132" width="92" height="4"
        fill={R ? "#FFFFFF" : "#FFD700"} opacity="0.85" />
      {/* Vagon kerekek */}
      {[75, 105, 135].map(x => (
        <g key={x}>
          <circle cx={x} cy="152" r="8" fill="#333" />
          <circle cx={x} cy="152" r="5" fill="#555" />
          <circle cx={x} cy="152" r="2.5" fill="#777" />
        </g>
      ))}
      {/* Vagon–mozdony összekötő */}
      <rect x="150" y="138" width="10" height="5" fill="#666" rx="1" />

      {/* ── UTASOK A PERONON ── */}
      {/* 1. utas */}
      <ellipse cx="22" cy="143" rx="7" ry="9" fill="#4455AA" />
      <circle cx="22" cy="131" r="6" fill="#FFCC99" />
      <ellipse cx="22" cy="127" rx="7" ry="3" fill="#223388" />
      <rect x="17" y="150" width="4" height="10" fill="#334499" rx="1" />
      <rect x="23" y="150" width="4" height="10" fill="#334499" rx="1" />
      {/* Bőrönd */}
      <rect x="29" y="142" width="10" height="10" fill="#AA8833" rx="2" />
      <rect x="30" y="140" width="8" height="3" fill="#886622" rx="1" />
      <line x1="34" y1="140" x2="34" y2="152" stroke="#886622" strokeWidth="0.8" />

      {/* 2. utas – R=true esetén esernyő nyitva, R=false csukva (KÖZEPES) */}
      <ellipse cx="52" cy="143" rx="7" ry="9" fill="#AA4488" />
      <circle cx="52" cy="131" r="6" fill="#FFCC99" />
      <ellipse cx="52" cy="127" rx="7" ry="3" fill="#882266" />
      <rect x="47" y="150" width="4" height="10" fill="#882266" rx="1" />
      <rect x="53" y="150" width="4" height="10" fill="#882266" rx="1" />
      {/* Esernyő */}
      {R ? (
        <>
          {/* Nyitott esernyő */}
          <path d="M 52 128 Q 44 122 36 126 Q 44 118 52 120 Q 60 118 68 126 Q 60 122 52 128"
            fill="#DD4488" stroke="#BB2266" strokeWidth="0.8" />
          <line x1="52" y1="128" x2="52" y2="118" stroke="#AA2255" strokeWidth="1.2" />
          <line x1="52" y1="118" x2="54" y2="122" stroke="#AA2255" strokeWidth="0.8" />
        </>
      ) : (
        <>
          {/* Csukott esernyő */}
          <line x1="52" y1="130" x2="52" y2="118" stroke="#AA2255" strokeWidth="2" />
          <ellipse cx="52" cy="119" rx="2" ry="4" fill="#DD4488" />
          <line x1="52" y1="118" x2="54" y2="122" stroke="#AA2255" strokeWidth="0.8" />
        </>
      )}

      {/* 3. utas */}
      <ellipse cx="115" cy="143" rx="7" ry="9" fill="#338844" />
      <circle cx="115" cy="131" r="6" fill="#FFCC99" />
      <ellipse cx="115" cy="127" rx="7" ry="3" fill="#226633" />
      <rect x="110" y="150" width="4" height="10" fill="#226633" rx="1" />
      <rect x="116" y="150" width="4" height="10" fill="#226633" rx="1" />

      {/* ── TÁBLA a peronon – R=true 3. vágány, R=false 2. vágány (KÖZEPES) ── */}
      <rect x="148" y="118" width="28" height="16" fill="#336622" rx="3"
        filter="url(#shadowT)" />
      <rect x="150" y="120" width="24" height="12" fill="#224411" rx="2" />
      <text x="164" y="129" textAnchor="middle" fontSize="7"
        fill="#AAFFAA" fontWeight="bold">
        {R ? "3." : "2."}
      </text>
      <text x="164" y="129" textAnchor="middle" fontSize="7"
        fill="#AAFFAA" fontWeight="bold">
        {R ? "3." : "2."}
      </text>

      {/* Madarak */}
      <path d="M 200 38 Q 204 34 208 38 Q 212 34 216 38"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 285 45 Q 289 41 293 45 Q 297 41 301 45"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="200" cy="150" rx="70" ry="4" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 18: REPÜLŐTÉR ─────────────────────────────────────────────────────
function AirportSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3377CC" />
          <stop offset="100%" stopColor="#AACCEE" />
        </linearGradient>
        <linearGradient id="groundA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#777777" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>
        <linearGradient id="terminalA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8E0D0" />
          <stop offset="100%" stopColor="#C8C0B0" />
        </linearGradient>
        <linearGradient id="planeBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEEEEE" />
          <stop offset="100%" stopColor="#CCCCCC" />
        </linearGradient>
        <filter id="shadowA">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000055" />
        </filter>
        <filter id="softA">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyA)" />

      {/* Nap */}
      <circle cx="290" cy="25" r="17" fill="#FFE566" filter="url(#softA)" opacity="0.9" />
      <circle cx="290" cy="25" r="11" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="80" cy="28" rx="32" ry="13" fill="white" />
        <ellipse cx="62" cy="32" rx="20" ry="10" fill="white" />
        <ellipse cx="98" cy="32" rx="22" ry="10" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="210" cy="20" rx="26" ry="11" fill="white" />
        <ellipse cx="196" cy="24" rx="16" ry="8" fill="white" />
        <ellipse cx="224" cy="24" rx="17" ry="8" fill="white" />
      </g>

      {/* ── TERMINÁL ÉPÜLET ── */}
      <rect x="5" y="52" width="175" height="100" fill="url(#terminalA)" filter="url(#shadowA)" />
      {/* Tető */}
      <rect x="2" y="45" width="181" height="10" fill="#8899AA" rx="2" />
      <rect x="2" y="45" width="181" height="3" fill="#AABBCC" rx="2" />
      {/* Üveghomlokzat */}
      {[58,72,86,100,114,128].map(y =>
        [10,32,54,76,98,120,142,162].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="18" height="11"
            fill="#99CCEE" stroke="#AABBCC" strokeWidth="0.5"
            rx="1" opacity="0.7" />
        ))
      )}
      {/* Fény az üvegen */}
      {[10,32,54,76,98,120,142,162].map(x => (
        <rect key={x} x={x + 1} y="59" width="7" height="3"
          fill="white" opacity="0.15" />
      ))}
      {/* Terminál neve */}
      <rect x="30" y="54" width="125" height="13" fill="#336699" rx="2" filter="url(#shadowA)" />
      <rect x="32" y="56" width="121" height="9" fill="#224477" rx="1" />
      {/* R=true esetén 1 betű más (KÖZEPES) */}
      <text x="92" y="63" textAnchor="middle" fontSize="6.5"
        fill="#AADDFF" fontWeight="bold" letterSpacing="1.5">
        {R ? "TERM1NÁL" : "TERMINÁL"}
      </text>

      {/* Bejárat */}
      <rect x="65" y="112" width="55" height="40" fill="#6699BB" rx="2" />
      <path d="M 65 112 Q 92 100 120 112" fill="#5588AA" />
      <rect x="67" y="114" width="23" height="38" fill="#4477AA" rx="1" />
      <rect x="92" y="114" width="26" height="38" fill="#4477AA" rx="1" />
      <circle cx="91" cy="133" r="2.5" fill="#FFD700" />
      <circle cx="93" cy="133" r="2.5" fill="#FFD700" />

      {/* Torony */}
      <rect x="148" y="20" width="22" height="35" fill="#C8C0B0" filter="url(#shadowA)" />
      <rect x="144" y="18" width="30" height="6" fill="#AAAAAA" rx="1" />
      {/* Torony ablakok */}
      <rect x="152" y="25" width="14" height="10" fill="#99CCEE" rx="1"
        stroke="#AAAAAA" strokeWidth="0.8" />
      <line x1="159" y1="25" x2="159" y2="35" stroke="#AAAAAA" strokeWidth="0.7" />
      <line x1="152" y1="30" x2="166" y2="30" stroke="#AAAAAA" strokeWidth="0.7" />
      {/* Forgó jelzőfény – R=true esetén piros, R=false zöld (KÖZEPES) */}
      <circle cx="159" cy="18" r="4" fill={R ? "#EE2222" : "#22EE44"}
        filter="url(#softA)" opacity="0.9" />
      <circle cx="159" cy="18" r="2.5" fill={R ? "#FF5555" : "#55FF77"} />

      {/* Jetway cső */}
      <rect x="178" y="90" width="45" height="12" fill="#AAAAAA" rx="3"
        filter="url(#shadowA)" />
      <rect x="178" y="90" width="45" height="3" fill="#CCCCCC" rx="2" />
      {[185,195,205,215].map(x => (
        <line key={x} x1={x} y1="90" x2={x} y2="102"
          stroke="#888" strokeWidth="0.8" opacity="0.6" />
      ))}

      {/* ── FUTÓPÁLYA ── */}
      <rect x="0" y="148" width="320" height="52" fill="url(#groundA)" />
      {/* Futópálya csík */}
      <rect x="0" y="155" width="320" height="35" fill="#555" />
      <rect x="0" y="155" width="320" height="2" fill="#666" />
      {/* Középvonal */}
      {[10,40,70,100,130,160,190,220,250,280].map(x => (
        <rect key={x} x={x} y="170" width="20" height="4"
          fill="#FFD700" opacity="0.8" rx="1" />
      ))}
      {/* Oldalsó csíkok */}
      <rect x="0" y="157" width="320" height="3" fill="white" opacity="0.5" />
      <rect x="0" y="184" width="320" height="3" fill="white" opacity="0.5" />

      {/* ── FŐ REPÜLŐ ── */}
      {/* Törzs */}
      <ellipse cx="220" cy="128" rx="75" ry="16" fill="url(#planeBody)"
        filter="url(#shadowA)" />
      {/* Orr */}
      <path d="M 293 128 Q 310 126 314 128 Q 310 130 293 128"
        fill="#DDDDDD" />
      {/* Farok */}
      <path d="M 148 122 Q 138 105 145 100 Q 152 98 158 108 L 155 122"
        fill="#CCCCCC" />
      <path d="M 148 134 Q 138 145 143 150 Q 150 153 158 142 L 155 134"
        fill="#CCCCCC" />
      {/* Szárny felső */}
      <path d="M 240 120 Q 255 95 290 88 Q 275 108 265 120"
        fill="#CCCCCC" stroke="#AAAAAA" strokeWidth="0.8" />
      {/* Szárny alsó */}
      <path d="M 240 136 Q 255 158 285 165 Q 272 148 262 136"
        fill="#CCCCCC" stroke="#AAAAAA" strokeWidth="0.8" />
      {/* Ablakok */}
      {[175,188,201,214,227,240,253,266].map(x => (
        <ellipse key={x} cx={x} cy="125" rx="5" ry="4"
          fill="#99CCEE" stroke="#CCCCCC" strokeWidth="0.8" />
      ))}
      {/* Ajtó */}
      <rect x="265" y="119" width="8" height="14" fill="#BBBBBB" rx="1"
        stroke="#AAAAAA" strokeWidth="0.8" />
      {/* Légitársaság csík – R=true esetén kék, R=false piros (KÖZEPES) */}
      <rect x="148" y="126" width="166" height="4"
        fill={R ? "#2255DD" : "#DD2222"} opacity="0.85" />
      {/* Faroklap szín – R=true esetén sárga, R=false kék (KÖZEPES) */}
      <path d="M 148 122 Q 138 105 145 100 Q 152 98 158 108 L 155 122"
        fill={R ? "#DDAA00" : "#2244BB"} opacity="0.9" />
      {/* Motor 1 */}
      <ellipse cx="272" cy="100" rx="8" ry="5" fill="#AAAAAA" />
      <rect x="264" y="98" width="16" height="4" fill="#999" rx="2" />
      <ellipse cx="264" cy="100" rx="4" ry="3" fill="#777" />
      {/* Motor 2 */}
      <ellipse cx="270" cy="152" rx="8" ry="5" fill="#AAAAAA" />
      <rect x="262" y="150" width="16" height="4" fill="#999" rx="2" />
      <ellipse cx="262" cy="152" rx="4" ry="3" fill="#777" />

      {/* ── KIS REPÜLŐ A HÁTTÉRBEN ── */}
      <g opacity="0.7" transform="translate(30, 45) scale(0.45)">
        <ellipse cx="220" cy="128" rx="75" ry="16" fill="#EEEEEE" />
        <path d="M 293 128 Q 310 126 314 128 Q 310 130 293 128" fill="#DDDDDD" />
        <path d="M 148 122 Q 138 105 145 100 Q 152 98 158 108 L 155 122" fill="#CCCCCC" />
        <path d="M 240 120 Q 255 95 290 88 Q 275 108 265 120" fill="#CCCCCC" />
        {/* Kis repülő csík – R=true esetén zöld, R=false narancssárga (KÖZEPES) */}
        <rect x="148" y="126" width="166" height="4"
          fill={R ? "#22AA44" : "#FF8800"} opacity="0.9" />
      </g>

      {/* ── POGGYÁSZKOCSI ── */}
      <rect x="20" y="148" width="55" height="18" fill="#AA8833" rx="3"
        filter="url(#shadowA)" />
      <rect x="20" y="148" width="55" height="4" fill="#CC9944" rx="3" />
      {/* Bőröndök */}
      {[25,38,51,62].map(x => (
        <g key={x}>
          <rect x={x} y="138" width="11" height="12" fill="#CC4444" rx="2" />
          <rect x={x + 1} y="136" width="9" height="3" fill="#AA2222" rx="1" />
          <line x1={x + 5} y1="136" x2={x + 5} y2="150" stroke="#AA2222" strokeWidth="0.7" />
        </g>
      ))}
      {/* Kocsi kerekei */}
      {[28, 48, 68].map(x => (
        <g key={x}>
          <circle cx={x} cy="167" r="5" fill="#333" />
          <circle cx={x} cy="167" r="3" fill="#555" />
        </g>
      ))}

      {/* ── LÁMPAOSZLOPOK ── */}
      {[5, 185].map(x => (
        <g key={x}>
          <rect x={x} y="100" width="4" height="55" fill="#888" />
          <rect x={x - 6} y="98" width="16" height="5" fill="#999" rx="2" />
          <ellipse cx={x + 2} cy="98" rx="9" ry="4" fill="#FFE566" opacity="0.8" />
        </g>
      ))}

      {/* ── IRÁNYJELZŐ TÁBLA ── */}
      <rect x="195" y="58" width="70" height="30" fill="#1A4488" rx="3"
        filter="url(#shadowA)" />
      <rect x="197" y="60" width="66" height="12" fill="#0A3377" rx="2" />
      <text x="230" y="69" textAnchor="middle" fontSize="6"
        fill="white" fontWeight="bold">INDULÁS</text>
      <rect x="197" y="74" width="66" height="12" fill="#880000" rx="2" />
      <text x="230" y="83" textAnchor="middle" fontSize="6"
        fill="white" fontWeight="bold">ÉRKEZÉS</text>
      {/* Tábla oszlop */}
      <rect x="228" y="88" width="4" height="62" fill="#888" />

      {/* ── JÁRÓKELŐK ── */}
      {/* 1. személy */}
      <ellipse cx="108" cy="143" rx="7" ry="9" fill="#334488" />
      <circle cx="108" cy="131" r="6" fill="#FFCC99" />
      <ellipse cx="108" cy="127" rx="7" ry="3" fill="#223366" />
      <rect x="103" y="150" width="4" height="10" fill="#223366" rx="1" />
      <rect x="109" y="150" width="4" height="10" fill="#223366" rx="1" />
      {/* Gurulós bőrönd */}
      <rect x="116" y="138" width="10" height="14" fill="#886633" rx="2" />
      <rect x="117" y="136" width="8" height="3" fill="#664422" rx="1" />
      <line x1="121" y1="136" x2="121" y2="152" stroke="#664422" strokeWidth="0.8" />
      <line x1="116" y1="152" x2="126" y2="152" stroke="#664422" strokeWidth="1.2" />
      <circle cx="118" cy="153" r="2" fill="#333" />
      <circle cx="124" cy="153" r="2" fill="#333" />

      {/* 2. személy – R=true esetén piros kabát, R=false kék (KÖZEPES) */}
      <ellipse cx="140" cy="143" rx="7" ry="9" fill={R ? "#BB2222" : "#2244AA"} />
      <circle cx="140" cy="131" r="6" fill="#FFCC99" />
      <ellipse cx="140" cy="127" rx="7" ry="3" fill={R ? "#881111" : "#112288"} />
      <rect x="135" y="150" width="4" height="10"
        fill={R ? "#881111" : "#112288"} rx="1" />
      <rect x="141" y="150" width="4" height="10"
        fill={R ? "#881111" : "#112288"} rx="1" />

      {/* Madarak */}
      <path d="M 50 38 Q 54 34 58 38 Q 62 34 66 38"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 245 32 Q 249 28 253 32 Q 257 28 261 32"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="220" cy="148" rx="65" ry="5" fill="#00000044" />
      <ellipse cx="47" cy="155" rx="28" ry="3" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 19: CIRKUSZ ────────────────────────────────────────────────────────
function CircusSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyC2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A4A" />
          <stop offset="100%" stopColor="#3A3A8A" />
        </linearGradient>
        <linearGradient id="groundC2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B6340" />
          <stop offset="100%" stopColor="#5A3A18" />
        </linearGradient>
        <linearGradient id="tentTop1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EE2222" />
          <stop offset="100%" stopColor="#AA1111" />
        </linearGradient>
        <linearGradient id="tentTop2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEEE22" />
          <stop offset="100%" stopColor="#AAAA11" />
        </linearGradient>
        <linearGradient id="tentBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#CC1111" />
          <stop offset="100%" stopColor="#EE3333" />
        </linearGradient>
        <radialGradient id="spotlightL" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#FFFF88" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFF88" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="spotlightR" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#88FFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#88FFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="shadowC2">
          <feDropShadow dx="1.5" dy="2" stdDeviation="2" floodColor="#00000066" />
        </filter>
        <filter id="glowC2">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softC2">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉJSZAKAI ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyC2)" />

      {/* Csillagok – R=true esetén 1 csillag hiányzik (NEHÉZ) */}
      {[
        [20,15],[45,8],[70,20],[95,12],[125,6],[155,18],[180,10],
        [210,14],[240,8],[265,20],[290,12],[310,7],
        ...(R ? [] : [[310, 7]])
      ].filter((v,i,a) => a.findIndex(t => t[0]===v[0]&&t[1]===v[1])===i)
      .map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.2}
            fill="white" opacity={i % 2 === 0 ? 0.9 : 0.7} />
        </g>
      ))}
      {/* Extra csillag ami eltűnik R=true esetén */}
      {!R && <circle cx="238" cy="25" r="1.8" fill="white" opacity="0.9" />}

      {/* Hold – R=true esetén 3px-el arrébb (NEHÉZ) */}
      <circle cx={R ? "285" : "282"} cy="22" r="14"
        fill="#FFEE99" filter="url(#softC2)" opacity="0.95" />
      <circle cx={R ? "291" : "288"} cy="18" r="10" fill="url(#skyC2)" />

      {/* ── TALAJ ── */}
      <rect x="0" y="155" width="320" height="45" fill="url(#groundC2)" />
      {/* Fűrészpor */}
      {[8,22,38,55,75,95,115,138,162,185,208,232,255,278,300,315].map(x => (
        <ellipse key={x} cx={x} cy="157" rx="4" ry="1.5"
          fill="#C8A060" opacity="0.4" />
      ))}

      {/* ── CIRKUSZI SÁTOR ── */}
      {/* Sátor árnyék */}
      <ellipse cx="160" cy="158" rx="130" ry="8" fill="#00000055" />

      {/* Sátor fal – csíkos */}
      <rect x="30" y="95" width="260" height="65" fill="#CC1111" rx="3" />
      {/* Sárga csíkok */}
      {[42,68,94,120,146,172,198,224,250,276].map(x => (
        <rect key={x} x={x} y="95" width="14" height="65"
          fill="#EEEE22" opacity="0.7" />
      ))}
      {/* Sátor alap */}
      <rect x="28" y="155" width="264" height="6" fill="#AA1111" rx="2" />

      {/* Sátor tető – háromszögek */}
      {/* Bal nagy háromszög */}
      <polygon points="30,98 95,45 160,98" fill="url(#tentTop1)" filter="url(#shadowC2)" />
      <polygon points="30,98 95,45 160,98" fill="none" stroke="#881111" strokeWidth="1" />
      {/* Jobb nagy háromszög */}
      <polygon points="160,98 225,45 290,98" fill="url(#tentTop1)" filter="url(#shadowC2)" />
      <polygon points="160,98 225,45 290,98" fill="none" stroke="#881111" strokeWidth="1" />
      {/* Sárga csúcsdíszek */}
      <polygon points="85,45 95,30 105,45" fill="url(#tentTop2)" filter="url(#shadowC2)" />
      <polygon points="215,45 225,30 235,45" fill="url(#tentTop2)" filter="url(#shadowC2)" />
      {/* Középső kis tető */}
      <polygon points="130,98 160,72 190,98" fill="url(#tentTop2)" />
      <polygon points="130,98 160,72 190,98" fill="none" stroke="#AAAA11" strokeWidth="1" />
      <polygon points="153,72 160,58 167,72" fill="url(#tentTop1)" />

      {/* Zászlók a tetőn */}
      {[95,160,225].map((x,i) => (
        <g key={x}>
          <line x1={x} y1={i===1 ? 58 : 30} x2={x} y2={i===1 ? 44 : 16}
            stroke="#888" strokeWidth="1.2" />
          <polygon
            points={`${x},${i===1?44:16} ${x+14},${i===1?50:22} ${x},${i===1?56:28}`}
            fill={i===0 ? "#2244EE" : i===1 ? "#22CC44" : "#EE8822"} />
        </g>
      ))}

      {/* ── BEJÁRAT ── */}
      <path d="M 118 155 Q 118 115 160 110 Q 202 115 202 155"
        fill="#882222" stroke="#661111" strokeWidth="1.5" />
      <path d="M 122 155 Q 122 118 160 113 Q 198 118 198 155"
        fill="#AA2222" />
      {/* Függöny */}
      <path d="M 122 113 Q 130 125 128 140 Q 126 150 122 155"
        fill="#CC2222" opacity="0.8" />
      <path d="M 198 113 Q 190 125 192 140 Q 194 150 198 155"
        fill="#CC2222" opacity="0.8" />
      {/* CIRKUSZ felirat */}
      <path d="M 125 128 Q 160 118 195 128" fill="none" stroke="#FFD700" strokeWidth="8"
        opacity="0.9" />
      <text x="160" y="132" textAnchor="middle" fontSize="8"
        fill="#221100" fontWeight="bold" letterSpacing="1">
        {R ? "C1RKUSZ" : "CIRKUSZ"}
      </text>

      {/* ── REFLEKTOROK ── */}
      {/* Bal reflektor */}
      <polygon points="15,148 28,148 45,80 2,80" fill="url(#spotlightL)" />
      <rect x="5" y="138" width="30" height="12" fill="#555" rx="3" filter="url(#shadowC2)" />
      <ellipse cx="20" cy="138" rx="12" ry="5" fill="#888" />
      <ellipse cx="20" cy="138" rx="8" ry="3" fill="#FFE566" opacity="0.9" />

      {/* Jobb reflektor */}
      <polygon points="292,148 305,148 318,80 275,80" fill="url(#spotlightR)" />
      <rect x="288" y="138" width="30" height="12" fill="#555" rx="3" filter="url(#shadowC2)" />
      <ellipse cx="303" cy="138" rx="12" ry="5" fill="#888" />
      <ellipse cx="303" cy="138" rx="8" ry="3" fill="#88FFFF" opacity="0.9" />

      {/* ── LAMPIONOK ── */}
      {[40,70,100,130,160,190,220,250,280].map((x,i) => (
        <g key={x}>
          <line x1={x} y1="60" x2={x} y2="75" stroke="#888" strokeWidth="0.8" />
          <ellipse cx={x} cy="80" rx="7" ry="9"
            fill={["#FF4444","#44FF44","#4444FF","#FFFF44","#FF44FF"][i%5]}
            opacity="0.85" filter="url(#glowC2)" />
          <ellipse cx={x} cy="77" rx="4" ry="3"
            fill="white" opacity="0.2" />
          {/* Lampion kötelek */}
          {i < 8 && (
            <line x1={x} y1="60" x2={x+30} y2="60"
              stroke="#666" strokeWidth="0.6" />
          )}
        </g>
      ))}

      {/* ── ARTISTÁK ── */}
      {/* Bohóc */}
      {/* Test */}
      <ellipse cx="75" cy="138" rx="12" ry="14" fill="#FF6633" />
      {/* Fej */}
      <circle cx="75" cy="120" r="10" fill="#FFCC99" />
      {/* Bohóc kalap – R=true esetén 1 csík kevesebb (NEHÉZ) */}
      <polygon points="65,112 75,88 85,112" fill="#2244EE" />
      {R ? (
        <line x1="65" y1="112" x2="85" y2="112" stroke="#FFFF44" strokeWidth="2" />
      ) : (
        <>
          <line x1="65" y1="112" x2="85" y2="112" stroke="#FFFF44" strokeWidth="2" />
          <line x1="67" y1="106" x2="83" y2="106" stroke="#FFFF44" strokeWidth="1.5" />
          <line x1="69" y1="100" x2="81" y2="100" stroke="#FFFF44" strokeWidth="1.2" />
        </>
      )}
      <circle cx="75" cy="88" r="4" fill="#FF4444" filter="url(#glowC2)" />
      {/* Orr */}
      <circle cx="75" cy="122" r="4" fill="#FF2222" />
      {/* Szemek */}
      <circle cx="70" cy="118" r="2.5" fill="#333" />
      <circle cx="80" cy="118" r="2.5" fill="#333" />
      <circle cx="71" cy="117" r="1" fill="white" />
      <circle cx="81" cy="117" r="1" fill="white" />
      {/* Száj */}
      <path d="M 69 124 Q 75 130 81 124" fill="none" stroke="#CC2222" strokeWidth="1.5" />
      {/* Lábak */}
      <rect x="62" y="150" width="8" height="10" fill="#FFFF22" rx="2" />
      <rect x="78" y="150" width="8" height="10" fill="#FFFF22" rx="2" />
      {/* Nagy cipők */}
      <ellipse cx="66" cy="161" rx="12" ry="4" fill="#FFFF22" />
      <ellipse cx="82" cy="161" rx="12" ry="4" fill="#FFFF22" />

      {/* Akrobata – egyensúlyoz */}
      {/* Rúd */}
      <line x1="200" y1="128" x2="260" y2="128"
        stroke="#A07848" strokeWidth="3" strokeLinecap="round" />
      {/* Test */}
      <ellipse cx="230" cy="120" rx="8" ry="10" fill="#AA22AA" />
      {/* Fej */}
      <circle cx="230" cy="108" r="7" fill="#FFCC99" />
      {/* Haj */}
      <ellipse cx="230" cy="103" rx="8" ry="4" fill="#333" />
      {/* Karok – kinyújtva */}
      <line x1="222" y1="116" x2="200" y2="120"
        stroke="#FFCC99" strokeWidth="3" strokeLinecap="round" />
      <line x1="238" y1="116" x2="260" y2="120"
        stroke="#FFCC99" strokeWidth="3" strokeLinecap="round" />
      {/* Lábak */}
      <line x1="226" y1="129" x2="220" y2="148"
        stroke="#AA22AA" strokeWidth="3" strokeLinecap="round" />
      <line x1="234" y1="129" x2="240" y2="148"
        stroke="#AA22AA" strokeWidth="3" strokeLinecap="round" />
      {/* Akrobata ruha csillagok */}
      <circle cx="230" cy="118" r="2" fill="#FFD700" />
      <circle cx="224" cy="122" r="1.5" fill="#FFD700" />
      <circle cx="236" cy="122" r="1.5" fill="#FFD700" />

      {/* Egyszerre két golyó – R=true esetén 3 golyó, R=false 2 (NEHÉZ) */}
      <circle cx="200" cy="122" r="5" fill="#FF4444" filter="url(#glowC2)" />
      <circle cx="200" cy="122" r="3" fill="#FF8888" opacity="0.6" />
      <circle cx="260" cy="122" r="5" fill="#4444FF" filter="url(#glowC2)" />
      <circle cx="260" cy="122" r="3" fill="#8888FF" opacity="0.6" />
      {R && <>
        <circle cx="230" cy="100" r="5" fill="#44FF44" filter="url(#glowC2)" />
        <circle cx="230" cy="100" r="3" fill="#88FF88" opacity="0.6" />
      </>}

      {/* ── NÉZŐK SZILUETTJE ── */}
      {[35,50,65,80,95,110,185,200,215,230,245,260,275,290].map((x,i) => (
        <g key={x}>
          <ellipse cx={x} cy="157" rx="6" ry="8" fill="#111122" opacity="0.8" />
          <circle cx={x} cy="147" r="5" fill="#111122" opacity="0.8" />
          {/* Pár fejdísz */}
          {i % 4 === 0 && (
            <ellipse cx={x} cy="143" rx="6" ry="2.5"
              fill={["#FF4444","#4444FF","#44FF44","#FFFF44"][i%4]} opacity="0.7" />
          )}
        </g>
      ))}

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 20: KÓRHÁZ ────────────────────────────────────────────────────────
function HospitalSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyH" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5588BB" />
          <stop offset="100%" stopColor="#BBDDEE" />
        </linearGradient>
        <linearGradient id="wallH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0F0EC" />
          <stop offset="100%" stopColor="#D8D8D4" />
        </linearGradient>
        <linearGradient id="groundH" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6AAA44" />
          <stop offset="100%" stopColor="#3A7A18" />
        </linearGradient>
        <linearGradient id="roofH" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7799BB" />
          <stop offset="100%" stopColor="#556688" />
        </linearGradient>
        <linearGradient id="ambulance" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EEEEEE" />
          <stop offset="100%" stopColor="#CCCCCC" />
        </linearGradient>
        <filter id="shadowH">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softH">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glowH">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyH)" />

      {/* Nap */}
      <circle cx="285" cy="25" r="17" fill="#FFE566" filter="url(#softH)" opacity="0.9" />
      <circle cx="285" cy="25" r="11" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="70" cy="25" rx="30" ry="12" fill="white" />
        <ellipse cx="53" cy="29" rx="19" ry="9" fill="white" />
        <ellipse cx="87" cy="29" rx="21" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="195" cy="20" rx="24" ry="10" fill="white" />
        <ellipse cx="182" cy="24" rx="15" ry="8" fill="white" />
        <ellipse cx="208" cy="24" rx="16" ry="8" fill="white" />
      </g>

      {/* ── FŐ ÉPÜLET ── */}
      <rect x="60" y="42" width="200" height="115" fill="url(#wallH)" filter="url(#shadowH)" />
      {/* Tégla textúra */}
      {[48,60,72,84,96,108,120,132,144].map(y =>
        [64,92,120,148,176,204,232].map((x,i) => (
          <rect key={`${x}-${y}`} x={x+(i%2)*14} y={y}
            width="24" height="10" fill="none"
            stroke="#CCCCCC44" strokeWidth="0.4" rx="0.5" />
        ))
      )}

      {/* Tető */}
      <rect x="57" y="36" width="206" height="10" fill="url(#roofH)" rx="2" />
      <rect x="57" y="36" width="206" height="3" fill="#8899BB" rx="2" />

      {/* Torony */}
      <rect x="138" y="10" width="44" height="35" fill="url(#wallH)" filter="url(#shadowH)" />
      <rect x="135" y="8" width="50" height="6" fill="url(#roofH)" rx="1" />

      {/* ── KÓRHÁZ NEVE ── */}
      <rect x="75" y="44" width="170" height="16" fill="#CC2222" rx="2" filter="url(#shadowH)" />
      <rect x="77" y="46" width="166" height="12" fill="#AA1111" rx="1" />
      {/* R=true esetén 1 betű más (KÖZEPES) */}
      <text x="160" y="55" textAnchor="middle" fontSize="7.5"
        fill="white" fontWeight="bold" letterSpacing="1.5">
        {R ? "KÓRHAZ" : "KÓRHÁZ"}
      </text>

      {/* ── KERESZT a torony tetején ── */}
      {/* R=true esetén a kereszt 2px-el szélesebb (NEHÉZ) */}
      <rect x={R ? "156" : "157"} y="12" width={R ? "8" : "6"} height="20"
        fill="#EE2222" rx="1" />
      <rect x="151" y="18" width="18" height={R ? "8" : "6"}
        fill="#EE2222" rx="1" />

      {/* Torony ablakok */}
      <rect x="142" y="18" width="12" height="10" fill="#99CCEE" rx="1"
        stroke="#CCCCCC" strokeWidth="0.8" />
      <line x1="148" y1="18" x2="148" y2="28" stroke="#CCCCCC" strokeWidth="0.7" />
      <rect x="166" y="18" width="12" height="10" fill="#99CCEE" rx="1"
        stroke="#CCCCCC" strokeWidth="0.8" />
      <line x1="172" y1="18" x2="172" y2="28" stroke="#CCCCCC" strokeWidth="0.7" />

      {/* ── ABLAKOK ── */}
      {/* Sor 1 */}
      {[70,105,140,175,210,245].map(x => (
        <g key={x}>
          <rect x={x} y="65" width="28" height="22" fill="#AAD0EE" rx="2"
            stroke="#CCCCCC" strokeWidth="1" />
          <line x1={x+14} y1="65" x2={x+14} y2="87" stroke="#CCCCCC" strokeWidth="0.8" />
          <line x1={x} y1="76" x2={x+28} y2="76" stroke="#CCCCCC" strokeWidth="0.8" />
          <rect x={x+1} y="66" width="11" height="5" fill="white" opacity="0.15" />
        </g>
      ))}
      {/* Sor 2 */}
      {[70,105,140,175,210,245].map(x => (
        <g key={x}>
          <rect x={x} y="98" width="28" height="22" fill="#AAD0EE" rx="2"
            stroke="#CCCCCC" strokeWidth="1" />
          <line x1={x+14} y1="98" x2={x+14} y2="120" stroke="#CCCCCC" strokeWidth="0.8" />
          <line x1={x} y1="109" x2={x+28} y2="109" stroke="#CCCCCC" strokeWidth="0.8" />
          <rect x={x+1} y="99" width="11" height="5" fill="white" opacity="0.15" />
        </g>
      ))}
      {/* 1 ablak világít – R=true esetén más ablak (KÖZEPES) */}
      <rect x={R ? "175" : "140"} y="98" width="28" height="22"
        fill="#FFEE88" rx="2" stroke="#CCCCCC" strokeWidth="1" opacity="0.9" />
      <rect x={R ? "176" : "141"} y="99" width="11" height="5"
        fill="#FFFF99" opacity="0.4" />

      {/* ── BEJÁRAT ── */}
      <rect x="135" y="118" width="50" height="39" fill="#5588AA" rx="2" />
      <path d="M 135 118 Q 160 106 185 118" fill="#4477AA" />
      <rect x="137" y="120" width="22" height="37" fill="#3366AA" rx="1" />
      <rect x="161" y="120" width="22" height="37" fill="#3366AA" rx="1" />
      <circle cx="159" cy="139" r="2.5" fill="#FFD700" />
      <circle cx="161" cy="139" r="2.5" fill="#FFD700" />
      {/* Bejárat feletti piros kereszt */}
      <rect x="156" y="108" width="8" height="16" fill="#EE2222" rx="1" />
      <rect x="150" y="112" width="20" height="8" fill="#EE2222" rx="1" />

      {/* ── MENTŐAUTÓ ── */}
      <g filter="url(#shadowH)">
        {/* Autó teste */}
        <rect x="10" y="140" width="95" height="32" fill="url(#ambulance)" rx="4" />
        {/* Autó eleje */}
        <rect x="96" y="144" width="28" height="28" fill="#DDDDDD" rx="3" />
        {/* Szélvédő */}
        <rect x="98" y="146" width="18" height="14" fill="#88BBDD" rx="2"
          stroke="#CCCCCC" strokeWidth="0.8" />
        <rect x="99" y="147" width="7" height="5" fill="white" opacity="0.2" />
        {/* Fényszóró */}
        <rect x="122" y="152" width="6" height="5" fill="#FFE566" rx="1" />
        <rect x="10" y="152" width="6" height="5" fill="#FF4444" rx="1" />
        {/* Mentő csík – R=true esetén kék, R=false piros (KÖZEPES) */}
        <rect x="10" y="155" width="114" height="5"
          fill={R ? "#2244DD" : "#DD2222"} opacity="0.9" />
        {/* Kereszt a mentőn */}
        <rect x="48" y="143" width="8" height="18" fill="#EE2222" rx="1" />
        <rect x="42" y="148" width="20" height="8" fill="#EE2222" rx="1" />
        {/* Ablakok */}
        <rect x="18" y="143" width="18" height="12" fill="#88BBDD" rx="1"
          stroke="#CCCCCC" strokeWidth="0.8" />
        <rect x="40" y="143" width="18" height="12" fill="#88BBDD" rx="1"
          stroke="#CCCCCC" strokeWidth="0.8" />
        {/* Kerekek */}
        {[28, 55, 88, 112].map(x => (
          <g key={x}>
            <circle cx={x} cy="174" r="9" fill="#222" />
            <circle cx={x} cy="174" r="6" fill="#444" />
            <circle cx={x} cy="174" r="3" fill="#666" />
          </g>
        ))}
        {/* Villogó – R=true esetén kék, R=false piros (KÖZEPES) */}
        <rect x="42" y="138" width="40" height="6" fill="#333" rx="2" />
        {[46,52,58,64,70,76].map((x,i) => (
          <rect key={x} x={x} y="139" width="4" height="4"
            fill={R
              ? (i%2===0 ? "#2244FF" : "#4466FF")
              : (i%2===0 ? "#FF2222" : "#FF6666")}
            rx="1" opacity="0.9" />
        ))}
      </g>

      {/* ── TALAJ ── */}
      <rect x="0" y="155" width="320" height="45" fill="url(#groundH)" />
      {/* Járda */}
      <rect x="0" y="152" width="320" height="8" fill="#AAAAAA" />
      <rect x="0" y="152" width="320" height="2" fill="#BBBBBB" />
      {/* Járda fugák */}
      {[40,80,120,160,200,240,280].map(x => (
        <line key={x} x1={x} y1="152" x2={x} y2="160"
          stroke="#999" strokeWidth="0.7" />
      ))}

      {/* ── LÁMPAOSZLOP ── */}
      <rect x="220" y="90" width="5" height="68" fill="#888" />
      <rect x="212" y="88" width="21" height="5" fill="#999" rx="2" />
      <ellipse cx="222" cy="88" rx="12" ry="4" fill="#FFE566" opacity="0.85"
        filter="url(#glowH)" />

      {/* ── FA ── */}
      <rect x="240" y="112" width="8" height="42" fill="#6B4423" />
      <circle cx="244" cy="100" r="24" fill="#2D6E1A" />
      <circle cx="244" cy="96" r="20" fill="#4A9A30" />
      <circle cx="233" cy="105" r="14" fill="#3A8A25" />
      <circle cx="255" cy="103" r="15" fill="#3A8A25" />
      <circle cx="236" cy="92" r="8" fill="#90D060" opacity="0.25" />

      {/* ── ORVOS a bejáratnál ── */}
      <ellipse cx="200" cy="145" rx="8" ry="10" fill="white" />
      <circle cx="200" cy="132" r="7" fill="#FFCC99" />
      <ellipse cx="200" cy="128" rx="8" ry="3.5" fill="#4488CC" />
      <rect x="195" y="153" width="4" height="12" fill="#DDDDDD" rx="1" />
      <rect x="201" y="153" width="4" height="12" fill="#DDDDDD" rx="1" />
      {/* Sztetoszkóp – R=true esetén 2px-el hosszabb (NEHÉZ) */}
      <path d={R
        ? "M 204 138 Q 212 140 214 148 Q 214 155 210 155"
        : "M 204 138 Q 210 140 212 148 Q 212 153 208 153"}
        fill="none" stroke="#333" strokeWidth="1.5" />
      <circle cx={R ? "210" : "208"} cy={R ? "155" : "153"} r="2.5"
        fill="#333" />
      {/* Kereszt a köpenyen */}
      <rect x="197" y="138" width="4" height="10" fill="#EE2222" rx="0.5" />
      <rect x="194" y="141" width="10" height="4" fill="#EE2222" rx="0.5" />

      {/* Madarak */}
      <path d="M 108 38 Q 112 34 116 38 Q 120 34 124 38"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 238 30 Q 242 26 246 30 Q 250 26 254 30"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="160" cy="156" rx="95" ry="4" fill="#00000033" />
      <ellipse cx="60" cy="172" rx="48" ry="4" fill="#00000033" />
      <ellipse cx="244" cy="155" rx="22" ry="3" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 21: DZSUNGEL ──────────────────────────────────────────────────────
function JungleSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyJ" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D6E2D" />
          <stop offset="100%" stopColor="#88BB44" />
        </linearGradient>
        <linearGradient id="groundJ" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A7A18" />
          <stop offset="100%" stopColor="#1A4A08" />
        </linearGradient>
        <linearGradient id="trunkJ" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6B4A22" />
          <stop offset="100%" stopColor="#4A2A08" />
        </linearGradient>
        <radialGradient id="leafJ1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#88DD44" />
          <stop offset="100%" stopColor="#2A6A08" />
        </radialGradient>
        <radialGradient id="leafJ2" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#66CC22" />
          <stop offset="100%" stopColor="#1A5A04" />
        </radialGradient>
        <radialGradient id="leafJ3" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#AAEE55" />
          <stop offset="100%" stopColor="#3A7A10" />
        </radialGradient>
        <filter id="shadowJ">
          <feDropShadow dx="1.5" dy="2" stdDeviation="2" floodColor="#00000066" />
        </filter>
        <filter id="softJ">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── HÁTTÉR ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyJ)" />

      {/* Háttér ködös fák */}
      {[15,45,80,120,160,200,240,275,305].map((x,i) => (
        <g key={x} opacity="0.3">
          <rect x={x-4} y={60+(i%3)*8} width="8" height={90-(i%3)*8} fill="#3A2A08" />
          <circle cx={x} cy={50+(i%3)*8} r={28-(i%3)*4} fill="#1A4A08" />
          <circle cx={x} cy={44+(i%3)*8} r={22-(i%3)*3} fill="#2A6A10" />
        </g>
      ))}

      {/* ── TALAJ ── */}
      <rect x="0" y="148" width="320" height="52" fill="url(#groundJ)" />
      {/* Mohás talaj */}
      {[5,20,38,56,75,95,115,138,160,182,205,228,252,275,298,315].map(x => (
        <ellipse key={x} cx={x} cy="150" rx="6" ry="3"
          fill="#4A9A20" opacity="0.5" />
      ))}
      {/* Gyökerek */}
      {[40,110,180,250].map(x => (
        <g key={x}>
          <path d={`M ${x} 148 Q ${x-15} 155 ${x-25} 160`}
            stroke="#4A2A08" strokeWidth="2.5" fill="none" opacity="0.6" />
          <path d={`M ${x} 148 Q ${x+12} 154 ${x+20} 158`}
            stroke="#4A2A08" strokeWidth="2" fill="none" opacity="0.6" />
        </g>
      ))}

      {/* ── BAL NAGY FA ── */}
      <rect x="18" y="55" width="16" height="95" fill="url(#trunkJ)" />
      <rect x="20" y="55" width="5" height="95" fill="#8B6A42" opacity="0.3" />
      {/* Kéreg textúra */}
      {[65,80,95,110,125,140].map(y => (
        <path key={y} d={`M 18 ${y} Q 26 ${y+3} 34 ${y}`}
          fill="none" stroke="#3A1A04" strokeWidth="0.8" opacity="0.5" />
      ))}
      {/* Gyökerek */}
      <path d="M 18 148 Q 5 155 0 162" stroke="#4A2A08" strokeWidth="3.5" fill="none" />
      <path d="M 34 148 Q 45 155 52 160" stroke="#4A2A08" strokeWidth="3" fill="none" />
      <path d="M 24 148 Q 20 158 15 165" stroke="#4A2A08" strokeWidth="2.5" fill="none" />
      {/* Lombozat */}
      <circle cx="26" cy="62" r="42" fill="#1A4A08" />
      <circle cx="26" cy="55" r="36" fill="url(#leafJ1)" />
      <circle cx="5" cy="68" r="26" fill="#2A6A10" />
      <circle cx="48" cy="65" r="28" fill="#3A7A18" />
      <circle cx="26" cy="38" r="24" fill="#4A8A22" />
      <circle cx="12" cy="48" r="14" fill="#88CC44" opacity="0.3" />
      {/* Lián */}
      <path d="M 48 60 Q 55 80 50 100 Q 45 120 52 140"
        fill="none" stroke="#2A5A10" strokeWidth="2.5" />
      <path d="M 50 80 Q 58 85 56 92" fill="none" stroke="#3A7A18" strokeWidth="1.5" />
      <path d="M 49 105 Q 57 108 55 115" fill="none" stroke="#3A7A18" strokeWidth="1.5" />

      {/* ── KÖZÉPSŐ FA ── */}
      <rect x="148" y="48" width="14" height="102" fill="url(#trunkJ)" />
      <rect x="150" y="48" width="4" height="102" fill="#8B6A42" opacity="0.3" />
      {[58,75,92,108,124,140].map(y => (
        <path key={y} d={`M 148 ${y} Q 155 ${y+3} 162 ${y}`}
          fill="none" stroke="#3A1A04" strokeWidth="0.8" opacity="0.5" />
      ))}
      <path d="M 148 148 Q 133 156 125 163" stroke="#4A2A08" strokeWidth="3.5" fill="none" />
      <path d="M 162 148 Q 175 155 183 161" stroke="#4A2A08" strokeWidth="3" fill="none" />
      <circle cx="155" cy="54" r="44" fill="#1A4A08" />
      <circle cx="155" cy="47" r="38" fill="url(#leafJ2)" />
      <circle cx="132" cy="62" r="28" fill="#2A6A10" />
      <circle cx="178" cy="60" r="30" fill="#3A7A18" />
      <circle cx="155" cy="30" r="26" fill="#4A8A22" />
      <circle cx="140" cy="42" r="15" fill="#88CC44" opacity="0.28" />
      {/* Lián középső fán */}
      <path d="M 178 55 Q 188 75 183 100 Q 178 125 185 148"
        fill="none" stroke="#2A5A10" strokeWidth="2.5" />
      <path d="M 182 78 Q 192 82 190 90" fill="none" stroke="#3A7A18" strokeWidth="1.5" />
      <path d="M 181 108 Q 191 112 189 120" fill="none" stroke="#3A7A18" strokeWidth="1.5" />

      {/* ── JOBB FA ── */}
      <rect x="278" y="52" width="16" height="98" fill="url(#trunkJ)" />
      <rect x="280" y="52" width="5" height="98" fill="#8B6A42" opacity="0.3" />
      {[62,78,94,110,126,142].map(y => (
        <path key={y} d={`M 278 ${y} Q 286 ${y+3} 294 ${y}`}
          fill="none" stroke="#3A1A04" strokeWidth="0.8" opacity="0.5" />
      ))}
      <path d="M 278 148 Q 264 155 256 162" stroke="#4A2A08" strokeWidth="3.5" fill="none" />
      <path d="M 294 148 Q 308 155 318 162" stroke="#4A2A08" strokeWidth="3" fill="none" />
      <circle cx="286" cy="58" r="40" fill="#1A4A08" />
      <circle cx="286" cy="52" r="34" fill="url(#leafJ3)" />
      <circle cx="265" cy="66" r="25" fill="#2A6A10" />
      <circle cx="307" cy="63" r="27" fill="#3A7A18" />
      <circle cx="286" cy="36" r="22" fill="#4A8A22" />
      <circle cx="272" cy="46" r="13" fill="#88CC44" opacity="0.25" />

      {/* ── NAGY LEVELEK előtérben ── */}
      {/* Bal levelek */}
      <path d="M 0 140 Q 20 110 45 120 Q 30 135 0 140"
        fill="#3A8A18" opacity="0.9" />
      <path d="M 0 155 Q 25 125 55 138 Q 35 150 0 155"
        fill="#2A7A10" opacity="0.85" />
      <path d="M 55 148 Q 70 118 95 130 Q 78 145 55 148"
        fill="#4A9A20" opacity="0.8" />
      {/* Jobb levelek */}
      <path d="M 320 138 Q 298 110 272 122 Q 288 136 320 138"
        fill="#3A8A18" opacity="0.9" />
      <path d="M 320 152 Q 294 124 264 136 Q 282 150 320 152"
        fill="#2A7A10" opacity="0.85" />
      <path d="M 262 148 Q 248 118 222 130 Q 240 145 262 148"
        fill="#4A9A20" opacity="0.8" />

      {/* ── PAPAGÁJ – R=true esetén 3px-el arrébb (NEHÉZ) ── */}
      <g transform={`translate(${R ? 3 : 0}, 0)`}>
        {/* Test */}
        <ellipse cx="88" cy="95" rx="10" ry="13" fill="#22AA22" />
        {/* Fej */}
        <circle cx="88" cy="80" r="9" fill="#22AA22" />
        {/* Csőr */}
        <path d="M 93 82 Q 100 84 98 88 Q 94 87 93 84"
          fill="#FFAA00" />
        {/* Szem */}
        <circle cx="92" cy="79" r="2.5" fill="#111" />
        <circle cx="93" cy="78" r="1" fill="white" />
        {/* Szárny – R=true esetén piros, R=false kék (KÖZEPES) */}
        <path d="M 80 92 Q 68 85 65 95 Q 70 105 80 102"
          fill={R ? "#CC2222" : "#2244CC"} />
        <path d="M 80 92 Q 70 87 68 95 Q 72 103 80 102"
          fill={R ? "#EE4444" : "#4466EE"} opacity="0.7" />
        {/* Farok */}
        <path d="M 85 107 Q 83 122 80 128" stroke="#FFAA00" strokeWidth="3"
          fill="none" strokeLinecap="round" />
        <path d="M 88 108 Q 88 123 88 130" stroke="#22AA22" strokeWidth="2.5"
          fill="none" strokeLinecap="round" />
        <path d="M 91 107 Q 93 122 96 128" stroke="#CC2222" strokeWidth="2.5"
          fill="none" strokeLinecap="round" />
        {/* Láb az ágon */}
        <line x1="84" y1="108" x2="80" y2="115" stroke="#888" strokeWidth="1.2" />
        <line x1="88" y1="108" x2="88" y2="115" stroke="#888" strokeWidth="1.2" />
        {/* Ág */}
        <line x1="65" y1="115" x2="110" y2="115"
          stroke="#6B4A22" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ── MAJOM a fán ── */}
      {/* Test */}
      <ellipse cx="230" cy="85" rx="10" ry="12" fill="#C8824A" />
      {/* Has */}
      <ellipse cx="230" cy="88" rx="6" ry="8" fill="#E8A870" />
      {/* Fej */}
      <circle cx="230" cy="71" r="10" fill="#C8824A" />
      {/* Arc */}
      <ellipse cx="230" cy="74" rx="7" ry="6" fill="#E8A870" />
      {/* Szemek – R=true esetén 2px-el távolabb (NEHÉZ) */}
      <circle cx={R ? "225" : "226"} cy="70" r="2.2" fill="#222" />
      <circle cx={R ? "225" : "226"} cy="70" r="0.9" fill="white" />
      <circle cx={R ? "235" : "234"} cy="70" r="2.2" fill="#222" />
      <circle cx={R ? "235" : "234"} cy="70" r="0.9" fill="white" />
      {/* Fül */}
      <circle cx="220" cy="71" r="5" fill="#C8824A" />
      <circle cx="220" cy="71" r="3" fill="#E8A870" />
      <circle cx="240" cy="71" r="5" fill="#C8824A" />
      <circle cx="240" cy="71" r="3" fill="#E8A870" />
      {/* Száj */}
      <path d="M 225 76 Q 230 80 235 76"
        fill="none" stroke="#A06030" strokeWidth="1" />
      {/* Karok */}
      <path d="M 220 82 Q 208 75 205 68"
        fill="none" stroke="#C8824A" strokeWidth="4" strokeLinecap="round" />
      <path d="M 240 82 Q 250 78 254 72"
        fill="none" stroke="#C8824A" strokeWidth="4" strokeLinecap="round" />
      {/* Kezek az ágon */}
      <line x1="205" y1="68" x2="195" y2="65"
        stroke="#6B4A22" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="254" y1="72" x2="265" y2="68"
        stroke="#6B4A22" strokeWidth="3.5" strokeLinecap="round" />
      {/* Farok */}
      <path d="M 230 97 Q 245 105 248 118 Q 250 128 242 130"
        fill="none" stroke="#C8824A" strokeWidth="3" />
      {/* Lábak */}
      <line x1="224" y1="96" x2="218" y2="108"
        stroke="#C8824A" strokeWidth="3" strokeLinecap="round" />
      <line x1="236" y1="96" x2="242" y2="108"
        stroke="#C8824A" strokeWidth="3" strokeLinecap="round" />

      {/* ── KÍGYÓ a fán ── */}
      <path d="M 105 68 Q 115 62 122 70 Q 130 78 122 85 Q 114 92 120 100 Q 126 108 120 115"
        fill="none" stroke="#228833" strokeWidth="5" strokeLinecap="round" />
      <path d="M 105 68 Q 115 62 122 70 Q 130 78 122 85 Q 114 92 120 100 Q 126 108 120 115"
        fill="none" stroke="#44AA55" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Kígyó fej */}
      <ellipse cx="108" cy="65" rx="8" ry="5" fill="#228833" />
      <ellipse cx="104" cy="65" rx="4" ry="3" fill="#33AA44" />
      {/* Kígyó szemek */}
      <circle cx="106" cy="63" r="1.8" fill="#FFD700" />
      <circle cx="106" cy="63" r="0.8" fill="#111" />
      {/* Kígyó nyelv */}
      <path d="M 100 65 Q 95 63 92 61 M 100 65 Q 95 66 92 68"
        fill="none" stroke="#EE2222" strokeWidth="1" />
      {/* Kígyó minta – R=true esetén 1 csík több (KÖZEPES) */}
      {[72,80,88,96,104,...(R ? [112] : [])].map((y,i) => (
        <ellipse key={y} cx={118+(i%2)*4} cy={y} rx="4" ry="2"
          fill="#FFD700" opacity="0.7"
          transform={`rotate(${30+i*10} ${118+(i%2)*4} ${y})`} />
      ))}

      {/* ── VIRÁGOK a talajon ── */}
      {[30,65,100,135,185,220,255,290].map((x,i) => (
        <g key={x}>
          <line x1={x} y1="148" x2={x} y2={138-(i%2)*4}
            stroke="#3A8A18" strokeWidth="1.5" />
          {[0,72,144,216,288].map(angle => (
            <ellipse key={angle}
              cx={x + Math.cos(angle*Math.PI/180)*5}
              cy={(138-(i%2)*4) + Math.sin(angle*Math.PI/180)*5}
              rx="3.5" ry="2"
              fill={["#FF6688","#FFAA22","#FF4466","#FFCC44"][i%4]}
              transform={`rotate(${angle} ${x} ${138-(i%2)*4})`}
              opacity="0.9" />
          ))}
          <circle cx={x} cy={138-(i%2)*4} r="2.5"
            fill={["#FFE566","#FFFFFF","#FFD700","#FF8888"][i%4]} />
        </g>
      ))}

      {/* ── FOLYÓ ── */}
      <path d="M 0 162 Q 50 155 100 160 Q 150 165 200 158 Q 250 152 320 158"
        fill="#2255AA" opacity="0.5" stroke="#3366BB" strokeWidth="1" />
      <path d="M 0 165 Q 50 158 100 163 Q 150 168 200 161 Q 250 155 320 161"
        fill="#3366BB" opacity="0.35" />
      {/* Víz csillogás */}
      {[20,60,100,145,190,235,280].map(x => (
        <line key={x} x1={x} y1="161" x2={x+8} y2="161"
          stroke="white" strokeWidth="1" opacity="0.3" />
      ))}

      {/* ── PILLANGÓK ── */}
      {[[62,55],[195,48],[260,70]].map(([x,y],i) => (
        <g key={i} opacity="0.85">
          <ellipse cx={x} cy={y} rx="7" ry="5"
            fill={["#FF8822","#AA22FF","#22AAFF"][i]}
            transform={`rotate(-25 ${x} ${y})`} />
          <ellipse cx={x} cy={y} rx="7" ry="5"
            fill={["#FF8822","#AA22FF","#22AAFF"][i]}
            transform={`rotate(25 ${x} ${y})`} />
          <ellipse cx={x} cy={y+2} rx="5" ry="3.5"
            fill={["#FFAA44","#CC44FF","#44CCFF"][i]}
            transform={`rotate(-20 ${x} ${y+2})`} opacity="0.7" />
          <ellipse cx={x} cy={y+2} rx="5" ry="3.5"
            fill={["#FFAA44","#CC44FF","#44CCFF"][i]}
            transform={`rotate(20 ${x} ${y+2})`} opacity="0.7" />
          <ellipse cx={x} cy={y} rx="1.5" ry="5" fill="#333" />
        </g>
      ))}

      {/* Árnyékok */}
      <ellipse cx="26" cy="152" rx="30" ry="4" fill="#00000044" />
      <ellipse cx="155" cy="152" rx="35" ry="4" fill="#00000044" />
      <ellipse cx="286" cy="152" rx="28" ry="4" fill="#00000044" />
      <ellipse cx="230" cy="115" rx="15" ry="3" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 22: SIVATAG ───────────────────────────────────────────────────────
function DesertSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyD" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6ACC" />
          <stop offset="100%" stopColor="#88CCFF" />
        </linearGradient>
        <linearGradient id="sandD" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C870" />
          <stop offset="100%" stopColor="#C8A040" />
        </linearGradient>
        <linearGradient id="duneD" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4A840" />
          <stop offset="100%" stopColor="#F0D070" />
        </linearGradient>
        <linearGradient id="cactusD" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A7A2A" />
          <stop offset="100%" stopColor="#4AAA4A" />
        </linearGradient>
        <radialGradient id="sunD" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0A0" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        <filter id="shadowD">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#00000055" />
        </filter>
        <filter id="softD">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="heatD">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyD)" />

      {/* Nap – R=true esetén 7px-el arrébb (NEHÉZ) */}
      <circle cx={R ? "268" : "275"} cy="30" r="22"
        fill="url(#sunD)" filter="url(#softD)" opacity="0.95" />
      <circle cx={R ? "268" : "275"} cy="30" r="15" fill="#FFE566" />
      {/* Nap sugarak */}
      {[0,45,90,135,180,225,270,315].map(angle => (
        <line key={angle}
          x1={(R ? 268 : 275) + Math.cos(angle * Math.PI / 180) * 25}
          y1={30 + Math.sin(angle * Math.PI / 180) * 25}
          x2={(R ? 268 : 275) + Math.cos(angle * Math.PI / 180) * 32}
          y2={30 + Math.sin(angle * Math.PI / 180) * 32}
          stroke="#FFD700" strokeWidth="2" opacity="0.7" />
      ))}

      {/* Felhők */}
      <g opacity="0.7">
        <ellipse cx="85" cy="28" rx="28" ry="11" fill="white" />
        <ellipse cx="69" cy="32" rx="17" ry="8" fill="white" />
        <ellipse cx="101" cy="32" rx="19" ry="8" fill="white" />
      </g>

      {/* ── HOMOKDŰNÉK háttér ── */}
      <path d="M 0 130 Q 60 105 120 118 Q 180 130 240 110 Q 280 98 320 112 L 320 200 L 0 200"
        fill="#C8A040" opacity="0.5" />
      <path d="M 0 140 Q 80 118 160 128 Q 240 138 320 122 L 320 200 L 0 200"
        fill="#D4A840" opacity="0.6" />

      {/* ── FŐ TALAJ ── */}
      <path d="M 0 148 Q 80 138 160 145 Q 240 152 320 142 L 320 200 L 0 200"
        fill="url(#sandD)" />
      {/* Homok textúra */}
      {[5,20,38,55,75,95,115,138,160,182,205,228,252,275,298,315].map((x,i) => (
        <ellipse key={x} cx={x} cy={148+(i%3)*2} rx={3+(i%2)} ry="1.5"
          fill="#B89030" opacity="0.3" />
      ))}
      {/* Homok hullámok */}
      {[155,165,175].map(y => (
        <path key={y}
          d={`M 0 ${y} Q 40 ${y-3} 80 ${y} Q 120 ${y+3} 160 ${y} Q 200 ${y-3} 240 ${y} Q 280 ${y+3} 320 ${y}`}
          fill="none" stroke="#B89030" strokeWidth="0.7" opacity="0.4" />
      ))}

      {/* ── BAL KAKTUSZ ── */}
      {/* Törzs */}
      <rect x="42" y="80" width="16" height="72" fill="url(#cactusD)" rx="6"
        filter="url(#shadowD)" />
      <rect x="44" y="80" width="5" height="72" fill="#5ABB5A" opacity="0.3" rx="3" />
      {/* Tövis bal oldal */}
      {[88,100,112,124,136].map(y => (
        <line key={y} x1="42" y1={y} x2="36" y2={y-3}
          stroke="#1A5A1A" strokeWidth="1.2" />
      ))}
      {/* Tövis jobb oldal */}
      {[92,104,116,128,140].map(y => (
        <line key={y} x1="58" y1={y} x2="64" y2={y-3}
          stroke="#1A5A1A" strokeWidth="1.2" />
      ))}
      {/* Bal kar */}
      <rect x="22" y="100" width="22" height="10" fill="url(#cactusD)" rx="4" />
      <rect x="20" y="82" width="10" height="22" fill="url(#cactusD)" rx="4" />
      <rect x="21" y="84" width="3" height="22" fill="#5ABB5A" opacity="0.3" rx="2" />
      {[86,94,102].map(y => (
        <line key={y} x1="20" y1={y} x2="14" y2={y-2}
          stroke="#1A5A1A" strokeWidth="1" />
      ))}
      {/* Jobb kar */}
      <rect x="58" y="108" width="22" height="10" fill="url(#cactusD)" rx="4" />
      <rect x="70" y="90" width="10" height="28" fill="url(#cactusD)" rx="4" />
      <rect x="72" y="92" width="3" height="28" fill="#5ABB5A" opacity="0.3" rx="2" />
      {[94,102,110].map(y => (
        <line key={y} x1="80" y1={y} x2="86" y2={y-2}
          stroke="#1A5A1A" strokeWidth="1" />
      ))}
      {/* Virág a tetején – R=true esetén 2 virág, R=false 3 (KÖZEPES) */}
      {[50, ...(R ? [] : [42, 58])].map((x, i) => (
        <g key={x}>
          {[0,72,144,216,288].map(angle => (
            <ellipse key={angle}
              cx={x + Math.cos(angle * Math.PI / 180) * 5}
              cy={78 + Math.sin(angle * Math.PI / 180) * 5}
              rx="3.5" ry="2"
              fill={i === 0 ? "#FF6688" : "#FF88AA"}
              transform={`rotate(${angle} ${x} 78)`}
              opacity="0.9" />
          ))}
          <circle cx={x} cy="78" r="3" fill="#FFE566" />
        </g>
      ))}

      {/* ── KÖZÉPSŐ KIS KAKTUSZ ── */}
      <rect x="155" y="118" width="10" height="34" fill="url(#cactusD)" rx="4"
        filter="url(#shadowD)" />
      <rect x="157" y="118" width="3" height="34" fill="#5ABB5A" opacity="0.3" rx="2" />
      {[122,130,138,146].map(y => (
        <line key={y} x1="155" y1={y} x2="150" y2={y-2}
          stroke="#1A5A1A" strokeWidth="1" />
      ))}
      {[124,132,140,148].map(y => (
        <line key={y} x1="165" y1={y} x2="170" y2={y-2}
          stroke="#1A5A1A" strokeWidth="1" />
      ))}
      {/* Bal kar */}
      <rect x="140" y="128" width="16" height="7" fill="url(#cactusD)" rx="3" />
      <rect x="138" y="118" width="7" height="14" fill="url(#cactusD)" rx="3" />
      {/* Jobb kar */}
      <rect x="165" y="132" width="14" height="7" fill="url(#cactusD)" rx="3" />
      <rect x="172" y="122" width="7" height="14" fill="url(#cactusD)" rx="3" />
      {/* Virág */}
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle}
          cx={160 + Math.cos(angle * Math.PI / 180) * 4}
          cy={116 + Math.sin(angle * Math.PI / 180) * 4}
          rx="3" ry="1.8"
          fill="#FF4466"
          transform={`rotate(${angle} 160 116)`}
          opacity="0.9" />
      ))}
      <circle cx="160" cy="116" r="2.5" fill="#FFE566" />

      {/* ── JOBB KAKTUSZ ── */}
      <rect x="268" y="88" width="14" height="64" fill="url(#cactusD)" rx="5"
        filter="url(#shadowD)" />
      <rect x="270" y="88" width="4" height="64" fill="#5ABB5A" opacity="0.3" rx="2" />
      {[94,106,118,130,142].map(y => (
        <line key={y} x1="268" y1={y} x2="262" y2={y-2}
          stroke="#1A5A1A" strokeWidth="1.1" />
      ))}
      {[96,108,120,132,144].map(y => (
        <line key={y} x1="282" y1={y} x2="288" y2={y-2}
          stroke="#1A5A1A" strokeWidth="1.1" />
      ))}
      {/* Kar */}
      <rect x="252" y="106" width="18" height="8" fill="url(#cactusD)" rx="3" />
      <rect x="250" y="92" width="8" height="18" fill="url(#cactusD)" rx="3" />
      <rect x="282" y="112" width="16" height="8" fill="url(#cactusD)" rx="3" />
      <rect x="290" y="98" width="8" height="16" fill="url(#cactusD)" rx="3" />
      {/* Virág */}
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle}
          cx={275 + Math.cos(angle * Math.PI / 180) * 5}
          cy={86 + Math.sin(angle * Math.PI / 180) * 5}
          rx="3.5" ry="2"
          fill="#FF6688"
          transform={`rotate(${angle} 275 86)`}
          opacity="0.9" />
      ))}
      <circle cx="275" cy="86" r="3" fill="#FFE566" />

      {/* ── SIVATAGI KŐ ── */}
      <ellipse cx="115" cy="148" rx="28" ry="12" fill="#B09060" filter="url(#shadowD)" />
      <ellipse cx="112" cy="144" rx="22" ry="9" fill="#C8A870" />
      <ellipse cx="108" cy="141" rx="12" ry="5" fill="#D4B880" opacity="0.6" />

      {/* ── TEVÉK ── */}
      {/* Bal teve */}
      {/* Test */}
      <ellipse cx="195" cy="132" rx="28" ry="16" fill="#C8922A" filter="у(#shadowD)" />
      {/* Nyak */}
      <rect x="212" y="108" width="10" height="28" fill="#C8922A" rx="4" />
      {/* Fej */}
      <ellipse cx="220" cy="104" rx="12" ry="9" fill="#C8922A" />
      <ellipse cx="213" cy="107" rx="6" ry="4" fill="#D8A240" />
      {/* Szem – R=true esetén 2px-el lejjebb (NEHÉZ) */}
      <circle cx="224" cy={R ? "101" : "99"} r="2.5" fill="#333" />
      <circle cx="225" cy={R ? "100" : "98"} r="1" fill="white" />
      {/* Fül */}
      <ellipse cx="228" cy="97" rx="3" ry="5" fill="#C8922A" />
      <ellipse cx="228" cy="97" rx="1.5" ry="3" fill="#E8B240" />
      {/* Púp – R=true esetén 1 púp, R=false 2 (KÖZEPES) */}
      {R ? (
        <ellipse cx="195" cy="115" rx="12" ry="14" fill="#A87020" />
      ) : (
        <>
          <ellipse cx="183" cy="116" rx="10" ry="13" fill="#A87020" />
          <ellipse cx="207" cy="116" rx="10" ry="13" fill="#A87020" />
        </>
      )}
      {/* Lábak */}
      {[170,183,200,213].map(x => (
        <g key={x}>
          <rect x={x} y="145" width="7" height="18" fill="#B88020" rx="3" />
          <ellipse cx={x+3} cy="163" rx="5" ry="3" fill="#A07018" />
        </g>
      ))}
      {/* Farok */}
      <path d="M 167 132 Q 158 130 155 138 Q 154 144 160 145"
        fill="none" stroke="#C8922A" strokeWidth="2.5" />

      {/* ── SIVATAGI RÓKÁK NYOMA ── */}
      {[25,35,45,55,65,75,85,95].map((x,i) => (
        <ellipse key={x} cx={x} cy={160+(i%2)*4} rx="3" ry="2"
          fill="#B89030" opacity="0.35"
          transform={`rotate(${i%2===0?20:-20} ${x} ${160+(i%2)*4})`} />
      ))}

      {/* ── OÁZIS ── */}
      <ellipse cx="100" cy="158" rx="22" ry="8" fill="#2255AA" opacity="0.6" />
      <ellipse cx="100" cy="156" rx="18" ry="6" fill="#3366BB" opacity="0.5" />
      {/* Víz csillogás */}
      {[88,100,112].map(x => (
        <line key={x} x1={x} y1="156" x2={x+6} y2="156"
          stroke="white" strokeWidth="1" opacity="0.4" />
      ))}
      {/* Pálma az oázisnál */}
      <rect x="120" y="118" width="7" height="32" fill="#8B6340" rx="2" />
      <rect x="122" y="118" width="2" height="32" fill="#A07848" opacity="0.4" />
      {/* Pálma levelek */}
      <path d="M 123 118 Q 108 108 98 112" fill="none" stroke="#3A8A18" strokeWidth="4"
        strokeLinecap="round" />
      <path d="M 123 118 Q 115 105 122 100" fill="none" stroke="#4A9A20" strokeWidth="4"
        strokeLinecap="round" />
      <path d="M 123 118 Q 132 106 142 110" fill="none" stroke="#3A8A18" strokeWidth="4"
        strokeLinecap="round" />
      <path d="M 123 118 Q 136 112 140 120" fill="none" stroke="#4A9A20" strokeWidth="3.5"
        strokeLinecap="round" />
      {/* Kókuszdió */}
      <circle cx="118" cy="116" r="4" fill="#8B5A20" />
      <circle cx="126" cy="114" r="4" fill="#7A4A18" />

      {/* ── HŐSÉG HATÁS ── */}
      <path d="M 0 145 Q 80 142 160 145 Q 240 148 320 144"
        fill="none" stroke="white" strokeWidth="1.5" opacity="0.08"
        filter="url(#heatD)" />
      <path d="M 0 148 Q 80 145 160 148 Q 240 151 320 147"
        fill="none" stroke="white" strokeWidth="1" opacity="0.06"
        filter="url(#heatD)" />

      {/* ── SKORPIÓ – R=true esetén farka 2px-el hosszabb (KÖZEPES) ── */}
      {/* Test */}
      <ellipse cx="245" cy="152" rx="7" ry="5" fill="#C8922A" />
      {/* Fej */}
      <ellipse cx="252" cy="150" rx="5" ry="4" fill="#C8922A" />
      {/* Ollók */}
      <path d="M 256 148 Q 262 144 265 146 M 256 148 Q 262 150 264 152"
        fill="none" stroke="#B07818" strokeWidth="1.5" />
      {/* Lábak */}
      {[244,248,252].map(x => (
        <g key={x}>
          <line x1={x} y1="154" x2={x-3} y2="158" stroke="#B07818" strokeWidth="1" />
          <line x1={x} y1="154" x2={x-2} y2="159" stroke="#B07818" strokeWidth="1" />
        </g>
      ))}
      {/* Farok – R=true esetén hosszabb */}
      <path
        d={R
          ? "M 240 152 Q 234 148 232 142 Q 230 135 236 130 Q 240 127 242 131"
          : "M 240 152 Q 234 148 232 142 Q 230 137 236 134 Q 240 131 242 134"}
        fill="none" stroke="#C8922A" strokeWidth="2" />
      <circle cx={R ? "242" : "242"} cy={R ? "131" : "134"} r="3" fill="#CC2222" />

      {/* Madarak a távolban */}
      <path d="M 180 45 Q 184 41 188 45 Q 192 41 196 45"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 210 38 Q 214 34 218 38 Q 222 34 226 38"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="50" cy="153" rx="18" ry="3" fill="#00000033" />
      <ellipse cx="275" cy="153" rx="14" ry="3" fill="#00000033" />
      <ellipse cx="195" cy="162" rx="28" ry="4" fill="#00000044" />
      <ellipse cx="160" cy="153" rx="10" ry="2" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 23: KÖNYVTÁR ──────────────────────────────────────────────────────
function LibrarySVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="wallLB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0E8D8" />
          <stop offset="100%" stopColor="#D8D0C0" />
        </linearGradient>
        <linearGradient id="floorLB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A870" />
          <stop offset="100%" stopColor="#A88850" />
        </linearGradient>
        <linearGradient id="shelfLB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B08850" />
          <stop offset="100%" stopColor="#886630" />
        </linearGradient>
        <filter id="shadowLB">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softLB">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── HÁTTÉR FAL ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#wallLB)" />

      {/* Parketta */}
      <rect x="0" y="158" width="320" height="42" fill="url(#floorLB)" />
      {[0,32,64,96,128,160,192,224,256,288,320].map(x => (
        <line key={x} x1={x} y1="158" x2={x} y2="200"
          stroke="#9A7840" strokeWidth="0.7" opacity="0.5" />
      ))}
      {[165,175,185,195].map(y => (
        <line key={y} x1="0" y1={y} x2="320" y2={y}
          stroke="#9A7840" strokeWidth="0.4" opacity="0.3" />
      ))}

      {/* Mennyezet */}
      <rect x="0" y="0" width="320" height="12" fill="#E0D8C8" />
      <rect x="0" y="10" width="320" height="3" fill="#C8C0B0" />

      {/* ── MENNYEZETI LÁMPA ── */}
      {[80, 240].map(x => (
        <g key={x}>
          <line x1={x} y1="10" x2={x} y2="25" stroke="#888" strokeWidth="1.5" />
          <rect x={x-18} y="22" width="36" height="8" fill="#DDDDCC" rx="3"
            filter="url(#softLB)" />
          <rect x={x-16} y="23" width="32" height="5" fill="#FFFFEE" rx="2" opacity="0.9" />
          <ellipse cx={x} cy="28" rx="20" ry="8" fill="#FFFF88" opacity="0.15"
            filter="url(#softLB)" />
        </g>
      ))}

      {/* ── BAL KÖNYVESPOLC ── */}
      {/* Polc keret */}
      <rect x="5" y="15" width="90" height="145" fill="url(#shelfLB)" rx="2"
        filter="url(#shadowLB)" />
      <rect x="7" y="17" width="86" height="141" fill="#C8A870" rx="1" />
      {/* Polc deszkák */}
      {[50,85,120,155].map(y => (
        <rect key={y} x="5" y={y} width="90" height="5"
          fill="url(#shelfLB)" rx="1" />
      ))}

      {/* Könyvek – sor 1 (y: 17-50) */}
      {[
        {x:10, w:9,  h:28, c:"#CC2222"},
        {x:20, w:7,  h:25, c:"#2244CC"},
        {x:28, w:10, h:30, c:"#228833"},
        {x:39, w:8,  h:26, c:"#CC8822"},
        {x:48, w:9,  h:29, c:"#882288"},
        {x:58, w:7,  h:24, c:"#CC4422"},
        {x:66, w:10, h:28, c:"#224488"},
        {x:77, w:8,  h:26, c:"#338844"},
        {x:86, w:8,  h:27, c:"#AA2244"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={50-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={50-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* Könyvek – sor 2 (y: 55-85) */}
      {[
        {x:10, w:8,  h:25, c:"#DD4444"},
        {x:19, w:10, h:28, c:"#4466DD"},
        {x:30, w:7,  h:22, c:"#44AA44"},
        {x:38, w:9,  h:26, c:"#DDAA22"},
        {x:48, w:8,  h:24, c:"#AA44AA"},
        {x:57, w:10, h:27, c:"#DD6633"},
        {x:68, w:7,  h:23, c:"#3366AA"},
        {x:76, w:9,  h:25, c:"#55AA55"},
        {x:86, w:8,  h:26, c:"#CC3355"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={85-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={85-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* Könyvek – sor 3 (y: 90-120) */}
      {[
        {x:10, w:9,  h:26, c:"#BB3333"},
        {x:20, w:8,  h:24, c:"#3355BB"},
        {x:29, w:10, h:28, c:"#33AA33"},
        {x:40, w:7,  h:22, c:"#BB9922"},
        {x:48, w:9,  h:26, c:"#993399"},
        {x:58, w:8,  h:24, c:"#BB5522"},
        {x:67, w:10, h:27, c:"#2255AA"},
        {x:78, w:7,  h:23, c:"#449944"},
        {x:86, w:8,  h:25, c:"#BB2244"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={120-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={120-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* Könyvek – sor 4 (y: 125-155) */}
      {[
        {x:10, w:8,  h:24, c:"#EE3333"},
        {x:19, w:10, h:27, c:"#3377EE"},
        {x:30, w:7,  h:22, c:"#33BB33"},
        {x:38, w:9,  h:25, c:"#EEBB22"},
        {x:48, w:8,  h:23, c:"#BB44BB"},
        {x:57, w:10, h:26, c:"#EE7744"},
        {x:68, w:7,  h:22, c:"#4477BB"},
        {x:76, w:9,  h:24, c:"#55BB55"},
        {x:86, w:8,  h:25, c:"#EE4466"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={155-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={155-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* ── JOBB KÖNYVESPOLC ── */}
      <rect x="225" y="15" width="90" height="145" fill="url(#shelfLB)" rx="2"
        filter="url(#shadowLB)" />
      <rect x="227" y="17" width="86" height="141" fill="#C8A870" rx="1" />
      {[50,85,120,155].map(y => (
        <rect key={y} x="225" y={y} width="90" height="5"
          fill="url(#shelfLB)" rx="1" />
      ))}

      {/* Könyvek jobb polcon – sor 1 */}
      {[
        {x:230, w:9,  h:27, c:"#2233AA"},
        {x:240, w:8,  h:24, c:"#AA3322"},
        {x:249, w:10, h:29, c:"#229933"},
        {x:260, w:7,  h:25, c:"#AA7722"},
        {x:268, w:9,  h:28, c:"#772299"},
        {x:278, w:8,  h:23, c:"#994422"},
        {x:287, w:9,  h:27, c:"#224499"},
        {x:297, w:8,  h:25, c:"#339944"},
        {x:306, w:8,  h:26, c:"#992244"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={50-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={50-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* Könyvek jobb polcon – sor 2 */}
      {[
        {x:230, w:8,  h:25, c:"#CC3344"},
        {x:239, w:10, h:27, c:"#3344CC"},
        {x:250, w:7,  h:22, c:"#33AA44"},
        {x:258, w:9,  h:26, c:"#CCAA33"},
        {x:268, w:8,  h:24, c:"#AA33CC"},
        {x:277, w:9,  h:26, c:"#CC5533"},
        {x:287, w:8,  h:23, c:"#3355CC"},
        {x:296, w:9,  h:25, c:"#44AA44"},
        {x:306, w:8,  h:26, c:"#CC3355"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={85-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={85-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* Könyvek jobb polcon – sor 3 */}
      {[
        {x:230, w:9,  h:26, c:"#BB2233"},
        {x:240, w:8,  h:23, c:"#2233BB"},
        {x:249, w:10, h:28, c:"#22AA33"},
        {x:260, w:7,  h:22, c:"#BBAA22"},
        {x:268, w:9,  h:25, c:"#9922AA"},
        {x:278, w:8,  h:24, c:"#BB5522"},
        {x:287, w:9,  h:26, c:"#2244AA"},
        {x:297, w:8,  h:23, c:"#44AA44"},
        {x:306, w:8,  h:25, c:"#BB2244"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={120-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={120-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* Könyvek jobb polcon – sor 4 */}
      {[
        {x:230, w:8,  h:24, c:"#EE2233"},
        {x:239, w:10, h:26, c:"#2244EE"},
        {x:250, w:7,  h:21, c:"#22BB33"},
        {x:258, w:9,  h:25, c:"#EEBB33"},
        {x:268, w:8,  h:23, c:"#BB22EE"},
        {x:277, w:9,  h:25, c:"#EE6644"},
        {x:287, w:8,  h:22, c:"#4466BB"},
        {x:296, w:9,  h:24, c:"#44BB44"},
        {x:306, w:8,  h:25, c:"#EE3355"},
      ].map(({x,w,h,c}) => (
        <g key={x}>
          <rect x={x} y={155-h} width={w} height={h} fill={c} rx="1" />
          <rect x={x+1} y={155-h+1} width={w-2} height={3} fill="white" opacity="0.15" />
        </g>
      ))}

      {/* ── OLVASÓ ASZTAL ── */}
      <rect x="105" y="118" width="110" height="6" fill="#8B6340" rx="2"
        filter="url(#shadowLB)" />
      <rect x="107" y="116" width="106" height="5" fill="#A07848" rx="2" />
      {/* Asztallábak */}
      {[110,125,175,190].map(x => (
        <rect key={x} x={x} y="124" width="5" height="34" fill="#7A5530" rx="1" />
      ))}
      {/* Asztal árnyék */}
      <ellipse cx="160" cy="160" rx="52" ry="4" fill="#00000022" />

      {/* Könyv az asztalon – R=true esetén nyitva, R=false csukva (KÖZEPES) */}
      {R ? (
        <g>
          <path d="M 135 116 Q 160 110 185 116" fill="#EEEECC" stroke="#CCC" strokeWidth="0.8" />
          <path d="M 135 116 Q 148 112 160 116" fill="#F5F5E0" />
          <path d="M 160 116 Q 173 112 185 116" fill="#F0F0DA" />
          <line x1="160" y1="110" x2="160" y2="116" stroke="#CCC" strokeWidth="0.8" />
          {/* Sorok */}
          {[112,114].map(y => (
            <line key={y} x1="140" y1={y} x2="158" y2={y}
              stroke="#AAA" strokeWidth="0.6" opacity="0.6" />
          ))}
          {[112,114].map(y => (
            <line key={y} x1="162" y1={y} x2="180" y2={y}
              stroke="#AAA" strokeWidth="0.6" opacity="0.6" />
          ))}
        </g>
      ) : (
        <g>
          <rect x="138" y="112" width="44" height="5" fill="#CC3333" rx="1" />
          <rect x="140" y="113" width="40" height="2" fill="#EE5555" opacity="0.4" />
        </g>
      )}

      {/* ── OLVASÓ SZEMÉLY ── */}
      {/* Szék */}
      <rect x="145" y="138" width="30" height="4" fill="#8B6340" rx="1" />
      <rect x="148" y="142" width="5" height="16" fill="#7A5530" rx="1" />
      <rect x="167" y="142" width="5" height="16" fill="#7A5530" rx="1" />
      <rect x="145" y="130" width="30" height="10" fill="#9B7040" rx="1" />
      {/* Test */}
      <ellipse cx="160" cy="128" rx="10" ry="12" fill="#4455AA" />
      {/* Fej */}
      <circle cx="160" cy="113" r="8" fill="#FFCC99" />
      {/* Haj – R=true esetén más szín (KÖZEPES) */}
      <ellipse cx="160" cy="107" rx="9" ry="4" fill={R ? "#CC8833" : "#333333"} />
      {/* Szemüveg */}
      <circle cx="156" cy="113" r="3.5" fill="none" stroke="#888" strokeWidth="1" />
      <circle cx="164" cy="113" r="3.5" fill="none" stroke="#888" strokeWidth="1" />
      <line x1="152" y1="113" x2="149" y2="113" stroke="#888" strokeWidth="1" />
      <line x1="160" y1="113" x2="160" y2="113" stroke="#888" strokeWidth="1" />
      <line x1="167" y1="113" x2="170" y2="113" stroke="#888" strokeWidth="1" />
      {/* Karok */}
      <line x1="150" y1="122" x2="140" y2="117"
        stroke="#FFCC99" strokeWidth="3" strokeLinecap="round" />
      <line x1="170" y1="122" x2="180" y2="117"
        stroke="#FFCC99" strokeWidth="3" strokeLinecap="round" />

      {/* ── ABLAK a hátsó falon ── */}
      <rect x="118" y="18" width="84" height="55" fill="#88BBDD" rx="3"
        stroke="#C8B898" strokeWidth="2" filter="url(#shadowLB)" />
      {/* Ablak belső keret */}
      <line x1="160" y1="18" x2="160" y2="73" stroke="#C8B898" strokeWidth="1.5" />
      <line x1="118" y1="46" x2="202" y2="46" stroke="#C8B898" strokeWidth="1.5" />
      {/* Ablak fény */}
      <rect x="120" y="20" width="38" height="24" fill="#AAD8EE" opacity="0.6" />
      <rect x="162" y="20" width="38" height="24" fill="#AAD8EE" opacity="0.5" />
      {/* Kilátás az ablakon – R=true esetén 3 madár, R=false 2 (NEHÉZ) */}
      <path d="M 128 35 Q 132 31 136 35 Q 140 31 144 35"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 168 30 Q 172 26 176 30 Q 180 26 184 30"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      {R && (
        <path d="M 145 42 Q 149 38 153 42 Q 157 38 161 42"
          fill="none" stroke="#33344488" strokeWidth="1.2" />
      )}
      {/* Ablak függöny */}
      <path d="M 118 18 Q 125 30 122 45 Q 120 58 118 73"
        fill="#E8D8C0" opacity="0.7" />
      <path d="M 202 18 Q 195 30 198 45 Q 200 58 202 73"
        fill="#E8D8C0" opacity="0.7" />

      {/* ── TÁBLA a falon ── */}
      <rect x="118" y="78" width="84" height="30" fill="#228833" rx="2"
        filter="url(#shadowLB)" />
      <rect x="120" y="80" width="80" height="26" fill="#117722" rx="1" />
      <text x="160" y="90" textAnchor="middle" fontSize="6.5"
        fill="#AAFFAA" fontWeight="bold" letterSpacing="1">LIBRARY</text>
      <text x="160" y="101" textAnchor="middle" fontSize="5.5"
        fill="#88EE88" letterSpacing="0.5">OPENING HOURS</text>
      {/* Nyitvatartás – R=true esetén más szám (KÖZEPES) */}
      <text x="160" y="109" textAnchor="middle" fontSize="6"
        fill="#CCFFCC" fontWeight="bold">
        {R ? "9AM - 7PM" : "9AM - 8PM"}
      </text>

      {/* ── VIRÁGCSERÉP az asztalon ── */}
      <rect x="192" y="110" width="12" height="8" fill="#C84422" rx="1" />
      <ellipse cx="198" cy="110" rx="7" ry="3" fill="#AA3322" />
      <rect x="194" y="105" width="8" height="6" fill="#3A8A18" rx="1" />
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle}
          cx={198 + Math.cos(angle * Math.PI / 180) * 5}
          cy={103 + Math.sin(angle * Math.PI / 180) * 4}
          rx="3" ry="2"
          fill="#FF6688"
          transform={`rotate(${angle} 198 103)`}
          opacity="0.9" />
      ))}
      <circle cx="198" cy="103" r="2" fill="#FFE566" />

      {/* ── LÉTRA a polcon – R=true esetén 4 fok, R=false 5 (NEHÉZ) ── */}
      <line x1="98" y1="60" x2="98" y2="158" stroke="#8B6340" strokeWidth="2.5" />
      <line x1="106" y1="55" x2="106" y2="158" stroke="#8B6340" strokeWidth="2.5" />
      {[70,85,100,115,...(R ? [] : [130])].map(y => (
        <line key={y} x1="98" y1={y} x2="106" y2={y}
          stroke="#8B6340" strokeWidth="2" />
      ))}

      {/* Árnyékok */}
      <rect x="5" y="157" width="90" height="3" fill="#00000022" />
      <rect x="225" y="157" width="90" height="3" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 24: SPORT PÁLYA ───────────────────────────────────────────────────
function SportsSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skySP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4488CC" />
          <stop offset="100%" stopColor="#AACCEE" />
        </linearGradient>
        <linearGradient id="grassSP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#44AA44" />
          <stop offset="100%" stopColor="#228822" />
        </linearGradient>
        <linearGradient id="trackSP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CC7733" />
          <stop offset="100%" stopColor="#AA5522" />
        </linearGradient>
        <linearGradient id="standSP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CCCCCC" />
          <stop offset="100%" stopColor="#999999" />
        </linearGradient>
        <filter id="shadowSP">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softSP">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skySP)" />

      {/* Nap */}
      <circle cx="38" cy="28" r="17" fill="#FFE566" filter="url(#softSP)" opacity="0.9" />
      <circle cx="38" cy="28" r="11" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="140" cy="22" rx="30" ry="12" fill="white" />
        <ellipse cx="123" cy="26" rx="19" ry="9" fill="white" />
        <ellipse cx="157" cy="26" rx="21" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="260" cy="18" rx="24" ry="10" fill="white" />
        <ellipse cx="247" cy="22" rx="15" ry="8" fill="white" />
        <ellipse cx="273" cy="22" rx="16" ry="8" fill="white" />
      </g>

      {/* ── LELÁTÓ ── */}
      <rect x="0" y="38" width="320" height="72" fill="url(#standSP)" filter="url(#shadowSP)" />
      {/* Lelátó lépcsők */}
      {[45,55,65,75,85,95,105].map((y,i) => (
        <rect key={y} x={i*4} y={y} width={320-i*8} height={10}
          fill="#BBBBBB" stroke="#AAAAAA" strokeWidth="0.5" />
      ))}
      {/* Lelátó tető */}
      <rect x="0" y="35" width="320" height="8" fill="#888" rx="1" />
      <rect x="0" y="35" width="320" height="3" fill="#AAA" rx="1" />

      {/* ── NÉZŐK a lelátón ── */}
      {[
        [18,60],[38,60],[58,60],[78,60],[98,60],[118,60],[138,60],
        [158,60],[178,60],[198,60],[218,60],[238,60],[258,60],[278,60],[298,60],
        [28,72],[48,72],[68,72],[88,72],[108,72],[128,72],[148,72],
        [168,72],[188,72],[208,72],[228,72],[248,72],[268,72],[288,72],
      ].map(([x,y],i) => (
        <g key={`${x}-${y}`}>
          <ellipse cx={x} cy={y+6} rx="6" ry="7"
            fill={["#CC2222","#2244CC","#22AA22","#CCAA22","#AA22AA","#CC6622"][i%6]}
            opacity="0.85" />
          <circle cx={x} cy={y} r="5"
            fill={["#FFCC99","#FFAA88","#FFB899"][i%3]} />
        </g>
      ))}

      {/* ── FUTÓPÁLYA ── */}
      <ellipse cx="160" cy="148" rx="148" ry="42" fill="url(#trackSP)" />
      <ellipse cx="160" cy="148" rx="148" ry="42" fill="none"
        stroke="#DD8844" strokeWidth="1" />
      {/* Sávvonalak */}
      {[36,30,24,18,12,6].map((r,i) => (
        <ellipse key={i} cx="160" cy="148" rx={148-r*4} ry={42-r}
          fill="none" stroke="#EE9955" strokeWidth="0.7" opacity="0.6" />
      ))}
      {/* Rajtvonal */}
      <line x1="160" y1="106" x2="160" y2="190"
        stroke="white" strokeWidth="2" opacity="0.8" />

      {/* ── FÜVES PÁLYA belül ── */}
      <ellipse cx="160" cy="148" rx="122" ry="32" fill="url(#grassSP)" />
      {/* Pályacsíkok */}
      {[0,1,2,3].map(i => (
        <ellipse key={i} cx="160" cy="148" rx={122-i*28} ry={32-i*7}
          fill="none" stroke="#33AA33" strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* Középvonal */}
      <line x1="38" y1="148" x2="282" y2="148"
        stroke="white" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="160" cy="148" rx="18" ry="6"
        fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />

      {/* ── KAPU BAL ── */}
      <rect x="30" y="135" width="5" height="28" fill="white"
        stroke="#CCC" strokeWidth="0.5" filter="url(#shadowSP)" />
      <rect x="30" y="135" width="22" height="5" fill="white"
        stroke="#CCC" strokeWidth="0.5" />
      <rect x="47" y="135" width="5" height="28" fill="white"
        stroke="#CCC" strokeWidth="0.5" />
      {/* Háló */}
      {[34,38,42,46].map(x => (
        <line key={x} x1={x} y1="140" x2={x-2} y2="163"
          stroke="#DDD" strokeWidth="0.6" opacity="0.7" />
      ))}
      {[142,148,154,160].map(y => (
        <line key={y} x1="30" y1={y} x2="52" y2={y}
          stroke="#DDD" strokeWidth="0.6" opacity="0.7" />
      ))}

      {/* ── KAPU JOBB ── */}
      <rect x="268" y="135" width="5" height="28" fill="white"
        stroke="#CCC" strokeWidth="0.5" filter="url(#shadowSP)" />
      <rect x="268" y="135" width="22" height="5" fill="white"
        stroke="#CCC" strokeWidth="0.5" />
      <rect x="285" y="135" width="5" height="28" fill="white"
        stroke="#CCC" strokeWidth="0.5" />
      {[272,276,280,284].map(x => (
        <line key={x} x1={x} y1="140" x2={x+2} y2="163"
          stroke="#DDD" strokeWidth="0.6" opacity="0.7" />
      ))}
      {[142,148,154,160].map(y => (
        <line key={y} x1="268" y1={y} x2="290" y2={y}
          stroke="#DDD" strokeWidth="0.6" opacity="0.7" />
      ))}

      {/* ── ZÁSZLÓK a sarkokon ── */}
      {[
        {x:38, y:116, r:true},
        {x:282, y:116, r:false},
      ].map(({x,y,r}) => (
        <g key={x}>
          <line x1={x} y1={y} x2={x} y2={y+20} stroke="#888" strokeWidth="1.5" />
          {/* R=true esetén bal zászló piros, R=false sárga (KÖZEPES) */}
          <polygon
            points={`${x},${y} ${x+(r?14:14)},${y+5} ${x},${y+10}`}
            fill={r ? (R ? "#EE2222" : "#EED422") : "#EE2222"} />
        </g>
      ))}

      {/* ── FUTÓK ── */}
      {/* 1. futó */}
      <g>
        <ellipse cx="160" cy="122" rx="6" ry="8" fill="#CC2222" />
        <circle cx="160" cy="112" r="6" fill="#FFCC99" />
        <ellipse cx="160" cy="108" rx="6" ry="3" fill="#222" />
        {/* Lábak futás közben */}
        <line x1="157" y1="129" x2="152" y2="142"
          stroke="#CC2222" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="163" y1="129" x2="170" y2="140"
          stroke="#CC2222" strokeWidth="2.5" strokeLinecap="round" />
        {/* Karok */}
        <line x1="154" y1="118" x2="146" y2="124"
          stroke="#FFCC99" strokeWidth="2" strokeLinecap="round" />
        <line x1="166" y1="118" x2="174" y2="122"
          stroke="#FFCC99" strokeWidth="2" strokeLinecap="round" />
        {/* Rajtszám – R=true esetén 8, R=false 6 (KÖZEPES) */}
        <rect x="156" y="118" width="8" height="7" fill="white" rx="1" />
        <text x="160" y="123" textAnchor="middle" fontSize="5"
          fill="#CC2222" fontWeight="bold">{R ? "8" : "6"}</text>
      </g>

      {/* 2. futó */}
      <g>
        <ellipse cx="130" cy="126" rx="6" ry="8" fill="#2244CC" />
        <circle cx="130" cy="116" r="6" fill="#FFAA88" />
        <ellipse cx="130" cy="112" rx="6" ry="3" fill="#8B4513" />
        <line x1="127" y1="133" x2="122" y2="146"
          stroke="#2244CC" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="133" y1="133" x2="140" y2="144"
          stroke="#2244CC" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="124" y1="122" x2="116" y2="128"
          stroke="#FFAA88" strokeWidth="2" strokeLinecap="round" />
        <line x1="136" y1="122" x2="144" y2="126"
          stroke="#FFAA88" strokeWidth="2" strokeLinecap="round" />
        <rect x="126" y="122" width="8" height="7" fill="white" rx="1" />
        <text x="130" y="127" textAnchor="middle" fontSize="5"
          fill="#2244CC" fontWeight="bold">3</text>
      </g>

      {/* 3. futó */}
      <g>
        <ellipse cx="190" cy="126" rx="6" ry="8" fill="#228833" />
        <circle cx="190" cy="116" r="6" fill="#FFCC99" />
        <ellipse cx="190" cy="112" rx="6" ry="3" fill="#333" />
        <line x1="187" y1="133" x2="182" y2="146"
          stroke="#228833" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="193" y1="133" x2="200" y2="144"
          stroke="#228833" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="184" y1="122" x2="176" y2="128"
          stroke="#FFCC99" strokeWidth="2" strokeLinecap="round" />
        <line x1="196" y1="122" x2="204" y2="126"
          stroke="#FFCC99" strokeWidth="2" strokeLinecap="round" />
        <rect x="186" y="122" width="8" height="7" fill="white" rx="1" />
        <text x="190" y="127" textAnchor="middle" fontSize="5"
          fill="#228833" fontWeight="bold">7</text>
      </g>

      {/* ── LABDA – R=true esetén 4px-el arrébb (NEHÉZ) ── */}
      <circle cx={R ? "76" : "72"} cy="150" r="7"
        fill="white" stroke="#333" strokeWidth="0.8"
        filter="url(#shadowSP)" />
      {/* Labda csíkok */}
      <path d={`M ${R ? 70 : 66} 147 Q ${R ? 76 : 72} 143 ${R ? 82 : 78} 147`}
        fill="none" stroke="#333" strokeWidth="0.8" />
      <path d={`M ${R ? 70 : 66} 153 Q ${R ? 76 : 72} 157 ${R ? 82 : 78} 153`}
        fill="none" stroke="#333" strokeWidth="0.8" />
      <line x1={R ? "76" : "72"} y1="143" x2={R ? "76" : "72"} y2="157"
        stroke="#333" strokeWidth="0.8" />

      {/* ── EREDMÉNYTÁBLA – R=true esetén más pontszám (KÖZEPES) ── */}
      <rect x="118" y="38" width="84" height="30" fill="#111" rx="3"
        filter="url(#shadowSP)" />
      <rect x="120" y="40" width="80" height="26" fill="#000" rx="2" />
      <text x="160" y="50" textAnchor="middle" fontSize="6"
        fill="#FF4444" fontWeight="bold" letterSpacing="1">HOME  AWAY</text>
      <text x="160" y="62" textAnchor="middle" fontSize="10"
        fill="#00FF44" fontWeight="bold" letterSpacing="4">
        {R ? "2  1" : "1  1"}
      </text>

      {/* ── ZÁSZLÓRÚD ── */}
      <rect x="308" y="38" width="4" height="72" fill="#888" />
      {/* Zászló – R=true esetén 1 csík kevesebb (NEHÉZ) */}
      <rect x="312" y="38" width="22" height={R ? "14" : "20"} fill="#EE2222" />
      {!R && <rect x="312" y="52" width="22" height="6" fill="white" />}
      {!R && <rect x="312" y="58" width="22" height="6" fill="#2244CC" />}

      {/* ── SZPRINTLÁMPA ── */}
      <rect x="152" y="100" width="16" height="8" fill="#333" rx="2" />
      {[155,159,163].map((x,i) => (
        <circle key={x} cx={x} cy="104" r="2.5"
          fill={i === 0 ? "#FF2222" : i === 1 ? "#FFAA00" : "#22DD22"}
          opacity={0.9} />
      ))}
      <rect x="159" y="106" width="2" height="8" fill="#555" />

      {/* Árnyékok */}
      <ellipse cx="160" cy="148" rx="148" ry="8" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}
// ─── SCENE 25: TENGERPART ────────────────────────────────────────────────────
function BeachSVG2({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyB2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2277DD" />
          <stop offset="100%" stopColor="#88CCFF" />
        </linearGradient>
        <linearGradient id="seaB2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1166BB" />
          <stop offset="100%" stopColor="#0044AA" />
        </linearGradient>
        <linearGradient id="sandB2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0D888" />
          <stop offset="100%" stopColor="#D0B860" />
        </linearGradient>
        <linearGradient id="umbrellaB2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EE3333" />
          <stop offset="100%" stopColor="#AA1111" />
        </linearGradient>
        <filter id="shadowB2">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softB2">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyB2)" />

      {/* Nap – R=true esetén 6px-el arrébb (NEHÉZ) */}
      <circle cx={R ? "272" : "278"} cy="28" r="20"
        fill="#FFE566" filter="url(#softB2)" opacity="0.95" />
      <circle cx={R ? "272" : "278"} cy="28" r="13" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="75" cy="25" rx="30" ry="12" fill="white" />
        <ellipse cx="58" cy="29" rx="19" ry="9" fill="white" />
        <ellipse cx="92" cy="29" rx="21" ry="9" fill="white" />
      </g>
      <g opacity="0.75">
        <ellipse cx="185" cy="18" rx="24" ry="10" fill="white" />
        <ellipse cx="172" cy="22" rx="15" ry="8" fill="white" />
        <ellipse cx="198" cy="22" rx="16" ry="8" fill="white" />
      </g>

      {/* ── TENGER ── */}
      <rect x="0" y="85" width="320" height="70" fill="url(#seaB2)" />
      {/* Hullámok */}
      {[92,100,108,116,124].map(y => (
        <path key={y}
          d={`M 0 ${y} Q 40 ${y-4} 80 ${y} Q 120 ${y+4} 160 ${y} Q 200 ${y-4} 240 ${y} Q 280 ${y+4} 320 ${y}`}
          fill="none" stroke="#3388CC" strokeWidth="1.2" opacity="0.4" />
      ))}
      {/* Tenger fény csillogás */}
      {[30,70,110,150,190,230,270].map(x => (
        <ellipse key={x} cx={x} cy={95+(x%30)} rx="8" ry="2"
          fill="white" opacity="0.15" />
      ))}
      {/* Vízpart */}
      <path d="M 0 152 Q 80 146 160 150 Q 240 154 320 148"
        fill="#2277CC" opacity="0.5" />

      {/* ── HOMOK ── */}
      <path d="M 0 148 Q 80 142 160 146 Q 240 150 320 144 L 320 200 L 0 200"
        fill="url(#sandB2)" />
      {/* Homok textúra */}
      {[5,18,32,48,65,82,100,118,138,158,178,198,218,238,258,278,298,315].map((x,i) => (
        <ellipse key={x} cx={x} cy={152+(i%3)*3} rx={3+(i%2)} ry="1.5"
          fill="#C0A050" opacity="0.3" />
      ))}
      {/* Hullámvonal a homokparton */}
      <path d="M 0 150 Q 80 144 160 148 Q 240 152 320 146"
        fill="none" stroke="#88BBFF" strokeWidth="1.5" opacity="0.4" />

      {/* ── NAPERNYŐ BAL ── */}
      {/* Rúd */}
      <line x1="68" y1="108" x2="72" y2="162"
        stroke="#8B6340" strokeWidth="2.5" />
      {/* Napernyő – csíkos */}
      <path d="M 28 110 Q 68 88 108 110" fill="#EE3333" />
      <path d="M 28 110 Q 68 88 108 110" fill="none" stroke="#CC1111" strokeWidth="0.8" />
      {/* Csíkok */}
      {[38,48,58,68,78,88,98].map((x,i) => (
        <line key={x}
          x1={x} y1={110 - Math.sin((x-28)/80*Math.PI)*22}
          x2={68} y2={88}
          stroke={i%2===0 ? "#FF6666" : "#FFFF44"}
          strokeWidth="2" opacity="0.5" />
      ))}
      <ellipse cx="68" cy="88" rx="4" ry="2" fill="#CC1111" />

      {/* ── NAPERNYŐ JOBB ── */}
      <line x1="228" y1="112" x2="232" y2="162"
        stroke="#8B6340" strokeWidth="2.5" />
      <path d="M 188 114 Q 228 92 268 114" fill="#2244CC" />
      <path d="M 188 114 Q 228 92 268 114" fill="none" stroke="#112288" strokeWidth="0.8" />
      {[198,208,218,228,238,248,258].map((x,i) => (
        <line key={x}
          x1={x} y1={114 - Math.sin((x-188)/80*Math.PI)*22}
          x2={228} y2={92}
          stroke={i%2===0 ? "#4466EE" : "#FFFFFF"}
          strokeWidth="2" opacity="0.5" />
      ))}
      <ellipse cx="228" cy="92" rx="4" ry="2" fill="#112288" />

      {/* ── NAPÁGY BAL ── */}
      <rect x="38" y="152" width="55" height="8" fill="#E8C870" rx="3"
        filter="url(#shadowB2)" />
      <rect x="40" y="150" width="51" height="5" fill="#F0D080" rx="2" />
      {[42,58,74,84].map(x => (
        <rect key={x} x={x} y="159" width="4" height="8" fill="#C8A050" rx="1" />
      ))}

      {/* ── NAPÁGY JOBB ── */}
      <rect x="202" y="152" width="55" height="8" fill="#E8C870" rx="3"
        filter="url(#shadowB2)" />
      <rect x="204" y="150" width="51" height="5" fill="#F0D080" rx="2" />
      {[206,222,238,248].map(x => (
        <rect key={x} x={x} y="159" width="4" height="8" fill="#C8A050" rx="1" />
      ))}

      {/* ── FÜRDŐZŐ BAL – hason fekve ── */}
      <ellipse cx="65" cy="152" rx="18" ry="6" fill="#FFAA66" />
      <circle cx="83" cy="150" r="6" fill="#FFCC99" />
      <ellipse cx="82" cy="146" rx="7" ry="3"
        fill={R ? "#CC8833" : "#333"} />
      {/* Fürdőruha */}
      <ellipse cx="65" cy="152" rx="14" ry="5" fill="#EE4488" opacity="0.8" />
      {/* Karok */}
      <line x1="48" y1="150" x2="40" y2="148"
        stroke="#FFAA66" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="154" x2="38" y2="156"
        stroke="#FFAA66" strokeWidth="3" strokeLinecap="round" />

      {/* ── FÜRDŐZŐ JOBB – ülve ── */}
      <ellipse cx="228" cy="156" rx="8" ry="6" fill="#3355AA" />
      <circle cx="228" cy="145" r="7" fill="#FFCC99" />
      <ellipse cx="228" cy="140" rx="8" ry="3.5" fill="#333" />
      {/* Napszemüveg – R=true esetén piros keret, R=false fekete (KÖZEPES) */}
      <circle cx="224" cy="145" r="3.5" fill="none"
        stroke={R ? "#EE2222" : "#111"} strokeWidth="1.2" />
      <circle cx="232" cy="145" r="3.5" fill="none"
        stroke={R ? "#EE2222" : "#111"} strokeWidth="1.2" />
      <rect cx="224" cy="144" rx="1" ry="1"
        fill={R ? "#EE444488" : "#11111188"} />
      <line x1="220" y1="145" x2="217" y2="145"
        stroke={R ? "#EE2222" : "#111"} strokeWidth="1" />
      <line x1="236" y1="145" x2="239" y2="145"
        stroke={R ? "#EE2222" : "#111"} strokeWidth="1" />
      <line x1="228" y1="145" x2="228" y2="145"
        stroke={R ? "#EE2222" : "#111"} strokeWidth="1" />
      {/* Lábak */}
      <line x1="222" y1="161" x2="210" y2="170"
        stroke="#FFCC99" strokeWidth="4" strokeLinecap="round" />
      <line x1="234" y1="161" x2="246" y2="170"
        stroke="#FFCC99" strokeWidth="4" strokeLinecap="round" />

      {/* ── HOMOKVÁR – R=true esetén 1 toronnyal kevesebb (KÖZEPES) ── */}
      {/* Alap */}
      <rect x="128" y="148" width="64" height="12" fill="#D4B060" rx="2" />
      {/* Tornyok */}
      <rect x="130" y="138" width="14" height="12" fill="#C8A850" rx="1" />
      <rect x="149" y="140" width="14" height="10" fill="#C8A850" rx="1" />
      {!R && <rect x="168" y="138" width="14" height="12" fill="#C8A850" rx="1" />}
      <rect x="174" y="136" width="14" height="14" fill="#C8A850" rx="1" />
      {/* Torony csúcsok */}
      <polygon points="130,138 137,130 144,138" fill="#D4B060" />
      <polygon points="149,140 156,133 163,140" fill="#D4B060" />
      {!R && <polygon points="168,138 175,130 182,138" fill="#D4B060" />}
      <polygon points="174,136 181,128 188,136" fill="#D4B060" />
      {/* Ablakocskák */}
      <rect x="134" y="141" width="6" height="5" fill="#AA8830" rx="1" />
      <rect x="153" y="143" width="6" height="4" fill="#AA8830" rx="1" />
      {!R && <rect x="172" y="141" width="6" height="5" fill="#AA8830" rx="1" />}
      <rect x="178" y="139" width="6" height="6" fill="#AA8830" rx="1" />
      {/* Kapu */}
      <path d="M 152 160 Q 160 154 168 160" fill="#AA8830" />

      {/* ── HAJÓ a távolban ── */}
      <g opacity="0.8">
        <path d="M 100 98 L 120 98 L 115 108 L 105 108 Z" fill="white" />
        <rect x="109" y="82" width="2" height="16" fill="#888" />
        {/* Vitorla – R=true esetén piros, R=false fehér (KÖZEPES) */}
        <path d="M 111 82 L 111 96 L 122 96 Z"
          fill={R ? "#EE2222" : "white"} opacity="0.9" />
        <path d="M 109 85 L 109 96 L 100 96 Z"
          fill="white" opacity="0.8" />
      </g>

      {/* ── SIRÁLYOK – R=true esetén 4, R=false 3 (NEHÉZ) ── */}
      <path d="M 48 58 Q 52 54 56 58 Q 60 54 64 58"
        fill="none" stroke="#33344488" strokeWidth="1.3" />
      <path d="M 140 48 Q 144 44 148 48 Q 152 44 156 48"
        fill="none" stroke="#33344488" strokeWidth="1.3" />
      <path d="M 200 62 Q 204 58 208 62 Q 212 58 216 62"
        fill="none" stroke="#33344488" strokeWidth="1.3" />
      {R && (
        <path d="M 168 40 Q 172 36 176 40 Q 180 36 184 40"
          fill="none" stroke="#33344488" strokeWidth="1.3" />
      )}

      {/* ── STRANDLABDA ── */}
      <circle cx="155" cy="163" r="10" fill="white"
        stroke="#EE2222" strokeWidth="0.5" filter="url(#shadowB2)" />
      <path d="M 145 163 Q 155 153 165 163" fill="#EE2222" opacity="0.8" />
      <path d="M 145 163 Q 155 173 165 163" fill="#2244CC" opacity="0.8" />
      <path d="M 155 153 Q 162 163 155 173" fill="#22AA22" opacity="0.6" />
      <circle cx="155" cy="163" r="10" fill="none"
        stroke="#DDD" strokeWidth="0.5" />

      {/* Kagylók a parton */}
      {[88,108,178,290,308].map((x,i) => (
        <g key={x}>
          <ellipse cx={x} cy={160+(i%2)*5} rx="5" ry="3"
            fill="#E8C8A0" stroke="#C8A880" strokeWidth="0.5"
            transform={`rotate(${i*25} ${x} ${160+(i%2)*5})`} />
        </g>
      ))}

      {/* Lábnyomok */}
      {[95,103,112,120,128].map((x,i) => (
        <ellipse key={x} cx={x} cy={170+(i%2)*4} rx="3" ry="4"
          fill="#C0A050" opacity="0.35"
          transform={`rotate(${i%2===0?15:-15} ${x} ${170+(i%2)*4})`} />
      ))}

      {/* Árnyékok */}
      <ellipse cx="68" cy="160" rx="20" ry="3" fill="#00000022" />
      <ellipse cx="228" cy="165" rx="18" ry="3" fill="#00000022" />
      <ellipse cx="155" cy="170" rx="10" ry="2" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}
      // ─── SCENE 26: VIDÁMPARK ─────────────────────────────────────────────────────
function AmusementParkSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyAP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3377CC" />
          <stop offset="100%" stopColor="#99CCFF" />
        </linearGradient>
        <linearGradient id="groundAP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66AA44" />
          <stop offset="100%" stopColor="#338822" />
        </linearGradient>
        <linearGradient id="wheelAP" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CCCCCC" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="tentAP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EE3333" />
          <stop offset="100%" stopColor="#AA1111" />
        </linearGradient>
        <filter id="shadowAP">
          <feDropShadow dx="1.5" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softAP">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glowAP">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyAP)" />

      {/* Nap */}
      <circle cx="290" cy="25" r="18" fill="#FFE566" filter="url(#softAP)" opacity="0.9" />
      <circle cx="290" cy="25" r="12" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="70" cy="22" rx="28" ry="11" fill="white" />
        <ellipse cx="54" cy="26" rx="17" ry="8" fill="white" />
        <ellipse cx="86" cy="26" rx="19" ry="8" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="185" cy="18" rx="22" ry="9" fill="white" />
        <ellipse cx="173" cy="22" rx="14" ry="7" fill="white" />
        <ellipse cx="197" cy="22" rx="15" ry="7" fill="white" />
      </g>

      {/* ── TALAJ ── */}
      <rect x="0" y="158" width="320" height="42" fill="url(#groundAP)" />
      {/* Ösvény */}
      <rect x="0" y="158" width="320" height="6" fill="#CCC" opacity="0.6" />
      {[30,70,110,150,190,230,270].map(x => (
        <rect key={x} x={x} y="158" width="20" height="6"
          fill="#BBB" opacity="0.4" />
      ))}

      {/* ── ÓRIÁSKERÉK ── */}
      {/* Tartószerkezet */}
      <line x1="62" y1="148" x2="98" y2="148" stroke="#777" strokeWidth="3" />
      <line x1="80" y1="148" x2="80" y2="50" stroke="#777" strokeWidth="3" />
      {/* Kerék */}
      <circle cx="80" cy="80" r="55" fill="none"
        stroke="url(#wheelAP)" strokeWidth="4" filter="url(#shadowAP)" />
      <circle cx="80" cy="80" r="8" fill="#888" />
      <circle cx="80" cy="80" r="5" fill="#AAA" />
      {/* Küllők */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(angle => (
        <line key={angle}
          x1={80 + Math.cos(angle * Math.PI / 180) * 8}
          y1={80 + Math.sin(angle * Math.PI / 180) * 8}
          x2={80 + Math.cos(angle * Math.PI / 180) * 55}
          y2={80 + Math.sin(angle * Math.PI / 180) * 55}
          stroke="#999" strokeWidth="1.2" opacity="0.7" />
      ))}
      {/* Gondolák */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const cx = 80 + Math.cos(angle * Math.PI / 180) * 52
        const cy = 80 + Math.sin(angle * Math.PI / 180) * 52
        const colors = ["#EE2222","#2244EE","#22AA22","#EEEE22","#EE88AA","#22AAEE","#EE8822","#AA22EE"]
        return (
          <g key={angle}>
            <rect x={cx-6} y={cy-5} width="12" height="10"
              fill={colors[i]} rx="2" filter="url(#shadowAP)" />
            <rect x={cx-5} y={cy-4} width="10" height="4"
              fill="white" opacity="0.2" rx="1" />
          </g>
        )
      })}

      {/* ── HULLÁMVASÚT ── */}
      {/* Pálya */}
      <path d="M 148 155 Q 165 120 182 138 Q 196 155 210 130 Q 222 108 238 128 Q 252 148 268 125 Q 278 110 290 128 L 295 158 L 148 158"
        fill="#AA8855" opacity="0.5" />
      <path d="M 148 155 Q 165 120 182 138 Q 196 155 210 130 Q 222 108 238 128 Q 252 148 268 125 Q 278 110 290 128"
        fill="none" stroke="#8B6340" strokeWidth="4" />
      <path d="M 148 158 Q 165 123 182 141 Q 196 158 210 133 Q 222 111 238 131 Q 252 151 268 128 Q 278 113 290 131"
        fill="none" stroke="#8B6340" strokeWidth="4" />
      {/* Tartóoszlopok */}
      {[155,175,200,225,248,272,288].map(x => (
        <line key={x} x1={x} y1="158" x2={x} y2={158}
          stroke="#7A5530" strokeWidth="2" />
      ))}
      {/* Kocsi – R=true esetén piros, R=false sárga (KÖZEPES) */}
      <rect x="205" y="122" width="20" height="12" fill={R ? "#EE2222" : "#EEEE22"}
        rx="3" filter="url(#shadowAP)" />
      <rect x="207" y="123" width="16" height="5" fill="white" opacity="0.2" rx="1" />
      {[209,220].map(x => (
        <g key={x}>
          <circle cx={x} cy="135" r="4" fill="#333" />
          <circle cx={x} cy="135" r="2.5" fill="#555" />
        </g>
      ))}
      {/* Utasok a kocsiban */}
      <circle cx="212" cy="122" r="4" fill="#FFCC99" />
      <circle cx="220" cy="122" r="4" fill="#FFAA88" />

      {/* ── KÖRHINTA ── */}
      {/* Középső oszlop */}
      <rect x="134" y="95" width="6" height="65" fill="#CC4422" rx="2" />
      {/* Tető */}
      <polygon points="120,95 137,72 154,95" fill="url(#tentAP)" filter="url(#shadowAP)" />
      <polygon points="120,95 137,72 154,95" fill="none" stroke="#881111" strokeWidth="0.8" />
      <polygon points="130,95 137,80 144,95" fill="#FFFF44" opacity="0.6" />
      <circle cx="137" cy="72" r="4" fill="#FFD700" filter="url(#glowAP)" />
      {/* Platform */}
      <ellipse cx="137" cy="158" rx="22" ry="5" fill="#C88840" filter="url(#shadowAP)" />
      <ellipse cx="137" cy="157" rx="20" ry="4" fill="#D89A50" />
      {/* Lovak */}
      {[0,90,180,270].map((angle, i) => {
        const hx = 137 + Math.cos(angle * Math.PI / 180) * 16
        const hy = 145 + Math.sin(angle * Math.PI / 180) * 3
        return (
          <g key={angle}>
            <line x1="137" y1="95" x2={hx} y2={hy}
              stroke="#AA7730" strokeWidth="1" opacity="0.6" />
            {/* Ló */}
            <ellipse cx={hx} cy={hy+4} rx="7" ry="4"
              fill={["#EEEEEE","#CC8833","#888888","#FFCC88"][i]} />
            <circle cx={hx+5} cy={hy+1} r="3.5"
              fill={["#DDDDDD","#BB7722","#777777","#EEBB77"][i]} />
            <line x1={hx+2} y1={hy+7} x2={hx+1} y2={hy+14}
              stroke={["#CCC","#AA6611","#666","#DDAA66"][i]} strokeWidth="1.5" />
            <line x1={hx+6} y1={hy+7} x2={hx+7} y2={hy+14}
              stroke={["#CCC","#AA6611","#666","#DDAA66"][i]} strokeWidth="1.5" />
          </g>
        )
      })}

      {/* ── JÉGKRÉM ÁRUS ── */}
      {/* Kocsi */}
      <rect x="155" y="148" width="40" height="15" fill="white"
        rx="3" filter="url(#shadowAP)" />
      <rect x="157" y="145" width="36" height="6" fill="#EEE" rx="2" />
      <rect x="159" y="143" width="32" height="4" fill="#DDD" rx="1" />
      {/* Ernyő */}
      <line x1="175" y1="143" x2="175" y2="128" stroke="#888" strokeWidth="1.5" />
      <path d="M 158 130 Q 175 118 192 130" fill="#EE4488" />
      {[162,170,178,186].map((x,i) => (
        <line key={x}
          x1={x} y1={130 - Math.sin((x-158)/34*Math.PI)*12}
          x2={175} y2={118}
          stroke={i%2===0?"#FF88BB":"#FFD700"}
          strokeWidth="1.5" opacity="0.6" />
      ))}
      {/* Kerekek */}
      {[162,183].map(x => (
        <g key={x}>
          <circle cx={x} cy="163" r="5" fill="#333" />
          <circle cx={x} cy="163" r="3" fill="#555" />
        </g>
      ))}
      {/* ICE CREAM felirat */}
      <text x="175" y="155" textAnchor="middle" fontSize="5"
        fill="#EE4488" fontWeight="bold">ICE CREAM</text>
      {/* Jégkrémek a kocsin – R=true esetén 3, R=false 4 (KÖZEPES) */}
      {[163,169,175,...(R ? [] : [181])].map(x => (
        <g key={x}>
          <rect x={x-2} y="135" width="4" height="8" fill="#F0C060" />
          <ellipse cx={x} cy="135" rx="4" ry="5"
            fill={x===163?"#FF8888":x===169?"#88CCFF":x===175?"#FFEE88":"#88EE88"} />
        </g>
      ))}

      {/* ── LUFI ÁRUS ── */}
      {/* Test */}
      <ellipse cx="112" cy="158" rx="7" ry="9" fill="#336633" />
      <circle cx="112" cy="146" r="7" fill="#FFCC99" />
      <ellipse cx="112" cy="142" rx="7" ry="3" fill="#222" />
      <rect x="107" y="165" width="4" height="12" fill="#224422" rx="1" />
      <rect x="113" y="165" width="4" height="12" fill="#224422" rx="1" />
      {/* Lufik – R=true esetén 5 lufi, R=false 6 (NEHÉZ) */}
      {[
        {x:104, y:128, c:"#EE2222"},
        {x:114, y:122, c:"#2244EE"},
        {x:122, y:128, c:"#22CC22"},
        {x:108, y:118, c:"#EEEE22"},
        {x:118, y:116, c:"#EE44EE"},
        ...(R ? [] : [{x:100, y:120, c:"#22EEEE"}]),
      ].map(({x,y,c}) => (
        <g key={`${x}-${y}`}>
          <ellipse cx={x} cy={y} rx="6" ry="7" fill={c} opacity="0.9"
            filter="url(#glowAP)" />
          <ellipse cx={x-1} cy={y-2} rx="2" ry="2" fill="white" opacity="0.25" />
          <line x1={x} y1={y+7} x2={112} y2={145}
            stroke="#888" strokeWidth="0.7" opacity="0.6" />
        </g>
      ))}

      {/* ── BEJÁRATI KAPU ── */}
      <rect x="230" y="115" width="80" height="45" fill="#DD3322" rx="3"
        filter="url(#shadowAP)" />
      {/* Kapu ívek */}
      <path d="M 230 140 Q 230 115 250 115 Q 270 115 270 140"
        fill="#BB2211" />
      <path d="M 270 140 Q 270 115 290 115 Q 310 115 310 140"
        fill="#BB2211" />
      {/* Kapu tábla */}
      <rect x="232" y="117" width="76" height="12" fill="#AA1100" rx="1" />
      <text x="270" y="126" textAnchor="middle" fontSize="6.5"
        fill="#FFD700" fontWeight="bold" letterSpacing="1">FUN PARK</text>
      {/* Csillagok a táblán – R=true esetén 2, R=false 3 (NEHÉZ) */}
      {[242, 270, ...(R ? [] : [298])].map(x => (
        <text key={x} x={x} y="126" textAnchor="middle"
          fontSize="6" fill="#FFD700">★</text>
      ))}
      {/* Kapu oszlopok */}
      <rect x="228" y="112" width="8" height="48" fill="#BB2211" rx="2" />
      <rect x="304" y="112" width="8" height="48" fill="#BB2211" rx="2" />
      {/* Lampionok a kapun */}
      {[232,258,284,308].map((x,i) => (
        <g key={x}>
          <ellipse cx={x} cy="112" rx="5" ry="6"
            fill={i%2===0?"#EE2222":"#EEEE22"} opacity="0.9"
            filter="url(#glowAP)" />
          <ellipse cx={x} cy="109" rx="3" ry="2" fill="white" opacity="0.2" />
        </g>
      ))}

      {/* ── LAMPIONOK az ösvény mentén ── */}
      {[20,55,200].map((x,i) => (
        <g key={x}>
          <rect x={x} y="138" width="3" height="22" fill="#888" />
          <ellipse cx={x+1} cy="137" rx="7" ry="4"
            fill={["#FFE566","#FF8888","#88FFFF"][i]} opacity="0.85"
            filter="url(#softAP)" />
        </g>
      ))}

      {/* Madarak */}
      <path d="M 115 35 Q 119 31 123 35 Q 127 31 131 35"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 215 28 Q 219 24 223 28 Q 227 24 231 28"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="80" cy="152" rx="45" ry="4" fill="#00000033" />
      <ellipse cx="137" cy="162" rx="22" ry="3" fill="#00000033" />
      <ellipse cx="225" cy="140" rx="52" ry="4" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
      // ─── SCENE 27: KÖZÉPKORI VÁR ─────────────────────────────────────────────────
function CastleSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="skyCA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3366AA" />
          <stop offset="100%" stopColor="#99BBDD" />
        </linearGradient>
        <linearGradient id="stoneCA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#AAAAAA" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="groundCA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#558833" />
          <stop offset="100%" stopColor="#336611" />
        </linearGradient>
        <linearGradient id="waterCA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2255AA" />
          <stop offset="100%" stopColor="#113388" />
        </linearGradient>
        <filter id="shadowCA">
          <feDropShadow dx="1.5" dy="2" stdDeviation="2" floodColor="#00000055" />
        </filter>
        <filter id="softCA">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── ÉGBOLT ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#skyCA)" />

      {/* Nap */}
      <circle cx="285" cy="28" r="18" fill="#FFE566" filter="url(#softCA)" opacity="0.9" />
      <circle cx="285" cy="28" r="12" fill="#FFD700" />

      {/* Felhők */}
      <g opacity="0.88">
        <ellipse cx="65" cy="25" rx="30" ry="12" fill="white" />
        <ellipse cx="48" cy="29" rx="19" ry="9" fill="white" />
        <ellipse cx="82" cy="29" rx="21" ry="9" fill="white" />
      </g>
      <g opacity="0.8">
        <ellipse cx="195" cy="20" rx="24" ry="10" fill="white" />
        <ellipse cx="182" cy="24" rx="15" ry="8" fill="white" />
        <ellipse cx="208" cy="24" rx="16" ry="8" fill="white" />
      </g>

      {/* ── HÁTTÉR HEGYEK ── */}
      <path d="M 0 110 Q 40 75 80 100 Q 120 125 160 85 Q 200 45 240 80 Q 280 115 320 90 L 320 160 L 0 160"
        fill="#447733" opacity="0.5" />
      <path d="M 0 120 Q 50 90 100 110 Q 150 130 200 100 Q 250 70 300 105 L 320 110 L 320 160 L 0 160"
        fill="#336622" opacity="0.4" />

      {/* ── VÁR ALAPJA ── */}
      <rect x="55" y="80" width="210" height="88" fill="url(#stoneCA)"
        filter="url(#shadowCA)" />
      {/* Kőminta */}
      {[85,100,115,130,145,160].map(y =>
        [58,82,106,130,154,178,202,226,248].map((x,i) => (
          <rect key={`${x}-${y}`} x={x+(i%2)*12} y={y}
            width="22" height="13" fill="none"
            stroke="#77777788" strokeWidth="0.5" rx="0.5" />
        ))
      )}

      {/* ── BAL TORONY ── */}
      <rect x="38" y="48" width="52" height="122" fill="url(#stoneCA)"
        filter="url(#shadowCA)" />
      {/* Torony kőminta */}
      {[52,67,82,97,112,127,142,157].map(y =>
        [40,58,76].map((x,i) => (
          <rect key={`${x}-${y}`} x={x+(i%2)*9} y={y}
            width="16" height="13" fill="none"
            stroke="#77777766" strokeWidth="0.5" rx="0.5" />
        ))
      )}
      {/* Torony pártázat */}
      {[38,50,62,74,80].map(x => (
        <rect key={x} x={x} y="35" width="9" height="16"
          fill="url(#stoneCA)" stroke="#666" strokeWidth="0.5" />
      ))}
      <rect x="38" y="48" width="52" height="4" fill="#777" />

      {/* ── JOBB TORONY ── */}
      <rect x="230" y="48" width="52" height="122" fill="url(#stoneCA)"
        filter="url(#shadowCA)" />
      {[52,67,82,97,112,127,142,157].map(y =>
        [232,250,268].map((x,i) => (
          <rect key={`${x}-${y}`} x={x+(i%2)*9} y={y}
            width="16" height="13" fill="none"
            stroke="#77777766" strokeWidth="0.5" rx="0.5" />
        ))
      )}
      {[230,242,254,266,278].map(x => (
        <rect key={x} x={x} y="35" width="9" height="16"
          fill="url(#stoneCA)" stroke="#666" strokeWidth="0.5" />
      ))}
      <rect x="230" y="48" width="52" height="4" fill="#777" />

      {/* ── KÖZÉPSŐ TORONY ── */}
      <rect x="118" y="25" width="84" height="143" fill="url(#stoneCA)"
        filter="url(#shadowCA)" />
      {[30,45,60,75,90,105,120,135,150,165].map(y =>
        [120,142,164,186].map((x,i) => (
          <rect key={`${x}-${y}`} x={x+(i%2)*11} y={y}
            width="20" height="13" fill="none"
            stroke="#77777766" strokeWidth="0.5" rx="0.5" />
        ))
      )}
      {/* Középső torony pártázat */}
      {[118,130,142,154,166,178,190].map(x => (
        <rect key={x} x={x} y="12" width="9" height="16"
          fill="url(#stoneCA)" stroke="#666" strokeWidth="0.5" />
      ))}
      <rect x="118" y="25" width="84" height="4" fill="#777" />

      {/* ── ZÁSZLÓK ── */}
      {/* Bal torony zászló */}
      <line x1="64" y1="35" x2="64" y2="18" stroke="#888" strokeWidth="1.5" />
      <polygon points="64,18 82,24 64,30"
        fill={R ? "#EE2222" : "#2244EE"} />

      {/* Középső torony zászló – R=true esetén más szín (KÖZEPES) */}
      <line x1="160" y1="12" x2="160" y2="-4" stroke="#888" strokeWidth="1.5" />
      <polygon points="160,-4 180,3 160,10"
        fill={R ? "#22CC44" : "#EE2222"} />

      {/* Jobb torony zászló */}
      <line x1="256" y1="35" x2="256" y2="18" stroke="#888" strokeWidth="1.5" />
      <polygon points="256,18 274,24 256,30" fill="#EE8822" />

      {/* ── ABLAKOK ── */}
      {/* Bal torony ablakok */}
      {[65,95,125].map(y => (
        <g key={y}>
          <rect x="50" y={y} width="16" height="20" fill="#224466" rx="1"
            stroke="#666" strokeWidth="0.8" />
          <path d={`M 50 ${y+10} Q 58 ${y+2} 66 ${y+10}`}
            fill="#335577" />
          <rect x="51" y={y+1} width="6" height="6" fill="white" opacity="0.1" />
        </g>
      ))}
      {/* Jobb torony ablakok */}
      {[65,95,125].map(y => (
        <g key={y}>
          <rect x="254" y={y} width="16" height="20" fill="#224466" rx="1"
            stroke="#666" strokeWidth="0.8" />
          <path d={`M 254 ${y+10} Q 262 ${y+2} 270 ${y+10}`}
            fill="#335577" />
          <rect x="255" y={y+1} width="6" height="6" fill="white" opacity="0.1" />
        </g>
      ))}
      {/* Középső torony ablakok */}
      {[40,68,96].map(y => (
        <g key={y}>
          <rect x="144" y={y} width="32" height="24" fill="#224466" rx="2"
            stroke="#666" strokeWidth="1" />
          <path d={`M 144 ${y+14} Q 160 ${y+2} 176 ${y+14}`}
            fill="#335577" />
          <line x1="160" y1={y} x2="160" y2={y+24} stroke="#555" strokeWidth="0.8" />
          <rect x="145" y={y+1} width="13" height="6" fill="white" opacity="0.1" />
        </g>
      ))}

      {/* ── KAPU ── */}
      <rect x="138" y="128" width="44" height="40" fill="#1A2A3A" rx="2" />
      <path d="M 138 148 Q 138 128 160 125 Q 182 128 182 148"
        fill="#111" />
      <path d="M 140 148 Q 140 130 160 127 Q 180 130 180 148"
        fill="#1A2A3A" />
      {/* Kapu rács – R=true esetén 3 vízszintes rács, R=false 4 (NEHÉZ) */}
      {[133,140,147,...(R ? [] : [154])].map(y => (
        <line key={y} x1="140" y1={y} x2="180" y2={y}
          stroke="#444" strokeWidth="1.5" opacity="0.8" />
      ))}
      {[148,156,164,172].map(x => (
        <line key={x} x1={x} y1="127" x2={x} y2="168"
          stroke="#444" strokeWidth="1.5" opacity="0.8" />
      ))}

      {/* ── FELVONÓHÍD ── */}
      <rect x="142" y="155" width="36" height="5" fill="#8B6340" rx="1"
        filter="url(#shadowCA)" />
      <line x1="142" y1="128" x2="142" y2="160" stroke="#8B6340" strokeWidth="1.5" />
      <line x1="178" y1="128" x2="178" y2="160" stroke="#8B6340" strokeWidth="1.5" />

      {/* ── ÁROK ── */}
      <rect x="0" y="158" width="320" height="20" fill="url(#waterCA)" />
      {/* Víz hullámok */}
      {[163,170,177].map(y => (
        <path key={y}
          d={`M 0 ${y} Q 40 ${y-3} 80 ${y} Q 120 ${y+3} 160 ${y} Q 200 ${y-3} 240 ${y} Q 280 ${y+3} 320 ${y}`}
          fill="none" stroke="#3366BB" strokeWidth="1" opacity="0.5" />
      ))}
      {/* Víz csillogás */}
      {[25,65,110,155,200,245,290].map(x => (
        <ellipse key={x} cx={x} cy="166" rx="8" ry="2"
          fill="white" opacity="0.12" />
      ))}

      {/* ── TALAJ ── */}
      <rect x="0" y="175" width="320" height="25" fill="url(#groundCA)" />
      {/* Fűszálak */}
      {[5,18,32,48,65,255,270,285,300,315].map(x => (
        <line key={x} x1={x} y1="175" x2={x-2} y2="169"
          stroke="#4CAF50" strokeWidth="1.5" />
      ))}

      {/* ── ŐR a toronyban – R=true esetén pajzs piros, R=false kék (KÖZEPES) ── */}
      {/* Test */}
      <ellipse cx="64" cy="62" rx="6" ry="7" fill="#666" />
      {/* Fej */}
      <circle cx="64" cy="53" r="5" fill="#FFCC99" />
      {/* Sisak */}
      <ellipse cx="64" cy="50" rx="6" ry="3" fill="#888" />
      <rect x="59" y="49" width="10" height="3" fill="#777" rx="1" />
      {/* Pajzs */}
      <path d="M 57 60 Q 55 65 57 70 Q 60 73 64 74 Q 68 73 71 70 Q 73 65 71 60 Z"
        fill={R ? "#CC2222" : "#2244CC"} stroke="#555" strokeWidth="0.8" />
      <line x1="64" y1="60" x2="64" y2="74" stroke="#888" strokeWidth="0.6" />
      <line x1="57" y1="66" x2="71" y2="66" stroke="#888" strokeWidth="0.6" />
      {/* Lándzsa */}
      <line x1="72" y1="45" x2="72" y2="75" stroke="#8B6340" strokeWidth="1.5" />
      <polygon points="72,45 70,52 74,52" fill="#888" />

      {/* ── SÁRKÁNY a távolban – R=true esetén 3px-el arrébb (NEHÉZ) ── */}
      <g transform={`translate(${R ? 3 : 0}, 0)`}>
        {/* Test */}
        <ellipse cx="248" cy="55" rx="18" ry="10" fill="#226622" opacity="0.9" />
        {/* Fej */}
        <ellipse cx="264" cy="50" rx="10" ry="7" fill="#226622" opacity="0.9" />
        {/* Szemek */}
        <circle cx="268" cy="48" r="2" fill="#FF4400" opacity="0.9" />
        <circle cx="269" cy="47" r="0.8" fill="#FFD700" />
        {/* Szárnyak */}
        <path d="M 248 50 Q 235 35 220 40 Q 230 50 240 52"
          fill="#338833" opacity="0.85" />
        <path d="M 248 50 Q 240 32 228 34 Q 232 46 240 50"
          fill="#44AA44" opacity="0.5" />
        <path d="M 248 50 Q 260 35 275 38 Q 268 50 258 52"
          fill="#338833" opacity="0.85" />
        {/* Farok */}
        <path d="M 232 58 Q 220 62 215 70 Q 218 72 222 68 Q 224 76 228 74"
          fill="none" stroke="#226622" strokeWidth="3" />
        {/* Tűz */}
        <path d="M 272 50 Q 280 46 285 48 Q 282 52 278 50 Q 283 55 280 57"
          fill="#FF6600" opacity="0.8" />
        <path d="M 272 50 Q 279 48 283 51 Q 280 54 276 52"
          fill="#FFD700" opacity="0.7" />
      </g>

      {/* ── KŐ HÍDFŐ ── */}
      <rect x="0" y="155" width="42" height="25" fill="#888" rx="1" />
      <rect x="278" y="155" width="42" height="25" fill="#888" rx="1" />
      {[0,14,28].map(x => (
        <rect key={x} x={x} y="152" width="10" height="6"
          fill="#888" stroke="#666" strokeWidth="0.5" />
      ))}
      {[280,294,308].map(x => (
        <rect key={x} x={x} y="152" width="10" height="6"
          fill="#888" stroke="#666" strokeWidth="0.5" />
      ))}

      {/* Madarak */}
      <path d="M 105 42 Q 109 38 113 42 Q 117 38 121 42"
        fill="none" stroke="#33344488" strokeWidth="1.2" />
      <path d="M 198 35 Q 202 31 206 35 Q 210 31 214 35"
        fill="none" stroke="#33344488" strokeWidth="1.2" />

      {/* Árnyékok */}
      <ellipse cx="160" cy="158" rx="120" ry="5" fill="#00000033" />

      <FO f={f} h={h} />
    </svg>
  );
}
      // ─── SCENE 29: ÉTTEREM ───────────────────────────────────────────────────────
function RestaurantSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="wallR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F0E0" />
          <stop offset="100%" stopColor="#E8E0D0" />
        </linearGradient>
        <linearGradient id="floorR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A870" />
          <stop offset="100%" stopColor="#A88850" />
        </linearGradient>
        <linearGradient id="tableR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A870" />
          <stop offset="100%" stopColor="#B08850" />
        </linearGradient>
        <linearGradient id="windowR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#88BBDD" />
          <stop offset="100%" stopColor="#6699BB" />
        </linearGradient>
        <filter id="shadowR">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#00000044" />
        </filter>
        <filter id="softR">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glowR">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── FAL ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#wallR)" />
      {/* Falburkolat alsó rész */}
      <rect x="0" y="110" width="320" height="50" fill="#D4C4A4" opacity="0.4" />
      <rect x="0" y="108" width="320" height="4" fill="#C8B890" />
      {/* Falon tapéta minta */}
      {[15,35,55,75,95,115,135,155,175,195,215,235,255,275,295,315].map((x,i) => (
        <g key={x} opacity="0.15">
          <path d={`M ${x} ${10+(i%3)*8} Q ${x+5} ${5+(i%3)*8} ${x+10} ${10+(i%3)*8}`}
            fill="none" stroke="#AA8844" strokeWidth="1" />
          <circle cx={x+5} cy={12+(i%3)*8} r="2" fill="#AA8844" />
        </g>
      ))}

      {/* ── PADLÓ ── */}
      <rect x="0" y="158" width="320" height="42" fill="url(#floorR)" />
      {[0,32,64,96,128,160,192,224,256,288,320].map(x => (
        <line key={x} x1={x} y1="158" x2={x} y2="200"
          stroke="#9A7840" strokeWidth="0.6" opacity="0.5" />
      ))}
      {[165,180,195].map(y => (
        <line key={y} x1="0" y1={y} x2="320" y2={y}
          stroke="#9A7840" strokeWidth="0.4" opacity="0.3" />
      ))}

      {/* ── ABLAKOK ── */}
      {/* Bal ablak */}
      <rect x="8" y="10" width="72" height="88" fill="url(#windowR)"
        rx="3" stroke="#C8B898" strokeWidth="2" filter="url(#shadowR)" />
      <line x1="44" y1="10" x2="44" y2="98" stroke="#C8B898" strokeWidth="1.5" />
      <line x1="8" y1="54" x2="80" y2="54" stroke="#C8B898" strokeWidth="1.5" />
      <rect x="10" y="12" width="32" height="40" fill="#AACCE0" opacity="0.5" />
      <rect x="46" y="12" width="32" height="40" fill="#AACCE0" opacity="0.4" />
      {/* Ablak függöny */}
      <path d="M 8 10 Q 16 22 14 40 Q 12 58 8 98"
        fill="#DDCCAA" opacity="0.8" />
      <path d="M 80 10 Q 72 22 74 40 Q 76 58 80 98"
        fill="#DDCCAA" opacity="0.8" />
      {/* Kilátás – R=true esetén 1 fa több (NEHÉZ) */}
      <circle cx="25" cy="35" r="10" fill="#3A8A18" opacity="0.6" />
      <rect x="22" y="42" width="4" height="10" fill="#6B4423" opacity="0.6" />
      {R && (
        <>
          <circle cx="58" cy="38" r="8" fill="#3A8A18" opacity="0.6" />
          <rect x="55" y="44" width="4" height="8" fill="#6B4423" opacity="0.6" />
        </>
      )}

      {/* Jobb ablak */}
      <rect x="240" y="10" width="72" height="88" fill="url(#windowR)"
        rx="3" stroke="#C8B898" strokeWidth="2" filter="url(#shadowR)" />
      <line x1="276" y1="10" x2="276" y2="98" stroke="#C8B898" strokeWidth="1.5" />
      <line x1="240" y1="54" x2="312" y2="54" stroke="#C8B898" strokeWidth="1.5" />
      <rect x="242" y="12" width="32" height="40" fill="#AACCE0" opacity="0.5" />
      <rect x="278" y="12" width="32" height="40" fill="#AACCE0" opacity="0.4" />
      <path d="M 240 10 Q 248 22 246 40 Q 244 58 240 98"
        fill="#DDCCAA" opacity="0.8" />
      <path d="M 312 10 Q 304 22 306 40 Q 308 58 312 98"
        fill="#DDCCAA" opacity="0.8" />
      <circle cx="258" cy="35" r="10" fill="#3A8A18" opacity="0.6" />
      <rect x="255" y="42" width="4" height="10" fill="#6B4423" opacity="0.6" />
      <circle cx="290" cy="30" r="8" fill="#3A8A18" opacity="0.5" />
      <rect x="288" y="36" width="3" height="8" fill="#6B4423" opacity="0.5" />

      {/* ── ÉTTEREM TÁBLA ── */}
      <rect x="108" y="8" width="104" height="22" fill="#8B4422"
        rx="3" filter="url(#shadowR)" />
      <rect x="110" y="10" width="100" height="18" fill="#6B2A11" rx="2" />
      <text x="160" y="22" textAnchor="middle" fontSize="8"
        fill="#FFD700" fontWeight="bold" letterSpacing="1.5">RISTORANTE</text>

      {/* ── MENNYEZETI CSILLÁR ── */}
      <line x1="160" y1="0" x2="160" y2="18" stroke="#888" strokeWidth="1.5" />
      <ellipse cx="160" cy="20" rx="20" ry="6" fill="#C8A840"
        filter="url(#shadowR)" />
      {/* Karok */}
      {[-16,-8,0,8,16].map((dx,i) => (
        <g key={dx}>
          <line x1="160" y1="20" x2={160+dx*2} y2="30"
            stroke="#AA8830" strokeWidth="1.2" />
          <ellipse cx={160+dx*2} cy="32" rx="4" ry="5"
            fill="#FFE566" opacity="0.9" filter="url(#glowR)" />
          <ellipse cx={160+dx*2} cy="30" rx="2.5" ry="1.5"
            fill="white" opacity="0.3" />
        </g>
      ))}
      <ellipse cx="160" cy="34" rx="35" ry="10"
        fill="#FFE566" opacity="0.08" filter="url(#softR)" />

      {/* ── BAL ASZTAL ── */}
      <rect x="22" y="120" width="80" height="6" fill="url(#tableR)"
        rx="2" filter="url(#shadowR)" />
      <rect x="24" y="118" width="76" height="4" fill="#E4B880" rx="1" />
      {[28,42,70,84].map(x => (
        <rect key={x} x={x} y="126" width="5" height="32"
          fill="#B08850" rx="1" />
      ))}
      <ellipse cx="62" cy="160" rx="38" ry="4" fill="#00000022" />
      {/* Terítő */}
      <rect x="26" y="112" width="72" height="8" fill="white"
        opacity="0.8" rx="1" />
      {/* Tányérok */}
      <ellipse cx="42" cy="115" rx="10" ry="3" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      <ellipse cx="82" cy="115" rx="10" ry="3" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      {/* Poharak */}
      <path d="M 35 112 Q 33 106 35 102 Q 37 106 35 112"
        fill="#CCEEFF" opacity="0.7" stroke="#AAD0EE" strokeWidth="0.5" />
      <path d="M 75 112 Q 73 106 75 102 Q 77 106 75 112"
        fill="#CCEEFF" opacity="0.7" stroke="#AAD0EE" strokeWidth="0.5" />
      {/* Gyertya – R=true esetén 2 gyertya, R=false 1 (KÖZEPES) */}
      <rect x="59" y="106" width="4" height="10" fill="#FFFFCC" rx="1" />
      <ellipse cx="61" cy="105" rx="3" ry="4" fill="#FFA500" opacity="0.7"
        filter="url(#glowR)" />
      <ellipse cx="61" cy="103" rx="2" ry="3" fill="#FFE566" opacity="0.8" />
      {R && (
        <>
          <rect x="49" y="106" width="4" height="10" fill="#FFFFCC" rx="1" />
          <ellipse cx="51" cy="105" rx="3" ry="4" fill="#FFA500" opacity="0.7"
            filter="url(#glowR)" />
          <ellipse cx="51" cy="103" rx="2" ry="3" fill="#FFE566" opacity="0.8" />
        </>
      )}
      {/* Evőeszközök */}
      <line x1="52" y1="112" x2="52" y2="118" stroke="#888" strokeWidth="1" />
      <line x1="54" y1="112" x2="54" y2="118" stroke="#888" strokeWidth="0.8" />
      <line x1="70" y1="112" x2="70" y2="118" stroke="#888" strokeWidth="1" />
      <line x1="72" y1="112" x2="72" y2="118" stroke="#888" strokeWidth="0.8" />

      {/* ── JOBB ASZTAL ── */}
      <rect x="218" y="120" width="80" height="6" fill="url(#tableR)"
        rx="2" filter="url(#shadowR)" />
      <rect x="220" y="118" width="76" height="4" fill="#E4B880" rx="1" />
      {[224,238,266,280].map(x => (
        <rect key={x} x={x} y="126" width="5" height="32"
          fill="#B08850" rx="1" />
      ))}
      <ellipse cx="258" cy="160" rx="38" ry="4" fill="#00000022" />
      <rect x="222" y="112" width="72" height="8" fill="white"
        opacity="0.8" rx="1" />
      <ellipse cx="238" cy="115" rx="10" ry="3" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      <ellipse cx="278" cy="115" rx="10" ry="3" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      <path d="M 231 112 Q 229 106 231 102 Q 233 106 231 112"
        fill="#CCEEFF" opacity="0.7" stroke="#AAD0EE" strokeWidth="0.5" />
      <path d="M 271 112 Q 269 106 271 102 Q 273 106 271 112"
        fill="#CCEEFF" opacity="0.7" stroke="#AAD0EE" strokeWidth="0.5" />
      <rect x="255" y="106" width="4" height="10" fill="#FFFFCC" rx="1" />
      <ellipse cx="257" cy="105" rx="3" ry="4" fill="#FFA500" opacity="0.7"
        filter="url(#glowR)" />
      <ellipse cx="257" cy="103" rx="2" ry="3" fill="#FFE566" opacity="0.8" />
      <line x1="248" y1="112" x2="248" y2="118" stroke="#888" strokeWidth="1" />
      <line x1="250" y1="112" x2="250" y2="118" stroke="#888" strokeWidth="0.8" />
      <line x1="266" y1="112" x2="266" y2="118" stroke="#888" strokeWidth="1" />
      <line x1="268" y1="112" x2="268" y2="118" stroke="#888" strokeWidth="0.8" />

      {/* ── KÖZÉPSŐ ASZTAL ── */}
      <rect x="118" y="128" width="84" height="6" fill="url(#tableR)"
        rx="2" filter="url(#shadowR)" />
      <rect x="120" y="126" width="80" height="4" fill="#E4B880" rx="1" />
      {[124,138,166,180].map(x => (
        <rect key={x} x={x} y="134" width="5" height="24"
          fill="#B08850" rx="1" />
      ))}
      <ellipse cx="160" cy="160" rx="40" ry="4" fill="#00000022" />
      <rect x="122" y="120" width="76" height="8" fill="white"
        opacity="0.8" rx="1" />
      <ellipse cx="140" cy="123" rx="10" ry="3" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      <ellipse cx="180" cy="123" rx="10" ry="3" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      {/* Poharak középső asztalon */}
      <path d="M 133 120 Q 131 114 133 110 Q 135 114 133 120"
        fill="#CCEEFF" opacity="0.7" stroke="#AAD0EE" strokeWidth="0.5" />
      <path d="M 173 120 Q 171 114 173 110 Q 175 114 173 120"
        fill="#CCEEFF" opacity="0.7" stroke="#AAD0EE" strokeWidth="0.5" />
      {/* Virágváza */}
      <rect x="157" y="114" width="6" height="10" fill="#88AACC"
        rx="1" opacity="0.8" />
      <ellipse cx="160" cy="114" rx="4" ry="2" fill="#99BBDD" opacity="0.8" />
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle}
          cx={160 + Math.cos(angle * Math.PI / 180) * 5}
          cy={111 + Math.sin(angle * Math.PI / 180) * 4}
          rx="3" ry="2"
          fill="#FF88AA"
          transform={`rotate(${angle} 160 111)`}
          opacity="0.9" />
      ))}
      <circle cx="160" cy="111" r="2" fill="#FFE566" />

      {/* ── PINCÉR ── */}
      <ellipse cx="160" cy="90" rx="8" ry="10" fill="#111122" />
      <circle cx="160" cy="78" r="7" fill="#FFCC99" />
      <ellipse cx="160" cy="73" rx="8" ry="3.5" fill="#111" />
      {/* Csokornyakkendő */}
      <path d="M 156 82 L 160 86 L 164 82 L 160 80 Z"
        fill="#EE2222" />
      {/* Tálca */}
      <ellipse cx="175" cy="82" rx="14" ry="4" fill="#C8A840"
        filter="url(#shadowR)" />
      {/* Tálcán ételek */}
      <circle cx="170" cy="80" r="5" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      <circle cx="170" cy="80" r="3" fill="#CC6633" opacity="0.8" />
      <circle cx="180" cy="80" r="4" fill="#EEEEEE"
        stroke="#DDD" strokeWidth="0.5" />
      {/* Pezsgős pohár a tálcán – R=true esetén 2 pohár, R=false 1 (KÖZEPES) */}
      <path d="M 186 82 Q 184 76 186 72 Q 188 76 186 82"
        fill="#CCEEAA" opacity="0.8" stroke="#AACCAA" strokeWidth="0.5" />
      {R && (
        <path d="M 190 82 Q 188 76 190 72 Q 192 76 190 82"
          fill="#CCEEAA" opacity="0.8" stroke="#AACCAA" strokeWidth="0.5" />
      )}
      {/* Karok */}
      <line x1="152" y1="86" x2="144" y2="94"
        stroke="#111122" strokeWidth="3" strokeLinecap="round" />
      <line x1="168" y1="86" x2="175" y2="80"
        stroke="#111122" strokeWidth="3" strokeLinecap="round" />
      {/* Lábak */}
      <rect x="154" y="99" width="4" height="18" fill="#111122" rx="1" />
      <rect x="162" y="99" width="4" height="18" fill="#111122" rx="1" />
      <ellipse cx="156" cy="118" rx="5" ry="2" fill="#111" />
      <ellipse cx="164" cy="118" rx="5" ry="2" fill="#111" />

      {/* ── FALI DÍSZEK ── */}
      {/* Bal kép */}
      <rect x="90" y="15" width="48" height="36" fill="#8B6340"
        rx="2" filter="url(#shadowR)" />
      <rect x="93" y="18" width="42" height="30" fill="#6B4320" rx="1" />
      <rect x="95" y="20" width="38" height="26" fill="#AAD0EE" rx="1" />
      <ellipse cx="114" cy="33" rx="10" ry="7" fill="#88BBDD" opacity="0.7" />
      <path d="M 95 38 Q 104 28 114 33 Q 124 28 133 38"
        fill="#6699BB" opacity="0.5" />
      <circle cx="108" cy="27" r="4" fill="#FFE566" opacity="0.6" />

      {/* Jobb kép – R=true esetén más keret szín (KÖZEPES) */}
      <rect x="182" y="15" width="48" height="36"
        fill={R ? "#CC4422" : "#8B6340"}
        rx="2" filter="url(#shadowR)" />
      <rect x="185" y="18" width="42" height="30" fill="#6B4320" rx="1" />
      <rect x="187" y="20" width="38" height="26" fill="#FFEECC" rx="1" />
      <ellipse cx="206" cy="28" rx="12" ry="8" fill="#FFCC88" opacity="0.7" />
      {[0,60,120,180,240,300].map(angle => (
        <line key={angle}
          x1={206 + Math.cos(angle * Math.PI / 180) * 6}
          y1={28 + Math.sin(angle * Math.PI / 180) * 5}
          x2={206 + Math.cos(angle * Math.PI / 180) * 10}
          y2={28 + Math.sin(angle * Math.PI / 180) * 8}
          stroke="#FFD700" strokeWidth="1.2" opacity="0.7" />
      ))}
      <circle cx="206" cy="28" r="5" fill="#FFD700" opacity="0.8" />
      <path d="M 187 38 Q 198 32 206 36 Q 214 32 225 38"
        fill="#88AA55" opacity="0.5" />

      {/* ── BEJÁRATI AJTÓ ── */}
      <rect x="130" y="155" width="60" height="45" fill="#8B6340"
        rx="2" filter="url(#shadowR)" />
      <rect x="132" y="157" width="26" height="43" fill="#7A5530" rx="1" />
      <rect x="160" y="157" width="28" height="43" fill="#7A5530" rx="1" />
      <rect x="134" y="159" width="22" height="18" fill="#AACCE0" rx="1" opacity="0.6" />
      <rect x="162" y="159" width="24" height="18" fill="#AACCE0" rx="1" opacity="0.6" />
      <circle cx="158" cy="180" r="2.5" fill="#FFD700" />
      <circle cx="162" cy="180" r="2.5" fill="#FFD700" />
      {/* OPEN tábla – R=true esetén CLOSED (KÖZEPES) */}
      <rect x="136" y="182" width="48" height="12" fill={R ? "#CC2222" : "#228833"}
        rx="2" />
      <text x="160" y="191" textAnchor="middle" fontSize="7"
        fill="white" fontWeight="bold">{R ? "CLOSED" : "OPEN"}</text>

      {/* Árnyékok */}
      <ellipse cx="62" cy="126" rx="38" ry="3" fill="#00000022" />
      <ellipse cx="258" cy="126" rx="38" ry="3" fill="#00000022" />
      <ellipse cx="160" cy="133" rx="40" ry="3" fill="#00000022" />

      <FO f={f} h={h} />
    </svg>
  );
}

      // ─── SCENE 30: ÓCEÁN FENÉK ───────────────────────────────────────────────────
function OceanFloorSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <defs>
        <linearGradient id="oceanBG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A2A6E" />
          <stop offset="100%" stopColor="#051840" />
        </linearGradient>
        <linearGradient id="sandOF" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A860" />
          <stop offset="100%" stopColor="#A88840" />
        </linearGradient>
        <radialGradient id="coralR1" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF8855" />
          <stop offset="100%" stopColor="#CC3322" />
        </radialGradient>
        <radialGradient id="coralR2" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF55AA" />
          <stop offset="100%" stopColor="#CC1177" />
        </radialGradient>
        <radialGradient id="coralR3" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFAA22" />
          <stop offset="100%" stopColor="#CC7700" />
        </radialGradient>
        <filter id="shadowOF">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#00000066" />
        </filter>
        <filter id="glowOF">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softOF">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── VÍZ HÁTTÉR ── */}
      <rect x="0" y="0" width="320" height="200" fill="url(#oceanBG)" />

      {/* Víz fény sugarak */}
      {[30,80,130,180,230,280].map((x,i) => (
        <path key={x}
          d={`M ${x-15} 0 L ${x+15} 0 L ${x+30} 100 L ${x-30} 100`}
          fill="white" opacity={0.03 + (i%3)*0.01} />
      ))}

      {/* Buborékok */}
      {[18,45,72,105,138,165,198,225,258,285,305].map((x,i) => (
        <g key={x}>
          <circle cx={x} cy={20+(i%5)*25} r={2+(i%3)}
            fill="none" stroke="#4488CC" strokeWidth="0.8" opacity="0.4" />
          <circle cx={x+8} cy={35+(i%4)*20} r={1.5+(i%2)}
            fill="none" stroke="#5599DD" strokeWidth="0.6" opacity="0.3" />
        </g>
      ))}

      {/* ── HOMOK ALJZAT ── */}
      <path d="M 0 158 Q 40 152 80 156 Q 120 160 160 154 Q 200 148 240 154 Q 280 160 320 155 L 320 200 L 0 200"
        fill="url(#sandOF)" />
      {/* Homok ripple */}
      {[162,170,178,186].map(y => (
        <path key={y}
          d={`M 0 ${y} Q 40 ${y-3} 80 ${y} Q 120 ${y+3} 160 ${y} Q 200 ${y-3} 240 ${y} Q 280 ${y+3} 320 ${y}`}
          fill="none" stroke="#B89840" strokeWidth="0.6" opacity="0.4" />
      ))}
      {/* Kagylók */}
      {[22,68,118,178,228,272,308].map((x,i) => (
        <g key={x}>
          <ellipse cx={x} cy={162+(i%2)*4} rx="6" ry="3.5"
            fill="#E8C8A0" stroke="#C8A880" strokeWidth="0.5"
            transform={`rotate(${i*22} ${x} ${162+(i%2)*4})`} />
          <ellipse cx={x} cy={162+(i%2)*4} rx="3" ry="1.5"
            fill="#D4B488" opacity="0.6"
            transform={`rotate(${i*22} ${x} ${162+(i%2)*4})`} />
        </g>
      ))}

      {/* ── KORALLOK ── */}
      {/* Bal korall csoport */}
      {[
        {x:28, h:38, c:"url(#coralR1)"},
        {x:42, h:28, c:"url(#coralR2)"},
        {x:55, h:44, c:"url(#coralR1)"},
      ].map(({x,h,c}) => (
        <g key={x}>
          <rect x={x-3} y={158-h} width="6" height={h} fill="#AA5533" rx="2" />
          {[-8,-3,2,7,12].map((dx,i) => (
            <g key={dx}>
              <circle cx={x+dx} cy={158-h+(i%2)*5}
                r={5+(i%3)} fill={c} opacity="0.9" />
              <circle cx={x+dx-1} cy={158-h+(i%2)*5-2}
                r={2} fill="white" opacity="0.15" />
            </g>
          ))}
        </g>
      ))}

      {/* Középső korall */}
      {[
        {x:148, h:42, c:"url(#coralR3)"},
        {x:162, h:30, c:"url(#coralR1)"},
        {x:175, h:48, c:"url(#coralR2)"},
      ].map(({x,h,c}) => (
        <g key={x}>
          <rect x={x-3} y={158-h} width="6" height={h} fill="#885522" rx="2" />
          {[-8,-3,2,7,12].map((dx,i) => (
            <g key={dx}>
              <circle cx={x+dx} cy={158-h+(i%2)*5}
                r={5+(i%3)} fill={c} opacity="0.9" />
              <circle cx={x+dx-1} cy={158-h+(i%2)*5-2}
                r={2} fill="white" opacity="0.15" />
            </g>
          ))}
        </g>
      ))}

      {/* Jobb korall */}
      {[
        {x:265, h:36, c:"url(#coralR2)"},
        {x:278, h:26, c:"url(#coralR3)"},
        {x:292, h:40, c:"url(#coralR1)"},
      ].map(({x,h,c}) => (
        <g key={x}>
          <rect x={x-3} y={158-h} width="6" height={h} fill="#AA5533" rx="2" />
          {[-8,-3,2,7,12].map((dx,i) => (
            <g key={dx}>
              <circle cx={x+dx} cy={158-h+(i%2)*5}
                r={5+(i%3)} fill={c} opacity="0.9" />
              <circle cx={x+dx-1} cy={158-h+(i%2)*5-2}
                r={2} fill="white" opacity="0.15" />
            </g>
          ))}
        </g>
      ))}

      {/* ── HÍNÁR ── */}
      {[88,100,112,210,222,234].map((x,i) => (
        <g key={x}>
          <path d={`M ${x} 158 Q ${x+8} 140 ${x+2} 125 Q ${x-6} 110 ${x+4} 95`}
            fill="none" stroke="#228833" strokeWidth={3+(i%2)}
            strokeLinecap="round" opacity="0.8" />
          <path d={`M ${x} 158 Q ${x-6} 142 ${x-2} 128 Q ${x+8} 114 ${x} 100`}
            fill="none" stroke="#33AA44" strokeWidth={2+(i%2)}
            strokeLinecap="round" opacity="0.6" />
          {/* Hínár levél */}
          <ellipse cx={x+4} cy={118} rx="8" ry="3"
            fill="#228833" opacity="0.7"
            transform={`rotate(${-20+i*8} ${x+4} 118)`} />
          <ellipse cx={x-3} cy={132} rx="6" ry="2.5"
            fill="#33AA44" opacity="0.6"
            transform={`rotate(${25-i*6} ${x-3} 132)`} />
        </g>
      ))}

      {/* ── HALAK ── */}
      {/* Nagy hal – R=true esetén 3px-el arrébb (NEHÉZ) */}
      <g transform={`translate(${R ? 3 : 0}, 0)`}>
        {/* Test */}
        <ellipse cx="200" cy="75" rx="30" ry="16" fill="#FF8822" />
        {/* Farok */}
        <path d="M 170 75 Q 155 62 152 75 Q 155 88 170 75"
          fill="#FF6600" />
        {/* Uszony felső */}
        <path d="M 205 60 Q 215 48 220 58 Q 212 62 205 60"
          fill="#FF6600" />
        {/* Uszony alsó */}
        <path d="M 205 90 Q 215 102 220 92 Q 212 88 205 90"
          fill="#FF6600" />
        {/* Csíkok */}
        <line x1="195" y1="60" x2="195" y2="90"
          stroke="#CC5500" strokeWidth="1.5" opacity="0.5" />
        <line x1="208" y1="60" x2="208" y2="90"
          stroke="#CC5500" strokeWidth="1.5" opacity="0.5" />
        {/* Szem */}
        <circle cx="222" cy="72" r="4" fill="white" />
        <circle cx="223" cy="72" r="2.5" fill="#111" />
        <circle cx="224" cy="71" r="1" fill="white" />
        {/* Száj */}
        <path d="M 228 74 Q 232 76 230 78"
          fill="none" stroke="#AA4400" strokeWidth="1" />
        {/* Pikkelyek */}
        {[180,190,200,210].map(x => (
          <path key={x}
            d={`M ${x} 68 Q ${x+5} 75 ${x} 82`}
            fill="none" stroke="#CC6600" strokeWidth="0.8" opacity="0.4" />
        ))}
      </g>

      {/* Kis halak csoportja */}
      {[
        {x:70,  y:45,  c:"#22AAEE", s:1.0},
        {x:88,  y:38,  c:"#22AAEE", s:0.85},
        {x:80,  y:55,  c:"#22AAEE", s:0.9},
        {x:98,  y:48,  c:"#22AAEE", s:0.8},
        ...(R ? [] : [{x:60, y:55, c:"#22AAEE", s:0.75}]),
      ].map(({x,y,c,s}) => (
        <g key={`${x}-${y}`} transform={`translate(${x},${y}) scale(${s})`}>
          <ellipse cx="0" cy="0" rx="10" ry="5" fill={c} />
          <path d="M -10 0 Q -16 -5 -18 0 Q -16 5 -10 0" fill="#1188CC" />
          <circle cx="7" cy="-1" r="2" fill="white" />
          <circle cx="8" cy="-1" r="1" fill="#111" />
          <path d="M 0 -5 Q 4 -9 6 -6 Q 3 -4 0 -5" fill="#1188CC" />
        </g>
      ))}

      {/* ── POLIP – R=true esetén 7 kar, R=false 8 (NEHÉZ) ── */}
      {/* Fej */}
      <ellipse cx="130" cy="138" rx="18" ry="16" fill="#AA44CC"
        filter="url(#shadowOF)" />
      <ellipse cx="130" cy="134" rx="14" ry="10" fill="#BB55DD" />
      {/* Szemek */}
      <circle cx="124" cy="132" r="4" fill="white" />
      <circle cx="125" cy="132" r="2.5" fill="#111" />
      <circle cx="126" cy="131" r="1" fill="white" />
      <circle cx="136" cy="132" r="4" fill="white" />
      <circle cx="137" cy="132" r="2.5" fill="#111" />
      <circle cx="138" cy="131" r="1" fill="white" />
      {/* Száj */}
      <path d="M 126 138 Q 130 142 134 138"
        fill="none" stroke="#882299" strokeWidth="1.2" />
      {/* Karok */}
      {[
        "M 115 148 Q 105 158 100 168 Q 98 175 104 174",
        "M 120 152 Q 115 165 112 175 Q 110 182 116 180",
        "M 128 154 Q 126 168 125 178 Q 124 185 130 183",
        "M 135 153 Q 138 167 140 177 Q 142 184 138 183",
        "M 142 150 Q 148 162 152 172 Q 155 179 150 180",
        "M 146 146 Q 155 155 160 164 Q 164 172 158 174",
        "M 148 142 Q 160 148 165 156 Q 168 163 162 166",
        ...(R ? [] : ["M 112 145 Q 100 150 96 158 Q 93 165 99 166"]),
      ].map((d,i) => (
        <path key={i} d={d}
          fill="none" stroke="#AA44CC" strokeWidth="4"
          strokeLinecap="round" />
      ))}
      {/* Szívók a karokon */}
      {[
        [108,162],[118,170],[128,172],[138,171],[148,166],[156,158],[160,150],
        ...(R ? [] : [[100,156]]),
      ].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2"
          fill="#CC66EE" opacity="0.6" />
      ))}

      {/* ── TENGERI CsILLAG ── */}
      {[0,72,144,216,288].map(angle => (
        <ellipse key={angle}
          cx={310 + Math.cos(angle * Math.PI / 180) * 12}
          cy={168 + Math.sin(angle * Math.PI / 180) * 12}
          rx="5" ry="3"
          fill="#EE4422"
          transform={`rotate(${angle} 310 168)`}
          opacity="0.9" />
      ))}
      <circle cx="310" cy="168" r="4" fill="#FF5533" opacity="0.9" />
      {/* Tengeri csillag szem */}
      <circle cx="313" cy="162" r="1.5" fill="#AA2211" />

      {/* ── ELSÜLLYEDT HAJÓ ── */}
      <g opacity="0.7" filter="url(#shadowOF)">
        {/* Hajótest */}
        <path d="M 230 145 Q 232 130 260 128 Q 255 130 252 145"
          fill="#6B4A22" />
        <rect x="230" y="143" width="22" height="8" fill="#7B5A32" rx="1" />
        {/* Árbóc */}
        <rect x="248" y="110" width="2" height="22" fill="#5A3A12" />
        <rect x="240" y="115" width="10" height="1.5" fill="#5A3A12" />
        {/* Lyukak */}
        <circle cx="238" cy="138" r="3" fill="#1A0A00" opacity="0.8" />
        <circle cx="245" cy="136" r="2.5" fill="#1A0A00" opacity="0.8" />
        {/* Korall a hajón */}
        <circle cx="235" cy="132" r="4" fill="url(#coralR2)" opacity="0.7" />
        <circle cx="250" cy="128" r="3" fill="url(#coralR3)" opacity="0.7" />
      </g>

      {/* ── MEDÚZA – R=true esetén más szín (KÖZEPES) ── */}
      {/* Harang */}
      <path d="M 50 55 Q 38 42 50 35 Q 62 28 74 35 Q 86 42 74 55 Z"
        fill={R ? "#FF4488" : "#88AAFF"} opacity="0.8"
        filter="url(#glowOF)" />
      <path d="M 52 55 Q 42 44 52 38 Q 62 32 72 38 Q 82 44 72 55 Z"
        fill={R ? "#FF88BB" : "#AACCFF"} opacity="0.5" />
      {/* Csápok */}
      {[50,56,62,68,74].map((x,i) => (
        <path key={x}
          d={`M ${x} 55 Q ${x+4} 65 ${x+2} 75 Q ${x-2} 85 ${x+2} 95`}
          fill="none"
          stroke={R ? "#FF4488" : "#88AAFF"}
          strokeWidth="1.2" opacity="0.6" />
      ))}
      {/* Medúza fény */}
      <ellipse cx="62" cy="42" rx="8" ry="5"
        fill="white" opacity="0.15" />

      {/* ── ANGOLNA a sziklában ── */}
      <ellipse cx="195" cy="155" rx="25" ry="8" fill="#555" opacity="0.7" />
      <ellipse cx="182" cy="153" rx="14" ry="6" fill="#444" opacity="0.8" />
      {/* Angolna fej */}
      <ellipse cx="178" cy="150" rx="8" ry="5" fill="#228833" opacity="0.9" />
      <circle cx="174" cy="148" r="2" fill="#333" />
      <circle cx="175" cy="147" r="0.8" fill="white" />
      {/* Angolna test */}
      <path d="M 185 150 Q 200 148 210 152 Q 220 156 215 160"
        fill="none" stroke="#228833" strokeWidth="5"
        strokeLinecap="round" opacity="0.8" />
      {/* Angolna csíkok – R=true esetén 4 csík, R=false 3 (KÖZEPES) */}
      {[190, 200, 208, ...(R ? [215] : [])].map(x => (
        <line key={x} x1={x} y1="148" x2={x} y2="155"
          stroke="#FFD700" strokeWidth="1.2" opacity="0.6" />
      ))}

      {/* ── KINCSESLÁDA ── */}
      <rect x="8" y="150" width="32" height="18" fill="#8B6340"
        rx="2" filter="url(#shadowOF)" />
      <rect x="8" y="150" width="32" height="8" fill="#A07848" rx="2" />
      <rect x="8" y="155" width="32" height="3" fill="#C8A040" />
      {/* Zár */}
      <rect x="21" y="153" width="8" height="6" fill="#C8A040" rx="1" />
      <circle cx="25" cy="155" r="2" fill="#FFD700" />
      {/* Aranypérmék – R=true esetén 4, R=false 5 (KÖZEPES) */}
      {[12, 18, 24, 30, ...(R ? [] : [36])].map(x => (
        <circle key={x} cx={x} cy="158" r="3"
          fill="#FFD700" opacity="0.8" filter="url(#glowOF)" />
      ))}

      {/* Víz réteg effekt */}
      <rect x="0" y="0" width="320" height="200"
        fill="#0A2A6E" opacity="0.08" />

      <FO f={f} h={h} />
    </svg>
  );
}

// ─── SCENE DEFINITIONS ───────────────────────────────────────────────────────
export const ALL_SCENES: SceneDef[] = [
  {
    id: "park", title: "Napos Park",
    hotspots: [
      { id: 0, cx: 272, cy: 30,  r: 32 },
      { id: 1, cx: 62,  cy: 84,  r: 36 },
      { id: 2, cx: 100, cy: 22,  r: 42 },
      { id: 3, cx: 244, cy: 86,  r: 32 },
      { id: 4, cx: 260, cy: 150, r: 20 },
    ],
    SVG: ParkSVG,
  },
  {
    id: "underwater", title: "Víz Alatti Világ",
    hotspots: [
      { id: 0, cx: 105, cy: 90,  r: 45 },
      { id: 1, cx: 240, cy: 55,  r: 28 },
      { id: 2, cx: 260, cy: 140, r: 28 },
      { id: 3, cx: 100, cy: 45,  r: 60 },
      { id: 4, cx: 185, cy: 168, r: 22 },
    ],
    SVG: FishSVG,
  },
  {
    id: "city", title: "Éjszakai Város",
    hotspots: [
      { id: 0, cx: 275, cy: 25,  r: 24 },
      { id: 1, cx: 140, cy: 20,  r: 55 },
      { id: 2, cx: 27,  cy: 83,  r: 18 },
      { id: 3, cx: 178, cy: 75,  r: 18 },
      { id: 4, cx: 83,  cy: 168, r: 42 },
    ],
    SVG: CitySVG,
  },
{
  id: "kitchen2", title: "Konyha",
  hotspots: [
    { id: 0, cx: 148, cy: 28,  r: 22 },  // ablakban 3. madár (NEHÉZ)
    { id: 1, cx: 250, cy: 95,  r: 20 },  // hűtő lista: 4 → 3 sor (NEHÉZ)
    { id: 2, cx: 38,  cy: 88,  r: 22 },  // más főzőlap ég (KÖZEPES)
    { id: 3, cx: 248, cy: 104, r: 20 },  // kenyér színe változik (KÖZEPES)
    { id: 4, cx: 160, cy: 85,  r: 16 },  // fali óra más időpontot mutat (KÖZEPES)
  ],
  SVG: KitchenSVG2,
},
  {
    id: "beach", title: "Strand",
    hotspots: [
      { id: 0, cx: 120, cy: 42,  r: 45 },
      { id: 1, cx: 240, cy: 30,  r: 35 },
      { id: 2, cx: 272, cy: 72,  r: 22 },
      { id: 3, cx: 30,  cy: 112, r: 28 },
      { id: 4, cx: 220, cy: 158, r: 22 },
    ],
    SVG: BeachSVG,
  },
  {
    id: "space", title: "Űr",
    hotspots: [
      { id: 0, cx: 240, cy: 60,  r: 55 },
      { id: 1, cx: 100, cy: 80,  r: 30 },
      { id: 2, cx: 160, cy: 18,  r: 50 },
      { id: 3, cx: 60,  cy: 150, r: 28 },
      { id: 4, cx: 280, cy: 160, r: 22 },
    ],
    SVG: SpaceSVG,
  },
  {
    id: "farm", title: "Farm",
    hotspots: [
      { id: 0, cx: 200, cy: 115, r: 35 },
      { id: 1, cx: 100, cy: 128, r: 32 },
      { id: 2, cx: 260, cy: 148, r: 25 },
      { id: 3, cx: 75,  cy: 165, r: 40 },
      { id: 4, cx: 60,  cy: 25,  r: 28 },
    ],
    SVG: FarmSVG,
  },
  {
    id: "snow", title: "Hóember",
    hotspots: [
      { id: 0, cx: 160, cy: 38,  r: 24 },
      { id: 1, cx: 160, cy: 90,  r: 22 },
      { id: 2, cx: 160, cy: 122, r: 20 },
      { id: 3, cx: 55,  cy: 110, r: 32 },
      { id: 4, cx: 160, cy: 134, r: 18 },
    ],
    SVG: SnowSVG,
  },
  {
    id: "halloween", title: "Halloween",
    hotspots: [
      { id: 0, cx: 90,  cy: 132, r: 38 },
      { id: 1, cx: 260, cy: 25,  r: 26 },
      { id: 2, cx: 170, cy: 25,  r: 58 },
      { id: 3, cx: 230, cy: 100, r: 32 },
      { id: 4, cx: 55,  cy: 92,  r: 28 },
    ],
    SVG: HalloweenSVG,
  },
  {
    id: "mountain", title: "Hegy",
    hotspots: [
      { id: 0, cx: 160, cy: 52,  r: 45 },
      { id: 1, cx: 275, cy: 60,  r: 30 },
      { id: 2, cx: 120, cy: 165, r: 30 },
      { id: 3, cx: 220, cy: 68,  r: 38 },
      { id: 4, cx: 40,  cy: 162, r: 28 },
    ],
    SVG: MountainSVG,
  },

  {
  id: "school", title: "Iskola",
  hotspots: [
    { id: 0, cx: 174, cy: 5,   r: 26 },  // zászló: piros → kék
    { id: 1, cx: 229, cy: 94,  r: 26 },  // jobb ablak keret: fehér → arany
    { id: 2, cx: 160, cy: 40,  r: 28 },  // tető színe: sötét → világos
    { id: 3, cx: 291, cy: 118, r: 32 },  // jobb fa eltűnik
    { id: 4, cx: 288, cy: 22,  r: 24 },  // nap: nagy → kis
  ],
  SVG: SchoolSVG,
},
  {
  id: "cityDay", title: "Város nappal",
  hotspots: [
    { id: 0, cx: 140, cy: 93,  r: 30 },  // erkély korlát: kék → piros
    { id: 1, cx: 55,  cy: 168, r: 30 },  // bal autó: kék → piros
    { id: 2, cx: 90,  cy: 108, r: 22 },  // lámpaoszlop fény: fehér → sárga
    { id: 3, cx: 254, cy: 168, r: 35 },  // jobb zöld autó eltűnik
    { id: 4, cx: 159, cy: 128, r: 24 },  // közlekedési lámpa: zöld → piros
  ],
  SVG: CityDaySVG,
},

  {
  id: "forest", title: "Erdő",
  hotspots: [
    { id: 0, cx: 276,  cy: 25,  r: 24 },  // nap: 8px-el arrébb (NEHÉZ)
    { id: 1, cx: 104,  cy: 138, r: 20 },  // extra virág a bokron (NEHÉZ)
    { id: 2, cx: 86,   cy: 146, r: 16 },  // gomba kalap 1px szélesebb (NAGYON NEHÉZ)
    { id: 3, cx: 162,  cy: 36,  r: 28 },  // 3. madár megjelenik (KÖZEPES)
    { id: 4, cx: 218,  cy: 113, r: 22 },  // szarvas agancs extra ág (NEHÉZ)
  ],
  SVG: ForestSVG,
},

  {
  id: "zoo", title: "Állatkert",
  hotspots: [
    { id: 0, cx: 67,  cy: 82,  r: 18 },  // zsiráf szeme 2px-el lejjebb (NAGYON NEHÉZ)
    { id: 1, cx: 157, cy: 97,  r: 20 },  // majom szemei távolabb (NAGYON NEHÉZ)
    { id: 2, cx: 264, cy: 98,  r: 22 },  // oroszlán sörény 1 körrel kevesebb (NEHÉZ)
    { id: 3, cx: 264, cy: 104, r: 18 },  // oroszlán bajusz 1px hosszabb (NAGYON NEHÉZ)
    { id: 4, cx: 160, cy: 153, r: 20 },  // látogató sapka: kék → piros (NEHÉZ)
  ],
  SVG: ZooSVG,
},
  {
  id: "garden", title: "Kert",
  hotspots: [
    { id: 0, cx: 35,  cy: 28,  r: 22 },  // nap 6px-el arrébb (NAGYON NEHÉZ)
    { id: 1, cx: 286, cy: 81,  r: 20 },  // jobb ablak keresztrács hiányzik (NEHÉZ)
    { id: 2, cx: 81,  cy: 160, r: 22 },  // öntözőkanna 1px-el arrébb (NAGYON NEHÉZ)
    { id: 3, cx: 148, cy: 108, r: 20 },  // pillangó 3px-el arrébb (NAGYON NEHÉZ)
    { id: 4, cx: 122, cy: 133, r: 22 },  // macska farka: le → fel (NEHÉZ)
  ],
  SVG: GardenSVG,
},

  {
  id: "market", title: "Piac",
  hotspots: [
    { id: 0, cx: 105, cy: 90,  r: 24 },  // extra alma a bal pulton (KÖZEPES)
    { id: 1, cx: 200, cy: 77,  r: 20 },  // szőlő 1 szem hiányzik (KÖZEPES)
    { id: 2, cx: 288, cy: 91,  r: 26 },  // sajt színe: sárga → narancsos (KÖZEPES)
    { id: 3, cx: 248, cy: 127, r: 22 },  // jobb vásárló kalapja: zöld → piros (KÖZEPES)
    { id: 4, cx: 160, cy: 156, r: 22 },  // tábla: PIAC → PI4C (KÖZEPES)
  ],
  SVG: MarketSVG,
},
  {
  id: "trainStation", title: "Vasútállomás",
  hotspots: [
    { id: 0, cx: 70,  cy: 85,  r: 22 },  // óra más időpontot mutat (KÖZEPES)
    { id: 1, cx: 113, cy: 83,  r: 22 },  // jobb ablak redőny félig le (KÖZEPES)
    { id: 2, cx: 200, cy: 134, r: 26 },  // vonat díszcsík: sárga → fehér (KÖZEPES)
    { id: 3, cx: 52,  cy: 122, r: 22 },  // esernyő: csukott → nyitott (KÖZEPES)
    { id: 4, cx: 164, cy: 124, r: 18 },  // peron tábla: 2. → 3. vágány (KÖZEPES)
  ],
  SVG: TrainStationSVG,
},

  {
  id: "airport", title: "Repülőtér",
  hotspots: [
    { id: 0, cx: 92,  cy: 60,  r: 24 },  // terminál felirat: TERMINÁL → TERM1NÁL (KÖZEPES)
    { id: 1, cx: 159, cy: 18,  r: 18 },  // torony jelzőfény: zöld → piros (KÖZEPES)
    { id: 2, cx: 230, cy: 128, r: 26 },  // repülő törzs csík: piros → kék (KÖZEPES)
    { id: 3, cx: 112, cy: 75,  r: 22 },  // kis repülő csík: narancssárga → zöld (KÖZEPES)
    { id: 4, cx: 140, cy: 135, r: 22 },  // 2. személy kabátja: kék → piros (KÖZEPES)
  ],
  SVG: AirportSVG,
},
  {
  id: "circus", title: "Cirkusz",
  hotspots: [
    { id: 0, cx: 238, cy: 22,  r: 20 },  // 1 csillag eltűnik (NEHÉZ)
    { id: 1, cx: 160, cy: 128, r: 22 },  // CIRKUSZ → C1RKUSZ felirat (KÖZEPES)
    { id: 2, cx: 75,  cy: 100, r: 22 },  // bohóc kalap csíkjai: 3 → 1 (NEHÉZ)
    { id: 3, cx: 230, cy: 100, r: 18 },  // akrobata golyók: 2 → 3 (NEHÉZ)
    { id: 4, cx: 283, cy: 20,  r: 18 },  // hold 3px-el arrébb (NEHÉZ)
  ],
  SVG: CircusSVG,
},
  {
  id: "hospital", title: "Kórház",
  hotspots: [
    { id: 0, cx: 160, cy: 50,  r: 22 },  // KÓRHÁZ → KÓRHAZ felirat (KÖZEPES)
    { id: 1, cx: 160, cy: 20,  r: 18 },  // kereszt 2px-el szélesebb (NEHÉZ)
    { id: 2, cx: 160, cy: 109, r: 22 },  // más ablak világít (KÖZEPES)
    { id: 3, cx: 62,  cy: 155, r: 26 },  // mentő csík + villogó: piros → kék (KÖZEPES)
    { id: 4, cx: 210, cy: 148, r: 20 },  // sztetoszkóp 2px-el hosszabb (NEHÉZ)
  ],
  SVG: HospitalSVG,
},
  {
  id: "jungle", title: "Dzsungel",
  hotspots: [
    { id: 0, cx: 88,  cy: 95,  r: 22 },  // papagáj 3px-el arrébb (NEHÉZ)
    { id: 1, cx: 80,  cy: 92,  r: 20 },  // papagáj szárnya: kék → piros (KÖZEPES)
    { id: 2, cx: 230, cy: 70,  r: 18 },  // majom szemei 2px-el távolabb (NEHÉZ)
    { id: 3, cx: 118, cy: 108, r: 20 },  // kígyó 1 csík több (KÖZEPES)
    { id: 4, cx: 160, cy: 160, r: 26 },  // folyó kanyar kissé más (KÖZEPES)
  ],
  SVG: JungleSVG,
},
  {
  id: "desert", title: "Sivatag",
  hotspots: [
    { id: 0, cx: 271, cy: 30,  r: 24 },  // nap 7px-el arrébb (NEHÉZ)
    { id: 1, cx: 224, cy: 100, r: 18 },  // teve szeme 2px-el lejjebb (NEHÉZ)
    { id: 2, cx: 50,  cy: 78,  r: 22 },  // kaktusz virág: 3 → 2 (KÖZEPES)
    { id: 3, cx: 195, cy: 116, r: 24 },  // teve púpja: 2 → 1 (KÖZEPES)
    { id: 4, cx: 240, cy: 140, r: 22 },  // skorpió farka hosszabb (KÖZEPES)
  ],
  SVG: DesertSVG,
},
  {
  id: "library", title: "Könyvtár",
  hotspots: [
    { id: 0, cx: 160, cy: 113, r: 22 },  // könyv az asztalon: csukva → nyitva (KÖZEPES)
    { id: 1, cx: 160, cy: 107, r: 18 },  // olvasó haja: fekete → barna (KÖZEPES)
    { id: 2, cx: 148, cy: 36,  r: 22 },  // ablakban 3. madár megjelenik (NEHÉZ)
    { id: 3, cx: 160, cy: 104, r: 20 },  // nyitvatartás: 8PM → 7PM (KÖZEPES)
    { id: 4, cx: 102, cy: 115, r: 22 },  // létra foka: 5 → 4 (NEHÉZ)
  ],
  SVG: LibrarySVG,
},
  {
  id: "beach2", title: "Tengerpart",
  hotspots: [
    { id: 0, cx: 275, cy: 28,  r: 22 },  // nap 6px-el arrébb (NEHÉZ)
    { id: 1, cx: 172, cy: 36,  r: 20 },  // 4. sirály megjelenik (NEHÉZ)
    { id: 2, cx: 228, cy: 145, r: 18 },  // napszemüveg: fekete → piros (KÖZEPES)
    { id: 3, cx: 168, cy: 143, r: 24 },  // homokvár 1 toronnyal kevesebb (KÖZEPES)
    { id: 4, cx: 110, cy: 92,  r: 20 },  // hajó vitorla: fehér → piros (KÖZEPES)
  ],
  SVG: BeachSVG2,
},
      {
  id: "amusementPark", title: "Vidámpark",
  hotspots: [
    { id: 0, cx: 100, cy: 120, r: 22 },  // lufi: 6 → 5 (NEHÉZ)
    { id: 1, cx: 270, cy: 122, r: 24 },  // kapu csillag: 3 → 2 (NEHÉZ)
    { id: 2, cx: 215, cy: 127, r: 18 },  // hullámvasút kocsi: sárga → piros (KÖZEPES)
    { id: 3, cx: 175, cy: 137, r: 20 },  // jégkrém: 4 → 3 (KÖZEPES)
    { id: 4, cx: 270, cy: 140, r: 22 },  // kapu ajtó szín változás (KÖZEPES)
  ],
  SVG: AmusementParkSVG,
},
      {
  id: "castle", title: "Középkori vár",
  hotspots: [
    { id: 0, cx: 160, cy: 3,   r: 22 },  // középső zászló: piros → zöld (KÖZEPES)
    { id: 1, cx: 64,  cy: 66,  r: 20 },  // őr pajzsa: kék → piros (KÖZEPES)
    { id: 2, cx: 160, cy: 140, r: 22 },  // kapu rács: 4 → 3 vízszintes (NEHÉZ)
    { id: 3, cx: 248, cy: 52,  r: 26 },  // sárkány 3px-el arrébb (NEHÉZ)
    { id: 4, cx: 64,  cy: 22,  r: 18 },  // bal torony zászló: kék → piros (KÖZEPES)
  ],
  SVG: CastleSVG,
},
      {
  id: "restaurant", title: "Étterem",
  hotspots: [
    { id: 0, cx: 55,  cy: 38,  r: 20 },  // bal ablakban extra fa (NEHÉZ)
    { id: 1, cx: 188, cy: 76,  r: 18 },  // tálcán 2. pohár megjelenik (NEHÉZ)
    { id: 2, cx: 53,  cy: 105, r: 20 },  // bal asztalon 2. gyertya (KÖZEPES)
    { id: 3, cx: 206, cy: 22,  r: 22 },  // jobb kép kerete: barna → piros (KÖZEPES)
    { id: 4, cx: 160, cy: 187, r: 22 },  // ajtó tábla: OPEN → CLOSED (KÖZEPES)
  ],
  SVG: RestaurantSVG,
},
      {
  id: "oceanFloor", title: "Óceán fenék",
  hotspots: [
    { id: 0, cx: 203, cy: 75,  r: 28 },  // nagy hal 3px-el arrébb (NEHÉZ)
    { id: 1, cx: 130, cy: 148, r: 26 },  // polip kar: 8 → 7 (NEHÉZ)
    { id: 2, cx: 62,  cy: 45,  r: 22 },  // medúza szín változás (KÖZEPES)
    { id: 3, cx: 200, cy: 151, r: 22 },  // angolna csík: 3 → 4 (KÖZEPES)
    { id: 4, cx: 25,  cy: 158, r: 22 },  // kincsesláda arany: 5 → 4 (KÖZEPES)
  ],
  SVG: OceanFloorSVG,
},
];
