"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, Lock, Check, Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";

// ═══════════════════════════════════════════════
//  TYPES & CONSTANTS
// ═══════════════════════════════════════════════
type GameState = "menu" | "countdown" | "playing" | "complete" | "failed" | "flipped" | "reward";

interface CarType {
  id: string; name: string; price: number; color: string;
  maxSpeed: number; accel: number; handling: number;
  canDrift: boolean; canNitro: boolean;
}
const CAR_TYPES: CarType[] = [
  { id: "starter", name: "Starter", price: 0, color: "#999999", maxSpeed: 19, accel: 15, handling: 2.5, canDrift: false, canNitro: false },
  { id: "sedan", name: "Sedan", price: 2, color: "#0066FF", maxSpeed: 25, accel: 18, handling: 2.8, canDrift: false, canNitro: false },
  { id: "muscle", name: "Muscle", price: 5, color: "#FF6600", maxSpeed: 32, accel: 22, handling: 2.5, canDrift: true, canNitro: false },
  { id: "racer", name: "Racer", price: 10, color: "#FF2222", maxSpeed: 38, accel: 26, handling: 3.2, canDrift: true, canNitro: false },
  { id: "supercar", name: "Supercar", price: 20, color: "#9933FF", maxSpeed: 45, accel: 30, handling: 3.5, canDrift: true, canNitro: true },
];

const ACTIVE_CAR_KEY = "citydrive_active_car";
function getActiveCar(): string { try { return localStorage.getItem(ACTIVE_CAR_KEY) || "starter"; } catch { return "starter"; } }
function getCarType(id: string): CarType { return CAR_TYPES.find(c => c.id === id) || CAR_TYPES[0]; }

const LEVEL_KEY = "racetrack_completed";
function getCompletedLevels(): number[] {
  try { return JSON.parse(localStorage.getItem(LEVEL_KEY) || "[]"); } catch { return []; }
}
function markLevelComplete(level: number) {
  const c = getCompletedLevels();
  if (!c.includes(level)) { c.push(level); localStorage.setItem(LEVEL_KEY, JSON.stringify(c)); }
}

const STREAK_KEY = "racetrack_winstreak";
function getWinStreak(): number { try { return parseInt(localStorage.getItem(STREAK_KEY) || "0"); } catch { return 0; } }
function setWinStreak(n: number) { localStorage.setItem(STREAK_KEY, String(n)); }

const NITRO_MAX = 100;
const NITRO_DRAIN = 35;
const NITRO_BOOST = 1.6;

// ═══════════════════════════════════════════════
//  AI RACER DEFINITIONS
// ═══════════════════════════════════════════════
const AI_NAMES = ["Blaze", "Shadow", "Viper", "Storm", "Ghost", "Fury"];
const AI_COLORS = ["#FF4444", "#333366", "#22CC44", "#FF8800", "#AAAAAA", "#CC00CC"];

// ═══════════════════════════════════════════════
//  TRACK DEFINITIONS (20 levels - circuit tracks)
// ═══════════════════════════════════════════════
interface OilSlick { x: number; z: number; r: number }
interface TrackDef {
  id: number; name: string;
  waypoints: { x: number; z: number }[];
  width: number; laps: number;
  oilSlicks: OilSlick[];
}

function generateTrack(id: number): TrackDef {
  const w = 12 + id * 0.5; // road width grows slightly
  const laps = id <= 5 ? 2 : id <= 12 ? 3 : id <= 18 ? 3 : 4;
  const scale = 40 + id * 8; // tracks get bigger
  const oilSlicks: OilSlick[] = [];

  // Different track shapes for each level
  let pts: { x: number; z: number }[] = [];

  switch (id) {
    case 1: // Simple Oval
      pts = ellipse(scale * 1.3, scale * 0.7, 16);
      break;
    case 2: // Rectangle
      pts = [
        { x: -scale, z: -scale * 0.6 }, { x: -scale, z: scale * 0.6 },
        { x: scale, z: scale * 0.6 }, { x: scale, z: -scale * 0.6 },
      ];
      break;
    case 3: // Kidney Bean
      pts = kidney(scale, 20);
      break;
    case 4: // Triangle
      pts = [
        { x: 0, z: -scale * 1.2 },
        { x: -scale, z: scale * 0.6 },
        { x: scale, z: scale * 0.6 },
      ];
      break;
    case 5: // S-Curve circuit
      pts = sCurve(scale, 20);
      break;
    case 6: // Long Oval with chicane
      pts = ovalChicane(scale, 24);
      break;
    case 7: // Diamond
      pts = [
        { x: 0, z: -scale * 1.2 }, { x: -scale, z: 0 },
        { x: 0, z: scale * 1.2 }, { x: scale, z: 0 },
      ];
      break;
    case 8: // Teardrop
      pts = teardrop(scale, 20);
      break;
    case 9: // Zigzag circuit
      pts = zigzag(scale, 10);
      break;
    case 10: // Figure-8
      pts = figure8(scale, 24);
      break;
    case 11: // Snake course
      pts = snake(scale, 16);
      break;
    case 12: // Hairpin Alley
      pts = hairpinAlley(scale, 14);
      break;
    case 13: // Stadium oval + inner chicane
      pts = stadium(scale, 20);
      break;
    case 14: // Monaco tight
      pts = monaco(scale, 18);
      break;
    case 15: // Speed Ring
      pts = ellipse(scale * 1.6, scale * 1.2, 24);
      break;
    case 16: // Mountain hairpins
      pts = mountain(scale, 16);
      break;
    case 17: // Double Loop
      pts = doubleLoop(scale, 28);
      break;
    case 18: // Star
      pts = star(scale, 5);
      break;
    case 19: // Technical circuit
      pts = technical(scale, 22);
      break;
    case 20: // Championship Ring
      pts = championship(scale, 30);
      break;
    default:
      pts = ellipse(scale, scale * 0.7, 16);
  }

  // Generate oil slicks on track segments
  const slickCount = Math.floor(id / 2) + 1;
  for (let i = 0; i < slickCount && i < pts.length; i++) {
    const idx = Math.floor((i + 1) * pts.length / (slickCount + 1)) % pts.length;
    const p = pts[idx];
    const next = pts[(idx + 1) % pts.length];
    const mx = (p.x + next.x) / 2 + (Math.random() - 0.5) * w * 0.3;
    const mz = (p.z + next.z) / 2 + (Math.random() - 0.5) * w * 0.3;
    oilSlicks.push({ x: mx, z: mz, r: 2 + Math.random() * 2 });
  }

  const names = [
    "", "Green Valley", "City Block", "Kidney Run", "Sharp Triangle", "Snake Pass",
    "Chicane Circuit", "Diamond Cut", "Teardrop Loop", "Zigzag Zone", "Figure Eight",
    "Serpentine", "Hairpin Hell", "Stadium Sprint", "Monaco Mini", "Speed Ring",
    "Mountain Pass", "Double Loop", "Star Circuit", "Technical Pro", "Championship"
  ];

  return { id, name: names[id] || `Track ${id}`, waypoints: pts, width: w, laps, oilSlicks };
}

// Track shape generators
function ellipse(rx: number, rz: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return { x: Math.cos(a) * rx, z: Math.sin(a) * rz };
  });
}

function kidney(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const r = s * (1 + 0.4 * Math.cos(a));
    return { x: Math.cos(a) * r, z: Math.sin(a) * s * 0.7 };
  });
}

function sCurve(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    return { x: Math.sin(t) * s + Math.sin(2 * t) * s * 0.3, z: Math.cos(t) * s * 1.2 };
  });
}

function ovalChicane(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const rx = s * 1.5;
    const rz = s * 0.7;
    let x = Math.cos(t) * rx;
    let z = Math.sin(t) * rz;
    // Add chicane bump in the middle
    if (t > Math.PI * 0.4 && t < Math.PI * 0.6) {
      x += Math.sin((t - Math.PI * 0.4) / 0.2 * Math.PI) * s * 0.3;
    }
    return { x, z };
  });
}

function teardrop(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const r = s * (1 - 0.5 * Math.sin(t));
    return { x: Math.cos(t) * r, z: Math.sin(t) * r * 0.8 };
  });
}

function zigzag(s: number, n: number): { x: number; z: number }[] {
  const pts: { x: number; z: number }[] = [];
  const segs = 5;
  const segH = s * 2 / segs;
  for (let i = 0; i < segs; i++) {
    const xOff = (i % 2 === 0 ? -1 : 1) * s * 0.6;
    pts.push({ x: xOff, z: -s + i * segH });
  }
  // Close the loop
  pts.push({ x: s * 0.6, z: s });
  pts.push({ x: s * 0.8, z: s * 0.5 });
  pts.push({ x: s * 0.8, z: -s * 0.5 });
  pts.push({ x: -s * 0.6, z: -s });
  pts.push({ x: -s * 0.8, z: -s * 0.5 });
  return pts;
}

function figure8(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    return { x: Math.sin(t) * s, z: Math.sin(2 * t) * s * 0.6 };
  });
}

function snake(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    return { x: Math.sin(t) * s + Math.sin(3 * t) * s * 0.25, z: Math.cos(t) * s * 1.1 };
  });
}

function hairpinAlley(s: number, n: number): { x: number; z: number }[] {
  const pts: { x: number; z: number }[] = [];
  const rows = 4;
  for (let r = 0; r < rows; r++) {
    const z = -s + r * (2 * s / rows);
    const dir = r % 2 === 0 ? 1 : -1;
    pts.push({ x: dir * s * 0.7, z });
    pts.push({ x: -dir * s * 0.7, z: z + s / rows });
  }
  // Close
  pts.push({ x: s * 0.7, z: s });
  pts.push({ x: s * 0.9, z: 0 });
  return pts;
}

function stadium(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    let x = Math.cos(t) * s * 1.3;
    let z = Math.sin(t) * s * 0.8;
    if (t > Math.PI * 0.8 && t < Math.PI * 1.2) {
      x += Math.sin((t - Math.PI * 0.8) / 0.4 * Math.PI) * s * 0.4;
      z += Math.cos((t - Math.PI * 0.8) / 0.4 * Math.PI) * s * 0.2;
    }
    return { x, z };
  });
}

function monaco(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const r = s * (0.8 + 0.3 * Math.cos(3 * t) + 0.15 * Math.sin(5 * t));
    return { x: Math.cos(t) * r, z: Math.sin(t) * r };
  });
}

function mountain(s: number, n: number): { x: number; z: number }[] {
  const pts: { x: number; z: number }[] = [];
  const switchbacks = 5;
  for (let i = 0; i < switchbacks; i++) {
    const z = -s + i * (2 * s / switchbacks);
    pts.push({ x: (i % 2 === 0 ? -1 : 1) * s * 0.8, z });
    pts.push({ x: (i % 2 === 0 ? 1 : -1) * s * 0.8, z: z + s / switchbacks * 0.5 });
  }
  pts.push({ x: -s * 0.5, z: s });
  pts.push({ x: -s * 0.9, z: 0 });
  return pts;
}

function doubleLoop(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const x = Math.cos(t) * s * 0.7 + Math.cos(2 * t) * s * 0.5;
    const z = Math.sin(t) * s * 0.7 + Math.sin(2 * t) * s * 0.5;
    return { x, z };
  });
}

function star(s: number, points: number): { x: number; z: number }[] {
  const pts: { x: number; z: number }[] = [];
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * Math.PI * 2;
    const r = i % 2 === 0 ? s * 1.2 : s * 0.5;
    pts.push({ x: Math.cos(a) * r, z: Math.sin(a) * r });
  }
  return pts;
}

function technical(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const r = s * (1 + 0.3 * Math.cos(4 * t) + 0.15 * Math.sin(7 * t));
    return { x: Math.cos(t) * r, z: Math.sin(t) * r * 0.9 };
  });
}

function championship(s: number, n: number): { x: number; z: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const r = s * (1.2 + 0.25 * Math.cos(3 * t) + 0.2 * Math.sin(5 * t) + 0.1 * Math.cos(7 * t));
    return { x: Math.cos(t) * r, z: Math.sin(t) * r };
  });
}

// ═══════════════════════════════════════════════
//  SPLINE UTILITIES
// ═══════════════════════════════════════════════
function createTrackCurve(waypoints: { x: number; z: number }[]): THREE.CatmullRomCurve3 {
  const pts3 = waypoints.map(p => new THREE.Vector3(p.x, 0, p.z));
  return new THREE.CatmullRomCurve3(pts3, true, "catmullrom", 0.5);
}

function sampleTrack(curve: THREE.CatmullRomCurve3, segments: number): THREE.Vector3[] {
  return curve.getSpacedPoints(segments);
}

// ═══════════════════════════════════════════════
//  TRACK ROAD MESH
// ═══════════════════════════════════════════════
function TrackRoad({ curve, width, segments }: { curve: THREE.CatmullRomCurve3; width: number; segments: number }) {
  const geometry = useMemo(() => {
    const pts = curve.getSpacedPoints(segments);
    const verts: number[] = [];
    const indices: number[] = [];
    const uvs: number[] = [];

    for (let i = 0; i <= segments; i++) {
      const p = pts[i % pts.length];
      const tangent = curve.getTangentAt((i % segments) / segments);
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();

      verts.push(p.x + normal.x * width / 2, 0.02, p.z + normal.z * width / 2);
      verts.push(p.x - normal.x * width / 2, 0.02, p.z - normal.z * width / 2);
      uvs.push(0, i / segments * 10);
      uvs.push(1, i / segments * 10);

      if (i > 0) {
        const idx = i * 2;
        indices.push(idx - 2, idx, idx - 1);
        indices.push(idx - 1, idx, idx + 1);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }, [curve, width, segments]);

  return <mesh geometry={geometry}><meshStandardMaterial color="#3a3a55" roughness={0.8} /></mesh>;
}

// Track edge barriers
function TrackBarriers({ curve, width, segments }: { curve: THREE.CatmullRomCurve3; width: number; segments: number }) {
  const pts = useMemo(() => curve.getSpacedPoints(segments), [curve, segments]);

  return (
    <>
      {pts.map((p, i) => {
        if (i % 3 !== 0) return null;
        const tangent = curve.getTangentAt((i % segments) / segments);
        const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
        const angle = Math.atan2(tangent.x, tangent.z);
        return (
          <React.Fragment key={i}>
            <mesh position={[p.x + normal.x * (width / 2 + 0.3), 0.4, p.z + normal.z * (width / 2 + 0.3)]} rotation={[0, angle, 0]}>
              <boxGeometry args={[0.4, 0.8, 2]} />
              <meshStandardMaterial color="#FF2244" emissive="#FF2244" emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[p.x - normal.x * (width / 2 + 0.3), 0.4, p.z - normal.z * (width / 2 + 0.3)]} rotation={[0, angle, 0]}>
              <boxGeometry args={[0.4, 0.8, 2]} />
              <meshStandardMaterial color="#2244FF" emissive="#2244FF" emissiveIntensity={0.3} />
            </mesh>
          </React.Fragment>
        );
      })}
    </>
  );
}

// Oil slick meshes
function OilSlicks({ slicks }: { slicks: OilSlick[] }) {
  return (
    <>
      {slicks.map((s, i) => (
        <mesh key={i} rotation-x={-Math.PI / 2} position={[s.x, 0.04, s.z]}>
          <circleGeometry args={[s.r, 16]} />
          <meshStandardMaterial color="#1a1a0a" emissive="#332200" emissiveIntensity={0.2} transparent opacity={0.7} />
        </mesh>
      ))}
    </>
  );
}

// Start/Finish line
function StartFinishLine({ curve, width }: { curve: THREE.CatmullRomCurve3; width: number }) {
  const p = curve.getPointAt(0);
  const t = curve.getTangentAt(0);
  const angle = Math.atan2(t.x, t.z);
  return (
    <group position={[p.x, 0, p.z]} rotation={[0, angle, 0]}>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.05, 0]}>
        <planeGeometry args={[width, 2]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1.5} />
      </mesh>
      {/* Checkered pattern pillars */}
      <mesh position={[-width / 2 - 1, 4, 0]}><boxGeometry args={[0.5, 8, 0.5]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
      <mesh position={[width / 2 + 1, 4, 0]}><boxGeometry args={[0.5, 8, 0.5]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
      <mesh position={[0, 8.2, 0]}><boxGeometry args={[width + 2.5, 0.5, 0.5]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1} /></mesh>
      <pointLight position={[0, 5, 0]} color="#FFD700" intensity={3} distance={20} />
    </group>
  );
}

// ═══════════════════════════════════════════════
//  CAR 3D MODEL
// ═══════════════════════════════════════════════
function CarMesh({ color, tilt }: { color: string; tilt?: number }) {
  return (
    <group rotation={[0, 0, tilt || 0]}>
      <mesh position={[0, 0.3, 0]}><boxGeometry args={[1.8, 0.6, 3.5]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} /></mesh>
      <mesh position={[0, 0.7, -0.3]}><boxGeometry args={[1.5, 0.4, 1.8]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.15} /></mesh>
      <mesh position={[0, 0.6, 0.8]}><boxGeometry args={[1.4, 0.35, 0.05]} /><meshStandardMaterial color="#1a1a2e" transparent opacity={0.7} /></mesh>
      <mesh position={[0.6, 0.3, 1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} /></mesh>
      <mesh position={[-0.6, 0.3, 1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} /></mesh>
      <mesh position={[0.6, 0.3, -1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1} /></mesh>
      <mesh position={[-0.6, 0.3, -1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1} /></mesh>
      {[[-0.95, 0, 1], [0.95, 0, 1], [-0.95, 0, -1], [0.95, 0, -1]].map(([wx, wy, wz], wi) => (
        <mesh key={wi} position={[wx, wy, wz]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 8]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
}

// ═══════════════════════════════════════════════
//  TIRE WALLS
// ═══════════════════════════════════════════════
function TireWalls({ curve, width, segments }: { curve: THREE.CatmullRomCurve3; width: number; segments: number }) {
  const pts = useMemo(() => curve.getSpacedPoints(segments), [curve, segments]);
  const walls = useMemo(() => {
    const result: { x: number; y: number; z: number; angle: number; side: number }[] = [];
    for (let i = 0; i < pts.length; i += 30) {
      const p = pts[i];
      const t = curve.getTangentAt((i % segments) / segments);
      const n = new THREE.Vector3(-t.z, 0, t.x).normalize();
      const ang = Math.atan2(t.x, t.z);
      // outer barrier side (positive normal direction)
      result.push({ x: p.x + n.x * (width / 2 + 1.2), y: 0, z: p.z + n.z * (width / 2 + 1.2), angle: ang, side: 1 });
    }
    return result;
  }, [pts, curve, segments, width]);

  return (
    <>
      {walls.map((w, i) => (
        <group key={i} position={[w.x, w.y, w.z]} rotation={[0, w.angle, 0]}>
          {/* Bottom tire */}
          <mesh position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 0.5, 10]} />
            <meshStandardMaterial color="#222222" roughness={0.9} />
          </mesh>
          {/* Inner ring bottom */}
          <mesh position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.35, 0.1, 6, 10]} />
            <meshStandardMaterial color="#444444" />
          </mesh>
          {/* Top tire */}
          <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 0.5, 10]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
          </mesh>
          {/* Inner ring top */}
          <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.35, 0.1, 6, 10]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
        </group>
      ))}
    </>
  );
}


// ═══════════════════════════════════════════════
//  DRIFT SMOKE (3D particle pool)
// ═══════════════════════════════════════════════
const SMOKE_COUNT = 12;
interface SmokePart { x: number; z: number; y: number; opacity: number; scale: number; life: number; active: boolean; }

function DriftSmoke3D({ hudRef, playerPosRef }: {
  hudRef: React.RefObject<RaceHud>;
  playerPosRef: React.RefObject<{ x: number; z: number; angle: number; speed: number }>;
}) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>(new Array(SMOKE_COUNT).fill(null));
  const particles = useRef<SmokePart[]>(Array.from({ length: SMOKE_COUNT }, () => ({ x: 0, z: 0, y: 0.3, opacity: 0, scale: 0.5, life: 0, active: false })));
  const nextIdx = useRef(0);
  const emitTimer = useRef(0);

  useFrame((_, delta) => {
    const isDrifting = hudRef.current.isDrifting;
    const pos = playerPosRef.current;
    emitTimer.current += delta;

    if (isDrifting && pos.speed > 2 && emitTimer.current > 0.07) {
      emitTimer.current = 0;
      const idx = nextIdx.current % SMOKE_COUNT;
      nextIdx.current++;
      const spread = 1.5;
      particles.current[idx] = {
        x: pos.x - Math.sin(pos.angle) * 2 + (Math.random() - 0.5) * spread,
        z: pos.z - Math.cos(pos.angle) * 2 + (Math.random() - 0.5) * spread,
        y: 0.4, opacity: 0.55, scale: 0.8, life: 1, active: true,
      };
    }

    for (let i = 0; i < SMOKE_COUNT; i++) {
      const p = particles.current[i];
      const mesh = meshRefs.current[i];
      if (!mesh) continue;
      if (p.active && p.life > 0) {
        p.life -= delta * 1.3;
        p.y += delta * 1.8;
        p.scale += delta * 2.5;
        p.opacity = Math.max(0, p.life * 0.5);
        mesh.position.set(p.x, p.y, p.z);
        mesh.scale.setScalar(p.scale);
        (mesh.material as THREE.MeshBasicMaterial).opacity = p.opacity;
        mesh.visible = true;
      } else {
        mesh.visible = false;
        if (p.life <= 0) p.active = false;
      }
    }
  });

  return (
    <>
      {Array.from({ length: SMOKE_COUNT }, (_, i) => (
        <mesh key={i} ref={(el: THREE.Mesh | null) => { meshRefs.current[i] = el; }} visible={false}>
          <sphereGeometry args={[0.9, 5, 5]} />
          <meshBasicMaterial color="#bbbbbb" transparent opacity={0.4} depthWrite={false} />
        </mesh>
      ))}
    </>
  );
}

// ═══════════════════════════════════════════════
//  MINIMAP (canvas outside Three.js)
// ═══════════════════════════════════════════════
function MiniMap({ track, playerPosRef, aiPosRef }: {
  track: TrackDef;
  playerPosRef: React.RefObject<{ x: number; z: number; angle: number; speed: number }>;
  aiPosRef: React.RefObject<{ x: number; z: number; color: string }[]>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const SIZE = 130;
    canvas.width = SIZE; canvas.height = SIZE;

    const wps = track.waypoints;
    const allX = wps.map(p => p.x), allZ = wps.map(p => p.z);
    const minX = Math.min(...allX), maxX = Math.max(...allX);
    const minZ = Math.min(...allZ), maxZ = Math.max(...allZ);
    const range = Math.max(maxX - minX, maxZ - minZ) * 1.2;
    const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
    const toM = (x: number, z: number) => ({
      mx: (x - cx) / range * SIZE + SIZE / 2,
      mz: (z - cz) / range * SIZE + SIZE / 2,
    });

    const roadW = Math.max(3, track.width * SIZE / range * 0.9);

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Background
      ctx.fillStyle = "rgba(8,10,22,0.85)";
      ctx.beginPath();
      ctx.roundRect(0, 0, SIZE, SIZE, 10);
      ctx.fill();

      // Track road
      ctx.strokeStyle = "#3a3a55";
      ctx.lineWidth = roadW;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      wps.forEach((p, i) => {
        const { mx, mz } = toM(p.x, p.z);
        if (i === 0) ctx.moveTo(mx, mz); else ctx.lineTo(mx, mz);
      });
      ctx.closePath();
      ctx.stroke();

      // Track center line
      ctx.strokeStyle = "#555570";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      wps.forEach((p, i) => {
        const { mx, mz } = toM(p.x, p.z);
        if (i === 0) ctx.moveTo(mx, mz); else ctx.lineTo(mx, mz);
      });
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      // Start/finish line
      const { mx: sx, mz: sz } = toM(wps[0].x, wps[0].z);
      ctx.fillStyle = "#FFD700";
      ctx.fillRect(sx - 2, sz - 5, 4, 10);

      // AI dots
      for (const ai of aiPosRef.current) {
        const { mx, mz } = toM(ai.x, ai.z);
        ctx.fillStyle = ai.color;
        ctx.beginPath(); ctx.arc(mx, mz, 3, 0, Math.PI * 2); ctx.fill();
      }

      // Player dot + direction arrow
      const pl = playerPosRef.current;
      const { mx: px, mz: pz } = toM(pl.x, pl.z);
      ctx.fillStyle = "#FFFFFF";
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(px, pz, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath();
      ctx.moveTo(px, pz);
      ctx.lineTo(px + Math.sin(pl.angle) * 8, pz + Math.cos(pl.angle) * 8);
      ctx.stroke();

      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [track, playerPosRef, aiPosRef]);

  return <canvas ref={canvasRef} style={{ width: 130, height: 130, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)" }} />;
}

// ═══════════════════════════════════════════════
//  SPEED GAUGE (SVG)
// ═══════════════════════════════════════════════
function SpeedGauge({ speed, maxSpeed, nitroActive, nitro, canNitro, onNitroToggle }: {
  speed: number; maxSpeed: number; nitroActive: boolean; nitro: number; canNitro: boolean; onNitroToggle: () => void;
}) {
  const pct = Math.min(1, speed / maxSpeed);
  const cx = 50, cy = 50, R = 38;
  const startDeg = 135, totalDeg = 270;
  const sweepDeg = pct * totalDeg;
  const toXY = (deg: number) => ({
    x: cx + R * Math.cos((deg - 90) * Math.PI / 180),
    y: cy + R * Math.sin((deg - 90) * Math.PI / 180),
  });
  const p1 = toXY(startDeg);
  const p2 = toXY(startDeg + Math.max(0.01, sweepDeg));
  const largeArc = sweepDeg > 180 ? 1 : 0;
  const arcColor = nitroActive ? "#FF6600" : pct > 0.85 ? "#FF4444" : pct > 0.55 ? "#FFAA00" : "#44AAFF";
  const kmh = Math.round(speed * 3.6);

  // Background arc path (full 270°)
  const pb2 = toXY(startDeg + 270);

  return (
    <div style={{ position: "relative", width: 100, height: 100 }}>
      <svg width={100} height={100}>
        {/* Background arc */}
        <path d={`M ${toXY(startDeg).x} ${toXY(startDeg).y} A ${R} ${R} 0 1 1 ${pb2.x} ${pb2.y}`}
          stroke="rgba(255,255,255,0.08)" strokeWidth={6} fill="none" strokeLinecap="round" />
        {/* Speed arc */}
        {pct > 0.01 && (
          <path d={`M ${p1.x} ${p1.y} A ${R} ${R} 0 ${largeArc} 1 ${p2.x} ${p2.y}`}
            stroke={arcColor} strokeWidth={6} fill="none" strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 4px ${arcColor})` }} />
        )}
        {/* Speed text */}
        <text x={cx} y={cy - 2} textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={16} fontWeight="bold" fontFamily="monospace">{kmh}</text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={8}>km/h</text>
      </svg>
      {/* Nitro bar below gauge */}
      {canNitro && (
        <div style={{ position: "absolute", bottom: -18, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <button onClick={onNitroToggle}
            style={{ fontSize: 9, fontWeight: "bold", padding: "2px 8px", borderRadius: 6, pointerEvents: "auto",
              background: nitroActive ? "rgba(255,102,0,0.3)" : "rgba(0,180,255,0.15)",
              border: `1px solid ${nitroActive ? "rgba(255,102,0,0.6)" : "rgba(0,180,255,0.4)"}`,
              color: nitroActive ? "#FF8800" : "#44CCFF" }}>NOS</button>
          <div style={{ width: 70, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
            <div style={{ width: `${nitro}%`, height: "100%", borderRadius: 2, background: nitroActive ? "#FF6600" : "#00CCFF", transition: "width 0.1s" }} />
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════
//  RACE SCENE
// ═══════════════════════════════════════════════
interface RacerState {
  x: number; z: number; angle: number; speed: number;
  trackProgress: number; // 0..1 along curve per lap
  totalProgress: number; // cumulative distance for position ranking
  lap: number;
  tilt: number; // for flip visual
  maxSpeed: number; accel: number; handling: number;
  color: string; name: string;
  aggressive: number; // 0..1
  pushVx: number; pushVz: number;
  laneOffset: number; // lateral offset for route diversity
}

interface RaceHud {
  speed: number; lap: number; totalLaps: number;
  position: number; totalRacers: number;
  nitro: number; nitroActive: boolean;
  time: number; onOil: boolean;
  playerTilt: number; isDrifting: boolean;
}

interface RaceSceneProps {
  track: TrackDef;
  carType: CarType;
  running: boolean;
  onFinish: (position: number, time: number) => void;
  onFlipped: () => void;
  hudRef: React.RefObject<RaceHud>;
  nitroActiveRef: React.RefObject<boolean>;
  keysRef: React.RefObject<Set<string>>;
  touchRef: React.RefObject<{ active: boolean; sx: number; sy: number; cx: number; cy: number }>;
  playerPosRef: React.RefObject<{ x: number; z: number; angle: number; speed: number }>;
  aiPosRef: React.RefObject<{ x: number; z: number; color: string }[]>;
  cameraModeRef: React.RefObject<"chase" | "overhead">;
}

const RaceScene = React.memo(function RaceScene({ track, carType, running, onFinish, onFlipped, hudRef, nitroActiveRef, keysRef, touchRef, playerPosRef, aiPosRef, cameraModeRef }: RaceSceneProps) {
  const { camera } = useThree();
  const curve = useMemo(() => createTrackCurve(track.waypoints), [track]);
  const trackPoints = useMemo(() => sampleTrack(curve, 200), [curve]);
  const SEGS = 200;

  // Player state
  const playerRef = useRef<RacerState>({
    x: trackPoints[0].x, z: trackPoints[0].z,
    angle: Math.atan2(trackPoints[1].x - trackPoints[0].x, trackPoints[1].z - trackPoints[0].z),
    speed: 0, trackProgress: 0, totalProgress: 0, lap: 0, tilt: 0,
    maxSpeed: carType.maxSpeed, accel: carType.accel, handling: carType.handling,
    color: carType.color, name: "You", aggressive: 0, pushVx: 0, pushVz: 0, laneOffset: 0,
  });

  // AI racers - starting grid formation
  const aiRef = useRef<RacerState[]>(AI_NAMES.map((name, i) => {
    // Calculate grid positions: 2 columns, 3 rows behind the start line
    const startPt = trackPoints[0];
    const nextPt = trackPoints[1];
    const fwdAngle = Math.atan2(nextPt.x - startPt.x, nextPt.z - startPt.z);
    const behindX = -Math.sin(fwdAngle);
    const behindZ = -Math.cos(fwdAngle);
    const latX = Math.cos(fwdAngle);
    const latZ = -Math.sin(fwdAngle);

    const row = Math.floor(i / 2) + 1; // rows 1,1,2,2,3,3
    const col = (i % 2 === 0) ? -1 : 1; // left, right
    const gx = startPt.x + behindX * row * 6 + latX * col * 2.5;
    const gz = startPt.z + behindZ * row * 6 + latZ * col * 2.5;

    // Find initial track progress for grid position
    let bestIdx = 0, bestDist = Infinity;
    for (let j = 0; j < trackPoints.length; j++) {
      const ddx = gx - trackPoints[j].x;
      const ddz = gz - trackPoints[j].z;
      const d = ddx * ddx + ddz * ddz;
      if (d < bestDist) { bestDist = d; bestIdx = j; }
    }

    // AI speeds: balanced so good driving wins
    const speedFactors = [0.52, 0.57, 0.62, 0.67, 0.72, 0.77];
    const aggressionLevels = [0.15, 0.25, 0.35, 0.45, 0.60, 0.75];
    const laneOffsets = [-0.4, 0.4, -0.2, 0.3, -0.45, 0.2];

    // Calculate initial totalProgress relative to start line so grid position is accounted for
    const gridProgress = bestIdx / trackPoints.length;
    // If gridProgress is very high (close to 1.0), the AI is just behind the start line → negative offset
    const initialTotal = gridProgress > 0.5 ? gridProgress - 1 : gridProgress;

    return {
      x: gx, z: gz,
      angle: fwdAngle,
      speed: 0, trackProgress: gridProgress, totalProgress: initialTotal, lap: 0, tilt: 0,
      maxSpeed: carType.maxSpeed * speedFactors[i],
      accel: carType.accel * (0.80 + i * 0.04),
      handling: 3.0 + i * 0.3,
      color: AI_COLORS[i], name,
      aggressive: aggressionLevels[i],
      pushVx: 0, pushVz: 0,
      laneOffset: laneOffsets[i],
    };
  }));

  const playerMeshRef = useRef<THREE.Group>(null);
  const aiMeshRefs = useRef<(THREE.Group | null)[]>(new Array(6).fill(null));
  const finishedRef = useRef(false);
  const timerRef = useRef(0);

  // Oil slick effect
  const onOilRef = useRef(false);
  const oilTimerRef = useRef(0);

  // Find closest track point for a position - with sub-segment interpolation for precision
  const getTrackProgress = useCallback((x: number, z: number) => {
    let bestDist = Infinity;
    let bestIdx = 0;
    const len = trackPoints.length;
    for (let i = 0; i < len; i++) {
      const dx = x - trackPoints[i].x;
      const dz = z - trackPoints[i].z;
      const d = dx * dx + dz * dz;
      if (d < bestDist) { bestDist = d; bestIdx = i; }
    }
    // Sub-segment interpolation: project position onto the segment between bestIdx-1 and bestIdx+1
    const prevIdx = (bestIdx - 1 + len) % len;
    const nextIdx = (bestIdx + 1) % len;
    const prev = trackPoints[prevIdx];
    const next = trackPoints[nextIdx];
    // Vector from prev to next (the local track direction)
    const segDx = next.x - prev.x;
    const segDz = next.z - prev.z;
    const segLen2 = segDx * segDx + segDz * segDz;
    if (segLen2 > 0.001) {
      // Project point onto the prev->next segment
      const px = x - prev.x;
      const pz = z - prev.z;
      const t = Math.max(0, Math.min(1, (px * segDx + pz * segDz) / segLen2));
      // t=0 means at prev, t=1 means at next, t=0.5 means at bestIdx
      // Convert to fractional index offset: t maps [0,1] to [prevIdx, nextIdx]
      const fractionalIdx = prevIdx + t * ((nextIdx - prevIdx + len) % len || len);
      return (fractionalIdx % len) / len;
    }
    return bestIdx / len;
  }, [trackPoints]);

  // Check if position is on track - returns { onTrack, nearestX, nearestZ, dist }
  const checkTrack = useCallback((x: number, z: number): { onTrack: boolean; nearestX: number; nearestZ: number; dist: number } => {
    let minDist = Infinity;
    let nearIdx = 0;
    for (let i = 0; i < trackPoints.length; i++) {
      const dx = x - trackPoints[i].x;
      const dz = z - trackPoints[i].z;
      const d = Math.sqrt(dx * dx + dz * dz);
      if (d < minDist) { minDist = d; nearIdx = i; }
    }
    return { onTrack: minDist < track.width / 2 + 2, nearestX: trackPoints[nearIdx].x, nearestZ: trackPoints[nearIdx].z, dist: minDist };
  }, [trackPoints, track.width]);

  // Check oil slick
  const checkOil = useCallback((x: number, z: number): boolean => {
    for (const s of track.oilSlicks) {
      const dx = x - s.x;
      const dz = z - s.z;
      if (Math.sqrt(dx * dx + dz * dz) < s.r) return true;
    }
    return false;
  }, [track.oilSlicks]);

  // Calculate race position using totalProgress with hysteresis to prevent flickering
  const lastPosRef = useRef(1);
  const posHoldTimer = useRef(0);
  const getPosition = useCallback((allRacers: RacerState[]): number => {
    const playerTotal = allRacers[0].totalProgress;
    let pos = 1;
    for (let i = 1; i < allRacers.length; i++) {
      // Use a small threshold: only count AI as ahead if clearly ahead
      if (allRacers[i].totalProgress > playerTotal + 0.002) pos++;
    }
    return pos;
  }, []);

  // Get turn sharpness at current position
  const getTurnSharpness = useCallback((progress: number): number => {
    const idx = Math.floor(progress * trackPoints.length) % trackPoints.length;
    const prev = trackPoints[(idx - 1 + trackPoints.length) % trackPoints.length];
    const curr = trackPoints[idx];
    const next = trackPoints[(idx + 1) % trackPoints.length];
    const v1x = curr.x - prev.x, v1z = curr.z - prev.z;
    const v2x = next.x - curr.x, v2z = next.z - curr.z;
    const cross = Math.abs(v1x * v2z - v1z * v2x);
    const dot = v1x * v2x + v1z * v2z;
    const len1 = Math.sqrt(v1x * v1x + v1z * v1z);
    const len2 = Math.sqrt(v2x * v2x + v2z * v2z);
    if (len1 < 0.01 || len2 < 0.01) return 0;
    return cross / (len1 * len2);
  }, [trackPoints]);

  useFrame((_, delta) => {
    if (finishedRef.current) return;
    const player = playerRef.current;

    // Camera follows player
    if (cameraModeRef.current === "overhead") {
      camera.position.lerp(new THREE.Vector3(player.x, 90, player.z), 0.06);
      camera.lookAt(player.x, 0, player.z);
    } else {
      const camDist = 14;
      const camH = 7;
      const camTx = player.x - Math.sin(player.angle) * camDist;
      const camTz = player.z - Math.cos(player.angle) * camDist;
      camera.position.lerp(new THREE.Vector3(camTx, camH, camTz), 0.08);
      camera.lookAt(player.x, 1, player.z);
    }

    if (!running) return; // Don't run game logic during countdown
    const dt = Math.min(delta, 0.05);
    timerRef.current += dt;
    const ais = aiRef.current;
    const keys = keysRef.current;
    const touch = touchRef.current;
    const hud = hudRef.current;

    // ── Player input ──
    let accelInput = 0, steerInput = 0;
    if (keys.has("w") || keys.has("ArrowUp") || keys.has("W")) accelInput = 1;
    if (keys.has("s") || keys.has("ArrowDown") || keys.has("S")) accelInput = -0.5;
    if (keys.has("a") || keys.has("ArrowLeft") || keys.has("A")) steerInput = 1;
    if (keys.has("d") || keys.has("ArrowRight") || keys.has("D")) steerInput = -1;

    if (touch.active) {
      const dx = touch.cx - touch.sx, dy = touch.cy - touch.sy;
      if (Math.sqrt(dx * dx + dy * dy) > 10) {
        accelInput = Math.max(-0.5, Math.min(1, -dy / 50));
        steerInput = Math.max(-1, Math.min(1, -dx / 50));
      }
    }

    // Oil slick effect
    const playerOnOil = checkOil(player.x, player.z);
    if (playerOnOil) { onOilRef.current = true; oilTimerRef.current = 1.5; }
    if (oilTimerRef.current > 0) oilTimerRef.current -= dt;
    else onOilRef.current = false;
    const handlingMult = onOilRef.current ? 0.3 : 1;
    hud.onOil = onOilRef.current;

    // Nitro
    let speedMult = 1;
    if (carType.canNitro && nitroActiveRef.current && hud.nitro > 0) {
      speedMult = NITRO_BOOST;
      hud.nitro = Math.max(0, hud.nitro - NITRO_DRAIN * dt);
    }
    hud.nitroActive = carType.canNitro && nitroActiveRef.current && hud.nitro > 0;

    // ── Player physics ──
    const pMaxSpd = player.maxSpeed * speedMult;
    player.speed += accelInput * player.accel * dt;
    player.speed *= 0.98;
    player.speed = Math.max(-pMaxSpd * 0.3, Math.min(pMaxSpd, player.speed));

    if (Math.abs(player.speed) > 1) {
      player.angle += steerInput * player.handling * handlingMult * dt * (player.speed > 0 ? 1 : -1);
    }

    // Apply push forces
    player.x += player.pushVx * dt;
    player.z += player.pushVz * dt;
    player.pushVx *= 0.9;
    player.pushVz *= 0.9;

    let nx = player.x + Math.sin(player.angle) * player.speed * dt;
    let nz = player.z + Math.cos(player.angle) * player.speed * dt;

    // Track boundary check - barriers bounce player back
    const trackCheck = checkTrack(nx, nz);
    if (!trackCheck.onTrack) {
      // Calculate bounce direction: push toward track center
      const toTrackX = trackCheck.nearestX - nx;
      const toTrackZ = trackCheck.nearestZ - nz;
      const toTrackDist = Math.sqrt(toTrackX * toTrackX + toTrackZ * toTrackZ);
      if (toTrackDist > 0.01) {
        const bounceForce = Math.abs(player.speed) * 0.8 + 5;
        player.pushVx += (toTrackX / toTrackDist) * bounceForce;
        player.pushVz += (toTrackZ / toTrackDist) * bounceForce;
      }
      player.speed *= -0.3; // reverse with speed loss
      nx = player.x;
      nz = player.z;
    }

    player.x = nx;
    player.z = nz;

    // Track progress & laps using totalProgress
    const newProg = getTrackProgress(player.x, player.z);
    const prevProg = player.trackProgress;
    let pDelta = newProg - prevProg;
    if (pDelta < -0.5) pDelta += 1; // crossed start line forward
    if (pDelta > 0.5) pDelta -= 1;  // went backward past start
    player.totalProgress += pDelta;
    player.trackProgress = newProg;

    // Lap detection from totalProgress
    const newLap = Math.floor(player.totalProgress);
    if (newLap > player.lap) {
      player.lap = newLap;
      if (player.lap >= track.laps) {
        finishedRef.current = true;
        const allRacers = [player, ...ais];
        const pos = getPosition(allRacers);
        onFinish(pos, timerRef.current);
        return;
      }
    }

    // Tilt based on turn sharpness and speed
    const turnSharp = getTurnSharpness(newProg);
    const targetTilt = steerInput * Math.min(0.15, turnSharp * Math.abs(player.speed) * 0.01);
    player.tilt += (targetTilt - player.tilt) * dt * 5;

    // ── AI Logic ──
    for (let i = 0; i < ais.length; i++) {
      const ai = ais[i];

      // Find target point with varying look-ahead and lane offset
      const lookAhead = 4 + ai.aggressive * 4 + ai.speed * 0.15;
      const targetIdx = Math.floor(ai.trackProgress * SEGS + lookAhead) % SEGS;
      const target = trackPoints[targetIdx];

      // Apply lane offset for route diversity
      const tgtT = curve.getTangentAt(targetIdx / SEGS);
      const tgtNorm = new THREE.Vector3(-tgtT.z, 0, tgtT.x).normalize();
      let laneShift = ai.laneOffset; // base lane position

      // ── Overtake logic: shift target position laterally when cars are ahead ──
      const aiFwdX = Math.sin(ai.angle);
      const aiFwdZ = Math.cos(ai.angle);
      const scanDist = 14 + ai.speed * 0.4;

      const checkCarAhead = (ox: number, oz: number) => {
        const ddx = ox - ai.x;
        const ddz = oz - ai.z;
        const dist = Math.sqrt(ddx * ddx + ddz * ddz);
        if (dist > 0.8 && dist < scanDist) {
          const dot = ddx * aiFwdX + ddz * aiFwdZ;
          if (dot > 0) { // car is ahead
            const cross = aiFwdX * ddz - aiFwdZ * ddx; // which side
            const closeness = Math.pow(1 - dist / scanDist, 1.5);
            // Shift lane to the opposite side of the blocking car
            // Stronger shift when closer, and proportional to track width
            const shiftAmount = closeness * 1.8;
            laneShift += (cross > 0 ? -shiftAmount : shiftAmount);
          }
        }
      };

      // Check all other AI cars
      for (let j = 0; j < ais.length; j++) {
        if (j !== i) checkCarAhead(ais[j].x, ais[j].z);
      }
      // Check player
      checkCarAhead(player.x, player.z);

      // Clamp lane shift so AI stays on track
      laneShift = Math.max(-1.2, Math.min(1.2, laneShift));

      // Build actual target position using shifted lane
      const offX = target.x + tgtNorm.x * laneShift * track.width * 0.35;
      const offZ = target.z + tgtNorm.z * laneShift * track.width * 0.35;

      const dxT = offX - ai.x;
      const dzT = offZ - ai.z;
      const angleToTarget = Math.atan2(dxT, dzT);

      // Steer toward target
      let angleDiff = angleToTarget - ai.angle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      ai.angle += angleDiff * ai.handling * dt;

      // Accelerate - nearly full power with minor variation
      const accelBoost = 1 + ai.aggressive * 0.2;
      const accelWobble = 0.92 + Math.random() * 0.08; // 92-100% throttle
      ai.speed += ai.accel * accelBoost * accelWobble * dt;
      ai.speed *= 0.982; // close to player drag (0.98)

      // Slow down for sharp turns
      const aiTurnSharp = getTurnSharpness(ai.trackProgress);
      if (aiTurnSharp > 0.3) {
        ai.speed *= (1 - aiTurnSharp * 0.3 * dt * 10);
      }
      ai.speed = Math.max(0, Math.min(ai.maxSpeed, ai.speed));

      // Apply push forces
      ai.x += ai.pushVx * dt;
      ai.z += ai.pushVz * dt;
      ai.pushVx *= 0.9;
      ai.pushVz *= 0.9;

      // Move - with barrier bounce
      let ax = ai.x + Math.sin(ai.angle) * ai.speed * dt;
      let az = ai.z + Math.cos(ai.angle) * ai.speed * dt;
      const aiTrackCheck = checkTrack(ax, az);
      if (!aiTrackCheck.onTrack) {
        const toX = aiTrackCheck.nearestX - ax;
        const toZ = aiTrackCheck.nearestZ - az;
        const toDist = Math.sqrt(toX * toX + toZ * toZ);
        if (toDist > 0.01) {
          const bForce = Math.abs(ai.speed) * 0.5 + 3;
          ai.pushVx += (toX / toDist) * bForce;
          ai.pushVz += (toZ / toDist) * bForce;
        }
        ai.speed *= 0.4;
      } else {
        ai.x = ax;
        ai.z = az;
      }

      // Track progress & laps using totalProgress
      const aiNewProg = getTrackProgress(ai.x, ai.z);
      let aiDelta = aiNewProg - ai.trackProgress;
      if (aiDelta < -0.5) aiDelta += 1;
      if (aiDelta > 0.5) aiDelta -= 1;
      ai.totalProgress += aiDelta;
      ai.trackProgress = aiNewProg;

      const aiNewLap = Math.floor(ai.totalProgress);
      if (aiNewLap > ai.lap) {
        ai.lap = aiNewLap;
      }

      // AI tilt
      const aiTargetTilt = angleDiff * Math.min(0.15, aiTurnSharp * ai.speed * 0.01);
      ai.tilt += (aiTargetTilt - ai.tilt) * dt * 5;

      // Update mesh
      const aiMesh = aiMeshRefs.current[i];
      if (aiMesh) {
        aiMesh.position.set(ai.x, 0.4, ai.z);
        aiMesh.rotation.y = ai.angle;
      }
    }

    // ── Car-to-car collisions ──
    const allCars = [player, ...ais];
    for (let a = 0; a < allCars.length; a++) {
      for (let b = a + 1; b < allCars.length; b++) {
        const ca = allCars[a];
        const cb = allCars[b];
        const dx = ca.x - cb.x;
        const dz = ca.z - cb.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < 3 && dist > 0.01) {
          // Push apart
          const pushForce = (3 - dist) * 15;
          const nx2 = dx / dist;
          const nz2 = dz / dist;
          ca.pushVx += nx2 * pushForce;
          ca.pushVz += nz2 * pushForce;
          cb.pushVx -= nx2 * pushForce;
          cb.pushVz -= nz2 * pushForce;

          // Aggressive AI bumps harder
          if (b > 0 && allCars[b].aggressive > 0.5) {
            ca.pushVx += nx2 * pushForce * allCars[b].aggressive;
            ca.pushVz += nz2 * pushForce * allCars[b].aggressive;
          }
          if (a > 0 && allCars[a].aggressive > 0.5) {
            cb.pushVx -= nx2 * pushForce * allCars[a].aggressive;
            cb.pushVz -= nz2 * pushForce * allCars[a].aggressive;
          }

          // Flip check for player (a===0 means player)
          if (a === 0 || b === 0) {
            const playerCar = a === 0 ? ca : cb;
            const impactSpeed = Math.abs(ca.speed) + Math.abs(cb.speed);
            const turnSharpHere = getTurnSharpness(playerCar.trackProgress);
            // Flip if: in a sharp turn AND strong impact
            if (turnSharpHere > 0.25 && impactSpeed > playerCar.maxSpeed * 0.6 && pushForce > 20) {
              playerCar.tilt = Math.PI * 0.5; // flip!
              finishedRef.current = true;
              onFlipped();
              return;
            }
          }
        }
      }
    }

    // ── Update external position refs (for minimap) ──
    playerPosRef.current.x = player.x;
    playerPosRef.current.z = player.z;
    playerPosRef.current.angle = player.angle;
    playerPosRef.current.speed = player.speed;
    const aisSnap = aiRef.current;
    if (aiPosRef.current.length !== aisSnap.length) {
      aiPosRef.current = aisSnap.map((a, i) => ({ x: a.x, z: a.z, color: AI_COLORS[i] }));
    } else {
      for (let i = 0; i < aisSnap.length; i++) {
        aiPosRef.current[i].x = aisSnap[i].x;
        aiPosRef.current[i].z = aisSnap[i].z;
      }
    }

    // ── Update HUD ──
    hud.speed = Math.abs(player.speed);
    hud.lap = player.lap + 1;
    hud.totalLaps = track.laps;
    hud.isDrifting = Math.abs(steerInput) > 0.4 && player.speed > 3;
    // Stabilize position display - only update if new position holds for a brief moment
    const rawPos = getPosition(allCars);
    if (rawPos !== lastPosRef.current) {
      posHoldTimer.current += dt;
      if (posHoldTimer.current > 0.3) { // position must be consistent for 0.3s before updating display
        lastPosRef.current = rawPos;
        posHoldTimer.current = 0;
      }
    } else {
      posHoldTimer.current = 0;
    }
    hud.position = lastPosRef.current;
    hud.totalRacers = allCars.length;
    hud.time = timerRef.current;
    hud.playerTilt = player.tilt;

    // ── Update player mesh ──
    if (playerMeshRef.current) {
      playerMeshRef.current.position.set(player.x, 0.4, player.z);
      playerMeshRef.current.rotation.y = player.angle;
    }
  });

  return (
    <>
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 100, 350]} />
      <ambientLight intensity={1.2} color="#8899cc" />
      <directionalLight position={[30, 50, 20]} intensity={2} color="#eef0ff" />
      <hemisphereLight args={["#6688cc", "#334466", 0.8]} />

      {/* Track road surface */}
      <TrackRoad curve={curve} width={track.width} segments={SEGS} />

      {/* Track barriers */}
      <TrackBarriers curve={curve} width={track.width} segments={SEGS} />

      {/* Oil slicks */}
      <OilSlicks slicks={track.oilSlicks} />

      {/* Start/Finish line */}
      <StartFinishLine curve={curve} width={track.width} />

      {/* Ground */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.05, 0]}>
        <planeGeometry args={[800, 800]} />
        <meshStandardMaterial color="#1a1a30" />
      </mesh>

      {/* Player car */}
      <group ref={playerMeshRef} position={[trackPoints[0].x, 0.4, trackPoints[0].z]}>
        <CarMesh color={carType.color} tilt={playerRef.current.tilt} />
        <spotLight position={[0, 0.5, 2]} target-position={[0, 0, 10]} angle={0.5} intensity={2} distance={20} color="#FFE4B5" />
      </group>

      {/* AI cars - positioned on starting grid */}
      {aiRef.current.map((ai, i) => (
        <group key={i} ref={(el: THREE.Group | null) => { aiMeshRefs.current[i] = el; }}
          position={[ai.x, 0.4, ai.z]} rotation={[0, ai.angle, 0]}>
          <CarMesh color={ai.color} tilt={ai.tilt} />
        </group>
      ))}

      {/* Tire walls on outer barriers */}
      <TireWalls curve={curve} width={track.width} segments={SEGS} />

      {/* Drift smoke */}
      <DriftSmoke3D hudRef={hudRef} playerPosRef={playerPosRef} />

      {/* Track-side lights */}
      {trackPoints.filter((_, i) => i % 15 === 0).map((p, i) => {
        const tangent = curve.getTangentAt(((i * 15) % SEGS) / SEGS);
        const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
        return (
          <group key={`light-${i}`}>
            <mesh position={[p.x + normal.x * (track.width / 2 + 3), 3, p.z + normal.z * (track.width / 2 + 3)]}>
              <cylinderGeometry args={[0.08, 0.08, 6, 4]} />
              <meshStandardMaterial color="#333344" />
            </mesh>
            <pointLight position={[p.x + normal.x * (track.width / 2 + 3), 6, p.z + normal.z * (track.width / 2 + 3)]} color="#8888FF" intensity={0.8} distance={18} />
          </group>
        );
      })}
    </>
  );
});

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function RacetrackPage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>("menu");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [countdown, setCountdown] = useState(3);
  const [finishPosition, setFinishPosition] = useState(1);
  const [finishTime, setFinishTime] = useState(0);
  const [cardSaved, setCardSaved] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [, setHudTick] = useState(0);
  const joystickKnobRef = useRef<HTMLDivElement>(null);

  const keysRef = useRef(new Set<string>());
  const touchRef = useRef({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const nitroActiveRef = useRef(false);
  const playerPosRef = useRef<{ x: number; z: number; angle: number; speed: number }>({ x: 0, z: 0, angle: 0, speed: 0 });
  const aiPosRef = useRef<{ x: number; z: number; color: string }[]>([]);
  const cameraModeRef = useRef<"chase" | "overhead">("chase");
  const [cameraMode, setCameraMode] = useState<"chase" | "overhead">("chase");
  const hudRef = useRef<RaceHud>({
    speed: 0, lap: 1, totalLaps: 2, position: 1, totalRacers: 7,
    nitro: NITRO_MAX, nitroActive: false, time: 0, onOil: false, playerTilt: 0, isDrifting: false,
  });

  const carType = useMemo(() => getCarType(getActiveCar()), []);
  const track = useMemo(() => generateTrack(selectedLevel), [selectedLevel]);
  const completedLevels = typeof window !== "undefined" ? getCompletedLevels() : [];

  // HUD refresh
  useEffect(() => {
    if (gameState !== "playing") return;
    const i = setInterval(() => setHudTick(t => t + 1), 100);
    return () => clearInterval(i);
  }, [gameState]);

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) { setGameState("playing"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, countdown]);

  // Keyboard
  useEffect(() => {
    const dn = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === " ") e.preventDefault();
      if ((e.key === "e" || e.key === "E" || e.key === "Shift") && carType.canNitro) {
        nitroActiveRef.current = !nitroActiveRef.current;
      }
    };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", dn);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, [carType]);

  // Card save
  useEffect(() => {
    if (gameState !== "reward" || cardSaved) return;
    // Position-based rarity: 1st = gold (guaranteed high), 2nd = silver, 3rd+ = lower
    const posScore = finishPosition === 1 ? 95 : finishPosition === 2 ? 75 : finishPosition === 3 ? 55 : Math.max(10, 50 - finishPosition * 5);
    const rarity = calculateRarity(posScore, 100, 1, false);

    saveCard({
      id: generateCardId(),
      game: "racetrack",
      theme: `race-${selectedLevel}-p${finishPosition}`,
      rarity,
      score: posScore,
      total: 100,
      date: new Date().toISOString(),
    });
    incrementTotalGames();
    updateStats({});

    // Win streak for legendary
    if (finishPosition === 1) {
      markLevelComplete(selectedLevel);
      const streak = getWinStreak() + 1;
      setWinStreak(streak);
    } else {
      setWinStreak(0);
    }

    setCardSaved(true);
  }, [gameState, cardSaved, finishPosition, selectedLevel]);

  const startLevel = (lvl: number) => {
    setSelectedLevel(lvl);
    setCountdown(3);
    setCardSaved(false);
    hudRef.current = { speed: 0, lap: 1, totalLaps: track.laps, position: 1, totalRacers: 7, nitro: NITRO_MAX, nitroActive: false, time: 0, onOil: false, playerTilt: 0, isDrifting: false };
    nitroActiveRef.current = false;
    setGameState("countdown");
  };

  const handleFinish = useCallback((position: number, time: number) => {
    setFinishPosition(position);
    setFinishTime(time);
    setGameState("complete");
  }, []);

  const handleFlipped = useCallback(() => {
    setGameState("flipped");
  }, []);

  const posLabel = finishPosition === 1 ? "1st" : finishPosition === 2 ? "2nd" : finishPosition === 3 ? "3rd" : `${finishPosition}th`;
  const posColor = finishPosition === 1 ? "#FFD700" : finishPosition === 2 ? "#C0C0C0" : finishPosition === 3 ? "#CD7F32" : "#888";
  const cardType = finishPosition === 1 ? "GOLD" : finishPosition === 2 ? "SILVER" : finishPosition === 3 ? "BRONZE" : "COMMON";

  const posScore = finishPosition === 1 ? 95 : finishPosition === 2 ? 75 : finishPosition === 3 ? 55 : Math.max(10, 50 - finishPosition * 5);
  const rarity = useMemo(() => calculateRarity(posScore, 100, 1, false), [posScore]);
  const winStreak = typeof window !== "undefined" ? getWinStreak() : 0;

  const hud = hudRef.current;

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden select-none" style={{ touchAction: "none" }}>

      {/* ═══ LEVEL SELECT MENU ═══ */}
      {gameState === "menu" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center overflow-y-auto pb-8">
          <div className="w-full max-w-md px-4 pt-6">
            <div className="flex items-center justify-between mb-6">
              <Link href="/">
                <motion.div className="bg-white/5 border border-white/8 p-2.5 rounded-xl cursor-pointer" whileTap={{ scale: 0.9 }}>
                  <ArrowLeft size={18} className="text-white/60" />
                </motion.div>
              </Link>
              <h1 className="text-white font-black text-xl tracking-wide flex items-center gap-2">
                <Trophy size={20} className="text-[#BB44FF]" /> RACE TRACK
              </h1>
              <div className="text-white/30 text-xs font-bold">{carType.name}</div>
            </div>

            {/* Car info */}
            <div className="bg-white/[0.03] border border-[#BB44FF]/20 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${carType.color}20` }}>
                  <div className="text-lg">🏎️</div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">{carType.name}</div>
                  <div className="text-white/30 text-[10px]">
                    {Math.round(carType.maxSpeed * 3.6)} km/h
                    {carType.canDrift ? " | Drift" : ""}
                    {carType.canNitro ? " | Nitro" : ""}
                  </div>
                </div>
                {winStreak >= 1 && (
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-2 py-1">
                    <div className="text-yellow-400 text-[10px] font-black">🔥 {winStreak} STREAK</div>
                  </div>
                )}
              </div>
            </div>

            {/* Level grid */}
            <div className="grid grid-cols-4 gap-2.5">
              {Array.from({ length: 20 }, (_, i) => {
                const lvl = i + 1;
                const completed = completedLevels.includes(lvl);
                const unlocked = lvl === 1 || completedLevels.includes(lvl - 1);
                const trackDef = generateTrack(lvl);
                return (
                  <motion.button key={lvl} onClick={() => unlocked && startLevel(lvl)}
                    className={`relative aspect-square rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition-all ${
                      completed ? "bg-[#BB44FF]/10 border-[#BB44FF]/30" :
                      unlocked ? "bg-white/[0.04] border-white/10" :
                      "bg-white/[0.02] border-white/5 opacity-40"
                    }`}
                    whileTap={unlocked ? { scale: 0.95 } : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: unlocked ? 1 : 0.4, scale: 1 }}
                    transition={{ delay: i * 0.02 }}>
                    {unlocked ? (
                      <>
                        <span className="text-white font-black text-lg">{lvl}</span>
                        <span className="text-white/20 text-[7px] leading-tight">{trackDef.laps}L</span>
                        {completed && <Check size={10} className="text-[#BB44FF]" />}
                      </>
                    ) : (
                      <Lock size={16} className="text-white/20" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Progress */}
            <div className="mt-4 bg-white/[0.03] border border-white/5 rounded-xl p-3">
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-[10px] font-bold">PROGRESS</span>
                <span className="text-white/50 text-xs font-black">{completedLevels.length}/20</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-2">
                <div className="h-full rounded-full bg-[#BB44FF]/60 transition-all" style={{ width: `${(completedLevels.length / 20) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ GAME CANVAS ═══ */}
      {(gameState === "playing" || gameState === "countdown") && (
        <>
          <Canvas camera={{ fov: 65, near: 0.1, far: 400, position: [0, 8, 20] }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
            <RaceScene track={track} carType={carType} running={gameState === "playing"} onFinish={handleFinish} onFlipped={handleFlipped} hudRef={hudRef} nitroActiveRef={nitroActiveRef} keysRef={keysRef} touchRef={touchRef} playerPosRef={playerPosRef} aiPosRef={aiPosRef} cameraModeRef={cameraModeRef} />
          </Canvas>

          {/* HUD overlay */}
          {gameState === "playing" && (
            <div className="absolute inset-0 z-10 pointer-events-none">

              {/* Nitro glow screen edge */}
              {hud.nitroActive && (
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 80px rgba(255,102,0,0.45)", borderRadius: 0 }} />
              )}
              {/* Drift smoke indicator */}
              {hud.isDrifting && (
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(180,180,180,0.12)" }} />
              )}

              {/* TOP BAR – Lap + Time */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-2xl px-5 py-2 border border-[#BB44FF]/30 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-[#BB44FF] font-black text-[9px] tracking-widest">LAP</div>
                  <div className="text-white font-black text-xl leading-none">{hud.lap}<span className="text-xs text-white/30">/{hud.totalLaps}</span></div>
                </div>
                <div className="w-px h-7 bg-white/10" />
                <div className="text-center">
                  <div className="text-white/30 font-bold text-[9px] tracking-widest">TIME</div>
                  <div className="text-white/70 font-black text-lg leading-none tabular-nums">{hud.time.toFixed(1)}s</div>
                </div>
              </div>

              {/* POSITION – top left, big, animated pop on change */}
              <div className="absolute top-3 left-14 flex flex-col items-center">
                <div className="text-[9px] font-black text-[#BB44FF]/70 tracking-widest">POS</div>
                <motion.div
                  key={hud.position}
                  initial={{ scale: 1.6, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="font-black text-4xl leading-none"
                  style={{ color: hud.position === 1 ? "#FFD700" : hud.position === 2 ? "#C0C0C0" : hud.position === 3 ? "#CD7F32" : "#aaaaaa" }}
                >
                  {hud.position === 1 ? "P1" : hud.position === 2 ? "P2" : hud.position === 3 ? "P3" : `P${hud.position}`}
                </motion.div>
                <div className="text-[9px] font-bold leading-none -mt-0.5" style={{ color: hud.position === 1 ? "#FFD700" : hud.position === 2 ? "#C0C0C0" : hud.position === 3 ? "#CD7F32" : "#666" }}>
                  {hud.position === 1 ? "1st" : hud.position === 2 ? "2nd" : hud.position === 3 ? "3rd" : `${hud.position}th`}
                </div>
              </div>

              {/* Mini-map – top right, below close button */}
              <div className="absolute top-3 right-3 pointer-events-none flex flex-col items-end gap-1">
                <MiniMap track={track} playerPosRef={playerPosRef} aiPosRef={aiPosRef} />
                {/* Camera toggle – sits below mini-map */}
                <button onClick={() => { const next = cameraMode === "chase" ? "overhead" : "chase"; setCameraMode(next); cameraModeRef.current = next; }}
                  className="bg-black/70 border border-white/20 rounded-xl p-2 pointer-events-auto active:scale-95 transition-all flex items-center gap-1.5">
                  <Eye size={12} className="text-white/60" />
                  <span className="text-white/50 text-[10px] font-bold">{cameraMode === "chase" ? "CHASE" : "TOP"}</span>
                </button>
              </div>

              {/* Oil slick warning */}
              {hud.onOil && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-yellow-900/80 rounded-lg px-3 py-1 border border-yellow-500/40">
                  <div className="text-yellow-400 font-black text-xs animate-pulse">⚠ OIL SLICK!</div>
                </div>
              )}

              {/* Speed gauge – bottom center */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-auto">
                <SpeedGauge
                  speed={hud.speed}
                  maxSpeed={carType.maxSpeed}
                  nitroActive={hud.nitroActive}
                  nitro={hud.nitro}
                  canNitro={carType.canNitro}
                  onNitroToggle={() => { nitroActiveRef.current = !nitroActiveRef.current; }}
                />
              </div>

              {/* Back button */}
              <button onClick={() => router.push("/")}
                className="absolute top-3 left-3 bg-black/70 border border-white/20 rounded-xl p-2.5 pointer-events-auto active:scale-95 transition-all z-30">
                <ArrowLeft size={16} className="text-white/60" />
              </button>

              {/* Menu button */}
              <button onClick={() => setGameState("menu")}
                className="absolute top-14 left-3 bg-black/70 border border-white/20 rounded-xl px-2.5 py-1.5 pointer-events-auto z-30">
                <span className="text-white/50 font-bold text-[10px]">MENU</span>
              </button>

              <div className="absolute bottom-3 left-3 text-[9px] text-white/15">
                WASD{carType.canNitro ? " | E: NOS" : ""} | Lvl {selectedLevel}
              </div>
            </div>
          )}

          {/* Touch controls */}
          {gameState === "playing" && (
            <>
              <div className="absolute left-4 bottom-4 z-20" style={{ width: 140, height: 140 }}
                onTouchStart={e => { e.preventDefault(); const t = e.touches[0]; const rect = e.currentTarget.getBoundingClientRect(); const cx = rect.left + 70, cy = rect.top + 70; touchRef.current = { active: true, sx: cx, sy: cy, cx: t.clientX, cy: t.clientY }; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'none'; knob.style.left = `${42 + (t.clientX - cx)}px`; knob.style.top = `${42 + (t.clientY - cy)}px`; } }}
                onTouchMove={e => { e.preventDefault(); const t = e.touches[0]; touchRef.current.cx = t.clientX; touchRef.current.cy = t.clientY; const dx = t.clientX - touchRef.current.sx, dy = t.clientY - touchRef.current.sy; const d = Math.sqrt(dx*dx+dy*dy); const max = 50; const clamp = d > max ? max / d : 1; const knob = joystickKnobRef.current; if (knob) { knob.style.left = `${42 + dx * clamp}px`; knob.style.top = `${42 + dy * clamp}px`; } }}
                onTouchEnd={() => { touchRef.current.active = false; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'all 0.15s'; knob.style.left = '42px'; knob.style.top = '42px'; } }}>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-white/5" />
                <div ref={joystickKnobRef} className="absolute w-14 h-14 rounded-full bg-white/30 border-2 border-white/50" style={{ left: 42, top: 42 }} />
              </div>
              {carType.canNitro && (
                <button className="absolute right-4 bottom-4 rounded-full z-20 flex items-center justify-center text-xs font-black active:scale-95"
                  style={{ width: 56, height: 56, backgroundColor: nitroActiveRef.current ? "rgba(255,102,0,0.5)" : "rgba(0,200,255,0.3)", borderWidth: 2, borderColor: nitroActiveRef.current ? "rgba(255,102,0,0.7)" : "rgba(0,200,255,0.5)" }}
                  onTouchStart={e => { e.preventDefault(); nitroActiveRef.current = !nitroActiveRef.current; }}>
                  <span style={{ color: nitroActiveRef.current ? "#FF8800" : "#66DDFF" }}>NOS</span>
                </button>
              )}
            </>
          )}
        </>
      )}

      {/* ═══ COUNTDOWN - TRAFFIC LIGHT ═══ */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col items-center gap-3">
              {/* Traffic light housing */}
              <motion.div className="bg-[#1a1a2e]/95 border-2 border-white/15 rounded-3xl p-5 flex flex-col items-center gap-3 shadow-2xl backdrop-blur-sm"
                initial={{ scale: 0.5, y: -30 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 12 }}>
                {/* Red light */}
                <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                  countdown >= 3 ? "bg-red-500 border-red-400" : "bg-red-500/10 border-white/10"
                }`} style={countdown >= 3 ? { boxShadow: "0 0 30px rgba(239,68,68,0.8), 0 0 60px rgba(239,68,68,0.4)" } : {}} />
                {/* Yellow light */}
                <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                  countdown === 2 ? "bg-yellow-400 border-yellow-300" : "bg-yellow-500/10 border-white/10"
                }`} style={countdown === 2 ? { boxShadow: "0 0 30px rgba(250,204,21,0.8), 0 0 60px rgba(250,204,21,0.4)" } : {}} />
                {/* Green light */}
                <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                  countdown <= 1 ? "bg-green-500 border-green-400" : "bg-green-500/10 border-white/10"
                }`} style={countdown <= 1 ? { boxShadow: "0 0 30px rgba(34,197,94,0.8), 0 0 60px rgba(34,197,94,0.4)" } : {}} />
              </motion.div>
              {/* Text labels */}
              <motion.div key={countdown} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className={`font-black text-3xl mt-1 ${
                  countdown >= 3 ? "text-red-400" : countdown === 2 ? "text-yellow-400" : "text-green-400"
                }`}>
                {countdown >= 3 ? "READY" : countdown === 2 ? "SET" : "GO!"}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ RACE COMPLETE – PODIUM ═══ */}
      <AnimatePresence>
        {gameState === "complete" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/92 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="w-full max-w-sm bg-[#0d1117] border rounded-3xl p-6 text-center"
              style={{ borderColor: `${posColor}33` }}
              initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>

              <div className="text-3xl mb-1">🏁</div>
              <h2 className="text-white font-black text-xl mb-4">Race Complete!</h2>

              {/* Podium */}
              <div className="flex items-end justify-center gap-2 mb-5">
                {/* 2nd */}
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-1">🥈</div>
                  <div className={`w-16 rounded-t-lg flex items-end justify-center pb-1 ${finishPosition === 2 ? "ring-2 ring-silver" : ""}`}
                    style={{ height: 52, background: finishPosition === 2 ? "rgba(192,192,192,0.25)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="text-white/60 font-black text-sm">2nd</span>
                  </div>
                </div>
                {/* 1st */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-1">🥇</div>
                  <div className={`w-20 rounded-t-lg flex items-end justify-center pb-1 ${finishPosition === 1 ? "ring-2 ring-yellow-400" : ""}`}
                    style={{ height: 72, background: finishPosition === 1 ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="text-white/60 font-black text-sm">1st</span>
                  </div>
                </div>
                {/* 3rd */}
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-1">🥉</div>
                  <div className={`w-16 rounded-t-lg flex items-end justify-center pb-1 ${finishPosition === 3 ? "ring-2 ring-orange-400" : ""}`}
                    style={{ height: 36, background: finishPosition === 3 ? "rgba(205,127,50,0.25)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="text-white/60 font-black text-sm">3rd</span>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="font-black text-5xl mb-1" style={{ color: posColor }}>{posLabel}</div>
              <div className="text-white/30 text-xs mb-3">of 7 racers · {finishTime.toFixed(1)}s</div>
              <div className="text-sm font-black mb-1" style={{ color: posColor }}>{cardType} CARD</div>

              {winStreak >= 3 && finishPosition === 1 && (
                <div className="mt-2 mb-2 bg-purple-500/10 border border-purple-500/30 rounded-xl px-3 py-1.5">
                  <div className="text-purple-400 font-black text-xs">⚡ LEGENDARY! {winStreak} wins in a row!</div>
                </div>
              )}

              <div className="flex gap-3 mt-4">
                <button onClick={() => setGameState("reward")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#BB44FF] to-[#8800FF]">
                  View Card
                </button>
                <button onClick={() => setGameState("menu")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10">
                  Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ FLIPPED (CRASHED) ═══ */}
      <AnimatePresence>
        {gameState === "flipped" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="w-full max-w-sm bg-[#0d1117] border border-red-500/20 rounded-3xl p-6 text-center"
              initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-4xl mb-2">🔥</div>
              <h2 className="text-red-400 font-black text-2xl">Car Flipped!</h2>
              <p className="text-white/40 text-sm mt-2">You got knocked over in a sharp turn!</p>
              <div className="flex gap-3 mt-5">
                <button onClick={() => startLevel(selectedLevel)}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-500 to-orange-500 active:scale-95">
                  Retry
                </button>
                <button onClick={() => router.push("/")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10 active:scale-95">
                  Back to City
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ REWARD REVEAL ═══ */}
      {gameState === "reward" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/95 p-4">
          <RewardReveal rarity={rarity} game="racetrack" score={posScore} total={100}
            onDone={() => { setGameState("menu"); setShowMilestone(true); }} />
        </div>
      )}

      {showMilestone && <MilestonePopup />}
    </div>
  );
}
