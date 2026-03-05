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

// ─── SCENE 4: KONYHA ─────────────────────────────────────────────────────────
function KitchenSVG({ isRight: R, found: f, hotspots: h, onClick }: SceneSVGProps) {
  return (
    <svg viewBox="0 0 320 200" style={S} onClick={onClick} className={onClick ? "cursor-crosshair" : undefined}>
      <rect width="320" height="145" fill="#F0E6D3" />
      <rect y="145" width="320" height="55" fill="#C49A6C" />
      <rect y="118" width="320" height="28" fill="#8B6914" />
      <rect y="115" width="320" height="5" fill="#A0785A" />
      {/* Left cabinet */}
      <rect x="5" y="8" width="88" height="82" fill="#A0785A" rx="4" />
      <rect x="10" y="13" width="38" height="72" fill="#8B6438" rx="3" />
      <rect x="53" y="13" width="35" height="72" fill="#8B6438" rx="3" />
      {!R && <><ellipse cx="30" cy="50" rx="3" ry="5" fill="#6B4A2A" /><ellipse cx="70" cy="50" rx="3" ry="5" fill="#6B4A2A" /></>}
      {/* Right cabinet */}
      <rect x="228" y="8" width="88" height="82" fill="#A0785A" rx="4" />
      <rect x="233" y="13" width="38" height="72" fill="#8B6438" rx="3" />
      <rect x="276" y="13" width="35" height="72" fill="#8B6438" rx="3" />
      {!R && <><ellipse cx="253" cy="50" rx="3" ry="5" fill="#6B4A2A" /><ellipse cx="293" cy="50" rx="3" ry="5" fill="#6B4A2A" /></>}
      {/* Window */}
      <rect x="112" y="9" width="96" height="81" fill="none" stroke="#8B6438" strokeWidth="5" rx="3" />
      <rect x="115" y="12" width="90" height="75" fill="#87CEEB" rx="2" />
      <rect x="112" y="48" width="96" height="4" fill="#8B6438" />
      <rect x="158" y="9" width="4" height="81" fill="#8B6438" />
      {/* Curtains color */}
      <rect x="114" y="11" width="14" height="79" fill={R ? "#6B9FFF" : "#FF6B6B"} opacity="0.75" rx="2" />
      <rect x="194" y="11" width="14" height="79" fill={R ? "#6B9FFF" : "#FF6B6B"} opacity="0.75" rx="2" />
      {/* Flower: missing on right */}
      {!R && <>
        <rect x="128" y="50" width="4" height="26" fill="#4CAF50" />
        <circle cx="130" cy="44" r="10" fill="#FF4081" />
        <ellipse cx="124" cy="58" rx="6" ry="4" fill="#4CAF50" />
        <ellipse cx="137" cy="60" rx="6" ry="4" fill="#4CAF50" />
      </>}
      {/* Clock: missing on right */}
      {!R && <>
        <circle cx="195" cy="55" r="18" fill="white" stroke="#8B6438" strokeWidth="2" />
        <line x1="195" y1="55" x2="195" y2="42" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <line x1="195" y1="55" x2="205" y2="58" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="195" cy="55" r="2" fill="#333" />
      </>}
      {/* Pot color */}
      <circle cx="68" cy="112" r="22" fill={R ? "#1565C0" : "#E53935"} />
      <rect x="88" y="108" width="18" height="6" fill={R ? "#0D47A1" : "#C62828"} rx="3" />
      <rect x="42" y="108" width="4" height="8" fill={R ? "#0D47A1" : "#C62828"} rx="2" />
      <ellipse cx="68" cy="92" rx="22" ry="5" fill={R ? "#1976D2" : "#EF5350"} />
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
          <ellipse cx={x + 4} cy={130 - i % 2 * 2} rx="4" ry="2"}
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
    id: "kitchen", title: "Konyha",
    hotspots: [
      { id: 0, cx: 68,  cy: 112, r: 28 },
      { id: 1, cx: 130, cy: 52,  r: 22 },
      { id: 2, cx: 50,  cy: 50,  r: 55 },
      { id: 3, cx: 195, cy: 55,  r: 22 },
      { id: 4, cx: 121, cy: 78,  r: 22 },
    ],
    SVG: KitchenSVG,
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
    { id: 2, cx: 86,   cy="146", r: 16 },  // gomba kalap 1px szélesebb (NAGYON NEHÉZ)
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
];
