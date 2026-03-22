"use client";
import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Volume2 } from "lucide-react";

const TOTAL_ROUNDS = 5;

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

const L: Record<string, Record<string, string>> = {
  en: {
    r1Title: "Traffic Light", r1Hint: "What does this color mean?",
    r1Teach: "Traffic lights keep us safe! 🔴 RED means STOP — never cross! 🟡 YELLOW means WAIT — get ready. 🟢 GREEN means GO — look both ways first, then cross carefully.",
    red: "Red", yellow: "Yellow", green: "Green",
    stop: "Stop!", caution: "Caution — get ready", go: "Go!",
    r2Title: "Safe or Unsafe?", r2Hint: "Is this behavior safe?",
    r2Teach: "Always cross the road at a crosswalk or traffic light! Look LEFT, then RIGHT, then LEFT again. Never run across the road. Hold an adult's hand.",
    safe: "Safe", unsafe: "Unsafe",
    b_lookBoth: "Look both ways before crossing", b_runRoad: "Run across the road without looking",
    b_helmet: "Wear a helmet when cycling", b_playRoad: "Play ball on the road",
    b_crosswalk: "Use the crosswalk to cross", b_redLight: "Cross at a red light",
    b_holdHand: "Hold an adult's hand near traffic", b_phoneCross: "Look at your phone while crossing",
    r3Title: "Road Signs", r3Hint: "What does this sign mean?",
    s_stop: "🛑 Octagonal red sign", s_stopA: "Stop completely",
    s_stopW1: "Speed up", s_stopW2: "Turn right", s_stopW3: "Honk horn",
    s_ped: "🚶 Person walking sign", s_pedA: "Pedestrian crossing",
    s_pedW1: "No walking", s_pedW2: "Bus stop", s_pedW3: "Parking",
    s_noEntry: "⛔ Red circle sign", s_noEntryA: "No entry",
    s_noEntryW1: "One way", s_noEntryW2: "Speed limit", s_noEntryW3: "Parking allowed",
    s_speed: "30 in red circle", s_speedA: "Speed limit 30",
    s_speedW1: "Route number", s_speedW2: "30 minutes to go", s_speedW3: "Distance marker",
    r4Title: "Pedestrian Rules", r4Hint: "What should you do?",
    p1Q: "You want to cross the road. What do you do first?",
    p1A: "Look left, right, then left again", p1W1: "Just run across", p1W2: "Close your eyes and walk", p1W3: "Wait for a car to stop by itself",
    p2Q: "The pedestrian light turns green. What do you do?",
    p2A: "Look again, then cross carefully", p2W1: "Run as fast as possible", p2W2: "Wait for it to turn red", p2W3: "Cross without looking",
    p3Q: "You're walking near a road at night. What helps?",
    p3A: "Wear bright or reflective clothing", p3W1: "Wear dark clothes", p3W2: "Walk in the middle of the road", p3W3: "Close your eyes",
    p4Q: "Where is the safest place to cross?",
    p4A: "At a crosswalk or traffic light", p4W1: "Between parked cars", p4W2: "On a curve", p4W3: "Wherever is closest",
    r5Title: "Quick Review", r5Hint: "What did you learn?",
    next: "Next", finish: "Finish", correct: "Correct!", wrong: "Not quite!",
  },
  de: {
    r1Title: "Ampelfarben", r1Hint: "Was bedeutet diese Farbe?",
    red: "Rot", yellow: "Gelb", green: "Grün",
    stop: "Stehen bleiben!", caution: "Achtung — bereit machen", go: "Gehen!",
    r2Title: "Sicher oder Unsicher?", r2Hint: "Ist dieses Verhalten sicher?",
    safe: "Sicher", unsafe: "Unsicher",
    b_lookBoth: "Vor dem Überqueren nach links und rechts schauen", b_runRoad: "Ohne zu schauen über die Straße rennen",
    b_helmet: "Beim Radfahren einen Helm tragen", b_playRoad: "Auf der Straße Ball spielen",
    b_crosswalk: "Den Zebrastreifen benutzen", b_redLight: "Bei Rot über die Ampel gehen",
    b_holdHand: "In der Nähe von Verkehr die Hand eines Erwachsenen halten", b_phoneCross: "Beim Überqueren aufs Handy schauen",
    r3Title: "Verkehrszeichen", r3Hint: "Was bedeutet dieses Zeichen?",
    s_stop: "🛑 Achteckiges rotes Schild", s_stopA: "Vollständig anhalten",
    s_stopW1: "Schneller fahren", s_stopW2: "Rechts abbiegen", s_stopW3: "Hupen",
    s_ped: "🚶 Fußgänger-Zeichen", s_pedA: "Fußgängerüberweg",
    s_pedW1: "Gehen verboten", s_pedW2: "Bushaltestelle", s_pedW3: "Parkplatz",
    s_noEntry: "⛔ Roter Kreis", s_noEntryA: "Einfahrt verboten",
    s_noEntryW1: "Einbahnstraße", s_noEntryW2: "Tempolimit", s_noEntryW3: "Parken erlaubt",
    s_speed: "30 im roten Kreis", s_speedA: "Tempolimit 30",
    s_speedW1: "Routennummer", s_speedW2: "30 Minuten Fahrt", s_speedW3: "Entfernungsanzeige",
    r4Title: "Fußgängerregeln", r4Hint: "Was solltest du tun?",
    p1Q: "Du willst die Straße überqueren. Was machst du zuerst?",
    p1A: "Links, rechts, dann nochmal links schauen", p1W1: "Einfach losrennen", p1W2: "Augen zu und loslaufen", p1W3: "Warten bis ein Auto von selbst hält",
    p2Q: "Die Fußgängerampel wird grün. Was machst du?",
    p2A: "Nochmal schauen, dann vorsichtig gehen", p2W1: "So schnell wie möglich rennen", p2W2: "Warten bis es rot wird", p2W3: "Ohne zu schauen gehen",
    p3Q: "Du gehst nachts an einer Straße. Was hilft?",
    p3A: "Helle oder reflektierende Kleidung tragen", p3W1: "Dunkle Kleidung tragen", p3W2: "Auf der Straßenmitte gehen", p3W3: "Augen schließen",
    p4Q: "Wo ist der sicherste Ort zum Überqueren?",
    p4A: "Am Zebrastreifen oder an der Ampel", p4W1: "Zwischen geparkten Autos", p4W2: "In einer Kurve", p4W3: "Wo es am nächsten ist",
    r5Title: "Schnelle Wiederholung", r5Hint: "Was hast du gelernt?",
    next: "Weiter", finish: "Fertig", correct: "Richtig!", wrong: "Leider falsch!",
  },
  hu: {
    r1Title: "Közlekedési lámpa", r1Hint: "Mit jelent ez a szín?",
    red: "Piros", yellow: "Sárga", green: "Zöld",
    stop: "Állj!", caution: "Vigyázz — készülj", go: "Menj!",
    r2Title: "Biztonságos vagy veszélyes?", r2Hint: "Ez a viselkedés biztonságos?",
    safe: "Biztonságos", unsafe: "Veszélyes",
    b_lookBoth: "Átkelés előtt nézz körül mindkét irányba", b_runRoad: "Nézés nélkül rohanj át az úton",
    b_helmet: "Kerékpározáskor viselj sisakot", b_playRoad: "Labdázz az úton",
    b_crosswalk: "Használd a zebrát az átkeléshez", b_redLight: "Piros jelzésnél kelj át",
    b_holdHand: "Forgalom közelében fogd meg egy felnőtt kezét", b_phoneCross: "Átkelés közben a telefonodat nézd",
    r3Title: "Közlekedési táblák", r3Hint: "Mit jelent ez a tábla?",
    s_stop: "🛑 Nyolcszögletű piros tábla", s_stopA: "Teljesen megállni",
    s_stopW1: "Gyorsítani", s_stopW2: "Jobbra fordulni", s_stopW3: "Dudálni",
    s_ped: "🚶 Gyalogos jelzés", s_pedA: "Gyalogos átkelőhely",
    s_pedW1: "Tilos a gyaloglás", s_pedW2: "Buszmegálló", s_pedW3: "Parkoló",
    s_noEntry: "⛔ Piros kör", s_noEntryA: "Behajtani tilos",
    s_noEntryW1: "Egyirányú utca", s_noEntryW2: "Sebességkorlátozás", s_noEntryW3: "Parkolás engedélyezett",
    s_speed: "30 piros körben", s_speedA: "Sebességkorlátozás 30",
    s_speedW1: "Útszám", s_speedW2: "30 perc menetidő", s_speedW3: "Távolságjelzés",
    r4Title: "Gyalogos szabályok", r4Hint: "Mit kell tenned?",
    p1Q: "Át akarsz kelni az úton. Mit csinálsz először?",
    p1A: "Balra, jobbra, majd ismét balra nézel", p1W1: "Egyszerűen átszaladsz", p1W2: "Becsukod a szemed és mész", p1W3: "Megvárod míg egy autó magától megáll",
    p2Q: "A gyalogos lámpa zöldre vált. Mit csinálsz?",
    p2A: "Még egyszer megnézed, majd óvatosan átmész", p2W1: "Amilyen gyorsan csak tudsz, átfutsz", p2W2: "Megvárod míg pirosra vált", p2W3: "Nézés nélkül átmész",
    p3Q: "Éjszaka sétálsz egy út mellett. Mi segít?",
    p3A: "Világos vagy fényvisszaverő ruhát viselni", p3W1: "Sötét ruhát viselni", p3W2: "Az út közepén sétálni", p3W3: "Becsukni a szemed",
    p4Q: "Hol a legbiztonságosabb átkelni?",
    p4A: "Zebrán vagy jelzőlámpánál", p4W1: "Parkoló autók között", p4W2: "Kanyarban", p4W3: "Ahol a legközelebb van",
    r5Title: "Gyors összefoglalás", r5Hint: "Mit tanultál?",
    next: "Tovább", finish: "Kész", correct: "Helyes!", wrong: "Sajnos hibás!",
  },
  ro: {
    r1Title: "Semaforul", r1Hint: "Ce înseamnă această culoare?",
    red: "Roșu", yellow: "Galben", green: "Verde",
    stop: "Stop!", caution: "Atenție — pregătește-te", go: "Mergi!",
    r2Title: "Sigur sau periculos?", r2Hint: "Este acest comportament sigur?",
    safe: "Sigur", unsafe: "Periculos",
    b_lookBoth: "Privește în ambele direcții înainte de a traversa", b_runRoad: "Aleargă peste drum fără să te uiți",
    b_helmet: "Poartă cască când mergi cu bicicleta", b_playRoad: "Joacă mingea pe drum",
    b_crosswalk: "Folosește trecerea de pietoni", b_redLight: "Traversează pe roșu",
    b_holdHand: "Ține-te de mâna unui adult lângă trafic", b_phoneCross: "Uită-te la telefon când traversezi",
    r3Title: "Semne de circulație", r3Hint: "Ce înseamnă acest semn?",
    s_stop: "🛑 Semn roșu octogonal", s_stopA: "Oprire completă",
    s_stopW1: "Accelerează", s_stopW2: "Virează la dreapta", s_stopW3: "Claxonează",
    s_ped: "🚶 Semn pieton", s_pedA: "Trecere de pietoni",
    s_pedW1: "Mersul interzis", s_pedW2: "Stație de autobuz", s_pedW3: "Parcare",
    s_noEntry: "⛔ Cerc roșu", s_noEntryA: "Accesul interzis",
    s_noEntryW1: "Sens unic", s_noEntryW2: "Limită de viteză", s_noEntryW3: "Parcare permisă",
    s_speed: "30 în cerc roșu", s_speedA: "Limită de viteză 30",
    s_speedW1: "Număr de traseu", s_speedW2: "30 minute de mers", s_speedW3: "Indicator distanță",
    r4Title: "Reguli pentru pietoni", r4Hint: "Ce ar trebui să faci?",
    p1Q: "Vrei să traversezi. Ce faci mai întâi?",
    p1A: "Te uiți la stânga, dreapta, apoi iar la stânga", p1W1: "Fugi direct", p1W2: "Închizi ochii și mergi", p1W3: "Aștepți ca o mașină să oprească singură",
    p2Q: "Semaforul de pietoni devine verde. Ce faci?",
    p2A: "Te uiți din nou, apoi traversezi cu atenție", p2W1: "Fugi cât mai repede", p2W2: "Aștepți să devină roșu", p2W3: "Traversezi fără să te uiți",
    p3Q: "Mergi pe lângă un drum noaptea. Ce ajută?",
    p3A: "Să porți haine deschise la culoare sau reflectorizante", p3W1: "Să porți haine închise", p3W2: "Să mergi pe mijlocul drumului", p3W3: "Să închizi ochii",
    p4Q: "Unde este cel mai sigur loc de traversare?",
    p4A: "La trecerea de pietoni sau semafor", p4W1: "Între mașini parcate", p4W2: "Într-o curbă", p4W3: "Oriunde e cel mai aproape",
    r5Title: "Recapitulare rapidă", r5Hint: "Ce ai învățat?",
    next: "Înainte", finish: "Gata", correct: "Corect!", wrong: "Nu chiar!",
  },
};

function shuffle<T>(arr: T[]): T[] {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c;
}

type QItem = { q: string; a: string; wrong: string[] };

function TrafficExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const t = L[lang] ?? L.de;
  const [round, setRound] = useState(0);
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "hu" ? "hu-HU" : lang === "de" ? "de-DE" : lang === "ro" ? "ro-RO" : "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }, [lang]);

  // Round 0: Traffic light
  const r0Qs = useMemo<QItem[]>(() => shuffle([
    { q: "red", a: "stop", wrong: ["caution", "go"] },
    { q: "yellow", a: "caution", wrong: ["stop", "go"] },
    { q: "green", a: "go", wrong: ["stop", "caution"] },
  ]), []);
  const [r0i, setR0i] = useState(0);
  const [r0a, setR0a] = useState<string | null>(null);

  // Round 1: Safe/Unsafe
  type BinQ = { key: string; safe: boolean };
  const r1Qs = useMemo<BinQ[]>(() => shuffle([
    { key: "b_lookBoth", safe: true }, { key: "b_runRoad", safe: false },
    { key: "b_helmet", safe: true }, { key: "b_playRoad", safe: false },
    { key: "b_crosswalk", safe: true }, { key: "b_redLight", safe: false },
    { key: "b_holdHand", safe: true }, { key: "b_phoneCross", safe: false },
  ]).slice(0, 4), []);
  const [r1i, setR1i] = useState(0);
  const [r1a, setR1a] = useState<boolean | null>(null);

  // Round 2: Road Signs
  const r2Qs = useMemo<QItem[]>(() => shuffle([
    { q: "s_stop", a: "s_stopA", wrong: ["s_stopW1", "s_stopW2", "s_stopW3"] },
    { q: "s_ped", a: "s_pedA", wrong: ["s_pedW1", "s_pedW2", "s_pedW3"] },
    { q: "s_noEntry", a: "s_noEntryA", wrong: ["s_noEntryW1", "s_noEntryW2", "s_noEntryW3"] },
    { q: "s_speed", a: "s_speedA", wrong: ["s_speedW1", "s_speedW2", "s_speedW3"] },
  ]).slice(0, 3), []);
  const [r2i, setR2i] = useState(0);
  const [r2a, setR2a] = useState<string | null>(null);

  // Round 3: Pedestrian rules
  const r3Qs = useMemo<QItem[]>(() => shuffle([
    { q: "p1Q", a: "p1A", wrong: ["p1W1", "p1W2", "p1W3"] },
    { q: "p2Q", a: "p2A", wrong: ["p2W1", "p2W2", "p2W3"] },
    { q: "p3Q", a: "p3A", wrong: ["p3W1", "p3W2", "p3W3"] },
    { q: "p4Q", a: "p4A", wrong: ["p4W1", "p4W2", "p4W3"] },
  ]).slice(0, 3), []);
  const [r3i, setR3i] = useState(0);
  const [r3a, setR3a] = useState<string | null>(null);

  // Round 4: Review (mixed from all)
  const r4Qs = useMemo<QItem[]>(() => shuffle([
    { q: "red", a: "stop", wrong: ["caution", "go"] },
    { q: "s_ped", a: "s_pedA", wrong: ["s_pedW1", "s_pedW2", "s_pedW3"] },
    { q: "p4Q", a: "p4A", wrong: ["p4W1", "p4W2", "p4W3"] },
    { q: "green", a: "go", wrong: ["stop", "caution"] },
    { q: "s_stop", a: "s_stopA", wrong: ["s_stopW1", "s_stopW2", "s_stopW3"] },
  ]).slice(0, 3), []);
  const [r4i, setR4i] = useState(0);
  const [r4a, setR4a] = useState<string | null>(null);

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) { onDone(scoreRef.current, totalRef.current); }
    else { setRound(r => r + 1); }
  }, [round, onDone]);

  const handleMCQ = (selected: string, correct: string, setAns: (v: string) => void) => {
    totalRef.current++;
    if (selected === correct) scoreRef.current++;
    setAns(selected);
  };

  const renderMCQ = (options: string[], selected: string | null, correct: string, onSelect: (v: string) => void) => (
    <div className="space-y-2 w-full max-w-xs">
      {options.map(opt => {
        let bg = "rgba(255,255,255,0.06)", border = "rgba(255,255,255,0.1)";
        if (selected !== null) {
          if (opt === correct) { bg = "#00FF8833"; border = "#00FF88"; }
          else if (opt === selected) { bg = "#FF2D7833"; border = "#FF2D78"; }
        }
        return (
          <motion.button key={opt} onClick={() => { if (!selected) onSelect(opt); }}
            className="w-full py-3 px-4 rounded-xl font-bold text-white text-sm transition-all"
            whileTap={!selected ? { scale: 0.97 } : undefined}
            style={{ background: bg, border: `2px solid ${border}` }}>
            {t[opt] ?? opt}
          </motion.button>
        );
      })}
    </div>
  );

  const renderFeedback = (selected: string | null, correct: string) => {
    if (!selected) return null;
    const ok = selected === correct;
    return <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-black" style={{ color: ok ? "#00FF88" : "#FF2D78" }}>{ok ? t.correct : t.wrong}</motion.p>;
  };

  const renderNext = (disabled: boolean, onClick: () => void, label?: string) => (
    <motion.button onClick={onClick} disabled={disabled}
      className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2 disabled:opacity-30"
      style={{ background: !disabled ? `linear-gradient(135deg, ${color}55, ${color}99)` : "rgba(255,255,255,0.06)", border: `2px solid ${!disabled ? color : "rgba(255,255,255,0.1)"}` }}>
      {label ?? t.next} <ChevronRight size={16} />
    </motion.button>
  );

  const renderSubProgress = (idx: number, total: number) => (
    <span className="text-white/40 text-xs font-bold">{idx + 1}/{total}</span>
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
        >✕</button>
      )}
      <div className="flex justify-center gap-1.5 pt-4 pb-3">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={round} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">

          {round === 0 && (() => {
            const q = r0Qs[r0i]; if (!q) return null;
            const opts = useMemo(() => shuffle([q.a, ...q.wrong]), [r0i]); // eslint-disable-line
            return (<>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-white">{t.r1Title}</p>
                <button onClick={() => speak(t.r1Title + ". " + t.r1Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <Volume2 size={16} />
                </button>
              </div>
              <p className="text-white/60 text-xs font-bold text-center">{t.r1Hint}</p>
              {renderSubProgress(r0i, r0Qs.length)}
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{
                background: q.q === "red" ? "#ef4444" : q.q === "yellow" ? "#eab308" : "#22c55e",
                boxShadow: `0 0 30px ${q.q === "red" ? "#ef444466" : q.q === "yellow" ? "#eab30866" : "#22c55e66"}`
              }}>{q.q === "red" ? "🔴" : q.q === "yellow" ? "🟡" : "🟢"}</div>
              <p className="text-white/80 font-bold">{t[q.q]}</p>
              {renderMCQ(opts, r0a, q.a, (v) => handleMCQ(v, q.a, setR0a))}
              {renderFeedback(r0a, q.a)}
              {renderNext(!r0a, () => { if (r0i < r0Qs.length - 1) { setR0i(i => i + 1); setR0a(null); } else advance(); })}
            </>);
          })()}

          {round === 1 && (() => {
            const q = r1Qs[r1i]; if (!q) return null;
            return (<>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-white">{t.r2Title}</p>
                <button onClick={() => speak(t.r2Title + ". " + t.r2Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <Volume2 size={16} />
                </button>
              </div>
              <p className="text-white/60 text-xs font-bold text-center">{t.r2Hint}</p>
              {renderSubProgress(r1i, r1Qs.length)}
              <div className="w-full max-w-xs py-5 px-6 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white font-bold text-base">{t[q.key]}</p>
              </div>
              <div className="flex gap-3 w-full max-w-xs">
                {([true, false] as const).map(val => {
                  const label = val ? t.safe : t.unsafe;
                  const isSelected = r1a === val;
                  const isCorrect = val === q.safe;
                  let bg = "rgba(255,255,255,0.06)", border = "rgba(255,255,255,0.1)";
                  if (r1a !== null) {
                    if (isCorrect) { bg = "#00FF8833"; border = "#00FF88"; }
                    else if (isSelected) { bg = "#FF2D7833"; border = "#FF2D78"; }
                  }
                  return (
                    <motion.button key={String(val)} onClick={() => {
                      if (r1a !== null) return;
                      totalRef.current++;
                      if (val === q.safe) scoreRef.current++;
                      setR1a(val);
                    }} whileTap={r1a === null ? { scale: 0.97 } : undefined}
                      className="flex-1 py-3 rounded-xl font-black text-white text-sm transition-all"
                      style={{ background: bg, border: `2px solid ${border}` }}>
                      {val ? "👍" : "👎"} {label}
                    </motion.button>
                  );
                })}
              </div>
              {r1a !== null && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-black"
                style={{ color: r1a === q.safe ? "#00FF88" : "#FF2D78" }}>{r1a === q.safe ? t.correct : t.wrong}</motion.p>}
              {renderNext(r1a === null, () => { if (r1i < r1Qs.length - 1) { setR1i(i => i + 1); setR1a(null); } else advance(); })}
            </>);
          })()}

          {round === 2 && (() => {
            const q = r2Qs[r2i]; if (!q) return null;
            const opts = useMemo(() => shuffle([q.a, ...q.wrong]), [r2i]); // eslint-disable-line
            return (<>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-white">{t.r3Title}</p>
                <button onClick={() => speak(t.r3Title + ". " + t.r3Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <Volume2 size={16} />
                </button>
              </div>
              <p className="text-white/60 text-xs font-bold text-center">{t.r3Hint}</p>
              {renderSubProgress(r2i, r2Qs.length)}
              <div className="text-3xl mb-2">{t[q.q]}</div>
              {renderMCQ(opts, r2a, q.a, (v) => handleMCQ(v, q.a, setR2a))}
              {renderFeedback(r2a, q.a)}
              {renderNext(!r2a, () => { if (r2i < r2Qs.length - 1) { setR2i(i => i + 1); setR2a(null); } else advance(); })}
            </>);
          })()}

          {round === 3 && (() => {
            const q = r3Qs[r3i]; if (!q) return null;
            const opts = useMemo(() => shuffle([q.a, ...q.wrong]), [r3i]); // eslint-disable-line
            return (<>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-white">{t.r4Title}</p>
                <button onClick={() => speak(t.r4Title + ". " + t.r4Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <Volume2 size={16} />
                </button>
              </div>
              <p className="text-white/60 text-xs font-bold text-center">{t.r4Hint}</p>
              {renderSubProgress(r3i, r3Qs.length)}
              <p className="text-white/80 font-bold text-center text-sm max-w-xs">{t[q.q]}</p>
              {renderMCQ(opts, r3a, q.a, (v) => handleMCQ(v, q.a, setR3a))}
              {renderFeedback(r3a, q.a)}
              {renderNext(!r3a, () => { if (r3i < r3Qs.length - 1) { setR3i(i => i + 1); setR3a(null); } else advance(); })}
            </>);
          })()}

          {round === 4 && (() => {
            const q = r4Qs[r4i]; if (!q) return null;
            const opts = useMemo(() => shuffle([q.a, ...q.wrong]), [r4i]); // eslint-disable-line
            return (<>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-white">{t.r5Title}</p>
                <button onClick={() => speak(t.r5Title + ". " + t.r5Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                  <Volume2 size={16} />
                </button>
              </div>
              <p className="text-white/60 text-xs font-bold text-center">{t.r5Hint}</p>
              {renderSubProgress(r4i, r4Qs.length)}
              <p className="text-white/80 font-bold text-center text-sm max-w-xs">{t[q.q]}</p>
              {renderMCQ(opts, r4a, q.a, (v) => handleMCQ(v, q.a, setR4a))}
              {renderFeedback(r4a, q.a)}
              {renderNext(!r4a, () => { if (r4i < r4Qs.length - 1) { setR4i(i => i + 1); setR4a(null); } else advance(); }, t.finish)}
            </>);
          })()}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(TrafficExplorer);
