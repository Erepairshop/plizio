"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Trophy, CheckCircle, X, Circle } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";

type GameState = "ready" | "playing" | "result" | "reward";

const TOTAL_SCENES = 14;
const TIME_PER_SCENE = 45;
const MAX_SCORE = TOTAL_SCENES * 5; // 70

interface Hotspot {
  id: number;
  cx: number;
  cy: number;
  r: number;
}

interface WrongClick {
  id: number;
  x: number;
  y: number;
}

// ─── SCENE 1: NAPOS PARK ────────────────────────────────────────────────────
function ParkLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="130" fill="#4A90D9" />
      {/* Ground */}
      <rect x="0" y="130" width="320" height="70" fill="#5CAD4A" />
      {/* Path */}
      <rect x="135" y="130" width="50" height="70" fill="#D4B483" />

      {/* D3 LEFT: Cloud with top bump */}
      <ellipse cx="88" cy="28" rx="42" ry="20" fill="white" />
      <ellipse cx="110" cy="16" rx="28" ry="17" fill="white" />

      {/* D1 LEFT: Sun with rays */}
      <circle cx="272" cy="30" r="20" fill="#FFDC00" />
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 272 + 24 * Math.cos(rad);
        const y1 = 30 + 24 * Math.sin(rad);
        const x2 = 272 + 36 * Math.cos(rad);
        const y2 = 30 + 36 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDC00" strokeWidth="2.5" strokeLinecap="round" />;
      })}

      {/* Tree trunk left */}
      <rect x="55" y="105" width="14" height="40" fill="#7B5E3A" rx="2" />
      {/* D2 LEFT: Left tree foliage – green */}
      <circle cx="62" cy="84" r="34" fill="#2E8B57" />

      {/* Tree trunk right */}
      <rect x="238" y="108" width="12" height="37" fill="#7B5E3A" rx="2" />
      {/* D4 LEFT: Right tree foliage – exists */}
      <circle cx="244" cy="86" r="30" fill="#2E8B57" />

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
      {/* D5 LEFT: 3rd flower – purple */}
      <circle cx="260" cy="150" r="8" fill="#B44DFF" />

      {/* Found overlays */}
      {found.includes(0) && <circle cx="272" cy="30" r="32" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="62" cy="84" r="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <ellipse cx="100" cy="22" rx="50" ry="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="244" cy="86" r="32" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="260" cy="150" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

function ParkRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="130" fill="#4A90D9" />
      {/* Ground */}
      <rect x="0" y="130" width="320" height="70" fill="#5CAD4A" />
      {/* Path */}
      <rect x="135" y="130" width="50" height="70" fill="#D4B483" />

      {/* D3 RIGHT: Cloud WITHOUT top bump (flatter) */}
      <ellipse cx="88" cy="28" rx="42" ry="20" fill="white" />

      {/* D1 RIGHT: Sun WITHOUT rays */}
      <circle cx="272" cy="30" r="20" fill="#FFDC00" />

      {/* Tree trunk left */}
      <rect x="55" y="105" width="14" height="40" fill="#7B5E3A" rx="2" />
      {/* D2 RIGHT: Left tree foliage – dark red */}
      <circle cx="62" cy="84" r="34" fill="#8B1A1A" />

      {/* Tree trunk right */}
      <rect x="238" y="108" width="12" height="37" fill="#7B5E3A" rx="2" />
      {/* D4 RIGHT: Right tree foliage MISSING */}

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
      {/* D5 RIGHT: 3rd flower – pink (same as first) */}
      <circle cx="260" cy="150" r="8" fill="#FF4081" />

      {/* Found overlays */}
      {found.includes(0) && <circle cx="272" cy="30" r="32" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="62" cy="84" r="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <ellipse cx="100" cy="22" rx="50" ry="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="244" cy="86" r="32" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="260" cy="150" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 2: VÍZ ALATTI VILÁG ──────────────────────────────────────────────
function FishLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Water */}
      <rect x="0" y="0" width="320" height="200" fill="#0D4F8C" />
      {/* Light rays */}
      <polygon points="80,0 110,0 60,200 30,200" fill="rgba(255,255,255,0.04)" />
      <polygon points="170,0 200,0 150,200 120,200" fill="rgba(255,255,255,0.04)" />
      <polygon points="260,0 290,0 240,200 210,200" fill="rgba(255,255,255,0.04)" />
      {/* Seabed */}
      <path d="M0,165 Q80,155 160,162 Q240,170 320,158 L320,200 L0,200Z" fill="#C8A86B" />
      {/* Seaweed L */}
      <path d="M45,165 Q40,145 45,125 Q50,105 45,85" stroke="#2E7D32" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Seaweed R */}
      <path d="M285,158 Q280,138 285,118 Q290,98 285,78" stroke="#2E7D32" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* D1 LEFT: Big fish – orange */}
      <ellipse cx="95" cy="90" rx="38" ry="22" fill="#FF6B1A" />
      <polygon points="133,90 152,74 152,106" fill="#FF6B1A" />
      <circle cx="80" cy="84" r="4" fill="white" />
      <circle cx="80" cy="84" r="2" fill="#111" />
      <rect x="102" y="70" width="4" height="40" fill="rgba(0,0,0,0.2)" />

      {/* D2 LEFT: Small blue fish – exists */}
      <ellipse cx="240" cy="55" rx="20" ry="12" fill="#00D4FF" />
      <polygon points="260,55 275,44 275,66" fill="#00D4FF" />
      <circle cx="232" cy="51" r="3" fill="white" />
      <circle cx="232" cy="51" r="1.5" fill="#111" />

      {/* D3 LEFT: Pink coral – exists */}
      <path d="M260,162 L260,135 M260,140 L275,120 M260,148 L245,128" stroke="#FF4081" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* D4 LEFT: 5 bubbles */}
      <circle cx="60" cy="60" r="5" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="70" cy="40" r="3.5" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="130" cy="45" r="6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="145" cy="30" r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="50" cy="45" r="3" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

      {/* D5 LEFT: Starfish – orange */}
      {[0,72,144,216,288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const ox = 185, oy = 168;
        const x = ox + 14 * Math.cos(rad);
        const y = oy + 14 * Math.sin(rad);
        return <line key={i} x1={ox} y1={oy} x2={x} y2={y} stroke="#FF7043" strokeWidth="6" strokeLinecap="round" />;
      })}
      <circle cx="185" cy="168" r="5" fill="#FF7043" />

      {/* Found overlays */}
      {found.includes(0) && <ellipse cx="105" cy="90" rx="45" ry="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="240" cy="55" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="260" cy="140" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <ellipse cx="100" cy="45" rx="60" ry="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="185" cy="168" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

function FishRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Water */}
      <rect x="0" y="0" width="320" height="200" fill="#0D4F8C" />
      {/* Light rays */}
      <polygon points="80,0 110,0 60,200 30,200" fill="rgba(255,255,255,0.04)" />
      <polygon points="170,0 200,0 150,200 120,200" fill="rgba(255,255,255,0.04)" />
      <polygon points="260,0 290,0 240,200 210,200" fill="rgba(255,255,255,0.04)" />
      {/* Seabed */}
      <path d="M0,165 Q80,155 160,162 Q240,170 320,158 L320,200 L0,200Z" fill="#C8A86B" />
      {/* Seaweed L */}
      <path d="M45,165 Q40,145 45,125 Q50,105 45,85" stroke="#2E7D32" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Seaweed R */}
      <path d="M285,158 Q280,138 285,118 Q290,98 285,78" stroke="#2E7D32" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* D1 RIGHT: Big fish – yellow/gold */}
      <ellipse cx="95" cy="90" rx="38" ry="22" fill="#FFD700" />
      <polygon points="133,90 152,74 152,106" fill="#FFD700" />
      <circle cx="80" cy="84" r="4" fill="white" />
      <circle cx="80" cy="84" r="2" fill="#111" />
      <rect x="102" y="70" width="4" height="40" fill="rgba(0,0,0,0.2)" />

      {/* D2 RIGHT: Small blue fish MISSING */}

      {/* D3 RIGHT: Pink coral MISSING */}

      {/* D4 RIGHT: 3 bubbles (2 missing) */}
      <circle cx="60" cy="60" r="5" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="130" cy="45" r="6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="50" cy="45" r="3" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

      {/* D5 RIGHT: Starfish – purple */}
      {[0,72,144,216,288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const ox = 185, oy = 168;
        const x = ox + 14 * Math.cos(rad);
        const y = oy + 14 * Math.sin(rad);
        return <line key={i} x1={ox} y1={oy} x2={x} y2={y} stroke="#9C27B0" strokeWidth="6" strokeLinecap="round" />;
      })}
      <circle cx="185" cy="168" r="5" fill="#9C27B0" />

      {/* Found overlays */}
      {found.includes(0) && <ellipse cx="105" cy="90" rx="45" ry="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="240" cy="55" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="260" cy="140" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <ellipse cx="100" cy="45" rx="60" ry="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="185" cy="168" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 3: ÉJSZAKAI VÁROS ────────────────────────────────────────────────
function CityLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Night sky */}
      <rect x="0" y="0" width="320" height="155" fill="#0A0A2E" />
      {/* Road */}
      <rect x="0" y="163" width="320" height="37" fill="#2C2C2C" />
      {/* Sidewalk */}
      <rect x="0" y="150" width="320" height="13" fill="#4A4A4A" />
      {/* Road stripes */}
      <rect x="50" y="176" width="40" height="5" fill="white" opacity="0.6" />
      <rect x="140" y="176" width="40" height="5" fill="white" opacity="0.6" />
      <rect x="230" y="176" width="40" height="5" fill="white" opacity="0.6" />

      {/* D2 LEFT: 5 stars */}
      <circle cx="40" cy="20" r="2" fill="white" />
      <circle cx="130" cy="15" r="2" fill="white" />
      <circle cx="180" cy="30" r="2" fill="white" />
      <circle cx="85" cy="10" r="2" fill="white" />
      <circle cx="220" cy="12" r="2" fill="white" />

      {/* D1 LEFT: Full moon */}
      <circle cx="275" cy="25" r="18" fill="#FFFACD" />

      {/* Tall building */}
      <rect x="15" y="38" width="72" height="117" fill="#1A1A3E" rx="2" />
      {/* Windows tall building – grid 3x4 */}
      {[0,1,2].map(col => [0,1,2,3].map(row => {
        const wx = 25 + col * 20;
        const wy = 48 + row * 22;
        const isLit = col === 1 && row === 1;
        return <rect key={`${col}-${row}`} x={wx} y={wy} width="14" height="10" fill={isLit ? "#FFD700" : "#0F0F2A"} rx="1" />;
      }))}

      {/* Mid building */}
      <rect x="110" y="62" width="58" height="93" fill="#1E2844" rx="2" />
      {[0,1].map(col => [0,1,2].map(row => (
        <rect key={`m${col}-${row}`} x={120 + col * 22} y={72 + row * 22} width="14" height="10" fill="#0F0F2A" rx="1" />
      )))}

      {/* Right building */}
      <rect x="225" y="48" width="78" height="107" fill="#1A2840" rx="2" />
      {[0,1,2].map(col => [0,1,2,3].map(row => (
        <rect key={`r${col}-${row}`} x={235 + col * 22} y={58 + row * 20} width="14" height="10" fill="#0F0F2A" rx="1" />
      )))}

      {/* Street lamp */}
      <rect x="169" y="90" width="5" height="65" fill="#555" />
      <rect x="157" y="90" width="17" height="4" fill="#555" />
      {/* D4 LEFT: Lamp light – yellow */}
      <ellipse cx="163" cy="90" rx="10" ry="6" fill="#FFD700" />

      {/* D5 LEFT: Car – pink/red */}
      <rect x="55" y="162" width="70" height="18" fill="#FF2D78" rx="4" />
      <rect x="65" y="153" width="50" height="13" fill="#CC2060" rx="3" />
      <rect x="68" y="155" width="18" height="9" fill="#0D4F8C" rx="1" />
      <rect x="91" y="155" width="18" height="9" fill="#0D4F8C" rx="1" />
      <circle cx="72" cy="180" r="7" fill="#111" />
      <circle cx="72" cy="180" r="4" fill="#333" />
      <circle cx="113" cy="180" r="7" fill="#111" />
      <circle cx="113" cy="180" r="4" fill="#333" />

      {/* Found overlays */}
      {found.includes(0) && <circle cx="275" cy="25" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <ellipse cx="140" cy="20" rx="55" ry="18" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="46" cy="83" r="18" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="163" cy="90" r="20" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="45" y="148" width="100" height="38" rx="6" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

function CityRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Night sky */}
      <rect x="0" y="0" width="320" height="155" fill="#0A0A2E" />
      {/* Road */}
      <rect x="0" y="163" width="320" height="37" fill="#2C2C2C" />
      {/* Sidewalk */}
      <rect x="0" y="150" width="320" height="13" fill="#4A4A4A" />
      {/* Road stripes */}
      <rect x="50" y="176" width="40" height="5" fill="white" opacity="0.6" />
      <rect x="140" y="176" width="40" height="5" fill="white" opacity="0.6" />
      <rect x="230" y="176" width="40" height="5" fill="white" opacity="0.6" />

      {/* D2 RIGHT: 3 stars (2 missing: cx=85,cy=10 and cx=180,cy=30) */}
      <circle cx="40" cy="20" r="2" fill="white" />
      <circle cx="130" cy="15" r="2" fill="white" />
      <circle cx="220" cy="12" r="2" fill="white" />

      {/* D1 RIGHT: Crescent moon */}
      <circle cx="275" cy="25" r="18" fill="#FFFACD" />
      <circle cx="283" cy="22" r="16" fill="#0A0A2E" />

      {/* Tall building */}
      <rect x="15" y="38" width="72" height="117" fill="#1A1A3E" rx="2" />
      {/* D3 RIGHT: All windows dark */}
      {[0,1,2].map(col => [0,1,2,3].map(row => (
        <rect key={`${col}-${row}`} x={25 + col * 20} y={48 + row * 22} width="14" height="10" fill="#0F0F2A" rx="1" />
      )))}

      {/* Mid building */}
      <rect x="110" y="62" width="58" height="93" fill="#1E2844" rx="2" />
      {[0,1].map(col => [0,1,2].map(row => (
        <rect key={`m${col}-${row}`} x={120 + col * 22} y={72 + row * 22} width="14" height="10" fill="#0F0F2A" rx="1" />
      )))}

      {/* Right building */}
      <rect x="225" y="48" width="78" height="107" fill="#1A2840" rx="2" />
      {[0,1,2].map(col => [0,1,2,3].map(row => (
        <rect key={`r${col}-${row}`} x={235 + col * 22} y={58 + row * 20} width="14" height="10" fill="#0F0F2A" rx="1" />
      )))}

      {/* Street lamp */}
      <rect x="169" y="90" width="5" height="65" fill="#555" />
      <rect x="157" y="90" width="17" height="4" fill="#555" />
      {/* D4 RIGHT: Lamp light – pink */}
      <ellipse cx="163" cy="90" rx="10" ry="6" fill="#FF2D78" />

      {/* D5 RIGHT: Car – cyan/blue */}
      <rect x="55" y="162" width="70" height="18" fill="#00D4FF" rx="4" />
      <rect x="65" y="153" width="50" height="13" fill="#009AB8" rx="3" />
      <rect x="68" y="155" width="18" height="9" fill="#0D4F8C" rx="1" />
      <rect x="91" y="155" width="18" height="9" fill="#0D4F8C" rx="1" />
      <circle cx="72" cy="180" r="7" fill="#111" />
      <circle cx="72" cy="180" r="4" fill="#333" />
      <circle cx="113" cy="180" r="7" fill="#111" />
      <circle cx="113" cy="180" r="4" fill="#333" />

      {/* Found overlays */}
      {found.includes(0) && <circle cx="275" cy="25" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <ellipse cx="140" cy="20" rx="55" ry="18" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="46" cy="83" r="18" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="163" cy="90" r="20" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="45" y="148" width="100" height="38" rx="6" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 4: KONYHA ─────────────────────────────────────────────────────────
function KitchenLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Wall */}
      <rect x="0" y="0" width="320" height="145" fill="#F0E6D3" />
      {/* Floor */}
      <rect x="0" y="145" width="320" height="55" fill="#C49A6C" />
      {/* Counter */}
      <rect x="0" y="118" width="320" height="28" fill="#8B6914" />
      <rect x="0" y="115" width="320" height="5" fill="#A0785A" />

      {/* Cabinet Left */}
      <rect x="5" y="8" width="88" height="82" fill="#A0785A" rx="4" />
      <rect x="10" y="13" width="38" height="72" fill="#8B6438" rx="3" />
      <rect x="53" y="13" width="35" height="72" fill="#8B6438" rx="3" />
      {/* D3 LEFT: Cabinet handles – exist */}
      <ellipse cx="30" cy="50" rx="3" ry="5" fill="#6B4A2A" />
      <ellipse cx="70" cy="50" rx="3" ry="5" fill="#6B4A2A" />

      {/* Cabinet Right */}
      <rect x="228" y="8" width="88" height="82" fill="#A0785A" rx="4" />
      <rect x="233" y="13" width="38" height="72" fill="#8B6438" rx="3" />
      <rect x="276" y="13" width="35" height="72" fill="#8B6438" rx="3" />
      {/* D3 LEFT: Right cabinet handles */}
      <ellipse cx="253" cy="50" rx="3" ry="5" fill="#6B4A2A" />
      <ellipse cx="293" cy="50" rx="3" ry="5" fill="#6B4A2A" />

      {/* Window */}
      <rect x="112" y="9" width="96" height="81" fill="none" stroke="#8B6438" strokeWidth="5" rx="3" />
      <rect x="115" y="12" width="90" height="75" fill="#87CEEB" rx="2" />
      <rect x="112" y="48" width="96" height="4" fill="#8B6438" />
      <rect x="158" y="9" width="4" height="81" fill="#8B6438" />
      {/* D5 LEFT: Curtains – red */}
      <rect x="114" y="11" width="14" height="79" fill="#FF6B6B" opacity="0.75" rx="2" />
      <rect x="194" y="11" width="14" height="79" fill="#FF6B6B" opacity="0.75" rx="2" />

      {/* D2 LEFT: Flower in window – exists */}
      <rect x="128" y="50" width="4" height="26" fill="#4CAF50" />
      <circle cx="130" cy="44" r="10" fill="#FF4081" />
      <ellipse cx="124" cy="58" rx="6" ry="4" fill="#4CAF50" />
      <ellipse cx="137" cy="60" rx="6" ry="4" fill="#4CAF50" />

      {/* D4 LEFT: Clock – exists */}
      <circle cx="195" cy="55" r="18" fill="white" stroke="#8B6438" strokeWidth="2" />
      <line x1="195" y1="55" x2="195" y2="42" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <line x1="195" y1="55" x2="205" y2="58" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="195" cy="55" r="2" fill="#333" />

      {/* D1 LEFT: Pot on counter – red */}
      <circle cx="68" cy="112" r="22" fill="#E53935" />
      <rect x="88" y="108" width="18" height="6" fill="#C62828" rx="3" />
      <rect x="42" y="108" width="4" height="8" fill="#C62828" rx="2" />
      <ellipse cx="68" cy="92" rx="22" ry="5" fill="#EF5350" />

      {/* Found overlays */}
      {found.includes(0) && <circle cx="68" cy="112" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="130" cy="52" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="49" cy="50" r="46" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="195" cy="55" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="112" y="9" width="96" height="81" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" rx="3" />}
    </svg>
  );
}

function KitchenRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Wall */}
      <rect x="0" y="0" width="320" height="145" fill="#F0E6D3" />
      {/* Floor */}
      <rect x="0" y="145" width="320" height="55" fill="#C49A6C" />
      {/* Counter */}
      <rect x="0" y="118" width="320" height="28" fill="#8B6914" />
      <rect x="0" y="115" width="320" height="5" fill="#A0785A" />

      {/* Cabinet Left */}
      <rect x="5" y="8" width="88" height="82" fill="#A0785A" rx="4" />
      <rect x="10" y="13" width="38" height="72" fill="#8B6438" rx="3" />
      <rect x="53" y="13" width="35" height="72" fill="#8B6438" rx="3" />
      {/* D3 RIGHT: Cabinet handles MISSING */}

      {/* Cabinet Right */}
      <rect x="228" y="8" width="88" height="82" fill="#A0785A" rx="4" />
      <rect x="233" y="13" width="38" height="72" fill="#8B6438" rx="3" />
      <rect x="276" y="13" width="35" height="72" fill="#8B6438" rx="3" />
      {/* D3 RIGHT: Right cabinet handles MISSING */}

      {/* Window */}
      <rect x="112" y="9" width="96" height="81" fill="none" stroke="#8B6438" strokeWidth="5" rx="3" />
      <rect x="115" y="12" width="90" height="75" fill="#87CEEB" rx="2" />
      <rect x="112" y="48" width="96" height="4" fill="#8B6438" />
      <rect x="158" y="9" width="4" height="81" fill="#8B6438" />
      {/* D5 RIGHT: Curtains – blue */}
      <rect x="114" y="11" width="14" height="79" fill="#6B9FFF" opacity="0.75" rx="2" />
      <rect x="194" y="11" width="14" height="79" fill="#6B9FFF" opacity="0.75" rx="2" />

      {/* D2 RIGHT: Flower in window MISSING */}

      {/* D4 RIGHT: Clock MISSING */}

      {/* D1 RIGHT: Pot on counter – blue */}
      <circle cx="68" cy="112" r="22" fill="#1565C0" />
      <rect x="88" y="108" width="18" height="6" fill="#0D47A1" rx="3" />
      <rect x="42" y="108" width="4" height="8" fill="#0D47A1" rx="2" />
      <ellipse cx="68" cy="92" rx="22" ry="5" fill="#1976D2" />

      {/* Found overlays */}
      {found.includes(0) && <circle cx="68" cy="112" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="130" cy="52" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="49" cy="50" r="46" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="195" cy="55" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="112" y="9" width="96" height="81" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" rx="3" />}
    </svg>
  );
}

// ─── SCENE 5: NAPPALI SZOBA ──────────────────────────────────────────────────
function LivingLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Wall */}
      <rect x="0" y="0" width="320" height="145" fill="#E8D5C4" />
      {/* Floor */}
      <rect x="0" y="145" width="320" height="55" fill="#8B6914" />
      {/* Rug */}
      <ellipse cx="160" cy="160" rx="110" ry="25" fill="#C0392B" opacity="0.5" />
      {/* D5 LEFT: Wall color – warm beige (same) but painting above sofa */}
      {/* Painting on wall */}
      <rect x="30" y="15" width="50" height="36" fill="#2980B9" rx="2" />
      <rect x="33" y="18" width="44" height="30" fill="#1ABC9C" rx="1" />
      {/* D1 LEFT: Lamp – yellow shade */}
      <rect x="35" y="95" width="6" height="40" fill="#7B5E3A" />
      <polygon points="24,95 50,95 44,72 30,72" fill="#FFD700" />
      <ellipse cx="38" cy="95" rx="15" ry="4" fill="#E6B800" />
      {/* Sofa */}
      <rect x="70" y="115" width="180" height="35" fill="#5D4037" rx="5" />
      <rect x="70" y="100" width="180" height="20" fill="#6D4C41" rx="4" />
      <rect x="70" y="100" width="22" height="50" fill="#6D4C41" rx="4" />
      <rect x="228" y="100" width="22" height="50" fill="#6D4C41" rx="4" />
      {/* Cushions on sofa */}
      <rect x="95" y="103" width="40" height="28" fill="#E91E63" rx="5" />
      <rect x="145" y="103" width="40" height="28" fill="#FF9800" rx="5" />
      <rect x="185" y="103" width="35" height="28" fill="#E91E63" rx="5" />
      {/* D2 LEFT: TV – wide, dark frame */}
      <rect x="105" y="40" width="110" height="66" fill="#1A1A1A" rx="4" />
      <rect x="108" y="43" width="104" height="56" fill="#0D3B6E" rx="2" />
      <rect x="153" y="106" width="14" height="8" fill="#1A1A1A" />
      <rect x="145" y="113" width="30" height="4" fill="#1A1A1A" />
      {/* D3 LEFT: Bookshelf – brown, 3 shelves */}
      <rect x="255" y="55" width="55" height="90" fill="#795548" rx="3" />
      <rect x="255" y="75" width="55" height="4" fill="#5D4037" />
      <rect x="255" y="95" width="55" height="4" fill="#5D4037" />
      <rect x="255" y="115" width="55" height="4" fill="#5D4037" />
      <rect x="258" y="58" width="8" height="16" fill="#E74C3C" rx="1" />
      <rect x="267" y="58" width="6" height="16" fill="#3498DB" rx="1" />
      <rect x="274" y="58" width="9" height="16" fill="#2ECC71" rx="1" />
      <rect x="258" y="78" width="7" height="16" fill="#F39C12" rx="1" />
      <rect x="266" y="78" width="8" height="16" fill="#9B59B6" rx="1" />
      <rect x="258" y="98" width="10" height="16" fill="#1ABC9C" rx="1" />
      {/* D4 LEFT: Plant – green, round pot */}
      <ellipse cx="270" cy="155" rx="18" ry="10" fill="#795548" />
      <rect x="255" y="138" width="30" height="18" fill="#8D6E63" rx="3" />
      <circle cx="270" cy="130" r="18" fill="#27AE60" />
      <circle cx="258" cy="138" r="10" fill="#2ECC71" />
      <circle cx="282" cy="138" r="10" fill="#2ECC71" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="52" cy="105" r="35" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="105" y="38" width="110" height="70" rx="5" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="253" y="53" width="60" height="94" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="270" cy="160" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="25" y="12" width="60" height="42" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function LivingRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Wall */}
      <rect x="0" y="0" width="320" height="145" fill="#E8D5C4" />
      {/* Floor */}
      <rect x="0" y="145" width="320" height="55" fill="#8B6914" />
      {/* Rug */}
      <ellipse cx="160" cy="160" rx="110" ry="25" fill="#C0392B" opacity="0.5" />
      {/* Painting on wall – DIFF4: orange instead of blue */}
      <rect x="30" y="15" width="50" height="36" fill="#E67E22" rx="2" />
      <rect x="33" y="18" width="44" height="30" fill="#F39C12" rx="1" />
      {/* D1 RIGHT: Lamp – pink shade */}
      <rect x="35" y="95" width="6" height="40" fill="#7B5E3A" />
      <polygon points="24,95 50,95 44,72 30,72" fill="#FF4081" />
      <ellipse cx="38" cy="95" rx="15" ry="4" fill="#C2185B" />
      {/* Sofa */}
      <rect x="70" y="115" width="180" height="35" fill="#5D4037" rx="5" />
      <rect x="70" y="100" width="180" height="20" fill="#6D4C41" rx="4" />
      <rect x="70" y="100" width="22" height="50" fill="#6D4C41" rx="4" />
      <rect x="228" y="100" width="22" height="50" fill="#6D4C41" rx="4" />
      {/* Cushions on sofa */}
      <rect x="95" y="103" width="40" height="28" fill="#E91E63" rx="5" />
      <rect x="145" y="103" width="40" height="28" fill="#FF9800" rx="5" />
      <rect x="185" y="103" width="35" height="28" fill="#E91E63" rx="5" />
      {/* D2 RIGHT: TV – smaller frame */}
      <rect x="115" y="44" width="90" height="58" fill="#1A1A1A" rx="4" />
      <rect x="118" y="47" width="84" height="48" fill="#0D3B6E" rx="2" />
      <rect x="153" y="102" width="14" height="8" fill="#1A1A1A" />
      <rect x="145" y="109" width="30" height="4" fill="#1A1A1A" />
      {/* D3 RIGHT: Bookshelf – no books on top shelf */}
      <rect x="255" y="55" width="55" height="90" fill="#795548" rx="3" />
      <rect x="255" y="75" width="55" height="4" fill="#5D4037" />
      <rect x="255" y="95" width="55" height="4" fill="#5D4037" />
      <rect x="255" y="115" width="55" height="4" fill="#5D4037" />
      {/* top shelf empty */}
      <rect x="258" y="78" width="7" height="16" fill="#F39C12" rx="1" />
      <rect x="266" y="78" width="8" height="16" fill="#9B59B6" rx="1" />
      <rect x="258" y="98" width="10" height="16" fill="#1ABC9C" rx="1" />
      {/* D4 RIGHT: Plant – dead/brown */}
      <ellipse cx="270" cy="155" rx="18" ry="10" fill="#795548" />
      <rect x="255" y="138" width="30" height="18" fill="#8D6E63" rx="3" />
      <circle cx="270" cy="130" r="18" fill="#795548" />
      <circle cx="258" cy="138" r="10" fill="#8D6E63" />
      <circle cx="282" cy="138" r="10" fill="#8D6E63" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="52" cy="105" r="35" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="105" y="38" width="110" height="70" rx="5" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="253" y="53" width="60" height="94" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="270" cy="160" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="25" y="12" width="60" height="42" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 6: REPÜLŐTÉR ──────────────────────────────────────────────────────
function AirportLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="130" fill="#87CEEB" />
      {/* Clouds */}
      <ellipse cx="60" cy="25" rx="30" ry="14" fill="white" />
      <ellipse cx="80" cy="17" rx="20" ry="13" fill="white" />
      {/* Ground */}
      <rect x="0" y="130" width="320" height="70" fill="#9E9E9E" />
      {/* Runway */}
      <rect x="0" y="145" width="320" height="20" fill="#555" />
      <rect x="30" y="153" width="35" height="4" fill="white" opacity="0.7" />
      <rect x="110" y="153" width="35" height="4" fill="white" opacity="0.7" />
      <rect x="190" y="153" width="35" height="4" fill="white" opacity="0.7" />
      <rect x="260" y="153" width="35" height="4" fill="white" opacity="0.7" />
      {/* D4 LEFT: Terminal building */}
      <rect x="100" y="100" width="120" height="45" fill="#B0BEC5" rx="3" />
      <rect x="100" y="90" width="120" height="14" fill="#78909C" rx="2" />
      <rect x="120" y="105" width="18" height="26" fill="#0D4F8C" rx="1" />
      <rect x="148" y="105" width="18" height="26" fill="#0D4F8C" rx="1" />
      <rect x="176" y="105" width="18" height="26" fill="#0D4F8C" rx="1" />
      {/* Terminal sign */}
      <rect x="136" y="92" width="48" height="10" fill="#FF5722" rx="2" />
      {/* D2 LEFT: Control tower */}
      <rect x="254" y="60" width="20" height="70" fill="#B0BEC5" rx="2" />
      <rect x="248" y="55" width="32" height="15" fill="#78909C" rx="3" />
      <rect x="250" y="57" width="10" height="9" fill="#87CEEB" />
      <rect x="264" y="57" width="10" height="9" fill="#87CEEB" />
      <rect x="262" y="40" width="4" height="18" fill="#E53935" />
      {/* D3 LEFT: Sun – yellow */}
      <circle cx="270" cy="28" r="20" fill="#FFD700" />
      {/* D1 LEFT: Plane 1 – white, left */}
      <ellipse cx="75" cy="95" rx="42" ry="14" fill="white" />
      <polygon points="33,95 10,82 10,95" fill="white" />
      <rect x="60" y="82" width="30" height="12" fill="white" />
      <rect x="108" y="89" width="9" height="18" fill="white" />
      <rect x="33" y="92" width="8" height="8" fill="#0D4F8C" />
      {/* D5 LEFT: Suitcase on ground – red */}
      <rect x="38" y="162" width="30" height="22" fill="#E53935" rx="3" />
      <rect x="47" y="158" width="12" height="7" fill="#B71C1C" rx="2" />
      <line x1="38" y1="173" x2="68" y2="173" stroke="#B71C1C" strokeWidth="2" />
      {/* D5 LEFT: 2nd suitcase – blue */}
      <rect x="72" y="165" width="24" height="19" fill="#1565C0" rx="3" />
      <rect x="79" y="161" width="10" height="7" fill="#0D47A1" rx="2" />
      {/* Found overlays */}
      {found.includes(0) && <ellipse cx="80" cy="95" rx="50" ry="20" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <ellipse cx="240" cy="90" rx="44" ry="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="270" cy="28" r="26" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="98" y="88" width="124" height="60" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="30" y="156" width="72" height="32" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function AirportRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="130" fill="#87CEEB" />
      {/* Clouds */}
      <ellipse cx="60" cy="25" rx="30" ry="14" fill="white" />
      <ellipse cx="80" cy="17" rx="20" ry="13" fill="white" />
      {/* Ground */}
      <rect x="0" y="130" width="320" height="70" fill="#9E9E9E" />
      {/* Runway */}
      <rect x="0" y="145" width="320" height="20" fill="#555" />
      <rect x="30" y="153" width="35" height="4" fill="white" opacity="0.7" />
      <rect x="110" y="153" width="35" height="4" fill="white" opacity="0.7" />
      <rect x="190" y="153" width="35" height="4" fill="white" opacity="0.7" />
      <rect x="260" y="153" width="35" height="4" fill="white" opacity="0.7" />
      {/* D4 RIGHT: Terminal – green roof */}
      <rect x="100" y="100" width="120" height="45" fill="#B0BEC5" rx="3" />
      <rect x="100" y="90" width="120" height="14" fill="#388E3C" rx="2" />
      <rect x="120" y="105" width="18" height="26" fill="#0D4F8C" rx="1" />
      <rect x="148" y="105" width="18" height="26" fill="#0D4F8C" rx="1" />
      <rect x="176" y="105" width="18" height="26" fill="#0D4F8C" rx="1" />
      <rect x="136" y="92" width="48" height="10" fill="#FF5722" rx="2" />
      {/* D2 RIGHT: Control tower – taller */}
      <rect x="254" y="45" width="20" height="85" fill="#B0BEC5" rx="2" />
      <rect x="248" y="40" width="32" height="15" fill="#78909C" rx="3" />
      <rect x="250" y="42" width="10" height="9" fill="#87CEEB" />
      <rect x="264" y="42" width="10" height="9" fill="#87CEEB" />
      <rect x="262" y="25" width="4" height="18" fill="#E53935" />
      {/* D3 RIGHT: Sun – orange */}
      <circle cx="270" cy="28" r="20" fill="#FF6B1A" />
      {/* D1 RIGHT: Plane 1 – blue */}
      <ellipse cx="75" cy="95" rx="42" ry="14" fill="#1565C0" />
      <polygon points="33,95 10,82 10,95" fill="#1565C0" />
      <rect x="60" y="82" width="30" height="12" fill="#1565C0" />
      <rect x="108" y="89" width="9" height="18" fill="#1565C0" />
      <rect x="33" y="92" width="8" height="8" fill="#0D4F8C" />
      {/* D5 RIGHT: Suitcase on ground – green (changed from red) */}
      <rect x="38" y="162" width="30" height="22" fill="#2E7D32" rx="3" />
      <rect x="47" y="158" width="12" height="7" fill="#1B5E20" rx="2" />
      <line x1="38" y1="173" x2="68" y2="173" stroke="#1B5E20" strokeWidth="2" />
      {/* 2nd suitcase – blue (same) */}
      <rect x="72" y="165" width="24" height="19" fill="#1565C0" rx="3" />
      <rect x="79" y="161" width="10" height="7" fill="#0D47A1" rx="2" />
      {/* Found overlays */}
      {found.includes(0) && <ellipse cx="80" cy="95" rx="50" ry="20" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <ellipse cx="240" cy="90" rx="44" ry="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="270" cy="28" r="26" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="98" y="88" width="124" height="60" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="30" y="156" width="72" height="32" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 7: ERDŐ ──────────────────────────────────────────────────────────
function ForestLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="110" fill="#87CEEB" />
      {/* D5 LEFT: Sun – yellow */}
      <circle cx="210" cy="28" r="18" fill="#FFD700" />
      {[0,45,90,135,180,225,270,315].map((a,i)=>{const r=(a*Math.PI)/180;return <line key={i} x1={210+22*Math.cos(r)} y1={28+22*Math.sin(r)} x2={210+30*Math.cos(r)} y2={28+30*Math.sin(r)} stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>;})}
      {/* Ground */}
      <rect x="0" y="110" width="320" height="90" fill="#4CAF50" />
      <rect x="0" y="155" width="320" height="45" fill="#388E3C" />
      {/* Path */}
      <path d="M130,200 Q160,170 180,200" fill="#C8A86B" />
      <rect x="135" y="165" width="50" height="35" fill="#C8A86B" />
      {/* D1 LEFT: Left big tree – dark green */}
      <rect x="48" y="105" width="14" height="60" fill="#5D4037" rx="2" />
      <circle cx="55" cy="80" r="38" fill="#1B5E20" />
      <circle cx="38" cy="95" r="22" fill="#2E7D32" />
      <circle cx="72" cy="95" r="22" fill="#2E7D32" />
      {/* D2 LEFT: Right big tree – dark green */}
      <rect x="258" y="108" width="14" height="57" fill="#5D4037" rx="2" />
      <circle cx="265" cy="78" r="40" fill="#1B5E20" />
      <circle cx="247" cy="95" r="22" fill="#2E7D32" />
      <circle cx="283" cy="95" r="22" fill="#2E7D32" />
      {/* Small mushrooms */}
      <rect x="107" y="150" width="6" height="14" fill="#D7CCC8" rx="1" />
      {/* D3 LEFT: Mushroom cap – red with dots */}
      <ellipse cx="110" cy="148" rx="12" ry="8" fill="#E53935" />
      <circle cx="107" cy="145" r="2" fill="white" />
      <circle cx="113" cy="144" r="2" fill="white" />
      <circle cx="110" cy="150" r="1.5" fill="white" />
      {/* Flowers */}
      <rect x="185" y="153" width="3" height="12" fill="#4CAF50" />
      <circle cx="186" cy="148" r="7" fill="#FF4081" />
      <rect x="200" y="155" width="3" height="10" fill="#4CAF50" />
      <circle cx="201" cy="151" r="6" fill="#FFEB3B" />
      <rect x="215" y="150" width="3" height="14" fill="#4CAF50" />
      <circle cx="216" cy="146" r="7" fill="#FF4081" />
      {/* D4 LEFT: Fox – orange */}
      <ellipse cx="170" cy="158" rx="16" ry="10" fill="#FF6B1A" />
      <polygon points="162,150 157,138 170,148" fill="#FF6B1A" />
      <polygon points="178,150 183,138 170,148" fill="#FF6B1A" />
      <circle cx="165" cy="153" r="3" fill="white" />
      <circle cx="175" cy="153" r="3" fill="white" />
      <circle cx="165" cy="153" r="1.5" fill="#111" />
      <circle cx="175" cy="153" r="1.5" fill="#111" />
      <ellipse cx="170" cy="158" rx="5" ry="3" fill="#FFCCBC" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="55" cy="90" r="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="268" cy="85" r="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="160" cy="155" r="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="110" cy="160" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="210" cy="28" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function ForestRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="110" fill="#87CEEB" />
      {/* D5 RIGHT: Sun – missing rays */}
      <circle cx="210" cy="28" r="18" fill="#FFD700" />
      {/* Ground */}
      <rect x="0" y="110" width="320" height="90" fill="#4CAF50" />
      <rect x="0" y="155" width="320" height="45" fill="#388E3C" />
      {/* Path */}
      <path d="M130,200 Q160,170 180,200" fill="#C8A86B" />
      <rect x="135" y="165" width="50" height="35" fill="#C8A86B" />
      {/* D1 RIGHT: Left big tree – orange/autumn */}
      <rect x="48" y="105" width="14" height="60" fill="#5D4037" rx="2" />
      <circle cx="55" cy="80" r="38" fill="#E65100" />
      <circle cx="38" cy="95" r="22" fill="#FF6D00" />
      <circle cx="72" cy="95" r="22" fill="#FF6D00" />
      {/* D2 RIGHT: Right big tree – purple */}
      <rect x="258" y="108" width="14" height="57" fill="#5D4037" rx="2" />
      <circle cx="265" cy="78" r="40" fill="#6A1B9A" />
      <circle cx="247" cy="95" r="22" fill="#7B1FA2" />
      <circle cx="283" cy="95" r="22" fill="#7B1FA2" />
      {/* Small mushrooms */}
      <rect x="107" y="150" width="6" height="14" fill="#D7CCC8" rx="1" />
      {/* D3 RIGHT: Mushroom cap – blue (changed from red) */}
      <ellipse cx="110" cy="148" rx="12" ry="8" fill="#1565C0" />
      <circle cx="107" cy="145" r="2" fill="white" />
      <circle cx="113" cy="144" r="2" fill="white" />
      <circle cx="110" cy="150" r="1.5" fill="white" />
      {/* Flowers */}
      <rect x="185" y="153" width="3" height="12" fill="#4CAF50" />
      <circle cx="186" cy="148" r="7" fill="#FF4081" />
      <rect x="200" y="155" width="3" height="10" fill="#4CAF50" />
      <circle cx="201" cy="151" r="6" fill="#FFEB3B" />
      <rect x="215" y="150" width="3" height="14" fill="#4CAF50" />
      <circle cx="216" cy="146" r="7" fill="#FF4081" />
      {/* D4 RIGHT: Fox – grey/wolf */}
      <ellipse cx="170" cy="158" rx="16" ry="10" fill="#9E9E9E" />
      <polygon points="162,150 157,138 170,148" fill="#9E9E9E" />
      <polygon points="178,150 183,138 170,148" fill="#9E9E9E" />
      <circle cx="165" cy="153" r="3" fill="white" />
      <circle cx="175" cy="153" r="3" fill="white" />
      <circle cx="165" cy="153" r="1.5" fill="#111" />
      <circle cx="175" cy="153" r="1.5" fill="#111" />
      <ellipse cx="170" cy="158" rx="5" ry="3" fill="#E0E0E0" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="55" cy="90" r="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="268" cy="85" r="36" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <circle cx="160" cy="155" r="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="110" cy="160" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="210" cy="28" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 8: KÁVÉZÓ ─────────────────────────────────────────────────────────
function CafeLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Background wall */}
      <rect x="0" y="0" width="320" height="145" fill="#FFF8F0" />
      {/* Floor */}
      <rect x="0" y="145" width="320" height="55" fill="#BCAAA4" />
      {/* Window */}
      <rect x="120" y="10" width="80" height="70" fill="#87CEEB" rx="3" />
      <rect x="120" y="10" width="80" height="70" fill="none" stroke="#795548" strokeWidth="4" rx="3" />
      <rect x="158" y="10" width="4" height="70" fill="#795548" />
      <rect x="120" y="44" width="80" height="4" fill="#795548" />
      {/* Outside scene in window */}
      <rect x="122" y="12" width="34" height="30" fill="#87CEEB" />
      <circle cx="135" cy="22" r="8" fill="#2E7D32" />
      <rect x="162" y="12" width="36" height="30" fill="#87CEEB" />
      <ellipse cx="178" cy="20" rx="12" ry="8" fill="white" opacity="0.8" />
      {/* D5 LEFT: Sign above window – red */}
      <rect x="108" y="5" width="104" height="18" fill="#E53935" rx="3" />
      <rect x="28" y="5" width="60" height="18" fill="#795548" rx="3" />
      {/* Menu */}
      <rect x="30" y="8" width="56" height="13" fill="#FFF8F0" rx="2" />
      {/* Chalkboard menu */}
      <rect x="240" y="15" width="65" height="90" fill="#263238" rx="3" />
      <rect x="244" y="19" width="57" height="82" fill="#2E3B40" rx="2" />
      {/* Menu text lines */}
      <rect x="248" y="25" width="35" height="3" fill="white" opacity="0.5" rx="1" />
      <rect x="248" y="33" width="28" height="2" fill="white" opacity="0.4" rx="1" />
      <rect x="248" y="40" width="32" height="2" fill="white" opacity="0.4" rx="1" />
      <rect x="248" y="48" width="25" height="2" fill="white" opacity="0.3" rx="1" />
      {/* D4 LEFT: Table right – round, brown */}
      <ellipse cx="220" cy="148" rx="35" ry="12" fill="#5D4037" />
      <rect x="205" y="145" width="30" height="4" fill="#4E342E" />
      <rect x="217" y="148" width="6" height="24" fill="#5D4037" />
      {/* Cup on right table */}
      <rect x="212" y="127" width="16" height="20" fill="#FAFAFA" rx="2" />
      <ellipse cx="220" cy="127" rx="8" ry="3" fill="#E0E0E0" />
      <path d="M228,134 Q236,134 236,140 Q236,146 228,146" fill="none" stroke="#E0E0E0" strokeWidth="2" />
      {/* Saucer */}
      <ellipse cx="220" cy="148" rx="12" ry="4" fill="#E0E0E0" />
      {/* Steam */}
      <path d="M217,125 Q219,118 217,111" stroke="#CCC" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
      <path d="M223,125 Q225,118 223,111" stroke="#CCC" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
      {/* D1 LEFT: Left table – round */}
      <ellipse cx="60" cy="148" rx="35" ry="12" fill="#5D4037" />
      <rect x="45" y="145" width="30" height="4" fill="#4E342E" />
      <rect x="57" y="148" width="6" height="24" fill="#5D4037" />
      {/* D1 LEFT: Cake on left table – pink */}
      <rect x="44" y="120" width="32" height="28" fill="#F48FB1" rx="3" />
      <rect x="44" y="116" width="32" height="8" fill="#F06292" rx="2" />
      <rect x="46" y="122" width="8" height="18" fill="#F8BBD0" opacity="0.6" />
      <rect x="58" y="122" width="8" height="18" fill="#F8BBD0" opacity="0.6" />
      <rect x="70" y="122" width="4" height="18" fill="#F8BBD0" opacity="0.6" />
      <rect x="55" y="108" width="3" height="12" fill="#FFC107" />
      <circle cx="56" cy="106" r="3" fill="#FF6B1A" />
      {/* D3 LEFT: Middle table – brown */}
      <ellipse cx="160" cy="148" rx="30" ry="10" fill="#5D4037" />
      <rect x="147" y="145" width="26" height="4" fill="#4E342E" />
      <rect x="157" y="148" width="6" height="22" fill="#5D4037" />
      {/* Macaron on middle table */}
      <ellipse cx="160" cy="130" rx="12" ry="6" fill="#CE93D8" />
      <ellipse cx="160" cy="138" rx="12" ry="6" fill="#CE93D8" />
      <rect x="148" y="132" width="24" height="6" fill="#F3E5F5" />
      {/* D2 LEFT: Window left view – tree green */}
      {/* already drawn above */}
      {/* Found overlays */}
      {found.includes(0) && <circle cx="60" cy="145" r="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="120" y="8" width="80" height="74" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="238" y="13" width="70" height="95" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="220" cy="150" r="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="106" y="3" width="108" height="24" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function CafeRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Background wall */}
      <rect x="0" y="0" width="320" height="145" fill="#FFF8F0" />
      {/* Floor */}
      <rect x="0" y="145" width="320" height="55" fill="#BCAAA4" />
      {/* Window */}
      <rect x="120" y="10" width="80" height="70" fill="#87CEEB" rx="3" />
      <rect x="120" y="10" width="80" height="70" fill="none" stroke="#795548" strokeWidth="4" rx="3" />
      <rect x="158" y="10" width="4" height="70" fill="#795548" />
      <rect x="120" y="44" width="80" height="4" fill="#795548" />
      {/* D2 RIGHT: Outside scene in window – different tree (yellow) */}
      <rect x="122" y="12" width="34" height="30" fill="#87CEEB" />
      <circle cx="135" cy="22" r="8" fill="#F9A825" />
      <rect x="162" y="12" width="36" height="30" fill="#87CEEB" />
      <ellipse cx="178" cy="20" rx="12" ry="8" fill="white" opacity="0.8" />
      {/* D5 RIGHT: Sign above window – blue */}
      <rect x="108" y="5" width="104" height="18" fill="#1565C0" rx="3" />
      <rect x="28" y="5" width="60" height="18" fill="#795548" rx="3" />
      <rect x="30" y="8" width="56" height="13" fill="#FFF8F0" rx="2" />
      {/* D3 RIGHT: Chalkboard menu – bigger/taller */}
      <rect x="240" y="15" width="65" height="90" fill="#263238" rx="3" />
      <rect x="244" y="19" width="57" height="82" fill="#2E3B40" rx="2" />
      <rect x="248" y="25" width="35" height="3" fill="white" opacity="0.5" rx="1" />
      <rect x="248" y="33" width="28" height="2" fill="white" opacity="0.4" rx="1" />
      {/* Only 2 lines instead of 4 */}
      {/* D4 RIGHT: Table right – square top instead of round */}
      <rect x="185" y="136" width="70" height="14" fill="#5D4037" rx="2" />
      <rect x="205" y="148" width="6" height="24" fill="#5D4037" />
      <rect x="217" y="148" width="6" height="24" fill="#5D4037" />
      {/* Cup on right table */}
      <rect x="212" y="119" width="16" height="20" fill="#FAFAFA" rx="2" />
      <ellipse cx="220" cy="119" rx="8" ry="3" fill="#E0E0E0" />
      <path d="M228,126 Q236,126 236,132 Q236,138 228,138" fill="none" stroke="#E0E0E0" strokeWidth="2" />
      <ellipse cx="220" cy="140" rx="12" ry="4" fill="#E0E0E0" />
      <path d="M217,117 Q219,110 217,103" stroke="#CCC" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
      <path d="M223,117 Q225,110 223,103" stroke="#CCC" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
      {/* D1 LEFT table – same */}
      <ellipse cx="60" cy="148" rx="35" ry="12" fill="#5D4037" />
      <rect x="45" y="145" width="30" height="4" fill="#4E342E" />
      <rect x="57" y="148" width="6" height="24" fill="#5D4037" />
      {/* D1 RIGHT: Cake – yellow/lemon instead of pink */}
      <rect x="44" y="120" width="32" height="28" fill="#FFF176" rx="3" />
      <rect x="44" y="116" width="32" height="8" fill="#F9A825" rx="2" />
      <rect x="46" y="122" width="8" height="18" fill="#FFFDE7" opacity="0.7" />
      <rect x="58" y="122" width="8" height="18" fill="#FFFDE7" opacity="0.7" />
      <rect x="70" y="122" width="4" height="18" fill="#FFFDE7" opacity="0.7" />
      <rect x="55" y="108" width="3" height="12" fill="#FFC107" />
      <circle cx="56" cy="106" r="3" fill="#FF6B1A" />
      {/* Middle table */}
      <ellipse cx="160" cy="148" rx="30" ry="10" fill="#5D4037" />
      <rect x="147" y="145" width="26" height="4" fill="#4E342E" />
      <rect x="157" y="148" width="6" height="22" fill="#5D4037" />
      <ellipse cx="160" cy="130" rx="12" ry="6" fill="#CE93D8" />
      <ellipse cx="160" cy="138" rx="12" ry="6" fill="#CE93D8" />
      <rect x="148" y="132" width="24" height="6" fill="#F3E5F5" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="60" cy="145" r="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="120" y="8" width="80" height="74" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="238" y="13" width="70" height="95" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="220" cy="150" r="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="106" y="3" width="108" height="24" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 9: STRAND ─────────────────────────────────────────────────────────
function BeachLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="115" fill="#87CEEB" />
      {/* D1 LEFT: Sun – yellow */}
      <circle cx="270" cy="30" r="24" fill="#FFD700" />
      {[0,45,90,135,180,225,270,315].map((a,i)=>{const r=(a*Math.PI)/180;return <line key={i} x1={270+28*Math.cos(r)} y1={30+28*Math.sin(r)} x2={270+38*Math.cos(r)} y2={30+38*Math.sin(r)} stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>;})}
      {/* Sea */}
      <rect x="0" y="90" width="320" height="30" fill="#0D6EFD" opacity="0.7" />
      {/* Waves */}
      <path d="M0,100 Q40,90 80,100 Q120,110 160,100 Q200,90 240,100 Q280,110 320,100" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Sand */}
      <rect x="0" y="115" width="320" height="85" fill="#F4D03F" />
      {/* D2 LEFT: Beach umbrella – red and white */}
      <rect x="67" y="90" width="5" height="75" fill="#795548" rx="2" />
      <path d="M30,92 Q69,65 108,92Z" fill="#E53935" />
      <path d="M30,92 Q69,80 108,92" fill="none" stroke="white" strokeWidth="2" />
      <ellipse cx="69" cy="92" rx="40" ry="5" fill="#C62828" opacity="0.4" />
      {/* D5 LEFT: Towel under umbrella – blue stripes */}
      <rect x="30" y="155" width="80" height="28" fill="#1565C0" rx="3" />
      <rect x="30" y="162" width="80" height="4" fill="white" opacity="0.5" />
      <rect x="30" y="170" width="80" height="4" fill="white" opacity="0.5" />
      {/* D3 LEFT: Sandcastle – 3 towers */}
      <rect x="135" y="140" width="50" height="35" fill="#E8C97A" rx="2" />
      <rect x="133" y="128" width="16" height="18" fill="#E8C97A" rx="2" />
      <polygon points="133,128 141,115 149,128" fill="#D4A843" />
      <rect x="167" y="130" width="16" height="16" fill="#E8C97A" rx="2" />
      <polygon points="167,130 175,117 183,130" fill="#D4A843" />
      <rect x="148" y="120" width="14" height="22" fill="#EDD28C" rx="2" />
      <polygon points="148,120 155,106 162,120" fill="#D4A843" />
      {/* Window in castle */}
      <rect x="140" y="143" width="8" height="10" fill="#87CEEB" rx="1" />
      <rect x="157" y="143" width="8" height="10" fill="#87CEEB" rx="1" />
      {/* D4 LEFT: Boat on sea – white */}
      <path d="M185,108 L235,108 L225,118 L195,118 Z" fill="white" />
      <rect x="206" y="88" width="3" height="22" fill="#795548" />
      <polygon points="209,90 209,106 228,98" fill="#E53935" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="270" cy="30" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="70" cy="100" r="35" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <ellipse cx="215" cy="115" rx="38" ry="18" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="128" y="102" width="64" height="78" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="25" y="150" width="92" height="38" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function BeachRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="115" fill="#87CEEB" />
      {/* D1 RIGHT: Sun – no rays */}
      <circle cx="270" cy="30" r="24" fill="#FFD700" />
      {/* Sea */}
      <rect x="0" y="90" width="320" height="30" fill="#0D6EFD" opacity="0.7" />
      <path d="M0,100 Q40,90 80,100 Q120,110 160,100 Q200,90 240,100 Q280,110 320,100" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Sand */}
      <rect x="0" y="115" width="320" height="85" fill="#F4D03F" />
      {/* D2 RIGHT: Beach umbrella – yellow and blue */}
      <rect x="67" y="90" width="5" height="75" fill="#795548" rx="2" />
      <path d="M30,92 Q69,65 108,92Z" fill="#FFD700" />
      <path d="M30,92 Q69,80 108,92" fill="none" stroke="#1565C0" strokeWidth="2" />
      <ellipse cx="69" cy="92" rx="40" ry="5" fill="#F9A825" opacity="0.4" />
      {/* D5 RIGHT: Towel – green stripes */}
      <rect x="30" y="155" width="80" height="28" fill="#2E7D32" rx="3" />
      <rect x="30" y="162" width="80" height="4" fill="white" opacity="0.5" />
      <rect x="30" y="170" width="80" height="4" fill="white" opacity="0.5" />
      {/* D3 RIGHT: Sandcastle – only 2 towers (left tower missing) */}
      <rect x="135" y="140" width="50" height="35" fill="#E8C97A" rx="2" />
      <rect x="167" y="130" width="16" height="16" fill="#E8C97A" rx="2" />
      <polygon points="167,130 175,117 183,130" fill="#D4A843" />
      <rect x="148" y="120" width="14" height="22" fill="#EDD28C" rx="2" />
      <polygon points="148,120 155,106 162,120" fill="#D4A843" />
      <rect x="140" y="143" width="8" height="10" fill="#87CEEB" rx="1" />
      <rect x="157" y="143" width="8" height="10" fill="#87CEEB" rx="1" />
      {/* D4 RIGHT: Boat – red */}
      <path d="M185,108 L235,108 L225,118 L195,118 Z" fill="#E53935" />
      <rect x="206" y="88" width="3" height="22" fill="#795548" />
      <polygon points="209,90 209,106 228,98" fill="white" />
      {/* Found overlays */}
      {found.includes(0) && <circle cx="270" cy="30" r="28" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <circle cx="70" cy="100" r="35" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <ellipse cx="215" cy="115" rx="38" ry="18" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="128" y="102" width="64" height="78" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="25" y="150" width="92" height="38" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 10: KÖNYVTÁR ──────────────────────────────────────────────────────
function LibraryLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Wall */}
      <rect x="0" y="0" width="320" height="155" fill="#D7CCC8" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#8D6E63" />
      {/* Floor tiles */}
      {[0,1,2,3,4,5].map(i=><rect key={i} x={i*55} y="155" width="52" height="45" fill="none" stroke="#795548" strokeWidth="1" opacity="0.3"/>)}
      {/* D1 LEFT: Left bookshelf – full, dark wood */}
      <rect x="5" y="20" width="85" height="140" fill="#5D4037" rx="3" />
      {[0,1,2,3].map(row=>[0,1,2,3,4].map(col=>{
        const colors=["#E53935","#1565C0","#2E7D32","#F9A825","#7B1FA2"];
        return <rect key={`${row}-${col}`} x={8+col*16} y={24+row*30} width="13" height="25" fill={colors[col]} rx="1"/>;
      }))}
      {[0,1,2].map(i=><rect key={i} x="5" y={54+i*30} width="85" height="3" fill="#4E342E"/>)}
      {/* D2 LEFT: Right bookshelf – full, same color */}
      <rect x="230" y="20" width="85" height="140" fill="#5D4037" rx="3" />
      {[0,1,2,3].map(row=>[0,1,2,3,4].map(col=>{
        const colors=["#FF7043","#26C6DA","#66BB6A","#FFA726","#AB47BC"];
        return <rect key={`${row}-${col}`} x={233+col*16} y={24+row*30} width="13" height="25" fill={colors[col]} rx="1"/>;
      }))}
      {[0,1,2].map(i=><rect key={i} x="230" y={54+i*30} width="85" height="3" fill="#4E342E"/>)}
      {/* Reading table */}
      <rect x="105" y="115" width="110" height="10" fill="#795548" rx="2" />
      <rect x="110" y="124" width="8" height="35" fill="#6D4C41" />
      <rect x="202" y="124" width="8" height="35" fill="#6D4C41" />
      {/* Book on table */}
      <rect x="128" y="102" width="64" height="14" fill="#E53935" rx="2" />
      <rect x="130" y="104" width="60" height="10" fill="#EF5350" rx="1" />
      <rect x="155" y="98" width="3" height="18" fill="#B71C1C" />
      {/* D4 LEFT: Lamp on table – green shade */}
      <rect x="243" y="18" width="8" height="14" fill="#795548" rx="2" />
      <ellipse cx="247" cy="18" rx="16" ry="6" fill="#4E342E" />
      <polygon points="232,18 262,18 256,5 238,5" fill="#2E7D32" />
      {/* D3 LEFT: Reading table lamp – yellow */}
      <rect x="157" y="115" width="6" height="44" fill="#795548" />
      <rect x="145" y="157" width="30" height="5" fill="#5D4037" rx="2" />
      <polygon points="140,115 180,115 174,98 146,98" fill="#FFD700" />
      <ellipse cx="160" cy="115" rx="20" ry="5" fill="#F9A825" />
      {/* D5 LEFT: Globe – blue/green */}
      <circle cx="90" cy="28" r="20" fill="#1565C0" />
      <ellipse cx="90" cy="28" rx="20" ry="8" fill="none" stroke="#0D47A1" strokeWidth="1.5" />
      <ellipse cx="90" cy="28" rx="10" ry="20" fill="none" stroke="#0D47A1" strokeWidth="1.5" />
      <path d="M75,22 Q90,18 105,22" fill="none" stroke="#0D47A1" strokeWidth="1" />
      <path d="M72,30 Q90,26 108,30" fill="none" stroke="#0D47A1" strokeWidth="1" />
      <ellipse cx="88" cy="18" rx="6" ry="4" fill="#2E7D32" opacity="0.7" />
      <rect x="88" y="48" width="4" height="10" fill="#795548" />
      <ellipse cx="90" cy="58" rx="12" ry="4" fill="#5D4037" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="3" y="18" width="90" height="144" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="228" y="18" width="90" height="144" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="138" y="94" width="45" height="26" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="248" cy="28" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="90" cy="30" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function LibraryRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Wall */}
      <rect x="0" y="0" width="320" height="155" fill="#D7CCC8" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#8D6E63" />
      {[0,1,2,3,4,5].map(i=><rect key={i} x={i*55} y="155" width="52" height="45" fill="none" stroke="#795548" strokeWidth="1" opacity="0.3"/>)}
      {/* D1 RIGHT: Left bookshelf – light color */}
      <rect x="5" y="20" width="85" height="140" fill="#BCAAA4" rx="3" />
      {[0,1,2,3].map(row=>[0,1,2,3,4].map(col=>{
        const colors=["#E53935","#1565C0","#2E7D32","#F9A825","#7B1FA2"];
        return <rect key={`${row}-${col}`} x={8+col*16} y={24+row*30} width="13" height="25" fill={colors[col]} rx="1"/>;
      }))}
      {[0,1,2].map(i=><rect key={i} x="5" y={54+i*30} width="85" height="3" fill="#A1887F"/>)}
      {/* D2 RIGHT: Right bookshelf – top shelf empty */}
      <rect x="230" y="20" width="85" height="140" fill="#5D4037" rx="3" />
      {[1,2,3].map(row=>[0,1,2,3,4].map(col=>{
        const colors=["#FF7043","#26C6DA","#66BB6A","#FFA726","#AB47BC"];
        return <rect key={`${row}-${col}`} x={233+col*16} y={24+row*30} width="13" height="25" fill={colors[col]} rx="1"/>;
      }))}
      {[0,1,2].map(i=><rect key={i} x="230" y={54+i*30} width="85" height="3" fill="#4E342E"/>)}
      {/* Reading table */}
      <rect x="105" y="115" width="110" height="10" fill="#795548" rx="2" />
      <rect x="110" y="124" width="8" height="35" fill="#6D4C41" />
      <rect x="202" y="124" width="8" height="35" fill="#6D4C41" />
      {/* D3 RIGHT: Book – blue instead of red */}
      <rect x="128" y="102" width="64" height="14" fill="#1565C0" rx="2" />
      <rect x="130" y="104" width="60" height="10" fill="#1976D2" rx="1" />
      <rect x="155" y="98" width="3" height="18" fill="#0D47A1" />
      {/* D4 RIGHT: Lamp – red shade */}
      <rect x="243" y="18" width="8" height="14" fill="#795548" rx="2" />
      <ellipse cx="247" cy="18" rx="16" ry="6" fill="#4E342E" />
      <polygon points="232,18 262,18 256,5 238,5" fill="#C62828" />
      {/* Table lamp */}
      <rect x="157" y="115" width="6" height="44" fill="#795548" />
      <rect x="145" y="157" width="30" height="5" fill="#5D4037" rx="2" />
      <polygon points="140,115 180,115 174,98 146,98" fill="#FFD700" />
      <ellipse cx="160" cy="115" rx="20" ry="5" fill="#F9A825" />
      {/* D5 RIGHT: Globe – orange */}
      <circle cx="90" cy="28" r="20" fill="#E65100" />
      <ellipse cx="90" cy="28" rx="20" ry="8" fill="none" stroke="#BF360C" strokeWidth="1.5" />
      <ellipse cx="90" cy="28" rx="10" ry="20" fill="none" stroke="#BF360C" strokeWidth="1.5" />
      <path d="M75,22 Q90,18 105,22" fill="none" stroke="#BF360C" strokeWidth="1" />
      <path d="M72,30 Q90,26 108,30" fill="none" stroke="#BF360C" strokeWidth="1" />
      <ellipse cx="88" cy="18" rx="6" ry="4" fill="#33691E" opacity="0.7" />
      <rect x="88" y="48" width="4" height="10" fill="#795548" />
      <ellipse cx="90" cy="58" rx="12" ry="4" fill="#5D4037" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="3" y="18" width="90" height="144" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="228" y="18" width="90" height="144" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="138" y="94" width="45" height="26" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="248" cy="28" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="90" cy="30" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 11: JÁTSZÓTÉR ─────────────────────────────────────────────────────
function PlaygroundLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="120" fill="#87CEEB" />
      {/* D5 LEFT: Cloud – white */}
      <ellipse cx="270" cy="28" rx="30" ry="14" fill="white" />
      <ellipse cx="290" cy="20" rx="20" ry="13" fill="white" />
      {/* Ground */}
      <rect x="0" y="120" width="320" height="80" fill="#8BC34A" />
      <rect x="0" y="150" width="320" height="50" fill="#7CB342" />
      {/* Sandbox */}
      <rect x="90" y="148" width="80" height="30" fill="#D4B483" rx="3" />
      <rect x="93" y="151" width="74" height="24" fill="#E8C97A" rx="2" />
      {/* D4 LEFT: Sandbox bucket – red */}
      <rect x="113" y="138" width="14" height="16" fill="#E53935" rx="2" />
      <rect x="110" y="136" width="20" height="5" fill="#C62828" rx="1" />
      {/* Swing frame */}
      <rect x="15" y="60" width="6" height="100" fill="#795548" rx="2" />
      <rect x="70" y="60" width="6" height="100" fill="#795548" rx="2" />
      <rect x="15" y="60" width="61" height="8" fill="#795548" rx="3" />
      {/* D1 LEFT: Swing seat – blue */}
      <line x1="30" y1="68" x2="30" y2="115" stroke="#555" strokeWidth="2" />
      <line x1="60" y1="68" x2="60" y2="115" stroke="#555" strokeWidth="2" />
      <rect x="25" y="112" width="40" height="8" fill="#1565C0" rx="2" />
      {/* Kid on swing */}
      <circle cx="45" cy="103" r="8" fill="#FFCCBC" />
      <rect x="39" y="111" width="12" height="15" fill="#E91E63" />
      <line x1="39" y1="116" x2="30" y2="125" stroke="#FFCCBC" strokeWidth="3" strokeLinecap="round" />
      <line x1="51" y1="116" x2="60" y2="125" stroke="#FFCCBC" strokeWidth="3" strokeLinecap="round" />
      {/* Slide */}
      <rect x="220" y="60" width="12" height="90" fill="#FF9800" rx="2" />
      <rect x="270" y="90" width="12" height="60" fill="#FF9800" rx="2" />
      <rect x="220" y="60" width="62" height="8" fill="#F57C00" rx="3" />
      {/* D2 LEFT: Slide ramp – yellow */}
      <path d="M228,68 L276,110 L282,107 L235,65Z" fill="#FFD700" />
      {/* Seesaw */}
      <rect x="150" y="130" width="6" height="24" fill="#795548" />
      <ellipse cx="153" cy="130" rx="10" ry="6" fill="#5D4037" />
      {/* D3 LEFT: Seesaw plank – red */}
      <rect x="105" y="125" width="96" height="8" fill="#E53935" rx="3" />
      <circle cx="105" cy="129" r="6" fill="#FFCCBC" />
      <circle cx="201" cy="129" r="6" fill="#FFCCBC" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="10" y="55" width="75" height="70" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="218" y="58" width="70" height="56" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="98" y="120" width="110" height="18" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="88" y="130" width="84" height="54" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="270" cy="28" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function PlaygroundRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="120" fill="#87CEEB" />
      {/* D5 RIGHT: Cloud – gone (sun instead) */}
      <circle cx="270" cy="28" r="22" fill="#FFD700" />
      {/* Ground */}
      <rect x="0" y="120" width="320" height="80" fill="#8BC34A" />
      <rect x="0" y="150" width="320" height="50" fill="#7CB342" />
      {/* Sandbox */}
      <rect x="90" y="148" width="80" height="30" fill="#D4B483" rx="3" />
      <rect x="93" y="151" width="74" height="24" fill="#E8C97A" rx="2" />
      {/* D4 RIGHT: Sandbox bucket – green */}
      <rect x="113" y="138" width="14" height="16" fill="#2E7D32" rx="2" />
      <rect x="110" y="136" width="20" height="5" fill="#1B5E20" rx="1" />
      {/* Swing frame */}
      <rect x="15" y="60" width="6" height="100" fill="#795548" rx="2" />
      <rect x="70" y="60" width="6" height="100" fill="#795548" rx="2" />
      <rect x="15" y="60" width="61" height="8" fill="#795548" rx="3" />
      {/* D1 RIGHT: Swing seat – red */}
      <line x1="30" y1="68" x2="30" y2="115" stroke="#555" strokeWidth="2" />
      <line x1="60" y1="68" x2="60" y2="115" stroke="#555" strokeWidth="2" />
      <rect x="25" y="112" width="40" height="8" fill="#E53935" rx="2" />
      {/* Kid on swing */}
      <circle cx="45" cy="103" r="8" fill="#FFCCBC" />
      <rect x="39" y="111" width="12" height="15" fill="#E91E63" />
      <line x1="39" y1="116" x2="30" y2="125" stroke="#FFCCBC" strokeWidth="3" strokeLinecap="round" />
      <line x1="51" y1="116" x2="60" y2="125" stroke="#FFCCBC" strokeWidth="3" strokeLinecap="round" />
      {/* Slide */}
      <rect x="220" y="60" width="12" height="90" fill="#FF9800" rx="2" />
      <rect x="270" y="90" width="12" height="60" fill="#FF9800" rx="2" />
      <rect x="220" y="60" width="62" height="8" fill="#F57C00" rx="3" />
      {/* D2 RIGHT: Slide ramp – purple */}
      <path d="M228,68 L276,110 L282,107 L235,65Z" fill="#9C27B0" />
      {/* Seesaw */}
      <rect x="150" y="130" width="6" height="24" fill="#795548" />
      <ellipse cx="153" cy="130" rx="10" ry="6" fill="#5D4037" />
      {/* D3 RIGHT: Seesaw plank – blue */}
      <rect x="105" y="125" width="96" height="8" fill="#1565C0" rx="3" />
      <circle cx="105" cy="129" r="6" fill="#FFCCBC" />
      <circle cx="201" cy="129" r="6" fill="#FFCCBC" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="10" y="55" width="75" height="70" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="218" y="58" width="70" height="56" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="98" y="120" width="110" height="18" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="88" y="130" width="84" height="54" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="270" cy="28" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 12: PIACTÉR ───────────────────────────────────────────────────────
function MarketLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="90" fill="#87CEEB" />
      {/* D5 LEFT: Flag/banner – red */}
      <line x1="10" y1="0" x2="10" y2="90" stroke="#555" strokeWidth="3" />
      <line x1="100" y1="0" x2="100" y2="90" stroke="#555" strokeWidth="3" />
      <line x1="200" y1="0" x2="200" y2="90" stroke="#555" strokeWidth="3" />
      <line x1="310" y1="0" x2="310" y2="90" stroke="#555" strokeWidth="3" />
      <polygon points="10,0 55,12 10,24" fill="#E53935" />
      <polygon points="100,0 55,12 100,24" fill="#E53935" />
      <polygon points="100,0 150,12 100,24" fill="#FFD700" />
      <polygon points="200,0 150,12 200,24" fill="#FFD700" />
      <polygon points="200,0 255,12 200,24" fill="#E53935" />
      <polygon points="310,0 255,12 310,24" fill="#E53935" />
      {/* Ground */}
      <rect x="0" y="90" width="320" height="110" fill="#BCAAA4" />
      {/* D1 LEFT: Left stall – red umbrella, fruit */}
      <rect x="10" y="70" width="90" height="8" fill="#E53935" rx="2" />
      <rect x="15" y="78" width="80" height="50" fill="#EF5350" opacity="0.2" rx="2" />
      {/* Table left */}
      <rect x="10" y="118" width="90" height="8" fill="#795548" rx="2" />
      <rect x="15" y="125" width="6" height="30" fill="#5D4037" />
      <rect x="88" y="125" width="6" height="30" fill="#5D4037" />
      {/* Apples */}
      {[0,1,2,3,4].map(i=><circle key={i} cx={18+i*16} cy={113} r="7" fill="#E53935"/>)}
      {[0,1,2].map(i=><circle key={i} cx={18+i*16} cy={100} r="7" fill="#E53935"/>)}
      {/* D2 LEFT: Middle stall – blue umbrella */}
      <rect x="115" y="68" width="90" height="8" fill="#1565C0" rx="2" />
      <rect x="120" y="76" width="80" height="50" fill="#1976D2" opacity="0.15" rx="2" />
      {/* Table middle */}
      <rect x="115" y="118" width="90" height="8" fill="#795548" rx="2" />
      <rect x="120" y="125" width="6" height="30" fill="#5D4037" />
      <rect x="193" y="125" width="6" height="30" fill="#5D4037" />
      {/* Oranges */}
      {[0,1,2,3,4].map(i=><circle key={i} cx={123+i*16} cy={113} r="7" fill="#FF6B1A"/>)}
      {[0,1,2].map(i=><circle key={i} cx={123+i*16} cy={100} r="7" fill="#FF6B1A"/>)}
      {/* D3 LEFT: Right stall – green umbrella */}
      <rect x="220" y="70" width="90" height="8" fill="#2E7D32" rx="2" />
      <rect x="225" y="78" width="80" height="46" fill="#388E3C" opacity="0.15" rx="2" />
      {/* Table right */}
      <rect x="220" y="118" width="90" height="8" fill="#795548" rx="2" />
      <rect x="225" y="125" width="6" height="30" fill="#5D4037" />
      <rect x="298" y="125" width="6" height="30" fill="#5D4037" />
      {/* Bananas */}
      {[0,1,2,3,4].map(i=><ellipse key={i} cx={228+i*16} cy={113} rx="7" ry="5" fill="#FFD700"/>)}
      {[0,1,2].map(i=><ellipse key={i} cx={228+i*16} cy={100} rx="7" ry="5" fill="#FFD700"/>)}
      {/* Vendor – left */}
      <circle cx="55" cy="80" r="8" fill="#FFCCBC" />
      <rect x="49" y="88" width="12" height="20" fill="#1565C0" />
      {/* D4 LEFT: Crate – brown wooden */}
      <rect x="108" y="150" width="35" height="25" fill="#795548" rx="2" />
      <line x1="108" y1="160" x2="143" y2="160" stroke="#5D4037" strokeWidth="1.5" />
      <line x1="125" y1="150" x2="125" y2="175" stroke="#5D4037" strokeWidth="1.5" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="8" y="65" width="96" height="70" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="113" y="63" width="96" height="70" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="218" y="65" width="96" height="68" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="103" y="145" width="45" height="32" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="0" y="0" width="320" height="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function MarketRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="90" fill="#87CEEB" />
      {/* D5 RIGHT: Flag/banner – purple instead of red */}
      <line x1="10" y1="0" x2="10" y2="90" stroke="#555" strokeWidth="3" />
      <line x1="100" y1="0" x2="100" y2="90" stroke="#555" strokeWidth="3" />
      <line x1="200" y1="0" x2="200" y2="90" stroke="#555" strokeWidth="3" />
      <line x1="310" y1="0" x2="310" y2="90" stroke="#555" strokeWidth="3" />
      <polygon points="10,0 55,12 10,24" fill="#7B1FA2" />
      <polygon points="100,0 55,12 100,24" fill="#7B1FA2" />
      <polygon points="100,0 150,12 100,24" fill="#FFD700" />
      <polygon points="200,0 150,12 200,24" fill="#FFD700" />
      <polygon points="200,0 255,12 200,24" fill="#7B1FA2" />
      <polygon points="310,0 255,12 310,24" fill="#7B1FA2" />
      {/* Ground */}
      <rect x="0" y="90" width="320" height="110" fill="#BCAAA4" />
      {/* D1 RIGHT: Left stall – yellow umbrella instead of red */}
      <rect x="10" y="70" width="90" height="8" fill="#FFD700" rx="2" />
      <rect x="15" y="78" width="80" height="50" fill="#F9A825" opacity="0.2" rx="2" />
      <rect x="10" y="118" width="90" height="8" fill="#795548" rx="2" />
      <rect x="15" y="125" width="6" height="30" fill="#5D4037" />
      <rect x="88" y="125" width="6" height="30" fill="#5D4037" />
      {[0,1,2,3,4].map(i=><circle key={i} cx={18+i*16} cy={113} r="7" fill="#E53935"/>)}
      {[0,1,2].map(i=><circle key={i} cx={18+i*16} cy={100} r="7" fill="#E53935"/>)}
      {/* D2 RIGHT: Middle stall – orange umbrella instead of blue */}
      <rect x="115" y="68" width="90" height="8" fill="#FF6B1A" rx="2" />
      <rect x="120" y="76" width="80" height="50" fill="#FF6B1A" opacity="0.1" rx="2" />
      <rect x="115" y="118" width="90" height="8" fill="#795548" rx="2" />
      <rect x="120" y="125" width="6" height="30" fill="#5D4037" />
      <rect x="193" y="125" width="6" height="30" fill="#5D4037" />
      {[0,1,2,3,4].map(i=><circle key={i} cx={123+i*16} cy={113} r="7" fill="#FF6B1A"/>)}
      {[0,1,2].map(i=><circle key={i} cx={123+i*16} cy={100} r="7" fill="#FF6B1A"/>)}
      {/* D3 RIGHT: Right stall – red umbrella instead of green */}
      <rect x="220" y="70" width="90" height="8" fill="#E53935" rx="2" />
      <rect x="225" y="78" width="80" height="46" fill="#EF5350" opacity="0.1" rx="2" />
      <rect x="220" y="118" width="90" height="8" fill="#795548" rx="2" />
      <rect x="225" y="125" width="6" height="30" fill="#5D4037" />
      <rect x="298" y="125" width="6" height="30" fill="#5D4037" />
      {[0,1,2,3,4].map(i=><ellipse key={i} cx={228+i*16} cy={113} rx="7" ry="5" fill="#FFD700"/>)}
      {[0,1,2].map(i=><ellipse key={i} cx={228+i*16} cy={100} rx="7" ry="5" fill="#FFD700"/>)}
      {/* Vendor */}
      <circle cx="55" cy="80" r="8" fill="#FFCCBC" />
      <rect x="49" y="88" width="12" height="20" fill="#1565C0" />
      {/* D4 RIGHT: Crate – blue */}
      <rect x="108" y="150" width="35" height="25" fill="#1565C0" rx="2" />
      <line x1="108" y1="160" x2="143" y2="160" stroke="#0D47A1" strokeWidth="1.5" />
      <line x1="125" y1="150" x2="125" y2="175" stroke="#0D47A1" strokeWidth="1.5" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="8" y="65" width="96" height="70" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="113" y="63" width="96" height="70" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="218" y="65" width="96" height="68" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="103" y="145" width="45" height="32" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="0" y="0" width="320" height="30" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 13: VASÚT ─────────────────────────────────────────────────────────
function RailwayLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Sky */}
      <rect x="0" y="0" width="320" height="130" fill="#87CEEB" />
      {/* Mountain */}
      <polygon points="230,130 280,50 320,130" fill="#9E9E9E" />
      <polygon points="220,130 270,60 310,130" fill="#757575" />
      {/* Snow cap */}
      <polygon points="270,60 263,88 277,88" fill="white" />
      {/* D4 LEFT: Small cloud – white */}
      <ellipse cx="52" cy="30" rx="26" ry="12" fill="white" />
      <ellipse cx="66" cy="22" rx="18" ry="12" fill="white" />
      {/* Station building */}
      <rect x="230" y="80" width="80" height="55" fill="#B0BEC5" rx="3" />
      <rect x="230" y="72" width="80" height="14" fill="#78909C" rx="2" />
      <polygon points="230,72 270,50 310,72" fill="#607D8B" />
      {/* Station windows */}
      <rect x="240" y="85" width="20" height="20" fill="#87CEEB" rx="2" />
      <rect x="270" y="85" width="20" height="20" fill="#87CEEB" rx="2" />
      <rect x="252" y="105" width="16" height="30" fill="#795548" rx="2" />
      {/* D5 LEFT: Signal light – red/green */}
      <rect x="270" y="140" width="5" height="38" fill="#555" />
      <rect x="264" y="140" width="17" height="28" fill="#333" rx="3" />
      <circle cx="272" cy="146" r="5" fill="#E53935" />
      <circle cx="272" cy="158" r="5" fill="#555" />
      {/* Ground */}
      <rect x="0" y="130" width="320" height="70" fill="#8BC34A" />
      {/* Rail tracks */}
      <rect x="0" y="160" width="320" height="6" fill="#795548" />
      <rect x="0" y="178" width="320" height="6" fill="#795548" />
      {[0,1,2,3,4,5,6,7,8].map(i=><rect key={i} x={i*38} y="155" width="10" height="35" fill="#5D4037"/>)}
      {/* D1 LEFT: Train – red locomotive */}
      <rect x="15" y="108" width="105" height="50" fill="#E53935" rx="5" />
      <rect x="100" y="112" width="25" height="42" fill="#C62828" rx="3" />
      <rect x="105" y="108" width="18" height="14" fill="#87CEEB" rx="2" />
      <circle cx="35" cy="162" r="12" fill="#1A1A1A" />
      <circle cx="35" cy="162" r="7" fill="#333" />
      <circle cx="80" cy="162" r="12" fill="#1A1A1A" />
      <circle cx="80" cy="162" r="7" fill="#333" />
      <circle cx="120" cy="162" r="10" fill="#1A1A1A" />
      <circle cx="120" cy="162" r="6" fill="#333" />
      {/* Smokestack */}
      <rect x="22" y="98" width="10" height="16" fill="#555" rx="2" />
      <ellipse cx="27" cy="97" rx="10" ry="5" fill="#444" />
      {/* Smoke puffs */}
      <circle cx="27" cy="86" r="7" fill="#E0E0E0" opacity="0.7" />
      <circle cx="33" cy="74" r="8" fill="#E0E0E0" opacity="0.6" />
      <circle cx="24" cy="65" r="6" fill="#E0E0E0" opacity="0.5" />
      {/* D2 LEFT: Wagon – blue */}
      <rect x="140" y="120" width="80" height="42" fill="#1565C0" rx="4" />
      <rect x="148" y="124" width="24" height="18" fill="#87CEEB" rx="2" />
      <rect x="180" y="124" width="24" height="18" fill="#87CEEB" rx="2" />
      <circle cx="158" cy="165" r="10" fill="#1A1A1A" />
      <circle cx="158" cy="165" r="6" fill="#333" />
      <circle cx="202" cy="165" r="10" fill="#1A1A1A" />
      <circle cx="202" cy="165" r="6" fill="#333" />
      {/* D3 LEFT: 2nd wagon – green */}
      <rect x="232" y="125" width="70" height="38" fill="#2E7D32" rx="4" />
      <rect x="240" y="129" width="20" height="14" fill="#87CEEB" rx="2" />
      <rect x="270" y="129" width="20" height="14" fill="#87CEEB" rx="2" />
      <circle cx="248" cy="165" r="9" fill="#1A1A1A" />
      <circle cx="248" cy="165" r="5" fill="#333" />
      <circle cx="284" cy="165" r="9" fill="#1A1A1A" />
      <circle cx="284" cy="165" r="5" fill="#333" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="12" y="104" width="115" height="58" rx="5" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="138" y="116" width="88" height="52" rx="5" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="228" y="48" width="88" height="90" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="52" cy="30" r="26" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="148" y="160" width="142" height="42" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function RailwayRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Sky */}
      <rect x="0" y="0" width="320" height="130" fill="#87CEEB" />
      {/* Mountain */}
      <polygon points="230,130 280,50 320,130" fill="#9E9E9E" />
      <polygon points="220,130 270,60 310,130" fill="#757575" />
      <polygon points="270,60 263,88 277,88" fill="white" />
      {/* D4 RIGHT: Cloud missing (blue sky patch) */}
      {/* D5 RIGHT: Signal – both green */}
      <rect x="270" y="140" width="5" height="38" fill="#555" />
      {/* Station building */}
      <rect x="230" y="80" width="80" height="55" fill="#B0BEC5" rx="3" />
      <rect x="230" y="72" width="80" height="14" fill="#78909C" rx="2" />
      <polygon points="230,72 270,50 310,72" fill="#607D8B" />
      <rect x="240" y="85" width="20" height="20" fill="#87CEEB" rx="2" />
      <rect x="270" y="85" width="20" height="20" fill="#87CEEB" rx="2" />
      <rect x="252" y="105" width="16" height="30" fill="#795548" rx="2" />
      {/* D5 RIGHT: Signal light box – both green */}
      <rect x="264" y="140" width="17" height="28" fill="#333" rx="3" />
      <circle cx="272" cy="146" r="5" fill="#555" />
      <circle cx="272" cy="158" r="5" fill="#2E7D32" />
      {/* Ground */}
      <rect x="0" y="130" width="320" height="70" fill="#8BC34A" />
      <rect x="0" y="160" width="320" height="6" fill="#795548" />
      <rect x="0" y="178" width="320" height="6" fill="#795548" />
      {[0,1,2,3,4,5,6,7,8].map(i=><rect key={i} x={i*38} y="155" width="10" height="35" fill="#5D4037"/>)}
      {/* D1 RIGHT: Train – yellow */}
      <rect x="15" y="108" width="105" height="50" fill="#FFD700" rx="5" />
      <rect x="100" y="112" width="25" height="42" fill="#F9A825" rx="3" />
      <rect x="105" y="108" width="18" height="14" fill="#87CEEB" rx="2" />
      <circle cx="35" cy="162" r="12" fill="#1A1A1A" />
      <circle cx="35" cy="162" r="7" fill="#333" />
      <circle cx="80" cy="162" r="12" fill="#1A1A1A" />
      <circle cx="80" cy="162" r="7" fill="#333" />
      <circle cx="120" cy="162" r="10" fill="#1A1A1A" />
      <circle cx="120" cy="162" r="6" fill="#333" />
      <rect x="22" y="98" width="10" height="16" fill="#555" rx="2" />
      <ellipse cx="27" cy="97" rx="10" ry="5" fill="#444" />
      <circle cx="27" cy="86" r="7" fill="#E0E0E0" opacity="0.7" />
      <circle cx="33" cy="74" r="8" fill="#E0E0E0" opacity="0.6" />
      <circle cx="24" cy="65" r="6" fill="#E0E0E0" opacity="0.5" />
      {/* D2 RIGHT: Wagon – orange */}
      <rect x="140" y="120" width="80" height="42" fill="#FF6B1A" rx="4" />
      <rect x="148" y="124" width="24" height="18" fill="#87CEEB" rx="2" />
      <rect x="180" y="124" width="24" height="18" fill="#87CEEB" rx="2" />
      <circle cx="158" cy="165" r="10" fill="#1A1A1A" />
      <circle cx="158" cy="165" r="6" fill="#333" />
      <circle cx="202" cy="165" r="10" fill="#1A1A1A" />
      <circle cx="202" cy="165" r="6" fill="#333" />
      {/* D3 RIGHT: 2nd wagon missing */}
      {/* Found overlays */}
      {found.includes(0) && <rect x="12" y="104" width="115" height="58" rx="5" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="138" y="116" width="88" height="52" rx="5" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="228" y="48" width="88" height="90" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <circle cx="52" cy="30" r="26" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="148" y="160" width="142" height="42" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE 14: KÓRHÁZ ────────────────────────────────────────────────────────
function HospitalLeft({ found }: { found: number[] }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }}>
      {/* Wall */}
      <rect x="0" y="0" width="320" height="155" fill="#E3F2FD" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#BDBDBD" />
      {/* Floor tiles */}
      {[0,1,2,3,4,5].map(i=><rect key={i} x={i*55} y="155" width="54" height="45" fill="none" stroke="#9E9E9E" strokeWidth="1"/>)}
      {/* D3 LEFT: Sign on wall – red cross on white */}
      <rect x="135" y="10" width="50" height="30" fill="white" rx="3" stroke="#E53935" strokeWidth="2" />
      <rect x="157" y="14" width="6" height="22" fill="#E53935" />
      <rect x="148" y="21" width="24" height="6" fill="#E53935" />
      {/* Reception desk */}
      <rect x="105" y="110" width="110" height="48" fill="#90CAF9" rx="3" />
      <rect x="105" y="108" width="110" height="8" fill="#64B5F6" rx="2" />
      {/* Computer on desk */}
      <rect x="143" y="88" width="34" height="24" fill="#263238" rx="2" />
      <rect x="145" y="90" width="30" height="18" fill="#37474F" rx="1" />
      <rect x="157" y="112" width="6" height="6" fill="#263238" />
      <rect x="152" y="117" width="16" height="3" fill="#263238" rx="1" />
      {/* Receptionist */}
      <circle cx="160" cy="80" r="9" fill="#FFCCBC" />
      <rect x="153" y="89" width="14" height="22" fill="#1565C0" />
      {/* D1 LEFT: Left waiting chairs – blue */}
      <rect x="5" y="118" width="82" height="22" fill="#1565C0" rx="3" />
      {[0,1,2].map(i=><rect key={i} x={10+i*26} y="108" width="22" height="14" fill="#1976D2" rx="2"/>)}
      <rect x="8" y="140" width="6" height="18" fill="#0D47A1" />
      <rect x="78" y="140" width="6" height="18" fill="#0D47A1" />
      {/* People sitting */}
      <circle cx="22" cy="104" r="7" fill="#FFCCBC" />
      <rect x="17" y="111" width="10" height="14" fill="#FF9800" />
      <circle cx="48" cy="104" r="7" fill="#FFCCBC" />
      <rect x="43" y="111" width="10" height="14" fill="#E91E63" />
      {/* D2 LEFT: Right waiting chairs – blue (same) */}
      <rect x="233" y="118" width="82" height="22" fill="#1565C0" rx="3" />
      {[0,1,2].map(i=><rect key={i} x={238+i*26} y="108" width="22" height="14" fill="#1976D2" rx="2"/>)}
      <rect x="236" y="140" width="6" height="18" fill="#0D47A1" />
      <rect x="306" y="140" width="6" height="18" fill="#0D47A1" />
      <circle cx="250" cy="104" r="7" fill="#FFCCBC" />
      <rect x="245" y="111" width="10" height="14" fill="#2E7D32" />
      {/* D4 LEFT: Plant left corner – green */}
      <rect x="0" y="120" width="26" height="36" fill="#795548" rx="2" />
      <circle cx="13" cy="110" r="18" fill="#2E7D32" />
      <circle cx="0" cy="118" r="10" fill="#388E3C" />
      <circle cx="26" cy="118" r="10" fill="#388E3C" />
      {/* D5 RIGHT: Clock on wall – round */}
      <circle cx="270" cy="160" r="18" fill="white" stroke="#1565C0" strokeWidth="3" />
      <line x1="270" y1="160" x2="270" y2="147" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="270" y1="160" x2="280" y2="163" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <circle cx="270" cy="160" r="2.5" fill="#333" />
      {/* Found overlays */}
      {found.includes(0) && <rect x="3" y="103" width="90" height="42" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="231" y="103" width="90" height="42" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="130" y="7" width="60" height="38" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="100" y="82" width="120" height="80" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="270" cy="160" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}
function HospitalRight({ found, onClickSvg }: { found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }) {
  return (
    <svg viewBox="0 0 320 200" style={{ display: "block", width: "100%", height: "auto" }} onClick={onClickSvg} className="cursor-crosshair">
      {/* Wall */}
      <rect x="0" y="0" width="320" height="155" fill="#E3F2FD" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#BDBDBD" />
      {[0,1,2,3,4,5].map(i=><rect key={i} x={i*55} y="155" width="54" height="45" fill="none" stroke="#9E9E9E" strokeWidth="1"/>)}
      {/* D3 RIGHT: Sign – green cross instead of red */}
      <rect x="135" y="10" width="50" height="30" fill="white" rx="3" stroke="#2E7D32" strokeWidth="2" />
      <rect x="157" y="14" width="6" height="22" fill="#2E7D32" />
      <rect x="148" y="21" width="24" height="6" fill="#2E7D32" />
      {/* Reception desk */}
      <rect x="105" y="110" width="110" height="48" fill="#90CAF9" rx="3" />
      <rect x="105" y="108" width="110" height="8" fill="#64B5F6" rx="2" />
      {/* D4 RIGHT: No computer – just phone */}
      <rect x="153" y="105" width="14" height="8" fill="#263238" rx="2" />
      {/* Receptionist */}
      <circle cx="160" cy="80" r="9" fill="#FFCCBC" />
      <rect x="153" y="89" width="14" height="22" fill="#1565C0" />
      {/* D1 RIGHT: Left waiting chairs – red instead of blue */}
      <rect x="5" y="118" width="82" height="22" fill="#E53935" rx="3" />
      {[0,1,2].map(i=><rect key={i} x={10+i*26} y="108" width="22" height="14" fill="#EF5350" rx="2"/>)}
      <rect x="8" y="140" width="6" height="18" fill="#B71C1C" />
      <rect x="78" y="140" width="6" height="18" fill="#B71C1C" />
      <circle cx="22" cy="104" r="7" fill="#FFCCBC" />
      <rect x="17" y="111" width="10" height="14" fill="#FF9800" />
      <circle cx="48" cy="104" r="7" fill="#FFCCBC" />
      <rect x="43" y="111" width="10" height="14" fill="#E91E63" />
      {/* D2 RIGHT: Right chairs – green instead of blue */}
      <rect x="233" y="118" width="82" height="22" fill="#2E7D32" rx="3" />
      {[0,1,2].map(i=><rect key={i} x={238+i*26} y="108" width="22" height="14" fill="#388E3C" rx="2"/>)}
      <rect x="236" y="140" width="6" height="18" fill="#1B5E20" />
      <rect x="306" y="140" width="6" height="18" fill="#1B5E20" />
      <circle cx="250" cy="104" r="7" fill="#FFCCBC" />
      <rect x="245" y="111" width="10" height="14" fill="#2E7D32" />
      {/* D4 RIGHT: Plant left corner – missing */}
      {/* D5 RIGHT: Clock – missing (wall blank) */}
      {/* Found overlays */}
      {found.includes(0) && <rect x="3" y="103" width="90" height="42" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(1) && <rect x="231" y="103" width="90" height="42" rx="3" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(2) && <rect x="130" y="7" width="60" height="38" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(3) && <rect x="100" y="82" width="120" height="80" rx="4" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <circle cx="270" cy="160" r="24" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
    </svg>
  );
}

// ─── SCENE DEFINITIONS ───────────────────────────────────────────────────────
interface SceneDef {
  id: string;
  title: string;
  hotspots: { id: number; cx: number; cy: number; r: number }[];
  LeftSVG: React.FC<{ found: number[] }>;
  RightSVG: React.FC<{ found: number[]; onClickSvg: (e: React.MouseEvent<SVGSVGElement>) => void }>;
}

const SCENES: SceneDef[] = [
  {
    id: "park",
    title: "Napos Park",
    hotspots: [
      { id: 0, cx: 272, cy: 30, r: 32 },
      { id: 1, cx: 62,  cy: 84, r: 36 },
      { id: 2, cx: 100, cy: 22, r: 42 },
      { id: 3, cx: 244, cy: 86, r: 32 },
      { id: 4, cx: 260, cy: 150, r: 20 },
    ],
    LeftSVG: ParkLeft,
    RightSVG: ParkRight,
  },
  {
    id: "underwater",
    title: "Víz Alatti Világ",
    hotspots: [
      { id: 0, cx: 105, cy: 90,  r: 45 },
      { id: 1, cx: 240, cy: 55,  r: 28 },
      { id: 2, cx: 260, cy: 140, r: 28 },
      { id: 3, cx: 100, cy: 45,  r: 60 },
      { id: 4, cx: 185, cy: 168, r: 22 },
    ],
    LeftSVG: FishLeft,
    RightSVG: FishRight,
  },
  {
    id: "city",
    title: "Éjszakai Város",
    hotspots: [
      { id: 0, cx: 275, cy: 25,  r: 24 },
      { id: 1, cx: 140, cy: 20,  r: 55 },
      { id: 2, cx: 46,  cy: 83,  r: 18 },
      { id: 3, cx: 163, cy: 90,  r: 20 },
      { id: 4, cx: 90,  cy: 168, r: 42 },
    ],
    LeftSVG: CityLeft,
    RightSVG: CityRight,
  },
  {
    id: "kitchen",
    title: "Konyha",
    hotspots: [
      { id: 0, cx: 68,  cy: 112, r: 28 },
      { id: 1, cx: 130, cy: 52,  r: 22 },
      { id: 2, cx: 49,  cy: 50,  r: 46 },
      { id: 3, cx: 195, cy: 55,  r: 22 },
      { id: 4, cx: 160, cy: 50,  r: 50 },
    ],
    LeftSVG: KitchenLeft,
    RightSVG: KitchenRight,
  },
  {
    id: "living",
    title: "Nappali Szoba",
    hotspots: [
      { id: 0, cx: 52,  cy: 105, r: 35 },
      { id: 1, cx: 160, cy: 80,  r: 38 },
      { id: 2, cx: 270, cy: 80,  r: 28 },
      { id: 3, cx: 270, cy: 160, r: 28 },
      { id: 4, cx: 50,  cy: 30,  r: 28 },
    ],
    LeftSVG: LivingLeft,
    RightSVG: LivingRight,
  },
  {
    id: "airport",
    title: "Repülőtér",
    hotspots: [
      { id: 0, cx: 80,  cy: 95,  r: 38 },
      { id: 1, cx: 240, cy: 90,  r: 36 },
      { id: 2, cx: 270, cy: 28,  r: 26 },
      { id: 3, cx: 160, cy: 155, r: 30 },
      { id: 4, cx: 55,  cy: 170, r: 28 },
    ],
    LeftSVG: AirportLeft,
    RightSVG: AirportRight,
  },
  {
    id: "forest",
    title: "Erdő",
    hotspots: [
      { id: 0, cx: 55,  cy: 90,  r: 36 },
      { id: 1, cx: 268, cy: 85,  r: 36 },
      { id: 2, cx: 160, cy: 155, r: 30 },
      { id: 3, cx: 110, cy: 160, r: 22 },
      { id: 4, cx: 210, cy: 28,  r: 22 },
    ],
    LeftSVG: ForestLeft,
    RightSVG: ForestRight,
  },
  {
    id: "cafe",
    title: "Kávézó",
    hotspots: [
      { id: 0, cx: 60,  cy: 145, r: 30 },
      { id: 1, cx: 160, cy: 80,  r: 32 },
      { id: 2, cx: 270, cy: 50,  r: 28 },
      { id: 3, cx: 220, cy: 150, r: 30 },
      { id: 4, cx: 48,  cy: 35,  r: 26 },
    ],
    LeftSVG: CafeLeft,
    RightSVG: CafeRight,
  },
  {
    id: "beach",
    title: "Strand",
    hotspots: [
      { id: 0, cx: 270, cy: 30,  r: 28 },
      { id: 1, cx: 70,  cy: 100, r: 35 },
      { id: 2, cx: 215, cy: 115, r: 38 },
      { id: 3, cx: 160, cy: 165, r: 30 },
      { id: 4, cx: 55,  cy: 160, r: 28 },
    ],
    LeftSVG: BeachLeft,
    RightSVG: BeachRight,
  },
  {
    id: "library",
    title: "Könyvtár",
    hotspots: [
      { id: 0, cx: 52,  cy: 100, r: 38 },
      { id: 1, cx: 268, cy: 100, r: 38 },
      { id: 2, cx: 160, cy: 155, r: 32 },
      { id: 3, cx: 248, cy: 28,  r: 24 },
      { id: 4, cx: 90,  cy: 30,  r: 24 },
    ],
    LeftSVG: LibraryLeft,
    RightSVG: LibraryRight,
  },
  {
    id: "playground",
    title: "Játszótér",
    hotspots: [
      { id: 0, cx: 55,  cy: 95,  r: 36 },
      { id: 1, cx: 160, cy: 85,  r: 36 },
      { id: 2, cx: 270, cy: 115, r: 35 },
      { id: 3, cx: 115, cy: 160, r: 30 },
      { id: 4, cx: 270, cy: 28,  r: 22 },
    ],
    LeftSVG: PlaygroundLeft,
    RightSVG: PlaygroundRight,
  },
  {
    id: "market",
    title: "Piactér",
    hotspots: [
      { id: 0, cx: 55,  cy: 90,  r: 36 },
      { id: 1, cx: 160, cy: 80,  r: 36 },
      { id: 2, cx: 270, cy: 90,  r: 36 },
      { id: 3, cx: 110, cy: 170, r: 30 },
      { id: 4, cx: 270, cy: 28,  r: 24 },
    ],
    LeftSVG: MarketLeft,
    RightSVG: MarketRight,
  },
  {
    id: "railway",
    title: "Vasút",
    hotspots: [
      { id: 0, cx: 80,  cy: 100, r: 42 },
      { id: 1, cx: 245, cy: 90,  r: 36 },
      { id: 2, cx: 270, cy: 155, r: 28 },
      { id: 3, cx: 52,  cy: 30,  r: 26 },
      { id: 4, cx: 160, cy: 168, r: 30 },
    ],
    LeftSVG: RailwayLeft,
    RightSVG: RailwayRight,
  },
  {
    id: "hospital",
    title: "Kórház",
    hotspots: [
      { id: 0, cx: 52,  cy: 95,  r: 36 },
      { id: 1, cx: 268, cy: 95,  r: 36 },
      { id: 2, cx: 160, cy: 30,  r: 30 },
      { id: 3, cx: 160, cy: 155, r: 32 },
      { id: 4, cx: 270, cy: 160, r: 28 },
    ],
    LeftSVG: HospitalLeft,
    RightSVG: HospitalRight,
  },
];

// ─── STREAK HELPERS ───────────────────────────────────────────────────────────
function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  if (!data) return 0;
  const { count, lastDate } = JSON.parse(data);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === today || lastDate === yesterday) return count;
  return 0;
}

function updateStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  const today = new Date().toDateString();
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    if (lastDate === today) return count;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SpotDiffPage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [foundInScene, setFoundInScene] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_SCENE);
  const [totalTime, setTotalTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongClicks, setWrongClicks] = useState<WrongClick[]>([]);
  const wrongIdRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => { setStreak(getStreak()); }, []);

  const goNextScene = useCallback((currentIndex: number, currentScore: number) => {
    if (currentIndex + 1 >= TOTAL_SCENES) {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      setTotalTime(elapsed);
      const newStreak = updateStreak();
      setStreak(newStreak);
      const rarity = calculateRarity(currentScore, MAX_SCORE, newStreak);
      saveCard({
        id: generateCardId(),
        game: "spotdiff",
        rarity,
        score: currentScore,
        total: MAX_SCORE,
        date: new Date().toISOString(),
      });
      incrementTotalGames();
      updateStats({ highestStreak: newStreak });
      setGameState("reward");
    } else {
      setSceneIndex(currentIndex + 1);
      setFoundInScene([]);
      setTimeLeft(TIME_PER_SCENE);
      setGameState("playing");
    }
  }, []);

  const startGame = () => {
    setSceneIndex(0);
    setScore(0);
    setFoundInScene([]);
    setWrongClicks([]);
    setTimeLeft(TIME_PER_SCENE);
    startTimeRef.current = Date.now();
    setGameState("playing");
  };

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      goNextScene(sceneIndex, score);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, timeLeft, sceneIndex, score, goNextScene]);

  // SVG click handler for right image
  const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (gameState !== "playing") return;
    const scene = SCENES[sceneIndex];
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    // Convert to SVG coordinate space (viewBox 320x200)
    const svgX = ((e.clientX - rect.left) / rect.width) * 320;
    const svgY = ((e.clientY - rect.top) / rect.height) * 200;

    // Check hotspots
    for (const hs of scene.hotspots) {
      if (foundInScene.includes(hs.id)) continue;
      const dist = Math.sqrt((svgX - hs.cx) ** 2 + (svgY - hs.cy) ** 2);
      if (dist <= hs.r) {
        const newFound = [...foundInScene, hs.id];
        const newScore = score + 1;
        setFoundInScene(newFound);
        setScore(newScore);
        if (newFound.length >= 5) {
          setTimeout(() => goNextScene(sceneIndex, newScore), 1400);
        }
        return;
      }
    }

    // Wrong click – show red ripple
    const id = ++wrongIdRef.current;
    // Convert back to percentage for positioning
    const pctX = ((e.clientX - rect.left) / rect.width) * 100;
    const pctY = ((e.clientY - rect.top) / rect.height) * 100;
    setWrongClicks((prev) => [...prev, { id, x: pctX, y: pctY }]);
    setTimeout(() => setWrongClicks((prev) => prev.filter((w) => w.id !== id)), 600);
  }, [gameState, sceneIndex, foundInScene, score, goNextScene]);

  const scene = SCENES[sceneIndex];
  const timerColor = timeLeft <= 3 ? "text-neon-pink" : timeLeft <= 10 ? "text-gold" : "text-white/60";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-3 relative pb-8">

      {/* Ready screen */}
      {gameState === "ready" && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Search size={48} className="text-amber-400" style={{ filter: "drop-shadow(0 0 15px rgba(251,191,36,0.5))" }} />
          <h1 className="text-2xl font-black tracking-wider text-white">SPOT THE DIFF</h1>
          <p className="text-white/40 text-sm text-center max-w-xs">Keresd meg az 5 különbséget a jobb oldali képen!</p>
          <div className="flex flex-col items-center gap-1 text-white/30 text-xs">
            <span>14 scéna · 5 különbség / scéna · {TIME_PER_SCENE}s limit</span>
          </div>
          <motion.button
            onClick={startGame}
            className="bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold px-8 py-3 rounded-2xl text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* HUD */}
      {gameState === "playing" && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_SCENES }, (_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < sceneIndex ? "bg-neon-green" : i === sceneIndex ? "bg-amber-400" : "bg-white/15"}`} />
                ))}
              </div>
              <span className={`text-sm font-bold ${timerColor}`}>{timeLeft}s</span>
            </div>
            <div className="flex items-center gap-1.5 text-gold font-bold text-lg">
              <Trophy size={16} className="text-gold" />
              {score}
            </div>
          </div>
        </div>
      )}

      {/* Game area */}
      {gameState === "playing" && (
        <div className="w-full max-w-lg mt-14 flex flex-col items-center gap-3">
          {/* Scene title */}
          <div className="text-amber-400/50 text-xs font-bold tracking-widest">{scene.title.toUpperCase()}</div>

          {/* Difference status dots */}
          <div className="flex gap-3">
            {scene.hotspots.map((hs) => (
              <motion.div
                key={hs.id}
                animate={foundInScene.includes(hs.id) ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {foundInScene.includes(hs.id) ? (
                  <CheckCircle size={18} className="text-neon-green" style={{ filter: "drop-shadow(0 0 6px rgba(0,255,136,0.7))" }} />
                ) : (
                  <Circle size={18} className="text-white/20" />
                )}
              </motion.div>
            ))}
          </div>

          {/* ORIGINAL image */}
          <div className="text-white/25 text-xs font-bold tracking-widest self-start ml-1">EREDETI</div>
          <div className="w-full bg-card/50 border border-white/8 rounded-2xl overflow-hidden">
            <scene.LeftSVG found={foundInScene} />
          </div>

          {/* Label */}
          <div className="text-amber-400/60 text-xs font-bold tracking-widest">KERESD A KÜLÖNBSÉGET ↓</div>

          {/* MODIFIED image – clickable */}
          <div className="w-full bg-card/50 border border-amber-500/25 rounded-2xl overflow-hidden relative">
            <scene.RightSVG found={foundInScene} onClickSvg={handleSvgClick} />
            {/* Wrong click ripples (positioned over the SVG) */}
            {wrongClicks.map((wc) => (
              <motion.div
                key={wc.id}
                className="absolute pointer-events-none"
                style={{
                  left: `${wc.x}%`,
                  top: `${wc.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-neon-pink" />
              </motion.div>
            ))}
          </div>

          {/* All found celebration */}
          <AnimatePresence>
            {foundInScene.length >= 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={32} className="text-neon-green" style={{ filter: "drop-shadow(0 0 12px rgba(0,255,136,0.7))" }} />
                <span className="text-neon-green font-bold text-sm">Mind megtalálva!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Reward */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, MAX_SCORE, streak)}
          game="spotdiff"
          score={score}
          total={MAX_SCORE}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result */}
      {gameState === "result" && (
        <>
          <ResultCard
            score={score}
            total={MAX_SCORE}
            time={totalTime}
            gameName="Spot the Diff"
            gameIcon={<Search size={24} className="text-amber-400" />}
            onPlayAgain={() => setGameState("ready")}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
