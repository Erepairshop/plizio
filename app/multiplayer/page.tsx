"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Swords, Search, Clock, Trophy, ChevronLeft, Send, X,
  Loader2, Check, XCircle, Gamepad2, Users, Zap, Brain,
  Crosshair, Calculator, Shuffle,
} from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { getUsername, hasUsername, searchUsernames } from "@/lib/username";
import {
  createChallenge, acceptChallenge, declineChallenge,
  getMyPendingChallenges, getMyActiveMatches, getMyMatchHistory,
  type MultiplayerMatch, type GameType, GAME_LABELS,
} from "@/lib/multiplayer";

// ─── Translations ───────────────────────────────────────────

const T = {
  en: {
    title: "Multiplayer",
    subtitle: "Challenge your friends!",
    challenge: "Challenge",
    searchPlayer: "Search player name...",
    selectGame: "Select game",
    send: "Send Challenge",
    pending: "Pending",
    active: "Active Matches",
    history: "History",
    waiting: "Waiting for opponent...",
    accept: "Accept",
    decline: "Decline",
    you: "You",
    vs: "vs",
    won: "Won!",
    lost: "Lost",
    draw: "Draw",
    play: "Play",
    noMatches: "No matches yet",
    noChallenges: "No pending challenges",
    challengeSent: "Challenge sent!",
    opponentNotFound: "Player not found",
    needName: "Set your name first on the home page",
    incoming: "Incoming challenge!",
    score: "Score",
    back: "Back",
  },
  hu: {
    title: "Multiplayer",
    subtitle: "Hívd ki a barátaidat!",
    challenge: "Kihívás",
    searchPlayer: "Játékos neve...",
    selectGame: "Válassz játékot",
    send: "Kihívás küldése",
    pending: "Függőben",
    active: "Aktív meccsek",
    history: "Előzmények",
    waiting: "Várakozás az ellenfélre...",
    accept: "Elfogadás",
    decline: "Elutasítás",
    you: "Te",
    vs: "vs",
    won: "Győzelem!",
    lost: "Vereség",
    draw: "Döntetlen",
    play: "Játék",
    noMatches: "Még nincs meccs",
    noChallenges: "Nincs függő kihívás",
    challengeSent: "Kihívás elküldve!",
    opponentNotFound: "Játékos nem található",
    needName: "Előbb adj meg nevet a főoldalon",
    incoming: "Bejövő kihívás!",
    score: "Pont",
    back: "Vissza",
  },
  de: {
    title: "Multiplayer",
    subtitle: "Fordere deine Freunde heraus!",
    challenge: "Herausforderung",
    searchPlayer: "Spielername suchen...",
    selectGame: "Spiel wählen",
    send: "Herausforderung senden",
    pending: "Ausstehend",
    active: "Aktive Matches",
    history: "Verlauf",
    waiting: "Warte auf Gegner...",
    accept: "Annehmen",
    decline: "Ablehnen",
    you: "Du",
    vs: "vs",
    won: "Gewonnen!",
    lost: "Verloren",
    draw: "Unentschieden",
    play: "Spielen",
    noMatches: "Noch keine Matches",
    noChallenges: "Keine ausstehenden Herausforderungen",
    challengeSent: "Herausforderung gesendet!",
    opponentNotFound: "Spieler nicht gefunden",
    needName: "Setze zuerst deinen Namen auf der Startseite",
    incoming: "Eingehende Herausforderung!",
    score: "Punkte",
    back: "Zurück",
  },
  ro: {
    title: "Multiplayer",
    subtitle: "Provoacă-ți prietenii!",
    challenge: "Provoacă",
    searchPlayer: "Caută jucător...",
    selectGame: "Alege jocul",
    send: "Trimite provocare",
    pending: "În așteptare",
    active: "Meciuri active",
    history: "Istoric",
    waiting: "Se așteaptă adversarul...",
    accept: "Acceptă",
    decline: "Refuză",
    you: "Tu",
    vs: "vs",
    won: "Câștigat!",
    lost: "Pierdut",
    draw: "Egalitate",
    play: "Joacă",
    noMatches: "Niciun meci încă",
    noChallenges: "Nicio provocare",
    challengeSent: "Provocare trimisă!",
    opponentNotFound: "Jucător negăsit",
    needName: "Mai întâi alege un nume pe pagina principală",
    incoming: "Provocare primită!",
    score: "Scor",
    back: "Înapoi",
  },
};

const GAME_ICONS: Record<GameType, typeof Zap> = {
  quickpick: Zap,
  memoryflash: Brain,
  reflexgrid: Crosshair,
  mathtest: Calculator,
  wordscramble: Shuffle,
};

type Tab = "challenge" | "active" | "history";

export default function MultiplayerPage() {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang] || T.en;

  // Hydration-safe: read localStorage only on client
  const [myName, setMyName] = useState<string | null>(null);
  const [nameLoaded, setNameLoaded] = useState(false);
  useEffect(() => { setMyName(getUsername()); setNameLoaded(true); }, []);

  // ─── State ──────────────────────────────────────────────
  const [tab, setTab] = useState<Tab>("challenge");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [selectedOpponent, setSelectedOpponent] = useState("");
  const [selectedGame, setSelectedGame] = useState<GameType>("quickpick");
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  const [pendingChallenges, setPendingChallenges] = useState<MultiplayerMatch[]>([]);
  const [activeMatches, setActiveMatches] = useState<MultiplayerMatch[]>([]);
  const [matchHistory, setMatchHistory] = useState<MultiplayerMatch[]>([]);
  const [loading, setLoading] = useState(true);

  // Toast for incoming challenges
  const [incomingToast, setIncomingToast] = useState<MultiplayerMatch | null>(null);

  const searchTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const knownPendingIds = useRef<Set<string>>(new Set());
  const initialLoadDone = useRef(false);

  // ─── Load data ──────────────────────────────────────────
  const loadData = useCallback(async () => {
    const [pending, active, history] = await Promise.all([
      getMyPendingChallenges(),
      getMyActiveMatches(),
      getMyMatchHistory(),
    ]);
    // Detect genuinely new challenges (by ID, only after first load)
    if (initialLoadDone.current) {
      for (const m of pending) {
        if (!knownPendingIds.current.has(m.id)) {
          setIncomingToast(m);
          setTimeout(() => setIncomingToast(null), 5000);
          break; // show only one toast at a time
        }
      }
    }
    initialLoadDone.current = true;
    knownPendingIds.current = new Set(pending.map((m) => m.id));
    setPendingChallenges(pending);
    setActiveMatches(active);
    setMatchHistory(history);
    setLoading(false);
  }, []);

  // Poll every 5 seconds for updates (more reliable than Realtime filters)
  useEffect(() => {
    if (!myName) return;
    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, [myName, loadData]);

  // ─── Search players ───────────────────────────────────
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSendError("");
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (query.trim().length < 2) { setSearchResults([]); return; }
    searchTimeout.current = setTimeout(async () => {
      const results = await searchUsernames(query);
      setSearchResults(results);
    }, 300);
  };

  // ─── Send challenge ───────────────────────────────────
  const handleSendChallenge = async () => {
    if (!selectedOpponent) return;
    setSending(true);
    setSendError("");
    const { match, error } = await createChallenge(selectedGame, selectedOpponent);
    setSending(false);

    if (match) {
      setSentSuccess(true);
      setSelectedOpponent("");
      setSearchQuery("");
      setSearchResults([]);
      setTimeout(() => setSentSuccess(false), 3000);
      loadData();
    } else if (error === "opponent_not_found") {
      setSendError(t.opponentNotFound);
    } else {
      setSendError(error || "Error");
    }
  };

  // ─── Accept / Decline ─────────────────────────────────
  const handleAccept = async (match: MultiplayerMatch) => {
    await acceptChallenge(match.id);
    loadData();
    // Navigate to game
    router.push(`/${match.game}?match=${match.id}&seed=${match.seed}`);
  };

  const handleDecline = async (match: MultiplayerMatch) => {
    await declineChallenge(match.id);
    setPendingChallenges((prev) => prev.filter((m) => m.id !== match.id));
  };

  // ─── Loading / No name fallback ─────────────────────────────────
  if (!nameLoaded) {
    return <div className="min-h-screen bg-bg" />;
  }
  if (!myName) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 gap-4">
        <Swords size={48} className="text-neon-pink" />
        <p className="text-white/60 text-center text-sm">{t.needName}</p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-xl bg-neon-blue/15 border border-neon-blue/40 text-neon-blue text-sm font-bold"
        >
          {t.back}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg pb-20">
      {/* ── Header ────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-bg/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => router.push("/")} className="text-white/40 hover:text-white">
            <ChevronLeft size={20} />
          </button>
          <Swords size={22} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 8px rgba(255,45,120,0.4))" }} />
          <div className="flex-1">
            <h1 className="text-white font-bold text-sm">{t.title}</h1>
            <p className="text-white/30 text-[10px]">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2.5 py-1">
            <Users size={12} className="text-white/40" />
            <span className="text-white/60 text-xs font-bold">{myName}</span>
          </div>
        </div>
      </div>

      {/* ── Tabs ──────────────────────────────────────────── */}
      <div className="max-w-lg mx-auto px-4 pt-3">
        <div className="flex gap-1 bg-white/5 rounded-xl p-1">
          {(["challenge", "active", "history"] as Tab[]).map((t2) => (
            <button
              key={t2}
              onClick={() => setTab(t2)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                tab === t2
                  ? "bg-neon-pink/20 text-neon-pink border border-neon-pink/30"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {t2 === "challenge" ? t.challenge : t2 === "active" ? t.active : t.history}
              {t2 === "active" && pendingChallenges.length > 0 && (
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-neon-pink text-white text-[9px] font-bold">
                  {pendingChallenges.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4">
        <AnimatePresence mode="wait">
          {/* ── CHALLENGE TAB ─────────────────────────────── */}
          {tab === "challenge" && (
            <motion.div
              key="challenge"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-4"
            >
              {/* Search opponent */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={t.searchPlayer}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-neon-pink/40"
                />
              </div>

              {/* Search results dropdown */}
              {searchResults.length > 0 && (
                <div className="bg-card border border-white/10 rounded-xl overflow-hidden -mt-2">
                  {searchResults.map((name) => (
                    <button
                      key={name}
                      onClick={() => {
                        setSelectedOpponent(name);
                        setSearchQuery(name);
                        setSearchResults([]);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-white/5 transition-colors ${
                        selectedOpponent === name ? "text-neon-pink" : "text-white/70"
                      }`}
                    >
                      <Gamepad2 size={14} className="text-white/30" />
                      {name}
                    </button>
                  ))}
                </div>
              )}

              {/* Selected opponent */}
              {selectedOpponent && (
                <div className="flex items-center gap-2 bg-neon-pink/10 border border-neon-pink/20 rounded-xl px-4 py-2">
                  <Swords size={14} className="text-neon-pink" />
                  <span className="text-white text-sm font-bold flex-1">{selectedOpponent}</span>
                  <button onClick={() => { setSelectedOpponent(""); setSearchQuery(""); }} className="text-white/40 hover:text-white">
                    <X size={14} />
                  </button>
                </div>
              )}

              {/* Game selector */}
              <div className="flex flex-col gap-2">
                <span className="text-white/30 text-xs font-bold uppercase tracking-wider">{t.selectGame}</span>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(GAME_LABELS) as GameType[]).map((game) => {
                    const Icon = GAME_ICONS[game];
                    const isSelected = selectedGame === game;
                    return (
                      <button
                        key={game}
                        onClick={() => setSelectedGame(game)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-neon-blue/15 border-neon-blue/40 text-neon-blue"
                            : "bg-white/5 border-white/10 text-white/50 hover:border-white/20"
                        }`}
                      >
                        <Icon size={14} />
                        {GAME_LABELS[game]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Send button */}
              <motion.button
                onClick={handleSendChallenge}
                disabled={!selectedOpponent || sending}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-neon-pink/15 border border-neon-pink/40 text-neon-pink font-bold text-sm disabled:opacity-30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> :
                 sentSuccess ? <><Check size={16} /> {t.challengeSent}</> :
                 <><Send size={16} /> {t.send}</>}
              </motion.button>

              {sendError && (
                <p className="text-neon-pink text-xs text-center">{sendError}</p>
              )}

              {/* Pending challenges for me */}
              {pendingChallenges.length > 0 && (
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-white/30 text-xs font-bold uppercase tracking-wider">{t.pending}</span>
                  {pendingChallenges.map((match) => (
                    <ChallengeCard
                      key={match.id}
                      match={match}
                      myName={myName}
                      t={t}
                      onAccept={() => handleAccept(match)}
                      onDecline={() => handleDecline(match)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ── ACTIVE TAB ────────────────────────────────── */}
          {tab === "active" && (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-2"
            >
              {loading ? (
                <div className="flex justify-center py-12">
                  <Loader2 size={24} className="animate-spin text-white/30" />
                </div>
              ) : activeMatches.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-2">
                  <Gamepad2 size={32} className="text-white/10" />
                  <p className="text-white/30 text-xs">{t.noMatches}</p>
                </div>
              ) : (
                activeMatches.map((match) => (
                  <MatchCard key={match.id} match={match} myName={myName} t={t} router={router} />
                ))
              )}
            </motion.div>
          )}

          {/* ── HISTORY TAB ───────────────────────────────── */}
          {tab === "history" && (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-2"
            >
              {loading ? (
                <div className="flex justify-center py-12">
                  <Loader2 size={24} className="animate-spin text-white/30" />
                </div>
              ) : matchHistory.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-2">
                  <Trophy size={32} className="text-white/10" />
                  <p className="text-white/30 text-xs">{t.noMatches}</p>
                </div>
              ) : (
                matchHistory.map((match) => (
                  <HistoryCard key={match.id} match={match} myName={myName} t={t} />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Incoming challenge toast ──────────────────────── */}
      <AnimatePresence>
        {incomingToast && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-4 left-4 right-4 z-50 max-w-md mx-auto"
          >
            <div className="bg-card border border-neon-pink/30 rounded-xl p-4 flex items-center gap-3 shadow-lg shadow-neon-pink/10">
              <Swords size={20} className="text-neon-pink shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-bold">{t.incoming}</p>
                <p className="text-white/50 text-xs truncate">
                  {incomingToast.player1_name} — {GAME_LABELS[incomingToast.game as GameType]}
                </p>
              </div>
              <button
                onClick={() => { setIncomingToast(null); setTab("active"); }}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-neon-pink/20 text-neon-pink text-xs font-bold"
              >
                {t.accept}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Sub-components ─────────────────────────────────────────

function ChallengeCard({ match, myName, t, onAccept, onDecline }: {
  match: MultiplayerMatch;
  myName: string;
  t: Record<string, string>;
  onAccept: () => void;
  onDecline: () => void;
}) {
  const isForMe = match.player2_name?.toLowerCase() === myName.toLowerCase();
  const opponentName = isForMe ? match.player1_name : match.player2_name;
  const Icon = GAME_ICONS[match.game as GameType] || Gamepad2;

  return (
    <motion.div
      layout
      className="bg-card border border-white/10 rounded-xl p-3 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-lg bg-neon-pink/10 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-neon-pink" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-bold truncate">{opponentName}</p>
        <p className="text-white/30 text-[10px]">{GAME_LABELS[match.game as GameType]}</p>
      </div>
      {isForMe ? (
        <div className="flex gap-1.5">
          <button onClick={onAccept} className="px-3 py-1.5 rounded-lg bg-neon-green/15 border border-neon-green/30 text-neon-green text-xs font-bold">
            {t.accept}
          </button>
          <button onClick={onDecline} className="px-2 py-1.5 rounded-lg bg-white/5 text-white/40 text-xs">
            <X size={12} />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-white/30 text-[10px]">
          <Loader2 size={10} className="animate-spin" />
          {t.waiting}
        </div>
      )}
    </motion.div>
  );
}

function MatchCard({ match, myName, t, router }: {
  match: MultiplayerMatch;
  myName: string;
  t: Record<string, string>;
  router: ReturnType<typeof useRouter>;
}) {
  const isP1 = match.player1_name.toLowerCase() === myName.toLowerCase();
  const opponent = isP1 ? match.player2_name : match.player1_name;
  const myDone = isP1 ? match.player1_done : match.player2_done;
  const oppDone = isP1 ? match.player2_done : match.player1_done;
  const Icon = GAME_ICONS[match.game as GameType] || Gamepad2;

  return (
    <div className="bg-card border border-white/10 rounded-xl p-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-neon-blue" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-bold truncate">
          {t.you} {t.vs} {opponent}
        </p>
        <p className="text-white/30 text-[10px]">
          {GAME_LABELS[match.game as GameType]}
          {myDone && " — ✓ "}
          {oppDone && ` — ${opponent} ✓`}
        </p>
      </div>
      {!myDone && match.status === "playing" && (
        <button
          onClick={() => router.push(`/${match.game}?match=${match.id}&seed=${match.seed}&p=${isP1 ? "1" : "2"}`)}
          className="px-3 py-1.5 rounded-lg bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-xs font-bold"
        >
          {t.play}
        </button>
      )}
      {myDone && !oppDone && (
        <div className="flex items-center gap-1 text-white/30 text-[10px]">
          <Clock size={10} />
          {t.waiting}
        </div>
      )}
    </div>
  );
}

function HistoryCard({ match, myName, t }: {
  match: MultiplayerMatch;
  myName: string;
  t: Record<string, string>;
}) {
  const isP1 = match.player1_name.toLowerCase() === myName.toLowerCase();
  const opponent = isP1 ? match.player2_name : match.player1_name;
  const myScore = isP1 ? match.player1_score : match.player2_score;
  const oppScore = isP1 ? match.player2_score : match.player1_score;
  const Icon = GAME_ICONS[match.game as GameType] || Gamepad2;

  const iWon = (myScore ?? 0) > (oppScore ?? 0);
  const isDraw = myScore === oppScore;

  return (
    <div className="bg-card border border-white/10 rounded-xl p-3 flex items-center gap-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
        isDraw ? "bg-white/10" : iWon ? "bg-neon-green/10" : "bg-neon-pink/10"
      }`}>
        <Icon size={14} className={isDraw ? "text-white/40" : iWon ? "text-neon-green" : "text-neon-pink"} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-bold truncate">
          {t.vs} {opponent}
        </p>
        <p className="text-white/30 text-[10px]">
          {GAME_LABELS[match.game as GameType]} — {myScore ?? 0} : {oppScore ?? 0}
        </p>
      </div>
      <span className={`text-xs font-bold ${
        isDraw ? "text-white/40" : iWon ? "text-neon-green" : "text-neon-pink"
      }`}>
        {isDraw ? t.draw : iWon ? t.won : t.lost}
      </span>
    </div>
  );
}
