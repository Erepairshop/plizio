"use client";

import { useEffect, useState } from "react";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";

type Mood = 'idle'|'focused'|'happy'|'disappointed'|'victory'|'surprised'|'confused'|'laughing';
type Reaction = 'happy'|'surprised'|'victory'|'confused'|'laughing'|'wave'|'dance'|'spin';

const MOODS: Mood[] = ['idle','focused','happy','disappointed','victory','surprised','confused','laughing'];
const REACTIONS: Reaction[] = ['happy','surprised','victory','confused','laughing','wave','dance','spin'];

export default function AvatarTestPage() {
  const [mounted, setMounted] = useState(false);
  const [mood, setMood] = useState<Mood>('idle');
  const [jump, setJump] = useState<{ reaction: Reaction | null; timestamp: number }>({ reaction: null, timestamp: 0 });
  const [mode, setMode] = useState<"embedded"|"fixed">("embedded");

  const [gender, setGender] = useState<AvatarGender>('boy');
  const [activeSkin, setActiveSkin] = useState<any>(null);
  const [activeFace, setActiveFace] = useState<any>(null);
  const [activeTop, setActiveTop] = useState<any>(null);
  const [activeBottom, setActiveBottom] = useState<any>(null);
  const [activeShoe, setActiveShoe] = useState<any>(null);
  const [activeCape, setActiveCape] = useState<any>(null);
  const [activeGlasses, setActiveGlasses] = useState<any>(null);
  const [activeGloves, setActiveGloves] = useState<any>(null);
  const [activeHat, setActiveHat] = useState<any>(null);
  const [activeTrail, setActiveTrail] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    setGender(getGender());
    setActiveSkin(getSkinDef(getActiveSkin()));
    setActiveFace(getFaceDef(getActiveFace()));
    const topId = getActive("top"); setActiveTop(topId ? getTopDef(topId) : null);
    const botId = getActive("bottom"); setActiveBottom(botId ? getBottomDef(botId) : null);
    const shoeId = getActive("shoe"); setActiveShoe(shoeId ? getShoeDef(shoeId) : null);
    const capeId = getActive("cape"); setActiveCape(capeId ? getCapeDef(capeId) : null);
    const gl = getActive("glasses"); setActiveGlasses(gl ? getGlassesDef(gl) : null);
    const gv = getActive("gloves"); setActiveGloves(gv ? getGloveDef(gv) : null);
    const hatId = getActiveHat(); setActiveHat(hatId ? getHatDef(hatId) : null);
    const trailId = getActiveTrail(); setActiveTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  const triggerReaction = (r: Reaction) => {
    setJump({ reaction: r, timestamp: Date.now() });
  };

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  if (!mounted) return <div className="min-h-screen bg-[#060614]" />;

  return (
    <div className="min-h-screen bg-[#060614] text-white p-4 pb-64">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-black mb-4">Avatar Animation Test</h1>
        <p className="text-white/60 text-sm mb-6">
          Háttérrel teszt: olvasható szöveg van az avatar mögött (jobb alsó sarokban fixed mód).
          Kattintsd a gombokat az animációk tesztelésére.
        </p>

        <div className="mb-6">
          <p className="text-white/80 font-bold mb-2">Megjelenés:</p>
          <div className="flex gap-2">
            <button onClick={() => setMode("embedded")}
              className={`px-4 py-2 rounded font-bold ${mode==="embedded"?"bg-blue-500":"bg-white/10"}`}>Embedded (nagy, középen)</button>
            <button onClick={() => setMode("fixed")}
              className={`px-4 py-2 rounded font-bold ${mode==="fixed"?"bg-blue-500":"bg-white/10"}`}>Fixed (sarok, mint astro játékban)</button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-white/80 font-bold mb-2">Mood (állapot, folyamatos animáció):</p>
          <div className="flex flex-wrap gap-2">
            {MOODS.map(m => (
              <button key={m} onClick={() => setMood(m)}
                className={`px-3 py-2 rounded text-sm font-bold ${mood===m?"bg-purple-500":"bg-white/10 hover:bg-white/20"}`}>
                {m}
              </button>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-2">Jelenlegi: <span className="text-purple-300">{mood}</span></p>
        </div>

        <div className="mb-6">
          <p className="text-white/80 font-bold mb-2">Reakció (egyszeri animáció):</p>
          <div className="flex flex-wrap gap-2">
            {REACTIONS.map(r => (
              <button key={r} onClick={() => triggerReaction(r)}
                className="px-3 py-2 rounded text-sm font-bold bg-green-500/20 hover:bg-green-500/40 border border-green-500/40">
                {r}
              </button>
            ))}
          </div>
          {jump.reaction && <p className="text-white/50 text-xs mt-2">Utolsó reakció: <span className="text-green-300">{jump.reaction}</span> ({new Date(jump.timestamp).toLocaleTimeString()})</p>}
        </div>

        <div className="mb-6">
          <p className="text-white/80 font-bold mb-2">Háttérszöveg teszt (fixed módban kell az avatar mögötti területen átkattintani):</p>
          <div className="bg-white/5 rounded-xl p-4 space-y-2 text-white/70 text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Ha az avatar fixed módban van (jobb alsó sarok), próbáld ezt a területet érinteni:</p>
            <button onClick={() => alert("Háttér gomb megnyomva!")}
              className="px-4 py-2 rounded bg-yellow-500 text-black font-bold">
              Háttér gomb (kattintható kell legyen avatar területe körül)
            </button>
            <p>A fixed-avatar területen csak az elipszis (avatar sziluett) fogja a kattintást — a sarkok átmennek.</p>
          </div>
        </div>

        {mode === "embedded" && (
          <div className="w-80 h-80 mx-auto bg-black/30 rounded-xl">
            <AvatarCompanion
              mood={mood}
              fixed={false}
              jumpTrigger={jump.reaction ? { reaction: jump.reaction, timestamp: jump.timestamp } : undefined}
              {...avatarProps}
            />
          </div>
        )}
      </div>

      {mode === "fixed" && (
        <AvatarCompanion
          fixed={true}
          mood={mood}
          jumpTrigger={jump.reaction ? { reaction: jump.reaction, timestamp: jump.timestamp } : undefined}
          {...avatarProps}
        />
      )}
    </div>
  );
}
