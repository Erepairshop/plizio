"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Lang = "de" | "hu" | "ro" | "en";

interface Props {
  grade: number;
  lang: Lang;
  onDone?: (score: number) => void;
}

type Phase =
  | "intro"
  | "setting"
  | "character"
  | "einleitung"
  | "aufbau"
  | "hoehepunkt"
  | "aufloesung"
  | "result";

interface Setting {
  id: string;
  emoji: string;
  label: string;
  ort: string; // used in sentence templates
}

interface Character {
  id: string;
  name: string;
  emoji: string;
  label: string;
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const SETTINGS: Setting[] = [
  { id: "wald", emoji: "🌲", label: "Dunkler Wald", ort: "im dunklen Wald" },
  { id: "haus", emoji: "🏚️", label: "Verlassenes Haus", ort: "im verlassenen Haus" },
  { id: "friedhof", emoji: "⛪", label: "Nebliger Friedhof", ort: "auf dem nebligen Friedhof" },
  { id: "keller", emoji: "🕯️", label: "Alter Keller", ort: "im alten Keller" },
  { id: "dachboden", emoji: "🪜", label: "Staubiger Dachboden", ort: "auf dem staubigen Dachboden" },
  { id: "schloss", emoji: "🏰", label: "Verlassenes Schloss", ort: "im verlassenen Schloss" },
  { id: "hoehle", emoji: "🕳️", label: "Tiefe Höhle", ort: "in der tiefen Höhle" },
  { id: "spiegelsaal", emoji: "🪞", label: "Spiegelsaal", ort: "im Spiegelsaal" },
];

const CHARACTERS: Character[] = [
  { id: "emma", name: "Emma", emoji: "👧", label: "Ein kleines Mädchen" },
  { id: "leon", name: "Leon", emoji: "👦", label: "Ein mutiger Junge" },
  { id: "geschwister", name: "Lena und Tim", emoji: "👫", label: "Zwei Geschwister" },
  { id: "mia", name: "Mia", emoji: "🧒", label: "Eine neugierige Forscherin" },
  { id: "max", name: "Max", emoji: "👨‍🦱", label: "Ein schlauer Detektiv" },
  { id: "gruppe", name: "Die Freunde", emoji: "👥", label: "Drei Freunde auf Expedition" },
];

// {name} and {ort} are replaced at render time
const SENTENCES: Record<string, string[]> = {
  einleitung: [
    "Es war eine dunkle und stürmische Nacht, als {name} allein {ort} schlich.",
    "Niemand hatte {name} gewarnt, wie unheimlich es {ort} in der Nacht sein konnte.",
    "Der Weg {ort} sah tagsüber harmlos aus – aber an diesem Abend war alles anders.",
    "Seit Tagen kreisten die Gerüchte {ort} um seltsame Geräusche – heute wollte {name} endlich nachsehen.",
    "Der Mond verschwand hinter einer Wolke, genau in dem Moment, als {name} {ort} ankam.",
    "Normalerweise mied jeder diesen Ort – doch {name} kannte keine Furcht… oder fast keine.",
  ],
  aufbau: [
    "Plötzlich hörte {name} ein seltsames Knacken direkt hinter sich.",
    "Mit zitternden Knien blieb {name} stehen – irgendetwas bewegte sich da vorne.",
    "Das Herz schlug wie verrückt, als ein langer Schatten an der Wand entlangglitt.",
    "Ein eiskalter Luftzug strich über {name}'s Nacken, obwohl kein Fenster offen stand.",
    "In der Ferne erklang ein leises Flüstern – doch weit und breit war niemand zu sehen.",
    "Die Taschenlampe flackerte zweimal kurz auf und erlosch dann ganz.",
  ],
  hoehepunkt: [
    "Urplötzlich sprang etwas aus der Dunkelheit – direkt auf {name} zu!",
    "Ein lauter Schrei zerriss die Stille, und {name} erstarrte vor Schreck.",
    "Im nächsten Moment stand {name} Auge in Auge mit dem Unbekannten.",
    "Etwas Kaltes legte sich auf {name}'s Schulter – doch {name} wagte nicht, sich umzudrehen.",
    "Die Tür knallte mit voller Wucht zu, und {name} war in der Falle!",
    "Zwei funkelnde Augen starrten {name} aus dem Dunkel an – regungslos, lauernd.",
  ],
  aufloesung: [
    "Doch dann lachte {name} erleichtert auf – es war nur die Katze der Nachbarin!",
    "Zum Glück stellte sich heraus: kein Monster, sondern nur der Wind im Kamin.",
    "Mit einem tiefen Atemzug erkannte {name}: Gänsehaut für nichts – alles war harmlos!",
    "Als {name} das Licht anknipste, war der Spuk vorbei – es war nur ein alter Mantel am Haken.",
    "Später, zu Hause bei einer heißen Schokolade, konnte {name} über das Abenteuer lachen.",
    "Seitdem weiß {name}: Manchmal spielen uns unsere eigenen Augen den größten Streich.",
  ],
};

const WORTSPEICHER = {
  "🎨 Adjektive": ["unheimlich", "gruselig", "finster", "schaurig", "eisig", "gespenstisch", "nebelig", "morsch", "verlassen", "staubig", "knorrig", "dämmrig"],
  "🔊 Geräusche": ["knarren", "rascheln", "heulen", "knacken", "flüstern", "zischen", "dröhnen", "klirren", "seufzen", "stöhnen", "tropfen", "kratzen"],
  "💓 Gefühle": ["Herzklopfen", "Gänsehaut", "zitternde Knie", "kalter Schweiß", "Schauer", "Beklemmung", "Angstschweiß", "Entsetzen", "eiskaltes Grauen"],
  "⚡ Starke Verben": ["schleichen", "erstarren", "aufspringen", "zusammenzucken", "verstummen", "kriechen", "flüchten", "verharren", "erzittern"],
  "⏱️ Satzanfänge": ["Plötzlich", "Urplötzlich", "Auf einmal", "Im nächsten Moment", "Mit einem Mal", "Kaum hatte... als", "In dem Augenblick", "Ohne Vorwarnung"],
  "🌫️ Metaphern": ["wie Finger in die Nacht", "ein eisiger Hauch", "wie ein Schatten aus dem Nichts", "wie flüsternde Stimmen", "wie ein Mantel aus Dunkelheit"],
};

const PHASE_LABELS: Record<Phase, string> = {
  intro: "",
  setting: "1. Wähle deinen Ort 🗺️",
  character: "2. Wähle deine Figur 🧒",
  einleitung: "3. Einleitung — Wie beginnt deine Geschichte?",
  aufbau: "4. Aufbau — Was passiert dann?",
  hoehepunkt: "5. Höhepunkt — Der gruseligste Moment!",
  aufloesung: "6. Auflösung — Und am Ende?",
  result: "",
};

const PHASE_ORDER: Phase[] = [
  "intro", "setting", "character", "einleitung", "aufbau", "hoehepunkt", "aufloesung", "result",
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function GruselBuilderGame({ grade: _grade, lang: _lang, onDone }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [setting, setSetting] = useState<Setting | null>(null);
  const [character, setCharacter] = useState<Character | null>(null);
  const [sentences, setSentences] = useState<Record<string, string>>({});
  const [wordsCopied, setWordsCopied] = useState<string[]>([]);
  const [showWordspeicher, setShowWordspeicher] = useState(false);

  const advance = () => {
    const idx = PHASE_ORDER.indexOf(phase);
    if (idx < PHASE_ORDER.length - 1) setPhase(PHASE_ORDER[idx + 1]);
  };

  const fillTemplate = (tpl: string) => {
    if (!character || !setting) return tpl;
    return tpl
      .replace(/{name}/g, character.name)
      .replace(/{ort}/g, setting.ort);
  };

  const assembledStory = [
    sentences.einleitung,
    sentences.aufbau,
    sentences.hoehepunkt,
    sentences.aufloesung,
  ]
    .filter(Boolean)
    .map(fillTemplate)
    .join(" ");

  const copyWord = (w: string) => {
    if (!wordsCopied.includes(w)) setWordsCopied((prev) => [...prev, w]);
  };

  const progress = PHASE_ORDER.indexOf(phase); // 0–7

  return (
    <div className="relative w-full max-w-3xl mx-auto select-none">
      {/* Fog / ambient background */}
      <div
        className="relative rounded-[28px] border border-purple-500/20 overflow-hidden shadow-2xl"
        style={{
          minHeight: 540,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.18) 0%, rgba(15,10,40,0.98) 55%, #080613 100%)",
        }}
      >
        {/* Animated fog blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 300 + i * 120,
                height: 120 + i * 60,
                background: "rgba(139,92,246,0.06)",
                left: `${10 + i * 25}%`,
                top: `${60 + i * 10}%`,
                filter: "blur(40px)",
              }}
              animate={{ x: [0, 30, -20, 0], y: [0, -15, 10, 0] }}
              transition={{ duration: 10 + i * 4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Progress bar */}
        {phase !== "intro" && phase !== "result" && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${((progress - 1) / 5) * 100}%` }}
            />
          </div>
        )}

        {/* Phase label + Wortspeicher toggle (integrated, no overlay overlap) */}
        {PHASE_LABELS[phase] && (
          <div className="relative px-6 pt-6 pb-4 flex items-start justify-between gap-3">
            <p className="text-purple-200/90 text-base sm:text-lg font-bold">
              {PHASE_LABELS[phase]}
            </p>
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowWordspeicher((s) => !s)}
                className="flex items-center gap-1.5 rounded-full bg-purple-900/70 border border-purple-500/40 px-3 py-1.5 text-xs text-purple-200 hover:bg-purple-800/80 transition whitespace-nowrap"
              >
                📖 Wortspeicher {showWordspeicher ? "▲" : "▼"}
              </button>
              <AnimatePresence>
                {showWordspeicher && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-full right-0 mt-1 z-30 w-72 max-h-64 overflow-y-auto rounded-2xl border border-purple-500/30 bg-[#100820]/95 backdrop-blur p-4 shadow-2xl"
                  >
                    <p className="text-purple-300/70 text-[10px] uppercase tracking-widest mb-3">
                      Klicke auf ein Wort, um es zu merken
                    </p>
                    {Object.entries(WORTSPEICHER).map(([cat, words]) => (
                      <div key={cat} className="mb-3">
                        <p className="text-purple-400/80 text-[10px] font-bold mb-1">{cat}</p>
                        <div className="flex flex-wrap gap-1">
                          {words.map((w) => (
                            <button
                              key={w}
                              onClick={() => copyWord(w)}
                              className={`rounded-full px-2 py-0.5 text-[11px] border transition ${
                                wordsCopied.includes(w)
                                  ? "bg-purple-600/40 border-purple-400/60 text-purple-100"
                                  : "bg-white/5 border-white/10 text-white/70 hover:bg-purple-600/20 hover:border-purple-400/40"
                              }`}
                            >
                              {wordsCopied.includes(w) ? "✓ " : ""}{w}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    {wordsCopied.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-purple-500/20">
                        <p className="text-purple-300/70 text-[10px] mb-1">Meine Wörter:</p>
                        <p className="text-purple-100 text-xs leading-relaxed">
                          {wordsCopied.join(" · ")}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ── INTRO ── */}
        {phase === "intro" && (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl mb-4"
            >
              👻
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-black mb-3"
              style={{
                background: "linear-gradient(135deg, #c084fc, #f0abfc, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grusel-Baukasten
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-white/65 text-sm max-w-xs mb-8"
            >
              Baue Schritt für Schritt deine eigene Gruselgeschichte!
              Wähle Ort, Figur und die besten Sätze.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={advance}
              className="px-8 py-3 rounded-full font-bold text-white text-base bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_8px_24px_rgba(139,92,246,0.45)] hover:scale-105 active:scale-95 transition"
            >
              🕯️ Geschichte beginnen
            </motion.button>
          </div>
        )}

        {/* ── SETTING ── */}
        {phase === "setting" && (
          <div className="px-6 pb-8">
            <div className="grid grid-cols-2 gap-3">
              {SETTINGS.map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSetting(s);
                    advance();
                  }}
                  className={`rounded-2xl border p-5 text-left transition flex flex-col gap-2 ${
                    setting?.id === s.id
                      ? "border-purple-400/70 bg-purple-600/20"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-400/40 hover:bg-purple-600/10"
                  }`}
                >
                  <span className="text-4xl">{s.emoji}</span>
                  <span className="text-white/90 font-semibold text-sm">{s.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* ── CHARACTER ── */}
        {phase === "character" && (
          <div className="px-6 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CHARACTERS.map((c) => (
                <motion.button
                  key={c.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setCharacter(c);
                    advance();
                  }}
                  className={`rounded-2xl border p-5 text-center transition flex flex-col items-center gap-2 ${
                    character?.id === c.id
                      ? "border-purple-400/70 bg-purple-600/20"
                      : "border-white/10 bg-white/[0.03] hover:border-purple-400/40 hover:bg-purple-600/10"
                  }`}
                >
                  <span className="text-4xl">{c.emoji}</span>
                  <span className="text-purple-200 font-black text-base">{c.name}</span>
                  <span className="text-white/55 text-xs">{c.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* ── SENTENCE STEPS ── */}
        {(["einleitung", "aufbau", "hoehepunkt", "aufloesung"] as Phase[]).includes(phase) && (
          <div className="px-6 pb-8">
            {/* Story so far */}
            {Object.keys(sentences).length > 0 && (
              <div className="mb-5 rounded-xl bg-white/[0.04] border border-purple-500/20 p-4">
                <p className="text-[10px] uppercase tracking-widest text-purple-300/60 mb-2">
                  Deine Geschichte bisher…
                </p>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  {[sentences.einleitung, sentences.aufbau, sentences.hoehepunkt]
                    .filter(Boolean)
                    .map(fillTemplate)
                    .join(" ")}
                </p>
              </div>
            )}

            {/* Options */}
            <div className="flex flex-col gap-3">
              {(SENTENCES[phase as string] ?? []).map((tpl, i) => {
                const filled = fillTemplate(tpl);
                const isSelected = sentences[phase as string] === tpl;
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => {
                      setSentences((prev) => ({ ...prev, [phase as string]: tpl }));
                      advance();
                    }}
                    className={`rounded-xl border px-5 py-4 text-left text-sm leading-relaxed transition ${
                      isSelected
                        ? "border-purple-400/70 bg-purple-600/20 text-purple-100"
                        : "border-white/10 bg-white/[0.03] text-white/80 hover:border-purple-400/40 hover:bg-purple-600/10 hover:text-white/95"
                    }`}
                  >
                    <span className="text-purple-400/70 font-bold mr-2">{i + 1}.</span>
                    {filled}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {phase === "result" && (
          <div className="px-6 py-8 flex flex-col">
            {/* Trophy */}
            <div className="text-center mb-6">
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-5xl mb-2"
              >
                🏆
              </motion.p>
              <h2
                className="text-2xl font-black"
                style={{
                  background: "linear-gradient(135deg, #c084fc, #f0abfc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Deine Gruselgeschichte ist fertig!
              </h2>
              {setting && character && (
                <p className="text-white/50 text-sm mt-1">
                  {character.emoji} {character.name} · {setting.emoji} {setting.label}
                </p>
              )}
            </div>

            {/* Story card */}
            <div
              id="grusel-story-card"
              className="rounded-2xl border border-purple-500/30 bg-[#0f0b20] p-6 mb-5"
            >
              {/* Story title suggestion */}
              <p className="text-[10px] uppercase tracking-widest text-purple-300/50 mb-3">
                📖 Meine Geschichte
              </p>
              <p className="text-white/90 text-base leading-8">{assembledStory}</p>

              {/* Collected words */}
              {wordsCopied.length > 0 && (
                <div className="mt-5 pt-4 border-t border-purple-500/20">
                  <p className="text-[10px] uppercase tracking-widest text-purple-300/50 mb-2">
                    Meine Lieblingswörter:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {wordsCopied.map((w) => (
                      <span
                        key={w}
                        className="rounded-full bg-purple-600/30 border border-purple-400/40 px-2.5 py-0.5 text-xs text-purple-200"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rubrik-Checkliste — Klassenarbeit Bewertungskriterien */}
            <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4 mb-4">
              <p className="text-emerald-300/90 text-[10px] uppercase tracking-widest font-bold mb-2">
                ✅ Selbst-Check für die Klassenarbeit
              </p>
              <ul className="text-emerald-100/85 text-xs leading-relaxed space-y-1">
                <li>• Macht die Einleitung neugierig auf die Geschichte?</li>
                <li>• Habe ich mindestens 3 starke Adjektive verwendet?</li>
                <li>• Beschreibe ich, was die Figur fühlt (z.B. Herzklopfen)?</li>
                <li>• Ist der Höhepunkt wirklich spannend?</li>
                <li>• Gibt es eine überraschende Auflösung am Schluss?</li>
                <li>• Wechsle ich zwischen kurzen und langen Sätzen?</li>
                <li>• Habe ich schwache Verben (ging, sah, machte) durch starke ersetzt?</li>
              </ul>
            </div>

            {/* Schwache-Verben Warnung */}
            {(() => {
              const weakVerbs = ["ging", "sah", "machte", "sagte", "war", "hatte"];
              const found = weakVerbs.filter((v) => new RegExp(`\\b${v}\\b`, "i").test(assembledStory));
              if (found.length === 0) return null;
              return (
                <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 mb-4">
                  <p className="text-amber-300/90 text-[10px] uppercase tracking-widest font-bold mb-2">
                    ⚠️ Entdeckt: schwache Verben
                  </p>
                  <p className="text-amber-100/85 text-xs leading-relaxed">
                    In deiner Geschichte kommen vor: <strong>{found.join(", ")}</strong>.
                    Ersetze sie durch stärkere Verben aus dem Wortspeicher (schleichen, erstarren, flüstern…) — das macht die Geschichte viel spannender!
                  </p>
                </div>
              );
            })()}

            {/* Tip box */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-5">
              <p className="text-amber-200/80 text-xs leading-relaxed">
                💡 <strong>Tipp für deinen Aufsatz:</strong> Erweitere jeden Satz mit Adjektiven
                aus dem Wortspeicher! Zum Beispiel: <em>„Mit zitternden Knien und
                eiskaltem Atem…"</em>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => window.print()}
                className="flex-1 rounded-full border border-purple-400/40 bg-purple-600/15 px-4 py-2.5 text-sm font-semibold text-purple-200 hover:bg-purple-600/25 transition"
              >
                🖨️ Drucken
              </button>
              <button
                onClick={() => {
                  const content = `Meine Gruselgeschichte\n\nOrt: ${setting?.label}\nFigur: ${character?.name}\n\n${assembledStory}\n\n${wordsCopied.length ? `Meine Lieblingswörter: ${wordsCopied.join(", ")}` : ""}`;
                  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `gruselgeschichte-${character?.name || "meine"}.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="flex-1 rounded-full border border-blue-400/40 bg-blue-600/15 px-4 py-2.5 text-sm font-semibold text-blue-200 hover:bg-blue-600/25 transition"
              >
                💾 Speichern
              </button>
              <button
                onClick={() => {
                  setSetting(null);
                  setCharacter(null);
                  setSentences({});
                  setWordsCopied([]);
                  setPhase("intro");
                }}
                className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/[0.08] transition"
              >
                🔄 Neue Geschichte
              </button>
              {onDone && (
                <button
                  onClick={() => onDone(100)}
                  className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-bold text-white hover:scale-105 active:scale-95 transition"
                >
                  ✓ Fertig!
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
