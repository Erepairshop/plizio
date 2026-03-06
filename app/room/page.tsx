"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  type PlacedFurniture,
} from "@/lib/room";
import { getSpecialCardCount, spendSpecialCards } from "@/lib/specialCards";
import { useLang } from "@/components/LanguageProvider";

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
    empty: "Tap a spot to place furniture",
    noFurniture: "No furniture yet! Buy some in edit mode.",
    stars: "stars",
    notEnough: "Not enough stars!",
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
    empty: "Koppints egy helyre a bútor elhelyezéséhez",
    noFurniture: "Még nincs bútor! Vegyél a szerkesztő módban.",
    stars: "csillag",
    notEnough: "Nincs elég csillagod!",
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
    empty: "Tippe auf eine Stelle, um Möbel zu platzieren",
    noFurniture: "Noch keine Möbel! Kaufe welche im Bearbeitungsmodus.",
    stars: "Sterne",
    notEnough: "Nicht genug Sterne!",
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
    empty: "Atinge un loc pentru a plasa mobilierul",
    noFurniture: "Niciun mobilier încă! Cumpără din modul de editare.",
    stars: "stele",
    notEnough: "Nu ai destule stele!",
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
  const [windowAlpha, setWindowAlpha] = useState(0.3);
  const [confirmBuy, setConfirmBuy] = useState<{ type: "room" | "furniture"; id: string; price: number } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const currentRoom = ROOMS[currentRoomIdx];
  const isOwned = ownedRooms.includes(currentRoom.id);

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
    if (confirmBuy.type === "room") {
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

  // Place furniture on grid
  const handleSvgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!editMode || !selectedFurnitureId || !isOwned) return;

    const svg = e.currentTarget.querySelector("svg");
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const scaleX = viewBox.width / rect.width;
    const scaleY = viewBox.height / rect.height;

    const svgX = (e.clientX - rect.left) * scaleX;
    const svgY = (e.clientY - rect.top) * scaleY;

    // Convert SVG coords to grid coords
    const originX = currentRoom.gridH * 24 + 20; // TILE_W/2 = 24
    const originY = 120; // wallHeight

    const relX = svgX - originX;
    const relY = svgY - originY;

    const gx = Math.round((relX / 24 + relY / 12) / 2);
    const gy = Math.round((relY / 12 - relX / 24) / 2);

    const fDef = getFurnitureDef(selectedFurnitureId);
    if (!fDef) return;

    // Check bounds
    if (gx < 0 || gy < 0 || gx + fDef.gridW > currentRoom.gridW || gy + fDef.gridH > currentRoom.gridH) return;

    const newFurniture = [
      ...furniture,
      { furnitureId: selectedFurnitureId, gridX: gx, gridY: gy, rotation: 0 as const },
    ];
    setFurniture(newFurniture);
    saveRoomFurniture(currentRoom.id, newFurniture);
    setSelectedFurnitureId(null);
  };

  // Remove furniture
  const handleRemoveFurniture = (index: number) => {
    const newFurniture = furniture.filter((_, i) => i !== index);
    setFurniture(newFurniture);
    saveRoomFurniture(currentRoom.id, newFurniture);
  };

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

        <div className="flex items-center gap-2">
          <span className="text-lg">{currentRoom.icon}</span>
          <span className="font-medium">{t[currentRoom.nameKey]}</span>
          {!isOwned && (
            <span className="flex items-center gap-0.5 text-xs text-yellow-300">
              <Lock size={10} /> {currentRoom.price}⭐
            </span>
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
      <div className="flex-1 flex items-center justify-center px-2 pb-2 overflow-hidden">
        {isOwned ? (
          <motion.div
            key={currentRoom.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full flex items-center justify-center max-w-lg"
            onClick={editMode && selectedFurnitureId ? handleSvgClick : undefined}
          >
            <RoomRenderer
              roomType={currentRoom.id}
              gridW={currentRoom.gridW}
              gridH={currentRoom.gridH}
              furniture={furniture}
              windowAlpha={windowAlpha}
              showGrid={editMode}
            />
          </motion.div>
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
            {/* Placed furniture (removeable) */}
            {furniture.length > 0 && (
              <div className="mb-3">
                <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">
                  {t[currentRoom.nameKey]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {furniture.map((f, i) => {
                    const def = getFurnitureDef(f.furnitureId);
                    if (!def) return null;
                    return (
                      <button
                        key={i}
                        onClick={() => handleRemoveFurniture(i)}
                        className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs transition-colors"
                      >
                        <span>{def.icon}</span>
                        <Trash2 size={10} />
                      </button>
                    );
                  })}
                </div>
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

            {selectedFurnitureId && (
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
