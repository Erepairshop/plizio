"use client";

type IP = { size?: number };

// ──────────────────────────────────────────────────────────────────
// i1: Healthy Body
// ──────────────────────────────────────────────────────────────────
const IslandHealthyBody: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowHealthy" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(255,107,157,0.25)" />
        <stop offset="100%" stopColor="rgba(255,107,157,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowHealthy)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#A0466B" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 26 38 L 28 42" stroke="#A0466B" strokeWidth="1" opacity="0.3" />
    <path d="M 48 38 L 50 43" stroke="#A0466B" strokeWidth="1" opacity="0.3" />
    <path d="M 54 39 L 56 44" stroke="#A0466B" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#E8B5CE" />

    {/* Top surface grass */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#FF6B9D" />

    {/* Running figure (stick figure silhouette) */}
    <circle cx="32" cy="24" r="2" fill="#2C3E50" />
    <rect x="30.5" y="26" width="3" height="5" fill="#2C3E50" />
    <line x1="28" y1="28" x2="24" y2="26" stroke="#2C3E50" strokeWidth="1.5" />
    <line x1="34" y1="28" x2="36" y2="25" stroke="#2C3E50" strokeWidth="1.5" />
    <line x1="31.5" y1="31" x2="29" y2="37" stroke="#2C3E50" strokeWidth="1.5" />
    <line x1="32.5" y1="31" x2="35" y2="37" stroke="#2C3E50" strokeWidth="1.5" />

    {/* Apple shape (upper right) */}
    <ellipse cx="50" cy="26" rx="4" ry="4.5" fill="#DC143C" />
    <ellipse cx="52" cy="26" rx="3" ry="4" fill="#FF6347" opacity="0.6" />
    <rect x="50.8" y="20.5" width="0.4" height="3" fill="#8B4513" />
    <path d="M 52.2 21 Q 53 20 53.5 21" stroke="#27AE60" strokeWidth="0.8" fill="none" />

    {/* Heart (lower right) */}
    <path d="M 48 38 C 46 36 44 36 43 37.5 C 42 36 40 36 38 38 Q 43 42 48 38" fill="#E91E63" />

    {/* Sparkles */}
    <circle cx="28" cy="22" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="55" cy="32" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i2: Habitats
// ──────────────────────────────────────────────────────────────────
const IslandHabitats: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowHabitats" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(78,205,196,0.25)" />
        <stop offset="100%" stopColor="rgba(78,205,196,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowHabitats)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#37938C" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 27 38 L 29 42" stroke="#37938C" strokeWidth="1" opacity="0.3" />
    <path d="M 47 38 L 49 43" stroke="#37938C" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#6BDDD8" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#4ECDC4" />

    {/* Mini globe (left side) */}
    <circle cx="28" cy="26" r="4" fill="#2C5AA0" />
    <ellipse cx="28" cy="26" rx="3" ry="3.2" fill="#4CAF50" opacity="0.5" />
    <path d="M 28 23 Q 30 24 30 26 Q 30 28 28 29" fill="#4CAF50" opacity="0.4" />

    {/* Tree (center) */}
    <rect x="38.5" y="32" width="1" height="4" fill="#654321" />
    <circle cx="39" cy="29" r="3" fill="#27AE60" />
    <circle cx="37" cy="31" r="2" fill="#27AE60" />
    <circle cx="41" cy="31" r="2" fill="#27AE60" />

    {/* Fish silhouette (right side) */}
    <path d="M 52 25 L 56 24 L 56 26 Z" fill="#FF6B35" />
    <ellipse cx="50" cy="25" rx="3" ry="2.5" fill="#FF6B35" />
    <line x1="48" y1="23" x2="45" y2="22" stroke="#FF6B35" strokeWidth="1" />
    <line x1="48" y1="27" x2="45" y2="28" stroke="#FF6B35" strokeWidth="1" />

    {/* Sparkles */}
    <circle cx="26" cy="18" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="54" cy="30" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i3: Wild Animals
// ──────────────────────────────────────────────────────────────────
const IslandWildAnimals: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowWildAnimals" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(230,126,34,0.25)" />
        <stop offset="100%" stopColor="rgba(230,126,34,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowWildAnimals)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#B85C25" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 26 38 L 28 42" stroke="#B85C25" strokeWidth="1" opacity="0.3" />
    <path d="M 50 38 L 52 43" stroke="#B85C25" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#F5A76A" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#E67E22" />

    {/* Fox silhouette */}
    {/* Body */}
    <ellipse cx="35" cy="28" rx="6" ry="5" fill="#8B4513" />
    {/* Head */}
    <circle cx="43" cy="25" r="4" fill="#8B4513" />
    {/* Left ear */}
    <polygon points="41,20 43,17 44,21" fill="#8B4513" />
    {/* Right ear */}
    <polygon points="45,20 47,17 48,21" fill="#8B4513" />
    {/* Snout */}
    <ellipse cx="46" cy="26" rx="2" ry="1.5" fill="#D2B48C" />
    {/* Eye */}
    <circle cx="45" cy="24" r="0.6" fill="#000" />
    {/* Tail (fluffy) */}
    <path d="M 30 31 Q 20 32 18 28 Q 20 25 30 27" fill="#D2691E" opacity="0.7" />
    <path d="M 29 30 Q 22 31 21 28 Q 22 26 29 28" fill="#FF6347" opacity="0.5" />

    {/* Sparkles */}
    <circle cx="28" cy="20" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="54" cy="32" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i4: Plants
// ──────────────────────────────────────────────────────────────────
const IslandPlants: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowPlants" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(39,174,96,0.25)" />
        <stop offset="100%" stopColor="rgba(39,174,96,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowPlants)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#1B5E34" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 26 38 L 28 42" stroke="#1B5E34" strokeWidth="1" opacity="0.3" />
    <path d="M 51 38 L 53 43" stroke="#1B5E34" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#5EC576" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#27AE60" />

    {/* Sprouting seedling (center-left) */}
    {/* Roots */}
    <path d="M 32 35 Q 30 38 29 40" stroke="#8B4513" strokeWidth="1.2" fill="none" />
    <path d="M 32 35 Q 34 38 35 40" stroke="#8B4513" strokeWidth="1.2" fill="none" />
    {/* Stem */}
    <line x1="32" y1="35" x2="32" y2="22" stroke="#228B22" strokeWidth="1.5" />
    {/* First leaf */}
    <ellipse cx="29" cy="30" rx="2" ry="4" fill="#32CD32" transform="rotate(-30 29 30)" />
    {/* Second leaf */}
    <ellipse cx="35" cy="30" rx="2" ry="4" fill="#32CD32" transform="rotate(30 35 30)" />
    {/* Top leaf */}
    <ellipse cx="32" cy="20" rx="2" ry="3" fill="#228B22" />

    {/* Flower (right) */}
    <circle cx="48" cy="27" r="1.5" fill="#FFB6C1" />
    <circle cx="46" cy="26" r="1.5" fill="#FFB6C1" />
    <circle cx="46" cy="28" r="1.5" fill="#FFB6C1" />
    <circle cx="48" cy="26" r="1.5" fill="#FFB6C1" />
    <circle cx="48" cy="28" r="1.5" fill="#FFB6C1" />
    <circle cx="50" cy="27" r="1.5" fill="#FFD700" />
    <line x1="48" y1="30" x2="48" y2="35" stroke="#27AE60" strokeWidth="1" />

    {/* Sparkles */}
    <circle cx="26" cy="18" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="54" cy="28" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i5: Water
// ──────────────────────────────────────────────────────────────────
const IslandWater: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowWater" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(52,152,219,0.25)" />
        <stop offset="100%" stopColor="rgba(52,152,219,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowWater)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#1A5A7A" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 27 38 L 29 42" stroke="#1A5A7A" strokeWidth="1" opacity="0.3" />
    <path d="M 48 38 L 50 43" stroke="#1A5A7A" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#5DADE2" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#3498DB" />

    {/* Water droplet (left) */}
    <path d="M 28 22 Q 25 26 26 32 Q 28 34 30 32 Q 31 26 28 22" fill="#0088FF" />
    <circle cx="27.5" cy="25" r="0.8" fill="#87CEEB" opacity="0.6" />

    {/* Waves pattern (center) */}
    <path d="M 38 28 Q 40 29 42 28" stroke="#0066CC" strokeWidth="1.2" fill="none" />
    <path d="M 37 31 Q 40 32 43 31" stroke="#0066CC" strokeWidth="1.2" fill="none" />
    <path d="M 36 34 Q 40 35 44 34" stroke="#0066CC" strokeWidth="1.2" fill="none" />

    {/* Small cloud (upper right) */}
    <ellipse cx="50" cy="20" rx="4" ry="2.5" fill="#E8F4F8" opacity="0.8" />
    <ellipse cx="48" cy="21" rx="2.5" ry="2" fill="#E8F4F8" opacity="0.8" />
    <ellipse cx="52" cy="21" rx="2.5" ry="2" fill="#E8F4F8" opacity="0.8" />

    {/* Sparkles */}
    <circle cx="25" cy="18" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="55" cy="30" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i6: Jobs & Community
// ──────────────────────────────────────────────────────────────────
const IslandJobsCommunity: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowJobsCommunity" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(243,156,18,0.25)" />
        <stop offset="100%" stopColor="rgba(243,156,18,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowJobsCommunity)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#C9870C" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 26 38 L 28 42" stroke="#C9870C" strokeWidth="1" opacity="0.3" />
    <path d="M 50 38 L 52 43" stroke="#C9870C" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#F7C968" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#F39C12" />

    {/* Hard hat (left-center) */}
    <ellipse cx="32" cy="24" rx="5" ry="4" fill="#FF8C00" />
    <line x1="28" y1="27" x2="36" y2="27" stroke="#FF8C00" strokeWidth="1" />
    <ellipse cx="32" cy="27.5" rx="4.5" ry="1.5" fill="#FF7F00" />
    {/* Brim reflection */}
    <path d="M 29 27 Q 32 26 35 27" stroke="#FFB84D" strokeWidth="0.8" opacity="0.6" />

    {/* Wrench (right-center) */}
    <rect x="46" y="26" width="1" height="6" fill="#696969" />
    <ellipse cx="47" cy="24" rx="2.5" ry="1.5" fill="#696969" />
    <ellipse cx="47" cy="33" rx="1.5" ry="2.5" fill="#696969" />
    <path d="M 48.5 30 Q 50 31 51 30" stroke="#696969" strokeWidth="1" fill="none" />

    {/* Sparkles */}
    <circle cx="26" cy="18" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="54" cy="28" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i7: Safety & First Aid
// ──────────────────────────────────────────────────────────────────
const IslandSafetyFirstAid: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowSafety" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(231,76,60,0.25)" />
        <stop offset="100%" stopColor="rgba(231,76,60,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowSafety)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#A3453E" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 26 38 L 28 42" stroke="#A3453E" strokeWidth="1" opacity="0.3" />
    <path d="M 51 38 L 53 43" stroke="#A3453E" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#F5807D" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#E74C3C" />

    {/* Medical cross/plus (center-left) */}
    <rect x="29" y="22" width="6" height="2" fill="#FFFFFF" />
    <rect x="31" y="20" width="2" height="6" fill="#FFFFFF" />
    <rect x="28" y="21" width="8" height="4" fill="none" stroke="#FFF" strokeWidth="0.5" />

    {/* Bandage (right) */}
    <rect x="48" y="26" width="6" height="3" fill="#FFFACD" rx="0.5" />
    <line x1="51" y1="26" x2="51" y2="29" stroke="#FFD700" strokeWidth="0.8" />
    <line x1="49" y1="27.5" x2="53" y2="27.5" stroke="#FFD700" strokeWidth="0.6" />
    <circle cx="50" cy="27.5" r="0.6" fill="#FFD700" />
    <circle cx="52" cy="27.5" r="0.6" fill="#FFD700" />

    {/* Sparkles */}
    <circle cx="26" cy="18" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="55" cy="32" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i8: Science Experiments
// ──────────────────────────────────────────────────────────────────
const IslandScienceExperiments: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowScience" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(155,89,182,0.25)" />
        <stop offset="100%" stopColor="rgba(155,89,182,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowScience)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#6B3C7A" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 27 38 L 29 42" stroke="#6B3C7A" strokeWidth="1" opacity="0.3" />
    <path d="M 49 38 L 51 43" stroke="#6B3C7A" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#B59FD9" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#9B59B6" />

    {/* Magnet U-shape (left) */}
    <path d="M 28 20 L 28 28 Q 28 31 32 31 Q 36 31 36 28 L 36 20" stroke="#FF1493" strokeWidth="2.5" fill="none" />
    <path d="M 29 20 L 29 28 Q 29 30 32 30 Q 35 30 35 28 L 35 20" stroke="#00CED1" strokeWidth="2.5" fill="none" />
    {/* N and S labels (mini) */}
    <text x="28" y="32" fontSize="3" fill="#000" textAnchor="middle">N</text>
    <text x="36" y="32" fontSize="3" fill="#000" textAnchor="middle">S</text>

    {/* Test tube/flask (right) */}
    <rect x="48" y="24" width="2" height="8" fill="#87CEEB" opacity="0.7" rx="0.3" />
    <path d="M 47.5 23 L 48.5 20 L 49.5 23" fill="none" stroke="#696969" strokeWidth="0.8" />
    {/* Liquid inside */}
    <rect x="48" y="28" width="2" height="4" fill="#FF6B35" opacity="0.7" rx="0.2" />
    {/* Bubble */}
    <circle cx="49" cy="30" r="0.5" fill="#FFD700" opacity="0.8" />

    {/* Sparkles */}
    <circle cx="26" cy="18" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="55" cy="28" r="0.8" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// i9: Grand Review (Trophy)
// ──────────────────────────────────────────────────────────────────
const IslandGrandReview: React.FC<IP> = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size}>
    <defs>
      <radialGradient id="glowGrandReview" cx="50%" cy="40%">
        <stop offset="0%" stopColor="rgba(241,196,15,0.25)" />
        <stop offset="100%" stopColor="rgba(241,196,15,0)" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <ellipse cx="40" cy="45" rx="28" ry="12" fill="url(#glowGrandReview)" />

    {/* Rocky underside */}
    <path d="M 25 35 Q 30 38 35 36 Q 38 39 42 37 Q 45 40 50 38 Q 52 41 55 39" stroke="#C9A227" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M 26 38 L 28 42" stroke="#C9A227" strokeWidth="1" opacity="0.3" />
    <path d="M 51 38 L 53 43" stroke="#C9A227" strokeWidth="1" opacity="0.3" />

    {/* Island body */}
    <ellipse cx="40" cy="40" rx="22" ry="18" fill="#FFDA7E" />

    {/* Top surface */}
    <ellipse cx="40" cy="30" rx="20" ry="14" fill="#F1C40F" />

    {/* Trophy cup */}
    {/* Cup bowl */}
    <path d="M 35 22 L 33 27 Q 33 29 35 29 L 45 29 Q 47 29 47 27 L 45 22 Z" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
    {/* Left handle */}
    <path d="M 33 24 Q 28 24 28 27" stroke="#DAA520" strokeWidth="1.5" fill="none" />
    {/* Right handle */}
    <path d="M 47 24 Q 52 24 52 27" stroke="#DAA520" strokeWidth="1.5" fill="none" />
    {/* Base */}
    <rect x="34" y="29" width="12" height="1.5" fill="#DAA520" />
    <ellipse cx="40" cy="30.5" rx="8" ry="1.5" fill="#FFD700" />
    {/* Highlight on cup */}
    <ellipse cx="38" cy="24" rx="2.5" ry="1.5" fill="#FFFF99" opacity="0.6" />

    {/* Sparkles around trophy */}
    <circle cx="28" cy="22" r="1.2" fill="#FFD700" />
    <circle cx="32" cy="18" r="1" fill="#FFD700" opacity="0.8" />
    <circle cx="48" cy="20" r="1" fill="#FFD700" opacity="0.8" />
    <circle cx="52" cy="24" r="1.2" fill="#FFD700" />

    {/* Additional gold sparkles */}
    <path d="M 30 15 L 31 17 L 29 17 Z" fill="#FFD700" opacity="0.7" />
    <path d="M 50 16 L 51 18 L 49 18 Z" fill="#FFD700" opacity="0.7" />
  </svg>
);

// ──────────────────────────────────────────────────────────────────
// Export map
// ──────────────────────────────────────────────────────────────────
export const SK_K2_ISLAND_SVGS: Record<string, React.FC<{ size?: number }>> = {
  i1: IslandHealthyBody,
  i2: IslandHabitats,
  i3: IslandWildAnimals,
  i4: IslandPlants,
  i5: IslandWater,
  i6: IslandJobsCommunity,
  i7: IslandSafetyFirstAid,
  i8: IslandScienceExperiments,
  i9: IslandGrandReview,
};
