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

const TOTAL_SCENES = 4;
const TIME_PER_SCENE = 45;
const MAX_SCORE = TOTAL_SCENES * 5; // 20

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
      {found.includes(2) && <rect x="5" y="8" width="88" height="82" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" rx="4" />}
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
      {found.includes(2) && <rect x="5" y="8" width="88" height="82" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" rx="4" />}
      {found.includes(3) && <circle cx="195" cy="55" r="22" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" />}
      {found.includes(4) && <rect x="112" y="9" width="96" height="81" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.8" rx="3" />}
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
      { id: 2, cx: 50,  cy: 50,  r: 55 },
      { id: 3, cx: 195, cy: 55,  r: 22 },
      { id: 4, cx: 160, cy: 52,  r: 55 },
    ],
    LeftSVG: KitchenLeft,
    RightSVG: KitchenRight,
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
            <span>4 scéna · 5 különbség / scéna · {TIME_PER_SCENE}s limit</span>
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
