"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, X, Check, Users } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { getUsername } from "@/lib/username";
import {
  getMyPendingChallenges, acceptChallenge, declineChallenge,
  acceptGroupChallenge, declineGroupChallenge, isGroupMatch,
  type MultiplayerMatch, type MatchPlayer, type GameType,
  GAME_LABELS,
} from "@/lib/multiplayer";
import { useLang } from "@/components/LanguageProvider";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef } from "@/lib/accessories";

const T = {
  en: { hey: "Hey", invited: "challenged you to", accept: "Accept", decline: "Decline", waiting: "Waiting for response...", accepted: "Challenge accepted!", starting: "Starting in" },
  hu: { hey: "Hey", invited: "kihivott teged erre:", accept: "Elfogadom", decline: "Nem", waiting: "Varakozas a valaszra...", accepted: "Kihivas elfogadva!", starting: "Indul" },
  de: { hey: "Hey", invited: "fordert dich heraus zu", accept: "Annehmen", decline: "Ablehnen", waiting: "Warte auf Antwort...", accepted: "Herausforderung angenommen!", starting: "Start in" },
  ro: { hey: "Hei", invited: "te-a provocat la", accept: "Accept", decline: "Refuz", waiting: "Se asteapta raspunsul...", accepted: "Provocare acceptata!", starting: "Incepe in" },
};

export default function ChallengeOverlay() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useLang();
  const t = T[lang] || T.en;

  const [myName, setMyName] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<MultiplayerMatch | null>(null);
  const [phase, setPhase] = useState<"incoming" | "accepting" | "countdown">("incoming");
  const [countdown, setCountdown] = useState(3);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  // Avatar state
  const [gender] = useState<AvatarGender>(() => getGender());
  const [activeSkin] = useState(() => getSkinDef(getActiveSkin()));
  const [activeFace] = useState(() => getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
  const [avatarMood, setAvatarMood] = useState<"idle" | "surprised" | "happy" | "victory">("idle");

  const pollRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const dismissedRef = useRef<Set<string>>(new Set());
  const challengeRef = useRef<MultiplayerMatch | null>(null);

  // Keep refs in sync with state
  useEffect(() => { dismissedRef.current = dismissed; }, [dismissed]);
  useEffect(() => { challengeRef.current = challenge; }, [challenge]);

  useEffect(() => {
    setMyName(getUsername());
  }, []);

  // Poll for incoming challenges (skip if on /multiplayer page — that page handles its own)
  useEffect(() => {
    if (!myName || pathname === "/multiplayer") return;

    const check = async () => {
      try {
        const pending = await getMyPendingChallenges();
        if (pending.length > 0) {
          const newest = pending[0];
          if (!dismissedRef.current.has(newest.id) && (!challengeRef.current || challengeRef.current.id !== newest.id)) {
            setChallenge(newest);
            setPhase("incoming");
            setAvatarMood("surprised");
          }
        }
      } catch {
        // Silently ignore polling errors (network issues, 400s, etc.)
      }
    };

    check();
    pollRef.current = setInterval(check, 4000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [myName, pathname]);

  const handleAccept = useCallback(async () => {
    if (!challenge) return;
    setPhase("accepting");
    setAvatarMood("happy");

    if (isGroupMatch(challenge)) {
      const result = await acceptGroupChallenge(challenge.id);
      if (result.allAccepted) {
        // All accepted → go to countdown
        setTimeout(() => {
          setPhase("countdown");
          setAvatarMood("victory");
          setCountdown(3);
        }, 800);
      } else {
        // Not all accepted yet → redirect to multiplayer lobby
        setTimeout(() => {
          router.push("/multiplayer");
          setChallenge(null);
        }, 800);
      }
    } else {
      await acceptChallenge(challenge.id);
      setTimeout(() => {
        setPhase("countdown");
        setAvatarMood("victory");
        setCountdown(3);
      }, 800);
    }
  }, [challenge, router]);

  const handleDecline = useCallback(async () => {
    if (!challenge) return;
    if (isGroupMatch(challenge)) {
      await declineGroupChallenge(challenge.id);
    } else {
      await declineChallenge(challenge.id);
    }
    setDismissed((prev) => new Set(prev).add(challenge.id));
    setChallenge(null);
    setAvatarMood("idle");
  }, [challenge]);

  // Countdown timer
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown <= 0) {
      if (challenge) {
        const group = isGroupMatch(challenge);
        if (group) {
          // Group match navigation
          const players = (challenge.players_data || []) as MatchPlayer[];
          const myIdx = players.findIndex(p => p.name.toLowerCase() === myName?.toLowerCase());
          const pNum = myIdx >= 0 ? myIdx + 1 : 1;
          const opponents = players.filter(p => p.name.toLowerCase() !== myName?.toLowerCase()).map(p => encodeURIComponent(p.name)).join(",");
          let url = `/${challenge.game}?match=${challenge.id}&seed=${challenge.seed}&p=${pNum}&vs=${opponents}&players=${players.length}`;
          if (challenge.difficulty) url += `&level=${challenge.difficulty}`;
          router.push(url);
        } else {
          const isP1 = challenge.player1_name.toLowerCase() === myName?.toLowerCase();
          const opponent = (isP1 ? challenge.player2_name : challenge.player1_name) || "???";
          const isMix = challenge.match_type === "mix";
          if (isMix && challenge.mix_games) {
            const currentGame = challenge.mix_games[0];
            let url = `/${currentGame}?match=${challenge.id}&seed=${challenge.seed}&p=${isP1 ? "1" : "2"}&vs=${encodeURIComponent(opponent)}&mixround=1`;
            if (challenge.difficulty && String(challenge.difficulty).includes(",")) {
              const levels = String(challenge.difficulty).split(",");
              if (levels[0] && Number(levels[0]) > 0) url += `&level=${levels[0]}`;
            }
            router.push(url);
          } else {
            let url = `/${challenge.game}?match=${challenge.id}&seed=${challenge.seed}&p=${isP1 ? "1" : "2"}&vs=${encodeURIComponent(opponent)}`;
            if (challenge.difficulty) url += `&level=${challenge.difficulty}`;
            router.push(url);
          }
        }
        setChallenge(null);
      }
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown, challenge, myName, router]);

  if (!challenge) return null;

  const group = isGroupMatch(challenge);
  const groupPlayers = (challenge.players_data || []) as MatchPlayer[];
  const isMix = challenge.match_type === "mix";
  const gameLabel = isMix
    ? `Mix (${challenge.mix_games?.length || 5} games)`
    : GAME_LABELS[challenge.game as GameType] || challenge.game;
  const diffLabel = challenge.difficulty
    ? (isNaN(Number(challenge.difficulty)) ? String(challenge.difficulty) : `Lv.${challenge.difficulty}`)
    : null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="flex flex-col items-center gap-6 max-w-sm w-full"
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          {/* Avatar */}
          <motion.div
            className="w-40 h-40 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AvatarCompanion
              mood={avatarMood}
              fixed={false}
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
              passThrough={true}
            />
          </motion.div>

          {/* Speech bubble */}
          {phase === "incoming" && (
            <motion.div
              className="bg-card border border-white/10 rounded-2xl p-5 w-full relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Bubble arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-white/10 rotate-45" />

              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="flex items-center gap-2">
                  {group
                    ? <Users size={18} className="text-neon-purple" style={{ filter: "drop-shadow(0 0 8px rgba(180,77,255,0.4))" }} />
                    : <Swords size={18} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 8px rgba(255,45,120,0.4))" }} />}
                  <span className="text-white/70 text-xs font-bold uppercase tracking-wider">{t.hey} {myName}!</span>
                </div>

                <p className="text-white text-center text-sm">
                  <span className="font-bold text-neon-blue">{challenge.player1_name}</span>
                  {group && <span className="text-white/50"> + {groupPlayers.length - 1}</span>}
                  {" "}{t.invited}{" "}
                  <span className="font-bold text-neon-green">{gameLabel}</span>
                  {diffLabel && <span className="text-gold font-bold"> ({diffLabel})</span>}
                </p>

                <div className="flex gap-3 w-full mt-2">
                  <motion.button
                    onClick={handleDecline}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <X size={14} />
                    {t.decline}
                  </motion.button>
                  <motion.button
                    onClick={handleAccept}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neon-green/15 border border-neon-green/40 text-neon-green font-bold text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Check size={14} />
                    {t.accept}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Accepting phase */}
          {phase === "accepting" && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-neon-green font-bold text-lg" style={{ textShadow: "0 0 20px rgba(0,255,136,0.4)" }}>{t.accepted}</p>
            </motion.div>
          )}

          {/* Countdown phase */}
          {phase === "countdown" && (
            <motion.div className="flex flex-col items-center gap-4">
              <p className="text-white/70 text-sm font-bold">{t.starting}...</p>
              <motion.div
                key={countdown}
                className="text-7xl font-black text-neon-blue"
                style={{ textShadow: "0 0 30px rgba(0,212,255,0.6)" }}
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {countdown > 0 ? countdown : "GO!"}
              </motion.div>
              <p className="text-white/60 text-xs">
                {challenge.player1_name} vs {challenge.player2_name} — {gameLabel}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
