"use client";
// RecyclingExplorer — Island i7: Materials & Recycling
// Topics: materials (wood, metal, glass, plastic, paper, fabric), waste sorting

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Recycling Explorer",
    round1Title: "Material Properties",
    round1Hint: "Tap to discover material properties",
    round2Title: "Material Identification",
    round2Hint: "What material is this made from?",
    round3Title: "Bin Colors",
    round3Hint: "Which bin for this material?",
    round4Title: "Sort the Items",
    round4Hint: "Put items in the correct bin!",
    round5Title: "Recycling Review",
    round5Hint: "Test your knowledge!",
    wood: "Wood",
    metal: "Metal",
    glass: "Glass",
    plastic: "Plastic",
    paper: "Paper",
    fabric: "Fabric",
    warm: "Warm & natural",
    hard: "Hard & cold",
    transparent: "Clear & breaks easily",
    light: "Light & flexible",
    thin: "Thin & tears",
    soft: "Soft & flexible",
    yellow: "Yellow Bin",
    blue: "Blue Bin",
    brown: "Brown Bin",
    gray: "Gray Bin",
    glass: "Glass Container",
    plasterbottle: "Plastic bottle",
    newspaper: "Newspaper",
    bananashell: "Banana peel",
    yogurtcup: "Yogurt cup",
    glassbottle: "Glass bottle",
    plasticbag: "Plastic bag",
    cardboard: "Cardboard box",
    organic: "Organic waste",
    metal: "Metal can",
    clothing: "Old clothing",
    next: "Next",
    correct: "Correct!",
    tryagain: "Try again",
    finish: "Finished!",
  },
  hu: {
    title: "Újrahasznosítás Felfedező",
    round1Title: "Anyag Tulajdonságok",
    round1Hint: "Koppints az anyag tulajdonságainak felfedezéséhez",
    round2Title: "Anyag Felismerése",
    round2Hint: "Milyen anyagból készült?",
    round3Title: "Kukta Színek",
    round3Hint: "Melyik kukta ezért az anyagért?",
    round4Title: "Válogatás",
    round4Hint: "Tedd a tárgyakat a helyes kuktába!",
    round5Title: "Újrahasznosítás Összefoglalás",
    round5Hint: "Teszteld a tudásod!",
    wood: "Fa",
    metal: "Fém",
    glass: "Üveg",
    plastic: "Műanyag",
    paper: "Papír",
    fabric: "Szövet",
    warm: "Meleg & természetes",
    hard: "Kemény & hideg",
    transparent: "Átlátszó & törékenyen",
    light: "Könnyű & hajlékony",
    thin: "Vékony & szakadékony",
    soft: "Puha & hajlékony",
    yellow: "Sárga Kuka",
    blue: "Kék Kuka",
    brown: "Barna Kuka",
    gray: "Szürke Kuka",
    glass: "Üveg Gyűjtő",
    plasterbottle: "Műanyag palack",
    newspaper: "Újság",
    bananashell: "Banán héj",
    yogurtcup: "Joghurt pohár",
    glassbottle: "Üveg palack",
    plasticbag: "Műanyag szatyor",
    cardboard: "Karton doboz",
    organic: "Bio hulladék",
    metal: "Fém doboz",
    clothing: "Régi ruha",
    next: "Tovább",
    correct: "Helyes!",
    tryagain: "Próbáld újra",
    finish: "Vége!",
  },
  de: {
    title: "Recycling-Entdecker",
    round1Title: "Material Eigenschaften",
    round1Hint: "Tippe, um Materialeigenschaften zu entdecken",
    round2Title: "Material Erkennung",
    round2Hint: "Aus welchem Material ist das?",
    round3Title: "Tonnenfarben",
    round3Hint: "Welche Tonne für dieses Material?",
    round4Title: "Sortiere die Gegenstände",
    round4Hint: "Lege die Gegenstände in die richtige Tonne!",
    round5Title: "Recycling Wiederholung",
    round5Hint: "Teste dein Wissen!",
    wood: "Holz",
    metal: "Metall",
    glass: "Glas",
    plastic: "Kunststoff",
    paper: "Papier",
    fabric: "Stoff",
    warm: "Warm & natürlich",
    hard: "Hart & kalt",
    transparent: "Durchsichtig & zerbrechlich",
    light: "Leicht & flexibel",
    thin: "Dünn & reißt",
    soft: "Weich & flexibel",
    yellow: "Gelbe Tonne",
    blue: "Blaue Tonne",
    brown: "Braune Tonne",
    gray: "Graue Tonne",
    glass: "Glascontainer",
    plasterbottle: "Kunststoffflasche",
    newspaper: "Zeitung",
    bananashell: "Bananenschale",
    yogurtcup: "Joghurtbecher",
    glassbottle: "Glasflasche",
    plasticbag: "Plastiktüte",
    cardboard: "Kartonbox",
    organic: "Bio Müll",
    metal: "Metalldose",
    clothing: "Alte Kleidung",
    next: "Weiter",
    correct: "Richtig!",
    tryagain: "Versuchen Sie es erneut",
    finish: "Fertig!",
  },
  ro: {
    title: "Exploratorul Reciclării",
    round1Title: "Proprietăți Materiale",
    round1Hint: "Atinge pentru a descoperi proprietățile materiale",
    round2Title: "Identificarea Materialului",
    round2Hint: "Din ce material este făcut?",
    round3Title: "Culori Pubele",
    round3Hint: "Ce ladă pentru acest material?",
    round4Title: "Sortează Obiectele",
    round4Hint: "Pune obiectele în lada corectă!",
    round5Title: "Revizuire Reciclare",
    round5Hint: "Testează-ți cunoștințele!",
    wood: "Lemn",
    metal: "Metal",
    glass: "Sticlă",
    plastic: "Plastic",
    paper: "Hârtie",
    fabric: "Țesătură",
    warm: "Cald & natural",
    hard: "Dur & rece",
    transparent: "Transparent & fragil",
    light: "Ușor & flexibil",
    thin: "Subțire & se rupe",
    soft: "Moale & flexibil",
    yellow: "Ladă Galbenă",
    blue: "Ladă Albastră",
    brown: "Ladă Maro",
    gray: "Ladă Gri",
    glass: "Colector Sticlă",
    plasterbottle: "Sticlă Plastic",
    newspaper: "Ziar",
    bananashell: "Coji Banană",
    yogurtcup: "Pahar Iaurt",
    glassbottle: "Sticlă Sticlă",
    plasticbag: "Pungă Plastic",
    cardboard: "Cutie Carton",
    organic: "Deșeu Bio",
    metal: "Cutie Metal",
    clothing: "Haine Vechi",
    next: "Înainte",
    correct: "Corect!",
    tryagain: "Încearcă din nou",
    finish: "Gata!",
  },
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

const MATERIALS = ["wood", "metal", "glass", "plastic", "paper", "fabric"];
const MATERIAL_PROPS: Record<string, string> = {
  wood: "warm",
  metal: "hard",
  glass: "transparent",
  plastic: "light",
  paper: "thin",
  fabric: "soft",
};

const BIN_COLORS: Record<string, string> = {
  plastic: "yellow",
  metal: "yellow",
  paper: "blue",
  organic: "brown",
  glass: "glass",
  rest: "gray",
};

const ITEMS_TO_SORT = [
  { name: "plasterbottle", material: "plastic", bin: "yellow" },
  { name: "newspaper", material: "paper", bin: "blue" },
  { name: "bananashell", material: "organic", bin: "brown" },
  { name: "yogurtcup", material: "plastic", bin: "yellow" },
  { name: "glassbottle", material: "glass", bin: "glass" },
];

function RecyclingExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
    }
  }, [round, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">

          {round === 0 && <Round1 color={color} lbl={lbl} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}

          <motion.button onClick={advance}
            className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
            whileTap={{ scale: 0.97 }}>
            {round === TOTAL_ROUNDS - 1 ? lbl.finish : lbl.next} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round1({ color, lbl }: { color: string; lbl: Record<string, string> }) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round1Hint}</p>
      <div className="grid grid-cols-3 gap-3">
        {MATERIALS.map(mat => (
          <motion.button key={mat}
            onClick={() => setRevealed(prev => new Set([...prev, mat]))}
            className="w-24 h-24 rounded-xl flex flex-col items-center justify-center p-2 text-center transition-colors"
            style={{
              background: revealed.has(mat) ? `${color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${revealed.has(mat) ? color : "rgba(255,255,255,0.15)"}`,
            }}>
            <svg viewBox="0 0 60 60" className="w-10 h-10 mb-1">
              {mat === "wood" && <rect x="10" y="20" width="40" height="30" fill="#8B6F4E" />}
              {mat === "metal" && <rect x="10" y="15" width="40" height="30" fill="#A9A9A9" rx="3" />}
              {mat === "glass" && <circle cx="30" cy="30" r="20" fill="rgba(173,216,230,0.6)" stroke="#87CEEB" strokeWidth="2" />}
              {mat === "plastic" && <path d="M 30 10 L 45 30 L 40 50 L 20 50 L 15 30 Z" fill="#FF6B6B" />}
              {mat === "paper" && <rect x="15" y="15" width="30" height="35" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="1" />}
              {mat === "fabric" && <path d="M 20 20 Q 30 15 40 20 Q 35 30 40 40 Q 30 45 20 40 Q 25 30 20 20" fill="#FFB6C1" opacity="0.8" />}
            </svg>
            <span className="text-xs font-bold text-white">{lbl[mat]}</span>
            {revealed.has(mat) && <span className="text-xs text-white/60 mt-1">{lbl[MATERIAL_PROPS[mat]]}</span>}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round2({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [show, setShow] = useState(true);
  const testItem = "glass";
  const correct = "glass";
  const options = ["wood", "plastic", "glass"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  if (!show) return <div className="text-white/60">{lbl.tryagain}</div>;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round2Hint}</p>
      <svg viewBox="0 0 80 120" className="w-16 h-20">
        <circle cx="40" cy="40" r="25" fill="rgba(173,216,230,0.6)" stroke="#87CEEB" strokeWidth="2" />
      </svg>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
      {selected === correct && <div className="text-white/60 text-xs">{lbl.correct}</div>}
    </div>
  );
}

function Round3({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const testMaterial = "paper";
  const correct = "blue";
  const bins = ["yellow", "blue", "brown"];

  const handleSelect = (bin: string) => {
    setSelected(bin);
    if (bin !== correct) onWrong();
  };

  const BinIcon = ({ binColor }: { binColor: string }) => {
    const colorMap: Record<string, string> = { yellow: "#FFD700", blue: "#1E90FF", brown: "#8B4513", gray: "#808080", glass: "#87CEEB" };
    return (
      <svg viewBox="0 0 40 50" className="w-10 h-12">
        <rect x="5" y="5" width="30" height="35" fill={colorMap[binColor]} rx="2" />
        <rect x="8" y="2" width="24" height="3" fill={colorMap[binColor]} />
      </svg>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round3Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-3 px-6 mb-2">
        <p className="text-white font-bold">{lbl[testMaterial]}</p>
      </div>
      <div className="flex gap-3 justify-center">
        {bins.map(bin => (
          <motion.button key={bin}
            onClick={() => handleSelect(bin)}
            className="flex flex-col items-center gap-1 transition-opacity"
            style={{ opacity: selected === bin ? 1 : selected ? 0.5 : 1 }}>
            <BinIcon binColor={bin} />
            <span className="text-xs text-white/60 font-bold">{lbl[bin]?.split(" ")[0]}</span>
          </motion.button>
        ))}
      </div>
      {selected === correct && <div className="text-white/60 text-xs">{lbl.correct}</div>}
    </div>
  );
}

function Round4({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const item = ITEMS_TO_SORT[0];
  const correct = item.bin;

  const handleSelect = (bin: string) => {
    setSelected(bin);
    if (bin !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round4Hint}</p>
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <circle cx="30" cy="25" r="18" fill="rgba(173,216,230,0.6)" stroke="#87CEEB" strokeWidth="2" />
      </svg>
      <p className="text-white font-bold">{lbl[item.name]}</p>
      <div className="flex gap-2">
        {["yellow", "blue", "brown"].map(bin => (
          <motion.button key={bin}
            onClick={() => handleSelect(bin)}
            className="w-12 h-12 rounded-lg transition-all"
            style={{
              background: selected === bin ? (bin === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === bin ? (bin === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            <div className="w-3 h-3 rounded-full mx-auto" style={{ background: { yellow: "#FFD700", blue: "#1E90FF", brown: "#8B4513" }[bin] }} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round5({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const testMat = "plastic";
  const correct = "yellow";
  const options = ["yellow", "blue", "brown"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round5Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-3 px-6">
        <p className="text-white font-bold">{lbl[testMat]} → ?</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default memo(RecyclingExplorer);
