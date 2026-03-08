"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Trophy, Swords } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import {
  advanceMixRound,
  getMixStandings,
  type MultiplayerMatch,
  type GameType,
  GAME_LABELS,
} from "@/lib/multiplayer";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: { round: "Round", of: "of", waiting: "Waiting for opponent...", next: "Next game", finished: "Match over!", you: "You", score: "Score", wins: "Wins" },
  hu: { round: "Menet", of: "/", waiting: "Varakozas az ellenfélre...", next: "Kovetkezo jatek", finished: "Meccs vege!", you: "Te", score: "Pont", wins: "Gyozelem" },
  de: { round: "Runde", of: "von", waiting: "Warte auf Gegner...", next: "Nachstes Spiel", finished: "Spiel vorbei!", you: "Du", score: "Punkte", wins: "Siege" },
  ro: { round: "Runda", of: "din", waiting: "Se asteapta adversarul...", next: "Urmatorul joc", finished: "Meci terminat!", you: "Tu", score: "Scor", wins: "Victorii" },
};

interface Props {
  matchId: string;
  isPlayer1: boolean;
  myName: string;
  opponentName: string;
  myRoundScore: number;
  onNavigateToGame: (game: string, seed: string, round: number) => void;
  onMatchFinished: (match: MultiplayerMatch) => void;
}

export default function MixRoundWaiting({
  matchId,
  isPlayer1,
  myName,
  opponentName,
  myRoundScore,
  onNavigateToGame,
  onMatchFinished,
}: Props) {
  const { lang } = useLang();
  const t = T[lang] || T.en;

  const [phase, setPhase] = useState<"waiting" | "both_done" | "countdown">("waiting");
  const [match, setMatch] = useState<MultiplayerMatch | null>(null);
  const [countdown, setCountdown] = useState(3);
  const advancedRef = useRef(false);

  // Poll for opponent to finish their round
  useEffect(() => {
    if (phase !== "waiting") return;

    const check = async () => {
      const { data } = await supabase
        .from("multiplayer_matches")
        .select("*")
        .eq("id", matchId)
        .single();

      if (!data) return;
      setMatch(data as MultiplayerMatch);

      const bothDone = data.mix_round_done_p1 && data.mix_round_done_p2;
      if (bothDone) {
        setPhase("both_done");

        // Player 1 advances the round
        if (isPlayer1 && !advancedRef.current) {
          advancedRef.current = true;
          const result = await advanceMixRound(matchId);
          if (result.finished) {
            // Re-fetch final state
            const { data: final } = await supabase
              .from("multiplayer_matches")
              .select("*")
              .eq("id", matchId)
              .single();
            if (final) onMatchFinished(final as MultiplayerMatch);
          } else {
            // Short delay to show scores, then countdown to next round
            setTimeout(() => {
              setPhase("countdown");
              setCountdown(3);
            }, 2000);
          }
        } else if (!isPlayer1) {
          // Player 2: wait for round to advance, then start countdown
          setTimeout(() => {
            setPhase("countdown");
            setCountdown(3);
          }, 2500);
        }
      }
    };

    check();
    const interval = setInterval(check, 1500);
    return () => clearInterval(interval);
  }, [matchId, phase, isPlayer1, onMatchFinished]);

  // Countdown to next round
  useEffect(() => {
    if (phase !== "countdown") return;

    const fetchAndNavigate = async () => {
      const { data } = await supabase
        .from("multiplayer_matches")
        .select("*")
        .eq("id", matchId)
        .single();

      if (!data) return;

      const m = data as MultiplayerMatch;
      if (m.status === "finished") {
        onMatchFinished(m);
        return;
      }

      const round = m.mix_round || 1;
      const games = m.mix_games || [];
      const currentGame = games[round - 1];
      if (currentGame) {
        onNavigateToGame(currentGame, m.seed, round);
      }
    };

    if (countdown <= 0) {
      fetchAndNavigate();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown, matchId, onNavigateToGame, onMatchFinished]);

  // Calculate standings
  const p1Scores = match?.mix_scores_p1 || [];
  const p2Scores = match?.mix_scores_p2 || [];
  const myScores = isPlayer1 ? p1Scores : p2Scores;
  const oppScores = isPlayer1 ? p2Scores : p1Scores;
  const standings = getMixStandings(myScores, oppScores);
  const totalRounds = match?.mix_games?.length || 5;
  const currentRound = match?.mix_round || 1;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center gap-6 max-w-sm w-full">
        {/* Round info */}
        <div className="text-center">
          <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
            {t.round} {currentRound} {t.of} {totalRounds}
          </p>
          {match?.mix_games && match.mix_games[currentRound - 1] && (
            <p className="text-white/60 text-sm mt-1">
              {GAME_LABELS[match.mix_games[currentRound - 1] as GameType]}
            </p>
          )}
        </div>

        {/* Score display */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/50 text-xs">{t.you}</span>
            <span className="text-4xl font-black text-neon-blue" style={{ textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              {standings.p1Wins}
            </span>
            <span className="text-white/40 text-[10px]">{myName}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Swords size={20} className="text-white/20" />
            <span className="text-white/20 text-lg font-bold">vs</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/50 text-xs">&nbsp;</span>
            <span className="text-4xl font-black text-neon-pink" style={{ textShadow: "0 0 20px rgba(255,45,120,0.5)" }}>
              {standings.p2Wins}
            </span>
            <span className="text-white/40 text-[10px]">{opponentName}</span>
          </div>
        </div>

        {/* Round scores breakdown */}
        {myScores.length > 0 && (
          <div className="w-full bg-white/5 rounded-xl p-3 flex flex-col gap-1.5">
            {myScores.map((score, i) => {
              const oppScore = oppScores[i] ?? 0;
              const iWon = score > oppScore;
              const isDraw = score === oppScore;
              return (
                <div key={i} className="flex items-center text-xs">
                  <span className="text-white/30 w-16 shrink-0">
                    {t.round} {i + 1}
                  </span>
                  <span className="text-white/50 w-16 shrink-0 text-[10px]">
                    {match?.mix_games ? GAME_LABELS[match.mix_games[i] as GameType]?.slice(0, 8) : ""}
                  </span>
                  <span className={`flex-1 text-right font-bold ${iWon ? "text-neon-green" : isDraw ? "text-white/40" : "text-neon-pink"}`}>
                    {score} - {oppScore}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Status */}
        {phase === "waiting" && (
          <div className="flex items-center gap-2">
            <Loader2 size={14} className="animate-spin text-neon-blue" />
            <span className="text-white/50 text-sm">{t.waiting}</span>
          </div>
        )}

        {phase === "both_done" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-neon-green font-bold text-sm"
          >
            {t.next}...
          </motion.div>
        )}

        {phase === "countdown" && (
          <motion.div
            key={countdown}
            className="text-5xl font-black text-neon-blue"
            style={{ textShadow: "0 0 30px rgba(0,212,255,0.6)" }}
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {countdown > 0 ? countdown : "GO!"}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
