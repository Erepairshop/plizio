"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, ShoppingBag, Move, Trash2, Check, X, Lock,
  Zap, Smile, Drumstick, Droplets, ChevronLeft, ChevronRight,
  Home as HomeIcon, Star,
} from "lucide-react";
import {
  ROOMS, FURNITURE, getRoomDef, getFurnitureDef, getRoomFurniture,
  loadLife, saveLife, boostStat, getOverallMood, getStatColor, canPlaceFurniture,
  type LifeSave, type RoomId, type StatId, type PlacedFurniture, type FurnitureDef,
} from "@/lib/pliziolife";
import { getSpecialCardCount, spendSpecialCards } from "@/lib/specialCards";
import { useLang } from "@/components/LanguageProvider";

// ─── TRANSLATIONS ───

const T: Record<string, Record<string, string>> = {
  en: {
    title: "Plizio Life",
    stats: "Needs",
    energy: "Energy",
    happiness: "Happiness",
    hunger: "Hunger",
    hygiene: "Hygiene",
    shop: "Furniture Shop",
    rooms: "Rooms",
    buy: "Buy",
    place: "Place",
    interact: "Tap furniture to interact",
    editMode: "Edit Mode",
    noMoney: "Not enough ⭐",
    owned: "Owned",
    locked: "Locked",
    buyRoom: "Buy Room",
    remove: "Remove",
    empty: "Tap + to buy furniture!",
    avatarWalking: "Walking...",
    interacting: "Using...",
    statLow: "needs attention!",
    totalItems: "items",
  },
  hu: {
    title: "Plizio Life",
    stats: "Szükségletek",
    energy: "Energia",
    happiness: "Boldogság",
    hunger: "Éhség",
    hygiene: "Higiénia",
    shop: "Bútor Bolt",
    rooms: "Szobák",
    buy: "Vásárlás",
    place: "Elhelyez",
    interact: "Koppints a bútorra!",
    editMode: "Szerkesztés",
    noMoney: "Nincs elég ⭐",
    owned: "Megvan",
    locked: "Zárolva",
    buyRoom: "Szoba vásárlás",
    remove: "Eltávolítás",
    empty: "Koppints a +-ra bútorért!",
    avatarWalking: "Sétálás...",
    interacting: "Használat...",
    statLow: "figyelmet igényel!",
    totalItems: "tárgy",
  },
  de: {
    title: "Plizio Life",
    stats: "Bedürfnisse",
    energy: "Energie",
    happiness: "Glück",
    hunger: "Hunger",
    hygiene: "Hygiene",
    shop: "Möbel Shop",
    rooms: "Zimmer",
    buy: "Kaufen",
    place: "Platzieren",
    interact: "Tippe auf Möbel!",
    editMode: "Bearbeitungsmodus",
    noMoney: "Nicht genug ⭐",
    owned: "Besitzt",
    locked: "Gesperrt",
    buyRoom: "Zimmer kaufen",
    remove: "Entfernen",
    empty: "Tippe + für Möbel!",
    avatarWalking: "Gehen...",
    interacting: "Benutzen...",
    statLow: "braucht Aufmerksamkeit!",
    totalItems: "Gegenstände",
  },
  ro: {
    title: "Plizio Life",
    stats: "Nevoi",
    energy: "Energie",
    happiness: "Fericire",
    hunger: "Foame",
    hygiene: "Igienă",
    shop: "Magazin Mobilă",
    rooms: "Camere",
    buy: "Cumpără",
    place: "Plasează",
    interact: "Atinge mobila!",
    editMode: "Mod editare",
    noMoney: "Nu suficiente ⭐",
    owned: "Deținut",
    locked: "Blocat",
    buyRoom: "Cumpără cameră",
    remove: "Elimină",
    empty: "Atinge + pentru mobilă!",
    avatarWalking: "Merge...",
    interacting: "Folosește...",
    statLow: "are nevoie de atenție!",
    totalItems: "obiecte",
  },
};

const STAT_ICONS: Record<StatId, typeof Zap> = {
  energy: Zap,
  happiness: Smile,
  hunger: Drumstick,
  hygiene: Droplets,
};

const CELL_PX = 52;

type Mode = "play" | "edit" | "shop" | "rooms";

export default function PlizioLifePage() {
  const { lang } = useLang();
  const t = T[lang] || T.en;

  const [life, setLife] = useState<LifeSave | null>(null);
  const [mode, setMode] = useState<Mode>("play");
  const [stars, setStars] = useState(0);
  const [interacting, setInteracting] = useState<string | null>(null);
  const [walkTarget, setWalkTarget] = useState<{ x: number; y: number } | null>(null);
  const [shopFilter, setShopFilter] = useState<RoomId | "all">("all");
  const [notification, setNotification] = useState<string | null>(null);
  const [dragItem, setDragItem] = useState<{ defId: string; fromIdx?: number } | null>(null);
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const interactTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load
  useEffect(() => {
    setLife(loadLife());
    setStars(getSpecialCardCount());
  }, []);

  // Auto-save every 30s + stat decay
  useEffect(() => {
    if (!life) return;
    const interval = setInterval(() => {
      setLife(prev => {
        if (!prev) return prev;
        const now = Date.now();
        const elapsed = (now - prev.lastTick) / 60000;
        if (elapsed < 0.5) return prev;
        const stats = { ...prev.stats };
        const rates: Record<StatId, number> = { energy: 0.8, happiness: 0.5, hunger: 0.7, hygiene: 0.4 };
        for (const k of Object.keys(rates) as StatId[]) {
          stats[k] = Math.max(0, Math.round(stats[k] - elapsed * rates[k]));
        }
        const next = { ...prev, stats, lastTick: now };
        saveLife(next);
        return next;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [life]);

  const save = useCallback((updater: (prev: LifeSave) => LifeSave) => {
    setLife(prev => {
      if (!prev) return prev;
      const next = updater(prev);
      saveLife(next);
      return next;
    });
  }, []);

  const showNotif = useCallback((msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2000);
  }, []);

  if (!life) return null;

  const room = getRoomDef(life.activeRoom);
  const placed = life.furniture[life.activeRoom] || [];
  const mood = getOverallMood(life.stats);

  // ─── ROOM NAVIGATION ───
  const ownedRoomIdx = life.rooms.indexOf(life.activeRoom);
  const goPrevRoom = () => {
    const idx = (ownedRoomIdx - 1 + life.rooms.length) % life.rooms.length;
    save(p => ({ ...p, activeRoom: life.rooms[idx], avatarPos: { x: Math.floor(getRoomDef(life.rooms[idx]).gridW / 2), y: Math.floor(getRoomDef(life.rooms[idx]).gridH / 2) } }));
  };
  const goNextRoom = () => {
    const idx = (ownedRoomIdx + 1) % life.rooms.length;
    save(p => ({ ...p, activeRoom: life.rooms[idx], avatarPos: { x: Math.floor(getRoomDef(life.rooms[idx]).gridW / 2), y: Math.floor(getRoomDef(life.rooms[idx]).gridH / 2) } }));
  };

  // ─── GRID CLICK (play mode) ───
  const handleGridClick = (gx: number, gy: number) => {
    if (mode !== "play" || interacting) return;
    // Check if furniture at this cell
    const fIdx = placed.findIndex(p => {
      const d = getFurnitureDef(p.defId);
      return d && gx >= p.x && gx < p.x + d.w && gy >= p.y && gy < p.y + d.h;
    });
    if (fIdx >= 0) {
      const p = placed[fIdx];
      const def = getFurnitureDef(p.defId);
      if (!def?.statBoost) return;
      // Walk to furniture then interact
      setWalkTarget({ x: p.x, y: p.y + def.h });
      setTimeout(() => {
        setInteracting(def.id);
        interactTimerRef.current = setTimeout(() => {
          save(prev => ({
            ...prev,
            stats: boostStat(prev.stats, def.statBoost!),
            totalInteractions: prev.totalInteractions + 1,
          }));
          setInteracting(null);
          setWalkTarget(null);
        }, def.interactTime || 2000);
      }, 600);
      save(p2 => ({ ...p2, avatarPos: { x: p.x, y: Math.min(p.y + def.h, room.gridH - 1) } }));
    } else {
      // Walk to empty cell
      save(p2 => ({ ...p2, avatarPos: { x: gx, y: gy } }));
      setWalkTarget({ x: gx, y: gy });
      setTimeout(() => setWalkTarget(null), 600);
    }
  };

  // ─── EDIT MODE: place/remove ───
  const handleEditClick = (gx: number, gy: number) => {
    if (mode !== "edit") return;
    if (dragItem) {
      const def = getFurnitureDef(dragItem.defId);
      if (!def) return;
      if (canPlaceFurniture(placed, def, gx, gy, room, dragItem.fromIdx)) {
        save(prev => {
          const arr = [...(prev.furniture[life.activeRoom] || [])];
          if (dragItem.fromIdx !== undefined) {
            arr[dragItem.fromIdx] = { defId: dragItem.defId, x: gx, y: gy };
          } else {
            arr.push({ defId: dragItem.defId, x: gx, y: gy });
          }
          return { ...prev, furniture: { ...prev.furniture, [life.activeRoom]: arr } };
        });
        setDragItem(null);
        setDragPos(null);
      }
    }
  };

  const removeFurniture = (idx: number) => {
    save(prev => {
      const arr = [...(prev.furniture[life.activeRoom] || [])];
      arr.splice(idx, 1);
      return { ...prev, furniture: { ...prev.furniture, [life.activeRoom]: arr } };
    });
  };

  // ─── BUY FURNITURE ───
  const buyFurniture = (def: FurnitureDef) => {
    if (life.ownedFurniture.includes(def.id)) {
      // Already owned, start placing
      setDragItem({ defId: def.id });
      setMode("edit");
      return;
    }
    if (stars < def.price) {
      showNotif(t.noMoney);
      return;
    }
    spendSpecialCards(def.price);
    setStars(getSpecialCardCount());
    save(prev => ({ ...prev, ownedFurniture: [...prev.ownedFurniture, def.id] }));
    setDragItem({ defId: def.id });
    setMode("edit");
    window.dispatchEvent(new Event("plizio-cards-changed"));
  };

  // ─── BUY ROOM ───
  const buyRoom = (roomId: RoomId) => {
    const rd = getRoomDef(roomId);
    if (life.rooms.includes(roomId)) return;
    if (stars < rd.price) {
      showNotif(t.noMoney);
      return;
    }
    spendSpecialCards(rd.price);
    setStars(getSpecialCardCount());
    save(prev => ({ ...prev, rooms: [...prev.rooms, roomId] }));
    window.dispatchEvent(new Event("plizio-cards-changed"));
  };

  // ─── RENDER ───
  const gridW = room.gridW * CELL_PX;
  const gridH = room.gridH * CELL_PX;

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center pb-6 overflow-x-hidden">
      {/* Header */}
      <div className="w-full max-w-lg px-3 pt-3 flex items-center gap-2">
        <Link href="/" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <h1 className="text-lg font-bold flex-1 flex items-center gap-2">
          <HomeIcon size={18} className="text-neon-pink" />
          {t.title}
        </h1>
        <div className="flex items-center gap-1 text-sm bg-white/10 px-2.5 py-1 rounded-full">
          <Star size={13} className="text-yellow-400" />
          <span className="font-bold">{stars}</span>
        </div>
      </div>

      {/* Stat bars */}
      <div className="w-full max-w-lg px-3 mt-2">
        <div className="grid grid-cols-4 gap-1.5">
          {(["energy", "happiness", "hunger", "hygiene"] as StatId[]).map(stat => {
            const Icon = STAT_ICONS[stat];
            const val = life.stats[stat];
            const col = getStatColor(val);
            return (
              <div key={stat} className="bg-white/5 rounded-lg p-1.5 flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1">
                  <Icon size={12} style={{ color: col }} />
                  <span className="text-[10px] opacity-60">{t[stat]}</span>
                </div>
                <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: col }}
                    animate={{ width: `${val}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-[10px] font-bold" style={{ color: col }}>{val}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room navigation */}
      <div className="w-full max-w-lg px-3 mt-2 flex items-center justify-between">
        <button onClick={goPrevRoom} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="text-lg">{room.icon}</span>
          <span>{room.name[lang] || room.name.en}</span>
        </div>
        <button onClick={goNextRoom} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Grid room view */}
      <div className="mt-2 overflow-auto max-w-[95vw]">
        <div
          className="relative rounded-xl border border-white/10 overflow-hidden"
          style={{
            width: gridW,
            height: gridH,
            backgroundColor: room.floorColor,
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Grid lines */}
          {Array.from({ length: room.gridW * room.gridH }).map((_, idx) => {
            const gx = idx % room.gridW;
            const gy = Math.floor(idx / room.gridW);
            return (
              <div
                key={idx}
                className="absolute border border-white/[0.04] cursor-pointer hover:bg-white/[0.04] transition-colors"
                style={{ left: gx * CELL_PX, top: gy * CELL_PX, width: CELL_PX, height: CELL_PX }}
                onClick={() => mode === "edit" ? handleEditClick(gx, gy) : handleGridClick(gx, gy)}
              />
            );
          })}

          {/* Placed furniture */}
          {placed.map((p, idx) => {
            const def = getFurnitureDef(p.defId);
            if (!def) return null;
            const isActive = interacting === def.id;
            return (
              <motion.div
                key={`${p.defId}-${idx}`}
                className="absolute flex flex-col items-center justify-center rounded-lg cursor-pointer select-none"
                style={{
                  left: p.x * CELL_PX + 2,
                  top: p.y * CELL_PX + 2,
                  width: def.w * CELL_PX - 4,
                  height: def.h * CELL_PX - 4,
                  backgroundColor: def.color + "33",
                  border: `2px solid ${isActive ? "#FFD700" : def.color + "66"}`,
                  boxShadow: isActive ? `0 0 20px ${def.color}66` : undefined,
                }}
                animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                transition={isActive ? { duration: 0.5, repeat: Infinity } : {}}
                onClick={(e) => {
                  e.stopPropagation();
                  if (mode === "edit") {
                    setDragItem({ defId: p.defId, fromIdx: idx });
                  } else {
                    handleGridClick(p.x, p.y);
                  }
                }}
              >
                <span className="text-xl">{def.icon}</span>
                <span className="text-[9px] opacity-60 truncate max-w-full px-1">{def.name[lang] || def.name.en}</span>
                {def.statBoost && mode === "play" && (
                  <div className="flex gap-0.5 mt-0.5">
                    {Object.entries(def.statBoost).map(([k, v]) => {
                      const Icon = STAT_ICONS[k as StatId];
                      return <Icon key={k} size={9} className={v > 0 ? "text-green-400" : "text-red-400"} />;
                    })}
                  </div>
                )}
                {mode === "edit" && (
                  <button
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500/80 rounded-full flex items-center justify-center"
                    onClick={(e) => { e.stopPropagation(); removeFurniture(idx); }}
                  >
                    <Trash2 size={10} />
                  </button>
                )}
              </motion.div>
            );
          })}

          {/* Avatar */}
          <motion.div
            className="absolute flex flex-col items-center pointer-events-none z-10"
            animate={{
              left: life.avatarPos.x * CELL_PX + CELL_PX / 2 - 16,
              top: life.avatarPos.y * CELL_PX + CELL_PX / 2 - 24,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Simple avatar representation */}
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
              style={{
                background: "radial-gradient(circle, #e8c9a0, #c9a87c)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
              animate={
                interacting ? { y: [0, -4, 0] } :
                walkTarget ? { rotate: [-5, 5, -5] } :
                mood === "happy" ? { scale: [1, 1.05, 1] } :
                mood === "disappointed" ? { y: [0, 2, 0] } :
                {}
              }
              transition={{ duration: interacting ? 0.4 : 0.6, repeat: interacting || walkTarget ? Infinity : 0 }}
            >
              {interacting ? "😊" :
               mood === "happy" ? "😄" :
               mood === "sad" ? "😢" :
               mood === "disappointed" ? "😩" :
               mood === "confused" ? "😐" : "🙂"}
            </motion.div>
            {interacting && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[8px] bg-black/60 px-1.5 py-0.5 rounded-full mt-0.5 whitespace-nowrap"
              >
                {t.interacting}
              </motion.div>
            )}
          </motion.div>

          {/* Drag ghost */}
          {dragItem && dragPos && (
            <div
              className="absolute pointer-events-none z-20 opacity-60 rounded-lg border-2 border-dashed border-neon-green flex items-center justify-center"
              style={{
                left: dragPos.x * CELL_PX,
                top: dragPos.y * CELL_PX,
                width: (getFurnitureDef(dragItem.defId)?.w || 1) * CELL_PX,
                height: (getFurnitureDef(dragItem.defId)?.h || 1) * CELL_PX,
              }}
            >
              <span className="text-2xl">{getFurnitureDef(dragItem.defId)?.icon}</span>
            </div>
          )}

          {/* Empty room message */}
          {placed.length === 0 && mode === "play" && (
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm pointer-events-none">
              {t.empty}
            </div>
          )}
        </div>
      </div>

      {/* Drag hint */}
      {dragItem && mode === "edit" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center gap-2 text-sm text-neon-green"
        >
          <Move size={14} />
          <span>Tap a grid cell to place {getFurnitureDef(dragItem.defId)?.icon}</span>
          <button onClick={() => { setDragItem(null); setDragPos(null); }} className="ml-2 text-white/50 hover:text-white">
            <X size={14} />
          </button>
        </motion.div>
      )}

      {/* Mode buttons */}
      <div className="w-full max-w-lg px-3 mt-3 flex gap-2">
        <button
          onClick={() => setMode(mode === "edit" ? "play" : "edit")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${mode === "edit" ? "bg-neon-green/20 text-neon-green border border-neon-green/30" : "bg-white/10 hover:bg-white/15"}`}
        >
          {mode === "edit" ? <Check size={15} /> : <Move size={15} />}
          {mode === "edit" ? "Done" : t.editMode}
        </button>
        <button
          onClick={() => setMode(mode === "shop" ? "play" : "shop")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${mode === "shop" ? "bg-neon-pink/20 text-neon-pink border border-neon-pink/30" : "bg-white/10 hover:bg-white/15"}`}
        >
          <ShoppingBag size={15} />
          {t.shop}
        </button>
        <button
          onClick={() => setMode(mode === "rooms" ? "play" : "rooms")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${mode === "rooms" ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/30" : "bg-white/10 hover:bg-white/15"}`}
        >
          <HomeIcon size={15} />
          {t.rooms}
        </button>
      </div>

      {/* SHOP PANEL */}
      <AnimatePresence>
        {mode === "shop" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-lg px-3 mt-3 overflow-hidden"
          >
            {/* Filter tabs */}
            <div className="flex gap-1 mb-2 overflow-x-auto pb-1">
              <button
                onClick={() => setShopFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${shopFilter === "all" ? "bg-neon-pink/20 text-neon-pink" : "bg-white/10"}`}
              >
                All
              </button>
              {life.rooms.map(rid => {
                const rd = getRoomDef(rid);
                return (
                  <button
                    key={rid}
                    onClick={() => setShopFilter(rid)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${shopFilter === rid ? "bg-neon-pink/20 text-neon-pink" : "bg-white/10"}`}
                  >
                    {rd.icon} {rd.name[lang] || rd.name.en}
                  </button>
                );
              })}
            </div>
            {/* Items grid */}
            <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1">
              {FURNITURE
                .filter(f => shopFilter === "all" || f.room === shopFilter)
                .filter(f => life.rooms.includes(f.room))
                .map(def => {
                  const owned = life.ownedFurniture.includes(def.id);
                  const canAfford = stars >= def.price;
                  // Check if already placed
                  const isPlaced = Object.values(life.furniture).flat().some(p => p.defId === def.id);
                  return (
                    <motion.button
                      key={def.id}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => buyFurniture(def)}
                      className={`p-2.5 rounded-xl text-left transition-colors ${owned ? "bg-white/5 border border-white/10" : canAfford ? "bg-white/8 border border-white/10 hover:border-neon-pink/30" : "bg-white/5 border border-white/5 opacity-50"}`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-2xl">{def.icon}</span>
                        {owned ? (
                          <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                            {isPlaced ? "✓" : t.place}
                          </span>
                        ) : (
                          <span className="text-[10px] flex items-center gap-0.5 bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full">
                            {def.price} ⭐
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-semibold mt-1 truncate">{def.name[lang] || def.name.en}</div>
                      {def.statBoost && (
                        <div className="flex gap-1 mt-1">
                          {Object.entries(def.statBoost).map(([k, v]) => {
                            const Icon = STAT_ICONS[k as StatId];
                            return (
                              <span key={k} className={`flex items-center gap-0.5 text-[9px] ${v > 0 ? "text-green-400" : "text-red-400"}`}>
                                <Icon size={9} />{v > 0 ? "+" : ""}{v}
                              </span>
                            );
                          })}
                        </div>
                      )}
                      <div className="text-[9px] opacity-40 mt-0.5">{def.w}×{def.h}</div>
                    </motion.button>
                  );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ROOMS PANEL */}
      <AnimatePresence>
        {mode === "rooms" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-lg px-3 mt-3 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {ROOMS.map(rd => {
                const owned = life.rooms.includes(rd.id);
                const canAfford = stars >= rd.price;
                const fCount = (life.furniture[rd.id] || []).length;
                return (
                  <motion.button
                    key={rd.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      if (owned) {
                        save(p => ({ ...p, activeRoom: rd.id, avatarPos: { x: Math.floor(rd.gridW / 2), y: Math.floor(rd.gridH / 2) } }));
                        setMode("play");
                      } else {
                        buyRoom(rd.id);
                      }
                    }}
                    disabled={!owned && !canAfford}
                    className={`p-3 rounded-xl text-left transition-all ${
                      owned
                        ? life.activeRoom === rd.id
                          ? "bg-neon-blue/15 border-2 border-neon-blue/40"
                          : "bg-white/8 border border-white/10 hover:border-neon-blue/30"
                        : canAfford
                          ? "bg-white/5 border border-white/10 hover:border-yellow-500/30"
                          : "bg-white/5 border border-white/5 opacity-40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{rd.icon}</span>
                      {!owned && (
                        rd.price === 0
                          ? <span className="text-[10px] text-green-400">Free</span>
                          : <span className="text-[10px] flex items-center gap-0.5 bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full">{rd.price} ⭐</span>
                      )}
                      {owned && <Check size={14} className="text-green-400" />}
                    </div>
                    <div className="text-sm font-semibold mt-1">{rd.name[lang] || rd.name.en}</div>
                    <div className="text-[10px] opacity-40">{rd.gridW}×{rd.gridH} grid</div>
                    {owned && <div className="text-[10px] opacity-50 mt-0.5">{fCount} {t.totalItems}</div>}
                    {!owned && <div className="flex items-center gap-1 mt-1 text-[10px] opacity-50"><Lock size={9} />{t.locked}</div>}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Low stat warnings */}
      {(["energy", "happiness", "hunger", "hygiene"] as StatId[]).map(stat => {
        if (life.stats[stat] >= 20) return null;
        const Icon = STAT_ICONS[stat];
        return (
          <motion.div
            key={`warn-${stat}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed left-3 text-[11px] flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-1.5 rounded-full"
            style={{ bottom: 20 + (["energy", "happiness", "hunger", "hygiene"].indexOf(stat)) * 34 }}
          >
            <Icon size={12} />
            {t[stat]} {t.statLow}
          </motion.div>
        );
      })}

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
