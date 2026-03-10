export type CardRarity = "bronze" | "silver" | "gold" | "legendary";

export interface GameCard {
  id: string;
  game: string;
  theme?: string;
  rarity: CardRarity;
  score: number;
  total: number;
  date: string;
}

const RARITY_CONFIG: Record<CardRarity, { color: string; border: string; glow: string; label: string }> = {
  bronze: {
    color: "#CD7F32",
    border: "border-amber-700",
    glow: "0 0 20px rgba(205,127,50,0.4)",
    label: "BRONZE",
  },
  silver: {
    color: "#C0C0C0",
    border: "border-gray-400",
    glow: "0 0 20px rgba(192,192,192,0.4)",
    label: "SILVER",
  },
  gold: {
    color: "#FFD700",
    border: "border-yellow-400",
    glow: "0 0 25px rgba(255,215,0,0.5)",
    label: "GOLD",
  },
  legendary: {
    color: "#B44DFF",
    border: "border-purple-400",
    glow: "0 0 30px rgba(180,77,255,0.5), 0 0 60px rgba(180,77,255,0.2)",
    label: "LEGENDARY",
  },
};

export function getRarityConfig(rarity: CardRarity) {
  return RARITY_CONFIG[rarity];
}

// allowGold: false = soha nem gold, true = 95% felett gold, szám = egyedi küszöb (pl. 85)
export function calculateRarity(score: number, total: number, streak: number, allowGold: boolean | number = true): CardRarity {
  const pct = (score / total) * 100;
  const streakBonus = Math.min(streak * 2, 15);
  const effectivePct = pct + streakBonus;
  if (pct === 100 && streak >= 3) return "legendary";
  const goldThreshold = allowGold === false ? Infinity : allowGold === true ? 95 : allowGold;
  if (effectivePct >= goldThreshold) return "gold";
  if (effectivePct >= 70) return "silver";
  return "bronze";
}

export function getCards(): GameCard[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("plizio_cards");
  return data ? JSON.parse(data) : [];
}

export function saveCard(card: GameCard): void {
  if (typeof window === "undefined") return;
  const cards = getCards();
  cards.push(card);
  localStorage.setItem("plizio_cards", JSON.stringify(cards));
  window.dispatchEvent(new Event("plizio-cards-changed"));
}

export function generateCardId(): string {
  return `card_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function removeCardsByRarity(rarity: CardRarity, count: number): void {
  if (typeof window === "undefined" || count <= 0) return;
  const cards = getCards();
  let removed = 0;
  const removedIds: string[] = [];
  const remaining = cards.filter((c) => {
    if (c.rarity === rarity && removed < count) {
      removed++;
      removedIds.push(c.id);
      return false;
    }
    return true;
  });
  if (removedIds.length > 0) {
    const existing: string[] = JSON.parse(localStorage.getItem("plizio_redeemed_ids") || "[]");
    localStorage.setItem("plizio_redeemed_ids", JSON.stringify([...existing, ...removedIds]));
  }
  localStorage.setItem("plizio_cards", JSON.stringify(remaining));
  window.dispatchEvent(new Event("plizio-cards-changed"));
}
