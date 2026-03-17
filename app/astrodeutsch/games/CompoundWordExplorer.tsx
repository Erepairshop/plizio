"use client";
// CompoundWordExplorer — Island i7: Artikel (deeper) + Komposita
// Teaches: der/die/das with new words, compound word building/breaking, article of compound

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Compound Word Explorer",
    round1Title: "Article Review",
    round1Hint: "Remember: the article of a compound word comes from the LAST part!",
    round2Title: "Build Compound Words!",
    round2Hint: "Tap the two parts to build a compound word!",
    round3Title: "Which article?",
    round3Hint: "The compound word gets the article of its LAST part. Choose!",
    round4Title: "Split the Compound",
    round4Hint: "Tap to split this compound word into its two parts!",
    round5Title: "Mixed Review",
    round5Hint: "Build the compound word and find its article!",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    lastPartRule: "The LAST part gives the article!",
    hint: "Compound words!",
  },
  hu: {
    title: "Összetett szó felfedező",
    round1Title: "Névelő áttekintés",
    round1Hint: "Emlékezz: az összetett szó névelője az UTOLSÓ részből jön!",
    round2Title: "Alkoss összetett szavakat!",
    round2Hint: "Koppints a két részre hogy összetett szót alkoss!",
    round3Title: "Melyik névelő?",
    round3Hint: "Az összetett szó az UTOLSÓ rész névelőjét kapja. Válassz!",
    round4Title: "Vágd ketté az összetett szót",
    round4Hint: "Koppints hogy kettévágd az összetett szót!",
    round5Title: "Vegyes áttekintés",
    round5Hint: "Alkoss összetett szót és találd meg a névelőjét!",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    lastPartRule: "Az UTOLSÓ rész adja a névelőt!",
    hint: "Összetett szavak!",
  },
  de: {
    title: "Komposita-Entdecker",
    round1Title: "Artikel-Wiederholung",
    round1Hint: "Merke dir: Das Artikel eines Kompositums kommt immer vom LETZTEN Wort!",
    round2Title: "Baue zusammengesetzte Wörter!",
    round2Hint: "Tippe auf die zwei Teile, um ein zusammengesetztes Wort zu bauen!",
    round3Title: "Welcher Artikel?",
    round3Hint: "Das zusammengesetzte Wort bekommt den Artikel seines LETZTEN Teils. Wähle!",
    round4Title: "Trenne das Kompositum",
    round4Hint: "Tippe, um das zusammengesetzte Wort in seine zwei Teile zu trennen!",
    round5Title: "Gemischte Wiederholung",
    round5Hint: "Baue das Kompositum und finde seinen Artikel!",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    lastPartRule: "Das LETZTE Wort gibt den Artikel!",
    hint: "Zusammengesetzte Wörter!",
  },
  ro: {
    title: "Exploratorul cuvintelor compuse",
    round1Title: "Recapitulare articole",
    round1Hint: "Ține minte: articolul unui cuvânt compus vine din ULTIMA parte!",
    round2Title: "Construiește cuvinte compuse!",
    round2Hint: "Atinge cele două părți pentru a construi un cuvânt compus!",
    round3Title: "Care articol?",
    round3Hint: "Cuvântul compus primește articolul ultimei sale părți. Alege!",
    round4Title: "Desparte cuvântul compus",
    round4Hint: "Atinge pentru a despărți cuvântul compus în cele două părți!",
    round5Title: "Recapitulare mixtă",
    round5Hint: "Construiește cuvântul compus și găsește articolul!",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    lastPartRule: "ULTIMA parte dă articolul!",
    hint: "Cuvinte compuse!",
  },
};

type Article = "der" | "die" | "das";
const ARTICLE_COLORS: Record<Article, string> = {
  der: "#3B82F6",
  die: "#EC4899",
  das: "#10B981",
};

// Round 1: review articles
const REVIEW_WORDS: { word: string; article: Article; emoji: string }[] = [
  { word: "Schule", article: "die", emoji: "🏫" },
  { word: "Tisch", article: "der", emoji: "🪑" },
  { word: "Fenster", article: "das", emoji: "🪟" },
  { word: "Tasche", article: "die", emoji: "👜" },
  { word: "Bleistift", article: "der", emoji: "✏️" },
  { word: "Heft", article: "das", emoji: "📓" },
];

// Compound words: part1 + part2 = result, article = article of last part
const COMPOUND_DATA: {
  part1: string; article1: Article;
  part2: string; article2: Article;
  result: string; resultArticle: Article;
}[] = [
  { part1: "Schul", article1: "die", part2: "tasche", article2: "die", result: "Schultasche", resultArticle: "die" },
  { part1: "Hand", article1: "die", part2: "schuh", article2: "der", result: "Handschuh", resultArticle: "der" },
  { part1: "Haus", article1: "das", part2: "tür", article2: "die", result: "Haustür", resultArticle: "die" },
  { part1: "Apfel", article1: "der", part2: "baum", article2: "der", result: "Apfelbaum", resultArticle: "der" },
  { part1: "Fuß", article1: "der", part2: "ball", article2: "der", result: "Fußball", resultArticle: "der" },
  { part1: "Schnee", article1: "der", part2: "mann", article2: "der", result: "Schneemann", resultArticle: "der" },
];

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-2 rounded-full"
          style={{ background: i < current ? "#00FF88" : i === current ? color : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

function NextBtn({ onClick, label, color }: { onClick: () => void; label: string; color: string }) {
  return (
    <motion.button onClick={onClick}
      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}>
      {label} <ChevronRight size={16} />
    </motion.button>
  );
}

// ─── Round 1: Review articles ─────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const item = REVIEW_WORDS[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    setTimeout(() => {
      if (idx + 1 >= REVIEW_WORDS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">📚</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1 mb-1">
        {REVIEW_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={item.word} lang="de" size={16} />
          </div>
          {selected && (
            <span className="font-bold text-xl" style={{ color: ARTICLE_COLORS[item.article] }}>
              {item.article} {item.word}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => (
          <motion.button key={art} onClick={() => handleSelect(art)}
            className="flex-1 py-4 rounded-2xl font-black text-xl"
            style={{
              background: selected === art ? `${ARTICLE_COLORS[art]}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === art ? ARTICLE_COLORS[art] : "rgba(255,255,255,0.2)"}`,
              color: selected === art ? ARTICLE_COLORS[art] : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {art}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 2: Build compound words ────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const items = COMPOUND_DATA.slice(0, 4);
  const item = items[idx];
  const allTapped = tapped.size === 2;

  const handleNext = () => {
    if (idx + 1 >= items.length) setDone(true);
    else { setIdx(i => i + 1); setTapped(new Set()); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🔗</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Result */}
      <div className="w-full rounded-2xl px-4 py-3 text-center min-h-[56px] flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${allTapped ? color : "rgba(255,255,255,0.1)"}` }}>
        {allTapped ? (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black" style={{ color }}>
                {item.result} ✅
              </span>
              <SpeakButton text={item.result} lang="de" size={16} />
            </div>
            <span className="text-xs font-bold text-white/50">{lbl.lastPartRule}</span>
          </motion.div>
        ) : (
          <p className="text-white/30 text-base font-bold">
            {tapped.has(0) ? item.part1 : "?"} + {tapped.has(1) ? item.part2 : "?"} = ?
          </p>
        )}
      </div>
      <div className="flex gap-3 w-full">
        {[item.part1, item.part2].map((part, i) => (
          <motion.button key={i} onClick={() => setTapped(prev => new Set([...prev, i]))}
            className="flex-1 py-4 rounded-2xl font-black text-xl"
            style={{
              background: tapped.has(i) ? `${color}22` : "rgba(255,255,255,0.06)",
              border: `2px solid ${tapped.has(i) ? color : "rgba(255,255,255,0.2)"}`,
              color: tapped.has(i) ? color : "white",
              opacity: tapped.has(i) ? 0.7 : 1,
            }}
            whileTap={!tapped.has(i) ? { scale: 0.95 } : {}}>
            {part}
          </motion.button>
        ))}
      </div>
      {allTapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Which article for compound? ────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const items = COMPOUND_DATA.slice(0, 5);
  const item = items[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    setTimeout(() => {
      if (idx + 1 >= items.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🏆</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.result} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.result}</span>
            <SpeakButton text={item.result} lang="de" size={16} />
          </div>
          <span className="text-white/40 text-xs">
            {item.part1} + {item.part2}
          </span>
          {selected && (
            <span className="font-bold text-xl mt-1" style={{ color: ARTICLE_COLORS[item.resultArticle] }}>
              {item.resultArticle} {item.result} {selected === item.resultArticle ? "✅" : ""}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => (
          <motion.button key={art} onClick={() => handleSelect(art)}
            className="flex-1 py-4 rounded-2xl font-black text-xl"
            style={{
              background: selected === art ? `${ARTICLE_COLORS[art]}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === art ? ARTICLE_COLORS[art] : "rgba(255,255,255,0.2)"}`,
              color: selected === art ? ARTICLE_COLORS[art] : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {art}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 4: Split compound word ─────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const items = COMPOUND_DATA.slice(0, 4);
  const item = items[idx];

  const handleNext = () => {
    if (idx + 1 >= items.length) setDone(true);
    else { setIdx(i => i + 1); setRevealed(false); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✂️</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.button key={item.result} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} onClick={() => !revealed && setRevealed(true)}
          className="w-full py-5 rounded-2xl font-black text-3xl"
          style={{
            background: revealed ? `${color}22` : "rgba(255,255,255,0.06)",
            border: `2px solid ${revealed ? color : "rgba(255,255,255,0.2)"}`,
            color: revealed ? color : "white",
          }}
          whileTap={!revealed ? { scale: 0.97 } : {}}>
          {item.result}
        </motion.button>
      </AnimatePresence>
      {revealed && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col gap-3 items-center">
          <div className="flex items-center gap-3 justify-center">
            <span className="px-4 py-2 rounded-xl font-black text-xl"
              style={{ background: `${ARTICLE_COLORS[item.article1]}22`, color: ARTICLE_COLORS[item.article1], border: `2px solid ${ARTICLE_COLORS[item.article1]}55` }}>
              {item.article1} {item.part1}
            </span>
            <span className="text-white/40 text-2xl">+</span>
            <span className="px-4 py-2 rounded-xl font-black text-xl"
              style={{ background: `${ARTICLE_COLORS[item.article2]}22`, color: ARTICLE_COLORS[item.article2], border: `2px solid ${ARTICLE_COLORS[item.article2]}55` }}>
              {item.article2} {item.part2}
            </span>
          </div>
          <NextBtn onClick={handleNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Mixed — build + article ────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [artSelected, setArtSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const items = COMPOUND_DATA.slice(2, 6);
  const item = items[idx];
  const allTapped = tapped.size === 2;

  const handleNext = () => {
    if (idx + 1 >= items.length) setDone(true);
    else { setIdx(i => i + 1); setTapped(new Set()); setArtSelected(null); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🌟</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onDone} label={lbl.finish} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Build */}
      <div className="flex gap-3 w-full">
        {[item.part1, item.part2].map((part, i) => (
          <motion.button key={i} onClick={() => setTapped(prev => new Set([...prev, i]))}
            className="flex-1 py-3 rounded-2xl font-black text-xl"
            style={{
              background: tapped.has(i) ? `${color}22` : "rgba(255,255,255,0.06)",
              border: `2px solid ${tapped.has(i) ? color : "rgba(255,255,255,0.2)"}`,
              color: tapped.has(i) ? color : "white",
              opacity: tapped.has(i) ? 0.7 : 1,
            }}
            whileTap={!tapped.has(i) ? { scale: 0.95 } : {}}>
            {part}
          </motion.button>
        ))}
      </div>
      {allTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-3">
          <div className="text-center">
            <span className="text-2xl font-black" style={{ color }}>{item.result}</span>
          </div>
          {!artSelected && (
            <div className="flex gap-3 w-full">
              {(["der", "die", "das"] as Article[]).map(art => (
                <motion.button key={art} onClick={() => setArtSelected(art)}
                  className="flex-1 py-3.5 rounded-2xl font-black text-xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: `2px solid ${ARTICLE_COLORS[art]}55`,
                    color: ARTICLE_COLORS[art],
                  }}
                  whileTap={{ scale: 0.93 }}>
                  {art}
                </motion.button>
              ))}
            </div>
          )}
          {artSelected && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-2 items-center">
              <p className="font-black text-xl" style={{ color: ARTICLE_COLORS[item.resultArticle] }}>
                {artSelected === item.resultArticle ? "✅" : ""} {item.resultArticle} {item.result}
              </p>
              <NextBtn onClick={handleNext} label={lbl.next} color={color} />
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const CompoundWordExplorer = memo(function CompoundWordExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;

  const next = useCallback(() => setRound(r => r + 1), []);
  const finish = useCallback(() => onDone(TOTAL_ROUNDS, TOTAL_ROUNDS), [onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default CompoundWordExplorer;
