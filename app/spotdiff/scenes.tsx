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
];
