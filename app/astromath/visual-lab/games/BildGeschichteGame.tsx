"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "de" | "hu" | "ro" | "en";

interface Props {
  grade: number;
  lang: Lang;
  onDone?: (score: number) => void;
}

/* ------------------------------------------------------------------ */
/* Image data + per-image word banks                                   */
/* ------------------------------------------------------------------ */

interface GruselImage {
  id: string;
  file: string;
  title: string;
  emoji: string;
  sehen: string[];
  hoeren: string[];
  fuehlen: string[];
  starters: string[];
  tipSatz: string; // example sentence for the tip box
}

const IMAGES: GruselImage[] = [
  {
    id: "dark-forest",
    file: "/grusel-images/dark-forest.jpg",
    title: "Im dunklen Wald",
    emoji: "🌲",
    sehen: ["Bäume", "Äste", "Schatten", "Pfad", "Dunkelheit", "Nebel", "Mondlicht", "Wurzeln", "Blätter"],
    hoeren: ["Knacken", "Rascheln", "Eulenruf", "Windgeräusch", "Stille", "Knistern", "Knurren"],
    fuehlen: ["Gänsehaut", "Herzklopfen", "Kälte", "Einsamkeit", "Angst", "Schauer"],
    starters: [
      "Tief im Wald, wo das Mondlicht kaum durchkam, schlich {name} lautlos weiter…",
      "Der schmale Pfad schlängelte sich durch die dunklen Bäume, als plötzlich…",
      "Kein Laut war zu hören – nur das Knacken trockener Äste unter {name}'s Füßen…",
    ],
    tipSatz: "Die knorrigen Äste griffen wie Finger in die Nacht.",
  },
  {
    id: "abandoned-house",
    file: "/grusel-images/abandoned-house.jpg",
    title: "Das verlassene Haus",
    emoji: "🏚️",
    sehen: ["zerbrochene Fenster", "verrostete Tür", "Spinnennetze", "Staub", "Risse in der Wand", "Schatten", "alte Möbel", "Moos"],
    hoeren: ["Knarren", "Pfeifen des Windes", "Tropfen", "Stille", "Stöhnen", "Kratzen"],
    fuehlen: ["Unbehagen", "Gänsehaut", "Beklemmung", "Neugier", "Schrecken", "Einsamkeit"],
    starters: [
      "Das alte Haus am Ende der Straße stand schon seit Jahren leer – bis zu diesem Abend…",
      "Die morsche Treppe knarrte laut unter {name}'s Schritt, als…",
      "Durch ein zerbrochenes Fenster sah {name} einen Schatten, der sich langsam bewegte…",
    ],
    tipSatz: "Die verstaubten Vorhänge bewegten sich – obwohl kein Fenster offen war.",
  },
  {
    id: "foggy-night",
    file: "/grusel-images/foggy-night.jpg",
    title: "Neblige Nacht",
    emoji: "🌫️",
    sehen: ["dichter Nebel", "Laterne", "Silhouette", "dunkle Straße", "nasses Pflaster", "verschwommene Lichter"],
    hoeren: ["Schritte", "tropfendes Wasser", "entfernte Geräusche", "Stille", "Seufzen des Windes"],
    fuehlen: ["Kälte", "Beklemmung", "feuchte Luft", "Einsamkeit", "Unsicherheit"],
    starters: [
      "Der Nebel war so dicht, dass {name} kaum die Hand vor Augen sehen konnte…",
      "Eine einsame Laterne warf ihr zitterndes Licht auf das nasse Pflaster, als…",
      "In der Ferne tauchte eine Silhouette aus dem Nebel auf – und kam näher…",
    ],
    tipSatz: "Der Nebel verschluckte jeden Laut – als ob die ganze Welt eingeschlafen wäre.",
  },
  {
    id: "old-cellar",
    file: "/grusel-images/old-cellar.jpg",
    title: "Der alte Keller",
    emoji: "🕯️",
    sehen: ["alte Kisten", "Spinnennetze", "alte Flaschen", "Dunkelheit", "flackerndes Licht", "Schimmel", "Holzregale"],
    hoeren: ["Tropfen", "Rascheln", "Kratzen", "Knarren der Treppe", "tiefe Stille", "leises Piepsen"],
    fuehlen: ["Muffigkeit", "Kälte", "Beklemmung", "feuchte Luft", "Angst vor Dunkelheit"],
    starters: [
      "Die alte Holztreppe knarrte bei jedem Schritt, als {name} in den Keller hinabstieg…",
      "Die Taschenlampe warf lange Schatten zwischen die alten Kisten, und dann…",
      "Hinter dem letzten Regal, wo niemand jemals hingeschaut hatte, lag…",
    ],
    tipSatz: "Im Keller roch es nach feuchtem Holz, altem Staub und einem Geheimnis.",
  },
  {
    id: "storm-night",
    file: "/grusel-images/storm-night.jpg",
    title: "Die Gewitternacht",
    emoji: "⛈️",
    sehen: ["Blitz", "dunkle Wolken", "strömender Regen", "Schatten", "bebende Bäume", "Pfützen"],
    hoeren: ["Donner", "prasselnder Regen", "Heulen des Windes", "Äste brechen", "Fensterscheiben klirren"],
    fuehlen: ["Aufregung", "Spannung", "Schrecken beim Donner", "Herzklopfen", "Kälte"],
    starters: [
      "Als der Blitz den Himmel zerriss, sah {name} für einen Moment einen Schatten am Fenster…",
      "Der Donner ließ die Wände zittern, und gleichzeitig erlosch das Licht…",
      "Im grellen Licht eines Blitzes erkannte {name} etwas draußen im Garten…",
    ],
    tipSatz: "Ein grell weißer Blitz beleuchtete für eine Sekunde die Gestalt vor dem Fenster.",
  },
  {
    id: "old-door",
    file: "/grusel-images/old-door.jpg",
    title: "Die geheimnisvolle Tür",
    emoji: "🚪",
    sehen: ["alte Holztür", "verrostetes Schloss", "Risse im Holz", "Spinnenweben", "abblätternde Farbe", "schwerer Türgriff"],
    hoeren: ["Knarren", "Kratzen dahinter", "leises Klopfen", "Pfeifen durch den Spalt", "Stille"],
    fuehlen: ["Neugier", "Unbehagen", "Herzklopfen", "Spannung", "Ungewissheit"],
    starters: [
      "Die Tür war mit einem alten Schloss gesichert – trotzdem öffnete sie sich langsam…",
      "{name} legte die Hand auf den kalten, verrosteten Griff und zögerte…",
      "Hinter der geheimnisvollen Tür war etwas zu hören – ein leises, regelmäßiges Klopfen…",
    ],
    tipSatz: "Der Türgriff war eiskalt – obwohl draußen ein warmer Sommerabend herrschte.",
  },
  {
    id: "cemetery",
    file: "/grusel-images/cemetery.jpg",
    title: "Der Friedhof",
    emoji: "⛪",
    sehen: ["Grabsteine", "dichter Nebel", "kahle Bäume", "welke Blätter", "moosige Steine", "dunkle Schatten", "altes Kreuz"],
    hoeren: ["Rascheln", "Eulenruf", "Wind in den Ästen", "knirschender Kies", "tiefe Stille"],
    fuehlen: ["Schauer", "Ehrfurcht", "Gänsehaut", "Kälte", "Schwere der Stille"],
    starters: [
      "Der alte Friedhof lag im Nebel, als {name} den schmalen Kiesweg entlangschlich…",
      "Zwischen den alten Grabsteinen sah {name} plötzlich etwas, das sich bewegte…",
      "Die welken Blätter raschelten leise – und dann hörte {name} einen Schritt…",
    ],
    tipSatz: "Die alten Grabsteine ragten wie dunkle Finger aus dem Nebel.",
  },
];

/* ------------------------------------------------------------------ */
/* Phases                                                              */
/* ------------------------------------------------------------------ */

type Phase =
  | "intro"
  | "pick-image"
  | "observe-see"
  | "observe-hear"
  | "observe-feel"
  | "pick-start"
  | "write"
  | "result";

const PHASE_ORDER: Phase[] = [
  "intro", "pick-image", "observe-see", "observe-hear", "observe-feel",
  "pick-start", "write", "result",
];

const OBSERVE_LABEL: Record<string, { icon: string; question: string; min: number }> = {
  "observe-see":  { icon: "👀", question: "Was siehst du auf dem Bild?", min: 3 },
  "observe-hear": { icon: "👂", question: "Was könntest du dort hören?", min: 2 },
  "observe-feel": { icon: "💓", question: "Was fühlst du beim Anschauen?", min: 2 },
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function BildGeschichteGame({ grade: _grade, lang: _lang, onDone }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [image, setImage] = useState<GruselImage | null>(null);
  const [selectedSee, setSelectedSee] = useState<string[]>([]);
  const [selectedHear, setSelectedHear] = useState<string[]>([]);
  const [selectedFeel, setSelectedFeel] = useState<string[]>([]);
  const [chosenStarter, setChosenStarter] = useState("");
  const [storyText, setStoryText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const advance = () => {
    const idx = PHASE_ORDER.indexOf(phase);
    if (idx < PHASE_ORDER.length - 1) setPhase(PHASE_ORDER[idx + 1]);
  };

  const toggleWord = (
    word: string,
    list: string[],
    setList: (v: string[]) => void,
  ) => {
    setList(list.includes(word) ? list.filter((w) => w !== word) : [...list, word]);
  };

  const allChosenWords = [...selectedSee, ...selectedHear, ...selectedFeel];

  const fillStarter = (tpl: string) =>
    tpl.replace(/{name}/g, "sie"); // generic placeholder

  const wordCount = storyText.trim().split(/\s+/).filter(Boolean).length;

  const fullStory = storyText.trim()
    ? `${chosenStarter ? chosenStarter + " " : ""}${storyText.trim()}`
    : chosenStarter;

  const progress = Math.max(0, PHASE_ORDER.indexOf(phase) - 1); // 0–6

  return (
    <div className="relative w-full max-w-3xl mx-auto select-none">
      <div
        className="relative rounded-[28px] border border-indigo-500/20 overflow-hidden shadow-2xl"
        style={{
          minHeight: 560,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.2) 0%, rgba(10,10,35,0.99) 55%, #060615 100%)",
        }}
      >
        {/* Background stars */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${(i * 71) % 100}%`,
                top: `${(i * 43) % 100}%`,
                width: ((i * 13) % 2) + 1,
                height: ((i * 13) % 2) + 1,
                opacity: 0.25,
              }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 2 + (i % 5), repeat: Infinity, delay: i * 0.12 }}
            />
          ))}
        </div>

        {/* Progress bar */}
        {phase !== "intro" && phase !== "result" && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-10">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
              style={{ width: `${(progress / 6) * 100}%` }}
            />
          </div>
        )}

        {/* ── INTRO ── */}
        {phase === "intro" && (
          <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-5xl mb-4">🖼️</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-black mb-3"
              style={{ background: "linear-gradient(135deg,#818cf8,#c084fc,#f0abfc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Bild-Geschichte
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/65 text-sm max-w-sm mb-3">
              Schau dir ein Bild genau an. Beschreibe, was du siehst, hörst und fühlst –
              und schreibe dann deine eigene Gruselgeschichte!
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-xs text-indigo-300/70 mb-8 rounded-xl border border-indigo-500/20 bg-indigo-500/8 px-4 py-2 max-w-xs">
              ✏️ Diese Übung hilft dir, einen <strong>lebendigen Aufsatz</strong> zu schreiben –
              genau wie in der Schule!
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
              onClick={advance}
              className="px-8 py-3 rounded-full font-bold text-white text-base bg-gradient-to-r from-indigo-600 to-violet-600 shadow-[0_8px_24px_rgba(99,102,241,0.45)] hover:scale-105 active:scale-95 transition"
            >
              🔍 Bild auswählen
            </motion.button>
          </div>
        )}

        {/* ── PICK IMAGE ── */}
        {phase === "pick-image" && (
          <div className="px-4 pt-6 pb-6">
            <p className="text-indigo-200/90 font-bold text-base mb-4 px-2">
              Wähle ein Bild für deine Geschichte:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {IMAGES.map((img) => (
                <motion.button
                  key={img.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setImage(img);
                    setSelectedSee([]);
                    setSelectedHear([]);
                    setSelectedFeel([]);
                    setChosenStarter("");
                    setStoryText("");
                    advance();
                  }}
                  className="rounded-xl overflow-hidden border-2 border-transparent hover:border-indigo-400/70 transition relative group"
                >
                  <img
                    src={img.file}
                    alt={img.title}
                    className="w-full h-28 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
                    <span className="text-white text-xs font-bold leading-tight">
                      {img.emoji} {img.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* ── OBSERVE phases ── */}
        {(["observe-see", "observe-hear", "observe-feel"] as Phase[]).includes(phase) && image && (() => {
          const meta = OBSERVE_LABEL[phase];
          const words =
            phase === "observe-see" ? image.sehen
            : phase === "observe-hear" ? image.hoeren
            : image.fuehlen;
          const selected =
            phase === "observe-see" ? selectedSee
            : phase === "observe-hear" ? selectedHear
            : selectedFeel;
          const setSelected =
            phase === "observe-see" ? setSelectedSee
            : phase === "observe-hear" ? setSelectedHear
            : setSelectedFeel;

          return (
            <div className="px-4 pt-4 pb-6">
              {/* Image preview */}
              <div className="relative rounded-xl overflow-hidden mb-4 h-44">
                <img src={image.file} alt={image.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-white font-bold text-sm">{image.emoji} {image.title}</span>
                </div>
              </div>

              <p className="text-lg font-bold text-indigo-200 mb-1">
                {meta.icon} {meta.question}
              </p>
              <p className="text-white/45 text-xs mb-4">
                Wähle mindestens {meta.min} Wörter:
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {words.map((w) => (
                  <button
                    key={w}
                    onClick={() => toggleWord(w, selected, setSelected)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium border transition ${
                      selected.includes(w)
                        ? "bg-indigo-600/50 border-indigo-400/70 text-indigo-100 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                        : "bg-white/5 border-white/15 text-white/70 hover:bg-indigo-600/20 hover:border-indigo-400/40"
                    }`}
                  >
                    {selected.includes(w) ? "✓ " : ""}{w}
                  </button>
                ))}
              </div>

              {/* Selected summary */}
              {selected.length > 0 && (
                <p className="text-xs text-indigo-300/70 mb-4">
                  Gewählt: <span className="text-indigo-200">{selected.join(", ")}</span>
                </p>
              )}

              <button
                onClick={advance}
                disabled={selected.length < meta.min}
                className={`w-full rounded-full py-3 text-sm font-bold transition ${
                  selected.length >= meta.min
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-white/5 text-white/30 cursor-not-allowed"
                }`}
              >
                {selected.length < meta.min
                  ? `Noch ${meta.min - selected.length} Wort${meta.min - selected.length > 1 ? "er" : ""} wählen`
                  : "Weiter →"}
              </button>
            </div>
          );
        })()}

        {/* ── PICK STARTER ── */}
        {phase === "pick-start" && image && (
          <div className="px-4 pt-4 pb-6">
            <div className="relative rounded-xl overflow-hidden mb-4 h-36">
              <img src={image.file} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                <span className="text-white font-bold text-sm">{image.emoji} {image.title}</span>
              </div>
            </div>

            {/* Chosen words summary */}
            <div className="rounded-xl bg-indigo-500/8 border border-indigo-500/20 p-3 mb-5">
              <p className="text-[10px] uppercase tracking-widest text-indigo-300/60 mb-2">Deine Wörter:</p>
              <div className="flex flex-wrap gap-1.5">
                {allChosenWords.map((w) => (
                  <span key={w} className="rounded-full bg-indigo-600/30 border border-indigo-400/30 px-2.5 py-0.5 text-xs text-indigo-200">{w}</span>
                ))}
              </div>
            </div>

            <p className="text-indigo-200/90 font-bold text-base mb-3">
              ✍️ Wähle einen Satzanfang:
            </p>
            <div className="flex flex-col gap-3">
              {image.starters.map((s, i) => {
                const filled = fillStarter(s);
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setChosenStarter(filled);
                      advance();
                      setTimeout(() => textareaRef.current?.focus(), 200);
                    }}
                    className="rounded-xl border border-white/10 bg-white/[0.03] hover:border-indigo-400/50 hover:bg-indigo-600/10 px-4 py-3 text-left text-sm text-white/80 leading-relaxed transition"
                  >
                    <span className="text-indigo-400/70 font-bold mr-1">{i + 1}.</span>
                    <em>{filled}</em>
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── WRITE ── */}
        {phase === "write" && image && (
          <div className="px-4 pt-4 pb-6">
            {/* Image small */}
            <div className="relative rounded-xl overflow-hidden mb-4 h-32">
              <img src={image.file} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                <span className="text-white/80 text-xs italic max-w-full line-clamp-2">
                  „{chosenStarter}"
                </span>
              </div>
            </div>

            {/* Word chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {allChosenWords.map((w) => (
                <button
                  key={w}
                  onClick={() => setStoryText((t) => t + (t.endsWith(" ") || t === "" ? "" : " ") + w + " ")}
                  className="rounded-full bg-indigo-600/25 border border-indigo-400/35 px-2.5 py-0.5 text-xs text-indigo-200 hover:bg-indigo-600/40 transition active:scale-95"
                  title="Klicken = ins Textfeld einfügen"
                >
                  + {w}
                </button>
              ))}
            </div>

            <p className="text-indigo-200/70 text-xs mb-2">
              ✏️ Schreibe jetzt deine Geschichte weiter. Klicke auf die Wörter oben, um sie einzufügen!
            </p>

            <textarea
              ref={textareaRef}
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
              placeholder="Schreibe hier deine Geschichte..."
              className="w-full rounded-xl bg-white/5 border border-indigo-500/25 text-white/90 text-sm p-4 resize-none focus:outline-none focus:border-indigo-400/60 leading-7 placeholder:text-white/25"
              rows={7}
            />

            <div className="flex items-center justify-between mt-2 mb-4">
              <span className={`text-xs ${wordCount >= 30 ? "text-emerald-400" : wordCount >= 15 ? "text-amber-400" : "text-white/40"}`}>
                {wordCount} Wörter {wordCount >= 30 ? "✓ Super!" : wordCount >= 15 ? "– fast fertig!" : "– schreibe noch mehr!"}
              </span>
              <span className="text-white/30 text-xs">mind. 30 Wörter empfohlen</span>
            </div>

            {/* Tipp-Box */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 mb-4">
              <p className="text-amber-200/80 text-xs leading-relaxed">
                💡 <strong>Schreibtipp:</strong> Benutze Adjektive! Statt „der Baum" schreibe
                „der <em>knorrige, schwarze</em> Baum". Beispiel: <em>„{image.tipSatz}"</em>
              </p>
            </div>

            <button
              onClick={advance}
              disabled={wordCount < 5}
              className={`w-full rounded-full py-3 text-sm font-bold transition ${
                wordCount >= 5
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-white/5 text-white/30 cursor-not-allowed"
              }`}
            >
              {wordCount < 5 ? "Schreibe noch etwas…" : "Geschichte fertigstellen →"}
            </button>
          </div>
        )}

        {/* ── RESULT ── */}
        {phase === "result" && image && (
          <div className="px-4 pt-6 pb-6">
            <div className="text-center mb-5">
              <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="text-4xl mb-2">🌟</motion.p>
              <h2
                className="text-2xl font-black"
                style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Deine Geschichte ist fertig!
              </h2>
              <p className="text-white/45 text-sm mt-1">{image.emoji} {image.title}</p>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4 h-40">
              <img src={image.file} alt={image.title} className="w-full h-full object-cover" />
            </div>

            {/* Story */}
            <div className="rounded-2xl border border-indigo-500/30 bg-[#0c0a22] p-5 mb-4">
              <p className="text-[10px] uppercase tracking-widest text-indigo-300/50 mb-3">📖 Meine Geschichte</p>
              <p className="text-white/90 text-sm leading-8">{fullStory}</p>
              {allChosenWords.length > 0 && (
                <div className="mt-4 pt-3 border-t border-indigo-500/20">
                  <p className="text-[10px] uppercase tracking-widest text-indigo-300/50 mb-2">Meine Schlüsselwörter:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {allChosenWords.map((w) => (
                      <span key={w} className="rounded-full bg-indigo-600/25 border border-indigo-400/30 px-2 py-0.5 text-xs text-indigo-200">{w}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bewertungs-Checkliste */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 mb-4">
              <p className="text-emerald-300/80 text-xs font-bold uppercase tracking-wider mb-2">✅ Checkliste für deinen Aufsatz:</p>
              <ul className="text-emerald-200/70 text-xs space-y-1.5">
                {[
                  "Habe ich einen spannenden Anfang geschrieben?",
                  "Habe ich Adjektive und Stimmungswörter verwendet?",
                  "Gibt es einen Höhepunkt in meiner Geschichte?",
                  "Weiß der Leser am Ende, was passiert ist?",
                  "Habe ich Satzzeichen richtig gesetzt?",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => window.print()}
                className="flex-1 rounded-full border border-indigo-400/40 bg-indigo-600/15 px-4 py-2.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/25 transition"
              >
                🖨️ Drucken
              </button>
              <button
                onClick={() => {
                  setPhase("intro");
                  setImage(null);
                  setSelectedSee([]);
                  setSelectedHear([]);
                  setSelectedFeel([]);
                  setChosenStarter("");
                  setStoryText("");
                }}
                className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/[0.08] transition"
              >
                🔄 Neues Bild
              </button>
              {onDone && (
                <button
                  onClick={() => onDone(Math.min(100, wordCount * 2))}
                  className="flex-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-bold text-white hover:scale-105 active:scale-95 transition"
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
