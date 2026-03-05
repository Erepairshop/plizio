// ─── SPECIAL CARD SYSTEM ─────────────────────────────
// Special cards (⭐) are a currency earned through milestones, sharing, and referrals.
// They can be spent in the shop on power-ups, skins, and abilities.

const STORAGE_KEY = "plizio_special_cards";
const SHARE_KEY = "plizio_share_today";
const REFERRED_KEY = "plizio_referred";
const REFERRED_REWARDED_KEY = "plizio_referred_rewarded";

export function getSpecialCardCount(): number {
  if (typeof window === "undefined") return 0;
  const val = localStorage.getItem(STORAGE_KEY);
  return val ? parseInt(val) || 0 : 0;
}

export function addSpecialCards(amount: number): number {
  const current = getSpecialCardCount();
  const newTotal = current + amount;
  localStorage.setItem(STORAGE_KEY, newTotal.toString());
  localStorage.setItem("plizio_stars_dirty", "1");
  return newTotal;
}

export function spendSpecialCards(amount: number): boolean {
  const current = getSpecialCardCount();
  if (current < amount) return false;
  localStorage.setItem(STORAGE_KEY, (current - amount).toString());
  localStorage.setItem("plizio_stars_dirty", "1");
  return true;
}

// ─── SHARE REWARDS ───────────────────────────────────
const MAX_SHARES_PER_DAY = 3;

export function canEarnShareReward(): boolean {
  if (typeof window === "undefined") return false;
  const data = localStorage.getItem(SHARE_KEY);
  if (!data) return true;
  const { date, count } = JSON.parse(data);
  if (date !== new Date().toDateString()) return true;
  return count < MAX_SHARES_PER_DAY;
}

export function claimShareReward(): boolean {
  if (!canEarnShareReward()) return false;
  const today = new Date().toDateString();
  const data = localStorage.getItem(SHARE_KEY);
  let count = 0;
  if (data) {
    const parsed = JSON.parse(data);
    if (parsed.date === today) count = parsed.count;
  }
  localStorage.setItem(SHARE_KEY, JSON.stringify({ date: today, count: count + 1 }));
  addSpecialCards(1);
  return true;
}

// ─── REFERRAL SYSTEM ─────────────────────────────────

export function markAsReferred(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(REFERRED_KEY, "true");
}

export function isReferred(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(REFERRED_KEY) === "true";
}

export function claimReferralReward(): boolean {
  if (typeof window === "undefined") return false;
  if (!isReferred()) return false;
  if (localStorage.getItem(REFERRED_REWARDED_KEY) === "true") return false;
  localStorage.setItem(REFERRED_REWARDED_KEY, "true");
  addSpecialCards(1);
  return true;
}

// ─── CONSOLE CHEAT COMMANDS ─────────────────────────
// Usage: open browser console and type:
//   plizio.addStars(10)   → adds 10 purple stars
//   plizio.getStars()     → shows current count
//   plizio.setStars(50)   → sets exact amount
if (typeof window !== "undefined") {
  (window as any).plizio = {
    ...(window as any).plizio,
    addStars: (n: number) => { const t = addSpecialCards(n); console.log(`Added ${n} ⭐ → Total: ${t}`); return t; },
    getStars: () => { const c = getSpecialCardCount(); console.log(`⭐ Stars: ${c}`); return c; },
    setStars: (n: number) => { localStorage.setItem(STORAGE_KEY, n.toString()); console.log(`⭐ Stars set to: ${n}`); return n; },
  };
}
