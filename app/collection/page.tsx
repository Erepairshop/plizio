"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Trophy, Layers, ArrowLeft, Crosshair, Zap, Brain, Calendar, Mountain, Star, Info, ChevronDown, ChevronUp, type LucideIcon } from "lucide-react";
import { getCards, getRarityConfig, removeCardsByRarity, type GameCard, type CardRarity } from "@/lib/cards";
import { addSpecialCards, getSpecialCardCount } from "@/lib/specialCards";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";

// ─── Translations ─────────────────────────────────────
const MILESTONE_LIST = [
  { icon: "🎮", label: { hu: "1 játék", de: "1 Spiel", en: "1 game", ro: "1 joc" }, reward: 1 },
  { icon: "🕹️", label: { hu: "10 játék", de: "10 Spiele", en: "10 games", ro: "10 jocuri" }, reward: 1 },
  { icon: "⚔️", label: { hu: "25 játék", de: "25 Spiele", en: "25 games", ro: "25 jocuri" }, reward: 2 },
  { icon: "🏅", label: { hu: "50 játék", de: "50 Spiele", en: "50 games", ro: "50 jocuri" }, reward: 3 },
  { icon: "👑", label: { hu: "100 játék", de: "100 Spiele", en: "100 games", ro: "100 jocuri" }, reward: 5 },
  { icon: "🏆", label: { hu: "250 játék", de: "250 Spiele", en: "250 games", ro: "250 jocuri" }, reward: 10 },
  { icon: "🔥", label: { hu: "7 napos streak", de: "7-Tage-Streak", en: "7-day streak", ro: "Streak 7 zile" }, reward: 2 },
  { icon: "🔥", label: { hu: "14 napos streak", de: "14-Tage-Streak", en: "14-day streak", ro: "Streak 14 zile" }, reward: 3 },
  { icon: "🔥", label: { hu: "30 napos streak", de: "30-Tage-Streak", en: "30-day streak", ro: "Streak 30 zile" }, reward: 5 },
  { icon: "💯", label: { hu: "1 tökéletes", de: "1 perfektes Ergebnis", en: "1 perfect score", ro: "1 scor perfect" }, reward: 1 },
  { icon: "💯", label: { hu: "5 tökéletes", de: "5 perfekte Ergebnisse", en: "5 perfect scores", ro: "5 scoruri perfecte" }, reward: 3 },
  { icon: "🏔️", label: { hu: "Sky 10. szint", de: "Sky Level 10", en: "Sky level 10", ro: "Sky nivel 10" }, reward: 1 },
  { icon: "🏔️", label: { hu: "Sky 17. szint", de: "Sky Level 17", en: "Sky level 17", ro: "Sky nivel 17" }, reward: 2 },
];

const T: Record<Language, {
  title: string;
  exchange: string;
  exchangeBtn: (n: number) => string;
  exchangeNone: string;
  exchangeDone: string;
  exchangeRate: string;
  infoTitle: string;
  streakTitle: string;
  streakDesc: string;
  rarityTitle: string;
  rarityRules: Record<CardRarity, string>;
  legendaryTitle: string;
  legendaryDesc: string;
  starsTitle: string;
  starsDesc: string;
  milestonesTitle: string;
  milestonesDesc: string;
  emptyMsg: string;
  usedCards: (used: number, total: number) => string;
}> = {
  hu: {
    title: "Kártyagyűjtemény",
    exchange: "Kártyák beváltása",
    exchangeBtn: (n) => `Becserélem (+${n} ⭐)`,
    exchangeNone: "Nincs elegendő kártya a beváltáshoz",
    exchangeDone: "✓ Sikeresen becserélve!",
    exchangeRate: "1 legendás = 1⭐ · 10 arany = 1⭐ · 20 ezüst = 1⭐ · 30 bronz = 1⭐",
    infoTitle: "Hogyan működnek a kártyák?",
    streakTitle: "Streak (napi sorozat)",
    streakDesc: "Ha egymás utáni napokon játszol, streak-et gyűjtesz. Minden nap +2% bónuszt ad az effektív pontszázalékodhoz (max +15% = 7+ nap).",
    rarityTitle: "Kártya ritkasági szintek",
    rarityRules: {
      legendary: "100% eredmény + legalább 3 napos streak",
      gold: "95%+ effektív pontszám (alap% + streak bónusz)",
      silver: "70%+ effektív pontszám",
      bronze: "70% alatt",
    },
    legendaryTitle: "Hol szerezhető legendás kártya?",
    legendaryDesc: "Matekteszt, Milliomos, Szókeverő, Különbségkereső, Quick Pick, Számroham — ezekben a játékokban szerezhető legendás kártya.",
    starsTitle: "Csillagok (⭐)",
    starsDesc: "Mérföldkövek teljesítésekor, megosztásokért, kártyák beváltásával szerezhető. A boltban skinek és egyebek vásárolhatók érte.",
    milestonesTitle: "Mérföldkövek — jutalmak",
    milestonesDesc: "Egyszer teljesíthető. A jutalom automatikusan pop-upban jelenik meg játék után — ott kell átvenni.",
    emptyMsg: "Játssz, hogy kártyákat gyűjts!",
    usedCards: (used, total) => `${total} db · ${used}/${total} bevált`,
  },
  de: {
    title: "Kartensammlung",
    exchange: "Karten einlösen",
    exchangeBtn: (n) => `Einlösen (+${n} ⭐)`,
    exchangeNone: "Nicht genug Karten zum Einlösen",
    exchangeDone: "✓ Erfolgreich eingelöst!",
    exchangeRate: "1 Legendär = 1⭐ · 10 Gold = 1⭐ · 20 Silber = 1⭐ · 30 Bronze = 1⭐",
    infoTitle: "Wie funktionieren Karten?",
    streakTitle: "Streak (Tagesserie)",
    streakDesc: "Wenn du an aufeinanderfolgenden Tagen spielst, sammelst du einen Streak. Jeder Tag gibt +2% Bonus auf deine effektive Punktzahl (max. +15% = 7+ Tage).",
    rarityTitle: "Karten-Seltenheitsstufen",
    rarityRules: {
      legendary: "100% Ergebnis + mindestens 3 Tage Streak",
      gold: "95%+ effektive Punktzahl (Basis% + Streak-Bonus)",
      silver: "70%+ effektive Punktzahl",
      bronze: "Unter 70%",
    },
    legendaryTitle: "Wo gibt es Legendär-Karten?",
    legendaryDesc: "Mathetest, Milliomos, Wortmix, Unterschiede suchen, Quick Pick, Nummernrausch — in diesen Spielen sind Legendär-Karten möglich.",
    starsTitle: "Sterne (⭐)",
    starsDesc: "Verdient durch Meilensteine, Teilen und Karten einlösen. Im Shop für Skins und mehr verwendbar.",
    milestonesTitle: "Meilensteine — Belohnungen",
    milestonesDesc: "Einmalig erreichbar. Die Belohnung erscheint automatisch als Pop-up nach dem Spiel — dort einlösbar.",
    emptyMsg: "Spiele, um Karten zu sammeln!",
    usedCards: (used, total) => `${total} Stk. · ${used}/${total} eingelöst`,
  },
  en: {
    title: "Card Collection",
    exchange: "Redeem Cards",
    exchangeBtn: (n) => `Redeem (+${n} ⭐)`,
    exchangeNone: "Not enough cards to redeem",
    exchangeDone: "✓ Successfully redeemed!",
    exchangeRate: "1 legendary = 1⭐ · 10 gold = 1⭐ · 20 silver = 1⭐ · 30 bronze = 1⭐",
    infoTitle: "How do cards work?",
    streakTitle: "Streak (daily series)",
    streakDesc: "Playing on consecutive days builds your streak. Each day adds +2% bonus to your effective score (max +15% = 7+ days).",
    rarityTitle: "Card rarity levels",
    rarityRules: {
      legendary: "100% score + at least 3-day streak",
      gold: "95%+ effective score (base% + streak bonus)",
      silver: "70%+ effective score",
      bronze: "Below 70%",
    },
    legendaryTitle: "Where can you get legendary cards?",
    legendaryDesc: "Math Test, Milliomos, Word Scramble, Spot the Diff, Quick Pick, Number Rush — legendary cards are possible in these games.",
    starsTitle: "Stars (⭐)",
    starsDesc: "Earned through milestones, sharing, and redeeming cards. Use them in the shop to buy skins and more.",
    milestonesTitle: "Milestones — rewards",
    milestonesDesc: "Each milestone can be earned once. The reward appears automatically as a pop-up after a game — claim it there.",
    emptyMsg: "Play games to earn cards!",
    usedCards: (used, total) => `${total} cards · ${used}/${total} redeemable`,
  },
  ro: {
    title: "Colecție de cărți",
    exchange: "Schimbă cărți",
    exchangeBtn: (n) => `Schimbă (+${n} ⭐)`,
    exchangeNone: "Nu sunt suficiente cărți de schimbat",
    exchangeDone: "✓ Schimbat cu succes!",
    exchangeRate: "1 legendar = 1⭐ · 10 aur = 1⭐ · 20 argint = 1⭐ · 30 bronz = 1⭐",
    infoTitle: "Cum funcționează cărțile?",
    streakTitle: "Streak (serie zilnică)",
    streakDesc: "Jucând în zile consecutive îți construiești streak-ul. Fiecare zi adaugă +2% bonus la scorul efectiv (max. +15% = 7+ zile).",
    rarityTitle: "Niveluri de raritate",
    rarityRules: {
      legendary: "100% scor + cel puțin 3 zile streak",
      gold: "95%+ scor efectiv (bază% + bonus streak)",
      silver: "70%+ scor efectiv",
      bronze: "Sub 70%",
    },
    legendaryTitle: "Unde poți obține cărți legendare?",
    legendaryDesc: "Test Mate, Milliomos, Anagramă, Găsește Diferența, Quick Pick, Avalanșă de Numere — cărțile legendare sunt posibile în aceste jocuri.",
    starsTitle: "Stele (⭐)",
    starsDesc: "Câștigate prin jaloane, distribuire și schimbul de cărți. Folosite în magazin pentru skinuri și altele.",
    milestonesTitle: "Jaloane — recompense",
    milestonesDesc: "Fiecare jalon se poate obține o singură dată. Recompensa apare automat ca pop-up după joc — revendică-o acolo.",
    emptyMsg: "Joacă pentru a colecta cărți!",
    usedCards: (used, total) => `${total} buc. · ${used}/${total} schimbabil`,
  },
};

const RARITY_NAMES: Record<Language, Record<CardRarity, string>> = {
  hu: { legendary: "Legendás", gold: "Arany", silver: "Ezüst", bronze: "Bronz" },
  de: { legendary: "Legendär", gold: "Gold", silver: "Silber", bronze: "Bronze" },
  en: { legendary: "Legendary", gold: "Gold", silver: "Silver", bronze: "Bronze" },
  ro: { legendary: "Legendar", gold: "Aur", silver: "Argint", bronze: "Bronz" },
};

const GAME_NAMES: Record<Language, Record<string, string>> = {
  hu: {
    quickpick: "Quick Pick", reflexgrid: "Reflex Grid", memoryflash: "Memory Flash",
    daily: "Napi Kihívás", skyclimb: "Sky Climb", mathtest: "Matekteszt",
    wordscramble: "Szókeverő", spotdiff: "Különbségkereső", numberrush: "Számroham",
    milliomos: "Milliomos", racetrack: "Versenyút", citydrive: "Városvezetés",
  },
  de: {
    quickpick: "Quick Pick", reflexgrid: "Reflex Grid", memoryflash: "Memory Flash",
    daily: "Tägliche Challenge", skyclimb: "Sky Climb", mathtest: "Mathetest",
    wordscramble: "Wortmix", spotdiff: "Unterschiede suchen", numberrush: "Nummernrausch",
    milliomos: "Milliomos", racetrack: "Rennstrecke", citydrive: "Stadtfahrt",
  },
  en: {
    quickpick: "Quick Pick", reflexgrid: "Reflex Grid", memoryflash: "Memory Flash",
    daily: "Daily Challenge", skyclimb: "Sky Climb", mathtest: "Math Test",
    wordscramble: "Word Scramble", spotdiff: "Spot the Diff", numberrush: "Number Rush",
    milliomos: "Milliomos", racetrack: "Racetrack", citydrive: "City Drive",
  },
  ro: {
    quickpick: "Quick Pick", reflexgrid: "Reflex Grid", memoryflash: "Memory Flash",
    daily: "Provocarea zilnică", skyclimb: "Sky Climb", mathtest: "Test Mate",
    wordscramble: "Anagramă", spotdiff: "Găsește Diferența", numberrush: "Avalanșă de Numere",
    milliomos: "Milliomos", racetrack: "Circuit", citydrive: "Condus prin oraș",
  },
};

// ─── Static maps ──────────────────────────────────────
const GAME_ICONS: Record<string, LucideIcon> = {
  quickpick: Crosshair, reflexgrid: Zap, memoryflash: Brain,
  daily: Calendar, skyclimb: Mountain,
};

const GAME_COLORS: Record<string, string> = {
  quickpick: "#FF2D78", reflexgrid: "#00D4FF", memoryflash: "#B44DFF",
  daily: "#FFD700", skyclimb: "#00FF88", mathtest: "#FF8C00",
  wordscramble: "#00CED1", spotdiff: "#FF69B4", numberrush: "#7FFF00",
  milliomos: "#FFD700", racetrack: "#FF4500", citydrive: "#1E90FF",
};

const RARITY_ORDER: CardRarity[] = ["legendary", "gold", "silver", "bronze"];
const RARITY_RANK: Record<CardRarity, number> = { legendary: 0, gold: 1, silver: 2, bronze: 3 };
// 60 pt = 1 star: legendary=60pt, gold=6pt, silver=3pt, bronze=2pt
const MICRO_PER_CARD: Record<CardRarity, number> = { legendary: 60, gold: 6, silver: 3, bronze: 2 };
const MICRO_PER_STAR = 60;

interface GameBest { game: string; bestCard: GameCard; count: number; }

// ─── Component ────────────────────────────────────────
export default function CollectionPage() {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang];
  const rn = RARITY_NAMES[lang];
  const gn = GAME_NAMES[lang];

  const [cards, setCards] = useState<GameCard[]>([]);
  const [stars, setStars] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [exchanged, setExchanged] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setCards(getCards());
      setStars(getSpecialCardCount());
    };
    refresh();
    // Re-read localStorage when tab regains focus (handles bfcache / back-navigation)
    const onVisible = () => { if (document.visibilityState === "visible") refresh(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  const gameBests: GameBest[] = (() => {
    const grouped: Record<string, GameCard[]> = {};
    for (const card of cards) {
      if (!grouped[card.game]) grouped[card.game] = [];
      grouped[card.game].push(card);
    }
    return Object.entries(grouped)
      .map(([game, gameCards]) => {
        const best = gameCards.reduce((a, b) =>
          RARITY_RANK[a.rarity] < RARITY_RANK[b.rarity] ? a :
          RARITY_RANK[a.rarity] > RARITY_RANK[b.rarity] ? b :
          a.score / a.total >= b.score / b.total ? a : b
        );
        return { game, bestCard: best, count: gameCards.length };
      })
      .sort((a, b) => RARITY_RANK[a.bestCard.rarity] - RARITY_RANK[b.bestCard.rarity]);
  })();

  const rarityCounts = {
    legendary: cards.filter((c) => c.rarity === "legendary").length,
    gold: cards.filter((c) => c.rarity === "gold").length,
    silver: cards.filter((c) => c.rarity === "silver").length,
    bronze: cards.filter((c) => c.rarity === "bronze").length,
  };

  // Combined micro-unit calculation: legendary=60pt, gold=6pt, silver=3pt, bronze=2pt · 60pt=1⭐
  const microPts = {
    legendary: rarityCounts.legendary * MICRO_PER_CARD.legendary,
    gold: rarityCounts.gold * MICRO_PER_CARD.gold,
    silver: rarityCounts.silver * MICRO_PER_CARD.silver,
    bronze: rarityCounts.bronze * MICRO_PER_CARD.bronze,
  };
  const totalMicro = Object.values(microPts).reduce((a, b) => a + b, 0);
  const totalExchangeable = Math.floor(totalMicro / MICRO_PER_STAR);
  const remainderMicro = totalMicro % MICRO_PER_STAR;

  const handleExchange = () => {
    if (totalExchangeable === 0) return;
    // Greedy removal: highest rarity first, covering exactly totalExchangeable * 60 micro
    let toFill = totalExchangeable * MICRO_PER_STAR;
    const toRemove: Record<CardRarity, number> = { legendary: 0, gold: 0, silver: 0, bronze: 0 };
    for (const rarity of ["legendary", "gold", "silver", "bronze"] as CardRarity[]) {
      const value = MICRO_PER_CARD[rarity];
      const canRemove = Math.min(Math.floor(toFill / value), rarityCounts[rarity]);
      toRemove[rarity] = canRemove;
      toFill -= canRemove * value;
    }
    // Edge case: 1pt remainder can't be covered by bronze (2pt min) — use 1 extra bronze
    if (toFill === 1 && toRemove.bronze < rarityCounts.bronze) toRemove.bronze += 1;
    removeCardsByRarity("legendary", toRemove.legendary);
    removeCardsByRarity("gold", toRemove.gold);
    removeCardsByRarity("silver", toRemove.silver);
    removeCardsByRarity("bronze", toRemove.bronze);
    const newTotal = addSpecialCards(totalExchangeable);
    setStars(newTotal);
    setCards(getCards());
    setExchanged(true);
    setTimeout(() => setExchanged(false), 2500);
  };

  return (
    <main className="min-h-screen px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between max-w-lg mx-auto mb-6">
        <motion.button
          onClick={() => router.push("/")}
          className="p-2 rounded-xl bg-card border border-white/5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} className="text-white/40" />
        </motion.button>

        <h1 className="text-white font-bold text-lg">{t.title}</h1>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <Star size={14} className="text-yellow-400" />
          <span className="text-yellow-400 font-bold text-sm">{stars}</span>
        </div>
      </div>

      {/* Rarity counters */}
      <motion.div
        className="flex items-center justify-center gap-6 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {RARITY_ORDER.map((rarity) => {
          const config = getRarityConfig(rarity);
          return (
            <div key={rarity} className="flex flex-col items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.color, boxShadow: `0 0 6px ${config.color}60` }} />
              <span className="text-[10px] font-bold" style={{ color: config.color }}>{rn[rarity]}</span>
              <span className="text-xs font-black" style={{ color: config.color }}>{rarityCounts[rarity]}</span>
            </div>
          );
        })}
      </motion.div>

      <div className="max-w-lg mx-auto space-y-4">
        {/* Exchange panel */}
        <motion.div
          className="rounded-2xl p-4 border border-yellow-500/20"
          style={{ background: "rgba(255, 215, 0, 0.04)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400" />
              <span className="text-white/80 font-bold text-sm">{t.exchange}</span>
            </div>
            <span className="text-yellow-400 font-black text-xl">+{totalExchangeable} ⭐</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            {(["legendary", "gold", "silver", "bronze"] as CardRarity[]).map((rarity) => {
              const config = getRarityConfig(rarity);
              const count = rarityCounts[rarity];
              const pts = microPts[rarity];
              return (
                <div key={rarity} className="px-3 py-2 rounded-xl" style={{ background: `${config.color}08`, border: `1px solid ${config.color}15` }}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black" style={{ color: config.color }}>{rn[rarity]}</span>
                    <span className="text-white/50 text-[11px] font-bold">{pts} pt</span>
                  </div>
                  <div className="text-white/25 text-[10px] mt-0.5">{count} db × {MICRO_PER_CARD[rarity]} pt</div>
                </div>
              );
            })}
          </div>

          {/* Combined total */}
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-white/30 text-[10px]">{totalMicro} pt ÷ 60 = {totalExchangeable}⭐</span>
            {remainderMicro > 0 && (
              <span className="text-white/20 text-[10px]">+{remainderMicro} pt {lang === "hu" ? "marad" : lang === "de" ? "Rest" : lang === "ro" ? "rest" : "left"}</span>
            )}
          </div>

          <div className="text-white/20 text-[10px] mb-3 text-center leading-relaxed">
            {t.exchangeRate}
          </div>

          <AnimatePresence mode="wait">
            {exchanged ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full py-2.5 rounded-xl font-bold text-sm text-center text-green-400 border border-green-500/30"
                style={{ background: "rgba(0,255,100,0.06)" }}
              >
                {t.exchangeDone}
              </motion.div>
            ) : (
              <motion.button
                key="btn"
                onClick={handleExchange}
                disabled={totalExchangeable === 0}
                className="w-full py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: totalExchangeable > 0
                    ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                    : "rgba(255,255,255,0.05)",
                  color: totalExchangeable > 0 ? "#000" : "rgba(255,255,255,0.3)",
                }}
                whileHover={totalExchangeable > 0 ? { scale: 1.02 } : undefined}
                whileTap={totalExchangeable > 0 ? { scale: 0.98 } : undefined}
              >
                {totalExchangeable > 0 ? t.exchangeBtn(totalExchangeable) : t.exchangeNone}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info section */}
        <motion.div
          className="rounded-2xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <Info size={16} className="text-white/40" />
              <span className="text-white/60 font-bold text-sm">{t.infoTitle}</span>
            </div>
            {showInfo
              ? <ChevronUp size={16} className="text-white/30" />
              : <ChevronDown size={16} className="text-white/30" />}
          </button>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-4 border-t border-white/5 pt-3">
                  {/* Streak */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">🔥</span>
                      <span className="text-white/80 font-bold text-sm">{t.streakTitle}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6">{t.streakDesc}</p>
                  </div>

                  {/* Rarity rules */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">🃏</span>
                      <span className="text-white/80 font-bold text-sm">{t.rarityTitle}</span>
                    </div>
                    <div className="space-y-2 pl-6">
                      {(["legendary", "gold", "silver", "bronze"] as CardRarity[]).map((rarity) => {
                        const config = getRarityConfig(rarity);
                        return (
                          <div key={rarity} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ backgroundColor: config.color }} />
                            <div>
                              <span className="text-[11px] font-black" style={{ color: config.color }}>{rn[rarity]}: </span>
                              <span className="text-white/35 text-[11px]">{t.rarityRules[rarity]}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Legendary games */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">👑</span>
                      <span className="text-white/80 font-bold text-sm">{t.legendaryTitle}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6">{t.legendaryDesc}</p>
                  </div>

                  {/* Stars */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">⭐</span>
                      <span className="text-white/80 font-bold text-sm">{t.starsTitle}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6">{t.starsDesc}</p>
                  </div>

                  {/* Milestones */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">🎯</span>
                      <span className="text-white/80 font-bold text-sm">{t.milestonesTitle}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6 mb-2">{t.milestonesDesc}</p>
                    <div className="pl-6 grid grid-cols-2 gap-1">
                      {MILESTONE_LIST.map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-[11px]">{m.icon}</span>
                          <span className="text-white/35 text-[10px] flex-1 truncate">{m.label[lang]}</span>
                          <span className="text-yellow-400 text-[10px] font-bold shrink-0">+{m.reward}⭐</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Game cards */}
        {cards.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Layers size={48} className="text-white/10" />
            <p className="text-white/20 text-sm">{t.emptyMsg}</p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3">
            {gameBests.map((gb, i) => {
              const config = getRarityConfig(gb.bestCard.rarity);
              const GameIcon = GAME_ICONS[gb.game] || Trophy;
              const gameColor = GAME_COLORS[gb.game] || "#FFD700";
              const gameName = gn[gb.game] || gb.game;

              return (
                <motion.div
                  key={gb.game}
                  className="rounded-2xl p-4 flex items-center gap-4 border"
                  style={{
                    background: `linear-gradient(135deg, ${gameColor}08, ${config.color}05)`,
                    borderColor: `${config.color}25`,
                    boxShadow: gb.bestCard.rarity === "legendary" || gb.bestCard.rarity === "gold"
                      ? `0 0 20px ${config.color}10`
                      : undefined,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="p-3 rounded-xl shrink-0" style={{ background: `${gameColor}12` }}>
                    <GameIcon size={24} style={{ color: gameColor, filter: `drop-shadow(0 0 6px ${gameColor}40)` }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-white/70 text-sm font-bold">{gameName}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: config.color }}>
                        {rn[gb.bestCard.rarity]}
                      </span>
                      <span className="text-white/20 text-[10px]">•</span>
                      <span className="text-white/30 text-xs font-bold">
                        {gb.bestCard.score}/{gb.bestCard.total}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg shrink-0"
                    style={{ background: `${gameColor}10` }}
                  >
                    <Layers size={12} style={{ color: gameColor }} />
                    <span className="font-bold text-sm" style={{ color: gameColor }}>{gb.count}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
