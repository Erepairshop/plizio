"use client";

import React, { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Check,
  Trash2,
  Lock,
  Star,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCw,
  Move,
} from "lucide-react";
import RoomRenderer from "@/components/room/RoomRenderer";
import { FURNITURE_DEFS, getFurnitureDef } from "@/components/room/FurnitureRegistry";
import {
  getOwnedRooms,
  getRoomFurniture,
  saveRoomFurniture,
  getOwnedFurniture,
  buyFurniture,
  buyRoom,
  ownsRoom,
  getRoomSize,
  getRoomLevel,
  getNextUpgrade,
  upgradeRoom,
  type PlacedFurniture,
} from "@/lib/room";
import { getSpecialCardCount, spendSpecialCards } from "@/lib/specialCards";
import { useLang } from "@/components/LanguageProvider";
import dynamic from "next/dynamic";
import { getInteractionsForFurniture, INTERACTION_NAMES, type FurnitureInteraction } from "@/lib/roomInteractions";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import type { AvatarCompanionProps } from "@/components/AvatarCompanion";
import { gridToScreen, TILE_W, TILE_H } from "@/components/room/IsoRoom";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion").then(m => ({ default: m.default })), { ssr: false });

// ─── Room definitions ───
interface RoomDef {
  id: string;
  nameKey: string;
  gridW: number;
  gridH: number;
  price: number;
  icon: string;
}

const ROOMS: RoomDef[] = [
  { id: "bedroom", nameKey: "bedroom", gridW: 6, gridH: 6, price: 0, icon: "🛏️" },
  { id: "living", nameKey: "living", gridW: 7, gridH: 7, price: 30, icon: "🛋️" },
  { id: "kitchen", nameKey: "kitchen", gridW: 5, gridH: 6, price: 25, icon: "🍳" },
  { id: "bathroom", nameKey: "bathroom", gridW: 5, gridH: 5, price: 20, icon: "🛁" },
  { id: "garden", nameKey: "garden", gridW: 8, gridH: 8, price: 40, icon: "🌿" },
];

const T: Record<string, Record<string, string>> = {
  en: {
    bedroom: "Bedroom",
    living: "Living Room",
    kitchen: "Kitchen",
    bathroom: "Bathroom",
    garden: "Garden",
    myRoom: "My Room",
    edit: "Edit",
    done: "Done",
    furniture: "Furniture",
    buy: "Buy",
    place: "Place",
    locked: "Locked",
    buyRoom: "Buy Room",
    owned: "Owned",
    remove: "Remove",
    rotate: "Rotate",
    move: "Move",
    tapToMove: "Tap a spot to move here",
    empty: "Tap a spot to place furniture",
    noFurniture: "No furniture yet! Buy some in edit mode.",
    stars: "stars",
    notEnough: "Not enough stars!",
    overlap: "Can't place here — occupied!",
    confirm: "Confirm purchase?",
    yes: "Yes",
    no: "No",
  },
  hu: {
    bedroom: "Hálószoba",
    living: "Nappali",
    kitchen: "Konyha",
    bathroom: "Fürdő",
    garden: "Kert",
    myRoom: "Szobám",
    edit: "Szerkesztés",
    done: "Kész",
    furniture: "Bútorok",
    buy: "Megvesz",
    place: "Elhelyez",
    locked: "Zárolva",
    buyRoom: "Szoba vásárlás",
    owned: "Megvan",
    remove: "Törlés",
    rotate: "Forgatás",
    move: "Mozgatás",
    tapToMove: "Koppints a célhelyre",
    empty: "Koppints egy helyre a bútor elhelyezéséhez",
    noFurniture: "Még nincs bútor! Vegyél a szerkesztő módban.",
    stars: "csillag",
    notEnough: "Nincs elég csillagod!",
    overlap: "Ide nem helyezhető — foglalt!",
    confirm: "Megveszed?",
    yes: "Igen",
    no: "Nem",
  },
  de: {
    bedroom: "Schlafzimmer",
    living: "Wohnzimmer",
    kitchen: "Küche",
    bathroom: "Badezimmer",
    garden: "Garten",
    myRoom: "Mein Zimmer",
    edit: "Bearbeiten",
    done: "Fertig",
    furniture: "Möbel",
    buy: "Kaufen",
    place: "Platzieren",
    locked: "Gesperrt",
    buyRoom: "Raum kaufen",
    owned: "Besitzt",
    remove: "Entfernen",
    rotate: "Drehen",
    move: "Bewegen",
    tapToMove: "Tippe auf einen Platz",
    empty: "Tippe auf eine Stelle, um Möbel zu platzieren",
    noFurniture: "Noch keine Möbel! Kaufe welche im Bearbeitungsmodus.",
    stars: "Sterne",
    notEnough: "Nicht genug Sterne!",
    overlap: "Platz belegt!",
    confirm: "Kaufen?",
    yes: "Ja",
    no: "Nein",
  },
  ro: {
    bedroom: "Dormitor",
    living: "Living",
    kitchen: "Bucătărie",
    bathroom: "Baie",
    garden: "Grădină",
    myRoom: "Camera mea",
    edit: "Editare",
    done: "Gata",
    furniture: "Mobilier",
    buy: "Cumpără",
    place: "Plasează",
    locked: "Blocat",
    buyRoom: "Cumpără camera",
    owned: "Deținut",
    remove: "Șterge",
    rotate: "Rotește",
    move: "Mută",
    tapToMove: "Atinge un loc pentru a muta",
    empty: "Atinge un loc pentru a plasa mobilierul",
    noFurniture: "Niciun mobilier încă! Cumpără din modul de editare.",
    stars: "stele",
    notEnough: "Nu ai destule stele!",
    overlap: "Loc ocupat!",
    confirm: "Cumperi?",
    yes: "Da",
    no: "Nu",
  },
};

// ─── Day/Night cycle ───
function getDayNightAlpha(): number {
  const h = new Date().getHours();
  if (h >= 7 && h < 12) return 0.5;
  if (h >= 12 && h < 17) return 0.4;
  if (h >= 17 && h < 20) return 0.25;
  if (h >= 20 && h < 23) return 0.1;
  if (h >= 23 || h < 5) return 0.05;
  return 0.3; // dawn 5-7
}

// ─── Walking constants ───
const MS_PER_CELL = 250; // ms per grid cell (speed of walk)

// Merge consecutive same-direction A* steps into smooth segments
type WalkSegment = { end: { gx: number; gy: number }; length: number; facing: 'se' | 'sw' | 'ne' | 'nw' };
function simplifyPath(pts: Array<{ gx: number; gy: number }>): WalkSegment[] {
  if (pts.length < 2) return [];
  const segs: WalkSegment[] = [];
  let start = pts[0];
  for (let i = 1; i < pts.length; i++) {
    const isLast = i === pts.length - 1;
    const d1x = Math.sign(pts[i].gx - pts[i - 1].gx);
    const d1y = Math.sign(pts[i].gy - pts[i - 1].gy);
    const d2x = isLast ? -999 : Math.sign(pts[i + 1].gx - pts[i].gx);
    const d2y = isLast ? -999 : Math.sign(pts[i + 1].gy - pts[i].gy);
    if (isLast || d1x !== d2x || d1y !== d2y) {
      segs.push({
        end: pts[i],
        length: Math.abs(pts[i].gx - start.gx) + Math.abs(pts[i].gy - start.gy),
        facing: calcFacing(start.gx, start.gy, pts[i].gx, pts[i].gy),
      });
      start = pts[i];
    }
  }
  return segs;
}

// ─── Facing direction ───
function calcFacing(fromGx: number, fromGy: number, toGx: number, toGy: number): 'se' | 'sw' | 'ne' | 'nw' {
  const dx = toGx - fromGx;
  const dy = toGy - fromGy;
  if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? 'se' : 'nw';
  return dy >= 0 ? 'sw' : 'ne';
}

// ─── A* pathfinding ───
function aStarPath(
  sx: number, sy: number,
  ex: number, ey: number,
  gridW: number, gridH: number,
  isBlocked: (gx: number, gy: number) => boolean
): Array<{ gx: number; gy: number }> {
  type Node = { gx: number; gy: number; g: number; f: number; parent: Node | null };
  const key = (x: number, y: number) => `${x},${y}`;
  const h = (x: number, y: number) => Math.abs(x - ex) + Math.abs(y - ey);
  const start: Node = { gx: sx, gy: sy, g: 0, f: h(sx, sy), parent: null };
  const open: Node[] = [start];
  const closed = new Set<string>();
  const best = new Map<string, number>();
  best.set(key(sx, sy), 0);
  const DIRS = [{ dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }];

  while (open.length > 0) {
    let bi = 0;
    for (let i = 1; i < open.length; i++) if (open[i].f < open[bi].f) bi = i;
    const cur = open.splice(bi, 1)[0];
    const ck = key(cur.gx, cur.gy);
    if (closed.has(ck)) continue;
    closed.add(ck);
    if (cur.gx === ex && cur.gy === ey) {
      const path: Array<{ gx: number; gy: number }> = [];
      let n: Node | null = cur;
      while (n) { path.unshift({ gx: n.gx, gy: n.gy }); n = n.parent; }
      return path.slice(1);
    }
    for (const { dx, dy } of DIRS) {
      const nx = cur.gx + dx, ny = cur.gy + dy;
      const nk = key(nx, ny);
      if (nx < 0 || ny < 0 || nx >= gridW || ny >= gridH) continue;
      if (closed.has(nk) || isBlocked(nx, ny)) continue;
      const g = cur.g + 1;
      if ((best.get(nk) ?? Infinity) <= g) continue;
      best.set(nk, g);
      open.push({ gx: nx, gy: ny, g, f: g + h(nx, ny), parent: cur });
    }
  }
  return [];
}

// ─── Avatar in Room component ───
interface AvatarInRoomProps {
  roomContainerRef: React.RefObject<HTMLDivElement | null>;
  avatarGridPos: { gx: number; gy: number };
  roomSize: { gridW: number; gridH: number };
  zoom: number;
  pan: { x: number; y: number };
  mood: AvatarCompanionProps["mood"];
  reaction: { reaction: "wave" | "dance" | "spin" | "happy" | "surprised" | "confused" | "laughing" | "victory" | null; timestamp: number };
  isWalking: boolean;
  walkTransitionMs: number;
  facing: 'se' | 'sw' | 'ne' | 'nw';
  activeInteraction: string | null;
  gender: AvatarGender;
  activeSkin: ReturnType<typeof getSkinDef> | null;
  activeFace: ReturnType<typeof getFaceDef> | null;
  activeTop: ReturnType<typeof getTopDef> | null;
  activeBottom: ReturnType<typeof getBottomDef> | null;
  activeShoe: ReturnType<typeof getShoeDef> | null;
  activeCape: ReturnType<typeof getCapeDef> | null;
  activeGlasses: ReturnType<typeof getGlassesDef> | null;
  activeGloves: ReturnType<typeof getGloveDef> | null;
  activeHat: ReturnType<typeof getHatDef> | null;
  activeTrail: ReturnType<typeof getTrailDef> | null;
}

function AvatarInRoom({
  roomContainerRef,
  avatarGridPos,
  roomSize,
  zoom,
  pan,
  mood,
  reaction,
  isWalking,
  walkTransitionMs,
  facing,
  activeInteraction,
  gender,
  activeSkin,
  activeFace,
  activeTop,
  activeBottom,
  activeShoe,
  activeCape,
  activeGlasses,
  activeGloves,
  activeHat,
  activeTrail,
}: AvatarInRoomProps) {
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate avatar position based on SVG grid
  // useLayoutEffect runs synchronously after DOM mutations → no pan/zoom lag
  useLayoutEffect(() => {
    const update = () => {
      const svg = roomContainerRef.current?.querySelector("svg");
      const container = roomContainerRef.current;
      if (!svg || !container) return;

      const svgRect = svg.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const viewBox = svg.viewBox.baseVal;

      const oX = roomSize.gridH * (TILE_W / 2) + 20;
      const oY = 120;
      const { x: sx, y: sy } = gridToScreen(avatarGridPos.gx, avatarGridPos.gy, oX, oY);

      // SVG coord → DOM coord (relative to container)
      const domX = svgRect.left + (sx / viewBox.width) * svgRect.width - containerRect.left;
      const domY = svgRect.top + (sy / viewBox.height) * svgRect.height - containerRect.top;

      setPos({ left: domX, top: domY });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [avatarGridPos, roomSize, roomContainerRef, zoom, pan]);

  const baseAvatarSize = 60; // px at zoom=1
  const avatarSize = baseAvatarSize * zoom;

  return (
    <div
      ref={containerRef}
      className="absolute pointer-events-none z-20"
      style={{
        left: pos.left - avatarSize / 2,
        top: pos.top - avatarSize * 0.75,
        width: avatarSize,
        height: avatarSize,
        transition: walkTransitionMs > 0 ? `left ${walkTransitionMs}ms linear, top ${walkTransitionMs}ms linear` : "none",
      }}
    >
      <div className="w-full h-full">
        <AvatarCompanion
          fixed={false}
          mood={mood}
          isWalking={isWalking}
          facing={facing}
          gender={gender}
          activeSkin={activeSkin}
          activeFace={activeFace}
          activeTop={activeTop}
          activeBottom={activeBottom}
          activeShoe={activeShoe}
          activeCape={activeCape}
          activeGlasses={activeGlasses}
          activeGloves={activeGloves}
          activeHat={activeHat}
          activeTrail={activeTrail}
          jumpTrigger={reaction}
        />
      </div>
      {/* Walking indicator */}
      {isWalking && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
          <div className="w-1 h-1 rounded-full bg-white/30 animate-pulse" />
        </div>
      )}
    </div>
  );
}

// ─── Main component ───
export default function RoomPage() {
  const { lang } = useLang();
  const t = T[lang] || T.en;

  // State
  const [currentRoomIdx, setCurrentRoomIdx] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [furniture, setFurniture] = useState<PlacedFurniture[]>([]);
  const [ownedRooms, setOwnedRooms] = useState<string[]>(["bedroom"]);
  const [ownedFurnitureIds, setOwnedFurnitureIds] = useState<string[]>([]);
  const [stars, setStars] = useState(0);
  const [selectedFurnitureId, setSelectedFurnitureId] = useState<string | null>(null);
  const [selectedPlacedIdx, setSelectedPlacedIdx] = useState<number | null>(null);
  const [movingIdx, setMovingIdx] = useState<number | null>(null);
  const [windowAlpha, setWindowAlpha] = useState(0.3);
  const [confirmBuy, setConfirmBuy] = useState<{ type: "room" | "furniture"; id: string; price: number } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // ─── Avatar state ───
  const [gender] = useState<AvatarGender>(() => (typeof window !== "undefined" ? getGender() : "male") as AvatarGender);
  const [activeSkin] = useState(() => typeof window !== "undefined" ? getSkinDef(getActiveSkin()) : null);
  const [activeFace] = useState(() => typeof window !== "undefined" ? getFaceDef(getActiveFace()) : null);
  const [activeTop] = useState(() => { if (typeof window === "undefined") return null; const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { if (typeof window === "undefined") return null; const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { if (typeof window === "undefined") return null; const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { if (typeof window === "undefined") return null; const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { if (typeof window === "undefined") return null; const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { if (typeof window === "undefined") return null; const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { if (typeof window === "undefined") return null; const id = getActiveHat(); return id ? getHatDef(id) : null; });
  const [activeTrail] = useState(() => { if (typeof window === "undefined") return null; const id = getActiveTrail(); return id ? getTrailDef(id) : null; });

  const [avatarGridPos, setAvatarGridPos] = useState({ gx: 3, gy: 3 });
  const avatarGridPosRef = useRef({ gx: 3, gy: 3 });
  const [avatarMood, setAvatarMood] = useState<AvatarCompanionProps["mood"]>("idle");
  const [avatarFacing, setAvatarFacing] = useState<'se' | 'sw' | 'ne' | 'nw'>('se');
  const [avatarReaction, setAvatarReaction] = useState<{ reaction: "wave" | "dance" | "spin" | "happy" | "surprised" | "confused" | "laughing" | "victory" | null; timestamp: number }>({ reaction: null, timestamp: 0 });
  const [isWalking, setIsWalking] = useState(false);
  const [walkTransitionMs, setWalkTransitionMs] = useState(0);
  const walkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Build set of blocked grid cells from placed furniture
  const buildBlockedSet = useCallback(() => {
    const blocked = new Set<string>();
    furniture.forEach(placed => {
      const def = getFurnitureDef(placed.furnitureId);
      if (!def) return;
      for (let x = placed.gridX; x < placed.gridX + def.gridW; x++)
        for (let y = placed.gridY; y < placed.gridY + def.gridH; y++)
          blocked.add(`${x},${y}`);
    });
    return blocked;
  }, [furniture]);

  // Smooth segment-based walk: glides through each straight segment in one CSS transition
  const startWalkPath = useCallback((
    path: Array<{ gx: number; gy: number }>,
    onArrived?: () => void
  ) => {
    if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    if (path.length === 0) { onArrived?.(); return; }

    const segments = simplifyPath([avatarGridPosRef.current, ...path]);
    if (segments.length === 0) { onArrived?.(); return; }

    setIsWalking(true);
    setAvatarMood("focused");

    let segIdx = 0;
    const moveSegment = () => {
      if (segIdx >= segments.length) {
        setIsWalking(false);
        setWalkTransitionMs(0);
        onArrived?.();
        return;
      }
      const seg = segments[segIdx++];
      const ms = seg.length * MS_PER_CELL;
      setAvatarFacing(seg.facing);
      setWalkTransitionMs(ms);
      avatarGridPosRef.current = seg.end;
      setAvatarGridPos(seg.end);
      walkTimerRef.current = setTimeout(moveSegment, ms);
    };
    moveSegment();
  }, []);

  const [interactionMenu, setInteractionMenu] = useState<{ furnitureIdx: number; screenX: number; screenY: number } | null>(null);
  const [activeInteraction, setActiveInteraction] = useState<string | null>(null);
  const interactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Zoom / Pan state ───
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 5;
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanningRef = useRef(false);
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const lastPinchDistRef = useRef(0);
  const roomContainerRef = useRef<HTMLDivElement>(null);

  // Zoom button handlers
  const handleZoomIn = useCallback(() => {
    setZoom(z => Math.min(z + 0.5, MAX_ZOOM));
  }, []);
  const handleZoomOut = useCallback(() => {
    setZoom(z => {
      const nz = Math.max(z - 0.5, MIN_ZOOM);
      if (nz === MIN_ZOOM) setPan({ x: 0, y: 0 });
      return nz;
    });
  }, []);
  const handleZoomReset = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(z => {
      const nz = Math.min(Math.max(z - e.deltaY * 0.002, MIN_ZOOM), MAX_ZOOM);
      if (nz === MIN_ZOOM) setPan({ x: 0, y: 0 });
      return nz;
    });
  }, []);

  // Touch pan & pinch zoom
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastPinchDistRef.current = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1 && zoom > 1) {
      isPanningRef.current = true;
      panStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        panX: pan.x,
        panY: pan.y,
      };
    }
  }, [zoom, pan]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastPinchDistRef.current > 0) {
        const scale = dist / lastPinchDistRef.current;
        setZoom(z => Math.min(Math.max(z * scale, MIN_ZOOM), MAX_ZOOM));
      }
      lastPinchDistRef.current = dist;
    } else if (e.touches.length === 1 && isPanningRef.current && zoom > 1) {
      const dx = e.touches[0].clientX - panStartRef.current.x;
      const dy = e.touches[0].clientY - panStartRef.current.y;
      const maxPan = (zoom - 1) * 150;
      setPan({
        x: Math.min(Math.max(panStartRef.current.panX + dx, -maxPan), maxPan),
        y: Math.min(Math.max(panStartRef.current.panY + dy, -maxPan), maxPan),
      });
    }
  }, [zoom]);

  const handleTouchEnd = useCallback(() => {
    isPanningRef.current = false;
    lastPinchDistRef.current = 0;
    setZoom(z => {
      if (z < MIN_ZOOM) { setPan({ x: 0, y: 0 }); return MIN_ZOOM; }
      return z;
    });
  }, []);

  // Mouse drag pan (desktop)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom <= 1) return;
    // Don't pan if clicking furniture in edit mode
    if (editMode && selectedFurnitureId) return;
    isPanningRef.current = true;
    panStartRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  }, [zoom, pan, editMode, selectedFurnitureId]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanningRef.current || zoom <= 1) return;
    const dx = e.clientX - panStartRef.current.x;
    const dy = e.clientY - panStartRef.current.y;
    const maxPan = (zoom - 1) * 150;
    setPan({
      x: Math.min(Math.max(panStartRef.current.panX + dx, -maxPan), maxPan),
      y: Math.min(Math.max(panStartRef.current.panY + dy, -maxPan), maxPan),
    });
  }, [zoom]);

  const handleMouseUp = useCallback(() => {
    isPanningRef.current = false;
  }, []);

  // Reset zoom on room change
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [currentRoomIdx]);

  const currentRoom = ROOMS[currentRoomIdx];
  const isOwned = ownedRooms.includes(currentRoom.id);
  const roomSize = typeof window !== "undefined" ? getRoomSize(currentRoom.id) : { gridW: currentRoom.gridW, gridH: currentRoom.gridH };
  const roomLevel = typeof window !== "undefined" ? getRoomLevel(currentRoom.id) : 1;
  const nextUpgrade = typeof window !== "undefined" ? getNextUpgrade(currentRoom.id) : null;

  // Load data
  useEffect(() => {
    setOwnedRooms(getOwnedRooms());
    setOwnedFurnitureIds(getOwnedFurniture());
    setStars(getSpecialCardCount());
    setWindowAlpha(getDayNightAlpha());

    const interval = setInterval(() => {
      setWindowAlpha(getDayNightAlpha());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Load furniture when room changes
  useEffect(() => {
    if (isOwned) {
      setFurniture(getRoomFurniture(currentRoom.id));
    }
  }, [currentRoom.id, isOwned]);

  // Available furniture for this room
  const availableFurniture = useMemo(() => {
    return FURNITURE_DEFS.filter(
      (f) => f.room === currentRoom.id || f.room === "any"
    );
  }, [currentRoom.id]);

  // Show toast
  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  }, []);

  // Handle room navigation
  const prevRoom = () => {
    setEditMode(false);
    setSelectedFurnitureId(null);
    setCurrentRoomIdx((i) => (i > 0 ? i - 1 : ROOMS.length - 1));
  };
  const nextRoom = () => {
    setEditMode(false);
    setSelectedFurnitureId(null);
    setCurrentRoomIdx((i) => (i < ROOMS.length - 1 ? i + 1 : 0));
  };

  // Buy room
  const handleBuyRoom = () => {
    if (stars < currentRoom.price) {
      showToast(t.notEnough);
      return;
    }
    setConfirmBuy({ type: "room", id: currentRoom.id, price: currentRoom.price });
  };

  // Upgrade room size
  const handleUpgradeRoom = () => {
    if (!nextUpgrade) return;
    if (stars < nextUpgrade.price) {
      showToast(t.notEnough);
      return;
    }
    setConfirmBuy({ type: "room" as const, id: `upgrade_${currentRoom.id}`, price: nextUpgrade.price });
  };

  // Buy furniture
  const handleBuyFurniture = (fDef: typeof FURNITURE_DEFS[0]) => {
    if (ownedFurnitureIds.includes(fDef.id)) {
      // Already owned — select for placement
      setSelectedFurnitureId(fDef.id);
      return;
    }
    if (stars < fDef.price) {
      showToast(t.notEnough);
      return;
    }
    if (fDef.price === 0) {
      // Free — just buy it
      buyFurniture(fDef.id);
      setOwnedFurnitureIds(getOwnedFurniture());
      setSelectedFurnitureId(fDef.id);
      return;
    }
    setConfirmBuy({ type: "furniture", id: fDef.id, price: fDef.price });
  };

  // Confirm purchase
  const confirmPurchase = () => {
    if (!confirmBuy) return;
    if (confirmBuy.id.startsWith("upgrade_")) {
      // Room size upgrade
      const roomId = confirmBuy.id.replace("upgrade_", "");
      spendSpecialCards(confirmBuy.price);
      upgradeRoom(roomId);
    } else if (confirmBuy.type === "room") {
      spendSpecialCards(confirmBuy.price);
      buyRoom(confirmBuy.id);
      setOwnedRooms(getOwnedRooms());
    } else {
      spendSpecialCards(confirmBuy.price);
      buyFurniture(confirmBuy.id);
      setOwnedFurnitureIds(getOwnedFurniture());
      setSelectedFurnitureId(confirmBuy.id);
    }
    setStars(getSpecialCardCount());
    setConfirmBuy(null);
  };

  // Convert click to grid coords
  const clickToGrid = (e: React.MouseEvent<HTMLDivElement>) => {
    const svg = e.currentTarget.querySelector("svg");
    if (!svg) return null;

    const rect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const scaleX = viewBox.width / rect.width;
    const scaleY = viewBox.height / rect.height;

    const svgX = (e.clientX - rect.left) * scaleX;
    const svgY = (e.clientY - rect.top) * scaleY;

    const oX = roomSize.gridH * 24 + 20;
    const oY = 120;
    const relX = svgX - oX;
    const relY = svgY - oY;

    return {
      gx: Math.round((relX / 24 + relY / 12) / 2),
      gy: Math.round((relY / 12 - relX / 24) / 2),
    };
  };

  // Check if a position is valid (bounds + no overlap)
  const isValidPosition = (gx: number, gy: number, fDef: { gridW: number; gridH: number }, excludeIdx?: number) => {
    if (gx < 0 || gy < 0 || gx + fDef.gridW > roomSize.gridW || gy + fDef.gridH > roomSize.gridH) return false;
    return !furniture.some((placed, i) => {
      if (excludeIdx !== undefined && i === excludeIdx) return false;
      const pDef = getFurnitureDef(placed.furnitureId);
      if (!pDef) return false;
      return (
        gx < placed.gridX + pDef.gridW &&
        gx + fDef.gridW > placed.gridX &&
        gy < placed.gridY + pDef.gridH &&
        gy + fDef.gridH > placed.gridY
      );
    });
  };

  // Place or move furniture on grid
  const handleSvgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!editMode || !isOwned) return;

    const grid = clickToGrid(e);
    if (!grid) return;
    const { gx, gy } = grid;

    // MOVE MODE: moving an existing furniture piece
    if (movingIdx !== null) {
      const moving = furniture[movingIdx];
      const fDef = getFurnitureDef(moving.furnitureId);
      if (!fDef) return;

      if (!isValidPosition(gx, gy, fDef, movingIdx)) {
        showToast(t.overlap || "Can't place here!");
        return;
      }

      const newFurniture = [...furniture];
      newFurniture[movingIdx] = { ...moving, gridX: gx, gridY: gy };
      setFurniture(newFurniture);
      saveRoomFurniture(currentRoom.id, newFurniture);
      // Stay in move mode — user can keep repositioning until they click the furniture again
      return;
    }

    // PLACE MODE: placing new furniture from shop
    if (!selectedFurnitureId) return;
    const fDef = getFurnitureDef(selectedFurnitureId);
    if (!fDef) return;

    if (!isValidPosition(gx, gy, fDef)) {
      showToast(t.overlap || "Can't place here!");
      return;
    }

    const newFurniture = [
      ...furniture,
      { furnitureId: selectedFurnitureId, gridX: gx, gridY: gy, rotation: 0 as const },
    ];
    setFurniture(newFurniture);
    saveRoomFurniture(currentRoom.id, newFurniture);
    setSelectedFurnitureId(null);
  };

  // Rotate furniture
  const handleRotateFurniture = (index: number) => {
    const newFurniture = [...furniture];
    const item = newFurniture[index];
    item.rotation = ((item.rotation || 0) + 1) % 4 as 0 | 1 | 2 | 3;
    setFurniture(newFurniture);
    saveRoomFurniture(currentRoom.id, newFurniture);
  };

  // Start moving furniture
  const handleStartMove = (index: number) => {
    setMovingIdx(index);
    setSelectedFurnitureId(null);
    setSelectedPlacedIdx(null);
  };

  // Remove furniture
  const handleRemoveFurniture = (index: number) => {
    const newFurniture = furniture.filter((_, i) => i !== index);
    setFurniture(newFurniture);
    saveRoomFurniture(currentRoom.id, newFurniture);
    setSelectedPlacedIdx(null);
    setMovingIdx(null);
  };

  // Handle furniture click in SVG (select placed furniture or show interaction)
  const handleFurnitureClick = (index: number) => {
    if (movingIdx !== null) {
      // Clicking the currently-moving furniture exits move mode
      if (index === movingIdx) {
        setMovingIdx(null);
        setSelectedPlacedIdx(index);
      }
      return;
    }

    if (editMode) {
      // Edit mode: select for rotate/move/remove
      setSelectedPlacedIdx(selectedPlacedIdx === index ? null : index);
      setSelectedFurnitureId(null);
      return;
    }

    // Normal mode: show interaction menu
    const item = furniture[index];
    const interactions = getInteractionsForFurniture(item.furnitureId);
    if (interactions.length === 0) return;

    // Get screen position of furniture for menu positioning
    const svg = roomContainerRef.current?.querySelector("svg");
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const oX = roomSize.gridH * 24 + 20;
    const oY = 120;
    const { x: sx, y: sy } = gridToScreen(item.gridX, item.gridY, oX, oY);
    const screenX = rect.left + (sx / viewBox.width) * rect.width;
    const screenY = rect.top + (sy / viewBox.height) * rect.height;

    setInteractionMenu({ furnitureIdx: index, screenX, screenY });
  };

  // Handle interaction selection
  const handleInteraction = (furnitureIdx: number, interaction: FurnitureInteraction) => {
    setInteractionMenu(null);
    const item = furniture[furnitureIdx];
    const def = getFurnitureDef(item.furnitureId);
    if (!def) return;

    const blocked = buildBlockedSet();

    // Find nearest walkable cell adjacent to the furniture
    const candidates: Array<{ gx: number; gy: number }> = [];
    for (let x = item.gridX - 1; x <= item.gridX + def.gridW; x++) {
      for (let y = item.gridY - 1; y <= item.gridY + def.gridH; y++) {
        if (x < 0 || y < 0 || x >= roomSize.gridW || y >= roomSize.gridH) continue;
        if (!blocked.has(`${x},${y}`)) candidates.push({ gx: x, gy: y });
      }
    }
    if (candidates.length === 0) return;

    const cur = avatarGridPosRef.current;
    candidates.sort((a, b) =>
      (Math.abs(a.gx - cur.gx) + Math.abs(a.gy - cur.gy)) -
      (Math.abs(b.gx - cur.gx) + Math.abs(b.gy - cur.gy))
    );
    const target = candidates[0];
    const path = aStarPath(cur.gx, cur.gy, target.gx, target.gy,
      roomSize.gridW, roomSize.gridH, (x, y) => blocked.has(`${x},${y}`));

    startWalkPath(path, () => {
      setAvatarMood(interaction.mood);
      setActiveInteraction(interaction.id);
      if (interaction.reaction) {
        setAvatarReaction({ reaction: interaction.reaction, timestamp: Date.now() });
      }
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = setTimeout(() => {
        setAvatarMood("idle");
        setActiveInteraction(null);
      }, interaction.duration);
    });
  };

  // Close interaction menu
  const closeInteractionMenu = useCallback(() => {
    setInteractionMenu(null);
  }, []);

  // Handle click on empty floor (walk there)
  const handleFloorClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editMode || interactionMenu) return;

    const grid = clickToGrid(e);
    if (!grid) return;
    const { gx, gy } = grid;

    if (gx < 0 || gy < 0 || gx >= roomSize.gridW || gy >= roomSize.gridH) return;

    const blocked = buildBlockedSet();
    if (blocked.has(`${gx},${gy}`)) return; // clicked on furniture

    const cur = avatarGridPosRef.current;
    const path = aStarPath(cur.gx, cur.gy, gx, gy,
      roomSize.gridW, roomSize.gridH, (x, y) => blocked.has(`${x},${y}`));

    if (path.length > 0) {
      setActiveInteraction(null);
      startWalkPath(path, () => setAvatarMood("idle"));
    }
  };

  // Calculate avatar screen position for overlay
  const getAvatarScreenPos = useCallback(() => {
    const svg = roomContainerRef.current?.querySelector("svg");
    if (!svg) return { left: 0, top: 0 };
    const rect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const oX = roomSize.gridH * 24 + 20;
    const oY = 120;
    const { x: sx, y: sy } = gridToScreen(avatarGridPos.gx, avatarGridPos.gy, oX, oY);
    return {
      left: rect.left + (sx / viewBox.width) * rect.width,
      top: rect.top + (sy / viewBox.height) * rect.height,
    };
  }, [avatarGridPos, roomSize.gridH]);

  // Interaction name helper
  const iNames = INTERACTION_NAMES[lang] || INTERACTION_NAMES.en;

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#12122A]/80 backdrop-blur-sm border-b border-white/5">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Home size={16} />
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{t.myRoom}</span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">
            <Star size={12} fill="currentColor" />
            {stars}
          </div>
        </div>

        {isOwned && (
          <button
            onClick={() => {
              setEditMode(!editMode);
              setSelectedFurnitureId(null);
              setSelectedPlacedIdx(null);
              setMovingIdx(null);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              editMode
                ? "bg-neon-green/20 text-neon-green"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {editMode ? (
              <span className="flex items-center gap-1"><Check size={12} /> {t.done}</span>
            ) : (
              <span className="flex items-center gap-1"><Edit3 size={12} /> {t.edit}</span>
            )}
          </button>
        )}

        {!isOwned && <div className="w-9" />}
      </div>

      {/* Room navigation */}
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={prevRoom}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentRoom.icon}</span>
            <span className="font-medium">{t[currentRoom.nameKey]}</span>
            {!isOwned && (
              <span className="flex items-center gap-0.5 text-xs text-yellow-300">
                <Lock size={10} /> {currentRoom.price}⭐
              </span>
            )}
          </div>
          {isOwned && (
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white/30">{roomSize.gridW}×{roomSize.gridH}</span>
              {nextUpgrade && (
                <button
                  onClick={handleUpgradeRoom}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 transition-colors flex items-center gap-1"
                >
                  ↑ {nextUpgrade.gridW}×{nextUpgrade.gridH} — {nextUpgrade.price}⭐
                </button>
              )}
              {!nextUpgrade && <span className="text-[10px] text-neon-green/50">MAX</span>}
            </div>
          )}
        </div>

        <button
          onClick={nextRoom}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Room dots */}
      <div className="flex items-center justify-center gap-1.5 pb-2">
        {ROOMS.map((r, i) => (
          <div
            key={r.id}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === currentRoomIdx
                ? "bg-neon-blue"
                : ownedRooms.includes(r.id)
                ? "bg-white/30"
                : "bg-white/10"
            }`}
          />
        ))}
      </div>

      {/* Room view */}
      <div
        className="flex-1 flex items-center justify-center px-2 pb-2 overflow-hidden relative"
        ref={roomContainerRef}
        onWheel={isOwned ? handleWheel : undefined}
        onTouchStart={isOwned ? handleTouchStart : undefined}
        onTouchMove={isOwned ? handleTouchMove : undefined}
        onTouchEnd={isOwned ? handleTouchEnd : undefined}
        onMouseDown={isOwned ? handleMouseDown : undefined}
        onMouseMove={isOwned ? handleMouseMove : undefined}
        onMouseUp={isOwned ? handleMouseUp : undefined}
        onMouseLeave={isOwned ? handleMouseUp : undefined}
        style={{ touchAction: zoom > 1 ? "none" : "pan-y" }}
      >
        {isOwned ? (
          <>
            <motion.div
              key={currentRoom.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-center justify-center max-w-lg"
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transformOrigin: "center center",
                cursor: zoom > 1 ? "grab" : "default",
              }}
              onClick={editMode && (selectedFurnitureId || movingIdx !== null)
                ? handleSvgClick
                : !editMode ? handleFloorClick : undefined}
            >
              <RoomRenderer
                roomType={currentRoom.id}
                gridW={roomSize.gridW}
                gridH={roomSize.gridH}
                furniture={furniture}
                windowAlpha={windowAlpha}
                showGrid={editMode}
                editMode={editMode}
                selectedIndex={selectedPlacedIdx}
                onFurnitureClick={handleFurnitureClick}
                onFurnitureLongPress={editMode ? handleStartMove : undefined}
              />
            </motion.div>

            {/* Zoom controls */}
            <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 z-10">
              <button
                onClick={handleZoomIn}
                disabled={zoom >= MAX_ZOOM}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoom <= MIN_ZOOM}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ZoomOut size={16} />
              </button>
              {zoom > 1 && (
                <button
                  onClick={handleZoomReset}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <Maximize2 size={14} />
                </button>
              )}
            </div>

            {/* Zoom indicator */}
            {zoom > 1 && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/50 text-white/50 text-[10px] font-mono z-10">
                {Math.round(zoom * 100)}%
              </div>
            )}

            {/* Avatar overlay — positioned on top of SVG */}
            {!editMode && (
              <AvatarInRoom
                roomContainerRef={roomContainerRef}
                avatarGridPos={avatarGridPos}
                roomSize={roomSize}
                zoom={zoom}
                pan={pan}
                mood={avatarMood}
                reaction={avatarReaction}
                isWalking={isWalking}
                walkTransitionMs={walkTransitionMs}
                facing={avatarFacing}
                activeInteraction={activeInteraction}
                gender={gender}
                activeSkin={activeSkin}
                activeFace={activeFace}
                activeTop={activeTop}
                activeBottom={activeBottom}
                activeShoe={activeShoe}
                activeCape={activeCape}
                activeGlasses={activeGlasses}
                activeGloves={activeGloves}
                activeHat={activeHat}
                activeTrail={activeTrail}
              />
            )}

            {/* Interaction menu popup */}
            <AnimatePresence>
              {interactionMenu && !editMode && (() => {
                const item = furniture[interactionMenu.furnitureIdx];
                const interactions = getInteractionsForFurniture(item.furnitureId);
                const fDef = getFurnitureDef(item.furnitureId);
                return (
                  <motion.div
                    key="interaction-menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed z-50 bg-[#1A1A3A]/95 backdrop-blur-md rounded-xl border border-white/10 p-2 shadow-lg"
                    style={{
                      left: Math.min(interactionMenu.screenX - 60, window.innerWidth - 160),
                      top: Math.max(interactionMenu.screenY - 80, 10),
                    }}
                  >
                    <div className="text-[10px] text-white/30 px-2 pb-1 mb-1 border-b border-white/5">
                      {fDef?.icon} {fDef?.name}
                    </div>
                    {interactions.map((inter) => (
                      <button
                        key={inter.id}
                        onClick={() => handleInteraction(interactionMenu.furnitureIdx, inter)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-left text-xs"
                      >
                        <span className="text-base">{inter.icon}</span>
                        <span>{iNames[inter.nameKey] || inter.nameKey}</span>
                      </button>
                    ))}
                    <button
                      onClick={closeInteractionMenu}
                      className="w-full text-[10px] text-white/30 hover:text-white/50 mt-1 py-0.5 transition-colors"
                    >
                      ✕
                    </button>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Active interaction indicator */}
            {activeInteraction && (
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-neon-purple/20 text-neon-purple text-xs border border-neon-purple/20 z-10">
                {iNames[activeInteraction] || activeInteraction}...
              </div>
            )}
          </>

        ) : (
          /* Locked room view */
          <motion.div
            key={`locked-${currentRoom.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-12"
          >
            <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl">
              <Lock size={40} className="text-white/20" />
            </div>
            <p className="text-white/40 text-sm">{t.locked}</p>
            <button
              onClick={handleBuyRoom}
              className="px-5 py-2 rounded-xl bg-yellow-500/20 text-yellow-300 font-medium text-sm hover:bg-yellow-500/30 transition-colors flex items-center gap-1.5"
            >
              <Star size={14} fill="currentColor" />
              {t.buyRoom} — {currentRoom.price}⭐
            </button>
          </motion.div>
        )}
      </div>

      {/* Edit mode: furniture panel */}
      <AnimatePresence>
        {editMode && isOwned && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-[#12122A]/95 backdrop-blur-md border-t border-white/10 px-3 py-3 max-h-[40vh] overflow-y-auto"
          >
            {/* Placed furniture list */}
            {furniture.length > 0 && (
              <div className="mb-3">
                <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">
                  {t[currentRoom.nameKey]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {furniture.map((f, i) => {
                    const def = getFurnitureDef(f.furnitureId);
                    if (!def) return null;
                    const isSelected = selectedPlacedIdx === i;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedPlacedIdx(isSelected ? null : i);
                          setSelectedFurnitureId(null);
                          setMovingIdx(null);
                        }}
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-colors ${
                          isSelected
                            ? "bg-neon-blue/20 border border-neon-blue/40 text-neon-blue"
                            : "bg-white/5 hover:bg-white/10 text-white/50"
                        }`}
                      >
                        <span>{def.icon}</span>
                        <span className="truncate max-w-[60px]">{def.name}</span>
                        {f.rotation ? <span className="text-[9px] text-white/30">↻{f.rotation}</span> : null}
                      </button>
                    );
                  })}
                </div>
                {/* Action buttons for selected placed furniture */}
                <AnimatePresence>
                  {selectedPlacedIdx !== null && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex gap-2 mt-2 overflow-hidden"
                    >
                      <button
                        onClick={() => handleRotateFurniture(selectedPlacedIdx)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neon-purple/15 hover:bg-neon-purple/25 text-neon-purple text-xs transition-colors"
                      >
                        <RotateCw size={12} /> {t.rotate}
                      </button>
                      <button
                        onClick={() => handleStartMove(selectedPlacedIdx)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                          movingIdx === selectedPlacedIdx
                            ? "bg-neon-green/20 text-neon-green border border-neon-green/30"
                            : "bg-neon-blue/15 hover:bg-neon-blue/25 text-neon-blue"
                        }`}
                      >
                        <Move size={12} /> {t.move}
                      </button>
                      <button
                        onClick={() => handleRemoveFurniture(selectedPlacedIdx)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-xs transition-colors"
                      >
                        <Trash2 size={12} /> {t.remove}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Available furniture to buy/place */}
            <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">
              {t.furniture}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {availableFurniture.map((fDef) => {
                const owned = ownedFurnitureIds.includes(fDef.id);
                const selected = selectedFurnitureId === fDef.id;
                return (
                  <button
                    key={fDef.id}
                    onClick={() => handleBuyFurniture(fDef)}
                    className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-xs transition-colors ${
                      selected
                        ? "bg-neon-blue/20 border border-neon-blue/40 text-neon-blue"
                        : owned
                        ? "bg-white/5 hover:bg-white/10 text-white/70"
                        : "bg-white/5 hover:bg-white/10 text-white/40"
                    }`}
                  >
                    <span className="text-base">{fDef.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate">{fDef.name}</p>
                      {owned ? (
                        <p className="text-[10px] text-green-400">{selected ? t.place : t.owned}</p>
                      ) : (
                        <p className="text-[10px] text-yellow-300 flex items-center gap-0.5">
                          <Star size={8} fill="currentColor" />
                          {fDef.price}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {movingIdx !== null && (
              <p className="text-xs text-neon-green/60 text-center mt-2">{t.tapToMove}</p>
            )}
            {selectedFurnitureId && movingIdx === null && (
              <p className="text-xs text-neon-blue/60 text-center mt-2">{t.empty}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm popup */}
      <AnimatePresence>
        {confirmBuy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A3A] rounded-2xl p-5 mx-6 max-w-xs w-full border border-white/10"
            >
              <p className="text-center font-medium mb-3">{t.confirm}</p>
              <p className="text-center text-yellow-300 text-lg mb-4 flex items-center justify-center gap-1">
                <Star size={16} fill="currentColor" />
                {confirmBuy.price} {t.stars}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmBuy(null)}
                  className="flex-1 py-2 rounded-xl bg-white/10 text-white/60 hover:bg-white/15 transition-colors text-sm"
                >
                  {t.no}
                </button>
                <button
                  onClick={confirmPurchase}
                  className="flex-1 py-2 rounded-xl bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 transition-colors text-sm font-medium"
                >
                  {t.yes}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm border border-red-500/20 backdrop-blur-sm"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
