// SVG Island illustrations for Astro-Sachkunde K1 map
// Each island is a unique floating fantasy landmass matching its theme
// viewBox: "0 0 80 80", renders at 48-60px on mobile

type IP = { size?: number };

// i1 — Body & Senses: Pink island with human figure, eye, ear, hand
export function IslandBody({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(255,107,157,0.2)" />
      {/* Rocky underside stalactites */}
      <path d="M22,50 Q26,62 30,58 Q34,68 40,63 Q46,68 50,58 Q54,62 58,50Z" fill="#4A1A2E" />
      <path d="M28,52 Q30,60 33,57Z" fill="#3A1020" />
      <path d="M47,52 Q50,60 52,56Z" fill="#3A1020" />
      {/* Island body */}
      <ellipse cx="40" cy="47" rx="20" ry="9" fill="#7B3A4A" />
      {/* Grassy top surface */}
      <ellipse cx="40" cy="40" rx="20" ry="8" fill="#F0809D" />
      <ellipse cx="40" cy="37" rx="18" ry="6" fill="#FF6B9D" />
      {/* Head (circle) */}
      <circle cx="40" cy="25" r="5" fill="#FFB8D1" />
      {/* Body (rectangle) */}
      <rect x="37" y="31" width="6" height="8" rx="1" fill="#FF9BBF" />
      {/* Left arm */}
      <line x1="37" y1="33" x2="28" y2="32" stroke="#FFB8D1" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right arm */}
      <line x1="43" y1="33" x2="52" y2="32" stroke="#FFB8D1" strokeWidth="1.5" strokeLinecap="round" />
      {/* Left leg */}
      <line x1="38" y1="39" x2="36" y2="44" stroke="#FFB8D1" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right leg */}
      <line x1="42" y1="39" x2="44" y2="44" stroke="#FFB8D1" strokeWidth="1.5" strokeLinecap="round" />
      {/* Large eye on left side */}
      <ellipse cx="22" cy="32" rx="4" ry="5" fill="none" stroke="#FF6B9D" strokeWidth="1.2" />
      <circle cx="22" cy="32" r="2" fill="#FF6B9D" />
      {/* Ear on right side */}
      <ellipse cx="58" cy="30" rx="3" ry="4.5" fill="none" stroke="#FF6B9D" strokeWidth="1.2" />
      <path d="M58,28 Q59,30 58,32" stroke="#FF6B9D" strokeWidth="0.8" fill="none" />
      {/* Hand (right side) */}
      <circle cx="53" cy="30" r="2.5" fill="none" stroke="#FF6B9D" strokeWidth="1.2" />
      <line x1="52" y1="28" x2="51" y2="25" stroke="#FF6B9D" strokeWidth="0.8" />
      <line x1="53" y1="27" x2="54" y2="24" stroke="#FF6B9D" strokeWidth="0.8" />
      <line x1="54" y1="28" x2="56" y2="25" stroke="#FF6B9D" strokeWidth="0.8" />
      {/* Small floating sparkles */}
      <text x="18" y="48" fontSize="7" fill="rgba(255,107,157,0.7)">✦</text>
      <text x="57" y="46" fontSize="6" fill="rgba(255,107,157,0.6)">✦</text>
    </svg>
  );
}

// i2 — Pets & Wild Animals: Teal island with paw prints, cat and dog silhouettes
export function IslandAnimals({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="19" ry="5" fill="rgba(78,205,196,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,67 44,61 Q50,67 55,59 Q60,63 59,50Z" fill="#0A2A35" />
      <path d="M26,53 Q28,61 31,58Z" fill="#062028" />
      <path d="M49,53 Q52,61 54,57Z" fill="#062028" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#1A5A6A" />
      {/* Top surface with teal tint */}
      <ellipse cx="40" cy="41" rx="20" ry="7" fill="#2A8A9A" />
      <ellipse cx="40" cy="38" rx="18" ry="5" fill="#3A9AAA" />
      {/* Cat silhouette on left */}
      <ellipse cx="25" cy="33" rx="4" ry="5" fill="#4ECDC4" />
      {/* Cat head */}
      <circle cx="25" cy="27" r="3" fill="#4ECDC4" />
      {/* Cat ears */}
      <polygon points="22,24 21,20 24,23" fill="#4ECDC4" />
      <polygon points="28,24 29,20 26,23" fill="#4ECDC4" />
      {/* Cat tail */}
      <path d="M29,35 Q33,38 32,32" stroke="#4ECDC4" strokeWidth="1.5" fill="none" />
      {/* Dog silhouette on right */}
      <ellipse cx="55" cy="33" rx="5" ry="4.5" fill="#7EEEFF" />
      {/* Dog head */}
      <circle cx="55" cy="27" r="3.5" fill="#7EEEFF" />
      {/* Dog ears */}
      <ellipse cx="51" cy="24" rx="1.5" ry="3" fill="#7EEEFF" />
      <ellipse cx="59" cy="24" rx="1.5" ry="3" fill="#7EEEFF" />
      {/* Paw prints scattered */}
      <g opacity="0.7">
        {/* Paw print 1 - main pad + 4 toe pads */}
        <circle cx="35" cy="42" r="2" fill="#4ECDC4" />
        <circle cx="32" cy="39" r="1" fill="#4ECDC4" />
        <circle cx="35" cy="37" r="1" fill="#4ECDC4" />
        <circle cx="38" cy="39" r="1" fill="#4ECDC4" />
      </g>
      <g opacity="0.6">
        {/* Paw print 2 */}
        <circle cx="50" cy="44" r="2" fill="#7EEEFF" />
        <circle cx="48" cy="41" r="1" fill="#7EEEFF" />
        <circle cx="50" cy="39" r="1" fill="#7EEEFF" />
        <circle cx="52" cy="41" r="1" fill="#7EEEFF" />
      </g>
      {/* Sparkles */}
      <text x="16" y="30" fontSize="7" fill="rgba(78,205,196,0.65)">✦</text>
      <text x="57" y="28" fontSize="6" fill="rgba(126,238,255,0.5)">✦</text>
    </svg>
  );
}

// i3 — Seasons & Nature: Green island with tree showing 4 seasonal stages
export function IslandSeasons({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(149,225,211,0.15)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 32,60 Q38,68 44,62 Q50,68 55,60 Q61,64 60,50Z" fill="#1A3A1A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#102810" />
      <path d="M50,53 Q53,62 55,58Z" fill="#102810" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="8" fill="#235A23" />
      {/* Grassy top */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#2E7D32" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#388E3C" />
      {/* Tree trunk */}
      <rect x="37.5" y="24" width="5" height="16" rx="1" fill="#5D4037" />
      {/* Spring tree (bright green, full foliage) */}
      <circle cx="20" cy="26" r="6" fill="#4CAF50" opacity="0.8" />
      <circle cx="16" cy="30" r="4" fill="#66BB6A" opacity="0.7" />
      <circle cx="24" cy="30" r="4" fill="#66BB6A" opacity="0.7" />
      {/* Summer tree (darker green, fuller) */}
      <ellipse cx="40" cy="22" rx="8" ry="7" fill="#1B5E20" opacity="0.85" />
      <circle cx="32" cy="28" r="5" fill="#2E7D32" opacity="0.8" />
      <circle cx="48" cy="28" r="5" fill="#2E7D32" opacity="0.8" />
      {/* Autumn tree (orange/brown foliage) */}
      <circle cx="60" cy="26" r="6" fill="#F57C00" opacity="0.8" />
      <circle cx="56" cy="30" r="4" fill="#FB8C00" opacity="0.7" />
      <circle cx="64" cy="30" r="4" fill="#FB8C00" opacity="0.7" />
      {/* Winter tree (bare branches, few leaves) */}
      <path d="M40,22 L35,20 M40,22 L45,20 M40,22 L38,18 M40,22 L42,18 M40,24 L35,25 M40,24 L45,25"
            stroke="#8D6E63" strokeWidth="1.2" opacity="0.6" />
      <circle cx="40" cy="20" r="2" fill="#E0F2F1" opacity="0.5" />
      {/* Leaf falling from autumn tree */}
      <text x="65" y="35" fontSize="6" fill="#FF6F00" opacity="0.6">🍂</text>
      {/* Sparkles */}
      <text x="16" y="42" fontSize="7" fill="rgba(149,225,211,0.7)">✦</text>
      <text x="59" y="45" fontSize="7" fill="rgba(149,225,211,0.6)">✦</text>
    </svg>
  );
}

// i4 — Weather & Calendar: Yellow island with sun, cloud, and rain drops
export function IslandWeather({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(247,220,111,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q26,63 32,58 Q38,67 44,62 Q50,67 56,58 Q61,63 59,50Z" fill="#3A2A00" />
      <path d="M27,53 Q29,62 32,58Z" fill="#2A1E00" />
      <path d="M49,53 Q52,62 54,57Z" fill="#2A1E00" />
      {/* Island body with warm tone */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#5D4200" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="7" fill="#7B5700" />
      <ellipse cx="40" cy="38" rx="18" ry="6" fill="#8B6500" />
      {/* Sun on left side */}
      <circle cx="22" cy="24" r="5" fill="#FFD700" />
      {/* Sun rays */}
      <line x1="22" y1="15" x2="22" y2="10" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="33" x2="22" y2="38" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="24" x2="8" y2="24" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="31" y1="24" x2="36" y2="24" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cloud on right side */}
      <ellipse cx="58" cy="22" rx="8" ry="5" fill="rgba(255,255,255,0.9)" stroke="#E0E0E0" strokeWidth="0.8" />
      <ellipse cx="50" cy="24" rx="6" ry="4" fill="rgba(255,255,255,0.85)" />
      <ellipse cx="66" cy="24" rx="6" ry="4" fill="rgba(255,255,255,0.85)" />
      {/* Rain drops from cloud */}
      <line x1="54" y1="31" x2="54" y2="35" stroke="#4FC3F7" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="60" y1="31" x2="60" y2="35" stroke="#4FC3F7" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="58" y1="33" x2="58" y2="37" stroke="#4FC3F7" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      {/* Calendar grid on top area */}
      <rect x="35" y="28" width="10" height="8" rx="0.5" fill="none" stroke="#F7DC6F" strokeWidth="0.8" opacity="0.7" />
      <line x1="40" y1="28" x2="40" y2="36" stroke="#F7DC6F" strokeWidth="0.6" opacity="0.6" />
      <line x1="35" y1="31" x2="45" y2="31" stroke="#F7DC6F" strokeWidth="0.6" opacity="0.6" />
      {/* Sparkles */}
      <text x="16" y="42" fontSize="6" fill="rgba(247,220,111,0.5)">✦</text>
      <text x="59" y="45" fontSize="7" fill="rgba(247,220,111,0.6)">✦</text>
    </svg>
  );
}

// i5 — Family & Home: Purple island with house shape and heart
export function IslandFamily({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(187,143,206,0.18)" />
      {/* Rocky underside */}
      <path d="M20,50 Q26,64 33,59 Q39,68 45,62 Q52,68 57,59 Q63,64 60,50Z" fill="#2A0A3A" />
      <path d="M25,53 Q27,62 30,59Z" fill="#1A0A2A" />
      <path d="M50,53 Q53,62 55,58Z" fill="#1A0A2A" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="21" ry="8" fill="#3D0D5A" />
      {/* Grassy top */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#5B2182" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#6B2D92" />
      {/* House shape - main rectangle */}
      <rect x="28" y="28" width="24" height="14" rx="1" fill="#BB8FCE" stroke="rgba(187,143,206,0.5)" strokeWidth="0.8" />
      {/* Roof triangle */}
      <polygon points="28,28 40,18 52,28" fill="#9B6DA8" />
      {/* Door */}
      <rect x="37" y="36" width="6" height="8" rx="0.5" fill="#7B5B8A" />
      {/* Door knob */}
      <circle cx="42.5" cy="40" r="0.8" fill="#D4AF37" />
      {/* Window left */}
      <rect x="31" y="31" width="4" height="3.5" fill="rgba(180,220,255,0.8)" stroke="rgba(187,143,206,0.3)" strokeWidth="0.4" />
      {/* Window right */}
      <rect x="45" y="31" width="4" height="3.5" fill="rgba(180,220,255,0.8)" stroke="rgba(187,143,206,0.3)" strokeWidth="0.4" />
      {/* Heart above house */}
      <path d="M40,12 Q42,10 44,10 Q46,10 47,12 Q47,14 40,18 Q33,14 33,12 Q33,10 35,10 Q37,10 40,12Z"
            fill="#FF6B9D" opacity="0.9" />
      {/* Chimney */}
      <rect x="48" y="24" width="2" height="4" fill="#8B5A7A" />
      {/* Sparkles */}
      <text x="18" y="32" fontSize="7" fill="rgba(187,143,206,0.6)">✦</text>
      <text x="59" y="35" fontSize="6" fill="rgba(187,143,206,0.5)">✦</text>
    </svg>
  );
}

// i6 — Traffic & Safety: Orange island with traffic light (red/yellow/green circles)
export function IslandTraffic({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(240,178,122,0.2)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q51,68 56,59 Q62,63 59,50Z" fill="#3A1A00" />
      <path d="M26,53 Q28,62 31,58Z" fill="#2A1200" />
      <path d="M50,53 Q53,62 55,57Z" fill="#2A1200" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="20" ry="8" fill="#5A2A00" />
      {/* Top surface */}
      <ellipse cx="40" cy="42" rx="20" ry="7" fill="#7A3A00" />
      <ellipse cx="40" cy="38" rx="18" ry="6" fill="#8B4200" />
      {/* Traffic light post */}
      <rect x="38.5" y="26" width="3" height="18" fill="#5D4037" rx="1" />
      {/* Traffic light housing */}
      <rect x="34" y="20" width="12" height="16" rx="2" fill="#333333" stroke="#000000" strokeWidth="0.8" />
      {/* Red light (top) */}
      <circle cx="40" cy="25" r="3.5" fill="#FF3333" opacity="0.95" />
      <circle cx="40" cy="25" r="3" fill="#FF5555" />
      {/* Yellow light (middle) */}
      <circle cx="40" cy="33" r="3.5" fill="#FFFF00" opacity="0.95" />
      <circle cx="40" cy="33" r="3" fill="#FFFF66" />
      {/* Green light (bottom) */}
      <circle cx="40" cy="41" r="3.5" fill="#00DD00" opacity="0.95" />
      <circle cx="40" cy="41" r="3" fill="#33FF33" />
      {/* Stop sign nearby */}
      <polygon points="55,30 58,28 60,31 58,34 55,32" fill="#FF3333" opacity="0.8" />
      <text x="55" y="32" textAnchor="middle" fontSize="4" fontWeight="bold" fill="white">S</text>
      {/* Crosswalk lines */}
      <line x1="25" y1="45" x2="35" y2="45" stroke="#F0B27A" strokeWidth="1.5" opacity="0.6" strokeDasharray="2 2" />
      <line x1="45" y1="45" x2="55" y2="45" stroke="#F0B27A" strokeWidth="1.5" opacity="0.6" strokeDasharray="2 2" />
      {/* Sparkles */}
      <text x="18" y="42" fontSize="7" fill="rgba(240,178,122,0.6)">✦</text>
      <text x="59" y="45" fontSize="6" fill="rgba(240,178,122,0.5)">✦</text>
    </svg>
  );
}

// i7 — Materials & Recycling: Turquoise island with recycling symbol and bottle shape
export function IslandRecycling({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(118,215,196,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,67 44,62 Q51,67 56,59 Q62,63 59,50Z" fill="#0A2A28" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061E14" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061E14" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#0C4040" />
      {/* Grassy top */}
      <ellipse cx="40" cy="43" rx="21" ry="8" fill="#166A6A" />
      <ellipse cx="40" cy="40" rx="19" ry="6" fill="#1A7A7A" />
      {/* Recycling symbol (3 arrows in circle) */}
      <g transform="translate(24,28)">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#76D7C4" strokeWidth="1.2" opacity="0.8" />
        {/* Top arrow (pointing up-right) */}
        <path d="M-1,-4 L2,-2 L0,-1" fill="none" stroke="#76D7C4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom-left arrow */}
        <path d="M3,3 L1,2 L2,0" fill="none" stroke="#76D7C4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom-right arrow */}
        <path d="M-3,3 L-1,2 L-2,0" fill="none" stroke="#76D7C4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Bottle shape on right */}
      <g transform="translate(56,30)">
        {/* Bottle neck */}
        <rect x="-1" y="-3" width="2" height="3" fill="#76D7C4" opacity="0.85" />
        {/* Bottle cap */}
        <rect x="-2" y="-4" width="4" height="1" fill="#5CB896" opacity="0.8" />
        {/* Bottle body */}
        <path d="M-3,0 L-2.5,6 Q0,7 2.5,6 L3,0Z" fill="rgba(118,215,196,0.7)" stroke="#76D7C4" strokeWidth="0.8" />
        {/* Bottle shine */}
        <line x1="-2" y1="1" x2="-2" y2="4" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" />
      </g>
      {/* Garbage can on left */}
      <rect x="18" y="35" width="5" height="6" rx="0.5" fill="#4A4A4A" opacity="0.7" stroke="#3A3A3A" strokeWidth="0.5" />
      <line x1="18" y1="38" x2="23" y2="38" stroke="#3A3A3A" strokeWidth="0.5" />
      {/* Sparkles */}
      <text x="16" y="48" fontSize="7" fill="rgba(118,215,196,0.6)">✦</text>
      <text x="59" y="47" fontSize="6" fill="rgba(118,215,196,0.5)">✦</text>
    </svg>
  );
}

// i8 — Nature Review: Blue island with tall tree, bird, and grass
export function IslandNature({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="20" ry="5" fill="rgba(133,193,233,0.18)" />
      {/* Rocky underside */}
      <path d="M21,50 Q27,63 32,59 Q38,68 44,62 Q50,68 55,60 Q61,63 59,50Z" fill="#0A2A3A" />
      <path d="M26,53 Q28,62 31,58Z" fill="#061820" />
      <path d="M50,53 Q53,62 55,57Z" fill="#061820" />
      {/* Island body */}
      <ellipse cx="40" cy="48" rx="21" ry="9" fill="#0D3A50" />
      {/* Grassy top */}
      <ellipse cx="40" cy="42" rx="21" ry="8" fill="#1A6A80" />
      <ellipse cx="40" cy="39" rx="19" ry="6" fill="#1E7A90" />
      {/* Tall tree trunk - center */}
      <rect x="38" y="15" width="4" height="28" rx="1" fill="#5D4037" />
      {/* Tree foliage - multiple layers */}
      <circle cx="40" cy="18" r="7" fill="#1B5E20" />
      <circle cx="33" cy="23" r="6" fill="#2E7D32" opacity="0.9" />
      <circle cx="47" cy="23" r="6" fill="#2E7D32" opacity="0.9" />
      <circle cx="40" cy="26" r="6" fill="#388E3C" opacity="0.8" />
      {/* Smaller foliage layer */}
      <ellipse cx="40" cy="32" rx="8" ry="5" fill="#43A047" opacity="0.7" />
      {/* Flying bird (right side) */}
      <g transform="translate(58,24)">
        {/* Bird body */}
        <ellipse cx="0" cy="0" r="2" fill="#FF6F00" />
        {/* Bird head */}
        <circle cx="1.5" cy="-0.5" r="1.2" fill="#FF8F00" />
        {/* Bird beak */}
        <polygon points="2.5,-0.5 3.5,-0.5 2.8,0" fill="#FFB300" />
        {/* Wings in flight position */}
        <path d="M-1,-1 L-3,-2 L-2,0 Z" fill="#FF6F00" opacity="0.8" />
        <path d="M1,-1 L3,-2 L2,0 Z" fill="#FF6F00" opacity="0.8" />
        {/* Tail feathers */}
        <path d="M-2,0 L-4,0.5 L-2,1" fill="none" stroke="#E65100" strokeWidth="0.8" />
      </g>
      {/* Grass tufts at base */}
      <g opacity="0.7">
        <path d="M30,42 Q28,45 30,48" stroke="#4CAF50" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M35,43 Q33,46 35,49" stroke="#66BB6A" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M45,43 Q43,46 45,49" stroke="#66BB6A" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M50,42 Q48,45 50,48" stroke="#4CAF50" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </g>
      {/* Sparkles */}
      <text x="16" y="32" fontSize="7" fill="rgba(133,193,233,0.6)">✦</text>
      <text x="59" y="35" fontSize="6" fill="rgba(133,193,233,0.5)">✦</text>
    </svg>
  );
}

// i9 — Grand Finale: Coral/pink island with trophy cup and sparkles
export function IslandFinale({ size = 80 }: IP) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Glow beneath */}
      <ellipse cx="40" cy="74" rx="21" ry="5" fill="rgba(241,148,138,0.22)" />
      {/* Star-shaped rocky underside */}
      <path d="M20,50 Q24,58 28,55 Q31,65 36,60 Q39,68 44,63 Q48,68 52,61 Q57,65 60,55 Q64,58 60,50Z" fill="#2A0A0A" />
      {/* Island body */}
      <ellipse cx="40" cy="49" rx="22" ry="10" fill="#3A1A1A" />
      {/* Top surface — coral tint */}
      <ellipse cx="40" cy="43" rx="22" ry="8" fill="#C1655A" />
      <ellipse cx="40" cy="40" rx="20" ry="6" fill="#E87A70" />
      {/* Star burst rays background */}
      <g transform="translate(40,26)" opacity="0.5">
        <line x1="0" y1="-8" x2="0" y2="-14" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="5.7" y1="-5.7" x2="10" y2="-10" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="8" y1="0" x2="14" y2="0" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="5.7" y1="5.7" x2="10" y2="10" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="0" y1="8" x2="0" y2="14" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="-5.7" y1="5.7" x2="-10" y2="10" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="-8" y1="0" x2="-14" y2="0" stroke="#F1948A" strokeWidth="1.5" />
        <line x1="-5.7" y1="-5.7" x2="-10" y2="-10" stroke="#F1948A" strokeWidth="1.5" />
      </g>
      {/* Trophy cup body */}
      <path d="M33,22 Q33,32 40,34 Q47,32 47,22Z" fill="#FFD700" />
      {/* Trophy stem */}
      <rect x="38" y="33" width="4" height="5" fill="#FFA000" />
      {/* Trophy base */}
      <rect x="35" y="38" width="10" height="2.5" rx="1" fill="#FFD700" />
      {/* Trophy handles - left */}
      <path d="M33,24 Q28,24 28,28 Q28,32 33,31" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {/* Trophy handles - right */}
      <path d="M47,24 Q52,24 52,28 Q52,32 47,31" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {/* Crown on top of trophy */}
      <path d="M34,21 L35,17 L37,20 L40,16 L43,20 L45,17 L46,21Z" fill="#FFD700" />
      {/* Stars beside trophy */}
      <text x="18" y="32" fontSize="10" fill="#F1948A">⭐</text>
      <text x="58" y="30" fontSize="9" fill="#F1948A">⭐</text>
      {/* Extra sparkle above */}
      <text x="40" y="14" fontSize="8" fill="rgba(241,148,138,0.8)">✦</text>
      {/* Small celebration sparkles */}
      <text x="25" y="48" fontSize="6" fill="rgba(241,148,138,0.6)">✦</text>
      <text x="60" y="50" fontSize="7" fill="rgba(241,148,138,0.5)">✦</text>
    </svg>
  );
}

// Export map for all K1 Sachkunde islands
export const SK_K1_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: IslandBody,
  i2: IslandAnimals,
  i3: IslandSeasons,
  i4: IslandWeather,
  i5: IslandFamily,
  i6: IslandTraffic,
  i7: IslandRecycling,
  i8: IslandNature,
  i9: IslandFinale,
};
