// lib/plizioStickerProgress.ts
// Sziget-befejezeshez kotott matrica-unlock rendszer.
// localStorage kulcs: "plizio:stickers" -> string[] (unlock-olt sticker ID-k).

import {
  PLIZIO_STICKERS,
  type StickerDef,
  type StickerRarity,
} from "@/lib/plizioStickers";

const STORAGE_KEY = "plizio:stickers";
const EVT_CHANGED = "plizio-stickers-changed";

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function getUnlockedStickerIds(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === "string");
  } catch {
    return [];
  }
}

export function isStickerUnlocked(id: string): boolean {
  return getUnlockedStickerIds().includes(id);
}

export function saveUnlockedStickerIds(ids: string[]): void {
  if (!isBrowser()) return;
  const uniq = Array.from(new Set(ids));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(uniq));
  window.dispatchEvent(new Event(EVT_CHANGED));
}

export function unlockSticker(id: string): boolean {
  if (!isBrowser()) return false;
  const ids = getUnlockedStickerIds();
  if (ids.includes(id)) return false;
  ids.push(id);
  saveUnlockedStickerIds(ids);
  return true;
}

// Cillagszam -> elerheto ritkasag-sulyok (csak igy tud legendary-t kapni 3 csillaggal)
function rarityWeightsByStars(stars: number): Record<StickerRarity, number> {
  const s = Math.max(0, Math.min(3, Math.round(stars)));
  if (s >= 3) return { common: 20, rare: 35, epic: 30, legendary: 15 };
  if (s === 2) return { common: 35, rare: 40, epic: 20, legendary: 5 };
  if (s === 1) return { common: 55, rare: 35, epic: 10, legendary: 0 };
  return { common: 80, rare: 20, epic: 0, legendary: 0 };
}

function pickRarity(weights: Record<StickerRarity, number>): StickerRarity {
  const entries = (Object.entries(weights) as Array<[StickerRarity, number]>).filter(([, w]) => w > 0);
  const total = entries.reduce((a, [, w]) => a + w, 0);
  if (total <= 0) return "common";
  let r = Math.random() * total;
  for (const [rar, w] of entries) {
    r -= w;
    if (r <= 0) return rar;
  }
  return entries[entries.length - 1][0];
}

function pickRandom<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

// Egy meg nem unlock-olt stickert huzunk ki a megadott ritkasaggal. Ha nincs ilyen ritkasagu, visszalepunk olcsobbra, majd bar­mi elerhetore.
function drawStickerByRarity(rarity: StickerRarity, exclude: Set<string>): StickerDef | null {
  const order: StickerRarity[] = (() => {
    if (rarity === "legendary") return ["legendary", "epic", "rare", "common"];
    if (rarity === "epic") return ["epic", "rare", "common", "legendary"];
    if (rarity === "rare") return ["rare", "common", "epic", "legendary"];
    return ["common", "rare", "epic", "legendary"];
  })();

  for (const rar of order) {
    const pool = PLIZIO_STICKERS.filter((s) => s.rarity === rar && !exclude.has(s.id));
    if (pool.length > 0) return pickRandom(pool);
  }
  return null;
}

/**
 * Szigetcomplete / mission vege utan huz egy uj matricat, csillagokbol szarmazo rarity-bias-szal.
 * - stars: 0..3 (vagy kozelito), nagyobb -> nagyobb esely epic/legendary-re
 * - Ha minden matrica mar fel van oldva, null-t ad vissza
 * - Visszateres a kihuzott StickerDef (toast / reward UI-hoz)
 */
export function awardStickerOnIslandComplete(stars: number): StickerDef | null {
  if (!isBrowser()) return null;

  const unlockedIds = getUnlockedStickerIds();
  const exclude = new Set(unlockedIds);
  if (exclude.size >= PLIZIO_STICKERS.length) return null;

  const weights = rarityWeightsByStars(stars);
  const rarity = pickRarity(weights);
  const picked = drawStickerByRarity(rarity, exclude);
  if (!picked) return null;

  unlockSticker(picked.id);
  // Analitika / toast eventet is kuldunk ki, hogy pl. a HUD reagalhasson.
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("plizio-sticker-awarded", {
        detail: { id: picked.id, rarity: picked.rarity },
      })
    );
  }
  return picked;
}

export const STICKERS_EVT_CHANGED = EVT_CHANGED;
