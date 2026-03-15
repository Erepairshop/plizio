"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { speak, SpeakButton } from "@/lib/astromath-tts";

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  islandId: string;   // "i1" .. "i9"
  lang: string;
  color: string;
  onDone: (score: number, total: number) => void;
  onExit?: () => void;
}

// ─── Visual helper components ──────────────────────────────────────────────────

function Dots({ count, color, cols = 5 }: { count: number; color: string; cols?: number }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" style={{ maxWidth: cols * 34 + (cols - 1) * 8 }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div key={i} className="rounded-full"
          style={{ width: 30, height: 30, background: color, boxShadow: `0 2px 8px ${color}60` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 280 }} />
      ))}
    </div>
  );
}

function BigNumber({ n, color }: { n: number; color: string }) {
  return (
    <motion.div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-black text-white"
      style={{ background: color, boxShadow: `0 4px 20px ${color}60` }}
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 250 }}>
      {n}
    </motion.div>
  );
}

function EmojiGrid({ emojis }: { emojis: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-[240px]">
      {emojis.map((e, i) => (
        <motion.span key={i} className="text-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.07, type: "spring" }}>
          {e}
        </motion.span>
      ))}
    </div>
  );
}

function Equation({ parts, color }: { parts: (string | number)[]; color: string }) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      {parts.map((p, i) => {
        const isOp = typeof p === "string" && ["+", "-", "=", "?"].includes(p);
        const isResult = i === parts.length - 1;
        return (
          <motion.span key={i}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className={`font-black ${isOp ? "text-3xl text-white/70" : isResult ? "text-4xl" : "text-4xl text-white"}`}
            style={isResult ? { color } : {}}>
            {p}
          </motion.span>
        );
      })}
    </div>
  );
}

function NumberLine({ from, to, highlight, color }: { from: number; to: number; highlight?: number; color: string }) {
  const nums = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center">
      {nums.map((n, i) => (
        <motion.div key={n}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
          style={{
            background: n === highlight ? color : "rgba(255,255,255,0.10)",
            color: n === highlight ? "#000" : "rgba(255,255,255,0.7)",
            boxShadow: n === highlight ? `0 2px 12px ${color}80` : "none",
            transform: n === highlight ? "scale(1.2)" : "scale(1)",
          }}>
          {n}
        </motion.div>
      ))}
    </div>
  );
}

function CompareNumbers({ a, b, color }: { a: number; b: number; color: string }) {
  const sign = a < b ? "<" : a > b ? ">" : "=";
  return (
    <div className="flex items-center gap-4">
      <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
        style={{ background: "rgba(255,255,255,0.12)" }}
        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        {a}
      </motion.div>
      <motion.span className="text-4xl font-black" style={{ color }}
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
        {sign}
      </motion.span>
      <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
        style={{ background: "rgba(255,255,255,0.12)" }}
        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        {b}
      </motion.div>
    </div>
  );
}

function NumberFamily({ a, b, color }: { a: number; b: number; color: string }) {
  const sum = a + b;
  const ops = [`${a} + ${b} = ${sum}`, `${b} + ${a} = ${sum}`, `${sum} - ${a} = ${b}`, `${sum} - ${b} = ${a}`];
  return (
    <div className="flex flex-col gap-2 items-center">
      {ops.map((op, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="px-4 py-1.5 rounded-xl text-base font-bold"
          style={{ background: i < 2 ? `${color}22` : "rgba(255,255,255,0.06)", color: i < 2 ? color : "rgba(255,255,255,0.7)" }}>
          {op}
        </motion.div>
      ))}
    </div>
  );
}

function DoublePair({ n, color }: { n: number; color: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-4 items-center">
        <Dots count={n} color={color} cols={5} />
        <motion.span className="text-3xl font-black text-white/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>+</motion.span>
        <Dots count={n} color={color} cols={5} />
      </div>
      <motion.div className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <span className="text-2xl font-black text-white/60">=</span>
        <span className="text-4xl font-black" style={{ color }}>{n * 2}</span>
      </motion.div>
    </div>
  );
}

function PlaceValue({ n, color }: { n: number; color: string }) {
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div className="text-5xl font-black text-white" initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        {n}
      </motion.div>
      <div className="flex gap-3 items-center">
        {Array.from({ length: tens }).map((_, i) => (
          <motion.div key={`t${i}`} className="flex flex-col gap-0.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }}>
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} className="w-4 h-2.5 rounded-sm" style={{ background: color }} />
            ))}
          </motion.div>
        ))}
        {ones > 0 && (
          <motion.div className="flex flex-col gap-0.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {Array.from({ length: ones }).map((_, j) => (
              <div key={j} className="w-4 h-2.5 rounded-sm" style={{ background: `${color}88` }} />
            ))}
          </motion.div>
        )}
      </div>
      <motion.div className="text-sm font-bold text-white/60 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        {tens > 0 && <span>{tens} <span style={{ color }}>Zehner</span>{ones > 0 ? " + " : ""}</span>}
        {ones > 0 && <span>{ones} <span style={{ color: "#aaa" }}>Einer</span></span>}
      </motion.div>
    </div>
  );
}

function ShapeDisplay({ shapes, color }: { shapes: { emoji: string; name: Record<string, string> }[]; lang: string; color: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {shapes.map((s, i) => (
        <motion.div key={i} className="flex flex-col items-center gap-1 p-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.06)" }}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.12, type: "spring" }}>
          <span className="text-4xl">{s.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ClockFace({ hour, color }: { hour: number; color: string }) {
  const minuteAngle = 90;   // pointing right (12 o'clock = -90, but minute at 12)
  const hourAngle = ((hour % 12) / 12) * 360 - 90;
  const cx = 60; const cy = 60; const r = 55;
  return (
    <motion.svg width={120} height={120} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <circle cx={cx} cy={cy} r={r} fill="rgba(255,255,255,0.08)" stroke={color} strokeWidth={2} />
      {[12,1,2,3,4,5,6,7,8,9,10,11].map((n, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        return <text key={n} x={cx + Math.cos(a) * 42} y={cy + Math.sin(a) * 42 + 4} textAnchor="middle" fontSize={10} fill="rgba(255,255,255,0.6)" fontWeight="bold">{n}</text>;
      })}
      {/* Hour hand */}
      <line x1={cx} y1={cy}
        x2={cx + Math.cos(hourAngle * Math.PI / 180) * 32}
        y2={cy + Math.sin(hourAngle * Math.PI / 180) * 32}
        stroke="white" strokeWidth={4} strokeLinecap="round" />
      {/* Minute hand (at 12) */}
      <line x1={cx} y1={cy} x2={cx} y2={cy - 44} stroke="white" strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={4} fill={color} />
    </motion.svg>
  );
}

function PatternRow({ pattern }: { pattern: string[] }) {
  return (
    <div className="flex gap-2 items-center flex-wrap justify-center">
      {pattern.map((item, i) => (
        <motion.span key={i} className={`text-3xl ${item === "?" ? "opacity-40" : ""}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}>
          {item}
        </motion.span>
      ))}
    </div>
  );
}

function CelebrationSlide({ lang, color }: { lang: string; color: string }) {
  const msgs: Record<string, string> = {
    en: "You've learned it! Now let's practice! 🎉",
    hu: "Megtanultad! Most gyakoroljunk! 🎉",
    de: "Super! Du hast es gelernt! Jetzt üben! 🎉",
    ro: "Ai învățat! Acum să exersăm! 🎉",
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div className="text-7xl" animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>⭐</motion.div>
      <motion.p className="text-xl font-black text-center" style={{ color }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        {msgs[lang] ?? msgs.en}
      </motion.p>
    </div>
  );
}

// ─── Slide definitions per island ─────────────────────────────────────────────

type SlideDef = {
  title: Record<string, string>;
  caption: Record<string, string>;
  renderVisual: (lang: string, color: string) => React.ReactNode;
};

const ISLAND_SLIDES: Record<string, SlideDef[]> = {

  // ── i1: Zählinsel — Zahlen 1-10, Vergleich ────────────────────────────────
  i1: [
    {
      title: { en: "Numbers 1 to 10", hu: "Számok 1-től 10-ig", de: "Zahlen 1 bis 10", ro: "Numerele 1 până la 10" },
      caption: {
        en: "These are the numbers 1 to 10. Each number has its own dot pattern!",
        hu: "Ezek a számok 1-től 10-ig. Mindegyiknek saját pontmintája van!",
        de: "Das sind die Zahlen 1 bis 10. Jede Zahl hat ihr eigenes Punktmuster!",
        ro: "Acestea sunt numerele 1-10. Fiecare număr are propriul model de puncte!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-wrap gap-2 justify-center max-w-[260px]">
          {[1,2,3,4,5,6,7,8,9,10].map((n, i) => (
            <motion.div key={n} className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-base font-black text-white"
                style={{ background: `${color}99` }}>{n}</div>
              <div className="flex flex-wrap gap-0.5 w-9 justify-center">
                {Array.from({ length: n }).map((_, j) => (
                  <div key={j} className="w-2 h-2 rounded-full" style={{ background: color }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Let's count!", hu: "Számoljunk!", de: "Zähle mit!", ro: "Să numărăm!" },
      caption: {
        en: "Count the apples together: 1, 2, 3, 4, 5, 6, 7 — there are 7 apples!",
        hu: "Számoljuk meg az almákat: 1, 2, 3, 4, 5, 6, 7 — 7 alma van!",
        de: "Zähle die Äpfel mit: 1, 2, 3, 4, 5, 6, 7 — es sind 7 Äpfel!",
        ro: "Numărați merele: 1, 2, 3, 4, 5, 6, 7 — sunt 7 mere!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <EmojiGrid emojis={["🍎","🍎","🍎","🍎","🍎","🍎","🍎"]} />
          <motion.div className="text-4xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
            = 7
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "Before and after", hu: "Előtte és utána", de: "Vorher und nachher", ro: "Înainte și după" },
      caption: {
        en: "Every number has a neighbour before and after it. 4 comes before 5, and 6 comes after 5.",
        hu: "Minden számnak van egy szomszédja előtte és utána. 4 jön 5 előtt, 6 jön 5 után.",
        de: "Jede Zahl hat Nachbarn. 4 kommt vor 5, und 6 kommt nach 5.",
        ro: "Fiecare număr are vecini. 4 vine înainte de 5, 6 vine după 5.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-4">
          <NumberLine from={3} to={7} highlight={5} color={color} />
          <div className="flex gap-3 text-sm font-bold text-white/60">
            <span>← Vorgänger</span>
            <span style={{ color }}>5</span>
            <span>Nachfolger →</span>
          </div>
        </div>
      ),
    },
    {
      title: { en: "Bigger or smaller?", hu: "Nagyobb vagy kisebb?", de: "Größer oder kleiner?", ro: "Mai mare sau mai mic?" },
      caption: {
        en: "We can compare numbers! 3 is smaller than 7. 3 < 7. In the Number Duel game you will compare numbers!",
        hu: "Összehasonlíthatjuk a számokat! 3 kisebb mint 7. 3 < 7. A Szám-párharc játékban számokat hasonlítasz össze!",
        de: "Wir können Zahlen vergleichen! 3 ist kleiner als 7. 3 < 7. Im Zahlen-Duell vergleichst du Zahlen!",
        ro: "Putem compara numerele! 3 este mai mic decât 7. 3 < 7. În Duelul numerelor vei compara!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-4">
          <CompareNumbers a={3} b={7} color={color} />
          <CompareNumbers a={8} b={4} color={color} />
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know the numbers 1 to 10! Now practice in the Number Duel!",
        hu: "Ismered a számokat 1-től 10-ig! Most gyakorolj a Szám-párharc játékban!",
        de: "Du kennst die Zahlen 1 bis 10! Jetzt im Zahlen-Duell üben!",
        ro: "Știi numerele 1-10! Acum exersează în Duelul Numerelor!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i2: Additionsinsel — Tausch, Zahlzerlegung, +10 ──────────────────────
  i2: [
    {
      title: { en: "What is addition (+)?", hu: "Mi az összeadás?", de: "Was ist Addition (+)?", ro: "Ce este adunarea (+)?" },
      caption: {
        en: "When we put things together, we add! 2 apples + 3 apples = 5 apples.",
        hu: "Amikor dolgokat összeszámolunk, azt összeadjuk! 2 alma + 3 alma = 5 alma.",
        de: "Wenn wir Dinge zusammenzählen, addieren wir! 2 Äpfel + 3 Äpfel = 5 Äpfel.",
        ro: "Când punem lucruri împreună, adunăm! 2 mere + 3 mere = 5 mere.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <EmojiGrid emojis={["🍎","🍎"]} />
            <span className="text-3xl font-black text-white/50">+</span>
            <EmojiGrid emojis={["🍎","🍎","🍎"]} />
          </div>
          <Equation parts={[2, "+", 3, "=", 5]} color={color} />
        </div>
      ),
    },
    {
      title: { en: "Swap rule", hu: "Csereszabatosság", de: "Tauschaufgabe", ro: "Regula schimbului" },
      caption: {
        en: "The order doesn't matter! 2+3 gives the same as 3+2. Both equal 5!",
        hu: "A sorrend nem számít! 2+3 ugyanannyi mint 3+2. Mindkettő 5!",
        de: "Die Reihenfolge ist egal! 2+3 ergibt dasselbe wie 3+2. Beide ergeben 5!",
        ro: "Ordinea nu contează! 2+3 dă același rezultat ca 3+2. Ambele fac 5!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Dots count={2} color={color} cols={5} />
            <span className="text-2xl text-white/40">+</span>
            <Dots count={3} color={`${color}99`} cols={5} />
            <span className="text-2xl text-white/40">=</span>
            <span className="text-3xl font-black" style={{ color }}>5</span>
          </div>
          <motion.div className="text-white/40 text-lg font-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>↕</motion.div>
          <div className="flex items-center gap-2">
            <Dots count={3} color={`${color}99`} cols={5} />
            <span className="text-2xl text-white/40">+</span>
            <Dots count={2} color={color} cols={5} />
            <span className="text-2xl text-white/40">=</span>
            <span className="text-3xl font-black" style={{ color }}>5</span>
          </div>
        </div>
      ),
    },
    {
      title: { en: "Breaking numbers apart", hu: "Számok felbontása", de: "Zahlzerlegung", ro: "Descompunerea numerelor" },
      caption: {
        en: "Every number can be split in many ways! 5 can be 4+1, or 3+2, or 2+3.",
        hu: "Minden számot sokféleképpen lehet felbontani! 5 lehet 4+1, vagy 3+2, vagy 2+3.",
        de: "Jede Zahl kann man aufteilen! 5 ist 4+1, oder 3+2, oder 2+3.",
        ro: "Orice număr poate fi împărțit în mai multe moduri! 5 = 4+1 = 3+2 = 2+3.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-2">
          {[[4,1],[3,2],[2,3],[1,4]].map(([a,b],i) => (
            <motion.div key={i} className="flex items-center gap-2 text-lg font-bold"
              initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
              <span className="text-white/60">5 =</span>
              <span style={{ color }}>{a}</span>
              <span className="text-white/40">+</span>
              <span style={{ color: `${color}aa` }}>{b}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Adding to 10", hu: "Összeadás 10-ig", de: "Addieren bis 10", ro: "Adunare până la 10" },
      caption: {
        en: "Let's practice some additions to 10: 3+4=7, 6+3=9, 5+5=10. In Star Match, you will pair them!",
        hu: "Gyakoroljunk néhány összeadást 10-ig: 3+4=7, 6+3=9, 5+5=10. A Csillagpárosításban ezeket párosítod!",
        de: "Üben wir Additionen bis 10: 3+4=7, 6+3=9, 5+5=10. Im Sternenspiel ordnest du sie zu!",
        ro: "Hai să exersăm adunări până la 10: 3+4=7, 6+3=9, 5+5=10. În Perechile de stele le vei potrivi!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col gap-2 items-center">
          {[[3,4,7],[6,3,9],[5,5,10],[2,7,9]].map(([a,b,s],i) => (
            <motion.div key={i} className="flex items-center gap-2 text-xl font-black"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.13 }}>
              <span className="text-white">{a}</span>
              <span className="text-white/40">+</span>
              <span className="text-white">{b}</span>
              <span className="text-white/40">=</span>
              <span style={{ color }}>{s}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know addition! Now match pairs in Star Match!",
        hu: "Ismered az összeadást! Most párosíts a Csillagpárosításban!",
        de: "Du kennst die Addition! Jetzt Paare zuordnen im Sternenspiel!",
        ro: "Știi adunarea! Acum potrivește perechi în Perechile de stele!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i3: Subtraktionsinsel — sub10, Ergänzen ───────────────────────────────
  i3: [
    {
      title: { en: "What is subtraction (–)?", hu: "Mi a kivonás?", de: "Was ist Subtraktion (–)?", ro: "Ce este scăderea (–)?" },
      caption: {
        en: "When we take things away, we subtract! 5 apples, 2 are eaten — 3 remain.",
        hu: "Amikor elveszünk dolgokat, kivonunk! 5 alma, 2-t megeszünk — 3 marad.",
        de: "Wenn wir Dinge wegnehmen, subtrahieren wir! 5 Äpfel, 2 werden gegessen — 3 bleiben.",
        ro: "Când luăm lucruri, scădem! 5 mere, 2 sunt mâncate — rămân 3.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {["🍎","🍎","🍎","❌","❌"].map((e,i) => (
              <motion.span key={i} className="text-3xl"
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                {e}
              </motion.span>
            ))}
          </div>
          <Equation parts={[5, "–", 2, "=", 3]} color={color} />
        </div>
      ),
    },
    {
      title: { en: "Subtracting to 10", hu: "Kivonás 10-ig", de: "Subtrahieren bis 10", ro: "Scădere până la 10" },
      caption: {
        en: "Some subtractions to practice: 7–3=4, 9–5=4, 10–6=4. Look for the pattern!",
        hu: "Néhány kivonás gyakorláshoz: 7–3=4, 9–5=4, 10–6=4. Figyeld a mintát!",
        de: "Einige Subtraktionen zum Üben: 7–3=4, 9–5=4, 10–6=4. Entdecke das Muster!",
        ro: "Câteva scăderi de exersat: 7–3=4, 9–5=4, 10–6=4. Observă tiparul!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col gap-2 items-center">
          {[[7,3,4],[9,5,4],[10,6,4],[8,4,4]].map(([a,b,r],i) => (
            <motion.div key={i} className="flex items-center gap-2 text-xl font-black"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.13 }}>
              <span className="text-white">{a}</span>
              <span className="text-white/40">–</span>
              <span className="text-white">{b}</span>
              <span className="text-white/40">=</span>
              <span style={{ color }}>{r}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Fill in the gap!", hu: "Mi hiányzik?", de: "Was fehlt? — Ergänzen!", ro: "Ce lipsește? — Completează!" },
      caption: {
        en: "3 + ? = 7. We need 4 more to reach 7! This is called 'completing'. You'll practice this in Black Hole!",
        hu: "3 + ? = 7. 4 kell még, hogy elérjük a 7-et! Ezt hívják kiegészítésnek. A Fekete lyukban ezt gyakorolod!",
        de: "3 + ? = 7. Wir brauchen noch 4 um 7 zu erreichen! Das nennt man Ergänzen. Im Schwarzen Loch übst du das!",
        ro: "3 + ? = 7. Mai avem nevoie de 4 pentru a ajunge la 7! Se numește completare. O exersezi în Gaura Neagră!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-4">
          <NumberLine from={0} to={7} highlight={7} color={color} />
          <div className="flex flex-col gap-2 items-center">
            <Equation parts={[3, "+", "?", "=", 7]} color={color} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="text-lg font-black" style={{ color }}>
              ? = 4 ✓
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: { en: "Number family", hu: "Számcsalád", de: "Zahlenfamilie", ro: "Familia numerelor" },
      caption: {
        en: "3, 4, and 7 belong to a number family. They make 4 calculations!",
        hu: "3, 4 és 7 egy számcsaládhoz tartoznak. 4 számítást hoznak létre!",
        de: "3, 4 und 7 gehören zu einer Zahlenfamilie. Sie ergeben 4 Rechnungen!",
        ro: "3, 4 și 7 fac parte dintr-o familie de numere. Formează 4 calcule!",
      },
      renderVisual: (_, color) => <NumberFamily a={3} b={4} color={color} />,
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know subtraction and completing! Practice in Black Hole!",
        hu: "Ismered a kivonást és kiegészítést! Gyakorolj a Fekete lyukban!",
        de: "Du kennst Subtraktion und Ergänzen! Übe im Schwarzen Loch!",
        ro: "Știi scăderea și completarea! Exersează în Gaura Neagră!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i4: Verdoppeln & Halbieren ────────────────────────────────────────────
  i4: [
    {
      title: { en: "Doubling — twice as many!", hu: "Duplázás — kétszer annyi!", de: "Verdoppeln — doppelt so viel!", ro: "Dublarea — de două ori mai mult!" },
      caption: {
        en: "Doubling means adding the same number twice! 3 dots + 3 more dots = 6 dots.",
        hu: "Duplázás azt jelenti, hogy ugyanannyit adunk hozzá! 3 pont + 3 pont = 6 pont.",
        de: "Verdoppeln bedeutet: die gleiche Zahl nochmal dazu! 3 Punkte + 3 Punkte = 6 Punkte.",
        ro: "A dubla înseamnă a adăuga același număr din nou! 3 puncte + 3 = 6 puncte.",
      },
      renderVisual: (_, color) => <DoublePair n={3} color={color} />,
    },
    {
      title: { en: "The doubling table", hu: "Duplázási táblázat", de: "Die Verdoppelungstabelle", ro: "Tabelul dublării" },
      caption: {
        en: "Learn these doubles by heart — they help a lot in maths!",
        hu: "Tanuld meg ezeket a duplázásokat — sokat segítenek a matekban!",
        de: "Lerne diese Verdoppelungen auswendig — sie helfen viel in der Mathe!",
        ro: "Învață aceste duble pe de rost — ajută mult la matematică!",
      },
      renderVisual: (_, color) => (
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {[[1,2],[2,4],[3,6],[4,8],[5,10]].map(([n,d],i) => (
            <motion.div key={i} className="flex items-center gap-2 text-base font-bold"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
              <span className="text-white/60">{n} + {n} =</span>
              <span style={{ color }}>{d}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Halving — half as many!", hu: "Felezés — fele annyi!", de: "Halbieren — halb so viel!", ro: "Înjumătățirea — jumătate!" },
      caption: {
        en: "Halving is the opposite of doubling! 8 split into 2 equal groups = 4 in each group.",
        hu: "A felezés a duplázás ellentéte! 8-at 2 egyenlő csoportra osztunk = 4 mindegyikben.",
        de: "Halbieren ist das Gegenteil von Verdoppeln! 8 in 2 gleiche Gruppen = je 4.",
        ro: "Înjumătățirea este opusul dublării! 8 împărțit în 2 grupe egale = 4 în fiecare.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-3">
            <div className="p-2 rounded-xl" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
              <Dots count={4} color={color} cols={2} />
            </div>
            <div className="p-2 rounded-xl" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
              <Dots count={4} color={`${color}88`} cols={2} />
            </div>
          </div>
          <Equation parts={[8, "÷", 2, "=", 4]} color={color} />
        </div>
      ),
    },
    {
      title: { en: "The halving table", hu: "Felezési táblázat", de: "Die Halbierungstabelle", ro: "Tabelul înjumătățirii" },
      caption: {
        en: "In Star Match you will pair doubles and halves. Practice here first!",
        hu: "A Csillagpárosításban duplázásokat és felezéseket párosítasz. Először itt gyakorolj!",
        de: "Im Sternenspiel ordnest du Verdoppelungen und Halbierungen zu. Übe hier zuerst!",
        ro: "În Perechile de stele vei potrivi dublele și jumătățile. Exersează mai întâi aici!",
      },
      renderVisual: (_, color) => (
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {[[2,1],[4,2],[6,3],[8,4],[10,5]].map(([n,h],i) => (
            <motion.div key={i} className="flex items-center gap-2 text-base font-bold"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
              <span className="text-white/60">{n} ÷ 2 =</span>
              <span style={{ color }}>{h}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know doubling and halving! Match them in Star Match!",
        hu: "Ismered a duplázást és felezést! Párosítsd őket a Csillagpárosításban!",
        de: "Du kennst Verdoppeln und Halbieren! Ordne sie im Sternenspiel zu!",
        ro: "Știi dublarea și înjumătățirea! Potrivește-le în Perechile de stele!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i5: Zahlen bis 20 — Stellenwert, Sequenz ─────────────────────────────
  i5: [
    {
      title: { en: "Numbers 11 to 20", hu: "Számok 11-től 20-ig", de: "Zahlen 11 bis 20", ro: "Numerele 11 până la 20" },
      caption: {
        en: "After 10 come the teen numbers! 11 = ten and one more, 12 = ten and two more...",
        hu: "10 után jönnek a tízen felüli számok! 11 = tíz meg egy, 12 = tíz meg kettő...",
        de: "Nach 10 kommen die Zehnerzahlen! 11 = zehn und noch eins, 12 = zehn und noch zwei...",
        ro: "După 10 vin numerele de după zece! 11 = zece și unu, 12 = zece și doi...",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-wrap gap-2 justify-center max-w-[280px]">
          {[11,12,13,14,15,16,17,18,19,20].map((n,i) => (
            <motion.div key={n} className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black text-white"
              style={{ background: n === 20 ? color : `${color}55` }}
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}>
              {n}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Tens and ones", hu: "Tízes és egyes", de: "Zehner und Einer", ro: "Zeci și unități" },
      caption: {
        en: "14 = 1 ten + 4 ones. The blocks on the left are tens, on the right are ones.",
        hu: "14 = 1 tízes + 4 egyes. A bal oldali rudak a tízesek, a jobb oldaliak az egyesek.",
        de: "14 = 1 Zehner + 4 Einer. Die Stäbe links sind Zehner, rechts sind Einer.",
        ro: "14 = 1 zece + 4 unități. Barele din stânga sunt zeci, cele din dreapta sunt unități.",
      },
      renderVisual: (_, color) => <PlaceValue n={14} color={color} />,
    },
    {
      title: { en: "The number line to 20", hu: "Számegyenes 20-ig", de: "Zahlenstrahl bis 20", ro: "Axa numerelor până la 20" },
      caption: {
        en: "Numbers go from 11 all the way to 20. 15 is right in the middle!",
        hu: "A számok 11-től egészen 20-ig mennek. 15 pontosan a közepén van!",
        de: "Zahlen gehen von 11 bis 20. Die 15 ist genau in der Mitte!",
        ro: "Numerele merg de la 11 până la 20. 15 este exact la mijloc!",
      },
      renderVisual: (_, color) => <NumberLine from={11} to={20} highlight={15} color={color} />,
    },
    {
      title: { en: "What comes next?", hu: "Mi jön ezután?", de: "Was kommt als nächstes?", ro: "Ce urmează?" },
      caption: {
        en: "Can you see the pattern? 13, 14, 15, ?, 17 — the missing number is 16! In Number Duel you compare numbers to 20.",
        hu: "Látod a mintát? 13, 14, 15, ?, 17 — a hiányzó szám 16! A Szám-párharc játékban számokat hasonlítasz össze 20-ig.",
        de: "Siehst du das Muster? 13, 14, 15, ?, 17 — die fehlende Zahl ist 16! Im Zahlen-Duell vergleichst du Zahlen bis 20.",
        ro: "Observi tiparul? 13, 14, 15, ?, 17 — numărul lipsă este 16! În Duelul numerelor compari numere până la 20.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <PatternRow pattern={["13","14","15","?","17"]} />
          <motion.div className="text-2xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}>
            ? = 16 ✓
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know numbers to 20! Compare them in Number Duel!",
        hu: "Ismered a számokat 20-ig! Hasonlítsd össze őket a Szám-párharc játékban!",
        de: "Du kennst die Zahlen bis 20! Vergleiche sie im Zahlen-Duell!",
        ro: "Știi numerele până la 20! Compară-le în Duelul Numerelor!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i6: Sachaufgaben — word problems, add/sub to 20 ──────────────────────
  i6: [
    {
      title: { en: "Maths in stories!", hu: "Matek a mindennapi életben!", de: "Mathe in Geschichten!", ro: "Matematică în povești!" },
      caption: {
        en: "Word problems put maths into real life! We read the story and find what to calculate.",
        hu: "A szöveges feladatok a matekot az életbe helyezik! Elolvassuk a történetet és megtaláljuk a számítást.",
        de: "Sachaufgaben bringen Mathe ins echte Leben! Wir lesen die Geschichte und finden, was wir rechnen sollen.",
        ro: "Problemele cu text pun matematica în viața reală! Citim povestea și găsim ce trebuie calculat.",
      },
      renderVisual: (lang, color) => (
        <motion.div className="rounded-2xl p-4 max-w-xs text-center"
          style={{ background: `${color}15`, border: `1.5px solid ${color}40` }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <p className="text-base font-bold text-white leading-relaxed">
            {{ en: "🌳 In the garden there are 8 apples. The bird eats 3. How many are left?",
               hu: "🌳 A kertben 8 alma van. A madár megeszik 3-at. Hány marad?",
               de: "🌳 Im Garten sind 8 Äpfel. Der Vogel isst 3 davon. Wie viele bleiben übrig?",
               ro: "🌳 În grădină sunt 8 mere. Pasărea mănâncă 3. Câte rămân?",
            }[lang] ?? "In the garden..."}
          </p>
          <motion.div className="mt-3 text-2xl font-black" style={{ color }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            8 – 3 = 5 ✓
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: { en: "Adding to 20", hu: "Összeadás 20-ig", de: "Addieren bis 20", ro: "Adunare până la 20" },
      caption: {
        en: "We already know adding to 10. Now we go further! 12 + 5 = 17. Count on from 12!",
        hu: "Már tudjuk az összeadást 10-ig. Most tovább megyünk! 12 + 5 = 17. Számolj tovább 12-től!",
        de: "Wir können schon bis 10 addieren. Jetzt gehen wir weiter! 12 + 5 = 17. Zähle von 12 weiter!",
        ro: "Știm deja să adunăm până la 10. Acum mergem mai departe! 12 + 5 = 17.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <NumberLine from={10} to={20} highlight={17} color={color} />
          <div className="flex flex-col gap-2 items-center">
            {[[12,5,17],[11,7,18],[9,8,17]].map(([a,b,r],i) => (
              <motion.div key={i} className="flex items-center gap-2 text-xl font-black"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
                <span className="text-white">{a}</span>
                <span className="text-white/40">+</span>
                <span className="text-white">{b}</span>
                <span className="text-white/40">=</span>
                <span style={{ color }}>{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: { en: "Subtracting to 20", hu: "Kivonás 20-ig", de: "Subtrahieren bis 20", ro: "Scădere până la 20" },
      caption: {
        en: "We can also subtract with bigger numbers! 18 – 6 = 12. Count back from 18!",
        hu: "Nagyobb számokkal is kivonhatunk! 18 – 6 = 12. Számolj vissza 18-tól!",
        de: "Wir können auch mit größeren Zahlen subtrahieren! 18 – 6 = 12. Zähle von 18 zurück!",
        ro: "Putem scădea și cu numere mai mari! 18 – 6 = 12. Numără înapoi de la 18!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col gap-2 items-center">
          {[[18,6,12],[15,7,8],[20,9,11],[17,5,12]].map(([a,b,r],i) => (
            <motion.div key={i} className="flex items-center gap-2 text-xl font-black"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.13 }}>
              <span className="text-white">{a}</span>
              <span className="text-white/40">–</span>
              <span className="text-white">{b}</span>
              <span className="text-white/40">=</span>
              <span style={{ color }}>{r}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Read → Find the operation → Calculate!", hu: "Olvasd el → Találd meg a műveletet → Számolj!", de: "Lese → Finde die Rechnung → Rechne!", ro: "Citește → Găsește operația → Calculează!" },
      caption: {
        en: "'More' and 'together' often mean +. 'Left', 'taken away', 'eaten' often mean –. In Black Hole you solve these stories!",
        hu: "'Több', 'összesen' gyakran + jelet jelent. 'Maradt', 'elvett', 'megevett' gyakran – jelet. A Fekete lyukban ilyen történeteket oldasz meg!",
        de: "'Mehr', 'zusammen' bedeuten oft +. 'übrig', 'weggenommen', 'gegessen' bedeuten oft –. Im Schwarzen Loch löst du solche Geschichten!",
        ro: "'Mai mult', 'împreună' înseamnă adesea +. 'Ramas', 'luat', 'mâncat' înseamnă adesea –. În Gaura Neagră rezolvi astfel de povești!",
      },
      renderVisual: (lang, color) => (
        <div className="flex gap-3">
          <motion.div className="flex-1 rounded-2xl p-3 text-center flex flex-col items-center gap-2"
            style={{ background: `${color}15`, border: `1.5px solid ${color}40` }}
            initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-2xl">➕</span>
            <p className="text-xs font-bold text-white/70">
              {{ en: "more, together, gets", hu: "több, összesen, kap", de: "mehr, zusammen, bekommt", ro: "mai mult, împreună, primește" }[lang]}
            </p>
          </motion.div>
          <motion.div className="flex-1 rounded-2xl p-3 text-center flex flex-col items-center gap-2"
            style={{ background: "rgba(255,100,100,0.12)", border: "1.5px solid rgba(255,100,100,0.3)" }}
            initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <span className="text-2xl">➖</span>
            <p className="text-xs font-bold text-white/70">
              {{ en: "left, taken, eaten, lost", hu: "marad, elvett, megevett, elveszett", de: "übrig, weggenommen, gegessen, verloren", ro: "ramas, luat, mâncat, pierdut" }[lang]}
            </p>
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You can solve word problems! Practice in Black Hole!",
        hu: "Meg tudsz oldani szöveges feladatokat! Gyakorolj a Fekete lyukban!",
        de: "Du kannst Sachaufgaben lösen! Übe im Schwarzen Loch!",
        ro: "Poți rezolva probleme cu text! Exersează în Gaura Neagră!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i7: Formeninsel — shapes, spatial, patterns ──────────────────────────
  i7: [
    {
      title: { en: "Basic shapes", hu: "Alapvető alakzatok", de: "Grundformen kennen", ro: "Forme de bază" },
      caption: {
        en: "We know 4 basic flat shapes: circle, square, triangle, rectangle. Can you find them around you?",
        hu: "4 alap síkidomot ismerünk: kör, négyzet, háromszög, téglalap. Megtalálod ezeket magad körül?",
        de: "Wir kennen 4 Grundformen: Kreis, Quadrat, Dreieck, Rechteck. Kannst du sie um dich herum finden?",
        ro: "Cunoaștem 4 forme de bază: cerc, pătrat, triunghi, dreptunghi. Le poți găsi în jurul tău?",
      },
      renderVisual: (lang, color) => (
        <div className="grid grid-cols-2 gap-3">
          {[
            { shape: <svg width="56" height="56"><circle cx={28} cy={28} r={25} fill={color} opacity={0.8} /></svg>, label: { en: "Circle", hu: "Kör", de: "Kreis", ro: "Cerc" } },
            { shape: <svg width="56" height="56"><rect x={4} y={4} width={48} height={48} rx={2} fill={color} opacity={0.8} /></svg>, label: { en: "Square", hu: "Négyzet", de: "Quadrat", ro: "Pătrat" } },
            { shape: <svg width="56" height="56"><polygon points="28,4 52,52 4,52" fill={color} opacity={0.8} /></svg>, label: { en: "Triangle", hu: "Háromszög", de: "Dreieck", ro: "Triunghi" } },
            { shape: <svg width="56" height="56"><rect x={2} y={12} width={52} height={32} rx={2} fill={color} opacity={0.8} /></svg>, label: { en: "Rectangle", hu: "Téglalap", de: "Rechteck", ro: "Dreptunghi" } },
          ].map((item, i) => (
            <motion.div key={i} className="flex flex-col items-center gap-1 p-2 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.06)" }}
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.12, type: "spring" }}>
              {item.shape}
              <span className="text-xs font-bold text-white/70">{item.label[lang as keyof typeof item.label] ?? item.label.en}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Shapes in daily life", hu: "Alakzatok a mindennapi életben", de: "Formen im Alltag", ro: "Forme în viața de zi cu zi" },
      caption: {
        en: "The pizza is a circle. The window is a square. The roof is a triangle!",
        hu: "A pizza kör. Az ablak négyzet. A tető háromszög!",
        de: "Die Pizza ist ein Kreis. Das Fenster ist ein Quadrat. Das Dach ist ein Dreieck!",
        ro: "Pizza este un cerc. Fereastra este un pătrat. Acoperișul este un triunghi!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col gap-2 max-w-xs">
          {[["🍕", "= ⭕"], ["🪟", "= ⬛"], ["🏠", "= 🔺"], ["📱", "= ▬"]].map(([e, s], i) => (
            <motion.div key={i} className="flex items-center gap-3 px-3 py-2 rounded-xl"
              style={{ background: "rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.13 }}>
              <span className="text-2xl">{e}</span>
              <span className="text-xl">{s}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Where is it? Positions!", hu: "Hol van? Irányok!", de: "Wo ist es? Positionen!", ro: "Unde este? Poziții!" },
      caption: {
        en: "We can describe where things are: above, below, left, right, between. The ball is above the box.",
        hu: "Le tudjuk írni hol vannak a dolgok: fent, lent, bal, jobb, között. A labda a doboz felett van.",
        de: "Wir können beschreiben wo Dinge sind: oben, unten, links, rechts, dazwischen. Der Ball ist über der Kiste.",
        ro: "Putem descrie unde sunt lucrurile: sus, jos, stânga, dreapta, între. Mingea este deasupra cutiei.",
      },
      renderVisual: (lang, color) => (
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-40 h-32 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${color}30` }}>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">⚽</span>
            <span className="absolute bottom-2 left-2 text-xl">📦</span>
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xl">🌟</span>
          </div>
          <div className="flex gap-2 text-xs font-bold text-white/50">
            {[
              { en: "above", hu: "fent", de: "oben", ro: "sus" },
              { en: "left", hu: "bal", de: "links", ro: "stânga" },
              { en: "right", hu: "jobb", de: "rechts", ro: "dreapta" },
            ].map((w, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full" style={{ background: `${color}22`, color }}>{w[lang as keyof typeof w] ?? w.en}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: { en: "Patterns — what comes next?", hu: "Minták — mi jön következőnek?", de: "Muster — was kommt als nächstes?", ro: "Tipare — ce urmează?" },
      caption: {
        en: "A pattern repeats! Circle, square, circle, square... what comes after? In Star Match you will pair shapes!",
        hu: "A minta ismétlődik! Kör, négyzet, kör, négyzet... mi jön utána? A Csillagpárosításban alakzatokat párosítasz!",
        de: "Ein Muster wiederholt sich! Kreis, Quadrat, Kreis, Quadrat... was kommt danach? Im Sternenspiel ordnest du Formen zu!",
        ro: "Un tipar se repetă! Cerc, pătrat, cerc, pătrat... ce urmează? În Perechile de stele vei potrivi forme!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <PatternRow pattern={["⭕","⬛","⭕","⬛","?"]} />
          <motion.div className="text-xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}>
            ? = ⭕ ✓
          </motion.div>
          <PatternRow pattern={["🔺","🔺","⭕","🔺","🔺","?"]} />
          <motion.div className="text-xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, type: "spring" }}>
            ? = ⭕ ✓
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know shapes and patterns! Match them in Star Match!",
        hu: "Ismered az alakzatokat és mintákat! Párosítsd őket a Csillagpárosításban!",
        de: "Du kennst Formen und Muster! Ordne sie im Sternenspiel zu!",
        ro: "Știi formele și tiparele! Potrivește-le în Perechile de stele!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i8: Messinsel — clock, coins, weight, days ───────────────────────────
  i8: [
    {
      title: { en: "Telling time — full hours", hu: "Óra — egész órák", de: "Die Uhr — volle Stunden", ro: "Ceasul — ore întregi" },
      caption: {
        en: "When the short hand points to 3 and the long hand points to 12 — it is exactly 3 o'clock!",
        hu: "Amikor a rövid mutató 3-ra mutat és a hosszú 12-re — pontosan 3 óra van!",
        de: "Wenn der kurze Zeiger auf 3 zeigt und der lange auf 12 — es ist genau 3 Uhr!",
        ro: "Când acul scurt arată spre 3 și cel lung spre 12 — este exact ora 3!",
      },
      renderVisual: (_, color) => (
        <div className="flex gap-6 items-center">
          <ClockFace hour={3} color={color} />
          <div className="flex flex-col gap-1 text-sm font-bold text-white/60">
            <span>→ <span style={{ color }}>3:00</span></span>
            <span>→ 3 Uhr</span>
          </div>
        </div>
      ),
    },
    {
      title: { en: "Coins — money!", hu: "Érmék — pénz!", de: "Münzen — Geld!", ro: "Monede — bani!" },
      caption: {
        en: "We use coins to buy things. 1€ = 100 cents. Can you add up the coins?",
        hu: "Érméket használunk vásárláshoz. 1€ = 100 cent. Össze tudod adni az érméket?",
        de: "Wir benutzen Münzen zum Kaufen. 1€ = 100 Cent. Kannst du die Münzen zusammenzählen?",
        ro: "Folosim monede pentru cumpărături. 1€ = 100 cenți. Poți aduna monedele?",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2 flex-wrap justify-center">
            {[["1c","1 ¢"],["2c","2 ¢"],["5c","5 ¢"],["10c","10 ¢"],["50c","50 ¢"],["1€","1 €"]].map(([id,val],i) => (
              <motion.div key={id} className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: i < 3 ? "#c0803044" : i < 5 ? "#c0a03044" : "#c0b00044", border: `2px solid ${i < 3 ? "#c08030" : i < 5 ? "#c0a030" : color}`, color: "white" }}
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: "spring" }}>
                {val}
              </motion.div>
            ))}
          </div>
          <motion.div className="text-base font-bold text-white/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            🪙 + 🪙 + 🪙 = <span style={{ color }}>?</span>
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "Heavy or light?", hu: "Nehéz vagy könnyű?", de: "Schwer oder leicht?", ro: "Greu sau ușor?" },
      caption: {
        en: "We use a scale to compare weights. The heavier side goes down. 1kg of apples is heavier than 1 feather!",
        hu: "Mérleget használunk a súlyok összehasonlításához. A nehezebb oldal süllyed. 1kg alma nehezebb, mint 1 toll!",
        de: "Wir benutzen eine Waage um Gewichte zu vergleichen. Die schwere Seite geht runter. 1kg Äpfel ist schwerer als 1 Feder!",
        ro: "Folosim un cântar pentru a compara greutăți. Partea mai grea coboară.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-2">
          <motion.svg width={180} height={100} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {/* Pivot */}
            <line x1={90} y1={20} x2={90} y2={50} stroke="rgba(255,255,255,0.4)" strokeWidth={3} />
            {/* Beam - tilted left (heavier on left) */}
            <line x1={30} y1={60} x2={150} y2={40} stroke={color} strokeWidth={3} />
            {/* Left pan */}
            <line x1={30} y1={60} x2={30} y2={80} stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />
            <ellipse cx={30} cy={82} rx={22} ry={6} fill="rgba(255,255,255,0.12)" stroke={color} strokeWidth={1} />
            <text x={30} y={86} textAnchor="middle" fontSize={16}>🍎🍎</text>
            {/* Right pan */}
            <line x1={150} y1={40} x2={150} y2={68} stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />
            <ellipse cx={150} cy={70} rx={22} ry={6} fill="rgba(255,255,255,0.12)" stroke={color} strokeWidth={1} />
            <text x={150} y={74} textAnchor="middle" fontSize={16}>🪶</text>
          </motion.svg>
        </div>
      ),
    },
    {
      title: { en: "Days of the week", hu: "A hét napjai", de: "Wochentage", ro: "Zilele săptămânii" },
      caption: {
        en: "There are 7 days in a week. The week starts on Monday and ends on Sunday. In Star Match you will pair these!",
        hu: "Egy hétben 7 nap van. A hét hétfőn kezdődik és vasárnap végződik. A Csillagpárosításban ezeket párosítod!",
        de: "Es gibt 7 Tage in einer Woche. Die Woche beginnt am Montag und endet am Sonntag. Im Sternenspiel ordnest du sie zu!",
        ro: "Sunt 7 zile într-o săptămână. Săptămâna începe luni și se termină duminică. Le vei potrivi în Perechile de stele!",
      },
      renderVisual: (lang, color) => (
        <div className="flex flex-wrap gap-1.5 justify-center max-w-[240px]">
          {[
            { de: "Mo", en: "Mon", hu: "Hé", ro: "Lu" },
            { de: "Di", en: "Tue", hu: "Ke", ro: "Ma" },
            { de: "Mi", en: "Wed", hu: "Sze", ro: "Mi" },
            { de: "Do", en: "Thu", hu: "Csü", ro: "Jo" },
            { de: "Fr", en: "Fri", hu: "Pé", ro: "Vi" },
            { de: "Sa", en: "Sat", hu: "Szo", ro: "Sâ" },
            { de: "So", en: "Sun", hu: "Va", ro: "Du" },
          ].map((d, i) => (
            <motion.div key={i}
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white"
              style={{ background: i >= 5 ? `${color}88` : `${color}44` }}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: "spring" }}>
              {d[lang as keyof typeof d] ?? d.en}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You know measuring! Match time, money and weights in Star Match!",
        hu: "Ismered a méréseket! Párosítsd az időt, pénzt és súlyt a Csillagpárosításban!",
        de: "Du kennst das Messen! Ordne Zeit, Geld und Gewichte im Sternenspiel zu!",
        ro: "Știi să măsori! Potrivește timp, bani și greutăți în Perechile de stele!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],

  // ── i9: Daten & Muster — sequences, data, gravity-sort preview ───────────
  i9: [
    {
      title: { en: "Number sequences", hu: "Számsorozatok", de: "Zahlenfolgen", ro: "Șiruri de numere" },
      caption: {
        en: "A sequence follows a rule! Here we count by 2: 2, 4, 6, 8, 10... What comes next?",
        hu: "Egy sorozat egy szabályt követ! Itt kettesével számolunk: 2, 4, 6, 8, 10... Mi jön ezután?",
        de: "Eine Folge folgt einer Regel! Hier zählen wir in 2er-Schritten: 2, 4, 6, 8, 10... Was kommt danach?",
        ro: "Un șir urmează o regulă! Aici numărăm din 2 în 2: 2, 4, 6, 8, 10... Ce urmează?",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <PatternRow pattern={["2","4","6","8","10","?"]} />
          <motion.div className="text-2xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}>
            ? = 12 ✓
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "More patterns", hu: "Több minta", de: "Noch mehr Muster", ro: "Mai multe tipare" },
      caption: {
        en: "Patterns can also go backwards! 20, 18, 16, 14, ... we subtract 2 each time.",
        hu: "A minták visszafelé is mehetnek! 20, 18, 16, 14, ... minden alkalommal 2-t vonunk le.",
        de: "Muster können auch rückwärts gehen! 20, 18, 16, 14, ... wir subtrahieren jedes Mal 2.",
        ro: "Tiparele pot merge și înapoi! 20, 18, 16, 14, ... scădem 2 de fiecare dată.",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <PatternRow pattern={["20","18","16","14","?"]} />
          <motion.div className="text-2xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
            ? = 12 ✓
          </motion.div>
          <PatternRow pattern={["1","3","5","7","?"]} />
          <motion.div className="text-2xl font-black" style={{ color }}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}>
            ? = 9 ✓
          </motion.div>
        </div>
      ),
    },
    {
      title: { en: "Reading data — tally chart", hu: "Adatok olvasása — jelölések", de: "Daten lesen — Strichliste", ro: "Citirea datelor — tabel" },
      caption: {
        en: "We can count things and record them! Each mark = 1, a crossing mark = 5. Easy to count!",
        hu: "Megszámolhatjuk a dolgokat és feljegyezhetjük! Minden jel = 1, a keresztező = 5. Könnyű megszámolni!",
        de: "Wir können Dinge zählen und aufschreiben! Jeder Strich = 1, ein durchgestrichener = 5.",
        ro: "Putem număra lucruri și le putem înregistra! Fiecare marcaj = 1, cel încrucișat = 5.",
      },
      renderVisual: (lang, color) => (
        <div className="rounded-2xl p-3 w-full max-w-xs" style={{ background: "rgba(255,255,255,0.06)" }}>
          {[
            { icon: "🐶", count: 3, marks: "|||" },
            { icon: "🐱", count: 5, marks: "||||" },
            { icon: "🐟", count: 2, marks: "||" },
          ].map((row, i) => (
            <motion.div key={i} className="flex items-center gap-3 py-1.5 border-b border-white/10 last:border-0"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}>
              <span className="text-xl">{row.icon}</span>
              <span className="text-lg font-mono text-white/60 flex-1">{row.marks}</span>
              <span className="text-lg font-black" style={{ color }}>{row.count}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: { en: "Sorting — smaller to bigger!", hu: "Rendezés — kistől a nagyig!", de: "Sortieren — von klein nach groß!", ro: "Sortarea — de la mic la mare!" },
      caption: {
        en: "We can put numbers in order! In Gravity Sort you will sort numbers from smallest to biggest — just like this!",
        hu: "Sorba rendezhetjük a számokat! A Számrendezésben a legkisebbtől a legnagyobbig rendezed a számokat — pont így!",
        de: "Wir können Zahlen in Reihenfolge bringen! In Zahlen sortieren ordnest du sie von klein nach groß — genau so!",
        ro: "Putem pune numerele în ordine! În Sortare vei sorta numerele de la cel mai mic la cel mai mare!",
      },
      renderVisual: (_, color) => (
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {[14,7,19,3,11].map((n,i) => (
              <motion.div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black text-white"
                style={{ background: "rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                {n}
              </motion.div>
            ))}
          </div>
          <motion.div className="text-white/40 text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>↓</motion.div>
          <div className="flex gap-2">
            {[3,7,11,14,19].map((n,i) => (
              <motion.div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black text-white"
                style={{ background: `${color}55` }}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }}>
                {n}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: { en: "Well done! 🌟", hu: "Szuper! 🌟", de: "Super gemacht! 🌟", ro: "Bravo! 🌟" },
      caption: {
        en: "You understand sequences and data! Sort numbers in Gravity Sort!",
        hu: "Érted a sorozatokat és adatokat! Rendezz számokat a Számrendezésben!",
        de: "Du verstehst Folgen und Daten! Sortiere Zahlen in Zahlen sortieren!",
        ro: "Înțelegi șirurile și datele! Sortează numere în Sortare!",
      },
      renderVisual: (lang, color) => <CelebrationSlide lang={lang} color={color} />,
    },
  ],
};

// ─── Main component ────────────────────────────────────────────────────────────
export default function G1TeachingSlide({ islandId, lang, color, onDone, onExit }: Props) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward

  const slides = ISLAND_SLIDES[islandId] ?? ISLAND_SLIDES.i1;
  const total = slides.length;
  const slide = slides[slideIdx];

  const go = (delta: number) => {
    setDir(delta);
    setSlideIdx((i) => Math.max(0, Math.min(total - 1, i + delta)));
  };

  // Speak title + caption whenever slide changes
  useEffect(() => {
    const titleText = slide.title[lang] ?? slide.title.en;
    const captionText = slide.caption[lang] ?? slide.caption.en;
    speak(`${titleText}. ${captionText}`, lang);
  }, [slideIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  const t = {
    next:   { en: "Next", hu: "Tovább", de: "Weiter", ro: "Următorul" }[lang] ?? "Next",
    done:   { en: "Start practicing!", hu: "Gyakorlás!", de: "Jetzt üben!", ro: "Să exersăm!" }[lang] ?? "Done!",
    prev:   { en: "Back", hu: "Vissza", de: "Zurück", ro: "Înapoi" }[lang] ?? "Back",
  };

  const isLast = slideIdx === total - 1;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}22 0%, #060614 60%)` }}>

      {/* Starfield dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-white"
            style={{ left: `${(i * 37 + 13) % 100}%`, top: `${(i * 53 + 7) % 100}%`, width: (i % 3) * 0.8 + 0.5, height: (i % 3) * 0.8 + 0.5, opacity: 0.3 }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 2 + (i % 4), delay: i * 0.2, repeat: Infinity }} />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
        {onExit && (
          <button onClick={onExit} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70">
            <X size={16} />
          </button>
        )}
        <div className="flex-1 text-center">
          <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
            {{ en: "Discover", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" }[lang] ?? "Discover"}
          </span>
        </div>
        <div className="w-9" />
      </div>

      {/* Slide area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pb-4 gap-5 overflow-hidden">

        {/* Slide number */}
        <div className="text-white/30 text-xs font-bold">{slideIdx + 1} / {total}</div>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.div key={`title-${slideIdx}`}
            className="flex items-center gap-2 justify-center"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}>
            <h2 className="text-xl font-black text-white text-center">
              {slide.title[lang] ?? slide.title.en}
            </h2>
            <SpeakButton text={`${slide.title[lang] ?? slide.title.en}. ${slide.caption[lang] ?? slide.caption.en}`} lang={lang} size={15} />
          </motion.div>
        </AnimatePresence>

        {/* Visual */}
        <AnimatePresence mode="wait">
          <motion.div key={`visual-${slideIdx}`}
            className="flex items-center justify-center min-h-[160px]"
            initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.3 }}>
            {slide.renderVisual(lang, color)}
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p key={`cap-${slideIdx}`}
            className="text-white/70 text-sm text-center leading-relaxed max-w-xs"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}>
            {slide.caption[lang] ?? slide.caption.en}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex flex-col items-center gap-4 pb-8 px-5">
        {/* Dot indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <motion.div key={i} className="rounded-full transition-all duration-300"
              style={{
                width: i === slideIdx ? 20 : 8, height: 8,
                background: i === slideIdx ? color : "rgba(255,255,255,0.2)",
              }} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full max-w-xs">
          {slideIdx > 0 && (
            <button onClick={() => go(-1)}
              className="flex items-center gap-1 px-4 py-3 rounded-2xl font-bold text-white/60 text-sm"
              style={{ background: "rgba(255,255,255,0.08)" }}>
              <ChevronLeft size={16} /> {t.prev}
            </button>
          )}
          <motion.button
            onClick={isLast ? () => onDone(total, total) : () => go(1)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-black text-base"
            style={{ background: `linear-gradient(135deg, ${color}66, ${color}aa)`, border: `2px solid ${color}` }}
            whileTap={{ scale: 0.97 }}>
            {isLast ? t.done : t.next}
            {!isLast && <ChevronRight size={18} />}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
